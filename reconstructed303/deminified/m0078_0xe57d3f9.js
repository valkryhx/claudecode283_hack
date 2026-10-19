// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { yQ, Obt, dDe, OA, vd, $Ys } from "B:/~BUN/root/chunk-j8w5f307.js";
import { xn } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, Ye, H, k, Ts } from "B:/~BUN/root/chunk-3aez4b53.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { HBr } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { bt, Km, Wh, Bi, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { nt } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { Bs, kn, cXn, iZe } from "B:/~BUN/root/chunk-yw21pggd.js";
import { pF } from "B:/~BUN/root/chunk-j704adqd.js";
import { ho } from "B:/~BUN/root/chunk-fqc7tjgr.js";
import { constants as Pt } from "buffer";
import { basename as Re } from "path";
import { homedir as De } from "os";
import { sep as Ue } from "path";
function G1t(e) {
  return;
}
var tmn = "<user-code>";
function He() {
  try {
    return De();
  } catch {
    return "";
  }
}
var ue = "cli",
  ce = new Set(["cli.js", ue, "sdk.mjs", "browser-sdk.js", "agentSdk.js"]),
  de = /^chunk-[0-9a-z]+\.js$/;
function ae(e) {
  return e[0] === "/" && de.test(e.slice(1));
}
function le(e) {
  return ae(e) || e[0] === "/" && ce.has(e.slice(1));
}
function sYs(e) {
  return ae(e) ? "/" + ue : e;
}
var We = /^(?:\/(?:\$bunfs|~BUN)|\/?[A-Za-z]:[\\/](?:\$bunfs|~BUN))[\\/]/;
function fe(e) {
  let n = e.startsWith("file://") ? e.slice(7) : e;
  return We.test(n);
}
function Ve(e) {
  let n = e;
  if (n.startsWith("file://")) n = n.slice(7);
  if (fe(n)) return uBr(n);
  if (n.startsWith("/snapshot/")) n = n.slice(10);
  let r = He();
  if (r && n.startsWith(r + Ue)) n = "~" + n.slice(r.length);
  return n;
}
var Je = ["src/", "packages/"];
function uBr(e) {
  let n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
  return n === -1 ? e : e.slice(n + 1);
}
function aXn(e) {
  return le(e.file) || Je.some(item => e.file.startsWith(item));
}
var Ke = ["node:", "bun:", "internal:"],
  Xe = new Set(["native", "unknown", "ws", "undici", "node-fetch", "isomorphic-fetch", "vercel_fetch", "utf-8-validate"]);
