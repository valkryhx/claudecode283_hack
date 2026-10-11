// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Zpn, efn, i2, xv, MLo, b$r, DLo, f$e } from "B:/~BUN/root/chunk-v4qhg3t2.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { P, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I, qr, re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a, Gw } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { cl, xFt, uC, _ye, O1, MFt, zLo, sfn, t5e, lh, IN, Bce, hJ, nY } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { Hh, S5e, R$e, M_, Kk, $c, w5e } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { MI } from "B:/~BUN/root/chunk-3hn9fzjy.js";
import { cpn, ZKn, r4n, CRe, o4n, fpn, x, s$ } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { ti } from "B:/~BUN/root/chunk-nhxcgss8.js";
import { uNe } from "B:/~BUN/root/chunk-ye6tacpp.js";
import { Hae } from "B:/~BUN/root/chunk-zn0k3ezm.js";
import { pz } from "B:/~BUN/root/chunk-ymhw5dt2.js";
import { v5e, bNo, Spt, h$t, SNo, ua } from "B:/~BUN/root/chunk-358c43wz.js";
import { pn } from "B:/~BUN/root/chunk-8j4yaj30.js";
import { E, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { L, ri } from "B:/~BUN/root/chunk-z1enakv9.js";
function K(e) {
  if (O() === "windows") return null;
  let n = te(e);
  if (n < 0) return null;
  try {
    return Bun.ant.getPeerUid(n);
  } catch (error) {
    return t(`[daemon] peer uid lookup failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    }), null;
  }
}
function xEo(e, n = K) {
  let r = process.getuid?.();
  if (r == null) return null;
  let i = n(e);
  if (i == null) return null;
  if (i === r) return null;
  let s = `permission denied: connecting uid ${i} != daemon uid ${r} (retry without sudo, or as the daemon owner)`;
  return t(`[daemon] rejecting control connection: ${s}`, {
    level: "error"
  }), s;
}
function msn(e) {
  if (O() === "windows") return;
  let n = te(e);
  try {
    let r = n < 0 ? null : Bun.ant.getPeerPid(n);
    if (r !== null && r > 0) return r;
    t(`[peer-cred] peer pid unavailable (fd=${n}, got=${r})`, {
      level: "warn"
    });
    return;
  } catch (error) {
    t(`[peer-cred] peer pid lookup failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    });
    return;
  }
}
function te(e) {
  let _handle = e._handle;
  return typeof _handle?.fd === "number" ? _handle.fd : -1;
}
import { lstat as Ne, readdir as Me, stat as Ue, unlink as me } from "fs/promises";
import { connect as ge } from "net";
import { basename as Be, dirname as le, join as He } from "path";
var GOt = 1048576;
function N(e, n, r, i, s) {
  let m = Math.max(0, r - n) / 1000;
  return Math.min(i, e + m * s);
}
function M(e) {
  return e >= 1;
}
function U(e, n, r, i, s = () => !0) {
  let m = e.get(n);
  if (m !== void 0) return e.delete(n), e.set(n, m), m;
  while (e.size >= Math.max(1, r)) {
    let l;
    for (let [d, o] of e) if (s(o)) {
      l = d;
      break;
    }
    if (l ??= e.keys().next().value, l === void 0) break;
    e.delete(l);
  }
  let g = i();
  return e.set(n, g), g;
}
var gsn = {
  bucketCapacity: 30,
  refillPerSecond: 0.5,
  dedupWindowMs: 30000,
  maxSelfHops: 10,
  maxChainLength: 28,
  maxTrackedSenders: 256
};
function _e(e, n) {
  if (!e || n.size === 0) return 0;
  let r = 0;
  for (let i of e) if (n.has(i)) r++;
  return r;
}
function WAr(e = {}, n) {
  let r = {
      ...gsn,
      now: () => Date.now(),
      ...e
    },
    i = () => n ? {
      ...r,
      ...n()
    } : r,
    s = new Map();
  function m(d, o) {
    return U(s, d, o.maxTrackedSenders, () => ({
      tokens: o.bucketCapacity,
      lastRefill: o.now(),
      lastBody: void 0,
      lastBodyAt: 0
    }));
  }
  function checkHopChain(d, o) {
    let c = i();
    if (d !== void 0 && d.length > c.maxChainLength) return {
      admitted: !1,
      reason: "hop-runaway"
    };
    if (_e(d, o) >= c.maxSelfHops) return {
      admitted: !1,
      reason: "hop-loop"
    };
    return;
  }
  function admit(d) {
    let o = i(),
      c = o.now(),
      k = checkHopChain(d.hopChain, d.ownTokens);
    if (k) return k;
    let h = m(d.senderKey, o);
    if (h.lastBody !== void 0 && h.lastBody === d.body && c - h.lastBodyAt < o.dedupWindowMs) return {
      admitted: !1,
      reason: "duplicate"
    };
    if (h.tokens = N(h.tokens, h.lastRefill, c, o.bucketCapacity, o.refillPerSecond), h.lastRefill = c, !M(h.tokens)) return {
      admitted: !1,
      reason: "rate-limited"
    };
    return h.tokens -= 1, h.lastBody = d.body, h.lastBodyAt = c, {
      admitted: !0
    };
  }
  return {
    admit: admit,
    checkHopChain: checkHopChain,
    trackedSenderCount: () => s.size
  };
}
var he = {
  "rate-limited": !0,
  duplicate: !0,
  "hop-loop": !0,
  "hop-runaway": !0,
  "queue-full": !0
};
function Re(e) {
  return typeof e === "string" && Object.hasOwn(he, e);
}
function PEo(e) {
  return Re(e) ? e : void 0;
}
var zAr = 256,
  G = 60000,
  oe = 256,
  ke = 20;
