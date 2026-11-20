"""反向确认：证明 `20261120-CC-Edit机制核验.py` 会因注入的错误而变红。

## 为什么必须做（AGENTS.md §8.6）

上一份核验脚本一次抓出 8 处坐标错——这说明核验本身有效。但「它现在全绿」
不等于「它将来会变红」。必须证明：
- 注入一个错行号 → 必须 FAIL
- 注入一个不存在的片段 → 必须 FAIL
- 不改动 → 必须 PASS（否则红的不是能力问题）

## 三个用例必须都过

只测「应该红」而没测「应该绿」，或反之，都不带信息量。
"""
from __future__ import annotations

import pathlib
import subprocess
import sys

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

SCRIPT = pathlib.Path(__file__).with_name("20261120-CC-Edit机制核验.py")
SRC = SCRIPT.read_text(encoding="utf-8")


def run() -> tuple[int, str]:
    r = subprocess.run([sys.executable, str(SCRIPT)], capture_output=True,
                       text=True, encoding="utf-8", errors="replace")
    return r.returncode, (r.stdout or "") + (r.stderr or "")


def try_patch(old: str, new: str, label: str) -> bool:
    """临时改脚本跑一次，返回是否变红。改完必恢复。"""
    patched = SRC.replace(old, new, 1)
    if patched == SRC:
        print(f"✗ [{label}] 注入字符串没匹配上 —— 无法证明任何事")
        return False
    try:
        SCRIPT.write_text(patched, encoding="utf-8", newline="\n")
        rc, out = run()
    finally:
        SCRIPT.write_text(SRC, encoding="utf-8", newline="\n")
    if rc == 0:
        print(f"✗ [{label}] 注入后仍然全绿 ⇒ 核验无效")
        return False
    print(f"[✓] [{label}] 注入后 FAIL（符合预期）")
    return True


def main() -> int:
    # 用例 1：基线必须 PASS
    rc, out = run()
    if rc != 0:
        print("✗ 基线不通过，反向确认无意义：")
        print(out[-600:])
        return 1
    print("[✓] 用例 1（基线）：PASS")

    # 用例 2：错行号必须 FAIL
    ok2 = try_patch('"function hWe(e, n) {", 215,', '"function hWe(e, n) {", 999,',
                    "错行号")

    # 用例 3：不存在的片段必须 FAIL
    ok3 = try_patch('(M520, "function hWe(e, n) {", 215,',
                    '(M520, "function hWe_NOT_EXIST(e, n) {", 215,',
                    "不存在片段")

    if not (ok2 and ok3):
        return 1

    # 恢复后必须重新 PASS
    rc4, _ = run()
    if rc4 != 0:
        print("✗ 恢复后仍失败，脚本可能处于半改状态")
        return 1
    print("[✓] 用例 4（恢复后）：重新 PASS")
    print("\n✓ 反向确认通过（3 个注入用例 + 基线）")
    return 0


if __name__ == "__main__":
    sys.exit(main())