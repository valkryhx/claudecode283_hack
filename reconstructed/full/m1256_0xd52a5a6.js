// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  c,
  ue
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  oe
} from "B:/~BUN/root/chunk-shgdrs47.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  ZR,
  vBt,
  Uft,
  Ww
} from "B:/~BUN/root/chunk-fct6vke8.js";
import {
  Fn,
  Xl
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  Ro
} from "B:/~BUN/root/chunk-y72v2pst.js";
import {
  Uu
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  k3,
  E3
} from "B:/~BUN/root/chunk-90zbw58x.js";
import {
  M3,
  DEe,
  Con,
  Ron,
  tNe,
  Aon,
  Don,
  p4e,
  dz,
  Mt,
  Qit,
  Won,
  IV,
  qL,
  wAr,
  Mae,
  b4e,
  OV,
  aNe,
  S4e
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  oZe
} from "B:/~BUN/root/chunk-a716ngan.js";
import {
  hir,
  yir,
  aCn,
  lwt,
  fE,
  lCn,
  _ir,
  cOe
} from "B:/~BUN/root/chunk-jr7rmyt0.js";
import {
  $H,
  car
} from "B:/~BUN/root/chunk-r6beatp9.js";
import {
  lze
} from "B:/~BUN/root/chunk-h7prpcgw.js";
import {
  tqe,
  DM,
  KHn
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  gir
} from "B:/~BUN/root/chunk-2wtynsez.js";
import {
  gOe,
  i3t,
  q7e,
  Mwt
} from "B:/~BUN/root/chunk-fj96ftrb.js";
import {
  jwt,
  _Oe,
  TU
} from "B:/~BUN/root/chunk-gnzce1c4.js";
import {
  Ms
} from "B:/~BUN/root/chunk-6492v1c5.js";
import {
  Ao
} from "B:/~BUN/root/chunk-9sajt7dp.js";
import {
  Ut
} from "B:/~BUN/root/chunk-qbrwdgwc.js";
import {
  lstat as Y
} from "fs/promises";
import {
  join as j
} from "path";
var D = 15000,
  N = 1048576,
  q = 5000,
  K = 500,
  X = 1.2,
  V = 8;

function G({
  host: e,
  bundlingAvailable: o,
  pullSupported: n,
  repositoryTooLarge: s,
  verdict: r,
  overlayAvailable: l,
  servedBySync: m
}) {
  let f = m ? {
    kind: "created_empty"
  } : {
    kind: "bundle"
  };
  if (e === null) return !o ? {
    kind: "deferred",
    why: "bundling_unavailable"
  } : s ? {
    kind: "repository_too_large"
  } : f;
  if (r === null) return {
    kind: "deferred",
    why: "no_remote"
  };
  if (r.reason === "probe_failed") return {
    kind: "probe_failed"
  };
  if (r.reason === "linked_worktree" || r.reason === "unserved_layout") return {
    kind: "deferred",
    why: "layout_unserved"
  };
  if (r.reason === "in_progress_op") return {
    kind: "deferred",
    why: "operation_in_progress"
  };
  if (e === "github" && (r.reason === "clean" || r.reason === "head_behind_remote")) return {
    kind: "remote_ref"
  };
  if (r.reason === "clean") return {
    kind: "deferred",
    why: "unpinned_other_host"
  };
  if (!n) return {
    kind: "deferred",
    why: "pull_unsupported"
  };
  if (l && m && e === "github" && (r.reason === "tracked_changes" || r.reason === "head_not_at_remote") && (r.remote.placement === "at" || r.remote.placement === "ahead")) return {
    kind: "overlay"
  };
  if (!o) return {
    kind: "deferred",
    why: "bundling_unavailable"
  };
  if (s) return {
    kind: "repository_too_large"
  };
  return f
}

function I(e) {
  let o = Math.ceil((e.historyBytes ?? 0) * (e.historyRepacked ? X : 1));
  return Math.max(o, e.packBytes) + e.changedTrackedBytes
}

function J(e) {
  return !e.packOverLimit && I(e) + N <= e.capBytes ? "fits" : "too_large"
}

