// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { QX, KG, MM, FO, Er, Gt, Ht, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { d, of } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { At, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { kS, fN } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { Hs } from "B:/~BUN/root/chunk-ac9kwvf4.js";
async function p(r, credentials) {
  return po("api_admin_request_create", async () => {
    let e = await Gt.post("/api/oauth/organizations/:orgUUID/admin_requests", r, {
      auth: "teleport-org",
      credentials: credentials
    });
    if (!e.ok) throw Error(e.reason === "no-auth" ? e.detail : `admin_requests: ${e.reason}`);
    return e.data;
  });
}
async function c(request_type, s, credentials_2) {
  return po("api_admin_request_list", async () => {
    let uRLSearchParams = new URLSearchParams({
      request_type: request_type
    });
    for (let a of s) uRLSearchParams.append("statuses", a);
    let u = await Gt.get(`/api/oauth/organizations/:orgUUID/admin_requests/me?${uRLSearchParams}`, {
      auth: "teleport-org",
      credentials: credentials_2
    });
    if (!u.ok) throw Error(u.reason === "no-auth" ? u.detail : `admin_requests/me: ${u.reason}`);
    return u.data;
  });
}
async function g(r, credentials_3) {
  return po("api_admin_request_eligibility", async () => {
    let e = await Gt.get(`/api/oauth/organizations/:orgUUID/admin_requests/eligibility?request_type=${r}`, {
      auth: "teleport-org",
      credentials: credentials_3
    });
    if (!e.ok) throw Error(e.reason === "no-auth" ? e.detail : `admin_requests/eligibility: ${e.reason}`);
    return e.data;
  });
}
function f(r) {
  if (!Ct.isAxiosError(r)) return null;
  let s = r.response?.status;
  if (typeof s !== "number" || s >= 500) return null;
  let e = r.response?.data;
  if (!e || typeof e !== "object") return null;
  let n = e,
    u = n.error;
  if (u && typeof u === "object") {
    let a = u.message;
    if (typeof a === "string" && a.length > 0) return a;
  }
  for (let a of ["message", "detail"]) {
    let i = n[a];
    if (typeof i === "string" && i.length > 0) return i;
  }
  return null;
}
var cot = "Requesting usage credits notifies your organization admins. To review and send the request, run /usage-credits in an interactive Claude Code session.";
async function sTt(r, s) {
  try {
    return await p({
      request_type: "limit_increase",
      details: null
    }, s), {
      type: "message",
      filed: !0,
      value: r == null ? "Request sent to your admin for usage credits." : r.is_enabled ? "Request sent to your admin to increase your usage credit limit." : "Request sent to your admin to turn on usage credits."
    };
  } catch (error) {
    let value = f(error);
    if (of(error, u => f(u) !== null)) t(`Admin request rejected: ${value ?? d(error)}`, {
      level: "error"
    });else l(error);
    if (value) return {
      type: "message",
      value: value,
      filed: !1
    };
  }
  return {
    type: "message",
    filed: !1,
    value: "Couldn't send your request. Try again later."
  };
}
function _4t() {
  if (Ht()) return !1;
  let r = Er(),
    s = MM() !== null,
    e = E("tengu_ember_latch", !1) || s,
    n = FO() && (s || (r === "pro" || r === "max") && !At());
  return e && n;
}
async function j_e(r, s) {
  let e = Er(),
    n = e === "team" || e === "enterprise";
  if (!kS() && n) {
    let extraUsage,
      checked = !0;
    try {
      extraUsage = (await fN(s))?.extra_usage, checked &&= extraUsage !== void 0;
    } catch (error) {
      checked = !1, t(`extra-usage: fetchUtilization failed, falling through to ask user: ${error}`, {
        level: "error"
      });
    }
    switch (extraUsage?.disabled_reason) {
      case "out_of_credits":
        return {
          type: "message",
          value: "Your organization is out of usage credits. Contact your admin to add more."
        };
      case "org_level_disabled_until":
      case "org_spend_cap_reached":
        if (extraUsage.disabled_reason === "org_level_disabled_until" && extraUsage.spend_limit_reached === !1) break;
        return {
          type: "message",
          value: "Your organization's usage credit cap is reached for this period. Contact your admin to raise it."
        };
      default:
    }
    if (extraUsage?.is_enabled && extraUsage.monthly_limit === null) return {
      type: "message",
      value: "Your organization already has unlimited usage credits. No request needed."
    };
    try {
      let o = await g("limit_increase", s);
      if (o?.is_allowed === !1) return {
        type: "message",
        value: "Usage credit requests are turned off for your organization."
      };
      checked &&= o?.is_allowed === !0;
    } catch (error) {
      checked = !1, t(`Extra usage eligibility check failed: ${error}`, {
        level: "error"
      });
    }
    try {
      let o = await c("limit_increase", ["pending"], s);
      if (o && o.length > 0) return {
        type: "message",
        value: "You've already sent a usage credit request to your admin."
      };
      checked &&= o !== null;
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
  let url = n ? KG : QX;
  if (!r.openInBrowser || Ht()) return {
    type: "browser-opened",
    url: url,
    opened: !1
  };
  try {
    let opened = await Hs(url);
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
export { cot, sTt, _4t, j_e };