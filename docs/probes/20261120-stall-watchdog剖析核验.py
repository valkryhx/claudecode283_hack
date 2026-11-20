"""核验 `20261120-CC319卡住治理-stall-watchdog剖析.md` 里的全部坐标。

## 为什么这条必须存在

那份文档里每一个 `模块:行号` 都是我**边读边记**的，第一轮已经有 5 处
手数错（差 1–7 行）。这类错误会让文档失去可查性 —— 读者照着行号跳过去
看到的是别的代码，然后开始怀疑整份文档。

所以：**文档里的坐标必须由脚本复算**，不是由我保证。

## 覆盖范围

- 子代理级 stall watchdog（`m0779`）
- 自适应阈值（`m0349`）
- 定时器原语（`m0170`）
- 主循环 stream watchdog（`m0591`）
- 否定断言（CC 没有「总时长超时」）
"""
from __future__ import annotations

import pathlib
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
    # ---- 子代理级 ----
    ("m0779_0x12409ec4.js", "var Ep = 300000,", 7854, "§1 阈值增量 5min"),
    ("m0779_0x12409ec4.js", "xp = 600000;", 7856, "§1 关闭 watchdog 的兜底 10min"),
    ("m0779_0x12409ec4.js", "function qqo() {", 7857, "§1 阈值计算函数"),
    ("m0779_0x12409ec4.js", "return Math.min(gLn() + Ep, Cp);", 7860, "§1 阈值公式"),
    ("m0779_0x12409ec4.js", "stall_ms = qqo(),", 7909, "§1 每子代理算一次"),
    ("m0779_0x12409ec4.js", "dn = Math.min(stall_ms * 0.1, 1000)", 8029, "§2 节流窗口"),
    ("m0779_0x12409ec4.js", "un = () => {", 8030, "§2 进展回调"),
    ("m0779_0x12409ec4.js", "last_message_type = b(\"query_progress\"), Gt();", 8033,
     "§2 重排定时器"),
    ("m0779_0x12409ec4.js", "Gt = () => {", 7986, "§3 定时器重排函数"),
    ("m0779_0x12409ec4.js", "stall watchdog deferred", 7994, "§3 有工具在飞时延迟"),
    ("m0779_0x12409ec4.js", "stall watchdog fired after", 8001, "§4 触发日志"),
    ("m0779_0x12409ec4.js", "tengu_async_agent_stall_timeout", 8003, "§4 遥测"),
    ("m0779_0x12409ec4.js", "gt(\"watchdog_stall\")", 8008, "§4 结构化收口"),
    ("m0779_0x12409ec4.js", "Agent stalled: no progress", 8009, "§4 状态文案"),
    ("m0779_0x12409ec4.js", "lastChunkAgeMs=", 7943, "§4 结构化字段"),
    ("m0779_0x12409ec4.js", "Ae.add(Ye.id)", 8113,
     "§3 Fe 加入 tool_use"),
    ("m0779_0x12409ec4.js", "lt = Fe.delete(Wt.tool_use_id) || lt", 8119,
     "§3 Fe 移除 tool_result"),

    # ---- 自适应阈值 ----
    ("m0349_0x1193beaf.js", "function gLn() {", 14688, "§1 自适应基线"),
    ("m0349_0x1193beaf.js", "return Math.max(wg() ?? 0, 300000);", 14689, "§1 基线下限 5min"),

    # ---- 定时器原语 ----
    ("m0170_0x11536e81.js", "function lan(onExpire, r, clock, {", 8, "§2 lan 定时器"),
    ("m0170_0x11536e81.js", "if (!(r > 1000)) {", 32, "§2 到期判定"),

    # ---- 主循环 ----
    ("m0591_0x11be624e.js", "xO = i.CLAUDE_ENABLE_STREAM_WATCHDOG ?? !0,", 131567,
     "§7.1 开关默认开"),
    ("m0591_0x11be624e.js", "iE = gLn(),", 131568, "§7.1 阈值"),
    ("m0591_0x11be624e.js", "_B = iE / 2,", 131569, "§7.1 警告线 = 一半"),
    ("m0591_0x11be624e.js", "Bw = function() {", 131125, "§7.1 双层定时器"),
    ("m0591_0x11be624e.js", "Streaming idle warning: no chunks received", 131134,
     "§7.1 半程警告文案"),
    ("m0591_0x11be624e.js", "Streaming idle timeout: no chunks received", 131146,
     "§7.1 中止文案"),
    ("m0591_0x11be624e.js", "tengu_streaming_idle_timeout", 131150, "§7.1 遥测"),
    ("m0591_0x11be624e.js", "k_ = 0, Bw(),", 131650, "§7.2 每事件重排"),
    ("m0591_0x11be624e.js", "Streaming stall detected:", 131654, "§7.2 stall 观测"),
    ("m0591_0x11be624e.js", "if (k_++, k_ <= SNr) Bw();", 131691, "§7.2 心跳重置上限"),
]

# 否定断言
MUST_NOT = [
    ("m0779_0x12409ec4.js", "total duration exceeded",
     "CC 没有基于总时长的子代理中止"),
    ("m0591_0x11be624e.js", "total duration exceeded",
     "CC 主循环也没有基于总时长"),
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
            print(f"[✗] {mod} {snippet[:40]!r}")
            continue
        if want_line not in hits:
            problems.append(
                f"{mod}: {snippet!r} 实际在 {hits}，文档写 {want_line}（{why}）")
            print(f"[✗] {mod}:{want_line} → 实际 {hits}")
            continue
        print(f"[✓] {mod}:{want_line} {why}")
        ok += 1

    for mod, needle, why in MUST_NOT:
        path = DEM / mod
        text = path.read_text(encoding="utf-8") if path.is_file() else ""
        if needle in text:
            problems.append(f"{mod}: 含 {needle!r} —— {why}")
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