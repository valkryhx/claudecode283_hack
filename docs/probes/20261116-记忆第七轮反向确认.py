# -*- coding: utf-8 -*-
"""第七轮反向确认：证明断言引擎会变红。

必须同时含「应该 PASS」的用例，否则全绿和全红一样不携带信息。
本轮 6 个用例：
  P. 正确断言 + 正确行号   -> 应 PASS
  A. 正确内容 + 错行号     -> 应 FAIL
  B. 不存在的字符串        -> 应 FAIL
  C. 跨模块 must_not 撞名  -> 应 FAIL
  D. 指定行断言反用        -> 应 FAIL（G4 若说第 128 行含加权，实际确实含，写成 not 就该红）
  E. 本轮真实踩过的坑：手工数行差 1 -> 应 FAIL
"""
import importlib.util
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
spec = importlib.util.spec_from_file_location(
    "r7", os.path.join(ROOT, "docs", "probes", "20261116-记忆第七轮-MCP记忆工具与账号记忆.py"))

# 只取 check 函数，不跑主流程
src = open(os.path.join(ROOT, "docs", "probes",
                        "20261116-记忆第七轮-MCP记忆工具与账号记忆.py"),
           encoding="utf-8", newline="").read()
head = src.split("# ── A. memory MCP 服务器")[0]
ns = {"__file__": os.path.join(ROOT, "docs", "probes", "x.py"), "__name__": "r7mod"}
exec(compile(head, "r7head", "exec"), ns)

check = ns["check"]
check_line_not = ns["check_line_not"]
RESULTS = ns["RESULTS"]

CASES = []


def run_case(name, fn, expect_pass):
    before = len(RESULTS)
    ok = fn()
    got = bool(RESULTS[before]) and bool(RESULTS[before][0])
    del RESULTS[before:]
    CASES.append((got == expect_pass, name, expect_pass, got))


run_case("P. 正确断言 + 正确行号 -> 应 PASS", lambda: check(
    "P", "m0143_0x113fa0ff.js", 'mH = "memory",', expect_line=19), True)

run_case("A. 正确内容 + 错行号 -> 应 FAIL", lambda: check(
    "A", "m0143_0x113fa0ff.js", 'mH = "memory",', expect_line=999), False)

run_case("B. 不存在的字符串 -> 应 FAIL", lambda: check(
    "B", "m0143_0x113fa0ff.js", "THIS_DOES_NOT_EXIST_XYZ", expect_line=1), False)

run_case("C. must_not 撞真实存在 -> 应 FAIL", lambda: check(
    "C", "m0290_0x1177ccad.js", 'yg = "memory_read",', must_not=True), False)

run_case("D. 指定行确实含该片段却说「不含」-> 应 FAIL", lambda: check_line_not(
    "D", "m0832_0x124c3af6.js", "Script=Han", 128), False)

run_case("E. 手工数行差 1（本轮真实踩过）-> 应 FAIL", lambda: check(
    "E", "m1636_0x12d49655.js",
    'dd = "anthropic/memory.",', expect_line=267), False)

print("== 第七轮反向确认 ==")
allok = True
for passed, name, expect, got in CASES:
    print("[%s] %s | 期望通过=%s 实际=%s" % ("OK" if passed else "BROKEN", name, expect, got))
    if not passed:
        allok = False
print("\n%s" % ("反向确认通过：引擎会变红。" if allok
                else "反向确认失败：有用例没按预期变化。"))
sys.exit(0 if allok else 1)
