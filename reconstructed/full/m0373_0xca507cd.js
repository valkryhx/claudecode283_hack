// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  x_,
  lye
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  he
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  ih
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  be
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var o = be(ih(), 1);
var u = new Set(["update", "install", "doctor"]);

function l({
  currentVersion: e,
  requiredMinimumVersion: r,
  requiredMaximumVersion: n,
  topLevelCommand: a
}) {
  if (!r && !n) return null;
  if (a !== void 0 && u.has(a)) return null;
  if (!o.parse(e)) return null;
  if (r) {
    let i = o.parse(r)?.version;
    if (!i) t(`requiredMinimumVersion '${r}' is not a valid semver version \u2014 ignoring`, {
      level: "error"
    });
    else if (!x_(e, i)) return `Claude Code ${e} is older than the minimum version required by your organization (${r}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`
  }
  if (n) {
    let i = o.parse(n)?.version;
    if (!i) t(`requiredMaximumVersion '${n}' is not a valid semver version \u2014 ignoring`, {
      level: "error"
    });
    else if (!lye(e, i)) return `Claude Code ${e} is newer than the maximum version allowed by your organization (${n}).
Your organization requires version ${n} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`
  }
  return null
}

function SPo(e) {
  try {
    let r = e.parent ? e : null;
    while (r?.parent?.parent) r = r.parent;
    let n = he("policySettings");
    return l({
      currentVersion: {
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
      requiredMinimumVersion: n?.requiredMinimumVersion,
      requiredMaximumVersion: n?.requiredMaximumVersion,
      topLevelCommand: r?.name()
    })
  } catch (r) {
    return d(r), null
  }
}

function wPo() {
  try {
    let e = he("policySettings");
    return l({
      currentVersion: {
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
      requiredMinimumVersion: e?.requiredMinimumVersion,
      requiredMaximumVersion: e?.requiredMaximumVersion,
      topLevelCommand: void 0
    })
  } catch (e) {
    return d(e), null
  }
}
export {
  SPo,
  wPo
};
