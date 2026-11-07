// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { Yse, M3, QF, wO, dr, jt, Gt, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { F, d, Im } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { LS, CL } from "B:/~BUN/root/chunk-yhafkw66.js";
import { _mr, xso, TDe as value, aL, mi, k9e } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { Ms } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { YG } from "B:/~BUN/root/chunk-dqprk713.js";
import { JT } from "B:/~BUN/root/chunk-yjr7e11x.js";
import { Zi } from "B:/~BUN/root/chunk-r2kdqtaa.js";
async function c(r, credentials) {
  return ao("api_admin_request_create", async () => {
    let n = await jt.post("/api/oauth/organizations/:orgUUID/admin_requests", r, {
      auth: "teleport-org",
      credentials: credentials
    });
    if (!n.ok) throw Error(n.reason === "no-auth" ? n.detail : `admin_requests: ${n.reason}`);
    return {
      request: n.data,
      created: n.status === 201,
      status: n.status
    };
  });
}
async function g(request_type, i, credentials_2) {
  return ao("api_admin_request_list", async () => {
    let uRLSearchParams = new URLSearchParams({
      request_type: request_type
    });
    for (let u of i) uRLSearchParams.append("statuses", u);
    let s = await jt.get(`/api/oauth/organizations/:orgUUID/admin_requests/me?${uRLSearchParams}`, {
      auth: "teleport-org",
      credentials: credentials_2
    });
    if (!s.ok) throw Error(s.reason === "no-auth" ? s.detail : `admin_requests/me: ${s.reason}`);
    return s.data;
  });
}
async function _(r, credentials_3) {
  return ao("api_admin_request_eligibility", async () => {
    let n = await jt.get(`/api/oauth/organizations/:orgUUID/admin_requests/eligibility?request_type=${r}`, {
      auth: "teleport-org",
      credentials: credentials_3
    });
    if (!n.ok) throw Error(n.reason === "no-auth" ? n.detail : `admin_requests/eligibility: ${n.reason}`);
    return n.data;
  });
}
function cQn() {
  let r = {
    ...mi(),
    isUsingOverage: !0
  };
  if (delete r.overageDisabledReason, r.status === "rejected") r.status = "allowed";
  if (r.overageStatus === "rejected") r.overageStatus = "allowed";
  k9e(r);
}
function y(r) {
  if (!Wt.isAxiosError(r)) return null;
  let i = r.response?.status;
  if (typeof i !== "number" || i >= 500) return null;
  let n = r.response?.data;
  if (!n || typeof n !== "object") return null;
  let o = n,
    s = o.error;
  if (s && typeof s === "object") {
    let u = s.message;
    if (typeof u === "string" && u.length > 0) return u;
  }
  for (let u of ["message", "detail"]) {
    let e = o[u];
    if (typeof e === "string" && e.length > 0) return e;
  }
  return null;
}
var nCt = "Requesting usage credits notifies your organization admins. To review and send the request, run /usage-credits in an interactive Claude Code session.",
  A = {
    type: "message",
    value: value
  },
  aVo = 2000,
  q = new Set(["org_spend_cap_reached", "member_zero_credit_limit", "group_zero_credit_limit", "seat_tier_zero_credit_limit"]);
