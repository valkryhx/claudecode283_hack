# Bun 单文件可执行程序逆向指南

以 `claude.exe` 里挖出 "dynamic workflow" 为例

- 记录时间：2026-10-11
- 目标样本：`C:\Users\Administrator\.local\bin\claude.exe`
- 样本信息：244,960,928 字节，PE32+ x86-64，Claude Code **v2.1.283**

---

> **为什么源码能直接读？** 见 `why-source-is-readable.md`（Bun `--compile` 把源码当数据嵌入）。本文只讲"怎么做"。

---

## 0. 一句话结论

`claude.exe` 是 **Bun `--compile` 产物**。整个 JS 模块图以**明文**躺在 PE 的 `.bun` 段里。

所以"在 IDA 里找某个功能"的正确姿势是：

> **直接读原始文件做 grep，拿到文件偏移；再把偏移换算成 VA，用 IDA 做导航和标注。**
> 对 `.bun` 段做反编译没有意义——它是数据，不是代码。

回答"你是直接看的 exe 吗"：**是的**。IDA 全程只干了两件事——开头确认连接、最后用 `get_strlit_contents` 验证地址对得上。

---

## 1. 先判断目标是不是 Bun 单文件

任一条命中基本就实锤：

| 探针 | 本样本命中数 |
| --- | --- |
| `Bun.isStandaloneExecutable` | 1 |
| `B:/~BUN/root/` | 161,535 |
| `/$bunfs/root/` | 1 |
| `// @bun @bytecode` | 2,137（其中 2,132 个是有效模块 span）|

PE 段表里有 `.bun`（本样本 144MB）和 `.bunblt`，也是典型特征。

```bash
python tools/bunpeek.py "C:/Users/Administrator/.local/bin/claude.exe" info
```

---

## 2. 第一个坑：不要在 IDA 里 rebuild 字符串表

我第一次上手就在 IDA MCP 里跑了 `db.strings.rebuild()` 然后遍历 `get_all()`。

结果在 245MB 的二进制上跑了 **20 分钟**，期间把 IDA GUI 主线程占死：

- 后续所有 `execute_python` 请求全部排队，客户端 300s 超时
- 连 `1+1` 都返回不了
- MCP 会话日志里积压了 4 条 pending `tool_call`

**教训：**

- 大二进制（>50MB）上永远不要跑全量 `strings.rebuild()` / 遍历 `get_all()`
- 按地址取值用 `ida_bytes.get_strlit_contents(va, -1, 0)`
- 按内容找就用原始文件 grep，不要经 IDA
- 已经卡住时：在 IDA 里按 Esc / Ctrl+C，或关掉 "Please wait" 对话框

判断 IDA 是不是被卡住，看 MCP 会话日志（`tool_call` 有没有对应的 `tool_result`）：

```bash
python - << 'PYEOF'
import json
p = "C:/Users/Administrator/AppData/Roaming/Hex-Rays/IDA Pro/mcp/sessions/<session-id>.jsonl"
calls, res = {}, set()
for line in open(p, encoding="utf-8", errors="replace"):
    j = json.loads(line)
    if j.get("event") == "tool_call":
        calls[j["call_id"]] = (j.get("ts"), j.get("tool"))
    elif j.get("event") == "tool_result":
        res.add(j["call_id"])
for cid, (ts, t) in calls.items():
    print("OK  " if cid in res else "PEND", ts, t)
PYEOF
```

---

## 3. 正确的取数路径

### 3.1 直接 grep 原始文件

```bash
grep -aob -i 'workflow' /c/Users/Administrator/.local/bin/claude.exe | head -100
```

- `-a` 当文本处理（别让 grep 判成 binary 就跳过）
- `-o` 只输出匹配本身
- `-b` 带**字节偏移**

245MB 扫完约 1.7 秒。

### 3.2 取上下文

bash 的 `dd` + `od` 能用，但取上下文还是 Python 省事。
注意外层 PowerShell 会抢 `$`，所以用**单引号外层 + heredoc**：

```powershell
& 'E:\Git\bin\bash.exe' -lc 'python - << "PYEOF"
import re
d = open("C:/Users/Administrator/.local/bin/claude.exe", "rb").read()
for m in re.finditer(rb"dynamic workflow", d, re.I):
    i = m.start()
    print("off 0x%x" % i)
    print("".join(chr(b) if 32 <= b < 127 else "." for b in d[i-200:i+300]))
PYEOF'
```

### 3.3 关键技巧：用 `// @bun @bytecode` 切模块

Bun 把每个模块的**完整源码**顺序存下来，每个模块以这一行开头：

```
// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
...
// Version: 2.1.283
<这里才是真正的 JS 源码>
```

所以：

> **从命中点往前找最近的 `// @bun @bytecode`，往后找下一个，中间就是完整的模块源码。**

本样本 2,137 个 marker，中位间距约 4.8KB。
这一招把"找到一个字符串"升级成"拿到整个模块实现"。

