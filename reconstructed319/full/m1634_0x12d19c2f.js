// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  b,
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Cy,
  J,
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  vt,
  zA,
  t,
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  tt
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  R$n
} from "B:/~BUN/root/chunk-5w7xhbnh.js";
import {
  V,
  Pqe
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  St,
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  jn
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  jEn,
  _ar,
  Cmi,
  WEn,
  xmi
} from "B:/~BUN/root/chunk-agzytztq.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Imi
} from "B:/~BUN/root/chunk-dh9acrmw.js";
import {
  ldn,
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  D1t,
  KGn,
  ba
} from "B:/~BUN/root/chunk-wthaftk0.js";
import {
  Wt
} from "B:/~BUN/root/chunk-b91sxvrb.js";
import {
  jHi,
  WHi,
  I_s,
  M_s,
  QHi,
  H0n,
  Dfo,
  ZHi,
  n$i,
  i$i
} from "B:/~BUN/root/chunk-e8znf4zw.js";
import {
  G_s,
  V_s
} from "B:/~BUN/root/chunk-wdfwarp2.js";
import {
  nqi,
  rqi,
  NQe,
  afe,
  zFt,
  RNe
} from "B:/~BUN/root/chunk-r1gg0qbg.js";
import {
  bU,
  qNe,
  net,
  RIr,
  AIr,
  Avo,
  Esn,
  xvo
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  qr
} from "B:/~BUN/root/chunk-vmp6vbba.js";
import {
  Yoe,
  S_e
} from "B:/~BUN/root/chunk-jj9s326a.js";
import {
  Xi
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  g$n,
  y$n,
  xKi,
  CAr
} from "B:/~BUN/root/chunk-teehnwdh.js";
import {
  zAt
} from "B:/~BUN/root/chunk-820v0aja.js";
import {
  Ult
} from "B:/~BUN/root/chunk-tr5ysshk.js";
import {
  ZIe
} from "B:/~BUN/root/chunk-xt61n0fd.js";
import {
  Sar
} from "B:/~BUN/root/chunk-mvd8n96a.js";
import {
  H1e
} from "B:/~BUN/root/chunk-5kj9dj0y.js";
import {
  zEn,
  n6
} from "B:/~BUN/root/chunk-qc6qygzs.js";
import {
  $2
} from "B:/~BUN/root/chunk-a5dg1k4h.js";
import {
  os
} from "B:/~BUN/root/chunk-kj33sgq2.js";
import {
  oLt,
  Cpo,
  lSs
} from "B:/~BUN/root/chunk-frv0tk8w.js";
import {
  nRe,
  PQe
} from "B:/~BUN/root/chunk-62khcyrb.js";
import {
  vo
} from "B:/~BUN/root/chunk-h7w5pt14.js";
import {
  ln
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Rc
} from "B:/~BUN/root/chunk-rzaxm471.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  o,
  E,
  I,
  oe,
  C,
  u,
  xt,
  me,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  zd,
  oG,
  NHe,
  nFr
} from "B:/~BUN/root/chunk-79595s9y.js";
import {
  Ro
} from "B:/~BUN/root/chunk-143z690c.js";
import {
  ui,
  cb
} from "B:/~BUN/root/chunk-xwsv2hvn.js";
import {
  U,
  Xae,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  randomUUID as Ee
} from "crypto";
var bs = ["x-ccr-ticket-rev", "x-ccr-ticket-session", "x-ccr-ticket-seq"],
  Rs = /^[A-Za-z0-9_-]{1,4096}$/;
class Oe {
  authorization;
  held = new Map;
  headersFor(e) {
    if (e === void 0) return {};
    if (e !== this.authorization) this.held.clear(), this.authorization = e;
    return Object.fromEntries(this.held)
  }
  note(e, s) {
    if (e === void 0 || e !== this.authorization) return;
    if (s.redirected || s.status >= 400 && s.status < 500 && s.status !== 429) {
      this.held.clear();
      return
    }
    for (let n of bs) {
      let r = s.headers.get(n);
      if (r === "") this.held.delete(n);
      else if (r !== null && Rs.test(r)) this.held.set(n, r)
    }
  }
}
var Es = 64;
class Ie {
  rowsAhead;
  queuedSince = new WeakSet;
  attempts = [];
  posts = 0;
  failedPosts = 0;
  rows = 0;
  constructor(e) {
    this.rowsAhead = e
  }
  noteQueued(e) {
    for (let s of e) this.queuedSince.add(s)
  }
  noteAttempt(e, s, n) {
    let r = U(e, (h) => this.queuedSince.has(h));
    if (this.posts++, n) this.rows += r;
    else this.failedPosts++;
    if (this.attempts.length < Es) this.attempts.push({
      startedAt: s,
      endedAt: performance.now(),
      ahead: r === 0
    })
  }
  seen(e) {
    let s = 0,
      n = 0;
    for (let {
        startedAt: r,
        endedAt: h,
        ahead: w
      }
      of this.attempts) {
      let v = Math.max(0, h - Math.max(r, e));
      if (w) s += v;
      else n += v
    }
    return {
      aheadMs: s,
      postMs: n,
      posts: this.posts,
      failedPosts: this.failedPosts,
      rowsAhead: this.rowsAhead,
      rows: this.rows
    }
  }
}
var w6t = 1536;

function Fe(e) {
  return Array.isArray(e) && e.every((s) => typeof s === "string")
}

function ot(e, s = w6t) {
  let n = e.compactMetadata;
  if (!D(n)) return null;
  let r = n.preservedMessages;
  if (!D(r)) return null;
  let h = r.uuids;
  if (!Fe(h) || h.length <= s) return null;
  let w = h.slice(-s),
    v = w[0],
    y = r.allUuids,
    O = Fe(y) ? y.indexOf(v) : -1,
    M = n.preservedSegment;
  return {
    ...e,
    compactMetadata: {
      ...n,
      preservedMessages: {
        ...r,
        uuids: w,
        ...Fe(y) && {
          allUuids: O >= 0 ? y.slice(O) : y.slice(-s)
        }
      },
      ...D(M) && {
        preservedSegment: {
          ...M,
          headUuid: v
        }
      }
    }
  }
}
var qXr = Symbol("requestFollowsInit");
var Smi = "tengu_patient_ledger",
  ks = 10,
  Ts = 1e4,
  YXr = 400,
  Ms = 2097152;

function be(e) {
  return typeof e === "string" && /^\d{4}-\d{2}-\d{2}T/.test(e) && !Number.isNaN(Date.parse(e))
}

function As(e) {
  if (!D(e) || e.v !== 1 || !Array.isArray(e.spans)) return [];
  return e.spans.flatMap((s) => D(s) && be(s.since) ? [{
    since: s.since,
    ...typeof s.until === "string" && s.until !== "" && {
      until: s.until
    },
    tries: Number.isInteger(s.tries) && Number(s.tries) > 0 ? Number(s.tries) : 0
  }] : [])
}
class We {
  earlier = [];
  sentAgain = new Set;
  own = void 0;
  unanswered = new Set;
  writes = !1;
  refused = !1;
  runOpen = !1;
  startedAt = "";
  runOpenedAt = "";
  guardLapsed = !1;
  stampsCountFrom = 0;
  spansGivenUpAtStart = 0;
  get earlierSpans() {
    return this.earlier
  }
  get rowsSentAgain() {
    return this.sentAgain
  }
  get writesNoMore() {
    return this.refused
  }
  workerRecordRead(e, s) {
    if (e.readFailed === !0) return;
    this.writes = !0, this.startedAt = s.toISOString(), this.stampsCountFrom = s.getTime(), this.runOpenedAt = this.startedAt;
    let n = As(e.internal?.client_rows_owed);
    this.earlier = n.filter((r) => r.tries < ks), this.spansGivenUpAtStart = n.length - this.earlier.length
  }
  stateReported(e, s, n) {
    if (this.runOpen === (e === "idle")) this.runOpen = !this.runOpen, this.runOpenedAt = this.runOpen ? s.toISOString() : this.runOpenedAt;
    if (!n) return this.guardEnded(s.getTime());
    return (this.runOpen ? this.openOwnSpan(s) : this.rowsAnswered([])) ?? (this.writes && (this.own !== void 0 || this.earlier.length > 0) ? this.note() : void 0)
  }
  rowsEntered(e, s) {
    let n = e.filter((h) => at(h) !== void 0);
    for (let h of n) this.unanswered.add(String(h.uuid));
    if (this.unanswered.size > Ts) this.unanswered.clear(), this.writes = !1;
    if (n.length === 0) return;
    let r = Math.min(s.getTime(), ...n.flatMap((h) => be(h.timestamp) ? [Date.parse(h.timestamp)] : []).filter((h) => h >= this.stampsCountFrom));
    if (this.own === void 0) return this.openOwnSpan(new Date(r));
    if (!this.writes || r >= Date.parse(this.own.since)) return;
    return this.own = {
      ...this.own,
      since: new Date(r).toISOString()
    }, this.note()
  }
  rowsAnswered(e) {
    let s = this.sentAgain.size > 0;
    for (let h of e) this.unanswered.delete(h), this.sentAgain.delete(h);
    let n = s && this.sentAgain.size === 0,
      r = this.own !== void 0 && !this.runOpen && this.unanswered.size === 0;
    if (!this.writes || !n && !r) return;
    return this.earlier = n ? [] : this.earlier, this.own = r ? void 0 : this.own, this.note()
  }
  guardEnded(e) {
    if (this.guardLapsed = !0, this.stampsCountFrom = e, this.unanswered.clear(), !this.writes || this.own === void 0) return;
    return this.own = void 0, this.note()
  }
  earlierSpansTried(e) {
    return this.replaceEarlier(this.earlier.map((s) => ({
      ...s,
      until: s.until ?? e ?? this.startedAt,
      tries: s.tries + 1
    })))
  }
  earlierRowsSentAgain(e) {
    for (let s of e) this.sentAgain.add(s)
  }
  earlierRowsWithdrawn() {
    this.sentAgain.clear()
  }
  earlierSpansGivenUp() {
    return this.replaceEarlier([])
  }
  reportWithNoteRefused() {
    this.writes = !1, this.refused = !0
  }
  replaceEarlier(e) {
    if (!this.writes || this.earlier.length === 0) return;
    return this.earlier = e, this.note()
  }
  openOwnSpan(e) {
    if (!this.writes || this.own !== void 0) return;
    return this.own = {
      since: this.guardLapsed ? e.toISOString() : new Date(Math.max(Date.parse(this.runOpenedAt), this.stampsCountFrom)).toISOString(),
      tries: 0
    }, this.guardLapsed = !1, this.note()
  }
  note() {
    let e = this.earlier.map((n) => ({
        ...n,
        until: n.until ?? this.startedAt
      })),
      s = this.own ? [...e, this.own] : e;
    return {
      client_rows_owed: s.length > 0 ? {
        v: 1,
        spans: s
      } : null
    }
  }
}

function at(e) {
  let s = D(e.message) ? e.message.content : void 0;
  return typeof e.uuid === "string" && Array.isArray(s) && e.isSidechain !== !0 && !e.parent_tool_use_id && (e.type === "assistant" || e.type === "user" && s.some((n) => D(n) && n.type === "tool_result")) ? e.uuid : void 0
}

function wmi(e, s, n = () => !0) {
  let r = "nothing",
    h = e.flatMap(({
      since: v,
      until: y
    }) => {
      let O = s.findIndex(xe(v)),
        M = O < 0 ? [] : s.slice(O),
        P = y === void 0 ? -1 : be(y) ? M.findIndex(xe(y)) : M.findIndex((B) => B.uuid === y) + 1,
        F = P < 0 ? M : M.slice(0, P);
      if (y !== void 0 && !be(y) && !s.some((B) => B.uuid === y) || F.some((B) => B.type === "system" && B.subtype === "compact_boundary")) r = "rows_before_a_compaction";
      let S = [];
      for (let B of F) {
        let H = at(B) !== void 0 && n(B);
        if (H === "nor_any_after_it") {
          r = "reply_without_this_sessions_mark";
          break
        }
        if (H) S.push(B)
      }
      return S.length > 0 ? [S] : []
    }),
    w = new Set;
  for (let v of h) {
    let y = 0,
      O = 0,
      M = v.toReversed().findIndex((P, F) => (y += Buffer.byteLength(_(P)), O += D(P.message) && Array.isArray(P.message.content) ? P.message.content.length : 1, F > 0 && (O > Math.floor(YXr / h.length) || y > Ms / h.length)));
    for (let P of M < 0 ? v : v.slice(v.length - M)) w.add(P);
    if (M >= 0) r = "rows_over_the_limits"
  }
  return {
    rows: [...w],
    leftOut: r
  }
}

function kmi(e, s, n) {
  let r = s.findIndex(xe(Math.min(...e.map(({
      since: w
    }) => Date.parse(w))))),
    h = (r < 0 ? s : s.slice(0, r)).findLast(n)?.uuid;
  return typeof h === "string" ? h : void 0
}

function xe(e) {
  let s = new Date(e).getTime();
  return (n) => typeof n.timestamp === "string" && Date.parse(n.timestamp) >= s
}
var Cs = {
    message_start: !0,
    message_delta: !0,
    message_stop: !0,
    content_block_start: !0,
    content_block_delta: !0,
    content_block_stop: !0
  },
  Ps = {
    text_delta: !0,
    input_json_delta: !0,
    citations_delta: !0,
    thinking_delta: !0,
    signature_delta: !0,
    compaction_delta: !0
  };

function dt(e) {
  let {
    event: s
  } = e;
  if (s.type === "message_start" && s.message?.input_transformations) {
    let {
      input_transformations: n,
      ...r
    } = s.message;
    return {
      ...e,
      event: {
        ...s,
        message: r
      }
    }
  }
  if (s.type === "message_delta" && s.input_transformations) {
    let {
      input_transformations: n,
      ...r
    } = s;
    return {
      ...e,
      event: r
    }
  }
  return e
}

function Ue(e, s) {
  let n = Os(e.event),
    r = Object.entries(n).map(([h, w]) => `${h}=${w}`).join(" ");
  t(`CCRClient: dropping oversize ephemeral stream_event (${r}, ${s} bytes, over the ${jEn}-byte limit)`, {
    level: "warn"
  }), c("ccr_partial_messages", "oversize_ephemeral_skipped", {
    ...n,
    bytes: s
  })
}

function Os(e) {
  if (!D(e)) return {
    event_type: b("other")
  };
  let {
    type: s,
    delta: n,
    content_block: r
  } = e, h = D(r) ? r.type : void 0;
  return {
    event_type: f(lt(Cs, s)),
    ...s === "content_block_delta" && {
      delta_type: f(lt(Ps, D(n) ? n.type : void 0))
    },
    ...s === "content_block_start" && {
      content_block_type: qNe(h) ? f(h) : b("other")
    }
  }
}

function lt(e, s) {
  for (let n in e)
    if (n === s) return n;
  return "other"
}
var Is = 500,
  Fs = 60000;

function xs(e) {
  if (e.type !== "stream_event" || e.parent_tool_use_id != null) return !1;
  let {
    event: s
  } = e;
  if (!D(s) || s.type !== "content_block_delta") return !1;
  let {
    delta: n
  } = s;
  return D(n) && n.type === "text_delta" && typeof n.text === "string" && /\S/.test(n.text)
}

function ut(e, s, n, r) {
  let h = s.filter((M) => xs(M.payload) && !n.has(M));
  if (h.length === 0) return;
  for (let M of h) n.add(M);
  let w = ht(e),
    {
      posts: v,
      gapsOver500Ms: y,
      lastPostAtMs: O
    } = w;
  if (w.posts++, O !== void 0 && r - O > Is) w.gapsOver500Ms++;
  return w.lastPostAtMs = r, () => {
    for (let M of h) n.delete(M);
    w.posts = v, w.gapsOver500Ms = y, w.lastPostAtMs = O
  }
}

function ct(e, s) {
  if (!(s >= 0)) return;
  let n = ht(e);
  n.timerMaxLateMs = Math.max(n.timerMaxLateMs ?? 0, Math.min(Math.round(s), Fs))
}

function ht(e) {
  return e.textRhythm ??= {
    posts: 0,
    gapsOver500Ms: 0,
    lastPostAtMs: void 0,
    timerMaxLateMs: void 0
  }, e.textRhythm
}
class Le {
  counts = {
    wholeTurnHolds: 0,
    wholeTurnHoldsKeptToTurnEnd: 0,
    clientEvents: {
      releases: 0,
      heldRows: 0,
      maxHeldRows: 0,
      maxHeldMs: 0
    },
    internalEvents: {
      releases: 0,
      heldRows: 0,
      maxHeldRows: 0,
      maxHeldMs: 0
    }
  };
  wholeTurnHoldStands = !1;
  released(e, s, n) {
    let r = e === "client_events" ? this.counts.clientEvents : this.counts.internalEvents;
    r.releases += 1, r.heldRows += s, r.maxHeldRows = Math.max(r.maxHeldRows, s), r.maxHeldMs = Math.max(r.maxHeldMs, n)
  }
  wholeTurnHoldStarted() {
    if (!this.wholeTurnHoldStands) this.wholeTurnHoldStands = !0, this.counts.wholeTurnHolds += 1
  }
  wholeTurnHoldEndedEarly() {
    this.wholeTurnHoldStands = !1
  }
  turnEnded() {
    if (this.wholeTurnHoldStands) this.wholeTurnHoldStands = !1, this.counts.wholeTurnHoldsKeptToTurnEnd += 1
  }
}
class Be {
  inflight = null;
  pending = null;
  pendingWaits = !1;
  pendingSince = 0;
  waitTimer = null;
  requeued = null;
  requeuedMetadata = null;
  remembered = {};
  sending = null;
  closingToNewPatches = new AbortController;
  hasDroppedSomething = !1;
  cutKeptMetadata = !1;
  closed = !1;
  config;
  constructor(e) {
    this.config = e
  }
  enqueue(e) {
    if (this.closed || this.isClosedToNewPatches) {
      this.hasDroppedSomething = !0;
      return
    }
    if (this.pending && "worker_status" in this.pending && "worker_status" in e) this.drain();
    let s = !("worker_status" in e) && (this.config.waitsForStatus?.(e) ?? !1);
    if (this.pendingWaits = (this.pending === null || this.pendingWaits) && s !== !1, this.pendingWaits && typeof s === "number") this.waitTimer ??= setTimeout(() => this.sendWaiting(), s);
    if (this.pending === null) this.pendingSince = Date.now(), this.pending = e;
    else this.pending = ve(this.pending, e);
    if ("worker_status" in e) this.requeued = null;
    if (this.requeuedMetadata &&= Re(this.requeuedMetadata, e), this.remember(e), this.config.mergesSameRun?.()) queueMicrotask(() => void this.drain());
    else this.drain()
  }
  requeueStatus(e) {
    if (this.closed || this.isClosedToNewPatches) {
      this.hasDroppedSomething = !0;
      return
    }
    if (this.pending && "worker_status" in this.pending) return;
    this.requeued = e, this.drain()
  }
  requeueMetadata(e) {
    if (this.closed || this.isClosedToNewPatches) {
      this.hasDroppedSomething = !0;
      return
    }
    this.putBackMetadata(e)
  }
  putBackMetadata(e) {
    this.requeuedMetadata = Re(ve(this.requeuedMetadata ?? {}, e), this.pending ?? {}), this.drain()
  }
  remember(e) {
    if (this.config.remembers) this.remembered = ve(this.remembered, e)
  }
  sendWaiting(e = 0) {
    if (this.pendingWaits && (e <= 0 || Date.now() - this.pendingSince >= e)) this.pendingWaits = !1, this.drain()
  }
  closeToNewPatches() {
    if (this.closed) return;
    if (this.pendingWaits = !1, this.disarmWaitTimer(), this.drain(), this.closingToNewPatches.abort(), this.hasDroppedSomething ||= this.requeued !== null, this.requeued = null, this.pending) this.hasDroppedSomething ||= "worker_status" in this.pending, this.pending = this.withoutStatus(this.pending)
  }
  get isClosedToNewPatches() {
    return this.closingToNewPatches.signal.aborted
  }
  get hasCutKeptMetadata() {
    return this.cutKeptMetadata
  }
  get owesMetadata() {
    return this.isClosedToNewPatches && !this.closed && (this.pending !== null || this.requeuedMetadata !== null || this.sending !== null && this.withoutStatus(this.sending) !== null)
  }
  keepsWithoutStatus(e) {
    return this.withoutStatus(e) !== null
  }
  withoutStatus(e) {
    if (!("worker_status" in e)) return e;
    let s = e.internal_metadata,
      n = D(s) ? vo(s, (this.config.ridesAStatus ?? []).filter((r) => s[r] !== null || !this.config.deleteOutlivesStatus?.includes(r))) : {};
    return Object.keys(n).length > 0 ? {
      internal_metadata: n
    } : null
  }
  close() {
    this.pendingWaits = !1, this.drain(), this.closed = !0, this.clearPending(), this.requeued = null, this.requeuedMetadata = null
  }
  get unsent() {
    return this.inflight !== null || this.pending !== null
  }
  async flush() {
    while (!this.closed)
      if (this.inflight) await this.inflight;
      else if (this.pending || this.requeued || this.requeuedMetadata) this.pendingWaits = !1, await this.drain();
    else return !this.hasDroppedSomething;
    return !1
  }
  async drain() {
    if (this.inflight || this.closed) return;
    let e = this.pendingWaits ? null : this.pending,
      s = e ?? this.requeued,
      n = !e;
    if (e) this.clearPending();
    else if (this.requeued) this.requeued = null;
    else if (this.requeuedMetadata) {
      let r = Re(this.requeuedMetadata, {
        internal_metadata: Object.fromEntries((this.config.requeuedAlone ?? []).map((v) => [v, null]))
      });
      if (r === null && this.pending) return;
      let [
        [h, w] = []
      ] = Object.entries(r ?? this.requeuedMetadata);
      s = h === void 0 ? null : {
        [h]: w
      }, this.requeuedMetadata = s && Re(this.requeuedMetadata, s)
    }
    if (!s) return;
    this.inflight = this.sendWithRetry(s, n).then(() => {
      if (this.inflight = null, this.sending = null, (this.pending || this.requeued || this.requeuedMetadata) && !this.closed) this.drain()
    })
  }
  async sendWithRetry(e, s) {
    let n = e,
      r = 0,
      h = !1;
    while (!this.closed) {
      if (this.sending = n, await this.config.send(n)) return;
      if (this.handsBackWithoutStatus(n)) return;
      if (this.isClosedToNewPatches && s && !("worker_status" in n) && this.pending && !this.closed) {
        this.putBackMetadata(n);
        return
      }
      if (this.isClosedToNewPatches && !h) h = !0, r = 0;
      if (r++, await J(this.retryDelay(r), this.isClosedToNewPatches ? void 0 : this.closingToNewPatches.signal), this.handsBackWithoutStatus(n)) return;
      if (this.pending && !this.closed) {
        if (s) {
          if (!("worker_status" in n) && !this.pendingWaits) {
            this.putBackMetadata(n);
            return
          }
          if ("worker_status" in n && "worker_status" in this.pending) return;
          continue
        }
        n = ve(n, this.pending), this.clearPending()
      }
    }
  }
  handsBackWithoutStatus(e) {
    if (!this.isClosedToNewPatches || !("worker_status" in e)) return !1;
    if (this.closed) return !0;
    return this.hasDroppedSomething = !0, this.cutKeptMetadata ||= this.pending !== null && "external_metadata" in this.pending, this.pending = this.withoutStatus(this.pending ? ve(e, this.pending) : e), !0
  }
  clearPending() {
    this.pending = null, this.disarmWaitTimer()
  }
  disarmWaitTimer() {
    if (this.waitTimer) clearTimeout(this.waitTimer), this.waitTimer = null
  }
  retryDelay(e) {
    let s = Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs),
      n = Math.random() * this.config.jitterMs;
    return s + n
  }
}

function Re(e, s) {
  let n = {};
  for (let [r, h] of Object.entries(e)) {
    let w = Ro(h, (v, y) => !(y in (s[r] ?? {})));
    if (Object.keys(w).length > 0) n[r] = w
  }
  return Object.keys(n).length > 0 ? n : null
}

function ve(e, s) {
  let n = {
    ...e
  };
  for (let [r, h] of Object.entries(s))
    if ((r === "external_metadata" || r === "internal_metadata") && n[r] && typeof n[r] === "object" && typeof h === "object" && h !== null) n[r] = {
      ...n[r],
      ...h
    };
    else n[r] = h;
  return n
}
var pt = {},
  $t = 20000,
  ft = 1e4,
  zt = 15000,
  jt = 5000,
  Gt = jt,
  Ls = 5000,
  Bs = 300000,
  XXr = 2000,
  Hs = zt + Gt + 2 * $t,
  Ns = 5000,
  _t = 1.5,
  Ds = 3,
  qs = new Set([401, 403, 404, 429]),
  k6t = 100,
  JXr = 20;

function re(e) {
  return e === 400 || e === 413 || e === 422
}
var Ge = "/worker/event-batch",
  $s = new Set([404, 405, 501]),
  zs = 60000,
  js = 1920000,
  Gs = "x-ccr-upload-attempt",
  Ke = 1e4,
  Ks = 60000,
  Vs = 1e4,
  mt = 60000,
  Pe = 1048576,
  Ys = 4 * Pe - 65536,
  Xs = 5000,
  Qs = 120000,
  Js = 1.5,
  Ve = 262144;

function gt(e, {
  maxMs: s,
  minMs: n = Ke
}) {
  let r = Ke + Math.round(e.bytes / Pe * (Xs / 1000)) * 1000,
    h = e.bytes >= Ve && !e.cuttable ? r * Js ** e.retryCount : r;
  return Math.max(n, Math.min(s, Math.round(h)))
}
var Zs = new Set(["remote_tool_call", "remote_plumbing_call"]);

function en(e) {
  return Zs.has(Kt(e))
}
var sn = new Set(ZIe),
  nn = 256,
  rn = new Set(["apply_flag_settings", "set_max_thinking_tokens", "set_permission_mode", "mcp_set_servers", "mcp_reconnect", "reload_skills"]),
  wt = 1000,
  on = 64,
  an = new Set(["initialize", "stage_file", "prefetch_attachments", "set_chrome_browser_hints", "mcp_toggle", "set_mcp_permission_mode_override", "set_model"]);

function yt(e) {
  if (!D(e)) return !1;
  return e.type === "control_request" ? D(e.request) && rn.has(e.request.subtype) : e.type === "control_response"
}

function Kt(e) {
  let s = e.payload.type === "control_request" ? e.payload.request : void 0;
  return typeof s === "object" && s !== null && "subtype" in s ? s.subtype : void 0
}

function ke(e) {
  let s = k(e);
  if (s) return s;
  if (e && typeof e === "object" && "name" in e && typeof e.name === "string") return e.name;
  return
}
class QIe extends Error {
  reason;
  httpStatus;
  noAnswer;
  constructor(e, s, n = !1) {
    super(`CCRClient init failed: ${e}`);
    this.reason = e;
    this.httpStatus = s;
    this.noAnswer = n
  }
}

function vmi(e) {
  return e instanceof QIe && e.reason === "worker_register_failed" && !re(e.httpStatus)
}
var dn = 10,
  QXr = {
    epoch_conflict: 4090,
    superseded_by_worker: 4090,
    session_not_active: 4090,
    organization_moved_away: 4090,
    epoch_stale: 4090,
    session_not_found: 4090,
    token_expired: 4094,
    auth_exhausted: 4094
  },
  un = {
    epoch_conflict: !0,
    superseded_by_worker: !0,
    session_not_active: !0,
    organization_moved_away: !0,
    epoch_stale: !0,
    session_not_found: !1,
    token_expired: !1,
    auth_exhausted: !1
  },
  cn = 3,
  hn = 10,
  pn = 3,
  Te = 3,
  fn = 100;
async function _n(e, s) {
  let n = e.body?.getReader(),
    r = new TextDecoder,
    h = "",
    w = 0;
  for (let v = await n?.read(); v !== void 0 && !v.done; v = await n?.read()) {
    if (w += v.value.byteLength, w > s) return await n?.cancel(), null;
    let y = r.decode(v.value, {
      stream: !0
    });
    if (y === "" && v.value.byteLength > 6) throw n?.cancel().catch(() => {}), RangeError("out of memory while decoding a page");
    h += y
  }
  return {
    text: h + r.decode(),
    bytes: w
  }
}

function mn(e, s) {
  let n = e.payload?.timestamp;
  return s === void 0 || n === void 0 || typeof n === "string" && n.length <= s
}
var vn = 1e4,
  gn = 300,
  bt = 30000;

function Rt(e) {
  return e !== void 0 && e >= 400 && e < 500 ? "not_accepted" : "indeterminate"
}

function He(e) {
  let s = !1,
    n = !1;
  for (let r of e)
    if (r.payload.subtype === "task_notification") s = !0;
    else if (r.payload.subtype === "background_tasks_changed") n = !0;
  return s || n ? {
    has_terminal_bookend: s,
    has_level: n
  } : null
}

function Me(e) {
  return Math.min(Math.max(0, Math.trunc(e) || 0), 2147483647)
}
var Et = {
    "/worker": "worker_state",
    [Ge]: "events",
    "/worker/events": "events",
    "/worker/events/delivery": "delivery",
    "/worker/heartbeat": "heartbeat",
    "/worker/internal-events": "internal_events"
  },
  wn = 512,
  yn = "upgrade_relay_marker";

function Vt(e) {
  return {
    tool_name: e.tool_name,
    display_tool_name: e.display_tool_name,
    action_description: e.action_description,
    raw_command: e.raw_command,
    request_id: e.request_id,
    tool_use_id: e.tool_use_id
  }
}
var Sn = p(() => u({
    tool_name: o().refine((e) => !e.startsWith("dialog:")),
    display_tool_name: o().nullish(),
    action_description: o(),
    raw_command: o().nullish(),
    request_id: o(),
    tool_use_id: o().min(1),
    suppressed_request_id: o().nullish()
  })),
  Yt = p(() => xt({
    event_id: o(),
    event_type: o(),
    payload: me(o(), oe()),
    event_metadata: me(o(), oe()).nullish(),
    is_compaction: I(),
    created_at: o(),
    session_agent_id: o().optional()
  })),
  bn = p(() => u({
    data: C(Yt()),
    next_cursor: o().optional()
  })),
  Rn = p(() => u({
    data: C(Yt().extend({
      payload: xt({
        type: T("agent_metadata")
      }),
      session_agent_id: o()
    })).optional()
  })),
  En = p(() => u({
    results: C(u({
      event_id: o(),
      duplicate: I()
    }))
  }));

function kn(e) {
  let s = Sn().safeParse(e);
  if (!s.success) return;
  let n = s.data,
    r = $2(n);
  if (r === void 0) return;
  return {
    requestId: r,
    details: Vt({
      tool_name: n.tool_name,
      display_tool_name: n.display_tool_name ?? void 0,
      action_description: n.action_description,
      raw_command: n.raw_command ?? void 0,
      request_id: n.request_id,
      tool_use_id: n.tool_use_id
    })
  }
}

function Tn(e) {
  if (e === "pending") return {
    status: "idle",
    reason: "get_pending"
  };
  if (e.readFailed) return {
    status: "idle",
    reason: "get_failed"
  };
  let s = e.external?.pending_action;
  if (s === void 0 || s === null) return {
    status: "idle",
    reason: "no_pending_action"
  };
  let n = kn(s);
  if (!n) return {
    status: "idle",
    reason: "not_reportable"
  };
  return {
    status: "requires_action",
    reason: "park",
    ...n
  }
}

function Mn(e, s) {
  if (e === "requires_action") return {
    reported: e
  };
  let n = s.external?.pending_actions;
  return {
    reported: e,
    pendingActionOutstanding: s.readFailed === !0 || s.external?.pending_action !== void 0 && s.external.pending_action !== null || Array.isArray(n) && n.length > 0
  }
}
var An = p(() => xt({
    max_events: E().nullish(),
    max_age_ms: E().nullish(),
    max_bytes: E().nullish(),
    flush_on_sampling_end: I().nullish(),
    flush_on_assistant: I().nullish(),
    event_batch_upload: I().nullish().catch(void 0),
    hold_across_model_calls: I().nullish().catch(void 0),
    hold_again: xt({
      soft_age_ms: E().nullish(),
      soft_events: E().nullish(),
      after: C(o()).nullish(),
      never_after_tools: C(o()).nullish(),
      tools_whose_results_wait: C(o()).nullish(),
      later_worker_holds_first_turn: I().nullish().catch(void 0)
    }).nullish().catch(void 0),
    may_wait_types: C(o()).nullish().catch(void 0),
    flush_after_tool_names: C(o()).nullish().catch(void 0),
    settings_receipts_max_wait_ms: E().nullish().catch(void 0),
    messages_received_waits: I().nullish().catch(void 0),
    receipts_ride_uploads: I().nullish().catch(void 0),
    flush_before_tools_wait_ms: E().nullish(),
    flush_after_tools: o().nullish(),
    must_flush_types: C(o()).nullish(),
    live_twin_types: C(o()).nullish().catch(void 0),
    live_only_types: C(o()).nullish().catch(void 0),
    transcript_max_age_ms: E().nullish().catch(void 0),
    no_turn_max_age_ms: E().nullish().catch(void 0),
    merge_worker_reports: I().nullish().catch(void 0),
    control_traffic_keeps_hold: I().nullish().catch(void 0),
    empty_checkpoint_keeps_hold: I().nullish().catch(void 0),
    first_turn_holds_each_call: I().nullish().catch(void 0),
    settings_answers_max_wait_ms: E().nullish().catch(void 0),
    init_max_wait_ms: E().nullish().catch(void 0),
    metadata_waits_for_status: C(o()).nullish().catch(void 0),
    metadata_never_sent: C(o()).nullish().catch(void 0),
    metadata_max_wait_ms: E().nullish().catch(void 0),
    cost_report_max_wait_ms: E().nullish().catch(void 0),
    policy_version: o().nullish()
  })),
  Cn = 50,
  Pn = 90,
  Xt = 120000,
  Qt = 60000,
  ge = 240000,
  kt = 30000,
  On = 2000,
  In = 1e4,
  Fn = 600000,
  xn = 5000,
  Wn = 1000,
  Un = 256,
  Ln = 2000,
  Bn = 5000,
  Hn = 1048576,
  Nn = new Set(["Bash", "Write", "Edit", "NotebookEdit", "Agent"]),
  Dn = 256,
  qn = 3000,
  $n = 5000,
  zn = 100,
  Tt = 32,
  Ne = 32,
  Gn = ge,
  Kn = 16;

