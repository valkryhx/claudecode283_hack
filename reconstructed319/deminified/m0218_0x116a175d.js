// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { yn, fS } from "B:/~BUN/root/chunk-88zb3509.js";
import { lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { um, ty, Pt, Ute } from "B:/~BUN/root/chunk-1g25msn4.js";
import { rd } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { H2, Hpt, R0t } from "B:/~BUN/root/chunk-65j4e9bn.js";
import { Voe, sZt, tLe, kHi } from "B:/~BUN/root/chunk-ymawhbhz.js";
import { lstat as y, open as k } from "fs/promises";
import { join as h, resolve as v } from "path";
var fmi = 1e4,
  O = 500;
async function BXr(e, i = fmi) {
  let abortController = new AbortController();
  try {
    return await Promise.race([e, J(i, abortController.signal).then(() => {
      throw Error("worktree probe timed out");
    })]);
  } finally {
    abortController.abort();
  }
}
class _6t extends Error {
  bit;
  constructor(e) {
    super("the index hides a file from git status");
    this.bit = e;
  }
}
async function v7o(e, i, r = fmi) {
  let n = ty(e);
  if (!n) return null;
  try {
    let s = await jXr(n, i, r, {});
    if (s.submodules_unverified) c("bridge_worktree_state", "submodules_unverifiable");else g("bridge_worktree_state");
    return s;
  } catch (error) {
    return m("bridge_worktree_state", "collect_failed"), t(`[bridge:worktree] collectWorktreeState failed: ${d(error)}`), null;
  }
}
function jXr(e, i, r, n) {
  return BXr(S(e, i, Date.now() + r, n), r);
}
async function S(e, branch, r, n) {
  let s = await Ute(e);
  if (!s) um().gitDirByCwd.delete(v(e)), s = await Ute(e);
  if (!s) throw Error("getGitDir returned null \u2014 cannot verify worktree state");
  let [head_sha, a, o, mid_operation, has_submodules, has_lfs] = await Promise.all([P(e, n), A(e, branch, n), I(e, r, n), D(e, s, n), b(h(e, ".gitmodules")), F(e)]);
  return {
    branch: branch,
    head_sha: head_sha,
    unpushed_count: a.count,
    is_dirty: o.dirty,
    upstream_exists: a.upstreamExists,
    mid_operation: mid_operation,
    has_submodules: has_submodules,
    submodules_unverified: o.submodulesUnverified,
    has_lfs: has_lfs,
    reported_at: new Date().toISOString()
  };
}
var maxBuffer = 4194304;
function Rve(e, cwd, r, {
  userLocale: userLocale
} = {}) {
  return lt(e.git ?? Pt(), [...yn, ...r], {
    cwd: cwd,
    env: {
      ...rd(cwd, e.gitEnvPins, {
        userLocale: userLocale
      }),
      ..._(e)
    },
    preserveOutputOnError: !1,
    maxBuffer: maxBuffer,
    timeout: 1e4
  });
}
var x = ["-c", "core.sparseCheckout=true", "-c", "sparse.expectFilesOutsideOfPatterns=false"],
  C = ["-c", "core.trustctime=true", "-c", "core.checkStat=default"];
function w({
  statusLeavesOut = []
}) {
  return statusLeavesOut.length === 0 ? [] : ["--", ".", ...statusLeavesOut.map(item => `:(exclude,literal)${item}`)];
}
function _({
  unsetInGitChildren = []
}) {
  return Object.fromEntries(unsetInGitChildren.map(item => [item, void 0]));
}
async function P(e, i) {
  let {
    code: code,
    stdout: stdout
  } = await Rve(i, e, ["rev-parse", "HEAD"]);
  return code === 0 ? stdout.trim() : null;
}
async function A(e, i, r) {
  if (!i) return {
    count: null,
    upstreamExists: !1
  };
  let n = `refs/remotes/origin/${i}`,
    s = await Rve(r, e, ["rev-parse", "--verify", "--quiet", `${n}^{commit}`]);
  if (s.code !== 0 || !s.stdout.trim()) return {
    count: null,
    upstreamExists: !1
  };
  let {
    code: code_2,
    stdout: stdout_2
  } = await Rve(r, e, ["rev-list", "--count", `${n}..HEAD`]);
  if (code_2 !== 0) return {
    count: null,
    upstreamExists: !1
  };
  let o = parseInt(stdout_2.trim(), 10);
  return {
    count: Number.isFinite(o) ? o : null,
    upstreamExists: !0
  };
}
async function I(e, i, r) {
  let n = await H2(e, {
    envPins: r.gitEnvPins,
    run: (l, f) => lt(r.git ?? Pt(), l, {
      ...f,
      env: {
        ...f.env,
        ..._(r)
      },
      stdin: "ignore"
    })
  });
  if (!n.ok) throw Error("repository config could not be vetted");
  let repository = r.looksBehindIndexBits === !0 ? x : [],
    {
      code: code_3,
      stdout: stdout_3
    } = await Rve(r, e, [...n.args, ...repository, ...(r.looksBehindIndexBits === !0 ? C : []), "--no-optional-locks", "status", "--porcelain", "-unormal", fS, ...w(r)], {
      userLocale: !0
    });
  if (code_3 !== 0) throw Error("git status failed");
  if (stdout_3.trim().length > 0) return {
    dirty: !0,
    submodulesUnverified: !1
  };
  if (r.ignoresByTheTreeAlone === !0) {
    let l = await Rve(r, e, ["ls-files", "--others", "--exclude-per-directory=.gitignore", "--directory", "--no-empty-directory", ...w(r)]);
    if (l.code !== 0) throw Error("git ls-files failed");
    if (l.stdout.trim().length > 0) return {
      dirty: !0,
      submodulesUnverified: !1
    };
  }
  if (r.entersSubmodules === !1) {
    let l = r.looksBehindIndexBits === !0 ? {
        assumeUnchanged: !1,
        skipWorktree: !1
      } : void 0,
      f = await sZt(e, {
        git: r.git,
        repository: repository,
        env: {
          ...rd(e, r.gitEnvPins),
          ..._(r)
        },
        deadlineMs: Math.max(1, i - Date.now())
      }, l);
    if (l?.assumeUnchanged === !0) throw new _6t("assume_unchanged");
    if (l?.skipWorktree === !0 && !(await W(e, r))) throw new _6t("skip_worktree");
    let p = typeof f === "string" || f.length > 0 || (await b(h(e, ".gitmodules")));
    return {
      dirty: p,
      submodulesUnverified: p
    };
  }
  let o = await Voe(e, {
    deadlineMs: Math.max(0, i - Date.now() - O)
  });
  if (o.kind === "verified") return {
    dirty: o.withTrackedChanges.length + o.withUntrackedFiles.length > 0,
    submodulesUnverified: !1
  };
  switch (o.reason) {
    case "unreadable":
      throw Error("submodule state unreadable \u2014 cannot verify worktree is clean");
    case "nested_submodules":
    case "too_many":
    case "nested_repository":
    case "unconfigured_gitlink":
    case "gitdir_outside_modules":
    case "timeout":
      return t(`[bridge:worktree] submodules could not be inspected (${o.reason}); reporting is_dirty=true, submodules_unverified=true`, {
        level: "warn"
      }), {
        dirty: !0,
        submodulesUnverified: !0
      };
  }
}
async function W(e, i) {
  let [r, n] = await Promise.all([Rve(i, e, ["version"]), Rve(i, e, ["config", "--type=bool", "--get", "core.sparseCheckout"])]);
  return r.code === 0 && kHi(tLe(r.stdout)) && n.code === 0 && n.stdout.trim() === "true";
}
async function b(e) {
  try {
    let i = await y(e);
    return i.isFile() || i.isDirectory();
  } catch (error) {
    if (K(error)) return !1;
    throw error;
  }
}
var E = [["rebase-merge", "rebase"], ["rebase-apply", "rebase"], ["MERGE_HEAD", "merge"], ["CHERRY_PICK_HEAD", "cherry-pick"], ["REVERT_HEAD", "revert"], ["BISECT_LOG", "bisect"], ["sequencer", "cherry-pick"]];
async function D(e, i, r) {
  let s = (await Promise.all(E.map(([a]) => b(h(i, a))))).indexOf(!0);
  if (s !== -1) return E[s][1];
  let u = await R0t(i, Hpt, async a => (await Rve(r, e, a)).exitCode);
  if (u === null) throw Error("git could not say whether a cherry-pick or revert is in progress");
  return u.has("CHERRY_PICK_HEAD") ? "cherry-pick" : u.has("REVERT_HEAD") ? "revert" : null;
}
async function F(e) {
  let i = h(e, ".gitattributes");
  try {
    if (!(await y(i)).isFile()) return !1;
  } catch (error) {
    if (K(error)) return !1;
    throw error;
  }
  let r;
  try {
    r = await k(i, "r");
    let {
      buffer: buffer,
      bytesRead: bytesRead
    } = await r.read(Buffer.alloc(65536), 0, 65536, 0);
    return buffer.toString("utf8", 0, bytesRead).includes("filter=lfs");
  } catch (error) {
    if (K(error)) return !1;
    throw error;
  } finally {
    await r?.close();
  }
}
export { fmi, BXr, _6t, v7o, jXr, Rve };