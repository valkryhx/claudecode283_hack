# -*- coding: utf-8 -*-
"""反向确认：证明 20261116-记忆与Projects交叉验证.py 的断言引擎真的会变红。

AGENTS.md §8.6 要求：反向确认必须同时含「应该 PASS」的用例，
否则全绿和全红一样不携带信息。

四个用例：
  D. 正确断言 + 正确期望行号 -> 应 PASS（证明引擎不是恒 FAIL）
  A. 正确内容 + 错行号       -> 应 FAIL（证明行号参与判定）
  B. 不存在的字符串           -> 应 FAIL（证明找不到会红）
  C. must_not 撞真实存在      -> 应 FAIL（证明否定断言有效）
  E. 语义错配（把状态卡的片段挂到记忆写入的标题下）-> 应 FAIL
"""
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(ROOT, "docs", "probes"))

import importlib.util

spec = importlib.util.spec_from_file_location(
    "crossval", os.path.join(ROOT, "docs", "probes", "20261116-记忆与Projects交叉验证.py"))
cv = importlib.util.module_from_spec(spec)
spec.loader.exec_module(cv)

M = "m0848_0x124d7ee6.js"
CASES = []


def run_case(name, fn, expect_pass):
    before = len(cv.RESULTS)
    ok = fn()
    after = cv.RESULTS[before:]
    del cv.RESULTS[before:]
    got = bool(ok)
    passed = got == expect_pass
    CASES.append((passed, name, expect_pass, got, after))


def case_d():
    return cv.check("D 正确断言", M,
                    "let ke = qn.executeExtractMemories(G, toolUseContext_5.appendSystemMessage);",
                    expect_line=3852)


def case_a():
    return cv.check("A 错行号", M,
                    "let ke = qn.executeExtractMemories(G, toolUseContext_5.appendSystemMessage);",
                    expect_line=9999)


def case_b():
    return cv.check("B 不存在的串", M,
                    "THIS_STRING_DOES_NOT_EXIST_ANYWHERE_XYZ", expect_line=1)


def case_c():
    return cv.check("C must_not 撞真实存在", M, "executeExtractMemories", must_not=True)


def case_e():
    # 状态卡的精确片段 + 记忆写入的行号：内容与坐标错配，必须红
    return cv.check("E 语义错配（状态卡片段配记忆写入行号）", M,
                    'subtype: "post_turn_summary",', expect_line=3852)


def case_f():
    """dream 的字节偏移当行号用：这轮真实踩过的错误（m0833 只有 410 行）。"""
    return cv.check("F 把字节偏移当行号（m0833 无 758814 行）",
                    "m0833_0x124cce31.js", "dream", expect_line=758814)


def case_g():
    """cross-module 撞名：dream 只存在于 m0833，m0848 里不该有。"""
    return cv.check("G must_not 跨模块（m0848 不含 auto_dream 的 fork 标记）",
                    M, 'fork: "dream"', must_not=True)


def case_h():
    """同一片段多处命中：不指定 nth 会取到第 1 处，行号断言必须能抓住。"""
    # .slice(0, nD) 在 m0591 有 2 处（:69678 与 :153193），默认 nth=1 会落到 69678
    return cv.check("H 多处命中未指定 nth（应落到第 1 处而非第 2 处）",
                    "m0591_0x11be624e.js", ".slice(0, nD)", expect_line=153193)


def case_i():
    """默认值口径错误：把"无配置时的兜底 1"当成"schema 默认 5"。"""
    return cv.check("I 把兜底值 1 当成 schema 默认（m0832 只有兜底，没有 default(5)）",
                    "m0832_0x124c3af6.js", ".default(5)", expect_line=959)


def case_j():
    """本轮最严重的错误：把 CJK 加权套到默认 legacy 路径上。
    加权在 bt（:137），legacy 走 Rt（:219）——在 Rt 那一行找不到加权正则。"""
    return cv.check("J 在 legacy 的 Rt 行找 CJK 加权正则（该行没有）",
                    "m0832_0x124c3af6.js", "Script=Han", expect_line=219)