function Ae(e, s) {
  return s === "processed"
}
var Vn = new Set(["apply_flag_settings", "set_max_thinking_tokens", "mcp_set_servers"]),
  Jt = "system/foreground_shell_task_rows",
  Zt = "system/status_requesting_repeat",
  es = "system/status_requesting_repeat_releasing",
  ts = "system/status_requesting_repeat_starting",
  ss = "system/status_requesting_first",
  ns = "system/status_requesting_repeat_waiting",
  rs = "system/status_requesting_repeat_after_input",
  Ye = "system/status_requesting_behind_sub_agent",
  Yn = new Set(["system/task_summary", Jt, Zt, es, ts, ss, ns, rs, Ye]),
  Mt = new Set(["rate_limit_event/allowed", "system/task_summary", "system/post_turn_summary", "system/commands_changed", "system/permission_check_status", "system/hook_started", "system/hook_response", "system/informational", "system/peer_message_hold", "system/permission_denied", "system/session_metadata", "system/session_title_changed", "system/per_turn_effort_changed", "system/instruction_size_warning", "system/slack_tag_title", "system/vcs_state_changed", "tool_use_summary", "system/task_started_foreground_shell", "system/task_notification_foreground_shell"]),
  Xn = 32,
  is = new Set(["post_turn_summary", "recap", "context_usage", "rate_limit_info", "task_summary"]),
  Qn = new Set([...is, "last_served_model"]),
  Jn = ge,
  Zn = new Set(["context_usage", "cross_session_inbound", "is_ultraplan_mode", "last_served_model", "permission_mode", "rate_limit_info"]),
  At = g$n,
  er = 64512,
  tr = /^[A-Za-z0-9._-]{1,16}$/,
  sr = 30000,
  nr = 2000,
  rr = ["none", "write", "all"],
  ir = 64,
  or = 50,
  ar = 5000,
  lr = !1,
  dr = 3000,
  ur = 1e4,
  Xe = (e) => e.ephemeral === !0 || e.payload.type === "keep_alive",
  Ct = (e) => Xe(e) || e.payload.type === "control_response",
  Pt = () => !1;

function I7o() {
  return i.CLAUDE_CODE_WORKER_EPOCH ?? NaN
}
var cr = ["cumulative_cost_usd", "cumulative_input_tokens", "cumulative_output_tokens", "cumulative_cache_read_tokens", "cumulative_cache_write_tokens"],
  as = new Set([...cr, "cost_state", "memory_extract_place", "model_turn_stored"]),
  Ce = "disabled_mcp_servers",
  hr = 64;

function Ot(e) {
  return Object.entries(e).filter(([s]) => as.has(s) || s === "last_served_model" || s === "worker_permission_mode" || s === "plan_doc" || s === "card_turn_stamp")
}

function pe(e) {
  return 1 + (e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : 4) + e
}

function Qe(e) {
  if (typeof e === "string") return pe(Buffer.byteLength(e));
  if (typeof e === "number") return 9;
  let s = 0;
  if (Array.isArray(e))
    for (let n of e) s += pe(Qe(n));
  else if (D(e)) {
    for (let [n, r] of Object.entries(e))
      if (r !== void 0) s += pe(pe(Buffer.byteLength(n)) + pe(Qe(r)))
  } else return 2;
  return pe(s)
}

function pr(e) {
  let s = e?.error;
  return s?.type === "not_found_error" && s.resource_type === "client_event"
}

function It(e, s) {
  return e.toLowerCase() === s.toLowerCase()
}

function fr(e) {
  if (e === 404) return "http_404_unknown_body";
  if (e === 401 || e === 403) return "http_refused";
  if (e === 429) return "http_rate_limited";
  if (e === 501) return "http_not_served";
  return e >= 500 ? "http_server_error" : "http_other"
}
var _r = p(() => u({
  event_id: o(),
  source: T("client"),
  created_at: o(),
  payload: xt({
    uuid: o()
  }),
  sent_by_account_id: o().nullish(),
  device_attestation_status: oe().optional(),
  session_agent_owned: I()
}));

function mr(e, s) {
  let n = _r().safeParse(e);
  if (!n.success) return {
    kind: "unavailable",
    why: "malformed"
  };
  let {
    event_id: r,
    created_at: h,
    payload: w
  } = n.data, v = Date.parse(h);
  if (!It(r, s) || !Number.isFinite(v) || !It(w.uuid, s)) return {
    kind: "unavailable",
    why: "malformed"
  };
  return {
    kind: "event",
    event: {
      eventId: s,
      createdAtMs: v,
      sentByAccountId: n.data.sent_by_account_id ?? void 0,
      deviceAttestationStatus: n.data.device_attestation_status,
      sessionAgentOwned: n.data.session_agent_owned,
      payload: w
    }
  }
}

