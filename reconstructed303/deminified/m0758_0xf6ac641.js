// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { khe } from "B:/~BUN/root/chunk-a3eqgdv2.js";
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Ft, Np, JWe, F2s, l5, l5n, Jcn, VEe, Dyt, d5n, pFo, u5n, $2s, lm, Yy, sHr, Y2s, qEe } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { bt, Bi, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { dl } from "B:/~BUN/root/chunk-7c8rc0p5.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Sge, md, ND, KN, yzs } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { sk } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { er, H4 } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { wl, qn } from "B:/~BUN/root/chunk-245a2x6v.js";
import { XEe } from "B:/~BUN/root/chunk-we0fhavr.js";
import { ije } from "B:/~BUN/root/chunk-429xgjya.js";
import { iBn as error_2 } from "B:/~BUN/root/chunk-00v9f07q.js";
import { Aps, qa, YI, qAt, Ops, sao, iao, Ymr, U0, aao } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Jn } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { fr } from "B:/~BUN/root/chunk-c6mbjdcy.js";
import { o, v, T, u, U, C } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { Us } from "B:/~BUN/root/chunk-t7350kw8.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { createHash as $e } from "crypto";
import { basename as ht, join as W } from "path";
var qir = [Dyt, Jcn, pFo, d5n, XEe, l5n, u5n];
var Kir = "x-mcp-server-origin",
  Ee = "x-ccr-owner-slack-user-id";
function jKt(e, r) {
  return Object.entries(e ?? {}).filter(([n]) => n.toLowerCase() === r).map(([, n]) => n);
}
function Ce(e) {
  if (e.kind !== "resolved" || !qa()) return;
  let r = U0(),
    lastResolvedAccountToken = r.lastResolvedAccountToken;
  if (r.lastResolvedAccountToken = e.token, lastResolvedAccountToken === void 0 || lastResolvedAccountToken === e.token) return;
  Ft().identityEpoch += 1, BKt(), tt();
}
function tt() {
  let e = Ft();
  if (!e.identityTrippedHandler) {
    e.identityTripUnowned = !0;
    return;
  }
  queueMicrotask(() => {
    let identityTrippedHandler = Ft().identityTrippedHandler;
    if (!identityTrippedHandler) {
      Ft().identityTripUnowned = !0;
      return;
    }
    try {
      identityTrippedHandler();
    } catch (error) {
      t(`MCP identity-change handler failed: ${d(error)}`, {
        level: "warn"
      });
    }
  });
}
function cCn(e) {
  let r = Ft();
  return r.identityTrippedHandler = e, () => {
    if (r.identityTrippedHandler === e) r.identityTrippedHandler = null;
  };
}
function uCn() {
  let e = Ft(),
    identityTripUnowned = e.identityTripUnowned;
  return e.identityTripUnowned = !1, identityTripUnowned;
}
function ue() {
  if (!qa()) return;
  Ce(iao());
}
function N_e() {
  let e = iao();
  return Ce(e), e;
}
function I9r() {
  let e = N_e();
  return e.kind === "unwired" || e.kind === "incomplete" ? void 0 : e.token;
}
function Hr() {
  return ue(), Ft().identityEpoch;
}
function UKt() {
  let e = Ft();
  if (!qa()) return e.identityEpoch;
  return e.identityEpoch += 1, e.identityEpoch;
}
var rt = "baseline:rearmed";
function Kes() {
  if (!qa()) return;
  UKt(), U0().lastResolvedAccountToken = rt;
}
function AP(e) {
  return ue(), e === Ft().identityEpoch;
}
function BKt() {
  let e = Ft();
  if (e.identityChangedThisProcess) return;
  e.identityChangedThisProcess = !0, p("mcp_discovery_cache", "identity_changed");
}
function we() {
  return ue(), Ft().identityChangedThisProcess;
}
import { createCipheriv as nt, createDecipheriv as it, createHash as ot, randomBytes as ke } from "crypto";
var Re = 32,
  N = 12,
  authTagLength = 16,
  K = "v2:",
  De = Buffer.from("mcp-dc", "utf8"),
  ct = /^[A-Za-z0-9+/]{43}=$/;
