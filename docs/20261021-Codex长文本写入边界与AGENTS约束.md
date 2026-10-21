# Codex 长文本写入边界与 AGENTS 约束

> 日期：2026-10-21  
> 目的：解释“单条 exec_command 写入长文档被截断”的真实边界，并固化可执行的写作规则。  
> 结论先行：**不要按 Windows 32K 上限写长文。长文必须分段追加；单段正文保守按 4K 字符左右，任何情况下不超过 8KB。**

## 1. 两个完全不同的限制

| 层 | 限制 | 触发后的现象 |
| --- | --- | --- |
| Codex tool-call 参数/传输层 | 无公开固定阈值；上下文、模型工具参数额度和传输共同决定，实测可在约 2 万至 4 万字符附近出现不可靠 | heredoc 未闭合、文件只写入前半段、命令尾部消失 |
| Windows `CreateProcessW` | 命令行硬上限 32767 UTF-16 code units | `WinError 206` / `os error 206`，进程根本未启动 |

不能用第二层的大上限反推第一层安全，也不能把 heredoc 未闭合误判成编码或 Bash 语法问题。

## 2. Codex 源码事实

- `codex-rs/core/src/shell.rs` 的 `derive_exec_args()` 把完整 `cmd` 作为 Bash 的 `-c` 参数；
- `codex-rs/core/src/tools/handlers/unified_exec.rs` 的 `get_command()` 直接使用 `args.cmd`；
- `codex-rs/core/src/tools/handlers/unified_exec/exec_command.rs` 的 `cmd` 是无 `maxLength` 的普通 string；
- 其中 `EXEC_COMMAND_REJECTION_MAX_BYTES = 900` 只截断失败后的错误说明，不是命令入参限制；
- `codex-rs/utils/pty/src/win/psuedocon.rs` 把 argv 编码为 UTF-16 command line，最终调用 `CreateProcessW`。

## 3. 实测证据

### 3.1 OS 层

本机 Git Bash 用 `true #` 加重复字符测边界：

| 重复字符 | 成功 | 失败 |
| --- | --- | --- |
| ASCII `x` | 32735 chars（本次探针调用；不同 argv 开销约 ±20） | 32736 chars，`WinError 206` |
| 中文 `中`（BMP） | 32735 chars（同一旧探针） | 32736 chars，`WinError 206` |

- 限制单位是 UTF-16 code units，不是 UTF-8 字节；
- 12000 个中文（约 36KB UTF-8）仍可执行；
- Emoji 等代理对字符占 2 个 UTF-16 code units；
- 可复现探针：`docs/probes/20261021-codex-command-length-probe.py`。再次实测在 `--lo 32730 --hi 32740` 下最大可执行体为 32730，32731 已失败；因此精确数字会随 argv 前缀有少量浮动，硬上限仍是 32767 UTF-16 总量。
- 原始探针样本保留在 `docs/probes/20261021-codex-long-write-probes/`。

### 3.2 实际 tool-call 截断案例

2026-10-20 写 `claudecode303/extracted/20261020-hooks入口分析.md` 时：

- 原命令：30,845 chars / 40,460 UTF-8 bytes / 706 行；
- 原命令末尾确实包含 heredoc 的 `EOF` 和后续 Python 校验；
- Bash 报：`here-document at line 2 delimited by end-of-file (wanted EOF)`；
- 只收到前半段，`EOF` 未到达。

证据文件：`docs/probes/20261021-codex-long-write-probes/tool-call-truncation-evidence.json`。

同日另一条 45,712 chars / 1,492 行的命令在 Windows 启动阶段报 `os error 206`，说明**大命令还可能连 CreateProcessW 都过不去**。

### 3.3 同会话中成功过的尺寸

历史会话中出现过多条 2 万 chars 左右成功写入，但这只是“有时可用”，不是安全契约。长文偶发丢失正是反复重试和浪费 token 的来源，所以不能以历史最大成功值作为上限。

## 4. 自我约束：按正文大小分段

### 4.1 硬规则

1. **禁止把整篇长文放进一次 `exec_command`。**
2. 单段正文预算：
   - 中文：约 **2K-4K 字符**；
   - ASCII/代码：**不超过 8KB**；
   - 无论语言，单条命令的目标总长 **≤ 8KB**，绝不超过 12KB。
3. 超过预算时，按 Markdown 章节边界拆分：
   - 第一段用 `cat > file <<'MDOC_20261021_A7F3'`；
   - 后续段用 `cat >> file <<'MDOC_20261021_A7F3'`；
   - 每次使用新的唯一 delimiter，正文结束后用完全相同的单独一行闭合；
   - **禁止用裸 `EOF` 包裹可能包含 `EOF` 行的长文**：引号只关闭 shell 展开，不改变 delimiter 的匹配规则。
4. 不要拆开以下结构：
   - 成对的 code fence；
   - 一个 JSON object；
   - 表格中不可分隔的一行；
   - 正在引用的源码片段。
5. 每段写完后检查文件存在、UTF-8 合法；全文完成后校验：
   - UTF-8 可解码；
   - 无 BOM；
   - LF（`grep -c $'\r' file` 为 0）；
   - 最后一段确实落盘，尾部标记/章节存在。

### 4.2 推荐模板

第一段使用覆盖写入：

```bash
cat > "docs/20261021-示例.md" <<'MDOC_9c1b'
# 标题

第一段正文。
MDOC_9c1b
```

后续段使用追加写入：

```bash
cat >> "docs/20261021-示例.md" <<'MDOC_9c1b'

## 第二节

第二段正文。
MDOC_9c1b
```

每段都在章节边界结束，并保留独立、成对的 heredoc 标记。

### 4.3 截断后的正确响应

看到 `here-document ... delimited by end-of-file (wanted ...)` 时，按顺序区分两类原因：

1. **同名 delimiter 碰撞**：正文中存在与外层 delimiter 完全相同的单独一行，heredoc 被提前结束；检查文件中该 delimiter 行，换唯一 delimiter 重写该段；
2. **命令截断**：原命令末尾的闭合 delimiter 没到达 Bash；检查文件尾部，从最后一个完整章节继续，并改用更小的分段；
3. 两种情况都不得原样重试同一条大命令。
