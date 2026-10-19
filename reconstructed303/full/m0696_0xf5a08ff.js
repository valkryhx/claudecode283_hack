// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Bp,
  ygn,
  Bn,
  vI,
  Sc
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Wl,
  Vqs,
  kA
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  bqn,
  JFs,
  lg,
  DS,
  nHs,
  Rae
} from "B:/~BUN/root/chunk-8y0chnnr.js";
import {
  WJe
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  xD,
  Ei,
  zXe,
  IO,
  Gg,
  I1s,
  tt,
  Bl,
  uht,
  yle,
  fht,
  v$t,
  Ms
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  qZt,
  Ukr,
  Cct,
  Act
} from "B:/~BUN/root/chunk-8w42v0dp.js";
import {
  HK
} from "B:/~BUN/root/chunk-gy660jgx.js";
import {
  Gve,
  fTo
} from "B:/~BUN/root/chunk-1g2t7gtx.js";
import {
  Rus,
  r9,
  nM,
  xv,
  mys,
  Wco,
  fFn,
  Wse,
  k9,
  hwe
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Ug
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  VNs
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  aA
} from "B:/~BUN/root/chunk-429xgjya.js";
import {
  Yu,
  svr,
  Ph,
  ivr,
  I9,
  iIt
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  f$s
} from "B:/~BUN/root/chunk-t63e78w2.js";
import {
  Tke
} from "B:/~BUN/root/chunk-66hg7026.js";
import {
  qBe,
  Xfe
} from "B:/~BUN/root/chunk-aqd86p9a.js";
import {
  rD,
  z$n
} from "B:/~BUN/root/chunk-n0e205s6.js";
import {
  XP
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  HKe
} from "B:/~BUN/root/chunk-qc6mvzn1.js";
import {
  KV,
  D0
} from "B:/~BUN/root/chunk-62ynkm2y.js";
import {
  JTn
} from "B:/~BUN/root/chunk-t5twnmpa.js";
import {
  ulr
} from "B:/~BUN/root/chunk-v1edtzvj.js";
import {
  Zvn,
  ekn
} from "B:/~BUN/root/chunk-8cxc88ry.js";
import {
  trt
} from "B:/~BUN/root/chunk-hmwh3b50.js";
import {
  jxn
} from "B:/~BUN/root/chunk-s69xt8gc.js";
import {
  bit,
  ese
} from "B:/~BUN/root/chunk-0s9qz1dg.js";
import {
  $E
} from "B:/~BUN/root/chunk-410t5g3b.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-g3snhg6n.js";

function Iqr(e) {
  return e !== "requesting" && Gve()
}

function h() {
  return !k9() && !Wse()
}

function d2t(e) {
  if (e.type === "system" && "subtype" in e && e.subtype === "status" && "compact_error" in e && e.compact_error !== void 0 && !h()) return {
    ...e,
    compact_error: void 0
  };
  return e
}

function nnt({
  status: e,
  permissionMode: i,
  compactResult: s,
  compactError: r
}) {
  try {
    if (!Iqr(e)) return;
    Ei({
      type: "system",
      subtype: "status",
      status: e,
      ...i !== void 0 && {
        permissionMode: i
      },
      ...s !== void 0 && {
        compact_result: s
      },
      ...r !== void 0 && h() && {
        compact_error: r
      }
    })
  } catch (p) {
    l(p)
  }
}

function f5o(e) {
  try {
    if (!Sc() || !fTo()) return;
    if (hwe(e.event)) return;
    Ei({
      type: "stream_event",
      event: e.event,
      parent_tool_use_id: null,
      ...e.ttftMs !== void 0 && {
        ttft_ms: e.ttftMs
      }
    })
  } catch (i) {
    l(i)
  }
}

function k() {
  if (!Ms()) return;
  aA(), ulr()
}
var x = u({
  status_category: o(),
  status_detail: o(),
  needs_action: o(),
  recent_action: o().optional(),
  description: o().optional(),
  reply: o().optional()
});

