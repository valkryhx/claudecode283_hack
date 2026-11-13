# -*- coding: utf-8 -*-
"""在 319 deminified 里定位某个符号的**真实定义**（值/函数体），并报告行号。

用途：deminified 里符号是压缩名，`ze`/`_r`/`Qr`/`dt`/`kt`/`as`/`co` 这类必须看到
定义才能断定身份。本脚本只在**指定模块**内搜索，避免同名符号跨模块误认。

用法：
  python docs/probes/20261113-319-符号定义定位.py m0286_0x1177700c.js Vn
  python docs/probes/20261113-319-符号定义定位.py m0832_0x124c3af6.js ze
  python docs/probes/20261113-319-符号定义定位.py m0176_0x1153bfed.js dt
"""
import os
import re
import sys

DEM = r"D:/git_codes/claudecode283_hack/reconstructed319/deminified"
WINDOW = int(os.environ.get("WIN", "3"))


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 1
    fn, sym = sys.argv[1], sys.argv[2]
    path = os.path.join(DEM, fn)
    lines = open(path, encoding="utf-8", errors="replace").read().split("\n")
    esc = re.escape(sym)

    # 定义形态：var/let/const X = / function X( / class X / X =
    pats = [
        re.compile(rf"^\s*(?:var|let|const)\s+{esc}\s*="),
        re.compile(rf"^\s*(?:var|let|const)\s+\w+\s*,\s*$"),  # 多变量声明的续行，单独处理
        re.compile(rf"^\s*(?:async\s+)?function\s+{esc}\s*\("),
        re.compile(rf"^\s*class\s+{esc}\b"),
        re.compile(rf"^\s*{esc}\s*="),
        re.compile(rf"^\s+{esc}\s*="),
    ]

    print(f"== {fn} :: {sym} ==")
    hits = 0
    for i, line in enumerate(lines, 1):
        if pats[0].search(line) or pats[2].search(line) or pats[3].search(line) \
           or pats[4].search(line) or pats[5].search(line):
            hits += 1
            lo = max(1, i - WINDOW)
            hi = min(len(lines), i + WINDOW)
            for j in range(lo, hi + 1):
                mark = ">>" if j == i else "  "
                print(f"{mark} {j:>6}: {lines[j - 1][:170]}")
            print()

    # 多行 var 声明：`var A = 1,\n  X = 2,`
    mv = re.compile(rf"^\s+{esc}\s*=")
    for i, line in enumerate(lines, 1):
        if mv.search(line):
            hits += 1
            for j in range(max(1, i - WINDOW), min(len(lines), i + WINDOW) + 1):
                mark = ">>" if j == i else "  "
                print(f"{mark} {j:>6}: {lines[j - 1][:170]}")
            print()

    # export 里是否带出
    for i, line in enumerate(lines, 1):
        if line.startswith("export {") or line.startswith("export{"):
            if re.search(rf"(^|[,{{ ]){esc}([,}} ]|$)", line):
                print(f"[export] {i}: {line[:200]}")
                hits += 1

    if hits == 0:
        print("  （未找到定义，可能来自 import；请先用 chunk 映射脚本找到源模块）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
