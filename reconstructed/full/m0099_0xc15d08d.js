// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
var i = new Set(["--prefill", "--prefill-b64", "--deep-link-repo", "--deep-link-last-fetch", "--deep-link-cwd-b64", "--handle-uri", "--settings", "--managed-settings", "--setting-sources", "--client-data-url", "--watch-artifact", "--watch-artifact-no-autoreact", "--team-name", "--agent-id", "--agent-name", "--agent-color", "--parent-session-id", "--agent-type", "--model", "--agent", "--routine", "--effort", "--permission-mode", "--inherit-permission-mode", "--proactivity", "--debug-file", "--system-prompt", "--system-prompt-file", "--append-system-prompt", "--append-system-prompt-file", "--system-prompt-snapshot", "--append-subagent-system-prompt", "--append-subagent-system-prompt-file", "--plan-mode-instructions", "--permission-prompt-tool", "--permission-prompts", "--json-schema", "--fallback-model", "--advisor", "--agents", "--name", "-n", "--allowedTools", "--allowed-tools", "--disallowedTools", "--disallowed-tools", "--tools", "--add-dir", "--mcp-config", "--betas", "--file", "--channels", "--dangerously-load-development-channels", "--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url", "--remote-control-session-name-prefix", "--sdk-url", "--exec", "-m", "--thinking", "--thinking-display", "--max-thinking-tokens", "--max-turns", "--max-budget-usd", "--task-budget", "--autocompact", "--rewind-files", "--resume-session-at", "--resume-drops-turn", "--workload", "--output-format", "--input-format", "--teammate-mode", "--messaging-socket-path", "--session-id", "--environment", "--pool", "--ref", "--on-branch", "--correlation-id", "--forward-home-settings"]),
  Azr = new Set(["--allowedTools", "--allowed-tools", "--disallowedTools", "--disallowed-tools", "--tools", "--add-dir", "--mcp-config", "--betas", "--file", "--channels", "--dangerously-load-development-channels"]),
  a = new Set(["-d", "--debug", "-r", "--resume", "--from-pr", "-w", "--worktree", "--teleport", "--cloud", "--remote", "--project", "--remote-control", "--rc", "--prompt-suggestions"]);

function l1t(n, e) {
  let t = n[e];
  if (t !== void 0 && a.has(t)) {
    let o = n[e + 1];
    return o !== void 0 && !c1t(o) ? e + 1 : e
  }
  if (t === void 0 || !i.has(t)) return e;
  let r = e + 1;
  if (Azr.has(t))
    while (r + 1 < n.length && !c1t(n[r + 1])) r++;
  return r
}

function c1t(n) {
  return n.length > 1 && n.startsWith("-")
}

function tH(n, e = process.argv) {
  return vde(n, e).at(-1)
}

function vde(n, e = process.argv) {
  return s(n, e).map((t) => t.value)
}

function AUo(n, e) {
  return new Set(s(n, e).flatMap((t) => t.indices))
}

function s(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (o === "--") break;
    if (o?.startsWith(`${n}=`)) {
      t.push({
        value: o.slice(n.length + 1),
        indices: [r]
      });
      continue
    }
    if (o === n && r + 1 < e.length) {
      t.push({
        value: e[r + 1],
        indices: [r, r + 1]
      }), r++;
      continue
    }
    r = l1t(e, r)
  }
  return t
}

function Jx(n, e = process.argv) {
  return k5n((t) => t === n, e) !== -1
}

function Ehn(n = process.argv.slice(2)) {
  let e = Jx("-p", n) || Jx("--print", n),
    t = Jx("--init-only", n),
    r = k5n((o) => o.startsWith("--sdk-url"), n) !== -1;
  return e || t || r || !process.stdout.isTTY
}

function k5n(n, e = process.argv) {
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (r === "--") break;
    if (r !== void 0 && n(r)) return t;
    t = l1t(e, t)
  }
  return -1
}

function Thn(n = process.argv.slice(2)) {
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (t === "--") return n[e + 1];
    if (!c1t(t)) return t;
    e = l1t(n, e)
  }
  return
}

function xUo(n) {
  return n.startsWith("cc://") || n.startsWith("cc+unix://")
}

function PUo(n = process.argv.slice(2)) {
  return n.some((e) => !e.startsWith("-") || e === "--" || e === "--help" || /^-[^-]*h/.test(e))
}
export {
  Azr,
  l1t,
  c1t,
  tH,
  vde,
  AUo,
  Jx,
  Ehn,
  k5n,
  Thn,
  xUo,
  PUo
};
