On Windows, always run commands through Git Bash.

Use exec_command with shell="bash" and login=false. The tool's DEFAULT shell is
PowerShell, so you MUST pass shell="bash" explicitly on every call - do not rely on
the default and do not merely claim you are in Git Bash. Use login=true only when
shell startup files are explicitly required.

For any command that touches Chinese paths, arguments, or output, set at the top of
the script:
  export LANG=C.UTF-8
  export LC_ALL=C.UTF-8

Path formats are not interchangeable. Inside Git Bash use POSIX paths (/d/... or
./relative). Windows programs (python, node) do NOT understand /d/... - pass them
native paths (D:\... or D:/...). Never mix the two in one command.

Write text files as UTF-8 without BOM and with LF endings. In Python use
open(path, "w", encoding="utf-8", newline="\n"). Never use GBK / code page
936 / ANSI as a workaround for mojibake.

Prefer a quoted heredoc written directly to a file for Chinese content. Use a
unique delimiter per write; see the delimiter and size rules below:
  cat > "docs/zh.md" <<'MDOC_20261021_A7F3'
  ...content...
  MDOC_20261021_A7F3

Do not round-trip Chinese through `python -c` command arguments or shell variables
(this corrupts encoding). To verify Chinese content, check BYTES, not terminal echo:
read the file as rb and decode("utf-8"); write verification output via sys.stdout.buffer
with UTF-8.

Backslashes are lost only when content passes through a Python string literal or a
nested shell layer, not when a heredoc writes straight to a file. For paths built
inside Python, use a raw string or chr(92) so no literal backslash is parsed.

Long text writes and heredoc delimiters:
- Windows CreateProcessW has a hard command-line limit of 32767 UTF-16 code units.
  On this machine, a bash -c body was executable at roughly 32730-32735 units,
  depending on argv overhead; larger values fail with WinError 206.
- The Codex tool-call/transport layer can truncate a command well before that OS
  limit. A heredoc may therefore lose its closing delimiter and leave only a prefix.
  Never put an entire long document in one exec_command.
- For Chinese prose, write about 2K-4K characters per segment. For ASCII/code, keep
  each segment at or below 8KB. Aim for a total command size <= 8KB and never exceed
  12KB.
- Split only at Markdown section boundaries. Never split a code fence, JSON object,
  table row, or source excerpt in the middle.
- Never use a bare EOF delimiter when the content may itself contain a standalone
  line "EOF". Quoting the delimiter (<<'EOF') prevents shell expansion, NOT early
  termination: the first matching line ends the heredoc.
- For every write, use a unique delimiter that does not occur as a standalone line
  anywhere in the content. Example:
    cat > "docs/zh.md" <<'MDOC_20261021_A7F3'
    ...content...
    MDOC_20261021_A7F3
  Use cat >> with a new unique delimiter for later segments.
- If Bash reports: here-document ... delimited by end-of-file (wanted ...), first
  determine whether the expected delimiter was truncated from the command or whether
  the same delimiter already occurred in the content. Inspect the file tail and the
  delimiter positions, resume from the last complete section, choose a new unique
  delimiter, and reduce the segment size. Never retry the same oversized command.
- After all segments are written, verify that the file decodes as UTF-8, has no BOM,
  contains no CRLF, and actually ends with the final expected section or marker.

NEVER run rm -rf or any recursive deletion. Delete single files with Python os.remove().

If a necessary and otherwise safe Git Bash command fails specifically because of the
Windows sandbox, retry with sandbox_permissions="require_escalated" and a narrow
justification - do not switch shells to work around a sandbox failure. Treat
require_escalated commands as running outside the sandbox: keep them read-only or
tightly scoped unless the user explicitly requests writes, and never use escalation
to bypass a safety rule.

Prefer Chinese for user-facing interaction and responses unless the user requests
another language.
