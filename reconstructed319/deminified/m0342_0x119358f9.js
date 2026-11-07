// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, rf } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { vSt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { _Ve, t8i, v, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { Od } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { UR, cm, ey } from "B:/~BUN/root/chunk-wthaftk0.js";
import { ap } from "B:/~BUN/root/chunk-m749kjym.js";
import { Y_ } from "B:/~BUN/root/chunk-vtghd2qd.js";
import { o, E, u, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { lu } from "B:/~BUN/root/chunk-xfdxa8bd.js";
import { Qy } from "B:/~BUN/root/chunk-tx4kppkg.js";
import { Bp } from "B:/~BUN/root/chunk-bvb659eh.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { promisify as U } from "util";
import { constants as le, deflateRaw as me, deflateRawSync as ye, inflateRaw as Be, inflateRawSync as ge } from "zlib";
var chunkSize = 131072,
  _e = 32768,
  ke = 4 * chunkSize,
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
function Y(maxStoredBytes = Re) {
  return {
    blocks: new Map(),
    storedBytes: 0,
    maxStoredBytes: maxStoredBytes,
    evictedForSpaceCount: 0,
    generation: 0,
    keptBody: void 0,
    keptSubagentBodies: new Map(),
    cancelIdleDrop: void 0,
    pooledCompression: Promise.resolve()
  };
}
function TLt(e) {
  e.cancelIdleDrop?.(), e.cancelIdleDrop = void 0, e.blocks.clear(), e.storedBytes = 0, e.keptBody = void 0, e.keptSubagentBodies.clear(), e.generation++;
}
function CLt(e, n) {
  if (e.keptBody?.memory.buffer === n.buffer) return e.keptBody;
  for (let {
    keptBody: keptBody
  } of e.keptSubagentBodies.values()) if (keptBody?.memory.buffer === n.buffer) return keptBody;
  return;
}
function cws({
  body: body,
  level: level,
  store: store,
  clock: clock,
  cutNearToolsEnd = !1
}) {
  let blocks = qe(body, cutNearToolsEnd),
    {
      keys: keys,
      carriedDigestCount: carriedDigestCount
    } = Ee(body, blocks, level, body.byteOffset === 0 ? CLt(store, body) : void 0),
    B = clock.monotonicNow(),
    reusedBlockCount = 0,
    reusedBytes = 0,
    reused = blocks.map((item, index) => {
      let S = V(store, keys[index], B);
      if (S !== void 0) reusedBlockCount++, reusedBytes += item.end - item.start;
      return S;
    });
  if (store.blocks.size > 0) hmo(store, clock);
  return {
    body: body,
    level: level,
    blocks: blocks,
    keys: keys,
    reused: reused,
    reusedBlockCount: reusedBlockCount,
    reusedBytes: reusedBytes,
    carriedDigestCount: carriedDigestCount,
    generation: store.generation
  };
}
function l1i({
  keys: keys_2,
  reused: reused_2
}) {
  return keys_2.some((item, index) => item !== void 0 && reused_2[index] === void 0);
}
async function d1i(e, n, s, r) {
  let a = await fws(e, n, s, r),
    m = Buffer.from([31, 139, 8, 0, 0, 0, 0, 0, 0, 255]),
    d = Buffer.alloc(10);
  return d[0] = 3, d.writeUInt32LE(Bun.hash.crc32(e.body), 2), d.writeUInt32LE(e.body.length % 4294967296, 6), Buffer.concat([m, ...a, d]);
}
class RLt extends Error {
  fault;
  constructor(e, n) {
    super("Request body gzip: a newly compressed block failed its check", n);
    this.fault = e;
  }
}
function uws(e) {
  let n = k(e);
  return n === "Z_DATA_ERROR" || n === "Z_BUF_ERROR" ? n : void 0;
}
async function fws(e, n, s, {
  signal: signal,
  stopIf: stopIf,
  inBackground = !1
} = {}) {
  let {
      body: body_2,
      level: level_2,
      blocks: blocks_2,
      keys: keys_3,
      reused: reused_3,
      generation: generation
    } = e,
    R;
  if (!inBackground && body_2.length - e.reusedBytes <= ke) R = blocks_2.map((item, index) => {
    let C = reused_3[index];
    if (C !== void 0) return C;
    let z = body_2.subarray(item.start, item.end),
      w = j(body_2, item, level_2),
      O = ye(z, w);
    try {
      W(z, O, ge(O, w));
    } catch (error) {
      throw N(error);
    }
    return O;
  });else {
    let G = (inBackground ? Promise.resolve() : n.pooledCompression).then(() => {
      signal?.throwIfAborted();
      let C = s.monotonicNow();
      return Y_(blocks_2, async (z, w) => {
        if (stopIf?.()) throw Error("Request body gzip: compression stopped");
        if (reused_3[w] !== void 0) return reused_3[w];
        let O = n.generation === generation ? V(n, keys_3[w], C) : void 0;
        if (O !== void 0) return e.reusedBlockCount++, e.reusedBytes += z.end - z.start, O;
        let x = body_2.subarray(z.start, z.end),
          L = j(body_2, z, level_2),
          P = await Ae(x, L);
        try {
          W(x, P, await Ge(P, L));
        } catch (error) {
          throw N(error);
        }
        return P;
      }, {
        concurrency: inBackground ? be : he,
        signal: signal
      });
    });
    if (!inBackground) n.pooledCompression = G.then(() => {}, () => {});
    R = await G;
  }
  if (n.generation !== generation) return R;
  let A = s.monotonicNow();
  return R.forEach((item, index) => {
    let C = keys_3[index];
    if (C !== void 0 && !n.blocks.has(C)) {
      let z = item.buffer.byteLength === item.length;
      Te(n, C, z ? item : Buffer.copyBytesFrom(item), A);
    }
  }), Oe(n, A), hmo(n, s), R;
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
    for (let start = h; start < b; start += chunkSize) _.push({
      start: start,
      end: Math.min(start + chunkSize, b),
      dictionaryStart: Math.max(start - _e, h),
      endsAtToolsCut: b === y && start + chunkSize >= b
    });
    h = b;
  }
  return _;
}
function Ee(e, n, s, r) {
  let carriedDigestCount_2 = 0,
    m = n.map(item => {
      if (item.end - item.start !== chunkSize && !item.endsAtToolsCut) return;
      let y = r?.blockDigests.get(item.start);
      if (r !== void 0 && y?.end === item.end && item.end <= r.digestedBytes) return carriedDigestCount_2++, y.digest;
      return Bun.SHA256.hash(e.subarray(item.start, item.end), "base64");
    });
  if (r !== void 0) r.blockDigests = new Map(n.flatMap((item, index) => {
    let digest = m[index];
    return digest === void 0 || item.end - item.start !== chunkSize ? [] : [[item.start, {
      end: item.end,
      digest: digest
    }]];
  })), r.digestedBytes = r.length;
  return {
    carriedDigestCount: carriedDigestCount_2,
    keys: n.map((item, index) => {
      let B = m[index],
        _ = item.dictionaryStart < item.start ? m[index - 1] : "none";
      return B === void 0 || _ === void 0 ? void 0 : `${s}:${_}:${B}`;
    })
  };
}
function Ae(e, n) {
  return U(me)(e, n);
}
function Ge(e, n) {
  return U(Be)(e, n);
}
function j(e, n, level_3) {
  return {
    level: level_3,
    finishFlush: le.Z_SYNC_FLUSH,
    chunkSize: chunkSize,
    ...(n.dictionaryStart < n.start && {
      dictionary: e.subarray(n.dictionaryStart, n.start)
    })
  };
}
function N(cause) {
  let n = uws(cause);
  return n === void 0 ? cause : new RLt(n, {
    cause: cause
  });
}
var we = 65535;
function W(e, n, s) {
  if (!s.equals(e)) throw new RLt("inflates_to_other_bytes");
  if (n.length < 4 || n.readUInt32BE(n.length - 4) !== we) throw new RLt("no_flush_marker");
}
function V(e, n, lastUsedAt) {
  let r = n === void 0 ? void 0 : e.blocks.get(n);
  if (n === void 0 || r === void 0) return;
  return e.blocks.delete(n), e.blocks.set(n, {
    compressed: r.compressed,
    lastUsedAt: lastUsedAt
  }), r.compressed;
}
function Te(e, n, compressed, lastUsedAt_2) {
  let a = {
    compressed: compressed,
    lastUsedAt: lastUsedAt_2
  };
  e.blocks.set(n, a), e.storedBytes += Z(a);
}
function Oe(e, n) {
  for (let [s, r] of e.blocks) {
    let a = e.storedBytes > e.maxStoredBytes;
    if (!a && n - r.lastUsedAt < K) return;
    if (e.blocks.delete(s), e.storedBytes -= Z(r), a) e.evictedForSpaceCount++;
  }
}
function hmo(e, n) {
  let weakRef = new WeakRef(e);
  e.cancelIdleDrop?.(), e.cancelIdleDrop = n.setTimeout(() => {
    let r = weakRef.deref();
    if (r !== void 0) TLt(r);
  }, K, {
    unref: !0
  });
}
function Z(e) {
  return Se + e.compressed.length;
}
function Q() {
  return new WeakMap();
}
function c1i(e, n, s) {
  let r = e.get(n);
  if (r?.fired) return {
    kind: "already_fired"
  };
  let inputTokens = s?.input_tokens ?? 0,
    cacheReadTokens = s?.cache_read_input_tokens ?? 0,
    d = s?.cache_creation_input_tokens ?? 0,
    y = (s?.cache_creation?.ephemeral_5m_input_tokens ?? 0) + (s?.cache_creation?.ephemeral_1h_input_tokens ?? 0),
    cacheCreationTokens = d > 0 ? d : y;
  if (inputTokens + cacheReadTokens + cacheCreationTokens <= 0) return {
    kind: "no_usage"
  };
  if (inputTokens < 20000 || cacheCreationTokens >= 0.1 * inputTokens) {
    let h = r ?? {
      consecutive: 0,
      fired: !1,
      okEmitted: !1
    };
    if (!r) e.set(n, h);
    if (h.consecutive = 0, !h.okEmitted && cacheReadTokens + cacheCreationTokens > 0) return h.okEmitted = !0, {
      kind: "confirm"
    };
    return {
      kind: "healthy"
    };
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
    inputTokens: inputTokens,
    cacheReadTokens: cacheReadTokens,
    cacheCreationTokens: cacheCreationTokens
  };
  return {
    kind: "counted",
    consecutive: _.consecutive
  };
}
var e7e = "root";
function R1(e) {
  return e ?? "root";
}
var max = 256;
class J {
  promptCacheBreak = {
    previousStateBySource: new Map(),
    hydrationAttempted: !1,
    pendingPersist: Promise.resolve(),
    latestQueuedPersist: null,
    hashSalt: null,
    summaryForks: new Map(),
    parkedAgentBaselines: new Map(),
    parkedBy: null,
    classifierLines: new Map(),
    classifierCompactions: new Map()
  };
  threadDecisionTracker = void 0;
  threadInheritedFields = {
    storedToolsHashByThread: new Map(),
    breakerTripped: !1
  };
  threadDropRecreate = new Map();
  threadRequestEnds = new Map();
  dumpPrompts = {
    recentRequests: [],
    stateByAgent: new Map(),
    retiredInitHashes: new lu({
      max: 1000
    }),
    appendQueue: Qy()
  };
  requestReplay = {
    chains: new Map(),
    chainClears: 0,
    hashMemos: new WeakMap(),
    unrecordableShapes: new Set()
  };
  lastIngressUuidBySession = new Map();
  cacheCoverage = Q();
  ccsSenderAddr = {
    asking: new Map(),
    held: new Map(),
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
      max: max
    }),
    dispatchAtByClientRequestId: new lu({
      max: max
    }),
    ccrWorkerSkipReasonsLogged: new Set(),
    blockStore: Y(),
    blocksSwitchedOff: !1,
    bodyBytesSwitchedOff: !1,
    reusingBodiesChecked: 0,
    firstReusingBodiesDraw: void 0,
    serialisedBodies: new WeakMap(),
    blocksBuildGeneration: void 0,
    blockGzippedResponses: new WeakMap()
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
    memoryEpochs: new WeakMap(),
    announced: new WeakMap(),
    excuse: new WeakMap(),
    staged: new WeakMap(),
    boundVerdict: new WeakMap()
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
  headerMemberDropsNoted = new Set();
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
var xe = new Je(() => new J());
function Cs() {
  return xe.of(H());
}
var ZLn = new Set(["clear", "resume", "spare_claim", "remote_attach"]);
function u1i() {
  return rf((e, n) => {
    if (n === "cd" || n === "hydrate") return;
    let s = Cs();
    if (s.resetStreamNoEventsWarningLatch(), ZLn.has(n)) {
      s.threadDropRecreate.delete(e7e), s.threadRequestEnds.delete(e7e);
      let gzipRequestBody = s.gzipRequestBody;
      if (TLt(gzipRequestBody.blockStore), gzipRequestBody.reusingBodiesChecked = 0, gzipRequestBody.firstReusingBodiesDraw = void 0, gzipRequestBody.blocksSwitchedOff === "until_next_conversation") gzipRequestBody.blocksSwitchedOff = !1;
    }
  });
}
var ve = "tengu_gentle_hammock",
  Ie = "tengu_golden_popcorn",
  Pe = 4096,
  Me = 1024,
  De = 604800000,
  Fe = 8192;
