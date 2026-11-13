# -*- coding: utf-8 -*-
"""反向确认：证明《复核方法文档自检》不是假验收。

自检脚本用的是 check_line / check_count 两条代码路径。本脚本对它们注入
**故意错误**的期望，要求必须 FAIL；再放一条正确期望，要求必须 PASS。

用法：
  python docs/probes/20261113-复核方法文档自检反向确认.py
"""
import importlib.util
import io
import os
import sys
from contextlib import redirect_stdout

HERE = os.path.dirname(os.path.abspath(__file__))
ENGINE = os.path.join(HERE, "20261113-复核方法文档自检.py")


def load():
    spec = importlib.util.spec_from_file_location("docselfcheck", ENGINE)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def run(mod, label, fn, expect_ok, kind="line", **kw):
    mod.RESULTS.clear()
    with redirect_stdout(io.StringIO()):
        if kind == "line":
            mod.check_line(label, fn, **kw)
        else:
            mod.check_count(label, fn, **kw)
    got = mod.RESULTS[0][0] if mod.RESULTS else None
    detail = mod.RESULTS[0][2] if mod.RESULTS else "(无结果)"
    good = got == expect_ok
    print(f"[{'PASS' if good else 'MISMATCH'}] {label}")
    print(f"         期望={expect_ok} 实际={got}  ({detail})")
    return good


def main():
    mod = load()
    print("== 反向确认：文档自检引擎必须能报错 ==\n")
    rs = []

    # D 正向：正确行号 + 正确子串 -> PASS
    rs.append(run(mod, "D. 正确行号应 PASS", "m0175_0x1153be5b.js",
                  expect_ok=True, no=6, expect_substr='var ze = "Read"'))

    # A 错误行号 -> FAIL
    rs.append(run(mod, "A. 错误行号应 FAIL", "m0175_0x1153be5b.js",
                  expect_ok=False, no=9999, expect_substr='var ze = "Read"'))

    # B 正确行号但子串错 -> FAIL（证明不只是比行号）
    rs.append(run(mod, "B. 子串不符应 FAIL", "m0175_0x1153be5b.js",
                  expect_ok=False, no=6, expect_substr='var ze = "WebFetch"'))

    # C check_count 计数错 -> FAIL
    rs.append(run(mod, "C. 计数错应 FAIL", "m0591_0x11be624e.js",
                  expect_ok=False, kind="count",
                  needle='dc("nested_memory"', expect=999))

    # C2 check_count 计数对 -> PASS
    rs.append(run(mod, "C2. 计数对应 PASS", "m0591_0x11be624e.js",
                  expect_ok=True, kind="count",
                  needle='dc("nested_memory"', expect=2))

    print()
    if all(rs):
        print("反向确认通过：文档自检引擎在错误期望下确实变红。")
        return 0
    print("反向确认失败：自检引擎有缺陷。")
    return 1


if __name__ == "__main__":
    sys.exit(main())
