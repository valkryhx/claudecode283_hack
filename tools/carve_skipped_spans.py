#!/usr/bin/env python3
"""Carve the two marker spans that extract_bun_modules.py skips.

Why this exists
---------------
`extract_bun_modules.py` splits the `.bun` payload by `// @bun @bytecode` markers
and writes one file per marker span. Two spans are not single source modules and
are therefore skipped:

  * marker 1  - runs from `.rdata` across 15 PE sections into `.bun`; 141 MB of
                embedded data tables, not source.
  * marker 2882 (last) - a short real module header followed by binary data.

Skipping them loses no source today, but the archive rule (AGENTS.md §0) says
every byte must stay accounted for. This tool does NOT write one giant fake
module. It writes:

  spans/REPORT.md          what each span actually contains, with evidence
  spans/span1_head.txt     the real header of span 1 (verbatim bytes)
  spans/span2_head.js      the real JS header of span 2 (verbatim bytes)
  spans/*_text_NN.bin      every >=8 KiB run of readable text, verbatim

Nothing is rewritten, reordered or trimmed: each output file is a byte-exact
slice of the input, and the report records its offset so anyone can re-derive it.

Usage:
  python tools/carve_skipped_spans.py <exe> <outdir> [--max-size 6M]
"""

import argparse
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import bunpeek as bp

TEXT_WINDOW = 4096
TEXT_MIN_RATIO = 0.90
TEXT_MAX_NUL = 0.01
MIN_CLUSTER = 8 * 1024


def text_clusters(data, start, end):
    """Contiguous runs of readable text, as (abs_start, abs_end) pairs."""
    out, cur = [], None
    for off in range(start, end, TEXT_WINDOW):
        w = data[off:min(off + TEXT_WINDOW, end)]
        if not w:
            break
        pr = sum(32 <= b < 127 or b in (9, 10, 13) for b in w) / len(w)
        nul = w.count(0) / len(w)
        if pr >= TEXT_MIN_RATIO and nul <= TEXT_MAX_NUL:
            cur = [off, off + len(w)] if cur is None else [cur[0], off + len(w)]
        elif cur is not None:
            out.append(tuple(cur))
            cur = None
    if cur is not None:
        out.append(tuple(cur))
    return [c for c in out if c[1] - c[0] >= MIN_CLUSTER]


def section_of(sections, off):
    for s in sections:
        if s["rawptr"] <= off < s["rawptr"] + max(s["rawsize"], s["vsize"]):
            return s
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("exe", type=Path)
    ap.add_argument("out", type=Path)
    ap.add_argument("--max-size", default="6M")
    args = ap.parse_args()

    data = bp.load(str(args.exe))
    image_base, sections = bp.parse_pe(data)
    marks = bp.markers(data)
    if len(marks) < 3:
        raise SystemExit("expected at least 3 markers")

    out = args.out
    out.mkdir(parents=True, exist_ok=True)

    # Recompute exactly the spans the extractor skips (size cap or non-module tail).
    def is_skipped(chunk):
        if len(chunk) > 6 * 1024 * 1024:
            return True
        n = chunk.find(b"\0")
        if n < 0 or n + (1 << 20) >= len(chunk):
            return False
        tail = chunk[n:]
        pr = sum(32 <= b < 127 or b in (9, 10, 13) for b in tail) / len(tail)
        return pr < 0.85

    skipped = [(i, s, marks[i + 1] if i + 1 < len(marks) else len(data))
               for i, s in enumerate(marks)
               if is_skipped(data[s:(marks[i + 1] if i + 1 < len(marks) else len(data))])]

    lines = []
    lines.append("# 被跳过的 marker span — 逐字节归档\n")
    lines.append("本文件由 `tools/carve_skipped_spans.py` 生成，记录 "
                 "`extract_bun_modules.py` 因不属于单一源码模块而跳过的 span。\n")
    lines.append("**没有删除任何字节**：下面每个输出文件都是输入文件的逐字节切片，"
                 "偏移可复现。\n")

    for i, s, e in skipped:
        chunk = data[s:e]
        sec_start = section_of(sections, s)
        sec_end = section_of(sections, e - 1)
        lines.append("\n## marker %d\n" % i)
        lines.append("| 项 | 值 |")
        lines.append("| --- | --- |")
        lines.append("| 文件偏移 | `0x%x` .. `0x%x` |" % (s, e))
        lines.append("| 大小 | %d B (%.2f MB) |" % (e - s, (e - s) / 1048576))
        lines.append("| 起始段 | `%s` |" % (sec_start["name"] if sec_start else "?"))
        if sec_end:
            lines.append("| 结束段 | `%s` |" % sec_end["name"])

        # cross-section breakdown
        cross = []
        for sec in sorted(sections, key=lambda x: x["rawptr"]):
            lo, hi = max(s, sec["rawptr"]), min(e, sec["rawptr"] + sec["rawsize"])
            if lo < hi:
                cross.append((sec["name"], hi - lo))
        if len(cross) > 1:
            lines.append("| 跨段 | %d 段：%s |" % (len(cross),
                         "，".join("%s %.2f MB" % (n, z / 1048576) for n, z in cross)))

        # head
        head = chunk[:512]
        head_txt = "".join(chr(b) if 32 <= b < 127 or b == 10 else "." for b in head)
        lines.append("\n**开头 512 字节（原样）：**\n")
        lines.append("```")
        lines.append(head_txt)
        lines.append("```")

        # text clusters
        cl = text_clusters(data, s, e)
        lines.append("\n**可读文本块（>= %d KB，逐字节另存）：** %d 个，合计 %.2f MB\n"
                     % (MIN_CLUSTER // 1024, len(cl), sum(b - a for a, b in cl) / 1048576))
        if cl:
            lines.append("| # | 文件 | 偏移 | 大小 | 开头 |")
            lines.append("| ---: | --- | --- | ---: | --- |")
            for k, (a, b) in enumerate(cl):
                seg = data[a:b]
                fn = "m%04d_text_%02d_0x%x.bin" % (i, k, a)
                (out / fn).write_bytes(seg)
                prev = seg[:70].decode("latin1").replace("\n", " ")
                prev = "".join(c if 32 <= ord(c) < 127 else "." for c in prev)
                lines.append("| %d | `%s` | `0x%x` | %d | `%s` |" % (k, fn, a, b - a, prev))

        # Real JS head, if any. Reuse the extractor's cutter so the archive and
        # modules/ can never disagree about where a module ends.
        from extract_bun_modules import module_head
        head_len, why = module_head(chunk)
        if head_len is not None:
            header = chunk[:head_len]
            fn = "m%04d_head_0x%x.js" % (i, s)
            (out / fn).write_bytes(header)
            lines.append("\n**真实 JS 头部**（%s）→ `%s`\n" % (why, fn))
            lines.append("\n```js")
            lines.append(header.decode("utf-8", "replace").rstrip()[:1500])
            lines.append("```")

    (out / "REPORT.md").write_text("\n".join(lines) + "\n", encoding="utf-8", newline="\n")
    print("skipped spans:", len(skipped))
    for i, s, e in skipped:
        print("  marker %-5d 0x%-10x .. 0x%-10x  %d B" % (i, s, e, e - s))
    print("out:", out)


if __name__ == "__main__":
    main()
