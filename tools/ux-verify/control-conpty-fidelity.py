# -*- coding: utf-8 -*-
"""负对照 v3：ConPTY 会丢弃哪些控制序列？

判据：子进程每写一条序列，随后写一个普通文本标记 `MARK_<name>`。
标记一定保真（纯 ASCII 文本），所以：

    看到 MARK_ALT_SCREEN 但抓包里没有 \\x1b[?1049h  => 该序列被仪器【丢弃】

这正是 UX/UI 文档里标 `[未验证]` 的根因。
"""
import os
import sys
import time

from winpty import PtyProcess

HERE = os.path.dirname(os.path.abspath(__file__))
CHILD = os.path.join(HERE, "_child_modes.py")

# 被测序列（与 _child_modes.py 的 SEQ 一一对应）
SEQ = [
    ("BSU", "\x1b[?2026h"),
    ("ESU", "\x1b[?2026l"),
    ("BP_MODE", "\x1b[?2004h"),
    ("CURSOR_HIDE", "\x1b[?25l"),
    ("M9001", "\x1b[?9001l"),
    ("ALT_SCREEN", "\x1b[?1049h"),
    ("MOUSE_1000", "\x1b[?1000h"),
    ("MOUSE_1002", "\x1b[?1002h"),
    ("MOUSE_1006", "\x1b[?1006h"),
    ("DECSTBM", "\x1b[1;10r"),
    ("SU", "\x1b[3S"),
    ("SD", "\x1b[2T"),
]


def capture(backend):
    p = PtyProcess.spawn([sys.executable, CHILD], dimensions=(24, 100), backend=backend)
    out = ""
    t0 = time.time()
    try:
        while time.time() - t0 < 8:
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
    return out


for backend, label in ((0, "ConPTY"), (1, "WinPTY")):
    out = capture(backend)
    print("==== backend=%d (%s) 抓包 %d 字符 ====" % (backend, label, len(out)))
    print("%-14s %-6s %s" % ("序列", "标记", "序列是否保真"))
    kept = dropped = 0
    for name, seq in SEQ:
        mark_seen = ("MARK_%s" % name) in out
        seq_seen = seq in out
        if not mark_seen:
            verdict = "标记缺失，本条无法判定"
        elif seq_seen:
            verdict = "保留"
            kept += 1
        else:
            verdict = "**被丢弃**"
            dropped += 1
        print("%-14s %-6s %s" % (name, "有" if mark_seen else "无", verdict))
    print("-> 保留 %d 条，丢弃 %d 条\n" % (kept, dropped))
