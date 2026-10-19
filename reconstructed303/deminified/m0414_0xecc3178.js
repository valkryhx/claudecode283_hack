// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { ul, Vi } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Gl } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { cL } from "B:/~BUN/root/chunk-j8w5f307.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { kn, uQ, ks } from "B:/~BUN/root/chunk-yw21pggd.js";
import { fBr, Dne, ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { iT, H_, N1t, Ot } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { Cd, gK } from "B:/~BUN/root/chunk-2vhqkymb.js";
import { q8n, vl } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { ha } from "B:/~BUN/root/chunk-rsysgs10.js";
import { constants as v } from "fs";
import { lstat as y, open as Q, opendir as ee, realpath as E } from "fs/promises";
import { dirname as U, isAbsolute as F, join as h, resolve as T, sep as te } from "path";
import { finished as ne } from "stream/promises";
var ie = 15000,
  P = 512,
  re = 8,
  se = 1e6,
  W = 4096,
  z = 4096,
  maxBuffer = 8388608,
  ae = 74 + 4 * z,
  M = "submodule inspection deadline";
async function yX(e, t) {
  let n = t?.deadlineMs ?? ie;
  try {
    return await Nt(ue(e, n), n, M);
  } catch (error) {
    return {
      kind: "unverifiable",
      reason: error instanceof Error && error.message === M ? "timeout" : "unreadable"
    };
  }
}
function Fve(e) {
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
function Jie(e) {
  if (e.kind === "changes") {
    let n = e.paths.slice(0, 3).map(A).filter(Boolean),
      i = e.paths.length - n.length;
    return `changes inside ${e.paths.length === 1 ? "submodule" : "submodules"} ${n.join(", ")}${i > 0 ? ` and ${i} more` : ""}`;
  }
  let t = e.path === void 0 ? void 0 : A(e.path) || void 0;
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
      return `it records more than ${P} submodules, too many to inspect`;
    case "unreadable":
      return t === void 0 ? "its submodules' state could not be read" : `the state of submodule ${t} could not be read`;
    case "timeout":
      return "inspecting its submodules took too long";
  }
}
var de = {
  head: 24,
  tail: 16
};
function A(e) {
  return Gl(e, de);
}
async function ue(e, deadlineMs) {
  let n = {
      repository: [],
      env: Cd(e),
      deadlineMs: deadlineMs
    },
    reason = await GAr(e, n);
  if (typeof reason === "string") return {
    kind: "unverifiable",
    reason: reason
  };
  if (reason.length === 0) return {
    kind: "verified",
    withTrackedChanges: [],
    withUntrackedFiles: []
  };
  let reason_2 = await DEo(e, n);
  if (typeof reason_2 === "string") return {
    kind: "unverifiable",
    reason: reason_2
  };
  let s = await iT(e);
  if (s === null) return {
    kind: "unverifiable",
    reason: "unreadable"
  };
  let real;
  try {
    real = h(await E(s), "modules");
  } catch {
    return {
      kind: "unverifiable",
      reason: "unreadable"
    };
  }
  let d = {
      lexical: h(s, "modules"),
      real: real
    },
    c = new Set(reason_2),
    a = ha(re, g => c.has(g) ? fe(e, g, d, n) : ge(e, g)),
    l = await Promise.all(reason.map(item => a(item))),
    withTrackedChanges = [],
    withUntrackedFiles = [];
  for (let [g, p] of l.entries()) {
    let path = reason[g];
    switch (p) {
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
          reason: p.unverifiable,
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
async function DEo(e, t) {
  let n = await x(h(e, ".gitmodules"), se);
  switch (n.kind) {
    case "absent":
      return [];
    case "directory":
    case "other":
      return "unreadable";
    case "file":
      break;
  }
  let i = await X(n.text, "^submodule\\..*\\.path$", e, t);
  return i === "unreadable" ? i : H(i.map(item => item.value));
}
async function X(input, t, cwd, {
  repository: repository,
  env: env,
  deadlineMs: s
}) {
  let r = await ct(Ot(), [...repository, ...kn, "config", "--file", "-", "--no-includes", "-z", "--get-regexp", t], {
      cwd: cwd,
      env: env,
      input: input,
      timeout: s,
      preserveOutputOnError: !1
    }),
    d = r.exitCode === 1 && r.error === void 0 && !r.timedOut && !r.maxBufferExceeded;
  if (r.code !== 0 && !d) return "unreadable";
  let c = [];
  for (let a of r.stdout.split("\x00")) {
    if (a === "") continue;
    let l = a.indexOf(`
`);
    if (l === -1) return "unreadable";
    c.push({
      key: a.slice(0, l),
      value: a.slice(l + 1)
    });
  }
  return c;
}
async function GAr(e, t) {
  return Y(e, t, "160000");
}
async function hMs(e, t) {
  return Y(e, t, "120000");
}
async function Y(cwd_2, t, n) {
  let i = [...t.repository, ...kn, "ls-files", "-s", "-z"],
    o = await ct(Ot(), i, {
      cwd: cwd_2,
      env: t.env,
      timeout: t.deadlineMs,
      maxBuffer: maxBuffer,
      preserveOutputOnError: !1,
      stdin: "ignore"
    });
  if (o.maxBufferExceeded) return ce(cwd_2, i, t, n);
  if (o.code !== 0) return "unreadable";
  let s = new D(n);
  return s.push(Buffer.from(o.stdout, "utf8")), s.end();
}
async function ce(cwd_3, t, {
  env: env_2,
  deadlineMs: i
}, o) {
  let s = Dne(Ot(), t, env_2),
    r = new D(o);
  try {
    let d = cL(Ot(), s?.args ?? t, {
      cwd: cwd_3,
      env: s?.env ?? env_2,
      timeout: i,
      stdin: "ignore",
      stdout: "pipe",
      stderr: "ignore"
    });
    d.stdout?.on("data", f => {
      if (r.push(Buffer.isBuffer(f) ? f : Buffer.from(f, "utf8")) !== void 0) d.kill();
    });
    let c = d.stdout ? ne(d.stdout).catch(() => {}) : Promise.resolve(),
      a = await d,
      l = !a.timedOut && !a.isCanceled && a.signal === void 0 && a.exitCode === 0;
    if (!l) d.stdout?.destroy();
    await c;
    let u = r.end();
    if (typeof u === "string") return u;
    return l ? u : "unreadable";
  } catch {
    return "unreadable";
  }
}
class D {
  prefix;
  paths = new Set();
  record = "none";
  pending = [];
  pendingBytes = 0;
  verdict = void 0;
  constructor(e) {
    this.prefix = `${e} `;
  }
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
    return H([...this.paths]);
  }
  append(e) {
    if (e.length === 0 || this.record === "other") return;
    if (this.pending.push(e), this.pendingBytes += e.length, this.record === "none") this.record = "undecided";
    if (this.record === "undecided" && this.pendingBytes >= this.prefix.length) {
      let t = this.pending.length === 1 ? e : Buffer.concat(this.pending);
      if (t.toString("latin1", 0, this.prefix.length) === this.prefix) this.record = "listed", this.pending = [t];else this.record = "other", this.pending = [];
    }
    if (this.record === "listed" && this.pendingBytes > ae) this.verdict = "unreadable";
  }
  completeRecord() {
    if (this.record === "listed" && this.verdict === void 0) {
      let e = Buffer.concat(this.pending).toString("utf8"),
        t = e.indexOf("\t");
      if (t === -1) this.verdict = "unreadable";else if (this.paths.add(e.slice(t + 1)), this.paths.size > P) this.verdict = "too_many";
    }
    this.record = "none", this.pending = [], this.pendingBytes = 0;
  }
}
function H(e) {
  let t = new Set();
  for (let n of e) {
    if (n.includes("\uFFFD") || !le(n)) return "unreadable";
    if (t.add(n), t.size > P) return "too_many";
  }
  return [...t];
}
function le(e) {
  if (e.length === 0 || e.length > z) return !1;
  return e.split("/").every(item => {
    let n = vl(item);
    return item.replace(/[. ]+$/, "") !== "" && n !== ".git" && n !== "git~1" && !q8n.test(item) && [...item].every(item => item !== "\\" && item !== ":" && item !== ";" && item > "\x1F" && item !== "\x7F");
  });
}
async function fe(e, t, n, i) {
  let {
      deadlineMs: o
    } = i,
    s = await V(e, t);
  if (s.kind !== "directory") return s.kind === "absent" ? "absent" : {
    unverifiable: "unreadable"
  };
  let cwd_4 = s.path,
    d = await x(h(cwd_4, ".git"), W);
  switch (d.kind) {
    case "absent":
      return J(cwd_4);
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
  let c = d.text.trim();
  if (!c.startsWith("gitdir:")) return {
    unverifiable: "unreadable"
  };
  let a = c.slice(7).trim();
  if (a === "" || Vi(a, cwd_4)) return {
    unverifiable: "gitdir_outside_modules"
  };
  let l = T(cwd_4, a);
  if (!O(l, n.lexical) && !O(l, n.real)) return {
    unverifiable: "gitdir_outside_modules"
  };
  if (H_(a, cwd_4)) return {
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
  if (!O(GIT_COMMON_DIR, n.real)) return {
    unverifiable: "gitdir_outside_modules"
  };
  try {
    return await y(h(GIT_COMMON_DIR, "commondir")), {
      unverifiable: "gitdir_outside_modules"
    };
  } catch (error) {
    if (k(error) !== "ENOENT") return {
      unverifiable: "unreadable"
    };
  }
  let f = h(GIT_COMMON_DIR, "objects"),
    unverifiable = await Z(f, 0, new Set([f]));
  if (unverifiable !== void 0) return {
    unverifiable: unverifiable
  };
  let p = [h(GIT_COMMON_DIR, "config"), h(GIT_COMMON_DIR, "config.worktree")],
    w = new Set(p);
  for (let m of p) {
    let unverifiable_2 = await j(m, e, i, 0, w);
    if (unverifiable_2 !== void 0) return {
      unverifiable: unverifiable_2
    };
  }
  let GIT_CEILING_DIRECTORIES = fBr(U(cwd_4));
  if (GIT_CEILING_DIRECTORIES === null) return {
    unverifiable: "unreadable"
  };
  let envPins = {
      GIT_CEILING_DIRECTORIES: GIT_CEILING_DIRECTORIES,
      GIT_COMMON_DIR: GIT_COMMON_DIR
    },
    _ = {
      repository: [`--git-dir=${GIT_COMMON_DIR}`, `--work-tree=${cwd_4}`],
      env: ks(envPins),
      deadlineMs: o
    };
  if (await we(cwd_4, _)) return {
    unverifiable: "nested_submodules"
  };
  let R = await gK(cwd_4, {
    repository: _.repository,
    envPins: envPins
  });
  if (!R.ok) return {
    unverifiable: "unreadable"
  };
  let C = await ct(Ot(), [..._.repository, ...R.args, ...kn, "--no-optional-locks", ...uQ], {
    cwd: cwd_4,
    env: _.env,
    timeout: o,
    preserveOutputOnError: !1
  });
  if (C.code !== 0) return {
    unverifiable: "unreadable"
  };
  let L = C.stdout.split(`
`).filter(item => item.length > 0);
  if (L.some(item => !item.startsWith("??"))) return "tracked";
  return L.length > 0 ? "untracked" : "clean";
}
async function ge(e, t) {
  let n = await q(e, t);
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
function O(e, t) {
  return e.startsWith(t + te);
}
var he = 5,
  be = 10,
  S = 16,
  pe = /^(?:[A-Za-z]:(?![\\/])|[\\/](?![\\/]))/,
  me = /^(?:\.\.[\\/]+)*/;
function K(e, t) {
  return e.includes("\uFFFD") || pe.test(e) || ul(F(e) ? e : e.replace(me, "")) || Vi(e, t) || H_(e, t);
}
async function Z(e, t, n) {
  if (t > he || n.size > S) return "gitdir_outside_modules";
  try {
    if (!(await y(e)).isDirectory()) return "gitdir_outside_modules";
  } catch {
    return "unreadable";
  }
  let i = h(e, "info");
  try {
    if (!(await y(i)).isDirectory()) return "gitdir_outside_modules";
  } catch (error) {
    return b(k(error)) ? void 0 : "unreadable";
  }
  try {
    return await y(h(i, "http-alternates")), "gitdir_outside_modules";
  } catch (error) {
    if (!b(k(error))) return "unreadable";
  }
  let o = await x(h(i, "alternates"), W);
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
  for (let r of o.text.split(`
`)) {
    if (r === "" || r.startsWith("#")) continue;
    if (s++, s > S || r.startsWith('"') || K(r, e)) return "gitdir_outside_modules";
    let d;
    try {
      d = await E(T(e, r));
    } catch (error) {
      if (b(k(error))) continue;
      return "unreadable";
    }
    if (n.has(d)) continue;
    n.add(d);
    let c = await Z(d, t + 1, n);
    if (c !== void 0) return c;
  }
  return;
}
var ye = "^(include\\.path|includeif\\..*\\.path|core\\.excludesfile|core\\.attributesfile)$";
async function j(e, t, n, i, o) {
  if (i > be || o.size > S) return "gitdir_outside_modules";
  let s = await x(e, N1t);
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
  let r = await X(s.text, ye, t, n);
  if (r === "unreadable") return "unreadable";
  if (r.length > S) return "gitdir_outside_modules";
  let d = U(e);
  for (let {
    key: key,
    value: value
  } of r) {
    let l = key.startsWith("include");
    if (value === "" || value.startsWith("~") || value.startsWith("%(prefix)/") || !l && !F(value) || K(value, d)) return "gitdir_outside_modules";
    if (!l) continue;
    let u = T(d, value),
      f;
    try {
      f = await E(u);
    } catch (error) {
      if (b(k(error))) continue;
      return "unreadable";
    }
    if (f !== u) return "gitdir_outside_modules";
    if (o.has(f)) continue;
    o.add(f);
    let g = await j(f, t, n, i + 1, o);
    if (g !== void 0) return g;
  }
  return;
}
async function we(e, t) {
  let n = await GAr(e, t);
  if (typeof n === "string") return !0;
  return (await Promise.all(n.map(item => q(e, item)))).some(item => item !== "absent");
}
async function q(e, t) {
  let n = await V(e, t);
  if (n.kind !== "directory") return n.kind;
  try {
    return await y(h(n.path, ".git")), "repository";
  } catch (error) {
    if (!b(k(error))) return "unreadable";
  }
  let i = await J(n.path);
  return i === "absent" || i === "untracked" ? i : "unreadable";
}
async function J(e) {
  let t;
  try {
    t = await ee(e);
  } catch (error) {
    return b(k(error)) ? "absent" : {
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
async function V(e, t) {
  let path_2 = e;
  for (let i of t.split("/")) {
    path_2 = h(path_2, i);
    try {
      if (!(await y(path_2)).isDirectory()) return {
        kind: "absent"
      };
    } catch (error) {
      return b(k(error)) ? {
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
function b(e) {
  return e === "ENOENT" || e === "ENOTDIR";
}
async function x(e, t) {
  let n = I() === "windows",
    i;
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
    i = {
      dev: s.dev,
      ino: s.ino
    };
  } catch (error) {
    return b(k(error)) ? {
      kind: "absent"
    } : {
      kind: "other"
    };
  }
  let o;
  try {
    o = await Q(e, n ? v.O_RDONLY : v.O_RDONLY | v.O_NOFOLLOW | v.O_NONBLOCK);
  } catch (error) {
    let r = k(error);
    if (b(r)) return {
      kind: "absent"
    };
    return r === "EISDIR" ? {
      kind: "directory"
    } : {
      kind: "other"
    };
  }
  try {
    let s = await o.stat({
      bigint: !0
    });
    if (i !== void 0 && (s.dev !== i.dev || s.ino !== i.ino)) return {
      kind: "other"
    };
    if (s.isDirectory()) return {
      kind: "directory"
    };
    if (!s.isFile() || s.size > BigInt(t)) return {
      kind: "other"
    };
    let r = Number(s.size),
      {
        buffer: buffer,
        bytesRead: bytesRead
      } = await o.read(Buffer.alloc(r + 1), 0, r + 1, 0);
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
    await o.close();
  }
}
export { yX, Fve, Jie, DEo, GAr, hMs };