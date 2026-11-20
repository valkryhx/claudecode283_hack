"""把剖析文档里的坐标按源码实际值改正（脚本复算，不手改）。

## 为什么

那份文档的坐标是我边读边记的，核验脚本一次抓出 10 处偏差（差 1–11 行）。
这条脚本做两件事：

1. 读源码算出每个片段真实所在行；
2. 把文档里的 `模块:旧行号` 替换成 `模块:新行号`。

## 幂等

已是正确行号的跳过，不会重复改。
"""
from __future__ import annotations

import pathlib
import re
import sys


def _find_repo_root(start: pathlib.Path) -> pathlib.Path:
    for p in [start, *start.parents]:
        if (p / "claudecode319" / "modules").is_dir():
            return p
    raise SystemExit(f"找不到仓库根（从 {start} 向上）")


REPO = _find_repo_root(pathlib.Path(__file__).resolve().parent)
DEM = REPO / "reconstructed319" / "deminified"
DOC = REPO / "docs" / "20261120-CC319卡住治理-stall-watchdog剖析.md"

# 文档里形如 `m0779:8030` / `m0779:8109-8118` 的坐标，逐条按源码复算。
# 用 (模块短名 → 真实文件名) 的映射。
MOD_MAP = {
    "m0779": "m0779_0x12409ec4.js",
    "m0349": "m0349_0x1193beaf.js",
    "m0170": "m0170_0x11536e81.js",
    "m0591": "m0591_0x11be624e.js",
}

# (文档里的坐标串, 源码片段) —— 片段用于定位真实行号
COORD_HINTS: list[tuple[str, str]] = [
    ("m0779:7854", "var Ep = 300000,"),
    ("m0779:7856", "xp = 600000;"),
    ("m0779:7857", "function qqo() {"),
    ("m0779:7860", "return Math.min(gLn() + Ep, Cp);"),
    ("m0779:7909", "stall_ms = qqo(),"),
    ("m0779:7943", "lastChunkAgeMs="),
    ("m0779:7987", "Gt = () => {"),
    ("m0779:7994", "stall watchdog deferred"),
    ("m0779:8001", "stall watchdog fired after"),
    ("m0779:8003", "tengu_async_agent_stall_timeout"),
    ("m0779:8008", 'gt("watchdog_stall")'),
    ("m0779:8009", "Agent stalled: no progress"),
    ("m0779:8029", "dn = Math.min(stall_ms * 0.1, 1000)"),
    ("m0779:8030", "un = () => {"),
    ("m0779:8033", 'last_message_type = b("query_progress"), Gt();'),
    ("m0779:8113", "Ae.add(Ye.id)"),
    ("m0779:8119", "lt = Fe.delete(Wt.tool_use_id) || lt"),
    ("m0349:14688", "function gLn() {"),
    ("m0349:14689", "return Math.max(wg() ?? 0, 300000);"),
    ("m0170:8", "function lan(onExpire, r, clock, {"),
    ("m0170:32", "if (!(r > 1000)) {"),
    ("m0591:131125", "Bw = function() {"),
    ("m0591:131134", "Streaming idle warning: no chunks received"),
    ("m0591:131146", "Streaming idle timeout: no chunks received"),
    ("m0591:131150", "tengu_streaming_idle_timeout"),
    ("m0591:131567", "xO = i.CLAUDE_ENABLE_STREAM_WATCHDOG ?? !0,"),
    ("m0591:131568", "iE = gLn(),"),
    ("m0591:131569", "_B = iE / 2,"),
    ("m0591:131650", "k_ = 0, Bw(),"),
    ("m0591:131654", "Streaming stall detected:"),
    ("m0591:131691", "if (k_++, k_ <= SNr) Bw();"),
]


def main() -> int:
    text = DOC.read_text(encoding="utf-8")
    changed = 0

    for coord, snippet in COORD_HINTS:
        mod_short, _, old_line_s = coord.partition(":")
        fname = MOD_MAP.get(mod_short)
        if fname is None:
            print(f"[跳过] 未知模块 {mod_short}")
            continue
        path = DEM / fname
        if not path.is_file():
            print(f"[跳过] {fname} 不存在")
            continue
        lines = path.read_text(encoding="utf-8").splitlines()
        hits = [i + 1 for i, ln in enumerate(lines) if snippet in ln]
        if not hits:
            print(f"[跳过] {fname} 找不到 {snippet[:40]!r}")
            continue
        real = hits[0]
        if real == int(old_line_s):
            continue
        old_coord = f"{mod_short}:{old_line_s}"
        new_coord = f"{mod_short}:{real}"
        if old_coord not in text:
            print(f"[跳过] 文档里没有 {old_coord}")
            continue
        text = text.replace(old_coord, new_coord)
        print(f"[改] {old_coord} → {new_coord}  ({snippet[:36]!r})")
        changed += 1

    DOC.write_text(text, encoding="utf-8", newline="\n")
    print(f"\n共改 {changed} 处")
    return 0


if __name__ == "__main__":
    sys.exit(main())