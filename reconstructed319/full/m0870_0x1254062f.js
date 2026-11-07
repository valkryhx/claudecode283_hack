// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  eh,
  sKn,
  q,
  er,
  xn,
  HN,
  R$e,
  Du
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  t,
  oi
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  ln,
  _zn,
  Ban,
  pM,
  Md,
  zQi,
  mM
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  UAo,
  BAo
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  mN
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  iRr,
  d2i,
  wg,
  Dv,
  aTs,
  Pse,
  G_e
} from "B:/~BUN/root/chunk-6j3fjnhn.js";
import {
  n_t
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  SU,
  Ti,
  Ygt,
  jL,
  b_,
  w6i,
  at,
  Ud,
  _yt,
  Vbe,
  b$t,
  asn,
  Us
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Lkr,
  hLn,
  _po,
  rLt
} from "B:/~BUN/root/chunk-yhafkw66.js";
import {
  IX
} from "B:/~BUN/root/chunk-sgy380eg.js";
import {
  mvr,
  hvr,
  SLe,
  mSs
} from "B:/~BUN/root/chunk-jmka9ye7.js";
import {
  Uhi,
  q3t,
  QK,
  ccr,
  ucr,
  Nre,
  mF,
  WT,
  lwi,
  Ens,
  kfr,
  iZ,
  toe,
  HEe
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  itn
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Ip
} from "B:/~BUN/root/chunk-tdekz3md.js";
import {
  Nzi
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  qI
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  z1i
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  pWe
} from "B:/~BUN/root/chunk-pmr34yc8.js";
import {
  pZ,
  nm,
  oio,
  u_,
  sio,
  AIt,
  _2,
  SXt
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  t7e,
  hCe
} from "B:/~BUN/root/chunk-x4zqd4cy.js";
import {
  yCe,
  Amo,
  xLe
} from "B:/~BUN/root/chunk-0xtfwyhv.js";
import {
  lL
} from "B:/~BUN/root/chunk-4vcs773m.js";
import {
  iat
} from "B:/~BUN/root/chunk-dqprk713.js";
import {
  T8,
  c$
} from "B:/~BUN/root/chunk-x12sgt91.js";
import {
  H6r
} from "B:/~BUN/root/chunk-t85n63bg.js";
import {
  Rhe
} from "B:/~BUN/root/chunk-5pkj74mh.js";
import {
  KZn
} from "B:/~BUN/root/chunk-kc9g8de3.js";
import {
  btr
} from "B:/~BUN/root/chunk-dry50drj.js";
import {
  jAt,
  tde
} from "B:/~BUN/root/chunk-ty3rgkxp.js";
import {
  EA
} from "B:/~BUN/root/chunk-eyvtcj15.js";
import {
  dM,
  $an
} from "B:/~BUN/root/chunk-h7w5pt14.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  Ddn,
  Ldn,
  AT
} from "B:/~BUN/root/chunk-mzfrv3wm.js";
import {
  qHe
} from "B:/~BUN/root/chunk-3cca501e.js";
import {
  l7
} from "B:/~BUN/root/chunk-99vcrndq.js";

function hHo(e) {
  return e !== "requesting" && SLe()
}

function L() {
  return !toe() && !iZ()
}

function zmn(e) {
  if (e.type === "system" && "subtype" in e && e.subtype === "status" && "compact_error" in e && e.compact_error !== void 0 && !L()) return {
    ...e,
    compact_error: void 0
  };
  return e
}

