// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pr, Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { z, UWs, Ee, Oo, Zzs, Mwt, ye, Rme, Fwt, Lcn, Hwt, q, gS, Wae, art, Nd, Du } from "B:/~BUN/root/chunk-game8aqv.js";
import { We, qe, F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Hn, Ti, ql } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { EC } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { S9i } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Zar, Phi, rlr, _x, BQ, bde, G3t, l9, WPt, QC, $h, m8e, Lk, fur, gto, Ide, L8t, Uje, Fd, IEe, Ict, fye, vss, fxn, Zre, k9, T6, zss, Vss, ji, Kss, Poo, cy, Wde, Xss, yF, Sxn, kxn, Xje, Jje, g2, bW, u9e, hDe, nis, Cxn, QB, cq, wm, Oy } from "B:/~BUN/root/chunk-27h4st9h.js";
import { cMt, Ql } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { $i, OFn, MFn } from "B:/~BUN/root/chunk-78494p3w.js";
import { SGe, ULt, f7e, BLt, jLt } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { bp } from "B:/~BUN/root/chunk-ke150ry1.js";
import { Aks } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Kp } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { tp, yWe, pZ, R9e, S2, Cn } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { Zo } from "B:/~BUN/root/chunk-t4pbv0np.js";
import { vZt } from "B:/~BUN/root/chunk-076mmgjt.js";
import { UXe } from "B:/~BUN/root/chunk-nk59bmc9.js";
import { Umt } from "B:/~BUN/root/chunk-3vrk9h6f.js";
import { gNn } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { SLe } from "B:/~BUN/root/chunk-jmka9ye7.js";
import { Jls } from "B:/~BUN/root/chunk-4vcs773m.js";
import { UEe } from "B:/~BUN/root/chunk-mcdkvptw.js";
import { $le } from "B:/~BUN/root/chunk-mja4vhvw.js";
import { zrr, Grr } from "B:/~BUN/root/chunk-jn1nhjzk.js";
import { fQ } from "B:/~BUN/root/chunk-36ftm27n.js";
import { ZOe } from "B:/~BUN/root/chunk-7yz875eh.js";
import { JCt } from "B:/~BUN/root/chunk-eyypf5pg.js";
import { k6o } from "B:/~BUN/root/chunk-5y6c5r5g.js";
import { _6o } from "B:/~BUN/root/chunk-zctxa67y.js";
import { Jqt } from "B:/~BUN/root/chunk-01p2dk5r.js";
import { JG } from "B:/~BUN/root/chunk-f61vm6d0.js";
import { Utr } from "B:/~BUN/root/chunk-xa8mb85y.js";
import { Wtr } from "B:/~BUN/root/chunk-2nzy6mgc.js";
import { Ko } from "B:/~BUN/root/chunk-kgvnwy91.js";
import { Uue } from "B:/~BUN/root/chunk-36r971cb.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { randomUUID as Ae } from "crypto";
var Ie = null,
  we = null;
