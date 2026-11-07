// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H,
  rf
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  vSt
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  _Ve,
  t8i,
  v,
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  tn
} from "B:/~BUN/root/chunk-1fg2bpc3.js";
import {
  Od
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  UR,
  cm,
  ey
} from "B:/~BUN/root/chunk-wthaftk0.js";
import {
  ap
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  Y_
} from "B:/~BUN/root/chunk-vtghd2qd.js";
import {
  o,
  E,
  u,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  lu
} from "B:/~BUN/root/chunk-xfdxa8bd.js";
import {
  Qy
} from "B:/~BUN/root/chunk-tx4kppkg.js";
import {
  Bp
} from "B:/~BUN/root/chunk-bvb659eh.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
import {
  promisify as U
} from "util";
import {
  constants as le,
  deflateRaw as me,
  deflateRawSync as ye,
  inflateRaw as Be,
  inflateRawSync as ge
} from "zlib";
var q = 131072,
  _e = 32768,
  ke = 4 * q,
  he = 32,
  be = 2,
  Re = vSt,
  K = 210000,
  Se = 256,
  I = {
    messages: '"messages":[',
    system: '],"system":',
    endOfSystemBlock: '"},{',
    metadata: ',"metadata":{"user_id":"'
  },
  ze = 1024,
  Ce = 4096;

function Y(e = Re) {
  return {
    blocks: new Map,
    storedBytes: 0,
    maxStoredBytes: e,
    evictedForSpaceCount: 0,
    generation: 0,
    keptBody: void 0,
    keptSubagentBodies: new Map,
    cancelIdleDrop: void 0,
    pooledCompression: Promise.resolve()
  }
}

function TLt(e) {
  e.cancelIdleDrop?.(), e.cancelIdleDrop = void 0, e.blocks.clear(), e.storedBytes = 0, e.keptBody = void 0, e.keptSubagentBodies.clear(), e.generation++
}

function CLt(e, n) {
  if (e.keptBody?.memory.buffer === n.buffer) return e.keptBody;
  for (let {
      keptBody: s
    }
    of e.keptSubagentBodies.values())
    if (s?.memory.buffer === n.buffer) return s;
  return
}

function cws({
  body: e,
  level: n,
  store: s,
  clock: r,
  cutNearToolsEnd: a = !1
}) {
  let m = qe(e, a),
    {
      keys: d,
      carriedDigestCount: y
    } = Ee(e, m, n, e.byteOffset === 0 ? CLt(s, e) : void 0),
    B = r.monotonicNow(),
    _ = 0,
    h = 0,
    b = m.map((R, A) => {
      let S = V(s, d[A], B);
      if (S !== void 0) _++, h += R.end - R.start;
      return S
    });
  if (s.blocks.size > 0) hmo(s, r);
  return {
    body: e,
    level: n,
    blocks: m,
    keys: d,
    reused: b,
    reusedBlockCount: _,
    reusedBytes: h,
    carriedDigestCount: y,
    generation: s.generation
  }
}

function l1i({
  keys: e,
  reused: n
}) {
  return e.some((s, r) => s !== void 0 && n[r] === void 0)
}
async function d1i(e, n, s, r) {
  let a = await fws(e, n, s, r),
    m = Buffer.from([31, 139, 8, 0, 0, 0, 0, 0, 0, 255]),
    d = Buffer.alloc(10);
  return d[0] = 3, d.writeUInt32LE(Bun.hash.crc32(e.body), 2), d.writeUInt32LE(e.body.length % 4294967296, 6), Buffer.concat([m, ...a, d])
}
class RLt extends Error {
  fault;
  constructor(e, n) {
    super("Request body gzip: a newly compressed block failed its check", n);
    this.fault = e
  }
}