function pe(e) {
  return Xe.has(e) || Ke.some(item => e.startsWith(item));
}
function bjo(e) {
  return pe(e.file);
}
function iYs(e) {
  let n = e.find(item => !bjo(item));
  if (n === void 0) return e.length >= me;
  return n.file === tmn || n.file.startsWith("node_modules/");
}
function aYs(e) {
  return le(e.file) && (e.function == null || e.function === "<anonymous>");
}
function ze(e) {
  let n = e.split(/[/\\]/),
    r = -1;
  for (let u = n.length - 1; u >= 0; u--) if (n[u] === "node_modules") {
    r = u;
    break;
  }
  if (r === -1 || r >= n.length - 1) return null;
  let o = n[r + 1],
    i;
  if (o.startsWith("@")) {
    if (r + 2 >= n.length) return null;
    i = `${o}/${n[r + 2]}`;
  } else i = o;
  let s = n.at(-1);
  if (!s) return null;
  return `node_modules/${i}/${s}`;
}
function Ze(e) {
  let n = Ve(e),
    r = uBr(n),
    o = ze(n);
  if (ce.has(r) && (o === null || o.startsWith("node_modules/@anthropic-ai/")) || fe(e) && de.test(r)) return "/" + r;
  let i = null;
  if (i) return i;
  if (pe(n)) return n;
  return tmn;
}
function qe(e) {
  let n = e.trim();
  if (!n.startsWith("at ")) return null;
  let r = n.slice(3),
    o = r.indexOf(" ("),
    i,
    s;
  if (o !== -1 && r.endsWith(")")) i = r.slice(0, o).trim(), s = r.slice(o + 2, -1);else s = r.trim();
  if (i) {
    if (i = i.replace(/^async\s+/, "").replace(/^new\s+/, ""), i = i.replace(/\s*\[as\s+[^\]]+\]$/, ""), !i) i = void 0;
  }
  let u = s.match(/^(.*):(\d+):(\d+)$/);
  if (!u) return null;
  let [, c, m, f] = u,
    file = Ze(c);
  return {
    file: file,
    line: Number(m),
    column: Number(f),
    function: file === tmn && i ? tmn : i
  };
}
var me = 50;
function nmn(e, n = me) {
  let r = [];
  for (let o of V1t(e).split(`
`)) {
    let i = qe(o);
    if (i) {
      if (r.push(i), r.length >= n) break;
    }
  }
  return r;
}
function V1t(e) {
  let n = typeof e.stack === "string" ? e.stack : "",
    r = typeof e.message === "string" ? e.message : "",
    o = Qe(n, e.name, r);
  return o === -1 ? n : n.slice(o + 1);
}
function Qe(e, n, r) {
  let o = s => s !== "" && e.startsWith(`${s}
`);
  if (r !== "") {
    let s = typeof n === "string" && n !== "" ? `${n}: ${r}` : "";
    if (s !== "" && o(s)) return s.length;
    let u = `: ${r}`,
      c = e.indexOf(`${u}
`);
    return c > 0 && !e.slice(0, c).includes(`
`) ? c + u.length : n === "" && o(r) ? r.length : -1;
  }
  let i = n === void 0 ? "Error" : typeof n === "string" ? n : typeof n === "number" || typeof n === "boolean" || typeof n === "bigint" || n === null ? String(n) : "";
  return o(i) ? i.length : -1;
}
function ge(e, n) {
  try {
    let r = typeof e.stack === "string" ? e.stack : "",
      o = V1t(e),
      s = o.length < r.length && r.endsWith(o) ? o.replace(/\n$/, "").split(`
`) : [],
      u = s.every(item => item.trimStart().startsWith("at ")) ? s : [];
    e.stack = [`${e.name}: ${n}`, ...u].join(`
`), e.message = n;
  } catch {}
  return e;
}
function lYs(e, n) {
  return [`${e.name}: ${e.message}`, ...n.map(item => {
    let o = `${item.file}${item.line ? `:${item.line}` : ""}${item.column ? `:${item.column}` : ""}`;
    return item.function ? `    at ${item.function} (${o})` : `    at ${o}`;
  })].join(`
`);
}
import { mkdir as tt } from "fs/promises";
import { homedir as rt } from "os";
import { basename as Ee, delimiter as U, dirname as V, isAbsolute as ot, resolve as j } from "path";
var pBr = `f() { git --git-dir="$1" for-each-ref --format='%(objectname)'; }; f`;
import { delimiter as et } from "path";
function fBr(e) {
  return e.includes(et) ? null : e;
}
function wbt() {
  return a.CLAUDE_CODE_REMOTE || a.CLAUDE_CODE_PLUGIN_PREFER_HTTPS;
}
var Hhe = "--upload-pack=git-upload-pack",
  mn = ["-c", `core.alternateRefsCommand=${pBr}`];
function rmn() {
  return I() === "windows" ? "\\\\.\\NUL" : "/dev/null";
}
var it = /^core\.hooksPath=(?:\/dev\/null|\\\\\.\\nul)$/i,
  st = ["applypatch-msg", "pre-applypatch", "post-applypatch", "pre-commit", "pre-merge-commit", "prepare-commit-msg", "commit-msg", "post-commit", "pre-rebase", "post-checkout", "post-merge", "pre-push", "pre-receive", "update", "proc-receive", "post-receive", "post-update", "reference-transaction", "push-to-checkout", "pre-auto-gc", "post-rewrite", "sendemail-validate", "fsmonitor-watchman", "p4-changelist", "p4-prepare-changelist", "p4-post-changelist", "p4-pre-submit", "post-index-change"],
  mBr = st.map(item => [`hook.${item}.enabled`, "false"]);
function oGe() {
  return [["core.fsmonitor", ""], ["core.hooksPath", rmn()], ["core.askPass", ""], ["protocol.ext.allow", "never"], ["submodule.recurse", "false"], ["log.showSignature", "false"], ["format.pretty", "medium"], ["gc.auto", "0"], ["maintenance.auto", "false"], ...mBr];
}
var ut = new Set(["core.hooksPath", "core.askPass", "submodule.recurse", ...mBr.map(([e]) => e)]),
  gBr = {
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    ...cXn
  };
