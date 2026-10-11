// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { oe } from "B:/~BUN/root/chunk-shgdrs47.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { p } from "B:/~BUN/root/chunk-51n463p1.js";
import { ZR, vBt, Uft, Ww } from "B:/~BUN/root/chunk-fct6vke8.js";
import { Fn, Xl } from "B:/~BUN/root/chunk-339q6g5w.js";
import { Ro } from "B:/~BUN/root/chunk-y72v2pst.js";
import { Uu } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { k3, E3 } from "B:/~BUN/root/chunk-90zbw58x.js";
import { M3, DEe, Con, Ron as folder_bundling_unavailable, tNe, Aon, Don, p4e, dz, Mt, Qit, Won, IV, qL, wAr, Mae, b4e, OV, aNe, S4e as line } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { oZe } from "B:/~BUN/root/chunk-a716ngan.js";
import { hir as deadlineMs, yir, aCn, lwt, fE, lCn, _ir, cOe } from "B:/~BUN/root/chunk-jr7rmyt0.js";
import { $H, car } from "B:/~BUN/root/chunk-r6beatp9.js";
import { lze } from "B:/~BUN/root/chunk-h7prpcgw.js";
import { tqe, DM, KHn } from "B:/~BUN/root/chunk-3jyp964r.js";
import { gir } from "B:/~BUN/root/chunk-2wtynsez.js";
import { gOe, i3t, q7e, Mwt } from "B:/~BUN/root/chunk-fj96ftrb.js";
import { jwt, _Oe, TU } from "B:/~BUN/root/chunk-gnzce1c4.js";
import { Ms } from "B:/~BUN/root/chunk-6492v1c5.js";
import { Ao } from "B:/~BUN/root/chunk-9sajt7dp.js";
import { Ut } from "B:/~BUN/root/chunk-qbrwdgwc.js";
import { lstat as Y } from "fs/promises";
import { join as j } from "path";
var timeoutMs = 15000,
  N = 1048576,
  q = 5000,
  K = 500,
  X = 1.2,
  V = 8;
