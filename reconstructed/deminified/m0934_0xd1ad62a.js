// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { j, vBe, B$, zY, Fde, $_e } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { P, l, v, Et, gg } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { rE, pK } from "B:/~BUN/root/chunk-zksmb712.js";
import { _ } from "B:/~BUN/root/chunk-51n463p1.js";
import { Hr, $k, d0o, g0o, h1, G0o, yce, rKn, tHr, mRe, bKn, t$, vt, o2, Ee, xI, Yut } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Fx, Ie, bb } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { Eye, TD } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { n$o as version, yBt as version_2, vl, _Wr, c$o, d_e, Un } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { L6e } from "B:/~BUN/root/chunk-hjery5bx.js";
import { cdo, dR, uQt, Luo, Nuo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { swo, GO } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Q3 } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { $me } from "B:/~BUN/root/chunk-88mdabet.js";
import { ZRo, eAo } from "B:/~BUN/root/chunk-65tbbnf1.js";
import { WDr, iVn } from "B:/~BUN/root/chunk-xy9bynby.js";
import { MZr } from "B:/~BUN/root/chunk-ksbs7era.js";
import { F5, rpe } from "B:/~BUN/root/chunk-jjjrkty7.js";
import { Elo } from "B:/~BUN/root/chunk-r1ja2che.js";
import { Oao } from "B:/~BUN/root/chunk-ndb6ecfp.js";
import { _M } from "B:/~BUN/root/chunk-cj9k3aj6.js";
import { nDr } from "B:/~BUN/root/chunk-fhmaxxy1.js";
import { VSt } from "B:/~BUN/root/chunk-7r4zb9xn.js";
import { DH } from "B:/~BUN/root/chunk-db33zsv9.js";
import { I7e } from "B:/~BUN/root/chunk-43sz7dnd.js";
import { o, ut } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { u_e } from "B:/~BUN/root/chunk-g1mh72ry.js";
import { mkdir as T, readFile as O, unlink as x, writeFile as U } from "fs/promises";
import { join as y } from "path";
var x7e = "41077d10-94b8-4194-be48-d251e9eb21b4",
  kZr = [pK, rE],
  K = /^[A-Za-z0-9_.-]+$/,
  S = {
    created_by: "claude-code"
  },
  z = f(() => ut({
    created_by: o().optional(),
    base_url: o().optional(),
    authentication: ut({
      type: o(),
      client_id: o().optional(),
      credentials_path: o().optional()
    })
  })),
  B = f(() => ut({
    created_by: o().optional()
  })),
  M = {
    no_config_dir: !0,
    invalid_profile_name: !0,
    foreign_profile: !0,
    custom_credentials_path: !0,
    api_key_env_nondispatching: !0,
    wif_env_quad: !1,
    third_party_provider: !1,
    api_key_env: !1,
    env_credential_shadow: !1,
    other_deployment_profile: !1,
    federation_profile: !1,
    unreadable_profile: !1
  };
