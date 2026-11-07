// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe, rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { z, ye, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { UN } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { hd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { yf, id, pG, I_, aY, Zu, Hp, cjs, Ek, ujs } from "B:/~BUN/root/chunk-65j2302z.js";
import { ij, Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Ym, be, zCo, kp, wte, kte, Uie } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Mfe, dr, v4, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Kz as serverId, kAe as path } from "B:/~BUN/root/chunk-5az22yft.js";
import { YFe, iu, Yet } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { te, gD } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { nfe, rV, rgt } from "B:/~BUN/root/chunk-b5ry9py2.js";
import { gGe, Nen, wA } from "B:/~BUN/root/chunk-z2c6k7e2.js";
import { Ren, pGe, Mt } from "B:/~BUN/root/chunk-h6zqt1s4.js";
import { uee } from "B:/~BUN/root/chunk-s9vv4h32.js";
import { FQe, lbo, fbe, By, Sz, B$n, gn, iRe, xd, k2e, Nv } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { ap, v3 } from "B:/~BUN/root/chunk-m749kjym.js";
import { PLe } from "B:/~BUN/root/chunk-ymgf3kpk.js";
var J = "/_warmup",
  timeout = 3000,
  Q = 600000,
  maxContentLength = 262144;
function S1i(e) {
  let n = te();
  return n.contentHostEgressDenied.has(e.env) || n.contentHostEgressUnanswered.has(Yet(e));
}
function T(e) {
  let n = te().contentHostEgressProbed.get(e);
  return n !== void 0 && Date.now() - n < Q;
}
function Lws(e) {
  return q() || te().contentHostEgressDenied.has(e.env) || T(Yet(e));
}
async function ken(e, n) {
  let r = te(),
    o = Yet(e);
  if (q()) {
    r.contentHostEgressProbed.delete(o), r.contentHostEgressUnanswered.add(o);
    return;
  }
  if (r.contentHostEgressDenied.has(e.env)) {
    r.contentHostEgressProbed.delete(o), r.contentHostEgressUnanswered.add(o);
    return;
  }
  if (T(o)) return;
  let s = r.contentHostEgressInFlight.get(o);
  if (s !== void 0) return s.catch(a => {
    if (n.aborted) throw a;
    return ken(e, n);
  });
  let d = Z(e, o, n).finally(() => {
    r.contentHostEgressInFlight.delete(o);
  });
  return r.contentHostEgressInFlight.set(o, d), d;
}
async function Z(e, n, r) {
  let o = te(),
    s = () => {
      o.contentHostEgressUnanswered.delete(n), o.contentHostEgressProbed.set(n, Date.now());
    },
    d = p => {
      t(`[artifact] egress probe of ${n}: ${p}; reading the host as unreachable for this check`), o.contentHostEgressProbed.delete(n), o.contentHostEgressUnanswered.add(n);
    },
    a = () => {
      o.contentHostEgressProbed.delete(n), o.contentHostEgressUnanswered.add(n), o.contentHostEgressDenied.add(e.env);
    },
    c;
  try {
    c = await hd.get(`${n}${J}`, {
      signal: AbortSignal.any([r, AbortSignal.timeout(timeout)]),
      timeout: timeout,
      maxRedirects: 0,
      maxContentLength: maxContentLength,
      responseType: "text",
      validateStatus: () => !0
    });
  } catch (error) {
    if (r.aborted) throw error;
    if (rgt(error)) return a();
    return d(UN(error) ? "an answer larger than the cap" : "no answer");
  }
  if (rV(c.status, c.headers)) return a();
  let h = () => nfe(c.headers, c.data, p => p);
  if (!(c.status >= 200 && c.status < 300 || c.status === 403 && pGe(c.headers, h()) || c.status === 404 && Ren(c.headers, h()))) return d(`unrecognised HTTP ${c.status}`);
  return s();
}
var A = "classifier",
  _ = "person",
  w1i = "classifier";
