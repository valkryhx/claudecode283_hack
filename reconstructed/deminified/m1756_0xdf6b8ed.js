// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import { mn, vb, Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import "B:/~BUN/root/chunk-shgdrs47.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import { Kd, tS, yt, S2 } from "B:/~BUN/root/chunk-339q6g5w.js";
import "B:/~BUN/root/chunk-5px6g0cn.js";
import "B:/~BUN/root/chunk-2swveyqa.js";
import "B:/~BUN/root/chunk-bpp59nyd.js";
import "B:/~BUN/root/chunk-zv4xh2j0.js";
import "B:/~BUN/root/chunk-9fcn5kmc.js";
import "B:/~BUN/root/chunk-5w2ecytn.js";
import "B:/~BUN/root/chunk-y72v2pst.js";
import "B:/~BUN/root/chunk-rwwxddqq.js";
import { La, mV } from "B:/~BUN/root/chunk-nrrn2axm.js";
import "B:/~BUN/root/chunk-33tn3weg.js";
import { fV } from "B:/~BUN/root/chunk-1dghpe22.js";
import "B:/~BUN/root/chunk-10m2dkry.js";
import "B:/~BUN/root/chunk-w5bkq1td.js";
import "B:/~BUN/root/chunk-81280fc2.js";
import "B:/~BUN/root/chunk-0bx1tycm.js";
import "B:/~BUN/root/chunk-tndjj29v.js";
import { lstat as f, open as E } from "fs/promises";
import { join as c, resolve as v } from "path";
var b = 1e4,
  k = 500;
async function T(e, r = b) {
  let abortController = new AbortController();
  try {
    return await Promise.race([e, Q(r, abortController.signal).then(() => {
      throw Error("worktree probe timed out");
    })]);
  } finally {
    abortController.abort();
  }
}
async function V(e, r, i = b) {
  let s = tS(e);
  if (!s) return null;
  try {
    let n = await T(O(s, r, Date.now() + i), i);
    if (n.submodules_unverified) p("bridge_worktree_state", "submodules_unverifiable");else _("bridge_worktree_state");
    return n;
  } catch (error) {
    return m("bridge_worktree_state", "collect_failed"), t(`[bridge:worktree] collectWorktreeState failed: ${l(error)}`), null;
  }
}
async function O(e, branch, i) {
  let s = await S2(e);
  if (!s) Kd().gitDirByCwd.delete(v(e)), s = await S2(e);
  if (!s) throw Error("getGitDir returned null \u2014 cannot verify worktree state");
  let [head_sha, o, a, mid_operation, has_submodules, has_lfs] = await Promise.all([S(e), x(e, branch), A(e, i), M(s), w(c(e, ".gitmodules")), P(e)]);
  return {
    branch: branch,
    head_sha: head_sha,
    unpushed_count: o.count,
    is_dirty: a.dirty,
    upstream_exists: o.upstreamExists,
    mid_operation: mid_operation,
    has_submodules: has_submodules,
    submodules_unverified: a.submodulesUnverified,
    has_lfs: has_lfs,
    reported_at: new Date().toISOString()
  };
}
var maxBuffer = 4194304;
function u(cwd, r) {
  return Ve(yt(), [...mn, ...r], {
    cwd: cwd,
    env: La(cwd),
    preserveOutputOnError: !1,
    maxBuffer: maxBuffer,
    timeout: 1e4
  });
}
async function S(e) {
  let {
    code: code,
    stdout: stdout
  } = await u(e, ["rev-parse", "HEAD"]);
  return code === 0 ? stdout.trim() : null;
}
async function x(e, r) {
  if (!r) return {
    count: null,
    upstreamExists: !1
  };
  let i = `refs/remotes/origin/${r}`,
    s = await u(e, ["rev-parse", "--verify", "--quiet", `${i}^{commit}`]);
  if (s.code !== 0 || !s.stdout.trim()) return {
    count: null,
    upstreamExists: !1
  };
  let {
    code: code_2,
    stdout: stdout_2
  } = await u(e, ["rev-list", "--count", `${i}..HEAD`]);
  if (code_2 !== 0) return {
    count: null,
    upstreamExists: !1
  };
  let a = parseInt(stdout_2.trim(), 10);
  return {
    count: Number.isFinite(a) ? a : null,
    upstreamExists: !0
  };
}
async function A(e, r) {
  let i = await mV(e);
  if (!i.ok) throw Error("repository config could not be vetted");
  let {
    code: code_3,
    stdout: stdout_3
  } = await u(e, [...i.args, "--no-optional-locks", "status", "--porcelain", "-unormal", vb]);
  if (code_3 !== 0) throw Error("git status failed");
  if (stdout_3.trim().length > 0) return {
    dirty: !0,
    submodulesUnverified: !1
  };
  let o = await fV(e, {
    deadlineMs: Math.max(0, r - Date.now() - k)
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
async function w(e) {
  try {
    let r = await f(e);
    return r.isFile() || r.isDirectory();
  } catch (error) {
    if (B(error)) return !1;
    throw error;
  }
}
var d = [["rebase-merge", "rebase"], ["rebase-apply", "rebase"], ["MERGE_HEAD", "merge"], ["CHERRY_PICK_HEAD", "cherry-pick"], ["REVERT_HEAD", "revert"], ["BISECT_LOG", "bisect"], ["sequencer", "cherry-pick"]];
async function M(e) {
  let i = (await Promise.all(d.map(([s]) => w(c(e, s))))).indexOf(!0);
  return i === -1 ? null : d[i][1];
}
async function P(e) {
  let r = c(e, ".gitattributes");
  try {
    if (!(await f(r)).isFile()) return !1;
  } catch (error) {
    if (B(error)) return !1;
    throw error;
  }
  let i;
  try {
    i = await E(r, "r");
    let {
      buffer: buffer,
      bytesRead: bytesRead
    } = await i.read(Buffer.alloc(65536), 0, 65536, 0);
    return buffer.toString("utf8", 0, bytesRead).includes("filter=lfs");
  } catch (error) {
    if (B(error)) return !1;
    throw error;
  } finally {
    await i?.close();
  }
}
export { V as collectWorktreeState, T as withCollectTimeout };