function d_n(e) {
  return e.offer ? "offered" : e.reason === "deferred" ? "deferred" : e.reason === "probe_failed" ? "failed" : "not_offered"
}
async function Q({
  explicitRef: e,
  poolId: o,
  monorepo: n = !1,
  signal: s,
  onMeasuring: r = () => {},
  deadlineMs: l = D,
  folderMaxFiles: m,
  folderMaxBytes: f,
  firstUploadMaxBytes: h,
  historyWalkBudgetMs: b
}) {
  let S = Date.now(),
    R;
  try {
    let v = n || k3(o ?? E3().id);
    R = Ao(s, {
      timeoutMs: l,
      refTimer: !0
    });
    let y = R,
      O = await cOe(Z({
        explicitRef: e,
        selfHostedPool: v,
        onMeasuring: r,
        folderMaxFiles: m,
        folderMaxBytes: f,
        firstUploadMaxBytes: h,
        historyWalkBudgetMs: b,
        deadlineAtMs: S + l
      }, y.signal).catch((F) => (d(F), {
        offer: B("threw"),
        facts: null,
        forecast: null
      })), y.signal),
      _ = O === null || Mt(y.signal) ? B(lwt(s, y.signal, "deadline")) : O.offer;
    return {
      key: d_n(_),
      reason: _.reason,
      offer: _,
      lines: !_.offer && _.line !== null ? [_.line] : [],
      facts: O?.facts ?? null,
      forecast: O?.forecast ?? null,
      elapsedMs: Date.now() - S
    }
  } catch (v) {
    d(v);
    let y = B("threw");
    return {
      key: "failed",
      reason: y.reason,
      offer: y,
      lines: [],
      facts: null,
      forecast: null,
      elapsedMs: Date.now() - S
    }
  } finally {
    R?.cleanup()
  }
}
async function lXn(e) {
  let o = await Q(e);
  return he(o.offer, o, o.elapsedMs), o.offer
}
async function Z({
  explicitRef: e,
  selfHostedPool: o,
  onMeasuring: n,
  folderMaxFiles: s,
  folderMaxBytes: r,
  firstUploadMaxBytes: l = $H,
  historyWalkBudgetMs: m = q,
  deadlineAtMs: f
}, h) {
  let b = Fn(oe());
  if (b === null) return me({
    explicitRef: e,
    selfHostedPool: o,
    onMeasuring: n,
    maxFiles: s,
    maxBytes: r
  }, h);
  if (aNe()) return W;
  let S = o ? "self_hosted_pool" : e !== void 0 ? "named_revision" : vBt().blocked() ? "untrusted_workspace" : null;
  if (S !== null) return {
    offer: x(S, e),
    facts: null,
    forecast: {
      kind: "deferred",
      why: S
    }
  };
  let R = a.CCR_FORCE_BUNDLE === !0,
    v = R ? null : await Ww(),
    y = v === null || ZR(v) ? null : Ro(v.host) ? "github" : "other",
    [O, _] = await Promise.all([U(), y === null ? Promise.resolve(null) : te(b, h)]);
  if (Mt(h)) return {
    offer: B("aborted"),
    facts: null,
    forecast: null
  };
  if (_ === null) {
    let w = await cOe(dz(b), h);
    if (w === null) return {
      offer: B("aborted"),
      facts: null,
      forecast: null
    };
    if (aCn(w) !== null) return {
      offer: x("layout_unserved", e),
      facts: null,
      forecast: {
        kind: "deferred",
        why: "layout_unserved"
      }
    }
  }
  let F = y === null || _?.diverged === !0 ? await p4e() : null,
    A = OV(),
    M = {
      host: y,
      bundlingAvailable: O,
      pullSupported: A,
      repositoryTooLarge: F?.tooLarge === !0,
      verdict: _,
      overlayAvailable: !0,
      servedBySync: M3() && A && !R
    },
    P = !1,
    L = () => {
      if (!P) P = !0, n()
    },
    E = G(M);
  if (Mt(h)) return {
    offer: B("aborted"),
    facts: null,
    forecast: null
  };
  if (E.kind === "remote_ref" || E.kind === "overlay" || E.kind === "bundle" || E.kind === "created_empty") {
    let w = await oZe(b);
    if (w !== null) return {
      offer: z(w),
      facts: M,
      forecast: null
    }
  }
  let g = await ee(E, M, {
      gitRoot: b,
      signal: h,
      timeoutMs: D
    }, L),
    u = (w) => ({
      offer: w,
      facts: M,
      forecast: g
    });
  switch (g.kind) {
    case "probe_failed":
      return u(B(_?.reason === "probe_failed" ? _.failure : "git"));
    case "repository_too_large":
      return u(ce(F?.sizeBytes ?? null, y));
    case "deferred":
      return u(x(g.why, void 0));
    case "remote_ref":
    case "overlay":
    case "bundle":
    case "created_empty": {
      L();
      let w = {
          gitRoot: b,
          signal: h,
          timeoutMs: D,
          deadlineAtMs: f
        },
        T = g.kind === "bundle" || g.kind === "created_empty" ? g.kind : null,
        [k, C] = await Promise.all([T === null ? Promise.resolve({
          kind: "not_needed"
        }) : ne(w, {
          start: T,
          capBytes: T === "created_empty" ? l : Don(),
          historyWalkBudgetMs: m
        }), le(w)]);
      if (k.kind === "failed" || C === null) return u(B(Mt(h) ? "aborted" : "git"));
      if (k.kind === "blocked") return u(x("index_state", void 0));
      if (k.kind === "unborn") return u(x("unborn", void 0));
      if (C.seedBytes > _Oe) return u({
        offer: !1,
        reason: "untracked_too_large",
        untracked: C,
        seed: k.kind === "measured" ? k.seed : null,
        line: `File sync is not offered for this checkout: ${de(C.seedBytes,k.kind==="measured"?k.seed.start:null)}.`
      });
      if (k.kind === "measured" && J(k.seed) === "too_large") return u({
        offer: !1,
        reason: "too_large",
        seed: k.seed,
        untracked: C,
        line: fe(k.seed, y, _?.reason ?? null)
      });
      return u(k.kind === "measured" ? {
        offer: !0,
        reason: "fits",
        seed: k.seed,
        untracked: C
      } : {
        offer: !0,
        reason: "not_size_bound",
        untracked: C
      })
    }
  }
}

