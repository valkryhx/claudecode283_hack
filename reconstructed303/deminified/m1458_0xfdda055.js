// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { TXe } from "B:/~BUN/root/chunk-7z3ndmqr.js";
import { M0t, Dtn } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { rn } from "B:/~BUN/root/chunk-pjgzz98k.js";
function gwn({
  field: field,
  targetName: targetName
}) {
  let t = `${field} is not available on ${targetName}.`;
  return field === "run_in_background" ? `${t} The calling session has no way to poll a background task there. Run it in the foreground, or in the session's own environment.` : t;
}
function P8o({
  toolName: toolName,
  targetName: targetName_2
}) {
  return `${toolName} on ${targetName_2} is served for Claude Code remote tool execution and must be called through a cloud session's forwarder.`;
}
function O8o({
  toolName: toolName_2,
  targetName: targetName_3
}) {
  return `${toolName_2} on ${targetName_3} speaks a different remote tool execution protocol version than the caller. Update Claude Code on both machines.`;
}
function AKr({
  stoppedBy: stoppedBy,
  targetName: targetName_4
}) {
  switch (stoppedBy) {
    case "deadline":
      return `The call was stopped on ${targetName_4} at its deadline before the command started \u2014 nothing ran.`;
    case "shutdown":
      return `The call was stopped because Claude Code on ${targetName_4} is shutting down, before the command started \u2014 nothing ran.`;
    case "cancel":
      return `The call was cancelled on ${targetName_4} before the command started \u2014 nothing ran.`;
  }
}
function rnr({
  targetName: targetName_5,
  why: why
}) {
  return `${why === "gone" ? `That permission request is no longer pending on ${targetName_5}` : `This approval answers a different request than the one pending on ${targetName_5}`}, so nothing ran. Run the tool again if it is still needed.`;
}
function I8o({
  requestedMs: requestedMs,
  appliedMs: appliedMs,
  targetName: targetName_6
}) {
  let s = rn(requestedMs, {
      hideTrailingZeros: !0
    }),
    o = rn(appliedMs, {
      hideTrailingZeros: !0
    });
  if (s === o) s = `${requestedMs}ms`, o = `${appliedMs}ms`;
  return `The ${s} timeout this call asked for exceeds the ${o} ${targetName_6} allows a command \u2014 it was held to ${o}.`;
}
function M8o({
  targetName: targetName_7,
  violationRecorded: violationRecorded
}) {
  return `This command ran on ${targetName_7} inside Claude Code's sandbox, which is switched on there. The sandbox can block network connections and file writes outside the working directories.${violationRecorded ? " The sandbox_violations lines in the output name what it blocked." : ""} If that is why the command failed, running it again unchanged will fail the same way \u2014 tell the user what was blocked instead of guessing at another cause.`;
}
function D8o({
  targetName: targetName_8,
  shellId: shellId,
  outputPath: outputPath,
  limitMs: limitMs
}) {
  let o = rn(limitMs, {
    hideTrailingZeros: !0
  });
  return `Command running in the background on ${targetName_8} with ID: ${shellId}. Output is being written there to: ${outputPath}. This session is not notified when it finishes. Whether it is still running is told by ${targetName_8} itself: not by that file, which holds only what the command has printed (a program that buffers its output shows it there only when it flushes), and never by pgrep, ps, pkill or a network request from a later command, because where ${targetName_8} sandboxes commands each command sees only its own processes and its own network, so a command that is running looks absent from there. It is stopped after ${o} in the background, or earlier if ${targetName_8} stops serving this session.`;
}
function hwn(e, n) {
  switch (e) {
    case "caller_stopped":
      return "by this session";
    case "stopped_by_person":
      return `by the person at ${n}`;
    case "time_limit":
      return "at its time limit";
    case "serving_ended":
      return `when ${n} quit serving`;
    case "serving_off":
      return "when serving shut off";
    case "serving_check_failed":
      return `when ${n} could not check whether it still serves this session`;
    case "call_stopped":
      return "when its call ended";
  }
}
function onr(e, {
  targetName: targetName_9,
  max: max
}) {
  switch (e) {
    case "full":
      return `${targetName_9} already has ${max} background ${O(max, "command")} running or waiting for approval for this session, the most it takes at a time. Nothing was started. Wait for one to finish, or run this one in the foreground.`;
    case "sandbox_down":
      return `${targetName_9} has Claude Code's sandbox switched on, but the sandbox is not running there, so it starts no command in the background. Nothing was started.`;
    case "unavailable":
      return `${targetName_9} cannot run a command in the background for this session right now. Nothing was left running. Run it in the foreground.`;
  }
}
function L8o({
  toolName: toolName_3,
  targetName: targetName_10
}) {
  return `${toolName_3} is not served on ${targetName_10}.`;
}
function ywn({
  targetName: targetName_11,
  kind: kind,
  subject: subject
}) {
  switch (kind) {
    case "read":
      return `${targetName_11} does not let a cloud session read the credential that authorizes this connection (${subject}). Nothing was read.`;
    case "write":
      return `${targetName_11} does not let a cloud session change the credential file that authorizes this connection (${subject}). Nothing was written.`;
    case "keychain":
      return `${targetName_11} does not let a cloud session query its credential store (\`${subject}\`). Nothing was run.`;
    case "keychain_files":
      return `${targetName_11} does not let a cloud session open this Mac's keychain files (${subject}). Nothing was read or written.`;
    case "credential_store_files":
      return `${targetName_11} does not let a cloud session open this computer's Credential Manager files (${subject}). Nothing was read or written.`;
    case "exec_ingest":
      return `${targetName_11} does not let a cloud session write to ${subject}, which its background daemon would execute. Nothing was written.`;
    case "personal_credential":
      return `${targetName_11} does not let a cloud session read or change its SSH keys, cloud-provider credentials or saved developer-tool logins (${subject}). Nothing was read or written.`;
  }
}
function N8o({
  targetName: targetName_12
}) {
  return `${targetName_12} does not let a cloud session change its Claude Code settings files, or the folder that holds them. Nothing was run. Tell the user: those settings can only be changed on ${targetName_12} itself.`;
}
function F8o({
  targetName: targetName_13
}) {
  return `${targetName_13} does not let a cloud session change its Claude Code settings files. Nothing was changed. Tell the user: those settings can only be changed on ${targetName_13} itself.`;
}
function H8o({
  targetName: targetName_14,
  toolName: toolName_4
}) {
  return `${targetName_14} could not finish checking its permission rules for this ${toolName_4} call, so the call was not run and nobody was asked. Sending the same call again is unlikely to help. Tell the user: this is an error on ${targetName_14}, not a refusal by one of its rules.`;
}
function $8o({
  targetName: targetName_15,
  limit: limit
}) {
  return `${targetName_15} already keeps state for ${limit} cloud ${O(limit, "session")}, the most it holds at once \u2014 this session was not added and nothing ran. Tell the user: restarting Claude Code on ${targetName_15} frees those seats. Do not retry in a loop.`;
}
function U8o({
  targetName: targetName_16
}) {
  return `Claude Code on ${targetName_16} has only just started and had not finished loading the hooks and settings it checks every call against before this call's time ran out \u2014 nothing ran. Send the call again in a moment. If it is refused this way again, tell the user that Claude Code on ${targetName_16} is not finishing its start-up.`;
}
function B8o({
  targetName: targetName_17
}) {
  return `${targetName_17} changed how it allows this session's calls while this one was being checked \u2014 nothing ran. Send the call again.`;
}
function xKr({
  targetName: targetName_18
}) {
  return `${targetName_18} is set to run this session's calls only inside a sandbox, and the sandbox is not available \u2014 nothing ran. Sending the call again will not change that. Tell the user that the sandbox on ${targetName_18} is not available, and that its owner can check Claude Code there.`;
}
function j8o({
  targetName: targetName_19
}) {
  return `${targetName_19} could not read all of its settings when this call arrived, so it could not tell whether this session's calls may run there or only inside a sandbox \u2014 nothing ran. The call can be sent again in a moment. If it is refused this way again, tell the user that Claude Code on ${targetName_19} cannot read its settings, and that its owner can check the settings files there and whether the organization's settings have loaded.`;
}
function W8o({
  targetName: targetName_20,
  leg: leg,
  endedAsk: endedAsk,
  ageMs: ageMs
}) {
  let o = leg === "call" ? "This call" : "This answer to a permission request",
    a = endedAsk ? "the request it answered was withdrawn and nothing ran. Send the call again if it is still wanted." : leg === "call" ? "nothing ran. Send it again if it is still wanted." : "nothing ran for it.";
  return ageMs === void 0 ? `${o} reached ${targetName_20} over a connection that could not be dated against the service's clock, so whether it is still current is unknown \u2014 ${a}` : `${o} reached ${targetName_20} ${rn(ageMs)} after it was sent (the machine was asleep, offline, or reconnecting), after this session had stopped waiting for it \u2014 ${a}`;
}
function ynt({
  targetName: targetName_21,
  status: status,
  subtype: subtype
}) {
  let s = `${TXe({
    status: status,
    payloadType: "control_request",
    subtype: subtype
  })} Nothing was done for it on ${targetName_21}. Sending it again will not change that: tell the user instead of retrying.`;
  return status === "UNSPECIFIED" && subtype === "remote_tool_call" ? `${s} Retrying, reconnecting ${targetName_21} or changing a setting on it is unlikely to fix this, and a new session is unlikely to help: ${targetName_21} got no confirmation it could read from Anthropic's service that this session is the sender. Tell the user that, ask them to report it to Anthropic, and continue without ${targetName_21}.` : s;
}
function z8o({
  targetName: targetName_22,
  state: state
}) {
  switch (state) {
    case "declined":
      return `This session's attached repositories were not marked trusted, so its calls to ${targetName_22} are not accepted \u2014 nothing was done for this one. Sending it again will not change that: ask the person to answer the trust question, and tell them what stays blocked until they do.`;
    case "nothing_to_mark":
    case "not_marked":
      return `This session has repositories or files attached that its owner has not said they trust, so its calls to ${targetName_22} are not accepted. Nothing was done for this one. Sending the same call again will not change that. Call ${Dtn} once. If it refuses with a trust question, put the question to the person: their yes clears this. If it lists folders, call ${M0t} for the folder this session was using: the person's Allow clears this. If you have neither tool, if neither asks the person anything, or if ${targetName_22} still refuses after their answer, tell them plainly what stays blocked, and that a new session with no repository and none of their files can run a quick command.`;
  }
}
function G8o({
  targetName: targetName_23,
  askAgeMs: askAgeMs,
  windowMs: windowMs,
  dated: dated
}) {
  let o = Math.round(windowMs / 3600000),
    a = Math.floor(askAgeMs / 86400000),
    i = a >= 2 ? `${a} days` : "more than a day",
    r = dated ? `${i} after the request was raised \u2014 longer than an answer` : `over a channel that carries no delivery time, ${i} after the request was raised \u2014 longer than such an answer`;
  return `This approval reached ${targetName_23} ${r} is honoured for (${o} ${O(o, "hour")}) \u2014 so the request was withdrawn and nothing ran. Send the call again if it is still wanted.`;
}
function V8o({
  targetName: targetName_24,
  limit: limit_2
}) {
  return `${targetName_24} already has ${limit_2} approval ${O(limit_2, "request")} from this session waiting, the most it holds at once, so it did not ask about this call and this call was not run. Send it again once some of them have been answered.`;
}
function zre({
  targetName: targetName_25,
  reason: reason
}) {
  switch (reason) {
    case "evicted":
      return `An older pending approval on ${targetName_25} was withdrawn because too many were waiting \u2014 it did not run.`;
    case "tool_withdrawn":
      return `The tool is no longer offered on ${targetName_25} \u2014 nothing ran.`;
    case "host_unbound":
      return `${targetName_25} stopped serving this session while the permission request was open \u2014 nothing ran.`;
    case "host_stopped":
      return `Claude Code on ${targetName_25} stopped while the permission request was open \u2014 nothing ran.`;
    case "stale_answer":
      return `The answer to this permission request reached ${targetName_25} after the session had stopped waiting for it \u2014 the request was withdrawn and nothing ran.`;
    case "replaced_by_retry":
      return `A newer copy of this call now carries the permission request on ${targetName_25}; this one was withdrawn and nothing ran under it.`;
    case "record_evicted":
      return `${targetName_25} no longer holds a record of this permission request \u2014 nothing ran under it.`;
    case "no_answer":
      return `Nobody answered the permission request for this call on ${targetName_25} in the time the session waits \u2014 it was withdrawn and nothing ran.`;
    case "host_withdrawn":
      return `Claude Code on ${targetName_25} left the session while the permission request was open \u2014 nothing ran.`;
    case "superseded":
      return `A newer Claude Code on ${targetName_25} took over while the permission request was open \u2014 nothing ran.`;
    case "unrecognized":
      return `The permission request on ${targetName_25} ended for a reason this version of Claude Code does not recognise \u2014 nothing is known to have run.`;
  }
}
export { gwn, P8o, O8o, AKr, rnr, I8o, M8o, D8o, hwn, onr, L8o, ywn, N8o, F8o, H8o, $8o, U8o, B8o, xKr, j8o, W8o, ynt, z8o, G8o, V8o, zre };