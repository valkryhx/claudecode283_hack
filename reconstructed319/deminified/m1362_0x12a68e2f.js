// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z } from "B:/~BUN/root/chunk-game8aqv.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { jon, FOs, Dfe, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ije } from "B:/~BUN/root/chunk-27h4st9h.js";
import { fIt, aL } from "B:/~BUN/root/chunk-pmr34yc8.js";
import { BOn, Ms } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { ge, Ft, Ec } from "B:/~BUN/root/chunk-b3kw6jpx.js";
var u = p(() => Ft({
  action: Ec(["proceed", "confirm", "blocked"]),
  billing_note: ge().nullable().optional(),
  github_login: ge().nullable().optional(),
  confirm: Ft({
    title: ge().optional(),
    body: ge()
  }).nullable().optional(),
  blocked: Ft({
    message: ge(),
    action_url: ge().nullable(),
    reason: ge().optional()
  }).nullable().optional()
}));
function a(message, reason) {
  return {
    action: "blocked",
    blocked: {
      message: message,
      action_url: null,
      reason: reason
    }
  };
}
async function uer(credentials) {
  let CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE = i.CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE;
  if (CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE) {
    let e = u().safeParse(ee(CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE));
    return e.success ? e.data : null;
  }
  try {
    let e = await jt.get("/v1/ultrareview/preflight", {
      auth: "teleport-org",
      timeout: 5000,
      credentials: credentials,
      headers: {
        [jon]: z()
      }
    });
    if (!e.ok) switch (e.reason) {
      case "essential-traffic-only":
        return a("Ultrareview runs in a cloud session and is unavailable when essential-traffic-only mode is active.", "zdr");
      case "data-residency":
        return a("Ultrareview runs in a cloud session and is unavailable on third-party providers.", "data_residency");
      case "no-auth":
        return a("Ultrareview requires a Claude.ai account. Run /login to authenticate.", "no_oauth_token");
    }
    let o = u().safeParse(e.data);
    if (!o.success) return t(`fetchUltrareviewPreflight schema mismatch: ${o.error.message}`), c("api_ultrareview_preflight", "schema_mismatch"), null;
    return g("api_ultrareview_preflight"), o.data;
  } catch (error) {
    return t(`fetchUltrareviewPreflight failed: ${error}`), c("api_ultrareview_preflight", "request_failed"), null;
  }
}
var d = 3000;
function m(r, n) {
  if (!r || !fIt(r) || !f(r.currency)) return null;
  if (r.is_enabled !== !0) return 0;
  if (n === null || !f(n.currency)) return null;
  let {
      monthly_limit: monthly_limit,
      used_credits: used_credits
    } = r,
    l;
  if (monthly_limit === null) l = 1 / 0;else if (typeof monthly_limit === "number" && typeof used_credits === "number") l = monthly_limit - used_credits;else return null;
  let s = Math.min(l, n.auto_reload_settings?.enabled === !0 ? 1 / 0 : n.amount);
  return Number.isFinite(s) ? Math.max(0, s) : null;
}
function f(r) {
  return typeof r === "string" && r.toUpperCase() === "USD";
}
async function y4o(r) {
  try {
    if (BOn() === null || FOs() || Dfe()) return null;
    let [n, e] = await zt(Promise.all([aL(r), ije(r)]), d, "ultrareview: usage credits read timed out");
    return m(n?.extra_usage, e);
  } catch {
    return t("ultrareview: could not read usage credits left"), null;
  }
}
async function Lai(r) {
  let n = BOn(),
    e = await y4o(r);
  if (n === null || e === null || e >= n * 100) return null;
  let o = e < 100 ? "Less than $1" : `About ${Ms(Math.floor(e / 100) * 100, "USD", "whole")}`,
    l = Ms(n * 100, "USD", "whole");
  return `${o} of usage credits left. A review usually uses about ${l} and stops if credits run out.`;
}
export { uer, y4o, Lai };