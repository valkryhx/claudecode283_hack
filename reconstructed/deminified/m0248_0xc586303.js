// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { rE } from "B:/~BUN/root/chunk-zksmb712.js";
import { ih } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { Ie, Os } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { dc, Sy, rf, G6, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Xt, LGn, UE } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { Ng } from "B:/~BUN/root/chunk-hecveget.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var r = be(ih(), 1);
var t = "tengu_orford_ness",
  n = "2.1.193";
function l() {
  try {
    return x(t, !1);
  } catch {
    return !1;
  }
}
function aDr() {
  let e = UE();
  if (!Xt("allow_error_reporting")) {
    if (e === null) return "blocked_cache_miss";
    return e.restrictions.allow_error_reporting?.allowed === !1 ? "blocked_restriction" : "blocked_tainted";
  }
  let o = LGn();
  if (e !== null) return o ? "allowed_taints_clean" : "blocked_unsettled";
  if (rf() && !G6(rE)) return "blocked_scopeless_oauth";
  if (dc().source === "ANTHROPIC_AUTH_TOKEN") return "blocked_auth_token_env";
  if (Sy()) return "blocked_api_key_helper";
  return o ? "allowed_untaintable" : "blocked_unsettled";
}
function lDr() {
  let e = aDr();
  return e === "allowed_taints_clean" || e === "allowed_untaintable";
}
function eIo() {
  if (process.env.DISABLE_ERROR_REPORTING) return !1;
  if (Ng()) return !1;
  if (Ie() !== "firstParty" || !Os()) return !1;
  if (!r.gte(r.coerce({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION)?.version ?? {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION, n)) return !1;
  if (!lDr()) return !1;
  return l();
}
export { aDr, lDr, eIo };