function U() {
  return a.CCR_ENABLE_BUNDLE === !0 ? Promise.resolve(!0) : Uu("tengu_ccr_bundle_seed_enabled")
}
async function ee(e, o, n, s) {
  let r = o.verdict;
  if (e.kind !== "overlay" || r === null || r.reason !== "tracked_changes" && r.reason !== "head_not_at_remote" || r.remote.placement !== "ahead") return e;
  s();
  let l = await lCn(n, ["pack-objects", "--revs", "--stdout", "--thin", "--delta-base-offset", "-q"], {
    input: `HEAD
^${r.remote.commit}
`,
    limitBytes: gir - N
  });
  return l.overLimit || l.exitCode !== 0 ? G({
    ...o,
    overlayAvailable: !1
  }) : e
}
async function re(e) {
  return (await fE(e, ["rev-parse", "-q", "--verify", "HEAD^{commit}"])).exitCode === 1
}
async function te(e, o) {
  let n = await Qit(e, o),
    [s, r] = await Promise.all([Uft(e, Won(n)), Xl()]);
  if (s === null) return null;
  let l = await KHn({
    gitRoot: e,
    remoteName: s.name,
    branch: r,
    sessionRoot: e,
    sessionReach: n,
    signal: o
  });
  return (await yir({
    gitRoot: e,
    remoteName: s.name,
    revision: r,
    ...l.kind === "pushed_ancestor" && {
      startCommit: l.commit
    },
    deadlineMs: hir,
    signal: o
  })).verdict
}
async function ne(e, {
  start: o,
  capBytes: n,
  historyWalkBudgetMs: s
}) {
  let [r, l, m] = await Promise.all([lCn(e, ["pack-objects", "--revs", "--stdout", "--thin", "--delta-base-offset", "-q"], {
    input: `HEAD^{tree}
`,
    limitBytes: n
  }), ie(e), o === "created_empty" ? se(e) : Promise.resolve(!1)]);
  if (Mt(e.signal)) return {
    kind: "failed"
  };
  if (l === null || !r.overLimit && r.exitCode !== 0) {
    if (!Mt(e.signal) && await re(e)) return {
      kind: "unborn"
    };
    return t(`dir-sync: seed measurement failed (pack-objects ${r.overLimit?"stopped at the limit":r.exitCode??"killed"}, changed tracked files ${l===null?"unreadable":"read"})`, {
      level: "warn"
    }), {
      kind: "failed"
    }
  }
  if (l.stashBlocked) return {
    kind: "blocked"
  };
  let f = o === "created_empty" && !r.overLimit ? await ae(e, s) : {
    walk: "not_walked",
    bytes: null
  };
  if (Mt(e.signal)) return {
    kind: "failed"
  };
  return {
    kind: "measured",
    seed: {
      start: o,
      packBytes: r.bytes,
      packOverLimit: r.overLimit,
      historyBytes: f.bytes,
      historyWalk: f.walk,
      historyRepacked: m,
      changedTrackedBytes: l.bytes,
      changedTrackedCount: l.count,
      capBytes: n
    }
  }
}
async function ae(e, o) {
  let n = Math.min(o, (e.deadlineAtMs ?? 1 / 0) - Date.now() - K);
  if (n < 1) return {
    walk: "out_of_time",
    bytes: null
  };
  let s = Ao(e.signal, {
    timeoutMs: n,
    refTimer: !0
  });
  try {
    let r = await fE({
      ...e,
      signal: s.signal
    }, ["rev-list", "--disk-usage", "--objects", "HEAD", "--"]);
    if (r.exitCode === 0 && /^\d+\s*$/.test(r.stdout)) return {
      walk: "sized",
      bytes: Number(r.stdout.trim())
    };
    return {
      walk: s.signal.aborted && !Mt(e.signal) ? "out_of_time" : "unsizeable",
      bytes: null
    }
  } finally {
    s.cleanup()
  }
}
async function se(e) {
  let o = await fE(e, ["version"]);
  return car(o.exitCode === 0 ? o.stdout : null).length > 0
}
async function ie(e) {
  let o = await _ir(e);
  if (o === null) return null;
  let n = await qL(o.paths.map((s) => H(e, s)), e.signal);
  return n === null ? null : {
    bytes: n.reduce((s, r) => s + r, 0),
    count: o.paths.length,
    stashBlocked: o.stashBlocked
  }
}
async function le(e) {
  let o = await IV(e.gitRoot),
    n = o === null ? null : await wAr({
      gitRoot: e.gitRoot,
      realRoot: o,
      signal: e.signal,
      uploadFilter: DM(e.gitRoot, {
        realRoot: o
      }),
      filterAttributed: lze(e.gitRoot)
    });
  if (n === null || n.kind === "failed") {
    if (!Mt(e.signal)) t("dir-sync: untracked survey failed before consent", {
      level: "warn"
    });
    return null
  }
  let s = n.kind === "too_many_untracked" ? await qL(n.eligiblePaths.map((r) => H(e, r)), e.signal) : [...n.chosen, ...n.overBudget].map(({
    size: r
  }) => r);
  return s === null ? null : {
    eligibleCount: n.eligibleUntrackedCount,
    seedBytes: s.reduce((r, l) => r + l, 0)
  }
}
var H = Ms(V, async (e, o) => {
  if (e.signal.throwIfAborted(), !TU(o)) return 0;
  try {
    let n = await Y(j(e.gitRoot, o));
    return n.isFile() ? n.size : 0
  } catch {
    return 0
  }
});

