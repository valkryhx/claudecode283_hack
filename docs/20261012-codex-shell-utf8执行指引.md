# Codex 在 Windows 下的 Shell 与中文 UTF-8 执行指引（优化版）

- 日期：2026-10-12
- 目的：修正「Codex 经常误用 PowerShell / 中文写文件乱码」的反复问题，给出一份可直接替换/补充 developer_instruction 的说明。
- 适用环境：Windows 10/11 + Git for Windows（Git Bash）。
- 配套：`docs/windows-git-bash-execution-note.md`（早期分析，结论已被本文实测修正）。

---

## 0. 一句话结论

**`exec_command` 的默认 shell 是 PowerShell。**
要写文件、跑 UTF-8 中文命令，**必须显式传 `shell="bash"` 且 `login=false`**；不显式指定时走 PowerShell，中文与 `<<` / `$(...)` / `&&` 等 Bash 语法都会出问题。

---

## 1. 根因：默认 shell 是 PowerShell，不是 Git Bash

实测（同一环境、同一工作目录）：

| 调用 | 输出 | 结论 |
| --- | --- | --- |
| `shell="bash"`, `login=false` | `0=/usr/bin/bash`、`BASH_VERSION=5.2.37`、`MINGW64_NT-10.0-26200`，且 `LANG=C.UTF-8` / `LC_ALL=C.UTF-8` 自动注入 | 走 **Git Bash** ✅ |
| 省略 `shell` | `0=` 空、`BASH_VERSION=` 空、`PSVersion=...` 存在 | 走 **PowerShell** ❌ |

**这解释了此前的矛盾现象**：agent 口头说「我在 Git Bash」，实际执行的是 PowerShell，于是出现：

- `ParserError: 重定向运算符后缺少文件规范`（PowerShell 不认 `<<` / `<` / `>` 的 bash 用法）；
- 中文文件名/参数经 shell 往返后变成乱码（`\udc89` 之类的 surrogate）；
- `&&`、`$(...)`、单引号 here-string 行为与预期不符。

> 结论：**不要依赖默认 shell，也不要「声称」自己在 Git Bash——用 `shell` 参数显式声明。**

### 1.1 关于「`shell="bash"` 会命中 WSL」的澄清

早期文档 `docs/windows-git-bash-execution-note.md` 担心 `shell="bash"` 会解析到 PATH 里的 WSL 别名（`C:\Windows\System32\bash.exe`）。该担心**理论上成立**：本机 PATH 中确实存在这些 WSL 别名。

但**实测 harness 对 `shell="bash"` 是钉到 Git Bash 的**（`0=/usr/bin/bash`），并未走 PATH 解析，因此可用。若在别的机器/执行器上真的命中 WSL，请用 §2.2 的兜底方案（绝对路径），它不依赖 PATH。

---

## 2. 正确用法

### 2.1 首选（推荐模板）

```text
exec_command(
  cmd   = "<bash 脚本>",
  shell = "bash",        # ← 必须显式；否则走 PowerShell
  login = false,         # ← 默认；除非确实需要 shell 启动文件
  workdir = "D:\git_codes\claudecode283_hack",
)
```

### 2.2 兜底（当 `shell="bash"` 真的命中 WSL 别名时）

用 PowerShell 包装器调**绝对路径** Git Bash：

```powershell
exec_command(
  shell = "powershell",
  login = false,
  cmd   = "& 'D:\Git\bin\bash.exe' -lc '<script>'"
)
```

该方式不依赖 PATH，最确定。

### 2.3 处理中文路径 / 参数 / 输出时，额外设置 locale

首选方式已自动注入，一般无需手写；若走兜底或不确定，可在脚本最前面加：

```bash
export LANG=C.UTF-8
export LC_ALL=C.UTF-8
```

### 2.4 写文本文件：一律 UTF-8 无 BOM、LF

- Bash 里用**单引号 heredoc**，直接交给 `cat > file`：

  ```bash
  cat > "docs/中文名.md" << 'EOF'
  ...中文内容...
  EOF
  ```

- Python 写文件必须显式：

  ```python
  open(path, "w", encoding="utf-8", newline="\n")   # 不要用默认 newline，否则 \n 会被翻成 \r\n
  ```

- **禁止**用 GBK / 936 / ANSI 作为「绕过乱码」的手段——那只会把乱码写进文件。

---

## 3. 已验证会踩的坑（含复现与规避）