function GAr(e) {
  ti().ingress.ownUdsHopToken = e === void 0 ? void 0 : uNe(e);
}
function VOt(e) {
  ti().ingress.ownBridgePeerAddressResolver = e;
}
function VAr() {
  let {
      ownUdsHopToken: ownUdsHopToken,
      ownBridgePeerAddressResolver: ownBridgePeerAddressResolver
    } = ti().ingress,
    r = new Set();
  if (ownUdsHopToken) r.add(ownUdsHopToken);
  let i = ownBridgePeerAddressResolver?.();
  if (i) r.add(uNe(i));
  let s = Hae();
  if (s) r.add(uNe(_ye(s)));
  return r;
}
var Ie = {
  "rate-limited": "sender exceeded the peer message rate limit",
  duplicate: "identical to the previous message from this sender",
  "hop-loop": "message has already passed through this session (a peer messaging loop)",
  "hop-runaway": "peer relay chain is too long (runaway forwarding)",
  "queue-full": "this session has too many undelivered peer messages queued"
};
function X(e) {
  return {
    from: zLo(e.from) ? e.from : "(unrenderable sender address)",
    name: e.name ? xFt(e.name) : ""
  };
}
function IEo(e) {
  let {
      from: n
    } = X(e),
    {
      name: name
    } = X(e),
    i = name ? `@${name} (${n})` : n,
    s = e.suppressed > 0 ? ` (+${e.suppressed} similar ${I(e.suppressed, "drop")} suppressed)` : "";
  return `Dropped a peer message from ${i}: ${Ie[e.reason]}.${s}`;
}
var Ee = 500,
  xe = 5000,
  ve = 40;
