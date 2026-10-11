// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { _i } from "B:/~BUN/root/chunk-54p0h65d.js";
import { tA, yt } from "B:/~BUN/root/chunk-339q6g5w.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { mn, No, Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Wf, _ln, eD } from "B:/~BUN/root/chunk-10m2dkry.js";
import { lstat as A, readdir as V, readlink as R, realpath as x, stat as P } from "fs/promises";
import { dirname as q, isAbsolute as j, join as G, normalize as T, relative as Z, resolve as N, sep as I } from "path";
var C = String.raw`'([^']*)'(?:(=)(?:'([^']*)')?)?`,
  regExp = new RegExp(String.raw`^(?:${C}(?:[ \t\r\n]+${C})*)?[ \t\r\n]*$`);
function M() {
  let env = process.env,
    e = [],
    GIT_CONFIG_COUNT = env.GIT_CONFIG_COUNT;
  if (GIT_CONFIG_COUNT !== void 0) {
    if (!/^\d{1,3}$/.test(GIT_CONFIG_COUNT)) return {};
    for (let o = 0; o < Number(GIT_CONFIG_COUNT); o++) {
      let m = env[`GIT_CONFIG_KEY_${o}`],
        c = env[`GIT_CONFIG_VALUE_${o}`];
      if (m === void 0 || c === void 0) return {};
      e.push([m, c]);
    }
  }
  let GIT_CONFIG_PARAMETERS = env.GIT_CONFIG_PARAMETERS;
  if (GIT_CONFIG_PARAMETERS !== void 0 && regExp.test(GIT_CONFIG_PARAMETERS)) for (let [, o = "", m, c = ""] of GIT_CONFIG_PARAMETERS.matchAll(new RegExp(C, "g"))) {
    let p = m === void 0 ? o.indexOf("=") : -1;
    e.push(m !== void 0 || p === -1 ? [o, c] : [o.slice(0, p), o.slice(p + 1)]);
  }
  let h = {},
    w = 0;
  for (let [o, m] of e) if (o.toLowerCase() === "safe.directory") h[`GIT_CONFIG_KEY_${w}`] = "safe.directory", h[`GIT_CONFIG_VALUE_${w}`] = m, w++;
  if (w === 0) return {};
  return h.GIT_CONFIG_COUNT = String(w), h;
}
var U = 65536,
  K = 4096,
  Y = (n, e) => Ve(yt(), n, e);
