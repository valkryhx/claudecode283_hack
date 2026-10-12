# claude_hack

分析 Claude Code（`claude.exe`）内部实现的试验场。

## 内容

| 路径 | 说明 |
| --- | --- |
| `AGENTS.md` | **★ 实施指南 / 交接文档：后续 agent 从这里开始** |
| `docs/bun-standalone-re.md` | **主文档（怎么做）**：Bun 单文件可执行程序逆向指南，以挖出 "dynamic workflow" 为完整案例 |
| `docs/why-source-is-readable.md` | **原理（为什么能）**：为何源码可直接读——Bun `--compile` 把源码当数据嵌入 |
| `tools/bunpeek.py` | 配套工具，零依赖。段表 / 模块提取 / 字符串搜索 / 偏移<->VA 互转 |
| `reconstructed/` | 从 `.bun` 抽出的全部 2135 个模块源码。**格式化 + 去混淆后的可读代码在 `reconstructed/deminified/`** |
| `claudecode283/modules/` | 原始明文 JS 模块（Bun `--compile` 载荷，minify 未混淆） |

## 核心结论

`claude.exe` 是 Bun `--compile` 产物，整个 JS 模块图以**明文**存在 PE 的 `.bun` 段里。
找功能直接 grep 原始文件，IDA 只用来做地址导航。

> 为什么能直接读到源码：Bun `--compile` 把源码当数据塞进可执行文件，**没有编译成机器码**。
> 详见 `docs/why-source-is-readable.md`。

## 可读化成果（`reconstructed/`）

| 目录 | 说明 |
| --- | --- |
| `full/` | 全部 **2135** 个模块，格式化（标识符仍是压缩名） |
| `deminified/` | 全部 **2135** 个模块，**证据驱动的去混淆重命名**（79325 处）★ |
| `raw/ readable/ renamed/` | workflow 子系统 **1278** 个声明的逐函数精读版（人工命名） |

命名方法与证据分级：`reconstructed/NAMING-METHOD.md`（人工）、`reconstructed/AUTO-NAMING.md`（自动全量）。
每一处自动改名都记在 `reconstructed/deminify-names.json`，可逐条回查证据。

## 快速上手

```bash
EXE="C:/Users/Administrator/.local/bin/claude.exe"

python tools/bunpeek.py "$EXE" info
python tools/bunpeek.py "$EXE" find "dynamic workflow" --max 5
python tools/bunpeek.py "$EXE" module 'var Fd="Workflow"'
python tools/bunpeek.py "$EXE" off 0x5CEB420
```

## 已知样本

| 项 | 值 |
| --- | --- |
| 路径 | `C:\Users\Administrator\.local\bin\claude.exe` |
| 大小 | 244,960,928 字节 |
| 版本 | Claude Code v2.1.283 |
| 格式 | PE32+ x86-64，13 段 |
| ImageBase | 0x140000000 |
| 载荷段 | `.bun` @ VA `0x145B74000`（文件偏移 `0x5951400`） |

> **样本路径说明（历史记录）**：文中出现的 `C:\Users\Administrator\...` 是**原始分析机**上的路径，保留原样、仅作历史记录。
> 本机对应位置是 `C:\Users\drago\.local\bin\claude.exe`，但那是 **v2.1.296**，与本次分析对象（**v2.1.283**）不是同一文件；
> 复现时请把 **v2.1.283** 的 `claude.exe` 放回 `claudecode283/claude.exe`。

## 警告

**不要**在 IDA 里对 245MB 的二进制跑 `db.strings.rebuild()`。
实测会卡住 GUI 主线程 20 分钟，积压所有 MCP 请求。详见主文档第 2 节。