// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  qIr,
  eEo,
  rEo,
  iet,
  oEo,
  QIr,
  v,
  V3
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  R,
  k,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  i,
  mP
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t,
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P,
  Oi,
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Ve
} from "B:/~BUN/root/chunk-myfamxtp.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  yd,
  ph,
  kUt,
  FFe,
  cT,
  Xy,
  tc,
  HFe,
  vUt,
  CO,
  XVe,
  vJ,
  Mjn,
  qDs,
  gDr,
  CUt,
  iS,
  nj,
  $Fe,
  ASe,
  lpe
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  RUt,
  NXi,
  Zin,
  Ljn,
  FXi,
  El,
  Xx
} from "B:/~BUN/root/chunk-pzs4x0zd.js";
import {
  wSe,
  aDr,
  lDr,
  kSe,
  TO,
  _Xi,
  FDs,
  bXi,
  y_t
} from "B:/~BUN/root/chunk-smrt7z22.js";
import {
  Ni
} from "B:/~BUN/root/chunk-ghar8fn5.js";
import {
  Zpt
} from "B:/~BUN/root/chunk-8cgm9m8p.js";
import {
  dLe
} from "B:/~BUN/root/chunk-kh33ctc6.js";
import {
  qZ
} from "B:/~BUN/root/chunk-x6ny3ghw.js";
import {
  kn
} from "B:/~BUN/root/chunk-t7d2hp9h.js";
import {
  E,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  L,
  js
} from "B:/~BUN/root/chunk-5ha2avah.js";

function N(e, n, r, s, d) {
  let m = Math.max(0, r - n) / 1000;
  return Math.min(s, e + m * d)
}

function M(e) {
  return e >= 1
}

function U(e, n, r, s, d = () => !0) {
  let m = e.get(n);
  if (m !== void 0) return e.delete(n), e.set(n, m), m;
  while (e.size >= Math.max(1, r)) {
    let f;
    for (let [a, o] of e)
      if (d(o)) {
        f = a;
        break
      } if (f ??= e.keys().next().value, f === void 0) break;
    e.delete(f)
  }
  let g = s();
  return e.set(n, g), g
}
var zwr = {
  bucketCapacity: 30,
  refillPerSecond: 0.5,
  dedupWindowMs: 30000,
  maxSelfHops: 10,
  maxChainLength: 28,
  maxTrackedSenders: 256
};

function ke(e, n) {
  if (!e || n.size === 0) return 0;
  let r = 0;
  for (let s of e)
    if (n.has(s)) r++;
  return r
}

function Hys(e = {}, n) {
  let r = {
      ...zwr,
      now: () => Date.now(),
      ...e
    },
    s = () => n ? {
      ...r,
      ...n()
    } : r,
    d = new Map;

  function m(a, o) {
    return U(d, a, o.maxTrackedSenders, () => ({
      tokens: o.bucketCapacity,
      lastRefill: o.now(),
      lastBody: void 0,
      lastBodyAt: 0
    }))
  }

  function g(a, o) {
    let l = s();
    if (a !== void 0 && a.length > l.maxChainLength) return {
      admitted: !1,
      reason: "hop-runaway"
    };
    if (ke(a, o) >= l.maxSelfHops) return {
      admitted: !1,
      reason: "hop-loop"
    };
    return
  }

  function f(a) {
    let o = s(),
      l = o.now(),
      A = g(a.hopChain, a.ownTokens);
    if (A) return A;
    let h = m(a.senderKey, o);
    if (h.lastBody !== void 0 && h.lastBody === a.body && l - h.lastBodyAt < o.dedupWindowMs) return {
      admitted: !1,
      reason: "duplicate"
    };
    if (h.tokens = N(h.tokens, h.lastRefill, l, o.bucketCapacity, o.refillPerSecond), h.lastRefill = l, !M(h.tokens)) return {
      admitted: !1,
      reason: "rate-limited"
    };
    return h.tokens -= 1, h.lastBody = a.body, h.lastBodyAt = l, {
      admitted: !0
    }
  }
  return {
    admit: f,
    checkHopChain: g,
    trackedSenderCount: () => d.size
  }
}
var Re = {
  "rate-limited": !0,
  duplicate: !0,
  "hop-loop": !0,
  "hop-runaway": !0,
  "queue-full": !0
};

function Ie(e) {
  return typeof e === "string" && Object.hasOwn(Re, e)
}

function yHi(e) {
  return Ie(e) ? e : void 0
}
var $ys = 256,
  B = 60000,
  ie = 256,
  Ee = 20;

function Uys(e) {
  Ni().ingress.ownUdsHopToken = e === void 0 ? void 0 : Zpt(e)
}

