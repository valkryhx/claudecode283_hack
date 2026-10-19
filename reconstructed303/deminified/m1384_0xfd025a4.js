// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { gMo, r1s, wn, Er, Gt, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
var u = 14;
function W2r() {
  return wn()?.claudeCodeTrialDurationDays ?? null;
}
var s = {
  status: "ineligible",
  daysRemaining: null
};
function Owt() {
  let r = gMo();
  if (r) return o(!0, r.endsAt);
  let e = wn();
  if (!e || Er() !== "pro") return s;
  let a = e.ccOnboardingFlags?.e10 === !0;
  return o(a, e.claudeCodeTrialEndsAt ?? null);
}
async function z2r(r, credentials) {
  return po("api_pro_trial_start", async () => {
    if (gMo()) {
      let endsAt = new Date(Date.now() + u * 24 * 60 * 60 * 1000).toISOString();
      return r1s({
        endsAt: endsAt
      }), o(!0, endsAt);
    }
    let n = await Gt.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial", {}, {
      auth: "teleport-org",
      credentials: credentials
    });
    if (!n.ok) throw Error(n.reason === "no-auth" ? n.detail : `Pro trial start unavailable: ${n.reason}`);
    return t("Pro trial started", {
      level: "debug"
    }), d(n.data.ends_at, r), o(!0, n.data.ends_at);
  });
}
function U6o() {
  if (Owt().status !== "expired") return !1;
  return ue().cachedExtraUsageDisabledReason !== null;
}
function G2r(r) {
  switch (r.status) {
    case "active":
      {
        let e = r.daysRemaining ?? 0;
        return `Trial: ${e} ${e === 1 ? "day" : "days"} left`;
      }
    case "expired":
      return "Usage credits";
    case "ineligible":
    case "not_started":
      return null;
  }
}
function o(r, e) {
  if (!r) return s;
  if (!e) return {
    status: "not_started",
    daysRemaining: null
  };
  let date = new Date(e);
  if (Number.isNaN(date.getTime())) return l(Error(`Invalid claude_code_trial_ends_at: ${e}`)), s;
  let n = date.getTime() - Date.now();
  if (n <= 0) return {
    status: "expired",
    daysRemaining: 0
  };
  return {
    status: "active",
    daysRemaining: Math.ceil(n / 86400000)
  };
}
function d(claudeCodeTrialEndsAt, e) {
  Ce(a => {
    if (!a.oauthAccount || a.oauthAccount.claudeCodeTrialEndsAt === claudeCodeTrialEndsAt) return a;
    return {
      ...a,
      oauthAccount: {
        ...a.oauthAccount,
        claudeCodeTrialEndsAt: claudeCodeTrialEndsAt
      }
    };
  }, e);
}
export { W2r, Owt, z2r, U6o, G2r };