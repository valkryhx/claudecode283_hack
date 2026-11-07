// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ye
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Fp
} from "B:/~BUN/root/chunk-65j2302z.js";
var gL = 1500,
  xfs = 3000;

function wce() {
  return i.CLAUDE_CODE_REMOTE && ye()
}

function i7t() {
  return wce() && Fp()
}

function yMi({
  eventLoggingEnabled: e,
  growthBookEnabled: n,
  cacheEmpty: o,
  relaunches: r
}) {
  let t = e && o ? gL : 0,
    a = n && r ? i.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? xfs : 0,
    s = Math.max(t, a);
  return s > 0 ? s : void 0
}

function _Mi({
  site: e,
  nonInteractive: n,
  budgetMs: o,
  settingsEnvPending: r,
  cacheEmpty: t,
  warmCacheKick: a
}) {
  if (!n || o === void 0) return "not_eligible";
  if (!t && !a) return "not_asked_warm";
  if (r) return t ? "settings_pending_empty" : "settings_pending_warm";
  if (e === "init") return t ? "started_in_init_empty" : "started_in_init_warm";
  return t ? "started_after_init_empty" : "started_after_init_warm"
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
      return !1
  }
}

function SMi({
  nonInteractive: e,
  budgetMs: n,
  settingsEnvPending: o,
  cacheEmpty: r,
  relaunches: t,
  autoModeKillSwitchOnDisk: a,
  warmWakeEarlyFetch: s
}) {
  if (n === void 0) return;
  if (e && !o && (r || t && (a || !s))) return "gb-before-mode";
  return t ? "gb-before-context" : "gb-before-tools"
}
async function TTe({
  initialize: e,
  budgetMs: n
}) {
  let o = performance.now(),
    r = await we(e().then(() => !0, () => !0), n);
  return {
    waitMs: performance.now() - o,
    timedOut: r === void 0
  }
}
export {
  gL,
  xfs,
  wce,
  i7t,
  yMi,
  _Mi,
  bMi,
  SMi,
  TTe
};
