// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  F,
  K,
  Ze
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  v$n
} from "B:/~BUN/root/chunk-2wpqgvtg.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  mt
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  ZC
} from "B:/~BUN/root/chunk-e4q58xft.js";
import {
  Ki
} from "B:/~BUN/root/chunk-19m6yp46.js";
import {
  wwr,
  SC
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  ph,
  fK,
  Lve,
  mX
} from "B:/~BUN/root/chunk-pwz0pnkt.js";
import {
  QLe,
  q5r,
  nEt
} from "B:/~BUN/root/chunk-7mwhj9vf.js";
import {
  Qpt
} from "B:/~BUN/root/chunk-nbprdt7j.js";
import {
  YUt
} from "B:/~BUN/root/chunk-9xr0x7gd.js";
import {
  o,
  oe,
  u,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var T = 43200000,
  Kkt = 32,
  X = 3,
  L = 750,
  z = 30000,
  j = 750,
  D = 100,
  P5r = f(() => u({
    action: C("notify_when_idle"),
    from: o(),
    msg_id: o(),
    from_mode: oe().optional()
  })),
  O5r = f(() => u({
    action: C("peer_idle_notice"),
    orig_msg_id: o(),
    state: o(),
    finished_at: oe().optional(),
    detail: oe().optional(),
    from: oe().optional(),
    from_mode: oe().optional()
  }));
class U {
  subscribers = [];
  idle = !1;
  idleSince = 0;
  busyObserved = !1;
  turnEnded = !1;
  turnConversationId = void 0;
  parkedHoldBack = !1;
  exited = !1;
  inflight = new Set;
  inflightBatch = [];
  unavailableRetries = new Map;
  debounce = null;
  getLastTurnText = null;
  sendNotice = null;
  onSubscribed = null;
  pendingAnnounces = [];
  pendingAnnounceOverflow = 0;
  onReplayDone = null;
  registeredInboxOfPid = null;
  outstanding = [];
  onNotice = null;
  pendingNotices = [];
  pendingNoticeOverflow = 0;
  hostStatusUnsubscribe = null;
  reset() {
    this.hostStatusUnsubscribe?.(), this.hostStatusUnsubscribe = null, this.subscribers.length = 0, this.pendingAnnounces.length = 0, this.pendingAnnounceOverflow = 0, this.pendingNotices.length = 0, this.pendingNoticeOverflow = 0, this.onReplayDone = null, this.idle = !1, this.idleSince = 0, this.busyObserved = !1, this.turnEnded = !1, this.turnConversationId = void 0, this.parkedHoldBack = !1, this.exited = !1, this.inflight.clear(), this.inflightBatch = [];
    for (let e of this.unavailableRetries.values()) clearTimeout(e);
    if (this.unavailableRetries.clear(), this.debounce) clearTimeout(this.debounce);
    this.debounce = null, this.getLastTurnText = null, this.sendNotice = null, this.onSubscribed = null, this.registeredInboxOfPid = null;
    for (let e of this.outstanding) clearTimeout(e.expiry);
    this.outstanding.length = 0, this.onNotice = null
  }
}
var d = new U,
  G = 8,
  Y = 4,
  Q = 4;

function I5r(e, n, i, r, s, c, y, v) {
  if (!Qpt(i)) return p("cross_session_notify_idle", "invalid_frame"), "invalid";
  let h = ZC(n);
  if (h === void 0) return p("cross_session_notify_idle", "invalid_frame"), "invalid";
  if (QLe() === "refuse") return p("cross_session_notify_idle", "refused_by_policy"), "refused";
  let b = d;
  if (b.exited) return p("cross_session_notify_idle", "subscription_after_exit"), "full";
  R(Date.now());
  let _ = b.subscribers,
    a = (S) => r !== void 0 && S.targetKey === h && S.verifiedPeerPid === r,
    I = _.findIndex(a),
    k = I !== -1 || b.inflightBatch.some(a),
    w = () => _.length >= Kkt;
  if (I !== -1) _.splice(I, 1);
  else if (r !== void 0) {
    if (F(_, (S) => S.verifiedPeerPid === r) >= Y) {
      let S = _.findIndex((x) => x.verifiedPeerPid === r);
      if (S === -1) return N();
      M(_, S)
    } else if (w()) return N()
  } else if (!c) {
    let S = (x) => x.verifiedPeerPid === void 0 && !x.authenticated;
    if (F(_, S) >= G) {
      let x = _.findIndex(S);
      if (x === -1) return N();
      M(_, x)
    } else if (w()) return N()
  } else if (F(_, (x) => x.verifiedPeerPid === void 0 && x.authenticated && x.targetKey === h) >= Q || w()) return N();
  if (_.push({
      targetKey: h,
      replyTarget: n,
      replyAddress: e,
      verifiedPeerPid: r,
      verifiedPeerProcStart: s,
      authenticated: c,
      fromMode: y,
      selfSent: v,
      origMsgId: i,
      requestedAt: Date.now()
    }), t(`[peer-idle] subscription ${I===-1?"recorded":"refreshed"} for ${ph(e)} (${r===void 0?"no peer pid":`pid ${r}`}${c?", authenticated":""}; ${_.length} live)`), !k) q(e, r !== void 0);
  if (b.idle) P();
  return "recorded"
}

function ksr(e, n) {
  let i = d;
  if (!e && n) i.busyObserved = !0, i.parkedHoldBack = !1;
  if (e === i.idle) return;
  if (i.idle = e, e) {
    if (i.busyObserved) i.turnEnded = !0, i.idleSince = Date.now(), i.turnConversationId = K(), i.busyObserved = !1;
    else if (!i.turnEnded) i.idleSince = Date.now();
    if (i.parkedHoldBack = nEt() > 0, i.subscribers.length > 0) P();
    return
  }
  if (i.debounce) clearTimeout(i.debounce), i.debounce = null
}

function P(e = L) {
  if (d.debounce) return;
  d.debounce = setTimeout(Z, e), d.debounce.unref?.()
}

function Z() {
  if (d.debounce = null, !d.idle) return;
  if (R(Date.now()), d.subscribers.length === 0) return;
  if (wwr() > 0) {
    P();
    return
  }
  if (nEt() > 0) {
    d.parkedHoldBack = !0, P(z);
    return
  }
  d.parkedHoldBack = !1;
  let e = Esr("idle").finally(() => {
    d.inflight.delete(e)
  });
  d.inflight.add(e)
}
async function Esr(e) {
  let n = d;
  if (e === "exited") {
    if (n.exited = !0, n.inflight.size > 0) await Promise.all([...n.inflight].map((c) => c.catch(() => {})))
  }
  let i = e === "exited" && n.idle && wwr() === 0 && !n.parkedHoldBack && nEt() === 0 ? "idle" : e;
  if (R(Date.now()), n.subscribers.length === 0 || n.sendNotice === null) return;
  let r = n.sendNotice,
    s = n.subscribers.splice(0, n.subscribers.length);
  n.inflightBatch = n.inflightBatch.concat(s);
  try {
    await J(n, r, s, e, i)
  } catch (c) {
    l(c), m("cross_session_notify_idle", "flush_internal_error")
  } finally {
    n.inflightBatch = n.inflightBatch.filter((c) => !s.includes(c))
  }
}
async function J(e, n, i, r, s) {
  if (QLe() === "refuse") {
    p("cross_session_notify_idle", "revoked_before_fire");
    return
  }
  let c = e.turnEnded && e.turnConversationId === K(),
    y = s === "idle" ? c ? e.idleSince : void 0 : Date.now(),
    v = (a) => q5r({
      fromMode: a.fromMode,
      selfSent: a.selfSent
    }) === "accept",
    h = s === "idle" && c && i.some((a) => a.verifiedPeerPid !== void 0 && v(a)) ? ee() : void 0,
    b = new Map;
  if (i.some((a) => a.verifiedPeerPid !== void 0)) try {
    b = await e.registeredInboxOfPid?.(i.flatMap((a) => a.verifiedPeerPid === void 0 ? [] : [a.verifiedPeerPid])) ?? new Map
  } catch (a) {
    t(`[peer-idle] registry unreadable at fire time; notices carry no detail (${fK(String(a))})`)
  }
  if (QLe() === "refuse") {
    p("cross_session_notify_idle", "revoked_before_fire");
    return
  }
  if (r === "idle" && (!e.idle || wwr() > 0 || nEt() > 0)) {
    if (B(i), e.idle) {
      let a = nEt() > 0;
      e.parkedHoldBack = a, P(a ? z : L)
    }
    return
  }
  let _ = (a) => {
    if (a.verifiedPeerPid === void 0) return !1;
    let I = b.get(a.verifiedPeerPid);
    return I !== void 0 && ZC(I) === a.targetKey
  };
  await Promise.all(i.map((a) => {
    let I = _(a);
    return n(a.replyTarget, {
      orig_msg_id: a.origMsgId,
      state: s,
      ...y !== void 0 && {
        finished_at: y
      },
      ...h !== void 0 && I && v(a) && {
        detail: h
      }
    }, a.verifiedPeerPid, W(a.verifiedPeerPid, a.authenticated), a.verifiedPeerProcStart).then(() => g("cross_session_notify_idle"), (k) => {
      let w = V(k);
      if (r === "idle" && w === "transient" && !a.retried) {
        if (B([{
            ...a,
            retried: !0
          }]), e.idle) P();
        p("cross_session_notify_idle", "notice_send_retrying");
        return
      }
      if (w === "requester-gone") p("cross_session_notify_idle", "requester_gone");
      else if (w === "transient") p("cross_session_notify_idle", a.retried ? "notice_retry_exhausted" : "notice_transient_at_exit");
      else m("cross_session_notify_idle", "notice_send_failed");
      t(`[peer-idle] notice to ${ph(a.replyAddress)} failed: ${fK(String(k))}`)
    })
  }))
}

function N() {
  return p("cross_session_notify_idle", "table_full"), "full"
}

function M(e, n) {
  let [i] = e.splice(n, 1);
  if (i === void 0) return;
  p("cross_session_notify_idle", "evicted_same_class"), gEn(i.replyTarget, i.origMsgId, i.verifiedPeerPid, i.authenticated, i.verifiedPeerProcStart)
}

function R(e) {
  let n = d.subscribers;
  for (let i = n.length - 1; i >= 0; i--)
    if (e - n[i].requestedAt > T) p("cross_session_notify_idle", "expired_unfired"), n.splice(i, 1)
}

function ee() {
  let e = "";
  try {
    e = d.getLastTurnText?.() ?? ""
  } catch (i) {
    t(`[peer-idle] last-turn text unavailable: ${fK(String(i))}`)
  }
  if (e.trim().length === 0) return;
  let n;
  try {
    n = v$n(e)?.detail
  } catch {
    n = void 0
  }
  return n ??= e.split(`
`).find((i) => i.trim().length > 0), n === void 0 ? void 0 : O(n)
}

function fEn(e) {
  return O(e) ?? "(unnamed session)"
}

function O(e) {
  let n = ne(e, D * 8).replace(/[\p{Cc}\p{Cf}<>\u00ab\u00bb"[\]]/gu, " ").replace(/[\s\p{Z}]+/gu, " ");
  for (;;) {
    let i = n.replace(/cross-session idle notice/giu, " ").replace(/ {2,}/g, " ");
    if (i === n) break;
    n = i
  }
  if (n = n.trim(), n.length === 0) return;
  return mt(n, D)
}

function M5r(e, n, i) {
  let r = d.outstanding,
    s = ZC(i);
  if (s === void 0) return {
    ok: !1,
    reason: "invalid-target"
  };
  let c = K();
  for (let b = r.length - 1; b >= 0; b--) {
    let _ = r[b];
    if (_.conversationId !== c) clearTimeout(_.expiry), r.splice(b, 1), p("cross_session_notify_idle", "purged_cleared_conversation")
  }
  let y = r.filter((b) => b.targetKey === s);
  while (y.length > X) {
    let [b] = y.splice(1, 1);
    if (!b) break;
    clearTimeout(b.expiry), r.splice(r.indexOf(b), 1), p("cross_session_notify_idle", "prior_trimmed")
  }
  let v = y.map((b) => b.msgId);
  if (r.length - v.length >= Kkt) return {
    ok: !1,
    reason: "cap"
  };
  let h = setTimeout(ie, T, e);
  return h.unref?.(), r.push({
    msgId: e,
    label: fEn(n),
    target: i,
    targetKey: s,
    conversationId: K(),
    requestedAt: Date.now(),
    expiry: h
  }), {
    ok: !0,
    priors: v
  }
}

function ie(e) {
  let n = d.outstanding,
    i = n.findIndex((s) => s.msgId === e);
  if (i === -1) return;
  let [r] = n.splice(i, 1);
  if (!r) return;
  if (n.some((s) => s.targetKey === r.targetKey && s.requestedAt > r.requestedAt)) return;
  for (let s = n.length - 1; s >= 0; s--) {
    let c = n[s];
    if (c.targetKey === r.targetKey) clearTimeout(c.expiry), n.splice(s, 1)
  }
  te(r)
}

function te(e) {
  let n = e.conversationId === K();
  if (p("cross_session_notify_idle", n ? "expired_unheard" : "purged_cleared_conversation"), n) E({
    kind: "expired",
    label: e.label,
    gate: "local"
  })
}

function bqt(e) {
  return typeof e === "string" && d.outstanding.some((n) => n.msgId === e)
}

function mEn(e) {
  let n = d,
    i = n.outstanding.findIndex((s) => s.msgId === e);
  if (i === -1) return;
  let [r] = n.outstanding.splice(i, 1);
  if (r) clearTimeout(r.expiry)
}

function D5r(e, n, i, r, s, c) {
  if (typeof e !== "string") return !1;
  let y = d,
    v = y.outstanding.findIndex((a) => a.msgId === e);
  if (v === -1) return !1;
  let [h] = y.outstanding.splice(v, 1);
  if (!h) return !1;
  if (clearTimeout(h.expiry), n === "idle" || n === "exited")
    for (let a = y.outstanding.length - 1; a >= 0; a--) {
      let I = y.outstanding[a];
      if (I.targetKey === h.targetKey) clearTimeout(I.expiry), y.outstanding.splice(a, 1)
    }
  let b = n === "idle" || n === "exited" || n === "unavailable";
  if (!b) p("cross_session_notify_idle", "notice_state_unrecognized");
  let _ = b ? n : "unavailable";
  if (!Ki()) return p("cross_session_notify_idle", "requester_gate_off"), !0;
  if (h.conversationId !== K()) return p("cross_session_notify_idle", "conversation_cleared"), !0;
  if (_ === "unavailable" && b) p("cross_session_notify_idle", "peer_unavailable");
  return E({
    kind: _,
    label: h.label,
    ..._ !== "unavailable" && YUt(i) && {
      finishedAt: i
    },
    ..._ === "idle" && typeof r === "string" && {
      detail: O(r)
    },
    gate: {
      fromMode: s,
      selfSent: c
    }
  }), !0
}

function re(e) {
  let {
    gate: n,
    detail: i,
    ...r
  } = e, s = n === "local" ? QLe() : q5r(n);
  if (s === "refuse") return null;
  let c = n === "local" || s === "accept";
  return {
    ...r,
    modelVisible: c,
    ...c && i !== void 0 && {
      detail: i
    }
  }
}

function E(e) {
  let n = d,
    i = n.onNotice;
  if (i === null) {
    if (n.pendingNotices.length < Kkt) n.pendingNotices.push({
      admitted: e,
      conversationId: K()
    });
    else n.pendingNoticeOverflow++;
    t(`[peer-idle] notice for "${ph(e.label)}" (${e.kind}) buffered until a host handler mounts`);
    return
  }
  let r = re(e);
  if (r === null) {
    p("cross_session_notify_idle", "requester_refuses_inbound");
    return
  }
  if (r.kind === "idle" || r.kind === "exited") g("cross_session_notify_idle");
  try {
    i(r)
  } catch (s) {
    l(s)
  }
}

function Tsr(e) {
  let n = d;
  if (n.onNotice = e, e === null) return;
  let i = n.pendingNotices.splice(0),
    r = n.pendingNoticeOverflow;
  n.pendingNoticeOverflow = 0;
  let s = K();
  for (let {
      admitted: c,
      conversationId: y
    }
    of i) {
    if (y !== s) {
      p("cross_session_notify_idle", "purged_cleared_conversation");
      continue
    }
    E(c)
  }
  if (r > 0) t(`[peer-idle] ${r} notice(s) arrived past the pre-mount buffer and were lost`), p("cross_session_notify_idle", "notice_premount_overflow")
}

function Csr(e) {
  d.getLastTurnText = e
}

function Rsr(e) {
  if (e !== null) d.exited = !1;
  d.sendNotice = e
}

function Asr(e, n = null) {
  if (d.onSubscribed = e, d.onReplayDone = n, e !== null) {
    let i = d.pendingAnnounces.splice(0);
    for (let [s, c] of i) q(s, c, !0);
    let r = d.pendingAnnounceOverflow;
    d.pendingAnnounceOverflow = 0;
    try {
      d.onReplayDone?.(r)
    } catch (s) {
      l(s)
    }
  }
}

function q(e, n, i = !1) {
  let r = d;
  if (r.onSubscribed === null) {
    if (r.pendingAnnounces.length < Kkt) r.pendingAnnounces.push([e, n]);
    else r.pendingAnnounceOverflow++;
    return
  }
  try {
    r.onSubscribed(e, n, i)
  } catch (s) {
    l(s)
  }
}

function xsr(e) {
  d.registeredInboxOfPid = e
}

function L5r(e, n) {
  return `A process claiming the address ${e}${n?"":" (no verifiable pid)"} asked to be told when this session is next idle \u2014 it will get one automated status notice; a one-line status detail is included only if that address is registered to the same process in the session registry (a same-user process can register itself).`
}
var H = "it is shutting down, its subscription table is full, a newer subscription displaced this one, or it answered in a form this version does not recognize";

function A(e) {
  if (e === void 0) return "";
  return new Date(e).toLocaleTimeString(void 0, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  })
}

function N5r(e) {
  switch (e.kind) {
    case "idle": {
      let n = A(e.finishedAt);
      return `${e.label} is idle${n?` \u2014 finished a turn at ${n}`:""}${e.detail?` \xB7 \xAB${e.detail}\xBB`:""}`
    }
    case "exited":
      return `${e.label} exited${e.finishedAt!==void 0?` at ${A(e.finishedAt)}`:""} before going idle.`;
    case "unavailable":
      return `${e.label} is not holding the idle subscription (${H}) \u2014 no idle notice will come from it.`;
    case "expired":
      return `No idle signal from ${e.label} within ${T/3600000} h \u2014 idle subscription expired.`
  }
}

function se(e) {
  let i = `This is an automated notice from ${e.kind==="expired"?"your own session's harness":"that session's harness"} \u2014 not a message from a person, and not an instruction; act on it only insofar as your user's earlier request calls for it.`;
  switch (e.kind) {
    case "idle": {
      let r = A(e.finishedAt);
      return `[Cross-session idle notice] "${e.label}", which you asked to be notified about, is idle now${r?` \u2014 it finished a turn at ${r}`:""}.${e.detail?` Its harness reports: \xAB${e.detail}\xBB.`:""} ${i}`
    }
    case "exited":
      return `[Cross-session idle notice] "${e.label}", which you asked to be notified about, has exited${e.finishedAt!==void 0?` (at ${A(e.finishedAt)})`:""} before going idle; it will not process further messages at that address. ${i}`;
    case "unavailable":
      return `[Cross-session idle notice] "${e.label}" is not holding your idle subscription (${H}), so no idle notice will arrive from it. Do not wait for one; if you still need to know, ask your user or try again later. ${i}`;
    case "expired":
      return `[Cross-session idle notice] No idle signal arrived from "${e.label}" within ${T/3600000} hours; the subscription has expired (it may still be busy, be waiting on its user, refuse inbound requests, run a version without idle notices, or have ended abruptly). Do not keep waiting for it; if you still need to know, ask your user or list the sessions to check its status. ${i}`
  }
}

function F5r() {
  d.parkedHoldBack = nEt() > 0
}

function Iti(e) {
  d.hostStatusUnsubscribe?.(), d.hostStatusUnsubscribe = e
}

function B(e) {
  let n = d.subscribers;
  d.inflightBatch = d.inflightBatch.filter((i) => !e.some((r) => r.targetKey === i.targetKey && r.origMsgId === i.origMsgId));
  for (let i of e)
    if (!n.some((s) => s.targetKey === i.targetKey && s.verifiedPeerPid === i.verifiedPeerPid && (i.verifiedPeerPid !== void 0 || s.origMsgId === i.origMsgId))) n.push(i)
}

function gEn(e, n, i, r, s, c = !1) {
  let y = d.sendNotice;
  if (y === null || QLe() === "refuse") return;
  y(e, {
    orig_msg_id: n,
    state: "unavailable"
  }, i, W(i, r), s).then(() => {}, (v) => {
    let h = V(v);
    if (h === "transient" && !c) {
      let b = setTimeout(de, j, e, n, i, r, s);
      b.unref?.();
      let _ = d.unavailableRetries.get(n);
      if (_ !== void 0) clearTimeout(_);
      d.unavailableRetries.set(n, b), p("cross_session_notify_idle", "unavailable_send_retrying");
      return
    }
    if (h === "requester-gone") p("cross_session_notify_idle", "requester_gone");
    else if (h === "transient") p("cross_session_notify_idle", "unavailable_retry_exhausted");
    else m("cross_session_notify_idle", "unavailable_send_failed");
    t(`[peer-idle] unavailable notice to ${ph(e)} failed: ${fK(String(v))}`)
  })
}

function de(e, n, i, r, s) {
  d.unavailableRetries.delete(n), gEn(e, n, i, r, s, !0)
}

function W(e, n) {
  return e !== void 0 || n
}

function H5r(e) {
  if (e.length === 0) return;
  SC({
    mode: "prompt",
    agentId: Ze(),
    value: e.map(se).join(`
`),
    priority: "later",
    skipSlashCommands: !0,
    isMeta: !0,
    skipAttachments: !0
  })
}

function V(e) {
  if (e instanceof mX) {
    if (e.refusal === "endpoint-unverifiable") return "transient";
    if (e.refusal === "wrong-endpoint") return "requester-gone"
  }
  switch (Lve(e)) {
    case "busy":
      return "transient";
    case "gone":
      return "requester-gone";
    case "other":
      return "failed"
  }
}
export {
  Kkt,
  P5r,
  O5r,
  I5r,
  ksr,
  Esr,
  fEn,
  M5r,
  bqt,
  mEn,
  D5r,
  Tsr,
  Csr,
  Rsr,
  Asr,
  xsr,
  L5r,
  N5r,
  F5r,
  Iti,
  gEn,
  H5r
};
