// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  IA
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  xe,
  xi
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  _h
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  Ya,
  Fm,
  gp,
  Rte,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  sn,
  AMr,
  kw
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  fy
} from "B:/~BUN/root/chunk-cqw1xaqm.js";
import {
  ve
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var r = ve(_h(), 1);
var t = "tengu_orford_ness",
  n = "2.1.193";

function l() {
  try {
    return E(t, !1)
  } catch {
    return !1
  }
}

function XPo() {
  let e = kw();
  if (!sn("allow_error_reporting")) {
    if (e === null) return "blocked_cache_miss";
    return e.restrictions.allow_error_reporting?.allowed === !1 ? "blocked_restriction" : "blocked_tainted"
  }
  let o = AMr();
  if (e !== null) return o ? "allowed_taints_clean" : "blocked_unsettled";
  if (gp() && !Rte(IA)) return "blocked_scopeless_oauth";
  if (Ya().source === "ANTHROPIC_AUTH_TOKEN") return "blocked_auth_token_env";
  if (Fm()) return "blocked_api_key_helper";
  return o ? "allowed_untaintable" : "blocked_unsettled"
}

function JPo() {
  let e = XPo();
  return e === "allowed_taints_clean" || e === "allowed_untaintable"
}

function fUs() {
  if (process.env.DISABLE_ERROR_REPORTING) return !1;
  if (de()) return !1;
  if (fy()) return !1;
  if (xe() !== "firstParty" || !xi()) return !1;
  if (!r.gte(r.coerce({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION)?.version ?? {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.303",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-18T20:20:57Z",
      GIT_SHA: "07df2aedd2d01d2f60907b8404acbda187b04072",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION, n)) return !1;
  if (!JPo()) return !1;
  return l()
}
export {
  XPo,
  JPo,
  fUs
};
