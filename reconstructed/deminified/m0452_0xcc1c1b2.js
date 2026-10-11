// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j, di, BY, jY, Gm } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { te, l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { gt, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { $D, d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i, Ls } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { Fle } from "B:/~BUN/root/chunk-gksrzz5s.js";
import { sIo, iIo, aIo } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { XPo, JPo, QPo, ZPo } from "B:/~BUN/root/chunk-1724zw97.js";
import { o, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
function k(e, n, a = {}) {
  let r = setInterval(e, n);
  if (a.unref) r.unref?.();
  return {
    [Symbol.dispose]: () => clearInterval(r)
  };
}
var z = 3;
function W() {
  let e = x("tengu_zippy_gosling", 0);
  return typeof e === "number" && Number.isFinite(e) ? e : 0;
}
function HLt(e, n, a = {}) {
  let r = 0,
    s = null,
    p = null,
    _ = k(S, n, a);
  function g() {
    if (s?.(), s = null, p !== null) clearTimeout(p), p = null;
  }
  function h() {
    r = 0, g(), e();
  }
  function S() {
    let C = W(),
      R = Math.max(Gm(), jY() ?? 0);
    if (!(C > 0 && !Fle() && Date.now() - R > C) || r >= z) {
      h();
      return;
    }
    r++, s ??= BY(() => {
      p ??= setTimeout(() => {
        _[Symbol.dispose](), _ = k(S, n, a), h();
      }, 0);
    });
  }
  return {
    [Symbol.dispose]: () => {
      _[Symbol.dispose](), g();
    }
  };
}
function Gct(e) {
  let n = e?.response?.data?.error;
  if (!n || typeof n !== "object") return {};
  let a = typeof n.type === "string" ? n.type : void 0,
    r = n.details?.error_code,
    s = typeof r === "string" ? r : typeof n.error_code === "string" ? n.error_code : typeof n.code === "string" ? n.code : void 0,
    p = typeof n.message === "string" ? n.message : void 0,
    serverAuthDenial = s === void 0 && p !== void 0 && (a === "authentication_error" || a === "permission_error") ? Y(p) : void 0;
  return {
    serverErrorType: a === void 0 ? void 0 : iIo.includes(a) ? a : "other",
    serverErrorCode: s === void 0 ? void 0 : aIo.includes(s) ? s : "other",
    ...(serverAuthDenial !== void 0 && {
      serverAuthDenial: serverAuthDenial
    })
  };
}
function Y(e) {
  if (e.startsWith("Organization access has been revoked")) return "org_access_revoked";
  if (e.startsWith("Workspace access has been revoked")) return "workspace_revoked";
  if (/^OAuth (?:access )?token has been revoked\b/.test(e)) return "token_revoked";
  if (/^OAuth (?:access )?token has expired\b/.test(e)) return "token_expired";
  if (e.startsWith("OAuth access token is invalid") || e.startsWith("Invalid bearer token")) return "token_invalid";
  if (e.startsWith("OAuth token application has been deactivated")) return "application_deactivated";
  if (e.startsWith("Credential is invalid")) return "credential_invalid";
  return "other";
}
class D {
  settings = void 0;
  policy = void 0;
  settingsBarrier = void 0;
  policyBarrier = void 0;
  isDefaultCommand = void 0;
  openStartupBlocks = 0;
  policyGate = void 0;
  logged = !1;
  unregisterExitFlush = void 0;
}
var X = new q(() => new D());
function E(e) {
  try {
    let n = di(X);
    if (n.logged) return;
    n.unregisterExitFlush ??= gt(() => E(a => M(a, "exit"))), e(n);
  } catch (error) {
    d(te(error));
  }
}
function BPo(e) {
  E(n => {
    n.isDefaultCommand ??= e;
  });
}
function rDr(e) {
  E(n => {
    n.policyGate ??= e;
  });
}
var O = new Set(["ineligible", "superseded"]);
function Uz(e, n) {
  E(a => {
    let r = a[e];
    if (r !== void 0 && !O.has(r.source)) return;
    a[e] = {
      ...n,
      settledMs: Math.round(performance.now())
    }, A(a);
  });
}
function Vct(e, n, {
  since: since,
  supersede = !1
} = {}) {
  E(s => {
    L(s, e, n, since, supersede), A(s);
  });
}
function dGn(e, {
  supersede: supersede_2 = !1
} = {}) {
  let a = performance.now(),
    r = !1;
  return E(s => {
    s.openStartupBlocks++, r = !0;
  }), s => E(p => {
    if (!r) return;
    r = !1, p.openStartupBlocks--, L(p, e, s, a, supersede_2), A(p);
  });
}
function L(e, n, a, r, s) {
  let p = n === "settings" ? "settingsBarrier" : "policyBarrier";
  if (e[p] !== void 0 && !s) return;
  let _ = performance.now();
  e[p] = {
    result: typeof a === "function" ? a() : a,
    waitMs: r === void 0 ? 0 : Math.round(_ - r),
    crossedMs: Math.round(_)
  };
}
function Rcn() {
  let e = Promise.resolve();
  return E(n => {
    e = Ls(B, P(n, "exit")).catch(a => {
      d(te(a));
    });
  }), e;
}
function jPo() {
  E(e => M(e, "first_prompt"));
}
function A(e) {
  if (e.settings && e.policy && e.settingsBarrier && e.policyBarrier && !O.has(e.settings.source) && !O.has(e.policy.source) && e.openStartupBlocks === 0) M(e, "both_resolved");
}
var B = "tengu_managed_config_ready";
function M(e, n) {
  i(B, P(e, n));
}
function P(e, n) {
  e.logged = !0, e.unregisterExitFlush?.();
  let {
    settings: settings,
    policy: policy,
    settingsBarrier: settingsBarrier,
    policyBarrier: policyBarrier
  } = e;
  return {
    trigger: c(n),
    emitted_ms: Math.round(performance.now()),
    is_default_command: e.isDefaultCommand,
    settled_ms: settings && policy ? Math.max(settings.settledMs, policy.settledMs) : void 0,
    barrier_crossed_ms: settingsBarrier && policyBarrier ? Math.max(settingsBarrier.crossedMs, policyBarrier.crossedMs) : void 0,
    ...I("settings", settings),
    ...w("settings", settingsBarrier),
    ...I("policy", policy),
    ...w("policy", policyBarrier),
    ...J(e.policyGate)
  };
}
function J(e) {
  if (e === void 0) return {};
  try {
    return e();
  } catch (error) {
    return d(te(error)), {};
  }
}
function I(e, n) {
  return {
    [`${e}_source`]: n ? c(n.source) : c("pending"),
    [`${e}_had_cache`]: n?.hadCache,
    [`${e}_awaited`]: n?.awaited,
    [`${e}_fetch_ms`]: n?.fetchMs,
    [`${e}_settled_ms`]: n?.settledMs
  };
}
function w(e, n) {
  return {
    [`${e}_barrier`]: n ? c(n.result) : c("not_reached"),
    [`${e}_barrier_wait_ms`]: n?.waitMs
  };
}
var Z = f(() => u({
  account_uuid: o().min(1),
  organization_uuid: o().min(1)
}));
class N {
  promise = void 0;
}
var Q = new q(() => new N());
function ee() {
  return Q.of(j().host);
}
function Acn(e) {
  let n = ee();
  return n.promise ??= ne(e), n.promise;
}
async function ne({
  bearerKind: bearerKind,
  attributeBearer: attributeBearer,
  featureValue: featureValue
}) {
  let bearer = "none";
  try {
    if (bearer = bearerKind(), Ie() !== "firstParty") return {
      state: "unresolved",
      bearer: bearer,
      reason: "not_first_party"
    };
    if (bearer !== "claude_ai_oauth" && bearer !== "oauth_token_env" && bearer !== "oauth_token_fd") return {
      state: "not_applicable",
      bearer: bearer
    };
    if ($D()) return {
      state: "unresolved",
      bearer: bearer,
      reason: "telemetry_disabled"
    };
    if (!featureValue("tengu_brass_lantern", !0)) return {
      state: "unresolved",
      bearer: bearer,
      reason: "disabled"
    };
    let s = await attributeBearer();
    if (!s.sent) return {
      state: "unresolved",
      bearer: bearer,
      reason: s.reason
    };
    let {
      latencyMs: latencyMs,
      outcome: outcome
    } = s;
    if (!outcome.ok) return {
      state: "unresolved",
      bearer: bearer,
      reason: outcome.reason,
      latencyMs: latencyMs,
      ...(outcome.status !== void 0 && {
        httpStatus: outcome.status
      })
    };
    let g = Z().safeParse(outcome.data);
    if (!g.success) return {
      state: "unresolved",
      bearer: bearer,
      reason: "bad_response",
      latencyMs: latencyMs
    };
    return {
      state: "resolved",
      bearer: bearer,
      orgUuid: g.data.organization_uuid,
      accountUuid: g.data.account_uuid,
      latencyMs: latencyMs
    };
  } catch (error) {
    return t(`Signed cache: live identity unresolved - ${l(error)}`, {
      level: "warn"
    }), {
      state: "unresolved",
      bearer: bearer,
      reason: "error"
    };
  }
}
var re = {
    begin: "-----SIGNED-CACHE-ROOTS-BEGIN-----",
    roots: [],
    end: "-----SIGNED-CACHE-ROOTS-END-----"
  },
  roots = re.roots;
var roots_2 = Object.freeze(roots.map(item => Object.freeze({
  ...item
})));
async function H({
  kind: e,
  cachePath: cachePath,
  bodySha: bodySha,
  orgUuid: r,
  accountUuid: s,
  workspaceUuid: p,
  identity: identity
}) {
  try {
    let g;
    identity.then(T => {
      g = T;
    }, () => {});
    let h = {
        typ: e,
        aud: r,
        sub: s,
        ws: p
      },
      [S, highWaterIat] = await Promise.all([JPo(cachePath), QPo(cachePath, h)]),
      nowMs = Date.now(),
      m = XPo({
        jws: S?.jws,
        kind: e,
        orgUuid: r,
        accountUuid: s,
        workspaceUuid: p,
        bodySha: bodySha,
        highWaterIat: highWaterIat,
        nowMs: nowMs,
        roots: roots_2
      });
    if (m.result === "valid" && m.issuedAt !== void 0) await ZPo(cachePath, h, Math.min(m.issuedAt, Math.floor(nowMs / 1000)));
    let b = g;
    if (i("tengu_signed_cache_shadow", {
      cache: c(e),
      result: c(m.result),
      age_s: m.ageSeconds,
      cert_days_left: m.certDaysLeft,
      has_org_uuid: r !== void 0,
      has_account_uuid: s !== void 0,
      has_workspace_uuid: p !== void 0,
      ws_unanchored: m.wsUnanchored === !0,
      ...(b ? G(b, r, s) : {
        identity_state: y("pending")
      })
    }), !b) identity.then(T => {
      try {
        i("tengu_signed_cache_identity", {
          cache: c(e),
          ...G(T, r, s)
        });
      } catch {}
    }, () => {});
  } catch (error) {
    t(`Signed cache: shadow check failed (${e}) - ${l(error)}`);
  }
}
function G(e, n, a) {
  return {
    identity_state: c(e.state),
    identity_reason: ue(e.state === "unresolved" ? e.reason : void 0),
    identity_http_status: e.state === "unresolved" ? e.httpStatus : void 0,
    identity_latency_ms: e.state === "not_applicable" ? void 0 : e.latencyMs,
    identity_disagrees_with_config: e.state === "resolved" && (n !== void 0 && e.orgUuid !== n || a !== void 0 && e.accountUuid !== a),
    bearer_kind: c(e.bearer)
  };
}
function xcn({
  kind: kind,
  cachePath: cachePath_2,
  bodySha: bodySha_2,
  readStoredAccount: readStoredAccount,
  resolveLiveIdentity: resolveLiveIdentity
}) {
  try {
    let p = readStoredAccount(),
      identity_2;
    try {
      identity_2 = resolveLiveIdentity();
    } catch {
      identity_2 = Promise.resolve({
        state: "unresolved",
        bearer: "none",
        reason: "error"
      });
    }
    H({
      kind: kind,
      cachePath: cachePath_2,
      bodySha: bodySha_2,
      orgUuid: p?.organizationUuid || void 0,
      accountUuid: p?.accountUuid || void 0,
      workspaceUuid: p?.workspaceUuid || void 0,
      identity: identity_2
    }).catch(() => {});
  } catch {}
}
var oe = new Set(["oauth_not_allowed_for_organization", "organization_disabled", "organization_on_hold", "claude_code_key_creator_not_member", "ip_not_in_allowed_range"]),
  ie = new Set(["org_access_revoked", "workspace_revoked", "application_deactivated"]),
  ae = new Set(["token_expired", "token_revoked", "token_invalid", "credential_invalid"]),
  de = new Set(["restricted_regime_endpoint", "oauth_scope_insufficient"]),
  se = new Set(["known_dead_refresh_token", "no_refresh_token", "account_on_hold", "not_refreshable"]),
  V = new Set(["lock_timeout", "lock_busy", "lock_compromised", "lock_error", "refresh_failed"]),
  ce = new Set(["refreshed", "not_needed"]);
function Pcn(e) {
  let {
      errorCode: errorCode,
      httpStatus: httpStatus,
      serverErrorType: serverErrorType,
      serverErrorCode: serverErrorCode,
      serverAuthDenial: serverAuthDenial_2,
      authUnavailableReason: authUnavailableReason,
      authType: authType,
      credentialOrigin: credentialOrigin
    } = e,
    S = authType === void 0 || authType === "oauth",
    C = S ? e.tokenRefreshOutcome : void 0,
    R = S ? e.forcedRefreshOutcome ?? e.tokenRefreshOutcome : void 0;
  if (errorCode === void 0) return "unknown";
  if (serverErrorCode !== void 0 && oe.has(serverErrorCode) || serverAuthDenial_2 !== void 0 && ie.has(serverAuthDenial_2)) return "dead";
  if (serverErrorCode !== void 0 && de.has(serverErrorCode)) return "live";
  if (errorCode === "network_error" || errorCode === "timeout" || errorCode === "parse_failed" || errorCode === "spurious_304" || errorCode === "request_failed" && httpStatus === void 0 && e.noResponse === !0) return "live";
  if (httpStatus === void 0) {
    if (authUnavailableReason === "no_oauth_token") return C !== void 0 && V.has(C) ? "unknown" : "dead";
    return "unknown";
  }
  if (httpStatus >= 500 || httpStatus === 429 || serverErrorType === "rate_limit_error") return "live";
  if (httpStatus === 404 || httpStatus === 304) return "live";
  if (httpStatus === 401) {
    if (credentialOrigin === "proxy") return "unknown";
    if (authType === "api_key") return credentialOrigin === "helper_key" ? "unknown" : "dead";
    let m = serverErrorType === "authentication_error" || serverAuthDenial_2 !== void 0 && ae.has(serverAuthDenial_2);
    if (credentialOrigin === "injected_token" && m) switch (e.injectedTokenRecovery) {
      case "none":
        return "dead";
      case "sdk_host_refresh":
      case "runner_rotation":
        return "live";
      case void 0:
        break;
    }
    if (R === void 0) return "unknown";
    if (se.has(R)) return "dead";
    if (credentialOrigin === "injected_token") return "unknown";
    if (V.has(R) || ce.has(R)) return "live";
    return "unknown";
  }
  return "unknown";
}
var fe = new Set(sIo);
function le(e) {
  return fe.has(e);
}
var pe = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "SELF_SIGNED_CERT_IN_CHAIN", "DEPTH_ZERO_SELF_SIGNED_CERT", "CERT_HAS_EXPIRED", "CERT_NOT_YET_VALID", "CERT_UNTRUSTED", "CERT_REJECTED", "CERT_SIGNATURE_FAILURE", "ERR_TLS_CERT_ALTNAME_INVALID", "HOSTNAME_MISMATCH"]),
  _e = new Set(["ECONNABORTED", "ERR_CANCELED"]);
function K(e) {
  if (e === void 0) return;
  if (le(e)) return e;
  if (pe.has(e)) return "CERT_ERROR";
  if (_e.has(e)) return "ABORTED";
  return;
}
function A6e(e) {
  let n = e !== null && typeof e === "object" && "cause" in e ? e.cause : void 0;
  return K(v(e)) ?? K(v(n)) ?? "OTHER";
}
export { HLt, Gct, BPo, rDr, Uz, Vct, dGn, Rcn, jPo, Acn, xcn, Pcn, A6e };