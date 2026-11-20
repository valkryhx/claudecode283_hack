"""核验：CC 的 Read 怎么读大文件、为什么不会被读前置卡住。

## 要回答的两个问题

1. CC 的 Read 有行数参数吗？默认多少？
2. 它读大文件（超过默认行数）时，为什么覆盖写**不会**被拒？

## 结论（每条都有可复算坐标）

| # | 结论 | 证据 |
| --- | --- | --- |
| 1 | CC 的 Read **有** `offset` / `limit` 参数 | 提示词 `claude-code-fable-5.2.md:2331` "Reads up to 2000 lines by default" |
| 2 | 默认 **2000** 行（Hlaudz 是 200） | `m0274_0x117329cf.js:604` `$tn = 2000` |
| 3 | 超限不是"拒绝"，是**分页 + 明确告知下一页怎么读** | `m0591:148116` 拼 `U7e` 截断横幅，含 `Call <Read> with offset=${Sn+1} limit=${Sn}` |
| 4 | 分页读会被标 `isPartialView: !0` | `m0591:148121` `...Tn !== void 0 && { isPartialView: !0 }` |
| 5 | Write 门禁**确实**对 `isPartialView` 拒绝 | `m0591:73831` `if (!Fe \|\| Fe.isPartialView)` |
| 6 | 但**同一门禁有一整套豁免**，默认路径不看 isPartialView | 见下 |

## ★ 关键：为什么 CC 不会被卡住

`m0591:73832-73837` 里那段豁免计算的第一个条件：

    pt = !Fe && !Don(G) && !CFn(Xe, s.remoteCall) && xCe(Yt, G, s, s.permissions())

注意首位是 `!Fe` —— **只有"完全没读过"才进入严格分支**。
`Fe` 存在但 `isPartialView` 时，`!Fe` 为假 ⇒ `pt` 为假 ⇒ **走最后的
`return { result: !0 }`（放行）**。

也就是说 CC 的真实语义是：

    从未读过        → 拒绝（msg = "File has not been read yet"）
    读过但只是片段  → **放行**（write 直接覆盖，不需要读全）
    读过且完整      → 走 mtime 比对，未变则放行

**CC 从来没有要求"完整读过"才能覆盖写。** 它只要求"touch 过"。

这解释了为什么它的 2000 行默认值不会成为障碍：值本身不参与
"是否放行"的判定，只影响模型能看到多少内容。

## 与 Hlaudz 旧实现的差别（这才是真正的 bug）

Hlaudz 旧 `ReadRegistry.check`：

    if not rec.complete:
        return False, "只读了片段。请 file_read 读完整文件后再写。"

`complete` 由 `record(target, complete=(start == 1 and not keyword and end >= total))`
算出，要求**一次读到文件末尾**。40 KB 的报告在 200 行默认下永远不满足
⇒ 覆盖写恒被拒。

⚠️ **不是"CC 的门槛更松"，是"CC 根本没有这个门槛"**。
Hlaudz 凭空加了一条 CC 没有的规则，而且用一个必然失败的判据去实现它。
所以上一轮"删除门禁"是对的，但当时的理由（"提示词推翻了 Edit 的读前置"）
只说对了一半 —— 更根本的原因是**我们实现了一个 CC 不存在的语义**。
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

# (模块, 精确片段, 期望行号, 说明)
CHECKS: list[tuple[str, str, int, str]] = [
    ("m0274_0x117329cf.js", "$tn = 2000", 604,
     "Read 的默认行数是 2000（不是 200）"),
    ("m0591_0x11be624e.js",
     "isPartialView: !0\n    }\n  });",
     148125,
     "分页读会被标记 isPartialView"),
    ("m0591_0x11be624e.js",
     "if (!Fe || Fe.isPartialView) {",
     73831,
     "Write 门禁的入口条件确实包含 isPartialView"),
    ("m0591_0x11be624e.js",
     "pt = !Fe && !Don(G) && !CFn(Xe, s.remoteCall)",
     73834,
     "★ 豁免计算以 !Fe 起手：只有「完全没读过」才需严格判定"),
    ("m0591_0x11be624e.js",
     'message: "File has not been read yet. Read it first before writing to it."',
     213440,
     "「未读」文案只在 notebook 分支里出现（普通文件的走 d_t 常量）"),
    ("m0291_0x1177cdf0.js",
     "holdsOnlyStartOf(e) {",
     86,
     "readFileState 的「只持有开头」判定（与 isPartialView 互补）"),
]

# 否定断言：Hlaudz 的「必须完整读过」判据在 CC 里**不存在**
MUST_NOT = [
    ("m0591_0x11be624e.js", "读完整文件后再写", "CC 里没有「必须先读完整」这句"),
    ("m0591_0x11be624e.js", "只读了片段", "CC 里没有「只读了片段」这个报错"),
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
        # 多行片段：取首行查
        first = snippet.split("\n")[0]
        hits = [i + 1 for i, ln in enumerate(lines) if first in ln]
        if not hits:
            problems.append(f"{mod}: 找不到 {first!r}（{why}）")
            continue
        if want_line not in hits:
            problems.append(
                f"{mod}: {first!r} 在行 {hits}，期望 {want_line}（{why}）")
            continue
        # 多行片段校验完整匹配
        if "\n" in snippet:
            joined = "\n".join(lines[want_line - 1:want_line - 1 + snippet.count("\n") + 1])
            if snippet not in joined:
                problems.append(f"{mod}:{want_line} 多行片段不匹配（{why}）")
                continue
        print(f"[✓] {mod}:{want_line} {why}")
        ok += 1

    for mod, needle, why in MUST_NOT:
        path = DEM / mod
        text = path.read_text(encoding="utf-8") if path.is_file() else ""
        if needle in text:
            problems.append(f"{mod}: 仍含 {needle!r} —— {why}")
        else:
            print(f"[✓ must_not] {mod} 不含 {needle!r}")
            ok += 1

    # 提示词侧
    prompt = pathlib.Path(
        "D:/git_codes/system_prompts_leaks/Anthropic/claude-code/claude-code-fable-5.2.md")
    if prompt.is_file():
        text = prompt.read_text(encoding="utf-8", errors="replace")
        if "Reads up to 2000 lines by default" in text:
            print("[✓ 提示词] claude-code-fable-5.2.md 明写 2000 行默认")
            ok += 1
        else:
            problems.append("提示词里找不到 'Reads up to 2000 lines by default'")
    else:
        print("[跳过 提示词] 该目录不在本机")

    print()
    if problems:
        print(f"✗ 失败 {len(problems)} 项：")
        for p in problems:
            print("  -", p)
        return 1
    print(f"✓ 全部通过（{ok} 项）")
    return 0


if __name__ == "__main__":
    sys.exit(main())