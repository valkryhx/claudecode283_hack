// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  av,
  qIe
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  me
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  _h
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  ve
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var o = ve(_h(), 1);
var s = new Set(["update", "install", "doctor"]);

function u({
  currentVersion: e,
  requiredMinimumVersion: r,
  requiredMaximumVersion: n,
  topLevelCommand: a
}) {
  if (!r && !n) return null;
  if (a !== void 0 && s.has(a)) return null;
  if (!o.parse(e)) return null;
  if (r) {
    let i = o.parse(r)?.version;
    if (!i) t(`requiredMinimumVersion '${r}' is not a valid semver version \u2014 ignoring`, {
      level: "error"
    });
    else if (!av(e, i)) return `Claude Code ${e} is older than the minimum version required by your organization (${r}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`
  }
  if (n) {
    let i = o.parse(n)?.version;
    if (!i) t(`requiredMaximumVersion '${n}' is not a valid semver version \u2014 ignoring`, {
      level: "error"
    });
    else if (!qIe(e, i)) return `Claude Code ${e} is newer than the maximum version allowed by your organization (${n}).
Your organization requires version ${n} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`
  }
  return null
}

function _$s(e) {
  try {
    let r = e.parent ? e : null;
    while (r?.parent?.parent) r = r.parent;
    let n = me("policySettings");
    return u({
      currentVersion: {
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
      requiredMinimumVersion: n?.requiredMinimumVersion,
      requiredMaximumVersion: n?.requiredMaximumVersion,
      topLevelCommand: r?.name()
    })
  } catch (r) {
    return l(r), null
  }
}

function b$s() {
  try {
    let e = me("policySettings");
    return u({
      currentVersion: {
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
      requiredMinimumVersion: e?.requiredMinimumVersion,
      requiredMaximumVersion: e?.requiredMaximumVersion,
      topLevelCommand: void 0
    })
  } catch (e) {
    return l(e), null
  }
}
export {
  _$s,
  b$s
};
