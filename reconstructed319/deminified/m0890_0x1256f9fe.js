// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { pi } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Lr, Ut, Ls } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Te, Yc } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { GHs as reset, Pte as memoizedReason, Jy, Lpe, Pw } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Bgt, WYi, Qa, Tg, La, uh, Vf, Mfe, C$t, hn, ER, wvo, eIs, YRe, Mz, ms, lH, dH } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { IAr, _qi } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { YI, QKi, aRs, LQe as kickPolicy, dh as policySettled, D$n } from "B:/~BUN/root/chunk-rc0vwsyy.js";
import { MNn, Q1i } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { hoe } from "B:/~BUN/root/chunk-ybkgfvgz.js";
import { bqt as pendingConsentDialog } from "B:/~BUN/root/chunk-83f94s4f.js";
import { RP as settingsSettled, x6e } from "B:/~BUN/root/chunk-7e6w46ha.js";
import { Tst, ZBo, e1o } from "B:/~BUN/root/chunk-xxsb2zge.js";
import { gL } from "B:/~BUN/root/chunk-q82am8wz.js";
import { X$t, V1n } from "B:/~BUN/root/chunk-h4ga5e8b.js";
import { Ca } from "B:/~BUN/root/chunk-65zedn3n.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
function K(e, n) {
  let tier = wvo(n.tier, n.tierVerifiedAtMs, e.graceTtlHours, n.nowMs ?? Date.now());
  if (tier !== null || n.tier === null) return {
    tier: tier,
    credentialShape: n.credentialShape
  };
  return {
    tier: null,
    credentialShape: n.credentialShape === "stored_login" ? "untiered_login" : n.credentialShape
  };
}
function vke(e, n) {
  if (n.provider !== "firstParty") return {
    candidate: !1,
    exclusion: "provider"
  };
  if (!n.firstPartyBaseUrl) return {
    candidate: !1,
    exclusion: "base_url"
  };
  if (n.authRecoveryCommand) return {
    candidate: !1,
    exclusion: "auth_command"
  };
  let r = K(e, n);
  switch (r.credentialShape) {
    case "stored_login":
    case "untiered_login":
      break;
    case "api_key":
    case "env_token_only":
    case "key_helper_only":
    case "none":
      return {
        candidate: !1,
        exclusion: "credential_shape"
      };
  }
  let tier_2 = X$t(r.tier) || r.credentialShape !== "untiered_login" || n.storedLoginOrigin !== !0 ? r.tier : e.plans[0] ?? "team";
  if (!X$t(tier_2)) return {
    candidate: !1,
    exclusion: "tier_unknown"
  };
  if (!e.enabled) return {
    candidate: !1,
    exclusion: "flag_off"
  };
  if (!e.plans.includes(tier_2)) return {
    candidate: !1,
    exclusion: "tier_not_in_plans"
  };
  if (n.hostToken === !0 && !e.hostTokens) return {
    candidate: !1,
    exclusion: "host_token"
  };
  if (!e1o(e, n.bucket)) return {
    candidate: !1,
    exclusion: "rollout_percent"
  };
  return {
    candidate: !0,
    tier: tier_2
  };
}
var Y = 3600000;
function E2r(e, n) {
  if (e.exemptReasons.includes(n)) return !0;
  return n === "refused_not_entitled" && !e.refuseNotEntitled;
}
function Q(e, n) {
  if (V1n(e.reason) === "fetched") return "fetched";
  if (!e.hasAdmittedCache) return "no";
  if (e.admittedCacheAgeMs === void 0 || e.admittedCacheAgeMs < 0) return "no";
  return e.admittedCacheAgeMs <= n * Y ? "cached" : "no";
}
function Est(e) {
  let {
      flag: flag,
      candidacy: candidacy,
      surface: surface
    } = e,
    blockedMs = e.blockedMs ?? 0;
  if (!flag.enabled || !candidacy.candidate) return {
    verdict: "pass",
    blockedMs: blockedMs,
    surface: surface
  };
  let c = [["policy", e.policy], ["settings", e.settings]],
    u = !1;
  for (let [resource, m] of c) {
    if (V1n(m.reason) !== "refused") continue;
    if (E2r(flag, m.reason)) {
      u = !0;
      continue;
    }
    return {
      verdict: "refused",
      reason: m.reason,
      resource: resource,
      blockedMs: blockedMs,
      surface: surface
    };
  }
  let d = !1,
    g;
  for (let [l, m] of c) {
    let h = Q(m, flag.graceTtlHours);
    if (h === "fetched") continue;
    if (h === "cached") {
      d = !0;
      continue;
    }
    if (E2r(flag, m.reason)) {
      u = !0;
      continue;
    }
    if (g === void 0 || g[1].reason === "unavailable_pending" && m.reason !== "unavailable_pending") g = [l, m];
  }
  if (g !== void 0) return {
    verdict: "blocked",
    reason: g[1].reason,
    resource: g[0],
    blockedMs: blockedMs,
    surface: surface
  };
  return {
    verdict: u ? "pass_exempt" : d ? "pass_cached" : "pass",
    blockedMs: blockedMs,
    surface: surface
  };
}
function X(e) {
  if (e.hasOAuthToken && e.oauthEffective) return e.subscriptionType === null ? "untiered_login" : "stored_login";
  if (e.apiKeyEnv) return "api_key";
  if (e.envToken) return "env_token_only";
  if (e.keyHelper) return "key_helper_only";
  return "none";
}
function y() {
  try {
    switch (La().source) {
      case "claude.ai":
        return Qa();
      case "CCR_OAUTH_TOKEN_FILE":
      case "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR":
        return Qa() && ER();
      default:
        return !1;
    }
  } catch {
    return !0;
  }
}
function Z() {
  try {
    return Qa();
  } catch {
    return !1;
  }
}
function E() {
  let hasOAuthToken = Vf();
  return X({
    hasOAuthToken: hasOAuthToken,
    oauthEffective: hasOAuthToken && Z(),
    subscriptionType: Mfe(),
    apiKeyEnv: !!i.ANTHROPIC_API_KEY,
    envToken: Tg() !== void 0,
    keyHelper: uh() !== void 0
  });
}
function WEt(e) {
  let credentialShape = E(),
    storedLoginOrigin = y();
  return {
    provider: Te(),
    firstPartyBaseUrl: Yc(),
    authRecoveryCommand: e.authRecoveryCommand,
    tier: Mfe(),
    credentialShape: credentialShape,
    storedLoginOrigin: storedLoginOrigin,
    hostToken: credentialShape === "stored_login" && !storedLoginOrigin,
    tierVerifiedAtMs: C$t(),
    nowMs: Date.now(),
    bucket: ZBo(dH())
  };
}
function _(e, n) {
  let r = e?.[n];
  return typeof r === "string" ? r : void 0;
}
function M(e, n) {
  let r = e?.[n];
  return typeof r === "number" ? r : void 0;
}
function ee(e, n) {
  let r = M(n, "policy_cache_age_ms"),
    hasAdmittedCache = e?.hadCache === !0 || e?.source === "cache",
    s = {
      hasAdmittedCache: hasAdmittedCache,
      admittedCacheAgeMs: hasAdmittedCache ? r : void 0
    };
  if (_(n, "policy_ineligible_reason") !== void 0 || e?.source === "ineligible") return {
    ...s,
    reason: "not_attempted"
  };
  let c = _(n, "policy_load_state");
  if (c === "succeeded" || n?.policy_live_verdict === !0 || e?.source === "fetch") return {
    ...s,
    reason: "ok"
  };
  if (e?.source === "none") return {
    ...s,
    reason: "none_configured"
  };
  if (c === "in_flight" || c === "not_started" || c === void 0 && e === void 0) return {
    ...s,
    reason: "unavailable_pending"
  };
  let u = _(n, "policy_server_error_code"),
    d = _(n, "policy_server_auth_denial"),
    httpStatus = M(n, "policy_http_status");
  return {
    ...s,
    reason: S(_(n, "policy_error_code"), _(n, "policy_credential_state"), httpStatus, _(n, "policy_server_error_type"), IAr.find(item => item === u), _qi.find(item => item === d)),
    httpStatus: httpStatus
  };
}
function C9n(e) {
  return e === 429 || e === 408 || e === 409 || e === 425;
}
function F(e) {
  return e === "other" ? void 0 : e;
}
function H(e, n, r) {
  return e === "dead" && eIs(n, r) !== "organization";
}
function T2r(e, n, r, o) {
  if (F(n) === void 0) return;
  let s = eIs(r, o);
  if (s === "organization") return "refused_not_entitled";
  if (s === "credential") return "refused_credential";
  if (e === 404) return "none_configured";
  if (e === 401 || e === void 0) return;
  if (e === 403) return "refused_not_entitled";
  if (C9n(e) || e >= 500) return;
  return "unavailable_server";
}
function S(e, n, r, o, s, c) {
  if (H(n, s, c)) return "refused_credential";
  let u = F(o),
    d = T2r(r, u, s, c);
  if (d !== void 0 && (e === "auth_failed" || e === "request_failed")) return d;
  switch (e) {
    case "auth_failed":
      if (n === "dead") return "refused_credential";
      if (r === 401) return "unavailable_credential_refresh";
      if (r === 403) return "blocked_by_intermediary";
      if (r === void 0 && u === void 0) return n === void 0 ? "client_no_credentials" : "unavailable_credential_refresh";
      return "refused_not_entitled";
    case "timeout":
      return "unavailable_timeout";
    case "network_error":
      return "unavailable_connect";
    case "request_failed":
      if (C9n(r)) return "unavailable_rate_limited";
      if (r === 304 || r === 404) return "blocked_by_intermediary";
      return r === void 0 ? "unavailable_connect" : "unavailable_server";
    case "spurious_304":
    case "stale_tunnel_credential":
      return "unavailable_server";
    case "parse_failed":
      return "blocked_by_intermediary";
    case "session_changed":
    case void 0:
      return "unavailable_pending";
    default:
      return "client_error";
  }
}
function w() {
  let present = !1;
  try {
    present = Pw() !== null;
  } catch {
    present = !1;
  }
  let ageMs;
  try {
    ageMs = present ? Q1i() : void 0;
  } catch {
    ageMs = void 0;
  }
  return {
    present: present,
    ageMs: ageMs
  };
}
var te = new Set(["sandboxed_entrypoint", "claude_tag", "hermetic_remote_session"]);
function A(e, n, r, o = {
  present: !1,
  ageMs: void 0
}, s = !1) {
  let hasAdmittedCache_2 = o.present || e?.hadCache === !0 || e?.source === "cache" || n?.state === "stale_cache",
    u = {
      hasAdmittedCache: hasAdmittedCache_2,
      admittedCacheAgeMs: hasAdmittedCache_2 ? o.ageMs : void 0
    },
    d = r ?? (n?.state === "ineligible" ? n.reason : void 0);
  if (d !== void 0 || e?.source === "ineligible") return {
    ...u,
    reason: d !== void 0 && te.has(d) && !s ? "not_required" : "not_attempted"
  };
  if (n?.state === "ok") return {
    ...u,
    reason: n.hasSettings ? "ok" : "none_configured"
  };
  if (e?.source === "fetch") return {
    ...u,
    reason: "ok"
  };
  if (e?.source === "none") return {
    ...u,
    reason: "none_configured"
  };
  if (n?.state === "failed" || n?.state === "stale_cache") return {
    ...u,
    reason: ne(n.failure.errorKind, n.failure.httpStatus, n.failure.serverErrorType, n.failure.credentialState, n.failure.serverErrorCode, n.failure.serverAuthDenial, n.failure.noResponse),
    httpStatus: n.failure.httpStatus
  };
  if (e?.source === "error" || e?.source === "rejected") return {
    ...u,
    reason: "client_error"
  };
  return {
    ...u,
    reason: "unavailable_pending"
  };
}
function ne(e, n, r, o, s, c, u) {
  if (H(o, s, c)) return "refused_credential";
  let d = F(r),
    l = T2r(n ?? (e === "http_401" ? 401 : e === "http_403" ? 403 : void 0), d, s, c);
  if (l !== void 0 && (e === "http_401" || e === "http_403" || e === "http_4xx")) return l;
  switch (e) {
    case "http_401":
      return o === "dead" ? "refused_credential" : "unavailable_credential_refresh";
    case "profile_credential_error":
      return "refused_credential";
    case "http_403":
      return o === "dead" ? "refused_credential" : "blocked_by_intermediary";
    case "parse_error":
      return "blocked_by_intermediary";
    case "http_4xx":
      if (C9n(n)) return "unavailable_rate_limited";
      return "blocked_by_intermediary";
    case "ruled_empty":
      return "unavailable_settings_unusable";
    case "http_5xx":
      return "unavailable_server";
    case "timeout":
      return "unavailable_timeout";
    case "network_error":
      return "unavailable_connect";
    case "no_auth_available":
    case "api_key_not_sent":
      return "client_no_credentials";
    case "unknown_error":
      if (n === 304) return "blocked_by_intermediary";
      return u === !0 ? "unavailable_connect" : "client_error";
    default:
      return "client_error";
  }
}
function re() {
  return ye() ? "noninteractive" : "startup";
}
function ie(e, n, r, o, s, c = "fallback", u = {
  present: !1,
  ageMs: void 0
}, d = !1, g) {
  let l = vke(e, n),
    candidacy_2 = vke({
      ...e,
      enabled: !0,
      plans: ["team", "enterprise"],
      percent: 100
    }, n),
    policy = ee(r.policy, r.policyGateFields),
    settings = A(r.settings, o, s, u, d),
    P = {
      flag: {
        ...e,
        enabled: !0,
        plans: ["team", "enterprise"],
        percent: 100
      },
      candidacy: candidacy_2,
      policy: policy,
      settings: settings,
      surface: re()
    },
    v = Est(P);
  return {
    decision: f(v.verdict),
    decision_reason: de(v.reason),
    decision_resource: de(v.resource),
    surface: f(v.surface),
    blocked_ms: 0,
    candidate_if_armed: candidacy_2.candidate,
    exclusion_if_armed: de(candidacy_2.candidate ? void 0 : candidacy_2.exclusion),
    candidate_now: l.candidate,
    exclusion_now: de(l.candidate ? void 0 : l.exclusion),
    flag_enabled: e.enabled,
    flag_source: f(c),
    flag_percent: e.percent,
    grace_ttl_hours: e.graceTtlHours,
    tier: de(ue(n.tier)),
    credential_shape: f(n.credentialShape),
    policy_reason: f(policy.reason),
    policy_has_cache: policy.hasAdmittedCache,
    policy_cache_age_ms: policy.admittedCacheAgeMs,
    settings_reason: f(settings.reason),
    settings_has_cache: settings.hasAdmittedCache,
    settings_cache_age_ms: settings.admittedCacheAgeMs,
    ...oe(P, g)
  };
}
function oe(e, n) {
  if (n === void 0) return {};
  try {
    let r = n();
    return {
      settings_stored_copy: f(r.settings.storedCopy),
      policy_stored_copy: f(r.policy.storedCopy),
      settings_live_signed: f(r.settings.liveSigned),
      policy_live_signed: f(r.policy.liveSigned),
      decision_if_strict: f(ae(e, r))
    };
  } catch (error) {
    return a(new R(`org-config gate: the signature facts threw (${YI(error)})`, "org-config gate: the signature facts threw")), {};
  }
}
function ae(e, n) {
  let r = D(e, n, !0),
    o = D(e, n, !1);
  return r === o ? r : "pending";
}
function D(e, n, r) {
  return Est({
    ...e,
    policy: L(e.policy, n.policy, r),
    settings: L(e.settings, n.settings, r)
  }).verdict;
}
function L(e, {
  storedCopy: storedCopy
}, r) {
  return storedCopy === "trusted" || storedCopy === "not_read" || storedCopy === "pending" && r ? e : {
    ...e,
    hasAdmittedCache: !1,
    admittedCacheAgeMs: void 0
  };
}
function S7s(e) {
  QKi(n => {
    let {
      flag: flag_2,
      source: source
    } = Tst();
    return ie(flag_2, WEt(e), n, Jy(), memoizedReason(), source, w(), y(), e.readSignatureFacts);
  }, e.settle === void 0 ? void 0 : ce(e.settle, se));
}
var se = 35000;
function ce(e, n) {
  return () => Promise.race([e().catch(() => {}), J(n, void 0, {
    unref: !0
  })]);
}
function ue(e) {
  switch (e) {
    case "max":
    case "pro":
    case "team":
    case "enterprise":
      return e;
    default:
      return;
  }
}
function ge(e) {
  let n = {
    hasAdmittedCache: e.hasCache,
    admittedCacheAgeMs: e.hasCache ? e.cacheAgeMs : void 0
  };
  if (!e.eligible) return {
    ...n,
    reason: "not_attempted"
  };
  let r = !e.loadFromEarlierGeneration;
  if (e.liveVerdict || r && e.loadState === "succeeded") return {
    ...n,
    reason: "ok"
  };
  let latestLoad = e.latestLoad;
  if (latestLoad !== void 0) return latestLoad.succeeded ? {
    ...n,
    reason: "ok"
  } : {
    ...n,
    reason: S(latestLoad.errorCode, latestLoad.credentialState, latestLoad.httpStatus, latestLoad.serverErrorType, latestLoad.serverErrorCode, latestLoad.serverAuthDenial),
    httpStatus: latestLoad.httpStatus
  };
  if (!r) return {
    ...n,
    reason: "unavailable_pending"
  };
  if (e.loadState === "not_started" || e.loadState === "in_flight") {
    let loadLastAttempt = e.loadLastAttempt;
    return loadLastAttempt === void 0 ? {
      ...n,
      reason: "unavailable_pending"
    } : {
      ...n,
      reason: S(loadLastAttempt.errorCode, "unknown", loadLastAttempt.httpStatus, loadLastAttempt.serverErrorType, loadLastAttempt.serverErrorCode, loadLastAttempt.serverAuthDenial),
      httpStatus: loadLastAttempt.httpStatus
    };
  }
  return {
    ...n,
    reason: S(e.loadErrorCode, e.loadCredentialState, e.loadHttpStatus, e.loadServerErrorType, e.loadServerErrorCode, e.loadServerAuthDenial),
    httpStatus: e.loadHttpStatus
  };
}
function fe() {
  return ge(aRs());
}
function GBo() {
  return A(void 0, Jy(), memoizedReason(), w(), y());
}
function W() {
  return {
    policy: fe(),
    settings: GBo()
  };
}
function z(e, n) {
  let httpStatus_2 = n === void 0 ? void 0 : e[n].httpStatus,
    o = hn()?.organizationName;
  return {
    organizationName: o === void 0 || o === null ? void 0 : Ca(o),
    httpStatus: httpStatus_2
  };
}
var N = "api.anthropic.com/api/claude_code/policy_limits and api.anthropic.com/api/claude_code/settings";
function p(e) {
  let n = e.organizationName !== void 0 ? Ca(e.organizationName).trim() : "";
  return n !== "" ? n : "Your organization";
}
function C(e) {
  return e.requestId !== void 0 ? ` Request id: ${Ca(e.requestId)}.` : "";
}
function C2r(e, n = {}) {
  if (e.verdict === "pass" || e.verdict === "pass_cached" || e.verdict === "pass_exempt") return;
  switch (e.reason) {
    case "refused_credential":
      return "Your Claude session has expired. Sign in again to continue (claude auth login).";
    case "refused_not_entitled":
      return `${p(n)} doesn't allow Claude Code for this account. Ask an admin of your organization, or sign in with a different account (claude auth login).${C(n)}`;
    case "refused_other":
      return `${p(n)} refused this session's organization settings${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus})` : ""}. Sign in again, or ask an admin of your organization.${C(n)}`;
    case "blocked_by_intermediary":
      return `Claude Code couldn't load your organization's settings: the reply came from a network proxy, not Anthropic${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus}, no request id)` : ""}. ${p(n)} requires these settings before a session can start. Ask IT to allow HTTPS to ${N}, then retry.`;
    case "unavailable_timeout":
      return `Claude Code couldn't load your organization's settings (timed out). ${p(n)} requires them before a session can start. ${G(e)} check https://status.anthropic.com if this persists.${C(n)}`;
    case "unavailable_connect":
      return `Claude Code couldn't reach Anthropic to load your organization's settings (could not connect). ${p(n)} requires them before a session can start. Check your network connection and retry; if you are on a corporate network, ask IT to allow HTTPS to ${N}.`;
    case "unavailable_server":
      return `Claude Code couldn't load your organization's settings: Anthropic returned an error${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus})` : ""}. ${p(n)} requires them before a session can start. ${G(e)} check https://status.anthropic.com if this persists.${C(n)}`;
    case "unavailable_rate_limited":
      return `Claude Code couldn't load your organization's settings: Anthropic asked it to retry shortly${n.httpStatus !== void 0 ? ` (HTTP ${n.httpStatus})` : ""}. ${p(n)} requires them before a session can start. ${G(e)} check https://status.anthropic.com if this persists.${C(n)}`;
    case "unavailable_credential_refresh":
      return e.surface === "noninteractive" ? `Claude Code couldn't verify your sign-in with Anthropic yet (its sign-in token was still being refreshed, often by another Claude Code process), so it couldn't load your organization's settings. ${p(n)} requires them before a session can start. Run the command again; if this persists, sign in again (claude auth login).${C(n)}` : `Claude Code couldn't verify your sign-in with Anthropic yet, so it couldn't load your organization's settings. ${p(n)} requires them before a session can start. ${G(e)} if this persists, sign in again (claude auth login).${C(n)}`;
    case "unavailable_pending":
      return `Claude Code is still loading your organization's settings. ${p(n)} requires them before a session can start; this usually takes a few seconds.`;
    case "unavailable_settings_unusable":
      return `Claude Code couldn't apply your organization's managed settings: none of the settings the server returned could be applied as written. ${p(n)} requires them before a session can start. Ask your administrator to fix the published settings, then retry.${C(n)}`;
    case "client_no_credentials":
    case "client_error":
      return `Claude Code couldn't load your organization's settings because of an internal error. ${p(n)} requires them before a session can start. Retry, and if this persists report it with /bug.${C(n)}`;
    case "not_attempted":
      return `Claude Code does not load your organization's settings in the mode this session was launched in, and ${p(n)} requires them before a session can start. If CLAUDE_CODE_ENTRYPOINT or a remote-session variable is set in your environment, unset it and start Claude Code again; otherwise sign in again (claude auth login).`;
    case "ok":
    case "none_configured":
    case "not_required":
    case void 0:
      return;
  }
}
function G(e) {
  switch (e.surface) {
    case "startup":
      return "Retrying;";
    case "noninteractive":
      return "Run the command again;";
    case "login":
      return "Retry shortly;";
  }
}
function xne(e) {
  return e.verdict === "blocked" || e.verdict === "refused";
}
function R9n(e) {
  return e.verdict === "refused" ? "org_config_refused" : "org_config_required_unavailable";
}
function VBo(e) {
  return e.verdict === "refused" || e.reason === "not_attempted" || e.reason === "client_no_credentials" || e.reason === "unavailable_credential_refresh";
}
function nextSettingsOutcome() {
  let dispose = () => {};
  return {
    recorded: new Promise(r => {
      dispose = Lpe(() => {
        dispose(), r();
      });
    }),
    dispose: dispose
  };
}
var me = {
  kickPolicy: kickPolicy,
  kickSettings: kickSettings,
  policySettled: policySettled,
  settingsSettled: settingsSettled,
  planReverified: () => WYi() ?? Promise.resolve(),
  pendingConsentDialog: pendingConsentDialog,
  nextSettingsOutcome: nextSettingsOutcome,
  now: () => performance.now()
};
async function pe(e, n = me) {
  let r = n.now();
  try {
    n.kickPolicy();
  } catch (error) {
    a(new R(`org-config gate: the policy kick threw (${YI(error)})`, "org-config gate: the policy kick threw"));
  }
  try {
    n.kickSettings();
  } catch (error) {
    a(new R(`org-config gate: the settings kick threw (${YI(error)})`, "org-config gate: the settings kick threw"));
  }
  await we(Promise.all([n.policySettled().catch(() => {}), n.settingsSettled().catch(() => {}), n.planReverified?.().catch(() => {})]), e);
  let o = n.pendingConsentDialog();
  if (o !== null) {
    let s = n.nextSettingsOutcome();
    try {
      await o.catch(() => {}), await we(Promise.all([n.settingsSettled().catch(() => {}), s.recorded]), e);
    } finally {
      s.dispose();
    }
  }
  return Math.max(0, Math.round(n.now() - r));
}
var Ce = new Set(["no_auth", "unsupported_subscription"]);
function _e(e, n) {
  if (n.storedLoginOrigin !== !0) return !1;
  if (n.credentialShape !== "stored_login" && n.credentialShape !== "untiered_login") return !1;
  switch (e) {
    case "no_auth":
      return !0;
    case "unsupported_subscription":
      return n.credentialShape === "untiered_login" || n.tier === null || X$t(n.tier);
    default:
      return !1;
  }
}
var j = {
    memoizedReason: memoizedReason,
    inputs: () => ({
      credentialShape: E(),
      storedLoginOrigin: y(),
      tier: Mfe()
    }),
    reset: reset
  },
  q = he({
    seen: new Set()
  }, e => {
    e.seen = new Set();
  });
