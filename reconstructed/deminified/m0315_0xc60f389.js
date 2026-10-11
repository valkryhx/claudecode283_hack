// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { aE } from "B:/~BUN/root/chunk-54p0h65d.js";
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { V1, Y5e, vmn } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Fct, kcn, $ct } from "B:/~BUN/root/chunk-ew8y0fm0.js";
var Hke = new Set(["--exec", "--model", "-m", "--permission-mode", "--inherit-permission-mode", "--proactivity", "--agent", "--agents", "--routine", "--effort", "--add-dir", "--mcp-config", "--settings", "--setting-sources", "--managed-settings", "--client-data-url", "--system-prompt", "--system-prompt-file", "--append-system-prompt", "--append-system-prompt-file", "--system-prompt-snapshot", "--append-subagent-system-prompt", "--append-subagent-system-prompt-file", "--fallback-model", "--advisor", "--channels", "--watch-artifact", "--watch-artifact-no-autoreact", "--permission-prompt-tool", "--permission-prompts", "--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--session-id", "--debug-file", "-n", "--name", "--autocompact", "--betas", "--file", "--max-budget-usd", "--max-thinking-tokens", "--max-turns", "--task-budget", "--plan-mode-instructions", "--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url", "--rewind-files", "--thinking", "--thinking-display", "--remote-control-session-name-prefix", "--json-schema"]),
  yst = new Set([...Hke, "--resume-session-at", "--resume-drops-turn", "--project-config-root"]),
  _st = new Set(["--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--mcp-config", "--betas", "--add-dir", "--file", "--channels"]),
  h = new Set(["--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url"]),
  DPt = new Set(["--dangerously-skip-permissions", "--allow-dangerously-skip-permissions", "--strict-mcp-config", "--dangerously-allow-browser-network-access", "--restricted", "--disable-slash-commands", "--verbose", "--reply-on-resume", "--ide", "--chrome", "--no-chrome", "--bare", "--brief", "--remote-control", "--rc", "--local"]),
  cEr = new Set(["CLAUDE_CODE_SUBAGENT_MODEL_FORCE", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"]),
  dEr = [...Y5e, ...vmn, "CLAUDE_CODE_SUBAGENT_MODEL_FORCE"],
  tLe = new Set(["CLAUDE_CONFIG_DIR", "CLAUDE_INTERNAL_FC_OVERRIDES", ...dEr, "CLAUDE_CODE_CLIENT_DATA_URL", ...V1, "AWS_REGION", "AWS_DEFAULT_REGION", "ANTHROPIC_BEDROCK_REGION_PREFIX", "AWS_PROFILE", "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS", "GOOGLE_CLOUD_PROJECT", "GCLOUD_PROJECT", "CLAUDE_SECURESTORAGE_CONFIG_DIR", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"]);
function Yyo(n) {
  let i = {},
    s = [];
  for (let [e, r] of Object.entries(n)) if (tLe.has(e) && (!cEr.has(e) || Ne(r))) i[e] = r;else s.push(e);
  if (s.length === 0) return n;
  return t(`[jobs] stripped disallowed providerEnv key(s) from persisted job state: ${s.join(", ")}`, {
    level: "warn"
  }), Object.keys(i).length > 0 ? i : void 0;
}
function x$n(n, i) {
  let {
    kept: kept,
    dropped: dropped
  } = kcn(n);
  return dropped.forEach(({
    name: name,
    problem: problem
  }) => {
    try {
      t(`[jobs] dropped environment entry ${$ct(name)} from ${i}: ${Fct[problem]}.`, {
        level: "warn"
      });
    } catch {}
  }), kept;
}
function Cme(n) {
  let i = [],
    s = [];
  for (let e = 0; e < n.length; e++) {
    let r = n[e];
    if (!r.startsWith("-")) {
      s.push(r);
      continue;
    }
    let o = r.indexOf("="),
      a = o === -1 ? r : r.slice(0, o);
    if (o !== -1 && !Hke.has(a) && DPt.has(a)) {
      i.push(a), s.push(r);
      continue;
    }
    let l = o === -1 && Hke.has(a),
      E = o === -1 ? DPt.has(a) || l && n[e + 1] !== void 0 : Hke.has(a),
      c = E ? i : s;
    if (c.push(r), l && n[e + 1] !== void 0) c.push(n[++e]);
    if (!E || l && _st.has(a)) while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) c.push(n[++e]);
  }
  if (s.length > 0) t(`[jobs] stripped non-allowlisted respawnFlags token(s) from persisted job state: ${s.join(" ")}`, {
    level: "warn"
  });
  return _(i);
}
function _(n) {
  let i = [];
  for (let e = 0; e < n.length; e++) {
    let r = n[e],
      o = r.indexOf("="),
      name_2 = o === -1 ? r : r.slice(0, o),
      toks = [r];
    if (o === -1 && Hke.has(name_2) && n[e + 1] !== void 0) {
      if (toks.push(n[++e]), _st.has(name_2)) while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) toks.push(n[++e]);
    }
    i.push({
      name: name_2,
      toks: toks
    });
  }
  let s = new Map();
  for (let e = 0; e < i.length; e++) {
    let r = i[e];
    if (Hke.has(r.name) && !_st.has(r.name) && !h.has(r.name)) s.set(r.name, e);
  }
  return i.filter((item, index) => (s.get(item.name) ?? index) === index).flatMap(item => item.toks);
}
function y3(n) {
  let i = [];
  for (let s = 0; s < n.length; s++) {
    let e = n[s];
    if (e === "--") {
      for (let o = s; o < n.length; o++) i.push(n[o]);
      break;
    }
    let r = e.startsWith("--") ? e.indexOf("=") : -1;
    if (r !== -1 && (yst.has(e.slice(0, r)) || d.has(e.slice(0, r)))) {
      i.push(e.slice(0, r + 1) + p(e.slice(0, r), e.slice(r + 1)));
      continue;
    }
    if (/^-[a-zA-Z].+/.test(e)) {
      let o = 1;
      while (o < e.length - 1 && P$n.has(`-${e[o]}`)) o++;
      let a = `-${e[o]}`;
      if (e.length > o + 1 && (yst.has(a) || d.has(a))) {
        i.push(e.slice(0, o + 1) + p(a, e.slice(o + 1)));
        continue;
      }
      if (e.length === o + 1 && o > 1 && (yst.has(a) || d.has(a))) {
        if (i.push(e), yst.has(a) && n[s + 1] !== void 0) {
          if (i.push(p(a, n[++s])), _st.has(a)) while (n[s + 1] !== void 0 && !u(n[s + 1])) i.push(p(a, n[++s]));
        } else if (d.has(a) && n[s + 1] !== void 0 && !u(n[s + 1])) i.push(aE(n[++s]));
        continue;
      }
    }
    if (i.push(e), yst.has(e) && n[s + 1] !== void 0) {
      if (i.push(p(e, n[++s])), _st.has(e)) while (n[s + 1] !== void 0 && !u(n[s + 1])) i.push(p(e, n[++s]));
    } else if (d.has(e) && n[s + 1] !== void 0 && !u(n[s + 1])) i.push(aE(n[++s]));
  }
  return i;
}
var g = new Set(["--system-prompt", "--append-system-prompt", "--append-subagent-system-prompt", "--plan-mode-instructions", "--name", "-n"]);
function p(n, i) {
  return g.has(n) ? i : aE(i);
}
var d = new Set(["-r", "--resume"]),
  P$n = new Set(["-c", "-p", "-h", "-v"]);
function u(n) {
  return n.length > 1 && n.startsWith("-");
}
function LPt(n) {
  return n.includes("--reply-on-resume") ? [...n] : [...n, "--reply-on-resume"];
}
function uEr(n) {
  return n.filter(item => item !== "--reply-on-resume");
}
export { Hke, yst, _st, DPt, cEr, dEr, tLe, Yyo, x$n, Cme, y3, P$n, LPt, uEr };