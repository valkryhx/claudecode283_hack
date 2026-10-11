// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Sj,
  B$,
  jmt,
  Fde
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  y,
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  Mr,
  l,
  Zd
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  wFe,
  YF,
  BNt,
  iNr,
  jNt,
  cKn,
  dKn,
  mRe,
  Dg,
  lC,
  Na,
  wy,
  An,
  O0,
  Dt,
  Ee,
  le
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  PYn
} from "B:/~BUN/root/chunk-zafy1b6k.js";
import {
  $me
} from "B:/~BUN/root/chunk-88mdabet.js";
import {
  o7,
  c4t
} from "B:/~BUN/root/chunk-s4qte2xc.js";
import {
  S7
} from "B:/~BUN/root/chunk-2jqr7z7w.js";
async function h(e, n) {
  try {
    if (le().claudeCodeFirstTokenDate !== void 0) {
      _("api_first_token_date_fetch");
      return
    }
    let f = await Dt.get("/api/organization/claude_code_first_token_date", {
      auth: "async",
      timeout: 1e4,
      credentials: n
    });
    if (!f.ok) {
      if (f.reason === "no-auth") t(`Failed to get auth headers for first-token-date fetch: ${f.detail}`, {
        level: "error"
      }), m("api_first_token_date_fetch", "request_failed");
      return
    }
    let r = f.data?.first_token_date ?? null;
    if (r !== null) {
      let u = new Date(r).getTime();
      if (isNaN(u)) {
        d(Error(`Received invalid first_token_date from API: ${r}`)), m("api_first_token_date_fetch", "invalid_date");
        return
      }
    }
    await Ee((u) => ({
      ...u,
      claudeCodeFirstTokenDate: r
    }), e), _("api_first_token_date_fetch")
  } catch (o) {
    if (Zd(o)) t(`Failed to fetch first token date: ${l(o)}`, {
      level: "error"
    });
    else d(o);
    m("api_first_token_date_fetch", "request_failed")
  }
}
var k = "Couldn't save your login. Try logging in again.",
  C = "Couldn't save your login. If your Mac's keychain is locked, unlock it and log in again.";
async function APe(e, {
  storageV5: n,
  credentials: o
} = {}) {
  let f = await jQn(e, {
      storageV5: n,
      credentials: o
    }),
    r = await dKn(e, o);
  if (lC(), process.env.CLAUDE_CODE_OAUTH_TOKEN)
    if (r.success) delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
    else process.env.CLAUDE_CODE_OAUTH_TOKEN = e.accessToken;
  if (Sj()) B$(r.success ? null : e.accessToken), jmt(!1);
  if ("transient" in r && r.transient === !0 && !a.CLAUDE_CODE_OAUTH_TOKEN && !Sj()) throw new Mr(O() === "macos" ? C : k);
  if (H() && o !== void 0) await T(o);
  let {
    warning: u
  } = r;
  if (u) i("tengu_oauth_storage_warning", {
    warning: u === PYn || u === cKn ? c(u) : y("other")
  });
  if (await BNt(e.accessToken, n).catch((g) => t(String(g), {
      level: "error"
    })), YF(e.scopes)) await h(n, o).catch((g) => t(String(g), {
    level: "error"
  }));
  else if (!await iNr(e.accessToken, n)) throw Error("Unable to create API key. The server accepted the request but did not return a key.");
  await WQn({
    storageV5: n,
    credentials: o,
    ...f
  })
}
async function jQn(e, {
  storageV5: n,
  credentials: o
}) {
  let f = An(),
    r = {
      accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid,
      organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid
    },
    u = wy(f, r),
    g = wy(O0(), r),
    p = await Dg(o),
    A = g && (p === "env" || p === "fd" || p === "store" && u) ? "same_account" : "account_switch";
  await o7({
    clearOnboarding: !1,
    preserveInProcessTokens: !0,
    preserveNonAnthropicAuth: !0,
    storageV5: n,
    preserveQuotaAutoResume: u,
    artifactAccount: A,
    incomingIdentity: r,
    credentials: o
  }), Fde(null);
  let s = e.profile ?? await wFe(e.accessToken);
  if (s?.account && s.organization) jNt({
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
    profileFetchedAt: Date.now()
  }, n);
  else if (e.tokenAccount) jNt({
    accountUuid: e.tokenAccount.uuid,
    emailAddress: e.tokenAccount.emailAddress,
    organizationUuid: e.tokenAccount.organizationUuid
  }, n);
  return $me({
    action: "login",
    success: !0,
    authMethod: "oauth"
  }), {
    preserveQuotaAutoResume: u,
    artifactAccount: A,
    incomingIdentity: r
  }
}
async function WQn({
  storageV5: e,
  credentials: n,
  preserveQuotaAutoResume: o = !1,
  incomingIdentity: f
}) {
  if (await c4t(e, {
      preserveQuotaAutoResume: o,
      artifactAccount: "same_account",
      incomingIdentity: f
    }), H() && n !== void 0) await T(n);
  await S7(e, n)
}
async function T(e) {
  mRe(), await Na(e)
}
export {
  APe,
  jQn,
  WQn
};