function uws(e) {
  let n = k(e);
  return n === "Z_DATA_ERROR" || n === "Z_BUF_ERROR" ? n : void 0
}
async function fws(e, n, s, {
  signal: r,
  stopIf: a,
  inBackground: m = !1
} = {}) {
  let {
    body: d,
    level: y,
    blocks: B,
    keys: _,
    reused: h,
    generation: b
  } = e, R;
  if (!m && d.length - e.reusedBytes <= ke) R = B.map((S, G) => {
    let C = h[G];
    if (C !== void 0) return C;
    let z = d.subarray(S.start, S.end),
      w = j(d, S, y),
      O = ye(z, w);
    try {
      W(z, O, ge(O, w))
    } catch (x) {
      throw N(x)
    }
    return O
  });
  else {
    let G = (m ? Promise.resolve() : n.pooledCompression).then(() => {
      r?.throwIfAborted();
      let C = s.monotonicNow();
      return Y_(B, async (z, w) => {
        if (a?.()) throw Error("Request body gzip: compression stopped");
        if (h[w] !== void 0) return h[w];
        let O = n.generation === b ? V(n, _[w], C) : void 0;
        if (O !== void 0) return e.reusedBlockCount++, e.reusedBytes += z.end - z.start, O;
        let x = d.subarray(z.start, z.end),
          L = j(d, z, y),
          P = await Ae(x, L);
        try {
          W(x, P, await Ge(P, L))
        } catch (pe) {
          throw N(pe)
        }
        return P
      }, {
        concurrency: m ? be : he,
        signal: r
      })
    });
    if (!m) n.pooledCompression = G.then(() => {}, () => {});
    R = await G
  }
  if (n.generation !== b) return R;
  let A = s.monotonicNow();
  return R.forEach((S, G) => {
    let C = _[G];
    if (C !== void 0 && !n.blocks.has(C)) {
      let z = S.buffer.byteLength === S.length;
      Te(n, C, z ? S : Buffer.copyBytesFrom(S), A)
    }
  }), Oe(n, A), hmo(n, s), R
}

function qe(e, n) {
  let s = e.indexOf(I.messages),
    r = e.lastIndexOf(I.system),
    a = r === -1 ? -1 : e.indexOf(I.endOfSystemBlock, r),
    m = a !== -1 && a - r <= ze ? a + 2 : -1,
    d = n && s !== -1 && s < r && m !== -1 ? e.lastIndexOf(I.metadata) - Ce : -1,
    y = d > m ? d : -1,
    B = [s, r, m, y, e.length],
    _ = [],
    h = 0;
  for (let b of B) {
    if (b <= h) continue;
    for (let R = h; R < b; R += q) _.push({
      start: R,
      end: Math.min(R + q, b),
      dictionaryStart: Math.max(R - _e, h),
      endsAtToolsCut: b === y && R + q >= b
    });
    h = b
  }
  return _
}

function Ee(e, n, s, r) {
  let a = 0,
    m = n.map((d) => {
      if (d.end - d.start !== q && !d.endsAtToolsCut) return;
      let y = r?.blockDigests.get(d.start);
      if (r !== void 0 && y?.end === d.end && d.end <= r.digestedBytes) return a++, y.digest;
      return Bun.SHA256.hash(e.subarray(d.start, d.end), "base64")
    });
  if (r !== void 0) r.blockDigests = new Map(n.flatMap((d, y) => {
    let B = m[y];
    return B === void 0 || d.end - d.start !== q ? [] : [
      [d.start, {
        end: d.end,
        digest: B
      }]
    ]
  })), r.digestedBytes = r.length;
  return {
    carriedDigestCount: a,
    keys: n.map((d, y) => {
      let B = m[y],
        _ = d.dictionaryStart < d.start ? m[y - 1] : "none";
      return B === void 0 || _ === void 0 ? void 0 : `${s}:${_}:${B}`
    })
  }
}

function Ae(e, n) {
  return U(me)(e, n)
}

function Ge(e, n) {
  return U(Be)(e, n)
}

function j(e, n, s) {
  return {
    level: s,
    finishFlush: le.Z_SYNC_FLUSH,
    chunkSize: q,
    ...n.dictionaryStart < n.start && {
      dictionary: e.subarray(n.dictionaryStart, n.start)
    }
  }
}

