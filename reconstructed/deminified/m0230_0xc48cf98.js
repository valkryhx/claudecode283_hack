// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { _i, gQ, C9n } from "B:/~BUN/root/chunk-54p0h65d.js";
import { Jhn } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { mn, chn, No, dhn, Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { DWr, k$o, LBt, qx, lj, Bm, NUe, Wft, FUe, yt } from "B:/~BUN/root/chunk-339q6g5w.js";
import { Am } from "B:/~BUN/root/chunk-10m2dkry.js";
import { Hm } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { lstatSync as R, realpathSync as I, statSync as h } from "fs";
import { devNull as D } from "os";
import { basename as N, dirname as m, join as c, resolve as p } from "path";
var Fst = c(D, "not-a-git-repository"),
  K = new Set(["true", "yes", "on"]);
function E(n) {
  let e = n.trim().toLowerCase(),
    t = /^[+-]?(\d+)[kmg]?$/.exec(e);
  return K.has(e) || t !== null && Number(t[1]) !== 0;
}
var _ = /(^|\])\s*worktree\s*=/im;
function cKe(n) {
  let e = c(n, ".git"),
    t;
  try {
    t = R(e);
  } catch (error) {
    let l = B(error) && W(n) ? P(n) : null;
    return l === null ? null : {
      gitDir: l,
      workTree: null,
      commonDir: l
    };
  }
  let workTree = P(n);
  if (workTree === null) return null;
  if (t.isDirectory()) {
    let s = c(workTree, ".git");
    return b(s) ? {
      gitDir: s,
      workTree: workTree,
      commonDir: s
    } : null;
  }
  let o;
  if (t.isSymbolicLink()) o = LBt(e);else if (t.isFile()) {
    let s = FUe(e, NUe)?.trim();
    o = s !== void 0 && s.startsWith("gitdir:") ? s.slice(7).trim() : null;
  } else return null;
  if (o === null || o === "" || _i(o, n) || Bm(o, n)) return null;
  let i = gQ(p(n, o));
  return i === null ? null : U(i, workTree);
}
var M = new Set(["ENOENT", "ENOTDIR", "ELOOP"]);
function P(n) {
  let {
    real: real,
    code: code
  } = C9n(n);
  if (real !== void 0) return real;
  return code !== void 0 && M.has(code) ? null : p(n);
}
function U(n, workTree_2) {
  let t = V(n, workTree_2);
  if (t !== null) {
    let commonDir = m(m(n));
    return N(m(n)) === "worktrees" && C(t, workTree_2) && Y(n, commonDir, workTree_2) ? {
      gitDir: n,
      workTree: workTree_2,
      commonDir: commonDir
    } : null;
  }
  let r = q(n);
  return r !== null && C(r, workTree_2) && b(n) ? {
    gitDir: n,
    workTree: workTree_2,
    commonDir: n
  } : null;
}
function dae(workTree_3) {
  return cKe(workTree_3) ?? {
    gitDir: Fst,
    workTree: workTree_3,
    commonDir: Fst
  };
}
function La(n, e) {
  return No(e, {
    repository: dae(n)
  });
}
function obo(n, e) {
  return dhn(e, {
    repository: dae(n)
  });
}
function J$n(n, e) {
  let {
      gitDir: t,
      workTree: r,
      commonDir: o
    } = dae(e),
    i = new Set(chn),
    s = {};
  for (let l of Object.keys(n)) if (i.has(l.toUpperCase())) s[l] = void 0;
  return {
    ...n,
    ...s,
    GIT_DIR: t,
    ...(r !== null ? {
      GIT_WORK_TREE: r
    } : {
      GIT_IMPLICIT_WORK_TREE: "0"
    }),
    GIT_COMMON_DIR: o
  };
}
function W(n) {
  try {
    if (!R(c(n, "HEAD")).isFile() || !R(c(n, "refs")).isDirectory() || !T(n, "commondir")) return !1;
  } catch {
    return !1;
  }
  let e = G(n);
  if (e === null || e.read.some(item => _.test(item)) || e.unread !== void 0 && (_.test(e.unread) || DWr(e.unread, "core", null, "bare").some(item => !E(item)))) return !1;
  let t = S(e.read, "bare");
  return t !== void 0 && E(t);
}
function G(n) {
  let e = w(n, "config");
  if (e === void 0) return null;
  if (T(n, "config.worktree")) return {
    read: [e],
    unread: void 0
  };
  let unread = w(n, "config.worktree");
  if (unread === void 0) return null;
  let r = k$o(e, "extensions", null, "worktreeConfig").at(-1);
  return r !== void 0 && E(r) ? {
    read: [e, unread],
    unread: void 0
  } : {
    read: [e],
    unread: unread
  };
}
function w(n, e) {
  let t = c(n, e);
  return lj(t, n) ? void 0 : FUe(t, Wft, {
    keepWholeLines: !0
  });
}
function S(n, e) {
  let t;
  for (let r of n) t = DWr(r, "core", null, e).at(-1) ?? t;
  return t;
}
function b(n) {
  return T(n, "commondir");
}
function T(n, e) {
  try {
    return R(c(n, e)), !1;
  } catch (error) {
    return B(error);
  }
}
function Y(n, e, t) {
  let r = c(n, "commondir");
  if (qx(r, n)) return !1;
  let o = FUe(r, NUe)?.trim();
  if (o === void 0 || o === "" || _i(o, t) || Bm(o, n, t)) return !1;
  return C(p(n, o), e);
}
function C(n, e) {
  try {
    let t = h(n, {
        bigint: !0
      }),
      r = h(e, {
        bigint: !0
      });
    if (!t.isDirectory() || t.dev !== r.dev) return !1;
    if (t.ino !== 0n && r.ino !== 0n) return t.ino === r.ino;
    return x(I.native(n)) === x(I.native(e));
  } catch {
    return !1;
  }
}
function x(n) {
  switch (O()) {
    case "macos":
      return Am(n.normalize("NFC"));
    case "windows":
      return Am(n);
    default:
      return n;
  }
}
function V(n, e) {
  let t = c(n, "gitdir");
  if (qx(t, n)) return null;
  let r = FUe(t, NUe)?.trim();
  if (r === void 0 || _i(r, e) || Bm(r, n, e)) return null;
  let o = p(n, r);
  return N(o) === ".git" ? m(o) : null;
}
function q(n) {
  let e = G(n),
    t = e === null || e.unread !== void 0 && _.test(e.unread) ? void 0 : S(e.read, "worktree");
  if (t === void 0 || _i(t, n) || Bm(t, n)) return null;
  return p(n, t);
}
var J = /^filter\.(.*)\.(?:clean|smudge|process|required)$/is;
function Q$n(n) {
  return n.normalize("NFKD").replace(/\p{M}+/gu, "").toLowerCase();
}
function rIt(n) {
  return L(Array.from(n).flatMap(item => {
    let t = J.exec(item)?.[1];
    return t === void 0 ? [] : [t];
  }));
}
function $st(n) {
  return n.flatMap(item => [[`filter.${item}.clean`, ""], [`filter.${item}.smudge`, ""], [`filter.${item}.process`, ""], [`filter.${item}.required`, "false"]]);
}
var maxBuffer = 1048576,
  timeout = 5000,
  X = Object.fromEntries(["GIT_TRACE", "GIT_TRACE_SETUP", "GIT_TRACE_PACKET", "GIT_TRACE_PACKFILE", "GIT_TRACE_PERFORMANCE", "GIT_TRACE_SHALLOW", "GIT_TRACE_CURL", "GIT_TRACE_REFS", "GIT_TRACE_FSMONITOR", "GIT_TRACE2", "GIT_TRACE2_EVENT", "GIT_TRACE2_PERF"].map(item => [item, "0"])),
  KEr = "if that setting is yours, move it to your global git config; if you don't recognize it, remove it from the repository's config, since a tool or checkout you don't trust may have written it";
