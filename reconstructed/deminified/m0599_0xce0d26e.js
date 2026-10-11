// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { fp, q1t, Yn, NC, Bl } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { te } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { VGe, Nnt, q4, CM, mfo, A_r, Wve, G8, oV, Bie } from "B:/~BUN/root/chunk-3jyp964r.js";
import { za, vFe, it, bl, mYe, rJ, gYe, yYe, ps, TFr, CFr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { oc, oFo, Qk } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { d$e } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Lb } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Bxo } from "B:/~BUN/root/chunk-msy8grqx.js";
import { s1 } from "B:/~BUN/root/chunk-4py062qg.js";
import { Lk, oPo, RX } from "B:/~BUN/root/chunk-t1afcev5.js";
import { yx } from "B:/~BUN/root/chunk-ew8y0fm0.js";
import { MTe, Kee } from "B:/~BUN/root/chunk-n2rcpjj1.js";
import { JRo } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { qA, Ptn } from "B:/~BUN/root/chunk-zfb6h1v8.js";
import { Yae, NPr } from "B:/~BUN/root/chunk-x8507144.js";
import { ile } from "B:/~BUN/root/chunk-7d9qjs8x.js";
import { WO } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { zOe } from "B:/~BUN/root/chunk-cj9k3aj6.js";
import { eCn } from "B:/~BUN/root/chunk-acsg9bv8.js";
import { lW, yL } from "B:/~BUN/root/chunk-0mn860zt.js";
import { G8t } from "B:/~BUN/root/chunk-hsn00gxk.js";
import { M5 } from "B:/~BUN/root/chunk-51edmwg2.js";
import { Hd, km, p9 } from "B:/~BUN/root/chunk-ydzwkn0c.js";
import { Rw } from "B:/~BUN/root/chunk-0b2y1gsk.js";
import { o, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
function lJn(e) {
  return e !== "requesting" && Yae();
}
function h() {
  return !oV() && !G8();
}
function zgt(e) {
  if (e.type === "system" && "subtype" in e && e.subtype === "status" && "compact_error" in e && e.compact_error !== void 0 && !h()) return {
    ...e,
    compact_error: void 0
  };
  return e;
}
function i1e({
  status: status,
  permissionMode: permissionMode,
  compactResult: s,
  compactError: r
}) {
  try {
    if (!lJn(status)) return;
    za({
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
    d(error);
  }
}
function H3r(e) {
  try {
    if (!Bl() || !NPr()) return;
    if (Bie(e.event)) return;
    za({
      type: "stream_event",
      event: e.event,
      parent_tool_use_id: null,
      ...(e.ttftMs !== void 0 && {
        ttft_ms: e.ttftMs
      })
    });
  } catch (error) {
    d(error);
  }
}
var b = u({
  status_category: o(),
  status_detail: o(),
  needs_action: o(),
  recent_action: o().optional(),
  description: o().optional(),
  reply: o().optional()
});
function P(e) {
  return i => {
    let toolPermissionContext = i.toolPermissionContext;
    if (typeof e.permission_mode === "string") {
      let mode = Qk(e.permission_mode);
      if (d$e(mode), mode === "bypassPermissions" && (Rw() || !toolPermissionContext.isBypassPermissionsModeAvailable)) t("[externalMetadataToAppState] Refusing restored mode 'bypassPermissions' (disabled by settings/policy or session not launched with --dangerously-skip-permissions); falling back to 'default'", {
        level: "warn"
      }), mode = "default";
      try {
        if (toolPermissionContext = {
          ...yL(toolPermissionContext.mode, mode, toolPermissionContext),
          mode: mode
        }, mode === "auto") toolPermissionContext = lW(toolPermissionContext);
      } catch (error) {
        t(`[externalMetadataToAppState] transitionPermissionMode rejected restored mode '${mode}': ${te(error).message}`);
      }
    }
    let r = b.safeParse(e.post_turn_summary);
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
function A(e) {
  let session_allow_rules = e.session_allow_rules;
  if (!Array.isArray(session_allow_rules)) return r => r;
  if (Lb()) return r => r;
  let session = Bxo(session_allow_rules.filter(item => typeof item === "string" && !item.startsWith("mcp__")));
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
function F3r(e) {
  return i => P(e.external ?? {})(A(e.internal ?? {})(i));
}
function mzt({
  newState: newState,
  oldState: oldState
}, s, r, l, v) {
  let g = oldState.toolPermissionContext.mode,
    f = newState.toolPermissionContext.mode,
    F = newState.proactivityLevel !== oldState.proactivityLevel;
  if (g !== f) {
    let n = oc(g),
      a = oc(f);
    if (n !== a) {
      let p = oFo({
          rule: "first-entry",
          prevMode: g,
          newMode: f,
          prevUltraplan: oldState.isUltraplanMode,
          newUltraplan: newState.isUltraplanMode
        }),
        is_ultraplan_mode = p.is_ultraplan_mode;
      if (r?.notifyMetadataChanged(p), r?.isWorkerPermissionModeRecordEnabled) r.notifyInternalMetadataChanged({
        worker_permission_mode: a
      });
      if (MTe(f, is_ultraplan_mode), !r) i1e({
        status: null,
        permissionMode: a
      });
    }
    r?.notifyPermissionModeChanged(f);
  }
  if (g !== f) WO("--permission-mode", ["--inherit-permission-mode"], q4(f, newState.proactivityLevel), void 0, l);
  if (newState.toolPermissionContext !== oldState.toolPermissionContext) JRo();
  if (newState.toolPermissionContext.additionalWorkingDirectories !== oldState.toolPermissionContext.additionalWorkingDirectories && G8t(newState.toolPermissionContext)) import("B:/~BUN/root/chunk-m4dhr7e5.js").then(n => n.mcpClientModule().notifyMcpRootsListChanged()).catch(n => {
    t(`Failed to notify MCP servers of roots change: ${te(n).message}`);
  });
  if (newState.tasks !== oldState.tasks) {
    if (r) {
      let p = E(oldState),
        running_background_tasks = E(newState);
      if (p.length !== running_background_tasks.length || running_background_tasks.some((item, index) => item.task_id !== p[index]?.task_id)) r.notifyInternalMetadataChanged({
        running_background_tasks: running_background_tasks
      });
    }
    let n = M(oldState),
      tasks = M(newState);
    if (n.length !== tasks.length || tasks.some((item, index) => item.task_id !== n[index]?.task_id || item.description !== n[index]?.description || item.ambient !== n[index]?.ambient)) za({
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
    let n = mfo(s);
    try {
      let fromModel = CM(oldState),
        toModel = CM(newState);
      if (fromModel !== toModel) {
        if (VGe(["seven_day_overage_included"]), !Yn()) A_r(s, {
          fromModel: fromModel,
          toModel: toModel,
          requestedModel: n.requestedModel,
          source: n.source
        });
      }
    } catch (error) {
      d(te(error));
    }
  }
  if (newState.mainLoopModel !== oldState.mainLoopModel) {
    let mainLoopModel = newState.mainLoopModel,
      a = Nnt() ? CFr() : void 0,
      p = it();
    fp(mainLoopModel);
    let m = it();
    try {
      Kee(m);
    } catch (error) {
      d(te(error));
    }
    let y = a !== void 0 && it() !== p;
    if (y) TFr(a);
    M5(m, newState), zOe(), Wve(s.precompute, void 0, "model_switch", void 0, l), import("B:/~BUN/root/chunk-6vy6kmgh.js").then(({
      refreshBootstrapData: refreshBootstrapData
    }) => refreshBootstrapData(l, v, {
      renderedClientData: y ? a : void 0
    })), r?.notifyMetadataChanged({
      model: mainLoopModel ?? bl()
    }), WO("--model", ["-m"], mainLoopModel, void 0, l);
  }
  if (newState.fotwClaim?.phase === "granted" && oldState.fotwClaim?.phase !== "granted") zOe();
  if (!RX(newState.sessionEffort, oldState.sessionEffort) || newState.settingsEffortTable !== oldState.settingsEffortTable) q1t({
    sessionEffort: newState.sessionEffort,
    settingsEffortTable: newState.settingsEffortTable
  });
  if (!RX(newState.sessionEffort, oldState.sessionEffort)) {
    r?.notifyMetadataChanged({
      effort_level: oPo(newState.sessionEffort)
    }), M5(it(), newState);
    let sessionEffort = newState.sessionEffort;
    if (sessionEffort.kind !== "level") WO("--effort", [], null, void 0, l);else if (typeof sessionEffort.value === "string" && Lk(sessionEffort.value)) WO("--effort", [], sessionEffort.value, void 0, l);
  }
  if (newState.mainLoopModelForSession !== oldState.mainLoopModelForSession) {
    let n = it();
    try {
      Kee(n);
    } catch (error) {
      d(te(error));
    }
    if (M5(n, newState), vFe() && (newState.mainLoopModelForSession === null || newState.mainLoopModelForSession === void 0) && oldState.mainLoopModelForSession !== null && oldState.mainLoopModelForSession !== void 0 && newState.mainLoopModel === oldState.mainLoopModel) fp(newState.mainLoopModel), r?.notifyMetadataChanged({
      model: newState.mainLoopModel ?? bl()
    });
  }
  if (newState.advisorModel !== oldState.advisorModel) WO("--advisor", [], newState.advisorModel ?? null, void 0, l);
  if (r && newState.frameUrls !== oldState.frameUrls && ile()) {
    let n = qA(newState.frameUrls).map(([, a]) => a);
    if (n.length > 0 || qA(oldState.frameUrls).length > 0) r.notifyMetadataChanged({
      artifacts: n.length === 0 ? null : n.map(Ptn)
    });
  }
  if (r && !T(newState.activeGoal, oldState.activeGoal)) {
    let activeGoal = newState.activeGoal;
    if (r.notifyActiveGoalChanged(activeGoal), activeGoal) {
      let {
        tokens_at_start: tokens_at_start,
        ...p
      } = cJn(activeGoal);
      r.notifyMetadataChanged({
        goal: {
          ...p,
          last_reason: p.last_reason ?? null,
          met: !1
        }
      });
    } else r.notifyMetadataChanged({
      goal: null
    });
  }
  if (r && (newState.autoCompactWindow !== oldState.autoCompactWindow || newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession || newState.settings !== oldState.settings)) r.notifyAutocompactInputsChanged();
  if (newState.verbose !== oldState.verbose) s1("verbose", newState.verbose, l);
  if (newState.settings !== oldState.settings) {
    try {
      if (mYe(), rJ(), gYe(), yYe(), newState.settings.env !== oldState.settings.env && ps()) yx(), eCn();
    } catch (error) {
      t(`Failed to apply settings change (clear auth caches / re-apply env): ${te(error).message}`, {
        level: "error"
      });
    }
    if (newState.settings.outputStyle !== oldState.settings.outputStyle) NC("output_style");
  }
}
function x(e, i) {
  if (e.type !== "local_bash" && e.type !== "monitor_mcp" && e.type !== "monitor_ws") return !1;
  let s = e.agentId !== void 0 ? i[e.agentId] : void 0;
  return s !== void 0 && Hd(s);
}
function E(e) {
  return Object.values(e.tasks).filter(item => km(item) && !Hd(item) && (item.type === "local_bash" || item.type === "monitor_mcp" || item.type === "monitor_ws" || item.type === "local_agent" || item.type === "local_workflow")).map(item => ({
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
    ...(x(item, e.tasks) && {
      observer_owned: !0
    })
  }));
}
var L = ["condition", "setAt", "iterations", "tokensAtStart", "lastReason"];
function cJn(e) {
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
function T(e, i) {
  if (e === i) return !0;
  if (e === void 0 || i === void 0) return !1;
  return L.every(item => e[item] === i[item]);
}
function M(e) {
  return Object.values(e.tasks).filter(item => km(item) && !Hd(item)).map(item => ({
    task_id: item.id,
    task_type: item.type,
    description: item.description,
    ...(p9(item) && {
      ambient: !0
    })
  }));
}
function Ggt(e) {
  za({
    type: "system",
    subtype: "background_tasks_changed",
    tasks: M(e)
  });
}
export { lJn, zgt, i1e, H3r, F3r, mzt, cJn, Ggt };