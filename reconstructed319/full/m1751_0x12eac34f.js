// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  NN,
  v$e
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  En
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  PR,
  Ym
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  xT
} from "B:/~BUN/root/chunk-5xx1vfdh.js";
import {
  ct
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  Ds
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  NFe,
  IA,
  Tie
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  q8e,
  Uh
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  qg
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  re
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  aOe
} from "B:/~BUN/root/chunk-5n7fmg5y.js";
import {
  H2t
} from "B:/~BUN/root/chunk-aae6n66j.js";
import {
  $Ue,
  GUo,
  iOe
} from "B:/~BUN/root/chunk-32cnqnds.js";
import {
  e9n
} from "B:/~BUN/root/chunk-8ccett8e.js";
import {
  GGr,
  Ok,
  dgn,
  cgn
} from "B:/~BUN/root/chunk-eth4txve.js";
import {
  os
} from "B:/~BUN/root/chunk-kj33sgq2.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
var N = {
  feature: "remote_control_workspace_trust",
  name: "Remote Control",
  command: "claude rc",
  opening: "Remote Control starts Claude Code sessions in this folder, driven from your other devices:",
  grant: "Sessions started here can read, edit, and execute files, and this folder's project settings (hooks, MCP servers, permission rules, helper commands) apply to them.",
  unattendedRemedy: ""
};

function zUo() {
  return process.stdin.isTTY === !0 && process.stdout.isTTY === !0 && !q8e() && !Pe(Ds(qg(), "CI"))
}
async function Fha({
  dir: r,
  isHomeDir: o,
  canPrompt: s,
  storageV5: n,
  asker: e = N,
  input: T = process.stdin,
  answerGraceMs: f = $Ue,
  answerTimeoutMs: h,
  screen: d = L()
}) {
  let i = NFe(r),
    y = IA(i),
    S = Tie(i),
    a = (o ? `Error: Workspace not trusted. ${i} is your home directory, and for security home-directory trust is never saved, so running \`claude\` here first won't help. Run \`${e.command}\` from a project directory instead (run \`claude\` there once to accept the trust dialog).` : `Error: Workspace not trusted. Please run \`claude\` in ${i} first to review and accept the workspace trust dialog.`) + e.unattendedRemedy;
  if (!s) return m(e.feature, "cannot_ask"), {
    trusted: !1,
    reason: "no_prompt",
    message: a
  };
  let l = PR(r),
    p = !o && l !== null && !xT(l, En(r)),
    w = ["", e.opening, `  ${y}`, "", `Quick safety check: is this a project you created or one you trust? ${e.grant}`],
    u = [...p ? [`This folder is part of the repository at ${IA(l)}; trusting it trusts that whole repository, including when you run \`claude\` there.`] : [], ...o ? ["This is your home directory, so trust lasts for this run only and is not saved."] : [], "Security guide: https://code.claude.com/docs/en/security"],
    _ = `Trust ${S}?`,
    v = B(D(r), d, d === void 0 ? 0 : b([...w, ...u, GUo, `${_} [y/N] `], d.columns));
  if (v === "too_small" && d !== void 0) return m(e.feature, "terminal_too_small"), {
    trusted: !1,
    reason: "no_prompt",
    message: F(d, i, o, e.command)
  };
  let E = v === "too_small" ? [] : v,
    W = [...w, ...E, ...u].map((R) => `${R}
`).join("");
  process.stdout.write(W);
  let k = h === void 0 ? void 0 : os(void 0, {
      timeoutMs: h,
      refTimer: !0
    }),
    A = await iOe(_, T, {
      ignoreAnswersWithinMs: f,
      reaskPreamble: W,
      signal: k?.signal
    }).finally(() => k?.cleanup());
  if (k?.signal.aborted === !0) return m(e.feature, "no_answer"), {
    trusted: !1,
    reason: "no_prompt",
    message: `
No answer in time.
${a}`
  };
  if (!A) return c(e.feature, "declined"), {
    trusted: !1,
    reason: "declined",
    message: `${e.name} did not start: ${i} is not trusted. Run \`${e.command}\` again to trust it.`
  };
  let x = await aOe(r, n).catch((R) => (t(`[bridge:init] persisting workspace trust failed: ${R}`, {
      level: "error"
    }), !1)),
    M = o || v$e();
  if (!x && !M) process.stderr.write(`Couldn't save that choice to your Claude Code config, so you'll be asked again next time.
`), c(e.feature, "not_saved");
  else g(e.feature, {
    saved: x
  });
  return NN(!0), {
    trusted: !0
  }
}

