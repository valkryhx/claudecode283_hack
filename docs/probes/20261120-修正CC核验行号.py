"""把核验脚本里的期望行号按源码实际值改正。

## 为什么要这个脚本

我在写 `20261120-CC319卡住治理机制核验.py` 时期望行号是**手数**的，
5 处全错（差 1–7 行）。这正是 AGENTS.md §8.6 反复警告的事：
凡正文手写行号，必须让脚本复算后再填。

这个脚本就是那个"复算后填"的动作 —— 读源码找真实行号，写回核验脚本。
"""
from __future__ import annotations

import pathlib
import re
import sys


def _find_repo_root(start: pathlib.Path) -> pathlib.Path:
    for p in [start, *start.parents]:
        if (p / "claudecode319" / "modules").is_dir():
            return p
    raise SystemExit(f"找不到仓库根（从 {start} 向上）")


REPO = _find_repo_root(pathlib.Path(__file__).resolve().parent)
DEM = REPO / "reconstructed319" / "deminified"
PROBE = REPO / "docs" / "probes" / "20261120-CC319卡住治理机制核验.py"


def main() -> int:
    text = PROBE.read_text(encoding="utf-8")

    # 找出所有 ("mXXXX.js", "snippet", LINE, "why") 三元组
    pat = re.compile(
        r'\("(m\d+_[0-9a-f]+\.js)",\s*"((?:[^"\\]|\\.)*)",\s*(\d+),',
        re.S)
    changes = []
    for m in pat.finditer(text):
        mod, snippet, old_line = m.group(1), m.group(2), int(m.group(3))
        path = DEM / mod
        if not path.is_file():
            print(f"[跳过] {mod} 不存在")
            continue
        # 还原转义
        needle = snippet.encode().decode("unicode_escape")
        lines = path.read_text(encoding="utf-8").splitlines()
        hits = [i + 1 for i, ln in enumerate(lines) if needle in ln]
        if not hits:
            print(f"[跳过] {mod} 找不到 {needle[:40]!r}")
            continue
        if old_line in hits:
            print(f"[OK] {mod}:{old_line} {needle[:36]!r}")
            continue
        real = hits[0]
        changes.append((old_line, real, mod, needle[:40]))
        print(f"[改] {mod}: {old_line} → {real}  {needle[:36]!r}")

    # 逐个替换（按 old_line + 片段一起定位，避免误改）
    for old_line, real, mod, needle in changes:
        # 找到这个片段对应的那段，替换其中的数字
        for m in re.finditer(
                r'\("' + re.escape(mod) + r'",\s*"((?:[^"\\]|\\.)*)",\s*'
                + str(old_line) + r',', text, re.S):
            text = text[:m.start()] + m.group(0).replace(
                f", {old_line},", f", {real},", 1) + text[m.end():]
            break

    PROBE.write_text(text, encoding="utf-8", newline="\n")
    print(f"\n改写 {len(changes)} 处")
    return 0


if __name__ == "__main__":
    sys.exit(main())