function Sjo(e, {
  allowGitTerminalPrompt = !1
} = {}) {
  return Bs(gBr, (r, o) => !(allowGitTerminalPrompt && o === "GIT_TERMINAL_PROMPT") && !ft(e, o));
}
function Dne(e, n, r, o = r.GIT_CONFIG_COUNT, {
  allowRepoGitHooks = !1,
  allowGitTerminalPrompt: allowGitTerminalPrompt_2 = !1
} = {}) {
  let u = Ee(e).toLowerCase();
  if (!/^git(\.exe|\.cmd|\.bat|\.com)?$/.test(u)) return null;
  let c = allowRepoGitHooks ? oGe().filter(([f]) => !ut.has(f)) : oGe(),
    m = _e(n).map(item => n[item]);
  return {
    args: c.filter(([f]) => !m.some(item => item.startsWith(`${f}=`))).flatMap(([f, g]) => ["-c", `${f}=${g}`]).concat(at(n)),
    env: {
      ...r,
      ...Sjo(r, {
        allowGitTerminalPrompt: allowGitTerminalPrompt_2
      }),
      ...UW(o, c),
      GIT_PROXY_COMMAND: r.GIT_PROXY_COMMAND ?? ""
    }
  };
}
var dt = new Set(["-C", "--git-dir", "--work-tree", "--namespace", "--super-prefix", "--config-env", "--attr-source", "--exec-path"]);
function _e(e) {
  let n = [],
    r = 0;
  while (r < e.length) {
    let o = e[r];
    if (o === "-c" && r + 1 < e.length) n.push(r + 1), r += 2;else if (dt.has(o) && r + 1 < e.length) r += 2;else if (o.startsWith("-")) r += 1;else break;
  }
  return n;
}
function at(e) {
  let n = [...e];
  for (let r of _e(n)) if (it.test(n[r])) n[r] = `core.hooksPath=${rmn()}`;
  return n;
}
var dQ = {
  GIT_TERMINAL_PROMPT: "0",
  GIT_ASKPASS: "",
  GCM_INTERACTIVE: "never"
};
function dYs(e) {
  let n = {};
  for (let [r, o] of Object.entries(dQ)) if (pR(e, r) === void 0) n[r] = o;
  return n;
}
function vbt(e = process.env) {
  return {
    ...e,
    ..._(e, (n, r) => Object.hasOwn(dQ, n) && r !== n),
    ...dQ,
    ...UW(pR(e, "GIT_CONFIG_COUNT"), [["credential.interactive", "false"]], e)
  };
}
function _(e, n) {
  let r = {};
  for (let o of Object.keys(e)) if (n(o.toUpperCase(), o)) r[o] = void 0;
  return r;
}
function pR(e, n) {
  if (e[n] !== void 0 || I() !== "windows") return e[n];
  for (let [r, o] of Object.entries(e)) if (r.toUpperCase() === n && o !== void 0) return o;
  return;
}
function ft(e, n) {
  if (Object.hasOwn(e, n)) return !0;
  return I() === "windows" && Object.keys(e).some(item => item.toUpperCase() === n);
}
function UW(e, n, r = {}) {
  let o = Number(e),
    i = Number.isInteger(o) && o > 0 ? o : 0,
    s = {
      GIT_CONFIG_COUNT: String(i + n.length)
    };
  n.forEach(([c, m], index) => {
    s[`GIT_CONFIG_KEY_${i + index}`] = c, s[`GIT_CONFIG_VALUE_${i + index}`] = m;
  });
  let u = new Set(Object.keys(s));
  return {
    ..._(r, (c, m) => u.has(c) && !u.has(m)),
    ...s
  };
}
var sGe = ["-c", "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=yes"],
  pt = "-o BatchMode=yes -o StrictHostKeyChecking=yes",
  mt = "-o BatchMode=yes",
  Te = "-batch";
