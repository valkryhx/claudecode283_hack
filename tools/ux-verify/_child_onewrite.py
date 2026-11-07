# -*- coding: utf-8 -*-
"""子进程：**单次 write** 写出被 BSU/ESU 包裹的整帧（模拟 CC m0692 E$o）。"""
import sys
import time

BODY = "LINE-A\r\n" * 5
frame = "\x1b[?2026h" + BODY + "\x1b[?2026l"
sys.stdout.write(frame)          # 一次 write
sys.stdout.write("AFTER\r\n")
sys.stdout.flush()
time.sleep(0.3)
sys.stdout.write("ALLDONE\r\n")
sys.stdout.flush()
time.sleep(0.5)
