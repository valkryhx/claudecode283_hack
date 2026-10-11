// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Pxe,
  Ixe
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  wJ,
  Rpt,
  C3n,
  pne,
  Apt
} from "B:/~BUN/root/chunk-ejjy06g8.js";
import {
  K
} from "B:/~BUN/root/chunk-5px6g0cn.js";
var xXn = [250, 500, 500, 750, 1000];

function g() {
  return a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? pne
}

function C(r) {
  return a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_SESSION_ACCESS_TOKEN && !a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR && r.some((e) => e === "--sdk-url" || e.startsWith("--sdk-url=")) && !wJ()
}
var I = 250,
  w = 50;

function d() {
  return Apt(Rpt, "OAuth token").token !== null || Apt(C3n, "API key").token !== null
}
async function X4r(r, {
  delaysMs: e = xXn,
  siblingGraceMs: o = I,
  siblingStepMs: f = w
} = {}) {
  if (!C(r)) return;
  let i = performance.now(),
    S = e.reduce((s, k) => s + k, 0),
    E = g(),
    {
      token: l,
      miss: _
    } = Apt(E, "session ingress token"),
    n = 0;
  while (!l && n < e.length) {
    let s = e[n];
    t(`[spare-claim] session ingress token file not readable yet (${_}), re-checking in ${s}ms (${n+1}/${e.length})`, {
      level: "warn"
    }), await Q(s), n++, {
      token: l,
      miss: _
    } = Apt(E, "session ingress token")
  }
  if (!l) {
    K("error", "cli_worker_lifecycle_claim_token_wait", {
      attempts: n,
      recovered: !1,
      last_miss: _ ?? "other",
      waited_ms: Math.round(performance.now() - i)
    });
    return
  }
  let u = n > 0 ? Math.max(S - (performance.now() - i), o) : o,
    p = performance.now(),
    c = 0,
    m = d();
  while (!m && performance.now() - p < u) await Q(f), c++, m = d();
  if (n > 0 || c > 0) K("info", "cli_worker_lifecycle_claim_token_wait", {
    attempts: n,
    recovered: !0,
    sibling_attempts: c,
    sibling_present: m,
    waited_ms: Math.round(performance.now() - i)
  })
}

function J4r() {
  let r = !!a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (Pxe() !== null) return {
    recovered: !1,
    diag: {
      fd_env_set: r
    }
  };
  let {
    token: e,
    miss: o
  } = Apt(g(), "session ingress token");
  if (!e) return {
    recovered: !1,
    diag: {
      fd_env_set: r,
      last_miss: o ?? "other"
    }
  };
  return Ixe(e), t("Session ingress token re-read from well-known file"), {
    recovered: !0,
    diag: {
      fd_env_set: r
    }
  }
}
export {
  xXn,
  X4r,
  J4r
};