async function* g6o({
  session: session,
  setMessages: setMessages,
  readFileState: readFileState,
  sessionEnvVars: sessionEnvVars,
  toolState: toolState,
  memorySelector: memorySelector,
  getAppState: getAppState,
  setAppState: setAppState,
  sessionHooksRegistry: L,
  dialogStore: dialogStore,
  isolationLatch: isolationLatch,
  sessionState: sessionState,
  taskRegistry: taskRegistry,
  clearedSessionTitle: clearedSessionTitle,
  storageV5: storageV5,
  credentials: credentials,
  deferSessionStartHooks: deferSessionStartHooks,
  releaseDeferredSessionStartHooks: releaseDeferredSessionStartHooks,
  resetTrigger: D,
  resetUserMessageUuid: resetUserMessageUuid,
  conversationOnly: conversationOnly
}) {
  if (Wtr(session), Oy(cq), BLt(), f7e(), SGe(), conversationOnly) await conversationOnly.raiseSessionEnd(), L.clear(session.id);else await L8t(session, "clear", {
    sessionHooks: L,
    getAppState: getAppState,
    signal: AbortSignal.timeout(Uje()),
    storageV5: storageV5,
    credentials: credentials
  });
  rlr("conversation_clear"), await kxn(storageV5);
  let u = new Set(),
    j = new Map(),
    N = getAppState?.().tasks,
    x = N !== void 0 && Object.values(N).some(item => Ql(item) && b(item) && !Ko(item.status) && !C(item, N, u));
  if (getAppState && isolationLatch?.current != null && !x) {
    let {
        tasks: tasks
      } = getAppState(),
      r = Object.values(tasks).filter(item => !C(item, tasks, u) && (Cn(item) || tp(item)));
    if (r.every(Oe)) {
      for (let l of r) if (u.add(l.id), Cn(l)) j.set(l.id, l.agentId);
    }
  }
  let v = new Set(),
    O = [];
  if (getAppState) {
    let {
      tasks: tasks_2
    } = getAppState();
    for (let r of Object.values(tasks_2)) {
      if (C(r, tasks_2, u)) continue;
      if (Cn(r)) v.add(r.agentId), O.push(r);else if (tp(r)) v.add(r.identity.agentId);
    }
  }
  releaseDeferredSessionStartHooks?.(), bde("clear"), fQ(session, void 0), setMessages(e => (fur.of(session).rollOverContext("main", BQ(e)), []));
  let de = getAppState ? Object.values(getAppState().tasks).some(item => !C(item, getAppState().tasks, u) && R9e.has(item.type) && (item.status === "running" || Cn(item) && Lk(item))) : !1;
  if (_6o(session, v, setAppState, toolState, storageV5, de), !conversationOnly) Me();
  if (readFileState.clear(), ZOe.of(session.host).reset(), QC.of(session).discardAll(), Oy(e => e.mode === "task-notification" && typeof e.value === "string" && WPt(e.value) !== null), sessionEnvVars?.clear(), l9(memorySelector), isolationLatch && v.size === 0 && u.size === 0 && !x) isolationLatch.current = null;
  let me = getAppState === void 0 || x || wm().getCommandQueue().some(item => item.mode === "task-notification") || Object.values(getAppState().tasks).some(item => !C(item, getAppState().tasks, u) && !oe.has(item.type) && !Ko(item.status));
  if (v.size === 0 && u.size === 0 && !me) S9i();
  if (getAppState) Grr(getAppState);
  let w = cy(z()),
    G = Wde(),
    k = !clearedSessionTitle && w !== void 0,
    fe = k && Poo(ji(z())),
    M,
    B;
  if (ULt(), setAppState) {
    if (dialogStore?.dismissKind($le.kind), Ie?.retireResponsePair(session), gNn(new Set()), setAppState(e => {
      let tasks_3 = {},
        l = [];
      for (let [y, p] of Object.entries(e.tasks)) {
        if (!C(p, e.tasks, u)) {
          tasks_3[y] = Cn(p) && p.waitingNoticeRecipient !== void 0 ? {
            ...p,
            waitingNoticeRecipient: void 0
          } : p;
          continue;
        }
        l.push(y);
        try {
          if (p.status === "running") {
            if (Ql(p)) p.shellCommand?.kill(), p.shellCommand?.cleanup();
            if ("abortController" in p) p.abortController?.abort();
          }
        } catch (error) {
          a(error);
        }
        Kp(y);
      }
      M = U(Object.values(tasks_3), y => !(le() && pZ(y)) && !oe.has(y.type) && !G3t(y)), B = e.activeGoal;
      let transcripts = e.transcripts;
      if (transcripts && l.length > 0) {
        transcripts = {
          ...transcripts
        };
        for (let y of l) delete transcripts[y];
      }
      return {
        ...zrr(e),
        ...(e.toolPermissionContext?.planDoc !== void 0 && {
          toolPermissionContext: {
            ...e.toolPermissionContext,
            planDoc: void 0
          }
        }),
        tasks: tasks_3,
        ...(transcripts !== e.transcripts && {
          transcripts: transcripts
        }),
        ...(e.viewingAgentTaskId !== void 0 && l.includes(e.viewingAgentTaskId) && {
          viewingAgentTaskId: void 0,
          viewSelectionMode: "none"
        }),
        runningSubagents: M === 0 ? 0 : e.runningSubagents,
        ...{
          endedByModel: !1
        },
        attribution: cMt(),
        cacheBreakerPhrase: void 0,
        sendMessagePins: {},
        agentNameRegistry: Utr(e.agentNameRegistry, tasks_3),
        frameUrls: {},
        standaloneAgentContext: k && e.standaloneAgentContext?.name ? {
          name: e.standaloneAgentContext.name
        } : void 0,
        fileHistory: {
          snapshots: [],
          trackedFiles: new Set(),
          snapshotSequence: 0
        }
      };
    }), B !== void 0) Uue(B, "session_clear");
    JG({});
  }
  if (isolationLatch && v.size === 0 && u.size > 0 && getAppState && ![...u].some(item => Object.hasOwn(getAppState().tasks, item) || re(item, j.get(item) ?? item)) && !Object.values(getAppState().tasks).some(item => Cn(item) && [...j.values()].includes(item.agentId))) isolationLatch.current = null;
  if (taskRegistry && M === 0) taskRegistry.resetWebSearchBudget();
  if (getAppState) {
    for (let e of getAppState().mcp.clients) if (e.name === "ide" && e.type === "connected") {
      UEe(e, void 0);
      let {
        clearServerCache: clearServerCache
      } = import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule();
      await clearServerCache(e.name, e.config).catch(() => {});
    }
  }
  Aks();
  let ce = z(),
    ue = clearedSessionTitle ? Fd() ?? bp() : void 0,
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
  if (Y !== void 0) Nd().replace(Y);else Nd().replace(ge), Xss();
  let P = Ae();
  if (ye() || Du() && SLe()) {
    let user_message_uuid = D === "clear" ? Nt(resetUserMessageUuid) : null;
    fQ(session, P), Ti({
      type: "conversation_reset",
      new_conversation_id: P,
      uuid: P,
      ...(D !== void 0 && {
        trigger: D
      }),
      ...(user_message_uuid !== null && {
        user_message_uuid: user_message_uuid
      }),
      timestamp: new Date().toISOString()
    }), g("bridge_conversation_reset");
  }
  if (JCt.of(session.host).conversationReset(), yield {
    type: "conversation_reset",
    newConversationId: P
  }, !conversationOnly) Zzs(storageV5), Mwt();
  if (ye() && EC() && fxn() && !q()) vss();
  let X = ji(z()),
    ke = fe || k && Poo(X),
    H = new Map();
  for (let e of O) if (e.forkedSkillName === void 0) {
    let r = Pr(e.agentId);
    H.set(r, IEe(r));
  }
  if (UWs({
    setCurrentAsParent: !0,
    next: conversationOnly?.nextSessionId
  }), k && w !== void 0) g2(w);
  let Pe = Promise.resolve(!0);
  if (Umt(), jLt(), k6o.of(session).reset(), bt().needsAuthNoticedThisSession.clear(), UXe(session), i.CLAUDE_CODE_SESSION_ID && !conversationOnly) process.env.CLAUDE_CODE_SESSION_ID = z();
  await Zre();
  let J = gS();
  if (J !== void 0) Jje(J);
  for (let e of we?.pauseStampsCarriedAcrossClear(getAppState?.().mcp.clients, Se) ?? []) nis({
    ...e,
    afterUuid: null
  }, storageV5);
  if (Vss(), Kss(X), conversationOnly) {
    await ee(O, H, storageV5);
    return;
  }
  if (await Jls(z(), bp(), storageV5), Zo()) await (await import("B:/~BUN/root/chunk-nsrce80v.js")).noteSessionTaskListAfterClear();
  if (clearedSessionTitle) await k9(ce, clearedSessionTitle, ue, "user", storageV5);else if (w) {
    if (await k9(z(), w, void 0, "user", storageV5), G) await Xje(z(), G, void 0, "user", storageV5);
  }
  await ee(O, H, storageV5);
  let {
    isCoordinatorMode: isCoordinatorMode
  } = import.meta.require("B:/~BUN/root/chunk-0rsphtkf.js");
  if (bW(isCoordinatorMode() ? "coordinator" : "normal"), le()) {
    if (MFn(), Phi(), OFn(!1), $i()) {
      let replTypedEvents = Zar();
      yF({
        replMode: !0,
        replTypedEvents: replTypedEvents
      }), u9e({
        type: "repl-mode",
        replMode: !0,
        ...(replTypedEvents && {
          typedEvents: !0
        }),
        sessionId: z()
      });
    }
  }
  let Z = ql();
  if (Z) QB(Z, storageV5);
  if (isolationLatch?.current) hDe(isolationLatch.current, storageV5);
  if (isolationLatch) sessionState?.notifyInternalMetadataChanged({
    isolation_latch: isolationLatch.current
  });
  if (deferSessionStartHooks) {
    if (deferSessionStartHooks(signal => Ide(session, "clear", {
      signal: signal,
      storageV5: storageV5,
      credentials: credentials
    }).catch(r => {
      if (We(r)) t(`SessionStart hooks after /clear aborted: ${F(r).message}`);else a(qe(F(r), "SessionStart hooks after /clear threw"));
      return [];
    })), gto()) setMessages(Jqt);
    return;
  }
  let V = await Ide(session, "clear", {
    storageV5: storageV5,
    credentials: credentials
  });
  if (V.length > 0) setMessages(() => V);
  if (gto()) setMessages(Jqt);
}
async function ee(o, s, f) {
  for (let m of o) if (m.status === "running") m8e(m.agentId);
  await Promise.all(Array.from(s, async ([m, h]) => {
    try {
      let c = await Ict(h, f);
      if (c) await fye(m, c, f, !0);
    } catch (error) {
      t(`/clear did not carry the settings file of agent ${m}: ${_x(error)}`, {
        level: "error"
      });
    }
  }));
}
function Me() {
  let o = Ee();
  try {
    $h(o);
  } catch {
    t(`/clear: originalCwd "${o}" no longer exists; falling back`);
    let s = Oo();
    if (s !== o) try {
      $h(s);
    } catch {}
  }
}
function b(o) {
  return "isBackgrounded" in o && o.isBackgrounded === !1;
}
function te(o) {
  return Ko(o.status) && !(Cn(o) && Lk(o));
}
function C(o, s, f) {
  if (Ql(o) && o.agentId !== void 0 && b(o)) {
    let m = yWe(s, o.agentId);
    return m !== void 0 && (te(m) || C(m, s, f));
  }
  if (Cn(o) && o.parentAgentId !== void 0 && b(o)) {
    let {
        parentAgentId: parentAgentId
      } = o,
      h = yWe(s, parentAgentId) ?? Object.values(s).find(item => tp(item) && item.status === "running" && item.startTime <= o.startTime && item.identity.resumableAgentId === parentAgentId);
    return h === void 0 || te(h) || C(h, s, f);
  }
  return b(o) || f.has(o.id);
}
function Oe(o) {
  return Cn(o) && S2(o) && (o.keepaliveReasons?.size ?? 0) === 0 && o.finalizing !== !0 && o.resuming !== !0 && (o.pendingMessages?.length ?? 0) === 0 && !re(o.id, o.agentId);
}
function re(o, s) {
  return Hn().resumesInFlight.has(s) || wm().getCommandQueue().some(item => item.mode === "task-notification" && (item.taskId === o || item.agentId === s));
}
var oe = new Set(["local_bash", "monitor_mcp", "monitor_ws", "mcp_task", "post_turn_memory"]);
function y6o(o) {
  return Object.values(o).some(item => !C(item, o, new Set()) && R9e.has(item.type) && !Ko(item.status));
}
export { g6o, y6o };