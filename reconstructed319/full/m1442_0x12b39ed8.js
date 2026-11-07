// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pr,
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  z,
  UWs,
  Ee,
  Oo,
  Zzs,
  Mwt,
  ye,
  Rme,
  Fwt,
  Lcn,
  Hwt,
  q,
  gS,
  Wae,
  art,
  Nd,
  Du
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  We,
  qe,
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  g
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Hn,
  Ti,
  ql
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  bt
} from "B:/~BUN/root/chunk-ja520myc.js";
import {
  le
} from "B:/~BUN/root/chunk-begxsvab.js";
import {
  EC
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  S9i
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  Zar,
  Phi,
  rlr,
  _x,
  BQ,
  bde,
  G3t,
  l9,
  WPt,
  QC,
  $h,
  m8e,
  Lk,
  fur,
  gto,
  Ide,
  L8t,
  Uje,
  Fd,
  IEe,
  Ict,
  fye,
  vss,
  fxn,
  Zre,
  k9,
  T6,
  zss,
  Vss,
  ji,
  Kss,
  Poo,
  cy,
  Wde,
  Xss,
  yF,
  Sxn,
  kxn,
  Xje,
  Jje,
  g2,
  bW,
  u9e,
  hDe,
  nis,
  Cxn,
  QB,
  cq,
  wm,
  Oy
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  cMt,
  Ql
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  $i,
  OFn,
  MFn
} from "B:/~BUN/root/chunk-78494p3w.js";
import {
  SGe,
  ULt,
  f7e,
  BLt,
  jLt
} from "B:/~BUN/root/chunk-6v74v9ar.js";
import {
  bp
} from "B:/~BUN/root/chunk-ke150ry1.js";
import {
  Aks
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Kp
} from "B:/~BUN/root/chunk-xgwmwbnb.js";
import {
  tp,
  yWe,
  pZ,
  R9e,
  S2,
  Cn
} from "B:/~BUN/root/chunk-2fedt3ag.js";
import {
  Zo
} from "B:/~BUN/root/chunk-t4pbv0np.js";
import {
  vZt
} from "B:/~BUN/root/chunk-076mmgjt.js";
import {
  UXe
} from "B:/~BUN/root/chunk-nk59bmc9.js";
import {
  Umt
} from "B:/~BUN/root/chunk-3vrk9h6f.js";
import {
  gNn
} from "B:/~BUN/root/chunk-h6zqt1s4.js";
import {
  SLe
} from "B:/~BUN/root/chunk-jmka9ye7.js";
import {
  Jls
} from "B:/~BUN/root/chunk-4vcs773m.js";
import {
  UEe
} from "B:/~BUN/root/chunk-mcdkvptw.js";
import {
  $le
} from "B:/~BUN/root/chunk-mja4vhvw.js";
import {
  zrr,
  Grr
} from "B:/~BUN/root/chunk-jn1nhjzk.js";
import {
  fQ
} from "B:/~BUN/root/chunk-36ftm27n.js";
import {
  ZOe
} from "B:/~BUN/root/chunk-7yz875eh.js";
import {
  JCt
} from "B:/~BUN/root/chunk-eyypf5pg.js";
import {
  k6o
} from "B:/~BUN/root/chunk-5y6c5r5g.js";
import {
  _6o
} from "B:/~BUN/root/chunk-zctxa67y.js";
import {
  Jqt
} from "B:/~BUN/root/chunk-01p2dk5r.js";
import {
  JG
} from "B:/~BUN/root/chunk-f61vm6d0.js";
import {
  Utr
} from "B:/~BUN/root/chunk-xa8mb85y.js";
import {
  Wtr
} from "B:/~BUN/root/chunk-2nzy6mgc.js";
import {
  Ko
} from "B:/~BUN/root/chunk-kgvnwy91.js";
import {
  Uue
} from "B:/~BUN/root/chunk-36r971cb.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  randomUUID as Ae
} from "crypto";
var Ie = null,
  we = null;