function ZXr(e, s) {
  if (e.protocol !== "http:" && e.protocol !== "https:") {
    let r = R$n(e.protocol, "session_url_protocol");
    throw Error(`CCRClient: Expected http(s) URL${r===void 0?"":`, got ${r}`}`)
  }
  let n = e.pathname.replace(/\/$/, "");
  return {
    sessionBaseUrl: `${e.protocol}//${e.host}${n}`,
    getAuthHeaders: s
  }
}
class m$ {
  workerEpoch = 0;
  heartbeatIntervalMs;
  heartbeatJitterFraction;
  seedHeartbeatIntervalMs;
  advertiseHeartbeatProbeSupport;
  uploadTrim;
  withholdsWholeFiles = ldn();
  keepsRequestId;
  uploadHoldMarker;
  skipsGoodbyeDuringResumeLoad;
  shellTaskRowsLiveOnly;
  liveOnlyShellStarts;
  servedCallRequestsJumpQueue;
  maxEventPostTimeoutMs;
  urgentRequestIds = new Set;
  followsServedPolicy;
  launchFlushPolicy;
  processExiting;
  gatesToolCalls;
  toolCallRowGraceMs;
  flushPolicy;
  holdRule;
  settingsRequestIds = new Set;
  waitingAnswers = [];
  waitingAnswersTimer = null;
  lastRateLimitKind;
  lastRateLimitRepeat;
  seesModelCallBoundaries = !1;
  lastRequestingList;
  liveOnlyFirstRow;
  turnTookInput = !1;
  housekeepingRequestIds = new Set;
  toolResultEndsCall = !1;
  liveOnlyRequestingRow;
  heldRepeatUuid;
  subAgentWroteSinceStoredRequesting = !1;
  indexBehindHeldToolResult;
  liveOnlyStartingRow;
  turnHold = "open";
  modelTurnEnded = !1;
  recordAtStart;
  reportedKeys = new Set;
  autocompactStateStored;
  stateRowTypesWritten = new Set;
  sessionModelTurnStored = !1;
  resultThatMarks;
  secondCallStartsHold = !1;
  modelCallStreamed = !1;
  streamedResponseId;
  holdsNoMoreThisTurn = !1;
  newestResponseId;
  unansweredCalls = new Set;
  callsWhoseResultsWait = new Set;
  heldResultNeedsStore = !1;
  pickupBarriers = [];
  pickupTakesTick = !1;
  pickupWaitMs;
  inboundMessageUuids = new Set;
  liveTurnId;
  nextLiveIndex = 0;
  heldShellTaskIds = new Set;
  rowsMarkedLiveOnly = new WeakSet;
  artifactSocketIds;
  lastTaskList;
  droppedBeforeLiveTurn = 0;
  lastViewerCheckpointAtMs = 0;
  viewerCheckpointTimer = null;
  shutdownReleased = !1;
  shutdownKeepsClientEvents = !1;
  shutdownBeganAtMs = 0;
  owedMetadataDropsAtShutdown = 0;
  viewerAbsentReported = !1;
  stopToolCallGate;
  keepAliveAtWorkStart;
  stopWorkStartKeepAlive;
  toolCallRows = {
    client_events: new Map,
    internal_events: new Map
  };
  toolCallRowWaiters = new Map;
  awaitedToolCalls = new Set;
  transcriptLaneInUse = !1;
  toolCallsWhoseResultReleases = new Set;
  lanesNotAnswering = new Set;
  loggedUnreadableFlushPolicy = !1;
  loggedTranscriptEnvelopeStrip = !1;
  loggedToolResultBlank = !1;
  loggedMcpImageBlank = !1;
  loggedWholeFileWithheld = !1;
  loggedRequestIdKept = !1;
  maxAdvisedIntervalMs;
  beatOnStaleReconnect;
  beatOnReactivation;
  skipRedundantHeartbeats;
  idleTracker;
  unsubscribeIdleTracker;
  probeBeatSpacingMs;
  heartbeatTimer = null;
  heartbeatInFlight = !1;
  lastHeartbeatSentAtMs = 0;
  lastCadenceTickAtMs = 0;
  lastBeatingEventsPostOkAtMs = 0;
  lastEventsAnswerOrPulseAtMs = 0;
  keepAliveAloneSentAtMs = -1 / 0;
  eventsPostsFailingSinceMs;
  eventsPostRateLimited = !1;
  skippedPreviousCadenceBeat = !1;
  lastHeartbeatSuccessAtMs = Date.now();
  heartbeatsSent = 0;
  lastSucceededBeat = 0;
  lastSettledBeat = 0;
  lastHeartbeat429AtMs = 0;
  idleGrantLatched = !1;
  reactivationBeatArmed = !1;
  pendingForcedBeat = !1;
  probeBeatTimer = null;
  pendingBeatTrigger = null;
  closed = !1;
  closeAbort = new AbortController;
  goodbyeFlushed = Promise.resolve();
  leftMidTurn = !1;
  epochSuperseded = !1;
  lastEpochMismatchCause;
  epochMismatchCount = 0;
  consecutiveAuthFailures = 0;
  lastAuthRefreshBadReason = null;
  consecutiveNotFound = 0;
  consecutiveHeartbeatFailures = 0;
  currentState = null;
  reportParkAtInit;
  guardsClientRows;
  clientRowsSwitchIsOn = !1;
  hasDisplayHooks = void 0;
  displayHookSeen = !1;
  clientRowsOwed = new We;
  ownRowsWaitBehindRowsSentAgainSince = void 0;
  initExternalMetadata;
  initialWorkerStatus;
  initStateGetOrderingBoundMs;
  stateReadEndsAtRegistration;
  startReportsMaxWaitMs;
  startReportsWaitUntilMs = 0;
  parkReportedAtInitRequestId = void 0;
  sessionBaseUrl;
  sessionId;
  readSource;
  streamEventBuffer = [];
  streamEventTimer = null;
  firstFrameUpload;
  firstTextFrameUpload;
  firstBlockFrameUpload;
  countedTextEvents = new WeakSet;
  streamEventBufferedAt = 0;
  streamEventFlushDueAt = 0;
  streamEventFlushIntervalMs = k6t;
  streamEventFirstFlushMs = 0;
  streamEventWindowRunsFromLastFlush = !1;
  heldBunchFlushMs = JXr;
  firstDeltaFlushTimer = null;
  firstContentFlushPending = !1;
  thinkingStartGoesAtOnce = !1;
  awaitingFirstBlock = !1;
  loggedThinkingStartAtOnce = !1;
  thinkingFlushMs = 0;
  thinkingBlockOpen = !1;
  toolInputFlushMs = 0;
  liveTwinWaitMs = 0;
  bufferHoldsFirstFrames = !1;
  toolInputMayWait = !1;
  toolInputChars = 0;
  streamEventTimerIsSlow = !1;
  streamEventsTakenAt = 0;
  loggedThinkingFlush = !1;
  loggedToolInputFlush = !1;
  loggedLiveTwinWait = !1;
  parkedRows = [];
  noSubscriberStreamEventFlushIntervalMs = 0;
  noSubscriberUploadHoldMs = 0;
  closingForSuccessor = !1;
  uploadHoldTally = new Le;
  undeliveredClientEventsAtClose;
  undeliveredInternalEventsAtClose;
  dropUnwatchedStreamEvents = !1;
  lastReportedHasSubscribers;
  lastInboundEventAtMs = Number.NEGATIVE_INFINITY;
  viewerReportedSinceLastFalse = !1;
  lastViewerLeftAtMs = Number.NEGATIVE_INFINITY;
  unwatchedPastGrace = !1;
  hasSubscribersReports = 0;
  streamEventsDroppedUnwatched = 0;
  streamedEphemeralSinceLastAssistant = !1;
  workerState;
  eventUploader;
  workerSocket;
  internalEventUploader;
  ridingRows;
  takenRiders;
  ridesRefused = !1;
  ridesPausedUntilMs = 0;
  routeOnlyFailures = 0;
  ridePauses = 0;
  failedRide;
  loggedRowsLeftOut = !1;
  internalEventPostWatch;
  rowsAwaitingCompactSummary = new Map;
  rowsAwaitingCompactSummaryAtClose;
  onInternalBatchAcked;
  onInternalEventLaneClosed;
  rowsRepeatedAfterCompaction;
  deliveryUploader;
  pendingProcessingAcks = [];
  waitingReceipts = new Map;
  waitingReceiptsTimer;
  messagesInProcessing = new Set;
  resultPostWaits;
  receiptsRide;
  receiptsRideRefused = !1;
  onEpochMismatch;
  lastLineWhen;
  onDurableEventsDropped = void 0;
  onDurableEventsUpload = void 0;
  getAuthHeaders;
  tickets = new Oe;
  providerWithheldReason;
  onDiagnostic;
  onCardRecordRefused;
  onRequestAuthOk;
  onHeartbeatLost;
  readTransport;
  nonOrigin403Transient;
  nonOriginRuns = new Map;
  heartbeatStreakStartedAtMs = 0;
  heartbeatLostFiredForStreak = !1;
  adoptRefreshedAuth;
  gzipRequestBodyFetch;
  ownConnectionPool;
  leavesPoolAfterServerError;
  constructor(e, s, n) {
    this.lastLineWhen = n?.onEpochMismatch ? "queued" : "now", this.onEpochMismatch = n?.onEpochMismatch ?? (() => {
      process.exit(1)
    }), this.onHeartbeatLost = n?.onHeartbeatLost, this.readTransport = e, this.workerSocket = n?.workerSocket, this.nonOrigin403Transient = n?.nonOrigin403Transient ?? !1, this.heartbeatIntervalMs = n?.heartbeatIntervalMs ?? $t, this.seedHeartbeatIntervalMs = this.heartbeatIntervalMs, this.advertiseHeartbeatProbeSupport = n?.advertiseHeartbeatProbeSupport ?? !1, this.uploadTrim = n?.uploadTrim ?? (() => pt), this.keepsRequestId = () => n?.keepsRequestId?.() === !0, this.uploadHoldMarker = () => n?.uploadHoldMarker?.() === !0, this.skipsGoodbyeDuringResumeLoad = () => n?.skipsGoodbyeDuringResumeLoad?.() !== !1;
    let r = n?.liveOnlyShellTaskRows;
    this.shellTaskRowsLiveOnly = r ? () => r.enabled() === !0 : () => this.followsServedPolicy && this.flushPolicy?.liveOnlyTypes.has(Jt) === !0, this.liveOnlyShellStarts = r?.starts ?? new Map, this.artifactSocketIds = n?.artifactSocketIds, this.servedCallRequestsJumpQueue = () => n?.servedCallRequestsJumpQueue?.() === !0, this.maxEventPostTimeoutMs = n?.maxEventPostTimeoutMs ?? Qs, this.followsServedPolicy = n?.followsServedPolicy === !0, this.keepAliveAtWorkStart = n?.keepAliveAtWorkStart, this.launchFlushPolicy = n?.launchFlushPolicy, this.processExiting = n?.processExiting ?? (() => !1), this.gatesToolCalls = n?.gatesToolCalls === !0, this.toolCallRowGraceMs = n?.toolCallRowGraceMs ?? nr, this.pickupWaitMs = n?.pickupWaitMs ?? xn, this.beatOnStaleReconnect = n?.beatOnStaleReconnect ?? !1, this.idleTracker = n?.idleTracker, this.beatOnReactivation = (n?.beatOnReactivation ?? !1) && this.idleTracker !== void 0, this.skipRedundantHeartbeats = n?.skipRedundantHeartbeats ?? !1, this.probeBeatSpacingMs = n?.probeBeatSpacingMs ?? Ns, this.heartbeatJitterFraction = n?.heartbeatJitterFraction ?? 0, this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(this.advertiseHeartbeatProbeSupport), this.getAuthHeaders = n?.getAuthHeaders ?? oG;
    let h = n?.isFirstPartyProvider;
    this.providerWithheldReason = h === void 0 ? () => "provider-unknown" : () => h() ? void 0 : "data-residency", this.onDiagnostic = n?.onDiagnostic, this.onCardRecordRefused = n?.onCardRecordRefused, this.onRequestAuthOk = n?.onRequestAuthOk, this.adoptRefreshedAuth = n?.adoptRefreshedAuth, this.gzipRequestBodyFetch = n?.gzipRequestBodyFetch, this.ownConnectionPool = n?.ownConnectionPool, this.leavesPoolAfterServerError = n?.leavesPoolAfterServerError, this.reportParkAtInit = n?.reportParkAtInit ?? !1, this.guardsClientRows = n?.guardsClientRows, this.flagsRefreshed(), this.initExternalMetadata = n?.initExternalMetadata ?? {}, this.initialWorkerStatus = n?.initialWorkerStatus ?? "idle", this.initStateGetOrderingBoundMs = n?.initStateGetOrderingBoundMs ?? vn, this.stateReadEndsAtRegistration = n?.stateReadEndsAtRegistration ?? !1, this.startReportsMaxWaitMs = n?.startReportsMaxWaitMs ?? Ln, this.readSource = {
      ...ZXr(s, this.getAuthHeaders),
      isClosed: () => this.closed,
      onConflict: (v) => this.handleEpochMismatch(v),
      ownConnectionPool: this.ownConnectionPool,
      leavesPoolAfterServerError: this.leavesPoolAfterServerError
    }, this.sessionBaseUrl = this.readSource.sessionBaseUrl, this.sessionId = s.pathname.replace(/\/$/, "").split("/").pop() || "", this.workerState = new Be({
      send: async (v) => {
        let y = this.clientRowsOwed.writesNoMore && D(v.internal_metadata) ? {
            ...v,
            internal_metadata: vo(v.internal_metadata, "client_rows_owed")
          } : v,
          O = D(y.internal_metadata) ? y.internal_metadata : {},
          M = Ce in O;
        if (M) this.refusedSwitchedOffMcpServers = null;
        let P = await this.request("put", "/worker", {
          worker_epoch: this.workerEpoch,
          ...y
        }, "PUT worker");
        if (P.ok) {
          if (y.worker_status !== void 0) g("ccr_worker_state_publish");
          let F = this.refusedSwitchedOffMcpServers;
          if (M) this.switchedOffMcpServersRefusedAlone = 0;
          else if (F !== null && F.writesToWaitFor > 0 && Object.keys(O).length > 0) F.writesToWaitFor--;
          return this.requeueRefusedSwitchedOffMcpServersOnceIdle(), !0
        }
        if (this.closed && P.status === 409) {
          if (V("warn", "cli_worker_state_4xx_dropped", {
              status: P.status
            }), this.droppedWorkerStatePatchCount++, this.workerState.keepsWithoutStatus(y)) this.droppedOwedMetadataPatchCount++;
          return !0
        }
        if (re(P.status)) {
          V("warn", "cli_worker_state_4xx_dropped", {
            status: P.status
          });
          let F = M && Object.keys(y).length === 1 && Object.keys(O).length === 1;
          if (!F) this.droppedWorkerStatePatchCount++;
          if (this.workerState.keepsWithoutStatus(y)) this.droppedOwedMetadataPatchCount++;
          if (D(y.internal_metadata) && "client_rows_owed" in y.internal_metadata) c("ccr_client_rows_owed", "report_with_note_refused", {
            status: P.status
          }), this.clientRowsOwed.reportWithNoteRefused();
          let S = D(y.external_metadata) ? y.external_metadata : {};
          if (D(S.pending_action)) this.onCardRecordRefused?.(P.status, y);
          if (M) c("mcp_switched_off_record", "write_refused"), this.refusedSwitchedOffMcpServers = {
            value: O[Ce],
            writesToWaitFor: F ? Math.min(2 ** this.switchedOffMcpServersRefusedAlone++, hr) : 1
          };
          this.requeueRefusedSwitchedOffMcpServersOnceIdle();
          let {
            internal_metadata: B,
            external_metadata: H,
            ...N
          } = y, q = Ot(O), X = Ot(S);
          if (q.length > 0 && X.length > 0 || q.length + X.length > 0 && q.length + X.length < Object.keys(N).length + Object.keys(O).length + Object.keys(S).length) this.workerState.requeueMetadata({
            ...q.length > 0 && {
              internal_metadata: Object.fromEntries(q)
            },
            ...X.length > 0 && {
              external_metadata: Object.fromEntries(X)
            }
          });
          if (y.worker_status !== void 0) {
            let z = {
              worker_status: y.worker_status,
              ..."requires_action_details" in y && {
                requires_action_details: y.requires_action_details
              },
              ..."reply_degraded" in O && {
                internal_metadata: {
                  reply_degraded: O.reply_degraded
                }
              }
            };
            if (Object.keys(y).length > Object.keys(z).length || Object.keys(O).length > 1) return this.workerState.requeueStatus(z), !0;
            c("ccr_worker_state_publish", "state_4xx_dropped")
          }
          return !0
        }
        return !1
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500,
      ridesAStatus: ["reply_degraded", "card_turn_stamp"],
      deleteOutlivesStatus: ["card_turn_stamp"],
      requeuedAlone: [Ce],
      mergesSameRun: () => this.flushPolicy?.mergeWorkerReports === !0 && this.followsServedPolicy,
      waitsForStatus: (v) => {
        let y = this.flushPolicy,
          {
            external_metadata: O = {},
            internal_metadata: M = {},
            ...P
          } = v;
        if (!y || !this.followsServedPolicy || Object.keys(P).length > 0 || !D(O) || !D(M) || [...Object.values(O), ...Object.values(M)].includes(null)) return !1;
        let F = this.startReportsWaitUntilMs - performance.now();
        if (y.mergeWorkerReports && F > 0 && this.inboundMessageUuids.size > 0 && !("worker_permission_mode" in M)) return F;
        if (this.currentState !== "running" || !Object.keys(O).every((S) => y.metadataWaitsForStatus.has(S)) || !Object.keys(M).every((S) => y.costReportMaxWaitMs > 0 && as.has(S))) return !1;
        if (Object.keys(M).length > 0) return y.costReportMaxWaitMs;
        return Object.keys(O).length > 0
      }
    }), this.eventUploader = new Esn({
      maxBatchSize: 100,
      maxBatchBytes: () => Math.min(10 * Pe, this.workerSocket?.maxBatchBytes() ?? 1 / 0),
      maxQueueSize: 1e5,
      send: this.settlesTakenRiders(async (v, y) => {
        let O = xvo(v);
        if (O > 0) t(`CCRClient: dropped ${O} repeated-uuid durable event(s) from one live-view POST`);
        let M = y.urgent ? void 0 : this.ridingRows,
          P = this.failedRide;
        if (this.failedRide = void 0, M && (this.ridesAreOff() || v.every((W) => Xe(W) || W.payload.type === "control_response") || y.bytes + M.bytes > Math.min(Ys, this.workerSocket?.maxBatchBytes() ?? 1 / 0))) this.giveBackRidingRows(), M = void 0;
        if (M) this.ridingRows = void 0, this.takenRiders = M;
        let F = !y.urgent && !v.every(Ct);
        if (F && this.receiptsMayRide() && this.messagesInProcessing.size > 0 && v.some((W) => W.payload.type === "result")) await new Promise((W) => {
          this.resultPostWaits = W, setImmediate(W)
        }), this.resultPostWaits = void 0, this.messagesInProcessing.clear();
        let S = F && this.receiptsMayRide() ? [...this.waitingReceipts].filter(([W, Z]) => Z === "processed" && Nt(W) !== null).slice(0, Kn).map(([W]) => W) : [],
          B = M ? {
            ...y,
            bytes: y.bytes + M.bytes
          } : y,
          H = gt(B, {
            maxMs: this.maxEventPostTimeoutMs,
            minMs: v.some(en) ? mt : y.followsUrgent ? Math.min(mt, this.maxEventPostTimeoutMs) : void 0
          });
        this.reportDurableUpload(v, "sending");
        let N = this.actsOnSubscribersReports(),
          q = N || this.onSubscribersReported !== void 0 || M !== void 0 || S.length > 0,
          X = this.hasSubscribersReports,
          z = [];
        for (let W of this.trackedFrameUploads("ackedAtMs"))
          if (v.some((Z) => Z.payload.uuid === W.uuid)) z.push(W.timing);
        let Y = [];
        for (let W of z)
          if (W.postedAtMs === void 0) W.postedAtMs = performance.now(), W.postedWallMs = Date.now(), Y.push(W);
        let R = this.firstTextFrameUpload?.timing,
          A = R?.postedAtMs === void 0 ? void 0 : ut(R, v, this.countedTextEvents, performance.now()),
          x;
        try {
          x = await this.request("post", M ? Ge : "/worker/events", {
            ...this.uploadBody(v, y),
            ...M && {
              worker_events: M.rows
            },
            ...S.length > 0 && {
              delivery_updates: S.map((W) => ({
                event_id: W,
                status: "processed"
              }))
            }
          }, "client events", {
            timeout: H,
            parseBody: q,
            uploadAttempt: y.attempt
          })
        } catch (W) {
          throw M?.settle(!1), W
        } finally {
          if (S.length > 0) {
            let W = this.takeWaitingReceipts((Z) => S.includes(Z));
            if (!x?.ok || x.data?.delivery_updates_applied !== !0) this.queueDeliveryAcks(W)
          }
        }
        let Q = x.ok ? x.data?.worker_results : void 0,
          K = Array.isArray(Q) && Q.length === M?.rows.length;
        if (M?.settle(K), M !== void 0 && x.ok) this.routeOnlyFailures = 0, this.ridePauses = 0;
        let j = x.ok ? 200 : x.status,
          te = M !== void 0 && x.ok && D(x.data) && Q === void 0;
        if ((M || S.length > 0) && !x.ok && (re(j) || M !== void 0 && $s.has(j))) {
          if (x = await this.request("post", "/worker/events", this.uploadBody(v, y), "client events (resent without worker_events and delivery_updates)", {
              timeout: H,
              parseBody: q,
              uploadAttempt: "resend"
            }), x.ok && j !== 413) {
            if (M !== void 0 && re(j)) te = !0;
            else if (M !== void 0) this.noteRouteOnlyFailure(j);
            if (S.length > 0 && re(j)) this.receiptsRideRefused = !0, V("warn", "cli_ccr_receipts_ride_turned_off", {
              status: j
            })
          }
        } else if (M !== void 0) {
          if (!x.ok) this.failedRide = {
            status: j
          }
        } else if (P !== void 0 && x.ok) this.noteRouteOnlyFailure(P.status);
        if (te) this.ridesRefused = !0, V("warn", "cli_ccr_joint_upload_turned_off", {
          status: j
        });
        else if (M && j === 200 && !K && !this.loggedRowsLeftOut) this.loggedRowsLeftOut = !0, V("warn", "cli_ccr_joint_upload_rows_left_out");
        if (x.ok) {
          for (let Z of z)
            if (Z.ackedAtMs === void 0) Z.ackedAtMs = performance.now();
          let W = He(v);
          if (W) g("ccr_task_status_publish", W);
          if (this.noteBeatingEventsPostOk(v), this.reportDurableUpload(v, "accepted"), this.noteToolCallRowsSettled("client_events", "stored", v), this.noteClientRowsSettled("stored", v), N && X === this.hasSubscribersReports) this.setHasSubscribers(x.data?.has_subscribers, "no_report");
          this.tellSubscribersReported(x.data?.has_subscribers);
          return
        }
        if (this.reportDurableUpload(v, Rt(x.status)), re(x.status)) {
          let W = v.filter((se) => !se.ephemeral),
            Z = v.length - W.length,
            G = x.status;
          if (Z > 0) {
            if (t(`CCRClient: client event POST rejected (${x.status}) \u2014 dropping ${Z} ephemeral event(s), retrying ${W.length} durable event(s)`, {
                level: "warn"
              }), c("ccr_partial_messages", "ephemeral_dropped_on_4xx", {
                status: x.status,
                count: Z
              }), v.splice(0, v.length, ...W), V("warn", "cli_worker_events_4xx_ephemeral_dropped", {
                status: x.status,
                count: Z
              }), W.length === 0) return;
            this.reportDurableUpload(W, "sending");
            let se = await this.request("post", "/worker/events", this.uploadBody(W, y), "client events (durable retry)", {
              timeout: H,
              uploadAttempt: "resend"
            });
            if (se.ok) {
              let le = He(W);
              if (le) g("ccr_task_status_publish", le);
              this.noteBeatingEventsPostOk(W), this.reportDurableUpload(W, "accepted"), this.noteToolCallRowsSettled("client_events", "stored", W), this.noteClientRowsSettled("stored", W);
              return
            }
            if (this.reportDurableUpload(W, Rt(se.status)), !re(se.status)) throw this.noteEventsPostFailed(se.status), se.fetchFailed ? this.retrySmaller("client_events", W, y, H, {
              bytes: W.reduce((le, Ss) => le + Buffer.byteLength(_(Ss)), 0)
            }) : new net("client event POST failed", se.retryAfterMs);
            G = se.status
          }
          if (W.length > 0) {
            this.droppedDurableEventBatches++, this.lastRateLimitKind = void 0, this.lastTaskList = void 0, this.noteToolCallRowsSettled("client_events", "dropped", W), this.noteClientRowsSettled("dropped", W);
            try {
              this.onDurableEventsDropped?.(W, G)
            } catch (se) {
              t(`CCRClient: onDurableEventsDropped threw; batch still dropped: ${d(se)}`, {
                level: "warn"
              })
            }
          }
          V("warn", "cli_worker_events_4xx_dropped", {
            status: G,
            count: W.length,
            ...Bt(W)
          });
          let ae = He(W);
          if (ae) m("ccr_task_status_publish", "status_events_4xx_dropped", ae);
          return
        }
        if (this.rowsSentAgainStepAside(v), v.length === 0) return;
        if (this.noteEventsPostFailed(x.status), x.fetchFailed) throw this.retrySmaller("client_events", v, y, H);
        if (j === void 0 && x.reason === "no_auth_headers") {
          for (let W of Y) W.postedAtMs = void 0, W.postedWallMs = void 0;
          throw A?.(), new RIr("client event POST not sent")
        }
        throw new net("client event POST failed", x.retryAfterMs)
      }),
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "client_events"),
      onDrained: this.logUploadDrain.bind(this, "client_events"),
      onIdle: () => {
        if (this.giveBackRidingRows(), this.receiptsRide) this.sendWaitingReceipts(Ae)
      }
    });
    let w = n?.internalEventUploader;
    this.internalEventUploader = new Esn({
      maxBatchSize: 100,
      maxBatchBytes: () => w?.maxBatchBytes ?? Math.min(10 * Pe, this.workerSocket?.maxBatchBytes() ?? 1 / 0),
      maxQueueSize: 200,
      maxConsecutiveFailures: w?.maxConsecutiveFailures,
      onBatchDropped: (v, y) => {
        this.droppedInternalEventBatches++, V("warn", "cli_worker_internal_events_give_up_dropped", {
          count: v,
          consecutive_failures: y
        }), l("tengu_ccr_internal_events_dropped", {
          reason: b("give_up"),
          count: v,
          consecutive_failures: y
        })
      },
      send: async (v, y) => {
        let O = this.dropOrphanedHandedOffLines(v);
        if (O > 0) {
          if (V("warn", "cli_worker_internal_events_handoff_orphans_dropped", {
              count: O
            }), l("tengu_ccr_internal_events_dropped", {
              reason: b("handoff_orphan"),
              count: O
            }), v.length === 0) return
        }
        let M = performance.now(),
          P = gt(y, {
            maxMs: this.maxEventPostTimeoutMs,
            minMs: w?.requestTimeoutMs
          }),
          F = this.offerToEventsPost(v, y),
          S = F && await F ? {
            ok: !0
          } : await this.request("post", "/worker/internal-events", this.uploadBody(v, y), "internal events", {
            timeout: P,
            uploadAttempt: y.attempt
          });
        if (this.markInternalEventPostWatch((B) => B.noteAttempt(v, M, S.ok)), S.ok) {
          this.noteToolCallRowsSettled("internal_events", "stored", v), Promise.resolve().then(() => this.onInternalBatchAcked?.(v)).catch(() => {});
          return
        }
        if (re(S.status) && O === 0 && y.mayResendInTwo()) throw l("tengu_ccr_internal_events_refused_will_split", {
          count: v.length,
          status: S.status
        }), new AIr;
        if (re(S.status)) {
          this.droppedInternalEventBatches++, this.noteRefusedInternalEvents(v), this.noteToolCallRowsSettled("internal_events", "dropped", v), V("warn", "cli_worker_internal_events_4xx_dropped", {
            status: S.status,
            count: v.length,
            ...Bt(v)
          }), l("tengu_ccr_internal_events_dropped", {
            reason: b("4xx"),
            count: v.length,
            status: S.status
          });
          let B = U(v, (H) => Dfo(H.payload) && typeof H.payload.requestId === "string");
          if (this.loggedRequestIdKept && B > 0) m("ccr_worker_error_request_id_kept", `upload_refused_${S.status}`, {
            count: B,
            status: S.status
          });
          return
        }
        if (S.fetchFailed) throw this.retrySmaller("internal_events", v, y, P);
        if (S.reason === "no_auth_headers") throw new RIr("internal event POST not sent");
        throw new net("internal event POST failed", S.nonOriginRefusal ? bt : S.retryAfterMs)
      },
      baseDelayMs: 500,
      maxDelayMs: bt,
      jitterMs: 500,
      holdMaxItems: 50,
      gatherTick: !0,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "internal_events"),
      onDrained: this.logUploadDrain.bind(this, "internal_events")
    }), this.deliveryUploader = new Esn({
      maxBatchSize: 64,
      maxQueueSize: 64,
      send: async (v) => {
        let y = await this.request("post", "/worker/events/delivery", {
          worker_epoch: this.workerEpoch,
          updates: v.map((O) => ({
            event_id: O.eventId,
            status: O.status
          }))
        }, "delivery batch");
        if (y.ok) return;
        if (re(y.status)) {
          V("warn", "cli_worker_delivery_4xx_dropped", {
            status: y.status,
            count: v.length
          }), this.droppedDeliveryAckBatches++;
          return
        }
        throw new net("delivery POST failed", y.retryAfterMs)
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500
    }), this.setStreamEventFlushIntervalMs(n?.streamEventFlushIntervalMs), this.setStreamEventFirstFlushMs(n?.streamEventFirstFlushMs), this.setThinkingStartGoesAtOnce(n?.thinkingStartGoesAtOnce), this.setStreamEventWindowRunsFromLastFlush(n?.streamEventWindowRunsFromLastFlush), this.setHeldBunchFlushMs(n?.heldBunchFlushMs), this.setThinkingFlushMs(n?.thinkingFlushMs), this.setToolInputFlushMs(n?.toolInputFlushMs), this.setLiveTwinWaitMs(n?.liveTwinWaitMs), this.setNoSubscriberStreamEventFlushIntervalMs(n?.noSubscriberStreamEventFlushIntervalMs), this.setNoSubscriberUploadHoldMs(n?.noSubscriberUploadHoldMs), this.setDropUnwatchedStreamEvents(n?.dropUnwatchedStreamEvents), e.setOnEvent((v) => {
      if (this.processExiting() && Ze(v)) return;
      this.noteSettingsRequest(v.payload);
      let y = D(v.payload) && v.payload.type === "control_request" && D(v.payload.request) ? v.payload.request.subtype : void 0;
      if (an.has(y)) {
        for (let O of [v.event_id, v.payload.uuid])
          if (typeof O === "string") this.housekeepingRequestIds.add(O), fe(this.housekeepingRequestIds)
      }
      this.reportDelivery(v.event_id, "received", D(v.payload) && v.payload.type === "user" && typeof v.payload.uuid === "string" ? v.payload.uuid : void 0, {
        controlTraffic: yt(v.payload),
        settingsRequest: Vn.has(y)
      })
    }), e.setOnHeartbeatProbe(() => {
      this.setHasSubscribers(void 0, "reset"), this.heartbeatNow("probe")
    }), e.setOnCheckpointRequest(() => this.checkpointForViewer("watcher")), e.setOnReconnected(() => {
      if (this.resyncAfterReconnect(), n?.onStreamReconnected?.(), this.holdsAcrossModelCalls()) this.checkpointForViewer("reconnect")
    }), this.unsubscribeIdleTracker = this.beatOnReactivation ? this.idleTracker?.onActivity(() => this.sendReactivationBeat()) : void 0
  }
  maxAdvisedIntervalFor(e) {
    return e ? Math.floor(Rc / (1 + this.heartbeatJitterFraction)) : Bs
  }
  setFeatureGatedOptions({
    advertiseHeartbeatProbeSupport: e,
    beatOnStaleReconnect: s,
    beatOnReactivation: n,
    skipRedundantHeartbeats: r
  }) {
    this.advertiseHeartbeatProbeSupport = e, this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(e), this.beatOnStaleReconnect = s, this.skipRedundantHeartbeats = r;
    let h = n && this.idleTracker !== void 0;
    if (h !== this.beatOnReactivation) this.beatOnReactivation = h, this.unsubscribeIdleTracker?.(), this.unsubscribeIdleTracker = h && !this.closed ? this.idleTracker?.onActivity(() => this.sendReactivationBeat()) : void 0
  }
  async initialize(e, s) {
    let n = Date.now();
    if (Object.keys(this.getAuthHeaders()).length === 0) throw new QIe("no_auth_headers");
    if (e === void 0) e = I7o();
    if (isNaN(e)) throw new QIe("missing_epoch");
    if (this.workerEpoch = e, !this.flushPolicy) this.takeUpFlushPolicy(void 0);
    let r;
    if (s?.transcriptAfterEventId) {
      let K = s.transcriptAfterEventId.catch(() => {
        return
      });
      await new Promise((j) => setImmediate(j)), r = await we(K, s.tipWaitMs ?? gn)
    }
    let h = s?.onTranscriptPosition;
    if (h && r === void 0) h(void 0);
    let w = new AbortController,
      v = !1,
      y = new AbortController,
      O = this.getWorkerState("worker_state", !1, AbortSignal.any([this.closeAbort.signal, w.signal]), {
        transcriptAfterEventId: r
      });
    if (h && r !== void 0) O.then((K) => h(K.transcriptForeground), () => h(void 0));
    let M = await Promise.race([O.then((K) => (v = !0, K.metadata), () => (v = !0, {
      external: null,
      internal: null,
      readFailed: !0
    })), J(this.initStateGetOrderingBoundMs, y.signal).then(() => "pending")]);
    y.abort();
    let P = this.reportParkAtInit ? Tn(M) : void 0,
      F = this.followsServedPolicy ? this.flushPolicy?.metadataNeverSent : void 0,
      S = {
        ...this.initExternalMetadata,
        ...Object.fromEntries(Array.from(F ?? [], (K) => [K, null]))
      },
      B = {
        worker_status: "idle",
        worker_epoch: this.workerEpoch,
        external_metadata: {
          ...S,
          task_summary: null
        }
      },
      H = P === void 0 ? {
        worker_status: this.initialWorkerStatus,
        worker_epoch: this.workerEpoch,
        external_metadata: {
          ...S,
          pending_action: null,
          pending_actions: null,
          task_summary: null
        }
      } : P.status === "requires_action" ? {
        ...B,
        worker_status: "requires_action",
        requires_action_details: P.details
      } : B,
      N = {
        ok: !1
      },
      q = new Set,
      X = 10,
      z = 0;
    for (let K = 1; K <= X; K++) {
      if (this.closed) break;
      if (z = K, N = await this.request("put", "/worker", H, "PUT worker (init)"), N.ok || this.closed) break;
      if (N.reason) q.add(N.reason);
      if (this.onDiagnostic?.(`PUT /worker failed (${N.reason??"unknown"}) attempt=${K}/${X}, ${Math.round((Date.now()-n)/1000)}s elapsed`, "warn", "worker_registration_attempt_failed"), re(N.status)) {
        if (P?.status === "requires_action") {
          P = {
            status: "idle",
            reason: "park_rejected"
          }, H = B, K--;
          continue
        }
        break
      }
      if (K < X) {
        let j = Math.min(500 * 2 ** (K - 1), 30000) + Math.random() * 500;
        await J(j)
      }
    }
    if (!N.ok) {
      if (!this.closed) V("error", "cli_worker_init_put_retries_exhausted"), this.onDiagnostic?.(`PUT /worker retries exhausted: ${z} attempts over ${Math.round((Date.now()-n)/1000)}s, errors=[${[...q].join(",")||"unknown"}]`, "warn", "worker_registration_gave_up");
      throw new QIe("worker_register_failed", N.status, N.fetchFailed === !0)
    }
    this.currentState = P?.status ?? this.initialWorkerStatus, this.startReportsWaitUntilMs = this.currentState === "idle" ? performance.now() + this.startReportsMaxWaitMs : 0;
    let {
      worker_epoch: Y,
      ...R
    } = H;
    if (this.workerState.remember(R), this.applyUploadHold("idle"), this.parkReportedAtInitRequestId = P?.status === "requires_action" ? P.requestId : void 0, this.startHeartbeat(), !this.closed) {
      nqi(() => {
        this.writeEvent({
          type: "keep_alive"
        })
      });
      let K = this.keepAliveAtWorkStart;
      if (K) this.stopWorkStartKeepAlive = zFt(() => {
        try {
          if (Date.now() - this.lastEventsAnswerOrPulseAtMs >= kt && K()) this.lastEventsAnswerOrPulseAtMs = Date.now(), this.writeEvent({
            type: "keep_alive"
          })
        } catch (j) {
          a(j)
        }
      });
      if (this.gatesToolCalls) this.stopToolCallGate = i$i((j) => this.gateToolCall(j))
    }
    if (t(`CCRClient: initialized, epoch=${this.workerEpoch}`), V("info", "cli_worker_lifecycle_initialized", {
        epoch: this.workerEpoch,
        duration_ms: Date.now() - n,
        reported_status: this.currentState
      }), qr("worker_init_ms", Date.now() - n, n - performance.timeOrigin), P) l("tengu_ccr_init_park_report", {
      reported: f(P.status),
      reason: f(P.reason)
    });
    let A = this.stateReadEndsAtRegistration && !v;
    if (A) w.abort();
    let {
      metadata: x,
      durationMs: Q
    } = await O;
    if (this.stateReadEndsAtRegistration && x.readFailed) t("CCRClient: GET /worker had not succeeded when the worker registered; continuing without the stored worker state", {
      level: "warn"
    });
    if (this.clientRowsOwed.workerRecordRead(x, new Date), this.clientRowsOwed.spansGivenUpAtStart > 0) m("ccr_client_rows_owed", "gave_up_after_tries", {
      spans: this.clientRowsOwed.spansGivenUpAtStart
    });
    if (this.sessionModelTurnStored = x.internal?.model_turn_stored === !0, !x.readFailed) this.recordAtStart = {
      ...x.external,
      ...S
    };
    if (!this.closed) V("info", "cli_worker_state_restored", {
      duration_ms: Q,
      had_state: x.external !== null || x.internal !== null,
      read_failed: x.readFailed === !0,
      read_abandoned_at_registration: A && x.readFailed === !0
    });
    return P ? {
      ...x,
      initParkReport: Mn(P.status, x)
    } : x
  }
  async getWorkerState(e = "worker_state", s = !1, n = this.closeAbort.signal, {
    transcriptAfterEventId: r
  } = {}) {
    let h = Date.now(),
      w = this.getAuthHeaders();
    if (Object.keys(w).length === 0) return {
      metadata: {
        external: null,
        internal: null,
        readFailed: !0
      },
      projectsAssertion: void 0,
      transcriptForeground: void 0,
      durationMs: 0
    };
    let v, y = await m$.getWithRetry(this.readSource, `${this.sessionBaseUrl}/worker${je(s,r)}`, w, e, void 0, r === void 0 ? void 0 : (O) => {
      v = O
    }, {
      signal: n
    });
    if (y === null && v !== void 0) V("warn", "cli_worker_transcript_position_refused", {
      status: v
    }), y = await m$.getWithRetry(this.readSource, `${this.sessionBaseUrl}/worker${je(s,void 0)}`, w, e, void 0, void 0, {
      signal: n
    });
    return {
      metadata: {
        external: y?.worker?.external_metadata ?? null,
        internal: y?.worker?.internal_metadata ?? null,
        ...y === null && {
          readFailed: !0
        }
      },
      projectsAssertion: Dt(y),
      transcriptForeground: Mr(y),
      durationMs: Date.now() - h
    }
  }
  get currentWorkerEpoch() {
    return this.workerEpoch
  }
  readOwnClientEvent(e) {
    return m$.readOwnClientEventFrom(this.readSource, e)
  }
  static async readOwnClientEventFrom(e, s) {
    let n = `${e.sessionBaseUrl}/worker/events/${encodeURIComponent(s.toLowerCase())}`,
      r = {
        kind: "unavailable",
        why: "network"
      };
    for (let h = 1; h <= Te; h++) {
      let w;
      try {
        w = e.getAuthHeaders()
      } catch {
        return {
          kind: "unavailable",
          why: "no_auth_headers"
        }
      }
      if (Object.keys(w).length === 0) return {
        kind: "unavailable",
        why: "no_auth_headers"
      };
      let v;
      try {
        v = await oLt(n, {
          headers: {
            ...w,
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": cb(),
            "User-Agent": ui()
          },
          signal: AbortSignal.timeout(1e4),
          ...ba({
            url: n
          })
        }, e.ownConnectionPool, e.leavesPoolAfterServerError)
      } catch {
        r = {
          kind: "unavailable",
          why: "network"
        }
      }
      if (v !== void 0) {
        let y = await v.json().catch(() => {
          return
        });
        if (v.ok) return mr(y, s);
        if (v.status === 404 && pr(y)) return {
          kind: "absent"
        };
        if (r = {
            kind: "unavailable",
            why: fr(v.status)
          }, v.status < 500 || v.status === 501) return r
      }
      if (h < Te) await J(Math.min(500 * 2 ** (h - 1), 4000) + Math.random() * 500)
    }
    return r
  }
  async readProjectsBinding() {
    let {
      metadata: e,
      projectsAssertion: s
    } = await this.getWorkerState("projects_binding", !0);
    return e.readFailed ? {
      read: !1
    } : {
      read: !0,
      assertion: s
    }
  }
  async readWorkerState() {
    return (await this.getWorkerState("worker_state_reread")).metadata
  }
  static async readProjectsBindingFor(e, s) {
    let n = ZXr(e, s);
    if (Object.keys(s()).length === 0) return {
      read: !1
    };
    let r = await m$.getWithRetry(n, `${n.sessionBaseUrl}/worker${je(!0,void 0)}`, s(), "projects_binding");
    return r === null ? {
      read: !1
    } : {
      read: !0,
      assertion: Dt(r)
    }
  }
  request(e, s, n, r, h = {}) {
    let w = G_s("uploads");
    try {
      return this.sendRequest(e, s, n, r, h)
    } finally {
      V_s(w)
    }
  }
  async sendRequest(e, s, n, r, {
    timeout: h = Ke,
    parseBody: w = !1,
    countTowardEscalation: v = !0,
    signal: y,
    onLateSocketAnswer: O,
    uploadAttempt: M,
    outsideItsLane: P = !1
  }) {
    let F = this.getAuthHeaders();
    if (Object.keys(F).length === 0) return {
      ok: !1,
      reason: "no_auth_headers"
    };
    let S = `${this.sessionBaseUrl}${s}`,
      B = y ? os(y, {
        timeoutMs: h,
        refTimer: !0
      }) : void 0,
      H = !1,
      N = F.Authorization;
    try {
      let q = _(n),
        X = performance.now(),
        z = y ? void 0 : s === "/worker/heartbeat" ? this.workerSocket?.beat(q, h, (j) => O?.(j)) : this.workerSocket?.carry(s, q, h),
        Y = z && await z,
        R = Y;
      if (!R) {
        if (z && s === "/worker/heartbeat" && this.closed) return {
          ok: !1,
          reason: "closed"
        };
        B ??= os(void 0, {
          timeoutMs: z && s === "/worker/heartbeat" ? Math.max(0, h - (performance.now() - X)) : h,
          refTimer: !0,
          timeoutError: !0
        });
        let j = {
          method: e.toUpperCase(),
          headers: {
            ...F,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": cb(),
            "User-Agent": ui(),
            ...M !== void 0 && {
              [Gs]: M
            }
          },
          body: q,
          signal: B.signal,
          ...ba({
            url: S
          })
        };
        if (z) {
          let te = {};
          try {
            te = this.getAuthHeaders()
          } catch (W) {
            t(`CCRClient: could not read credentials again for a request the worker socket handed to POST: ${d(W)}`, {
              level: "warn"
            })
          }
          if (Object.keys(te).length > 0) {
            let W = j.headers;
            for (let Z of Object.keys(F)) delete W[Z];
            Object.assign(W, te), N = te.Authorization
          }
        }
        Object.assign(j.headers, this.tickets.headersFor(N)), R = this.gzipRequestBodyFetch ? await this.gzipRequestBodyFetch(S, j, (te) => oLt(S, te, this.ownConnectionPool, this.leavesPoolAfterServerError)) : await oLt(S, j, this.ownConnectionPool, this.leavesPoolAfterServerError)
      }
      if (H = !0, !Y) this.tickets.note(N, R);
      if (R.ok) {
        this.consecutiveAuthFailures = 0, this.consecutiveNotFound = 0;
        let j = Et[s];
        if (!P) this.reportNonOriginRun("onCleared", j), this.nonOriginRuns.delete(j);
        for (let [te, W] of this.nonOriginRuns)
          if (te !== j) W.othersPassed = !0;
        if (w) try {
          return {
            ok: !0,
            data: await R.json()
          }
        } catch {
          return {
            ok: !0
          }
        }
        return await n6(R), {
          ok: !0
        }
      }
      let A;
      if (R.status === 409 && !this.closed) A = await qe(R);
      else await n6(R);
      if (this.closed) return {
        ok: !1,
        status: R.status,
        reason: `http_${R.status}`
      };
      if (R.status === 409) this.handleEpochMismatch(A);
      if (R.status === 404 && v && s !== Ge) {
        if (this.consecutiveNotFound++, this.consecutiveNotFound >= cn) t(`CCRClient: ${this.consecutiveNotFound} consecutive 404s \u2014 session gone, exiting`, {
          level: "error"
        }), V("error", "cli_worker_session_not_found", void 0, this.lastLineWhen), this.onDiagnostic?.(`${this.consecutiveNotFound} consecutive 404s on ${s} \u2014 session gone, exiting`, "warn", "session_not_found"), this.escalateEpochMismatch("session_not_found")
      }
      let x = R.status !== 403 ? void 0 : Y ? "origin" : nRe((j) => R.headers.get(j)),
        Q = this.nonOrigin403Transient,
        K = Q !== !1 && PQe(x);
      if (K && typeof Q === "object" && !P) {
        let j = Et[s],
          te = performance.now(),
          W = this.nonOriginRuns.get(j) ?? {
            sinceMs: te,
            refusals: 0,
            windowsSpent: 0,
            othersPassed: !1
          };
        if (this.nonOriginRuns.set(j, W), W.refusals++, K = te - W.sinceMs < Q.windowMs, K) try {
          Q.onRefused(j)
        } catch (Z) {
          t(`CCRClient: onRefused threw: ${d(Z)}`, {
            level: "error"
          })
        } else if (te - W.sinceMs >= (W.windowsSpent + 1) * Q.windowMs) W.windowsSpent++, this.reportNonOriginRun("onWindowSpent", j)
      }
      if (R.status === 401 || R.status === 403) {
        let j = zd(),
          te = j ? bU(j) : null;
        if (te !== null && te * 1000 < Date.now()) t(`CCRClient: session_token expired (exp=${new Date(te*1000).toISOString()}) \u2014 no refresh was delivered, exiting`, {
          level: "error"
        }), V("error", "cli_worker_token_expired_no_refresh", void 0, this.lastLineWhen), this.onDiagnostic?.(`session_token expired (exp=${new Date(te*1000).toISOString()}) \u2014 no refresh delivered, exiting`, "warn", "token_expired"), this.escalateEpochMismatch("token_expired");
        if (v && !K) {
          if (this.consecutiveAuthFailures++, this.consecutiveAuthFailures >= dn) t(`CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`, {
            level: "error"
          }), V("error", "cli_worker_auth_failures_exhausted", void 0, this.lastLineWhen), this.onDiagnostic?.(`${this.consecutiveAuthFailures} consecutive auth failures (HTTP ${R.status}) with valid-looking token \u2014 exiting`, "warn", "auth_exhausted"), this.escalateEpochMismatch("auth_exhausted")
        }
      }
      if (t(`CCRClient: ${r} returned ${R.status}`, {
          level: "warn"
        }), V("warn", "cli_worker_request_failed", {
          method: e,
          path: s,
          status: R.status,
          ...x !== void 0 && {
            source: x
          }
        }), R.status === 429) {
        let j = R.headers.get("retry-after"),
          te = j ? parseInt(j, 10) : NaN;
        if (!isNaN(te) && te >= 0) return {
          ok: !1,
          retryAfterMs: te * 1000,
          status: R.status,
          reason: `http_${R.status}`
        }
      }
      return {
        ok: !1,
        status: R.status,
        reason: `http_${R.status}`,
        ...K && {
          nonOriginRefusal: K
        }
      }
    } catch (q) {
      t(`CCRClient: ${r} failed: ${d(q)}`, {
        level: "warn"
      }), V("warn", "cli_worker_request_error", {
        method: e,
        path: s,
        error_code: ke(q)
      });
      let X = `fetch_failed:${ke(q)}`;
      return H ? {
        ok: !1,
        reason: X
      } : {
        ok: !1,
        fetchFailed: !0,
        reason: X
      }
    } finally {
      B?.cleanup()
    }
  }
  reportNonOriginRun(e, s) {
    let n = this.nonOriginRuns.get(s);
    if (n === void 0 || typeof this.nonOrigin403Transient !== "object") return;
    let r = Math.round(performance.now() - n.sinceMs),
      {
        unsentClientEvents: h,
        unsentInternalEvents: w
      } = this.uploadBacklog();
    t(`CCRClient: ${s} ${e==="onCleared"?"accepted again":"still refused"} after ${r}ms of non-origin 403s (${n.refusals} refusals)`, {
      level: "warn"
    });
    try {
      this.nonOrigin403Transient[e]({
        lane: s,
        refusals: n.refusals,
        runMs: r,
        windowsSpent: n.windowsSpent,
        othersPassed: n.othersPassed,
        backlog: h + w
      })
    } catch (v) {
      t(`CCRClient: ${e} threw: ${d(v)}`, {
        level: "error"
      })
    }
  }
  reportState(e, s) {
    if (e === this.currentState && !s) return;
    let n = this.parkReportedAtInitRequestId;
    if (this.parkReportedAtInitRequestId = void 0, n !== void 0 && e === "requires_action" && this.currentState === "requires_action" && $2(s) === n) return;
    if (e === "idle") this.openPickupBarriers(this.pickupBarriers.length), this.openTurn();
    this.currentState = e, this.startReportsWaitUntilMs = 0, this.workerState.enqueue({
      worker_status: e,
      requires_action_details: s ? Vt(s) : null,
      internal_metadata: {
        reply_degraded: Imi(),
        ...this.guardsClientRows !== void 0 && this.clientRowsOwed.stateReported(e, new Date, this.flagsRefreshed() && this.clientRowsAreGuarded())
      },
      ...this.autocompactStateStored !== void 0 && {
        external_metadata: {
          autocompact_state: this.autocompactStateStored
        }
      }
    }), this.autocompactStateStored = void 0, this.applyUploadHold(e === "running" ? "idle" : e)
  }
  reportMetadata(e) {
    let s = this.flushPolicy?.metadataNeverSent,
      n = this.withoutRepeatsOfRecord(s?.size && this.followsServedPolicy ? Ro(e, (r, h) => r === null || !s.has(h)) : e);
    if (n !== e && Object.keys(n).length === 0) return;
    this.workerState.enqueue({
      external_metadata: vr(n)
    })
  }
  withoutRepeatsOfRecord(e) {
    let s = Object.keys(e).filter((n) => {
      if (!Zn.has(n) || this.reportedKeys.has(n)) return !1;
      return this.reportedKeys.add(n), this.recordAtStart !== void 0 && ln(e[n] ?? void 0, this.recordAtStart[n] ?? void 0)
    });
    return s.length > 0 ? Ro(e, (n, r) => !s.includes(r)) : e
  }
  reportInternalMetadata(e) {
    this.workerState.enqueue({
      internal_metadata: e
    })
  }
  handleEpochMismatch(e) {
    let s = e ?? "epoch_conflict",
      n = e ?? "unattributed";
    t(`CCRClient: Epoch mismatch (409, reason=${n}), shutting down`, {
      level: "error"
    }), V("error", s === "epoch_stale" ? "cli_worker_epoch_stale" : s === "session_not_active" ? "cli_worker_session_not_active" : s === "organization_moved_away" ? "cli_worker_organization_moved_away" : "cli_worker_epoch_mismatch", {
      reason: n
    }, this.lastLineWhen);
    let r = s === "epoch_stale" ? "stale registration (no live successor)" : s === "session_not_active" ? "session archived or no longer active" : s === "organization_moved_away" ? "organization moved to another region" : s === "superseded_by_worker" ? "superseded by a newer worker" : "unattributed conflict, treated as superseded";
    this.onDiagnostic?.(`worker epoch mismatch (409) reason=${n} epoch=${this.workerEpoch} \u2014 ${r}, exiting`, "warn", s), this.escalateEpochMismatch(s)
  }
  escalateEpochMismatch(e) {
    return this.lastEpochMismatchCause = e, this.epochMismatchCount++, this.epochSuperseded = !0, this.onEpochMismatch(e)
  }
  startHeartbeat() {
    if (this.stopHeartbeat(), this.closed) return;
    let e = () => {
        let n = Math.max(this.heartbeatIntervalMs * this.heartbeatJitterFraction, this.keepAlivesGoAlone() ? On : 0) * (2 * Math.random() - 1);
        this.heartbeatTimer = setTimeout(s, Math.min(Rc, this.heartbeatIntervalMs + n))
      },
      s = () => {
        let n = this.lastCadenceTickAtMs;
        if (this.lastCadenceTickAtMs = Date.now(), this.canSkipCadenceBeat(n)) this.skippedPreviousCadenceBeat = !0, this.idleTracker?.sampleIdleSeconds(), t("CCRClient: Heartbeat skipped (events beat)");
        else this.sendHeartbeat();
        if (this.heartbeatTimer === null) return;
        if (i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES && afe() && (this.keepAlivesGoAlone() || this.holdsAcrossModelCalls() && this.turnHold === "whole" && this.lastCadenceTickAtMs - this.lastEventsAnswerOrPulseAtMs >= kt)) this.lastEventsAnswerOrPulseAtMs = this.lastCadenceTickAtMs, this.writeEvent({
          type: "keep_alive"
        });
        e()
      };
    this.lastCadenceTickAtMs = Date.now(), e()
  }
  noteBeatingEventsPostOk(e) {
    if (this.lastEventsAnswerOrPulseAtMs = Date.now(), this.eventsPostsFailingSinceMs = void 0, this.eventsPostRateLimited = !1, !this.workerSocket?.isTransport() && e.some((s) => !s.ephemeral)) this.lastBeatingEventsPostOkAtMs = Date.now()
  }
  canSkipCadenceBeat(e) {
    let s = this.heartbeatIntervalMs * (1 + this.heartbeatJitterFraction);
    if (!this.skipRedundantHeartbeats || this.closed || this.lastBeatingEventsPostOkAtMs < e || this.lastBeatingEventsPostOkAtMs > this.lastCadenceTickAtMs || this.lastCadenceTickAtMs - this.lastBeatingEventsPostOkAtMs > s * _t || this.heartbeatIntervalMs > this.seedHeartbeatIntervalMs || this.isIdleAdvised() || this.consecutiveHeartbeatFailures > 0 || this.skippedPreviousCadenceBeat) return !1;
    let n = s * 2;
    return this.clampToTokenLifetime(n) >= n
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null
  }
  clearProbeBeatTimer() {
    if (this.probeBeatTimer) clearTimeout(this.probeBeatTimer), this.probeBeatTimer = null
  }
  async releaseLease({
    drained: e = !1
  } = {}) {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    try {
      let s = await this.request("post", "/worker/heartbeat", {
        session_id: this.sessionId,
        worker_epoch: this.workerEpoch,
        release_lease: !0,
        ...e && {
          drained: !0
        }
      }, "POST worker/heartbeat (release)", {
        timeout: XXr,
        countTowardEscalation: !1
      });
      if (s.ok) g("ccr_worker_lease_release");
      else if (s.status !== 409) c("ccr_worker_lease_release", s.status !== void 0 ? `http_${s.status}` : "send_failed")
    } catch (s) {
      a(s), c("ccr_worker_lease_release", "send_threw")
    }
  }
  sendGoodbye() {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    if (this.currentState === "running") {
      V("info", "cli_worker_goodbye_skipped_mid_turn"), this.leftMidTurn = !0;
      return
    }
    if (tn() && NQe("resume_load") && !i.CLAUDE_CODE_DISABLE_RESUME_LOAD_GOODBYE_SKIP && this.skipsGoodbyeDuringResumeLoad()) {
      V("info", "cli_worker_goodbye_skipped_resume_load");
      return
    }
    this.goodbyeFlushed = this.request("put", "/worker", {
      worker_epoch: this.workerEpoch,
      connection_status: "disconnected"
    }, "PUT worker (goodbye)", {
      timeout: XXr,
      countTowardEscalation: !1
    }).then((e) => {
      if (e.ok) g("ccr_worker_goodbye");
      else if (e.status !== 409) c("ccr_worker_goodbye", e.status !== void 0 ? `http_${e.status}` : "send_failed")
    }).catch(() => {
      c("ccr_worker_goodbye", "send_threw")
    })
  }
  heartbeatNow(e = "probe") {
    if (this.closed) return;
    if (e === "probe" ? this.pendingBeatTrigger === "reactivate" : e === "reactivate" && this.pendingBeatTrigger === "probe") this.restoreReactivationArm();
    if (e === "probe" || this.pendingBeatTrigger === null || e === "reactivate" && this.pendingBeatTrigger !== "probe") this.pendingBeatTrigger = e;
    if (this.heartbeatInFlight) {
      this.pendingForcedBeat = !0;
      return
    }
    let n = Date.now() - this.lastHeartbeatSentAtMs;
    if (n < this.probeBeatSpacingMs) {
      if (this.probeBeatTimer) return;
      this.probeBeatTimer = setTimeout(() => {
        this.probeBeatTimer = null, this.refireForcedBeat()
      }, this.probeBeatSpacingMs - n);
      return
    }
    let r = this.pendingBeatTrigger ?? e;
    this.pendingBeatTrigger = null, this.clearProbeBeatTimer(), this.sendHeartbeat(r)
  }
  refireForcedBeat() {
    let e = this.pendingBeatTrigger ?? "probe";
    if (e === "resync_stale" && !this.staleReconnectBeatWanted()) {
      this.pendingBeatTrigger = null, this.clearProbeBeatTimer();
      return
    }
    if (e === "reactivate") {
      if (this.restoreReactivationArm(), !this.reactivationBeatWanted()) {
        this.pendingBeatTrigger = null, this.clearProbeBeatTimer();
        return
      }
      this.reactivationBeatArmed = !1
    }
    this.heartbeatNow(e)
  }
  reactivationBeatWanted() {
    return this.beatOnReactivation && this.reactivationBeatArmed && this.isIdleAdvised() && Date.now() - this.lastHeartbeat429AtMs > this.seedHeartbeatIntervalMs
  }
  restoreReactivationArm() {
    this.reactivationBeatArmed = this.idleGrantLatched
  }
  armReactivationIfEarned(e, s) {
    if (this.beatOnReactivation && e !== void 0 && e >= s) this.reactivationBeatArmed = !0
  }
  sendReactivationBeat() {
    if (!this.reactivationBeatWanted()) return;
    this.reactivationBeatArmed = !1, this.heartbeatNow("reactivate")
  }
  isIdleAdvised() {
    return this.advertiseHeartbeatProbeSupport && this.idleGrantLatched
  }
  applyShorterIntervalNow(e) {
    if (e >= this.heartbeatIntervalMs) return;
    if (this.heartbeatIntervalMs = e, this.heartbeatTimer !== null) this.startHeartbeat()
  }
  clampToTokenLifetime(e) {
    if (!this.advertiseHeartbeatProbeSupport || !this.adoptRefreshedAuth) return e;
    let s = zd(),
      n = s ? bU(s) : null;
    if (n === null) return e;
    let r = n * 1000 - Date.now() - Hs;
    if (r >= e) return e;
    return Math.max(ft, r)
  }
  reclampCurrentIntervalToTokenLifetime() {
    let e = this.clampToTokenLifetime(this.heartbeatIntervalMs);
    if (e < this.heartbeatIntervalMs) V("info", "cli_heartbeat_interval_updated", {
      from_ms: this.heartbeatIntervalMs,
      to_ms: e
    }), this.applyShorterIntervalNow(e)
  }
  renewStream() {
    let e = () => this.readTransport.renewConnection();
    if (this.workerSocket) this.workerSocket.whenQuiet(e);
    else e()
  }
  resyncAfterReconnect() {
    if (this.isIdleAdvised()) {
      this.heartbeatNow("resync");
      return
    }
    if (this.staleReconnectBeatWanted()) this.heartbeatNow("resync_stale")
  }
  staleReconnectBeatWanted() {
    if (!this.beatOnStaleReconnect || this.heartbeatIntervalMs <= this.seedHeartbeatIntervalMs) return !1;
    let e = Date.now();
    if (e - this.lastHeartbeatSuccessAtMs <= this.heartbeatIntervalMs * _t) return !1;
    return e - this.lastHeartbeat429AtMs > this.heartbeatIntervalMs
  }
  resetHeartbeatStreak() {
    this.consecutiveHeartbeatFailures = 0, this.heartbeatLostFiredForStreak = !1
  }
  async sendHeartbeat(e) {
    if (this.closed) {
      this.stopHeartbeat();
      return
    }
    if (this.workerState.sendWaiting(this.followsServedPolicy ? this.flushPolicy?.metadataMaxWaitMs : 0), this.heartbeatInFlight) return;
    this.heartbeatInFlight = !0, this.lastHeartbeatSentAtMs = Date.now();
    let s = this.lastHeartbeatSentAtMs,
      n = ++this.heartbeatsSent,
      r = {
        succeededLateOnSocket: !1
      };
    if (this.skippedPreviousCadenceBeat = !1, e === "resync_stale") V("info", "cli_heartbeat_reconnect_stale_beat", {
      gap_ms: this.lastHeartbeatSentAtMs - this.lastHeartbeatSuccessAtMs,
      interval_ms: this.heartbeatIntervalMs
    });
    try {
      if (e === "reactivate") V("info", "cli_heartbeat_reactivation_beat", {
        interval_ms: this.heartbeatIntervalMs
      });
      let h = this.idleTracker?.sampleIdleSeconds(),
        w = this.advertiseHeartbeatProbeSupport ? h : void 0,
        v = await this.request("post", "/worker/heartbeat", {
          session_id: this.sessionId,
          worker_epoch: this.workerEpoch,
          ...this.advertiseHeartbeatProbeSupport && {
            supports_heartbeat_probe: !0,
            current_interval_seconds: Math.round(this.heartbeatIntervalMs / 1000),
            ...w !== void 0 && {
              idle_seconds: w
            }
          }
        }, "Heartbeat", {
          timeout: Math.max(Ls, Math.min(zt, this.heartbeatIntervalMs * (1 - this.heartbeatJitterFraction) - jt)),
          parseBody: !0,
          countTowardEscalation: e === void 0,
          onLateSocketAnswer: (y) => {
            r.succeededLateOnSocket = !0, this.takeUpLateBeat(y, s, n, w)
          }
        });
      if (!v.ok && v.reason === "closed") return;
      if (this.lastSettledBeat = Math.max(this.lastSettledBeat, n), !v.ok && r.succeededLateOnSocket) {
        if (v.status === 429) this.lastHeartbeat429AtMs = Date.now();
        t("CCRClient: Heartbeat succeeded late on the worker socket; its POST failed, which is not counted as a missed heartbeat")
      }
      if (!v.ok && !r.succeededLateOnSocket) {
        if (v.fetchFailed && v.reason === "fetch_failed:TimeoutError" && this.leavesPoolAfterServerError?.()) Cpo();
        if (e === "probe") m("ccr_heartbeat_probe", "beat_failed");
        else if (e === "resync_stale") m("ccr_reconnect_beat", "beat_failed");
        else if (e === "reactivate") m("ccr_reactivation_beat", "beat_failed");
        if (v.status === 429) {
          if (this.lastHeartbeat429AtMs = Date.now(), e === "reactivate") this.restoreReactivationArm()
        }
        if (this.isIdleAdvised() && v.status !== 429) V("warn", "cli_heartbeat_idle_reverted_on_failure", {
          status: v.status
        }), this.idleGrantLatched = !1, this.reactivationBeatArmed = !1, this.applyShorterIntervalNow(this.seedHeartbeatIntervalMs);
        if (this.reclampCurrentIntervalToTokenLifetime(), v.status !== void 0 && qs.has(v.status) && !v.nonOriginRefusal) {
          this.resetHeartbeatStreak();
          return
        }
        if (!this.readTransport.isReadStreamRecentlyAlive()) {
          this.resetHeartbeatStreak();
          return
        }
        if (this.consecutiveHeartbeatFailures === 0) this.heartbeatStreakStartedAtMs = Date.now();
        if (this.consecutiveHeartbeatFailures++, !this.heartbeatLostFiredForStreak && this.consecutiveHeartbeatFailures >= Ds && Date.now() - this.heartbeatStreakStartedAtMs >= this.readTransport.getReadStreamRecentLivenessWindowMs()) {
          this.heartbeatLostFiredForStreak = !0;
          try {
            this.onHeartbeatLost?.()
          } catch (y) {
            a(y)
          }
        }
        return
      }
      if (e === "probe") g("ccr_heartbeat_probe");
      else if (e === "resync_stale") g("ccr_reconnect_beat");
      else if (e === "reactivate") g("ccr_reactivation_beat");
      if (v.ok) t("CCRClient: Heartbeat sent"), await this.takeUpBeatAnswer(v.data, s, n, w)
    } finally {
      if (this.heartbeatInFlight = !1, this.pendingForcedBeat && !this.closed) this.pendingForcedBeat = !1, this.refireForcedBeat()
    }
  }
  async takeUpBeatAnswer(e, s, n, r) {
    let h = () => this.lastSucceededBeat > n;
    if (this.lastSettledBeat <= n) this.resetHeartbeatStreak();
    if (!h()) this.lastSucceededBeat = n, this.lastHeartbeatSuccessAtMs = s;
    if (this.onRequestAuthOk?.(), !h() && D(e)) this.takeUpFlushPolicy(e.event_flush_policy);
    if (e?.refreshed_auth && this.adoptRefreshedAuth) {
      let y = !1;
      try {
        let O = !1,
          M = this.adoptRefreshedAuth(e.refreshed_auth.expires_in_seconds);
        M.then((S) => {
          if (O && S.adopted) this.lastAuthRefreshBadReason = null, g("ccr_worker_auth_refresh"), V("info", "cli_heartbeat_refreshed_auth_late_adopted"), this.renewSocketForNewToken()
        }, () => {});
        let P = await we(M, Math.min(Gt, this.heartbeatIntervalMs)),
          F;
        if (P === void 0) O = !0, F = {
          adopted: !1,
          reason: "adopt_timeout"
        };
        else F = P;
        if (V("info", "cli_heartbeat_refreshed_auth_signal", {
            adopted: F.adopted,
            reason: F.reason,
            expires_in_seconds: e.refreshed_auth.expires_in_seconds
          }), F.adopted) g("ccr_worker_auth_refresh"), this.lastAuthRefreshBadReason = null, y = !0;
        else if (F.reason && F.reason !== "unchanged" && F.reason !== this.lastAuthRefreshBadReason) this.lastAuthRefreshBadReason = F.reason, m("ccr_worker_auth_refresh", F.reason)
      } catch {
        if (this.lastAuthRefreshBadReason !== "adopt_threw") this.lastAuthRefreshBadReason = "adopt_threw", m("ccr_worker_auth_refresh", "adopt_threw");
        V("error", "cli_heartbeat_refreshed_auth_adopt_threw")
      }
      if (y) this.renewSocketForNewToken()
    }
    if (h()) return;
    let w = e?.heartbeat_interval_seconds;
    if (typeof w !== "number" || !Number.isFinite(w) || w <= 0) {
      if (this.idleGrantLatched) this.armReactivationIfEarned(r, this.heartbeatIntervalMs / 1000);
      this.reclampCurrentIntervalToTokenLifetime();
      return
    }
    if (this.advertiseHeartbeatProbeSupport) {
      let y = w * 1000 > this.seedHeartbeatIntervalMs;
      if (y) this.armReactivationIfEarned(r, w);
      else this.reactivationBeatArmed = !1;
      this.idleGrantLatched = y
    }
    let v = this.clampToTokenLifetime(Math.min(Math.max(w * 1000, ft), this.maxAdvisedIntervalMs));
    if (v === this.heartbeatIntervalMs) return;
    if (V("info", "cli_heartbeat_interval_updated", {
        from_ms: this.heartbeatIntervalMs,
        to_ms: v
      }), v < this.heartbeatIntervalMs) this.applyShorterIntervalNow(v);
    else this.heartbeatIntervalMs = v
  }
  async takeUpLateBeat(e, s, n, r) {
    try {
      if (this.closed || !e.ok) return;
      let h = await e.json();
      if (this.closed) return;
      t("CCRClient: Heartbeat answered late on the worker socket"), this.consecutiveAuthFailures = 0, this.consecutiveNotFound = 0, await this.takeUpBeatAnswer(h, s, n, r)
    } catch (h) {
      t(`CCRClient: could not act on a heartbeat answer that arrived late on the worker socket: ${d(h)}`, {
        level: "warn"
      })
    }
  }
  renewSocketForNewToken() {
    if (!this.workerSocket?.isTransport()) return;
    try {
      this.workerSocket.whenQuiet(() => this.readTransport.renewConnection(), !0)
    } catch (e) {
      t(`CCRClient: could not renew the worker socket for a new token: ${d(e)}`, {
        level: "warn"
      })
    }
  }
  reportDurableUpload(e, s) {
    let n = this.resultThatMarks;
    if (s === "accepted" && n && n.marked !== this.sessionModelTurnStored && e.some((h) => h.payload.uuid === n.uuid)) this.sessionModelTurnStored = n.marked, this.reportInternalMetadata({
      model_turn_stored: n.marked
    });
    if (s === "accepted") this.autocompactStateStored = e.findLast((h) => !h.ephemeral && h.payload.type === "autocompact_state")?.payload.value ?? this.autocompactStateStored;
    if (this.onDurableEventsUpload === void 0) return;
    let r = e.filter((h) => !h.ephemeral);
    if (r.length === 0) return;
    try {
      this.onDurableEventsUpload(r, s)
    } catch (h) {
      t(`CCRClient: onDurableEventsUpload(${s}) threw; the batch's fate is unchanged: ${d(h)}`, {
        level: "warn"
      })
    }
  }
  writeEvent(e) {
    try {
      if (this.bufferLoneDelta(e)) return Promise.resolve()
    } catch (s) {
      return Promise.reject(s)
    }
    return this.writeEvents([e])
  }
  bufferLoneDelta(e) {
    if (this.streamEventFlushIntervalMs <= 0 || this.pickupBarriers.length > 0 || this.guardsClientRows !== void 0 || e.type !== "stream_event" || e.event.type !== "content_block_delta" || "resume_reason" in e) return !1;
    return this.streamedEphemeralSinceLastAssistant = !0, this.bufferEphemeral(e), !0
  }
  trackFirstFrameUpload(e) {
    let s = {};
    return this.firstFrameUpload = {
      uuid: e,
      timing: s
    }, s
  }
  trackFirstTextFrameUpload(e) {
    let s = {};
    return this.firstTextFrameUpload = {
      uuid: e,
      timing: s
    }, s
  }
  trackFirstBlockFrameUpload(e) {
    let s = {};
    return this.firstBlockFrameUpload = {
      uuid: e,
      timing: s
    }, s
  }
  trackedFrameUploads(e) {
    let s = [];
    for (let n of [this.firstFrameUpload, this.firstTextFrameUpload, this.firstBlockFrameUpload])
      if (n && n.timing[e] === void 0) s.push(n);
    return s
  }
  writeEvents(e, s) {
    let n = e.flatMap((S) => {
        if (S.type !== "system" || S.subtype !== "task_started" && S.subtype !== "task_updated" && S.subtype !== "task_notification") return [S];
        let B = S.subtype !== "task_started" ? this.liveOnlyShellStarts.get(S.task_id) : ce(S) === "system/task_started_foreground_shell" && this.shellTaskRowsLiveOnly() ? S : void 0;
        if (this.liveOnlyShellStarts.delete(S.task_id), !B) return [S];
        if (S.subtype === "task_updated" && S.patch.is_backgrounded || Buffer.byteLength(_(S)) > At) return B === S ? [S] : [{
          ...B
        }, S];
        if (S.subtype !== "task_notification") this.liveOnlyShellStarts.set(S.task_id, B);
        return this.rowsMarkedLiveOnly.add(S), [S]
      }),
      r = this.artifactSocketIds,
      w = (!r ? n : n.flatMap((S) => {
        if (S.type !== "system") return [S];
        switch (S.subtype) {
          case "background_tasks_changed": {
            r.clear();
            let B = S.tasks.filter((q) => {
                if (q.task_type !== "monitor_ws" || q.ambient !== !0) return !0;
                return r.add(q.task_id), !1
              }),
              H = {
                whole: _(S.tasks),
                withoutSockets: _(B)
              },
              N = this.lastTaskList !== void 0 && H.whole !== this.lastTaskList.whole && H.withoutSockets === this.lastTaskList.withoutSockets;
            return this.lastTaskList = H, N ? [] : [{
              ...S,
              tasks: B
            }]
          }
          case "task_started":
            if (S.task_type !== "monitor_ws" || S.ambient !== !0) return [S];
            return r.add(S.task_id), [];
          case "task_updated":
            return r.has(S.task_id) ? [] : [S];
          case "task_notification":
            return S.ambient === !0 && S.task_id.startsWith("s") ? [] : [S];
          default:
            return [S]
        }
      })).filter((S) => {
        if (S.type === "system" && S.subtype === "task_progress" && S.summary === void 0 && S.workflow_progress === void 0) return !1;
        if (S.type === "active_goal" || S.type === "autocompact_state") {
          let N = !this.stateRowTypesWritten.has(S.type);
          this.stateRowTypesWritten.add(S.type);
          let q = this.recordAtStart?.goal;
          return !(N && (S.type === "autocompact_state" ? ln(S.value, this.recordAtStart?.autocompact_state) : S.value === null && this.recordAtStart !== void 0 && (!D(q) || q.met === !0)))
        }
        if (S.type !== "rate_limit_event") return !0;
        let B = ce(S),
          H = B === "rate_limit_event/allowed" && B === this.lastRateLimitKind && S.rate_limit_info.overagePeriodMonthly === void 0 && S.rate_limit_info.overagePeriodChannel === void 0;
        return this.lastRateLimitKind = B, this.lastRateLimitRepeat = H && this.currentUploadTrim().rate_limit_repeats === !0 ? S : void 0, this.lastRateLimitRepeat === void 0
      }),
      v = w.findIndex((S) => S.type === "result");
    if (v !== -1 && this.lastRateLimitRepeat !== void 0) w.splice(v, 0, this.lastRateLimitRepeat), this.lastRateLimitRepeat = void 0;
    if (e.length > 0 && w.length === 0) return Promise.resolve();
    if (this.guardsClientRows !== void 0) this.reportClientRowsOwed(this.clientRowsAreGuarded() ? this.clientRowsOwed.rowsEntered(w, new Date) : this.clientRowsOwed.guardEnded(Date.now()));
    let y = this.flushPolicy?.settingsAnswersMaxWaitMs ?? 0,
      O = this.flushPolicy?.initMaxWaitMs ?? 0;
    if ((y > 0 || O > 0) && w.length > 0 && this.followsServedPolicy && !this.closed && this.pickupBarriers.length === 0) {
      let S = w.map((B) => this.isSettingsAnswer(B) ? y : Lt(B) || B.type === "user" && ("isReplay" in B) && B.isReplay && this.turnHold === "open" ? O : 0);
      if (S.every((B) => B > 0)) return this.waitingAnswers.push(...w), this.waitingAnswersTimer ??= setTimeout(() => this.sendWaitingAnswers(), Math.min(...S)), Promise.resolve()
    }
    let M = this.waitingAnswers.length > 0 && (w.length === 0 || w.some((S) => S.type !== "stream_event")) ? [...this.takeWaitingAnswers(), ...w] : w,
      P = this.pickupBarriers.at(-1);
    if (!P) return this.writeEventsNow(M, s);
    let F = Promise.withResolvers();
    if (P.writes.push({
        messages: M,
        opts: s,
        written: F
      }), this.pickupBarriers.reduce((S, B) => S + B.writes.length, 0) >= Wn) this.openPickupBarriers(this.pickupBarriers.length);
    return F.promise
  }
  noteSettingsRequest(e) {
    if (!D(e) || e.type !== "control_request" || typeof e.request_id !== "string" || !yt(e)) return;
    this.settingsRequestIds.add(e.request_id);
    let s = this.settingsRequestIds.values().next().value;
    if (this.settingsRequestIds.size > on && s !== void 0) this.settingsRequestIds.delete(s)
  }
  isSettingsAnswer(e) {
    return e.type === "control_response" && e.response.subtype === "success" && this.settingsRequestIds.has(e.response.request_id)
  }
  sendWaitingAnswers() {
    if (this.waitingAnswers.length > 0) this.writeEvents([])
  }
  takeWaitingAnswers() {
    if (this.waitingAnswersTimer) clearTimeout(this.waitingAnswersTimer), this.waitingAnswersTimer = null;
    return this.waitingAnswers.splice(0)
  }
  async writeEventsNow(e, s) {
    let n = [],
      r = [],
      h, w, v = !1,
      y, O, M = !1,
      P = [],
      F = [],
      S = [],
      B = [],
      H, N = !1,
      q = !1;
    for (let Y of e) {
      let R = Y.type === "stream_event" ? dt(Y) : Y;
      if (R.type === "stream_event" && R.event.type === "message_start" && !R.parent_tool_use_id) {
        if (this.modelCallStreamed = !0, this.streamedResponseId = R.event.message.id, this.liveTwinTypes()?.size) R = {
          ...R
        }, B.push({
          frame: R,
          at: n.length,
          turnId: this.liveTurnId,
          index: this.nextLiveIndex
        })
      }
      if ((R.type === "assistant" || R.type === "user") && R.parent_tool_use_id) this.subAgentWroteSinceStoredRequesting = !0;
      let A = this.noteRequestingRow(R);
      if (A) {
        let G = this.toClientEvent(A);
        n.push(A === this.liveOnlyStartingRow ? this.withStamp(G) : G)
      }
      let x = w ? void 0 : this.holdAgainAt(R),
        Q = this.turnHold === "open",
        K = this.releaseFor(R, x);
      if (K === "event" && !w) y = ce(R);
      if (w ??= K, Q && K === "round_trip" && this.flushPolicy?.holdAcrossModelCalls) w = K, y = void 0;
      if (Q && K === "round_trip" || R.type === "result" || R.type.startsWith("control_") || R.type === "system" && "subtype" in R && (R.subtype === "init" || R.subtype === "task_notification")) O ??= ce(R);
      if ((this.streamEventFirstFlushMs > 0 && !K || this.noSubscriberStreamEventFlushIntervalMs > 0 || this.dropUnwatchedStreamEvents || this.unwatched() && this.currentState === "running") && this.streamEventFlushIntervalMs > 0 && Ht(R)) {
        this.bufferEphemeral(R);
        continue
      }
      if (R.type === "stream_event") {
        if (this.streamedEphemeralSinceLastAssistant = !0, R.event.type === "message_stop" && this.holdRule === "served_policy" && this.flushPolicy?.flushOnSamplingEnd) {
          this.bufferEphemeral(R), h ??= this.streamEventBufferedAt, v = !0;
          let G = this.takeStreamEventBuffer();
          w ??= G.release, n.push(...G.events);
          continue
        }
        if (this.streamEventFlushIntervalMs <= 0) {
          let G = Buffer.byteLength(_(R));
          if (G <= jEn) n.push({
            payload: R,
            ephemeral: !0
          });
          else Ue(R, G);
          continue
        }
        if (this.bufferEphemeral(R), R.event.type === "content_block_start" && this.parkedRows.length > 0) {
          h ??= this.streamEventBufferedAt;
          let G = this.takeStreamEventBuffer();
          w ??= G.release, q ||= G.firstFrames, n.push(...G.events)
        }
        continue
      }
      let j = R.type === "control_request" ? this.toClientEvent(R) : void 0;
      if (R.type === "control_request" && j !== void 0 && sn.has(Kt(j)) && this.servedCallRequestsJumpQueue()) {
        if (!this.holdsAcrossModelCalls() && this.clientRowsOwed.rowsSentAgain.size === 0) {
          r.push(j), this.urgentRequestIds.add(R.request_id);
          let G = this.urgentRequestIds.values().next().value;
          if (this.urgentRequestIds.size > nn && G !== void 0) this.urgentRequestIds.delete(G);
          continue
        }
        M = !0
      }
      if (R.type === "control_cancel_request" && this.urgentRequestIds.delete(R.request_id)) {
        r.push(this.toClientEvent(R));
        continue
      }
      if (R.type === "control_cancel_request" && this.holdsAcrossModelCalls()) M = !0;
      if (R.type === "assistant" && this.streamedEphemeralSinceLastAssistant) g("ccr_partial_messages", {
        stream_events_dropped_unwatched: this.streamEventsDroppedUnwatched
      }), this.streamedEphemeralSinceLastAssistant = !1, this.streamEventsDroppedUnwatched = 0;
      if (K === void 0 && this.mayParkTextRow(R)) {
        this.parkedRows.push({
          message: R,
          event: this.toClientEvent(R)
        });
        continue
      }
      if (this.streamEventTimer) {
        h ??= this.streamEventBufferedAt;
        let G = this.takeStreamEventBuffer();
        w ??= G.release, q ||= G.firstFrames, n.push(...G.events)
      }
      if (R.type === "keep_alive" && this.keepAlivesGoAlone()) {
        this.sendKeepAliveAlone(), N = !0;
        continue
      }
      if (this.gatesToolCalls) {
        let G = de(R);
        if (G.some((ae) => this.awaitedToolCalls.has(ae))) w ??= "tool_call";
        P.push(...G)
      }
      let te = this.flushPolicy?.flushAfterToolNames;
      if (te && te.size > 0)
        for (let G of de(R, te)) this.toolCallsWhoseResultReleases.add(G), fe(this.toolCallsWhoseResultReleases);
      if (this.flushPolicy?.transcriptMaxAgeMs)
        for (let G of de(R, br)) this.toolCallsWhoseResultReleases.add(G), fe(this.toolCallsWhoseResultReleases);
      let W = this.flushPolicy?.holdAgain;
      if (W && R.type === "assistant" && !R.parent_tool_use_id) {
        if (R.message.id !== this.newestResponseId) this.newestResponseId = R.message.id, this.unansweredCalls.clear();
        for (let G of de(R)) this.unansweredCalls.add(G);
        if (de(R, W.neverAfterTools).length > 0) this.holdsNoMoreThisTurn = !0;
        if (W.toolsWhoseResultsWait)
          for (let G of de(R, W.toolsWhoseResultsWait)) this.callsWhoseResultsWait.add(G), fe(this.callsWhoseResultsWait)
      }
      if (W && R.type === "user") {
        for (let G of Je(R.message, "tool_result", "tool_use_id")) this.unansweredCalls.delete(G);
        if (W.toolsWhoseResultsWait && !R.parent_tool_use_id && Array.isArray(R.message.content) && R.message.content.some((G) => G.type === "tool_result" && (G.is_error === !0 || !this.callsWhoseResultsWait.has(G.tool_use_id)))) this.heldResultNeedsStore = !0
      }
      if (this.isLiveTwinRow(R)) F.push(n.length);
      if (R === this.liveOnlyRequestingRow && this.holdsAcrossModelCalls() && !(K === "round_trip" && !Q && (!this.subAgentWroteSinceStoredRequesting || this.flushPolicy?.liveOnlyTypes.has(Ye)) && this.flushPolicy?.liveOnlyTypes.has(es) && (x !== "starts" || this.nextLiveIndex === this.indexBehindHeldToolResult && this.flushPolicy.liveOnlyTypes.has(ts)))) this.liveOnlyRequestingRow = void 0, H = n.length;
      if (K === "round_trip" && R !== this.liveOnlyRequestingRow && R !== this.liveOnlyFirstRow && !(("parent_tool_use_id" in R) && R.parent_tool_use_id)) this.subAgentWroteSinceStoredRequesting = !1;
      if (R.type === "system" && R.subtype === "task_started" && ce(R) === "system/task_started_foreground_shell" && !this.isLiveOnlyRow(R)) S.push([n.length, R.task_id]);
      let Z = j ?? this.toClientEvent(R);
      if (x === "starts")
        if (R === this.liveOnlyRequestingRow) this.liveOnlyStartingRow = R;
        else Z = this.withStamp(Z);
      if (R.type === "system" && "subtype" in R && R.subtype === "init" && !Z.payload.parent_tool_use_id) {
        if (this.liveTurnId = Z.payload.uuid, this.nextLiveIndex = 0, this.openTurn(), this.droppedBeforeLiveTurn = this.droppedDurableBatches, qXr in R && this.followsServedPolicy && this.flushPolicy?.liveOnlyTypes.has(ss) && !(this.flushPolicy.holdAcrossModelCalls && this.subAgentWroteSinceStoredRequesting && !this.flushPolicy.liveOnlyTypes.has(Ye))) Z.payload.request_at_init = !0, this.liveOnlyFirstRow = "next"
      }
      if (!Z.ephemeral) this.indexBehindHeldToolResult = void 0;
      n.push(Z)
    }
    let X = [],
      z = this.heldRepeatUuid;
    if (!w && !v) {
      let Y = F.filter((R) => {
        let A = n[R];
        return A && !A.historical && this.eventUploader.holdsOnArrival(A)
      });
      if (!this.viewerAbsentReported && Y.some((R) => Buffer.byteLength(_(n[R]?.payload)) > At || Qe(n[R]?.payload) > er)) w = "twin_too_large";
      else {
        for (let [A, x] of S) {
          let Q = n[A];
          if (Q && this.eventUploader.holdsOnArrival(Q)) this.heldShellTaskIds.add(x)
        }
        X = Y;
        for (let A of Y) {
          let x = n[A];
          if (x) {
            if (A === H) this.heldRepeatUuid = x.payload.uuid;
            n[A] = this.withStamp(x)
          }
        }
        let R = Y.length > 0 ? n.findLast((A) => !A.ephemeral) : void 0;
        if (R?.payload.live_index !== void 0 && _e(R.payload.message)) this.indexBehindHeldToolResult = this.nextLiveIndex;
        if (!this.viewerAbsentReported)
          for (let A of Y.toReversed()) {
            let x = n[A];
            if (x) n.splice(A, 0, {
              payload: x.payload,
              ephemeral: !0
            })
          }
      }
    }
    if (z !== void 0 && X.length > 0 && (this.toolResultEndsCall || this.flushPolicy?.liveOnlyTypes.has(ns) && n.some((Y) => Y.payload.type === "assistant" && Y.payload.live_index !== void 0))) this.heldRepeatUuid = void 0, this.eventUploader.withdraw((Y) => !Y.ephemeral && Y.payload.uuid === z);
    for (let {
        frame: Y,
        at: R,
        turnId: A,
        index: x
      }
      of B) Y.live_turn_id = A, Y.live_next_index = x + U(X, (Q) => Q < R);
    if (r.length > 0) this.enqueueClientEvents(r, {
      urgent: !0
    });
    if (n.length > 0) {
      if (w) {
        if (w !== "round_trip" && F.some((A) => ["assistant", "user"].includes(n[A]?.payload.type ?? ""))) this.endWholeTurnHold(w);
        this.releaseTranscriptLane(w, y, O), this.heldResultNeedsStore = !1
      } else if (v) w = "sampling_end";
      let Y = !w && this.liveTwinWaitMs > 0 && this.streamEventFirstFlushMs > 0 && !q && this.trackedFrameUploads("enqueuedAtMs").length === 0 && n.some((A) => A.ephemeral && A.payload.type === "assistant") && n.every((A) => A.payload.type === "assistant" || A.ephemeral && (A.payload.type === "stream_event" || A.payload.subtype === "thinking_tokens"));
      if (Y && !this.loggedLiveTwinWait && !this.eventUploader.busy()) this.loggedLiveTwinWait = !0, g("ccr_live_twin_wait");
      let R = this.enqueueClientEvents(n, {
        ...w ? {
          release: w,
          releasedBy: y
        } : {
          since: h
        },
        ...s?.together && {
          together: !0
        },
        ...Y && {
          waitForMoreMs: this.liveTwinWaitMs
        }
      });
      if (this.flushPolicy?.noTurnMaxAgeMs) this.applyUploadHold("reset");
      if (M) this.eventUploader.cutBackoff();
      await R, this.noteToolCallRows("client_events", P, "queued")
    } else if ((r.length > 0 || N) && w) {
      if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
      this.releaseTranscriptLane(w, void 0, O), this.releaseClientEvents(w)
    } else if (v) this.releaseClientEvents("sampling_end")
  }
  noteEventsPostFailed(e) {
    if (this.eventsPostRateLimited ||= e === 429, this.eventsPostsFailingSinceMs !== void 0) return;
    if (this.eventsPostsFailingSinceMs = performance.now(), this.keepAlivesGoAlone() && i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES && afe()) this.sendKeepAliveAlone()
  }
  keepAlivesGoAlone() {
    return this.eventsPostsFailingSinceMs !== void 0 && performance.now() - this.eventsPostsFailingSinceMs <= Fn && !this.eventsPostRateLimited && !St() && this.providerWithheldReason() === void 0
  }
  sendKeepAliveAlone() {
    if (this.closed || performance.now() - this.keepAliveAloneSentAtMs < In) return;
    let e = {
      worker_epoch: this.workerEpoch,
      events: [this.toClientEvent({
        type: "keep_alive"
      })]
    };
    this.keepAliveAloneSentAtMs = performance.now(), this.lastEventsAnswerOrPulseAtMs = Date.now(), this.request("post", "/worker/events", e, "keep_alive (own POST)", {
      signal: this.closeAbort.signal,
      countTowardEscalation: !1,
      outsideItsLane: !0
    }).then((s) => {
      if (this.eventsPostRateLimited ||= !s.ok && s.status === 429, s.ok) g("ccr_keep_alive_own_post");
      else if (!this.closed) c("ccr_keep_alive_own_post", s.status !== void 0 ? `http_${s.status}` : s.fetchFailed ? "no_answer" : "no_status")
    }).catch(a)
  }
  releaseTranscriptLane(e, s, n) {
    if (this.holdRule !== "served_policy" || !this.flushPolicy?.transcriptMaxAgeMs) this.internalEventUploader.release(e, s);
    else if (n !== void 0) this.internalEventUploader.release("event", n)
  }
  releaseFor(e, s) {
    if (e.type === "result") {
      let n = this.turnHold !== "open";
      if (this.modelTurnEnded ||= n, this.flushPolicy?.holdAgain?.laterWorkerHoldsFirstTurn && (n || e.is_error)) this.resultThatMarks = {
        uuid: e.uuid,
        marked: n
      };
      this.openTurn()
    }
    if (e.type === "system" && "subtype" in e && e.subtype === "status" && "status" in e && e.status === "requesting") {
      if (!this.seesModelCallBoundaries) this.seesModelCallBoundaries = !0, this.applyUploadHold("reset");
      if (this.holdRule === "served_policy") {
        let n = this.turnHold === "whole" && !s && this.requestingRowMayWait(e);
        if (this.turnHold === "open" && this.flushPolicy?.firstTurnHoldsEachCall && !this.modelTurnEnded && !(this.flushPolicy.holdAgain?.laterWorkerHoldsFirstTurn && this.sessionModelTurnStored)) this.turnHold = "each_call", this.holdsNoMoreThisTurn = !0;
        else if (this.turnHold === "open" || s === "starts") {
          if (this.secondCallStartsHold = this.turnHold === "open" && !this.modelTurnEnded, this.turnHold = "whole", this.holdsAcrossModelCalls()) this.uploadHoldTally.wholeTurnHoldStarted()
        } else if (s === "ends") this.turnHold = "each_call", this.uploadHoldTally.wholeTurnHoldEndedEarly();
        return n ? void 0 : "round_trip"
      }
    }
    if (e.type === "user" && this.toolResultReleases(e.message)) return "tool_result";
    if (e.type === "assistant" && e.message.id !== this.streamedResponseId && this.isLiveTwinRow(e)) return "event";
    if (this.holdRule === void 0 || this.mayWaitUnderHold(e)) return;
    return "event"
  }
  requestingRowMayWait(e) {
    return this.holdsAcrossModelCalls() && yr(e) && !this.flushPolicy?.mustFlushTypes.has(e.type)
  }
  holdAgainAt(e) {
    let s = this.flushPolicy?.holdAgain;
    if (!s || e.type !== "system" || !("subtype" in e) || e.subtype !== "status" || !("status" in e) || e.status !== "requesting" || !this.holdsAcrossModelCalls() || !this.isLiveTwinRow(e)) return;
    if (this.holdsNoMoreThisTurn || this.droppedDurableBatches !== this.droppedBeforeLiveTurn) return "ends";
    let n = this.requestingRowMayWait(e);
    if (this.unansweredCalls.size > 0) return n ? void 0 : "ends";
    let r = this.eventUploader.held();
    return this.turnHold === "each_call" || !n || this.heldResultNeedsStore || s.laterWorkerHoldsFirstTurn && this.secondCallStartsHold || s.softAgeMs > 0 && r.ageMs >= s.softAgeMs || s.softEvents > 0 && r.count >= s.softEvents ? "starts" : void 0
  }
  toolResultReleases(e) {
    if (this.holdRule !== "served_policy") return !1;
    let s = this.flushPolicy?.flushAfterTools === "all";
    return Je(e, "tool_result", "tool_use_id").some((n) => s || this.toolCallsWhoseResultReleases.has(n))
  }
  gateToolCall(e) {
    let s = this.flushPolicy;
    if (!s || s.flushAfterTools !== "write" && s.flushBeforeToolsWaitMs <= 0 || e.agentId !== void 0 || this.closed || !this.followsServedPolicy || !e.mayWrite()) return;
    if (s.flushAfterTools === "write") this.toolCallsWhoseResultReleases.add(e.toolUseId), fe(this.toolCallsWhoseResultReleases);
    let n = this.transcriptLaneInUse ? ["client_events", "internal_events"] : ["client_events"];
    if (s.flushBeforeToolsWaitMs <= 0 || this.lanesNotAnswering.size > 0 || e.signal.aborted || n.every((r) => this.toolCallRows[r].get(e.toolUseId) === "stored")) return;
    return this.awaitToolCallStored(e, n, s.flushBeforeToolsWaitMs)
  }
  async awaitToolCallStored(e, s, n) {
    let r = e.toolUseId,
      h = Date.now(),
      w = os(e.signal, {
        timeoutMs: n,
        refTimer: !0
      });
    this.awaitedToolCalls.add(r);
    let v = this.pickupBarriers.at(-1);
    if (v && !this.toolCallRows.client_events.has(r)) this.internalEventUploader.release("tool_call"), await Promise.race([v.opened.promise, ze(w.signal)]);
    let y = os(w.signal, {
        timeoutMs: this.toolCallRowGraceMs,
        refTimer: !0
      }),
      O = !1,
      M = !1;
    try {
      if (this.releaseClientEvents("tool_call"), this.internalEventUploader.release("tool_call"), await Promise.race([this.toolCallRowReaches("client_events", r, "queued"), ze(y.signal)]), O = this.toolCallRows.client_events.has(r), M = y.signal.aborted && !w.signal.aborted, O && !this.closed) await Promise.race([Promise.all(s.map((S) => this.toolCallRowReaches(S, r, "settled"))), ze(w.signal)])
    } finally {
      y.cleanup(), w.cleanup(), this.awaitedToolCalls.delete(r);
      for (let S of s) this.toolCallRowWaiters.delete(`${S} ${r}`)
    }
    let F = s.every((S) => this.toolCallRows[S].get(r) === "stored") ? "stored" : this.closed ? "closed" : e.signal.aborted ? "aborted" : s.some((S) => this.toolCallRows[S].get(r) === "dropped") ? "dropped" : M && !O ? "row_never_queued" : "timeout";
    if (F === "timeout" || F === "dropped") {
      for (let S of s)
        if (this.toolCallRows[S].get(r) === "queued") this.lanesNotAnswering.add(S)
    }
    V(F === "stored" || F === "closed" || F === "aborted" ? "info" : "warn", "cli_ccr_tool_call_upload_wait", {
      outcome: F,
      waited_ms: Date.now() - h,
      limit_ms: n,
      live_view_row: this.toolCallRows.client_events.get(r) ?? "none",
      transcript_row: s.includes("internal_events") ? this.toolCallRows.internal_events.get(r) ?? "none" : "lane_unused"
    })
  }
  toolCallRowReaches(e, s, n) {
    let r = this.toolCallRows[e].get(s);
    if (r !== void 0 && (r !== "queued" || n === "queued")) return Promise.resolve();
    return new Promise((h) => {
      let w = `${e} ${s}`,
        v = {
          until: n,
          reached: h
        },
        y = this.toolCallRowWaiters.get(w);
      if (y) y.push(v);
      else this.toolCallRowWaiters.set(w, [v])
    })
  }
  noteToolCallRows(e, s, n) {
    let r = this.toolCallRows[e];
    for (let h of s) {
      if (n === "queued" && r.has(h) || n === "dropped" && r.get(h) === "stored") continue;
      r.set(h, n), fe(r);
      let w = `${e} ${h}`,
        v = (this.toolCallRowWaiters.get(w) ?? []).filter((y) => {
          if (y.until === "queued" || n !== "queued") return y.reached(), !1;
          return !0
        });
      if (v.length > 0) this.toolCallRowWaiters.set(w, v);
      else this.toolCallRowWaiters.delete(w)
    }
  }
  noteToolCallRowsSettled(e, s, n) {
    if (!this.gatesToolCalls) return;
    if (s === "stored") this.lanesNotAnswering.delete(e);
    this.noteToolCallRows(e, n.flatMap((r) => ("session_agent_id" in r) && r.session_agent_id || ("ephemeral" in r) && r.ephemeral ? [] : de(r.payload)), s)
  }
  clientRowsAreGuarded() {
    if (!this.clientRowsSwitchIsOn || this.hasDisplayHooks === void 0) return !1;
    return this.displayHookSeen ||= this.hasDisplayHooks(), !this.displayHookSeen
  }
  flagsRefreshed() {
    return this.clientRowsSwitchIsOn = this.guardsClientRows?.() === !0, this.clientRowsSwitchIsOn
  }
  markOfRepliesShownAsStored() {
    return this.clientRowsAreGuarded() ? jn(this.sessionId) || void 0 : void 0
  }
  setDisplayHooksProbe(e) {
    this.hasDisplayHooks = e
  }
  noteClientRowsSettled(e, s) {
    if (this.guardsClientRows === void 0) return;
    if (!this.clientRowsAreGuarded()) {
      if (this.reportClientRowsOwed(this.clientRowsOwed.guardEnded(Date.now())), this.clientRowsOwed.rowsSentAgain.size === 0) return
    }
    let n = s.flatMap((h) => h.ephemeral ? [] : [h.payload.uuid]),
      r = U(n, (h) => this.clientRowsOwed.rowsSentAgain.has(h));
    if (r > 0)
      if (this.ownRowsWaitBehindRowsSentAgainSince = void 0, e === "stored") g("ccr_client_rows_owed", {
        rows: r
      });
      else m("ccr_client_rows_owed", "upload_refused", {
        rows: r
      });
    this.reportClientRowsOwed(this.clientRowsOwed.rowsAnswered(n))
  }
  reportClientRowsOwed(e) {
    if (e !== void 0) this.workerState.enqueue({
      internal_metadata: e
    })
  }
  async clientRowsOwedByEarlierWorkers(e) {
    if (this.guardsClientRows === void 0 || this.clientRowsOwed.earlierSpans.length === 0) return [];
    return await e(), this.flagsRefreshed() ? this.clientRowsOwed.earlierSpans : []
  }
  async tryClientRowsOwedByEarlierWorkers(e) {
    if (this.reportClientRowsOwed(this.clientRowsOwed.earlierSpansTried(e)), !await we(this.flushWorkerState(), Vs)) c("ccr_client_rows_owed", "try_report_unanswered")
  }
  async sendOwedClientRowsAgain(e) {
    if (!this.flagsRefreshed()) return;
    let s = Xi(e.map((n) => this.toClientEvent(n)), (n) => n.payload.uuid);
    this.clientRowsOwed.earlierRowsSentAgain(s.map((n) => n.payload.uuid));
    try {
      await this.enqueueClientEvents(s, {
        urgent: !0
      })
    } catch (n) {
      throw this.clientRowsOwed.earlierRowsWithdrawn(), n
    }
  }
  giveUpClientRowsOwedByEarlierWorkers() {
    this.reportClientRowsOwed(this.clientRowsOwed.earlierSpansGivenUp())
  }
  rowsSentAgainStepAside(e) {
    let {
      rowsSentAgain: s
    } = this.clientRowsOwed;
    if (!e.some((r) => s.has(r.payload.uuid))) return;
    if (this.eventUploader.backlog().unsent <= s.size) {
      this.ownRowsWaitBehindRowsSentAgainSince = void 0;
      return
    }
    if (this.ownRowsWaitBehindRowsSentAgainSince ??= Date.now(), Date.now() - this.ownRowsWaitBehindRowsSentAgainSince < Ks) return;
    this.ownRowsWaitBehindRowsSentAgainSince = void 0;
    let n = new Set(s);
    e.splice(0, e.length, ...e.filter((r) => !qt(r, n))), this.eventUploader.withdraw((r) => qt(r, n)), c("ccr_client_rows_owed", "upload_kept_failing", {
      rows: n.size
    }), this.clientRowsOwed.earlierRowsWithdrawn()
  }
  mayParkTextRow(e) {
    if (e.type !== "assistant" || !this.streamEventTimer || this.streamEventTimerIsSlow || this.lastReportedHasSubscribers === !1 || this.closed || this.isLiveTwinRow(e)) return !1;
    let s = e.message.content;
    return Array.isArray(s) && s.length > 0 && s.every((n) => n.type === "text")
  }
  liveTwinTypes() {
    return this.holdRule === "served_policy" && this.liveTurnId !== void 0 && this.turnHold !== "open" ? this.flushPolicy?.liveTwinTypes : void 0
  }
  isLiveTwinRow(e) {
    let s = this.liveTwinTypes();
    return s !== void 0 && (e.type === "tool_progress" ? e.heartbeat === !0 : !(("parent_tool_use_id" in e) && e.parent_tool_use_id)) && (e.type !== "user" || Array.isArray(e.message.content) && e.message.content.every((n) => n.type === "tool_result")) && (s.has(e.type) || ("subtype" in e) && s.has(`${e.type}/${e.subtype}`))
  }
  takeParkedRows() {
    let e = this.parkedRows.map(({
      event: s
    }) => s);
    return this.parkedRows = [], e
  }
  mayWaitUnderHold(e) {
    if (this.isLiveOnlyRow(e)) return !0;
    if (e.type === "keep_alive" && this.holdRule === "served_policy") return this.seesModelCallBoundaries && !this.flushPolicy?.mustFlushTypes.has(e.type);
    if (e.type === "control_response" && this.flushPolicy?.controlTrafficKeepsHold && this.holdsAcrossModelCalls()) return !this.flushPolicy.mustFlushTypes.has(e.type) && this.settingsRequestIds.has(e.response.request_id);
    if (!M7o(e)) return this.holdRule === "served_policy" && this.seesModelCallBoundaries && this.turnHold !== "open" && this.flushPolicy?.mayWaitTypes.has(e.type === "system" && e.subtype === "task_notification" && this.heldShellTaskIds.has(e.task_id) ? "system/task_notification_foreground_shell" : ce(e)) === !0 && !this.flushPolicy.mustFlushTypes.has(e.type);
    if (this.holdRule === "no_subscriber_flag" && !lr) return !0;
    if (e.type === "user" && "isReplay" in e && e.isReplay) return !1;
    let s = this.flushPolicy;
    if (!s) return !0;
    if (e.type === "assistant" && s.flushOnAssistant) return !1;
    return !s.mustFlushTypes.has(e.type)
  }
  isLiveOnlyRow(e) {
    return this.rowsMarkedLiveOnly.has(e) || this.followsServedPolicy && this.flushPolicy?.liveOnlyTypes.has(ce(e)) === !0
  }
  noteRequestingRow(e) {
    if ("parent_tool_use_id" in e && e.parent_tool_use_id) return;
    if ("resume_reason" in e && e.resume_reason) this.turnTookInput = !0;
    if (e.type === "assistant" || e.type === "user") this.toolResultEndsCall = e.type === "user" && _e(e.message), this.liveOnlyRequestingRow = void 0;
    if (e.type !== "system" || !("subtype" in e)) return;
    let s = e.subtype === "status" && "status" in e ? e.status : void 0;
    if (s === "compacting" || e.subtype === "compact_boundary") {
      let h = this.liveOnlyRequestingRow;
      return this.liveOnlyRequestingRow = void 0, h
    }
    if (s !== "requesting") return;
    let n = _("user_message_uuids" in e ? e.user_message_uuids ?? null : null),
      r = n === this.lastRequestingList && this.toolResultEndsCall && !this.turnTookInput && this.followsServedPolicy && this.flushPolicy?.liveOnlyTypes.has(Zt) === !0;
    if (this.liveOnlyFirstRow === "next") this.liveOnlyFirstRow = e;
    if (this.lastRequestingList = n, this.toolResultEndsCall = !1, this.liveOnlyRequestingRow = r ? e : void 0, e !== this.liveOnlyFirstRow && this.flushPolicy?.liveOnlyTypes.has(rs)) this.turnTookInput = !1;
    this.heldRepeatUuid = void 0;
    return
  }
  withStamp(e) {
    return {
      ...e,
      payload: {
        ...e.payload,
        live_turn_id: this.liveTurnId,
        live_index: this.nextLiveIndex++,
        emitted_at_ms: Date.now()
      }
    }
  }
  toClientEvent(e) {
    let s = xKi(e, g$n),
      n = s.historical === !0,
      r = Ht(e) || y$n(s) || this.isLiveOnlyRow(e) || e === this.liveOnlyRequestingRow || e === this.liveOnlyFirstRow,
      h = s.type === "user" ? this.uploadedToolResult(s.tool_use_result, s.message, s.is_virtual === !0) : s.tool_use_result;
    return {
      payload: {
        ...s,
        ...h !== s.tool_use_result && {
          tool_use_result: h
        },
        uuid: typeof s.uuid === "string" ? s.uuid : Ee()
      },
      ...n && {
        historical: !0
      },
      ...r && {
        ephemeral: !0
      }
    }
  }
  uploadedToolResult(e, s, n) {
    let r = n ? e : this.trimmedToolResult(e, s);
    if (!this.withholdsWholeFiles) return r;
    let h = M_s(r);
    if (h !== r && !this.loggedWholeFileWithheld) this.loggedWholeFileWithheld = !0, g("ccr_whole_file_withheld");
    return h
  }
  trimmedToolResult(e, s) {
    let n = this.currentUploadTrim(),
      r = I_s(e, n);
    if (r !== e && !this.loggedToolResultBlank) this.loggedToolResultBlank = !0, g("ccr_tool_result_blank");
    let h = QHi(r, s, n);
    if (h !== r && !this.loggedMcpImageBlank) this.loggedMcpImageBlank = !0, g("ccr_mcp_image_blank");
    return h
  }
  setStreamEventFlushIntervalMs(e) {
    if (this.streamEventFlushIntervalMs = ue("streamEventFlushIntervalMs", e, k6t), this.streamEventFlushIntervalMs <= 0 && this.streamEventTimer) this.flushStreamEventBuffer();
    if (this.streamEventFlushIntervalMs <= 0) this.toolInputMayWait = !1, this.thinkingBlockOpen = !1, this.awaitingFirstBlock = !1
  }
  setStreamEventFirstFlushMs(e) {
    this.streamEventFirstFlushMs = ue("streamEventFirstFlushMs", e, 0)
  }
  setThinkingStartGoesAtOnce(e) {
    this.thinkingStartGoesAtOnce = e === !0
  }
  setStreamEventWindowRunsFromLastFlush(e) {
    this.streamEventWindowRunsFromLastFlush = e === !0
  }
  setHeldBunchFlushMs(e) {
    this.heldBunchFlushMs = ue("heldBunchFlushMs", e, JXr)
  }
  setThinkingFlushMs(e) {
    this.thinkingFlushMs = Er(e)
  }
  setToolInputFlushMs(e) {
    this.toolInputFlushMs = kr(e)
  }
  setLiveTwinWaitMs(e) {
    this.liveTwinWaitMs = Tr(e)
  }
  setNoSubscriberStreamEventFlushIntervalMs(e) {
    let s = ue("noSubscriberStreamEventFlushIntervalMs", e, 0);
    if (s === this.noSubscriberStreamEventFlushIntervalMs) return;
    this.noSubscriberStreamEventFlushIntervalMs = s, this.setHasSubscribers(void 0, "reset")
  }
  setNoSubscriberUploadHoldMs(e) {
    let s = ue("noSubscriberUploadHoldMs", e, 0);
    if (s === this.noSubscriberUploadHoldMs) return;
    this.noSubscriberUploadHoldMs = s, this.setHasSubscribers(void 0, "reset")
  }
  setDropUnwatchedStreamEvents(e) {
    let s = e === !0;
    if (s === this.dropUnwatchedStreamEvents) return;
    this.setHasSubscribers(void 0, "reset"), this.dropUnwatchedStreamEvents = s
  }
  onSubscribersReported;
  setSubscribersReportedListener(e) {
    this.onSubscribersReported = e
  }
  tellSubscribersReported(e) {
    if (typeof e !== "boolean" || this.onSubscribersReported === void 0) return;
    if (e || !this.senderMayNotBeAttachedYet()) this.onSubscribersReported(e)
  }
  senderMayNotBeAttachedYet() {
    return Date.now() - this.lastInboundEventAtMs < dr
  }
  unwatched() {
    return this.noSubscriberUploadHoldMs > 0 && this.lastReportedHasSubscribers === !1
  }
  mayHoldUploads() {
    return this.noSubscriberUploadHoldMs > 0 || this.servedPolicyHolds()
  }
  servedPolicyHolds() {
    return (this.flushPolicy?.maxEvents ?? 0) > 1 && this.followsServedPolicy
  }
  checkpointForViewer(e) {
    if (this.closed || this.viewerCheckpointTimer || !this.holdsAcrossModelCalls()) return;
    this.viewerCheckpointTimer = setTimeout((s, n) => {
      if (s.viewerCheckpointTimer = null, s.holdsAcrossModelCalls()) s.uploadHeldRowsForViewer(n).catch(a)
    }, Math.max(0, this.lastViewerCheckpointAtMs + Bn - Date.now()), this, e)
  }
  async uploadHeldRowsForViewer(e) {
    if (this.lastViewerCheckpointAtMs = Date.now(), this.flushPolicy?.emptyCheckpointKeepsHold && !this.modelCallStreamed) this.setHasSubscribers(void 0, "watcher");
    else this.endWholeTurnHold(e);
    let s = this.liveTurnId,
      n = this.nextLiveIndex - 1,
      r = this.droppedBeforeLiveTurn;
    this.internalEventUploader.release(e), this.releaseClientEvents(e), await this.flush(), await this.enqueueClientEvents([{
      payload: {
        type: "system",
        subtype: "checkpoint_done",
        uuid: Ee(),
        live_turn_id: s,
        stored_through_live_index: this.droppedDurableBatches === r ? n : -1
      },
      ephemeral: !0
    }], {})
  }
  endWholeTurnHold(e) {
    if (this.turnHold === "open") return;
    if (this.turnHold = "each_call", this.uploadHoldTally.wholeTurnHoldEndedEarly(), !e || !this.flushPolicy?.holdAgain?.after.has(e)) this.holdsNoMoreThisTurn = !0
  }
  openTurn() {
    this.lastRequestingList = void 0, this.liveOnlyFirstRow = void 0, this.liveOnlyRequestingRow = void 0, this.turnTookInput = !1, this.modelCallStreamed = !1, this.turnHold = "open", this.uploadHoldTally.turnEnded(), this.holdsNoMoreThisTurn = !1, this.newestResponseId = void 0, this.unansweredCalls.clear()
  }
  holdsAcrossModelCalls() {
    return this.holdRule === "served_policy" && this.seesModelCallBoundaries && this.flushPolicy?.holdAcrossModelCalls === !0
  }
  decideHoldRule() {
    if (this.currentState !== "running" || this.shutdownReleased) return;
    if (this.servedPolicyHolds() && (this.seesModelCallBoundaries || this.lastReportedHasSubscribers === !1)) return "served_policy";
    return this.unwatched() ? "no_subscriber_flag" : void 0
  }
  applyUploadHold(e) {
    let s = this.decideHoldRule();
    this.holdRule = s, this.eventUploader.setHold(s && this.laneHold(s, !this.seesModelCallBoundaries ? Pt : this.flushPolicy?.controlTrafficKeepsHold ? Ct : Xe, this.turnHold === "open" ? this.flushPolicy?.noTurnMaxAgeMs : void 0), e), this.internalEventUploader.setHold(s && this.laneHold(s, Pt, this.flushPolicy?.transcriptMaxAgeMs), e)
  }
  laneHold(e, s, n) {
    let r = this.flushPolicy;
    if (e === "served_policy" && r) return {
      rule: e,
      maxAgeMs: Math.min(n || r.maxAgeMs, !this.seesModelCallBoundaries ? Qt : r.holdAcrossModelCalls ? ge : Xt),
      maxItems: r.maxEvents,
      maxBytes: r.maxBytes,
      passes: s
    };
    return {
      rule: "no_subscriber_flag",
      maxAgeMs: this.noSubscriberUploadHoldMs
    }
  }
  takeUpFlushPolicy(e) {
    let s = e ?? this.launchFlushPolicy,
      n = s == null ? void 0 : wr(s);
    if (s != null && !n && !this.loggedUnreadableFlushPolicy) this.loggedUnreadableFlushPolicy = !0, V("warn", "cli_ccr_flush_policy_unreadable");
    let r = this.flushPolicy;
    if (!Rr(r, n)) {
      if (this.flushPolicy = n, this.callsWhoseResultsWait.clear(), r?.flushAfterTools !== n?.flushAfterTools || !Xae(r?.flushAfterToolNames, n?.flushAfterToolNames)) this.toolCallsWhoseResultReleases.clear();
      V("info", n ? r ? "cli_ccr_flush_policy_changed" : "cli_ccr_flush_policy_adopted" : "cli_ccr_flush_policy_cleared", {
        ...n && {
          max_events: n.maxEvents,
          max_age_ms: n.maxAgeMs,
          max_bytes: n.maxBytes ?? 0,
          flush_on_sampling_end: n.flushOnSamplingEnd,
          flush_on_assistant: n.flushOnAssistant,
          event_batch_upload: n.eventBatchUpload,
          hold_across_model_calls: n.holdAcrossModelCalls,
          hold_again: n.holdAgain !== void 0,
          may_wait_types: n.mayWaitTypes.size,
          may_wait_types_refused: n.mayWaitTypesRefused,
          flush_after_tool_names: n.flushAfterToolNames.size,
          settings_receipts_max_wait_ms: n.settingsReceiptsMaxWaitMs,
          messages_received_waits: n.messagesReceivedWaits,
          receipts_ride_uploads: n.receiptsRideUploads,
          flush_before_tools_wait_ms: n.flushBeforeToolsWaitMs,
          flush_after_tools: n.flushAfterTools,
          must_flush_types: n.mustFlushTypes.size,
          live_twin_types: n.liveTwinTypes.size,
          live_only_types: n.liveOnlyTypes.size,
          transcript_max_age_ms: n.transcriptMaxAgeMs,
          no_turn_max_age_ms: n.noTurnMaxAgeMs,
          merge_worker_reports: n.mergeWorkerReports,
          control_traffic_keeps_hold: n.controlTrafficKeepsHold,
          empty_checkpoint_keeps_hold: n.emptyCheckpointKeepsHold,
          first_turn_holds_each_call: n.firstTurnHoldsEachCall,
          later_worker_holds_first_turn: n.holdAgain?.laterWorkerHoldsFirstTurn === !0,
          settings_answers_max_wait_ms: n.settingsAnswersMaxWaitMs,
          init_max_wait_ms: n.initMaxWaitMs,
          metadata_waits_for_status: n.metadataWaitsForStatus.size,
          metadata_never_sent: n.metadataNeverSent.size,
          metadata_max_wait_ms: n.metadataMaxWaitMs,
          cost_report_max_wait_ms: n.costReportMaxWaitMs,
          policy_version: n.policyVersion ?? ""
        },
        hold_enabled: this.followsServedPolicy
      }), this.applyUploadHold("reset")
    }
  }
  logUploadHoldEnd(e, s, n, r, h, w) {
    if (h === "no_subscriber_flag") {
      g("ccr_no_subscriber_hold", {
        lane: f(e),
        reason: f(s),
        held_events: n,
        held_ms: r
      });
      return
    }
    if (e === "client_events") {
      if (this.heldShellTaskIds.clear(), this.heldRepeatUuid = void 0, this.indexBehindHeldToolResult = void 0, s !== "round_trip") this.endWholeTurnHold(s)
    }
    this.uploadHoldTally.released(e, n, r), V("info", "cli_ccr_event_hold_release", {
      lane: e,
      reason: s,
      ...w !== void 0 && {
        released_by: w
      },
      held_events: n,
      held_ms: r
    })
  }
  uploadBody(e, s) {
    let n = {
      worker_epoch: this.workerEpoch,
      events: e
    };
    if (this.uploadHoldMarker()) n.upload_hold = {
      held: s.held,
      flush_reason: s.reason,
      held_count: Me(s.heldCount),
      hold_age_ms: Me(s.holdAgeMs),
      inflight_retry_count: Me(s.retryCount),
      hold_rule: s.rule,
      post_index: Me(s.postIndex),
      ...this.flushPolicy?.policyVersion !== void 0 && {
        policy_version: this.flushPolicy.policyVersion
      }
    };
    return n
  }
  retrySmaller(e, s, n, r, h = {
    bytes: n.bytes
  }) {
    let w = {
      count: s.length,
      kib: Math.round(h.bytes / 1024),
      retry_count: n.retryCount,
      timeout_ms: r
    };
    return t(`CCRClient: ${e} POST of ${w.count} event(s), ${w.kib} KiB got no response (the connection failed, or no answer within ${r}ms) after ${w.retry_count} earlier failure(s); ${h.bytes>=Ve&&n.cuttable?"retrying it in smaller batches":"retrying it"}`, {
      level: "warn"
    }), V("warn", e === "client_events" ? "cli_worker_events_no_response" : "cli_worker_internal_events_no_response", w), new Avo(`${e} POST got no response`, Ve)
  }
  logUploadDrain(e, s) {
    if (!this.uploadHoldMarker()) return;
    g("ccr_upload_drain", {
      lane: f(e),
      trigger: f(s.trigger),
      rule: f(s.rule),
      held_events: s.heldEvents,
      held_ms: s.heldMs,
      posts: s.posts,
      rows: s.rows,
      max_rows_post: s.maxRowsPost,
      failed_posts: s.failedPosts,
      dropped_rows: s.droppedRows,
      other_posts: s.otherPosts,
      other_rows: s.otherRows,
      drain_ms: s.drainMs
    })
  }
  logUndeliveredAtClose(e, s) {
    if (e === "client_events") this.undeliveredClientEventsAtClose ??= s;
    else this.undeliveredInternalEventsAtClose ??= s;
    if (this.shutdownKeepsClientEvents) t(`CCRClient: ${e} lane closed at shutdown, ${s} undelivered`, {
      level: s > 0 ? "warn" : "info"
    });
    if (s <= 0) return;
    if (this.noSubscriberUploadHoldMs > 0 && this.viewerAbsentReported) c("ccr_no_subscriber_hold", this.closingForSuccessor ? "undelivered_at_rebuild" : "undelivered_at_close", {
      lane: f(e),
      undelivered_events: s
    });
    if (this.servedPolicyHolds()) V("warn", "cli_ccr_event_hold_undelivered_at_close", {
      lane: e,
      undelivered_events: s,
      for_successor: this.closingForSuccessor
    })
  }
  bufferEphemeral(e) {
    let s = this.streamEventFirstFlushMs > 0 && e.type === "stream_event" ? e.event.type : void 0,
      n = s === "content_block_start";
    if (n) this.firstContentFlushPending = !0;
    let r = e.type === "stream_event" && !e.parent_tool_use_id ? e.event : void 0,
      h = !1;
    if (r?.type === "message_start") this.awaitingFirstBlock = !0;
    else if (r?.type === "content_block_start") h = this.awaitingFirstBlock && r.content_block.type === "thinking", this.awaitingFirstBlock = !1;
    if (r?.type === "content_block_start") this.toolInputMayWait = r.content_block.type === "tool_use" && Nn.has(r.content_block.name), this.toolInputChars = 0, this.thinkingBlockOpen = r.content_block.type === "thinking";
    else if (r?.type === "content_block_stop" || r?.type === "message_start") this.thinkingBlockOpen = !1;
    let w = this.thinkingBlockOpen && this.thinkingFlushMs > this.streamEventFlushIntervalMs && this.streamEventFirstFlushMs > 0 && (e.type !== "stream_event" || r?.type === "content_block_delta" && (r.delta.type === "signature_delta" || r.delta.type === "thinking_delta" && r.delta.thinking === "")),
      v = this.toolInputChars >= Dn,
      y = !1;
    if (r?.type === "content_block_delta" && r.delta.type === "input_json_delta") this.toolInputChars += r.delta.partial_json.length, y = this.toolInputMayWait && this.toolInputFlushMs > 0;
    if (this.dropUnwatchedStreamEvents && this.unwatchedPastGrace) {
      if (e.type === "stream_event") this.streamEventsDroppedUnwatched++;
      return
    }
    this.streamEventBuffer.push(e);
    let O = this.firstContentFlushPending && s === "content_block_delta";
    if (O) this.firstContentFlushPending = !1;
    let M = n || O && !y;
    if (n || O) this.bufferHoldsFirstFrames = !0;
    let P = O && e.type === "stream_event" && e.event.type === "content_block_delta" && e.event.delta.type !== "input_json_delta",
      F = this.thinkingStartGoesAtOnce && n && h;
    if ((P || F) && this.firstDeltaFlushTimer === null && !(this.lastReportedHasSubscribers === !1 && (this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberUploadHoldMs > 0))) {
      if (this.firstDeltaFlushTimer = setTimeout(() => {
          this.firstDeltaFlushTimer = null, this.flushStreamEventBuffer(!0)
        }, 0), F && !this.loggedThinkingStartAtOnce) this.loggedThinkingStartAtOnce = !0, g("ccr_thinking_start_at_once")
    }
    let S = this.streamEventTimerIsSlow && !y && !w;
    if (this.streamEventTimer && !M && !S) return;
    let B = y && v || w && !M;
    this.streamEventTimerIsSlow = B;
    let H = Date.now(),
      N = Math.max(y ? this.toolInputFlushMs : this.thinkingFlushMs, this.streamEventFlushIntervalMs),
      q = M ? Math.min(this.streamEventFirstFlushMs, this.streamEventFlushIntervalMs) : B ? Math.min(Math.max(this.streamEventsTakenAt + N - H, this.streamEventFlushIntervalMs), N) : this.streamEventWindowRunsFromLastFlush ? Math.min(Math.max(this.streamEventsTakenAt + this.streamEventFlushIntervalMs - H, this.heldBunchFlushMs), this.streamEventFlushIntervalMs) : this.streamEventFlushIntervalMs;
    if (q > this.streamEventFlushIntervalMs && y && !this.loggedToolInputFlush) this.loggedToolInputFlush = !0, g("ccr_tool_input_flush");
    if (q > this.streamEventFlushIntervalMs && w && !this.loggedThinkingFlush) this.loggedThinkingFlush = !0, g("ccr_thinking_flush");
    let X = this.lastReportedHasSubscribers === !1 ? Math.max(this.noSubscriberStreamEventFlushIntervalMs, this.noSubscriberUploadHoldMs, q) : q;
    if (this.streamEventTimer) {
      if (H + X >= this.streamEventFlushDueAt) return;
      clearTimeout(this.streamEventTimer)
    } else this.streamEventBufferedAt = H;
    this.streamEventFlushDueAt = H + X, this.streamEventTimer = setTimeout(() => void this.flushStreamEventBuffer(), X)
  }
  setHasSubscribers(e, s) {
    this.hasSubscribersReports++;
    let n = typeof e === "boolean" && (e || !this.senderMayNotBeAttachedYet()) ? e : void 0,
      r = this.lastReportedHasSubscribers;
    if (this.lastReportedHasSubscribers = n, n === !0) this.viewerReportedSinceLastFalse = !0;
    else if (n === !1 && this.viewerReportedSinceLastFalse) this.viewerReportedSinceLastFalse = !1, this.lastViewerLeftAtMs = Date.now();
    let h = this.unwatchedPastGrace;
    if (this.unwatchedPastGrace = n === !1 && Date.now() - this.lastViewerLeftAtMs >= ur, this.dropUnwatchedStreamEvents && h !== this.unwatchedPastGrace) t(this.unwatchedPastGrace ? "CCRClient: no subscribers reported; dropping stream deltas until one is" : `CCRClient: resuming stream deltas (${n===!0?"watcher":s})`);
    if (r === !1 && n !== !1 && this.streamEventTimer) this.flushStreamEventBuffer();
    let w = n === !0 ? "watcher" : s;
    if (n === !1) this.viewerAbsentReported = !0;
    else if (this.viewerAbsentReported && w === "watcher") {
      if (this.viewerAbsentReported = !1, this.holdRule === "served_policy") {
        if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
        this.releaseClientEvents("watcher"), this.internalEventUploader.release("watcher")
      }
    }
    this.applyUploadHold(w)
  }
  async flushStreamEventBuffer(e = !1) {
    let s = G_s("uploads"),
      n;
    try {
      let {
        events: r,
        release: h
      } = this.takeStreamEventBuffer(e);
      if (r.length > 0) {
        if (h) this.releaseTranscriptLane(h);
        n = this.enqueueClientEvents(r, h ? {
          release: h
        } : {
          since: this.streamEventBufferedAt
        })
      }
    } finally {
      V_s(s)
    }
    if (n) await n
  }
  enqueueClientEvents(e, s) {
    for (let n of this.trackedFrameUploads("enqueuedAtMs")) {
      let r = e.find((v) => v.payload.uuid === n.uuid);
      if (!r) continue;
      let h = this.eventUploader.inFlightBatch(),
        w;
      if (s.release === void 0 && this.eventUploader.holdsOnArrival(r)) w = "hold";
      else if (h !== void 0) w = h.some((v) => !v.ephemeral) ? "durable_post" : "ephemeral_post";
      else if (this.eventUploader.backlog().backingOff) w = "retry_backoff";
      else w = "none";
      n.timing.enqueuedAtMs = performance.now(), n.timing.queuedBehind = w
    }
    return this.eventUploader.enqueue(e, s)
  }
  releaseClientEvents(e, s) {
    this.eventUploader.release(e, s)
  }
  offerToEventsPost(e, s) {
    if (s.rule !== "served_policy" || s.retryCount > 0 || this.flushPolicy?.eventBatchUpload !== !0 || this.ridesAreOff()) return;
    let {
      promise: n,
      resolve: r
    } = Promise.withResolvers();
    return this.ridingRows = {
      rows: e,
      bytes: s.bytes,
      settle: r
    }, queueMicrotask(() => {
      if (this.ridingRows?.rows === e && !this.liveViewLaneSendsMore()) this.giveBackRidingRows()
    }), n
  }
  liveViewLaneSendsMore() {
    let {
      unsent: e,
      backingOff: s
    } = this.eventUploader.backlog();
    return !s && !this.eventUploader.waitsForMore() && e > (this.eventUploader.inFlightBatch()?.length ?? 0) + this.eventUploader.held().count
  }
  ridesAreOff() {
    return this.ridesRefused || performance.now() < this.ridesPausedUntilMs
  }
  noteRouteOnlyFailure(e) {
    if (this.routeOnlyFailures++, this.routeOnlyFailures < 2 && e !== 405 && e !== 501) return;
    let s = Math.min(zs * 2 ** this.ridePauses, js);
    this.ridePauses++, this.ridesPausedUntilMs = performance.now() + s, V("warn", "cli_ccr_joint_upload_paused", {
      status: e,
      pause_ms: s
    })
  }
  giveBackRidingRows() {
    this.ridingRows?.settle(!1), this.ridingRows = void 0
  }
  settlesTakenRiders(e) {
    let s = () => {
      this.takenRiders?.settle(!1), this.takenRiders = void 0
    };
    return (n, r) => {
      let h = e(n, r);
      return h.then(s, s), h
    }
  }
  actsOnSubscribersReports() {
    return this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberUploadHoldMs > 0 || this.dropUnwatchedStreamEvents || this.servedPolicyHolds()
  }
  takeStreamEventBuffer(e = !1) {
    if (!e) {
      if (this.streamEventTimer) {
        if (this.firstTextFrameUpload) ct(this.firstTextFrameUpload.timing, Date.now() - this.streamEventFlushDueAt);
        clearTimeout(this.streamEventTimer), this.streamEventTimer = null
      }
      if (this.streamEventTimerIsSlow = !1, this.firstDeltaFlushTimer) clearTimeout(this.firstDeltaFlushTimer), this.firstDeltaFlushTimer = null
    }
    let s, n = e ? [] : this.parkedRows;
    for (let {
        message: P
      }
      of n) s ??= this.releaseFor(P);
    if (this.streamEventBuffer.length === 0) return {
      events: e ? [] : this.takeParkedRows(),
      release: s,
      firstFrames: !1
    };
    let r = [],
      h, w = 0;
    for (let P of this.streamEventBuffer) {
      if (P.type === "stream_event") {
        r.push(P);
        continue
      }
      w = (h !== void 0 && P.estimated_tokens - P.estimated_tokens_delta === h.estimated_tokens ? w : 0) + P.estimated_tokens_delta, h = P
    }
    this.streamEventBuffer = [];
    let v = this.bufferHoldsFirstFrames;
    this.bufferHoldsFirstFrames = !1, this.streamEventsTakenAt = Date.now();
    for (let P of this.trackedFrameUploads("enqueuedAtMs")) P.uuid = Cmi(r, P.uuid);
    let M = _ar(r).filter((P) => {
      let F = Buffer.byteLength(_(P));
      if (F <= jEn) return !0;
      return Ue(P, F), !1
    }).map((P) => ({
      payload: P,
      ephemeral: !0
    }));
    if (h) M.push(this.toClientEvent({
      ...h,
      estimated_tokens_delta: w
    }));
    if (!e) M.push(...this.takeParkedRows());
    return {
      events: M,
      release: s,
      firstFrames: v
    }
  }
  currentUploadTrim() {
    let e = this.uploadTrim();
    return D(e) ? e : pt
  }
  async writeInternalEvent(e, s, {
    isCompaction: n = !1,
    agentId: r,
    preservedEventIds: h
  } = {}) {
    let w = h,
      v = ot(s);
    if (w && w.length > w6t) l("tengu_ccr_preserved_event_ids_clamped", {
      originalCount: w.length,
      cap: w6t,
      payloadClamped: v !== null
    }), w = w.slice(-w6t);
    let y = v ?? s;
    if (this.currentUploadTrim().envelope === !0) {
      let H = ZHi(y, this.keepsRequestId);
      if (H !== y && !this.loggedTranscriptEnvelopeStrip) this.loggedTranscriptEnvelopeStrip = !0, g("ccr_worker_envelope_strip");
      if (!this.loggedRequestIdKept && Dfo(H) && typeof H.requestId === "string" && this.keepsRequestId()) this.loggedRequestIdKept = !0, g("ccr_worker_error_request_id_kept");
      y = H
    }
    if (e === "transcript" && y.type === "user") {
      let H = this.uploadedToolResult(y.toolUseResult, y.message, y.isVirtual === !0);
      if (H !== y.toolUseResult) y = {
        ...y,
        toolUseResult: H
      }
    }
    let O = {
        payload: {
          type: e,
          ...y,
          uuid: typeof y.uuid === "string" ? y.uuid : Ee()
        },
        ...n && {
          is_compaction: !0
        },
        ...r && {
          session_agent_id: r
        },
        ...w?.length && {
          preserved_event_ids: w
        }
      },
      M = [O],
      P = r || "",
      F = this.rowsAwaitingCompactSummary.get(P);
    if (e === "transcript" && (F !== void 0 || n && this.rowsAwaitingCompactSummaryAtClose === void 0)) {
      if (F === void 0) F = {
        rows: [],
        timer: this.startCompactSummaryWaitTimer(P)
      }, this.rowsAwaitingCompactSummary.set(P, F);
      F.rows.push(O);
      let H = y.isCompactSummary === !0 ? "summary" : y.type === "user" || y.type === "assistant" ? "user_or_assistant_row" : F.rows.length >= or ? "row_cap" : void 0;
      if (H === void 0) return;
      M = this.takeRowsAwaitingCompactSummary(P, H)
    }
    let S = e === "transcript" && y.type === "user" && this.toolResultReleases(y.message),
      B = this.gatesToolCalls && e === "transcript" && !r ? de(y) : [];
    if (await this.queueInternalEvents(M, S ? "tool_result" : B.some((H) => this.awaitedToolCalls.has(H)) ? "tool_call" : !this.transcriptRowMayWait(e, y, r) ? "event" : void 0), e === "transcript") this.transcriptLaneInUse = !0;
    this.noteToolCallRows("internal_events", B, "queued")
  }
  async queueInternalEvents(e, s) {
    let n = e[0]?.is_compaction === !0 && this.holdRule !== void 0;
    if (n) this.releaseClientEvents("event", "compaction");
    let h = (e[0]?.is_compaction === !0 && e[0].session_agent_id === void 0 ? this.rowsRepeatedAfterCompaction?.() ?? [] : []).map(({
        eventType: v,
        payload: y
      }) => ({
        payload: {
          type: v,
          ...y,
          uuid: Ee()
        }
      })),
      w = [...e, ...h];
    this.markInternalEventPostWatch((v) => v.noteQueued(w)), await this.internalEventUploader.enqueue(w, {
      together: !0,
      release: n ? "event" : s
    })
  }
  startCompactSummaryWaitTimer(e) {
    let s = setTimeout((n, r) => {
      let h = n.rowsAwaitingCompactSummary.get(r);
      if (n.closed || h === void 0) return;
      if (!n.internalEventUploader.hasRoomFor(1)) {
        h.timer = n.startCompactSummaryWaitTimer(r);
        return
      }
      n.queueInternalEvents(n.takeRowsAwaitingCompactSummary(r, "timeout"), void 0).catch(a)
    }, ar, this, e);
    return s.unref?.(), s
  }
  takeRowsAwaitingCompactSummary(e, s) {
    let n = this.rowsAwaitingCompactSummary.get(e);
    this.rowsAwaitingCompactSummary.delete(e), clearTimeout(n?.timer);
    let r = n?.rows ?? [];
    if (s !== "summary" && s !== "close") V("info", "cli_worker_compaction_marker_uploaded_without_summary", {
      reason: s,
      count: r.length,
      subagent: e !== ""
    });
    return r
  }
  transcriptRowMayWait(e, s, n) {
    let r = this.flushPolicy;
    if (this.holdRule !== "served_policy" || !r) return !0;
    let h = e === "transcript" ? s.type : e;
    if (typeof h !== "string" || r.mustFlushTypes.has(h)) return !1;
    if (h === "attachment" && !n && D(s.attachment) && s.attachment.type === "prompt_snapshot") return this.internalEventUploader.hasHeld((w) => w.session_agent_id === void 0 && (w.payload.type === "assistant" || w.payload.type === "user" && (w.payload.toolUseResult !== void 0 || _e(w.payload.message))));
    if (h === "user") {
      if (r.holdAcrossModelCalls && this.turnHold === "open" && !n) return !1;
      return s.toolUseResult !== void 0 || _e(s.message) || s.isMeta === !0 || s.isVirtual === !0 || s.isCompactSummary === !0
    }
    return !(h === "assistant" && r.flushOnAssistant)
  }
  flushInternalEvents(e) {
    return this.internalEventUploader.flush(e)
  }
  watchInternalEventPosts() {
    let e = new Ie(this.internalEventUploader.backlog().unsent);
    return this.internalEventPostWatch = e, (s) => {
      if (this.internalEventPostWatch === e) this.internalEventPostWatch = void 0;
      return e.seen(s)
    }
  }
  markInternalEventPostWatch(e) {
    let s = this.internalEventPostWatch;
    if (s === void 0) return;
    try {
      e(s)
    } catch (n) {
      this.internalEventPostWatch = void 0, a(n)
    }
  }
  hasUnsentUploads() {
    let {
      unsentClientEvents: e,
      unsentInternalEvents: s
    } = this.uploadBacklog();
    return this.streamEventTimer !== null || e > 0 || s > 0 || this.deliveryUploader.backlog().unsent > 0 || this.workerState.unsent
  }
  uploadBacklog() {
    let e = this.eventUploader.backlog(),
      s = this.internalEventUploader.backlog(),
      n = [e.inFlightMs, s.inFlightMs].filter((r) => r !== void 0);
    return {
      unsentClientEvents: e.unsent,
      unsentInternalEvents: s.unsent + this.countRowsAwaitingCompactSummary(),
      oldestInFlightMs: n.length ? Math.max(...n) : void 0,
      backingOff: e.backingOff || s.backingOff
    }
  }
  async postInternalEventsBatch(e, s = {}) {
    let n = this.refuseInternalEventsCall(!0);
    if (n) return n;
    let r = this.epochMismatchCount;
    try {
      let h = await this.request("post", "/worker/internal-events", {
        worker_epoch: this.workerEpoch,
        events: e
      }, "internal events batch", {
        parseBody: !0,
        countTowardEscalation: !1,
        signal: s.signal
      });
      if (h.ok) {
        let w = En().safeParse(h.data);
        return {
          ok: !0,
          results: w.success ? w.data.results : void 0
        }
      }
      return this.internalEventsFailure(h, r)
    } catch (h) {
      return this.internalEventsFailure({
        reason: `fetch_failed:${ke(h)}`
      }, r)
    }
  }
  async getInternalEventsPage(e, s = {}) {
    let n = this.refuseInternalEventsCall(!1);
    if (n) return n;
    let r = new URL(`${this.sessionBaseUrl}/worker/internal-events`);
    if (e.limit !== void 0) r.searchParams.set("limit", String(e.limit));
    if (e.agentId) r.searchParams.set("session_agent_id", e.agentId);
    if (e.subagents) r.searchParams.set("subagents", "true");
    if (e.cursor) r.searchParams.set("cursor", e.cursor);
    else if (e.afterEventId) r.searchParams.set("after_event_id", e.afterEventId);
    let h = this.epochMismatchCount,
      w;
    try {
      let v = this.getAuthHeaders();
      if (Object.keys(v).length === 0) return {
        ok: !1,
        reason: "no_auth_headers"
      };
      w = os(s.signal, {
        timeoutMs: 30000,
        refTimer: !0,
        timeoutError: s.signal === void 0
      });
      let y = await fetch(r, {
        headers: {
          ...v,
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": cb(),
          "User-Agent": ui()
        },
        signal: w.signal,
        ...ba({
          url: r.toString()
        })
      });
      if (y.ok) {
        let S;
        try {
          S = await y.json()
        } catch (N) {
          if (!(N instanceof SyntaxError)) throw N
        }
        let B = bn().safeParse(S);
        if (!B.success) return V("warn", "cli_worker_internal_events_page_foreign"), {
          ok: !1,
          status: y.status,
          reason: "foreign_body"
        };
        let H = Number(y.headers.get("content-length") ?? Number.NaN);
        return {
          ok: !0,
          data: B.data.data.map(Ut),
          ...B.data.next_cursor && {
            nextCursor: B.data.next_cursor
          },
          bytes: Number.isFinite(H) ? H : null
        }
      }
      let O, M, P, F;
      if (y.status === 409) {
        let S = await qe(y);
        if (this.closed) F = S ?? this.lastEpochMismatchCause ?? "epoch_conflict";
        else try {
          this.handleEpochMismatch(S)
        } catch (B) {
          t(`CCRClient: onEpochMismatch threw during a page read: ${d(B)}`)
        }
      } else if (y.status === 404) try {
        let S = await y.json();
        if (typeof S?.error?.type === "string") O = S.error.type;
        if (typeof S?.error?.resource_type === "string") M = S.error.resource_type
      } catch {} else {
        if (y.status === 429) {
          let S = parseInt(y.headers.get("retry-after") ?? "", 10);
          if (!isNaN(S) && S >= 0) P = S * 1000
        }
        y.body?.cancel()
      }
      return t(`CCRClient: internal events page returned ${y.status}`, {
        level: "warn"
      }), V("warn", "cli_worker_request_failed", {
        method: "get",
        path: "/worker/internal-events",
        status: y.status
      }), this.internalEventsFailure({
        status: y.status,
        retryAfterMs: P,
        reason: `http_${y.status}`
      }, h, {
        errorType: O,
        resourceType: M,
        closedConflict: F
      })
    } catch (v) {
      return t(`CCRClient: internal events page failed: ${d(v)}`, {
        level: "warn"
      }), this.internalEventsFailure({
        reason: `fetch_failed:${ke(v)}`
      }, h)
    } finally {
      w?.cleanup()
    }
  }
  refuseInternalEventsCall(e) {
    if (this.closed) return {
      ok: !1,
      reason: "client_closed",
      ...this.lastEpochMismatchCause && {
        conflict: this.lastEpochMismatchCause
      }
    };
    if (e && this.workerEpoch <= 0) return {
      ok: !1,
      reason: "not_initialized"
    };
    return
  }
  internalEventsFailure(e, s, {
    errorType: n,
    resourceType: r,
    closedConflict: h
  } = {}) {
    let w = h ?? (this.epochMismatchCount > s ? this.lastEpochMismatchCause : e.status === 409 ? this.lastEpochMismatchCause ?? "epoch_conflict" : void 0),
      v = e.status ?? (w && un[w] ? 409 : void 0);
    return {
      ok: !1,
      reason: v === 409 ? "http_409" : e.reason ?? "unknown",
      ...v !== void 0 && {
        status: v
      },
      ...e.retryAfterMs !== void 0 && {
        retryAfterMs: e.retryAfterMs
      },
      ...w && {
        conflict: w
      },
      ...n && {
        errorType: n
      },
      ...r && {
        resourceType: r
      }
    }
  }
  droppedInternalEventBatches = 0;
  get droppedInternalBatches() {
    return this.droppedInternalEventBatches
  }
  refusedInternalEventUuids = new Set;
  refusedInternalEvents(e) {
    return e.filter((s) => this.refusedInternalEventUuids.has(s))
  }
  noteRefusedInternalEvents(e) {
    for (let {
        payload: n,
        session_agent_id: r
      }
      of e)
      if (r === void 0) this.refusedInternalEventUuids.add(n.uuid);
    let s = this.refusedInternalEventUuids.size - wn;
    for (let n of this.refusedInternalEventUuids) {
      if (s-- <= 0) break;
      this.refusedInternalEventUuids.delete(n)
    }
  }
  dropOrphanedHandedOffLines(e) {
    let s = 0;
    for (let n = 0; n < e.length;) {
      let r = e[n],
        {
          payload: h
        } = r;
      if (r.session_agent_id === void 0 && (h.handedOff === !0 || h.type === "system" && h.subtype === yn) && !(h.type === "user" && !_e(h.message)) && typeof h.parentUuid === "string" && this.refusedInternalEventUuids.has(h.parentUuid)) {
        e.splice(n, 1), s++, this.noteRefusedInternalEvents([r]);
        continue
      }
      n++
    }
    return s
  }
  droppedDeliveryAckBatches = 0;
  deliveryAcksWaitingForRoom = new Set;
  async flushDeliveryAcksConfirmed() {
    let e = this.droppedDeliveryAckBatches;
    if (this.receiptsRide) await this.receiptsRide.promise;
    return this.sendWaitingReceipts(), await Promise.all(this.deliveryAcksWaitingForRoom), await this.deliveryUploader.flush(), this.droppedDeliveryAckBatches === e && !this.closed
  }
  flushDeliveryAcks(e) {
    if (this.receiptsRide) return this.receiptsRide.promise.then(() => this.flushDeliveryAcks(e));
    return this.sendWaitingReceipts(), this.deliveryUploader.flush(e)
  }
  async flush(e) {
    if (this.waitingAnswers.length > 0) await this.writeEvents([]);
    return await this.flushStreamEventBuffer(), this.eventUploader.flush(e)
  }
  withdrawQueuedControlRequest(e) {
    let s = (n) => !n.ephemeral && n.payload.type === "control_request" && n.payload.request_id === e;
    return this.eventUploader.withdraw(s)
  }
  droppedDurableEventBatches = 0;
  get droppedDurableBatches() {
    return this.droppedDurableEventBatches
  }
  takeUndeliveredClientEvents() {
    return this.eventUploader.takeUndelivered().filter((e) => !e.ephemeral)
  }
  discardUndeliveredClientEvents() {
    let e = this.eventUploader.peekUndelivered().filter((s) => !s.ephemeral);
    return this.eventUploader.discardUndelivered(), e
  }
  adoptClientEvents(e) {
    if (e.length === 0) return;
    this.eventUploader.enqueue(e)
  }
  async flushWorkerState() {
    return this.workerState.flush()
  }
  droppedWorkerStatePatchCount = 0;
  droppedOwedMetadataPatchCount = 0;
  get droppedWorkerStatePatches() {
    return this.droppedWorkerStatePatchCount
  }
  refusedSwitchedOffMcpServers = null;
  switchedOffMcpServersRefusedAlone = 0;
  requeueRefusedSwitchedOffMcpServersOnceIdle() {
    if (this.refusedSwitchedOffMcpServers === null || this.refusedSwitchedOffMcpServers.writesToWaitFor > 0) return;
    setImmediate((e, s) => {
      if (e.refusedSwitchedOffMcpServers !== s || e.workerState.unsent || e.closed) return;
      e.refusedSwitchedOffMcpServers = null, e.workerState.requeueMetadata({
        internal_metadata: {
          [Ce]: s.value
        }
      })
    }, this, this.refusedSwitchedOffMcpServers)
  }
  async readInternalEvents(e, s, n) {
    return m$.readInternalEventsFrom(this.readSource, e, s, n)
  }
  async readInternalEventsForCatchUp(e, s, n) {
    return m$.paginatedGet(this.readSource, "/worker/internal-events", {
      limit: "1000",
      ...s && {
        after_event_id: s
      }
    }, "internal_events", {
      maxAttempts: Te,
      signal: e
    }, n)
  }
  static readInternalEventsFrom(e, s, n, r) {
    return m$.paginatedGet(e, "/worker/internal-events", {
      limit: "1000",
      ...s && {
        after_event_id: s
      }
    }, "internal_events", {
      signal: n
    }, r)
  }
  async readSubagentInternalEvents() {
    return m$.readSubagentInternalEventsFrom(this.readSource)
  }
  static readSubagentInternalEventsFrom(e) {
    return m$.paginatedGet(e, "/worker/internal-events", {
      subagents: "true",
      limit: "1000"
    }, "subagent_events")
  }
  async readAgentInternalEvents(e, s, n, r, h = !1) {
    return m$.paginatedGet(this.readSource, "/worker/internal-events", {
      session_agent_id: e,
      limit: "1000",
      ...r && {
        after_event_id: r
      }
    }, "agent_events", {
      maxAttempts: Te,
      signal: s
    }, n, Boolean(r), h)
  }
  async readAgentMetadataEvents(e, s) {
    let r = St() ? "essential-traffic-only" : this.providerWithheldReason();
    if (r !== void 0) return V("info", "cli_worker_request_withheld", {
      method: "post",
      path: "/worker/agent-metadata-events/batch-get",
      reason: r
    }), null;
    let h = [];
    for (let w of H1e(L(e), fn)) {
      let v = this.readSource.getAuthHeaders();
      if (Object.keys(v).length === 0) return null;
      let y = await m$.getWithRetry({
        ...this.readSource,
        onConflict: void 0
      }, `${this.readSource.sessionBaseUrl}/worker/agent-metadata-events/batch-get`, v, "agent_metadata_events", void 0, (O) => {
        V("warn", "cli_worker_request_failed", {
          method: "post",
          path: "/worker/agent-metadata-events/batch-get",
          status: O
        })
      }, {
        signal: s,
        postJson: _({
          session_agent_ids: w
        }),
        permanentStatuses: [403, 404, 501],
        readBody: async (O) => {
          let M;
          try {
            M = await O.json()
          } catch (F) {
            if (!(F instanceof SyntaxError)) throw F
          }
          let P = Rn().safeParse(M);
          if (!P.success) return V("warn", "cli_worker_agent_metadata_events_foreign"), null;
          return P.data.data ?? []
        }
      });
      if (y === null) return null;
      h.push(...y)
    }
    return h
  }
  static async paginatedGet(e, s, n, r, h = {}, w, v = !1, y = !1) {
    let O = e.getAuthHeaders();
    if (Object.keys(O).length === 0) return null;
    let M = v ? {
        ...h,
        maxAttempts: 1
      } : h,
      P = [],
      F, S = 0,
      B = 0,
      H = 0,
      N = 0,
      q = null;
    do {
      let X = new URL(`${e.sessionBaseUrl}${s}`);
      for (let [x, Q] of Object.entries(n)) X.searchParams.set(x, Q);
      if (F) X.searchParams.set("cursor", F), X.searchParams.delete("after_event_id");
      let z = !F && n.after_event_id !== void 0,
        Y, R = await m$.getWithRetry(e, X.toString(), O, r, (x) => {
          S++, q ??= x.headers.get("content-encoding");
          let Q = x.headers.get("content-length");
          if (Q !== null && N !== null) N += Number(Q);
          else N = null
        }, (x, Q) => {
          if (!z) return;
          if (x === 400) Y = "rejected";
          else if (Q === "after_event_id_not_found") Y = "not-found"
        }, w === void 0 ? M : {
          ...M,
          unencoded: !w.takesCompressedPages,
          readBody: async (x) => {
            let Q = x.headers.get("content-encoding");
            if (!w.takesCompressedPages && Q !== null && Q !== "identity") return await x.body?.cancel(), {
              encodedBody: !0
            };
            let K = await _n(x, w.maxBytes - H);
            if (K === null) return {
              pastMaxBytes: !0
            };
            let j = w.parsePage ? await w.parsePage(K.text) : ee(K.text);
            if (!D(j) || !Array.isArray(j.data) || !j.data.every(D)) throw Error("CCRClient: a page is no list of events");
            return H += K.bytes, j
          }
        });
      if (R?.encodedBody) return {
        events: [],
        stats: {
          pageCount: S,
          bytesReceived: N,
          contentEncoding: q ?? "none"
        },
        encodedBody: !0
      };
      if (!R) {
        if (Y) {
          if (t(`CCRClient: after_event_id ${Y==="rejected"?"rejected by server (gate off)":"not found (stale anchor)"} \u2014 ${y?"read failed, no refetch":"refetching without anchor"}`, {
              level: "warn"
            }), V("warn", Y === "rejected" ? "cli_worker_after_event_id_rejected" : "cli_worker_after_event_id_not_found", {
              context: r
            }), y) return null;
          let {
            after_event_id: x,
            ...Q
          } = n, K = await m$.paginatedGet(e, s, Q, r, h, w);
          if (!K) return null;
          return {
            ...K,
            anchorFallback: Y
          }
        }
        return null
      }
      for (let x of R.data ?? [])
        if (!n$i(x.payload)) P.push(Ut(x));
      B += Math.max(1, R.data?.length ?? 0);
      let A = w === void 0 ? void 0 : R.pastMaxBytes === !0 ? "bytes" : B > w.maxEvents ? "events" : (R.data ?? []).some((x) => !mn(x, w.maxTimestampChars)) ? "timestamp" : void 0;
      if (v && R.next_cursor || A !== void 0) {
        if (A !== void 0 && !y) w?.onPassed?.(A);
        return {
          events: [],
          stats: {
            pageCount: S,
            bytesReceived: N,
            contentEncoding: q ?? "none"
          },
          overBound: !0,
          ...A !== void 0 && {
            overBoundBy: A
          }
        }
      }
      F = R.next_cursor
    } while (F);
    return t(`CCRClient: Read ${P.length} internal events from ${s}${n.subagents?" (subagents)":""}`), {
      events: P,
      stats: {
        pageCount: S,
        bytesReceived: N,
        contentEncoding: q ?? "none",
        ...w !== void 0 && {
          bytesDecoded: H
        }
      }
    }
  }
  static getWithRetry(e, s, n, r, h, w, v = {}) {
    return m$.getWithRetryNow(e, s, n, r, h, w, v)
  }
  static async getWithRetryNow(e, s, n, r, h, w, {
    maxAttempts: v = hn,
    signal: y,
    readBody: O,
    unencoded: M,
    postJson: P,
    permanentStatuses: F
  }) {
    let S = 0;
    for (let B = 1; B <= v; B++) {
      if (y?.aborted) return null;
      let H;
      try {
        if (H = await oLt(s, {
            ...P !== void 0 && {
              method: "POST",
              body: P
            },
            headers: {
              ...n,
              ...P !== void 0 && {
                "Content-Type": "application/json"
              },
              "anthropic-version": "2023-06-01",
              "anthropic-client-platform": cb(),
              "User-Agent": ui(),
              ...M && {
                "Accept-Encoding": "identity"
              }
            },
            ...M && {
              decompress: !1
            },
            signal: y ? AbortSignal.any([AbortSignal.timeout(30000), y]) : AbortSignal.timeout(30000),
            ...ba({
              url: s
            })
          }, e.ownConnectionPool, e.leavesPoolAfterServerError), H.ok) {
          let q = O ? await O(H) : await H.json();
          return h?.(H), q
        }
      } catch (q) {
        if (y?.aborted) return null;
        if (t(`CCRClient: GET ${s} failed (attempt ${B}/${v}): ${d(q)}`, {
            level: "warn"
          }), q instanceof RangeError && ++S >= pn) break;
        if (B < v) {
          let X = Math.min(500 * 2 ** (B - 1), 30000) + Math.random() * 500;
          await J(X, y)
        }
        continue
      }
      let N;
      if (H.status === 404 && w) try {
        let q = await H.json();
        if (typeof q?.error?.type === "string") N = q.error.type
      } catch {} else if (H.status === 409) {
        if (e.isClosed?.()) return await n6(H), null;
        let q = await qe(H);
        if (e.isClosed?.()) return null;
        if (q === void 0 && y?.aborted) return t(`CCRClient: GET ${s} returned 409 after its caller ended the read; its reason was not read, so the next request's 409 decides`, {
          level: "warn"
        }), null;
        return e.onConflict?.(q), null
      } else await n6(H);
      if (re(H.status) || N === "after_event_id_not_found" || F?.includes(H.status) === !0) return t(`CCRClient: GET ${s} returned ${H.status} \u2014 permanent, not retrying`, {
        level: "warn"
      }), w?.(H.status, N), null;
      if (t(`CCRClient: GET ${s} returned ${H.status} (attempt ${B}/${v})`, {
          level: "warn"
        }), B < v) {
        let q = Math.min(500 * 2 ** (B - 1), 30000) + Math.random() * 500;
        await J(q, y)
      }
    }
    return t("CCRClient: GET retries exhausted", {
      level: "error"
    }), V("error", "cli_worker_get_retries_exhausted", {
      context: r
    }), null
  }
  reportDelivery(e, s, n, r) {
    if (n !== void 0 && this.flushPolicy?.holdAcrossModelCalls && this.waitingAnswers.some(Lt)) this.sendWaitingAnswers();
    if (!this.housekeepingRequestIds.has(e) && (s === "processing" || s === "received" && !r?.controlTraffic)) this.turnTookInput = !0, this.liveOnlyRequestingRow = void 0;
    if (s === "received") {
      this.lastInboundEventAtMs = Date.now();
      let O = r?.controlTraffic === !0 && this.flushPolicy?.controlTrafficKeepsHold === !0;
      if (this.setHasSubscribers(void 0, O ? "reset" : "watcher"), this.holdsAcrossModelCalls() && !O) {
        if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
        this.internalEventUploader.release("event", "inbound_event"), this.releaseClientEvents("event", "inbound_event")
      }
      if (n !== void 0) {
        this.holdsNoMoreThisTurn = !0, this.inboundMessageUuids.add(n);
        let M = this.inboundMessageUuids.values().next().value;
        if (this.inboundMessageUuids.size > Un && M !== void 0) this.inboundMessageUuids.delete(M)
      }
    }
    let h = s !== "received" && this.inboundMessageUuids.delete(e);
    if (s === "processing") {
      if (this.closed) return;
      if (h && this.receiptsMayRide()) this.messagesInProcessing.add(e);
      let O = this.pendingProcessingAcks.push(e) === 1;
      if (this.pickupTakesTick) return;
      if (h && this.holdsAcrossModelCalls() && this.turnHold !== "open") this.pickupTakesTick = !0, this.endWholeTurnHold(), this.ackPickupBehindWrittenRows().catch(a);
      else if (O) queueMicrotask(() => {
        if (!this.pickupTakesTick) this.sendProcessingAcks(this.pendingProcessingAcks)
      });
      return
    }
    let w = this.waitingReceipts.has(e),
      v = s === "processed" && this.messagesInProcessing.delete(e) && !this.closed && this.receiptsMayRide() && Nt(e) !== null && (this.resultPostWaits !== void 0 || this.liveViewLaneSendsMore());
    if (this.messagesInProcessing.size === 0) this.resultPostWaits?.();
    let y = (v || s === "received" && (r?.settingsRequest || n !== void 0 && this.flushPolicy?.messagesReceivedWaits)) && !this.closed && this.followsServedPolicy ? this.flushPolicy?.settingsReceiptsMaxWaitMs ?? 0 : 0;
    if (!w && y <= 0) {
      this.queueDeliveryAcks([...this.takeWaitingReceipts(Ae), {
        eventId: e,
        status: s
      }]);
      return
    }
    if (!w || s === "processed") this.waitingReceipts.set(e, s);
    if (v) this.receiptsRide ??= Promise.withResolvers();
    this.waitingReceiptsTimer ??= setTimeout(() => this.sendWaitingReceipts(), y)
  }
  receiptsMayRide() {
    return this.flushPolicy?.receiptsRideUploads === !0 && this.flushPolicy.settingsReceiptsMaxWaitMs > 0 && !this.receiptsRideRefused && this.followsServedPolicy
  }
  takeWaitingReceipts(e = () => !0) {
    let s = [...this.waitingReceipts].filter(([n, r]) => e(n, r)).map(([n, r]) => ({
      eventId: n,
      status: r
    }));
    for (let {
        eventId: n
      }
      of s) this.waitingReceipts.delete(n);
    if (this.waitingReceipts.size === 0) clearTimeout(this.waitingReceiptsTimer), this.waitingReceiptsTimer = void 0;
    if (![...this.waitingReceipts.values()].includes("processed")) this.receiptsRide?.resolve(), this.receiptsRide = void 0;
    return s
  }
  sendWaitingReceipts(e) {
    this.queueDeliveryAcks(this.takeWaitingReceipts(e))
  }
  queueDeliveryAcks(e) {
    let s = !this.deliveryUploader.hasRoomFor(e.length),
      n = this.deliveryUploader.enqueue(e);
    if (s) this.deliveryAcksWaitingForRoom.add(n), n.finally(() => this.deliveryAcksWaitingForRoom.delete(n))
  }
  async sendProcessingAcks(e) {
    let s = e.splice(0);
    if (this.closed || s.length === 0) return;
    let n = this.takeWaitingReceipts(Ae);
    if ((await this.request("post", "/worker/events/delivery", {
        worker_epoch: this.workerEpoch,
        updates: [...s.map((h) => ({
          event_id: h,
          status: "processing"
        })), ...n.map((h) => ({
          event_id: h.eventId,
          status: h.status
        }))]
      }, "processing ack")).ok) this.takeWaitingReceipts((h, w) => w === "received" && s.includes(h));
    else this.queueDeliveryAcks(n)
  }
  async ackPickupBehindWrittenRows() {
    this.sendWaitingAnswers();
    let e = this.pickupBarriers.at(-1)?.opened.promise,
      s = {
        opened: Promise.withResolvers(),
        writes: [],
        eventIds: []
      };
    this.pickupBarriers.push(s);
    let n;
    try {
      if (await Promise.resolve(), s.eventIds = this.pendingProcessingAcks.splice(0), this.pickupTakesTick = !1, await e, this.pickupBarriers.includes(s)) n = await we(this.storeWrittenRowsThenAck(s.eventIds), this.pickupWaitMs);
      else n = !0, await this.sendProcessingAcks(s.eventIds)
    } finally {
      let r = this.pickupBarriers.indexOf(s);
      this.openPickupBarriers(r < 0 || n ? r + 1 : this.pickupBarriers.length)
    }
  }
  async storeWrittenRowsThenAck(e) {
    return this.internalEventUploader.release("event", "pickup"), await this.flush(), await this.sendProcessingAcks(e), !0
  }
  openPickupBarriers(e) {
    for (let s of this.pickupBarriers.splice(0, e)) {
      this.sendProcessingAcks(s.eventIds).catch(a);
      for (let {
          messages: n,
          opts: r,
          written: h
        }
        of s.writes) this.writeEventsNow(n, r).then(h.resolve, h.reject);
      s.opened.resolve()
    }
  }
  getWorkerEpoch() {
    return this.workerEpoch
  }
  get internalEventsPending() {
    return this.internalEventUploader.pendingCount + this.countRowsAwaitingCompactSummary() + (this.rowsAwaitingCompactSummaryAtClose ?? 0)
  }
  uploadHoldInAll() {
    let e = this.flushPolicy;
    return e !== void 0 && this.servedPolicyHolds() ? {
      holdsAcrossModelCalls: e.holdAcrossModelCalls,
      maxAgeMs: e.maxAgeMs,
      maxEvents: e.maxEvents,
      counts: this.uploadHoldTally.counts
    } : void 0
  }
  uploadLaneCounts() {
    return {
      clientEventsPending: this.eventUploader.pendingCount,
      droppedDurableBatches: this.droppedDurableEventBatches,
      undeliveredClientEventsAtClose: this.undeliveredClientEventsAtClose,
      undeliveredInternalEventsAtClose: this.undeliveredInternalEventsAtClose,
      clientEventsAfterClose: this.eventUploader.handedOverAfterCloseCount,
      internalEventsAfterClose: this.internalEventUploader.handedOverAfterCloseCount
    }
  }
  countRowsAwaitingCompactSummary() {
    let e = 0;
    for (let s of this.rowsAwaitingCompactSummary.values()) e += s.rows.length;
    return e
  }
  get awaitsCompactSummary() {
    return this.rowsAwaitingCompactSummary.has("")
  }
  hasInternalEventRoom(e) {
    return !this.awaitsCompactSummary && this.internalEventUploader.hasRoomFor(e)
  }
  close(e) {
    if (this.closeExceptInternalEvents(e), this.refusedSwitchedOffMcpServers !== null) V("warn", "cli_worker_switched_off_mcp_servers_not_saved", {
      times_refused_alone: this.switchedOffMcpServersRefusedAlone,
      accepted_writes_until_due: this.refusedSwitchedOffMcpServers.writesToWaitFor
    }), this.refusedSwitchedOffMcpServers = null;
    let s = this.countRowsAwaitingCompactSummary();
    for (let n of this.rowsAwaitingCompactSummary.keys()) this.takeRowsAwaitingCompactSummary(n, "close");
    this.rowsAwaitingCompactSummaryAtClose ??= s, this.logUndeliveredAtClose("internal_events", this.internalEventUploader.close() + s)
  }
  flushGoodbye() {
    return this.goodbyeFlushed
  }
  closeExceptInternalEvents(e) {
    this.sendWaitingAnswers(), this.openPickupBarriers(this.pickupBarriers.length);
    let s = this.closed;
    this.closed = !0, this.giveBackRidingRows(), this.workerSocket?.usePostFromNowOn(), this.closeAbort.abort(), this.closingForSuccessor = e?.retainUndeliveredClientEvents === !0;
    let n = this.takeParkedRows();
    if (n.length > 0) this.eventUploader.enqueue(n);
    if (e?.keepWaitingWorkerMetadata === !0) this.workerState.closeToNewPatches();
    else this.workerState.close();
    if (!s && e?.goodbye !== !1) this.sendGoodbye();
    if (this.stopHeartbeat(), this.clearProbeBeatTimer(), this.viewerCheckpointTimer) clearTimeout(this.viewerCheckpointTimer), this.viewerCheckpointTimer = null;
    this.unsubscribeIdleTracker?.(), rqi(), this.stopWorkStartKeepAlive?.(), this.stopToolCallGate?.();
    for (let r of this.toolCallRowWaiters.values())
      for (let h of r) h.reached();
    if (this.toolCallRowWaiters.clear(), this.streamEventTimer) clearTimeout(this.streamEventTimer), this.streamEventTimer = null;
    if (this.firstDeltaFlushTimer) clearTimeout(this.firstDeltaFlushTimer), this.firstDeltaFlushTimer = null;
    if (this.streamEventBuffer = [], this.pendingProcessingAcks = [], this.receiptsRide) this.sendWaitingReceipts(Ae);
    if (clearTimeout(this.waitingReceiptsTimer), e?.keepClientEvents !== !0) this.logUndeliveredAtClose("client_events", this.eventUploader.close({
      retainUndelivered: e?.retainUndeliveredClientEvents === !0
    }));
    this.deliveryUploader.close()
  }
  registerShutdownCleanup(e = {
    registerCleanup: vt,
    registerPreExitFlush: zA
  }, s = Ft) {
    e.registerCleanup(() => this.beginShutdown()), e.registerPreExitFlush(() => this.finishShutdown(s))
  }
  beginShutdown() {
    this.shutdownBeganAtMs = performance.now(), this.owedMetadataDropsAtShutdown = this.droppedOwedMetadataPatchCount, this.sendWaitingReceipts();
    try {
      let e = !this.closed && this.currentState === "running" && this.followsServedPolicy;
      if (this.shutdownKeepsClientEvents = e || !this.closed && this.servedPolicyHolds(), this.shutdownKeepsClientEvents) this.shutdownReleased = !0, this.applyUploadHold("shutdown")
    } finally {
      this.closeExceptInternalEvents({
        keepClientEvents: this.shutdownKeepsClientEvents,
        keepWaitingWorkerMetadata: !0
      })
    }
  }
  async finishShutdown(e = Ft, s = 1 / 0) {
    let n = performance.now();
    await this.flushGoodbye();
    let r = Math.max(0, s - (performance.now() - n)),
      h = this.workerState.owesMetadata;
    try {
      await we(Promise.allSettled([this.flushEventLanesAtShutdown(Math.min(e, r)), h ? we(this.flushWorkerState().then(() => this.flushEventLanesAtShutdown(e)), Math.max(0, Math.min(e - (performance.now() - this.shutdownBeganAtMs), r))) : void 0]), e)
    } finally {
      let w = this.droppedOwedMetadataPatchCount > this.owedMetadataDropsAtShutdown;
      if (h || this.workerState.hasCutKeptMetadata || w) V("info", "cli_worker_metadata_at_shutdown", {
        outcome: this.workerState.owesMetadata ? "timed_out" : this.workerState.hasCutKeptMetadata ? "cut" : w ? "refused" : "drained"
      });
      this.close(), this.onInternalEventLaneClosed?.(), await Pqe().catch(() => {})
    }
  }
  flushEventLanesAtShutdown(e) {
    return Promise.allSettled([this.flushInternalEvents(), this.shutdownKeepsClientEvents ? we(this.flush(), e) : void 0])
  }
}
var Ft = 3000;

