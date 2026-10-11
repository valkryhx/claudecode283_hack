// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Or } from "B:/~BUN/root/chunk-51n463p1.js";
import { oNr, TOo, An, nr, Dt, Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
var l = 14;
function s7n() {
  return An()?.claudeCodeTrialDurationDays ?? null;
}
var s = {
  status: "ineligible",
  daysRemaining: null
};
function lJe() {
  let r = oNr();
  if (r) return o(!0, r.endsAt);
  let e = An();
  if (!e || nr() !== "pro") return s;
  let a = e.ccOnboardingFlags?.e10 === !0;
  return o(a, e.claudeCodeTrialEndsAt ?? null);
}
async function i7n(r, credentials) {
  return Or("api_pro_trial_start", async () => {
    if (oNr()) {
      let endsAt = new Date(Date.now() + l * 24 * 60 * 60 * 1000).toISOString();
      return TOo({
        endsAt: endsAt
      }), o(!0, endsAt);
    }
    let n = await Dt.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial", {}, {
      auth: "teleport-org",
      credentials: credentials
    });
    if (!n.ok) throw Error(n.reason === "no-auth" ? n.detail : `Pro trial start unavailable: ${n.reason}`);
    return t("Pro trial started", {
      level: "debug"
    }), u(n.data.ends_at, r), o(!0, n.data.ends_at);
  });
}
function JYr() {
  if (lJe().status !== "expired") return !1;
  return le().cachedExtraUsageDisabledReason !== null;
}
function a7n(r) {
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
  if (Number.isNaN(date.getTime())) return d(Error(`Invalid claude_code_trial_ends_at: ${e}`)), s;
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
function u(claudeCodeTrialEndsAt, e) {
  Ee(a => {
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
export { s7n, lJe, i7n, JYr, a7n };