async function* g6o({
  session: o,
  setMessages: s,
  readFileState: f,
  sessionEnvVars: m,
  toolState: h,
  memorySelector: c,
  getAppState: n,
  setAppState: R,
  sessionHooksRegistry: L,
  dialogStore: se,
  isolationLatch: S,
  sessionState: ne,
  taskRegistry: K,
  clearedSessionTitle: E,
  storageV5: d,
  credentials: _,
  deferSessionStartHooks: W,
  releaseDeferredSessionStartHooks: ie,
  resetTrigger: D,
  resetUserMessageUuid: ae,
  conversationOnly: T
}) {
  if (Wtr(o), Oy(cq), BLt(), f7e(), SGe(), T) await T.raiseSessionEnd(), L.clear(o.id);
  else await L8t(o, "clear", {
    sessionHooks: L,
    getAppState: n,
    signal: AbortSignal.timeout(Uje()),
    storageV5: d,
    credentials: _
  });
  rlr("conversation_clear"), await kxn(d);
  let u = new Set,
    j = new Map,
    N = n?.().tasks,
    x = N !== void 0 && Object.values(N).some((e) => Ql(e) && b(e) && !Ko(e.status) && !C(e, N, u));
  if (n && S?.current != null && !x) {
    let {
      tasks: e
    } = n(), r = Object.values(e).filter((l) => !C(l, e, u) && (Cn(l) || tp(l)));
    if (r.every(Oe)) {
      for (let l of r)
        if (u.add(l.id), Cn(l)) j.set(l.id, l.agentId)
    }
  }
  let v = new Set,
    O = [];
  if (n) {
    let {
      tasks: e
    } = n();
    for (let r of Object.values(e)) {
      if (C(r, e, u)) continue;
      if (Cn(r)) v.add(r.agentId), O.push(r);
      else if (tp(r)) v.add(r.identity.agentId)
    }
  }
  ie?.(), bde("clear"), fQ(o, void 0), s((e) => (fur.of(o).rollOverContext("main", BQ(e)), []));
  let de = n ? Object.values(n().tasks).some((e) => !C(e, n().tasks, u) && R9e.has(e.type) && (e.status === "running" || Cn(e) && Lk(e))) : !1;
  if (_6o(o, v, R, h, d, de), !T) Me();
  if (f.clear(), ZOe.of(o.host).reset(), QC.of(o).discardAll(), Oy((e) => e.mode === "task-notification" && typeof e.value === "string" && WPt(e.value) !== null), m?.clear(), l9(c), S && v.size === 0 && u.size === 0 && !x) S.current = null;
  let me = n === void 0 || x || wm().getCommandQueue().some((e) => e.mode === "task-notification") || Object.values(n().tasks).some((e) => !C(e, n().tasks, u) && !oe.has(e.type) && !Ko(e.status));
  if (v.size === 0 && u.size === 0 && !me) S9i();
  if (n) Grr(n);
  let w = cy(z()),
    G = Wde(),
    k = !E && w !== void 0,
    fe = k && Poo(ji(z())),
    M, B;
  if (ULt(), R) {
    if (se?.dismissKind($le.kind), Ie?.retireResponsePair(o), gNn(new Set), R((e) => {
        let r = {},
          l = [];
        for (let [y, p] of Object.entries(e.tasks)) {
          if (!C(p, e.tasks, u)) {
            r[y] = Cn(p) && p.waitingNoticeRecipient !== void 0 ? {
              ...p,
              waitingNoticeRecipient: void 0
            } : p;
            continue
          }
          l.push(y);
          try {
            if (p.status === "running") {
              if (Ql(p)) p.shellCommand?.kill(), p.shellCommand?.cleanup();
              if ("abortController" in p) p.abortController?.abort()
            }
          } catch (Te) {
            a(Te)
          }
          Kp(y)
        }
        M = U(Object.values(r), (y) => !(le() && pZ(y)) && !oe.has(y.type) && !G3t(y)), B = e.activeGoal;
        let A = e.transcripts;
        if (A && l.length > 0) {
          A = {
            ...A
          };
          for (let y of l) delete A[y]
        }
        return {
          ...zrr(e),
          ...e.toolPermissionContext?.planDoc !== void 0 && {
            toolPermissionContext: {
              ...e.toolPermissionContext,
              planDoc: void 0
            }
          },
          tasks: r,
          ...A !== e.transcripts && {
            transcripts: A
          },
          ...e.viewingAgentTaskId !== void 0 && l.includes(e.viewingAgentTaskId) && {
            viewingAgentTaskId: void 0,
            viewSelectionMode: "none"
          },
          runningSubagents: M === 0 ? 0 : e.runningSubagents,
          ...{
            endedByModel: !1
          },
          attribution: cMt(),
          cacheBreakerPhrase: void 0,
          sendMessagePins: {},
          agentNameRegistry: Utr(e.agentNameRegistry, r),
          frameUrls: {},
          standaloneAgentContext: k && e.standaloneAgentContext?.name ? {
            name: e.standaloneAgentContext.name
          } : void 0,
          fileHistory: {
            snapshots: [],
            trackedFiles: new Set,
            snapshotSequence: 0
          }
        }
      }), B !== void 0) Uue(B, "session_clear");
    JG({})
  }
  if (S && v.size === 0 && u.size > 0 && n && ![...u].some((e) => Object.hasOwn(n().tasks, e) || re(e, j.get(e) ?? e)) && !Object.values(n().tasks).some((e) => Cn(e) && [...j.values()].includes(e.agentId))) S.current = null;
  if (K && M === 0) K.resetWebSearchBudget();
  if (n) {
    for (let e of n().mcp.clients)
      if (e.name === "ide" && e.type === "connected") {
        UEe(e, void 0);
        let {
          clearServerCache: r
        } = import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule();
        await r(e.name, e.config).catch(() => {})
      }
  }
  Aks();
  let ce = z(),
    ue = E ? Fd() ?? bp() : void 0,
    pe = T6(),
    Q = M === 0 && v.size === 0 ? void 0 : Wae(),
    Y = M === 0 && v.size === 0 ? void 0 : Nd().names(),
    ge = Nd().names().filter(vZt),
    Se = [...Cxn()],
    Ce = !1,
    ve = !1;
  if (Sxn(), pe) zss();
  if (Ce) Rme(!0), Lcn(!0);
  if (ve) Fwt(!0), Hwt(!0);
  if (Q !== void 0) art(Q);
  if (Y !== void 0) Nd().replace(Y);
  else Nd().replace(ge), Xss();
  let P = Ae();
  if (ye() || Du() && SLe()) {
    let e = D === "clear" ? Nt(ae) : null;
    fQ(o, P), Ti({
      type: "conversation_reset",
      new_conversation_id: P,
      uuid: P,
      ...D !== void 0 && {
        trigger: D
      },
      ...e !== null && {
        user_message_uuid: e
      },
      timestamp: new Date().toISOString()
    }), g("bridge_conversation_reset")
  }
  if (JCt.of(o.host).conversationReset(), yield {
      type: "conversation_reset",
      newConversationId: P
    }, !T) Zzs(d), Mwt();
  if (ye() && EC() && fxn() && !q()) vss();
  let X = ji(z()),
    ke = fe || k && Poo(X),
    H = new Map;
  for (let e of O)
    if (e.forkedSkillName === void 0) {
      let r = Pr(e.agentId);
      H.set(r, IEe(r))
    } if (UWs({
      setCurrentAsParent: !0,
      next: T?.nextSessionId
    }), k && w !== void 0) g2(w);
  let Pe = Promise.resolve(!0);
  if (Umt(), jLt(), k6o.of(o).reset(), bt().needsAuthNoticedThisSession.clear(), UXe(o), i.CLAUDE_CODE_SESSION_ID && !T) process.env.CLAUDE_CODE_SESSION_ID = z();
  await Zre();
  let J = gS();
  if (J !== void 0) Jje(J);
  for (let e of we?.pauseStampsCarriedAcrossClear(n?.().mcp.clients, Se) ?? []) nis({
    ...e,
    afterUuid: null
  }, d);
  if (Vss(), Kss(X), T) {
    await ee(O, H, d);
    return
  }
  if (await Jls(z(), bp(), d), Zo()) await (await import("B:/~BUN/root/chunk-nsrce80v.js")).noteSessionTaskListAfterClear();
  if (E) await k9(ce, E, ue, "user", d);
  else if (w) {
    if (await k9(z(), w, void 0, "user", d), G) await Xje(z(), G, void 0, "user", d)
  }
  await ee(O, H, d);
  let {
    isCoordinatorMode: he
  } = import.meta.require("B:/~BUN/root/chunk-0rsphtkf.js");
  if (bW(he() ? "coordinator" : "normal"), le()) {
    if (MFn(), Phi(), OFn(!1), $i()) {
      let e = Zar();
      yF({
        replMode: !0,
        replTypedEvents: e
      }), u9e({
        type: "repl-mode",
        replMode: !0,
        ...e && {
          typedEvents: !0
        },
        sessionId: z()
      })
    }
  }
  let Z = ql();
  if (Z) QB(Z, d);
  if (S?.current) hDe(S.current, d);
  if (S) ne?.notifyInternalMetadataChanged({
    isolation_latch: S.current
  });
  if (W) {
    if (W((e) => Ide(o, "clear", {
        signal: e,
        storageV5: d,
        credentials: _
      }).catch((r) => {
        if (We(r)) t(`SessionStart hooks after /clear aborted: ${F(r).message}`);
        else a(qe(F(r), "SessionStart hooks after /clear threw"));
        return []
      })), gto()) s(Jqt);
    return
  }
  let V = await Ide(o, "clear", {
    storageV5: d,
    credentials: _
  });
  if (V.length > 0) s(() => V);
  if (gto()) s(Jqt)
}
async function ee(o, s, f) {
  for (let m of o)
    if (m.status === "running") m8e(m.agentId);
  await Promise.all(Array.from(s, async ([m, h]) => {
    try {
      let c = await Ict(h, f);
      if (c) await fye(m, c, f, !0)
    } catch (c) {
      t(`/clear did not carry the settings file of agent ${m}: ${_x(c)}`, {
        level: "error"
      })
    }
  }))
}

