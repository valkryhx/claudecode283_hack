// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { sl } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Rc } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { VIr, qIr } from "B:/~BUN/root/chunk-x73fxyt1.js";
import { JPo } from "B:/~BUN/root/chunk-h6hab5w2.js";
import { randomUUID as c } from "crypto";
var p = "https://browser-intake-us5-datadoghq.com/api/v2/logs",
  g = 30000,
  maxBatchSize = 25,
  timeout = 1e4,
  n = 100;
function getFlushIntervalMs() {
  return a.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || g;
}
async function post(e) {
  if (!JPo()) {
    t(`dd-error-tracking: compliance verdict now blocks reporting; dropping batch=${e.length}`, {
      level: "warn"
    });
    return;
  }
  let r = _(e),
    uRLSearchParams = new URLSearchParams({
      ddsource: "browser",
      "dd-api-key": qIr,
      "dd-evp-origin": "browser",
      "dd-evp-origin-version": {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.303",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-18T20:20:57Z",
        GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      "dd-request-id": c()
    });
  try {
    await sl.post(`${p}?${uRLSearchParams}`, r, {
      headers: {
        "Content-Type": "application/json"
      },
      timeout: timeout
    });
  } catch (error) {
    if (Rc(error) && error.response) t(`dd-error-tracking: intake responded ${error.response.status} (batch=${e.length})`, {
      level: "warn"
    });else t(`dd-error-tracking: intake failed: ${d(error)}`, {
      level: "warn"
    });
  }
}
class i {
  reportsEnqueued = 0;
  capSentinelSent = !1;
  cachedUserBucket = void 0;
  sender = VIr({
    maxBatchSize: maxBatchSize,
    getFlushIntervalMs: getFlushIntervalMs,
    post: post
  });
}
var E = new z(() => new i());
function $in() {
  return E.of(j().host);
}
function CPo() {
  return $in().reportsEnqueued >= n;
}
function h(e) {
  return {
    ...e,
    message: `ErrorTrackingCapReached: per-process cap of ${n} hit, dropping further reports`,
    error: {
      kind: "ErrorTrackingCapReached",
      message: `per-process cap of ${n} hit`,
      stack: `ErrorTrackingCapReached
    at enqueueErrorLog (src/services/errorTracking/client.ts)`,
      fingerprint: "cap-reached-sentinel",
      handling: "handled"
    },
    error_frames: void 0
  };
}
function RPo(e) {
  let r = $in();
  if (r.reportsEnqueued >= n) return;
  if (r.reportsEnqueued++, r.reportsEnqueued === n && !r.capSentinelSent) r.capSentinelSent = !0, t(`dd-error-tracking: per-process report cap reached (${n}); dropping further reports`, {
    level: "warn"
  }), r.sender.enqueue(h(e));else r.sender.enqueue(e);
}
async function psi() {
  await $in().sender.shutdown();
}
export { $in, CPo, RPo, psi };