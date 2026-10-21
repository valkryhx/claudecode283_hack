#!/usr/bin/env python
"""Measure the Git Bash argv limit on Windows.

This probe measures the OS-level CreateProcessW boundary only. It does not
model the earlier Codex tool-call/transport boundary, so a passing result here
does not mean a single giant exec_command is safe.
"""

from __future__ import annotations

import argparse
import subprocess
import sys


def run(bash: str, units: int, char: str) -> str:
    # Leave room for argv[0], "-c", NUL terminators and Windows quoting.
    body = char * units
    try:
        proc = subprocess.run(
            [bash, "-c", "true #" + body],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=20,
            check=False,
        )
    except OSError as exc:
        return f"error: {exc}"
    if proc.returncode == 0:
        return "ok"
    err = proc.stderr.decode("utf-8", errors="replace").strip()
    return f"rc={proc.returncode}: {err[:300]}"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--bash", default=r"D:\Git\bin\bash.exe")
    parser.add_argument("--char", default="x", help="one BMP character")
    parser.add_argument("--lo", type=int, default=32000)
    parser.add_argument("--hi", type=int, default=33000)
    args = parser.parse_args()
    if len(args.char) != 1:
        parser.error("--char must be exactly one character")

    lo, hi = args.lo, args.hi
    # Keep the historical 32735/32736 boundary as the default fast path.
    # --binary enables a search, but that boundary is not a safe writing size.
    if (lo, hi) == (32000, 33000):
        known = [32735, 32736]
    else:
        known = []
    for units in known:
        result = run(args.bash, units, args.char)
        print(f"{units}: {result}")
        if units == 32735 and result != "ok":
            print("argv overhead changed; rerun with --lo 32700 --hi 32768")
    if not known:
        while lo + 1 < hi:
            mid = (lo + hi) // 2
            result = run(args.bash, mid, args.char)
            print(f"{mid}: {result}")
            if result == "ok":
                lo = mid
            else:
                hi = mid
        print(f"largest_ok={lo}")
        print(f"first_failure={hi}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