function vr(e) {
  let s = e.post_turn_summary;
  if (!gr(s) || s.status_category !== "blocked") return e;
  return {
    ...e,
    post_turn_summary: {
      ...s,
      status_category: "need_input"
    }
  }
}

function gr(e) {
  return e !== null && typeof e === "object" && "status_category" in e && typeof e.status_category === "string"
}
async function qe(e) {
  let s = $e(e.headers.get("x-ccr-conflict-reason"));
  if (s !== void 0) return await n6(e), s;
  try {
    let n = await e.json();
    return $e(n?.error?.reason ?? n?.reason) ?? $e(n?.error?.type)
  } catch {}
  return
}

function $e(e) {
  switch (e) {
    case "superseded_by_worker":
    case "epoch_stale":
    case "session_not_active":
    case "organization_moved_away":
      return e;
    default:
      return
  }
}

function wr(e) {
  let s = An().safeParse(e);
  if (!s.success) return;
  let n = s.data,
    r = n.hold_across_model_calls === !0,
    h = ne(n.max_age_ms, r ? ge : Xt),
    w = h > 0 ? ne(n.max_events, r ? Pn : Cn) : 0,
    v = ne(n.max_bytes, Hn),
    y = r ? 0 : ne(n.transcript_max_age_ms, Qt),
    O = y > h ? y : 0,
    M = ne(n.no_turn_max_age_ms, h),
    P = n.policy_version ?? void 0;
  return {
    maxEvents: w,
    maxAgeMs: h,
    maxBytes: v > 0 ? v : void 0,
    flushOnSamplingEnd: n.flush_on_sampling_end === !0 && !r,
    flushOnAssistant: n.flush_on_assistant === !0,
    eventBatchUpload: n.event_batch_upload === !0,
    holdAcrossModelCalls: r,
    holdAgain: r && n.hold_again ? {
      softAgeMs: ne(n.hold_again.soft_age_ms, h),
      softEvents: ne(n.hold_again.soft_events, w),
      after: new Set((n.hold_again.after ?? []).slice(0, Tt)),
      neverAfterTools: new Set((n.hold_again.never_after_tools ?? []).slice(0, Ne)),
      toolsWhoseResultsWait: n.hold_again.tools_whose_results_wait ? new Set(n.hold_again.tools_whose_results_wait.slice(0, Ne)) : void 0,
      laterWorkerHoldsFirstTurn: n.hold_again.later_worker_holds_first_turn === !0 && n.live_twin_types?.includes("system/status") === !0
    } : void 0,
    mayWaitTypes: new Set((n.may_wait_types ?? []).filter((F) => Mt.has(F))),
    mayWaitTypesRefused: U(n.may_wait_types ?? [], (F) => !Mt.has(F)),
    settingsReceiptsMaxWaitMs: ne(n.settings_receipts_max_wait_ms, Gn),
    messagesReceivedWaits: n.messages_received_waits === !0,
    receiptsRideUploads: n.receipts_ride_uploads === !0,
    flushBeforeToolsWaitMs: ne(n.flush_before_tools_wait_ms, sr),
    flushAfterTools: rr.find((F) => F === n.flush_after_tools) ?? "none",
    flushAfterToolNames: new Set((n.flush_after_tool_names ?? []).slice(0, Ne)),
    mustFlushTypes: new Set((n.must_flush_types ?? []).slice(0, Tt)),
    liveTwinTypes: new Set((n.live_twin_types ?? []).filter((F) => !F.startsWith("control_")).slice(0, Xn)),
    liveOnlyTypes: new Set((n.live_only_types ?? []).filter((F) => Yn.has(F))),
    transcriptMaxAgeMs: O,
    noTurnMaxAgeMs: M < h ? M : 0,
    mergeWorkerReports: n.merge_worker_reports === !0,
    controlTrafficKeepsHold: r && n.control_traffic_keeps_hold === !0,
    emptyCheckpointKeepsHold: r && n.empty_checkpoint_keeps_hold === !0,
    firstTurnHoldsEachCall: r && n.first_turn_holds_each_call === !0,
    settingsAnswersMaxWaitMs: ne(n.settings_answers_max_wait_ms, wt),
    initMaxWaitMs: ne(n.init_max_wait_ms, wt),
    metadataWaitsForStatus: new Set((n.metadata_waits_for_status ?? []).filter((F) => Qn.has(F))),
    metadataNeverSent: new Set((n.metadata_never_sent ?? []).filter((F) => is.has(F))),
    metadataMaxWaitMs: ne(n.metadata_max_wait_ms, ge),
    costReportMaxWaitMs: ne(n.cost_report_max_wait_ms, Jn),
    policyVersion: P !== void 0 && tr.test(P) ? P : void 0
  }
}

