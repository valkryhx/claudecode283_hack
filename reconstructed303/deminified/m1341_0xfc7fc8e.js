// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Ay, Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { bt as registerCleanup, mI as registerPreExitFlush, _, Bi, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { nt } from "B:/~BUN/root/chunk-nggrknsv.js";
import { jin } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { X, Z0e } from "B:/~BUN/root/chunk-yrjpmz6e.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Xke, _Je, C6n, eNr, I$t, tNr } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ecs } from "B:/~BUN/root/chunk-y83prpab.js";
import { ra } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { xMs, PMs, qEo, $Ms, Prn, UMs, WMs, GMs } from "B:/~BUN/root/chunk-fb07w30y.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { tUs, nUs, Dke } from "B:/~BUN/root/chunk-8pqw0dhk.js";
import { bd, PB, JEe, L5n } from "B:/~BUN/root/chunk-rfp1pa77.js";
import { kr } from "B:/~BUN/root/chunk-t3p4x0tq.js";
import { Yfe, Qie } from "B:/~BUN/root/chunk-w6et565n.js";
import { u8t, Scs, p8t, kcs } from "B:/~BUN/root/chunk-2w966ew9.js";
import { GKn } from "B:/~BUN/root/chunk-7z3ndmqr.js";
import { wit } from "B:/~BUN/root/chunk-dam0g4d0.js";
import { V4e } from "B:/~BUN/root/chunk-j6ad53eq.js";
import { Qbe } from "B:/~BUN/root/chunk-7mxk79br.js";
import { f8t as timeoutMs, Nz } from "B:/~BUN/root/chunk-050gfc4p.js";
import { qzn } from "B:/~BUN/root/chunk-3hya8nsv.js";
import { Bve } from "B:/~BUN/root/chunk-f561y43v.js";
import { As } from "B:/~BUN/root/chunk-xnas864x.js";
import { LFt, cje } from "B:/~BUN/root/chunk-vjc7rbsd.js";
import { jO } from "B:/~BUN/root/chunk-4qc55bxf.js";
import { Hu } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { o, v, M, oe, T, u, _t, fe, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { hs, kh } from "B:/~BUN/root/chunk-qjf8jcwq.js";
import { randomUUID as ge } from "crypto";
var Z = 61440,
  It = Z - 4096;
function Fe(e) {
  return Buffer.byteLength(Bi(e)) - 2;
}
function Ue(e, n, r, s, h) {
  return e.firstEvent.index === r.index && e.deltaType === s && e.first.parent_tool_use_id === n.parent_tool_use_id && e.first.thinking_display === n.thinking_display && e.first.api_message_id === n.api_message_id && e.bytes + h <= It;
}
function xe(event) {
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
function ce(e) {
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
function Be(e) {
  if (e.length <= 1) return e;
  let n = [],
    r = null;
  for (let first of e) {
    let h = xe(first.event);
    if (h === null) {
      if (r !== null) n.push(ce(r)), r = null;
      n.push(first);
      continue;
    }
    let {
        event: S,
        deltaType: deltaType,
        chunk: y,
        estimatedTokens: estimatedTokens
      } = h,
      bytes = Fe(y);
    if (r !== null && Ue(r, first, S, deltaType, bytes)) {
      if (r.accumulated += y, r.bytes += bytes, r.count += 1, typeof estimatedTokens === "number") r.estimatedTokens = (r.estimatedTokens ?? 0) + estimatedTokens;
      continue;
    }
    if (r !== null) n.push(ce(r));
    r = {
      first: first,
      firstEvent: S,
      deltaType: deltaType,
      accumulated: y,
      estimatedTokens: estimatedTokens,
      bytes: bytes,
      count: 1
    };
  }
  if (r !== null) n.push(ce(r));
  return n;
}
function De(e, n) {
  let r = e.findIndex(item => item.uuid === n);
  if (r < 0) return n;
  let s = null;
  for (let h = 0; h <= r; h++) {
    let first_2 = e[h],
      E = xe(first_2.event);
    if (E === null) {
      s = null;
      continue;
    }
    let {
        event: y,
        deltaType: deltaType_2,
        chunk: chunk
      } = E,
      bytes_2 = Fe(chunk);
    if (s !== null && Ue(s, first_2, y, deltaType_2, bytes_2)) s.bytes += bytes_2;else s = {
      first: first_2,
      firstEvent: y,
      deltaType: deltaType_2,
      bytes: bytes_2
    };
  }
  return s?.first.uuid ?? n;
}
var Pt = 64;
class he {
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
    for (let n of e) this.queuedSince.add(n);
  }
  noteAttempt(e, startedAt, r) {
    let s = F(e, h => this.queuedSince.has(h));
    if (this.posts++, r) this.rows += s;else this.failedPosts++;
    if (this.attempts.length < Pt) this.attempts.push({
      startedAt: startedAt,
      endedAt: performance.now(),
      ahead: s === 0
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
      let E = Math.max(0, endedAt - Math.max(startedAt_2, e));
      if (ahead) aheadMs += E;else postMs += E;
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
function pe(e) {
  return Array.isArray(e) && e.every(item => typeof item === "string");
}
function He(e, n = cap) {
  let compactMetadata = e.compactMetadata;
  if (!N(compactMetadata)) return null;
  let preservedMessages = compactMetadata.preservedMessages;
  if (!N(preservedMessages)) return null;
  let uuids = preservedMessages.uuids;
  if (!pe(uuids) || uuids.length <= n) return null;
  let uuids_2 = uuids.slice(-n),
    headUuid = uuids_2[0],
    allUuids = preservedMessages.allUuids,
    U = pe(allUuids) ? allUuids.indexOf(headUuid) : -1,
    preservedSegment = compactMetadata.preservedSegment;
  return {
    ...e,
    compactMetadata: {
      ...compactMetadata,
      preservedMessages: {
        ...preservedMessages,
        uuids: uuids_2,
        ...(pe(allUuids) && {
          allUuids: U >= 0 ? allUuids.slice(U) : allUuids.slice(-n)
        })
      },
      ...(N(preservedSegment) && {
        preservedSegment: {
          ...preservedSegment,
          headUuid: headUuid
        }
      })
    }
  };
}
var Ot = {
    message_start: !0,
    message_delta: !0,
    message_stop: !0,
    content_block_start: !0,
    content_block_delta: !0,
    content_block_stop: !0
  },
  Ft = {
    text_delta: !0,
    input_json_delta: !0,
    citations_delta: !0,
    thinking_delta: !0,
    signature_delta: !0,
    compaction_delta: !0
  };
function Le(e) {
  let {
    event: event_2
  } = e;
  if (event_2.type === "message_start" && event_2.message?.input_transformations) {
    let {
      input_transformations: input_transformations,
      ...message
    } = event_2.message;
    return {
      ...e,
      event: {
        ...event_2,
        message: message
      }
    };
  }
  if (event_2.type === "message_delta" && event_2.input_transformations) {
    let {
      input_transformations: input_transformations_2,
      ...event_3
    } = event_2;
    return {
      ...e,
      event: event_3
    };
  }
  return e;
}
function me(e, bytes_3) {
  let r = Ut(e.event),
    s = Object.entries(r).map(([h, S]) => `${h}=${S}`).join(" ");
  t(`CCRClient: dropping oversize ephemeral stream_event (${s}, ${bytes_3} bytes, over the ${Z}-byte limit)`, {
    level: "warn"
  }), p("ccr_partial_messages", "oversize_ephemeral_skipped", {
    ...r,
    bytes: bytes_3
  });
}
function Ut(e) {
  if (!N(e)) return {
    event_type: b("other")
  };
  let {
      type: type,
      delta: delta,
      content_block: content_block
    } = e,
    h = N(content_block) ? content_block.type : void 0;
  return {
    event_type: c(Ne(Ot, type)),
    ...(type === "content_block_delta" && {
      delta_type: c(Ne(Ft, N(delta) ? delta.type : void 0))
    }),
    ...(type === "content_block_start" && {
      content_block_type: Xke(h) ? c(h) : b("other")
    })
  };
}
function Ne(e, n) {
  for (let r in e) if (r === n) return r;
  return "other";
}
class _e {
  inflight = null;
  pending = null;
  remembered = {};
  closed = !1;
  config;
  constructor(e) {
    this.config = e;
  }
  enqueue(e) {
    if (this.closed) return;
    this.pending = this.pending ? ve(this.pending, e) : e, this.remember(e), this.drain();
  }
  remember(e) {
    if (this.config.remembers) this.remembered = ve(this.remembered, e);
  }
  close() {
    this.closed = !0, this.pending = null;
  }
  get unsent() {
    return this.inflight !== null;
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
      if (r++, await Y(this.retryDelay(r)), this.pending && !this.closed) n = ve(n, this.pending), this.pending = null;
    }
  }
  retryDelay(e) {
    let n = Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs),
      r = Math.random() * this.config.jitterMs;
    return n + r;
  }
}
function ve(e, n) {
  let r = {
    ...e
  };
  for (let [s, h] of Object.entries(n)) if ((s === "external_metadata" || s === "internal_metadata") && r[s] && typeof r[s] === "object" && typeof h === "object" && h !== null) r[s] = {
    ...r[s],
    ...h
  };else r[s] = h;
  return r;
}
var We = {},
  lt = 20000,
  qe = 1e4,
  dt = 15000,
  ut = 5000,
  ct = ut,
  Dt = 5000,
  Ht = 300000,
  timeout_3 = 2000,
  Nt = dt + ct + 2 * lt,
  Lt = 5000,
  Wt = 1200000,
  Ge = 1.5,
  qt = 3,
  $t = new Set([401, 403, 404, 429]),
  fAt = 100;
function K(e) {
  return e === 400 || e === 413 || e === 422;
}
var ke = 1e4,
  ze = 60000,
  Re = 1048576,
  jt = 5000,
  Gt = 120000,
  zt = 1.5,
  Te = 262144;
function Ve(e, {
  maxMs: maxMs,
  minMs = ke
}) {
  let s = ke + Math.round(e.bytes / Re * (jt / 1000)) * 1000,
    h = e.bytes >= Te && !e.cuttable ? s * zt ** e.retryCount : s;
  return Math.max(minMs, Math.min(maxMs, Math.round(h)));
}
var Vt = new Set(["remote_tool_call", "remote_plumbing_call"]);
function Kt(e) {
  return Vt.has(ht(e));
}
var Yt = new Set(Qbe),
  Xt = 256;
function ht(e) {
  let n = e.payload.type === "control_request" ? e.payload.request : void 0;
  return typeof n === "object" && n !== null && "subtype" in n ? n.subtype : void 0;
}
function re(e) {
  let n = k(e);
  if (n) return n;
  if (e && typeof e === "object" && "name" in e && typeof e.name === "string") return e.name;
  return;
}
class zFe extends Error {
  reason;
  httpStatus;
  constructor(e, n) {
    super(`CCRClient init failed: ${e}`);
    this.reason = e;
    this.httpStatus = n;
  }
}
function _cs(e) {
  return e instanceof zFe && e.reason === "worker_register_failed" && !K(e.httpStatus);
}
var Qt = 10,
  $fr = {
    epoch_conflict: 4090,
    superseded_by_worker: 4090,
    session_not_active: 4090,
    epoch_stale: 4090,
    session_not_found: 4090,
    token_expired: 4094,
    auth_exhausted: 4094
  },
  Jt = {
    epoch_conflict: !0,
    superseded_by_worker: !0,
    session_not_active: !0,
    epoch_stale: !0,
    session_not_found: !1,
    token_expired: !1,
    auth_exhausted: !1
  },
  Zt = 3,
  en = 10,
  maxAttempts = 3;
async function tn(e, n) {
  let r = e.body?.getReader(),
    textDecoder = new TextDecoder(),
    h = "",
    bytes_4 = 0;
  for (let E = await r?.read(); E !== void 0 && !E.done; E = await r?.read()) {
    if (bytes_4 += E.value.byteLength, bytes_4 > n) return await r?.cancel(), null;
    h += textDecoder.decode(E.value, {
      stream: !0
    });
  }
  return {
    text: h + textDecoder.decode(),
    bytes: bytes_4
  };
}
function nn(e, n) {
  let r = e.payload?.timestamp;
  return r === void 0 || typeof r === "string" && r.length <= n;
}
var rn = 1e4,
  maxDelayMs = 30000;
function Ye(e) {
  return e !== void 0 && e >= 400 && e < 500 ? "not_accepted" : "indeterminate";
}
function be(e) {
  let has_terminal_bookend = !1,
    has_level = !1;
  for (let s of e) if (s.payload.subtype === "task_notification") has_terminal_bookend = !0;else if (s.payload.subtype === "background_tasks_changed") has_level = !0;
  return has_terminal_bookend || has_level ? {
    has_terminal_bookend: has_terminal_bookend,
    has_level: has_level
  } : null;
}
function ie(e) {
  return Math.min(Math.max(0, Math.trunc(e) || 0), 2147483647);
}
var Se = {
    "/worker": "worker_state",
    "/worker/events": "events",
    "/worker/events/delivery": "delivery",
    "/worker/heartbeat": "heartbeat",
    "/worker/internal-events": "internal_events"
  },
  sn = 512,
  on = "upgrade_relay_marker";
function pt(e) {
  return {
    tool_name: e.tool_name,
    display_tool_name: e.display_tool_name,
    action_description: e.action_description,
    raw_command: e.raw_command,
    request_id: e.request_id,
    tool_use_id: e.tool_use_id
  };
}
var an = f(() => u({
    tool_name: o().refine(e => !e.startsWith("dialog:")),
    display_tool_name: o().nullish(),
    action_description: o(),
    raw_command: o().nullish(),
    request_id: o(),
    tool_use_id: o().min(1),
    suppressed_request_id: o().nullish()
  })),
  ln = f(() => u({
    data: T(_t({
      event_id: o(),
      event_type: o(),
      payload: fe(o(), oe()),
      event_metadata: fe(o(), oe()).nullish(),
      is_compaction: M(),
      created_at: o(),
      session_agent_id: o().optional()
    })),
    next_cursor: o().optional()
  })),
  dn = f(() => u({
    results: T(u({
      event_id: o(),
      duplicate: M()
    }))
  }));
function un(e) {
  let n = an().safeParse(e);
  if (!n.success) return;
  let r = n.data,
    requestId = Bve(r);
  if (requestId === void 0) return;
  return {
    requestId: requestId,
    details: pt({
      tool_name: r.tool_name,
      display_tool_name: r.display_tool_name ?? void 0,
      action_description: r.action_description,
      raw_command: r.raw_command ?? void 0,
      request_id: r.request_id,
      tool_use_id: r.tool_use_id
    })
  };
}
function cn(e) {
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
  let r = un(n);
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
function hn(reported, n) {
  if (reported === "requires_action") return {
    reported: reported
  };
  let r = n.external?.pending_actions;
  return {
    reported: reported,
    pendingActionOutstanding: n.readFailed === !0 || n.external?.pending_action !== void 0 && n.external.pending_action !== null || Array.isArray(r) && r.length > 0
  };
}
var pn = f(() => _t({
    max_events: v().nullish(),
    max_age_ms: v().nullish(),
    max_bytes: v().nullish(),
    flush_on_sampling_end: M().nullish(),
    flush_on_assistant: M().nullish(),
    flush_before_tools_wait_ms: v().nullish(),
    flush_after_tools: o().nullish(),
    must_flush_types: T(o()).nullish(),
    live_twin_types: T(o()).nullish().catch(void 0),
    policy_version: o().nullish()
  })),
  fn = 50,
  ft = 120000,
  mn = 60000,
  vn = 1048576,
  _n = 32,
  gn = 32,
  Xe = 57344,
  bn = /^[A-Za-z0-9._-]{1,16}$/,
  Sn = 30000,
  En = 2000,
  yn = ["none", "write", "all"],
  wn = 64,
  kn = 50,
  Rn = 5000,
  Tn = !0,
  Mn = !1,
  An = 3000,
  Cn = 1e4,
  In = e => e.ephemeral === !0 || e.payload.type === "keep_alive",
  Qe = () => !1;
function jso() {
  return a.CLAUDE_CODE_WORKER_EPOCH ?? NaN;
}
function Pn(e) {
  let n = e?.error;
  return n?.type === "not_found_error" && n.resource_type === "client_event";
}
function Je(e, n) {
  return e.toLowerCase() === n.toLowerCase();
}
function On(e) {
  if (e === 404) return "http_404_unknown_body";
  if (e === 401 || e === 403) return "http_refused";
  if (e === 429) return "http_rate_limited";
  if (e === 501) return "http_not_served";
  return e >= 500 ? "http_server_error" : "http_other";
}
var Fn = f(() => u({
  event_id: o(),
  source: C("client"),
  created_at: o(),
  payload: _t({
    uuid: o()
  }),
  sent_by_account_id: o().nullish(),
  device_attestation_status: oe().optional(),
  session_agent_owned: M()
}));
function Un(e, eventId) {
  let r = Fn().safeParse(e);
  if (!r.success) return {
    kind: "unavailable",
    why: "malformed"
  };
  let {
      event_id: event_id,
      created_at: created_at,
      payload: payload
    } = r.data,
    createdAtMs = Date.parse(created_at);
  if (!Je(event_id, eventId) || !Number.isFinite(createdAtMs) || !Je(payload.uuid, eventId)) return {
    kind: "unavailable",
    why: "malformed"
  };
  return {
    kind: "event",
    event: {
      eventId: eventId,
      createdAtMs: createdAtMs,
      sentByAccountId: r.data.sent_by_account_id ?? void 0,
      deviceAttestationStatus: r.data.device_attestation_status,
      sessionAgentOwned: r.data.session_agent_owned,
      payload: payload
    }
  };
}
function Ufr(e, getAuthHeaders) {
  if (e.protocol !== "http:" && e.protocol !== "https:") {
    let s = jin(e.protocol, "session_url_protocol");
    throw Error(`CCRClient: Expected http(s) URL${s === void 0 ? "" : `, got ${s}`}`);
  }
  let r = e.pathname.replace(/\/$/, "");
  return {
    sessionBaseUrl: `${e.protocol}//${e.host}${r}`,
    getAuthHeaders: getAuthHeaders
  };
}
class KF {
  workerEpoch = 0;
  heartbeatIntervalMs;
  heartbeatJitterFraction;
  seedHeartbeatIntervalMs;
  advertiseHeartbeatProbeSupport;
  uploadTrim;
  uploadHoldMarker;
  servedCallRequestsJumpQueue;
  maxEventPostTimeoutMs;
  urgentRequestIds = new Set();
  eventHoldEnabled;
  processExiting;
  gatesToolCalls;
  toolCallRowGraceMs;
  flushPolicy;
  holdRule;
  seesModelCallBoundaries = !1;
  holdSwitchedOff = !1;
  shutdownReleased = !1;
  shutdownKeepsClientEvents = !1;
  viewerAbsentReported = !1;
  stopToolCallGate;
  toolCallRows = {
    client_events: new Map(),
    internal_events: new Map()
  };
  toolCallRowWaiters = new Map();
  awaitedToolCalls = new Set();
  transcriptLaneInUse = !1;
  gatedWriteToolCalls = new Set();
  lanesNotAnswering = new Set();
  loggedUnreadableFlushPolicy = !1;
  loggedHoldSwitchedOff = !1;
  loggedTranscriptEnvelopeStrip = !1;
  loggedToolResultBlank = !1;
  loggedMcpImageBlank = !1;
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
  streamEventFlushIntervalMs = fAt;
  streamEventFirstFlushMs = 0;
  firstDeltaFlushTimer = null;
  firstContentFlushPending = !1;
  parkedRows = [];
  noSubscriberStreamEventFlushIntervalMs = 0;
  noSubscriberUploadHoldMs = 0;
  closingForSuccessor = !1;
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
  internalEventPostWatch;
  rowsAwaitingCompactSummary = new Map();
  rowsAwaitingCompactSummaryAtClose;
  onInternalBatchAcked;
  onInternalEventLaneClosed;
  rowsRepeatedAfterCompaction;
  deliveryUploader;
  pendingProcessingAcks = [];
  onEpochMismatch;
  lastLineWhen;
  onDurableEventsDropped = void 0;
  onDurableEventsUpload = void 0;
  getAuthHeaders;
  onDiagnostic;
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
  constructor(e, n, r) {
    this.lastLineWhen = r?.onEpochMismatch ? "queued" : "now", this.onEpochMismatch = r?.onEpochMismatch ?? (() => {
      process.exit(1);
    }), this.onHeartbeatLost = r?.onHeartbeatLost, this.readTransport = e, this.workerSocket = r?.workerSocket, this.nonOrigin403Transient = r?.nonOrigin403Transient ?? !1, this.heartbeatIntervalMs = r?.heartbeatIntervalMs ?? lt, this.seedHeartbeatIntervalMs = this.heartbeatIntervalMs, this.advertiseHeartbeatProbeSupport = r?.advertiseHeartbeatProbeSupport ?? !1, this.uploadTrim = r?.uploadTrim ?? (() => We), this.uploadHoldMarker = () => r?.uploadHoldMarker?.() === !0, this.servedCallRequestsJumpQueue = () => r?.servedCallRequestsJumpQueue?.() === !0, this.maxEventPostTimeoutMs = r?.maxEventPostTimeoutMs ?? Gt, this.eventHoldEnabled = r?.eventHoldEnabled, this.processExiting = r?.processExiting ?? (() => !1), this.gatesToolCalls = r?.gatesToolCalls === !0, this.toolCallRowGraceMs = r?.toolCallRowGraceMs ?? En, this.beatOnStaleReconnect = r?.beatOnStaleReconnect ?? !1, this.idleTracker = r?.idleTracker, this.beatOnReactivation = (r?.beatOnReactivation ?? !1) && this.idleTracker !== void 0, this.skipRedundantHeartbeats = r?.skipRedundantHeartbeats ?? !1, this.probeBeatSpacingMs = r?.probeBeatSpacingMs ?? Lt, this.heartbeatJitterFraction = r?.heartbeatJitterFraction ?? 0, this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(this.advertiseHeartbeatProbeSupport), this.getAuthHeaders = r?.getAuthHeaders ?? PB, this.onDiagnostic = r?.onDiagnostic, this.onRequestAuthOk = r?.onRequestAuthOk, this.adoptRefreshedAuth = r?.adoptRefreshedAuth, this.gzipRequestBodyFetch = r?.gzipRequestBodyFetch, this.ownConnectionPool = r?.ownConnectionPool, this.reportParkAtInit = r?.reportParkAtInit ?? !1, this.initExternalMetadata = r?.initExternalMetadata ?? {}, this.initialWorkerStatus = r?.initialWorkerStatus ?? "idle", this.initStateGetOrderingBoundMs = r?.initStateGetOrderingBoundMs ?? rn, this.readSource = {
      ...Ufr(n, this.getAuthHeaders),
      isClosed: () => this.closed,
      onConflict: h => this.handleEpochMismatch(h),
      ownConnectionPool: this.ownConnectionPool
    }, this.sessionBaseUrl = this.readSource.sessionBaseUrl, this.sessionId = n.pathname.replace(/\/$/, "").split("/").pop() || "", this.workerState = new _e({
      send: async h => {
        let S = await this.request("put", "/worker", {
          worker_epoch: this.workerEpoch,
          ...h
        }, "PUT worker");
        if (S.ok) {
          if (h.worker_status !== void 0) g("ccr_worker_state_publish");
          return !0;
        }
        if (K(S.status)) {
          if (X("warn", "cli_worker_state_4xx_dropped", {
            status: S.status
          }), this.droppedWorkerStatePatchCount++, h.worker_status !== void 0) p("ccr_worker_state_publish", "state_4xx_dropped");
          return !0;
        }
        return !1;
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500
    }), this.eventUploader = new I$t({
      maxBatchSize: 100,
      maxBatchBytes: this.workerSocket?.maxBatchBytes ?? 10 * Re,
      maxQueueSize: 1e5,
      send: async (h, S) => {
        let E = tNr(h);
        if (E > 0) t(`CCRClient: dropped ${E} repeated-uuid durable event(s) from one /worker/events POST`);
        let timeout = Ve(S, {
          maxMs: this.maxEventPostTimeoutMs,
          minMs: h.some(Kt) ? ze : S.followsUrgent ? Math.min(ze, this.maxEventPostTimeoutMs) : void 0
        });
        this.reportDurableUpload(h, "sending");
        let U = this.actsOnSubscribersReports(),
          parseBody = U || this.onSubscribersReported !== void 0,
          hasSubscribersReports = this.hasSubscribersReports,
          O = [];
        for (let I of this.trackedFrameUploads("ackedAtMs")) if (h.some(item => item.payload.uuid === I.uuid)) O.push(I.timing);
        for (let I of O) if (I.postedAtMs === void 0) I.postedAtMs = performance.now(), I.postedWallMs = Date.now();
        let A = await this.request("post", "/worker/events", this.uploadBody(h, S), "client events", {
          timeout: timeout,
          parseBody: parseBody
        });
        if (A.ok) {
          for (let H of O) if (H.ackedAtMs === void 0) H.ackedAtMs = performance.now();
          let I = be(h);
          if (I) g("ccr_task_status_publish", I);
          if (this.noteBeatingEventsPostOk(h), this.reportDurableUpload(h, "accepted"), this.noteToolCallRowsSettled("client_events", "stored", h), U && hasSubscribersReports === this.hasSubscribersReports) this.setHasSubscribers(A.data?.has_subscribers, "no_report");
          this.tellSubscribersReported(A.data?.has_subscribers);
          return;
        }
        if (this.reportDurableUpload(h, Ye(A.status)), K(A.status)) {
          let I = h.filter(item => !item.ephemeral),
            count = h.length - I.length,
            status = A.status;
          if (count > 0) {
            if (t(`CCRClient: client event POST rejected (${A.status}) \u2014 dropping ${count} ephemeral event(s), retrying ${I.length} durable event(s)`, {
              level: "warn"
            }), p("ccr_partial_messages", "ephemeral_dropped_on_4xx", {
              status: A.status,
              count: count
            }), h.splice(0, h.length, ...I), X("warn", "cli_worker_events_4xx_ephemeral_dropped", {
              status: A.status,
              count: count
            }), I.length === 0) return;
            this.reportDurableUpload(I, "sending");
            let L = await this.request("post", "/worker/events", this.uploadBody(I, S), "client events (durable retry)", {
              timeout: timeout
            });
            if (L.ok) {
              let x = be(I);
              if (x) g("ccr_task_status_publish", x);
              this.noteBeatingEventsPostOk(I), this.reportDurableUpload(I, "accepted"), this.noteToolCallRowsSettled("client_events", "stored", I);
              return;
            }
            if (this.reportDurableUpload(I, Ye(L.status)), !K(L.status)) throw L.fetchFailed ? this.retrySmaller("client_events", I, S, timeout, {
              bytes: I.reduce((acc, item) => acc + Buffer.byteLength(_(item)), 0)
            }) : new _Je("client event POST failed", L.retryAfterMs);
            status = L.status;
          }
          if (I.length > 0) {
            this.droppedDurableEventBatches++, this.noteToolCallRowsSettled("client_events", "dropped", I);
            try {
              this.onDurableEventsDropped?.(I, status);
            } catch (error) {
              t(`CCRClient: onDurableEventsDropped threw; batch still dropped: ${d(error)}`, {
                level: "warn"
              });
            }
          }
          X("warn", "cli_worker_events_4xx_dropped", {
            status: status,
            count: I.length
          });
          let q = be(I);
          if (q) m("ccr_task_status_publish", "status_events_4xx_dropped", q);
          return;
        }
        if (A.fetchFailed) throw this.retrySmaller("client_events", h, S, timeout);
        throw new _Je("client event POST failed", A.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "client_events"),
      onDrained: this.logUploadDrain.bind(this, "client_events")
    });
    let s = r?.internalEventUploader;
    this.internalEventUploader = new I$t({
      maxBatchSize: 100,
      maxBatchBytes: s?.maxBatchBytes ?? this.workerSocket?.maxBatchBytes ?? 10 * Re,
      maxQueueSize: 200,
      maxConsecutiveFailures: s?.maxConsecutiveFailures,
      onBatchDropped: (count_2, consecutive_failures) => {
        this.droppedInternalEventBatches++, X("warn", "cli_worker_internal_events_give_up_dropped", {
          count: count_2,
          consecutive_failures: consecutive_failures
        }), i("tengu_ccr_internal_events_dropped", {
          reason: b("give_up"),
          count: count_2,
          consecutive_failures: consecutive_failures
        });
      },
      send: async (h, S) => {
        let count_3 = this.dropOrphanedHandedOffLines(h);
        if (count_3 > 0) {
          if (X("warn", "cli_worker_internal_events_handoff_orphans_dropped", {
            count: count_3
          }), i("tengu_ccr_internal_events_dropped", {
            reason: b("handoff_orphan"),
            count: count_3
          }), h.length === 0) return;
        }
        let y = performance.now(),
          timeout_2 = Ve(S, {
            maxMs: this.maxEventPostTimeoutMs,
            minMs: s?.requestTimeoutMs
          }),
          w = await this.request("post", "/worker/internal-events", this.uploadBody(h, S), "internal events", {
            timeout: timeout_2
          });
        if (this.markInternalEventPostWatch(R => R.noteAttempt(h, y, w.ok)), w.ok) {
          this.noteToolCallRowsSettled("internal_events", "stored", h), Promise.resolve().then(() => this.onInternalBatchAcked?.(h)).catch(() => {});
          return;
        }
        if (K(w.status) && count_3 === 0 && S.mayResendInTwo()) throw i("tengu_ccr_internal_events_refused_will_split", {
          count: h.length,
          status: w.status
        }), new C6n();
        if (K(w.status)) {
          this.droppedInternalEventBatches++, this.noteRefusedInternalEvents(h), this.noteToolCallRowsSettled("internal_events", "dropped", h), X("warn", "cli_worker_internal_events_4xx_dropped", {
            status: w.status,
            count: h.length
          }), i("tengu_ccr_internal_events_dropped", {
            reason: b("4xx"),
            count: h.length,
            status: w.status
          });
          return;
        }
        if (w.fetchFailed) throw this.retrySmaller("internal_events", h, S, timeout_2);
        throw new _Je("internal event POST failed", w.nonOriginRefusal ? maxDelayMs : w.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: maxDelayMs,
      jitterMs: 500,
      holdMaxItems: 50,
      gatherTick: !0,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "internal_events"),
      onDrained: this.logUploadDrain.bind(this, "internal_events")
    }), this.deliveryUploader = new I$t({
      maxBatchSize: 64,
      maxQueueSize: 64,
      send: async h => {
        let S = await this.request("post", "/worker/events/delivery", {
          worker_epoch: this.workerEpoch,
          updates: h.map(item => ({
            event_id: item.eventId,
            status: item.status
          }))
        }, "delivery batch");
        if (S.ok) return;
        if (K(S.status)) {
          X("warn", "cli_worker_delivery_4xx_dropped", {
            status: S.status,
            count: h.length
          }), this.droppedDeliveryAckBatches++;
          return;
        }
        throw new _Je("delivery POST failed", S.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: 30000,
      jitterMs: 500
    }), this.setStreamEventFlushIntervalMs(r?.streamEventFlushIntervalMs), this.setStreamEventFirstFlushMs(r?.streamEventFirstFlushMs), this.setNoSubscriberStreamEventFlushIntervalMs(r?.noSubscriberStreamEventFlushIntervalMs), this.setNoSubscriberUploadHoldMs(r?.noSubscriberUploadHoldMs), this.setDropUnwatchedStreamEvents(r?.dropUnwatchedStreamEvents), e.setOnEvent(h => {
      if (this.processExiting() && Ae(h)) return;
      this.reportDelivery(h.event_id, "received");
    }), e.setOnHeartbeatProbe(() => {
      this.setHasSubscribers(void 0, "reset"), this.heartbeatNow("probe");
    }), e.setOnReconnected(() => {
      this.resyncAfterReconnect(), r?.onStreamReconnected?.();
    }), this.workerSocket?.setHeartbeatSender(h => {
      if (this.heartbeatTimer === null) this.startHeartbeat();
      this.sendHeartbeat(h === "first" ? "socket" : "socket_ended");
    }), this.unsubscribeIdleTracker = this.beatOnReactivation ? this.idleTracker?.onActivity(() => this.sendReactivationBeat()) : void 0;
  }
  maxAdvisedIntervalFor(e) {
    return e ? Math.floor(Hu / (1 + this.heartbeatJitterFraction)) : Ht;
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
    if (Object.keys(this.getAuthHeaders()).length === 0) throw new zFe("no_auth_headers");
    if (e === void 0) e = jso();
    if (isNaN(e)) throw new zFe("missing_epoch");
    this.workerEpoch = e;
    let r = this.getWorkerState(),
      s = await Promise.race([r.then(B => B.metadata, () => ({
        external: null,
        internal: null,
        readFailed: !0
      })), Y(this.initStateGetOrderingBoundMs).then(() => "pending")]),
      h = this.reportParkAtInit ? cn(s) : void 0,
      S = {
        worker_status: "idle",
        worker_epoch: this.workerEpoch,
        external_metadata: {
          ...this.initExternalMetadata,
          task_summary: null
        }
      },
      E = h === void 0 ? {
        worker_status: this.initialWorkerStatus,
        worker_epoch: this.workerEpoch,
        external_metadata: {
          ...this.initExternalMetadata,
          pending_action: null,
          pending_actions: null,
          task_summary: null
        }
      } : h.status === "requires_action" ? {
        ...S,
        worker_status: "requires_action",
        requires_action_details: h.details
      } : S,
      y = {
        ok: !1
      },
      U = new Set(),
      w = 10,
      R = 0;
    for (let B = 1; B <= w; B++) {
      if (this.closed) break;
      if (R = B, y = await this.request("put", "/worker", E, "PUT worker (init)"), y.ok || this.closed) break;
      if (y.reason) U.add(y.reason);
      if (this.onDiagnostic?.(`PUT /worker failed (${y.reason ?? "unknown"}) attempt=${B}/${w}, ${Math.round((Date.now() - n) / 1000)}s elapsed`, "warn", "worker_registration_attempt_failed"), K(y.status)) {
        if (h?.status === "requires_action") {
          h = {
            status: "idle",
            reason: "park_rejected"
          }, E = S, B--;
          continue;
        }
        break;
      }
      if (B < w) {
        let q = Math.min(500 * 2 ** (B - 1), 30000) + Math.random() * 500;
        await Y(q);
      }
    }
    if (!y.ok) {
      if (!this.closed) X("error", "cli_worker_init_put_retries_exhausted"), this.onDiagnostic?.(`PUT /worker retries exhausted: ${R} attempts over ${Math.round((Date.now() - n) / 1000)}s, errors=[${[...U].join(",") || "unknown"}]`, "warn", "worker_registration_gave_up");
      if (this.workerSocket) this.stopHeartbeat();
      throw new zFe("worker_register_failed", y.status);
    }
    this.currentState = h?.status ?? this.initialWorkerStatus;
    let {
      worker_epoch: worker_epoch,
      ...A
    } = E;
    if (this.workerState.remember(A), this.applyUploadHold("idle"), this.parkReportedAtInitRequestId = h?.status === "requires_action" ? h.requestId : void 0, !this.workerSocket || this.heartbeatTimer === null) this.startHeartbeat();
    if (!this.closed) {
      if (tUs(() => {
        this.writeEvent({
          type: "keep_alive"
        });
      }), this.gatesToolCalls) this.stopToolCallGate = GMs(B => this.gateToolCall(B));
    }
    if (t(`CCRClient: initialized, epoch=${this.workerEpoch}`), X("info", "cli_worker_lifecycle_initialized", {
      epoch: this.workerEpoch,
      duration_ms: Date.now() - n,
      reported_status: this.currentState
    }), kr("worker_init_ms", Date.now() - n, n - performance.timeOrigin), h) i("tengu_ccr_init_park_report", {
      reported: c(h.status),
      reason: c(h.reason)
    });
    let {
      metadata: metadata,
      durationMs: H
    } = await r;
    if (!this.closed) X("info", "cli_worker_state_restored", {
      duration_ms: H,
      had_state: metadata.external !== null || metadata.internal !== null,
      read_failed: metadata.readFailed === !0
    });
    return h ? {
      ...metadata,
      initParkReport: hn(h.status, metadata)
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
    let h = await KF.getWithRetry(this.readSource, `${this.sessionBaseUrl}/worker${ot(n)}`, s, e, void 0, void 0, {
      signal: this.closeAbort.signal
    });
    return {
      metadata: {
        external: h?.worker?.external_metadata ?? null,
        internal: h?.worker?.internal_metadata ?? null,
        ...(h === null && {
          readFailed: !0
        })
      },
      projectsAssertion: at(h),
      durationMs: Date.now() - r
    };
  }
  get currentWorkerEpoch() {
    return this.workerEpoch;
  }
  readOwnClientEvent(e) {
    return KF.readOwnClientEventFrom(this.readSource, e);
  }
  static async readOwnClientEventFrom(e, n) {
    let url = `${e.sessionBaseUrl}/worker/events/${encodeURIComponent(n.toLowerCase())}`,
      s = {
        kind: "unavailable",
        why: "network"
      };
    for (let h = 1; h <= maxAttempts; h++) {
      let S;
      try {
        S = e.getAuthHeaders();
      } catch {
        return {
          kind: "unavailable",
          why: "no_auth_headers"
        };
      }
      if (Object.keys(S).length === 0) return {
        kind: "unavailable",
        why: "no_auth_headers"
      };
      let E;
      try {
        E = await qzn(url, {
          headers: {
            ...S,
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": kh(),
            "User-Agent": hs()
          },
          signal: AbortSignal.timeout(1e4),
          ...ra({
            url: url
          })
        }, e.ownConnectionPool);
      } catch {
        s = {
          kind: "unavailable",
          why: "network"
        };
      }
      if (E !== void 0) {
        let y = await E.json().catch(() => {
          return;
        });
        if (E.ok) return Un(y, n);
        if (E.status === 404 && Pn(y)) return {
          kind: "absent"
        };
        if (s = {
          kind: "unavailable",
          why: On(E.status)
        }, E.status < 500 || E.status === 501) return s;
      }
      if (h < maxAttempts) await Y(Math.min(500 * 2 ** (h - 1), 4000) + Math.random() * 500);
    }
    return s;
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
    let r = Ufr(e, n);
    if (Object.keys(n()).length === 0) return {
      read: !1
    };
    let s = await KF.getWithRetry(r, `${r.sessionBaseUrl}/worker${ot(!0)}`, n(), "projects_binding");
    return s === null ? {
      read: !1
    } : {
      read: !0,
      assertion: at(s)
    };
  }
  request(e, n, r, s, h = {}) {
    return this.sendRequest(e, n, r, s, h);
  }
  async sendRequest(method, path, r, s, {
    timeout: h = ke,
    parseBody: parseBody_2 = !1,
    countTowardEscalation = !0,
    signal: signal
  }) {
    let U = this.getAuthHeaders();
    if (Object.keys(U).length === 0) return {
      ok: !1,
      reason: "no_auth_headers"
    };
    let url_2 = `${this.sessionBaseUrl}${path}`,
      R = signal ? As(signal, {
        timeoutMs: h,
        refTimer: !0
      }) : void 0,
      O = !1;
    try {
      let A = {
          method: method.toUpperCase(),
          headers: {
            ...U,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": kh(),
            "User-Agent": hs()
          },
          body: _(r),
          signal: R?.signal ?? AbortSignal.timeout(h),
          ...ra({
            url: url_2
          })
        },
        I = this.workerSocket?.carry(path, A.body, A.signal, h),
        H = I && (await I),
        B = H ?? (this.gzipRequestBodyFetch ? await this.gzipRequestBodyFetch(url_2, A, W => qzn(url_2, W, this.ownConnectionPool)) : await qzn(url_2, A, this.ownConnectionPool));
      if (O = !0, B.ok) {
        this.consecutiveAuthFailures = 0, this.consecutiveNotFound = 0, this.reportNonOriginRun("onCleared", Se[path]), this.nonOriginRuns.delete(Se[path]);
        for (let W of this.nonOriginRuns.values()) W.othersPassed = !0;
        if (parseBody_2) try {
          return {
            ok: !0,
            data: await B.json()
          };
        } catch {
          return {
            ok: !0
          };
        }
        return await Nz(B), {
          ok: !0
        };
      }
      let q;
      if (B.status === 409 && !this.closed) q = await Ee(B);else await Nz(B);
      if (this.closed) return {
        ok: !1,
        status: B.status,
        reason: `http_${B.status}`
      };
      if (B.status === 409) this.handleEpochMismatch(q);
      if (B.status === 404 && countTowardEscalation) {
        if (this.consecutiveNotFound++, this.consecutiveNotFound >= Zt) t(`CCRClient: ${this.consecutiveNotFound} consecutive 404s \u2014 session gone, exiting`, {
          level: "error"
        }), X("error", "cli_worker_session_not_found", void 0, this.lastLineWhen), this.onDiagnostic?.(`${this.consecutiveNotFound} consecutive 404s on ${path} \u2014 session gone, exiting`, "warn", "session_not_found"), this.escalateEpochMismatch("session_not_found");
      }
      let source = B.status !== 403 ? void 0 : H ? "origin" : LFt(W => B.headers.get(W)),
        nonOrigin403Transient = this.nonOrigin403Transient,
        nonOriginRefusal = nonOrigin403Transient !== !1 && cje(source);
      if (nonOriginRefusal && typeof nonOrigin403Transient === "object") {
        let W = Se[path],
          sinceMs = performance.now(),
          D = this.nonOriginRuns.get(W) ?? {
            sinceMs: sinceMs,
            refusals: 0,
            windowsSpent: 0,
            othersPassed: !1
          };
        if (this.nonOriginRuns.set(W, D), D.refusals++, nonOriginRefusal = sinceMs - D.sinceMs < nonOrigin403Transient.windowMs, nonOriginRefusal) try {
          nonOrigin403Transient.onRefused(W);
        } catch (error) {
          t(`CCRClient: onRefused threw: ${d(error)}`, {
            level: "error"
          });
        } else if (sinceMs - D.sinceMs >= (D.windowsSpent + 1) * nonOrigin403Transient.windowMs) D.windowsSpent++, this.reportNonOriginRun("onWindowSpent", W);
      }
      if (B.status === 401 || B.status === 403) {
        let W = bd(),
          P = W ? jO(W) : null;
        if (P !== null && P * 1000 < Date.now()) t(`CCRClient: session_token expired (exp=${new Date(P * 1000).toISOString()}) \u2014 no refresh was delivered, exiting`, {
          level: "error"
        }), X("error", "cli_worker_token_expired_no_refresh", void 0, this.lastLineWhen), this.onDiagnostic?.(`session_token expired (exp=${new Date(P * 1000).toISOString()}) \u2014 no refresh delivered, exiting`, "warn", "token_expired"), this.escalateEpochMismatch("token_expired");
        if (countTowardEscalation && !nonOriginRefusal) {
          if (this.consecutiveAuthFailures++, this.consecutiveAuthFailures >= Qt) t(`CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`, {
            level: "error"
          }), X("error", "cli_worker_auth_failures_exhausted", void 0, this.lastLineWhen), this.onDiagnostic?.(`${this.consecutiveAuthFailures} consecutive auth failures (HTTP ${B.status}) with valid-looking token \u2014 exiting`, "warn", "auth_exhausted"), this.escalateEpochMismatch("auth_exhausted");
        }
      }
      if (t(`CCRClient: ${s} returned ${B.status}`, {
        level: "warn"
      }), X("warn", "cli_worker_request_failed", {
        method: method,
        path: path,
        status: B.status,
        ...(source !== void 0 && {
          source: source
        })
      }), B.status === 429) {
        let W = B.headers.get("retry-after"),
          P = W ? parseInt(W, 10) : NaN;
        if (!isNaN(P) && P >= 0) return {
          ok: !1,
          retryAfterMs: P * 1000,
          status: B.status,
          reason: `http_${B.status}`
        };
      }
      return {
        ok: !1,
        status: B.status,
        reason: `http_${B.status}`,
        ...(nonOriginRefusal && {
          nonOriginRefusal: nonOriginRefusal
        })
      };
    } catch (error) {
      t(`CCRClient: ${s} failed: ${d(error)}`, {
        level: "warn"
      }), X("warn", "cli_worker_request_error", {
        method: method,
        path: path,
        error_code: re(error)
      });
      let reason = `fetch_failed:${re(error)}`;
      return O || this.workerSocket?.saysNothingOfSize(error) ? {
        ok: !1,
        reason: reason
      } : {
        ok: !1,
        fetchFailed: !0,
        reason: reason
      };
    } finally {
      R?.cleanup();
    }
  }
  reportNonOriginRun(e, lane) {
    let r = this.nonOriginRuns.get(lane);
    if (r === void 0 || typeof this.nonOrigin403Transient !== "object") return;
    let runMs = Math.round(performance.now() - r.sinceMs),
      {
        unsentClientEvents: unsentClientEvents,
        unsentInternalEvents: unsentInternalEvents
      } = this.uploadBacklog();
    t(`CCRClient: ${lane} ${e === "onCleared" ? "accepted again" : "still refused"} after ${runMs}ms of non-origin 403s (${r.refusals} refusals)`, {
      level: "warn"
    });
    try {
      this.nonOrigin403Transient[e]({
        lane: lane,
        refusals: r.refusals,
        runMs: runMs,
        windowsSpent: r.windowsSpent,
        othersPassed: r.othersPassed,
        backlog: unsentClientEvents + unsentInternalEvents
      });
    } catch (error) {
      t(`CCRClient: ${e} threw: ${d(error)}`, {
        level: "error"
      });
    }
  }
  reportState(worker_status, n) {
    if (worker_status === this.currentState && !n) return;
    let parkReportedAtInitRequestId = this.parkReportedAtInitRequestId;
    if (this.parkReportedAtInitRequestId = void 0, parkReportedAtInitRequestId !== void 0 && worker_status === "requires_action" && this.currentState === "requires_action" && Bve(n) === parkReportedAtInitRequestId) return;
    this.currentState = worker_status, this.workerState.enqueue({
      worker_status: worker_status,
      requires_action_details: n ? pt(n) : null,
      internal_metadata: {
        reply_degraded: Ecs()
      }
    }), this.applyUploadHold(worker_status === "running" ? "idle" : worker_status);
  }
  reportMetadata(e) {
    this.workerState.enqueue({
      external_metadata: xn(e)
    });
  }
  reportInternalMetadata(internal_metadata) {
    this.workerState.enqueue({
      internal_metadata: internal_metadata
    });
  }
  handleEpochMismatch(e) {
    let n = e ?? "epoch_conflict",
      reason_2 = e ?? "unattributed";
    t(`CCRClient: Epoch mismatch (409, reason=${reason_2}), shutting down`, {
      level: "error"
    }), X("error", n === "epoch_stale" ? "cli_worker_epoch_stale" : n === "session_not_active" ? "cli_worker_session_not_active" : "cli_worker_epoch_mismatch", {
      reason: reason_2
    }, this.lastLineWhen);
    let s = n === "epoch_stale" ? "stale registration (no live successor)" : n === "session_not_active" ? "session archived or no longer active" : n === "superseded_by_worker" ? "superseded by a newer worker" : "unattributed conflict, treated as superseded";
    this.onDiagnostic?.(`worker epoch mismatch (409) reason=${reason_2} epoch=${this.workerEpoch} \u2014 ${s}, exiting`, "warn", n), this.escalateEpochMismatch(n);
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
    if (!this.skipRedundantHeartbeats || this.workerSocket?.isTransport() || this.closed || this.lastBeatingEventsPostOkAtMs < e || this.lastBeatingEventsPostOkAtMs > this.lastCadenceTickAtMs || this.lastCadenceTickAtMs - this.lastBeatingEventsPostOkAtMs > n * Ge || this.heartbeatIntervalMs > this.seedHeartbeatIntervalMs || this.isIdleAdvised() || this.consecutiveHeartbeatFailures > 0 || this.skippedPreviousCadenceBeat) return !1;
    let r = n * 2;
    return this.clampToTokenLifetime(r) >= r;
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
      let n = await this.request("post", "/worker/heartbeat", {
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
      if (n.ok) g("ccr_worker_lease_release");else if (n.status !== 409) p("ccr_worker_lease_release", n.status !== void 0 ? `http_${n.status}` : "send_failed");
    } catch (error) {
      l(error), p("ccr_worker_lease_release", "send_threw");
    }
  }
  sendGoodbye() {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    if (this.currentState === "running") {
      X("info", "cli_worker_goodbye_skipped_mid_turn"), this.leftMidTurn = !0;
      return;
    }
    this.goodbyeFlushed = this.request("put", "/worker", {
      worker_epoch: this.workerEpoch,
      connection_status: "disconnected"
    }, "PUT worker (goodbye)", {
      timeout: timeout_3,
      countTowardEscalation: !1
    }).then(e => {
      if (e.ok) g("ccr_worker_goodbye");else if (e.status !== 409) p("ccr_worker_goodbye", e.status !== void 0 ? `http_${e.status}` : "send_failed");
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
    let n = bd(),
      r = n ? jO(n) : null;
    if (r === null) return e;
    let s = r * 1000 - Date.now() - Nt;
    if (s >= e) return e;
    return Math.max(qe, s);
  }
  reclampCurrentIntervalToTokenLifetime() {
    let to_ms = this.clampToTokenLifetime(this.heartbeatIntervalMs);
    if (to_ms < this.heartbeatIntervalMs) X("info", "cli_heartbeat_interval_updated", {
      from_ms: this.heartbeatIntervalMs,
      to_ms: to_ms
    }), this.applyShorterIntervalNow(to_ms);
  }
  renewStream() {
    if (!this.workerSocket?.isTransport()) {
      this.readTransport.renewConnection();
      return;
    }
    this.workerSocket.renewWhenQuiet(() => {
      try {
        this.readTransport.renewConnection();
      } catch (error) {
        l(error);
      }
    });
  }
  resyncAfterReconnect() {
    if (this.workerSocket?.isTransport()) return;
    if (this.isIdleAdvised()) {
      this.heartbeatNow("resync");
      return;
    }
    if (this.staleReconnectBeatWanted()) this.heartbeatNow("resync_stale");
  }
  staleReconnectBeatWanted() {
    if (!this.beatOnStaleReconnect || this.heartbeatIntervalMs <= this.seedHeartbeatIntervalMs) return !1;
    let e = Date.now();
    if (e - this.lastHeartbeatSuccessAtMs <= this.heartbeatIntervalMs * Ge) return !1;
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
    let n = e === "socket" || e === "socket_ended" || e === void 0 && this.workerSocket?.isTransport() === !0;
    if (!n) {
      if (this.heartbeatInFlight) return;
      this.heartbeatInFlight = !0;
    }
    let r = Date.now();
    if (this.lastHeartbeatSentAtMs = r, this.skippedPreviousCadenceBeat = !1, e === "resync_stale") X("info", "cli_heartbeat_reconnect_stale_beat", {
      gap_ms: this.lastHeartbeatSentAtMs - this.lastHeartbeatSuccessAtMs,
      interval_ms: this.heartbeatIntervalMs
    });
    try {
      if (e === "reactivate") X("info", "cli_heartbeat_reactivation_beat", {
        interval_ms: this.heartbeatIntervalMs
      });
      let s = this.idleTracker?.sampleIdleSeconds(),
        idle_seconds = this.advertiseHeartbeatProbeSupport ? s : void 0,
        S = await this.request("post", "/worker/heartbeat", {
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
          timeout: Math.max(Dt, Math.min(dt, this.heartbeatIntervalMs * (1 - this.heartbeatJitterFraction) - ut)),
          parseBody: !0,
          countTowardEscalation: e === void 0,
          ...(this.workerSocket && {
            signal: this.closeAbort.signal
          })
        });
      if (!S.ok) {
        if (e === "probe") m("ccr_heartbeat_probe", "beat_failed");else if (e === "resync_stale") m("ccr_reconnect_beat", "beat_failed");else if (e === "reactivate") m("ccr_reactivation_beat", "beat_failed");
        if (S.status === 429) {
          if (this.lastHeartbeat429AtMs = Date.now(), e === "reactivate") this.restoreReactivationArm();
        }
        if (this.isIdleAdvised() && S.status !== 429) X("warn", "cli_heartbeat_idle_reverted_on_failure", {
          status: S.status
        }), this.idleGrantLatched = !1, this.reactivationBeatArmed = !1, this.applyShorterIntervalNow(this.seedHeartbeatIntervalMs);
        if (this.reclampCurrentIntervalToTokenLifetime(), S.status !== void 0 && $t.has(S.status) && !S.nonOriginRefusal) {
          this.resetHeartbeatStreak();
          return;
        }
        if (!this.readTransport.isReadStreamRecentlyAlive()) {
          this.resetHeartbeatStreak();
          return;
        }
        if (this.consecutiveHeartbeatFailures === 0) this.heartbeatStreakStartedAtMs = Date.now();
        if (this.consecutiveHeartbeatFailures++, !this.heartbeatLostFiredForStreak && this.consecutiveHeartbeatFailures >= qt && Date.now() - this.heartbeatStreakStartedAtMs >= this.readTransport.getReadStreamRecentLivenessWindowMs()) {
          this.heartbeatLostFiredForStreak = !0;
          try {
            this.onHeartbeatLost?.();
          } catch (error) {
            l(error);
          }
        }
        return;
      }
      if (this.resetHeartbeatStreak(), this.lastHeartbeatSuccessAtMs = r, this.onRequestAuthOk?.(), e === "probe") g("ccr_heartbeat_probe");else if (e === "resync_stale") g("ccr_reconnect_beat");else if (e === "reactivate") g("ccr_reactivation_beat");
      if (t("CCRClient: Heartbeat sent"), this.workerSocket?.tryAgainIfDue(this.readTransport), e === "socket" && this.workerSocket?.isTransport()) {
        let U = bd(),
          w = U ? jO(U) : null;
        if (w !== null && w * 1000 - Date.now() < Wt) this.heartbeatNow("resync");
      }
      if (N(S.data)) this.takeUpFlushPolicy(S.data.event_flush_policy);
      if (S.data?.refreshed_auth && this.adoptRefreshedAuth) try {
        let U = !1,
          w = this.adoptRefreshedAuth(S.data.refreshed_auth.expires_in_seconds);
        w.then(A => {
          if (U && A.adopted) this.lastAuthRefreshBadReason = null, g("ccr_worker_auth_refresh"), X("info", "cli_heartbeat_refreshed_auth_late_adopted");
        }, () => {});
        let R = await je(w, Math.min(ct, this.heartbeatIntervalMs)),
          O;
        if (R === void 0) U = !0, O = {
          adopted: !1,
          reason: "adopt_timeout"
        };else O = R;
        if (X("info", "cli_heartbeat_refreshed_auth_signal", {
          adopted: O.adopted,
          reason: O.reason,
          expires_in_seconds: S.data.refreshed_auth.expires_in_seconds
        }), O.adopted) g("ccr_worker_auth_refresh"), this.lastAuthRefreshBadReason = null;else if (O.reason && O.reason !== "unchanged" && O.reason !== this.lastAuthRefreshBadReason) this.lastAuthRefreshBadReason = O.reason, m("ccr_worker_auth_refresh", O.reason);
      } catch {
        if (this.lastAuthRefreshBadReason !== "adopt_threw") this.lastAuthRefreshBadReason = "adopt_threw", m("ccr_worker_auth_refresh", "adopt_threw");
        X("error", "cli_heartbeat_refreshed_auth_adopt_threw");
      }
      if (S.data?.refreshed_auth && this.workerSocket?.isTransport() && e !== "socket") this.renewStream();
      if (r !== this.lastHeartbeatSentAtMs) return;
      let E = S.data?.heartbeat_interval_seconds;
      if (typeof E !== "number" || !Number.isFinite(E) || E <= 0) {
        if (this.idleGrantLatched) this.armReactivationIfEarned(idle_seconds, this.heartbeatIntervalMs / 1000);
        this.reclampCurrentIntervalToTokenLifetime();
        return;
      }
      if (this.advertiseHeartbeatProbeSupport) {
        let U = E * 1000 > this.seedHeartbeatIntervalMs;
        if (U) this.armReactivationIfEarned(idle_seconds, E);else this.reactivationBeatArmed = !1;
        this.idleGrantLatched = U;
      }
      let to_ms_2 = this.clampToTokenLifetime(Math.min(Math.max(E * 1000, qe), this.maxAdvisedIntervalMs));
      if (to_ms_2 === this.heartbeatIntervalMs) return;
      if (X("info", "cli_heartbeat_interval_updated", {
        from_ms: this.heartbeatIntervalMs,
        to_ms: to_ms_2
      }), to_ms_2 < this.heartbeatIntervalMs) this.applyShorterIntervalNow(to_ms_2);else this.heartbeatIntervalMs = to_ms_2;
    } finally {
      if (!n) {
        if (this.heartbeatInFlight = !1, this.pendingForcedBeat && !this.closed) this.pendingForcedBeat = !1, this.refireForcedBeat();
      }
    }
  }
  reportDurableUpload(e, n) {
    if (this.onDurableEventsUpload === void 0) return;
    let r = e.filter(item => !item.ephemeral);
    if (r.length === 0) return;
    try {
      this.onDurableEventsUpload(r, n);
    } catch (error) {
      t(`CCRClient: onDurableEventsUpload(${n}) threw; the batch's fate is unchanged: ${d(error)}`, {
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
  async writeEvents(e, n) {
    let r = [],
      s = [],
      since,
      release,
      E = !1,
      y = [],
      U = [];
    for (let w of e) {
      let R = w.type === "stream_event" ? Le(w) : w,
        O = this.releaseFor(R);
      if (release ??= O, (this.streamEventFirstFlushMs > 0 && !O || this.noSubscriberStreamEventFlushIntervalMs > 0 || this.dropUnwatchedStreamEvents || this.unwatched() && this.currentState === "running") && this.streamEventFlushIntervalMs > 0 && it(R)) {
        this.bufferEphemeral(R);
        continue;
      }
      if (R.type === "stream_event") {
        if (this.streamedEphemeralSinceLastAssistant = !0, R.event.type === "message_stop" && this.holdRule === "served_policy" && this.flushPolicy?.flushOnSamplingEnd) {
          this.bufferEphemeral(R), since ??= this.streamEventBufferedAt, E = !0;
          let I = this.takeStreamEventBuffer();
          release ??= I.release, r.push(...I.events);
          continue;
        }
        if (this.streamEventFlushIntervalMs <= 0) {
          let I = Buffer.byteLength(_(R));
          if (I <= Z) r.push({
            payload: R,
            ephemeral: !0
          });else me(R, I);
          continue;
        }
        if (this.bufferEphemeral(R), R.event.type === "content_block_start" && this.parkedRows.length > 0) {
          since ??= this.streamEventBufferedAt;
          let I = this.takeStreamEventBuffer();
          release ??= I.release, r.push(...I.events);
        }
        continue;
      }
      let A = R.type === "control_request" ? this.toClientEvent(R) : void 0;
      if (R.type === "control_request" && A !== void 0 && Yt.has(ht(A)) && this.servedCallRequestsJumpQueue()) {
        s.push(A), this.urgentRequestIds.add(R.request_id);
        let I = this.urgentRequestIds.values().next().value;
        if (this.urgentRequestIds.size > Xt && I !== void 0) this.urgentRequestIds.delete(I);
        continue;
      }
      if (R.type === "control_cancel_request" && this.urgentRequestIds.delete(R.request_id)) {
        s.push(this.toClientEvent(R));
        continue;
      }
      if (R.type === "assistant" && this.streamedEphemeralSinceLastAssistant) g("ccr_partial_messages", {
        stream_events_dropped_unwatched: this.streamEventsDroppedUnwatched
      }), this.streamedEphemeralSinceLastAssistant = !1, this.streamEventsDroppedUnwatched = 0;
      if (O === void 0 && this.mayParkTextRow(R)) {
        this.parkedRows.push({
          message: R,
          event: this.toClientEvent(R)
        });
        continue;
      }
      if (this.streamEventTimer) {
        since ??= this.streamEventBufferedAt;
        let I = this.takeStreamEventBuffer();
        release ??= I.release, r.push(...I.events);
      }
      if (this.gatesToolCalls) {
        let I = we(R);
        if (I.some(item => this.awaitedToolCalls.has(item))) release ??= "tool_call";
        y.push(...I);
      }
      if (this.twinsHeldRows(R.type)) U.push(r.length);
      r.push(A ?? this.toClientEvent(R));
    }
    if (!release && !E) for (let w = U.length - 1; w >= 0; w--) {
      let R = U[w] ?? r.length,
        O = r[R];
      if (O && !O.historical && this.eventUploader.holdsOnArrival(O) && Buffer.byteLength(_(O.payload)) <= Xe) r.splice(R, 0, {
        payload: O.payload,
        ephemeral: !0
      });
    }
    if (s.length > 0) this.enqueueClientEvents(s, {
      urgent: !0
    });
    if (r.length > 0) {
      if (release) this.internalEventUploader.release(release);else if (E) release = "sampling_end";
      await this.enqueueClientEvents(r, {
        ...(release ? {
          release: release
        } : {
          since: since
        }),
        ...(n?.together && {
          together: !0
        })
      }), this.noteToolCallRows("client_events", y, "queued");
    } else if (s.length > 0 && release) {
      if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
      this.internalEventUploader.release(release), this.releaseClientEvents(release);
    } else if (E) this.releaseClientEvents("sampling_end");
  }
  releaseFor(e) {
    if (e.type === "system" && "subtype" in e && e.subtype === "status" && "status" in e && e.status === "requesting") {
      if (!this.seesModelCallBoundaries) this.seesModelCallBoundaries = !0, this.applyUploadHold("reset");
      if (this.holdRule === "served_policy") return "round_trip";
    }
    if (e.type === "user" && this.toolResultReleases(e.message)) return "tool_result";
    if (this.holdRule === void 0 || this.mayWaitUnderHold(e)) return;
    return "event";
  }
  toolResultReleases(e) {
    let n = this.holdRule === "served_policy" ? this.flushPolicy?.flushAfterTools : void 0;
    if (n !== "write" && n !== "all") return !1;
    return mt(e, "tool_result", "tool_use_id").some(item => n === "all" || this.gatedWriteToolCalls.has(item));
  }
  gateToolCall(e) {
    let flushPolicy = this.flushPolicy;
    if (!flushPolicy || flushPolicy.flushAfterTools !== "write" && flushPolicy.flushBeforeToolsWaitMs <= 0 || e.agentId !== void 0 || this.closed || this.eventHoldEnabled === void 0 || this.holdSwitchedOff || !e.mayWrite()) return;
    if (flushPolicy.flushAfterTools === "write") this.gatedWriteToolCalls.add(e.toolUseId), st(this.gatedWriteToolCalls);
    let r = this.transcriptLaneInUse ? ["client_events", "internal_events"] : ["client_events"];
    if (flushPolicy.flushBeforeToolsWaitMs <= 0 || this.lanesNotAnswering.size > 0 || e.signal.aborted || r.every(item => this.toolCallRows[item].get(e.toolUseId) === "stored")) return;
    return this.awaitToolCallStored(e, r, flushPolicy.flushBeforeToolsWaitMs);
  }
  async awaitToolCallStored(e, n, r) {
    let toolUseId = e.toolUseId,
      h = Date.now(),
      S = As(e.signal, {
        timeoutMs: r,
        refTimer: !0
      }),
      E = As(S.signal, {
        timeoutMs: this.toolCallRowGraceMs,
        refTimer: !0
      }),
      y = !1,
      U = !1;
    this.awaitedToolCalls.add(toolUseId);
    try {
      if (this.releaseClientEvents("tool_call"), this.internalEventUploader.release("tool_call"), await Promise.race([this.toolCallRowReaches("client_events", toolUseId, "queued"), rt(E.signal)]), y = this.toolCallRows.client_events.has(toolUseId), U = E.signal.aborted && !S.signal.aborted, y && !this.closed) await Promise.race([Promise.all(n.map(item => this.toolCallRowReaches(item, toolUseId, "settled"))), rt(S.signal)]);
    } finally {
      E.cleanup(), S.cleanup(), this.awaitedToolCalls.delete(toolUseId);
      for (let O of n) this.toolCallRowWaiters.delete(`${O} ${toolUseId}`);
    }
    let outcome = n.every(item => this.toolCallRows[item].get(toolUseId) === "stored") ? "stored" : this.closed ? "closed" : e.signal.aborted ? "aborted" : n.some(item => this.toolCallRows[item].get(toolUseId) === "dropped") ? "dropped" : U && !y ? "row_never_queued" : "timeout";
    if (outcome === "timeout" || outcome === "dropped") {
      for (let O of n) if (this.toolCallRows[O].get(toolUseId) === "queued") this.lanesNotAnswering.add(O);
    }
    X(outcome === "stored" || outcome === "closed" || outcome === "aborted" ? "info" : "warn", "cli_ccr_tool_call_upload_wait", {
      outcome: outcome,
      waited_ms: Date.now() - h,
      limit_ms: r,
      live_view_row: this.toolCallRows.client_events.get(toolUseId) ?? "none",
      transcript_row: n.includes("internal_events") ? this.toolCallRows.internal_events.get(toolUseId) ?? "none" : "lane_unused"
    });
  }
  toolCallRowReaches(e, n, until) {
    let s = this.toolCallRows[e].get(n);
    if (s !== void 0 && (s !== "queued" || until === "queued")) return Promise.resolve();
    return new Promise(reached => {
      let S = `${e} ${n}`,
        E = {
          until: until,
          reached: reached
        },
        y = this.toolCallRowWaiters.get(S);
      if (y) y.push(E);else this.toolCallRowWaiters.set(S, [E]);
    });
  }
  noteToolCallRows(e, n, r) {
    let s = this.toolCallRows[e];
    for (let h of n) {
      if (r === "queued" && s.has(h) || r === "dropped" && s.get(h) === "stored") continue;
      s.set(h, r), st(s);
      let S = `${e} ${h}`,
        E = (this.toolCallRowWaiters.get(S) ?? []).filter(item => {
          if (item.until === "queued" || r !== "queued") return item.reached(), !1;
          return !0;
        });
      if (E.length > 0) this.toolCallRowWaiters.set(S, E);else this.toolCallRowWaiters.delete(S);
    }
  }
  noteToolCallRowsSettled(e, n, r) {
    if (!this.gatesToolCalls) return;
    if (n === "stored") this.lanesNotAnswering.delete(e);
    this.noteToolCallRows(e, r.flatMap(item => "session_agent_id" in item && item.session_agent_id || "ephemeral" in item && item.ephemeral ? [] : we(item.payload)), n);
  }
  mayParkTextRow(e) {
    if (e.type !== "assistant" || !this.streamEventTimer || this.lastReportedHasSubscribers === !1 || this.closed || this.twinsHeldRows(e.type)) return !1;
    let content = e.message.content;
    return Array.isArray(content) && content.length > 0 && content.every(item => item.type === "text");
  }
  twinsHeldRows(e) {
    return this.holdRule === "served_policy" && !this.viewerAbsentReported && this.flushPolicy?.liveTwinTypes.has(e) === !0;
  }
  takeParkedRows() {
    let e = this.parkedRows.map(({
      event: event_4
    }) => event_4);
    return this.parkedRows = [], e;
  }
  mayWaitUnderHold(e) {
    if (e.type === "keep_alive" && this.holdRule === "served_policy") return this.seesModelCallBoundaries && !this.flushPolicy?.mustFlushTypes.has(e.type);
    if (!Wso(e)) return !1;
    if (this.holdRule === "no_subscriber_flag" && !Mn) return !0;
    if (e.type === "user" && "isReplay" in e && e.isReplay) return !1;
    let flushPolicy_2 = this.flushPolicy;
    if (!flushPolicy_2) return !0;
    if (e.type === "assistant" && flushPolicy_2.flushOnAssistant) return !1;
    return !flushPolicy_2.mustFlushTypes.has(e.type);
  }
  toClientEvent(e) {
    let n = Scs(e, Xe),
      r = n.historical === !0,
      s = it(e) || u8t(n),
      tool_use_result = n.type === "user" && n.is_virtual !== !0 ? this.uploadedToolResult(n.tool_use_result, n.message) : n.tool_use_result;
    return {
      payload: {
        ...n,
        ...(tool_use_result !== n.tool_use_result && {
          tool_use_result: tool_use_result
        }),
        uuid: typeof n.uuid === "string" ? n.uuid : ge()
      },
      ...(r && {
        historical: !0
      }),
      ...(s && {
        ephemeral: !0
      })
    };
  }
  uploadedToolResult(e, n) {
    let r = this.currentUploadTrim(),
      s = qEo(e, r);
    if (s !== e && !this.loggedToolResultBlank) this.loggedToolResultBlank = !0, g("ccr_tool_result_blank");
    let h = $Ms(s, n, r);
    if (h !== s && !this.loggedMcpImageBlank) this.loggedMcpImageBlank = !0, g("ccr_mcp_image_blank");
    return h;
  }
  setStreamEventFlushIntervalMs(e) {
    if (this.streamEventFlushIntervalMs = le("streamEventFlushIntervalMs", e, fAt), this.streamEventFlushIntervalMs <= 0 && this.streamEventTimer) this.flushStreamEventBuffer();
  }
  setStreamEventFirstFlushMs(e) {
    this.streamEventFirstFlushMs = le("streamEventFirstFlushMs", e, 0);
  }
  setNoSubscriberStreamEventFlushIntervalMs(e) {
    let n = le("noSubscriberStreamEventFlushIntervalMs", e, 0);
    if (n === this.noSubscriberStreamEventFlushIntervalMs) return;
    this.noSubscriberStreamEventFlushIntervalMs = n, this.setHasSubscribers(void 0, "reset");
  }
  setNoSubscriberUploadHoldMs(e) {
    let n = le("noSubscriberUploadHoldMs", e, 0);
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
  tellSubscribersReported(e) {
    if (typeof e !== "boolean" || this.onSubscribersReported === void 0) return;
    if (e || !this.senderMayNotBeAttachedYet()) this.onSubscribersReported(e);
  }
  senderMayNotBeAttachedYet() {
    return Date.now() - this.lastInboundEventAtMs < An;
  }
  noSubscriberHoldMs() {
    return Tn && this.holdSwitchedOff ? 0 : this.noSubscriberUploadHoldMs;
  }
  unwatched() {
    return this.noSubscriberHoldMs() > 0 && this.lastReportedHasSubscribers === !1;
  }
  mayHoldUploads() {
    return this.noSubscriberUploadHoldMs > 0 || this.servedPolicyHolds();
  }
  holdSwitchOn() {
    return this.eventHoldEnabled !== void 0 && !this.holdSwitchedOff;
  }
  servedPolicyHolds() {
    return (this.flushPolicy?.maxEvents ?? 0) > 1 && this.holdSwitchOn();
  }
  decideHoldRule() {
    if (this.currentState !== "running" || this.shutdownReleased) return;
    if (this.servedPolicyHolds() && (this.seesModelCallBoundaries || this.lastReportedHasSubscribers === !1)) return "served_policy";
    return this.unwatched() ? "no_subscriber_flag" : void 0;
  }
  applyUploadHold(e) {
    if (this.holdSwitchedOff = this.eventHoldEnabled !== void 0 && this.eventHoldEnabled() !== !0, this.holdSwitchedOff && !this.loggedHoldSwitchedOff) this.loggedHoldSwitchedOff = !0, X("warn", "cli_ccr_event_hold_switched_off");
    let n = this.decideHoldRule();
    this.holdRule = n, this.eventUploader.setHold(n && this.laneHold(n, this.seesModelCallBoundaries ? In : Qe), e), this.internalEventUploader.setHold(n && this.laneHold(n, Qe), e);
  }
  laneHold(rule, passes) {
    let flushPolicy_3 = this.flushPolicy;
    if (rule === "served_policy" && flushPolicy_3) return {
      rule: rule,
      maxAgeMs: Math.min(flushPolicy_3.maxAgeMs, this.seesModelCallBoundaries ? ft : mn),
      maxItems: flushPolicy_3.maxEvents,
      maxBytes: flushPolicy_3.maxBytes,
      passes: passes
    };
    return {
      rule: "no_subscriber_flag",
      maxAgeMs: this.noSubscriberHoldMs()
    };
  }
  takeUpFlushPolicy(e) {
    let n = e == null ? void 0 : Dn(e);
    if (e != null && !n && !this.loggedUnreadableFlushPolicy) this.loggedUnreadableFlushPolicy = !0, X("warn", "cli_ccr_flush_policy_unreadable");
    let flushPolicy_4 = this.flushPolicy;
    if (!Hn(flushPolicy_4, n)) this.flushPolicy = n, X("info", n ? flushPolicy_4 ? "cli_ccr_flush_policy_changed" : "cli_ccr_flush_policy_adopted" : "cli_ccr_flush_policy_cleared", {
      ...(n && {
        max_events: n.maxEvents,
        max_age_ms: n.maxAgeMs,
        max_bytes: n.maxBytes ?? 0,
        flush_on_sampling_end: n.flushOnSamplingEnd,
        flush_on_assistant: n.flushOnAssistant,
        flush_before_tools_wait_ms: n.flushBeforeToolsWaitMs,
        flush_after_tools: n.flushAfterTools,
        must_flush_types: n.mustFlushTypes.size,
        live_twin_types: n.liveTwinTypes.size,
        policy_version: n.policyVersion ?? ""
      }),
      hold_enabled: this.eventHoldEnabled !== void 0 && this.eventHoldEnabled() === !0
    });
    this.applyUploadHold("reset");
  }
  logUploadHoldEnd(lane_2, reason_3, held_events, held_ms, h) {
    if (h === "no_subscriber_flag") {
      g("ccr_no_subscriber_hold", {
        lane: c(lane_2),
        reason: c(reason_3),
        held_events: held_events,
        held_ms: held_ms
      });
      return;
    }
    X("info", "cli_ccr_event_hold_release", {
      lane: lane_2,
      reason: reason_3,
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
      held_count: ie(n.heldCount),
      hold_age_ms: ie(n.holdAgeMs),
      inflight_retry_count: ie(n.retryCount),
      hold_rule: n.rule,
      post_index: ie(n.postIndex),
      ...(this.flushPolicy?.policyVersion !== void 0 && {
        policy_version: this.flushPolicy.policyVersion
      })
    };
    return r;
  }
  retrySmaller(e, n, r, timeout_ms, h = {
    bytes: r.bytes
  }) {
    let S = {
      count: n.length,
      kib: Math.round(h.bytes / 1024),
      retry_count: r.retryCount,
      timeout_ms: timeout_ms
    };
    return t(`CCRClient: ${e} POST of ${S.count} event(s), ${S.kib} KiB got no response (the connection failed, or no answer within ${timeout_ms}ms) after ${S.retry_count} earlier failure(s); ${h.bytes >= Te && r.cuttable ? "retrying it in smaller batches" : "retrying it"}`, {
      level: "warn"
    }), X("warn", e === "client_events" ? "cli_worker_events_no_response" : "cli_worker_internal_events_no_response", S), new eNr(`${e} POST got no response`, Te);
  }
  logUploadDrain(e, n) {
    if (!this.uploadHoldMarker()) return;
    g("ccr_upload_drain", {
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
  logUndeliveredAtClose(lane_3, undelivered_events) {
    if (this.shutdownKeepsClientEvents) t(`CCRClient: ${lane_3} lane closed at shutdown, ${undelivered_events} undelivered`, {
      level: undelivered_events > 0 ? "warn" : "info"
    });
    if (undelivered_events <= 0) return;
    if (this.noSubscriberHoldMs() > 0 && this.viewerAbsentReported) p("ccr_no_subscriber_hold", this.closingForSuccessor ? "undelivered_at_rebuild" : "undelivered_at_close", {
      lane: c(lane_3),
      undelivered_events: undelivered_events
    });
    if (this.servedPolicyHolds()) X("warn", "cli_ccr_event_hold_undelivered_at_close", {
      lane: lane_3,
      undelivered_events: undelivered_events,
      for_successor: this.closingForSuccessor
    });
  }
  bufferEphemeral(e) {
    let n = this.streamEventFirstFlushMs > 0 && e.type === "stream_event" ? e.event.type : void 0,
      r = n === "content_block_start";
    if (r) this.firstContentFlushPending = !0;
    if (this.dropUnwatchedStreamEvents && this.unwatchedPastGrace) {
      if (e.type === "stream_event") this.streamEventsDroppedUnwatched++;
      return;
    }
    this.streamEventBuffer.push(e);
    let s = this.firstContentFlushPending && n === "content_block_delta";
    if (s) this.firstContentFlushPending = !1;
    let h = r || s;
    if (s && this.firstDeltaFlushTimer === null && e.type === "stream_event" && e.event.type === "content_block_delta" && e.event.delta.type !== "input_json_delta" && !(this.lastReportedHasSubscribers === !1 && (this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberHoldMs() > 0))) this.firstDeltaFlushTimer = setTimeout(() => {
      this.firstDeltaFlushTimer = null, this.flushStreamEventBuffer(!0);
    }, 0);
    if (this.streamEventTimer && !h) return;
    let S = h ? Math.min(this.streamEventFirstFlushMs, this.streamEventFlushIntervalMs) : this.streamEventFlushIntervalMs,
      E = this.lastReportedHasSubscribers === !1 ? Math.max(this.noSubscriberStreamEventFlushIntervalMs, this.noSubscriberHoldMs(), S) : S,
      y = Date.now();
    if (this.streamEventTimer) {
      if (y + E >= this.streamEventFlushDueAt) return;
      clearTimeout(this.streamEventTimer);
    } else this.streamEventBufferedAt = y;
    this.streamEventFlushDueAt = y + E, this.streamEventTimer = setTimeout(() => void this.flushStreamEventBuffer(), E);
  }
  setHasSubscribers(e, n) {
    this.hasSubscribersReports++;
    let r = typeof e === "boolean" && (e || !this.senderMayNotBeAttachedYet()) ? e : void 0,
      lastReportedHasSubscribers = this.lastReportedHasSubscribers;
    if (this.lastReportedHasSubscribers = r, r === !0) this.viewerReportedSinceLastFalse = !0;else if (r === !1 && this.viewerReportedSinceLastFalse) this.viewerReportedSinceLastFalse = !1, this.lastViewerLeftAtMs = Date.now();
    let unwatchedPastGrace = this.unwatchedPastGrace;
    if (this.unwatchedPastGrace = r === !1 && Date.now() - this.lastViewerLeftAtMs >= Cn, this.dropUnwatchedStreamEvents && unwatchedPastGrace !== this.unwatchedPastGrace) t(this.unwatchedPastGrace ? "CCRClient: no subscribers reported; dropping stream deltas until one is" : `CCRClient: resuming stream deltas (${r === !0 ? "watcher" : n})`);
    if (lastReportedHasSubscribers === !1 && r !== !1 && this.streamEventTimer) this.flushStreamEventBuffer();
    let S = r === !0 ? "watcher" : n;
    if (r === !1) this.viewerAbsentReported = !0;else if (this.viewerAbsentReported && S === "watcher") {
      if (this.viewerAbsentReported = !1, this.holdRule === "served_policy") {
        if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
        this.releaseClientEvents("watcher"), this.internalEventUploader.release("watcher");
      }
    }
    this.applyUploadHold(S);
  }
  async flushStreamEventBuffer(e = !1) {
    let {
      events: events_2,
      release: release_2
    } = this.takeStreamEventBuffer(e);
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
        S;
      if (n.release === void 0 && this.eventUploader.holdsOnArrival(s)) S = "hold";else if (h !== void 0) S = h.some(item => !item.ephemeral) ? "durable_post" : "ephemeral_post";else if (this.eventUploader.backlog().backingOff) S = "retry_backoff";else S = "none";
      r.timing.enqueuedAtMs = performance.now(), r.timing.queuedBehind = S;
    }
    return this.eventUploader.enqueue(e, n);
  }
  releaseClientEvents(e) {
    this.eventUploader.release(e);
  }
  actsOnSubscribersReports() {
    return this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberUploadHoldMs > 0 || this.dropUnwatchedStreamEvents || this.servedPolicyHolds();
  }
  takeStreamEventBuffer(e = !1) {
    if (!e) {
      if (this.streamEventTimer) clearTimeout(this.streamEventTimer), this.streamEventTimer = null;
      if (this.firstDeltaFlushTimer) clearTimeout(this.firstDeltaFlushTimer), this.firstDeltaFlushTimer = null;
    }
    let release_3,
      r = e ? [] : this.parkedRows;
    for (let {
      message: message_2
    } of r) release_3 ??= this.releaseFor(message_2);
    if (this.streamEventBuffer.length === 0) return {
      events: e ? [] : this.takeParkedRows(),
      release: release_3
    };
    let s = [],
      h,
      estimated_tokens_delta = 0;
    for (let w of this.streamEventBuffer) {
      if (w.type === "stream_event") {
        s.push(w);
        continue;
      }
      estimated_tokens_delta = (h !== void 0 && w.estimated_tokens - w.estimated_tokens_delta === h.estimated_tokens ? estimated_tokens_delta : 0) + w.estimated_tokens_delta, h = w;
    }
    this.streamEventBuffer = [];
    for (let w of this.trackedFrameUploads("enqueuedAtMs")) w.uuid = De(s, w.uuid);
    let events_3 = Be(s).filter(item => {
      let R = Buffer.byteLength(_(item));
      if (R <= Z) return !0;
      return me(item, R), !1;
    }).map(w => ({
      payload: w,
      ephemeral: !0
    }));
    if (h) events_3.push(this.toClientEvent({
      ...h,
      estimated_tokens_delta: estimated_tokens_delta
    }));
    if (!e) events_3.push(...this.takeParkedRows());
    return {
      events: events_3,
      release: release_3
    };
  }
  currentUploadTrim() {
    let e = this.uploadTrim();
    return N(e) ? e : We;
  }
  async writeInternalEvent(type_2, n, {
    isCompaction = !1,
    agentId: s,
    preservedEventIds: preservedEventIds
  } = {}) {
    let preserved_event_ids = preservedEventIds,
      E = He(n);
    if (preserved_event_ids && preserved_event_ids.length > cap) i("tengu_ccr_preserved_event_ids_clamped", {
      originalCount: preserved_event_ids.length,
      cap: cap,
      payloadClamped: E !== null
    }), preserved_event_ids = preserved_event_ids.slice(-cap);
    let y = E ?? n;
    if (this.currentUploadTrim().envelope === !0) {
      let H = UMs(y);
      if (H !== y && !this.loggedTranscriptEnvelopeStrip) this.loggedTranscriptEnvelopeStrip = !0, g("ccr_worker_envelope_strip");
      y = H;
    }
    if (type_2 === "transcript" && y.type === "user" && y.isVirtual !== !0) {
      let toolUseResult = this.uploadedToolResult(y.toolUseResult, y.message);
      if (toolUseResult !== y.toolUseResult) y = {
        ...y,
        toolUseResult: toolUseResult
      };
    }
    let U = {
        payload: {
          type: type_2,
          ...y,
          uuid: typeof y.uuid === "string" ? y.uuid : ge()
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
      w = [U],
      R = s || "",
      O = this.rowsAwaitingCompactSummary.get(R);
    if (type_2 === "transcript" && (O !== void 0 || isCompaction && this.rowsAwaitingCompactSummaryAtClose === void 0)) {
      if (O === void 0) O = {
        rows: [],
        timer: this.startCompactSummaryWaitTimer(R)
      }, this.rowsAwaitingCompactSummary.set(R, O);
      O.rows.push(U);
      let H = y.isCompactSummary === !0 ? "summary" : y.type === "user" || y.type === "assistant" ? "user_or_assistant_row" : O.rows.length >= kn ? "row_cap" : void 0;
      if (H === void 0) return;
      w = this.takeRowsAwaitingCompactSummary(R, H);
    }
    let A = type_2 === "transcript" && y.type === "user" && this.toolResultReleases(y.message),
      I = this.gatesToolCalls && type_2 === "transcript" && !s ? we(y) : [];
    if (await this.queueInternalEvents(w, A ? "tool_result" : I.some(item => this.awaitedToolCalls.has(item)) ? "tool_call" : !this.transcriptRowMayWait(type_2, y) ? "event" : void 0), type_2 === "transcript") this.transcriptLaneInUse = !0;
    this.noteToolCallRows("internal_events", I, "queued");
  }
  async queueInternalEvents(e, n) {
    let r = e[0]?.is_compaction === !0 && this.holdRule !== void 0;
    if (r) this.releaseClientEvents("event");
    let h = (e[0]?.is_compaction === !0 && e[0].session_agent_id === void 0 ? this.rowsRepeatedAfterCompaction?.() ?? [] : []).map(({
        eventType: E,
        payload: payload_2
      }) => ({
        payload: {
          type: E,
          ...payload_2,
          uuid: ge()
        }
      })),
      S = [...e, ...h];
    this.markInternalEventPostWatch(E => E.noteQueued(S)), await this.internalEventUploader.enqueue(S, {
      together: !0,
      release: r ? "event" : n
    });
  }
  startCompactSummaryWaitTimer(e) {
    let n = setTimeout((r, s) => {
      let h = r.rowsAwaitingCompactSummary.get(s);
      if (r.closed || h === void 0) return;
      if (!r.internalEventUploader.hasRoomFor(1)) {
        h.timer = r.startCompactSummaryWaitTimer(s);
        return;
      }
      r.queueInternalEvents(r.takeRowsAwaitingCompactSummary(s, "timeout"), void 0).catch(l);
    }, Rn, this, e);
    return n.unref?.(), n;
  }
  takeRowsAwaitingCompactSummary(e, reason_4) {
    let r = this.rowsAwaitingCompactSummary.get(e);
    this.rowsAwaitingCompactSummary.delete(e), clearTimeout(r?.timer);
    let s = r?.rows ?? [];
    if (reason_4 !== "summary" && reason_4 !== "close") X("info", "cli_worker_compaction_marker_uploaded_without_summary", {
      reason: reason_4,
      count: s.length,
      subagent: e !== ""
    });
    return s;
  }
  transcriptRowMayWait(e, n) {
    let flushPolicy_5 = this.flushPolicy;
    if (this.holdRule !== "served_policy" || !flushPolicy_5) return !0;
    let s = e === "transcript" ? n.type : e;
    if (typeof s !== "string" || flushPolicy_5.mustFlushTypes.has(s)) return !1;
    if (s === "user") return n.toolUseResult !== void 0 || tt(n.message) || n.isMeta === !0 || n.isVirtual === !0 || n.isCompactSummary === !0;
    return !(s === "assistant" && flushPolicy_5.flushOnAssistant);
  }
  flushInternalEvents(e) {
    return this.internalEventUploader.flush(e);
  }
  watchInternalEventPosts() {
    let e = new he(this.internalEventUploader.backlog().unsent);
    return this.internalEventPostWatch = e, n => {
      if (this.internalEventPostWatch === e) this.internalEventPostWatch = void 0;
      return e.seen(n);
    };
  }
  markInternalEventPostWatch(e) {
    let internalEventPostWatch = this.internalEventPostWatch;
    if (internalEventPostWatch === void 0) return;
    try {
      e(internalEventPostWatch);
    } catch (error) {
      this.internalEventPostWatch = void 0, l(error);
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
      n = this.internalEventUploader.backlog(),
      r = [e.inFlightMs, n.inFlightMs].filter(item => item !== void 0);
    return {
      unsentClientEvents: e.unsent,
      unsentInternalEvents: n.unsent + this.countRowsAwaitingCompactSummary(),
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
        let S = dn().safeParse(h.data);
        return {
          ok: !0,
          results: S.success ? S.data.results : void 0
        };
      }
      return this.internalEventsFailure(h, epochMismatchCount);
    } catch (error) {
      return this.internalEventsFailure({
        reason: `fetch_failed:${re(error)}`
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
      S;
    try {
      let E = this.getAuthHeaders();
      if (Object.keys(E).length === 0) return {
        ok: !1,
        reason: "no_auth_headers"
      };
      S = n.signal ? As(n.signal, {
        timeoutMs: 30000,
        refTimer: !0
      }) : void 0;
      let y = await fetch(s, {
        headers: {
          ...E,
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": kh(),
          "User-Agent": hs()
        },
        signal: S?.signal ?? AbortSignal.timeout(30000),
        ...ra({
          url: s.toString()
        })
      });
      if (y.ok) {
        let A;
        try {
          A = await y.json();
        } catch (error) {
          if (!(error instanceof SyntaxError)) throw error;
        }
        let I = ln().safeParse(A);
        if (!I.success) return X("warn", "cli_worker_internal_events_page_foreign"), {
          ok: !1,
          status: y.status,
          reason: "foreign_body"
        };
        let H = Number(y.headers.get("content-length") ?? Number.NaN);
        return {
          ok: !0,
          data: I.data.data.map(et),
          ...(I.data.next_cursor && {
            nextCursor: I.data.next_cursor
          }),
          bytes: Number.isFinite(H) ? H : null
        };
      }
      let errorType, resourceType, retryAfterMs, closedConflict;
      if (y.status === 409) {
        let A = await Ee(y);
        if (this.closed) closedConflict = A ?? this.lastEpochMismatchCause ?? "epoch_conflict";else try {
          this.handleEpochMismatch(A);
        } catch (error) {
          t(`CCRClient: onEpochMismatch threw during a page read: ${d(error)}`);
        }
      } else if (y.status === 404) try {
        let A = await y.json();
        if (typeof A?.error?.type === "string") errorType = A.error.type;
        if (typeof A?.error?.resource_type === "string") resourceType = A.error.resource_type;
      } catch {} else {
        if (y.status === 429) {
          let A = parseInt(y.headers.get("retry-after") ?? "", 10);
          if (!isNaN(A) && A >= 0) retryAfterMs = A * 1000;
        }
        y.body?.cancel();
      }
      return t(`CCRClient: internal events page returned ${y.status}`, {
        level: "warn"
      }), X("warn", "cli_worker_request_failed", {
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
        reason: `fetch_failed:${re(error)}`
      }, epochMismatchCount_2);
    } finally {
      S?.cleanup();
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
      status_2 = e.status ?? (conflict && Jt[conflict] ? 409 : void 0);
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
  refusedInternalEventUuids = new Set();
  refusedInternalEvents(e) {
    return e.filter(item => this.refusedInternalEventUuids.has(item));
  }
  noteRefusedInternalEvents(e) {
    for (let {
      payload: payload_3,
      session_agent_id: session_agent_id
    } of e) if (session_agent_id === void 0) this.refusedInternalEventUuids.add(payload_3.uuid);
    let n = this.refusedInternalEventUuids.size - sn;
    for (let r of this.refusedInternalEventUuids) {
      if (n-- <= 0) break;
      this.refusedInternalEventUuids.delete(r);
    }
  }
  dropOrphanedHandedOffLines(e) {
    let n = 0;
    for (let r = 0; r < e.length;) {
      let s = e[r],
        {
          payload: payload_4
        } = s;
      if (s.session_agent_id === void 0 && (payload_4.handedOff === !0 || payload_4.type === "system" && payload_4.subtype === on) && !(payload_4.type === "user" && !tt(payload_4.message)) && typeof payload_4.parentUuid === "string" && this.refusedInternalEventUuids.has(payload_4.parentUuid)) {
        e.splice(r, 1), n++, this.noteRefusedInternalEvents([s]);
        continue;
      }
      r++;
    }
    return n;
  }
  droppedDeliveryAckBatches = 0;
  deliveryAcksWaitingForRoom = new Set();
  async flushDeliveryAcksConfirmed() {
    let droppedDeliveryAckBatches = this.droppedDeliveryAckBatches;
    return await Promise.all(this.deliveryAcksWaitingForRoom), await this.deliveryUploader.flush(), this.droppedDeliveryAckBatches === droppedDeliveryAckBatches && !this.closed;
  }
  flushDeliveryAcks(e) {
    return this.deliveryUploader.flush(e);
  }
  async flush(e) {
    return await this.flushStreamEventBuffer(), this.eventUploader.flush(e);
  }
  withdrawQueuedControlRequest(e) {
    let n = r => !r.ephemeral && r.payload.type === "control_request" && r.payload.request_id === e;
    return this.eventUploader.withdraw(n);
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
  async readInternalEvents(e, n, r) {
    return KF.readInternalEventsFrom(this.readSource, e, n, r);
  }
  async readInternalEventsForCatchUp(signal_2) {
    return KF.paginatedGet(this.readSource, "/worker/internal-events", {
      limit: "1000"
    }, "internal_events", {
      maxAttempts: maxAttempts,
      signal: signal_2
    });
  }
  static readInternalEventsFrom(e, after_event_id, signal_3, readBody) {
    return KF.paginatedGet(e, "/worker/internal-events", {
      limit: "1000",
      ...(after_event_id && {
        after_event_id: after_event_id
      })
    }, "internal_events", {
      signal: signal_3,
      readBody: readBody
    });
  }
  async readSubagentInternalEvents() {
    return KF.readSubagentInternalEventsFrom(this.readSource);
  }
  static readSubagentInternalEventsFrom(e) {
    return KF.paginatedGet(e, "/worker/internal-events", {
      subagents: "true",
      limit: "1000"
    }, "subagent_events");
  }
  async readAgentInternalEvents(session_agent_id_2, signal_4, r) {
    return KF.paginatedGet(this.readSource, "/worker/internal-events", {
      session_agent_id: session_agent_id_2,
      limit: "1000"
    }, "agent_events", {
      maxAttempts: maxAttempts,
      signal: signal_4
    }, r);
  }
  static async paginatedGet(e, n, r, context, h = {}, S) {
    let E = e.getAuthHeaders();
    if (Object.keys(E).length === 0) return null;
    let events_5 = [],
      U,
      pageCount = 0,
      R = 0,
      O = 0,
      bytesReceived = 0,
      I = null;
    do {
      let H = new URL(`${e.sessionBaseUrl}${n}`);
      for (let [x, j] of Object.entries(r)) H.searchParams.set(x, j);
      if (U) H.searchParams.set("cursor", U), H.searchParams.delete("after_event_id");
      let B = !U && r.after_event_id !== void 0,
        anchorFallback,
        L = await KF.getWithRetry(e, H.toString(), E, context, x => {
          pageCount++, I ??= x.headers.get("content-encoding");
          let j = x.headers.get("content-length");
          if (j !== null && bytesReceived !== null) bytesReceived += Number(j);else bytesReceived = null;
        }, (x, j) => {
          if (!B) return;
          if (x === 400) anchorFallback = "rejected";else if (j === "after_event_id_not_found") anchorFallback = "not-found";
        }, S === void 0 ? h : {
          ...h,
          unencoded: !0,
          readBody: async x => {
            let j = x.headers.get("content-encoding");
            if (j !== null && j !== "identity") return await x.body?.cancel(), {
              encodedBody: !0
            };
            let W = await tn(x, S.maxBytes - O);
            if (W === null) return {
              pastMaxBytes: !0
            };
            let P = J(W.text);
            if (!N(P) || !Array.isArray(P.data) || !P.data.every(N)) throw Error("CCRClient: a page is no list of events");
            return O += W.bytes, P;
          }
        });
      if (L?.encodedBody) return {
        events: [],
        stats: {
          pageCount: pageCount,
          bytesReceived: bytesReceived,
          contentEncoding: I ?? "none"
        },
        encodedBody: !0
      };
      if (!L) {
        if (anchorFallback) {
          t(`CCRClient: after_event_id ${anchorFallback === "rejected" ? "rejected by server (gate off)" : "not found (stale anchor)"} \u2014 refetching without anchor`, {
            level: "warn"
          }), X("warn", anchorFallback === "rejected" ? "cli_worker_after_event_id_rejected" : "cli_worker_after_event_id_not_found", {
            context: context
          });
          let {
              after_event_id: after_event_id_2,
              ...j
            } = r,
            W = await KF.paginatedGet(e, n, j, context, h, S);
          if (!W) return null;
          return {
            ...W,
            anchorFallback: anchorFallback
          };
        }
        return null;
      }
      for (let x of L.data ?? []) if (!WMs(x.payload)) events_5.push(et(x));
      if (R += Math.max(1, L.data?.length ?? 0), S !== void 0 && (R > S.maxEvents || L.pastMaxBytes === !0 || (L.data ?? []).some(item => !nn(item, S.maxTimestampChars)))) return {
        events: [],
        stats: {
          pageCount: pageCount,
          bytesReceived: bytesReceived,
          contentEncoding: I ?? "none"
        },
        overBound: !0
      };
      U = L.next_cursor;
    } while (U);
    return t(`CCRClient: Read ${events_5.length} internal events from ${n}${r.subagents ? " (subagents)" : ""}`), {
      events: events_5,
      stats: {
        pageCount: pageCount,
        bytesReceived: bytesReceived,
        contentEncoding: I ?? "none"
      }
    };
  }
  static getWithRetry(e, n, r, s, h, S, E = {}) {
    return KF.getWithRetryNow(e, n, r, s, h, S, E);
  }
  static async getWithRetryNow(e, url_3, r, context_2, h, S, {
    maxAttempts: maxAttempts_2 = en,
    signal: signal_5,
    readBody: readBody_2,
    unencoded: unencoded
  }) {
    for (let R = 1; R <= maxAttempts_2; R++) {
      if (signal_5?.aborted) return null;
      let O;
      try {
        if (O = await qzn(url_3, {
          headers: {
            ...r,
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": kh(),
            "User-Agent": hs(),
            ...(unencoded && {
              "Accept-Encoding": "identity"
            })
          },
          ...(unencoded && {
            decompress: !1
          }),
          signal: signal_5 ? AbortSignal.any([AbortSignal.timeout(30000), signal_5]) : AbortSignal.timeout(30000),
          ...ra({
            url: url_3
          })
        }, e.ownConnectionPool), O.ok) {
          let I = readBody_2 ? await readBody_2(O) : await O.json();
          return h?.(O), I;
        }
      } catch (error) {
        if (signal_5?.aborted) return null;
        if (t(`CCRClient: GET ${url_3} failed (attempt ${R}/${maxAttempts_2}): ${d(error)}`, {
          level: "warn"
        }), R < maxAttempts_2) {
          let H = Math.min(500 * 2 ** (R - 1), 30000) + Math.random() * 500;
          await Y(H, signal_5);
        }
        continue;
      }
      let A;
      if (O.status === 404 && S) try {
        let I = await O.json();
        if (typeof I?.error?.type === "string") A = I.error.type;
      } catch {} else if (O.status === 409) {
        if (e.isClosed?.()) return await Nz(O), null;
        let I = await Ee(O);
        if (!e.isClosed?.()) e.onConflict?.(I);
        return null;
      } else await Nz(O);
      if (K(O.status) || A === "after_event_id_not_found") return t(`CCRClient: GET ${url_3} returned ${O.status} \u2014 permanent, not retrying`, {
        level: "warn"
      }), S?.(O.status, A), null;
      if (t(`CCRClient: GET ${url_3} returned ${O.status} (attempt ${R}/${maxAttempts_2})`, {
        level: "warn"
      }), R < maxAttempts_2) {
        let I = Math.min(500 * 2 ** (R - 1), 30000) + Math.random() * 500;
        await Y(I, signal_5);
      }
    }
    return t("CCRClient: GET retries exhausted", {
      level: "error"
    }), X("error", "cli_worker_get_retries_exhausted", {
      context: context_2
    }), null;
  }
  reportDelivery(eventId_2, status_3) {
    if (status_3 === "received") this.lastInboundEventAtMs = Date.now(), this.setHasSubscribers(void 0, "watcher");
    if (status_3 === "processing") {
      if (this.closed) return;
      if (this.pendingProcessingAcks.push(eventId_2) === 1) queueMicrotask(() => {
        let pendingProcessingAcks = this.pendingProcessingAcks;
        if (this.pendingProcessingAcks = [], this.closed || pendingProcessingAcks.length === 0) return;
        this.request("post", "/worker/events/delivery", {
          worker_epoch: this.workerEpoch,
          updates: pendingProcessingAcks.map(S => ({
            event_id: S,
            status: "processing"
          }))
        }, "processing ack");
      });
      return;
    }
    let r = !this.deliveryUploader.hasRoomFor(1),
      s = this.deliveryUploader.enqueue({
        eventId: eventId_2,
        status: status_3
      });
    if (r) this.deliveryAcksWaitingForRoom.add(s), s.finally(() => this.deliveryAcksWaitingForRoom.delete(s));
  }
  getWorkerEpoch() {
    return this.workerEpoch;
  }
  get internalEventsPending() {
    return this.internalEventUploader.pendingCount + this.countRowsAwaitingCompactSummary() + (this.rowsAwaitingCompactSummaryAtClose ?? 0);
  }
  countRowsAwaitingCompactSummary() {
    let e = 0;
    for (let n of this.rowsAwaitingCompactSummary.values()) e += n.rows.length;
    return e;
  }
  get awaitsCompactSummary() {
    return this.rowsAwaitingCompactSummary.has("");
  }
  hasInternalEventRoom(e) {
    return !this.awaitsCompactSummary && this.internalEventUploader.hasRoomFor(e);
  }
  close(e) {
    this.closeExceptInternalEvents(e);
    let n = this.countRowsAwaitingCompactSummary();
    for (let r of this.rowsAwaitingCompactSummary.keys()) this.takeRowsAwaitingCompactSummary(r, "close");
    this.rowsAwaitingCompactSummaryAtClose ??= n, this.logUndeliveredAtClose("internal_events", this.internalEventUploader.close() + n);
  }
  flushGoodbye() {
    return this.goodbyeFlushed;
  }
  closeExceptInternalEvents(e) {
    let closed = this.closed;
    this.closed = !0, this.workerSocket?.usePostFromNowOn(), this.closeAbort.abort(), this.closingForSuccessor = e?.retainUndeliveredClientEvents === !0;
    let r = this.takeParkedRows();
    if (r.length > 0) this.eventUploader.enqueue(r);
    if (!closed && e?.goodbye !== !1) this.sendGoodbye();
    this.stopHeartbeat(), this.clearProbeBeatTimer(), this.unsubscribeIdleTracker?.(), nUs(), this.stopToolCallGate?.();
    for (let s of this.toolCallRowWaiters.values()) for (let h of s) h.reached();
    if (this.toolCallRowWaiters.clear(), this.streamEventTimer) clearTimeout(this.streamEventTimer), this.streamEventTimer = null;
    if (this.firstDeltaFlushTimer) clearTimeout(this.firstDeltaFlushTimer), this.firstDeltaFlushTimer = null;
    if (this.streamEventBuffer = [], this.pendingProcessingAcks = [], this.workerState.close(), e?.keepClientEvents !== !0) this.logUndeliveredAtClose("client_events", this.eventUploader.close({
      retainUndelivered: e?.retainUndeliveredClientEvents === !0
    }));
    this.deliveryUploader.close();
  }
  registerShutdownCleanup(e = {
    registerCleanup: registerCleanup,
    registerPreExitFlush: registerPreExitFlush
  }, n = Ze) {
    e.registerCleanup(() => this.beginShutdown()), e.registerPreExitFlush(() => this.finishShutdown(n));
  }
  beginShutdown() {
    try {
      let e = !this.closed && this.currentState === "running" && this.holdSwitchOn();
      if (this.shutdownKeepsClientEvents = e || !this.closed && this.servedPolicyHolds(), this.shutdownKeepsClientEvents) this.shutdownReleased = !0, this.applyUploadHold("shutdown");
    } finally {
      this.closeExceptInternalEvents({
        keepClientEvents: this.shutdownKeepsClientEvents
      });
    }
  }
  async finishShutdown(e = Ze) {
    await this.flushGoodbye();
    try {
      await je(Promise.allSettled([this.flushInternalEvents(), this.shutdownKeepsClientEvents ? this.flush() : void 0]), e);
    } finally {
      this.close(), this.onInternalEventLaneClosed?.(), await Z0e().catch(() => {});
    }
  }
}
var Ze = 3000;
function xn(e) {
  let post_turn_summary = e.post_turn_summary;
  if (!Bn(post_turn_summary) || post_turn_summary.status_category !== "blocked") return e;
  return {
    ...e,
    post_turn_summary: {
      ...post_turn_summary,
      status_category: "need_input"
    }
  };
}
function Bn(e) {
  return e !== null && typeof e === "object" && "status_category" in e && typeof e.status_category === "string";
}
async function Ee(e) {
  let n = ye(e.headers.get("x-ccr-conflict-reason"));
  if (n !== void 0) return await Nz(e), n;
  try {
    let r = await e.json();
    return ye(r?.error?.reason ?? r?.reason) ?? ye(r?.error?.type);
  } catch {}
  return;
}
function ye(e) {
  switch (e) {
    case "superseded_by_worker":
    case "epoch_stale":
    case "session_not_active":
      return e;
    default:
      return;
  }
}
function Dn(e) {
  let n = pn().safeParse(e);
  if (!n.success) return;
  let r = n.data,
    maxAgeMs = ae(r.max_age_ms, ft),
    h = ae(r.max_bytes, vn),
    S = r.policy_version ?? void 0;
  return {
    maxEvents: maxAgeMs > 0 ? ae(r.max_events, fn) : 0,
    maxAgeMs: maxAgeMs,
    maxBytes: h > 0 ? h : void 0,
    flushOnSamplingEnd: r.flush_on_sampling_end === !0,
    flushOnAssistant: r.flush_on_assistant === !0,
    flushBeforeToolsWaitMs: ae(r.flush_before_tools_wait_ms, Sn),
    flushAfterTools: yn.find(item => item === r.flush_after_tools) ?? "none",
    mustFlushTypes: new Set((r.must_flush_types ?? []).slice(0, _n)),
    liveTwinTypes: new Set((r.live_twin_types ?? []).slice(0, gn)),
    policyVersion: S !== void 0 && bn.test(S) ? S : void 0
  };
}
function et(e) {
  let payload_5 = Prn(e.payload);
  return payload_5 === e.payload ? e : {
    ...e,
    payload: payload_5
  };
}
function tt(e) {
  let n = N(e) ? e.content : void 0;
  return Array.isArray(n) && n.some(item => N(item) && item.type === "tool_result");
}
function we(e) {
  return N(e) && e.type === "assistant" && e.parent_tool_use_id == null ? mt(e.message, "tool_use", "id") : [];
}
function mt(e, n, r) {
  let s = N(e) ? e.content : void 0;
  if (!Array.isArray(s)) return [];
  let h = [];
  for (let S of s) if (N(S) && S.type === n) {
    let E = S[r];
    if (typeof E === "string") h.push(E);
  }
  return h;
}
function rt(e) {
  return new Promise(n => {
    if (e.aborted) n();else e.addEventListener("abort", () => n(), {
      once: !0
    });
  });
}
function st(e) {
  if (e.size > wn) {
    let n = e.keys().next().value;
    if (n !== void 0) e.delete(n);
  }
}
function ae(e, n) {
  return typeof e === "number" && Number.isFinite(e) ? Math.min(Math.max(0, Math.trunc(e)), n) : 0;
}
function Hn(e, n) {
  if (!e || !n) return e === n;
  return e.maxEvents === n.maxEvents && e.maxAgeMs === n.maxAgeMs && e.maxBytes === n.maxBytes && e.flushOnSamplingEnd === n.flushOnSamplingEnd && e.flushOnAssistant === n.flushOnAssistant && e.flushBeforeToolsWaitMs === n.flushBeforeToolsWaitMs && e.flushAfterTools === n.flushAfterTools && e.policyVersion === n.policyVersion && e.mustFlushTypes.size === n.mustFlushTypes.size && [...e.mustFlushTypes].every(item => n.mustFlushTypes.has(item)) && e.liveTwinTypes.size === n.liveTwinTypes.size && [...e.liveTwinTypes].every(item => n.liveTwinTypes.has(item));
}
function le(e, n, r) {
  let s = typeof n === "string" ? Number(n) : n;
  if (typeof s === "number" && Number.isFinite(s)) return Math.min(Math.max(s, 0), 60000);
  if (n !== void 0) t(`CCRClient: non-finite ${e} (${typeof n}) \u2014 using ${r}ms`, {
    level: "warn"
  });
  return r;
}
function it(e) {
  return e.type === "system" && "subtype" in e && e.subtype === "thinking_tokens";
}
function Wso(e) {
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
function ot(e) {
  if (e) return "?include_hearth=true";
  return "";
}
function at(e) {
  return e?.hearth;
}
function Ae(e) {
  return e.payload.type === "user";
}
function LMn(e) {
  let n = e?.isTurnRunning ?? (() => Dke() > 0),
    r = Me(),
    s = Date.now();
  return {
    noteActivity() {
      s = Date.now();
      try {
        r.emit();
      } catch (error) {
        l(error);
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
var Bfr = 30000;
var vt = 50,
  Nn = 16384,
  gt = 500,
  ee = 10,
  Ln = 1000,
  Wn = 1000,
  qn = 3,
  Q = 3600000,
  St = 1048576,
  $n = 1e6;
class Ie {
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
  constructor(e, n = Vn, r = jn) {
    this.decoder = e;
    this.clock = n;
    this.sink = r;
    this.dispatchedSeen = e.framesDispatched;
  }
  observe(e, n) {
    let r = this.decoder.framesDispatched - this.dispatchedSeen;
    if (this.dispatchedSeen = this.decoder.framesDispatched, this.watch === null && this.decoder.pendingChars === 0 && !n.some(Et)) return;
    if (this.disabled) return;
    try {
      this.onRead(e, r, n);
    } catch (error) {
      this.disable(error);
    }
  }
  stop() {
    this.cancelTick?.(), this.cancelTick = null, this.nextTickDueMs = 1 / 0, this.watch = null;
  }
  onRead(bytes_5, n, r) {
    let s = this.clock.nowMs(),
      h = this.clock.cpuMicros(),
      S = n > 0 && this.decoder.pendingChars > 0 ? Math.min(Buffer.byteLength(this.decoder.buffered()), bytes_5) : 0,
      watch = this.watch,
      before = null;
    if (watch !== null) {
      if (watch.reads === 0 && n === 0 && !this.frameHasBegun()) return;
      let U = {
        gapMs: s - watch.lastReadAtMs,
        loopLagMs: this.loopLagAt(s),
        cpuMs: (h - watch.lastCpuMicros) / 1000
      };
      if (this.stop(), watch.reads === 0) {
        if (U.loopLagMs !== null && U.gapMs - U.loopLagMs <= gt) before = {
          gapMs: U.gapMs,
          loopLagMs: U.loopLagMs,
          cpuMs: U.cpuMs
        };
      } else {
        if (U.gapMs > watch.maxGap.gapMs) watch.maxGap = U, watch.maxGapOffsetBytes = watch.bytes;
        if (watch.reads++, watch.bytes += bytes_5, watch.lastReadAtMs = s, watch.lastCpuMicros = h, n === 0) {
          this.watch = watch, this.armTick(s);
          return;
        }
        watch.bytes -= S, this.report(watch, s);
      }
    }
    if (this.frameHasBegun()) {
      this.watch = Ce(s, h, {
        reads: 1,
        bytes: n === 0 ? bytes_5 : S,
        before: n === 0 ? before : null
      }), this.armTick(s);
      return;
    }
    if (before !== null && n === 1) this.report(Ce(s, h, {
      reads: 1,
      bytes: bytes_5,
      before: before
    }), s);
    if (r.some(Et)) this.watch = Ce(s, h, {
      reads: 0,
      bytes: 0,
      before: null
    }), this.armTick(s);
  }
  frameHasBegun() {
    let pendingChars = this.decoder.pendingChars;
    return pendingChars > qn || pendingChars > 0 && /[^\r\n]/.test(this.decoder.buffered());
  }
  report(e, n) {
    let {
        before: before_2,
        maxGap: maxGap
      } = e,
      h = before_2 !== null && before_2.loopLagMs >= vt && e.bytes >= Nn;
    if (maxGap.gapMs < vt && !h) return;
    if (n - this.lastLineAtMs < Wn) return;
    this.lastLineAtMs = n, this.sink({
      frame_kib: V(e.bytes / 1024, St),
      read_count: V(e.reads, $n),
      receive_ms: V(n - e.startedAtMs, Q),
      ...(before_2 !== null && {
        before_frame_gap_ms: V(before_2.gapMs, Q),
        before_frame_loop_lag_ms: V(before_2.loopLagMs, Q),
        before_frame_cpu_ms: V(before_2.cpuMs, Q)
      }),
      max_gap_ms: V(maxGap.gapMs, Q),
      max_gap_offset_kib: V(e.maxGapOffsetBytes / 1024, St),
      ...(maxGap.loopLagMs !== null && {
        max_gap_loop_lag_ms: V(maxGap.loopLagMs, Q)
      }),
      max_gap_cpu_ms: V(maxGap.cpuMs, Q)
    });
  }
  loopLagAt(e) {
    if (this.nextTickDueMs !== 1 / 0) return Math.max(this.lastTickLagMs, e - this.nextTickDueMs, 0);
    return e - this.lastTickAtMs <= ee ? this.lastTickLagMs : null;
  }
  armTick(e) {
    this.lastTickLagMs = 0, this.lastTickAtMs = e, this.nextTickDueMs = e + ee, this.cancelTick = this.clock.setTimer(this.onTick, ee);
  }
  onTick = () => {
    try {
      this.cancelTick = null;
      let watch_2 = this.watch;
      if (watch_2 === null) return;
      let n = this.clock.nowMs();
      this.lastTickLagMs = Math.max(n - this.nextTickDueMs, 0), this.lastTickAtMs = n;
      let r = watch_2.reads === 0 ? gt : Ln;
      if (n - watch_2.lastReadAtMs >= r) {
        this.nextTickDueMs = 1 / 0;
        return;
      }
      this.nextTickDueMs = n + ee, this.cancelTick = this.clock.setTimer(this.onTick, ee);
    } catch (error) {
      this.disable(error);
    }
  };
  disable(e) {
    this.disabled = !0, this.stop(), l(e);
  }
}
function Ce(e, lastCpuMicros, {
  reads: reads,
  bytes: bytes_6,
  before: before_3
}) {
  return {
    reads: reads,
    bytes: bytes_6,
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
function Et(e) {
  return e.event === "client_event";
}
function V(e, n) {
  return Number.isFinite(e) ? Math.min(Math.max(Math.round(e), 0), n) : 0;
}
function jn(e) {
  X("warn", "cli_sse_frame_stall", e);
}
function cpuMicros() {
  let e = process.cpuUsage();
  return e.user + e.system;
}
function setTimer(e, n) {
  let r = setTimeout(e, n);
  return r.unref(), () => clearTimeout(r);
}
var Vn = {
  nowMs: () => performance.now(),
  cpuMicros: cpuMicros,
  setTimer: setTimer
};
var Kn = new Map([["", "none"], ["text/event-stream", "event-stream"], ["text/html", "html"], ["application/xhtml+xml", "html"], ["application/json", "json"], ["text/plain", "text"], ["application/xml", "xml"], ["text/xml", "xml"]]);
function yt(e) {
  let n = nt(nt(e ?? "", ";"), ",").trim().toLowerCase();
  return Kn.get(n) ?? (n.endsWith("+json") ? "json" : "other");
}
var wt = "worker_capabilities",
  kt = "attestation-floor/1",
  Rt = "worker-socket/1",
  NMn = "x-ccr-attestation-policy",
  Yn = new Map([["verified", "VERIFIED"], ["verified_keyless_device", "VERIFIED_KEYLESS_DEVICE"], ["verified_by_gate", "VERIFIED_BY_GATE"]]),
  Xn = new Map([["server_authored", "SERVER_AUTHORED"], ["server_replayed", "SERVER_REPLAYED"], ["absent", "ABSENT"], ["invalid", "INVALID"], ["unchecked", "UNCHECKED"], ["unspecified", "UNSPECIFIED"]]);
function Tt(e) {
  if (e === null) return {
    policy: void 0,
    fault: void 0
  };
  let n = new Map();
  for (let E of nt(e, ", ").split(";")) {
    let y = E.trim(),
      U = y.indexOf("="),
      w = U === -1 ? "" : y.slice(0, U);
    if (w !== "" && !n.has(w)) n.set(w, y.slice(U + 1));
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
  let s = Yn.get(n.get("level") ?? ""),
    acceptStatuses = new Set(),
    S = !1;
  for (let E of (n.get("accept") ?? "").split(",")) {
    let y = Xn.get(E);
    if (y !== void 0) acceptStatuses.add(y);else if (E !== "") S = !0;
  }
  return {
    policy: {
      enforce: r === "enforce",
      acceptLevel: s ?? "VERIFIED_BY_GATE",
      acceptStatuses: acceptStatuses
    },
    fault: s === void 0 || S ? "policy_partial" : void 0
  };
}
var baseMs = 1000,
  capMs = 30000,
  Zn = 60000,
  Oe = 15,
  er = 60,
  tr = 30000,
  dOMException = new DOMException("no frame within the liveness timeout", "AbortError"),
  dOMException_2 = new DOMException("the connection is renewed", "AbortError"),
  nr = 15000,
  Mt = 3,
  rr = "keepalive_tolerance_seconds",
  Vso = "x-ccr-sse-keepalive-interval-seconds",
  sr = new Set([401, 403, 404]),
  ir = /\btext\/event-stream\b/i,
  te = 10,
  baseMs_2 = 500,
  capMs_2 = 8000;
function validateStatus() {
  return !0;
}
var qso = new Set(["workflow_launch", "queued_notification", "session_notice"]),
  dr = f(() => u({
    event_type: o()
  })),
  ur = "heartbeat_probe",
  cr = "owner_present",
  hr = new Set(["event_id"]),
  pr = /^"([\w-]{1,128})"$/;
class FMn {
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
  onFrameRefused;
  onHeartbeatProbe;
  onOwnerPresent;
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
  lastFrameReadAtMs = 0;
  sseKeepaliveMaxIntervalSeconds;
  requireStreamEvidence;
  onUnexpectedContentType;
  advertisedMaxIntervalSeconds;
  echoedIntervalSeconds;
  nonOriginPolicy;
  nonOriginStreak = null;
  postUrl;
  serviceClockAtConnect;
  held = null;
  isHeldForRenewal = !1;
  statementRenewalGate;
  endedForRenewal = new WeakSet();
  constructor(e, n = {}, {
    sessionId: sessionId,
    refreshHeaders: refreshHeaders,
    initialSequenceNum: initialSequenceNum,
    getAuthHeaders: getAuthHeaders_2,
    connectTimeoutMs: connectTimeoutMs,
    deferDelivery: deferDelivery,
    sseKeepaliveMaxIntervalSeconds: sseKeepaliveMaxIntervalSeconds,
    requireStreamEvidence: requireStreamEvidence,
    onUnexpectedContentType: onUnexpectedContentType,
    mostMembersInAFrame: mostMembersInAFrame,
    lighterFrame: lighterFrame,
    openStream: openStream
  } = {}) {
    this.url = e;
    if (this.headers = n, this.sessionId = sessionId, this.refreshHeaders = refreshHeaders, this.getAuthHeaders = getAuthHeaders_2 ?? PB, this.connectTimeoutMs = connectTimeoutMs ?? Bfr, this.postUrl = fr(e), this.sseKeepaliveMaxIntervalSeconds = sseKeepaliveMaxIntervalSeconds, this.requireStreamEvidence = requireStreamEvidence ?? !1, this.onUnexpectedContentType = onUnexpectedContentType, this.mostMembersInAFrame = mostMembersInAFrame, this.lighterFrame = lighterFrame, this.streamOpener = openStream, initialSequenceNum !== void 0 && initialSequenceNum > 0) this.lastSequenceNum = initialSequenceNum;
    if (deferDelivery) this.held = {
      frames: [],
      close: null
    };
    t(`SSETransport: SSE URL = ${e.href}`), t(`SSETransport: POST URL = ${this.postUrl}`), X("info", "cli_sse_transport_initialized");
  }
  serviceNow() {
    let serviceClockAtConnect = this.serviceClockAtConnect;
    if (serviceClockAtConnect === void 0) return;
    let n = performance.now() - serviceClockAtConnect.monotonicMs;
    return Math.abs(Date.now() - serviceClockAtConnect.wallMs - n) > Zn ? void 0 : serviceClockAtConnect.serviceMs + n;
  }
  getLastSequenceNum() {
    return this.lastSequenceNum;
  }
  connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") return t(`SSETransport: Cannot connect, current state is ${this.state}`, {
      level: "error"
    }), X("error", "cli_sse_connect_failed"), Promise.resolve();
    return this.state = "reconnecting", this.openStream(void 0);
  }
  async openStream(e) {
    let n = Date.now(),
      r = At(Math.floor(Number(this.sseKeepaliveMaxIntervalSeconds?.())));
    this.advertisedMaxIntervalSeconds = r > Oe ? r : void 0, this.echoedIntervalSeconds = void 0;
    let s = new URL(this.url.href);
    if (this.lastSequenceNum > 0) s.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    if (this.advertisedMaxIntervalSeconds !== void 0) s.searchParams.set(rr, String(Mt * this.advertisedMaxIntervalSeconds));
    let h = [...(this.workerAttestationPolicySink === void 0 ? [] : [kt]), ...(this.streamOpener === void 0 ? [] : [Rt])];
    if (h.length > 0) s.searchParams.set(wt, h.join(","));
    let S = this.getAuthHeaders(),
      headers = {
        ...this.headers,
        ...S,
        Accept: "text/event-stream",
        "anthropic-version": "2023-06-01",
        "anthropic-client-platform": kh(),
        "User-Agent": hs()
      };
    if (Pe(headers, S), this.lastSequenceNum > 0) headers["Last-Event-ID"] = String(this.lastSequenceNum);
    t(`SSETransport: Opening ${s.href}`), X("info", "cli_sse_connect_opening");
    let abortController = new AbortController();
    this.abortController = abortController;
    let U = !1,
      timeout_ms_2 = Math.min(typeof this.connectTimeoutMs === "function" ? this.connectTimeoutMs() : this.connectTimeoutMs, Hu),
      R = timeout_ms_2 > 0 ? setTimeout(() => {
        U = !0, abortController.abort();
      }, timeout_ms_2) : void 0;
    try {
      let openSse = () => fetch(s.href, {
          headers: headers,
          signal: abortController.signal,
          ...ra({
            url: s.href
          })
        }),
        A;
      try {
        A = await (this.streamOpener ? this.streamOpener({
          url: s.href,
          headers: headers,
          signal: abortController.signal,
          openSse: openSse
        }) : openSse());
      } catch (error) {
        if (abortController.signal.aborted && !U) return;
        throw error;
      } finally {
        clearTimeout(R), e?.();
      }
      if (U) throw Error("the connect deadline fired as the response arrived");
      if (!A.ok) {
        let D = A.status === 403 ? LFt(ue => A.headers.get(ue)) : void 0;
        if (await Nz(A, {
          timeoutMs: timeoutMs
        }), abortController.signal.aborted) return;
        let G = (this.nonOriginPolicy?.now ?? Date.now)(),
          z = this.advanceNonOriginStreak(D, G),
          retried = z !== null && this.nonOriginPolicy !== void 0 && G - z.startedAtMs < this.nonOriginPolicy.windowMs,
          de = sr.has(A.status) && !retried;
        if (t(`SSETransport: HTTP ${A.status}${de ? " (permanent)" : ""}${D ? ` source=${D}` : ""}${retried ? ` (not origin \u2014 retrying; attempt ${z?.attempts})` : ""}`, {
          level: "error"
        }), X("error", "cli_sse_connect_http_error", {
          status: A.status,
          ...(D !== void 0 && {
            source: D
          }),
          ...(z !== null && {
            retried: retried
          })
        }), this.connectErrorsSeen.add(`http_${A.status}`), this.diagConnectFailure(`HTTP ${A.status}${de ? " (permanent)" : ""}`, n), de) {
          this.nonOriginStreak = null, this.state = "closed", this.emitClose(A.status, D === void 0 ? void 0 : z === null ? {
            rejectSource: D
          } : {
            rejectSource: z.source,
            streak: {
              source: z.source,
              attempts: z.attempts,
              streakMs: G - z.startedAtMs
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
      if (!A.body) {
        t("SSETransport: No response body"), this.connectErrorsSeen.add("no_response_body"), this.diagConnectFailure("no response body", n), this.handleConnectionError();
        return;
      }
      if (this.requireStreamEvidence) {
        let D = yt(A.headers.get("content-type"));
        if (D !== "event-stream") {
          let accepted = A.headers.has(p8t) || A.headers.has(NMn);
          if (!accepted) {
            if (await Nz(A, {
              timeoutMs: timeoutMs
            }), abortController.signal.aborted) return;
          }
          let z = `HTTP ${A.status}, content_type=${D}, ${accepted ? "with" : "without"} a session service header`;
          if (t(`SSETransport: ${z}: ${accepted ? "taken as the stream" : "a failed connect"}`, {
            level: accepted ? "warn" : "error"
          }), X(accepted ? "warn" : "error", "cli_sse_connect_unexpected_content_type", {
            status: A.status,
            content_type: D,
            accepted: accepted
          }), this.onUnexpectedContentType?.({
            status: A.status,
            contentType: D,
            accepted: accepted
          }), !accepted) {
            this.connectErrorsSeen.add("no_stream_evidence"), this.diagConnectFailure(`${z}: a proxy or gateway may have answered in place of the server`, n), this.handleConnectionError();
            return;
          }
        }
      }
      let duration_ms = Date.now() - n,
        serviceMs = Date.parse(A.headers.get("date") ?? "");
      if (!Number.isNaN(serviceMs)) this.serviceClockAtConnect = {
        serviceMs: serviceMs,
        wallMs: Date.now(),
        monotonicMs: performance.now()
      };
      if (this.advertisedMaxIntervalSeconds !== void 0) {
        let D = Number(A.headers.get(Vso));
        if (Number.isInteger(D) && D > 0) this.echoedIntervalSeconds = At(D);
      }
      let B = this.workerAttestationPolicySink === void 0 ? void 0 : Tt(A.headers.get(NMn));
      this.connectionPolicyReading = B;
      let q = A.headers.get(p8t),
        writers = kcs(q),
        x = writers === void 0 ? void 0 : {
          writers: writers,
          statedAtMs: Date.now()
        };
      if (this.connectionSessionWriters = x, B !== void 0) {
        if (this.workerAttestationPolicySink?.(B), abortController.signal.aborted) return;
      }
      let j = this.advertisedMaxIntervalSeconds === void 0 ? "" : ` keepalive_interval=${this.keepaliveIntervalMs() / 1000}s${this.echoedIntervalSeconds === void 0 ? " (no echo)" : ""}`;
      if (t("SSETransport: Connected" + j), X("info", "cli_sse_connect_connected", {
        duration_ms: duration_ms,
        ...this.keepaliveDiagnosticFields(),
        session_writers: writers ?? (q === null ? "header_absent" : "header_unreadable"),
        ...(B !== void 0 && {
          attestation_policy: B.policy === void 0 ? "none" : B.policy.enforce ? "enforce" : "observe",
          ...(B.fault !== void 0 && {
            attestation_policy_fault: B.fault
          })
        })
      }), this.reconnectAttempts === 0) kr("sse_connect_ms", duration_ms, n - performance.timeOrigin);
      if (this.reconnectAttempts > 0) {
        let D = this.reconnectStartTime ? Math.round((Date.now() - this.reconnectStartTime) / 1000) : 0;
        this.onDiagnostic?.(`SSE reconnected after ${this.reconnectAttempts} attempt(s), ${D}s downtime` + (this.connectErrorsSeen.size > 0 ? `, errors=[${[...this.connectErrorsSeen].join(",")}]` : ""), "warn", "sse_recovered");
      } else this.onDiagnostic?.(`SSE connected in ${duration_ms}ms`, "info", "sse_connected");
      this.connectErrorsSeen.clear();
      let hasEverConnected = this.hasEverConnected;
      this.hasEverConnected = !0, this.state = "connected", this.reconnectAttempts = 0, this.reconnectStartTime = null, this.resetLivenessTimer();
      let P = ir.test(A.headers.get("content-type") ?? "");
      if (hasEverConnected) try {
        this.onReconnected?.();
      } catch (error) {
        t(`SSETransport: onReconnected handler threw: ${d(error)}`, {
          level: "error"
        }), X("error", "cli_sse_reconnected_handler_threw");
      }
      if (this.isHeldForRenewal) {
        if (this.deliverHeldForRenewal(x), abortController.signal.aborted) return;
      }
      await this.readStream(A.body, P, x);
    } catch (error) {
      if (U) {
        t(`SSETransport: No response within ${timeout_ms_2}ms, reconnecting`, {
          level: "error"
        }), X("error", "cli_sse_connect_timeout", {
          timeout_ms: timeout_ms_2
        }), this.connectErrorsSeen.add("connect_timeout"), this.diagConnectFailure(`no response in ${timeout_ms_2 / 1000}s`, n), this.handleConnectionError();
        return;
      }
      t(`SSETransport: Connection error: ${d(error)}`, {
        level: "error"
      }), X("error", "cli_sse_connect_error"), this.connectErrorsSeen.add("fetch_failed"), this.diagConnectFailure(d(error), n), this.handleConnectionError();
    }
  }
  advanceNonOriginStreak(source_2, n) {
    let nonOriginPolicy = this.nonOriginPolicy;
    if (nonOriginPolicy === void 0 || source_2 === void 0) return null;
    if (!cje(source_2)) return this.nonOriginStreak = null, null;
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
      streakMs: (this.nonOriginPolicy?.now ?? Date.now)() - nonOriginStreak_2.startedAtMs
    };
    X("info", "cli_sse_nonorigin_403_recovered", {
      source: n.source,
      attempts: n.attempts,
      streak_ms: n.streakMs
    });
    try {
      this.nonOriginPolicy?.onRecovered?.(n);
    } catch (error) {
      t(`SSETransport: onRecovered handler threw: ${d(error)}`, {
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
      S = this.connectErrorsSeen.size > 1 ? `, errors=[${[...this.connectErrorsSeen].join(",")}]` : "";
    this.onDiagnostic(`SSE connect failed (${e}) attempt=${r} took=${s}ms${h}${S}`, "warn", "sse_connect_failed");
  }
  async readStream(e, n, r) {
    let s = e.getReader(),
      h = new V4e(),
      abortController_2 = this.abortController,
      E = () => abortController_2 !== null && this.endedForRenewal.has(abortController_2),
      y = n && a.CLAUDE_CODE_DIAGNOSTICS_FILE ? new Ie(h) : null;
    try {
      while (!0) {
        let {
          done: done,
          value: value
        } = await s.read();
        if (done) break;
        let R = h.push(value);
        y?.observe(value.byteLength, R);
        for (let O of R) {
          if (!E()) this.resetLivenessTimer(), this.lastFrameReadAtMs = this.lastLivenessEvidenceAtMs;
          if (this.nonOriginStreak !== null && n) this.settleNonOriginStreakRecovered();
          if (O.id && O.event !== "ephemeral_event") {
            let A = parseInt(O.id, 10);
            if (!isNaN(A)) {
              if (this.seenSequenceNums.has(A)) t(`SSETransport: DUPLICATE frame seq=${A} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`, {
                level: "warn"
              }), X("warn", "cli_sse_duplicate_sequence");else if (this.seenSequenceNums.add(A), this.seenSequenceNums.size > 1000) {
                let I = this.lastSequenceNum - 200;
                for (let H of this.seenSequenceNums) if (H < I) this.seenSequenceNums.delete(H);
              }
              if (A > this.lastSequenceNum) this.lastSequenceNum = A;
            }
          }
          if (O.event && O.data) this.handleSSEFrame(O.event, O.data, r);else if (O.data) t("SSETransport: Frame has data: but no event: field \u2014 dropped", {
            level: "warn"
          }), X("warn", "cli_sse_frame_missing_event_field");
        }
      }
    } catch (error) {
      if (this.abortController?.signal.aborted || E()) return;
      t(`SSETransport: Stream read error: ${d(error)}`, {
        level: "error"
      }), X("error", "cli_sse_stream_read_error");
    } finally {
      y?.stop(), s.releaseLock();
    }
    if (this.state !== "closing" && this.state !== "closed" && !E()) {
      if (t("SSETransport: Stream ended, reconnecting"), this.state === "connected") this.connectErrorsSeen.add("stream_ended"), this.onDiagnostic?.("SSE stream ended by server, reconnecting", "warn", "sse_stream_ended");
      this.handleConnectionError();
    }
  }
  handleSSEFrame(e, data, sessionWriters, receivedWallMs = Date.now(), receivedAtMs = performance.now()) {
    if (this.mostMembersInAFrame !== void 0 && Yfe(data, this.mostMembersInAFrame) === void 0) {
      let y = this.lighterFrame?.(data);
      if (y !== void 0 && Yfe(y, this.mostMembersInAFrame) !== void 0) {
        this.handleSSEFrame(e, y, sessionWriters, receivedWallMs, receivedAtMs);
        return;
      }
      this.onFrameRefused?.(pr.exec(Qie(data, hr)?.get("event_id") ?? "")?.[1]);
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
      }), X("warn", "cli_sse_unexpected_event_type", {
        event_type: e
      });
      return;
    }
    let S;
    try {
      S = J(data);
    } catch (error) {
      t(`SSETransport: Failed to parse client_event data: ${d(error)}`, {
        level: "error"
      });
      return;
    }
    let payload_6 = S.payload;
    if (payload_6 && typeof payload_6 === "object" && "type" in payload_6) {
      let y = this.sessionId ? ` session=${this.sessionId}` : "",
        U = S.device_attestation_status ? ` attestation=${S.device_attestation_status}` : "";
      if (t(`SSETransport: Event seq=${S.sequence_num} event_id=${S.event_id} event_type=${S.event_type} payload_type=${String(payload_6.type)}${U}${y}`), X("info", "cli_sse_message_received"), sessionWriters !== void 0 && this.state === "connected" && this.statementRenewalGate?.(S, sessionWriters) === !0) {
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
      if (sessionWriters !== void 0) this.frameSessionWriters.set(S, sessionWriters);
      let decision = this.eventFilter?.(S);
      if (decision) X("warn", "cli_sse_event_filtered", decision === !0 ? void 0 : {
        decision: decision
      });else if (typeof payload_6.type === "string" && qso.has(payload_6.type) && S.event_type !== payload_6.type) X("warn", "cli_sse_server_only_event_type_mismatch", {
        event_type: S.event_type,
        payload_type: payload_6.type
      }), this.onEventVetoed?.(S);else if (payload_6.type === "control_request" && S.source === "worker") X("warn", "cli_sse_worker_control_request_dropped");else {
        if (this.onDeliveredCallback?.(S, sessionWriters, receivedAtMs), payload_6.type === "user" && typeof payload_6.uuid === "string") this.onUserFrameReceived?.(payload_6.uuid, receivedWallMs, S.processing_at, receivedAtMs);
        this.onData?.(_(S.payload) + `
`);
      }
    } else t(`SSETransport: Ignoring client_event with no type in payload: event_id=${S.event_id}`);
    this.onEventCallback?.(S);
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
    if (t("SSETransport: Renewing the connection"), X("info", "cli_sse_renew_connection"), this.refreshHeaders) {
      let e = this.refreshHeaders();
      Object.assign(this.headers, e), Pe(this.headers, e);
    }
    if (this.clearLivenessTimer(), this.abortController !== null) this.endedForRenewal.add(this.abortController), this.abortController.abort(dOMException_2), this.abortController = null;
    this.state = "reconnecting", this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, 0);
  }
  setStatementRenewalGate(e) {
    this.statementRenewalGate = e;
  }
  deliverHeldForRenewal(e) {
    this.isHeldForRenewal = !1;
    for (let n of this.held?.frames ?? []) n.sessionWriters = e;
    this.startDelivery();
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
      this.handleSSEFrame(r.eventType, r.data, r.sessionWriters, r.receivedWallMs, r.receivedAtMs);
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
      t(`SSETransport: Failed to parse ephemeral_event data: ${d(error)}`, {
        level: "error"
      });
      return;
    }
    let r = dr().safeParse(n);
    if (r.success && r.data.event_type === cr && this.onOwnerPresent !== void 0) {
      X("info", "cli_sse_owner_present_received");
      try {
        this.onOwnerPresent();
      } catch (error) {
        t(`SSETransport: onOwnerPresent handler threw: ${d(error)}`, {
          level: "error"
        });
      }
      return;
    }
    if (!r.success || r.data.event_type !== ur) {
      X("warn", "cli_sse_unexpected_ephemeral_type", {
        event_type: r.success ? r.data.event_type : "unparseable"
      });
      return;
    }
    X("info", "cli_sse_heartbeat_probe_received");
    try {
      this.onHeartbeatProbe?.();
    } catch (error) {
      t(`SSETransport: onHeartbeatProbe handler threw: ${d(error)}`, {
        level: "error"
      }), X("error", "cli_sse_heartbeat_probe_handler_threw");
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
      let s = this.refreshHeaders();
      Object.assign(this.headers, s), Pe(this.headers, s), t("SSETransport: Refreshed headers for reconnect");
    }
    this.state = "reconnecting", this.reconnectAttempts++;
    let r = Ay({
      attempt: this.reconnectAttempts,
      baseMs: baseMs,
      capMs: capMs,
      jitter: {
        kind: "symmetric",
        ratio: 0.25
      }
    });
    t(`SSETransport: Reconnecting in ${Math.round(r)}ms (attempt ${this.reconnectAttempts}, ${Math.round(n / 1000)}s elapsed)`), X("error", "cli_sse_reconnect_attempt", {
      reconnectAttempts: this.reconnectAttempts
    }), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, r);
  }
  onLivenessTimeout = () => {
    this.livenessTimer = null, t("SSETransport: Liveness timeout, reconnecting", {
      level: "error"
    }), X("error", "cli_sse_liveness_timeout", this.keepaliveDiagnosticFields()), this.connectErrorsSeen.add("liveness_timeout"), this.onDiagnostic?.(`SSE liveness timeout \u2014 no frame in ${this.livenessTimeoutMs() / 1000}s, reconnecting`, "warn", "sse_liveness_timeout"), this.abortController?.abort(dOMException), this.handleConnectionError();
  };
  resetLivenessTimer() {
    this.lastLivenessEvidenceAtMs = Date.now(), this.clearLivenessTimer(), this.livenessTimer = setTimeout(this.onLivenessTimeout, this.livenessTimeoutMs());
  }
  keepaliveIntervalMs() {
    return (this.echoedIntervalSeconds ?? this.advertisedMaxIntervalSeconds ?? Oe) * 1000;
  }
  livenessTimeoutMs() {
    return this.keepaliveIntervalMs() + tr;
  }
  keepaliveDiagnosticFields() {
    return this.advertisedMaxIntervalSeconds === void 0 ? {} : {
      keepalive_tolerance_s: Mt * this.advertisedMaxIntervalSeconds,
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
      t("SSETransport: No session token available for POST"), X("warn", "cli_sse_post_no_token");
      return;
    }
    let headers_2 = {
      ...n,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": kh(),
      "User-Agent": hs()
    };
    t(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
    for (let attempt = 1; attempt <= te; attempt++) {
      try {
        let h = await Ct.post(this.postUrl, e, {
          headers: headers_2,
          validateStatus: validateStatus
        });
        if (h.status === 200 || h.status === 201) {
          t(`SSETransport: POST success type=${e.type}`);
          return;
        }
        if (t(`SSETransport: POST ${h.status} body=${_(h.data).slice(0, 200)}`), h.status >= 400 && h.status < 500 && h.status !== 429) {
          t(`SSETransport: POST returned ${h.status} (client error), not retrying`), X("warn", "cli_sse_post_client_error", {
            status: h.status
          });
          return;
        }
        t(`SSETransport: POST returned ${h.status}, attempt ${attempt}/${te}`), X("warn", "cli_sse_post_retryable_error", {
          status: h.status,
          attempt: attempt
        });
      } catch (error) {
        t(`SSETransport: POST error: ${d(error)}, attempt ${attempt}/${te}`), X("warn", "cli_sse_post_network_error", {
          attempt: attempt
        });
      }
      if (attempt === te) {
        t(`SSETransport: POST failed after ${te} attempts, continuing`), X("warn", "cli_sse_post_retries_exhausted");
        return;
      }
      await Y(Ay({
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
    return this.keepaliveIntervalMs() + nr;
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
  setOnDeviceStatusPublished(e) {
    this.onDeviceStatusPublished = e;
  }
  setOnReconnected(e) {
    this.onReconnected = e;
  }
  close() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.clearLivenessTimer(), this.state = "closing", this.nonOriginStreak = null, this.held = null, this.isHeldForRenewal = !1, this.abortController?.abort(), this.abortController = null;
  }
  [Symbol.dispose]() {
    this.close();
  }
}
function Pe(e, n) {
  if (n.Cookie) delete e.Authorization;
  if (n.Authorization) delete e.Cookie, delete e["X-Organization-Uuid"];
}
function At(e) {
  return Math.min(Math.max(e, Oe), er);
}
function fr(e) {
  let pathname = e.pathname;
  if (pathname.endsWith("/stream")) pathname = pathname.slice(0, -7);
  return `${e.protocol}//${e.host}${pathname}`;
}
var windowMs = 180000,
  maxGapMs = 90000;
async function Yso(e) {
  let {
      sessionUrl: sessionUrl,
      ingressToken: ingressToken,
      sessionId: sessionId_2,
      initialSequenceNum: initialSequenceNum_2,
      getAuthToken: getAuthToken
    } = e,
    E = () => e.inboundReadReceipts?.() === !0,
    getAuthHeaders_3;
  if (getAuthToken) getAuthHeaders_3 = () => JEe(getAuthToken());else L5n(ingressToken);
  let U = e.epoch ?? (await wit(sessionUrl, ingressToken));
  t(`[bridge:repl] CCR v2: worker sessionId=${sessionId_2} epoch=${U}${e.epoch !== void 0 ? " (from /bridge)" : " (via registerWorker)"}`);
  let w = new URL(sessionUrl);
  w.pathname = w.pathname.replace(/\/$/, "") + "/worker/events/stream";
  let R = new FMn(w, {}, {
      sessionId: sessionId_2,
      initialSequenceNum: initialSequenceNum_2,
      getAuthHeaders: getAuthHeaders_3,
      connectTimeoutMs: e.sseConnectTimeoutMs,
      sseKeepaliveMaxIntervalSeconds: e.sseKeepaliveMaxIntervalSeconds
    }),
    O = !e.outboundOnly,
    A = (e.selfHealHeartbeats ?? !1) && O,
    I = (e.nonOrigin403Retry ?? !1) && O,
    nonOrigin403Transient_2 = I && A;
  if (I) R.setNonOriginRejectionPolicy({
    windowMs: windowMs,
    maxGapMs: maxGapMs,
    onRecovered: e.onNonOriginRejectionRecovered
  });
  let B,
    q = !1;
  function L(P, D, G) {
    if (q) return;
    q = !0;
    try {
      x.close({
        goodbye: !1,
        retainUndeliveredClientEvents: e.retainUndeliveredOnClose === !0
      }), R.close();
    } catch (error) {
      l(error);
    }
    try {
      B?.(P, D, G);
    } catch (error) {
      l(error);
    }
  }
  let x = new KF(R, new URL(sessionUrl), {
    getAuthHeaders: getAuthHeaders_3,
    heartbeatIntervalMs: e.heartbeatIntervalMs,
    heartbeatJitterFraction: e.heartbeatJitterFraction,
    advertiseHeartbeatProbeSupport: (e.advertiseHeartbeatProbeSupport ?? !1) && O,
    uploadTrim: e.uploadTrim,
    uploadHoldMarker: e.uploadHoldMarker,
    eventHoldEnabled: e.eventHoldEnabled,
    ...(e.processExiting && {
      processExiting: e.processExiting
    }),
    beatOnStaleReconnect: (e.beatOnStaleReconnect ?? !1) && O,
    idleTracker: e.idleTracker,
    beatOnReactivation: (e.beatOnReactivation ?? !1) && O,
    skipRedundantHeartbeats: e.skipRedundantHeartbeats,
    streamEventFlushIntervalMs: e.streamEventFlushIntervalMs,
    streamEventFirstFlushMs: e.streamEventFirstFlushMs,
    gzipRequestBodyFetch: e.gzipRequestBodyFetch,
    noSubscriberStreamEventFlushIntervalMs: e.noSubscriberStreamEventFlushIntervalMs,
    noSubscriberUploadHoldMs: e.noSubscriberUploadHoldMs,
    dropUnwatchedStreamEvents: e.dropUnwatchedStreamEvents,
    nonOrigin403Transient: nonOrigin403Transient_2,
    internalEventUploader: e.internalEventUploader,
    onEpochMismatch: P => {
      let D = e.causeTypedCloseCodes ? $fr[P] : 4090;
      throw t(`[bridge:repl] CCR v2: terminal request-path condition (${P}) \u2014 closing with ${D} for ${D === 4094 ? "auth recovery" : "poll-loop recovery"}`), L(D, P), Error("terminal request-path condition");
    },
    onRequestAuthOk: e.onRequestAuthOk,
    ...(A && {
      onHeartbeatLost: () => {
        if (q) return;
        t("[bridge:repl] CCR v2: heartbeats failing while SSE healthy \u2014 closing for transport rebuild", {
          level: "warn"
        }), L(4093);
      }
    })
  });
  R.setOnEvent(P => {
    if (e.processExiting?.() && Ae(P)) return;
    if (x.reportDelivery(P.event_id, "received"), !(E() && xMs(P.event_id))) x.reportDelivery(P.event_id, "processed");
  }), R.setEventFilter(P => {
    if (GKn(P)) return !0;
    return E() ? PMs(P) : !1;
  });
  let j,
    W = !1;
  return {
    write(P) {
      return x.writeEvent(P);
    },
    writeBatch(P) {
      return x.writeEvents(P);
    },
    close(P) {
      if (q = !0, x.close({
        goodbye: P?.goodbye,
        retainUndeliveredClientEvents: P?.retainUndelivered
      }), !P?.retainUndelivered) x.discardUndeliveredClientEvents();
      R.close();
    },
    takeUndeliveredEvents() {
      return x.takeUndeliveredClientEvents();
    },
    discardUndeliveredEvents() {
      return x.discardUndeliveredClientEvents();
    },
    adoptUndeliveredEvents(P) {
      x.adoptClientEvents(P);
    },
    flushGoodbye() {
      return x.flushGoodbye();
    },
    isConnectedStatus() {
      return W;
    },
    getStateLabel() {
      if (R.isClosedStatus()) return "closed";
      if (R.isConnectedStatus()) return W ? "connected" : "init";
      return "connecting";
    },
    setOnData(P) {
      R.setOnData(P);
    },
    setOnClose(P) {
      B = P, R.setOnClose((D, G) => {
        L(D ?? 4092, void 0, G);
      });
    },
    setOnConnect(P) {
      j = P;
    },
    getLastSequenceNum() {
      return R.getLastSequenceNum();
    },
    lastFrameReadAt() {
      return R.lastFrameReadAt();
    },
    getEpoch() {
      return U;
    },
    reportState(P, D) {
      x.reportState(P, D);
    },
    reportMetadata(P) {
      x.reportMetadata(P);
    },
    reportInternalMetadata(P) {
      if (q) return !1;
      return x.reportInternalMetadata(P), !0;
    },
    droppedDurableBatchCount() {
      return x.droppedDurableBatches;
    },
    flushWorkerState() {
      return x.flushWorkerState();
    },
    droppedWorkerStatePatchCount() {
      return x.droppedWorkerStatePatches;
    },
    reportDelivery(P, D) {
      x.reportDelivery(P, D);
    },
    setStreamEventFlushIntervalMs(P) {
      x.setStreamEventFlushIntervalMs(P);
    },
    setStreamEventFirstFlushMs(P) {
      x.setStreamEventFirstFlushMs(P);
    },
    setNoSubscriberStreamEventFlushIntervalMs(P) {
      x.setNoSubscriberStreamEventFlushIntervalMs(P);
    },
    setNoSubscriberUploadHoldMs(P) {
      x.setNoSubscriberUploadHoldMs(P);
    },
    setDropUnwatchedStreamEvents(P) {
      x.setDropUnwatchedStreamEvents(P);
    },
    setSubscribersReportedListener(P) {
      x.setSubscribersReportedListener(P);
    },
    mayHoldUploads() {
      return x.mayHoldUploads();
    },
    flush(P) {
      return x.flush(P);
    },
    flushDeliveryAcks(P) {
      return x.flushDeliveryAcks(P);
    },
    flushInternalEvents(P) {
      return x.flushInternalEvents(P);
    },
    getUploadBacklog() {
      return x.uploadBacklog();
    },
    getInternalEventBacklog() {
      return {
        pending: x.internalEventsPending,
        droppedBatches: x.droppedInternalBatches
      };
    },
    trackFirstFrameUpload(P) {
      return x.trackFirstFrameUpload(P);
    },
    getInternalEventWriter() {
      return (P, D, G) => x.writeInternalEvent(P, D, G);
    },
    getInternalEventReaders() {
      return {
        readMain: P => P ? x.readInternalEventsForCatchUp(P) : x.readInternalEvents(),
        readSubagents: () => x.readSubagentInternalEvents(),
        readSubagent: (P, D) => x.readAgentInternalEvents(P, D)
      };
    },
    getInternalEventsPort() {
      return {
        epoch: () => x.getWorkerEpoch(),
        postBatch: (P, D) => x.postInternalEventsBatch(P, D),
        listPage: (P, D) => x.getInternalEventsPage(P, D)
      };
    },
    connect() {
      x.initialize(U).then(P => {
        if (q) return;
        if (W = !0, t(`[bridge:repl] v2 transport ready for writes (epoch=${U}); opening the read stream`), j?.(P), !e.outboundOnly && !q) R.connect();
      }, P => {
        t(`[bridge:repl] CCR v2 initialize failed: ${d(P)}`, {
          level: "error"
        }), L(4091);
      });
    }
  };
}
export { cap as pAt, fAt, zFe, _cs, $fr, jso, Ufr, KF, Wso, LMn, Bfr, NMn, dOMException as zso, dOMException_2 as Gso, Vso, qso, FMn, windowMs as Kso, Yso };