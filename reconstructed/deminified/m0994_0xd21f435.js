// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { oA, Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { jft } from "B:/~BUN/root/chunk-339q6g5w.js";
import { JO, dz, vF, $on, s1n, Mt, HEe, N9, Oae, IV, L3, qL, ex } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { bh, gO } from "B:/~BUN/root/chunk-a716ngan.js";
import { TU } from "B:/~BUN/root/chunk-gnzce1c4.js";
import { Ms } from "B:/~BUN/root/chunk-6492v1c5.js";
import { Ao } from "B:/~BUN/root/chunk-9sajt7dp.js";
import { lstat as U, readlink as Y } from "fs/promises";
import { join as S } from "path";
import { finished as W } from "stream/promises";
var hir = 5000,
  J = 4000,
  K = 500,
  B = 8,
  maxBuffer = 16777216,
  y = ["MERGE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD"],
  q = "120000",
  b = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/,
  z = /^0{40}(?:0{24})?$/,
  X = /^:([0-7]{6}) ([0-7]{6}) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([A-Z])[0-9]*$/;
async function yir({
  gitRoot: gitRoot,
  remoteName: remoteName,
  revision: revision,
  startCommit: startCommit,
  deadlineMs: deadlineMs,
  signal: signal
}) {
  let probedAtMs = Date.now();
  if (Mt(signal)) return {
    probedAtMs: probedAtMs,
    durationMs: 0,
    verdict: w("aborted")
  };
  let timeoutMs = Number.isFinite(deadlineMs) ? Math.max(1, Math.floor(deadlineMs)) : 1,
    m = Ao(signal, {
      timeoutMs: timeoutMs,
      refTimer: !0
    });
  try {
    let u = await cOe(dz(gitRoot), m.signal);
    if (u === null) return {
      probedAtMs: probedAtMs,
      durationMs: Date.now() - probedAtMs,
      verdict: revision === "HEAD" && !Mt(signal) ? {
        reason: "detached_head",
        diverged: !0,
        remote: null
      } : w(lwt(signal, m.signal, "deadline"))
    };
    let reason = aCn(u);
    if (reason !== null) return {
      probedAtMs: probedAtMs,
      durationMs: Date.now() - probedAtMs,
      verdict: {
        reason: reason,
        diverged: !0,
        remote: null
      }
    };
    if (revision === "HEAD") return {
      probedAtMs: probedAtMs,
      durationMs: Date.now() - probedAtMs,
      verdict: {
        reason: "detached_head",
        diverged: !0,
        remote: null
      }
    };
    let g = await Z({
      gitRoot: gitRoot,
      signal: m.signal,
      timeoutMs: timeoutMs,
      deadlineAtMs: probedAtMs + timeoutMs
    }, remoteName, revision, startCommit);
    return {
      probedAtMs: probedAtMs,
      durationMs: Date.now() - probedAtMs,
      verdict: g.reason === "probe_failed" ? w(lwt(signal, m.signal, g.failure)) : g
    };
  } catch (error) {
    if (!Mt(m.signal)) d(error);
    return {
      probedAtMs: probedAtMs,
      durationMs: Date.now() - probedAtMs,
      verdict: w(lwt(signal, m.signal, "threw"))
    };
  } finally {
    m.cleanup();
  }
}
async function Z(e, r, o, i) {
  let n = await cOe(Q(e, `refs/remotes/${r}/${o}`), e.signal);
  if (n === null || "detail" in n) return L(n?.detail ?? "deadline or abort during the first reads");
  let s = n.remoteSha ?? (i !== void 0 && b.test(i) ? i : null);
  if (s === null) return {
    reason: "remote_ref_unknown",
    diverged: !0,
    remote: null,
    fallback: await cOe(te(e, n, r), e.signal)
  };
  let a = await cOe(H(e, n, s), e.signal);
  if (a === null || "detail" in a) return L(a?.detail ?? "deadline or abort during the comparison");
  let {
      remote: remote,
      head: head,
      headDiffers: headDiffers
    } = a,
    reason_2 = n.operationInProgress ? "in_progress_op" : n.detached ? "detached_head" : headDiffers ? "tracked_changes" : n.headSha === remote.commit ? "clean" : remote.placement === "behind" ? "head_behind_remote" : "head_not_at_remote";
  return reason_2 === "clean" ? {
    reason: reason_2,
    diverged: !1,
    remote: remote,
    head: head
  } : {
    reason: reason_2,
    diverged: !0,
    remote: remote,
    head: head
  };
}
async function Q(e, r) {
  let [o, i, n, s, a, realRoot] = await Promise.all([fE(e, ["symbolic-ref", "-q", "HEAD"]), fE(e, ["rev-parse", "-q", "--verify", "HEAD"]), fE(e, ["show-ref", "--verify", "--hash", r]), oe(e), fE(e, x("HEAD")), IV(e.gitRoot)]);
  if (Mt(e.signal)) return {
    detail: "deadline or abort during the first reads"
  };
  let headSha = i.stdout.trim(),
    held = s.held,
    headRecords = a.exitCode === 0 ? A(a.stdout) : null;
  if (o.exitCode !== 0 && o.exitCode !== 1 || i.exitCode !== 0 || !b.test(headSha) || n.exitCode === void 0 || held === null || headRecords === null || realRoot === null) return {
    detail: `symbolic-ref ${o.exitCode}, rev-parse ${i.exitCode}, show-ref ${n.exitCode}, markers ${s.exitCode ?? "unread"}, diff-index ${a.exitCode}, realpath ${realRoot === null ? "failed" : "ok"}`
  };
  let g = n.stdout.trim();
  return {
    headSha: headSha,
    detached: o.exitCode === 1,
    operationInProgress: held.includes(!0),
    headRecords: headRecords,
    realRoot: realRoot,
    remoteSha: n.exitCode === 0 && b.test(g) ? g : null
  };
}
async function H(e, r, o) {
  let {
      headSha: headSha_2
    } = r,
    n = o === headSha_2,
    timeoutMs_2 = Math.min(J, e.timeoutMs, (e.deadlineAtMs ?? 1 / 0) - Date.now() - K),
    abortController = new AbortController(),
    c = Ao(e.signal, {
      signalB: abortController.signal
    }),
    m = n ? Promise.resolve(null) : timeoutMs_2 < 1 ? Promise.resolve({
      stdout: ""
    }) : fE({
      ...e,
      signal: c.signal,
      timeoutMs: timeoutMs_2
    }, ["merge-base", headSha_2, o], void 0, {
      objectGraph: "as_is"
    }).catch(() => ({
      stdout: ""
    }));
  try {
    return await ee(e, r, o, m);
  } finally {
    abortController.abort(), c.cleanup();
  }
}
async function ee(e, {
  headSha: r,
  headRecords: headRecords_2,
  realRoot: realRoot_2
}, n, s) {
  let {
      gitRoot: gitRoot_2
    } = e,
    c = n === r,
    [m, u] = await Promise.all([fE(e, ["rev-parse", `${n}^{commit}`, `${n}^{tree}`, `${r}^{tree}`, "--is-shallow-repository"]), c ? Promise.resolve(null) : fE(e, x(n))]);
  if (Mt(e.signal)) return {
    detail: "deadline or abort during the remote reads"
  };
  let [commit, tree, tree_2, C] = m.stdout.split(/\r?\n/),
    _ = u === null ? headRecords_2 : u.exitCode === 0 ? A(u.stdout) : null;
  if (m.exitCode !== 0 || commit === void 0 || tree === void 0 || tree_2 === void 0 || !b.test(commit) || !b.test(tree) || !b.test(tree_2) || _ === null) return {
    detail: `rev-parse ${m.exitCode}, diff-index ${u?.exitCode ?? "reused"}`
  };
  let E = new Map([...headRecords_2, ..._].filter(D).map(item => [item.path, item.newMode])),
    R = [...E.keys()];
  await using M = R.length === 0 ? null : await gO(bh(), {
    gitRoot: gitRoot_2,
    realRoot: realRoot_2
  }).then(h => "unavailable" in h ? null : h, h => (t(`dirSync divergence: tree anchor not opened (${v(h) ?? l(h)})`), null));
  let j = Ms(B, async h => (e.signal.throwIfAborted(), [h, M === null ? null : await O(gitRoot_2, realRoot_2, h, E.get(h), M)])),
    k = await qL(R.map(item => j(item)), e.signal);
  if (k === null || Mt(e.signal)) return {
    detail: "deadline or abort during the digests"
  };
  let G = new Map(k),
    T = await s;
  if (Mt(e.signal)) return {
    detail: "deadline or abort during the ancestry read"
  };
  let I = ne(r, commit, T, C !== "false");
  if (I.placement === "unknown") t(`dir-sync: placement of HEAD unknown (merge-base ${T?.exitCode ?? "killed or not run"}, shallow ${C ?? "unread"})`, {
    level: "warn"
  });
  return {
    remote: {
      commit: commit,
      tree: tree,
      differingTrackedCount: Oae(_.filter(item => item.status !== "D" && P(item, G)), h => h.path, () => null, () => !0).eligible.length,
      digestedPathCount: R.length,
      ...I
    },
    head: {
      commit: r,
      tree: tree_2
    },
    headDiffers: headRecords_2.some(item => P(item, G))
  };
}
function ne(e, mergeBase, o, i) {
  let mergeBase_2 = o?.exitCode === 0 ? o.stdout.trim() : null;
  if (o === null || e === mergeBase) return {
    placement: "at",
    mergeBase: mergeBase
  };
  if (mergeBase_2 === e || mergeBase_2 === mergeBase) return {
    placement: mergeBase_2 === e ? "behind" : "ahead",
    mergeBase: mergeBase_2
  };
  if (i) return {
    placement: "unknown",
    mergeBase: null
  };
  if (mergeBase_2 !== null && b.test(mergeBase_2)) return {
    placement: "diverged",
    mergeBase: mergeBase_2
  };
  return o.exitCode === 1 ? {
    placement: "unrelated",
    mergeBase: null
  } : {
    placement: "unknown",
    mergeBase: null
  };
}
async function te(e, r, o) {
  try {
    let i = await re(e, o);
    if (i === null) return null;
    let n = await H(e, r, i.sha);
    if ("detail" in n) return t(`dir-sync: default-branch comparison abandoned (${n.detail})`, {
      level: "warn"
    }), null;
    return {
      ref: i.name,
      branch: i.branch,
      remote: n.remote,
      head: n.head
    };
  } catch (error) {
    if (!Mt(e.signal)) d(error);
    return null;
  }
}
async function re(e, r) {
  let o = `refs/remotes/${r}/`,
    i = `${o}HEAD`,
    n = await fE(e, ["for-each-ref", "--format=%(refname)%00%(objectname)%00%(symref)", i, ...jft.map(item => `${o}${item}`)]);
  if (n.exitCode !== 0) return null;
  let s = new Map(n.stdout.split(/\r?\n/).map(item => item.split("\x00")).flatMap(([u, sha, g]) => u === void 0 || sha === void 0 || !b.test(sha) ? [] : [[u, {
      sha: sha,
      target: g ?? ""
    }]])),
    a = s.get(i),
    c = [...(a !== void 0 && a.target !== i && a.target.startsWith(o) ? [{
      branch: a.target.slice(o.length),
      sha: a.sha
    }] : []), ...jft.flatMap(u => {
      let f = s.get(`${o}${u}`);
      return f === void 0 ? [] : [{
        branch: u,
        sha: f.sha
      }];
    })],
    [m] = c;
  return m === void 0 ? null : {
    name: `${o}${m.branch}`,
    ...m
  };
}
function L(e) {
  return t(`dir-sync: local divergence probe failed (${e})`, {
    level: "warn"
  }), w("git");
}
function w(failure) {
  return {
    reason: "probe_failed",
    diverged: !1,
    remote: null,
    failure: failure
  };
}
function aCn(e) {
  if (e.kind !== "refused") return null;
  switch (e.why) {
    case "linked_worktree":
      return "linked_worktree";
    case "submodule":
    case "git_dir":
    case "temp_root":
    case "git_in_reach":
    case "reach_unexamined":
      return "unserved_layout";
    default:
      return null;
  }
}
function lwt(e, r, o) {
  return Mt(e) ? "aborted" : Mt(r) ? "deadline" : o;
}
async function oe(e) {
  let r = await dz(e.gitRoot),
    o = r.kind === "pinned" ? r.privateLayout : void 0;
  if (o === void 0) {
    let n = await fE(e, ["cat-file", "--batch-check=%(objectname)"], y.map(item => `${item}
`).join("")),
      s = n.exitCode === 0 ? ie(n.stdout) : null;
    if (s === null) return {
      held: null,
      exitCode: n.exitCode
    };
    return {
      held: await Promise.all(y.map(async (item, index) => s[index] === !0 && (await fE(e, ["show-ref", "--exists", item])).exitCode !== 2)),
      exitCode: n.exitCode
    };
  }
  if (!(await $on(o))) return {
    held: null
  };
  let i = await Promise.all(y.map(async item => {
    try {
      return (await U(S(o.gitDir, item))).isFile();
    } catch (error) {
      let a = v(error);
      return a === "ENOENT" || a === "ENOTDIR" ? !1 : null;
    }
  }));
  return i.includes(null) ? {
    held: null
  } : {
    held: i.map(item => item === !0),
    exitCode: 0
  };
}
async function fE({
  gitRoot: e,
  signal: r,
  timeoutMs: o
}, i, input, {
  objectGraph = "pinned"
} = {}) {
  let a = await F(e);
  if (a === null) return {
    stdout: ""
  };
  try {
    let c = N(i, objectGraph);
    return await Ve(a.exe, c, {
      cwd: e,
      env: a.env,
      extendEnv: !1,
      abortSignal: r,
      timeout: o,
      maxBuffer: maxBuffer,
      preserveOutputOnError: !1,
      ...(input === void 0 ? {
        stdin: "ignore"
      } : {
        input: input
      })
    });
  } finally {
    a.release();
  }
}
async function lCn({
  gitRoot: e,
  signal: signal_2,
  timeoutMs: o
}, i, {
  input: input_2,
  limitBytes: limitBytes
}) {
  let bytes = 0,
    overLimit = !1,
    m = await F(e);
  if (m === null) return {
    bytes: bytes,
    overLimit: overLimit
  };
  try {
    let u = oA(m.exe, N(i), {
      cwd: e,
      env: m.env,
      extendEnv: !1,
      signal: signal_2,
      timeout: o,
      input: input_2,
      stdout: "pipe",
      stderr: "ignore"
    });
    u.stdin?.on("error", () => {}), u.stdout?.on("data", C => {
      if (bytes += C.length, !overLimit && bytes > limitBytes) overLimit = !0, u.kill();
    });
    let f = u.stdout ? W(u.stdout).catch(() => {}) : Promise.resolve(),
      g = await u;
    await f;
    let p = !g.timedOut && !g.isCanceled && g.signal === void 0 && typeof g.exitCode === "number";
    return {
      bytes: bytes,
      overLimit: overLimit,
      exitCode: p ? g.exitCode : void 0
    };
  } catch (error) {
    if (!Mt(signal_2)) t(`dir-sync: could not run git to count its output (${l(error)})`, {
      level: "error"
    });
    return {
      bytes: bytes,
      overLimit: overLimit
    };
  } finally {
    m.release();
  }
}
async function _ir(e) {
  let [r, realRoot_3] = await Promise.all([fE(e, x("HEAD")), IV(e.gitRoot)]),
    i = r.exitCode === 0 ? A(r.stdout) : null;
  if (i === null || realRoot_3 === null || Mt(e.signal)) return null;
  let n = i.filter(D);
  await using s = n.length === 0 ? null : await gO(bh(), {
    gitRoot: e.gitRoot,
    realRoot: realRoot_3
  }).then(p => "unavailable" in p ? null : p, p => (t(`dirSync divergence: tree anchor not opened (${v(p) ?? l(p)})`), null));
  let a = Ms(B, async p => (e.signal.throwIfAborted(), [p.path, s === null ? null : await O(e.gitRoot, realRoot_3, p.path, p.newMode, s)])),
    c = await cOe(qL(n.map(item => a(item)), e.signal), e.signal);
  if (c === null || Mt(e.signal)) return null;
  let m = new Map(c),
    u = i.some(item => item.status === "U"),
    f = i.some(item => item.status === "A" && item.newId === null),
    g = !u && f ? await fE(e, ["diff-files", "--name-only", "--diff-filter=A", "--no-renames", "--ignore-submodules=all"]) : null;
  if (Mt(e.signal)) return null;
  return {
    paths: i.filter(item => P(item, m)).map(item => item.path),
    stashBlocked: u || g !== null && (g.exitCode !== 0 || g.stdout.trim() !== "")
  };
}
function N(e, r = "pinned") {
  return ["--no-optional-locks", ...HEe, ...(r === "pinned" ? JO : []), "-c", "advice.graftFileDeprecated=false", ...e];
}
async function F(e) {
  let r = await s1n(e);
  if (r === null) return null;
  return {
    exe: vF(r.reach),
    env: {
      ...N9(r.env, r.reach),
      GIT_GRAFT_FILE: r.env.GIT_GRAFT_FILE ?? "/dev/null",
      GIT_NO_REPLACE_OBJECTS: "1"
    },
    release: r.release
  };
}
function x(e) {
  return ["diff-index", "-z", "--no-renames", "--no-ext-diff", "--ignore-submodules=all", e, "--"];
}
async function cOe(e, r) {
  let o = () => {};
  try {
    return await Promise.race([e, new Promise(i => {
      if (o = () => i(null), r.addEventListener("abort", o, {
        once: !0
      }), r.aborted) i(null);
    })]);
  } finally {
    r.removeEventListener("abort", o), e.catch(() => {});
  }
}
async function O(e, r, o, i, n) {
  if (!TU(o)) return null;
  if (i === q) try {
    return ex(await Y(S(e, o), "buffer"));
  } catch {}
  let s = await L3(e, r, o, n);
  return s.kind === "read" ? ex(s.content) : null;
}
function ie(e) {
  let r = e.split(/\r?\n/);
  if (r.length !== y.length) return null;
  let o = r.map((item, index) => b.test(item) ? !0 : item === `${y[index]} missing` ? !1 : null);
  return o.includes(null) ? null : o.map(item => item === !0);
}
function A(e) {
  let r = e.split("\x00");
  if (r.length % 2 !== 1 || r.at(-1) !== "") return null;
  let o = Array.from({
    length: (r.length - 1) / 2
  }, (i, n) => {
    let s = X.exec(r[2 * n] ?? ""),
      path = r[2 * n + 1];
    if (s === null || path === void 0 || path === "") return null;
    let [, oldMode = "", newMode = "", oldId = "", f = "", status = ""] = s;
    return {
      path: path,
      status: status,
      oldMode: oldMode,
      newMode: newMode,
      oldId: oldId,
      newId: z.test(f) ? null : f
    };
  });
  return o.includes(null) ? null : o.filter(item => item !== null);
}
function D(e) {
  return e.status === "M" && e.oldMode === e.newMode && e.newId === null;
}
function P(e, r) {
  return !D(e) || r.get(e.path) !== e.oldId;
}
export { hir, yir, aCn, lwt, fE, lCn, _ir, cOe };