function gt(e, n) {
  switch (e) {
    case "ssh":
      return n ? pt : mt;
    case "plink":
      return Te;
    case "other":
      return;
  }
}
function omn(e, n) {
  let r = I() === "windows" ? e.replace(/\\/g, "/") : e;
  return `CDPATH= cd -- ${ho([r])} 2>/dev/null || cd / || exit 1; ${n}`;
}
function oZe() {
  let e = "";
  try {
    e = rt();
  } catch {}
  return ot(e) ? e : j("/");
}
function wjo(e, n) {
  if (e !== void 0 && e !== "auto") return e;
  let r = ht(n).toLowerCase().replace(/\.exe$/, "");
  return ["ssh", "plink", "tortoiseplink"].includes(r) ? r : "auto";
}
function ht(e) {
  let n = "",
    r,
    o = !0;
  for (let s = 0; s < e.length; s++) {
    let u = e[s],
      c;
    if (r === void 0 && /[ \t\n\r]/.test(u)) o = !1;else if (r === void 0 && (u === "'" || u === '"')) r = u;else if (u === r) r = void 0;else if (u === "\\" && r !== "'") {
      if (s++, s >= e.length) return "";
      c = e[s];
    } else c = u;
    if (o && c !== void 0) n += c;
  }
  if (r !== void 0) return "";
  let i = I() === "windows" ? /[\\/]/ : /\//;
  return n.split(i).filter(item => item !== "").at(-1) ?? "";
}
function Se(e, GIT_SSH_COMMAND) {
  return {
    ...e,
    ..._(e, r => r === "GIT_SSH_COMMAND" || r === "GIT_SSH"),
    GIT_SSH: void 0,
    GIT_SSH_COMMAND: GIT_SSH_COMMAND
  };
}
function lXn(env, n, {
  strictHostKeys = !0
} = {}) {
  let {
      chosen: o,
      named: named
    } = J(env, n),
    s = gt(named === void 0 ? "ssh" : Et(env, named), strictHostKeys);
  if (s === void 0 || s === Te && _t(o)) return {
    command: o,
    env: env
  };
  let command = `${o} ${s}`;
  return {
    command: command,
    env: Se(env, command)
  };
}
function J(e, n) {
  let r = W(pR(e, "GIT_SSH_COMMAND")) ?? W(n),
    o = W(pR(e, "GIT_SSH"));
  return {
    chosen: r ?? ho([o ?? "ssh"]),
    named: r !== void 0 ? Tt(r) : o
  };
}
function cYs(e, n) {
  let r = pR(e, "GIT_SSH_VARIANT"),
    {
      chosen: chosen,
      named: named_2
    } = J(e, n);
  return (r === void 0 || r === "auto") && named_2 !== void 0 && !["ssh", "plink", "tortoiseplink"].includes(Oe(named_2)) ? chosen : void 0;
}
async function uYs(e, n) {
  if (I() !== "windows") return e;
  let r = pR(e, "GIT_SSH_COMMAND");
  if (r !== void 0) return r.trim() === "" ? e : lXn(e, void 0, {
    strictHostKeys: !1
  }).env;
  let o = await n(["config", "--null", "--get", "core.sshCommand"]),
    i = o.exitCode === 0 && o.stdout.includes("\x00") ? nt(o.stdout, "\x00") : void 0;
  if (i?.trim() === "") return e;
  return lXn(e, i, {
    strictHostKeys: !1
  }).env;
}
function W(e) {
  return e !== void 0 && e.trim() !== "" ? e : void 0;
}
function Et(e, n) {
  let r = pR(e, "GIT_SSH_VARIANT");
  if (r !== void 0 && r !== "auto") return r === "plink" ? "plink" : ["putty", "tortoiseplink", "simple"].includes(r) ? "other" : "ssh";
  let o = Oe(n);
  return o === "ssh" || o === "plink" ? o : "other";
}
function Oe(e) {
  return Ee(e.trim().replace(/\\/g, "/")).toLowerCase().replace(/\.exe$/, "");
}
function _t(e) {
  let n = e.trim().match(/^(?:"[^"]*"|'[^']*'|\S+)/)?.[0] ?? "";
  return /(?:^|\s)-batch(?:\s|$)/.test(e.trim().slice(n.length));
}
function Tt(e) {
  let n = e.trim().match(/^(?:"([^"]*)"|'([^']*)'|(\S+))/);
  return n?.[1] ?? n?.[2] ?? n?.[3] ?? "";
}
var St = ["-c", "protocol.ext.allow=never", "-c", "protocol.fd.allow=never", "-c", "protocol.git.allow=never", "-c", "protocol.ftp.allow=never", "-c", "protocol.ftps.allow=never"];
function Ot(e) {
  return {
    ...e,
    ..._(e, n => n === "GIT_ALLOW_PROTOCOL"),
    GIT_ALLOW_PROTOCOL: void 0
  };
}
function xt(e) {
  let n = pR(e, "GIT_ALLOW_PROTOCOL");
  if (n === void 0) return [];
  let r = new Set(n.split(":"));
  return ["https", "http", "ssh", "file"].filter(item => !r.has(item)).flatMap(item => ["-c", `protocol.${item}.allow=never`]);
}
function Nt(e) {
  return [...St, ...xt(e)];
}
var Ct = ["-c", "init.defaultRefFormat=files"],
  he = {
    GIT_DEFAULT_REF_FORMAT: "files"
  };
function yt(e = vbt(wt()), n) {
  let pinArgs = [...Nt(e), ...Ct],
    o = pR(e, "GIT_SSH_VARIANT"),
    i = o === void 0 || o === "auto" ? {
      ...e,
      ..._(e, s => s === "GIT_SSH_VARIANT"),
      GIT_SSH_VARIANT: wjo(n.variant, J(e, n.command).chosen)
    } : e;
  return {
    pinArgs: pinArgs,
    inCheckoutArgs: [...kn, ...sGe, ...pinArgs],
    env: {
      ...Se(Ot(i), omn(oZe(), lXn(i, n.command).command)),
      ..._(e, (s, u) => Object.hasOwn(cXn, s) && u !== s),
      ...cXn,
      ..._(e, (s, u) => Object.hasOwn(he, s) && u !== s),
      ...he
    }
  };
}
function wt() {
  let e = new Set(iZe),
    env_2 = process.env;
  return {
    ...env_2,
    ..._(env_2, r => e.has(r)),
    ...Object.fromEntries([...e].map(item => [item, void 0]))
  };
}
function wTe(e, n) {
  let r = yt(void 0, n);
  return {
    ...r,
    env: {
      ...r.env,
      GIT_CEILING_DIRECTORIES: xe(V(e))
    }
  };
}
function dXn(e) {
  let n = {};
  for (let r of [...Object.keys(dQ), "GIT_CEILING_DIRECTORIES"]) {
    let o = e[r];
    if (o !== void 0) n[r] = o;
  }
  return n;
}
function xe(e) {
  let n = fBr(j(e));
  if (n === null) throw new x(`Cannot run git under ${j(e)}: its path contains "${U}", which git's discovery ceiling (a "${U}"-separated list) cannot express. Use a location without "${U}" for this directory (the plugins cache \u2014 CLAUDE_CODE_PLUGIN_CACHE_DIR \u2014 or the temporary directory \u2014 TMPDIR \u2014 whichever this path is under).`, "git working directory path contains the PATH delimiter; git discovery ceiling inexpressible");
  return n;
}
async function kbt(e, n) {
  let cwd = V(e);
  return await tt(cwd, {
    recursive: !0
  }), {
    cwd: cwd,
    env: {
      ...n,
      GIT_CEILING_DIRECTORIES: xe(V(cwd))
    }
  };
}
var At = 1000,
  It = 60;
function smn(e, {
  abortSignal: abortSignal,
  timeout = 10 * It * At,
  input: input,
  stdio = ["ignore", "pipe", "pipe"],
  useToolMemoryCgroup: useToolMemoryCgroup
} = {}) {
  abortSignal?.throwIfAborted();
  using u = Wh`exec: ${e.slice(0, 200)}`;
  try {
    let c = $Ys(e, {
      env: process.env,
      maxBuffer: 1e6,
      timeout: timeout,
      cwd: HBr(),
      stdio: stdio,
      reject: !1,
      input: input,
      useToolMemoryCgroup: useToolMemoryCgroup
    });
    if (!c.stdout) return null;
    return c.stdout.trim() || null;
  } catch {
    return null;
  }
}
var K = 1000,
  Y = 60,
  eDe = "/proc/self/fd/3";
function lt(e, n, r = {
  timeout: 10 * Y * K,
  preserveOutputOnError: !0,
  useCwd: !0
}) {
  return ve(() => ct(e, n, {
    allowRepoGitHooks: r.allowRepoGitHooks,
    allowGitTerminalPrompt: r.allowGitTerminalPrompt,
    abortSignal: r.abortSignal,
    timeout: r.timeout,
    preserveOutputOnError: r.preserveOutputOnError,
    cwd: r.cwd ?? (r.useCwd && !OA() ? HBr() : void 0),
    env: r.env,
    extendEnv: r.extendEnv,
    stdin: r.stdin,
    input: r.input,
    stdout: r.stdout,
    stderr: r.stderr,
    maxBuffer: r.maxBuffer,
    stripFinalNewline: r.stripFinalNewline,
    useToolMemoryCgroup: r.useToolMemoryCgroup,
    toolCgroupClass: r.toolCgroupClass,
    waitForExitAfterKill: r.waitForExitAfterKill,
    inheritFd: r.inheritFd
  }));
}
async function ve(e) {
  try {
    return await e();
  } catch (n) {
    return l(n), {
      stdout: "",
      stderr: "",
      code: 1,
      error: H(n).message
    };
  }
}
function ct(e, n, r) {
  return ve(() => r === void 0 ? Pe(e, n) : Pe(e, n, r));
}
function Ne(e) {
  if (e <= 1) return;
  try {
    process.kill(-e, "SIGTERM");
  } catch {}
}
var Rt = 6000,
  vt = 5000;
function Ft(e, n, r, o, i) {
  let s,
    u = !1,
    c = () => {
      if (e.exitCode !== null || e.signalCode !== null) return;
      Promise.resolve().then(() => o(n)).catch(() => !1).then(m => {
        if (u) return;
        if (!m) {
          i.abort(r.reason);
          return;
        }
        s = setTimeout((f, g, {
          stdout: stdout,
          stderr: stderr
        }) => {
          f.abort(g), stdout?.destroy(), stderr?.destroy();
        }, vt, i, r.reason, e);
      });
    };
  if (r.aborted) c();else r.addEventListener("abort", c, {
    once: !0
  });
  return () => {
    u = !0, r.removeEventListener("abort", c), clearTimeout(s);
  };
}
async function kt(e, n) {
  if (e.pid === void 0 || e.exitCode !== null || e.signalCode !== null) return;
  await je(new Promise(r => e.once("exit", () => r())), n);
}
function Ce(e) {
  return k(e) === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER" || e?.isMaxBuffer === !0 || e?.name === "MaxBufferError";
}
var w = {
  cwd: "execFileNoThrow spawn rejected: null byte in cwd",
  file: "execFileNoThrow spawn rejected: null byte in executable path",
  argv: "execFileNoThrow spawn rejected: null byte in argv",
  envName: "execFileNoThrow spawn rejected: null byte in env name",
  envValue: "execFileNoThrow spawn rejected: null byte in env value"
};
function Gt(e, n, r, o, i, s) {
  let u = `the runtime rejected ${be(Re(e))} because`;
  if (typeof r === "string" && r.includes("\x00")) return {
    telemetry: w.cwd,
    local: `${u} the working directory contains a null byte (\\0)`
  };
  if (e.includes("\x00")) return {
    telemetry: w.file,
    local: `${u} the executable path contains a null byte (\\0)`
  };
  let c = n.findIndex(item => typeof item === "string" && item.includes("\x00"));
  if (c !== -1) return {
    telemetry: w.argv,
    local: `${u} the argument at index ${c} (zero-based) contains a null byte (\\0)`
  };
  let m = Object.entries({
      ...i,
      ...o
    }).filter(([, h]) => h !== void 0),
    f = m.find(([h]) => h.includes("\x00"));
  if (f !== void 0) return {
    telemetry: w.envName,
    local: `${u} the name of environment variable ${Ae(f[0])} contains a null byte (\\0)${ye(f, s)}`
  };
  let g = m.find(([, h]) => typeof h === "string" && h.includes("\x00"));
  return g && {
    telemetry: w.envValue,
    local: `${u} the value of environment variable ${Ae(g[0])} contains a null byte (\\0)${ye(g, s)}`
  };
}
function ye([e, n], r) {
  return r[e] === n ? "; every program this process starts will fail the same way until that variable is removed from its environment" : " (in the env passed for this command)";
}
var we = 200;
function Lt(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}
function be(e) {
  return Bi(e).slice(1, -1).replace(/[^\x20-\x7e]/g, n => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Ae(e) {
  let n = e.indexOf("="),
    r = n === -1 ? e : e.slice(0, n),
    o = r.length > we,
    i = `"${be(o ? r.slice(0, we) : r)}"${o ? "\u2026" : ""}`;
  return n === -1 ? i : `${i} (then '=' and ${Lt(e.length - n - 1)}, not shown)`;
}
var Mt = new Set(["EPIPE", "ECONNRESET", "ENOTCONN", "EOF"]);
function $t(e) {
  let n = {},
    r;
  try {
    r = e.stdin;
  } catch {
    return n;
  }
  if (!r) return n;
  return r.removeAllListeners("error"), r.on("error", o => {
    let i = k(o) ?? "unknown";
    if (Mt.has(i)) return;
    n.truncatedBy ??= i, e.kill();
  }), n;
}
function Bt(e, n) {
  if (e.shortMessage) return e.shortMessage;
  if (typeof e.signal === "string") return e.signal;
  return String(n);
}
function Dt(e, n) {
  if (!Ts(n) || n.code === void 0 || typeof n.syscall !== "string" || !n.syscall.startsWith("spawn") || e.exitCode !== void 0 || e.timedOut || e.isCanceled || k(e) === n.code) return;
  return `Command failed with ${n.code}: ${e.command}
${n.message}`;
}
var Ut = 3,
  Ht = 1e8;
function Ie(e, n) {
  if (e instanceof Uint8Array && n === "utf8-keep-bom") return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
  let r = e instanceof Uint8Array ? Buffer.from(e).toString("latin1") : typeof e === "string" ? e : "";
  return n === "utf8-keep-bom" ? Buffer.from(r, "latin1").toString("utf8") : r;
}
async function Pe(e, n, {
  abortSignal: abortSignal_2,
  timeout: timeout_2 = 10 * Y * K,
  preserveOutputOnError = !0,
  cwd: cwd_2,
  env: env_3,
  extendEnv: extendEnv,
  maxBuffer: maxBuffer,
  shell: shell,
  stdin: stdin,
  input: input_2,
  stdout: stdout_2,
  stderr: stderr_2,
  stripFinalNewline: stripFinalNewline,
  encoding: encoding,
  allowRepoGitHooks: allowRepoGitHooks_2,
  allowGitTerminalPrompt: allowGitTerminalPrompt_3,
  useToolMemoryCgroup: useToolMemoryCgroup_2 = !0,
  toolCgroupClass = "helper",
  waitForExitAfterKill = !1,
  onStdoutData: onStdoutData,
  inheritFd: inheritFd,
  withoutControllingTerminal = !1,
  tellBeforeKill: tellBeforeKill
} = {
  timeout: 10 * Y * K,
  preserveOutputOnError: !0,
  maxBuffer: 1e6
}) {
  if (OA()) return {
    stdout: "",
    stderr: dDe,
    code: 126,
    error: dDe
  };
  let A = e;
  if (!shell) {
    let d = pF(e);
    if (d === null) return {
      stdout: "",
      stderr: `Command '${e}' not found or is in an unsafe location (current directory)`,
      code: 127,
      error: `Command '${e}' not found or is in an unsafe location (current directory)`
    };
    A = d;
  }
  let env_4 = process.env,
    Q = Dne(A, n, env_3 === void 0 ? env_4 : extendEnv === !1 ? env_3 : {
      ...env_4,
      ...env_3
    }, env_3 && "GIT_CONFIG_COUNT" in env_3 ? env_3.GIT_CONFIG_COUNT : a.GIT_CONFIG_COUNT, {
      allowRepoGitHooks: allowRepoGitHooks_2,
      allowGitTerminalPrompt: allowGitTerminalPrompt_3
    }),
    Be = Q?.args ?? n,
    env_5 = Q?.env ?? env_3,
    M = withoutControllingTerminal && I() !== "windows";
  if (M && Km()) {
    let d = `${Re(e)} was not started because Claude Code was exiting; try again after it restarts`;
    return {
      stdout: "",
      stderr: d,
      code: 1,
      error: d
    };
  }
  let p,
    y,
    ee,
    te,
    B = tellBeforeKill !== void 0 && abortSignal_2 !== void 0 ? new AbortController() : void 0,
    D,
    ne = I() === "linux" ? {
      noChildLeft: !0
    } : {},
    P = ne,
    re,
    T = encoding === "utf8-keep-bom" ? maxBuffer ?? Ht : void 0;
  try {
    let d = Obt(A, Be, {
      signal: B?.signal ?? abortSignal_2,
      timeout: timeout_2,
      cwd: cwd_2,
      env: env_5,
      shell: shell,
      ...(inheritFd === void 0 ? {
        stdin: stdin,
        ...(stdout_2 === void 0 ? {} : {
          stdout: stdout_2
        }),
        ...(stderr_2 === void 0 ? {} : {
          stderr: stderr_2
        })
      } : {
        stdio: [stdin, stdout_2, stderr_2, inheritFd]
      }),
      ...(T !== void 0 ? {
        maxBuffer: Math.min(T * Ut, Pt.MAX_STRING_LENGTH)
      } : maxBuffer === void 0 ? {} : {
        maxBuffer: maxBuffer
      }),
      ...(stripFinalNewline === void 0 ? {} : {
        stripFinalNewline: stripFinalNewline
      }),
      ...(encoding !== void 0 && encoding !== "utf8" && {
        encoding: "latin1"
      }),
      ...(extendEnv === void 0 ? {} : {
        extendEnv: extendEnv
      }),
      ...(useToolMemoryCgroup_2 ? vd(toolCgroupClass) : {}),
      ...(M && {
        detached: !0
      }),
      reject: !1
    });
    if (P = d.pid === void 0 ? ne : {}, tellBeforeKill !== void 0 && abortSignal_2 !== void 0 && B !== void 0 && d.pid !== void 0) te = Ft(d, d.pid, abortSignal_2, tellBeforeKill, B);
    if (y = M ? d.pid : void 0, y !== void 0) {
      let E = y,
        S = () => Ne(E),
        O = bt(S),
        b = yQ(S, {
          alwaysLast: !0
        });
      ee = () => {
        O(), b();
      };
    }
    if (d.once("error", E => {
      re = E;
    }), D = input_2 === void 0 ? void 0 : $t(d), input_2 !== void 0 && d.pid !== void 0) d.stdin?.end(input_2);
    if (onStdoutData && d.pid !== void 0) d.stdout?.on("data", E => {
      try {
        onStdoutData(E.toString());
      } catch (error) {
        l(error);
      }
    });
    if (p = await d, waitForExitAfterKill && p.exitCode === void 0 && (abortSignal_2?.aborted === !0 || p.timedOut)) await kt(d, Rt);
  } catch (error) {
    let E = error.message;
    if (Ts(error)) return t(`execFileNoThrow spawn failed: ${k(error)} ${E}`, {
      level: "error"
    }), {
      stdout: "",
      stderr: "",
      code: 1,
      ...P
    };else if (Ce(error)) return t(`execFileNoThrow maxBuffer exceeded: ${E}`, {
      level: "error"
    }), {
      stdout: "",
      stderr: "",
      code: 1,
      maxBufferExceeded: !0
    };else {
      let env_6 = process.env,
        O = k(error) === "ERR_INVALID_ARG_VALUE" ? Gt(A, n, cwd_2, env_5, extendEnv === !1 && env_5 !== void 0 ? void 0 : env_6, env_6) : void 0;
      if (O) t(`execFileNoThrow spawn refused: ${O.local}`, {
        level: "error"
      });
      let b = H(error);
      l(Ye(O ? ge(b, O.telemetry) : b, O?.telemetry ?? "execFileNoThrow unexpected rejection"));
    }
    return {
      stdout: "",
      stderr: "",
      code: 1
    };
  } finally {
    if (te?.(), ee?.(), y !== void 0 && (p === void 0 || p.exitCode === void 0)) Ne(y);
  }
  if (D?.truncatedBy !== void 0) {
    let error_2 = `stdin write failed: ${D.truncatedBy}`;
    return t(`execFileNoThrow ${error_2}`, {
      level: "error"
    }), {
      stdout: "",
      stderr: "",
      code: 1,
      error: error_2
    };
  }
  let stdout_3 = Ie(p.stdout, encoding),
    stderr_3 = Ie(p.stderr, encoding);
  if (T !== void 0 && (stdout_3.length > T || stderr_3.length > T)) return preserveOutputOnError ? {
    stdout: stdout_3.slice(0, T),
    stderr: stderr_3.slice(0, T),
    code: 1,
    error: `Command failed: ${p.command}
maxBuffer exceeded`,
    maxBufferExceeded: !0
  } : {
    stdout: "",
    stderr: "",
    code: 1,
    maxBufferExceeded: !0
  };
  if (!p.failed) return {
    stdout: stdout_3,
    stderr: stderr_3,
    code: 0,
    exitCode: 0
  };
  let oe = Ce(p) ? {
      maxBufferExceeded: !0
    } : {},
    ie = p.timedOut ? {
      timedOut: !0
    } : {};
  if (!preserveOutputOnError) return {
    stdout: "",
    stderr: "",
    code: p.exitCode ?? 1,
    exitCode: p.exitCode,
    ...oe,
    ...ie,
    ...P
  };
  let code = p.exitCode ?? 1;
  return {
    stdout: stdout_3,
    stderr: stderr_3,
    code: code,
    error: Dt(p, re) ?? Bt(p, code),
    exitCode: p.exitCode,
    ...oe,
    ...ie,
    ...P
  };
}
export { G1t, tmn, sYs, uBr, aXn, bjo, iYs, aYs, nmn, V1t, lYs, pBr, fBr, wbt, Hhe, rmn, mBr, oGe, gBr, Sjo, Dne, dQ, dYs, vbt, pR, UW, sGe, omn, oZe, wjo, lXn, cYs, uYs, wTe, dXn, kbt, smn, eDe, lt, ct };