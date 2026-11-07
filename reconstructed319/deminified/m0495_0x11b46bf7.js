// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { OC } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { Te, Ci } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { nb } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { La, uh, Vf, oJ, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { gn, bbo, Nv } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { sS } from "B:/~BUN/root/chunk-5g14jzvf.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var r = Oe(nb(), 1);
var t = "tengu_orford_ness",
  n = "2.1.193";
function l() {
  try {
    return v(t, !1);
  } catch {
    return !1;
  }
}
function yRs() {
  let e = Nv();
  if (!gn("allow_error_reporting")) {
    if (e === null) return "blocked_cache_miss";
    return e.restrictions.allow_error_reporting?.allowed === !1 ? "blocked_restriction" : "blocked_tainted";
  }
  let o = bbo();
  if (e !== null) return o ? "allowed_taints_clean" : "blocked_unsettled";
  if (Vf() && !oJ(OC)) return "blocked_scopeless_oauth";
  if (La().source === "ANTHROPIC_AUTH_TOKEN") return "blocked_auth_token_env";
  if (uh()) return "blocked_api_key_helper";
  return o ? "allowed_untaintable" : "blocked_unsettled";
}
function _Rs() {
  let e = yRs();
  return e === "allowed_taints_clean" || e === "allowed_untaintable";
}
function hqi() {
  if (process.env.DISABLE_ERROR_REPORTING) return !1;
  if (q()) return !1;
  if (sS()) return !1;
  if (Te() !== "firstParty" || !Ci()) return !1;
  if (!r.gte(r.coerce({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION)?.version ?? {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION, n)) return !1;
  if (!_Rs()) return !1;
  return l();
}
export { yRs, _Rs, hqi };