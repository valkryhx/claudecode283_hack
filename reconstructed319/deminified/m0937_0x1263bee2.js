// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { m5 } from "B:/~BUN/root/chunk-fjzk7kwf.js";
import { d, k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { bt, Yl, zet } from "B:/~BUN/root/chunk-ja520myc.js";
import { vt, t, oi } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { Zd } from "B:/~BUN/root/chunk-3vtkd50k.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ae } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { jn, bj } from "B:/~BUN/root/chunk-rr294jrm.js";
import { Jl } from "B:/~BUN/root/chunk-nzh2qzgc.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { jIr } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Qd } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { Bs, Kn } from "B:/~BUN/root/chunk-gvasf6q6.js";
import { IUt, $u, san, J3, WFe } from "B:/~BUN/root/chunk-grwykqvw.js";
import { wAe, mH, n5, na } from "B:/~BUN/root/chunk-5az22yft.js";
import { KD, ha, RU, ej } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { k3 } from "B:/~BUN/root/chunk-m749kjym.js";
import { Hyi, Vd, Y0, h3t, xZo, PZo, dQr, _$, GTn } from "B:/~BUN/root/chunk-27h4st9h.js";
import { T_r as error_2 } from "B:/~BUN/root/chunk-1tbewxs3.js";
import { o_e, Hoe, kL } from "B:/~BUN/root/chunk-cj2cn5y2.js";
import { Ng } from "B:/~BUN/root/chunk-j6qn83yk.js";
import { mr } from "B:/~BUN/root/chunk-s20ae4sg.js";
import { o, E, C, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { createHash as Te } from "crypto";
import { basename as st, join as Y } from "path";
function ve(e) {
  if (e.kind !== "resolved" || !Vd()) return;
  let r = _$(),
    lastResolvedAccountToken = r.lastResolvedAccountToken;
  if (r.lastResolvedAccountToken = e.token, lastResolvedAccountToken === void 0 || lastResolvedAccountToken === e.token) return;
  bt().identityEpoch += 1, Ukn(), Ze();
}
function Ze() {
  let e = bt();
  if (!e.identityTrippedHandler) {
    e.identityTripUnowned = !0;
    return;
  }
  queueMicrotask(() => {
    let identityTrippedHandler = bt().identityTrippedHandler;
    if (!identityTrippedHandler) {
      bt().identityTripUnowned = !0;
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
function Xor(e) {
  let r = bt();
  return r.identityTrippedHandler = e, () => {
    if (r.identityTrippedHandler === e) r.identityTrippedHandler = null;
  };
}
function Jor() {
  let e = bt(),
    identityTripUnowned = e.identityTripUnowned;
  return e.identityTripUnowned = !1, identityTripUnowned;
}
function se() {
  if (!Vd()) return;
  ve(PZo());
}
function SIe() {
  let e = PZo();
  return ve(e), e;
}
function V8o() {
  let e = SIe();
  return e.kind === "unwired" || e.kind === "incomplete" ? void 0 : e.token;
}
function zr() {
  return se(), bt().identityEpoch;
}
function $kn() {
  let e = bt();
  if (!Vd()) return e.identityEpoch;
  return e.identityEpoch += 1, e.identityEpoch;
}
var Je = "baseline:rearmed";
function Vui() {
  if (!Vd()) return;
  $kn(), _$().lastResolvedAccountToken = Je;
}
function fI(e) {
  return se(), e === bt().identityEpoch;
}
function Ukn() {
  let e = bt();
  if (e.identityChangedThisProcess) return;
  e.identityChangedThisProcess = !0, c("mcp_discovery_cache", "identity_changed");
}
function me() {
  return se(), bt().identityChangedThisProcess;
}
import { createCipheriv as Qe, createDecipheriv as Ne, createHash as tt, randomBytes as we } from "crypto";
var Ce = 32,
  X = 12,
  authTagLength = 16,
  z = "v2:",
  Se = Buffer.from("mcp-dc", "utf8"),
  rt = /^[A-Za-z0-9+/]{43}=$/;
function De(e) {
  if (typeof e !== "string" || !rt.test(e)) return;
  let r = Buffer.from(e, "base64");
  return r.length === Ce ? r : void 0;
}
async function q() {
  let e = await KD();
  if (e === Bs) return;
  let r = Ee(e?.mcpDiscoveryCacheKey);
  if (r) return r;
  let mcpDiscoveryCacheKey = we(Ce).toString("base64"),
    s = !1;
  try {
    s = (await Kn().mutate(y => De(y.mcpDiscoveryCacheKey) ? y : {
      ...y,
      mcpDiscoveryCacheKey: mcpDiscoveryCacheKey
    })).success;
  } catch {
    s = !1;
  }
  if (!s) return;
  let a = await KD();
  if (a === Bs) return;
  return Ee(a?.mcpDiscoveryCacheKey);
}
function Ee(e) {
  return De(e);
}
function ke(e, r, n) {
  if (!Number.isInteger(e) || e < 0 || e > 255) throw Error("discovery-cache seal: schema version must fit one byte");
  let s = [r, n].map(item => Buffer.from(item, "utf8")),
    a = Buffer.allocUnsafe(Se.length + 1 + s.reduce((acc, item) => acc + 4 + item.length, 0)),
    f = Se.copy(a, 0);
  f = a.writeUInt8(e, f);
  for (let y of s) f = a.writeUInt32BE(y.length, f), f += y.copy(a, f);
  return a;
}
function _e(e, r) {
  let n = we(X),
    s = Qe("aes-256-gcm", e.key, n, {
      authTagLength: authTagLength
    });
  s.setAAD(e.aad);
  let a = Buffer.concat([s.update(r, "utf8"), s.final()]),
    f = s.getAuthTag();
  return z + Z(e.cacheKey) + ":" + Buffer.concat([n, a, f]).toString("base64url");
}
function Z(e) {
  return tt("sha256").update(e, "utf8").digest().subarray(0, Re).toString("base64url");
}
var Re = 16,
  be = Math.ceil(Re * 4 / 3),
  regExp = new RegExp(`^[A-Za-z0-9_-]{${be}}$`),
  ot = /^[A-Za-z0-9_-]*$/;
function Me(e) {
  return Ae(e)?.digest;
}
function Ae(e) {
  if (!e.startsWith(z)) return;
  let r = z.length + be;
  if (e.length <= r || e[r] !== ":") return;
  let digest = e.slice(z.length, r),
    body = e.slice(r + 1);
  if (!regExp.test(digest) || !ot.test(body)) return;
  return {
    digest: digest,
    body: body
  };
}
function ce(e, r) {
  if (!r.startsWith(z)) return {
    ok: !1,
    reason: "v1"
  };
  let n = Ae(r);
  if (!n) return {
    ok: !1,
    reason: "short"
  };
  if (n.digest !== Z(e.cacheKey)) return {
    ok: !1,
    reason: "header"
  };
  let s = Buffer.from(n.body, "base64url");
  if (s.length < X + authTagLength) return {
    ok: !1,
    reason: "short"
  };
  let a = s.subarray(0, X),
    f = s.subarray(s.length - authTagLength),
    y = s.subarray(X, s.length - authTagLength);
  try {
    let l = Ne("aes-256-gcm", e.key, a, {
      authTagLength: authTagLength
    });
    return l.setAuthTag(f), l.setAAD(e.aad), {
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
function Qor(e) {
  let r = _$();
  r.accountResolver = e, r.lastResolvedAccountToken = void 0;
}
function Zor(e) {
  _$().eraResolver = e;
}
function ct() {
  return _$().eraResolver();
}
function esr() {
  return _$().accountResolver !== void 0;
}
function KC(e) {
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
function GRt(e, r) {
  return !fI(r) && KC(e);
}
function Bkn(name, config) {
  return {
    name: name,
    type: "failed",
    config: config,
    error: error_2,
    errorCode: "IDENTITY_CHANGED"
  };
}
function tsr(e) {
  return e.some(item => KC(item.config));
}
function at() {
  return SIe().token;
}
var v_2 = 1,
  dt = 900,
  ut = 14400,
  ft = 604800,
  lt = 1;
function Ie() {
  let MCP_DISCOVERY_CACHE_STRIKES = i.MCP_DISCOVERY_CACHE_STRIKES;
  return MCP_DISCOVERY_CACHE_STRIKES && MCP_DISCOVERY_CACHE_STRIKES > 0 ? MCP_DISCOVERY_CACHE_STRIKES : lt;
}
var pt = 384,
  Oe = 448,
  ee = p(() => {
    let e = import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule().discoveryWireSchemas();
    return u({
      v: T(v_2),
      serverName: o(),
      cacheKey: o(),
      savedAt: E(),
      toolsSavedAt: E().optional(),
      consecutiveRefreshFailures: E().int().nonnegative(),
      serverInfo: e.implementation.optional(),
      negotiatedEra: B(dQr).optional(),
      capabilities: e.serverCapabilities,
      tools: C(e.tool),
      commands: C(e.prompt),
      resources: C(e.resource),
      templates: C(e.resourceTemplate).optional()
    });
  });
function yt() {
  let MCP_DISCOVERY_CACHE_TTL_S = i.MCP_DISCOVERY_CACHE_TTL_S;
  return Math.min((MCP_DISCOVERY_CACHE_TTL_S && MCP_DISCOVERY_CACHE_TTL_S > 0 ? MCP_DISCOVERY_CACHE_TTL_S : dt) * 1000, Le());
}
function Le() {
  let MCP_DISCOVERY_CACHE_MAX_STALE_S = i.MCP_DISCOVERY_CACHE_MAX_STALE_S;
  return Math.min(MCP_DISCOVERY_CACHE_MAX_STALE_S && MCP_DISCOVERY_CACHE_MAX_STALE_S > 0 ? MCP_DISCOVERY_CACHE_MAX_STALE_S : ut, ft) * 1000;
}
function wIe(e) {
  return $e(e) === void 0;
}
function ht(e) {
  return te.some(item => item.reason === e);
}
var te = [{
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
function Fe(e) {
  let r = {
    ...e
  };
  for (let {
    prop: prop,
    normalize: normalize
  } of te) {
    if (!(prop in r)) continue;
    let a = normalize(r[prop]);
    if (a === void 0) delete r[prop];else r[prop] = a;
  }
  return r;
}
function gt(e) {
  let r = e;
  if (typeof r.url === "string" && m5(r.url)) return !0;
  if (r.headers && typeof r.headers === "object") {
    for (let n of Object.values(r.headers)) if (typeof n === "string" && m5(n)) return !0;
  }
  return !1;
}
var mt = ["MCP_DISCOVERY_CACHE_TTL_S", "MCP_DISCOVERY_CACHE_MAX_STALE_S", "MCP_DISCOVERY_CACHE_STRIKES"],
  St = [wAe, mH, na];
function Be(e) {
  let r = process.env[e];
  return r !== void 0 && k3(e, r);
}
function He() {
  return tn() && i.MCP_DISCOVERY_CACHE === !0 && !Be("MCP_DISCOVERY_CACHE");
}
function Ke(e) {
  if (!He() || mt.some(Be) || e.type !== "http" || e.scope !== "dynamic" || e.agentSource !== void 0 || Qd(e)) return !1;
  let r = J3(e.url);
  if (r === null) return !1;
  let n = jn(r.sessionSegment);
  if (!bj(r.sessionSegment) || !Jl.ownCcrSessionIds.some(item => jn(item) === n)) return !1;
  let s = kL(e.headers, "x-mcp-server-id"),
    a = s[0];
  if (s.length !== 1 || a === void 0 || !san.test(a) || r.toolboxMcpServerId !== a || r.mcpServerId === a) return !1;
  let f = kL(e.headers, o_e);
  if (f.length !== 1 || f[0] !== "directory" && f[0] !== "custom") return !1;
  if (kL(e.headers, Hoe).length > 0 || !r.upstreamUrl || /^ccr-owner-resolved:/i.test(r.upstreamUrl)) return !1;
  let y = [r.mcpServerId, a],
    l = [`cse_${n}`, `session_${n}`];
  return !(WFe(e.url) || y.some(item => IUt.includes(item)) || [...jIr(), ...St].some(item => l.some(v => y.includes(n5(v, item)))));
}
function Yat(e) {
  return wIe(e) && !Ke(e);
}
function $e(e) {
  let r = h3t();
  if (r !== void 0) return r;
  if (me()) return "identity-changed";
  if (e.type !== "http" && e.type !== "sse") return "transport";
  if (Yl(e) || zet(e)) return "cli-owned";
  if (gt(e)) return "env-placeholder";
  if (ej(e.url) && !RU(e)) return "ambient-credential";
  if ($u(e.url)) {
    if (!Ke(e)) return "ambient-credential";
  } else if (He()) return "ambient-credential";
  let n = e;
  for (let {
    prop: prop_2,
    reason: reason,
    excludes: excludes
  } of te) if (excludes(n[prop_2])) return reason;
  return;
}
function O() {
  return Y(Ue(), "mcp-discovery-cache");
}
async function Et(e, r) {
  if (!wIe(r)) return !1;
  return (await ze(e, r)).kind !== "degenerate";
}
async function ze(e, r) {
  if (r.type !== "http" && r.type !== "sse") return {
    kind: "none"
  };
  let n = await KD();
  if (n === Bs) return {
    kind: "degenerate"
  };
  let s = n?.mcpOAuth?.[ha(e, r)];
  if (!s) return {
    kind: "none"
  };
  let refreshToken = s.refreshToken;
  if (!refreshToken) return {
    kind: "degenerate"
  };
  return {
    kind: "resolved",
    hash: nt(refreshToken).slice(0, 16)
  };
}
async function wt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return "grant:none";
  let n = await ze(e, r);
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
  let n = SIe();
  if (n.kind === "unwired" || n.kind === "incomplete") return;
  let grantToken = await wt(e, r);
  if (grantToken === void 0) return;
  let a = [n.token];
  if (r.type === "http" || r.type === "sse") a.push(grantToken);
  return {
    fingerprint: Te("sha256").update(a.join("\x00")).digest("hex"),
    grantToken: grantToken
  };
}
function fe(e, r, n, s) {
  let a = [e, r, `era:${n}`, {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION ?? "unknown", ...(s ? ["offer:io.modelcontextprotocol/ui"] : [])].join("\x00");
  return `${Te("sha256").update(a).digest("hex").slice(0, 32)}.json`;
}
var Dt = /^[0-9a-f]{16}\0/;
function NB(e) {
  let r = `${e}-`,
    filePathMemo = _$().filePathMemo;
  for (let s of filePathMemo.keys()) {
    if (!s.startsWith(r)) continue;
    if (Dt.test(s.slice(r.length))) filePathMemo.delete(s);
  }
}
function x(e, r) {
  return mr(e, Fe(r));
}
async function kt(e, r) {
  return (await M(e, r))?.path;
}
async function XY(e, r) {
  if (!Vd()) return;
  try {
    return (await M(e, r))?.legToken;
  } catch {
    return;
  }
}
async function M(e, r) {
  let cacheKey = x(e, r),
    s = ct(),
    a = GTn(),
    f = at(),
    y = `${cacheKey}\x00${f}\x00era:${s}\x00ui:${a}`,
    filePathMemo_2 = _$().filePathMemo,
    h = filePathMemo_2.get(y);
  if (h) return h;
  let v = (async () => {
    let S = await Ct(e, r);
    if (S === void 0) return;
    return {
      path: Y(O(), fe(cacheKey, S.fingerprint, s, a)),
      grantToken: S.grantToken,
      fingerprint: S.fingerprint,
      cacheKey: cacheKey,
      aad: ke(v_2, cacheKey, S.fingerprint),
      legToken: `${S.grantToken}\x00era:${s}\x00${f}`
    };
  })();
  filePathMemo_2.set(y, v);
  let w = () => {
    if (filePathMemo_2.get(y) === v) filePathMemo_2.delete(y);
  };
  return v.then(S => {
    if (S === void 0) w();
  }, w), v;
}
function L() {
  return _$().storage;
}
function b() {
  return _$().storageV5;
}
function le(e) {
  return Ve.userConfigDir("mcp-discovery-cache", [st(e)]);
}
var _t = {
    namespace: "userConfigDir",
    dir: "mcp-discovery-cache"
  },
  F = 8388608;
function pe(e) {
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
function re(e) {
  return e instanceof RefusedDiscoveryEntryError;
}
async function ne(e, r) {
  let readGateForTest = _$().readGateForTest;
  if (readGateForTest) await readGateForTest;
  if (r) return Rt(r, e);
  try {
    if (Go === 0) {
      let a = await L().lstat(e);
      if (a === void 0) return;
      if (a.isSymbolicLink) throw new SymlinkedDiscoveryEntryError(e);
      if (!a.isFile) throw new NonRegularDiscoveryEntryError(e);
    }
    let s;
    try {
      s = await L().readTail(e, F + 1, {
        noFollow: !0
      });
    } catch (error) {
      let f = k(error);
      if (f === "ELOOP") throw new SymlinkedDiscoveryEntryError(e);
      if (f === "ENXIO") throw new NonRegularDiscoveryEntryError(e);
      throw error;
    }
    if (s.length > F) throw new OversizeDiscoveryEntryError(e);
    return s.toString("utf8");
  } catch (error) {
    if (K(error)) return;
    throw error;
  }
}
async function Rt(e, r) {
  let key = le(r),
    s = await e.read([{
      key: key,
      offset: 0,
      length: F + 1
    }], {
      symlinks: "refuse"
    });
  if (!s.ok) {
    let f = "cause" in s.error ? k(s.error.cause) : void 0;
    if (f === "ELOOP") throw new SymlinkedDiscoveryEntryError(r);
    if (f === "ENXIO") throw new NonRegularDiscoveryEntryError(r);
    throw Error("discovery-cache: read failed", {
      cause: s.error
    });
  }
  let a = s.value.items[0];
  if (!a.found) return;
  if (a.totalBytes > F) throw new OversizeDiscoveryEntryError(r);
  return Buffer.from(a.value).toString("utf8");
}
async function Mt(e, r, n) {
  if (n) {
    let a = await n.write(le(e), r);
    if (!a.ok) throw Error("discovery-cache: write failed", {
      cause: a.error
    });
    return;
  }
  let s = L();
  await s.mkdir(O(), Oe), await s.atomicWrite(e, r, pt);
}
async function At(e) {
  if (!e) return L().list(O());
  let r = [],
    cursor;
  do {
    let s = await e.listEntries(_t, {
      skipKeyStats: !0,
      skipScopeStats: !0,
      ...(cursor !== void 0 && {
        cursor: cursor
      })
    });
    if (!s.ok) throw Error("discovery-cache: list failed", {
      cause: s.error
    });
    for (let a of s.value.items) if (a.kind === "key" && a.key.namespace === "userConfigDir") {
      let f = a.key.relPath[0];
      if (f !== void 0 && a.key.relPath.length === 1) r.push(f);
    }
    cursor = s.value.cursor;
  } while (cursor);
  return r;
}
async function U(e, r) {
  if (r) {
    let n = await r.delete(le(e));
    if (!n.ok) throw Error("discovery-cache: delete failed", {
      cause: n.error
    });
    return;
  }
  try {
    await L().delete(e);
  } catch (error) {
    if (!K(error)) throw error;
  }
}
async function nsr(e, r, n = Date.now()) {
  let s = $e(r);
  if (s !== void 0 && !ht(s)) return {
    kind: "miss",
    reason: s === "transport" ? "transport" : "disabled"
  };
  if (s !== void 0) {
    H();
    let _ = Ft(e, r),
      A = Bt(_),
      admissionPurgedKeySets = _$().admissionPurgedKeySets;
    if (!admissionPurgedKeySets.has(A)) admissionPurgedKeySets.add(A), Lt(e, r, _).then(qe => {
      if (!qe) admissionPurgedKeySets.delete(A);
    });
    return ae(e, `discovery-cache: ${s} \u2014 purging this server's cache-key family, serving miss`), {
      kind: "miss",
      reason: "disabled"
    };
  }
  let a;
  try {
    a = await M(e, r);
  } catch (error) {
    return ae(e, `discovery-cache: fingerprint failed: ${error}`), {
      kind: "miss",
      reason: "no-fingerprint"
    };
  }
  if (a === void 0) return {
    kind: "miss",
    reason: "no-fingerprint"
  };
  let f = a.path,
    y = () => {
      P(f, e, void 0).catch(() => {});
    },
    l = () => (y(), m("mcp_discovery_cache", "corrupt_entry"), {
      kind: "miss",
      reason: "corrupt"
    }),
    h;
  try {
    h = await ne(f, b());
  } catch (error) {
    if (re(error)) return ae(e, `discovery-cache: ${error.reason} entry, deleting`), l();
    return ae(e, `discovery-cache: read failed: ${error}`), {
      kind: "miss",
      reason: "absent"
    };
  }
  if (h === void 0) return {
    kind: "miss",
    reason: "absent"
  };
  let v = await je(h, a, e, () => P(f, e, void 0));
  if (v.miss) {
    if (v.miss === "unsealed") if (v.cause === "v1") c("mcp_discovery_cache", "unsealed_v1");else m("mcp_discovery_cache", `unsealed_${v.cause}`);
    return {
      kind: "miss",
      reason: v.miss
    };
  }
  let w = ee().safeParse(et(v.plaintext, !1));
  if (!w.success) return ae(e, "discovery-cache: corrupt entry, deleting"), l();
  let entry = w.data;
  if (entry.cacheKey !== x(e, r)) return ae(e, "discovery-cache: entry keyed for another server, deleting"), l();
  if (entry.consecutiveRefreshFailures >= Ie()) return y(), {
    kind: "miss",
    reason: "strike-threshold"
  };
  let R = Le();
  if (pe(entry) - n > R) return y(), {
    kind: "miss",
    reason: "expired"
  };
  let ageMs = Math.max(0, n - entry.savedAt);
  if (ageMs >= R) return y(), {
    kind: "miss",
    reason: "expired"
  };
  if (ageMs < yt() && !(entry.capabilities.tools && entry.tools.length === 0)) return {
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
function j(e, r, n) {
  return _$().serializeWrite(e, n).catch(s => {
    ae(r, `discovery-cache: write op failed: ${s}`);
  });
}
function W(e) {
  return _$().deleteGenerationByCacheKey.get(e) ?? 0;
}
function ie(e) {
  _$().deleteGenerationByCacheKey.set(e, W(e) + 1);
}
var Ye = 8;
async function Pt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return [];
  let n = await KD();
  if (n === Bs) return Bs;
  let s = ha(e, r),
    a = n?.mcpOAuth?.[s],
    f = [];
  if (typeof a?.accessToken === "string") f.push(a.accessToken);
  if (typeof a?.refreshToken === "string") f.push(a.refreshToken);
  if (typeof a?.clientSecret === "string") f.push(a.clientSecret);
  let y = n?.mcpOAuthClientConfig?.[s]?.clientSecret;
  if (typeof y === "string") f.push(y);
  return f;
}
var de = /auth|token|key|secret|cookie|session|sig|pass|cred|bearer/i,
  xt = /^\s*[A-Za-z][A-Za-z0-9!#$%&'*+.^_`|~-]*\s+(?=\S)/;
function Ge(e, r, n) {
  if (typeof r !== "string" || !de.test(e)) return;
  if (n(r.trim()), n(r.replace(xt, "").trim()), /^cookie$/i.test(e)) for (let s of r.split(";")) {
    let a = s.indexOf("=");
    n((a === -1 ? s : s.slice(a + 1)).trim());
  }
}
function kIe(e, r) {
  let n = Ng();
  if (n.recordingOff()) return;
  let s = new Map();
  for (let [a, f] of Object.entries(e ?? {})) s.set(a.toLowerCase(), f);
  for (let [a, f] of Object.entries(r)) {
    if (s.get(a.toLowerCase()) === f) continue;
    Ge(a, f, y => {
      if (y.length >= Ye) n.record(y);
    });
  }
}
var Tt = 268435456;
function Pe(e) {
  let r = [e],
    n = oi(e).slice(1, -1);
  if (n !== e) r.push(n);
  try {
    let s = encodeURIComponent(e);
    if (s !== e) r.push(s);
  } catch {}
  return r;
}
function It(e, r, n = []) {
  let s = r,
    a = new Set(),
    f = l => {
      if (l !== void 0 && l.length >= Ye) a.add(l);
    };
  for (let [l, h] of Object.entries(s.headers ?? {})) Ge(l, h, f);
  try {
    let l = typeof s.url === "string" ? new URL(s.url) : void 0;
    for (let [h, v] of l?.searchParams.entries() ?? []) if (de.test(h)) for (let w of Pe(v)) f(w);
    for (let h of l?.search.replace(/^\?/, "").split("&") ?? []) {
      let v = h.indexOf("=");
      if (v > 0 && de.test(h.slice(0, v))) f(h.slice(v + 1));
    }
    for (let h of l ? [l.password, l.username] : []) if (h) {
      f(h);
      try {
        f(decodeURIComponent(h));
      } catch {}
    }
  } catch {}
  for (let l of n) f(l);
  let y = Ng().snapshot();
  if (!y.complete) return "presented-log-incomplete";
  for (let l of y.atoms) f(l);
  if (a.size * e.length > Tt) return "scan-budget";
  for (let l of a) for (let h of Pe(l)) if (e.includes(h)) return "material";
  return;
}
function he(key_2, r) {
  return {
    key: key_2,
    cacheKey: r.cacheKey,
    aad: r.aad
  };
}
async function je(e, r, n, s) {
  let a = await q();
  if (a === void 0) return ae(n, "Discovery cache: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process"), xZo(), {
    miss: "key-unavailable"
  };
  let f = ce(he(a, r), e);
  if (f.ok) return {
    plaintext: f.plaintext
  };
  ae(n, `Discovery cache: entry did not open (${f.reason}) \u2014 discarded`);
  try {
    await s();
  } catch (error) {
    ae(n, `discovery-cache: reap after failed open skipped ${error}`);
  }
  return {
    miss: "unsealed",
    cause: f.reason
  };
}
function I({
  verdict: verdict,
  code: code
}) {
  if (verdict === "written") g("mcp_discovery_cache");else if (verdict === "terminal") m("mcp_discovery_cache", code);else c("mcp_discovery_cache", code);
  return verdict;
}
async function ge(e) {
  let {
    path: path,
    serverName: serverName,
    config: config_2,
    cacheKey: cacheKey_2,
    entry: entry_2,
    context: context,
    label: label
  } = e;
  if (h3t() !== void 0) return ae(serverName, `Discovery cache ${label} refused: the cache turned off since this round started`), {
    verdict: "superseded",
    code: "disabled"
  };
  if (W(cacheKey_2) !== e.capturedDeleteGeneration) return ae(serverName, `Discovery cache ${label} refused: entry deleted since this round started (tombstone)`), {
    verdict: "superseded",
    code: "tombstone"
  };
  if (!fI(context.identityEpoch)) return ae(serverName, `Discovery cache ${label} refused: identity changed since this round was fetched (stale epoch)`), {
    verdict: "superseded",
    code: "stale_epoch"
  };
  let h = await q();
  if (h === void 0) return xZo(), ae(serverName, `Discovery cache ${label} refused: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process`), {
    verdict: "superseded",
    code: "key_unavailable"
  };
  let v;
  try {
    v = await Pt(serverName, config_2);
  } catch {
    v = Bs;
  }
  if (v === Bs) return ae(serverName, `Discovery cache ${label} refused: OAuth token store unreadable (cannot verify no secrets on disk)`), {
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
  if (w === void 0 || w.path !== path || w.legToken !== context.grantLeg) return ae(serverName, `Discovery cache ${label} refused: grant or era changed since this round was fetched (stale leg)`), {
    verdict: "superseded",
    code: "stale_grant"
  };
  let S = ee().safeParse(entry_2);
  if (!S.success) return ae(serverName, `Discovery cache ${label} refused: entry failed schema validation`), {
    verdict: "terminal",
    code: "schema"
  };
  let R = oi(S.data);
  if (Buffer.byteLength(R, "utf8") > F) return ae(serverName, `Discovery cache ${label} refused: serialized entry exceeds DISCOVERY_ENTRY_MAX_BYTES`), {
    verdict: "terminal",
    code: "oversize"
  };
  if (h3t() !== void 0) return ae(serverName, `Discovery cache ${label} refused: the cache turned off since this round started`), {
    verdict: "superseded",
    code: "disabled"
  };
  let D = It(R, config_2, v);
  if (D !== void 0) {
    if (Ng().takeOverflowNotice()) ae(serverName, "Discovery cache: presented-credential log is full \u2014 cache writes are refused for the rest of this process");
    if (D === "scan-budget") return ae(serverName, `Discovery cache ${label} refused: secret-material scan exceeds its work budget (materials \xD7 entry size) \u2014 not scanned, not written`), {
      verdict: "terminal",
      code: "scan_budget"
    };
    if (D === "presented-log-incomplete") return ae(serverName, `Discovery cache ${label} refused: presented-credential log incomplete (cannot verify no secrets on disk)`), {
      verdict: "terminal",
      code: "presented_log_incomplete"
    };
    return ae(serverName, `Discovery cache ${label} refused: entry would carry presented secret material`), {
      verdict: "terminal",
      code: "secret_material"
    };
  }
  let _ = _e(he(h, w), R);
  if (Buffer.byteLength(_, "utf8") > F) return ae(serverName, `Discovery cache ${label} refused: sealed entry exceeds DISCOVERY_ENTRY_MAX_BYTES`), {
    verdict: "terminal",
    code: "oversize"
  };
  try {
    await Mt(path, _, b());
  } catch (error) {
    return ae(serverName, `Discovery cache ${label} refused: disk write failed (${d(error)})`), {
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
  if (n !== void 0) ie(n);
  await j(e, r, () => U(e, b()));
}
async function Ot(e, r) {
  await Promise.race([e.then(() => {}, () => {}), J(r, void 0, {
    unref: !0
  })]);
}
async function tre(e, r = 1500) {
  H(), await Ot(e, r);
}
function H() {
  if (!Y0()) return;
  let e = _$();
  if (e.flushCleanup) return;
  e.flushCleanup = vt(() => e.drain(Hyi));
}
async function rsr(serverName_2, config_3, n, context_2) {
  let savedAt = context_2.now ?? Date.now(),
    cacheKey_3 = x(serverName_2, config_3),
    capturedDeleteGeneration = W(cacheKey_3);
  if (!fI(context_2.identityEpoch)) return "superseded";
  if (context_2.grantLeg === void 0) return "superseded";
  if (!wIe(config_3)) return "superseded";
  H();
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
  if (l.legToken !== context_2.grantLeg) return ae(serverName_2, "Discovery cache write refused: grant changed since this round was fetched (stale grant)"), I({
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
    S;
  return await j(path_2, serverName_2, async () => {
    if (!(await Et(serverName_2, config_3))) return;
    let R;
    try {
      R = await ne(path_2, b());
    } catch (error) {
      if (!re(error)) {
        ae(serverName_2, `Discovery cache write deferred: existing entry unreadable (${d(error)})`), S = {
          verdict: "transient",
          code: "transient"
        };
        return;
      }
      R = void 0;
    }
    if (R !== void 0) {
      let D = await q(),
        _ = D && l ? ce(he(D, l), R) : void 0,
        A = _?.ok ? ee().safeParse(et(_.plaintext, !1)) : void 0;
      if (A?.success && pe(A.data) > savedAt) {
        S = {
          verdict: "superseded",
          code: "fresher_on_disk"
        };
        return;
      }
    }
    S = await ge({
      path: path_2,
      serverName: serverName_2,
      config: config_3,
      cacheKey: cacheKey_3,
      entry: entry_3,
      context: context_2,
      capturedDeleteGeneration: capturedDeleteGeneration,
      label: "write"
    });
  }), S ? I(S) : "superseded";
}
async function We(e, r) {
  let n = e.path,
    s;
  try {
    s = await ne(n, b());
  } catch (error) {
    if (re(error)) {
      await U(n, b());
      return;
    }
    throw error;
  }
  if (s === void 0) return;
  let a = await je(s, e, r, () => U(n, b()));
  if (a.miss) return;
  let f = ee().safeParse(et(a.plaintext, !1));
  if (!f.success) {
    await U(n, b());
    return;
  }
  return f.data;
}
async function osr(serverName_3, config_4, tools, context_3) {
  if (!fI(context_3.identityEpoch)) return;
  if (context_3.grantLeg === void 0) return;
  let cacheKey_4 = x(serverName_3, config_4),
    capturedDeleteGeneration_2 = W(cacheKey_4);
  if (H(), !wIe(config_4)) return;
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
    ae(serverName_3, "Discovery cache tools merge refused: grant changed since this refresh was fetched (stale grant)"), I({
      verdict: "superseded",
      code: "stale_grant"
    });
    return;
  }
  let path_3 = y.path;
  await j(path_3, serverName_3, async () => {
    let h = await We(y, serverName_3);
    if (!h) return;
    if (pe(h) > context_3.fetchedAt) {
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
    I(await ge({
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
async function jkn(serverName_4, config_5, context_4) {
  if (!fI(context_4.identityEpoch)) return;
  if (context_4.grantLeg === void 0) return;
  let cacheKey_5 = x(serverName_4, config_5),
    capturedDeleteGeneration_3 = W(cacheKey_5);
  if (H(), !wIe(config_5)) return;
  let f;
  try {
    f = await M(serverName_4, config_5);
  } catch {
    return;
  }
  if (f === void 0) return;
  if (f.legToken !== context_4.grantLeg) {
    ae(serverName_4, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
    return;
  }
  let path_4 = f.path;
  await j(path_4, serverName_4, async () => {
    let l = await We(f, serverName_4);
    if (!l) return;
    if (!fI(context_4.identityEpoch)) {
      ae(serverName_4, "Discovery cache refresh-failure strike refused: identity changed since this refresh was fetched (stale epoch)");
      return;
    }
    let h;
    try {
      h = await M(serverName_4, config_5);
    } catch {
      return;
    }
    if (h === void 0 || h.path !== path_4 || h.legToken !== context_4.grantLeg) {
      ae(serverName_4, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
      return;
    }
    let entry_5 = {
      ...l,
      consecutiveRefreshFailures: l.consecutiveRefreshFailures + 1
    };
    if (entry_5.consecutiveRefreshFailures >= Ie()) {
      ie(cacheKey_5), await U(path_4, b());
      return;
    }
    await ge({
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
function ssr(e, r) {
  (async () => {
    let identityEpoch = zr();
    await jkn(e, r, {
      identityEpoch: identityEpoch,
      grantLeg: await XY(e, r)
    });
  })().catch(n => t(`discovery-cache: strike after failed lazy dial of "${e}" did not land: ${d(n)}`));
}
async function Xe(e, r) {
  for (let a of r) ie(a);
  let n = new Set([...r].map(Z)),
    s = await At(b());
  for (let a of s) {
    if (!a.endsWith(".json")) continue;
    let f = Y(O(), a);
    try {
      let y;
      try {
        y = await ne(f, b());
      } catch (error) {
        if (re(error)) {
          await P(f, e, void 0);
          continue;
        }
        throw error;
      }
      if (y === void 0) continue;
      let l = Me(y);
      if (l === void 0) {
        await P(f, e, void 0);
        continue;
      }
      if (n.has(l)) await P(f, e, void 0);
    } catch (error) {
      ae(e, `discovery-cache: purge scan skipped ${error}`);
    }
  }
}
async function xe(e, r) {
  await Xe(e, new Set([x(e, r)]));
}
function Lt(e, r, n) {
  let s = O(),
    a = !1;
  return j(s, e, async () => {
    let f;
    try {
      f = (await M(e, r))?.fingerprint;
    } catch {
      f = void 0;
    }
    if (f === void 0) {
      await Xe(e, n), a = !0;
      return;
    }
    let y = [];
    for (let l of n) {
      let h = l;
      for (let v of dQr) for (let w of [!1, !0]) y.push(P(Y(s, fe(l, f, v, w)), e, h)), h = void 0;
    }
    await Promise.all(y), a = !0;
  }).then(() => a);
}
function Ft(e, r) {
  let n = Fe(r),
    s = te.map(({
      prop: prop_3,
      normalize: normalize_2,
      valueDomain: valueDomain
    }) => {
      let v = new Set(valueDomain.map(item => normalize_2(item))),
        w = n[prop_3];
      if (w !== void 0) v.add(w);
      return {
        prop: prop_3,
        states: [...v]
      };
    }),
    a = new Set(),
    f = (y, l) => {
      if (y === s.length) {
        a.add(mr(e, l));
        return;
      }
      let {
        prop: prop_4,
        states: states
      } = s[y];
      for (let w of states) {
        let S = {
          ...l
        };
        if (w === void 0) delete S[prop_4];else S[prop_4] = w;
        f(y + 1, S);
      }
    };
  return f(0, {
    ...n
  }), a;
}
function Bt(e) {
  return [...e].sort().join(`
`);
}
async function aYt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return;
  if (!Y0()) return;
  H(), ie(x(e, r));
  try {
    let n = await M(e, r);
    if (n === void 0) {
      await xe(e, r);
      return;
    }
    let s = x(e, r),
      a = O(),
      f = new Set(dQr.flatMap(item => [!1, !0].map(h => Y(a, fe(s, n.fingerprint, item, h))))),
      y = [P(n.path, e, s)];
    for (let l of f) if (l !== n.path) y.push(P(l, e, void 0));
    await Promise.all(y), await xe(e, r);
  } catch (error) {
    ae(e, `discovery-cache: delete failed: ${error}`);
  }
}
async function isr(e, r) {
  let n;
  try {
    n = await kt(e, r);
  } catch {
    return async () => {};
  }
  if (n === void 0) return async () => {};
  try {
    return await L().mkdir(O(), Oe), await Zd(n, {
      realpath: !1,
      retries: 0,
      stale: 60000,
      onCompromised: s => ae(e, `discovery-cache: refresh lock compromised, skipping refresh: ${s}`)
    });
  } catch (error) {
    let a = error instanceof Error ? error.message : String(error);
    if (error?.code === "ELOCKED" || a.includes("already being held")) {
      ae(e, "discovery-cache: refresh lock held elsewhere, skipping");
      return;
    }
    return ae(e, `discovery-cache: lock error, proceeding: ${a}`), async () => {};
  }
}
export { Xor, Jor, SIe, V8o, zr, $kn, Vui, fI, Ukn, Qor, Zor, esr, KC, GRt, Bkn, tsr, wIe, Yat, NB, XY, nsr, kIe, tre, rsr, osr, jkn, ssr, aYt, isr };