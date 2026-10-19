// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
function WYs({
  remote: remote,
  isNonInteractiveSession: isNonInteractiveSession,
  headlessCloud: headlessCloud,
  headlessCloudPrint = !1,
  isContinue: isContinue,
  pendingAssistantChat: pendingAssistantChat,
  pendingConnectUrl: pendingConnectUrl,
  pendingSSHHost: pendingSSHHost
}) {
  if (isNonInteractiveSession) return headlessCloud || headlessCloudPrint;
  if (isContinue) return !1;
  return remote !== null || Boolean(pendingAssistantChat?.sessionId) || Boolean(pendingAssistantChat?.discover) || Boolean(pendingConnectUrl) || Boolean(pendingSSHHost);
}
function zYs(e, n) {
  return e ? null : n;
}
var a = /^(?:session|cse)_[A-Za-z0-9_]+$/;
function pDe(e) {
  if (a.test(e)) return e;
  if (e.includes("/") && !/\s/.test(e)) {
    for (let n of e.split(/[/?#]/)) if (a.test(n)) return n;
  }
  return null;
}
var l = new Set(["--prefill", "--prefill-b64", "--deep-link-repo", "--deep-link-last-fetch", "--deep-link-cwd-b64", "--handle-uri", "--settings", "--managed-settings", "--setting-sources", "--client-data-url", "--watch-artifact", "--watch-artifact-no-autoreact", "--team-name", "--agent-id", "--agent-name", "--agent-color", "--parent-session-id", "--agent-type", "--model", "--agent", "--routine", "--effort", "--fast-mode", "--permission-mode", "--inherit-permission-mode", "--proactivity", "--debug-file", "--system-prompt", "--system-prompt-file", "--append-system-prompt", "--append-system-prompt-file", "--system-prompt-snapshot", "--append-subagent-system-prompt", "--append-subagent-system-prompt-file", "--plan-mode-instructions", "--permission-prompt-tool", "--permission-prompts", "--json-schema", "--fallback-model", "--advisor", "--agents", "--name", "-n", "--allowedTools", "--allowed-tools", "--disallowedTools", "--disallowed-tools", "--tools", "--add-dir", "--mcp-config", "--betas", "--file", "--channels", "--dangerously-load-development-channels", "--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url", "--remote-control-session-name-prefix", "--exec", "-m", "--sdk-url", "--thinking", "--thinking-display", "--max-thinking-tokens", "--max-turns", "--max-budget-usd", "--task-budget", "--autocompact", "--rewind-files", "--resume-session-at", "--resume-drops-turn", "--workload", "--output-format", "--input-format", "--teammate-mode", "--messaging-socket-path", "--session-id", "--environment", "--pool", "--ref", "--on-branch", "--correlation-id", "--forward-home-settings", "--project-config-root", "--attach-serve", ...[]]),
  WBr = new Set(["--allowedTools", "--allowed-tools", "--disallowedTools", "--disallowed-tools", "--tools", "--add-dir", "--mcp-config", "--betas", "--file", "--channels", "--dangerously-load-development-channels"]),
  d = new Set(["-d", "--debug", "-r", "--resume", "--from-pr", "-w", "--worktree", "--teleport", "--cloud", "--remote", "--project", "--remote-control", "--rc", "--prompt-suggestions"]);
function Mbt(e, n) {
  let t = e[n];
  if (t !== void 0 && d.has(t)) {
    let s = e[n + 1];
    return s !== void 0 && !njt(s) ? n + 1 : n;
  }
  if (t === void 0 || !l.has(t)) return n;
  let o = n + 1;
  if (WBr.has(t)) while (o + 1 < e.length && !njt(e[o + 1])) o++;
  return o;
}
function njt(e) {
  return e.length > 1 && e.startsWith("-");
}
function yv(e, n = process.argv) {
  return Bhe(e, n).at(-1);
}
function Bhe(e, n = process.argv) {
  return u(e, n).map(item => item.value);
}
function Gjo(e, n) {
  return new Set(u(e, n).flatMap(item => item.indices));
}
function u(e, n) {
  let t = [];
  for (let o = 0; o < n.length; o++) {
    let s = n[o];
    if (s === "--") break;
    if (s?.startsWith(`${e}=`)) {
      t.push({
        value: s.slice(e.length + 1),
        indices: [o]
      });
      continue;
    }
    if (s === e && o + 1 < n.length) {
      t.push({
        value: n[o + 1],
        indices: [o, o + 1]
      }), o++;
      continue;
    }
    o = Mbt(n, o);
  }
  return t;
}
function aS(e, n = process.argv) {
  return Dbt(t => t === e, n) !== -1;
}
function $ai(e) {
  return aS("--bg", e) || aS("--background", e);
}
function EZe(e = process.argv.slice(2)) {
  let n = aS("-p", e) || aS("--print", e),
    t = aS("--init-only", e),
    o = Dbt(s => s.startsWith("--sdk-url"), e) !== -1;
  return n || t || o || !process.stdout.isTTY;
}
function Dbt(e, n = process.argv) {
  for (let t = 0; t < n.length; t++) {
    let o = n[t];
    if (o === "--") break;
    if (o !== void 0 && e(o)) return t;
    t = Mbt(n, t);
  }
  return -1;
}
function Amn(e = process.argv.slice(2)) {
  let n = c(e);
  return n === -1 ? void 0 : e[n];
}
function c(e) {
  for (let n = 0; n < e.length; n++) {
    let t = e[n];
    if (t === "--") return n + 1 < e.length ? n + 1 : -1;
    if (!njt(t)) return n;
    n = Mbt(e, n);
  }
  return -1;
}
var g = new Set(["attach", "logs", "stop", "kill", "respawn", "rm"]),
  m = new Set(["-p", "--print", "--bg", "--background", "--routine", "-h", "--help", "-v", "-V", "--version"]),
  f = new Set(["-d2e", "--debug-to-stderr", "--verbose", "-p", "--print", "--bare", "--safe-mode", "--init", "--init-only", "--maintenance", "--include-hook-events", "--include-partial-messages", "--forward-subagent-text", "--session-mirror", "--await-claim", "--await-initialize", "--dangerously-skip-permissions", "--allow-dangerously-skip-permissions", "--replay-user-messages", "--host-auth-is-org-sign-in", "--enable-auth-status", "--restricted", "--allow-other-models", "--exclude-dynamic-system-prompt-sections", "--include-unsupported-models", "-c", "--continue", "--fork-session", "--deep-link-origin", "--no-session-persistence", "--reply-on-resume", "--ide", "--desktop", "--strict-mcp-config", "--disable-slash-commands", "--chrome", "--no-chrome", "--tmux", "--enable-auto-mode", "--bg", "--background", "--brief", "--ax-screen-reader", "--plan-mode-required", "--hard-fail", ...[]]),
  h = new Set(["--exec", "-m", "--handle-uri"]),
  b = /^[a-f0-9]{8}$/;
function Vjo(e = process.argv.slice(2), {
  behindRootOptions = !0
} = {}) {
  let t = c(e);
  if (t === -1 || !g.has(e[t])) return -1;
  if (t === 0) return 0;
  if (!behindRootOptions || e[t - 1] === "--") return -1;
  let o = e[t + 1],
    s = o;
  if (o === void 0 || !(b.test(o) || e[t] === "respawn" && o === "--all")) return -1;
  for (let r = 0; r < t; r = Mbt(e, r) + 1) {
    let i = e[r];
    if (S(i) || !x(i)) return -1;
  }
  return t;
}
function x(e) {
  if (f.has(e)) return !0;
  let n = e.indexOf("="),
    t = n === -1 ? e : e.slice(0, n);
  return l.has(t) && !h.has(t) || d.has(t);
}
function S(e) {
  return m.has(e) || e.startsWith("--routine=") || /^-[A-Za-z]{2,}$/.test(e);
}
function qjo(e) {
  return e.startsWith("cc://") || e.startsWith("cc+unix://");
}
function Kjo(e = process.argv.slice(2)) {
  return e.some(item => !item.startsWith("-") || item === "--" || item === "--help" || /^-[^-]*h/.test(item));
}
export { WYs, zYs, pDe, WBr, Mbt, njt, yv, Bhe, Gjo, aS, $ai, EZe, Dbt, Amn, Vjo, qjo, Kjo };