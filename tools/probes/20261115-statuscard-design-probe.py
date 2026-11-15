"""Probe: verify the status-card design's integration points actually exist.

Runs read-only checks against the GA source. Each check asserts a fact the
design in docs/20261115-CC319-Projects逻辑复刻设计.md depends on. A failing
check means the design's落点 moved and the doc must be re-verified.

Run:  python tools/probes/20261115-statuscard-design-probe.py
Exit: 0 = all design assumptions hold, 1 = something moved
"""

from __future__ import annotations

import ast
import os
import re
import sys
from pathlib import Path

# GA_ROOT lets the reverse-confirmation run point at a deliberately broken
# copy. Without it the probe always reads the real tree and can only ever
# report green -- which is exactly the false-acceptance shape AGENTS.md §8.5
# warns about.
GA = Path(os.environ.get("GA_ROOT") or "D:/git_repos/GenericAgent")
CHECKS: list[tuple[str, bool, str]] = []


def check(name: str, ok: bool, detail: str = "") -> None:
    CHECKS.append((name, ok, detail))


def read(rel: str) -> str:
    path = GA / rel
    if not path.exists():
        return ""
    return path.read_text(encoding="utf-8", errors="replace")


def main() -> int:
    # --- A. 每轮完成点存在（状态卡的落点） -------------------------------
    app_src = read("genericagent/core/app.py")
    has_round_complete = "'completed', 'waiting_reply'" in app_src
    check(
        "A1 轮末 _subagent_state(..., 'completed', 'waiting_reply') 存在",
        has_round_complete,
        "app.py:3112 是状态卡的设计落点；找不到说明轮末路径改了",
    )
    check(
        "A2 轮末紧随 turn_completed 事件",
        "'turn_completed'" in app_src,
        "状态卡要挂在同一条事件流上",
    )

    # --- B. subagent 不跑 lead Stop gate（这是挂错点的证据） --------------
    handler_src = read("genericagent/core/handler.py")
    check(
        "B1 _stop_gate_active 对 subagent 返回 False",
        "if getattr(agent, 'is_subagent', False):" in handler_src
        and "return False" in handler_src,
        "若这里变了，状态卡也许可以挂 Stop，需重新评估",
    )
    check(
        "B2 SubagentStop 在 worker 退出处（不是每轮）",
        app_src.count("'SubagentStop'") >= 2,
        "SubagentStop 是整个 worker 生命周期一次，不能用作每轮报送",
    )

    # --- C. _subagent_state 是读-改-写，可加字段 --------------------------
    check(
        "C1 _subagent_state 用 old.update({...}) 模式",
        "def _subagent_state(" in app_src and "old.update({" in app_src,
        "状态卡字段靠这个模式追加；改成整份重写就要换加法",
    )

    # --- D. 旁路 LLM runner 可复用 ----------------------------------------
    # Anchor on the *definition*, not a bare substring: the name is referenced
    # elsewhere in the file, so a mere rename would still find it and report a
    # green that means nothing (caught by the reverse-confirmation run).
    runtime_src = read("genericagent/hooks/runtime.py")
    check(
        "D1 _default_prompt_runner 存在且无工具",
        re.search(r"^def _default_prompt_runner\(agent\):", runtime_src, re.M) is not None
        and "tools=None" in runtime_src,
        "状态卡的旁路调用复用这段；它保证无工具、隔离",
    )

    # --- E. 读侧三处 ------------------------------------------------
    manager_src = read("genericagent/agents/manager.py")
    check(
        "E1 AgentState 是 dataclass（可加字段）",
        "class AgentState:" in manager_src,
        "",
    )
    check(
        "E2 _agent_state_from_dict 逐字段映射",
        "def _agent_state_from_dict(" in manager_src,
        "加 status_card 要在这里映射，不能只加到 dataclass",
    )
    team_src = read("genericagent/agents/team.py")
    check(
        "E3 team.view() 的 members 是 dict 列表（可加键）",
        '"turnStatus":' in team_src,
        "statusCard 挂在这一层",
    )

    # --- F. L3 的 denial 记录点 ------------------------------------------
    check(
        "F1 PermissionDenied 在 handler 里发出",
        handler_src.count("'PermissionDenied'") >= 2,
        "这是 L3 denied_actions 的天然记录点",
    )
    perms_src = read("genericagent/agents/permissions.py")
    check(
        "F2 SubagentPermissionPolicy.evaluate 是逐 tool 判定",
        "def evaluate(self, tool_name" in perms_src,
        "L3 要在它之前插一层",
    )

    # --- G. 反伪冒前导已存在（L1 已完成，不需重做） -----------------------
    # Anchor on the assignment line: renaming the constant elsewhere in the
    # module would otherwise still leave the name present and pass vacuously.
    notes_src = read("genericagent/agents/notifications.py")
    check(
        "G1 ANTI_SPOOF_PREAMBLE 已存在",
        re.search(r"^ANTI_SPOOF_PREAMBLE\s*=", notes_src, re.M) is not None,
        "L1 不用做；只补 L2/L3",
    )
    check(
        "G2 尚未区分 owner/member/coordinator 来源",
        "author_kind" not in notes_src,
        "GA 没有多来源归属，状态卡不需要 author_kind 三值",
    )

    # --- H. 状态卡不能有 ok 字段（否则被判 block） ------------------------
    check(
        "H1 evaluator 风格输出用 ok 字段判 block",
        'output.get("ok")' in read("genericagent/hooks/models.py"),
        "状态卡 schema 必须避开 ok，否则会被当阻断",
    )

    # --- 报告 ------------------------------------------------------
    failed = [c for c in CHECKS if not c[1]]
    for name, ok, detail in CHECKS:
        print(f"{'PASS' if ok else 'FAIL'}  {name}")
        if not ok and detail:
            print(f"      → {detail}")
    print()
    print(f"{len(CHECKS) - len(failed)}/{len(CHECKS)} 通过")
    if failed:
        print(f"\n{len(failed)} 项设计假设已失效，需复核文档落点：")
        for name, _, detail in failed:
            print(f"  - {name}: {detail}")
        return 1
    print("全部设计假设成立。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
