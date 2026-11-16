# -*- coding: utf-8 -*-
"""第九轮反向确认：证明断言引擎会变红。含 2 个应 PASS 的用例。"""
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
P = os.path.join(ROOT, "docs", "probes", "20261116-记忆第九轮-提示词归属与常量.py")

src = open(P, encoding="utf-8", newline="").read()
head = src.split("# ── A. 归属")[0]
ns = {"__file__": os.path.join(ROOT, "docs", "probes", "x.py"), "__name__": "r9mod"}
exec(compile(head, "r9head", "exec"), ns)

check = ns["check"]
RESULTS = ns["RESULTS"]
K = "m0194_0x11642aa3.js"
S = "m0293_0x1177df9f.js"

CASES = []


def run_case(name, fn, expect_pass):
    before = len(RESULTS)
    fn()
    got = bool(RESULTS[before]) and bool(RESULTS[before][0])
    del RESULTS[before:]
    CASES.append((got == expect_pass, name, expect_pass, got))


run_case("P1. 正确断言 + 正确行号 -> 应 PASS", lambda: check(
    "P1", K, "  Ibe = 4096;", expect_line=14), True)

run_case("P2. 正确 must_not -> 应 PASS", lambda: check(
    "P2", K, "NO_SUCH_TOKEN_ABC", must_not=True), True)

run_case("A. 正确内容 + 错行号 -> 应 FAIL", lambda: check(
    "A", K, "  Ibe = 4096;", expect_line=99), False)

run_case("B. 跨模块错配（常量在 m0194 却去 m0293 找）-> 应 FAIL", lambda: check(
    "B", S, "var lm = \"MEMORY.md\",", expect_line=9), False)

run_case("C. must_not 撞真实存在 -> 应 FAIL", lambda: check(
    "C", K, "  YF = 200,", must_not=True), False)

run_case("D. 手工数行差 1（本轮真实踩过）-> 应 FAIL", lambda: check(
    "D", S, 'var dho = ["user", "feedback", "project", "reference"];', expect_line=3850), False)

run_case("E. 转义写法与源码字面不一致 -> 应 FAIL", lambda: check(
    "E", S, "This directory already exists \\u2014 write to it directly", expect_line=33), False)

print("== 第九轮反向确认：%d 个用例 ==" % len(CASES))
allok = True
for passed, name, expect, got in CASES:
    print("[%s] %s | 期望通过=%s 实际=%s" % ("OK" if passed else "BROKEN", name, expect, got))
    if not passed:
        allok = False
print("\n%s" % ("反向确认通过：引擎会变红。" if allok else "反向确认失败：有用例没按预期变化。"))
sys.exit(0 if allok else 1)
