# -*- coding: utf-8 -*-
"""第八轮反向确认：证明断言引擎会变红。含 2 个应 PASS 的用例。

本轮抓出过的真实错误模式：
  - 手工数行差 1（D8–D10、E8–E11、F2）
  - 多处命中未指定 nth（A3–A7 的两份副本、B8 的两处）
  - 断言粒度与结论粒度不一致（G1 写成全模块 must_not）
"""
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
P = os.path.join(ROOT, "docs", "probes", "20261116-记忆第八轮-提示词层与多库.py")

src = open(P, encoding="utf-8", newline="").read()
head = src.split("# ── A. 记忆系统提示词本体")[0]
ns = {"__file__": os.path.join(ROOT, "docs", "probes", "x.py"), "__name__": "r8mod"}
exec(compile(head, "r8head", "exec"), ns)

check = ns["check"]
check_line_not = ns["check_line_not"]
RESULTS = ns["RESULTS"]
S = "m0293_0x1177df9f.js"

CASES = []


def run_case(name, fn, expect_pass):
    before = len(RESULTS)
    fn()
    got = bool(RESULTS[before]) and bool(RESULTS[before][0])
    del RESULTS[before:]
    CASES.append((got == expect_pass, name, expect_pass, got))


# ── 应 PASS 的两个 ──
run_case("P1. 正确断言 + 正确行号 -> 应 PASS", lambda: check(
    "P1", S, "function li(e, n, r) {", expect_line=4569), True)

run_case("P2. 正确 must_not -> 应 PASS", lambda: check(
    "P2", S, "THIS_TEXT_DOES_NOT_EXIST_ZZZ", must_not=True), True)

# ── 应 FAIL 的 ──
run_case("A. 正确内容 + 错行号 -> 应 FAIL", lambda: check(
    "A", S, "function li(e, n, r) {", expect_line=999), False)

run_case("B. 不存在的字符串 -> 应 FAIL", lambda: check(
    "B", S, "NO_SUCH_STRING_QQQ", expect_line=1), False)

run_case("C. must_not 撞真实存在 -> 应 FAIL", lambda: check(
    "C", S, "function li(", must_not=True), False)

run_case("D. 多处命中不指定 nth（本轮真实踩过）-> 应 FAIL", lambda: check(
    "D", S, '"## Types of memory"', expect_line=3857), False)

run_case("E. 手工数行差 1（本轮真实踩过）-> 应 FAIL", lambda: check(
    "E", "m1968_0x1340550d.js", 'type: "content_sha256",', expect_line=1269), False)

run_case("F. 断言片段跨行导致必然未命中 -> 应 FAIL", lambda: check(
    "F", S, 'function Hl(e) {\n  return e !== "user";', expect_line=4860), False)

run_case("G. 指定行确实含该片段却说「不含」-> 应 FAIL", lambda: check_line_not(
    "G", S, 'displayName: "Persistent Agent Memory",', 4994), False)

run_case("H. 跨模块 must_not 撞真实存在 -> 应 FAIL", lambda: check(
    "H", "m0591_0x11be624e.js", "account_memory_recall", must_not=True), False)

print("== 第八轮反向确认：%d 个用例 ==" % len(CASES))
allok = True
for passed, name, expect, got in CASES:
    print("[%s] %s | 期望通过=%s 实际=%s" % ("OK" if passed else "BROKEN", name, expect, got))
    if not passed:
        allok = False
print("\n%s" % ("反向确认通过：引擎会变红。" if allok else "反向确认失败：有用例没按预期变化。"))
sys.exit(0 if allok else 1)