function R(r) {
  if (r == null || typeof r !== "object" || r.request_type !== "limit_increase") return null;
  let details = r.details;
  if (r.status !== "approved" || details?.approval_type !== "pre_approved" || typeof details.granted_limit !== "number" || !Number.isSafeInteger(details.granted_limit) || details.granted_limit <= 0 || typeof details.currency !== "string" || !/^[A-Za-z]{3}$/.test(details.currency)) return null;
  let period = details.period == null || details.period === "monthly" ? "monthly" : details.period === "weekly" ? "weekly" : "other",
    o = CL() ? xso : _mr,
    s = Ms(details.granted_limit, details.currency, "fit"),
    u = typeof details.expires_at === "string" ? Date.parse(details.expires_at) : NaN,
    e = Number.isFinite(u) && u > Date.now() ? JT(u / 1000, !0, !0, !0) : void 0;
  return {
    line: e === void 0 ? `Your ${o} is now ${s}` : `Your ${o} is now ${s} until ${e}`,
    shortLine: `Your ${o} is now ${s}`,
    fresh: r.approved_now === !0,
    period: period,
    hasExpiry: e !== void 0
  };
}
async function f6e(r, i, n) {
  let o;
  try {
    o = await c({
      request_type: "limit_increase",
      details: null
    }, i);
  } catch (error) {
    let value_2 = y(error);
    if (Im(error, m => y(m) !== null)) t(`Admin request rejected: ${value_2 ?? d(error)}`, {
      level: "error"
    });else a(error);
    if (value_2) return {
      type: "message",
      value: value_2,
      filed: !1,
      outcome: Wt.isAxiosError(error) && error.response !== void 0 ? h(error.response.status) : "failed"
    };
    return {
      type: "message",
      filed: !1,
      outcome: "failed",
      value: "Couldn't send your request. Try again later."
    };
  }
  let s = null;
  try {
    if (o.status >= 200 && o.status < 300) s = R(o.request);
  } catch (error) {
    a(F(error));
  }
  if (s === null) return {
    type: "message",
    filed: !0,
    outcome: o.created ? "filed" : h(o.status),
    value: r == null ? "Request sent to your admin for usage credits." : r.is_enabled ? "Request sent to your admin to increase your usage credit limit." : "Request sent to your admin to turn on usage credits."
  };
  try {
    n?.(`${s.shortLine}.`);
  } catch (error) {
    a(F(error));
  }
  try {
    if (s.fresh) {
      if (l("tengu_usage_credits_admin_request_granted", {
        period: f(s.period),
        has_expiry: s.hasExpiry
      }), mi().status === "rejected") await J(aVo);
      let e = mi();
      if (e.status === "rejected" && e.isUsingOverage !== !0 && e.overageScope === void 0 && e.overageDisabledReason !== void 0 && q.has(e.overageDisabledReason)) cQn();
    }
  } catch (error) {
    a(F(error));
  }
  let u = !1;
  try {
    u = YG();
  } catch (error) {
    a(F(error));
  }
  return {
    type: "message",
    filed: !0,
    outcome: "granted",
    grantLine: `${s.line}.`,
    value: u ? `${s.line}.` : `${s.line} \xB7 send a message to continue`
  };
}
function V_n() {
  if (Gt()) return !1;
  let r = dr(),
    i = QF() !== null,
    n = v("tengu_ember_latch", !1) || i,
    o = wO() && (i || (r === "pro" || r === "max") && !St());
  return n && o;
}
async function Tle(r, i) {
  let n = dr(),
    o = n === "team" || n === "enterprise",
    s = LS();
  if (mi().dailyCapPaused === !0) return A;
  if (!s && o) {
    let extraUsage,
      checked = !0;
    try {
      extraUsage = (await aL(i))?.extra_usage, checked &&= extraUsage !== void 0;
    } catch (error) {
      checked = !1, t(`extra-usage: fetchUtilization failed, falling through to ask user: ${error}`, {
        level: "error"
      });
    }
    if (extraUsage?.daily_cap_notice) return A;
    switch (extraUsage?.disabled_reason) {
      case "out_of_credits":
        return {
          type: "message",
          value: "Your organization is out of usage credits. Contact your admin to add more.",
          reason: "out_of_credits"
        };
      case "org_level_disabled_until":
      case "org_spend_cap_reached":
        if (extraUsage.disabled_reason === "org_level_disabled_until" && extraUsage.spend_limit_reached === !1) break;
        return {
          type: "message",
          value: "Your organization's usage credit cap is reached for this period. Contact your admin to raise it.",
          reason: "org_cap_reached"
        };
      default:
    }
    if (extraUsage?.is_enabled && extraUsage.monthly_limit === null) return {
      type: "message",
      value: "Your organization already has unlimited usage credits. No request needed.",
      reason: "unlimited"
    };
    try {
      let m = await _("limit_increase", i);
      if (m?.is_allowed === !1) return {
        type: "message",
        value: "Usage credit requests are turned off for your organization.",
        reason: "requests_off"
      };
      checked &&= m?.is_allowed === !0;
    } catch (error) {
      checked = !1, t(`Extra usage eligibility check failed: ${error}`, {
        level: "error"
      });
    }
    try {
      let m = await g("limit_increase", ["pending"], i);
      if (m && m.length > 0) return {
        type: "message",
        value: "You've already sent a usage credit request to your admin.",
        reason: "pending"
      };
      checked &&= m !== null;
    } catch (error) {
      checked = !1, t(`Failed to fetch pending admin requests: ${error}`, {
        level: "error"
      });
    }
    return {
      type: "confirm-admin-request",
      extraUsage: extraUsage,
      checked: checked
    };
  }
  let url = o ? M3 : Yse;
  if (!r.openInBrowser || Gt()) return {
    type: "browser-opened",
    url: url,
    opened: !1
  };
  try {
    let opened = await Zi(url);
    return {
      type: "browser-opened",
      url: url,
      opened: opened
    };
  } catch (error) {
    return t(`Failed to open browser for ${url}: ${error}`, {
      level: "error"
    }), {
      type: "message",
      value: `Couldn't open your browser. Visit ${url} to manage usage credits.`
    };
  }
}
function h(r) {
  if (r === 201) return "filed";
  if (r === 200) return "already_filed";
  if (r === 401 || r === 408 || r === 429 || r >= 500) return "failed";
  if (r >= 400) return "refused";
  return r >= 200 && r < 300 ? "filed" : "failed";
}
export { cQn, nCt, aVo, f6e, V_n, Tle };