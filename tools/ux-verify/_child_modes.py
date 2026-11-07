# -*- coding: utf-8 -*-
"""子进程：逐条写出我们关心的控制序列，每条后面跟一个唯一 ASCII 标记。

用标记而不是用序列本身去判"到没到"，是因为序列可能被改写/重排；
标记是普通文本，ConPTY 不会动它。看到标记但看不到序列 = 真的丢了。
"""
import sys
import time

SEQ = [
    ("BSU", "\x1b[?2026h"),
    ("ESU", "\x1b[?2026l"),
    ("BP_MODE", "\x1b[?2004h"),      # 括号粘贴
    ("CURSOR_HIDE", "\x1b[?25l"),
    ("M9001", "\x1b[?9001l"),
    ("ALT_SCREEN", "\x1b[?1049h"),   # 备用屏
    ("MOUSE_1000", "\x1b[?1000h"),
    ("MOUSE_1002", "\x1b[?1002h"),
    ("MOUSE_1006", "\x1b[?1006h"),
    ("DECSTBM", "\x1b[1;10r"),
    ("SU", "\x1b[3S"),
    ("SD", "\x1b[2T"),
]

for name, seq in SEQ:
    sys.stdout.write(seq)
    sys.stdout.write("MARK_%s\r\n" % name)
    sys.stdout.flush()
    time.sleep(0.02)

sys.stdout.write("ALLDONE\r\n")
sys.stdout.flush()
time.sleep(0.5)
