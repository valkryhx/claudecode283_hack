// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { we } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { B_ } from "B:/~BUN/root/chunk-gyr2a6wz.js";
var pK = 1500,
  aEo = 3000;
function xee() {
  return a.CLAUDE_CODE_REMOTE && we();
}
function lrn() {
  return xee() && B_();
}
function oMs({
  eventLoggingEnabled: eventLoggingEnabled,
  growthBookEnabled: growthBookEnabled,
  cacheEmpty: cacheEmpty,
  relaunches: relaunches
}) {
  let t = eventLoggingEnabled && cacheEmpty ? pK : 0,
    r = growthBookEnabled && relaunches ? a.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? aEo : 0,
    s = Math.max(t, r);
  return s > 0 ? s : void 0;
}
function sMs({
  site: site,
  nonInteractive: nonInteractive,
  budgetMs: budgetMs,
  settingsEnvPending: settingsEnvPending,
  cacheEmpty: cacheEmpty_2,
  warmCacheKick: warmCacheKick
}) {
  if (!nonInteractive || budgetMs === void 0) return "not_eligible";
  if (!cacheEmpty_2 && !warmCacheKick) return "not_asked_warm";
  if (settingsEnvPending) return cacheEmpty_2 ? "settings_pending_empty" : "settings_pending_warm";
  if (site === "init") return cacheEmpty_2 ? "started_in_init_empty" : "started_in_init_warm";
  return cacheEmpty_2 ? "started_after_init_empty" : "started_after_init_warm";
}
function iMs(e) {
  switch (e) {
    case "started_in_init_empty":
    case "started_in_init_warm":
    case "started_after_init_empty":
    case "started_after_init_warm":
      return !0;
    case "not_asked_warm":
    case "settings_pending_empty":
    case "settings_pending_warm":
    case "launch_excluded":
    case "not_eligible":
      return !1;
  }
}
function aMs({
  nonInteractive: nonInteractive_2,
  budgetMs: budgetMs_2,
  settingsEnvPending: settingsEnvPending_2,
  cacheEmpty: cacheEmpty_3,
  relaunches: relaunches_2,
  autoModeKillSwitchOnDisk: autoModeKillSwitchOnDisk,
  warmWakeEarlyFetch: warmWakeEarlyFetch
}) {
  if (budgetMs_2 === void 0) return;
  if (nonInteractive_2 && !settingsEnvPending_2 && (cacheEmpty_3 || relaunches_2 && (autoModeKillSwitchOnDisk || !warmWakeEarlyFetch))) return "gb-before-mode";
  return relaunches_2 ? "gb-before-context" : "gb-before-tools";
}
async function jBe({
  initialize: initialize,
  budgetMs: budgetMs_3
}) {
  let o = performance.now(),
    i = await je(initialize().then(() => !0, () => !0), budgetMs_3);
  return {
    waitMs: performance.now() - o,
    timedOut: i === void 0
  };
}
export { pK, aEo, xee, lrn, oMs, sMs, iMs, aMs, jBe };