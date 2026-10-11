// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, v, B, Xs, BBe } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q, Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { gt, b, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { dp, an } from "B:/~BUN/root/chunk-zksmb712.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { jye } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Ie, Cy } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { mt } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { Bne, df, xy } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { POo, ed, P0, dc, gHt, gb, Sy, un, aC, uut, Na, kHt, kce, pt, THt as bearerKind, CHt, Im as readStoredAccount, dD, vy, DMo, LMo, x as featureValue } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { OI } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { BNo, jNo } from "B:/~BUN/root/chunk-4h4gje25.js";
import { qN } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { Wce } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { I6e, mGn, tFe, Ble, Ahe, GLt, hGn, Dcn, rFe, uDr, cIo, yGn, _Gn, dIo, SGn, wGn, vGn, VLt, Lcn, fDr, qct, mDr, kGn, xhe, gDr, Phe, TGn, v0, qLt, M6e, Ncn, CGn, Pw, c1, yDr, RGn, C_, CCe, KLt, AGn, MX, _Dr, xGn, bDr, PGn, Hcn, Fcn, SDr, $cn, IGn, sFe, vDr, kDr, OGn, Yct, Ucn, YLt, Xct, MGn, ADr, UE } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { HLt, Gct, rDr, Uz, Vct, Acn, xcn, Pcn, A6e } from "B:/~BUN/root/chunk-385v01s9.js";
import { aDr } from "B:/~BUN/root/chunk-6k625ztj.js";
import { FLt, iDr, kCe, $Lt, ULt } from "B:/~BUN/root/chunk-1724zw97.js";
import { WPo } from "B:/~BUN/root/chunk-2gwgbd5e.js";
import { nj } from "B:/~BUN/root/chunk-5xa13319.js";
import { $a } from "B:/~BUN/root/chunk-fwzy34jf.js";
import { U, L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { w2r, rt } from "B:/~BUN/root/chunk-mmkravm0.js";
import { statSync as Xe } from "fs";
import { unlink as Je, utimes as Ze, writeFile as et } from "fs/promises";
var Qe = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache"
};
function Be(e) {
  return `${e}${Wce}`;
}
async function Ce(e) {
  let r = await mt.get(e.endpoint, {
      headers: {
        "User-Agent": $a(),
        ...Qe,
        ...(e.ifNoneMatch !== void 0 && {
          "If-None-Match": `"${e.ifNoneMatch}"`
        }),
        ...e.authHeaders
      },
      timeout: e.timeoutMs,
      validateStatus: e.acceptAny2xx ? n => n >= 200 && n < 300 || n === 304 : n => n === 200 || n === 304,
      ...(e.socketPath !== void 0 && {
        socketPath: e.socketPath
      })
    }),
    s = r.headers ?? {},
    signature = FLt(s);
  if (r.status === 304) return {
    kind: "not_modified",
    signature: signature
  };
  return {
    kind: "ok",
    data: r.data,
    signature: signature,
    contentType: String(s["content-type"] ?? "").toLowerCase()
  };
}
var timeoutMs = 1e4,
  p6o = timeoutMs + 2000,
  Ne = 5,
  tt = new Set([...kHt].filter(item => item !== "lock_error")),
  it = 3600000,
  De = [15000, 15000, 30000, 60000, 180000, 600000],
  We = 0.2;
function Se() {
  return featureValue("tengu_shimmying_stardust", !1);
}
var $Po = 60000;
function st(e) {
  return e === "load" ? "other" : e;
}
function Ke(e) {
  return e === "accelerated_retry" || e === "api_success_trigger";
}
var ot = 30000,
  aGn = 5000,
  _2o = 86400000;
