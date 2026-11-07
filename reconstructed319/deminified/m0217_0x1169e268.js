// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { bl, ca } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { Wd } from "B:/~BUN/root/chunk-2f1svh63.js";
import { d0 } from "B:/~BUN/root/chunk-gq1er5y2.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { yn, Gte, ys } from "B:/~BUN/root/chunk-88zb3509.js";
import { Zxo, eme, lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { RC, A_, bdn, Pt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { rd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { H2 } from "B:/~BUN/root/chunk-65j4e9bn.js";
import { $Lr, Ol } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Ja } from "B:/~BUN/root/chunk-v91d7hbv.js";
function tLe(e) {
  let t = /^git version (\d+)\.(\d+)\.(\d+)/.exec(e.trim());
  return t === null ? null : {
    major: Number(t[1]),
    minor: Number(t[2]),
    patch: Number(t[3])
  };
}
function SHi(e) {
  return e !== null && (e.major > 2 || e.major === 2 && e.minor >= 32);
}
function wHi(e) {
  return e !== null && (e.major > 2 || e.major === 2 && e.minor >= 32);
}
function kHi(e) {
  return e !== null && (e.major > 2 || e.major === 2 && e.minor >= 36);
}
import { constants as _ } from "fs";
import { lstat as y, open as Q, opendir as ee, realpath as E } from "fs/promises";
import { dirname as j, isAbsolute as M, join as b, resolve as P, sep as te } from "path";
import { finished as ne } from "stream/promises";
var re = 15000,
  N = 512,
  ie = 8,
  se = 1e6,
  F = 4096,
  W = 4096,
  maxBuffer = 8388608,
  ae = 74 + 4 * W,
  A = "submodule inspection deadline";
async function Voe(e, t) {
  let n = t?.deadlineMs ?? re;
  try {
    return await zt(de(e, n), n, A);
  } catch (error) {
    return {
      kind: "unverifiable",
      reason: error instanceof Error && error.message === A ? "timeout" : "unreadable"
    };
  }
}
function eLe(e) {
  if (e.kind === "unverifiable") return {
    kind: "unverifiable",
    reason: e.reason,
    path: e.path
  };
  let paths = [...e.withTrackedChanges, ...e.withUntrackedFiles];
  return paths.length > 0 ? {
    kind: "changes",
    paths: paths
  } : void 0;
}
function y_e(e) {
  if (e.kind === "changes") {
    let n = e.paths.slice(0, 3).map(U).filter(Boolean),
      r = e.paths.length - n.length;
    return `changes inside ${e.paths.length === 1 ? "submodule" : "submodules"} ${n.join(", ")}${r > 0 ? ` and ${r} more` : ""}`;
  }
  let t = e.path === void 0 ? void 0 : U(e.path) || void 0;
  switch (e.reason) {
    case "nested_repository":
      return `${t ?? "a directory"} is a separate git repository inside the worktree, not a submodule checkout`;
    case "gitdir_outside_modules":
      return `submodule ${t ?? "checkout"} points at a git directory outside this worktree's own, or its object alternates or config lead somewhere this worktree cannot vouch for`;
    case "unconfigured_gitlink":
      return `${t ?? "a directory"} is a nested repository recorded in the index but not a configured submodule`;
    case "nested_submodules":
      return `submodule ${t ?? "checkout"} holds submodules of its own, which can't be inspected`;
    case "too_many":
      return `it records more than ${N} submodules, too many to inspect`;
    case "unreadable":
      return t === void 0 ? "its submodules' state could not be read" : `the state of submodule ${t} could not be read`;
    case "timeout":
      return "inspecting its submodules took too long";
  }
}
var ue = {
  head: 24,
  tail: 16
};
function U(e) {
  return Wd(e, ue);
}
async function de(e, deadlineMs) {
  let n = {
      repository: [],
      env: rd(e),
      deadlineMs: deadlineMs
    },
    reason = await sZt(e, n);
  if (typeof reason === "string") return {
    kind: "unverifiable",
    reason: reason
  };
  if (reason.length === 0) return {
    kind: "verified",
    withTrackedChanges: [],
    withUntrackedFiles: []
  };
  let reason_2 = await Zys(e, n);
  if (typeof reason_2 === "string") return {
    kind: "unverifiable",
    reason: reason_2
  };
  let s = await RC(e);
  if (s === null) return {
    kind: "unverifiable",
    reason: "unreadable"
  };
  let real;
  try {
    real = b(await E(s), "modules");
  } catch {
    return {
      kind: "unverifiable",
      reason: "unreadable"
    };
  }
  let u = {
      lexical: b(s, "modules"),
      real: real
    },
    c = new Set(reason_2),
    a = Ja(ie, l => c.has(l) ? fe(e, l, u, n) : me(e, l)),
    f = await Promise.all(reason.map(item => a(item))),
    withTrackedChanges = [],
    withUntrackedFiles = [];
  for (let [l, h] of f.entries()) {
    let path = reason[l];
    switch (h) {
      case "absent":
      case "clean":
        break;
      case "tracked":
        withTrackedChanges.push(path);
        break;
      case "untracked":
        withUntrackedFiles.push(path);
        break;
      default:
        return {
          kind: "unverifiable",
          reason: h.unverifiable,
          path: path
        };
    }
  }
  return {
    kind: "verified",
    withTrackedChanges: withTrackedChanges,
    withUntrackedFiles: withUntrackedFiles
  };
}
async function Zys(e, t) {
  let n = await v(b(e, ".gitmodules"), se);
  switch (n.kind) {
    case "absent":
      return [];
    case "directory":
    case "other":
      return "unreadable";
    case "file":
      break;
  }
  let r = await z(n.text, "^submodule\\..*\\.path$", e, t);
  return r === "unreadable" ? r : H(r.map(item => item.value));
}
async function z(input, t, cwd, {
  repository: repository,
  env: env,
  deadlineMs: s
}) {
  let i = await lt(Pt(), [...repository, ...yn, "config", "--file", "-", "--no-includes", "-z", "--get-regexp", t], {
      cwd: cwd,
      env: env,
      input: input,
      timeout: s,
      preserveOutputOnError: !1
    }),
    u = i.exitCode === 1 && i.error === void 0 && !i.timedOut && !i.maxBufferExceeded;
  if (i.code !== 0 && !u) return "unreadable";
  let c = [];
  for (let a of i.stdout.split("\x00")) {
    if (a === "") continue;
    let f = a.indexOf(`
`);
    if (f === -1) return "unreadable";
    c.push({
      key: a.slice(0, f),
      value: a.slice(f + 1)
    });
  }
  return c;
}
async function sZt(e, t, n) {
  return X(e, t, "160000", n);
}
async function bHi(e, t) {
  return X(e, t, "120000");
}
async function X(cwd_2, t, n, r) {
  let o = [...t.repository, ...yn, "ls-files", "-s", ...(r === void 0 ? [] : ["-v"]), "-z"],
    s = await lt(t.git ?? Pt(), o, {
      cwd: cwd_2,
      env: t.env,
      timeout: t.deadlineMs,
      maxBuffer: maxBuffer,
      preserveOutputOnError: !1,
      stdin: "ignore"
    });
  if (s.maxBufferExceeded) return ce(cwd_2, o, t, n, r);
  if (s.code !== 0) return "unreadable";
  let i = new B(n, r);
  return i.push(Buffer.from(s.stdout, "utf8")), i.end();
}
async function ce(cwd_3, t, {
  git = Pt(),
  env: env_2,
  deadlineMs: o
}, s, i) {
  let u = eme(git, t, env_2),
    c = new B(s, i);
  try {
    let a = d0(git, u?.args ?? t, {
      cwd: cwd_3,
      env: u?.env ?? env_2,
      timeout: o,
      stdin: "ignore",
      stdout: "pipe",
      stderr: "ignore"
    });
    a.stdout?.on("data", h => {
      if (c.push(Buffer.isBuffer(h) ? h : Buffer.from(h, "utf8")) !== void 0) a.kill();
    });
    let f = a.stdout ? ne(a.stdout).catch(() => {}) : Promise.resolve(),
      d = await a,
      m = !d.timedOut && !d.isCanceled && d.signal === void 0 && d.exitCode === 0;
    if (!m) a.stdout?.destroy();
    await f;
    let l = c.end();
    if (typeof l === "string") return l;
    return m ? l : "unreadable";
  } catch {
    return "unreadable";
  }
}
class B {
  bitsSeen;
  prefix;
  paths = new Set();
  record = "none";
  pending = [];
  pendingBytes = 0;
  verdict = void 0;
  letterBytes;
  constructor(e, t) {
    this.bitsSeen = t;
    this.prefix = `${e} `, this.letterBytes = t === void 0 ? 0 : 2;
  }
  push(e) {
    let t = 0;
    while (this.verdict === void 0 && t < e.length) {
      let n = e.indexOf(0, t),
        r = n === -1 ? e.length : n;
      if (this.append(e.subarray(t, r)), n === -1) break;
      this.completeRecord(), t = n + 1;
    }
    return this.verdict;
  }
  end() {
    if (this.verdict !== void 0) return this.verdict;
    if (this.record !== "none") return "unreadable";
    return H([...this.paths]);
  }
  append(e) {
    if (e.length === 0 || this.record === "other") return;
    if (this.pending.push(e), this.pendingBytes += e.length, this.record === "none") this.record = "undecided";
    let t = this.letterBytes + this.prefix.length;
    if (this.record === "undecided" && this.pendingBytes >= t) {
      let n = this.pending.length === 1 ? e : Buffer.concat(this.pending);
      if (this.noteLetter(n.toString("latin1", 0, this.letterBytes)), n.toString("latin1", this.letterBytes, t) === this.prefix) this.record = "listed", this.pending = [n];else this.record = "other", this.pending = [];
    }
    if (this.record === "listed" && this.pendingBytes > ae) this.verdict = "unreadable";
  }
  noteLetter(e) {
    if (this.bitsSeen === void 0) return;
    if (!/^[A-Za-z] $/.test(e)) {
      this.verdict = "unreadable";
      return;
    }
    let t = e[0];
    this.bitsSeen.assumeUnchanged ||= t === t.toLowerCase(), this.bitsSeen.skipWorktree ||= t.toUpperCase() === "S";
  }
  completeRecord() {
    if (this.record === "undecided" && this.bitsSeen !== void 0) this.verdict ??= "unreadable";
    if (this.record === "listed" && this.verdict === void 0) {
      let e = Buffer.concat(this.pending).toString("utf8"),
        t = e.indexOf("\t");
      if (t === -1) this.verdict = "unreadable";else if (this.paths.add(e.slice(t + 1)), this.paths.size > N) this.verdict = "too_many";
    }
    this.record = "none", this.pending = [], this.pendingBytes = 0;
  }
}
function H(e) {
  let t = new Set();
  for (let n of e) {
    if (n.includes("\uFFFD") || !le(n)) return "unreadable";
    if (t.add(n), t.size > N) return "too_many";
  }
  return [...t];
}
function le(e) {
  if (e.length === 0 || e.length > W) return !1;
  return e.split("/").every(item => {
    let n = Ol(item);
    return item.replace(/[. ]+$/, "") !== "" && n !== ".git" && n !== "git~1" && !$Lr.test(item) && [...item].every(item => item !== "\\" && item !== ":" && item !== ";" && item > "\x1F" && item !== "\x7F");
  });
}
async function fe(e, t, n, r) {
  let {
      deadlineMs: o
    } = r,
    s = await J(e, t);
  if (s.kind !== "directory") return s.kind === "absent" ? "absent" : {
    unverifiable: "unreadable"
  };
  let cwd_4 = s.path,
    u = await v(b(cwd_4, ".git"), F);
  switch (u.kind) {
    case "absent":
      return q(cwd_4);
    case "directory":
      return {
        unverifiable: "nested_repository"
      };
    case "other":
      return {
        unverifiable: "unreadable"
      };
    case "file":
      break;
  }
  let c = u.text.trim();
  if (!c.startsWith("gitdir:")) return {
    unverifiable: "unreadable"
  };
  let a = c.slice(7).trim();
  if (a === "" || ca(a, cwd_4)) return {
    unverifiable: "gitdir_outside_modules"
  };
  let f = P(cwd_4, a);
  if (!I(f, n.lexical) && !I(f, n.real)) return {
    unverifiable: "gitdir_outside_modules"
  };
  if (A_(a, cwd_4)) return {
    unverifiable: "gitdir_outside_modules"
  };
  let GIT_COMMON_DIR;
  try {
    GIT_COMMON_DIR = await E(f);
  } catch {
    return {
      unverifiable: "unreadable"
    };
  }
  if (!I(GIT_COMMON_DIR, n.real)) return {
    unverifiable: "gitdir_outside_modules"
  };
  try {
    return await y(b(GIT_COMMON_DIR, "commondir")), {
      unverifiable: "gitdir_outside_modules"
    };
  } catch (error) {
    if (k(error) !== "ENOENT") return {
      unverifiable: "unreadable"
    };
  }
  let m = b(GIT_COMMON_DIR, "objects"),
    unverifiable = await K(m, 0, new Set([m]));
  if (unverifiable !== void 0) return {
    unverifiable: unverifiable
  };
  let h = [b(GIT_COMMON_DIR, "config"), b(GIT_COMMON_DIR, "config.worktree")],
    w = new Set(h);
  for (let g of h) {
    let unverifiable_2 = await Z(g, e, r, 0, w);
    if (unverifiable_2 !== void 0) return {
      unverifiable: unverifiable_2
    };
  }
  let GIT_CEILING_DIRECTORIES = Zxo(j(cwd_4));
  if (GIT_CEILING_DIRECTORIES === null) return {
    unverifiable: "unreadable"
  };
  let envPins = {
      GIT_CEILING_DIRECTORIES: GIT_CEILING_DIRECTORIES,
      GIT_COMMON_DIR: GIT_COMMON_DIR
    },
    T = {
      repository: [`--git-dir=${GIT_COMMON_DIR}`, `--work-tree=${cwd_4}`],
      env: ys(envPins),
      deadlineMs: o
    };
  if (await ke(cwd_4, T)) return {
    unverifiable: "nested_submodules"
  };
  let D = await H2(cwd_4, {
    repository: T.repository,
    envPins: envPins
  });
  if (!D.ok) return {
    unverifiable: "unreadable"
  };
  let G = await lt(Pt(), [...T.repository, ...D.args, ...yn, ...Gte], {
    cwd: cwd_4,
    env: ys(envPins, {
      userLocale: !0
    }),
    timeout: o,
    preserveOutputOnError: !1
  });
  if (G.code !== 0) return {
    unverifiable: "unreadable"
  };
  let L = G.stdout.split(`
`).filter(item => item.length > 0);
  if (L.some(item => !item.startsWith("??"))) return "tracked";
  return L.length > 0 ? "untracked" : "clean";
}
async function me(e, t) {
  let n = await V(e, t);
  switch (n) {
    case "absent":
    case "untracked":
      return n;
    case "repository":
      return {
        unverifiable: "unconfigured_gitlink"
      };
    case "unreadable":
      return {
        unverifiable: "unreadable"
      };
  }
}
function I(e, t) {
  return e.startsWith(t + te);
}
var be = 5,
  he = 10,
  S = 16,
  pe = /^(?:[A-Za-z]:(?![\\/])|[\\/](?![\\/]))/,
  ge = /^(?:\.\.[\\/]+)*/;
function Y(e, t) {
  return e.includes("\uFFFD") || pe.test(e) || bl(M(e) ? e : e.replace(ge, "")) || ca(e, t) || A_(e, t);
}
async function K(e, t, n) {
  if (t > be || n.size > S) return "gitdir_outside_modules";
  try {
    if (!(await y(e)).isDirectory()) return "gitdir_outside_modules";
  } catch {
    return "unreadable";
  }
  let r = b(e, "info");
  try {
    if (!(await y(r)).isDirectory()) return "gitdir_outside_modules";
  } catch (error) {
    return p(k(error)) ? void 0 : "unreadable";
  }
  try {
    return await y(b(r, "http-alternates")), "gitdir_outside_modules";
  } catch (error) {
    if (!p(k(error))) return "unreadable";
  }
  let o = await v(b(r, "alternates"), F);
  switch (o.kind) {
    case "absent":
      return;
    case "directory":
    case "other":
      return "unreadable";
    case "file":
      break;
  }
  let s = 0;
  for (let i of o.text.split(`
`)) {
    if (i === "" || i.startsWith("#")) continue;
    if (s++, s > S || i.startsWith('"') || Y(i, e)) return "gitdir_outside_modules";
    let u;
    try {
      u = await E(P(e, i));
    } catch (error) {
      if (p(k(error))) continue;
      return "unreadable";
    }
    if (n.has(u)) continue;
    n.add(u);
    let c = await K(u, t + 1, n);
    if (c !== void 0) return c;
  }
  return;
}
var ye = "^(include\\.path|includeif\\..*\\.path|core\\.excludesfile|core\\.attributesfile)$";
async function Z(e, t, n, r, o) {
  if (r > he || o.size > S) return "gitdir_outside_modules";
  let s = await v(e, bdn);
  switch (s.kind) {
    case "absent":
      return;
    case "directory":
    case "other":
      return "unreadable";
    case "file":
      break;
  }
  if (!/include|excludesfile|attributesfile/i.test(s.text)) return;
  let i = await z(s.text, ye, t, n);
  if (i === "unreadable") return "unreadable";
  if (i.length > S) return "gitdir_outside_modules";
  let u = j(e);
  for (let {
    key: key,
    value: value
  } of i) {
    let f = key.startsWith("include");
    if (value === "" || value.startsWith("~") || value.startsWith("%(prefix)/") || !f && !M(value) || Y(value, u)) return "gitdir_outside_modules";
    if (!f) continue;
    let d = P(u, value),
      m;
    try {
      m = await E(d);
    } catch (error) {
      if (p(k(error))) continue;
      return "unreadable";
    }
    if (m !== d) return "gitdir_outside_modules";
    if (o.has(m)) continue;
    o.add(m);
    let l = await Z(m, t, n, r + 1, o);
    if (l !== void 0) return l;
  }
  return;
}
async function ke(e, t) {
  let n = await sZt(e, t);
  if (typeof n === "string") return !0;
  return (await Promise.all(n.map(item => V(e, item)))).some(item => item !== "absent");
}
async function V(e, t) {
  let n = await J(e, t);
  if (n.kind !== "directory") return n.kind;
  try {
    return await y(b(n.path, ".git")), "repository";
  } catch (error) {
    if (!p(k(error))) return "unreadable";
  }
  let r = await q(n.path);
  return r === "absent" || r === "untracked" ? r : "unreadable";
}
async function q(e) {
  let t;
  try {
    t = await ee(e);
  } catch (error) {
    return p(k(error)) ? "absent" : {
      unverifiable: "unreadable"
    };
  }
  try {
    return (await t.read()) === null ? "absent" : "untracked";
  } catch {
    return {
      unverifiable: "unreadable"
    };
  } finally {
    try {
      await t.close();
    } catch {}
  }
}
async function J(e, t) {
  let path_2 = e;
  for (let r of t.split("/")) {
    path_2 = b(path_2, r);
    try {
      if (!(await y(path_2)).isDirectory()) return {
        kind: "absent"
      };
    } catch (error) {
      return p(k(error)) ? {
        kind: "absent"
      } : {
        kind: "unreadable"
      };
    }
  }
  return {
    kind: "directory",
    path: path_2
  };
}
function p(e) {
  return e === "ENOENT" || e === "ENOTDIR";
}
async function v(e, t) {
  let n = x() === "windows",
    r;
  if (n) try {
    let s = await y(e, {
      bigint: !0
    });
    if (s.isDirectory()) return {
      kind: "directory"
    };
    if (!s.isFile()) return {
      kind: "other"
    };
    r = {
      dev: s.dev,
      ino: s.ino
    };
  } catch (error) {
    return p(k(error)) ? {
      kind: "absent"
    } : {
      kind: "other"
    };
  }
  let o;
  try {
    o = await Q(e, n ? _.O_RDONLY : _.O_RDONLY | _.O_NOFOLLOW | _.O_NONBLOCK);
  } catch (error) {
    let i = k(error);
    if (p(i)) return {
      kind: "absent"
    };
    return i === "EISDIR" ? {
      kind: "directory"
    } : {
      kind: "other"
    };
  }
  try {
    let s = await o.stat({
      bigint: !0
    });
    if (r !== void 0 && (s.dev !== r.dev || s.ino !== r.ino)) return {
      kind: "other"
    };
    if (s.isDirectory()) return {
      kind: "directory"
    };
    if (!s.isFile() || s.size > BigInt(t)) return {
      kind: "other"
    };
    let i = Number(s.size),
      {
        buffer: buffer,
        bytesRead: bytesRead
      } = await o.read(Buffer.alloc(i + 1), 0, i + 1, 0);
    if (bytesRead > i) return {
      kind: "other"
    };
    return {
      kind: "file",
      text: buffer.toString("utf8", 0, bytesRead)
    };
  } catch {
    return {
      kind: "other"
    };
  } finally {
    await o.close();
  }
}
export { Voe, eLe, y_e, Zys, sZt, bHi, tLe, SHi, wHi, kHi };