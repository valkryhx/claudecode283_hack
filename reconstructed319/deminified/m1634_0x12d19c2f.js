// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Nt } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Cy, J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { vt as registerCleanup, zA as registerPreExitFlush, t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { R$n } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { V, Pqe } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { jn } from "B:/~BUN/root/chunk-rr294jrm.js";
import { jEn, _ar, Cmi, WEn, xmi } from "B:/~BUN/root/chunk-agzytztq.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Imi } from "B:/~BUN/root/chunk-dh9acrmw.js";
import { ldn, tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { D1t, KGn, ba } from "B:/~BUN/root/chunk-wthaftk0.js";
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { jHi, WHi, I_s, M_s, QHi, H0n, Dfo, ZHi, n$i, i$i } from "B:/~BUN/root/chunk-e8znf4zw.js";
import { G_s, V_s } from "B:/~BUN/root/chunk-wdfwarp2.js";
import { nqi, rqi, NQe, afe, zFt, RNe } from "B:/~BUN/root/chunk-r1gg0qbg.js";
import { bU, qNe, net, RIr, AIr, Avo, Esn, xvo } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { qr } from "B:/~BUN/root/chunk-vmp6vbba.js";
import { Yoe, S_e } from "B:/~BUN/root/chunk-jj9s326a.js";
import { Xi } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { g$n, y$n, xKi, CAr } from "B:/~BUN/root/chunk-teehnwdh.js";
import { zAt } from "B:/~BUN/root/chunk-820v0aja.js";
import { Ult } from "B:/~BUN/root/chunk-tr5ysshk.js";
import { ZIe } from "B:/~BUN/root/chunk-xt61n0fd.js";
import { Sar } from "B:/~BUN/root/chunk-mvd8n96a.js";
import { H1e } from "B:/~BUN/root/chunk-5kj9dj0y.js";
import { zEn as timeoutMs, n6 } from "B:/~BUN/root/chunk-qc6qygzs.js";
import { $2 } from "B:/~BUN/root/chunk-a5dg1k4h.js";
import { os } from "B:/~BUN/root/chunk-kj33sgq2.js";
import { oLt, Cpo, lSs } from "B:/~BUN/root/chunk-frv0tk8w.js";
import { nRe, PQe } from "B:/~BUN/root/chunk-62khcyrb.js";
import { vo } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { ln } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Rc } from "B:/~BUN/root/chunk-rzaxm471.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, E, I, oe, C, u, xt, me, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { zd, oG, NHe, nFr } from "B:/~BUN/root/chunk-79595s9y.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
import { ui, cb } from "B:/~BUN/root/chunk-xwsv2hvn.js";
import { U, Xae, L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { randomUUID as Ee } from "crypto";
var bs = ["x-ccr-ticket-rev", "x-ccr-ticket-session", "x-ccr-ticket-seq"],
  Rs = /^[A-Za-z0-9_-]{1,4096}$/;
class Oe {
  authorization;
  held = new Map();
  headersFor(e) {
    if (e === void 0) return {};
    if (e !== this.authorization) this.held.clear(), this.authorization = e;
    return Object.fromEntries(this.held);
  }
  note(e, s) {
    if (e === void 0 || e !== this.authorization) return;
    if (s.redirected || s.status >= 400 && s.status < 500 && s.status !== 429) {
      this.held.clear();
      return;
    }
    for (let n of bs) {
      let r = s.headers.get(n);
      if (r === "") this.held.delete(n);else if (r !== null && Rs.test(r)) this.held.set(n, r);
    }
  }
}
var Es = 64;
class Ie {
  rowsAhead;
  queuedSince = new WeakSet();
  attempts = [];
  posts = 0;
  failedPosts = 0;
  rows = 0;
  constructor(e) {
    this.rowsAhead = e;
  }
  noteQueued(e) {
    for (let s of e) this.queuedSince.add(s);
  }
  noteAttempt(e, startedAt, n) {
    let r = U(e, h => this.queuedSince.has(h));
    if (this.posts++, n) this.rows += r;else this.failedPosts++;
    if (this.attempts.length < Es) this.attempts.push({
      startedAt: startedAt,
      endedAt: performance.now(),
      ahead: r === 0
    });
  }
  seen(e) {
    let aheadMs = 0,
      postMs = 0;
    for (let {
      startedAt: startedAt_2,
      endedAt: endedAt,
      ahead: ahead
    } of this.attempts) {
      let v = Math.max(0, endedAt - Math.max(startedAt_2, e));
      if (ahead) aheadMs += v;else postMs += v;
    }
    return {
      aheadMs: aheadMs,
      postMs: postMs,
      posts: this.posts,
      failedPosts: this.failedPosts,
      rowsAhead: this.rowsAhead,
      rows: this.rows
    };
  }
}
var cap = 1536;
function Fe(e) {
  return Array.isArray(e) && e.every(item => typeof item === "string");
}
function ot(e, s = cap) {
  let compactMetadata = e.compactMetadata;
  if (!D(compactMetadata)) return null;
  let preservedMessages = compactMetadata.preservedMessages;
  if (!D(preservedMessages)) return null;
  let uuids = preservedMessages.uuids;
  if (!Fe(uuids) || uuids.length <= s) return null;
  let uuids_2 = uuids.slice(-s),
    headUuid = uuids_2[0],
    allUuids = preservedMessages.allUuids,
    O = Fe(allUuids) ? allUuids.indexOf(headUuid) : -1,
    preservedSegment = compactMetadata.preservedSegment;
  return {
    ...e,
    compactMetadata: {
      ...compactMetadata,
      preservedMessages: {
        ...preservedMessages,
        uuids: uuids_2,
        ...(Fe(allUuids) && {
          allUuids: O >= 0 ? allUuids.slice(O) : allUuids.slice(-s)
        })
      },
      ...(D(preservedSegment) && {
        preservedSegment: {
          ...preservedSegment,
          headUuid: headUuid
        }
      })
    }
  };
}
var qXr = Symbol("requestFollowsInit");
var Smi = "tengu_patient_ledger",
  ks = 10,
  Ts = 1e4,
  YXr = 400,
  Ms = 2097152;
function be(e) {
  return typeof e === "string" && /^\d{4}-\d{2}-\d{2}T/.test(e) && !Number.isNaN(Date.parse(e));
}
function As(e) {
  if (!D(e) || e.v !== 1 || !Array.isArray(e.spans)) return [];
  return e.spans.flatMap(item => D(item) && be(item.since) ? [{
    since: item.since,
    ...(typeof item.until === "string" && item.until !== "" && {
      until: item.until
    }),
    tries: Number.isInteger(item.tries) && Number(item.tries) > 0 ? Number(item.tries) : 0
  }] : []);
}
class We {
  earlier = [];
  sentAgain = new Set();
  own = void 0;
  unanswered = new Set();
  writes = !1;
  refused = !1;
  runOpen = !1;
  startedAt = "";
  runOpenedAt = "";
  guardLapsed = !1;
  stampsCountFrom = 0;
  spansGivenUpAtStart = 0;
  get earlierSpans() {
    return this.earlier;
  }
  get rowsSentAgain() {
    return this.sentAgain;
  }
  get writesNoMore() {
    return this.refused;
  }
  workerRecordRead(e, s) {
    if (e.readFailed === !0) return;
    this.writes = !0, this.startedAt = s.toISOString(), this.stampsCountFrom = s.getTime(), this.runOpenedAt = this.startedAt;
    let n = As(e.internal?.client_rows_owed);
    this.earlier = n.filter(item => item.tries < ks), this.spansGivenUpAtStart = n.length - this.earlier.length;
  }
  stateReported(e, s, n) {
    if (this.runOpen === (e === "idle")) this.runOpen = !this.runOpen, this.runOpenedAt = this.runOpen ? s.toISOString() : this.runOpenedAt;
    if (!n) return this.guardEnded(s.getTime());
    return (this.runOpen ? this.openOwnSpan(s) : this.rowsAnswered([])) ?? (this.writes && (this.own !== void 0 || this.earlier.length > 0) ? this.note() : void 0);
  }
  rowsEntered(e, s) {
    let n = e.filter(item => at(item) !== void 0);
    for (let h of n) this.unanswered.add(String(h.uuid));
    if (this.unanswered.size > Ts) this.unanswered.clear(), this.writes = !1;
    if (n.length === 0) return;
    let r = Math.min(s.getTime(), ...n.flatMap(item => be(item.timestamp) ? [Date.parse(item.timestamp)] : []).filter(item => item >= this.stampsCountFrom));
    if (this.own === void 0) return this.openOwnSpan(new Date(r));
    if (!this.writes || r >= Date.parse(this.own.since)) return;
    return this.own = {
      ...this.own,
      since: new Date(r).toISOString()
    }, this.note();
  }
  rowsAnswered(e) {
    let s = this.sentAgain.size > 0;
    for (let h of e) this.unanswered.delete(h), this.sentAgain.delete(h);
    let n = s && this.sentAgain.size === 0,
      r = this.own !== void 0 && !this.runOpen && this.unanswered.size === 0;
    if (!this.writes || !n && !r) return;
    return this.earlier = n ? [] : this.earlier, this.own = r ? void 0 : this.own, this.note();
  }
  guardEnded(e) {
    if (this.guardLapsed = !0, this.stampsCountFrom = e, this.unanswered.clear(), !this.writes || this.own === void 0) return;
    return this.own = void 0, this.note();
  }
  earlierSpansTried(e) {
    return this.replaceEarlier(this.earlier.map(item => ({
      ...item,
      until: item.until ?? e ?? this.startedAt,
      tries: item.tries + 1
    })));
  }
  earlierRowsSentAgain(e) {
    for (let s of e) this.sentAgain.add(s);
  }
  earlierRowsWithdrawn() {
    this.sentAgain.clear();
  }
  earlierSpansGivenUp() {
    return this.replaceEarlier([]);
  }
  reportWithNoteRefused() {
    this.writes = !1, this.refused = !0;
  }
  replaceEarlier(e) {
    if (!this.writes || this.earlier.length === 0) return;
    return this.earlier = e, this.note();
  }
  openOwnSpan(e) {
    if (!this.writes || this.own !== void 0) return;
    return this.own = {
      since: this.guardLapsed ? e.toISOString() : new Date(Math.max(Date.parse(this.runOpenedAt), this.stampsCountFrom)).toISOString(),
      tries: 0
    }, this.guardLapsed = !1, this.note();
  }
  note() {
    let e = this.earlier.map(item => ({
        ...item,
        until: item.until ?? this.startedAt
      })),
      spans = this.own ? [...e, this.own] : e;
    return {
      client_rows_owed: spans.length > 0 ? {
        v: 1,
        spans: spans
      } : null
    };
  }
}
function at(e) {
  let s = D(e.message) ? e.message.content : void 0;
  return typeof e.uuid === "string" && Array.isArray(s) && e.isSidechain !== !0 && !e.parent_tool_use_id && (e.type === "assistant" || e.type === "user" && s.some(item => D(item) && item.type === "tool_result")) ? e.uuid : void 0;
}
function wmi(e, s, n = () => !0) {
  let leftOut = "nothing",
    h = e.flatMap(({
      since: since,
      until: until
    }) => {
      let O = s.findIndex(xe(since)),
        M = O < 0 ? [] : s.slice(O),
        P = until === void 0 ? -1 : be(until) ? M.findIndex(xe(until)) : M.findIndex(item => item.uuid === until) + 1,
        F = P < 0 ? M : M.slice(0, P);
      if (until !== void 0 && !be(until) && !s.some(item => item.uuid === until) || F.some(item => item.type === "system" && item.subtype === "compact_boundary")) leftOut = "rows_before_a_compaction";
      let S = [];
      for (let B of F) {
        let H = at(B) !== void 0 && n(B);
        if (H === "nor_any_after_it") {
          leftOut = "reply_without_this_sessions_mark";
          break;
        }
        if (H) S.push(B);
      }
      return S.length > 0 ? [S] : [];
    }),
    w = new Set();
  for (let v of h) {
    let y = 0,
      O = 0,
      M = v.toReversed().findIndex((item, index) => (y += Buffer.byteLength(_(item)), O += D(item.message) && Array.isArray(item.message.content) ? item.message.content.length : 1, index > 0 && (O > Math.floor(YXr / h.length) || y > Ms / h.length)));
    for (let P of M < 0 ? v : v.slice(v.length - M)) w.add(P);
    if (M >= 0) leftOut = "rows_over_the_limits";
  }
  return {
    rows: [...w],
    leftOut: leftOut
  };
}
function kmi(e, s, n) {
  let r = s.findIndex(xe(Math.min(...e.map(({
      since: since_2
    }) => Date.parse(since_2))))),
    h = (r < 0 ? s : s.slice(0, r)).findLast(n)?.uuid;
  return typeof h === "string" ? h : void 0;
}
function xe(e) {
  let s = new Date(e).getTime();
  return n => typeof n.timestamp === "string" && Date.parse(n.timestamp) >= s;
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
    event: event
  } = e;
  if (event.type === "message_start" && event.message?.input_transformations) {
    let {
      input_transformations: input_transformations,
      ...message
    } = event.message;
    return {
      ...e,
      event: {
        ...event,
        message: message
      }
    };
  }
  if (event.type === "message_delta" && event.input_transformations) {
    let {
      input_transformations: input_transformations_2,
      ...event_2
    } = event;
    return {
      ...e,
      event: event_2
    };
  }
  return e;
}
function Ue(e, bytes) {
  let n = Os(e.event),
    r = Object.entries(n).map(([h, w]) => `${h}=${w}`).join(" ");
  t(`CCRClient: dropping oversize ephemeral stream_event (${r}, ${bytes} bytes, over the ${jEn}-byte limit)`, {
    level: "warn"
  }), c("ccr_partial_messages", "oversize_ephemeral_skipped", {
    ...n,
    bytes: bytes
  });
}
function Os(e) {
  if (!D(e)) return {
    event_type: b("other")
  };
  let {
      type: type,
      delta: delta,
      content_block: content_block
    } = e,
    h = D(content_block) ? content_block.type : void 0;
  return {
    event_type: f(lt(Cs, type)),
    ...(type === "content_block_delta" && {
      delta_type: f(lt(Ps, D(delta) ? delta.type : void 0))
    }),
    ...(type === "content_block_start" && {
      content_block_type: qNe(h) ? f(h) : b("other")
    })
  };
}
function lt(e, s) {
  for (let n in e) if (n === s) return n;
  return "other";
}
var Is = 500,
  Fs = 60000;
function xs(e) {
  if (e.type !== "stream_event" || e.parent_tool_use_id != null) return !1;
  let {
    event: event_3
  } = e;
  if (!D(event_3) || event_3.type !== "content_block_delta") return !1;
  let {
    delta: delta_2
  } = event_3;
  return D(delta_2) && delta_2.type === "text_delta" && typeof delta_2.text === "string" && /\S/.test(delta_2.text);
}
function ut(e, s, n, r) {
  let h = s.filter(item => xs(item.payload) && !n.has(item));
  if (h.length === 0) return;
  for (let M of h) n.add(M);
  let w = ht(e),
    {
      posts: posts,
      gapsOver500Ms: gapsOver500Ms,
      lastPostAtMs: lastPostAtMs
    } = w;
  if (w.posts++, lastPostAtMs !== void 0 && r - lastPostAtMs > Is) w.gapsOver500Ms++;
  return w.lastPostAtMs = r, () => {
    for (let M of h) n.delete(M);
    w.posts = posts, w.gapsOver500Ms = gapsOver500Ms, w.lastPostAtMs = lastPostAtMs;
  };
}
function ct(e, s) {
  if (!(s >= 0)) return;
  let n = ht(e);
  n.timerMaxLateMs = Math.max(n.timerMaxLateMs ?? 0, Math.min(Math.round(s), Fs));
}
function ht(e) {
  return e.textRhythm ??= {
    posts: 0,
    gapsOver500Ms: 0,
    lastPostAtMs: void 0,
    timerMaxLateMs: void 0
  }, e.textRhythm;
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
    r.releases += 1, r.heldRows += s, r.maxHeldRows = Math.max(r.maxHeldRows, s), r.maxHeldMs = Math.max(r.maxHeldMs, n);
  }
  wholeTurnHoldStarted() {
    if (!this.wholeTurnHoldStands) this.wholeTurnHoldStands = !0, this.counts.wholeTurnHolds += 1;
  }
  wholeTurnHoldEndedEarly() {
    this.wholeTurnHoldStands = !1;
  }
  turnEnded() {
    if (this.wholeTurnHoldStands) this.wholeTurnHoldStands = !1, this.counts.wholeTurnHoldsKeptToTurnEnd += 1;
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
  closingToNewPatches = new AbortController();
  hasDroppedSomething = !1;
  cutKeptMetadata = !1;
  closed = !1;
  config;
  constructor(e) {
    this.config = e;
  }
  enqueue(e) {
    if (this.closed || this.isClosedToNewPatches) {
      this.hasDroppedSomething = !0;
      return;
    }
    if (this.pending && "worker_status" in this.pending && "worker_status" in e) this.drain();
    let s = !("worker_status" in e) && (this.config.waitsForStatus?.(e) ?? !1);
    if (this.pendingWaits = (this.pending === null || this.pendingWaits) && s !== !1, this.pendingWaits && typeof s === "number") this.waitTimer ??= setTimeout(() => this.sendWaiting(), s);
    if (this.pending === null) this.pendingSince = Date.now(), this.pending = e;else this.pending = ve(this.pending, e);
    if ("worker_status" in e) this.requeued = null;
    if (this.requeuedMetadata &&= Re(this.requeuedMetadata, e), this.remember(e), this.config.mergesSameRun?.()) queueMicrotask(() => void this.drain());else this.drain();
  }
  requeueStatus(e) {
    if (this.closed || this.isClosedToNewPatches) {
      this.hasDroppedSomething = !0;
      return;
    }
    if (this.pending && "worker_status" in this.pending) return;
    this.requeued = e, this.drain();
  }
  requeueMetadata(e) {
    if (this.closed || this.isClosedToNewPatches) {
      this.hasDroppedSomething = !0;
      return;
    }
    this.putBackMetadata(e);
  }
  putBackMetadata(e) {
    this.requeuedMetadata = Re(ve(this.requeuedMetadata ?? {}, e), this.pending ?? {}), this.drain();
  }
  remember(e) {
    if (this.config.remembers) this.remembered = ve(this.remembered, e);
  }
  sendWaiting(e = 0) {
    if (this.pendingWaits && (e <= 0 || Date.now() - this.pendingSince >= e)) this.pendingWaits = !1, this.drain();
  }
  closeToNewPatches() {
    if (this.closed) return;
    if (this.pendingWaits = !1, this.disarmWaitTimer(), this.drain(), this.closingToNewPatches.abort(), this.hasDroppedSomething ||= this.requeued !== null, this.requeued = null, this.pending) this.hasDroppedSomething ||= "worker_status" in this.pending, this.pending = this.withoutStatus(this.pending);
  }
  get isClosedToNewPatches() {
    return this.closingToNewPatches.signal.aborted;
  }
  get hasCutKeptMetadata() {
    return this.cutKeptMetadata;
  }
  get owesMetadata() {
    return this.isClosedToNewPatches && !this.closed && (this.pending !== null || this.requeuedMetadata !== null || this.sending !== null && this.withoutStatus(this.sending) !== null);
  }
  keepsWithoutStatus(e) {
    return this.withoutStatus(e) !== null;
  }
  withoutStatus(e) {
    if (!("worker_status" in e)) return e;
    let internal_metadata = e.internal_metadata,
      internal_metadata_2 = D(internal_metadata) ? vo(internal_metadata, (this.config.ridesAStatus ?? []).filter(item => internal_metadata[item] !== null || !this.config.deleteOutlivesStatus?.includes(item))) : {};
    return Object.keys(internal_metadata_2).length > 0 ? {
      internal_metadata: internal_metadata_2
    } : null;
  }
  close() {
    this.pendingWaits = !1, this.drain(), this.closed = !0, this.clearPending(), this.requeued = null, this.requeuedMetadata = null;
  }
  get unsent() {
    return this.inflight !== null || this.pending !== null;
  }
  async flush() {
    while (!this.closed) if (this.inflight) await this.inflight;else if (this.pending || this.requeued || this.requeuedMetadata) this.pendingWaits = !1, await this.drain();else return !this.hasDroppedSomething;
    return !1;
  }
  async drain() {
    if (this.inflight || this.closed) return;
    let e = this.pendingWaits ? null : this.pending,
      s = e ?? this.requeued,
      n = !e;
    if (e) this.clearPending();else if (this.requeued) this.requeued = null;else if (this.requeuedMetadata) {
      let r = Re(this.requeuedMetadata, {
        internal_metadata: Object.fromEntries((this.config.requeuedAlone ?? []).map(item => [item, null]))
      });
      if (r === null && this.pending) return;
      let [[h, w] = []] = Object.entries(r ?? this.requeuedMetadata);
      s = h === void 0 ? null : {
        [h]: w
      }, this.requeuedMetadata = s && Re(this.requeuedMetadata, s);
    }
    if (!s) return;
    this.inflight = this.sendWithRetry(s, n).then(() => {
      if (this.inflight = null, this.sending = null, (this.pending || this.requeued || this.requeuedMetadata) && !this.closed) this.drain();
    });
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
        return;
      }
      if (this.isClosedToNewPatches && !h) h = !0, r = 0;
      if (r++, await J(this.retryDelay(r), this.isClosedToNewPatches ? void 0 : this.closingToNewPatches.signal), this.handsBackWithoutStatus(n)) return;
      if (this.pending && !this.closed) {
        if (s) {
          if (!("worker_status" in n) && !this.pendingWaits) {
            this.putBackMetadata(n);
            return;
          }
          if ("worker_status" in n && "worker_status" in this.pending) return;
          continue;
        }
        n = ve(n, this.pending), this.clearPending();
      }
    }
  }
  handsBackWithoutStatus(e) {
    if (!this.isClosedToNewPatches || !("worker_status" in e)) return !1;
    if (this.closed) return !0;
    return this.hasDroppedSomething = !0, this.cutKeptMetadata ||= this.pending !== null && "external_metadata" in this.pending, this.pending = this.withoutStatus(this.pending ? ve(e, this.pending) : e), !0;
  }
  clearPending() {
    this.pending = null, this.disarmWaitTimer();
  }
  disarmWaitTimer() {
    if (this.waitTimer) clearTimeout(this.waitTimer), this.waitTimer = null;
  }
  retryDelay(e) {
    let s = Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs),
      n = Math.random() * this.config.jitterMs;
    return s + n;
  }
}
function Re(e, s) {
  let n = {};
  for (let [r, h] of Object.entries(e)) {
    let w = Ro(h, (v, y) => !(y in (s[r] ?? {})));
    if (Object.keys(w).length > 0) n[r] = w;
  }
  return Object.keys(n).length > 0 ? n : null;
}
function ve(e, s) {
  let n = {
    ...e
  };
  for (let [r, h] of Object.entries(s)) if ((r === "external_metadata" || r === "internal_metadata") && n[r] && typeof n[r] === "object" && typeof h === "object" && h !== null) n[r] = {
    ...n[r],
    ...h
  };else n[r] = h;
  return n;
}
var pt = {},
  $t = 20000,
  ft = 1e4,
  zt = 15000,
  jt = 5000,
  Gt = jt,
  Ls = 5000,
  Bs = 300000,
  timeout_3 = 2000,
  Hs = zt + Gt + 2 * $t,
  Ns = 5000,
  _t = 1.5,
  Ds = 3,
  qs = new Set([401, 403, 404, 429]),
  k6t = 100,
  JXr = 20;
function re(e) {
  return e === 400 || e === 413 || e === 422;
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
  maxMs: maxMs,
  minMs = Ke
}) {
  let r = Ke + Math.round(e.bytes / Pe * (Xs / 1000)) * 1000,
    h = e.bytes >= Ve && !e.cuttable ? r * Js ** e.retryCount : r;
  return Math.max(minMs, Math.min(maxMs, Math.round(h)));
}
var Zs = new Set(["remote_tool_call", "remote_plumbing_call"]);
function en(e) {
  return Zs.has(Kt(e));
}
var sn = new Set(ZIe),
  nn = 256,
  rn = new Set(["apply_flag_settings", "set_max_thinking_tokens", "set_permission_mode", "mcp_set_servers", "mcp_reconnect", "reload_skills"]),
  wt = 1000,
  on = 64,
  an = new Set(["initialize", "stage_file", "prefetch_attachments", "set_chrome_browser_hints", "mcp_toggle", "set_mcp_permission_mode_override", "set_model"]);
