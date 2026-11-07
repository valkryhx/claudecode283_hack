// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { eh, sKn, q, er, xn, HN, R$e, Du } from "B:/~BUN/root/chunk-game8aqv.js";
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t, oi } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ln, _zn, Ban, pM, Md, zQi, mM } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { UAo, BAo } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { mN } from "B:/~BUN/root/chunk-44q965xg.js";
import { iRr, d2i, wg, Dv, aTs, Pse, G_e } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { n_t } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { SU, Ti, Ygt, jL, b_, w6i, at, Ud, _yt, Vbe, b$t, asn, Us } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Lkr, hLn, _po, rLt } from "B:/~BUN/root/chunk-yhafkw66.js";
import { IX } from "B:/~BUN/root/chunk-sgy380eg.js";
import { mvr, hvr, SLe, mSs } from "B:/~BUN/root/chunk-jmka9ye7.js";
import { Uhi, q3t, QK, ccr, ucr, Nre, mF, WT, lwi, Ens, kfr, iZ, toe, HEe } from "B:/~BUN/root/chunk-27h4st9h.js";
import { itn } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Ip } from "B:/~BUN/root/chunk-tdekz3md.js";
import { Nzi } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { qI } from "B:/~BUN/root/chunk-m749kjym.js";
import { z1i } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { pWe } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { pZ, nm, oio, u_, sio, AIt, _2, SXt } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { t7e, hCe } from "B:/~BUN/root/chunk-x4zqd4cy.js";
import { yCe, Amo, xLe } from "B:/~BUN/root/chunk-0xtfwyhv.js";
import { lL } from "B:/~BUN/root/chunk-4vcs773m.js";
import { iat } from "B:/~BUN/root/chunk-dqprk713.js";
import { T8, c$ } from "B:/~BUN/root/chunk-x12sgt91.js";
import { H6r } from "B:/~BUN/root/chunk-t85n63bg.js";
import { Rhe } from "B:/~BUN/root/chunk-5pkj74mh.js";
import { KZn } from "B:/~BUN/root/chunk-kc9g8de3.js";
import { btr } from "B:/~BUN/root/chunk-dry50drj.js";
import { jAt, tde } from "B:/~BUN/root/chunk-ty3rgkxp.js";
import { EA } from "B:/~BUN/root/chunk-eyvtcj15.js";
import { dM, $an } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { o, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Ddn, Ldn, AT } from "B:/~BUN/root/chunk-mzfrv3wm.js";
import { qHe } from "B:/~BUN/root/chunk-3cca501e.js";
import { l7 } from "B:/~BUN/root/chunk-99vcrndq.js";
function hHo(e) {
  return e !== "requesting" && SLe();
}
function L() {
  return !toe() && !iZ();
}
function zmn(e) {
  if (e.type === "system" && "subtype" in e && e.subtype === "status" && "compact_error" in e && e.compact_error !== void 0 && !L()) return {
    ...e,
    compact_error: void 0
  };
  return e;
}
function Wvt({
  status: status,
  permissionMode: permissionMode,
  compactResult: n,
  compactError: s
}) {
  try {
    if (!hHo(status)) return;
    Ti({
      type: "system",
      subtype: "status",
      status: status,
      ...(permissionMode !== void 0 && {
        permissionMode: permissionMode
      }),
      ...(n !== void 0 && {
        compact_result: n
      }),
      ...(s !== void 0 && L() && {
        compact_error: s
      })
    });
  } catch (error) {
    a(error);
  }
}
function F8s(e) {
  try {
    if (!Du() || !mSs()) return;
    if (HEe(e.event)) return;
    Ti({
      type: "stream_event",
      event: e.event,
      parent_tool_use_id: null,
      ...(e.ttftMs !== void 0 && {
        ttft_ms: e.ttftMs
      })
    });
  } catch (error) {
    a(error);
  }
}
var G = 200;
function H(e, r, n, s) {
  var i = -1,
    f = UAo,
    m = !0,
    h = e.length,
    _ = [],
    E = r.length;
  if (!h) return _;
  if (n) r = l7(r, qHe(n));
  if (s) f = BAo, m = !1;else if (r.length >= G) f = Ldn, m = !1, r = new Ddn(r);
  e: while (++i < h) {
    var l = e[i],
      d = n == null ? l : n(l);
    if (l = s || l !== 0 ? l : 0, m && d === d) {
      var p = E;
      while (p--) if (r[p] === d) continue e;
      _.push(l);
    } else if (!f(r, d, s)) _.push(l);
  }
  return _;
}
var x = H;
var z = Ban(function (e, r) {
    var n = dM(r);
    if (_zn(n)) n = void 0;
    return _zn(e) ? x(e, $an(r, 1, _zn, !0), AT(n, 2)) : [];
  }),
  C = z;
