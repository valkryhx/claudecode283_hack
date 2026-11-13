"""审计 Markdown 文档里的 模块:行号 引用，把每条解析回源码该行的真实内容。

用途：调研文档里的坐标引用必须机器复算。在几 MB 的模块里人工记忆的
行号误差普遍在 1-5 行，而同一次误读还可能把「某个相似组件」当成目标组件
（见 docs/20261113-CC-AskUserQuestion交互机制调研.md 的 §18.1）。

用法：
  python tools/audit_doc_citations.py <doc.md> [--full-module m2124] [--root <repo>]

支持的引用形式（反引号内）：
  `m0591:48917`             -> reconstructed319/deminified/m0591_*.js 第 48917 行
  `m0591_0x11be624e.js:48917`
  `m0268_0x1170eeec.js:916`
  `full:69479`              -> reconstructed319/full/<--full-module 对应文件> 第 69479 行
  `m0805:676-682`           -> 区间，只解析起始行

`full:` 无法从上下文自动判断属于哪个模块，所以用 --full-module 指定
（同一篇文档通常只引用一个大模块的 full 版本）。

输出：每条一行 `[ref] 文档上下文 => 源码该行内容`，便于人眼逐条比对。
不判断语义是否吻合——那必须人看。
"""
import argparse
import glob
import os
import re
import sys


def build_module_map(root):
    """模块号 -> {'demi': path, 'full': path}"""
    out = {}
    for kind, sub in (("demi", "reconstructed319/deminified"), ("full", "reconstructed319/full")):
        for p in glob.glob(os.path.join(root, sub, "m*_0x*.js")):
            m = re.match(r"(m\d+)_", os.path.basename(p))
            if m:
                out.setdefault(m.group(1), {})[kind] = p
    return out


_line_cache = {}


def get_line(path, n):
    if path not in _line_cache:
        try:
            with open(path, encoding="utf-8", errors="replace") as f:
                _line_cache[path] = f.read().split("\n")
        except OSError as e:
            sys.stderr.write("cannot read %s: %s\n" % (path, e))
            _line_cache[path] = []
    lines = _line_cache[path]
    return lines[n - 1] if 1 <= n <= len(lines) else None


CIT = re.compile(r"`([^`\s]{2,60}?):(\d+)(?:-(\d+))?`")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("doc")
    ap.add_argument("--full-module", default="m2124",
                    help="`full:NNNN` 引用属于哪个模块（默认 m2124）")
    ap.add_argument("--root", default=None, help="仓库根，默认从脚本位置推断")
    args = ap.parse_args()

    root = args.root or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    mod_files = build_module_map(root)
    text = open(args.doc, encoding="utf-8").read()

    rows, seen, unresolved = [], set(), []
    for m in CIT.finditer(text):
        ref, start, end = m.group(1), int(m.group(2)), m.group(3)
        if (ref, start, end) in seen:
            continue
        seen.add((ref, start, end))

        if ref == "full":
            path = mod_files.get(args.full_module, {}).get("full")
        elif ref.lower() == "full":
            path = None                      # 大写 Full / 其它，非引用
        elif re.match(r"(reconstructed319|claudecode\d+)/", ref):
            # 完整相对路径形式，如 reconstructed319/full/m2124_0x1363573f.js:68906
            p = os.path.join(root, *ref.split("/"))
            path = p if os.path.isfile(p) else None
        elif re.fullmatch(r"m\d+", ref):
            path = mod_files.get(ref, {}).get("demi")
        elif re.fullmatch(r"m\d+_0x[0-9a-f]+\.js", ref):
            path = mod_files.get(ref.split("_")[0], {}).get("demi")
        else:
            path = None

        if path is None:
            unresolved.append(ref)
            continue
        rows.append((m.start(), ref, start, end, get_line(path, start)))

    rows.sort()
    print("共解析 %d 条坐标引用\n" % len(rows))
    for pos, ref, start, end, actual in rows:
        ctx = re.sub(r"\s+", " ", text[max(0, pos - 90):pos].replace("\n", " "))
        span = "%s:%d%s" % (ref, start, ("-" + end) if end else "")
        print("[%s] ...%s\n    => %s" % (span, ctx[-80:], (actual or "<OUT OF RANGE>").strip()[:170]))

    if unresolved:
        print("\n未解析（不是模块号或 full:）：" + ", ".join(sorted(set(unresolved))[:40]))


if __name__ == "__main__":
    main()
