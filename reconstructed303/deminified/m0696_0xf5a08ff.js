// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Bp, ygn, Bn, vI, Sc } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Wl, Vqs, kA } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { bqn, JFs, lg, DS, nHs, Rae } from "B:/~BUN/root/chunk-8y0chnnr.js";
import { WJe } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { xD, Ei, zXe, IO, Gg, I1s, tt, Bl, uht, yle, fht, v$t, Ms } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { qZt, Ukr, Cct, Act } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { HK } from "B:/~BUN/root/chunk-gy660jgx.js";
import { Gve, fTo } from "B:/~BUN/root/chunk-1g2t7gtx.js";
import { Rus, r9, nM, xv, mys, Wco, fFn, Wse, k9, hwe } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Ug } from "B:/~BUN/root/chunk-c44qc88s.js";
import { VNs } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { aA } from "B:/~BUN/root/chunk-429xgjya.js";
import { Yu, svr, Ph, ivr, I9, iIt } from "B:/~BUN/root/chunk-k382hx6g.js";
import { f$s } from "B:/~BUN/root/chunk-t63e78w2.js";
import { Tke } from "B:/~BUN/root/chunk-66hg7026.js";
import { qBe, Xfe } from "B:/~BUN/root/chunk-aqd86p9a.js";
import { rD, z$n } from "B:/~BUN/root/chunk-n0e205s6.js";
import { XP } from "B:/~BUN/root/chunk-nq10jsxs.js";
import { HKe } from "B:/~BUN/root/chunk-qc6mvzn1.js";
import { KV, D0 } from "B:/~BUN/root/chunk-62ynkm2y.js";
import { JTn } from "B:/~BUN/root/chunk-t5twnmpa.js";
import { ulr } from "B:/~BUN/root/chunk-v1edtzvj.js";
import { Zvn, ekn } from "B:/~BUN/root/chunk-8cxc88ry.js";
import { trt } from "B:/~BUN/root/chunk-hmwh3b50.js";
import { jxn } from "B:/~BUN/root/chunk-s69xt8gc.js";
import { bit, ese } from "B:/~BUN/root/chunk-0s9qz1dg.js";
import { $E } from "B:/~BUN/root/chunk-410t5g3b.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
function Iqr(e) {
  return e !== "requesting" && Gve();
}
function h() {
  return !k9() && !Wse();
}
function d2t(e) {
  if (e.type === "system" && "subtype" in e && e.subtype === "status" && "compact_error" in e && e.compact_error !== void 0 && !h()) return {
    ...e,
    compact_error: void 0
  };
  return e;
}
function nnt({
  status: status,
  permissionMode: permissionMode,
  compactResult: s,
  compactError: r
}) {
  try {
    if (!Iqr(status)) return;
    Ei({
      type: "system",
      subtype: "status",
      status: status,
      ...(permissionMode !== void 0 && {
        permissionMode: permissionMode
      }),
      ...(s !== void 0 && {
        compact_result: s
      }),
      ...(r !== void 0 && h() && {
        compact_error: r
      })
    });
  } catch (error) {
    l(error);
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
      ...(e.ttftMs !== void 0 && {
        ttft_ms: e.ttftMs
      })
    });
  } catch (error) {
    l(error);
  }
}
function k() {
  if (!Ms()) return;
  aA(), ulr();
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
  return i => {
    let toolPermissionContext = i.toolPermissionContext;
    if (typeof e.permission_mode === "string") {
      let mode = kA(e.permission_mode);
      if (WJe(mode), mode === "bypassPermissions" && ($E() || !toolPermissionContext.isBypassPermissionsModeAvailable)) t("[externalMetadataToAppState] Refusing restored mode 'bypassPermissions' (disabled by settings/policy or session not launched with --dangerously-skip-permissions); falling back to 'default'", {
        level: "warn"
      }), mode = "default";
      try {
        if (toolPermissionContext = {
          ...D0(toolPermissionContext.mode, mode, toolPermissionContext),
          mode: mode
        }, mode === "auto") toolPermissionContext = KV(toolPermissionContext);
      } catch (error) {
        t(`[externalMetadataToAppState] transitionPermissionMode rejected restored mode '${mode}': ${H(error).message}`);
      }
    }
    let r = x.safeParse(e.post_turn_summary);
    return {
      ...i,
      toolPermissionContext: toolPermissionContext,
      ...(typeof e.is_ultraplan_mode === "boolean" && {
        isUltraplanMode: e.is_ultraplan_mode
      }),
      ...(r.success && {
        postTurnSummary: r.data
      })
    };
  };
}
function F(e) {
  let session_allow_rules = e.session_allow_rules;
  if (!Array.isArray(session_allow_rules)) return r => r;
  if (Ug()) return r => r;
  let session = VNs(session_allow_rules.filter(item => typeof item === "string" && !item.startsWith("mcp__")));
  if (session.length === 0) return r => r;
  return r => ({
    ...r,
    toolPermissionContext: {
      ...r.toolPermissionContext,
      alwaysAllowRules: {
        ...r.toolPermissionContext.alwaysAllowRules,
        session: session
      }
    }
  });
}
function m5o(e) {
  return i => T(e.external ?? {})(F(e.internal ?? {})(i));
}
function NSn({
  newState: newState,
  oldState: oldState
}, s, r, p, y) {
  let f = oldState.toolPermissionContext.mode,
    m = newState.toolPermissionContext.mode,
    M = newState.proactivityLevel !== oldState.proactivityLevel;
  if (f !== m) {
    let n = Wl(f),
      a = Wl(m);
    if (n !== a) {
      let d = Vqs({
          rule: "first-entry",
          prevMode: f,
          newMode: m,
          prevUltraplan: oldState.isUltraplanMode,
          newUltraplan: newState.isUltraplanMode
        }),
        is_ultraplan_mode = d.is_ultraplan_mode;
      if (r?.notifyMetadataChanged(d), r?.isWorkerPermissionModeRecordEnabled) r.notifyInternalMetadataChanged({
        worker_permission_mode: a
      });
      if (qBe(m, is_ultraplan_mode), !r) nnt({
        status: null,
        permissionMode: a
      });
    }
    r?.notifyPermissionModeChanged(m), Cct(m);
  } else if (M) r?.notifyProactivityLevelChanged();
  if (f !== m || M) {
    if (XP("--permission-mode", ["--inherit-permission-mode"], r9(m, newState.proactivityLevel, nM(newState.toolPermissionContext)), void 0, p), M) XP("--proactivity", [], newState.proactivityLevel, void 0, p);
  }
  if (newState.toolPermissionContext !== oldState.toolPermissionContext) f$s();
  if (newState.toolPermissionContext.isBypassPermissionsModeAvailable !== oldState.toolPermissionContext.isBypassPermissionsModeAvailable && Ukr()?.permissionMode) qZt({
    bypassPermissionsAvailable: newState.toolPermissionContext.isBypassPermissionsModeAvailable
  });
  if (newState.toolPermissionContext.additionalWorkingDirectories !== oldState.toolPermissionContext.additionalWorkingDirectories && JTn(newState.toolPermissionContext)) import("B:/~BUN/root/chunk-xk11xf74.js").then(n => n.mcpClientModule().notifyMcpRootsListChanged()).catch(n => {
    t(`Failed to notify MCP servers of roots change: ${H(n).message}`);
  });
  if (newState.tasks !== oldState.tasks) {
    if (r) {
      let d = {},
        c = C(newState);
      if (!A(C(oldState), c)) d.running_background_tasks = c;
      if (trt()) {
        let E = b(newState);
        if (!A(b(oldState), E)) d.running_foreground_agents = E;
      }
      if (Object.keys(d).length > 0) r.notifyInternalMetadataChanged(d);
    }
    let n = _(oldState),
      tasks = _(newState);
    if (n.length !== tasks.length || tasks.some((item, index) => item.task_id !== n[index]?.task_id || item.description !== n[index]?.description || item.parent_task_id !== n[index]?.parent_task_id || item.ambient !== n[index]?.ambient || item.awaited !== n[index]?.awaited)) Ei({
      type: "system",
      subtype: "background_tasks_changed",
      tasks: tasks
    });
  }
  let session_2 = oldState.toolPermissionContext.alwaysAllowRules.session,
    session_3 = newState.toolPermissionContext.alwaysAllowRules.session;
  if (session_2 !== session_3) {
    let n = session_3?.filter(a => !a.startsWith("mcp__"));
    r?.notifyInternalMetadataChanged({
      session_allow_rules: n?.length ? n : null
    });
  }
  if (newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession || newState.toolPermissionContext.mode !== oldState.toolPermissionContext.mode) {
    let n = mys(s);
    try {
      let fromModel = xv(oldState),
        toModel = xv(newState);
      if (fromModel !== toModel) {
        if (Act(["seven_day_overage_included"]), newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession) Rus(s.host, fromModel, toModel);
        if (!Bn()) Wco(s, {
          fromModel: fromModel,
          toModel: toModel,
          requestedModel: n.requestedModel,
          source: n.source
        });
        JFs(toModel);
      }
    } catch (error) {
      l(H(error));
    }
  }
  if (newState.mainLoopModel !== oldState.mainLoopModel) {
    let mainLoopModel = newState.mainLoopModel,
      a = Zvn(() => Bp(mainLoopModel)),
      d = tt();
    try {
      Xfe(d);
    } catch (error) {
      l(H(error));
    }
    ese(d, newState), HKe(), fFn(s.precompute), ekn(p, y, a), r?.notifyMetadataChanged({
      model: mainLoopModel ?? Bl()
    }), XP("--model", ["-m"], mainLoopModel, void 0, p);
  }
  if (newState.fotwClaim?.phase === "granted" && oldState.fotwClaim?.phase !== "granted") HKe();
  if (!Rae(newState.sessionEffort, oldState.sessionEffort) || newState.settingsEffortTable !== oldState.settingsEffortTable) ygn({
    sessionEffort: newState.sessionEffort,
    settingsEffortTable: newState.settingsEffortTable
  });
  if (!Rae(newState.sessionEffort, oldState.sessionEffort)) {
    bqn();
    let n = r?.ultracodeActivePatch(lg(newState.ultracode, tt()));
    r?.notifyMetadataChanged({
      effort_level: nHs(newState.sessionEffort),
      ...n
    }), ese(tt(), newState);
    let sessionEffort = newState.sessionEffort;
    if (sessionEffort.kind !== "level") XP("--effort", [], null, void 0, p);else if (typeof sessionEffort.value === "string" && DS(sessionEffort.value)) XP("--effort", [], sessionEffort.value, void 0, p);
  }
  if (newState.fastMode !== oldState.fastMode) D(newState.fastMode === !0, p);
  if (newState.mainLoopModelForSession !== oldState.mainLoopModelForSession) {
    let n = tt();
    try {
      Xfe(n);
    } catch (error) {
      l(H(error));
    }
    if (ese(n, newState), zXe() && (newState.mainLoopModelForSession === null || newState.mainLoopModelForSession === void 0) && oldState.mainLoopModelForSession !== null && oldState.mainLoopModelForSession !== void 0 && newState.mainLoopModel === oldState.mainLoopModel) Bp(newState.mainLoopModel), r?.notifyMetadataChanged({
      model: newState.mainLoopModel ?? Bl()
    });
  }
  if (newState.advisorModel !== oldState.advisorModel) XP("--advisor", [], newState.advisorModel ?? null, void 0, p);
  if (r && newState.frameUrls !== oldState.frameUrls && Tke()) {
    let n = rD(newState.frameUrls).map(([, a]) => a);
    if (n.length > 0 || rD(oldState.frameUrls).length > 0) r.notifyMetadataChanged({
      artifacts: n.length === 0 ? null : n.map(z$n)
    });
  }
  if (r && !B(newState.activeGoal, oldState.activeGoal)) {
    let activeGoal = newState.activeGoal;
    if (r.notifyActiveGoalChanged(activeGoal), activeGoal) {
      let {
        tokens_at_start: tokens_at_start,
        ...d
      } = Mqr(activeGoal);
      r.notifyMetadataChanged({
        goal: {
          ...d,
          last_reason: d.last_reason ?? null,
          met: !1
        }
      });
    } else r.notifyMetadataChanged({
      goal: null
    });
  }
  if (r && (newState.autoCompactWindow !== oldState.autoCompactWindow || newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession || newState.settings !== oldState.settings)) r.notifyAutocompactInputsChanged();
  if (newState.verbose !== oldState.verbose) HK("verbose", newState.verbose, p);
  if (newState.settings !== oldState.settings) {
    try {
      if (uht(), yle(), fht(), v$t(), newState.settings.env !== oldState.settings.env) k();
    } catch (error) {
      t(`Failed to apply settings change (clear auth caches / re-apply env): ${H(error).message}`, {
        level: "error"
      });
    }
    if (newState.settings.outputStyle !== oldState.settings.outputStyle) vI("output_style");
  }
  if (newState.ultracode !== oldState.ultracode || newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession || newState.settings !== oldState.settings) {
    let ultracodeActive = lg(newState.ultracode, tt());
    r?.notifyUltracodeActive(ultracodeActive), bit({
      ultracodeActive: ultracodeActive
    });
  }
}
function I(e, i) {
  if (e.type !== "local_bash" && e.type !== "monitor_mcp" && e.type !== "monitor_ws") return !1;
  let s = e.agentId !== void 0 ? i[e.agentId] : void 0;
  return s !== void 0 && Yu(s);
}
function L(e) {
  return {
    agent_type: e.agentType,
    ...(e.selectedAgent && {
      is_built_in: e.selectedAgent.source === "built-in"
    }),
    forked_skill: e.forkedSkillName !== void 0,
    main_thread_spawned: e.spawnDepth === 1 && e.parentAgentId === void 0,
    default_launch: e.cwd === void 0 && e.launchedWithDefaults === !0
  };
}
function C(e) {
  return Object.values(e.tasks).filter(item => Ph(item) && !Yu(item) && (item.type === "local_bash" || item.type === "monitor_mcp" || item.type === "monitor_ws" || item.type === "local_agent" || item.type === "local_workflow")).map(item => ({
    task_id: item.id,
    task_type: item.type,
    description: item.description,
    ...((item.type === "local_bash" || item.type === "monitor_mcp" || item.type === "monitor_ws") && item.agentId !== void 0 && {
      owner_agent_id: item.agentId
    }),
    ...(item.type === "local_bash" && item.kind !== void 0 && {
      shell_kind: item.kind
    }),
    ...(item.type === "monitor_ws" && item.ambient && {
      ambient: !0
    }),
    ...(item.type === "local_agent" && {
      ...L(item),
      run_id: xD(item.id)
    }),
    ...(I(item, e.tasks) && {
      observer_owned: !0
    })
  }));
}
function A(e, i) {
  return e.length === i.length && i.every((item, index) => item.task_id === e[index]?.task_id);
}
function b(e) {
  return Object.values(e.tasks).flatMap(item => item.type === "local_agent" && item.status === "running" && item.isBackgrounded === !1 && item.directCall === !0 && item.toolUseId !== void 0 && item.spawnDepth === 1 && item.parentAgentId === void 0 ? [{
    task_id: item.id,
    task_type: item.type,
    description: item.description,
    tool_use_id: item.toolUseId,
    ...L(item)
  }] : []);
}
var R = ["condition", "setAt", "iterations", "tokensAtStart", "lastReason"];
function Mqr(e) {
  return {
    condition: e.condition,
    iterations: e.iterations,
    set_at: e.setAt,
    tokens_at_start: e.tokensAtStart,
    ...(e.lastReason !== void 0 && {
      last_reason: e.lastReason
    })
  };
}
function B(e, i) {
  if (e === i) return !0;
  if (e === void 0 || i === void 0) return !1;
  return R.every(item => e[item] === i[item]);
}
function _(e) {
  return Object.values(e.tasks).filter(item => Ph(item) && !Yu(item)).map(item => ({
    task_id: item.id,
    run_id: xD(item.id),
    task_type: item.type,
    subagent_type: iIt(item),
    description: item.description,
    parent_task_id: svr(item, e.tasks),
    ...(I9(item) && {
      ambient: !0
    }),
    ...(ivr(item) && {
      awaited: !0
    })
  }));
}
function D(e, i) {
  if (!e && (!Gg(tt()) || IO(tt()) !== null || I1s())) return;
  jxn(e, i);
}
function c2t(e) {
  Ei({
    type: "system",
    subtype: "background_tasks_changed",
    tasks: _(e)
  });
}
function g5o(e, i, s) {
  e.settleUltracodeActive(lg(i, tt()), s);
}
export { Iqr, d2t, nnt, f5o, m5o, NSn, Mqr, c2t, g5o };