function T(e) {
  return (i) => {
    let s = i.toolPermissionContext;
    if (typeof e.permission_mode === "string") {
      let p = kA(e.permission_mode);
      if (WJe(p), p === "bypassPermissions" && ($E() || !s.isBypassPermissionsModeAvailable)) t("[externalMetadataToAppState] Refusing restored mode 'bypassPermissions' (disabled by settings/policy or session not launched with --dangerously-skip-permissions); falling back to 'default'", {
        level: "warn"
      }), p = "default";
      try {
        if (s = {
            ...D0(s.mode, p, s),
            mode: p
          }, p === "auto") s = KV(s)
      } catch (y) {
        t(`[externalMetadataToAppState] transitionPermissionMode rejected restored mode '${p}': ${H(y).message}`)
      }
    }
    let r = x.safeParse(e.post_turn_summary);
    return {
      ...i,
      toolPermissionContext: s,
      ...typeof e.is_ultraplan_mode === "boolean" && {
        isUltraplanMode: e.is_ultraplan_mode
      },
      ...r.success && {
        postTurnSummary: r.data
      }
    }
  }
}

function F(e) {
  let i = e.session_allow_rules;
  if (!Array.isArray(i)) return (r) => r;
  if (Ug()) return (r) => r;
  let s = VNs(i.filter((r) => typeof r === "string" && !r.startsWith("mcp__")));
  if (s.length === 0) return (r) => r;
  return (r) => ({
    ...r,
    toolPermissionContext: {
      ...r.toolPermissionContext,
      alwaysAllowRules: {
        ...r.toolPermissionContext.alwaysAllowRules,
        session: s
      }
    }
  })
}

function m5o(e) {
  return (i) => T(e.external ?? {})(F(e.internal ?? {})(i))
}

