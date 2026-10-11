// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Pxe, Ixe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { wJ, Rpt, C3n, pne, Apt } from "B:/~BUN/root/chunk-ejjy06g8.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
var xXn = [250, 500, 500, 750, 1000];
function g() {
  return a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? pne;
}
function C(r) {
  return a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_SESSION_ACCESS_TOKEN && !a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR && r.some(item => item === "--sdk-url" || item.startsWith("--sdk-url=")) && !wJ();
}
var I = 250,
  w = 50;
function d() {
  return Apt(Rpt, "OAuth token").token !== null || Apt(C3n, "API key").token !== null;
}
async function X4r(r, {
  delaysMs = xXn,
  siblingGraceMs = I,
  siblingStepMs = w
} = {}) {
  if (!C(r)) return;
  let i = performance.now(),
    S = delaysMs.reduce((acc, item) => acc + item, 0),
    E = g(),
    {
      token: token,
      miss: miss
    } = Apt(E, "session ingress token"),
    attempts = 0;
  while (!token && attempts < delaysMs.length) {
    let s = delaysMs[attempts];
    t(`[spare-claim] session ingress token file not readable yet (${miss}), re-checking in ${s}ms (${attempts + 1}/${delaysMs.length})`, {
      level: "warn"
    }), await Q(s), attempts++, {
      token: token,
      miss: miss
    } = Apt(E, "session ingress token");
  }
  if (!token) {
    K("error", "cli_worker_lifecycle_claim_token_wait", {
      attempts: attempts,
      recovered: !1,
      last_miss: miss ?? "other",
      waited_ms: Math.round(performance.now() - i)
    });
    return;
  }
  let u = attempts > 0 ? Math.max(S - (performance.now() - i), siblingGraceMs) : siblingGraceMs,
    p = performance.now(),
    sibling_attempts = 0,
    sibling_present = d();
  while (!sibling_present && performance.now() - p < u) await Q(siblingStepMs), sibling_attempts++, sibling_present = d();
  if (attempts > 0 || sibling_attempts > 0) K("info", "cli_worker_lifecycle_claim_token_wait", {
    attempts: attempts,
    recovered: !0,
    sibling_attempts: sibling_attempts,
    sibling_present: sibling_present,
    waited_ms: Math.round(performance.now() - i)
  });
}
function J4r() {
  let fd_env_set = !!a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (Pxe() !== null) return {
    recovered: !1,
    diag: {
      fd_env_set: fd_env_set
    }
  };
  let {
    token: token_2,
    miss: miss_2
  } = Apt(g(), "session ingress token");
  if (!token_2) return {
    recovered: !1,
    diag: {
      fd_env_set: fd_env_set,
      last_miss: miss_2 ?? "other"
    }
  };
  return Ixe(token_2), t("Session ingress token re-read from well-known file"), {
    recovered: !0,
    diag: {
      fd_env_set: fd_env_set
    }
  };
}
export { xXn, X4r, J4r };