function G({
  host: host,
  bundlingAvailable: bundlingAvailable,
  pullSupported: pullSupported,
  repositoryTooLarge: repositoryTooLarge,
  verdict: verdict,
  overlayAvailable: overlayAvailable,
  servedBySync: servedBySync
}) {
  let f = servedBySync ? {
    kind: "created_empty"
  } : {
    kind: "bundle"
  };
  if (host === null) return !bundlingAvailable ? {
    kind: "deferred",
    why: "bundling_unavailable"
  } : repositoryTooLarge ? {
    kind: "repository_too_large"
  } : f;
  if (verdict === null) return {
    kind: "deferred",
    why: "no_remote"
  };
  if (verdict.reason === "probe_failed") return {
    kind: "probe_failed"
  };
  if (verdict.reason === "linked_worktree" || verdict.reason === "unserved_layout") return {
    kind: "deferred",
    why: "layout_unserved"
  };
  if (verdict.reason === "in_progress_op") return {
    kind: "deferred",
    why: "operation_in_progress"
  };
  if (host === "github" && (verdict.reason === "clean" || verdict.reason === "head_behind_remote")) return {
    kind: "remote_ref"
  };
  if (verdict.reason === "clean") return {
    kind: "deferred",
    why: "unpinned_other_host"
  };
  if (!pullSupported) return {
    kind: "deferred",
    why: "pull_unsupported"
  };
  if (overlayAvailable && servedBySync && host === "github" && (verdict.reason === "tracked_changes" || verdict.reason === "head_not_at_remote") && (verdict.remote.placement === "at" || verdict.remote.placement === "ahead")) return {
    kind: "overlay"
  };
  if (!bundlingAvailable) return {
    kind: "deferred",
    why: "bundling_unavailable"
  };
  if (repositoryTooLarge) return {
    kind: "repository_too_large"
  };
  return f;
}
function I(e) {
  let o = Math.ceil((e.historyBytes ?? 0) * (e.historyRepacked ? X : 1));
  return Math.max(o, e.packBytes) + e.changedTrackedBytes;
}
function J(e) {
  return !e.packOverLimit && I(e) + N <= e.capBytes ? "fits" : "too_large";
}
function d_n(e) {
  return e.offer ? "offered" : e.reason === "deferred" ? "deferred" : e.reason === "probe_failed" ? "failed" : "not_offered";
}
async function Q({
  explicitRef: explicitRef,
  poolId: poolId,
  monorepo = !1,
  signal: signal,
  onMeasuring = () => {},
  deadlineMs: l = timeoutMs,
  folderMaxFiles: folderMaxFiles,
  folderMaxBytes: folderMaxBytes,
  firstUploadMaxBytes: firstUploadMaxBytes,
  historyWalkBudgetMs: historyWalkBudgetMs
}) {
  let S = Date.now(),
    R;
  try {
    let selfHostedPool = monorepo || k3(poolId ?? E3().id);
    R = Ao(signal, {
      timeoutMs: l,
      refTimer: !0
    });
    let y = R,
      O = await cOe(Z({
        explicitRef: explicitRef,
        selfHostedPool: selfHostedPool,
        onMeasuring: onMeasuring,
        folderMaxFiles: folderMaxFiles,
        folderMaxBytes: folderMaxBytes,
        firstUploadMaxBytes: firstUploadMaxBytes,
        historyWalkBudgetMs: historyWalkBudgetMs,
        deadlineAtMs: S + l
      }, y.signal).catch(F => (d(F), {
        offer: B("threw"),
        facts: null,
        forecast: null
      })), y.signal),
      offer = O === null || Mt(y.signal) ? B(lwt(signal, y.signal, "deadline")) : O.offer;
    return {
      key: d_n(offer),
      reason: offer.reason,
      offer: offer,
      lines: !offer.offer && offer.line !== null ? [offer.line] : [],
      facts: O?.facts ?? null,
      forecast: O?.forecast ?? null,
      elapsedMs: Date.now() - S
    };
  } catch (error) {
    d(error);
    let offer_2 = B("threw");
    return {
      key: "failed",
      reason: offer_2.reason,
      offer: offer_2,
      lines: [],
      facts: null,
      forecast: null,
      elapsedMs: Date.now() - S
    };
  } finally {
    R?.cleanup();
  }
}
async function lXn(e) {
  let o = await Q(e);
  return he(o.offer, o, o.elapsedMs), o.offer;
}
async function Z({
  explicitRef: explicitRef_2,
  selfHostedPool: selfHostedPool_2,
  onMeasuring: onMeasuring_2,
  folderMaxFiles: s,
  folderMaxBytes: r,
  firstUploadMaxBytes: firstUploadMaxBytes_2 = $H,
  historyWalkBudgetMs: historyWalkBudgetMs_2 = q,
  deadlineAtMs: deadlineAtMs
}, signal_2) {
  let gitRoot = Fn(oe());
  if (gitRoot === null) return me({
    explicitRef: explicitRef_2,
    selfHostedPool: selfHostedPool_2,
    onMeasuring: onMeasuring_2,
    maxFiles: s,
    maxBytes: r
  }, signal_2);
  if (aNe()) return W;
  let why = selfHostedPool_2 ? "self_hosted_pool" : explicitRef_2 !== void 0 ? "named_revision" : vBt().blocked() ? "untrusted_workspace" : null;
  if (why !== null) return {
    offer: x(why, explicitRef_2),
    facts: null,
    forecast: {
      kind: "deferred",
      why: why
    }
  };
  let R = a.CCR_FORCE_BUNDLE === !0,
    v = R ? null : await Ww(),
    host_2 = v === null || ZR(v) ? null : Ro(v.host) ? "github" : "other",
    [bundlingAvailable_2, verdict_2] = await Promise.all([U(), host_2 === null ? Promise.resolve(null) : te(gitRoot, signal_2)]);
  if (Mt(signal_2)) return {
    offer: B("aborted"),
    facts: null,
    forecast: null
  };
  if (verdict_2 === null) {
    let w = await cOe(dz(gitRoot), signal_2);
    if (w === null) return {
      offer: B("aborted"),
      facts: null,
      forecast: null
    };
    if (aCn(w) !== null) return {
      offer: x("layout_unserved", explicitRef_2),
      facts: null,
      forecast: {
        kind: "deferred",
        why: "layout_unserved"
      }
    };
  }
  let F = host_2 === null || verdict_2?.diverged === !0 ? await p4e() : null,
    pullSupported_2 = OV(),
    facts = {
      host: host_2,
      bundlingAvailable: bundlingAvailable_2,
      pullSupported: pullSupported_2,
      repositoryTooLarge: F?.tooLarge === !0,
      verdict: verdict_2,
      overlayAvailable: !0,
      servedBySync: M3() && pullSupported_2 && !R
    },
    P = !1,
    L = () => {
      if (!P) P = !0, onMeasuring_2();
    },
    E = G(facts);
  if (Mt(signal_2)) return {
    offer: B("aborted"),
    facts: null,
    forecast: null
  };
  if (E.kind === "remote_ref" || E.kind === "overlay" || E.kind === "bundle" || E.kind === "created_empty") {
    let w = await oZe(gitRoot);
    if (w !== null) return {
      offer: z(w),
      facts: facts,
      forecast: null
    };
  }
  let forecast = await ee(E, facts, {
      gitRoot: gitRoot,
      signal: signal_2,
      timeoutMs: timeoutMs
    }, L),
    u = offer_3 => ({
      offer: offer_3,
      facts: facts,
      forecast: forecast
    });
  switch (forecast.kind) {
    case "probe_failed":
      return u(B(verdict_2?.reason === "probe_failed" ? verdict_2.failure : "git"));
    case "repository_too_large":
      return u(ce(F?.sizeBytes ?? null, host_2));
    case "deferred":
      return u(x(forecast.why, void 0));
    case "remote_ref":
    case "overlay":
    case "bundle":
    case "created_empty":
      {
        L();
        let w = {
            gitRoot: gitRoot,
            signal: signal_2,
            timeoutMs: timeoutMs,
            deadlineAtMs: deadlineAtMs
          },
          start = forecast.kind === "bundle" || forecast.kind === "created_empty" ? forecast.kind : null,
          [k, untracked] = await Promise.all([start === null ? Promise.resolve({
            kind: "not_needed"
          }) : ne(w, {
            start: start,
            capBytes: start === "created_empty" ? firstUploadMaxBytes_2 : Don(),
            historyWalkBudgetMs: historyWalkBudgetMs_2
          }), le(w)]);
        if (k.kind === "failed" || untracked === null) return u(B(Mt(signal_2) ? "aborted" : "git"));
        if (k.kind === "blocked") return u(x("index_state", void 0));
        if (k.kind === "unborn") return u(x("unborn", void 0));
        if (untracked.seedBytes > _Oe) return u({
          offer: !1,
          reason: "untracked_too_large",
          untracked: untracked,
          seed: k.kind === "measured" ? k.seed : null,
          line: `File sync is not offered for this checkout: ${de(untracked.seedBytes, k.kind === "measured" ? k.seed.start : null)}.`
        });
        if (k.kind === "measured" && J(k.seed) === "too_large") return u({
          offer: !1,
          reason: "too_large",
          seed: k.seed,
          untracked: untracked,
          line: fe(k.seed, host_2, verdict_2?.reason ?? null)
        });
        return u(k.kind === "measured" ? {
          offer: !0,
          reason: "fits",
          seed: k.seed,
          untracked: untracked
        } : {
          offer: !0,
          reason: "not_size_bound",
          untracked: untracked
        });
      }
  }
}
function U() {
  return a.CCR_ENABLE_BUNDLE === !0 ? Promise.resolve(!0) : Uu("tengu_ccr_bundle_seed_enabled");
}
async function ee(e, o, n, s) {
  let verdict_3 = o.verdict;
  if (e.kind !== "overlay" || verdict_3 === null || verdict_3.reason !== "tracked_changes" && verdict_3.reason !== "head_not_at_remote" || verdict_3.remote.placement !== "ahead") return e;
  s();
  let l = await lCn(n, ["pack-objects", "--revs", "--stdout", "--thin", "--delta-base-offset", "-q"], {
    input: `HEAD
^${verdict_3.remote.commit}
`,
    limitBytes: gir - N
  });
  return l.overLimit || l.exitCode !== 0 ? G({
    ...o,
    overlayAvailable: !1
  }) : e;
}
async function re(e) {
  return (await fE(e, ["rev-parse", "-q", "--verify", "HEAD^{commit}"])).exitCode === 1;
}
async function te(e, signal_3) {
  let sessionReach = await Qit(e, signal_3),
    [s, r] = await Promise.all([Uft(e, Won(sessionReach)), Xl()]);
  if (s === null) return null;
  let l = await KHn({
    gitRoot: e,
    remoteName: s.name,
    branch: r,
    sessionRoot: e,
    sessionReach: sessionReach,
    signal: signal_3
  });
  return (await yir({
    gitRoot: e,
    remoteName: s.name,
    revision: r,
    ...(l.kind === "pushed_ancestor" && {
      startCommit: l.commit
    }),
    deadlineMs: deadlineMs,
    signal: signal_3
  })).verdict;
}
async function ne(e, {
  start: start_2,
  capBytes: n,
  historyWalkBudgetMs: historyWalkBudgetMs_3
}) {
  let [r, l, historyRepacked] = await Promise.all([lCn(e, ["pack-objects", "--revs", "--stdout", "--thin", "--delta-base-offset", "-q"], {
    input: `HEAD^{tree}
`,
    limitBytes: n
  }), ie(e), start_2 === "created_empty" ? se(e) : Promise.resolve(!1)]);
  if (Mt(e.signal)) return {
    kind: "failed"
  };
  if (l === null || !r.overLimit && r.exitCode !== 0) {
    if (!Mt(e.signal) && (await re(e))) return {
      kind: "unborn"
    };
    return t(`dir-sync: seed measurement failed (pack-objects ${r.overLimit ? "stopped at the limit" : r.exitCode ?? "killed"}, changed tracked files ${l === null ? "unreadable" : "read"})`, {
      level: "warn"
    }), {
      kind: "failed"
    };
  }
  if (l.stashBlocked) return {
    kind: "blocked"
  };
  let f = start_2 === "created_empty" && !r.overLimit ? await ae(e, historyWalkBudgetMs_3) : {
    walk: "not_walked",
    bytes: null
  };
  if (Mt(e.signal)) return {
    kind: "failed"
  };
  return {
    kind: "measured",
    seed: {
      start: start_2,
      packBytes: r.bytes,
      packOverLimit: r.overLimit,
      historyBytes: f.bytes,
      historyWalk: f.walk,
      historyRepacked: historyRepacked,
      changedTrackedBytes: l.bytes,
      changedTrackedCount: l.count,
      capBytes: n
    }
  };
}
async function ae(e, o) {
  let timeoutMs_2 = Math.min(o, (e.deadlineAtMs ?? 1 / 0) - Date.now() - K);
  if (timeoutMs_2 < 1) return {
    walk: "out_of_time",
    bytes: null
  };
  let s = Ao(e.signal, {
    timeoutMs: timeoutMs_2,
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
    };
  } finally {
    s.cleanup();
  }
}
async function se(e) {
  let o = await fE(e, ["version"]);
  return car(o.exitCode === 0 ? o.stdout : null).length > 0;
}
async function ie(e) {
  let o = await _ir(e);
  if (o === null) return null;
  let n = await qL(o.paths.map(item => H(e, item)), e.signal);
  return n === null ? null : {
    bytes: n.reduce((acc, item) => acc + item, 0),
    count: o.paths.length,
    stashBlocked: o.stashBlocked
  };
}
async function le(e) {
  let realRoot = await IV(e.gitRoot),
    n = realRoot === null ? null : await wAr({
      gitRoot: e.gitRoot,
      realRoot: realRoot,
      signal: e.signal,
      uploadFilter: DM(e.gitRoot, {
        realRoot: realRoot
      }),
      filterAttributed: lze(e.gitRoot)
    });
  if (n === null || n.kind === "failed") {
    if (!Mt(e.signal)) t("dir-sync: untracked survey failed before consent", {
      level: "warn"
    });
    return null;
  }
  let s = n.kind === "too_many_untracked" ? await qL(n.eligiblePaths.map(item => H(e, item)), e.signal) : [...n.chosen, ...n.overBudget].map(({
    size: size
  }) => size);
  return s === null ? null : {
    eligibleCount: n.eligibleUntrackedCount,
    seedBytes: s.reduce((acc, item) => acc + item, 0)
  };
}
var H = Ms(V, async (e, o) => {
  if (e.signal.throwIfAborted(), !TU(o)) return 0;
  try {
    let n = await Y(j(e.gitRoot, o));
    return n.isFile() ? n.size : 0;
  } catch {
    return 0;
  }
});
function de(e, o) {
  let n = o === "created_empty" ? "add a .gitignore entry for the ones the session can do without" : "add a .gitignore entry or commit the ones you need";
  return `${Ut(e)} of untracked files exceed the ${Ut(_Oe)} one sync upload carries; ${n}`;
}
function fe(e, o, n) {
  let s = I(e),
    r = Ut(e.capBytes),
    l = e.packOverLimit ? `more than the ${r} limit` : s > e.capBytes ? `about ${Ut(s)}, over the ${r} limit` : `about ${Ut(s)}, within ${Ut(N)} of the ${r} limit`,
    m = e.start === "created_empty" ? `one upload of this checkout's history and files, which come to ${l}` : `an upload of your working tree, and this one would be ${l}`;
  if (o === null) return e.start === "created_empty" ? `File sync is not offered for this checkout: with no GitHub remote to clone, a synced session would have to start from ${m}.` : `File sync is not offered for this checkout: with no GitHub remote to clone, a cloud session starts from ${m}.`;
  let {
      why: why_2,
      remedy: remedy
    } = n === "detached_head" ? {
      why: "it is not on a branch",
      remedy: "check out a branch, then start again to be asked"
    } : n === "remote_ref_unknown" ? {
      why: "its branch is not on the remote as last fetched here",
      remedy: "push the branch, then start again to be asked"
    } : {
      why: "its tracked state differs from the remote's as last fetched here",
      remedy: "commit and push your changes, then start again to be asked"
    },
    b = "This launch will not carry your local changes";
  return `File sync is not offered for this checkout: ${why_2}, so a synced session would have to start from ${m}. ${o === "github" ? `${b}; ${remedy}.` : `${b}.`}`;
}
function ce(sizePackBytes, o) {
  let n = sizePackBytes === null ? "" : ` (${Ut(sizePackBytes)} of packed git objects)`;
  return {
    offer: !1,
    reason: "repository_too_large",
    sizePackBytes: sizePackBytes,
    line: o === null ? `File sync is not offered here: this repository is too large to upload to a cloud session${n}.` : `File sync is not offered here: this repository is too large${n} to start a cloud session from your working tree; the session starts from the remote without your local changes and does not sync.`
  };
}
async function me({
  explicitRef: explicitRef_3,
  selfHostedPool: selfHostedPool_3,
  onMeasuring: onMeasuring_3,
  maxFiles = jwt,
  maxBytes: r = gOe
}, signal_4) {
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
  let why_3 = selfHostedPool_3 ? "self_hosted_pool" : explicitRef_3 !== void 0 ? "named_revision" : !OV() ? "pull_unsupported" : !(await U()) ? "folder_bundling_unavailable" : null;
  if (why_3 !== null) return {
    offer: x(why_3, explicitRef_3),
    facts: null,
    forecast: {
      kind: "deferred",
      why: why_3
    }
  };
  let root = oe();
  if (await b4e(root)) return {
    offer: {
      offer: !1,
      reason: "folder_is_repository",
      line: "File sync is not offered for this folder: it is (inside) a bare git repository, not a project folder."
    },
    facts: null,
    forecast: null
  };
  if (await Aon(root)) return {
    offer: {
      offer: !1,
      reason: "folder_is_repository",
      line: "File sync is not offered for this folder: it has a .git entry that could not be read as a git checkout (a link, or something git did not write)."
    },
    facts: null,
    forecast: null
  };
  let h = await oZe(root);
  if (h !== null) return {
    offer: z(h),
    facts: null,
    forecast: null
  };
  onMeasuring_3();
  let {
      ignoreMatcherFrom: ignoreMatcherFrom,
      listFolderCandidates: listFolderCandidates,
      NESTED_IGNORES_TOO_LARGE_CLAUSE: NESTED_IGNORES_TOO_LARGE_CLAUSE,
      NOTHING_WITHHELD: v,
      platformIgnoresCase: platformIgnoresCase,
      readRootIgnoreLines: readRootIgnoreLines,
      rootIgnoreRefusalClause: rootIgnoreRefusalClause
    } = await import("B:/~BUN/root/chunk-61a8n0wx.js"),
    F = await readRootIgnoreLines(root),
    A = F.kind === "unusable" ? {
      ok: !1,
      reason: "ignore_unreadable"
    } : await listFolderCandidates({
      root: root,
      ignores: ignoreMatcherFrom(F.lines, {
        ignoreCase: platformIgnoresCase(root)
      }),
      withheldOf: v,
      signal: signal_4,
      nestedIgnoreFiles: !0,
      maxFiles: maxFiles
    });
  if (Mt(signal_4)) return {
    offer: B("aborted"),
    facts: null,
    forecast: null
  };
  if (!A.ok) return {
    offer: A.reason === "too_many_files" ? {
      offer: !1,
      reason: "folder_too_many_files",
      line: `File sync is not offered for this folder: it holds more than ${maxFiles.toLocaleString()} files, more than one sync can carry.`
    } : {
      offer: !1,
      reason: "folder_unreadable",
      line: F.kind === "unusable" ? `File sync is not offered for this launch: the .gitignore in this folder ${rootIgnoreRefusalClause(F)}.` : A.reason === "nested_ignores_too_large" ? `File sync is not offered for this launch: ${NESTED_IGNORES_TOO_LARGE_CLAUSE}.` : "File sync is not offered for this launch: this folder could not be read (details in the debug log)."
    },
    facts: null,
    forecast: null
  };
  let M = DM(root, {
    realRoot: (await IV(root)) ?? root
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
  let files = A.listing.files,
    L = files.filter(item => {
      let u = M(item.path, !1);
      return u === null || u === "rules_unreadable";
    }),
    totalBytes = L.reduce((acc, item) => acc + item.size, 0);
  if (totalBytes > i3t(r, L.length)) {
    let largest = L.toSorted((u, w) => w.size - u.size).slice(0, q7e).map(item => ({
      path: item.path,
      bytes: item.size
    }));
    return {
      offer: {
        offer: !1,
        reason: "folder_too_large",
        files: files.length,
        totalBytes: totalBytes,
        line: `File sync is not offered for this folder: ${Mwt({
          totalBytes: totalBytes,
          capBytes: r,
          largest: largest
        })}. This cloud session starts without this folder's files; to sync it next time, remove or ignore what the session does not need (a .gitignore in this folder is honoured).`
      },
      facts: null,
      forecast: null
    };
  }
  return {
    offer: {
      offer: !0,
      reason: "folder",
      files: files.length
    },
    facts: null,
    forecast: null
  };
}
function z(anchorUnavailable) {
  return {
    offer: !1,
    reason: "deferred",
    deferral: "anchor_unavailable",
    line: Mae(anchorUnavailable),
    anchorUnavailable: anchorUnavailable
  };
}
var W = {
  offer: {
    offer: !1,
    reason: "compliance_restricted",
    line: line
  },
  facts: null,
  forecast: null
};
function x(deferral, o) {
  let n = {
    named_revision: `with ${o?.flag ?? "a named revision"} the session starts from that revision as the remote has it, not from this checkout`,
    operation_in_progress: "a merge, cherry-pick or revert is in progress in this checkout",
    self_hosted_pool: "a session on a self-hosted runner pool does not sync files",
    unpinned_other_host: "a session cloned from this Git host starts from the branch as the host has it, which a checkout cannot be kept in step with yet",
    pull_unsupported: "this platform cannot take a cloud session's files back yet",
    bundling_unavailable: "starting a session from an upload of your working tree is switched off, and this checkout would need one",
    folder_bundling_unavailable: folder_bundling_unavailable,
    no_remote: "no remote of this checkout could be read to compare it with",
    index_state: "the index has unmerged or intent-to-add entries, which an upload of your working tree cannot include until they are resolved or added",
    untrusted_workspace: "this folder's trust has not been confirmed, so the checkout was not examined",
    unborn: "this repository has no commit yet \u2014 commit the files the session should start from (git add <files> && git commit, keeping keys and local secrets out with a .gitignore), then start again",
    layout_unserved: "this checkout keeps its git directory elsewhere (a submodule or separate git dir, or a linked working tree on Windows or WSL), which directory sync does not run git in yet \u2014 start once from an ordinary clone of the repository to choose"
  }[deferral];
  return {
    offer: !1,
    reason: "deferred",
    deferral: deferral,
    line: Con(n)
  };
}
function B(failure) {
  return {
    offer: !1,
    reason: "probe_failed",
    failure: failure,
    line: failure === "aborted" ? null : failure === "deadline" ? "File sync is not offered for this launch: this checkout could not be measured in the time allowed." : "File sync is not offered for this launch: this checkout could not be measured (details in the debug log)."
  };
}
function he(e, o, duration_ms) {
  let facts_2 = o.facts,
    r = "seed" in e ? e.seed : null,
    l = "untracked" in e ? e.untracked : null;
  if (i("tengu_dir_sync_offer_probe", {
    outcome: c(e.reason),
    forecast: ue(o.forecast?.kind),
    deferral: e.reason === "deferred" ? c(e.deferral) : void 0,
    anchor_unavailable_reason: e.reason === "deferred" ? ue(e.anchorUnavailable) : void 0,
    host: facts_2 === null ? void 0 : c(facts_2.host ?? "none"),
    divergence: ue(facts_2?.verdict?.reason),
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
    duration_ms: duration_ms
  }), !e.offer && e.line !== null) {
    if (t(`dir-sync: sync not offered before consent (${e.reason}${e.reason === "probe_failed" ? `: ${e.failure}` : e.reason === "deferred" ? `: ${e.deferral}` : ""})`), e.reason !== "deferred") p("ccr_dir_sync_mode_prompt", `not_offered_${e.reason}`);
  }
}
export { d_n, lXn };