function D(r) {
  let o = e9n(r),
    s = Ym(),
    {
      allowRules: n,
      additionalDirectories: e,
      hookSources: T,
      commandHelperSources: f
    } = s ? H(o) : o,
    h = (u) => s ? u.filter((_) => _ !== C) : u,
    d = H2t(),
    i = Object.keys(Uh("project", {
      expandVars: !1
    }).servers),
    y = i.map(GGr).filter((u) => u.length > 0),
    S = h(cgn()),
    a = h(dgn()),
    l = [],
    p = (u) => l.push({
      text: u,
      endsInList: !1
    }),
    w = (u) => l.push({
      text: u,
      endsInList: !0
    });
  if (f.length > 0) p(`This folder runs credential helper commands (apiKeyHelper, awsAuthRefresh and the like), declared in ${Ok(f)}`);
  if (d.length > 0) p(`This folder runs commands to mint HTTP headers (headersHelper), declared in ${Ok(d)}`);
  if (S.length > 0) p(`This folder sets environment variables for every session here (they can redirect requests and credentials, or change which programs run), declared in ${Ok(S)}`);
  if (T.length > 0) p(`This folder configures hooks that run commands, declared in ${Ok(T)}`);
  if (i.length > 0) w(`Sessions started here launch, without asking, ${i.length} ${P(i.length,"MCP server")} from .mcp.json files in this folder or above it: ` + (y.length > 0 ? Ok(y, 8) : "(server names contain unprintable characters)"));
  if (n.sources.length > 0) w(`This folder pre-approves ${n.rawCount} ${P(n.rawCount,"tool permission")} in ${Ok(n.sources)}: ` + (n.rules.length > 0 ? Ok(n.rules, 8) : "(rule names contain unprintable characters)"));
  if (e.sources.length > 0) w(`This folder adds ${e.rawCount} ${P(e.rawCount,"directory","directories")} to the workspace in ${Ok(e.sources)}: ` + (e.dirs.length > 0 ? Ok(e.dirs, 6) : "(directory names contain unprintable characters)"));
  if (a.length > 0) p(`This folder changes where automatic memory is written (autoMemoryDirectory), declared in ${Ok(a)}`);
  return l.length === 0 ? [] : [...l.map((u) => ({
    ...u,
    text: `  ${re.warning} ${u.text}`
  })), {
    text: j,
    endsInList: !1
  }]
}
var j = "These will apply without asking. Only proceed if you trust this configuration.";

function L() {
  if (process.stdout.isTTY !== !0) return;
  let {
    rows: r,
    columns: o
  } = process.stdout;
  return r > 0 && o > 0 ? {
    rows: r,
    columns: o
  } : {
    rows: 24,
    columns: 80,
    assumed: !0
  }
}

function F(r, o, s, n) {
  let e = s ? "." : ", or run `claude` there once to review the trust dialog.";
  return r.assumed === !0 ? `Error: Workspace not trusted. This terminal did not report its size, so the warnings for ${o} can't be fitted to the screen. Run \`${n}\` again in a normal terminal window${e}` : `Error: Workspace not trusted. This terminal (${r.columns} columns \xD7 ${r.rows} rows) is too small to show what trusting ${o} turns on. Enlarge it and run \`${n}\` again${e}`
}

function b(r, o) {
  let s = Math.max(1, o - 1);
  return r.reduce((n, e) => n + Math.max(1, Math.ceil(O(e) / s)), 0)
}

function O(r) {
  let o = 0;
  for (let s of r) o += s.charCodeAt(0) < 128 ? 1 : 2;
  return Math.max(o, ce(r))
}
var I = 3;

function z(r, o, s) {
  let n = o * Math.max(1, s - 1) - 1,
    e = ct(r, n);
  while (b([e], s) > o && n > 1) n -= Math.max(1, Math.ceil(n / 10)), e = ct(r, n);
  return e
}

function B(r, o, s) {
  if (o === void 0) return r.map((a) => a.text);
  let {
    rows: n,
    columns: e
  } = o;
  if (s > n || o.assumed === !0 && r.length > 0) return "too_small";
  if (r.length === 0) return [];
  let T = r.at(-1).text,
    f = r.slice(0, -1).map((a) => a.endsInList ? z(a.text, I, e) : a.text),
    h = n - s - b([T], e),
    d = (a) => `  ${re.warning} ${a} more ${a===1?"warning doesn't":"warnings don't"} fit on this screen: read this folder's .claude/settings.json and .claude/settings.local.json, and the .mcp.json files here or above, before answering`,
    i = [],
    y = 0;
  for (let [a, l] of f.entries()) {
    let p = f.slice(a);
    if (y + b(p, e) <= h) {
      i.push(...p);
      break
    }
    let w = b([d(p.length - 1)], e);
    if (y + b([l], e) + w > h) break;
    i.push(l), y += b([l], e)
  }
  if (i.length === 0) return "too_small";
  let S = f.length - i.length;
  return [...i, ...S > 0 ? [d(S)] : [], T]
}
var C = ".claude/settings.json";

function H(r) {
  let o = (n) => n.length > 0 && n.every((e) => e === C),
    s = (n) => n !== C;
  return {
    allowRules: o(r.allowRules.sources) ? {
      rules: [],
      sources: [],
      rawCount: 0
    } : r.allowRules,
    additionalDirectories: o(r.additionalDirectories.sources) ? {
      dirs: [],
      sources: [],
      rawCount: 0
    } : r.additionalDirectories,
    hookSources: r.hookSources.filter(s),
    commandHelperSources: r.commandHelperSources.filter(s)
  }
}
export {
  zUo,
  Fha
};
