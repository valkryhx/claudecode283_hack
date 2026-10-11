// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { lFe } from "B:/~BUN/root/chunk-9qtz41py.js";
import { Zt } from "B:/~BUN/root/chunk-bpp59nyd.js";
function GVt({
  field: field,
  targetName: targetName
}) {
  let n = `${field} is not available on ${targetName}.`;
  return field === "run_in_background" ? `${n} The calling session has no way to poll a background task there. Run it in the foreground, or in the session's own environment.` : n;
}
function oXr({
  toolName: toolName,
  targetName: targetName_2
}) {
  return `${toolName} on ${targetName_2} is served for Claude Code remote tool execution and must be called through a cloud session's forwarder.`;
}
function sXr({
  toolName: toolName_2,
  targetName: targetName_3
}) {
  return `${toolName_2} on ${targetName_3} speaks a different remote tool execution protocol version than the caller. Update Claude Code on both machines.`;
}
function iXr({
  requestedMs: requestedMs,
  appliedMs: appliedMs,
  targetName: targetName_4
}) {
  let o = Zt(requestedMs, {
      hideTrailingZeros: !0
    }),
    s = Zt(appliedMs, {
      hideTrailingZeros: !0
    });
  if (o === s) o = `${requestedMs}ms`, s = `${appliedMs}ms`;
  return `The ${o} timeout this call asked for exceeds the ${s} ${targetName_4} allows a command \u2014 it was held to ${s}.`;
}
function aXr({
  targetName: targetName_5,
  violationRecorded: violationRecorded
}) {
  return `This command ran on ${targetName_5} inside Claude Code's sandbox, which is switched on there. The sandbox can block network connections and file writes outside the working directories.${violationRecorded ? " The sandbox_violations lines in the output name what it blocked." : ""} If that is why the command failed, running it again unchanged will fail the same way \u2014 tell the user what was blocked instead of guessing at another cause.`;
}
function lXr({
  toolName: toolName_3,
  targetName: targetName_6
}) {
  return `${toolName_3} is not served on ${targetName_6}.`;
}
function VVt({
  targetName: targetName_7,
  kind: kind,
  subject: subject
}) {
  switch (kind) {
    case "read":
      return `${targetName_7} does not let a cloud session read the credential that authorizes this connection (${subject}). Nothing was read.`;
    case "write":
      return `${targetName_7} does not let a cloud session change the credential file that authorizes this connection (${subject}). Nothing was written.`;
    case "keychain":
      return `${targetName_7} does not let a cloud session query its credential store (\`${subject}\`). Nothing was run.`;
    case "keychain_files":
      return `${targetName_7} does not let a cloud session open this Mac's keychain files (${subject}). Nothing was read or written.`;
    case "credential_store_files":
      return `${targetName_7} does not let a cloud session open this computer's Credential Manager files (${subject}). Nothing was read or written.`;
    case "exec_ingest":
      return `${targetName_7} does not let a cloud session write to ${subject}, which its background daemon would execute. Nothing was written.`;
    case "personal_credential":
      return `${targetName_7} does not let a cloud session read or change its SSH keys, cloud-provider credentials or saved developer-tool logins (${subject}). Nothing was read or written.`;
  }
}
function cXr({
  targetName: targetName_8
}) {
  return `${targetName_8} does not let a cloud session change its Claude Code settings files, or the folder that holds them, from a shell command. Nothing was run. Make the change with the Edit or Write tool instead: it is then held for the owner of ${targetName_8} to review before it takes effect.`;
}
function dXr({
  targetName: targetName_9,
  limit: limit
}) {
  return `${targetName_9} already keeps state for ${limit} cloud ${I(limit, "session")}, the most it holds at once \u2014 this session was not added and nothing ran. Tell the user: restarting Claude Code on ${targetName_9} frees those seats. Do not retry in a loop.`;
}
function uXr({
  targetName: targetName_10
}) {
  return `Claude Code on ${targetName_10} has only just started and had not finished loading the hooks and settings it checks every call against before this call's time ran out \u2014 nothing ran. Send the call again in a moment. If it is refused this way again, tell the user that Claude Code on ${targetName_10} is not finishing its start-up.`;
}
function pXr({
  targetName: targetName_11,
  leg: leg,
  endedAsk: endedAsk,
  ageMs: ageMs
}) {
  let s = leg === "call" ? "This call" : "This answer to a permission request",
    r = endedAsk ? "the request it answered was withdrawn and nothing ran. Send the call again if it is still wanted." : leg === "call" ? "nothing ran. Send it again if it is still wanted." : "nothing ran for it.";
  return ageMs === void 0 ? `${s} reached ${targetName_11} over a connection that could not be dated against the service's clock, so whether it is still current is unknown \u2014 ${r}` : `${s} reached ${targetName_11} ${Zt(ageMs)} after it was sent (the machine was asleep, offline, or reconnecting), after this session had stopped waiting for it \u2014 ${r}`;
}
function Hje({
  targetName: targetName_12,
  status: status,
  subtype: subtype
}) {
  return `${lFe({
    status: status,
    payloadType: "control_request",
    subtype: subtype
  })} Nothing was done for it on ${targetName_12}. Sending it again will not change that: tell the user instead of retrying.`;
}
function fXr({
  targetName: targetName_13,
  state: state
}) {
  switch (state) {
    case "declined":
      return `This session's attached repositories were not marked trusted, so its calls to ${targetName_13} are not accepted \u2014 nothing was done for this one. Sending it again will not change that: ask the person to answer the trust question, and tell them what stays blocked until they do.`;
    case "not_marked":
      return `This session has repositories or files attached that its owner has not said they trust, so its calls to ${targetName_13} are not accepted \u2014 nothing was done for this one. Sending it again or reconnecting ${targetName_13} will not change that. If connecting ${targetName_13} showed the person a trust question, their yes clears this; if it showed none, this session cannot be cleared from there: for a quick command they can use a session with nothing attached, or they can start a new session. Tell the person plainly what stays blocked.`;
  }
}
function mXr({
  targetName: targetName_14,
  askAgeMs: askAgeMs,
  windowMs: windowMs
}) {
  let o = Math.round(windowMs / 3600000),
    s = Math.floor(askAgeMs / 86400000),
    r = s >= 2 ? `${s} days` : "more than a day";
  return `This approval reached ${targetName_14} over a channel that carries no delivery time, ${r} after the request was raised \u2014 longer than such an answer is honoured for (${o} ${I(o, "hour")}) \u2014 so the request was withdrawn and nothing ran. Send the call again if it is still wanted.`;
}
function nG({
  targetName: targetName_15,
  reason: reason
}) {
  switch (reason) {
    case "evicted":
      return `An older pending approval on ${targetName_15} was withdrawn because too many were waiting \u2014 it did not run.`;
    case "tool_withdrawn":
      return `The tool is no longer offered on ${targetName_15} \u2014 nothing ran.`;
    case "host_unbound":
      return `${targetName_15} stopped serving this session while the permission request was open \u2014 nothing ran.`;
    case "host_stopped":
      return `Claude Code on ${targetName_15} stopped while the permission request was open \u2014 nothing ran.`;
    case "stale_answer":
      return `The answer to this permission request reached ${targetName_15} after the session had stopped waiting for it \u2014 the request was withdrawn and nothing ran.`;
    case "replaced_by_retry":
      return `A newer copy of this call now carries the permission request on ${targetName_15}; this one was withdrawn and nothing ran under it.`;
    case "record_evicted":
      return `${targetName_15} no longer holds a record of this permission request \u2014 nothing ran under it.`;
    case "no_answer":
      return `Nobody answered the permission request for this call on ${targetName_15} in the time the session waits \u2014 it was withdrawn and nothing ran.`;
    case "host_withdrawn":
      return `Claude Code on ${targetName_15} left the session while the permission request was open \u2014 nothing ran.`;
    case "superseded":
      return `A newer Claude Code on ${targetName_15} took over while the permission request was open \u2014 nothing ran.`;
    case "unrecognized":
      return `The permission request on ${targetName_15} ended for a reason this version of Claude Code does not recognise \u2014 nothing is known to have run.`;
  }
}
export { GVt, oXr, sXr, iXr, aXr, lXr, VVt, cXr, dXr, uXr, pXr, Hje, fXr, mXr, nG };