# -*- coding: utf-8 -*-
"""反向确认：证明 `20261118-CC319沙箱机制断言核验.py` 的引擎真的会变红。

规则（AGENTS.md §8.6）：反向确认必须同时包含「应该 PASS」的用例，
否则引擎只会返回 FAIL，全绿和全红都不携带信息。

四个用例：
  A. 正确坐标 + 正确片段            -> 必须 PASS
  B. 坐标漂移（片段在别处）          -> 必须 FAIL，且诊断要说出真实行号
  C. 片段写错（模块里根本没有）      -> 必须 FAIL，且诊断要区分「不存在」而非「漂移」
  D. MUST_NOT 命中（负数断言失效）   -> 必须 FAIL
  E. MUST_NOT 未命中（正确否定断言） -> 必须 PASS

用法： python docs/probes/20261118-CC319沙箱机制断言核验反向确认.py
退出码：0 = 引擎行为符合预期（会变红也会变绿）；1 = 引擎失效
"""
import importlib.util
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
TARGET = os.path.join(HERE, "20261118-CC319沙箱机制断言核验.py")

spec = importlib.util.spec_from_file_location("probe", TARGET)
probe = importlib.util.module_from_spec(spec)
spec.loader.exec_module(probe)

M_SRT = probe.M_SRT

CASES = [
    # (名称, 调用, 期望 good, 期望诊断关键词)
    ("A 正确坐标+正确片段",
     lambda: probe.check_must(M_SRT, 32860, 'let s = ["--cap-drop", "ALL"];'),
     True, None),
    ("B 坐标漂移",
     lambda: probe.check_must(M_SRT, 1, 'let s = ["--cap-drop", "ALL"];'),
     False, "坐标漂移"),
    ("C 片段根本不存在",
     lambda: probe.check_must(M_SRT, 32860, 'let s = ["--this-fragment-does-not-exist-anywhere"];'),
     False, "片段不存在"),
    ("D MUST_NOT 应为 0 但命中",
     lambda: probe.check_must_not(M_SRT, "bwrap"),
     False, "出现"),
    ("E MUST_NOT 正确（0 命中）",
     lambda: probe.check_must_not(M_SRT, "gVisor"),
     True, None),
]


def main():
    ok = bad = 0
    for name, fn, want_good, want_kw in CASES:
        try:
            good, why = fn()
        except Exception as e:  # noqa: BLE001
            print(f"  FAIL {name}: 抛异常 {e!r}")
            bad += 1
            continue
        hit = (good == want_good) and (want_kw is None or (why and want_kw in why))
        if hit:
            ok += 1
            print(f"  OK   {name}  (good={good})")
        else:
            bad += 1
            print(f"  FAIL {name}: good={good} want={want_good} why={why}")
    print(f"\n反向确认: ok={ok} bad={bad}")
    return 0 if bad == 0 else 1


if __name__ == "__main__":
    sys.exit(main())