# -*- coding: utf-8 -*-
"""反向确认：证明「断言核验」不是假验收。

AGENTS.md §8.5 的教训是「测试变绿不能证明它有效」。本脚本对核验引擎做两次
**故意错误**的注入，要求它必须报 FAIL：

  case A: 断言一个不存在的行号      -> 必须 FAIL（证明行号断言有效）
  case B: 断言一个不存在的字符串    -> 必须 FAIL（证明内容断言有效）
  case C: must_not 断言一个存在的串 -> 必须 FAIL（证明否定断言有效）
  case D: 断言正确行号              -> 必须 PASS（证明不是无脑全红）

只要有一个 case 不符合预期，就说明核验引擎有缺陷，本脚本以非 0 退出。
"""
import importlib.util
import io
import os
import sys
from contextlib import redirect_stdout

HERE = os.path.dirname(os.path.abspath(__file__))
ENGINE = os.path.join(HERE, "20261113-记忆调研断言核验.py")

M0832 = "m0832_0x124c3af6.js"


def load_engine():
    spec = importlib.util.spec_from_file_location("memcheck", ENGINE)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def run_case(mod, name, fn, expect_ok, **kw):
    """清空结果后执行一条 check，返回是否通过 + 明细。"""
    mod.RESULTS.clear()
    with redirect_stdout(io.StringIO()):
        mod.check(name, **{"fn": fn}, **kw) if False else mod.check(name, fn, **kw)
    got = mod.RESULTS[0][0] if mod.RESULTS else None
    detail = mod.RESULTS[0][2] if mod.RESULTS else "(无结果)"
    ok = got == expect_ok
    print(f"[{'PASS' if ok else 'MISMATCH'}] {name}")
    print(f"         期望断言结果={expect_ok}，实际={got}  ({detail})")
    return ok


def main():
    mod = load_engine()
    print("== 反向确认：核验引擎必须能报错 ==\n")
    results = []

    # D 先做（正向）：已知正确
    results.append(
        run_case(
            mod, "D. 正确行号应 PASS", M0832,
            expect_ok=True, needle='querySource: "extract_memories_first_look"', expect_line=461,
        )
    )

    # A: 错误行号必须 FAIL
    results.append(
        run_case(
            mod, "A. 错误行号应 FAIL", M0832,
            expect_ok=False, needle='querySource: "extract_memories_first_look"', expect_line=9999,
        )
    )

    # B: 不存在的字符串必须 FAIL
    results.append(
        run_case(
            mod, "B. 不存在的字符串应 FAIL", M0832,
            expect_ok=False, needle="THIS_STRING_DOES_NOT_EXIST_ANYWHERE_XYZ", expect_line=461,
        )
    )

    # C: must_not 断言一个真实存在的串 -> 必须 FAIL
    results.append(
        run_case(
            mod, "C. must_not 撞到真实存在的串应 FAIL", M0832,
            expect_ok=False, needle="extractMemories", must_not=True,
        )
    )

    # C2: must_not 断言一个确实不存在的串 -> 必须 PASS
    results.append(
        run_case(
            mod, "C2. must_not 对不存在的串应 PASS", M0832,
            expect_ok=True, needle="THIS_STRING_DOES_NOT_EXIST_ANYWHERE_XYZ", must_not=True,
        )
    )

    print()
    if all(results):
        print("反向确认通过：核验引擎在错误断言下确实变红，不是假验收。")
        return 0
    print("反向确认失败：核验引擎有缺陷（全绿不代表正确）。")
    return 1


if __name__ == "__main__":
    sys.exit(main())