function be(e) {
  if (typeof e !== "string" || !ct.test(e)) return;
  let r = Buffer.from(e, "base64");
  return r.length === Re ? r : void 0;
}
async function J() {
  let e = await Sge();
  if (e === wl) return;
  let r = _e(e?.mcpDiscoveryCacheKey);
  if (r) return r;
  let mcpDiscoveryCacheKey = ke(Re).toString("base64"),
    i = !1;
  try {
    i = (await qn().mutate(y => be(y.mcpDiscoveryCacheKey) ? y : {
      ...y,
      mcpDiscoveryCacheKey: mcpDiscoveryCacheKey
    })).success;
  } catch {
    i = !1;
  }
  if (!i) return;
  let s = await Sge();
  if (s === wl) return;
  return _e(s?.mcpDiscoveryCacheKey);
}
function _e(e) {
  return be(e);
}
function Me(e, r, n) {
  if (!Number.isInteger(e) || e < 0 || e > 255) throw Error("discovery-cache seal: schema version must fit one byte");
  let i = [r, n].map(item => Buffer.from(item, "utf8")),
    s = Buffer.allocUnsafe(De.length + 1 + i.reduce((acc, item) => acc + 4 + item.length, 0)),
    c = De.copy(s, 0);
  c = s.writeUInt8(e, c);
  for (let y of i) c = s.writeUInt32BE(y.length, c), c += y.copy(s, c);
  return s;
}
function Ae(e, r) {
  let n = ke(N),
    i = nt("aes-256-gcm", e.key, n, {
      authTagLength: authTagLength
    });
  i.setAAD(e.aad);
  let s = Buffer.concat([i.update(r, "utf8"), i.final()]),
    c = i.getAuthTag();
  return K + Q(e.cacheKey) + ":" + Buffer.concat([n, s, c]).toString("base64url");
}
function Q(e) {
  return ot("sha256").update(e, "utf8").digest().subarray(0, xe).toString("base64url");
}
var xe = 16,
  Te = Math.ceil(xe * 4 / 3),
  regExp = new RegExp(`^[A-Za-z0-9_-]{${Te}}$`),
  dt = /^[A-Za-z0-9_-]*$/;
function Ie(e) {
  return Oe(e)?.digest;
}
function Oe(e) {
  if (!e.startsWith(K)) return;
  let r = K.length + Te;
  if (e.length <= r || e[r] !== ":") return;
  let digest = e.slice(K.length, r),
    body = e.slice(r + 1);
  if (!regExp.test(digest) || !dt.test(body)) return;
  return {
    digest: digest,
    body: body
  };
}
function fe(e, r) {
  if (!r.startsWith(K)) return {
    ok: !1,
    reason: "v1"
  };
  let n = Oe(r);
  if (!n) return {
    ok: !1,
    reason: "short"
  };
  if (n.digest !== Q(e.cacheKey)) return {
    ok: !1,
    reason: "header"
  };
  let i = Buffer.from(n.body, "base64url");
  if (i.length < N + authTagLength) return {
    ok: !1,
    reason: "short"
  };
  let s = i.subarray(0, N),
    c = i.subarray(i.length - authTagLength),
    y = i.subarray(N, i.length - authTagLength);
  try {
    let l = it("aes-256-gcm", e.key, s, {
      authTagLength: authTagLength
    });
    return l.setAuthTag(c), l.setAAD(e.aad), {
      ok: !0,
      plaintext: Buffer.concat([l.update(y), l.final()]).toString("utf8")
    };
  } catch {
    return {
      ok: !1,
      reason: "tag"
    };
  }
}
var ut = 4096,
  ft = 1024,
  lt = new z(() => new Le());