function B(e = j) {
  let n = e.memoizedReason();
  if (!Ce.has(n ?? "")) return !1;
  let r = e.inputs();
  if (!_e(n, r)) return !1;
  let o = `${n}|${r.credentialShape}|${r.tier}`;
  if (q.seen.has(o)) return !1;
  return q.seen.add(o), e.reset(), t(`org-config gate: settings eligibility (${n}) predates the stored login; re-evaluating`), !0;
}
function kickSettings(e = j, n = () => x6e()) {
  if (!B(e)) return;
  n().catch(r => a(new R(`org-config gate: the settings load threw (${YI(r)})`, "org-config gate: the settings load threw")));
}
function k(e) {
  if (e.readFlag !== void 0) return {
    flag: e.readFlag(),
    source: e.readFlagSource?.() ?? "override"
  };
  return Tst();
}
function O(flag_3, flagSource, candidacy_3, surface_2) {
  return {
    decision: {
      verdict: "pass",
      blockedMs: 0,
      surface: surface_2
    },
    message: void 0,
    flag: flag_3,
    flagSource: flagSource,
    candidacy: candidacy_3,
    armed: !1,
    context: {},
    attempt: 0,
    decidedWithoutWaiting: !0,
    outcomes: void 0
  };
}
var x = {
  candidate: !1,
  exclusion: "flag_off"
};
function KBo(e, n, r) {
  return e !== "fallback" || !r() || n();
}
function Agn(e) {
  let {
    flag: flag_4,
    source: source_2
  } = k(e);
  if (!flag_4.enabled && KBo(source_2, e.isFlagFetchHeld ?? iVt, e.isFlagCacheEmpty ?? Mz)) return O(flag_4, source_2, x, e.surface);
  let o = vke(flag_4, (e.readCandidateInputs ?? WEt)({
    authRecoveryCommand: e.authRecoveryCommand
  }));
  if (!flag_4.enabled || !o.candidate) return O(flag_4, source_2, o, e.surface);
  return I(e, flag_4, source_2, o, 0, 0, {
    report: !1,
    decidedWithoutWaiting: !0
  });
}
async function w7s(e) {
  let n = e.isFlagFetchHeld ?? iVt,
    r = e.isFlagCacheEmpty ?? Mz;
  if (e.afterSignIn === !0) await Ge(e);
  let o = Agn(e);
  if (Pgn(o, n, r)) await XBo(e.fetchFlag), o = Agn(e);
  if (!o.armed || o.outcomes === void 0) return o;
  if (o = await qBo(o, () => Agn(e), e.primeSettingsCacheAge), !o.armed || o.outcomes === void 0) return o;
  if (!xne(o.decision)) return await (e.report ?? jYe)(o, o.outcomes), o;
  let {
      flag: flag_5,
      flagSource: flagSource_2
    } = o,
    [u] = await Promise.all([(e.settle ?? pe)(flag_5.budgetMs), xgn(flagSource_2, n, r) ? x9n(flag_5.budgetMs, e.fetchFlag) : void 0]),
    d = k(e);
  if (!d.flag.enabled) return O(d.flag, d.source, x, e.surface);
  let g = vke(d.flag, (e.readCandidateInputs ?? WEt)({
    authRecoveryCommand: e.authRecoveryCommand
  }));
  if (!g.candidate) return O(d.flag, d.source, g, e.surface);
  return I(e, d.flag, d.source, g, u, 0, {
    report: !0,
    decidedWithoutWaiting: !1
  });
}
async function qBo(e, n, r = be) {
  if (!e.armed || e.outcomes === void 0 || !xne(e.decision) || !Se(e.outcomes)) return e;
  return await r(), n();
}
function Se(e) {
  return e.settings.hasAdmittedCache && e.settings.admittedCacheAgeMs === void 0;
}
async function be() {
  await MNn().then(() => {
    return;
  }, () => {
    return;
  });
}
function YBo(e, n, r = 1) {
  let {
    flag: flag_6,
    source: source_3
  } = k(e);
  if (!flag_6.enabled) return O(flag_6, source_3, x, e.surface);
  let c = vke(flag_6, (e.readCandidateInputs ?? WEt)({
    authRecoveryCommand: e.authRecoveryCommand
  }));
  if (!c.candidate) return O(flag_6, source_3, c, e.surface);
  return I(e, flag_6, source_3, c, n, r, {
    report: !0,
    decidedWithoutWaiting: !1
  });
}
function I(e, flag_7, flagSource_3, candidacy_4, blockedMs_2, attempt, u) {
  let outcomes = (e.readOutcomes ?? W)(),
    decision = Est({
      flag: flag_7,
      candidacy: candidacy_4,
      policy: outcomes.policy,
      settings: outcomes.settings,
      surface: e.surface,
      blockedMs: blockedMs_2
    }),
    context = (e.readContext ?? z)(outcomes, decision.resource),
    m = {
      decision: decision,
      message: C2r(decision, context),
      flag: flag_7,
      flagSource: flagSource_3,
      candidacy: candidacy_4,
      armed: !0,
      context: context,
      attempt: attempt,
      decidedWithoutWaiting: u.decidedWithoutWaiting,
      outcomes: outcomes
    };
  if (u.report) (e.report ?? jYe)(m, outcomes);
  return m;
}
function jYe(e, n, r) {
  let {
      decision: decision_2,
      flag: flag_8,
      candidacy: candidacy_5
    } = e,
    u = pi("tengu_org_config_gate", {
      decision: f(decision_2.verdict),
      decision_reason: de(decision_2.reason),
      decision_resource: de(decision_2.resource),
      surface: f(decision_2.surface),
      blocked_ms: decision_2.blockedMs,
      attempt: e.attempt,
      decided_without_waiting: e.decidedWithoutWaiting,
      final_outcome: de(r?.outcome),
      recovered_after_ms: r?.recoveredAfterMs,
      tier: de(candidacy_5.candidate ? candidacy_5.tier : void 0),
      flag_source: f(e.flagSource),
      flag_percent: flag_8.percent,
      grace_ttl_hours: flag_8.graceTtlHours,
      budget_ms: flag_8.budgetMs,
      policy_reason: de(n?.policy.reason),
      policy_has_cache: n?.policy.hasAdmittedCache,
      policy_cache_age_ms: n?.policy.admittedCacheAgeMs,
      settings_reason: de(n?.settings.reason),
      settings_has_cache: n?.settings.hasAdmittedCache,
      settings_cache_age_ms: n?.settings.admittedCacheAgeMs,
      http_status: e.context.httpStatus
    }).catch(() => {}),
    d = !U.done && (r !== void 0 || e.attempt === 0 && !xne(decision_2));
  if (d) U.done = !0;
  let g = !d ? void 0 : decision_2.verdict === "pass" ? Lr("org_config_gate") : decision_2.verdict === "pass_cached" || decision_2.verdict === "pass_exempt" ? Ls("org_config_gate", decision_2.verdict) : Ut("org_config_gate", decision_2.reason ?? decision_2.verdict),
    l = Promise.all([u, g]).then(() => {
      return;
    });
  return T.set.add(l), l.finally(() => T.set.delete(l)), t(`org-config gate: ${decision_2.verdict}${decision_2.reason ? ` (${decision_2.resource} ${decision_2.reason})` : ""} on ${decision_2.surface} after ${decision_2.blockedMs}ms`), l;
}
var U = he({
    done: !1
  }, e => {
    e.done = !1;
  }),
  T = he({
    set: new Set()
  }, e => {
    e.set = new Set();
  });
