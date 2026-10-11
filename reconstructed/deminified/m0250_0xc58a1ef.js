// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { tl } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { fu } from "B:/~BUN/root/chunk-vyq5y0zs.js";
import { oGn, sGn } from "B:/~BUN/root/chunk-yp00xppt.js";
import { lDr } from "B:/~BUN/root/chunk-6k625ztj.js";
import { randomUUID as d } from "crypto";
var c = "https://browser-intake-us5-datadoghq.com/api/v2/logs",
  p = 30000,
  maxBatchSize = 25,
  timeout = 1e4,
  n = 100;
function getFlushIntervalMs() {
  return a.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || p;
}
async function post(e) {
  if (!lDr()) {
    t(`dd-error-tracking: compliance verdict now blocks reporting; dropping batch=${e.length}`, {
      level: "warn"
    });
    return;
  }
  let r = b(e),
    uRLSearchParams = new URLSearchParams({
      ddsource: "browser",
      "dd-api-key": sGn,
      "dd-evp-origin": "browser",
      "dd-evp-origin-version": {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.283",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-25T00:44:42Z",
        GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      "dd-request-id": d()
    });
  try {
    await tl.post(`${c}?${uRLSearchParams}`, r, {
      headers: {
        "Content-Type": "application/json"
      },
      timeout: timeout
    });
  } catch (error) {
    if (fu(error) && error.response) t(`dd-error-tracking: intake responded ${error.response.status} (batch=${e.length})`, {
      level: "warn"
    });else t(`dd-error-tracking: intake failed: ${l(error)}`, {
      level: "warn"
    });
  }
}
class i {
  reportsEnqueued = 0;
  capSentinelSent = !1;
  cachedUserBucket = void 0;
  sender = oGn({
    maxBatchSize: maxBatchSize,
    getFlushIntervalMs: getFlushIntervalMs,
    post: post
  });
}
var E = new q(() => new i());
function DLt() {
  return E.of(j().host);
}
function BMr() {
  return DLt().reportsEnqueued >= n;
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
function jMr(e) {
  let r = DLt();
  if (r.reportsEnqueued >= n) return;
  if (r.reportsEnqueued++, r.reportsEnqueued === n && !r.capSentinelSent) r.capSentinelSent = !0, t(`dd-error-tracking: per-process report cap reached (${n}); dropping further reports`, {
    level: "warn"
  }), r.sender.enqueue(h(e));else r.sender.enqueue(e);
}
async function u6o() {
  await DLt().sender.shutdown();
}
export { DLt, BMr, jMr, u6o };