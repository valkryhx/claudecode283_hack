// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { j5, DN, Ncn, wKn, Qnt, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, Sr, d, k, x0, qt, tx, nx, Im, Ai } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { lwt, Jc, nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Z2e, ZPr, W1, oBn, sBn, gPs, iBn, zOr, HBn, jko, Vko, iie, Tm, k_, Kl, gu, wyt, ZBn, Vf, DOs, hn, vR, Yd, jt, Gt, Mz, Le, Jk, rin, fe, EE } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { oAe } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Bs, wCo, Kn } from "B:/~BUN/root/chunk-gvasf6q6.js";
import { iKi } from "B:/~BUN/root/chunk-1zzrbtzr.js";
import { ebe } from "B:/~BUN/root/chunk-64qg3pvz.js";
import { IQe, MQe, TNe, X_o, OAr } from "B:/~BUN/root/chunk-rc0vwsyy.js";
import { N4o } from "B:/~BUN/root/chunk-7e6w46ha.js";
import { ker, P4o, ABe, cSn } from "B:/~BUN/root/chunk-mb8474dz.js";
import { Ove } from "B:/~BUN/root/chunk-nkakgqwa.js";
import { Tst, QBo } from "B:/~BUN/root/chunk-xxsb2zge.js";
import { vke, E2r, Est, WEt, C9n, T2r, C2r, xne, KBo, jYe, xgn, Pgn, k7s } from "B:/~BUN/root/chunk-mfj52jen.js";
import { gL } from "B:/~BUN/root/chunk-q82am8wz.js";
import { V1n } from "B:/~BUN/root/chunk-h4ga5e8b.js";
import { Ca } from "B:/~BUN/root/chunk-65zedn3n.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
async function V(e, credentials) {
  try {
    if (fe().claudeCodeFirstTokenDate !== void 0) {
      g("api_first_token_date_fetch");
      return;
    }
    let p = await jt.get("/api/organization/claude_code_first_token_date", {
      auth: "async",
      timeout: 1e4,
      credentials: credentials
    });
    if (!p.ok) {
      if (p.reason === "no-auth") t(`Failed to get auth headers for first-token-date fetch: ${p.detail}`, {
        level: "error"
      }), m("api_first_token_date_fetch", "request_failed");
      return;
    }
    let claudeCodeFirstTokenDate = p.data?.first_token_date ?? null;
    if (claudeCodeFirstTokenDate !== null) {
      let s = new Date(claudeCodeFirstTokenDate).getTime();
      if (isNaN(s)) {
        a(Error(`Received invalid first_token_date from API: ${claudeCodeFirstTokenDate}`)), m("api_first_token_date_fetch", "invalid_date");
        return;
      }
    }
    await Le(s => ({
      ...s,
      claudeCodeFirstTokenDate: claudeCodeFirstTokenDate
    }), e), g("api_first_token_date_fetch");
  } catch (error) {
    if (Im(error)) t(`Failed to fetch first token date: ${d(error)}`, {
      level: "error"
    });else a(error);
    m("api_first_token_date_fetch", "request_failed");
  }
}
var ae = "Couldn't save your login. Try logging in again.",
  ie = "Couldn't save your login. If your Mac's keychain is locked, unlock it and log in again.",
  LPe = "Sign in again to take your previous account or API key off the config file.";
