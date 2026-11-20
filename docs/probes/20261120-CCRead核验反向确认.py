"""反向确认：证明 Read 机制核验脚本真的能抓到错误断言。

## 三个负向用例 + 一个必须 PASS 的基线

1. 把 `$tn = 2000` 的期望行号写错（604 → 9999）→ 必须红
2. 把 `pt = !Fe && ...` 的片段改成不存在的串 → 必须红
3. 把 must_not 改成源码里**确实存在**的串 → 必须红

外加基线：不改任何断言时全绿。没有基线，「全红」不携带信息。

## 为什么这条反向确认必须存在

`20261120-CCRead大文件机制核验.py` 是一条**纯静态断言**脚本 ——
它读源码、比行号。这种脚本最容易出现两种假信号：

- 行号漂移（源码改一个字符就全错，但脚本仍"通过"是因为片段匹配放得松）
- must_not 写成「整模块不含」，而真正的语义是「指定行不含」

本轮实际踩到：第一版把 `isPartialView: !0` 的期望行号手数成 148121，
实际 148125；`pt = !Fe && ...` 手数成 73837，实际 73834。
**两处都是手数，两处都错。**
"""
from __future__ import annotations

import os
import pathlib
import subprocess
import sys

PYTEST_ENV = {**os.environ, "PYTHONIOENCODING": "utf-8"}


def _find_repo_root(start: pathlib.Path) -> pathlib.Path:
    for p in [start, *start.parents]:
        if (p / "claudecode319" / "modules").is_dir():
            return p
    raise SystemExit(f"找不到仓库根（从 {start} 向上）")


REPO = _find_repo_root(pathlib.Path(__file__).resolve().parent)
PROBE = REPO / "docs" / "probes" / "20261120-CCRead大文件机制核验.py"


def _run() -> tuple[int, str]:
    proc = subprocess.run(
        [sys.executable, str(PROBE)],
        cwd=REPO, capture_output=True, text=True, timeout=120,
        encoding="utf-8", errors="replace", env=PYTEST_ENV,
    )
    return proc.returncode, (proc.stdout or "") + (proc.stderr or "")


def _inject_and_run(old: str, new: str) -> tuple[str, int, str]:
    orig = PROBE.read_text(encoding="utf-8")
    if old not in orig:
        return "inject_failed", -1, f"找不到注入片段：{old[:80]!r}"
    patched = orig.replace(old, new, 1)
    if patched == orig:
        return "inject_failed", -1, "replace 没有改变内容"
    try:
        PROBE.write_text(patched, encoding="utf-8", newline="\n")
        rc, out = _run()
        return "ran", rc, out
    finally:
        PROBE.write_text(orig, encoding="utf-8", newline="\n")


def main() -> int:
    problems: list[str] = []
    checked = 0

    # ---- 基线必须全绿 ----
    rc, out = _run()
    if rc == 0:
        print("[✓ 基线] 未修改时全绿")
        checked += 1
    else:
        problems.append(f"基线应全绿，实际 rc={rc}\n{out[-600:]}")
        print("[✗ 基线] 没改就红了")

    # ---- 用例 1：行号写错必须被发现 ----
    status, rc, out = _inject_and_run(
        '    ("m0274_0x117329cf.js", "$tn = 2000", 604,',
        '    ("m0274_0x117329cf.js", "$tn = 2000", 9999,',
    )
    if status == "inject_failed":
        problems.append(f"用例1 注入失败：{out}")
        print(f"[✗ 用例1] 注入失败：{out}")
    elif rc != 0:
        print(f"[✓ 用例1] 行号写错 → 变红 (rc={rc})")
        checked += 1
    else:
        problems.append("用例1：行号改成 9999 仍然通过 —— 行号断言无因果力")
        print("[✗ 用例1] 行号写错仍然绿")

    # ---- 用例 2：片段不存在必须被发现 ----
    status, rc, out = _inject_and_run(
        '"pt = !Fe && !Don(G) && !CFn(Xe, s.remoteCall)"',
        '"pt = 完全不存在的一段代码"',
    )
    if status == "inject_failed":
        problems.append(f"用例2 注入失败：{out}")
        print(f"[✗ 用例2] 注入失败：{out}")
    elif rc != 0:
        print(f"[✓ 用例2] 片段不存在 → 变红 (rc={rc})")
        checked += 1
    else:
        problems.append("用例2：换成本不存在的片段仍然通过 —— 片段匹配无因果力")
        print("[✗ 用例2] 片段不存在仍然绿")

    # ---- 用例 3：must_not 命中真实存在的串必须变红 ----
    status, rc, out = _inject_and_run(
        '("m0591_0x11be624e.js", "只读了片段", "CC 里没有「只读了片段」这个报错"),',
        '("m0591_0x11be624e.js", "File has not been read yet", '
        '"故意用一个源码里确实存在的串，验证 must_not 会变红"),',
    )
    if status == "inject_failed":
        problems.append(f"用例3 注入失败：{out}")
        print(f"[✗ 用例3] 注入失败：{out}")
    elif rc != 0:
        print(f"[✓ 用例3] must_not 命中真实串 → 变红 (rc={rc})")
        checked += 1
    else:
        problems.append("用例3：must_not 命中真实存在的串仍然通过 —— 否定断言无因果力")
        print("[✗ 用例3] must_not 命中仍然绿")

    print()
    if problems:
        print(f"✗ 反向确认失败 {len(problems)} 项：")
        for p in problems:
            print("  -", p)
        return 1
    print(f"✓ 反向确认全部符合预期（{checked} 项）")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())