function Wvt({
  status: e,
  permissionMode: r,
  compactResult: n,
  compactError: s
}) {
  try {
    if (!hHo(e)) return;
    Ti({
      type: "system",
      subtype: "status",
      status: e,
      ...r !== void 0 && {
        permissionMode: r
      },
      ...n !== void 0 && {
        compact_result: n
      },
      ...s !== void 0 && L() && {
        compact_error: s
      }
    })
  } catch (i) {
    a(i)
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
      ...e.ttftMs !== void 0 && {
        ttft_ms: e.ttftMs
      }
    })
  } catch (r) {
    a(r)
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
  if (s) f = BAo, m = !1;
  else if (r.length >= G) f = Ldn, m = !1, r = new Ddn(r);
  e: while (++i < h) {
    var l = e[i],
      d = n == null ? l : n(l);
    if (l = s || l !== 0 ? l : 0, m && d === d) {
      var p = E;
      while (p--)
        if (r[p] === d) continue e;
      _.push(l)
    } else if (!f(r, d, s)) _.push(l)
  }
  return _
}
var x = H;
var z = Ban(function(e, r) {
    var n = dM(r);
    if (_zn(n)) n = void 0;
    return _zn(e) ? x(e, $an(r, 1, _zn, !0), AT(n, 2)) : []
  }),
  C = z;
var K = 32768,
  N = 512;

function O(e, r, n) {
  if (n?.onInternalMetadataChanged === void 0) return;
  if (e.alwaysAllowRules.session === r.alwaysAllowRules.session && e.alwaysDenyRules.session === r.alwaysDenyRules.session && e.alwaysAskRules.session === r.alwaysAskRules.session) return;
  let {
    record: s,
    whole: i
  } = I(r), f = ln(s, I(e).record);
  if (n.keepsSessionRules !== !0) {
    if (n.keepsSessionRules === !1 && !f) c("ccr_kept_session_rules", "write_held_record_not_restored");
    return
  }
  if (!i) c("ccr_kept_session_rules", "lists_not_written_whole");
  if (!f) n.notifyInternalMetadataChanged(s)
}

function B(e) {
  let r = M(e.session_deny_rules),
    n = M(e.session_ask_rules),
    s = P(e.session_allow_rules, r.whole && n.whole);
  if (!s.whole) c("ccr_kept_session_rules", "lists_not_restored_whole");
  let i = Ip() ? [] : Nzi(s.rules);
  if (i.length + r.rules.length + n.rules.length === 0) return (f) => f;
  if (r.rules.length + n.rules.length > 0) g("ccr_kept_session_rules", {
    count: r.rules.length + n.rules.length
  });
  return (f) => ({
    ...f,
    sessionRulesFromRecord: {
      deny: C(r.rules, f.alwaysDenyRules.session ?? [], itn),
      ask: C(n.rules, f.alwaysAskRules.session ?? [], itn)
    },
    ...i.length > 0 && {
      alwaysAllowRules: {
        ...f.alwaysAllowRules,
        session: i
      }
    },
    ...r.rules.length > 0 && {
      alwaysDenyRules: {
        ...f.alwaysDenyRules,
        session: A([...r.rules, ...f.alwaysDenyRules.session ?? []])
      }
    },
    ...n.rules.length > 0 && {
      alwaysAskRules: {
        ...f.alwaysAskRules,
        session: A([...n.rules, ...f.alwaysAskRules.session ?? []])
      }
    }
  })
}

function H8s(e, r, n) {
  let s = new Set(n.alwaysAllowRules.session),
    i = new Set(n.alwaysDenyRules.session),
    f = new Set(n.alwaysAskRules.session);
  e.keepsSessionRules = r !== null && r.readFailed !== !0 && M(r.internal?.session_deny_rules).rules.every((m) => i.has(m)) && M(r.internal?.session_ask_rules).rules.every((m) => f.has(m)) && (Ip() || P(r.internal?.session_allow_rules, !1).rules.every((m) => s.has(m)))
}