async function jot(e, {
  storageV5: storageV5,
  credentials: credentials_2,
  clock: clock
} = {}) {
  let {
      departingLoginMayRemain: departingLoginMayRemain,
      ...s
    } = await ZFo(e, {
      storageV5: storageV5,
      credentials: credentials_2,
      keepStoredLogin: W1(e.scopes) && Boolean(e.refreshToken && e.expiresAt)
    }),
    {
      result: result,
      locked: locked
    } = await Q(() => Vko(e, credentials_2, "sign_in"), credentials_2, {
      clock: clock
    }),
    replacedLogin = locked ? result.replaced : void 0,
    replacedLoginUnrestorable = Gt() && !locked && result.replaced !== void 0;
  if (k_(), process.env.CLAUDE_CODE_OAUTH_TOKEN) if (result.success) delete process.env.CLAUDE_CODE_OAUTH_TOKEN;else process.env.CLAUDE_CODE_OAUTH_TOKEN = e.accessToken;
  if (j5()) DN(result.success ? null : e.accessToken), Ncn(!1);
  if (wKn(result.success ? null : e.accessToken), "transient" in result && result.transient === !0 && !i.CLAUDE_CODE_OAUTH_TOKEN && !j5()) throw new Sr(x() === "macos" ? ie : ae);
  if (X() && credentials_2 !== void 0) await Y(credentials_2);
  let {
    warning: warning
  } = result;
  if (warning) l("tengu_oauth_storage_warning", {
    warning: warning === wCo || warning === jko ? f(warning) : b("other")
  });
  if (await sBn(e.accessToken, storageV5).catch(O => t(String(O), {
    level: "error"
  })), W1(e.scopes)) await V(storageV5, credentials_2).catch(O => t(String(O), {
    level: "error"
  }));else if (!(await gPs(e.accessToken, storageV5))) throw Error("Unable to create API key. The server accepted the request but did not return a key.");
  return await eHo({
    storageV5: storageV5,
    credentials: credentials_2,
    ...s
  }), {
    ...(departingLoginMayRemain && {
      departingLoginMayRemain: departingLoginMayRemain
    }),
    storage: {
      success: result.success,
      backendName: result.backendName,
      transient: result.transient,
      fallbackWritten: result.fallbackWritten,
      landedToken: {
        accessToken: e.accessToken,
        refreshToken: e.refreshToken,
        clientId: e.clientId
      },
      ...(replacedLogin !== void 0 && {
        replacedLogin: replacedLogin
      }),
      ...(replacedLoginUnrestorable && {
        replacedLoginUnrestorable: replacedLoginUnrestorable
      }),
      sessionAuth: result.success || DOs(e.accessToken) ? "fresh" : Vf() ? "previous" : "none"
    }
  };
}
async function ZFo(e, {
  storageV5: storageV5_2,
  credentials: credentials_3,
  keepStoredLogin = !1
}) {
  let o = hn(),
    incomingIdentity = {
      accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid,
      organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid
    },
    preserveQuotaAutoResume = gu(o, incomingIdentity),
    _ = gu(vR(), incomingIdentity),
    A = await Tm(credentials_3),
    artifactAccount = _ && (A === "env" || A === "fd" || A === "store" && preserveQuotaAutoResume) ? "same_account" : "account_switch",
    keepStoredLogin_2 = keepStoredLogin && Boolean(incomingIdentity.organizationUuid) && gu(Yd(), incomingIdentity) && gu(await EE(storageV5_2), incomingIdentity),
    S = await ABe({
      clearOnboarding: !1,
      preserveInProcessTokens: !0,
      preserveNonAnthropicAuth: !0,
      keepStoredLogin: keepStoredLogin_2,
      storageV5: storageV5_2,
      preserveQuotaAutoResume: preserveQuotaAutoResume,
      artifactAccount: artifactAccount,
      incomingIdentity: incomingIdentity,
      credentials: credentials_3
    }),
    departingLoginMayRemain_2 = !1;
  if (S !== void 0) {
    if (!(await Jk(F => {
      let D = {
        ...F
      };
      return D.primaryApiKey = void 0, ker(D);
    }, storageV5_2)) && (await rin(storageV5_2)) !== void 0) t("A sign-in could not take the last account or API key off the config file.", {
      level: "error"
    }), departingLoginMayRemain_2 = !0;
  }
  Qnt(null), oAe(null);
  let v = e.profile ?? (await Z2e(e.accessToken));
  if (v?.account && v.organization) iBn({
    accountUuid: v.account.uuid,
    emailAddress: v.account.email,
    organizationUuid: v.organization.uuid,
    displayName: v.account.display_name || void 0,
    fullName: v.account.full_name || void 0,
    hasExtraUsageEnabled: v.organization.has_extra_usage_enabled ?? void 0,
    billingType: v.organization.billing_type ?? void 0,
    subscriptionCreatedAt: v.organization.subscription_created_at ?? void 0,
    accountCreatedAt: v.account.created_at,
    ccOnboardingFlags: v.organization.cc_onboarding_flags ?? {},
    claudeCodeTrialEndsAt: v.organization.claude_code_trial_ends_at ?? null,
    claudeCodeTrialDurationDays: v.organization.claude_code_trial_duration_days ?? null,
    seatTier: v.organization.seat_tier ?? null,
    planDisplayName: ZPr(v),
    profileFetchedAt: Date.now()
  }, storageV5_2);else if (e.tokenAccount) iBn({
    accountUuid: e.tokenAccount.uuid,
    emailAddress: e.tokenAccount.emailAddress,
    organizationUuid: e.tokenAccount.organizationUuid
  }, storageV5_2);
  return ebe({
    action: "login",
    success: !0,
    authMethod: "oauth"
  }), {
    preserveQuotaAutoResume: preserveQuotaAutoResume,
    artifactAccount: artifactAccount,
    incomingIdentity: incomingIdentity,
    departingLoginMayRemain: departingLoginMayRemain_2
  };
}
async function eHo({
  storageV5: storageV5_3,
  credentials: credentials_4,
  preserveQuotaAutoResume: preserveQuotaAutoResume_2 = !1,
  incomingIdentity: incomingIdentity_2
}) {
  if (await cSn(storageV5_3, {
    preserveQuotaAutoResume: preserveQuotaAutoResume_2,
    artifactAccount: "same_account",
    incomingIdentity: incomingIdentity_2
  }), X() && credentials_4 !== void 0) await Y(credentials_4);
  await Ove(storageV5_3, credentials_4);
}
var se = 3;
async function Q(e, r, {
  withoutLock: withoutLock,
  clock: clock_2
} = {}) {
  if (!Gt() || q()) return {
    result: await e(),
    locked: !1
  };
  for (let o = 1;; o++) {
    let s = !1;
    try {
      return await ZBn(async ({
        isCompromised: isCompromised
      }) => {
        let _ = !isCompromised();
        if (!_ && withoutLock !== void 0) return {
          result: withoutLock(),
          locked: !1
        };
        return s = !0, {
          result: await e(),
          locked: _ && !isCompromised()
        };
      }, r);
    } catch (error) {
      if (s) throw error;
      if (error instanceof wyt && o < se) {
        await J(100 * o, void 0, {
          clock: clock_2
        });
        continue;
      }
      return t(`OAuth: no refresh lock for a credential write (${I(error)})`, {
        level: "warn"
      }), withoutLock !== void 0 ? {
        result: withoutLock(),
        locked: !1
      } : {
        result: await e(),
        locked: !1
      };
    }
  }
}
async function Y(e) {
  iie(), await Kl(e);
}
var ue = "The refused sign-in could not be fully undone: this machine's previous sign-in state could not be confirmed restored, and the refused sign-in was revoked. Sign in again (claude auth login, or /login).",
  ce = "The refused sign-in could not be fully undone: this machine's previous sign-in state could not be confirmed restored, and the refused sign-in may still be valid. Sign in again (claude auth login, or /login), and ask your admin to revoke it if this device is shared.";
