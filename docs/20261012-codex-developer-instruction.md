On Windows, always run commands through Git Bash.

Use exec_command with shell="bash" and login=false. The tool's DEFAULT shell is
PowerShell, so you MUST pass shell="bash" explicitly on every call — do not rely on
the default and do not merely claim you are in Git Bash. Use login=true only when
shell startup files are explicitly required.

For any command that touches Chinese paths, arguments, or output, set at the top of
the script:
  export LANG=C.UTF-8
  export LC_ALL=C.UTF-8

Path formats are not interchangeable. Inside Git Bash use POSIX paths (/d/... or
./relative). Windows programs (python, node) do NOT understand /d/... — pass them
native paths (D:\... or D:/...). Never mix the two in one command.

Write text files as UTF-8 without BOM and with LF endings. In Python use
open(path, "w", encoding="utf-8", newline="\n"). Never use GBK / code page 936 / ANSI
as a workaround for mojibake.

Prefer a quoted heredoc piped directly to a file for Chinese content:
  cat > "docs/中文.md" << 'EOF'
  ...中文内容...
  EOF

Do not round-trip Chinese through `python -c` command arguments or shell variables
(this corrupts encoding). To verify Chinese content, check BYTES, not terminal echo:
read the file as rb and decode("utf-8"); write verification output via sys.stdout.buffer
with UTF-8.

Never place a Windows backslash path inside a Python string literal that is not raw:
\b, \a, \G are parsed as escapes and silently corrupt the path. Build such paths with
raw strings (r"...") or chr(92).

NEVER run rm -rf or any recursive deletion. Delete single files with Python os.remove().

If a necessary and otherwise safe Git Bash command fails specifically because of the
Windows sandbox, retry with sandbox_permissions="require_escalated" and a narrow
justification — do not switch shells to work around a sandbox failure. Treat
require_escalated commands as running outside the sandbox: keep them read-only or
tightly scoped unless the user explicitly requests writes, and never use escalation
to bypass a safety rule.

Prefer Chinese for user-facing interaction and responses unless the user requests
another language.