**坑：模块源码和字符串表/字节码表在同一个段里。**
直接按"下一个 marker"切，会切出几个荒谬的超大块（本样本最大一块 117MB，
把整张字符串表都包进去了）。所以切模块时要丢掉过大的 span，
命中落在这种区域里就说明**它只是字符串表项，不是模块源码**，退回用 `find` 即可。
`bunpeek.py` 已经做了这件事（默认丢掉 >1MB 的 span，可用 `--max-size` 调）。

```bash
python tools/bunpeek.py "C:/Users/Administrator/.local/bin/claude.exe" module 'var Fd="Workflow"'
```

### 3.4 别指望模块路径和模块顺序一一对应

模块路径表（`B:/~BUN/root/chunk-xxxx.js`）和模块体是**两套独立排序**，实测对不上：

- 路径表 2,133 条，模块体 2,137 个
- `chunk-y2pt1fm0.js` 在路径表里是第 **730** 条，但它的模块体是第 **253** 个

所以不要用索引对齐，**老老实实按符号内容搜**。

---

## 4. 文件偏移 -> IDA 地址

PE 段表换算公式：

```
VA = ImageBase + Section.VirtualAddress + (FileOffset - Section.PointerToRawData)
```

本样本 `ImageBase = 0x140000000`，段表：

| 段名 | RVA | RawPtr | VirtSize | RawSize |
| --- | --- | --- | --- | --- |
| .text | 0x1000 | 0x400 | 0x4123A1E | 0x4123C00 |
| .rdata | 0x4125000 | 0x4124000 | 0x14331D8 | 0x1433200 |
| .data | 0x5559000 | 0x5557200 | 0x238920 | 0x1C800 |
| .pdata | 0x5792000 | 0x5573A00 | 0xEB938 | 0xEBA00 |
| .bunblt | 0x587E000 | 0x565F400 | 0x27F2B8 | 0x27F400 |
| .rsrc | 0x5B0E000 | 0x58EC800 | 0x3102C | 0x31200 |
| .reloc | 0x5B40000 | 0x591DA00 | 0x33878 | 0x33A00 |
| **.bun** | **0x5B74000** | **0x5951400** | **0x904905D** | **0x9049200** |

于是 `.bun` 的 VA 起点 = `0x140000000 + 0x5B74000` = **`0x145B74000`**。

验证一下：文件偏移 `0x5CEB420` -> VA `0x145B74000 + (0x5CEB420 - 0x5951400)` = `0x145F0E020`。

---

## 5. 在 IDA 里验证 / 导航

拿 VA 直接读字符串（**秒回，不要 rebuild**）：

```python
import ida_bytes
for va in [0x145F0E020, 0x145FEE514, 0x14609AC04, 0x14E5D1D38]:
    b = ida_bytes.get_strlit_contents(va, -1, 0)
    print(hex(va), "->", b.decode("utf-8", "replace") if b else None)
```

输出：

```
0x145f0e020 -> WORKFLOW_LAUNCH_DIGEST_ENV
0x145fee514 -> workflow
0x14609ac04 -> workflows/
0x14e5d1d38 -> WORKFLOW_TOOL_NAME};
```

其它注意点：

- GUI 后端下 `execute_python` 跑在 IDA 主线程，长脚本会卡住整个 UI
- `.bun` 段是**一段大 blob**，段内偏移可以直接算，不需要额外基址
- 这些字符串在 IDA 里通常没有 xref（纯数据），别浪费时间找引用

---

## 6. Windows / Git Bash 调用姿势

这台机器的固定套路（详见 `windows-git-bash.md`）：

```powershell
& 'E:\Git\bin\bash.exe' -lc '<script>'
```

**最容易踩的坑：外层 PowerShell 会展开 `$`。**

反面教材（`$f` 被 PowerShell 吃成空串，报 `grep: : No such file`）：

```powershell
& 'E:\Git\bin\bash.exe' -lc "f=/path; grep foo $f"     # 错
```

正确写法，二选一：

```powershell
# 方案 A：外层用单引号，内层只用双引号
& 'E:\Git\bin\bash.exe' -lc 'python tools/bunpeek.py "C:/x/claude.exe" find "workflow"'

# 方案 B：heredoc（Python 多行脚本首选）
& 'E:\Git\bin\bash.exe' -lc 'python - << "PYEOF"
...任意 Python，随便用 $
PYEOF'
```

另外两条：

- 不要用 exec 的 `shell` 参数指向 Git Bash，会命中 WSL 别名
- `strings` 命令在 Git Bash 里**不存在**，用 `tr -c '[:print:]' '\n'` 或 Python 替代

---

## 7. 工具：`tools/bunpeek.py`

零依赖（只用标准库），把上面所有步骤包成一个命令。

