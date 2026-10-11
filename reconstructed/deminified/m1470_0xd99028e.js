// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var hA = {
  "ask_first.host_rule"({
    name: name,
    rules: rules
  }) {
    return `A permission rule of this session (${rules}) asks before it uses ${name}'s tools.`;
  },
  "ask_first.host_rule.cannot_ask"({
    name: name_2,
    rules: rules_2
  }) {
    return `The rule ${rules_2} asks before this session uses ${name_2}, and this context cannot ask.`;
  },
  "plan_mode.entered_while_asking"(e) {
    return `This session entered plan mode while the approval was pending; a state-changing ${e} call is not approved from plan mode.`;
  },
  host_unresponsive({
    name: name_3,
    checks: checks,
    intervalMs: intervalMs,
    whileRunning: whileRunning
  }) {
    return `${name_3} stopped answering ${whileRunning ? "while this command was running" : "after this command was sent to it"} (${checks} checks about ${Math.round(intervalMs / 1000)} s apart went unanswered). Its state is unknown \u2014 it may have completed, failed, ${whileRunning ? "or still be running" : "never started, or still be running"}. Do not retry non-idempotent commands on ${name_3} until ${name_3} reconnects, and do not call it again in this turn: do the rest of the task that this container can do, and tell the user what is blocked and what you could not verify. Check once more only when the user says it is back or asks you to try again.`;
  },
  "unverified_refusal.call_phase"({
    name: name_4,
    whileRunning: whileRunning_2
  }) {
    return `A reply that could not be verified says this session is no longer paired with ${name_4}. ${whileRunning_2 ? "It was running there; whether it finished is unknown." : "The state of this command there is unknown \u2014 it may or may not have run."} Do not retry it on ${name_4} until ${name_4} re-announces, and do not call it again in this turn; continue with what you can do without it, and tell the user you could not confirm whether it ${whileRunning_2 ? "finished" : "ran"}.`;
  },
  approval_no_longer_covers(e) {
    return `A permission rule changed while this was waiting; nothing ran on ${e}. Ask again to get a fresh approval.`;
  },
  "in_progress.checkin"(e) {
    return `Checking on ${e} \u2014 the call is still with it\u2026`;
  },
  "ask_seat.waiting"(e) {
    return `Waiting to send to ${e} \u2014 earlier calls there still need a permission answer\u2026`;
  },
  "ask_seat.sending"(e) {
    return `Sending to ${e}\u2026`;
  },
  "card.standing_unavailable"({
    name: name_5,
    kind: kind
  }) {
    return `Always allow isn\u2019t available for ${kind === "command" ? "commands run" : "files"} on ${name_5} yet \u2014 this approves once.`;
  },
  no_answer({
    name: name_6,
    afterMs: afterMs
  }) {
    return `No one approved or denied this within ${Math.round(afterMs / 1000)} s, so it was not run on ${name_6}. Nothing changed there. Continue with work that doesn't need this command and tell the user what you skipped; if it is essential, ask them directly.`;
  },
  "ask_ended.notice"({
    name: name_7,
    toolName: toolName,
    reason: reason,
    afterMs: afterMs_2
  }) {
    return `The approval for ${toolName} on ${name_7} was withdrawn \u2014 ${r(name_7, toolName, reason, afterMs_2)}; nothing was run.`;
  },
  withdrawn({
    name: name_8,
    reason: reason_2
  }) {
    return `The request to run this on ${name_8} was withdrawn \u2014 ${i(name_8, reason_2)}; nothing ran there. Ask the user how to proceed rather than retrying.`;
  }
};
function r(e, n, t, s) {
  switch (t) {
    case "no_answer":
      return `nobody answered within ${o(s)}`;
    case "host_withdrawn":
      return `${e} disconnected`;
    case "superseded":
      return `Claude Code on ${e} restarted`;
    case "evicted":
      return `${e} had too many approvals waiting`;
    case "tool_withdrawn":
      return `${e} stopped offering ${n}`;
    case "host_unbound":
      return `${e} is no longer available to this session`;
    case "host_stopped":
      return `Claude Code on ${e} quit`;
    case "stale_answer":
      return `the answer reached ${e} too late`;
    case "record_evicted":
      return `${e} no longer had a record of it`;
    case "replaced_by_retry":
      return "a newer copy of the request replaced it";
    case "unrecognized":
      return `${e} ended it`;
  }
}
function o(e) {
  let n = Math.round(e / 1000);
  return n >= 60 && n % 60 === 0 ? `${n / 60} min` : `${n} s`;
}
function i(e, n) {
  switch (n) {
    case "no_answer":
      return "no one answered it in time";
    case "host_withdrawn":
      return `Claude Code on ${e} left the session`;
    case "superseded":
      return `a newer Claude Code on ${e} took over from the one that asked`;
    case "evicted":
      return `too many requests were already waiting on ${e}`;
    case "tool_withdrawn":
      return `${e} stopped serving this tool`;
    case "host_unbound":
      return `${e} is no longer bound to this session`;
    case "host_stopped":
      return `Claude Code on ${e} was shutting down`;
    case "stale_answer":
      return `an answer was given but reached ${e} too late to count`;
    case "record_evicted":
      return `${e} no longer had a record of it`;
    case "replaced_by_retry":
      return "a newer copy of this request now carries the question";
    case "unrecognized":
      return `${e} let it go for a reason this build does not know`;
  }
}
export { hA };