// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne, zo } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Te } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { It } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { aX, KB, ZNe, zMt, qge, ZWn, ft } from "B:/~BUN/root/chunk-faawr4jv.js";
import { tl } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Wce, Rc, k$e } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { ee, WTe } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { put, nr, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ld, zc, n9e, rH, oH, hu, r9e, Qx, Izr } from "B:/~BUN/root/chunk-snmb1kqg.js";
import { HI, ar } from "B:/~BUN/root/chunk-290k5gh5.js";
import { mC, he, U3n, pu, Npt, EJ, G$t } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { wlt, vlt, N3e, AS } from "B:/~BUN/root/chunk-j36yaq51.js";
import { my, y6 } from "B:/~BUN/root/chunk-ew8y0fm0.js";
import { DRo } from "B:/~BUN/root/chunk-a8td06ny.js";
import { tFe, EGn, xhe, C_, CCe, Xt, iFe, Iw, NGn, UE } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { Ub } from "B:/~BUN/root/chunk-hyp140x7.js";
var Y = "/_warmup",
  timeout = 3000,
  B = 600000,
  maxContentLength = 262144;
function ORo(e) {
  let n = ee();
  return n.contentHostEgressDenied.has(e.env) || n.contentHostEgressUnanswered.has(k$e(e));
}
function K(e) {
  let n = ee().contentHostEgressProbed.get(e);
  return n !== void 0 && Date.now() - n < B;
}
async function QNe(e, n) {
  let r = ee(),
    o = k$e(e);
  if (r.contentHostEgressDenied.has(e.env)) {
    r.contentHostEgressProbed.delete(o), r.contentHostEgressUnanswered.add(o);
    return;
  }
  if (K(o)) return;
  let s = r.contentHostEgressInFlight.get(o);
  if (s !== void 0) return s.catch(l => {
    if (n.aborted) throw l;
    return QNe(e, n);
  });
  let f = M(e, o, n).finally(() => {
    r.contentHostEgressInFlight.delete(o);
  });
  return r.contentHostEgressInFlight.set(o, f), f;
}
async function M(e, n, r) {
  let o = ee(),
    s = () => {
      o.contentHostEgressUnanswered.delete(n), o.contentHostEgressProbed.set(n, Date.now());
    },
    f = d => {
      t(`[artifact] egress probe of ${n}: ${d}; reading the host as unreachable for this check`), o.contentHostEgressProbed.delete(n), o.contentHostEgressUnanswered.add(n);
    },
    l = () => {
      o.contentHostEgressProbed.delete(n), o.contentHostEgressUnanswered.add(n), o.contentHostEgressDenied.add(e.env);
    },
    u;
  try {
    u = await tl.get(`${n}${Y}`, {
      signal: AbortSignal.any([r, AbortSignal.timeout(timeout)]),
      timeout: timeout,
      maxRedirects: 0,
      maxContentLength: maxContentLength,
      responseType: "text",
      validateStatus: () => !0
    });
  } catch (error) {
    if (r.aborted) throw error;
    if (ZNe(error)) return l();
    return f(N3e(error) ? "an answer larger than the cap" : "no answer");
  }
  if (KB(u.status, u.headers)) return l();
  let p = () => aX(u.headers, u.data, d => d);
  if (!(u.status >= 200 && u.status < 300 || u.status === 403 && qge(u.headers, p()) || u.status === 404 && zMt(u.headers, p()))) return f(`unrecognised HTTP ${u.status}`);
  return s();
}
function h() {
  let e = UE();
  if (e === null) return "nothing";
  return e === tFe ? "unrestricted" : "stale_cache";
}
function yan() {
  let reason = CCe();
  if (reason !== void 0) return {
    state: "ineligible",
    reason: reason
  };
  let outcome = xhe();
  if (outcome === null) return {
    state: "pending",
    hasCache: UE() !== null
  };
  return {
    state: "settled",
    outcome: outcome,
    served: h()
  };
}
function G(e) {
  switch (e) {
    case "third_party_provider":
      return "not fetched: this session doesn't connect to the Anthropic API directly (Bedrock, Vertex, Foundry, or a gateway)";
    case "custom_base_url":
      return "not fetched with a custom ANTHROPIC_BASE_URL";
    case "no_auth":
      return "not fetched: no API key or claude.ai sign-in for the policy lookup (apiKeyHelper keys are not used for it)";
    case "oauth_no_inference_scope":
      return "not fetched: this sign-in lacks the inference scope";
    case "prosumer_oauth":
      return "not applicable to Pro and Max accounts";
  }
}
function j(e, n, r, o) {
  let s = o ? "" : " \xB7 Retried hourly while Claude Code runs; restart to retry now";
  switch (e) {
    case "auth_failed":
      if (n === 403) return `${r}, or a proxy in front of it, refused the request (HTTP 403) \xB7 Fix: if you use a web proxy make sure it allows ${r}; if your organization restricts by IP, check this machine is allowed${s}`;
      if (n === 401 && o) return `${r} rejected this session's sign-in (HTTP 401) while it was being refreshed \xB7 Claude Code is retrying with the refreshed sign-in`;
      return n ? `${r} rejected this session's credentials (HTTP ${n}) \xB7 Fix: sign in again or check the API key this session uses` : "Couldn't attach credentials to the request \xB7 Fix: sign in, set the API key this session should use, or check your workload-identity setup";
    case "timeout":
      return `${r} took too long to answer \xB7 Fix: check your network or proxy${s}`;
    case "network_error":
      return `Couldn't reach ${r} \xB7 Fix: check your network or proxy${s}`;
    case "parse_failed":
      return `The answer from ${r} couldn't be read, either because a proxy replaced it or because this version of Claude Code doesn't understand it \xB7 Fix: check your proxy settings, or update Claude Code${s}`;
    case "spurious_304":
      return `${r} confirmed a cached copy from a previous sign-in, which this session can't use${s}`;
    case "request_failed":
      if (n === 404) return `The request for ${Wce} on ${r} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path \xB7 Fix: ask your network admin to allow it${s}`;
      if (n === 304) return `A caching proxy between you and ${r} answered in place of the API (HTTP 304) \xB7 Fix: ask your network admin to stop caching ${Wce}${s}`;
      if (n === 407) return `Your proxy asked for authentication before it would forward the request to ${r} (HTTP 407) \xB7 Fix: check your proxy credentials${s}`;
      return n ? `HTTP ${n} on the request to ${r}${s}` : `Couldn't complete the request to ${r}; if a proxy intercepts TLS, its certificate must be trusted (NODE_EXTRA_CA_CERTS) \xB7 Fix: check your network or proxy${s}`;
  }
}
function _an(e) {
  switch (e.state) {
    case "ineligible":
      return G(e.reason);
    case "pending":
      return e.hasCache ? "Using the copy on disk \xB7 not refreshed yet this session" : "Not loaded yet \xB7 if this persists, check your network or proxy";
    case "settled":
      {
        let {
          outcome: outcome_2
        } = e;
        if (outcome_2.success) return `Loaded from ${outcome_2.host}`;
        let r = j(outcome_2.errorCode, outcome_2.httpStatus, outcome_2.host, outcome_2.retrying),
          o = outcome_2.retrying ? " yet, still retrying" : "";
        switch (e.served) {
          case "stale_cache":
            return `Couldn't refresh${o} \xB7 using the last copy on this machine \xB7 ${r}`;
          case "unrestricted":
            return `Couldn't load${o} \xB7 no restrictions applied this session \xB7 ${r}`;
          case "nothing":
            return `Couldn't load${o} \xB7 features that must check it first (Remote Control, cloud sessions, /feedback and others) stay off, and some need a restart once it loads \xB7 ${r}`;
        }
      }
  }
}
function MRo(e) {
  switch (e.state) {
    case "pending":
      return !1;
    case "settled":
      return !e.outcome.success;
    case "ineligible":
      return e.reason === "third_party_provider" || e.reason === "custom_base_url";
  }
}
var V = ["policySettings", "flagSettings", "userSettings"],
  q = ["localSettings", "projectSettings"];
