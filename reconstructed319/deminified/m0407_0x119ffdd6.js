// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { at, iFe, La, Vx, uh, Ln, Rt, fp, kyt, Y1, qi, Oh, N1n, pn, v, gk, ND, fe, Yyt, yMs, G1n, AEo, Jyt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Gxe, YOo, xn } from "B:/~BUN/root/chunk-game8aqv.js";
import { zt, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Nr, C7 } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { OC } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { pY, t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { mcn, XPo, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ij } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { _o } from "B:/~BUN/root/chunk-rr294jrm.js";
import { E_ } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { fc } from "B:/~BUN/root/chunk-begxsvab.js";
import { pr, hC, obt, Te, Fn, MKe, Yc } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { JD, Die } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { kr } from "B:/~BUN/root/chunk-dm4rzkqc.js";
import { dan, oKe, yAe, UUt } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { PUt } from "B:/~BUN/root/chunk-0s9zh2h6.js";
import { frn, zF, $$n, By, Sz, $se, gn, wE, FX, iRe, dp, jRs, xd, VAr, JFt, zRs, Nv, Use } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { _Ts } from "B:/~BUN/root/chunk-cvaa202c.js";
import { aX, Hpo, RSs as detail } from "B:/~BUN/root/chunk-qwkca6jq.js";
import { h2e } from "B:/~BUN/root/chunk-xr3thd43.js";
import { _t } from "B:/~BUN/root/chunk-3a409jmn.js";
import { bSe } from "B:/~BUN/root/chunk-5g14jzvf.js";
import { mpe } from "B:/~BUN/root/chunk-zvpxvfbv.js";
var W = "tengu_reflective_wolf";
function VZt() {
  let e = kr();
  return e.attributionAnnouncementEnabled ??= i.CLAUDE_CODE_ATTRIBUTION_ANNOUNCEMENT ?? v(W, !0), e.attributionAnnouncementEnabled;
}
function mvr(e) {
  let o = VZt() ? G1n() : void 0,
    n = at();
  if (e(), o === void 0 || at() === n) return;
  return yMs(o, {
    forContextWindow: !0
  }), o;
}
function I(e, o, renderedClientData) {
  let r = import("B:/~BUN/root/chunk-eqapgmx8.js").then(({
    refreshBootstrapData: refreshBootstrapData
  }) => refreshBootstrapData(e, o, {
    renderedClientData: renderedClientData
  })).then(() => {}, l => a(l));
  return KZt(r), r;
}
function hvr(e, o, n) {
  return I(e, o, n);
}
function RBi(e) {
  pr().fetchesClientData = e;
}
function dSs() {
  return pr().fetchesClientData && Te() === "firstParty";
}
function KZt(e) {
  let o = AEo(),
    clientDataFetches = pr().providerCache.clientDataFetches;
  if (o !== void 0 && !(clientDataFetches.get(o) instanceof Promise)) {
    let r = Gxe();
    clientDataFetches.set(o, e), e.finally(() => {
      if (clientDataFetches.get(o) === e) if (Gxe() === r) clientDataFetches.set(o, "over");else clientDataFetches.delete(o);
    });
  }
}
function w() {
  return [...pr().providerCache.clientDataFetches.values()].filter(item => item !== "over");
}
function ABi(e) {
  let clientDataFetches_2 = pr().providerCache.clientDataFetches;
  for (let [n, r] of clientDataFetches_2) if (r === e) clientDataFetches_2.set(n, "over");
}
function xBi(e, o) {
  let n = AEo();
  if (n === void 0 || !dSs() || Jyt()) return;
  let r = pr().providerCache.clientDataFetches.get(n);
  if (r !== void 0) return r === "over" ? void 0 : r;
  return I(e, o, G1n());
}
function Lx() {
  if (!Fn()) return !1;
  if (zF() !== void 0) return !0;
  if (i.ANTHROPIC_UNIX_SOCKET) return !1;
  return Yc();
}
function sLt() {
  return Lx() && f() && (v("tengu_ccr_bridge", !1) || C());
}
function C() {
  if (!E() || !Lx() || le()) return !1;
  let e = L();
  if (e !== null) return M.includes(e) && (e !== "team" && e !== "enterprise" || By());
  if (!b() || !m()?.organizationUuid) return !1;
  try {
    let o = Ln(),
      n = o?.refreshToken ? o.subscriptionType ?? null : null;
    return n !== null && M.includes(n);
  } catch {
    return !1;
  }
}
function E() {
  return !Oh() && C7() === null && mcn() === "no-telemetry" && !bSe();
}
function L() {
  let e = YOo(),
    o = e?.named;
  if (!o || e?.bearerSha256 !== y()) return null;
  return (i.CLAUDE_CODE_ORGANIZATION_UUID || m()?.organizationUuid)?.toLowerCase() === o.organizationUuid.toLowerCase() ? o.subscriptionType : null;
}
function x() {
  let e = YOo();
  return e !== null && e.bearerSha256 === y() && (e.named !== null || Date.now() - e.answeredAtMs < U);
}
function F() {
  return E() && L() !== null;
}
function y() {
  try {
    let e = Ln();
    return e && !e.refreshToken && e.accessToken !== PUt ? kyt() : null;
  } catch {
    return null;
  }
}
var q = 6000,
  U = 60000;
async function H(e) {
  if (y() === null || !E() || x()) return;
  await we(Promise.allSettled(w()).then(async () => {
    if (e !== void 0) await k(e), await k(e);
  }), q);
}
function k({
  storageV5: storageV5,
  credentials: credentials
}) {
  let bearerSha256 = y();
  if (bearerSha256 === null || x()) return;
  let r = _o();
  if (r.bearerPlanFetch?.bearerSha256 !== bearerSha256 || Date.now() - r.bearerPlanFetch.startedAtMs >= U) r.bearerPlanFetch = {
    bearerSha256: bearerSha256,
    startedAtMs: Date.now(),
    answered: import("B:/~BUN/root/chunk-eqapgmx8.js").then(({
      refreshBootstrapData: refreshBootstrapData_2
    }) => refreshBootstrapData_2(storageV5, credentials, {
      keepRenderCaches: !0
    })).then(() => {}, l => a(l))
  };
  return r.bearerPlanFetch.answered;
}
var M = ["pro", "max", "team", "enterprise"];
function kLn() {
  if (sLt()) return null;
  if (!p()) return "not_signed_in";
  if (!f()) return "api_key_auth";
  if (!b()) return "no_profile_scope";
  return "not_in_rollout";
}
function c() {
  return !1;
}
function AF() {
  return ij()?.settings.disableRemoteControl === !0;
}
function xF() {
  if (c()) return !0;
  if (fc()) return !1;
  return K();
}
function K() {
  if (AF()) return !1;
  return !k1() && sLt();
}
function vLn() {
  return fc() && !c() && K() && aLt() === "allowed";
}
function cSs() {
  if (c()) return !0;
  return !AF() && !k1() && Lx();
}
async function uSs(e) {
  return (await Rpo(e)) === null;
}
async function Rpo(e) {
  if (c()) return null;
  if (fc()) return "repl_mode";
  if (AF()) return "managed_disabled";
  if (!Lx()) return "not_first_party";
  if (k1()) return "cloud_session";
  if (!f()) return p() ? "not_subscription_auth" : "not_signed_in";
  if (await H(e), C() || (await gk("tengu_ccr_bridge"))) return null;
  if (!Oh()) return "flags_disabled";
  return qi() ? "gate_off" : "flags_unreachable";
}
var G = "Remote Control is disabled by your organization's policy. Contact your organization admin for access.",
  X = 86400000,
  J = 2147483647;
function Y() {
  return Use();
}
function gvr() {
  let {
    featureLabel: featureLabel,
    verb: verb
  } = $se("allow_remote_control");
  return dan(featureLabel, verb, JD(), G);
}
function sGe(e) {
  let o = e ? ["allow_remote_control", "allow_remote_sessions"] : ["allow_remote_control"];
  try {
    for (let policy of o) {
      let kind = xd(policy);
      switch (kind) {
        case null:
        case "cache_miss":
        case "route_missing":
          continue;
        case "latched":
          {
            if (!FX() && !N()) continue;
            let {
              featureLabel: featureLabel_2,
              verb: verb_2
            } = $se(policy);
            return {
              policy: policy,
              kind: kind,
              detail: oKe(featureLabel_2, verb_2)
            };
          }
        case "org_denied":
          if (Nv()?.restrictions[policy]?.allowed !== !1 && !FX() && !N()) continue;
          return {
            policy: policy,
            kind: kind,
            detail: policy === "allow_remote_control" ? detail : "Session mirroring was turned off by your organization's policy (allow_remote_sessions)."
          };
        default:
          return {
            policy: policy,
            kind: "org_denied",
            detail: detail
          };
      }
    }
    return null;
  } catch {
    return null;
  }
}
function N() {
  let e = Sz();
  return e !== void 0 && $$n.has(e);
}
var s = (code, reason) => ({
  reason: reason,
  code: code,
  orgPolicyDenied: !1
});
async function qZt() {
  if (c()) return null;
  if (fc()) return s("repl_mode", `Remote Control isn't available in ${E_} yet. ${_Ts()}`);
  if (!Lx()) return s("not_first_party", ae());
  if (k1()) return s("cloud_session", "Remote Control is not available inside a cloud session.");
  if (AF()) return s("managed_disabled", aX);
  if (!p()) return s("not_signed_in", "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account.");
  if (!f()) return s("not_subscription_auth", YZt({
    prefix: "Remote Control requires claude.ai subscription auth.",
    suffix: "to use Remote Control."
  }));
  await H(void 0);
  let e = F();
  if (!e && !b()) return s("token_scope_limited", h2e() ?? "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control.");
  if (!e && !m()?.organizationUuid) return s("no_organization", "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information.");
  await QZ();
  let o = aLt();
  if (o === "unavailable") return s("policy_unverified", Hpo);
  if (o === "denied") return {
    reason: V(),
    code: "org_policy_denied",
    orgPolicyDenied: !0
  };
  if (C()) return null;
  if (!Oh()) {
    let n = XPo() ?? C7();
    if (n) return s("flags_disabled", `Remote Control requires feature-flag evaluation, which is disabled because ${n} is set. Unset it (or run in a shell without it) to use Remote Control.`);
    return s("flags_disabled", "Remote Control requires feature-flag evaluation, which is unavailable in this environment.");
  }
  if (!(await gk("tengu_ccr_bridge"))) {
    if (!qi()) {
      if (ND(), await gk("tengu_ccr_bridge")) return null;
      if (!qi()) return s("flags_unreachable", "Couldn't verify Remote Control eligibility \u2014 the feature-flag service was unreachable (offline or blocked). Retry, or run with `--debug` / `claude doctor` for details.");
    }
    return s("gate_off", "Remote Control isn't enabled for this account. If you recently changed plans, run `claude auth logout` then `claude auth login` to refresh your entitlements, or `claude doctor` for details.");
  }
  return null;
}
async function Q() {
  return (await qZt())?.reason ?? null;
}
function V() {
  try {
    if (iRe()) return UUt("Remote Control");
    if (VAr("allow_remote_control")) return oKe("Remote Control", "is");
    if (!Y()) return yAe("Remote Control");
    if (!jRs()) return G;
    return gvr();
  } catch {
    return Hpo;
  }
}
var Z = "set by your organization's configuration, not an admin setting";
function ee({
  policyVerdict: policyVerdict,
  policyDenialIsAuthoritative: policyDenialIsAuthoritative,
  currentTaints: currentTaints
}) {
  if (policyVerdict !== "denied" || !policyDenialIsAuthoritative) return !1;
  try {
    return !iRe() && !VAr("allow_remote_control") && mpe(currentTaints).length > 0;
  } catch {
    return !1;
  }
}
function iLt() {
  if (c()) return null;
  if (AF()) return aX;
  let e = _o(),
    policyCacheRevision = frn(),
    remoteControlLockReason = e.remoteControlLockReason;
  if (remoteControlLockReason !== void 0 && remoteControlLockReason.policyCacheRevision === policyCacheRevision) return remoteControlLockReason.reason;
  let reason_2 = te();
  return e.remoteControlLockReason = {
    policyCacheRevision: policyCacheRevision,
    reason: reason_2
  }, reason_2;
}
function te() {
  let e = aLt();
  if (e === "allowed") return null;
  if (e === "unavailable") return Hpo;
  return V();
}
function bSa() {
  return dp("allow_remote_control", "Remote Control", "is", "Remote Control is disabled by your organization's policy.");
}
function SSa() {
  if (!pY()) return "";
  let e = o => o ? "set" : "unset";
  try {
    let o = Ln(),
      n = Object.values(obt).filter(item => Pe(process.env[item]));
    return ["", "[debug] Remote Control auth state:", `  isBareMode=${Nr()}`, `  hasOAuthAccessToken=${!!o?.accessToken}`, `  oauthScopes=${o?.scopes?.join(",") ?? "none"}`, `  hasClaudeAIInferenceScope=${p()}`, `  isClaudeAISubscriber=${f()}`, `  hasProfileScope=${b()}`, `  oauthAccount.organizationUuid=${m()?.organizationUuid ? "set" : "unset"}`, `  ANTHROPIC_API_KEY=${e(process.env.ANTHROPIC_API_KEY)}`, `  ANTHROPIC_AUTH_TOKEN=${e(process.env.ANTHROPIC_AUTH_TOKEN)}`, `  apiKeyHelper=${uh() ? "set" : "unset"}`, `  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=${e(process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR)}`, `  CLAUDE_CODE_OAUTH_TOKEN=${e(process.env.CLAUDE_CODE_OAUTH_TOKEN)}`, `  ANTHROPIC_UNIX_SOCKET=${e(process.env.ANTHROPIC_UNIX_SOCKET)}`, `  3P env=${n.length ? n.join(",") : "none"}`, ...oe()].join(`
`);
  } catch (error) {
    return `
[debug] failed to collect auth state: ${error}`;
  }
}
function oe() {
  let e = Y1(),
    o = ne();
  return [`  featureFlagsEnabled=${Oh()}`, `  telemetryDisabledBy=${XPo() ?? "none"}`, `  featureFlagsDisabledBy=${C7() ?? "none"}`, `  featureFlagsFresh=${qi()}`, `  featureFlagCount=${Object.keys(e).length}`, `  featureFlagsLastFetched=${qi() ? "by this process" : o ? `${re(Date.now() - o)} ago` : "never"}`, `  tengu_ccr_bridge=${String(e.tengu_ccr_bridge ?? "unset")}`];
}
async function fSs() {
  if (k1() && !c()) return {
    disabledReason: null,
    inRemoteSession: !0,
    checks: []
  };
  ND(), await QZ();
  let e = await Q(),
    o = XPo() ?? C7(),
    ok = Lx(),
    ok_2 = !AF(),
    ok_3 = p(),
    ok_4 = f(),
    D = F(),
    ok_5 = D || b(),
    ok_6 = D || !!m()?.organizationUuid,
    policyVerdict_2 = aLt(),
    policyDenialIsAuthoritative_2 = Y(),
    z = ee({
      policyVerdict: policyVerdict_2,
      policyDenialIsAuthoritative: policyDenialIsAuthoritative_2,
      currentTaints: Die()
    }),
    B = Oh(),
    h = C(),
    ok_7 = h || (await gk("tengu_ccr_bridge")),
    T = qi(),
    checks = [{
      label: ok ? "Connected to the Anthropic API (api.anthropic.com)" : "Not connected to the Anthropic API (api.anthropic.com)",
      ok: ok
    }, {
      label: ok_2 ? "Not disabled by org policy (disableRemoteControl)" : "Disabled by org policy (disableRemoteControl)",
      ok: ok_2
    }, {
      label: ok_3 ? "Signed in to claude.ai" : "Not signed in to claude.ai",
      ok: ok_3
    }, {
      label: ok_4 ? "claude.ai subscription active" : "claude.ai subscription auth not active",
      ok: ok_4
    }, {
      label: ok_5 ? "Sign-in includes the user:profile scope" : "Sign-in is missing the user:profile scope",
      ok: ok_5
    }, {
      label: ok_6 ? "Organization resolved" : "Organization not resolved",
      ok: ok_6
    }, {
      label: policyVerdict_2 === "allowed" ? "Org policy allows Remote Control (allow_remote_control)" : policyVerdict_2 === "unavailable" ? "Org policy could not be verified (allow_remote_control)" : !policyDenialIsAuthoritative_2 ? "Org policy not loaded, see the Organization policy line above (allow_remote_control)" : "Org policy does not allow Remote Control (allow_remote_control)",
      ok: policyVerdict_2 === "allowed",
      detail: z ? Z : void 0
    }, {
      label: B ? "Feature-flag evaluation enabled" : "Feature-flag evaluation disabled",
      ok: B || h,
      detail: o ? h ? `disabled by ${o}; Remote Control does not need it on a paid plan` : `disabled by ${o}` : void 0
    }, {
      label: ok_7 ? "Remote Control enabled for this account" : T ? "Remote Control not enabled for this account" : "Remote Control availability could not be verified",
      ok: ok_7,
      detail: h ? "decided from your plan, feature flags are off" : T ? void 0 : "no server response this session"
    }];
  return {
    disabledReason: e !== null && ok && ok_2 && ok_3 && ok_4 && ok_5 && ok_6 && policyVerdict_2 === "denied" && !policyDenialIsAuthoritative_2 ? "Remote Control needs your organization's policy, which isn't loaded \u2014 see the Organization policy line above." : e,
    inRemoteSession: !1,
    checks: checks
  };
}
function ne() {
  try {
    return fe().cachedGrowthBookFeaturesAt;
  } catch {
    return;
  }
}
function re(e) {
  let o = Math.round(e / 1000);
  if (o < 120) return `${o}s`;
  let n = Math.round(o / 60);
  if (n < 120) return `${n}m`;
  let r = Math.round(n / 60);
  if (r < 48) return `${r}h`;
  return `${Math.round(r / 24)}d`;
}
function YZt({
  prefix: prefix,
  suffix: suffix
}) {
  try {
    let {
      source: source
    } = Vx({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (source === "ANTHROPIC_API_KEY") return `${prefix} ANTHROPIC_API_KEY is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${suffix}`;
    if (source === "apiKeyHelper") return `${prefix} apiKeyHelper is configured, so this session is using API-key auth \u2014 unset it ${suffix}`;
    if (process.env.ANTHROPIC_AUTH_TOKEN) return `${prefix} ANTHROPIC_AUTH_TOKEN is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${suffix}`;
    let {
        source: source_2
      } = La(),
      l = iFe(source_2);
    if (source_2 !== "none" && l) return `${prefix} This session is using ${source_2} auth \u2014 ${l}`;
    if (process.env.ANTHROPIC_UNIX_SOCKET) return `${prefix} ANTHROPIC_UNIX_SOCKET is set without CLAUDE_CODE_OAUTH_TOKEN, so requests on the socket carry no claude.ai login (on a claude ssh remote: the local machine is API-key-authed).`;
  } catch {}
  return `${prefix} Unset ANTHROPIC_API_KEY / apiKeyHelper / ANTHROPIC_AUTH_TOKEN ${suffix}`;
}
var d = "Remote Control is only available when using Claude via api.anthropic.com.",
  O = "unset it (or run in a shell without it) to use Remote Control.",
  ie = "unset them (or run in a shell without them) to use Remote Control.";
function ae() {
  let e = Te();
  if (e !== "firstParty") {
    if (e === "gateway") return `${d} This session uses a ${hC.gateway}, which does not support Remote Control.`;
    if (e === "bedrock" && MKe() === "mantle") return `${d} ${obt.bedrock} and ${obt.mantle} are set, so this session is using ${hC.bedrock} + ${hC.mantle} \u2014 ${ie}`;
    return `${d} ${obt[e]} is set, so this session is using ${hC[e]} \u2014 ${O}`;
  }
  if (!Yc()) {
    let o = i._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ? " (_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL does not apply to Remote Control.)" : "";
    return `${d} ANTHROPIC_BASE_URL is set and does not point at api.anthropic.com, so this session is using a custom endpoint \u2014 ${O}${o}`;
  }
  if (i.ANTHROPIC_UNIX_SOCKET) return `${d} ANTHROPIC_UNIX_SOCKET is set, so this session sends requests through a local socket rather than to api.anthropic.com \u2014 ${O}`;
  return d;
}
function p() {
  try {
    return Boolean(Ln()?.scopes?.includes(OC));
  } catch {
    return !1;
  }
}
function f() {
  try {
    return Rt();
  } catch {
    return !1;
  }
}
function b() {
  try {
    return fp();
  } catch {
    return !1;
  }
}
function m() {
  try {
    return fe().oauthAccount;
  } catch {
    return;
  }
}
function le() {
  try {
    return JFt("require_trusted_devices") || wE();
  } catch {
    return !0;
  }
}
async function QZ() {
  try {
    await se();
  } catch (error) {
    t(`[bridge] policy-limits hydrate for the Remote Control diagnostic failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}
async function se() {
  try {
    if (Nv() !== null) return;
  } catch {}
  let e = await import("B:/~BUN/root/chunk-4gnegddh.js");
  e.initializePolicyLimitsLoadingPromise();
  let o = _o();
  if (o.diagnosticPolicyKick === void 0) {
    let n = e.loadPolicyLimits();
    n.catch(() => {}).finally(() => {
      o.diagnosticPolicyKick = void 0;
    }), o.diagnosticPolicyKick = zt(n, e.POLICY_LIMITS_COLD_AWAIT_MS, "bridge_diagnostic_policy_limits").catch(() => {});
  }
  await o.diagnosticPolicyKick;
}
function aLt() {
  try {
    return gn("allow_remote_control") ? "allowed" : "denied";
  } catch {
    return "unavailable";
  }
}
function iX() {
  return xF() && aLt() === "allowed";
}
function k1() {
  return Pe(process.env.CLAUDE_CODE_REMOTE) || xn();
}
function pSs() {
  return v("tengu_bridge_repl_v2_cse_shim_enabled", !0);
}
function SLe() {
  return v("tengu_luminous_seal", !0);
}
function mSs() {
  return v("tengu_bridge_partial_messages", !1);
}
function yvr() {
  return v("tengu_wobbly_pinwheel", !0);
}
function Apo() {
  return v("tengu_copper_kestrel", !0);
}
function XZt() {
  return v("tengu_bridge_auth_revive", !0);
}
function xpo() {
  return v("tengu_ethereal_mist", !0);
}
function hSs() {
  return v("tengu_wild_gosling", !1);
}
function lLt() {
  return v("tengu_humble_petal", !0);
}
function gSs() {
  return v("tengu_moonlit_lagoon", !0);
}
function ySs() {
  return v("tengu_bridge_resume_respects_local_owner", !0);
}
function _Ss() {
  return v("tengu_sequential_puffin", !0);
}
function wLe() {
  return v("tengu_bridge_owner_pinned_end", !0);
}
function Ppo() {
  return v("tengu_bridge_owner_check_attribution", !0);
}
function _vr() {
  return v("tengu_glimmering_glade", !0);
}
function bSs() {
  return v("tengu_lucky_quill", !0);
}
function SSs() {
  return v("tengu_keen_lantern", !0);
}
function Opo() {
  return v("tengu_bridge_host_declined_end", !0);
}
function wSs() {
  return v("tengu_bridge_signed_out_neutral", !0);
}
function ELn() {
  return v("tengu_ccr_v2_send_events_cli", !0);
}
function XW() {
  return v("tengu_ccr_v2_session_crud_cli", !1);
}
function wSa() {
  return v("tengu_ccr_v2_bridge_create_cli", !1);
}
function JZt() {
  return v("tengu_composed_quail", !0);
}
function kSs() {
  return v("tengu_woolly_emerson", !0);
}
function vSs() {
  return v("tengu_gravel_chorus", !0);
}
function dLt() {
  return Ipo().value;
}
function Ipo() {
  if (k1()) return {
    value: !1,
    source: "remote_env"
  };
  let value = zRs("remote_control_at_startup");
  if (E()) return {
    value: !1,
    source: value === !1 ? "org_policy" : "growthbook"
  };
  if (iGe()) return {
    value: !0,
    source: "persistent_remote_session"
  };
  if (value !== void 0) return {
    value: value,
    source: "org_policy"
  };
  return {
    value: v("tengu_cobalt_harbor", !1),
    source: "growthbook"
  };
}
function ZZ() {
  let e = Yyt();
  return e !== void 0 ? e : dLt();
}
function iGe() {
  return !1;
}
function kSa() {
  return !1;
}
function TLn() {
  return v("tengu_amber_relay", !1);
}
async function vSa() {
  return !1;
}
function ESa() {
  return "not_fetched";
}
function umt() {
  {
    let {
      value: value_2,
      source: source_3
    } = pn("tengu_bridge_apply_server_session_config", !0);
    if (value_2 !== !1) return !0;
    if (source_3 === "override") return !1;
    return !(source_3 === "payload" && N1n().organizationUUID);
  }
  return !1;
}
function Mpo() {
  return v("tengu_bridge_child_auto_mode", !0);
}
function ESs() {
  return v("tengu_bridge_child_auto_over_settings", !0);
}
function Dpo() {
  return v("tengu_bridge_rc_child_artifact", !0);
}
function QZt() {
  return v("tengu_bridge_rc_projects_hint", !0);
}
function Lpo() {
  return v("tengu_bridge_child_machine_settings", !0);
}
function Npo() {
  return v("tengu_bridge_rc_child_auto_compact", !0);
}
function Fpo() {
  return _t("tengu_gentle_grove", {
    safe: !1
  });
}
function ZZt() {
  return v("tengu_gentle_orchard", !0);
}
function TSs() {
  let e = v("tengu_bridge_rc_child_idle_exit_ms", X);
  if (typeof e !== "number" || !Number.isFinite(e) || e < 1) return 0;
  return Math.min(Math.floor(e), J);
}
function CLn() {
  return v("tengu_bridge_rc_child_restart_resume", !0);
}
function RLn() {
  return {
    enabled: v("tengu_bridge_subagent_frames", !0),
    forwardText: v("tengu_bridge_subagent_text", !1)
  };
}
function CSs(e, replBridgeEnabled) {
  if (e.replBridgeOutboundOnly && !replBridgeEnabled) return e.replBridgeSessionGroupingId !== void 0 ? {
    ...e,
    replBridgeSessionGroupingId: void 0
  } : e;
  if (e.replBridgeEnabled === replBridgeEnabled && !e.replBridgeOutboundOnly) return !replBridgeEnabled && e.replBridgeSessionGroupingId !== void 0 ? {
    ...e,
    replBridgeSessionGroupingId: void 0
  } : e;
  return {
    ...e,
    replBridgeEnabled: replBridgeEnabled,
    replBridgeOutboundOnly: !1,
    ...(!replBridgeEnabled && {
      replBridgeSessionGroupingId: void 0
    })
  };
}
export { VZt, mvr, hvr, RBi, dSs, KZt, ABi, xBi, Lx, sLt, kLn, AF, xF, vLn, cSs, uSs, Rpo, gvr, sGe, qZt, iLt, bSa, SSa, fSs, YZt, QZ, aLt, iX, k1, pSs, SLe, mSs, yvr, Apo, XZt, xpo, hSs, lLt, gSs, ySs, _Ss, wLe, Ppo, _vr, bSs, SSs, Opo, wSs, ELn, XW, wSa, JZt, kSs, vSs, dLt, Ipo, ZZ, iGe, kSa, TLn, vSa, ESa, umt, Mpo, ESs, Dpo, QZt, Lpo, Npo, Fpo, ZZt, TSs, CLn, RLn, CSs };