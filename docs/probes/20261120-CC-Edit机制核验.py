"""核验 `20261120-CC-Edit工具实现剖析.md` 里的全部坐标与代码片段。

## 为什么

那份文档的每个结论都建立在坐标上。按 AGENTS.md §8.6：坐标必须由脚本复算，
不由我保证。第一轮手数已经错过很多次。

## 覆盖范围

- 工具 schema（`old_string` / `new_string` / `replace_all`）
- 四级降级匹配 `hWe` 及其辅助函数 `b` / `F` / `N` / `C` / `L` / `Mmr`
- 失败文案（找不到 / 不唯一 / 无变化 / 文件过大）
- 文件大小上限 `kso`
- 陈旧读检测
- 否定断言：Hlaudz 的 `file_patch` 没有这些降级能力
"""
from __future__ import annotations

import pathlib
import sys

# Windows 控制台默认 GBK，直接 print ✓ 会 UnicodeEncodeError。
# 按 AGENTS.md：中文与符号输出不依赖控制台代码页。
if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass


def _find_repo_root(start: pathlib.Path) -> pathlib.Path:
    for p in [start, *start.parents]:
        if (p / "claudecode319" / "modules").is_dir():
            return p
    raise SystemExit(f"找不到仓库根（从 {start} 向上）")


REPO = _find_repo_root(pathlib.Path(__file__).resolve().parent)
DEM = REPO / "reconstructed319" / "deminified"

M591 = "m0591_0x11be624e.js"
M520 = "m0520_0x11b936b1.js"

# (模块, 精确片段, 期望行号, 说明)
CHECKS: list[tuple[str, str, int, str]] = [
    # ---- 工具 schema ----
    (M591, 'old_string: o().describe("The text to replace")', 73496,
     "§1 old_string"),
    (M591, 'new_string: o().describe("The text to replace it with', 73497,
     "§1 new_string"),
    (M591, 'replace_all: Vv(I()).default(!1).optional().describe(', 73498,
     "§1 replace_all"),
    (M591, "var kso = 1073741824;", 212505, "§3 1 GiB 上限"),

    # ---- 四级匹配器 hWe（在 m0520）----
    (M520, "function hWe(e, n) {", 215, "§2 匹配器入口"),
    (M520, "if (e.includes(n)) return n;", 216, "§2.1 ① 精确"),
    (M520, "let r = b(n),", 217, "§2.2 ② 引号归一化（对 old_string）"),
    (M520, "o = b(e).indexOf(r);", 218, "§2.2 ② 引号归一化（对文件）"),
    (M520, "if (o !== -1) return e.substring(o, o + n.length);", 219,
     "§2.2 ② 原文截取等长片段"),
    (M520, "if (R.test(n)) {", 220, "§2.3 ③ 转义→字符 分支"),
    (M520, "if (l !== n && e.includes(l)) return l;", 222, "§2.3 ③ 命中"),
    (M520, "if (w.test(n)) {", 224, "§2.4 ④ 字符→转义 分支"),
    (M520, "if (L(n) > e.length || !e.includes(\"\\\\u\")) return null;", 225,
     "§2.4 ④ 提前放弃条件"),
    (M520, "return N(n, e);", 226, "§2.4 ④ 调用 N"),

    # ---- 辅助函数 ----
    (M520, "function b(e) {", 139, "§2.2 引号归一化实现"),
    (M520, "var R = /\\\\u[0-9a-fA-F]{4}/,", 142, "§2.3 转义正则"),
    (M520, "w = /[\\u0080-\\uffff]/;", 143, "§2.4 非 ASCII 正则"),
    (M520, "function F(e) {", 144, "§2.3 转义还原"),
    (M520, "return e.replace(/(\\\\\\\\)|\\\\u([0-9a-fA-F]{4})/g,", 145,
     "§2.3 双重转义保护"),
    (M520, "function L(e) {", 158, "§2.4 长度估算"),
    (M520, "function C(e, n) {", 163, "§2.4 反斜杠计数"),
    (M520, "function N(e, n) {", 168, "§2.4 转义模式匹配"),
    (M520, "if (C(e, e.length) % 2 === 1) return null;", 169,
     "§2.4 末尾奇偶校验"),
    (M520, "if (r.every(item => C(n, index + item) % 2 === 0))", 178,
     "§2.4 命中位置奇偶校验"),
    (M520, "return n.indexOf(c[0]) === index ? c[0] : null;", 178,
     "§2.4 要求唯一命中"),
    (M520, "function Mmr(e, n, r) {", 189, "§2.5 大小写风格继承"),
    (M520, "return \"\\\\u\" + (o > l ? f.toUpperCase() : f);", 209,
     "§2.5 跟随原文风格"),

    # ---- 失败文案 ----
    (M591, "No changes to make: old_string and new_string are exactly the same.",
     212711, "§3 新旧相同"),
    (M591, "File is too large to edit", 212744, "§3 文件过大"),
    (M591, "String to replace not found in file.", 212865, "§3 找不到"),
    (M591, "Found ${At} matches of the string to replace", 212877,
     "§3 多处命中"),

    # ---- 陈旧读检测 ----
    (M591, "if (await cP(ke) > Xe.timestamp) {", 212848, "§5 mtime 校验"),
]