function ZE(e) {
  switch (e.operation) {
    case "delete":
      return u("delete", "person", "this_call", "known");
    case "change_access":
      return u("access_change", "person", "this_call", "known");
    case "standing_job":
      return e.turnStartedByHuman ? u("standing_job", "classifier", "artifact", "known") : u("standing_job", "classifier", "this_call", "unattended");
    case "write":
      {
        if (!e.turnStartedByHuman) {
          if ((e.routineWrite === !0 || e.commentWrite === !0) && e.public === !1 && e.outsideAudience !== !0 && e.canWrite === !0 && e.invitedByOtherOrg !== !0) return {
            ask: !1,
            foreignRead: !1
          };
          return u("public_change", "classifier", "this_call", "unattended");
        }
        if (e.public === !0) return u("public_change", "classifier", "artifact", "known");
        if (e.public === void 0) return u("public_change", "classifier", "this_call", "facts_missing", "public");
        if (e.invitedByOtherOrg === !0) return {
          ...u("public_change", "classifier", "artifact", "known"),
          about: "someone_else"
        };
        if (e.owned !== !0 && e.canWrite !== !0) return {
          ask: !1,
          foreignRead: !1
        };
        if (e.outsideAudience === !0) return {
          ...u("public_change", "classifier", "artifact", "known"),
          about: "outside_audience"
        };
        return {
          ask: !1,
          foreignRead: !1
        };
      }
    case "read":
      {
        if (e.owned === !0) return {
          ask: !1,
          foreignRead: !1
        };
        if (e.outsideOrg === !0) return {
          ...u("foreign_read", _, e.turnStartedByHuman ? "artifact" : "this_call", "known"),
          about: "outside_org"
        };
        if (e.owned === void 0) return u("foreign_read", A, "this_call", "facts_missing", "owned");
        if (e.networkOff === void 0) return u("foreign_read", A, "this_call", "facts_missing", "networkOff");
        if (e.networkOff) return u("foreign_read", A, e.turnStartedByHuman ? "artifact" : "this_call", "known");
        return {
          ask: !1,
          foreignRead: !0
        };
      }
  }
}
var ee = !0;
function k1i(e) {
  if (!ee) return {
    ask: !1,
    foreignRead: !1
  };
  if (e.public === !0) return u("public_change", "classifier", "this_call", "known");
  if (e.public === void 0) return u("public_change", "classifier", "this_call", "facts_missing", "public");
  if (e.invitedByOtherOrg === !0) return {
    ...u("public_change", "classifier", "this_call", "known"),
    about: "someone_else"
  };
  if (e.outsideAudience === !0) return {
    ...u("public_change", "classifier", "this_call", "known"),
    about: "outside_audience"
  };
  return {
    ask: !1,
    foreignRead: !1
  };
}
function u(e, answeredBy, remember, basis, missing) {
  return {
    ask: !0,
    class: e,
    answeredBy: answeredBy,
    remember: remember,
    basis: basis,
    ...(missing !== void 0 && {
      missing: missing
    })
  };
}
function nEr(e) {
  return e.ask && e.remember === "artifact";
}
function PLt(e) {
  return e.endpoint ? `${e.class}:endpoint` : e.class;
}
function pX(e, n) {
  return te().askClassConsent.has(g(e, n));
}
function v1i(e, n, r = !1) {
  let o = te();
  if (o.askClassConsent.add(g(e, n)), r) o.askClassPersonConsent.add(g(e, n));
}
function ALe(e, n, r = !1) {
  let o = PLt(e);
  return e.informedOnly ? Nws(n) : e.answeredBy === "person" || r ? ven(o, n) : pX(o, n);
}
function E1i(e) {
  te().askClassOutsideOrgConsent.add(g("foreign_read", e));
}
function Nws(e) {
  return te().askClassOutsideOrgConsent.has(g("foreign_read", e));
}
var ne = 512;
function Amt(e, n, r) {
  if (e.toolUseId === void 0) return;
  let askNamedOtherOrg = te().askNamedOtherOrg,
    s = askNamedOtherOrg.get(e.toolUseId),
    d = r ? n : [],
    a = s === void 0 ? d : d.filter(item => s.includes(item));
  if (askNamedOtherOrg.delete(e.toolUseId), askNamedOtherOrg.set(e.toolUseId, a), askNamedOtherOrg.size > ne) {
    let c = askNamedOtherOrg.keys().next().value;
    if (c !== void 0) askNamedOtherOrg.delete(c);
  }
}
function kmo(e) {
  if (e.toolUseId !== void 0) te().askNamedOtherOrg.delete(e.toolUseId);
}
function OLt(e, n) {
  return e.toolUseId !== void 0 && (te().askNamedOtherOrg.get(e.toolUseId) ?? []).includes(n);
}
function ven(e, n) {
  return te().askClassPersonConsent.has(g(e, n));
}
var re = ["artifactDbReadConsentSlugs", "artifactDbReadHumanConsentSlugs", "artifactReadConsentSlugs", "artifactAssetUploadConsentSlugs", "artifactAssetUploadHumanConsentSlugs", "artifactAssetReadConsentSlugs", "artifactAssetReadHumanConsentSlugs", "artifactOutsideOrgConsentSlugs", "artifactHandlersReadConsentSlugs", "artifactHandlersReadHumanConsentSlugs", "artifactHandlersWriteConsentSlugs", "artifactHandlersWriteHumanConsentSlugs"],
  T1i = [...re, "artifactRoomJoinConsentSlugs", "artifactPlanPublishConsentPaths", "artifactWatchApproved", "artifactDbWriteApproved", "artifactDbWriteHumanApproved"],
  oe = Object.freeze({});