function Ut(e) {
  let s = H0n(e.payload);
  return s === e.payload ? e : {
    ...e,
    payload: s
  }
}

function yr(e) {
  return "user_message_uuids" in e && Array.isArray(e.user_message_uuids) && e.user_message_uuids.length > 0 && e.user_message_uuids.every((s) => typeof s === "string")
}

function Lt(e) {
  return e.type === "system" && "subtype" in e && e.subtype === "init" && !(("parent_tool_use_id" in e) && e.parent_tool_use_id)
}
var Sr = new Set(["assistant", "attachment", "result", "system", "user"]);

function Bt(e) {
  let s = e.length === 1 ? e[0].payload : void 0;
  return s && {
    row_type: Sr.has(s.type) ? s.type : "other",
    row_has_tool_result: _e(s.message),
    row_bytes: Buffer.byteLength(_(s))
  }
}

function ce(e) {
  if (e.type === "system" && e.subtype === "task_started" && e.task_type === "local_bash" && e.is_backgrounded === !1 && !(("owned_by_subagent" in e) && e.owned_by_subagent)) return "system/task_started_foreground_shell";
  if (e.type === "rate_limit_event") {
    let s = e.rate_limit_info;
    if (!D(s) || typeof s.status !== "string") return e.type;
    let n = s.rateLimitGraceActive === !0 ? "_grace" : s.overageInUse === !0 || s.isUsingOverage === !0 ? "_overage" : "";
    return `${e.type}/${s.status}${n}`
  }
  return "subtype" in e && typeof e.subtype === "string" ? `${e.type}/${e.subtype}` : e.type
}

