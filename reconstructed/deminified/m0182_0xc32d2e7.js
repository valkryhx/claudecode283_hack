// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Nt, j, Qd } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { but, WMo, x, Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { GI, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { bb } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { uc } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { bC, df, xy } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { my } from "B:/~BUN/root/chunk-ew8y0fm0.js";
import { Fm } from "B:/~BUN/root/chunk-dfh5rt4g.js";
import { o, E, u, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { pd } from "B:/~BUN/root/chunk-tndjj29v.js";
function C() {
  return new WeakMap();
}
function jRo(e, r, n) {
  let s = e.get(r);
  if (s?.fired) return {
    kind: "already_fired"
  };
  let inputTokens = n?.input_tokens ?? 0,
    cacheReadTokens = n?.cache_read_input_tokens ?? 0,
    m = n?.cache_creation_input_tokens ?? 0,
    y = (n?.cache_creation?.ephemeral_5m_input_tokens ?? 0) + (n?.cache_creation?.ephemeral_1h_input_tokens ?? 0),
    cacheCreationTokens = m > 0 ? m : y;
  if (inputTokens + cacheReadTokens + cacheCreationTokens <= 0) return {
    kind: "no_usage"
  };
  if (inputTokens < 20000 || cacheCreationTokens >= 0.1 * inputTokens) {
    let R = s ?? {
      consecutive: 0,
      fired: !1,
      okEmitted: !1
    };
    if (!s) e.set(r, R);
    if (R.consecutive = 0, !R.okEmitted && cacheReadTokens + cacheCreationTokens > 0) return R.okEmitted = !0, {
      kind: "confirm"
    };
    return {
      kind: "healthy"
    };
  }
  let g = s ?? {
    consecutive: 0,
    fired: !1,
    okEmitted: !1
  };
  if (!s) e.set(r, g);
  if (g.consecutive++, g.consecutive >= 3) return g.fired = !0, {
    kind: "fire",
    consecutive: g.consecutive,
    inputTokens: inputTokens,
    cacheReadTokens: cacheReadTokens,
    cacheCreationTokens: cacheCreationTokens
  };
  return {
    kind: "counted",
    consecutive: g.consecutive
  };
}
var rDt = "root";
function IF(e) {
  return e ?? "root";
}
var max = 256;
class B {
  promptCacheBreak = {
    previousStateBySource: new Map(),
    hydrationAttempted: !1,
    pendingPersist: Promise.resolve(),
    latestQueuedPersist: null,
    hashSalt: null,
    summaryForks: new Map(),
    classifierLines: new Map(),
    classifierCompactions: new Map()
  };
  threadDecisionTracker = void 0;
  threadInheritedFields = {
    storedToolsHashByThread: new Map(),
    breakerTripped: !1
  };
  threadDropRecreate = new Map();
  dumpPrompts = {
    recentRequests: [],
    stateByAgent: new Map(),
    appendQueue: Fm()
  };
  requestReplay = {
    chains: new Map(),
    unrecordableShapes: new Set()
  };
  lastIngressUuidBySession = new Map();
  cacheCoverage = C();
  gzipRequestBody = {
    latchedOff: !1,
    rejectedThisProcess: !1,
    persistedLatchChecked: !1,
    persistedLatchInEffect: !1,
    telemetryByClientRequestId: new pd({
      max: max
    }),
    ccrWorkerSkipReasonsLogged: new Set()
  };
  sentPrefix = {
    ledger: void 0,
    mode: void 0,
    persist: Promise.resolve(),
    persisted: void 0,
    pendingSeed: void 0,
    lastReport: new WeakMap(),
    lastVerdict: new WeakMap(),
    renderEpochs: new WeakMap(),
    announced: new WeakMap(),
    excuse: new WeakMap(),
    staged: new WeakMap(),
    boundVerdict: new WeakMap()
  };
  bindingDrops = {
    seenBlocks: void 0,
    threadsRead: new pd({
      max: 512
    })
  };
  foreignThinkingKeep = void 0;
  streamFirstByteArmedRequestIds = new pd({
    max: 64
  });
  skillHealthMap = void 0;
  firedOnceKeys = new Set();
  hasFired(e) {
    return this.firedOnceKeys.has(e);
  }
  markFired(e) {
    this.firedOnceKeys.add(e);
  }
  once(e) {
    if (this.firedOnceKeys.has(e)) return !1;
    return this.firedOnceKeys.add(e), !0;
  }
  resetStreamNoEventsWarningLatch() {
    this.firedOnceKeys.delete("stream_no_events_fallback_warning");
  }
}
var M = new Nt(() => new B());
function Qi() {
  return M.of(j());
}
var ROr = new Set(["clear", "resume", "spare_claim", "remote_attach"]);
function WRo() {
  return Qd((e, r) => {
    if (r === "cd" || r === "hydrate") return;
    let n = Qi();
    if (n.resetStreamNoEventsWarningLatch(), ROr.has(r)) n.threadDropRecreate.delete(rDt);
  });
}
var N = "tengu_atomic_ocean",
  U = "tengu_gzip_request_bodies",
  W = "tengu_gentle_hammock",
  K = "tengu_golden_popcorn",
  H = 4096,
  V = 1024,
  Q = 604800000,
  Y = 8192;
function Z(e) {
  if (e === "ccr_worker") return x(W, !1);
  return x(N, !1) || x(U, !1);
}
function zRo() {
  let e = a.CLAUDE_CODE_GZIP_REQUEST_BODY_LEVEL ?? x(K, 0);
  return Number.isInteger(e) && e >= 1 && e <= 9 ? e : void 0;
}
function v(e) {
  return e === "ccr_worker" ? a.CLAUDE_CODE_GZIP_CCR_REQUEST_BODIES : a.CLAUDE_CODE_GZIP_REQUEST_BODIES;
}
function X(e) {
  return e === "ccr_worker" ? V : H;
}
function ee(e) {
  if (a.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (df() !== void 0 && !xy(e)) return "proxy";
  let r = bC();
  if (r?.cert !== void 0 || r?.key !== void 0) return "mtls";
  if (a.NODE_EXTRA_CA_CERTS) {
    let n = my();
    if (!(uc() || a.CLAUDE_CODE_ENTRYPOINT === "local-agent" && (n === void 0 || n.NODE_EXTRA_CA_CERTS !== void 0))) return "custom_ca";
  }
  return;
}
function Tlt(e, r, n, s = "api") {
  if (!bb(e)) return;
  let bodyChars = typeof r === "string" ? r.length : void 0,
    l = v(s);
  if (l === !1) return {
    gzip: !1,
    reason: "env_off",
    bodyChars: bodyChars
  };
  if (!GI()) return {
    gzip: !1,
    reason: "not_bun_runtime",
    bodyChars: bodyChars
  };
  if (bodyChars === void 0) return {
    gzip: !1,
    reason: "non_string_body",
    bodyChars: bodyChars
  };
  if (bodyChars < X(s)) return {
    gzip: !1,
    reason: "below_min_size",
    bodyChars: bodyChars
  };
  if (l === !0) return Qi().gzipRequestBody.rejectedThisProcess ? {
    gzip: !1,
    reason: "latched_off",
    bodyChars: bodyChars
  } : {
    gzip: !0,
    bodyChars: bodyChars
  };
  let reason = ee(e);
  if (reason !== void 0) return {
    gzip: !1,
    reason: reason,
    bodyChars: bodyChars
  };
  if (!Z(s)) return {
    gzip: !1,
    reason: "flag_off",
    bodyChars: bodyChars
  };
  if (ce(n)) return {
    gzip: !1,
    reason: "latched_off",
    bodyChars: bodyChars
  };
  return {
    gzip: !0,
    bodyChars: bodyChars
  };
}
var te = f(() => u({
    type: A("error"),
    error: u({
      type: o(),
      message: o()
    })
  })),
  P = f(() => u({
    latchedAt: E().finite(),
    status: E()
  })),
  re = f(() => u({
    error: o(),
    reason: o()
  })),
  ne = ["The request body is not valid JSON", "Failed to parse request: could not parse request body as JSON"],
  q = /^bad json: (?:invalid character |unexpected EOF$|unexpected end of JSON input$|EOF$)/;
function facts_2(e) {
  return {
    status: e.status,
    header: r => e.headers.get(r) ?? void 0,
    bodyText: () => se(e)
  };
}
function oe(e) {
  return (e.header("request-id")?.startsWith("req_") ?? !1) || e.header("cf-ray") !== void 0;
}
async function se(e) {
  let r = e.clone().body?.getReader();
  if (!r) return "";
  let textDecoder = new TextDecoder(),
    s = "",
    d = Y;
  try {
    while (d > 0) {
      let {
        done: done,
        value: value
      } = await r.read();
      if (done) break;
      let y = value.subarray(0, d);
      d -= y.byteLength, s += textDecoder.decode(y, {
        stream: !0
      });
    }
  } catch {} finally {
    r.cancel().catch(() => {});
  }
  return s;
}
function ie(e) {
  let r;
  try {
    r = J(e);
  } catch {
    return q.test(e.trimEnd());
  }
  let n = te().safeParse(r);
  if (n.success) return ne.some(item => n.data.error.message.startsWith(item));
  let s = re().safeParse(r);
  return s.success && s.data.reason === "bad_json" && q.test(s.data.error);
}
async function b(e) {
  if (e.status !== 400 && e.status !== 403 && e.status !== 415) return null;
  if (!oe(e)) return "non_anthropic_rejection";
  if (e.status === 400 && ie(await e.bodyText())) return "invalid_json_at_origin";
  return null;
}
async function ae(e) {
  if (e.ok) return null;
  return b(facts_2(e));
}
async function de(e) {
  if ((await b(e)) !== null) return "same_rejection";
  return e.header("request-id")?.startsWith("req_") ? "api_response" : "not_api_response";
}
function ue() {
  let e;
  try {
    e = le().gzipRequestBodiesLatchedOff;
  } catch {
    return "unavailable";
  }
  if (e === void 0) return;
  let r = P().safeParse(e);
  return r.success ? r.data : "malformed";
}
function T(e, r) {
  Ee(n => {
    let s = P().safeParse(n.gzipRequestBodiesLatchedOff);
    return (s.success ? s.data.latchedAt === e : n.gzipRequestBodiesLatchedOff !== void 0) ? {
      ...n,
      gzipRequestBodiesLatchedOff: void 0
    } : n;
  }, r);
}
function ce(e) {
  let gzipRequestBody = Qi().gzipRequestBody;
  if (gzipRequestBody.latchedOff) return !0;
  if (gzipRequestBody.persistedLatchChecked) return !1;
  let n = ue();
  if (n === "unavailable") return !1;
  if (gzipRequestBody.persistedLatchChecked = !0, n === void 0) return !1;
  if (n === "malformed") return T(void 0, e), i("tengu_gzip_request_body_latch_cleared", {
    reason: c("malformed")
  }), !1;
  let s = Date.now() - n.latchedAt;
  if (s >= 0 && s < Q) return gzipRequestBody.latchedOff = !0, gzipRequestBody.persistedLatchInEffect = !0, !0;
  return T(n.latchedAt, e), i("tengu_gzip_request_body_latch_cleared", {
    reason: s < 0 ? c("malformed") : c("expired"),
    latchedStatus: n.status,
    latchedAgeHours: Math.max(0, Math.round(s / 3600000))
  }), !1;
}
function S() {
  let gzipRequestBody_2 = Qi().gzipRequestBody;
  gzipRequestBody_2.latchedOff = !0, gzipRequestBody_2.rejectedThisProcess = !0, gzipRequestBody_2.persistedLatchChecked = !0;
}
function O({
  persist: persist,
  status: status,
  storageV5: storageV5,
  rollout = "api"
}) {
  S();
  let gzipRequestBody_3 = Qi().gzipRequestBody;
  if (persist && !gzipRequestBody_3.persistedLatchInEffect && v(rollout) !== !0) gzipRequestBody_3.persistedLatchInEffect = !0, Ee(l => ({
    ...l,
    gzipRequestBodiesLatchedOff: {
      latchedAt: Date.now(),
      status: status
    }
  }), storageV5);
  return gzipRequestBody_3.persistedLatchInEffect ? "persisted" : "process";
}
function w(e, r) {
  switch (e) {
    case "api":
      if (r === "fell_back") p("api_gzip_request_body", "fell_back");else if (Qi().once("gzip_request_body_ok")) _("api_gzip_request_body");
      return;
    case "ccr_worker":
      if (r === "fell_back") p("ccr_worker_gzip_request_body", "fell_back");else if (Qi().once("ccr_worker_gzip_request_body_ok")) _("ccr_worker_gzip_request_body");
      return;
    case "frame_publish":
      if (r === "fell_back") p("artifact_publish_gzip_request_body", "fell_back");else if (Qi().once("artifact_publish_gzip_request_body_ok")) _("artifact_publish_gzip_request_body");
      return;
  }
}
function oDt(e = "api") {
  w(e, "sent");
}
function pe(e, r) {
  if (e !== "ccr_worker") return;
  let ccrWorkerSkipReasonsLogged = Qi().gzipRequestBody.ccrWorkerSkipReasonsLogged;
  if (ccrWorkerSkipReasonsLogged.has(r.reason)) return;
  ccrWorkerSkipReasonsLogged.add(r.reason), i("tengu_gzip_request_body_skipped", {
    rollout: c(e),
    reason: c(r.reason),
    requestBodyChars: r.bodyChars
  });
}
function G({
  rejection: rejection,
  status: status_2,
  viaCloudflare: viaCloudflare,
  retryOutcome: retryOutcome,
  retryStatus: retryStatus,
  latched: latched,
  bodyChars: m,
  rollout: rollout_2 = "api"
}) {
  w(rollout_2, "fell_back"), t(`[API REQUEST] gzip request body rejected (rollout=${rollout_2} status=${status_2} kind=${rejection}); re-sent uncompressed \u2192 ${retryOutcome}${retryStatus !== void 0 ? ` status=${retryStatus}` : ""}; gzip latched off: ${latched}`, {
    level: "warn"
  }), i("tengu_gzip_request_body_fallback", {
    rollout: c(rollout_2),
    rejection: c(rejection),
    status: status_2,
    viaCloudflare: viaCloudflare,
    retryOutcome: c(retryOutcome),
    retryStatus: retryStatus,
    latched: c(latched),
    requestBodyChars: m
  });
}
async function I({
  rejection: rejection_2,
  first: first,
  resend: resend,
  facts: facts,
  aborted: aborted,
  bodyChars: bodyChars_2,
  storageV5: storageV5_2,
  rollout: rollout_3
}) {
  let h = {
      rejection: rejection_2,
      status: first.status,
      viaCloudflare: first.header("cf-ray") !== void 0,
      bodyChars: bodyChars_2,
      rollout: rollout_3
    },
    g;
  try {
    g = await resend();
  } catch (error) {
    throw G({
      ...h,
      retryOutcome: aborted() ? "aborted" : "network_error",
      retryStatus: void 0,
      latched: O({
        persist: !1,
        status: first.status,
        storageV5: storageV5_2,
        rollout: rollout_3
      })
    }), error;
  }
  let R = facts(g),
    retryOutcome_2 = await de(R),
    latched_2 = O({
      persist: rollout_3 !== "ccr_worker" && rejection_2 === "non_anthropic_rejection" && retryOutcome_2 === "api_response",
      status: first.status,
      storageV5: storageV5_2,
      rollout: rollout_3
    });
  return G({
    ...h,
    retryOutcome: retryOutcome_2,
    retryStatus: R.status,
    latched: latched_2
  }), g;
}
async function AOr({
  res: res,
  dispatch: dispatch,
  finalInit: finalInit,
  identityBody: s,
  clientRequestId: clientRequestId,
  storageV5: storageV5_3,
  rollout: rollout_4 = "api"
}) {
  let rejection_3 = await ae(res);
  if (rejection_3 === null) return res;
  S(), res.body?.cancel().catch(() => {});
  let {
      compress: compress,
      ...g
    } = finalInit,
    R = {
      ...g,
      body: s
    };
  if (clientRequestId !== void 0) xOr(clientRequestId, {
    requestBodyEncoding: "identity",
    requestBodyChars: s.length,
    gzipFallbackStatus: res.status
  });
  return I({
    rejection: rejection_3,
    first: facts_2(res),
    resend: () => dispatch(R),
    facts: facts_2,
    aborted: () => finalInit.signal?.aborted === !0,
    bodyChars: s.length,
    storageV5: storageV5_3,
    rollout: rollout_4
  });
}
async function GRo({
  answer: answer,
  facts: facts_3,
  resendIdentity: n,
  aborted: aborted_2,
  bodyChars: bodyChars_3,
  storageV5: storageV5_4,
  rollout: rollout_5
}) {
  let first_2 = facts_3(answer),
    rejection_4 = await b(first_2);
  if (rejection_4 === null) return answer;
  return S(), I({
    rejection: rejection_4,
    first: first_2,
    resend: n,
    facts: facts_3,
    aborted: aborted_2,
    bodyChars: bodyChars_3,
    storageV5: storageV5_4,
    rollout: rollout_5
  });
}
function Ran(rollout_6, storageV5_5) {
  return async (n, s, dispatch_2) => {
    let l = Tlt(n, s.body, storageV5_5, rollout_6);
    if (!l?.gzip) {
      if (l !== void 0) pe(rollout_6, l);
      return dispatch_2(s);
    }
    oDt(rollout_6);
    let finalInit_2 = {
        ...s,
        compress: "gzip",
        body: but(s.body)
      },
      res_2 = await dispatch_2(finalInit_2);
    return AOr({
      res: res_2,
      dispatch: dispatch_2,
      finalInit: finalInit_2,
      identityBody: s.body,
      clientRequestId: void 0,
      storageV5: storageV5_5,
      rollout: rollout_6
    });
  };
}
function xOr(e, r) {
  Qi().gzipRequestBody.telemetryByClientRequestId.set(e, r);
}
function Clt(e) {
  if (e === void 0) return;
  let telemetryByClientRequestId = Qi().gzipRequestBody.telemetryByClientRequestId,
    n = telemetryByClientRequestId.get(e);
  return telemetryByClientRequestId.delete(e), n;
}
function Aan(e) {
  if (e === void 0) return {};
  return {
    requestBodyEncoding: c(e.requestBodyEncoding),
    requestBodyChars: e.requestBodyChars,
    ...(e.requestBodyEncoding === "gzip" && e.requestBodyGzipLevel !== void 0 && {
      requestBodyGzipLevel: e.requestBodyGzipLevel
    }),
    ...("gzipSkipReason" in e && {
      gzipSkipReason: c(e.gzipSkipReason)
    }),
    ...("gzipFallbackStatus" in e && {
      gzipFallback: !0,
      gzipFallbackStatus: e.gzipFallbackStatus
    })
  };
}
WMo(Tlt);
export { jRo, rDt, IF, Qi, ROr, WRo, zRo, Tlt, oDt, AOr, GRo, Ran, xOr, Clt, Aan };