function oIt(n) {
  switch (n.reason) {
    case "config_unreadable":
      return "git's configuration for the repository could not be read in full";
    case "conditional_include":
      return "the repository's own git config has a conditional include (includeIf), so what a spawn there would load cannot be determined";
    case "unsafe_key":
      return `the repository's own git config sets ${n.lfsKey === void 0 ? n.key : `${n.key}, an entry git-lfs reads as ${n.lfsKey}`}, which names a program git-lfs would run for any LFS path, on checkout and on status alike (${KEr})`;
  }
}
var j = /^includeif\..*\.path$/s,
  A = /lfs.customtransfer..+?.path|^lfs\.(?:.*\.)?standalonetransferagent$|^lfs\.extension\./su,
  H = {
    head: 60,
    tail: 40
  };
function Z$n(n) {
  return Hm(Jhn(n), H);
}
async function mV(n, e = {}) {
  let t = await Qtn(n, e);
  if (!t.ok) return t;
  let r = rIt(t.entries.map(([o]) => o));
  if (r.some(item => item.includes("=") || item.includes(`
`))) return {
    ok: !1,
    reason: "filter_name_unrepresentable"
  };
  return {
    ok: !0,
    args: $st(r).flatMap(([o, i]) => ["-c", `${o}=${i}`])
  };
}
async function Qtn(n, {
  repository: e = [],
  pin: pin,
  envPins = {}
} = {}) {
  let o = {
      args: e,
      envPins: envPins,
      pin: e.length > 0 ? void 0 : pin ?? dae(n)
    },
    i = await F(n, "--local", o);
  if (i === null) return {
    ok: !1,
    reason: "config_unreadable"
  };
  let s = await F(n, "--worktree", o);
  if (s === null) return {
    ok: !1,
    reason: "config_unreadable"
  };
  let entries = [...i, ...s];
  for (let f of entries) {
    let [u] = f;
    if (j.test(Q$n(u))) return {
      ok: !1,
      reason: "conditional_include"
    };
    for (let a of L([u, ...Z(f)])) if (A.test(a) || A.test(Q$n(a))) return {
      ok: !1,
      reason: "unsafe_key",
      key: Z$n(u),
      ...(a === u ? {} : {
        lfsKey: Z$n(a)
      })
    };
  }
  return {
    ok: !0,
    entries: entries
  };
}
async function Ztn(cwd, e, {
  envPins: envPins_2,
  base: base,
  repository: repository
}) {
  let i = await Ve(yt(), [...mn, "config", "--includes", "--null", "--show-scope", "--get-regexp", e], {
    cwd: cwd,
    env: No(envPins_2, {
      base: base,
      repository: repository
    }),
    extendEnv: !1,
    timeout: timeout,
    preserveOutputOnError: !1,
    stdin: "ignore"
  });
  if (i.code !== 0) return (i.exitCode === 1 || i.exitCode === 129) && !i.timedOut && !i.maxBufferExceeded ? [] : null;
  let s = i.stdout.split("\x00"),
    l = [];
  for (let f = 0; f + 1 < s.length; f += 2) {
    let u = s[f],
      a = s[f + 1] ?? "",
      g = a.indexOf(`
`);
    if ((u === "system" || u === "global" || u === "command") && g !== -1) l.push([a.slice(0, g), a.slice(g + 1)]);
  }
  return l;
}
async function F(cwd_2, e, {
  args: args,
  envPins: envPins_3,
  pin: o
}) {
  let {
    code: code_2,
    stdout: stdout,
    stderr: stderr,
    maxBufferExceeded: maxBufferExceeded
  } = await Ve(yt(), [...args, ...mn, "config", e, "--includes", "-z", "--list"], {
    cwd: cwd_2,
    env: No({
      ...envPins_3,
      LC_ALL: "C",
      ...X
    }, {
      repository: o
    }),
    timeout: timeout,
    maxBuffer: maxBuffer,
    stdin: "ignore"
  });
  if (maxBufferExceeded) return null;
  let u = stderr.replace(/\n+$/, ""),
    a = u.search(/^fatal: /m),
    g = a === -1 ? u : u.slice(a);
  if (code_2 === 128 && /^fatal: unable to read config file '[^\n]*config(?:\.worktree)?': No such file or directory$/.test(g)) return [];
  if (e === "--worktree" && code_2 === 128 && /^fatal: --worktree cannot be used with multiple working trees unless the config\nextension worktreeConfig is enabled\. Please read "CONFIGURATION FILE"\nsection in "git help worktree" for details$/.test(g)) return [];
  if (e === "--worktree" && code_2 === 129 && /unknown option `worktree'/.test(stderr)) return [];
  if (code_2 !== 0) return null;
  let k = stdout.split("\x00").filter(item => item !== "").map(item => {
    let y = item.indexOf(`
`);
    return y === -1 ? [item, null] : [item.slice(0, y), item.slice(y + 1)];
  });
  return k.some(([d]) => d.includes("\uFFFD")) ? null : k;
}
function Z([n, e]) {
  return (e === null ? n : `${n}=${e}`).split(`
`).flatMap(item => {
    let r = item.indexOf("=");
    return r === -1 ? [] : [item.slice(0, r).trim()];
  });
}
export { Fst, cKe, dae, La, obo, J$n, Q$n, rIt, $st, KEr, oIt, Z$n, mV, Qtn, Ztn };