function yt(e) {
  if (!D(e)) return !1;
  return e.type === "control_request" ? D(e.request) && rn.has(e.request.subtype) : e.type === "control_response";
}
function Kt(e) {
  let s = e.payload.type === "control_request" ? e.payload.request : void 0;
  return typeof s === "object" && s !== null && "subtype" in s ? s.subtype : void 0;
}
function ke(e) {
  let s = k(e);
  if (s) return s;
  if (e && typeof e === "object" && "name" in e && typeof e.name === "string") return e.name;
  return;
}
class QIe extends Error {
  reason;
  httpStatus;
  noAnswer;
  constructor(e, s, n = !1) {
    super(`CCRClient init failed: ${e}`);
    this.reason = e;
    this.httpStatus = s;
    this.noAnswer = n;
  }
}
function vmi(e) {
  return e instanceof QIe && e.reason === "worker_register_failed" && !re(e.httpStatus);
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
  maxAttempts = 3,
  fn = 100;
async function _n(e, s) {
  let n = e.body?.getReader(),
    textDecoder = new TextDecoder(),
    h = "",
    bytes_2 = 0;
  for (let v = await n?.read(); v !== void 0 && !v.done; v = await n?.read()) {
    if (bytes_2 += v.value.byteLength, bytes_2 > s) return await n?.cancel(), null;
    let y = textDecoder.decode(v.value, {
      stream: !0
    });
    if (y === "" && v.value.byteLength > 6) throw n?.cancel().catch(() => {}), RangeError("out of memory while decoding a page");
    h += y;
  }
  return {
    text: h + textDecoder.decode(),
    bytes: bytes_2
  };
}
function mn(e, s) {
  let n = e.payload?.timestamp;
  return s === void 0 || n === void 0 || typeof n === "string" && n.length <= s;
}
var vn = 1e4,
  gn = 300,
  maxDelayMs = 30000;
function Rt(e) {
  return e !== void 0 && e >= 400 && e < 500 ? "not_accepted" : "indeterminate";
}
function He(e) {
  let has_terminal_bookend = !1,
    has_level = !1;
  for (let r of e) if (r.payload.subtype === "task_notification") has_terminal_bookend = !0;else if (r.payload.subtype === "background_tasks_changed") has_level = !0;
  return has_terminal_bookend || has_level ? {
    has_terminal_bookend: has_terminal_bookend,
    has_level: has_level
  } : null;
}
function Me(e) {
  return Math.min(Math.max(0, Math.trunc(e) || 0), 2147483647);
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
  };
}
var Sn = p(() => u({
    tool_name: o().refine(e => !e.startsWith("dialog:")),
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
    requestId = $2(n);
  if (requestId === void 0) return;
  return {
    requestId: requestId,
    details: Vt({
      tool_name: n.tool_name,
      display_tool_name: n.display_tool_name ?? void 0,
      action_description: n.action_description,
      raw_command: n.raw_command ?? void 0,
      request_id: n.request_id,
      tool_use_id: n.tool_use_id
    })
  };
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
  };
}
function Mn(reported, s) {
  if (reported === "requires_action") return {
    reported: reported
  };
  let n = s.external?.pending_actions;
  return {
    reported: reported,
    pendingActionOutstanding: s.readFailed === !0 || s.external?.pending_action !== void 0 && s.external.pending_action !== null || Array.isArray(n) && n.length > 0
  };
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
  return s === "processed";
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
  Xe = e => e.ephemeral === !0 || e.payload.type === "keep_alive",
  Ct = e => Xe(e) || e.payload.type === "control_response",
  Pt = () => !1;
function I7o() {
  return i.CLAUDE_CODE_WORKER_EPOCH ?? NaN;
}
var cr = ["cumulative_cost_usd", "cumulative_input_tokens", "cumulative_output_tokens", "cumulative_cache_read_tokens", "cumulative_cache_write_tokens"],
  as = new Set([...cr, "cost_state", "memory_extract_place", "model_turn_stored"]),
  Ce = "disabled_mcp_servers",
  hr = 64;
function Ot(e) {
  return Object.entries(e).filter(([s]) => as.has(s) || s === "last_served_model" || s === "worker_permission_mode" || s === "plan_doc" || s === "card_turn_stamp");
}
function pe(e) {
  return 1 + (e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : 4) + e;
}
function Qe(e) {
  if (typeof e === "string") return pe(Buffer.byteLength(e));
  if (typeof e === "number") return 9;
  let s = 0;
  if (Array.isArray(e)) for (let n of e) s += pe(Qe(n));else if (D(e)) {
    for (let [n, r] of Object.entries(e)) if (r !== void 0) s += pe(pe(Buffer.byteLength(n)) + pe(Qe(r)));
  } else return 2;
  return pe(s);
}
function pr(e) {
  let s = e?.error;
  return s?.type === "not_found_error" && s.resource_type === "client_event";
}
function It(e, s) {
  return e.toLowerCase() === s.toLowerCase();
}
function fr(e) {
  if (e === 404) return "http_404_unknown_body";
  if (e === 401 || e === 403) return "http_refused";
  if (e === 429) return "http_rate_limited";
  if (e === 501) return "http_not_served";
  return e >= 500 ? "http_server_error" : "http_other";
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
function mr(e, eventId) {
  let n = _r().safeParse(e);
  if (!n.success) return {
    kind: "unavailable",
    why: "malformed"
  };
  let {
      event_id: event_id,
      created_at: created_at,
      payload: payload
    } = n.data,
    createdAtMs = Date.parse(created_at);
  if (!It(event_id, eventId) || !Number.isFinite(createdAtMs) || !It(payload.uuid, eventId)) return {
    kind: "unavailable",
    why: "malformed"
  };
  return {
    kind: "event",
    event: {
      eventId: eventId,
      createdAtMs: createdAtMs,
      sentByAccountId: n.data.sent_by_account_id ?? void 0,
      deviceAttestationStatus: n.data.device_attestation_status,
      sessionAgentOwned: n.data.session_agent_owned,
      payload: payload
    }
  };
}
function ZXr(e, getAuthHeaders) {
  if (e.protocol !== "http:" && e.protocol !== "https:") {
    let r = R$n(e.protocol, "session_url_protocol");
    throw Error(`CCRClient: Expected http(s) URL${r === void 0 ? "" : `, got ${r}`}`);
  }
  let n = e.pathname.replace(/\/$/, "");
  return {
    sessionBaseUrl: `${e.protocol}//${e.host}${n}`,
    getAuthHeaders: getAuthHeaders
  };
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
  urgentRequestIds = new Set();
  followsServedPolicy;
  launchFlushPolicy;
  processExiting;
  gatesToolCalls;
  toolCallRowGraceMs;
  flushPolicy;
  holdRule;
  settingsRequestIds = new Set();
  waitingAnswers = [];
  waitingAnswersTimer = null;
  lastRateLimitKind;
  lastRateLimitRepeat;
  seesModelCallBoundaries = !1;
  lastRequestingList;
  liveOnlyFirstRow;
  turnTookInput = !1;
  housekeepingRequestIds = new Set();
  toolResultEndsCall = !1;
  liveOnlyRequestingRow;
  heldRepeatUuid;
  subAgentWroteSinceStoredRequesting = !1;
  indexBehindHeldToolResult;
  liveOnlyStartingRow;
  turnHold = "open";
  modelTurnEnded = !1;
  recordAtStart;
  reportedKeys = new Set();
  autocompactStateStored;
  stateRowTypesWritten = new Set();
  sessionModelTurnStored = !1;
  resultThatMarks;
  secondCallStartsHold = !1;
  modelCallStreamed = !1;
  streamedResponseId;
  holdsNoMoreThisTurn = !1;
  newestResponseId;
  unansweredCalls = new Set();
  callsWhoseResultsWait = new Set();
  heldResultNeedsStore = !1;
  pickupBarriers = [];
  pickupTakesTick = !1;
  pickupWaitMs;
  inboundMessageUuids = new Set();
  liveTurnId;
  nextLiveIndex = 0;
  heldShellTaskIds = new Set();
  rowsMarkedLiveOnly = new WeakSet();
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
    client_events: new Map(),
    internal_events: new Map()
  };
  toolCallRowWaiters = new Map();
  awaitedToolCalls = new Set();
  transcriptLaneInUse = !1;
  toolCallsWhoseResultReleases = new Set();
  lanesNotAnswering = new Set();
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
  closeAbort = new AbortController();
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
  clientRowsOwed = new We();
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
  countedTextEvents = new WeakSet();
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
  uploadHoldTally = new Le();
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
  rowsAwaitingCompactSummary = new Map();
  rowsAwaitingCompactSummaryAtClose;
  onInternalBatchAcked;
  onInternalEventLaneClosed;
  rowsRepeatedAfterCompaction;
  deliveryUploader;
  pendingProcessingAcks = [];
  waitingReceipts = new Map();
  waitingReceiptsTimer;
  messagesInProcessing = new Set();
  resultPostWaits;
  receiptsRide;
  receiptsRideRefused = !1;
  onEpochMismatch;
  lastLineWhen;
  onDurableEventsDropped = void 0;
  onDurableEventsUpload = void 0;
  getAuthHeaders;
  tickets = new Oe();
  providerWithheldReason;
  onDiagnostic;
  onCardRecordRefused;
  onRequestAuthOk;
  onHeartbeatLost;
  readTransport;
  nonOrigin403Transient;
  nonOriginRuns = new Map();
  heartbeatStreakStartedAtMs = 0;
  heartbeatLostFiredForStreak = !1;
  adoptRefreshedAuth;
  gzipRequestBodyFetch;
  ownConnectionPool;
  leavesPoolAfterServerError;
  constructor(e, s, n) {
    this.lastLineWhen = n?.onEpochMismatch ? "queued" : "now", this.onEpochMismatch = n?.onEpochMismatch ?? (() => {
      process.exit(1);
    }), this.onHeartbeatLost = n?.onHeartbeatLost, this.readTransport = e, this.workerSocket = n?.workerSocket, this.nonOrigin403Transient = n?.nonOrigin403Transient ?? !1, this.heartbeatIntervalMs = n?.heartbeatIntervalMs ?? $t, this.seedHeartbeatIntervalMs = this.heartbeatIntervalMs, this.advertiseHeartbeatProbeSupport = n?.advertiseHeartbeatProbeSupport ?? !1, this.uploadTrim = n?.uploadTrim ?? (() => pt), this.keepsRequestId = () => n?.keepsRequestId?.() === !0, this.uploadHoldMarker = () => n?.uploadHoldMarker?.() === !0, this.skipsGoodbyeDuringResumeLoad = () => n?.skipsGoodbyeDuringResumeLoad?.() !== !1;
    let r = n?.liveOnlyShellTaskRows;
    this.shellTaskRowsLiveOnly = r ? () => r.enabled() === !0 : () => this.followsServedPolicy && this.flushPolicy?.liveOnlyTypes.has(Jt) === !0, this.liveOnlyShellStarts = r?.starts ?? new Map(), this.artifactSocketIds = n?.artifactSocketIds, this.servedCallRequestsJumpQueue = () => n?.servedCallRequestsJumpQueue?.() === !0, this.maxEventPostTimeoutMs = n?.maxEventPostTimeoutMs ?? Qs, this.followsServedPolicy = n?.followsServedPolicy === !0, this.keepAliveAtWorkStart = n?.keepAliveAtWorkStart, this.launchFlushPolicy = n?.launchFlushPolicy, this.processExiting = n?.processExiting ?? (() => !1), this.gatesToolCalls = n?.gatesToolCalls === !0, this.toolCallRowGraceMs = n?.toolCallRowGraceMs ?? nr, this.pickupWaitMs = n?.pickupWaitMs ?? xn, this.beatOnStaleReconnect = n?.beatOnStaleReconnect ?? !1, this.idleTracker = n?.idleTracker, this.beatOnReactivation = (n?.beatOnReactivation ?? !1) && this.idleTracker !== void 0, this.skipRedundantHeartbeats = n?.skipRedundantHeartbeats ?? !1, this.probeBeatSpacingMs = n?.probeBeatSpacingMs ?? Ns, this.heartbeatJitterFraction = n?.heartbeatJitterFraction ?? 0, this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(this.advertiseHeartbeatProbeSupport), this.getAuthHeaders = n?.getAuthHeaders ?? oG;
    let h = n?.isFirstPartyProvider;
    this.providerWithheldReason = h === void 0 ? () => "provider-unknown" : () => h() ? void 0 : "data-residency", this.onDiagnostic = n?.onDiagnostic, this.onCardRecordRefused = n?.onCardRecordRefused, this.onRequestAuthOk = n?.onRequestAuthOk, this.adoptRefreshedAuth = n?.adoptRefreshedAuth, this.gzipRequestBodyFetch = n?.gzipRequestBodyFetch, this.ownConnectionPool = n?.ownConnectionPool, this.leavesPoolAfterServerError = n?.leavesPoolAfterServerError, this.reportParkAtInit = n?.reportParkAtInit ?? !1, this.guardsClientRows = n?.guardsClientRows, this.flagsRefreshed(), this.initExternalMetadata = n?.initExternalMetadata ?? {}, this.initialWorkerStatus = n?.initialWorkerStatus ?? "idle", this.initStateGetOrderingBoundMs = n?.initStateGetOrderingBoundMs ?? vn, this.stateReadEndsAtRegistration = n?.stateReadEndsAtRegistration ?? !1, this.startReportsMaxWaitMs = n?.startReportsMaxWaitMs ?? Ln, this.readSource = {
      ...ZXr(s, this.getAuthHeaders),
      isClosed: () => this.closed,
      onConflict: v => this.handleEpochMismatch(v),
      ownConnectionPool: this.ownConnectionPool,
      leavesPoolAfterServerError: this.leavesPoolAfterServerError
    }, this.sessionBaseUrl = this.readSource.sessionBaseUrl, this.sessionId = s.pathname.replace(/\/$/, "").split("/").pop() || "", this.workerState = new Be({
      send: async v => {
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
          let refusedSwitchedOffMcpServers = this.refusedSwitchedOffMcpServers;
          if (M) this.switchedOffMcpServersRefusedAlone = 0;else if (refusedSwitchedOffMcpServers !== null && refusedSwitchedOffMcpServers.writesToWaitFor > 0 && Object.keys(O).length > 0) refusedSwitchedOffMcpServers.writesToWaitFor--;
          return this.requeueRefusedSwitchedOffMcpServersOnceIdle(), !0;
        }
        if (this.closed && P.status === 409) {
          if (V("warn", "cli_worker_state_4xx_dropped", {
            status: P.status
          }), this.droppedWorkerStatePatchCount++, this.workerState.keepsWithoutStatus(y)) this.droppedOwedMetadataPatchCount++;
          return !0;
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
              internal_metadata: internal_metadata_3,
              external_metadata: external_metadata,
              ...N
            } = y,
            q = Ot(O),
            X = Ot(S);
          if (q.length > 0 && X.length > 0 || q.length + X.length > 0 && q.length + X.length < Object.keys(N).length + Object.keys(O).length + Object.keys(S).length) this.workerState.requeueMetadata({
            ...(q.length > 0 && {
              internal_metadata: Object.fromEntries(q)
            }),
            ...(X.length > 0 && {
              external_metadata: Object.fromEntries(X)
            })
          });
          if (y.worker_status !== void 0) {
            let z = {
              worker_status: y.worker_status,
              ...("requires_action_details" in y && {
                requires_action_details: y.requires_action_details
              }),
              ...("reply_degraded" in O && {
                internal_metadata: {
                  reply_degraded: O.reply_degraded
                }
              })
            };
            if (Object.keys(y).length > Object.keys(z).length || Object.keys(O).length > 1) return this.workerState.requeueStatus(z), !0;
            c("ccr_worker_state_publish", "state_4xx_dropped");
          }
          return !0;
        }
        return !1;
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500,
      ridesAStatus: ["reply_degraded", "card_turn_stamp"],
      deleteOutlivesStatus: ["card_turn_stamp"],
      requeuedAlone: [Ce],
      mergesSameRun: () => this.flushPolicy?.mergeWorkerReports === !0 && this.followsServedPolicy,
      waitsForStatus: v => {
        let flushPolicy = this.flushPolicy,
          {
            external_metadata: external_metadata_2 = {},
            internal_metadata: internal_metadata_4 = {},
            ...P
          } = v;
        if (!flushPolicy || !this.followsServedPolicy || Object.keys(P).length > 0 || !D(external_metadata_2) || !D(internal_metadata_4) || [...Object.values(external_metadata_2), ...Object.values(internal_metadata_4)].includes(null)) return !1;
        let F = this.startReportsWaitUntilMs - performance.now();
        if (flushPolicy.mergeWorkerReports && F > 0 && this.inboundMessageUuids.size > 0 && !("worker_permission_mode" in internal_metadata_4)) return F;
        if (this.currentState !== "running" || !Object.keys(external_metadata_2).every(item => flushPolicy.metadataWaitsForStatus.has(item)) || !Object.keys(internal_metadata_4).every(item => flushPolicy.costReportMaxWaitMs > 0 && as.has(item))) return !1;
        if (Object.keys(internal_metadata_4).length > 0) return flushPolicy.costReportMaxWaitMs;
        return Object.keys(external_metadata_2).length > 0;
      }
    }), this.eventUploader = new Esn({
      maxBatchSize: 100,
      maxBatchBytes: () => Math.min(10 * Pe, this.workerSocket?.maxBatchBytes() ?? 1 / 0),
      maxQueueSize: 1e5,
      send: this.settlesTakenRiders(async (v, y) => {
        let O = xvo(v);
        if (O > 0) t(`CCRClient: dropped ${O} repeated-uuid durable event(s) from one live-view POST`);
        let M = y.urgent ? void 0 : this.ridingRows,
          failedRide = this.failedRide;
        if (this.failedRide = void 0, M && (this.ridesAreOff() || v.every(item => Xe(item) || item.payload.type === "control_response") || y.bytes + M.bytes > Math.min(Ys, this.workerSocket?.maxBatchBytes() ?? 1 / 0))) this.giveBackRidingRows(), M = void 0;
        if (M) this.ridingRows = void 0, this.takenRiders = M;
        let F = !y.urgent && !v.every(Ct);
        if (F && this.receiptsMayRide() && this.messagesInProcessing.size > 0 && v.some(item => item.payload.type === "result")) await new Promise(W => {
          this.resultPostWaits = W, setImmediate(W);
        }), this.resultPostWaits = void 0, this.messagesInProcessing.clear();
        let S = F && this.receiptsMayRide() ? [...this.waitingReceipts].filter(([W, Z]) => Z === "processed" && Nt(W) !== null).slice(0, Kn).map(([W]) => W) : [],
          B = M ? {
            ...y,
            bytes: y.bytes + M.bytes
          } : y,
          timeout = gt(B, {
            maxMs: this.maxEventPostTimeoutMs,
            minMs: v.some(en) ? mt : y.followsUrgent ? Math.min(mt, this.maxEventPostTimeoutMs) : void 0
          });
        this.reportDurableUpload(v, "sending");
        let N = this.actsOnSubscribersReports(),
          parseBody = N || this.onSubscribersReported !== void 0 || M !== void 0 || S.length > 0,
          hasSubscribersReports = this.hasSubscribersReports,
          z = [];
        for (let W of this.trackedFrameUploads("ackedAtMs")) if (v.some(item => item.payload.uuid === W.uuid)) z.push(W.timing);
        let Y = [];
        for (let W of z) if (W.postedAtMs === void 0) W.postedAtMs = performance.now(), W.postedWallMs = Date.now(), Y.push(W);
        let R = this.firstTextFrameUpload?.timing,
          A = R?.postedAtMs === void 0 ? void 0 : ut(R, v, this.countedTextEvents, performance.now()),
          x;
        try {
          x = await this.request("post", M ? Ge : "/worker/events", {
            ...this.uploadBody(v, y),
            ...(M && {
              worker_events: M.rows
            }),
            ...(S.length > 0 && {
              delivery_updates: S.map(W => ({
                event_id: W,
                status: "processed"
              }))
            })
          }, "client events", {
            timeout: timeout,
            parseBody: parseBody,
            uploadAttempt: y.attempt
          });
        } catch (error) {
          throw M?.settle(!1), error;
        } finally {
          if (S.length > 0) {
            let W = this.takeWaitingReceipts(Z => S.includes(Z));
            if (!x?.ok || x.data?.delivery_updates_applied !== !0) this.queueDeliveryAcks(W);
          }
        }
        let Q = x.ok ? x.data?.worker_results : void 0,
          K = Array.isArray(Q) && Q.length === M?.rows.length;
        if (M?.settle(K), M !== void 0 && x.ok) this.routeOnlyFailures = 0, this.ridePauses = 0;
        let status = x.ok ? 200 : x.status,
          te = M !== void 0 && x.ok && D(x.data) && Q === void 0;
        if ((M || S.length > 0) && !x.ok && (re(status) || M !== void 0 && $s.has(status))) {
          if (x = await this.request("post", "/worker/events", this.uploadBody(v, y), "client events (resent without worker_events and delivery_updates)", {
            timeout: timeout,
            parseBody: parseBody,
            uploadAttempt: "resend"
          }), x.ok && status !== 413) {
            if (M !== void 0 && re(status)) te = !0;else if (M !== void 0) this.noteRouteOnlyFailure(status);
            if (S.length > 0 && re(status)) this.receiptsRideRefused = !0, V("warn", "cli_ccr_receipts_ride_turned_off", {
              status: status
            });
          }
        } else if (M !== void 0) {
          if (!x.ok) this.failedRide = {
            status: status
          };
        } else if (failedRide !== void 0 && x.ok) this.noteRouteOnlyFailure(failedRide.status);
        if (te) this.ridesRefused = !0, V("warn", "cli_ccr_joint_upload_turned_off", {
          status: status
        });else if (M && status === 200 && !K && !this.loggedRowsLeftOut) this.loggedRowsLeftOut = !0, V("warn", "cli_ccr_joint_upload_rows_left_out");
        if (x.ok) {
          for (let Z of z) if (Z.ackedAtMs === void 0) Z.ackedAtMs = performance.now();
          let W = He(v);
          if (W) g("ccr_task_status_publish", W);
          if (this.noteBeatingEventsPostOk(v), this.reportDurableUpload(v, "accepted"), this.noteToolCallRowsSettled("client_events", "stored", v), this.noteClientRowsSettled("stored", v), N && hasSubscribersReports === this.hasSubscribersReports) this.setHasSubscribers(x.data?.has_subscribers, "no_report");
          this.tellSubscribersReported(x.data?.has_subscribers);
          return;
        }
        if (this.reportDurableUpload(v, Rt(x.status)), re(x.status)) {
          let W = v.filter(item => !item.ephemeral),
            count = v.length - W.length,
            status_2 = x.status;
          if (count > 0) {
            if (t(`CCRClient: client event POST rejected (${x.status}) \u2014 dropping ${count} ephemeral event(s), retrying ${W.length} durable event(s)`, {
              level: "warn"
            }), c("ccr_partial_messages", "ephemeral_dropped_on_4xx", {
              status: x.status,
              count: count
            }), v.splice(0, v.length, ...W), V("warn", "cli_worker_events_4xx_ephemeral_dropped", {
              status: x.status,
              count: count
            }), W.length === 0) return;
            this.reportDurableUpload(W, "sending");
            let se = await this.request("post", "/worker/events", this.uploadBody(W, y), "client events (durable retry)", {
              timeout: timeout,
              uploadAttempt: "resend"
            });
            if (se.ok) {
              let le = He(W);
              if (le) g("ccr_task_status_publish", le);
              this.noteBeatingEventsPostOk(W), this.reportDurableUpload(W, "accepted"), this.noteToolCallRowsSettled("client_events", "stored", W), this.noteClientRowsSettled("stored", W);
              return;
            }
            if (this.reportDurableUpload(W, Rt(se.status)), !re(se.status)) throw this.noteEventsPostFailed(se.status), se.fetchFailed ? this.retrySmaller("client_events", W, y, timeout, {
              bytes: W.reduce((acc, item) => acc + Buffer.byteLength(_(item)), 0)
            }) : new net("client event POST failed", se.retryAfterMs);
            status_2 = se.status;
          }
          if (W.length > 0) {
            this.droppedDurableEventBatches++, this.lastRateLimitKind = void 0, this.lastTaskList = void 0, this.noteToolCallRowsSettled("client_events", "dropped", W), this.noteClientRowsSettled("dropped", W);
            try {
              this.onDurableEventsDropped?.(W, status_2);
            } catch (error) {
              t(`CCRClient: onDurableEventsDropped threw; batch still dropped: ${d(error)}`, {
                level: "warn"
              });
            }
          }
          V("warn", "cli_worker_events_4xx_dropped", {
            status: status_2,
            count: W.length,
            ...Bt(W)
          });
          let ae = He(W);
          if (ae) m("ccr_task_status_publish", "status_events_4xx_dropped", ae);
          return;
        }
        if (this.rowsSentAgainStepAside(v), v.length === 0) return;
        if (this.noteEventsPostFailed(x.status), x.fetchFailed) throw this.retrySmaller("client_events", v, y, timeout);
        if (status === void 0 && x.reason === "no_auth_headers") {
          for (let W of Y) W.postedAtMs = void 0, W.postedWallMs = void 0;
          throw A?.(), new RIr("client event POST not sent");
        }
        throw new net("client event POST failed", x.retryAfterMs);
      }),
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "client_events"),
      onDrained: this.logUploadDrain.bind(this, "client_events"),
      onIdle: () => {
        if (this.giveBackRidingRows(), this.receiptsRide) this.sendWaitingReceipts(Ae);
      }
    });
    let w = n?.internalEventUploader;
    this.internalEventUploader = new Esn({
      maxBatchSize: 100,
      maxBatchBytes: () => w?.maxBatchBytes ?? Math.min(10 * Pe, this.workerSocket?.maxBatchBytes() ?? 1 / 0),
      maxQueueSize: 200,
      maxConsecutiveFailures: w?.maxConsecutiveFailures,
      onBatchDropped: (count_2, consecutive_failures) => {
        this.droppedInternalEventBatches++, V("warn", "cli_worker_internal_events_give_up_dropped", {
          count: count_2,
          consecutive_failures: consecutive_failures
        }), l("tengu_ccr_internal_events_dropped", {
          reason: b("give_up"),
          count: count_2,
          consecutive_failures: consecutive_failures
        });
      },
      send: async (v, y) => {
        let count_3 = this.dropOrphanedHandedOffLines(v);
        if (count_3 > 0) {
          if (V("warn", "cli_worker_internal_events_handoff_orphans_dropped", {
            count: count_3
          }), l("tengu_ccr_internal_events_dropped", {
            reason: b("handoff_orphan"),
            count: count_3
          }), v.length === 0) return;
        }
        let M = performance.now(),
          timeout_2 = gt(y, {
            maxMs: this.maxEventPostTimeoutMs,
            minMs: w?.requestTimeoutMs
          }),
          F = this.offerToEventsPost(v, y),
          S = F && (await F) ? {
            ok: !0
          } : await this.request("post", "/worker/internal-events", this.uploadBody(v, y), "internal events", {
            timeout: timeout_2,
            uploadAttempt: y.attempt
          });
        if (this.markInternalEventPostWatch(B => B.noteAttempt(v, M, S.ok)), S.ok) {
          this.noteToolCallRowsSettled("internal_events", "stored", v), Promise.resolve().then(() => this.onInternalBatchAcked?.(v)).catch(() => {});
          return;
        }
        if (re(S.status) && count_3 === 0 && y.mayResendInTwo()) throw l("tengu_ccr_internal_events_refused_will_split", {
          count: v.length,
          status: S.status
        }), new AIr();
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
          let count_4 = U(v, H => Dfo(H.payload) && typeof H.payload.requestId === "string");
          if (this.loggedRequestIdKept && count_4 > 0) m("ccr_worker_error_request_id_kept", `upload_refused_${S.status}`, {
            count: count_4,
            status: S.status
          });
          return;
        }
        if (S.fetchFailed) throw this.retrySmaller("internal_events", v, y, timeout_2);
        if (S.reason === "no_auth_headers") throw new RIr("internal event POST not sent");
        throw new net("internal event POST failed", S.nonOriginRefusal ? maxDelayMs : S.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: maxDelayMs,
      jitterMs: 500,
      holdMaxItems: 50,
      gatherTick: !0,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "internal_events"),
      onDrained: this.logUploadDrain.bind(this, "internal_events")
    }), this.deliveryUploader = new Esn({
      maxBatchSize: 64,
      maxQueueSize: 64,
      send: async v => {
        let y = await this.request("post", "/worker/events/delivery", {
          worker_epoch: this.workerEpoch,
          updates: v.map(item => ({
            event_id: item.eventId,
            status: item.status
          }))
        }, "delivery batch");
        if (y.ok) return;
        if (re(y.status)) {
          V("warn", "cli_worker_delivery_4xx_dropped", {
            status: y.status,
            count: v.length
          }), this.droppedDeliveryAckBatches++;
          return;
        }
        throw new net("delivery POST failed", y.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500
    }), this.setStreamEventFlushIntervalMs(n?.streamEventFlushIntervalMs), this.setStreamEventFirstFlushMs(n?.streamEventFirstFlushMs), this.setThinkingStartGoesAtOnce(n?.thinkingStartGoesAtOnce), this.setStreamEventWindowRunsFromLastFlush(n?.streamEventWindowRunsFromLastFlush), this.setHeldBunchFlushMs(n?.heldBunchFlushMs), this.setThinkingFlushMs(n?.thinkingFlushMs), this.setToolInputFlushMs(n?.toolInputFlushMs), this.setLiveTwinWaitMs(n?.liveTwinWaitMs), this.setNoSubscriberStreamEventFlushIntervalMs(n?.noSubscriberStreamEventFlushIntervalMs), this.setNoSubscriberUploadHoldMs(n?.noSubscriberUploadHoldMs), this.setDropUnwatchedStreamEvents(n?.dropUnwatchedStreamEvents), e.setOnEvent(v => {
      if (this.processExiting() && Ze(v)) return;
      this.noteSettingsRequest(v.payload);
      let y = D(v.payload) && v.payload.type === "control_request" && D(v.payload.request) ? v.payload.request.subtype : void 0;
      if (an.has(y)) {
        for (let O of [v.event_id, v.payload.uuid]) if (typeof O === "string") this.housekeepingRequestIds.add(O), fe(this.housekeepingRequestIds);
      }
      this.reportDelivery(v.event_id, "received", D(v.payload) && v.payload.type === "user" && typeof v.payload.uuid === "string" ? v.payload.uuid : void 0, {
        controlTraffic: yt(v.payload),
        settingsRequest: Vn.has(y)
      });
    }), e.setOnHeartbeatProbe(() => {
      this.setHasSubscribers(void 0, "reset"), this.heartbeatNow("probe");
    }), e.setOnCheckpointRequest(() => this.checkpointForViewer("watcher")), e.setOnReconnected(() => {
      if (this.resyncAfterReconnect(), n?.onStreamReconnected?.(), this.holdsAcrossModelCalls()) this.checkpointForViewer("reconnect");
    }), this.unsubscribeIdleTracker = this.beatOnReactivation ? this.idleTracker?.onActivity(() => this.sendReactivationBeat()) : void 0;
  }
  maxAdvisedIntervalFor(e) {
    return e ? Math.floor(Rc / (1 + this.heartbeatJitterFraction)) : Bs;
  }
  setFeatureGatedOptions({
    advertiseHeartbeatProbeSupport: advertiseHeartbeatProbeSupport,
    beatOnStaleReconnect: beatOnStaleReconnect,
    beatOnReactivation: beatOnReactivation,
    skipRedundantHeartbeats: skipRedundantHeartbeats
  }) {
    this.advertiseHeartbeatProbeSupport = advertiseHeartbeatProbeSupport, this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(advertiseHeartbeatProbeSupport), this.beatOnStaleReconnect = beatOnStaleReconnect, this.skipRedundantHeartbeats = skipRedundantHeartbeats;
    let h = beatOnReactivation && this.idleTracker !== void 0;
    if (h !== this.beatOnReactivation) this.beatOnReactivation = h, this.unsubscribeIdleTracker?.(), this.unsubscribeIdleTracker = h && !this.closed ? this.idleTracker?.onActivity(() => this.sendReactivationBeat()) : void 0;
  }
  async initialize(e, s) {
    let n = Date.now();
    if (Object.keys(this.getAuthHeaders()).length === 0) throw new QIe("no_auth_headers");
    if (e === void 0) e = I7o();
    if (isNaN(e)) throw new QIe("missing_epoch");
    if (this.workerEpoch = e, !this.flushPolicy) this.takeUpFlushPolicy(void 0);
    let transcriptAfterEventId;
    if (s?.transcriptAfterEventId) {
      let K = s.transcriptAfterEventId.catch(() => {
        return;
      });
      await new Promise(j => setImmediate(j)), transcriptAfterEventId = await we(K, s.tipWaitMs ?? gn);
    }
    let h = s?.onTranscriptPosition;
    if (h && transcriptAfterEventId === void 0) h(void 0);
    let abortController = new AbortController(),
      v = !1,
      abortController_2 = new AbortController(),
      O = this.getWorkerState("worker_state", !1, AbortSignal.any([this.closeAbort.signal, abortController.signal]), {
        transcriptAfterEventId: transcriptAfterEventId
      });
    if (h && transcriptAfterEventId !== void 0) O.then(K => h(K.transcriptForeground), () => h(void 0));
    let M = await Promise.race([O.then(K => (v = !0, K.metadata), () => (v = !0, {
      external: null,
      internal: null,
      readFailed: !0
    })), J(this.initStateGetOrderingBoundMs, abortController_2.signal).then(() => "pending")]);
    abortController_2.abort();
    let P = this.reportParkAtInit ? Tn(M) : void 0,
      F = this.followsServedPolicy ? this.flushPolicy?.metadataNeverSent : void 0,
      S = {
        ...this.initExternalMetadata,
        ...Object.fromEntries(Array.from(F ?? [], K => [K, null]))
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
      q = new Set(),
      X = 10,
      z = 0;
    for (let K = 1; K <= X; K++) {
      if (this.closed) break;
      if (z = K, N = await this.request("put", "/worker", H, "PUT worker (init)"), N.ok || this.closed) break;
      if (N.reason) q.add(N.reason);
      if (this.onDiagnostic?.(`PUT /worker failed (${N.reason ?? "unknown"}) attempt=${K}/${X}, ${Math.round((Date.now() - n) / 1000)}s elapsed`, "warn", "worker_registration_attempt_failed"), re(N.status)) {
        if (P?.status === "requires_action") {
          P = {
            status: "idle",
            reason: "park_rejected"
          }, H = B, K--;
          continue;
        }
        break;
      }
      if (K < X) {
        let j = Math.min(500 * 2 ** (K - 1), 30000) + Math.random() * 500;
        await J(j);
      }
    }
    if (!N.ok) {
      if (!this.closed) V("error", "cli_worker_init_put_retries_exhausted"), this.onDiagnostic?.(`PUT /worker retries exhausted: ${z} attempts over ${Math.round((Date.now() - n) / 1000)}s, errors=[${[...q].join(",") || "unknown"}]`, "warn", "worker_registration_gave_up");
      throw new QIe("worker_register_failed", N.status, N.fetchFailed === !0);
    }
    this.currentState = P?.status ?? this.initialWorkerStatus, this.startReportsWaitUntilMs = this.currentState === "idle" ? performance.now() + this.startReportsMaxWaitMs : 0;
    let {
      worker_epoch: worker_epoch,
      ...R
    } = H;
    if (this.workerState.remember(R), this.applyUploadHold("idle"), this.parkReportedAtInitRequestId = P?.status === "requires_action" ? P.requestId : void 0, this.startHeartbeat(), !this.closed) {
      nqi(() => {
        this.writeEvent({
          type: "keep_alive"
        });
      });
      let keepAliveAtWorkStart = this.keepAliveAtWorkStart;
      if (keepAliveAtWorkStart) this.stopWorkStartKeepAlive = zFt(() => {
        try {
          if (Date.now() - this.lastEventsAnswerOrPulseAtMs >= kt && keepAliveAtWorkStart()) this.lastEventsAnswerOrPulseAtMs = Date.now(), this.writeEvent({
            type: "keep_alive"
          });
        } catch (error) {
          a(error);
        }
      });
      if (this.gatesToolCalls) this.stopToolCallGate = i$i(j => this.gateToolCall(j));
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
    if (A) abortController.abort();
    let {
      metadata: metadata,
      durationMs: Q
    } = await O;
    if (this.stateReadEndsAtRegistration && metadata.readFailed) t("CCRClient: GET /worker had not succeeded when the worker registered; continuing without the stored worker state", {
      level: "warn"
    });
    if (this.clientRowsOwed.workerRecordRead(metadata, new Date()), this.clientRowsOwed.spansGivenUpAtStart > 0) m("ccr_client_rows_owed", "gave_up_after_tries", {
      spans: this.clientRowsOwed.spansGivenUpAtStart
    });
    if (this.sessionModelTurnStored = metadata.internal?.model_turn_stored === !0, !metadata.readFailed) this.recordAtStart = {
      ...metadata.external,
      ...S
    };
    if (!this.closed) V("info", "cli_worker_state_restored", {
      duration_ms: Q,
      had_state: metadata.external !== null || metadata.internal !== null,
      read_failed: metadata.readFailed === !0,
      read_abandoned_at_registration: A && metadata.readFailed === !0
    });
    return P ? {
      ...metadata,
      initParkReport: Mn(P.status, metadata)
    } : metadata;
  }
  async getWorkerState(e = "worker_state", s = !1, signal = this.closeAbort.signal, {
    transcriptAfterEventId: transcriptAfterEventId_2
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
    let status_3,
      y = await m$.getWithRetry(this.readSource, `${this.sessionBaseUrl}/worker${je(s, transcriptAfterEventId_2)}`, w, e, void 0, transcriptAfterEventId_2 === void 0 ? void 0 : O => {
        status_3 = O;
      }, {
        signal: signal
      });
    if (y === null && status_3 !== void 0) V("warn", "cli_worker_transcript_position_refused", {
      status: status_3
    }), y = await m$.getWithRetry(this.readSource, `${this.sessionBaseUrl}/worker${je(s, void 0)}`, w, e, void 0, void 0, {
      signal: signal
    });
    return {
      metadata: {
        external: y?.worker?.external_metadata ?? null,
        internal: y?.worker?.internal_metadata ?? null,
        ...(y === null && {
          readFailed: !0
        })
      },
      projectsAssertion: Dt(y),
      transcriptForeground: Mr(y),
      durationMs: Date.now() - h
    };
  }
  get currentWorkerEpoch() {
    return this.workerEpoch;
  }
  readOwnClientEvent(e) {
    return m$.readOwnClientEventFrom(this.readSource, e);
  }
  static async readOwnClientEventFrom(e, s) {
    let url = `${e.sessionBaseUrl}/worker/events/${encodeURIComponent(s.toLowerCase())}`,
      r = {
        kind: "unavailable",
        why: "network"
      };
    for (let h = 1; h <= maxAttempts; h++) {
      let w;
      try {
        w = e.getAuthHeaders();
      } catch {
        return {
          kind: "unavailable",
          why: "no_auth_headers"
        };
      }
      if (Object.keys(w).length === 0) return {
        kind: "unavailable",
        why: "no_auth_headers"
      };
      let v;
      try {
        v = await oLt(url, {
          headers: {
            ...w,
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": cb(),
            "User-Agent": ui()
          },
          signal: AbortSignal.timeout(1e4),
          ...ba({
            url: url
          })
        }, e.ownConnectionPool, e.leavesPoolAfterServerError);
      } catch {
        r = {
          kind: "unavailable",
          why: "network"
        };
      }
      if (v !== void 0) {
        let y = await v.json().catch(() => {
          return;
        });
        if (v.ok) return mr(y, s);
        if (v.status === 404 && pr(y)) return {
          kind: "absent"
        };
        if (r = {
          kind: "unavailable",
          why: fr(v.status)
        }, v.status < 500 || v.status === 501) return r;
      }
      if (h < maxAttempts) await J(Math.min(500 * 2 ** (h - 1), 4000) + Math.random() * 500);
    }
    return r;
  }
  async readProjectsBinding() {
    let {
      metadata: metadata_2,
      projectsAssertion: s
    } = await this.getWorkerState("projects_binding", !0);
    return metadata_2.readFailed ? {
      read: !1
    } : {
      read: !0,
      assertion: s
    };
  }
  async readWorkerState() {
    return (await this.getWorkerState("worker_state_reread")).metadata;
  }
  static async readProjectsBindingFor(e, s) {
    let n = ZXr(e, s);
    if (Object.keys(s()).length === 0) return {
      read: !1
    };
    let r = await m$.getWithRetry(n, `${n.sessionBaseUrl}/worker${je(!0, void 0)}`, s(), "projects_binding");
    return r === null ? {
      read: !1
    } : {
      read: !0,
      assertion: Dt(r)
    };
  }
  request(e, s, n, r, h = {}) {
    let w = G_s("uploads");
    try {
      return this.sendRequest(e, s, n, r, h);
    } finally {
      V_s(w);
    }
  }
  async sendRequest(method, path, n, r, {
    timeout: h = Ke,
    parseBody: parseBody_2 = !1,
    countTowardEscalation = !0,
    signal: signal_2,
    onLateSocketAnswer: onLateSocketAnswer,
    uploadAttempt: uploadAttempt,
    outsideItsLane = !1
  }) {
    let F = this.getAuthHeaders();
    if (Object.keys(F).length === 0) return {
      ok: !1,
      reason: "no_auth_headers"
    };
    let url_2 = `${this.sessionBaseUrl}${path}`,
      B = signal_2 ? os(signal_2, {
        timeoutMs: h,
        refTimer: !0
      }) : void 0,
      H = !1,
      Authorization = F.Authorization;
    try {
      let body = _(n),
        X = performance.now(),
        z = signal_2 ? void 0 : path === "/worker/heartbeat" ? this.workerSocket?.beat(body, h, j => onLateSocketAnswer?.(j)) : this.workerSocket?.carry(path, body, h),
        Y = z && (await z),
        R = Y;
      if (!R) {
        if (z && path === "/worker/heartbeat" && this.closed) return {
          ok: !1,
          reason: "closed"
        };
        B ??= os(void 0, {
          timeoutMs: z && path === "/worker/heartbeat" ? Math.max(0, h - (performance.now() - X)) : h,
          refTimer: !0,
          timeoutError: !0
        });
        let j = {
          method: method.toUpperCase(),
          headers: {
            ...F,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": cb(),
            "User-Agent": ui(),
            ...(uploadAttempt !== void 0 && {
              [Gs]: uploadAttempt
            })
          },
          body: body,
          signal: B.signal,
          ...ba({
            url: url_2
          })
        };
        if (z) {
          let te = {};
          try {
            te = this.getAuthHeaders();
          } catch (error) {
            t(`CCRClient: could not read credentials again for a request the worker socket handed to POST: ${d(error)}`, {
              level: "warn"
            });
          }
          if (Object.keys(te).length > 0) {
            let W = j.headers;
            for (let Z of Object.keys(F)) delete W[Z];
            Object.assign(W, te), Authorization = te.Authorization;
          }
        }
        Object.assign(j.headers, this.tickets.headersFor(Authorization)), R = this.gzipRequestBodyFetch ? await this.gzipRequestBodyFetch(url_2, j, te => oLt(url_2, te, this.ownConnectionPool, this.leavesPoolAfterServerError)) : await oLt(url_2, j, this.ownConnectionPool, this.leavesPoolAfterServerError);
      }
      if (H = !0, !Y) this.tickets.note(Authorization, R);
      if (R.ok) {
        this.consecutiveAuthFailures = 0, this.consecutiveNotFound = 0;
        let j = Et[path];
        if (!outsideItsLane) this.reportNonOriginRun("onCleared", j), this.nonOriginRuns.delete(j);
        for (let [te, W] of this.nonOriginRuns) if (te !== j) W.othersPassed = !0;
        if (parseBody_2) try {
          return {
            ok: !0,
            data: await R.json()
          };
        } catch {
          return {
            ok: !0
          };
        }
        return await n6(R), {
          ok: !0
        };
      }
      let A;
      if (R.status === 409 && !this.closed) A = await qe(R);else await n6(R);
      if (this.closed) return {
        ok: !1,
        status: R.status,
        reason: `http_${R.status}`
      };
      if (R.status === 409) this.handleEpochMismatch(A);
      if (R.status === 404 && countTowardEscalation && path !== Ge) {
        if (this.consecutiveNotFound++, this.consecutiveNotFound >= cn) t(`CCRClient: ${this.consecutiveNotFound} consecutive 404s \u2014 session gone, exiting`, {
          level: "error"
        }), V("error", "cli_worker_session_not_found", void 0, this.lastLineWhen), this.onDiagnostic?.(`${this.consecutiveNotFound} consecutive 404s on ${path} \u2014 session gone, exiting`, "warn", "session_not_found"), this.escalateEpochMismatch("session_not_found");
      }
      let source = R.status !== 403 ? void 0 : Y ? "origin" : nRe(j => R.headers.get(j)),
        nonOrigin403Transient = this.nonOrigin403Transient,
        nonOriginRefusal = nonOrigin403Transient !== !1 && PQe(source);
      if (nonOriginRefusal && typeof nonOrigin403Transient === "object" && !outsideItsLane) {
        let j = Et[path],
          sinceMs = performance.now(),
          W = this.nonOriginRuns.get(j) ?? {
            sinceMs: sinceMs,
            refusals: 0,
            windowsSpent: 0,
            othersPassed: !1
          };
        if (this.nonOriginRuns.set(j, W), W.refusals++, nonOriginRefusal = sinceMs - W.sinceMs < nonOrigin403Transient.windowMs, nonOriginRefusal) try {
          nonOrigin403Transient.onRefused(j);
        } catch (error) {
          t(`CCRClient: onRefused threw: ${d(error)}`, {
            level: "error"
          });
        } else if (sinceMs - W.sinceMs >= (W.windowsSpent + 1) * nonOrigin403Transient.windowMs) W.windowsSpent++, this.reportNonOriginRun("onWindowSpent", j);
      }
      if (R.status === 401 || R.status === 403) {
        let j = zd(),
          te = j ? bU(j) : null;
        if (te !== null && te * 1000 < Date.now()) t(`CCRClient: session_token expired (exp=${new Date(te * 1000).toISOString()}) \u2014 no refresh was delivered, exiting`, {
          level: "error"
        }), V("error", "cli_worker_token_expired_no_refresh", void 0, this.lastLineWhen), this.onDiagnostic?.(`session_token expired (exp=${new Date(te * 1000).toISOString()}) \u2014 no refresh delivered, exiting`, "warn", "token_expired"), this.escalateEpochMismatch("token_expired");
        if (countTowardEscalation && !nonOriginRefusal) {
          if (this.consecutiveAuthFailures++, this.consecutiveAuthFailures >= dn) t(`CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`, {
            level: "error"
          }), V("error", "cli_worker_auth_failures_exhausted", void 0, this.lastLineWhen), this.onDiagnostic?.(`${this.consecutiveAuthFailures} consecutive auth failures (HTTP ${R.status}) with valid-looking token \u2014 exiting`, "warn", "auth_exhausted"), this.escalateEpochMismatch("auth_exhausted");
        }
      }
      if (t(`CCRClient: ${r} returned ${R.status}`, {
        level: "warn"
      }), V("warn", "cli_worker_request_failed", {
        method: method,
        path: path,
        status: R.status,
        ...(source !== void 0 && {
          source: source
        })
      }), R.status === 429) {
        let j = R.headers.get("retry-after"),
          te = j ? parseInt(j, 10) : NaN;
        if (!isNaN(te) && te >= 0) return {
          ok: !1,
          retryAfterMs: te * 1000,
          status: R.status,
          reason: `http_${R.status}`
        };
      }
      return {
        ok: !1,
        status: R.status,
        reason: `http_${R.status}`,
        ...(nonOriginRefusal && {
          nonOriginRefusal: nonOriginRefusal
        })
      };
    } catch (error) {
      t(`CCRClient: ${r} failed: ${d(error)}`, {
        level: "warn"
      }), V("warn", "cli_worker_request_error", {
        method: method,
        path: path,
        error_code: ke(error)
      });
      let reason = `fetch_failed:${ke(error)}`;
      return H ? {
        ok: !1,
        reason: reason
      } : {
        ok: !1,
        fetchFailed: !0,
        reason: reason
      };
    } finally {
      B?.cleanup();
    }
  }
  reportNonOriginRun(e, lane) {
    let n = this.nonOriginRuns.get(lane);
    if (n === void 0 || typeof this.nonOrigin403Transient !== "object") return;
    let runMs = Math.round(performance.now() - n.sinceMs),
      {
        unsentClientEvents: unsentClientEvents,
        unsentInternalEvents: unsentInternalEvents
      } = this.uploadBacklog();
    t(`CCRClient: ${lane} ${e === "onCleared" ? "accepted again" : "still refused"} after ${runMs}ms of non-origin 403s (${n.refusals} refusals)`, {
      level: "warn"
    });
    try {
      this.nonOrigin403Transient[e]({
        lane: lane,
        refusals: n.refusals,
        runMs: runMs,
        windowsSpent: n.windowsSpent,
        othersPassed: n.othersPassed,
        backlog: unsentClientEvents + unsentInternalEvents
      });
    } catch (error) {
      t(`CCRClient: ${e} threw: ${d(error)}`, {
        level: "error"
      });
    }
  }
  reportState(worker_status, s) {
    if (worker_status === this.currentState && !s) return;
    let parkReportedAtInitRequestId = this.parkReportedAtInitRequestId;
    if (this.parkReportedAtInitRequestId = void 0, parkReportedAtInitRequestId !== void 0 && worker_status === "requires_action" && this.currentState === "requires_action" && $2(s) === parkReportedAtInitRequestId) return;
    if (worker_status === "idle") this.openPickupBarriers(this.pickupBarriers.length), this.openTurn();
    this.currentState = worker_status, this.startReportsWaitUntilMs = 0, this.workerState.enqueue({
      worker_status: worker_status,
      requires_action_details: s ? Vt(s) : null,
      internal_metadata: {
        reply_degraded: Imi(),
        ...(this.guardsClientRows !== void 0 && this.clientRowsOwed.stateReported(worker_status, new Date(), this.flagsRefreshed() && this.clientRowsAreGuarded()))
      },
      ...(this.autocompactStateStored !== void 0 && {
        external_metadata: {
          autocompact_state: this.autocompactStateStored
        }
      })
    }), this.autocompactStateStored = void 0, this.applyUploadHold(worker_status === "running" ? "idle" : worker_status);
  }
  reportMetadata(e) {
    let s = this.flushPolicy?.metadataNeverSent,
      n = this.withoutRepeatsOfRecord(s?.size && this.followsServedPolicy ? Ro(e, (r, h) => r === null || !s.has(h)) : e);
    if (n !== e && Object.keys(n).length === 0) return;
    this.workerState.enqueue({
      external_metadata: vr(n)
    });
  }
  withoutRepeatsOfRecord(e) {
    let s = Object.keys(e).filter(item => {
      if (!Zn.has(item) || this.reportedKeys.has(item)) return !1;
      return this.reportedKeys.add(item), this.recordAtStart !== void 0 && ln(e[item] ?? void 0, this.recordAtStart[item] ?? void 0);
    });
    return s.length > 0 ? Ro(e, (n, r) => !s.includes(r)) : e;
  }
  reportInternalMetadata(internal_metadata_5) {
    this.workerState.enqueue({
      internal_metadata: internal_metadata_5
    });
  }
  handleEpochMismatch(e) {
    let s = e ?? "epoch_conflict",
      reason_2 = e ?? "unattributed";
    t(`CCRClient: Epoch mismatch (409, reason=${reason_2}), shutting down`, {
      level: "error"
    }), V("error", s === "epoch_stale" ? "cli_worker_epoch_stale" : s === "session_not_active" ? "cli_worker_session_not_active" : s === "organization_moved_away" ? "cli_worker_organization_moved_away" : "cli_worker_epoch_mismatch", {
      reason: reason_2
    }, this.lastLineWhen);
    let r = s === "epoch_stale" ? "stale registration (no live successor)" : s === "session_not_active" ? "session archived or no longer active" : s === "organization_moved_away" ? "organization moved to another region" : s === "superseded_by_worker" ? "superseded by a newer worker" : "unattributed conflict, treated as superseded";
    this.onDiagnostic?.(`worker epoch mismatch (409) reason=${reason_2} epoch=${this.workerEpoch} \u2014 ${r}, exiting`, "warn", s), this.escalateEpochMismatch(s);
  }
  escalateEpochMismatch(e) {
    return this.lastEpochMismatchCause = e, this.epochMismatchCount++, this.epochSuperseded = !0, this.onEpochMismatch(e);
  }
  startHeartbeat() {
    if (this.stopHeartbeat(), this.closed) return;
    let e = () => {
        let n = Math.max(this.heartbeatIntervalMs * this.heartbeatJitterFraction, this.keepAlivesGoAlone() ? On : 0) * (2 * Math.random() - 1);
        this.heartbeatTimer = setTimeout(s, Math.min(Rc, this.heartbeatIntervalMs + n));
      },
      s = () => {
        let lastCadenceTickAtMs = this.lastCadenceTickAtMs;
        if (this.lastCadenceTickAtMs = Date.now(), this.canSkipCadenceBeat(lastCadenceTickAtMs)) this.skippedPreviousCadenceBeat = !0, this.idleTracker?.sampleIdleSeconds(), t("CCRClient: Heartbeat skipped (events beat)");else this.sendHeartbeat();
        if (this.heartbeatTimer === null) return;
        if (i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES && afe() && (this.keepAlivesGoAlone() || this.holdsAcrossModelCalls() && this.turnHold === "whole" && this.lastCadenceTickAtMs - this.lastEventsAnswerOrPulseAtMs >= kt)) this.lastEventsAnswerOrPulseAtMs = this.lastCadenceTickAtMs, this.writeEvent({
          type: "keep_alive"
        });
        e();
      };
    this.lastCadenceTickAtMs = Date.now(), e();
  }
  noteBeatingEventsPostOk(e) {
    if (this.lastEventsAnswerOrPulseAtMs = Date.now(), this.eventsPostsFailingSinceMs = void 0, this.eventsPostRateLimited = !1, !this.workerSocket?.isTransport() && e.some(item => !item.ephemeral)) this.lastBeatingEventsPostOkAtMs = Date.now();
  }
  canSkipCadenceBeat(e) {
    let s = this.heartbeatIntervalMs * (1 + this.heartbeatJitterFraction);
    if (!this.skipRedundantHeartbeats || this.closed || this.lastBeatingEventsPostOkAtMs < e || this.lastBeatingEventsPostOkAtMs > this.lastCadenceTickAtMs || this.lastCadenceTickAtMs - this.lastBeatingEventsPostOkAtMs > s * _t || this.heartbeatIntervalMs > this.seedHeartbeatIntervalMs || this.isIdleAdvised() || this.consecutiveHeartbeatFailures > 0 || this.skippedPreviousCadenceBeat) return !1;
    let n = s * 2;
    return this.clampToTokenLifetime(n) >= n;
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null;
  }
  clearProbeBeatTimer() {
    if (this.probeBeatTimer) clearTimeout(this.probeBeatTimer), this.probeBeatTimer = null;
  }
  async releaseLease({
    drained = !1
  } = {}) {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    try {
      let s = await this.request("post", "/worker/heartbeat", {
        session_id: this.sessionId,
        worker_epoch: this.workerEpoch,
        release_lease: !0,
        ...(drained && {
          drained: !0
        })
      }, "POST worker/heartbeat (release)", {
        timeout: timeout_3,
        countTowardEscalation: !1
      });
      if (s.ok) g("ccr_worker_lease_release");else if (s.status !== 409) c("ccr_worker_lease_release", s.status !== void 0 ? `http_${s.status}` : "send_failed");
    } catch (error) {
      a(error), c("ccr_worker_lease_release", "send_threw");
    }
  }
  sendGoodbye() {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    if (this.currentState === "running") {
      V("info", "cli_worker_goodbye_skipped_mid_turn"), this.leftMidTurn = !0;
      return;
    }
    if (tn() && NQe("resume_load") && !i.CLAUDE_CODE_DISABLE_RESUME_LOAD_GOODBYE_SKIP && this.skipsGoodbyeDuringResumeLoad()) {
      V("info", "cli_worker_goodbye_skipped_resume_load");
      return;
    }
    this.goodbyeFlushed = this.request("put", "/worker", {
      worker_epoch: this.workerEpoch,
      connection_status: "disconnected"
    }, "PUT worker (goodbye)", {
      timeout: timeout_3,
      countTowardEscalation: !1
    }).then(e => {
      if (e.ok) g("ccr_worker_goodbye");else if (e.status !== 409) c("ccr_worker_goodbye", e.status !== void 0 ? `http_${e.status}` : "send_failed");
    }).catch(() => {
      c("ccr_worker_goodbye", "send_threw");
    });
  }
  heartbeatNow(e = "probe") {
    if (this.closed) return;
    if (e === "probe" ? this.pendingBeatTrigger === "reactivate" : e === "reactivate" && this.pendingBeatTrigger === "probe") this.restoreReactivationArm();
    if (e === "probe" || this.pendingBeatTrigger === null || e === "reactivate" && this.pendingBeatTrigger !== "probe") this.pendingBeatTrigger = e;
    if (this.heartbeatInFlight) {
      this.pendingForcedBeat = !0;
      return;
    }
    let n = Date.now() - this.lastHeartbeatSentAtMs;
    if (n < this.probeBeatSpacingMs) {
      if (this.probeBeatTimer) return;
      this.probeBeatTimer = setTimeout(() => {
        this.probeBeatTimer = null, this.refireForcedBeat();
      }, this.probeBeatSpacingMs - n);
      return;
    }
    let r = this.pendingBeatTrigger ?? e;
    this.pendingBeatTrigger = null, this.clearProbeBeatTimer(), this.sendHeartbeat(r);
  }
  refireForcedBeat() {
    let e = this.pendingBeatTrigger ?? "probe";
    if (e === "resync_stale" && !this.staleReconnectBeatWanted()) {
      this.pendingBeatTrigger = null, this.clearProbeBeatTimer();
      return;
    }
    if (e === "reactivate") {
      if (this.restoreReactivationArm(), !this.reactivationBeatWanted()) {
        this.pendingBeatTrigger = null, this.clearProbeBeatTimer();
        return;
      }
      this.reactivationBeatArmed = !1;
    }
    this.heartbeatNow(e);
  }
  reactivationBeatWanted() {
    return this.beatOnReactivation && this.reactivationBeatArmed && this.isIdleAdvised() && Date.now() - this.lastHeartbeat429AtMs > this.seedHeartbeatIntervalMs;
  }
  restoreReactivationArm() {
    this.reactivationBeatArmed = this.idleGrantLatched;
  }
  armReactivationIfEarned(e, s) {
    if (this.beatOnReactivation && e !== void 0 && e >= s) this.reactivationBeatArmed = !0;
  }
  sendReactivationBeat() {
    if (!this.reactivationBeatWanted()) return;
    this.reactivationBeatArmed = !1, this.heartbeatNow("reactivate");
  }
  isIdleAdvised() {
    return this.advertiseHeartbeatProbeSupport && this.idleGrantLatched;
  }
  applyShorterIntervalNow(e) {
    if (e >= this.heartbeatIntervalMs) return;
    if (this.heartbeatIntervalMs = e, this.heartbeatTimer !== null) this.startHeartbeat();
  }
  clampToTokenLifetime(e) {
    if (!this.advertiseHeartbeatProbeSupport || !this.adoptRefreshedAuth) return e;
    let s = zd(),
      n = s ? bU(s) : null;
    if (n === null) return e;
    let r = n * 1000 - Date.now() - Hs;
    if (r >= e) return e;
    return Math.max(ft, r);
  }
  reclampCurrentIntervalToTokenLifetime() {
    let to_ms = this.clampToTokenLifetime(this.heartbeatIntervalMs);
    if (to_ms < this.heartbeatIntervalMs) V("info", "cli_heartbeat_interval_updated", {
      from_ms: this.heartbeatIntervalMs,
      to_ms: to_ms
    }), this.applyShorterIntervalNow(to_ms);
  }
  renewStream() {
    let e = () => this.readTransport.renewConnection();
    if (this.workerSocket) this.workerSocket.whenQuiet(e);else e();
  }
  resyncAfterReconnect() {
    if (this.isIdleAdvised()) {
      this.heartbeatNow("resync");
      return;
    }
    if (this.staleReconnectBeatWanted()) this.heartbeatNow("resync_stale");
  }
  staleReconnectBeatWanted() {
    if (!this.beatOnStaleReconnect || this.heartbeatIntervalMs <= this.seedHeartbeatIntervalMs) return !1;
    let e = Date.now();
    if (e - this.lastHeartbeatSuccessAtMs <= this.heartbeatIntervalMs * _t) return !1;
    return e - this.lastHeartbeat429AtMs > this.heartbeatIntervalMs;
  }
  resetHeartbeatStreak() {
    this.consecutiveHeartbeatFailures = 0, this.heartbeatLostFiredForStreak = !1;
  }
  async sendHeartbeat(e) {
    if (this.closed) {
      this.stopHeartbeat();
      return;
    }
    if (this.workerState.sendWaiting(this.followsServedPolicy ? this.flushPolicy?.metadataMaxWaitMs : 0), this.heartbeatInFlight) return;
    this.heartbeatInFlight = !0, this.lastHeartbeatSentAtMs = Date.now();
    let lastHeartbeatSentAtMs = this.lastHeartbeatSentAtMs,
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
        idle_seconds = this.advertiseHeartbeatProbeSupport ? h : void 0,
        v = await this.request("post", "/worker/heartbeat", {
          session_id: this.sessionId,
          worker_epoch: this.workerEpoch,
          ...(this.advertiseHeartbeatProbeSupport && {
            supports_heartbeat_probe: !0,
            current_interval_seconds: Math.round(this.heartbeatIntervalMs / 1000),
            ...(idle_seconds !== void 0 && {
              idle_seconds: idle_seconds
            })
          })
        }, "Heartbeat", {
          timeout: Math.max(Ls, Math.min(zt, this.heartbeatIntervalMs * (1 - this.heartbeatJitterFraction) - jt)),
          parseBody: !0,
          countTowardEscalation: e === void 0,
          onLateSocketAnswer: y => {
            r.succeededLateOnSocket = !0, this.takeUpLateBeat(y, lastHeartbeatSentAtMs, n, idle_seconds);
          }
        });
      if (!v.ok && v.reason === "closed") return;
      if (this.lastSettledBeat = Math.max(this.lastSettledBeat, n), !v.ok && r.succeededLateOnSocket) {
        if (v.status === 429) this.lastHeartbeat429AtMs = Date.now();
        t("CCRClient: Heartbeat succeeded late on the worker socket; its POST failed, which is not counted as a missed heartbeat");
      }
      if (!v.ok && !r.succeededLateOnSocket) {
        if (v.fetchFailed && v.reason === "fetch_failed:TimeoutError" && this.leavesPoolAfterServerError?.()) Cpo();
        if (e === "probe") m("ccr_heartbeat_probe", "beat_failed");else if (e === "resync_stale") m("ccr_reconnect_beat", "beat_failed");else if (e === "reactivate") m("ccr_reactivation_beat", "beat_failed");
        if (v.status === 429) {
          if (this.lastHeartbeat429AtMs = Date.now(), e === "reactivate") this.restoreReactivationArm();
        }
        if (this.isIdleAdvised() && v.status !== 429) V("warn", "cli_heartbeat_idle_reverted_on_failure", {
          status: v.status
        }), this.idleGrantLatched = !1, this.reactivationBeatArmed = !1, this.applyShorterIntervalNow(this.seedHeartbeatIntervalMs);
        if (this.reclampCurrentIntervalToTokenLifetime(), v.status !== void 0 && qs.has(v.status) && !v.nonOriginRefusal) {
          this.resetHeartbeatStreak();
          return;
        }
        if (!this.readTransport.isReadStreamRecentlyAlive()) {
          this.resetHeartbeatStreak();
          return;
        }
        if (this.consecutiveHeartbeatFailures === 0) this.heartbeatStreakStartedAtMs = Date.now();
        if (this.consecutiveHeartbeatFailures++, !this.heartbeatLostFiredForStreak && this.consecutiveHeartbeatFailures >= Ds && Date.now() - this.heartbeatStreakStartedAtMs >= this.readTransport.getReadStreamRecentLivenessWindowMs()) {
          this.heartbeatLostFiredForStreak = !0;
          try {
            this.onHeartbeatLost?.();
          } catch (error) {
            a(error);
          }
        }
        return;
      }
      if (e === "probe") g("ccr_heartbeat_probe");else if (e === "resync_stale") g("ccr_reconnect_beat");else if (e === "reactivate") g("ccr_reactivation_beat");
      if (v.ok) t("CCRClient: Heartbeat sent"), await this.takeUpBeatAnswer(v.data, lastHeartbeatSentAtMs, n, idle_seconds);
    } finally {
      if (this.heartbeatInFlight = !1, this.pendingForcedBeat && !this.closed) this.pendingForcedBeat = !1, this.refireForcedBeat();
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
        M.then(S => {
          if (O && S.adopted) this.lastAuthRefreshBadReason = null, g("ccr_worker_auth_refresh"), V("info", "cli_heartbeat_refreshed_auth_late_adopted"), this.renewSocketForNewToken();
        }, () => {});
        let P = await we(M, Math.min(Gt, this.heartbeatIntervalMs)),
          F;
        if (P === void 0) O = !0, F = {
          adopted: !1,
          reason: "adopt_timeout"
        };else F = P;
        if (V("info", "cli_heartbeat_refreshed_auth_signal", {
          adopted: F.adopted,
          reason: F.reason,
          expires_in_seconds: e.refreshed_auth.expires_in_seconds
        }), F.adopted) g("ccr_worker_auth_refresh"), this.lastAuthRefreshBadReason = null, y = !0;else if (F.reason && F.reason !== "unchanged" && F.reason !== this.lastAuthRefreshBadReason) this.lastAuthRefreshBadReason = F.reason, m("ccr_worker_auth_refresh", F.reason);
      } catch {
        if (this.lastAuthRefreshBadReason !== "adopt_threw") this.lastAuthRefreshBadReason = "adopt_threw", m("ccr_worker_auth_refresh", "adopt_threw");
        V("error", "cli_heartbeat_refreshed_auth_adopt_threw");
      }
      if (y) this.renewSocketForNewToken();
    }
    if (h()) return;
    let w = e?.heartbeat_interval_seconds;
    if (typeof w !== "number" || !Number.isFinite(w) || w <= 0) {
      if (this.idleGrantLatched) this.armReactivationIfEarned(r, this.heartbeatIntervalMs / 1000);
      this.reclampCurrentIntervalToTokenLifetime();
      return;
    }
    if (this.advertiseHeartbeatProbeSupport) {
      let y = w * 1000 > this.seedHeartbeatIntervalMs;
      if (y) this.armReactivationIfEarned(r, w);else this.reactivationBeatArmed = !1;
      this.idleGrantLatched = y;
    }
    let to_ms_2 = this.clampToTokenLifetime(Math.min(Math.max(w * 1000, ft), this.maxAdvisedIntervalMs));
    if (to_ms_2 === this.heartbeatIntervalMs) return;
    if (V("info", "cli_heartbeat_interval_updated", {
      from_ms: this.heartbeatIntervalMs,
      to_ms: to_ms_2
    }), to_ms_2 < this.heartbeatIntervalMs) this.applyShorterIntervalNow(to_ms_2);else this.heartbeatIntervalMs = to_ms_2;
  }
  async takeUpLateBeat(e, s, n, r) {
    try {
      if (this.closed || !e.ok) return;
      let h = await e.json();
      if (this.closed) return;
      t("CCRClient: Heartbeat answered late on the worker socket"), this.consecutiveAuthFailures = 0, this.consecutiveNotFound = 0, await this.takeUpBeatAnswer(h, s, n, r);
    } catch (error) {
      t(`CCRClient: could not act on a heartbeat answer that arrived late on the worker socket: ${d(error)}`, {
        level: "warn"
      });
    }
  }
  renewSocketForNewToken() {
    if (!this.workerSocket?.isTransport()) return;
    try {
      this.workerSocket.whenQuiet(() => this.readTransport.renewConnection(), !0);
    } catch (error) {
      t(`CCRClient: could not renew the worker socket for a new token: ${d(error)}`, {
        level: "warn"
      });
    }
  }
  reportDurableUpload(e, s) {
    let resultThatMarks = this.resultThatMarks;
    if (s === "accepted" && resultThatMarks && resultThatMarks.marked !== this.sessionModelTurnStored && e.some(item => item.payload.uuid === resultThatMarks.uuid)) this.sessionModelTurnStored = resultThatMarks.marked, this.reportInternalMetadata({
      model_turn_stored: resultThatMarks.marked
    });
    if (s === "accepted") this.autocompactStateStored = e.findLast(h => !h.ephemeral && h.payload.type === "autocompact_state")?.payload.value ?? this.autocompactStateStored;
    if (this.onDurableEventsUpload === void 0) return;
    let r = e.filter(item => !item.ephemeral);
    if (r.length === 0) return;
    try {
      this.onDurableEventsUpload(r, s);
    } catch (error) {
      t(`CCRClient: onDurableEventsUpload(${s}) threw; the batch's fate is unchanged: ${d(error)}`, {
        level: "warn"
      });
    }
  }
  writeEvent(e) {
    try {
      if (this.bufferLoneDelta(e)) return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
    return this.writeEvents([e]);
  }
  bufferLoneDelta(e) {
    if (this.streamEventFlushIntervalMs <= 0 || this.pickupBarriers.length > 0 || this.guardsClientRows !== void 0 || e.type !== "stream_event" || e.event.type !== "content_block_delta" || "resume_reason" in e) return !1;
    return this.streamedEphemeralSinceLastAssistant = !0, this.bufferEphemeral(e), !0;
  }
  trackFirstFrameUpload(uuid) {
    let timing = {};
    return this.firstFrameUpload = {
      uuid: uuid,
      timing: timing
    }, timing;
  }
  trackFirstTextFrameUpload(uuid_2) {
    let timing_2 = {};
    return this.firstTextFrameUpload = {
      uuid: uuid_2,
      timing: timing_2
    }, timing_2;
  }
  trackFirstBlockFrameUpload(uuid_3) {
    let timing_3 = {};
    return this.firstBlockFrameUpload = {
      uuid: uuid_3,
      timing: timing_3
    }, timing_3;
  }
  trackedFrameUploads(e) {
    let s = [];
    for (let n of [this.firstFrameUpload, this.firstTextFrameUpload, this.firstBlockFrameUpload]) if (n && n.timing[e] === void 0) s.push(n);
    return s;
  }
  writeEvents(e, opts) {
    let n = e.flatMap(item => {
        if (item.type !== "system" || item.subtype !== "task_started" && item.subtype !== "task_updated" && item.subtype !== "task_notification") return [item];
        let B = item.subtype !== "task_started" ? this.liveOnlyShellStarts.get(item.task_id) : ce(item) === "system/task_started_foreground_shell" && this.shellTaskRowsLiveOnly() ? item : void 0;
        if (this.liveOnlyShellStarts.delete(item.task_id), !B) return [item];
        if (item.subtype === "task_updated" && item.patch.is_backgrounded || Buffer.byteLength(_(item)) > At) return B === item ? [item] : [{
          ...B
        }, item];
        if (item.subtype !== "task_notification") this.liveOnlyShellStarts.set(item.task_id, B);
        return this.rowsMarkedLiveOnly.add(item), [item];
      }),
      artifactSocketIds = this.artifactSocketIds,
      w = (!artifactSocketIds ? n : n.flatMap(item => {
        if (item.type !== "system") return [item];
        switch (item.subtype) {
          case "background_tasks_changed":
            {
              artifactSocketIds.clear();
              let tasks = item.tasks.filter(item => {
                  if (item.task_type !== "monitor_ws" || item.ambient !== !0) return !0;
                  return artifactSocketIds.add(item.task_id), !1;
                }),
                H = {
                  whole: _(item.tasks),
                  withoutSockets: _(tasks)
                },
                N = this.lastTaskList !== void 0 && H.whole !== this.lastTaskList.whole && H.withoutSockets === this.lastTaskList.withoutSockets;
              return this.lastTaskList = H, N ? [] : [{
                ...item,
                tasks: tasks
              }];
            }
          case "task_started":
            if (item.task_type !== "monitor_ws" || item.ambient !== !0) return [item];
            return artifactSocketIds.add(item.task_id), [];
          case "task_updated":
            return artifactSocketIds.has(item.task_id) ? [] : [item];
          case "task_notification":
            return item.ambient === !0 && item.task_id.startsWith("s") ? [] : [item];
          default:
            return [item];
        }
      })).filter(item => {
        if (item.type === "system" && item.subtype === "task_progress" && item.summary === void 0 && item.workflow_progress === void 0) return !1;
        if (item.type === "active_goal" || item.type === "autocompact_state") {
          let N = !this.stateRowTypesWritten.has(item.type);
          this.stateRowTypesWritten.add(item.type);
          let q = this.recordAtStart?.goal;
          return !(N && (item.type === "autocompact_state" ? ln(item.value, this.recordAtStart?.autocompact_state) : item.value === null && this.recordAtStart !== void 0 && (!D(q) || q.met === !0)));
        }
        if (item.type !== "rate_limit_event") return !0;
        let B = ce(item),
          H = B === "rate_limit_event/allowed" && B === this.lastRateLimitKind && item.rate_limit_info.overagePeriodMonthly === void 0 && item.rate_limit_info.overagePeriodChannel === void 0;
        return this.lastRateLimitKind = B, this.lastRateLimitRepeat = H && this.currentUploadTrim().rate_limit_repeats === !0 ? item : void 0, this.lastRateLimitRepeat === void 0;
      }),
      v = w.findIndex(item => item.type === "result");
    if (v !== -1 && this.lastRateLimitRepeat !== void 0) w.splice(v, 0, this.lastRateLimitRepeat), this.lastRateLimitRepeat = void 0;
    if (e.length > 0 && w.length === 0) return Promise.resolve();
    if (this.guardsClientRows !== void 0) this.reportClientRowsOwed(this.clientRowsAreGuarded() ? this.clientRowsOwed.rowsEntered(w, new Date()) : this.clientRowsOwed.guardEnded(Date.now()));
    let y = this.flushPolicy?.settingsAnswersMaxWaitMs ?? 0,
      O = this.flushPolicy?.initMaxWaitMs ?? 0;
    if ((y > 0 || O > 0) && w.length > 0 && this.followsServedPolicy && !this.closed && this.pickupBarriers.length === 0) {
      let S = w.map(item => this.isSettingsAnswer(item) ? y : Lt(item) || item.type === "user" && "isReplay" in item && item.isReplay && this.turnHold === "open" ? O : 0);
      if (S.every(item => item > 0)) return this.waitingAnswers.push(...w), this.waitingAnswersTimer ??= setTimeout(() => this.sendWaitingAnswers(), Math.min(...S)), Promise.resolve();
    }
    let messages = this.waitingAnswers.length > 0 && (w.length === 0 || w.some(item => item.type !== "stream_event")) ? [...this.takeWaitingAnswers(), ...w] : w,
      P = this.pickupBarriers.at(-1);
    if (!P) return this.writeEventsNow(messages, opts);
    let written = Promise.withResolvers();
    if (P.writes.push({
      messages: messages,
      opts: opts,
      written: written
    }), this.pickupBarriers.reduce((acc, item) => acc + item.writes.length, 0) >= Wn) this.openPickupBarriers(this.pickupBarriers.length);
    return written.promise;
  }
  noteSettingsRequest(e) {
    if (!D(e) || e.type !== "control_request" || typeof e.request_id !== "string" || !yt(e)) return;
    this.settingsRequestIds.add(e.request_id);
    let s = this.settingsRequestIds.values().next().value;
    if (this.settingsRequestIds.size > on && s !== void 0) this.settingsRequestIds.delete(s);
  }
  isSettingsAnswer(e) {
    return e.type === "control_response" && e.response.subtype === "success" && this.settingsRequestIds.has(e.response.request_id);
  }
  sendWaitingAnswers() {
    if (this.waitingAnswers.length > 0) this.writeEvents([]);
  }
  takeWaitingAnswers() {
    if (this.waitingAnswersTimer) clearTimeout(this.waitingAnswersTimer), this.waitingAnswersTimer = null;
    return this.waitingAnswers.splice(0);
  }
  async writeEventsNow(e, s) {
    let n = [],
      r = [],
      since_3,
      release,
      v = !1,
      releasedBy,
      O,
      M = !1,
      P = [],
      F = [],
      S = [],
      B = [],
      H,
      N = !1,
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
        });
      }
      if ((R.type === "assistant" || R.type === "user") && R.parent_tool_use_id) this.subAgentWroteSinceStoredRequesting = !0;
      let A = this.noteRequestingRow(R);
      if (A) {
        let G = this.toClientEvent(A);
        n.push(A === this.liveOnlyStartingRow ? this.withStamp(G) : G);
      }
      let x = release ? void 0 : this.holdAgainAt(R),
        Q = this.turnHold === "open",
        K = this.releaseFor(R, x);
      if (K === "event" && !release) releasedBy = ce(R);
      if (release ??= K, Q && K === "round_trip" && this.flushPolicy?.holdAcrossModelCalls) release = K, releasedBy = void 0;
      if (Q && K === "round_trip" || R.type === "result" || R.type.startsWith("control_") || R.type === "system" && "subtype" in R && (R.subtype === "init" || R.subtype === "task_notification")) O ??= ce(R);
      if ((this.streamEventFirstFlushMs > 0 && !K || this.noSubscriberStreamEventFlushIntervalMs > 0 || this.dropUnwatchedStreamEvents || this.unwatched() && this.currentState === "running") && this.streamEventFlushIntervalMs > 0 && Ht(R)) {
        this.bufferEphemeral(R);
        continue;
      }
      if (R.type === "stream_event") {
        if (this.streamedEphemeralSinceLastAssistant = !0, R.event.type === "message_stop" && this.holdRule === "served_policy" && this.flushPolicy?.flushOnSamplingEnd) {
          this.bufferEphemeral(R), since_3 ??= this.streamEventBufferedAt, v = !0;
          let G = this.takeStreamEventBuffer();
          release ??= G.release, n.push(...G.events);
          continue;
        }
        if (this.streamEventFlushIntervalMs <= 0) {
          let G = Buffer.byteLength(_(R));
          if (G <= jEn) n.push({
            payload: R,
            ephemeral: !0
          });else Ue(R, G);
          continue;
        }
        if (this.bufferEphemeral(R), R.event.type === "content_block_start" && this.parkedRows.length > 0) {
          since_3 ??= this.streamEventBufferedAt;
          let G = this.takeStreamEventBuffer();
          release ??= G.release, q ||= G.firstFrames, n.push(...G.events);
        }
        continue;
      }
      let j = R.type === "control_request" ? this.toClientEvent(R) : void 0;
      if (R.type === "control_request" && j !== void 0 && sn.has(Kt(j)) && this.servedCallRequestsJumpQueue()) {
        if (!this.holdsAcrossModelCalls() && this.clientRowsOwed.rowsSentAgain.size === 0) {
          r.push(j), this.urgentRequestIds.add(R.request_id);
          let G = this.urgentRequestIds.values().next().value;
          if (this.urgentRequestIds.size > nn && G !== void 0) this.urgentRequestIds.delete(G);
          continue;
        }
        M = !0;
      }
      if (R.type === "control_cancel_request" && this.urgentRequestIds.delete(R.request_id)) {
        r.push(this.toClientEvent(R));
        continue;
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
        continue;
      }
      if (this.streamEventTimer) {
        since_3 ??= this.streamEventBufferedAt;
        let G = this.takeStreamEventBuffer();
        release ??= G.release, q ||= G.firstFrames, n.push(...G.events);
      }
      if (R.type === "keep_alive" && this.keepAlivesGoAlone()) {
        this.sendKeepAliveAlone(), N = !0;
        continue;
      }
      if (this.gatesToolCalls) {
        let G = de(R);
        if (G.some(item => this.awaitedToolCalls.has(item))) release ??= "tool_call";
        P.push(...G);
      }
      let te = this.flushPolicy?.flushAfterToolNames;
      if (te && te.size > 0) for (let G of de(R, te)) this.toolCallsWhoseResultReleases.add(G), fe(this.toolCallsWhoseResultReleases);
      if (this.flushPolicy?.transcriptMaxAgeMs) for (let G of de(R, br)) this.toolCallsWhoseResultReleases.add(G), fe(this.toolCallsWhoseResultReleases);
      let W = this.flushPolicy?.holdAgain;
      if (W && R.type === "assistant" && !R.parent_tool_use_id) {
        if (R.message.id !== this.newestResponseId) this.newestResponseId = R.message.id, this.unansweredCalls.clear();
        for (let G of de(R)) this.unansweredCalls.add(G);
        if (de(R, W.neverAfterTools).length > 0) this.holdsNoMoreThisTurn = !0;
        if (W.toolsWhoseResultsWait) for (let G of de(R, W.toolsWhoseResultsWait)) this.callsWhoseResultsWait.add(G), fe(this.callsWhoseResultsWait);
      }
      if (W && R.type === "user") {
        for (let G of Je(R.message, "tool_result", "tool_use_id")) this.unansweredCalls.delete(G);
        if (W.toolsWhoseResultsWait && !R.parent_tool_use_id && Array.isArray(R.message.content) && R.message.content.some(item => item.type === "tool_result" && (item.is_error === !0 || !this.callsWhoseResultsWait.has(item.tool_use_id)))) this.heldResultNeedsStore = !0;
      }
      if (this.isLiveTwinRow(R)) F.push(n.length);
      if (R === this.liveOnlyRequestingRow && this.holdsAcrossModelCalls() && !(K === "round_trip" && !Q && (!this.subAgentWroteSinceStoredRequesting || this.flushPolicy?.liveOnlyTypes.has(Ye)) && this.flushPolicy?.liveOnlyTypes.has(es) && (x !== "starts" || this.nextLiveIndex === this.indexBehindHeldToolResult && this.flushPolicy.liveOnlyTypes.has(ts)))) this.liveOnlyRequestingRow = void 0, H = n.length;
      if (K === "round_trip" && R !== this.liveOnlyRequestingRow && R !== this.liveOnlyFirstRow && !("parent_tool_use_id" in R && R.parent_tool_use_id)) this.subAgentWroteSinceStoredRequesting = !1;
      if (R.type === "system" && R.subtype === "task_started" && ce(R) === "system/task_started_foreground_shell" && !this.isLiveOnlyRow(R)) S.push([n.length, R.task_id]);
      let Z = j ?? this.toClientEvent(R);
      if (x === "starts") if (R === this.liveOnlyRequestingRow) this.liveOnlyStartingRow = R;else Z = this.withStamp(Z);
      if (R.type === "system" && "subtype" in R && R.subtype === "init" && !Z.payload.parent_tool_use_id) {
        if (this.liveTurnId = Z.payload.uuid, this.nextLiveIndex = 0, this.openTurn(), this.droppedBeforeLiveTurn = this.droppedDurableBatches, qXr in R && this.followsServedPolicy && this.flushPolicy?.liveOnlyTypes.has(ss) && !(this.flushPolicy.holdAcrossModelCalls && this.subAgentWroteSinceStoredRequesting && !this.flushPolicy.liveOnlyTypes.has(Ye))) Z.payload.request_at_init = !0, this.liveOnlyFirstRow = "next";
      }
      if (!Z.ephemeral) this.indexBehindHeldToolResult = void 0;
      n.push(Z);
    }
    let X = [],
      heldRepeatUuid = this.heldRepeatUuid;
    if (!release && !v) {
      let Y = F.filter(item => {
        let A = n[item];
        return A && !A.historical && this.eventUploader.holdsOnArrival(A);
      });
      if (!this.viewerAbsentReported && Y.some(item => Buffer.byteLength(_(n[item]?.payload)) > At || Qe(n[item]?.payload) > er)) release = "twin_too_large";else {
        for (let [A, x] of S) {
          let Q = n[A];
          if (Q && this.eventUploader.holdsOnArrival(Q)) this.heldShellTaskIds.add(x);
        }
        X = Y;
        for (let A of Y) {
          let x = n[A];
          if (x) {
            if (A === H) this.heldRepeatUuid = x.payload.uuid;
            n[A] = this.withStamp(x);
          }
        }
        let R = Y.length > 0 ? n.findLast(A => !A.ephemeral) : void 0;
        if (R?.payload.live_index !== void 0 && _e(R.payload.message)) this.indexBehindHeldToolResult = this.nextLiveIndex;
        if (!this.viewerAbsentReported) for (let A of Y.toReversed()) {
          let x = n[A];
          if (x) n.splice(A, 0, {
            payload: x.payload,
            ephemeral: !0
          });
        }
      }
    }
    if (heldRepeatUuid !== void 0 && X.length > 0 && (this.toolResultEndsCall || this.flushPolicy?.liveOnlyTypes.has(ns) && n.some(item => item.payload.type === "assistant" && item.payload.live_index !== void 0))) this.heldRepeatUuid = void 0, this.eventUploader.withdraw(Y => !Y.ephemeral && Y.payload.uuid === heldRepeatUuid);
    for (let {
      frame: frame,
      at: at_2,
      turnId: turnId,
      index: index_2
    } of B) frame.live_turn_id = turnId, frame.live_next_index = index_2 + U(X, Q => Q < at_2);
    if (r.length > 0) this.enqueueClientEvents(r, {
      urgent: !0
    });
    if (n.length > 0) {
      if (release) {
        if (release !== "round_trip" && F.some(item => ["assistant", "user"].includes(n[item]?.payload.type ?? ""))) this.endWholeTurnHold(release);
        this.releaseTranscriptLane(release, releasedBy, O), this.heldResultNeedsStore = !1;
      } else if (v) release = "sampling_end";
      let Y = !release && this.liveTwinWaitMs > 0 && this.streamEventFirstFlushMs > 0 && !q && this.trackedFrameUploads("enqueuedAtMs").length === 0 && n.some(item => item.ephemeral && item.payload.type === "assistant") && n.every(item => item.payload.type === "assistant" || item.ephemeral && (item.payload.type === "stream_event" || item.payload.subtype === "thinking_tokens"));
      if (Y && !this.loggedLiveTwinWait && !this.eventUploader.busy()) this.loggedLiveTwinWait = !0, g("ccr_live_twin_wait");
      let R = this.enqueueClientEvents(n, {
        ...(release ? {
          release: release,
          releasedBy: releasedBy
        } : {
          since: since_3
        }),
        ...(s?.together && {
          together: !0
        }),
        ...(Y && {
          waitForMoreMs: this.liveTwinWaitMs
        })
      });
      if (this.flushPolicy?.noTurnMaxAgeMs) this.applyUploadHold("reset");
      if (M) this.eventUploader.cutBackoff();
      await R, this.noteToolCallRows("client_events", P, "queued");
    } else if ((r.length > 0 || N) && release) {
      if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
      this.releaseTranscriptLane(release, void 0, O), this.releaseClientEvents(release);
    } else if (v) this.releaseClientEvents("sampling_end");
  }
  noteEventsPostFailed(e) {
    if (this.eventsPostRateLimited ||= e === 429, this.eventsPostsFailingSinceMs !== void 0) return;
    if (this.eventsPostsFailingSinceMs = performance.now(), this.keepAlivesGoAlone() && i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES && afe()) this.sendKeepAliveAlone();
  }
  keepAlivesGoAlone() {
    return this.eventsPostsFailingSinceMs !== void 0 && performance.now() - this.eventsPostsFailingSinceMs <= Fn && !this.eventsPostRateLimited && !St() && this.providerWithheldReason() === void 0;
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
    }).then(s => {
      if (this.eventsPostRateLimited ||= !s.ok && s.status === 429, s.ok) g("ccr_keep_alive_own_post");else if (!this.closed) c("ccr_keep_alive_own_post", s.status !== void 0 ? `http_${s.status}` : s.fetchFailed ? "no_answer" : "no_status");
    }).catch(a);
  }
  releaseTranscriptLane(e, s, n) {
    if (this.holdRule !== "served_policy" || !this.flushPolicy?.transcriptMaxAgeMs) this.internalEventUploader.release(e, s);else if (n !== void 0) this.internalEventUploader.release("event", n);
  }
  releaseFor(e, s) {
    if (e.type === "result") {
      let marked = this.turnHold !== "open";
      if (this.modelTurnEnded ||= marked, this.flushPolicy?.holdAgain?.laterWorkerHoldsFirstTurn && (marked || e.is_error)) this.resultThatMarks = {
        uuid: e.uuid,
        marked: marked
      };
      this.openTurn();
    }
    if (e.type === "system" && "subtype" in e && e.subtype === "status" && "status" in e && e.status === "requesting") {
      if (!this.seesModelCallBoundaries) this.seesModelCallBoundaries = !0, this.applyUploadHold("reset");
      if (this.holdRule === "served_policy") {
        let n = this.turnHold === "whole" && !s && this.requestingRowMayWait(e);
        if (this.turnHold === "open" && this.flushPolicy?.firstTurnHoldsEachCall && !this.modelTurnEnded && !(this.flushPolicy.holdAgain?.laterWorkerHoldsFirstTurn && this.sessionModelTurnStored)) this.turnHold = "each_call", this.holdsNoMoreThisTurn = !0;else if (this.turnHold === "open" || s === "starts") {
          if (this.secondCallStartsHold = this.turnHold === "open" && !this.modelTurnEnded, this.turnHold = "whole", this.holdsAcrossModelCalls()) this.uploadHoldTally.wholeTurnHoldStarted();
        } else if (s === "ends") this.turnHold = "each_call", this.uploadHoldTally.wholeTurnHoldEndedEarly();
        return n ? void 0 : "round_trip";
      }
    }
    if (e.type === "user" && this.toolResultReleases(e.message)) return "tool_result";
    if (e.type === "assistant" && e.message.id !== this.streamedResponseId && this.isLiveTwinRow(e)) return "event";
    if (this.holdRule === void 0 || this.mayWaitUnderHold(e)) return;
    return "event";
  }
  requestingRowMayWait(e) {
    return this.holdsAcrossModelCalls() && yr(e) && !this.flushPolicy?.mustFlushTypes.has(e.type);
  }
  holdAgainAt(e) {
    let s = this.flushPolicy?.holdAgain;
    if (!s || e.type !== "system" || !("subtype" in e) || e.subtype !== "status" || !("status" in e) || e.status !== "requesting" || !this.holdsAcrossModelCalls() || !this.isLiveTwinRow(e)) return;
    if (this.holdsNoMoreThisTurn || this.droppedDurableBatches !== this.droppedBeforeLiveTurn) return "ends";
    let n = this.requestingRowMayWait(e);
    if (this.unansweredCalls.size > 0) return n ? void 0 : "ends";
    let r = this.eventUploader.held();
    return this.turnHold === "each_call" || !n || this.heldResultNeedsStore || s.laterWorkerHoldsFirstTurn && this.secondCallStartsHold || s.softAgeMs > 0 && r.ageMs >= s.softAgeMs || s.softEvents > 0 && r.count >= s.softEvents ? "starts" : void 0;
  }
  toolResultReleases(e) {
    if (this.holdRule !== "served_policy") return !1;
    let s = this.flushPolicy?.flushAfterTools === "all";
    return Je(e, "tool_result", "tool_use_id").some(item => s || this.toolCallsWhoseResultReleases.has(item));
  }
  gateToolCall(e) {
    let flushPolicy_2 = this.flushPolicy;
    if (!flushPolicy_2 || flushPolicy_2.flushAfterTools !== "write" && flushPolicy_2.flushBeforeToolsWaitMs <= 0 || e.agentId !== void 0 || this.closed || !this.followsServedPolicy || !e.mayWrite()) return;
    if (flushPolicy_2.flushAfterTools === "write") this.toolCallsWhoseResultReleases.add(e.toolUseId), fe(this.toolCallsWhoseResultReleases);
    let n = this.transcriptLaneInUse ? ["client_events", "internal_events"] : ["client_events"];
    if (flushPolicy_2.flushBeforeToolsWaitMs <= 0 || this.lanesNotAnswering.size > 0 || e.signal.aborted || n.every(item => this.toolCallRows[item].get(e.toolUseId) === "stored")) return;
    return this.awaitToolCallStored(e, n, flushPolicy_2.flushBeforeToolsWaitMs);
  }
  async awaitToolCallStored(e, s, n) {
    let toolUseId = e.toolUseId,
      h = Date.now(),
      w = os(e.signal, {
        timeoutMs: n,
        refTimer: !0
      });
    this.awaitedToolCalls.add(toolUseId);
    let v = this.pickupBarriers.at(-1);
    if (v && !this.toolCallRows.client_events.has(toolUseId)) this.internalEventUploader.release("tool_call"), await Promise.race([v.opened.promise, ze(w.signal)]);
    let y = os(w.signal, {
        timeoutMs: this.toolCallRowGraceMs,
        refTimer: !0
      }),
      O = !1,
      M = !1;
    try {
      if (this.releaseClientEvents("tool_call"), this.internalEventUploader.release("tool_call"), await Promise.race([this.toolCallRowReaches("client_events", toolUseId, "queued"), ze(y.signal)]), O = this.toolCallRows.client_events.has(toolUseId), M = y.signal.aborted && !w.signal.aborted, O && !this.closed) await Promise.race([Promise.all(s.map(item => this.toolCallRowReaches(item, toolUseId, "settled"))), ze(w.signal)]);
    } finally {
      y.cleanup(), w.cleanup(), this.awaitedToolCalls.delete(toolUseId);
      for (let S of s) this.toolCallRowWaiters.delete(`${S} ${toolUseId}`);
    }
    let outcome = s.every(item => this.toolCallRows[item].get(toolUseId) === "stored") ? "stored" : this.closed ? "closed" : e.signal.aborted ? "aborted" : s.some(item => this.toolCallRows[item].get(toolUseId) === "dropped") ? "dropped" : M && !O ? "row_never_queued" : "timeout";
    if (outcome === "timeout" || outcome === "dropped") {
      for (let S of s) if (this.toolCallRows[S].get(toolUseId) === "queued") this.lanesNotAnswering.add(S);
    }
    V(outcome === "stored" || outcome === "closed" || outcome === "aborted" ? "info" : "warn", "cli_ccr_tool_call_upload_wait", {
      outcome: outcome,
      waited_ms: Date.now() - h,
      limit_ms: n,
      live_view_row: this.toolCallRows.client_events.get(toolUseId) ?? "none",
      transcript_row: s.includes("internal_events") ? this.toolCallRows.internal_events.get(toolUseId) ?? "none" : "lane_unused"
    });
  }
  toolCallRowReaches(e, s, until_2) {
    let r = this.toolCallRows[e].get(s);
    if (r !== void 0 && (r !== "queued" || until_2 === "queued")) return Promise.resolve();
    return new Promise(reached => {
      let w = `${e} ${s}`,
        v = {
          until: until_2,
          reached: reached
        },
        y = this.toolCallRowWaiters.get(w);
      if (y) y.push(v);else this.toolCallRowWaiters.set(w, [v]);
    });
  }
  noteToolCallRows(e, s, n) {
    let r = this.toolCallRows[e];
    for (let h of s) {
      if (n === "queued" && r.has(h) || n === "dropped" && r.get(h) === "stored") continue;
      r.set(h, n), fe(r);
      let w = `${e} ${h}`,
        v = (this.toolCallRowWaiters.get(w) ?? []).filter(item => {
          if (item.until === "queued" || n !== "queued") return item.reached(), !1;
          return !0;
        });
      if (v.length > 0) this.toolCallRowWaiters.set(w, v);else this.toolCallRowWaiters.delete(w);
    }
  }
  noteToolCallRowsSettled(e, s, n) {
    if (!this.gatesToolCalls) return;
    if (s === "stored") this.lanesNotAnswering.delete(e);
    this.noteToolCallRows(e, n.flatMap(item => "session_agent_id" in item && item.session_agent_id || "ephemeral" in item && item.ephemeral ? [] : de(item.payload)), s);
  }
  clientRowsAreGuarded() {
    if (!this.clientRowsSwitchIsOn || this.hasDisplayHooks === void 0) return !1;
    return this.displayHookSeen ||= this.hasDisplayHooks(), !this.displayHookSeen;
  }
  flagsRefreshed() {
    return this.clientRowsSwitchIsOn = this.guardsClientRows?.() === !0, this.clientRowsSwitchIsOn;
  }
  markOfRepliesShownAsStored() {
    return this.clientRowsAreGuarded() ? jn(this.sessionId) || void 0 : void 0;
  }
  setDisplayHooksProbe(e) {
    this.hasDisplayHooks = e;
  }
  noteClientRowsSettled(e, s) {
    if (this.guardsClientRows === void 0) return;
    if (!this.clientRowsAreGuarded()) {
      if (this.reportClientRowsOwed(this.clientRowsOwed.guardEnded(Date.now())), this.clientRowsOwed.rowsSentAgain.size === 0) return;
    }
    let n = s.flatMap(item => item.ephemeral ? [] : [item.payload.uuid]),
      rows = U(n, h => this.clientRowsOwed.rowsSentAgain.has(h));
    if (rows > 0) if (this.ownRowsWaitBehindRowsSentAgainSince = void 0, e === "stored") g("ccr_client_rows_owed", {
      rows: rows
    });else m("ccr_client_rows_owed", "upload_refused", {
      rows: rows
    });
    this.reportClientRowsOwed(this.clientRowsOwed.rowsAnswered(n));
  }
  reportClientRowsOwed(internal_metadata_6) {
    if (internal_metadata_6 !== void 0) this.workerState.enqueue({
      internal_metadata: internal_metadata_6
    });
  }
  async clientRowsOwedByEarlierWorkers(e) {
    if (this.guardsClientRows === void 0 || this.clientRowsOwed.earlierSpans.length === 0) return [];
    return await e(), this.flagsRefreshed() ? this.clientRowsOwed.earlierSpans : [];
  }
  async tryClientRowsOwedByEarlierWorkers(e) {
    if (this.reportClientRowsOwed(this.clientRowsOwed.earlierSpansTried(e)), !(await we(this.flushWorkerState(), Vs))) c("ccr_client_rows_owed", "try_report_unanswered");
  }
  async sendOwedClientRowsAgain(e) {
    if (!this.flagsRefreshed()) return;
    let s = Xi(e.map(item => this.toClientEvent(item)), n => n.payload.uuid);
    this.clientRowsOwed.earlierRowsSentAgain(s.map(item => item.payload.uuid));
    try {
      await this.enqueueClientEvents(s, {
        urgent: !0
      });
    } catch (error) {
      throw this.clientRowsOwed.earlierRowsWithdrawn(), error;
    }
  }
  giveUpClientRowsOwedByEarlierWorkers() {
    this.reportClientRowsOwed(this.clientRowsOwed.earlierSpansGivenUp());
  }
  rowsSentAgainStepAside(e) {
    let {
      rowsSentAgain: rowsSentAgain
    } = this.clientRowsOwed;
    if (!e.some(item => rowsSentAgain.has(item.payload.uuid))) return;
    if (this.eventUploader.backlog().unsent <= rowsSentAgain.size) {
      this.ownRowsWaitBehindRowsSentAgainSince = void 0;
      return;
    }
    if (this.ownRowsWaitBehindRowsSentAgainSince ??= Date.now(), Date.now() - this.ownRowsWaitBehindRowsSentAgainSince < Ks) return;
    this.ownRowsWaitBehindRowsSentAgainSince = void 0;
    let n = new Set(rowsSentAgain);
    e.splice(0, e.length, ...e.filter(item => !qt(item, n))), this.eventUploader.withdraw(r => qt(r, n)), c("ccr_client_rows_owed", "upload_kept_failing", {
      rows: n.size
    }), this.clientRowsOwed.earlierRowsWithdrawn();
  }
  mayParkTextRow(e) {
    if (e.type !== "assistant" || !this.streamEventTimer || this.streamEventTimerIsSlow || this.lastReportedHasSubscribers === !1 || this.closed || this.isLiveTwinRow(e)) return !1;
    let content = e.message.content;
    return Array.isArray(content) && content.length > 0 && content.every(item => item.type === "text");
  }
  liveTwinTypes() {
    return this.holdRule === "served_policy" && this.liveTurnId !== void 0 && this.turnHold !== "open" ? this.flushPolicy?.liveTwinTypes : void 0;
  }
  isLiveTwinRow(e) {
    let s = this.liveTwinTypes();
    return s !== void 0 && (e.type === "tool_progress" ? e.heartbeat === !0 : !("parent_tool_use_id" in e && e.parent_tool_use_id)) && (e.type !== "user" || Array.isArray(e.message.content) && e.message.content.every(item => item.type === "tool_result")) && (s.has(e.type) || "subtype" in e && s.has(`${e.type}/${e.subtype}`));
  }
  takeParkedRows() {
    let e = this.parkedRows.map(({
      event: event_4
    }) => event_4);
    return this.parkedRows = [], e;
  }
  mayWaitUnderHold(e) {
    if (this.isLiveOnlyRow(e)) return !0;
    if (e.type === "keep_alive" && this.holdRule === "served_policy") return this.seesModelCallBoundaries && !this.flushPolicy?.mustFlushTypes.has(e.type);
    if (e.type === "control_response" && this.flushPolicy?.controlTrafficKeepsHold && this.holdsAcrossModelCalls()) return !this.flushPolicy.mustFlushTypes.has(e.type) && this.settingsRequestIds.has(e.response.request_id);
    if (!M7o(e)) return this.holdRule === "served_policy" && this.seesModelCallBoundaries && this.turnHold !== "open" && this.flushPolicy?.mayWaitTypes.has(e.type === "system" && e.subtype === "task_notification" && this.heldShellTaskIds.has(e.task_id) ? "system/task_notification_foreground_shell" : ce(e)) === !0 && !this.flushPolicy.mustFlushTypes.has(e.type);
    if (this.holdRule === "no_subscriber_flag" && !lr) return !0;
    if (e.type === "user" && "isReplay" in e && e.isReplay) return !1;
    let flushPolicy_3 = this.flushPolicy;
    if (!flushPolicy_3) return !0;
    if (e.type === "assistant" && flushPolicy_3.flushOnAssistant) return !1;
    return !flushPolicy_3.mustFlushTypes.has(e.type);
  }
  isLiveOnlyRow(e) {
    return this.rowsMarkedLiveOnly.has(e) || this.followsServedPolicy && this.flushPolicy?.liveOnlyTypes.has(ce(e)) === !0;
  }
  noteRequestingRow(e) {
    if ("parent_tool_use_id" in e && e.parent_tool_use_id) return;
    if ("resume_reason" in e && e.resume_reason) this.turnTookInput = !0;
    if (e.type === "assistant" || e.type === "user") this.toolResultEndsCall = e.type === "user" && _e(e.message), this.liveOnlyRequestingRow = void 0;
    if (e.type !== "system" || !("subtype" in e)) return;
    let s = e.subtype === "status" && "status" in e ? e.status : void 0;
    if (s === "compacting" || e.subtype === "compact_boundary") {
      let liveOnlyRequestingRow = this.liveOnlyRequestingRow;
      return this.liveOnlyRequestingRow = void 0, liveOnlyRequestingRow;
    }
    if (s !== "requesting") return;
    let n = _("user_message_uuids" in e ? e.user_message_uuids ?? null : null),
      r = n === this.lastRequestingList && this.toolResultEndsCall && !this.turnTookInput && this.followsServedPolicy && this.flushPolicy?.liveOnlyTypes.has(Zt) === !0;
    if (this.liveOnlyFirstRow === "next") this.liveOnlyFirstRow = e;
    if (this.lastRequestingList = n, this.toolResultEndsCall = !1, this.liveOnlyRequestingRow = r ? e : void 0, e !== this.liveOnlyFirstRow && this.flushPolicy?.liveOnlyTypes.has(rs)) this.turnTookInput = !1;
    this.heldRepeatUuid = void 0;
    return;
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
    };
  }
  toClientEvent(e) {
    let s = xKi(e, g$n),
      n = s.historical === !0,
      r = Ht(e) || y$n(s) || this.isLiveOnlyRow(e) || e === this.liveOnlyRequestingRow || e === this.liveOnlyFirstRow,
      tool_use_result = s.type === "user" ? this.uploadedToolResult(s.tool_use_result, s.message, s.is_virtual === !0) : s.tool_use_result;
    return {
      payload: {
        ...s,
        ...(tool_use_result !== s.tool_use_result && {
          tool_use_result: tool_use_result
        }),
        uuid: typeof s.uuid === "string" ? s.uuid : Ee()
      },
      ...(n && {
        historical: !0
      }),
      ...(r && {
        ephemeral: !0
      })
    };
  }
  uploadedToolResult(e, s, n) {
    let r = n ? e : this.trimmedToolResult(e, s);
    if (!this.withholdsWholeFiles) return r;
    let h = M_s(r);
    if (h !== r && !this.loggedWholeFileWithheld) this.loggedWholeFileWithheld = !0, g("ccr_whole_file_withheld");
    return h;
  }
  trimmedToolResult(e, s) {
    let n = this.currentUploadTrim(),
      r = I_s(e, n);
    if (r !== e && !this.loggedToolResultBlank) this.loggedToolResultBlank = !0, g("ccr_tool_result_blank");
    let h = QHi(r, s, n);
    if (h !== r && !this.loggedMcpImageBlank) this.loggedMcpImageBlank = !0, g("ccr_mcp_image_blank");
    return h;
  }
  setStreamEventFlushIntervalMs(e) {
    if (this.streamEventFlushIntervalMs = ue("streamEventFlushIntervalMs", e, k6t), this.streamEventFlushIntervalMs <= 0 && this.streamEventTimer) this.flushStreamEventBuffer();
    if (this.streamEventFlushIntervalMs <= 0) this.toolInputMayWait = !1, this.thinkingBlockOpen = !1, this.awaitingFirstBlock = !1;
  }
  setStreamEventFirstFlushMs(e) {
    this.streamEventFirstFlushMs = ue("streamEventFirstFlushMs", e, 0);
  }
  setThinkingStartGoesAtOnce(e) {
    this.thinkingStartGoesAtOnce = e === !0;
  }
  setStreamEventWindowRunsFromLastFlush(e) {
    this.streamEventWindowRunsFromLastFlush = e === !0;
  }
  setHeldBunchFlushMs(e) {
    this.heldBunchFlushMs = ue("heldBunchFlushMs", e, JXr);
  }
  setThinkingFlushMs(e) {
    this.thinkingFlushMs = Er(e);
  }
  setToolInputFlushMs(e) {
    this.toolInputFlushMs = kr(e);
  }
  setLiveTwinWaitMs(e) {
    this.liveTwinWaitMs = Tr(e);
  }
  setNoSubscriberStreamEventFlushIntervalMs(e) {
    let s = ue("noSubscriberStreamEventFlushIntervalMs", e, 0);
    if (s === this.noSubscriberStreamEventFlushIntervalMs) return;
    this.noSubscriberStreamEventFlushIntervalMs = s, this.setHasSubscribers(void 0, "reset");
  }
  setNoSubscriberUploadHoldMs(e) {
    let s = ue("noSubscriberUploadHoldMs", e, 0);
    if (s === this.noSubscriberUploadHoldMs) return;
    this.noSubscriberUploadHoldMs = s, this.setHasSubscribers(void 0, "reset");
  }
  setDropUnwatchedStreamEvents(e) {
    let s = e === !0;
    if (s === this.dropUnwatchedStreamEvents) return;
    this.setHasSubscribers(void 0, "reset"), this.dropUnwatchedStreamEvents = s;
  }
  onSubscribersReported;
  setSubscribersReportedListener(e) {
    this.onSubscribersReported = e;
  }
  tellSubscribersReported(e) {
    if (typeof e !== "boolean" || this.onSubscribersReported === void 0) return;
    if (e || !this.senderMayNotBeAttachedYet()) this.onSubscribersReported(e);
  }
  senderMayNotBeAttachedYet() {
    return Date.now() - this.lastInboundEventAtMs < dr;
  }
  unwatched() {
    return this.noSubscriberUploadHoldMs > 0 && this.lastReportedHasSubscribers === !1;
  }
  mayHoldUploads() {
    return this.noSubscriberUploadHoldMs > 0 || this.servedPolicyHolds();
  }
  servedPolicyHolds() {
    return (this.flushPolicy?.maxEvents ?? 0) > 1 && this.followsServedPolicy;
  }
  checkpointForViewer(e) {
    if (this.closed || this.viewerCheckpointTimer || !this.holdsAcrossModelCalls()) return;
    this.viewerCheckpointTimer = setTimeout((s, n) => {
      if (s.viewerCheckpointTimer = null, s.holdsAcrossModelCalls()) s.uploadHeldRowsForViewer(n).catch(a);
    }, Math.max(0, this.lastViewerCheckpointAtMs + Bn - Date.now()), this, e);
  }
  async uploadHeldRowsForViewer(e) {
    if (this.lastViewerCheckpointAtMs = Date.now(), this.flushPolicy?.emptyCheckpointKeepsHold && !this.modelCallStreamed) this.setHasSubscribers(void 0, "watcher");else this.endWholeTurnHold(e);
    let s = this.liveTurnId,
      n = this.nextLiveIndex - 1,
      droppedBeforeLiveTurn = this.droppedBeforeLiveTurn;
    this.internalEventUploader.release(e), this.releaseClientEvents(e), await this.flush(), await this.enqueueClientEvents([{
      payload: {
        type: "system",
        subtype: "checkpoint_done",
        uuid: Ee(),
        live_turn_id: s,
        stored_through_live_index: this.droppedDurableBatches === droppedBeforeLiveTurn ? n : -1
      },
      ephemeral: !0
    }], {});
  }
  endWholeTurnHold(e) {
    if (this.turnHold === "open") return;
    if (this.turnHold = "each_call", this.uploadHoldTally.wholeTurnHoldEndedEarly(), !e || !this.flushPolicy?.holdAgain?.after.has(e)) this.holdsNoMoreThisTurn = !0;
  }
  openTurn() {
    this.lastRequestingList = void 0, this.liveOnlyFirstRow = void 0, this.liveOnlyRequestingRow = void 0, this.turnTookInput = !1, this.modelCallStreamed = !1, this.turnHold = "open", this.uploadHoldTally.turnEnded(), this.holdsNoMoreThisTurn = !1, this.newestResponseId = void 0, this.unansweredCalls.clear();
  }
  holdsAcrossModelCalls() {
    return this.holdRule === "served_policy" && this.seesModelCallBoundaries && this.flushPolicy?.holdAcrossModelCalls === !0;
  }
  decideHoldRule() {
    if (this.currentState !== "running" || this.shutdownReleased) return;
    if (this.servedPolicyHolds() && (this.seesModelCallBoundaries || this.lastReportedHasSubscribers === !1)) return "served_policy";
    return this.unwatched() ? "no_subscriber_flag" : void 0;
  }
  applyUploadHold(e) {
    let s = this.decideHoldRule();
    this.holdRule = s, this.eventUploader.setHold(s && this.laneHold(s, !this.seesModelCallBoundaries ? Pt : this.flushPolicy?.controlTrafficKeepsHold ? Ct : Xe, this.turnHold === "open" ? this.flushPolicy?.noTurnMaxAgeMs : void 0), e), this.internalEventUploader.setHold(s && this.laneHold(s, Pt, this.flushPolicy?.transcriptMaxAgeMs), e);
  }
  laneHold(rule, passes, n) {
    let flushPolicy_4 = this.flushPolicy;
    if (rule === "served_policy" && flushPolicy_4) return {
      rule: rule,
      maxAgeMs: Math.min(n || flushPolicy_4.maxAgeMs, !this.seesModelCallBoundaries ? Qt : flushPolicy_4.holdAcrossModelCalls ? ge : Xt),
      maxItems: flushPolicy_4.maxEvents,
      maxBytes: flushPolicy_4.maxBytes,
      passes: passes
    };
    return {
      rule: "no_subscriber_flag",
      maxAgeMs: this.noSubscriberUploadHoldMs
    };
  }
  takeUpFlushPolicy(e) {
    let s = e ?? this.launchFlushPolicy,
      n = s == null ? void 0 : wr(s);
    if (s != null && !n && !this.loggedUnreadableFlushPolicy) this.loggedUnreadableFlushPolicy = !0, V("warn", "cli_ccr_flush_policy_unreadable");
    let flushPolicy_5 = this.flushPolicy;
    if (!Rr(flushPolicy_5, n)) {
      if (this.flushPolicy = n, this.callsWhoseResultsWait.clear(), flushPolicy_5?.flushAfterTools !== n?.flushAfterTools || !Xae(flushPolicy_5?.flushAfterToolNames, n?.flushAfterToolNames)) this.toolCallsWhoseResultReleases.clear();
      V("info", n ? flushPolicy_5 ? "cli_ccr_flush_policy_changed" : "cli_ccr_flush_policy_adopted" : "cli_ccr_flush_policy_cleared", {
        ...(n && {
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
        }),
        hold_enabled: this.followsServedPolicy
      }), this.applyUploadHold("reset");
    }
  }
  logUploadHoldEnd(lane_2, reason_3, held_events, held_ms, h, released_by) {
    if (h === "no_subscriber_flag") {
      g("ccr_no_subscriber_hold", {
        lane: f(lane_2),
        reason: f(reason_3),
        held_events: held_events,
        held_ms: held_ms
      });
      return;
    }
    if (lane_2 === "client_events") {
      if (this.heldShellTaskIds.clear(), this.heldRepeatUuid = void 0, this.indexBehindHeldToolResult = void 0, reason_3 !== "round_trip") this.endWholeTurnHold(reason_3);
    }
    this.uploadHoldTally.released(lane_2, held_events, held_ms), V("info", "cli_ccr_event_hold_release", {
      lane: lane_2,
      reason: reason_3,
      ...(released_by !== void 0 && {
        released_by: released_by
      }),
      held_events: held_events,
      held_ms: held_ms
    });
  }
  uploadBody(events, s) {
    let n = {
      worker_epoch: this.workerEpoch,
      events: events
    };
    if (this.uploadHoldMarker()) n.upload_hold = {
      held: s.held,
      flush_reason: s.reason,
      held_count: Me(s.heldCount),
      hold_age_ms: Me(s.holdAgeMs),
      inflight_retry_count: Me(s.retryCount),
      hold_rule: s.rule,
      post_index: Me(s.postIndex),
      ...(this.flushPolicy?.policyVersion !== void 0 && {
        policy_version: this.flushPolicy.policyVersion
      })
    };
    return n;
  }
  retrySmaller(e, s, n, timeout_ms, h = {
    bytes: n.bytes
  }) {
    let w = {
      count: s.length,
      kib: Math.round(h.bytes / 1024),
      retry_count: n.retryCount,
      timeout_ms: timeout_ms
    };
    return t(`CCRClient: ${e} POST of ${w.count} event(s), ${w.kib} KiB got no response (the connection failed, or no answer within ${timeout_ms}ms) after ${w.retry_count} earlier failure(s); ${h.bytes >= Ve && n.cuttable ? "retrying it in smaller batches" : "retrying it"}`, {
      level: "warn"
    }), V("warn", e === "client_events" ? "cli_worker_events_no_response" : "cli_worker_internal_events_no_response", w), new Avo(`${e} POST got no response`, Ve);
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
    });
  }
  logUndeliveredAtClose(lane_3, undelivered_events) {
    if (lane_3 === "client_events") this.undeliveredClientEventsAtClose ??= undelivered_events;else this.undeliveredInternalEventsAtClose ??= undelivered_events;
    if (this.shutdownKeepsClientEvents) t(`CCRClient: ${lane_3} lane closed at shutdown, ${undelivered_events} undelivered`, {
      level: undelivered_events > 0 ? "warn" : "info"
    });
    if (undelivered_events <= 0) return;
    if (this.noSubscriberUploadHoldMs > 0 && this.viewerAbsentReported) c("ccr_no_subscriber_hold", this.closingForSuccessor ? "undelivered_at_rebuild" : "undelivered_at_close", {
      lane: f(lane_3),
      undelivered_events: undelivered_events
    });
    if (this.servedPolicyHolds()) V("warn", "cli_ccr_event_hold_undelivered_at_close", {
      lane: lane_3,
      undelivered_events: undelivered_events,
      for_successor: this.closingForSuccessor
    });
  }
  bufferEphemeral(e) {
    let s = this.streamEventFirstFlushMs > 0 && e.type === "stream_event" ? e.event.type : void 0,
      n = s === "content_block_start";
    if (n) this.firstContentFlushPending = !0;
    let r = e.type === "stream_event" && !e.parent_tool_use_id ? e.event : void 0,
      h = !1;
    if (r?.type === "message_start") this.awaitingFirstBlock = !0;else if (r?.type === "content_block_start") h = this.awaitingFirstBlock && r.content_block.type === "thinking", this.awaitingFirstBlock = !1;
    if (r?.type === "content_block_start") this.toolInputMayWait = r.content_block.type === "tool_use" && Nn.has(r.content_block.name), this.toolInputChars = 0, this.thinkingBlockOpen = r.content_block.type === "thinking";else if (r?.type === "content_block_stop" || r?.type === "message_start") this.thinkingBlockOpen = !1;
    let w = this.thinkingBlockOpen && this.thinkingFlushMs > this.streamEventFlushIntervalMs && this.streamEventFirstFlushMs > 0 && (e.type !== "stream_event" || r?.type === "content_block_delta" && (r.delta.type === "signature_delta" || r.delta.type === "thinking_delta" && r.delta.thinking === "")),
      v = this.toolInputChars >= Dn,
      y = !1;
    if (r?.type === "content_block_delta" && r.delta.type === "input_json_delta") this.toolInputChars += r.delta.partial_json.length, y = this.toolInputMayWait && this.toolInputFlushMs > 0;
    if (this.dropUnwatchedStreamEvents && this.unwatchedPastGrace) {
      if (e.type === "stream_event") this.streamEventsDroppedUnwatched++;
      return;
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
        this.firstDeltaFlushTimer = null, this.flushStreamEventBuffer(!0);
      }, 0), F && !this.loggedThinkingStartAtOnce) this.loggedThinkingStartAtOnce = !0, g("ccr_thinking_start_at_once");
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
      clearTimeout(this.streamEventTimer);
    } else this.streamEventBufferedAt = H;
    this.streamEventFlushDueAt = H + X, this.streamEventTimer = setTimeout(() => void this.flushStreamEventBuffer(), X);
  }
  setHasSubscribers(e, s) {
    this.hasSubscribersReports++;
    let n = typeof e === "boolean" && (e || !this.senderMayNotBeAttachedYet()) ? e : void 0,
      lastReportedHasSubscribers = this.lastReportedHasSubscribers;
    if (this.lastReportedHasSubscribers = n, n === !0) this.viewerReportedSinceLastFalse = !0;else if (n === !1 && this.viewerReportedSinceLastFalse) this.viewerReportedSinceLastFalse = !1, this.lastViewerLeftAtMs = Date.now();
    let unwatchedPastGrace = this.unwatchedPastGrace;
    if (this.unwatchedPastGrace = n === !1 && Date.now() - this.lastViewerLeftAtMs >= ur, this.dropUnwatchedStreamEvents && unwatchedPastGrace !== this.unwatchedPastGrace) t(this.unwatchedPastGrace ? "CCRClient: no subscribers reported; dropping stream deltas until one is" : `CCRClient: resuming stream deltas (${n === !0 ? "watcher" : s})`);
    if (lastReportedHasSubscribers === !1 && n !== !1 && this.streamEventTimer) this.flushStreamEventBuffer();
    let w = n === !0 ? "watcher" : s;
    if (n === !1) this.viewerAbsentReported = !0;else if (this.viewerAbsentReported && w === "watcher") {
      if (this.viewerAbsentReported = !1, this.holdRule === "served_policy") {
        if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
        this.releaseClientEvents("watcher"), this.internalEventUploader.release("watcher");
      }
    }
    this.applyUploadHold(w);
  }
  async flushStreamEventBuffer(e = !1) {
    let s = G_s("uploads"),
      n;
    try {
      let {
        events: events_2,
        release: release_2
      } = this.takeStreamEventBuffer(e);
      if (events_2.length > 0) {
        if (release_2) this.releaseTranscriptLane(release_2);
        n = this.enqueueClientEvents(events_2, release_2 ? {
          release: release_2
        } : {
          since: this.streamEventBufferedAt
        });
      }
    } finally {
      V_s(s);
    }
    if (n) await n;
  }
  enqueueClientEvents(e, s) {
    for (let n of this.trackedFrameUploads("enqueuedAtMs")) {
      let r = e.find(item => item.payload.uuid === n.uuid);
      if (!r) continue;
      let h = this.eventUploader.inFlightBatch(),
        w;
      if (s.release === void 0 && this.eventUploader.holdsOnArrival(r)) w = "hold";else if (h !== void 0) w = h.some(item => !item.ephemeral) ? "durable_post" : "ephemeral_post";else if (this.eventUploader.backlog().backingOff) w = "retry_backoff";else w = "none";
      n.timing.enqueuedAtMs = performance.now(), n.timing.queuedBehind = w;
    }
    return this.eventUploader.enqueue(e, s);
  }
  releaseClientEvents(e, s) {
    this.eventUploader.release(e, s);
  }
  offerToEventsPost(rows_2, s) {
    if (s.rule !== "served_policy" || s.retryCount > 0 || this.flushPolicy?.eventBatchUpload !== !0 || this.ridesAreOff()) return;
    let {
      promise: promise,
      resolve: r
    } = Promise.withResolvers();
    return this.ridingRows = {
      rows: rows_2,
      bytes: s.bytes,
      settle: r
    }, queueMicrotask(() => {
      if (this.ridingRows?.rows === rows_2 && !this.liveViewLaneSendsMore()) this.giveBackRidingRows();
    }), promise;
  }
  liveViewLaneSendsMore() {
    let {
      unsent: unsent,
      backingOff: backingOff
    } = this.eventUploader.backlog();
    return !backingOff && !this.eventUploader.waitsForMore() && unsent > (this.eventUploader.inFlightBatch()?.length ?? 0) + this.eventUploader.held().count;
  }
  ridesAreOff() {
    return this.ridesRefused || performance.now() < this.ridesPausedUntilMs;
  }
  noteRouteOnlyFailure(status_4) {
    if (this.routeOnlyFailures++, this.routeOnlyFailures < 2 && status_4 !== 405 && status_4 !== 501) return;
    let pause_ms = Math.min(zs * 2 ** this.ridePauses, js);
    this.ridePauses++, this.ridesPausedUntilMs = performance.now() + pause_ms, V("warn", "cli_ccr_joint_upload_paused", {
      status: status_4,
      pause_ms: pause_ms
    });
  }
  giveBackRidingRows() {
    this.ridingRows?.settle(!1), this.ridingRows = void 0;
  }
  settlesTakenRiders(e) {
    let s = () => {
      this.takenRiders?.settle(!1), this.takenRiders = void 0;
    };
    return (n, r) => {
      let h = e(n, r);
      return h.then(s, s), h;
    };
  }
  actsOnSubscribersReports() {
    return this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberUploadHoldMs > 0 || this.dropUnwatchedStreamEvents || this.servedPolicyHolds();
  }
  takeStreamEventBuffer(e = !1) {
    if (!e) {
      if (this.streamEventTimer) {
        if (this.firstTextFrameUpload) ct(this.firstTextFrameUpload.timing, Date.now() - this.streamEventFlushDueAt);
        clearTimeout(this.streamEventTimer), this.streamEventTimer = null;
      }
      if (this.streamEventTimerIsSlow = !1, this.firstDeltaFlushTimer) clearTimeout(this.firstDeltaFlushTimer), this.firstDeltaFlushTimer = null;
    }
    let release_3,
      n = e ? [] : this.parkedRows;
    for (let {
      message: message_2
    } of n) release_3 ??= this.releaseFor(message_2);
    if (this.streamEventBuffer.length === 0) return {
      events: e ? [] : this.takeParkedRows(),
      release: release_3,
      firstFrames: !1
    };
    let r = [],
      h,
      estimated_tokens_delta = 0;
    for (let P of this.streamEventBuffer) {
      if (P.type === "stream_event") {
        r.push(P);
        continue;
      }
      estimated_tokens_delta = (h !== void 0 && P.estimated_tokens - P.estimated_tokens_delta === h.estimated_tokens ? estimated_tokens_delta : 0) + P.estimated_tokens_delta, h = P;
    }
    this.streamEventBuffer = [];
    let v = this.bufferHoldsFirstFrames;
    this.bufferHoldsFirstFrames = !1, this.streamEventsTakenAt = Date.now();
    for (let P of this.trackedFrameUploads("enqueuedAtMs")) P.uuid = Cmi(r, P.uuid);
    let events_3 = _ar(r).filter(item => {
      let F = Buffer.byteLength(_(item));
      if (F <= jEn) return !0;
      return Ue(item, F), !1;
    }).map(P => ({
      payload: P,
      ephemeral: !0
    }));
    if (h) events_3.push(this.toClientEvent({
      ...h,
      estimated_tokens_delta: estimated_tokens_delta
    }));
    if (!e) events_3.push(...this.takeParkedRows());
    return {
      events: events_3,
      release: release_3,
      firstFrames: v
    };
  }
  currentUploadTrim() {
    let e = this.uploadTrim();
    return D(e) ? e : pt;
  }
  async writeInternalEvent(type_2, s, {
    isCompaction = !1,
    agentId: r,
    preservedEventIds: preservedEventIds
  } = {}) {
    let preserved_event_ids = preservedEventIds,
      v = ot(s);
    if (preserved_event_ids && preserved_event_ids.length > cap) l("tengu_ccr_preserved_event_ids_clamped", {
      originalCount: preserved_event_ids.length,
      cap: cap,
      payloadClamped: v !== null
    }), preserved_event_ids = preserved_event_ids.slice(-cap);
    let y = v ?? s;
    if (this.currentUploadTrim().envelope === !0) {
      let H = ZHi(y, this.keepsRequestId);
      if (H !== y && !this.loggedTranscriptEnvelopeStrip) this.loggedTranscriptEnvelopeStrip = !0, g("ccr_worker_envelope_strip");
      if (!this.loggedRequestIdKept && Dfo(H) && typeof H.requestId === "string" && this.keepsRequestId()) this.loggedRequestIdKept = !0, g("ccr_worker_error_request_id_kept");
      y = H;
    }
    if (type_2 === "transcript" && y.type === "user") {
      let toolUseResult = this.uploadedToolResult(y.toolUseResult, y.message, y.isVirtual === !0);
      if (toolUseResult !== y.toolUseResult) y = {
        ...y,
        toolUseResult: toolUseResult
      };
    }
    let O = {
        payload: {
          type: type_2,
          ...y,
          uuid: typeof y.uuid === "string" ? y.uuid : Ee()
        },
        ...(isCompaction && {
          is_compaction: !0
        }),
        ...(r && {
          session_agent_id: r
        }),
        ...(preserved_event_ids?.length && {
          preserved_event_ids: preserved_event_ids
        })
      },
      M = [O],
      P = r || "",
      F = this.rowsAwaitingCompactSummary.get(P);
    if (type_2 === "transcript" && (F !== void 0 || isCompaction && this.rowsAwaitingCompactSummaryAtClose === void 0)) {
      if (F === void 0) F = {
        rows: [],
        timer: this.startCompactSummaryWaitTimer(P)
      }, this.rowsAwaitingCompactSummary.set(P, F);
      F.rows.push(O);
      let H = y.isCompactSummary === !0 ? "summary" : y.type === "user" || y.type === "assistant" ? "user_or_assistant_row" : F.rows.length >= or ? "row_cap" : void 0;
      if (H === void 0) return;
      M = this.takeRowsAwaitingCompactSummary(P, H);
    }
    let S = type_2 === "transcript" && y.type === "user" && this.toolResultReleases(y.message),
      B = this.gatesToolCalls && type_2 === "transcript" && !r ? de(y) : [];
    if (await this.queueInternalEvents(M, S ? "tool_result" : B.some(item => this.awaitedToolCalls.has(item)) ? "tool_call" : !this.transcriptRowMayWait(type_2, y, r) ? "event" : void 0), type_2 === "transcript") this.transcriptLaneInUse = !0;
    this.noteToolCallRows("internal_events", B, "queued");
  }
  async queueInternalEvents(e, s) {
    let n = e[0]?.is_compaction === !0 && this.holdRule !== void 0;
    if (n) this.releaseClientEvents("event", "compaction");
    let h = (e[0]?.is_compaction === !0 && e[0].session_agent_id === void 0 ? this.rowsRepeatedAfterCompaction?.() ?? [] : []).map(({
        eventType: v,
        payload: payload_2
      }) => ({
        payload: {
          type: v,
          ...payload_2,
          uuid: Ee()
        }
      })),
      w = [...e, ...h];
    this.markInternalEventPostWatch(v => v.noteQueued(w)), await this.internalEventUploader.enqueue(w, {
      together: !0,
      release: n ? "event" : s
    });
  }
  startCompactSummaryWaitTimer(e) {
    let s = setTimeout((n, r) => {
      let h = n.rowsAwaitingCompactSummary.get(r);
      if (n.closed || h === void 0) return;
      if (!n.internalEventUploader.hasRoomFor(1)) {
        h.timer = n.startCompactSummaryWaitTimer(r);
        return;
      }
      n.queueInternalEvents(n.takeRowsAwaitingCompactSummary(r, "timeout"), void 0).catch(a);
    }, ar, this, e);
    return s.unref?.(), s;
  }
  takeRowsAwaitingCompactSummary(e, reason_4) {
    let n = this.rowsAwaitingCompactSummary.get(e);
    this.rowsAwaitingCompactSummary.delete(e), clearTimeout(n?.timer);
    let r = n?.rows ?? [];
    if (reason_4 !== "summary" && reason_4 !== "close") V("info", "cli_worker_compaction_marker_uploaded_without_summary", {
      reason: reason_4,
      count: r.length,
      subagent: e !== ""
    });
    return r;
  }
  transcriptRowMayWait(e, s, n) {
    let flushPolicy_6 = this.flushPolicy;
    if (this.holdRule !== "served_policy" || !flushPolicy_6) return !0;
    let h = e === "transcript" ? s.type : e;
    if (typeof h !== "string" || flushPolicy_6.mustFlushTypes.has(h)) return !1;
    if (h === "attachment" && !n && D(s.attachment) && s.attachment.type === "prompt_snapshot") return this.internalEventUploader.hasHeld(w => w.session_agent_id === void 0 && (w.payload.type === "assistant" || w.payload.type === "user" && (w.payload.toolUseResult !== void 0 || _e(w.payload.message))));
    if (h === "user") {
      if (flushPolicy_6.holdAcrossModelCalls && this.turnHold === "open" && !n) return !1;
      return s.toolUseResult !== void 0 || _e(s.message) || s.isMeta === !0 || s.isVirtual === !0 || s.isCompactSummary === !0;
    }
    return !(h === "assistant" && flushPolicy_6.flushOnAssistant);
  }
  flushInternalEvents(e) {
    return this.internalEventUploader.flush(e);
  }
  watchInternalEventPosts() {
    let e = new Ie(this.internalEventUploader.backlog().unsent);
    return this.internalEventPostWatch = e, s => {
      if (this.internalEventPostWatch === e) this.internalEventPostWatch = void 0;
      return e.seen(s);
    };
  }
  markInternalEventPostWatch(e) {
    let internalEventPostWatch = this.internalEventPostWatch;
    if (internalEventPostWatch === void 0) return;
    try {
      e(internalEventPostWatch);
    } catch (error) {
      this.internalEventPostWatch = void 0, a(error);
    }
  }
  hasUnsentUploads() {
    let {
      unsentClientEvents: unsentClientEvents_2,
      unsentInternalEvents: unsentInternalEvents_2
    } = this.uploadBacklog();
    return this.streamEventTimer !== null || unsentClientEvents_2 > 0 || unsentInternalEvents_2 > 0 || this.deliveryUploader.backlog().unsent > 0 || this.workerState.unsent;
  }
  uploadBacklog() {
    let e = this.eventUploader.backlog(),
      s = this.internalEventUploader.backlog(),
      n = [e.inFlightMs, s.inFlightMs].filter(item => item !== void 0);
    return {
      unsentClientEvents: e.unsent,
      unsentInternalEvents: s.unsent + this.countRowsAwaitingCompactSummary(),
      oldestInFlightMs: n.length ? Math.max(...n) : void 0,
      backingOff: e.backingOff || s.backingOff
    };
  }
  async postInternalEventsBatch(events_4, s = {}) {
    let n = this.refuseInternalEventsCall(!0);
    if (n) return n;
    let epochMismatchCount = this.epochMismatchCount;
    try {
      let h = await this.request("post", "/worker/internal-events", {
        worker_epoch: this.workerEpoch,
        events: events_4
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
        };
      }
      return this.internalEventsFailure(h, epochMismatchCount);
    } catch (error) {
      return this.internalEventsFailure({
        reason: `fetch_failed:${ke(error)}`
      }, epochMismatchCount);
    }
  }
  async getInternalEventsPage(e, s = {}) {
    let n = this.refuseInternalEventsCall(!1);
    if (n) return n;
    let r = new URL(`${this.sessionBaseUrl}/worker/internal-events`);
    if (e.limit !== void 0) r.searchParams.set("limit", String(e.limit));
    if (e.agentId) r.searchParams.set("session_agent_id", e.agentId);
    if (e.subagents) r.searchParams.set("subagents", "true");
    if (e.cursor) r.searchParams.set("cursor", e.cursor);else if (e.afterEventId) r.searchParams.set("after_event_id", e.afterEventId);
    let epochMismatchCount_2 = this.epochMismatchCount,
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
          S = await y.json();
        } catch (error) {
          if (!(error instanceof SyntaxError)) throw error;
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
          ...(B.data.next_cursor && {
            nextCursor: B.data.next_cursor
          }),
          bytes: Number.isFinite(H) ? H : null
        };
      }
      let errorType, resourceType, retryAfterMs, closedConflict;
      if (y.status === 409) {
        let S = await qe(y);
        if (this.closed) closedConflict = S ?? this.lastEpochMismatchCause ?? "epoch_conflict";else try {
          this.handleEpochMismatch(S);
        } catch (error) {
          t(`CCRClient: onEpochMismatch threw during a page read: ${d(error)}`);
        }
      } else if (y.status === 404) try {
        let S = await y.json();
        if (typeof S?.error?.type === "string") errorType = S.error.type;
        if (typeof S?.error?.resource_type === "string") resourceType = S.error.resource_type;
      } catch {} else {
        if (y.status === 429) {
          let S = parseInt(y.headers.get("retry-after") ?? "", 10);
          if (!isNaN(S) && S >= 0) retryAfterMs = S * 1000;
        }
        y.body?.cancel();
      }
      return t(`CCRClient: internal events page returned ${y.status}`, {
        level: "warn"
      }), V("warn", "cli_worker_request_failed", {
        method: "get",
        path: "/worker/internal-events",
        status: y.status
      }), this.internalEventsFailure({
        status: y.status,
        retryAfterMs: retryAfterMs,
        reason: `http_${y.status}`
      }, epochMismatchCount_2, {
        errorType: errorType,
        resourceType: resourceType,
        closedConflict: closedConflict
      });
    } catch (error) {
      return t(`CCRClient: internal events page failed: ${d(error)}`, {
        level: "warn"
      }), this.internalEventsFailure({
        reason: `fetch_failed:${ke(error)}`
      }, epochMismatchCount_2);
    } finally {
      w?.cleanup();
    }
  }
  refuseInternalEventsCall(e) {
    if (this.closed) return {
      ok: !1,
      reason: "client_closed",
      ...(this.lastEpochMismatchCause && {
        conflict: this.lastEpochMismatchCause
      })
    };
    if (e && this.workerEpoch <= 0) return {
      ok: !1,
      reason: "not_initialized"
    };
    return;
  }
  internalEventsFailure(e, s, {
    errorType: errorType_2,
    resourceType: resourceType_2,
    closedConflict: closedConflict_2
  } = {}) {
    let conflict = closedConflict_2 ?? (this.epochMismatchCount > s ? this.lastEpochMismatchCause : e.status === 409 ? this.lastEpochMismatchCause ?? "epoch_conflict" : void 0),
      status_5 = e.status ?? (conflict && un[conflict] ? 409 : void 0);
    return {
      ok: !1,
      reason: status_5 === 409 ? "http_409" : e.reason ?? "unknown",
      ...(status_5 !== void 0 && {
        status: status_5
      }),
      ...(e.retryAfterMs !== void 0 && {
        retryAfterMs: e.retryAfterMs
      }),
      ...(conflict && {
        conflict: conflict
      }),
      ...(errorType_2 && {
        errorType: errorType_2
      }),
      ...(resourceType_2 && {
        resourceType: resourceType_2
      })
    };
  }
  droppedInternalEventBatches = 0;
  get droppedInternalBatches() {
    return this.droppedInternalEventBatches;
  }
  refusedInternalEventUuids = new Set();
  refusedInternalEvents(e) {
    return e.filter(item => this.refusedInternalEventUuids.has(item));
  }
  noteRefusedInternalEvents(e) {
    for (let {
      payload: payload_3,
      session_agent_id: session_agent_id
    } of e) if (session_agent_id === void 0) this.refusedInternalEventUuids.add(payload_3.uuid);
    let s = this.refusedInternalEventUuids.size - wn;
    for (let n of this.refusedInternalEventUuids) {
      if (s-- <= 0) break;
      this.refusedInternalEventUuids.delete(n);
    }
  }
  dropOrphanedHandedOffLines(e) {
    let s = 0;
    for (let n = 0; n < e.length;) {
      let r = e[n],
        {
          payload: payload_4
        } = r;
      if (r.session_agent_id === void 0 && (payload_4.handedOff === !0 || payload_4.type === "system" && payload_4.subtype === yn) && !(payload_4.type === "user" && !_e(payload_4.message)) && typeof payload_4.parentUuid === "string" && this.refusedInternalEventUuids.has(payload_4.parentUuid)) {
        e.splice(n, 1), s++, this.noteRefusedInternalEvents([r]);
        continue;
      }
      n++;
    }
    return s;
  }
  droppedDeliveryAckBatches = 0;
  deliveryAcksWaitingForRoom = new Set();
  async flushDeliveryAcksConfirmed() {
    let droppedDeliveryAckBatches = this.droppedDeliveryAckBatches;
    if (this.receiptsRide) await this.receiptsRide.promise;
    return this.sendWaitingReceipts(), await Promise.all(this.deliveryAcksWaitingForRoom), await this.deliveryUploader.flush(), this.droppedDeliveryAckBatches === droppedDeliveryAckBatches && !this.closed;
  }
  flushDeliveryAcks(e) {
    if (this.receiptsRide) return this.receiptsRide.promise.then(() => this.flushDeliveryAcks(e));
    return this.sendWaitingReceipts(), this.deliveryUploader.flush(e);
  }
  async flush(e) {
    if (this.waitingAnswers.length > 0) await this.writeEvents([]);
    return await this.flushStreamEventBuffer(), this.eventUploader.flush(e);
  }
  withdrawQueuedControlRequest(e) {
    let s = n => !n.ephemeral && n.payload.type === "control_request" && n.payload.request_id === e;
    return this.eventUploader.withdraw(s);
  }
  droppedDurableEventBatches = 0;
  get droppedDurableBatches() {
    return this.droppedDurableEventBatches;
  }
  takeUndeliveredClientEvents() {
    return this.eventUploader.takeUndelivered().filter(item => !item.ephemeral);
  }
  discardUndeliveredClientEvents() {
    let e = this.eventUploader.peekUndelivered().filter(item => !item.ephemeral);
    return this.eventUploader.discardUndelivered(), e;
  }
  adoptClientEvents(e) {
    if (e.length === 0) return;
    this.eventUploader.enqueue(e);
  }
  async flushWorkerState() {
    return this.workerState.flush();
  }
  droppedWorkerStatePatchCount = 0;
  droppedOwedMetadataPatchCount = 0;
  get droppedWorkerStatePatches() {
    return this.droppedWorkerStatePatchCount;
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
      });
    }, this, this.refusedSwitchedOffMcpServers);
  }
  async readInternalEvents(e, s, n) {
    return m$.readInternalEventsFrom(this.readSource, e, s, n);
  }
  async readInternalEventsForCatchUp(signal_3, after_event_id, n) {
    return m$.paginatedGet(this.readSource, "/worker/internal-events", {
      limit: "1000",
      ...(after_event_id && {
        after_event_id: after_event_id
      })
    }, "internal_events", {
      maxAttempts: maxAttempts,
      signal: signal_3
    }, n);
  }
  static readInternalEventsFrom(e, after_event_id_2, signal_4, r) {
    return m$.paginatedGet(e, "/worker/internal-events", {
      limit: "1000",
      ...(after_event_id_2 && {
        after_event_id: after_event_id_2
      })
    }, "internal_events", {
      signal: signal_4
    }, r);
  }
  async readSubagentInternalEvents() {
    return m$.readSubagentInternalEventsFrom(this.readSource);
  }
  static readSubagentInternalEventsFrom(e) {
    return m$.paginatedGet(e, "/worker/internal-events", {
      subagents: "true",
      limit: "1000"
    }, "subagent_events");
  }
  async readAgentInternalEvents(session_agent_id_2, signal_5, n, after_event_id_3, h = !1) {
    return m$.paginatedGet(this.readSource, "/worker/internal-events", {
      session_agent_id: session_agent_id_2,
      limit: "1000",
      ...(after_event_id_3 && {
        after_event_id: after_event_id_3
      })
    }, "agent_events", {
      maxAttempts: maxAttempts,
      signal: signal_5
    }, n, Boolean(after_event_id_3), h);
  }
  async readAgentMetadataEvents(e, signal_6) {
    let reason_5 = St() ? "essential-traffic-only" : this.providerWithheldReason();
    if (reason_5 !== void 0) return V("info", "cli_worker_request_withheld", {
      method: "post",
      path: "/worker/agent-metadata-events/batch-get",
      reason: reason_5
    }), null;
    let h = [];
    for (let session_agent_ids of H1e(L(e), fn)) {
      let v = this.readSource.getAuthHeaders();
      if (Object.keys(v).length === 0) return null;
      let y = await m$.getWithRetry({
        ...this.readSource,
        onConflict: void 0
      }, `${this.readSource.sessionBaseUrl}/worker/agent-metadata-events/batch-get`, v, "agent_metadata_events", void 0, status_6 => {
        V("warn", "cli_worker_request_failed", {
          method: "post",
          path: "/worker/agent-metadata-events/batch-get",
          status: status_6
        });
      }, {
        signal: signal_6,
        postJson: _({
          session_agent_ids: session_agent_ids
        }),
        permanentStatuses: [403, 404, 501],
        readBody: async O => {
          let M;
          try {
            M = await O.json();
          } catch (error) {
            if (!(error instanceof SyntaxError)) throw error;
          }
          let P = Rn().safeParse(M);
          if (!P.success) return V("warn", "cli_worker_agent_metadata_events_foreign"), null;
          return P.data.data ?? [];
        }
      });
      if (y === null) return null;
      h.push(...y);
    }
    return h;
  }
  static async paginatedGet(e, s, n, context, h = {}, w, v = !1, y = !1) {
    let O = e.getAuthHeaders();
    if (Object.keys(O).length === 0) return null;
    let M = v ? {
        ...h,
        maxAttempts: 1
      } : h,
      events_5 = [],
      F,
      pageCount = 0,
      B = 0,
      bytesDecoded = 0,
      bytesReceived = 0,
      q = null;
    do {
      let X = new URL(`${e.sessionBaseUrl}${s}`);
      for (let [x, Q] of Object.entries(n)) X.searchParams.set(x, Q);
      if (F) X.searchParams.set("cursor", F), X.searchParams.delete("after_event_id");
      let z = !F && n.after_event_id !== void 0,
        anchorFallback,
        R = await m$.getWithRetry(e, X.toString(), O, context, x => {
          pageCount++, q ??= x.headers.get("content-encoding");
          let Q = x.headers.get("content-length");
          if (Q !== null && bytesReceived !== null) bytesReceived += Number(Q);else bytesReceived = null;
        }, (x, Q) => {
          if (!z) return;
          if (x === 400) anchorFallback = "rejected";else if (Q === "after_event_id_not_found") anchorFallback = "not-found";
        }, w === void 0 ? M : {
          ...M,
          unencoded: !w.takesCompressedPages,
          readBody: async x => {
            let Q = x.headers.get("content-encoding");
            if (!w.takesCompressedPages && Q !== null && Q !== "identity") return await x.body?.cancel(), {
              encodedBody: !0
            };
            let K = await _n(x, w.maxBytes - bytesDecoded);
            if (K === null) return {
              pastMaxBytes: !0
            };
            let j = w.parsePage ? await w.parsePage(K.text) : ee(K.text);
            if (!D(j) || !Array.isArray(j.data) || !j.data.every(D)) throw Error("CCRClient: a page is no list of events");
            return bytesDecoded += K.bytes, j;
          }
        });
      if (R?.encodedBody) return {
        events: [],
        stats: {
          pageCount: pageCount,
          bytesReceived: bytesReceived,
          contentEncoding: q ?? "none"
        },
        encodedBody: !0
      };
      if (!R) {
        if (anchorFallback) {
          if (t(`CCRClient: after_event_id ${anchorFallback === "rejected" ? "rejected by server (gate off)" : "not found (stale anchor)"} \u2014 ${y ? "read failed, no refetch" : "refetching without anchor"}`, {
            level: "warn"
          }), V("warn", anchorFallback === "rejected" ? "cli_worker_after_event_id_rejected" : "cli_worker_after_event_id_not_found", {
            context: context
          }), y) return null;
          let {
              after_event_id: after_event_id_4,
              ...Q
            } = n,
            K = await m$.paginatedGet(e, s, Q, context, h, w);
          if (!K) return null;
          return {
            ...K,
            anchorFallback: anchorFallback
          };
        }
        return null;
      }
      for (let x of R.data ?? []) if (!n$i(x.payload)) events_5.push(Ut(x));
      B += Math.max(1, R.data?.length ?? 0);
      let overBoundBy = w === void 0 ? void 0 : R.pastMaxBytes === !0 ? "bytes" : B > w.maxEvents ? "events" : (R.data ?? []).some(item => !mn(item, w.maxTimestampChars)) ? "timestamp" : void 0;
      if (v && R.next_cursor || overBoundBy !== void 0) {
        if (overBoundBy !== void 0 && !y) w?.onPassed?.(overBoundBy);
        return {
          events: [],
          stats: {
            pageCount: pageCount,
            bytesReceived: bytesReceived,
            contentEncoding: q ?? "none"
          },
          overBound: !0,
          ...(overBoundBy !== void 0 && {
            overBoundBy: overBoundBy
          })
        };
      }
      F = R.next_cursor;
    } while (F);
    return t(`CCRClient: Read ${events_5.length} internal events from ${s}${n.subagents ? " (subagents)" : ""}`), {
      events: events_5,
      stats: {
        pageCount: pageCount,
        bytesReceived: bytesReceived,
        contentEncoding: q ?? "none",
        ...(w !== void 0 && {
          bytesDecoded: bytesDecoded
        })
      }
    };
  }
  static getWithRetry(e, s, n, r, h, w, v = {}) {
    return m$.getWithRetryNow(e, s, n, r, h, w, v);
  }
  static async getWithRetryNow(e, url_3, n, context_2, h, w, {
    maxAttempts: maxAttempts_2 = hn,
    signal: signal_7,
    readBody: readBody,
    unencoded: unencoded,
    postJson: P,
    permanentStatuses: permanentStatuses
  }) {
    let S = 0;
    for (let B = 1; B <= maxAttempts_2; B++) {
      if (signal_7?.aborted) return null;
      let H;
      try {
        if (H = await oLt(url_3, {
          ...(P !== void 0 && {
            method: "POST",
            body: P
          }),
          headers: {
            ...n,
            ...(P !== void 0 && {
              "Content-Type": "application/json"
            }),
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": cb(),
            "User-Agent": ui(),
            ...(unencoded && {
              "Accept-Encoding": "identity"
            })
          },
          ...(unencoded && {
            decompress: !1
          }),
          signal: signal_7 ? AbortSignal.any([AbortSignal.timeout(30000), signal_7]) : AbortSignal.timeout(30000),
          ...ba({
            url: url_3
          })
        }, e.ownConnectionPool, e.leavesPoolAfterServerError), H.ok) {
          let q = readBody ? await readBody(H) : await H.json();
          return h?.(H), q;
        }
      } catch (error) {
        if (signal_7?.aborted) return null;
        if (t(`CCRClient: GET ${url_3} failed (attempt ${B}/${maxAttempts_2}): ${d(error)}`, {
          level: "warn"
        }), error instanceof RangeError && ++S >= pn) break;
        if (B < maxAttempts_2) {
          let X = Math.min(500 * 2 ** (B - 1), 30000) + Math.random() * 500;
          await J(X, signal_7);
        }
        continue;
      }
      let N;
      if (H.status === 404 && w) try {
        let q = await H.json();
        if (typeof q?.error?.type === "string") N = q.error.type;
      } catch {} else if (H.status === 409) {
        if (e.isClosed?.()) return await n6(H), null;
        let q = await qe(H);
        if (e.isClosed?.()) return null;
        if (q === void 0 && signal_7?.aborted) return t(`CCRClient: GET ${url_3} returned 409 after its caller ended the read; its reason was not read, so the next request's 409 decides`, {
          level: "warn"
        }), null;
        return e.onConflict?.(q), null;
      } else await n6(H);
      if (re(H.status) || N === "after_event_id_not_found" || permanentStatuses?.includes(H.status) === !0) return t(`CCRClient: GET ${url_3} returned ${H.status} \u2014 permanent, not retrying`, {
        level: "warn"
      }), w?.(H.status, N), null;
      if (t(`CCRClient: GET ${url_3} returned ${H.status} (attempt ${B}/${maxAttempts_2})`, {
        level: "warn"
      }), B < maxAttempts_2) {
        let q = Math.min(500 * 2 ** (B - 1), 30000) + Math.random() * 500;
        await J(q, signal_7);
      }
    }
    return t("CCRClient: GET retries exhausted", {
      level: "error"
    }), V("error", "cli_worker_get_retries_exhausted", {
      context: context_2
    }), null;
  }
  reportDelivery(eventId_2, status_7, n, r) {
    if (n !== void 0 && this.flushPolicy?.holdAcrossModelCalls && this.waitingAnswers.some(Lt)) this.sendWaitingAnswers();
    if (!this.housekeepingRequestIds.has(eventId_2) && (status_7 === "processing" || status_7 === "received" && !r?.controlTraffic)) this.turnTookInput = !0, this.liveOnlyRequestingRow = void 0;
    if (status_7 === "received") {
      this.lastInboundEventAtMs = Date.now();
      let O = r?.controlTraffic === !0 && this.flushPolicy?.controlTrafficKeepsHold === !0;
      if (this.setHasSubscribers(void 0, O ? "reset" : "watcher"), this.holdsAcrossModelCalls() && !O) {
        if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
        this.internalEventUploader.release("event", "inbound_event"), this.releaseClientEvents("event", "inbound_event");
      }
      if (n !== void 0) {
        this.holdsNoMoreThisTurn = !0, this.inboundMessageUuids.add(n);
        let M = this.inboundMessageUuids.values().next().value;
        if (this.inboundMessageUuids.size > Un && M !== void 0) this.inboundMessageUuids.delete(M);
      }
    }
    let h = status_7 !== "received" && this.inboundMessageUuids.delete(eventId_2);
    if (status_7 === "processing") {
      if (this.closed) return;
      if (h && this.receiptsMayRide()) this.messagesInProcessing.add(eventId_2);
      let O = this.pendingProcessingAcks.push(eventId_2) === 1;
      if (this.pickupTakesTick) return;
      if (h && this.holdsAcrossModelCalls() && this.turnHold !== "open") this.pickupTakesTick = !0, this.endWholeTurnHold(), this.ackPickupBehindWrittenRows().catch(a);else if (O) queueMicrotask(() => {
        if (!this.pickupTakesTick) this.sendProcessingAcks(this.pendingProcessingAcks);
      });
      return;
    }
    let w = this.waitingReceipts.has(eventId_2),
      v = status_7 === "processed" && this.messagesInProcessing.delete(eventId_2) && !this.closed && this.receiptsMayRide() && Nt(eventId_2) !== null && (this.resultPostWaits !== void 0 || this.liveViewLaneSendsMore());
    if (this.messagesInProcessing.size === 0) this.resultPostWaits?.();
    let y = (v || status_7 === "received" && (r?.settingsRequest || n !== void 0 && this.flushPolicy?.messagesReceivedWaits)) && !this.closed && this.followsServedPolicy ? this.flushPolicy?.settingsReceiptsMaxWaitMs ?? 0 : 0;
    if (!w && y <= 0) {
      this.queueDeliveryAcks([...this.takeWaitingReceipts(Ae), {
        eventId: eventId_2,
        status: status_7
      }]);
      return;
    }
    if (!w || status_7 === "processed") this.waitingReceipts.set(eventId_2, status_7);
    if (v) this.receiptsRide ??= Promise.withResolvers();
    this.waitingReceiptsTimer ??= setTimeout(() => this.sendWaitingReceipts(), y);
  }
  receiptsMayRide() {
    return this.flushPolicy?.receiptsRideUploads === !0 && this.flushPolicy.settingsReceiptsMaxWaitMs > 0 && !this.receiptsRideRefused && this.followsServedPolicy;
  }
  takeWaitingReceipts(e = () => !0) {
    let s = [...this.waitingReceipts].filter(([n, r]) => e(n, r)).map(([eventId_3, status_8]) => ({
      eventId: eventId_3,
      status: status_8
    }));
    for (let {
      eventId: eventId_4
    } of s) this.waitingReceipts.delete(eventId_4);
    if (this.waitingReceipts.size === 0) clearTimeout(this.waitingReceiptsTimer), this.waitingReceiptsTimer = void 0;
    if (![...this.waitingReceipts.values()].includes("processed")) this.receiptsRide?.resolve(), this.receiptsRide = void 0;
    return s;
  }
  sendWaitingReceipts(e) {
    this.queueDeliveryAcks(this.takeWaitingReceipts(e));
  }
  queueDeliveryAcks(e) {
    let s = !this.deliveryUploader.hasRoomFor(e.length),
      n = this.deliveryUploader.enqueue(e);
    if (s) this.deliveryAcksWaitingForRoom.add(n), n.finally(() => this.deliveryAcksWaitingForRoom.delete(n));
  }
  async sendProcessingAcks(e) {
    let s = e.splice(0);
    if (this.closed || s.length === 0) return;
    let n = this.takeWaitingReceipts(Ae);
    if ((await this.request("post", "/worker/events/delivery", {
      worker_epoch: this.workerEpoch,
      updates: [...s.map(h => ({
        event_id: h,
        status: "processing"
      })), ...n.map(item => ({
        event_id: item.eventId,
        status: item.status
      }))]
    }, "processing ack")).ok) this.takeWaitingReceipts((h, w) => w === "received" && s.includes(h));else this.queueDeliveryAcks(n);
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
      if (await Promise.resolve(), s.eventIds = this.pendingProcessingAcks.splice(0), this.pickupTakesTick = !1, await e, this.pickupBarriers.includes(s)) n = await we(this.storeWrittenRowsThenAck(s.eventIds), this.pickupWaitMs);else n = !0, await this.sendProcessingAcks(s.eventIds);
    } finally {
      let r = this.pickupBarriers.indexOf(s);
      this.openPickupBarriers(r < 0 || n ? r + 1 : this.pickupBarriers.length);
    }
  }
  async storeWrittenRowsThenAck(e) {
    return this.internalEventUploader.release("event", "pickup"), await this.flush(), await this.sendProcessingAcks(e), !0;
  }
  openPickupBarriers(e) {
    for (let s of this.pickupBarriers.splice(0, e)) {
      this.sendProcessingAcks(s.eventIds).catch(a);
      for (let {
        messages: messages_2,
        opts: opts_2,
        written: written_2
      } of s.writes) this.writeEventsNow(messages_2, opts_2).then(written_2.resolve, written_2.reject);
      s.opened.resolve();
    }
  }
  getWorkerEpoch() {
    return this.workerEpoch;
  }
  get internalEventsPending() {
    return this.internalEventUploader.pendingCount + this.countRowsAwaitingCompactSummary() + (this.rowsAwaitingCompactSummaryAtClose ?? 0);
  }
  uploadHoldInAll() {
    let flushPolicy_7 = this.flushPolicy;
    return flushPolicy_7 !== void 0 && this.servedPolicyHolds() ? {
      holdsAcrossModelCalls: flushPolicy_7.holdAcrossModelCalls,
      maxAgeMs: flushPolicy_7.maxAgeMs,
      maxEvents: flushPolicy_7.maxEvents,
      counts: this.uploadHoldTally.counts
    } : void 0;
  }
  uploadLaneCounts() {
    return {
      clientEventsPending: this.eventUploader.pendingCount,
      droppedDurableBatches: this.droppedDurableEventBatches,
      undeliveredClientEventsAtClose: this.undeliveredClientEventsAtClose,
      undeliveredInternalEventsAtClose: this.undeliveredInternalEventsAtClose,
      clientEventsAfterClose: this.eventUploader.handedOverAfterCloseCount,
      internalEventsAfterClose: this.internalEventUploader.handedOverAfterCloseCount
    };
  }
  countRowsAwaitingCompactSummary() {
    let e = 0;
    for (let s of this.rowsAwaitingCompactSummary.values()) e += s.rows.length;
    return e;
  }
  get awaitsCompactSummary() {
    return this.rowsAwaitingCompactSummary.has("");
  }
  hasInternalEventRoom(e) {
    return !this.awaitsCompactSummary && this.internalEventUploader.hasRoomFor(e);
  }
  close(e) {
    if (this.closeExceptInternalEvents(e), this.refusedSwitchedOffMcpServers !== null) V("warn", "cli_worker_switched_off_mcp_servers_not_saved", {
      times_refused_alone: this.switchedOffMcpServersRefusedAlone,
      accepted_writes_until_due: this.refusedSwitchedOffMcpServers.writesToWaitFor
    }), this.refusedSwitchedOffMcpServers = null;
    let s = this.countRowsAwaitingCompactSummary();
    for (let n of this.rowsAwaitingCompactSummary.keys()) this.takeRowsAwaitingCompactSummary(n, "close");
    this.rowsAwaitingCompactSummaryAtClose ??= s, this.logUndeliveredAtClose("internal_events", this.internalEventUploader.close() + s);
  }
  flushGoodbye() {
    return this.goodbyeFlushed;
  }
  closeExceptInternalEvents(e) {
    this.sendWaitingAnswers(), this.openPickupBarriers(this.pickupBarriers.length);
    let closed = this.closed;
    this.closed = !0, this.giveBackRidingRows(), this.workerSocket?.usePostFromNowOn(), this.closeAbort.abort(), this.closingForSuccessor = e?.retainUndeliveredClientEvents === !0;
    let n = this.takeParkedRows();
    if (n.length > 0) this.eventUploader.enqueue(n);
    if (e?.keepWaitingWorkerMetadata === !0) this.workerState.closeToNewPatches();else this.workerState.close();
    if (!closed && e?.goodbye !== !1) this.sendGoodbye();
    if (this.stopHeartbeat(), this.clearProbeBeatTimer(), this.viewerCheckpointTimer) clearTimeout(this.viewerCheckpointTimer), this.viewerCheckpointTimer = null;
    this.unsubscribeIdleTracker?.(), rqi(), this.stopWorkStartKeepAlive?.(), this.stopToolCallGate?.();
    for (let r of this.toolCallRowWaiters.values()) for (let h of r) h.reached();
    if (this.toolCallRowWaiters.clear(), this.streamEventTimer) clearTimeout(this.streamEventTimer), this.streamEventTimer = null;
    if (this.firstDeltaFlushTimer) clearTimeout(this.firstDeltaFlushTimer), this.firstDeltaFlushTimer = null;
    if (this.streamEventBuffer = [], this.pendingProcessingAcks = [], this.receiptsRide) this.sendWaitingReceipts(Ae);
    if (clearTimeout(this.waitingReceiptsTimer), e?.keepClientEvents !== !0) this.logUndeliveredAtClose("client_events", this.eventUploader.close({
      retainUndelivered: e?.retainUndeliveredClientEvents === !0
    }));
    this.deliveryUploader.close();
  }
  registerShutdownCleanup(e = {
    registerCleanup: registerCleanup,
    registerPreExitFlush: registerPreExitFlush
  }, s = Ft) {
    e.registerCleanup(() => this.beginShutdown()), e.registerPreExitFlush(() => this.finishShutdown(s));
  }
  beginShutdown() {
    this.shutdownBeganAtMs = performance.now(), this.owedMetadataDropsAtShutdown = this.droppedOwedMetadataPatchCount, this.sendWaitingReceipts();
    try {
      let e = !this.closed && this.currentState === "running" && this.followsServedPolicy;
      if (this.shutdownKeepsClientEvents = e || !this.closed && this.servedPolicyHolds(), this.shutdownKeepsClientEvents) this.shutdownReleased = !0, this.applyUploadHold("shutdown");
    } finally {
      this.closeExceptInternalEvents({
        keepClientEvents: this.shutdownKeepsClientEvents,
        keepWaitingWorkerMetadata: !0
      });
    }
  }
  async finishShutdown(e = Ft, s = 1 / 0) {
    let n = performance.now();
    await this.flushGoodbye();
    let r = Math.max(0, s - (performance.now() - n)),
      owesMetadata = this.workerState.owesMetadata;
    try {
      await we(Promise.allSettled([this.flushEventLanesAtShutdown(Math.min(e, r)), owesMetadata ? we(this.flushWorkerState().then(() => this.flushEventLanesAtShutdown(e)), Math.max(0, Math.min(e - (performance.now() - this.shutdownBeganAtMs), r))) : void 0]), e);
    } finally {
      let w = this.droppedOwedMetadataPatchCount > this.owedMetadataDropsAtShutdown;
      if (owesMetadata || this.workerState.hasCutKeptMetadata || w) V("info", "cli_worker_metadata_at_shutdown", {
        outcome: this.workerState.owesMetadata ? "timed_out" : this.workerState.hasCutKeptMetadata ? "cut" : w ? "refused" : "drained"
      });
      this.close(), this.onInternalEventLaneClosed?.(), await Pqe().catch(() => {});
    }
  }
  flushEventLanesAtShutdown(e) {
    return Promise.allSettled([this.flushInternalEvents(), this.shutdownKeepsClientEvents ? we(this.flush(), e) : void 0]);
  }
}
var Ft = 3000;
function vr(e) {
  let post_turn_summary = e.post_turn_summary;
  if (!gr(post_turn_summary) || post_turn_summary.status_category !== "blocked") return e;
  return {
    ...e,
    post_turn_summary: {
      ...post_turn_summary,
      status_category: "need_input"
    }
  };
}
function gr(e) {
  return e !== null && typeof e === "object" && "status_category" in e && typeof e.status_category === "string";
}
async function qe(e) {
  let s = $e(e.headers.get("x-ccr-conflict-reason"));
  if (s !== void 0) return await n6(e), s;
  try {
    let n = await e.json();
    return $e(n?.error?.reason ?? n?.reason) ?? $e(n?.error?.type);
  } catch {}
  return;
}
function $e(e) {
  switch (e) {
    case "superseded_by_worker":
    case "epoch_stale":
    case "session_not_active":
    case "organization_moved_away":
      return e;
    default:
      return;
  }
}
function wr(e) {
  let s = An().safeParse(e);
  if (!s.success) return;
  let n = s.data,
    holdAcrossModelCalls = n.hold_across_model_calls === !0,
    maxAgeMs = ne(n.max_age_ms, holdAcrossModelCalls ? ge : Xt),
    maxEvents = maxAgeMs > 0 ? ne(n.max_events, holdAcrossModelCalls ? Pn : Cn) : 0,
    v = ne(n.max_bytes, Hn),
    y = holdAcrossModelCalls ? 0 : ne(n.transcript_max_age_ms, Qt),
    transcriptMaxAgeMs = y > maxAgeMs ? y : 0,
    M = ne(n.no_turn_max_age_ms, maxAgeMs),
    P = n.policy_version ?? void 0;
  return {
    maxEvents: maxEvents,
    maxAgeMs: maxAgeMs,
    maxBytes: v > 0 ? v : void 0,
    flushOnSamplingEnd: n.flush_on_sampling_end === !0 && !holdAcrossModelCalls,
    flushOnAssistant: n.flush_on_assistant === !0,
    eventBatchUpload: n.event_batch_upload === !0,
    holdAcrossModelCalls: holdAcrossModelCalls,
    holdAgain: holdAcrossModelCalls && n.hold_again ? {
      softAgeMs: ne(n.hold_again.soft_age_ms, maxAgeMs),
      softEvents: ne(n.hold_again.soft_events, maxEvents),
      after: new Set((n.hold_again.after ?? []).slice(0, Tt)),
      neverAfterTools: new Set((n.hold_again.never_after_tools ?? []).slice(0, Ne)),
      toolsWhoseResultsWait: n.hold_again.tools_whose_results_wait ? new Set(n.hold_again.tools_whose_results_wait.slice(0, Ne)) : void 0,
      laterWorkerHoldsFirstTurn: n.hold_again.later_worker_holds_first_turn === !0 && n.live_twin_types?.includes("system/status") === !0
    } : void 0,
    mayWaitTypes: new Set((n.may_wait_types ?? []).filter(item => Mt.has(item))),
    mayWaitTypesRefused: U(n.may_wait_types ?? [], F => !Mt.has(F)),
    settingsReceiptsMaxWaitMs: ne(n.settings_receipts_max_wait_ms, Gn),
    messagesReceivedWaits: n.messages_received_waits === !0,
    receiptsRideUploads: n.receipts_ride_uploads === !0,
    flushBeforeToolsWaitMs: ne(n.flush_before_tools_wait_ms, sr),
    flushAfterTools: rr.find(item => item === n.flush_after_tools) ?? "none",
    flushAfterToolNames: new Set((n.flush_after_tool_names ?? []).slice(0, Ne)),
    mustFlushTypes: new Set((n.must_flush_types ?? []).slice(0, Tt)),
    liveTwinTypes: new Set((n.live_twin_types ?? []).filter(item => !item.startsWith("control_")).slice(0, Xn)),
    liveOnlyTypes: new Set((n.live_only_types ?? []).filter(item => Yn.has(item))),
    transcriptMaxAgeMs: transcriptMaxAgeMs,
    noTurnMaxAgeMs: M < maxAgeMs ? M : 0,
    mergeWorkerReports: n.merge_worker_reports === !0,
    controlTrafficKeepsHold: holdAcrossModelCalls && n.control_traffic_keeps_hold === !0,
    emptyCheckpointKeepsHold: holdAcrossModelCalls && n.empty_checkpoint_keeps_hold === !0,
    firstTurnHoldsEachCall: holdAcrossModelCalls && n.first_turn_holds_each_call === !0,
    settingsAnswersMaxWaitMs: ne(n.settings_answers_max_wait_ms, wt),
    initMaxWaitMs: ne(n.init_max_wait_ms, wt),
    metadataWaitsForStatus: new Set((n.metadata_waits_for_status ?? []).filter(item => Qn.has(item))),
    metadataNeverSent: new Set((n.metadata_never_sent ?? []).filter(item => is.has(item))),
    metadataMaxWaitMs: ne(n.metadata_max_wait_ms, ge),
    costReportMaxWaitMs: ne(n.cost_report_max_wait_ms, Jn),
    policyVersion: P !== void 0 && tr.test(P) ? P : void 0
  };
}
function Ut(e) {
  let payload_5 = H0n(e.payload);
  return payload_5 === e.payload ? e : {
    ...e,
    payload: payload_5
  };
}
function yr(e) {
  return "user_message_uuids" in e && Array.isArray(e.user_message_uuids) && e.user_message_uuids.length > 0 && e.user_message_uuids.every(item => typeof item === "string");
}
function Lt(e) {
  return e.type === "system" && "subtype" in e && e.subtype === "init" && !("parent_tool_use_id" in e && e.parent_tool_use_id);
}
var Sr = new Set(["assistant", "attachment", "result", "system", "user"]);
function Bt(e) {
  let s = e.length === 1 ? e[0].payload : void 0;
  return s && {
    row_type: Sr.has(s.type) ? s.type : "other",
    row_has_tool_result: _e(s.message),
    row_bytes: Buffer.byteLength(_(s))
  };
}
function ce(e) {
  if (e.type === "system" && e.subtype === "task_started" && e.task_type === "local_bash" && e.is_backgrounded === !1 && !("owned_by_subagent" in e && e.owned_by_subagent)) return "system/task_started_foreground_shell";
  if (e.type === "rate_limit_event") {
    let rate_limit_info = e.rate_limit_info;
    if (!D(rate_limit_info) || typeof rate_limit_info.status !== "string") return e.type;
    let n = rate_limit_info.rateLimitGraceActive === !0 ? "_grace" : rate_limit_info.overageInUse === !0 || rate_limit_info.isUsingOverage === !0 ? "_overage" : "";
    return `${e.type}/${rate_limit_info.status}${n}`;
  }
  return "subtype" in e && typeof e.subtype === "string" ? `${e.type}/${e.subtype}` : e.type;
}
function _e(e) {
  let s = D(e) ? e.content : void 0;
  return Array.isArray(s) && s.some(item => D(item) && item.type === "tool_result");
}
var br = new Set(["ReadNotifications"]);
function de(e, s) {
  return D(e) && e.type === "assistant" && e.parent_tool_use_id == null ? Je(e.message, "tool_use", "id", s) : [];
}
function Je(e, s, n, r) {
  let h = D(e) ? e.content : void 0;
  if (!Array.isArray(h)) return [];
  let w = [];
  for (let v of h) if (D(v) && v.type === s && (r === void 0 || typeof v.name === "string" && r.has(v.name))) {
    let y = v[n];
    if (typeof y === "string") w.push(y);
  }
  return w;
}
function ze(e) {
  return new Promise(s => {
    if (e.aborted) s();else e.addEventListener("abort", () => s(), {
      once: !0
    });
  });
}
function fe(e) {
  if (e.size > ir) {
    let s = e.keys().next().value;
    if (s !== void 0) e.delete(s);
  }
}
function ne(e, s) {
  return typeof e === "number" && Number.isFinite(e) ? Math.min(Math.max(0, Math.trunc(e)), s) : 0;
}
function Rr(e, s) {
  if (!e || !s) return e === s;
  return e.maxEvents === s.maxEvents && e.maxAgeMs === s.maxAgeMs && e.maxBytes === s.maxBytes && e.flushOnSamplingEnd === s.flushOnSamplingEnd && e.flushOnAssistant === s.flushOnAssistant && e.eventBatchUpload === s.eventBatchUpload && e.holdAcrossModelCalls === s.holdAcrossModelCalls && e.holdAgain?.softAgeMs === s.holdAgain?.softAgeMs && e.holdAgain?.softEvents === s.holdAgain?.softEvents && Xae(e.holdAgain?.after, s.holdAgain?.after) && Xae(e.holdAgain?.neverAfterTools, s.holdAgain?.neverAfterTools) && Xae(e.holdAgain?.toolsWhoseResultsWait, s.holdAgain?.toolsWhoseResultsWait) && e.holdAgain?.laterWorkerHoldsFirstTurn === s.holdAgain?.laterWorkerHoldsFirstTurn && Xae(e.mayWaitTypes, s.mayWaitTypes) && Xae(e.liveOnlyTypes, s.liveOnlyTypes) && Xae(e.flushAfterToolNames, s.flushAfterToolNames) && e.settingsReceiptsMaxWaitMs === s.settingsReceiptsMaxWaitMs && e.messagesReceivedWaits === s.messagesReceivedWaits && e.receiptsRideUploads === s.receiptsRideUploads && e.flushBeforeToolsWaitMs === s.flushBeforeToolsWaitMs && e.flushAfterTools === s.flushAfterTools && e.mergeWorkerReports === s.mergeWorkerReports && e.transcriptMaxAgeMs === s.transcriptMaxAgeMs && e.noTurnMaxAgeMs === s.noTurnMaxAgeMs && e.controlTrafficKeepsHold === s.controlTrafficKeepsHold && e.emptyCheckpointKeepsHold === s.emptyCheckpointKeepsHold && e.firstTurnHoldsEachCall === s.firstTurnHoldsEachCall && e.settingsAnswersMaxWaitMs === s.settingsAnswersMaxWaitMs && e.initMaxWaitMs === s.initMaxWaitMs && e.policyVersion === s.policyVersion && e.mustFlushTypes.size === s.mustFlushTypes.size && [...e.mustFlushTypes].every(item => s.mustFlushTypes.has(item)) && e.liveTwinTypes.size === s.liveTwinTypes.size && [...e.liveTwinTypes].every(item => s.liveTwinTypes.has(item)) && e.metadataMaxWaitMs === s.metadataMaxWaitMs && e.costReportMaxWaitMs === s.costReportMaxWaitMs && e.metadataWaitsForStatus.size === s.metadataWaitsForStatus.size && [...e.metadataWaitsForStatus].every(item => s.metadataWaitsForStatus.has(item)) && Xae(e.metadataNeverSent, s.metadataNeverSent);
}
function ue(e, s, n) {
  let r = typeof s === "string" ? Number(s) : s;
  if (typeof r === "number" && Number.isFinite(r)) return Math.min(Math.max(r, 0), 60000);
  if (s !== void 0) t(`CCRClient: non-finite ${e} (${typeof s}) \u2014 using ${n}ms`, {
    level: "warn"
  });
  return n;
}
function Er(e) {
  return Math.min(ue("thinkingFlushMs", e, 0), qn);
}
function kr(e) {
  return Math.min(ue("toolInputFlushMs", e, 0), $n);
}
function Tr(e) {
  return Math.min(ue("liveTwinWaitMs", e, 0), zn);
}
function Ht(e) {
  return e.type === "system" && "subtype" in e && e.subtype === "thinking_tokens";
}
function M7o(e) {
  switch (e.type) {
    case "user":
    case "stream_event":
    case "tool_progress":
      return !0;
    case "assistant":
      return !e.message.content.some(item => item.type === "tool_use" && (item.name === "SendUserMessage" || item.name === "PushNotification"));
    case "system":
      return "subtype" in e && (e.subtype === "thinking_tokens" || e.subtype === "task_progress" || e.subtype === "hook_progress");
    default:
      return !1;
  }
}
function je(e, s) {
  let uRLSearchParams = new URLSearchParams();
  if (e) uRLSearchParams.set("include_hearth", "true");
  if (s) uRLSearchParams.set("transcript_after_event_id", s);
  let r = uRLSearchParams.toString();
  return r ? `?${r}` : "";
}
function Mr(e) {
  let s = e?.transcript_position?.foreground;
  if (s === void 0) return;
  return s === "at_event" || s === "past_event" ? s : "unknown";
}
function Dt(e) {
  return e?.hearth;
}
function qt(e, s) {
  return e.historical === !0 && s.has(e.payload.uuid);
}
function Ze(e) {
  return e.payload.type === "user";
}
function mar(e) {
  let s = e?.isTurnRunning ?? (() => RNe() > 0),
    n = De(),
    r = Date.now();
  return {
    noteActivity() {
      r = Date.now();
      try {
        n.emit();
      } catch (error) {
        a(error);
      }
    },
    sampleIdleSeconds() {
      let h = Date.now();
      if (s()) return r = h, 0;
      return Math.max(0, Math.floor((h - r) / 1000));
    },
    onActivity: n.subscribe
  };
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
    this.dispatchedSeen = e.framesDispatched;
  }
  observe(e, s) {
    let n = this.decoder.framesDispatched - this.dispatchedSeen;
    if (this.dispatchedSeen = this.decoder.framesDispatched, this.watch === null && this.decoder.pendingChars === 0 && !s.some(cs)) return;
    if (this.disabled) return;
    try {
      this.onRead(e, n, s);
    } catch (error) {
      this.disable(error);
    }
  }
  stop() {
    this.cancelTick?.(), this.cancelTick = null, this.nextTickDueMs = 1 / 0, this.watch = null;
  }
  onRead(bytes_3, s, n) {
    let r = this.clock.nowMs(),
      h = this.clock.cpuMicros(),
      w = s > 0 && this.decoder.pendingChars > 0 ? Math.min(Buffer.byteLength(this.decoder.buffered()), bytes_3) : 0,
      watch = this.watch,
      before = null;
    if (watch !== null) {
      if (watch.reads === 0 && s === 0 && !this.frameHasBegun()) return;
      let O = {
        gapMs: r - watch.lastReadAtMs,
        loopLagMs: this.loopLagAt(r),
        cpuMs: (h - watch.lastCpuMicros) / 1000
      };
      if (this.stop(), watch.reads === 0) {
        if (O.loopLagMs !== null && O.gapMs - O.loopLagMs <= ds) before = {
          gapMs: O.gapMs,
          loopLagMs: O.loopLagMs,
          cpuMs: O.cpuMs
        };
      } else {
        if (O.gapMs > watch.maxGap.gapMs) watch.maxGap = O, watch.maxGapOffsetBytes = watch.bytes;
        if (watch.reads++, watch.bytes += bytes_3, watch.lastReadAtMs = r, watch.lastCpuMicros = h, s === 0) {
          this.watch = watch, this.armTick(r);
          return;
        }
        watch.bytes -= w, this.report(watch, r);
      }
    }
    if (this.frameHasBegun()) {
      this.watch = et(r, h, {
        reads: 1,
        bytes: s === 0 ? bytes_3 : w,
        before: s === 0 ? before : null
      }), this.armTick(r);
      return;
    }
    if (before !== null && s === 1) this.report(et(r, h, {
      reads: 1,
      bytes: bytes_3,
      before: before
    }), r);
    if (n.some(cs)) this.watch = et(r, h, {
      reads: 0,
      bytes: 0,
      before: null
    }), this.armTick(r);
  }
  frameHasBegun() {
    let pendingChars = this.decoder.pendingChars;
    return pendingChars > Or || pendingChars > 0 && /[^\r\n]/.test(this.decoder.buffered());
  }
  report(e, s) {
    let {
        before: before_2,
        maxGap: maxGap
      } = e,
      h = before_2 !== null && before_2.loopLagMs >= ls && e.bytes >= Ar;
    if (maxGap.gapMs < ls && !h) return;
    if (s - this.lastLineAtMs < Pr) return;
    this.lastLineAtMs = s, this.sink({
      frame_kib: ie(e.bytes / 1024, us),
      read_count: ie(e.reads, Ir),
      receive_ms: ie(s - e.startedAtMs, he),
      ...(before_2 !== null && {
        before_frame_gap_ms: ie(before_2.gapMs, he),
        before_frame_loop_lag_ms: ie(before_2.loopLagMs, he),
        before_frame_cpu_ms: ie(before_2.cpuMs, he)
      }),
      max_gap_ms: ie(maxGap.gapMs, he),
      max_gap_offset_kib: ie(e.maxGapOffsetBytes / 1024, us),
      ...(maxGap.loopLagMs !== null && {
        max_gap_loop_lag_ms: ie(maxGap.loopLagMs, he)
      }),
      max_gap_cpu_ms: ie(maxGap.cpuMs, he)
    });
  }
  loopLagAt(e) {
    if (this.nextTickDueMs !== 1 / 0) return Math.max(this.lastTickLagMs, e - this.nextTickDueMs, 0);
    return e - this.lastTickAtMs <= ye ? this.lastTickLagMs : null;
  }
  armTick(e) {
    this.lastTickLagMs = 0, this.lastTickAtMs = e, this.nextTickDueMs = e + ye, this.cancelTick = this.clock.setTimer(this.onTick, ye);
  }
  onTick = () => {
    try {
      this.cancelTick = null;
      let watch_2 = this.watch;
      if (watch_2 === null) return;
      let s = this.clock.nowMs();
      this.lastTickLagMs = Math.max(s - this.nextTickDueMs, 0), this.lastTickAtMs = s;
      let n = watch_2.reads === 0 ? ds : Cr;
      if (s - watch_2.lastReadAtMs >= n) {
        this.nextTickDueMs = 1 / 0;
        return;
      }
      this.nextTickDueMs = s + ye, this.cancelTick = this.clock.setTimer(this.onTick, ye);
    } catch (error) {
      this.disable(error);
    }
  };
  disable(e) {
    this.disabled = !0, this.stop(), a(e);
  }
}
function et(e, lastCpuMicros, {
  reads: reads,
  bytes: bytes_4,
  before: before_3
}) {
  return {
    reads: reads,
    bytes: bytes_4,
    startedAtMs: e,
    lastReadAtMs: e,
    lastCpuMicros: lastCpuMicros,
    before: before_3,
    maxGap: {
      gapMs: 0,
      loopLagMs: 0,
      cpuMs: 0
    },
    maxGapOffsetBytes: 0
  };
}
function cs(e) {
  return e.event === "client_event";
}
function ie(e, s) {
  return Number.isFinite(e) ? Math.min(Math.max(Math.round(e), 0), s) : 0;
}
function Fr(e) {
  V("warn", "cli_sse_frame_stall", e);
}
function cpuMicros() {
  let e = process.cpuUsage();
  return e.user + e.system;
}
function setTimer(e, s) {
  let n = setTimeout(e, s);
  return n.unref(), () => clearTimeout(n);
}
var Ur = {
  nowMs: () => performance.now(),
  cpuMicros: cpuMicros,
  setTimer: setTimer
};
var Lr = new Map([["", "none"], ["text/event-stream", "event-stream"], ["text/html", "html"], ["application/xhtml+xml", "html"], ["application/json", "json"], ["text/plain", "text"], ["application/xml", "xml"], ["text/xml", "xml"]]);
function hs(e) {
  let s = tt(tt(e ?? "", ";"), ",").trim().toLowerCase();
  return Lr.get(s) ?? (s.endsWith("+json") ? "json" : "other");
}
var har = "worker_capabilities",
  ps = "attestation-floor/1",
  Emi = "2",
  fs = "worker-socket/2",
  Tmi = "worker-socket-pad/1",
  gar = "x-ccr-attestation-policy",
  Br = new Map([["verified", "VERIFIED"], ["verified_keyless_device", "VERIFIED_KEYLESS_DEVICE"], ["verified_by_gate", "VERIFIED_BY_GATE"]]),
  Hr = new Map([["server_authored", "SERVER_AUTHORED"], ["server_replayed", "SERVER_REPLAYED"], ["absent", "ABSENT"], ["invalid", "INVALID"], ["unchecked", "UNCHECKED"], ["unspecified", "UNSPECIFIED"]]);
