// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { $n, FA } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { v4, h_t, _8n } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { Hf, nXn } from "B:/~BUN/root/chunk-wegca9zh.js";
import { pp } from "B:/~BUN/root/chunk-0p1hpv0s.js";
import { PFt, cKn, zmt } from "B:/~BUN/root/chunk-429xgjya.js";
import { homedir as A } from "os";
import { isAbsolute as R, join as p, relative as S, resolve as O, sep as f } from "path";
var rPe = new Set(["--model", "-m", "--permission-mode", "--inherit-permission-mode", "--proactivity", "--agent", "--agents", "--routine", "--effort", "--fast-mode", "--add-dir", "--mcp-config", "--settings", "--setting-sources", "--managed-settings", "--client-data-url", "--system-prompt", "--system-prompt-file", "--append-system-prompt", "--append-system-prompt-file", "--system-prompt-snapshot", "--append-subagent-system-prompt", "--append-subagent-system-prompt-file", "--fallback-model", "--advisor", "--channels", "--watch-artifact", "--watch-artifact-no-autoreact", "--permission-prompt-tool", "--permission-prompts", "--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--session-id", "--debug-file", "-n", "--name", "--autocompact", "--betas", "--file", "--max-budget-usd", "--max-thinking-tokens", "--max-turns", "--task-budget", "--plan-mode-instructions", "--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url", "--rewind-files", "--thinking", "--thinking-display", "--remote-control-session-name-prefix", "--json-schema"]),
  BIt = new Set([...rPe, "--resume-session-at", "--resume-drops-turn", "--project-config-root", "--exec"]),
  Ydt = new Set(["--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--mcp-config", "--betas", "--add-dir", "--file", "--channels"]),
  D = new Set(["--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url"]),
  oZt = new Set(["--dangerously-skip-permissions", "--allow-dangerously-skip-permissions", "--strict-mcp-config", "--dangerously-allow-browser-network-access", "--restricted", "--disable-slash-commands", "--include-unsupported-models", "--verbose", "--reply-on-resume", "--ide", "--chrome", "--no-chrome", "--bare", "--safe-mode", "--brief", "--remote-control", "--rc", "--local", "--unsandboxed", "--allow-other-models"]),
  Vgo = new Set(["CLAUDE_CODE_SUBAGENT_MODEL_FORCE", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"]),
  qgo = [...h_t, ..._8n, "CLAUDE_CODE_SUBAGENT_MODEL_FORCE"],
  _3e = new Set(["CLAUDE_CONFIG_DIR", "CLAUDE_INTERNAL_FC_OVERRIDES", ...qgo, "CLAUDE_CODE_CLIENT_DATA_URL", "CLAUDE_CODE_ALLOW_OTHER_MODELS", ...v4, "AWS_REGION", "AWS_DEFAULT_REGION", "ANTHROPIC_BEDROCK_REGION_PREFIX", "AWS_PROFILE", "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS", "GOOGLE_CLOUD_PROJECT", "GCLOUD_PROJECT", "CLAUDE_SECURESTORAGE_CONFIG_DIR", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"]),
  g = new Set(["AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS"]),
  L = "CLAUDE_SECURESTORAGE_CONFIG_DIR";
function C(n) {
  let s = Pe(),
    r = [p(s, "jobs"), p(Hf(), nXn()), p(s, "projects"), p(s, "plans"), p(s, "agent-memory")],
    CLAUDE_CODE_REMOTE_MEMORY_DIR = a.CLAUDE_CODE_REMOTE_MEMORY_DIR;
  if (CLAUDE_CODE_REMOTE_MEMORY_DIR) r.push(p(CLAUDE_CODE_REMOTE_MEMORY_DIR, "projects"), p(CLAUDE_CODE_REMOTE_MEMORY_DIR, "agent-memory"));
  if (g.has(n)) try {
    r.push(p(A(), ".claude"));
  } catch {}
  return r;
}
function _(n) {
  return pp($n(O(n)));
}
function w(n) {
  return I() === "windows" ? /^([A-Za-z]:[\\/]|[\\/]{2})/.test(n) : R(n);
}
function T(n, s) {
  if (s === "") return n === L ? void 0 : "empty path";
  if (!w(s)) return "not a full path";
  let r = _(s);
  if (I() !== "windows" && r.split(f).includes(pp(nXn()))) return "path is inside a Claude temp folder, which background sessions can write to without asking";
  for (let e of C(n)) {
    let o = S(_(e), r);
    if (o !== ".." && !o.startsWith(`..${f}`) && !R(o)) return `path is inside ${e}, where background sessions can write some files without asking`;
  }
  return;
}
function nvs(n, s) {
  let r = {};
  for (let [e, o] of Object.entries(n)) r[e] = o !== "" && g.has(e) ? O(s, y(e, o)) : o;
  return r;
}
function y(n, s) {
  if (!n.startsWith("AWS_") || !s.startsWith("~/")) return s;
  try {
    return p(A(), s.slice(2));
  } catch {
    return s;
  }
}
function rvs(n) {
  let s = {},
    r = [];
  for (let [e, o] of Object.entries(n)) {
    let i = !_3e.has(e) ? "not kept for background sessions" : Vgo.has(e) && !Fe(o) ? "only kept when set to a true value such as 1" : g.has(e) || e === L ? T(e, o) : void 0;
    if (i) r.push(`${zmt(e)} (${i})`);else s[e] = o;
  }
  if (r.length === 0) return n;
  return t(`[jobs] ignored these saved environment entries in the job's state.json: ${r.join(", ")}`, {
    level: "warn"
  }), Object.keys(s).length > 0 ? s : void 0;
}
function Fvr(n, s) {
  let {
    kept: kept,
    dropped: dropped
  } = cKn(n);
  return dropped.forEach(({
    name: name,
    problem: problem
  }) => {
    try {
      t(`[jobs] dropped environment entry ${zmt(name)} from ${s}: ${PFt[problem]}.`, {
        level: "warn"
      });
    } catch {}
  }), kept;
}
function oPe(n) {
  let s = [],
    r = [];
  for (let e = 0; e < n.length; e++) {
    let o = n[e];
    if (!o.startsWith("-")) {
      r.push(o);
      continue;
    }
    let i = o.indexOf("="),
      l = i === -1 ? o : o.slice(0, i);
    if (i !== -1 && !rPe.has(l) && oZt.has(l)) {
      s.push(l), r.push(o);
      continue;
    }
    let u = i === -1 && rPe.has(l),
      m = l !== "-m" && (i === -1 ? oZt.has(l) || u && n[e + 1] !== void 0 : rPe.has(l)),
      E = m ? s : r;
    if (E.push(o), u && n[e + 1] !== void 0) E.push(n[++e]);
    if (!m || u && Ydt.has(l)) while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) E.push(n[++e]);
  }
  if (r.length > 0) t(`[jobs] stripped respawnFlags token(s) that a restart does not re-apply: ${r.join(" ")}`, {
    level: "warn"
  });
  return b(N(s));
}
function N(n) {
  let s = [];
  for (let r = 0; r < n.length; r++) {
    let e = n[r];
    if (!rPe.has(e)) {
      s.push(e);
      continue;
    }
    let o = n[++r];
    if (!o.startsWith("-")) {
      s.push(e, o);
      continue;
    }
    s.push(`${e === "-n" ? "--name" : e}=${o}`);
    let i = n[r + 1];
    if (Ydt.has(e) && i !== void 0 && !i.startsWith("-")) s.push(e);
  }
  return s;
}
function b(n) {
  let s = [];
  for (let e = 0; e < n.length; e++) {
    let o = n[e],
      i = o.indexOf("="),
      name_2 = i === -1 ? o : o.slice(0, i),
      toks = [o];
    if (i === -1 && rPe.has(name_2) && n[e + 1] !== void 0) {
      if (toks.push(n[++e]), Ydt.has(name_2)) while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) toks.push(n[++e]);
    }
    s.push({
      name: name_2,
      toks: toks
    });
  }
  let r = new Map();
  for (let e = 0; e < s.length; e++) {
    let o = s[e];
    if (rPe.has(o.name) && !Ydt.has(o.name) && !D.has(o.name)) r.set(o.name, e);
  }
  return s.filter((item, index) => (r.get(item.name) ?? index) === index).flatMap(item => item.toks);
}
function zZ(n) {
  let s = [];
  for (let r = 0; r < n.length; r++) {
    let e = n[r];
    if (e === "--") {
      for (let i = r; i < n.length; i++) s.push(n[i]);
      break;
    }
    let o = e.startsWith("--") ? e.indexOf("=") : -1;
    if (o !== -1 && (BIt.has(e.slice(0, o)) || c.has(e.slice(0, o)))) {
      s.push(e.slice(0, o + 1) + d(e.slice(0, o), e.slice(o + 1)));
      continue;
    }
    if (/^-[a-zA-Z].+/.test(e)) {
      let i = 1;
      while (i < e.length - 1 && Hvr.has(`-${e[i]}`)) i++;
      let l = `-${e[i]}`;
      if (e.length > i + 1 && (BIt.has(l) || c.has(l))) {
        s.push(e.slice(0, i + 1) + d(l, e.slice(i + 1)));
        continue;
      }
      if (e.length === i + 1 && i > 1 && (BIt.has(l) || c.has(l))) {
        if (s.push(e), BIt.has(l) && n[r + 1] !== void 0) {
          if (s.push(d(l, n[++r])), Ydt.has(l)) while (n[r + 1] !== void 0 && !h(n[r + 1])) s.push(d(l, n[++r]));
        } else if (c.has(l) && n[r + 1] !== void 0 && !h(n[r + 1])) s.push(FA(n[++r]));
        continue;
      }
    }
    if (s.push(e), BIt.has(e) && n[r + 1] !== void 0) {
      if (s.push(d(e, n[++r])), Ydt.has(e)) while (n[r + 1] !== void 0 && !h(n[r + 1])) s.push(d(e, n[++r]));
    } else if (c.has(e) && n[r + 1] !== void 0 && !h(n[r + 1])) s.push(FA(n[++r]));
  }
  return s;
}
var F = new Set(["--system-prompt", "--append-system-prompt", "--append-subagent-system-prompt", "--plan-mode-instructions", "--name", "-n"]);
function d(n, s) {
  return F.has(n) ? s : FA(s);
}
var c = new Set(["-r", "--resume"]),
  Hvr = new Set(["-c", "-p", "-h", "-v"]);
function h(n) {
  return n.length > 1 && n.startsWith("-");
}
function sZt(n) {
  return n.includes("--reply-on-resume") ? [...n] : [...n, "--reply-on-resume"];
}
function iZt(n) {
  return n.filter(item => item !== "--reply-on-resume");
}
export { rPe, BIt, Ydt, oZt, Vgo, qgo, _3e, nvs, rvs, Fvr, oPe, zZ, Hvr, sZt, iZt };