function o7e(e) {
  return (e.artifactConsentEpoch ?? 0) === te().accountEpoch ? e : oe;
}
function lse(e, n, r) {
  return o7e(e)[n]?.[r] === !0;
}
function rEr(e, n) {
  return lse({
    artifactConsentEpoch: e.consentEpoch.get(),
    artifactReadConsentSlugs: e.sharedReadConsent.get()
  }, "artifactReadConsentSlugs", n);
}
function xmt() {
  let {
    accountEpoch: accountEpoch,
    conversationEpoch: conversationEpoch
  } = te();
  return `${accountEpoch}:${conversationEpoch}`;
}
function g(e, n) {
  return `${xmt()}:${e}:${n}`;
}
var m = " \xB7 web fetch, design sync and Channels wait for it";
function S() {
  let e = Nv();
  if (e === null) return "nothing";
  return e === FQe ? "unrestricted" : "stale_cache";
}
function oEr() {
  let reason = Sz();
  if (reason !== void 0) return {
    state: "ineligible",
    reason: reason
  };
  let outcome = fbe(),
    hasCache = Nv() !== null,
    egressKeysWithheld = B$n("allow_web_fetch");
  if (outcome === null) return {
    state: "pending",
    hasCache: hasCache,
    egressKeysWithheld: egressKeysWithheld
  };
  return {
    state: "settled",
    outcome: outcome,
    served: S(),
    egressKeysWithheld: egressKeysWithheld
  };
}
function ie(e) {
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
      return "not applicable to individual subscription plans";
  }
}
function se(e, n, r, o) {
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
    case "stale_tunnel_credential":
      return `The machine running claude ssh changed credentials while ${r} was answering, so that answer wasn't used${s}`;
    case "request_failed":
      if (n === 404) return `The request for ${YFe} on ${r} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path \xB7 Fix: ask your network admin to allow it${s}`;
      if (n === 304) return `A caching proxy between you and ${r} answered in place of the API (HTTP 304) \xB7 Fix: ask your network admin to stop caching ${YFe}${s}`;
      if (n === 407) return `Your proxy asked for authentication before it would forward the request to ${r} (HTTP 407) \xB7 Fix: check your proxy credentials${s}`;
      return n ? `HTTP ${n} on the request to ${r}${s}` : `Couldn't complete the request to ${r}; if a proxy intercepts TLS, its certificate must be trusted (NODE_EXTRA_CA_CERTS) \xB7 Fix: check your network or proxy${s}`;
  }
}
function sEr(e) {
  switch (e.state) {
    case "ineligible":
      return ie(e.reason);
    case "pending":
      return e.hasCache ? `Using the copy on disk \xB7 not refreshed yet this session${e.egressKeysWithheld ? m : ""}` : `Not loaded yet${e.egressKeysWithheld ? m : ""} \xB7 if this persists, check your network or proxy`;
    case "settled":
      {
        let {
          outcome: outcome_2
        } = e;
        if (outcome_2.success) return `Loaded from ${outcome_2.host}`;
        let r = se(outcome_2.errorCode, outcome_2.httpStatus, outcome_2.host, outcome_2.retrying),
          o = outcome_2.retrying ? " yet, still retrying" : "",
          s = e.egressKeysWithheld ? ", web fetch, design sync, Channels" : "";
        switch (e.served) {
          case "stale_cache":
            return `Couldn't refresh${o} \xB7 using the last copy on this machine${e.egressKeysWithheld ? m : ""} \xB7 ${r}`;
          case "unrestricted":
            return e.egressKeysWithheld ? `Couldn't load${o} \xB7 no restrictions applied this session, except that web fetch, design sync and Channels stay off until it loads \xB7 ${r}` : `Couldn't load${o} \xB7 no restrictions applied this session \xB7 ${r}`;
          case "nothing":
            return `Couldn't load${o} \xB7 features that must check it first (Remote Control, cloud sessions, /feedback${s} and others) stay off, and some need a restart once it loads \xB7 ${r}`;
        }
      }
  }
}
function C1i(e) {
  switch (e.state) {
    case "pending":
      return !1;
    case "settled":
      return !e.outcome.success;
    case "ineligible":
      return e.reason === "third_party_provider" || e.reason === "custom_base_url";
  }
}
var ae = ["policySettings", "flagSettings", "userSettings"],
  le = ["localSettings", "projectSettings"];
