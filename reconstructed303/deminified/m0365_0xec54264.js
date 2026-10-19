// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { U6n, _Nr, vNr, kWe, kNr, z6n, E, c2 } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { L, oa } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { x, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { a, oC } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O, qs, ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { am, Ayt, GEe, ek, Uh, ad, mQe } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { eR } from "B:/~BUN/root/chunk-m3q01n4y.js";
import { al, wyt, KO, zMe, u4, Ucn, _2s, Y3n, Eyt, gy, ZN, jEe, Nle, ene } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { W3n, z3n, Qte, ZC, i2s, UNo, a2s, aQe } from "B:/~BUN/root/chunk-e4q58xft.js";
import { ga } from "B:/~BUN/root/chunk-vqar0j99.js";
import { W8e } from "B:/~BUN/root/chunk-tsyp86a9.js";
import { Wve } from "B:/~BUN/root/chunk-ft39p62b.js";
import { s3 } from "B:/~BUN/root/chunk-nbprdt7j.js";
import { xyt, x2s, YUt, qcn, P2s, Ia } from "B:/~BUN/root/chunk-9xr0x7gd.js";
import { an } from "B:/~BUN/root/chunk-31x8pa20.js";
import { v, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
function N(e, n, r, i, d) {
  let m = Math.max(0, r - n) / 1000;
  return Math.min(i, e + m * d);
}
function M(e) {
  return e >= 1;
}
function U(e, n, r, i, d = () => !0) {
  let m = e.get(n);
  if (m !== void 0) return e.delete(n), e.set(n, m), m;
  while (e.size >= Math.max(1, r)) {
    let l;
    for (let [s, o] of e) if (d(o)) {
      l = s;
      break;
    }
    if (l ??= e.keys().next().value, l === void 0) break;
    e.delete(l);
  }
  let g = i();
  return e.set(n, g), g;
}
var Wzn = {
  bucketCapacity: 30,
  refillPerSecond: 0.5,
  dedupWindowMs: 30000,
  maxSelfHops: 10,
  maxChainLength: 28,
  maxTrackedSenders: 256
};
function he(e, n) {
  if (!e || n.size === 0) return 0;
  let r = 0;
  for (let i of e) if (n.has(i)) r++;
  return r;
}
function wEo(e = {}, n) {
  let r = {
      ...Wzn,
      now: () => Date.now(),
      ...e
    },
    i = () => n ? {
      ...r,
      ...n()
    } : r,
    d = new Map();
  function m(s, o) {
    return U(d, s, o.maxTrackedSenders, () => ({
      tokens: o.bucketCapacity,
      lastRefill: o.now(),
      lastBody: void 0,
      lastBodyAt: 0
    }));
  }
  function checkHopChain(s, o) {
    let c = i();
    if (s !== void 0 && s.length > c.maxChainLength) return {
      admitted: !1,
      reason: "hop-runaway"
    };
    if (he(s, o) >= c.maxSelfHops) return {
      admitted: !1,
      reason: "hop-loop"
    };
    return;
  }
  function admit(s) {
    let o = i(),
      c = o.now(),
      R = checkHopChain(s.hopChain, s.ownTokens);
    if (R) return R;
    let w = m(s.senderKey, o);
    if (w.lastBody !== void 0 && w.lastBody === s.body && c - w.lastBodyAt < o.dedupWindowMs) return {
      admitted: !1,
      reason: "duplicate"
    };
    if (w.tokens = N(w.tokens, w.lastRefill, c, o.bucketCapacity, o.refillPerSecond), w.lastRefill = c, !M(w.tokens)) return {
      admitted: !1,
      reason: "rate-limited"
    };
    return w.tokens -= 1, w.lastBody = s.body, w.lastBodyAt = c, {
      admitted: !0
    };
  }
  return {
    admit: admit,
    checkHopChain: checkHopChain,
    trackedSenderCount: () => d.size
  };
}
var Re = {
  "rate-limited": !0,
  duplicate: !0,
  "hop-loop": !0,
  "hop-runaway": !0,
  "queue-full": !0
};
function ke(e) {
  return typeof e === "string" && Object.hasOwn(Re, e);
}
function mMs(e) {
  return ke(e) ? e : void 0;
}
var vEo = 256,
  B = 60000,
  re = 256,
  Ie = 20;
function kEo(e) {
  ga().ingress.ownUdsHopToken = e === void 0 ? void 0 : W8e(e);
}
function _rn(e) {
  ga().ingress.ownBridgePeerAddressResolver = e;
}
function EEo() {
  let {
      ownUdsHopToken: ownUdsHopToken,
      ownBridgePeerAddressResolver: ownBridgePeerAddressResolver
    } = ga().ingress,
    r = new Set();
  if (ownUdsHopToken) r.add(ownUdsHopToken);
  let i = ownBridgePeerAddressResolver?.();
  if (i) r.add(W8e(i));
  let d = Wve();
  if (d) r.add(W8e(zMe(d)));
  return r;
}
var Ee = {
  "rate-limited": "sender exceeded the peer message rate limit",
  duplicate: "identical to the previous message from this sender",
  "hop-loop": "message has already passed through this session (a peer messaging loop)",
  "hop-runaway": "peer relay chain is too long (runaway forwarding)",
  "queue-full": "this session has too many undelivered peer messages queued"
};
function X(e) {
  return {
    from: _2s(e.from) ? e.from : "(unrenderable sender address)",
    name: e.name ? wyt(e.name) : ""
  };
}
function gMs(e) {
  let {
      from: n
    } = X(e),
    {
      name: name
    } = X(e),
    i = name ? `@${name} (${n})` : n,
    d = e.suppressed > 0 ? ` (+${e.suppressed} similar ${O(e.suppressed, "drop")} suppressed)` : "";
  return `Dropped a peer message from ${i}: ${Ee[e.reason]}.${d}`;
}
var xe = 500,
  Ae = 5000,
  ve = 40;
function K(e, n) {
  if (e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  let {
    pending: pending,
    pendingIds: pendingIds,
    pendingSend: pendingSend
  } = e;
  if (e.pending = 0, e.pendingIds = [], e.pendingSend = void 0, pending > 0 && pendingSend && n()) return pendingSend(pendingIds);
}
function TEo({
  trailMs = Ae
} = {}) {
  let n = new Map(),
    r = 0,
    i = 0;
  function d(S = Date.now()) {
    if (S - r >= B) r = S, i = 0;
    if (i >= ve) return !1;
    return i++, !0;
  }
  function noteDropForReceipt(S, P, b, h = Date.now()) {
    let y = n.get(S);
    if (y === void 0) y = {
      lastImmediateAt: Number.NEGATIVE_INFINITY,
      pendingIds: [],
      pending: 0,
      timer: void 0,
      pendingSend: void 0
    };
    if (n.delete(S), n.set(S, y), n.size > re) {
      let A = n.keys().next().value;
      if (A !== void 0 && A !== S) {
        let D = n.get(A);
        if (n.delete(A), D !== void 0) K(D, () => d(h));
      }
    }
    if (h - y.lastImmediateAt >= B && y.pending === 0) {
      if (y.lastImmediateAt = h, d(h)) b([]);
      return;
    }
    if (y.pending++, P !== void 0 && y.pendingIds.length < vEo) y.pendingIds.push(P);
    if (y.pendingSend = b, y.timer === void 0) y.timer = setTimeout(K, trailMs, y, d), y.timer.unref?.();
  }
  let g = new Map(),
    l = 0,
    s = 0,
    o = 0;
  function report(S, lastReportAt = Date.now()) {
    let b = X(S);
    t(`[peer-guard] drop ${S.reason} from ${b.from}${b.name ? ` (@${b.name})` : ""}`);
    let h = `${S.from}\x00${S.reason}`,
      y = g.get(h);
    if (y && lastReportAt - y.lastReportAt < B) {
      y.suppressed++;
      return;
    }
    if (lastReportAt - l >= B) l = lastReportAt, s = 0;
    if (s >= Ie) {
      o++;
      return;
    }
    s++;
    let suppressed = (y?.suppressed ?? 0) + o;
    if (o = 0, g.delete(h), g.set(h, {
      lastReportAt: lastReportAt,
      suppressed: 0
    }), g.size > re) {
      let T = g.keys().next().value;
      if (T !== void 0) g.delete(T);
    }
    let D = {
      ...S,
      suppressed: suppressed
    };
    t(`[peer-guard] Dropped peer message from ${b.from}${b.name ? ` (@${b.name})` : ""}: ${S.reason}${suppressed > 0 ? ` (+${suppressed} suppressed)` : ""}`, {
      level: "warn"
    }), p("peer_loop_guard", S.reason), ga().ingress.messageDropped.emit(D);
  }
  async function flushPendingReceipts(S = xe) {
    let P = [];
    for (let b of n.values()) if (b.pending > 0) P.push(K(b, d));else if (b.timer !== void 0) clearTimeout(b.timer), b.timer = void 0;
    if (P.length === 0) return;
    await Promise.race([Promise.allSettled(P), Y(S, void 0, {
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
    ...Wzn,
    maxQueuedPeerMessages: maxQueuedPeerMessages
  },
  C = z,
  De = f(() => u({
    bucketCapacity: v().min(5).max(500).catch(C.bucketCapacity),
    refillPerSecond: v().min(0.05).max(50).catch(C.refillPerSecond),
    dedupWindowMs: v().int().min(0).max(600000).catch(C.dedupWindowMs),
    maxSelfHops: v().int().min(3).max(Ucn).catch(C.maxSelfHops),
    maxChainLength: v().int().min(8).max(Ucn - 1).catch(C.maxChainLength),
    maxTrackedSenders: v().int().min(16).max(1e5).catch(C.maxTrackedSenders),
    maxQueuedPeerMessages: v().int().min(10).max(5000).catch(C.maxQueuedPeerMessages)
  })),
  Le = 300000;
function brn() {
  let e = c2("tengu_harbor_kite_limits", z, Le),
    n = De().safeParse(e);
  if (!n.success) return t("[peer-guard] tengu_harbor_kite_limits is not an object; using defaults", {
    level: "warn"
  }), z;
  return n.data;
}
var Te = /[0-9a-f]{32,}/gi;
function oe(e) {
  return e.replace(Te, n => `<hex:${an(n)}>`);
}
function ph(e, n = 120) {
  if (/token/i.test(e)) return "(withheld)";
  return qs(oe(e), n);
}
function fK(e) {
  if (/token/i.test(e)) return "(redacted: fragment may carry an auth token)";
  return qs(oe(e), 200);
}
function jzn(e) {
  if (I() === "windows") return null;
  let n = ie(e);
  if (n < 0) return null;
  try {
    return Bun.ant.getPeerUid(n);
  } catch (error) {
    return t(`[daemon] peer uid lookup failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    }), null;
  }
}
function fMs(e, n = jzn) {
  let r = process.getuid?.();
  if (r == null) return null;
  let i = n(e);
  if (i == null) return null;
  if (i === r) return null;
  let d = `permission denied: connecting uid ${i} != daemon uid ${r} (retry without sudo, or as the daemon owner)`;
  return t(`[daemon] rejecting control connection: ${d}`, {
    level: "error"
  }), d;
}
function $pt(e) {
  if (I() === "windows") return;
  let n = ie(e);
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
function ie(e) {
  let _handle = e._handle;
  return typeof _handle?.fd === "number" ? _handle.fd : -1;
}
import { lstat as Fe, readdir as Ne, stat as Me, unlink as ge } from "fs/promises";
import { connect as Se } from "net";
import { basename as Ue, dirname as me, join as He } from "path";
var yrn = 1048576;
function se(e, n = Date.now) {
  let r = new Map();
  function i(l, s) {
    let {
        bucketCapacity: o,
        refillPerSecond: refillPerSecond,
        maxTrackedSenders: maxTrackedSenders
      } = e(),
      w = !1,
      S = U(r, l, maxTrackedSenders, () => (w = !0, {
        tokens: o,
        updatedAt: s,
        sentInBurst: 0,
        burstStartedAt: s
      }), P => N(P.tokens, P.updatedAt, s, o, refillPerSecond) >= o);
    if (!w) {
      S.tokens = N(S.tokens, S.updatedAt, s, o, refillPerSecond), S.updatedAt = s;
      let P = o / Math.max(refillPerSecond, 0.000000001) * 1000;
      if (S.tokens >= o || s - S.burstStartedAt > P) S.sentInBurst = 0, S.burstStartedAt = s;
    }
    return S;
  }
  function reserve(l) {
    let s = i(l, n());
    if (!M(s.tokens)) return {
      ok: !1,
      sentInBurst: s.sentInBurst
    };
    s.tokens -= 1, s.sentInBurst += 1;
    let o = s,
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
    let s = i(l, n());
    s.tokens = Math.min(e().bucketCapacity, s.tokens + 1), s.sentInBurst = Math.max(0, s.sentInBurst - 1);
  }
  function debit(l) {
    let s = i(l, n());
    s.tokens = Math.max(0, s.tokens - 1), s.sentInBurst += 1;
  }
  return {
    reserve: reserve,
    credit: credit,
    debit: debit
  };
}
var de = "no_live_inbox",
  ae = "ENOINBOX",
  ue = "message_too_large";
function ce(e, n) {
  return new x(`Message too large for cross-session delivery: the serialized message is ${e.toLocaleString("en-US")} characters and the limit is ${n.toLocaleString("en-US")}. Shorten the message text \u2014 put bulk content in a file the recipient can read rather than in the message \u2014 or split it into smaller messages.`, "cross-session message exceeds the line cap", ue);
}
function Upt(e) {
  return e instanceof x && e.errorClass === ue;
}
var pe = "sender_paced";
function fe(e) {
  return new x(`Too many messages to this session just now: ${e} were sent recently and more would be dropped by its rate limit, so this one was not sent. Batch what remains into one message, or wait a little before sending more.`, "cross-session sends to one target outpaced its inbox rate limit", pe);
}
function Bpt(e) {
  return e instanceof x && e.errorClass === pe;
}
function UAr(e) {
  let n = k(e);
  return n === "ENOENT" || n === "ECONNREFUSED" || e instanceof x && e.errorClass === de;
}
class NoLiveInboxError extends x {
  kind;
  constructor(e, n) {
    super(n, "no live inbox registered for the target pipe", de);
    this.name = "NoLiveInboxError", this.kind = e;
  }
}
function BAr(e) {
  return e instanceof NoLiveInboxError && e.kind === "unusable";
}
function Lve(e) {
  if (BAr(e)) return "busy";
  if (UAr(e)) return "gone";
  let n = k(e);
  return n === "EBUSY" || n === "EAGAIN" ? "busy" : "other";
}
function jpt(e) {
  return ` \u2014 the peer process may have restarted, so this socket path is stale. Call ${e} to get the current address.`;
}
var CEo = " \u2014 the peer is alive but its pipe is momentarily busy. Retry the same address shortly.",
  Ce = " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same address shortly.";
function zzn(e) {
  return BAr(e) ? Ce : CEo;
}
class UdsSendRefusedError extends Error {
  refusal;
  constructor(e, n) {
    super(n);
    this.name = "UdsSendRefusedError", this.refusal = e;
  }
}
function o3(e) {
  if (e instanceof UdsSendRefusedError || UAr(e) || Bpt(e) || Upt(e)) return !0;
  let n = k(e);
  return n === "EBUSY" || n === "EAGAIN" || n === "EACCES";
}
function $e(e) {
  if (typeof e !== "object" || e === null) return !1;
  let {
    name: name_2,
    until: until,
    sessionId: sessionId
  } = e;
  return typeof name_2 === "string" && YUt(until) && (sessionId === void 0 || typeof sessionId === "string");
}
function Ge(e) {
  if (!Array.isArray(e)) return [];
  return e.filter($e).slice(0, _Nr).map(({
    name: name_3,
    until: until_2,
    sessionId: sessionId_2
  }) => ({
    name: ne(name_3, KO),
    until: until_2,
    ...(sessionId_2 !== void 0 && {
      sessionId: ne(sessionId_2, KO)
    })
  }));
}
function je() {
  return ga().outbound.pacer ??= se(brn);
}
var Ke = {
  ok: !0,
  refund: () => {}
};
function We() {
  if (a.CLAUDE_CODE_HARBOR_KITE_PACING_OFF) return !1;
  return !E("tengu_harbor_kite_pacing_off", !1);
}
function REo(e) {
  be(e, (n, r) => n.credit(r));
}
function jAr(e) {
  be(e, (n, r) => n.debit(r));
}
function be(e, n) {
  let pacer = ga().outbound.pacer;
  if (!pacer) return;
  let {
    scheme: scheme,
    target: target
  } = gy(e);
  if (scheme !== "uds") return;
  n(pacer, ZC(target) ?? target);
}
async function Srn(e, n, r, i, file_attachments, m, g, {
  trackReceipts = !0,
  expectPeerPid: expectPeerPid,
  expectPeerProcStart: expectPeerProcStart,
  fromPlugin: c,
  recipientName: recipientName
} = {}) {
  let w = gX(),
    S = w ? u4(w) : void 0,
    P = E("tengu_tidy_fern", !0) ? vNr() : void 0,
    content = Eyt(S, i, n, P, Y3n(m, S ? W8e(S) : void 0), g),
    h = s3(),
    y = {
      ...h,
      type: "user",
      message: {
        role: "user",
        content: content
      },
      priority: "next",
      from: S,
      ...(c !== void 0 && {
        from_plugin: c
      }),
      ...((file_attachments?.length ?? 0) > 0 && {
        file_attachments: file_attachments
      })
    },
    preflightedJson = Pe(y),
    T = (S !== void 0 || I() !== "windows") && We() ? je().reserve(ZC(e) ?? e) : Ke;
  if (!T.ok) throw t(`[uds-client] paced: not sending to ${ph(e)} \u2014 ${T.sentInBurst} sent this burst; its inbox rate limit would drop more`), fe(T.sentInBurst);
  if (t(`[uds-client] Sending ${n.length} chars to ${ph(e)}`), trackReceipts) Xe(h.msg_id, u4(e), recipientName);
  try {
    await we(e, y, r, {
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
    if (o3(error)) {
      if (T.refund(), trackReceipts) ze(h.msg_id);
    }
    throw error;
  }
  return {
    msgId: h.msg_id
  };
}
var ye = 200;
function Xe(msgId, to, r) {
  let outstandingSends = ga().receipts.outstandingSends;
  if (outstandingSends.length >= ye) outstandingSends.shift();
  outstandingSends.push({
    msgId: msgId,
    to: to,
    handle: wyt(r ?? "", 1 / 0) || void 0
  });
}
function ze(e) {
  let outstandingSends_2 = ga().receipts.outstandingSends,
    r = outstandingSends_2.findIndex(item => item.msgId === e);
  if (r !== -1) outstandingSends_2.splice(r, 1);
}
function AEo(e, n) {
  if (typeof e !== "string") return;
  let {
      outstandingSends: outstandingSends_3,
      awaitingTerminal: awaitingTerminal
    } = ga().receipts,
    d = outstandingSends_3.findIndex(item => item.msgId === e);
  if (d !== -1) {
    let [sent] = outstandingSends_3.splice(d, 1);
    if (!sent) return;
    if (n === "held") {
      if (awaitingTerminal.length >= ye) awaitingTerminal.shift();
      awaitingTerminal.push(sent);
    }
    return {
      sent: sent,
      wasHeld: !1
    };
  }
  let m = awaitingTerminal.findIndex(item => item.msgId === e);
  if (m !== -1 && n !== "held") {
    let [sent_2] = awaitingTerminal.splice(m, 1);
    return sent_2 ? {
      sent: sent_2,
      wasHeld: !0
    } : void 0;
  }
  return;
}
function xEo(e) {
  let n = new Map();
  if (e.length === 0) return n;
  let r = new Set(e),
    {
      outstandingSends: outstandingSends_4,
      awaitingTerminal: awaitingTerminal_2
    } = ga().receipts;
  for (let m of [outstandingSends_4, awaitingTerminal_2]) {
    let g = m === awaitingTerminal_2;
    for (let l = 0; l < m.length;) {
      let s = m[l];
      if (r.delete(s.msgId)) {
        m.splice(l, 1);
        let o = n.get(s.to) ?? {
          sends: [],
          wereHeld: 0
        };
        if (o.sends.push(s), g) o.wereHeld++;
        n.set(s.to, o);
      } else l++;
    }
  }
  return n;
}
function Vfe(e, n, r = {}) {
  return zDt(e, n, s3(), r).then(() => {});
}
async function zDt(e, n, r = s3(), {
  expectPeerPid: expectPeerPid_2,
  expectPeerProcStart: expectPeerProcStart_2,
  storageV5: storageV5
} = {}) {
  return t(`[uds-client] Sending control:${n.action} to ${ph(e)}`), await we(e, {
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
var Je = 150;
async function wrn(e) {
  let n = ZC(e);
  if (n === void 0) return;
  for (let r of await F()) {
    if (!r.sock || ZC(r.sock) !== n) continue;
    if (await q(r)) return {
      pid: r.pid,
      features: r.peerFeatures,
      sessionId: r.sessionId,
      procStart: r.procStartFt ?? r.procStart
    };
  }
  return;
}
async function PEo(e) {
  let n = L(e),
    r = new Map();
  if (n.length === 0) return r;
  let i = Qte(),
    m = (await Promise.all(n.map(item => j(i, `${item}.json`)))).filter(item => item !== null && Boolean(item.sock)),
    g = await Promise.all(m.map(item => q(item)));
  return m.forEach((item, index) => {
    if (g[index] && item.sock) r.set(item.pid, item.sock);
  }), r;
}
async function Qoi(e, n) {
  let r = await j(Qte(), `${e}.json`, {
    rejectTornLiveRecord: !0
  });
  return r?.jobId === n ? r.status : void 0;
}
async function q(e) {
  let n = e.procStartFt ?? e.procStart;
  if (n === void 0 || am(e.pid)) return !1;
  return (await Uh(e.pid, n)) === !0;
}
function Pe(e) {
  let n = _(e),
    r = a2s + n.length + 1;
  if (r > yrn) throw ce(r, yrn);
  return n;
}
async function Ve(e) {
  let n = ZC(e);
  if (n === void 0) return !1;
  for (let r of await F()) {
    if (!r.sock || ZC(r.sock) !== n) continue;
    if (am(r.pid)) continue;
    if ((r.procStartFt ?? r.procStart) !== void 0) {
      if (await q(r)) return !0;
      continue;
    }
    if (Ia(r.pid)) return !0;
  }
  return !1;
}
async function we(path, n, r, {
  noFollowSymlink = !1,
  expectPeerPid: expectPeerPid_3,
  expectPeerProcStart: expectPeerProcStart_3,
  preflightedJson: preflightedJson_2
} = {}) {
  let l = preflightedJson_2 ?? Pe(n);
  if (!ZN(path)) throw new UdsSendRefusedError("non-local", `Refusing to connect: not a usable local IPC path (remote/UNC host, or a pipe name with extra segments or a trailing dot/space): ${path}`);
  let requireLiveOwner = W3n(),
    o = await i2s(path, r, {
      requireLiveOwner: requireLiveOwner
    }),
    c = o.kind === "token" ? o.token : void 0;
  if (requireLiveOwner && o.kind !== "token") {
    if (!(o.kind === "no-key" && (await Ve(path)))) throw new NoLiveInboxError(o.kind, `No running session has registered an inbox at ${path} (${ae}: ${o.kind}) \u2014 refusing to send to an unvouched pipe`);
    c = void 0;
  }
  let R = c !== void 0 ? UNo(c) : "";
  if (noFollowSymlink && !(I() === "windows" && ene(path) !== void 0)) {
    let S;
    try {
      S = (await Fe(path)).isSymbolicLink();
    } catch (error) {
      if (G(error)) throw error;
      throw t(`[uds-client] reply target unvettable: ${k(error) ?? "lstat failed"}`), new UdsSendRefusedError("unvettable", "Refusing to send: cannot vet reply target");
    }
    if (S) throw new UdsSendRefusedError("symlink", "Refusing to send: reply target is a symlink");
  }
  let w = R + l + `
`;
  return new Promise((S, P) => {
    let b = Se({
        path: path
      }),
      h = !1;
    b.setTimeout(5000, () => {
      h = !0, b.destroy(), P(Error(`Timed out sending to ${path}`));
    }), b.on("error", y => {
      h = !0, P(y);
    }), b.on("connect", () => {
      if (expectPeerPid_3 !== void 0 && I() !== "windows") {
        let y = $pt(b);
        if (y === void 0) {
          h = !0, b.destroy(), P(new UdsSendRefusedError("endpoint-unverifiable", "Refusing to send: connected endpoint identity could not be read"));
          return;
        }
        if (y !== expectPeerPid_3) {
          h = !0, b.destroy(), t(`[uds-client] connected endpoint is pid ${y}, expected ${expectPeerPid_3} \u2014 refusing to write`), P(new UdsSendRefusedError("wrong-endpoint", "Refusing to send: connected endpoint is not the expected process"));
          return;
        }
        let A = process.getuid?.(),
          D = jzn(b);
        if (A !== void 0 && D === null) {
          h = !0, b.destroy(), P(new UdsSendRefusedError("endpoint-unverifiable", "Refusing to send: connected endpoint owner could not be read"));
          return;
        }
        if (A !== void 0 && D !== A) {
          h = !0, b.destroy(), t(`[uds-client] connected endpoint is owned by uid ${D}, not ours \u2014 refusing to write`), P(new UdsSendRefusedError("wrong-endpoint", "Refusing to send: connected endpoint is not owned by this user"));
          return;
        }
        if (expectPeerProcStart_3 !== void 0 && Ayt(y) !== expectPeerProcStart_3) {
          h = !0, b.destroy(), t(`[uds-client] connected endpoint pid ${y} is not the process that wrote to us (start token differs \u2014 recycled pid) \u2014 refusing to write`), P(new UdsSendRefusedError("wrong-endpoint", "Refusing to send: connected endpoint is a different process with the expected pid"));
          return;
        }
      }
      if (b.write(w), I() === "macos") setTimeout(y => {
        if (!y.destroyed) y.end();
      }, Je, b);else b.end();
    }), b.on("close", () => {
      if (!h) t(`[uds-client] Sent to ${ph(path)}`);
      S();
    });
  });
}
function Q(path_2) {
  return new Promise(n => {
    if (!ZN(path_2)) {
      n(!1);
      return;
    }
    let r = Se({
        path: path_2
      }),
      i = d => {
        r.destroy(), n(d);
      };
    r.on("connect", () => i(!0)), r.on("error", d => i(k(d) === "EBUSY")), r.setTimeout(250, () => i(!1));
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
  let n = Qte(),
    r;
  try {
    r = await Ne(n);
  } catch (error) {
    if (e?.rejectUnreadable && !G(error)) throw new SessionRecordsUnreadableError(k(error));
    return [];
  }
  return (await Promise.all(r.filter(item => /^\d+\.json$/.test(item)).map(item => j(n, item, {
    rejectTornLiveRecord: e?.rejectTornLiveRecord
  })))).filter(item => item !== null);
}
async function j(e, n, r) {
  let i = !1,
    d,
    file = He(e, n);
  try {
    let g = x2s(n);
    if (g === null) return null;
    let {
      pid: pid
    } = g;
    if (!g.canonical) return ge(file).catch(() => {}), null;
    d = pid;
    let s = await al(file, xyt);
    if (s === null) return null;
    i = !0;
    let o = J(s),
      c = P2s(o);
    return {
      sock: typeof o.messagingSocketPath === "string" ? o.messagingSocketPath : "",
      cwd: c.cwd,
      startedAt: c.startedAt,
      ...(qcn(o.nameSince) !== void 0 && {
        nameSince: qcn(o.nameSince)
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
      ...{},
      updatedAt: qcn(o.updatedAt),
      statusUpdatedAt: qcn(o.statusUpdatedAt),
      entrypoint: c.entrypoint,
      ...(U6n(o.hostSessionId) !== void 0 && {
        hostSessionId: U6n(o.hostSessionId)
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
        peerFeatures: qe(o.peerFeatures)
      }),
      ...{},
      tmux: typeof o.tmux === "string" ? o.tmux : void 0,
      pid: pid,
      file: file
    };
  } catch {
    if (r?.rejectTornLiveRecord && i && d !== void 0 && Ia(d)) {
      if (!r.isReread) return await Y(z3n), j(e, n, {
        ...r,
        isReread: !0
      });
      let [g, l] = await Promise.all([Me(file).then(s => s.mtimeMs, () => {
        return;
      }), mQe(d)]);
      if (g !== void 0 && l !== null && l > g + 2000) return null;
      if (l === null && !Ia(d)) return null;
      throw new SessionRecordsUnreadableError("EBADRECORD");
    }
    return null;
  }
}
function _e(e, n) {
  return e.pidDomain !== void 0 && e.pidDomain !== n;
}
async function Zoi(e, n) {
  let r = await eR();
  return e.some(item => item.sessionId === n && _e(item, r));
}
async function krn() {
  return (await F({
    rejectUnreadable: !0
  })).map(({
    file: file_2,
    ...n
  }) => n);
}
function V(e, n, r, i) {
  if (W() && i !== void 0) {
    i.delete(Be.session(Ue(e))).then(d => d.ok && d.value.existed ? kNr(me(e), n, r, i) : void 0).catch(() => {});
    return;
  }
  ge(e).then(() => kNr(me(e), n, r, i)).catch(() => {});
}
async function Oee(e, n) {
  let r = await F({
      rejectUnreadable: n?.rejectUnreadable === !0,
      rejectTornLiveRecord: n?.rejectUnreadable === !0
    }),
    i = n?.rejectUnreadable === !0 ? await eR() : void 0,
    d = c => i !== void 0 && _e(c, i),
    m = r.map(item => d(item) || Ia(item.pid)),
    g = await Promise.all(r.map((item, index) => m[index] && (d(item) || ek(item.pid, item.procStartFt ?? item.procStart)))),
    l = await kWe(),
    s = l ? await eR() : "",
    o = [];
  for (let c = 0; c < r.length; c++) {
    let {
      file: file_3,
      ...w
    } = r[c];
    if (g[c]) o.push(w);else if (l && z6n(w, s) && am(w.pid)) V(file_3, w.pid, s, e);
  }
  return o;
}
function gX() {
  return oC.CLAUDE_CODE_MESSAGING_SOCKET;
}
async function OEo() {
  let e = gX();
  if (e === void 0) return !1;
  let n = await F(),
    r = await eR(),
    i = n.filter(item => item.sock && item.pid !== process.pid && !ee(item) && aQe({
      sock: item.sock
    }) && Nle(item.sock, e));
  return (await Promise.all(i.map(async item => (await Z(item, r)) === "present" && (await Q(item.sock))))).some(Boolean);
}
async function Z(e, n) {
  if (e.pidDomain !== n) return "present";
  if (am(e.pid)) return "gone";
  let r = e.procStartFt ?? e.procStart;
  if (r === void 0) return "present";
  let i = await ad(e.pid);
  if (i === void 0 || GEe(r, i)) return "present";
  return (await Uh(e.pid, r)) === !1 ? "recycled" : "present";
}
async function IEo(e) {
  let n = gX(),
    r = (await F({
      rejectUnreadable: !0
    })).filter(item => item.sock && !(n && jEe(item.sock, n)) && !ee(item)),
    [i, d] = await Promise.all([kWe(), eR()]),
    [m, g] = await Promise.all([Promise.all(r.map(item => Q(item.sock))), Promise.all(r.map(item => Z(item, d)))]),
    l = [];
  for (let s = 0; s < r.length; s++) {
    let {
      file: file_4,
      ...c
    } = r[s];
    if (g[s] === "gone") {
      if (i && am(c.pid)) V(file_4, c.pid, d, e);
    } else if (g[s] === "recycled") continue;else if (m[s]) l.push(c);else if (i && z6n(c, d) && am(c.pid)) V(file_4, c.pid, d, e);
  }
  return l;
}
async function Ern(e) {
  let n = gX(),
    r = await F(),
    i = o => Boolean(o.sock) && !(n && jEe(o.sock, n)),
    d = new Set(r.filter(item => item.sessionId === e && item.parkedJobId !== void 0).map(item => item.parkedJobId)),
    m = r.filter(item => i(item) && !ee(item)),
    g = m.filter(item => item.sessionId === e),
    l = m.filter(item => item.sessionId !== e && item.jobId !== void 0 && d.has(item.jobId)),
    s = await eR();
  for (let o of g.concat(l)) {
    let {
      file: file_5,
      ...R
    } = o;
    if ((await Z(R, s)) === "present" && (await Q(R.sock))) return R;
  }
  return null;
}
function ee(e) {
  return e.spare === !0 || e.parkedJobId !== void 0;
}
function qe(e) {
  return oa(e).filter(item => /^[a-z0-9_]{1,32}$/.test(item)).slice(0, 16);
}
export { ph, fK, jzn, fMs, $pt, yrn, Wzn, wEo, mMs, vEo, kEo, _rn, EEo, gMs, TEo, brn, Upt, Bpt, UAr, BAr, Lve, jpt, CEo, zzn, UdsSendRefusedError as mX, o3, REo, jAr, Srn, AEo, xEo, Vfe, zDt, wrn, PEo, Qoi, SessionRecordsUnreadableError as vrn, Zoi, krn, Oee, gX, OEo, IEo, Ern };