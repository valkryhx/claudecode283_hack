// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  En,
  xM
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  Zz,
  JBt,
  PLr
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  xf,
  Cqe
} from "B:/~BUN/root/chunk-x1xft50h.js";
import {
  Unn,
  QRr,
  qht
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  Tf
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  homedir as A
} from "os";
import {
  isAbsolute as O,
  join as p,
  relative as S,
  resolve as R,
  sep as _
} from "path";
var CWe = new Set(["--model", "-m", "--permission-mode", "--inherit-permission-mode", "--proactivity", "--agent", "--agents", "--routine", "--effort", "--fast-mode", "--add-dir", "--mcp-config", "--settings", "--setting-sources", "--managed-settings", "--client-data-url", "--system-prompt", "--system-prompt-file", "--append-system-prompt", "--append-system-prompt-file", "--system-prompt-snapshot", "--append-subagent-system-prompt", "--append-subagent-system-prompt-file", "--fallback-model", "--advisor", "--channels", "--watch-artifact", "--watch-artifact-no-autoreact", "--permission-prompt-tool", "--permission-prompts", "--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--session-id", "--debug-file", "-n", "--name", "--autocompact", "--betas", "--file", "--max-budget-usd", "--max-thinking-tokens", "--max-turns", "--task-budget", "--plan-mode-instructions", "--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url", "--rewind-files", "--thinking", "--thinking-display", "--remote-control-session-name-prefix", "--json-schema"]),
  qXt = new Set([...CWe, "--resume-session-at", "--resume-drops-turn", "--project-config-root", "--exec"]),
  rMt = new Set(["--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--mcp-config", "--betas", "--add-dir", "--file", "--channels"]),
  D = new Set(["--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url"]),
  oOn = new Set(["--dangerously-skip-permissions", "--allow-dangerously-skip-permissions", "--strict-mcp-config", "--dangerously-allow-browser-network-access", "--restricted", "--disable-slash-commands", "--include-unsupported-models", "--verbose", "--reply-on-resume", "--ide", "--chrome", "--no-chrome", "--bare", "--safe-mode", "--brief", "--remote-control", "--rc", "--local", "--unsandboxed", "--personal", "--allow-other-models"]),
  uds = new Set(["CLAUDE_CODE_SUBAGENT_MODEL_FORCE", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"]),
  fds = [...JBt, ...PLr, "CLAUDE_CODE_SUBAGENT_MODEL_FORCE", "CLAUDE_CODE_SUBAGENT_EFFORT"],
  Aut = new Set(["CLAUDE_CONFIG_DIR", "CLAUDE_INTERNAL_FC_OVERRIDES", ...fds, "CLAUDE_CODE_CLIENT_DATA_URL", "CLAUDE_CODE_ALLOW_OTHER_MODELS", "CLAUDE_CODE_ATTRIBUTION_PROJECT", ...Zz, "AWS_REGION", "AWS_DEFAULT_REGION", "ANTHROPIC_BEDROCK_REGION_PREFIX", "AWS_PROFILE", "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS", "GOOGLE_CLOUD_PROJECT", "GCLOUD_PROJECT", "CLAUDE_SECURESTORAGE_CONFIG_DIR", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"]),
  m = new Set(["AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS"]),
  L = "CLAUDE_SECURESTORAGE_CONFIG_DIR";

function C(n) {
  let s = Ue(),
    r = [p(s, "jobs"), p(xf(), Cqe()), p(s, "projects"), p(s, "plans"), p(s, "agent-memory")],
    e = i.CLAUDE_CODE_REMOTE_MEMORY_DIR;
  if (e) r.push(p(e, "projects"), p(e, "agent-memory"));
  if (m.has(n)) try {
    r.push(p(A(), ".claude"))
  } catch {}
  return r
}

function f(n) {
  return Tf(En(R(n)))
}

function T(n) {
  return x() === "windows" ? /^([A-Za-z]:[\\/]|[\\/]{2})/.test(n) : O(n)
}

function w(n, s) {
  if (s === "") return n === L ? void 0 : "empty path";
  if (!T(s)) return "not a full path";
  let r = f(s);
  if (x() !== "windows" && r.split(_).includes(Tf(Cqe()))) return "path is inside a Claude temp folder, which background sessions can write to without asking";
  for (let e of C(n)) {
    let o = S(f(e), r);
    if (o !== ".." && !o.startsWith(`..${_}`) && !O(o)) return `path is inside ${e}, where background sessions can write some files without asking`
  }
  return
}

function DAi(n, s) {
  let r = {};
  for (let [e, o] of Object.entries(n)) r[e] = o !== "" && m.has(e) ? R(s, y(e, o)) : o;
  return r
}

function y(n, s) {
  if (!n.startsWith("AWS_") || !s.startsWith("~/")) return s;
  try {
    return p(A(), s.slice(2))
  } catch {
    return s
  }
}
var I = /^\s*(?:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|(?:claude_proj|chan)_(?:staging_|local_)?01[1-9A-HJ-NP-Za-km-z]{22})\s*$/;

function LAi(n) {
  let s = {},
    r = [];
  for (let [e, o] of Object.entries(n)) {
    let a = !Aut.has(e) ? "not kept for background sessions" : uds.has(e) && !Pe(o) ? "only kept when set to a true value such as 1" : m.has(e) || e === L ? w(e, o) : e === "CLAUDE_CODE_ATTRIBUTION_PROJECT" && !I.test(o) ? "not a claude.ai Project ID" : void 0;
    if (a) r.push(`${qht(e)} (${a})`);
    else s[e] = o
  }
  if (r.length === 0) return n;
  return t(`[jobs] ignored these saved environment entries in the job's state.json: ${r.join(", ")}`, {
    level: "warn"
  }), Object.keys(s).length > 0 ? s : void 0
}

function Lio(n, s) {
  let {
    kept: r,
    dropped: e
  } = QRr(n);
  return e.forEach(({
    name: o,
    problem: a
  }) => {
    try {
      t(`[jobs] dropped environment entry ${qht(o)} from ${s}: ${Unn[a]}.`, {
        level: "warn"
      })
    } catch {}
  }), r
}

function FDe(n) {
  let s = [],
    r = [];
  for (let e = 0; e < n.length; e++) {
    let o = n[e];
    if (!o.startsWith("-")) {
      r.push(o);
      continue
    }
    let a = o.indexOf("="),
      l = a === -1 ? o : o.slice(0, a);
    if (a !== -1 && !CWe.has(l) && oOn.has(l)) {
      s.push(l), r.push(o);
      continue
    }
    let d = a === -1 && CWe.has(l),
      g = l !== "-m" && (a === -1 ? oOn.has(l) || d && n[e + 1] !== void 0 : CWe.has(l)),
      h = g ? s : r;
    if (h.push(o), d && n[e + 1] !== void 0) h.push(n[++e]);
    if (!g || d && rMt.has(l))
      while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) h.push(n[++e])
  }
  if (r.length > 0) t(`[jobs] stripped respawnFlags token(s) that a restart does not re-apply: ${r.join(" ")}`, {
    level: "warn"
  });
  return F(N(s))
}

function N(n) {
  let s = [];
  for (let r = 0; r < n.length; r++) {
    let e = n[r];
    if (!CWe.has(e)) {
      s.push(e);
      continue
    }
    let o = n[++r];
    if (!o.startsWith("-")) {
      s.push(e, o);
      continue
    }
    s.push(`${e==="-n"?"--name":e}=${o}`);
    let a = n[r + 1];
    if (rMt.has(e) && a !== void 0 && !a.startsWith("-")) s.push(e)
  }
  return s
}

function F(n) {
  let s = [];
  for (let e = 0; e < n.length; e++) {
    let o = n[e],
      a = o.indexOf("="),
      l = a === -1 ? o : o.slice(0, a),
      d = [o];
    if (a === -1 && CWe.has(l) && n[e + 1] !== void 0) {
      if (d.push(n[++e]), rMt.has(l))
        while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) d.push(n[++e])
    }
    s.push({
      name: l,
      toks: d
    })
  }
  let r = new Map;
  for (let e = 0; e < s.length; e++) {
    let o = s[e];
    if (CWe.has(o.name) && !rMt.has(o.name) && !D.has(o.name)) r.set(o.name, e)
  }
  return s.filter((e, o) => (r.get(e.name) ?? o) === o).flatMap((e) => e.toks)
}

function NAi(n) {
  let s = n.lastIndexOf("--dangerously-skip-permissions");
  return s !== -1 && n.slice(s + 1).some((e) => e === "--permission-mode" || e.startsWith("--permission-mode=")) ? n.filter((e) => e !== "--dangerously-skip-permissions") : [...n]
}

function $hr(n) {
  return n.includes("--dangerously-skip-permissions") ? [...n.filter((s) => s !== "--dangerously-skip-permissions"), "--dangerously-skip-permissions"] : [...n]
}

function oce(n) {
  let s = [];
  for (let r = 0; r < n.length; r++) {
    let e = n[r];
    if (e === "--") {
      for (let a = r; a < n.length; a++) s.push(n[a]);
      break
    }
    let o = e.startsWith("--") ? e.indexOf("=") : -1;
    if (o !== -1 && (qXt.has(e.slice(0, o)) || c.has(e.slice(0, o)))) {
      s.push(e.slice(0, o + 1) + u(e.slice(0, o), e.slice(o + 1)));
      continue
    }
    if (/^-[a-zA-Z].+/.test(e)) {
      let a = 1;
      while (a < e.length - 1 && Nio.has(`-${e[a]}`)) a++;
      let l = `-${e[a]}`;
      if (e.length > a + 1 && (qXt.has(l) || c.has(l))) {
        s.push(e.slice(0, a + 1) + u(l, e.slice(a + 1)));
        continue
      }
      if (e.length === a + 1 && a > 1 && (qXt.has(l) || c.has(l))) {
        if (s.push(e), qXt.has(l) && n[r + 1] !== void 0) {
          if (s.push(u(l, n[++r])), rMt.has(l))
            while (n[r + 1] !== void 0 && !E(n[r + 1])) s.push(u(l, n[++r]))
        } else if (c.has(l) && n[r + 1] !== void 0 && !E(n[r + 1])) s.push(xM(n[++r]));
        continue
      }
    }
    if (s.push(e), qXt.has(e) && n[r + 1] !== void 0) {
      if (s.push(u(e, n[++r])), rMt.has(e))
        while (n[r + 1] !== void 0 && !E(n[r + 1])) s.push(u(e, n[++r]))
    } else if (c.has(e) && n[r + 1] !== void 0 && !E(n[r + 1])) s.push(xM(n[++r]))
  }
  return s
}
var U = new Set(["--system-prompt", "--append-system-prompt", "--append-subagent-system-prompt", "--plan-mode-instructions", "--name", "-n"]);

function u(n, s) {
  return U.has(n) ? s : xM(s)
}
var c = new Set(["-r", "--resume"]),
  Nio = new Set(["-c", "-p", "-h", "-v"]);

function E(n) {
  return n.length > 1 && n.startsWith("-")
}

function sOn(n) {
  return n.includes("--reply-on-resume") ? [...n] : [...n, "--reply-on-resume"]
}

function xut(n) {
  return n.filter((s) => s !== "--reply-on-resume")
}
export {
  CWe,
  qXt,
  rMt,
  oOn,
  uds,
  fds,
  Aut,
  DAi,
  LAi,
  Lio,
  FDe,
  NAi,
  $hr,
  oce,
  Nio,
  sOn,
  xut
};
