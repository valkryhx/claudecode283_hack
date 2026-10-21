# 长文本写入探针证据

这些文件保留 2026-10-21 对 Codex 单命令长文本边界的实测证据，便于后续复核，不用于生产写入。

| 文件 | 说明 |
| --- | --- |
| `ascii-4k-heredoc-body.txt` | 约 5KB 的 heredoc 成功样本 |
| `ascii-7k-truncated-output.txt` | 约 8KB heredoc 时只落盘正文、尾部命令未执行的实际输出 |
| `ascii-16k-command.sh` | 约 16KB 的独立脚本，用 `bash file` 执行可绕开超大 `-c` 参数 |
| `tool-call-truncation-evidence.json` | 2026-10-20 原始 tool-call 截断元数据与分析 |
| `../20261021-codex-command-length-probe.py` | Windows `CreateProcessW` / Git Bash argv 边界探针 |

核心结论：**运行脚本文件比把长脚本文本直接塞进 `exec_command` 的 `-c` 参数稳定。**

## delimiter 碰撞探针

外层 heredoc 使用 `<<'EOF'`、正文中又包含单独一行 `EOF` 时，Bash 会在正文中的第一个 `EOF` 处结束读取，后续正文会被当成命令执行。复现时应换用唯一 delimiter（例如 `MDOC_20261021_A7F3`），而不是只给 `EOF` 加引号。
