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


HEAD_MIN_LEN = 1024


def module_head(chunk):
    """Length of a genuine module at the START of a non-module span, else None.

    Some spans are a real module immediately followed by Bun's chunk index
    table (or bytecode). Rejecting the whole span loses that module's source.
    Recognise a real head by Bun's own preamble for source files:
    a copyright line and/or a "// Version: " line, plus a long printable run.

    A span whose head is only a CJS wrapper of the Bun runtime (e.g. the
    `.rdata` pseudo-marker span) has neither, and stays rejected.

    NUL handling matters: a source header can contain a stray NUL and keep
    going (319 has one at offset 422), while the end of the module is marked
    by a NUL that is followed by non-printable binary. So a NUL only ends the
    head when the bytes after it are not text.

    Returns (head_len, reason) or (None, reason).
    """
    limit = min(len(chunk), 1 << 20)
    end = 0
    i = 0
    while i < limit:
        b = chunk[i]
        if b == 0:
            probe = chunk[i + 1:i + 65]
            if not probe:
                break
            printable = sum(32 <= c < 127 or c in (9, 10, 13) for c in probe) / len(probe)
            if printable < 0.95:       # binary follows -> module ends here
                break
            end = i + 1                # stray NUL inside the header, keep going
            i += 1
            continue
        if 32 <= b < 127 or b in (9, 10, 13):
            end = i + 1
            i += 1
        else:
            break

    # trim trailing whitespace/NUL so the file ends on a clean line
    head = chunk[:end].rstrip(b"\x00 \t\r\n")
    head_len = len(head)
    if head_len < HEAD_MIN_LEN:
        return None, f"head only {head_len} B (< {HEAD_MIN_LEN})"
    if b"// Version: " not in head and b"Anthropic PBC" not in head:
        return None, f"head {head_len} B has no module preamble"
    return head_len, f"carved {head_len} B module head, {len(chunk) - head_len} B binary tail"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("exe", type=Path)
    parser.add_argument("out", type=Path)
    parser.add_argument("--max-size", type=parse_size, required=True)
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument(
        "--carve-head",
        action="store_true",
        help="when a marker span is a real module followed by a binary/chunk-index "
             "tail, keep the module head instead of skipping the whole span. "
             "Off by default so 283/303 keep their published module counts.",
    )
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
    carved = 0
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
            # A span can be a genuine module immediately followed by Bun's chunk
            # index table. Keep the module head instead of dropping the source.
            head_len, why = module_head(chunk) if args.carve_head else (None, "carve-head disabled")
            if head_len is None:
                skipped += 1
                print(
                    f"skip marker {idx}: {size} bytes at 0x{start:x} "
                    f"(non-module tail: NUL at {first_nul}, printable={printable:.3f}; {why})"
                )
                continue
            chunk = chunk[:head_len]
            size = head_len
            carved += 1
            print(
                f"carve marker {idx}: span {end - start} B at 0x{start:x} "
                f"(non-module tail: NUL at {first_nul}, printable={printable:.3f}) -> {why}"
            )

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
    print(f"carved from non-module span: {carved}")
    print(f"skipped: {skipped}")
    print(f"bytes: {total_bytes}")
    print(f"index: {index_path}")


if __name__ == "__main__":
    main()
