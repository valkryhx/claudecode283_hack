// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F, K } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { b, c, pe, fl } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Tb } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { $n } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { e$t, s6n, xte, Gt } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { J, se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O, ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { At } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Ot, Qc, CA } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { kn, sS, ks } from "B:/~BUN/root/chunk-yw21pggd.js";
import { vbt, sGe, lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { ro, gGe } from "B:/~BUN/root/chunk-fsp20me0.js";
import { dF } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { mt } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Cu } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { vne } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Rct, fN } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { p$, tC } from "B:/~BUN/root/chunk-m94tqsvv.js";
import { If } from "B:/~BUN/root/chunk-zayh6xmh.js";
import { Nrn } from "B:/~BUN/root/chunk-1g2t7gtx.js";
import { qv } from "B:/~BUN/root/chunk-pbq7kcha.js";
import { ife } from "B:/~BUN/root/chunk-arcgcnq8.js";
import { eA } from "B:/~BUN/root/chunk-maccjk0y.js";
import { JAe, qDn, J9t, rxe, MSe, LHe, DSe, Pgs, YL } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Uqn } from "B:/~BUN/root/chunk-bn7mrnb3.js";
import { lve, dve, vAs, X9, kAs, _ut, dCr, JSo, EAs, TAs, bN, CAs, but, sjn, aa } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { a$n, uvr, d$n } from "B:/~BUN/root/chunk-k382hx6g.js";
import { rns } from "B:/~BUN/root/chunk-b8czrbb6.js";
import { kRn, ERn, TRn } from "B:/~BUN/root/chunk-ez6nq1pq.js";
import { ge, St, Ld } from "B:/~BUN/root/chunk-rm2gz7kj.js";
import { homedir as ye } from "os";
import { resolve as he } from "path";
var ue = f(() => St({
  action: Ld(["proceed", "confirm", "blocked"]),
  billing_note: ge().nullable().optional(),
  github_login: ge().nullable().optional(),
  confirm: St({
    title: ge().optional(),
    body: ge()
  }).nullable().optional(),
  blocked: St({
    message: ge(),
    action_url: ge().nullable(),
    reason: ge().optional()
  }).nullable().optional()
}));
function ae(message, reason) {
  return {
    action: "blocked",
    blocked: {
      message: message,
      action_url: null,
      reason: reason
    }
  };
}
async function de(credentials) {
  let CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE = a.CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE;
  if (CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE) {
    let u = ue().safeParse(J(CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE));
    return u.success ? u.data : null;
  }
  try {
    let u = await Gt.get("/v1/ultrareview/preflight", {
      auth: "teleport-org",
      timeout: 5000,
      credentials: credentials,
      headers: {
        [e$t]: K()
      }
    });
    if (!u.ok) switch (u.reason) {
      case "essential-traffic-only":
        return ae("Ultrareview runs in a cloud session and is unavailable when essential-traffic-only mode is active.", "zdr");
      case "data-residency":
        return ae("Ultrareview runs in a cloud session and is unavailable on third-party providers.", "data_residency");
      case "no-auth":
        return ae("Ultrareview requires a Claude.ai account. Run /login to authenticate.", "no_oauth_token");
    }
    let r = ue().safeParse(u.data);
    if (!r.success) return t(`fetchUltrareviewPreflight schema mismatch: ${r.error.message}`), p("api_ultrareview_preflight", "schema_mismatch"), null;
    return g("api_ultrareview_preflight"), r.data;
  } catch (error) {
    return t(`fetchUltrareviewPreflight failed: ${error}`), p("api_ultrareview_preflight", "request_failed"), null;
  }
}
var we = 3000;
function ve(o, e) {
  if (!o || !Rct(o) || !fe(o.currency)) return null;
  if (o.is_enabled !== !0) return 0;
  if (e === null || !fe(e.currency)) return null;
  let {
      monthly_limit: monthly_limit,
      used_credits: used_credits
    } = o,
    s;
  if (monthly_limit === null) s = 1 / 0;else if (typeof monthly_limit === "number" && typeof used_credits === "number") s = monthly_limit - used_credits;else return null;
  let l = Math.min(s, e.auto_reload_settings?.enabled === !0 ? 1 / 0 : e.amount);
  return Number.isFinite(l) ? Math.max(0, l) : null;
}
function fe(o) {
  return typeof o === "string" && o.toUpperCase() === "USD";
}
async function me(o) {
  try {
    let e = vAs();
    if (e === null || s6n() || xte()) return null;
    let [u, r] = await Nt(Promise.all([fN(o), JAe(o)]), we, "ultrareview: usage credits read timed out"),
      s = ve(u?.extra_usage, r);
    if (s === null || s >= e * 100) return null;
    let l = s < 100 ? "Less than $1" : `About ${aa(Math.floor(s / 100) * 100, "USD", "whole")}`,
      h = aa(e * 100, "USD", "whole");
    return `${l} of usage credits left. A review usually uses about ${h} and stops if credits run out.`;
  } catch {
    return t("ultrareview: could not read usage credits left, so no low-credits line"), null;
  }
}
var mergeBaseSha = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
var Far = `
Note: --post was ignored \u2014 posting applies only to GitHub.com pull request reviews.`,
  Har = `
Note: --post was ignored \u2014 posting findings to the PR is currently turned off.`;
function N4t(o) {
  let e = h => String.raw`--fix|--comment|--post|--no-post|--max-findings(?:\s*=\s*(?!--)\S*|\s*=\S*|\s+${h})?`,
    regExp = new RegExp(`^(${e(String.raw`(?!--)\S+`)})(?:\\s+|$)`),
    regExp_2 = new RegExp(`(?:^|\\s+)(${e(String.raw`(?:\d+|[Aa][Ll][Ll]|[Dd][Ee][Ff][Aa][Uu][Ll][Tt])`)})$`),
    s = new Set(),
    scopeArgs = o.trim();
  for (;;) {
    let h = scopeArgs.match(regExp);
    if (!h) break;
    s.add(h[1]), scopeArgs = scopeArgs.slice(h[0].length);
  }
  for (;;) {
    let h = scopeArgs.match(regExp_2);
    if (!h) break;
    s.add(h[1]), scopeArgs = scopeArgs.slice(0, scopeArgs.length - h[0].length);
  }
  return {
    scopeArgs: scopeArgs,
    applyFixes: s.has("--fix"),
    postReview: s.has("--no-post") ? !1 : s.has("--post") ? !0 : void 0
  };
}
async function $ar(o, e = "/code-review ultra", u) {
  if (!(await J9t())) return i("tengu_review_remote_precondition_failed", {
    reason: b("not_git_repo"),
    cwd_is_home: I()
  }), {
    ok: !1,
    reason: "not_git_repo",
    error: be(e, u?.confirmsBeforeLaunch !== !0)
  };
  let r = o.trim(),
    s = sjn(r),
    prNumber = s?.num.toString() ?? r.match(/^(?:#|PR[\s#]*)(\d+)$/i)?.[1] ?? r;
  if (/^\d+$/.test(prNumber)) {
    let n = B => {
        if (B === "succeeded" && u?.suppressSucceededRecoveryEvent) return;
        if (prNumber !== r) i("tengu_review_remote_precondition_recovery", {
          reason: b("base_ref_not_found"),
          method: b("pr_arg_normalization"),
          outcome: c(B)
        });
      },
      _ = await tC(),
      d = _ && p$(_) ? null : _,
      S = gGe(s?.host, d?.host) || !!s && !!d && ro(s.host) && ro(d.host);
    if (s && (!S || s.owner.toLowerCase() !== d?.owner.toLowerCase() || s.repo.toLowerCase() !== d?.name.toLowerCase())) {
      i("tengu_review_remote_precondition_failed", {
        reason: b("pr_url_wrong_repo"),
        has_remote: !!d,
        cwd_is_home: I()
      }), n("failed");
      let B = `${s.owner}/${s.repo} on ${s.host}`,
        G = d ? `you're in ${d.owner}/${d.name} on ${d.host}` : "this directory has no GitHub remote";
      return {
        ok: !1,
        reason: "pr_url_wrong_repo",
        error: `That link is for ${B}, but ${G}. cd into a checkout of that repo and run ${e} ${s.num} from there.`
      };
    }
    if (!d) return i("tengu_review_remote_precondition_failed", {
      reason: b("no_github_remote"),
      cwd_is_home: I()
    }), n("failed"), {
      ok: !1,
      reason: "no_github_remote",
      error: `${e} <PR#> needs a GitHub remote so it knows which repository the PR is in. If this project is not on GitHub yet, run "gh repo create --source=. --push" to create one; if a GitHub repo already exists, run "git remote add origin REPO_URL". Or run ${e} with no argument to review your current branch instead.`
    };
    if (Uqn(d)) return i("tengu_review_remote_precondition_failed", {
      reason: b("monorepo_blocked"),
      cwd_is_home: I()
    }), n("failed"), {
      ok: !1,
      reason: "monorepo_blocked",
      error: `${e} doesn't support pull requests in this repository. Run /code-review ${prNumber}${e.startsWith("/") ? "" : " in Claude Code"} for a local review instead.`
    };
    let diffFiles,
      diffLines,
      [{
        stdout: stdout,
        code: code
      }, C] = await Promise.all([lt("gh", ["pr", "view", prNumber, "--repo", `${d.host}/${d.owner}/${d.name}`, "--json", "additions,deletions,changedFiles"], {
        timeout: 5000,
        preserveOutputOnError: !1
      }), ro(d.host) && EAs() && !At() ? TRn(d.owner, d.name, u?.accessProbeBudgetMs) : null]);
    if (C && !u?.suppressOfferedRecoveryEvent) i("tengu_review_remote_github_access_probe", {
      verdict: c(C.verdict),
      http_status: C.httpStatus ?? void 0
    });
    if (C?.verdict === "github_not_connected" || C?.verdict === "github_repo_not_found") {
      i("tengu_review_remote_precondition_failed", {
        reason: c(C.verdict),
        cwd_is_home: I()
      }), n("failed");
      let webSetupHint = ife() ? `run /web-setup${e.startsWith("/") ? "" : " in Claude Code"} to reuse your GitHub CLI login` : "",
        rerun = `then re-run ${e} ${prNumber}`;
      return {
        ok: !1,
        reason: C.verdict,
        error: C.verdict === "github_not_connected" ? kRn({
          subject: `Ultrareview clones ${d.owner}/${d.name} in the cloud`,
          webSetupHint: webSetupHint,
          rerun: rerun
        }) : ERn({
          owner: d.owner,
          name: d.name,
          webSetupHint: webSetupHint,
          rerun: rerun,
          leadWithWebSetup: code === 0
        })
      };
    }
    if (code === 0 && stdout.trim()) try {
      let B = J(stdout),
        {
          maxFiles: G,
          maxLines: q
        } = dCr(),
        lines = B.additions + B.deletions;
      if (Number.isFinite(B.changedFiles) && Number.isFinite(lines)) diffFiles = B.changedFiles, diffLines = lines;
      if (B.changedFiles > G || lines > q) return i("tengu_review_remote_precondition_failed", {
        reason: b("pr_diff_too_large"),
        files: B.changedFiles,
        lines: lines,
        max_files: G,
        max_lines: q,
        cwd_is_home: I()
      }), n("failed"), {
        ok: !1,
        reason: "pr_diff_too_large",
        error: `PR #${prNumber} is too large for ultrareview (${B.changedFiles} files, ${lines.toLocaleString()} lines). Split it into smaller PRs, or run \`${e}\` on a narrower local diff.`
      };
    } catch {}
    return n("succeeded"), {
      ok: !0,
      scope: {
        mode: "pr",
        prNumber: prNumber,
        repo: `${d.owner}/${d.name}`,
        host: d.host,
        hadArg: !0,
        diffFiles: diffFiles,
        diffLines: diffLines
      }
    };
  }
  let h = await Pgs();
  if (h.tooLarge) return i("tengu_review_remote_precondition_failed", {
    reason: b("repo_too_large_to_bundle"),
    pack_bytes: h.sizeBytes ?? void 0,
    pack_objects: h.inPackCount ?? void 0,
    cwd_is_home: I()
  }), {
    ok: !1,
    reason: "repo_too_large_to_bundle",
    error: `Repo is too large to bundle. Push a PR and use \`${e} <PR#>\` instead.`
  };
  let k = async n => (await lt(Ot(), [...kn, "rev-parse", "--verify", "--quiet", "--end-of-options", n], {
      preserveOutputOnError: !1
    })).code === 0,
    w = /\s/.test(r),
    N = w && ((await k(`origin/${r}`)) || (await k(r))),
    M = w && !N ? r.match(/https:\/\/\S*\/pull\/\d+\b/) : null,
    T = w && !N && !M ? r.match(/(?<![\w/#-])(?:#|PR)[-\s#]*(\d+)\b/i) ?? r.match(/(?<![\w/#-])pull[\s-]+request[-\s#]*(\d+)\b/i) ?? r.match(/\/pull\/(\d+)\b/i) ?? r.match(/^(\d+)\b/) : null;
  if (M || T) {
    let n = M ? M[0] : `#${T[1]}`,
      _ = M ? M[0] : T[1];
    return i("tengu_review_remote_precondition_recovery", {
      reason: b("base_ref_not_found"),
      method: b("embedded_pr_hint"),
      outcome: b("offered")
    }), i("tengu_review_remote_precondition_failed", {
      reason: b("base_ref_not_found"),
      looks_like_url: /^https?:/i.test(r),
      looks_like_sha: !1,
      starts_with_hash: r.startsWith("#"),
      has_slash: r.includes("/"),
      has_whitespace: !0,
      has_pr_ref: !0,
      has_remote: await le(),
      cwd_is_home: I()
    }), {
      ok: !1,
      reason: "base_ref_not_found",
      error: `Your request mentions what looks like a PR reference (${n}). To review that PR, run \`${e} ${_}\`. To review your current branch instead, rerun without the PR-style reference.`
    };
  }
  let U = w && !N && !r.startsWith("-"),
    instructions = U ? r : void 0,
    v = U ? "" : r,
    Y = !1;
  if (v) {
    if (!(await k(`origin/${v}`)) && !(await k(v))) {
      let n = await Ee(v);
      if (n === "recovered" && (await k(`origin/${v}`))) Y = !0;else {
        if (n !== "not_found") i("tengu_review_remote_precondition_recovery", {
          reason: b("base_ref_not_found"),
          method: b("fetch_retry"),
          outcome: b("failed")
        });
        if (n === "fetch_failed") return i("tengu_review_remote_precondition_failed", {
          reason: b("base_ref_not_found"),
          looks_like_url: /^https?:/i.test(v),
          looks_like_sha: /^[0-9a-f]{7,40}$/i.test(v),
          starts_with_hash: v.startsWith("#"),
          has_slash: v.includes("/"),
          has_whitespace: /\s/.test(v),
          has_remote: await le(),
          cwd_is_home: I()
        }), {
          ok: !1,
          reason: "base_ref_not_found",
          error: `"${v}" exists on origin but couldn't be fetched. Run \`git fetch origin ${v}\` and try ${e} again.`
        };
        let _ = await Se(v);
        if (_) i("tengu_review_remote_precondition_recovery", {
          reason: b("base_ref_not_found"),
          method: b("branch_suggestion"),
          outcome: b("offered")
        });
        i("tengu_review_remote_precondition_failed", {
          reason: b("base_ref_not_found"),
          looks_like_url: /^https?:/i.test(v),
          looks_like_sha: /^[0-9a-f]{7,40}$/i.test(v),
          starts_with_hash: v.startsWith("#"),
          has_slash: v.includes("/"),
          has_whitespace: /\s/.test(v),
          has_remote: await le(),
          cwd_is_home: I()
        });
        let d = _ ? ` Did you mean \`${_}\`?` : "";
        return {
          ok: !1,
          reason: "base_ref_not_found",
          error: `"${v}" is not a branch or commit in this repo.${d} ${e} takes a PR number, a base branch or commit, or no argument (reviews your current branch). Try ${e} by itself.`
        };
      }
    }
  }
  let j = n => {
      if (Y) i("tengu_review_remote_precondition_recovery", {
        reason: b("base_ref_not_found"),
        method: b("fetch_retry"),
        outcome: c(n)
      });
      if (U) {
        if (n === "succeeded" && u?.suppressSucceededRecoveryEvent) return;
        i("tengu_review_remote_precondition_recovery", {
          reason: b("base_ref_not_found"),
          method: b("prose_instructions"),
          outcome: c(n)
        });
      }
    },
    baseBranch = v || (await CA()) || "main",
    headBranch_3 = (await Qc()) || "HEAD",
    Z = async n => lt(Ot(), [...kn, "merge-base", n, "HEAD"], {
      preserveOutputOnError: !1,
      env: ks()
    }),
    W = `origin/${baseBranch}`,
    {
      stdout: stdout_2,
      code: code_2
    } = await Z(W);
  if (code_2 !== 0) W = baseBranch, {
    stdout: stdout_2,
    code: code_2
  } = await Z(W);
  let mergeBaseSha_2 = stdout_2.trim(),
    V = n => lt(Ot(), [...kn, ...n], {
      preserveOutputOnError: !1,
      env: ks()
    }),
    error_2 = `Your checkout has no branches (detached HEAD only), which cloud review can't bundle. Create one first \u2014 \`git checkout -b <name>\` \u2014 then rerun ${e}.`,
    ie = async () => v.length > 0 || (await V(["rev-parse", "--verify", "--quiet", `origin/${baseBranch}`])).code === 0 || (await V(["rev-parse", "--verify", "--quiet", baseBranch])).code === 0,
    E = async (n, headBranch = headBranch_3) => {
      let d = n || (await ie()),
        {
          stdout: stdout_3,
          code: code_3
        } = await lt(Ot(), [...kn, "diff", "--no-ext-diff", "--no-textconv", sS, "--shortstat", mergeBaseSha], {
          preserveOutputOnError: !1,
          env: ks({
            LC_ALL: "C"
          })
        });
      if (code_3 === 0) {
        if (n && !stdout_3.trim()) return null;
        if (!stdout_3.trim()) return i("tengu_review_remote_precondition_failed", {
          reason: b("empty_diff"),
          cwd_is_home: I()
        }), j("failed"), {
          ok: !1,
          reason: "empty_diff",
          error: d ? `It doesn't look like you have any new commits or changes to review against your ${baseBranch} branch. Stage or commit them first?` : "It doesn't look like you have any changes to review. Stage or commit them first?"
        };
        let y = d$n(stdout_3),
          lines_2 = y ? y.linesAdded + y.linesRemoved : 0,
          {
            maxFiles: D,
            maxLines: C
          } = dCr();
        if (y && (y.filesCount > D || lines_2 > C)) {
          i("tengu_review_remote_precondition_failed", {
            reason: b("local_diff_too_large"),
            files: y.filesCount,
            lines: lines_2,
            max_files: D,
            max_lines: C,
            after_fallback: !0,
            cwd_is_home: I(),
            first_commit: n || void 0
          }), j("failed");
          let B = n ? `Your first commit is the base from here on: make your changes and rerun ${e} to review only those.` : d ? `Review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${e} <PR#>\`.` : `This repo has no ${baseBranch} branch \u2014 if another branch is your base, pass it explicitly (\`${e} <branch>\`). Otherwise review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${e} <PR#>\`.`;
          return {
            ok: !1,
            reason: "local_diff_too_large",
            error: `This looks like a first review of the entire repository (${stdout_3.trim()}), which exceeds ultrareview's limit. ${B}`
          };
        }
        if (!u?.suppressOfferedRecoveryEvent) i("tengu_review_remote_precondition_recovery", {
          reason: b("no_merge_base"),
          method: b("empty_tree_bundle"),
          outcome: b("offered"),
          files: y?.filesCount,
          lines: y ? lines_2 : void 0,
          is_shallow: !1,
          first_commit: n || void 0
        });
        return j("succeeded"), {
          ok: !0,
          scope: {
            mode: "branch",
            headBranch: headBranch,
            baseBranch: baseBranch,
            mergeBaseSha: mergeBaseSha,
            diffStat: stdout_3.trim(),
            hadArg: v.length > 0,
            diffFiles: y?.filesCount,
            diffLines: y ? lines_2 : void 0,
            noMergeBase: n ? "first_commit" : d ? "unrelated_history" : "base_ref_missing",
            instructions: instructions
          }
        };
      }
      return null;
    };
  if (code_2 !== 0 || !mergeBaseSha_2) {
    let head_resolves = (await V(["rev-parse", "--verify", "--quiet", "HEAD"])).code === 0,
      _ = (await V(["rev-parse", "--is-shallow-repository"])).stdout.trim(),
      is_shallow = _ === "true",
      S = _ === "false",
      A = head_resolves && S && JSo(),
      y = A ? await V(["for-each-ref", "--count=1", "refs/"]) : null,
      H = y !== null && y.stdout.trim() !== "",
      D = y !== null && y.code === 0 && y.stdout.trim() === "",
      C = !1;
    if (A && H) if (u?.confirmsBeforeLaunch === !0 || u?.personRanTheCommand === !0) {
      let G = await E(!1);
      if (G) return G;
    } else C = !0;
    if (i("tengu_review_remote_precondition_failed", {
      reason: b("no_merge_base"),
      cwd_is_home: I(),
      is_shallow: is_shallow,
      head_resolves: head_resolves,
      arg_was_explicit: v.length > 0,
      has_refs: H ? !0 : D ? !1 : void 0,
      whole_repository_held_back: C || void 0
    }), j("failed"), C) return {
      ok: !1,
      reason: "no_merge_base",
      error: `${(await ie()) ? `${baseBranch} shares no history with your checkout` : `This repository has no ${baseBranch} branch to compare with`}, so a review here would cover every file. To review it whole, a person can run /ultrareview in an interactive Claude Code session, which asks before it spends anything.`
    };
    if (!head_resolves) return {
      ok: !1,
      reason: "no_merge_base",
      error: !u?.confirmsBeforeLaunch ? `Your current branch has no commits yet, so there is nothing to review. Commit a starting point first. ${e} then reviews the changes you make on top of that commit.` : `Your current branch has no commits yet, so there is nothing to review. Commit your work first, then rerun ${e}.`
    };
    if (is_shallow) return i("tengu_review_remote_precondition_recovery", {
      reason: b("no_merge_base"),
      method: b("deepen_hint"),
      outcome: b("offered"),
      is_shallow: !0
    }), {
      ok: !1,
      reason: "no_merge_base",
      error: v ? `Your clone is shallow and doesn't contain the point where your branch forked from ${baseBranch}. Run \`git fetch --deepen=100 origin ${baseBranch}\` (or \`git fetch --unshallow origin\`) and rerun ${e}.` : `Your clone is shallow and doesn't contain the point where your branch forked from ${baseBranch}. Run \`git fetch --unshallow origin\` and rerun ${e}. If your base branch isn't ${baseBranch}, pass it explicitly (\`${e} <branch>\`).`
    };
    if (D) return {
      ok: !1,
      reason: "no_refs",
      error: error_2
    };
    let B = Y ? S ? `${baseBranch} was fetched from origin but shares no history with HEAD. If another branch is your real base, pass it explicitly (\`${e} <branch>\`).` : `${baseBranch} was fetched from origin but shares no history with HEAD. Try \`git fetch --unshallow origin\` (or deepen the clone) and rerun.` : v ? `Make sure ${baseBranch} exists locally or on origin (try \`git fetch origin ${baseBranch}\`).` : `Pass the base branch explicitly (e.g. \`${e} develop\`) or make sure you're in a git repo with a ${baseBranch} branch.`;
    return {
      ok: !1,
      reason: "no_merge_base",
      error: `Could not find merge-base with ${baseBranch}. ${B}`
    };
  }
  if (v.length > 0) {
    let n = await V(["for-each-ref", "--count=1", "refs/"]);
    if (n.code === 0 && n.stdout.trim() === "") return i("tengu_review_remote_precondition_failed", {
      reason: b("no_refs"),
      cwd_is_home: I(),
      arg_was_explicit: !0
    }), j("failed"), {
      ok: !1,
      reason: "no_refs",
      error: error_2
    };
  }
  let {
    stdout: stdout_4,
    code: code_4
  } = await a$n(se().cwd(), [...kn, "diff", "--no-ext-diff", "--no-textconv", sS, "--shortstat", mergeBaseSha_2], {
    LC_ALL: "C"
  }, {
    preserveOutputOnError: !1
  });
  if (code_4 === 0 && !stdout_4.trim()) {
    let n = await Re(mergeBaseSha_2, baseBranch),
      headBranch_2 = n.headBranch,
      d = n.headAtMergeBase === !0 && n.headIsRoot === !0 && n.untrackedCount === 0 && JSo() && (await V(["rev-parse", "--is-shallow-repository"])).stdout.trim() === "false" && (await V(["rev-parse", "--verify", "--quiet", "--end-of-options", `${W}^{commit}`])).stdout.trim() === mergeBaseSha_2,
      S = d && u?.confirmsBeforeLaunch !== !0;
    if (d && !S) {
      let q = await E(!0, headBranch_2);
      if (q) return q;
    }
    i("tengu_review_remote_precondition_failed", {
      reason: b("empty_diff"),
      used_origin_ref: W !== baseBranch,
      had_explicit_base: v.length > 0,
      cwd_is_home: I(),
      on_base_branch: n.onBaseBranch,
      head_at_merge_base: n.headAtMergeBase,
      first_commit_held_back: S || void 0,
      has_untracked: n.untrackedCount === void 0 ? void 0 : n.untrackedCount > 0
    }), j("failed");
    let A = v ? `try a different base, e.g. \`${e} <branch>\`` : `pass one explicitly, e.g. \`${e} <branch>\``,
      y = `${W} (merge-base ${mergeBaseSha_2.slice(0, 7)})`,
      H = "no staged or unstaged edits to tracked files",
      D,
      C;
    if (n.headAtMergeBase && headBranch_2 && n.onBaseBranch) {
      let q = `If your work is on another branch, switch to it, or if the base should be something else, ${A}.`;
      if (W === headBranch_2) D = `you're on ${headBranch_2}, which is also the base of this review, and it has ${H}`, C = `Everything already committed on ${headBranch_2} counts as the base here, so only edits you haven't committed yet would be reviewed. ${q}`;else D = `you're on ${headBranch_2}, which is also the base of this review, and it has no commits beyond ${y} and ${H}`, C = q;
    } else if (n.headAtMergeBase && headBranch_2 === "HEAD") D = `the commit you have checked out is already part of ${y}, and there are ${H}`, C = `If your work is on a branch, switch to it. If you meant a different base, ${A}.`;else if (n.headAtMergeBase && headBranch_2) D = `${headBranch_2} has no commits beyond ${y} and ${H}`, C = `If your work is on another branch, switch to it. If this branch was already merged or you meant a different base, ${A}.`;else D = `the diff against ${y} is empty`, C = `If you have local edits, stage or commit them first. If your branch was already merged or you meant a different base, ${A}.`;
    let B = "";
    if (n.headAtMergeBase && n.parentSha) {
      let q = n.parentSha.slice(0, 12),
        ee = /^\d+$/.test(q) ? n.parentSha : q;
      i("tengu_review_remote_precondition_recovery", {
        reason: b("empty_diff"),
        method: b("last_commit_hint"),
        outcome: b("offered")
      }), B = ` To review your latest commit anyway, run \`${e} ${ee}\`. That id is the commit before it, and any earlier commit id or tag works the same way.`;
    }
    let G = S ? " To review this first commit whole, run /ultrareview in an interactive Claude Code session, which asks before it spends anything." : "";
    return {
      ok: !1,
      reason: "empty_diff",
      error: `No changes to review: ${D}.${$e(n.untrackedCount, e)} ${C}${B}${G}`
    };
  }
  let L = d$n(stdout_4);
  if (L) {
    let {
        maxFiles: n,
        maxLines: _
      } = dCr(),
      lines_3 = L.linesAdded + L.linesRemoved;
    if (L.filesCount > n || lines_3 > _) {
      i("tengu_review_remote_precondition_failed", {
        reason: b("local_diff_too_large"),
        files: L.filesCount,
        lines: lines_3,
        max_files: n,
        max_lines: _,
        cwd_is_home: I()
      }), j("failed");
      let {
          stdout: stdout_5,
          code: code_5
        } = await a$n(se().cwd(), [...kn, "-c", "core.quotepath=false", "diff", "--no-ext-diff", "--no-textconv", sS, "--numstat", mergeBaseSha_2], {}, {
          preserveOutputOnError: !1,
          timeout: 1e4,
          maxBuffer: 10485760
        }),
        y = code_5 === 0 ? ke(stdout_5) : "";
      return {
        ok: !1,
        reason: "local_diff_too_large",
        error: `Diff is too large for ultrareview: ${L.filesCount.toLocaleString()} ${O(L.filesCount, "file")}, ${lines_3.toLocaleString()} ${O(lines_3, "line")} changed (limits: ${n.toLocaleString()} ${O(n, "file")}, ${_.toLocaleString()} ${O(_, "line")}).${y} Pass a closer base branch (\`${e} <branch>\`) to narrow the scope, or split the change.`
      };
    }
  }
  return j("succeeded"), {
    ok: !0,
    scope: {
      mode: "branch",
      headBranch: headBranch_3,
      baseBranch: baseBranch,
      mergeBaseSha: mergeBaseSha_2,
      diffStat: stdout_4.trim(),
      hadArg: v.length > 0,
      diffFiles: L?.filesCount,
      diffLines: L ? L.linesAdded + L.linesRemoved : void 0,
      instructions: instructions
    }
  };
}
async function Re(o, e) {
  let [u, r, s] = await Promise.all([lt(Ot(), [...kn, "rev-list", "--parents", "--max-count=1", "HEAD", "--"], {
      preserveOutputOnError: !1,
      env: ks()
    }), lt(Ot(), [...kn, "symbolic-ref", "--quiet", "HEAD"], {
      preserveOutputOnError: !1,
      env: ks()
    }), lt(Ot(), [...kn, "ls-files", "--others", "--exclude-standard", "--directory", "--no-empty-directory", "-z", "--", ":/"], {
      preserveOutputOnError: !1,
      timeout: 5000,
      maxBuffer: 1048576,
      env: ks({
        GIT_LITERAL_PATHSPECS: ""
      })
    })]),
    [l, h, ...k] = u.code === 0 ? u.stdout.trim().split(/\s+/) : [],
    headBranch_4 = r.exitCode === 0 ? r.stdout.trim().replace(/^refs\/heads\//, "") || void 0 : r.exitCode === 1 ? "HEAD" : void 0;
  return {
    headBranch: headBranch_4,
    onBaseBranch: headBranch_4 === void 0 ? void 0 : headBranch_4 !== "HEAD" && (headBranch_4 === e || `origin/${headBranch_4}` === e),
    headAtMergeBase: l ? l === o : void 0,
    parentSha: k.length ? void 0 : h || void 0,
    headIsRoot: l ? !h : void 0,
    untrackedCount: s.code === 0 ? F(s.stdout.split("\x00"), Boolean) : void 0
  };
}
function $e(o, e) {
  if (!o) return "";
  return ` Git also sees ${o.toLocaleString()} untracked ${O(o, "file or folder", "files or folders")} here. New files aren't part of a review until git tracks them: run \`git add\` on the ones you want reviewed, then rerun ${e}.`;
}
function ke(o, e = 3) {
  let {
      perFileStats: perFileStats
    } = uvr(o, Number.POSITIVE_INFINITY),
    r = [...perFileStats.entries()].map(([path, h]) => ({
      path: path,
      lines: h.added + h.removed
    })).filter(item => item.lines > 0);
  if (r.length === 0) return "";
  return ` Largest files: ${r.sort((itemA, itemB) => itemB.lines - itemA.lines).slice(0, e).map(item => `${item.path} (${item.lines.toLocaleString()} ${O(item.lines, "line")})`).join(", ")}.`;
}
function F4t(o, e = 80) {
  return mt(o.replace(/\s+/g, " ").trim(), e);
}
async function Ee(o) {
  if (o.startsWith("-") || o.includes(":") || /\s/.test(o)) return "not_found";
  let env = {
      ...vbt(),
      GIT_SSH_COMMAND: `${a.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o StrictHostKeyChecking=yes`,
      GIT_ALLOW_PROTOCOL: "https:http:ssh"
    },
    u = await lt(Ot(), [...kn, ...sGe, "-c", "credential.helper=", "-c", "core.askPass=", "ls-remote", "--heads", "--exit-code", "--end-of-options", "origin", o], {
      timeout: 4000,
      preserveOutputOnError: !1,
      env: env
    });
  if (u.code !== 0) return u.code === 2 ? "not_found" : "probe_failed";
  if (!u.stdout.split(`
`).some(item => item.split("\t")[1]?.trim() === `refs/heads/${o}`)) return "not_found";
  return (await lt(Ot(), [...kn, ...sGe, "-c", "credential.helper=", "-c", "core.askPass=", "fetch", "--no-tags", "--end-of-options", "origin", `refs/heads/${o}:refs/remotes/origin/${o}`], {
    timeout: 15000,
    preserveOutputOnError: !1,
    env: env
  })).code === 0 ? "recovered" : "fetch_failed";
}
async function Se(o) {
  let {
    stdout: stdout_6,
    code: code_6
  } = await lt(Ot(), [...kn, "for-each-ref", "--format=%(refname:short)", "--count=2000", "refs/heads", "refs/remotes/origin"], {
    preserveOutputOnError: !1,
    env: ks()
  });
  if (code_6 !== 0) return null;
  let r = new Map();
  for (let k of stdout_6.split(`
`)) {
    let w = k.trim();
    if (!w || w === "origin" || w === "origin/HEAD") continue;
    let N = w.startsWith("origin/") ? w.slice(7) : w;
    if (w.startsWith("origin/") || !r.has(N)) r.set(N, w);
  }
  let s = o === "main" ? "master" : o === "master" ? "main" : null;
  if (s !== null) {
    let k = r.get(s);
    if (k) return k;
  }
  let l = null,
    h = 3;
  for (let [k, w] of r) {
    if (Math.abs(k.length - o.length) >= h) continue;
    let N = vne(o, k, h - 1);
    if (N > 0 && N < h) h = N, l = w;
  }
  return l;
}
var message_2 = "Couldn't check whether this review can run, so it stopped before uploading your code. Try again shortly; if this keeps happening, open a pull request for this branch and review the pull request instead.";
async function Uar({
  overageConfirmed: overageConfirmed,
  credentials: credentials_2,
  skipLowCreditsNote = !1,
  bundleFollows: bundleFollows
}) {
  let s = await de(credentials_2);
  if (!s) {
    if (bundleFollows && TAs()) return {
      kind: "blocked",
      reason: "preflight_unavailable",
      message: message_2,
      actionUrl: null
    };
    return {
      kind: "proceed",
      billingNote: "",
      preflightUnavailable: !0
    };
  }
  let billingNote = s.billing_note ?? "",
    githubLogin = s.github_login ?? null;
  switch (s.action) {
    case "proceed":
      return {
        kind: "proceed",
        billingNote: billingNote,
        githubLogin: githubLogin
      };
    case "blocked":
      return {
        kind: "blocked",
        reason: s.blocked?.reason ?? "server",
        message: s.blocked?.message ?? "Ultrareview is unavailable for your organization.",
        actionUrl: s.blocked?.action_url ?? null
      };
    case "confirm":
      {
        if (overageConfirmed) return {
          kind: "proceed",
          billingNote: billingNote,
          githubLogin: githubLogin
        };
        let lowCreditsNote = skipLowCreditsNote ? null : await me(credentials_2);
        return {
          kind: "needs-confirm",
          body: `This review bills as usage credits (${dve()}).${lowCreditsNote ? `
${lowCreditsNote}` : ""}`,
          lowCreditsNote: lowCreditsNote,
          billingNote: billingNote,
          githubLogin: githubLogin
        };
      }
  }
}
var Be = 3;
async function Bar(o, context, u, r) {
  let s = r?.invocation ?? "/code-review ultra",
    l = text => ({
      launched: !1,
      blocks: [{
        type: "text",
        text: text
      }]
    }),
    h = await rxe({
      allowBundle: !0,
      storageV5: context.storageV5,
      credentials: context.credentials
    });
  if (!h.eligible) {
    let errors = h.errors;
    if (errors.length > 0) {
      i("tengu_review_remote_precondition_failed", {
        reason: b("remote_agent_ineligible"),
        precondition_errors: fl(errors.map(item => item.type)),
        cwd_is_home: I()
      });
      let P = errors.map(item => {
        if (item.type === "not_in_git_repo") return be(s);
        if (item.type === "no_git_remote") return `${s} needs a GitHub remote so it can clone this repository into the cloud. If this project is not on GitHub yet, run "gh repo create --source=. --push" to create one; if a GitHub repo already exists, run "git remote add origin REPO_URL && git push -u origin HEAD".`;
        return MSe(item);
      }).join(`
`);
      if (o.mode === "branch" && o.noMergeBase) i("tengu_review_remote_precondition_recovery", {
        reason: b("no_merge_base"),
        method: b("empty_tree_bundle"),
        outcome: b("failed")
      });
      return m("ultrareview_launch", "remote_agent_ineligible"), l(`Ultrareview cannot launch:
${P}`);
    }
  }
  let environmentId = "env_011111111111111111111113",
    w = lve(),
    N = (E, P, x) => {
      if (typeof E !== "number" || !Number.isFinite(E)) return P;
      let L = Math.floor(E);
      if (L <= 0) return P;
      return L > x ? P : L;
    },
    BUGHUNTER_MODEL = kAs(),
    T = {
      BUGHUNTER_DRY_RUN: "1",
      AUTOPATCH_ENABLE_ASIMOV: "1",
      ...(w?.code_quality !== !1 && {
        BUGHUNTER_CODE_QUALITY: "1"
      }),
      BUGHUNTER_FLEET_SIZE: String(N(w?.fleet_size, 5, 20)),
      BUGHUNTER_MAX_DURATION: String(N(w?.max_duration_minutes, 10, 25)),
      BUGHUNTER_AGENT_TIMEOUT: String(N(w?.agent_timeout_seconds, 600, 1800)),
      BUGHUNTER_TOTAL_WALLCLOCK: String(N(w?.total_wallclock_minutes, 22, 27)),
      BUGHUNTER_RESULT_RELAY_MAX_SEC: String((_ut() - Be) * 60),
      ...(BUGHUNTER_MODEL && {
        BUGHUNTER_MODEL: BUGHUNTER_MODEL
      }),
      ...(process.env.BUGHUNTER_DEV_BUNDLE_B64 && {
        BUGHUNTER_DEV_BUNDLE_B64: process.env.BUGHUNTER_DEV_BUNDLE_B64
      })
    },
    session,
    command,
    v,
    Y = "",
    j = [],
    R,
    reason_2,
    status_code,
    server_type,
    server_reason;
  if (o.mode === "pr") {
    let E = await tC(),
      P = E && p$(E) ? null : E;
    if (!P) return i("tengu_review_remote_precondition_failed", {
      reason: b("no_github_remote_post_confirm"),
      cwd_is_home: I()
    }), m("ultrareview_launch", "no_github_remote"), null;
    let x = `ultrareview: ${P.owner}/${P.name}#${o.prNumber}`;
    session = await YL({
      initialMessage: null,
      source: "ultrareview",
      description: x,
      title: x,
      signal: context.abortController.signal,
      storageV5: context.storageV5,
      credentials: context.credentials,
      branchName: `refs/pull/${o.prNumber}/head`,
      environmentId: environmentId,
      tags: ["ultrareview"],
      environmentVariables: {
        BUGHUNTER_PR_NUMBER: o.prNumber,
        BUGHUNTER_REPOSITORY: `${P.owner}/${P.name}`,
        ...T
      },
      onCreateFail: (L, n, _) => {
        R = L, reason_2 = c(n), status_code = _?.status, server_type = pe(_?.serverType), server_reason = pe(_?.serverReason);
      }
    }), command = `/ultrareview ${o.prNumber}`, v = `${P.owner}/${P.name}#${o.prNumber}`;
  } else {
    let {
      headBranch: headBranch_5,
      baseBranch: baseBranch_2,
      mergeBaseSha: x,
      diffStat: diffStat,
      noMergeBase: noMergeBase
    } = o;
    Y = diffStat;
    let _, bundle_fail_kind;
    if (session = await YL({
      initialMessage: null,
      source: "ultrareview",
      description: `ultrareview: ${headBranch_5}`,
      signal: context.abortController.signal,
      storageV5: context.storageV5,
      credentials: context.credentials,
      useBundle: !0,
      bundleBaseRef: x,
      bundleForceScope: noMergeBase ? "squashed" : void 0,
      environmentId: environmentId,
      tags: ["ultrareview"],
      environmentVariables: {
        BUGHUNTER_BASE_BRANCH: x,
        ...T
      },
      onBundleFail: (S, A) => {
        _ = S, bundle_fail_kind = c(A);
      },
      onBundleNotice: S => {
        j.push(S);
      },
      onCreateFail: (S, A, y) => {
        R = S, reason_2 = c(A), status_code = y?.status, server_type = pe(y?.serverType), server_reason = pe(y?.serverReason);
      }
    }), !session) {
      i("tengu_review_remote_teleport_failed", {
        mode: b("branch"),
        reason: reason_2,
        bundle_fail_kind: bundle_fail_kind,
        status_code: status_code,
        server_type: server_type,
        server_reason: server_reason
      });
      let S = context.abortController.signal.aborted;
      if (noMergeBase && !S) i("tengu_review_remote_precondition_recovery", {
        reason: b("no_merge_base"),
        method: b("empty_tree_bundle"),
        outcome: b("failed")
      });
      if (!S) m("ultrareview_launch", "teleport_failed");
      return l(_ ?? (R ? `Ultrareview could not start the cloud session: ${R}` : `Repo is too large. Push a PR and use \`${s} <PR#>\` instead.`));
    }
    command = "/ultrareview", v = noMergeBase === "unrelated_history" ? `${headBranch_5} (all files \u2014 no common history with ${baseBranch_2})` : noMergeBase === "base_ref_missing" ? `${headBranch_5} (all files)` : noMergeBase === "first_commit" ? `${headBranch_5} (every file in the first commit)` : headBranch_5 === baseBranch_2 ? headBranch_5 : `${headBranch_5} \u2192 ${baseBranch_2}`;
  }
  if (!session) {
    if (i("tengu_review_remote_teleport_failed", {
      mode: b("pr"),
      reason: reason_2,
      status_code: status_code,
      server_type: server_type,
      server_reason: server_reason
    }), !context.abortController.signal.aborted) m("ultrareview_launch", "teleport_failed");
    if (R) return l(`Ultrareview could not start the cloud session: ${R}`);
    return null;
  }
  let taskId;
  if (!r?.skipTaskRegistration) taskId = LHe({
    remoteTaskType: "ultrareview",
    session: session,
    command: command,
    context: context,
    isRemoteReview: !0,
    applyFixesOnComplete: r?.applyFixesOnComplete,
    reviewInstructions: o.mode === "branch" ? o.instructions : void 0,
    postReviewTo: r?.postReviewToPR && o.mode === "pr" && !r?.signal?.aborted ? {
      repo: o.repo,
      prNumber: o.prNumber
    } : void 0
  }).taskId;
  if (i("tengu_review_remote_launched", {
    mode: c(o.mode),
    had_arg: o.hadArg,
    post_armed: r?.postReviewToPR === !0 && o.mode === "pr" && !r?.signal?.aborted,
    had_instructions: o.mode === "branch" && !!o.instructions,
    diff_files: o.diffFiles,
    diff_lines: o.diffLines
  }), o.mode === "branch" && o.noMergeBase) {
    if (i("tengu_review_remote_precondition_recovery", {
      reason: b("no_merge_base"),
      method: b("empty_tree_bundle"),
      outcome: b("succeeded")
    }), o.noMergeBase === "first_commit") g("ultrareview_launch");else p("ultrareview_launch", "no_merge_base_empty_tree_fallback");
  } else g("ultrareview_launch");
  rns(context.storageV5);
  let sessionUrl = DSe(session.id),
    V = u.trim() ? `${u.trim()}
` : "",
    oe = Y ? `
Scope: ${Y}` : "",
    ie = o.mode === "branch" && o.instructions ? r?.skipTaskRegistration ? `
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
      text: `${V}Ultrareview launched for ${v} (${X9()}, runs in the cloud).${r?.findingsArriveInSession ? " The findings arrive here when it finishes." : ""}${r?.postReviewToPR && o.mode === "pr" ? `
When it finishes, the findings will be posted to the PR as a comment from your GitHub account. (Keep this session open: the consent lives only here, so if it ends before the review finishes, nothing will be posted \u2014 even on resume.)` : ""}${oe}${ie}${j.map(item => `
${item}`).join("")}`
    }]
  };
}
function H4t(o, e) {
  return `The output above is already visible to the user. Briefly acknowledge it without repeating the target or billing note. Findings will arrive via task-notification.${o ? " The user passed --fix: when the findings arrive, apply them to the local working tree." : ""}${e ? ` The user's argument was interpreted as a review note, not a base branch: "${ne(e, qDn)}". The cloud review runs its standard pass over the branch diff and does not see the note; when the findings arrive, prioritize and relate them to the user's request.` : ""}`;
}
var Te = /^[a-z][a-z0-9_]{0,63}$/;
async function oKe(o, e) {
  if (!bN()) {
    let gate_blocker = CAs(),
      entitlement_blocker = gate_blocker === "entitlement" ? Nrn() : null;
    return i("tengu_review_remote_gate_blocked", {
      reason: pe(gate_blocker) ?? b("unknown"),
      entitlement_blocker: pe(entitlement_blocker)
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
  await qv();
  let message_3 = If("allow_remote_sessions", "Cloud sessions", "are");
  if (message_3) return eA("allow_remote_sessions", "slash_command"), {
    status: "error",
    message: message_3
  };
  let r = await $ar(o, e.invocation, {
    suppressSucceededRecoveryEvent: !e.confirm,
    suppressOfferedRecoveryEvent: e.confirm && !e.singlePass,
    confirmsBeforeLaunch: e.confirmsBeforeLaunch === !0,
    personRanTheCommand: e.personRanTheCommand === !0
  });
  if (!r.ok) return {
    status: "error",
    message: r.error,
    reason: r.reason
  };
  let s = await Uar({
    overageConfirmed: e.overageConfirmed,
    credentials: e.context.credentials,
    skipLowCreditsNote: e.confirm && !e.singlePass,
    bundleFollows: r.scope.mode === "branch"
  });
  if (s.kind === "blocked") return i("tengu_review_overage_blocked", {
    reason: Tb(s.reason)
  }), {
    status: "blocked",
    message: s.message,
    actionUrl: s.actionUrl,
    ...(Te.test(s.reason) && {
      reason: s.reason
    })
  };
  let l = () => {
    let T = r.scope.mode === "pr" ? `Reviewing PR ${r.scope.repo}#${r.scope.prNumber}.` : r.scope.noMergeBase ? "Reviewing all files on the current branch." : `Reviewing current branch against ${r.scope.baseBranch}.`,
      U = r.scope.mode === "branch" && r.scope.instructions ? ` Note for findings (not a base branch): "${F4t(r.scope.instructions)}"` : "";
    return `
${T}${U}`;
  };
  if (s.kind === "proceed" && s.preflightUnavailable && e.withholdOverageConsent && !e.overageConfirmed) return {
    status: "needs-confirm",
    body: `Couldn't verify your review quota right now, so this review may bill as usage credits (${dve()}).${l()}`,
    billingNote: ""
  };
  if (s.kind === "needs-confirm") {
    if (e.withholdOverageConsent) return {
      status: "needs-confirm",
      body: `${s.body}${l()}`,
      billingNote: s.billingNote
    };
    if (i("tengu_review_overage_dialog_shown", {}), !e.confirm) return {
      status: "needs-confirm",
      body: `${s.body}${l()}`,
      billingNote: s.billingNote
    };
    e.markOverageConfirmed();
  }
  if (e.confirm && r.scope.mode === "branch" && r.scope.noMergeBase) i("tengu_review_remote_precondition_recovery", {
    reason: b("no_merge_base"),
    method: b("empty_tree_bundle"),
    outcome: b("accepted")
  });
  if (!e.confirm) {
    let T = r.scope.mode === "pr" ? `Reviewing PR ${r.scope.repo}#${r.scope.prNumber}` : r.scope.noMergeBase === "unrelated_history" ? `Reviewing all files (no common history with ${r.scope.baseBranch})
Scope: ${r.scope.diffStat}` : r.scope.noMergeBase === "base_ref_missing" ? `Reviewing all files (no ${r.scope.baseBranch} branch to compare against)
Scope: ${r.scope.diffStat}` : r.scope.noMergeBase === "first_commit" ? `Reviewing every file in the first commit (there is nothing earlier to compare with)
Scope: ${r.scope.diffStat}` : `Reviewing current branch against ${r.scope.baseBranch}
Scope: ${r.scope.diffStat}`,
      U = r.scope.mode === "branch" && r.scope.instructions ? `
Note for findings (not a base branch): "${F4t(r.scope.instructions)}"` : "";
    return {
      status: "needs-confirm",
      body: `${T}${U}
${X9()} \xB7 Est. cost ${dve()} USD`,
      billingNote: s.billingNote
    };
  }
  let h = e.postReview === !0 && !but(),
    postReviewToPR = e.postReview === !0 && !h && r.scope.mode === "pr" && ro(r.scope.host),
    w = await Bar(r.scope, e.context, s.billingNote, {
      skipTaskRegistration: e.skipTaskRegistration,
      invocation: e.invocation,
      applyFixesOnComplete: e.applyFixes,
      postReviewToPR: postReviewToPR
    });
  if (!w?.launched) return {
    status: "error",
    message: w?.blocks.map(T => T.type === "text" ? T.text : "").join("").trim() || "Failed to launch cloud review session."
  };
  let N = e.postReview === !0 && !postReviewToPR,
    M = w.blocks.map(item => item.type === "text" ? item.text : "").join("").trim();
  return {
    status: "launched",
    sessionId: w.sessionId,
    sessionUrl: w.sessionUrl,
    taskId: w.taskId,
    title: w.title,
    message: h ? `${M}${Har}` : N ? `${M}${Far}` : M,
    billingNote: s.billingNote,
    postReviewTo: postReviewToPR && r.scope.mode === "pr" ? {
      repo: r.scope.repo,
      prNumber: r.scope.prNumber
    } : void 0,
    postIgnored: N || void 0,
    lowCreditsNote: e.singlePass && s.kind === "needs-confirm" && s.lowCreditsNote || void 0
  };
}
async function le() {
  let o = await tC();
  return !!o && !p$(o);
}
function be(o, e = !1) {
  let u = e ? `run "git init" and commit a starting point. ${o} then reviews the changes you make on top of that commit.` : `run "git init" and commit your work. ${o} then reviews that first commit whole if it is small enough, and after that the changes you make on top of it.`,
    r = Cu() ? "Open a folder that is a git repository with at least one commit, then try again." : `If your project already uses git, cd into its folder and rerun ${o}. If it doesn't yet, ${u}`;
  return `${o} reviews the changes a git branch makes on top of an earlier commit, but ${ce()} is not inside a git repository. ${r}`;
}
function I() {
  try {
    let o = ye();
    if (!o) return !1;
    return dF($n(he(ce())), $n(he(o)));
  } catch {
    return !1;
  }
}
export { Far, Har, N4t, $ar, F4t, Uar, Bar, H4t, oKe };