function g0n(e) {
  Ni().ingress.ownBridgePeerAddressResolver = e
}

function Bys() {
  let {
    ownUdsHopToken: e,
    ownBridgePeerAddressResolver: n
  } = Ni().ingress, r = new Set;
  if (e) r.add(e);
  let s = n?.();
  if (s) r.add(Zpt(s));
  let d = dLe();
  if (d) r.add(Zpt(XVe(d)));
  return r
}
var xe = {
  "rate-limited": "sender exceeded the peer message rate limit",
  duplicate: "identical to the previous message from this sender",
  "hop-loop": "message has already passed through this session (a peer messaging loop)",
  "hop-runaway": "peer relay chain is too long (runaway forwarding)",
  "queue-full": "this session has too many undelivered peer messages queued"
};

function W(e) {
  return {
    from: qDs(e.from) ? e.from : "(unrenderable sender address)",
    name: e.name ? vUt(e.name) : ""
  }
}

function _Hi(e) {
  let {
    from: n
  } = W(e), {
    name: r
  } = W(e), s = r ? `@${r} (${n})` : n, d = e.suppressed > 0 ? ` (+${e.suppressed} similar ${P(e.suppressed,"drop")} suppressed)` : "";
  return `Dropped a peer message from ${s}: ${xe[e.reason]}.${d}`
}
var Ae = 500,
  ve = 5000,
  Oe = 40;