function w(e) {
  if (typeof e !== "string" || e.length > N || /[\p{C}\p{Zl}\p{Zp}`]/u.test(e) || er() && pM.test(e)) return !1;
  let r = mN(e);
  return /^[\w.*-]+$/.test(r.kind === "call" ? r.toolName : e)
}

function A(e) {
  return q3t(e.toReversed()).reverse()
}

function b(e) {
  let r = 1;
  return KZn(e, (n) => (r += Buffer.byteLength(oi(n)) + 1, r <= K))
}

function M(e) {
  let r = Array.isArray(e) ? e : [],
    n = A(r.filter(w)),
    s = b(n);
  return {
    rules: s,
    whole: (Array.isArray(e) || e === void 0 || e === null) && r.every(w) && s.length === n.length
  }
}

function P(e, r) {
  let n = q3t((Array.isArray(e) ? e : []).filter((i) => typeof i === "string" && !i.startsWith("mcp__")));
  if (r && b(n).length === n.length) return {
    rules: n,
    whole: !0
  };
  let s = n.filter((i) => pM.test(i));
  return {
    rules: b(s),
    whole: !1
  }
}

function I(e) {
  let r = M(e.alwaysDenyRules.session),
    n = M(e.alwaysAskRules.session),
    {
      rules: s,
      whole: i
    } = P(e.alwaysAllowRules.session, r.whole && n.whole);
  return {
    record: {
      session_allow_rules: s.length > 0 ? s : null,
      session_deny_rules: r.rules.length > 0 ? r.rules : null,
      session_ask_rules: n.rules.length > 0 ? n.rules : null
    },
    whole: i
  }
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
    for (let _ of Object.keys(h))
      if (_ !== "progress" && (!Object.hasOwn(m, _) || m[_] !== h[_])) return !1;
    for (let _ of Object.keys(m))
      if (_ !== "progress" && !Object.hasOwn(h, _)) return !1
  }
  return !0
}

function D() {
  if (q() || !Us()) return;
  let e = null,
    r = [];
  qI(), H6r(), e?.resetProviderBoundCachesIfMoved(r)
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
  return (r) => {
    let n = r.toolPermissionContext;
    if (typeof e.permission_mode === "string") {
      let i = mM(e.permission_mode);
      if (n_t(i), i === "bypassPermissions" && (EA() || !n.isBypassPermissionsModeAvailable)) t("[externalMetadataToAppState] Refusing restored mode 'bypassPermissions' (disabled by settings/policy or session not launched with --dangerously-skip-permissions); falling back to 'default'", {
        level: "warn"
      }), i = "default";
      try {
        if (n = {
            ...c$(n.mode, i, n),
            mode: i
          }, i === "auto") n = T8(n)
      } catch (f) {
        t(`[externalMetadataToAppState] transitionPermissionMode rejected restored mode '${i}': ${F(f).message}`)
      }
    }
    let s = Y.safeParse(e.post_turn_summary);
    return {
      ...r,
      toolPermissionContext: n,
      ...typeof e.is_ultraplan_mode === "boolean" && {
        isUltraplanMode: e.is_ultraplan_mode
      },
      ...s.success && {
        postTurnSummary: s.data
      }
    }
  }
}

function V(e) {
  let r = B(e);
  return (n) => {
    let s = r(n.toolPermissionContext);
    return s === n.toolPermissionContext ? n : {
      ...n,
      toolPermissionContext: s
    }
  }
}

function $8s(e) {
  let r = V(e.internal ?? {});
  return (n) => Z(e.external ?? {})(r(n))
}

function d5n({
  newState: e,
  oldState: r
}, n, s, i, f) {
  let m = r.toolPermissionContext.mode,
    h = e.toolPermissionContext.mode,
    _ = e.proactivityLevel !== r.proactivityLevel;
  if (m !== h) {
    let l = Md(m),
      d = Md(h);
    if (l !== d) {
      let p = zQi({
          rule: "first-entry",
          prevMode: m,
          newMode: h,
          prevUltraplan: r.isUltraplanMode,
          newUltraplan: e.isUltraplanMode
        }),
        y = p.is_ultraplan_mode;
      if (s?.notifyMetadataChanged(p), s?.isWorkerPermissionModeRecordEnabled) s.notifyInternalMetadataChanged({
        worker_permission_mode: d,
        plan_doc: null
      });
      if (t7e(h, y), !s) Wvt({
        status: null,
        permissionMode: d
      })
    }
    s?.notifyPermissionModeChanged(h), rLt(h)
  } else if (_) s?.notifyProactivityLevelChanged();
  let E = e.toolPermissionContext.planDoc?.id;
  if (E !== r.toolPermissionContext.planDoc?.id && s?.isWorkerPermissionModeRecordEnabled) s.notifyInternalMetadataChanged(E === void 0 ? {
    plan_doc: null
  } : {
    plan_doc: {
      id: E
    },
    worker_permission_mode: Md(h)
  });
  if (m !== h || _) {
    if (lL("--permission-mode", ["--inherit-permission-mode"], Nre(h, e.proactivityLevel, mF(e.toolPermissionContext)), void 0, i), _) lL("--proactivity", [], e.proactivityLevel, void 0, i)
  }
  if (e.toolPermissionContext !== r.toolPermissionContext) z1i();
  if (e.toolPermissionContext.isBypassPermissionsModeAvailable !== r.toolPermissionContext.isBypassPermissionsModeAvailable && _po()?.permissionMode) hLn({
    bypassPermissionsAvailable: e.toolPermissionContext.isBypassPermissionsModeAvailable
  });
  if (e.toolPermissionContext.additionalWorkingDirectories !== r.toolPermissionContext.additionalWorkingDirectories && Lkr(e.toolPermissionContext)) try {
    import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule().notifyMcpRootsListChanged()
  } catch (l) {
    t(`Failed to notify MCP servers of roots change: ${F(l).message}`)
  }
  if (e.tasks !== r.tasks) {
    let l = UWr(r.tasks, e.tasks);
    if (s) {
      let d = {};
      if (!l) {
        let k = BWr(e);
        if (!W(BWr(r), k)) d.running_background_tasks = k;
        if (Rhe()) {
          let T = S(e);
          if (!W(S(r), T)) d.running_foreground_agents = T
        }
      }
      let p = s.resumableOrphanedAgents,
        y = p.filter((k) => !Object.hasOwn(e.tasks, k.task_id));
      if (y.length !== p.length) s.resumableOrphanedAgents = y, d.resumable_orphaned_agents = y;
      if (Object.keys(d).length > 0) s.notifyInternalMetadataChanged(d)
    }
    if (!l) {
      let d = R(r),
        p = R(e);
      if (d.length !== p.length || p.some((y, k) => y.task_id !== d[k]?.task_id || y.description !== d[k]?.description || y.parent_task_id !== d[k]?.parent_task_id || y.ambient !== d[k]?.ambient || y.awaited !== d[k]?.awaited)) Ti({
        type: "system",
        subtype: "background_tasks_changed",
        tasks: p
      })
    }
  }
  if (O(r.toolPermissionContext, e.toolPermissionContext, s), e.mainLoopModel !== r.mainLoopModel || e.mainLoopModelForSession !== r.mainLoopModelForSession || e.toolPermissionContext.mode !== r.toolPermissionContext.mode) {
    let l = lwi(n);
    try {
      let d = WT(r),
        p = WT(e);
      if (d !== p) {
        if (pWe(["seven_day_overage_included"]), e.mainLoopModel !== r.mainLoopModel || e.mainLoopModelForSession !== r.mainLoopModelForSession) Uhi(n.host, d, p);
        if (!xn()) Ens(n, {
          fromModel: d,
          toModel: p,
          requestedModel: l.requestedModel,
          source: l.source
        });
        if (d2i(p), le()) {
          let {
            noteMainModelSwitch: y
          } = import.meta.require("B:/~BUN/root/chunk-2w0pyfww.js");
          y(n, p, l.source)
        }
      }
    } catch (d) {
      a(F(d))
    }
  }
  if (e.mainLoopModel !== r.mainLoopModel) {
    let l = e.mainLoopModel,
      d = mvr(() => eh(l)),
      p = at();
    try {
      hCe(p)
    } catch (y) {
      a(F(y))
    }
    tde(p, e), iat(), kfr(n.precompute), hvr(i, f, d), s?.notifyMetadataChanged({
      model: l ?? Ud()
    }), lL("--model", ["-m"], l, void 0, i)
  }
  if (e.fotwClaim?.phase === "granted" && r.fotwClaim?.phase !== "granted") iat();
  if (!Pse(e.sessionEffort, r.sessionEffort) || e.settingsEffortTable !== r.settingsEffortTable) sKn({
    sessionEffort: e.sessionEffort,
    settingsEffortTable: e.settingsEffortTable
  });
  if (e.settingsEffortTable !== r.settingsEffortTable && Pse(e.sessionEffort, r.sessionEffort)) tde(at(), e);
  if (!Pse(e.sessionEffort, r.sessionEffort)) {
    iRr(), R$e().clear();
    let l = s?.ultracodeActivePatch(wg(e.ultracode, at()));
    s?.notifyMetadataChanged({
      effort_level: aTs(e.sessionEffort),
      ...l
    }), tde(at(), e), j(e.sessionEffort, i)
  }
  if (e.fastMode !== r.fastMode) ee(e.fastMode === !0, i);
  if (e.mainLoopModelForSession !== r.mainLoopModelForSession) {
    let l = at();
    try {
      hCe(l)
    } catch (d) {
      a(F(d))
    }
    if (tde(l, e), Ygt() && (e.mainLoopModelForSession === null || e.mainLoopModelForSession === void 0) && r.mainLoopModelForSession !== null && r.mainLoopModelForSession !== void 0 && e.mainLoopModel === r.mainLoopModel) eh(e.mainLoopModel), s?.notifyMetadataChanged({
      model: e.mainLoopModel ?? Ud()
    })
  }
  if (e.advisorModel !== r.advisorModel) lL("--advisor", [], e.advisorModel ?? null, void 0, i);
  if (s && e.frameUrls !== r.frameUrls) {
    let l = xLe(),
      d = er() ? Amo() : yCe(),
      p = ccr(e.frameUrls).map(([, y]) => y).filter((y) => y.mcpPublishedHere === !0 ? d : l);
    if (p.length > 0 || l && QK(r.frameUrls).length > 0) s.notifyMetadataChanged({
      artifacts: p.length === 0 ? null : p.map(ucr)
    })
  }
  if (s && !J(e.activeGoal, r.activeGoal)) {
    let l = e.activeGoal;
    if (s.notifyActiveGoalChanged(l), l) {
      let {
        tokens_at_start: d,
        ...p
      } = gHo(l);
      s.notifyMetadataChanged({
        goal: {
          ...p,
          last_reason: p.last_reason ?? null,
          met: !1
        }
      })
    } else s.notifyMetadataChanged({
      goal: null
    })
  }
  if (s && (e.autoCompactWindow !== r.autoCompactWindow || e.mainLoopModel !== r.mainLoopModel || e.mainLoopModelForSession !== r.mainLoopModelForSession || e.settings !== r.settings)) s.notifyAutocompactInputsChanged();
  if (e.verbose !== r.verbose) IX("verbose", e.verbose, i);
  if (e.settings !== r.settings) {
    try {
      if (_yt(), Vbe(), b$t(), asn(), e.settings.env !== r.settings.env) D()
    } catch (l) {
      t(`Failed to apply settings change (clear auth caches / re-apply env): ${F(l).message}`, {
        level: "error"
      })
    }
    if (e.settings.outputStyle !== r.settings.outputStyle) HN("output_style")
  }
  if (e.ultracode !== r.ultracode || e.mainLoopModel !== r.mainLoopModel || e.mainLoopModelForSession !== r.mainLoopModelForSession || e.settings !== r.settings) {
    let l = wg(e.ultracode, at());
    if (r.ultracode === !0 && e.ultracode !== !0 && e.sessionEffort.kind === "level" && Pse(e.sessionEffort, r.sessionEffort)) s?.notifyMetadataChanged({
      effort_level: aTs(e.sessionEffort),
      ...s.ultracodeActivePatch(l)
    }), j(e.sessionEffort, i);
    else s?.notifyUltracodeActive(l);
    jAt({
      ultracodeActive: l
    })
  }
}

function j(e, r) {
  switch (e.kind) {
    case "inherit":
    case "default":
      lL("--effort", [], null, void 0, r);
      return;
    case "level": {
      let n = G_e(e);
      if (n !== void 0 && Dv(n)) lL("--effort", [], n, void 0, r);
      return
    }
  }
}

function X(e, r) {
  if (e.type !== "local_bash" && e.type !== "monitor_mcp" && e.type !== "monitor_ws") return !1;
  let n = e.agentId !== void 0 ? r[e.agentId] : void 0;
  return n !== void 0 && nm(n)
}

function U(e) {
  return {
    agent_type: e.agentType,
    ...e.selectedAgent && {
      is_built_in: e.selectedAgent.source === "built-in"
    },
    forked_skill: e.forkedSkillName !== void 0,
    main_thread_spawned: e.spawnDepth === 1 && e.parentAgentId === void 0,
    default_launch: e.cwd === void 0 && e.launchedWithDefaults === !0,
    ...e.cwd === void 0 && e.launchModel !== void 0 && {
      launch_model: e.launchModel
    },
    ...e.requestShape && {
      request_shape: e.requestShape
    }
  }
}

function BWr(e) {
  return Object.values(e.tasks).filter((r) => u_(r) && !nm(r) && (r.type === "local_bash" || r.type === "monitor_mcp" || r.type === "monitor_ws" || r.type === "local_agent" || r.type === "local_workflow")).map((r) => ({
    task_id: r.id,
    task_type: r.type,
    description: r.description,
    ...(r.type === "local_bash" || r.type === "monitor_mcp" || r.type === "monitor_ws") && r.agentId !== void 0 && {
      owner_agent_id: r.agentId
    },
    ...r.type === "local_bash" && r.kind !== void 0 && {
      shell_kind: r.kind
    },
    ...r.type === "monitor_ws" && r.ambient && {
      ambient: !0
    },
    ...r.type === "local_agent" && {
      ...U(r),
      run_id: SU(r.id)
    },
    ...X(r, e.tasks) && {
      observer_owned: !0
    }
  }))
}

function W(e, r) {
  return e.length === r.length && r.every((n, s) => n.task_id === e[s]?.task_id)
}

function S({
  tasks: e
}) {
  return Object.values(e).flatMap((r) => r.type === "local_agent" && r.status === "running" && r.isBackgrounded === !1 && r.directCall === !0 && r.toolUseId !== void 0 && r.spawnDepth === 1 && r.parentAgentId === void 0 ? [{
    task_id: r.id,
    task_type: r.type,
    description: r.description,
    tool_use_id: r.toolUseId,
    ...U(r)
  }] : [])
}
var Q = ["condition", "setAt", "iterations", "tokensAtStart", "lastReason"];

function gHo(e) {
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

function J(e, r) {
  if (e === r) return !0;
  if (e === void 0 || r === void 0) return !1;
  return Q.every((n) => e[n] === r[n])
}

function R(e) {
  return Object.values(e.tasks).filter((r) => !(le() && pZ(r)) && u_(r) && !nm(r) && !AIt(r) && r.type !== "post_turn_memory").map((r) => ({
    task_id: r.id,
    run_id: SU(r.id),
    task_type: r.type,
    subagent_type: SXt(r),
    description: r.description,
    parent_task_id: oio(r, e.tasks),
    ..._2(r) && {
      ambient: !0
    },
    ...sio(r) && {
      awaited: !0
    }
  }))
}

function ee(e, r) {
  if (!e && (!b_(at()) || jL(at()) !== null || w6i())) return;
  btr(e, r)
}

function zvt(e) {
  Ti({
    type: "system",
    subtype: "background_tasks_changed",
    tasks: R(e)
  })
}

function U8s(e, r, n) {
  e.settleUltracodeActive(wg(r, at()), n)
}
export {
  hHo,
  zmn,
  Wvt,
  F8s,
  H8s,
  UWr,
  $8s,
  d5n,
  BWr,
  gHo,
  zvt,
  U8s
};
