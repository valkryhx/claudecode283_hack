// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { fPs, $Yi, hn, dr, jt, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
var u = 14;
function dNo() {
  return hn()?.claudeCodeTrialDurationDays ?? null;
}
var l = {
  status: "ineligible",
  daysRemaining: null
};
function Yzt() {
  let r = fPs();
  if (r) return i(!0, r.endsAt);
  let e = hn();
  if (!e || dr() !== "pro") return l;
  let n = e.ccOnboardingFlags?.e10 === !0;
  return i(n, e.claudeCodeTrialEndsAt ?? null);
}
async function cNo(r, credentials) {
  return ao("api_pro_trial_start", async () => {
    if (fPs()) {
      let endsAt = new Date(Date.now() + u * 24 * 60 * 60 * 1000).toISOString();
      return $Yi({
        endsAt: endsAt
      }), i(!0, endsAt);
    }
    let o = await jt.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial", {}, {
      auth: "teleport-org",
      credentials: credentials
    });
    if (!o.ok) throw Error(o.reason === "no-auth" ? o.detail : `Pro trial start unavailable: ${o.reason}`);
    return t("Pro trial started", {
      level: "debug"
    }), d(o.data.ends_at, r), i(!0, o.data.ends_at);
  });
}
function X3s() {
  if (Yzt().status !== "expired") return !1;
  return fe().cachedExtraUsageDisabledReason !== null;
}
function uNo(r) {
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
function i(r, e) {
  if (!r) return l;
  if (!e) return {
    status: "not_started",
    daysRemaining: null
  };
  let date = new Date(e);
  if (Number.isNaN(date.getTime())) return a(Error(`Invalid claude_code_trial_ends_at: ${e}`)), l;
  let o = date.getTime() - Date.now();
  if (o <= 0) return {
    status: "expired",
    daysRemaining: 0
  };
  return {
    status: "active",
    daysRemaining: Math.ceil(o / 86400000)
  };
}
function d(claudeCodeTrialEndsAt, e) {
  Le(n => {
    if (!n.oauthAccount || n.oauthAccount.claudeCodeTrialEndsAt === claudeCodeTrialEndsAt) return n;
    return {
      ...n,
      oauthAccount: {
        ...n.oauthAccount,
        claudeCodeTrialEndsAt: claudeCodeTrialEndsAt
      }
    };
  }, e);
}
export { dNo, Yzt, cNo, X3s, uNo };