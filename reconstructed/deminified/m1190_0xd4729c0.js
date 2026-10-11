// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { kN, qd, d4n, x, Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { BY } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q, e5 } from "B:/~BUN/root/chunk-17wqwt36.js";
import { tP } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { lre, gt, qo, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { It, d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { fo } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Z6 } from "B:/~BUN/root/chunk-jd3kqn1r.js";
import { n$r, Mpn, Ue, St } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Hh, M_, Dv } from "B:/~BUN/root/chunk-83yxmdy5.js";
import { ede, Wfn } from "B:/~BUN/root/chunk-ejjy06g8.js";
import { O_ } from "B:/~BUN/root/chunk-5kqdkjak.js";
import { vye, pC } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { Kr, ci, pr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { jst, eUn, YEr, XEr, mLe } from "B:/~BUN/root/chunk-xfvqq19y.js";
import { Ran } from "B:/~BUN/root/chunk-mc8ranwc.js";
import { js } from "B:/~BUN/root/chunk-5nfpvvfh.js";
import { Bat, Hjn, Xae, $jn, UPr, RF } from "B:/~BUN/root/chunk-x8507144.js";
import { LX, nNt, VGn, zcn, yIo, bIo, Gcn, FDr, kte, Kcn, Ycn, Xcn } from "B:/~BUN/root/chunk-9qtz41py.js";
import { Ev } from "B:/~BUN/root/chunk-skjrk8s1.js";
import { g7e, _Kt, lL, Ior, bKt, pSt } from "B:/~BUN/root/chunk-qmvd6qn9.js";
import { bnn, yKe, vk, Ann } from "B:/~BUN/root/chunk-90zbw58x.js";
import { PIr, DIr, LIr, NIr, HIr, FIr, $Ir } from "B:/~BUN/root/chunk-n2rcpjj1.js";
import { C5t } from "B:/~BUN/root/chunk-5hv9qec2.js";
import { bSe, yWe } from "B:/~BUN/root/chunk-ejt287c0.js";
import { YNe, PRo } from "B:/~BUN/root/chunk-06rekkgz.js";
import { Wle, fq, gy as getTrustedDeviceToken, Qct, qle } from "B:/~BUN/root/chunk-hjery5bx.js";
import { xCe, tVn, idt, adt, Tte, Wz, nVn, iNt, rVn } from "B:/~BUN/root/chunk-ztbv79md.js";
import { Yee, HTe } from "B:/~BUN/root/chunk-8gym6yya.js";
import { u7r } from "B:/~BUN/root/chunk-51edmwg2.js";
import { SKt, YIe } from "B:/~BUN/root/chunk-egpv5jmj.js";
import { _We } from "B:/~BUN/root/chunk-9g7vxs6h.js";
import { QEr } from "B:/~BUN/root/chunk-467d5w8j.js";
import { aI } from "B:/~BUN/root/chunk-rcvs5252.js";
import { IS } from "B:/~BUN/root/chunk-xvp1x16p.js";
import { NYe } from "B:/~BUN/root/chunk-73hzyafy.js";
import { ua } from "B:/~BUN/root/chunk-358c43wz.js";
import { o, E, M, u, ut, z } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { _e } from "B:/~BUN/root/chunk-batgyebn.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
var $s = /^\d{4}-\d{2}-\d{2}[Tt ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[zZ]|[+-]\d{2}:?\d{2})$/;
function m7e(n) {
  return $s.test(n) ? Date.parse(n) : Number.NaN;
}
var $i = {
    init_retry_max_attempts: 3,
    init_retry_base_delay_ms: 500,
    init_retry_jitter_fraction: 0.25,
    init_retry_max_delay_ms: 4000,
    http_timeout_ms: 1e4,
    uuid_dedup_buffer_size: 2000,
    heartbeat_interval_ms: 20000,
    heartbeat_jitter_fraction: 0.1,
    token_refresh_buffer_ms: 300000,
    teardown_archive_timeout_ms: 1500,
    connect_timeout_ms: 15000,
    oauth_retry_max_attempts: 3,
    oauth_retry_base_delay_ms: 2000,
    min_version: "0.0.0"
  },
  Ls = f(() => u({
    init_retry_max_attempts: E().int().min(1).max(10).default(3),
    init_retry_base_delay_ms: E().int().min(100).default(500),
    init_retry_jitter_fraction: E().min(0).max(1).default(0.25),
    init_retry_max_delay_ms: E().int().min(500).default(4000),
    http_timeout_ms: E().int().min(2000).default(1e4),
    uuid_dedup_buffer_size: E().int().min(100).max(50000).default(2000),
    heartbeat_interval_ms: E().int().min(5000).max(30000).default(20000),
    heartbeat_jitter_fraction: E().min(0).max(0.5).default(0.1),
    token_refresh_buffer_ms: E().int().min(30000).max(1800000).default(300000),
    teardown_archive_timeout_ms: E().int().min(500).max(2000).default(1500),
    connect_timeout_ms: E().int().min(5000).max(60000).default(15000),
    oauth_retry_max_attempts: E().int().min(0).max(6).default(3),
    oauth_retry_base_delay_ms: E().int().min(100).max(1e4).default(2000),
    min_version: o().refine(n => {
      try {
        return kN(n, "0.0.0"), !0;
      } catch {
        return !1;
      }
    }).default("0.0.0")
  }));
async function cn() {
  let n = await d4n("tengu_bridge_repl_v2_config", $i),
    g = Ls().safeParse(n);
  return g.success ? g.data : $i;
}
async function hKt() {
  let n = await cn();
  if (n.min_version && kN({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION, n.min_version)) return `Your version of Claude Code (${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION}) is too old for Remote Control.
Version ${n.min_version} or higher is required. Run \`claude update\` to update.`;
  return null;
}
var qs = new Set(["auto_default", "auto_settings", "explicit", "sdk"]);
function fn(n) {
  return typeof n === "string" && qs.has(n);
}
var backfillMessages = 200,
  Ws = 50,
  Gs = 500,
  _n = {
    scope: "off",
    backfillMessages: backfillMessages,
    eagerResult: !1
  },
  zs = f(() => u({
    scope: z(["off", "auto_default", "auto", "auto_and_sdk", "all"]).catch("off"),
    backfill_messages: E().int().transform(n => Math.min(Gs, Math.max(Ws, n))).catch(backfillMessages),
    eager_result: M().catch(!1)
  }));
function Vs(n) {
  let g = zs().safeParse(n);
  if (!g.success) return _n;
  return {
    scope: g.data.scope,
    backfillMessages: g.data.backfill_messages,
    eagerResult: g.data.eager_result
  };
}
function Wi() {
  return Vs(x("tengu_noble_snowflake", null));
}
function Xt(n, g) {
  if (g === void 0) return !1;
  switch (n) {
    case "off":
      return !1;
    case "auto_default":
      return g === "auto_default";
    case "auto":
      return g === "auto_default" || g === "auto_settings";
    case "auto_and_sdk":
      return g === "auto_default" || g === "auto_settings" || g === "sdk";
    case "all":
      return !0;
  }
}
function pn(n) {
  return n.type === "assistant" && Array.isArray(n.message.content) && n.message.content.some(item => item.type === "tool_use" && (item.name === O_ || item.name === aI));
}
function hn(n) {
  return Ior(n) || n.type === "system" && "subtype" in n && (n.subtype === "post_turn_summary" || n.subtype === "task_started" || n.subtype === "task_updated" || n.subtype === "task_notification");
}
class Mr {
  _active = !1;
  _pending = [];
  get active() {
    return this._active;
  }
  get pendingCount() {
    return this._pending.length;
  }
  get pending() {
    return this._pending;
  }
  start() {
    this._active = !0;
  }
  end() {
    return this._active = !1, this._pending.splice(0);
  }
  enqueue(...n) {
    if (!this._active) return !1;
    return this._pending.push(...n), !0;
  }
  drop() {
    this._active = !1;
    let n = this._pending.length;
    return this._pending.length = 0, n;
  }
  deactivate() {
    this._active = !1;
  }
}
var Gi = 3,
  zi = 3600000,
  Vi = 24 * Gi,
  Ks = 24 * zi,
  Ys = 600000,
  Ki = 30000,
  gn = 300000,
  Yi = 5000,
  attempts = 14,
  exhaustedDetail = "could not reach the Remote Control server for about 30 minutes",
  Ji = "the connection to the Remote Control server kept dropping after each reconnect",
  Xi = `the connection to the Remote Control server dropped more than ${Vi} times in 24 hours`,
  remintCap = {
    attempts: attempts,
    exhaustedDetail: exhaustedDetail
  };
function Zi() {
  let n = [],
    NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
  return {
    charge(b, k) {
      if (n = n.filter(item => b - item < Ks), k && n.length >= Vi) return "daily_exhausted";
      if (U(n, N => b - N < zi && (!k || N >= NEGATIVE_INFINITY)) >= Gi) return "hourly_exhausted";
      return n.push(b), "charged";
    },
    noteHealthyBeat(b) {
      let k = n.at(-1);
      if (k !== void 0 && b - k >= Ys) NEGATIVE_INFINITY = b;
    }
  };
}
var Qs = f(() => ut({
  pid: E().int(),
  procStart: o().optional().catch(void 0),
  createdAt: E()
}));
function mn(n) {
  if (typeof n !== "object" || n === null || Array.isArray(n)) return [];
  return Object.entries(n).flatMap(([g, b]) => {
    let k = Qs().safeParse(b);
    if (!k.success) return [];
    let {
      procStart: procStart,
      ...N
    } = k.data;
    return [[g, procStart === void 0 ? N : {
      ...N,
      procStart: procStart
    }]];
  });
}
var Zs = 300000,
  ea = 2592000000,
  eo = 20,
  ta = 15000,
  ra = /^(session|cse)_[A-Za-z0-9_-]+$/;
async function ro() {
  if (It()) return !1;
  let {
    getFeatureValue_CACHED_MAY_BE_STALE: getFeatureValue_CACHED_MAY_BE_STALE
  } = await import("B:/~BUN/root/chunk-7qwqa2vj.js");
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_placeholder_sweep", !0);
}
function no(n) {
  let g = Kr();
  return g.placeholderWriteChain = g.placeholderWriteChain.then(n, n), g.placeholderWriteChain;
}
function io(n, g) {
  return no(async () => {
    if (!(await ro())) return;
    let procStart_2 = await Dv(),
      k = {
        pid: process.pid,
        procStart: procStart_2,
        createdAt: Date.now()
      };
    await Ee(B => {
      let N = mn(B.replBridgePlaceholders).filter(([O]) => !oo(O, n));
      N.push([n, k]), N.sort((itemA, itemB) => itemB[1].createdAt - itemA[1].createdAt);
      let V = N.slice(eo);
      if (V.length > 0) t(`[bridge:placeholder] evicting ${V.length} record(s) past cap: ${V.map(([O]) => O).join(", ")}`);
      return {
        ...B,
        replBridgePlaceholders: Object.fromEntries(N.slice(0, eo))
      };
    }, g);
  });
}
async function l7r() {
  try {
    let n = mn(le().replBridgePlaceholders).map(([, k]) => k),
      g = 1,
      b = new Set();
    for (let k of n) {
      if (k.pid === process.pid || b.has(k.pid)) continue;
      if (k.procStart !== void 0 ? ua(k.pid) && (await M_(k.pid, k.procStart)) : ua(k.pid)) b.add(k.pid), g++;
    }
    return g;
  } catch {
    return 0;
  }
}
function Qt(n, g) {
  return no(async () => {
    await Ee(b => {
      let k = Object.keys(b.replBridgePlaceholders ?? {}).filter(item => oo(item, n));
      if (k.length === 0) return b;
      let replBridgePlaceholders = {
        ...b.replBridgePlaceholders
      };
      for (let N of k) delete replBridgePlaceholders[N];
      return {
        ...b,
        replBridgePlaceholders: replBridgePlaceholders
      };
    }, g);
  });
}
function oo(n, g) {
  return pr(n) === pr(g);
}
async function na(n) {
  if (Hh(n.pid)) return !0;
  return ua(n.pid) && !(await M_(n.pid, n.procStart));
}
function Pr(n) {
  if (n === "invalid" || n === "skipped_superseded" || n === "skipped_owner_changed") return !0;
  return typeof n === "number" && n < 500 && n !== 401 && n !== 408 && n !== 429;
}
function to(n) {
  if (!n) return;
  let g = m7e(n.replace(/\.\d+/, ""));
  if (Number.isNaN(g)) return;
  let b = /\.(\d+)/.exec(n)?.[1] ?? "";
  return `${g}.${b.replace(/0+$/, "")}`;
}
async function ia(n, g, b) {
  if (!(await na(g))) return "keep";
  let {
    session: session,
    notFound: notFound
  } = await yKe(n, {
    baseUrl: b.baseUrl,
    getAccessToken: b.getAccessToken
  });
  if (notFound) return "remove";
  if (!session) return "keep";
  let N = to(session.created_at),
    V = to(session.updated_at);
  if (N === void 0 || V === void 0) return t(`[bridge:placeholder] session GET carried no usable timestamps for ${n}; keeping`), "keep";
  if (V !== N) return i("tengu_bridge_placeholder_used_session", {}), "remove";
  let O = await b.archive(n);
  if (!Pr(O)) return m("bridge_placeholder_sweep", typeof O === "number" ? `http_${O}` : O), "keep";
  return _("bridge_placeholder_sweep"), t(`[bridge:placeholder] archived orphaned placeholder ${n} (status=${O})`), "remove";
}
function so(n) {
  let g = Kr();
  if (g.placeholderSweepStarted) return Promise.resolve();
  return g.placeholderSweepStarted = !0, (async () => {
    if (await Q(n.startDelayMs ?? ta), !(await ro())) return;
    let replBridgePlaceholders_2 = le().replBridgePlaceholders;
    if (!replBridgePlaceholders_2) return;
    let k = n.skipSessionId ? pr(n.skipSessionId) : void 0,
      B = mn(replBridgePlaceholders_2),
      N = new Set(B.map(([O]) => O)),
      V = Object.keys(replBridgePlaceholders_2).filter(item => !N.has(item));
    for (let [O, q] of B) {
      let Y = Date.now() - q.createdAt;
      if (Math.abs(Y) < Zs || pr(O) === k) continue;
      if (!ra.test(O)) {
        V.push(O);
        continue;
      }
      if ((await ia(O, q, n)) === "remove" || Y > ea) V.push(O);
    }
    if (V.length > 0) await Ee(O => {
      if (!O.replBridgePlaceholders) return O;
      let replBridgePlaceholders_3 = {
        ...O.replBridgePlaceholders
      };
      for (let Y of V) delete replBridgePlaceholders_3[Y];
      return {
        ...O,
        replBridgePlaceholders: replBridgePlaceholders_3
      };
    }, n.storageV5);
  })().catch(b => {
    t(`[bridge:placeholder] sweep failed: ${l(b)}`, {
      level: "error"
    });
  });
}
var windowMs = 180000,
  maxGapMs = 90000;
function bn(n, g, b) {
  switch (n) {
    case void 0:
      return "no close code received";
    case 4090:
      switch (g) {
        case "superseded_by_worker":
          return "another connection took over this session (usually another device or Claude Code session) \u2014 this device is standing down (code 4090)";
        case "session_not_active":
          return "this session was ended or archived from another device or app (code 4090)";
        case "session_not_found":
          return "the server no longer reports this session \u2014 it may have been deleted from another device or app (code 4090)";
        case "epoch_stale":
          return "the session worker registration went stale \u2014 no active worker holds it (code 4090)";
        default:
          return "this connection is no longer the active worker for the session (code 4090)";
      }
    case 4091:
      return "transport init failed (code 4091)";
    case 4092:
      return "connection dropped \u2014 no close reason from server (code 4092)";
    case 4093:
      return "presence heartbeats to the server kept failing (code 4093)";
    case 4094:
      return "worker credential expired or rejected (code 4094)";
    case 401:
      return "auth token expired (code 401)";
    case 403:
      {
        if (!xCe(b?.rejectSource)) return "server rejected connection (code 403)";
        let k = tVn(b.rejectSource);
        if (b.streak === void 0) return k;
        let B = Math.max(1, Math.round(b.streak.streakMs / 60000));
        return `${k}, and kept refusing for ${B} ${I(B, "minute")}`;
      }
    case 404:
      return "session not found on server (code 404)";
    case 1002:
      return "server rejected the connection handshake (code 1002)";
    case 4001:
      return "session expired or not found on server (code 4001)";
    case 4003:
      return "server rejected credentials (code 4003)";
    default:
      return `code ${n}`;
  }
}
async function Rn(n) {
  let {
      sessionUrl: sessionUrl,
      ingressToken: ingressToken,
      sessionId: sessionId,
      initialSequenceNum: initialSequenceNum,
      getAuthToken: getAuthToken
    } = n,
    getAuthHeaders;
  if (getAuthToken) getAuthHeaders = () => ede(getAuthToken());else Wfn(ingressToken);
  let O = n.epoch ?? (await yWe(sessionUrl, ingressToken));
  t(`[bridge:repl] CCR v2: worker sessionId=${sessionId} epoch=${O}${n.epoch !== void 0 ? " (from /bridge)" : " (via registerWorker)"}`);
  let q = new URL(sessionUrl);
  q.pathname = q.pathname.replace(/\/$/, "") + "/worker/events/stream";
  let Y = new pSt(q, {}, {
      sessionId: sessionId,
      initialSequenceNum: initialSequenceNum,
      getAuthHeaders: getAuthHeaders,
      sseKeepaliveMaxIntervalSeconds: n.sseKeepaliveMaxIntervalSeconds
    }),
    Re = !n.outboundOnly,
    Ie = (n.selfHealHeartbeats ?? !1) && Re,
    Ye = (n.nonOrigin403Retry ?? !1) && Re,
    nonOrigin403Transient = Ye && Ie;
  if (Ye) Y.setNonOriginRejectionPolicy({
    windowMs: windowMs,
    maxGapMs: maxGapMs,
    onRecovered: n.onNonOriginRejectionRecovered
  });
  let Zt,
    ie = !1;
  function oe(T, se, qe) {
    if (ie) return;
    ie = !0;
    try {
      H.close({
        goodbye: !1,
        retainUndeliveredClientEvents: n.retainUndeliveredOnClose === !0
      }), Y.close();
    } catch (error) {
      d(error);
    }
    try {
      Zt?.(T, se, qe);
    } catch (error) {
      d(error);
    }
  }
  let H = new lL(Y, new URL(sessionUrl), {
    getAuthHeaders: getAuthHeaders,
    heartbeatIntervalMs: n.heartbeatIntervalMs,
    heartbeatJitterFraction: n.heartbeatJitterFraction,
    advertiseHeartbeatProbeSupport: (n.advertiseHeartbeatProbeSupport ?? !1) && Re,
    uploadTrim: n.uploadTrim,
    uploadHoldMarker: n.uploadHoldMarker,
    eventHoldEnabled: n.eventHoldEnabled,
    beatOnStaleReconnect: (n.beatOnStaleReconnect ?? !1) && Re,
    idleTracker: n.idleTracker,
    beatOnReactivation: (n.beatOnReactivation ?? !1) && Re,
    skipRedundantHeartbeats: n.skipRedundantHeartbeats,
    streamEventFlushIntervalMs: n.streamEventFlushIntervalMs,
    streamEventFirstFlushMs: n.streamEventFirstFlushMs,
    gzipRequestBodyFetch: n.gzipRequestBodyFetch,
    noSubscriberStreamEventFlushIntervalMs: n.noSubscriberStreamEventFlushIntervalMs,
    noSubscriberUploadHoldMs: n.noSubscriberUploadHoldMs,
    dropUnwatchedStreamEvents: n.dropUnwatchedStreamEvents,
    nonOrigin403Transient: nonOrigin403Transient,
    internalEventUploader: n.internalEventUploader,
    onEpochMismatch: T => {
      let se = n.causeTypedCloseCodes ? _Kt[T] : 4090;
      throw t(`[bridge:repl] CCR v2: terminal request-path condition (${T}) \u2014 closing with ${se} for ${se === 4094 ? "auth recovery" : "poll-loop recovery"}`), oe(se, T), Error("terminal request-path condition");
    },
    onRequestAuthOk: n.onRequestAuthOk,
    ...(Ie && {
      onHeartbeatLost: () => {
        if (ie) return;
        t("[bridge:repl] CCR v2: heartbeats failing while SSE healthy \u2014 closing for transport rebuild", {
          level: "warn"
        }), oe(4093);
      }
    })
  });
  Y.setOnEvent(T => {
    H.reportDelivery(T.event_id, "received"), H.reportDelivery(T.event_id, "processed");
  }), Y.setEventFilter(Xcn);
  let _t,
    pt = !1;
  return {
    write(T) {
      return H.writeEvent(T);
    },
    writeBatch(T) {
      return H.writeEvents(T);
    },
    close(T) {
      if (ie = !0, H.close({
        goodbye: T?.goodbye,
        retainUndeliveredClientEvents: T?.retainUndelivered
      }), !T?.retainUndelivered) H.discardUndeliveredClientEvents();
      Y.close();
    },
    takeUndeliveredEvents() {
      return H.takeUndeliveredClientEvents();
    },
    discardUndeliveredEvents() {
      return H.discardUndeliveredClientEvents();
    },
    adoptUndeliveredEvents(T) {
      H.adoptClientEvents(T);
    },
    flushGoodbye() {
      return H.flushGoodbye();
    },
    isConnectedStatus() {
      return pt;
    },
    getStateLabel() {
      if (Y.isClosedStatus()) return "closed";
      if (Y.isConnectedStatus()) return pt ? "connected" : "init";
      return "connecting";
    },
    setOnData(T) {
      Y.setOnData(T);
    },
    setOnClose(T) {
      Zt = T, Y.setOnClose((se, qe) => {
        oe(se ?? 4092, void 0, qe);
      });
    },
    setOnConnect(T) {
      _t = T;
    },
    getLastSequenceNum() {
      return Y.getLastSequenceNum();
    },
    getEpoch() {
      return O;
    },
    reportState(T, se) {
      H.reportState(T, se);
    },
    reportMetadata(T) {
      H.reportMetadata(T);
    },
    reportInternalMetadata(T) {
      H.reportInternalMetadata(T);
    },
    droppedDurableBatchCount() {
      return H.droppedDurableBatches;
    },
    flushWorkerState() {
      return H.flushWorkerState();
    },
    droppedWorkerStatePatchCount() {
      return H.droppedWorkerStatePatches;
    },
    reportDelivery(T, se) {
      H.reportDelivery(T, se);
    },
    setStreamEventFlushIntervalMs(T) {
      H.setStreamEventFlushIntervalMs(T);
    },
    setStreamEventFirstFlushMs(T) {
      H.setStreamEventFirstFlushMs(T);
    },
    setNoSubscriberStreamEventFlushIntervalMs(T) {
      H.setNoSubscriberStreamEventFlushIntervalMs(T);
    },
    setNoSubscriberUploadHoldMs(T) {
      H.setNoSubscriberUploadHoldMs(T);
    },
    setDropUnwatchedStreamEvents(T) {
      H.setDropUnwatchedStreamEvents(T);
    },
    setSubscribersReportedListener(T) {
      H.setSubscribersReportedListener(T);
    },
    mayHoldUploads() {
      return H.mayHoldUploads();
    },
    flush(T) {
      return H.flush(T);
    },
    flushInternalEvents(T) {
      return H.flushInternalEvents(T);
    },
    getUploadBacklog() {
      return H.uploadBacklog();
    },
    getInternalEventBacklog() {
      return {
        pending: H.internalEventsPending,
        droppedBatches: H.droppedInternalBatches
      };
    },
    trackFirstFrameUpload(T) {
      return H.trackFirstFrameUpload(T);
    },
    getInternalEventWriter() {
      return (T, se, qe) => H.writeInternalEvent(T, se, qe);
    },
    getInternalEventReaders() {
      return {
        readMain: () => H.readInternalEvents(),
        readSubagents: () => H.readSubagentInternalEvents()
      };
    },
    getInternalEventsPort() {
      return {
        epoch: () => H.getWorkerEpoch(),
        postBatch: (T, se) => H.postInternalEventsBatch(T, se),
        listPage: (T, se) => H.getInternalEventsPage(T, se)
      };
    },
    connect() {
      H.initialize(O).then(T => {
        if (ie) return;
        if (pt = !0, t(`[bridge:repl] v2 transport ready for writes (epoch=${O}); opening the read stream`), _t?.(T), !n.outboundOnly && !ie) Y.connect();
      }, T => {
        t(`[bridge:repl] CCR v2 initialize failed: ${l(T)}`, {
          level: "error"
        }), oe(4091);
      });
    }
  };
}
var sa = 5000;
var ao = 300,
  aa = 200,
  go = 300,
  da = 600,
  la = lre - go - da,
  ca = 2000,
  fa = 3000,
  En = 100,
  _a = 5000,
  pa = 20000,
  maxConsecutiveFailures = 8,
  maxBatchBytes = 1048576,
  requestTimeoutMs = 30000;
async function c7r(n) {
  let {
      baseUrl: baseUrl,
      orgUUID: orgUUID,
      title: title,
      reattachOrFail: reattachOrFail,
      reattachOrigin: reattachOrigin,
      reviveInitiated: reviveInitiated,
      neverArchive: neverArchive,
      onAuthProven: onAuthProven,
      noHistoryBackfill: noHistoryBackfill,
      onReattachGoneBounce: onReattachGoneBounce,
      neutralFallbackTitle: neutralFallbackTitle,
      onReattachPointerDead: onReattachPointerDead,
      ownerPin: ownerPin,
      onOwnerChanged: onOwnerChanged,
      getAccessToken: getAccessToken,
      onAuth401: onAuth401,
      classifyFailedOAuthRefresh: classifyFailedOAuthRefresh,
      onReadFreshOAuthToken: onReadFreshOAuthToken,
      onClassifyMissingOAuthToken: onClassifyMissingOAuthToken,
      onProactiveRefresh: onProactiveRefresh,
      toSDKMessages: toSDKMessages,
      initialHistoryCap: initialHistoryCap,
      initialMessages: initialMessages,
      onInboundMessage: onInboundMessage,
      onQueuedNotification: onQueuedNotification,
      onUserMessage: onUserMessage,
      onSessionEstablished: onSessionEstablished,
      onBeforePushTriggeringState: onBeforePushTriggeringState,
      onPermissionResponse: onPermissionResponse,
      onInterrupt: onInterrupt,
      onStopTask: onStopTask,
      onBackgroundTasks: onBackgroundTasks,
      onCancelAsyncMessage: onCancelAsyncMessage,
      getInitializeState: getInitializeState,
      getCommands: getCommands,
      isTurnLive: isTurnLive,
      onDialogKindsDeclared: onDialogKindsDeclared,
      onClientInitialize: onClientInitialize,
      onSetModel: onSetModel,
      onSetMaxThinkingTokens: onSetMaxThinkingTokens,
      onSetPermissionMode: onSetPermissionMode,
      onApplyFlagSettings: onApplyFlagSettings,
      onRenameSession: onRenameSession,
      onSetColor: onSetColor,
      onFileSuggestions: onFileSuggestions,
      onReadFile: onReadFile,
      onGetWorkspaceDiff: onGetWorkspaceDiff,
      onSideQuestion: onSideQuestion,
      onGetContextUsage: onGetContextUsage,
      answerSharedControlRequest: answerSharedControlRequest,
      onMcpAuthenticate: onMcpAuthenticate,
      onMcpOauthCallbackUrl: onMcpOauthCallbackUrl,
      onMcpReconnect: onMcpReconnect,
      onForkConversation: onForkConversation,
      onStateChange: onStateChange,
      onBridgeInjectedMcp: onBridgeInjectedMcp,
      onProjectsBindingHint: onProjectsBindingHint,
      outboundOnly: outboundOnly,
      tags: tags,
      sessionGroupingId: sessionGroupingId,
      requestedSessionGroupingId: requestedSessionGroupingId,
      gitRepoUrl = null,
      branch = "",
      defaultBranch = null,
      onTransportPersistenceReady: onTransportPersistenceReady,
      onTransportPersistenceTeardown: onTransportPersistenceTeardown,
      onTransportRebuilt: onTransportRebuilt,
      remoteControlOrigin: remoteControlOrigin,
      getBackfillMessages: getBackfillMessages,
      reattachSessionId: reattachSessionId,
      reattachSequenceNum: reattachSequenceNum,
      credentialsStore: credentialsStore,
      workSecretCredentials: workSecretCredentials,
      storageV5: storageV5
    } = n,
    neverArchive_2 = workSecretCredentials !== void 0 ? !0 : neverArchive,
    On = title,
    reattach = !!reattachSessionId,
    F = await cn(),
    In = !1,
    tr = e => {
      if (!workSecretCredentials) ownerPin?.noteAcceptedToken(e);
    },
    jn = "work-secret-lane",
    Dn = () => workSecretCredentials ? jn : getAccessToken(),
    rr = workSecretCredentials ? () => {
      let e = In ? "refresh" : "initial";
      return workSecretCredentials.register(e, {
        stillWanted: () => !w && ge === void 0,
        reuseHeldAboveS: Math.ceil(F.token_refresh_buffer_ms / 1000) + 60
      }).then(r => {
        if (r !== null && !Tte(r)) In = !0;
        return r;
      });
    } : Ra,
    nr = getAccessToken();
  if (!nr) return t("[remote-bridge] No OAuth token"), m("bridge_connect", "bridge_connect_no_token"), null;
  let getAccessToken_2 = () => getAccessToken() ?? nr,
    Bn = () => ownerPin?.ownerToken() ?? getAccessToken() ?? nr,
    recoveryAttemptedTokens = new Set(),
    {
      getOriginalCwd: getOriginalCwd
    } = await import("B:/~BUN/root/chunk-kyqapdq5.js"),
    {
      getMainLoopModel: getMainLoopModel
    } = await import("B:/~BUN/root/chunk-f0j8d9fn.js"),
    ir = requestedSessionGroupingId ?? sessionGroupingId,
    sessionGroupingId_2 = sessionGroupingId;
  async function Nn() {
    let e = {},
      r = async () => {
        if (gitRepoUrl) {
          let {
              buildGitSessionContext: buildGitSessionContext
            } = await import("B:/~BUN/root/chunk-wchj5xex.js"),
            {
              reportGitSessionContext: reportGitSessionContext
            } = await import("B:/~BUN/root/chunk-c0re20wx.js"),
            {
              report: report
            } = await buildGitSessionContext(gitRepoUrl, branch, defaultBranch ?? void 0);
          reportGitSessionContext(report);
        }
      },
      s = h => Sn((v, A) => adt(baseUrl, v, On, F.http_timeout_ms, tags, gitRepoUrl ? {
        gitRepoUrl: gitRepoUrl,
        branch: branch,
        defaultBranch: defaultBranch ?? void 0
      } : void 0, getOriginalCwd(), getMainLoopModel(), h, e, A).then(D => {
        if (typeof D === "string") ownerPin?.noteAcceptedToken(v);
        return D;
      }), "createCodeSession", F, {
        getAccessToken: getAccessToken_2,
        onAuth401: onAuth401,
        recoveryAttemptedTokens: recoveryAttemptedTokens
      }),
      a = await s(ir);
    if (idt(a) && a.reason === "grouping_rejected" && requestedSessionGroupingId === void 0 && ir !== void 0) {
      let h = await s(void 0);
      if (typeof h === "string") return sessionGroupingId_2 = void 0, await r(), K("info", "bridge_repl_v2_grouping_dropped", {
        status: a.status
      }), t("[bridge:core] persisted Project no longer available; recreated session outside it"), t(`[remote-bridge] Created session ${h}`), K("info", "bridge_repl_v2_session_created"), h;
      return a;
    }
    if (typeof a === "string") sessionGroupingId_2 = ir, await r(), t(`[remote-bridge] Created session ${a}`), K("info", "bridge_repl_v2_session_created");
    return a;
  }
  function Jo(e) {
    if (e?.reason === "grouping_rejected" && ir !== void 0) {
      let r = e.detail ? `: ${e.detail}` : "";
      return requestedSessionGroupingId !== void 0 ? `Couldn't create a session in the requested Project (server ${e.status}${r}). The Project may not exist or may not be available to you.` : `Couldn't recreate the session in its previous Project (server ${e.status}${r}) \u2014 the Project may have been deleted or is no longer available.`;
    }
    if (e?.reason === "request_rejected") return `Session creation failed (server ${e.status}) \u2014 see debug log`;
    if (e?.reason === "malformed_response") return jst;
    return "Session creation failed \u2014 see debug log";
  }
  function Fn(e) {
    if (e !== null && e.terminal === !1) {
      onStateChange?.("failed", Fr, "auth"), Ev("v2_session_create_oauth_rejected", void 0, !0), m("bridge_connect", "bridge_connect_create_oauth_rejected");
      return;
    }
    onStateChange?.("failed", Jo(idt(e) ? e : null)), Ev("v2_session_create_failed", void 0, !0), m("bridge_connect", "bridge_connect_session_create_failed");
  }
  let Xo = "JWT refresh failed: no OAuth token \u2014 run /login",
    Fr = "Claude.ai login was rejected \u2014 run /login, then /remote-control",
    Qo = "Claude.ai login expired \u2014 run /login, then /remote-control",
    Zo = "Claude.ai login expired \u2014 run /login to restore Remote Control",
    es = "Signed out of Claude \u2014 run /login, then /remote-control",
    Ur = !1,
    sr = !1;
  if (reattachSessionId && vk(reattachSessionId)) {
    if (reattachOrFail) return t(`[remote-bridge] Reattach-or-fail: ${reattachSessionId} is teleported; failing terminally instead of minting fresh`), K("info", "bridge_repl_v2_revive_reattach_teleported"), onReattachPointerDead?.(), onStateChange?.("failed", mLe, "terminal"), Ev("v2_revive_reattach_teleported", void 0, !0), m("bridge_connect", "bridge_connect_reattach_teleported"), null;
    t(`[remote-bridge] Reattach suppressed for teleported session ${reattachSessionId} \u2014 minting fresh`), Ur = !0, reattach = !1;
  }
  let R;
  if (workSecretCredentials) {
    if (!reattachSessionId || Ur) return t("[remote-bridge] Work-secret attach has no session to reattach; failing", {
      level: "error"
    }), onStateChange?.("failed", "Remote Control could not attach: the host supplied a session credential but no session to attach to", "terminal"), Ev("v2_work_secret_no_session", void 0, !0), m("bridge_connect", "bridge_connect_work_secret_no_session"), null;
    R = reattachSessionId, t(`[remote-bridge] Attaching to session ${R} with the host's work secret`), K("info", "bridge_repl_v2_work_secret_attach");
  } else if (reattachSessionId && !Ur) {
    R = reattachSessionId, t(`[remote-bridge] Reattaching to session ${R}`), K("info", "bridge_repl_v2_session_reattached");
    let e = await Sn((r, s) => ya(R, baseUrl, r, orgUUID, F.http_timeout_ms, s, credentialsStore), "unarchiveSession", F, {
      getAccessToken: getAccessToken_2,
      onAuth401: onAuth401,
      recoveryAttemptedTokens: recoveryAttemptedTokens
    });
    if (e?.outcome === "elevated_auth") {
      t(`[remote-bridge] Reattach ${R}: unarchive elevated-auth (${e.reason}) \u2014 surfacing auth failure, pointer preserved`), K("info", "bridge_repl_v2_reattach_elevated_auth");
      let s = e.reason === "untrusted_device" && !fq() ? {
        terminal: !0,
        reason: "request_rejected",
        status: 403
      } : {
        terminal: !0,
        reason: e.reason
      };
      return onStateChange?.("failed", Zue(s), Ke(s)), Ev("v2_reattach_elevated_auth", void 0, !0), m("bridge_connect", "bridge_connect_reattach_elevated_auth"), null;
    }
    if (e?.outcome === "gone" && reattachOrFail) return t(`[remote-bridge] Reattach-or-fail: ${R} gone (unarchive ${e.status}); failing terminally instead of minting fresh`), K("info", "bridge_repl_v2_revive_reattach_gone"), onReattachGoneBounce(), onReattachPointerDead?.(), onStateChange?.("failed", mLe, "terminal"), Ev("v2_revive_reattach_gone", void 0, !0, {
      reattach_origin: ue(reattachOrigin),
      revive_initiated: reviveInitiated === !0
    }), m("bridge_connect", "bridge_connect_reattach_gone"), null;
    if (e?.outcome === "gone") {
      t(`[remote-bridge] Reattach ${R} gone (unarchive ${e.status}); minting fresh session`), sr = !0, onReattachGoneBounce(), On = neutralFallbackTitle ?? `${HTe()}-${Z6()}`, K("info", "bridge_repl_v2_reattach_fallback", {
        via: "unarchive",
        status: e.status
      }), i("tengu_bridge_repl_env_expired_fresh_session", {
        v2: !0,
        via: c("unarchive"),
        status: typeof e.status === "number" ? e.status : c(e.status),
        reattach_origin: ue(reattachOrigin),
        revive_initiated: reviveInitiated === !0
      });
      let r = await Nn();
      if (typeof r !== "string") return Fn(r), null;
      R = r, reattach = !1;
    }
  } else {
    if (reattachOrFail) return t("[remote-bridge] Reattach-or-fail: no reattach pointer for this init; failing terminally instead of minting fresh"), K("info", "bridge_repl_v2_revive_fresh_refused"), onReattachGoneBounce(), onStateChange?.("failed", mLe, "terminal"), Ev("v2_revive_fresh_refused", void 0, !0), m("bridge_connect", "bridge_connect_revive_fresh_refused"), null;
    let e = await Nn();
    if (typeof e !== "string") return Fn(e), null;
    R = e;
  }
  if (reattach && requestedSessionGroupingId !== void 0 && requestedSessionGroupingId !== sessionGroupingId_2) t("[bridge:core] --project ignored: reattached to existing session (Project is fixed at create)");
  if (neverArchive_2 && reattach) Qt(R, storageV5);else if (!outboundOnly) io(R, storageV5);
  so({
    baseUrl: baseUrl,
    getAccessToken: getAccessToken_2,
    skipSessionId: R,
    archive: e => ft(e, baseUrl, getAccessToken_2(), orgUUID, F.http_timeout_ms, void 0, storageV5),
    storageV5: storageV5
  });
  let ts = gn + 60000,
    xe;
  function Hr() {
    xe = void 0;
  }
  function xr(e) {
    if (!Tte(e) || !jr(e)) {
      if (e !== null && !Tte(e) && !Wz(e)) Hr();
      return e;
    }
    if (!Hjn()) return e;
    let r = Date.now();
    if (xe === void 0 || r - xe.lastAtMs > ts) xe = {
      startedAtMs: r,
      lastAtMs: r,
      refusals: 0
    };
    xe.lastAtMs = r, xe.refusals++;
    let s = r - xe.startedAtMs;
    if (xe.refusals > 1 && s >= windowMs) return t(`[remote-bridge] /bridge refused by ${e.source} ${xe.refusals}\xD7 over ${Math.round(s / 1000)}s with nothing reaching Anthropic since \u2014 treating as a verdict`), e;
    return t(`[remote-bridge] /bridge 403 not written by Anthropic's origin (${e.source}) \u2014 treating as unreachable`), K("warn", "bridge_repl_v2_bridge_403_nonorigin", {
      source: e.source
    }), null;
  }
  function ar(e, r) {
    if (w || ge !== void 0 || J !== r) return Promise.resolve(null);
    let s = () => rr(R, baseUrl, e, F.http_timeout_ms, void 0, credentialsStore).then(a => {
      if (J !== r) return a;
      let h = xr(a);
      if (h !== null && !Tte(h) && !Wz(h)) tr(e), tn();
      return h;
    });
    if (!nt()) return s();
    return At("owner_changed_recovery").then(a => a || w || ge !== void 0 || J !== r ? null : s());
  }
  let Un = nr,
    X = await Sn((e, r) => (Un = e, rr(R, baseUrl, e, F.http_timeout_ms, r, credentialsStore)), "fetchRemoteCredentials", F, {
      getAccessToken: getAccessToken_2,
      onAuth401: onAuth401,
      recoveryAttemptedTokens: recoveryAttemptedTokens
    });
  if (reattach && X === null) t(`[remote-bridge] Reattach ${R}: /bridge failed after unarchive; surfacing retry prompt`), K("info", "v2_remote_creds_reattach_transient");
  if (!X || Tte(X) || Wz(X)) {
    let e = X === null ? reattach ? "Couldn't reconnect to your Remote Control session. Retry, or start a fresh session without --resume." : "Remote credentials fetch failed \u2014 see debug log" : Wz(X) ? Qo : Zue(X),
      r = X === null ? reviveInitiated ? "auth" : "terminal" : Wz(X) ? "auth" : Ke(X),
      s = X === null ? reattach ? "v2_remote_creds_reattach_transient" : "v2_remote_creds_failed" : Wz(X) ? "v2_remote_creds_oauth_rejected" : jr(X) ? `v2_remote_creds_request_rejected_${X.source}` : `v2_remote_creds_${X.reason}`;
    if (t(`[remote-bridge] Creds failed; onStateChange ${onStateChange ? "set" : "UNSET"}, msg="${e}"`), onStateChange?.("failed", e, r), Ev(s, void 0, !0), m("bridge_connect", "bridge_connect_creds_failed"), !reattach) ho(R, () => ft(R, baseUrl, Bn(), orgUUID, F.http_timeout_ms, void 0, storageV5));
    return null;
  }
  t(`[remote-bridge] Fetched bridge credentials (expires_in=${X.expires_in}s)`), tr(Un), onSessionEstablished?.(R);
  let sessionUrl_2 = bSe(X.api_base_url, R);
  t(`[remote-bridge] v2 session URL: ${sessionUrl_2}`);
  function rs() {
    return x("tengu_bridge_selfheal_heartbeats", !0);
  }
  function $r() {
    return x("tengu_bridge_recovery_patience", !0);
  }
  function xn() {
    return x("tengu_dazzling_garden", !0);
  }
  function $n() {
    return x("tengu_ccr_stream_event_flush_ms", g7e);
  }
  function Ln() {
    return x("tengu_ccr_stream_first_flush_ms", 0);
  }
  function qn() {
    return x("tengu_ccr_no_subscriber_flush_ms", 0);
  }
  function Qe() {
    return outboundOnly ? 0 : x("tengu_ccr_no_subscriber_hold_ms", 0);
  }
  function Ht() {
    return Qe() > 0 || transport.mayHoldUploads?.() === !0;
  }
  function sseKeepaliveMaxIntervalSeconds() {
    return x("tengu_ccr_sse_keepalive_max_interval_s", 0);
  }
  function Wn() {
    return outboundOnly ? !1 : x("tengu_ccr_drop_unwatched_stream_events", !1);
  }
  function ht() {
    return outboundOnly ? _n : Wi();
  }
  function is() {
    return x("tengu_ccr_idle_heartbeat", !1);
  }
  function os() {
    return x("tengu_ccr_reconnect_beat", !1);
  }
  function ss() {
    return x("tengu_ccr_reactivation_beat", !1);
  }
  function as() {
    return x("tengu_ccr_skip_redundant_heartbeat", !1);
  }
  let idleTracker = bKt(),
    gzipRequestBodyFetch = Ran("ccr_worker", storageV5);
  function Gn() {
    return {
      heartbeatIntervalMs: F.heartbeat_interval_ms,
      heartbeatJitterFraction: F.heartbeat_jitter_fraction,
      onRequestAuthOk: onRequestAuthOk,
      causeTypedCloseCodes: !0,
      selfHealHeartbeats: rs(),
      advertiseHeartbeatProbeSupport: is(),
      beatOnStaleReconnect: os(),
      idleTracker: idleTracker,
      beatOnReactivation: ss(),
      skipRedundantHeartbeats: as(),
      uploadTrim: () => x("tengu_ccr_upload_trim", {}),
      uploadHoldMarker: () => x("tengu_ccr_upload_hold_marker", !1),
      eventHoldEnabled: () => x("tengu_ccr_event_hold_enabled", !0),
      streamEventFlushIntervalMs: $n(),
      streamEventFirstFlushMs: Ln(),
      gzipRequestBodyFetch: gzipRequestBodyFetch,
      noSubscriberStreamEventFlushIntervalMs: qn(),
      noSubscriberUploadHoldMs: Qe(),
      dropUnwatchedStreamEvents: Wn(),
      sseKeepaliveMaxIntervalSeconds: sseKeepaliveMaxIntervalSeconds,
      outboundOnly: outboundOnly,
      nonOrigin403Retry: Hjn(),
      onNonOriginRejectionRecovered: onNonOriginRejectionRecovered,
      retainUndeliveredOnClose: !0,
      internalEventUploader: {
        maxConsecutiveFailures: maxConsecutiveFailures,
        maxBatchBytes: maxBatchBytes,
        requestTimeoutMs: requestTimeoutMs
      }
    };
  }
  let transport;
  try {
    transport = await Rn({
      ...Gn(),
      sessionUrl: sessionUrl_2,
      ingressToken: X.worker_jwt,
      sessionId: R,
      epoch: X.worker_epoch,
      initialSequenceNum: reattach ? reattachSequenceNum : void 0,
      getAuthToken: () => X.worker_jwt
    });
  } catch (error) {
    if (t(`[remote-bridge] v2 transport setup failed: ${l(error)}`, {
      level: "error"
    }), onStateChange?.("failed", `Transport setup failed: ${l(error)}`), Ev("v2_transport_setup_failed", void 0, !0), m("bridge_connect", "bridge_connect_transport_failed"), !reattach) ho(R, () => ft(R, baseUrl, Bn(), orgUUID, F.http_timeout_ms, void 0, storageV5));
    return null;
  }
  t(`[remote-bridge] v2 transport created (epoch=${X.worker_epoch})`), onStateChange?.("ready");
  let {
      worker_jwt: Lr,
      worker_epoch: worker_epoch,
      api_base_url: api_base_url
    } = X,
    Ca = null,
    ka = new Set(),
    ls = new Set(),
    us = !1,
    Aa = !1,
    dr = 0;
  function Ma() {
    dr++, us = !1, ls = new Set();
  }
  let cs = null;
  function Pa(e, r = !1) {}
  function Oa() {
    cs = null;
  }
  function canAdoptInjectedMcp() {
    return !1;
  }
  function Ia(e, r, s = !1) {
    return {
      added: [],
      removed: []
    };
  }
  function _s(e, r = !1) {}
  let onMcpSetServers = e => {
      if (Object.keys(e).length === 0) return onProjectsBindingHint?.(), {
        ok: !0,
        added: [],
        removed: [],
        errors: {},
        unknownServerCount: 0
      };
      return {
        ok: !1,
        error: "Server-injected MCP servers are disabled for this Remote Control session"
      };
    },
    Ze = 0,
    et = !1;
  function requestInjectedMcpReassert() {
    if (w) return;
    let e = Date.now();
    if (e - Ze < sa) {
      et = !0;
      return;
    }
    Ze = e, et = !1, Ve.refreshNow(R);
  }
  function Kn() {
    if (w || !et) return;
    et = !1, Ze = Date.now(), Ve.refreshNow(R);
  }
  function lr() {
    try {
      gs("withdrawn");
    } catch (error) {
      d(error), m("bridge_webagent_mcp_inject", "relinquish_threw");
    }
  }
  function gs(e) {}
  let mt = new kte(F.uuid_dedup_buffer_size),
    qr = new Set();
  if (initialMessages) for (let e of initialMessages) qr.add(e.uuid), mt.add(e.uuid);
  let ms = new kte(F.uuid_dedup_buffer_size),
    cancellableRequests = new Map(),
    Wr = new kte(F.uuid_dedup_buffer_size),
    me = new Mr(),
    ve = new Mr(),
    Gr = 0,
    tt = !1,
    Ge = !1,
    vt = new Map(),
    vs = 64,
    bt = reattach,
    he = !reattach && !noHistoryBackfill && !sr && Xt(ht().scope, remoteControlOrigin) ? "deferred" : "live",
    ur = remoteControlOrigin,
    Jn = he === "deferred",
    cr = new kte(F.uuid_dedup_buffer_size),
    Rt,
    $t = {},
    w = !1,
    fr,
    recovery_in_flight = !1,
    Xn = 0,
    J = 0;
  function Qn() {
    return Xn++, J = Xn, recovery_in_flight = !0, Et = Date.now(), Lt = !1, J;
  }
  function Zn(e) {
    if (J !== e) return !1;
    return J = 0, recovery_in_flight = !1, Et = 0, ei(), !0;
  }
  let _r = !1;
  function ei() {
    if (!_r || w || G) {
      _r = !1;
      return;
    }
    if (_r = !1, $e !== void 0 || !transport.isConnectedStatus()) return;
    if (me.active || ve.active) at();
    an();
  }
  function ti() {
    J = 0, recovery_in_flight = !1, Et = 0, ei();
  }
  let Et = 0,
    Lt = !1,
    ri = F.init_retry_max_attempts * F.http_timeout_ms + (F.init_retry_max_attempts - 1) * F.init_retry_max_delay_ms,
    bs = F.oauth_retry_base_delay_ms * (2 ** F.oauth_retry_max_attempts - 1) + F.oauth_retry_max_attempts * ri,
    ni = 2 * (15000 + ri + bs),
    yt = 0,
    ii = 3,
    hr = 0,
    oi = Zi();
  function onRequestAuthOk() {
    hr = 0, oi.noteHealthyBeat(Date.now()), Hr(), onAuthProven?.();
  }
  let gr = !1,
    $e;
  function wt() {
    clearTimeout($e), $e = void 0;
  }
  let Tt = !1;
  function mr(e) {
    Tt = !1, onStateChange?.("reconnecting", e);
  }
  function qt() {
    Tt = !1, onStateChange?.("connected");
  }
  function te(e, r = "terminal") {
    Tt = !0, wt(), De = void 0, vr(), onStateChange?.("failed", e, r);
  }
  function si() {
    let retryNow = Ht();
    return Promise.all([transport.flush({
      retryNow: retryNow
    }), retryNow && transport.flushInternalEvents?.({
      retryNow: retryNow
    })]).then(() => {});
  }
  function Wt(e = ao) {
    return Promise.race([si().then(() => !0), Q(e).then(() => !1)]);
  }
  async function ai(e, r = Date.now()) {
    let s = transport.getUploadBacklog?.(),
      hold_preflush_landed = await Wt(la),
      h = {
        hold_preflush_ms: Date.now() - r,
        hold_preflush_landed: hold_preflush_landed,
        hold_preflush_inflight_age_ms: s?.oldestInFlightMs,
        hold_preflush_lane_in_backoff: s?.backingOff
      };
    if (!hold_preflush_landed) p("ccr_no_subscriber_hold", e);
    return h;
  }
  function di() {
    let e = transport.getUploadBacklog?.();
    return {
      unsent_client_events_at_close: e?.unsentClientEvents,
      unsent_internal_events_at_close: e?.unsentInternalEvents
    };
  }
  function vr() {
    let e = me.end(),
      r = ve.end().map(item => item.frame);
    tt = !1, li(e.length + r.length, r, transport.discardUndeliveredEvents?.() ?? []);
  }
  function li(queued, r, s) {
    if (queued === 0 && s.length === 0) return;
    K("warn", "bridge_repl_v2_client_events_lost", {
      queued: queued,
      undelivered: s.length
    }), p("bridge_repl", "client_events_lost_at_dead_end", {
      queued: queued,
      undelivered: s.length
    });
    let a = [...s.map(item => item.payload.subtype), ...r.map(item => item.type === "system" && "subtype" in item ? item.subtype : void 0)],
      has_terminal_bookend = a.includes("task_notification"),
      has_level = a.includes("background_tasks_changed");
    if (has_terminal_bookend || has_level) p("ccr_task_status_publish", "status_events_lost_at_dead_end", {
      has_terminal_bookend: has_terminal_bookend,
      has_level: has_level
    });
  }
  let re,
    ge,
    rt = !1,
    Ct,
    ze,
    De,
    ne = !1,
    G = !1,
    Gt;
  function kt() {
    return !0;
  }
  function Le(e, r, s = !0) {
    if (s) Ct = void 0, ze = void 0;
    if (!rt || !kt()) return !1;
    if (r === void 0) p("bridge_presence", e);else p("bridge_presence", e, r);
    return !0;
  }
  function de(e, r) {
    if (Ct = void 0, ze = void 0, ne = !0, !kt()) return !1;
    if (!rt) return m("bridge_connect", "bridge_connect_died_before_presence"), !1;
    if (r === void 0) m("bridge_presence", e);else m("bridge_presence", e, r);
    return !0;
  }
  let br = !1;
  function onNonOriginRejectionRecovered(e) {
    if (w || G || ne) return;
    if (t(`[remote-bridge] SSE stream live again after ${e.attempts} non-origin 403(s) over ${Math.round(e.streakMs / 1000)}s (source=${e.source})`), Le(ba[e.source], {
      attempts: e.attempts,
      streak_s: Math.round(e.streakMs / 1000),
      first_in_episode: br ? 0 : 1
    }, !1)) br = !0;
  }
  function zr(e) {
    if (!xCe(e?.rejectSource)) {
      de(lo(e));
      return;
    }
    if (de(lo(e), {
      ...(e.streak !== void 0 && {
        attempts: e.streak.attempts,
        streak_s: Math.round(e.streak.streakMs / 1000)
      }),
      first_in_episode: br ? 0 : 1
    })) br = !0;
  }
  function ui(e) {
    if (vk(R)) return;
    let r = re === void 0 ? void 0 : uo(re.code, re.cause);
    if (ge !== void 0 || re === void 0 || r === void 0 || Lt && co(r)) return;
    if (ge = r, t(`[remote-bridge] ${e} latched a stashed supersession close (${re.code}/${re.cause ?? "uncaused"}) \u2014 archive suppressed`), !ne) {
      if (re.code === 403) zr(re.detail);else if (re.code === 404) de("transport_closed_404");else Le("transport_closed_4090"), ne = !0;
      De = void 0;
    }
  }
  function Vr(e) {
    if (!kt()) return;
    switch (e.leg) {
      case "ok":
        _("bridge_token_refresh");
        return;
      case "sad":
        p("bridge_token_refresh", e.code);
        return;
      case "bad":
        m("bridge_token_refresh", e.code);
        return;
    }
  }
  function fi(e) {
    if (!$jn()) return;
    let r = n$r();
    if (r === void 0 || r.generation <= e) return pi();
    return _i(r.reason);
  }
  function _i(e) {
    switch (e) {
      case "signed_out":
        return "host_signed_out";
      case "identity_changed":
        return "host_account_changed";
      case "transient":
      case "refresh_failed":
        return;
    }
  }
  function pi() {
    if (ze === void 0) return;
    if (ze.generation === Mpn()) return ze.code;
    let e = n$r();
    return e === void 0 ? void 0 : _i(e.reason);
  }
  function hi(e) {
    return e === "host_signed_out" ? YEr : XEr;
  }
  function gi(e) {
    return e === "host_signed_out" ? "auth" : "terminal";
  }
  function Yr() {
    return ownerPin !== void 0 && !w && !G && Xae();
  }
  function nt() {
    return Yr() && ownerPin !== void 0 && ownerPin.identityLooksChanged();
  }
  async function mi(e, r) {
    if (G) return "changed";
    if (!Yr() || ownerPin === void 0) return "unchanged";
    let s = await ownerPin.confirmChanged(r);
    if (s === "changed") return await Ss(e), "changed";
    return G ? "changed" : s;
  }
  async function At(e) {
    return (await mi(e)) === "changed";
  }
  async function zt(e, r) {
    if (nt() && (await At(e))) return !0;
    return w || J !== r;
  }
  async function Ss(e) {
    if (w || G || ownerPin === void 0) return;
    if (G = !0, Gt?.(), Gt = void 0, Ve.cancelAll(), ti(), onOwnerChanged?.(), gr = !1, ui("owner_changed"), re = void 0, clearTimeout(Pt), wt(), Er?.(), Er = void 0, Ei(), Si(), vk(R)) {
      t(`[remote-bridge] Signed-in account changed under teleported session ${R} (${e}) \u2014 latched only`), vr(), onTransportPersistenceTeardown?.(), lr(), transport.close();
      return;
    }
    let episode_already_dead = ne || ge !== void 0;
    if (t(`[remote-bridge] Signed-in account changed under ${R} (${e}${episode_already_dead ? ", episode already dead" : ""}) \u2014 stopping`), K("info", "bridge_repl_v2_owner_changed"), !episode_already_dead) Le(e), ne = !0, te(eUn, "terminal"), transport.write(FDr(R, "account_changed")), await Wt(Ht() ? F.teardown_archive_timeout_ms : ao).catch(() => {
      return;
    });else if (!Tt) te(eUn, "terminal");else vr();
    if (onTransportPersistenceTeardown?.(), lr(), !w) transport.close();
    if (ge !== void 0) return;
    let s;
    if (neverArchive_2) s = "skipped_host_owned", t(`[remote-bridge] Owner-changed settle left host-owned session ${R} unarchived`);else {
      let a = await ft(R, baseUrl, ownerPin.ownerToken(), orgUUID, F.teardown_archive_timeout_ms, void 0, storageV5);
      s = _o(a, ge), t(`[remote-bridge] Owner-changed settle archived ${R} with the owner's credential (archive=${a})`);
    }
    if (kt()) i("tengu_bridge_owner_changed", {
      site: c(e),
      archive_status: c(s),
      episode_already_dead: episode_already_dead
    });
  }
  function vi() {
    if (ge !== void 0) return ge;
    if (G) return "owner_changed";
    return;
  }
  function Jr() {
    if (ownerPin !== void 0 && Xae() && ownerPin.identityLooksChanged()) return {
      token: ownerPin.ownerToken(),
      source: "pinned_owner"
    };
    return {
      token: getAccessToken(),
      source: "current"
    };
  }
  let Rr = reattach,
    fe = new Map(),
    it = new Set();
  function Xr(e, r) {
    if (it.delete(e), fe.delete(e) && r) Ycn(e);
  }
  function Qr() {
    let e,
      r = !1;
    for (let [s, a] of fe) {
      if (it.has(s)) continue;
      r = !0, e = a.details ?? e;
    }
    if (r) Ae("requires_action", e);else Ae("running");
  }
  let bi,
    Ae = (e, pending_action) => {
      if (onBeforePushTriggeringState && !G && (e === "requires_action" || e === "idle")) onBeforePushTriggeringState();
      if (transport.reportState(e, pending_action), e === "requires_action" && pending_action) {
        Rr = !0;
        let s = [...fe.values()].flatMap(item => item.details ? [item.details] : []).reverse();
        transport.reportMetadata({
          pending_action: pending_action,
          pending_actions: QEr(pending_action, s.filter(item => item !== pending_action))
        });
      } else if (Rr) Rr = !1, transport.reportMetadata({
        pending_action: null,
        pending_actions: null
      });
      if (e === "running" && bi !== "running") {
        if (transport.reportMetadata({
          post_turn_summary: null,
          recap: null
        }), LIr(), he === "deferred") delete $t.post_turn_summary, delete $t.recap;
      }
      bi = e;
    };
  function getPendingPrompts() {
    return it.clear(), [...fe.values()].map(item => item.request);
  }
  let Er, Ri, Sr;
  if (gitRepoUrl) (async () => {
    let {
        isNestedGitLabProject: isNestedGitLabProject,
        parseGitRemote: parseGitRemote,
        parseGitHubRepository: parseGitHubRepository
      } = await import("B:/~BUN/root/chunk-12npfqes.js"),
      {
        addWatchedRepo: addWatchedRepo,
        removeWatchedRepo: removeWatchedRepo,
        getCachedBranchForRepo: getCachedBranchForRepo,
        onRepoBranchChange: onRepoBranchChange,
        getRemoteUrlForDir: getRemoteUrlForDir
      } = await import("B:/~BUN/root/chunk-z9gbsvbj.js"),
      P = await import("B:/~BUN/root/chunk-56kjyvg4.js"),
      y = parseGitRemote(gitRepoUrl);
    if (y && isNestedGitLabProject(y)) return;
    let j = y ? `${y.owner}/${y.name}` : parseGitHubRepository(gitRepoUrl);
    if (!j) return;
    let Z = y ? `${y.host}/${y.owner}/${y.name}` : `github.com/${j}`,
      C = getOriginalCwd();
    if (await addWatchedRepo(C), w || G) {
      removeWatchedRepo(C);
      return;
    }
    let L,
      pe = reattach,
      ee = reattach,
      we = 0,
      Ce = !1,
      Ne = !1,
      Jt = async () => {
        if (Ce) {
          Ne = !0;
          return;
        }
        Ce = !0;
        try {
          do {
            Ne = !1;
            let ke = we;
            if (w || G) return;
            let Fe = getOriginalCwd();
            if (Fe !== C) {
              if (removeWatchedRepo(C), C = Fe, await addWatchedRepo(Fe), w || G) {
                removeWatchedRepo(Fe);
                return;
              }
            }
            let ce = await getCachedBranchForRepo(Fe);
            if (ke !== we) {
              Ne = !0;
              continue;
            }
            if (w || Be("branch_metadata")) return;
            if (ce === void 0) {
              if (L !== null) if (L = null, pe) pe = !1, transport.reportMetadata({
                current_branches: {
                  [j]: null
                },
                worktree_state: {
                  [j]: null
                }
              });else transport.reportMetadata({
                current_branches: {
                  [j]: null
                }
              });
              continue;
            }
            if (P && x("tengu_ccr_handoff_metadata", !1)) {
              let [xs, kr] = await Promise.all([P.collectWorktreeState(Fe, ce), P.withCollectTimeout(getRemoteUrlForDir(Fe)).catch(() => null)]);
              if (ke !== we) {
                Ne = !0;
                continue;
              }
              if (w || Be("branch_metadata")) return;
              let Ar = kr ? parseGitRemote(kr) : null,
                Ui = kr ? parseGitHubRepository(kr) : null,
                Hi = (Ar ? `${Ar.host}/${Ar.owner}/${Ar.name}` : Ui ? `github.com/${Ui}` : null) === Z,
                un = Hi ? ce : null,
                Pe = Hi ? xs : null,
                xi = Pe ? JSON.stringify([un, Pe.head_sha, Pe.unpushed_count, Pe.is_dirty, Pe.mid_operation, Pe.upstream_exists, Pe.has_submodules, Pe.submodules_unverified, Pe.has_lfs]) : JSON.stringify([un]);
              if (xi === L) continue;
              if (L = xi, t(`[remote-bridge] worktree_state \u2192 ${j}: ${JSON.stringify(Pe)}`), pe = Pe !== null, Pe !== null) ee = !0;
              transport.reportMetadata({
                current_branches: {
                  [j]: un
                },
                worktree_state: {
                  [j]: Pe
                }
              });
              continue;
            }
            if (pe) {
              pe = !1, L = ce, transport.reportMetadata({
                current_branches: {
                  [j]: ce
                },
                worktree_state: {
                  [j]: null
                }
              });
              continue;
            }
            if (ce === L) continue;
            L = ce, transport.reportMetadata({
              current_branches: {
                [j]: ce
              }
            });
          } while (Ne);
        } catch (error) {
          t(`[remote-bridge] current_branches emit failed: ${l(error)}`);
        } finally {
          Ce = !1;
        }
      };
    Ri = () => {
      if (L = void 0, pe = ee, we++, Ce) Ne = !0;
    }, Sr = () => void Jt();
    let ct = onRepoBranchChange(Sr);
    Er = () => {
      ct(), removeWatchedRepo(C);
    }, Jt();
  })().catch(e => t(`[remote-bridge] current_branches setup failed: ${l(e)}`));
  let Ei = BY(() => idleTracker.noteActivity()),
    Si = qd(() => {
      transport.setStreamEventFlushIntervalMs?.($n()), transport.setStreamEventFirstFlushMs?.(Ln()), transport.setNoSubscriberStreamEventFlushIntervalMs?.(qn()), transport.setNoSubscriberUploadHoldMs?.(Qe()), transport.setDropUnwatchedStreamEvents?.(Wn()), Bs();
    }),
    Mt = new Map(),
    yi = !onUserMessage,
    yr = "initial",
    remint_attempts = 0,
    Pt;
  function wi(e) {
    if (w) return;
    if (i("tengu_bridge_repl_connect_timeout", {
      v2: !0,
      elapsed_ms: F.connect_timeout_ms,
      cause: c(e)
    }), m("bridge_connect", "bridge_connect_timeout"), ne) ;else if (Object.values(Me).some(item => item.cause === e)) De = "recovery_connect_timeout";else if (e === "proactive_refresh") De = "refresh_connect_timeout";
  }
  async function ws(e) {
    if (!onAuth401) return "rejected";
    try {
      if (await onAuth401(e)) return "recovered";
    } catch (error) {
      t(`[remote-bridge] Proactive forced OAuth refresh threw: ${l(error)}`, {
        level: "error"
      });
    }
    if (!xn() || !classifyFailedOAuthRefresh) return "rejected";
    return classifyFailedOAuthRefresh();
  }
  let Ts = 3,
    en,
    early_retry = 0;
  function tn() {
    en = void 0, early_retry = 0;
  }
  function Ti(e) {
    return e !== void 0 && e === en && xn();
  }
  let Ve = NYe({
    refreshBufferMs: F.token_refresh_buffer_ms,
    onExhausted: e => {
      if (!w && !ne) Vr({
        leg: "bad",
        code: "chain_exhausted_no_oauth"
      });
      if (recovery_in_flight || w) return;
      if (Tt) {
        t(`[remote-bridge] Token refresh chain exhausted for ${e} \u2014 terminal state already showing, not repainting`);
        return;
      }
      t(`[remote-bridge] Token refresh chain exhausted for ${e} \u2014 surfacing auth failure`, {
        level: "error"
      }), onStateChange?.("failed", "OAuth token unavailable \u2014 run /login to restore Remote Control", "auth");
    },
    getAccessToken: async () => {
      if (G) return;
      if (nt()) {
        let s = ne;
        if (await At("owner_changed_refresh")) {
          if (G && !s) Vr({
            leg: "sad",
            code: "owner_changed"
          });
          return;
        }
      }
      if (workSecretCredentials) return jn;
      let e = getAccessToken(),
        r = Ti(e);
      try {
        if (r) await onReadFreshOAuthToken?.();else await onProactiveRefresh?.();
      } catch (error) {
        t(`[remote-bridge] scheduler token refresh failed: ${l(error)}`, {
          level: "error"
        });
      }
      return getAccessToken() ?? e;
    },
    onRefresh: (e, r) => {
      (async () => {
        if (ge !== void 0 || G) {
          t(`[remote-bridge] Proactive refresh skipped: session ${G ? "stopped for an owner change" : "superseded"}`);
          return;
        }
        if (recovery_in_flight || w) {
          if (t("[remote-bridge] Recovery already in flight, skipping proactive refresh"), recovery_in_flight && Ze !== 0) et = !0;
          return;
        }
        if (vk(e)) {
          t(`[remote-bridge] Proactive refresh suppressed for teleported session ${e}`);
          return;
        }
        let s = Qn(),
          a = ne,
          h = !1,
          v,
          A,
          D,
          P,
          y = !1;
        function j(C, L, pe = "refresh_credentials_rejected", code) {
          if (w) return;
          if (De !== void 0 && re === void 0) de(De), De = void 0;else if (!a) Ct = pe, ze = code === void 0 ? void 0 : {
            code: code,
            generation: Mpn()
          };
          v = C, A = "refresh_credentials_rejected", D = L;
        }
        async function Z() {
          if (!(await zt("owner_changed_refresh", s))) return !1;
          if (G) P = {
            leg: "sad",
            code: "owner_changed"
          };
          return !0;
        }
        try {
          if (await Z()) return;
          let C = Ti(r);
          if (!C) tn();
          let L = Date.now(),
            pe = dr,
            ee = await Dt(() => {
              if (C) return Promise.resolve({
                terminal: !1,
                reason: "oauth_rejected"
              });
              if (w || ge !== void 0 || J !== s) return Promise.resolve(null);
              return rr(e, baseUrl, r, F.http_timeout_ms, void 0, credentialsStore).then(Ce => w || J !== s ? Ce : xr(Ce));
            }, "fetchRemoteCredentials (proactive)", F);
          if (w || J !== s) return;
          if (Wz(ee)) {
            if (t(C ? "[remote-bridge] Proactive cycle: bearer already rejected by /bridge \u2014 retrying the forced OAuth refresh without re-registering" : "[remote-bridge] Proactive /bridge re-mint rejected (oauth_rejected) \u2014 attempting forced OAuth refresh"), !C) K("error", "bridge_repl_v2_proactive_oauth_rejected");
            if (await Z()) return;
            let Ce = Mpn(),
              Ne = await ws(r),
              Jt = getAccessToken() ?? r;
            if (await Z()) return;
            if (Ne === "unreachable") {
              if (t("[remote-bridge] Proactive forced OAuth refresh got no verdict (token endpoint unreachable); keeping transport, a later cycle retries the refresh"), !C) P = {
                leg: "sad",
                code: "refresh_deferred_transient"
              };
              en = r;
              let rearmed = early_retry < Ts;
              if (vk(e)) rearmed = !1;
              if (rearmed) early_retry++, Ve.scheduleFromExpiresIn(e, 0);
              K("info", "bridge_repl_v2_proactive_refresh_unreachable", {
                early_retry: early_retry,
                rearmed: rearmed
              });
              return;
            }
            let ct = Ne === "recovered";
            if (ct) tn();
            let ke = ct ? await Dt(() => {
              if (w || ge !== void 0 || J !== s) return Promise.resolve(null);
              return rr(e, baseUrl, Jt, F.http_timeout_ms, void 0, credentialsStore).then(ce => w || J !== s ? ce : xr(ce));
            }, "fetchRemoteCredentials (proactive post-refresh)", F) : null;
            if (w || J !== s) return;
            if (ct && ke === null) {
              if (t("[remote-bridge] Proactive post-refresh re-mint failed (transient); fallback refresh will retry"), ge === void 0) P = {
                leg: "sad",
                code: "post_refresh_remint_null"
              };
              return;
            }
            if (Tte(ke)) {
              P = {
                leg: "bad",
                code: `post_refresh_credentials_${Ke(ke)}`
              }, j(Zue(ke), Ke(ke), Or("refresh", ke));
              return;
            }
            if (ke === null || Wz(ke)) {
              let code_2 = ct ? void 0 : fi(Ce);
              if (code_2 !== void 0) {
                P = {
                  leg: "sad",
                  code: code_2
                }, K("info", "bridge_repl_v2_proactive_host_declined"), j(hi(code_2), gi(code_2), "refresh_credentials_rejected", code_2);
                return;
              }
              P = {
                leg: "bad",
                code: ct ? "oauth_rejected_after_refresh" : onAuth401 ? "oauth_rejected_refresh_failed" : "oauth_rejected_no_refresh_path"
              }, j(Zo, "auth");
              return;
            }
            tr(Jt);
            let Fe = await rn(ke, "proactive_refresh", 0, L, pe);
            if (Fe === "suppressed_teleported") y = !0;
            if (Fe === "rebuilt") h = !0, P = {
              leg: "sad",
              code: "oauth_rejected_recovered"
            }, t("[remote-bridge] Transport rebuilt (proactive refresh after forced OAuth refresh)");
            return;
          }
          if (!ee) {
            if (t("[remote-bridge] Proactive /bridge re-mint failed (transient); fallback refresh will retry"), K("warn", "bridge_repl_v2_proactive_remint_null"), ge === void 0) P = {
              leg: "sad",
              code: "remint_null"
            };
            return;
          }
          if (Tte(ee)) {
            P = {
              leg: "bad",
              code: `credentials_${Ke(ee)}`
            }, j(Zue(ee), Ke(ee), Or("refresh", ee));
            return;
          }
          tr(r);
          let we = await rn(ee, "proactive_refresh", 0, L, pe);
          if (we === "suppressed_teleported") y = !0;
          if (we === "rebuilt") h = !0, P = {
            leg: "ok"
          }, t("[remote-bridge] Transport rebuilt (proactive refresh)");
        } catch (error) {
          if (t(`[remote-bridge] Proactive refresh rebuild failed: ${l(error)}`, {
            level: "error"
          }), K("error", "bridge_repl_v2_proactive_refresh_failed"), !w && !G) v = `Refresh failed: ${l(error)}`, A = "refresh_rebuild_failed", D = "terminal", P = {
            leg: "bad",
            code: "rebuild_threw"
          };
        } finally {
          let C = y;
          if (vk(e)) C = !0;
          if (P !== void 0 && !a && !w && !(C && P.leg === "bad")) Vr(P);
          if (!Zn(s)) return;
          Kn();
          let L = re;
          if (re = void 0, C) {
            if (L !== void 0 && !w) te("Session teleported to cloud");
          } else if (L !== void 0 && !h && !w && !ne) {
            let pe = Tr(L.code, L.cause, L.detail, !0);
            if (v !== void 0 && !pe && !w && !recovery_in_flight) te(v, D);
          } else if (L !== void 0 && h && !w) {
            if (Ai(L.code) && !a) Le(Me[L.code].recoveredCode);
          } else if (v !== void 0 && !w) {
            if (te(v, D), A !== void 0 && A !== "refresh_credentials_rejected" && !a) de(A);
          }
        }
      })();
    },
    label: "remote"
  });
  if (Ve.scheduleFromExpiresIn(R, X.expires_in), Gt = ownerPin?.subscribe(() => {
    At("owner_changed");
  }), nt()) At("owner_changed");
  let ot;
  function Ci() {
    transport.setOnConnect(s => {
      if (G) return;
      if (clearTimeout(Pt), yt = 0, De = void 0, ne = !1, Ct = void 0, ze = void 0, Tt = !1, Hr(), ge = void 0, fe.size > 0) {
        let a = [...fe.values()].findLast(h => h.details !== void 0);
        Ae("requires_action", a?.details), it.clear();
      }
      if (t("[remote-bridge] v2 transport connected"), K("info", "bridge_repl_v2_transport_connected"), Os(s), he === "deferred") {
        if (dt === void 0 && !Ii) Cr(ur, () => {
          Ii = !0;
        });
      } else {
        if (Ot) Cr(null, () => {
          Ot = !1;
        });
        an();
      }
      if (i("tengu_bridge_repl_ws_connected", {
        v2: !0,
        cause: c(yr),
        ...(remint_attempts > 0 && {
          remint_attempts: remint_attempts
        })
      }), !rt && kt()) rt = !0, _("bridge_presence");
      if (he === "deferred") {
        if (!bt && fe.size === 0) {
          let a = initialMessages?.filter(h => LX(h)).findLast(h => !VGn(h));
          if (st(() => a !== void 0 && nNt(a) && !Ir(a))) Ae("running");
        }
        bt = !0;
      }
      if (!bt && initialMessages && initialMessages.length > 0 && !sr) {
        bt = !0;
        let a = transport;
        Ps(initialMessages).catch(h => t(`[remote-bridge] flushHistory failed: ${h}`)).finally(() => {
          if (transport !== a || w || G || recovery_in_flight) return;
          at(), qt();
        });
      } else if (Kt) qt();else if ((me.active || ve.active) && !recovery_in_flight) wt(), at(), qt();else if (!me.active) qt();
      Is();
    }), transport.setOnData(s => {
      if (G) return;
      if (ot !== void 0) {
        ot.push(s);
        return;
      }
      if (!nt()) {
        r(s);
        return;
      }
      ot = [s], e();
    }), transport.setOnClose(Tr);
    function e() {
      At("owner_changed").then(s => {
        let a = ot;
        if (a === void 0) return;
        if (s || w) {
          ot = void 0;
          return;
        }
        let h = a.length;
        while (a.length > 0) {
          if (G || w) {
            ot = void 0;
            return;
          }
          if (h === 0 && nt()) {
            e();
            return;
          }
          h = Math.max(0, h - 1);
          let v = a.shift();
          if (v !== void 0) r(v);
        }
        ot = void 0;
      });
    }
    function r(s) {
      yIo(s, mt, ms, a => {
        if (C5t(a, "bridge")) idleTracker.noteActivity(), lt("client_prompt");
        return onInboundMessage?.(a);
      }, onPermissionResponse ? a => {
        if (onPermissionResponse(a)) {
          let h = a.response.subtype === "success" && !!a.response.response;
          if (h) idleTracker.noteActivity(), lt("client_input");
          if (Xr(a.response.request_id, h), !Ge) Qr();
        }
      } : void 0, a => {
        if (SKt(a)) idleTracker.noteActivity(), lt("client_input");
        bIo(a, {
          transport: transport,
          sessionId: R,
          onInterrupt: onInterrupt,
          onStopTask: onStopTask,
          onBackgroundTasks: onBackgroundTasks,
          onCancelAsyncMessage: onCancelAsyncMessage,
          getInitializeState: getInitializeState,
          getCommands: getCommands,
          getPendingPrompts: getPendingPrompts,
          onDialogKindsDeclared: onDialogKindsDeclared,
          onClientInitialize: onClientInitialize_2,
          onSetModel: onSetModel,
          onSetMaxThinkingTokens: onSetMaxThinkingTokens,
          onSetPermissionMode: onSetPermissionMode,
          onApplyFlagSettings: onApplyFlagSettings,
          onRenameSession: onRenameSession,
          onSetColor: onSetColor,
          onFileSuggestions: onFileSuggestions,
          onReadFile: onReadFile,
          onGetWorkspaceDiff: onGetWorkspaceDiff,
          onSideQuestion: onSideQuestion,
          onGetContextUsage: onGetContextUsage,
          answerSharedControlRequest: answerSharedControlRequest,
          onMcpAuthenticate: onMcpAuthenticate,
          onMcpOauthCallbackUrl: onMcpOauthCallbackUrl,
          onMcpReconnect: onMcpReconnect,
          onMcpSetServers: onMcpSetServers,
          onForkConversation: onForkConversation,
          hasPendingPrompts: () => fe.size > 0,
          outboundOnly: outboundOnly,
          writeFrame: h => {
            if (Be(h.type)) return;
            Vt(h, h.type);
          },
          cancellableRequests: cancellableRequests
        });
      }, a => cancellableRequests.get(a)?.abort(), onQueuedNotification);
    }
  }
  function Tr(e, cause, detail, a = !1) {
    let h = !1;
    if (clearTimeout(Pt), w || G) return li(0, [], transport.discardUndeliveredEvents?.() ?? []), !1;
    if (!a) t(`[remote-bridge] v2 transport closed (code=${e}${detail ? ` source=${detail.rejectSource}` : ""})`), i("tengu_bridge_repl_ws_closed", {
      code: e,
      v2: !0,
      close_cause: ue(cause),
      recovery_in_flight: recovery_in_flight,
      ...(detail !== void 0 && {
        reject_source: c(detail.rejectSource)
      })
    });
    if (recovery_in_flight) {
      let y = Et ? Date.now() - Et : 0;
      if (y <= ni) return re = {
        code: e ?? 4092,
        cause: cause,
        detail: detail
      }, !1;
      t(`[remote-bridge] authRecoveryInFlight held ${Math.round(y / 1000)}s (> ceiling ${Math.round(ni / 1000)}s) \u2014 treating as leaked, handling close directly`, {
        level: "error"
      }), K("error", "bridge_repl_v2_recovery_flag_leaked"), ti(), re = void 0, h = !0;
    }
    if (Ai(e)) {
      if (yt >= ii) {
        if (t(`[remote-bridge] ${e} recovery exhausted after ${yt} attempts`, {
          level: "error"
        }), te(`Transport recovery exhausted (code ${e})`), !ne) de("recovery_exhausted", {
          close_code: e
        });
        return !1;
      }
      if (e === 4094 && !a) {
        if (hr >= ii) {
          if (t(`[remote-bridge] worker-credential recovery exhausted after ${hr} attempts with no successful heartbeat between them`, {
            level: "error"
          }), te("Transport recovery exhausted (worker credential failures)", "auth"), !ne) de("cred_recovery_exhausted");
          return !1;
        }
        hr++;
      }
      if (e === 4093 && !a) {
        let y = oi.charge(Date.now(), $r());
        switch (y) {
          case "hourly_exhausted":
          case "daily_exhausted":
            {
              let window_h = y === "hourly_exhausted" ? 1 : 24;
              if (t(`[remote-bridge] heartbeat recovery budget exhausted (${window_h}h window)`, {
                level: "error"
              }), te(y === "hourly_exhausted" ? Ji : Xi), !ne) de("heartbeat_budget_exhausted", {
                window_h: window_h
              });
              return !1;
            }
          case "charged":
            break;
        }
      }
      return yt++, As(e), !1;
    }
    let v = (a || h) && Lt,
      A = uo(e, cause);
    if (A !== void 0 && !(v && co(A))) ge = A;
    let D = v && cause === "superseded_by_worker" ? void 0 : cause,
      P = e === 4090 && (D === "superseded_by_worker" || D === "session_not_active" || D === "session_not_found");
    if (te(P ? bn(e, D) : `Transport closed: ${bn(e, D, detail)}`, P ? "ended_elsewhere" : "terminal"), ne) return P;
    if (e === 4090) {
      if (a && Lt) de("transport_closed_4090");else Le("transport_closed_4090"), ne = !0;
    } else if (e === 403) zr(detail);else de(e === 404 ? "transport_closed_404" : "transport_closed_other");
    return P;
  }
  async function rn(e, r, s, a, h) {
    if (vk(R)) return t(`[remote-bridge] Rebuild suppressed for teleported session ${R}`), "suppressed_teleported";
    yr = r, remint_attempts = s, ge = void 0, Lt = !0, Rr = !1, Ri?.(), onTransportPersistenceTeardown?.(), me.start(), ve.start();
    try {
      let v = transport,
        initialSequenceNum_2 = v.getLastSequenceNum();
      if (v.close({
        goodbye: !1,
        retainUndelivered: !0
      }), transport = await Rn({
        ...Gn(),
        sessionUrl: bSe(e.api_base_url, R),
        ingressToken: e.worker_jwt,
        sessionId: R,
        epoch: e.worker_epoch,
        initialSequenceNum: initialSequenceNum_2,
        getAuthToken: () => e.worker_jwt
      }), w) return transport.close(), "rebuilt";
      if (G) return transport.close(), "suppressed_owner_changed";
      Ci(), transport.connect(), Ms(v), Sr?.(), PIr(), DIr(), HIr(), $Ir(), NIr(), u7r(), FIr(), onTransportRebuilt?.(), Pt = setTimeout(wi, F.connect_timeout_ms, yr), Ve.scheduleFromExpiresIn(R, e.expires_in), Lr = e.worker_jwt, worker_epoch = e.worker_epoch, api_base_url = e.api_base_url;
      let D = Ze !== 0 && (et || a < Ze);
      Ze = 0;
      let P = h < dr;
      et = D || P;
      try {
        _s(e, P);
      } catch (error) {
        d(error), m("bridge_webagent_mcp_inject", "refresh_threw");
      }
      at();
    } finally {
      me.deactivate(), ve.deactivate();
    }
    return "rebuilt";
  }
  async function ki(e, r, s) {
    let a = !s && onClassifyMissingOAuthToken !== void 0 && kt() && UPr(),
      h = a ? await onClassifyMissingOAuthToken(e) : void 0;
    if (a && (w || J !== r)) return;
    if (h === "signed_out") {
      if (t(`[remote-bridge] Signed out on this machine under ${R} (${e}) \u2014 stopping`), K("info", "bridge_repl_v2_signed_out"), Le("signed_out"), !rt) p("bridge_connect", "signed_out");
      ne = !0, te(es, "auth");
      return;
    }
    if (te(Xo, "auth"), !s) de("recovery_no_oauth_token");
  }
  async function Cs(close_code, r, s, a) {
    let h = Date.now();
    K("info", "bridge_repl_v2_remint_loop_entered"), gr = !0;
    let v = 0;
    try {
      let A = !1,
        D = 0;
      for (let attempts_2 = 1; !w; attempts_2++) {
        if (J !== r) return {
          creds: null,
          attempts: v
        };
        let y = Math.round((Date.now() - h) / 60000);
        mr(`${workSecretCredentials ? "Remote Control credentials unavailable" : "Remote Control server unreachable"} \u2014 retrying (attempt ${attempts_2}${y > 0 ? `, ${y}m elapsed` : ""})`);
        let j = Math.min(Ki * 2 ** (attempts_2 - 1), gn);
        if (await Q(Math.max(Math.random() * j, Yi)), w) break;
        if (J !== r) return {
          creds: null,
          attempts: v
        };
        if (Et = Date.now(), vk(R)) return te("Session teleported to cloud"), K("info", "bridge_repl_v2_remint_loop_teleported"), {
          creds: null,
          attempts: v
        };
        let Z = Dn();
        if (!Z) return K("info", "bridge_repl_v2_remint_loop_no_oauth"), await ki("remint_loop", r, s), {
          creds: null,
          attempts: v
        };
        let creds = await ar(Z, r);
        if (v = attempts_2, w) break;
        if (J !== r) return {
          creds: null,
          attempts: v
        };
        if (creds === null) {
          if (D++, a === void 0 || D < a.attempts) continue;
          if (t(`[remote-bridge] Re-mint loop exhausted (code ${close_code}): ${D} unreachable attempts, ${Math.round((Date.now() - h) / 1000)}s`, {
            level: "error"
          }), K("info", "bridge_repl_v2_remint_loop_exhausted", {
            attempts: v,
            elapsed_ms: Date.now() - h,
            queued_writes_dropped: me.pendingCount + ve.pendingCount
          }), te(a.exhaustedDetail), !s) de("recovery_exhausted", {
            close_code: close_code,
            remint_attempts: v
          });
          return {
            creds: null,
            attempts: v
          };
        }
        if (Wz(creds)) {
          if (onAuth401 && !A) {
            if (await zt("owner_changed_recovery", r)) return {
              creds: null,
              attempts: v
            };
            A = !0;
            let L = !1;
            try {
              L = await onAuth401(Z);
            } catch (error) {
              t(`[remote-bridge] Re-mint loop OAuth refresh threw: ${l(error)}`, {
                level: "error"
              });
            }
            if (w) break;
            if (J !== r) return {
              creds: null,
              attempts: v
            };
            if (L) {
              t("[remote-bridge] Re-mint rejected after outage \u2014 OAuth refresh succeeded; retrying with the refreshed credential");
              continue;
            }
          }
          if (te(Fr, "auth"), !s) de("recovery_credentials_rejected");
          return K("info", "bridge_repl_v2_remint_loop_rejected"), {
            creds: null,
            attempts: v
          };
        }
        if (Tte(creds)) {
          if (te(Zue(creds), Ke(creds)), !s) de(Or("recovery", creds));
          return K("info", "bridge_repl_v2_remint_loop_denied"), {
            creds: null,
            attempts: v
          };
        }
        return t(`[remote-bridge] Re-mint loop succeeded (code ${close_code}, attempt ${attempts_2}, ${Math.round((Date.now() - h) / 1000)}s)`), K("info", "bridge_repl_v2_remint_loop_recovered", {
          attempts: attempts_2,
          elapsed_ms: Date.now() - h
        }), {
          creds: creds,
          attempts: v
        };
      }
      return {
        creds: null,
        attempts: v
      };
    } finally {
      if (J === r) gr = !1;
    }
  }
  let Me = {
    401: {
      reconnectingDetail: "JWT expired \u2014 refreshing",
      cause: "auth_401_recovery",
      failureDiagnostic: "bridge_repl_v2_jwt_refresh_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_auth_401",
      needsOAuthRefresh: !0
    },
    4091: {
      reconnectingDetail: "CCR init failed \u2014 retrying",
      cause: "init_4091_recovery",
      failureDiagnostic: "bridge_repl_v2_4091_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_init_4091",
      needsOAuthRefresh: !1
    },
    4093: {
      reconnectingDetail: "presence heartbeats failing \u2014 reconnecting",
      cause: "heartbeat_4093_recovery",
      failureDiagnostic: "bridge_repl_v2_4093_recovery_failed",
      fetchFailure: "retry",
      remintCap: remintCap,
      recoveredCode: "recovered_heartbeat_4093",
      needsOAuthRefresh: !1
    },
    4094: {
      reconnectingDetail: "worker credential expired \u2014 re-minting",
      cause: "cred_4094_recovery",
      failureDiagnostic: "bridge_repl_v2_4094_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_cred_4094",
      needsOAuthRefresh: !0
    }
  };
  function Ai(e) {
    if (e === 4094) return Bat();
    return e === 401 || e === 4091 || e === 4093;
  }
  let Mi = 30000,
    ks = 5000;
  function Pi(e, r) {
    if (Me[e].fetchFailure === "terminal") {
      te(r);
      return;
    }
    me.start(), ve.start(), mr("presence recovery failed \u2014 retrying"), t(`[remote-bridge] ${e} recovery fetch failed \u2014 retrying in ${Mi}ms`), wt();
    let s = transport;
    function a() {
      if ($e = void 0, w) return;
      if (yt === 0) {
        if (me.active || ve.active) {
          if (recovery_in_flight) {
            $e = setTimeout(a, ks);
            return;
          }
          at(), qt();
        }
        return;
      }
      if (transport !== s) return;
      Tr(e, void 0, void 0, !0);
    }
    $e = setTimeout(a, Mi);
  }
  async function As(e) {
    let r = ne;
    if (vk(R)) {
      te("Session teleported to cloud");
      return;
    }
    if (recovery_in_flight) return;
    let s = Qn();
    me.start(), ve.start(), mr(Me[e].reconnectingDetail), t(`[remote-bridge] ${e} on transport \u2014 attempting credential refresh + rebuild`);
    try {
      if (await zt("owner_changed_recovery", s)) return;
      let a = getAccessToken(),
        h = !0,
        v = Mpn();
      if (!workSecretCredentials && Me[e].needsOAuthRefresh && onAuth401) try {
        h = await onAuth401(a ?? "");
      } catch (error) {
        h = !1, t(`[remote-bridge] ${e} recovery OAuth refresh threw: ${l(error)}`, {
          level: "error"
        });
      } else if (!workSecretCredentials && onProactiveRefresh) try {
        await onProactiveRefresh();
      } catch (error) {
        t(`[remote-bridge] pre-recovery token refresh failed: ${l(error)}`, {
          level: "error"
        });
      }
      if (J !== s) return;
      let A = Dn() ?? a;
      if (!A || w) {
        if (!w) await ki("recovery", s, r);
        return;
      }
      if (vk(R)) {
        te("Session teleported to cloud");
        return;
      }
      let D = Date.now(),
        P = dr,
        y = await Dt(() => ar(A, s), "fetchRemoteCredentials (recovery)", F);
      if (J !== s) return;
      if ((!y || Wz(y)) && !w && Me[e].needsOAuthRefresh && onAuth401 && !h) {
        let C = !1;
        for (let L = 1; L <= F.oauth_retry_max_attempts && !w; L++) {
          mr(`OAuth refresh failed \u2014 waiting for a fresh login (${L}/${F.oauth_retry_max_attempts})`);
          let pe = F.oauth_retry_base_delay_ms * 2 ** (L - 1),
            ee = pe * F.init_retry_jitter_fraction * (2 * Math.random() - 1);
          if (await Q(pe + ee), await zt("owner_changed_recovery", s)) return;
          let we;
          try {
            we = onReadFreshOAuthToken ? await onReadFreshOAuthToken() : (await onAuth401(a ?? "")) ? getAccessToken() : void 0;
          } catch (error) {
            t(`[remote-bridge] Adopt-loop token read threw (attempt ${L}): ${l(error)}`, {
              level: "error"
            });
          }
          if (w || J !== s) return;
          let Ce = we !== void 0 && we !== (a ?? "") ? we : void 0;
          if (!Ce) continue;
          if (C = !0, vk(R)) {
            te("Session teleported to cloud");
            return;
          }
          y = await Dt(() => ar(Ce, s), "fetchRemoteCredentials (recovery re-poll)", F);
          break;
        }
        if (J !== s) return;
        if (Wz(y) && !C) {
          if (!w) {
            let L = fi(v);
            if (L !== void 0) {
              if (K("info", "bridge_repl_v2_recovery_host_declined"), te(hi(L), gi(L)), !r) if (rt) Le(L), ne = !0;else de("recovery_reauth_required");
              return;
            }
            if (te("OAuth token refresh failed \u2014 run /login to re-authenticate", "auth"), !r) de("recovery_reauth_required");
          }
          return;
        }
      }
      if (w) return;
      if (!y && Me[e].fetchFailure === "retry" && !$r()) {
        Pi(e, `could not fetch fresh session credentials after code ${e}`);
        return;
      }
      if (Wz(y) && !Me[e].needsOAuthRefresh && onAuth401) {
        if (await zt("owner_changed_recovery", s)) return;
        let C = !1;
        try {
          C = await onAuth401(a ?? "");
        } catch (error) {
          t(`[remote-bridge] ${e} late OAuth refresh threw: ${l(error)}`, {
            level: "error"
          });
        }
        if (w || J !== s) return;
        if (C) {
          if (y = await Dt(() => ar(getAccessToken() ?? a ?? "", s), `fetchRemoteCredentials (${e} late refresh)`, F), w || J !== s) return;
        }
      }
      if (Wz(y)) {
        if (te(Fr, "auth"), !r) de("recovery_credentials_rejected");
        return;
      }
      let remint_attempts_2 = 0;
      if (!y) {
        let C = await Cs(e, s, r, $r() ? Me[e].remintCap : void 0);
        if (y = C.creds, remint_attempts_2 = C.attempts, !y || w || J !== s) return;
      }
      if (Tte(y)) {
        if (!w) {
          if (te(Zue(y), Ke(y)), !r) de(Or("recovery", y));
        }
        return;
      }
      if (J !== s) return;
      bt = reattach || Jn;
      let Z = await rn(y, Me[e].cause, remint_attempts_2, D, P);
      if (Z === "suppressed_teleported") {
        te("Session teleported to cloud");
        return;
      }
      if (Z === "suppressed_owner_changed") return;
      if (t(`[remote-bridge] Transport rebuilt after ${e}`), !w) {
        if (!r) Le(Me[e].recoveredCode, remint_attempts_2 > 0 ? {
          remint_attempts: remint_attempts_2
        } : void 0);
      }
    } catch (error) {
      if (t(`[remote-bridge] ${e} recovery failed: ${l(error)}`, {
        level: "error"
      }), K("error", Me[e].failureDiagnostic), !w && !G) {
        if (Pi(e, `Transport recovery failed (${e}): ${l(error)}`), Me[e].fetchFailure === "terminal" && !r) de("recovery_failed");
      }
    } finally {
      if (Zn(s)) {
        if (Kn(), $e !== void 0 && re !== void 0) {
          wt();
          let a = re;
          re = void 0, Tr(a.code, a.cause, a.detail, !0);
        } else re = void 0;
        if ($e === void 0 && !recovery_in_flight) me.drop(), ve.drop(), tt = !1;
      }
    }
  }
  if (Ci(), !reattach && initialMessages && initialMessages.length > 0) me.start(), ve.start();
  transport.connect(), Pt = setTimeout(wi, F.connect_timeout_ms, yr);
  function st(e) {
    return isTurnLive ? isTurnLive(e) : e();
  }
  function Oi(e) {
    return toSDKMessages(e).map(item => {
      if (item.type !== "assistant" || item.parent_tool_use_id !== null || item.uuid === void 0) return {
        ...item,
        session_id: R
      };
      let user_message_uuid = vt.get(item.uuid);
      if (user_message_uuid === void 0) return {
        ...item,
        session_id: R
      };
      return vt.delete(item.uuid), {
        ...item,
        session_id: R,
        user_message_uuid: user_message_uuid,
        user_message_uuids: [user_message_uuid]
      };
    });
  }
  function at() {
    let e = he === "deferred",
      r = e ? me.end().filter(item => pn(item.message)) : me.end(),
      s = e ? ve.end().filter(item => !hn(item.frame)) : ve.end(),
      a = tt;
    if (tt = !1, r.length === 0 && s.length === 0) {
      if (e && st(() => a) && fe.size === 0) Ae("running");
      return;
    }
    let h = [],
      v = [],
      A = () => {
        if (v.length > 0) h.push(...Oi(v)), v = [];
      },
      D = 0,
      P = 0;
    while (D < r.length || P < s.length) {
      let y = r[D],
        j = s[P];
      if (y && (!j || y.seq < j.seq)) mt.add(y.message.uuid), cr.add(y.message.uuid), on = !0, v.push(y.message), D++;else if (j) {
        A();
        let frame = j.frame;
        if ("uuid" in frame && typeof frame.uuid === "string") Wr.add(frame.uuid);
        h.push(Object.assign({}, frame, {
          session_id: R
        })), P++;
      }
    }
    if (A(), st(() => a) && fe.size === 0) Ae("running");
    t(`[remote-bridge] Drained ${r.length} queued message(s) and ${s.length} SDK event(s) / control frame(s) after flush`), transport.writeBatch(h);
  }
  function Ms(e) {
    let r = e.takeUndeliveredEvents?.() ?? [];
    if (r.length === 0) return;
    t(`[remote-bridge] Carrying ${r.length} undelivered client event(s) over to the rebuilt transport`), K("info", "bridge_repl_v2_events_carried_over", {
      count: r.length
    }), i("tengu_bridge_repl_events_carried_over", {
      count: r.length
    }), transport.adoptUndeliveredEvents?.(r);
  }
  function Vt(frame_2, r) {
    if (!(frame_2.type !== "result" && Kt && !recovery_in_flight) && ve.enqueue({
      seq: Gr++,
      frame: frame_2
    })) {
      t(`[remote-bridge] Queued ${r} during flush`);
      return;
    }
    transport.write(frame_2), t(`[remote-bridge] Sent ${r}`);
  }
  async function Ps(e) {
    let r = e.filter(LX),
      s = rTn(r, initialHistoryCap);
    if (s.length < r.length) t(`[remote-bridge] Capped initial flush: ${r.length} -> ${s.length} (cap=${initialHistoryCap})`);
    let a = toSDKMessages(s).map(item => ({
      ...item,
      session_id: R,
      historical: !0
    }));
    if (a.length === 0) return;
    let h = r.findLast(v => !VGn(v));
    if (st(() => h !== void 0 && nNt(h) && !Ir(h)) && fe.size === 0) Ae("running");
    t(`[remote-bridge] Flushing ${a.length} history events`), await transport.writeBatch(a);
  }
  let nn = !1,
    Kt = !1,
    on = !1,
    Ii = !1,
    Ot = !1;
  function Cr(transcript_upload_deferred, r) {
    let s = transport,
      a = s.droppedWorkerStatePatchCount?.() ?? 0;
    s.reportInternalMetadata?.({
      transcript_upload_deferred: transcript_upload_deferred
    }), s.flushWorkerState?.().then(h => {
      if (h && (s.droppedWorkerStatePatchCount?.() ?? 0) === a) r();
    });
  }
  let Yt;
  function Os(e) {
    if (nn) return;
    if (nn = !0, he === "deferred") {
      transport.reportMetadata({
        transcript_mirror: "deferred"
      }), ji();
      return;
    }
    if (!reattach || remoteControlOrigin === void 0 && !noHistoryBackfill) return;
    let r = e === void 0 || e.readFailed === !0,
      s = r ? void 0 : e.internal?.transcript_upload_deferred;
    if (fn(s) && (noHistoryBackfill || remoteControlOrigin === void 0)) {
      if (!G) transport.reportMetadata({
        transcript_mirror: "live"
      });
      Ot = !0, Cr(null, () => {
        Ot = !1;
      });
    } else if (fn(s)) {
      if (ur = s, he = "deferred", ji(), on) dt = "rows_already_live";else if (!Xt(ht().scope, ur)) dt = "flag_off";
    } else if ((r || s !== void 0 && s !== null) && Xt(ht().scope, remoteControlOrigin)) he = "deferred", dt = "marker_unreadable";
  }
  let dt;
  function Is() {
    if (dt === void 0) return;
    let e = dt;
    dt = void 0, lt(e);
  }
  function ji() {
    Jn = !0, Yt = Date.now(), t("[remote-bridge] Transcript upload deferred until a client opens this session"), K("info", "bridge_repl_transcript_deferred", {
      reattach: reattach
    }), i("tengu_bridge_transcript_deferral", {
      phase: c("deferred"),
      reattach: reattach,
      hold_ms: Qe()
    });
  }
  let Di = !1;
  function onClientInitialize_2() {
    if (he !== "deferred" || Di) {
      onClientInitialize?.();
      return;
    }
    Di = !0;
    let e = Ns();
    queueMicrotask(() => {
      lt("client_open", e);
      try {
        onClientInitialize?.();
      } catch (error) {
        t(`[remote-bridge] onClientInitialize failed after transcript release: ${l(error)}`);
      }
    });
  }
  function Bs() {
    if (he === "deferred" && !Xt(ht().scope, ur)) lt("flag_off");
  }
  function lt(e, r = Promise.resolve()) {
    if (Rt) return Rt;
    if (w || he !== "deferred") return Promise.resolve();
    if (!G) transport.reportMetadata({
      ...$t,
      transcript_mirror: "live"
    });
    $t = {}, he = "live", bt = !0;
    let s = fe.size > 0;
    t(`[remote-bridge] Releasing deferred transcript (${e})`), Kt = !0, me.start(), ve.start(), sn = onTransportPersistenceReady ? new Promise(h => {
      Ni = h;
    }) : Promise.resolve();
    let a = transport;
    return Rt = r.then(() => Fs(e, s)).catch(h => t(`[remote-bridge] Transcript back-fill failed: ${l(h)}`, {
      level: "error"
    })).finally(() => {
      if (Kt = !1, transport !== a || w || G || !nn) return;
      if (recovery_in_flight) {
        _r = !0;
        return;
      }
      at(), an();
    }), Rt;
  }
  let Bi,
    sn = Promise.resolve(),
    Ni;
  function an() {
    if (!onTransportPersistenceReady || Bi === transport) return;
    let e = transport.getInternalEventWriter?.(),
      r = transport.getInternalEventReaders?.();
    if (e && r) {
      Bi = transport;
      let s = Ni;
      sn = new Promise(a => {
        onTransportPersistenceReady(e, r, R, a);
      }).then(() => s?.());
    }
  }
  function Ns() {
    let e = transport;
    if (!e.setSubscribersReportedListener) return Promise.resolve();
    let promise = new Promise(s => {
      e.setSubscribersReportedListener?.(a => {
        if (a) s();
      });
    });
    return Promise.race([promise, Q(fa, void 0, {
      unref: !0
    })]).finally(() => e.setSubscribersReportedListener?.(void 0));
  }
  async function Fs(reason, r) {
    if (w) return;
    let s = Be("transcript backfill") ? void 0 : getBackfillMessages?.(R),
      a = new Set(me.pending.map(item => item.message.uuid)),
      h = (s ?? []).filter(item => LX(item) && !cr.has(item.uuid) && !a.has(item.uuid)),
      v = rTn(h, ht().backfillMessages);
    t(`[remote-bridge] Back-filling ${v.length} of ${h.length} eligible message(s)${s === void 0 ? " (history withheld by host)" : ""}`), K("info", "bridge_repl_transcript_released", {
      reason: reason,
      backfilled: v.length,
      eligible: h.length,
      withheld: s === void 0
    }), i("tengu_bridge_transcript_deferral", {
      phase: c("released"),
      reason: c(reason),
      backfilled: v.length,
      eligible: h.length,
      history_withheld: s === void 0,
      deferred_ms: Yt === void 0 ? void 0 : Date.now() - Yt,
      hold_ms: Qe()
    });
    let A = toSDKMessages(v).map(item => ({
      ...item,
      session_id: R,
      historical: !0
    }));
    for (let C of h) mt.add(C.uuid), qr.add(C.uuid);
    for (let C of v) cr.add(C.uuid);
    let D = h.findLast(C => !VGn(C)),
      P = r || fe.size > 0 || st(() => D !== void 0 && nNt(D) && !Ir(D));
    if (reason !== "client_prompt" && !P && A.length > 0) A.push(Object.assign(Gcn(R), {
      historical: !0
    }));
    let y = transport.droppedDurableBatchCount?.() ?? 0,
      j = transport;
    for (let C = 0; C < A.length; C += En) {
      if (w || G) return;
      if (transport !== j) {
        await transport.writeBatch(A.slice(C));
        break;
      }
      if (await transport.writeBatch(A.slice(C, C + En)), C + En < A.length) await Promise.race([transport.flush(), Q(_a, void 0, {
        unref: !0
      })]);
    }
    let Z = transport;
    Z.flush().then(() => {
      if ((Z.droppedDurableBatchCount?.() ?? 0) > y) K("warn", "bridge_repl_transcript_backfill_dropped"), i("tengu_bridge_transcript_deferral", {
        phase: c("backfill_dropped"),
        reason: c(reason),
        hold_ms: Qe()
      });
      if (w || G) return;
      Ot = !0, Cr(null, () => {
        Ot = !1;
      });
    });
  }
  let dn = neverArchive_2 === !0,
    jt;
  function teardown(e) {
    if (e?.skipArchive) dn = !0;
    if (e?.reason) jt = e.reason;
    if (fr) return fr;
    return w = !0, fr = Hs(), fr;
  }
  async function Hs() {
    if (ui("teardown"), he === "deferred") i("tengu_bridge_transcript_deferral", {
      phase: c("exited_unopened"),
      deferred_ms: Yt === void 0 ? void 0 : Date.now() - Yt,
      hold_ms: Qe()
    });
    let e = De ?? Ct;
    if (e !== void 0) {
      if (!vk(R)) {
        let ee = De === void 0 ? pi() : void 0;
        if (ee !== void 0 && rt && $jn()) Le(ee);else de(e);
      }
      De = void 0, Ct = void 0, ze = void 0;
    } else if (!ne && re?.code === 403 && !vk(R)) zr(re.detail);else if (!ne && (yt > 0 && ($e !== void 0 || recovery_in_flight) || re !== void 0 && re.code !== 4090) && !vk(R)) de("recovery_abandoned_at_teardown");
    if (Er?.(), Ei(), Si(), Gt?.(), Gt = void 0, onTransportPersistenceTeardown?.(), lr(), Ve.cancelAll(), clearTimeout(Pt), wt(), vr(), transport.writeBatch(jt !== void 0 ? [FDr(R, jt), Gcn(R)] : [Gcn(R)]), Ae("idle"), dn || gr && jt !== "remote_control_disabled") {
      let ee = neverArchive_2 ? "skipped_host_owned" : dn ? "skipped_teleport" : "skipped_remint_loop",
        we;
      if (Ht()) we = await ai("skip_archive_flush_timeout");else if (jt !== void 0) await Wt();
      let Ce = di();
      transport.close(), i("tengu_bridge_repl_teardown", {
        v2: !0,
        archive_status: c(ee),
        archive_ok: !1,
        ...we,
        ...Ce
      }), await transport.flushGoodbye(), t(`[remote-bridge] Teardown complete (skipArchive): session=${R}`), K("info", "bridge_repl_v2_teardown"), Fi();
      return;
    }
    let teardown_archive_timeout_ms = F.teardown_archive_timeout_ms,
      s = Date.now(),
      a = vi(),
      h,
      v = s,
      archive_budget_ms = teardown_archive_timeout_ms;
    if (Ht() && a === void 0) {
      let ee = s + lre - go;
      h = await ai("exit_flush_timeout", s), v = s + h.hold_preflush_ms, archive_budget_ms = Math.max(1, Math.min(teardown_archive_timeout_ms, ee - v));
    }
    let D = v + archive_budget_ms,
      P = a === void 0 ? Jr() : void 0,
      y = P?.token,
      j = await ft(R, baseUrl, y, orgUUID, archive_budget_ms, a, storageV5),
      Z = D - Date.now();
    if (j === 401 && P?.source === "current" && onAuth401 && Z >= aa) try {
      await Promise.race([onAuth401(y ?? ""), Q(Z)]), P = Jr(), y = P.token, j = await ft(R, baseUrl, y, orgUUID, Math.max(1, D - Date.now()), a, storageV5);
    } catch (error) {
      t(`[remote-bridge] Teardown 401 retry threw: ${l(error)}`, {
        level: "error"
      });
    }
    let archive_ms = Date.now() - v;
    if (jt !== void 0 && h === void 0) await Wt();
    let L = di();
    transport.close();
    let pe = _o(j, ge);
    i("tengu_bridge_repl_teardown", {
      v2: !0,
      archive_status: c(pe),
      archive_credential: ue(P?.source),
      archive_ok: typeof j === "number" && j < 400,
      archive_http_status: typeof j === "number" ? j : j === "untrusted_device" ? 403 : void 0,
      archive_timeout: j === "timeout",
      archive_no_token: j === "no_token",
      ...h,
      archive_budget_ms: archive_budget_ms,
      archive_ms: archive_ms,
      ...L
    }), await transport.flushGoodbye(), t(`[remote-bridge] Torn down (archive=${j})`), K("info", "bridge_repl_v2_teardown"), Fi();
  }
  i("tengu_bridge_repl_started", {
    has_initial_messages: !!(initialMessages && initialMessages.length > 0),
    v2: !0,
    ccr_session_id: _e(ci(R)),
    expires_in_s: X.expires_in,
    inProtectedNamespace: tP(),
    ..._We()
  }), _("bridge_connect");
  function Be(e) {
    if (!G) return !1;
    return t(`[remote-bridge] Dropping ${e} after owner change`), !0;
  }
  let ln = {
    bridgeSessionId: R,
    titleWriter: n.titleWriter,
    noHistoryBackfill: noHistoryBackfill || sr,
    getJoinedProjectThread: void 0,
    requestInjectedMcpReassert: requestInjectedMcpReassert,
    canAdoptInjectedMcp: canAdoptInjectedMcp,
    detachForHandoff: () => {
      Ve.cancelAll(), lr();
    },
    sessionGroupingId: sessionGroupingId_2,
    outboundOnly: outboundOnly ?? !1,
    environmentId: "",
    sessionIngressUrl: X.api_base_url,
    gitRepoUrl: gitRepoUrl,
    ...(workSecretCredentials && {
      getWorkerBearerToken: () => w ? null : Lr,
      getWorkerEpoch: () => worker_epoch
    }),
    getLastSequenceNum: () => transport.getLastSequenceNum(),
    settleUploadsBeforeHandoff: () => {
      if (Rt !== void 0 || he === "deferred") {
        let e = async () => {
          let r = Date.now() + pa,
            s = async (a, what) => {
              let v = !1;
              if (await Promise.race([a.finally(() => {
                v = !0;
              }), Q(Math.max(0, r - Date.now()), void 0, {
                unref: !0
              })]), !v) K("warn", "bridge_repl_handoff_wait_expired", {
                what: what
              });
            };
          await s(sn, "transcript_copy_catch_up"), await s(Promise.all([transport.flush({
            retryNow: !0
          }), transport.flushInternalEvents?.({
            retryNow: !0
          })]), "upload_lanes");
        };
        return (Rt ?? lt("handoff")).then(e).then(() => {}, () => {});
      }
      return Ht() ? Wt(ca).then(() => {}, () => {}) : Promise.resolve();
    },
    flush: () => (at(), si()),
    writeMessages(e) {
      if (Be("writeMessages")) return;
      let r = e.filter(item => LX(item) && !qr.has(item.uuid) && !mt.has(item.uuid));
      if (r.length === 0) return;
      if (!yi) for (let v of r) {
        let A = zcn(v);
        if (A !== void 0 && onUserMessage?.(A, R)) {
          yi = !0;
          break;
        }
      }
      let s = r.some(Ge ? wa : nNt);
      if (s) Ge = !1;
      let a = r;
      if (he === "deferred") {
        if (a = r.filter(pn), a.length === 0) {
          if (me.active) tt ||= s;else if (st(() => s) && fe.size === 0) Ae("running");
          return;
        }
      }
      if (me.enqueue(...a.map(v => ({
        seq: Gr++,
        message: v
      })))) {
        if (s) tt = !0;
        t(`[remote-bridge] Queued ${a.length} message(s) during flush`);
        return;
      }
      for (let v of a) cr.add(v.uuid), mt.add(v.uuid);
      on = !0;
      let h = Oi(a);
      if (st(() => s) && fe.size === 0) Ae("running");
      t(`[remote-bridge] Sending ${a.length} message(s)`), transport.writeBatch(h);
    },
    reportMetadata(e) {
      if (Be("reportMetadata")) return;
      if (he === "deferred") {
        let {
            post_turn_summary: post_turn_summary,
            task_summary: task_summary,
            recap: recap,
            ...h
          } = e,
          v = {
            post_turn_summary: post_turn_summary,
            task_summary: task_summary,
            recap: recap
          };
        for (let D of Object.keys(v)) if (D in e) $t[D] = v[D];
        let A = h;
        if ("post_turn_summary" in e) A.post_turn_summary = typeof post_turn_summary === "object" && post_turn_summary !== null && "status_category" in post_turn_summary ? {
          status_category: post_turn_summary.status_category
        } : null;
        if (Object.keys(A).length === 0) return;
        transport.reportMetadata(A);
        return;
      }
      transport.reportMetadata(e);
    },
    refreshGitBranch() {
      Sr?.();
    },
    writeSdkMessages(e) {
      if (Be("writeSdkMessages")) return;
      let r = e.filter(item => !item.uuid || !Wr.has(item.uuid)),
        s = he === "deferred" ? r.filter(item => !hn(item)) : r;
      if (s.length === 0) return;
      if (ve.active) {
        let h = s.filter(item => item.type !== "stream_event"),
          v = s.length - h.length;
        if (v > 0) t(`[remote-bridge] Dropped ${v} stream_event frame(s) during flush`);
        if (h.length > 0) ve.enqueue(...h.map(A => ({
          seq: Gr++,
          frame: A
        }))), t(`[remote-bridge] Queued ${h.length} SDK event(s) during flush`);
        return;
      }
      for (let h of s) if (h.uuid) Wr.add(h.uuid);
      let a = s.map(item => ({
        ...item,
        session_id: R
      }));
      transport.writeBatch(a);
    },
    sendControlRequest(request_2) {
      Kcn(request_2.request_id, {
        automated: !YIe(request_2)
      });
      let request = request_2.request;
      if (request.subtype === "can_use_tool" || request.subtype === "request_user_dialog") fe.delete(request_2.request_id), fe.set(request_2.request_id, {
        request: request_2
      }), it.delete(request_2.request_id);
      if (request.subtype === "request_user_dialog" && (ve.active && !Kt || recovery_in_flight)) return it.add(request_2.request_id), t(`[remote-bridge] Not forwarding request_user_dialog while writes are gated / transport recovering (local-only): ${request_2.request_id}`), !1;
      if (Be("control_request")) return !1;
      let s = {
        ...request_2,
        session_id: R
      };
      if (request.subtype === "can_use_tool") {
        let details;
        if (x("tengu_bridge_requires_action_details", !1)) {
          let h = request.tool_name === Ue || request.tool_name === St,
            v;
          if (request.tool_name === js) {
            let P = Array.isArray(request.input?.questions) ? request.input.questions : [],
              y = P[0],
              j = y?.header || y?.question;
            v = {
              label: "Question",
              body: j ? j + (P.length > 1 ? ` (+${P.length - 1} more)` : "") : "Tap to answer"
            };
          } else if (request.tool_name === IS) v = {
            label: "Plan",
            body: "Plan ready for review"
          };
          if (!v && request.requires_user_interaction) v = {
            label: request.display_name ?? request.tool_name,
            body: ""
          };
          let A = h && typeof request.input?.command === "string" ? qo(request.input.command) : void 0,
            D = h && typeof request.input?.description === "string" ? request.input.description : void 0;
          details = {
            tool_name: request.tool_name,
            display_tool_name: v?.label ?? request.display_name ?? request.tool_name,
            action_description: v?.body ?? qo(request.description || D || A && fo(A, 120) || ""),
            raw_command: v ? void 0 : A,
            tool_use_id: request.tool_use_id,
            request_id: v ? "" : request_2.request_id,
            ...(v && request_2.request_id && {
              suppressed_request_id: request_2.request_id
            }),
            input: request.input
          };
        }
        if (details) fe.set(request_2.request_id, {
          request: request_2,
          details: details
        });
        Ge = !1, Ae("requires_action", details);
      } else if (request.subtype === "request_user_dialog") {
        let details_2;
        if (x("tengu_bridge_requires_action_details", !1)) details_2 = Ann(request.dialog_kind, request.payload, request_2.request_id, request.tool_use_id);
        if (details_2) fe.set(request_2.request_id, {
          request: request_2,
          details: details_2
        });
        Ge = !1, Ae("requires_action", details_2);
      }
      return Vt(s, `control_request request_id=${request_2.request_id}`), !0;
    },
    sendControlResponse(e, r) {
      if (!r?.skipStateReport) Xr(e.response.request_id, !0);
      if (Be("control_response")) return;
      let s = {
        ...e,
        session_id: R
      };
      if (!r?.skipStateReport && !Ge) Qr();
      Vt(s, "control_response");
    },
    sendControlCancelRequest(request_id) {
      if (it.delete(request_id)) {
        fe.delete(request_id), t(`[remote-bridge] Local-only retract of a declined dialog forward request_id=${request_id}`);
        return;
      }
      if (Xr(request_id, !0), Be("control_cancel_request")) return;
      let r = {
        type: "control_cancel_request",
        request_id: request_id,
        session_id: R
      };
      if (!Ge) Qr();
      Vt(r, `control_cancel_request request_id=${request_id}`);
    },
    sendResult(e) {
      if (tt = !1, Ge = !0, Be("result")) return;
      if (Ae("idle"), he === "deferred" && !ht().eagerResult) {
        t("[remote-bridge] Withheld result (transcript deferred)");
        return;
      }
      let r = Gcn(R, he === "deferred" && e?.outcome !== void 0 ? {
        ...e,
        outcome: {
          ...e.outcome,
          result: void 0
        }
      } : e);
      Vt(r, `result ${r.subtype} is_error=${r.is_error} num_turns=${r.num_turns}${r.user_message_uuid ? ` user_message_uuid=${r.user_message_uuid}` : ""}`);
    },
    stampReply({
      assistantUuid: assistantUuid,
      userMessageUuid: userMessageUuid
    }) {
      if (vt.set(assistantUuid, userMessageUuid), vt.size > vs) {
        let s = vt.keys().next().value;
        if (s !== void 0) vt.delete(s);
      }
    },
    async subscribePR(repo, prNumber, agentId) {
      if (G) return {
        ok: !1,
        reason: "owner_changed"
      };
      let a = `${repo}#${prNumber}`,
        h = Mt.get(a);
      if (agentId) Mt.set(a, {
        agentId: agentId,
        repo: repo,
        prNumber: prNumber
      });
      let v = await YNe("subscribe", {
        sessionId: R,
        repo: repo,
        prNumber: prNumber,
        baseUrl: baseUrl,
        getAccessToken: getAccessToken,
        getTrustedDeviceToken: getTrustedDeviceToken
      });
      if (!v.ok && agentId) if (h) Mt.set(a, h);else Mt.delete(a);
      return v;
    },
    async unsubscribePR(repo_2, prNumber_2) {
      if (G) return {
        ok: !1,
        reason: "owner_changed"
      };
      let s = await YNe("unsubscribe", {
        sessionId: R,
        repo: repo_2,
        prNumber: prNumber_2,
        baseUrl: baseUrl,
        getAccessToken: getAccessToken,
        getTrustedDeviceToken: getTrustedDeviceToken
      });
      if (s.ok) Mt.delete(`${repo_2}#${prNumber_2}`);
      return s;
    },
    async recordCreatedPR(e, timeoutMs) {
      if (w) return {
        ok: !1,
        skipped: "no_bridge"
      };
      if (G) return {
        ok: !1,
        skipped: "owner_changed"
      };
      return PRo({
        sessionUrl: bSe(api_base_url, R),
        workerToken: Lr,
        ...e,
        timeoutMs: timeoutMs
      });
    },
    async fetchInboxMessage(fileId) {
      let r = reason_2 => (m("bridge_inbox_fetch", reason_2), {
        ok: !1,
        reason: reason_2
      });
      if (w) return r("no_bridge");
      if (G) return r("owner_changed");
      {
        let s = async D => {
            if (w) return "no_bridge";
            if (G) return "owner_changed";
            if (D?.fresh ? Yr() : nt()) {
              let P = await mi("owner_changed_inbox", D);
              if (P === "changed") return "owner_changed";
              if (P === "inconclusive") return w ? "no_bridge" : "owner_unverified";
            }
            return w ? "no_bridge" : void 0;
          },
          a = await s();
        if (a) return r(a);
        if (onProactiveRefresh) try {
          await onProactiveRefresh();
        } catch (error) {
          t(`[remote-bridge] inbox fetch: token refresh failed: ${l(error)}`, {
            level: "error"
          });
        }
        let h = getAccessToken(),
          v = await getTrustedDeviceToken();
        if (onProactiveRefresh) {
          let D = await s({
            fresh: !0
          });
          if (D) return r(D);
        }
        let {
          fetchSessionInboxMessage: fetchSessionInboxMessage
        } = import.meta.require("B:/~BUN/root/chunk-sg99nq62.js");
        return fetchSessionInboxMessage({
          sessionId: R,
          fileId: fileId,
          baseUrl: baseUrl,
          getAccessToken: () => h,
          getTrustedDeviceToken: () => Promise.resolve(v)
        });
      }
      return r("feature_disabled");
    },
    getPRWebhookTargets() {
      return [...Mt.values()];
    },
    teardown: teardown,
    neverArchive: neverArchive_2,
    async archive() {
      if (neverArchive_2) return;
      let e = vi();
      await ft(R, baseUrl, e === void 0 ? Jr().token : void 0, orgUUID, F.teardown_archive_timeout_ms, e, storageV5);
    },
    [Symbol.asyncDispose]() {
      return ln.teardown({
        reason: "host_exit"
      });
    }
  };
  if (neverArchive_2 && !reattach) Qt(R, storageV5);
  let Fi = gt(ln);
  return ln;
}
async function Dt(n, g, b) {
  let init_retry_max_attempts = b.init_retry_max_attempts;
  for (let B = 1; B <= init_retry_max_attempts; B++) {
    let N = await n();
    if (N !== null) return N;
    if (B < init_retry_max_attempts) {
      let V = b.init_retry_base_delay_ms * 2 ** (B - 1),
        O = V * b.init_retry_jitter_fraction * (2 * Math.random() - 1),
        q = Math.min(V + O, b.init_retry_max_delay_ms);
      t(`[remote-bridge] ${g} failed (attempt ${B}/${init_retry_max_attempts}), retrying in ${Math.round(q)}ms`), await Q(q);
    }
  }
  return null;
}
async function Sn(n, g, b, k) {
  let B = !1,
    N = !1,
    V = await Dt(async () => {
      if (B) N = !0;
      let O = k.getAccessToken(),
        q = !1,
        Y = await n(O, () => {
          q = !0;
        }),
        Re = Wz(Y);
      if ((Y === null || Re) && q && k.onAuth401 && !B && !k.recoveryAttemptedTokens.has(O)) {
        k.recoveryAttemptedTokens.add(O);
        let refreshed = !1;
        try {
          refreshed = await k.onAuth401(O);
        } catch (error) {
          t(`[remote-bridge] ${g} 401 \u2014 OAuth refresh threw: ${l(error)}`, {
            level: "error"
          });
        }
        if (B = refreshed, t(`[remote-bridge] ${g} 401 \u2014 OAuth ${refreshed ? "refreshed; retrying with the fresh token" : "refresh unavailable"}`), K("info", "bridge_repl_v2_init_401_refresh", {
          refreshed: refreshed
        }), B && Re) return null;
      }
      return Y;
    }, g, b);
  if (V === null && B && !N) return t(`[remote-bridge] ${g} refreshed on the final attempt; one extra try with the fresh token`), n(k.getAccessToken(), () => {});
  return V;
}
function va(n) {
  if (n.reason === "untrusted_device") return !Wle();
  return n.reason === "session_stale_relogin";
}
function Ke(n) {
  return va(n) ? "auth" : "terminal";
}
function jr(n) {
  return n.reason === "request_rejected" && n.status === 403 && xCe(n.source);
}
function Or(n, g) {
  return jr(g) ? `${n}_credentials_rejected_nonorigin` : `${n}_credentials_rejected`;
}
var ba = {
  nonorigin_cf: "recovered_403_nonorigin_cf",
  nonorigin_other: "recovered_403_nonorigin_other"
};
function lo(n) {
  switch (n?.rejectSource) {
    case "nonorigin_cf":
      return "transport_closed_403_nonorigin_cf";
    case "nonorigin_other":
      return "transport_closed_403_nonorigin_other";
    case "origin":
    case void 0:
      return "transport_closed_403";
  }
}
function Zue(n) {
  switch (n.reason) {
    case "untrusted_device":
      return qle();
    case "session_stale_relogin":
      return "session expired for trusted-device check \u2014 run /login to re-authenticate";
    case "invalid_session_id":
      return "session id contains unsupported characters \u2014 check the --session-id value";
    case "request_rejected":
      if (jr(n)) return `${tVn(n.source)} \u2014 run /remote-control to retry`;
      return `Remote Control server rejected the request (HTTP ${n.status}) \u2014 run /remote-control to retry`;
    case "malformed_response":
      return jst;
  }
}
async function Ra(n, api_base_url_2, b, k, B, N) {
  let V = await getTrustedDeviceToken(),
    O = await nVn(n, api_base_url_2, b, k, V, B);
  if (Tte(O) && O.reason === "untrusted_device") O = (await Qct(V, q => nVn(n, api_base_url_2, b, k, q, B), N)) ?? O;
  if (!O) return null;
  if (Wz(O)) return O;
  if (Tte(O)) {
    if (O.reason === "untrusted_device" && !fq()) return {
      terminal: !0,
      reason: "request_rejected",
      status: 403
    };
    return O;
  }
  return Yee() ? {
    ...O,
    api_base_url: api_base_url_2
  } : O;
}
function uo(n, g) {
  if (n === 403 || n === 404) return "superseded_unknown";
  if (n !== 4090) return;
  switch (g) {
    case "superseded_by_worker":
      return "superseded";
    case "session_not_active":
      return "session_archived";
    case "epoch_conflict":
    case void 0:
      return "superseded_unknown";
    case "epoch_stale":
    case "session_not_found":
    case "token_expired":
    case "auth_exhausted":
      return;
  }
}
function co(n) {
  return n !== "session_archived";
}
function _o(n, g) {
  return n === "skipped_superseded" ? g === "session_archived" ? "skipped_archived" : "skipped_superseded" : n === "skipped_owner_changed" ? "skipped_owner_changed" : n === "no_token" ? "skipped_no_token" : n === "invalid" ? "invalid_id" : n === "untrusted_device" ? "server_403_untrusted" : n === "timeout" || n === "error" ? "network_error" : n >= 500 ? "server_5xx" : n >= 400 ? "server_4xx" : "ok";
}
async function ft(n, g, b, orgUUID_2, B, N, V) {
  if (vk(n)) return t(`[remote-bridge] Archive suppressed for teleported session ${n}`), Qt(n, V), 200;
  if (N === "owner_changed") return t(`[remote-bridge] Archive suppressed for owner-changed session ${n}`), K("info", "bridge_repl_archive_suppressed_owner_changed"), "skipped_owner_changed";
  if (N !== void 0) return t(`[remote-bridge] Archive suppressed for ${N} session ${n}`), K("info", N === "superseded" ? "bridge_repl_archive_suppressed_superseded" : N === "session_archived" ? "bridge_repl_archive_suppressed_archived" : "bridge_repl_archive_suppressed_superseded_unknown"), "skipped_superseded";
  if (!b) return "no_token";
  let trustedDeviceToken = await getTrustedDeviceToken().catch(() => {
      return;
    }),
    q = await iNt(g, b, n, B, {
      useV2: RF(),
      orgUUID: orgUUID_2,
      trustedDeviceToken: trustedDeviceToken
    });
  if (Pr(q)) Qt(n, V);
  return q;
}
var po = 8,
  baseMs = 5000,
  floorMs = 2000;
async function ho(n, g) {
  for (let b = 0; b < po; b++) {
    if (b > 0) await Q(e5({
      baseMs: baseMs,
      floorMs: floorMs,
      attempt: b - 1
    }), void 0, {
      unref: !0
    });
    let k = await g();
    if (Pr(k) || k === "untrusted_device") return;
    t(`[remote-bridge] Archive of abandoned session ${n} not confirmed (attempt ${b + 1}/${po}, status=${k})`);
  }
}
async function ya(n, g, b, orgUUID_3, B, N, V) {
  if (!b) return {
    outcome: "ok"
  };
  let trustedDeviceToken_2 = await getTrustedDeviceToken().catch(() => {
      return;
    }),
    q = await rVn(g, b, n, B, {
      useV2: RF(),
      orgUUID: orgUUID_3,
      trustedDeviceToken: trustedDeviceToken_2
    });
  if (q === "invalid") return K("info", "bridge_repl_v2_unarchive_invalid_id"), {
    outcome: "gone",
    status: "invalid"
  };
  if (q === "untrusted_device" || q === "session_stale_relogin") {
    if (q === "untrusted_device") {
      let Re = await Qct(trustedDeviceToken_2, trustedDeviceToken_3 => rVn(g, b, n, B, {
        useV2: RF(),
        orgUUID: orgUUID_3,
        trustedDeviceToken: trustedDeviceToken_3
      }), V);
      if (typeof Re === "number" && (Re < 300 || Re === 409)) return K("info", "bridge_repl_v2_unarchive_ok"), {
        outcome: "ok"
      };
    }
    return K("info", "bridge_repl_v2_unarchive_elevated_auth"), {
      outcome: "elevated_auth",
      reason: q
    };
  }
  if (typeof q !== "number") return K("info", "bridge_repl_v2_unarchive_failed"), null;
  let Y = q < 300 || q === 409;
  if (K("info", Y ? "bridge_repl_v2_unarchive_ok" : "bridge_repl_v2_unarchive_failed"), Y) return {
    outcome: "ok"
  };
  if (q === 400 || q === 403 || q === 404) return {
    outcome: "gone",
    status: q
  };
  if (q === 401) N?.();
  return null;
}
function rTn(n, g) {
  if (g <= 0 || n.length <= g) return n;
  let b = n.length - g;
  for (let {
    fromIdx: fromIdx,
    toIdx: toIdx
  } of bnn(n)) if (b > fromIdx && b <= toIdx) {
    b = fromIdx;
    break;
  }
  return n.slice(b);
}
function wa(n) {
  if (n.type !== "user" || !nNt(n) || Ir(n)) return !1;
  let content = n.message.content;
  return typeof content === "string" || !content.some(item => item.type === "tool_result");
}
function Ir(n) {
  if (n.type !== "user" || !pC(n)) return !1;
  let content_2 = n.message.content;
  return typeof content_2 === "string" ? vye.includes(content_2) : content_2.every(item => item.type !== "text" || vye.includes(item.text));
}
export { m7e, l7r, hKt, c7r, Zue, rTn };