function f1i() {
  let e = i.CLAUDE_CODE_GZIP_REQUEST_BODY_LEVEL ?? v(Ie, 0);
  return Number.isInteger(e) && e >= 1 && e <= 9 ? e : void 0;
}
function se(e) {
  return e === "ccr_worker" ? i.CLAUDE_CODE_GZIP_CCR_REQUEST_BODIES : i.CLAUDE_CODE_GZIP_REQUEST_BODIES;
}
function je(e) {
  return e === "ccr_worker" ? Me : Pe;
}
function Ne(e) {
  if (i.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (cm() !== void 0 && !ey(e)) return "proxy";
  let n = UR();
  if (n?.cert !== void 0 || n?.key !== void 0) return "mtls";
  if (i.NODE_EXTRA_CA_CERTS) {
    let s = ap();
    if (!(tn() || i.CLAUDE_CODE_ENTRYPOINT === "local-agent" && (s === void 0 || s.NODE_EXTRA_CA_CERTS !== void 0))) return "custom_ca";
  }
  return;
}
function Cmt(e) {
  return Buffer.isBuffer(e) && Cs().gzipRequestBody.serialisedBodies.has(e.buffer);
}
function ie(e) {
  return Buffer.isBuffer(e) ? Cs().gzipRequestBody.serialisedBodies.get(e.buffer) : void 0;
}
function pws(e) {
  let n = ie(e);
  return n === void 0 ? {} : {
    requestBodyReusedChars: n.keptChars,
    requestBodyComparedWithSdk: n.checked
  };
}
function qvr(e) {
  return typeof e === "string" ? e.length : ie(e)?.chars;
}
function men(e, n, s, r = "api") {
  return Od(e) ? ae(e, qvr(n), s, r) : void 0;
}
function p1i(e, n, s) {
  return Od(e) && ae(e, 1 / 0, n, s).gzip;
}
function ae(e, bodyChars, s, r) {
  let a = se(r);
  if (a === !1) return {
    gzip: !1,
    reason: "env_off",
    bodyChars: bodyChars
  };
  if (!Bp()) return {
    gzip: !1,
    reason: "not_bun_runtime",
    bodyChars: bodyChars
  };
  if (bodyChars === void 0) return {
    gzip: !1,
    reason: "non_string_body",
    bodyChars: bodyChars
  };
  if (bodyChars < je(r)) return {
    gzip: !1,
    reason: "below_min_size",
    bodyChars: bodyChars
  };
  if (a === !0) return Cs().gzipRequestBody.rejectedThisProcess ? {
    gzip: !1,
    reason: "latched_off",
    bodyChars: bodyChars
  } : {
    gzip: !0,
    bodyChars: bodyChars
  };
  let reason = Ne(e);
  if (reason !== void 0) return {
    gzip: !1,
    reason: reason,
    bodyChars: bodyChars
  };
  if (r === "ccr_worker" && !v(ve, !1)) return {
    gzip: !1,
    reason: "flag_off",
    bodyChars: bodyChars
  };
  if ($e(s)) return {
    gzip: !1,
    reason: "latched_off",
    bodyChars: bodyChars
  };
  return {
    gzip: !0,
    bodyChars: bodyChars
  };
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
function facts_2(e) {
  return {
    status: e.status,
    header: n => e.headers.get(n) ?? void 0,
    bodyText: () => Ye(e)
  };
}
function He(e) {
  return (e.header("request-id")?.startsWith("req_") ?? !1) || e.header("cf-ray") !== void 0;
}
async function Ye(e) {
  let n = e.clone().body?.getReader();
  if (!n) return "";
  let textDecoder = new TextDecoder(),
    r = "",
    a = Fe;
  try {
    while (a > 0) {
      let {
        done: done,
        value: value
      } = await n.read();
      if (done) break;
      let y = value.subarray(0, a);
      a -= y.byteLength, r += textDecoder.decode(y, {
        stream: !0
      });
    }
  } catch {} finally {
    n.cancel().catch(() => {});
  }
  return r;
}
function Ve(e) {
  let n;
  try {
    n = ee(e);
  } catch {
    return te.test(e.trimEnd());
  }
  let s = We().safeParse(n);
  if (s.success) return Ke.some(item => s.data.error.message.startsWith(item));
  let r = Ue().safeParse(n);
  return r.success && r.data.reason === "bad_json" && te.test(r.data.error);
}
async function D(e) {
  if (e.status !== 400 && e.status !== 403 && e.status !== 415) return null;
  if (!He(e)) return "non_anthropic_rejection";
  if (e.status === 400 && Ve(await e.bodyText())) return "invalid_json_at_origin";
  return null;
}
async function mws(e) {
  if (e.ok) return null;
  return D(facts_2(e));
}
async function Ze(e) {
  if ((await D(e)) !== null) return "same_rejection";
  return e.header("request-id")?.startsWith("req_") ? "api_response" : "not_api_response";
}
function Qe() {
  let e;
  try {
    e = fe().gzipRequestBodiesLatchedOff;
  } catch {
    return "unavailable";
  }
  if (e === void 0) return;
  let n = de().safeParse(e);
  return n.success ? n.data : "malformed";
}
function ne(e, n) {
  Le(s => {
    let r = de().safeParse(s.gzipRequestBodiesLatchedOff);
    return (r.success ? r.data.latchedAt === e : s.gzipRequestBodiesLatchedOff !== void 0) ? {
      ...s,
      gzipRequestBodiesLatchedOff: void 0
    } : s;
  }, n);
}
function $e(e) {
  let gzipRequestBody_2 = Cs().gzipRequestBody;
  if (gzipRequestBody_2.latchedOff) return !0;
  if (gzipRequestBody_2.persistedLatchChecked) return !1;
  let s = Qe();
  if (s === "unavailable") return !1;
  if (gzipRequestBody_2.persistedLatchChecked = !0, s === void 0) return !1;
  if (s === "malformed") return ne(void 0, e), l("tengu_gzip_request_body_latch_cleared", {
    reason: f("malformed")
  }), !1;
  let r = Date.now() - s.latchedAt;
  if (r >= 0 && r < De) return gzipRequestBody_2.latchedOff = !0, gzipRequestBody_2.persistedLatchInEffect = !0, !0;
  return ne(s.latchedAt, e), l("tengu_gzip_request_body_latch_cleared", {
    reason: r < 0 ? f("malformed") : f("expired"),
    latchedStatus: s.status,
    latchedAgeHours: Math.max(0, Math.round(r / 3600000))
  }), !1;
}
function F() {
  let gzipRequestBody_3 = Cs().gzipRequestBody;
  gzipRequestBody_3.latchedOff = !0, gzipRequestBody_3.rejectedThisProcess = !0, gzipRequestBody_3.persistedLatchChecked = !0;
}
function re({
  persist: persist,
  status: status,
  storageV5: storageV5,
  rollout = "api"
}) {
  F();
  let gzipRequestBody_4 = Cs().gzipRequestBody;
  if (persist && !gzipRequestBody_4.persistedLatchInEffect && se(rollout) !== !0) gzipRequestBody_4.persistedLatchInEffect = !0, Le(m => ({
    ...m,
    gzipRequestBodiesLatchedOff: {
      latchedAt: Date.now(),
      status: status
    }
  }), storageV5);
  return gzipRequestBody_4.persistedLatchInEffect ? "persisted" : "process";
}
function ue(e, n) {
  switch (e) {
    case "api":
      if (n === "fell_back") c("api_gzip_request_body", "fell_back");else if (Cs().once("gzip_request_body_ok")) g("api_gzip_request_body");
      return;
    case "ccr_worker":
      if (n === "fell_back") c("ccr_worker_gzip_request_body", "fell_back");else if (Cs().once("ccr_worker_gzip_request_body_ok")) g("ccr_worker_gzip_request_body");
      return;
    case "frame_publish":
      if (n === "fell_back") c("artifact_publish_gzip_request_body", "fell_back");else if (Cs().once("artifact_publish_gzip_request_body_ok")) g("artifact_publish_gzip_request_body");
      return;
  }
}
function eNn(e = "api") {
  ue(e, "sent");
}
function Xe(e, n) {
  if (e !== "ccr_worker") return;
  let ccrWorkerSkipReasonsLogged = Cs().gzipRequestBody.ccrWorkerSkipReasonsLogged;
  if (ccrWorkerSkipReasonsLogged.has(n.reason)) return;
  ccrWorkerSkipReasonsLogged.add(n.reason), l("tengu_gzip_request_body_skipped", {
    rollout: f(e),
    reason: f(n.reason),
    requestBodyChars: n.bodyChars
  });
}
function oe({
  rejection: rejection,
  status: status_2,
  viaCloudflare: viaCloudflare,
  retryOutcome: retryOutcome,
  retryStatus: retryStatus,
  latched: latched,
  bodyChars: d,
  rollout: rollout_2 = "api"
}) {
  ue(rollout_2, "fell_back"), t(`[API REQUEST] gzip request body rejected (rollout=${rollout_2} status=${status_2} kind=${rejection}); re-sent uncompressed \u2192 ${retryOutcome}${retryStatus !== void 0 ? ` status=${retryStatus}` : ""}; gzip latched off: ${latched}`, {
    level: "warn"
  }), l("tengu_gzip_request_body_fallback", {
    rollout: f(rollout_2),
    rejection: f(rejection),
    status: status_2,
    viaCloudflare: viaCloudflare,
    retryOutcome: f(retryOutcome),
    retryStatus: retryStatus,
    latched: f(latched),
    requestBodyChars: d
  });
}
async function ce({
  rejection: rejection_2,
  first: first,
  resend: resend,
  facts: facts,
  aborted: aborted,
  bodyChars: bodyChars_2,
  storageV5: storageV5_2,
  rollout: rollout_3
}) {
  let B = {
      rejection: rejection_2,
      status: first.status,
      viaCloudflare: first.header("cf-ray") !== void 0,
      bodyChars: bodyChars_2,
      rollout: rollout_3
    },
    _;
  try {
    _ = await resend();
  } catch (error) {
    throw oe({
      ...B,
      retryOutcome: aborted() ? "aborted" : "network_error",
      retryStatus: void 0,
      latched: re({
        persist: !1,
        status: first.status,
        storageV5: storageV5_2,
        rollout: rollout_3
      })
    }), error;
  }
  let h = facts(_),
    retryOutcome_2 = await Ze(h),
    latched_2 = re({
      persist: rollout_3 !== "ccr_worker" && rejection_2 === "non_anthropic_rejection" && retryOutcome_2 === "api_response",
      status: first.status,
      storageV5: storageV5_2,
      rollout: rollout_3
    });
  return oe({
    ...B,
    retryOutcome: retryOutcome_2,
    retryStatus: h.status,
    latched: latched_2
  }), _;
}
async function hws({
  res: res,
  dispatch: dispatch,
  finalInit: finalInit,
  identityBody: r,
  clientRequestId: clientRequestId,
  storageV5: storageV5_3,
  rollout: rollout_4 = "api"
}) {
  let rejection_3 = await mws(res);
  if (rejection_3 === null) return res;
  F(), res.body?.cancel().catch(() => {});
  let {
      compress: compress,
      ..._
    } = finalInit,
    h = {
      ..._,
      body: r
    };
  if (clientRequestId !== void 0) {
    let b = Cs().gzipRequestBody.telemetryByClientRequestId.get(clientRequestId);
    gws(clientRequestId, {
      requestBodyEncoding: "identity",
      requestBodyChars: qvr(r) ?? r.length,
      gzipFallbackStatus: res.status,
      ...(b !== void 0 && "gzipBlocks" in b && {
        gzipBlocks: b.gzipBlocks
      }),
      ...pws(r)
    });
  }
  return ce({
    rejection: rejection_3,
    first: facts_2(res),
    resend: () => dispatch(h),
    facts: facts_2,
    aborted: () => finalInit.signal?.aborted === !0,
    bodyChars: qvr(r) ?? r.length,
    storageV5: storageV5_3,
    rollout: rollout_4
  });
}
async function m1i({
  answer: answer,
  facts: facts_3,
  resendIdentity: s,
  aborted: aborted_2,
  bodyChars: bodyChars_3,
  storageV5: storageV5_4,
  rollout: rollout_5
}) {
  let first_2 = facts_3(answer),
    rejection_4 = await D(first_2);
  if (rejection_4 === null) return answer;
  return F(), ce({
    rejection: rejection_4,
    first: first_2,
    resend: s,
    facts: facts_3,
    aborted: aborted_2,
    bodyChars: bodyChars_3,
    storageV5: storageV5_4,
    rollout: rollout_5
  });
}
function ALt(rollout_6, storageV5_5) {
  return async (s, r, dispatch_2) => {
    let m = men(s, r.body, storageV5_5, rollout_6);
    if (!m?.gzip) {
      if (m !== void 0) Xe(rollout_6, m);
      return dispatch_2(r);
    }
    eNn(rollout_6);
    let finalInit_2 = {
        ...r,
        compress: "gzip",
        body: _Ve(r.body)
      },
      res_2 = await dispatch_2(finalInit_2);
    return hws({
      res: res_2,
      dispatch: dispatch_2,
      finalInit: finalInit_2,
      identityBody: r.body,
      clientRequestId: void 0,
      storageV5: storageV5_5,
      rollout: rollout_6
    });
  };
}
function gws(e, n) {
  Cs().gzipRequestBody.telemetryByClientRequestId.set(e, n);
}
function tNn(e, n) {
  if (e === null) return;
  let telemetryByClientRequestId = Cs().gzipRequestBody.telemetryByClientRequestId,
    r = telemetryByClientRequestId.get(e);
  if (r?.requestBodyEncoding !== "gzip") return;
  telemetryByClientRequestId.set(e, {
    ...r,
    gzipBlocks: r.gzipBlocks?.outcome === "as_blocks" ? {
      ...r.gzipBlocks,
      outcome: "rejected"
    } : n
  });
}
function h1i(e, n) {
  Cs().gzipRequestBody.dispatchAtByClientRequestId.set(e, n);
}
function g1i(e) {
  if (e === void 0) return;
  let dispatchAtByClientRequestId = Cs().gzipRequestBody.dispatchAtByClientRequestId,
    s = dispatchAtByClientRequestId.get(e);
  return dispatchAtByClientRequestId.delete(e), s;
}
function hen(e) {
  if (e === void 0) return;
  let telemetryByClientRequestId_2 = Cs().gzipRequestBody.telemetryByClientRequestId,
    s = telemetryByClientRequestId_2.get(e);
  return telemetryByClientRequestId_2.delete(e), s;
}
function Yvr(e) {
  if (e === void 0) return {};
  return {
    requestBodyEncoding: f(e.requestBodyEncoding),
    requestBodyChars: e.requestBodyChars,
    ...(e.requestBodyEncoding === "gzip" && e.requestBodyGzipLevel !== void 0 && {
      requestBodyGzipLevel: e.requestBodyGzipLevel
    }),
    ...("requestPrepareMs" in e && e.requestPrepareMs !== void 0 && {
      requestPrepareMs: e.requestPrepareMs
    }),
    ...("requestBodyReusedChars" in e && e.requestBodyReusedChars !== void 0 && {
      requestBodyReusedChars: e.requestBodyReusedChars
    }),
    ...("requestBodyComparedWithSdk" in e && e.requestBodyComparedWithSdk !== void 0 && {
      requestBodyComparedWithSdk: e.requestBodyComparedWithSdk
    }),
    ...("gzipBlocks" in e && e.gzipBlocks !== void 0 && {
      requestBodyGzipBlocksMode: e.gzipBlocks.mode,
      requestBodyGzipBlocksOutcome: f(e.gzipBlocks.outcome),
      ...(e.gzipBlocks.planned !== void 0 && {
        requestBodyGzipBlockCount: e.gzipBlocks.planned.blockCount,
        requestBodyGzipReusedBlockCount: e.gzipBlocks.planned.reusedBlockCount,
        requestBodyGzipReusedBytes: e.gzipBlocks.planned.reusedBytes,
        requestBodyGzipBlocksMs: e.gzipBlocks.planned.spentMs,
        ...(e.gzipBlocks.planned.gzippedBytes !== void 0 && {
          requestBodyGzippedBytes: e.gzipBlocks.planned.gzippedBytes
        }),
        requestBodyGzipStoredBytes: e.gzipBlocks.planned.storedBytes,
        requestBodyGzipEvictedBlockCount: e.gzipBlocks.planned.evictedForSpaceCount
      })
    }),
    ...("gzipSkipReason" in e && {
      gzipSkipReason: f(e.gzipSkipReason)
    }),
    ...("gzipFallbackStatus" in e && {
      gzipFallback: !0,
      gzipFallbackStatus: e.gzipFallbackStatus
    })
  };
}
t8i(men);
export { TLt, CLt, cws, l1i, d1i, RLt, uws, fws, hmo, c1i, e7e, R1, Cs, ZLn, u1i, f1i, Cmt, pws, qvr, men, p1i, mws, eNn, hws, m1i, ALt, gws, tNn, h1i, g1i, hen, Yvr };