async function A9n() {
  await Promise.allSettled([...T.set]);
}
async function R2r(e = B) {
  try {
    e();
  } catch (error) {
    a(new R(`org-config gate: the settings re-evaluation threw (${YI(error)})`, "org-config gate: the settings re-evaluation threw"));
  }
  await Promise.all([D$n({
    singleAttempt: !0
  }).catch(n => a(new R(`org-config gate: the policy retry threw (${YI(n)})`, "org-config gate: the policy retry threw"))), x6e(void 0, void 0, {
    singleAttempt: !0
  }).catch(n => (a(new R(`org-config gate: the settings retry threw (${YI(n)})`, "org-config gate: the settings retry threw")), !1)), we(lH().catch(n => a(new R(`org-config gate: the flag refresh threw (${YI(n)})`, "org-config gate: the flag refresh threw"))), ve)]);
}
var ve = 3000;
function xgn(e, n = iVt, r = Mz) {
  if (e === "disk") return !n();
  return e === "fallback" && r() && !n();
}
function Pgn(e, n = iVt, r = Mz) {
  return !e.armed && e.flagSource === "fallback" && !e.candidacy.candidate && e.candidacy.exclusion === "flag_off" && r() && !n();
}
function iVt() {
  return Bgt(hoe()) || !YRe();
}
function k7s() {
  return Bgt(hoe());
}
async function x9n(e, n = ms) {
  await we(n().then(() => {
    return;
  }, () => {
    return;
  }), e);
}
async function Ge(e) {
  let {
    source: source_4
  } = k(e);
  if (source_4 !== "disk" && source_4 !== "fallback") return;
  if ((e.isFlagFetchHeld ?? iVt)()) return;
  await x9n(gL, e.fetchFlag);
}
var V = he({
  byFetcher: new WeakMap()
}, e => {
  e.byFetcher = new WeakMap();
});
function XBo(e = ms) {
  let n = V.byFetcher.get(e);
  if (n === void 0) n = x9n(gL, e), V.byFetcher.set(e, n);
  return n;
}
var ke = [15000, 15000, 30000, 60000, 180000, 600000],
  Ee = 0.3;
function JBo(e, n = Math.random) {
  let r = ke[e];
  if (r === void 0) return;
  let o = (n() * 2 - 1) * Ee;
  return Math.max(1000, Math.round(r * (1 + o)));
}
export { vke, E2r, Est, WEt, C9n, T2r, S7s, GBo, C2r, xne, R9n, VBo, KBo, Agn, w7s, qBo, YBo, jYe, A9n, R2r, xgn, Pgn, iVt, k7s, x9n, XBo, JBo };