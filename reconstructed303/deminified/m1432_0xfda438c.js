// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { X4, k$, Gjt, VTe } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { b, c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Nr, d, Wt, of } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { jXe, gDr, nW, dln, yMo, cln, kLr, ELr, cJ, Kg, NO, Xa, R_, gp, M0o, wn, fA, Gt, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { yHr } from "B:/~BUN/root/chunk-245a2x6v.js";
import { xae } from "B:/~BUN/root/chunk-yjayxywk.js";
import { Soe, ORn } from "B:/~BUN/root/chunk-dnxn3zey.js";
import { Qce } from "B:/~BUN/root/chunk-8pa630py.js";
async function h(e, credentials) {
  try {
    if (ue().claudeCodeFirstTokenDate !== void 0) {
      g("api_first_token_date_fetch");
      return;
    }
    let u = await Gt.get("/api/organization/claude_code_first_token_date", {
      auth: "async",
      timeout: 1e4,
      credentials: credentials
    });
    if (!u.ok) {
      if (u.reason === "no-auth") t(`Failed to get auth headers for first-token-date fetch: ${u.detail}`, {
        level: "error"
      }), m("api_first_token_date_fetch", "request_failed");
      return;
    }
    let claudeCodeFirstTokenDate = u.data?.first_token_date ?? null;
    if (claudeCodeFirstTokenDate !== null) {
      let f = new Date(claudeCodeFirstTokenDate).getTime();
      if (isNaN(f)) {
        l(Error(`Received invalid first_token_date from API: ${claudeCodeFirstTokenDate}`)), m("api_first_token_date_fetch", "invalid_date");
        return;
      }
    }
    await Ce(f => ({
      ...f,
      claudeCodeFirstTokenDate: claudeCodeFirstTokenDate
    }), e), g("api_first_token_date_fetch");
  } catch (error) {
    if (of(error)) t(`Failed to fetch first token date: ${d(error)}`, {
      level: "error"
    });else l(error);
    m("api_first_token_date_fetch", "request_failed");
  }
}
var y = "Couldn't save your login. Try logging in again.",
  T = "Couldn't save your login. If your Mac's keychain is locked, unlock it and log in again.";