def case_k():
    """把 KEPT_MOST（nD=200）与 SHOWN_MOST（pTe=20）当成同一个常量。"""
    return cv.check("K 在 nD 定义行找 SHOWN_MOST 的次常量 pTe（不同行）",
                    "m0591_0x11be624e.js", "var pTe = 20;", expect_line=69141)


def case_l():
    """第五轮的假设错误：以为 nested_memory 也会避开 relevant_memories。
    azr 里只有 nested_memory 的 flatMap，没有 relevant_memories 字样。"""
    return cv.check("L 在 azr 去重函数里找 relevant_memories（不存在，是单向去重）",
                    "m0591_0x11be624e.js", 'r.type === "relevant_memories"', expect_line=151796)


def case_m():
    """以为 .slice(0,5) 的 5 有配置键。Uzr 体内 0 处 v(" / .data. / config。"""
    return cv.check("M 在 Uzr 的 slice 行找配置读取（硬编码，没有）",
                    "m0591_0x11be624e.js", 'v("', expect_line=153870)


def case_n():
    """误以为 Y3e 只返回本轮新增（实际返回剩余全部，所以扣留通知会持续重复）。"""
    return cv.check("N 在 Y3e 里找 'return 新增' 语义（它是 return 剩余全部）",
                    "m0591_0x11be624e.js", "return Array.from(r.values())", expect_line=69186)


def case_o():
    """误以为 extract 没有并发保护。b 标志就是进程内合并开关。"""
    return cv.check("O 在 extract 的并发分支行找 coalesced 遥测（不在此行）",
                    "m0832_0x124c3af6.js", "stashing for trailing run", expect_line=1285)


run_case("D. 正确断言 + 正确行号 -> 应 PASS", case_d, True)
run_case("A. 正确内容 + 错行号 -> 应 FAIL", case_a, False)
run_case("B. 不存在的字符串 -> 应 FAIL", case_b, False)
run_case("C. must_not 撞真实存在 -> 应 FAIL", case_c, False)
run_case("E. 语义错配（片段与行号不匹配）-> 应 FAIL", case_e, False)
run_case("F. 字节偏移当行号（本轮真实踩过的坑）-> 应 FAIL", case_f, False)
run_case("G. 跨模块 must_not -> 应 PASS（m0848 确实没有）", case_g, True)
run_case("H. 多处命中未指定 nth -> 应 FAIL", case_h, False)
run_case("I. schema 默认值写错模块 -> 应 FAIL", case_i, False)
run_case("J. 把 chat 的 CJK 加权套到 legacy 行 -> 应 FAIL", case_j, False)
run_case("K. 混淆 KEPT_MOST 与 SHOWN_MOST -> 应 FAIL", case_k, False)
run_case("L. 以为去重是双向的 -> 应 FAIL", case_l, False)
run_case("M. 以为 5 可配置 -> 应 FAIL", case_m, False)
run_case("N. 以为 owed 只提示一次（Y3e 返回剩余全部，不是新增）-> 应 FAIL", case_n, False)
run_case("O. 以为只有 dream 才有并发保护（extract 也有进程内合并）-> 应 FAIL", case_o, False)

print("== 反向确认：十五个用例都应满足预期 ==")
allok = True
for passed, name, expect, got, detail in CASES:
    tag = "PASS" if passed else "BROKEN"
    print("\n[%s] %s" % (tag, name))
    print("        期望通过=%s，实际=%s" % (expect, got))
    for ok, label, d in detail:
        print("        %s %s | %s" % ("PASS" if ok else "FAIL", label, d))
    if not passed:
        allok = False

print("\n%s" % ("反向确认通过：断言引擎会变红，不是恒绿。" if allok
                else "反向确认失败：有用例没按预期变化，断言引擎不可信。"))
sys.exit(0 if allok else 1)