function de(e, o) {
  let n = o === "created_empty" ? "add a .gitignore entry for the ones the session can do without" : "add a .gitignore entry or commit the ones you need";
  return `${Ut(e)} of untracked files exceed the ${Ut(_Oe)} one sync upload carries; ${n}`
}

function fe(e, o, n) {
  let s = I(e),
    r = Ut(e.capBytes),
    l = e.packOverLimit ? `more than the ${r} limit` : s > e.capBytes ? `about ${Ut(s)}, over the ${r} limit` : `about ${Ut(s)}, within ${Ut(N)} of the ${r} limit`,
    m = e.start === "created_empty" ? `one upload of this checkout's history and files, which come to ${l}` : `an upload of your working tree, and this one would be ${l}`;
  if (o === null) return e.start === "created_empty" ? `File sync is not offered for this checkout: with no GitHub remote to clone, a synced session would have to start from ${m}.` : `File sync is not offered for this checkout: with no GitHub remote to clone, a cloud session starts from ${m}.`;
  let {
    why: f,
    remedy: h
  } = n === "detached_head" ? {
    why: "it is not on a branch",
    remedy: "check out a branch, then start again to be asked"
  } : n === "remote_ref_unknown" ? {
    why: "its branch is not on the remote as last fetched here",
    remedy: "push the branch, then start again to be asked"
  } : {
    why: "its tracked state differs from the remote's as last fetched here",
    remedy: "commit and push your changes, then start again to be asked"
  }, b = "This launch will not carry your local changes";
  return `File sync is not offered for this checkout: ${f}, so a synced session would have to start from ${m}. ${o==="github"?`${b}; ${h}.`:`${b}.`}`
}

