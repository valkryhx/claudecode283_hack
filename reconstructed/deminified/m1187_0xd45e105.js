// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q, nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { gt as registerCleanup, AC as registerPreExitFlush, b, fa, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { K, y_e } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { VFe, vut, FKn } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Cio } from "B:/~BUN/root/chunk-d51hw63h.js";
import { Gbo, Kbo } from "B:/~BUN/root/chunk-90zbw58x.js";
import { mt } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { yi } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { zPo, GPo, Hle } from "B:/~BUN/root/chunk-gksrzz5s.js";
import { Fl, RD } from "B:/~BUN/root/chunk-ejjy06g8.js";
import { es } from "B:/~BUN/root/chunk-8qv35yd7.js";
import { fSt } from "B:/~BUN/root/chunk-1hwaphpm.js";
import { hSe } from "B:/~BUN/root/chunk-435bh2r7.js";
import { m5t as timeoutMs, PU } from "B:/~BUN/root/chunk-hjew1zqw.js";
import { Mme } from "B:/~BUN/root/chunk-467d5w8j.js";
import { Ao } from "B:/~BUN/root/chunk-9sajt7dp.js";
import { sNt, xCe } from "B:/~BUN/root/chunk-ztbv79md.js";
import { F0 } from "B:/~BUN/root/chunk-73hzyafy.js";
import { G, $g } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { o, E, M, ae, C, u, ut, fe } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { $a, jg } from "B:/~BUN/root/chunk-fwzy34jf.js";
import { randomUUID as he } from "crypto";
var x = 61440,
  Ne = x - 4096;
function re(e) {
  return Buffer.byteLength(fa(e)) - 2;
}
function se(e, n, r, s, h) {
  return e.firstEvent.index === r.index && e.deltaType === s && e.first.parent_tool_use_id === n.parent_tool_use_id && e.first.thinking_display === n.thinking_display && e.bytes + h <= Ne;
}
function ie(event) {
  if (event.type !== "content_block_delta") return null;
  switch (event.delta.type) {
    case "text_delta":
      return {
        event: event,
        deltaType: "text_delta",
        chunk: event.delta.text,
        estimatedTokens: void 0
      };
    case "input_json_delta":
      return {
        event: event,
        deltaType: "input_json_delta",
        chunk: event.delta.partial_json,
        estimatedTokens: void 0
      };
    case "thinking_delta":
      return {
        event: event,
        deltaType: "thinking_delta",
        chunk: event.delta.thinking,
        estimatedTokens: event.delta.estimated_tokens ?? void 0
      };
    case "citations_delta":
    case "signature_delta":
    case "compaction_delta":
      return null;
    default:
      return event.delta, null;
  }
}
function W(e) {
  if (e.count === 1) return e.first;
  let n;
  switch (e.deltaType) {
    case "text_delta":
      n = {
        type: "text_delta",
        text: e.accumulated
      };
      break;
    case "input_json_delta":
      n = {
        type: "input_json_delta",
        partial_json: e.accumulated
      };
      break;
    case "thinking_delta":
      n = {
        type: "thinking_delta",
        thinking: e.accumulated,
        estimated_tokens: e.estimatedTokens ?? null
      };
      break;
  }
  return {
    ...e.first,
    event: {
      ...e.firstEvent,
      delta: {
        ...e.firstEvent.delta,
        ...n
      }
    }
  };
}
function oe(e) {
  if (e.length <= 1) return e;
  let n = [],
    r = null;
  for (let first of e) {
    let h = ie(first.event);
    if (h === null) {
      if (r !== null) n.push(W(r)), r = null;
      n.push(first);
      continue;
    }
    let {
        event: k,
        deltaType: deltaType,
        chunk: S,
        estimatedTokens: estimatedTokens
      } = h,
      bytes = re(S);
    if (r !== null && se(r, first, k, deltaType, bytes)) {
      if (r.accumulated += S, r.bytes += bytes, r.count += 1, typeof estimatedTokens === "number") r.estimatedTokens = (r.estimatedTokens ?? 0) + estimatedTokens;
      continue;
    }
    if (r !== null) n.push(W(r));
    r = {
      first: first,
      firstEvent: k,
      deltaType: deltaType,
      accumulated: S,
      estimatedTokens: estimatedTokens,
      bytes: bytes,
      count: 1
    };
  }
  if (r !== null) n.push(W(r));
  return n;
}
function le(e, n) {
  let r = e.findIndex(item => item.uuid === n);
  if (r < 0) return n;
  let s = null;
  for (let h = 0; h <= r; h++) {
    let first_2 = e[h],
      g = ie(first_2.event);
    if (g === null) {
      s = null;
      continue;
    }
    let {
        event: S,
        deltaType: deltaType_2,
        chunk: chunk
      } = g,
      bytes_2 = re(chunk);
    if (s !== null && se(s, first_2, S, deltaType_2, bytes_2)) s.bytes += bytes_2;else s = {
      first: first_2,
      firstEvent: S,
      deltaType: deltaType_2,
      bytes: bytes_2
    };
  }
  return s?.first.uuid ?? n;
}
var cap = 1536;
function z(e) {
  return Array.isArray(e) && e.every(item => typeof item === "string");
}
function de(e, n = cap) {
  let compactMetadata = e.compactMetadata;
  if (!G(compactMetadata)) return null;
  let preservedMessages = compactMetadata.preservedMessages;
  if (!G(preservedMessages)) return null;
  let uuids = preservedMessages.uuids;
  if (!z(uuids) || uuids.length <= n) return null;
  let uuids_2 = uuids.slice(-n),
    headUuid = uuids_2[0],
    allUuids = preservedMessages.allUuids,
    w = z(allUuids) ? allUuids.indexOf(headUuid) : -1,
    preservedSegment = compactMetadata.preservedSegment;
  return {
    ...e,
    compactMetadata: {
      ...compactMetadata,
      preservedMessages: {
        ...preservedMessages,
        uuids: uuids_2,
        ...(z(allUuids) && {
          allUuids: w >= 0 ? allUuids.slice(w) : allUuids.slice(-n)
        })
      },
      ...(G(preservedSegment) && {
        preservedSegment: {
          ...preservedSegment,
          headUuid: headUuid
        }
      })
    }
  };
}
function ue(e, n) {
  if (n.media !== !0 || !G(e)) return e;
  let file = e.file;
  if (G(file) && (e.type === "image" || e.type === "pdf") && typeof file.base64 === "string" && file.base64 !== "") return {
    ...e,
    file: {
      ...file,
      base64: ""
    }
  };
  return e;
}
class V {
  inflight = null;
  pending = null;
  closed = !1;
  config;
  constructor(e) {
    this.config = e;
  }
  enqueue(e) {
    if (this.closed) return;
    this.pending = this.pending ? ce(this.pending, e) : e, this.drain();
  }
  close() {
    this.closed = !0, this.pending = null;
  }
  async flush() {
    while (!this.closed) if (this.inflight) await this.inflight;else if (this.pending) await this.drain();else return !0;
    return !1;
  }
  async drain() {
    if (this.inflight || this.closed) return;
    if (!this.pending) return;
    let pending = this.pending;
    this.pending = null, this.inflight = this.sendWithRetry(pending).then(() => {
      if (this.inflight = null, this.pending && !this.closed) this.drain();
    });
  }
  async sendWithRetry(e) {
    let n = e,
      r = 0;
    while (!this.closed) {
      if (await this.config.send(n)) return;
      if (r++, await Q(this.retryDelay(r)), this.pending && !this.closed) n = ce(n, this.pending), this.pending = null;
    }
  }
  retryDelay(e) {
    let n = Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs),
      r = Math.random() * this.config.jitterMs;
    return n + r;
  }
}
function ce(e, n) {
  let r = {
    ...e
  };
  for (let [s, h] of Object.entries(n)) if ((s === "external_metadata" || s === "internal_metadata") && r[s] && typeof r[s] === "object" && typeof h === "object" && h !== null) r[s] = {
    ...r[s],
    ...h
  };else r[s] = h;
  return r;
}
var pe = {},
  Re = 20000,
  ve = 1e4,
  Te = 15000,
  we = 5000,
  Ae = we,
  qe = 5000,
  je = 300000,
  timeout_2 = 2000,
  ze = Te + Ae + 2 * Re,
  Ve = 5000,
  _e = 1.5,
  Ge = 3,
  Ke = new Set([401, 403, 404, 429]),
  g7e = 100;
function H(e) {
  return e === 400 || e === 413 || e === 422;
}
var Ye = 60000,
  Je = new Set(["remote_tool_call", "remote_plumbing_call"]);
function Qe(e) {
  return Je.has(Ce(e));
}
var Xe = new Set(hSe),
  et = 256;
function Ce(e) {
  let n = e.payload.type === "control_request" ? e.payload.request : void 0;
  return typeof n === "object" && n !== null && "subtype" in n ? n.subtype : void 0;
}
function L(e) {
  let n = v(e);
  if (n) return n;
  if (e && typeof e === "object" && "name" in e && typeof e.name === "string") return e.name;
  return;
}
class gSe extends Error {
  reason;
  httpStatus;
  constructor(e, n) {
    super(`CCRClient init failed: ${e}`);
    this.reason = e;
    this.httpStatus = n;
  }
}
function p7r(e) {
  return e instanceof gSe && e.reason === "worker_register_failed" && !H(e.httpStatus);
}
var tt = 10,
  _Kt = {
    epoch_conflict: 4090,
    superseded_by_worker: 4090,
    session_not_active: 4090,
    epoch_stale: 4090,
    session_not_found: 4090,
    token_expired: 4094,
    auth_exhausted: 4094
  },
  rt = {
    epoch_conflict: !0,
    superseded_by_worker: !0,
    session_not_active: !0,
    epoch_stale: !0,
    session_not_found: !1,
    token_expired: !1,
    auth_exhausted: !1
  },
  st = 3,
  it = 10,
  maxAttempts = 3,
  ot = 1e4,
  maxDelayMs = 30000;
function ge(e) {
  return e !== void 0 && e >= 400 && e < 500 ? "not_accepted" : "indeterminate";
}
function Y(e) {
  let has_terminal_bookend = !1,
    has_level = !1;
  for (let s of e) if (s.payload.subtype === "task_notification") has_terminal_bookend = !0;else if (s.payload.subtype === "background_tasks_changed") has_level = !0;
  return has_terminal_bookend || has_level ? {
    has_terminal_bookend: has_terminal_bookend,
    has_level: has_level
  } : null;
}
function q(e) {
  return Math.min(Math.max(0, Math.trunc(e) || 0), 2147483647);
}
function Ie(e) {
  return {
    tool_name: e.tool_name,
    display_tool_name: e.display_tool_name,
    action_description: e.action_description,
    raw_command: e.raw_command,
    request_id: e.request_id,
    tool_use_id: e.tool_use_id
  };
}
var lt = f(() => u({
    tool_name: o().refine(e => !e.startsWith("dialog:")),
    display_tool_name: o().nullish(),
    action_description: o(),
    raw_command: o().nullish(),
    request_id: o(),
    tool_use_id: o().min(1),
    suppressed_request_id: o().nullish()
  })),
  dt = f(() => u({
    data: C(ut({
      event_id: o(),
      event_type: o(),
      payload: fe(o(), ae()),
      event_metadata: fe(o(), ae()).nullish(),
      is_compaction: M(),
      created_at: o(),
      session_agent_id: o().optional()
    })),
    next_cursor: o().optional()
  })),
  ct = f(() => u({
    results: C(u({
      event_id: o(),
      duplicate: M()
    }))
  }));
function ht(e) {
  let n = lt().safeParse(e);
  if (!n.success) return;
  let r = n.data,
    requestId = Mme(r);
  if (requestId === void 0) return;
  return {
    requestId: requestId,
    details: Ie({
      tool_name: r.tool_name,
      display_tool_name: r.display_tool_name ?? void 0,
      action_description: r.action_description,
      raw_command: r.raw_command ?? void 0,
      request_id: r.request_id,
      tool_use_id: r.tool_use_id
    })
  };
}
function pt(e) {
  if (e === "pending") return {
    status: "idle",
    reason: "get_pending"
  };
  if (e.readFailed) return {
    status: "idle",
    reason: "get_failed"
  };
  let n = e.external?.pending_action;
  if (n === void 0 || n === null) return {
    status: "idle",
    reason: "no_pending_action"
  };
  let r = ht(n);
  if (!r) return {
    status: "idle",
    reason: "not_reportable"
  };
  return {
    status: "requires_action",
    reason: "park",
    ...r
  };
}
function ft(reported, n) {
  if (reported === "requires_action") return {
    reported: reported
  };
  let r = n.external?.pending_actions;
  return {
    reported: reported,
    pendingActionOutstanding: n.readFailed === !0 || n.external?.pending_action !== void 0 && n.external.pending_action !== null || Array.isArray(r) && r.length > 0
  };
}
var vt = f(() => ut({
    max_events: E().nullish(),
    max_age_ms: E().nullish(),
    max_bytes: E().nullish(),
    flush_on_sampling_end: M().nullish(),
    flush_on_assistant: M().nullish(),
    must_flush_types: C(o()).nullish(),
    policy_version: o().nullish()
  })),
  _t = 50,
  Pe = 120000,
  bt = 60000,
  Et = 1048576,
  St = 32,
  yt = /^[A-Za-z0-9._-]{1,16}$/,
  kt = !0,
  Rt = !1,
  Tt = 3000,
  wt = e => e.ephemeral === !0 || e.payload.type === "keep_alive",
  be = () => !1;