async function pVe(e, {
  storageV5: storageV5,
  credentials: credentials_2
} = {}) {
  let u = await _qr(e, {
      storageV5: storageV5,
      credentials: credentials_2
    }),
    o = await ELr(e, credentials_2);
  if (NO(), process.env.CLAUDE_CODE_OAUTH_TOKEN) if (o.success) delete process.env.CLAUDE_CODE_OAUTH_TOKEN;else process.env.CLAUDE_CODE_OAUTH_TOKEN = e.accessToken;
  if (X4()) k$(o.success ? null : e.accessToken), Gjt(!1);
  if ("transient" in o && o.transient === !0 && !a.CLAUDE_CODE_OAUTH_TOKEN && !X4()) throw new Nr(I() === "macos" ? T : y);
  if (W() && credentials_2 !== void 0) await O(credentials_2);
  let {
    warning: warning
  } = o;
  if (warning) i("tengu_oauth_storage_warning", {
    warning: warning === yHr || warning === kLr ? c(warning) : b("other")
  });
  if (await dln(e.accessToken, storageV5).catch(p => t(String(p), {
    level: "error"
  })), nW(e.scopes)) await h(storageV5, credentials_2).catch(p => t(String(p), {
    level: "error"
  }));else if (!(await yMo(e.accessToken, storageV5))) throw Error("Unable to create API key. The server accepted the request but did not return a key.");
  return await bqr({
    storageV5: storageV5,
    credentials: credentials_2,
    ...u
  }), {
    storage: {
      success: o.success,
      backendName: o.backendName,
      transient: o.transient,
      sessionAuth: o.success || M0o(e.accessToken) ? "fresh" : gp() ? "previous" : "none"
    }
  };
}
async function _qr(e, {
  storageV5: storageV5_2,
  credentials: credentials_3
}) {
  let u = wn(),
    incomingIdentity = {
      accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid,
      organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid
    },
    preserveQuotaAutoResume = R_(u, incomingIdentity),
    p = R_(fA(), incomingIdentity),
    A = await Kg(credentials_3),
    artifactAccount = p && (A === "env" || A === "fd" || A === "store" && preserveQuotaAutoResume) ? "same_account" : "account_switch";
  await Soe({
    clearOnboarding: !1,
    preserveInProcessTokens: !0,
    preserveNonAnthropicAuth: !0,
    storageV5: storageV5_2,
    preserveQuotaAutoResume: preserveQuotaAutoResume,
    artifactAccount: artifactAccount,
    incomingIdentity: incomingIdentity,
    credentials: credentials_3
  }), VTe(null);
  let s = e.profile ?? (await jXe(e.accessToken));
  if (s?.account && s.organization) cln({
    accountUuid: s.account.uuid,
    emailAddress: s.account.email,
    organizationUuid: s.organization.uuid,
    displayName: s.account.display_name || void 0,
    fullName: s.account.full_name || void 0,
    hasExtraUsageEnabled: s.organization.has_extra_usage_enabled ?? void 0,
    billingType: s.organization.billing_type ?? void 0,
    subscriptionCreatedAt: s.organization.subscription_created_at ?? void 0,
    accountCreatedAt: s.account.created_at,
    ccOnboardingFlags: s.organization.cc_onboarding_flags ?? {},
    claudeCodeTrialEndsAt: s.organization.claude_code_trial_ends_at ?? null,
    claudeCodeTrialDurationDays: s.organization.claude_code_trial_duration_days ?? null,
    seatTier: s.organization.seat_tier ?? null,
    planDisplayName: gDr(s),
    profileFetchedAt: Date.now()
  }, storageV5_2);else if (e.tokenAccount) cln({
    accountUuid: e.tokenAccount.uuid,
    emailAddress: e.tokenAccount.emailAddress,
    organizationUuid: e.tokenAccount.organizationUuid
  }, storageV5_2);
  return xae({
    action: "login",
    success: !0,
    authMethod: "oauth"
  }), {
    preserveQuotaAutoResume: preserveQuotaAutoResume,
    artifactAccount: artifactAccount,
    incomingIdentity: incomingIdentity
  };
}
async function bqr({
  storageV5: storageV5_3,
  credentials: credentials_4,
  preserveQuotaAutoResume: preserveQuotaAutoResume_2 = !1,
  incomingIdentity: incomingIdentity_2
}) {
  if (await ORn(storageV5_3, {
    preserveQuotaAutoResume: preserveQuotaAutoResume_2,
    artifactAccount: "same_account",
    incomingIdentity: incomingIdentity_2
  }), W() && credentials_4 !== void 0) await O(credentials_4);
  await Qce(storageV5_3, credentials_4);
}
async function O(e) {
  cJ(), await Xa(e);
}
async function ZGt(e, n, {
  storageV5: storageV5_4,
  credentials: credentials_5
}) {
  switch (e.reason) {
    case "org_pin_mismatch":
    case "org_verify_failed":
    case "managed_settings_invalid":
      break;
    case "org_pin_api_key_conflict":
    case "provider_not_allowed":
      return;
  }
  if (n && !n.success && n.sessionAuth !== "fresh") return;
  try {
    await Soe({
      clearOnboarding: !1,
      preserveNonAnthropicAuth: !0,
      storageV5: storageV5_4,
      credentials: credentials_5
    });
  } catch (error) {
    if (Wt(error)) {
      t(`Rolling back a login the org pin refused failed: ${d(error)}`, {
        level: "error"
      });
      return;
    }
    l(error);
  }
}
export { pVe, _qr, bqr, ZGt };