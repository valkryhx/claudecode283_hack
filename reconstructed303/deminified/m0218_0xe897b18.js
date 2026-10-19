// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { at, j, Hc } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { q7e } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { tc } from "B:/~BUN/root/chunk-eya7pdzx.js";
import { Qg } from "B:/~BUN/root/chunk-q9dtdza4.js";
async function vw(e, t, {
  concurrency = Number.POSITIVE_INFINITY,
  stopOnError = !0,
  signal: signal
} = {}) {
  return new Promise((i, s) => {
    if (e[Symbol.iterator] === void 0 && e[Symbol.asyncIterator] === void 0) throw TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);
    if (typeof t !== "function") throw TypeError("Mapper function is required");
    if (!(Number.isSafeInteger(concurrency) && concurrency >= 1 || concurrency === Number.POSITIVE_INFINITY)) throw TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
    let a = [],
      c = [],
      d = new Map(),
      u = !1,
      S = !1,
      y = !1,
      R = 0,
      f = 0,
      b = e[Symbol.iterator] === void 0 ? e[Symbol.asyncIterator]() : e[Symbol.iterator](),
      h = () => {
        l(signal.reason);
      },
      p = () => {
        signal?.removeEventListener("abort", h);
      },
      _ = m => {
        i(m), p();
      },
      l = m => {
        u = !0, S = !0, s(m), p();
      };
    if (signal) {
      if (signal.aborted) l(signal.reason);
      signal.addEventListener("abort", h, {
        once: !0
      });
    }
    let E = async () => {
      if (S) return;
      let m = await b.next(),
        g = f;
      if (f++, m.done) {
        if (y = !0, R === 0 && !S) {
          if (!stopOnError && c.length > 0) {
            l(AggregateError(c));
            return;
          }
          if (S = !0, d.size === 0) {
            _(a);
            return;
          }
          let B = [];
          for (let [C, q] of a.entries()) {
            if (d.get(C) === T) continue;
            B.push(q);
          }
          _(B);
        }
        return;
      }
      R++, (async () => {
        try {
          let B = await m.value;
          if (S) return;
          let C = await t(B, g);
          if (C === T) d.set(g, C);
          a[g] = C, R--, await E();
        } catch (error) {
          if (stopOnError) l(error);else {
            c.push(error), R--;
            try {
              await E();
            } catch (error) {
              l(error);
            }
          }
        }
      })();
    };
    (async () => {
      for (let m = 0; m < concurrency; m++) {
        try {
          await E();
        } catch (error) {
          l(error);
          break;
        }
        if (y || u) break;
      }
    })();
  });
}
var T = Symbol("skip");
import { promisify as M } from "util";
import { constants as F, deflateRaw as W, deflateRawSync as K, inflateRaw as H, inflateRawSync as V } from "zlib";
var chunkSize = 131072,
  Y = 32768,
  Z = 4 * chunkSize,
  X = 32,
  Q = 2,
  J = q7e,
  v = 210000,
  ee = 256,
  I = {
    messages: '"messages":[',
    system: '],"system":',
    endOfSystemBlock: '"},{'
  },
  te = 1024;
