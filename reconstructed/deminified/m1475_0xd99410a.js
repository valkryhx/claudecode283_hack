// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { AMo } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { oc } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { q4 } from "B:/~BUN/root/chunk-3jyp964r.js";
import { cc } from "B:/~BUN/root/chunk-gsz9m7j5.js";
import { Qu } from "B:/~BUN/root/chunk-ydzwkn0c.js";
function CQe(e, n, t) {
  return () => {
    if (t?.aborted === !0) return;
    let r = n();
    return e.getCommandQueueSnapshot().some(s) || e.someSubmissionInFlight(i => o(i, r)) || (t === void 0 ? e.getInFlightDrainBatchStanding() !== "appended" && e.someInFlightDrainCommand(i => o(i, r)) : e.getInFlightDrainBatchStanding() === "passed-over" && e.someInFlightDrainCommand(s)) ? void 0 : r;
  };
}
function o(e, n) {
  return s(e) && (e.uuid === void 0 || n.findLast(t => t.uuid === e.uuid) === void 0);
}
function s(e) {
  if (!cc(e)) return !1;
  switch (e.mode) {
    case "task-notification":
      return !1;
    case "poll-event":
      {
        let n = e.pollEvent?.provenance?.authority;
        return n !== void 0 && n !== "peer-agent" && n !== "world-event";
      }
    case "prompt":
    case "bash":
      return AMo(e);
    case "orphaned-permission":
      return !0;
  }
  return !0;
}
function _qt({
  recipientName: recipientName,
  leaderMode: leaderMode,
  proactivityLevel: proactivityLevel,
  tasks: tasks
}) {
  let i = d(recipientName, tasks) ? leaderMode : q4(leaderMode, proactivityLevel),
    a = oc(i);
  return a === "plan" ? "default" : a;
}
function d(e, n) {
  return Object.values(n).some(item => Qu(item) && item.status === "running" && item.identity.agentName === e && item.paneTeardown === void 0 && item.identity.resumableAgentId !== void 0);
}
export { CQe, _qt };