function T(e) {
  let offSources = [];
  if (e.envDisableVar !== void 0 && J(e.envDisableVar)) offSources.push({
    layer: "env",
    via: "envVar"
  });
  let r;
  for (let l of V) {
    let u = P(l, e);
    if (R(offSources, l, l === "policySettings" ? [...u, ...EJ()] : u, e), r === void 0 && u.some(item => item?.[e.enableKey] === !0) && (l !== "policySettings" || G$t())) r = l;
  }
  let lockedAboveUser = offSources.some(item => item.layer === "env" || item.layer === "policySettings" || item.layer === "flagSettings");
  for (let l of q) R(offSources, l, P(l, e), e);
  let s = offSources.some(item => item.layer === "localSettings" || item.layer === "projectSettings");
  return {
    enabled: offSources.length === 0 && (e.defaultOn || r !== void 0),
    decidedBy: offSources[0]?.layer ?? r ?? "default",
    offSources: offSources,
    lockedAboveUser: lockedAboveUser,
    userControllable: !lockedAboveUser && !s && ar("userSettings")
  };
}
function P(e, n) {
  if (e === "policySettings") return [...pu(), he("policySettings")];
  if (!ar(e)) return [];
  if (e === "localSettings") return [he(e), U3n()];
  let r = he(e);
  if (e === "projectSettings" && z(r, n) && ar("userSettings") && mC()) return [];
  return [r];
}
function z(e, n) {
  return e?.[n.enableKey] !== void 0 || n.legacyDisableKey !== void 0 && e?.[n.legacyDisableKey] !== void 0;
}
function R(e, layer, r, o) {
  if (r.some(item => item?.[o.enableKey] === !1)) e.push({
    layer: layer,
    via: "enableKey"
  });
  let legacyDisableKey = o.legacyDisableKey;
  if (legacyDisableKey !== void 0 && r.some(item => item?.[legacyDisableKey] === !0)) e.push({
    layer: layer,
    via: "legacyDisableKey"
  });
}
function J(e) {
  if (a[e] || Ne(b(my(), e)) || Ne(Npt(e)) || Ne(b(y6(), e))) return !0;
  for (let n of ["flagSettings", "userSettings"]) if (ar(n) && Ne(b(he(n)?.env, e))) return !0;
  return !1;
}
function b(e, n) {
  if (e === void 0) return;
  if (n in e) return e[n];
  let r = weakMap.get(e);
  if (r?.has(n)) return r.get(n);
  let o = Object.entries(e).find(([s]) => s.toUpperCase() === n)?.[1];
  if (Object.isFrozen(e)) if (r) r.set(n, o);else weakMap.set(e, new Map([[n, o]]));
  return o;
}
var weakMap = new WeakMap();
var C = {
  enableKey: "enableArtifact",
  legacyDisableKey: "disableArtifact",
  envDisableVar: "CLAUDE_CODE_DISABLE_ARTIFACT",
  defaultOn: !0
};
function dlt() {
  return T(C);
}
function g() {
  return !dlt().enabled;
}
function WWn() {
  let CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
  return rH() || CLAUDE_CODE_ENTRYPOINT === "claude-code-github-action" || CLAUDE_CODE_ENTRYPOINT === "mcp";
}
function k(e) {
  return e === "local-agent" || e?.startsWith("claude-coworker") === !0;
}
function HE() {
  return oH() === "local-agent" && hu() && !Qx() && Izr();
}
function Sz() {
  return n9e() && r9e() || HE();
}
function $Te() {
  return n9e();
}
function Gy(e) {
  return e !== void 0 && $Te() && ORo(e);
}
function uI(e) {
  return e !== void 0 && e.outsideOrgReader === !0 && AS();
}
function V3(e) {
  return ZWn === "person" && uI(ft(e));
}
function yv(e) {
  return uI(e) || ult(e);
}
function ult(e) {
  return e !== void 0 && e.external === !0 && AS();
}
function zWn(e) {
  return e !== void 0 && e.probeFailed !== !0 && e.external !== !0 && (e.outsideOrgReader === !1 || e.role === "owner");
}
function Q() {
  let CLAUDE_CODE_ENTRYPOINT_2 = a.CLAUDE_CODE_ENTRYPOINT;
  if (CLAUDE_CODE_ENTRYPOINT_2 === "local-agent" && HE()) return !1;
  return k(CLAUDE_CODE_ENTRYPOINT_2);
}
function UMt() {
  return k(oH()) && !HE();
}
function X() {
  return wlt() && Z();
}
function Z() {
  return O() === null;
}
function O() {
  if (Ie() !== "firstParty") return "third_party_provider";
  if (It()) return "essential_traffic_only";
  if (zo(a.CLAUDE_CODE_ARTIFACT)) return "artifact_env_off";
  if (!Ne(a.CLAUDE_CODE_ARTIFACT) && !Ne(a.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT) && WWn()) return "sdk_default_off";
  return null;
}
function D() {
  return wlt() && _();
}
function _() {
  return F() === null;
}
function F() {
  if (Q()) return "surface_excluded";
  return O();
}
function s6o() {
  if (g()) return !1;
  return D();
}
function JIr() {
  return a.CLAUDE_CODE_ARTIFACT_ASSETS === void 0 && VT() && Rc() === null && !a.CLAUDE_CODE_REMOTE;
}
function te() {
  let e = CCe();
  return e === void 0 || e === "prosumer_oauth" || e === "no_auth";
}
function I() {
  return Ne(a.CLAUDE_CODE_ARTIFACT) && !1 || x("tengu_cobalt_plinth", te());
}
function U() {
  return I() && plt();
}
function ne() {
  return H() === null;
}
function H() {
  if (!I()) return "growthbook_off";
  if (vlt() || plt()) return W(), null;
  if (ban() !== null) return null;
  return "admin_policy";
}
function ban() {
  if (vlt()) return null;
  if (!S(nr())) return null;
  let e = Iw("allow_cobalt_plinth");
  if (e !== "cache_miss" && e !== "route_missing") return W(), null;
  if (NGn("allow_cobalt_plinth")) return null;
  let cause = e === "route_missing" ? "policy_route_missing" : "policy_fetch_failed",
    outcome_3 = xhe();
  if (outcome_3 !== null && !outcome_3.success && re(outcome_3)) return ee().artifactPolicyFetchAnswer = outcome_3, {
    cause: cause,
    outcome: outcome_3
  };
  let outcome_4 = GWn();
  return outcome_4 === null ? null : {
    cause: cause,
    outcome: outcome_4
  };
}
function GWn() {
  return WTe() ? ee().artifactPolicyFetchAnswer : null;
}
function QIr() {
  if (NGn("allow_cobalt_plinth")) return "org_denied";
  let e = Iw("allow_cobalt_plinth");
  return e === "org_denied" || e === "latched" ? e : null;
}
function re(e) {
  if (!e.retrying) return !0;
  if (e.errorCode === "auth_failed" && e.httpStatus === 401 || e.errorCode === "spurious_304") return !1;
  return !EGn(e);
}
function W() {
  if (WTe()) ee().artifactPolicyFetchAnswer = null;
}
function VT() {
  if (Rc() !== null) return qT();
  return wlt() && qT() && plt();
}
function qT() {
  return VWn() === null;
}
function VWn() {
  if (g()) return "switched_off";
  if (Rc() !== null) return null;
  return F() ?? H();
}
function BMt() {
  if (g()) return !1;
  if (!X()) return !1;
  return U();
}
function A() {
  let e = new Set(),
    n = !1,
    r = !1;
  for (let s of dlt().offSources) switch (s.layer) {
    case "env":
      e.add("env");
      break;
    case "userSettings":
      e.add(s.via === "legacyDisableKey" ? "setting" : "config_pref");
      break;
    case "policySettings":
    case "flagSettings":
      n = !0;
      break;
    case "localSettings":
    case "projectSettings":
      r = !0;
      break;
  }
  if (n) e.delete("setting"), e.delete("config_pref");
  if (e.size > 1) return "multiple";
  let [o] = e;
  if (o !== void 0) return o;
  return n || r ? "admin_managed" : null;
}
function oe() {
  return A() !== null && D() && U();
}
function ZIr() {
  let e = ee();
  if (e.artifactDisabledSessionEvaluated) return;
  if (HI() === null) return;
  if (e.artifactDisabledSessionEvaluated = !0, !oe()) return;
  let n = A();
  if (n === null) return;
  m("tengu_artifact_disabled_session", {
    mechanism: c(n),
    session_interactivity: !Te() || Ld() === "claude-vscode" || zc() ? y("interactive") : y("noninteractive")
  });
}
function eOr(e) {
  if (!Izr() || oH() !== "local-agent" || Qx()) return;
  let n = ee(),
    tool_listed = e === null && !vlt() && !plt() && ban() !== null,
    o = tool_listed ? "admin_policy" : e;
  if (o === null) {
    n.artifactRegisteredSeen = !0;
    let l = n.artifactWithheldReasonsLogged.at(-1);
    if (l === void 0 || n.artifactWithheldRecoveryLogged) return;
    n.artifactWithheldRecoveryLogged = !0, m("tengu_artifact_tool_recovered", {
      withheld_reason: c(l),
      ...L(l)
    });
    return;
  }
  if (HI() === null) return;
  let s = ie(o),
    f = n.artifactWithheldReasonsLogged.includes(s);
  if (f && (!tool_listed || n.artifactWithheldListedLogged)) return;
  if (!f) n.artifactWithheldReasonsLogged.push(s);
  if (tool_listed) n.artifactWithheldListedLogged = !0;
  m("tengu_artifact_tool_withheld", {
    reason: c(s),
    off_mechanism: ue(s === "switched_off" ? A() : null),
    after_registered: n.artifactRegisteredSeen,
    tool_listed: tool_listed,
    ...L(s)
  });
}
function L(e) {
  if (e !== "org_policy_denied" && e !== "compliance_taint" && e !== "policy_cache_miss" && e !== "policy_route_missing") return {};
  let n = xhe(),
    r = h(),
    o = r === "nothing" ? "none" : r === "unrestricted" ? "fail_open" : n?.success ? "network" : "disk",
    s = !C_() ? "ineligible" : n === null || !n.success && n.retrying ? "pending" : n.success ? "ok" : "failed";
  return {
    policy_source: c(o),
    policy_fetch: c(s)
  };
}
function i6o() {
  return ee().heldStartupTelemetry ??= [], {
    flush: flush,
    [Symbol.dispose]: flush
  };
}
function flush() {
  let e = ee(),
    heldStartupTelemetry = e.heldStartupTelemetry;
  e.heldStartupTelemetry = null;
  for (let r of heldStartupTelemetry ?? []) r();
}
function m(...e) {
  let heldStartupTelemetry_2 = ee().heldStartupTelemetry;
  if (heldStartupTelemetry_2 === null) {
    i(...e);
    return;
  }
  heldStartupTelemetry_2.push(() => i(...e));
}
function ie(e) {
  switch (e) {
    case "surface_excluded":
      return hu() ? "surface_excluded" : "nested_child_session";
    case "admin_policy":
      {
        if (!S(nr())) return "subscription_ineligible";
        let n = UE();
        if (n === null) return iFe() ? "policy_route_missing" : "policy_cache_miss";
        return n.restrictions.allow_cobalt_plinth === void 0 ? "compliance_taint" : "org_policy_denied";
      }
    default:
      return e;
  }
}
function qWn() {
  return C.defaultOn;
}
function se() {
  return _() && ne();
}
function jMt() {
  return se() && dlt().userControllable;
}
function plt() {
  if (vlt()) return KWn() === null;
  if (!S(nr())) return !1;
  return Xt("allow_cobalt_plinth");
}
function S(e) {
  return e === "team" || e === "enterprise" || e === "pro" || e === "max" || e == null;
}
function KWn() {
  if (!vlt()) return null;
  let e = put();
  if (e === null) return "plan_unreadable";
  if (e !== "pro" && e !== "max") return "org_policy_unverifiable";
  if (!C_()) return "policy_unavailable";
  if (Xt("allow_cobalt_plinth")) return null;
  let n = Iw("allow_cobalt_plinth") ?? "org_denied";
  switch (n) {
    case "org_denied":
    case "latched":
    case "cache_miss":
      return n;
    case "route_missing":
      return "policy_route_missing";
  }
}
function iX() {
  return VT() && x("tengu_gable_onyx_sluice", !1);
}
DRo(iX);
function tOr() {
  return qT() && x("tengu_gable_onyx_sluice", !1);
}
function nOr() {
  return !1;
}
function rOr() {
  return !1;
}
function YWn() {
  return !1;
}
function oOr() {
  return VT() && x("tengu_ethereal_nova", !0);
}
function sOr() {
  return iX() && !Ub() && !x("tengu_cedar_transom", !1);
}
function iOr() {
  return YWn() && !Ub();
}
function aOr() {
  return !1;
}
function WMt() {
  return x("tengu_cobalt_plinth_thrift", !1) === !0;
}
var ae = "tengu_russet_pergola";
function lOr() {
  return !1;
}
function XWn() {
  return !1;
}
function cOr() {
  return XWn();
}
function le() {
  return !1;
}
function UTe() {
  let e = ee();
  if (e.prReviewComposeLatch === null) e.prReviewComposeLatch = le();
  return e.prReviewComposeLatch;
}
function ile() {
  return VT();
}
function flt() {
  return !g() && _();
}
export { ORo, QNe, yan, _an, MRo, dlt, WWn, HE, Sz, $Te, Gy, uI, V3, yv, ult, zWn, UMt, s6o, JIr, ban, GWn, QIr, VT, qT, VWn, BMt, ZIr, eOr, i6o, qWn, jMt, plt, KWn, iX, tOr, nOr, rOr, YWn, oOr, sOr, iOr, aOr, WMt, lOr, XWn, cOr, UTe, ile, flt };