function _e(e) {
  let s = D(e) ? e.content : void 0;
  return Array.isArray(s) && s.some((n) => D(n) && n.type === "tool_result")
}
var br = new Set(["ReadNotifications"]);

function de(e, s) {
  return D(e) && e.type === "assistant" && e.parent_tool_use_id == null ? Je(e.message, "tool_use", "id", s) : []
}

function Je(e, s, n, r) {
  let h = D(e) ? e.content : void 0;
  if (!Array.isArray(h)) return [];
  let w = [];
  for (let v of h)
    if (D(v) && v.type === s && (r === void 0 || typeof v.name === "string" && r.has(v.name))) {
      let y = v[n];
      if (typeof y === "string") w.push(y)
    } return w
}

function ze(e) {
  return new Promise((s) => {
    if (e.aborted) s();
    else e.addEventListener("abort", () => s(), {
      once: !0
    })
  })
}

function fe(e) {
  if (e.size > ir) {
    let s = e.keys().next().value;
    if (s !== void 0) e.delete(s)
  }
}

function ne(e, s) {
  return typeof e === "number" && Number.isFinite(e) ? Math.min(Math.max(0, Math.trunc(e)), s) : 0
}

function Rr(e, s) {
  if (!e || !s) return e === s;
  return e.maxEvents === s.maxEvents && e.maxAgeMs === s.maxAgeMs && e.maxBytes === s.maxBytes && e.flushOnSamplingEnd === s.flushOnSamplingEnd && e.flushOnAssistant === s.flushOnAssistant && e.eventBatchUpload === s.eventBatchUpload && e.holdAcrossModelCalls === s.holdAcrossModelCalls && e.holdAgain?.softAgeMs === s.holdAgain?.softAgeMs && e.holdAgain?.softEvents === s.holdAgain?.softEvents && Xae(e.holdAgain?.after, s.holdAgain?.after) && Xae(e.holdAgain?.neverAfterTools, s.holdAgain?.neverAfterTools) && Xae(e.holdAgain?.toolsWhoseResultsWait, s.holdAgain?.toolsWhoseResultsWait) && e.holdAgain?.laterWorkerHoldsFirstTurn === s.holdAgain?.laterWorkerHoldsFirstTurn && Xae(e.mayWaitTypes, s.mayWaitTypes) && Xae(e.liveOnlyTypes, s.liveOnlyTypes) && Xae(e.flushAfterToolNames, s.flushAfterToolNames) && e.settingsReceiptsMaxWaitMs === s.settingsReceiptsMaxWaitMs && e.messagesReceivedWaits === s.messagesReceivedWaits && e.receiptsRideUploads === s.receiptsRideUploads && e.flushBeforeToolsWaitMs === s.flushBeforeToolsWaitMs && e.flushAfterTools === s.flushAfterTools && e.mergeWorkerReports === s.mergeWorkerReports && e.transcriptMaxAgeMs === s.transcriptMaxAgeMs && e.noTurnMaxAgeMs === s.noTurnMaxAgeMs && e.controlTrafficKeepsHold === s.controlTrafficKeepsHold && e.emptyCheckpointKeepsHold === s.emptyCheckpointKeepsHold && e.firstTurnHoldsEachCall === s.firstTurnHoldsEachCall && e.settingsAnswersMaxWaitMs === s.settingsAnswersMaxWaitMs && e.initMaxWaitMs === s.initMaxWaitMs && e.policyVersion === s.policyVersion && e.mustFlushTypes.size === s.mustFlushTypes.size && [...e.mustFlushTypes].every((n) => s.mustFlushTypes.has(n)) && e.liveTwinTypes.size === s.liveTwinTypes.size && [...e.liveTwinTypes].every((n) => s.liveTwinTypes.has(n)) && e.metadataMaxWaitMs === s.metadataMaxWaitMs && e.costReportMaxWaitMs === s.costReportMaxWaitMs && e.metadataWaitsForStatus.size === s.metadataWaitsForStatus.size && [...e.metadataWaitsForStatus].every((n) => s.metadataWaitsForStatus.has(n)) && Xae(e.metadataNeverSent, s.metadataNeverSent)
}