async function j1n(n, {
  run = Y
} = {}) {
  let g = await W1n(n, {
    run: run
  });
  return "skipped" in g ? null : g;
}
async function W1n(n, {
  dotGitLink = "refuse",
  run: run_2 = Y
} = {}) {
  let r = (skipped, why) => (t(`Could not vet the worktree registrations of ${n}: ${why}`, {
      level: "warn"
    }), {
      skipped: skipped,
      why: why
    }),
    h = O() === "windows",
    w = async i => {
      let d = await R(i).then(() => "link", f => v(f) === "EINVAL" ? "clear" : B(f) ? "missing" : "unknown");
      if (d !== "missing" || !h) return d;
      return (await A(`${i}.lnk`).then(() => "present", f => B(f) ? "absent" : "unknown")) === "absent" ? "missing" : "unknown";
    },
    o = G(n, ".git"),
    m = await eD(o, n),
    gitDir,
    p;
  if (m === "clear") {
    let [i, d] = await Promise.all([A(o).catch(() => null), P(n).then(s => s, s => B(s) ? null : void 0)]);
    if (d === null) return r("gone", "the repository root is gone");
    if (d === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (i === null) return r("unvettable", ".git vanished");
    if (!i.isDirectory()) return r("pointer", ".git is not a real directory (a pointer file)");
    gitDir = o, p = [i.uid, d.uid];
  } else if (m === "missing") {
    let [i, d, s] = await Promise.all([A(G(n, "HEAD")).catch(() => null), A(G(n, "objects")).catch(() => null), P(n).then(f => f, f => B(f) ? null : void 0)]);
    if (s === null) return r("gone", "the repository root is gone");
    if (s === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (i === null || !i.isFile() || d === null || !d.isDirectory()) return r("not-a-repository", "no .git, and the root is not a bare git directory");
    gitDir = n, p = [s.uid];
  } else if (m === "link" && dotGitLink === "vet") {
    let i = await R(o, {
      encoding: "buffer"
    }).then(S => {
      let D = S.toString("utf-8");
      return D.includes("\x00") || !Buffer.from(D, "utf-8").equals(S) ? null : D;
    }, () => null);
    if (i === null) return r("unvettable", ".git is a link whose text cannot be read");
    if (_i(i, n)) return r("unvettable", ".git is a link to another host");
    let d = h ? /[\\/]+/ : /\/+/;
    if (i === "" || d.test(i.slice(-1)) || i.split(d).some(item => item === "." || item === "..") || j(i) && !_ln(i) || h && /^[A-Za-z]:(?![\\/])/.test(i)) return r("unvettable", ".git is a link whose text is empty, ends in a separator, holds a dot segment, or is rooted or drive-relative in a way git would read differently");
    let s = Wf(N(n, i)),
      f = Wf(T(n));
    if ((await eD(s, s.startsWith(f + I) ? f : void 0)) !== "clear") return r("unvettable", ".git is a link whose target is missing, goes through another link, or cannot be probed");
    let [k, W, L, F] = await Promise.all([A(s).catch(() => null), A(G(s, "HEAD")).catch(() => null), A(G(s, "objects")).catch(() => null), P(n).then(S => S, S => B(S) ? null : void 0)]);
    if (F === null) return r("gone", "the repository root is gone");
    if (F === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (k === null || !k.isDirectory() || W === null || !W.isFile() || L === null || !L.isDirectory()) return r("unvettable", ".git is a link to something other than a git directory");
    gitDir = s, p = [k.uid, F.uid];
  } else return r("unvettable", ".git is a link, a mount point, or cannot be probed");
  if ((await w(G(gitDir, "commondir"))) !== "missing") return r("unvettable", `${gitDir}/commondir exists, which git never writes into a main git dir`);
  if ((h || !p.every(Q)) && !(await J(n, gitDir, run_2))) return r("unvettable", `${gitDir} is owned by another user and not in safe.directory`);
  let l = G(gitDir, "worktrees"),
    b = await eD(l, n),
    vetted = new Map(),
    refused = new Map();
  if (b === "missing") return {
    gitDir: gitDir,
    vetted: vetted,
    refused: refused
  };
  let u = b === "clear" ? await V(l, {
    encoding: "buffer"
  }).catch(() => null) : null;
  if (u === null) return r("unvettable", `${l} is a link or cannot be read`);
  for (let i of u) {
    let d = z(i);
    if (d === null) {
      let y = G(l, `<${i.toString("hex")}>`),
        k = "has a name this check and git would read differently";
      refused.set(y, "has a name this check and git would read differently"), t(`Refused git worktree prune entry ${y}: has a name this check and git would read differently`, {
        level: "warn"
      });
      continue;
    }
    let s = G(l, d),
      f = await X(s, n, w, h);
    if (f === "missing") continue;
    if (f === null) continue;
    if (typeof f === "object") vetted.set(s, f.worktree);else refused.set(s, f), t(`Refused git worktree prune entry ${s}: ${f}`, {
      level: "warn"
    });
  }
  return {
    gitDir: gitDir,
    vetted: vetted,
    refused: refused
  };
}
async function X(n, e, g, r) {
  let h = await eD(n, e);
  if (h === "missing") return "missing";
  if (h !== "clear") return "is a link, a mount point, or cannot be probed";
  let w = await A(n).then(u => u, u => B(u) ? null : void 0);
  if (w === void 0) return "cannot be probed";
  if (w === null) return "missing";
  if (w.isSymbolicLink()) return "became a link";
  if (!w.isDirectory()) return r ? "is not a directory" : null;
  let o = await tt(n, g, r ? 1 / 0 : 1);
  if (o !== null) return o;
  let m = G(n, "gitdir"),
    c = await A(m).then(u => u, u => B(u) ? null : void 0);
  if (c === void 0) return "gitdir cannot be probed";
  if (c === null) return (await g(m)) === "missing" ? {
    worktree: null
  } : "gitdir is absent to lstat but not to the probe (a shortcut beside it, or a race)";
  if (!c.isFile()) return "gitdir is not a regular file";
  if (c.size > U) return "gitdir is larger than any git writes";
  let p = await tA(m, U, {
    noFollow: !0
  }).catch(() => null);
  if (p === null) return "gitdir cannot be read";
  let l = p.replace(/[\r\n]+$/, "");
  if (l === "") return {
    worktree: null
  };
  if (l.includes("\uFFFD") || /\p{Cc}/u.test(l) || /^[A-Za-z]:(?![\\/])/.test(l)) return "gitdir holds bytes git would read differently";
  let b = r ? /[\\/]+/ : /\/+/;
  if (r && l.split(b).some(item => item !== "." && item !== ".." && /[. ]$/.test(item))) return "gitdir holds a component ending in a dot or space";
  let _, E;
  if (j(l)) {
    if (!_ln(l)) return "gitdir is rooted without a drive or a host";
    if (_i(l, e)) return "gitdir names another host";
    if (l.split(b).some(item => item === "." || item === "..")) return "gitdir holds a dot segment git would not write";
    if (b.test(l.slice(-1))) return "gitdir ends in a separator git would not write";
    let u = T(l),
      i = Wf(T(e));
    _ = [u];
    let d = (y, k) => r && k === 0 ? y.toLowerCase() : y,
      s = u.split(I),
      f = i.split(I);
    E = s.length > f.length && f.every((item, index) => d(item, index) === d(s[index] ?? "", index)) ? s.slice(0, f.length).join(I) : void 0;
  } else {
    let u = l.split(b),
      i = u.findIndex(item => item !== "..");
    if ((i < 0 ? [] : u.slice(i)).some(item => item === "" || item === "." || item === "..")) return "gitdir is a relative value git would not write";
    let s = await x(e).catch(() => null);
    if (s === null) return "the repository root does not resolve";
    E = s;
    let f = Wf(T(e)),
      y = n.startsWith(f + I) ? G(s, Z(e, n)) : n;
    _ = [N(y, l), N(s, l)];
  }
  for (let u of _) {
    if (_i(u, E ?? e)) return "gitdir names another host";
    let i = await eD(q(u), E);
    if (i === "link" || i === "unknown") return "gitdir walks through a link, or a component cannot be probed";
    if (i === "clear") {
      let d = await g(u);
      if (d === "link" || d === "unknown") return "gitdir names a link, or one that cannot be probed";
    }
  }
  return {
    worktree: _[0] ?? null
  };
}
async function J(cwd, e, g) {
  let r = {};
  for (let p of ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"]) {
    let l = process.env[p];
    if (l !== void 0) r[p] = l;
  }
  let {
    code: code,
    stdout: stdout
  } = await g([...mn, "-C", cwd, "rev-parse", "--git-dir"], {
    cwd: cwd,
    env: No({
      ...r,
      ...M()
    }),
    timeout: 1e4
  });
  if (code !== 0) return !1;
  let o = stdout.trim(),
    [m, c] = await Promise.all([x(N(cwd, o)).catch(() => null), x(e).catch(() => null)]);
  return m !== null && c !== null && Wf(m) === Wf(c);
}
function Q(n) {
  let e = process.geteuid?.();
  if (e === void 0 || n === e) return !0;
  if (e !== 0) return !1;
  let SUDO_UID = a.SUDO_UID;
  return n === 0 || SUDO_UID !== void 0 && n === SUDO_UID;
}
function z(n) {
  let e = n.toString("utf8");
  return !e.includes("\uFFFD") && !/\p{Cc}/u.test(e) && !(O() === "windows" && /[. ]$/.test(e)) && Buffer.from(e, "utf8").equals(n) ? e : null;
}
async function tt(n, e, g) {
  let r = O() === "windows",
    h = K,
    w = async (o, m) => {
      let c = await V(o, {
        encoding: "buffer"
      }).catch(() => null);
      if (c === null) return `${o} cannot be read`;
      for (let p of c) {
        if (--h < 0) return "holds more files than any entry git writes";
        let l = z(p);
        if (l === null) return `${o} holds a name that is not valid UTF-8`;
        if (r && l.toLowerCase().endsWith(".lnk")) return `${G(o, l)} is named as a shortcut, which git never writes here`;
        let b = G(o, l),
          _ = await A(b).catch(() => null);
        if (_ === null) return `${b} cannot be probed`;
        let E = r && _.isDirectory() ? await eD(b, o) : await e(b);
        if (E === "link" || E === "unknown") return `${b} is a link or cannot be probed`;
        if (_.isDirectory() && m > 1) {
          let u = await w(b, m - 1);
          if (u !== null) return u;
        }
      }
      return null;
    };
  return w(n, g);
}
async function Esn(cwd_2) {
  let e = await j1n(cwd_2);
  if (e === null || e.refused.size > 0) return !1;
  let {
    code: code_2
  } = await Ve(yt(), [...mn, "--git-dir", e.gitDir, "worktree", "prune"], {
    cwd: cwd_2,
    env: No()
  });
  return code_2 === 0;
}
export { j1n, W1n, Esn };