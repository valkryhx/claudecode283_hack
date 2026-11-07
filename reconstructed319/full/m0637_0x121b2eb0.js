// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Ew,
  X2e
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  be
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  nb
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  Oe
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var o = Oe(nb(), 1);
var s = new Set(["update", "install", "doctor"]);

function u({
  currentVersion: e,
  requiredMinimumVersion: r,
  requiredMaximumVersion: n,
  topLevelCommand: l
}) {
  if (!r && !n) return null;
  if (l !== void 0 && s.has(l)) return null;
  if (!o.parse(e)) return null;
  if (r) {
    let i = o.parse(r)?.version;
    if (!i) t(`requiredMinimumVersion '${r}' is not a valid semver version \u2014 ignoring`, {
      level: "error"
    });
    else if (!Ew(e, i)) return `Claude Code ${e} is older than the minimum version required by your organization (${r}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`
  }
  if (n) {
    let i = o.parse(n)?.version;
    if (!i) t(`requiredMaximumVersion '${n}' is not a valid semver version \u2014 ignoring`, {
      level: "error"
    });
    else if (!X2e(e, i)) return `Claude Code ${e} is newer than the maximum version allowed by your organization (${n}).
Your organization requires version ${n} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`
  }
  return null
}

function kVi(e) {
  try {
    let r = e.parent ? e : null;
    while (r?.parent?.parent) r = r.parent;
    let n = be("policySettings");
    return u({
      currentVersion: {
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
      requiredMinimumVersion: n?.requiredMinimumVersion,
      requiredMaximumVersion: n?.requiredMaximumVersion,
      topLevelCommand: r?.name()
    })
  } catch (r) {
    return a(r), null
  }
}

function vVi() {
  try {
    let e = be("policySettings");
    return u({
      currentVersion: {
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
      requiredMinimumVersion: e?.requiredMinimumVersion,
      requiredMaximumVersion: e?.requiredMaximumVersion,
      topLevelCommand: void 0
    })
  } catch (e) {
    return a(e), null
  }
}
export {
  kVi,
  vVi
};