# 否定断言：(文件, 片段, 说明)
HLAUDZ = pathlib.Path("D:/git_codes/inner_chatgpt/backend/app/builtin_tools.py")
MUST_NOT = [
    (M520, "replaceAll(n", "CC 有 replace_all，Hlaudz 无（对比项存在性）"),
]


def main() -> int:
    problems: list[str] = []
    ok = 0

    for mod, snippet, want_line, why in CHECKS:
        path = DEM / mod
        if not path.is_file():
            problems.append(f"{mod}: 文件不存在")
            continue
        lines = path.read_text(encoding="utf-8").splitlines()
        hits = [i + 1 for i, ln in enumerate(lines) if snippet in ln]
        if not hits:
            problems.append(f"{mod}: 找不到 {snippet!r}（{why}）")
            print(f"[✗] {mod} {snippet[:44]!r}")
            continue
        if want_line not in hits:
            problems.append(
                f"{mod}: {snippet!r} 实际在 {hits}，文档写 {want_line}（{why}）")
            print(f"[✗] {mod}:{want_line} → 实际 {hits}  {why}")
            continue
        print(f"[✓] {mod}:{want_line} {why}")
        ok += 1

    # ★ Hlaudz 现状断言：确认它确实缺这些能力（否则文档 §4 的对比表是错的）
    if HLAUDZ.is_file():
        src = HLAUDZ.read_text(encoding="utf-8")
        start = src.find("def _patch_impl")
        end = src.find("# ---------------- list_files", start)
        body = src[start:end] if start >= 0 else ""
        missing = []
        for feature, needle in (
            ("引号归一化", "\u2018"),
            ("\\uXXXX 匹配", "\\u4"),
            ("replace_all", "replace_all"),
        ):
            if needle not in body:
                missing.append(feature)
        if len(missing) == 3:
            print("[✓] Hlaudz file_patch 确实缺三项降级能力（对比表成立）")
            ok += 1
        else:
            problems.append(
                f"Hlaudz file_patch 已有部分能力 {set(['引号归一化','\\\\uXXXX 匹配','replace_all']) - set(missing)}"
                " —— 文档 §4 的对比表已过期，需要更新")
            print(f"[✗] Hlaudz file_patch 对比表过期：已具备 {set(['引号归一化','\\\\uXXXX 匹配','replace_all']) - set(missing)}")
    else:
        print("[!] 跳过 Hlaudz 对比（路径不存在）")

    print()
    if problems:
        print(f"✗ 失败 {len(problems)} 项：")
        for p in problems:
            print("  -", p)
        return 1
    print(f"✓ 全部通过（{ok} 项）")
    return 0


if __name__ == "__main__":
    sys.exit(main())