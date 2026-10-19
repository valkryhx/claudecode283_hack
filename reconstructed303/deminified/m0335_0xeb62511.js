// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { fJn } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Gl } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Vi, $Q, e2e } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { kn, iZe, ks, fXn } from "B:/~BUN/root/chunk-yw21pggd.js";
import { ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { cde, x1o, k4s, ubt, WB, zB, H_, Jze, pbt, N1t, Qze, Ot } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { pp } from "B:/~BUN/root/chunk-0p1hpv0s.js";
import { iFt } from "B:/~BUN/root/chunk-bn7mrnb3.js";
import { lstatSync as E, realpathSync as k, statSync as S } from "fs";
import { devNull as Y } from "os";
import { basename as A, dirname as y, join as d, resolve as R } from "path";
var W = 4096;
function x(e) {
  let n,
    r = e.includes("\x00") || e.split(/\r?\n/).map(item => item.replace(/^[ \t]+/, "")).some(item => !/^[#;]/.test(item) && /[\r\t]|(?:^|[^\\])(?:\\\\)*\\$/.test(item));
  return iFt(e, {
    entry: (t, o, i) => {
      if (t?.name === "core" && !t.quoted && o === "worktree") n = i, r ||= i === void 0 || i === "" || i.length > W || /^(?:~|%\(|:\()/.test(i);
    },
    malformed: () => {
      r = !0;
    }
  }, {
    maxLines: 1 / 0
  }), r ? null : n;
}
var Hve = d(Y, "not-a-git-repository"),
  H = new Set(["true", "yes", "on"]);
function T(e) {
  let n = e.trim().toLowerCase(),
    r = /^[+-]?(\d+)[kmg]?$/.exec(n);
  return H.has(n) || r !== null && Number(r[1]) !== 0;
}
var O = /(^|\])[^\S\n\r\u2028\u2029]*worktree\s*=/im;
function $ve(e) {
  let n = d(e, ".git"),
    r;
  try {
    r = E(n);
  } catch (error) {
    let l = G(error) && v(e) ? w(e) : null;
    return l === null ? null : {
      gitDir: l,
      workTree: null,
      commonDir: l
    };
  }
  let workTree = w(e);
  if (workTree === null) return null;
  if (r.isDirectory()) {
    let s = d(workTree, ".git");
    return D(s) ? {
      gitDir: s,
      workTree: workTree,
      commonDir: s
    } : null;
  }
  let o;
  if (r.isSymbolicLink()) o = ubt(n);else if (r.isFile()) {
    let s = Qze(n, Jze)?.trim();
    o = s !== void 0 && s.startsWith("gitdir:") ? s.slice(7).trim() : null;
  } else return null;
  if (o === null || o === "" || Vi(o, e) || H_(o, e)) return null;
  let i = $Q(R(e, o));
  return i === null ? null : J(i, workTree);
}
function yMs(e) {
  let n = d(e, ".git"),
    r;
  try {
    r = E(n);
  } catch {
    return !1;
  }
  let t = null;
  if (r.isSymbolicLink()) t = ubt(n);else if (r.isFile()) {
    let i = Qze(n, Jze)?.trim();
    t = i !== void 0 && i.startsWith("gitdir:") ? i.slice(7).trim() : null;
  }
  if (t === null || t === "" || Vi(t, e) || H_(t, e)) return !1;
  let o = $Q(R(e, t));
  return o !== null && v(o);
}
var V = new Set(["ENOENT", "ENOTDIR", "ELOOP"]);
function w(e) {
  let {
    real: real,
    code: code
  } = e2e(e);
  if (real !== void 0) return real;
  return code !== void 0 && V.has(code) ? null : R(e);
}
function J(e, workTree_2) {
  let r = X(e, workTree_2);
  if (r !== null) {
    let commonDir = y(y(e));
    return A(y(e)) === "worktrees" && _(r, workTree_2) && q(e, commonDir, workTree_2) ? {
      gitDir: e,
      workTree: workTree_2,
      commonDir: commonDir
    } : null;
  }
  let t = z(e);
  return t !== null && _(t, workTree_2) && D(e) ? {
    gitDir: e,
    workTree: workTree_2,
    commonDir: e
  } : null;
}
function mK(workTree_3) {
  return $ve(workTree_3) ?? {
    gitDir: Hve,
    workTree: workTree_3,
    commonDir: Hve
  };
}
function Cd(e, n) {
  return ks(n, {
    repository: mK(e)
  });
}
function _Ms(e, n) {
  return fXn(n, {
    repository: mK(e)
  });
}
function bMs(e, n) {
  let {
      gitDir: r,
      workTree: t,
      commonDir: o
    } = mK(n),
    i = new Set(iZe),
    s = {};
  for (let l of Object.keys(e)) if (i.has(l.toUpperCase())) s[l] = void 0;
  return {
    ...e,
    ...s,
    GIT_DIR: r,
    ...(t !== null ? {
      GIT_WORK_TREE: t
    } : {
      GIT_IMPLICIT_WORK_TREE: "0"
    }),
    GIT_COMMON_DIR: o
  };
}
function v(e) {
  try {
    if (!E(d(e, "HEAD")).isFile() || !E(d(e, "refs")).isDirectory() || !P(e, "commondir")) return !1;
  } catch {
    return !1;
  }
  let n = F(e);
  if (n === null || n.read.some(item => O.test(item)) || n.unread !== void 0 && (O.test(n.unread) || x1o(n.unread, "core", null, "bare").some(item => !T(item)))) return !1;
  let r = n.read.flatMap(item => x1o(item, "core", null, "bare")).at(-1);
  return r !== void 0 && T(r);
}
function F(e) {
  let n = N(e, "config");
  if (n === void 0) return null;
  if (P(e, "config.worktree")) return {
    read: [n],
    unread: void 0
  };
  let unread = N(e, "config.worktree");
  if (unread === void 0) return null;
  let t = k4s(n, "extensions", null, "worktreeConfig").at(-1);
  return t !== void 0 && T(t) ? {
    read: [n, unread],
    unread: void 0
  } : {
    read: [n],
    unread: unread
  };
}
function N(e, n) {
  let r = d(e, n),
    t = zB(r, e) ? void 0 : Qze(r, N1t);
  return t !== void 0 && cde(t) ? void 0 : t;
}
function D(e) {
  return P(e, "commondir");
}
function P(e, n) {
  try {
    return E(d(e, n)), !1;
  } catch (error) {
    return G(error);
  }
}
function q(e, n, r) {
  let t = d(e, "commondir");
  if (WB(t, e)) return !1;
  let o = Qze(t, Jze)?.trim();
  if (o === void 0 || o === "" || Vi(o, r) || H_(o, e, r)) return !1;
  return _(R(e, o), n);
}
function _(e, n) {
  try {
    let r = S(e, {
        bigint: !0
      }),
      t = S(n, {
        bigint: !0
      });
    if (!r.isDirectory() || r.dev !== t.dev) return !1;
    if (r.ino !== 0n && t.ino !== 0n) return r.ino === t.ino;
    return b(k.native(e)) === b(k.native(n));
  } catch {
    return !1;
  }
}
function b(e) {
  switch (I()) {
    case "macos":
      return pp(e.normalize("NFC"));
    case "windows":
      return pp(e);
    default:
      return e;
  }
}
function X(e, n) {
  let r = d(e, "gitdir");
  if (WB(r, e)) return null;
  let t = Qze(r, Jze)?.trim();
  if (t === void 0 || Vi(t, n) || H_(t, e, n)) return null;
  let o = R(e, t);
  return A(o) === ".git" ? y(o) : null;
}
function z(e) {
  let n = F(e),
    r = n === null || n.unread !== void 0 && O.test(n.unread) ? [null] : n.read.map(item => x(item)),
    [t, ...o] = L(r.filter(item => item !== void 0)).map(item => item === null || Vi(item, e) || H_(item, e) ? null : R(e, item));
  return typeof t === "string" && o.every(item => item !== null && _(t, item)) ? t : null;
}
var j = /^filter\.(.*)\.(?:clean|smudge|process|required)$/is;
function Trn(e) {
  return e.normalize("NFKD").replace(/\p{M}+/gu, "").toLowerCase();
}
function LEo(e) {
  return L(Array.from(e).flatMap(item => {
    let r = j.exec(item)?.[1];
    return r === void 0 ? [] : [r];
  }));
}
function NEo(e) {
  return e.flatMap(item => [[`filter.${item}.clean`, ""], [`filter.${item}.smudge`, ""], [`filter.${item}.process`, ""], [`filter.${item}.required`, "false"]]);
}
var maxBuffer = 1048576,
  timeout = 5000,
  Q = Object.fromEntries(["GIT_TRACE", "GIT_TRACE_SETUP", "GIT_TRACE_PACKET", "GIT_TRACE_PACKFILE", "GIT_TRACE_PERFORMANCE", "GIT_TRACE_SHALLOW", "GIT_TRACE_CURL", "GIT_TRACE_REFS", "GIT_TRACE_FSMONITOR", "GIT_TRACE2", "GIT_TRACE2_EVENT", "GIT_TRACE2_PERF"].map(item => [item, "0"])),
  FEo = "if that setting is yours, move it to your global git config; if you don't recognize it, remove it from the repository's config, since a tool or checkout you don't trust may have written it";
function Crn(e) {
  switch (e.reason) {
    case "config_unreadable":
      return "git's configuration for the repository could not be read in full";
    case "conditional_include":
      return "the repository's own git config has a conditional include (includeIf), so what a spawn there would load cannot be determined";
    case "unsafe_key":
      return `the repository's own git config sets ${e.lfsKey === void 0 ? e.key : `${e.key}, an entry git-lfs reads as ${e.lfsKey}`}, which names a program git-lfs would run for any LFS path, on checkout and on status alike (${FEo})`;
  }
}
var Z = /^includeif\..*\.path$/s,
  B = /lfs.customtransfer..+?.path|^lfs\.(?:.*\.)?standalonetransferagent$|^lfs\.extension\./su,
  ee = {
    head: 60,
    tail: 40
  };
function VAr(e) {
  return Gl(fJn(e), ee);
}
async function gK(e, n = {}) {
  let r = await Vzn(e, n);
  if (!r.ok) return r;
  let t = LEo(r.entries.map(([o]) => o));
  if (t.some(item => item.includes("=") || item.includes(`
`))) return {
    ok: !1,
    reason: "filter_name_unrepresentable"
  };
  return {
    ok: !0,
    args: NEo(t).flatMap(([o, i]) => ["-c", `${o}=${i}`])
  };
}
function ne(e, n) {
  return ct(Ot(), e, {
    ...n,
    stdin: "ignore"
  });
}
async function Vzn(e, {
  repository: n = [],
  pin: pin,
  envPins = {},
  base: base,
  run = ne
} = {}) {
  let s = {
      args: n,
      envPins: envPins,
      base: base,
      pin: n.length > 0 ? void 0 : pin ?? mK(e),
      run: run
    },
    l = await M(e, "--local", s);
  if (l === null) return {
    ok: !1,
    reason: "config_unreadable"
  };
  let a = await M(e, "--worktree", s);
  if (a === null) return {
    ok: !1,
    reason: "config_unreadable"
  };
  let entries = [...l, ...a];
  for (let c of entries) {
    let [u] = c;
    if (Z.test(Trn(u))) return {
      ok: !1,
      reason: "conditional_include"
    };
    for (let f of L([u, ...te(c)])) if (B.test(f) || B.test(Trn(f))) return {
      ok: !1,
      reason: "unsafe_key",
      key: VAr(u),
      ...(f === u ? {} : {
        lfsKey: VAr(f)
      })
    };
  }
  return {
    ok: !0,
    entries: entries
  };
}
async function Wpt(dir, n, {
  envPins: envPins_2,
  base: base_2,
  repository: repository,
  buildInvocation = (s, {
    dir: l,
    env: env
  }) => ({
    file: Ot(),
    args: [...s],
    cwd: l,
    env: env
  })
}) {
  let s = buildInvocation([...kn, "config", "--includes", "--null", "--show-scope", "--get-regexp", n], {
      dir: dir,
      env: ks(envPins_2, {
        base: base_2,
        repository: repository
      })
    }),
    l = await ct(s.file, s.args, {
      cwd: s.cwd,
      env: s.env,
      extendEnv: !1,
      timeout: timeout,
      preserveOutputOnError: !1,
      stdin: "ignore"
    });
  if (l.code !== 0) return (l.exitCode === 1 || l.exitCode === 129) && !l.timedOut && !l.maxBufferExceeded ? [] : null;
  let a = l.stdout.split("\x00"),
    g = [];
  for (let c = 0; c + 1 < a.length; c += 2) {
    let u = a[c],
      f = a[c + 1] ?? "",
      m = f.indexOf(`
`);
    if ((u === "system" || u === "global" || u === "command") && m !== -1) g.push([f.slice(0, m), f.slice(m + 1)]);
  }
  return g;
}
async function M(cwd, n, {
  args: args,
  envPins: envPins_3,
  base: base_3,
  pin: i,
  run: run_2
}) {
  let {
    code: code_2,
    stdout: stdout,
    stderr: stderr,
    maxBufferExceeded: maxBufferExceeded
  } = await run_2([...args, ...kn, "config", n, "--includes", "-z", "--list"], {
    cwd: cwd,
    env: ks({
      ...envPins_3,
      LC_ALL: "C",
      ...Q
    }, {
      repository: i,
      base: base_3
    }),
    ...(base_3 !== void 0 && {
      extendEnv: !1
    }),
    timeout: timeout,
    maxBuffer: maxBuffer
  });
  if (maxBufferExceeded === !0 || Buffer.byteLength(stdout) >= maxBuffer) return null;
  let u = stderr.replace(/\n+$/, ""),
    f = u.search(/^fatal: /m),
    m = f === -1 ? u : u.slice(f);
  if (code_2 === 128 && /^fatal: unable to read config file '[^\n]*config(?:\.worktree)?': No such file or directory$/.test(m)) return [];
  if (n === "--worktree" && code_2 === 128 && /^fatal: --worktree cannot be used with multiple working trees unless the config\nextension worktreeConfig is enabled\. Please read "CONFIGURATION FILE"\nsection in "git help worktree" for details$/.test(m)) return [];
  if (n === "--worktree" && code_2 === 129 && /unknown option `worktree'/.test(stderr)) return [];
  if (code_2 !== 0) return null;
  let h = stdout.split("\x00").filter(item => item !== "").map(item => {
    let C = item.indexOf(`
`);
    return C === -1 ? [item, null] : [item.slice(0, C), item.slice(C + 1)];
  });
  return h.some(([p]) => p.includes("\uFFFD")) ? null : h;
}
function te([e, n]) {
  return (n === null ? e : `${e}=${n}`).split(`
`).flatMap(item => {
    let t = item.indexOf("=");
    return t === -1 ? [] : [item.slice(0, t).trim()];
  });
}
var L8e = ["CHERRY_PICK_HEAD", "REVERT_HEAD"],
  re = 2;
async function zpt(e, n, r) {
  let t = new Set();
  if (n.length === 0 || !(await pbt(e))) return t;
  let o = await Promise.all(n.map(item => r(["show-ref", "--exists", item]))),
    i = !1;
  for (let [s, l] of o.entries()) if (l === 0) t.add(n[s]);else if (l !== re) i = !0;
  return t.size === 0 && i ? null : t;
}
export { Hve, $ve, yMs, mK, Cd, _Ms, bMs, Trn, LEo, NEo, FEo, Crn, VAr, gK, Vzn, Wpt, L8e, zpt };