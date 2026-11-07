# -*- coding: utf-8 -*-
"""负对照 v2：直接 spawn python.exe（不经 cmd 转义），验证 ConPTY 是否保序。

结论用途：若本脚本判定 REORDERED，则任何"我用 PTY 抓包看 BSU 是否包住某帧"
的结论都不成立 —— 必须先修仪器，不能拿去裁决 CC 的行为。
"""
import os
import sys
import time

from winpty import PtyProcess

HERE = os.path.dirname(os.path.abspath(__file__))
CHILD = os.path.join(HERE, "_child_onewrite.py")

p = PtyProcess.spawn([sys.executable, CHILD], dimensions=(24, 100))
out = ""
t0 = time.time()
try:
    while time.time() - t0 < 6:
        chunk = p.read(65536)
        if chunk:
            out += chunk
            if "ALLDONE" in out:
                break
        else:
            time.sleep(0.02)
except Exception as e:
    print("read err", e)
try:
    p.terminate(force=True)
except Exception:
    pass

print("CAPTURED:", repr(out))
h = out.find("\x1b[?2026h")
l = out.find("\x1b[?2026l")
print("open at", h, "close at", l)
if h >= 0 and l > h:
    print("inner =", repr(out[h + 8 : l]))
ok = h >= 0 and l > h and "LINE-A" in out[h + 8 : l]
print()
print("VERDICT:", "ConPTY PRESERVED nesting" if ok else "ConPTY REORDERED -> capture not faithful")
