// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { jGe, WGe } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { c5, Ble, Yyt, jle, uBt } from "B:/~BUN/root/chunk-rfp1pa77.js";
import { X } from "B:/~BUN/root/chunk-yrjpmz6e.js";
var W6r = [250, 500, 500, 750, 1000];
function g() {
  return a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? jle;
}
function C(r) {
  return a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_SESSION_ACCESS_TOKEN && !a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR && r.some(item => item === "--sdk-url" || item.startsWith("--sdk-url=")) && !c5();
}
var I = 250,
  w = 50;
function d() {
  return uBt(Ble, "OAuth token").token !== null || uBt(Yyt, "API key").token !== null;
}
async function UJo(r, {
  delaysMs = W6r,
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
    } = uBt(E, "session ingress token"),
    attempts = 0;
  while (!token && attempts < delaysMs.length) {
    let s = delaysMs[attempts];
    t(`[spare-claim] session ingress token file not readable yet (${miss}), re-checking in ${s}ms (${attempts + 1}/${delaysMs.length})`, {
      level: "warn"
    }), await Y(s), attempts++, {
      token: token,
      miss: miss
    } = uBt(E, "session ingress token");
  }
  if (!token) {
    X("error", "cli_worker_lifecycle_claim_token_wait", {
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
  while (!sibling_present && performance.now() - p < u) await Y(siblingStepMs), sibling_attempts++, sibling_present = d();
  if (attempts > 0 || sibling_attempts > 0) X("info", "cli_worker_lifecycle_claim_token_wait", {
    attempts: attempts,
    recovered: !0,
    sibling_attempts: sibling_attempts,
    sibling_present: sibling_present,
    waited_ms: Math.round(performance.now() - i)
  });
}
function BJo() {
  let fd_env_set = !!a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (jGe() !== null) return {
    recovered: !1,
    diag: {
      fd_env_set: fd_env_set
    }
  };
  let {
    token: token_2,
    miss: miss_2
  } = uBt(g(), "session ingress token");
  if (!token_2) return {
    recovered: !1,
    diag: {
      fd_env_set: fd_env_set,
      last_miss: miss_2 ?? "other"
    }
  };
  return WGe(token_2), t("Session ingress token re-read from well-known file"), {
    recovered: !0,
    diag: {
      fd_env_set: fd_env_set
    }
  };
}
export { W6r, UJo, BJo };