#!/usr/bin/env python3
"""Rank 303 module candidates for modules analyzed in the 283 archive."""

import argparse
import json
import math
import re
from collections import Counter, defaultdict
from pathlib import Path

ID_RE = re.compile(r"[A-Za-z_$][A-Za-z0-9_$]{5,}")
STR_RE = re.compile(r'''"([^"\\n]{6,120})"|'([^'\\n]{6,120})'|`([^`\\n]{6,120})`''')
MOD_RE = re.compile(r"m\d{4}")
STOP = {
    "function", "return", "typeof", "undefined", "prototype", "constructor",
    "length", "string", "number", "boolean", "object", "default", "exports",
    "module", "require", "import", "export", "async", "await", "while", "break",
    "continue", "switch", "case", "catch", "finally", "throw", "void", "yield",
    "delete", "instanceof", "static", "class", "const", "let", "var",
}


def features(path):
    text = path.read_bytes().replace(bytes([0]), b" ").decode("utf-8", "ignore")
    out = set()
    for match in ID_RE.finditer(text):
        value = match.group(0)
        if value not in STOP:
            out.add("i:" + value)
    for match in STR_RE.finditer(text):
        value = next(group for group in match.groups() if group is not None)
        out.add("s:" + value)
    return out


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-modules", type=Path, required=True)
    parser.add_argument("--target-modules", type=Path, required=True)
    parser.add_argument("--source-docs", type=Path, required=True)
    parser.add_argument("--out-dir", type=Path, required=True)
    parser.add_argument("--top", type=int, default=8)
    args = parser.parse_args()

    docs_by_module = defaultdict(set)
    for doc in sorted(args.source_docs.glob("*-internals.md")):
        text = doc.read_text(encoding="utf-8")
        for module_id in sorted(set(MOD_RE.findall(text))):
            docs_by_module[module_id].add(doc.stem.replace("-internals", ""))

    source_files = {}
    for module_id in docs_by_module:
        matches = sorted(args.source_modules.glob(module_id + "_*.js"))
        if not matches:
            raise SystemExit(f"missing source module: {module_id}")
        source_files[module_id] = matches[0]

    target_files = sorted(args.target_modules.glob("m*.js"))
    target_features = {path.name: features(path) for path in target_files}
    df = Counter()
    for values in target_features.values():
        df.update(values)
    total = len(target_features)
    idf = {key: math.log((total + 1) / (count + 1)) + 1 for key, count in df.items()}
    inverted = defaultdict(list)
    for name, values in target_features.items():
        for key in values:
            inverted[key].append(name)

    rows = []
    for module_id, source_path in sorted(source_files.items()):
        source_values = features(source_path)
        source_weight = sum(idf.get(key, 1) for key in source_values)
        scores = Counter()
        for key in source_values:
            weight = idf.get(key, 1)
            for target_name in inverted.get(key, ()):
                scores[target_name] += weight

        ranked = []
        for target_name, intersection in scores.items():
            target_weight = sum(idf.get(key, 1) for key in target_features[target_name])
            containment = intersection / source_weight if source_weight else 0
            cosine = intersection / math.sqrt(source_weight * target_weight) if source_weight and target_weight else 0
            size_ratio = source_path.stat().st_size / max(1, (args.target_modules / target_name).stat().st_size)
            size_score = min(size_ratio, 1 / size_ratio) if size_ratio else 0
            score = 0.65 * containment + 0.30 * cosine + 0.05 * size_score
            shared = sorted(
                (key for key in source_values if key in target_features[target_name]),
                key=lambda key: idf.get(key, 1),
                reverse=True,
            )[:12]
            ranked.append({
                "module": target_name,
                "score": round(score, 6),
                "containment": round(containment, 6),
                "cosine": round(cosine, 6),
                "size": (args.target_modules / target_name).stat().st_size,
                "shared": shared,
            })
        ranked.sort(key=lambda item: (-item["score"], item["module"]))
        rows.append({
            "source": source_path.name,
            "source_size": source_path.stat().st_size,
            "docs": sorted(docs_by_module[module_id]),
            "candidates": ranked[: args.top],
        })

    args.out_dir.mkdir(parents=True, exist_ok=True)
    json_path = args.out_dir / "cross-version-candidates.json"
    with json_path.open("w", encoding="utf-8", newline="\n") as fh:
        json.dump(rows, fh, ensure_ascii=False, indent=2)
        fh.write("\n")

    md_path = args.out_dir / "20261020-cross-version-candidates.md"
    with md_path.open("w", encoding="utf-8", newline="\n") as fh:
        fh.write("# 283 -> 303 module candidates\n\n")
        fh.write("Algorithmic candidate ranking. Key entry points must be checked by symbol.\n\n")
        fh.write("| 283 module | docs | primary 303 | contain | cosine | alternatives |\n")
        fh.write("| --- | --- | --- | ---: | ---: | --- |\n")
        for row in rows:
            primary = row["candidates"][0] if row["candidates"] else None
            alternatives = ", ".join(item["module"] for item in row["candidates"][1:4])
            if primary:
                fh.write(
                    f"| `{row['source']}` | {', '.join(row['docs'])} | `{primary['module']}` | "
                    f"{primary['containment']:.3f} | {primary['cosine']:.3f} | {alternatives} |\n"
                )
    print(f"rows: {len(rows)}")
    print(f"json: {json_path}")
    print(f"md: {md_path}")


if __name__ == "__main__":
    main()
