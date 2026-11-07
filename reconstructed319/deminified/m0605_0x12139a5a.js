// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var SAs = "runner-declares";
var q$n = "diff-finds-nested-repository",
  wAs = "no-repository-checked-out";
function kAs(e) {
  return "--runner-declares=" + e.join(",");
}
async function gwa(e) {
  if (!e.startsWith("--runner-declares=")) return;
  let E = e.slice(18).split(","),
    n = E.includes("diff-finds-nested-repository"),
    t = !1;
  if (!n && !t) return;
  let {
    setRunnerDeclaredFreshMachinePerSession: setRunnerDeclaredFreshMachinePerSession,
    setRunnerDeclaredNestedRepositoryDiff: setRunnerDeclaredNestedRepositoryDiff,
    setRunnerDeclaredNoRepositoryCheckedOut: setRunnerDeclaredNoRepositoryCheckedOut
  } = await import("B:/~BUN/root/chunk-vtqz71wt.js");
  if (n) {
    if (setRunnerDeclaredNestedRepositoryDiff(!0), E.includes("no-repository-checked-out")) setRunnerDeclaredNoRepositoryCheckedOut(!0);
  }
  if (t) setRunnerDeclaredFreshMachinePerSession(!0);
}
export { SAs, q$n, wAs, kAs, gwa };