function N(e) {
  let n = uws(e);
  return n === void 0 ? e : new RLt(n, {
    cause: e
  })
}
var we = 65535;

function W(e, n, s) {
  if (!s.equals(e)) throw new RLt("inflates_to_other_bytes");
  if (n.length < 4 || n.readUInt32BE(n.length - 4) !== we) throw new RLt("no_flush_marker")
}

function V(e, n, s) {
  let r = n === void 0 ? void 0 : e.blocks.get(n);
  if (n === void 0 || r === void 0) return;
  return e.blocks.delete(n), e.blocks.set(n, {
    compressed: r.compressed,
    lastUsedAt: s
  }), r.compressed
}

function Te(e, n, s, r) {
  let a = {
    compressed: s,
    lastUsedAt: r
  };
  e.blocks.set(n, a), e.storedBytes += Z(a)
}

function Oe(e, n) {
  for (let [s, r] of e.blocks) {
    let a = e.storedBytes > e.maxStoredBytes;
    if (!a && n - r.lastUsedAt < K) return;
    if (e.blocks.delete(s), e.storedBytes -= Z(r), a) e.evictedForSpaceCount++
  }
}

function hmo(e, n) {
  let s = new WeakRef(e);
  e.cancelIdleDrop?.(), e.cancelIdleDrop = n.setTimeout(() => {
    let r = s.deref();
    if (r !== void 0) TLt(r)
  }, K, {
    unref: !0
  })
}

function Z(e) {
  return Se + e.compressed.length
}

function Q() {
  return new WeakMap
}

function c1i(e, n, s) {
  let r = e.get(n);
  if (r?.fired) return {
    kind: "already_fired"
  };
  let a = s?.input_tokens ?? 0,
    m = s?.cache_read_input_tokens ?? 0,
    d = s?.cache_creation_input_tokens ?? 0,
    y = (s?.cache_creation?.ephemeral_5m_input_tokens ?? 0) + (s?.cache_creation?.ephemeral_1h_input_tokens ?? 0),
    B = d > 0 ? d : y;
  if (a + m + B <= 0) return {
    kind: "no_usage"
  };
  if (a < 20000 || B >= 0.1 * a) {
    let h = r ?? {
      consecutive: 0,
      fired: !1,
      okEmitted: !1
    };
    if (!r) e.set(n, h);
    if (h.consecutive = 0, !h.okEmitted && m + B > 0) return h.okEmitted = !0, {
      kind: "confirm"
    };
    return {
      kind: "healthy"
    }
  }
  let _ = r ?? {
    consecutive: 0,
    fired: !1,
    okEmitted: !1
  };
  if (!r) e.set(n, _);
  if (_.consecutive++, _.consecutive >= 3) return _.fired = !0, {
    kind: "fire",
    consecutive: _.consecutive,
    inputTokens: a,
    cacheReadTokens: m,
    cacheCreationTokens: B
  };
  return {
    kind: "counted",
    consecutive: _.consecutive
  }
}
var e7e = "root";

