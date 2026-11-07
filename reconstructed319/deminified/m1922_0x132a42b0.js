// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { hm } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { st, ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { C5e, eQr, kZo, Vve, jyi, tq, GMe, wRn, Sm, Jxn, cso, uso, kTi, eas } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Cn, pls } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { Hn, Ef } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { ln } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { CO } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Yo, ZL, GVe, wJ, kJ, bUt, S_t } from "B:/~BUN/root/chunk-smrt7z22.js";
import { kc } from "B:/~BUN/root/chunk-trd3c21n.js";
import { ft, bc } from "B:/~BUN/root/chunk-2x2z0t2k.js";
import { gR } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { ff } from "B:/~BUN/root/chunk-ckdgegnz.js";
import { Ql } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { PXe, rMn } from "B:/~BUN/root/chunk-x9bz04wf.js";
import { Bce } from "B:/~BUN/root/chunk-875j4y83.js";
import { NQe, RNe } from "B:/~BUN/root/chunk-r1gg0qbg.js";
import { Cft } from "B:/~BUN/root/chunk-mq0pq26y.js";
import { IS } from "B:/~BUN/root/chunk-98qgaht2.js";
import { An } from "B:/~BUN/root/chunk-7yd8y16n.js";
import { o, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var ne = 200,
  te = 1000,
  oe = 8,
  K = 2;
function se(e) {
  if (e.head === "ended_by_hook" || e.hasFoldTakenPrompt || !e.isLocalTurnActive) return {
    action: "stand_by"
  };
  if (e.isHeldByDialog) return {
    action: "wait",
    reason: "held_by_dialog"
  };
  if (e.head === "not_ready" || !e.isLocalTurnRunning) return {
    action: "wait",
    reason: "not_ready"
  };
  if (e.head === "behind_earlier") return {
    action: "wait",
    reason: "behind_earlier"
  };
  if (e.holderCount > e.unmovableHolderCount) return {
    action: "background"
  };
  if (e.isCompacting) return {
    action: "wait",
    reason: "compacting"
  };
  if (e.isAwaitingMovedResult) return {
    action: "wait",
    reason: "moved_result"
  };
  if (e.holderCount > 0 || e.isExecuting) {
    if (!e.isUnmovableGraceOver) return {
      action: "wait",
      reason: "unmovable_grace"
    };
    return e.isBackgroundingDisabled ? {
      action: "cancel"
    } : {
      action: "interrupt"
    };
  }
  if (!e.isMainRequestInFlight) return {
    action: "wait",
    reason: "not_sampling"
  };
  return {
    action: "interrupt"
  };
}
function zVr(e) {
  let n = new Map(),
    r = new Set();
  for (let s = e.length - 1; s >= 0; s--) {
    let d = e[s];
    if (d.type === "assistant") {
      for (let i of d.message.content) if (i.type === "tool_use") n.set(i.id, i.name);
      continue;
    }
    if (d.type !== "user") continue;
    let content = d.message.content;
    if (!Bce(content)) {
      if (d.isMeta !== !0) break;
      continue;
    }
    for (let i of content) if (typeof i !== "string" && i.type === "tool_result") r.add(i.tool_use_id);
  }
  for (let s of r) n.delete(s);
  return n;
}
function W(e, n, r, s) {
  let d = e.findIndex(item => item.uuid !== void 0 && n.has(item.uuid) && item.priority !== "now"),
    l = e[d],
    uuid = l?.uuid;
  if (l === void 0 || uuid === void 0) return null;
  let priority = l.priority === "later" ? "later" : "next";
  if (l.drainOnly === !0 && l.promptSubmitted !== void 0) return {
    head: "ended_by_hook",
    uuid: uuid,
    priority: priority
  };
  let h = e.slice(0, d);
  if (e.some(item => item.screeningPending === !0 && item.agentId === s) || r.isFoldInFlight(uuid) || r.isMidTurnFoldSuspended() || h.some(item => item.priority === "now" && item.agentId === s)) return {
    head: "not_ready",
    uuid: uuid,
    priority: priority
  };
  if (h.some(item => item.agentId === s && (item.mode === "prompt" || item.mode === "bash"))) return {
    head: "behind_earlier",
    uuid: uuid,
    priority: priority
  };
  return {
    head: "deliverable",
    uuid: uuid,
    priority: priority
  };
}
class Wst {
  #n;
  #e = new Map();
  #t = null;
  #p = [];
  #g = !1;
  #h = "";
  #c = !1;
  #o = 0;
  #l = !1;
  #s = new Set();
  #y = 0;
  #u = 0;
  #i = !1;
  #m = 0;
  #S = !1;
  constructor(e) {
    this.#n = e;
  }
  sendQueuedNow = () => this.#v(Sm);
  sendAgentMessageNow() {
    if (this.#i = !0, this.#m = 0, this.#v(() => !0)) this.#t?.(), this.#T();
    return this.#m;
  }
  #v(e) {
    let n = !1;
    return this.#d(() => {
      if (this.#S) return;
      let {
        messageQueue: messageQueue,
        turn: turn
      } = this.#n;
      if (!turn.guard.isRunning && !turn.guard.isDispatchingForModel) {
        this.#a();
        return;
      }
      let d = q(turn.agentId);
      for (let i of messageQueue.getCommandQueueSnapshot()) if (i.uuid !== void 0 && i.agentId === d && i.mode === "prompt" && e(i) && !this.#e.has(i.uuid)) this.#e.set(i.uuid, {
        outcome: "undecided",
        raisedFrom: null
      });
      if (this.#e.size === 0) return;
      let l = W(messageQueue.getCommandQueue(), this.#e, messageQueue, d)?.head;
      if (l === "behind_earlier" || l === "ended_by_hook") {
        this.#a();
        return;
      }
      if (n = !0, this.#c = !1, this.#l = !1, this.#p.length === 0) this.#p = [messageQueue.subscribe(this.#w), turn.guard.subscribe(this.#M)];
      if (this.#t === null) this.#b(0);
    }), n;
  }
  moveHolders() {
    this.#d(() => {
      let {
        turn: turn_2,
        transcript: transcript,
        taskRegistry: taskRegistry
      } = this.#n;
      if (this.#S || !Z(turn_2) || ff()) return;
      let s = zVr(transcript.getSnapshot()),
        d = Object.values(taskRegistry.all());
      J(Y(d, s, turn_2.agentId), V(d, s, turn_2.agentId).filter(item => X(s, item)), taskRegistry);
    });
  }
  dispose() {
    this.#S = !0, this.#d(() => this.#a());
  }
  #b(e) {
    this.#t?.(), this.#t = this.#n.clock.setTimeout(this.#T, e);
  }
  #r() {
    this.#t?.(), this.#t = null, this.#o = 0, this.#s.clear(), this.#y = 0, this.#u = 0;
  }
  #a() {
    this.#r();
    for (let e of this.#p.splice(0)) e();
    this.#A(), this.#e.clear(), this.#g = !1, this.#h = "", this.#c = !1, this.#l = !1;
  }
  #f() {
    if (this.#e.size > 0) this.#b(this.#i ? te : ne);
  }
  #A() {
    for (let [e, n] of this.#e) if (n.raisedFrom !== null) {
      let raisedFrom = n.raisedFrom;
      n.raisedFrom = null, this.#n.messageQueue.demoteFromNow(e, raisedFrom);
    }
  }
  #_() {
    let e = new Set(this.#n.messageQueue.getCommandQueueSnapshot().map(item => item.uuid));
    for (let [n, r] of this.#e) {
      if (e.has(n)) continue;
      if (this.#e.delete(n), this.#n.messageQueue.isFoldInFlight(n)) this.#l = !0;
      if (r.outcome !== "undecided" && r.outcome !== "delivered_early") c(this.#n.featureName, r.outcome);
    }
  }
  #w = () => {
    this.#d(() => {
      let [e] = this.#e.keys();
      if (this.#_(), this.#e.size === 0) {
        this.#a();
        return;
      }
      if (this.#l) {
        this.#r();
        return;
      }
      let [n] = this.#e.keys();
      if (n !== e && (this.#t !== null || this.#n.turn.guard.isActive)) this.#b(0);
    });
  };
  #M = () => {
    this.#d(() => {
      let {
        guard: guard
      } = this.#n.turn;
      if (!guard.isActive) {
        this.#c = !0, this.#r();
        return;
      }
      if (this.#c) this.#a();
    });
  };
  #T = () => {
    this.#t = null, this.#d(() => {
      this.#I();
    });
  };
  #d(e) {
    try {
      e();
    } catch (error) {
      if (a(error), this.#m = null, !this.#g) this.#g = !0, m(this.#n.featureName, "check_threw");
    }
  }
  #I() {
    let {
      messageQueue: messageQueue_2,
      turn: turn_3,
      transcript: transcript_2,
      session: session,
      taskRegistry: taskRegistry_2
    } = this.#n;
    if (this.#_(), this.#e.size === 0) {
      this.#a();
      return;
    }
    let l = W(messageQueue_2.getCommandQueue(), this.#e, messageQueue_2, q(turn_3.agentId)),
      i = l === null ? void 0 : this.#e.get(l.uuid),
      f = transcript_2.getSnapshot(),
      h = zVr(f),
      y = Object.values(taskRegistry_2.all()),
      b = Y(y, h, turn_3.agentId),
      w = turn_3.guard.isActive && [...this.#e.values()].some(item => item.raisedFrom !== null);
    if (w && !ff()) {
      if (eas(b, taskRegistry_2), this.#u = h.size > 0 ? this.#u + 1 : 0, turn_3.endsUnmovableShells && this.#u > K) for (let S of ie(y, h, b, turn_3.agentId)) tq(S.id, taskRegistry_2);
    }
    if (l === null || i === void 0) {
      if (w) this.#f();else this.#r();
      return;
    }
    let {
        head: head,
        uuid: uuid_2,
        priority: priority_2
      } = l,
      R = V(y, h, turn_3.agentId),
      L = (Vve.peek(session)?.list() ?? []).filter(item => E(h, item.toolUseId)),
      isBackgroundingDisabled = ff(),
      x = isBackgroundingDisabled ? [] : b.filter(item => {
        if (!this.#i) return !0;
        let k = Q(item),
          A = k === void 0 ? void 0 : Hn().exclusiveCallQueuedBehind.get(k);
        return kTi(item, turn_3.agentId) && !A?.isQueued() && !A?.mayYetBeQueued();
      }),
      H = isBackgroundingDisabled || this.#i && ye() ? [] : R.filter(item => X(h, item) && !(this.#i && wRn(item))),
      C = turn_3.readEvidence(),
      D = f.at(-1);
    for (let S of this.#s) if (!h.has(S)) this.#s.delete(S);
    let holderCount = b.length + R.length + L.length,
      j = b.length - x.length + (R.length - H.length),
      O = {
        head: head,
        hasFoldTakenPrompt: this.#l,
        isLocalTurnActive: turn_3.guard.isActive,
        isLocalTurnRunning: Z(turn_3),
        isHeldByDialog: C.isHeldByDialog,
        holderCount: holderCount,
        unmovableHolderCount: this.#i && j > 0 ? holderCount : j,
        isExecuting: C.isToolCallStarting || h.size > 0,
        isAwaitingMovedResult: this.#s.size > 0,
        isBackgroundingDisabled: isBackgroundingDisabled,
        isCompacting: C.isCompacting,
        isUnmovableGraceOver: this.#o >= K,
        isMainRequestInFlight: C.isMainRequestAnnounced && !(D?.type === "assistant" && (D.message.stop_reason !== null || D.isApiErrorMessage === !0)) && NQe("api_call") && RNe() > 0
      },
      v = se(O),
      U = `${v.action}${v.action === "wait" ? ` ${v.reason}` : ""} head=${head} holders=${O.holderCount} executing=${O.isExecuting}`;
    if (U !== this.#h) this.#h = U, t(`[low-latency-submit] ${U} agent=${turn_3.agentId ?? "main"}`);
    switch (v.action) {
      case "stand_by":
        this.#r();
        return;
      case "wait":
        if (this.#o = v.reason === "unmovable_grace" ? this.#o + 1 : 0, v.reason === "moved_result" && ++this.#y >= oe) this.#s.clear();
        if (v.reason !== "not_ready" && i.outcome === "undecided") i.outcome = v.reason;
        this.#f();
        return;
      case "background":
        {
          let outcome = i.outcome;
          i.outcome = "delivered_early";
          let k = J(x, H, taskRegistry_2),
            A = k.length,
            G = jyi(L);
          if (A += G, this.#m = A, G > 0) k.push(...L.map(item => item.toolUseId));
          if (this.#e.size > 0) {
            this.#y = 0;
            for (let P of k) if (P !== void 0) this.#s.add(P);
          }
          if (A === 0) {
            if (i.outcome = outcome === "undecided" ? "nothing_moved" : outcome, O.isUnmovableGraceOver) {
              if (isBackgroundingDisabled) this.#x(i);else this.#k(i, uuid_2, priority_2);
              return;
            }
            if (this.#e.size > 0) this.#o++;
          } else if (this.#o = 0, outcome !== "delivered_early") g(this.#n.featureName);
          this.#f();
          return;
        }
      case "interrupt":
        this.#k(i, uuid_2, priority_2);
        return;
      case "cancel":
        this.#x(i);
    }
  }
  #x(e) {
    let {
      interruptForSubmit: interruptForSubmit
    } = this.#n.turn;
    if (interruptForSubmit === void 0) {
      if (e.outcome === "undecided") e.outcome = "nothing_moved";
    } else {
      if (e.outcome !== "delivered_early") e.outcome = "fell_back_to_cancel";
      interruptForSubmit();
    }
    this.#r();
  }
  #k(e, n, r) {
    if (this.#o = 0, this.#u = 0, e.raisedFrom = r, !this.#n.messageQueue.promoteToNow(n)) e.raisedFrom = null;else if (e.outcome !== "delivered_early") e.outcome = "delivered_early", g(this.#n.featureName);
    this.#f();
  }
}
function q(e) {
  return e ?? st();
}
function Y(e, n, r) {
  return e.filter(item => cso(item, r)).filter(item => item.status === "running" && (item.caller === "inner" && item.toolUseId?.includes(PXe) === !0 || uso(item, r)) && E(n, Q(item)));
}
function V(e, n, r) {
  return e.filter(item => pls(item, r)).filter(item => E(n, item.toolUseId));
}
function X(e, {
  toolUseId: toolUseId
}) {
  let r = toolUseId === void 0 ? void 0 : e.get(toolUseId);
  return r === ft || r === bc;
}
function J(e, n, r) {
  return [...eas(e, r).map(Q), ...n.filter(item => GMe(item.id, r)).map(item => item.toolUseId)];
}
function Z(e) {
  return e.guard.isRunning && e.abortController?.signal.aborted === !1;
}
function Q(e) {
  return e.toolUseId === void 0 ? void 0 : rMn(e.toolUseId);
}
function ie(e, n, r, s) {
  let d = [...n.values()].some(gR),
    l = e.filter(Cn).filter(item => item.status === "running" && !item.isBackgrounded),
    i = new Set(l.filter(item => item.parentAgentId === s && (d || E(n, item.toolUseId))).map(item => item.agentId));
  for (let f = -1; f !== i.size;) {
    f = i.size;
    for (let h of l) if (h.parentAgentId !== void 0 && i.has(h.parentAgentId)) i.add(h.agentId);
  }
  return e.filter(Ql).filter(item => {
    let h = uso(item, s) || r.includes(item),
      y = Jxn(item);
    if (item.status !== "running" || !y || h) return !1;
    if (item.agentId !== s) return item.agentId !== void 0 && i.has(item.agentId);
    let {
      toolUseId: toolUseId_2
    } = item;
    return d || toolUseId_2 !== void 0 && E(n, tt(toolUseId_2, ":"));
  });
}
function E(e, n) {
  return n !== void 0 && e.has(n);
}
var delivering = Object.freeze({
  delivered: () => {
    return;
  },
  refused: () => {
    return;
  },
  [Symbol.dispose]: () => {
    return;
  }
});
function ae() {
  let e = Ef();
  return {
    setSessionSendRunner: e.set,
    runSessionSend: n => {
      let r = e.get();
      return r ? r(n) : Promise.resolve({
        send: n.raised,
        delivering: delivering
      });
    }
  };
}
var F = ae();
var runSessionSend = F.runSessionSend;
var cia = "Delivered by a plugin hook; nothing else was sent.";
var setSessionSendRunner = F.setSessionSendRunner;
async function hei({
  session: session_2,
  to: to,
  message: message,
  resolved: resolved,
  appState: appState,
  agentLifecycle: agentLifecycle,
  storageV5: storageV5,
  credentials: credentials
}) {
  if (typeof message !== "string") return {
    kind: "proceed",
    pin: void 0
  };
  let h = he(resolved);
  if (h === null) return {
    kind: "proceed",
    pin: void 0
  };
  let y = Yo(h.name),
    b = Object.hasOwn(appState.sendMessagePins, y) ? appState.sendMessagePins[y] : void 0;
  if (b !== void 0 && b.id === h.id) return {
    kind: "proceed",
    pin: b
  };
  if (b !== void 0) {
    let M = wJ(to) !== null;
    if (!M && to === h.name && to !== b.name) return {
      kind: "proceed",
      pin: void 0
    };
    if (!M) {
      let I = kc(appState.teamContext),
        [teamFile, sessions, L] = await Promise.all([I ? IS(I, storageV5) : null, eQr(), Cft(session_2, credentials)]),
        _ = kJ(appState, {
          teamFile: teamFile,
          sessions: sessions,
          cloud: L.sessions,
          bridge: kZo(session_2)
        }),
        x = bUt(_.byName, y);
      return {
        kind: "rebound",
        name: h.name,
        previous: b,
        next: x?.kind === "one" && x.candidate.id === h.id ? x.candidate : void 0
      };
    }
  }
  let pin = {
    id: h.id,
    name: h.name,
    ref: S_t(h.kind, h.id)
  };
  return agentLifecycle.setSendMessagePin(y, pin), {
    kind: "proceed",
    pin: pin
  };
}
function he(e) {
  switch (e.kind) {
    case "main":
    case "not-found":
    case "ambiguous":
    case "agent-stopped-by-user":
    case "mailbox":
    case "local-session":
    case "cloud-session":
      return null;
    case "agent-live":
    case "agent-stopped":
    case "agent-evicted":
      return {
        kind: "subagent",
        id: e.agentId,
        name: e.agentName
      };
  }
}
var Se = p(() => u({
  success: T(!0),
  pin: u({
    name: o().min(1).max(CO),
    id: o().max(1024).refine(e => hm(e) !== null),
    ref: o().regex(new RegExp(`^${GVe}$`))
  })
}));
function lWo(e) {
  let n = new Map(),
    r = new Set();
  for (let s of e) if (s.type === "assistant") {
    let content_2 = s.message.content;
    if (!Array.isArray(content_2)) continue;
    for (let l of content_2) if (l.type === "tool_use" && l.name === An) r.add(l.id);
  } else if (s.type === "user") {
    let content_3 = s.message.content;
    if (!Array.isArray(content_3)) continue;
    if (content_3.find(item => item.type === "tool_result" && !item.is_error && r.has(item.tool_use_id)) === void 0) continue;
    let i = Se().safeParse(s.toolUseResult);
    if (!i.success) continue;
    n.set(Yo(i.data.pin.name), {
      id: i.data.pin.id,
      name: i.data.pin.name,
      ref: i.data.pin.ref
    });
  }
  return Object.fromEntries(n);
}
function gei(e, n) {
  let r = lWo(e);
  return ln(r, n) ? null : r;
}
var be = p(() => u({
    name: o().regex(C5e).refine(e => !ZL(e))
  })),
  ve = p(() => u({
    status: B(["async_launched", "completed"]),
    agentId: o()
  }));
function ZXn(e, n) {
  let r = new Map(),
    s = new Map();
  for (let d of e) if (d.type === "assistant" && Array.isArray(d.message.content)) {
    for (let l of d.message.content) if (l.type === "tool_use" && (l.name === ft || l.name === bc)) {
      let i = be().safeParse(l.input);
      if (i.success && !n.has(i.data.name)) r.set(l.id, i.data.name);
    }
  } else if (d.type === "user" && Array.isArray(d.message.content)) {
    let [l, ...i] = d.message.content.filter(item => item.type === "tool_result"),
      f = l !== void 0 && i.length === 0 && !l.is_error ? r.get(l.tool_use_id) : void 0;
    if (f === void 0) continue;
    let h = ve().safeParse(d.toolUseResult),
      y = h.success ? hm(h.data.agentId) : null;
    if (y !== null) s.set(f, y);
  }
  return s.size > 0 ? new Map([...n, ...s]) : null;
}
export { hei, lWo, gei, ZXn, zVr, Wst, delivering as dWo, runSessionSend as dia, cia, setSessionSendRunner as uia };