function E(e) {
  let offSources = [];
  if (e.envDisableVar !== void 0 && ue(e.envDisableVar)) offSources.push({
    layer: "env",
    via: "envVar"
  });
  let r;
  for (let a of ae) {
    let c = L(a, e);
    if (D(offSources, a, a === "policySettings" ? [...c, ...kte()] : c, e), r === void 0 && c.some(item => item?.[e.enableKey] === !0) && (a !== "policySettings" || Uie())) r = a;
  }
  let lockedAboveUser = offSources.some(item => item.layer === "env" || item.layer === "policySettings" || item.layer === "flagSettings");
  for (let a of le) D(offSources, a, L(a, e), e);
  let s = offSources.some(item => item.layer === "localSettings" || item.layer === "projectSettings");
  return {
    enabled: offSources.length === 0 && (e.defaultOn || r !== void 0),
    decidedBy: offSources[0]?.layer ?? r ?? "default",
    offSources: offSources,
    lockedAboveUser: lockedAboveUser,
    userControllable: !lockedAboveUser && !s && Kt("userSettings")
  };
}
function L(e, n) {
  if (e === "policySettings") return [...kp(), be("policySettings")];
  if (!Kt(e)) return [];
  if (e === "localSettings") return [be(e), zCo()];
  let r = be(e);
  if (e === "projectSettings" && ce(r, n) && Kt("userSettings") && Ym()) return [];
  return [r];
}
function ce(e, n) {
  return e?.[n.enableKey] !== void 0 || n.legacyDisableKey !== void 0 && e?.[n.legacyDisableKey] !== void 0;
}
function D(e, layer, r, o) {
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
function ue(e) {
  if (i[e] || Pe(C(ap(), e)) || Pe(wte(e)) || Pe(C(v3(), e))) return !0;
  for (let n of ["flagSettings", "userSettings"]) if (Kt(n) && Pe(C(be(n)?.env, e))) return !0;
  return !1;
}
function C(e, n) {
  if (e === void 0) return;
  if (n in e) return e[n];
  let r = weakMap.get(e);
  if (r?.has(n)) return r.get(n);
  let o = Object.entries(e).find(([s]) => s.toUpperCase() === n)?.[1];
  if (Object.isFrozen(e)) if (r) r.set(n, o);else weakMap.set(e, new Map([[n, o]]));
  return o;
}
var weakMap = new WeakMap();
var U = {
    enableKey: "enableArtifact",
    legacyDisableKey: "disableArtifact",
    defaultOn: !0
  },
  W = {
    ...U,
    envDisableVar: "CLAUDE_CODE_DISABLE_ARTIFACT"
  };
function s7e() {
  return E(W);
}
function y() {
  return !s7e().enabled;
}
function vmo() {
  return !E(U).enabled || Pe(wte("CLAUDE_CODE_DISABLE_ARTIFACT"));
}
function Emo() {
  let CLAUDE_CODE_ENTRYPOINT = i.CLAUDE_CODE_ENTRYPOINT;
  return aY() || CLAUDE_CODE_ENTRYPOINT === "claude-code-github-action" || CLAUDE_CODE_ENTRYPOINT === "mcp";
}
function N(e) {
  return e === "local-agent" || e?.startsWith("claude-coworker") === !0;
}
function xv() {
  return Zu() === "local-agent" && Hp() && !Ek() && ujs();
}
function iee() {
  return pG() && cjs() || xv();
}
function Pmt() {
  return I_();
}
function ZT(e) {
  return e !== void 0 && Pmt() && S1i(e);
}
function fGe(e, n) {
  return !e && (ZT(n) || i7e(n.slug));
}
function A1(e) {
  return e !== void 0 && e.outsideOrgReader === !0 && wA();
}
function i7e(e) {
  return _ === "person" && A1(Mt(e));
}
function HI(e) {
  return A1(e) || Een(e);
}
function Een(e) {
  return e !== void 0 && e.external === !0 && wA();
}
function Tmo(e) {
  return e !== void 0 && e.probeFailed !== !0 && e.external !== !0 && (e.outsideOrgReader === !1 || e.role === "owner");
}
function fe() {
  let CLAUDE_CODE_ENTRYPOINT_2 = i.CLAUDE_CODE_ENTRYPOINT;
  if (CLAUDE_CODE_ENTRYPOINT_2 === "local-agent" && xv()) return !1;
  return N(CLAUDE_CODE_ENTRYPOINT_2);
}
function cNn() {
  return N(Zu()) && !xv();
}
function pe() {
  return gGe() && ge();
}
function ge() {
  return K() === null;
}
function K() {
  if (Te() !== "firstParty") return "third_party_provider";
  if (St()) return "essential_traffic_only";
  if (rs(i.CLAUDE_CODE_ARTIFACT)) return "artifact_env_off";
  if (!Pe(i.CLAUDE_CODE_ARTIFACT) && !Pe(i.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT) && Emo()) return "sdk_default_off";
  return null;
}
function R() {
  return gGe() && w();
}
function w() {
  return B() === null;
}
function B() {
  if (fe()) return "surface_excluded";
  return K();
}
function jSa() {
  if (y()) return !1;
  return R();
}
function Fws() {
  if (!(gD() && te().heldCcrArtifactsEntry)) {
    if (!i.CLAUDE_CODE_REMOTE) return !1;
    let e = PLe();
    if (e === void 0 || !v4(e.config) || !uee(e, {
      path: path,
      serverId: serverId
    })) return !1;
    te().heldCcrArtifactsEntry = !0;
  }
  return !vmo() && R();
}
function WSa() {
  let e = te(),
    n = z();
  if (e.scratchpadStartedForCcrEntry === n) return !1;
  return e.scratchpadStartedForCcrEntry = n, !0;
}
function Hws() {
  return i.CLAUDE_CODE_ARTIFACT_ASSETS === void 0 && SA() && iu() === null && !i.CLAUDE_CODE_REMOTE;
}
function he() {
  let e = Sz();
  return e === void 0 || e === "prosumer_oauth" || e === "no_auth";
}
function M() {
  return Pe(i.CLAUDE_CODE_ARTIFACT) && !1 || v("tengu_cobalt_plinth", he());
}
function Y() {
  return M() && yCe();
}
function Ae() {
  return j() === null;
}
function j() {
  if (!M()) return "growthbook_off";
  if (Nen() || yCe()) return G(), null;
  if (iEr() !== null) return null;
  return "admin_policy";
}
function iEr() {
  if (Nen()) return null;
  if (!x(dr())) return null;
  let e = xd("allow_cobalt_plinth");
  if (e !== "cache_miss" && e !== "route_missing") return G(), null;
  if (k2e("allow_cobalt_plinth")) return null;
  let cause = e === "route_missing" ? "policy_route_missing" : "policy_fetch_failed",
    outcome_3 = fbe();
  if (outcome_3 !== null && !outcome_3.success && _e(outcome_3)) return te().artifactPolicyFetchAnswer = outcome_3, {
    cause: cause,
    outcome: outcome_3
  };
  let outcome_4 = Cmo();
  return outcome_4 === null ? null : {
    cause: cause,
    outcome: outcome_4
  };
}
function Cmo() {
  return gD() ? te().artifactPolicyFetchAnswer : null;
}
function $ws() {
  if (k2e("allow_cobalt_plinth")) return "org_denied";
  let e = xd("allow_cobalt_plinth");
  return e === "org_denied" || e === "latched" ? e : null;
}
function _e(e) {
  if (!e.retrying) return !0;
  if (e.errorCode === "auth_failed" && e.httpStatus === 401 || e.errorCode === "spurious_304") return !1;
  return !lbo(e);
}
function G() {
  if (gD()) te().artifactPolicyFetchAnswer = null;
}
function SA() {
  if (iu() !== null) return OF();
  return gGe() && OF() && yCe();
}
function OF() {
  return Ten() === null;
}
function Ten() {
  if (y()) return "switched_off";
  if (iu() !== null) return null;
  return B() ?? j();
}
function uNn() {
  if (y()) return !1;
  if (!pe()) return !1;
  return Y();
}
function O() {
  let e = new Set(),
    n = !1,
    r = !1;
  for (let s of s7e().offSources) switch (s.layer) {
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
function me() {
  return O() !== null && R() && Y();
}
function Uws() {
  let e = te();
  if (e.artifactDisabledSessionEvaluated) return;
  if (ij() === null) return;
  if (e.artifactDisabledSessionEvaluated = !0, !me()) return;
  let n = O();
  if (n === null) return;
  k("tengu_artifact_disabled_session", {
    mechanism: f(n),
    session_interactivity: !ye() || yf() === "claude-vscode" || id() ? b("interactive") : b("noninteractive")
  });
}
function Bws(e) {
  if (!ujs() || Zu() !== "local-agent" || Ek()) return;
  let n = te(),
    tool_listed = e === null && !Nen() && !yCe() && iEr() !== null,
    o = tool_listed ? "admin_policy" : e;
  if (o === null) {
    n.artifactRegisteredSeen = !0;
    let a = n.artifactWithheldReasonsLogged.at(-1);
    if (a === void 0 || n.artifactWithheldRecoveryLogged) return;
    n.artifactWithheldRecoveryLogged = !0, k("tengu_artifact_tool_recovered", {
      withheld_reason: f(a),
      ...H(a)
    });
    return;
  }
  if (ij() === null) return;
  let s = Se(o),
    d = n.artifactWithheldReasonsLogged.includes(s);
  if (d && (!tool_listed || n.artifactWithheldListedLogged)) return;
  if (!d) n.artifactWithheldReasonsLogged.push(s);
  if (tool_listed) n.artifactWithheldListedLogged = !0;
  k("tengu_artifact_tool_withheld", {
    reason: f(s),
    off_mechanism: de(s === "switched_off" ? O() : null),
    after_registered: n.artifactRegisteredSeen,
    tool_listed: tool_listed,
    ...H(s)
  });
}
function H(e) {
  if (e !== "org_policy_denied" && e !== "compliance_taint" && e !== "policy_cache_miss" && e !== "policy_route_missing") return {};
  let n = fbe(),
    r = S(),
    o = r === "nothing" ? "none" : r === "unrestricted" ? "fail_open" : n?.success ? "network" : "disk",
    s = !By() ? "ineligible" : n === null || !n.success && n.retrying ? "pending" : n.success ? "ok" : "failed";
  return {
    policy_source: f(o),
    policy_fetch: f(s)
  };
}
function zSa() {
  return te().heldStartupTelemetry ??= [], {
    flush: flush,
    [Symbol.dispose]: flush
  };
}
function flush() {
  let e = te(),
    heldStartupTelemetry = e.heldStartupTelemetry;
  e.heldStartupTelemetry = null;
  for (let r of heldStartupTelemetry ?? []) r();
}
function Cen(e) {
  let heldStartupTelemetry_2 = te().heldStartupTelemetry;
  if (heldStartupTelemetry_2 === null) {
    e();
    return;
  }
  heldStartupTelemetry_2.push(e);
}
function k(...e) {
  Cen(() => l(...e));
}
function Se(e) {
  switch (e) {
    case "surface_excluded":
      return Hp() ? "surface_excluded" : "nested_child_session";
    case "admin_policy":
      {
        if (!x(dr())) return "subscription_ineligible";
        let n = Nv();
        if (n === null) return iRe() ? "policy_route_missing" : "policy_cache_miss";
        return n.restrictions.allow_cobalt_plinth === void 0 ? "compliance_taint" : "org_policy_denied";
      }
    default:
      return e;
  }
}
function Rmo() {
  return W.defaultOn;
}
function Ce() {
  return w() && Ae();
}
function fNn() {
  return Ce() && s7e().userControllable;
}
function yCe() {
  return Amo();
}
function Amo() {
  if (Nen()) return V() === null;
  if (!x(dr())) return !1;
  return gn("allow_cobalt_plinth");
}
function x(e) {
  return e === "team" || e === "enterprise" || e === "pro" || e === "max" || e == null;
}
function jws() {
  return V();
}
function V() {
  if (!Nen()) return null;
  let e = Mfe();
  if (e === null) return "plan_unreadable";
  if (e !== "pro" && e !== "max") return "org_policy_unverifiable";
  if (!By()) return "policy_unavailable";
  if (gn("allow_cobalt_plinth")) return null;
  let n = xd("allow_cobalt_plinth") ?? "org_denied";
  switch (n) {
    case "org_denied":
    case "latched":
    case "cache_miss":
      return n;
    case "route_missing":
      return "policy_route_missing";
  }
}
function pNn() {
  return v("tengu_cobalt_plinth_thrift", !1) === !0;
}
function xLe() {
  return SA();
}
function a7e() {
  return !y() && w();
}
export { S1i, Lws, ken, w1i, ZE, k1i, nEr, PLt, pX, v1i, ALe, E1i, Nws, Amt, kmo, OLt, ven, T1i, o7e, lse, rEr, xmt, oEr, sEr, C1i, s7e, vmo, Emo, xv, iee, Pmt, ZT, fGe, A1, i7e, HI, Een, Tmo, cNn, jSa, Fws, WSa, Hws, iEr, Cmo, $ws, SA, OF, Ten, uNn, Uws, Bws, zSa, Cen, Rmo, fNn, yCe, Amo, jws, pNn, xLe, a7e };