function ce(e, o) {
  let n = e === null ? "" : ` (${Ut(e)} of packed git objects)`;
  return {
    offer: !1,
    reason: "repository_too_large",
    sizePackBytes: e,
    line: o === null ? `File sync is not offered here: this repository is too large to upload to a cloud session${n}.` : `File sync is not offered here: this repository is too large${n} to start a cloud session from your working tree; the session starts from the remote without your local changes and does not sync.`
  }
}
async function me({
  explicitRef: e,
  selfHostedPool: o,
  onMeasuring: n,
  maxFiles: s = jwt,
  maxBytes: r = gOe
}, l) {
  if (!DEe() || !tNe(oe())) return {
    offer: {
      offer: !1,
      reason: "folder_not_opted_in",
      line: null
    },
    facts: null,
    forecast: null
  };
  if (aNe()) return W;
  let m = o ? "self_hosted_pool" : e !== void 0 ? "named_revision" : !OV() ? "pull_unsupported" : !await U() ? "folder_bundling_unavailable" : null;
  if (m !== null) return {
    offer: x(m, e),
    facts: null,
    forecast: {
      kind: "deferred",
      why: m
    }
  };
  let f = oe();
  if (await b4e(f)) return {
    offer: {
      offer: !1,
      reason: "folder_is_repository",
      line: "File sync is not offered for this folder: it is (inside) a bare git repository, not a project folder."
    },
    facts: null,
    forecast: null
  };
  if (await Aon(f)) return {
    offer: {
      offer: !1,
      reason: "folder_is_repository",
      line: "File sync is not offered for this folder: it has a .git entry that could not be read as a git checkout (a link, or something git did not write)."
    },
    facts: null,
    forecast: null
  };
  let h = await oZe(f);
  if (h !== null) return {
    offer: z(h),
    facts: null,
    forecast: null
  };
  n();
  let {
    ignoreMatcherFrom: b,
    listFolderCandidates: S,
    NESTED_IGNORES_TOO_LARGE_CLAUSE: R,
    NOTHING_WITHHELD: v,
    platformIgnoresCase: y,
    readRootIgnoreLines: O,
    rootIgnoreRefusalClause: _
  } = await import("B:/~BUN/root/chunk-61a8n0wx.js"), F = await O(f), A = F.kind === "unusable" ? {
    ok: !1,
    reason: "ignore_unreadable"
  } : await S({
    root: f,
    ignores: b(F.lines, {
      ignoreCase: y(f)
    }),
    withheldOf: v,
    signal: l,
    nestedIgnoreFiles: !0,
    maxFiles: s
  });
  if (Mt(l)) return {
    offer: B("aborted"),
    facts: null,
    forecast: null
  };
  if (!A.ok) return {
    offer: A.reason === "too_many_files" ? {
      offer: !1,
      reason: "folder_too_many_files",
      line: `File sync is not offered for this folder: it holds more than ${s.toLocaleString()} files, more than one sync can carry.`
    } : {
      offer: !1,
      reason: "folder_unreadable",
      line: F.kind === "unusable" ? `File sync is not offered for this launch: the .gitignore in this folder ${_(F)}.` : A.reason === "nested_ignores_too_large" ? `File sync is not offered for this launch: ${R}.` : "File sync is not offered for this launch: this folder could not be read (details in the debug log)."
    },
    facts: null,
    forecast: null
  };
  let M = DM(f, {
    realRoot: await IV(f) ?? f
  });
  if (M.hostConfigGround !== void 0) return {
    offer: {
      offer: !1,
      reason: "folder_unreadable",
      line: `File sync is not offered for this folder: ${tqe(M.hostConfigGround)}.`
    },
    facts: null,
    forecast: null
  };
  let P = A.listing.files,
    L = P.filter((g) => {
      let u = M(g.path, !1);
      return u === null || u === "rules_unreadable"
    }),
    E = L.reduce((g, u) => g + u.size, 0);
  if (E > i3t(r, L.length)) {
    let g = L.toSorted((u, w) => w.size - u.size).slice(0, q7e).map((u) => ({
      path: u.path,
      bytes: u.size
    }));
    return {
      offer: {
        offer: !1,
        reason: "folder_too_large",
        files: P.length,
        totalBytes: E,
        line: `File sync is not offered for this folder: ${Mwt({totalBytes:E,capBytes:r,largest:g})}. This cloud session starts without this folder's files; to sync it next time, remove or ignore what the session does not need (a .gitignore in this folder is honoured).`
      },
      facts: null,
      forecast: null
    }
  }
  return {
    offer: {
      offer: !0,
      reason: "folder",
      files: P.length
    },
    facts: null,
    forecast: null
  }
}