function Por() {
  return a.CLAUDE_CODE_WORKER_EPOCH ?? NaN;
}
function oTn(e, getAuthHeaders) {
  if (e.protocol !== "http:" && e.protocol !== "https:") throw Error(`CCRClient: Expected http(s) URL, got ${e.protocol}`);
  let r = e.pathname.replace(/\/$/, "");
  return {
    sessionBaseUrl: `${e.protocol}//${e.host}${r}`,
    getAuthHeaders: getAuthHeaders
  };
}
class lL {
  workerEpoch = 0;
  heartbeatIntervalMs;
  heartbeatJitterFraction;
  seedHeartbeatIntervalMs;
  advertiseHeartbeatProbeSupport;
  uploadTrim;
  uploadHoldMarker;
  servedCallRequestsJumpQueue;
  urgentRequestIds = new Set();
  eventHoldEnabled;
  flushPolicy;
  holdRule;
  seesModelCallBoundaries = !1;
  holdSwitchedOff = !1;
  shutdownReleased = !1;
  shutdownKeepsClientEvents = !1;
  viewerAbsentReported = !1;
  loggedUnreadableFlushPolicy = !1;
  loggedHoldSwitchedOff = !1;
  loggedTranscriptEnvelopeStrip = !1;
  loggedToolResultBlank = !1;
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
  skippedPreviousCadenceBeat = !1;
  lastHeartbeatSuccessAtMs = Date.now();
  lastHeartbeat429AtMs = 0;
  idleGrantLatched = !1;
  reactivationBeatArmed = !1;
  pendingForcedBeat = !1;
  probeBeatTimer = null;
  pendingBeatTrigger = null;
  closed = !1;
  goodbyeFlushed = Promise.resolve();
  epochSuperseded = !1;
  lastEpochMismatchCause;
  epochMismatchCount = 0;
  consecutiveAuthFailures = 0;
  lastAuthRefreshBadReason = null;
  consecutiveNotFound = 0;
  consecutiveHeartbeatFailures = 0;
  currentState = null;
  reportParkAtInit;
  initExternalMetadata;
  initialWorkerStatus;
  initStateGetOrderingBoundMs;
  parkReportedAtInitRequestId = void 0;
  sessionBaseUrl;
  sessionId;
  readSource;
  streamEventBuffer = [];
  streamEventTimer = null;
  firstFrameUpload;
  firstTextFrameUpload;
  firstBlockFrameUpload;
  streamEventBufferedAt = 0;
  streamEventFlushDueAt = 0;
  streamEventFlushIntervalMs = g7e;
  streamEventFirstFlushMs = 0;
  firstContentFlushPending = !1;
  parkedRows = [];
  noSubscriberStreamEventFlushIntervalMs = 0;
  noSubscriberUploadHoldMs = 0;
  closingForSuccessor = !1;
  dropUnwatchedStreamEvents = !1;
  lastReportedHasSubscribers;
  lastInboundEventAtMs = Number.NEGATIVE_INFINITY;
  hasSubscribersReports = 0;
  streamEventsDroppedUnwatched = 0;
  streamedEphemeralSinceLastAssistant = !1;
  workerState;
  eventUploader;
  internalEventUploader;
  onInternalBatchAcked;
  onInternalEventLaneClosed;
  deliveryUploader;
  pendingProcessingAcks = [];
  onEpochMismatch;
  onDurableEventsDropped = void 0;
  onDurableEventsUpload = void 0;
  getAuthHeaders;
  onDiagnostic;
  onRequestAuthOk;
  onHeartbeatLost;
  readTransport;
  nonOrigin403Transient;
  heartbeatStreakStartedAtMs = 0;
  heartbeatLostFiredForStreak = !1;
  adoptRefreshedAuth;
  gzipRequestBodyFetch;
  constructor(e, n, r) {
    this.onEpochMismatch = r?.onEpochMismatch ?? (() => {
      process.exit(1);
    }), this.onHeartbeatLost = r?.onHeartbeatLost, this.readTransport = e, this.nonOrigin403Transient = r?.nonOrigin403Transient ?? !1, this.heartbeatIntervalMs = r?.heartbeatIntervalMs ?? Re, this.seedHeartbeatIntervalMs = this.heartbeatIntervalMs, this.advertiseHeartbeatProbeSupport = r?.advertiseHeartbeatProbeSupport ?? !1, this.uploadTrim = r?.uploadTrim ?? (() => pe), this.uploadHoldMarker = () => r?.uploadHoldMarker?.() === !0, this.servedCallRequestsJumpQueue = () => r?.servedCallRequestsJumpQueue?.() === !0, this.eventHoldEnabled = r?.eventHoldEnabled, this.beatOnStaleReconnect = r?.beatOnStaleReconnect ?? !1, this.idleTracker = r?.idleTracker, this.beatOnReactivation = (r?.beatOnReactivation ?? !1) && this.idleTracker !== void 0, this.skipRedundantHeartbeats = r?.skipRedundantHeartbeats ?? !1, this.probeBeatSpacingMs = r?.probeBeatSpacingMs ?? Ve, this.heartbeatJitterFraction = r?.heartbeatJitterFraction ?? 0, this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(this.advertiseHeartbeatProbeSupport), this.getAuthHeaders = r?.getAuthHeaders ?? RD, this.onDiagnostic = r?.onDiagnostic, this.onRequestAuthOk = r?.onRequestAuthOk, this.adoptRefreshedAuth = r?.adoptRefreshedAuth, this.gzipRequestBodyFetch = r?.gzipRequestBodyFetch, this.reportParkAtInit = r?.reportParkAtInit ?? !1, this.initExternalMetadata = r?.initExternalMetadata ?? {}, this.initialWorkerStatus = r?.initialWorkerStatus ?? "idle", this.initStateGetOrderingBoundMs = r?.initStateGetOrderingBoundMs ?? ot, this.readSource = {
      ...oTn(n, this.getAuthHeaders),
      isClosed: () => this.closed,
      onConflict: h => this.handleEpochMismatch(h)
    }, this.sessionBaseUrl = this.readSource.sessionBaseUrl, this.sessionId = n.pathname.replace(/\/$/, "").split("/").pop() || "", this.workerState = new V({
      send: async h => {
        let k = await this.request("put", "/worker", {
          worker_epoch: this.workerEpoch,
          ...h
        }, "PUT worker");
        if (k.ok) {
          if (h.worker_status !== void 0) _("ccr_worker_state_publish");
          return !0;
        }
        if (H(k.status)) {
          if (K("warn", "cli_worker_state_4xx_dropped", {
            status: k.status
          }), this.droppedWorkerStatePatchCount++, h.worker_status !== void 0) p("ccr_worker_state_publish", "state_4xx_dropped");
          return !0;
        }
        return !1;
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500
    }), this.eventUploader = new vut({
      maxBatchSize: 100,
      maxBatchBytes: 10485760,
      maxQueueSize: 1e5,
      send: async (h, k) => {
        let g = FKn(h);
        if (g > 0) t(`CCRClient: dropped ${g} repeated-uuid durable event(s) from one /worker/events POST`);
        let timeout = h.some(Qe) || k.followsUrgent ? Ye : void 0;
        this.reportDurableUpload(h, "sending");
        let w = this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberUploadHoldMs > 0 || this.dropUnwatchedStreamEvents || this.servedPolicyHolds(),
          parseBody = w || this.onSubscribersReported !== void 0,
          hasSubscribersReports = this.hasSubscribersReports,
          I = [];
        for (let A of this.trackedFrameUploads("ackedAtMs")) if (h.some(item => item.payload.uuid === A.uuid)) I.push(A.timing);
        for (let A of I) if (A.postedAtMs === void 0) A.postedAtMs = performance.now(), A.postedWallMs = Date.now();
        let T = await this.request("post", "/worker/events", this.uploadBody(h, k), "client events", {
          timeout: timeout,
          parseBody: parseBody
        });
        if (T.ok) {
          for (let U of I) if (U.ackedAtMs === void 0) U.ackedAtMs = performance.now();
          let A = Y(h);
          if (A) _("ccr_task_status_publish", A);
          if (this.noteBeatingEventsPostOk(h), this.reportDurableUpload(h, "accepted"), w && hasSubscribersReports === this.hasSubscribersReports) this.setHasSubscribers(T.data?.has_subscribers, "no_report");
          let F = T.data?.has_subscribers;
          if (typeof F === "boolean") this.onSubscribersReported?.(F);
          return;
        }
        if (this.reportDurableUpload(h, ge(T.status)), H(T.status)) {
          let A = h.filter(item => !item.ephemeral),
            F = h.length - A.length,
            status = T.status;
          if (F > 0) {
            if (t(`CCRClient: client event POST rejected (${T.status}) \u2014 dropping ${F} ephemeral event(s), retrying ${A.length} durable event(s)`, {
              level: "warn"
            }), p("ccr_partial_messages", "ephemeral_dropped_on_4xx"), h.splice(0, h.length, ...A), A.length === 0) return;
            this.reportDurableUpload(A, "sending");
            let O = await this.request("post", "/worker/events", this.uploadBody(A, k), "client events (durable retry)", {
              timeout: timeout
            });
            if (O.ok) {
              let ne = Y(A);
              if (ne) _("ccr_task_status_publish", ne);
              this.noteBeatingEventsPostOk(A), this.reportDurableUpload(A, "accepted");
              return;
            }
            if (this.reportDurableUpload(A, ge(O.status)), !H(O.status)) throw new VFe("client event POST failed", O.retryAfterMs);
            status = O.status;
          }
          if (A.length > 0) {
            this.droppedDurableEventBatches++;
            try {
              this.onDurableEventsDropped?.(A, status);
            } catch (error) {
              t(`CCRClient: onDurableEventsDropped threw; batch still dropped: ${l(error)}`, {
                level: "warn"
              });
            }
          }
          K("warn", "cli_worker_events_4xx_dropped", {
            status: status,
            count: A.length
          });
          let B = Y(A);
          if (B) m("ccr_task_status_publish", "status_events_4xx_dropped", B);
          return;
        }
        throw new VFe("client event POST failed", T.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "client_events"),
      onDrained: this.logUploadDrain.bind(this, "client_events")
    });
    let s = r?.internalEventUploader;
    this.internalEventUploader = new vut({
      maxBatchSize: 100,
      maxBatchBytes: s?.maxBatchBytes ?? 10485760,
      maxQueueSize: 200,
      maxConsecutiveFailures: s?.maxConsecutiveFailures,
      onBatchDropped: (count, consecutive_failures) => {
        this.droppedInternalEventBatches++, K("warn", "cli_worker_internal_events_give_up_dropped", {
          count: count,
          consecutive_failures: consecutive_failures
        }), i("tengu_ccr_internal_events_dropped", {
          reason: y("give_up"),
          count: count,
          consecutive_failures: consecutive_failures
        });
      },
      send: async (h, k) => {
        let g = await this.request("post", "/worker/internal-events", this.uploadBody(h, k), "internal events", {
          timeout: s?.requestTimeoutMs
        });
        if (g.ok) {
          Promise.resolve().then(() => this.onInternalBatchAcked?.(h)).catch(() => {});
          return;
        }
        if (H(g.status)) {
          this.droppedInternalEventBatches++, K("warn", "cli_worker_internal_events_4xx_dropped", {
            status: g.status,
            count: h.length
          }), i("tengu_ccr_internal_events_dropped", {
            reason: y("4xx"),
            count: h.length,
            status: g.status
          });
          return;
        }
        throw new VFe("internal event POST failed", g.nonOriginRefusal ? maxDelayMs : g.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: maxDelayMs,
      jitterMs: 500,
      holdMaxItems: 50,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "internal_events"),
      onDrained: this.logUploadDrain.bind(this, "internal_events")
    }), this.deliveryUploader = new vut({
      maxBatchSize: 64,
      maxQueueSize: 64,
      send: async h => {
        let k = await this.request("post", "/worker/events/delivery", {
          worker_epoch: this.workerEpoch,
          updates: h.map(item => ({
            event_id: item.eventId,
            status: item.status
          }))
        }, "delivery batch");
        if (k.ok) return;
        if (H(k.status)) {
          K("warn", "cli_worker_delivery_4xx_dropped", {
            status: k.status,
            count: h.length
          });
          return;
        }
        throw new VFe("delivery POST failed", k.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500
    }), this.setStreamEventFlushIntervalMs(r?.streamEventFlushIntervalMs), this.setStreamEventFirstFlushMs(r?.streamEventFirstFlushMs), this.setNoSubscriberStreamEventFlushIntervalMs(r?.noSubscriberStreamEventFlushIntervalMs), this.setNoSubscriberUploadHoldMs(r?.noSubscriberUploadHoldMs), this.setDropUnwatchedStreamEvents(r?.dropUnwatchedStreamEvents), e.setOnEvent(h => {
      this.reportDelivery(h.event_id, "received");
    }), e.setOnHeartbeatProbe(() => {
      this.setHasSubscribers(void 0, "reset"), this.heartbeatNow("probe");
    }), e.setOnReconnected(() => this.resyncAfterReconnect()), this.unsubscribeIdleTracker = this.beatOnReactivation ? this.idleTracker?.onActivity(() => this.sendReactivationBeat()) : void 0;
  }
  maxAdvisedIntervalFor(e) {
    return e ? Math.floor($g / (1 + this.heartbeatJitterFraction)) : je;
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
  async initialize(e) {
    let n = Date.now();
    if (Object.keys(this.getAuthHeaders()).length === 0) throw new gSe("no_auth_headers");
    if (e === void 0) e = Por();
    if (isNaN(e)) throw new gSe("missing_epoch");
    this.workerEpoch = e;
    let r = this.getWorkerState(),
      s = await Promise.race([r.then(A => A.metadata, () => ({
        external: null,
        internal: null,
        readFailed: !0
      })), Q(this.initStateGetOrderingBoundMs).then(() => "pending")]),
      h = this.reportParkAtInit ? pt(s) : void 0,
      k = {
        worker_status: "idle",
        worker_epoch: this.workerEpoch,
        external_metadata: {
          ...this.initExternalMetadata,
          task_summary: null
        }
      },
      g = h === void 0 ? {
        worker_status: this.initialWorkerStatus,
        worker_epoch: this.workerEpoch,
        external_metadata: {
          ...this.initExternalMetadata,
          pending_action: null,
          pending_actions: null,
          task_summary: null
        }
      } : h.status === "requires_action" ? {
        ...k,
        worker_status: "requires_action",
        requires_action_details: h.details
      } : k,
      S = {
        ok: !1
      },
      w = new Set(),
      R = 10,
      P = 0;
    for (let A = 1; A <= R; A++) {
      if (this.closed) break;
      if (P = A, S = await this.request("put", "/worker", g, "PUT worker (init)"), S.ok || this.closed) break;
      if (S.reason) w.add(S.reason);
      if (this.onDiagnostic?.(`PUT /worker failed (${S.reason ?? "unknown"}) attempt=${A}/${R}, ${Math.round((Date.now() - n) / 1000)}s elapsed`, "warn"), H(S.status)) {
        if (h?.status === "requires_action") {
          h = {
            status: "idle",
            reason: "park_rejected"
          }, g = k, A--;
          continue;
        }
        break;
      }
      if (A < R) {
        let F = Math.min(500 * 2 ** (A - 1), 30000) + Math.random() * 500;
        await Q(F);
      }
    }
    if (!S.ok) {
      if (!this.closed) K("error", "cli_worker_init_put_retries_exhausted"), this.onDiagnostic?.(`PUT /worker retries exhausted: ${P} attempts over ${Math.round((Date.now() - n) / 1000)}s, errors=[${[...w].join(",") || "unknown"}]`, "warn");
      throw new gSe("worker_register_failed", S.status);
    }
    if (this.currentState = h?.status ?? this.initialWorkerStatus, this.applyUploadHold("idle"), this.parkReportedAtInitRequestId = h?.status === "requires_action" ? h.requestId : void 0, this.startHeartbeat(), !this.closed) zPo(() => {
      this.writeEvent({
        type: "keep_alive"
      });
    });
    if (t(`CCRClient: initialized, epoch=${this.workerEpoch}`), K("info", "cli_worker_lifecycle_initialized", {
      epoch: this.workerEpoch,
      duration_ms: Date.now() - n,
      reported_status: this.currentState
    }), es("worker_init_ms", Date.now() - n, n - performance.timeOrigin), h) i("tengu_ccr_init_park_report", {
      reported: c(h.status),
      reason: c(h.reason)
    });
    let {
      metadata: metadata,
      durationMs: T
    } = await r;
    if (!this.closed) K("info", "cli_worker_state_restored", {
      duration_ms: T,
      had_state: metadata.external !== null || metadata.internal !== null,
      read_failed: metadata.readFailed === !0
    });
    return h ? {
      ...metadata,
      initParkReport: ft(h.status, metadata)
    } : metadata;
  }
  async getWorkerState(e = "worker_state", n = !1) {
    let r = Date.now(),
      s = this.getAuthHeaders();
    if (Object.keys(s).length === 0) return {
      metadata: {
        external: null,
        internal: null,
        readFailed: !0
      },
      projectsAssertion: void 0,
      durationMs: 0
    };
    let h = await lL.getWithRetry(this.readSource, `${this.sessionBaseUrl}/worker${ye(n)}`, s, e);
    return {
      metadata: {
        external: h?.worker?.external_metadata ?? null,
        internal: h?.worker?.internal_metadata ?? null,
        ...(h === null && {
          readFailed: !0
        })
      },
      projectsAssertion: ke(h),
      durationMs: Date.now() - r
    };
  }
  get currentWorkerEpoch() {
    return this.workerEpoch;
  }
  async readProjectsBinding() {
    let {
      metadata: metadata_2,
      projectsAssertion: n
    } = await this.getWorkerState("projects_binding", !0);
    return metadata_2.readFailed ? {
      read: !1
    } : {
      read: !0,
      assertion: n
    };
  }
  async readWorkerState() {
    return (await this.getWorkerState("worker_state_reread")).metadata;
  }
  static async readProjectsBindingFor(e, n) {
    let r = oTn(e, n);
    if (Object.keys(n()).length === 0) return {
      read: !1
    };
    let s = await lL.getWithRetry(r, `${r.sessionBaseUrl}/worker${ye(!0)}`, n(), "projects_binding");
    return s === null ? {
      read: !1
    } : {
      read: !0,
      assertion: ke(s)
    };
  }
  async request(method, path, r, s, {
    timeout: h = 1e4,
    parseBody: parseBody_2 = !1,
    countTowardEscalation = !0,
    signal: signal
  } = {}) {
    let w = this.getAuthHeaders();
    if (Object.keys(w).length === 0) return {
      ok: !1,
      reason: "no_auth_headers"
    };
    let url = `${this.sessionBaseUrl}${path}`,
      P = signal ? Ao(signal, {
        timeoutMs: h,
        refTimer: !0
      }) : void 0;
    try {
      let I = {
          method: method.toUpperCase(),
          headers: {
            ...w,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": jg(),
            "User-Agent": $a()
          },
          body: b(r),
          signal: P?.signal ?? AbortSignal.timeout(h),
          ...yi({
            url: url
          })
        },
        T = this.gzipRequestBodyFetch ? await this.gzipRequestBodyFetch(url, I, B => fetch(url, B)) : await fetch(url, I);
      if (T.ok) {
        if (this.consecutiveAuthFailures = 0, this.consecutiveNotFound = 0, parseBody_2) try {
          return {
            ok: !0,
            data: await T.json()
          };
        } catch {
          return {
            ok: !0
          };
        }
        return await PU(T), {
          ok: !0
        };
      }
      let A;
      if (T.status === 409 && !this.closed) A = await X(T);else await PU(T);
      if (this.closed) return {
        ok: !1,
        status: T.status,
        reason: `http_${T.status}`
      };
      if (T.status === 409) this.handleEpochMismatch(A);
      if (T.status === 404 && countTowardEscalation) {
        if (this.consecutiveNotFound++, this.consecutiveNotFound >= st) t(`CCRClient: ${this.consecutiveNotFound} consecutive 404s \u2014 session gone, exiting`, {
          level: "error"
        }), K("error", "cli_worker_session_not_found"), this.onDiagnostic?.(`${this.consecutiveNotFound} consecutive 404s on ${path} \u2014 session gone, exiting`, "warn"), this.escalateEpochMismatch("session_not_found");
      }
      let source = T.status === 403 ? sNt(B => T.headers.get(B)) : void 0,
        nonOriginRefusal = this.nonOrigin403Transient && xCe(source);
      if (T.status === 401 || T.status === 403) {
        let B = Fl(),
          O = B ? F0(B) : null;
        if (O !== null && O * 1000 < Date.now()) t(`CCRClient: session_token expired (exp=${new Date(O * 1000).toISOString()}) \u2014 no refresh was delivered, exiting`, {
          level: "error"
        }), K("error", "cli_worker_token_expired_no_refresh"), this.onDiagnostic?.(`session_token expired (exp=${new Date(O * 1000).toISOString()}) \u2014 no refresh delivered, exiting`, "warn"), this.escalateEpochMismatch("token_expired");
        if (countTowardEscalation && !nonOriginRefusal) {
          if (this.consecutiveAuthFailures++, this.consecutiveAuthFailures >= tt) t(`CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`, {
            level: "error"
          }), K("error", "cli_worker_auth_failures_exhausted"), this.onDiagnostic?.(`${this.consecutiveAuthFailures} consecutive auth failures (HTTP ${T.status}) with valid-looking token \u2014 exiting`, "warn"), this.escalateEpochMismatch("auth_exhausted");
        }
      }
      if (t(`CCRClient: ${s} returned ${T.status}`, {
        level: "warn"
      }), K("warn", "cli_worker_request_failed", {
        method: method,
        path: path,
        status: T.status,
        ...(source !== void 0 && {
          source: source
        })
      }), T.status === 429) {
        let B = T.headers.get("retry-after"),
          O = B ? parseInt(B, 10) : NaN;
        if (!isNaN(O) && O >= 0) return {
          ok: !1,
          retryAfterMs: O * 1000,
          status: T.status,
          reason: `http_${T.status}`
        };
      }
      return {
        ok: !1,
        status: T.status,
        reason: `http_${T.status}`,
        ...(nonOriginRefusal && {
          nonOriginRefusal: nonOriginRefusal
        })
      };
    } catch (error) {
      return t(`CCRClient: ${s} failed: ${l(error)}`, {
        level: "warn"
      }), K("warn", "cli_worker_request_error", {
        method: method,
        path: path,
        error_code: L(error)
      }), {
        ok: !1,
        reason: `fetch_failed:${L(error)}`
      };
    } finally {
      P?.cleanup();
    }
  }
  reportState(worker_status, n) {
    if (worker_status === this.currentState && !n) return;
    let parkReportedAtInitRequestId = this.parkReportedAtInitRequestId;
    if (this.parkReportedAtInitRequestId = void 0, parkReportedAtInitRequestId !== void 0 && worker_status === "requires_action" && this.currentState === "requires_action" && Mme(n) === parkReportedAtInitRequestId) return;
    this.currentState = worker_status, this.workerState.enqueue({
      worker_status: worker_status,
      requires_action_details: n ? Ie(n) : null,
      internal_metadata: {
        reply_degraded: Cio()
      }
    }), this.applyUploadHold(worker_status === "running" ? "idle" : worker_status);
  }
  reportMetadata(e) {
    this.workerState.enqueue({
      external_metadata: Mt(e)
    });
  }
  reportInternalMetadata(internal_metadata) {
    this.workerState.enqueue({
      internal_metadata: internal_metadata
    });
  }
  handleEpochMismatch(e) {
    let n = e ?? "epoch_conflict",
      reason = e ?? "unattributed";
    t(`CCRClient: Epoch mismatch (409, reason=${reason}), shutting down`, {
      level: "error"
    }), K("error", n === "epoch_stale" ? "cli_worker_epoch_stale" : n === "session_not_active" ? "cli_worker_session_not_active" : "cli_worker_epoch_mismatch", {
      reason: reason
    });
    let s = n === "epoch_stale" ? "stale registration (no live successor)" : n === "session_not_active" ? "session archived or no longer active" : n === "superseded_by_worker" ? "superseded by a newer worker" : "unattributed conflict, treated as superseded";
    this.onDiagnostic?.(`worker epoch mismatch (409) reason=${reason} epoch=${this.workerEpoch} \u2014 ${s}, exiting`, "warn"), this.escalateEpochMismatch(n);
  }
  escalateEpochMismatch(e) {
    return this.lastEpochMismatchCause = e, this.epochMismatchCount++, this.epochSuperseded = !0, this.onEpochMismatch(e);
  }
  startHeartbeat() {
    if (this.stopHeartbeat(), this.closed) return;
    let e = () => {
        let r = this.heartbeatIntervalMs * this.heartbeatJitterFraction * (2 * Math.random() - 1);
        this.heartbeatTimer = setTimeout(n, this.heartbeatIntervalMs + r);
      },
      n = () => {
        let lastCadenceTickAtMs = this.lastCadenceTickAtMs;
        if (this.lastCadenceTickAtMs = Date.now(), this.canSkipCadenceBeat(lastCadenceTickAtMs)) this.skippedPreviousCadenceBeat = !0, this.idleTracker?.sampleIdleSeconds(), t("CCRClient: Heartbeat skipped (events beat)");else this.sendHeartbeat();
        if (this.heartbeatTimer === null) return;
        e();
      };
    this.lastCadenceTickAtMs = Date.now(), e();
  }
  noteBeatingEventsPostOk(e) {
    if (e.some(item => !item.ephemeral)) this.lastBeatingEventsPostOkAtMs = Date.now();
  }
  canSkipCadenceBeat(e) {
    let n = this.heartbeatIntervalMs * (1 + this.heartbeatJitterFraction);
    if (!this.skipRedundantHeartbeats || this.closed || this.lastBeatingEventsPostOkAtMs < e || this.lastBeatingEventsPostOkAtMs > this.lastCadenceTickAtMs || this.lastCadenceTickAtMs - this.lastBeatingEventsPostOkAtMs > n * _e || this.heartbeatIntervalMs > this.seedHeartbeatIntervalMs || this.isIdleAdvised() || this.consecutiveHeartbeatFailures > 0 || this.skippedPreviousCadenceBeat) return !1;
    let r = n * 2;
    return this.clampToTokenLifetime(r) >= r;
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null;
  }
  clearProbeBeatTimer() {
    if (this.probeBeatTimer) clearTimeout(this.probeBeatTimer), this.probeBeatTimer = null;
  }
  sendGoodbye() {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    if (this.currentState === "running") {
      K("info", "cli_worker_goodbye_skipped_mid_turn");
      return;
    }
    this.goodbyeFlushed = this.request("put", "/worker", {
      worker_epoch: this.workerEpoch,
      connection_status: "disconnected"
    }, "PUT worker (goodbye)", {
      timeout: timeout_2,
      countTowardEscalation: !1
    }).then(e => {
      if (e.ok) _("ccr_worker_goodbye");else if (e.status !== 409) p("ccr_worker_goodbye", e.status !== void 0 ? `http_${e.status}` : "send_failed");
    }).catch(() => {
      p("ccr_worker_goodbye", "send_threw");
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
    let r = Date.now() - this.lastHeartbeatSentAtMs;
    if (r < this.probeBeatSpacingMs) {
      if (this.probeBeatTimer) return;
      this.probeBeatTimer = setTimeout(() => {
        this.probeBeatTimer = null, this.refireForcedBeat();
      }, this.probeBeatSpacingMs - r);
      return;
    }
    let s = this.pendingBeatTrigger ?? e;
    this.pendingBeatTrigger = null, this.clearProbeBeatTimer(), this.sendHeartbeat(s);
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
  armReactivationIfEarned(e, n) {
    if (this.beatOnReactivation && e !== void 0 && e >= n) this.reactivationBeatArmed = !0;
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
    let n = Fl(),
      r = n ? F0(n) : null;
    if (r === null) return e;
    let s = r * 1000 - Date.now() - ze;
    if (s >= e) return e;
    return Math.max(ve, s);
  }
  reclampCurrentIntervalToTokenLifetime() {
    let to_ms = this.clampToTokenLifetime(this.heartbeatIntervalMs);
    if (to_ms < this.heartbeatIntervalMs) K("info", "cli_heartbeat_interval_updated", {
      from_ms: this.heartbeatIntervalMs,
      to_ms: to_ms
    }), this.applyShorterIntervalNow(to_ms);
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
    if (e - this.lastHeartbeatSuccessAtMs <= this.heartbeatIntervalMs * _e) return !1;
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
    if (this.heartbeatInFlight) return;
    if (this.heartbeatInFlight = !0, this.lastHeartbeatSentAtMs = Date.now(), this.skippedPreviousCadenceBeat = !1, e === "resync_stale") K("info", "cli_heartbeat_reconnect_stale_beat", {
      gap_ms: this.lastHeartbeatSentAtMs - this.lastHeartbeatSuccessAtMs,
      interval_ms: this.heartbeatIntervalMs
    });
    try {
      if (e === "reactivate") K("info", "cli_heartbeat_reactivation_beat", {
        interval_ms: this.heartbeatIntervalMs
      });
      let n = this.idleTracker?.sampleIdleSeconds(),
        idle_seconds = this.advertiseHeartbeatProbeSupport ? n : void 0,
        s = await this.request("post", "/worker/heartbeat", {
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
          timeout: Math.max(qe, Math.min(Te, this.heartbeatIntervalMs * (1 - this.heartbeatJitterFraction) - we)),
          parseBody: !0,
          countTowardEscalation: e === void 0
        });
      if (!s.ok) {
        if (e === "probe") m("ccr_heartbeat_probe", "beat_failed");else if (e === "resync_stale") m("ccr_reconnect_beat", "beat_failed");else if (e === "reactivate") m("ccr_reactivation_beat", "beat_failed");
        if (s.status === 429) {
          if (this.lastHeartbeat429AtMs = Date.now(), e === "reactivate") this.restoreReactivationArm();
        }
        if (this.isIdleAdvised() && s.status !== 429) K("warn", "cli_heartbeat_idle_reverted_on_failure", {
          status: s.status
        }), this.idleGrantLatched = !1, this.reactivationBeatArmed = !1, this.applyShorterIntervalNow(this.seedHeartbeatIntervalMs);
        if (this.reclampCurrentIntervalToTokenLifetime(), s.status !== void 0 && Ke.has(s.status) && !s.nonOriginRefusal) {
          this.resetHeartbeatStreak();
          return;
        }
        if (!this.readTransport.isReadStreamRecentlyAlive()) {
          this.resetHeartbeatStreak();
          return;
        }
        if (this.consecutiveHeartbeatFailures === 0) this.heartbeatStreakStartedAtMs = Date.now();
        if (this.consecutiveHeartbeatFailures++, !this.heartbeatLostFiredForStreak && this.consecutiveHeartbeatFailures >= Ge && Date.now() - this.heartbeatStreakStartedAtMs >= this.readTransport.getReadStreamRecentLivenessWindowMs()) {
          this.heartbeatLostFiredForStreak = !0;
          try {
            this.onHeartbeatLost?.();
          } catch (error) {
            d(error);
          }
        }
        return;
      }
      if (this.resetHeartbeatStreak(), this.lastHeartbeatSuccessAtMs = this.lastHeartbeatSentAtMs, this.onRequestAuthOk?.(), e === "probe") _("ccr_heartbeat_probe");else if (e === "resync_stale") _("ccr_reconnect_beat");else if (e === "reactivate") _("ccr_reactivation_beat");
      if (t("CCRClient: Heartbeat sent"), G(s.data)) this.takeUpFlushPolicy(s.data.event_flush_policy);
      if (s.data?.refreshed_auth && this.adoptRefreshedAuth) try {
        let g = !1,
          S = this.adoptRefreshedAuth(s.data.refreshed_auth.expires_in_seconds);
        S.then(P => {
          if (g && P.adopted) this.lastAuthRefreshBadReason = null, _("ccr_worker_auth_refresh"), K("info", "cli_heartbeat_refreshed_auth_late_adopted");
        }, () => {});
        let w = await nt(S, Math.min(Ae, this.heartbeatIntervalMs)),
          R;
        if (w === void 0) g = !0, R = {
          adopted: !1,
          reason: "adopt_timeout"
        };else R = w;
        if (K("info", "cli_heartbeat_refreshed_auth_signal", {
          adopted: R.adopted,
          reason: R.reason,
          expires_in_seconds: s.data.refreshed_auth.expires_in_seconds
        }), R.adopted) _("ccr_worker_auth_refresh"), this.lastAuthRefreshBadReason = null;else if (R.reason && R.reason !== "unchanged" && R.reason !== this.lastAuthRefreshBadReason) this.lastAuthRefreshBadReason = R.reason, m("ccr_worker_auth_refresh", R.reason);
      } catch {
        if (this.lastAuthRefreshBadReason !== "adopt_threw") this.lastAuthRefreshBadReason = "adopt_threw", m("ccr_worker_auth_refresh", "adopt_threw");
        K("error", "cli_heartbeat_refreshed_auth_adopt_threw");
      }
      let h = s.data?.heartbeat_interval_seconds;
      if (typeof h !== "number" || !Number.isFinite(h) || h <= 0) {
        if (this.idleGrantLatched) this.armReactivationIfEarned(idle_seconds, this.heartbeatIntervalMs / 1000);
        this.reclampCurrentIntervalToTokenLifetime();
        return;
      }
      if (this.advertiseHeartbeatProbeSupport) {
        let g = h * 1000 > this.seedHeartbeatIntervalMs;
        if (g) this.armReactivationIfEarned(idle_seconds, h);else this.reactivationBeatArmed = !1;
        this.idleGrantLatched = g;
      }
      let to_ms_2 = this.clampToTokenLifetime(Math.min(Math.max(h * 1000, ve), this.maxAdvisedIntervalMs));
      if (to_ms_2 === this.heartbeatIntervalMs) return;
      if (K("info", "cli_heartbeat_interval_updated", {
        from_ms: this.heartbeatIntervalMs,
        to_ms: to_ms_2
      }), to_ms_2 < this.heartbeatIntervalMs) this.applyShorterIntervalNow(to_ms_2);else this.heartbeatIntervalMs = to_ms_2;
    } finally {
      if (this.heartbeatInFlight = !1, this.pendingForcedBeat && !this.closed) this.pendingForcedBeat = !1, this.refireForcedBeat();
    }
  }
  reportDurableUpload(e, n) {
    if (this.onDurableEventsUpload === void 0) return;
    let r = e.filter(item => !item.ephemeral);
    if (r.length === 0) return;
    try {
      this.onDurableEventsUpload(r, n);
    } catch (error) {
      t(`CCRClient: onDurableEventsUpload(${n}) threw; the batch's fate is unchanged: ${l(error)}`, {
        level: "warn"
      });
    }
  }
  writeEvent(e) {
    return this.writeEvents([e]);
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
    let n = [];
    for (let r of [this.firstFrameUpload, this.firstTextFrameUpload, this.firstBlockFrameUpload]) if (r && r.timing[e] === void 0) n.push(r);
    return n;
  }
  async writeEvents(e) {
    let n = [],
      r = [],
      since,
      release,
      k = !1;
    for (let g of e) {
      let S = this.releaseFor(g);
      if (release ??= S, (this.streamEventFirstFlushMs > 0 && !S || this.noSubscriberStreamEventFlushIntervalMs > 0 || this.dropUnwatchedStreamEvents || this.unwatched() && this.currentState === "running") && this.streamEventFlushIntervalMs > 0 && Se(g)) {
        this.bufferEphemeral(g);
        continue;
      }
      if (g.type === "stream_event") {
        if (this.streamedEphemeralSinceLastAssistant = !0, g.event.type === "message_stop" && this.holdRule === "served_policy" && this.flushPolicy?.flushOnSamplingEnd) {
          this.bufferEphemeral(g), since ??= this.streamEventBufferedAt, k = !0;
          let R = this.takeStreamEventBuffer();
          release ??= R.release, n.push(...R.events);
          continue;
        }
        if (this.streamEventFlushIntervalMs <= 0) {
          if (Buffer.byteLength(b(g)) <= x) n.push({
            payload: g,
            ephemeral: !0
          });else p("ccr_partial_messages", "oversize_ephemeral_skipped");
          continue;
        }
        if (this.bufferEphemeral(g), g.event.type === "content_block_start" && this.parkedRows.length > 0) {
          since ??= this.streamEventBufferedAt;
          let R = this.takeStreamEventBuffer();
          release ??= R.release, n.push(...R.events);
        }
        continue;
      }
      let w = g.type === "control_request" ? this.toClientEvent(g) : void 0;
      if (g.type === "control_request" && w !== void 0 && Xe.has(Ce(w)) && this.servedCallRequestsJumpQueue()) {
        r.push(w), this.urgentRequestIds.add(g.request_id);
        let R = this.urgentRequestIds.values().next().value;
        if (this.urgentRequestIds.size > et && R !== void 0) this.urgentRequestIds.delete(R);
        continue;
      }
      if (g.type === "control_cancel_request" && this.urgentRequestIds.delete(g.request_id)) {
        r.push(this.toClientEvent(g));
        continue;
      }
      if (g.type === "assistant" && this.streamedEphemeralSinceLastAssistant) _("ccr_partial_messages", {
        stream_events_dropped_unwatched: this.streamEventsDroppedUnwatched
      }), this.streamedEphemeralSinceLastAssistant = !1, this.streamEventsDroppedUnwatched = 0;
      if (S === void 0 && this.mayParkTextRow(g)) {
        this.parkedRows.push({
          message: g,
          event: this.toClientEvent(g)
        });
        continue;
      }
      if (this.streamEventTimer) {
        since ??= this.streamEventBufferedAt;
        let R = this.takeStreamEventBuffer();
        release ??= R.release, n.push(...R.events);
      }
      n.push(w ?? this.toClientEvent(g));
    }
    if (r.length > 0) this.enqueueClientEvents(r, {
      urgent: !0
    });
    if (n.length > 0) {
      if (release) this.internalEventUploader.release(release);else if (k) release = "sampling_end";
      await this.enqueueClientEvents(n, release ? {
        release: release
      } : {
        since: since
      });
    } else if (r.length > 0 && release) {
      if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
      this.internalEventUploader.release(release), this.eventUploader.release(release);
    } else if (k) this.eventUploader.release("sampling_end");
  }
  releaseFor(e) {
    if (e.type === "system" && "subtype" in e && e.subtype === "status" && "status" in e && e.status === "requesting") {
      if (!this.seesModelCallBoundaries) this.seesModelCallBoundaries = !0, this.applyUploadHold("reset");
      if (this.holdRule === "served_policy") return "round_trip";
    }
    if (this.holdRule === void 0 || this.mayWaitUnderHold(e)) return;
    return "event";
  }
  mayParkTextRow(e) {
    if (e.type !== "assistant" || !this.streamEventTimer || this.lastReportedHasSubscribers === !1 || this.closed) return !1;
    let content = e.message.content;
    return Array.isArray(content) && content.length > 0 && content.every(item => item.type === "text");
  }
  takeParkedRows() {
    let e = this.parkedRows.map(({
      event: event_2
    }) => event_2);
    return this.parkedRows = [], e;
  }
  mayWaitUnderHold(e) {
    if (e.type === "keep_alive" && this.holdRule === "served_policy") return this.seesModelCallBoundaries && !this.flushPolicy?.mustFlushTypes.has(e.type);
    if (!Ior(e)) return !1;
    if (this.holdRule === "no_subscriber_flag" && !Rt) return !0;
    if (e.type === "user" && "isReplay" in e && e.isReplay) return !1;
    let flushPolicy = this.flushPolicy;
    if (!flushPolicy) return !0;
    if (e.type === "assistant" && flushPolicy.flushOnAssistant) return !1;
    return !flushPolicy.mustFlushTypes.has(e.type);
  }
  toClientEvent(e) {
    let n = e,
      r = n.historical === !0,
      s = Se(e),
      tool_use_result = n.type === "user" && n.is_virtual !== !0 ? this.uploadedToolResult(n.tool_use_result) : n.tool_use_result;
    return {
      payload: {
        ...n,
        ...(tool_use_result !== n.tool_use_result && {
          tool_use_result: tool_use_result
        }),
        uuid: typeof n.uuid === "string" ? n.uuid : he()
      },
      ...(r && {
        historical: !0
      }),
      ...(s && {
        ephemeral: !0
      })
    };
  }
  uploadedToolResult(e) {
    let n = ue(e, this.currentUploadTrim());
    if (n !== e && !this.loggedToolResultBlank) this.loggedToolResultBlank = !0, _("ccr_tool_result_blank");
    return n;
  }
  setStreamEventFlushIntervalMs(e) {
    if (this.streamEventFlushIntervalMs = j("streamEventFlushIntervalMs", e, g7e), this.streamEventFlushIntervalMs <= 0 && this.streamEventTimer) this.flushStreamEventBuffer();
  }
  setStreamEventFirstFlushMs(e) {
    this.streamEventFirstFlushMs = j("streamEventFirstFlushMs", e, 0);
  }
  setNoSubscriberStreamEventFlushIntervalMs(e) {
    let n = j("noSubscriberStreamEventFlushIntervalMs", e, 0);
    if (n === this.noSubscriberStreamEventFlushIntervalMs) return;
    this.noSubscriberStreamEventFlushIntervalMs = n, this.setHasSubscribers(void 0, "reset");
  }
  setNoSubscriberUploadHoldMs(e) {
    let n = j("noSubscriberUploadHoldMs", e, 0);
    if (n === this.noSubscriberUploadHoldMs) return;
    this.noSubscriberUploadHoldMs = n, this.setHasSubscribers(void 0, "reset");
  }
  setDropUnwatchedStreamEvents(e) {
    let n = e === !0;
    if (n === this.dropUnwatchedStreamEvents) return;
    this.setHasSubscribers(void 0, "reset"), this.dropUnwatchedStreamEvents = n;
  }
  onSubscribersReported;
  setSubscribersReportedListener(e) {
    this.onSubscribersReported = e;
  }
  noSubscriberHoldMs() {
    return kt && this.holdSwitchedOff ? 0 : this.noSubscriberUploadHoldMs;
  }
  unwatched() {
    return this.noSubscriberHoldMs() > 0 && this.lastReportedHasSubscribers === !1;
  }
  mayHoldUploads() {
    return this.noSubscriberUploadHoldMs > 0 || this.servedPolicyHolds();
  }
  servedPolicyHolds() {
    return (this.flushPolicy?.maxEvents ?? 0) > 1 && this.eventHoldEnabled !== void 0 && !this.holdSwitchedOff;
  }
  decideHoldRule() {
    if (this.currentState !== "running" || this.shutdownReleased) return;
    if (this.servedPolicyHolds() && (this.seesModelCallBoundaries || this.lastReportedHasSubscribers === !1)) return "served_policy";
    return this.unwatched() ? "no_subscriber_flag" : void 0;
  }
  applyUploadHold(e) {
    if (this.holdSwitchedOff = this.eventHoldEnabled !== void 0 && this.eventHoldEnabled() !== !0, this.holdSwitchedOff && !this.loggedHoldSwitchedOff) this.loggedHoldSwitchedOff = !0, K("warn", "cli_ccr_event_hold_switched_off");
    let n = this.decideHoldRule();
    this.holdRule = n, this.eventUploader.setHold(n && this.laneHold(n, this.seesModelCallBoundaries ? wt : be), e), this.internalEventUploader.setHold(n && this.laneHold(n, be), e);
  }
  laneHold(rule, passes) {
    let flushPolicy_2 = this.flushPolicy;
    if (rule === "served_policy" && flushPolicy_2) return {
      rule: rule,
      maxAgeMs: Math.min(flushPolicy_2.maxAgeMs, this.seesModelCallBoundaries ? Pe : bt),
      maxItems: flushPolicy_2.maxEvents,
      maxBytes: flushPolicy_2.maxBytes,
      passes: passes
    };
    return {
      rule: "no_subscriber_flag",
      maxAgeMs: this.noSubscriberHoldMs()
    };
  }
  takeUpFlushPolicy(e) {
    let n = e == null ? void 0 : Ct(e);
    if (e != null && !n && !this.loggedUnreadableFlushPolicy) this.loggedUnreadableFlushPolicy = !0, K("warn", "cli_ccr_flush_policy_unreadable");
    let flushPolicy_3 = this.flushPolicy;
    if (!Pt(flushPolicy_3, n)) this.flushPolicy = n, K("info", n ? flushPolicy_3 ? "cli_ccr_flush_policy_changed" : "cli_ccr_flush_policy_adopted" : "cli_ccr_flush_policy_cleared", {
      ...(n && {
        max_events: n.maxEvents,
        max_age_ms: n.maxAgeMs,
        max_bytes: n.maxBytes ?? 0,
        flush_on_sampling_end: n.flushOnSamplingEnd,
        flush_on_assistant: n.flushOnAssistant,
        must_flush_types: n.mustFlushTypes.size,
        policy_version: n.policyVersion ?? ""
      }),
      hold_enabled: this.eventHoldEnabled !== void 0 && this.eventHoldEnabled() === !0
    });
    this.applyUploadHold("reset");
  }
  logUploadHoldEnd(lane, reason_2, held_events, held_ms, h) {
    if (h === "no_subscriber_flag") {
      _("ccr_no_subscriber_hold", {
        lane: c(lane),
        reason: c(reason_2),
        held_events: held_events,
        held_ms: held_ms
      });
      return;
    }
    K("info", "cli_ccr_event_hold_release", {
      lane: lane,
      reason: reason_2,
      held_events: held_events,
      held_ms: held_ms
    });
  }
  uploadBody(events, n) {
    let r = {
      worker_epoch: this.workerEpoch,
      events: events
    };
    if (this.uploadHoldMarker()) r.upload_hold = {
      held: n.held,
      flush_reason: n.reason,
      held_count: q(n.heldCount),
      hold_age_ms: q(n.holdAgeMs),
      inflight_retry_count: q(n.retryCount),
      hold_rule: n.rule,
      post_index: q(n.postIndex),
      ...(this.flushPolicy?.policyVersion !== void 0 && {
        policy_version: this.flushPolicy.policyVersion
      })
    };
    return r;
  }
  logUploadDrain(e, n) {
    if (!this.uploadHoldMarker()) return;
    _("ccr_upload_drain", {
      lane: c(e),
      trigger: c(n.trigger),
      rule: c(n.rule),
      held_events: n.heldEvents,
      held_ms: n.heldMs,
      posts: n.posts,
      rows: n.rows,
      max_rows_post: n.maxRowsPost,
      failed_posts: n.failedPosts,
      dropped_rows: n.droppedRows,
      other_posts: n.otherPosts,
      other_rows: n.otherRows,
      drain_ms: n.drainMs
    });
  }
  logUndeliveredAtClose(lane_2, undelivered_events) {
    if (undelivered_events <= 0) return;
    if (this.noSubscriberHoldMs() > 0 && this.viewerAbsentReported) p("ccr_no_subscriber_hold", this.closingForSuccessor ? "undelivered_at_rebuild" : "undelivered_at_close", {
      lane: c(lane_2),
      undelivered_events: undelivered_events
    });
    if (this.servedPolicyHolds()) K("warn", "cli_ccr_event_hold_undelivered_at_close", {
      lane: lane_2,
      undelivered_events: undelivered_events,
      for_successor: this.closingForSuccessor
    });
  }
  bufferEphemeral(e) {
    let n = this.streamEventFirstFlushMs > 0 && e.type === "stream_event" ? e.event.type : void 0,
      r = n === "content_block_start";
    if (r) this.firstContentFlushPending = !0;
    if (this.dropUnwatchedStreamEvents && this.lastReportedHasSubscribers === !1) {
      if (e.type === "stream_event") this.streamEventsDroppedUnwatched++;
      return;
    }
    this.streamEventBuffer.push(e);
    let s = this.firstContentFlushPending && n === "content_block_delta";
    if (s) this.firstContentFlushPending = !1;
    let h = r || s;
    if (this.streamEventTimer && !h) return;
    let k = h ? Math.min(this.streamEventFirstFlushMs, this.streamEventFlushIntervalMs) : this.streamEventFlushIntervalMs,
      g = this.lastReportedHasSubscribers === !1 ? Math.max(this.noSubscriberStreamEventFlushIntervalMs, this.noSubscriberHoldMs(), k) : k,
      S = Date.now();
    if (this.streamEventTimer) {
      if (S + g >= this.streamEventFlushDueAt) return;
      clearTimeout(this.streamEventTimer);
    } else this.streamEventBufferedAt = S;
    this.streamEventFlushDueAt = S + g, this.streamEventTimer = setTimeout(() => void this.flushStreamEventBuffer(), g);
  }
  setHasSubscribers(e, n) {
    this.hasSubscribersReports++;
    let r = Date.now() - this.lastInboundEventAtMs < Tt,
      s = typeof e === "boolean" && (e || !r) ? e : void 0,
      lastReportedHasSubscribers = this.lastReportedHasSubscribers;
    if (this.lastReportedHasSubscribers = s, this.dropUnwatchedStreamEvents && lastReportedHasSubscribers === !1 !== (s === !1)) t(s === !1 ? "CCRClient: no subscribers reported; dropping stream deltas until one is" : `CCRClient: resuming stream deltas (${s === !0 ? "watcher" : n})`);
    if (lastReportedHasSubscribers === !1 && s !== !1 && this.streamEventTimer) this.flushStreamEventBuffer();
    let k = s === !0 ? "watcher" : n;
    if (s === !1) this.viewerAbsentReported = !0;else if (this.viewerAbsentReported && k === "watcher") {
      if (this.viewerAbsentReported = !1, this.holdRule === "served_policy") {
        if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
        this.eventUploader.release("watcher"), this.internalEventUploader.release("watcher");
      }
    }
    this.applyUploadHold(k);
  }
  async flushStreamEventBuffer() {
    let {
      events: events_2,
      release: release_2
    } = this.takeStreamEventBuffer();
    if (events_2.length > 0) {
      if (release_2) this.internalEventUploader.release(release_2);
      await this.enqueueClientEvents(events_2, release_2 ? {
        release: release_2
      } : {
        since: this.streamEventBufferedAt
      });
    }
  }
  enqueueClientEvents(e, n) {
    for (let r of this.trackedFrameUploads("enqueuedAtMs")) {
      let s = e.find(item => item.payload.uuid === r.uuid);
      if (!s) continue;
      let h = this.eventUploader.inFlightBatch(),
        k;
      if (n.release === void 0 && this.eventUploader.holdsOnArrival(s)) k = "hold";else if (h !== void 0) k = h.some(item => !item.ephemeral) ? "durable_post" : "ephemeral_post";else if (this.eventUploader.backlog().backingOff) k = "retry_backoff";else k = "none";
      r.timing.enqueuedAtMs = performance.now(), r.timing.queuedBehind = k;
    }
    return this.eventUploader.enqueue(e, n);
  }
  takeStreamEventBuffer() {
    if (this.streamEventTimer) clearTimeout(this.streamEventTimer), this.streamEventTimer = null;
    let release_3;
    for (let {
      message: message
    } of this.parkedRows) release_3 ??= this.releaseFor(message);
    if (this.streamEventBuffer.length === 0) return {
      events: this.takeParkedRows(),
      release: release_3
    };
    let n = [],
      r,
      estimated_tokens_delta = 0;
    for (let S of this.streamEventBuffer) {
      if (S.type === "stream_event") {
        n.push(S);
        continue;
      }
      estimated_tokens_delta = (r !== void 0 && S.estimated_tokens - S.estimated_tokens_delta === r.estimated_tokens ? estimated_tokens_delta : 0) + S.estimated_tokens_delta, r = S;
    }
    this.streamEventBuffer = [];
    for (let S of this.trackedFrameUploads("enqueuedAtMs")) S.uuid = le(n, S.uuid);
    let events_3 = oe(n).filter(item => {
      if (Buffer.byteLength(b(item)) <= x) return !0;
      return t(`CCRClient: dropping oversize ephemeral stream_event (>${x} bytes)`, {
        level: "warn"
      }), p("ccr_partial_messages", "oversize_ephemeral_skipped"), !1;
    }).map(S => ({
      payload: S,
      ephemeral: !0
    }));
    if (r) events_3.push(this.toClientEvent({
      ...r,
      estimated_tokens_delta: estimated_tokens_delta
    }));
    return events_3.push(...this.takeParkedRows()), {
      events: events_3,
      release: release_3
    };
  }
  currentUploadTrim() {
    let e = this.uploadTrim();
    return G(e) ? e : pe;
  }
  async writeInternalEvent(type, n, {
    isCompaction = !1,
    agentId: s,
    preservedEventIds: preservedEventIds
  } = {}) {
    let preserved_event_ids = preservedEventIds,
      g = de(n);
    if (preserved_event_ids && preserved_event_ids.length > cap) i("tengu_ccr_preserved_event_ids_clamped", {
      originalCount: preserved_event_ids.length,
      cap: cap,
      payloadClamped: g !== null
    }), preserved_event_ids = preserved_event_ids.slice(-cap);
    let S = g ?? n;
    if (this.currentUploadTrim().envelope === !0) {
      let P = Gbo(S);
      if (P !== S && !this.loggedTranscriptEnvelopeStrip) this.loggedTranscriptEnvelopeStrip = !0, _("ccr_worker_envelope_strip");
      S = P;
    }
    if (type === "transcript" && S.type === "user" && S.isVirtual !== !0) {
      let toolUseResult = this.uploadedToolResult(S.toolUseResult);
      if (toolUseResult !== S.toolUseResult) S = {
        ...S,
        toolUseResult: toolUseResult
      };
    }
    let w = {
        payload: {
          type: type,
          ...S,
          uuid: typeof S.uuid === "string" ? S.uuid : he()
        },
        ...(isCompaction && {
          is_compaction: !0
        }),
        ...(s && {
          session_agent_id: s
        }),
        ...(preserved_event_ids?.length && {
          preserved_event_ids: preserved_event_ids
        })
      },
      R = isCompaction && this.holdRule !== void 0;
    if (R) this.eventUploader.release("event");
    await this.internalEventUploader.enqueue(w, R || !this.transcriptRowMayWait(type, S) ? {
      release: "event"
    } : void 0);
  }
  transcriptRowMayWait(e, n) {
    let flushPolicy_4 = this.flushPolicy;
    if (this.holdRule !== "served_policy" || !flushPolicy_4) return !0;
    let s = e === "transcript" ? n.type : e;
    if (typeof s !== "string" || flushPolicy_4.mustFlushTypes.has(s)) return !1;
    if (s === "user") return n.toolUseResult !== void 0 || It(n.message) || n.isMeta === !0 || n.isVirtual === !0 || n.isCompactSummary === !0;
    return !(s === "assistant" && flushPolicy_4.flushOnAssistant);
  }
  flushInternalEvents(e) {
    return this.internalEventUploader.flush(e);
  }
  uploadBacklog() {
    let e = this.eventUploader.backlog(),
      n = this.internalEventUploader.backlog(),
      r = [e.inFlightMs, n.inFlightMs].filter(item => item !== void 0);
    return {
      unsentClientEvents: e.unsent,
      unsentInternalEvents: n.unsent,
      oldestInFlightMs: r.length ? Math.max(...r) : void 0,
      backingOff: e.backingOff || n.backingOff
    };
  }
  async postInternalEventsBatch(events_4, n = {}) {
    let r = this.refuseInternalEventsCall(!0);
    if (r) return r;
    let epochMismatchCount = this.epochMismatchCount;
    try {
      let h = await this.request("post", "/worker/internal-events", {
        worker_epoch: this.workerEpoch,
        events: events_4
      }, "internal events batch", {
        parseBody: !0,
        countTowardEscalation: !1,
        signal: n.signal
      });
      if (h.ok) {
        let k = ct().safeParse(h.data);
        return {
          ok: !0,
          results: k.success ? k.data.results : void 0
        };
      }
      return this.internalEventsFailure(h, epochMismatchCount);
    } catch (error) {
      return this.internalEventsFailure({
        reason: `fetch_failed:${L(error)}`
      }, epochMismatchCount);
    }
  }
  async getInternalEventsPage(e, n = {}) {
    let r = this.refuseInternalEventsCall(!1);
    if (r) return r;
    let s = new URL(`${this.sessionBaseUrl}/worker/internal-events`);
    if (e.limit !== void 0) s.searchParams.set("limit", String(e.limit));
    if (e.agentId) s.searchParams.set("session_agent_id", e.agentId);
    if (e.subagents) s.searchParams.set("subagents", "true");
    if (e.cursor) s.searchParams.set("cursor", e.cursor);else if (e.afterEventId) s.searchParams.set("after_event_id", e.afterEventId);
    let epochMismatchCount_2 = this.epochMismatchCount,
      k;
    try {
      let g = this.getAuthHeaders();
      if (Object.keys(g).length === 0) return {
        ok: !1,
        reason: "no_auth_headers"
      };
      k = n.signal ? Ao(n.signal, {
        timeoutMs: 30000,
        refTimer: !0
      }) : void 0;
      let S = await fetch(s, {
        headers: {
          ...g,
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": jg(),
          "User-Agent": $a()
        },
        signal: k?.signal ?? AbortSignal.timeout(30000),
        ...yi({
          url: s.toString()
        })
      });
      if (S.ok) {
        let T;
        try {
          T = await S.json();
        } catch (error) {
          if (!(error instanceof SyntaxError)) throw error;
        }
        let A = dt().safeParse(T);
        if (!A.success) return K("warn", "cli_worker_internal_events_page_foreign"), {
          ok: !1,
          status: S.status,
          reason: "foreign_body"
        };
        let F = Number(S.headers.get("content-length") ?? Number.NaN);
        return {
          ok: !0,
          data: A.data.data,
          ...(A.data.next_cursor && {
            nextCursor: A.data.next_cursor
          }),
          bytes: Number.isFinite(F) ? F : null
        };
      }
      let errorType, resourceType, retryAfterMs, closedConflict;
      if (S.status === 409) {
        let T = await X(S);
        if (this.closed) closedConflict = T ?? this.lastEpochMismatchCause ?? "epoch_conflict";else try {
          this.handleEpochMismatch(T);
        } catch (error) {
          t(`CCRClient: onEpochMismatch threw during a page read: ${l(error)}`);
        }
      } else if (S.status === 404) try {
        let T = await S.json();
        if (typeof T?.error?.type === "string") errorType = T.error.type;
        if (typeof T?.error?.resource_type === "string") resourceType = T.error.resource_type;
      } catch {} else {
        if (S.status === 429) {
          let T = parseInt(S.headers.get("retry-after") ?? "", 10);
          if (!isNaN(T) && T >= 0) retryAfterMs = T * 1000;
        }
        S.body?.cancel();
      }
      return t(`CCRClient: internal events page returned ${S.status}`, {
        level: "warn"
      }), K("warn", "cli_worker_request_failed", {
        method: "get",
        path: "/worker/internal-events",
        status: S.status
      }), this.internalEventsFailure({
        status: S.status,
        retryAfterMs: retryAfterMs,
        reason: `http_${S.status}`
      }, epochMismatchCount_2, {
        errorType: errorType,
        resourceType: resourceType,
        closedConflict: closedConflict
      });
    } catch (error) {
      return t(`CCRClient: internal events page failed: ${l(error)}`, {
        level: "warn"
      }), this.internalEventsFailure({
        reason: `fetch_failed:${L(error)}`
      }, epochMismatchCount_2);
    } finally {
      k?.cleanup();
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
  internalEventsFailure(e, n, {
    errorType: errorType_2,
    resourceType: resourceType_2,
    closedConflict: closedConflict_2
  } = {}) {
    let conflict = closedConflict_2 ?? (this.epochMismatchCount > n ? this.lastEpochMismatchCause : e.status === 409 ? this.lastEpochMismatchCause ?? "epoch_conflict" : void 0),
      status_2 = e.status ?? (conflict && rt[conflict] ? 409 : void 0);
    return {
      ok: !1,
      reason: status_2 === 409 ? "http_409" : e.reason ?? "unknown",
      ...(status_2 !== void 0 && {
        status: status_2
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
  flushDeliveryAcks() {
    return this.deliveryUploader.flush();
  }
  async flush(e) {
    return await this.flushStreamEventBuffer(), this.eventUploader.flush(e);
  }
  withdrawQueuedControlRequest(e) {
    return this.eventUploader.withdraw(n => !n.ephemeral && n.payload.type === "control_request" && n.payload.request_id === e);
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
  get droppedWorkerStatePatches() {
    return this.droppedWorkerStatePatchCount;
  }
  async readInternalEvents(e, n) {
    return lL.readInternalEventsFrom(this.readSource, e, n);
  }
  static readInternalEventsFrom(e, after_event_id, signal_2) {
    return lL.paginatedGet(e, "/worker/internal-events", {
      limit: "1000",
      ...(after_event_id && {
        after_event_id: after_event_id
      })
    }, "internal_events", {
      signal: signal_2
    });
  }
  async readSubagentInternalEvents() {
    return lL.readSubagentInternalEventsFrom(this.readSource);
  }
  static readSubagentInternalEventsFrom(e) {
    return lL.paginatedGet(e, "/worker/internal-events", {
      subagents: "true",
      limit: "1000"
    }, "subagent_events");
  }
  async readAgentInternalEvents(session_agent_id, signal_3) {
    return lL.paginatedGet(this.readSource, "/worker/internal-events", {
      session_agent_id: session_agent_id,
      limit: "1000"
    }, "agent_events", {
      maxAttempts: maxAttempts,
      signal: signal_3
    });
  }
  static async paginatedGet(e, n, r, context, h = {}) {
    let k = e.getAuthHeaders();
    if (Object.keys(k).length === 0) return null;
    let events_5 = [],
      S,
      pageCount = 0,
      bytesReceived = 0,
      P = null;
    do {
      let I = new URL(`${e.sessionBaseUrl}${n}`);
      for (let [U, B] of Object.entries(r)) I.searchParams.set(U, B);
      if (S) I.searchParams.set("cursor", S), I.searchParams.delete("after_event_id");
      let T = !S && r.after_event_id !== void 0,
        anchorFallback,
        F = await lL.getWithRetry(e, I.toString(), k, context, U => {
          pageCount++, P ??= U.headers.get("content-encoding");
          let B = U.headers.get("content-length");
          if (B !== null && bytesReceived !== null) bytesReceived += Number(B);else bytesReceived = null;
        }, (U, B) => {
          if (!T) return;
          if (U === 400) anchorFallback = "rejected";else if (B === "after_event_id_not_found") anchorFallback = "not-found";
        }, h);
      if (!F) {
        if (anchorFallback) {
          t(`CCRClient: after_event_id ${anchorFallback === "rejected" ? "rejected by server (gate off)" : "not found (stale anchor)"} \u2014 refetching without anchor`, {
            level: "warn"
          }), K("warn", anchorFallback === "rejected" ? "cli_worker_after_event_id_rejected" : "cli_worker_after_event_id_not_found", {
            context: context
          });
          let {
              after_event_id: after_event_id_2,
              ...B
            } = r,
            O = await lL.paginatedGet(e, n, B, context, h);
          if (!O) return null;
          return {
            ...O,
            anchorFallback: anchorFallback
          };
        }
        return null;
      }
      for (let U of F.data ?? []) if (!Kbo(U.payload)) events_5.push(U);
      S = F.next_cursor;
    } while (S);
    return t(`CCRClient: Read ${events_5.length} internal events from ${n}${r.subagents ? " (subagents)" : ""}`), {
      events: events_5,
      stats: {
        pageCount: pageCount,
        bytesReceived: bytesReceived,
        contentEncoding: P ?? "none"
      }
    };
  }
  static async getWithRetry(e, url_2, r, context_2, h, k, {
    maxAttempts: maxAttempts_2 = it,
    signal: signal_4
  } = {}) {
    for (let w = 1; w <= maxAttempts_2; w++) {
      if (signal_4?.aborted) return null;
      let R;
      try {
        if (R = await fetch(url_2, {
          headers: {
            ...r,
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": jg(),
            "User-Agent": $a()
          },
          signal: signal_4 ? AbortSignal.any([AbortSignal.timeout(30000), signal_4]) : AbortSignal.timeout(30000),
          ...yi({
            url: url_2
          })
        }), R.ok) {
          let I = await R.json();
          return h?.(R), I;
        }
      } catch (error) {
        if (signal_4?.aborted) return null;
        if (t(`CCRClient: GET ${url_2} failed (attempt ${w}/${maxAttempts_2}): ${l(error)}`, {
          level: "warn"
        }), w < maxAttempts_2) {
          let T = Math.min(500 * 2 ** (w - 1), 30000) + Math.random() * 500;
          await Q(T, signal_4);
        }
        continue;
      }
      let P;
      if (R.status === 404 && k) try {
        let I = await R.json();
        if (typeof I?.error?.type === "string") P = I.error.type;
      } catch {} else if (R.status === 409) {
        if (e.isClosed?.()) return await PU(R), null;
        let I = await X(R);
        if (!e.isClosed?.()) e.onConflict?.(I);
        return null;
      } else await PU(R);
      if (H(R.status) || P === "after_event_id_not_found") return t(`CCRClient: GET ${url_2} returned ${R.status} \u2014 permanent, not retrying`, {
        level: "warn"
      }), k?.(R.status, P), null;
      if (t(`CCRClient: GET ${url_2} returned ${R.status} (attempt ${w}/${maxAttempts_2})`, {
        level: "warn"
      }), w < maxAttempts_2) {
        let I = Math.min(500 * 2 ** (w - 1), 30000) + Math.random() * 500;
        await Q(I, signal_4);
      }
    }
    return t("CCRClient: GET retries exhausted", {
      level: "error"
    }), K("error", "cli_worker_get_retries_exhausted", {
      context: context_2
    }), null;
  }
  reportDelivery(eventId, status_3) {
    if (status_3 === "received") this.lastInboundEventAtMs = Date.now(), this.setHasSubscribers(void 0, "watcher");
    if (status_3 === "processing") {
      if (this.closed) return;
      if (this.pendingProcessingAcks.push(eventId) === 1) queueMicrotask(() => {
        let pendingProcessingAcks = this.pendingProcessingAcks;
        if (this.pendingProcessingAcks = [], this.closed || pendingProcessingAcks.length === 0) return;
        this.request("post", "/worker/events/delivery", {
          worker_epoch: this.workerEpoch,
          updates: pendingProcessingAcks.map(s => ({
            event_id: s,
            status: "processing"
          }))
        }, "processing ack");
      });
      return;
    }
    this.deliveryUploader.enqueue({
      eventId: eventId,
      status: status_3
    });
  }
  getWorkerEpoch() {
    return this.workerEpoch;
  }
  get internalEventsPending() {
    return this.internalEventUploader.pendingCount;
  }
  hasInternalEventRoom(e) {
    return this.internalEventUploader.hasRoomFor(e);
  }
  close(e) {
    this.closeExceptInternalEvents(e), this.logUndeliveredAtClose("internal_events", this.internalEventUploader.close());
  }
  flushGoodbye() {
    return this.goodbyeFlushed;
  }
  closeExceptInternalEvents(e) {
    let closed = this.closed;
    this.closed = !0, this.closingForSuccessor = e?.retainUndeliveredClientEvents === !0;
    let r = this.takeParkedRows();
    if (r.length > 0) this.eventUploader.enqueue(r);
    if (!closed && e?.goodbye !== !1) this.sendGoodbye();
    if (this.stopHeartbeat(), this.clearProbeBeatTimer(), this.unsubscribeIdleTracker?.(), GPo(), this.streamEventTimer) clearTimeout(this.streamEventTimer), this.streamEventTimer = null;
    if (this.streamEventBuffer = [], this.pendingProcessingAcks = [], this.workerState.close(), e?.keepClientEvents !== !0) this.logUndeliveredAtClose("client_events", this.eventUploader.close({
      retainUndelivered: e?.retainUndeliveredClientEvents === !0
    }));
    this.deliveryUploader.close();
  }
  registerShutdownCleanup(e = {
    registerCleanup: registerCleanup,
    registerPreExitFlush: registerPreExitFlush
  }, n = Ee) {
    e.registerCleanup(() => this.beginShutdown()), e.registerPreExitFlush(() => this.finishShutdown(n));
  }
  beginShutdown() {
    try {
      if (this.shutdownKeepsClientEvents = !this.closed && this.servedPolicyHolds(), this.shutdownKeepsClientEvents) this.shutdownReleased = !0, this.applyUploadHold("shutdown");
    } finally {
      this.closeExceptInternalEvents({
        keepClientEvents: this.shutdownKeepsClientEvents
      });
    }
  }
  async finishShutdown(e = Ee) {
    await this.flushGoodbye();
    try {
      await nt(Promise.allSettled([this.flushInternalEvents(), this.shutdownKeepsClientEvents ? this.flush() : void 0]), e);
    } finally {
      this.close(), this.onInternalEventLaneClosed?.(), await y_e().catch(() => {});
    }
  }
}
var Ee = 3000;
function Mt(e) {
  let post_turn_summary = e.post_turn_summary;
  if (!At(post_turn_summary) || post_turn_summary.status_category !== "blocked") return e;
  return {
    ...e,
    post_turn_summary: {
      ...post_turn_summary,
      status_category: "need_input"
    }
  };
}
function At(e) {
  return e !== null && typeof e === "object" && "status_category" in e && typeof e.status_category === "string";
}
async function X(e) {
  let n = Z(e.headers.get("x-ccr-conflict-reason"));
  if (n !== void 0) return await PU(e), n;
  try {
    let r = await e.json();
    return Z(r?.error?.reason ?? r?.reason) ?? Z(r?.error?.type);
  } catch {}
  return;
}
function Z(e) {
  switch (e) {
    case "superseded_by_worker":
    case "epoch_stale":
    case "session_not_active":
      return e;
    default:
      return;
  }
}
function Ct(e) {
  let n = vt().safeParse(e);
  if (!n.success) return;
  let r = n.data,
    maxAgeMs = ee(r.max_age_ms, Pe),
    h = ee(r.max_bytes, Et),
    k = r.policy_version ?? void 0;
  return {
    maxEvents: maxAgeMs > 0 ? ee(r.max_events, _t) : 0,
    maxAgeMs: maxAgeMs,
    maxBytes: h > 0 ? h : void 0,
    flushOnSamplingEnd: r.flush_on_sampling_end === !0,
    flushOnAssistant: r.flush_on_assistant === !0,
    mustFlushTypes: new Set((r.must_flush_types ?? []).slice(0, St)),
    policyVersion: k !== void 0 && yt.test(k) ? k : void 0
  };
}
function It(e) {
  let n = G(e) ? e.content : void 0;
  return Array.isArray(n) && n.some(item => G(item) && item.type === "tool_result");
}
function ee(e, n) {
  return typeof e === "number" && Number.isFinite(e) ? Math.min(Math.max(0, Math.trunc(e)), n) : 0;
}
function Pt(e, n) {
  if (!e || !n) return e === n;
  return e.maxEvents === n.maxEvents && e.maxAgeMs === n.maxAgeMs && e.maxBytes === n.maxBytes && e.flushOnSamplingEnd === n.flushOnSamplingEnd && e.flushOnAssistant === n.flushOnAssistant && e.policyVersion === n.policyVersion && e.mustFlushTypes.size === n.mustFlushTypes.size && [...e.mustFlushTypes].every(item => n.mustFlushTypes.has(item));
}
function j(e, n, r) {
  let s = typeof n === "string" ? Number(n) : n;
  if (typeof s === "number" && Number.isFinite(s)) return Math.min(Math.max(s, 0), 60000);
  if (n !== void 0) t(`CCRClient: non-finite ${e} (${typeof n}) \u2014 using ${r}ms`, {
    level: "warn"
  });
  return r;
}
function Se(e) {
  return e.type === "system" && "subtype" in e && e.subtype === "thinking_tokens";
}
function Ior(e) {
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
function ye(e) {
  if (e) return "?include_hearth=true";
  return "";
}
function ke(e) {
  return e?.hearth;
}
function bKt(e) {
  let n = e?.isTurnRunning ?? (() => Hle() > 0),
    r = Me(),
    s = Date.now();
  return {
    noteActivity() {
      s = Date.now();
      try {
        r.emit();
      } catch (error) {
        d(error);
      }
    },
    sampleIdleSeconds() {
      let h = Date.now();
      if (n()) return s = h, 0;
      return Math.max(0, Math.floor((h - s) / 1000));
    },
    onActivity: r.subscribe
  };
}
var Fe = "worker_capabilities",
  Ue = "attestation-floor/1",
  Be = "x-ccr-attestation-policy",
  Ft = new Map([["verified", "VERIFIED"], ["verified_keyless_device", "VERIFIED_KEYLESS_DEVICE"], ["verified_by_gate", "VERIFIED_BY_GATE"]]),
  Ut = new Map([["server_authored", "SERVER_AUTHORED"], ["server_replayed", "SERVER_REPLAYED"], ["absent", "ABSENT"], ["invalid", "INVALID"], ["unchecked", "UNCHECKED"], ["unspecified", "UNSPECIFIED"]]);
function Oe(e) {
  if (e === null) return {
    policy: void 0,
    fault: void 0
  };
  let n = new Map();
  for (let g of Ze(e, ", ").split(";")) {
    let S = g.trim(),
      w = S.indexOf("="),
      R = w === -1 ? "" : S.slice(0, w);
    if (R !== "" && !n.has(R)) n.set(R, S.slice(w + 1));
  }
  let r = n.get("mode");
  if (n.get("v") !== "1") return {
    policy: void 0,
    fault: "policy_unparseable"
  };
  if (r === "off") return {
    policy: void 0,
    fault: void 0
  };
  if (r !== "observe" && r !== "enforce") return {
    policy: void 0,
    fault: "policy_unparseable"
  };
  let s = Ft.get(n.get("level") ?? ""),
    acceptStatuses = new Set(),
    k = !1;
  for (let g of (n.get("accept") ?? "").split(",")) {
    let S = Ut.get(g);
    if (S !== void 0) acceptStatuses.add(S);else if (g !== "") k = !0;
  }
  return {
    policy: {
      enforce: r === "enforce",
      acceptLevel: s ?? "VERIFIED_BY_GATE",
      acceptStatuses: acceptStatuses
    },
    fault: s === void 0 || k ? "policy_partial" : void 0
  };
}
var Bt = 1000,
  Ot = 30000,
  te = 15,
  Ht = 60,
  xt = 30000,
  Dt = 15000,
  He = 3,
  Nt = "keepalive_tolerance_seconds",
  Lt = "x-ccr-sse-keepalive-interval-seconds",
  $t = new Set([401, 403, 404]),
  qt = /\btext\/event-stream\b/i,
  N = 10,
  jt = 500,
  Wt = 8000;
function validateStatus() {
  return !0;
}
var Oor = new Set(["workflow_launch", "queued_notification", "session_notice"]),
  Vt = f(() => u({
    event_type: o()
  })),
  Gt = "heartbeat_probe",
  Kt = "owner_present";
class pSt {
  url;
  state = "idle";
  onData;
  onUserFrameReceived;
  onCloseCallback;
  onEventCallback;
  eventFilter;
  workerAttestationPolicySink;
  connectionPolicyReading;
  onEventVetoed;
  onHeartbeatProbe;
  onOwnerPresent;
  onReconnected;
  onDiagnostic;
  headers;
  sessionId;
  refreshHeaders;
  getAuthHeaders;
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
  sseKeepaliveMaxIntervalSeconds;
  advertisedMaxIntervalSeconds;
  echoedIntervalSeconds;
  nonOriginPolicy;
  nonOriginStreak = null;
  postUrl;
  held = null;
  constructor(e, n = {}, {
    sessionId: sessionId,
    refreshHeaders: refreshHeaders,
    initialSequenceNum: initialSequenceNum,
    getAuthHeaders: getAuthHeaders_2,
    deferDelivery: deferDelivery,
    sseKeepaliveMaxIntervalSeconds: sseKeepaliveMaxIntervalSeconds
  } = {}) {
    this.url = e;
    if (this.headers = n, this.sessionId = sessionId, this.refreshHeaders = refreshHeaders, this.getAuthHeaders = getAuthHeaders_2 ?? RD, this.postUrl = Yt(e), this.sseKeepaliveMaxIntervalSeconds = sseKeepaliveMaxIntervalSeconds, initialSequenceNum !== void 0 && initialSequenceNum > 0) this.lastSequenceNum = initialSequenceNum;
    if (deferDelivery) this.held = {
      frames: [],
      close: null
    };
    t(`SSETransport: SSE URL = ${e.href}`), t(`SSETransport: POST URL = ${this.postUrl}`), K("info", "cli_sse_transport_initialized");
  }
  getLastSequenceNum() {
    return this.lastSequenceNum;
  }
  async connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") {
      t(`SSETransport: Cannot connect, current state is ${this.state}`, {
        level: "error"
      }), K("error", "cli_sse_connect_failed");
      return;
    }
    this.state = "reconnecting";
    let e = Date.now(),
      n = De(Math.floor(Number(this.sseKeepaliveMaxIntervalSeconds?.())));
    this.advertisedMaxIntervalSeconds = n > te ? n : void 0, this.echoedIntervalSeconds = void 0;
    let r = new URL(this.url.href);
    if (this.lastSequenceNum > 0) r.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    if (this.advertisedMaxIntervalSeconds !== void 0) r.searchParams.set(Nt, String(He * this.advertisedMaxIntervalSeconds));
    if (this.workerAttestationPolicySink !== void 0) r.searchParams.set(Fe, Ue);
    let s = this.getAuthHeaders(),
      headers = {
        ...this.headers,
        ...s,
        Accept: "text/event-stream",
        "anthropic-version": "2023-06-01",
        "anthropic-client-platform": jg(),
        "User-Agent": $a()
      };
    if (xe(headers, s), this.lastSequenceNum > 0) headers["Last-Event-ID"] = String(this.lastSequenceNum);
    t(`SSETransport: Opening ${r.href}`), K("info", "cli_sse_connect_opening");
    let abortController = new AbortController();
    this.abortController = abortController;
    try {
      let g = await fetch(r.href, {
        headers: headers,
        signal: abortController.signal,
        ...yi({
          url: r.href
        })
      });
      if (!g.ok) {
        let T = g.status === 403 ? sNt(O => g.headers.get(O)) : void 0;
        if (await PU(g, {
          timeoutMs: timeoutMs
        }), abortController.signal.aborted) return;
        let A = Date.now(),
          F = this.advanceNonOriginStreak(T, A),
          retried = F !== null && this.nonOriginPolicy !== void 0 && A - F.startedAtMs < this.nonOriginPolicy.windowMs,
          B = $t.has(g.status) && !retried;
        if (t(`SSETransport: HTTP ${g.status}${B ? " (permanent)" : ""}${T ? ` source=${T}` : ""}${retried ? ` (not origin \u2014 retrying; attempt ${F?.attempts})` : ""}`, {
          level: "error"
        }), K("error", "cli_sse_connect_http_error", {
          status: g.status,
          ...(T !== void 0 && {
            source: T
          }),
          ...(F !== null && {
            retried: retried
          })
        }), this.connectErrorsSeen.add(`http_${g.status}`), this.diagConnectFailure(`HTTP ${g.status}${B ? " (permanent)" : ""}`, e), B) {
          this.nonOriginStreak = null, this.state = "closed", this.emitClose(g.status, T === void 0 ? void 0 : F === null ? {
            rejectSource: T
          } : {
            rejectSource: F.source,
            streak: {
              source: F.source,
              attempts: F.attempts,
              streakMs: A - F.startedAtMs
            }
          });
          return;
        }
        this.handleConnectionError();
        return;
      }
      if (!g.body) {
        t("SSETransport: No response body"), this.connectErrorsSeen.add("no_response_body"), this.diagConnectFailure("no response body", e), this.handleConnectionError();
        return;
      }
      let duration_ms = Date.now() - e;
      if (this.advertisedMaxIntervalSeconds !== void 0) {
        let T = Number(g.headers.get(Lt));
        if (Number.isInteger(T) && T > 0) this.echoedIntervalSeconds = De(T);
      }
      let w = this.workerAttestationPolicySink === void 0 ? void 0 : Oe(g.headers.get(Be));
      if (this.connectionPolicyReading = w, w !== void 0) {
        if (this.workerAttestationPolicySink?.(w), abortController.signal.aborted) return;
      }
      let R = this.advertisedMaxIntervalSeconds === void 0 ? "" : ` keepalive_interval=${this.keepaliveIntervalMs() / 1000}s${this.echoedIntervalSeconds === void 0 ? " (no echo)" : ""}`;
      if (t("SSETransport: Connected" + R), K("info", "cli_sse_connect_connected", {
        duration_ms: duration_ms,
        ...this.keepaliveDiagnosticFields(),
        ...(w !== void 0 && {
          attestation_policy: w.policy === void 0 ? "none" : w.policy.enforce ? "enforce" : "observe",
          ...(w.fault !== void 0 && {
            attestation_policy_fault: w.fault
          })
        })
      }), this.reconnectAttempts === 0) es("sse_connect_ms", duration_ms, e - performance.timeOrigin);
      if (this.reconnectAttempts > 0) {
        let T = this.reconnectStartTime ? Math.round((Date.now() - this.reconnectStartTime) / 1000) : 0;
        this.onDiagnostic?.(`SSE reconnected after ${this.reconnectAttempts} attempt(s), ${T}s downtime` + (this.connectErrorsSeen.size > 0 ? `, errors=[${[...this.connectErrorsSeen].join(",")}]` : ""), "warn");
      } else this.onDiagnostic?.(`SSE connected in ${duration_ms}ms`, "info");
      this.connectErrorsSeen.clear();
      let hasEverConnected = this.hasEverConnected;
      this.hasEverConnected = !0, this.state = "connected", this.reconnectAttempts = 0, this.reconnectStartTime = null, this.resetLivenessTimer();
      let I = qt.test(g.headers.get("content-type") ?? "");
      if (hasEverConnected) try {
        this.onReconnected?.();
      } catch (error) {
        t(`SSETransport: onReconnected handler threw: ${l(error)}`, {
          level: "error"
        }), K("error", "cli_sse_reconnected_handler_threw");
      }
      await this.readStream(g.body, I);
    } catch (error) {
      if (this.abortController?.signal.aborted) return;
      t(`SSETransport: Connection error: ${l(error)}`, {
        level: "error"
      }), K("error", "cli_sse_connect_error"), this.connectErrorsSeen.add("fetch_failed"), this.diagConnectFailure(l(error), e), this.handleConnectionError();
    }
  }
  advanceNonOriginStreak(source_2, n) {
    let nonOriginPolicy = this.nonOriginPolicy;
    if (nonOriginPolicy === void 0 || source_2 === void 0) return null;
    if (!xCe(source_2)) return this.nonOriginStreak = null, null;
    let nonOriginStreak = this.nonOriginStreak;
    if (nonOriginStreak === null || n - nonOriginStreak.lastAtMs > nonOriginPolicy.maxGapMs) nonOriginStreak = {
      source: source_2,
      startedAtMs: n,
      lastAtMs: n,
      attempts: 0
    }, this.nonOriginStreak = nonOriginStreak;
    return nonOriginStreak.attempts++, nonOriginStreak.lastAtMs = n, nonOriginStreak;
  }
  settleNonOriginStreakRecovered() {
    let nonOriginStreak_2 = this.nonOriginStreak;
    if (nonOriginStreak_2 === null) return;
    this.nonOriginStreak = null;
    let n = {
      source: nonOriginStreak_2.source,
      attempts: nonOriginStreak_2.attempts,
      streakMs: Date.now() - nonOriginStreak_2.startedAtMs
    };
    K("info", "cli_sse_nonorigin_403_recovered", {
      source: n.source,
      attempts: n.attempts,
      streak_ms: n.streakMs
    });
    try {
      this.nonOriginPolicy?.onRecovered?.(n);
    } catch (error) {
      t(`SSETransport: onRecovered handler threw: ${l(error)}`, {
        level: "error"
      });
    }
  }
  diagConnectFailure(e, n) {
    if (!this.onDiagnostic) return;
    let r = this.reconnectAttempts + 1;
    if (r > 3 && r % 10 !== 0) return;
    let s = Date.now() - n,
      h = this.reconnectStartTime ? `, ${Math.round((Date.now() - this.reconnectStartTime) / 1000)}s reconnecting` : "",
      k = this.connectErrorsSeen.size > 1 ? `, errors=[${[...this.connectErrorsSeen].join(",")}]` : "";
    this.onDiagnostic(`SSE connect failed (${e}) attempt=${r} took=${s}ms${h}${k}`, "warn");
  }
  async readStream(e, n) {
    let r = e.getReader(),
      s = new fSt();
    try {
      while (!0) {
        let {
          done: done,
          value: value
        } = await r.read();
        if (done) break;
        for (let g of s.push(value)) {
          if (this.resetLivenessTimer(), this.nonOriginStreak !== null && n) this.settleNonOriginStreakRecovered();
          if (g.id && g.event !== "ephemeral_event") {
            let S = parseInt(g.id, 10);
            if (!isNaN(S)) {
              if (this.seenSequenceNums.has(S)) t(`SSETransport: DUPLICATE frame seq=${S} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`, {
                level: "warn"
              }), K("warn", "cli_sse_duplicate_sequence");else if (this.seenSequenceNums.add(S), this.seenSequenceNums.size > 1000) {
                let w = this.lastSequenceNum - 200;
                for (let R of this.seenSequenceNums) if (R < w) this.seenSequenceNums.delete(R);
              }
              if (S > this.lastSequenceNum) this.lastSequenceNum = S;
            }
          }
          if (g.event && g.data) this.handleSSEFrame(g.event, g.data);else if (g.data) t("SSETransport: Frame has data: but no event: field \u2014 dropped", {
            level: "warn"
          }), K("warn", "cli_sse_frame_missing_event_field");
        }
      }
    } catch (error) {
      if (this.abortController?.signal.aborted) return;
      t(`SSETransport: Stream read error: ${l(error)}`, {
        level: "error"
      }), K("error", "cli_sse_stream_read_error");
    } finally {
      r.releaseLock();
    }
    if (this.state !== "closing" && this.state !== "closed") {
      if (t("SSETransport: Stream ended, reconnecting"), this.state === "connected") this.connectErrorsSeen.add("stream_ended"), this.onDiagnostic?.("SSE stream ended by server, reconnecting", "warn");
      this.handleConnectionError();
    }
  }
  handleSSEFrame(e, data, receivedWallMs = Date.now()) {
    if (e === "ephemeral_event") {
      this.handleEphemeralFrame(data);
      return;
    }
    if (this.held !== null) {
      this.held.frames.push({
        eventType: e,
        data: data,
        policyReading: this.connectionPolicyReading,
        receivedWallMs: receivedWallMs
      });
      return;
    }
    if (e !== "client_event") {
      t(`SSETransport: Unexpected SSE event type '${e}' on worker stream`, {
        level: "warn"
      }), K("warn", "cli_sse_unexpected_event_type", {
        event_type: e
      });
      return;
    }
    let s;
    try {
      s = J(data);
    } catch (error) {
      t(`SSETransport: Failed to parse client_event data: ${l(error)}`, {
        level: "error"
      });
      return;
    }
    let payload = s.payload;
    if (payload && typeof payload === "object" && "type" in payload) {
      let k = this.sessionId ? ` session=${this.sessionId}` : "",
        g = s.device_attestation_status ? ` attestation=${s.device_attestation_status}` : "";
      t(`SSETransport: Event seq=${s.sequence_num} event_id=${s.event_id} event_type=${s.event_type} payload_type=${String(payload.type)}${g}${k}`), K("info", "cli_sse_message_received");
      let decision = this.eventFilter?.(s);
      if (decision) K("warn", "cli_sse_event_filtered", decision === !0 ? void 0 : {
        decision: decision
      });else if (typeof payload.type === "string" && Oor.has(payload.type) && s.event_type !== payload.type) K("warn", "cli_sse_server_only_event_type_mismatch", {
        event_type: s.event_type,
        payload_type: payload.type
      }), this.onEventVetoed?.(s);else if (payload.type === "control_request" && s.source === "worker") K("warn", "cli_sse_worker_control_request_dropped");else {
        if (payload.type === "user" && typeof payload.uuid === "string") this.onUserFrameReceived?.(payload.uuid, receivedWallMs);
        this.onData?.(b(payload) + `
`);
      }
    } else t(`SSETransport: Ignoring client_event with no type in payload: event_id=${s.event_id}`);
    this.onEventCallback?.(s);
  }
  emitClose(code, detail) {
    if (this.held !== null) {
      this.held.close = {
        code: code,
        detail: detail
      };
      return;
    }
    this.onCloseCallback?.(code, detail);
  }
  startDelivery() {
    let held = this.held;
    if (held === null) return;
    this.held = null;
    let n;
    for (let r of held.frames) {
      if (r.policyReading !== void 0 && r.policyReading !== n) {
        if (n = r.policyReading, !this.handSinkPolicyReading(n)) return;
      }
      this.handleSSEFrame(r.eventType, r.data, r.receivedWallMs);
    }
    if (this.connectionPolicyReading !== void 0 && this.connectionPolicyReading !== n && !this.handSinkPolicyReading(this.connectionPolicyReading)) return;
    if (held.close !== null) this.onCloseCallback?.(held.close.code, held.close.detail);
  }
  handSinkPolicyReading(e) {
    return this.workerAttestationPolicySink?.(e), this.state !== "closing";
  }
  handleEphemeralFrame(e) {
    let n;
    try {
      n = J(e);
    } catch (error) {
      t(`SSETransport: Failed to parse ephemeral_event data: ${l(error)}`, {
        level: "error"
      });
      return;
    }
    let r = Vt().safeParse(n);
    if (r.success && r.data.event_type === Kt && this.onOwnerPresent !== void 0) {
      K("info", "cli_sse_owner_present_received");
      try {
        this.onOwnerPresent();
      } catch (error) {
        t(`SSETransport: onOwnerPresent handler threw: ${l(error)}`, {
          level: "error"
        });
      }
      return;
    }
    if (!r.success || r.data.event_type !== Gt) {
      K("warn", "cli_sse_unexpected_ephemeral_type", {
        event_type: r.success ? r.data.event_type : "unparseable"
      });
      return;
    }
    K("info", "cli_sse_heartbeat_probe_received");
    try {
      this.onHeartbeatProbe?.();
    } catch (error) {
      t(`SSETransport: onHeartbeatProbe handler threw: ${l(error)}`, {
        level: "error"
      }), K("error", "cli_sse_heartbeat_probe_handler_threw");
    }
  }
  handleConnectionError() {
    if (this.clearLivenessTimer(), this.state === "closing" || this.state === "closed") return;
    this.abortController?.abort(), this.abortController = null;
    let e = Date.now();
    if (!this.reconnectStartTime) this.reconnectStartTime = e;
    let n = e - this.reconnectStartTime;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    if (this.refreshHeaders) {
      let h = this.refreshHeaders();
      Object.assign(this.headers, h), xe(this.headers, h), t("SSETransport: Refreshed headers for reconnect");
    }
    this.state = "reconnecting", this.reconnectAttempts++;
    let r = Math.min(Bt * Math.pow(2, this.reconnectAttempts - 1), Ot),
      s = Math.max(0, r + r * 0.25 * (2 * Math.random() - 1));
    t(`SSETransport: Reconnecting in ${Math.round(s)}ms (attempt ${this.reconnectAttempts}, ${Math.round(n / 1000)}s elapsed)`), K("error", "cli_sse_reconnect_attempt", {
      reconnectAttempts: this.reconnectAttempts
    }), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, s);
  }
  onLivenessTimeout = () => {
    this.livenessTimer = null, t("SSETransport: Liveness timeout, reconnecting", {
      level: "error"
    }), K("error", "cli_sse_liveness_timeout", this.keepaliveDiagnosticFields()), this.connectErrorsSeen.add("liveness_timeout"), this.onDiagnostic?.(`SSE liveness timeout \u2014 no frame in ${this.livenessTimeoutMs() / 1000}s, reconnecting`, "warn"), this.abortController?.abort(), this.handleConnectionError();
  };
  resetLivenessTimer() {
    this.lastLivenessEvidenceAtMs = Date.now(), this.clearLivenessTimer(), this.livenessTimer = setTimeout(this.onLivenessTimeout, this.livenessTimeoutMs());
  }
  keepaliveIntervalMs() {
    return (this.echoedIntervalSeconds ?? this.advertisedMaxIntervalSeconds ?? te) * 1000;
  }
  livenessTimeoutMs() {
    return this.keepaliveIntervalMs() + xt;
  }
  keepaliveDiagnosticFields() {
    return this.advertisedMaxIntervalSeconds === void 0 ? {} : {
      keepalive_tolerance_s: He * this.advertisedMaxIntervalSeconds,
      keepalive_interval_s: this.keepaliveIntervalMs() / 1000,
      liveness_timeout_s: this.livenessTimeoutMs() / 1000,
      keepalive_interval_echoed: this.echoedIntervalSeconds !== void 0
    };
  }
  clearLivenessTimer() {
    if (this.livenessTimer) clearTimeout(this.livenessTimer), this.livenessTimer = null;
  }
  async write(e) {
    let n = this.getAuthHeaders();
    if (Object.keys(n).length === 0) {
      t("SSETransport: No session token available for POST"), K("warn", "cli_sse_post_no_token");
      return;
    }
    let headers_2 = {
      ...n,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": jg(),
      "User-Agent": $a()
    };
    t(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
    for (let attempt = 1; attempt <= N; attempt++) {
      try {
        let k = await mt.post(this.postUrl, e, {
          headers: headers_2,
          validateStatus: validateStatus
        });
        if (k.status === 200 || k.status === 201) {
          t(`SSETransport: POST success type=${e.type}`);
          return;
        }
        if (t(`SSETransport: POST ${k.status} body=${b(k.data).slice(0, 200)}`), k.status >= 400 && k.status < 500 && k.status !== 429) {
          t(`SSETransport: POST returned ${k.status} (client error), not retrying`), K("warn", "cli_sse_post_client_error", {
            status: k.status
          });
          return;
        }
        t(`SSETransport: POST returned ${k.status}, attempt ${attempt}/${N}`), K("warn", "cli_sse_post_retryable_error", {
          status: k.status,
          attempt: attempt
        });
      } catch (error) {
        t(`SSETransport: POST error: ${l(error)}, attempt ${attempt}/${N}`), K("warn", "cli_sse_post_network_error", {
          attempt: attempt
        });
      }
      if (attempt === N) {
        t(`SSETransport: POST failed after ${N} attempts, continuing`), K("warn", "cli_sse_post_retries_exhausted");
        return;
      }
      let h = Math.min(jt * Math.pow(2, attempt - 1), Wt);
      await Q(h);
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  isReadStreamRecentlyAlive() {
    return this.state === "connected" && Date.now() - this.lastLivenessEvidenceAtMs < this.getReadStreamRecentLivenessWindowMs();
  }
  getReadStreamRecentLivenessWindowMs() {
    return this.keepaliveIntervalMs() + Dt;
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
  setOnDiagnostic(e) {
    this.onDiagnostic = e;
  }
  setEventFilter(e) {
    this.eventFilter = e;
  }
  setWorkerAttestationPolicySink(e) {
    this.workerAttestationPolicySink = e;
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
  setOnReconnected(e) {
    this.onReconnected = e;
  }
  close() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.clearLivenessTimer(), this.state = "closing", this.nonOriginStreak = null, this.held = null, this.abortController?.abort(), this.abortController = null;
  }
  [Symbol.dispose]() {
    this.close();
  }
}
function xe(e, n) {
  if (n.Cookie) delete e.Authorization;
  if (n.Authorization) delete e.Cookie, delete e["X-Organization-Uuid"];
}
function De(e) {
  return Math.min(Math.max(e, te), Ht);
}
function Yt(e) {
  let pathname = e.pathname;
  if (pathname.endsWith("/stream")) pathname = pathname.slice(0, -7);
  return `${e.protocol}//${e.host}${pathname}`;
}
export { g7e, gSe, p7r, _Kt, Por, oTn, lL, Ior, bKt, Oor, pSt };