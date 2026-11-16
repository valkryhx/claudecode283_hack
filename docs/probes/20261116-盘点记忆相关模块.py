# -*- coding: utf-8 -*-
"""盘点 319 里所有与记忆相关的模块，按命中密度排序，找出前七轮未覆盖的区域。

用途：避免「只挖自己想到的那一块」。按关键词族统计，不预设结论。
"""
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DEM = os.path.join(ROOT, "reconstructed319", "deminified")

# 关键词族：每个族内任一词命中即算
FAMILIES = {
    "核心记忆": ["nested_memory", "MEMORY.md", "extractMemories", "autoDream", "memoryDir"],
    "MCP 工具": ["memory_read", "memory_write", "memory_list", "memory_search",
                 "accountMemoryServer", "mcp__memory__"],
    "账号/云端": ["account_memory", "cowork_memory", "anthropic/memory."],
    "team/多库": ["team_memory", "memory-sync", "CLAUDE_MEMORY_STORES", "partitionId"],
    "agent 记忆": ["agent-memory", "Persistent Agent Memory", "agentMemory"],
    "引用/追踪": ["cc-memory", "injection:", "citedStatus", "tengu_memdir_"],
    "压缩相关": ["relevant_memories", "withheld_memory", "late_memory_context"],
    "dream": ["/v1/dreams", "onyx_plover", "fork: \"dream\""],
}

files = sorted(f for f in os.listdir(DEM) if f.endswith(".js"))
rows = []
for fn in files:
    try:
        txt = open(os.path.join(DEM, fn), encoding="utf-8", newline="").read()
    except Exception:
        continue
    fam_hits = {}
    total = 0
    for fam, kws in FAMILIES.items():
        c = sum(txt.count(k) for k in kws)
        if c:
            fam_hits[fam] = c
            total += c
    if total:
        rows.append((total, fn, fam_hits))

rows.sort(reverse=True)
print("与记忆相关的模块: %d 个（共 %d 个）\n" % (len(rows), len(files)))
for total, fn, fam in rows[:30]:
    label = " ".join("%s=%d" % (k, v) for k, v in sorted(fam.items(), key=lambda x: -x[1]))
    print("%-30s %5d  %s" % (fn, total, label))

print("\n-- 按族汇总 --")
agg = {}
for _, _, fam in rows:
    for k, v in fam.items():
        agg[k] = agg.get(k, 0) + v
for k, v in sorted(agg.items(), key=lambda x: -x[1]):
    print("  %-12s %6d" % (k, v))