function Pmn(e) {
  return e.revoked ? ue : ce;
}
function le(e) {
  return k(e) === "ELOCKED" || qt(e) || tx(nx(e));
}
function I(e) {
  return x0(e instanceof Error ? e.name : void 0) ?? (e === null ? "null" : typeof e);
}
function j3n(e, r) {
  if (le(e)) {
    t(`Rolling back a refused sign-in failed (${r}; ${I(e)}: ${k(e) ?? nx(e) ?? "no errno"})`, {
      level: "error"
    });
    return;
  }
  a(new R(`Rolling back a refused sign-in threw (${r}: ${I(e)})`, "Rolling back a refused sign-in threw"));
}
async function tHo(e, {
  storageV5: storageV5_4,
  credentials: credentials_5,
  clock: clock_3
}) {
  if (e === void 0 || e.success && !Gt()) {
    let A = await ABe({
      clearOnboarding: !1,
      preserveNonAnthropicAuth: !0,
      storageV5: storageV5_4,
      credentials: credentials_5
    });
    return {
      restored: A === void 0,
      revoked: A !== "key_on_file"
    };
  }
  i.unset("CLAUDE_CODE_OAUTH_TOKEN"), DN(null), Qnt(null), k_();
  let landedToken = e.landedToken,
    s = !0,
    revoked = !1;
  if (landedToken !== void 0) {
    let A = landedToken.refreshToken !== null && Te() === "firstParty" ? landedToken.refreshToken : null,
      w = Kn();
    try {
      let replacedLogin_2 = e.replacedLogin,
        O = replacedLogin_2 === void 0;
      if (replacedLogin_2 !== void 0) {
        let y = await Q(() => de(w, landedToken.accessToken, replacedLogin_2, credentials_5, clock_3), credentials_5, {
          withoutLock: () => !1,
          clock: clock_3
        });
        O = y.locked && y.result;
      }
      if (O) await zOr(w, y => {
        if (y.claudeAiOauth?.accessToken !== landedToken.accessToken) return y;
        let {
          claudeAiOauth: claudeAiOauth,
          ...T
        } = y;
        return T;
      }, credentials_5);
      let S = await HBn(w, y => y.claudeAiOauth?.accessToken, credentials_5);
      s = O && !S.some(item => item.value === Bs || item.value === landedToken.accessToken || Gt() && item.value !== void 0 && item.value !== replacedLogin_2?.accessToken);
    } catch (error) {
      j3n(error, "credential store"), s = !1;
    } finally {
      if (A !== null) try {
        revoked = await oBn(A, landedToken.clientId);
      } catch (error) {
        a(new R(`Revoking a refused sign-in's token threw (${I(error)})`, "Revoking a refused sign-in's token threw"));
      }
    }
  }
  await cSn(storageV5_4, {
    artifactAccount: Vf() ? "account_switch" : "signed_out",
    credentials: credentials_5
  });
  let _ = await P4o(storageV5_4);
  return {
    restored: s && _ && e.replacedLoginUnrestorable !== !0,
    revoked: revoked
  };
}
async function de(e, r, claudeAiOauth_2, p, clock_4) {
  for (let s = 0; s < 3; s++) {
    if (s > 0) await J(100 * s, void 0, {
      clock: clock_4
    });
    try {
      if ((await e.mutate(_ => _.claudeAiOauth?.accessToken === r ? {
        ..._,
        claudeAiOauth: claudeAiOauth_2
      } : _, p)).success) return !0;
    } catch (error) {
      j3n(error, "credential store");
    }
  }
  return !1;
}
async function Omn(e, r, n) {
  switch (e.reason) {
    case "org_pin_mismatch":
    case "org_verify_failed":
    case "managed_settings_invalid":
      break;
    case "org_pin_api_key_conflict":
    case "provider_not_allowed":
      return;
  }
  try {
    return await tHo(r, n);
  } catch (error) {
    return j3n(error, "sign-out"), {
      restored: !1,
      revoked: !1
    };
  }
}
function ge(e) {
  let r = e !== null && typeof e === "object" && e.isAxiosError === !0 ? e.response : void 0;
  if (r === void 0) return {
    hasSchema: !1,
    requestIdPresent: !1,
    htmlPage: !1
  };
  let n = IQe(r.headers ?? {}),
    p = MQe(e),
    errorType = TNe({
      serverErrorType: p.serverErrorType,
      serverErrorStamped: !0
    });
  return {
    hasSchema: errorType !== void 0,
    requestIdPresent: n.requestIdPresent === !0,
    htmlPage: n.responseContentType === "html",
    errorType: errorType,
    errorCode: p.serverErrorCode
  };
}
function Z(e) {
  let {
      kind: kind,
      status: n
    } = Ai(e),
    p = ge(e),
    reason = p.hasSchema && p.requestIdPresent ? T2r(n, p.errorType, p.errorCode, MQe(e).serverAuthDenial) : void 0;
  switch (kind) {
    case "auth":
      if (reason !== void 0) return {
        reason: reason,
        httpStatus: n
      };
      if (!p.hasSchema || !p.requestIdPresent || p.htmlPage) return {
        reason: "blocked_by_intermediary",
        httpStatus: n
      };
      if (n === 401) return {
        reason: "unavailable_credential_refresh",
        httpStatus: n
      };
      return {
        reason: "refused_not_entitled",
        httpStatus: n
      };
    case "timeout":
      return {
        reason: "unavailable_timeout"
      };
    case "network":
      return {
        reason: "unavailable_connect"
      };
    case "http":
      if (n === void 0) return {
        reason: "unavailable_connect"
      };
      if (n >= 500) return {
        reason: "unavailable_server",
        httpStatus: n
      };
      if (n >= 300 && n < 400) return {
        reason: "blocked_by_intermediary",
        httpStatus: n
      };
      if (C9n(n)) return {
        reason: "unavailable_rate_limited",
        httpStatus: n
      };
      if (n === 407 || reason === void 0) return {
        reason: "blocked_by_intermediary",
        httpStatus: n
      };
      return {
        reason: reason,
        httpStatus: n
      };
    case "other":
      return {
        reason: "client_error"
      };
  }
}
function ee(e, r) {
  if (e !== "client_error") return;
  a(new R(`org-config login probe threw before reaching the transport (${I(r)})`, "org-config login probe threw before reaching the transport"));
}
async function te(e, timeoutMs, n = {}) {
  let p = n.baseApiUrl ?? nn().BASE_API_URL,
    authHeaders = {
      Authorization: `Bearer ${e}`,
      "anthropic-beta": Jc
    },
    s = {
      hasAdmittedCache: !1
    },
    u = (async () => {
      try {
        let c = await (n.requestPolicy ?? OAr)({
          endpoint: X_o(p),
          authHeaders: authHeaders,
          timeoutMs: timeoutMs,
          signal: AbortSignal.timeout(timeoutMs),
          acceptAny2xx: !0
        });
        if (c.kind === "not_modified" || !c.contentType.includes("json") || !c.requestIdPresent) return {
          outcome: {
            ...s,
            reason: "blocked_by_intermediary"
          }
        };
        return {
          outcome: {
            ...s,
            reason: "ok"
          }
        };
      } catch (error) {
        let {
          reason: reason_2,
          httpStatus: httpStatus
        } = Z(error);
        return ee(reason_2, error), {
          outcome: {
            ...s,
            reason: reason_2,
            ...(httpStatus !== void 0 && {
              httpStatus: httpStatus
            })
          },
          httpStatus: httpStatus
        };
      }
    })(),
    _ = (async () => {
      try {
        let {
          status: c,
          contentType: contentType,
          requestIdPresent: requestIdPresent
        } = await (n.requestSettings ?? N4o)(e, {
          timeoutMs: timeoutMs
        });
        if (!requestIdPresent || c === 304 || c === 200 && !contentType.includes("json")) return {
          outcome: {
            ...s,
            reason: "blocked_by_intermediary",
            httpStatus: c
          },
          httpStatus: c
        };
        return {
          outcome: {
            ...s,
            reason: c === 404 || c === 204 ? "none_configured" : "ok"
          }
        };
      } catch (error) {
        let {
          reason: reason_3,
          httpStatus: httpStatus_2
        } = Z(error);
        return ee(reason_3, error), {
          outcome: {
            ...s,
            reason: reason_3,
            ...(httpStatus_2 !== void 0 && {
              httpStatus: httpStatus_2
            })
          },
          httpStatus: httpStatus_2
        };
      }
    })(),
    [A, w] = await Promise.all([u, _]);
  return {
    policy: A.outcome,
    settings: w.outcome,
    httpStatus: A.httpStatus ?? w.httpStatus
  };
}
function pe(e) {
  return {
    accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid,
    organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid,
    email: e.profile?.account?.email ?? e.tokenAccount?.emailAddress
  };
}
function hYe(e) {
  return lwt(e.scopes) && (e.profile === void 0 || e.subscriptionType === null || e.subscriptionTypeSource === "profile" && e.subscriptionTypeVerifiedAt === void 0);
}
function B(e, r) {
  let {
    reason: reason_4
  } = e.settings;
  if (V1n(reason_4) === "refused" && !E2r(r, reason_4)) return e;
  return {
    ...e,
    settings: {
      hasAdmittedCache: !1,
      reason: "not_attempted"
    }
  };
}
async function gYe(e) {
  let r = () => e.readFlag !== void 0 ? {
      flag: e.readFlag(),
      source: e.readFlagSource?.() ?? "override"
    } : Tst(),
    n = e.startupGateFollows === !0,
    p = !n || e.untieredLogin === !0,
    {
      flag: flag,
      source: s
    } = r(),
    u = e.isFlagFetchHeld ?? k7s,
    _ = e.isFlagCacheEmpty ?? Mz;
  if (!flag.enabled && KBo(s, u, _) && n) return {
    ok: !0
  };
  let w = (e.readCandidateInputs ?? WEt)({
      authRecoveryCommand: !1
    }),
    newLogin = e.newLogin,
    O = e.untieredLogin === !0 ? {
      ...w,
      hostToken: !1,
      tier: null,
      credentialShape: "untiered_login",
      storedLoginOrigin: !0,
      tierVerifiedAtMs: void 0
    } : newLogin !== void 0 ? {
      ...w,
      hostToken: !1,
      tier: newLogin.subscriptionType,
      credentialShape: !lwt(newLogin.scopes) ? "api_key" : newLogin.subscriptionType === null ? "untiered_login" : "stored_login",
      storedLoginOrigin: !0,
      tierVerifiedAtMs: newLogin.subscriptionTypeSource === "profile" ? newLogin.subscriptionTypeVerifiedAt ?? null : void 0
    } : {
      ...w,
      hostToken: !1
    },
    S = e.untieredLogin === !0,
    y = h => S ? {
      ...O,
      tier: h.plans[0] ?? "team",
      credentialShape: "stored_login",
      tierVerifiedAtMs: void 0
    } : O,
    v = h => {
      let P = e.newLogin === void 0 ? hn() : void 0,
        H = e.newLogin !== void 0 ? pe(e.newLogin) : {
          accountUuid: P?.accountUuid,
          organizationUuid: P?.organizationUuid,
          email: P?.emailAddress
        },
        re = H.accountUuid === void 0 && H.organizationUuid === void 0;
      return we((e.fetchServedFlag ?? QBo)(e.accessToken, H, h).catch(() => {
        return;
      }), h).then(U => U !== void 0 && re && !(U.flag.enabled && vke(U.flag, y(U.flag)).candidate) ? void 0 : U);
    },
    candidacy = vke(flag, y(flag)),
    F = "no";
  if (Pgn({
    armed: flag.enabled && candidacy.candidate,
    flagSource: s,
    candidacy: candidacy
  }, u, _)) {
    let h = await v(Math.min(flag.budgetMs, gL));
    F = h !== void 0 ? "served" : "nothing_in_time", {
      flag: flag,
      source: s
    } = h ?? r(), candidacy = vke(flag, y(flag));
  }
  let D = !n && s !== "override" && s !== "disabled" && !u();
  if (D && F === "no" && !candidacy.candidate && ye(candidacy.exclusion)) {
    let h = await v(Math.min(flag.budgetMs, gL));
    if (F = h !== void 0 ? "served" : "nothing_in_time", h !== void 0) ({
      flag: flag,
      source: s
    } = h), candidacy = vke(flag, y(flag));
  }
  if (!flag.enabled || !candidacy.candidate) return {
    ok: !0
  };
  let N = performance.now(),
    K = F !== "served" && (D || xgn(s, u, _)) ? v(flag.budgetMs) : void 0,
    G = e.tokenUsedElsewhere !== !0 && iKi(),
    M = await (e.probe ?? te)(e.accessToken, flag.budgetMs),
    C = G ? B(M, flag) : M,
    decision = Est({
      flag: flag,
      candidacy: candidacy,
      policy: C.policy,
      settings: C.settings,
      surface: "login",
      blockedMs: Math.max(0, Math.round(performance.now() - N))
    });
  if (decision.verdict !== "pass" && K !== void 0) {
    let h = (await K) ?? {
        flag: flag,
        source: s
      },
      P = vke(h.flag, y(h.flag));
    if (!h.flag.enabled || !P.candidate) return t(`org-config gate (login): policy=${C.policy.reason} settings=${C.settings.reason} \u2192 released by the served flag`), {
      ok: !0
    };
    if (flag = h.flag, s = h.source, candidacy = P, G) C = B(M, flag);
    decision = Est({
      flag: flag,
      candidacy: candidacy,
      policy: C.policy,
      settings: C.settings,
      surface: "login",
      blockedMs: Math.max(0, Math.round(performance.now() - N))
    });
  }
  if ((e.reprobeUnavailableOnce === !0 || p) && decision.verdict === "blocked" && _e(decision.reason)) {
    let h = flag.budgetMs - Math.max(0, Math.round(performance.now() - N));
    if (h > 0) {
      if (C = await (e.probe ?? te)(e.accessToken, h), G) C = B(C, flag);
      decision = Est({
        flag: flag,
        candidacy: candidacy,
        policy: C.policy,
        settings: C.settings,
        surface: "login",
        blockedMs: Math.max(0, Math.round(performance.now() - N))
      });
    }
  }
  let z = e.organizationName ?? (newLogin !== void 0 ? void 0 : hn()?.organizationName),
    outcomes = {
      policy: C.policy,
      settings: C.settings
    },
    context = {
      organizationName: z === void 0 || z === null ? void 0 : Ca(z),
      httpStatus: decision.resource === void 0 ? void 0 : outcomes[decision.resource].httpStatus ?? C.httpStatus
    },
    evaluation = {
      decision: decision,
      message: C2r(decision, context),
      flag: flag,
      flagSource: s,
      candidacy: candidacy,
      armed: !0,
      context: context,
      attempt: 0,
      decidedWithoutWaiting: !1,
      outcomes: outcomes
    };
  if (await (e.report ?? (h => jYe(h, h.outcomes)))(evaluation), t(`org-config gate (login): policy=${C.policy.reason} settings=${C.settings.reason} \u2192 ${decision.verdict}`), !xne(decision)) return {
    ok: !0,
    evaluation: evaluation
  };
  if (decision.verdict === "blocked" && !p) return {
    ok: !0,
    evaluation: evaluation,
    warning: nHo(evaluation)
  };
  return {
    ok: !1,
    evaluation: evaluation,
    message: evaluation.message ?? "Claude Code couldn't load your organization's settings, which it requires before this sign-in can be used."
  };
}
function nHo(e) {
  let {
    reason: reason_5
  } = e.decision;
  return `Signed in. Claude Code couldn't verify your organization's settings yet${reason_5 !== void 0 ? ` (${oe(reason_5)})` : ""}; it will check again when you start a session.`;
}
async function W3n(e) {
  let {
      minted: r,
      ...n
    } = e,
    p = e.readCandidateInputs ?? WEt,
    o = await gYe({
      ...n,
      newLogin: r,
      untieredLogin: hYe(r),
      startupGateFollows: !1,
      reprobeUnavailableOnce: !0,
      tokenUsedElsewhere: !0,
      organizationName: e.organizationName ?? r.profile?.organization?.name ?? r.tokenAccount?.organizationName,
      readCandidateInputs: _ => ({
        ...p(_),
        provider: "firstParty",
        firstPartyBaseUrl: !0
      })
    });
  if (o.ok) return o;
  let s = await kWr({
    accessToken: e.accessToken,
    ...r
  }, "withheld mint", e.revoke);
  if (o.evaluation.decision.verdict === "refused") return {
    ok: !1,
    evaluation: o.evaluation,
    message: `${o.message} ${ne(s)}`
  };
  let {
    reason: reason_6
  } = o.evaluation.decision;
  return {
    ok: !1,
    evaluation: o.evaluation,
    message: `Couldn't verify your organization's settings${reason_6 !== void 0 ? ` (${oe(reason_6)})` : ""}. ${ke(reason_6)}. ${ne(s)}`
  };
}
var me = "Anthropic reported the token revoked; it was not shown.",
  he = "The token could not be confirmed revoked and was not shown \u2014 ask your admin to revoke it in Console.";
