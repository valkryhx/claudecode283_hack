// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
class uTt {
  scriptSha256ById = new Map();
}
function RXr(r, s, i) {
  let n = s.get(uTt).scriptSha256ById.get(r);
  if (n !== void 0) return n;
  let e = Object.values(i.all()).find(item => item.type === "local_workflow" && item.workflowRunId === r && item.withholdScriptFromSdkEvents === !0);
  if (e === void 0) return;
  return e.script === "" ? "" : st(e.script);
}
var reason = "This workflow run hides its script, and this session has not loaded that script, so it cannot resume the run. Start a new run without resumeFromRunId.";
async function Gts(r, s, i, n) {
  let scriptSha256 = RXr(r, s, i);
  if (scriptSha256 === "") return {
    kind: "refused",
    reason: reason
  };
  if (scriptSha256 !== void 0) return {
    kind: "hidden",
    scriptSha256: scriptSha256
  };
  let t = await n();
  if ("refusal" in t) return {
    kind: "refused",
    reason: t.refusal
  };
  if (t.hiddenScriptSha256 !== void 0) return {
    kind: "refused",
    reason: "This workflow run hides its script, and this process has no record of starting it, so it will not resume it. Start a new run without resumeFromRunId."
  };
  if (t.hasUnreadLine === !0) return {
    kind: "refused",
    reason: `A line of the journal of workflow run ${r} cannot be read, so this session cannot tell whether the run hides its script and will not resume it. Start a new run without resumeFromRunId; it runs again the agents this run had finished.`
  };
  return {
    kind: "shared"
  };
}
export { uTt, RXr, reason as AXr, Gts };