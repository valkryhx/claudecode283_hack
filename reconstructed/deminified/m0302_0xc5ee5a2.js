// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { Ka, _i } from "B:/~BUN/root/chunk-54p0h65d.js";
import { mn, aK, No, XUe, oA, Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { eT, Bm, Wft, yt } from "B:/~BUN/root/chunk-339q6g5w.js";
import { La, mV } from "B:/~BUN/root/chunk-nrrn2axm.js";
import { kFt, Ki } from "B:/~BUN/root/chunk-33tn3weg.js";
import { Ms } from "B:/~BUN/root/chunk-6492v1c5.js";
import { Hm } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { constants as k } from "fs";
import { lstat as y, open as ee, opendir as te, realpath as E } from "fs/promises";
import { delimiter as ne, dirname as M, isAbsolute as W, join as g, resolve as I, sep as ie } from "path";
import { finished as re } from "stream/promises";
var se = 15000,
  D = 512,
  oe = 8,
  ae = 1e6,
  z = 4096,
  X = 4096,
  maxBuffer = 8388608,
  ue = 74 + 4 * X,
  P = "160000 ",
  L = "submodule inspection deadline";
async function fV(e, t) {
  let n = t?.deadlineMs ?? se;
  try {
    return await Ht(le(e, n), n, L);
  } catch (error) {
    return {
      kind: "unverifiable",
      reason: error instanceof Error && error.message === L ? "timeout" : "unreadable"
    };
  }
}
function cae(e) {
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
function m9(e) {
  if (e.kind === "changes") {
    let n = e.paths.slice(0, 3).map(F).filter(Boolean),
      i = e.paths.length - n.length;
    return `changes inside ${e.paths.length === 1 ? "submodule" : "submodules"} ${n.join(", ")}${i > 0 ? ` and ${i} more` : ""}`;
  }
  let t = e.path === void 0 ? void 0 : F(e.path) || void 0;
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
      return `it records more than ${D} submodules, too many to inspect`;
    case "unreadable":
      return t === void 0 ? "its submodules' state could not be read" : `the state of submodule ${t} could not be read`;
    case "timeout":
      return "inspecting its submodules took too long";
  }
}
var ce = {
  head: 24,
  tail: 16
};
function F(e) {
  return Hm(e, ce);
}
async function le(e, deadlineMs) {
  let n = {
      repository: [],
      env: La(e),
      deadlineMs: deadlineMs
    },
    reason = await H(e, n);
  if (typeof reason === "string") return {
    kind: "unverifiable",
    reason: reason
  };
  if (reason.length === 0) return {
    kind: "verified",
    withTrackedChanges: [],
    withUntrackedFiles: []
  };
  let reason_2 = await fe(e, n);
  if (typeof reason_2 === "string") return {
    kind: "unverifiable",
    reason: reason_2
  };
  let o = await eT(e);
  if (o === null) return {
    kind: "unverifiable",
    reason: "unreadable"
  };
  let real;
  try {
    real = g(await E(o), "modules");
  } catch {
    return {
      kind: "unverifiable",
      reason: "unreadable"
    };
  }
  let u = {
      lexical: g(o, "modules"),
      real: real
    },
    d = new Set(reason_2),
    a = Ms(oe, f => d.has(f) ? he(e, f, u, n) : me(e, f)),
    l = await Promise.all(reason.map(item => a(item))),
    withTrackedChanges = [],
    withUntrackedFiles = [];
  for (let [f, m] of l.entries()) {
    let path = reason[f];
    switch (m) {
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
          reason: m.unverifiable,
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
async function fe(e, t) {
  let n = await T(g(e, ".gitmodules"), ae);
  switch (n.kind) {
    case "absent":
      return [];
    case "directory":
    case "other":
      return "unreadable";
    case "file":
      break;
  }
  let i = await Y(n.text, "^submodule\\..*\\.path$", e, t);
  return i === "unreadable" ? i : K(i.map(item => item.value));
}
async function Y(input, t, cwd, {
  repository: repository,
  env: env,
  deadlineMs: o
}) {
  let r = await Ve(yt(), [...repository, ...mn, "config", "--file", "-", "--no-includes", "-z", "--get-regexp", t], {
      cwd: cwd,
      env: env,
      input: input,
      timeout: o,
      preserveOutputOnError: !1
    }),
    u = r.exitCode === 1 && r.error === void 0 && !r.timedOut && !r.maxBufferExceeded;
  if (r.code !== 0 && !u) return "unreadable";
  let d = [];
  for (let a of r.stdout.split("\x00")) {
    if (a === "") continue;
    let l = a.indexOf(`
`);
    if (l === -1) return "unreadable";
    d.push({
      key: a.slice(0, l),
      value: a.slice(l + 1)
    });
  }
  return d;
}
async function H(cwd_2, t) {
  let n = [...t.repository, ...mn, "ls-files", "-s", "-z"],
    i = await Ve(yt(), n, {
      cwd: cwd_2,
      env: t.env,
      timeout: t.deadlineMs,
      maxBuffer: maxBuffer,
      preserveOutputOnError: !1,
      stdin: "ignore"
    });
  if (i.maxBufferExceeded) return ge(cwd_2, n, t);
  if (i.code !== 0) return "unreadable";
  let s = new N();
  return s.push(Buffer.from(i.stdout, "utf8")), s.end();
}
async function ge(cwd_3, t, {
  env: env_2,
  deadlineMs: i
}) {
  let s = XUe(yt(), t, env_2),
    o = new N();
  try {
    let r = oA(yt(), s?.args ?? t, {
      cwd: cwd_3,
      env: s?.env ?? env_2,
      timeout: i,
      stdin: "ignore",
      stdout: "pipe",
      stderr: "ignore"
    });
    r.stdout?.on("data", c => {
      if (o.push(Buffer.isBuffer(c) ? c : Buffer.from(c, "utf8")) !== void 0) r.kill();
    });
    let u = r.stdout ? re(r.stdout).catch(() => {}) : Promise.resolve(),
      d = await r,
      a = !d.timedOut && !d.isCanceled && d.signal === void 0 && d.exitCode === 0;
    if (!a) r.stdout?.destroy();
    await u;
    let l = o.end();
    if (typeof l === "string") return l;
    return a ? l : "unreadable";
  } catch {
    return "unreadable";
  }
}
class N {
  paths = new Set();
  record = "none";
  pending = [];
  pendingBytes = 0;
  verdict = void 0;
  push(e) {
    let t = 0;
    while (this.verdict === void 0 && t < e.length) {
      let n = e.indexOf(0, t),
        i = n === -1 ? e.length : n;
      if (this.append(e.subarray(t, i)), n === -1) break;
      this.completeRecord(), t = n + 1;
    }
    return this.verdict;
  }
  end() {
    if (this.verdict !== void 0) return this.verdict;
    if (this.record !== "none") return "unreadable";
    return K([...this.paths]);
  }
  append(e) {
    if (e.length === 0 || this.record === "other") return;
    if (this.pending.push(e), this.pendingBytes += e.length, this.record === "none") this.record = "undecided";
    if (this.record === "undecided" && this.pendingBytes >= P.length) {
      let t = this.pending.length === 1 ? e : Buffer.concat(this.pending);
      if (t.toString("latin1", 0, P.length) === P) this.record = "gitlink", this.pending = [t];else this.record = "other", this.pending = [];
    }
    if (this.record === "gitlink" && this.pendingBytes > ue) this.verdict = "unreadable";
  }
  completeRecord() {
    if (this.record === "gitlink" && this.verdict === void 0) {
      let e = Buffer.concat(this.pending).toString("utf8"),
        t = e.indexOf("\t");
      if (t === -1) this.verdict = "unreadable";else if (this.paths.add(e.slice(t + 1)), this.paths.size > D) this.verdict = "too_many";
    }
    this.record = "none", this.pending = [], this.pendingBytes = 0;
  }
}
function K(e) {
  let t = new Set();
  for (let n of e) {
    if (n.includes("\uFFFD") || !be(n)) return "unreadable";
    if (t.add(n), t.size > D) return "too_many";
  }
  return [...t];
}
function be(e) {
  if (e.length === 0 || e.length > X) return !1;
  return e.split("/").every(item => {
    let n = Ki(item);
    return item.replace(/[. ]+$/, "") !== "" && n !== ".git" && n !== "git~1" && !kFt.test(item) && [...item].every(item => item !== "\\" && item !== ":" && item !== ";" && item > "\x1F" && item !== "\x7F");
  });
}
async function he(e, t, n, i) {
  let {
      deadlineMs: s
    } = i,
    o = await Q(e, t);
  if (o.kind !== "directory") return o.kind === "absent" ? "absent" : {
    unverifiable: "unreadable"
  };
  let cwd_4 = o.path,
    u = await T(g(cwd_4, ".git"), z);
  switch (u.kind) {
    case "absent":
      return V(cwd_4);
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
  let d = u.text.trim();
  if (!d.startsWith("gitdir:")) return {
    unverifiable: "unreadable"
  };
  let a = d.slice(7).trim();
  if (a === "" || _i(a, cwd_4)) return {
    unverifiable: "gitdir_outside_modules"
  };
  let l = I(cwd_4, a);
  if (!x(l, n.lexical) && !x(l, n.real)) return {
    unverifiable: "gitdir_outside_modules"
  };
  if (Bm(a, cwd_4)) return {
    unverifiable: "gitdir_outside_modules"
  };
  let GIT_COMMON_DIR;
  try {
    GIT_COMMON_DIR = await E(l);
  } catch {
    return {
      unverifiable: "unreadable"
    };
  }
  if (!x(GIT_COMMON_DIR, n.real)) return {
    unverifiable: "gitdir_outside_modules"
  };
  try {
    return await y(g(GIT_COMMON_DIR, "commondir")), {
      unverifiable: "gitdir_outside_modules"
    };
  } catch (error) {
    if (v(error) !== "ENOENT") return {
      unverifiable: "unreadable"
    };
  }
  let b = g(GIT_COMMON_DIR, "objects"),
    unverifiable = await j(b, 0, new Set([b]));
  if (unverifiable !== void 0) return {
    unverifiable: unverifiable
  };
  let m = [g(GIT_COMMON_DIR, "config"), g(GIT_COMMON_DIR, "config.worktree")],
    _ = new Set(m);
  for (let p of m) {
    let unverifiable_2 = await q(p, e, i, 0, _);
    if (unverifiable_2 !== void 0) return {
      unverifiable: unverifiable_2
    };
  }
  let GIT_CEILING_DIRECTORIES = M(cwd_4);
  if (GIT_CEILING_DIRECTORIES.includes(ne)) return {
    unverifiable: "unreadable"
  };
  let envPins = {
      GIT_CEILING_DIRECTORIES: GIT_CEILING_DIRECTORIES,
      GIT_COMMON_DIR: GIT_COMMON_DIR
    },
    w = {
      repository: [`--git-dir=${GIT_COMMON_DIR}`, `--work-tree=${cwd_4}`],
      env: No(envPins),
      deadlineMs: s
    };
  if (await ve(cwd_4, w)) return {
    unverifiable: "nested_submodules"
  };
  let C = await mV(cwd_4, {
    repository: w.repository,
    envPins: envPins
  });
  if (!C.ok) return {
    unverifiable: "unreadable"
  };
  let B = await Ve(yt(), [...w.repository, ...C.args, ...mn, "--no-optional-locks", ...aK], {
    cwd: cwd_4,
    env: w.env,
    timeout: s,
    preserveOutputOnError: !1
  });
  if (B.code !== 0) return {
    unverifiable: "unreadable"
  };
  let U = B.stdout.split(`
`).filter(item => item.length > 0);
  if (U.some(item => !item.startsWith("??"))) return "tracked";
  return U.length > 0 ? "untracked" : "clean";
}
async function me(e, t) {
  let n = await J(e, t);
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
function x(e, t) {
  return e.startsWith(t + ie);
}
var pe = 5,
  ye = 10,
  S = 16,
  _e = /^(?:[A-Za-z]:(?![\\/])|[\\/](?![\\/]))/,
  we = /^(?:\.\.[\\/]+)*/;
function Z(e, t) {
  return e.includes("\uFFFD") || _e.test(e) || Ka(W(e) ? e : e.replace(we, "")) || _i(e, t) || Bm(e, t);
}
async function j(e, t, n) {
  if (t > pe || n.size > S) return "gitdir_outside_modules";
  try {
    if (!(await y(e)).isDirectory()) return "gitdir_outside_modules";
  } catch {
    return "unreadable";
  }
  let i = g(e, "info");
  try {
    if (!(await y(i)).isDirectory()) return "gitdir_outside_modules";
  } catch (error) {
    return h(v(error)) ? void 0 : "unreadable";
  }
  try {
    return await y(g(i, "http-alternates")), "gitdir_outside_modules";
  } catch (error) {
    if (!h(v(error))) return "unreadable";
  }
  let s = await T(g(i, "alternates"), z);
  switch (s.kind) {
    case "absent":
      return;
    case "directory":
    case "other":
      return "unreadable";
    case "file":
      break;
  }
  let o = 0;
  for (let r of s.text.split(`
`)) {
    if (r === "" || r.startsWith("#")) continue;
    if (o++, o > S || r.startsWith('"') || Z(r, e)) return "gitdir_outside_modules";
    let u;
    try {
      u = await E(I(e, r));
    } catch (error) {
      if (h(v(error))) continue;
      return "unreadable";
    }
    if (n.has(u)) continue;
    n.add(u);
    let d = await j(u, t + 1, n);
    if (d !== void 0) return d;
  }
  return;
}
var ke = "^(include\\.path|includeif\\..*\\.path|core\\.excludesfile|core\\.attributesfile)$";
async function q(e, t, n, i, s) {
  if (i > ye || s.size > S) return "gitdir_outside_modules";
  let o = await T(e, Wft);
  switch (o.kind) {
    case "absent":
      return;
    case "directory":
    case "other":
      return "unreadable";
    case "file":
      break;
  }
  if (!/include|excludesfile|attributesfile/i.test(o.text)) return;
  let r = await Y(o.text, ke, t, n);
  if (r === "unreadable") return "unreadable";
  if (r.length > S) return "gitdir_outside_modules";
  let u = M(e);
  for (let {
    key: key,
    value: value
  } of r) {
    let l = key.startsWith("include");
    if (value === "" || value.startsWith("~") || value.startsWith("%(prefix)/") || !l && !W(value) || Z(value, u)) return "gitdir_outside_modules";
    if (!l) continue;
    let c = I(u, value),
      b;
    try {
      b = await E(c);
    } catch (error) {
      if (h(v(error))) continue;
      return "unreadable";
    }
    if (b !== c) return "gitdir_outside_modules";
    if (s.has(b)) continue;
    s.add(b);
    let f = await q(b, t, n, i + 1, s);
    if (f !== void 0) return f;
  }
  return;
}
async function ve(e, t) {
  let n = await H(e, t);
  if (typeof n === "string") return !0;
  return (await Promise.all(n.map(item => J(e, item)))).some(item => item !== "absent");
}
async function J(e, t) {
  let n = await Q(e, t);
  if (n.kind !== "directory") return n.kind;
  try {
    return await y(g(n.path, ".git")), "repository";
  } catch (error) {
    if (!h(v(error))) return "unreadable";
  }
  let i = await V(n.path);
  return i === "absent" || i === "untracked" ? i : "unreadable";
}
async function V(e) {
  let t;
  try {
    t = await te(e);
  } catch (error) {
    return h(v(error)) ? "absent" : {
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
async function Q(e, t) {
  let path_2 = e;
  for (let i of t.split("/")) {
    path_2 = g(path_2, i);
    try {
      if (!(await y(path_2)).isDirectory()) return {
        kind: "absent"
      };
    } catch (error) {
      return h(v(error)) ? {
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
function h(e) {
  return e === "ENOENT" || e === "ENOTDIR";
}
async function T(e, t) {
  let n = O() === "windows",
    i;
  if (n) try {
    let o = await y(e, {
      bigint: !0
    });
    if (o.isDirectory()) return {
      kind: "directory"
    };
    if (!o.isFile()) return {
      kind: "other"
    };
    i = {
      dev: o.dev,
      ino: o.ino
    };
  } catch (error) {
    return h(v(error)) ? {
      kind: "absent"
    } : {
      kind: "other"
    };
  }
  let s;
  try {
    s = await ee(e, n ? k.O_RDONLY : k.O_RDONLY | k.O_NOFOLLOW | k.O_NONBLOCK);
  } catch (error) {
    let r = v(error);
    if (h(r)) return {
      kind: "absent"
    };
    return r === "EISDIR" ? {
      kind: "directory"
    } : {
      kind: "other"
    };
  }
  try {
    let o = await s.stat({
      bigint: !0
    });
    if (i !== void 0 && (o.dev !== i.dev || o.ino !== i.ino)) return {
      kind: "other"
    };
    if (o.isDirectory()) return {
      kind: "directory"
    };
    if (!o.isFile() || o.size > BigInt(t)) return {
      kind: "other"
    };
    let r = Number(o.size),
      {
        buffer: buffer,
        bytesRead: bytesRead
      } = await s.read(Buffer.alloc(r + 1), 0, r + 1, 0);
    if (bytesRead > r) return {
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
    await s.close();
  }
}
export { fV, cae, m9 };