function ne(e) {
  return e ? me : he;
}
function ke(e) {
  switch (e) {
    case "unavailable_connect":
    case "unavailable_timeout":
      return "Retry when the network is available";
    case "blocked_by_intermediary":
      return "A network proxy or gateway answered instead of Anthropic \u2014 retry from a network that reaches it directly";
    case "unavailable_settings_unusable":
      return "Ask an admin to fix the organization's managed settings, then retry";
    case "unavailable_server":
    case "unavailable_rate_limited":
    case "unavailable_credential_refresh":
    case "unavailable_pending":
    default:
      return "Retry shortly";
  }
}
async function ile(e) {
  return (await kWr(e, "refused sign-in")) ? "Anthropic reported the new sign-in revoked; your previous login is unchanged." : "The new sign-in could not be confirmed revoked \u2014 ask your admin to revoke it if this device is shared; your previous login is unchanged.";
}
async function kWr(e, r, n = oBn) {
  if (r !== "withheld mint" && Te() !== "firstParty") return !1;
  let p = e.refreshToken ?? null;
  try {
    return await n(p ?? e.accessToken, e.clientId, p !== null ? "refresh_token" : "access_token");
  } catch (error) {
    return a(new R(`Revoking a ${r}'s grant threw (${I(error)})`, "Revoking an uninstalled grant threw")), !1;
  }
}
function ye(e) {
  switch (e) {
    case "flag_off":
    case "tier_not_in_plans":
    case "rollout_percent":
      return !0;
    default:
      return !1;
  }
}
function _e(e) {
  switch (e) {
    case "unavailable_timeout":
    case "unavailable_connect":
    case "unavailable_server":
    case "unavailable_rate_limited":
    case "unavailable_credential_refresh":
    case "unavailable_pending":
      return !0;
    default:
      return !1;
  }
}
function oe(e) {
  switch (e) {
    case "unavailable_timeout":
      return "timed out";
    case "unavailable_connect":
      return "could not connect";
    case "unavailable_server":
      return "Anthropic returned an error";
    case "unavailable_rate_limited":
      return "asked to retry shortly";
    case "unavailable_credential_refresh":
      return "sign-in not yet accepted";
    case "blocked_by_intermediary":
      return "a network proxy answered instead of Anthropic";
    case "unavailable_pending":
      return "still loading";
    case "unavailable_settings_unusable":
      return "the published settings could not be applied";
    case "not_attempted":
      return "not loaded in the mode this process was launched in";
    default:
      return "not yet available";
  }
}
function Imn(e) {
  let {
    verdict: verdict,
    reason: reason_7
  } = e.decision;
  return verdict === "refused" ? "refused" : reason_7 === "not_attempted" ? "not_loaded_in_launch_mode" : "unavailable";
}
class OrgConfigLoginRefusedError extends R {
  evaluation;
  constructor(e, r) {
    super(e, "OrgConfigLoginRefusedError: the org-config gate refused a completed sign-in");
    this.evaluation = r;
    this.name = "OrgConfigLoginRefusedError";
  }
}
export { LPe, jot, ZFo, eHo, Pmn, j3n, tHo, Omn, hYe, gYe, nHo, W3n, ile, kWr, Imn, OrgConfigLoginRefusedError as SUe };