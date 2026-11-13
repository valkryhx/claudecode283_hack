# -*- coding: utf-8 -*-
"""核验 319 deminified 模块的 import chunk -> 源 m 模块 映射。

为什么需要这个：deminified 里的标识符是**压缩名**，`dt` / `ze` / `as` / `co` 这类
2-3 字母符号在不同模块里含义完全不同。直接 `grep 'dt = "'` 全仓搜索会把
别的模块的同名符号误认成本模块的工具常量。

正确做法：Bun 的 chunk 与 m 模块是一一对应的（一个 m 模块编译成一个 chunk）。
所以只要解析所有 m*.js 的 `export {...}`，建立 符号 -> 文件 的反查表，
再对目标模块的每条 `import { A, B } from "chunk-X.js"` 求
「export 集合完全覆盖 {A, B} 的文件」，就能唯一确定 chunk-X 对应哪个 m 文件，
从而拿到该符号在本模块里的真实定义。

用法：
  python docs/probes/20261113-319-chunk映射核验.py m0832_0x124c3af6.js
  python docs/probes/20261113-319-chunk映射核验.py m0832_0x124c3af6.js chunk-9kvvd0hy
"""
import os
import re
import sys
from collections import defaultdict

DEM = r"D:/git_codes/claudecode283_hack/reconstructed319/deminified"

EXPORT_RE = re.compile(r"export\s*\{([^}]*)\}", re.S)
IMPORT_RE = re.compile(
    r'import\s*\{([^}]*)\}\s*from\s*"B:/~BUN/root/(chunk-[A-Za-z0-9]+\.js)"', re.S
)


def parse_names(blob):
    """把 `a, b as c, d` 解析成导出后的名字列表。"""
    names = []
    for part in blob.split(","):
        part = part.strip()
        if not part:
            continue
        if " as " in part:
            names.append(part.split(" as ")[-1].strip())
        else:
            names.append(part.split()[0].strip())
    return [n for n in names if n]


def main():
    target = sys.argv[1] if len(sys.argv) > 1 else "m0832_0x124c3af6.js"
    only_chunk = sys.argv[2] if len(sys.argv) > 2 else None

    file_exports = {}
    for fn in sorted(os.listdir(DEM)):
        if not fn.endswith(".js"):
            continue
        try:
            text = open(
                os.path.join(DEM, fn), encoding="utf-8", errors="replace"
            ).read()
        except OSError:
            continue
        syms = set()
        for m in EXPORT_RE.finditer(text):
            for n in parse_names(m.group(1)):
                syms.add(n)
        file_exports[fn] = syms

    ttext = open(
        os.path.join(DEM, target), encoding="utf-8", errors="replace"
    ).read()

    print(f"== {target} 的 import chunk 映射 ==")
    unresolved = []
    for m in IMPORT_RE.finditer(ttext):
        syms = parse_names(m.group(1))
        chunk = m.group(2)[:-3]  # 去掉 .js
        if only_chunk and only_chunk not in chunk:
            continue

        full, partial = [], []
        for fn, fs in file_exports.items():
            if fn == target:
                continue
            hit = sum(1 for s in syms if s in fs)
            if hit == len(syms):
                full.append((fn, len(fs)))
            elif hit:
                partial.append((hit, fn))

        partial.sort(reverse=True)
        print(f"\n  {chunk}  ({len(syms)} 个符号)")
        print(f"    符号: {', '.join(syms)}")
        if full:
            for fn, n in full[:4]:
                print(f"    [完全覆盖] {fn}  (共导出 {n} 个)")
        else:
            print("    [完全覆盖] 无")
            unresolved.append((chunk, syms))
            for hit, fn in partial[:4]:
                print(f"    [部分 {hit}/{len(syms)}] {fn}")

    if unresolved:
        print("\n== 未能唯一确定（需人工）==")
        for chunk, syms in unresolved:
            print(f"  {chunk}: {', '.join(syms)}")


if __name__ == "__main__":
    main()