function Ve() {
  if (TGn()) return;
  let e = kDr();
  if (e !== null) return Math.max(0, Date.now() - e);
  try {
    return Math.max(0, Date.now() - Xe(Pw()).mtimeMs);
  } catch {
    return;
  }
}
var ke = Date.now();
function He(e) {
  let r = v0();
  if (!r) return e;
  mDr(e.compliance_taints);
  let compliance_taints = L([...r.compliance_taints, ...e.compliance_taints.filter(item => !BNo(item))]).slice(0, I6e);
  if (compliance_taints.length === r.compliance_taints.length) return r;
  return {
    ...r,
    compliance_taints: compliance_taints
  };
}
function Re() {
  return Be(c1() ? "http://localhost" : an().BASE_API_URL);
}
function me() {
  if (c1()) return "local machine (via claude ssh tunnel)";
  try {
    return new URL(an().BASE_API_URL).host;
  } catch {
    return "unknown host";
  }
}
function X(e) {
  return jye(Xct(e));
}
function Ehe() {
  return C_() && KLt() === null;
}
function nt() {
  if (c1()) return {
    authType: a.CLAUDE_CODE_OAUTH_TOKEN ? "oauth" : "api_key",
    apiKeyFromHelper: !1
  };
  let e = null,
    r = "none";
  try {
    let n = gb({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    e = n.key, r = n.source;
  } catch {}
  let apiKeyFromHelper = r === "apiKeyHelper",
    o = Boolean(e) || apiKeyFromHelper;
  if (!o && ed()) return {
    authType: "wif",
    apiKeyFromHelper: !1
  };
  if (pt() && un()?.accessToken) return {
    authType: "oauth",
    apiKeyFromHelper: !1
  };
  return o ? {
    authType: "api_key",
    apiKeyFromHelper: apiKeyFromHelper
  } : {
    authType: "oauth",
    apiKeyFromHelper: !1
  };
}
function at(e, r) {
  if (c1()) return "proxy";
  switch (e.authType) {
    case "api_key":
      return e.apiKeyFromHelper ? "helper_key" : "static_key";
    case "oauth":
      return r.sentStoredLogin === void 0 ? void 0 : r.sentStoredLogin ? "stored_login" : "injected_token";
    case "wif":
      return;
  }
}
function Ue() {
  if (c1()) return a.CLAUDE_CODE_OAUTH_TOKEN ? "CLAUDE_CODE_OAUTH_TOKEN" : "none";
  return dc().source;
}
function lt() {
  if (c1()) return {
    proxy_in_use: !1,
    proxy_is_loopback: !1
  };
  let e,
    r = !1;
  try {
    e = df(), r = e !== void 0 && xy(Re());
  } catch {
    return {
      proxy_in_use: !1,
      proxy_is_loopback: !1
    };
  }
  if (e === void 0 || r) return {
    proxy_in_use: !1,
    proxy_is_loopback: !1
  };
  let s = Bne(e);
  return {
    proxy_in_use: !0,
    proxy_is_loopback: s !== void 0 && nj(s.hostname)
  };
}
async function ct(e, r, s, o, n, h, g = Ne) {
  let u = null;
  for (let y = 1; y <= g + 1; y++) {
    if (u = await dt(e, r, s, h), u.attempts = y, u.success || u.skipRetry || y > g) return u;
    n(u);
    let P = qN(y);
    if (t(`Policy limits: Retry ${y}/${g} after ${P}ms`), await Q(P, o), o?.aborted) return u;
  }
  return u;
}
async function dt(etag, credentials, s, oauthRefreshLatch) {
  let tokenRefreshOutcome,
    h,
    sentStoredLogin = !1,
    u = 0,
    socketPath = c1(),
    principalKeyAtWire = null,
    askedKeyAtWire = null,
    principalMovedAtWire = !1;
  try {
    let k = {},
      M = async () => {
        await xGn(s, credentials);
        let A = vt(),
          D = await dD();
        if (D.error) return principalMovedAtWire = !0, principalKeyAtWire = null, askedKeyAtWire = null, D;
        _Dr();
        let K = MX(),
          N = K === null ? null : z(K);
        return principalMovedAtWire = A !== N, principalKeyAtWire = principalMovedAtWire ? null : N, askedKeyAtWire = principalKeyAtWire !== null && re(K) ? ge(K) : null, D;
      };
    if (!socketPath) {
      tokenRefreshOutcome = await kce({
        credentials: credentials
      });
      let A = await M();
      if (A.error) return {
        success: !1,
        error: "Authentication required for policy limits",
        errorCode: "auth_failed",
        authUnavailableReason: A.reasonCode,
        tokenRefreshOutcome: tokenRefreshOutcome,
        skipRetry: !0
      };
      k = A.headers;
      let D = un();
      sentStoredLogin = Boolean(D?.accessToken && D.refreshToken && k.Authorization === `Bearer ${D.accessToken}`);
    }
    let endpoint = Re(),
      W = async () => {
        u++;
        let authHeaders = u === 1 || socketPath ? k : (await M()).headers;
        return Ce({
          endpoint: endpoint,
          authHeaders: authHeaders,
          ifNoneMatch: etag || void 0,
          timeoutMs: timeoutMs,
          socketPath: socketPath
        });
      },
      T = socketPath ? await W() : await vy(W, {
        credentials: credentials,
        gateToSessionOAuthCredential: !0,
        oauthRefreshLatch: oauthRefreshLatch,
        onForcedRefreshOutcome: outcome => {
          h = {
            outcome: outcome
          }, oauthRefreshLatch.lastOutcome = outcome;
        }
      });
    if (T.kind === "not_modified") {
      if (!etag) return t("Policy limits: 304 to an unconditional request"), {
        success: !1,
        error: "Unexpected 304 Not Modified",
        errorCode: "request_failed",
        httpStatus: 304,
        skipRetry: !0,
        principalKeyAtWire: principalKeyAtWire,
        askedKeyAtWire: askedKeyAtWire,
        principalMovedAtWire: principalMovedAtWire,
        retriedAfter401: u > 1
      };
      if (u === 1) oauthRefreshLatch.attempted = !1;
      return t("Policy limits: Using cached restrictions (304)"), {
        success: !0,
        response: null,
        etag: etag,
        signature: T.signature,
        principalKeyAtWire: principalKeyAtWire,
        askedKeyAtWire: askedKeyAtWire,
        principalMovedAtWire: principalMovedAtWire,
        retriedAfter401: u > 1
      };
    }
    let I = YLt(T.data);
    if (!I.success) {
      let parseErrorField = ut(I.error.issues[0]?.path[0]),
        contentType = T.contentType,
        parseErrorContentType = ht.find(([N]) => contentType.includes(N))?.[1] ?? "other";
      return t(`Policy limits: Invalid response format - field=${parseErrorField} ct=${parseErrorContentType} - ${I.error.message}`), {
        success: !1,
        error: "Invalid policy limits format",
        errorCode: "parse_failed",
        parseErrorField: parseErrorField,
        parseErrorContentType: parseErrorContentType,
        skipRetry: Se(),
        principalKeyAtWire: principalKeyAtWire,
        askedKeyAtWire: askedKeyAtWire,
        principalMovedAtWire: principalMovedAtWire,
        retriedAfter401: u > 1
      };
    }
    oauthRefreshLatch.attempted = !1;
    let S = mGn(T.data);
    if (S > 0) return t(`Policy limits: Fetched with ${S} malformed compliance_taints element(s) dropped`), {
      success: !0,
      response: I.data,
      parseErrorField: "compliance_taints",
      lossyComplianceTaints: !0,
      signature: T.signature,
      principalKeyAtWire: principalKeyAtWire,
      askedKeyAtWire: askedKeyAtWire,
      principalMovedAtWire: principalMovedAtWire,
      retriedAfter401: u > 1
    };
    return t("Policy limits: Fetched successfully"), {
      success: !0,
      response: I.data,
      signature: T.signature,
      principalKeyAtWire: principalKeyAtWire,
      askedKeyAtWire: askedKeyAtWire,
      principalMovedAtWire: principalMovedAtWire,
      retriedAfter401: u > 1
    };
  } catch (k) {
    let {
        kind: kind,
        status: O,
        message: W
      } = Xs(k),
      T = Gct(k),
      forcedRefreshOutcome = h !== void 0 ? h.outcome : sentStoredLogin && oauthRefreshLatch.attempted ? oauthRefreshLatch.lastOutcome : void 0,
      S = u > 0 ? {
        principalKeyAtWire: principalKeyAtWire,
        askedKeyAtWire: askedKeyAtWire,
        principalMovedAtWire: principalMovedAtWire
      } : {};
    switch (t(`Policy limits: fetch failed (${kind}${O ? ` ${O}` : ""}) from ${me()} \u2014 ${W}`), kind) {
      case "auth":
        return {
          success: !1,
          error: "Not authorized for policy limits",
          errorCode: "auth_failed",
          httpStatus: O,
          tokenRefreshOutcome: tokenRefreshOutcome,
          skipRetry: !(O === 401 && sentStoredLogin && tokenRefreshOutcome !== void 0 && tt.has(tokenRefreshOutcome) && (h === void 0 || h.outcome !== void 0 && kHt.has(h.outcome))),
          retriedAfter401: u > 1,
          forcedRefreshOutcome: forcedRefreshOutcome,
          sentStoredLogin: sentStoredLogin,
          ...T,
          ...S
        };
      case "timeout":
        return {
          success: !1,
          error: "Policy limits request timeout",
          errorCode: "timeout",
          errno: A6e(k),
          retriedAfter401: u > 1,
          ...S
        };
      case "network":
        return {
          success: !1,
          error: "Cannot connect to server",
          errorCode: "network_error",
          errno: A6e(k),
          retriedAfter401: u > 1,
          ...S
        };
      default:
        return {
          success: !1,
          error: W,
          errorCode: "request_failed",
          httpStatus: O,
          skipRetry: BBe(O),
          retriedAfter401: u > 1,
          forcedRefreshOutcome: forcedRefreshOutcome,
          ...(kind === "http" && O === void 0 && {
            noResponse: !0,
            errno: A6e(k)
          }),
          ...T,
          ...S
        };
    }
  }
}
async function qMr(e, {
  timeoutMs: timeoutMs_2 = timeoutMs
} = {}) {
  if (Ie() !== "firstParty" || !Cy()) return null;
  try {
    let s = await Ce({
      endpoint: Re(),
      authHeaders: {
        Authorization: `Bearer ${e}`,
        "anthropic-beta": dp
      },
      timeoutMs: timeoutMs_2,
      acceptAny2xx: !0
    });
    if (s.kind === "not_modified") return t("Policy limits (bearer read): 304 to an unconditional request"), null;
    let o = YLt(s.data);
    if (!o.success) return t(`Policy limits (bearer read): invalid response format \u2014 ${o.error.message}`), null;
    return o.data;
  } catch (error) {
    let {
      kind: kind_2,
      status: status,
      message: message
    } = Xs(error);
    return t(`Policy limits (bearer read): fetch failed (${kind_2}${status ? ` ${status}` : ""}) \u2014 ${message}`), null;
  }
}
function ut(e) {
  if (e === void 0) return "root";
  return e === "restrictions" || e === "compliance_taints" || e === "defaults" ? e : "other";
}
var ht = [["text/html", "html"], ["application/json", "json"], ["text/json", "json"], ["text/", "text"]];
function Ge() {
  return {
    has_custom_base_url: !Cy(),
    via_unix_socket: c1() !== void 0,
    has_unix_socket: a.ANTHROPIC_UNIX_SOCKET !== void 0,
    has_auth_token: Boolean(P0()),
    has_api_key_helper: Boolean(Sy()),
    api_key_prefix: c(gHt())
  };
}
var ft = ["EACCES", "EPERM", "EROFS", "ENOSPC", "EDQUOT", "ENOENT", "ENOTDIR", "EISDIR", "EMFILE", "ENFILE", "EBUSY"];
function $e(e) {
  return e !== void 0 && ft.includes(e) ? e : "other";
}
function fe(e) {
  return $e(v(e));
}
function yt(e) {
  let r = "telemetryCode" in e ? e.telemetryCode : void 0;
  return $e(r === "UnexpectedAbsent" || r === w2r ? "ENOENT" : r);
}
function ye() {
  return Ae.state("policy-limits");
}
var we = 1048576;
async function KMr(e) {
  if (!H() || e === void 0 || !C_() || Phe()) return;
  try {
    let r = wGn(),
      s = await e.read([{
        key: ye(),
        offset: 0,
        length: we + 1
      }]);
    if (!s.ok) {
      t(`Policy limits: prime read failed: ${s.error.code}; raw cache read stays`);
      return;
    }
    let o = s.value.items[0];
    if (!o.found) {
      MGn(e, null);
      return;
    }
    if (o.totalBytes > we) {
      t("Policy limits: prime skipped (oversize cache); raw cache read stays");
      return;
    }
    let n = Ucn(Buffer.from(o.value).toString("utf-8"));
    MGn(e, n === null ? null : AGn(n, vGn(r)));
  } catch (error) {
    t(`Policy limits: prime failed: ${l(error)}`);
  }
}
class YMr {
  storageV5;
  credentials;
  used = !1;
  constructor(e = {}) {
    this.storageV5 = e.storageV5, this.credentials = e.credentials;
  }
  adoptStartupServices(e) {
    if (e.storageV5 === void 0 && e.credentials === void 0) return "nothing to adopt";
    if (this.storageV5 !== void 0 || this.credentials !== void 0) return "already composed";
    if (this.used) return "already used";
    return this.storageV5 = e.storageV5, this.credentials = e.credentials, "adopted";
  }
  oauthRefreshLatch = {
    attempted: !1
  };
  poller = null;
  cleanupRegistered = !1;
  loadingCompletePromise = null;
  loadingCompleteResolve = null;
  loadingTimeoutId = null;
  abortController = new AbortController();
  firstPromptStateLogged = !1;
  cacheWriteFailureLogged = !1;
  sessionGeneration = 0;
  serverConfirmedGeneration = -1;
  verdictPrincipalIdentity = null;
  verdictKey = null;
  verdictPrincipalKind = null;
  askedKey = null;
  cyclesInFlight = 0;
  unsettledCycles = new Set();
  principalCheckOwed = !1;
  unclassifiedRecheckTimer = null;
  stopCredentialWatch = null;
  principalCheckQueued = !1;
  signedCacheShadowChecked = !1;
  cacheClearEpoch = 0;
  verdictlessRetry = null;
  verdictlessRetryStep = 0;
  stopNetworkWatch = null;
  verdictlessEpisode = null;
  startupLoadState = "not_started";
  startupLoadClaimed = !1;
  prefetchAdmittedGeneration = -1;
  startupLoadErrorCode;
  startupLoadCredentialState;
  startupAwaitResult = "not_awaited";
  gateSnapshotThisRun;
  coldStartFirstWaitAtMs = void 0;
  coldStartWaitedMs = 0;
  recordStartupAwaitResult(e) {
    this.startupAwaitResult = e;
  }
  get coldStartTimedOut() {
    return this.startupAwaitResult === "timed_out";
  }
  async awaitColdStartVerdict() {
    let e = performance.now();
    this.coldStartFirstWaitAtMs ??= e;
    let r = Math.max(0, Math.round(this.coldStartFirstWaitAtMs + aGn - e)),
      s;
    try {
      await Ht(this.waitForLoad(), r, "policy_limits_cold_await"), s = "completed";
    } catch {
      s = "timed_out";
    }
    if (this.coldStartWaitedMs += performance.now() - e, this.startupAwaitResult !== "timed_out") this.recordStartupAwaitResult(s);
    return s;
  }
  get coldStartVerdictWait() {
    return this.coldStartFirstWaitAtMs === void 0 ? null : {
      waitedMs: this.coldStartWaitedMs,
      firstAtMs: this.coldStartFirstWaitAtMs
    };
  }
  async admitPrefetched(e) {
    let r = refused => (t(`Policy limits: host prefetch not admitted (${refused})`), {
      admitted: !1,
      refused: refused
    });
    try {
      if (!C_()) return r("ineligible");
      if (this.startupLoadClaimed || this.cyclesInFlight > 0 || this.serverConfirmedGeneration === this.sessionGeneration) return r("already_loading");
      if (this.prefetchAdmittedGeneration === this.sessionGeneration) return r("already_admitted");
      let s = MX();
      if (s === null || s.kind !== "org" || s.unclassified === !0 || s.descriptor !== `org:${e.orgUuid.toLowerCase()}` || s.bearerDigest === void 0 || s.bearerDigest !== e.bearerDigest) return r("principal_mismatch");
      let o = me();
      if (e.endpointHost !== o) return r("endpoint_mismatch");
      let n = Date.now() - e.fetchedAtMs;
      if (!Number.isFinite(e.fetchedAtMs) || n < -$Po || n > $Po) return r("stale");
      let h = YLt(e.data);
      if (!h.success) return r("unparseable");
      if (mGn(e.data) > 0) return r("lossy_taints");
      let g = h.data,
        sessionGeneration = this.sessionGeneration,
        hadCache = v0() !== null;
      this.used = !0, this.prefetchAdmittedGeneration = sessionGeneration, rDr(() => this.managedConfigPolicyGateFields()), Lcn(g), this.recordVerdictPrincipal(s);
      let P = M6e(),
        R = await this.saveCachedResponse(g, sessionGeneration, iDr(e.signature), s, "prior_evidence");
      if (this.sessionGeneration !== sessionGeneration) {
        if (Uz("policy", {
          source: "superseded",
          hadCache: hadCache,
          awaited: !1
        }), R !== "stale" && R !== "skipped") await this.deleteCacheFile(), qLt();
        return this.dropUnconfirmedSessionCache(), r("superseded");
      }
      if (Uz("policy", {
        source: "cache",
        hadCache: hadCache,
        awaited: !1
      }), R === "saved" && M6e() === P) Ncn();
      return t(`Policy limits: admitted the host's prefetch as this session's prior-evidence verdict (${Object.keys(g.restrictions).length} restriction(s), ${g.compliance_taints?.length ?? 0} taint(s), persisted=${R})`), {
        admitted: !0
      };
    } catch (error) {
      return d(error), r("error");
    }
  }
  ensureLoadRequested(e) {
    let r = this.startupLoadClaimed && this.startupLoadState === "not_started" && !this.loadingCompletePromise && C_();
    if (this.startupLoadClaimed && !r) return !1;
    return this.initializeLoadingPromise(), this.load(e).catch(s => d(s)), !0;
  }
  stop() {
    if (this.sessionGeneration++, this.verdictPrincipalIdentity = null, this.verdictPrincipalKind = null, this.verdictKey = null, this.askedKey = null, this.cyclesInFlight = 0, this.principalCheckOwed = !1, this.unclassifiedRecheckTimer !== null) clearTimeout(this.unclassifiedRecheckTimer), this.unclassifiedRecheckTimer = null;
    this.stopCredentialWatch?.(), this.stopCredentialWatch = null, this.oauthRefreshLatch.attempted = !1, qLt(), Yct(), this.stopBackgroundPolling(), this.abortController.abort(), this.abortController = new AbortController(), VLt(null), kGn(null), gDr(), this.releaseLoadingPromise();
  }
  releaseLoadingPromise() {
    if (this.loadingCompleteResolve?.(), this.loadingCompletePromise = null, this.loadingCompleteResolve = null, this.loadingTimeoutId !== null) clearTimeout(this.loadingTimeoutId), this.loadingTimeoutId = null;
  }
  initializeLoadingPromise() {
    if (this.loadingCompletePromise) return;
    if (C_()) this.loadingCompletePromise = new Promise(e => {
      this.loadingCompleteResolve = e, this.loadingTimeoutId = setTimeout(r => {
        if (this.loadingCompleteResolve === r) t("Policy limits: Loading promise timed out, resolving anyway"), this.loadingCompleteResolve(), this.loadingCompleteResolve = null;
      }, ot, e);
    });
  }
  async waitForLoad() {
    if (this.loadingCompletePromise) await this.loadingCompletePromise;
  }
  async saveCachedResponse(e, r, s, o, n) {
    if (this.sessionGeneration !== r) return t("Policy limits: skipped saving a fetch that outlived the account session"), "stale";
    if (Phe()) return "skipped";
    if (o === null) return t("Policy limits: no attributable principal for this credential; the verdict is used for the session and not persisted"), "skipped";
    let h;
    try {
      h = await this.writeStampForSave(e, o, n);
    } catch (error) {
      return this.recordCacheWriteFailure(error instanceof Error ? error.message : "unknown error", fe(error)), "failed";
    }
    if (h === null) return "failed";
    let g = X(e);
    if (H() && this.storageV5 !== void 0) {
      let u, y;
      try {
        let P = await this.storageV5.write(ye(), b(Xct(e), null, 2), {
          publishDiscipline: "inPlace",
          mode: 384
        });
        if (P.ok) return t(`Policy limits: Saved to ${Pw()}`), await kCe(Pw(), s), await this.sealSavedBody(h, g);
        u = rt(P.error), y = yt(P.error);
      } catch (error) {
        u = l(error), y = fe(error);
      }
      return Yct(), this.recordCacheWriteFailure(u, y), "failed";
    }
    try {
      let u = Pw();
      await et(u, b(Xct(e), null, 2), {
        encoding: "utf-8",
        mode: 384
      }), t(`Policy limits: Saved to ${u}`), await kCe(u, s);
    } catch (error) {
      return Yct(), this.recordCacheWriteFailure(error instanceof Error ? error.message : "unknown error", fe(error)), "failed";
    }
    return this.sealSavedBody(h, g);
  }
  async sealSavedBody(e, r) {
    try {
      await e.rewrite();
    } catch (error) {
      let o = await rFe(Pw());
      if (sFe(o), o.kind !== "ok" || o.stamp.identity !== e.identity || o.stamp.sha !== r) {
        if (o.kind !== "ok") {
          let n = await this.readDiskBody();
          if ((n.kind === "unreadable" || n.kind === "body" && n.checksum === r) && !(await this.removeBodyLeavingStamp())) {
            let g = await rFe(Pw());
            if (sFe(g), g.kind !== "ok") await e.vouch();
          }
        }
        return this.recordCacheWriteFailure(error instanceof Error ? error.message : "unknown error", fe(error)), "failed";
      }
    }
    return IGn(r, e.evidence, e.confirmedAt), "saved";
  }
  async readDiskBody() {
    let e = !1,
      r;
    try {
      r = await OI(ce(), Pw(), we, o => {
        e = o.isFile();
      });
    } catch (error) {
      return {
        kind: B(error) ? "none" : "unreadable"
      };
    }
    if (e) return {
      kind: "unreadable"
    };
    let s = r === null ? null : Ucn(r);
    return s === null ? {
      kind: "none"
    } : {
      kind: "body",
      checksum: X(s)
    };
  }
  async removeBodyLeavingStamp() {
    if (Yct(), await $Lt(Pw()), H() && this.storageV5 !== void 0) try {
      await this.storageV5.delete(ye());
    } catch {}
    try {
      return await Je(Pw()), !0;
    } catch (error) {
      return B(error);
    }
  }
  async removeUnstampedBody() {
    if (Phe()) return;
    let e = await rFe(Pw());
    if (sFe(e), e.kind === "absent") await this.removeBodyLeavingStamp();
  }
  async removeSupersededLegacyBody(e, r) {
    if (!ADr(e)) return;
    let s = await rFe(Pw());
    if (sFe(s), s.kind !== "absent") return;
    let o = await this.readDiskBody();
    if (o.kind !== "body" || o.checksum !== r) return;
    t("Policy limits: removed an unstamped cache this credential cannot restamp after the server superseded it"), await this.removeBodyLeavingStamp();
  }
  async writeStampForSave(e, principal, authority) {
    let o = Pw(),
      n = await rFe(o);
    if (sFe(n), Dcn(n)) return t(`Policy limits: the cache stamp could not be read just now (${n.code}); nothing persisted this cycle`), null;
    let h = uDr({
      principal: principal,
      bodySha: X(e),
      confirmedAt: Date.now(),
      bodyTaints: e.compliance_taints,
      previous: hGn(n, $cn()),
      authority: authority
    });
    return await yGn(o, h), {
      identity: h.identity,
      evidence: GLt(h),
      confirmedAt: h.confirmed_at,
      rewrite: () => yGn(o, h),
      vouch: async () => {
        await _Gn(o, h);
      }
    };
  }
  async restampConfirmedCache(e, bodySha, principal_2, o, authority_2) {
    if (this.sessionGeneration !== o || principal_2 === null || bodySha === void 0 || vDr() !== bodySha) return;
    let cacheClearEpoch = this.cacheClearEpoch,
      g = await rFe(Pw());
    if (sFe(g), g.kind !== "absent" && !(g.kind === "ok" && g.stamp.sha === bodySha)) return;
    let u = uDr({
      principal: principal_2,
      bodySha: bodySha,
      confirmedAt: Date.now(),
      bodyTaints: e.compliance_taints,
      previous: hGn(g, $cn()),
      authority: authority_2
    });
    if (await _Gn(Pw(), u), this.cacheClearEpoch !== cacheClearEpoch) {
      await this.deleteCacheFile();
      return;
    }
    if (this.sessionGeneration !== o) return;
    IGn(bodySha, GLt(u), u.confirmed_at);
  }
  recordCacheWriteFailure(e, r) {
    if (t(`Policy limits: Failed to save - ${e}`), !this.cacheWriteFailureLogged) this.cacheWriteFailureLogged = !0, i("tengu_policy_limits_cache_write_failed", {
      errno: c(r)
    });
  }
  async fetchAndLoad(e, r, s = !1) {
    let sessionGeneration_2 = this.sessionGeneration;
    this.cyclesInFlight++;
    let n = this.runFetchCycle(e, r, s);
    this.unsettledCycles.add(n);
    try {
      return await n;
    } finally {
      this.unsettledCycles.delete(n), this.endCycle(sessionGeneration_2);
    }
  }
  async _settleCyclesForTesting() {
    while (this.unsettledCycles.size > 0) await Promise.allSettled([...this.unsettledCycles]);
  }
  endCycle(e) {
    if (this.sessionGeneration !== e) return;
    if (this.cyclesInFlight--, this.cyclesInFlight === 0 && this.principalCheckOwed) this.principalCheckOwed = !1, this.onCredentialMayHaveChanged();
  }
  async runFetchCycle(e, r, awaited) {
    this.used = !0;
    let o = e === "policy_limits_load" && !this.startupLoadClaimed;
    if (o) this.startupLoadClaimed = !0;
    if (rDr(() => this.managedConfigPolicyGateFields()), !C_()) return Uz("policy", {
      source: "ineligible",
      hadCache: !1,
      awaited: awaited
    }), null;
    if (o) this.startupLoadState = "in_flight";
    let n = CGn() ? null : KLt(),
      h = n === tFe ? null : n,
      g = M6e(),
      cache_age_ms = Ve(),
      y = MX(),
      P = y === null ? "" : Ble(y),
      R = !Ke(r);
    if (h && !v0()) qct(h);
    let F = v0();
    if (h && F !== null && this.verdictPrincipalIdentity === null && this.serverConfirmedGeneration !== this.sessionGeneration) if (re(y) && Fcn() === "match" && SDr() === Ble(y) && X(F) === X(h)) this.recordVerdictPrincipal(y);else this.ensureCredentialWatch();
    if (h) Uz("policy", {
      source: "cache",
      hadCache: !0,
      awaited: awaited
    });
    let bodySha_2 = h ? X(h) : void 0,
      cacheClearEpoch_2 = this.cacheClearEpoch;
    if (!this.signedCacheShadowChecked) {
      if (this.signedCacheShadowChecked = !0, bodySha_2 !== void 0 && !Phe()) xcn({
        kind: "policy-limits",
        cachePath: Pw(),
        bodySha: bodySha_2,
        readStoredAccount: readStoredAccount,
        resolveLiveIdentity: () => Acn({
          bearerKind: bearerKind,
          attributeBearer: () => CHt(this.credentials),
          featureValue: featureValue
        })
      });
    }
    let O = nt(),
      authType = O.authType,
      T = Date.now(),
      I = this.abortController.signal,
      sessionGeneration_3 = this.sessionGeneration,
      A = xhe(),
      D = () => {
        let E = xhe();
        return E !== null && E.success && E !== A;
      },
      K = !1,
      N = E => {
        if (K = !0, !E.success && D()) return;
        this.recordFetchOutcome(sessionGeneration_3, cacheClearEpoch_2, E, P, R);
      },
      be = () => N({
        success: !1,
        errorCode: "request_failed",
        httpStatus: null,
        host: me(),
        retrying: !1
      });
    try {
      let host = me(),
        f = await ct(bodySha_2, this.credentials, this.storageV5, I, C => {
          if (xhe()?.success) return;
          this.recordFetchOutcome(sessionGeneration_3, cacheClearEpoch_2, {
            success: !1,
            host: host,
            httpStatus: C.httpStatus ?? null,
            errorCode: C.errorCode ?? "request_failed",
            retrying: !0
          }, P, R);
        }, this.oauthRefreshLatch, Ke(r) ? 0 : Ne);
      if (this.sessionGeneration !== sessionGeneration_3 || I.aborted) {
        if (o && this.startupLoadState === "in_flight") this.startupLoadState = "failed", this.startupLoadErrorCode = "session_changed", this.startupLoadCredentialState = void 0;
        return Uz("policy", {
          source: "superseded",
          hadCache: h !== null,
          awaited: awaited
        }), t("Policy limits: Discarding a fetch that outlived the account session"), p(e, "cycle_aborted"), v0();
      }
      let se = y === null ? null : z(y),
        ve = MX(),
        Pe = ve === null ? null : z(ve),
        je = f.principalKeyAtWire === void 0 ? Pe : f.principalKeyAtWire,
        V = f.principalMovedAtWire === !0 || je !== Pe;
      if (!V && f.askedKeyAtWire !== void 0 && f.askedKeyAtWire !== null) this.askedKey = f.askedKeyAtWire;
      if (V) t("Policy limits: the credential changed principal during the fetch; this response is used for the session but not persisted or attributed"), y = null;else if (se !== Pe) t("Policy limits: the credential changed principal before the request went out; attributing the response to the principal it authenticated as"), y = ve;
      if (M6e() !== g) t("Policy limits: the disk snapshot predates an account-boundary hold; not installable"), h = null;
      let oe = f.success && f.response === null && !h,
        success = f.success && !oe,
        errorCode = oe ? "spurious_304" : f.errorCode ?? "request_failed",
        Ee = success ? void 0 : errorCode,
        credentialOrigin = at(O, f),
        injectedTokenRecovery = credentialOrigin === "injected_token" ? uut() : void 0,
        credentialState = Pcn({
          errorCode: errorCode,
          httpStatus: f.httpStatus,
          serverErrorType: f.serverErrorType,
          serverErrorCode: f.serverErrorCode,
          serverAuthDenial: f.serverAuthDenial,
          tokenRefreshOutcome: f.tokenRefreshOutcome,
          forcedRefreshOutcome: f.forcedRefreshOutcome,
          authUnavailableReason: f.authUnavailableReason,
          authType: authType,
          credentialOrigin: credentialOrigin,
          injectedTokenRecovery: injectedTokenRecovery,
          noResponse: f.noResponse
        }),
        Oe = success ? void 0 : credentialState,
        ee = Date.now(),
        qe = Fcn();
      if (o) this.startupLoadState = success ? "succeeded" : "failed", this.startupLoadErrorCode = Ee, this.startupLoadCredentialState = Oe;
      let ne = {
        source: success ? "fetch" : "error",
        hadCache: h !== null,
        awaited: awaited,
        fetchMs: ee - T
      };
      if (!success) Uz("policy", ne);
      let ae,
        verdictless_retry_scheduled = !1;
      if (!f.success && (!f.skipRetry || f.errorCode === "parse_failed") && Se()) {
        ae = this.staleFallbackSource();
        let C = r !== "api_success_trigger";
        if (ae === null) {
          if (verdictless_retry_scheduled = this.armVerdictlessRetry(), C) this.armNetworkKick();
        } else if (!this.hasLiveVerdict() && C) this.armNetworkKick();
      }
      let le = success ? f.response ?? h : null;
      if (i("tengu_policy_limits_fetch", {
        duration_ms: ee - T,
        ms_since_startup: ee - ke,
        success: success,
        had_cache: h !== null,
        cache_stamp: c(qe),
        cache_age_ms: cache_age_ms,
        attempts: f.attempts,
        restrictions_denied_count: le ? U(Object.values(le.restrictions), C => !C.allowed) : void 0,
        compliance_taint_count: le ? le.compliance_taints?.length ?? 0 : void 0,
        is_load: e === "policy_limits_load",
        awaited: awaited,
        auth_type: c(authType),
        error_code: ue(Ee),
        token_source: c(Ue()),
        ...Ge(),
        auth_unavailable_reason: ue(f.authUnavailableReason),
        token_refresh_outcome: authType === "oauth" ? ue(f.tokenRefreshOutcome) : void 0,
        forced_refresh_outcome: authType === "oauth" ? ue(f.forcedRefreshOutcome) : void 0,
        retried_after_401: f.retriedAfter401 ?? !1,
        http_status: f.httpStatus,
        parse_error_field: ue(f.parseErrorField),
        parse_error_content_type: ue(f.parseErrorContentType),
        server_error_type: ue(f.serverErrorType),
        server_error_code: ue(f.serverErrorCode),
        server_auth_denial: ue(f.serverAuthDenial),
        injected_token_recovery: ue(success ? void 0 : injectedTokenRecovery),
        credential_state: ue(Oe),
        fetch_trigger: c(r),
        verdictless_retry_scheduled: verdictless_retry_scheduled,
        error_errno: ue(f.errno),
        ...lt()
      }), !success) {
        N({
          success: !1,
          host: host,
          httpStatus: f.httpStatus ?? null,
          errorCode: errorCode,
          retrying: !1,
          credentialState: credentialState
        });
        let C = ae !== void 0 ? ae : this.staleFallbackSource();
        if (C) {
          t(oe ? "Policy limits: 304 with no outstanding ETag \u2014 using stale cache" : "Policy limits: Using stale cache after fetch failure");
          let te = He(C);
          if (qct(te), this.disposeVerdictlessRetryTimer(), !this.hasLiveVerdict()) this.noteUnverifiedCycle(errorCode, !0);
          return p(e, oe ? "spurious_304" : "stale_cache_used", {
            credential_state: c(credentialState)
          }), te;
        }
        if ((f.httpStatus === 404 || f.httpStatus === 304) && v0() === null && !featureValue("tengu_rustling_orbit", !1)) return t(`Policy limits: ${f.httpStatus} with no cache, no restrictions for this session (not persisted)`), Hcn(), fDr(), this.serverConfirmedGeneration = sessionGeneration_3, this.disposeVerdictlessRetryTimer(), this.disarmNetworkKick(), this.recordVerdictPrincipal(y), p(e, f.httpStatus === 404 ? "route_missing_fail_open" : "unsolicited_304_fail_open", {
          credential_state: c(credentialState)
        }), tFe;
        return this.noteUnverifiedCycle(errorCode, !1), m(e, errorCode, {
          credential_state: c(credentialState)
        }), null;
      }
      let response = f.response;
      if (response === null || response === void 0) {
        if (!h) return be(), Uz("policy", {
          ...ne,
          source: "error"
        }), m(e, "unexpected_error"), null;
        t("Policy limits: Cache still valid (304 Not Modified)");
        let C = h,
          compliance_taints_2 = h.compliance_taints,
          xe = this.serverConfirmedGeneration === sessionGeneration_3 ? v0()?.compliance_taints ?? [] : [],
          pe = mGn(Xct(h)) > 0;
        if (pe && xe.some(item => !compliance_taints_2.includes(item))) C = {
          ...h,
          compliance_taints: L([...xe, ...compliance_taints_2]).slice(0, I6e)
        }, t("Policy limits: lossy cached compliance_taints \u2014 kept the session taint set");
        if (V) Hcn();else PGn();
        if (V || pe) Lcn(C);else VLt(C);
        if (this.serverConfirmedGeneration = sessionGeneration_3, this.onLiveVerdict(r), this.recordVerdictPrincipal(y), N({
          success: !0,
          host: host
        }), !Phe()) try {
          if (H() && this.storageV5 !== void 0) {
            if ((await this.storageV5.touch(ye())).ok) {
              if (await kCe(Pw(), f.signature), !(await ULt(Pw(), this.cacheClearEpoch !== cacheClearEpoch_2))) {
                if (OGn(bodySha_2, ee), !V) await this.restampConfirmedCache(C, bodySha_2, y, sessionGeneration_3, pe ? "prior_evidence" : "confirmed");
              }
            }
          } else {
            let date = new Date();
            if (await Ze(Pw(), date, date), await kCe(Pw(), f.signature), !(await ULt(Pw(), this.cacheClearEpoch !== cacheClearEpoch_2))) {
              if (OGn(bodySha_2, ee), !V) await this.restampConfirmedCache(C, bodySha_2, y, sessionGeneration_3, pe ? "prior_evidence" : "confirmed");
            }
          }
        } catch {}
        return Uz("policy", ne), _(e), C;
      }
      let G = response;
      if (f.lossyComplianceTaints) {
        let C = [...(v0()?.compliance_taints ?? []), ...(h?.compliance_taints ?? [])];
        if (C.length > 0) G = {
          ...G,
          compliance_taints: L([...G.compliance_taints, ...C]).slice(0, I6e)
        }, t("Policy limits: lossy compliance_taints \u2014 kept the known taint set");
      }
      if (V) Hcn();else PGn();
      if (V || f.lossyComplianceTaints) Lcn(G);else VLt(G);
      this.serverConfirmedGeneration = sessionGeneration_3, this.onLiveVerdict(r), this.recordVerdictPrincipal(y), N({
        success: !0,
        host: host
      });
      let Ye = M6e(),
        he = V ? "stale" : await this.saveCachedResponse(G, sessionGeneration_3, G === response ? f.signature : void 0, y, f.lossyComplianceTaints ? "prior_evidence" : "confirmed");
      if (Uz("policy", ne), he === "skipped" && y === null && !V && !Phe() && h !== null && bodySha_2 !== void 0 && Fcn() === "legacy" && bodySha_2 !== X(G)) await this.removeSupersededLegacyBody(h, bodySha_2);
      if (this.sessionGeneration !== sessionGeneration_3) {
        if (he !== "stale" && he !== "skipped") {
          let C = await this.deleteCacheFile();
          if (qLt(), !C) t("Policy limits: could not remove a dead fetch's cache write; disk adoption suppressed until the next save");
        }
        return this.dropUnconfirmedSessionCache(), p(e, "cycle_aborted"), v0();
      }
      if (he === "saved" && M6e() === Ye) Ncn();
      if (t(Object.keys(G.restrictions).length > 0 ? "Policy limits: Applied new restrictions successfully" : "Policy limits: No restrictions (cached empty)"), f.lossyComplianceTaints) p(e, "lossy_compliance_taints");else _(e);
      return G;
    } catch {
      let E = this.sessionGeneration !== sessionGeneration_3;
      if (o && this.startupLoadState === "in_flight") this.startupLoadState = "failed", this.startupLoadErrorCode = E ? "session_changed" : "unexpected_error", this.startupLoadCredentialState = void 0;
      if (Uz("policy", {
        source: E ? "superseded" : "error",
        hadCache: h !== null,
        awaited: awaited
      }), E || I.aborted) return p(e, "cycle_aborted"), v0();
      if (!K) be();
      let f = this.staleFallbackSource();
      if (f) {
        t("Policy limits: Using stale cache after error");
        let se = He(f);
        if (qct(se), this.disposeVerdictlessRetryTimer(), !this.hasLiveVerdict()) this.noteUnverifiedCycle("unexpected_error", !0);
        return p(e, "stale_cache_used"), se;
      }
      return this.noteUnverifiedCycle("unexpected_error", !1), m(e, "unexpected_error"), null;
    }
  }
  hasLiveVerdict() {
    let e = v0();
    return e !== null && e !== tFe && this.serverConfirmedGeneration === this.sessionGeneration;
  }
  armVerdictlessRetry() {
    if (this.verdictlessRetry !== null) return !0;
    let verdictlessRetryStep = this.verdictlessRetryStep,
      r = De[verdictlessRetryStep];
    if (r === void 0 || !C_()) return !1;
    this.verdictlessRetryStep = verdictlessRetryStep + 1;
    let s = Math.round(r * (1 - We + 2 * We * Math.random())),
      sessionGeneration_4 = this.sessionGeneration;
    t(`Policy limits: no verdict \u2014 accelerated retry ${verdictlessRetryStep + 1}/${De.length} in ${Math.round(s / 1000)}s`);
    let n = HLt(() => {
      if (n[Symbol.dispose](), this.verdictlessRetry === n) this.verdictlessRetry = null;
      if (this.sessionGeneration !== sessionGeneration_4) return;
      if (v0() !== null) return;
      this.poll("accelerated_retry").catch(h => d(h));
    }, s, {
      unref: !0
    });
    return this.verdictlessRetry = n, !0;
  }
  disposeVerdictlessRetryTimer() {
    this.verdictlessRetry?.[Symbol.dispose](), this.verdictlessRetry = null;
  }
  armNetworkKick() {
    if (this.stopNetworkWatch !== null) return;
    let sessionGeneration_5 = this.sessionGeneration,
      r = WPo(() => {
        queueMicrotask(() => {
          if (this.stopNetworkWatch !== r) return;
          try {
            this.kickOnNetworkSuccess(sessionGeneration_5);
          } catch (error) {
            d(error);
          }
        });
      });
    this.stopNetworkWatch = r;
  }
  disarmNetworkKick() {
    this.stopNetworkWatch?.(), this.stopNetworkWatch = null;
  }
  kickOnNetworkSuccess(e) {
    if (this.sessionGeneration !== e) {
      this.disarmNetworkKick();
      return;
    }
    if (this.cyclesInFlight > 0) return;
    if (this.disarmNetworkKick(), !C_() || this.hasLiveVerdict()) return;
    t("Policy limits: the API answered a request \u2014 re-fetching the org policy now"), this.poll("api_success_trigger").catch(r => d(r));
  }
  resetAcceleratedRecovery() {
    this.disposeVerdictlessRetryTimer(), this.verdictlessRetryStep = 0, this.disarmNetworkKick();
  }
  noteUnverifiedCycle(errorCode_2, staleServed) {
    if (this.verdictlessEpisode === null) this.verdictlessEpisode = {
      sinceMs: Date.now(),
      errorCode: errorCode_2,
      failedCycles: 1,
      staleServed: staleServed
    };else this.verdictlessEpisode.failedCycles++;
  }
  onLiveVerdict(e) {
    this.resetAcceleratedRecovery();
    let verdictlessEpisode = this.verdictlessEpisode;
    if (verdictlessEpisode === null) return;
    this.verdictlessEpisode = null;
    let s = Date.now(),
      o = st(e),
      errorCode_3 = verdictlessEpisode.errorCode;
    i("tengu_policy_limits_verdict_recovered", {
      ms_since_startup: s - ke,
      ms_verdictless: s - verdictlessEpisode.sinceMs,
      recovered_by: c(o),
      startup_error_code: c(errorCode_3),
      attempts_before_recovery: verdictlessEpisode.failedCycles,
      was_stale_served: verdictlessEpisode.staleServed,
      fast_retry_enabled: Se()
    });
  }
  policyGateSnapshot() {
    if (this.gateSnapshotThisRun !== void 0) return this.gateSnapshotThisRun;
    let ineligibleReason = CCe(),
      eligible = ineligibleReason === void 0,
      eligibleIfBaseUrlGateRemoved = ineligibleReason === "custom_base_url" ? CCe({
        skipBaseUrlCheck: !0
      }) === void 0 : eligible,
      hasCache = UE() !== null,
      cacheAgeMs = eligible ? Ve() : void 0,
      liveVerdict = this.hasLiveVerdict(),
      g = {
        ineligibleReason: ineligibleReason,
        eligible: eligible,
        eligibleIfBaseUrlGateRemoved: eligibleIfBaseUrlGateRemoved,
        hasCache: hasCache,
        cacheAgeMs: cacheAgeMs,
        liveVerdict: liveVerdict,
        wouldFailClosed: eligible && !liveVerdict && (!hasCache || c1() === void 0 && (cacheAgeMs ?? 1 / 0) > _2o),
        loadState: this.startupLoadState,
        loadErrorCode: this.startupLoadErrorCode,
        loadCredentialState: this.startupLoadCredentialState,
        awaitResult: this.startupAwaitResult
      };
    return this.gateSnapshotThisRun = g, queueMicrotask(() => {
      this.gateSnapshotThisRun = void 0;
    }), g;
  }
  managedConfigPolicyGateFields() {
    let e = this.policyGateSnapshot();
    return {
      policy_ineligible_reason: ue(e.ineligibleReason),
      policy_eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
      policy_cache_age_ms: e.cacheAgeMs,
      policy_would_fail_closed: e.wouldFailClosed,
      policy_live_verdict: e.liveVerdict,
      policy_load_state: c(e.loadState),
      policy_error_code: ue(e.loadErrorCode),
      policy_credential_state: ue(e.loadCredentialState)
    };
  }
  logCacheStateAtFirstPrompt() {
    if (this.firstPromptStateLogged) return;
    this.firstPromptStateLogged = !0;
    let e = this.policyGateSnapshot(),
      error_reporting_gate = c(aDr());
    i("tengu_policy_limits_cache_state_at_first_prompt", {
      eligible: e.eligible,
      ineligible_reason: ue(e.ineligibleReason),
      eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
      has_cache: e.hasCache,
      cache_age_ms: e.cacheAgeMs,
      would_fail_closed: e.wouldFailClosed,
      live_verdict: e.liveVerdict,
      token_source: c(Ue()),
      ...Ge(),
      ms_since_startup: Date.now() - ke,
      load_state: c(e.loadState),
      startup_fetch_error_code: ue(e.loadErrorCode),
      startup_credential_state: ue(e.loadCredentialState),
      startup_await_result: c(e.awaitResult),
      error_reporting_gate: error_reporting_gate
    });
  }
  async load({
    startupAwaited = !1
  } = {}) {
    return this.loadFor("load", startupAwaited);
  }
  async loadFor(e, r = !1) {
    if (this.used = !0, this.ensureCredentialWatch(), C_() && !this.loadingCompletePromise) this.loadingCompletePromise = new Promise(o => {
      this.loadingCompleteResolve = o;
    });
    let loadingCompleteResolve = this.loadingCompleteResolve;
    try {
      if (await this.fetchAndLoad("policy_limits_load", e, r), C_()) this.startBackgroundPolling();
    } finally {
      if (loadingCompleteResolve) {
        if (loadingCompleteResolve(), this.loadingCompleteResolve === loadingCompleteResolve) {
          if (this.loadingCompleteResolve = null, this.loadingTimeoutId) clearTimeout(this.loadingTimeoutId), this.loadingTimeoutId = null;
        }
      }
    }
  }
  async refresh({
    observedBoundary = !1
  } = {}) {
    this.used = !0, this.stop(), this.ensureCredentialWatch(), this.initializeLoadingPromise();
    let r = C_();
    if (observedBoundary) await this.removeUnstampedBody();else if (!(await this.deleteCacheFile())) t("Policy limits: could not remove the previous account's cache; disk adoption stays suppressed");
    if (this.dropUnconfirmedSessionCache(), !r) return;
    await this.loadFor("login_refresh"), t("Policy limits: Refreshed after auth change");
  }
  async clearCache() {
    if (this.used = !0, this.stop(), this.verdictlessEpisode = null, this.ensureCredentialWatch(), !(await this.deleteCacheFile())) t("Policy limits: could not remove the previous account's cache; disk adoption stays suppressed");
    this.dropUnconfirmedSessionCache();
  }
  recordFetchOutcome(e, r, s, o, n) {
    if (this.sessionGeneration === e && this.cacheClearEpoch === r) kGn(s, o, n);
  }
  staleFallbackSource() {
    if (CGn()) return v0();
    return KLt() ?? v0();
  }
  dropUnconfirmedSessionCache() {
    if (v0() !== null && this.serverConfirmedGeneration !== this.sessionGeneration) VLt(null);
  }
  async deleteCacheFile() {
    if (this.cacheClearEpoch++, Phe()) return !1;
    if (sFe(await rFe(Pw())), !(await this.removeBodyLeavingStamp())) return !1;
    let r = await rFe(Pw());
    if (r.kind === "unusable") return !0;
    let s = hGn(r, $cn());
    if (s.seen.length === 0 && !s.incomplete) await dIo(Pw());else await _Gn(Pw(), cIo(s));
    return !0;
  }
  recordVerdictPrincipal(e) {
    if (e === null || re(e)) {
      if (this.verdictPrincipalIdentity = e === null ? null : Ble(e), this.verdictPrincipalKind = e === null ? null : e.kind, this.verdictKey = e === null ? null : z(e), e !== null) this.askedKey = null;
    } else this.verdictKey = z(e);
    this.ensureCredentialWatch(), this.onCredentialMayHaveChanged();
  }
  ensureCredentialWatch() {
    if (this.stopCredentialWatch === null) this.stopCredentialWatch = POo(this.onCredentialMayHaveChanged);
  }
  onCredentialMayHaveChanged = () => {
    if (this.principalCheckQueued) return;
    this.principalCheckQueued = !0, queueMicrotask(() => {
      this.checkPrincipal().catch(e => {
        d(e);
      });
    });
  };
  async checkPrincipal(e = "credential_change") {
    let sessionGeneration_6 = this.sessionGeneration;
    try {
      if (this.verdictPrincipalIdentity === null && v0() === null && RGn() !== void 0) return "unchanged";
      try {
        await Na(this.credentials);
      } catch {}
      if (bDr() && aC() === "store") try {
        await xGn(this.storageV5, this.credentials);
      } catch (error) {
        t(`Policy limits: stored login origin or account record unreadable (${l(error)})`);
      }
    } finally {
      this.principalCheckQueued = !1;
    }
    if (this.sessionGeneration !== sessionGeneration_6) return "superseded";
    let s = MX();
    if (s !== null && !re(s)) this.scheduleUnclassifiedRecheck();
    if (!re(s)) {
      if (s !== null && v0() !== null && z(s) !== this.verdictKey && aC() === "store") {
        if (this.cyclesInFlight > 0) return this.principalCheckOwed = !0, "unchanged";
        let u = ge(s);
        if (u !== this.askedKey) return t("Policy limits: the stored login in use is not the one the loaded policy was fetched with, and its account record has not settled; asking the server with it (keyed on the token until the record settles)"), this.repollFor(s, u, "unattributed", e);
      }
      return "unchanged";
    }
    let o = Ble(s),
      n = this.verdictPrincipalKind === "token" && s.kind === "token";
    if (this.verdictPrincipalIdentity !== null && o !== this.verdictPrincipalIdentity && !n) {
      if (LMo()) {
        let u = ge(s),
          y = this.cyclesInFlight > 0;
        if (y && u === this.askedKey) return this.principalCheckOwed = !0, "unchanged";
        if (!y && u !== this.askedKey) return t(`Policy limits: the credential now belongs to a different principal than the loaded policy; ${DMo} keeps the loaded verdict while the new principal's policy is fetched`), i("tengu_policy_limits_principal_changed", {
          next_kind: c(s.kind),
          reason: c("identity_kept")
        }), this.askedKey = u, this.fetchAcrossBoundaryKeepingVerdict(e).catch(P => d(P)), "changed";
      }
      return t("Policy limits: the credential now belongs to a different principal than the loaded policy; reloading as an account change"), i("tengu_policy_limits_principal_changed", {
        next_kind: c(s.kind),
        reason: c("identity")
      }), this.refresh({
        observedBoundary: !0
      }).catch(u => d(u)), "changed";
    }
    if (this.cyclesInFlight > 0) return this.principalCheckOwed = !0, "unchanged";
    let h = z(s),
      g = ge(s);
    if (g === this.askedKey) return "unchanged";
    if (this.verdictPrincipalIdentity === null) {
      if (v0() === null) {
        if (!C_() || this.loadingCompleteResolve !== null) return "unchanged";
        return this.askedKey = g, this.releaseLoadingPromise(), this.initializeLoadingPromise(), this.loadFor(e).catch(u => d(u)), "started";
      }
      return this.repollFor(s, g, "unattributed", e);
    }
    if (h !== this.verdictKey) return t("Policy limits: a new bearer for the loaded policy (a declared organization's new bearer, one keyed on itself replacing another, a healed store); keeping the verdict and re-polling"), this.repollFor(s, g, s.bearerDigest !== void 0 || n ? "bearer" : "reclassified", e);
    return "unchanged";
  }
  scheduleUnclassifiedRecheck() {
    if (this.unclassifiedRecheckTimer !== null) return;
    this.unclassifiedRecheckTimer = setTimeout(() => {
      this.unclassifiedRecheckTimer = null, this.onCredentialMayHaveChanged();
    }, _t), this.unclassifiedRecheckTimer.unref?.();
  }
  repollFor(e, r, s, o) {
    return this.askedKey = r, i("tengu_policy_limits_principal_changed", {
      next_kind: c(e.kind),
      reason: c(s)
    }), this.fetchAndLoad("policy_limits_poll", o).catch(n => d(n)), "repolled";
  }
  async fetchAcrossBoundaryKeepingVerdict(e) {
    let sessionGeneration_7 = this.sessionGeneration,
      verdictPrincipalIdentity = this.verdictPrincipalIdentity;
    qLt(), Yct(), this.oauthRefreshLatch.attempted = !1, this.cyclesInFlight++;
    try {
      if (await this.removeUnstampedBody().catch(o => d(o)), this.sessionGeneration === sessionGeneration_7) await this.fetchAndLoad("policy_limits_poll", e).catch(o => d(o));
    } finally {
      this.endCycle(sessionGeneration_7);
    }
    if (this.sessionGeneration !== sessionGeneration_7 || this.verdictPrincipalIdentity !== verdictPrincipalIdentity) return;
    t("Policy limits: the new principal's fetch installed nothing; dropping the previous principal's verdict as an account change"), await this.refresh({
      observedBoundary: !0
    });
  }
  async poll(e = "hourly_poll") {
    if (!C_()) return;
    let r = v0(),
      s = r ? b(r) : null;
    try {
      if ((await this.checkPrincipal(e)) !== "unchanged") return;
      if (this.cyclesInFlight > 0) return;
      await this.fetchAndLoad("policy_limits_poll", e);
      let o = v0();
      if ((o ? b(o) : null) !== s) t("Policy limits: Changed during background poll");
    } catch {}
  }
  startBackgroundPolling() {
    if (this.used = !0, this.poller !== null) return;
    if (!C_()) return;
    if (this.poller = HLt(() => void this.poll(), it, {
      unref: !0
    }), !this.cleanupRegistered) this.cleanupRegistered = !0, gt(() => this.stopBackgroundPolling());
  }
  stopBackgroundPolling() {
    this.poller?.[Symbol.dispose](), this.poller = null, this.resetAcceleratedRecovery();
  }
}
class UPo {
  client = void 0;
}
var b2o = new q(() => new UPo());
function _e() {
  return b2o.of(j().host);
}
function w() {
  let e = _e();
  return e.client ??= new YMr(), e.client;
}
function XMr(e) {
  let r = _e();
  if (r.client === void 0) {
    r.client = new YMr(e);
    return;
  }
  let s = r.client.adoptStartupServices(e);
  switch (s) {
    case "nothing to adopt":
      t("Policy limits: default client already constructed; start-up composition skipped");
      return;
    case "already used":
      t("Policy limits: start-up composition came after the bare default client was used; it keeps running without the backend and credentials store", {
        level: "warn"
      }), i("tengu_policy_limits_late_composition", {});
      return;
    case "already composed":
      t("Policy limits: default client already composed; later start-up composition skipped");
      return;
    case "adopted":
      t("Policy limits: start-up services adopted by the default client");
      return;
    default:
  }
}
function f6o(e) {
  w().recordStartupAwaitResult(e);
}
async function lGn() {
  let since = performance.now(),
    r;
  try {
    let s = w();
    s.ensureLoadRequested({
      startupAwaited: !0
    }), r = await s.awaitColdStartVerdict();
  } catch (error) {
    d(error), r = "timed_out";
  }
  return Vct("policy", r, {
    since: since
  }), r;
}
function JMr() {
  return w().coldStartTimedOut;
}
function QMr() {
  return w().coldStartVerdictWait;
}
function cGn() {
  Vct("policy", "not_awaited");
  try {
    if (C_()) w().ensureLoadRequested({
      startupAwaited: !1
    });
  } catch (error) {
    d(error);
  }
}
async function zct() {
  let since_2 = performance.now();
  try {
    if (!Ehe()) return cGn(), "skipped";
  } catch (error) {
    return d(error), Vct("policy", "timed_out", {
      since: since_2
    }), "timed_out";
  }
  return lGn();
}
function m6o() {
  return w();
}
async function g6o() {
  let client = _e().client;
  if (client !== void 0) await client._settleCyclesForTesting();
}
function h6o() {
  w().stop(), Ncn(), _e().client = void 0, jNo(), yDr();
}
function ZMr() {
  w().initializeLoadingPromise();
}
function jb() {
  return w().waitForLoad();
}
function eDr() {
  w().logCacheStateAtFirstPrompt();
}
function y6o(e) {
  return w().admitPrefetched(e);
}
function tDr(e = {}) {
  return w().load(e);
}
function NLt() {
  return w().refresh();
}
function nDr() {
  return w().clearCache();
}
function _6o() {
  w().startBackgroundPolling();
}
function b6o() {
  w().stopBackgroundPolling();
}
function S6o() {
  w().stop();
}
var _t = SGn + 1000;
function re(e) {
  return e !== null && e.unclassified !== !0;
}
function z(e) {
  let r = Ble(e);
  return e.bearerDigest === void 0 ? r : `${r}:${e.bearerDigest}`;
}
function vt() {
  let e = MX();
  return e === null ? null : z(e);
}
function ge(e) {
  let r = un()?.accessToken;
  return `${z(e)}#${r ? Ahe(r) : ""}`;
}
export { p6o, $Po, aGn, _2o, Ehe, qMr, KMr, YMr, UPo, b2o, XMr, f6o, lGn, JMr, QMr, cGn, zct, m6o, g6o, h6o, ZMr, jb, eDr, y6o, tDr, NLt, nDr, _6o, b6o, S6o };