// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { NN, v$e } from "B:/~BUN/root/chunk-game8aqv.js";
import { En } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { PR, Ym } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { xT } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Ds } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { NFe, IA, Tie } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { q8e, Uh } from "B:/~BUN/root/chunk-27h4st9h.js";
import { qg } from "B:/~BUN/root/chunk-m749kjym.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { aOe } from "B:/~BUN/root/chunk-5n7fmg5y.js";
import { H2t } from "B:/~BUN/root/chunk-aae6n66j.js";
import { $Ue, GUo, iOe } from "B:/~BUN/root/chunk-32cnqnds.js";
import { e9n } from "B:/~BUN/root/chunk-8ccett8e.js";
import { GGr, Ok, dgn, cgn } from "B:/~BUN/root/chunk-eth4txve.js";
import { os } from "B:/~BUN/root/chunk-kj33sgq2.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
var N = {
  feature: "remote_control_workspace_trust",
  name: "Remote Control",
  command: "claude rc",
  opening: "Remote Control starts Claude Code sessions in this folder, driven from your other devices:",
  grant: "Sessions started here can read, edit, and execute files, and this folder's project settings (hooks, MCP servers, permission rules, helper commands) apply to them.",
  unattendedRemedy: ""
};
function zUo() {
  return process.stdin.isTTY === !0 && process.stdout.isTTY === !0 && !q8e() && !Pe(Ds(qg(), "CI"));
}
async function Fha({
  dir: dir,
  isHomeDir: isHomeDir,
  canPrompt: canPrompt,
  storageV5: storageV5,
  asker = N,
  input = process.stdin,
  answerGraceMs: f = $Ue,
  answerTimeoutMs: h,
  screen = L()
}) {
  let i = NFe(dir),
    y = IA(i),
    S = Tie(i),
    message = (isHomeDir ? `Error: Workspace not trusted. ${i} is your home directory, and for security home-directory trust is never saved, so running \`claude\` here first won't help. Run \`${asker.command}\` from a project directory instead (run \`claude\` there once to accept the trust dialog).` : `Error: Workspace not trusted. Please run \`claude\` in ${i} first to review and accept the workspace trust dialog.`) + asker.unattendedRemedy;
  if (!canPrompt) return m(asker.feature, "cannot_ask"), {
    trusted: !1,
    reason: "no_prompt",
    message: message
  };
  let l = PR(dir),
    p = !isHomeDir && l !== null && !xT(l, En(dir)),
    w = ["", asker.opening, `  ${y}`, "", `Quick safety check: is this a project you created or one you trust? ${asker.grant}`],
    u = [...(p ? [`This folder is part of the repository at ${IA(l)}; trusting it trusts that whole repository, including when you run \`claude\` there.`] : []), ...(isHomeDir ? ["This is your home directory, so trust lasts for this run only and is not saved."] : []), "Security guide: https://code.claude.com/docs/en/security"],
    _ = `Trust ${S}?`,
    v = B(D(dir), screen, screen === void 0 ? 0 : b([...w, ...u, GUo, `${_} [y/N] `], screen.columns));
  if (v === "too_small" && screen !== void 0) return m(asker.feature, "terminal_too_small"), {
    trusted: !1,
    reason: "no_prompt",
    message: F(screen, i, isHomeDir, asker.command)
  };
  let E = v === "too_small" ? [] : v,
    reaskPreamble = [...w, ...E, ...u].map(item => `${item}
`).join("");
  process.stdout.write(reaskPreamble);
  let k = h === void 0 ? void 0 : os(void 0, {
      timeoutMs: h,
      refTimer: !0
    }),
    A = await iOe(_, input, {
      ignoreAnswersWithinMs: f,
      reaskPreamble: reaskPreamble,
      signal: k?.signal
    }).finally(() => k?.cleanup());
  if (k?.signal.aborted === !0) return m(asker.feature, "no_answer"), {
    trusted: !1,
    reason: "no_prompt",
    message: `
No answer in time.
${message}`
  };
  if (!A) return c(asker.feature, "declined"), {
    trusted: !1,
    reason: "declined",
    message: `${asker.name} did not start: ${i} is not trusted. Run \`${asker.command}\` again to trust it.`
  };
  let saved = await aOe(dir, storageV5).catch(R => (t(`[bridge:init] persisting workspace trust failed: ${R}`, {
      level: "error"
    }), !1)),
    M = isHomeDir || v$e();
  if (!saved && !M) process.stderr.write(`Couldn't save that choice to your Claude Code config, so you'll be asked again next time.
`), c(asker.feature, "not_saved");else g(asker.feature, {
    saved: saved
  });
  return NN(!0), {
    trusted: !0
  };
}
function D(r) {
  let o = e9n(r),
    s = Ym(),
    {
      allowRules: allowRules,
      additionalDirectories: additionalDirectories,
      hookSources: hookSources,
      commandHelperSources: commandHelperSources
    } = s ? H(o) : o,
    h = u => s ? u.filter(item => item !== C) : u,
    d = H2t(),
    i = Object.keys(Uh("project", {
      expandVars: !1
    }).servers),
    y = i.map(GGr).filter(item => item.length > 0),
    S = h(cgn()),
    a = h(dgn()),
    l = [],
    p = text => l.push({
      text: text,
      endsInList: !1
    }),
    w = text_2 => l.push({
      text: text_2,
      endsInList: !0
    });
  if (commandHelperSources.length > 0) p(`This folder runs credential helper commands (apiKeyHelper, awsAuthRefresh and the like), declared in ${Ok(commandHelperSources)}`);
  if (d.length > 0) p(`This folder runs commands to mint HTTP headers (headersHelper), declared in ${Ok(d)}`);
  if (S.length > 0) p(`This folder sets environment variables for every session here (they can redirect requests and credentials, or change which programs run), declared in ${Ok(S)}`);
  if (hookSources.length > 0) p(`This folder configures hooks that run commands, declared in ${Ok(hookSources)}`);
  if (i.length > 0) w(`Sessions started here launch, without asking, ${i.length} ${P(i.length, "MCP server")} from .mcp.json files in this folder or above it: ` + (y.length > 0 ? Ok(y, 8) : "(server names contain unprintable characters)"));
  if (allowRules.sources.length > 0) w(`This folder pre-approves ${allowRules.rawCount} ${P(allowRules.rawCount, "tool permission")} in ${Ok(allowRules.sources)}: ` + (allowRules.rules.length > 0 ? Ok(allowRules.rules, 8) : "(rule names contain unprintable characters)"));
  if (additionalDirectories.sources.length > 0) w(`This folder adds ${additionalDirectories.rawCount} ${P(additionalDirectories.rawCount, "directory", "directories")} to the workspace in ${Ok(additionalDirectories.sources)}: ` + (additionalDirectories.dirs.length > 0 ? Ok(additionalDirectories.dirs, 6) : "(directory names contain unprintable characters)"));
  if (a.length > 0) p(`This folder changes where automatic memory is written (autoMemoryDirectory), declared in ${Ok(a)}`);
  return l.length === 0 ? [] : [...l.map(item => ({
    ...item,
    text: `  ${re.warning} ${item.text}`
  })), {
    text: text_3,
    endsInList: !1
  }];
}
var text_3 = "These will apply without asking. Only proceed if you trust this configuration.";
function L() {
  if (process.stdout.isTTY !== !0) return;
  let {
    rows: rows,
    columns: columns
  } = process.stdout;
  return rows > 0 && columns > 0 ? {
    rows: rows,
    columns: columns
  } : {
    rows: 24,
    columns: 80,
    assumed: !0
  };
}
function F(r, o, s, n) {
  let e = s ? "." : ", or run `claude` there once to review the trust dialog.";
  return r.assumed === !0 ? `Error: Workspace not trusted. This terminal did not report its size, so the warnings for ${o} can't be fitted to the screen. Run \`${n}\` again in a normal terminal window${e}` : `Error: Workspace not trusted. This terminal (${r.columns} columns \xD7 ${r.rows} rows) is too small to show what trusting ${o} turns on. Enlarge it and run \`${n}\` again${e}`;
}
function b(r, o) {
  let s = Math.max(1, o - 1);
  return r.reduce((acc, item) => acc + Math.max(1, Math.ceil(O(item) / s)), 0);
}
function O(r) {
  let o = 0;
  for (let s of r) o += s.charCodeAt(0) < 128 ? 1 : 2;
  return Math.max(o, ce(r));
}
var I = 3;
function z(r, o, s) {
  let n = o * Math.max(1, s - 1) - 1,
    e = ct(r, n);
  while (b([e], s) > o && n > 1) n -= Math.max(1, Math.ceil(n / 10)), e = ct(r, n);
  return e;
}
function B(r, o, s) {
  if (o === void 0) return r.map(item => item.text);
  let {
    rows: rows_2,
    columns: columns_2
  } = o;
  if (s > rows_2 || o.assumed === !0 && r.length > 0) return "too_small";
  if (r.length === 0) return [];
  let T = r.at(-1).text,
    f = r.slice(0, -1).map(item => item.endsInList ? z(item.text, I, columns_2) : item.text),
    h = rows_2 - s - b([T], columns_2),
    d = a => `  ${re.warning} ${a} more ${a === 1 ? "warning doesn't" : "warnings don't"} fit on this screen: read this folder's .claude/settings.json and .claude/settings.local.json, and the .mcp.json files here or above, before answering`,
    i = [],
    y = 0;
  for (let [a, l] of f.entries()) {
    let p = f.slice(a);
    if (y + b(p, columns_2) <= h) {
      i.push(...p);
      break;
    }
    let w = b([d(p.length - 1)], columns_2);
    if (y + b([l], columns_2) + w > h) break;
    i.push(l), y += b([l], columns_2);
  }
  if (i.length === 0) return "too_small";
  let S = f.length - i.length;
  return [...i, ...(S > 0 ? [d(S)] : []), T];
}
var C = ".claude/settings.json";
function H(r) {
  let o = n => n.length > 0 && n.every(item => item === C),
    s = n => n !== C;
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
  };
}
export { zUo, Fha };