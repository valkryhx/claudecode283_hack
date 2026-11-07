// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Jnt, jxe } from "B:/~BUN/root/chunk-game8aqv.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Fte, F1t, zpe, idn } from "B:/~BUN/root/chunk-pwj77283.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { hj } from "B:/~BUN/root/chunk-ww0cdpg4.js";
var L1o = [250, 500, 500, 750, 1000];
function g() {
  return i.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? zpe;
}
function C(r) {
  return i.CLAUDE_CODE_REMOTE && !i.CLAUDE_CODE_SESSION_ACCESS_TOKEN && !i.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR && r.some(item => item === "--sdk-url" || item.startsWith("--sdk-url=")) && !hj();
}
var I = 250,
  w = 50;
function d() {
  return idn(Fte, "OAuth token").token !== null || idn(F1t, "API key").token !== null;
}
async function pQs(r, {
  delaysMs = L1o,
  siblingGraceMs = I,
  siblingStepMs = w
} = {}) {
  if (!C(r)) return;
  let l = performance.now(),
    S = delaysMs.reduce((acc, item) => acc + item, 0),
    E = g(),
    {
      token: token,
      miss: miss
    } = idn(E, "session ingress token"),
    attempts = 0;
  while (!token && attempts < delaysMs.length) {
    let s = delaysMs[attempts];
    t(`[spare-claim] session ingress token file not readable yet (${miss}), re-checking in ${s}ms (${attempts + 1}/${delaysMs.length})`, {
      level: "warn"
    }), await J(s), attempts++, {
      token: token,
      miss: miss
    } = idn(E, "session ingress token");
  }
  if (!token) {
    V("error", "cli_worker_lifecycle_claim_token_wait", {
      attempts: attempts,
      recovered: !1,
      last_miss: miss ?? "other",
      waited_ms: Math.round(performance.now() - l)
    });
    return;
  }
  let u = attempts > 0 ? Math.max(S - (performance.now() - l), siblingGraceMs) : siblingGraceMs,
    p = performance.now(),
    sibling_attempts = 0,
    sibling_present = d();
  while (!sibling_present && performance.now() - p < u) await J(siblingStepMs), sibling_attempts++, sibling_present = d();
  if (attempts > 0 || sibling_attempts > 0) V("info", "cli_worker_lifecycle_claim_token_wait", {
    attempts: attempts,
    recovered: !0,
    sibling_attempts: sibling_attempts,
    sibling_present: sibling_present,
    waited_ms: Math.round(performance.now() - l)
  });
}
function mQs() {
  let fd_env_set = !!i.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (Jnt() !== null) return {
    recovered: !1,
    diag: {
      fd_env_set: fd_env_set
    }
  };
  let {
    token: token_2,
    miss: miss_2
  } = idn(g(), "session ingress token");
  if (!token_2) return {
    recovered: !1,
    diag: {
      fd_env_set: fd_env_set,
      last_miss: miss_2 ?? "other"
    }
  };
  return jxe(token_2), t("Session ingress token re-read from well-known file"), {
    recovered: !0,
    diag: {
      fd_env_set: fd_env_set
    }
  };
}
export { L1o, pQs, mQs };