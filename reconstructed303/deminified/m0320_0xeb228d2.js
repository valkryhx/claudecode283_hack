// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { Bn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { wr } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { IA } from "B:/~BUN/root/chunk-jpdys232.js";
import { cEe, Ya, YE, Fm, Fn, Et, Jp, n5, Gi, $m, V6n, En, E, yb, o5, ue, NJe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { YW, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { gjt, i1r } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { oo } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { eF } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { ok, $Qe, xe, Xn, i0e, bp } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { zD, Wge } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { IUt, IMe, Age, tyt } from "B:/~BUN/root/chunk-qp0344nb.js";
import { UFt, RD, Zin, jX, WX, sn, BG, L3, fje, SOo, mp, OKn, zFt, vOo, kw, zX } from "B:/~BUN/root/chunk-zayh6xmh.js";
import { Mee, axr, CTo as detail } from "B:/~BUN/root/chunk-0evdcwvf.js";
import { R3n } from "B:/~BUN/root/chunk-cqw1xaqm.js";
import { HEe } from "B:/~BUN/root/chunk-dq3y90rd.js";
function NU() {
  if (!Xn()) return !1;
  if (RD() !== void 0) return !0;
  if (a.ANTHROPIC_UNIX_SOCKET) return !1;
  return bp();
}
function Zpt() {
  return NU() && d() && (E("tengu_ccr_bridge", !1) || f());
}
function f() {
  if ($m() || a.DISABLE_GROWTHBOOK || gjt() !== "no-telemetry" || R3n() || !NU() || !b() || !h()?.organizationUuid || W()) return !1;
  try {
    let e = Fn(),
      o = e?.refreshToken ? e.subscriptionType ?? null : null;
    return o !== null && M.includes(o);
  } catch {
    return !1;
  }
}
var M = ["pro", "max", "team", "enterprise"];
function Nrn() {
  if (Zpt()) return null;
  if (!p()) return "not_signed_in";
  if (!d()) return "api_key_auth";
  if (!b()) return "no_profile_scope";
  return "not_in_rollout";
}
function c() {
  return !1;
}
function SG() {
  return eF()?.settings.disableRemoteControl === !0;
}
function _x() {
  if (c()) return !0;
  return L();
}
function L() {
  if (SG()) return !1;
  return !xN() && Zpt();
}
function lTo() {
  return !1;
}
function dTo() {
  if (c()) return !0;
  return !SG() && !xN() && NU();
}
async function cTo() {
  return (await QAr()) === null;
}
async function QAr() {
  if (c()) return null;
  if (SG()) return "managed_disabled";
  if (!NU()) return "not_first_party";
  if (xN()) return "cloud_session";
  if (!d()) return p() ? "not_subscription_auth" : "not_signed_in";
  if (f() || (await yb("tengu_ccr_bridge"))) return null;
  if (!$m()) return "flags_disabled";
  return Gi() ? "gate_off" : "flags_unreachable";
}
var I = "Remote Control is disabled by your organization's policy. Contact your organization admin for access.",
  k = 86400000,
  N = 2147483647;
function T() {
  return zX();
}
function yGn() {
  let {
    featureLabel: featureLabel,
    verb: verb
  } = WX("allow_remote_control");
  return IUt(featureLabel, verb, zD(), I);
}
function COe(e) {
  let o = e ? ["allow_remote_control", "allow_remote_sessions"] : ["allow_remote_control"];
  try {
    for (let policy of o) {
      let kind = mp(policy);
      switch (kind) {
        case null:
        case "cache_miss":
        case "route_missing":
          continue;
        case "latched":
          {
            if (!L3() && !D()) continue;
            let {
              featureLabel: featureLabel_2,
              verb: verb_2
            } = WX(policy);
            return {
              policy: policy,
              kind: kind,
              detail: IMe(featureLabel_2, verb_2)
            };
          }
        case "org_denied":
          if (kw()?.restrictions[policy]?.allowed !== !1 && !L3() && !D()) continue;
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
function D() {
  let e = jX();
  return e !== void 0 && Zin.has(e);
}
var i = (code, reason) => ({
  reason: reason,
  code: code,
  orgPolicyDenied: !1
});
async function ZDt() {
  if (c()) return null;
  if (!NU()) return i("not_first_party", z());
  if (xN()) return i("cloud_session", "Remote Control is not available inside a cloud session.");
  if (SG()) return i("managed_disabled", Mee);
  if (!p()) return i("not_signed_in", "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account.");
  if (!d()) return i("not_subscription_auth", eLt({
    prefix: "Remote Control requires claude.ai subscription auth.",
    suffix: "to use Remote Control."
  }));
  if (!b()) return i("token_scope_limited", "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control.");
  if (!h()?.organizationUuid) return i("no_organization", "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information.");
  await Zie();
  let e = tLt();
  if (e === "unavailable") return i("policy_unverified", axr);
  if (e === "denied") return {
    reason: P(),
    code: "org_policy_denied",
    orgPolicyDenied: !0
  };
  if (f()) return null;
  if (!$m()) {
    let o = i1r();
    if (o) return i("flags_disabled", `Remote Control requires feature-flag evaluation, which is disabled because ${o} is set. Unset it (or run in a shell without it) to use Remote Control.`);
    if (a.DISABLE_GROWTHBOOK) return i("flags_disabled", "Remote Control requires feature-flag evaluation, which is disabled because DISABLE_GROWTHBOOK is set. Unset it (or run in a shell without it) to use Remote Control.");
    return i("flags_disabled", "Remote Control requires feature-flag evaluation, which is unavailable in this environment.");
  }
  if (!(await yb("tengu_ccr_bridge"))) {
    if (!Gi()) {
      if (o5(), await yb("tengu_ccr_bridge")) return null;
      if (!Gi()) return i("flags_unreachable", "Couldn't verify Remote Control eligibility \u2014 the feature-flag service was unreachable (offline or blocked). Retry, or run with `--debug` / `claude doctor` for details.");
    }
    return i("gate_off", "Remote Control isn't enabled for this account. If you recently changed plans, run `claude auth logout` then `claude auth login` to refresh your entitlements, or `claude doctor` for details.");
  }
  return null;
}
async function x() {
  return (await ZDt())?.reason ?? null;
}
function P() {
  try {
    if (fje()) return tyt("Remote Control");
    if (OKn("allow_remote_control")) return IMe("Remote Control", "is");
    if (!T()) return Age("Remote Control");
    if (!SOo()) return I;
    return yGn();
  } catch {
    return axr;
  }
}
var U = "set by your organization's configuration, not an admin setting";
function H({
  policyVerdict: policyVerdict,
  policyDenialIsAuthoritative: policyDenialIsAuthoritative,
  currentTaints: currentTaints
}) {
  if (policyVerdict !== "denied" || !policyDenialIsAuthoritative) return !1;
  try {
    return !fje() && !OKn("allow_remote_control") && HEe(currentTaints).length > 0;
  } catch {
    return !1;
  }
}
function eft() {
  if (c()) return null;
  if (SG()) return Mee;
  let e = oo(),
    policyCacheRevision = UFt(),
    remoteControlLockReason = e.remoteControlLockReason;
  if (remoteControlLockReason !== void 0 && remoteControlLockReason.policyCacheRevision === policyCacheRevision) return remoteControlLockReason.reason;
  let reason_2 = K();
  return e.remoteControlLockReason = {
    policyCacheRevision: policyCacheRevision,
    reason: reason_2
  }, reason_2;
}
function K() {
  let e = tLt();
  if (e === "allowed") return null;
  if (e === "unavailable") return axr;
  return P();
}
function nsi() {
  if (!YW()) return "";
  let e = o => o ? "set" : "unset";
  try {
    let o = Fn(),
      n = Object.values($Qe).filter(item => Fe(process.env[item]));
    return ["", "[debug] Remote Control auth state:", `  isBareMode=${wr()}`, `  hasOAuthAccessToken=${!!o?.accessToken}`, `  oauthScopes=${o?.scopes?.join(",") ?? "none"}`, `  hasClaudeAIInferenceScope=${p()}`, `  isClaudeAISubscriber=${d()}`, `  hasProfileScope=${b()}`, `  oauthAccount.organizationUuid=${h()?.organizationUuid ? "set" : "unset"}`, `  ANTHROPIC_API_KEY=${e(process.env.ANTHROPIC_API_KEY)}`, `  ANTHROPIC_AUTH_TOKEN=${e(process.env.ANTHROPIC_AUTH_TOKEN)}`, `  apiKeyHelper=${Fm() ? "set" : "unset"}`, `  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=${e(process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR)}`, `  CLAUDE_CODE_OAUTH_TOKEN=${e(process.env.CLAUDE_CODE_OAUTH_TOKEN)}`, `  ANTHROPIC_UNIX_SOCKET=${e(process.env.ANTHROPIC_UNIX_SOCKET)}`, `  3P env=${n.length ? n.join(",") : "none"}`, ...F()].join(`
`);
  } catch (error) {
    return `
[debug] failed to collect auth state: ${error}`;
  }
}
function F() {
  let e = r => r ? "set" : "unset",
    o = n5(),
    n = G();
  return [`  isGrowthBookEnabled=${$m()}`, `  telemetryDisabledBy=${i1r() ?? "none"}`, `  DISABLE_GROWTHBOOK=${e(process.env.DISABLE_GROWTHBOOK)}`, `  hasFreshGrowthBookFeatures=${Gi()}`, `  growthBookFeaturesLoaded=${Object.keys(o).length}`, `  growthBookLastFetched=${n ? `${Y(Date.now() - n)} ago` : "never"}`, `  tengu_ccr_bridge=${String(o.tengu_ccr_bridge ?? "unset")}`];
}
async function uTo() {
  if (xN() && !c()) return {
    disabledReason: null,
    inRemoteSession: !0,
    checks: []
  };
  o5(), await Zie();
  let e = await x(),
    o = i1r() ?? (a.DISABLE_GROWTHBOOK ? "DISABLE_GROWTHBOOK" : null),
    ok_2 = NU(),
    ok_3 = !SG(),
    ok_4 = p(),
    ok_5 = d(),
    ok_6 = b(),
    ok_7 = !!h()?.organizationUuid,
    policyVerdict_2 = tLt(),
    policyDenialIsAuthoritative_2 = T(),
    v = H({
      policyVerdict: policyVerdict_2,
      policyDenialIsAuthoritative: policyDenialIsAuthoritative_2,
      currentTaints: Wge()
    }),
    O = $m(),
    m = f(),
    ok_8 = m || (await yb("tengu_ccr_bridge")),
    B = Gi(),
    checks = [{
      label: ok_2 ? "Connected to the Anthropic API (api.anthropic.com)" : "Not connected to the Anthropic API (api.anthropic.com)",
      ok: ok_2
    }, {
      label: ok_3 ? "Not disabled by org policy (disableRemoteControl)" : "Disabled by org policy (disableRemoteControl)",
      ok: ok_3
    }, {
      label: ok_4 ? "Signed in to claude.ai" : "Not signed in to claude.ai",
      ok: ok_4
    }, {
      label: ok_5 ? "claude.ai subscription active" : "claude.ai subscription auth not active",
      ok: ok_5
    }, {
      label: ok_6 ? "Sign-in includes the user:profile scope" : "Sign-in is missing the user:profile scope",
      ok: ok_6
    }, {
      label: ok_7 ? "Organization resolved" : "Organization not resolved",
      ok: ok_7
    }, {
      label: policyVerdict_2 === "allowed" ? "Org policy allows Remote Control (allow_remote_control)" : policyVerdict_2 === "unavailable" ? "Org policy could not be verified (allow_remote_control)" : !policyDenialIsAuthoritative_2 ? "Org policy not loaded, see the Organization policy line above (allow_remote_control)" : "Org policy does not allow Remote Control (allow_remote_control)",
      ok: policyVerdict_2 === "allowed",
      detail: v ? U : void 0
    }, {
      label: O ? "Feature-flag evaluation enabled" : "Feature-flag evaluation disabled",
      ok: O || m,
      detail: o ? m ? `disabled by ${o}; Remote Control does not need it on a paid plan` : `disabled by ${o}` : void 0
    }, {
      label: ok_8 ? "Remote Control enabled for this account" : B ? "Remote Control not enabled for this account" : "Remote Control availability could not be verified",
      ok: ok_8,
      detail: m ? "decided from your plan, feature flags are off" : B ? void 0 : "no server response this session"
    }];
  return {
    disabledReason: e !== null && ok_2 && ok_3 && ok_4 && ok_5 && ok_6 && ok_7 && policyVerdict_2 === "denied" && !policyDenialIsAuthoritative_2 ? "Remote Control needs your organization's policy, which isn't loaded \u2014 see the Organization policy line above." : e,
    inRemoteSession: !1,
    checks: checks
  };
}
function G() {
  try {
    return ue().cachedGrowthBookFeaturesAt;
  } catch {
    return;
  }
}
function Y(e) {
  let o = Math.round(e / 1000);
  if (o < 120) return `${o}s`;
  let n = Math.round(o / 60);
  if (n < 120) return `${n}m`;
  let r = Math.round(n / 60);
  if (r < 48) return `${r}h`;
  return `${Math.round(r / 24)}d`;
}
function eLt({
  prefix: prefix,
  suffix: suffix
}) {
  try {
    let {
      source: source
    } = YE({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (source === "ANTHROPIC_API_KEY") return `${prefix} ANTHROPIC_API_KEY is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${suffix}`;
    if (source === "apiKeyHelper") return `${prefix} apiKeyHelper is configured, so this session is using API-key auth \u2014 unset it ${suffix}`;
    if (process.env.ANTHROPIC_AUTH_TOKEN) return `${prefix} ANTHROPIC_AUTH_TOKEN is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${suffix}`;
    let {
        source: source_2
      } = Ya(),
      l = cEe(source_2);
    if (source_2 !== "none" && l) return `${prefix} This session is using ${source_2} auth \u2014 ${l}`;
    if (process.env.ANTHROPIC_UNIX_SOCKET) return `${prefix} ANTHROPIC_UNIX_SOCKET is set without CLAUDE_CODE_OAUTH_TOKEN, so requests on the socket carry no claude.ai login (on a claude ssh remote: the local machine is API-key-authed).`;
  } catch {}
  return `${prefix} Unset ANTHROPIC_API_KEY / apiKeyHelper / ANTHROPIC_AUTH_TOKEN ${suffix}`;
}
var u = "Remote Control is only available when using Claude via api.anthropic.com.",
  A = "unset it (or run in a shell without it) to use Remote Control.",
  V = "unset them (or run in a shell without them) to use Remote Control.";
function z() {
  let e = xe();
  if (e !== "firstParty") {
    if (e === "gateway") return `${u} This session uses a ${ok.gateway}, which does not support Remote Control.`;
    if (e === "bedrock" && i0e() === "mantle") return `${u} ${$Qe.bedrock} and ${$Qe.mantle} are set, so this session is using ${ok.bedrock} + ${ok.mantle} \u2014 ${V}`;
    return `${u} ${$Qe[e]} is set, so this session is using ${ok[e]} \u2014 ${A}`;
  }
  if (!bp()) {
    let o = a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ? " (_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL does not apply to Remote Control.)" : "";
    return `${u} ANTHROPIC_BASE_URL is set and does not point at api.anthropic.com, so this session is using a custom endpoint \u2014 ${A}${o}`;
  }
  if (a.ANTHROPIC_UNIX_SOCKET) return `${u} ANTHROPIC_UNIX_SOCKET is set, so this session sends requests through a local socket rather than to api.anthropic.com \u2014 ${A}`;
  return u;
}
function p() {
  try {
    return Boolean(Fn()?.scopes?.includes(IA));
  } catch {
    return !1;
  }
}
function d() {
  try {
    return Et();
  } catch {
    return !1;
  }
}
function b() {
  try {
    return Jp();
  } catch {
    return !1;
  }
}
function h() {
  try {
    return ue().oauthAccount;
  } catch {
    return;
  }
}
function W() {
  try {
    return zFt("require_trusted_devices") || BG();
  } catch {
    return !0;
  }
}
async function Zie() {
  try {
    await q();
  } catch (error) {
    t(`[bridge] policy-limits hydrate for the Remote Control diagnostic failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}
async function q() {
  try {
    if (kw() !== null) return;
  } catch {}
  let e = await import("B:/~BUN/root/chunk-v3zcvmws.js");
  e.initializePolicyLimitsLoadingPromise();
  let o = oo();
  if (o.diagnosticPolicyKick === void 0) {
    let n = e.loadPolicyLimits();
    n.catch(() => {}).finally(() => {
      o.diagnosticPolicyKick = void 0;
    }), o.diagnosticPolicyKick = Nt(n, e.POLICY_LIMITS_COLD_AWAIT_MS, "bridge_diagnostic_policy_limits").catch(() => {});
  }
  await o.diagnosticPolicyKick;
}
function tLt() {
  try {
    return sn("allow_remote_control") ? "allowed" : "denied";
  } catch {
    return "unavailable";
  }
}
function zve() {
  return _x() && tLt() === "allowed";
}
function xN() {
  return Fe(process.env.CLAUDE_CODE_REMOTE) || Bn();
}
function pTo() {
  return E("tengu_bridge_repl_v2_cse_shim_enabled", !0);
}
function Gve() {
  return E("tengu_luminous_seal", !0);
}
function fTo() {
  return E("tengu_bridge_partial_messages", !1);
}
function _Gn() {
  return E("tengu_wobbly_pinwheel", !0);
}
function ZAr() {
  return E("tengu_copper_kestrel", !0);
}
function nLt() {
  return E("tengu_bridge_auth_revive", !0);
}
function exr() {
  return E("tengu_ethereal_mist", !0);
}
function mTo() {
  return E("tengu_wild_gosling", !1);
}
function tft() {
  return E("tengu_humble_petal", !0);
}
function gTo() {
  return E("tengu_moonlit_lagoon", !0);
}
function hTo() {
  return E("tengu_bridge_resume_respects_local_owner", !0);
}
function yTo() {
  return E("tengu_sequential_puffin", !0);
}
function Vve() {
  return E("tengu_bridge_owner_pinned_end", !0);
}
function bGn() {
  return E("tengu_glimmering_glade", !0);
}
function _To() {
  return E("tengu_lucky_quill", !0);
}
function bTo() {
  return E("tengu_keen_lantern", !0);
}
function STo() {
  return E("tengu_zany_melody", !0);
}
function txr() {
  return E("tengu_bridge_host_declined_end", !0);
}
function wTo() {
  return E("tengu_bridge_signed_out_neutral", !0);
}
function Frn() {
  return E("tengu_ccr_v2_send_events_cli", !0);
}
function wG() {
  return E("tengu_ccr_v2_session_crud_cli", !1);
}
function rsi() {
  return E("tengu_ccr_v2_bridge_create_cli", !1);
}
function Hrn() {
  return E("tengu_composed_quail", !0);
}
function vTo() {
  return E("tengu_gravel_chorus", !0);
}
function nft() {
  return nxr().value;
}
function nxr() {
  if (xN()) return {
    value: !1,
    source: "remote_env"
  };
  let value = vOo("remote_control_at_startup");
  if (f()) return {
    value: !1,
    source: value === !1 ? "org_policy" : "growthbook"
  };
  if (ROe()) return {
    value: !0,
    source: "persistent_remote_session"
  };
  if (value !== void 0) return {
    value: value,
    source: "org_policy"
  };
  return {
    value: E("tengu_cobalt_harbor", !1),
    source: "growthbook"
  };
}
function eae() {
  let e = NJe();
  return e !== void 0 ? e : nft();
}
function ROe() {
  return !1;
}
function osi() {
  return !1;
}
function $rn() {
  return E("tengu_amber_relay", !1);
}
async function ssi() {
  return !1;
}
function z8e() {
  {
    let {
      value: value_2,
      source: source_3
    } = En("tengu_bridge_apply_server_session_config", !0);
    if (value_2 !== !1) return !0;
    if (source_3 === "override") return !1;
    return !(source_3 === "payload" && V6n().organizationUUID);
  }
  return !1;
}
function rxr() {
  return E("tengu_bridge_child_auto_mode", !0);
}
function kTo() {
  return E("tengu_bridge_child_auto_over_settings", !0);
}
function oxr() {
  return E("tengu_bridge_rc_child_artifact", !0);
}
function rLt() {
  return E("tengu_bridge_rc_projects_hint", !0);
}
function sxr() {
  return E("tengu_bridge_child_machine_settings", !0);
}
function ixr() {
  return E("tengu_bridge_rc_child_auto_compact", !0);
}
function ETo() {
  let e = E("tengu_bridge_rc_child_idle_exit_ms", k);
  if (typeof e !== "number" || !Number.isFinite(e) || e < 1) return 0;
  return Math.min(Math.floor(e), N);
}
function Urn() {
  return E("tengu_bridge_rc_child_restart_resume", !0);
}
function Brn() {
  return {
    enabled: E("tengu_bridge_subagent_frames", !0),
    forwardText: E("tengu_bridge_subagent_text", !1)
  };
}
function TTo(e, replBridgeEnabled) {
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
export { NU, Zpt, Nrn, SG, _x, lTo, dTo, cTo, QAr, yGn, COe, ZDt, eft, nsi, uTo, eLt, Zie, tLt, zve, xN, pTo, Gve, fTo, _Gn, ZAr, nLt, exr, mTo, tft, gTo, hTo, yTo, Vve, bGn, _To, bTo, STo, txr, wTo, Frn, wG, rsi, Hrn, vTo, nft, nxr, eae, ROe, osi, $rn, ssi, z8e, rxr, kTo, oxr, rLt, sxr, ixr, ETo, Urn, Brn, TTo };