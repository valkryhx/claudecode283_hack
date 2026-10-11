// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ho as host } from "B:/~BUN/root/chunk-y72v2pst.js";
async function eVn(s) {
  let {
      isNestedGitLabProject: isNestedGitLabProject,
      parseGitRemote: parseGitRemote,
      parseGitHubRepository: parseGitHubRepository
    } = await import("B:/~BUN/root/chunk-12npfqes.js"),
    r = parseGitRemote(s);
  if (r) return isNestedGitLabProject(r) ? null : r;
  let i = parseGitHubRepository(s);
  if (i) {
    let [owner, name] = i.split("/");
    if (owner && name) return {
      host: host,
      owner: owner,
      name: name
    };
  }
  return null;
}
async function BDr(s, e, t) {
  let report = {
    revisionGuessUsed: !1
  };
  if (!s) return {
    sources: [],
    outcomes: [],
    report: report
  };
  let {
    getDefaultBranch: getDefaultBranch
  } = await import("B:/~BUN/root/chunk-6ek0cv4x.js");
  if (e === "HEAD") e = "";
  let revisionGuessUsed = !1,
    revision = e || t || void 0;
  if (!revision) revision = (await getDefaultBranch()) || void 0, revisionGuessUsed = revision !== void 0;
  let branches = e && t && e !== t ? [e] : [],
    branchDropped,
    warnMessage;
  if (e && branches.length === 0) branchDropped = t ? "is_default" : "no_evidence", warnMessage = t ? `[bridge] requested branch '${e}' is the default branch \u2014 ` + "omitted from outcomes.branches (the runner stays on the clone)" : "[bridge] no session-anchored default-branch evidence \u2014 " + `omitting requested branch '${e}' from outcomes.branches; the remote session will work on a generated branch instead. Run 'git remote set-head origin -a' in the repo (or supply defaultBranch via the SDK) to restore branch continuity.`;
  let report_2 = {
      branchDropped: branchDropped,
      revisionGuessUsed: revisionGuessUsed,
      warnMessage: warnMessage
    },
    m = (f, d, g) => ({
      report: report_2,
      sources: [{
        type: "git_repository",
        url: `https://${f}/${d}/${g}`,
        revision: revision
      }],
      outcomes: [{
        type: "git_repository",
        git_info: {
          type: "github",
          repo: `${d}/${g}`,
          branches: branches
        }
      }]
    }),
    u = await eVn(s);
  if (u) return m(u.host, u.owner, u.name);
  return {
    sources: [],
    outcomes: [],
    report: report
  };
}
export { eVn, BDr };