# claudecode283 — 分析输入物

本次「挖 Claude Code dynamic workflow」分析的输入物快照。

## 内容

| 文件 | 大小 | 说明 |
| --- | --- | --- |
| `claude.exe` | 244,960,928 B | **唯一必需的输入物**，Claude Code v2.1.283 |

## 二进制溯源

| 项 | 值 |
| --- | --- |
| 来源路径 | `C:\Users\Administrator\.local\bin\claude.exe` |
| 原始修改时间 | 2026-09-26 21:53:51 |
| 大小 | 244960928 B |
| SHA256 | `9DBE16DAFED59DA5CDABBFE11AD0335738C753FAD794989B47F9446ACCD6DE3A` |
| 拷贝后校验 | MATCH（与源文件逐字节一致） |

> **样本路径说明（历史记录）**：文中出现的 `C:\Users\Administrator\...` 是**原始分析机**上的路径，保留原样、仅作历史记录。
> 本机对应位置是 `C:\Users\drago\.local\bin\claude.exe`，但那是 **v2.1.296**，与本次分析对象（**v2.1.283**）不是同一文件；
> 复现时请把 **v2.1.283** 的 `claude.exe` 放回 `claudecode283/claude.exe`。

## 目标程序事实

| 项 | 值 |
| --- | --- |
| 格式 | PE32+ executable (console), x86-64 |
| 版本 | Claude Code 2.1.283 |
| ImageBase | 0x140000000 |
| 段数 | 13 |
| 载荷段 | `.bun` @ VA 0x145B74000（文件偏移 0x5951400，144 MB） |
| 打包方式 | Bun `--compile` 单文件（`Bun.isStandaloneExecutable`） |
| JS 是否明文 | **是**（minify，非混淆） |
| 模块数 | 2,137 个 `// @bun @bytecode` 标记，2,132 个有效模块 span |

## 不在这里的东西

**IDA 数据库没有拷贝**，原因：

- IDA 当前正打开着这个库，`claude.exe.id0` / `.id1` / `.nam` 被**独占锁定**，读不出来
- 实测只有 `.id2`（55 KB）和 `.til`（71 KB）可读，单独拿没有意义
- 而且它是**派生产物**（IDA 对 claude.exe 的分析结果），不是输入

需要的话，先关掉 IDA（会把库打包成 `claude.exe.i64`），再拷：

```powershell
Copy-Item -LiteralPath 'C:\Users\Administrator\.local\bin\claude.exe.i64' -Destination 'D:\git_repos\claude_hack\claudecode283\'
```

也可以随时重新生成：用 IDA 打开 `claudecode283\claude.exe` 即可。

**注意**：本次分析中 IDA 并非必需。真正有效的路径是直接读原始文件，
详见 `..\docs\bun-standalone-re.md`。

## 配套分析产物（在上一级目录）

| 路径 | 说明 |
| --- | --- |
| `..\docs\bun-standalone-re.md` | 方法论文档（PE 映射、模块切片、避坑） |
| `..\tools\bunpeek.py` | 配套工具（段表 / 模块提取 / 搜索 / 偏移↔VA） |
| `..\README.md` | 项目入口 |

## 复现

```bash
cd /d/git_repos/claude_hack
EXE="D:/git_repos/claude_hack/claudecode283/claude.exe"

python tools/bunpeek.py "$EXE" info
python tools/bunpeek.py "$EXE" find "dynamic workflow" --max 5
python tools/bunpeek.py "$EXE" module 'var Fd="Workflow"'
python tools/bunpeek.py "$EXE" off 0x5CEB420
```

已知定位点（.bun 段）：

| VA | 文件偏移 | 内容 |
| --- | --- | --- |
| 0x145F0E020 | 0x5CEB420 | `WORKFLOW_LAUNCH_DIGEST_ENV` |
| 0x145F14FC0 | 0x5CF23C0 | `WORKFLOW_TOOL_NAME` |
| 0x145F18350 | 0x5CF5750 | `WorkflowTool` |
| 0x145FD3C14 | 0x5DB1014 | `dynamic workflow` |
| 0x14609ABFC | 0x5E77FFC | `.claude/workflows/` |
| 0x14C7B5735 | 0xC592B35 | `var Fd="Workflow"`（工具名定义处） |
