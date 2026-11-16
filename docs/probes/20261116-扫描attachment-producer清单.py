# -*- coding: utf-8 -*-
"""扫描 m0591 里 dc() 注册的全部 attachment producer 名字与行号。

用途：AGENTS.md §8.6 规则 2 —— 「怎么注册」必须数总数再逐个看。
裸 grep 第一处命中会漏掉整条分支（例如 nested_memory 有两处注册）。
"""
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
P = os.path.join(ROOT, "reconstructed319", "deminified", "m0591_0x11be624e.js")

MEMORY_RELATED = {
    "nested_memory", "memory_update", "withheld_memory", "late_memory_context",
    "spawned_loop_memory_withdrawal", "relevant_memories",
}

with open(P, encoding="utf-8", newline="") as f:
    txt = f.read()

# 每个 producer 的全部注册位置（不只是第一处）
pos = {}
for m in re.finditer(r'\bdc\("([a-z0-9_]+)"', txt):
    line = txt.count("\n", 0, m.start()) + 1
    pos.setdefault(m.group(1), []).append(line)

names = sorted(pos)
print("dc() producer 总数: %d" % len(names))
print("注册处数合计: %d" % sum(len(v) for v in pos.values()))
print()
print("-- 记忆相关 --")
for n in sorted(MEMORY_RELATED & set(names)):
    print("  %-34s %s" % (n, pos[n]))
print()
print("-- 全部 --")
for n in names:
    mark = " *" if n in MEMORY_RELATED else ""
    print("  %-34s %s%s" % (n, pos[n], mark))

# 只注册了一处的那些，是「grep 第一处」最容易误导的对象
multi = {n: v for n, v in pos.items() if len(v) > 1}
print()
print("-- 多处注册（%d 个，只 grep 第一处必漏）--" % len(multi))
for n in sorted(multi):
    print("  %-34s %s" % (n, multi[n]))
