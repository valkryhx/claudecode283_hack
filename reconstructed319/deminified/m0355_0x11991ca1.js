// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ye } from "B:/~BUN/root/chunk-game8aqv.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Fp } from "B:/~BUN/root/chunk-65j2302z.js";
var gL = 1500,
  xfs = 3000;
function wce() {
  return i.CLAUDE_CODE_REMOTE && ye();
}
function i7t() {
  return wce() && Fp();
}
function yMi({
  eventLoggingEnabled: eventLoggingEnabled,
  growthBookEnabled: growthBookEnabled,
  cacheEmpty: cacheEmpty,
  relaunches: relaunches
}) {
  let t = eventLoggingEnabled && cacheEmpty ? gL : 0,
    a = growthBookEnabled && relaunches ? i.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? xfs : 0,
    s = Math.max(t, a);
  return s > 0 ? s : void 0;
}
function _Mi({
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
function bMi(e) {
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
function SMi({
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
async function TTe({
  initialize: initialize,
  budgetMs: budgetMs_3
}) {
  let o = performance.now(),
    r = await we(initialize().then(() => !0, () => !0), budgetMs_3);
  return {
    waitMs: performance.now() - o,
    timedOut: r === void 0
  };
}
export { gL, xfs, wce, i7t, yMi, _Mi, bMi, SMi, TTe };