function W(e, n) {
  if (e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  let {
    pending: pending,
    pendingIds: pendingIds,
    pendingSend: pendingSend
  } = e;
  if (e.pending = 0, e.pendingIds = [], e.pendingSend = void 0, pending > 0 && pendingSend && n()) return pendingSend(pendingIds);
}
function qAr({
  trailMs = xe
} = {}) {
  let n = new Map(),
    r = 0,
    i = 0;
  function s(S = Date.now()) {
    if (S - r >= G) r = S, i = 0;
    if (i >= ve) return !1;
    return i++, !0;
  }
  function noteDropForReceipt(S, _, y, R = Date.now()) {
    let w = n.get(S);
    if (w === void 0) w = {
      lastImmediateAt: Number.NEGATIVE_INFINITY,
      pendingIds: [],
      pending: 0,
      timer: void 0,
      pendingSend: void 0
    };
    if (n.delete(S), n.set(S, w), n.size > oe) {
      let A = n.keys().next().value;
      if (A !== void 0 && A !== S) {
        let D = n.get(A);
        if (n.delete(A), D !== void 0) W(D, () => s(R));
      }
    }
    if (R - w.lastImmediateAt >= G && w.pending === 0) {
      if (w.lastImmediateAt = R, s(R)) y([]);
      return;
    }
    if (w.pending++, _ !== void 0 && w.pendingIds.length < zAr) w.pendingIds.push(_);
    if (w.pendingSend = y, w.timer === void 0) w.timer = setTimeout(W, trailMs, w, s), w.timer.unref?.();
  }
  let g = new Map(),
    l = 0,
    d = 0,
    o = 0;
  function report(S, lastReportAt = Date.now()) {
    let y = X(S);
    t(`[peer-guard] drop ${S.reason} from ${y.from}${y.name ? ` (@${y.name})` : ""}`);
    let R = `${S.from}\x00${S.reason}`,
      w = g.get(R);
    if (w && lastReportAt - w.lastReportAt < G) {
      w.suppressed++;
      return;
    }
    if (lastReportAt - l >= G) l = lastReportAt, d = 0;
    if (d >= ke) {
      o++;
      return;
    }
    d++;
    let suppressed = (w?.suppressed ?? 0) + o;
    if (o = 0, g.delete(R), g.set(R, {
      lastReportAt: lastReportAt,
      suppressed: 0
    }), g.size > oe) {
      let C = g.keys().next().value;
      if (C !== void 0) g.delete(C);
    }
    let D = {
      ...S,
      suppressed: suppressed
    };
    t(`[peer-guard] Dropped peer message from ${y.from}${y.name ? ` (@${y.name})` : ""}: ${S.reason}${suppressed > 0 ? ` (+${suppressed} suppressed)` : ""}`, {
      level: "warn"
    }), p("peer_loop_guard", S.reason), ti().ingress.messageDropped.emit(D);
  }
  async function flushPendingReceipts(S = Ee) {
    let _ = [];
    for (let y of n.values()) if (y.pending > 0) _.push(W(y, s));else if (y.timer !== void 0) clearTimeout(y.timer), y.timer = void 0;
    if (_.length === 0) return;
    await Promise.race([Promise.allSettled(_), Q(S, void 0, {
      unref: !0
    })]);
  }
  function dispose() {
    for (let S of n.values()) if (S.timer !== void 0) clearTimeout(S.timer);
    n.clear();
  }
  return {
    report: report,
    noteDropForReceipt: noteDropForReceipt,
    flushPendingReceipts: flushPendingReceipts,
    dispose: dispose
  };
}
var maxQueuedPeerMessages = 50,
  z = {
    ...gsn,
    maxQueuedPeerMessages: maxQueuedPeerMessages
  },
  T = z,
  Le = f(() => u({
    bucketCapacity: E().min(5).max(500).catch(T.bucketCapacity),
    refillPerSecond: E().min(0.05).max(50).catch(T.refillPerSecond),
    dedupWindowMs: E().int().min(0).max(600000).catch(T.dedupWindowMs),
    maxSelfHops: E().int().min(3).max(MFt).catch(T.maxSelfHops),
    maxChainLength: E().int().min(8).max(MFt - 1).catch(T.maxChainLength),
    maxTrackedSenders: E().int().min(16).max(1e5).catch(T.maxTrackedSenders),
    maxQueuedPeerMessages: E().int().min(10).max(5000).catch(T.maxQueuedPeerMessages)
  })),
  Te = 300000;
function qOt() {
  let e = s$("tengu_harbor_kite_limits", z, Te),
    n = Le().safeParse(e);
  if (!n.success) return t("[peer-guard] tengu_harbor_kite_limits is not an object; using defaults", {
    level: "warn"
  }), z;
  return n.data;
}
function ie(e, n = Date.now) {
  let r = new Map();
  function i(l, d) {
    let {
        bucketCapacity: o,
        refillPerSecond: refillPerSecond,
        maxTrackedSenders: maxTrackedSenders
      } = e(),
      h = !1,
      S = U(r, l, maxTrackedSenders, () => (h = !0, {
        tokens: o,
        updatedAt: d,
        sentInBurst: 0,
        burstStartedAt: d
      }), _ => N(_.tokens, _.updatedAt, d, o, refillPerSecond) >= o);
    if (!h) {
      S.tokens = N(S.tokens, S.updatedAt, d, o, refillPerSecond), S.updatedAt = d;
      let _ = o / Math.max(refillPerSecond, 0.000000001) * 1000;
      if (S.tokens >= o || d - S.burstStartedAt > _) S.sentInBurst = 0, S.burstStartedAt = d;
    }
    return S;
  }
  function reserve(l) {
    let d = i(l, n());
    if (!M(d.tokens)) return {
      ok: !1,
      sentInBurst: d.sentInBurst
    };
    d.tokens -= 1, d.sentInBurst += 1;
    let o = d,
      c = !1;
    return {
      ok: !0,
      refund: () => {
        if (c) return;
        c = !0, o.tokens = Math.min(e().bucketCapacity, o.tokens + 1), o.sentInBurst = Math.max(0, o.sentInBurst - 1);
      }
    };
  }
  function credit(l) {
    let d = i(l, n());
    d.tokens = Math.min(e().bucketCapacity, d.tokens + 1), d.sentInBurst = Math.max(0, d.sentInBurst - 1);
  }
  function debit(l) {
    let d = i(l, n());
    d.tokens = Math.max(0, d.tokens - 1), d.sentInBurst += 1;
  }
  return {
    reserve: reserve,
    credit: credit,
    debit: debit
  };
}
var Oe = /[0-9a-f]{32,}/gi;
function se(e) {
  return e.replace(Oe, n => `<hex:${pn(n)}>`);
}
function Uf(e, n = 120) {
  if (/token/i.test(e)) return "(withheld)";
  return qr(se(e), n);
}
function AB(e) {
  if (/token/i.test(e)) return "(redacted: fragment may carry an auth token)";
  return qr(se(e), 200);
}
var de = "no_live_inbox",
  ae = "ENOINBOX",
  ue = "message_too_large";
function ce(e, n) {
  return new P(`Message too large for cross-session delivery: the serialized message is ${e.toLocaleString("en-US")} characters and the limit is ${n.toLocaleString("en-US")}. Shorten the message text \u2014 put bulk content in a file the recipient can read rather than in the message \u2014 or split it into smaller messages.`, "cross-session message exceeds the line cap", ue);
}
function x4e(e) {
  return e instanceof P && e.errorClass === ue;
}
var pe = "sender_paced";
function fe(e) {
  return new P(`Too many messages to this session just now: ${e} were sent recently and more would be dropped by its rate limit, so this one was not sent. Batch what remains into one message, or wait a little before sending more.`, "cross-session sends to one target outpaced its inbox rate limit", pe);
}
function P4e(e) {
  return e instanceof P && e.errorClass === pe;
}
function I1n(e) {
  let n = v(e);
  return n === "ENOENT" || n === "ECONNREFUSED" || e instanceof P && e.errorClass === de;
}
class NoLiveInboxError extends P {
  kind;
  constructor(e, n) {
    super(n, "no live inbox registered for the target pipe", de);
    this.name = "NoLiveInboxError", this.kind = e;
  }
}
function O1n(e) {
  return e instanceof NoLiveInboxError && e.kind === "unusable";
}
function Nae(e) {
  if (O1n(e)) return "busy";
  if (I1n(e)) return "gone";
  let n = v(e);
  return n === "EBUSY" || n === "EAGAIN" ? "busy" : "other";
}
function I4e(e) {
  return ` \u2014 the peer process may have restarted, so this socket path is stale. Call ${e} to get the current address.`;
}
var KAr = " \u2014 the peer is alive but its pipe is momentarily busy. Retry the same address shortly.",
  Fe = " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same address shortly.";
function hsn(e) {
  return O1n(e) ? Fe : KAr;
}
class UdsSendRefusedError extends Error {
  refusal;
  constructor(e, n) {
    super(n);
    this.name = "UdsSendRefusedError", this.refusal = e;
  }
}
function uz(e) {
  if (e instanceof UdsSendRefusedError || I1n(e) || P4e(e) || x4e(e)) return !0;
  let n = v(e);
  return n === "EBUSY" || n === "EAGAIN" || n === "EACCES";
}
function $e(e) {
  if (typeof e !== "object" || e === null) return !1;
  let {
    name: name_2,
    until: until,
    sessionId: sessionId
  } = e;
  return typeof name_2 === "string" && Spt(until) && (sessionId === void 0 || typeof sessionId === "string");
}
function Ge(e) {
  if (!Array.isArray(e)) return [];
  return e.filter($e).slice(0, ZKn).map(({
    name: name_3,
    until: until_2,
    sessionId: sessionId_2
  }) => ({
    name: re(name_3, uC),
    until: until_2,
    ...(sessionId_2 !== void 0 && {
      sessionId: re(sessionId_2, uC)
    })
  }));
}
function je() {
  return ti().outbound.pacer ??= ie(qOt);
}
var Ke = {
  ok: !0,
  refund: () => {}
};
function We() {
  if (a.CLAUDE_CODE_HARBOR_KITE_PACING_OFF) return !1;
  return !x("tengu_harbor_kite_pacing_off", !1);
}
function YAr(e) {
  Se(e, (n, r) => n.credit(r));
}
function M1n(e) {
  Se(e, (n, r) => n.debit(r));
}
function Se(e, n) {
  let pacer = ti().outbound.pacer;
  if (!pacer) return;
  let {
    scheme: scheme,
    target: target
  } = lh(e);
  if (scheme !== "uds") return;
  n(pacer, xv(target) ?? target);
}
async function KOt(e, n, r, i, file_attachments, m, g, {
  trackReceipts = !0,
  expectPeerPid: expectPeerPid,
  expectPeerProcStart: expectPeerProcStart,
  fromPlugin: c
} = {}) {
  let k = LV(),
    h = k ? O1(k) : void 0,
    S = x("tengu_tidy_fern", !0) ? r4n() : void 0,
    content = t5e(h, i, n, S, sfn(m, h ? uNe(h) : void 0), g),
    y = pz(),
    R = {
      ...y,
      type: "user",
      message: {
        role: "user",
        content: content
      },
      priority: "next",
      from: h,
      ...(c !== void 0 && {
        from_plugin: c
      }),
      ...((file_attachments?.length ?? 0) > 0 && {
        file_attachments: file_attachments
      })
    },
    preflightedJson = ye(R),
    D = (h !== void 0 || O() !== "windows") && We() ? je().reserve(xv(e) ?? e) : Ke;
  if (!D.ok) throw t(`[uds-client] paced: not sending to ${Uf(e)} \u2014 ${D.sentInBurst} sent this burst; its inbox rate limit would drop more`), fe(D.sentInBurst);
  if (t(`[uds-client] Sending ${n.length} chars to ${Uf(e)}`), trackReceipts) Xe(y.msg_id, O1(e));
  try {
    await Pe(e, R, r, {
      noFollowSymlink: !0,
      preflightedJson: preflightedJson,
      ...(expectPeerPid !== void 0 && {
        expectPeerPid: expectPeerPid
      }),
      ...(expectPeerProcStart !== void 0 && {
        expectPeerProcStart: expectPeerProcStart
      })
    });
  } catch (error) {
    if (uz(error)) {
      if (D.refund(), trackReceipts) ze(y.msg_id);
    }
    throw error;
  }
  return {
    msgId: y.msg_id
  };
}
var be = 200;
function Xe(msgId, to) {
  let outstandingSends = ti().receipts.outstandingSends;
  if (outstandingSends.length >= be) outstandingSends.shift();
  outstandingSends.push({
    msgId: msgId,
    to: to
  });
}
function ze(e) {
  let outstandingSends_2 = ti().receipts.outstandingSends,
    r = outstandingSends_2.findIndex(item => item.msgId === e);
  if (r !== -1) outstandingSends_2.splice(r, 1);
}
function XAr(e, n) {
  if (typeof e !== "string") return;
  let {
      outstandingSends: outstandingSends_3,
      awaitingTerminal: awaitingTerminal
    } = ti().receipts,
    s = outstandingSends_3.findIndex(item => item.msgId === e);
  if (s !== -1) {
    let [g] = outstandingSends_3.splice(s, 1);
    if (!g) return;
    if (n === "held") {
      if (awaitingTerminal.length >= be) awaitingTerminal.shift();
      awaitingTerminal.push(g);
    }
    return {
      destination: g.to,
      wasHeld: !1
    };
  }
  let m = awaitingTerminal.findIndex(item => item.msgId === e);
  if (m !== -1 && n !== "held") {
    let [g] = awaitingTerminal.splice(m, 1);
    return g ? {
      destination: g.to,
      wasHeld: !0
    } : void 0;
  }
  return;
}
function JAr(e) {
  let n = new Map();
  if (e.length === 0) return n;
  let r = new Set(e),
    {
      outstandingSends: outstandingSends_4,
      awaitingTerminal: awaitingTerminal_2
    } = ti().receipts;
  for (let m of [outstandingSends_4, awaitingTerminal_2]) {
    let g = m === awaitingTerminal_2;
    for (let l = 0; l < m.length;) {
      let d = m[l];
      if (r.delete(d.msgId)) {
        m.splice(l, 1);
        let o = n.get(d.to) ?? {
          dropped: 0,
          wereHeld: 0
        };
        if (o.dropped++, g) o.wereHeld++;
        n.set(d.to, o);
      } else l++;
    }
  }
  return n;
}
function xee(e, n, r = {}) {
  return dat(e, n, pz(), r).then(() => {});
}
async function dat(e, n, r = pz(), {
  expectPeerPid: expectPeerPid_2,
  expectPeerProcStart: expectPeerProcStart_2,
  storageV5: storageV5
} = {}) {
  return t(`[uds-client] Sending control:${n.action} to ${Uf(e)}`), await Pe(e, {
    type: "control",
    ...n,
    ...r
  }, storageV5, {
    noFollowSymlink: !0,
    ...(expectPeerPid_2 !== void 0 && {
      expectPeerPid: expectPeerPid_2
    }),
    ...(expectPeerProcStart_2 !== void 0 && {
      expectPeerProcStart: expectPeerProcStart_2
    })
  }), {
    msgId: r.msg_id
  };
}
var Ve = 150;
async function YOt(e) {
  let n = xv(e);
  if (n === void 0) return;
  for (let r of await F()) {
    if (!r.sock || xv(r.sock) !== n) continue;
    if (await q(r)) return {
      pid: r.pid,
      features: r.peerFeatures,
      sessionId: r.sessionId,
      procStart: r.procStartFt ?? r.procStart
    };
  }
  return;
}
async function QAr(e) {
  let n = L(e),
    r = new Map();
  if (n.length === 0) return r;
  let i = i2(),
    m = (await Promise.all(n.map(item => Z(i, `${item}.json`)))).filter(item => item !== null && Boolean(item.sock)),
    g = await Promise.all(m.map(item => q(item)));
  return m.forEach((item, index) => {
    if (g[index] && item.sock) r.set(item.pid, item.sock);
  }), r;
}
async function q(e) {
  let n = e.procStartFt ?? e.procStart;
  if (n === void 0 || Hh(e.pid)) return !1;
  return (await Kk(e.pid, n)) === !0;
}
function ye(e) {
  let n = b(e),
    r = DLo + n.length + 1;
  if (r > GOt) throw ce(r, GOt);
  return n;
}
async function qe(e) {
  let n = xv(e);
  if (n === void 0) return !1;
  for (let r of await F()) {
    if (!r.sock || xv(r.sock) !== n) continue;
    if (Hh(r.pid)) continue;
    if ((r.procStartFt ?? r.procStart) !== void 0) {
      if (await q(r)) return !0;
      continue;
    }
    if (ua(r.pid)) return !0;
  }
  return !1;
}
async function Pe(path, n, r, {
  noFollowSymlink = !1,
  expectPeerPid: expectPeerPid_3,
  expectPeerProcStart: expectPeerProcStart_3,
  preflightedJson: preflightedJson_2
} = {}) {
  let l = preflightedJson_2 ?? ye(n);
  if (!IN(path)) throw new UdsSendRefusedError("non-local", `Refusing to connect: not a usable local IPC path (remote/UNC host, or a pipe name with extra segments or a trailing dot/space): ${path}`);
  let requireLiveOwner = Zpn(),
    o = await MLo(path, r, {
      requireLiveOwner: requireLiveOwner
    }),
    c = o.kind === "token" ? o.token : void 0;
  if (requireLiveOwner && o.kind !== "token") {
    if (!(o.kind === "no-key" && (await qe(path)))) throw new NoLiveInboxError(o.kind, `No running session has registered an inbox at ${path} (${ae}: ${o.kind}) \u2014 refusing to send to an unvouched pipe`);
    c = void 0;
  }
  let k = c !== void 0 ? b$r(c) : "";
  if (noFollowSymlink && !(O() === "windows" && nY(path) !== void 0)) {
    let S;
    try {
      S = (await Ne(path)).isSymbolicLink();
    } catch (error) {
      if (B(error)) throw error;
      throw t(`[uds-client] reply target unvettable: ${v(error) ?? "lstat failed"}`), new UdsSendRefusedError("unvettable", "Refusing to send: cannot vet reply target");
    }
    if (S) throw new UdsSendRefusedError("symlink", "Refusing to send: reply target is a symlink");
  }
  let h = k + l + `
`;
  return new Promise((S, _) => {
    let y = ge({
        path: path
      }),
      R = !1;
    y.setTimeout(5000, () => {
      R = !0, y.destroy(), _(Error(`Timed out sending to ${path}`));
    }), y.on("error", w => {
      R = !0, _(w);
    }), y.on("connect", () => {
      if (expectPeerPid_3 !== void 0 && O() !== "windows") {
        let w = msn(y);
        if (w === void 0) {
          R = !0, y.destroy(), _(new UdsSendRefusedError("endpoint-unverifiable", "Refusing to send: connected endpoint identity could not be read"));
          return;
        }
        if (w !== expectPeerPid_3) {
          R = !0, y.destroy(), t(`[uds-client] connected endpoint is pid ${w}, expected ${expectPeerPid_3} \u2014 refusing to write`), _(new UdsSendRefusedError("wrong-endpoint", "Refusing to send: connected endpoint is not the expected process"));
          return;
        }
        let A = process.getuid?.(),
          D = K(y);
        if (A !== void 0 && D === null) {
          R = !0, y.destroy(), _(new UdsSendRefusedError("endpoint-unverifiable", "Refusing to send: connected endpoint owner could not be read"));
          return;
        }
        if (A !== void 0 && D !== A) {
          R = !0, y.destroy(), t(`[uds-client] connected endpoint is owned by uid ${D}, not ours \u2014 refusing to write`), _(new UdsSendRefusedError("wrong-endpoint", "Refusing to send: connected endpoint is not owned by this user"));
          return;
        }
        if (expectPeerProcStart_3 !== void 0 && S5e(w) !== expectPeerProcStart_3) {
          R = !0, y.destroy(), t(`[uds-client] connected endpoint pid ${w} is not the process that wrote to us (start token differs \u2014 recycled pid) \u2014 refusing to write`), _(new UdsSendRefusedError("wrong-endpoint", "Refusing to send: connected endpoint is a different process with the expected pid"));
          return;
        }
      }
      if (y.write(h), O() === "macos") setTimeout(w => {
        if (!w.destroyed) w.end();
      }, Ve, y);else y.end();
    }), y.on("close", () => {
      if (!R) t(`[uds-client] Sent to ${Uf(path)}`);
      S();
    });
  });
}
function Y(path_2) {
  return new Promise(n => {
    if (!IN(path_2)) {
      n(!1);
      return;
    }
    let r = ge({
        path: path_2
      }),
      i = s => {
        r.destroy(), n(s);
      };
    r.on("connect", () => i(!0)), r.on("error", s => i(v(s) === "EBUSY")), r.setTimeout(250, () => i(!1));
  });
}
class SessionRecordsUnreadableError extends Error {
  code;
  constructor(e) {
    super("session records directory unreadable");
    this.code = e;
    this.name = "SessionRecordsUnreadableError";
  }
}
async function F(e) {
  let n = i2(),
    r;
  try {
    r = await Me(n);
  } catch (error) {
    if (e?.rejectUnreadable && !B(error)) throw new SessionRecordsUnreadableError(v(error));
    return [];
  }
  return (await Promise.all(r.filter(item => /^\d+\.json$/.test(item)).map(item => Z(n, item, {
    rejectTornLiveRecord: e?.rejectTornLiveRecord
  })))).filter(item => item !== null);
}
async function Z(e, n, r) {
  let i = !1,
    s,
    file = He(e, n);
  try {
    let g = bNo(n);
    if (g === null) return null;
    let {
      pid: pid
    } = g;
    if (!g.canonical) return me(file).catch(() => {}), null;
    s = pid;
    let d = await cl(file, v5e);
    if (d === null) return null;
    i = !0;
    let o = J(d),
      c = SNo(o);
    return {
      sock: typeof o.messagingSocketPath === "string" ? o.messagingSocketPath : "",
      cwd: c.cwd,
      startedAt: c.startedAt,
      ...(h$t(o.nameSince) !== void 0 && {
        nameSince: h$t(o.nameSince)
      }),
      procStart: c.procStart,
      ...(c.procStartFt !== void 0 && {
        procStartFt: c.procStartFt
      }),
      name: typeof o.name === "string" ? o.name : void 0,
      nameSource: o.nameSource === "user" || o.nameSource === "peer" || o.nameSource === "derived" || o.nameSource === "collision" || o.nameSource === "auto" || o.nameSource === "hook" ? o.nameSource : void 0,
      formerNames: Ge(o.formerNames),
      kind: c.kind,
      sessionId: c.sessionId,
      jobId: typeof o.jobId === "string" ? o.jobId : void 0,
      parkedJobId: typeof o.parkedJobId === "string" ? o.parkedJobId : void 0,
      spare: o.spare === !0,
      bridgeSessionId: typeof o.bridgeSessionId === "string" ? o.bridgeSessionId : void 0,
      logPath: typeof o.logPath === "string" ? o.logPath : void 0,
      status: c.status,
      waitingFor: typeof o.waitingFor === "string" ? o.waitingFor : void 0,
      updatedAt: h$t(o.updatedAt),
      statusUpdatedAt: h$t(o.statusUpdatedAt),
      entrypoint: c.entrypoint,
      ...(cpn(o.hostSessionId) !== void 0 && {
        hostSessionId: cpn(o.hostSessionId)
      }),
      ...(c.pidDomain !== void 0 && {
        pidDomain: c.pidDomain
      }),
      agent: typeof o.agent === "string" ? o.agent : void 0,
      state: typeof o.state === "string" ? o.state : void 0,
      detail: typeof o.detail === "string" ? o.detail : void 0,
      tempo: o.tempo === "active" || o.tempo === "idle" || o.tempo === "blocked" ? o.tempo : void 0,
      needs: typeof o.needs === "string" ? o.needs : void 0,
      peerProtocol: typeof o.peerProtocol === "number" ? o.peerProtocol : void 0,
      ...(Array.isArray(o.peerFeatures) && {
        peerFeatures: Je(o.peerFeatures)
      }),
      ...{},
      tmux: typeof o.tmux === "string" ? o.tmux : void 0,
      pid: pid,
      file: file
    };
  } catch {
    if (r?.rejectTornLiveRecord && i && s !== void 0 && ua(s)) {
      if (!r.isReread) return await Q(efn), Z(e, n, {
        ...r,
        isReread: !0
      });
      let [g, l] = await Promise.all([Ue(file).then(d => d.mtimeMs, () => {
        return;
      }), w5e(s)]);
      if (g !== void 0 && l !== null && l > g + 2000) return null;
      if (l === null && !ua(s)) return null;
      throw new SessionRecordsUnreadableError("EBADRECORD");
    }
    return null;
  }
}
function we(e, n) {
  return e.pidDomain !== void 0 && e.pidDomain !== n;
}
async function q3o(e, n) {
  let r = await MI();
  return e.some(item => item.sessionId === n && we(item, r));
}
async function JOt() {
  return (await F({
    rejectUnreadable: !0
  })).map(({
    file: file_2,
    ...n
  }) => n);
}
function V(e, n, r, i) {
  if (H() && i !== void 0) {
    i.delete(Ae.session(Be(e))).then(s => s.ok && s.value.existed ? o4n(le(e), n, r, i) : void 0).catch(() => {});
    return;
  }
  me(e).then(() => o4n(le(e), n, r, i)).catch(() => {});
}
async function N3(e, n) {
  let r = await F({
      rejectUnreadable: n?.rejectUnreadable === !0,
      rejectTornLiveRecord: n?.rejectUnreadable === !0
    }),
    i = n?.rejectUnreadable === !0 ? await MI() : void 0,
    s = c => i !== void 0 && we(c, i),
    m = r.map(item => s(item) || ua(item.pid)),
    g = await Promise.all(r.map((item, index) => m[index] && (s(item) || M_(item.pid, item.procStartFt ?? item.procStart)))),
    l = await CRe(),
    d = l ? await MI() : "",
    o = [];
  for (let c = 0; c < r.length; c++) {
    let {
      file: file_3,
      ...h
    } = r[c];
    if (g[c]) o.push(h);else if (l && fpn(h, d) && Hh(h.pid)) V(file_3, h.pid, d, e);
  }
  return o;
}
function LV() {
  return Gw.CLAUDE_CODE_MESSAGING_SOCKET;
}
async function ZAr() {
  let e = LV();
  if (e === void 0) return !1;
  let n = await F(),
    r = await MI(),
    i = n.filter(item => item.sock && item.pid !== process.pid && !ne(item) && f$e({
      sock: item.sock
    }) && hJ(item.sock, e));
  return (await Promise.all(i.map(async item => (await ee(item, r)) === "present" && (await Y(item.sock))))).some(Boolean);
}
async function ee(e, n) {
  if (e.pidDomain !== n) return "present";
  if (Hh(e.pid)) return "gone";
  let r = e.procStartFt ?? e.procStart;
  if (r === void 0) return "present";
  let i = await $c(e.pid);
  if (i === void 0 || R$e(r, i)) return "present";
  return (await Kk(e.pid, r)) === !1 ? "recycled" : "present";
}
async function exr(e) {
  let n = LV(),
    r = (await F({
      rejectUnreadable: !0
    })).filter(item => item.sock && !(n && Bce(item.sock, n)) && !ne(item)),
    [i, s] = await Promise.all([CRe(), MI()]),
    [m, g] = await Promise.all([Promise.all(r.map(item => Y(item.sock))), Promise.all(r.map(item => ee(item, s)))]),
    l = [];
  for (let d = 0; d < r.length; d++) {
    let {
      file: file_4,
      ...c
    } = r[d];
    if (g[d] === "gone") {
      if (i && Hh(c.pid)) V(file_4, c.pid, s, e);
    } else if (g[d] === "recycled") continue;else if (m[d]) l.push(c);else if (i && fpn(c, s) && Hh(c.pid)) V(file_4, c.pid, s, e);
  }
  return l;
}
async function QOt(e) {
  let n = LV(),
    r = await F(),
    i = o => Boolean(o.sock) && !(n && Bce(o.sock, n)),
    s = new Set(r.filter(item => item.sessionId === e && item.parkedJobId !== void 0).map(item => item.parkedJobId)),
    m = r.filter(item => i(item) && !ne(item)),
    g = m.filter(item => item.sessionId === e),
    l = m.filter(item => item.sessionId !== e && item.jobId !== void 0 && s.has(item.jobId)),
    d = await MI();
  for (let o of g.concat(l)) {
    let {
      file: file_5,
      ...k
    } = o;
    if ((await ee(k, d)) === "present" && (await Y(k.sock))) return k;
  }
  return null;
}
function ne(e) {
  return e.spare === !0 || e.parkedJobId !== void 0;
}
function Je(e) {
  return ri(e).filter(item => /^[a-z0-9_]{1,32}$/.test(item)).slice(0, 16);
}
export { Uf, AB, xEo, msn, GOt, gsn, WAr, PEo, zAr, GAr, VOt, VAr, IEo, qAr, qOt, x4e, P4e, I1n, O1n, Nae, I4e, KAr, hsn, UdsSendRefusedError as DV, uz, YAr, M1n, KOt, XAr, JAr, xee, dat, YOt, QAr, SessionRecordsUnreadableError as XOt, q3o, JOt, N3, LV, ZAr, exr, QOt };