function R1(e) {
  return e ?? "root"
}
var X = 256;
class J {
  promptCacheBreak = {
    previousStateBySource: new Map,
    hydrationAttempted: !1,
    pendingPersist: Promise.resolve(),
    latestQueuedPersist: null,
    hashSalt: null,
    summaryForks: new Map,
    parkedAgentBaselines: new Map,
    parkedBy: null,
    classifierLines: new Map,
    classifierCompactions: new Map
  };
  threadDecisionTracker = void 0;
  threadInheritedFields = {
    storedToolsHashByThread: new Map,
    breakerTripped: !1
  };
  threadDropRecreate = new Map;
  threadRequestEnds = new Map;
  dumpPrompts = {
    recentRequests: [],
    stateByAgent: new Map,
    retiredInitHashes: new lu({
      max: 1000
    }),
    appendQueue: Qy()
  };
  requestReplay = {
    chains: new Map,
    chainClears: 0,
    hashMemos: new WeakMap,
    unrecordableShapes: new Set
  };
  lastIngressUuidBySession = new Map;
  cacheCoverage = Q();
  ccsSenderAddr = {
    asking: new Map,
    held: new Map,
    carriedOn: void 0,
    waits: {
      firstMs: void 0,
      unsignedCalls: 0,
      asks: 0,
      asksBeforeTurn: 0
    },
    turnStartedAt: 0
  };
  cacheWarm = {
    inFlight: void 0,
    report: void 0,
    met: void 0
  };
  gzipRequestBody = {
    latchedOff: !1,
    rejectedThisProcess: !1,
    persistedLatchChecked: !1,
    persistedLatchInEffect: !1,
    telemetryByClientRequestId: new lu({
      max: X
    }),
    dispatchAtByClientRequestId: new lu({
      max: X
    }),
    ccrWorkerSkipReasonsLogged: new Set,
    blockStore: Y(),
    blocksSwitchedOff: !1,
    bodyBytesSwitchedOff: !1,
    reusingBodiesChecked: 0,
    firstReusingBodiesDraw: void 0,
    serialisedBodies: new WeakMap,
    blocksBuildGeneration: void 0,
    blockGzippedResponses: new WeakMap
  };
  sentPrefix = {
    ledger: void 0,
    mode: void 0,
    persist: Promise.resolve(),
    persisted: void 0,
    pendingSeed: void 0,
    lastReport: new WeakMap,
    lastVerdict: new WeakMap,
    renderEpochs: new WeakMap,
    memoryEpochs: new WeakMap,
    announced: new WeakMap,
    excuse: new WeakMap,
    staged: new WeakMap,
    boundVerdict: new WeakMap
  };
  bindingDrops = {
    seenBlocks: void 0,
    threadsRead: new lu({
      max: 512
    })
  };
  foreignThinkingKeep = void 0;
  streamFirstByteArmedRequestIds = new lu({
    max: 64
  });
  skillHealthMap = void 0;
  headerMemberDropsNoted = new Set;
  firedOnceKeys = new Set;
  hasFired(e) {
    return this.firedOnceKeys.has(e)
  }
  markFired(e) {
    this.firedOnceKeys.add(e)
  }
  once(e) {
    if (this.firedOnceKeys.has(e)) return !1;
    return this.firedOnceKeys.add(e), !0
  }
  resetStreamNoEventsWarningLatch() {
    this.firedOnceKeys.delete("stream_no_events_fallback_warning")
  }
}
var xe = new Je(() => new J);

function Cs() {
  return xe.of(H())
}
var ZLn = new Set(["clear", "resume", "spare_claim", "remote_attach"]);

function u1i() {
  return rf((e, n) => {
    if (n === "cd" || n === "hydrate") return;
    let s = Cs();
    if (s.resetStreamNoEventsWarningLatch(), ZLn.has(n)) {
      s.threadDropRecreate.delete(e7e), s.threadRequestEnds.delete(e7e);
      let r = s.gzipRequestBody;
      if (TLt(r.blockStore), r.reusingBodiesChecked = 0, r.firstReusingBodiesDraw = void 0, r.blocksSwitchedOff === "until_next_conversation") r.blocksSwitchedOff = !1
    }
  })
}
var ve = "tengu_gentle_hammock",
  Ie = "tengu_golden_popcorn",
  Pe = 4096,
  Me = 1024,
  De = 604800000,
  Fe = 8192;

function f1i() {
  let e = i.CLAUDE_CODE_GZIP_REQUEST_BODY_LEVEL ?? v(Ie, 0);
  return Number.isInteger(e) && e >= 1 && e <= 9 ? e : void 0
}

function se(e) {
  return e === "ccr_worker" ? i.CLAUDE_CODE_GZIP_CCR_REQUEST_BODIES : i.CLAUDE_CODE_GZIP_REQUEST_BODIES
}

