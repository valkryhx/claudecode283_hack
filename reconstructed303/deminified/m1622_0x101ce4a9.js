// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
var Gh = {
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
  "away.until"(e) {
    return e === void 0 ? "in this turn" : `until a later attached-machines note says ${e} is reachable again, or the user says it is back or asks you to try again`;
  },
  "away.ending"() {
    return "Check once more only when the user says it is back or asks you to try again.";
  },
  host_unresponsive({
    name: name_3,
    checks: checks,
    intervalMs: intervalMs,
    whileRunning: whileRunning,
    stillConnected: stillConnected,
    returnNoted: returnNoted
  }) {
    if (stillConnected) return `${name_3} is still connected, but its reply to this command was not received (${checks} checks about ${Math.round(intervalMs / 1000)} s apart got no answer, though ${name_3} answered a liveness check). Its state is unknown \u2014 it may have completed, failed, or still be running; the reply may have been too large to deliver. Do not re-run non-idempotent commands on ${name_3} just to see the output. If the output may be large, try a narrower command (part of a file, a filter, or a smaller image); otherwise do the rest of the task without ${name_3}, and tell the user what you could not verify.`;
    let r = `${name_3} stopped answering ${whileRunning ? "while this command was running" : "after this command was sent to it"} (${checks} checks about ${Math.round(intervalMs / 1000)} s apart went unanswered). Its state is unknown \u2014 it may have completed, failed, ${whileRunning ? "or still be running" : "never started, or still be running"}.`;
    return returnNoted ? `${r} Do not call ${name_3} again ${Gh["away.until"](name_3)}; then check what this command did before repeating it. Meanwhile do the rest of the task without ${name_3}, and tell the user what is blocked and what you could not verify.` : `${r} Do not retry non-idempotent commands on ${name_3} until ${name_3} reconnects, and do not call it again ${Gh["away.until"]()}: do the rest of the task without ${name_3}, and tell the user what is blocked and what you could not verify. ${Gh["away.ending"]()}`;
  },
  host_asleep({
    name: name_4,
    whileRunning: whileRunning_2,
    withdrawn: withdrawn,
    returnNoted: returnNoted_2
  }) {
    let o = withdrawn ? `This session has stopped waiting for it and withdrew its request: the command will be stopped when ${name_4} wakes, and may have partly run. Do not repeat it without checking.` : "The command was not cancelled: it is paused with the machine and will most likely continue when it wakes; what it had already done stays done. This session has stopped waiting for it. Do not repeat it, here or there.",
      a = `${name_4} went to sleep ${whileRunning_2 ? "while this command was running" : "after this command was sent to it"} (it said so itself). ${o}`;
    return returnNoted_2 ? `${a} Do not call ${name_4} again until a later attached-machines note says ${name_4} is reachable again, or the user says it is back or asks you to try again; then check what this command did before sending anything else to ${name_4}. Meanwhile do the rest of the task without ${name_4}, and tell the user what is paused.` : `${a} Do not call ${name_4} again in this turn: do the rest of the task without ${name_4}, and tell the user what is paused. Check once more only when the user says it is back or asks you to try again, and then check what this command did before sending anything else to ${name_4}.`;
  },
  "unverified_refusal.call_phase"({
    name: name_5,
    whileRunning: whileRunning_3
  }) {
    return `A reply that could not be verified says this session is no longer paired with ${name_5}. ${whileRunning_3 ? "It was running there; whether it finished is unknown." : "The state of this command there is unknown \u2014 it may or may not have run."} Do not retry it on ${name_5} until ${name_5} re-announces, and do not call it again in this turn; continue with what you can do without it, and tell the user you could not confirm whether it ${whileRunning_3 ? "finished" : "ran"}.`;
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
  "reconnect_hold.waiting"({
    name: name_6,
    holdMs: holdMs
  }) {
    return `Waiting for ${name_6} to come back (up to ${Math.round(holdMs / 1000)} s)\u2026`;
  },
  "reconnect_hold.ended"(e) {
    return `Stopped waiting for ${e}.`;
  },
  "reconnect_hold.gave_up"({
    name: name_7,
    holdMs: holdMs_2
  }) {
    return `This call already waited up to ${Math.round(holdMs_2 / 1000)} s for ${name_7} to come back; if this session is later told that ${name_7} is back, use it again from then.`;
  },
  "card.standing_unavailable"({
    name: name_8,
    kind: kind
  }) {
    return `Always allow isn\u2019t available for ${kind === "command" ? "commands run" : "files"} on ${name_8} yet \u2014 this approves once.`;
  },
  no_answer({
    name: name_9,
    afterMs: afterMs,
    waitAnnounced: waitAnnounced
  }) {
    let s = i(afterMs),
      o = `No one approved or denied this within ${s}, so it was not run on ${name_9}. Nothing changed there, and this session has stopped waiting for an answer to this request.`,
      a = `Assume the user is away: a further call to ${name_9} that needs approval, whether this one again, another command or a file edit, would wait up to ${s} and close the same way. Finish only what needs no approval on ${name_9}, then stop and tell the user which calls were not run`;
    return waitAnnounced ? `${o} ${a} and that you will ask again when they say so.` : `${o} ${name_9} announced no wait of its own for approvals, so this session's ${s} applied. ${a}, that you will ask again when they say so, and that making sure Claude Code on ${name_9} is up to date (or the Claude desktop app, if that is what runs it there) may give them longer to answer.`;
  },
  "ask_ended.notice"({
    name: name_10,
    toolName: toolName,
    reason: reason,
    afterMs: afterMs_2
  }) {
    return `${toolName} on ${name_10} was not run: ${h(name_10, toolName, reason, afterMs_2)}.`;
  },
  withdrawn({
    name: name_11,
    reason: reason_2
  }) {
    let n = `The request to run this on ${name_11} was withdrawn \u2014 ${d(name_11, reason_2)}; nothing ran there.`;
    switch (reason_2) {
      case "superseded":
      case "stale_answer":
        return `${n} Send it again once. If that request is withdrawn too, ask the user how to proceed rather than retrying.`;
      case "evicted":
        return `${n} Send it again only after some of the approvals already waiting on ${name_11} have been answered.`;
      case "replaced_by_retry":
        return `${n} Do not send it again: the newer copy is already asking.`;
      case "no_answer":
      case "host_withdrawn":
      case "tool_withdrawn":
      case "host_unbound":
      case "host_stopped":
      case "record_evicted":
      case "unrecognized":
        return `${n} Ask the user how to proceed rather than retrying.`;
    }
  }
};
function h(e, t, n, s) {
  switch (n) {
    case "no_answer":
      return `nobody answered the approval within ${i(s)}`;
    case "host_withdrawn":
      return `${e} disconnected`;
    case "superseded":
      return `Claude Code on ${e} restarted`;
    case "evicted":
      return `${e} had too many approvals waiting`;
    case "tool_withdrawn":
      return `${e} stopped offering ${t}`;
    case "host_unbound":
      return `${e} is no longer available to this session`;
    case "host_stopped":
      return `Claude Code on ${e} quit`;
    case "stale_answer":
      return `the answer reached ${e} too late`;
    case "record_evicted":
      return `${e} no longer had a record of the approval`;
    case "replaced_by_retry":
      return "a newer copy of the request replaced this one";
    case "unrecognized":
      return `${e} ended the approval`;
  }
}
function i(e) {
  let t = Math.round(e / 1000);
  return t >= 60 && t % 60 === 0 ? `${t / 60} min` : `${t} s`;
}
function d(e, t) {
  switch (t) {
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
export { Gh };