function _s(e) {
  if (e === null) return {
    policy: void 0,
    fault: void 0
  };
  let s = new Map();
  for (let v of tt(e, ", ").split(";")) {
    let y = v.trim(),
      O = y.indexOf("="),
      M = O === -1 ? "" : y.slice(0, O);
    if (M !== "" && !s.has(M)) s.set(M, y.slice(O + 1));
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
    acceptStatuses = new Set(),
    w = !1;
  for (let v of (s.get("accept") ?? "").split(",")) {
    let y = Hr.get(v);
    if (y !== void 0) acceptStatuses.add(y);else if (v !== "") w = !0;
  }
  return {
    policy: {
      enforce: n === "enforce",
      acceptLevel: r ?? "VERIFIED_BY_GATE",
      acceptStatuses: acceptStatuses
    },
    fault: r === void 0 || w ? "policy_partial" : void 0
  };
}
var baseMs = 1000,
  capMs = 30000,
  $r = 60000,
  it = 15,
  zr = 60,
  jr = 30000,
  ms = 20,
  dOMException = new DOMException("no frame within the liveness timeout, or the process slept", "AbortError"),
  dOMException_2 = new DOMException("the connection is renewed", "AbortError"),
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
  baseMs_2 = 500,
  capMs_2 = 8000;
function validateStatus() {
  return !0;
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
  frameSessionWriters = new WeakMap();
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
  seenSequenceNums = new Set();
  reconnectAttempts = 0;
  hasEverConnected = !1;
  reconnectStartTime = null;
  reconnectTimer = null;
  connectErrorsSeen = new Set();
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
  endedForRenewal = new WeakSet();
  constructor(e, s = {}, {
    sessionId: sessionId,
    refreshHeaders: refreshHeaders,
    initialSequenceNum: initialSequenceNum,
    getAuthHeaders: getAuthHeaders_2,
    connectTimeoutMs: connectTimeoutMs,
    deferDelivery: deferDelivery,
    sseKeepaliveMaxIntervalSeconds: sseKeepaliveMaxIntervalSeconds,
    longPollFallback: longPollFallback,
    initialLongPollMode: initialLongPollMode,
    requireStreamEvidence: requireStreamEvidence,
    onUnexpectedContentType: onUnexpectedContentType,
    mostMembersInAFrame: mostMembersInAFrame,
    lighterFrame: lighterFrame,
    streamOpener: streamOpener,
    leavesPoolAfterServerError: leavesPoolAfterServerError,
    onProcessSlept: onProcessSlept
  } = {}) {
    this.url = e;
    if (this.headers = s, this.sessionId = sessionId, this.refreshHeaders = refreshHeaders, this.getAuthHeaders = getAuthHeaders_2 ?? oG, this.connectTimeoutMs = connectTimeoutMs ?? eJr, this.postUrl = li(e), this.sseKeepaliveMaxIntervalSeconds = sseKeepaliveMaxIntervalSeconds, this.longPollFallback = longPollFallback, this.longPollMode = initialLongPollMode ?? !1, this.requireStreamEvidence = requireStreamEvidence ?? !1, this.onUnexpectedContentType = onUnexpectedContentType, this.mostMembersInAFrame = mostMembersInAFrame, this.lighterFrame = lighterFrame, this.streamOpener = streamOpener, this.leavesPoolAfterServerError = leavesPoolAfterServerError, this.stopListeningForSleep = onProcessSlept?.(this.onSleepNotice), initialSequenceNum !== void 0 && initialSequenceNum > 0) this.lastSequenceNum = initialSequenceNum;
    if (deferDelivery) this.held = {
      frames: [],
      close: null
    };
    t(`SSETransport: SSE URL = ${e.href}`), t(`SSETransport: POST URL = ${this.postUrl}`), V("info", "cli_sse_transport_initialized");
  }
  serviceNow() {
    let serviceClockAtConnect = this.serviceClockAtConnect;
    if (serviceClockAtConnect === void 0) return;
    let s = performance.now() - serviceClockAtConnect.monotonicMs;
    return Math.abs(Date.now() - serviceClockAtConnect.wallMs - s) > $r ? void 0 : serviceClockAtConnect.serviceMs + s;
  }
  serviceNowAtMost() {
    let serviceClockAtConnect_2 = this.serviceClockAtConnect;
    if (serviceClockAtConnect_2 === void 0) return;
    return serviceClockAtConnect_2.serviceMs + Math.max(performance.now() - serviceClockAtConnect_2.monotonicMs, Date.now() - serviceClockAtConnect_2.wallMs);
  }
  firstConnectedServiceMs() {
    return this.serviceClockAtFirstConnect;
  }
  getLastSequenceNum() {
    return this.lastSequenceNum;
  }
  isLongPolling() {
    return this.longPollMode || this.askedLongPollThisConnection;
  }
  connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") return t(`SSETransport: Cannot connect, current state is ${this.state}`, {
      level: "error"
    }), V("error", "cli_sse_connect_failed"), Promise.resolve();
    return this.state = "reconnecting", this.openStream(void 0);
  }
  async openStream(e) {
    let s = Date.now();
    this.requestStartedAtMs = performance.now();
    let quietRedial = this.quietRedial;
    this.quietRedial = !1;
    let redialsOnNewSocket = this.redialsOnNewSocket,
      h = ys(Math.floor(Number(this.sseKeepaliveMaxIntervalSeconds?.())));
    this.advertisedMaxIntervalSeconds = h > it ? h : void 0, this.echoedIntervalSeconds = void 0, this.bodyBytesThisConnection = 0, this.longPollEchoedSeconds = void 0, this.sequenceNumAtOpen = this.lastSequenceNum;
    let CLAUDE_CODE_CCR_LONG_POLL = i.CLAUDE_CODE_CCR_LONG_POLL;
    this.askedLongPollThisConnection = CLAUDE_CODE_CCR_LONG_POLL === !0 || CLAUDE_CODE_CCR_LONG_POLL !== !1 && this.longPollMode && this.longPollFallbackAllows();
    let v = new URL(this.url.href);
    if (this.lastSequenceNum > 0) v.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    if (this.advertisedMaxIntervalSeconds !== void 0) v.searchParams.set(Kr, String(vs * this.advertisedMaxIntervalSeconds));
    if (this.askedLongPollThisConnection) v.searchParams.set(Vr, String(gs));
    let y = [...(this.workerAttestationPolicySink === void 0 ? [] : [ps]), ...(this.streamOpener === void 0 ? [] : [fs])];
    if (y.length > 0) v.searchParams.set(har, y.join(","));
    let O = this.getAuthHeaders(),
      headers = {
        ...this.headers,
        ...O,
        Accept: "text/event-stream",
        "anthropic-version": "2023-06-01",
        "anthropic-client-platform": cb(),
        "User-Agent": ui()
      };
    if (rt(headers, O), this.lastSequenceNum > 0) headers["Last-Event-ID"] = String(this.lastSequenceNum);
    t(`SSETransport: Opening ${v.href}`), V("info", "cli_sse_connect_opening");
    let abortController_3 = new AbortController();
    this.abortController = abortController_3;
    let F = !1,
      timeout_ms_2 = Math.min(typeof this.connectTimeoutMs === "function" ? this.connectTimeoutMs() : this.connectTimeoutMs, Rc),
      B = timeout_ms_2 > 0 ? setTimeout(() => {
        F = !0, abortController_3.abort();
      }, timeout_ms_2) : void 0;
    try {
      let openSse = () => fetch(v.href, {
          headers: headers,
          signal: abortController_3.signal,
          ...ba({
            url: v.href
          }),
          ...((redialsOnNewSocket || this.leavesPoolAfterServerError?.() && KGn()) && {
            keepalive: !1
          })
        }),
        N;
      try {
        N = await (this.streamOpener ? this.streamOpener.open({
          url: v.href,
          headers: headers,
          signal: abortController_3.signal,
          openSse: openSse
        }) : openSse());
      } catch (error) {
        if (abortController_3.signal.aborted && !F) return;
        throw error;
      } finally {
        clearTimeout(B), e?.();
      }
      if (F) throw Error("the connect deadline fired as the response arrived");
      if (!N.ok) {
        if (D1t(N.status) && this.leavesPoolAfterServerError?.()) lSs(N.status);
        let W = N.status === 403 ? nRe(le => N.headers.get(le)) : void 0;
        if (await n6(N, {
          timeoutMs: timeoutMs
        }), abortController_3.signal.aborted) return;
        let Z = (this.nonOriginPolicy?.now ?? Date.now)(),
          G = this.advanceNonOriginStreak(W, Z),
          retried = G !== null && this.nonOriginPolicy !== void 0 && Z - G.startedAtMs < this.nonOriginPolicy.windowMs,
          se = Qr.has(N.status) && !retried;
        if (t(`SSETransport: HTTP ${N.status}${se ? " (permanent)" : ""}${W ? ` source=${W}` : ""}${retried ? ` (not origin \u2014 retrying; attempt ${G?.attempts})` : ""}`, {
          level: "error"
        }), V("error", "cli_sse_connect_http_error", {
          status: N.status,
          ...(W !== void 0 && {
            source: W
          }),
          ...(G !== null && {
            retried: retried
          })
        }), this.connectErrorsSeen.add(`http_${N.status}`), this.diagConnectFailure(`HTTP ${N.status}${se ? " (permanent)" : ""}`, s), se) {
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
          return;
        }
        if (retried) try {
          this.nonOriginPolicy?.onRefused?.();
        } catch (error) {
          t(`SSETransport: onRefused handler threw: ${d(error)}`, {
            level: "error"
          });
        }
        this.handleConnectionError();
        return;
      }
      if (!N.body) {
        t("SSETransport: No response body"), this.connectErrorsSeen.add("no_response_body"), this.diagConnectFailure("no response body", s), this.handleConnectionError();
        return;
      }
      if (this.requireStreamEvidence) {
        let W = hs(N.headers.get("content-type"));
        if (W !== "event-stream") {
          let accepted = N.headers.has(WEn) || N.headers.has(gar);
          if (!accepted) {
            if (await n6(N, {
              timeoutMs: timeoutMs
            }), abortController_3.signal.aborted) return;
          }
          let G = `HTTP ${N.status}, content_type=${W}, ${accepted ? "with" : "without"} a session service header`;
          if (t(`SSETransport: ${G}: ${accepted ? "taken as the stream" : "a failed connect"}`, {
            level: accepted ? "warn" : "error"
          }), V(accepted ? "warn" : "error", "cli_sse_connect_unexpected_content_type", {
            status: N.status,
            content_type: W,
            accepted: accepted
          }), this.onUnexpectedContentType?.({
            status: N.status,
            contentType: W,
            accepted: accepted
          }), !accepted) {
            this.connectErrorsSeen.add("no_stream_evidence"), this.diagConnectFailure(`${G}: a proxy or gateway may have answered in place of the server`, s), this.handleConnectionError();
            return;
          }
        }
      }
      let duration_ms = Date.now() - s,
        serviceMs = Date.parse(N.headers.get("date") ?? "");
      if (!Number.isNaN(serviceMs)) this.serviceClockAtConnect = {
        serviceMs: serviceMs,
        wallMs: Date.now(),
        monotonicMs: performance.now()
      };
      if (!this.hasConnectedBefore) this.hasConnectedBefore = !0, this.serviceClockAtFirstConnect = Number.isNaN(serviceMs) ? void 0 : serviceMs;
      if (this.advertisedMaxIntervalSeconds !== void 0) {
        let W = Number(N.headers.get(L7o));
        if (Number.isInteger(W) && W > 0) this.echoedIntervalSeconds = ys(W);
      }
      let z = Number(N.headers.get(Yr));
      this.longPollEchoedSeconds = this.askedLongPollThisConnection && Number.isInteger(z) && z > 0 ? Math.min(z, Xr) : void 0;
      let Y = this.workerAttestationPolicySink === void 0 ? void 0 : _s(N.headers.get(gar));
      this.connectionPolicyReading = Y;
      let R = N.headers.get(WEn),
        writers = xmi(R),
        x = writers === void 0 ? void 0 : {
          writers: writers,
          statedAtMs: Date.now()
        };
      if (this.connectionSessionWriters = x, Y !== void 0) {
        if (this.workerAttestationPolicySink?.(Y), abortController_3.signal.aborted) return;
      }
      let Q = this.advertisedMaxIntervalSeconds === void 0 ? "" : ` keepalive_interval=${this.keepaliveIntervalMs() / 1000}s${this.echoedIntervalSeconds === void 0 ? " (no echo)" : ""}`,
        K = !this.askedLongPollThisConnection ? "" : this.longPollEchoedSeconds === void 0 ? ` long_poll=${gs}s (no echo)` : ` long_poll=${this.longPollEchoedSeconds}s`;
      if (t("SSETransport: Connected" + Q + K), V("info", "cli_sse_connect_connected", {
        duration_ms: duration_ms,
        ...this.keepaliveDiagnosticFields(),
        ...(this.askedLongPollThisConnection && {
          long_poll: this.longPollEchoedSeconds === void 0 ? "no_echo" : "echoed"
        }),
        session_writers: writers ?? (R === null ? "header_absent" : "header_unreadable"),
        ...(Y !== void 0 && {
          attestation_policy: Y.policy === void 0 ? "none" : Y.policy.enforce ? "enforce" : "observe",
          ...(Y.fault !== void 0 && {
            attestation_policy_fault: Y.fault
          })
        })
      }), !this.hasEverConnected && this.reconnectAttempts === 0) qr("sse_connect_ms", duration_ms, s - performance.timeOrigin);
      if (this.reconnectAttempts > 0) {
        let W = this.reconnectStartTime ? Math.round((Date.now() - this.reconnectStartTime) / 1000) : 0;
        this.onDiagnostic?.(`SSE reconnected after ${this.reconnectAttempts} attempt(s), ${W}s downtime` + (this.connectErrorsSeen.size > 0 ? `, errors=[${[...this.connectErrorsSeen].join(",")}]` : ""), "warn", "sse_recovered");
      } else if (!quietRedial) this.onDiagnostic?.(`SSE connected in ${duration_ms}ms`, "info", "sse_connected");
      this.connectErrorsSeen.clear();
      let hasEverConnected = this.hasEverConnected;
      if (this.hasEverConnected = !0, this.state = "connected", this.redialsOnNewSocket = !1, this.streamOpener?.restartsBackoffAtOpen() ?? !0) this.reconnectAttempts = 0;
      this.reconnectStartTime = null, this.resetLivenessTimer();
      let te = Jr.test(N.headers.get("content-type") ?? "");
      if (hasEverConnected && !quietRedial) try {
        this.onReconnected?.();
      } catch (error) {
        t(`SSETransport: onReconnected handler threw: ${d(error)}`, {
          level: "error"
        }), V("error", "cli_sse_reconnected_handler_threw");
      }
      if (this.isHeldForRenewal) {
        if (this.deliverHeldForRenewal(x), abortController_3.signal.aborted) return;
      }
      await this.readStream(N.body, te, x);
    } catch (error) {
      if (F) {
        if (t(`SSETransport: No response within ${timeout_ms_2}ms, reconnecting`, {
          level: "error"
        }), V("error", "cli_sse_connect_timeout", {
          timeout_ms: timeout_ms_2
        }), !this.streamOpener && this.leavesPoolAfterServerError?.()) Cpo();
        this.connectErrorsSeen.add("connect_timeout"), this.diagConnectFailure(`no response in ${timeout_ms_2 / 1000}s`, s), this.handleConnectionError();
        return;
      }
      t(`SSETransport: Connection error: ${d(error)}`, {
        level: "error"
      }), V("error", "cli_sse_connect_error"), this.connectErrorsSeen.add("fetch_failed"), this.diagConnectFailure(d(error), s), this.handleConnectionError();
    }
  }
  advanceNonOriginStreak(source_2, s) {
    let nonOriginPolicy = this.nonOriginPolicy;
    if (nonOriginPolicy === void 0 || source_2 === void 0) return null;
    if (!PQe(source_2)) return this.nonOriginStreak = null, null;
    let nonOriginStreak = this.nonOriginStreak;
    if (nonOriginStreak === null || s - nonOriginStreak.lastAtMs > nonOriginPolicy.maxGapMs) nonOriginStreak = {
      source: source_2,
      startedAtMs: s,
      lastAtMs: s,
      attempts: 0
    }, this.nonOriginStreak = nonOriginStreak;
    return nonOriginStreak.attempts++, nonOriginStreak.lastAtMs = s, nonOriginStreak;
  }
  settleNonOriginStreakRecovered() {
    let nonOriginStreak_2 = this.nonOriginStreak;
    if (nonOriginStreak_2 === null) return;
    this.nonOriginStreak = null;
    let s = {
      source: nonOriginStreak_2.source,
      attempts: nonOriginStreak_2.attempts,
      streakMs: (this.nonOriginPolicy?.now ?? Date.now)() - nonOriginStreak_2.startedAtMs
    };
    V("info", "cli_sse_nonorigin_403_recovered", {
      source: s.source,
      attempts: s.attempts,
      streak_ms: s.streakMs
    });
    try {
      this.nonOriginPolicy?.onRecovered?.(s);
    } catch (error) {
      t(`SSETransport: onRecovered handler threw: ${d(error)}`, {
        level: "error"
      });
    }
  }
  diagConnectFailure(e, s) {
    if (!this.onDiagnostic) return;
    let n = this.reconnectAttempts + 1;
    if (n > 3 && n % 10 !== 0) return;
    let r = Date.now() - s,
      h = this.reconnectStartTime ? `, ${Math.round((Date.now() - this.reconnectStartTime) / 1000)}s reconnecting` : "",
      w = this.connectErrorsSeen.size > 1 ? `, errors=[${[...this.connectErrorsSeen].join(",")}]` : "";
    this.onDiagnostic(`SSE connect failed (${e}) attempt=${n} took=${r}ms${h}${w}`, "warn", "sse_connect_failed");
  }
  async readStream(e, s, n) {
    let r = e.getReader(),
      h = new Ult(),
      abortController_4 = this.abortController,
      v = () => abortController_4 !== null && this.endedForRenewal.has(abortController_4),
      y = s && i.CLAUDE_CODE_DIAGNOSTICS_FILE ? new st(h) : null,
      O = !1;
    try {
      while (!0) {
        let {
          done: done,
          value: value
        } = await r.read();
        if (done) break;
        if (value.byteLength > 0) this.bodyBytesThisConnection += value.byteLength, this.silentConnectionStreak = 0;
        let F = h.push(value);
        y?.observe(value.byteLength, F);
        for (let S of F) {
          if (!v()) this.resetLivenessTimer(), this.lastFrameReadAtMs = this.lastLivenessEvidenceAtMs;
          if (this.nonOriginStreak !== null && s) this.settleNonOriginStreakRecovered();
          if (S.id && S.event !== "ephemeral_event") {
            let B = parseInt(S.id, 10);
            if (!isNaN(B)) {
              if (this.seenSequenceNums.has(B)) t(`SSETransport: DUPLICATE frame seq=${B} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`, {
                level: "warn"
              }), V("warn", "cli_sse_duplicate_sequence");else if (this.seenSequenceNums.add(B), this.seenSequenceNums.size > 1000) {
                let H = this.lastSequenceNum - 200;
                for (let N of this.seenSequenceNums) if (N < H) this.seenSequenceNums.delete(N);
              }
              if (B > this.lastSequenceNum) this.lastSequenceNum = B;
            }
          }
          if (S.event && S.data) this.handleSSEFrame(S.event, S.data, n);else if (S.data) t("SSETransport: Frame has data: but no event: field \u2014 dropped", {
            level: "warn"
          }), V("warn", "cli_sse_frame_missing_event_field");
        }
      }
    } catch (error) {
      if (this.abortController?.signal.aborted || v()) return;
      O = !0, t(`SSETransport: Stream read error: ${d(error)}`, {
        level: "error"
      }), V("error", "cli_sse_stream_read_error");
    } finally {
      y?.stop(), r.releaseLock();
    }
    if (this.state !== "closing" && this.state !== "closed" && !v()) {
      if (this.state === "connected") {
        let M = performance.now() - this.requestStartedAtMs;
        if (this.bodyBytesThisConnection === 0 && M >= ws) this.countSilentConnection();
        if (this.askedLongPollThisConnection && !O && (this.lastSequenceNum > this.sequenceNumAtOpen || M >= ws)) {
          this.reopenAtOnce("long_poll"), t("SSETransport: Long poll completed, reopening");
          return;
        }
      }
      if (t("SSETransport: Stream ended, reconnecting"), this.state === "connected") this.connectErrorsSeen.add("stream_ended"), this.onDiagnostic?.("SSE stream ended by server, reconnecting", "warn", "sse_stream_ended");
      this.handleConnectionError();
    }
  }
  handleSSEFrame(e, data, sessionWriters, receivedWallMs = Date.now(), receivedAtMs = performance.now()) {
    if (this.mostMembersInAFrame !== void 0 && Yoe(data, this.mostMembersInAFrame) === void 0) {
      let y = this.lighterFrame?.(data);
      if (y !== void 0 && Yoe(y, this.mostMembersInAFrame) !== void 0) {
        this.handleSSEFrame(e, y, sessionWriters, receivedWallMs, receivedAtMs);
        return;
      }
      this.onFrameRefused?.(ai.exec(S_e(data, oi)?.get("event_id") ?? "")?.[1]);
      return;
    }
    if (e === "ephemeral_event") {
      this.handleEphemeralFrame(data);
      return;
    }
    if (this.held !== null) {
      this.held.frames.push({
        eventType: e,
        data: data,
        policyReading: this.connectionPolicyReading,
        sessionWriters: sessionWriters,
        receivedWallMs: receivedWallMs,
        receivedAtMs: receivedAtMs
      });
      return;
    }
    if (e !== "client_event") {
      t(`SSETransport: Unexpected SSE event type '${e}' on worker stream`, {
        level: "warn"
      }), V("warn", "cli_sse_unexpected_event_type", {
        event_type: e
      });
      return;
    }
    let w;
    try {
      w = ee(data);
    } catch (error) {
      t(`SSETransport: Failed to parse client_event data: ${d(error)}`, {
        level: "error"
      });
      return;
    }
    let payload_6 = w.payload;
    if (payload_6 && typeof payload_6 === "object" && "type" in payload_6) {
      let y = this.sessionId ? ` session=${this.sessionId}` : "",
        O = w.device_attestation_status ? ` attestation=${w.device_attestation_status}` : "";
      if (t(`SSETransport: Event seq=${w.sequence_num} event_id=${w.event_id} event_type=${w.event_type} payload_type=${String(payload_6.type)}${O}${y}`), V("info", "cli_sse_message_received"), sessionWriters !== void 0 && this.state === "connected" && this.statementRenewalGate?.(w, sessionWriters) === !0) {
        this.held = {
          frames: [{
            eventType: e,
            data: data,
            policyReading: this.connectionPolicyReading,
            sessionWriters: sessionWriters,
            receivedWallMs: receivedWallMs,
            receivedAtMs: receivedAtMs
          }],
          close: null
        }, this.isHeldForRenewal = !0, this.renewConnection();
        return;
      }
      if (sessionWriters !== void 0) this.frameSessionWriters.set(w, sessionWriters);
      let decision = this.eventFilter?.(w);
      if (decision) V("warn", "cli_sse_event_filtered", decision === !0 ? void 0 : {
        decision: decision
      });else if (typeof payload_6.type === "string" && N7o.has(payload_6.type) && w.event_type !== payload_6.type) V("warn", "cli_sse_server_only_event_type_mismatch", {
        event_type: w.event_type,
        payload_type: payload_6.type
      }), this.onEventVetoed?.(w);else if (payload_6.type === "control_request" && w.source === "worker") V("warn", "cli_sse_worker_control_request_dropped");else {
        if (this.onDeliveredCallback?.(w, sessionWriters, receivedAtMs), payload_6.type === "user" && typeof payload_6.uuid === "string") this.onUserFrameReceived?.(payload_6.uuid, receivedWallMs, w.processing_at, receivedAtMs);
        this.onData?.(_(w.payload) + `
`);
      }
    } else t(`SSETransport: Ignoring client_event with no type in payload: event_id=${w.event_id}`);
    this.onEventCallback?.(w);
  }
  emitClose(code, detail) {
    if (this.held !== null) {
      if (this.held.close = {
        code: code,
        detail: detail
      }, this.isHeldForRenewal) this.isHeldForRenewal = !1, this.startDelivery();
      return;
    }
    this.onCloseCallback?.(code, detail);
  }
  renewConnection() {
    if (this.state !== "connected") return;
    t("SSETransport: Renewing the connection"), V("info", "cli_sse_renew_connection"), this.reopenAtOnce("renewal");
  }
  reopenAtOnce(e) {
    if (this.refreshHeaders) {
      let s = this.refreshHeaders();
      Object.assign(this.headers, s), rt(this.headers, s);
    }
    if (this.clearLivenessTimer(), e !== "long_poll" && this.abortController !== null) this.endedForRenewal.add(this.abortController), this.abortController.abort(e === "renewal" ? dOMException_2 : dOMException);
    if (this.abortController = null, this.streamOpener?.restartsBackoffAtEnd()) this.reconnectAttempts = 0;
    this.state = "reconnecting", this.quietRedial = e === "long_poll", this.redialsOnNewSocket = e === "sleep", this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, 0);
  }
  setStatementRenewalGate(e) {
    this.statementRenewalGate = e;
  }
  deliverHeldForRenewal(e) {
    this.isHeldForRenewal = !1;
    for (let s of this.held?.frames ?? []) s.sessionWriters = e;
    this.startDelivery();
  }
  startDelivery() {
    let held = this.held;
    if (held === null) return;
    this.held = null;
    let s;
    for (let n of held.frames) {
      if (n.policyReading !== void 0 && n.policyReading !== s) {
        if (s = n.policyReading, !this.handSinkPolicyReading(s)) return;
      }
      this.handleSSEFrame(n.eventType, n.data, n.sessionWriters, n.receivedWallMs, n.receivedAtMs);
    }
    if (this.connectionPolicyReading !== void 0 && this.connectionPolicyReading !== s && !this.handSinkPolicyReading(this.connectionPolicyReading)) return;
    if (held.close !== null) this.onCloseCallback?.(held.close.code, held.close.detail);
  }
  handSinkPolicyReading(e) {
    return this.workerAttestationPolicySink?.(e), this.state !== "closing";
  }
  handleEphemeralFrame(e) {
    let s;
    try {
      s = ee(e);
    } catch (error) {
      t(`SSETransport: Failed to parse ephemeral_event data: ${d(error)}`, {
        level: "error"
      });
      return;
    }
    let n = si().safeParse(s);
    if (n.success && n.data.event_type === ri && this.onOwnerPresent !== void 0) {
      V("info", "cli_sse_owner_present_received");
      try {
        this.onOwnerPresent();
      } catch (error) {
        t(`SSETransport: onOwnerPresent handler threw: ${d(error)}`, {
          level: "error"
        });
      }
      return;
    }
    if (n.success && n.data.event_type === ii && this.onCheckpointRequest !== void 0) {
      V("info", "cli_sse_checkpoint_request_received");
      try {
        this.onCheckpointRequest();
      } catch (error) {
        a(error), V("error", "cli_sse_checkpoint_request_handler_threw");
      }
      return;
    }
    if (!n.success || n.data.event_type !== ni) {
      V("warn", "cli_sse_unexpected_ephemeral_type", {
        event_type: n.success ? n.data.event_type : "unparseable"
      });
      return;
    }
    V("info", "cli_sse_heartbeat_probe_received");
    try {
      this.onHeartbeatProbe?.();
    } catch (error) {
      t(`SSETransport: onHeartbeatProbe handler threw: ${d(error)}`, {
        level: "error"
      }), V("error", "cli_sse_heartbeat_probe_handler_threw");
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
      Object.assign(this.headers, r), rt(this.headers, r), t("SSETransport: Refreshed headers for reconnect");
    }
    if (this.state = "reconnecting", this.streamOpener?.restartsBackoffAtEnd()) this.reconnectAttempts = 0;
    this.reconnectAttempts++;
    let n = this.streamOpener?.reconnectsAtOnce() ? 0 : Cy({
      attempt: this.reconnectAttempts,
      baseMs: baseMs,
      capMs: capMs,
      jitter: {
        kind: "symmetric",
        ratio: 0.25
      }
    });
    t(`SSETransport: Reconnecting in ${Math.round(n)}ms (attempt ${this.reconnectAttempts}, ${Math.round(s / 1000)}s elapsed)`), V("error", "cli_sse_reconnect_attempt", {
      reconnectAttempts: this.reconnectAttempts
    }), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, n);
  }
  reopenAfterSleep(e, seen_by) {
    if (this.state !== "connected") return !1;
    if (this.frameWaitTimer) clearTimeout(this.frameWaitTimer), this.frameWaitTimer = null;
    try {
      this.reopenAtOnce("sleep");
    } catch (error) {
      return t(`SSETransport: Could not reconnect at once after a pause or sleep, so leaving it to the liveness timeout: ${d(error)}`, {
        level: "error"
      }), !1;
    }
    return t(`SSETransport: Reconnecting now with no backoff: the process was probably paused or asleep (the ${seen_by === "liveness_timer" ? "liveness timer" : "stall detector"} ran at least ${Math.round(e / 1000)}s late)`), V("warn", "cli_sse_reopened_after_sleep", {
      late_ms: Math.round(e),
      seen_by: seen_by
    }), this.onDiagnostic?.(`SSE: reconnecting at once: the process was probably paused or asleep (a check ran at least ${Math.round(e / 1000)}s late)`, "warn", "sse_reopened_after_sleep"), !0;
  }
  onSleepNotice = e => {
    if (this.state !== "connected" || this.frameWaitTimer !== null) return;
    if (this.silentForMs() < e) {
      t(`SSETransport: Keeping the stream after a pause or stall of at least ${Math.round(e / 1000)}s: it has connected or delivered a frame since then`);
      return;
    }
    this.frameWaitTimer = setTimeout(this.onFrameWaitEnd, ms, this.lastLivenessEvidenceMonotonicMs, e);
  };
  onFrameWaitEnd = (e, s) => {
    if (this.frameWaitTimer = null, this.lastLivenessEvidenceMonotonicMs !== e) {
      t(`SSETransport: Keeping the stream after a pause or stall of at least ${Math.round(s / 1000)}s: it connected or delivered a frame within ${ms} ms of the notice`);
      return;
    }
    this.reopenAfterSleep(s, "stall_detector");
  };
  silentForMs() {
    return Math.max(Date.now() - this.lastLivenessEvidenceAtMs, performance.now() - this.lastLivenessEvidenceMonotonicMs);
  }
  onLivenessTimeout = () => {
    this.livenessTimer = null;
    let e = this.silentForMs() - this.livenessTimeoutMs();
    if ((e > Sar || this.frameWaitTimer !== null) && this.reopenAfterSleep(e, "liveness_timer")) return;
    t("SSETransport: Liveness timeout, reconnecting", {
      level: "error"
    }), V("error", "cli_sse_liveness_timeout", this.keepaliveDiagnosticFields()), this.connectErrorsSeen.add("liveness_timeout"), this.onDiagnostic?.(`SSE liveness timeout \u2014 no frame in ${this.livenessTimeoutMs() / 1000}s, reconnecting`, "warn", "sse_liveness_timeout");
    let s = this.state === "connected" && this.bodyBytesThisConnection === 0;
    if (this.abortController?.abort(dOMException), this.handleConnectionError(), s) this.countSilentConnection();
  };
  countSilentConnection() {
    if (this.silentConnectionStreak++, this.silentConnectionStreak >= nt && !this.longPollMode && i.CLAUDE_CODE_CCR_LONG_POLL !== !1 && this.longPollFallbackAllows()) this.longPollMode = !0, t(`SSETransport: No body bytes on ${nt} connections in a row; asking for long-poll responses from here on`, {
      level: "warn"
    }), V("warn", "cli_sse_long_poll_mode"), this.onDiagnostic?.(`SSE stream delivered no bytes on ${nt} consecutive connections; asking the server for long-poll responses (a proxy may be buffering the response body)`, "warn", "sse_long_poll_mode");
  }
  longPollFallbackAllows() {
    try {
      return this.longPollFallback?.() === !0;
    } catch (error) {
      return V("error", "cli_sse_long_poll_fallback_threw"), a(error), !1;
    }
  }
  resetLivenessTimer() {
    this.lastLivenessEvidenceAtMs = Date.now(), this.lastLivenessEvidenceMonotonicMs = performance.now(), this.clearLivenessTimer(), this.livenessTimer = setTimeout(this.onLivenessTimeout, this.livenessTimeoutMs());
  }
  keepaliveIntervalMs() {
    return (this.echoedIntervalSeconds ?? this.advertisedMaxIntervalSeconds ?? it) * 1000;
  }
  livenessTimeoutMs() {
    return this.longestExpectedSilenceMs() + jr;
  }
  longestExpectedSilenceMs() {
    return Math.max(this.keepaliveIntervalMs(), (this.longPollEchoedSeconds ?? 0) * 1000);
  }
  keepaliveDiagnosticFields() {
    return this.advertisedMaxIntervalSeconds === void 0 ? {} : {
      keepalive_tolerance_s: vs * this.advertisedMaxIntervalSeconds,
      keepalive_interval_s: this.keepaliveIntervalMs() / 1000,
      liveness_timeout_s: this.livenessTimeoutMs() / 1000,
      keepalive_interval_echoed: this.echoedIntervalSeconds !== void 0
    };
  }
  clearLivenessTimer() {
    if (this.livenessTimer) clearTimeout(this.livenessTimer), this.livenessTimer = null;
  }
  async write(e) {
    let s = this.getAuthHeaders();
    if (Object.keys(s).length === 0) {
      t("SSETransport: No session token available for POST"), V("warn", "cli_sse_post_no_token");
      return;
    }
    let headers_2 = {
      ...s,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": cb(),
      "User-Agent": ui()
    };
    t(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
    for (let attempt = 1; attempt <= Se; attempt++) {
      try {
        let h = await Wt.post(this.postUrl, e, {
          headers: headers_2,
          validateStatus: validateStatus
        });
        if (h.status === 200 || h.status === 201) {
          t(`SSETransport: POST success type=${e.type}`);
          return;
        }
        if (t(`SSETransport: POST ${h.status} body=${_(h.data).slice(0, 200)}`), h.status >= 400 && h.status < 500 && h.status !== 429) {
          t(`SSETransport: POST returned ${h.status} (client error), not retrying`), V("warn", "cli_sse_post_client_error", {
            status: h.status
          });
          return;
        }
        t(`SSETransport: POST returned ${h.status}, attempt ${attempt}/${Se}`), V("warn", "cli_sse_post_retryable_error", {
          status: h.status,
          attempt: attempt
        });
      } catch (error) {
        t(`SSETransport: POST error: ${d(error)}, attempt ${attempt}/${Se}`), V("warn", "cli_sse_post_network_error", {
          attempt: attempt
        });
      }
      if (attempt === Se) {
        t(`SSETransport: POST failed after ${Se} attempts, continuing`), V("warn", "cli_sse_post_retries_exhausted");
        return;
      }
      await J(Cy({
        attempt: attempt,
        baseMs: baseMs_2,
        capMs: capMs_2
      }));
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  isReadStreamRecentlyAlive() {
    return this.state === "connected" && Date.now() - this.lastLivenessEvidenceAtMs < this.getReadStreamRecentLivenessWindowMs();
  }
  lastFrameReadAt() {
    return this.lastFrameReadAtMs === 0 ? void 0 : this.lastFrameReadAtMs;
  }
  getReadStreamRecentLivenessWindowMs() {
    return this.longestExpectedSilenceMs() + Gr;
  }
  isClosedStatus() {
    return this.state === "closed";
  }
  setOnData(e) {
    this.onData = e;
  }
  setOnUserFrameReceived(e) {
    this.onUserFrameReceived = e;
  }
  setOnClose(e) {
    this.onCloseCallback = e;
  }
  setNonOriginRejectionPolicy(e) {
    this.nonOriginPolicy = e;
  }
  setOnEvent(e) {
    this.onEventCallback = e;
  }
  setOnDelivered(e) {
    this.onDeliveredCallback = e;
  }
  getSessionWriters() {
    return this.connectionSessionWriters?.writers;
  }
  getSessionWritersStatement() {
    return this.connectionSessionWriters;
  }
  sessionWritersOf(e) {
    return this.frameSessionWriters.get(e);
  }
  setOnDiagnostic(e) {
    this.onDiagnostic = e;
  }
  setEventFilter(e) {
    this.eventFilter = e;
  }
  setWorkerAttestationPolicySink(e) {
    this.workerAttestationPolicySink = e;
  }
  requiresStreamEvidence() {
    return this.requireStreamEvidence;
  }
  setOnFrameRefused(e) {
    this.onFrameRefused = e;
  }
  setOnEventVetoed(e) {
    this.onEventVetoed = e;
  }
  setOnHeartbeatProbe(e) {
    this.onHeartbeatProbe = e;
  }
  setOnOwnerPresent(e) {
    this.onOwnerPresent = e;
  }
  setOnCheckpointRequest(e) {
    this.onCheckpointRequest = e;
  }
  setOnDeviceStatusPublished(e) {
    this.onDeviceStatusPublished = e;
  }
  setOnReconnected(e) {
    this.onReconnected = e;
  }
  close() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    if (this.clearLivenessTimer(), this.stopListeningForSleep?.(), this.frameWaitTimer) clearTimeout(this.frameWaitTimer), this.frameWaitTimer = null;
    this.state = "closing", this.nonOriginStreak = null, this.held = null, this.isHeldForRenewal = !1, this.abortController?.abort(), this.abortController = null;
  }
  [Symbol.dispose]() {
    this.close();
  }
}
function rt(e, s) {
  if (s.Cookie) delete e.Authorization;
  if (s.Authorization) delete e.Cookie, delete e["X-Organization-Uuid"];
}
function ys(e) {
  return Math.min(Math.max(e, it), zr);
}
function li(e) {
  let pathname = e.pathname;
  if (pathname.endsWith("/stream")) pathname = pathname.slice(0, -7);
  return `${e.protocol}//${e.host}${pathname}`;
}
var windowMs = 180000,
  maxGapMs = 90000;
async function H7o(e) {
  let {
      sessionUrl: sessionUrl,
      ingressToken: ingressToken,
      sessionId: sessionId_2,
      initialSequenceNum: initialSequenceNum_2,
      getAuthToken: getAuthToken
    } = e,
    v = () => e.inboundReadReceipts?.() === !0,
    getAuthHeaders_3;
  if (getAuthToken) getAuthHeaders_3 = () => NHe(getAuthToken());else nFr(ingressToken);
  let O = e.epoch ?? (await zAt(sessionUrl, ingressToken));
  t(`[bridge:repl] CCR v2: worker sessionId=${sessionId_2} epoch=${O}${e.epoch !== void 0 ? " (from /bridge)" : " (via registerWorker)"}`);
  let M = new URL(sessionUrl);
  M.pathname = M.pathname.replace(/\/$/, "") + "/worker/events/stream";
  let P = new yar(M, {}, {
      sessionId: sessionId_2,
      initialSequenceNum: initialSequenceNum_2,
      getAuthHeaders: getAuthHeaders_3,
      connectTimeoutMs: e.sseConnectTimeoutMs,
      sseKeepaliveMaxIntervalSeconds: e.sseKeepaliveMaxIntervalSeconds,
      longPollFallback: e.longPollFallback,
      initialLongPollMode: e.initialLongPollMode
    }),
    F = !e.outboundOnly,
    S = (e.selfHealHeartbeats ?? !1) && F,
    B = (e.nonOrigin403Retry ?? !1) && F,
    nonOrigin403Transient_2 = B && S;
  if (B) P.setNonOriginRejectionPolicy({
    windowMs: windowMs,
    maxGapMs: maxGapMs,
    onRecovered: e.onNonOriginRejectionRecovered
  });
  let N,
    q = !1;
  function X(A, x, Q, K) {
    if (q) return;
    q = !0;
    try {
      z.close({
        goodbye: !1,
        retainUndeliveredClientEvents: e.retainUndeliveredOnClose === !0
      }), P.close();
    } catch (error) {
      a(error);
    }
    try {
      N?.(A, x, Q, K);
    } catch (error) {
      a(error);
    }
  }
  let z = new m$(P, new URL(sessionUrl), {
    getAuthHeaders: getAuthHeaders_3,
    heartbeatIntervalMs: e.heartbeatIntervalMs,
    heartbeatJitterFraction: e.heartbeatJitterFraction,
    advertiseHeartbeatProbeSupport: (e.advertiseHeartbeatProbeSupport ?? !1) && F,
    uploadTrim: e.uploadTrim,
    keepsRequestId: e.keepsRequestId,
    uploadHoldMarker: e.uploadHoldMarker,
    liveOnlyShellTaskRows: e.liveOnlyShellTaskRows,
    artifactSocketIds: e.artifactSocketIds,
    followsServedPolicy: e.followsServedPolicy,
    ...(e.processExiting && {
      processExiting: e.processExiting
    }),
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
    nonOrigin403Transient: nonOrigin403Transient_2,
    internalEventUploader: e.internalEventUploader,
    stateReadEndsAtRegistration: e.onConnectNeedsRecord !== !0,
    onEpochMismatch: A => {
      let x = e.causeTypedCloseCodes ? QXr[A] : 4090;
      throw t(`[bridge:repl] CCR v2: terminal request-path condition (${A}) \u2014 closing with ${x} for ${x === 4094 ? "auth recovery" : "poll-loop recovery"}`), X(x, A), Error("terminal request-path condition");
    },
    onRequestAuthOk: e.onRequestAuthOk,
    ...(S && {
      onHeartbeatLost: () => {
        if (q) return;
        t("[bridge:repl] CCR v2: heartbeats failing while SSE healthy \u2014 closing for transport rebuild", {
          level: "warn"
        }), X(4093);
      }
    })
  });
  P.setOnEvent(A => {
    if (e.processExiting?.() && Ze(A)) return;
    if (z.reportDelivery(A.event_id, "received"), !(v() && jHi(A.event_id))) z.reportDelivery(A.event_id, "processed");
  }), P.setEventFilter(A => {
    if (CAr(A)) return !0;
    return v() ? WHi(A) : !1;
  });
  let Y,
    R = !1;
  return {
    write(A) {
      return z.writeEvent(A);
    },
    writeBatch(A) {
      return z.writeEvents(A);
    },
    close(A) {
      if (q = !0, z.close({
        goodbye: A?.goodbye,
        retainUndeliveredClientEvents: A?.retainUndelivered
      }), !A?.retainUndelivered) z.discardUndeliveredClientEvents();
      P.close();
    },
    takeUndeliveredEvents() {
      return z.takeUndeliveredClientEvents();
    },
    discardUndeliveredEvents() {
      return z.discardUndeliveredClientEvents();
    },
    adoptUndeliveredEvents(A) {
      z.adoptClientEvents(A);
    },
    flushGoodbye() {
      return z.flushGoodbye();
    },
    isConnectedStatus() {
      return R;
    },
    setOnData(A) {
      P.setOnData(A);
    },
    setOnClose(A) {
      N = A, P.setOnClose((x, Q) => {
        X(x ?? 4092, void 0, Q);
      });
    },
    setOnConnect(A) {
      Y = A;
    },
    getLastSequenceNum() {
      return P.getLastSequenceNum();
    },
    isLongPolling() {
      return P.isLongPolling();
    },
    lastFrameReadAt() {
      return P.lastFrameReadAt();
    },
    getEpoch() {
      return O;
    },
    reportState(A, x) {
      z.reportState(A, x);
    },
    reportMetadata(A) {
      z.reportMetadata(A);
    },
    reportInternalMetadata(A) {
      if (q) return !1;
      return z.reportInternalMetadata(A), !0;
    },
    droppedDurableBatchCount() {
      return z.droppedDurableBatches;
    },
    flushWorkerState() {
      return z.flushWorkerState();
    },
    droppedWorkerStatePatchCount() {
      return z.droppedWorkerStatePatches;
    },
    reportDelivery(A, x) {
      z.reportDelivery(A, x);
    },
    setStreamEventFlushIntervalMs(A) {
      z.setStreamEventFlushIntervalMs(A);
    },
    setStreamEventFirstFlushMs(A) {
      z.setStreamEventFirstFlushMs(A);
    },
    setNoSubscriberStreamEventFlushIntervalMs(A) {
      z.setNoSubscriberStreamEventFlushIntervalMs(A);
    },
    setNoSubscriberUploadHoldMs(A) {
      z.setNoSubscriberUploadHoldMs(A);
    },
    setDropUnwatchedStreamEvents(A) {
      z.setDropUnwatchedStreamEvents(A);
    },
    setSubscribersReportedListener(A) {
      z.setSubscribersReportedListener(A);
    },
    mayHoldUploads() {
      return z.mayHoldUploads();
    },
    flush(A) {
      return z.flush(A);
    },
    flushDeliveryAcks(A) {
      return z.flushDeliveryAcks(A);
    },
    flushInternalEvents(A) {
      return z.flushInternalEvents(A);
    },
    getUploadBacklog() {
      return z.uploadBacklog();
    },
    getInternalEventBacklog() {
      return {
        pending: z.internalEventsPending,
        droppedBatches: z.droppedInternalBatches
      };
    },
    trackFirstFrameUpload(A) {
      return z.trackFirstFrameUpload(A);
    },
    getInternalEventWriter() {
      return (A, x, Q) => z.writeInternalEvent(A, x, Q);
    },
    getInternalEventReaders() {
      return {
        readMain: A => A ? z.readInternalEventsForCatchUp(A) : z.readInternalEvents(),
        readSubagents: () => z.readSubagentInternalEvents(),
        readSubagent: (A, x) => z.readAgentInternalEvents(A, x)
      };
    },
    getInternalEventsPort() {
      return {
        epoch: () => z.getWorkerEpoch(),
        postBatch: (A, x) => z.postInternalEventsBatch(A, x),
        listPage: (A, x) => z.getInternalEventsPage(A, x)
      };
    },
    connect() {
      z.initialize(O).then(A => {
        if (q) return;
        if (R = !0, t(`[bridge:repl] v2 transport ready for writes (epoch=${O}); opening the read stream`), Y?.(A), !e.outboundOnly && !q) P.connect();
      }, A => {
        t(`[bridge:repl] CCR v2 initialize failed: ${d(A)}`, {
          level: "error"
        }), X(4091, void 0, void 0, A instanceof QIe && A.reason === "worker_register_failed" ? {
          httpStatus: A.httpStatus,
          noAnswer: A.noAnswer
        } : void 0);
      });
    }
  };
}
export { cap as w6t, qXr, Smi, YXr, wmi, kmi, timeout_3 as XXr, k6t, JXr, QIe, vmi, QXr, I7o, ZXr, m$, M7o, mar, eJr, har, Emi, Tmi, gar, dOMException as tJr, dOMException_2 as D7o, L7o, N7o, yar, windowMs as F7o, H7o };