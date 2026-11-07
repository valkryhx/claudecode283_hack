// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { p$e } from "B:/~BUN/root/chunk-sxvr9rzb.js";
function _Qn(r, e) {}
function Ooi() {
  return !1;
}
var Z_n = "CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS",
  c = new Set(["resume", "continue", "from-pr", "fork-session", "session-id", "name", "teleport", "cloud", "remote", "desktop", "environment", "pool", "project", "ref", "on-branch", "correlation-id", ...[], "forward-home-settings", "resume-session-at", "resume-drops-turn", "reply-on-resume", "rewind-files", "worktree", "tmux", "background", "routine", "file", "init", "init-only", "maintenance", "prefill", "prefill-b64", "deep-link-origin", "deep-link-repo", "deep-link-last-fetch", "deep-link-cwd-b64", "watch-artifact", "watch-artifact-no-autoreact"]),
  p = new Set(["agent-id", "agent-name", "team-name", "agent-color", "agent-type", "parent-session-id", "plan-mode-required", "inherit-permission-mode", "agents-view-if-allowed", "attach-serve", "session-began-as-copy", "messaging-socket-path", "project-config-root"]),
  u = /^-[\w/:@=+-]*$/,
  E = /^[\w./:+][\w./:@=+-]*$/,
  f = /(^|=)\/(dev|proc)\//;
function _Vo(r, e) {
  let d = [],
    n = 0;
  while (n < e.length) {
    let o = e[n++];
    if (o === "--") break;
    if (!p$e(o)) continue;
    let s = [],
      t = l(r, o);
    if (t) {
      if (t.required) {
        if (n >= e.length) return "";
        s.push(e[n++]);
      } else if (t.optional && n < e.length && !p$e(e[n])) s.push(e[n++]);
      if (t.variadic) while (n < e.length && !p$e(e[n])) s.push(e[n++]);
    } else {
      let a = o.startsWith("--") ? o.indexOf("=") : -1;
      if (t = a > 2 ? l(r, o.slice(0, a)) : void 0, !t || !(t.required || t.optional)) return "";
    }
    if (p.has(t.name())) return "";
    if (c.has(t.name())) continue;
    if (!u.test(o) || !s.every(item => E.test(item)) || [o, ...s].some(item => f.test(item))) return "";
    d.push(o, ...s);
  }
  return d.join(" ");
}
function Ioi(r) {
  let CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS = i.CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS;
  if (CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS === void 0) return;
  return i.unset("CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS"), _Vo(r, CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS.split(" ")) === CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS ? CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS : "";
}
function l(r, e) {
  return r.find(item => item.short === e || item.long === e);
}
export { _Qn, Ooi, Z_n, _Vo, Ioi };