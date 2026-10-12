# Windows 上 Git Bash 的执行方式：`shell="bash"` 为什么有误导性

本文记录本机（Windows）使用 `exec_command` 调用 Git Bash 的正确方式，以及通用说明
`Use exec_command with shell="bash" and login=false` 为什么在本环境下有误导性。

---

## 结论

在这个 Windows 环境下，那段说明**有误导性，而且前后矛盾**。

它前半句说：

```text
prefer Git Bash by D:\Git\bin\bash.exe -lc your_command
```

后半句却说：

```text
Use exec_command with shell="bash" and login=false
```

这两者不是一回事。

---

## 为什么 `shell="bash"` 会出问题

本机 PATH 里的 `bash` 很可能解析到：

```text
C:\Windows\System32\bash.exe
```

或 WindowsApps 的 WSL 别名，而不是 Git Bash。

所以会出现：

```text
适用于 Linux 的 Windows 子系统没有已安装的分发版
```

而真正的 Git Bash 是：

```text
D:\Git\bin\bash.exe
```

它不在 `bash` 这个 basename 的默认解析结果里。

---

## 本机正确写法

应该用外层 PowerShell，再显式调用 Git Bash 绝对路径：

```powershell
exec_command(
  shell="powershell",
  login=false,
  cmd="& 'D:\\Git\\bin\\bash.exe' -lc 'your command'"
)
```

也就是：

```text
shell 参数 = powershell
login      = false
cmd        = & 'D:\Git\bin\bash.exe' -lc '...'
```

不要写成：

```text
shell="bash"
```

因为 `shell` 参数可能按 basename 去 PATH 里找 `bash`，从而命中 WSL 别名。

---

## 如果工具支持绝对路径 shell

理论上可以写：

```text
shell="D:\Git\bin\bash.exe"
login=false
```

但本项目 `AGENTS.md` 已经明确建议不要依赖这种方式，因为不同执行器对 `shell` 字段的处理不一样，
有的仍可能按 basename 解析。最稳的是：

```text
shell="powershell" + cmd="& 'D:\Git\bin\bash.exe' -lc '...'"
```

---

## `login=false` 有没有错

`login=false` 本身没错。

它控制的是**外层 shell** 是否加载登录启动文件。
Git Bash 的 `-l` 是在命令内部显式传给 `bash.exe` 的，和 `exec_command` 的 `login` 参数不是同一层含义。

所以正确组合是：

```text
exec_command(
  shell="powershell",
  login=false,
  cmd="& 'D:\\Git\\bin\\bash.exe' -lc '...'"
)
```

---

## 建议改写

那段通用说明如果给 agent 用，建议改成：

```text
On Windows, prefer Git Bash via:
  exec_command with shell="powershell", login=false
  and cmd="& 'D:\\Git\\bin\\bash.exe' -lc '<command>'"

Do not use shell="bash" on this machine, because it may resolve to WSL.
Use login=true only when PowerShell startup files are explicitly required.
```

---

## 一句话总结

- 在 Linux/macOS 语境下，`shell="bash"` 可能没问题；
- 在本机 Windows + Git Bash 环境下，**有误导性**；
- 正确做法是 `shell="powershell"` + 绝对路径调用 `D:\Git\bin\bash.exe`。
