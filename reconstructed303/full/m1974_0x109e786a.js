// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  d,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import {
  kn,
  sS
} from "B:/~BUN/root/chunk-yw21pggd.js";
import {
  ct
} from "B:/~BUN/root/chunk-6ft8yhc8.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import {
  tf,
  rS,
  Ot,
  R5
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import "B:/~BUN/root/chunk-k9zm82w3.js";
import "B:/~BUN/root/chunk-yrjpmz6e.js";
import "B:/~BUN/root/chunk-fsp20me0.js";
import "B:/~BUN/root/chunk-nvgn0qsr.js";
import "B:/~BUN/root/chunk-ek28wssa.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import "B:/~BUN/root/chunk-rvc0n7zm.js";
import "B:/~BUN/root/chunk-wegca9zh.js";
import "B:/~BUN/root/chunk-xrp58hm9.js";
import "B:/~BUN/root/chunk-pjgzz98k.js";
import "B:/~BUN/root/chunk-d9rmnpx3.js";
import "B:/~BUN/root/chunk-vpgpdrbv.js";
import {
  Cd,
  gK,
  L8e,
  zpt
} from "B:/~BUN/root/chunk-2vhqkymb.js";
import {
  yX
} from "B:/~BUN/root/chunk-fvbmxrbm.js";
import "B:/~BUN/root/chunk-0p1hpv0s.js";
import "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import {
  lstat as f,
  open as y
} from "fs/promises";
import {
  join as l,
  resolve as v
} from "path";
var _ = 1e4,
  k = 500;
async function T(e, r = _) {
  let s = new AbortController;
  try {
    return await Promise.race([e, Y(r, s.signal).then(() => {
      throw Error("worktree probe timed out")
    })])
  } finally {
    s.abort()
  }
}
async function Q(e, r, s = _) {
  let i = rS(e);
  if (!i) return null;
  try {
    let n = await T(O(i, r, Date.now() + s), s);
    if (n.submodules_unverified) p("bridge_worktree_state", "submodules_unverifiable");
    else g("bridge_worktree_state");
    return n
  } catch (n) {
    return m("bridge_worktree_state", "collect_failed"), t(`[bridge:worktree] collectWorktreeState failed: ${d(n)}`), null
  }
}
async function O(e, r, s) {
  let i = await R5(e);
  if (!i) tf().gitDirByCwd.delete(v(e)), i = await R5(e);
  if (!i) throw Error("getGitDir returned null \u2014 cannot verify worktree state");
  let [n, o, a, h, w, E] = await Promise.all([D(e), x(e, r), R(e, s), A(e, i), b(l(e, ".gitmodules")), C(e)]);
  return {
    branch: r,
    head_sha: n,
    unpushed_count: o.count,
    is_dirty: a.dirty,
    upstream_exists: o.upstreamExists,
    mid_operation: h,
    has_submodules: w,
    submodules_unverified: a.submodulesUnverified,
    has_lfs: E,
    reported_at: new Date().toISOString()
  }
}
var S = 4194304;

function u(e, r) {
  return ct(Ot(), [...kn, ...r], {
    cwd: e,
    env: Cd(e),
    preserveOutputOnError: !1,
    maxBuffer: S,
    timeout: 1e4
  })
}
async function D(e) {
  let {
    code: r,
    stdout: s
  } = await u(e, ["rev-parse", "HEAD"]);
  return r === 0 ? s.trim() : null
}
async function x(e, r) {
  if (!r) return {
    count: null,
    upstreamExists: !1
  };
  let s = `refs/remotes/origin/${r}`,
    i = await u(e, ["rev-parse", "--verify", "--quiet", `${s}^{commit}`]);
  if (i.code !== 0 || !i.stdout.trim()) return {
    count: null,
    upstreamExists: !1
  };
  let {
    code: n,
    stdout: o
  } = await u(e, ["rev-list", "--count", `${s}..HEAD`]);
  if (n !== 0) return {
    count: null,
    upstreamExists: !1
  };
  let a = parseInt(o.trim(), 10);
  return {
    count: Number.isFinite(a) ? a : null,
    upstreamExists: !0
  }
}
async function R(e, r) {
  let s = await gK(e);
  if (!s.ok) throw Error("repository config could not be vetted");
  let {
    code: i,
    stdout: n
  } = await u(e, [...s.args, "--no-optional-locks", "status", "--porcelain", "-unormal", sS]);
  if (i !== 0) throw Error("git status failed");
  if (n.trim().length > 0) return {
    dirty: !0,
    submodulesUnverified: !1
  };
  let o = await yX(e, {
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
      }
  }
}
async function b(e) {
  try {
    let r = await f(e);
    return r.isFile() || r.isDirectory()
  } catch (r) {
    if (G(r)) return !1;
    throw r
  }
}
var c = [
  ["rebase-merge", "rebase"],
  ["rebase-apply", "rebase"],
  ["MERGE_HEAD", "merge"],
  ["CHERRY_PICK_HEAD", "cherry-pick"],
  ["REVERT_HEAD", "revert"],
  ["BISECT_LOG", "bisect"],
  ["sequencer", "cherry-pick"]
];
async function A(e, r) {
  let i = (await Promise.all(c.map(([o]) => b(l(r, o))))).indexOf(!0);
  if (i !== -1) return c[i][1];
  let n = await zpt(r, L8e, async (o) => (await u(e, o)).exitCode);
  if (n === null) throw Error("git could not say whether a cherry-pick or revert is in progress");
  return n.has("CHERRY_PICK_HEAD") ? "cherry-pick" : n.has("REVERT_HEAD") ? "revert" : null
}
async function C(e) {
  let r = l(e, ".gitattributes");
  try {
    if (!(await f(r)).isFile()) return !1
  } catch (i) {
    if (G(i)) return !1;
    throw i
  }
  let s;
  try {
    s = await y(r, "r");
    let {
      buffer: i,
      bytesRead: n
    } = await s.read(Buffer.alloc(65536), 0, 65536, 0);
    return i.toString("utf8", 0, n).includes("filter=lfs")
  } catch (i) {
    if (G(i)) return !1;
    throw i
  } finally {
    await s?.close()
  }
}
export {
  _ as WORKTREE_COLLECT_TIMEOUT_MS, Q as collectWorktreeState, T as withCollectTimeout
};
