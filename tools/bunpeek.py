#!/usr/bin/env python3
"""bunpeek - inspect Bun standalone executables (single-file compiled JS).

Usage:
  python bunpeek.py <exe> info
  python bunpeek.py <exe> find <regex> [--ctx 160] [--max 20] [--min-off 0]
  python bunpeek.py <exe> module <regex> [--index 0] [--max-size 1048576]
  python bunpeek.py <exe> off <decimal-or-0xhex-offset>
  python bunpeek.py <exe> va <hex-va>

Why: Bun standalone binaries embed the whole JS module graph as PLAINTEXT in a
PE section (commonly .bun / .bunblt). IDA shows it as data, so grepping the raw
file is the fastest way to find feature strings and full module source.

Note: the embedded module source and the embedded string/bytecode tables live in
the same section, so a naive "next marker" segmentation produces a few absurdly
large spans. module_spans() drops those; a hit inside one is reported as
"in a non-module region" rather than silently dumping megabytes.
"""

import re
import struct
import sys

MODULE_MARKER = b"// @bun @bytecode"
DEFAULT_MAX_MODULE = 1 << 20


def load(path):
    with open(path, "rb") as fh:
        return fh.read()


def parse_pe(data):
    """Return (image_base, sections)."""
    e_lfanew = struct.unpack_from("<I", data, 0x3C)[0]
    if data[e_lfanew:e_lfanew + 4] != b"PE\0\0":
        raise SystemExit("not a PE file")
    coff = e_lfanew + 4
    _machine, nsec, _ts, _sym, _nsym, optsize, _chars = struct.unpack_from(
        "<HHIIIHH", data, coff)
    opt = coff + 20
    magic = struct.unpack_from("<H", data, opt)[0]
    if magic == 0x20B:
        image_base = struct.unpack_from("<Q", data, opt + 24)[0]
    else:
        image_base = struct.unpack_from("<I", data, opt + 28)[0]
    sec = opt + optsize
    out = []
    for i in range(nsec):
        off = sec + i * 40
        name = data[off:off + 8].rstrip(b"\0").decode("latin1")
        vsize, vaddr, rawsize, rawptr = struct.unpack_from("<IIII", data, off + 8)
        out.append({"name": name, "vaddr": vaddr, "vsize": vsize,
                    "rawptr": rawptr, "rawsize": rawsize})
    return image_base, out


def off2va(data, image_base, sections, off):
    for s in sections:
        span = max(s["rawsize"], s["vsize"])
        if s["rawptr"] <= off < s["rawptr"] + span:
            return image_base + s["vaddr"] + (off - s["rawptr"])
    return None


def va2off(data, image_base, sections, va):
    rva = va - image_base
    for s in sections:
        if s["vaddr"] <= rva < s["vaddr"] + max(s["rawsize"], s["vsize"]):
            return s["rawptr"] + (rva - s["vaddr"])
    return None


def markers(data):
    return [m.start() for m in re.finditer(re.escape(MODULE_MARKER), data)]


def module_spans(data, max_size=DEFAULT_MAX_MODULE):
    """(start, end, index) for every marker span no larger than max_size."""
    starts = markers(data)
    out = []
    for i, s in enumerate(starts):
        e = starts[i + 1] if i + 1 < len(starts) else len(data)
        if e - s <= max_size:
            out.append((s, e, i))
    return out, starts


def enclosing_span(off, starts):
    prev = [s for s in starts if s <= off]
    if not prev:
        return None, None
    start = prev[-1]
    nxt = [s for s in starts if s > start]
    return start, (nxt[0] if nxt else None)


def render(chunk):
    return "".join(chr(b) if 32 <= b < 127 or b in (10, 13, 9) else "." for b in chunk)


def cmd_info(path, data, image_base, sections):
    print("file      :", path)
    print("size      :", len(data))
    print("image base:", hex(image_base))
    print("sections  :")
    for s in sections:
        print("   %-10s va=%#012x raw=%#010x size=%#x/%#x"
              % (s["name"], image_base + s["vaddr"], s["rawptr"],
                 s["vsize"], s["rawsize"]))
    spans, starts = module_spans(data)
    print("marker    :", MODULE_MARKER.decode(), "raw count =", len(starts))
    print("modules   : %d (spans <= 1MB)" % len(spans))
    if spans:
        print("            first %#x  last %#x" % (spans[0][0], spans[-1][0]))
    m = re.search(rb"// Version: ([0-9][0-9.]*)", data)
    if m:
        print("version   :", m.group(1).decode())
    for probe in (b"Bun.isStandaloneExecutable", b"B:/~BUN/root/", b"/$bunfs/root/"):
        print("marker %-28s hits=%d" % (probe.decode("latin1"), data.count(probe)))


def cmd_find(path, data, image_base, sections, pattern, ctx, mx, min_off):
    rx = re.compile(pattern.encode(), re.I)
    n = 0
    total = 0
    for m in rx.finditer(data):
        if m.start() < min_off:
            continue
        total += 1
        if n >= mx:
            continue
        n += 1
        va = off2va(data, image_base, sections, m.start())
        print("---- off %#x  va %s" % (m.start(), hex(va) if va else "?"))
        print(render(data[max(0, m.start() - ctx):m.start() + ctx]))
        print()
    print("matches: %d (shown %d)" % (total, n))


def cmd_module(path, data, pattern, index, max_size):
    rx = re.compile(pattern.encode(), re.I)
    spans, starts = module_spans(data, max_size)
    by_start = {s: (s, e) for s, e, _ in spans}
    hits = []
    skipped = 0
    for m in rx.finditer(data):
        s, e = enclosing_span(m.start(), starts)
        if s is None:
            continue
        if s not in by_start:
            skipped += 1
            continue
        span = by_start[s]
        if span not in hits:
            hits.append(span)
    print("modules matching %r: %d  (skipped %d hits in non-module regions)"
          % (pattern, len(hits), skipped))
    if not hits:
        return
    start, end = hits[min(index, len(hits) - 1)]
    print("module #%d  off %#x - %#x  (%d bytes)" % (index, start, end, end - start))
    print("=" * 70)
    print(data[start:end].decode("utf-8", "replace"))


def main(argv):
    if len(argv) < 3:
        print(__doc__)
        return 1
    path, cmd = argv[1], argv[2]
    rest = argv[3:]
    data = load(path)
    image_base, sections = parse_pe(data)

    if cmd == "info":
        cmd_info(path, data, image_base, sections)
    elif cmd == "find":
        pattern = rest[0]
        ctx = int(rest[rest.index("--ctx") + 1]) if "--ctx" in rest else 160
        mx = int(rest[rest.index("--max") + 1]) if "--max" in rest else 20
        mo = rest[rest.index("--min-off") + 1] if "--min-off" in rest else "0"
        cmd_find(path, data, image_base, sections, pattern, ctx, mx, int(mo, 0))
    elif cmd == "module":
        pattern = rest[0]
        idx = int(rest[rest.index("--index") + 1]) if "--index" in rest else 0
        ms = rest[rest.index("--max-size") + 1] if "--max-size" in rest else str(DEFAULT_MAX_MODULE)
        cmd_module(path, data, pattern, idx, int(ms, 0))
    elif cmd == "off":
        va = off2va(data, image_base, sections, int(rest[0], 0))
        print("off %#x -> va %s" % (int(rest[0], 0), hex(va) if va else "?"))
    elif cmd == "va":
        off = va2off(data, image_base, sections, int(rest[0], 0))
        print("va %#x -> off %s" % (int(rest[0], 0), hex(off) if off else "?"))
    else:
        print(__doc__)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