| # | 现象 | 触发 | 规避 |
| --- | --- | --- | --- |
| 1 | `ParserError: 重定向运算符后缺少文件规范` | 省略 `shell`，用 `<<` / `<` / `>` | 显式 `shell="bash"` |
| 2 | 中文文件名变 `ʵ��ȱ���` 之类 | 中文经 shell 参数往返 | 文件名尽量 ASCII，或用 heredoc 直写 |
| 3 | `UnicodeEncodeError: ... '\udc89'` | `python -c` 文本参数 + 中文，按控制台编码解码 | 中文内容走 heredoc 或 `sys.stdin.buffer` |
| 4 | 控制台 `print` 中文乱码，但文件其实是对的 | 控制台代码页 GBK | **以字节校验为准**（见 §5） |
| 5 | 反斜杠被吃（如 `D:\Git\bin` 变 `D:\Gitinash`） | 经 `python -c` 或多次 shell 往返，`\b`/`\a`/`\G` 被当转义 | 用原始字符串或 `chr(92)` 构造；优先 heredoc 直写 |
| 6 | `rm -f` / 递归删除被拒 | 安全规则 | 用 Python `os.remove()` 删单个文件；不递归删 |
| 7 | `python3` 命中 WindowsApps 存根 | PATH | 用 `python` |
| 8 | bash 写 `/tmp/x`，`python` 读不到 | Git Bash 的 `/tmp` 与 Windows 版 `python` 不互通 | 用工作区内 Windows 路径 |
| 9 | bash 传 `/d/...` 给 `python`，找不到文件 | Windows 版 `python`/`node` 不认 POSIX 路径 | 给 Windows 程序传 `D:\...` 或 `D:/...` |

---

## 4. 规则清单（可直接并入 developer_instruction）

1. **命令执行统一用 Git Bash**：`exec_command` 显式 `shell="bash"`、`login=false`；只有需要 shell 启动文件时才 `login=true`。
2. **不要切 shell 绕过沙箱失败**：若 Git Bash 命令因 Windows 沙箱失败，用 `sandbox_permissions="require_escalated"` + 窄范围 justification 重试，而不是换 PowerShell/cmd。
3. **中文/UTF-8 场景设 locale**：`LANG=C.UTF-8`、`LC_ALL=C.UTF-8`（首选方式已自动注入）。
4. **文本文件 UTF-8 无 BOM、LF**：Python 用 `encoding="utf-8", newline="\n"`；禁用 GBK/936/ANSI。
5. **中文内容优先 heredoc 直写**，避免经 `python -c` 参数或 shell 变量往返。
6. **中文校验看字节，不看终端回显**：读 `rb` 后 `decode("utf-8")`，或直接看 `hex`。
7. **反斜杠路径**：不要放进会被转义解析的字符串层；用原始字符串或 `chr(92)` 构造。
8. **删除**：绝不 `rm -rf`/递归删除；单文件用 Python `os.remove()`，且不删工作目录之外。
9. **escalation 只读/窄范围**，不用于绕过安全规则。
10. **路径格式不可混用**：Git Bash 内用 POSIX 路径（`/d/...` 或相对路径）；Windows 程序（`python` / `node`）**不认** `/d/...`，要传原生路径（`D:\...` 或 `D:/...`）。

---

## 5. 中文正确性校验方法（推荐固化）

写完含中文的文件后，用**字节级**校验，而不是肉眼/终端：

```python
import os
raw = open(path, "rb").read()
txt = raw.decode("utf-8")        # 不抛异常 => 是合法 UTF-8
assert "\r" not in txt           # LF-only
```

需要看中文时，用 `sys.stdout.buffer` 写 UTF-8，绕过 GBK 控制台：

```python
import sys
sys.stdout.buffer.write(("校验行：" + txt.split("\n")[0] + "\n").encode("utf-8"))
```

---

## 6. 附：本次诊断证据

```text
# shell="bash"
SHELL=/usr/bin/bash.exe
0=/usr/bin/bash
BASH_VERSION=5.2.37(1)-release
MINGW64_NT-10.0-26200 valkry 3.5.4-395fda67.x86_64 2024-11-25 09:49 UTC x86_64 Msys
LANG=C.UTF-8 LC_ALL=C.UTF-8

# 省略 shell
0=
BASH_VERSION=
PSVersion=System.Management.Automation.PSVersionHashTable

# shell="powershell" + 绝对路径 Git Bash（兜底，同样可用）
0=/usr/bin/bash
BASH_VERSION=5.2.37(1)-release
MINGW64_NT-10.0-26200
```

> 说明：本机同时存在 Git Bash 与 PowerShell；`exec_command` 不显式指定 `shell` 时走后者。