function Me() {
  let o = Ee();
  try {
    $h(o)
  } catch {
    t(`/clear: originalCwd "${o}" no longer exists; falling back`);
    let s = Oo();
    if (s !== o) try {
      $h(s)
    } catch {}
  }
}

function b(o) {
  return "isBackgrounded" in o && o.isBackgrounded === !1
}

function te(o) {
  return Ko(o.status) && !(Cn(o) && Lk(o))
}

function C(o, s, f) {
  if (Ql(o) && o.agentId !== void 0 && b(o)) {
    let m = yWe(s, o.agentId);
    return m !== void 0 && (te(m) || C(m, s, f))
  }
  if (Cn(o) && o.parentAgentId !== void 0 && b(o)) {
    let {
      parentAgentId: m
    } = o, h = yWe(s, m) ?? Object.values(s).find((c) => tp(c) && c.status === "running" && c.startTime <= o.startTime && c.identity.resumableAgentId === m);
    return h === void 0 || te(h) || C(h, s, f)
  }
  return b(o) || f.has(o.id)
}

function Oe(o) {
  return Cn(o) && S2(o) && (o.keepaliveReasons?.size ?? 0) === 0 && o.finalizing !== !0 && o.resuming !== !0 && (o.pendingMessages?.length ?? 0) === 0 && !re(o.id, o.agentId)
}

function re(o, s) {
  return Hn().resumesInFlight.has(s) || wm().getCommandQueue().some((f) => f.mode === "task-notification" && (f.taskId === o || f.agentId === s))
}
var oe = new Set(["local_bash", "monitor_mcp", "monitor_ws", "mcp_task", "post_turn_memory"]);

function y6o(o) {
  return Object.values(o).some((s) => !C(s, o, new Set) && R9e.has(s.type) && !Ko(s.status))
}
export {
  g6o,
  y6o
};
