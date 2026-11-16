# -*- coding: utf-8 -*-
"""第九轮：记忆提示词的归属与配套常量。

回答「这份提示词属于读还是写」：它是系统提示词的常驻段，读写两侧共用。
并补齐 m0194 里六个同族常量的真实值与行号。
"""
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DEM = os.path.join(ROOT, "reconstructed319", "deminified")

RESULTS = []
CACHE = {}


def _lines(mod):
    if mod not in CACHE:
        with open(os.path.join(DEM, mod), encoding="utf-8", newline="") as f:
            CACHE[mod] = f.read().split("\n")
    return CACHE[mod]


def check(label, mod, snippet, expect_line=None, must_not=False, nth=1):
    lines = _lines(mod)
    hits = [i + 1 for i, ln in enumerate(lines) if snippet in ln]
    ok = (len(hits) == 0) if must_not else (len(hits) > 0)
    detail = ""
    if must_not:
        detail = "期望不存在，命中 %d 处%s" % (len(hits), (" @" + str(hits[:5])) if hits else "")
    elif hits:
        got = hits[nth - 1] if len(hits) >= nth else None
        if expect_line is not None:
            ok = (got == expect_line)
            detail = "命中 %d 处 %s，取第%d个=%s，期望 %s" % (len(hits), hits[:5], nth, got, expect_line)
        else:
            detail = "命中 %d 处 %s" % (len(hits), hits[:5])
    else:
        detail = "未命中"
    RESULTS.append((ok, label, detail))
    return ok


S = "m0293_0x1177df9f.js"
K = "m0194_0x11642aa3.js"
E = "m0832_0x124c3af6.js"
Y = "m2159_0x138a5541.js"
M = "m0591_0x11be624e.js"
I = "m0191_0x1155a4cc.js"

# ── A. 归属：系统提示词层的三个装配入口 ─────────────────────────────
check("A1 主系统提示词装配 memoryMechanicsPrompt", Y,
      "memoryMechanicsPrompt = customSystemPrompt !== void 0 && met() ? await WNn(Fue(r)) : null,",
      expect_line=18127)

check("A2 压缩时以 memory 为 key 重建", M,
      "memory${G}`, async () => ago(await WNn(h, {", expect_line=110325)

check("A3 排除开关 excludeDynamicSections", M,
      "r?.excludeDynamicSections ? void 0 : iCr", expect_line=110325)

check("A4 met() 的真实判据是 va() 有值", I, "function met() {", expect_line=2648)

check("A5 met 内部 return va() !== void 0", I, "return va() !== void 0;", expect_line=2649)

check("A6 WNn 本体是提示词总装配", S, "async function WNn(e, n = {}, r) {", expect_line=4643)

check("A7 li 是模板函数", S, "function li(e, n, r) {", expect_line=4569)

# ── B. 七段结构与关键原文 ──────────────────────────────────────────
check("B1 开场：目录已存在，不要 mkdir", K,
      "This directory already exists \\u2014 write to it directly with the Write tool", expect_line=33)

check("B2 四类型段", S, '"## Types of memory"', expect_line=3857, nth=2)

check("B3 存法是两步", S, "Saving a memory is a two-step process:", expect_line=3895)

check("B4 MEMORY.md 是索引不是记忆", S,
      "is an index, not a memory", expect_line=3895)

check("B5 索引每行约 150 字符以内", S, "one line, under ~150 characters", expect_line=3895)

check("B6 禁止项五类段", S, '"## What NOT to save in memory"', expect_line=3866)

check("B7 何时访问段", S, '"## When to access memories"', expect_line=3868)

check("B8 推荐前先核实段", S, '"## Before recommending from memory"', expect_line=3869)

check("B9 frontmatter 模板生成器 cl", S, "function cl(e) {", expect_line=3846)

check("B10 frontmatter 的 type 取自四类型表 dho", S,
      'var dho = ["user", "feedback", "project", "reference"];', expect_line=3849)

# ── C. m0194 的六个常量 ───────────────────────────────────────────
check("C1 索引文件名 lm = MEMORY.md", K, 'var lm = "MEMORY.md",', expect_line=9)

check("C2 索引行数阈值 YF = 200", K, "  YF = 200,", expect_line=10)

check("C3 Gee = 25000", K, "  Gee = 25000,", expect_line=11)

check("C4 gwo = 4 * Gee", K, "  gwo = 4 * Gee,", expect_line=12)

check("C5 W2e = 200（与 YF 同值不同常量）", K, "  W2e = 200,", expect_line=13)

check("C6 单文件字节上限 Ibe = 4096", K, "  Ibe = 4096;", expect_line=14)

check("C7 原文用 en(Ibe) 渲染成 4.0 KB", S,
      "Keep each memory file under ${en(Ibe)} including frontmatter", expect_line=3885)

check("C8 索引 200 行后截断的原文", S,
      "lines after ${YF} will be truncated", expect_line=3895)

# ── D. 子代理任务书与系统提示词的区别 ──────────────────────────────
check("D1 子代理任务书首句", E,
      "You are now acting as the memory extraction subagent.", expect_line=494)

check("D2 回指系统提示词的 Memory 段", E,
      "from the Memory section of your system prompt", expect_line=494)

check("D3 工具白名单：MCP 与 Agent 被拒", E,
      "All other tools \\u2014 MCP, Agent, write-capable", expect_line=492)

check("D4 轮流预算：turn1 并行读 turn2 并行写", E,
      "Do not interleave reads and writes across multiple turns.", expect_line=493)

check("D5 只准用最近 N 条，不许 grep 源码", E,
      "no grepping source files", expect_line=494)

check("D6 无事可写只输出 Nothing to save.", E,
      "If nothing is worth saving, output only 'Nothing to save.'", expect_line=494)

check("D7 MCP 不可用时跳过项目共享部分", E,
      "skip anything the scope guidance marks as shared with the project", expect_line=494)

check("D8 子代理可用工具集合 Ir", E, "var Ir = new Set([ze, _r, Qr, dt, Yt]),", expect_line=533)

# ── E. 否定断言：提示词不在写闸门模块里 ────────────────────────────
check("E1 四类型定义不在写入闸门 m0832", E, '"## Types of memory"', must_not=True)

check("E2 子代理任务书不含类型定义正文（只回指）", E, "<name>feedback</name>", must_not=True)

print("== 第九轮核验 ==")
npass = 0
for ok, label, detail in RESULTS:
    print("[%s] %-56s | %s" % ("PASS" if ok else "FAIL", label, detail))
    if ok:
        npass += 1
print("\n通过 %d / %d" % (npass, len(RESULTS)))
sys.exit(0 if npass == len(RESULTS) else 1)