function j(e, n) {
  if (e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  let {
    pending: r,
    pendingIds: s,
    pendingSend: d
  } = e;
  if (e.pending = 0, e.pendingIds = [], e.pendingSend = void 0, r > 0 && d && n()) return d(s)
}

function jys({
  trailMs: e = ve
} = {}) {
  let n = new Map,
    r = 0,
    s = 0;

  function d(S = Date.now()) {
    if (S - r >= B) r = S, s = 0;
    if (s >= Oe) return !1;
    return s++, !0
  }

  function m(S, w, b, I = Date.now()) {
    let y = n.get(S);
    if (y === void 0) y = {
      lastImmediateAt: Number.NEGATIVE_INFINITY,
      pendingIds: [],
      pending: 0,
      timer: void 0,
      pendingSend: void 0
    };
    if (n.delete(S), n.set(S, y), n.size > ie) {
      let O = n.keys().next().value;
      if (O !== void 0 && O !== S) {
        let D = n.get(O);
        if (n.delete(O), D !== void 0) j(D, () => d(I))
      }
    }
    if (I - y.lastImmediateAt >= B && y.pending === 0) {
      if (y.lastImmediateAt = I, d(I)) b([]);
      return
    }
    if (y.pending++, w !== void 0 && y.pendingIds.length < $ys) y.pendingIds.push(w);
    if (y.pendingSend = b, y.timer === void 0) y.timer = setTimeout(j, e, y, d), y.timer.unref?.()
  }
  let g = new Map,
    f = 0,
    a = 0,
    o = 0;

  function l(S, w = Date.now()) {
    let b = W(S);
    t(`[peer-guard] drop ${S.reason} from ${b.from}${b.name?` (@${b.name})`:""}`);
    let I = `${S.from}\x00${S.reason}`,
      y = g.get(I);
    if (y && w - y.lastReportAt < B) {
      y.suppressed++;
      return
    }
    if (w - f >= B) f = w, a = 0;
    if (a >= Ee) {
      o++;
      return
    }
    a++;
    let O = (y?.suppressed ?? 0) + o;
    if (o = 0, g.delete(I), g.set(I, {
        lastReportAt: w,
        suppressed: 0
      }), g.size > ie) {
      let C = g.keys().next().value;
      if (C !== void 0) g.delete(C)
    }
    let D = {
      ...S,
      suppressed: O
    };
    t(`[peer-guard] Dropped peer message from ${b.from}${b.name?` (@${b.name})`:""}: ${S.reason}${O>0?` (+${O} suppressed)`:""}`, {
      level: "warn"
    }), c("peer_loop_guard", S.reason), Ni().ingress.messageDropped.emit(D)
  }
  async function A(S = Ae) {
    let w = [];
    for (let b of n.values())
      if (b.pending > 0) w.push(j(b, d));
      else if (b.timer !== void 0) clearTimeout(b.timer), b.timer = void 0;
    if (w.length === 0) return;
    await Promise.race([Promise.allSettled(w), J(S, void 0, {
      unref: !0
    })])
  }

  function h() {
    for (let S of n.values())
      if (S.timer !== void 0) clearTimeout(S.timer);
    n.clear()
  }
  return {
    report: l,
    noteDropForReceipt: m,
    flushPendingReceipts: A,
    dispose: h
  }
}
var De = 50,
  z = {
    ...zwr,
    maxQueuedPeerMessages: De
  },
  F = z,
  Le = p(() => u({
    bucketCapacity: E().min(5).max(500).catch(F.bucketCapacity),
    refillPerSecond: E().min(0.05).max(50).catch(F.refillPerSecond),
    dedupWindowMs: E().int().min(0).max(600000).catch(F.dedupWindowMs),
    maxSelfHops: E().int().min(3).max(Mjn).catch(F.maxSelfHops),
    maxChainLength: E().int().min(8).max(Mjn - 1).catch(F.maxChainLength),
    maxTrackedSenders: E().int().min(16).max(1e5).catch(F.maxTrackedSenders),
    maxQueuedPeerMessages: E().int().min(10).max(5000).catch(F.maxQueuedPeerMessages)
  })),
  Te = 300000;

function y0n() {
  let e = V3("tengu_harbor_kite_limits", z, Te),
    n = Le().safeParse(e);
  if (!n.success) return t("[peer-guard] tengu_harbor_kite_limits is not an object; using defaults", {
    level: "warn"
  }), z;
  return n.data
}
var Ce = /[0-9a-f]{32,}/gi;

function se(e) {
  return e.replace(Ce, (n) => `<hex:${kn(n)}>`)
}

function q_(e, n = 120) {
  if (/token/i.test(e)) return "(withheld)";
  return Oi(se(e), n)
}

function Z9(e) {
  if (/token/i.test(e)) return "(redacted: fragment may carry an auth token)";
  return Oi(se(e), 200)
}

function Wwr(e) {
  if (x() === "windows") return null;
  let n = de(e);
  if (n < 0) return null;
  try {
    return Bun.ant.getPeerUid(n)
  } catch (r) {
    return t(`[daemon] peer uid lookup failed: ${r instanceof Error?r.message:String(r)}`, {
      level: "warn"
    }), null
  }
}

function gHi(e, n = Wwr) {
  let r = process.getuid?.();
  if (r == null) return null;
  let s = n(e);
  if (s == null) return null;
  if (s === r) return null;
  let d = `permission denied: connecting uid ${s} != daemon uid ${r} (retry without sudo, or as the daemon owner)`;
  return t(`[daemon] rejecting control connection: ${d}`, {
    level: "error"
  }), d
}

function k0t(e) {
  if (x() === "windows") return;
  let n = de(e);
  try {
    let r = n < 0 ? null : Bun.ant.getPeerPid(n);
    if (r !== null && r > 0) return r;
    t(`[peer-cred] peer pid unavailable (fd=${n}, got=${r})`, {
      level: "warn"
    });
    return
  } catch (r) {
    t(`[peer-cred] peer pid lookup failed: ${r instanceof Error?r.message:String(r)}`, {
      level: "warn"
    });
    return
  }
}

function de(e) {
  let n = e._handle;
  return typeof n?.fd === "number" ? n.fd : -1
}
import {
  lstat as Ne,
  readdir as Me,
  stat as Ue,
  unlink as be
} from "fs/promises";
import {
  connect as ye
} from "net";
import {
  basename as Be,
  dirname as Se,
  join as He
} from "path";
var h0n = 1048576;

function ae(e, n = Date.now) {
  let r = new Map;

  function s(f, a) {
    let {
      bucketCapacity: o,
      refillPerSecond: l,
      maxTrackedSenders: A
    } = e(), h = !1, S = U(r, f, A, () => (h = !0, {
      tokens: o,
      updatedAt: a,
      sentInBurst: 0,
      burstStartedAt: a
    }), (w) => N(w.tokens, w.updatedAt, a, o, l) >= o);
    if (!h) {
      S.tokens = N(S.tokens, S.updatedAt, a, o, l), S.updatedAt = a;
      let w = o / Math.max(l, 0.000000001) * 1000;
      if (S.tokens >= o || a - S.burstStartedAt > w) S.sentInBurst = 0, S.burstStartedAt = a
    }
    return S
  }

  function d(f) {
    let a = s(f, n());
    if (!M(a.tokens)) return {
      ok: !1,
      sentInBurst: a.sentInBurst
    };
    a.tokens -= 1, a.sentInBurst += 1;
    let o = a,
      l = !1;
    return {
      ok: !0,
      refund: () => {
        if (l) return;
        l = !0, o.tokens = Math.min(e().bucketCapacity, o.tokens + 1), o.sentInBurst = Math.max(0, o.sentInBurst - 1)
      }
    }
  }

  function m(f) {
    let a = s(f, n());
    a.tokens = Math.min(e().bucketCapacity, a.tokens + 1), a.sentInBurst = Math.max(0, a.sentInBurst - 1)
  }

  function g(f) {
    let a = s(f, n());
    a.tokens = Math.max(0, a.tokens - 1), a.sentInBurst += 1
  }
  return {
    reserve: d,
    credit: m,
    debit: g
  }
}
var ue = "no_live_inbox",
  ce = "ENOINBOX",
  pe = "message_too_large";

function le(e, n) {
  return new R(`Message too large for cross-session delivery: the serialized message is ${e.toLocaleString("en-US")} characters and the limit is ${n.toLocaleString("en-US")}. Shorten the message text \u2014 put bulk content in a file the recipient can read rather than in the message \u2014 or split it into smaller messages.`, "cross-session message exceeds the line cap", pe)
}

function v0t(e) {
  return e instanceof R && e.errorClass === pe
}
var fe = "sender_paced";

function me(e) {
  return new R(`Too many messages to this session just now: ${e} were sent recently and more would be dropped by its rate limit, so this one was not sent. Batch what remains into one message, or wait a little before sending more.`, "cross-session sends to one target outpaced its inbox rate limit", fe)
}

function E0t(e) {
  return e instanceof R && e.errorClass === fe
}

function _fo(e) {
  let n = k(e);
  return n === "ENOENT" || n === "ECONNREFUSED" || e instanceof R && e.errorClass === ue
}
class H extends R {
  kind;
  constructor(e, n) {
    super(n, "no live inbox registered for the target pipe", ue);
    this.name = "NoLiveInboxError", this.kind = e
  }
}

function bfo(e) {
  return e instanceof H && e.kind === "unusable"
}

function Q0e(e) {
  if (bfo(e)) return "busy";
  if (_fo(e)) return "gone";
  let n = k(e);
  return n === "EBUSY" || n === "EAGAIN" ? "busy" : "other"
}

function T0t(e) {
  return ` \u2014 the peer process may have restarted, so this socket path is stale. Call ${e} to get the current address.`
}
var Wys = " \u2014 the peer is alive but its pipe is momentarily busy. Retry the same address shortly.",
  Fe = " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same address shortly.";

function Gwr(e) {
  return bfo(e) ? Fe : Wys
}
class joe extends Error {
  refusal;
  constructor(e, n) {
    super(n);
    this.name = "UdsSendRefusedError", this.refusal = e
  }
}

function GZ(e) {
  if (e instanceof joe || _fo(e) || E0t(e) || v0t(e)) return !0;
  let n = k(e);
  return n === "EBUSY" || n === "EAGAIN" || n === "EACCES"
}

function $e(e) {
  if (typeof e !== "object" || e === null) return !1;
  let {
    name: n,
    until: r,
    sessionId: s
  } = e;
  return typeof n === "string" && Zin(r) && (s === void 0 || typeof s === "string")
}

function Ge(e) {
  if (!Array.isArray(e)) return [];
  return e.filter($e).slice(0, eEo).map(({
    name: n,
    until: r,
    sessionId: s
  }) => ({
    name: Q(n, CO),
    until: r,
    ...s !== void 0 && {
      sessionId: Q(s, CO)
    }
  }))
}

function je() {
  return Ni().outbound.pacer ??= ae(y0n)
}
var Ke = {
  ok: !0,
  refund: () => {}
};

function We() {
  if (i.CLAUDE_CODE_HARBOR_KITE_PACING_OFF) return !1;
  return !v("tengu_harbor_kite_pacing_off", !1)
}

function zys(e) {
  Pe(e, (n, r) => n.credit(r))
}

function Sfo(e) {
  Pe(e, (n, r) => n.debit(r))
}

function Pe(e, n) {
  let r = Ni().outbound.pacer;
  if (!r) return;
  let {
    scheme: s,
    target: d
  } = iS(e);
  if (s !== "uds") return;
  n(r, TO(d) ?? d)
}
async function Gys(e, n, r, s, d, m, g, {
  trackReceipts: f = !0,
  expectPeerPid: a,
  expectPeerProcStart: o,
  fromPlugin: l,
  recipientName: A
} = {}) {
  let h = Woe(),
    S = h ? vJ(h) : void 0,
    w = v("tengu_tidy_fern", !0) ? rEo() : void 0,
    b = CUt(S, s, wSe(n), w, gDr(m, S ? Zpt(S) : void 0), g),
    I = qZ(),
    y = {
      ...I,
      type: "user",
      message: {
        role: "user",
        content: b
      },
      priority: "next",
      from: S,
      ...l !== void 0 && {
        from_plugin: l
      },
      ...(d?.length ?? 0) > 0 && {
        file_attachments: d
      }
    },
    O = he(y),
    C = (S !== void 0 || x() !== "windows") && We() ? je().reserve(TO(e) ?? e) : Ke;
  if (!C.ok) throw t(`[uds-client] paced: not sending to ${q_(e)} \u2014 ${C.sentInBurst} sent this burst; its inbox rate limit would drop more`), me(C.sentInBurst);
  if (t(`[uds-client] Sending ${n.length} chars to ${q_(e)}`), f) ze(I.msg_id, vJ(e), A);
  try {
    await _e(e, y, r, {
      noFollowSymlink: !0,
      preflightedJson: O,
      ...a !== void 0 && {
        expectPeerPid: a
      },
      ...o !== void 0 && {
        expectPeerProcStart: o
      }
    })
  } catch (oe) {
    if (GZ(oe)) {
      if (C.refund(), f) Xe(I.msg_id)
    }
    throw oe
  }
  return {
    msgId: I.msg_id
  }
}
var we = 200;

function ze(e, n, r) {
  let s = Ni().receipts.outstandingSends;
  if (s.length >= we) s.shift();
  s.push({
    msgId: e,
    to: n,
    handle: vUt(r ?? "", 1 / 0) || void 0
  })
}

function Xe(e) {
  let n = Ni().receipts.outstandingSends,
    r = n.findIndex((s) => s.msgId === e);
  if (r !== -1) n.splice(r, 1)
}

function Vys(e, n) {
  if (typeof e !== "string") return;
  let {
    outstandingSends: r,
    awaitingTerminal: s
  } = Ni().receipts, d = r.findIndex((g) => g.msgId === e);
  if (d !== -1) {
    let [g] = r.splice(d, 1);
    if (!g) return;
    if (n === "held") {
      if (s.length >= we) s.shift();
      s.push(g)
    }
    return {
      sent: g,
      wasHeld: !1
    }
  }
  let m = s.findIndex((g) => g.msgId === e);
  if (m !== -1 && n !== "held") {
    let [g] = s.splice(m, 1);
    return g ? {
      sent: g,
      wasHeld: !0
    } : void 0
  }
  return
}

function Kys(e) {
  let n = new Map;
  if (e.length === 0) return n;
  let r = new Set(e),
    {
      outstandingSends: s,
      awaitingTerminal: d
    } = Ni().receipts;
  for (let m of [s, d]) {
    let g = m === d;
    for (let f = 0; f < m.length;) {
      let a = m[f];
      if (r.delete(a.msgId)) {
        m.splice(f, 1);
        let o = n.get(a.to) ?? {
          sends: [],
          wereHeld: 0
        };
        if (o.sends.push(a), g) o.wereHeld++;
        n.set(a.to, o)
      } else f++
    }
  }
  return n
}

function vJe(e, n, r = {}) {
  return rZt(e, n, qZ(), r).then(() => {})
}
async function rZt(e, n, r = qZ(), {
  expectPeerPid: s,
  expectPeerProcStart: d,
  storageV5: m
} = {}) {
  return t(`[uds-client] Sending control:${n.action} to ${q_(e)}`), await _e(e, {
    type: "control",
    ...n,
    ...r
  }, m, {
    noFollowSymlink: !0,
    ...s !== void 0 && {
      expectPeerPid: s
    },
    ...d !== void 0 && {
      expectPeerProcStart: d
    }
  }), {
    msgId: r.msg_id
  }
}
var Je = 150;
async function _0n(e) {
  let n = TO(e);
  if (n === void 0) return;
  for (let r of await T()) {
    if (!r.sock || TO(r.sock) !== n) continue;
    if (await Y(r)) return {
      pid: r.pid,
      features: r.peerFeatures,
      sessionId: r.sessionId,
      procStart: r.procStartFt ?? r.procStart
    }
  }
  return
}
async function qys(e) {
  let n = L(e),
    r = new Map;
  if (n.length === 0) return r;
  let s = kSe(),
    m = (await Promise.all(n.map((f) => G(s, `${f}.json`)))).filter((f) => f !== null && Boolean(f.sock)),
    g = await Promise.all(m.map((f) => Y(f)));
  return m.forEach((f, a) => {
    if (g[a] && f.sock) r.set(f.pid, f.sock)
  }), r
}
async function mSa(e, n) {
  let r = await G(kSe(), `${e}.json`, {
    rejectTornLiveRecord: !0
  });
  return r?.jobId === n ? r.status : void 0
}
async function Y(e) {
  let n = e.procStartFt ?? e.procStart;
  if (n === void 0 || ph(e.pid)) return !1;
  return await Xy(e.pid, n) === !0
}

function he(e) {
  let n = _(e),
    r = bXi + n.length + 1;
  if (r > h0n) throw le(r, h0n);
  return n
}
async function qe(e) {
  let n = TO(e);
  if (n === void 0) return !1;
  for (let r of await T()) {
    if (!r.sock || TO(r.sock) !== n) continue;
    if (ph(r.pid)) continue;
    if ((r.procStartFt ?? r.procStart) !== void 0) {
      if (await Y(r)) return !0;
      continue
    }
    if (El(r.pid)) return !0
  }
  return !1
}
async function _e(e, n, r, {
  noFollowSymlink: s = !1,
  expectPeerPid: d,
  expectPeerProcStart: m,
  preflightedJson: g
} = {}) {
  let f = g ?? he(n);
  if (!nj(e)) throw new joe("non-local", `Refusing to connect: not a usable local IPC path (remote/UNC host, or a pipe name with extra segments or a trailing dot/space): ${e}`);
  let a = aDr(),
    o = await _Xi(e, r, {
      requireLiveOwner: a
    }),
    l = o.kind === "token" ? o.token : void 0;
  if (a && o.kind !== "token") {
    if (!(o.kind === "no-key" && await qe(e))) throw new H(o.kind, `No running session has registered an inbox at ${e} (${ce}: ${o.kind}) \u2014 refusing to send to an unvouched pipe`);
    l = void 0
  }
  let A = l !== void 0 ? FDs(l) : "";
  if (s && !(x() === "windows" && lpe(e) !== void 0)) {
    let S;
    try {
      S = (await Ne(e)).isSymbolicLink()
    } catch (w) {
      if (K(w)) throw w;
      throw t(`[uds-client] reply target unvettable: ${k(w)??"lstat failed"}`), new joe("unvettable", "Refusing to send: cannot vet reply target")
    }
    if (S) throw new joe("symlink", "Refusing to send: reply target is a symlink")
  }
  let h = A + f + `
`;
  return new Promise((S, w) => {
    let b = ye({
        path: e
      }),
      I = !1;
    b.setTimeout(5000, () => {
      I = !0, b.destroy(), w(Error(`Timed out sending to ${e}`))
    }), b.on("error", (y) => {
      I = !0, w(y)
    }), b.on("connect", () => {
      if (d !== void 0 && x() !== "windows") {
        let y = k0t(b);
        if (y === void 0) {
          I = !0, b.destroy(), w(new joe("endpoint-unverifiable", "Refusing to send: connected endpoint identity could not be read"));
          return
        }
        if (y !== d) {
          I = !0, b.destroy(), t(`[uds-client] connected endpoint is pid ${y}, expected ${d} \u2014 refusing to write`), w(new joe("wrong-endpoint", "Refusing to send: connected endpoint is not the expected process"));
          return
        }
        let O = process.getuid?.(),
          D = Wwr(b);
        if (O !== void 0 && D === null) {
          I = !0, b.destroy(), w(new joe("endpoint-unverifiable", "Refusing to send: connected endpoint owner could not be read"));
          return
        }
        if (O !== void 0 && D !== O) {
          I = !0, b.destroy(), t(`[uds-client] connected endpoint is owned by uid ${D}, not ours \u2014 refusing to write`), w(new joe("wrong-endpoint", "Refusing to send: connected endpoint is not owned by this user"));
          return
        }
        if (m !== void 0 && kUt(y) !== m) {
          I = !0, b.destroy(), t(`[uds-client] connected endpoint pid ${y} is not the process that wrote to us (start token differs \u2014 recycled pid) \u2014 refusing to write`), w(new joe("wrong-endpoint", "Refusing to send: connected endpoint is a different process with the expected pid"));
          return
        }
      }
      if (b.write(h), x() === "macos") setTimeout((y) => {
        if (!y.destroyed) y.end()
      }, Je, b);
      else b.end()
    }), b.on("close", () => {
      if (!I) t(`[uds-client] Sent to ${q_(e)}`);
      S()
    })
  })
}

function Z(e) {
  return new Promise((n) => {
    if (!nj(e)) {
      n(!1);
      return
    }
    let r = ye({
        path: e
      }),
      s = (d) => {
        r.destroy(), n(d)
      };
    r.on("connect", () => s(!0)), r.on("error", (d) => s(k(d) === "EBUSY")), r.setTimeout(250, () => s(!1))
  })
}
class Fpt extends Error {
  code;
  constructor(e) {
    super("session records directory unreadable");
    this.code = e;
    this.name = "SessionRecordsUnreadableError"
  }
}
async function T(e) {
  if (q()) return [];
  let n = kSe(),
    r;
  try {
    r = await Me(n)
  } catch (d) {
    if (e?.rejectUnreadable && !K(d)) throw new Fpt(k(d));
    return []
  }
  return (await Promise.all(r.filter((d) => /^\d+\.json$/.test(d)).map((d) => G(n, d, {
    rejectTornLiveRecord: e?.rejectTornLiveRecord
  })))).filter((d) => d !== null)
}
async function G(e, n, r) {
  let s = !1,
    d, m = He(e, n);
  try {
    let g = NXi(n);
    if (g === null) return null;
    let {
      pid: f
    } = g;
    if (!g.canonical) return be(m).catch(() => {}), null;
    d = f;
    let a = await yd(m, RUt);
    if (a === null) return null;
    s = !0;
    let o = ee(a),
      l = FXi(o);
    return {
      sock: typeof o.messagingSocketPath === "string" ? o.messagingSocketPath : "",
      cwd: l.cwd,
      startedAt: l.startedAt,
      ...Ljn(o.nameSince) !== void 0 && {
        nameSince: Ljn(o.nameSince)
      },
      procStart: l.procStart,
      ...l.procStartFt !== void 0 && {
        procStartFt: l.procStartFt
      },
      name: typeof o.name === "string" ? o.name : void 0,
      nameSource: o.nameSource === "user" || o.nameSource === "peer" || o.nameSource === "derived" || o.nameSource === "collision" || o.nameSource === "auto" || o.nameSource === "hook" ? o.nameSource : void 0,
      formerNames: Ge(o.formerNames),
      kind: l.kind,
      sessionId: l.sessionId,
      jobId: typeof o.jobId === "string" ? o.jobId : void 0,
      parkedJobId: typeof o.parkedJobId === "string" ? o.parkedJobId : void 0,
      spare: o.spare === !0,
      bridgeSessionId: typeof o.bridgeSessionId === "string" ? o.bridgeSessionId : void 0,
      logPath: typeof o.logPath === "string" ? o.logPath : void 0,
      status: l.status,
      waitingFor: typeof o.waitingFor === "string" ? o.waitingFor : void 0,
      ...{},
      updatedAt: Ljn(o.updatedAt),
      statusUpdatedAt: Ljn(o.statusUpdatedAt),
      entrypoint: l.entrypoint,
      ...qIr(o.hostSessionId) !== void 0 && {
        hostSessionId: qIr(o.hostSessionId)
      },
      ...l.pidDomain !== void 0 && {
        pidDomain: l.pidDomain
      },
      agent: typeof o.agent === "string" ? o.agent : void 0,
      state: typeof o.state === "string" ? o.state : void 0,
      detail: typeof o.detail === "string" ? o.detail : void 0,
      tempo: o.tempo === "active" || o.tempo === "idle" || o.tempo === "blocked" ? o.tempo : void 0,
      needs: typeof o.needs === "string" ? o.needs : void 0,
      peerProtocol: typeof o.peerProtocol === "number" ? o.peerProtocol : void 0,
      ...Array.isArray(o.peerFeatures) && {
        peerFeatures: Ye(o.peerFeatures)
      },
      ...{},
      ...(typeof o.asksForConvertedSkills === "boolean" || o.asksForConvertedSkills === null) && {
        asksForConvertedSkills: o.asksForConvertedSkills
      },
      tmux: typeof o.tmux === "string" ? o.tmux : void 0,
      pid: f,
      file: m
    }
  } catch {
    if (r?.rejectTornLiveRecord && s && d !== void 0 && El(d)) {
      if (!r.isReread) return await J(lDr), G(e, n, {
        ...r,
        isReread: !0
      });
      let [g, f] = await Promise.all([Ue(m).then((a) => a.mtimeMs, () => {
        return
      }), HFe(d)]);
      if (g !== void 0 && f !== null && f > g + 2000) return null;
      if (f === null && !El(d)) return null;
      throw new Fpt("EBADRECORD")
    }
    return null
  }
}

function ne(e, n) {
  return e.pidDomain !== void 0 && e.pidDomain !== n
}
async function hSa(e, n) {
  let r = await Xx();
  return e.some((s) => s.sessionId === n && ne(s, r))
}
async function b0n() {
  return (await T({
    rejectUnreadable: !0
  })).map(({
    file: e,
    ...n
  }) => n)
}
async function Yys(e) {
  let n = await T({
      rejectUnreadable: !0,
      rejectTornLiveRecord: !0
    }),
    r = await Xx();
  for (let {
      file: s,
      ...d
    }
    of n)
    if (e(d) && (ne(d, r) || El(d.pid) && await cT(d.pid, d.procStartFt ?? d.procStart))) return d;
  return
}

function V(e, n, r, s) {
  if (X() && s !== void 0) {
    s.delete(Ve.session(Be(e))).then((d) => d.ok && d.value.existed ? oEo(Se(e), n, r, s) : void 0).catch(() => {});
    return
  }
  be(e).then(() => oEo(Se(e), n, r, s)).catch(() => {})
}
async function Qce(e, n) {
  let r = await T({
      rejectUnreadable: n?.rejectUnreadable === !0,
      rejectTornLiveRecord: n?.rejectUnreadable === !0
    }),
    s = n?.rejectUnreadable === !0 ? await Xx() : void 0,
    d = (l) => s !== void 0 && ne(l, s),
    m = r.map((l) => d(l) || El(l.pid)),
    g = await Promise.all(r.map((l, A) => m[A] && (d(l) || cT(l.pid, l.procStartFt ?? l.procStart)))),
    f = await iet(),
    a = f ? await Xx() : "",
    o = [];
  for (let l = 0; l < r.length; l++) {
    let {
      file: A,
      ...h
    } = r[l];
    if (g[l]) o.push(h);
    else if (f && QIr(h, a) && ph(h.pid)) V(A, h.pid, a, e)
  }
  return o
}

function Woe() {
  return mP.CLAUDE_CODE_MESSAGING_SOCKET
}
async function Xys() {
  let e = Woe();
  if (e === void 0) return !1;
  let n = await T(),
    r = await Xx(),
    s = n.filter((m) => m.sock && m.pid !== process.pid && !re(m) && y_t({
      sock: m.sock
    }) && ASe(m.sock, e));
  return (await Promise.all(s.map(async (m) => await te(m, r) === "present" && await Z(m.sock)))).some(Boolean)
}
async function te(e, n) {
  if (e.pidDomain !== n) return "present";
  if (ph(e.pid)) return "gone";
  let r = e.procStartFt ?? e.procStart;
  if (r === void 0) return "present";
  let s = await tc(e.pid);
  if (s === void 0 || FFe(r, s)) return "present";
  return await Xy(e.pid, r) === !1 ? "recycled" : "present"
}
async function Jys(e) {
  let n = Woe(),
    r = (await T({
      rejectUnreadable: !0
    })).filter((a) => a.sock && !(n && $Fe(a.sock, n)) && !re(a)),
    [s, d] = await Promise.all([iet(), Xx()]),
    [m, g] = await Promise.all([Promise.all(r.map((a) => Z(a.sock))), Promise.all(r.map((a) => te(a, d)))]),
    f = [];
  for (let a = 0; a < r.length; a++) {
    let {
      file: o,
      ...l
    } = r[a];
    if (g[a] === "gone") {
      if (s && ph(l.pid)) V(o, l.pid, d, e)
    } else if (g[a] === "recycled") continue;
    else if (m[a]) f.push(l);
    else if (s && QIr(l, d) && ph(l.pid)) V(o, l.pid, d, e)
  }
  return f
}
async function S0n(e) {
  let n = Woe(),
    r = await T(),
    s = (o) => Boolean(o.sock) && !(n && $Fe(o.sock, n)),
    d = new Set(r.filter((o) => o.sessionId === e && o.parkedJobId !== void 0).map((o) => o.parkedJobId)),
    m = r.filter((o) => s(o) && !re(o)),
    g = m.filter((o) => o.sessionId === e),
    f = m.filter((o) => o.sessionId !== e && o.jobId !== void 0 && d.has(o.jobId)),
    a = await Xx();
  for (let o of g.concat(f)) {
    let {
      file: l,
      ...A
    } = o;
    if (await te(A, a) === "present" && await Z(A.sock)) return A
  }
  return null
}

function re(e) {
  return e.spare === !0 || e.parkedJobId !== void 0
}

function Ye(e) {
  return js(e).filter((n) => /^[a-z0-9_]{1,32}$/.test(n)).slice(0, 16)
}
export {
  q_,
  Z9,
  Wwr,
  gHi,
  k0t,
  h0n,
  zwr,
  Hys,
  yHi,
  $ys,
  Uys,
  g0n,
  Bys,
  _Hi,
  jys,
  y0n,
  v0t,
  E0t,
  _fo,
  bfo,
  Q0e,
  T0t,
  Wys,
  Gwr,
  joe,
  GZ,
  zys,
  Sfo,
  Gys,
  Vys,
  Kys,
  vJe,
  rZt,
  _0n,
  qys,
  mSa,
  Fpt,
  hSa,
  b0n,
  Yys,
  Qce,
  Woe,
  Xys,
  Jys,
  S0n
};