function je(e) {
  return e === "ccr_worker" ? Me : Pe
}

function Ne(e) {
  if (i.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (cm() !== void 0 && !ey(e)) return "proxy";
  let n = UR();
  if (n?.cert !== void 0 || n?.key !== void 0) return "mtls";
  if (i.NODE_EXTRA_CA_CERTS) {
    let s = ap();
    if (!(tn() || i.CLAUDE_CODE_ENTRYPOINT === "local-agent" && (s === void 0 || s.NODE_EXTRA_CA_CERTS !== void 0))) return "custom_ca"
  }
  return
}

function Cmt(e) {
  return Buffer.isBuffer(e) && Cs().gzipRequestBody.serialisedBodies.has(e.buffer)
}

function ie(e) {
  return Buffer.isBuffer(e) ? Cs().gzipRequestBody.serialisedBodies.get(e.buffer) : void 0
}

function pws(e) {
  let n = ie(e);
  return n === void 0 ? {} : {
    requestBodyReusedChars: n.keptChars,
    requestBodyComparedWithSdk: n.checked
  }
}

function qvr(e) {
  return typeof e === "string" ? e.length : ie(e)?.chars
}

function men(e, n, s, r = "api") {
  return Od(e) ? ae(e, qvr(n), s, r) : void 0
}

function p1i(e, n, s) {
  return Od(e) && ae(e, 1 / 0, n, s).gzip
}

function ae(e, n, s, r) {
  let a = se(r);
  if (a === !1) return {
    gzip: !1,
    reason: "env_off",
    bodyChars: n
  };
  if (!Bp()) return {
    gzip: !1,
    reason: "not_bun_runtime",
    bodyChars: n
  };
  if (n === void 0) return {
    gzip: !1,
    reason: "non_string_body",
    bodyChars: n
  };
  if (n < je(r)) return {
    gzip: !1,
    reason: "below_min_size",
    bodyChars: n
  };
  if (a === !0) return Cs().gzipRequestBody.rejectedThisProcess ? {
    gzip: !1,
    reason: "latched_off",
    bodyChars: n
  } : {
    gzip: !0,
    bodyChars: n
  };
  let m = Ne(e);
  if (m !== void 0) return {
    gzip: !1,
    reason: m,
    bodyChars: n
  };
  if (r === "ccr_worker" && !v(ve, !1)) return {
    gzip: !1,
    reason: "flag_off",
    bodyChars: n
  };
  if ($e(s)) return {
    gzip: !1,
    reason: "latched_off",
    bodyChars: n
  };
  return {
    gzip: !0,
    bodyChars: n
  }
}
var We = p(() => u({
    type: T("error"),
    error: u({
      type: o(),
      message: o()
    })
  })),
  de = p(() => u({
    latchedAt: E().finite(),
    status: E()
  })),
  Ue = p(() => u({
    error: o(),
    reason: o()
  })),
  Ke = ["The request body is not valid JSON", "Failed to parse request: could not parse request body as JSON"],
  te = /^bad json: (?:invalid character |unexpected EOF$|unexpected end of JSON input$|EOF$)/;

function M(e) {
  return {
    status: e.status,
    header: (n) => e.headers.get(n) ?? void 0,
    bodyText: () => Ye(e)
  }
}

function He(e) {
  return (e.header("request-id")?.startsWith("req_") ?? !1) || e.header("cf-ray") !== void 0
}
async function Ye(e) {
  let n = e.clone().body?.getReader();
  if (!n) return "";
  let s = new TextDecoder,
    r = "",
    a = Fe;
  try {
    while (a > 0) {
      let {
        done: m,
        value: d
      } = await n.read();
      if (m) break;
      let y = d.subarray(0, a);
      a -= y.byteLength, r += s.decode(y, {
        stream: !0
      })
    }
  } catch {} finally {
    n.cancel().catch(() => {})
  }
  return r
}

function Ve(e) {
  let n;
  try {
    n = ee(e)
  } catch {
    return te.test(e.trimEnd())
  }
  let s = We().safeParse(n);
  if (s.success) return Ke.some((a) => s.data.error.message.startsWith(a));
  let r = Ue().safeParse(n);
  return r.success && r.data.reason === "bad_json" && te.test(r.data.error)
}
async function D(e) {
  if (e.status !== 400 && e.status !== 403 && e.status !== 415) return null;
  if (!He(e)) return "non_anthropic_rejection";
  if (e.status === 400 && Ve(await e.bodyText())) return "invalid_json_at_origin";
  return null
}
async function mws(e) {
  if (e.ok) return null;
  return D(M(e))
}
async function Ze(e) {
  if (await D(e) !== null) return "same_rejection";
  return e.header("request-id")?.startsWith("req_") ? "api_response" : "not_api_response"
}

function Qe() {
  let e;
  try {
    e = fe().gzipRequestBodiesLatchedOff
  } catch {
    return "unavailable"
  }
  if (e === void 0) return;
  let n = de().safeParse(e);
  return n.success ? n.data : "malformed"
}

function ne(e, n) {
  Le((s) => {
    let r = de().safeParse(s.gzipRequestBodiesLatchedOff);
    return (r.success ? r.data.latchedAt === e : s.gzipRequestBodiesLatchedOff !== void 0) ? {
      ...s,
      gzipRequestBodiesLatchedOff: void 0
    } : s
  }, n)
}

function $e(e) {
  let n = Cs().gzipRequestBody;
  if (n.latchedOff) return !0;
  if (n.persistedLatchChecked) return !1;
  let s = Qe();
  if (s === "unavailable") return !1;
  if (n.persistedLatchChecked = !0, s === void 0) return !1;
  if (s === "malformed") return ne(void 0, e), l("tengu_gzip_request_body_latch_cleared", {
    reason: f("malformed")
  }), !1;
  let r = Date.now() - s.latchedAt;
  if (r >= 0 && r < De) return n.latchedOff = !0, n.persistedLatchInEffect = !0, !0;
  return ne(s.latchedAt, e), l("tengu_gzip_request_body_latch_cleared", {
    reason: r < 0 ? f("malformed") : f("expired"),
    latchedStatus: s.status,
    latchedAgeHours: Math.max(0, Math.round(r / 3600000))
  }), !1
}

function F() {
  let e = Cs().gzipRequestBody;
  e.latchedOff = !0, e.rejectedThisProcess = !0, e.persistedLatchChecked = !0
}

function re({
  persist: e,
  status: n,
  storageV5: s,
  rollout: r = "api"
}) {
  F();
  let a = Cs().gzipRequestBody;
  if (e && !a.persistedLatchInEffect && se(r) !== !0) a.persistedLatchInEffect = !0, Le((m) => ({
    ...m,
    gzipRequestBodiesLatchedOff: {
      latchedAt: Date.now(),
      status: n
    }
  }), s);
  return a.persistedLatchInEffect ? "persisted" : "process"
}

function ue(e, n) {
  switch (e) {
    case "api":
      if (n === "fell_back") c("api_gzip_request_body", "fell_back");
      else if (Cs().once("gzip_request_body_ok")) g("api_gzip_request_body");
      return;
    case "ccr_worker":
      if (n === "fell_back") c("ccr_worker_gzip_request_body", "fell_back");
      else if (Cs().once("ccr_worker_gzip_request_body_ok")) g("ccr_worker_gzip_request_body");
      return;
    case "frame_publish":
      if (n === "fell_back") c("artifact_publish_gzip_request_body", "fell_back");
      else if (Cs().once("artifact_publish_gzip_request_body_ok")) g("artifact_publish_gzip_request_body");
      return
  }
}

function eNn(e = "api") {
  ue(e, "sent")
}

function Xe(e, n) {
  if (e !== "ccr_worker") return;
  let s = Cs().gzipRequestBody.ccrWorkerSkipReasonsLogged;
  if (s.has(n.reason)) return;
  s.add(n.reason), l("tengu_gzip_request_body_skipped", {
    rollout: f(e),
    reason: f(n.reason),
    requestBodyChars: n.bodyChars
  })
}

function oe({
  rejection: e,
  status: n,
  viaCloudflare: s,
  retryOutcome: r,
  retryStatus: a,
  latched: m,
  bodyChars: d,
  rollout: y = "api"
}) {
  ue(y, "fell_back"), t(`[API REQUEST] gzip request body rejected (rollout=${y} status=${n} kind=${e}); re-sent uncompressed \u2192 ${r}${a!==void 0?` status=${a}`:""}; gzip latched off: ${m}`, {
    level: "warn"
  }), l("tengu_gzip_request_body_fallback", {
    rollout: f(y),
    rejection: f(e),
    status: n,
    viaCloudflare: s,
    retryOutcome: f(r),
    retryStatus: a,
    latched: f(m),
    requestBodyChars: d
  })
}
async function ce({
  rejection: e,
  first: n,
  resend: s,
  facts: r,
  aborted: a,
  bodyChars: m,
  storageV5: d,
  rollout: y
}) {
  let B = {
      rejection: e,
      status: n.status,
      viaCloudflare: n.header("cf-ray") !== void 0,
      bodyChars: m,
      rollout: y
    },
    _;
  try {
    _ = await s()
  } catch (A) {
    throw oe({
      ...B,
      retryOutcome: a() ? "aborted" : "network_error",
      retryStatus: void 0,
      latched: re({
        persist: !1,
        status: n.status,
        storageV5: d,
        rollout: y
      })
    }), A
  }
  let h = r(_),
    b = await Ze(h),
    R = re({
      persist: y !== "ccr_worker" && e === "non_anthropic_rejection" && b === "api_response",
      status: n.status,
      storageV5: d,
      rollout: y
    });
  return oe({
    ...B,
    retryOutcome: b,
    retryStatus: h.status,
    latched: R
  }), _
}
async function hws({
  res: e,
  dispatch: n,
  finalInit: s,
  identityBody: r,
  clientRequestId: a,
  storageV5: m,
  rollout: d = "api"
}) {
  let y = await mws(e);
  if (y === null) return e;
  F(), e.body?.cancel().catch(() => {});
  let {
    compress: B,
    ..._
  } = s, h = {
    ..._,
    body: r
  };
  if (a !== void 0) {
    let b = Cs().gzipRequestBody.telemetryByClientRequestId.get(a);
    gws(a, {
      requestBodyEncoding: "identity",
      requestBodyChars: qvr(r) ?? r.length,
      gzipFallbackStatus: e.status,
      ...b !== void 0 && "gzipBlocks" in b && {
        gzipBlocks: b.gzipBlocks
      },
      ...pws(r)
    })
  }
  return ce({
    rejection: y,
    first: M(e),
    resend: () => n(h),
    facts: M,
    aborted: () => s.signal?.aborted === !0,
    bodyChars: qvr(r) ?? r.length,
    storageV5: m,
    rollout: d
  })
}
async function m1i({
  answer: e,
  facts: n,
  resendIdentity: s,
  aborted: r,
  bodyChars: a,
  storageV5: m,
  rollout: d
}) {
  let y = n(e),
    B = await D(y);
  if (B === null) return e;
  return F(), ce({
    rejection: B,
    first: y,
    resend: s,
    facts: n,
    aborted: r,
    bodyChars: a,
    storageV5: m,
    rollout: d
  })
}

function ALt(e, n) {
  return async (s, r, a) => {
    let m = men(s, r.body, n, e);
    if (!m?.gzip) {
      if (m !== void 0) Xe(e, m);
      return a(r)
    }
    eNn(e);
    let d = {
        ...r,
        compress: "gzip",
        body: _Ve(r.body)
      },
      y = await a(d);
    return hws({
      res: y,
      dispatch: a,
      finalInit: d,
      identityBody: r.body,
      clientRequestId: void 0,
      storageV5: n,
      rollout: e
    })
  }
}

function gws(e, n) {
  Cs().gzipRequestBody.telemetryByClientRequestId.set(e, n)
}

function tNn(e, n) {
  if (e === null) return;
  let s = Cs().gzipRequestBody.telemetryByClientRequestId,
    r = s.get(e);
  if (r?.requestBodyEncoding !== "gzip") return;
  s.set(e, {
    ...r,
    gzipBlocks: r.gzipBlocks?.outcome === "as_blocks" ? {
      ...r.gzipBlocks,
      outcome: "rejected"
    } : n
  })
}

function h1i(e, n) {
  Cs().gzipRequestBody.dispatchAtByClientRequestId.set(e, n)
}

function g1i(e) {
  if (e === void 0) return;
  let n = Cs().gzipRequestBody.dispatchAtByClientRequestId,
    s = n.get(e);
  return n.delete(e), s
}

function hen(e) {
  if (e === void 0) return;
  let n = Cs().gzipRequestBody.telemetryByClientRequestId,
    s = n.get(e);
  return n.delete(e), s
}

function Yvr(e) {
  if (e === void 0) return {};
  return {
    requestBodyEncoding: f(e.requestBodyEncoding),
    requestBodyChars: e.requestBodyChars,
    ...e.requestBodyEncoding === "gzip" && e.requestBodyGzipLevel !== void 0 && {
      requestBodyGzipLevel: e.requestBodyGzipLevel
    },
    ..."requestPrepareMs" in e && e.requestPrepareMs !== void 0 && {
      requestPrepareMs: e.requestPrepareMs
    },
    ..."requestBodyReusedChars" in e && e.requestBodyReusedChars !== void 0 && {
      requestBodyReusedChars: e.requestBodyReusedChars
    },
    ..."requestBodyComparedWithSdk" in e && e.requestBodyComparedWithSdk !== void 0 && {
      requestBodyComparedWithSdk: e.requestBodyComparedWithSdk
    },
    ..."gzipBlocks" in e && e.gzipBlocks !== void 0 && {
      requestBodyGzipBlocksMode: e.gzipBlocks.mode,
      requestBodyGzipBlocksOutcome: f(e.gzipBlocks.outcome),
      ...e.gzipBlocks.planned !== void 0 && {
        requestBodyGzipBlockCount: e.gzipBlocks.planned.blockCount,
        requestBodyGzipReusedBlockCount: e.gzipBlocks.planned.reusedBlockCount,
        requestBodyGzipReusedBytes: e.gzipBlocks.planned.reusedBytes,
        requestBodyGzipBlocksMs: e.gzipBlocks.planned.spentMs,
        ...e.gzipBlocks.planned.gzippedBytes !== void 0 && {
          requestBodyGzippedBytes: e.gzipBlocks.planned.gzippedBytes
        },
        requestBodyGzipStoredBytes: e.gzipBlocks.planned.storedBytes,
        requestBodyGzipEvictedBlockCount: e.gzipBlocks.planned.evictedForSpaceCount
      }
    },
    ..."gzipSkipReason" in e && {
      gzipSkipReason: f(e.gzipSkipReason)
    },
    ..."gzipFallbackStatus" in e && {
      gzipFallback: !0,
      gzipFallbackStatus: e.gzipFallbackStatus
    }
  }
}
t8i(men);
export {
  TLt,
  CLt,
  cws,
  l1i,
  d1i,
  RLt,
  uws,
  fws,
  hmo,
  c1i,
  e7e,
  R1,
  Cs,
  ZLn,
  u1i,
  f1i,
  Cmt,
  pws,
  qvr,
  men,
  p1i,
  mws,
  eNn,
  hws,
  m1i,
  ALt,
  gws,
  tNn,
  h1i,
  g1i,
  hen,
  Yvr
};