function ah() {
  return lt.of(j().host);
}
function LEt(e, r) {
  if (!e || !r) return;
  try {
    return btoa(`${e}:${r}`);
  } catch {
    return;
  }
}
function yt() {
  return Ops() !== void 0;
}
class Le {
  seen = new Set();
  off = !1;
  incomplete = !1;
  overflowNotice = null;
  record(e) {
    if (this.recordingOff()) return;
    if (typeof e !== "string" || e === "") return;
    let r = ne(e, ft);
    if (this.seen.has(r)) return;
    if (this.seen.size >= ut) {
      this.incomplete = !0, this.overflowNotice ??= !0;
      return;
    }
    this.seen.add(r);
  }
  recordingOff() {
    if (!this.off && yt()) this.off = !0, this.seen.clear(), this.incomplete = !1, this.overflowNotice = null;
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
function pCn(e) {
  let r = U0();
  r.accountResolver = e, r.lastResolvedAccountToken = void 0;
}
function fCn(e) {
  U0().eraResolver = e;
}
function gt() {
  return U0().eraResolver();
}
function mCn() {
  return U0().accountResolver !== void 0;
}
function bE(e) {
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
function qrt(e, r) {
  return !AP(r) && bE(e);
}
function gCn(name, config) {
  return {
    name: name,
    type: "failed",
    config: config,
    error: error_2,
    errorCode: "IDENTITY_CHANGED"
  };
}
function hCn(e) {
  return e.some(item => bE(item.config));
}
function mt() {
  return N_e().token;
}
var v_2 = 1,
  vt = 900,
  St = 14400,
  Et = 604800,
  Ct = 1;
function Ke() {
  let MCP_DISCOVERY_CACHE_STRIKES = a.MCP_DISCOVERY_CACHE_STRIKES;
  return MCP_DISCOVERY_CACHE_STRIKES && MCP_DISCOVERY_CACHE_STRIKES > 0 ? MCP_DISCOVERY_CACHE_STRIKES : Ct;
}
var wt = 384,
  Ve = 448,
  ie = f(() => {
    let e = import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule().discoveryWireSchemas();
    return u({
      v: C(v_2),
      serverName: o(),
      cacheKey: o(),
      savedAt: v(),
      toolsSavedAt: v().optional(),
      consecutiveRefreshFailures: v().int().nonnegative(),
      serverInfo: e.implementation.optional(),
      negotiatedEra: U(Ymr).optional(),
      capabilities: e.serverCapabilities,
      tools: T(e.tool),
      commands: T(e.prompt),
      resources: T(e.resource),
      templates: T(e.resourceTemplate).optional()
    });
  });
function Dt() {
  let MCP_DISCOVERY_CACHE_TTL_S = a.MCP_DISCOVERY_CACHE_TTL_S;
  return Math.min((MCP_DISCOVERY_CACHE_TTL_S && MCP_DISCOVERY_CACHE_TTL_S > 0 ? MCP_DISCOVERY_CACHE_TTL_S : vt) * 1000, ze());
}
function ze() {
  let MCP_DISCOVERY_CACHE_MAX_STALE_S = a.MCP_DISCOVERY_CACHE_MAX_STALE_S;
  return Math.min(MCP_DISCOVERY_CACHE_MAX_STALE_S && MCP_DISCOVERY_CACHE_MAX_STALE_S > 0 ? MCP_DISCOVERY_CACHE_MAX_STALE_S : St, Et) * 1000;
}
function uNe(e) {
  return We(e) === void 0;
}
function _t(e) {
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
function Ue(e) {
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
function kt(e) {
  let r = e;
  if (typeof r.url === "string" && khe(r.url)) return !0;
  if (r.headers && typeof r.headers === "object") {
    for (let n of Object.values(r.headers)) if (typeof n === "string" && khe(n)) return !0;
  }
  return !1;
}
var Rt = ["MCP_DISCOVERY_CACHE_TTL_S", "MCP_DISCOVERY_CACHE_MAX_STALE_S", "MCP_DISCOVERY_CACHE_STRIKES"],
  Mt = [F2s, l5, $2s];
function Ge(e) {
  let r = process.env[e];
  return r !== void 0 && ije(e, r);
}
function Ye() {
  return fr() && a.MCP_DISCOVERY_CACHE === !0 && !Ge("MCP_DISCOVERY_CACHE");
}
function je(e) {
  if (!Ye() || Rt.some(Ge) || e.type !== "http" || e.scope !== "dynamic" || e.agentSource !== void 0 || sk(e)) return !1;
  let r = Y2s(e.url);
  if (r === null) return !1;
  let n = er(r.sessionSegment);
  if (!H4(r.sessionSegment) || !lm.ownCcrSessionIds.some(item => er(item) === n)) return !1;
  let i = jKt(e.headers, "x-mcp-server-id"),
    s = i[0];
  if (i.length !== 1 || s === void 0 || !sHr.test(s) || r.toolboxMcpServerId !== s || r.mcpServerId === s) return !1;
  let c = jKt(e.headers, Kir);
  if (c.length !== 1 || c[0] !== "directory" && c[0] !== "custom") return !1;
  if (jKt(e.headers, Ee).length > 0 || !r.upstreamUrl || /^ccr-owner-resolved:/i.test(r.upstreamUrl)) return !1;
  let y = [r.mcpServerId, s],
    l = [`cse_${n}`, `session_${n}`];
  return !(qEe(e.url) || y.some(item => qir.includes(item)) || [...yzs(), ...Mt].some(item => l.some(S => y.includes(VEe(S, item)))));
}
function Wqe(e) {
  return uNe(e) && !je(e);
}
function We(e) {
  let r = qAt();
  if (r !== void 0) return r;
  if (we()) return "identity-changed";
  if (e.type !== "http" && e.type !== "sse") return "transport";
  if (Np(e) || JWe(e)) return "cli-owned";
  if (kt(e)) return "env-placeholder";
  if (KN(e.url) && !ND(e)) return "ambient-credential";
  if (Yy(e.url)) {
    if (!je(e)) return "ambient-credential";
  } else if (Ye()) return "ambient-credential";
  let n = e;
  for (let {
    prop: prop_2,
    reason: reason,
    excludes: excludes
  } of oe) if (excludes(n[prop_2])) return reason;
  return;
}
function O() {
  return W(Pe(), "mcp-discovery-cache");
}
async function At(e, r) {
  if (!uNe(r)) return !1;
  return (await Xe(e, r)).kind !== "degenerate";
}
async function Xe(e, r) {
  if (r.type !== "http" && r.type !== "sse") return {
    kind: "none"
  };
  let n = await Sge();
  if (n === wl) return {
    kind: "degenerate"
  };
  let i = n?.mcpOAuth?.[md(e, r)];
  if (!i) return {
    kind: "none"
  };
  let refreshToken = i.refreshToken;
  if (!refreshToken) return {
    kind: "degenerate"
  };
  return {
    kind: "resolved",
    hash: st(refreshToken).slice(0, 16)
  };
}
async function Pt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return "grant:none";
  let n = await Xe(e, r);
  switch (n.kind) {
    case "none":
      return "grant:none";
    case "resolved":
      return `grant:${n.hash}`;
    case "degenerate":
      return;
  }
}
async function xt(e, r) {
  let n = N_e();
  if (n.kind === "unwired" || n.kind === "incomplete") return;
  let grantToken = await Pt(e, r);
  if (grantToken === void 0) return;
  let s = [n.token];
  if (r.type === "http" || r.type === "sse") s.push(grantToken);
  return {
    fingerprint: $e("sha256").update(s.join("\x00")).digest("hex"),
    grantToken: grantToken
  };
}
function ye(e, r, n, i) {
  let s = [e, r, `era:${n}`, {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.303",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-18T20:20:57Z",
    GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION ?? "unknown", ...(i ? ["offer:io.modelcontextprotocol/ui"] : [])].join("\x00");
  return `${$e("sha256").update(s).digest("hex").slice(0, 32)}.json`;
}
var Tt = /^[0-9a-f]{16}\0/;
function DL(e) {
  let r = `${e}-`,
    filePathMemo = U0().filePathMemo;
  for (let i of filePathMemo.keys()) {
    if (!i.startsWith(r)) continue;
    if (Tt.test(i.slice(r.length))) filePathMemo.delete(i);
  }
}
function x(e, r) {
  return Jn(e, Ue(r));
}
async function It(e, r) {
  return (await M(e, r))?.path;
}
async function hz(e, r) {
  if (!qa()) return;
  try {
    return (await M(e, r))?.legToken;
  } catch {
    return;
  }
}
async function M(e, r) {
  let cacheKey = x(e, r),
    i = gt(),
    s = aao(),
    c = mt(),
    y = `${cacheKey}\x00${c}\x00era:${i}\x00ui:${s}`,
    filePathMemo_2 = U0().filePathMemo,
    h = filePathMemo_2.get(y);
  if (h) return h;
  let S = (async () => {
    let E = await xt(e, r);
    if (E === void 0) return;
    return {
      path: W(O(), ye(cacheKey, E.fingerprint, i, s)),
      grantToken: E.grantToken,
      fingerprint: E.fingerprint,
      cacheKey: cacheKey,
      aad: Me(v_2, cacheKey, E.fingerprint),
      legToken: `${E.grantToken}\x00era:${i}\x00${c}`
    };
  })();
  filePathMemo_2.set(y, S);
  let w = () => {
    if (filePathMemo_2.get(y) === S) filePathMemo_2.delete(y);
  };
  return S.then(E => {
    if (E === void 0) w();
  }, w), S;
}
function L() {
  return U0().storage;
}
function b() {
  return U0().storageV5;
}
function he(e) {
  return Be.userConfigDir("mcp-discovery-cache", [ht(e)]);
}
var Ot = {
    namespace: "userConfigDir",
    dir: "mcp-discovery-cache"
  },
  F = 8388608;
function ge(e) {
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
  let readGateForTest = U0().readGateForTest;
  if (readGateForTest) await readGateForTest;
  if (r) return Lt(r, e);
  try {
    if (Us === 0) {
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
      let c = k(error);
      if (c === "ELOOP") throw new SymlinkedDiscoveryEntryError(e);
      if (c === "ENXIO") throw new NonRegularDiscoveryEntryError(e);
      throw error;
    }
    if (i.length > F) throw new OversizeDiscoveryEntryError(e);
    return i.toString("utf8");
  } catch (error) {
    if (G(error)) return;
    throw error;
  }
}
async function Lt(e, r) {
  let key = he(r),
    i = await e.read([{
      key: key,
      offset: 0,
      length: F + 1
    }], {
      symlinks: "refuse"
    });
  if (!i.ok) {
    let c = "cause" in i.error ? k(i.error.cause) : void 0;
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
async function Bt(e, r, n) {
  if (n) {
    let s = await n.write(he(e), r);
    if (!s.ok) throw Error("discovery-cache: write failed", {
      cause: s.error
    });
    return;
  }
  let i = L();
  await i.mkdir(O(), Ve), await i.atomicWrite(e, r, wt);
}
async function Ht(e) {
  if (!e) return L().list(O());
  let r = [],
    cursor;
  do {
    let i = await e.listEntries(Ot, {
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
async function V(e, r) {
  if (r) {
    let n = await r.delete(he(e));
    if (!n.ok) throw Error("discovery-cache: delete failed", {
      cause: n.error
    });
    return;
  }
  try {
    await L().delete(e);
  } catch (error) {
    if (!G(error)) throw error;
  }
}
async function yCn(e, r, n = Date.now()) {
  let i = We(r);
  if (i !== void 0 && !_t(i)) return {
    kind: "miss",
    reason: i === "transport" ? "transport" : "disabled"
  };
  if (i !== void 0) {
    B();
    let _ = Yt(e, r),
      A = jt(_),
      admissionPurgedKeySets = U0().admissionPurgedKeySets;
    if (!admissionPurgedKeySets.has(A)) admissionPurgedKeySets.add(A), Gt(e, r, _).then(et => {
      if (!et) admissionPurgedKeySets.delete(A);
    });
    return re(e, `discovery-cache: ${i} \u2014 purging this server's cache-key family, serving miss`), {
      kind: "miss",
      reason: "disabled"
    };
  }
  let s;
  try {
    s = await M(e, r);
  } catch (error) {
    return re(e, `discovery-cache: fingerprint failed: ${error}`), {
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
      P(c, e, void 0).catch(() => {});
    },
    l = () => (y(), m("mcp_discovery_cache", "corrupt_entry"), {
      kind: "miss",
      reason: "corrupt"
    }),
    h;
  try {
    h = await ce(c, b());
  } catch (error) {
    if (se(error)) return re(e, `discovery-cache: ${error.reason} entry, deleting`), l();
    return re(e, `discovery-cache: read failed: ${error}`), {
      kind: "miss",
      reason: "absent"
    };
  }
  if (h === void 0) return {
    kind: "miss",
    reason: "absent"
  };
  let S = await Ne(h, s, e, () => P(c, e, void 0));
  if (S.miss) {
    if (S.miss === "unsealed") if (S.cause === "v1") p("mcp_discovery_cache", "unsealed_v1");else m("mcp_discovery_cache", `unsealed_${S.cause}`);
    return {
      kind: "miss",
      reason: S.miss
    };
  }
  let w = ie().safeParse(pt(S.plaintext, !1));
  if (!w.success) return re(e, "discovery-cache: corrupt entry, deleting"), l();
  let entry = w.data;
  if (entry.cacheKey !== x(e, r)) return re(e, "discovery-cache: entry keyed for another server, deleting"), l();
  if (entry.consecutiveRefreshFailures >= Ke()) return y(), {
    kind: "miss",
    reason: "strike-threshold"
  };
  let R = ze();
  if (ge(entry) - n > R) return y(), {
    kind: "miss",
    reason: "expired"
  };
  let ageMs = Math.max(0, n - entry.savedAt);
  if (ageMs >= R) return y(), {
    kind: "miss",
    reason: "expired"
  };
  if (ageMs < Dt() && !(entry.capabilities.tools && entry.tools.length === 0)) return {
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
function q(e, r, n) {
  return U0().serializeWrite(e, n).catch(i => {
    re(r, `discovery-cache: write op failed: ${i}`);
  });
}
function Z(e) {
  return U0().deleteGenerationByCacheKey.get(e) ?? 0;
}
function ae(e) {
  U0().deleteGenerationByCacheKey.set(e, Z(e) + 1);
}
var qe = 8;
async function $t(e, r) {
  if (r.type !== "http" && r.type !== "sse") return [];
  let n = await Sge();
  if (n === wl) return wl;
  let i = md(e, r),
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
  Kt = /^\s*[A-Za-z][A-Za-z0-9!#$%&'*+.^_`|~-]*\s+(?=\S)/;
function Ze(e, r, n) {
  if (typeof r !== "string" || !le.test(e)) return;
  if (n(r.trim()), n(r.replace(Kt, "").trim()), /^cookie$/i.test(e)) for (let i of r.split(";")) {
    let s = i.indexOf("=");
    n((s === -1 ? i : i.slice(s + 1)).trim());
  }
}
function F_e(e, r) {
  let n = ah();
  if (n.recordingOff()) return;
  let i = new Map();
  for (let [s, c] of Object.entries(e ?? {})) i.set(s.toLowerCase(), c);
  for (let [s, c] of Object.entries(r)) {
    if (i.get(s.toLowerCase()) === c) continue;
    Ze(s, c, y => {
      if (y.length >= qe) n.record(y);
    });
  }
}
var Vt = 268435456;
function Fe(e) {
  let r = [e],
    n = Bi(e).slice(1, -1);
  if (n !== e) r.push(n);
  try {
    let i = encodeURIComponent(e);
    if (i !== e) r.push(i);
  } catch {}
  return r;
}
function zt(e, r, n = []) {
  let i = r,
    s = new Set(),
    c = l => {
      if (l !== void 0 && l.length >= qe) s.add(l);
    };
  for (let [l, h] of Object.entries(i.headers ?? {})) Ze(l, h, c);
  try {
    let l = typeof i.url === "string" ? new URL(i.url) : void 0;
    for (let [h, S] of l?.searchParams.entries() ?? []) if (le.test(h)) for (let w of Fe(S)) c(w);
    for (let h of l?.search.replace(/^\?/, "").split("&") ?? []) {
      let S = h.indexOf("=");
      if (S > 0 && le.test(h.slice(0, S))) c(h.slice(S + 1));
    }
    for (let h of l ? [l.password, l.username] : []) if (h) {
      c(h);
      try {
        c(decodeURIComponent(h));
      } catch {}
    }
  } catch {}
  for (let l of n) c(l);
  let y = ah().snapshot();
  if (!y.complete) return "presented-log-incomplete";
  for (let l of y.atoms) c(l);
  if (s.size * e.length > Vt) return "scan-budget";
  for (let l of s) for (let h of Fe(l)) if (e.includes(h)) return "material";
  return;
}
function ve(key_2, r) {
  return {
    key: key_2,
    cacheKey: r.cacheKey,
    aad: r.aad
  };
}
async function Ne(e, r, n, i) {
  let s = await J();
  if (s === void 0) return re(n, "Discovery cache: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process"), sao(), {
    miss: "key-unavailable"
  };
  let c = fe(ve(s, r), e);
  if (c.ok) return {
    plaintext: c.plaintext
  };
  re(n, `Discovery cache: entry did not open (${c.reason}) \u2014 discarded`);
  try {
    await i();
  } catch (error) {
    re(n, `discovery-cache: reap after failed open skipped ${error}`);
  }
  return {
    miss: "unsealed",
    cause: c.reason
  };
}
function I({
  verdict: verdict,
  code: code
}) {
  if (verdict === "written") g("mcp_discovery_cache");else if (verdict === "terminal") m("mcp_discovery_cache", code);else p("mcp_discovery_cache", code);
  return verdict;
}
async function Se(e) {
  let {
    path: path,
    serverName: serverName,
    config: config_2,
    cacheKey: cacheKey_2,
    entry: entry_2,
    context: context,
    label: label
  } = e;
  if (qAt() !== void 0) return re(serverName, `Discovery cache ${label} refused: the cache turned off since this round started`), {
    verdict: "superseded",
    code: "disabled"
  };
  if (Z(cacheKey_2) !== e.capturedDeleteGeneration) return re(serverName, `Discovery cache ${label} refused: entry deleted since this round started (tombstone)`), {
    verdict: "superseded",
    code: "tombstone"
  };
  if (!AP(context.identityEpoch)) return re(serverName, `Discovery cache ${label} refused: identity changed since this round was fetched (stale epoch)`), {
    verdict: "superseded",
    code: "stale_epoch"
  };
  let h = await J();
  if (h === void 0) return sao(), re(serverName, `Discovery cache ${label} refused: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process`), {
    verdict: "superseded",
    code: "key_unavailable"
  };
  let S;
  try {
    S = await $t(serverName, config_2);
  } catch {
    S = wl;
  }
  if (S === wl) return re(serverName, `Discovery cache ${label} refused: OAuth token store unreadable (cannot verify no secrets on disk)`), {
    verdict: "transient",
    code: "transient"
  };
  let w;
  try {
    w = await M(serverName, config_2);
  } catch {
    return {
      verdict: "transient",
      code: "transient"
    };
  }
  if (w === void 0 || w.path !== path || w.legToken !== context.grantLeg) return re(serverName, `Discovery cache ${label} refused: grant or era changed since this round was fetched (stale leg)`), {
    verdict: "superseded",
    code: "stale_grant"
  };
  let E = ie().safeParse(entry_2);
  if (!E.success) return re(serverName, `Discovery cache ${label} refused: entry failed schema validation`), {
    verdict: "terminal",
    code: "schema"
  };
  let R = Bi(E.data);
  if (Buffer.byteLength(R, "utf8") > F) return re(serverName, `Discovery cache ${label} refused: serialized entry exceeds DISCOVERY_ENTRY_MAX_BYTES`), {
    verdict: "terminal",
    code: "oversize"
  };
  if (qAt() !== void 0) return re(serverName, `Discovery cache ${label} refused: the cache turned off since this round started`), {
    verdict: "superseded",
    code: "disabled"
  };
  let D = zt(R, config_2, S);
  if (D !== void 0) {
    if (ah().takeOverflowNotice()) re(serverName, "Discovery cache: presented-credential log is full \u2014 cache writes are refused for the rest of this process");
    if (D === "scan-budget") return re(serverName, `Discovery cache ${label} refused: secret-material scan exceeds its work budget (materials \xD7 entry size) \u2014 not scanned, not written`), {
      verdict: "terminal",
      code: "scan_budget"
    };
    if (D === "presented-log-incomplete") return re(serverName, `Discovery cache ${label} refused: presented-credential log incomplete (cannot verify no secrets on disk)`), {
      verdict: "terminal",
      code: "presented_log_incomplete"
    };
    return re(serverName, `Discovery cache ${label} refused: entry would carry presented secret material`), {
      verdict: "terminal",
      code: "secret_material"
    };
  }
  let _ = Ae(ve(h, w), R);
  if (Buffer.byteLength(_, "utf8") > F) return re(serverName, `Discovery cache ${label} refused: sealed entry exceeds DISCOVERY_ENTRY_MAX_BYTES`), {
    verdict: "terminal",
    code: "oversize"
  };
  try {
    await Bt(path, _, b());
  } catch (error) {
    return re(serverName, `Discovery cache ${label} refused: disk write failed (${d(error)})`), {
      verdict: "transient",
      code: "transient"
    };
  }
  return {
    verdict: "written",
    code: "written"
  };
}
async function P(e, r, n) {
  if (n !== void 0) ae(n);
  await q(e, r, () => V(e, b()));
}
async function Ut(e, r) {
  await Promise.race([e.then(() => {}, () => {}), Y(r, void 0, {
    unref: !0
  })]);
}
async function E8(e, r = 1500) {
  B(), await Ut(e, r);
}
function B() {
  if (!YI()) return;
  let e = U0();
  if (e.flushCleanup) return;
  e.flushCleanup = bt(() => e.drain(Aps));
}
async function _Cn(serverName_2, config_3, n, context_2) {
  let savedAt = context_2.now ?? Date.now(),
    cacheKey_3 = x(serverName_2, config_3),
    capturedDeleteGeneration = Z(cacheKey_3);
  if (!AP(context_2.identityEpoch)) return "superseded";
  if (context_2.grantLeg === void 0) return "superseded";
  if (!uNe(config_3)) return "superseded";
  B();
  let l;
  try {
    l = await M(serverName_2, config_3);
  } catch {
    return I({
      verdict: "transient",
      code: "transient"
    });
  }
  if (l === void 0) return "superseded";
  if (l.legToken !== context_2.grantLeg) return re(serverName_2, "Discovery cache write refused: grant changed since this round was fetched (stale grant)"), I({
    verdict: "superseded",
    code: "stale_grant"
  });
  let h = l.path,
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
    E;
  return await q(path_2, serverName_2, async () => {
    if (!(await At(serverName_2, config_3))) return;
    let R;
    try {
      R = await ce(path_2, b());
    } catch (error) {
      if (!se(error)) {
        re(serverName_2, `Discovery cache write deferred: existing entry unreadable (${d(error)})`), E = {
          verdict: "transient",
          code: "transient"
        };
        return;
      }
      R = void 0;
    }
    if (R !== void 0) {
      let D = await J(),
        _ = D && l ? fe(ve(D, l), R) : void 0,
        A = _?.ok ? ie().safeParse(pt(_.plaintext, !1)) : void 0;
      if (A?.success && ge(A.data) > savedAt) {
        E = {
          verdict: "superseded",
          code: "fresher_on_disk"
        };
        return;
      }
    }
    E = await Se({
      path: path_2,
      serverName: serverName_2,
      config: config_3,
      cacheKey: cacheKey_3,
      entry: entry_3,
      context: context_2,
      capturedDeleteGeneration: capturedDeleteGeneration,
      label: "write"
    });
  }), E ? I(E) : "superseded";
}
async function Je(e, r) {
  let n = e.path,
    i;
  try {
    i = await ce(n, b());
  } catch (error) {
    if (se(error)) {
      await V(n, b());
      return;
    }
    throw error;
  }
  if (i === void 0) return;
  let s = await Ne(i, e, r, () => V(n, b()));
  if (s.miss) return;
  let c = ie().safeParse(pt(s.plaintext, !1));
  if (!c.success) {
    await V(n, b());
    return;
  }
  return c.data;
}
async function bCn(serverName_3, config_4, tools, context_3) {
  if (!AP(context_3.identityEpoch)) return;
  if (context_3.grantLeg === void 0) return;
  let cacheKey_4 = x(serverName_3, config_4),
    capturedDeleteGeneration_2 = Z(cacheKey_4);
  if (B(), !uNe(config_4)) return;
  let y;
  try {
    y = await M(serverName_3, config_4);
  } catch {
    I({
      verdict: "transient",
      code: "transient"
    });
    return;
  }
  if (y === void 0) return;
  if (y.legToken !== context_3.grantLeg) {
    re(serverName_3, "Discovery cache tools merge refused: grant changed since this refresh was fetched (stale grant)"), I({
      verdict: "superseded",
      code: "stale_grant"
    });
    return;
  }
  let path_3 = y.path;
  await q(path_3, serverName_3, async () => {
    let h = await Je(y, serverName_3);
    if (!h) return;
    if (ge(h) > context_3.fetchedAt) {
      I({
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
    I(await Se({
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
async function WKt(serverName_4, config_5, context_4) {
  if (!AP(context_4.identityEpoch)) return;
  if (context_4.grantLeg === void 0) return;
  let cacheKey_5 = x(serverName_4, config_5),
    capturedDeleteGeneration_3 = Z(cacheKey_5);
  if (B(), !uNe(config_5)) return;
  let c;
  try {
    c = await M(serverName_4, config_5);
  } catch {
    return;
  }
  if (c === void 0) return;
  if (c.legToken !== context_4.grantLeg) {
    re(serverName_4, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
    return;
  }
  let path_4 = c.path;
  await q(path_4, serverName_4, async () => {
    let l = await Je(c, serverName_4);
    if (!l) return;
    if (!AP(context_4.identityEpoch)) {
      re(serverName_4, "Discovery cache refresh-failure strike refused: identity changed since this refresh was fetched (stale epoch)");
      return;
    }
    let h;
    try {
      h = await M(serverName_4, config_5);
    } catch {
      return;
    }
    if (h === void 0 || h.path !== path_4 || h.legToken !== context_4.grantLeg) {
      re(serverName_4, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
      return;
    }
    let entry_5 = {
      ...l,
      consecutiveRefreshFailures: l.consecutiveRefreshFailures + 1
    };
    if (entry_5.consecutiveRefreshFailures >= Ke()) {
      ae(cacheKey_5), await V(path_4, b());
      return;
    }
    await Se({
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
function SCn(e, r) {
  (async () => {
    let identityEpoch = Hr();
    await WKt(e, r, {
      identityEpoch: identityEpoch,
      grantLeg: await hz(e, r)
    });
  })().catch(n => t(`discovery-cache: strike after failed lazy dial of "${e}" did not land: ${d(n)}`));
}
async function Qe(e, r) {
  for (let s of r) ae(s);
  let n = new Set([...r].map(Q)),
    i = await Ht(b());
  for (let s of i) {
    if (!s.endsWith(".json")) continue;
    let c = W(O(), s);
    try {
      let y;
      try {
        y = await ce(c, b());
      } catch (error) {
        if (se(error)) {
          await P(c, e, void 0);
          continue;
        }
        throw error;
      }
      if (y === void 0) continue;
      let l = Ie(y);
      if (l === void 0) {
        await P(c, e, void 0);
        continue;
      }
      if (n.has(l)) await P(c, e, void 0);
    } catch (error) {
      re(e, `discovery-cache: purge scan skipped ${error}`);
    }
  }
}
async function He(e, r) {
  await Qe(e, new Set([x(e, r)]));
}
function Gt(e, r, n) {
  let i = O(),
    s = !1;
  return q(i, e, async () => {
    let c;
    try {
      c = (await M(e, r))?.fingerprint;
    } catch {
      c = void 0;
    }
    if (c === void 0) {
      await Qe(e, n), s = !0;
      return;
    }
    let y = [];
    for (let l of n) {
      let h = l;
      for (let S of Ymr) for (let w of [!1, !0]) y.push(P(W(i, ye(l, c, S, w)), e, h)), h = void 0;
    }
    await Promise.all(y), s = !0;
  }).then(() => s);
}
function Yt(e, r) {
  let n = Ue(r),
    i = oe.map(({
      prop: prop_3,
      normalize: normalize_2,
      valueDomain: valueDomain
    }) => {
      let S = new Set(valueDomain.map(item => normalize_2(item))),
        w = n[prop_3];
      if (w !== void 0) S.add(w);
      return {
        prop: prop_3,
        states: [...S]
      };
    }),
    s = new Set(),
    c = (y, l) => {
      if (y === i.length) {
        s.add(Jn(e, l));
        return;
      }
      let {
        prop: prop_4,
        states: states
      } = i[y];
      for (let w of states) {
        let E = {
          ...l
        };
        if (w === void 0) delete E[prop_4];else E[prop_4] = w;
        c(y + 1, E);
      }
    };
  return c(0, {
    ...n
  }), s;
}
function jt(e) {
  return [...e].sort().join(`
`);
}
async function NEt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return;
  if (!YI()) return;
  B(), ae(x(e, r));
  try {
    let n = await M(e, r);
    if (n === void 0) {
      await He(e, r);
      return;
    }
    let i = x(e, r),
      s = O(),
      c = new Set(Ymr.flatMap(item => [!1, !0].map(h => W(s, ye(i, n.fingerprint, item, h))))),
      y = [P(n.path, e, i)];
    for (let l of c) if (l !== n.path) y.push(P(l, e, void 0));
    await Promise.all(y), await He(e, r);
  } catch (error) {
    re(e, `discovery-cache: delete failed: ${error}`);
  }
}
async function wCn(e, r) {
  let n;
  try {
    n = await It(e, r);
  } catch {
    return async () => {};
  }
  if (n === void 0) return async () => {};
  try {
    return await L().mkdir(O(), Ve), await dl(n, {
      realpath: !1,
      retries: 0,
      stale: 60000,
      onCompromised: i => re(e, `discovery-cache: refresh lock compromised, skipping refresh: ${i}`)
    });
  } catch (error) {
    let s = error instanceof Error ? error.message : String(error);
    if (error?.code === "ELOCKED" || s.includes("already being held")) {
      re(e, "discovery-cache: refresh lock held elsewhere, skipping");
      return;
    }
    return re(e, `discovery-cache: lock error, proceeding: ${s}`), async () => {};
  }
}
export { cCn, uCn, N_e, I9r, Hr, UKt, Kes, AP, BKt, qir, Kir, jKt, ah, LEt, pCn, fCn, mCn, bE, qrt, gCn, hCn, uNe, Wqe, DL, hz, yCn, F_e, E8, _Cn, bCn, WKt, SCn, NEt, wCn };