function ue(e, s, n) {
  let r = typeof s === "string" ? Number(s) : s;
  if (typeof r === "number" && Number.isFinite(r)) return Math.min(Math.max(r, 0), 60000);
  if (s !== void 0) t(`CCRClient: non-finite ${e} (${typeof s}) \u2014 using ${n}ms`, {
    level: "warn"
  });
  return n
}

function Er(e) {
  return Math.min(ue("thinkingFlushMs", e, 0), qn)
}

function kr(e) {
  return Math.min(ue("toolInputFlushMs", e, 0), $n)
}

function Tr(e) {
  return Math.min(ue("liveTwinWaitMs", e, 0), zn)
}

function Ht(e) {
  return e.type === "system" && "subtype" in e && e.subtype === "thinking_tokens"
}

function M7o(e) {
  switch (e.type) {
    case "user":
    case "stream_event":
    case "tool_progress":
      return !0;
    case "assistant":
      return !e.message.content.some((s) => s.type === "tool_use" && (s.name === "SendUserMessage" || s.name === "PushNotification"));
    case "system":
      return "subtype" in e && (e.subtype === "thinking_tokens" || e.subtype === "task_progress" || e.subtype === "hook_progress");
    default:
      return !1
  }
}

function je(e, s) {
  let n = new URLSearchParams;
  if (e) n.set("include_hearth", "true");
  if (s) n.set("transcript_after_event_id", s);
  let r = n.toString();
  return r ? `?${r}` : ""
}

function Mr(e) {
  let s = e?.transcript_position?.foreground;
  if (s === void 0) return;
  return s === "at_event" || s === "past_event" ? s : "unknown"
}

function Dt(e) {
  return e?.hearth
}

function qt(e, s) {
  return e.historical === !0 && s.has(e.payload.uuid)
}

function Ze(e) {
  return e.payload.type === "user"
}

function mar(e) {
  let s = e?.isTurnRunning ?? (() => RNe() > 0),
    n = De(),
    r = Date.now();
  return {
    noteActivity() {
      r = Date.now();
      try {
        n.emit()
      } catch (h) {
        a(h)
      }
    },
    sampleIdleSeconds() {
      let h = Date.now();
      if (s()) return r = h, 0;
      return Math.max(0, Math.floor((h - r) / 1000))
    },
    onActivity: n.subscribe
  }
}
var eJr = 30000;
var ls = 50,
  Ar = 16384,
  ds = 500,
  ye = 10,
  Cr = 1000,
  Pr = 1000,
  Or = 3,
  he = 3600000,
  us = 1048576,
  Ir = 1e6;
class st {
  decoder;
  clock;
  sink;
  watch = null;
  cancelTick = null;
  nextTickDueMs = 1 / 0;
  lastTickLagMs = 0;
  lastTickAtMs = 0;
  dispatchedSeen;
  lastLineAtMs = -1 / 0;
  disabled = !1;
  constructor(e, s = Ur, n = Fr) {
    this.decoder = e;
    this.clock = s;
    this.sink = n;
    this.dispatchedSeen = e.framesDispatched
  }
  observe(e, s) {
    let n = this.decoder.framesDispatched - this.dispatchedSeen;
    if (this.dispatchedSeen = this.decoder.framesDispatched, this.watch === null && this.decoder.pendingChars === 0 && !s.some(cs)) return;
    if (this.disabled) return;
    try {
      this.onRead(e, n, s)
    } catch (r) {
      this.disable(r)
    }
  }
  stop() {
    this.cancelTick?.(), this.cancelTick = null, this.nextTickDueMs = 1 / 0, this.watch = null
  }
  onRead(e, s, n) {
    let r = this.clock.nowMs(),
      h = this.clock.cpuMicros(),
      w = s > 0 && this.decoder.pendingChars > 0 ? Math.min(Buffer.byteLength(this.decoder.buffered()), e) : 0,
      v = this.watch,
      y = null;
    if (v !== null) {
      if (v.reads === 0 && s === 0 && !this.frameHasBegun()) return;
      let O = {
        gapMs: r - v.lastReadAtMs,
        loopLagMs: this.loopLagAt(r),
        cpuMs: (h - v.lastCpuMicros) / 1000
      };
      if (this.stop(), v.reads === 0) {
        if (O.loopLagMs !== null && O.gapMs - O.loopLagMs <= ds) y = {
          gapMs: O.gapMs,
          loopLagMs: O.loopLagMs,
          cpuMs: O.cpuMs
        }
      } else {
        if (O.gapMs > v.maxGap.gapMs) v.maxGap = O, v.maxGapOffsetBytes = v.bytes;
        if (v.reads++, v.bytes += e, v.lastReadAtMs = r, v.lastCpuMicros = h, s === 0) {
          this.watch = v, this.armTick(r);
          return
        }
        v.bytes -= w, this.report(v, r)
      }
    }
    if (this.frameHasBegun()) {
      this.watch = et(r, h, {
        reads: 1,
        bytes: s === 0 ? e : w,
        before: s === 0 ? y : null
      }), this.armTick(r);
      return
    }
    if (y !== null && s === 1) this.report(et(r, h, {
      reads: 1,
      bytes: e,
      before: y
    }), r);
    if (n.some(cs)) this.watch = et(r, h, {
      reads: 0,
      bytes: 0,
      before: null
    }), this.armTick(r)
  }
  frameHasBegun() {
    let e = this.decoder.pendingChars;
    return e > Or || e > 0 && /[^\r\n]/.test(this.decoder.buffered())
  }
  report(e, s) {
    let {
      before: n,
      maxGap: r
    } = e, h = n !== null && n.loopLagMs >= ls && e.bytes >= Ar;
    if (r.gapMs < ls && !h) return;
    if (s - this.lastLineAtMs < Pr) return;
    this.lastLineAtMs = s, this.sink({
      frame_kib: ie(e.bytes / 1024, us),
      read_count: ie(e.reads, Ir),
      receive_ms: ie(s - e.startedAtMs, he),
      ...n !== null && {
        before_frame_gap_ms: ie(n.gapMs, he),
        before_frame_loop_lag_ms: ie(n.loopLagMs, he),
        before_frame_cpu_ms: ie(n.cpuMs, he)
      },
      max_gap_ms: ie(r.gapMs, he),
      max_gap_offset_kib: ie(e.maxGapOffsetBytes / 1024, us),
      ...r.loopLagMs !== null && {
        max_gap_loop_lag_ms: ie(r.loopLagMs, he)
      },
      max_gap_cpu_ms: ie(r.cpuMs, he)
    })
  }
  loopLagAt(e) {
    if (this.nextTickDueMs !== 1 / 0) return Math.max(this.lastTickLagMs, e - this.nextTickDueMs, 0);
    return e - this.lastTickAtMs <= ye ? this.lastTickLagMs : null
  }
  armTick(e) {
    this.lastTickLagMs = 0, this.lastTickAtMs = e, this.nextTickDueMs = e + ye, this.cancelTick = this.clock.setTimer(this.onTick, ye)
  }
  onTick = () => {
    try {
      this.cancelTick = null;
      let e = this.watch;
      if (e === null) return;
      let s = this.clock.nowMs();
      this.lastTickLagMs = Math.max(s - this.nextTickDueMs, 0), this.lastTickAtMs = s;
      let n = e.reads === 0 ? ds : Cr;
      if (s - e.lastReadAtMs >= n) {
        this.nextTickDueMs = 1 / 0;
        return
      }
      this.nextTickDueMs = s + ye, this.cancelTick = this.clock.setTimer(this.onTick, ye)
    } catch (e) {
      this.disable(e)
    }
  };
  disable(e) {
    this.disabled = !0, this.stop(), a(e)
  }
}

function et(e, s, {
  reads: n,
  bytes: r,
  before: h
}) {
  return {
    reads: n,
    bytes: r,
    startedAtMs: e,
    lastReadAtMs: e,
    lastCpuMicros: s,
    before: h,
    maxGap: {
      gapMs: 0,
      loopLagMs: 0,
      cpuMs: 0
    },
    maxGapOffsetBytes: 0
  }
}

function cs(e) {
  return e.event === "client_event"
}

function ie(e, s) {
  return Number.isFinite(e) ? Math.min(Math.max(Math.round(e), 0), s) : 0
}

function Fr(e) {
  V("warn", "cli_sse_frame_stall", e)
}

function xr() {
  let e = process.cpuUsage();
  return e.user + e.system
}

function Wr(e, s) {
  let n = setTimeout(e, s);
  return n.unref(), () => clearTimeout(n)
}
var Ur = {
  nowMs: () => performance.now(),
  cpuMicros: xr,
  setTimer: Wr
};
var Lr = new Map([
  ["", "none"],
  ["text/event-stream", "event-stream"],
  ["text/html", "html"],
  ["application/xhtml+xml", "html"],
  ["application/json", "json"],
  ["text/plain", "text"],
  ["application/xml", "xml"],
  ["text/xml", "xml"]
]);

function hs(e) {
  let s = tt(tt(e ?? "", ";"), ",").trim().toLowerCase();
  return Lr.get(s) ?? (s.endsWith("+json") ? "json" : "other")
}
var har = "worker_capabilities",
  ps = "attestation-floor/1",
  Emi = "2",
  fs = "worker-socket/2",
  Tmi = "worker-socket-pad/1",
  gar = "x-ccr-attestation-policy",
  Br = new Map([
    ["verified", "VERIFIED"],
    ["verified_keyless_device", "VERIFIED_KEYLESS_DEVICE"],
    ["verified_by_gate", "VERIFIED_BY_GATE"]
  ]),
  Hr = new Map([
    ["server_authored", "SERVER_AUTHORED"],
    ["server_replayed", "SERVER_REPLAYED"],
    ["absent", "ABSENT"],
    ["invalid", "INVALID"],
    ["unchecked", "UNCHECKED"],
    ["unspecified", "UNSPECIFIED"]
  ]);

function _s(e) {
  if (e === null) return {
    policy: void 0,
    fault: void 0
  };
  let s = new Map;
  for (let v of tt(e, ", ").split(";")) {
    let y = v.trim(),
      O = y.indexOf("="),
      M = O === -1 ? "" : y.slice(0, O);
    if (M !== "" && !s.has(M)) s.set(M, y.slice(O + 1))
  }
  let n = s.get("mode");
  if (s.get("v") !== "1") return {
    policy: void 0,
    fault: "policy_unparseable"
  };
  if (n === "off") return {
    policy: void 0,
    fault: void 0
  };
  if (n !== "observe" && n !== "enforce") return {
    policy: void 0,
    fault: "policy_unparseable"
  };
  let r = Br.get(s.get("level") ?? ""),
    h = new Set,
    w = !1;
  for (let v of (s.get("accept") ?? "").split(",")) {
    let y = Hr.get(v);
    if (y !== void 0) h.add(y);
    else if (v !== "") w = !0
  }
  return {
    policy: {
      enforce: n === "enforce",
      acceptLevel: r ?? "VERIFIED_BY_GATE",
      acceptStatuses: h
    },
    fault: r === void 0 || w ? "policy_partial" : void 0
  }
}
var Nr = 1000,
  Dr = 30000,
  $r = 60000,
  it = 15,
  zr = 60,
  jr = 30000,
  ms = 20,
  tJr = new DOMException("no frame within the liveness timeout, or the process slept", "AbortError"),
  D7o = new DOMException("the connection is renewed", "AbortError"),
  Gr = 15000,
  vs = 3,
  Kr = "keepalive_tolerance_seconds",
  L7o = "x-ccr-sse-keepalive-interval-seconds",
  gs = 25,
  Vr = "long_poll_timeout_seconds",
  Yr = "x-ccr-sse-long-poll-seconds",
  Xr = 60,
  nt = 2,
  ws = 2000,
  Qr = new Set([401, 403, 404]),
  Jr = /\btext\/event-stream\b/i,
  Se = 10,
  Zr = 500,
  ei = 8000;

function ti() {
  return !0
}
var N7o = new Set(["workflow_launch", "queued_notification", "session_notice"]),
  si = p(() => u({
    event_type: o()
  })),
  ni = "heartbeat_probe",
  ri = "owner_present",
  ii = "checkpoint_request",
  oi = new Set(["event_id"]),
  ai = /^"([\w-]{1,128})"$/;
