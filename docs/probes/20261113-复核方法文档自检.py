# -*- coding: utf-8 -*-
"""核验《20261113-源码调研复核方法.md》自身引用的例子是否仍然成立。

为什么需要：方法论文档最容易腐烂——它讲的是「必须查证据」，
但自己的举例（哪个符号是什么、几处命中、某行是什么）却没人复核。
本脚本把这些举例全部断言化，让它自己和它教的方法一致。

用法：
  python docs/probes/20261113-复核方法文档自检.py
  python docs/probes/20261113-复核方法文档自检.py --verbose
"""
import os
import re
import sys

ROOT = r"D:/git_codes/claudecode283_hack"
DEM = os.path.join(ROOT, "reconstructed319/deminified")
DOC = os.path.join(ROOT, "docs/20261113-源码调研复核方法.md")
AGENTS = os.path.join(ROOT, "AGENTS.md")

_cache = {}


def lines_of(fn):
    if fn not in _cache:
        p = os.path.join(DEM, fn)
        _cache[fn] = (
            open(p, encoding="utf-8", errors="replace").read().split("\n")
            if os.path.exists(p)
            else None
        )
    return _cache[fn]


RESULTS = []


def ok(label, cond, detail=""):
    RESULTS.append((bool(cond), label, detail))


def check_line(label, fn, no, expect_substr):
    ls = lines_of(fn)
    if ls is None:
        ok(label, False, f"{fn} 不存在")
        return
    if no < 1 or no > len(ls):
        ok(label, False, f"{fn} 只有 {len(ls)} 行")
        return
    actual = ls[no - 1]
    good = expect_substr in actual
    ok(label, good, f"{fn}:{no} = {actual.strip()[:90]}")


def check_count(label, fn, needle, expect):
    text = "\n".join(lines_of(fn) or [])
    got = text.count(needle)
    ok(label, got == expect, f"{fn} 命中 {got} 次（期望 {expect}）")


def main():
    verbose = "--verbose" in sys.argv

    # ===== 文档 §1 的符号身份示例 =====
    check_line("§1 ze = Read", "m0175_0x1153be5b.js", 6, 'var ze = "Read"')
    check_line("§1 dt = Edit", "m0176_0x1153bfed.js", 6, 'var dt = "Edit"')
    # 文档说 m0126:1777 的 as 是一串 PowerShell 路径
    check_line("§1 as 在 m0126 是别的", "m0126_0x1139c145.js", 1777, "PowerShell")
    # 文档说 m0094:237 的 yg 是正则
    check_line("§1 yg 在 m0094 是正则", "m0094_0x112cc57f.js", 237, "var yg = /^")

    # ===== 文档 §2 单点确认示例 =====
    check_count('§2 dc("nested_memory") 有 2 处', "m0591_0x11be624e.js",
                'dc("nested_memory"', 2)
    check_line("§2 _rn 定义在 76088", "m0591_0x11be624e.js", 76088, "function _rn(e)")
    check_line("§2 B9e 定义在 76043", "m0591_0x11be624e.js", 76043, "function B9e(e)")

    # ===== 文档 §5.1 反向确认抓到的三处 =====
    check_line("§5.1 requireReadBeforeWrite 在 :63", "m0832_0x124c3af6.js", 63,
               "requireReadBeforeWrite: !0")
    check_line("§5.1 :62 是外层调用", "m0832_0x124c3af6.js", 62,
               "let u = await nZt(e.readFileState, s, {")
    check_line("§5.1 empty 判决原文", "m0832_0x124c3af6.js", 422,
               'userTurns_2 = T.userTurns, b === "") return w("empty")')
    check_count("§5.1 the pass is not skipped 有 4 处", "m0832_0x124c3af6.js",
                "the pass is not skipped", 4)

    # ===== 文档 §9 列出的探针脚本必须真实存在 =====
    probes = [
        "docs/probes/20261113-319-chunk映射核验.py",
        "docs/probes/20261113-319-符号定义定位.py",
        "docs/probes/20261113-319-工具名常量核验.py",
        "docs/probes/20261113-记忆调研断言核验.py",
        "docs/probes/20261113-记忆调研核验反向确认.py",
    ]
    for p in probes:
        ok(f"§9 脚本存在: {os.path.basename(p)}", os.path.exists(os.path.join(ROOT, p)))

    # ===== 方法文档与 AGENTS.md 的互相引用 =====
    dtext = open(DOC, encoding="utf-8").read()
    atext = open(AGENTS, encoding="utf-8").read()
    ok("AGENTS.md 提到 §8.6", "## 8.6" in atext)
    ok("AGENTS.md §8.6 指向方法文档",
       "docs/20261113-源码调研复核方法.md" in atext)
    ok("AGENTS.md 文档索引收录方法文档",
       "20261113-源码调研复核方法.md" in atext)
    ok("AGENTS.md 禁忌清单收录「全仓 grep 压缩符号」",
       "禁止全仓 grep 压缩符号" in atext)
    ok("方法文档回指 AGENTS.md §8.5", "§8.5" in dtext or "8.5" in dtext)
    ok("方法文档记录了 ze 的真实取值", 'var ze = "Read"' in dtext)
    ok("方法文档声明了「自洽 ≠ 正确」", "自洽 ≠ 正确" in dtext)

    # ===== 汇总 =====
    fails = [r for r in RESULTS if not r[0]]
    print(f"== 复核方法文档自检：{len(RESULTS)} 条，"
          f"通过 {len(RESULTS) - len(fails)}，失败 {len(fails)} ==\n")
    for good, label, detail in RESULTS:
        if not good:
            print(f"[FAIL] {label}\n       {detail}")
    if verbose:
        print("\n-- 通过项 --")
        for good, label, detail in RESULTS:
            if good:
                print(f"[ ok ] {label}  {detail}")
    if fails:
        return 1
    print("全部通过：方法文档的举例仍然与源码一致。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
