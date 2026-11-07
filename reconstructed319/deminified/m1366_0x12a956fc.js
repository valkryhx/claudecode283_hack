// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f, de, ka } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ak } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { En } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ee, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P, Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Pt, Qu, bM } from "B:/~BUN/root/chunk-1g25msn4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { yn, fS, ys } from "B:/~BUN/root/chunk-88zb3509.js";
import { FSt, dnt, ut } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { fo, Sxe } from "B:/~BUN/root/chunk-46ahshhq.js";
import { xT } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { id } from "B:/~BUN/root/chunk-65j2302z.js";
import { VJ } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { sG, TT } from "B:/~BUN/root/chunk-1x03q1j7.js";
import { dp } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { kLn } from "B:/~BUN/root/chunk-jmka9ye7.js";
import { dh } from "B:/~BUN/root/chunk-rc0vwsyy.js";
import { _Xe } from "B:/~BUN/root/chunk-vyjvp8sa.js";
import { uer, Lai } from "B:/~BUN/root/chunk-m0fq8z84.js";
import { FI } from "B:/~BUN/root/chunk-jypg1bby.js";
import { Zdr, cje, NMe, r8e, FMe, KB } from "B:/~BUN/root/chunk-27h4st9h.js";
import { hAr } from "B:/~BUN/root/chunk-4tp5kqnx.js";
import { hTe, mce, _q, QPi, HWe, CJt, Xcs, ZPi, eOi, L$, nOi, vMt, RJt, TMt } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { ADt } from "B:/~BUN/root/chunk-4tz0m6qq.js";
import { qmr, Qmr, OIt } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { G6o } from "B:/~BUN/root/chunk-617fgfmh.js";
import { Nai } from "B:/~BUN/root/chunk-20mmppss.js";
import { fer, per, mer } from "B:/~BUN/root/chunk-r99fy052.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { homedir as le } from "os";
import { resolve as ne } from "path";
var mergeBaseSha = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
var r6r = `
Note: --post was ignored \u2014 posting applies only to GitHub.com pull request reviews.`,
  o6r = `
Note: --post was ignored \u2014 posting findings to the PR is currently turned off.`;
function nSn(r) {
  let e = d => String.raw`--fix|--comment|--post|--no-post|--max-findings(?:\s*=\s*(?!--)\S*|\s*=\S*|\s+${d})?`,
    regExp = new RegExp(`^(${e(String.raw`(?!--)\S+`)})(?:\\s+|$)`),
    regExp_2 = new RegExp(`(?:^|\\s+)(${e(String.raw`(?:\d+|[Aa][Ll][Ll]|[Dd][Ee][Ff][Aa][Uu][Ll][Tt])`)})$`),
    n = new Set(),
    scopeArgs = r.trim();
  for (;;) {
    let d = scopeArgs.match(regExp);
    if (!d) break;
    n.add(d[1]), scopeArgs = scopeArgs.slice(d[0].length);
  }
  for (;;) {
    let d = scopeArgs.match(regExp_2);
    if (!d) break;
    n.add(d[1]), scopeArgs = scopeArgs.slice(0, scopeArgs.length - d[0].length);
  }
  return {
    scopeArgs: scopeArgs,
    applyFixes: n.has("--fix"),
    postReview: n.has("--no-post") ? !1 : n.has("--post") ? !0 : void 0
  };
}
async function s6r(r, e = "/code-review ultra", _) {
  if (!(await RJt())) return l("tengu_review_remote_precondition_failed", {
    reason: b("not_git_repo"),
    cwd_is_home: O()
  }), {
    ok: !1,
    reason: "not_git_repo",
    error: ae(e, _?.confirmsBeforeLaunch !== !0)
  };
  let t = r.trim(),
    n = TMt(t),
    prNumber = n?.num.toString() ?? t.match(/^(?:#|PR[\s#]*)(\d+)$/i)?.[1] ?? t;
  if (/^\d+$/.test(prNumber)) {
    let o = S => {
        if (S === "succeeded" && _?.suppressSucceededRecoveryEvent) return;
        if (prNumber !== t) l("tengu_review_remote_precondition_recovery", {
          reason: b("base_ref_not_found"),
          method: b("pr_arg_normalization"),
          outcome: f(S)
        });
      },
      u = await TT(),
      a = u && sG(u) ? null : u,
      k = Sxe(n?.host, a?.host) || !!n && !!a && fo(n.host) && fo(a.host);
    if (n && (!k || n.owner.toLowerCase() !== a?.owner.toLowerCase() || n.repo.toLowerCase() !== a?.name.toLowerCase())) {
      l("tengu_review_remote_precondition_failed", {
        reason: b("pr_url_wrong_repo"),
        has_remote: !!a,
        cwd_is_home: O()
      }), o("failed");
      let S = `${n.owner}/${n.repo} on ${n.host}`,
        D = a ? `you're in ${a.owner}/${a.name} on ${a.host}` : "this directory has no GitHub remote";
      return {
        ok: !1,
        reason: "pr_url_wrong_repo",
        error: `That link is for ${S}, but ${D}. cd into a checkout of that repo and run ${e} ${n.num} from there.`
      };
    }
    if (!a) return l("tengu_review_remote_precondition_failed", {
      reason: b("no_github_remote"),
      cwd_is_home: O()
    }), o("failed"), {
      ok: !1,
      reason: "no_github_remote",
      error: `${e} <PR#> needs a GitHub remote so it knows which repository the PR is in. ${ADt} If a GitHub repo already exists, run \`git remote add origin REPO_URL\`. Or run ${e} with no argument to review your current branch instead.`
    };
    if (hAr(a)) return l("tengu_review_remote_precondition_failed", {
      reason: b("monorepo_blocked"),
      cwd_is_home: O()
    }), o("failed"), {
      ok: !1,
      reason: "monorepo_blocked",
      error: `${e} doesn't support pull requests in this repository. Run /code-review ${prNumber}${e.startsWith("/") ? "" : " in Claude Code"} for a local review instead.`
    };
    let diffFiles,
      diffLines,
      [{
        stdout: stdout,
        code: code
      }, E] = await Promise.all([ut("gh", ["pr", "view", prNumber, "--repo", `${a.host}/${a.owner}/${a.name}`, "--json", "additions,deletions,changedFiles"], {
        timeout: 5000,
        preserveOutputOnError: !1
      }), fo(a.host) && ZPi() && !St() ? mer(a.owner, a.name, _?.accessProbeBudgetMs) : null]);
    if (E && !_?.suppressOfferedRecoveryEvent) l("tengu_review_remote_github_access_probe", {
      verdict: f(E.verdict),
      http_status: E.httpStatus ?? void 0
    });
    if (E?.verdict === "github_not_connected" || E?.verdict === "github_repo_not_found") {
      l("tengu_review_remote_precondition_failed", {
        reason: f(E.verdict),
        cwd_is_home: O()
      }), o("failed");
      let webSetupHint = _Xe() ? `run /web-setup${e.startsWith("/") ? "" : " in Claude Code"} to reuse your GitHub CLI login` : "",
        rerun = `then re-run ${e} ${prNumber}`;
      return {
        ok: !1,
        reason: E.verdict,
        error: E.verdict === "github_not_connected" ? fer({
          subject: `Ultrareview clones ${a.owner}/${a.name} in the cloud`,
          webSetupHint: webSetupHint,
          rerun: rerun
        }) : per({
          owner: a.owner,
          name: a.name,
          webSetupHint: webSetupHint,
          rerun: rerun,
          leadWithWebSetup: code === 0
        })
      };
    }
    if (code === 0 && stdout.trim()) try {
      let S = ee(stdout),
        {
          maxFiles: D,
          maxLines: W
        } = CJt(),
        lines = S.additions + S.deletions;
      if (Number.isFinite(S.changedFiles) && Number.isFinite(lines)) diffFiles = S.changedFiles, diffLines = lines;
      if (S.changedFiles > D || lines > W) return l("tengu_review_remote_precondition_failed", {
        reason: b("pr_diff_too_large"),
        files: S.changedFiles,
        lines: lines,
        max_files: D,
        max_lines: W,
        cwd_is_home: O()
      }), o("failed"), {
        ok: !1,
        reason: "pr_diff_too_large",
        error: `PR #${prNumber} is too large for ultrareview (${S.changedFiles} files, ${lines.toLocaleString()} lines). Split it into smaller PRs, or run \`${e}\` on a narrower local diff.`
      };
    } catch {}
    return o("succeeded"), {
      ok: !0,
      scope: {
        mode: "pr",
        prNumber: prNumber,
        repo: `${a.owner}/${a.name}`,
        host: a.host,
        hadArg: !0,
        diffFiles: diffFiles,
        diffLines: diffLines
      }
    };
  }
  let d = await G6o();
  if (d.tooLarge) return l("tengu_review_remote_precondition_failed", {
    reason: b("repo_too_large_to_bundle"),
    pack_bytes: d.sizeBytes ?? void 0,
    pack_objects: d.inPackCount ?? void 0,
    cwd_is_home: O()
  }), {
    ok: !1,
    reason: "repo_too_large_to_bundle",
    error: `Repo is too large to bundle. Push a PR and use \`${e} <PR#>\` instead.`
  };
  let y = async o => (await ut(Pt(), [...yn, "rev-parse", "--verify", "--quiet", "--end-of-options", o], {
      preserveOutputOnError: !1
    })).code === 0,
    h = /\s/.test(t),
    L = h && ((await y(`origin/${t}`)) || (await y(t))),
    F = h && !L ? t.match(/https:\/\/\S*\/pull\/\d+\b/) : null,
    B = h && !L && !F ? t.match(/(?<![\w/#-])(?:#|PR)[-\s#]*(\d+)\b/i) ?? t.match(/(?<![\w/#-])pull[\s-]+request[-\s#]*(\d+)\b/i) ?? t.match(/\/pull\/(\d+)\b/i) ?? t.match(/^(\d+)\b/) : null;
  if (F || B) {
    let o = F ? F[0] : `#${B[1]}`,
      u = F ? F[0] : B[1];
    return l("tengu_review_remote_precondition_recovery", {
      reason: b("base_ref_not_found"),
      method: b("embedded_pr_hint"),
      outcome: b("offered")
    }), l("tengu_review_remote_precondition_failed", {
      reason: b("base_ref_not_found"),
      looks_like_url: /^https?:/i.test(t),
      looks_like_sha: !1,
      starts_with_hash: t.startsWith("#"),
      has_slash: t.includes("/"),
      has_whitespace: !0,
      has_pr_ref: !0,
      has_remote: await oe(),
      cwd_is_home: O()
    }), {
      ok: !1,
      reason: "base_ref_not_found",
      error: `Your request mentions what looks like a PR reference (${o}). To review that PR, run \`${e} ${u}\`. To review your current branch instead, rerun without the PR-style reference.`
    };
  }
  let C = h && !L && !t.startsWith("-"),
    instructions = C ? t : void 0,
    p = C ? "" : t,
    Y = !1;
  if (p) {
    if (!(await y(`origin/${p}`)) && !(await y(p))) {
      let o = await me(p);
      if (o === "recovered" && (await y(`origin/${p}`))) Y = !0;else {
        if (o !== "not_found") l("tengu_review_remote_precondition_recovery", {
          reason: b("base_ref_not_found"),
          method: b("fetch_retry"),
          outcome: b("failed")
        });
        if (o === "fetch_failed") return l("tengu_review_remote_precondition_failed", {
          reason: b("base_ref_not_found"),
          looks_like_url: /^https?:/i.test(p),
          looks_like_sha: /^[0-9a-f]{7,40}$/i.test(p),
          starts_with_hash: p.startsWith("#"),
          has_slash: p.includes("/"),
          has_whitespace: /\s/.test(p),
          has_remote: await oe(),
          cwd_is_home: O()
        }), {
          ok: !1,
          reason: "base_ref_not_found",
          error: `"${p}" exists on origin but couldn't be fetched. Run \`git fetch origin ${p}\` and try ${e} again.`
        };
        let u = await he(p);
        if (u) l("tengu_review_remote_precondition_recovery", {
          reason: b("base_ref_not_found"),
          method: b("branch_suggestion"),
          outcome: b("offered")
        });
        l("tengu_review_remote_precondition_failed", {
          reason: b("base_ref_not_found"),
          looks_like_url: /^https?:/i.test(p),
          looks_like_sha: /^[0-9a-f]{7,40}$/i.test(p),
          starts_with_hash: p.startsWith("#"),
          has_slash: p.includes("/"),
          has_whitespace: /\s/.test(p),
          has_remote: await oe(),
          cwd_is_home: O()
        });
        let a = u ? ` Did you mean \`${u}\`?` : "";
        return {
          ok: !1,
          reason: "base_ref_not_found",
          error: `"${p}" is not a branch or commit in this repo.${a} ${e} takes a PR number, a base branch or commit, or no argument (reviews your current branch). Try ${e} by itself.`
        };
      }
    }
  }
  let M = o => {
      if (Y) l("tengu_review_remote_precondition_recovery", {
        reason: b("base_ref_not_found"),
        method: b("fetch_retry"),
        outcome: f(o)
      });
      if (C) {
        if (o === "succeeded" && _?.suppressSucceededRecoveryEvent) return;
        l("tengu_review_remote_precondition_recovery", {
          reason: b("base_ref_not_found"),
          method: b("prose_instructions"),
          outcome: f(o)
        });
      }
    },
    baseBranch = p || (await bM()) || "main",
    headBranch_3 = (await Qu()) || "HEAD",
    z = async o => ut(Pt(), [...yn, "merge-base", o, "HEAD"], {
      preserveOutputOnError: !1,
      env: ys()
    }),
    G = `origin/${baseBranch}`,
    {
      stdout: stdout_2,
      code: code_2
    } = await z(G);
  if (code_2 !== 0) G = baseBranch, {
    stdout: stdout_2,
    code: code_2
  } = await z(G);
  let mergeBaseSha_2 = stdout_2.trim(),
    V = o => ut(Pt(), [...yn, ...o], {
      preserveOutputOnError: !1,
      env: ys()
    }),
    error = `Your checkout has no branches (detached HEAD only), which cloud review can't bundle. Create one first \u2014 \`git checkout -b <name>\` \u2014 then rerun ${e}.`,
    re = async () => p.length > 0 || (await V(["rev-parse", "--verify", "--quiet", `origin/${baseBranch}`])).code === 0 || (await V(["rev-parse", "--verify", "--quiet", baseBranch])).code === 0,
    R = async (o, headBranch = headBranch_3) => {
      let a = o || (await re()),
        {
          stdout: stdout_3,
          code: code_3
        } = await ut(Pt(), [...yn, "diff", "--no-ext-diff", "--no-textconv", fS, "--shortstat", mergeBaseSha, "--"], {
          preserveOutputOnError: !1,
          env: ys()
        });
      if (code_3 === 0) {
        if (o && !stdout_3.trim()) return null;
        if (!stdout_3.trim()) return l("tengu_review_remote_precondition_failed", {
          reason: b("empty_diff"),
          cwd_is_home: O()
        }), M("failed"), {
          ok: !1,
          reason: "empty_diff",
          error: a ? `It doesn't look like you have any new commits or changes to review against your ${baseBranch} branch. Stage or commit them first?` : "It doesn't look like you have any changes to review. Stage or commit them first?"
        };
        let w = OIt(stdout_3),
          lines_2 = w ? w.linesAdded + w.linesRemoved : 0,
          {
            maxFiles: H,
            maxLines: E
          } = CJt();
        if (w && (w.filesCount > H || lines_2 > E)) {
          l("tengu_review_remote_precondition_failed", {
            reason: b("local_diff_too_large"),
            files: w.filesCount,
            lines: lines_2,
            max_files: H,
            max_lines: E,
            after_fallback: !0,
            cwd_is_home: O(),
            first_commit: o || void 0
          }), M("failed");
          let S = o ? `Your first commit is the base from here on: make your changes and rerun ${e} to review only those.` : a ? `Review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${e} <PR#>\`.` : `This repo has no ${baseBranch} branch \u2014 if another branch is your base, pass it explicitly (\`${e} <branch>\`). Otherwise review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${e} <PR#>\`.`;
          return {
            ok: !1,
            reason: "local_diff_too_large",
            error: `This looks like a first review of the entire repository (${stdout_3.trim()}), which exceeds ultrareview's limit. ${S}`
          };
        }
        if (!_?.suppressOfferedRecoveryEvent) l("tengu_review_remote_precondition_recovery", {
          reason: b("no_merge_base"),
          method: b("empty_tree_bundle"),
          outcome: b("offered"),
          files: w?.filesCount,
          lines: w ? lines_2 : void 0,
          is_shallow: !1,
          first_commit: o || void 0
        });
        return M("succeeded"), {
          ok: !0,
          scope: {
            mode: "branch",
            headBranch: headBranch,
            baseBranch: baseBranch,
            mergeBaseSha: mergeBaseSha,
            diffStat: stdout_3.trim(),
            hadArg: p.length > 0,
            diffFiles: w?.filesCount,
            diffLines: w ? lines_2 : void 0,
            noMergeBase: o ? "first_commit" : a ? "unrelated_history" : "base_ref_missing",
            instructions: instructions
          }
        };
      }
      return null;
    };
  if (code_2 !== 0 || !mergeBaseSha_2) {
    let head_resolves = (await V(["rev-parse", "--verify", "--quiet", "HEAD"])).code === 0,
      u = (await V(["rev-parse", "--is-shallow-repository"])).stdout.trim(),
      is_shallow = u === "true",
      k = u === "false",
      A = head_resolves && k && Xcs(),
      w = A ? await V(["for-each-ref", "--count=1", "refs/"]) : null,
      x = w !== null && w.stdout.trim() !== "",
      H = w !== null && w.code === 0 && w.stdout.trim() === "",
      E = !1;
    if (A && x) if (_?.confirmsBeforeLaunch === !0 || _?.personRanTheCommand === !0) {
      let D = await R(!1);
      if (D) return D;
    } else E = !0;
    if (l("tengu_review_remote_precondition_failed", {
      reason: b("no_merge_base"),
      cwd_is_home: O(),
      is_shallow: is_shallow,
      head_resolves: head_resolves,
      arg_was_explicit: p.length > 0,
      has_refs: x ? !0 : H ? !1 : void 0,
      whole_repository_held_back: E || void 0
    }), M("failed"), E) return {
      ok: !1,
      reason: "no_merge_base",
      error: `${(await re()) ? `${baseBranch} shares no history with your checkout` : `This repository has no ${baseBranch} branch to compare with`}, so a review here would cover every file. To review it whole, a person can run /ultrareview in an interactive Claude Code session, which asks before it spends anything.`
    };
    if (!head_resolves) return {
      ok: !1,
      reason: "no_merge_base",
      error: !_?.confirmsBeforeLaunch ? `Your current branch has no commits yet, so there is nothing to review. Commit a starting point first. ${e} then reviews the changes you make on top of that commit.` : `Your current branch has no commits yet, so there is nothing to review. Commit your work first, then rerun ${e}.`
    };
    if (is_shallow) return l("tengu_review_remote_precondition_recovery", {
      reason: b("no_merge_base"),
      method: b("deepen_hint"),
      outcome: b("offered"),
      is_shallow: !0
    }), {
      ok: !1,
      reason: "no_merge_base",
      error: p ? `Your clone is shallow and doesn't contain the point where your branch forked from ${baseBranch}. Run \`git fetch --deepen=100 origin ${baseBranch}\` (or \`git fetch --unshallow origin\`) and rerun ${e}.` : `Your clone is shallow and doesn't contain the point where your branch forked from ${baseBranch}. Run \`git fetch --unshallow origin\` and rerun ${e}. If your base branch isn't ${baseBranch}, pass it explicitly (\`${e} <branch>\`).`
    };
    if (H) return {
      ok: !1,
      reason: "no_refs",
      error: error
    };
    let S = Y ? k ? `${baseBranch} was fetched from origin but shares no history with HEAD. If another branch is your real base, pass it explicitly (\`${e} <branch>\`).` : `${baseBranch} was fetched from origin but shares no history with HEAD. Try \`git fetch --unshallow origin\` (or deepen the clone) and rerun.` : p ? `Make sure ${baseBranch} exists locally or on origin (try \`git fetch origin ${baseBranch}\`).` : `Pass the base branch explicitly (e.g. \`${e} develop\`) or make sure you're in a git repo with a ${baseBranch} branch.`;
    return {
      ok: !1,
      reason: "no_merge_base",
      error: `Could not find merge-base with ${baseBranch}. ${S}`
    };
  }
  if (p.length > 0) {
    let o = await V(["for-each-ref", "--count=1", "refs/"]);
    if (o.code === 0 && o.stdout.trim() === "") return l("tengu_review_remote_precondition_failed", {
      reason: b("no_refs"),
      cwd_is_home: O(),
      arg_was_explicit: !0
    }), M("failed"), {
      ok: !1,
      reason: "no_refs",
      error: error
    };
  }
  let {
    stdout: stdout_4,
    code: code_4
  } = await qmr(ie().cwd(), [...yn, "diff", "--no-ext-diff", "--no-textconv", fS, "--shortstat", mergeBaseSha_2, "--"], {
    LC_ALL: "C"
  }, {
    preserveOutputOnError: !1
  });
  if (code_4 === 0 && !stdout_4.trim()) {
    let o = await ce(mergeBaseSha_2, baseBranch),
      headBranch_2 = o.headBranch,
      a = o.headAtMergeBase === !0 && o.headIsRoot === !0 && o.untrackedCount === 0 && Xcs() && (await V(["rev-parse", "--is-shallow-repository"])).stdout.trim() === "false" && (await V(["rev-parse", "--verify", "--quiet", "--end-of-options", `${G}^{commit}`])).stdout.trim() === mergeBaseSha_2,
      k = a && _?.confirmsBeforeLaunch !== !0;
    if (a && !k) {
      let W = await R(!0, headBranch_2);
      if (W) return W;
    }
    l("tengu_review_remote_precondition_failed", {
      reason: b("empty_diff"),
      used_origin_ref: G !== baseBranch,
      had_explicit_base: p.length > 0,
      cwd_is_home: O(),
      on_base_branch: o.onBaseBranch,
      head_at_merge_base: o.headAtMergeBase,
      first_commit_held_back: k || void 0,
      has_untracked: o.untrackedCount === void 0 ? void 0 : o.untrackedCount > 0
    }), M("failed");
    let A = p ? `try a different base, e.g. \`${e} <branch>\`` : `pass one explicitly, e.g. \`${e} <branch>\``,
      w = `${G} (merge-base ${mergeBaseSha_2.slice(0, 7)})`,
      x = "no staged or unstaged edits to tracked files",
      H,
      E;
    if (o.headAtMergeBase && headBranch_2 && o.onBaseBranch) {
      let W = `If your work is on another branch, switch to it, or if the base should be something else, ${A}.`;
      if (G === headBranch_2) H = `you're on ${headBranch_2}, which is also the base of this review, and it has ${x}`, E = `Everything already committed on ${headBranch_2} counts as the base here, so only edits you haven't committed yet would be reviewed. ${W}`;else H = `you're on ${headBranch_2}, which is also the base of this review, and it has no commits beyond ${w} and ${x}`, E = W;
    } else if (o.headAtMergeBase && headBranch_2 === "HEAD") H = `the commit you have checked out is already part of ${w}, and there are ${x}`, E = `If your work is on a branch, switch to it. If you meant a different base, ${A}.`;else if (o.headAtMergeBase && headBranch_2) H = `${headBranch_2} has no commits beyond ${w} and ${x}`, E = `If your work is on another branch, switch to it. If this branch was already merged or you meant a different base, ${A}.`;else H = `the diff against ${w} is empty`, E = `If you have local edits, stage or commit them first. If your branch was already merged or you meant a different base, ${A}.`;
    let S = "";
    if (o.headAtMergeBase && o.parentSha) {
      let W = o.parentSha.slice(0, 12),
        X = /^\d+$/.test(W) ? o.parentSha : W;
      l("tengu_review_remote_precondition_recovery", {
        reason: b("empty_diff"),
        method: b("last_commit_hint"),
        outcome: b("offered")
      }), S = ` To review your latest commit anyway, run \`${e} ${X}\`. That id is the commit before it, and any earlier commit id or tag works the same way.`;
    }
    let D = k ? " To review this first commit whole, run /ultrareview in an interactive Claude Code session, which asks before it spends anything." : "";
    return {
      ok: !1,
      reason: "empty_diff",
      error: `No changes to review: ${H}.${ue(o.untrackedCount, e)} ${E}${S}${D}`
    };
  }
  let N = OIt(stdout_4);
  if (N) {
    let {
        maxFiles: o,
        maxLines: u
      } = CJt(),
      lines_3 = N.linesAdded + N.linesRemoved;
    if (N.filesCount > o || lines_3 > u) {
      l("tengu_review_remote_precondition_failed", {
        reason: b("local_diff_too_large"),
        files: N.filesCount,
        lines: lines_3,
        max_files: o,
        max_lines: u,
        cwd_is_home: O()
      }), M("failed");
      let {
          stdout: stdout_5,
          code: code_5
        } = await qmr(ie().cwd(), [...yn, "-c", "core.quotepath=false", "diff", "--no-ext-diff", "--no-textconv", fS, "--numstat", mergeBaseSha_2, "--"], {}, {
          preserveOutputOnError: !1,
          timeout: 1e4,
          maxBuffer: 10485760
        }),
        w = code_5 === 0 ? fe(stdout_5) : "";
      return {
        ok: !1,
        reason: "local_diff_too_large",
        error: `Diff is too large for ultrareview: ${N.filesCount.toLocaleString()} ${P(N.filesCount, "file")}, ${lines_3.toLocaleString()} ${P(lines_3, "line")} changed (limits: ${o.toLocaleString()} ${P(o, "file")}, ${u.toLocaleString()} ${P(u, "line")}).${w} Pass a closer base branch (\`${e} <branch>\`) to narrow the scope, or split the change.`
      };
    }
  }
  return M("succeeded"), {
    ok: !0,
    scope: {
      mode: "branch",
      headBranch: headBranch_3,
      baseBranch: baseBranch,
      mergeBaseSha: mergeBaseSha_2,
      diffStat: stdout_4.trim(),
      hadArg: p.length > 0,
      diffFiles: N?.filesCount,
      diffLines: N ? N.linesAdded + N.linesRemoved : void 0,
      instructions: instructions
    }
  };
}
async function ce(r, e) {
  let [_, t, n] = await Promise.all([ut(Pt(), [...yn, "rev-list", "--parents", "--max-count=1", "HEAD", "--"], {
      preserveOutputOnError: !1,
      env: ys()
    }), ut(Pt(), [...yn, "symbolic-ref", "--quiet", "HEAD"], {
      preserveOutputOnError: !1,
      env: ys()
    }), ut(Pt(), [...yn, "ls-files", "--others", "--exclude-standard", "--directory", "--no-empty-directory", "-z", "--", ":/"], {
      preserveOutputOnError: !1,
      timeout: 5000,
      maxBuffer: 1048576,
      env: ys({
        GIT_LITERAL_PATHSPECS: ""
      })
    })]),
    [s, d, ...y] = _.code === 0 ? _.stdout.trim().split(/\s+/) : [],
    headBranch_4 = t.exitCode === 0 ? t.stdout.trim().replace(/^refs\/heads\//, "") || void 0 : t.exitCode === 1 ? "HEAD" : void 0;
  return {
    headBranch: headBranch_4,
    onBaseBranch: headBranch_4 === void 0 ? void 0 : headBranch_4 !== "HEAD" && (headBranch_4 === e || `origin/${headBranch_4}` === e),
    headAtMergeBase: s ? s === r : void 0,
    parentSha: y.length ? void 0 : d || void 0,
    headIsRoot: s ? !d : void 0,
    untrackedCount: n.code === 0 ? U(n.stdout.split("\x00"), Boolean) : void 0
  };
}
function ue(r, e) {
  if (!r) return "";
  return ` Git also sees ${r.toLocaleString()} untracked ${P(r, "file or folder", "files or folders")} here. New files aren't part of a review until git tracks them: run \`git add\` on the ones you want reviewed, then rerun ${e}.`;
}
function fe(r, e = 3) {
  let {
      perFileStats: perFileStats
    } = Qmr(r, Number.POSITIVE_INFINITY),
    t = [...perFileStats.entries()].map(([path, d]) => ({
      path: path,
      lines: d.added + d.removed
    })).filter(item => item.lines > 0);
  if (t.length === 0) return "";
  return ` Largest files: ${t.sort((itemA, itemB) => itemB.lines - itemA.lines).slice(0, e).map(item => `${item.path} (${item.lines.toLocaleString()} ${P(item.lines, "line")})`).join(", ")}.`;
}
function rSn(r, e = 80) {
  return ct(r.replace(/\s+/g, " ").trim(), e);
}
async function me(r) {
  if (r.startsWith("-") || r.includes(":") || /\s/.test(r)) return "not_found";
  let env = {
      ...FSt(),
      GIT_SSH_COMMAND: `${i.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o StrictHostKeyChecking=yes`,
      GIT_ALLOW_PROTOCOL: "https:http:ssh"
    },
    _ = await ut(Pt(), [...yn, ...dnt, "-c", "credential.helper=", "-c", "core.askPass=", "ls-remote", "--heads", "--exit-code", "--end-of-options", "origin", r], {
      timeout: 4000,
      preserveOutputOnError: !1,
      env: env
    });
  if (_.code !== 0) return _.code === 2 ? "not_found" : "probe_failed";
  if (!_.stdout.split(`
`).some(item => item.split("\t")[1]?.trim() === `refs/heads/${r}`)) return "not_found";
  return (await ut(Pt(), [...yn, ...dnt, "-c", "credential.helper=", "-c", "core.askPass=", "fetch", "--no-tags", "--end-of-options", "origin", `refs/heads/${r}:refs/remotes/origin/${r}`], {
    timeout: 15000,
    preserveOutputOnError: !1,
    env: env
  })).code === 0 ? "recovered" : "fetch_failed";
}
async function he(r) {
  let {
    stdout: stdout_6,
    code: code_6
  } = await ut(Pt(), [...yn, "for-each-ref", "--format=%(refname:short)", "--count=2000", "refs/heads", "refs/remotes/origin"], {
    preserveOutputOnError: !1,
    env: ys()
  });
  if (code_6 !== 0) return null;
  let t = new Map();
  for (let y of stdout_6.split(`
`)) {
    let h = y.trim();
    if (!h || h === "origin" || h === "origin/HEAD") continue;
    let L = h.startsWith("origin/") ? h.slice(7) : h;
    if (h.startsWith("origin/") || !t.has(L)) t.set(L, h);
  }
  let n = r === "main" ? "master" : r === "master" ? "main" : null;
  if (n !== null) {
    let y = t.get(n);
    if (y) return y;
  }
  let s = null,
    d = 3;
  for (let [y, h] of t) {
    if (Math.abs(y.length - r.length) >= d) continue;
    let L = VJ(r, y, d - 1);
    if (L > 0 && L < d) d = L, s = h;
  }
  return s;
}
var message = "Couldn't check whether this review can run, so it stopped before uploading your code. Try again shortly; if this keeps happening, open a pull request for this branch and review the pull request instead.";
async function i6r({
  overageConfirmed: overageConfirmed,
  credentials: credentials,
  skipLowCreditsNote = !1,
  bundleFollows: bundleFollows
}) {
  let n = await uer(credentials);
  if (!n) {
    if (bundleFollows && eOi()) return {
      kind: "blocked",
      reason: "preflight_unavailable",
      message: message,
      actionUrl: null
    };
    return {
      kind: "proceed",
      billingNote: "",
      preflightUnavailable: !0
    };
  }
  let billingNote = n.billing_note ?? "",
    githubLogin = n.github_login ?? null;
  switch (n.action) {
    case "proceed":
      return {
        kind: "proceed",
        billingNote: billingNote,
        githubLogin: githubLogin
      };
    case "blocked":
      return {
        kind: "blocked",
        reason: n.blocked?.reason ?? "server",
        message: n.blocked?.message ?? "Ultrareview is unavailable for your organization.",
        actionUrl: n.blocked?.action_url ?? null
      };
    case "confirm":
      {
        if (overageConfirmed) return {
          kind: "proceed",
          billingNote: billingNote,
          githubLogin: githubLogin
        };
        let lowCreditsNote = skipLowCreditsNote ? null : await Lai(credentials);
        return {
          kind: "needs-confirm",
          body: `This review bills as usage credits (${mce()}).${lowCreditsNote ? `
${lowCreditsNote}` : ""}`,
          lowCreditsNote: lowCreditsNote,
          billingNote: billingNote,
          githubLogin: githubLogin
        };
      }
  }
}
var ge = 3;
async function a6r(r, context, _, t) {
  let n = t?.invocation ?? "/code-review ultra",
    s = text => ({
      launched: !1,
      blocks: [{
        type: "text",
        text: text
      }]
    }),
    d = await cje({
      allowBundle: !0,
      storageV5: context.storageV5,
      credentials: context.credentials
    });
  if (!d.eligible) {
    let errors = d.errors;
    if (errors.length > 0) {
      l("tengu_review_remote_precondition_failed", {
        reason: b("remote_agent_ineligible"),
        precondition_errors: ka(errors.map(item => item.type)),
        cwd_is_home: O()
      });
      let T = errors.map(item => {
        if (item.type === "not_in_git_repo") return ae(n);
        if (item.type === "no_git_remote") return `${n} needs a GitHub remote so it can clone this repository into the cloud. ${ADt} If a GitHub repo already exists, run \`git remote add origin REPO_URL && git push -u origin HEAD\`.`;
        return NMe(item);
      }).join(`
`);
      if (r.mode === "branch" && r.noMergeBase) l("tengu_review_remote_precondition_recovery", {
        reason: b("no_merge_base"),
        method: b("empty_tree_bundle"),
        outcome: b("failed")
      });
      return m("ultrareview_launch", "remote_agent_ineligible"), s(`Ultrareview cannot launch:
${T}`);
    }
  }
  let environmentId = "env_011111111111111111111113",
    h = hTe(),
    L = (R, T, I) => {
      if (typeof R !== "number" || !Number.isFinite(R)) return T;
      let N = Math.floor(R);
      if (N <= 0) return T;
      return N > I ? T : N;
    },
    BUGHUNTER_MODEL = QPi(),
    B = {
      BUGHUNTER_DRY_RUN: "1",
      AUTOPATCH_ENABLE_ASIMOV: "1",
      ...(h?.code_quality !== !1 && {
        BUGHUNTER_CODE_QUALITY: "1"
      }),
      BUGHUNTER_FLEET_SIZE: String(L(h?.fleet_size, 5, 20)),
      BUGHUNTER_MAX_DURATION: String(L(h?.max_duration_minutes, 10, 25)),
      BUGHUNTER_AGENT_TIMEOUT: String(L(h?.agent_timeout_seconds, 600, 1800)),
      BUGHUNTER_TOTAL_WALLCLOCK: String(L(h?.total_wallclock_minutes, 22, 27)),
      BUGHUNTER_RESULT_RELAY_MAX_SEC: String((HWe() - ge) * 60),
      ...(BUGHUNTER_MODEL && {
        BUGHUNTER_MODEL: BUGHUNTER_MODEL
      }),
      ...(process.env.BUGHUNTER_DEV_BUNDLE_B64 && {
        BUGHUNTER_DEV_BUNDLE_B64: process.env.BUGHUNTER_DEV_BUNDLE_B64
      })
    },
    session,
    command,
    p,
    Y = "",
    M = [],
    v,
    reason,
    status_code,
    server_type,
    server_reason;
  if (r.mode === "pr") {
    let R = await TT(),
      T = R && sG(R) ? null : R;
    if (!T) return l("tengu_review_remote_precondition_failed", {
      reason: b("no_github_remote_post_confirm"),
      cwd_is_home: O()
    }), m("ultrareview_launch", "no_github_remote"), null;
    let I = `ultrareview: ${T.owner}/${T.name}#${r.prNumber}`;
    session = await KB({
      initialMessage: null,
      source: "ultrareview",
      description: I,
      title: I,
      signal: context.abortController.signal,
      storageV5: context.storageV5,
      credentials: context.credentials,
      branchName: `refs/pull/${r.prNumber}/head`,
      environmentId: environmentId,
      tags: ["ultrareview"],
      environmentVariables: {
        BUGHUNTER_PR_NUMBER: r.prNumber,
        BUGHUNTER_REPOSITORY: `${T.owner}/${T.name}`,
        ...B
      },
      onCreateFail: (N, o, u) => {
        v = N, reason = f(o), status_code = u?.status, server_type = de(u?.serverType), server_reason = de(u?.serverReason);
      }
    }), command = `/ultrareview ${r.prNumber}`, p = `${T.owner}/${T.name}#${r.prNumber}`;
  } else {
    let {
      headBranch: headBranch_5,
      baseBranch: baseBranch_2,
      mergeBaseSha: I,
      diffStat: diffStat,
      noMergeBase: noMergeBase
    } = r;
    Y = diffStat;
    let u, bundle_fail_kind;
    if (session = await KB({
      initialMessage: null,
      source: "ultrareview",
      description: `ultrareview: ${headBranch_5}`,
      signal: context.abortController.signal,
      storageV5: context.storageV5,
      credentials: context.credentials,
      useBundle: !0,
      bundleBaseRef: I,
      bundleForceScope: noMergeBase ? "squashed" : void 0,
      environmentId: environmentId,
      tags: ["ultrareview"],
      environmentVariables: {
        BUGHUNTER_BASE_BRANCH: I,
        ...B
      },
      onBundleFail: (k, A) => {
        u = k, bundle_fail_kind = f(A);
      },
      onBundleNotice: k => {
        M.push(k);
      },
      onCreateFail: (k, A, w) => {
        v = k, reason = f(A), status_code = w?.status, server_type = de(w?.serverType), server_reason = de(w?.serverReason);
      }
    }), !session) {
      l("tengu_review_remote_teleport_failed", {
        mode: b("branch"),
        reason: reason,
        bundle_fail_kind: bundle_fail_kind,
        status_code: status_code,
        server_type: server_type,
        server_reason: server_reason
      });
      let k = context.abortController.signal.aborted;
      if (noMergeBase && !k) l("tengu_review_remote_precondition_recovery", {
        reason: b("no_merge_base"),
        method: b("empty_tree_bundle"),
        outcome: b("failed")
      });
      if (!k) m("ultrareview_launch", "teleport_failed");
      return s(u ?? (v ? `Ultrareview could not start the cloud session: ${v}` : `Repo is too large. Push a PR and use \`${n} <PR#>\` instead.`));
    }
    command = "/ultrareview", p = noMergeBase === "unrelated_history" ? `${headBranch_5} (all files \u2014 no common history with ${baseBranch_2})` : noMergeBase === "base_ref_missing" ? `${headBranch_5} (all files)` : noMergeBase === "first_commit" ? `${headBranch_5} (every file in the first commit)` : headBranch_5 === baseBranch_2 ? headBranch_5 : `${headBranch_5} \u2192 ${baseBranch_2}`;
  }
  if (!session) {
    if (l("tengu_review_remote_teleport_failed", {
      mode: b("pr"),
      reason: reason,
      status_code: status_code,
      server_type: server_type,
      server_reason: server_reason
    }), !context.abortController.signal.aborted) m("ultrareview_launch", "teleport_failed");
    if (v) return s(`Ultrareview could not start the cloud session: ${v}`);
    return null;
  }
  let taskId;
  if (!t?.skipTaskRegistration) taskId = r8e({
    remoteTaskType: "ultrareview",
    session: session,
    command: command,
    context: context,
    isRemoteReview: !0,
    applyFixesOnComplete: t?.applyFixesOnComplete,
    reviewInstructions: r.mode === "branch" ? r.instructions : void 0,
    postReviewTo: t?.postReviewToPR && r.mode === "pr" && !t?.signal?.aborted ? {
      repo: r.repo,
      prNumber: r.prNumber
    } : void 0
  }).taskId;
  if (l("tengu_review_remote_launched", {
    mode: f(r.mode),
    had_arg: r.hadArg,
    post_armed: t?.postReviewToPR === !0 && r.mode === "pr" && !t?.signal?.aborted,
    had_instructions: r.mode === "branch" && !!r.instructions,
    diff_files: r.diffFiles,
    diff_lines: r.diffLines
  }), r.mode === "branch" && r.noMergeBase) {
    if (l("tengu_review_remote_precondition_recovery", {
      reason: b("no_merge_base"),
      method: b("empty_tree_bundle"),
      outcome: b("succeeded")
    }), r.noMergeBase === "first_commit") g("ultrareview_launch");else c("ultrareview_launch", "no_merge_base_empty_tree_fallback");
  } else g("ultrareview_launch");
  Nai(context.storageV5);
  let sessionUrl = FMe(session.id),
    V = _.trim() ? `${_.trim()}
` : "",
    te = Y ? `
Scope: ${Y}` : "",
    re = r.mode === "branch" && r.instructions ? t?.skipTaskRegistration ? `
Your text was read as a note, not a base branch \u2014 the standard review runs on the diff above.` : `
Your text was read as a note, not a base branch \u2014 the standard review runs on the diff above, and the findings will be related to your note when they arrive.` : "";
  return {
    launched: !0,
    sessionId: session.id,
    sessionUrl: sessionUrl,
    taskId: taskId,
    title: session.title,
    blocks: [{
      type: "text",
      text: `${V}Ultrareview launched for ${p} (${_q()}, runs in the cloud).${t?.findingsArriveInSession ? " The findings arrive here when it finishes." : ""}${t?.postReviewToPR && r.mode === "pr" ? `
When it finishes, the findings will be posted to the PR as a comment from your GitHub account. (Keep this session open: the consent lives only here, so if it ends before the review finishes, nothing will be posted \u2014 even on resume.)` : ""}${te}${re}${M.map(item => `
${item}`).join("")}`
    }]
  };
}
function oSn(r, e) {
  return `The output above is already visible to the user. Briefly acknowledge it without repeating the target or billing note. Findings will arrive via task-notification.${r ? " The user passed --fix: when the findings arrive, apply them to the local working tree." : ""}${e ? ` The user's argument was interpreted as a review note, not a base branch: "${Q(e, Zdr)}". The cloud review runs its standard pass over the branch diff and does not see the note; when the findings arrive, prioritize and relate them to the user's request.` : ""}`;
}
var be = /^[a-z][a-z0-9_]{0,63}$/;
async function sSn(r, e) {
  if (!L$()) {
    let gate_blocker = nOi(),
      entitlement_blocker = gate_blocker === "entitlement" ? kLn() : null;
    return l("tengu_review_remote_gate_blocked", {
      reason: de(gate_blocker) ?? b("unknown"),
      entitlement_blocker: de(entitlement_blocker)
    }), {
      status: "error",
      message: "Ultrareview is currently unavailable.",
      ...(gate_blocker !== null && {
        gate_blocker: gate_blocker
      }),
      ...(entitlement_blocker !== null && {
        entitlement_blocker: entitlement_blocker
      })
    };
  }
  await dh();
  let message_2 = dp("allow_remote_sessions", "Cloud sessions", "are");
  if (message_2) return FI("allow_remote_sessions", "slash_command"), {
    status: "error",
    message: message_2
  };
  let t = await s6r(r, e.invocation, {
    suppressSucceededRecoveryEvent: !e.confirm,
    suppressOfferedRecoveryEvent: e.confirm && !e.singlePass,
    confirmsBeforeLaunch: e.confirmsBeforeLaunch === !0,
    personRanTheCommand: e.personRanTheCommand === !0
  });
  if (!t.ok) return {
    status: "error",
    message: t.error,
    reason: t.reason
  };
  let n = await i6r({
    overageConfirmed: e.overageConfirmed,
    credentials: e.context.credentials,
    skipLowCreditsNote: e.confirm && !e.singlePass,
    bundleFollows: t.scope.mode === "branch"
  });
  if (n.kind === "blocked") return l("tengu_review_overage_blocked", {
    reason: Ak(n.reason)
  }), {
    status: "blocked",
    message: n.message,
    actionUrl: n.actionUrl,
    ...(be.test(n.reason) && {
      reason: n.reason
    })
  };
  let s = () => {
    let B = t.scope.mode === "pr" ? `Reviewing PR ${t.scope.repo}#${t.scope.prNumber}.` : t.scope.noMergeBase ? "Reviewing all files on the current branch." : `Reviewing current branch against ${t.scope.baseBranch}.`,
      C = t.scope.mode === "branch" && t.scope.instructions ? ` Note for findings (not a base branch): "${rSn(t.scope.instructions)}"` : "";
    return `
${B}${C}`;
  };
  if (n.kind === "proceed" && n.preflightUnavailable && e.withholdOverageConsent && !e.overageConfirmed) return {
    status: "needs-confirm",
    body: `Couldn't verify your review quota right now, so this review may bill as usage credits (${mce()}).${s()}`,
    billingNote: ""
  };
  if (n.kind === "needs-confirm") {
    if (e.withholdOverageConsent) return {
      status: "needs-confirm",
      body: `${n.body}${s()}`,
      billingNote: n.billingNote
    };
    if (l("tengu_review_overage_dialog_shown", {}), !e.confirm) return {
      status: "needs-confirm",
      body: `${n.body}${s()}`,
      billingNote: n.billingNote
    };
    e.markOverageConfirmed();
  }
  if (e.confirm && t.scope.mode === "branch" && t.scope.noMergeBase) l("tengu_review_remote_precondition_recovery", {
    reason: b("no_merge_base"),
    method: b("empty_tree_bundle"),
    outcome: b("accepted")
  });
  if (!e.confirm) {
    let B = t.scope.mode === "pr" ? `Reviewing PR ${t.scope.repo}#${t.scope.prNumber}` : t.scope.noMergeBase === "unrelated_history" ? `Reviewing all files (no common history with ${t.scope.baseBranch})
Scope: ${t.scope.diffStat}` : t.scope.noMergeBase === "base_ref_missing" ? `Reviewing all files (no ${t.scope.baseBranch} branch to compare against)
Scope: ${t.scope.diffStat}` : t.scope.noMergeBase === "first_commit" ? `Reviewing every file in the first commit (there is nothing earlier to compare with)
Scope: ${t.scope.diffStat}` : `Reviewing current branch against ${t.scope.baseBranch}
Scope: ${t.scope.diffStat}`,
      C = t.scope.mode === "branch" && t.scope.instructions ? `
Note for findings (not a base branch): "${rSn(t.scope.instructions)}"` : "";
    return {
      status: "needs-confirm",
      body: `${B}${C}
${_q()} \xB7 Est. cost ${mce()} USD`,
      billingNote: n.billingNote
    };
  }
  let d = e.postReview === !0 && !vMt(),
    postReviewToPR = e.postReview === !0 && !d && t.scope.mode === "pr" && fo(t.scope.host),
    h = await a6r(t.scope, e.context, n.billingNote, {
      skipTaskRegistration: e.skipTaskRegistration,
      invocation: e.invocation,
      applyFixesOnComplete: e.applyFixes,
      postReviewToPR: postReviewToPR
    });
  if (!h?.launched) return {
    status: "error",
    message: h?.blocks.map(B => B.type === "text" ? B.text : "").join("").trim() || "Failed to launch cloud review session."
  };
  let L = e.postReview === !0 && !postReviewToPR,
    F = h.blocks.map(item => item.type === "text" ? item.text : "").join("").trim();
  return {
    status: "launched",
    sessionId: h.sessionId,
    sessionUrl: h.sessionUrl,
    taskId: h.taskId,
    title: h.title,
    message: d ? `${F}${o6r}` : L ? `${F}${r6r}` : F,
    billingNote: n.billingNote,
    postReviewTo: postReviewToPR && t.scope.mode === "pr" ? {
      repo: t.scope.repo,
      prNumber: t.scope.prNumber
    } : void 0,
    postIgnored: L || void 0,
    lowCreditsNote: e.singlePass && n.kind === "needs-confirm" && n.lowCreditsNote || void 0
  };
}
async function oe() {
  let r = await TT();
  return !!r && !sG(r);
}
function ae(r, e = !1) {
  let _ = e ? `run "git init" and commit a starting point. ${r} then reviews the changes you make on top of that commit.` : `run "git init" and commit your work. ${r} then reviews that first commit whole if it is small enough, and after that the changes you make on top of it.`,
    t = id() ? "Open a folder that is a git repository with at least one commit, then try again." : `If your project already uses git, cd into its folder and rerun ${r}. If it doesn't yet, ${_}`;
  return `${r} reviews the changes a git branch makes on top of an earlier commit, but ${pe()} is not inside a git repository. ${t}`;
}
function O() {
  try {
    let r = le();
    if (!r) return !1;
    return xT(En(ne(pe())), En(ne(r)));
  } catch {
    return !1;
  }
}
export { r6r, o6r, nSn, s6r, rSn, i6r, a6r, oSn, sSn };