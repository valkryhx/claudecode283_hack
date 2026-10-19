// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { av, qIe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { _h } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
var o = ve(_h(), 1);
var s = new Set(["update", "install", "doctor"]);
function u({
  currentVersion: currentVersion,
  requiredMinimumVersion: requiredMinimumVersion,
  requiredMaximumVersion: requiredMaximumVersion,
  topLevelCommand: topLevelCommand
}) {
  if (!requiredMinimumVersion && !requiredMaximumVersion) return null;
  if (topLevelCommand !== void 0 && s.has(topLevelCommand)) return null;
  if (!o.parse(currentVersion)) return null;
  if (requiredMinimumVersion) {
    let i = o.parse(requiredMinimumVersion)?.version;
    if (!i) t(`requiredMinimumVersion '${requiredMinimumVersion}' is not a valid semver version \u2014 ignoring`, {
      level: "error"
    });else if (!av(currentVersion, i)) return `Claude Code ${currentVersion} is older than the minimum version required by your organization (${requiredMinimumVersion}).
Update Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`;
  }
  if (requiredMaximumVersion) {
    let i = o.parse(requiredMaximumVersion)?.version;
    if (!i) t(`requiredMaximumVersion '${requiredMaximumVersion}' is not a valid semver version \u2014 ignoring`, {
      level: "error"
    });else if (!qIe(currentVersion, i)) return `Claude Code ${currentVersion} is newer than the maximum version allowed by your organization (${requiredMaximumVersion}).
Your organization requires version ${requiredMaximumVersion} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`;
  }
  return null;
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
    });
  } catch (error) {
    return l(error), null;
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
    });
  } catch (error) {
    return l(error), null;
  }
}
export { _$s, b$s };