var K = 32768,
  N = 512;
function O(e, r, n) {
  if (n?.onInternalMetadataChanged === void 0) return;
  if (e.alwaysAllowRules.session === r.alwaysAllowRules.session && e.alwaysDenyRules.session === r.alwaysDenyRules.session && e.alwaysAskRules.session === r.alwaysAskRules.session) return;
  let {
      record: record,
      whole: whole
    } = I(r),
    f = ln(record, I(e).record);
  if (n.keepsSessionRules !== !0) {
    if (n.keepsSessionRules === !1 && !f) c("ccr_kept_session_rules", "write_held_record_not_restored");
    return;
  }
  if (!whole) c("ccr_kept_session_rules", "lists_not_written_whole");
  if (!f) n.notifyInternalMetadataChanged(record);
}
function B(e) {
  let r = M(e.session_deny_rules),
    n = M(e.session_ask_rules),
    s = P(e.session_allow_rules, r.whole && n.whole);
  if (!s.whole) c("ccr_kept_session_rules", "lists_not_restored_whole");
  let session = Ip() ? [] : Nzi(s.rules);
  if (session.length + r.rules.length + n.rules.length === 0) return f => f;
  if (r.rules.length + n.rules.length > 0) g("ccr_kept_session_rules", {
    count: r.rules.length + n.rules.length
  });
  return f => ({
    ...f,
    sessionRulesFromRecord: {
      deny: C(r.rules, f.alwaysDenyRules.session ?? [], itn),
      ask: C(n.rules, f.alwaysAskRules.session ?? [], itn)
    },
    ...(session.length > 0 && {
      alwaysAllowRules: {
        ...f.alwaysAllowRules,
        session: session
      }
    }),
    ...(r.rules.length > 0 && {
      alwaysDenyRules: {
        ...f.alwaysDenyRules,
        session: A([...r.rules, ...(f.alwaysDenyRules.session ?? [])])
      }
    }),
    ...(n.rules.length > 0 && {
      alwaysAskRules: {
        ...f.alwaysAskRules,
        session: A([...n.rules, ...(f.alwaysAskRules.session ?? [])])
      }
    })
  });
}
function H8s(e, r, n) {
  let s = new Set(n.alwaysAllowRules.session),
    i = new Set(n.alwaysDenyRules.session),
    f = new Set(n.alwaysAskRules.session);
  e.keepsSessionRules = r !== null && r.readFailed !== !0 && M(r.internal?.session_deny_rules).rules.every(item => i.has(item)) && M(r.internal?.session_ask_rules).rules.every(item => f.has(item)) && (Ip() || P(r.internal?.session_allow_rules, !1).rules.every(item => s.has(item)));
}
function w(e) {
  if (typeof e !== "string" || e.length > N || /[\p{C}\p{Zl}\p{Zp}`]/u.test(e) || er() && pM.test(e)) return !1;
  let r = mN(e);
  return /^[\w.*-]+$/.test(r.kind === "call" ? r.toolName : e);
}
function A(e) {
  return q3t(e.toReversed()).reverse();
}
function b(e) {
  let r = 1;
  return KZn(e, n => (r += Buffer.byteLength(oi(n)) + 1, r <= K));
}
function M(e) {
  let r = Array.isArray(e) ? e : [],
    n = A(r.filter(w)),
    rules = b(n);
  return {
    rules: rules,
    whole: (Array.isArray(e) || e === void 0 || e === null) && r.every(w) && rules.length === n.length
  };
}
function P(e, r) {
  let rules_2 = q3t((Array.isArray(e) ? e : []).filter(item => typeof item === "string" && !item.startsWith("mcp__")));
  if (r && b(rules_2).length === rules_2.length) return {
    rules: rules_2,
    whole: !0
  };
  let s = rules_2.filter(item => pM.test(item));
  return {
    rules: b(s),
    whole: !1
  };
}
function I(e) {
  let r = M(e.alwaysDenyRules.session),
    n = M(e.alwaysAskRules.session),
    {
      rules: rules_3,
      whole: whole_2
    } = P(e.alwaysAllowRules.session, r.whole && n.whole);
  return {
    record: {
      session_allow_rules: rules_3.length > 0 ? rules_3 : null,
      session_deny_rules: r.rules.length > 0 ? r.rules : null,
      session_ask_rules: n.rules.length > 0 ? n.rules : null
    },
    whole: whole_2
  };
}
function UWr(e, r) {
  let n = Object.keys(e),
    s = Object.keys(r);
  if (n.length !== s.length) return !1;
  for (let i = 0; i < s.length; i++) {
    let f = s[i];
    if (f === void 0 || f !== n[i]) return !1;
    let m = e[f],
      h = r[f];
    if (m === h) continue;
    if (m === void 0 || h === void 0) return !1;
    for (let _ of Object.keys(h)) if (_ !== "progress" && (!Object.hasOwn(m, _) || m[_] !== h[_])) return !1;
    for (let _ of Object.keys(m)) if (_ !== "progress" && !Object.hasOwn(h, _)) return !1;
  }
  return !0;
}
function D() {
  if (q() || !Us()) return;
  let e = null,
    r = [];
  qI(), H6r(), e?.resetProviderBoundCachesIfMoved(r);
}
var Y = u({
  status_category: o(),
  status_detail: o(),
  needs_action: o(),
  recent_action: o().optional(),
  description: o().optional(),
  reply: o().optional(),
  standing: o().optional()
});
function Z(e) {
  return r => {
    let toolPermissionContext = r.toolPermissionContext;
    if (typeof e.permission_mode === "string") {
      let mode = mM(e.permission_mode);
      if (n_t(mode), mode === "bypassPermissions" && (EA() || !toolPermissionContext.isBypassPermissionsModeAvailable)) t("[externalMetadataToAppState] Refusing restored mode 'bypassPermissions' (disabled by settings/policy or session not launched with --dangerously-skip-permissions); falling back to 'default'", {
        level: "warn"
      }), mode = "default";
      try {
        if (toolPermissionContext = {
          ...c$(toolPermissionContext.mode, mode, toolPermissionContext),
          mode: mode
        }, mode === "auto") toolPermissionContext = T8(toolPermissionContext);
      } catch (error) {
        t(`[externalMetadataToAppState] transitionPermissionMode rejected restored mode '${mode}': ${F(error).message}`);
      }
    }
    let s = Y.safeParse(e.post_turn_summary);
    return {
      ...r,
      toolPermissionContext: toolPermissionContext,
      ...(typeof e.is_ultraplan_mode === "boolean" && {
        isUltraplanMode: e.is_ultraplan_mode
      }),
      ...(s.success && {
        postTurnSummary: s.data
      })
    };
  };
}
function V(e) {
  let r = B(e);
  return n => {
    let toolPermissionContext_2 = r(n.toolPermissionContext);
    return toolPermissionContext_2 === n.toolPermissionContext ? n : {
      ...n,
      toolPermissionContext: toolPermissionContext_2
    };
  };
}
function $8s(e) {
  let r = V(e.internal ?? {});
  return n => Z(e.external ?? {})(r(n));
}
function d5n({
  newState: newState,
  oldState: oldState
}, n, s, i, f) {
  let m = oldState.toolPermissionContext.mode,
    h = newState.toolPermissionContext.mode,
    _ = newState.proactivityLevel !== oldState.proactivityLevel;
  if (m !== h) {
    let l = Md(m),
      d = Md(h);
    if (l !== d) {
      let p = zQi({
          rule: "first-entry",
          prevMode: m,
          newMode: h,
          prevUltraplan: oldState.isUltraplanMode,
          newUltraplan: newState.isUltraplanMode
        }),
        is_ultraplan_mode = p.is_ultraplan_mode;
      if (s?.notifyMetadataChanged(p), s?.isWorkerPermissionModeRecordEnabled) s.notifyInternalMetadataChanged({
        worker_permission_mode: d,
        plan_doc: null
      });
      if (t7e(h, is_ultraplan_mode), !s) Wvt({
        status: null,
        permissionMode: d
      });
    }
    s?.notifyPermissionModeChanged(h), rLt(h);
  } else if (_) s?.notifyProactivityLevelChanged();
  let id = newState.toolPermissionContext.planDoc?.id;
  if (id !== oldState.toolPermissionContext.planDoc?.id && s?.isWorkerPermissionModeRecordEnabled) s.notifyInternalMetadataChanged(id === void 0 ? {
    plan_doc: null
  } : {
    plan_doc: {
      id: id
    },
    worker_permission_mode: Md(h)
  });
  if (m !== h || _) {
    if (lL("--permission-mode", ["--inherit-permission-mode"], Nre(h, newState.proactivityLevel, mF(newState.toolPermissionContext)), void 0, i), _) lL("--proactivity", [], newState.proactivityLevel, void 0, i);
  }
  if (newState.toolPermissionContext !== oldState.toolPermissionContext) z1i();
  if (newState.toolPermissionContext.isBypassPermissionsModeAvailable !== oldState.toolPermissionContext.isBypassPermissionsModeAvailable && _po()?.permissionMode) hLn({
    bypassPermissionsAvailable: newState.toolPermissionContext.isBypassPermissionsModeAvailable
  });
  if (newState.toolPermissionContext.additionalWorkingDirectories !== oldState.toolPermissionContext.additionalWorkingDirectories && Lkr(newState.toolPermissionContext)) try {
    import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule().notifyMcpRootsListChanged();
  } catch (error) {
    t(`Failed to notify MCP servers of roots change: ${F(error).message}`);
  }
  if (newState.tasks !== oldState.tasks) {
    let l = UWr(oldState.tasks, newState.tasks);
    if (s) {
      let d = {};
      if (!l) {
        let k = BWr(newState);
        if (!W(BWr(oldState), k)) d.running_background_tasks = k;
        if (Rhe()) {
          let T = S(newState);
          if (!W(S(oldState), T)) d.running_foreground_agents = T;
        }
      }
      let resumableOrphanedAgents = s.resumableOrphanedAgents,
        y = resumableOrphanedAgents.filter(item => !Object.hasOwn(newState.tasks, item.task_id));
      if (y.length !== resumableOrphanedAgents.length) s.resumableOrphanedAgents = y, d.resumable_orphaned_agents = y;
      if (Object.keys(d).length > 0) s.notifyInternalMetadataChanged(d);
    }
    if (!l) {
      let d = R(oldState),
        tasks = R(newState);
      if (d.length !== tasks.length || tasks.some((item, index) => item.task_id !== d[index]?.task_id || item.description !== d[index]?.description || item.parent_task_id !== d[index]?.parent_task_id || item.ambient !== d[index]?.ambient || item.awaited !== d[index]?.awaited)) Ti({
        type: "system",
        subtype: "background_tasks_changed",
        tasks: tasks
      });
    }
  }
  if (O(oldState.toolPermissionContext, newState.toolPermissionContext, s), newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession || newState.toolPermissionContext.mode !== oldState.toolPermissionContext.mode) {
    let l = lwi(n);
    try {
      let fromModel = WT(oldState),
        toModel = WT(newState);
      if (fromModel !== toModel) {
        if (pWe(["seven_day_overage_included"]), newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession) Uhi(n.host, fromModel, toModel);
        if (!xn()) Ens(n, {
          fromModel: fromModel,
          toModel: toModel,
          requestedModel: l.requestedModel,
          source: l.source
        });
        if (d2i(toModel), le()) {
          let {
            noteMainModelSwitch: noteMainModelSwitch
          } = import.meta.require("B:/~BUN/root/chunk-2w0pyfww.js");
          noteMainModelSwitch(n, toModel, l.source);
        }
      }
    } catch (error) {
      a(F(error));
    }
  }
  if (newState.mainLoopModel !== oldState.mainLoopModel) {
    let mainLoopModel = newState.mainLoopModel,
      d = mvr(() => eh(mainLoopModel)),
      p = at();
    try {
      hCe(p);
    } catch (error) {
      a(F(error));
    }
    tde(p, newState), iat(), kfr(n.precompute), hvr(i, f, d), s?.notifyMetadataChanged({
      model: mainLoopModel ?? Ud()
    }), lL("--model", ["-m"], mainLoopModel, void 0, i);
  }
  if (newState.fotwClaim?.phase === "granted" && oldState.fotwClaim?.phase !== "granted") iat();
  if (!Pse(newState.sessionEffort, oldState.sessionEffort) || newState.settingsEffortTable !== oldState.settingsEffortTable) sKn({
    sessionEffort: newState.sessionEffort,
    settingsEffortTable: newState.settingsEffortTable
  });
  if (newState.settingsEffortTable !== oldState.settingsEffortTable && Pse(newState.sessionEffort, oldState.sessionEffort)) tde(at(), newState);
  if (!Pse(newState.sessionEffort, oldState.sessionEffort)) {
    iRr(), R$e().clear();
    let l = s?.ultracodeActivePatch(wg(newState.ultracode, at()));
    s?.notifyMetadataChanged({
      effort_level: aTs(newState.sessionEffort),
      ...l
    }), tde(at(), newState), j(newState.sessionEffort, i);
  }
  if (newState.fastMode !== oldState.fastMode) ee(newState.fastMode === !0, i);
  if (newState.mainLoopModelForSession !== oldState.mainLoopModelForSession) {
    let l = at();
    try {
      hCe(l);
    } catch (error) {
      a(F(error));
    }
    if (tde(l, newState), Ygt() && (newState.mainLoopModelForSession === null || newState.mainLoopModelForSession === void 0) && oldState.mainLoopModelForSession !== null && oldState.mainLoopModelForSession !== void 0 && newState.mainLoopModel === oldState.mainLoopModel) eh(newState.mainLoopModel), s?.notifyMetadataChanged({
      model: newState.mainLoopModel ?? Ud()
    });
  }
  if (newState.advisorModel !== oldState.advisorModel) lL("--advisor", [], newState.advisorModel ?? null, void 0, i);
  if (s && newState.frameUrls !== oldState.frameUrls) {
    let l = xLe(),
      d = er() ? Amo() : yCe(),
      p = ccr(newState.frameUrls).map(([, y]) => y).filter(item => item.mcpPublishedHere === !0 ? d : l);
    if (p.length > 0 || l && QK(oldState.frameUrls).length > 0) s.notifyMetadataChanged({
      artifacts: p.length === 0 ? null : p.map(ucr)
    });
  }
  if (s && !J(newState.activeGoal, oldState.activeGoal)) {
    let activeGoal = newState.activeGoal;
    if (s.notifyActiveGoalChanged(activeGoal), activeGoal) {
      let {
        tokens_at_start: tokens_at_start,
        ...p
      } = gHo(activeGoal);
      s.notifyMetadataChanged({
        goal: {
          ...p,
          last_reason: p.last_reason ?? null,
          met: !1
        }
      });
    } else s.notifyMetadataChanged({
      goal: null
    });
  }
  if (s && (newState.autoCompactWindow !== oldState.autoCompactWindow || newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession || newState.settings !== oldState.settings)) s.notifyAutocompactInputsChanged();
  if (newState.verbose !== oldState.verbose) IX("verbose", newState.verbose, i);
  if (newState.settings !== oldState.settings) {
    try {
      if (_yt(), Vbe(), b$t(), asn(), newState.settings.env !== oldState.settings.env) D();
    } catch (error) {
      t(`Failed to apply settings change (clear auth caches / re-apply env): ${F(error).message}`, {
        level: "error"
      });
    }
    if (newState.settings.outputStyle !== oldState.settings.outputStyle) HN("output_style");
  }
  if (newState.ultracode !== oldState.ultracode || newState.mainLoopModel !== oldState.mainLoopModel || newState.mainLoopModelForSession !== oldState.mainLoopModelForSession || newState.settings !== oldState.settings) {
    let ultracodeActive = wg(newState.ultracode, at());
    if (oldState.ultracode === !0 && newState.ultracode !== !0 && newState.sessionEffort.kind === "level" && Pse(newState.sessionEffort, oldState.sessionEffort)) s?.notifyMetadataChanged({
      effort_level: aTs(newState.sessionEffort),
      ...s.ultracodeActivePatch(ultracodeActive)
    }), j(newState.sessionEffort, i);else s?.notifyUltracodeActive(ultracodeActive);
    jAt({
      ultracodeActive: ultracodeActive
    });
  }
}
function j(e, r) {
  switch (e.kind) {
    case "inherit":
    case "default":
      lL("--effort", [], null, void 0, r);
      return;
    case "level":
      {
        let n = G_e(e);
        if (n !== void 0 && Dv(n)) lL("--effort", [], n, void 0, r);
        return;
      }
  }
}
function X(e, r) {
  if (e.type !== "local_bash" && e.type !== "monitor_mcp" && e.type !== "monitor_ws") return !1;
  let n = e.agentId !== void 0 ? r[e.agentId] : void 0;
  return n !== void 0 && nm(n);
}
function U(e) {
  return {
    agent_type: e.agentType,
    ...(e.selectedAgent && {
      is_built_in: e.selectedAgent.source === "built-in"
    }),
    forked_skill: e.forkedSkillName !== void 0,
    main_thread_spawned: e.spawnDepth === 1 && e.parentAgentId === void 0,
    default_launch: e.cwd === void 0 && e.launchedWithDefaults === !0,
    ...(e.cwd === void 0 && e.launchModel !== void 0 && {
      launch_model: e.launchModel
    }),
    ...(e.requestShape && {
      request_shape: e.requestShape
    })
  };
}
function BWr(e) {
  return Object.values(e.tasks).filter(item => u_(item) && !nm(item) && (item.type === "local_bash" || item.type === "monitor_mcp" || item.type === "monitor_ws" || item.type === "local_agent" || item.type === "local_workflow")).map(item => ({
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
      ...U(item),
      run_id: SU(item.id)
    }),
    ...(X(item, e.tasks) && {
      observer_owned: !0
    })
  }));
}
function W(e, r) {
  return e.length === r.length && r.every((item, index) => item.task_id === e[index]?.task_id);
}
function S({
  tasks: tasks_2
}) {
  return Object.values(tasks_2).flatMap(item => item.type === "local_agent" && item.status === "running" && item.isBackgrounded === !1 && item.directCall === !0 && item.toolUseId !== void 0 && item.spawnDepth === 1 && item.parentAgentId === void 0 ? [{
    task_id: item.id,
    task_type: item.type,
    description: item.description,
    tool_use_id: item.toolUseId,
    ...U(item)
  }] : []);
}
var Q = ["condition", "setAt", "iterations", "tokensAtStart", "lastReason"];
function gHo(e) {
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
function J(e, r) {
  if (e === r) return !0;
  if (e === void 0 || r === void 0) return !1;
  return Q.every(item => e[item] === r[item]);
}
function R(e) {
  return Object.values(e.tasks).filter(item => !(le() && pZ(item)) && u_(item) && !nm(item) && !AIt(item) && item.type !== "post_turn_memory").map(item => ({
    task_id: item.id,
    run_id: SU(item.id),
    task_type: item.type,
    subagent_type: SXt(item),
    description: item.description,
    parent_task_id: oio(item, e.tasks),
    ...(_2(item) && {
      ambient: !0
    }),
    ...(sio(item) && {
      awaited: !0
    })
  }));
}
function ee(e, r) {
  if (!e && (!b_(at()) || jL(at()) !== null || w6i())) return;
  btr(e, r);
}
function zvt(e) {
  Ti({
    type: "system",
    subtype: "background_tasks_changed",
    tasks: R(e)
  });
}
function U8s(e, r, n) {
  e.settleUltracodeActive(wg(r, at()), n);
}
export { hHo, zmn, Wvt, F8s, H8s, UWr, $8s, d5n, BWr, gHo, zvt, U8s };