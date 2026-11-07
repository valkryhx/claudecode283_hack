// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { jr as host } from "B:/~BUN/root/chunk-46ahshhq.js";
async function $_o(s) {
  let {
      isNestedGitLabProject: isNestedGitLabProject,
      parseGitRemote: parseGitRemote,
      parseGitHubRepository: parseGitHubRepository
    } = await import("B:/~BUN/root/chunk-7he8bzc1.js"),
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
async function JCs(s, e, t) {
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
  } = await import("B:/~BUN/root/chunk-q7s0csf0.js");
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
    l = (y, d, m) => ({
      report: report_2,
      sources: [{
        type: "git_repository",
        url: `https://${y}/${d}/${m}`,
        revision: revision
      }],
      outcomes: [{
        type: "git_repository",
        git_info: {
          type: "github",
          repo: `${d}/${m}`,
          branches: branches
        }
      }]
    }),
    p = await $_o(s);
  if (p) return l(p.host, p.owner, p.name);
  return {
    sources: [],
    outcomes: [],
    report: report
  };
}
export { $_o, JCs };