function P(maxStoredBytes = J) {
  return {
    blocks: new Map(),
    storedBytes: 0,
    maxStoredBytes: maxStoredBytes,
    evictedForSpaceCount: 0,
    generation: 0,
    cancelIdleDrop: void 0,
    pooledCompression: Promise.resolve()
  };
}
function vmt(e) {
  e.cancelIdleDrop?.(), e.cancelIdleDrop = void 0, e.blocks.clear(), e.storedBytes = 0, e.generation++;
}
function mxo({
  body: body,
  level: level,
  store: store,
  clock: clock
}) {
  let blocks = ne(body),
    keys = re(body, blocks, level),
    s = clock.monotonicNow(),
    reusedBlockCount = 0,
    reusedBytes = 0,
    reused = blocks.map((item, index) => {
      let y = N(store, keys[index], s);
      if (y !== void 0) reusedBlockCount++, reusedBytes += item.end - item.start;
      return y;
    });
  if (store.blocks.size > 0) z(store, clock);
  return {
    body: body,
    level: level,
    blocks: blocks,
    keys: keys,
    reused: reused,
    reusedBlockCount: reusedBlockCount,
    reusedBytes: reusedBytes,
    generation: store.generation
  };
}
function hHs({
  keys: keys_2,
  reused: reused_2
}) {
  return keys_2.some((item, index) => item !== void 0 && reused_2[index] === void 0);
}
async function yHs(e, t, n, r) {
  let o = await hxo(e, t, n, r),
    i = Buffer.from([31, 139, 8, 0, 0, 0, 0, 0, 0, 255]),
    s = Buffer.alloc(10);
  return s[0] = 3, s.writeUInt32LE(Bun.hash.crc32(e.body), 2), s.writeUInt32LE(e.body.length % 4294967296, 6), Buffer.concat([i, ...o, s]);
}
class kmt extends Error {
  fault;
  constructor(e, t) {
    super("Request body gzip: a newly compressed block failed its check", t);
    this.fault = e;
  }
}
function gxo(e) {
  let t = k(e);
  return t === "Z_DATA_ERROR" || t === "Z_BUF_ERROR" ? t : void 0;
}
async function hxo(e, t, n, {
  signal: signal_2,
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
    y;
  if (!inBackground && body_2.length - e.reusedBytes <= Z) y = blocks_2.map((item, index) => {
    let h = reused_3[index];
    if (h !== void 0) return h;
    let p = body_2.subarray(item.start, item.end),
      _ = x(body_2, item, level_2),
      l = K(p, _);
    try {
      O(p, l, V(l, _));
    } catch (error) {
      throw A(error);
    }
    return l;
  });else {
    let b = (inBackground ? Promise.resolve() : t.pooledCompression).then(() => {
      signal_2?.throwIfAborted();
      let h = n.monotonicNow();
      return vw(blocks_2, async (p, _) => {
        if (stopIf?.()) throw Error("Request body gzip: compression stopped");
        if (reused_3[_] !== void 0) return reused_3[_];
        let l = t.generation === generation ? N(t, keys_3[_], h) : void 0;
        if (l !== void 0) return e.reusedBlockCount++, e.reusedBytes += p.end - p.start, l;
        let E = body_2.subarray(p.start, p.end),
          m = x(body_2, p, level_2),
          g = await oe(E, m);
        try {
          O(E, g, await se(g, m));
        } catch (error) {
          throw A(error);
        }
        return g;
      }, {
        concurrency: inBackground ? Q : X,
        signal: signal_2
      });
    });
    if (!inBackground) t.pooledCompression = b.then(() => {}, () => {});
    y = await b;
  }
  if (t.generation !== generation) return y;
  let R = n.monotonicNow();
  return y.forEach((item, index) => {
    let h = keys_3[index];
    if (h !== void 0 && !t.blocks.has(h)) {
      let p = item.buffer.byteLength === item.length;
      ae(t, h, p ? item : Buffer.copyBytesFrom(item), R);
    }
  }), de(t, R), z(t, n), y;
}
function ne(e) {
  let t = e.lastIndexOf(I.system),
    n = t === -1 ? -1 : e.indexOf(I.endOfSystemBlock, t),
    r = [e.indexOf(I.messages), t, n !== -1 && n - t <= te ? n + 2 : -1, e.length],
    o = [],
    i = 0;
  for (let s of r) {
    if (s <= i) continue;
    for (let start = i; start < s; start += chunkSize) o.push({
      start: start,
      end: Math.min(start + chunkSize, s),
      dictionaryStart: Math.max(start - Y, i)
    });
    i = s;
  }
  return o;
}
function re(e, t, n) {
  let r = t.map(item => item.end - item.start === chunkSize ? Bun.SHA256.hash(e.subarray(item.start, item.end), "base64") : void 0);
  return t.map((item, index) => {
    let s = r[index],
      a = item.dictionaryStart < item.start ? r[index - 1] : "none";
    return s === void 0 || a === void 0 ? void 0 : `${n}:${a}:${s}`;
  });
}
function oe(e, t) {
  return M(W)(e, t);
}
function se(e, t) {
  return M(H)(e, t);
}
function x(e, t, level_3) {
  return {
    level: level_3,
    finishFlush: F.Z_SYNC_FLUSH,
    chunkSize: chunkSize,
    ...(t.dictionaryStart < t.start && {
      dictionary: e.subarray(t.dictionaryStart, t.start)
    })
  };
}
function A(cause) {
  let t = gxo(cause);
  return t === void 0 ? cause : new kmt(t, {
    cause: cause
  });
}
var ie = 65535;
function O(e, t, n) {
  if (!n.equals(e)) throw new kmt("inflates_to_other_bytes");
  if (t.length < 4 || t.readUInt32BE(t.length - 4) !== ie) throw new kmt("no_flush_marker");
}
function N(e, t, lastUsedAt) {
  let r = t === void 0 ? void 0 : e.blocks.get(t);
  if (t === void 0 || r === void 0) return;
  return e.blocks.delete(t), e.blocks.set(t, {
    compressed: r.compressed,
    lastUsedAt: lastUsedAt
  }), r.compressed;
}
function ae(e, t, compressed, lastUsedAt_2) {
  let o = {
    compressed: compressed,
    lastUsedAt: lastUsedAt_2
  };
  e.blocks.set(t, o), e.storedBytes += G(o);
}
function de(e, t) {
  for (let [n, r] of e.blocks) {
    let o = e.storedBytes > e.maxStoredBytes;
    if (!o && t - r.lastUsedAt < v) return;
    if (e.blocks.delete(n), e.storedBytes -= G(r), o) e.evictedForSpaceCount++;
  }
}
function z(e, t) {
  let weakRef = new WeakRef(e);
  e.cancelIdleDrop?.(), e.cancelIdleDrop = t.setTimeout(() => {
    let r = weakRef.deref();
    if (r !== void 0) vmt(r);
  }, v, {
    unref: !0
  });
}
function G(e) {
  return ee + e.compressed.length;
}
function D() {
  return new WeakMap();
}
function _Hs(e, t, n) {
  let r = e.get(t);
  if (r?.fired) return {
    kind: "already_fired"
  };
  let inputTokens = n?.input_tokens ?? 0,
    cacheReadTokens = n?.cache_read_input_tokens ?? 0,
    s = n?.cache_creation_input_tokens ?? 0,
    a = (n?.cache_creation?.ephemeral_5m_input_tokens ?? 0) + (n?.cache_creation?.ephemeral_1h_input_tokens ?? 0),
    cacheCreationTokens = s > 0 ? s : a;
  if (inputTokens + cacheReadTokens + cacheCreationTokens <= 0) return {
    kind: "no_usage"
  };
  if (inputTokens < 20000 || cacheCreationTokens >= 0.1 * inputTokens) {
    let u = r ?? {
      consecutive: 0,
      fired: !1,
      okEmitted: !1
    };
    if (!r) e.set(t, u);
    if (u.consecutive = 0, !u.okEmitted && cacheReadTokens + cacheCreationTokens > 0) return u.okEmitted = !0, {
      kind: "confirm"
    };
    return {
      kind: "healthy"
    };
  }
  let d = r ?? {
    consecutive: 0,
    fired: !1,
    okEmitted: !1
  };
  if (!r) e.set(t, d);
  if (d.consecutive++, d.consecutive >= 3) return d.fired = !0, {
    kind: "fire",
    consecutive: d.consecutive,
    inputTokens: inputTokens,
    cacheReadTokens: cacheReadTokens,
    cacheCreationTokens: cacheCreationTokens
  };
  return {
    kind: "counted",
    consecutive: d.consecutive
  };
}
var Y9e = "root";
function HN(e) {
  return e ?? "root";
}
var max = 256;
class U {
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
  rootLatestRequestThreaded = !1;
  dumpPrompts = {
    recentRequests: [],
    stateByAgent: new Map(),
    retiredInitHashes: new tc({
      max: 1000
    }),
    appendQueue: Qg()
  };
  requestReplay = {
    chains: new Map(),
    hashMemos: new WeakMap(),
    unrecordableShapes: new Set()
  };
  lastIngressUuidBySession = new Map();
  cacheCoverage = D();
  gzipRequestBody = {
    latchedOff: !1,
    rejectedThisProcess: !1,
    persistedLatchChecked: !1,
    persistedLatchInEffect: !1,
    telemetryByClientRequestId: new tc({
      max: max
    }),
    dispatchAtByClientRequestId: new tc({
      max: max
    }),
    ccrWorkerSkipReasonsLogged: new Set(),
    blockStore: P(),
    blocksSwitchedOff: !1,
    blocksBuildGeneration: void 0,
    blockGzippedResponses: new WeakSet()
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
    threadsRead: new tc({
      max: 512
    })
  };
  foreignThinkingKeep = void 0;
  streamFirstByteArmedRequestIds = new tc({
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
var ce = new at(() => new U());
function Fs() {
  return ce.of(j());
}
var yxo = new Set(["clear", "resume", "spare_claim", "remote_attach"]);
function bHs() {
  return Hc((e, t) => {
    if (t === "cd" || t === "hydrate") return;
    let n = Fs();
    if (n.resetStreamNoEventsWarningLatch(), yxo.has(t)) {
      n.threadDropRecreate.delete(Y9e), n.threadRequestEnds.delete(Y9e), n.rootLatestRequestThreaded = !1;
      let gzipRequestBody = n.gzipRequestBody;
      if (vmt(gzipRequestBody.blockStore), gzipRequestBody.blocksSwitchedOff === "until_next_conversation") gzipRequestBody.blocksSwitchedOff = !1;
    }
  });
}
export { vw, vmt, mxo, hHs, yHs, kmt, gxo, hxo, _Hs, Y9e, HN, Fs, yxo, bHs };