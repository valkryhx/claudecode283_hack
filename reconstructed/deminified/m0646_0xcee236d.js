// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { gt, fa, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { ne } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { mu } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { jt, Tf, oAe, Lv } from "B:/~BUN/root/chunk-dv435n4g.js";
import { Hne } from "B:/~BUN/root/chunk-ht635kqk.js";
import { Ri } from "B:/~BUN/root/chunk-vpejnsp4.js";
import { Vte, el, Rx, EN } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { vl, Un } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { Brn as error_2 } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { euo, Vi, uR, knt, ruo, cyr, dyr, AMn, OA, gyr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Er } from "B:/~BUN/root/chunk-yzpw1mdr.js";
import { o, E, C, u, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
function Ee(e) {
  if (e.kind !== "resolved" || !Vi()) return;
  let r = OA(),
    lastResolvedAccountToken = r.lastResolvedAccountToken;
  if (r.lastResolvedAccountToken = e.token, lastResolvedAccountToken === void 0 || lastResolvedAccountToken === e.token) return;
  jt().identityEpoch += 1, FEt(), Je();
}
function Je() {
  let e = jt();
  if (!e.identityTrippedHandler) {
    e.identityTripUnowned = !0;
    return;
  }
  queueMicrotask(() => {
    let identityTrippedHandler = jt().identityTrippedHandler;
    if (!identityTrippedHandler) {
      jt().identityTripUnowned = !0;
      return;
    }
    try {
      identityTrippedHandler();
    } catch (error) {
      t(`MCP identity-change handler failed: ${l(error)}`, {
        level: "warn"
      });
    }
  });
}
function p9t(e) {
  let r = jt();
  return r.identityTrippedHandler = e, () => {
    if (r.identityTrippedHandler === e) r.identityTrippedHandler = null;
  };
}
function f9t() {
  let e = jt(),
    identityTripUnowned = e.identityTripUnowned;
  return e.identityTripUnowned = !1, identityTripUnowned;
}
function ue() {
  if (!Vi()) return;
  Ee(dyr());
}
function jpe() {
  let e = dyr();
  return Ee(e), e;
}
function br() {
  return ue(), jt().identityEpoch;
}
function HEt() {
  let e = jt();
  if (!Vi()) return e.identityEpoch;
  return e.identityEpoch += 1, e.identityEpoch;
}
var Qe = "baseline:rearmed";
function sao() {
  if (!Vi()) return;
  HEt(), OA().lastResolvedAccountToken = Qe;
}
function TP(e) {
  return ue(), e === jt().identityEpoch;
}
function FEt() {
  let e = jt();
  if (e.identityChangedThisProcess) return;
  e.identityChangedThisProcess = !0, p("mcp_discovery_cache", "identity_changed");
}
function ke() {
  return ue(), jt().identityChangedThisProcess;
}
var Ne = 4096,
  et = 1024,
  tt = new q(() => new Ce());
function Df() {
  return tt.of(j().host);
}
function stt(e, r) {
  if (!e || !r) return;
  try {
    return btoa(`${e}:${r}`);
  } catch {
    return;
  }
}
function rt() {
  return ruo() !== void 0;
}
class Ce {
  seen = new Set();
  off = !1;
  incomplete = !1;
  overflowNotice = null;
  record(e) {
    if (this.recordingOff()) return;
    if (typeof e !== "string" || e === "") return;
    let r = re(e, et);
    if (this.seen.has(r)) return;
    if (this.seen.size >= Ne) {
      this.incomplete = !0, this.overflowNotice ??= !0;
      return;
    }
    this.seen.add(r);
  }
  recordingOff() {
    if (!this.off && rt()) this.off = !0, this.seen.clear(), this.incomplete = !1, this.overflowNotice = null;
    return this.off;
  }
  takeOverflowNotice() {
    if (this.overflowNotice === !0) return this.overflowNotice = !1, !0;
    return !1;
  }
  snapshot() {
    return this.recordingOff(), {
      atoms: [...this.seen],
      complete: !this.incomplete
    };
  }
}
import { createHash as pe } from "crypto";
import { basename as ut, join as V } from "path";
import { createCipheriv as nt, createDecipheriv as it, createHash as ot, randomBytes as _e } from "crypto";
var Me = 32,
  Z = 12,
  authTagLength = 16,
  G = "v2:",
  be = Buffer.from("mcp-dc", "utf8"),
  st = /^[A-Za-z0-9+/]{43}=$/;
function Pe(e) {
  if (typeof e !== "string" || !st.test(e)) return;
  let r = Buffer.from(e, "base64");
  return r.length === Me ? r : void 0;
}
async function J() {
  let e = await Vte();
  if (e === vl) return;
  let r = Re(e?.mcpDiscoveryCacheKey);
  if (r) return r;
  let mcpDiscoveryCacheKey = _e(Me).toString("base64"),
    i = !1;
  try {
    i = (await Un().mutate(y => Pe(y.mcpDiscoveryCacheKey) ? y : {
      ...y,
      mcpDiscoveryCacheKey: mcpDiscoveryCacheKey
    })).success;
  } catch {
    i = !1;
  }
  if (!i) return;
  let s = await Vte();
  if (s === vl) return;
  return Re(s?.mcpDiscoveryCacheKey);
}
function Re(e) {
  return Pe(e);
}
function xe(e, r, n) {
  if (!Number.isInteger(e) || e < 0 || e > 255) throw Error("discovery-cache seal: schema version must fit one byte");
  let i = [r, n].map(item => Buffer.from(item, "utf8")),
    s = Buffer.allocUnsafe(be.length + 1 + i.reduce((acc, item) => acc + 4 + item.length, 0)),
    c = be.copy(s, 0);
  c = s.writeUInt8(e, c);
  for (let y of i) c = s.writeUInt32BE(y.length, c), c += y.copy(s, c);
  return s;
}
function Te(e, r) {
  let n = _e(Z),
    i = nt("aes-256-gcm", e.key, n, {
      authTagLength: authTagLength
    });
  i.setAAD(e.aad);
  let s = Buffer.concat([i.update(r, "utf8"), i.final()]),
    c = i.getAuthTag();
  return G + N(e.cacheKey) + ":" + Buffer.concat([n, s, c]).toString("base64url");
}
function N(e) {
  return ot("sha256").update(e, "utf8").digest().subarray(0, Oe).toString("base64url");
}
var Oe = 16,
  Ie = Math.ceil(Oe * 4 / 3),
  regExp = new RegExp(`^[A-Za-z0-9_-]{${Ie}}$`),
  dt = /^[A-Za-z0-9_-]*$/;
function Le(e) {
  return Fe(e)?.digest;
}
function Fe(e) {
  if (!e.startsWith(G)) return;
  let r = G.length + Ie;
  if (e.length <= r || e[r] !== ":") return;
  let digest = e.slice(G.length, r),
    body = e.slice(r + 1);
  if (!regExp.test(digest) || !dt.test(body)) return;
  return {
    digest: digest,
    body: body
  };
}
function fe(e, r) {
  if (!r.startsWith(G)) return {
    ok: !1,
    reason: "v1"
  };
  let n = Fe(r);
  if (!n) return {
    ok: !1,
    reason: "short"
  };
  if (n.digest !== N(e.cacheKey)) return {
    ok: !1,
    reason: "header"
  };
  let i = Buffer.from(n.body, "base64url");
  if (i.length < Z + authTagLength) return {
    ok: !1,
    reason: "short"
  };
  let s = i.subarray(0, Z),
    c = i.subarray(i.length - authTagLength),
    y = i.subarray(Z, i.length - authTagLength);
  try {
    let d = it("aes-256-gcm", e.key, s, {
      authTagLength: authTagLength
    });
    return d.setAuthTag(c), d.setAAD(e.aad), {
      ok: !0,
      plaintext: Buffer.concat([d.update(y), d.final()]).toString("utf8")
    };
  } catch {
    return {
      ok: !1,
      reason: "tag"
    };
  }
}
function m9t(e) {
  let r = OA();
  r.accountResolver = e, r.lastResolvedAccountToken = void 0;
}
function g9t(e) {
  OA().eraResolver = e;
}
function ft() {
  return OA().eraResolver();
}
function h9t() {
  return OA().accountResolver !== void 0;
}
function dS(e) {
  switch (e.type) {
    case "stdio":
    case void 0:
    case "sdk":
    case "sse-ide":
    case "ws-ide":
      return !1;
    default:
      return !0;
  }
}
function q2e(e, r) {
  return !TP(r) && dS(e);
}
function y9t(name, config) {
  return {
    name: name,
    type: "failed",
    config: config,
    error: error_2,
    errorCode: "IDENTITY_CHANGED"
  };
}
function _9t(e) {
  return e.some(item => dS(item.config));
}
function lt() {
  return jpe().token;
}
var v_2 = 1,
  pt = 900,
  yt = 14400,
  ht = 604800,
  vt = 1;
function Ke() {
  let MCP_DISCOVERY_CACHE_STRIKES = a.MCP_DISCOVERY_CACHE_STRIKES;
  return MCP_DISCOVERY_CACHE_STRIKES && MCP_DISCOVERY_CACHE_STRIKES > 0 ? MCP_DISCOVERY_CACHE_STRIKES : vt;
}
var mt = 384,
  He = 448,
  ie = f(() => {
    let e = import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule().discoveryWireSchemas();
    return u({
      v: A(v_2),
      serverName: o(),
      cacheKey: o(),
      savedAt: E(),
      toolsSavedAt: E().optional(),
      consecutiveRefreshFailures: E().int().nonnegative(),
      serverInfo: e.implementation.optional(),
      negotiatedEra: z(AMn).optional(),
      capabilities: e.serverCapabilities,
      tools: C(e.tool),
      commands: C(e.prompt),
      resources: C(e.resource),
      templates: C(e.resourceTemplate).optional()
    });
  });
function wt() {
  let MCP_DISCOVERY_CACHE_TTL_S = a.MCP_DISCOVERY_CACHE_TTL_S;
  return Math.min((MCP_DISCOVERY_CACHE_TTL_S && MCP_DISCOVERY_CACHE_TTL_S > 0 ? MCP_DISCOVERY_CACHE_TTL_S : pt) * 1000, ze());
}
function ze() {
  let MCP_DISCOVERY_CACHE_MAX_STALE_S = a.MCP_DISCOVERY_CACHE_MAX_STALE_S;
  return Math.min(MCP_DISCOVERY_CACHE_MAX_STALE_S && MCP_DISCOVERY_CACHE_MAX_STALE_S > 0 ? MCP_DISCOVERY_CACHE_MAX_STALE_S : yt, ht) * 1000;
}
function Wpe(e) {
  return Ue(e) === void 0;
}
function St(e) {
  return oe.some(item => item.reason === e);
}
var oe = [{
  prop: "discoveryCache",
  reason: "opt-out",
  excludes: e => e === !1,
  normalize: e => e === !1 ? !1 : void 0,
  valueDomain: [void 0, !1]
}, {
  prop: "headersHelper",
  reason: "headers-helper",
  excludes: e => Boolean(e),
  normalize: e => e ? e : void 0,
  valueDomain: [void 0]
}];
function Ge(e) {
  let r = {
    ...e
  };
  for (let {
    prop: prop,
    normalize: normalize
  } of oe) {
    if (!(prop in r)) continue;
    let s = normalize(r[prop]);
    if (s === void 0) delete r[prop];else r[prop] = s;
  }
  return r;
}
function Dt(e) {
  let r = e;
  if (typeof r.url === "string" && Hne(r.url)) return !0;
  if (r.headers && typeof r.headers === "object") {
    for (let n of Object.values(r.headers)) if (typeof n === "string" && Hne(n)) return !0;
  }
  return !1;
}
function Ue(e) {
  let r = knt();
  if (r !== void 0) return r;
  if (ke()) return "identity-changed";
  if (e.type !== "http" && e.type !== "sse") return "transport";
  if (Tf(e) || oAe(e)) return "cli-owned";
  if (Dt(e)) return "env-placeholder";
  if (EN(e.url) && !Rx(e) || Lv(e.url)) return "ambient-credential";
  let n = e;
  for (let {
    prop: prop_2,
    reason: reason,
    excludes: excludes
  } of oe) if (excludes(n[prop_2])) return reason;
  return;
}
function I() {
  return V(Se(), "mcp-discovery-cache");
}
async function Et(e, r) {
  if (!Wpe(r)) return !1;
  return (await Ve(e, r)).kind !== "degenerate";
}
async function Ve(e, r) {
  if (r.type !== "http" && r.type !== "sse") return {
    kind: "none"
  };
  let n = await Vte();
  if (n === vl) return {
    kind: "degenerate"
  };
  let i = n?.mcpOAuth?.[el(e, r)];
  if (!i) return {
    kind: "none"
  };
  let refreshToken = i.refreshToken;
  if (!refreshToken) return {
    kind: "degenerate"
  };
  return {
    kind: "resolved",
    hash: pe("sha256").update(refreshToken).digest("hex").slice(0, 16)
  };
}
async function kt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return "grant:none";
  let n = await Ve(e, r);
  switch (n.kind) {
    case "none":
      return "grant:none";
    case "resolved":
      return `grant:${n.hash}`;
    case "degenerate":
      return;
  }
}
async function Ct(e, r) {
  let n = jpe();
  if (n.kind === "unwired" || n.kind === "incomplete") return;
  let grantToken = await kt(e, r);
  if (grantToken === void 0) return;
  let s = [n.token];
  if (r.type === "http" || r.type === "sse") s.push(grantToken);
  return {
    fingerprint: pe("sha256").update(s.join("\x00")).digest("hex"),
    grantToken: grantToken
  };
}
function he(e, r, n, i) {
  let s = [e, r, `era:${n}`, {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION ?? "unknown", ...(i ? ["offer:io.modelcontextprotocol/ui"] : [])].join("\x00");
  return `${pe("sha256").update(s).digest("hex").slice(0, 32)}.json`;
}
var bt = /^[0-9a-f]{16}\0/;
function CP(e) {
  let r = `${e}-`,
    filePathMemo = OA().filePathMemo;
  for (let i of filePathMemo.keys()) {
    if (!i.startsWith(r)) continue;
    if (bt.test(i.slice(r.length))) filePathMemo.delete(i);
  }
}
function T(e, r) {
  return Er(e, Ge(r));
}
async function Rt(e, r) {
  return (await M(e, r))?.path;
}
async function qH(e, r) {
  if (!Vi()) return;
  try {
    return (await M(e, r))?.legToken;
  } catch {
    return;
  }
}
async function M(e, r) {
  let cacheKey = T(e, r),
    i = ft(),
    s = gyr(),
    c = lt(),
    y = `${cacheKey}\x00${c}\x00era:${i}\x00ui:${s}`,
    filePathMemo_2 = OA().filePathMemo,
    h = filePathMemo_2.get(y);
  if (h) return h;
  let g = (async () => {
    let w = await Ct(e, r);
    if (w === void 0) return;
    return {
      path: V(I(), he(cacheKey, w.fingerprint, i, s)),
      grantToken: w.grantToken,
      fingerprint: w.fingerprint,
      cacheKey: cacheKey,
      aad: xe(v_2, cacheKey, w.fingerprint),
      legToken: `${w.grantToken}\x00era:${i}\x00${c}`
    };
  })();
  filePathMemo_2.set(y, g);
  let S = () => {
    if (filePathMemo_2.get(y) === g) filePathMemo_2.delete(y);
  };
  return g.then(w => {
    if (w === void 0) S();
  }, S), g;
}
function L() {
  return OA().storage;
}
function R() {
  return OA().storageV5;
}
function ge(e) {
  return Ae.userConfigDir("mcp-discovery-cache", [ut(e)]);
}
var _t = {
    namespace: "userConfigDir",
    dir: "mcp-discovery-cache"
  },
  F = 8388608;
function ve(e) {
  return Math.max(e.savedAt, e.toolsSavedAt ?? 0);
}
class RefusedDiscoveryEntryError extends Error {
  entryPath;
  reason;
  constructor(e, r, n) {
    super(n);
    this.entryPath = e;
    this.reason = r;
    this.name = "RefusedDiscoveryEntryError";
  }
}
class OversizeDiscoveryEntryError extends RefusedDiscoveryEntryError {
  constructor(e) {
    super(e, "oversize", "discovery-cache: oversize entry");
    this.name = "OversizeDiscoveryEntryError";
  }
}
class SymlinkedDiscoveryEntryError extends RefusedDiscoveryEntryError {
  constructor(e) {
    super(e, "symlink", "discovery-cache: symlinked entry refused");
    this.name = "SymlinkedDiscoveryEntryError";
  }
}
class NonRegularDiscoveryEntryError extends RefusedDiscoveryEntryError {
  constructor(e) {
    super(e, "non-regular", "discovery-cache: non-regular entry refused");
    this.name = "NonRegularDiscoveryEntryError";
  }
}
function se(e) {
  return e instanceof RefusedDiscoveryEntryError;
}
async function ce(e, r) {
  let readGateForTest = OA().readGateForTest;
  if (readGateForTest) await readGateForTest;
  if (r) return Mt(r, e);
  try {
    if (mu === 0) {
      let s = await L().lstat(e);
      if (s === void 0) return;
      if (s.isSymbolicLink) throw new SymlinkedDiscoveryEntryError(e);
      if (!s.isFile) throw new NonRegularDiscoveryEntryError(e);
    }
    let i;
    try {
      i = await L().readTail(e, F + 1, {
        noFollow: !0
      });
    } catch (error) {
      let c = v(error);
      if (c === "ELOOP") throw new SymlinkedDiscoveryEntryError(e);
      if (c === "ENXIO") throw new NonRegularDiscoveryEntryError(e);
      throw error;
    }
    if (i.length > F) throw new OversizeDiscoveryEntryError(e);
    return i.toString("utf8");
  } catch (error) {
    if (B(error)) return;
    throw error;
  }
}
async function Mt(e, r) {
  let key = ge(r),
    i = await e.read([{
      key: key,
      offset: 0,
      length: F + 1
    }], {
      symlinks: "refuse"
    });
  if (!i.ok) {
    let c = "cause" in i.error ? v(i.error.cause) : void 0;
    if (c === "ELOOP") throw new SymlinkedDiscoveryEntryError(r);
    if (c === "ENXIO") throw new NonRegularDiscoveryEntryError(r);
    throw Error("discovery-cache: read failed", {
      cause: i.error
    });
  }
  let s = i.value.items[0];
  if (!s.found) return;
  if (s.totalBytes > F) throw new OversizeDiscoveryEntryError(r);
  return Buffer.from(s.value).toString("utf8");
}
async function Pt(e, r, n) {
  if (n) {
    let s = await n.write(ge(e), r);
    if (!s.ok) throw Error("discovery-cache: write failed", {
      cause: s.error
    });
    return;
  }
  let i = L();
  await i.mkdir(I(), He), await i.atomicWrite(e, r, mt);
}
async function xt(e) {
  if (!e) return L().list(I());
  let r = [],
    cursor;
  do {
    let i = await e.listEntries(_t, {
      skipKeyStats: !0,
      skipScopeStats: !0,
      ...(cursor !== void 0 && {
        cursor: cursor
      })
    });
    if (!i.ok) throw Error("discovery-cache: list failed", {
      cause: i.error
    });
    for (let s of i.value.items) if (s.kind === "key" && s.key.namespace === "userConfigDir") {
      let c = s.key.relPath[0];
      if (c !== void 0 && s.key.relPath.length === 1) r.push(c);
    }
    cursor = i.value.cursor;
  } while (cursor);
  return r;
}
async function U(e, r) {
  if (r) {
    let n = await r.delete(ge(e));
    if (!n.ok) throw Error("discovery-cache: delete failed", {
      cause: n.error
    });
    return;
  }
  try {
    await L().delete(e);
  } catch (error) {
    if (!B(error)) throw error;
  }
}
async function b9t(e, r, n = Date.now()) {
  let i = Ue(r);
  if (i !== void 0 && !St(i)) return {
    kind: "miss",
    reason: i === "transport" ? "transport" : "disabled"
  };
  if (i !== void 0) {
    K();
    let k = Bt(e, r),
      P = $t(k),
      admissionPurgedKeySets = OA().admissionPurgedKeySets;
    if (!admissionPurgedKeySets.has(P)) admissionPurgedKeySets.add(P), Ft(e, r, k).then(Ze => {
      if (!Ze) admissionPurgedKeySets.delete(P);
    });
    return ne(e, `discovery-cache: ${i} \u2014 purging this server's cache-key family, serving miss`), {
      kind: "miss",
      reason: "disabled"
    };
  }
  let s;
  try {
    s = await M(e, r);
  } catch (error) {
    return ne(e, `discovery-cache: fingerprint failed: ${error}`), {
      kind: "miss",
      reason: "no-fingerprint"
    };
  }
  if (s === void 0) return {
    kind: "miss",
    reason: "no-fingerprint"
  };
  let c = s.path,
    y = () => {
      x(c, e, void 0).catch(() => {});
    },
    d = () => (y(), m("mcp_discovery_cache", "corrupt_entry"), {
      kind: "miss",
      reason: "corrupt"
    }),
    h;
  try {
    h = await ce(c, R());
  } catch (error) {
    if (se(error)) return ne(e, `discovery-cache: ${error.reason} entry, deleting`), d();
    return ne(e, `discovery-cache: read failed: ${error}`), {
      kind: "miss",
      reason: "absent"
    };
  }
  if (h === void 0) return {
    kind: "miss",
    reason: "absent"
  };
  let g = await We(h, s, e, () => x(c, e, void 0));
  if (g.miss) {
    if (g.miss === "unsealed") if (g.cause === "v1") p("mcp_discovery_cache", "unsealed_v1");else m("mcp_discovery_cache", `unsealed_${g.cause}`);
    return {
      kind: "miss",
      reason: g.miss
    };
  }
  let S = ie().safeParse(ct(g.plaintext, !1));
  if (!S.success) return ne(e, "discovery-cache: corrupt entry, deleting"), d();
  let entry = S.data;
  if (entry.cacheKey !== T(e, r)) return ne(e, "discovery-cache: entry keyed for another server, deleting"), d();
  if (entry.consecutiveRefreshFailures >= Ke()) return y(), {
    kind: "miss",
    reason: "strike-threshold"
  };
  let b = ze();
  if (ve(entry) - n > b) return y(), {
    kind: "miss",
    reason: "expired"
  };
  let ageMs = Math.max(0, n - entry.savedAt);
  if (ageMs >= b) return y(), {
    kind: "miss",
    reason: "expired"
  };
  if (ageMs < wt() && !(entry.capabilities.tools && entry.tools.length === 0)) return {
    kind: "fresh",
    entry: entry,
    ageMs: ageMs
  };
  return {
    kind: "stale",
    entry: entry,
    ageMs: ageMs
  };
}
function W(e, r, n) {
  return OA().serializeWrite(e, n).catch(i => {
    ne(r, `discovery-cache: write op failed: ${i}`);
  });
}
function X(e) {
  return OA().deleteGenerationByCacheKey.get(e) ?? 0;
}
function ae(e) {
  OA().deleteGenerationByCacheKey.set(e, X(e) + 1);
}
var Ye = 8;
async function At(e, r) {
  if (r.type !== "http" && r.type !== "sse") return [];
  let n = await Vte();
  if (n === vl) return vl;
  let i = el(e, r),
    s = n?.mcpOAuth?.[i],
    c = [];
  if (typeof s?.accessToken === "string") c.push(s.accessToken);
  if (typeof s?.refreshToken === "string") c.push(s.refreshToken);
  if (typeof s?.clientSecret === "string") c.push(s.clientSecret);
  let y = n?.mcpOAuthClientConfig?.[i]?.clientSecret;
  if (typeof y === "string") c.push(y);
  return c;
}
var le = /auth|token|key|secret|cookie|session|sig|pass|cred|bearer/i,
  Tt = /^\s*[A-Za-z][A-Za-z0-9!#$%&'*+.^_`|~-]*\s+(?=\S)/;
function je(e, r, n) {
  if (typeof r !== "string" || !le.test(e)) return;
  if (n(r.trim()), n(r.replace(Tt, "").trim()), /^cookie$/i.test(e)) for (let i of r.split(";")) {
    let s = i.indexOf("=");
    n((s === -1 ? i : i.slice(s + 1)).trim());
  }
}
function P0e(e, r) {
  let n = Df();
  if (n.recordingOff()) return;
  let i = new Map();
  for (let [s, c] of Object.entries(e ?? {})) i.set(s.toLowerCase(), c);
  for (let [s, c] of Object.entries(r)) {
    if (i.get(s.toLowerCase()) === c) continue;
    je(s, c, y => {
      if (y.length >= Ye) n.record(y);
    });
  }
}
var Ot = 268435456;
function Be(e) {
  let r = [e],
    n = fa(e).slice(1, -1);
  if (n !== e) r.push(n);
  try {
    let i = encodeURIComponent(e);
    if (i !== e) r.push(i);
  } catch {}
  return r;
}
function It(e, r, n = []) {
  let i = r,
    s = new Set(),
    c = d => {
      if (d !== void 0 && d.length >= Ye) s.add(d);
    };
  for (let [d, h] of Object.entries(i.headers ?? {})) je(d, h, c);
  try {
    let d = typeof i.url === "string" ? new URL(i.url) : void 0;
    for (let [h, g] of d?.searchParams.entries() ?? []) if (le.test(h)) for (let S of Be(g)) c(S);
    for (let h of d?.search.replace(/^\?/, "").split("&") ?? []) {
      let g = h.indexOf("=");
      if (g > 0 && le.test(h.slice(0, g))) c(h.slice(g + 1));
    }
    for (let h of d ? [d.password, d.username] : []) if (h) {
      c(h);
      try {
        c(decodeURIComponent(h));
      } catch {}
    }
  } catch {}
  for (let d of n) c(d);
  let y = Df().snapshot();
  if (!y.complete) return "presented-log-incomplete";
  for (let d of y.atoms) c(d);
  if (s.size * e.length > Ot) return "scan-budget";
  for (let d of s) for (let h of Be(d)) if (e.includes(h)) return "material";
  return;
}
function we(key_2, r) {
  return {
    key: key_2,
    cacheKey: r.cacheKey,
    aad: r.aad
  };
}
async function We(e, r, n, i) {
  let s = await J();
  if (s === void 0) return ne(n, "Discovery cache: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process"), cyr(), {
    miss: "key-unavailable"
  };
  let c = fe(we(s, r), e);
  if (c.ok) return {
    plaintext: c.plaintext
  };
  ne(n, `Discovery cache: entry did not open (${c.reason}) \u2014 discarded`);
  try {
    await i();
  } catch (error) {
    ne(n, `discovery-cache: reap after failed open skipped ${error}`);
  }
  return {
    miss: "unsealed",
    cause: c.reason
  };
}
function O({
  verdict: verdict,
  code: code
}) {
  if (verdict === "written") _("mcp_discovery_cache");else if (verdict === "terminal") m("mcp_discovery_cache", code);else p("mcp_discovery_cache", code);
  return verdict;
}
async function De(e) {
  let {
    path: path,
    serverName: serverName,
    config: config_2,
    cacheKey: cacheKey_2,
    entry: entry_2,
    context: context,
    label: label
  } = e;
  if (knt() !== void 0) return ne(serverName, `Discovery cache ${label} refused: the cache turned off since this round started`), {
    verdict: "superseded",
    code: "disabled"
  };
  if (X(cacheKey_2) !== e.capturedDeleteGeneration) return ne(serverName, `Discovery cache ${label} refused: entry deleted since this round started (tombstone)`), {
    verdict: "superseded",
    code: "tombstone"
  };
  if (!TP(context.identityEpoch)) return ne(serverName, `Discovery cache ${label} refused: identity changed since this round was fetched (stale epoch)`), {
    verdict: "superseded",
    code: "stale_epoch"
  };
  let h = await J();
  if (h === void 0) return cyr(), ne(serverName, `Discovery cache ${label} refused: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process`), {
    verdict: "superseded",
    code: "key_unavailable"
  };
  let g;
  try {
    g = await At(serverName, config_2);
  } catch {
    g = vl;
  }
  if (g === vl) return ne(serverName, `Discovery cache ${label} refused: OAuth token store unreadable (cannot verify no secrets on disk)`), {
    verdict: "transient",
    code: "transient"
  };
  let S;
  try {
    S = await M(serverName, config_2);
  } catch {
    return {
      verdict: "transient",
      code: "transient"
    };
  }
  if (S === void 0 || S.path !== path || S.legToken !== context.grantLeg) return ne(serverName, `Discovery cache ${label} refused: grant or era changed since this round was fetched (stale leg)`), {
    verdict: "superseded",
    code: "stale_grant"
  };
  let w = ie().safeParse(entry_2);
  if (!w.success) return ne(serverName, `Discovery cache ${label} refused: entry failed schema validation`), {
    verdict: "terminal",
    code: "schema"
  };
  let b = fa(w.data);
  if (Buffer.byteLength(b, "utf8") > F) return ne(serverName, `Discovery cache ${label} refused: serialized entry exceeds DISCOVERY_ENTRY_MAX_BYTES`), {
    verdict: "terminal",
    code: "oversize"
  };
  if (knt() !== void 0) return ne(serverName, `Discovery cache ${label} refused: the cache turned off since this round started`), {
    verdict: "superseded",
    code: "disabled"
  };
  let D = It(b, config_2, g);
  if (D !== void 0) {
    if (Df().takeOverflowNotice()) ne(serverName, "Discovery cache: presented-credential log is full \u2014 cache writes are refused for the rest of this process");
    if (D === "scan-budget") return ne(serverName, `Discovery cache ${label} refused: secret-material scan exceeds its work budget (materials \xD7 entry size) \u2014 not scanned, not written`), {
      verdict: "terminal",
      code: "scan_budget"
    };
    if (D === "presented-log-incomplete") return ne(serverName, `Discovery cache ${label} refused: presented-credential log incomplete (cannot verify no secrets on disk)`), {
      verdict: "terminal",
      code: "presented_log_incomplete"
    };
    return ne(serverName, `Discovery cache ${label} refused: entry would carry presented secret material`), {
      verdict: "terminal",
      code: "secret_material"
    };
  }
  let k = Te(we(h, S), b);
  if (Buffer.byteLength(k, "utf8") > F) return ne(serverName, `Discovery cache ${label} refused: sealed entry exceeds DISCOVERY_ENTRY_MAX_BYTES`), {
    verdict: "terminal",
    code: "oversize"
  };
  try {
    await Pt(path, k, R());
  } catch (error) {
    return ne(serverName, `Discovery cache ${label} refused: disk write failed (${l(error)})`), {
      verdict: "transient",
      code: "transient"
    };
  }
  return {
    verdict: "written",
    code: "written"
  };
}
async function x(e, r, n) {
  if (n !== void 0) ae(n);
  await W(e, r, () => U(e, R()));
}
async function Lt(e, r) {
  await Promise.race([e.then(() => {}, () => {}), Q(r, void 0, {
    unref: !0
  })]);
}
async function TG(e, r = 1500) {
  K(), await Lt(e, r);
}
function K() {
  if (!uR()) return;
  let e = OA();
  if (e.flushCleanup) return;
  e.flushCleanup = gt(() => e.drain(euo));
}
async function S9t(serverName_2, config_3, n, context_2) {
  let savedAt = context_2.now ?? Date.now(),
    cacheKey_3 = T(serverName_2, config_3),
    capturedDeleteGeneration = X(cacheKey_3);
  if (!TP(context_2.identityEpoch)) return "superseded";
  if (context_2.grantLeg === void 0) return "superseded";
  if (!Wpe(config_3)) return "superseded";
  K();
  let d;
  try {
    d = await M(serverName_2, config_3);
  } catch {
    return O({
      verdict: "transient",
      code: "transient"
    });
  }
  if (d === void 0) return "superseded";
  if (d.legToken !== context_2.grantLeg) return ne(serverName_2, "Discovery cache write refused: grant changed since this round was fetched (stale grant)"), O({
    verdict: "superseded",
    code: "stale_grant"
  });
  let h = d.path,
    entry_3 = {
      v: v_2,
      serverName: serverName_2,
      cacheKey: cacheKey_3,
      savedAt: savedAt,
      consecutiveRefreshFailures: 0,
      ...(n.serverInfo && {
        serverInfo: n.serverInfo
      }),
      ...(n.negotiatedEra !== void 0 && {
        negotiatedEra: n.negotiatedEra
      }),
      capabilities: n.capabilities,
      tools: n.tools,
      commands: n.commands,
      resources: n.resources,
      templates: n.templates
    },
    path_2 = h,
    w;
  return await W(path_2, serverName_2, async () => {
    if (!(await Et(serverName_2, config_3))) return;
    let b;
    try {
      b = await ce(path_2, R());
    } catch (error) {
      if (!se(error)) {
        ne(serverName_2, `Discovery cache write deferred: existing entry unreadable (${l(error)})`), w = {
          verdict: "transient",
          code: "transient"
        };
        return;
      }
      b = void 0;
    }
    if (b !== void 0) {
      let D = await J(),
        k = D && d ? fe(we(D, d), b) : void 0,
        P = k?.ok ? ie().safeParse(ct(k.plaintext, !1)) : void 0;
      if (P?.success && ve(P.data) > savedAt) {
        w = {
          verdict: "superseded",
          code: "fresher_on_disk"
        };
        return;
      }
    }
    w = await De({
      path: path_2,
      serverName: serverName_2,
      config: config_3,
      cacheKey: cacheKey_3,
      entry: entry_3,
      context: context_2,
      capturedDeleteGeneration: capturedDeleteGeneration,
      label: "write"
    });
  }), w ? O(w) : "superseded";
}
async function Xe(e, r) {
  let n = e.path,
    i;
  try {
    i = await ce(n, R());
  } catch (error) {
    if (se(error)) {
      await U(n, R());
      return;
    }
    throw error;
  }
  if (i === void 0) return;
  let s = await We(i, e, r, () => U(n, R()));
  if (s.miss) return;
  let c = ie().safeParse(ct(s.plaintext, !1));
  if (!c.success) {
    await U(n, R());
    return;
  }
  return c.data;
}
async function w9t(serverName_3, config_4, tools, context_3) {
  if (!TP(context_3.identityEpoch)) return;
  if (context_3.grantLeg === void 0) return;
  let cacheKey_4 = T(serverName_3, config_4),
    capturedDeleteGeneration_2 = X(cacheKey_4);
  if (K(), !Wpe(config_4)) return;
  let y;
  try {
    y = await M(serverName_3, config_4);
  } catch {
    O({
      verdict: "transient",
      code: "transient"
    });
    return;
  }
  if (y === void 0) return;
  if (y.legToken !== context_3.grantLeg) {
    ne(serverName_3, "Discovery cache tools merge refused: grant changed since this refresh was fetched (stale grant)"), O({
      verdict: "superseded",
      code: "stale_grant"
    });
    return;
  }
  let path_3 = y.path;
  await W(path_3, serverName_3, async () => {
    let h = await Xe(y, serverName_3);
    if (!h) return;
    if (ve(h) > context_3.fetchedAt) {
      O({
        verdict: "superseded",
        code: "fresher_on_disk"
      });
      return;
    }
    let entry_4 = {
      ...h,
      tools: tools,
      ...(Number.isFinite(context_3.fetchedAt) && context_3.fetchedAt > h.savedAt && {
        toolsSavedAt: context_3.fetchedAt
      })
    };
    O(await De({
      path: path_3,
      serverName: serverName_3,
      config: config_4,
      cacheKey: cacheKey_4,
      entry: entry_4,
      context: context_3,
      capturedDeleteGeneration: capturedDeleteGeneration_2,
      label: "tools merge"
    }));
  });
}
async function $Et(serverName_4, config_5, context_4) {
  if (!TP(context_4.identityEpoch)) return;
  if (context_4.grantLeg === void 0) return;
  let cacheKey_5 = T(serverName_4, config_5),
    capturedDeleteGeneration_3 = X(cacheKey_5);
  if (K(), !Wpe(config_5)) return;
  let c;
  try {
    c = await M(serverName_4, config_5);
  } catch {
    return;
  }
  if (c === void 0) return;
  if (c.legToken !== context_4.grantLeg) {
    ne(serverName_4, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
    return;
  }
  let path_4 = c.path;
  await W(path_4, serverName_4, async () => {
    let d = await Xe(c, serverName_4);
    if (!d) return;
    if (!TP(context_4.identityEpoch)) {
      ne(serverName_4, "Discovery cache refresh-failure strike refused: identity changed since this refresh was fetched (stale epoch)");
      return;
    }
    let h;
    try {
      h = await M(serverName_4, config_5);
    } catch {
      return;
    }
    if (h === void 0 || h.path !== path_4 || h.legToken !== context_4.grantLeg) {
      ne(serverName_4, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
      return;
    }
    let entry_5 = {
      ...d,
      consecutiveRefreshFailures: d.consecutiveRefreshFailures + 1
    };
    if (entry_5.consecutiveRefreshFailures >= Ke()) {
      ae(cacheKey_5), await U(path_4, R());
      return;
    }
    await De({
      path: path_4,
      serverName: serverName_4,
      config: config_5,
      cacheKey: cacheKey_5,
      entry: entry_5,
      context: context_4,
      capturedDeleteGeneration: capturedDeleteGeneration_3,
      label: "refresh-failure strike"
    });
  });
}
function v9t(e, r) {
  (async () => {
    let identityEpoch = br();
    await $Et(e, r, {
      identityEpoch: identityEpoch,
      grantLeg: await qH(e, r)
    });
  })().catch(n => t(`discovery-cache: strike after failed lazy dial of "${e}" did not land: ${l(n)}`));
}
async function qe(e, r) {
  for (let s of r) ae(s);
  let n = new Set([...r].map(N)),
    i = await xt(R());
  for (let s of i) {
    if (!s.endsWith(".json")) continue;
    let c = V(I(), s);
    try {
      let y;
      try {
        y = await ce(c, R());
      } catch (error) {
        if (se(error)) {
          await x(c, e, void 0);
          continue;
        }
        throw error;
      }
      if (y === void 0) continue;
      let d = Le(y);
      if (d === void 0) {
        await x(c, e, void 0);
        continue;
      }
      if (n.has(d)) await x(c, e, void 0);
    } catch (error) {
      ne(e, `discovery-cache: purge scan skipped ${error}`);
    }
  }
}
async function $e(e, r) {
  await qe(e, new Set([T(e, r)]));
}
function Ft(e, r, n) {
  let i = I(),
    s = !1;
  return W(i, e, async () => {
    let c;
    try {
      c = (await M(e, r))?.fingerprint;
    } catch {
      c = void 0;
    }
    if (c === void 0) {
      await qe(e, n), s = !0;
      return;
    }
    let y = [];
    for (let d of n) {
      let h = d;
      for (let g of AMn) for (let S of [!1, !0]) y.push(x(V(i, he(d, c, g, S)), e, h)), h = void 0;
    }
    await Promise.all(y), s = !0;
  }).then(() => s);
}
function Bt(e, r) {
  let n = Ge(r),
    i = oe.map(({
      prop: prop_3,
      normalize: normalize_2,
      valueDomain: valueDomain
    }) => {
      let g = new Set(valueDomain.map(item => normalize_2(item))),
        S = n[prop_3];
      if (S !== void 0) g.add(S);
      return {
        prop: prop_3,
        states: [...g]
      };
    }),
    s = new Set(),
    c = (y, d) => {
      if (y === i.length) {
        s.add(Er(e, d));
        return;
      }
      let {
        prop: prop_4,
        states: states
      } = i[y];
      for (let S of states) {
        let w = {
          ...d
        };
        if (S === void 0) delete w[prop_4];else w[prop_4] = S;
        c(y + 1, w);
      }
    };
  return c(0, {
    ...n
  }), s;
}
function $t(e) {
  return [...e].sort().join(`
`);
}
async function itt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return;
  if (!uR()) return;
  K(), ae(T(e, r));
  try {
    let n = await M(e, r);
    if (n === void 0) {
      await $e(e, r);
      return;
    }
    let i = T(e, r),
      s = I(),
      c = new Set(AMn.flatMap(item => [!1, !0].map(h => V(s, he(i, n.fingerprint, item, h))))),
      y = [x(n.path, e, i)];
    for (let d of c) if (d !== n.path) y.push(x(d, e, void 0));
    await Promise.all(y), await $e(e, r);
  } catch (error) {
    ne(e, `discovery-cache: delete failed: ${error}`);
  }
}
async function k9t(e, r) {
  let n;
  try {
    n = await Rt(e, r);
  } catch {
    return async () => {};
  }
  if (n === void 0) return async () => {};
  try {
    return await L().mkdir(I(), He), await Ri(n, {
      realpath: !1,
      retries: 0,
      stale: 60000,
      onCompromised: i => ne(e, `discovery-cache: refresh lock compromised, skipping refresh: ${i}`)
    });
  } catch (error) {
    let s = error instanceof Error ? error.message : String(error);
    if (error?.code === "ELOCKED" || s.includes("already being held")) {
      ne(e, "discovery-cache: refresh lock held elsewhere, skipping");
      return;
    }
    return ne(e, `discovery-cache: lock error, proceeding: ${s}`), async () => {};
  }
}
export { p9t, f9t, jpe, br, HEt, sao, TP, FEt, Df, stt, m9t, g9t, h9t, dS, q2e, y9t, _9t, Wpe, CP, qH, b9t, P0e, TG, S9t, w9t, $Et, v9t, itt, k9t };