function G(e) {
  return Object.hasOwn(M, e);
}
function EZr(e) {
  if (!(e instanceof P) || e.errorClass === void 0 || !G(e.errorClass)) return null;
  return M[e.errorClass];
}
var N = {
  no_config_dir: "no Anthropic config directory was found",
  invalid_profile_name: "the configured profile name isn't valid",
  foreign_profile: "the profile on this machine belongs to another tool",
  custom_credentials_path: "the existing profile keeps its sign-in somewhere custom",
  api_key_env_nondispatching: "ANTHROPIC_API_KEY is set in this environment"
};
function TZr(e) {
  if (!(e instanceof P) || e.errorClass === void 0 || !Y(e.errorClass)) return null;
  return N[e.errorClass];
}
function Y(e) {
  return Object.hasOwn(N, e);
}
async function WTn() {
  if (!L(a.ANTHROPIC_PROFILE) && a.ANTHROPIC_FEDERATION_RULE_ID && a.ANTHROPIC_ORGANIZATION_ID) throw new P("Workload identity federation is configured in this environment (ANTHROPIC_FEDERATION_RULE_ID and ANTHROPIC_ORGANIZATION_ID), and it takes precedence over the default profile. Set ANTHROPIC_PROFILE to a profile name to sign in with a profile that outranks it.", "Console profile login refused: env-quad federation outranks the implicit profile", "wif_env_quad");
  let e = Ie();
  if (e !== "firstParty") throw new P(`This session uses ${Fx[e]}, which does not use Anthropic Console sign-in.`, "This session uses a third-party provider, which does not use Anthropic Console sign-in.", "third_party_provider");
  let ANTHROPIC_API_KEY = a.ANTHROPIC_API_KEY;
  if (ANTHROPIC_API_KEY) {
    let u = await bKn({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (u.source === "ANTHROPIC_API_KEY" && u.key === ANTHROPIC_API_KEY) throw new P("ANTHROPIC_API_KEY is set in this environment and takes precedence over a profile, so a profile sign-in would not be used. Unset it to sign in this way.", "Console profile login refused: env credential shadows the profile", "api_key_env");
  }
  if (rKn()) throw new P("Something in this environment \u2014 an API key helper, an injected token, or a third-party provider setting \u2014 takes precedence over a profile sign-in, so it would not be used here.", "Console profile login refused: env credential shadows the profile", "env_credential_shadow");
  let configDir = TD();
  if (configDir === null) throw new P("Cannot locate the Anthropic config directory. Set ANTHROPIC_CONFIG_DIR (or HOME) and try again.", "Console profile login refused: no config directory", "no_config_dir");
  let profile = E(configDir),
    c = await I(y(configDir, "configs", `${profile}.json`));
  if (c !== null) {
    if (c.base_url && !bb(c.base_url)) throw new P("This profile is bound to a different Anthropic deployment, so Claude Code will not replace it here. Sign out of it with the tool that created it, then try again.", "Console profile login refused: profile bound to another deployment", "other_deployment_profile");
    if (c.authentication.type === "oidc_federation") throw new P("This machine is set up for workload identity federation, which signs in on its own. If you need a different sign-in, ask whoever configured it.", "Console profile login refused: federation profile", "federation_profile");
    if (c.authentication.type !== "user_oauth") throw new P("Claude Code cannot read the existing sign-in on this machine, so it will not overwrite it. Check the permissions on your Anthropic config directory, then try again.", "Console profile login refused: unreadable or unrecognized profile config", "unreadable_profile");
    if (c.authentication.client_id !== x7e) throw new P("This machine already has a sign-in from another tool that Claude Code cannot replace. Sign out with that tool, then try again.", "Console profile login refused: profile is not a same-client login", "foreign_profile");
    if (c.authentication.credentials_path) throw new P("This profile keeps its sign-in somewhere custom, so Claude Code cannot replace it. Sign out of it with the tool that created it, then try again.", "Console profile login refused: custom credentials_path", "custom_credentials_path");
  }
  if (ANTHROPIC_API_KEY) throw new P("ANTHROPIC_API_KEY is set in this environment. Unset it to sign in without an API key.", "Console profile login refused: non-dispatching env API key present", "api_key_env_nondispatching");
  return {
    profile: profile,
    configDir: configDir,
    isNewProfile: c === null
  };
}
async function CZr(e) {
  let r = await WTn();
  return await T(y(r.configDir, "credentials"), {
    recursive: !0,
    mode: 448
  }), WDr(A(r.configDir, r.profile), () => V(e));
}
async function V(e) {
  let {
      profile: profile_2,
      configDir: configDir_2,
      isNewProfile: isNewProfile
    } = await WTn(),
    c = y(configDir_2, "configs", `${profile_2}.json`);
  await T(y(configDir_2, "configs"), {
    recursive: !0,
    mode: 448
  });
  let u = {
    version: version,
    organization_id: e.organizationUuid,
    workspace_id: e.workspaceId,
    authentication: {
      type: "user_oauth",
      client_id: x7e
    },
    ...S
  };
  await u_e(c, u);
  let g = isNewProfile,
    h = {
      version: version_2,
      type: "oauth_token",
      access_token: e.accessToken,
      refresh_token: e.refreshToken,
      expires_at: Math.floor(e.expiresAtMs / 1000),
      scope: e.scopes.join(" "),
      organization_uuid: e.organizationUuid,
      organization_name: e.organizationName,
      account_email: e.accountEmail
    };
  await u_e(A(configDir_2, profile_2), {
    ...h,
    workspace_id: e.workspaceId,
    workspace_name: e.workspaceName,
    ...S
  });
  let R = await W(y(configDir_2, "active_config"), profile_2 + `
`);
  return t(`Console profile login: wrote credentials for profile ${profile_2}${g ? " (new profile)" : ""}${R ? " (set active)" : ""}`), iVn(), {
    profile: profile_2,
    configDir: configDir_2
  };
}
async function b({
  revoke: revoke
} = {}) {
  try {
    let r = TD();
    if (r === null) return {
      removed: !1
    };
    let n;
    try {
      n = E(r);
    } catch {
      return {
        removed: !1
      };
    }
    let s = await I(y(r, "configs", `${n}.json`));
    if (s === null || !D(s)) return {
      removed: !1
    };
    if ((await k(A(r, n))) === null) return {
      removed: !1
    };
    return await WDr(A(r, n), () => q(revoke));
  } catch (error) {
    if (v(error) === "ENOENT") return {
      removed: !1
    };
    return t(`Logout: profile credential removal failed: ${l(error)}`, {
      level: "error"
    }), {
      removed: !1
    };
  }
}
async function q(e) {
  let r = TD();
  if (r === null) return {
    removed: !1
  };
  let n;
  try {
    n = E(r);
  } catch {
    return {
      removed: !1
    };
  }
  let s = await I(y(r, "configs", `${n}.json`));
  if (s === null || !D(s)) return {
    removed: !1
  };
  let c = A(r, n),
    u = await k(c);
  if (u === null) return {
    removed: !1
  };
  let g = {
    refreshToken: u.refreshToken,
    clientId: x7e
  };
  if (e && g.refreshToken) await e({
    refreshToken: g.refreshToken,
    clientId: g.clientId
  });
  try {
    await x(c);
  } catch (error) {
    return t(`Logout: could not remove profile credentials: ${l(error)}`, {
      level: "error"
    }), {
      removed: !1,
      ...g
    };
  }
  return t(`Logout: removed credentials for profile ${n}`), iVn(), {
    removed: !0,
    ...g
  };
}
function E(e) {
  let r = a.ANTHROPIC_PROFILE || Eye(e);
  if (!L(r)) throw new P(`ANTHROPIC_PROFILE "${r}" is not a valid profile name (letters, digits, '_', '.', '-')`, "ANTHROPIC_PROFILE is not a valid profile name", "invalid_profile_name");
  return r;
}
function L(e) {
  return !!e && K.test(e) && e !== "." && e !== "..";
}
function A(e, r) {
  return y(e, "credentials", `${r}.json`);
}
async function I(e) {
  let r;
  try {
    r = await O(e, "utf-8");
  } catch (error) {
    if (v(error) === "ENOENT") return null;
    if (Et(error)) return {
      authentication: {
        type: "unreadable"
      }
    };
    throw error;
  }
  let n;
  try {
    n = J(r);
  } catch (error) {
    return t(`Profile config is not JSON, treating as foreign: ${l(error)}`), {
      authentication: {
        type: "unreadable"
      }
    };
  }
  let s = z().safeParse(n);
  return s.success ? s.data : {
    authentication: {
      type: "unreadable"
    }
  };
}
function D(e) {
  return e.created_by === S.created_by && e.authentication.type === "user_oauth" && e.authentication.client_id === x7e;
}
async function k(e) {
  let r;
  try {
    r = await O(e, "utf-8");
  } catch (error) {
    if (Et(error)) return null;
    throw error;
  }
  let n;
  try {
    n = J(r);
  } catch {
    return null;
  }
  let s = B().safeParse(n);
  if (!s.success || s.data.created_by !== S.created_by) return null;
  let refresh_token = s.data.refresh_token;
  return {
    refreshToken: typeof refresh_token === "string" ? refresh_token : void 0
  };
}
async function RZr(e) {
  let r = TD();
  if (r === null) return !1;
  try {
    let n = await k(A(r, E(r)));
    return n !== null && n.refreshToken === e;
  } catch {
    return !0;
  }
}
async function W(e, r) {
  try {
    return await U(e, r, {
      flag: "wx",
      mode: 420
    }), !0;
  } catch (error) {
    if (v(error) === "EEXIST") return !1;
    throw error;
  }
}
async function o7({
  clearOnboarding = !1,
  preserveInProcessTokens = !1,
  preserveNonAnthropicAuth = !1,
  storageV5: storageV5,
  preserveQuotaAutoResume = !1,
  artifactAccount = "signed_out",
  incomingIdentity: incomingIdentity,
  credentials: credentials
}) {
  let {
    flushTelemetry: flushTelemetry
  } = await import("B:/~BUN/root/chunk-kj8dysng.js");
  if (await flushTelemetry(), await eAo(artifactAccount), vt()) {
    await c4t(storageV5, {
      preserveQuotaAutoResume: preserveQuotaAutoResume,
      artifactAccount: artifactAccount,
      incomingIdentity: incomingIdentity
    });
    return;
  }
  if (!preserveInProcessTokens && Ie() === "firstParty") {
    let p = Un();
    p.invalidateCache?.();
    let i = await p.readAsync(credentials),
      m = i?.claudeAiOauth;
    if (m?.refreshToken) await $k(m.refreshToken, m.clientId);
    let C = i?.designOauth;
    if (C?.refreshToken) await $k(C.refreshToken, C.clientId);
  }
  if (Ie() === "gateway") {
    let p = Date.now() + 5000;
    for (let C = $_e(); C && Date.now() < p; C = $_e()) await nt(C.catch(() => {}), p - Date.now());
    let i = Un();
    i.invalidateCache?.();
    let m = (await i.readAsync(credentials))?.enterpriseGateway;
    if (m) await G0o(m, credentials);
  }
  if (!preserveInProcessTokens) a.unset("CLAUDE_CODE_OAUTH_TOKEN"), B$(null);
  await tHr(storageV5), await b({
    revoke: !preserveInProcessTokens && Ie() === "firstParty" ? ({
      refreshToken: refreshToken,
      clientId: clientId
    }) => $k(refreshToken, clientId) : void 0
  });
  let w = Un();
  if (preserveNonAnthropicAuth) {
    if (Ie() === "firstParty") {
      w.invalidateCache?.();
      let p = (await w.readAsync(credentials))?.designOauth;
      if (p?.refreshToken) await $k(p.refreshToken, p.clientId);
    }
    await w.mutate(p => {
      let i = {
        ...p
      };
      return delete i.claudeAiOauth, delete i.organizationUuid, delete i.trustedDeviceToken, delete i.enterpriseGateway, delete i.designOauth, i;
    }, credentials).catch(p => {
      let i = v(p);
      if (i === "EPERM" || i === "ENOENT" || gg(p)) {
        t(`[performLogout] re-login secure-storage prune failed (${i}): ${l(p)}`, {
          level: "error"
        });
        return;
      }
      d(p);
    });
  } else {
    let p = !1,
      i = async () => {
        p = !0;
        let m = await Q(w, credentials);
        if (await w.delete(credentials), m && Object.keys(m).length > 0) await Z(w, m, credentials);
      };
    await _Wr(i).catch(m => {
      if (p) throw m;
      return d(m), c$o(i);
    });
  }
  zY(null), Fde(null), await c4t(storageV5, {
    preserveQuotaAutoResume: preserveQuotaAutoResume,
    artifactAccount: artifactAccount,
    incomingIdentity: incomingIdentity,
    credentials: credentials
  }), await Ee(p => {
    let i = {
      ...p
    };
    if (clearOnboarding) {
      if (i.hasCompletedOnboarding = !1, i.subscriptionNoticeCount = 0, i.hasAvailableSubscription = !1, i.customApiKeyResponses !== void 0) i.customApiKeyResponses = {
        approved: [],
        rejected: xI(i).rejected
      };
      let m = I7e;
      if (i.seenNotifications?.[m] !== void 0) {
        let {
          [m]: C,
          ...F
        } = i.seenNotifications;
        i.seenNotifications = F;
      }
    }
    return i.oauthAccount = void 0, i.additionalModelOptionsCache = void 0, i.additionalModelOptionsAnsweredAt = void 0, i.additionalModelCostsCache = void 0, i.modelAccessCache = void 0, i.orgModelDefaultCache = void 0, i.cachedArtifactRoster = void 0, i.artifactRosterDenied = void 0, i.lastSeenOrgDefaultUpdatedAt = void 0, i.clientDataCache = void 0, i.clientDataCacheSlots = void 0, i.autoCompactWindowsCache = void 0, i.cachedUsageUtilization = void 0, i.metricsStatusCache = void 0, i.metricsStatusCacheByPrincipal = void 0, i.githubWebConnectionStatusCache = void 0, i.startupPrefetchedAt = void 0, i;
  }, storageV5), vBe(void 0), _("oauth_logout");
}
async function c4t(e, {
  preserveQuotaAutoResume: preserveQuotaAutoResume_2 = !1,
  artifactAccount: artifactAccount_2 = "signed_out",
  incomingIdentity: incomingIdentity_2,
  credentials: credentials_2
} = {}) {
  if (mRe(), H() && credentials_2 === void 0) d_e();
  L6e(), Yut(), h1(), Hr().providerCache.modelConfigs.clear(), Hr().providerCache.validatedModels.clear(), g0o(), d0o(), yce(), Q3();
  let u = j();
  if (cdo(u.host), Oao(u.host), ZRo(artifactAccount_2, incomingIdentity_2), artifactAccount_2 !== "same_account") Elo(u);
  if (DH.of(u.host).clear(), t$(), dR(u, "account_change"), o2(), rpe.cache?.clear?.(), F5.cache?.clear?.(), await VSt(e), await nDr(), MZr(), Luo(), Nuo(), !preserveQuotaAutoResume_2) _M("account_switch"), GO("account_switch"), swo();
  uQt();
}
async function wKo({
  exit: exit,
  setError: setError,
  setInfo: setInfo,
  storageV5: storageV5_2,
  credentials: credentials_3
}) {
  setInfo("Signing out\u2026"), $me({
    action: "logout",
    success: !0,
    authMethod: "oauth"
  });
  try {
    await o7({
      clearOnboarding: !0,
      storageV5: storageV5_2,
      credentials: credentials_3
    }), exit();
  } catch (error) {
    d(error), setError(`Couldn't sign out \u2014 ${error instanceof Error ? error.message : String(error)}`);
  }
}
async function Z(e, coworkRemoteDevice, n) {
  let s;
  for (let c = 0; c < 2; c++) try {
    let u = await e.mutate(() => ({
      coworkRemoteDevice: coworkRemoteDevice
    }), n);
    if (u.success) return;
    if (s = Error("logout: the device identity could not be written back after the credential wipe"), !u.transient) break;
  } catch (error) {
    s = error;
  }
  d(s);
}
async function Q(e, r) {
  for (let n = 0; n < 2; n++) {
    let s = await (e.readAsyncStrict?.(r) ?? e.readAsync(r));
    if (s !== vl) return s?.coworkRemoteDevice;
  }
  d(Error("logout: secure storage could not be read, so the device identity is not carried across the wipe"));
  return;
}
export { x7e, kZr, EZr, TZr, WTn, CZr, RZr, o7, c4t, wKo };