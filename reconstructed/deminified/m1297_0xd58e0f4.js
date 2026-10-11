// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c, ue } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Xd, I, Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Lo } from "B:/~BUN/root/chunk-339q6g5w.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { gu, Ru } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { Pan } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { kk, son, Lu, hw, xEe, xV, Git, M3, lge, s4e, rn, TB, vR, PV, mAr, kee, f4e, Lon, Bon, Jit, fge } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { ts } from "B:/~BUN/root/chunk-f6h9k5ss.js";
import { EU, Sn, $H, BCn } from "B:/~BUN/root/chunk-r6beatp9.js";
import { DCn } from "B:/~BUN/root/chunk-38htkcqc.js";
import { QZr as markNeverFilled } from "B:/~BUN/root/chunk-8ay8vmkh.js";
import { keo, V4t, KWe, kwt } from "B:/~BUN/root/chunk-f5k13r52.js";
import { Y4t, pl, Kir, Twt } from "B:/~BUN/root/chunk-3edaq4dc.js";
import { _Oe } from "B:/~BUN/root/chunk-gnzce1c4.js";
import { Cg } from "B:/~BUN/root/chunk-esqb9g1a.js";
import { Ut } from "B:/~BUN/root/chunk-qbrwdgwc.js";
import { L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { randomBytes as xe } from "crypto";
import { realpath as Te } from "fs/promises";
import { join as Ee } from "path";
function f(refusal) {
  return {
    kind: "refused",
    refusal: refusal
  };
}
function T(why) {
  return {
    kind: "not_served",
    why: why
  };
}
function C(e, r, n) {
  return `${e} ${I(e, r, n)}`;
}
function q() {
  return {
    reason: "unreadable",
    cause: "rules_unreadable",
    count: null,
    line: "This project directory's .claude/settings.json or .claude/settings.local.json cannot be read or parsed. Fix or remove that file."
  };
}
function b() {
  return {
    reason: "git_error",
    line: "git could not read this project directory or prepare its upload (details are in the debug log). Run git status here."
  };
}
function Fe() {
  return {
    reason: "unborn",
    line: "This project directory's current branch has no commit yet. Make a first commit, and leave files named like credentials, or covered by your Read rules, out of it."
  };
}
function G(which) {
  return {
    reason: "shallow_or_partial",
    which: which,
    line: which === "shallow" ? "This project directory is a shallow clone whose history is cut, so its first upload would be incomplete. Run git fetch --unshallow." : "This project directory is set up as a partial clone (a promisor remote or a --filter clone), so some of its history may not be on this machine and its first upload would be incomplete."
  };
}
function V(what, capBytes, n) {
  let sizeBytes = n !== null && n > capBytes ? n : null,
    atLeast = sizeBytes !== null && sizeBytes >= BCn * capBytes,
    a = Ut(capBytes),
    w = sizeBytes === null || Ut(sizeBytes) === a ? "more than" : `${atLeast ? "at least " : ""}${Ut(sizeBytes)}, more than`;
  return {
    reason: "too_large",
    what: what,
    capBytes: capBytes,
    sizeBytes: sizeBytes,
    atLeast: atLeast,
    line: what === "uncommitted_files" ? `This project directory's changed and untracked files come to more than the ${a} that one file-sync upload carries. List the large untracked files that the session does not need in .gitignore.` : `This project directory's history and files pack to ${w} the ${a} that one file-sync upload carries.`
  };
}
function E(during, r) {
  let n = C(Math.max(1, Math.round(r / 1000)), "second", "seconds");
  return {
    reason: "timed_out",
    during: during,
    line: during === "build" ? `Preparing this project directory's first upload took longer than the ${n} allowed.` : `This project directory's files were still busy when the ${n} for preparing its first upload ran out; another cloud session was syncing it, or its files kept changing while they were read. Let that finish.`
  };
}
function N(why_2, line) {
  return {
    reason: "layout_refused",
    why: why_2,
    line: line
  };
}
function se(layoutRead, r) {
  switch (layoutRead.kind) {
    case "read":
      return layoutRead.layout.checkout !== "linked" || r ? {
        kind: "served",
        layoutRead: layoutRead
      } : T("linked_worktree");
    case "failed":
      return f(layoutRead.why === "settings_unreadable" ? q() : layoutRead.why === "git_not_found" ? layoutRead.withinReach ? {
        reason: "git_error",
        why: "git_within_reach",
        line: `git was found only in directories that cloud sessions on this machine can write to, so it was not run. Install git somewhere they cannot write to \u2014 outside this project directory, outside their temporary directories, and outside your home directory when git tracks your home or a folder above it \u2014 make sure that directory is on PATH as an absolute path, and restart Claude Code.${Git()}`
      } : {
        reason: "git_error",
        why: "git_not_found",
        line: `git was not found on the PATH this process started with. Install git, or add its directory to PATH, and restart Claude Code.${Git()}`
      } : layoutRead.why === "changed_under_read" ? N("unreadable", "This worktree's git files, in its main project's .git directory, changed while they were being read. Try again; if it keeps happening, check what else is changing that .git directory.") : N("unreadable", "This project directory's .git directory could not be read (details are in the debug log). Run git status here to see git's error."));
    case "tampered":
      switch (layoutRead.misplaced) {
        case "git_dir":
        case "common_dir":
          return f(N("git_dir_elsewhere", "git locates this project directory's data somewhere other than its own .git directory, which git never does by itself. Check the .git directory for a commondir file or other changes you did not make."));
        case "temp_root":
          return f(N("tampered", "This project directory stands under a temporary directory that cloud sessions on this machine can write to, so nothing in it is read. Start from the project directory at its ordinary location instead."));
        case "git_file":
        case "linked_worktree":
        case "work_tree":
        case "included_config":
        case "many_includes":
        case "old_git":
        case "borrowed_objects":
        case "reftable":
          return T("unsupported_layout");
      }
  }
}
var ne = "is covered by your Read rules or sandbox read-deny settings, is named like a credential, or is linked from your Claude Code configuration",
  oe = "are covered by your Read rules or sandbox read-deny settings, are named like credentials, or are linked from your Claude Code configuration";
function ae(e) {
  return `committed here while the upload was being prepared. Amend or reset the commit or commits that added ${I(e, "it", "them")}; deleting ${I(e, "it", "them")} in a later commit is not enough.`;
}
function y(e, line_2, count = null) {
  return {
    reason: "unreadable",
    cause: e === void 0 || e.kind === "forged_paths" || e.kind === "tampered_objects" || e.kind === "boundary_moved" || e.kind === "store_moved" || e.kind === "git_dir_moved" ? "other" : e.kind,
    count: count,
    line: line_2
  };
}
function Se(e) {
  switch (e.kind) {
    case "root_linked":
      return `This project directory is linked from your Claude Code configuration (through ${e.link}), so its files are part of that configuration and cannot go to a cloud session with file sync. Remove that link and run claude --cloud again.`;
    case "inside_home":
      return `This project directory is your Claude Code configuration folder (${e.home}) or lies inside it, so its files cannot go to a cloud session with file sync. Run claude --cloud from a directory outside it.`;
    case "unexamined":
      switch (e.why) {
        case "too_many":
          return `Your Claude Code configuration holds or links to more entries than file sync can check for links into this project directory (counting stopped under ${e.at}), so its files cannot go to a cloud session with file sync. Remove entries or links you no longer need from your configuration folder and run claude --cloud again.`;
        case "unreadable":
          return `The path ${e.at} could not be read or resolved, so whether your Claude Code configuration links into this project directory is unknown and its files cannot go to a cloud session with file sync. Make that path readable and run claude --cloud again.`;
        case "on_share":
          return `The link ${e.at}, reached from your Claude Code configuration, points to a network share outside your home directory, so whether it leads back into this project directory is unknown and its files cannot go to a cloud session with file sync. Remove that link, or point it somewhere under your home directory, and run claude --cloud again.`;
      }
  }
}
function Ce(e) {
  switch (e?.kind) {
    case "rules_unreadable":
      return y(e, "Your Read rules or sandbox settings could not be read, so no file here can be checked against them. Fix the settings file that has errors; /status lists it when it is one this session loads, otherwise check your own ~/.claude/settings.json.");
    case "staged_protected":
      return y(e, `${C(e.count, "staged file", "staged files")} ${I(e.count, ne, oe)}. Unstage ${I(e.count, "it", "them")} (git rm --cached, or git restore --staged once the branch has a commit).`, e.count);
    case "committed_protected":
      return y(e, `${C(e.count, "file that", "files that")} ${I(e.count, ne, oe)}, ${I(e.count, "was", "were")} ${ae(e.count)}`, e.count);
    case "credential_named":
      return y(e, `${C(e.count, "file with a credential-like name was", "files with credential-like names were")} ${ae(e.count)}`, e.count);
    case "unreadable_path":
      return y(e, "A changed file in this project directory, or a git attributes file, cannot be copied for upload; it is not a plain file or link, was replaced while being read, or its name is too long or matches another changed file's except in case or accents. The debug log says which; fix, rename or remove it.");
    case "path_encoding":
      return y(e, "A symbolic link in this project directory points at a name that is not valid UTF-8, so it cannot be carried unchanged (the debug log names it). Remove or re-create that link.");
    case "info_attributes":
      return y(e, "This project directory's .git/info/attributes has a line file sync cannot vouch for (a filter or encoding rule, an attribute macro, or a quoted pattern), or it cannot be read as a plain file. Move that line into a .gitattributes file or remove it; if the file cannot be read, fix or remove the file.");
    case "host_config":
      return y(e, Se(e.ground));
    case "attribute_source":
      return y(e, keo(e.source));
    case "admin_dir":
      return y(e, "File sync's private git directory for this working tree could not be made (the debug log says why).");
    case "tampered":
      return y(e, "An object in this project directory's .git holds something other than what its name vouches for, which git itself never writes (git fsck here names it). Remove whatever put it there, or clone the project again into a fresh directory, then start the cloud session there.");
    case "legacy_tree":
      return y(e, "This project directory's history holds a directory tree in a form git reads but does not itself write (an old tool made it; git fsck here names it), and file sync cannot carry it as it is.");
    case "forged_paths":
    case "tampered_objects":
    case "boundary_moved":
    case "store_moved":
    case "git_dir_moved":
    case void 0:
      return y(e, "Some files in this project directory cannot be carried by file sync as they are (the debug log names them).");
  }
}
function de(e) {
  switch (e.reason) {
    case "busy":
    case "momentary":
      return "busy";
    case "aborted":
      return "gave_up";
    case "unborn":
      return Fe();
    case "unmerged_index":
      return {
        reason: "unresolved_conflicts",
        line: "This project directory has unresolved merge conflicts. Resolve them, or abort the operation that left them."
      };
    case "mid_operation":
      return {
        reason: "mid_operation",
        line: "A merge, rebase, cherry-pick, revert or bisect is unfinished in this project directory. Finish or abort it."
      };
    case "too_large":
      return V("uncommitted_files", _Oe, null);
    case "too_many_paths":
      return {
        reason: "too_many_files",
        line: "This project directory has more changed and untracked files than file sync can list. Commit your changes, or list the untracked files that the session does not need in .gitignore."
      };
    case "unreadable":
      return Ce(e.cause);
    case "floor_gone":
    case "start_gone":
    case "anchor_unavailable":
    case "too_many_attribute_states":
    case "attributes_gone":
    case "git_error":
    case "basis_not_held":
      return e.cause?.kind === "forged_paths" ? {
        reason: "forged_paths",
        count: e.cause.count,
        line: `${C(e.cause.count, "changed file is listed under a name", "changed files are listed under names")} that git itself never writes. Run git status here and look for files you do not recognize.`
      } : b();
  }
}
var Pe = {
  credential_named: ["file with a credential-like name", "files with a credential-like name"],
  configuration_linked: ["file linked from your Claude Code configuration", "files linked from your Claude Code configuration"],
  read_denied: ["file denied by a Read rule or a sandbox read-deny setting", "files denied by a Read rule or a sandbox read-deny setting"],
  filter_attributed: ["file kept by a git filter such as LFS", "files kept by a git filter such as LFS"],
  hard_linked: ["file with more than one hard link", "files with more than one hard link"],
  changed_during_read: ["file that changed while it was being read", "files that changed while they were being read"],
  not_a_file: ["entry that is not a file (a nested repository or directory)", "entries that are not files (nested repositories or directories)"],
  name_not_utf8: ["file with a name that is not valid UTF-8", "files with a name that is not valid UTF-8"]
};
function withheldNotice(e) {
  let r = [...e].flatMap(([s, a]) => s === "missing_uploaded_as_deleted" || a <= 0 ? [] : [C(a, ...Pe[s])]),
    n = e.get("missing_uploaded_as_deleted") ?? 0,
    p = [r.length > 0 && `Left on this machine: the current contents of ${r.join(", ")}; the session starts with the version git already holds for each, or without it.`, n > 0 && `${C(n, "tracked file was", "tracked files were")} missing when read and ${I(n, "is", "are")} uploaded as deleted.`].filter(item => item !== !1);
  return p.length > 0 ? p.join(" ") : null;
}
var ce = mAr,
  Ae = 1000,
  Le = 5000,
  $e = 3600000,
  je = 20,
  Oe = /^pending-([0-9a-z]{1,10})-[0-9a-f]{16}$/,
  De = "tengu_dir_sync_first_upload_build";
function Me(e) {
  let r = Oe.exec(e)?.[1];
  return r === void 0 ? null : parseInt(r, 36);
}
async function Be(e, r) {
  let n = await Sn(e, ["for-each-ref", "--format=%(refname)", vR]);
  if (n.exitCode !== 0) return;
  await L(n.stdout.split(`
`).map(item => Ze(item.slice(vR.length), "/"))).flatMap(s => {
    let builtAtMs = Me(s);
    return builtAtMs !== null && r - builtAtMs > $e ? [{
      token: s,
      builtAtMs: builtAtMs
    }] : [];
  }).sort((itemA, itemB) => itemA.builtAtMs - itemB.builtAtMs).slice(0, je).reduce((acc, {
    token: token
  }) => acc.then(() => Kir(e, token)).then(() => {}), Promise.resolve());
}
async function discard(e) {
  await Twt(e.sideGitDir, e.gitRoot, e.token);
}
function Ne(e) {
  let {
      withheld: withheld
    } = e,
    n = [["credential_named", withheld.credentialNamed.length], ["configuration_linked", withheld.hostConfig.length], ["read_denied", withheld.readDenied.length], ["filter_attributed", withheld.filterAttributed.length], ["hard_linked", withheld.hardLinked.length], ["changed_during_read", withheld.changedDuringRead?.length ?? 0], ["not_a_file", withheld.notFiles.length], ["name_not_utf8", withheld.unspellable?.length ?? 0], ["missing_uploaded_as_deleted", e.stats.gone ?? 0]];
  return new Map(n.filter(([, p]) => p > 0));
}
async function Ge(gitRoot, r, n) {
  if (!M3()) return T("engine_declined");
  if (!ts() || !(await s4e(gitRoot, r))) return T("consent_off");
  let p = Lo(gitRoot);
  if (son({
    isMonorepo: p !== null && Pan(p),
    gitRoot: gitRoot,
    gitUsable: !0
  }).engine !== "git") return T("engine_not_planned");
  let a = await fge(gitRoot, n, {
    linkedTrees: !0
  });
  if (a.kind !== "read") t(`[checkoutFirstUpload] layout ${a.kind}: ${a.kind === "failed" ? a.detail : a.misplaced}`);
  return se(a, lge());
}
async function Ie(e) {
  let r = s => (t(`[checkoutFirstUpload] ${s}`), e.signal.aborted ? {
      kind: "gave_up"
    } : f(b())),
    n = await e.push.pinForPass().catch(() => null);
  if (n === null || n.kind === "refused") return r(n?.detail ?? "the shallow boundary could not be pinned");
  let p = n.kind === "pinned" ? n.repository : e.push;
  try {
    let shallowFile = p.snapshotPin.shallowFile;
    if (shallowFile !== void 0) {
      let h = await kwt(shallowFile);
      if (h.kind === "irregular" || h.kind === "no_git_dir") return r(`the pinned shallow file is irregular (${h.kind === "irregular" ? h.why : "not under a directory"})`);
      if (h.kind === "boundary" && h.bytes.toString().trim() !== "") return f(G("shallow"));
    }
    let treeReadAtMs = e.now(),
      w = await e.snapshot({
        basis: null,
        signal: e.signal,
        refuseUnmerged: !0,
        ...p.snapshotPin
      });
    if (w.kind === "refused") {
      t(`[checkoutFirstUpload] snapshot refused (${w.reason}): ${w.detail}`);
      let kind = de(w);
      return typeof kind === "string" ? {
        kind: kind
      } : f(kind);
    }
    let {
        snapshot: snapshot
      } = w,
      [indexTree, worktreeTree] = (await p.readTrees([snapshot.indexCommit, snapshot.worktreeCommit])) ?? [];
    if (indexTree === void 0 || worktreeTree === void 0) return r("the snapshot commits have no readable trees");
    let R = (await p.readParents?.(snapshot.head)) ?? null,
      headParents = R === null ? null : L(R.filter(item => rn.test(item) && TB(item))).slice(0, DCn);
    if (!(await p.writeRefs([{
      name: e.tipRef,
      id: snapshot.worktreeCommit
    }]))) return r("the provisional ref could not be written");
    if (n.kind === "pinned" && !(await n.unchanged())) return {
      kind: "busy"
    };
    let m = await V4t(p, {
      tips: [e.tipRef],
      prerequisites: [],
      maxBytes: e.maxBytes,
      declareForkPoints: !0
    });
    if ("kind" in m) return m.reason === "busy" ? {
      kind: "busy"
    } : r(m.detail);
    if (!m.ok) switch (m.reason) {
      case "too_large":
        return f(V("history_and_files", e.maxBytes, m.sizeBytes));
      case "aborted":
        return {
          kind: "gave_up"
        };
      case "nothing_to_send":
      case "prerequisites_missing":
      case "too_many_prerequisites":
      case "git_error":
        return r(`the bundle could not be made (${m.reason})`);
    }
    let [P, ...u] = m.refs;
    if (P === void 0 || u.length > 0) return r("the bundle does not carry exactly the provisional ref");
    let position = snapshot.branch !== null && kk(snapshot.branch) ? {
      kind: "branch",
      name: snapshot.branch
    } : {
      kind: "detached"
    };
    return {
      kind: "built",
      firstUpload: {
        token: e.token,
        gitRoot: e.gitRoot,
        sideGitDir: e.sideGitDir,
        snapshot: {
          head: snapshot.head,
          headParents: headParents,
          indexCommit: snapshot.indexCommit,
          worktreeCommit: snapshot.worktreeCommit,
          indexTree: indexTree,
          worktreeTree: worktreeTree,
          position: position
        },
        bundle: {
          content: m.content,
          sha256: m.sha256,
          sizeBytes: m.sizeBytes,
          tipRef: P.name,
          prerequisites: m.prerequisites,
          commitCount: m.commitCount
        },
        treeReadAtMs: treeReadAtMs,
        ...(e.servedLinked !== void 0 && {
          servedLinked: e.servedLinked
        })
      },
      sizeBytes: m.sizeBytes,
      headAtCreate: snapshot.head,
      position: position,
      withheld: Ne(snapshot)
    };
  } catch (error) {
    return d(error), r(l(error));
  } finally {
    if (n.kind === "pinned") await n.release().catch(() => {});
  }
}
async function fe(e, attempts = 1) {
  let tried = await Ie(e);
  if (tried.kind !== "busy" || e.signal.aborted) return {
    tried: tried,
    attempts: attempts
  };
  return await Q(Ae, e.signal), e.signal.aborted ? {
    tried: tried,
    attempts: attempts
  } : fe(e, attempts + 1);
}
function He(e) {
  return {
    reason: "unreadable",
    cause: "other",
    count: null,
    line: `A symbolic link stands ${e === void 0 ? "" : `at .git/${e} `}in the repository behind this working tree, where git never makes one. Remove it, then run claude --cloud again.`
  };
}
function We(e) {
  if (e.kind === "unreadable") return q();
  return {
    reason: "unreadable",
    cause: "repository_steered",
    count: null,
    line: e.kind === "names" ? `A settings file inside this repository sets ${e.name}, which file sync's git in this working tree would have to obey. Remove it, or move it to your user settings if you set it, then run claude --cloud again.` : `${e.name} was changed by a settings file inside this repository after start-up and still applies, though the file no longer sets it. Run claude --cloud again.`
  };
}
function ze(e) {
  switch (e.reason) {
    case "too_large":
      return e.what;
    case "shallow_or_partial":
      return e.which;
    case "layout_refused":
      return e.why;
    case "unreadable":
      return e.cause;
    case "git_error":
      return e.why;
    case "timed_out":
      return e.during;
    case "too_many_files":
    case "forged_paths":
    case "unborn":
    case "unresolved_conflicts":
    case "mid_operation":
      return;
  }
}
async function ship({
  gitRoot: e,
  signal: signal,
  onProgress: onProgress,
  maxBytes = $H,
  deadlineMs = ce,
  now = Date.now,
  storageV5: storageV5,
  hostConsent: hostConsent,
  snapshotPort = R => R,
  deadlineSignal = R => AbortSignal.timeout(R)
}) {
  let R = now(),
    k = Number.isFinite(deadlineMs) && deadlineMs > 0 ? Math.ceil(deadlineMs) : ce,
    m = !1,
    P = o => {
      try {
        onProgress?.(o);
      } catch (error) {
        d(error);
      }
    },
    u = (o, attempts_2 = 0) => {
      if (i(De, {
        outcome: c(o.kind),
        build_ms: now() - R,
        attempts: attempts_2,
        ...(o.kind === "built" && {
          bundle_bytes: o.sizeBytes,
          commit_count: o.firstUpload.bundle.commitCount,
          withheld: [...o.withheld].filter(([v]) => v !== "missing_uploaded_as_deleted").reduce((acc, [, F]) => acc + F, 0),
          missing_uploaded_as_deleted: o.withheld.get("missing_uploaded_as_deleted") ?? 0,
          detached: o.position.kind === "detached"
        }),
        ...(o.kind === "refused" && {
          reason: c(o.refusal.reason),
          sub_reason: ue(ze(o.refusal))
        }),
        ...(o.kind === "not_served" && {
          not_served_why: c(o.why)
        })
      }), o.kind === "built") P({
        kind: "bundled",
        sizeBytes: o.sizeBytes,
        scope: o.position.kind === "branch" ? "current_branch" : "head"
      });else if (o.kind === "refused" && m) P({
        kind: "bundle_failed",
        fallback: null
      });
      return o;
    };
  try {
    if (signal.aborted) return u({
      kind: "aborted"
    });
    let o = deadlineSignal(k),
      signal_2 = AbortSignal.any([signal, o]),
      v = () => signal.aborted ? {
        kind: "aborted"
      } : o.aborted ? f(E("build", k)) : null,
      F = await Ge(e, hostConsent, signal_2);
    if (signal.aborted) return u({
      kind: "aborted"
    });
    if (F.kind === "not_served") return u(F);
    if (P({
      kind: "bundling",
      rerouted: !1
    }), m = !0, o.aborted) return u(f(E("build", k)));
    if (F.kind === "refused") return u(F);
    let {
        layoutRead: layoutRead_2
      } = F,
      [{
        absoluteCommonDir: absoluteCommonDir,
        adminDirFailureStands: adminDirFailureStands,
        adminDirLine: adminDirLine,
        checkoutShallowFileOf: checkoutShallowFileOf,
        packStoreLookOf: packStoreLookOf,
        productionSnapshotPort: productionSnapshotPort
      }, {
        gitPushRepository: gitPushRepository,
        OUTBOUND_REF_FAMILY: OUTBOUND_REF_FAMILY
      }] = await Promise.all([import("B:/~BUN/root/chunk-nbbnw10z.js"), import("B:/~BUN/root/chunk-csjdzve3.js")]),
      probes = new xV("operation"),
      W = layoutRead_2.layout.checkout === "linked",
      z = W ? kee(layoutRead_2.layout) : null;
    if (z !== null) return t(`[checkoutFirstUpload] the repository's settings steer git (${z.kind})`), u(f(We(z)));
    let [Y, S, realRoot, ve] = await Promise.all([Lu(e, ["config", "-z", "--list"], {
        hardened: !0,
        layout: layoutRead_2.layout,
        signal: signal_2,
        probes: probes
      }), kwt(Ee(absoluteCommonDir(e, layoutRead_2.layout.commonDir), "shallow")), Te(e).catch(() => null), Ru(e, Cg(storageV5))]),
      X = v();
    if (X !== null) return u(X);
    if (Y.code !== 0) return t(`[checkoutFirstUpload] the configuration could not be listed (exit ${Y.code})`), u(f(b()));
    if (f4e(Y.stdout)) return u(f(G("partial")));
    if (S.kind === "boundary" && S.bytes.toString().trim() !== "") return u(f(G("shallow")));
    if (S.kind === "irregular" || S.kind === "no_git_dir" || realRoot === null) return t(`[checkoutFirstUpload] ${S.kind === "irregular" || S.kind === "no_git_dir" ? KWe(S) : "the checkout could not be resolved on disk"}`), u(f(b()));
    await using U = W ? await xEe(e, layoutRead_2.layout, signal_2, probes) : void 0;
    let J = v();
    if (J !== null) return u(J);
    if (U !== void 0 && U.kind !== "made") return t(`[checkoutFirstUpload] no private git directory for the HEAD probe (${U.detail})`), u(adminDirFailureStands(U) ? f({
      reason: "unreadable",
      cause: "admin_dir",
      count: null,
      line: `${Xd(adminDirLine(U.detail))}.`
    }) : f(b()));
    if (U !== void 0) {
      if (await Jit(e, layoutRead_2.layout)) return t("[checkoutFirstUpload] a link planted in the repository behind this working tree; nothing is built"), u(f(He(Bon(e))));
      if (!(await hw({
        ...layoutRead_2.layout,
        storeStamps: void 0
      }, []))) return t("[checkoutFirstUpload] the repository no longer reads as the layout that was vouched for"), u(f(b()));
      let ie = v();
      if (ie !== null) return u(ie);
    }
    let A = await PV(e, U === void 0 ? layoutRead_2.layout : {
        ...layoutRead_2.layout,
        adminDir: U.path
      }, signal_2, void 0, probes)(["rev-parse", "-q", "--verify", "HEAD^{commit}"]),
      Z = v();
    if (Z !== null) return u(Z);
    if (A.code !== 0 && A.exitCode !== 1) return t(`[checkoutFirstUpload] HEAD could not be read (exit ${A.code})`), u(f(b()));
    let pinCommit = A.code === 0 ? A.stdout.trim() : null,
      M = Y4t(gu(ve)),
      token_2 = `pending-${Math.trunc(now()).toString(36)}-${xe(8).toString("hex")}`,
      tipRef = pl(token_2, `${OUTBOUND_REF_FAMILY}/1`);
    if (tipRef === null) return t(`[checkoutFirstUpload] the provisional token makes no ref name (${token_2})`), u(f(b()));
    let te = {
      gitDir: M,
      sessionRoot: e,
      timeoutMs: k
    };
    await Be({
      ...te,
      signal: signal_2
    }, now());
    let re = v();
    if (re !== null) return u(re);
    let {
      tried: tried_2,
      attempts: attempts_3
    } = await fe({
      gitRoot: e,
      sideGitDir: M,
      servedLinked: W ? Lon(layoutRead_2.layout) : void 0,
      token: token_2,
      tipRef: tipRef,
      push: gitPushRepository({
        ...te,
        checkoutShallowFile: checkoutShallowFileOf(e, async () => layoutRead_2),
        storeLook: packStoreLookOf(e, async () => layoutRead_2)
      }).withSignal(signal_2),
      snapshot: snapshotPort(productionSnapshotPort({
        gitRoot: e,
        realRoot: realRoot,
        sideGitDir: M,
        pinCommit: pinCommit,
        budgetMs: k
      })),
      maxBytes: maxBytes,
      signal: signal_2,
      now: now
    });
    if (tried_2.kind === "built" && !signal.aborted) return u({
      ...tried_2,
      buildMs: now() - R
    }, attempts_3);
    if (await Twt(M, e, token_2, signal_2.aborted ? Le : EU), signal.aborted || tried_2.kind === "built") return u({
      kind: "aborted"
    }, attempts_3);
    switch (tried_2.kind) {
      case "refused":
        return u(o.aborted && tried_2.refusal.reason === "git_error" ? f(E("build", k)) : tried_2, attempts_3);
      case "busy":
        return u(f(E("waiting_for_busy_files", k)), attempts_3);
      case "gave_up":
        if (!o.aborted) t("[checkoutFirstUpload] a pass gave up though no signal had fired");
        return u(f(o.aborted ? E("build", k) : b()), attempts_3);
    }
  } catch (error) {
    if (signal.aborted) return u({
      kind: "aborted"
    });
    return d(error), u(f(b()));
  }
}
var dXn = {
  ship: ship,
  discard: discard,
  withheldNotice: withheldNotice,
  markNeverFilled: markNeverFilled
};
export { dXn };