"""Reverse-confirmation for the status-card design probe (AGENTS.md §8.5).

Copies the specific GA source files the probe reads into a temp tree, breaks
each design assumption in turn, and asserts the probe FAILS. A probe that
stays green on a broken tree is a false-acceptance probe and must be fixed.

Run:  python tools/probes/20261115-statuscard-design-probe-reverse.py
Exit: 0 = every mutation was caught, 1 = the probe missed at least one
"""

from __future__ import annotations

import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

GA = Path("D:/git_repos/GenericAgent")
PROBE = Path(__file__).with_name("20261115-statuscard-design-probe.py")

FILES = [
    "genericagent/core/app.py",
    "genericagent/core/handler.py",
    "genericagent/agents/manager.py",
    "genericagent/agents/team.py",
    "genericagent/agents/permissions.py",
    "genericagent/agents/notifications.py",
    "genericagent/hooks/runtime.py",
    "genericagent/hooks/models.py",
]

# (label, relative file, old substring, new substring)
MUTATIONS = [
    (
        "轮末落点被改走",
        "genericagent/core/app.py",
        "'completed', 'waiting_reply'",
        "'completed', 'idle'",
    ),
    (
        "subagent 开始跑 lead Stop gate",
        "genericagent/core/handler.py",
        "if getattr(agent, 'is_subagent', False):",
        "if False:",
    ),
    (
        "_subagent_state 不再读-改-写",
        "genericagent/core/app.py",
        "old.update({",
        "old = ({",
    ),
    (
        "旁路 runner 消失",
        "genericagent/hooks/runtime.py",
        "def _default_prompt_runner(agent):",
        "def _renamed_prompt_runner(agent):",
    ),
    (
        "AgentState 不再是 dataclass",
        "genericagent/agents/manager.py",
        "class AgentState:",
        "class RenamedAgentState:",
    ),
    (
        "team view 不再带 turnStatus",
        "genericagent/agents/team.py",
        '"turnStatus":',
        '"legacyTurnStatus":',
    ),
    (
        "PermissionDenied 不再发出",
        "genericagent/core/handler.py",
        "'PermissionDenied', tool_name",
        "'RenamedDenied', tool_name",
    ),
    (
        "反伪冒前导被删",
        "genericagent/agents/notifications.py",
        "ANTI_SPOOF_PREAMBLE =",
        "RENAMED_PREAMBLE =",
    ),
    (
        "evaluator 不再看 ok 字段",
        "genericagent/hooks/models.py",
        'output.get("ok")',
        'output.get("okay")',
    ),
]


def run_probe(root: Path) -> tuple[int, str]:
    # The probe prints Chinese; a GBK console default would make the decoding
    # of the child's output raise, which would silently turn every mutation
    # into "caught for the wrong reason". Force UTF-8 both ways.
    env = {
        **__import__("os").environ,
        "GA_ROOT": str(root),
        "PYTHONIOENCODING": "utf-8",
    }
    proc = subprocess.run(
        [sys.executable, str(PROBE)],
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        env=env,
    )
    return proc.returncode, (proc.stdout or "") + (proc.stderr or "")


def main() -> int:
    # Baseline: pristine copy must pass.
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp) / "ga"
        for rel in FILES:
            dst = root / rel
            dst.parent.mkdir(parents=True, exist_ok=True)
            src = GA / rel
            if not src.exists():
                print(f"SKIP baseline: missing {rel}")
                return 1
            shutil.copy2(src, dst)
        code, out = run_probe(root)
        if code != 0:
            print("FAIL baseline: pristine copy did not pass")
            print(out)
            return 1
        print(f"PASS baseline ({len(FILES)} files, probe green)")

    missed: list[str] = []
    for label, rel, old, new in MUTATIONS:
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp) / "ga"
            for f in FILES:
                dst = root / f
                dst.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(GA / f, dst)
            target = root / rel
            text = target.read_text(encoding="utf-8")
            if old not in text:
                print(f"SKIP {label}: pattern not found in {rel}")
                missed.append(label + " (pattern missing)")
                continue
            target.write_text(text.replace(old, new, 1), encoding="utf-8")
            code, out = run_probe(root)
            if code == 0:
                print(f"MISS {label}: probe stayed GREEN on a broken tree")
                missed.append(label)
            else:
                print(f"PASS {label}: probe went red")

    print()
    if missed:
        print(f"{len(missed)} mutation(s) not caught -- probe is a false-acceptance probe:")
        for m in missed:
            print(f"  - {m}")
        return 1
    print(f"All {len(MUTATIONS)} mutations caught. Probe is effective.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