function NSn({
  newState: e,
  oldState: i
}, s, r, p, y) {
  let f = i.toolPermissionContext.mode,
    m = e.toolPermissionContext.mode,
    M = e.proactivityLevel !== i.proactivityLevel;
  if (f !== m) {
    let n = Wl(f),
      a = Wl(m);
    if (n !== a) {
      let d = Vqs({
          rule: "first-entry",
          prevMode: f,
          newMode: m,
          prevUltraplan: i.isUltraplanMode,
          newUltraplan: e.isUltraplanMode
        }),
        c = d.is_ultraplan_mode;
      if (r?.notifyMetadataChanged(d), r?.isWorkerPermissionModeRecordEnabled) r.notifyInternalMetadataChanged({
        worker_permission_mode: a
      });
      if (qBe(m, c), !r) nnt({
        status: null,
        permissionMode: a
      })
    }
    r?.notifyPermissionModeChanged(m), Cct(m)
  } else if (M) r?.notifyProactivityLevelChanged();
  if (f !== m || M) {
    if (XP("--permission-mode", ["--inherit-permission-mode"], r9(m, e.proactivityLevel, nM(e.toolPermissionContext)), void 0, p), M) XP("--proactivity", [], e.proactivityLevel, void 0, p)
  }
  if (e.toolPermissionContext !== i.toolPermissionContext) f$s();
  if (e.toolPermissionContext.isBypassPermissionsModeAvailable !== i.toolPermissionContext.isBypassPermissionsModeAvailable && Ukr()?.permissionMode) qZt({
    bypassPermissionsAvailable: e.toolPermissionContext.isBypassPermissionsModeAvailable
  });
  if (e.toolPermissionContext.additionalWorkingDirectories !== i.toolPermissionContext.additionalWorkingDirectories && JTn(e.toolPermissionContext)) import("B:/~BUN/root/chunk-xk11xf74.js").then((n) => n.mcpClientModule().notifyMcpRootsListChanged()).catch((n) => {
    t(`Failed to notify MCP servers of roots change: ${H(n).message}`)
  });
  if (e.tasks !== i.tasks) {
    if (r) {
      let d = {},
        c = C(e);
      if (!A(C(i), c)) d.running_background_tasks = c;
      if (trt()) {
        let E = b(e);
        if (!A(b(i), E)) d.running_foreground_agents = E
      }
      if (Object.keys(d).length > 0) r.notifyInternalMetadataChanged(d)
    }
    let n = _(i),
      a = _(e);
    if (n.length !== a.length || a.some((d, c) => d.task_id !== n[c]?.task_id || d.description !== n[c]?.description || d.parent_task_id !== n[c]?.parent_task_id || d.ambient !== n[c]?.ambient || d.awaited !== n[c]?.awaited)) Ei({
      type: "system",
      subtype: "background_tasks_changed",
      tasks: a
    })
  }
  let P = i.toolPermissionContext.alwaysAllowRules.session,
    v = e.toolPermissionContext.alwaysAllowRules.session;
  if (P !== v) {
    let n = v?.filter((a) => !a.startsWith("mcp__"));
    r?.notifyInternalMetadataChanged({
      session_allow_rules: n?.length ? n : null
    })
  }
  if (e.mainLoopModel !== i.mainLoopModel || e.mainLoopModelForSession !== i.mainLoopModelForSession || e.toolPermissionContext.mode !== i.toolPermissionContext.mode) {
    let n = mys(s);
    try {
      let a = xv(i),
        d = xv(e);
      if (a !== d) {
        if (Act(["seven_day_overage_included"]), e.mainLoopModel !== i.mainLoopModel || e.mainLoopModelForSession !== i.mainLoopModelForSession) Rus(s.host, a, d);
        if (!Bn()) Wco(s, {
          fromModel: a,
          toModel: d,
          requestedModel: n.requestedModel,
          source: n.source
        });
        JFs(d)
      }
    } catch (a) {
      l(H(a))
    }
  }
  if (e.mainLoopModel !== i.mainLoopModel) {
    let n = e.mainLoopModel,
      a = Zvn(() => Bp(n)),
      d = tt();
    try {
      Xfe(d)
    } catch (c) {
      l(H(c))
    }
    ese(d, e), HKe(), fFn(s.precompute), ekn(p, y, a), r?.notifyMetadataChanged({
      model: n ?? Bl()
    }), XP("--model", ["-m"], n, void 0, p)
  }
  if (e.fotwClaim?.phase === "granted" && i.fotwClaim?.phase !== "granted") HKe();
  if (!Rae(e.sessionEffort, i.sessionEffort) || e.settingsEffortTable !== i.settingsEffortTable) ygn({
    sessionEffort: e.sessionEffort,
    settingsEffortTable: e.settingsEffortTable
  });
  if (!Rae(e.sessionEffort, i.sessionEffort)) {
    bqn();
    let n = r?.ultracodeActivePatch(lg(e.ultracode, tt()));
    r?.notifyMetadataChanged({
      effort_level: nHs(e.sessionEffort),
      ...n
    }), ese(tt(), e);
    let a = e.sessionEffort;
    if (a.kind !== "level") XP("--effort", [], null, void 0, p);
    else if (typeof a.value === "string" && DS(a.value)) XP("--effort", [], a.value, void 0, p)
  }
  if (e.fastMode !== i.fastMode) D(e.fastMode === !0, p);
  if (e.mainLoopModelForSession !== i.mainLoopModelForSession) {
    let n = tt();
    try {
      Xfe(n)
    } catch (a) {
      l(H(a))
    }
    if (ese(n, e), zXe() && (e.mainLoopModelForSession === null || e.mainLoopModelForSession === void 0) && i.mainLoopModelForSession !== null && i.mainLoopModelForSession !== void 0 && e.mainLoopModel === i.mainLoopModel) Bp(e.mainLoopModel), r?.notifyMetadataChanged({
      model: e.mainLoopModel ?? Bl()
    })
  }
  if (e.advisorModel !== i.advisorModel) XP("--advisor", [], e.advisorModel ?? null, void 0, p);
  if (r && e.frameUrls !== i.frameUrls && Tke()) {
    let n = rD(e.frameUrls).map(([, a]) => a);
    if (n.length > 0 || rD(i.frameUrls).length > 0) r.notifyMetadataChanged({
      artifacts: n.length === 0 ? null : n.map(z$n)
    })
  }
  if (r && !B(e.activeGoal, i.activeGoal)) {
    let n = e.activeGoal;
    if (r.notifyActiveGoalChanged(n), n) {
      let {
        tokens_at_start: a,
        ...d
      } = Mqr(n);
      r.notifyMetadataChanged({
        goal: {
          ...d,
          last_reason: d.last_reason ?? null,
          met: !1
        }
      })
    } else r.notifyMetadataChanged({
      goal: null
    })
  }
  if (r && (e.autoCompactWindow !== i.autoCompactWindow || e.mainLoopModel !== i.mainLoopModel || e.mainLoopModelForSession !== i.mainLoopModelForSession || e.settings !== i.settings)) r.notifyAutocompactInputsChanged();
  if (e.verbose !== i.verbose) HK("verbose", e.verbose, p);
  if (e.settings !== i.settings) {
    try {
      if (uht(), yle(), fht(), v$t(), e.settings.env !== i.settings.env) k()
    } catch (n) {
      t(`Failed to apply settings change (clear auth caches / re-apply env): ${H(n).message}`, {
        level: "error"
      })
    }
    if (e.settings.outputStyle !== i.settings.outputStyle) vI("output_style")
  }
  if (e.ultracode !== i.ultracode || e.mainLoopModel !== i.mainLoopModel || e.mainLoopModelForSession !== i.mainLoopModelForSession || e.settings !== i.settings) {
    let n = lg(e.ultracode, tt());
    r?.notifyUltracodeActive(n), bit({
      ultracodeActive: n
    })
  }
}