```bash
EXE="C:/Users/Administrator/.local/bin/claude.exe"

# 总览：段表 / 模块数 / 版本 / Bun 特征
python tools/bunpeek.py "$EXE" info

# 按正则搜内容，自动带上文件偏移 + IDA VA + 上下文
python tools/bunpeek.py "$EXE" find "dynamic workflow" --max 10 --ctx 120

# 把命中点还原成完整模块源码
python tools/bunpeek.py "$EXE" module "var Fd=" --index 0

# 偏移 <-> 地址互转
python tools/bunpeek.py "$EXE" off 0x5CEB420
python tools/bunpeek.py "$EXE" va 0x145F0E020
```

也可以当库用：

```python
import sys; sys.path.insert(0, "tools")
import bunpeek as bp
d = bp.load(EXE)
ib, secs = bp.parse_pe(d)
print(hex(bp.off2va(d, ib, secs, 0x5CEB420)))
```

---

## 8. 本次定位结果（dynamic workflow）

`.bun` 段，VA 起点 `0x145B74000`。全部是**精确字符串起始偏移**：

| IDA VA | 文件偏移 | 内容 |
| --- | --- | --- |
| 0x145F0E020 | 0x5CEB420 | `WORKFLOW_LAUNCH_DIGEST_ENV` |
| 0x145F0E044 | 0x5CEB444 | `createWorkflowLaunchState` |
| 0x145F0E0C8 | 0x5CEB4C8 | `workflowLaunchHandoffs` |
| 0x145F11D10 | 0x5CEF110 | `WorkflowPermissionDialog` |
| 0x145F14738 | 0x5CF1B38 | `WorkflowDetailDialog` |
| 0x145F14820 | 0x5CF1C20 | `registerWorkflowTask` |
| 0x145F14FC0 | 0x5CF23C0 | `WORKFLOW_TOOL_NAME`（符号表项） |
| 0x145F18350 | 0x5CF5750 | `WorkflowTool` |
| 0x145F65600 | 0x5D42A00 | `workflow_launch`（埋点，59 处） |
| 0x145F7B740 | 0x5D58B40 | `enableWorkflows` |
| 0x145F7B758 | 0x5D58B58 | `disableWorkflows` |
| 0x145F7B7A0 | 0x5D58BA0 | `workflowKeywordTriggerEnabled` |
| 0x145FC9EC0 | 0x5DA72C0 | `workflowSizeGuideline` |
| 0x145FC418C | 0x5DA158C | `ultracode` |
| 0x145FD3C14 | 0x5DB1014 | `dynamic workflow` |
| 0x145FD7460 | 0x5DB4860 | `Dynamic workflows` |
| 0x145FF1214 | 0x5DCE614 | `workflow-keyword-active` |
| 0x14609ABFC | 0x5E77FFC | `.claude/workflows/` |
| 0x14609ACE4 | 0x5E780E4 | `Save dynamic workflow` |
| 0x14609B0A8 | 0x5E784A8 | `tengu_workflow_saved` |
| 0x14609B0E0 | 0x5E784E0 | `Dynamic workflow saved to ` |
| 0x14C7B5735 | 0xC592B35 | `var Fd="Workflow"` —— **工具名的真正定义处** |

工具名 = `"Workflow"`，定义在模块体 `0xC592B35` 所属的那个模块里。
另有一个 re-export shim 模块（`0xE3AF050`）内容是：

```js
import{Fd}from"B:/~BUN/root/chunk-y2pt1fm0.js";export{Fd as WORKFLOW_TOOL_NAME};
```

---

## 9. 复现清单

```bash
EXE="C:/Users/Administrator/.local/bin/claude.exe"

# 1. 确认是 Bun 单文件
python tools/bunpeek.py "$EXE" info

# 2. 粗定位
grep -aob -i 'dynamic workflow' "$EXE" | head

# 3. 精确定位 + 上下文 + VA
python tools/bunpeek.py "$EXE" find "dynamic workflow" --max 5

# 4. 拿完整模块源码
python tools/bunpeek.py "$EXE" module 'var Fd="Workflow"'

# 5. 跳到 IDA 验证
#    Jump to address -> 0x145F0E020
```

---

## 附：本样本功能速记

`dynamic workflow` = Claude Code 的 **Workflow 工具**：

- 工具名 `"Workflow"`，触发关键词 `ultracode`（`workflowKeywordTriggerEnabled`，默认 true）
- `/workflows` 查看运行中的 workflow；`/effort ultracode` = xhigh + workflow 编排（仅当前会话）
- 一次 workflow 会拉起多个 subagent，按 phase 执行；任务类型 `local_workflow` / `workflow_agent`
- 保存到 `.claude/workflows/`，之后可用 `/<name>` 或 `Workflow({name: "..."})` 调用
- 规模建议 `workflowSizeGuideline`：small(<5 agents) / medium(<10) / large(<50) / unrestricted，默认 medium
- 关闭开关：托管设置 `disableWorkflows`、组织策略 `allow_workflows`、环境变量 `CLAUDE_CODE_DISABLE_WORKFLOWS`
- 埋点：`tengu_workflow_saved`、`tengu_workflow_keyword_dismissed`、`tengu_workflow_size_warning_shown`
