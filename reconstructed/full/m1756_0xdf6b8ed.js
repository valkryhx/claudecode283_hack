// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  l,
  B
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  Q
} from "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import {
  mn,
  vb,
  Ve
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import "B:/~BUN/root/chunk-shgdrs47.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import {
  Kd,
  tS,
  yt,
  S2
} from "B:/~BUN/root/chunk-339q6g5w.js";
import "B:/~BUN/root/chunk-5px6g0cn.js";
import "B:/~BUN/root/chunk-2swveyqa.js";
import "B:/~BUN/root/chunk-bpp59nyd.js";
import "B:/~BUN/root/chunk-zv4xh2j0.js";
import "B:/~BUN/root/chunk-9fcn5kmc.js";
import "B:/~BUN/root/chunk-5w2ecytn.js";
import "B:/~BUN/root/chunk-y72v2pst.js";
import "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  La,
  mV
} from "B:/~BUN/root/chunk-nrrn2axm.js";
import "B:/~BUN/root/chunk-33tn3weg.js";
import {
  fV
} from "B:/~BUN/root/chunk-1dghpe22.js";
import "B:/~BUN/root/chunk-10m2dkry.js";
import "B:/~BUN/root/chunk-w5bkq1td.js";
import "B:/~BUN/root/chunk-81280fc2.js";
import "B:/~BUN/root/chunk-0bx1tycm.js";
import "B:/~BUN/root/chunk-tndjj29v.js";
import {
  lstat as f,
  open as E
} from "fs/promises";
import {
  join as c,
  resolve as v
} from "path";
var b = 1e4,
  k = 500;
async function T(e, r = b) {
  let i = new AbortController;
  try {
    return await Promise.race([e, Q(r, i.signal).then(() => {
      throw Error("worktree probe timed out")
    })])
  } finally {
    i.abort()
  }
}
async function V(e, r, i = b) {
  let s = tS(e);
  if (!s) return null;
  try {
    let n = await T(O(s, r, Date.now() + i), i);
    if (n.submodules_unverified) p("bridge_worktree_state", "submodules_unverifiable");
    else _("bridge_worktree_state");
    return n
  } catch (n) {
    return m("bridge_worktree_state", "collect_failed"), t(`[bridge:worktree] collectWorktreeState failed: ${l(n)}`), null
  }
}
async function O(e, r, i) {
  let s = await S2(e);
  if (!s) Kd().gitDirByCwd.delete(v(e)), s = await S2(e);
  if (!s) throw Error("getGitDir returned null \u2014 cannot verify worktree state");
  let [n, o, a, g, h, y] = await Promise.all([S(e), x(e, r), A(e, i), M(s), w(c(e, ".gitmodules")), P(e)]);
  return {
    branch: r,
    head_sha: n,
    unpushed_count: o.count,
    is_dirty: a.dirty,
    upstream_exists: o.upstreamExists,
    mid_operation: g,
    has_submodules: h,
    submodules_unverified: a.submodulesUnverified,
    has_lfs: y,
    reported_at: new Date().toISOString()
  }
}
var D = 4194304;

function u(e, r) {
  return Ve(yt(), [...mn, ...r], {
    cwd: e,
    env: La(e),
    preserveOutputOnError: !1,
    maxBuffer: D,
    timeout: 1e4
  })
}
async function S(e) {
  let {
    code: r,
    stdout: i
  } = await u(e, ["rev-parse", "HEAD"]);
  return r === 0 ? i.trim() : null
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
    code: n,
    stdout: o
  } = await u(e, ["rev-list", "--count", `${i}..HEAD`]);
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
async function A(e, r) {
  let i = await mV(e);
  if (!i.ok) throw Error("repository config could not be vetted");
  let {
    code: s,
    stdout: n
  } = await u(e, [...i.args, "--no-optional-locks", "status", "--porcelain", "-unormal", vb]);
  if (s !== 0) throw Error("git status failed");
  if (n.trim().length > 0) return {
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
      }
  }
}
async function w(e) {
  try {
    let r = await f(e);
    return r.isFile() || r.isDirectory()
  } catch (r) {
    if (B(r)) return !1;
    throw r
  }
}
var d = [
  ["rebase-merge", "rebase"],
  ["rebase-apply", "rebase"],
  ["MERGE_HEAD", "merge"],
  ["CHERRY_PICK_HEAD", "cherry-pick"],
  ["REVERT_HEAD", "revert"],
  ["BISECT_LOG", "bisect"],
  ["sequencer", "cherry-pick"]
];
async function M(e) {
  let i = (await Promise.all(d.map(([s]) => w(c(e, s))))).indexOf(!0);
  return i === -1 ? null : d[i][1]
}
async function P(e) {
  let r = c(e, ".gitattributes");
  try {
    if (!(await f(r)).isFile()) return !1
  } catch (s) {
    if (B(s)) return !1;
    throw s
  }
  let i;
  try {
    i = await E(r, "r");
    let {
      buffer: s,
      bytesRead: n
    } = await i.read(Buffer.alloc(65536), 0, 65536, 0);
    return s.toString("utf8", 0, n).includes("filter=lfs")
  } catch (s) {
    if (B(s)) return !1;
    throw s
  } finally {
    await i?.close()
  }
}
export {
  V as collectWorktreeState, T as withCollectTimeout
};