function z(e) {
  return {
    offer: !1,
    reason: "deferred",
    deferral: "anchor_unavailable",
    line: Mae(e),
    anchorUnavailable: e
  }
}
var W = {
  offer: {
    offer: !1,
    reason: "compliance_restricted",
    line: S4e
  },
  facts: null,
  forecast: null
};

function x(e, o) {
  let n = {
    named_revision: `with ${o?.flag??"a named revision"} the session starts from that revision as the remote has it, not from this checkout`,
    operation_in_progress: "a merge, cherry-pick or revert is in progress in this checkout",
    self_hosted_pool: "a session on a self-hosted runner pool does not sync files",
    unpinned_other_host: "a session cloned from this Git host starts from the branch as the host has it, which a checkout cannot be kept in step with yet",
    pull_unsupported: "this platform cannot take a cloud session's files back yet",
    bundling_unavailable: "starting a session from an upload of your working tree is switched off, and this checkout would need one",
    folder_bundling_unavailable: Ron,
    no_remote: "no remote of this checkout could be read to compare it with",
    index_state: "the index has unmerged or intent-to-add entries, which an upload of your working tree cannot include until they are resolved or added",
    untrusted_workspace: "this folder's trust has not been confirmed, so the checkout was not examined",
    unborn: "this repository has no commit yet \u2014 commit the files the session should start from (git add <files> && git commit, keeping keys and local secrets out with a .gitignore), then start again",
    layout_unserved: "this checkout keeps its git directory elsewhere (a submodule or separate git dir, or a linked working tree on Windows or WSL), which directory sync does not run git in yet \u2014 start once from an ordinary clone of the repository to choose"
  } [e];
  return {
    offer: !1,
    reason: "deferred",
    deferral: e,
    line: Con(n)
  }
}

function B(e) {
  return {
    offer: !1,
    reason: "probe_failed",
    failure: e,
    line: e === "aborted" ? null : e === "deadline" ? "File sync is not offered for this launch: this checkout could not be measured in the time allowed." : "File sync is not offered for this launch: this checkout could not be measured (details in the debug log)."
  }
}

function he(e, o, n) {
  let s = o.facts,
    r = "seed" in e ? e.seed : null,
    l = "untracked" in e ? e.untracked : null;
  if (i("tengu_dir_sync_offer_probe", {
      outcome: c(e.reason),
      forecast: ue(o.forecast?.kind),
      deferral: e.reason === "deferred" ? c(e.deferral) : void 0,
      anchor_unavailable_reason: e.reason === "deferred" ? ue(e.anchorUnavailable) : void 0,
      host: s === null ? void 0 : c(s.host ?? "none"),
      divergence: ue(s?.verdict?.reason),
      failure: e.reason === "probe_failed" ? c(e.failure) : void 0,
      pack_bytes: r?.packBytes,
      pack_over_limit: r?.packOverLimit,
      history_bytes: r?.historyBytes ?? void 0,
      history_walk: r?.start === "created_empty" ? c(r.historyWalk) : void 0,
      history_repacked: typeof r?.historyBytes === "number" ? r.historyRepacked : void 0,
      changed_tracked_bytes: r?.changedTrackedBytes,
      changed_tracked_paths: r?.changedTrackedCount,
      cap_bytes: r?.capBytes,
      untracked_eligible: l?.eligibleCount,
      untracked_seed_bytes: l?.seedBytes,
      folder_files: e.reason === "folder" || e.reason === "folder_too_large" ? e.files : void 0,
      folder_bytes: e.reason === "folder_too_large" ? e.totalBytes : void 0,
      size_pack_bytes: e.reason === "repository_too_large" ? e.sizePackBytes ?? void 0 : void 0,
      duration_ms: n
    }), !e.offer && e.line !== null) {
    if (t(`dir-sync: sync not offered before consent (${e.reason}${e.reason==="probe_failed"?`: ${e.failure}`:e.reason==="deferred"?`: ${e.deferral}`:""})`), e.reason !== "deferred") p("ccr_dir_sync_mode_prompt", `not_offered_${e.reason}`)
  }
}
export {
  d_n,
  lXn
};
