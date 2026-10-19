#!/usr/bin/env python3
"""Extract Bun standalone JS module spans into the archive layout.

The output layout matches claudecode283/modules:
  INDEX.tsv: idx, off, size, wf_hits, file, tokens
  mNNNN_0xOFFSET.js: exact bytes from marker to the next marker
"""

import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import bunpeek as bp

TOKEN_RE = re.compile(rb"[A-Za-z_$][A-Za-z0-9_$]*[Ww]orkflow[A-Za-z0-9_$]*")
SIZE_RE = re.compile(r"^\s*(\d+)\s*([kmg]?i?b?)?\s*$", re.IGNORECASE)
UNITS = {
    "": 1,
    "b": 1,
    "k": 1024,
    "kb": 1024,
    "ki": 1024,
    "kib": 1024,
    "m": 1024 ** 2,
    "mb": 1024 ** 2,
    "mi": 1024 ** 2,
    "mib": 1024 ** 2,
    "g": 1024 ** 3,
    "gb": 1024 ** 3,
    "gi": 1024 ** 3,
    "gib": 1024 ** 3,
}


def parse_size(value):
    match = SIZE_RE.match(value)
    if not match:
        raise argparse.ArgumentTypeError(f"invalid size: {value}")
    number, unit = match.groups()
    return int(number) * UNITS[(unit or "").lower()]


def non_module_tail(chunk):
    """Detect a marker span that runs into embedded modules/bytecode.

    A real module ends with a NUL terminator near EOF. Some final spans instead
    contain a short module prefix followed by more internal modules and a large
    binary table. Those are not one module and must not be written as one.
    """
    first_nul = chunk.find(bytes([0]))
    if first_nul < 0 or first_nul + (1 << 20) >= len(chunk):
        return None
    tail = chunk[first_nul:]
    printable = sum(32 <= b < 127 or b in (9, 10, 13) for b in tail) / len(tail)
    if printable < 0.85:
        return first_nul, printable
    return None


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("exe", type=Path)
    parser.add_argument("out", type=Path)
    parser.add_argument("--max-size", type=parse_size, required=True)
    parser.add_argument("--overwrite", action="store_true")
    args = parser.parse_args()

    data = bp.load(str(args.exe))
    starts = bp.markers(data)
    if not starts:
        raise SystemExit("no // @bun @bytecode markers found")

    args.out.mkdir(parents=True, exist_ok=True)
    existing = list(args.out.iterdir())
    if existing and not args.overwrite:
        raise SystemExit(
            f"output directory is not empty: {args.out} "
            "(use --overwrite to regenerate the same stage)"
        )

    rows = []
    written = 0
    skipped = 0
    total_bytes = 0

    for idx, start in enumerate(starts):
        end = starts[idx + 1] if idx + 1 < len(starts) else len(data)
        size = end - start
        if size > args.max_size:
            skipped += 1
            print(f"skip marker {idx}: {size} bytes at 0x{start:x} (over max size)")
            continue

        chunk = data[start:end]
        tail = non_module_tail(chunk)
        if tail is not None:
            first_nul, printable = tail
            skipped += 1
            print(
                f"skip marker {idx}: {size} bytes at 0x{start:x} "
                f"(non-module tail: NUL at {first_nul}, printable={printable:.3f})"
            )
            continue

        name = f"m{idx:04d}_0x{start:x}.js"
        (args.out / name).write_bytes(chunk)

        wf_hits = len(re.findall(rb"workflow", chunk, re.IGNORECASE))
        tokens = sorted({m.group(0).decode("latin1") for m in TOKEN_RE.finditer(chunk)})[:12]
        rows.append((idx, start, size, wf_hits, name, ",".join(tokens)))
        written += 1
        total_bytes += size

    index_path = args.out / "INDEX.tsv"
    with index_path.open("w", encoding="utf-8", newline="\n") as fh:
        fh.write("idx\toff\tsize\twf_hits\tfile\ttokens\n")
        for idx, start, size, wf_hits, name, tokens in rows:
            fh.write(f"{idx}\t0x{start:x}\t{size}\t{wf_hits}\t{name}\t{tokens}\n")

    print(f"markers: {len(starts)}")
    print(f"written: {written}")
    print(f"skipped: {skipped}")
    print(f"bytes: {total_bytes}")
    print(f"index: {index_path}")


if __name__ == "__main__":
    main()
