// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { hd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { rc } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { m_o, h_o } from "B:/~BUN/root/chunk-de98q5we.js";
import { _Rs } from "B:/~BUN/root/chunk-mwy4xyee.js";
import { randomUUID as c } from "crypto";
var p = "https://browser-intake-us5-datadoghq.com/api/v2/logs",
  g = 30000,
  maxBatchSize = 25,
  timeout = 1e4,
  n = 100;
function getFlushIntervalMs() {
  return i.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || g;
}
async function post(e) {
  if (!_Rs()) {
    t(`dd-error-tracking: compliance verdict now blocks reporting; dropping batch=${e.length}`, {
      level: "warn"
    });
    return;
  }
  let r = _(e),
    uRLSearchParams = new URLSearchParams({
      ddsource: "browser",
      "dd-api-key": h_o,
      "dd-evp-origin": "browser",
      "dd-evp-origin-version": {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.319",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-11-05T18:14:18Z",
        GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
        HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "win32"
      }.VERSION,
      "dd-request-id": c()
    });
  try {
    await hd.post(`${p}?${uRLSearchParams}`, r, {
      headers: {
        "Content-Type": "application/json"
      },
      timeout: timeout
    });
  } catch (error) {
    if (rc(error) && error.response) t(`dd-error-tracking: intake responded ${error.response.status} (batch=${e.length})`, {
      level: "warn"
    });else t(`dd-error-tracking: intake failed: ${d(error)}`, {
      level: "warn"
    });
  }
}
class s {
  reportsEnqueued = 0;
  capSentinelSent = !1;
  cachedUserBucket = void 0;
  sender = m_o({
    maxBatchSize: maxBatchSize,
    getFlushIntervalMs: getFlushIntervalMs,
    post: post
  });
}
var E = new W(() => new s());
function l$n() {
  return E.of(H().host);
}
function CCs() {
  return l$n().reportsEnqueued >= n;
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
function RCs(e) {
  let r = l$n();
  if (r.reportsEnqueued >= n) return;
  if (r.reportsEnqueued++, r.reportsEnqueued === n && !r.capSentinelSent) r.capSentinelSent = !0, t(`dd-error-tracking: per-process report cap reached (${n}); dropping further reports`, {
    level: "warn"
  }), r.sender.enqueue(h(e));else r.sender.enqueue(e);
}
async function JSa() {
  await l$n().sender.shutdown();
}
export { l$n, CCs, RCs, JSa };