class yar {
  url;
  state = "idle";
  onData;
  onUserFrameReceived;
  onCloseCallback;
  onEventCallback;
  onDeliveredCallback;
  eventFilter;
  workerAttestationPolicySink;
  connectionPolicyReading;
  connectionSessionWriters;
  frameSessionWriters = new WeakMap;
  onEventVetoed;
  mostMembersInAFrame;
  lighterFrame;
  streamOpener;
  leavesPoolAfterServerError;
  onFrameRefused;
  onHeartbeatProbe;
  onOwnerPresent;
  onCheckpointRequest;
  onDeviceStatusPublished;
  onReconnected;
  onDiagnostic;
  headers;
  sessionId;
  refreshHeaders;
  getAuthHeaders;
  connectTimeoutMs;
  abortController = null;
  lastSequenceNum = 0;
  seenSequenceNums = new Set;
  reconnectAttempts = 0;
  hasEverConnected = !1;
  reconnectStartTime = null;
  reconnectTimer = null;
  connectErrorsSeen = new Set;
  livenessTimer = null;
  lastLivenessEvidenceAtMs = 0;
  lastLivenessEvidenceMonotonicMs = 0;
  lastFrameReadAtMs = 0;
  stopListeningForSleep;
  frameWaitTimer = null;
  sseKeepaliveMaxIntervalSeconds;
  requireStreamEvidence;
  onUnexpectedContentType;
  advertisedMaxIntervalSeconds;
  echoedIntervalSeconds;
  longPollFallback;
  longPollMode;
  silentConnectionStreak = 0;
  bodyBytesThisConnection = 0;
  askedLongPollThisConnection = !1;
  longPollEchoedSeconds;
  sequenceNumAtOpen = 0;
  requestStartedAtMs = 0;
  quietRedial = !1;
  redialsOnNewSocket = !1;
  nonOriginPolicy;
  nonOriginStreak = null;
  postUrl;
  serviceClockAtConnect;
  serviceClockAtFirstConnect;
  hasConnectedBefore = !1;
  held = null;
  isHeldForRenewal = !1;
  statementRenewalGate;
  endedForRenewal = new WeakSet;
  constructor(e, s = {}, {
    sessionId: n,
    refreshHeaders: r,
    initialSequenceNum: h,
    getAuthHeaders: w,
    connectTimeoutMs: v,
    deferDelivery: y,
    sseKeepaliveMaxIntervalSeconds: O,
    longPollFallback: M,
    initialLongPollMode: P,
    requireStreamEvidence: F,
    onUnexpectedContentType: S,
    mostMembersInAFrame: B,
    lighterFrame: H,
    streamOpener: N,
    leavesPoolAfterServerError: q,
    onProcessSlept: X
  } = {}) {
    this.url = e;
    if (this.headers = s, this.sessionId = n, this.refreshHeaders = r, this.getAuthHeaders = w ?? oG, this.connectTimeoutMs = v ?? eJr, this.postUrl = li(e), this.sseKeepaliveMaxIntervalSeconds = O, this.longPollFallback = M, this.longPollMode = P ?? !1, this.requireStreamEvidence = F ?? !1, this.onUnexpectedContentType = S, this.mostMembersInAFrame = B, this.lighterFrame = H, this.streamOpener = N, this.leavesPoolAfterServerError = q, this.stopListeningForSleep = X?.(this.onSleepNotice), h !== void 0 && h > 0) this.lastSequenceNum = h;
    if (y) this.held = {
      frames: [],
      close: null
    };
    t(`SSETransport: SSE URL = ${e.href}`), t(`SSETransport: POST URL = ${this.postUrl}`), V("info", "cli_sse_transport_initialized")
  }
  serviceNow() {
    let e = this.serviceClockAtConnect;
    if (e === void 0) return;
    let s = performance.now() - e.monotonicMs;
    return Math.abs(Date.now() - e.wallMs - s) > $r ? void 0 : e.serviceMs + s
  }
  serviceNowAtMost() {
    let e = this.serviceClockAtConnect;
    if (e === void 0) return;
    return e.serviceMs + Math.max(performance.now() - e.monotonicMs, Date.now() - e.wallMs)
  }
  firstConnectedServiceMs() {
    return this.serviceClockAtFirstConnect
  }
  getLastSequenceNum() {
    return this.lastSequenceNum
  }
  isLongPolling() {
    return this.longPollMode || this.askedLongPollThisConnection
  }
  connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") return t(`SSETransport: Cannot connect, current state is ${this.state}`, {
      level: "error"
    }), V("error", "cli_sse_connect_failed"), Promise.resolve();
    return this.state = "reconnecting", this.openStream(void 0)
  }
  async openStream(e) {
    let s = Date.now();
    this.requestStartedAtMs = performance.now();
    let n = this.quietRedial;
    this.quietRedial = !1;
    let r = this.redialsOnNewSocket,
      h = ys(Math.floor(Number(this.sseKeepaliveMaxIntervalSeconds?.())));
    this.advertisedMaxIntervalSeconds = h > it ? h : void 0, this.echoedIntervalSeconds = void 0, this.bodyBytesThisConnection = 0, this.longPollEchoedSeconds = void 0, this.sequenceNumAtOpen = this.lastSequenceNum;
    let w = i.CLAUDE_CODE_CCR_LONG_POLL;
    this.askedLongPollThisConnection = w === !0 || w !== !1 && this.longPollMode && this.longPollFallbackAllows();
    let v = new URL(this.url.href);
    if (this.lastSequenceNum > 0) v.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    if (this.advertisedMaxIntervalSeconds !== void 0) v.searchParams.set(Kr, String(vs * this.advertisedMaxIntervalSeconds));
    if (this.askedLongPollThisConnection) v.searchParams.set(Vr, String(gs));
    let y = [...this.workerAttestationPolicySink === void 0 ? [] : [ps], ...this.streamOpener === void 0 ? [] : [fs]];
    if (y.length > 0) v.searchParams.set(har, y.join(","));
    let O = this.getAuthHeaders(),
      M = {
        ...this.headers,
        ...O,
        Accept: "text/event-stream",
        "anthropic-version": "2023-06-01",
        "anthropic-client-platform": cb(),
        "User-Agent": ui()
      };
    if (rt(M, O), this.lastSequenceNum > 0) M["Last-Event-ID"] = String(this.lastSequenceNum);
    t(`SSETransport: Opening ${v.href}`), V("info", "cli_sse_connect_opening");
    let P = new AbortController;
    this.abortController = P;
    let F = !1,
      S = Math.min(typeof this.connectTimeoutMs === "function" ? this.connectTimeoutMs() : this.connectTimeoutMs, Rc),
      B = S > 0 ? setTimeout(() => {
        F = !0, P.abort()
      }, S) : void 0;
    try {
      let H = () => fetch(v.href, {
          headers: M,
          signal: P.signal,
          ...ba({
            url: v.href
          }),
          ...(r || this.leavesPoolAfterServerError?.() && KGn()) && {
            keepalive: !1
          }
        }),
        N;
      try {
        N = await (this.streamOpener ? this.streamOpener.open({
          url: v.href,
          headers: M,
          signal: P.signal,
          openSse: H
        }) : H())
      } catch (W) {
        if (P.signal.aborted && !F) return;
        throw W
      } finally {
        clearTimeout(B), e?.()
      }
      if (F) throw Error("the connect deadline fired as the response arrived");
      if (!N.ok) {
        if (D1t(N.status) && this.leavesPoolAfterServerError?.()) lSs(N.status);
        let W = N.status === 403 ? nRe((le) => N.headers.get(le)) : void 0;
        if (await n6(N, {
            timeoutMs: zEn
          }), P.signal.aborted) return;
        let Z = (this.nonOriginPolicy?.now ?? Date.now)(),
          G = this.advanceNonOriginStreak(W, Z),
          ae = G !== null && this.nonOriginPolicy !== void 0 && Z - G.startedAtMs < this.nonOriginPolicy.windowMs,
          se = Qr.has(N.status) && !ae;
        if (t(`SSETransport: HTTP ${N.status}${se?" (permanent)":""}${W?` source=${W}`:""}${ae?` (not origin \u2014 retrying; attempt ${G?.attempts})`:""}`, {
            level: "error"
          }), V("error", "cli_sse_connect_http_error", {
            status: N.status,
            ...W !== void 0 && {
              source: W
            },
            ...G !== null && {
              retried: ae
            }
          }), this.connectErrorsSeen.add(`http_${N.status}`), this.diagConnectFailure(`HTTP ${N.status}${se?" (permanent)":""}`, s), se) {
          this.nonOriginStreak = null, this.state = "closed", this.emitClose(N.status, W === void 0 ? void 0 : G === null ? {
            rejectSource: W
          } : {
            rejectSource: G.source,
            streak: {
              source: G.source,
              attempts: G.attempts,
              streakMs: Z - G.startedAtMs
            }
          });
          return
        }
        if (ae) try {
          this.nonOriginPolicy?.onRefused?.()
        } catch (le) {
          t(`SSETransport: onRefused handler threw: ${d(le)}`, {
            level: "error"
          })
        }
        this.handleConnectionError();
        return
      }
      if (!N.body) {
        t("SSETransport: No response body"), this.connectErrorsSeen.add("no_response_body"), this.diagConnectFailure("no response body", s), this.handleConnectionError();
        return
      }
      if (this.requireStreamEvidence) {
        let W = hs(N.headers.get("content-type"));
        if (W !== "event-stream") {
          let Z = N.headers.has(WEn) || N.headers.has(gar);
          if (!Z) {
            if (await n6(N, {
                timeoutMs: zEn
              }), P.signal.aborted) return
          }
          let G = `HTTP ${N.status}, content_type=${W}, ${Z?"with":"without"} a session service header`;
          if (t(`SSETransport: ${G}: ${Z?"taken as the stream":"a failed connect"}`, {
              level: Z ? "warn" : "error"
            }), V(Z ? "warn" : "error", "cli_sse_connect_unexpected_content_type", {
              status: N.status,
              content_type: W,
              accepted: Z
            }), this.onUnexpectedContentType?.({
              status: N.status,
              contentType: W,
              accepted: Z
            }), !Z) {
            this.connectErrorsSeen.add("no_stream_evidence"), this.diagConnectFailure(`${G}: a proxy or gateway may have answered in place of the server`, s), this.handleConnectionError();
            return
          }
        }
      }
      let q = Date.now() - s,
        X = Date.parse(N.headers.get("date") ?? "");
      if (!Number.isNaN(X)) this.serviceClockAtConnect = {
        serviceMs: X,
        wallMs: Date.now(),
        monotonicMs: performance.now()
      };
      if (!this.hasConnectedBefore) this.hasConnectedBefore = !0, this.serviceClockAtFirstConnect = Number.isNaN(X) ? void 0 : X;
      if (this.advertisedMaxIntervalSeconds !== void 0) {
        let W = Number(N.headers.get(L7o));
        if (Number.isInteger(W) && W > 0) this.echoedIntervalSeconds = ys(W)
      }
      let z = Number(N.headers.get(Yr));
      this.longPollEchoedSeconds = this.askedLongPollThisConnection && Number.isInteger(z) && z > 0 ? Math.min(z, Xr) : void 0;
      let Y = this.workerAttestationPolicySink === void 0 ? void 0 : _s(N.headers.get(gar));
      this.connectionPolicyReading = Y;
      let R = N.headers.get(WEn),
        A = xmi(R),
        x = A === void 0 ? void 0 : {
          writers: A,
          statedAtMs: Date.now()
        };
      if (this.connectionSessionWriters = x, Y !== void 0) {
        if (this.workerAttestationPolicySink?.(Y), P.signal.aborted) return
      }
      let Q = this.advertisedMaxIntervalSeconds === void 0 ? "" : ` keepalive_interval=${this.keepaliveIntervalMs()/1000}s${this.echoedIntervalSeconds===void 0?" (no echo)":""}`,
        K = !this.askedLongPollThisConnection ? "" : this.longPollEchoedSeconds === void 0 ? ` long_poll=${gs}s (no echo)` : ` long_poll=${this.longPollEchoedSeconds}s`;
      if (t("SSETransport: Connected" + Q + K), V("info", "cli_sse_connect_connected", {
          duration_ms: q,
          ...this.keepaliveDiagnosticFields(),
          ...this.askedLongPollThisConnection && {
            long_poll: this.longPollEchoedSeconds === void 0 ? "no_echo" : "echoed"
          },
          session_writers: A ?? (R === null ? "header_absent" : "header_unreadable"),
          ...Y !== void 0 && {
            attestation_policy: Y.policy === void 0 ? "none" : Y.policy.enforce ? "enforce" : "observe",
            ...Y.fault !== void 0 && {
              attestation_policy_fault: Y.fault
            }
          }
        }), !this.hasEverConnected && this.reconnectAttempts === 0) qr("sse_connect_ms", q, s - performance.timeOrigin);
      if (this.reconnectAttempts > 0) {
        let W = this.reconnectStartTime ? Math.round((Date.now() - this.reconnectStartTime) / 1000) : 0;
        this.onDiagnostic?.(`SSE reconnected after ${this.reconnectAttempts} attempt(s), ${W}s downtime` + (this.connectErrorsSeen.size > 0 ? `, errors=[${[...this.connectErrorsSeen].join(",")}]` : ""), "warn", "sse_recovered")
      } else if (!n) this.onDiagnostic?.(`SSE connected in ${q}ms`, "info", "sse_connected");
      this.connectErrorsSeen.clear();
      let j = this.hasEverConnected;
      if (this.hasEverConnected = !0, this.state = "connected", this.redialsOnNewSocket = !1, this.streamOpener?.restartsBackoffAtOpen() ?? !0) this.reconnectAttempts = 0;
      this.reconnectStartTime = null, this.resetLivenessTimer();
      let te = Jr.test(N.headers.get("content-type") ?? "");
      if (j && !n) try {
        this.onReconnected?.()
      } catch (W) {
        t(`SSETransport: onReconnected handler threw: ${d(W)}`, {
          level: "error"
        }), V("error", "cli_sse_reconnected_handler_threw")
      }
      if (this.isHeldForRenewal) {
        if (this.deliverHeldForRenewal(x), P.signal.aborted) return
      }
      await this.readStream(N.body, te, x)
    } catch (H) {
      if (F) {
        if (t(`SSETransport: No response within ${S}ms, reconnecting`, {
            level: "error"
          }), V("error", "cli_sse_connect_timeout", {
            timeout_ms: S
          }), !this.streamOpener && this.leavesPoolAfterServerError?.()) Cpo();
        this.connectErrorsSeen.add("connect_timeout"), this.diagConnectFailure(`no response in ${S/1000}s`, s), this.handleConnectionError();
        return
      }
      t(`SSETransport: Connection error: ${d(H)}`, {
        level: "error"
      }), V("error", "cli_sse_connect_error"), this.connectErrorsSeen.add("fetch_failed"), this.diagConnectFailure(d(H), s), this.handleConnectionError()
    }
  }
  advanceNonOriginStreak(e, s) {
    let n = this.nonOriginPolicy;
    if (n === void 0 || e === void 0) return null;
    if (!PQe(e)) return this.nonOriginStreak = null, null;
    let r = this.nonOriginStreak;
    if (r === null || s - r.lastAtMs > n.maxGapMs) r = {
      source: e,
      startedAtMs: s,
      lastAtMs: s,
      attempts: 0
    }, this.nonOriginStreak = r;
    return r.attempts++, r.lastAtMs = s, r
  }
  settleNonOriginStreakRecovered() {
    let e = this.nonOriginStreak;
    if (e === null) return;
    this.nonOriginStreak = null;
    let s = {
      source: e.source,
      attempts: e.attempts,
      streakMs: (this.nonOriginPolicy?.now ?? Date.now)() - e.startedAtMs
    };
    V("info", "cli_sse_nonorigin_403_recovered", {
      source: s.source,
      attempts: s.attempts,
      streak_ms: s.streakMs
    });
    try {
      this.nonOriginPolicy?.onRecovered?.(s)
    } catch (n) {
      t(`SSETransport: onRecovered handler threw: ${d(n)}`, {
        level: "error"
      })
    }
  }
  diagConnectFailure(e, s) {
    if (!this.onDiagnostic) return;
    let n = this.reconnectAttempts + 1;
    if (n > 3 && n % 10 !== 0) return;
    let r = Date.now() - s,
      h = this.reconnectStartTime ? `, ${Math.round((Date.now()-this.reconnectStartTime)/1000)}s reconnecting` : "",
      w = this.connectErrorsSeen.size > 1 ? `, errors=[${[...this.connectErrorsSeen].join(",")}]` : "";
    this.onDiagnostic(`SSE connect failed (${e}) attempt=${n} took=${r}ms${h}${w}`, "warn", "sse_connect_failed")
  }
  async readStream(e, s, n) {
    let r = e.getReader(),
      h = new Ult,
      w = this.abortController,
      v = () => w !== null && this.endedForRenewal.has(w),
      y = s && i.CLAUDE_CODE_DIAGNOSTICS_FILE ? new st(h) : null,
      O = !1;
    try {
      while (!0) {
        let {
          done: M,
          value: P
        } = await r.read();
        if (M) break;
        if (P.byteLength > 0) this.bodyBytesThisConnection += P.byteLength, this.silentConnectionStreak = 0;
        let F = h.push(P);
        y?.observe(P.byteLength, F);
        for (let S of F) {
          if (!v()) this.resetLivenessTimer(), this.lastFrameReadAtMs = this.lastLivenessEvidenceAtMs;
          if (this.nonOriginStreak !== null && s) this.settleNonOriginStreakRecovered();
          if (S.id && S.event !== "ephemeral_event") {
            let B = parseInt(S.id, 10);
            if (!isNaN(B)) {
              if (this.seenSequenceNums.has(B)) t(`SSETransport: DUPLICATE frame seq=${B} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`, {
                level: "warn"
              }), V("warn", "cli_sse_duplicate_sequence");
              else if (this.seenSequenceNums.add(B), this.seenSequenceNums.size > 1000) {
                let H = this.lastSequenceNum - 200;
                for (let N of this.seenSequenceNums)
                  if (N < H) this.seenSequenceNums.delete(N)
              }
              if (B > this.lastSequenceNum) this.lastSequenceNum = B
            }
          }
          if (S.event && S.data) this.handleSSEFrame(S.event, S.data, n);
          else if (S.data) t("SSETransport: Frame has data: but no event: field \u2014 dropped", {
            level: "warn"
          }), V("warn", "cli_sse_frame_missing_event_field")
        }
      }
    } catch (M) {
      if (this.abortController?.signal.aborted || v()) return;
      O = !0, t(`SSETransport: Stream read error: ${d(M)}`, {
        level: "error"
      }), V("error", "cli_sse_stream_read_error")
    } finally {
      y?.stop(), r.releaseLock()
    }
    if (this.state !== "closing" && this.state !== "closed" && !v()) {
      if (this.state === "connected") {
        let M = performance.now() - this.requestStartedAtMs;
        if (this.bodyBytesThisConnection === 0 && M >= ws) this.countSilentConnection();
        if (this.askedLongPollThisConnection && !O && (this.lastSequenceNum > this.sequenceNumAtOpen || M >= ws)) {
          this.reopenAtOnce("long_poll"), t("SSETransport: Long poll completed, reopening");
          return
        }
      }
      if (t("SSETransport: Stream ended, reconnecting"), this.state === "connected") this.connectErrorsSeen.add("stream_ended"), this.onDiagnostic?.("SSE stream ended by server, reconnecting", "warn", "sse_stream_ended");
      this.handleConnectionError()
    }
  }
  handleSSEFrame(e, s, n, r = Date.now(), h = performance.now()) {
    if (this.mostMembersInAFrame !== void 0 && Yoe(s, this.mostMembersInAFrame) === void 0) {
      let y = this.lighterFrame?.(s);
      if (y !== void 0 && Yoe(y, this.mostMembersInAFrame) !== void 0) {
        this.handleSSEFrame(e, y, n, r, h);
        return
      }
      this.onFrameRefused?.(ai.exec(S_e(s, oi)?.get("event_id") ?? "")?.[1]);
      return
    }
    if (e === "ephemeral_event") {
      this.handleEphemeralFrame(s);
      return
    }
    if (this.held !== null) {
      this.held.frames.push({
        eventType: e,
        data: s,
        policyReading: this.connectionPolicyReading,
        sessionWriters: n,
        receivedWallMs: r,
        receivedAtMs: h
      });
      return
    }
    if (e !== "client_event") {
      t(`SSETransport: Unexpected SSE event type '${e}' on worker stream`, {
        level: "warn"
      }), V("warn", "cli_sse_unexpected_event_type", {
        event_type: e
      });
      return
    }
    let w;
    try {
      w = ee(s)
    } catch (y) {
      t(`SSETransport: Failed to parse client_event data: ${d(y)}`, {
        level: "error"
      });
      return
    }
    let v = w.payload;
    if (v && typeof v === "object" && "type" in v) {
      let y = this.sessionId ? ` session=${this.sessionId}` : "",
        O = w.device_attestation_status ? ` attestation=${w.device_attestation_status}` : "";
      if (t(`SSETransport: Event seq=${w.sequence_num} event_id=${w.event_id} event_type=${w.event_type} payload_type=${String(v.type)}${O}${y}`), V("info", "cli_sse_message_received"), n !== void 0 && this.state === "connected" && this.statementRenewalGate?.(w, n) === !0) {
        this.held = {
          frames: [{
            eventType: e,
            data: s,
            policyReading: this.connectionPolicyReading,
            sessionWriters: n,
            receivedWallMs: r,
            receivedAtMs: h
          }],
          close: null
        }, this.isHeldForRenewal = !0, this.renewConnection();
        return
      }
      if (n !== void 0) this.frameSessionWriters.set(w, n);
      let M = this.eventFilter?.(w);
      if (M) V("warn", "cli_sse_event_filtered", M === !0 ? void 0 : {
        decision: M
      });
      else if (typeof v.type === "string" && N7o.has(v.type) && w.event_type !== v.type) V("warn", "cli_sse_server_only_event_type_mismatch", {
        event_type: w.event_type,
        payload_type: v.type
      }), this.onEventVetoed?.(w);
      else if (v.type === "control_request" && w.source === "worker") V("warn", "cli_sse_worker_control_request_dropped");
      else {
        if (this.onDeliveredCallback?.(w, n, h), v.type === "user" && typeof v.uuid === "string") this.onUserFrameReceived?.(v.uuid, r, w.processing_at, h);
        this.onData?.(_(w.payload) + `
`)
      }
    } else t(`SSETransport: Ignoring client_event with no type in payload: event_id=${w.event_id}`);
    this.onEventCallback?.(w)
  }
  emitClose(e, s) {
    if (this.held !== null) {
      if (this.held.close = {
          code: e,
          detail: s
        }, this.isHeldForRenewal) this.isHeldForRenewal = !1, this.startDelivery();
      return
    }
    this.onCloseCallback?.(e, s)
  }
  renewConnection() {
    if (this.state !== "connected") return;
    t("SSETransport: Renewing the connection"), V("info", "cli_sse_renew_connection"), this.reopenAtOnce("renewal")
  }
  reopenAtOnce(e) {
    if (this.refreshHeaders) {
      let s = this.refreshHeaders();
      Object.assign(this.headers, s), rt(this.headers, s)
    }
    if (this.clearLivenessTimer(), e !== "long_poll" && this.abortController !== null) this.endedForRenewal.add(this.abortController), this.abortController.abort(e === "renewal" ? D7o : tJr);
    if (this.abortController = null, this.streamOpener?.restartsBackoffAtEnd()) this.reconnectAttempts = 0;
    this.state = "reconnecting", this.quietRedial = e === "long_poll", this.redialsOnNewSocket = e === "sleep", this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect()
    }, 0)
  }
  setStatementRenewalGate(e) {
    this.statementRenewalGate = e
  }
  deliverHeldForRenewal(e) {
    this.isHeldForRenewal = !1;
    for (let s of this.held?.frames ?? []) s.sessionWriters = e;
    this.startDelivery()
  }
  startDelivery() {
    let e = this.held;
    if (e === null) return;
    this.held = null;
    let s;
    for (let n of e.frames) {
      if (n.policyReading !== void 0 && n.policyReading !== s) {
        if (s = n.policyReading, !this.handSinkPolicyReading(s)) return
      }
      this.handleSSEFrame(n.eventType, n.data, n.sessionWriters, n.receivedWallMs, n.receivedAtMs)
    }
    if (this.connectionPolicyReading !== void 0 && this.connectionPolicyReading !== s && !this.handSinkPolicyReading(this.connectionPolicyReading)) return;
    if (e.close !== null) this.onCloseCallback?.(e.close.code, e.close.detail)
  }
  handSinkPolicyReading(e) {
    return this.workerAttestationPolicySink?.(e), this.state !== "closing"
  }
  handleEphemeralFrame(e) {
    let s;
    try {
      s = ee(e)
    } catch (r) {
      t(`SSETransport: Failed to parse ephemeral_event data: ${d(r)}`, {
        level: "error"
      });
      return
    }
    let n = si().safeParse(s);
    if (n.success && n.data.event_type === ri && this.onOwnerPresent !== void 0) {
      V("info", "cli_sse_owner_present_received");
      try {
        this.onOwnerPresent()
      } catch (r) {
        t(`SSETransport: onOwnerPresent handler threw: ${d(r)}`, {
          level: "error"
        })
      }
      return
    }
    if (n.success && n.data.event_type === ii && this.onCheckpointRequest !== void 0) {
      V("info", "cli_sse_checkpoint_request_received");
      try {
        this.onCheckpointRequest()
      } catch (r) {
        a(r), V("error", "cli_sse_checkpoint_request_handler_threw")
      }
      return
    }
    if (!n.success || n.data.event_type !== ni) {
      V("warn", "cli_sse_unexpected_ephemeral_type", {
        event_type: n.success ? n.data.event_type : "unparseable"
      });
      return
    }
    V("info", "cli_sse_heartbeat_probe_received");
    try {
      this.onHeartbeatProbe?.()
    } catch (r) {
      t(`SSETransport: onHeartbeatProbe handler threw: ${d(r)}`, {
        level: "error"
      }), V("error", "cli_sse_heartbeat_probe_handler_threw")
    }
  }
  handleConnectionError() {
    if (this.clearLivenessTimer(), this.state === "closing" || this.state === "closed") return;
    this.abortController?.abort(), this.abortController = null;
    let e = Date.now();
    if (!this.reconnectStartTime) this.reconnectStartTime = e;
    let s = e - this.reconnectStartTime;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    if (this.refreshHeaders) {
      let r = this.refreshHeaders();
      Object.assign(this.headers, r), rt(this.headers, r), t("SSETransport: Refreshed headers for reconnect")
    }
    if (this.state = "reconnecting", this.streamOpener?.restartsBackoffAtEnd()) this.reconnectAttempts = 0;
    this.reconnectAttempts++;
    let n = this.streamOpener?.reconnectsAtOnce() ? 0 : Cy({
      attempt: this.reconnectAttempts,
      baseMs: Nr,
      capMs: Dr,
      jitter: {
        kind: "symmetric",
        ratio: 0.25
      }
    });
    t(`SSETransport: Reconnecting in ${Math.round(n)}ms (attempt ${this.reconnectAttempts}, ${Math.round(s/1000)}s elapsed)`), V("error", "cli_sse_reconnect_attempt", {
      reconnectAttempts: this.reconnectAttempts
    }), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect()
    }, n)
  }
  reopenAfterSleep(e, s) {
    if (this.state !== "connected") return !1;
    if (this.frameWaitTimer) clearTimeout(this.frameWaitTimer), this.frameWaitTimer = null;
    try {
      this.reopenAtOnce("sleep")
    } catch (n) {
      return t(`SSETransport: Could not reconnect at once after a pause or sleep, so leaving it to the liveness timeout: ${d(n)}`, {
        level: "error"
      }), !1
    }
    return t(`SSETransport: Reconnecting now with no backoff: the process was probably paused or asleep (the ${s==="liveness_timer"?"liveness timer":"stall detector"} ran at least ${Math.round(e/1000)}s late)`), V("warn", "cli_sse_reopened_after_sleep", {
      late_ms: Math.round(e),
      seen_by: s
    }), this.onDiagnostic?.(`SSE: reconnecting at once: the process was probably paused or asleep (a check ran at least ${Math.round(e/1000)}s late)`, "warn", "sse_reopened_after_sleep"), !0
  }
  onSleepNotice = (e) => {
    if (this.state !== "connected" || this.frameWaitTimer !== null) return;
    if (this.silentForMs() < e) {
      t(`SSETransport: Keeping the stream after a pause or stall of at least ${Math.round(e/1000)}s: it has connected or delivered a frame since then`);
      return
    }
    this.frameWaitTimer = setTimeout(this.onFrameWaitEnd, ms, this.lastLivenessEvidenceMonotonicMs, e)
  };
  onFrameWaitEnd = (e, s) => {
    if (this.frameWaitTimer = null, this.lastLivenessEvidenceMonotonicMs !== e) {
      t(`SSETransport: Keeping the stream after a pause or stall of at least ${Math.round(s/1000)}s: it connected or delivered a frame within ${ms} ms of the notice`);
      return
    }
    this.reopenAfterSleep(s, "stall_detector")
  };
  silentForMs() {
    return Math.max(Date.now() - this.lastLivenessEvidenceAtMs, performance.now() - this.lastLivenessEvidenceMonotonicMs)
  }
  onLivenessTimeout = () => {
    this.livenessTimer = null;
    let e = this.silentForMs() - this.livenessTimeoutMs();
    if ((e > Sar || this.frameWaitTimer !== null) && this.reopenAfterSleep(e, "liveness_timer")) return;
    t("SSETransport: Liveness timeout, reconnecting", {
      level: "error"
    }), V("error", "cli_sse_liveness_timeout", this.keepaliveDiagnosticFields()), this.connectErrorsSeen.add("liveness_timeout"), this.onDiagnostic?.(`SSE liveness timeout \u2014 no frame in ${this.livenessTimeoutMs()/1000}s, reconnecting`, "warn", "sse_liveness_timeout");
    let s = this.state === "connected" && this.bodyBytesThisConnection === 0;
    if (this.abortController?.abort(tJr), this.handleConnectionError(), s) this.countSilentConnection()
  };
  countSilentConnection() {
    if (this.silentConnectionStreak++, this.silentConnectionStreak >= nt && !this.longPollMode && i.CLAUDE_CODE_CCR_LONG_POLL !== !1 && this.longPollFallbackAllows()) this.longPollMode = !0, t(`SSETransport: No body bytes on ${nt} connections in a row; asking for long-poll responses from here on`, {
      level: "warn"
    }), V("warn", "cli_sse_long_poll_mode"), this.onDiagnostic?.(`SSE stream delivered no bytes on ${nt} consecutive connections; asking the server for long-poll responses (a proxy may be buffering the response body)`, "warn", "sse_long_poll_mode")
  }
  longPollFallbackAllows() {
    try {
      return this.longPollFallback?.() === !0
    } catch (e) {
      return V("error", "cli_sse_long_poll_fallback_threw"), a(e), !1
    }
  }
  resetLivenessTimer() {
    this.lastLivenessEvidenceAtMs = Date.now(), this.lastLivenessEvidenceMonotonicMs = performance.now(), this.clearLivenessTimer(), this.livenessTimer = setTimeout(this.onLivenessTimeout, this.livenessTimeoutMs())
  }
  keepaliveIntervalMs() {
    return (this.echoedIntervalSeconds ?? this.advertisedMaxIntervalSeconds ?? it) * 1000
  }
  livenessTimeoutMs() {
    return this.longestExpectedSilenceMs() + jr
  }
  longestExpectedSilenceMs() {
    return Math.max(this.keepaliveIntervalMs(), (this.longPollEchoedSeconds ?? 0) * 1000)
  }
  keepaliveDiagnosticFields() {
    return this.advertisedMaxIntervalSeconds === void 0 ? {} : {
      keepalive_tolerance_s: vs * this.advertisedMaxIntervalSeconds,
      keepalive_interval_s: this.keepaliveIntervalMs() / 1000,
      liveness_timeout_s: this.livenessTimeoutMs() / 1000,
      keepalive_interval_echoed: this.echoedIntervalSeconds !== void 0
    }
  }
  clearLivenessTimer() {
    if (this.livenessTimer) clearTimeout(this.livenessTimer), this.livenessTimer = null
  }
  async write(e) {
    let s = this.getAuthHeaders();
    if (Object.keys(s).length === 0) {
      t("SSETransport: No session token available for POST"), V("warn", "cli_sse_post_no_token");
      return
    }
    let n = {
      ...s,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": cb(),
      "User-Agent": ui()
    };
    t(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
    for (let r = 1; r <= Se; r++) {
      try {
        let h = await Wt.post(this.postUrl, e, {
          headers: n,
          validateStatus: ti
        });
        if (h.status === 200 || h.status === 201) {
          t(`SSETransport: POST success type=${e.type}`);
          return
        }
        if (t(`SSETransport: POST ${h.status} body=${_(h.data).slice(0,200)}`), h.status >= 400 && h.status < 500 && h.status !== 429) {
          t(`SSETransport: POST returned ${h.status} (client error), not retrying`), V("warn", "cli_sse_post_client_error", {
            status: h.status
          });
          return
        }
        t(`SSETransport: POST returned ${h.status}, attempt ${r}/${Se}`), V("warn", "cli_sse_post_retryable_error", {
          status: h.status,
          attempt: r
        })
      } catch (h) {
        t(`SSETransport: POST error: ${d(h)}, attempt ${r}/${Se}`), V("warn", "cli_sse_post_network_error", {
          attempt: r
        })
      }
      if (r === Se) {
        t(`SSETransport: POST failed after ${Se} attempts, continuing`), V("warn", "cli_sse_post_retries_exhausted");
        return
      }
      await J(Cy({
        attempt: r,
        baseMs: Zr,
        capMs: ei
      }))
    }
  }
  isConnectedStatus() {
    return this.state === "connected"
  }
  isReadStreamRecentlyAlive() {
    return this.state === "connected" && Date.now() - this.lastLivenessEvidenceAtMs < this.getReadStreamRecentLivenessWindowMs()
  }
  lastFrameReadAt() {
    return this.lastFrameReadAtMs === 0 ? void 0 : this.lastFrameReadAtMs
  }
  getReadStreamRecentLivenessWindowMs() {
    return this.longestExpectedSilenceMs() + Gr
  }
  isClosedStatus() {
    return this.state === "closed"
  }
  setOnData(e) {
    this.onData = e
  }
  setOnUserFrameReceived(e) {
    this.onUserFrameReceived = e
  }
  setOnClose(e) {
    this.onCloseCallback = e
  }
  setNonOriginRejectionPolicy(e) {
    this.nonOriginPolicy = e
  }
  setOnEvent(e) {
    this.onEventCallback = e
  }
  setOnDelivered(e) {
    this.onDeliveredCallback = e
  }
  getSessionWriters() {
    return this.connectionSessionWriters?.writers
  }
  getSessionWritersStatement() {
    return this.connectionSessionWriters
  }
  sessionWritersOf(e) {
    return this.frameSessionWriters.get(e)
  }
  setOnDiagnostic(e) {
    this.onDiagnostic = e
  }
  setEventFilter(e) {
    this.eventFilter = e
  }
  setWorkerAttestationPolicySink(e) {
    this.workerAttestationPolicySink = e
  }
  requiresStreamEvidence() {
    return this.requireStreamEvidence
  }
  setOnFrameRefused(e) {
    this.onFrameRefused = e
  }
  setOnEventVetoed(e) {
    this.onEventVetoed = e
  }
  setOnHeartbeatProbe(e) {
    this.onHeartbeatProbe = e
  }
  setOnOwnerPresent(e) {
    this.onOwnerPresent = e
  }
  setOnCheckpointRequest(e) {
    this.onCheckpointRequest = e
  }
  setOnDeviceStatusPublished(e) {
    this.onDeviceStatusPublished = e
  }
  setOnReconnected(e) {
    this.onReconnected = e
  }
  close() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    if (this.clearLivenessTimer(), this.stopListeningForSleep?.(), this.frameWaitTimer) clearTimeout(this.frameWaitTimer), this.frameWaitTimer = null;
    this.state = "closing", this.nonOriginStreak = null, this.held = null, this.isHeldForRenewal = !1, this.abortController?.abort(), this.abortController = null
  } [Symbol.dispose]() {
    this.close()
  }
}

function rt(e, s) {
  if (s.Cookie) delete e.Authorization;
  if (s.Authorization) delete e.Cookie, delete e["X-Organization-Uuid"]
}

function ys(e) {
  return Math.min(Math.max(e, it), zr)
}

function li(e) {
  let s = e.pathname;
  if (s.endsWith("/stream")) s = s.slice(0, -7);
  return `${e.protocol}//${e.host}${s}`
}
var F7o = 180000,
  di = 90000;
async function H7o(e) {
  let {
    sessionUrl: s,
    ingressToken: n,
    sessionId: r,
    initialSequenceNum: h,
    getAuthToken: w
  } = e, v = () => e.inboundReadReceipts?.() === !0, y;
  if (w) y = () => NHe(w());
  else nFr(n);
  let O = e.epoch ?? await zAt(s, n);
  t(`[bridge:repl] CCR v2: worker sessionId=${r} epoch=${O}${e.epoch!==void 0?" (from /bridge)":" (via registerWorker)"}`);
  let M = new URL(s);
  M.pathname = M.pathname.replace(/\/$/, "") + "/worker/events/stream";
  let P = new yar(M, {}, {
      sessionId: r,
      initialSequenceNum: h,
      getAuthHeaders: y,
      connectTimeoutMs: e.sseConnectTimeoutMs,
      sseKeepaliveMaxIntervalSeconds: e.sseKeepaliveMaxIntervalSeconds,
      longPollFallback: e.longPollFallback,
      initialLongPollMode: e.initialLongPollMode
    }),
    F = !e.outboundOnly,
    S = (e.selfHealHeartbeats ?? !1) && F,
    B = (e.nonOrigin403Retry ?? !1) && F,
    H = B && S;
  if (B) P.setNonOriginRejectionPolicy({
    windowMs: F7o,
    maxGapMs: di,
    onRecovered: e.onNonOriginRejectionRecovered
  });
  let N, q = !1;

  function X(A, x, Q, K) {
    if (q) return;
    q = !0;
    try {
      z.close({
        goodbye: !1,
        retainUndeliveredClientEvents: e.retainUndeliveredOnClose === !0
      }), P.close()
    } catch (j) {
      a(j)
    }
    try {
      N?.(A, x, Q, K)
    } catch (j) {
      a(j)
    }
  }
  let z = new m$(P, new URL(s), {
    getAuthHeaders: y,
    heartbeatIntervalMs: e.heartbeatIntervalMs,
    heartbeatJitterFraction: e.heartbeatJitterFraction,
    advertiseHeartbeatProbeSupport: (e.advertiseHeartbeatProbeSupport ?? !1) && F,
    uploadTrim: e.uploadTrim,
    keepsRequestId: e.keepsRequestId,
    uploadHoldMarker: e.uploadHoldMarker,
    liveOnlyShellTaskRows: e.liveOnlyShellTaskRows,
    artifactSocketIds: e.artifactSocketIds,
    followsServedPolicy: e.followsServedPolicy,
    ...e.processExiting && {
      processExiting: e.processExiting
    },
    beatOnStaleReconnect: (e.beatOnStaleReconnect ?? !1) && F,
    idleTracker: e.idleTracker,
    beatOnReactivation: (e.beatOnReactivation ?? !1) && F,
    skipRedundantHeartbeats: e.skipRedundantHeartbeats,
    streamEventFlushIntervalMs: e.streamEventFlushIntervalMs,
    streamEventFirstFlushMs: e.streamEventFirstFlushMs,
    gzipRequestBodyFetch: e.gzipRequestBodyFetch,
    noSubscriberStreamEventFlushIntervalMs: e.noSubscriberStreamEventFlushIntervalMs,
    noSubscriberUploadHoldMs: e.noSubscriberUploadHoldMs,
    dropUnwatchedStreamEvents: e.dropUnwatchedStreamEvents,
    nonOrigin403Transient: H,
    internalEventUploader: e.internalEventUploader,
    stateReadEndsAtRegistration: e.onConnectNeedsRecord !== !0,
    onEpochMismatch: (A) => {
      let x = e.causeTypedCloseCodes ? QXr[A] : 4090;
      throw t(`[bridge:repl] CCR v2: terminal request-path condition (${A}) \u2014 closing with ${x} for ${x===4094?"auth recovery":"poll-loop recovery"}`), X(x, A), Error("terminal request-path condition")
    },
    onRequestAuthOk: e.onRequestAuthOk,
    ...S && {
      onHeartbeatLost: () => {
        if (q) return;
        t("[bridge:repl] CCR v2: heartbeats failing while SSE healthy \u2014 closing for transport rebuild", {
          level: "warn"
        }), X(4093)
      }
    }
  });
  P.setOnEvent((A) => {
    if (e.processExiting?.() && Ze(A)) return;
    if (z.reportDelivery(A.event_id, "received"), !(v() && jHi(A.event_id))) z.reportDelivery(A.event_id, "processed")
  }), P.setEventFilter((A) => {
    if (CAr(A)) return !0;
    return v() ? WHi(A) : !1
  });
  let Y, R = !1;
  return {
    write(A) {
      return z.writeEvent(A)
    },
    writeBatch(A) {
      return z.writeEvents(A)
    },
    close(A) {
      if (q = !0, z.close({
          goodbye: A?.goodbye,
          retainUndeliveredClientEvents: A?.retainUndelivered
        }), !A?.retainUndelivered) z.discardUndeliveredClientEvents();
      P.close()
    },
    takeUndeliveredEvents() {
      return z.takeUndeliveredClientEvents()
    },
    discardUndeliveredEvents() {
      return z.discardUndeliveredClientEvents()
    },
    adoptUndeliveredEvents(A) {
      z.adoptClientEvents(A)
    },
    flushGoodbye() {
      return z.flushGoodbye()
    },
    isConnectedStatus() {
      return R
    },
    setOnData(A) {
      P.setOnData(A)
    },
    setOnClose(A) {
      N = A, P.setOnClose((x, Q) => {
        X(x ?? 4092, void 0, Q)
      })
    },
    setOnConnect(A) {
      Y = A
    },
    getLastSequenceNum() {
      return P.getLastSequenceNum()
    },
    isLongPolling() {
      return P.isLongPolling()
    },
    lastFrameReadAt() {
      return P.lastFrameReadAt()
    },
    getEpoch() {
      return O
    },
    reportState(A, x) {
      z.reportState(A, x)
    },
    reportMetadata(A) {
      z.reportMetadata(A)
    },
    reportInternalMetadata(A) {
      if (q) return !1;
      return z.reportInternalMetadata(A), !0
    },
    droppedDurableBatchCount() {
      return z.droppedDurableBatches
    },
    flushWorkerState() {
      return z.flushWorkerState()
    },
    droppedWorkerStatePatchCount() {
      return z.droppedWorkerStatePatches
    },
    reportDelivery(A, x) {
      z.reportDelivery(A, x)
    },
    setStreamEventFlushIntervalMs(A) {
      z.setStreamEventFlushIntervalMs(A)
    },
    setStreamEventFirstFlushMs(A) {
      z.setStreamEventFirstFlushMs(A)
    },
    setNoSubscriberStreamEventFlushIntervalMs(A) {
      z.setNoSubscriberStreamEventFlushIntervalMs(A)
    },
    setNoSubscriberUploadHoldMs(A) {
      z.setNoSubscriberUploadHoldMs(A)
    },
    setDropUnwatchedStreamEvents(A) {
      z.setDropUnwatchedStreamEvents(A)
    },
    setSubscribersReportedListener(A) {
      z.setSubscribersReportedListener(A)
    },
    mayHoldUploads() {
      return z.mayHoldUploads()
    },
    flush(A) {
      return z.flush(A)
    },
    flushDeliveryAcks(A) {
      return z.flushDeliveryAcks(A)
    },
    flushInternalEvents(A) {
      return z.flushInternalEvents(A)
    },
    getUploadBacklog() {
      return z.uploadBacklog()
    },
    getInternalEventBacklog() {
      return {
        pending: z.internalEventsPending,
        droppedBatches: z.droppedInternalBatches
      }
    },
    trackFirstFrameUpload(A) {
      return z.trackFirstFrameUpload(A)
    },
    getInternalEventWriter() {
      return (A, x, Q) => z.writeInternalEvent(A, x, Q)
    },
    getInternalEventReaders() {
      return {
        readMain: (A) => A ? z.readInternalEventsForCatchUp(A) : z.readInternalEvents(),
        readSubagents: () => z.readSubagentInternalEvents(),
        readSubagent: (A, x) => z.readAgentInternalEvents(A, x)
      }
    },
    getInternalEventsPort() {
      return {
        epoch: () => z.getWorkerEpoch(),
        postBatch: (A, x) => z.postInternalEventsBatch(A, x),
        listPage: (A, x) => z.getInternalEventsPage(A, x)
      }
    },
    connect() {
      z.initialize(O).then((A) => {
        if (q) return;
        if (R = !0, t(`[bridge:repl] v2 transport ready for writes (epoch=${O}); opening the read stream`), Y?.(A), !e.outboundOnly && !q) P.connect()
      }, (A) => {
        t(`[bridge:repl] CCR v2 initialize failed: ${d(A)}`, {
          level: "error"
        }), X(4091, void 0, void 0, A instanceof QIe && A.reason === "worker_register_failed" ? {
          httpStatus: A.httpStatus,
          noAnswer: A.noAnswer
        } : void 0)
      })
    }
  }
}
export {
  w6t,
  qXr,
  Smi,
  YXr,
  wmi,
  kmi,
  XXr,
  k6t,
  JXr,
  QIe,
  vmi,
  QXr,
  I7o,
  ZXr,
  m$,
  M7o,
  mar,
  eJr,
  har,
  Emi,
  Tmi,
  gar,
  tJr,
  D7o,
  L7o,
  N7o,
  yar,
  F7o,
  H7o
};