function I(e, i) {
  if (e.type !== "local_bash" && e.type !== "monitor_mcp" && e.type !== "monitor_ws") return !1;
  let s = e.agentId !== void 0 ? i[e.agentId] : void 0;
  return s !== void 0 && Yu(s)
}

function L(e) {
  return {
    agent_type: e.agentType,
    ...e.selectedAgent && {
      is_built_in: e.selectedAgent.source === "built-in"
    },
    forked_skill: e.forkedSkillName !== void 0,
    main_thread_spawned: e.spawnDepth === 1 && e.parentAgentId === void 0,
    default_launch: e.cwd === void 0 && e.launchedWithDefaults === !0
  }
}

function C(e) {
  return Object.values(e.tasks).filter((i) => Ph(i) && !Yu(i) && (i.type === "local_bash" || i.type === "monitor_mcp" || i.type === "monitor_ws" || i.type === "local_agent" || i.type === "local_workflow")).map((i) => ({
    task_id: i.id,
    task_type: i.type,
    description: i.description,
    ...(i.type === "local_bash" || i.type === "monitor_mcp" || i.type === "monitor_ws") && i.agentId !== void 0 && {
      owner_agent_id: i.agentId
    },
    ...i.type === "local_bash" && i.kind !== void 0 && {
      shell_kind: i.kind
    },
    ...i.type === "monitor_ws" && i.ambient && {
      ambient: !0
    },
    ...i.type === "local_agent" && {
      ...L(i),
      run_id: xD(i.id)
    },
    ...I(i, e.tasks) && {
      observer_owned: !0
    }
  }))
}

function A(e, i) {
  return e.length === i.length && i.every((s, r) => s.task_id === e[r]?.task_id)
}

function b(e) {
  return Object.values(e.tasks).flatMap((i) => i.type === "local_agent" && i.status === "running" && i.isBackgrounded === !1 && i.directCall === !0 && i.toolUseId !== void 0 && i.spawnDepth === 1 && i.parentAgentId === void 0 ? [{
    task_id: i.id,
    task_type: i.type,
    description: i.description,
    tool_use_id: i.toolUseId,
    ...L(i)
  }] : [])
}
var R = ["condition", "setAt", "iterations", "tokensAtStart", "lastReason"];

function Mqr(e) {
  return {
    condition: e.condition,
    iterations: e.iterations,
    set_at: e.setAt,
    tokens_at_start: e.tokensAtStart,
    ...e.lastReason !== void 0 && {
      last_reason: e.lastReason
    }
  }
}

function B(e, i) {
  if (e === i) return !0;
  if (e === void 0 || i === void 0) return !1;
  return R.every((s) => e[s] === i[s])
}

function _(e) {
  return Object.values(e.tasks).filter((i) => Ph(i) && !Yu(i)).map((i) => ({
    task_id: i.id,
    run_id: xD(i.id),
    task_type: i.type,
    subagent_type: iIt(i),
    description: i.description,
    parent_task_id: svr(i, e.tasks),
    ...I9(i) && {
      ambient: !0
    },
    ...ivr(i) && {
      awaited: !0
    }
  }))
}

function D(e, i) {
  if (!e && (!Gg(tt()) || IO(tt()) !== null || I1s())) return;
  jxn(e, i)
}

function c2t(e) {
  Ei({
    type: "system",
    subtype: "background_tasks_changed",
    tasks: _(e)
  })
}

function g5o(e, i, s) {
  e.settleUltracodeActive(lg(i, tt()), s)
}
export {
  Iqr,
  d2t,
  nnt,
  f5o,
  m5o,
  NSn,
  Mqr,
  c2t,
  g5o
};
