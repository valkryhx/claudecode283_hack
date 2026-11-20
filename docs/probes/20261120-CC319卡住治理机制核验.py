"""核验：CC319 里治理「卡住」的机制，以及 Hlaudz 看门狗与它的差异。

## 为什么要先查 CC 再定稿

用户在实现看门狗后追问「CC319 有没有能治理这个问题的机制」。
如果 CC 已经有成熟约定，我们的实现应该对齐，而不是自创一套语义 ——
否则将来对比、移植、排障都要多一层翻译。

## 结论速览

CC 用的是**子代理级 stall watchdog**（`m0779`），不是「整轮回合总超时」。
它有三处设计值得对齐，其中两处我们第一版**没有**：

| # | CC 的设计 | 作用 | Hlaudz 第一版 |
| --- | --- | --- | --- |
| 1 | **闲置超时**（stall，不是总时长） | 慢但活着的任务不被砍 | ✅ 已对齐 |
| 2 | **有 tool in flight 时延迟触发** | 长 `code_run` 不会因为没输出被误杀 | ❌ 缺 |
| 3 | **`exitPath=watchdog_stall` + `lastChunkAgeMs` 结构化日志** | 事后能区分「卡死」与「用户停止」 | ⚠️ 部分（有 reason 字段但没 exitPath 结构） |

第 2 条是最有价值的一条：CC 明确写了
`stall watchdog deferred — N tool(s) in flight` —— **正在跑工具时不判卡死**。
我们的第一次实现没有这个，理论上一个跑 20 分钟的 `code_run` 会被闲置超时砍掉。

## 可复算证据
"""
from __future__ import annotations

import pathlib
import re
import sys

# Windows 控制台默认 GBK，直接 print ✓ 会 UnicodeEncodeError。
# 按 AGENTS.md：中文与符号输出不依赖控制台代码页。
if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass


def _find_repo_root(start: pathlib.Path) -> pathlib.Path:
    for p in [start, *start.parents]:
        if (p / "claudecode319" / "modules").is_dir():
            return p
    raise SystemExit(f"找不到仓库根（从 {start} 向上）")


REPO = _find_repo_root(pathlib.Path(__file__).resolve().parent)
DEM = REPO / "reconstructed319" / "deminified"

# (模块, 精确片段, 期望行号, 说明)
CHECKS: list[tuple[str, str, int, str]] = [
    ("m0779_0x12409ec4.js", "var Ep = 300000,", 7854,
     "stall 自适应基线增量 = 300000ms（5 分钟）"),
    ("m0779_0x12409ec4.js", "xp = 600000;", 7856,
     "关闭 stream watchdog 时的兜底值 = 600000ms（10 分钟）"),
    ("m0779_0x12409ec4.js", "function qqo() {", 7857,
     "★ stall 阈值计算函数 qqo()"),
    ("m0779_0x12409ec4.js", "return Math.min(gLn() + Ep, Cp);", 7860,
     "阈值 = min(流空闲基线 + 5min, 2^31-1) —— **自适应**，不是固定值"),
    ("m0779_0x12409ec4.js", "stall_ms = qqo(),", 7909,
     "每个子代理开始时算一次阈值"),
    ("m0779_0x12409ec4.js", "stall watchdog deferred", 7994,
     "★ 有 tool in flight 时**延迟**触发，不判卡死"),
    ("m0779_0x12409ec4.js", "stall watchdog fired after", 8001,
     "★ 真正触发时的日志"),
    ("m0779_0x12409ec4.js", "exitPath=", 7943,
     "结构化字段 exitPath（watchdog_stall / error / parked / completed）"),
    ("m0779_0x12409ec4.js", "lastChunkAgeMs=", 7943,
     "结构化字段 lastChunkAgeMs（最后一次有产出的距今年龄）"),
    ("m0779_0x12409ec4.js", "gt(\"watchdog_stall\")", 8008,
     "触发后以 exitPath=watchdog_stall 收口"),
    ("m0349_0x1193beaf.js", "function gLn() {", 14688,
     "★ 自适应基线：max(配置的流空闲超时, 300000ms)"),
    ("m0349_0x1193beaf.js", "return Math.max(wg() ?? 0, 300000);", 14689,
     "基线下限 5 分钟"),
]

# 否定断言：CC **没有**「整轮总时长超时」这种机制套在子代理上
MUST_NOT = [
    ("m0779_0x12409ec4.js", "total duration exceeded",
     "CC 没有基于总时长的子代理中止（只有闲置超时）"),
]


def main() -> int:
    problems: list[str] = []
    ok = 0

    for mod, snippet, want_line, why in CHECKS:
        path = DEM / mod
        if not path.is_file():
            problems.append(f"{mod}: 文件不存在")
            continue
        lines = path.read_text(encoding="utf-8").splitlines()
        hits = [i + 1 for i, ln in enumerate(lines) if snippet in ln]
        if not hits:
            problems.append(f"{mod}: 找不到 {snippet!r}（{why}）")
            print(f"[✗] {mod} {snippet!r}")
            continue
        if want_line not in hits:
            problems.append(
                f"{mod}: {snippet!r} 在行 {hits}，期望 {want_line}（{why}）")
            print(f"[✗] {mod}:{want_line} 实际 {hits}")
            continue
        print(f"[✓] {mod}:{want_line} {why}")
        ok += 1

    for mod, needle, why in MUST_NOT:
        path = DEM / mod
        text = path.read_text(encoding="utf-8") if path.is_file() else ""
        if needle in text:
            problems.append(f"{mod}: 含 {needle!r} —— {why}")
            print(f"[✗ must_not] {mod} 含 {needle!r}")
        else:
            print(f"[✓ must_not] {mod} 不含 {needle!r}")
            ok += 1

    print()
    if problems:
        print(f"✗ 失败 {len(problems)} 项：")
        for p in problems:
            print("  -", p)
        return 1
    print(f"✓ 全部通过（{ok} 项）")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())