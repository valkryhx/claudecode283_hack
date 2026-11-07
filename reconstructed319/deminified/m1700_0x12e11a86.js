// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { sgt } from "B:/~BUN/root/chunk-teehnwdh.js";
import { zDe, GDe } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { cn } from "B:/~BUN/root/chunk-bkfncj77.js";
function U8n({
  field: field,
  targetName: targetName
}) {
  let n = `${field} is not available on ${targetName}.`;
  return field === "run_in_background" ? `${n} The calling session has no way to poll a background task there. Run it in the foreground, or in the session's own environment.` : n;
}
function XXs({
  toolName: toolName,
  targetName: targetName_2
}) {
  return `${toolName} on ${targetName_2} is served for Claude Code remote tool execution and must be called through a cloud session's forwarder.`;
}
function JXs({
  toolName: toolName_2,
  targetName: targetName_3
}) {
  return `${toolName_2} on ${targetName_3} speaks a different remote tool execution protocol version than the caller. Update Claude Code on both machines.`;
}
function QXs({
  refusal: refusal,
  toolName: toolName_3,
  targetName: targetName_4
}) {
  return `${targetName_4} refused this ${toolName_3} request: ${k(refusal, targetName_4)}. Nothing ran for this request. ${_(refusal, targetName_4)}`;
}
function _(e, t) {
  switch (e.what) {
    case "too_large":
      return "Sending it again unchanged will not help. If its input is large or deeply nested, a call with a smaller or flatter input may go through; if not, tell the user instead of retrying.";
    case "unmarked":
      return "Sending it again will not help: tell the user instead of retrying.";
    case "no_step":
    case "both_formats":
    case "not_honoured":
    case "malformed":
      return `Sending it again will not help: tell the user that updating Claude Code on ${t} may fix this.`;
    default:
      return e;
  }
}
function k(e, t) {
  switch (e.what) {
    case "unmarked":
      return `Anthropic's service did not mark it as checked, and ${t} takes this kind of request only with that mark`;
    case "no_step":
      return "it is not in the format that Anthropic's service said it was in";
    case "both_formats":
      return "it mixes fields of two request formats";
    case "too_large":
      return `it is larger, or more deeply nested, than ${t} accepts`;
    case "not_honoured":
      return v(e.part, t);
    case "malformed":
      return `${t} could not read it`;
    default:
      return e;
  }
}
function v(e, t) {
  switch (e) {
    case "check":
    case "run":
    case "decline":
      return `it asks for the step "${e}", which ${t} does not take`;
    case "permission_context":
    case "approval.permission_context":
      return `its field "${e}" may hold only a permission mode that ${t} knows`;
    default:
      return `it has the field "${e}", which ${t} does not take`;
  }
}
function ZXs({
  misfit: misfit,
  targetName: targetName_5,
  approvalCame: approvalCame
}) {
  let s = `the call was not run${approvalCame ? ", though an approval came with it" : ""}`;
  return misfit === "self_too_old" ? `Claude on ${targetName_5} is too old for this session \u2014 ${s}. Retrying will not help: tell the user to update the Claude app or Claude Code on ${targetName_5}, then open this session again.` : `This session's Claude Code is too old for ${targetName_5} \u2014 ${s}. Retrying will not help: tell the user to start a new session.`;
}
function PUo({
  stoppedBy: stoppedBy,
  targetName: targetName_6
}) {
  switch (stoppedBy) {
    case "deadline":
      return `The call was stopped on ${targetName_6} at its deadline before the command started \u2014 nothing ran.`;
    case "shutdown":
      return `The call was stopped because Claude Code on ${targetName_6} is shutting down, before the command started \u2014 nothing ran.`;
    case "cancel":
      return `The call was cancelled on ${targetName_6} before the command started \u2014 nothing ran.`;
  }
}
function OGr({
  targetName: targetName_7,
  why: why
}) {
  return `${why === "gone" ? `That permission request is no longer pending on ${targetName_7}` : `This approval answers a different request than the one pending on ${targetName_7}`}, so nothing ran. Run the tool again if it is still needed.`;
}
function eJs({
  requestedMs: requestedMs,
  appliedMs: appliedMs,
  targetName: targetName_8
}) {
  let s = cn(requestedMs, {
      hideTrailingZeros: !0
    }),
    o = cn(appliedMs, {
      hideTrailingZeros: !0
    });
  if (s === o) s = `${requestedMs}ms`, o = `${appliedMs}ms`;
  return `The ${s} timeout this call asked for exceeds the ${o} ${targetName_8} allows a command \u2014 it was held to ${o}.`;
}
var f = 3,
  x = {
    operation_not_permitted: "Operation not permitted",
    read_only_file_system: "Read-only file system",
    launch_services: "a LaunchServices error (-10810)",
    sandbox_unavailable: "the sandbox could not start"
  };
function tJs({
  targetName: targetName_9,
  failed: failed,
  violationRecorded: violationRecorded,
  filesystemConfined: filesystemConfined,
  symptoms: symptoms,
  deniedPathsNamed: deniedPathsNamed,
  firstWord: firstWord
}) {
  let h = deniedPathsNamed.slice(0, f).join(", "),
    u = deniedPathsNamed.length - f,
    m = u > 0 ? `${h} and ${u} more` : h,
    l = deniedPathsNamed.length === 1,
    r = deniedPathsNamed.length === 0 ? "" : `${m} (its settings deny ${l ? "that path" : "those paths"}). In this command ${l ? "that path looks" : "those paths look"} missing or empty even if ${l ? "it exists" : "they exist"} on ${targetName_9}. Do not substitute another file for ${l ? "it" : "them"}: tell the user ${l ? "it is" : "they are"} blocked.`,
    g = filesystemConfined ? `Commands this session runs on ${targetName_9} run inside Claude Code's sandbox there. A path its settings deny looks missing or empty to them, writes outside the working folders fail, and only allowed network hosts are reachable. If something you expect is absent, say it may be the sandbox rather than working around it.` : `Commands this session runs on ${targetName_9} run inside Claude Code's sandbox there, which lets them reach only allowed network hosts and does not restrict their file reads or writes.`;
  if (!failed && !violationRecorded) {
    if (r !== "") return `This ran inside ${targetName_9}'s sandbox, which hides ${r}`;
    return firstWord ? g : void 0;
  }
  let b = firstWord ? g : `This ran inside ${targetName_9}'s sandbox.`,
    p = failed && !firstWord && r === "" ? " Tell the user rather than working around it." : "",
    d = symptoms.filter(item => item !== "sandbox_unavailable"),
    y = d.includes("launch_services") ? " (opening an app or system service is blocked there: run that step outside the sandbox or ask the user to open it)" : "",
    w = symptoms.includes("sandbox_unavailable") ? ` Its output is only a bwrap or sandbox-exec error, which usually means the sandbox could not start and the command never ran. If so, running it again will not help: tell the user the sandbox on ${targetName_9} may not be starting.` : violationRecorded ? ` The sandbox_violations lines in its output name what it blocked${failed ? ", and if that is what failed it, running it again unchanged will fail the same way" : ", and that stays blocked on a rerun"}.${p}` : d.length > 0 ? ` Its output says ${d.map(item => x[item]).join(" and ")}, which there usually means the sandbox refused it${y}, and if so running it again unchanged will fail the same way.${p}` : "";
  if (r === "" && w === "" && !firstWord) return filesystemConfined ? `This ran inside ${targetName_9}'s sandbox: if it failed on a missing path, a refused write or an unreachable host, that may be the sandbox rather than the command.` : `This ran inside ${targetName_9}'s sandbox: if it failed reaching a network host, that may be the sandbox rather than the command.`;
  return `${b}${r === "" ? "" : ` It hides ${r}`}${w}`;
}
function nJs({
  targetName: targetName_10,
  shellId: shellId,
  outputPath: outputPath,
  limitMs: limitMs
}) {
  let o = cn(limitMs, {
    hideTrailingZeros: !0
  });
  return `Command running in the background on ${targetName_10} with ID: ${shellId}. Output is being written there to: ${outputPath}. This session is not notified when it finishes. Whether it is still running is told by ${targetName_10} itself: not by that file, which holds only what the command has printed (a program that buffers its output shows it there only when it flushes), and never by pgrep, ps, pkill or a network request from a later command, because where ${targetName_10} sandboxes commands each command sees only its own processes and its own network, so a command that is running looks absent from there. It is stopped after ${o} in the background, or earlier if ${targetName_10} stops serving this session.`;
}
function B8n(e, t) {
  switch (e) {
    case "caller_stopped":
      return "by this session";
    case "stopped_by_person":
      return `by the person at ${t}`;
    case "time_limit":
      return "at its time limit";
    case "serving_ended":
      return `when ${t} quit serving`;
    case "serving_off":
      return "when serving shut off";
    case "serving_check_failed":
      return `when ${t} could not check whether it still serves this session`;
    case "call_stopped":
      return "when its call ended";
  }
}
function IGr(e, {
  targetName: targetName_11,
  max: max
}) {
  switch (e) {
    case "full":
      return `${targetName_11} already has ${max} background ${P(max, "command")} running or waiting for approval for this session, the most it takes at a time. Nothing was started. Wait for one to finish, or run this one in the foreground.`;
    case "sandbox_down":
      return `${targetName_11} has Claude Code's sandbox switched on, but the sandbox is not running there, so it starts no command in the background. Nothing was started.`;
    case "unavailable":
      return `${targetName_11} cannot run a command in the background for this session right now. Nothing was left running. Run it in the foreground.`;
  }
}
function rJs({
  toolName: toolName_4,
  targetName: targetName_12
}) {
  return `${toolName_4} is not served on ${targetName_12}.`;
}
function j8n({
  targetName: targetName_13,
  kind: kind,
  subject: subject
}) {
  switch (kind) {
    case "read":
      return `${targetName_13} does not let a cloud session read the credential that authorizes this connection (${subject}). Nothing was read.`;
    case "write":
      return `${targetName_13} does not let a cloud session change the credential file that authorizes this connection (${subject}). Nothing was written.`;
    case "keychain":
      return `${targetName_13} does not let a cloud session query its credential store (\`${subject}\`). Nothing was run.`;
    case "keychain_files":
      return `${targetName_13} does not let a cloud session open this Mac's keychain files (${subject}). Nothing was read or written.`;
    case "credential_store_files":
      return `${targetName_13} does not let a cloud session open this computer's Credential Manager files (${subject}). Nothing was read or written.`;
    case "exec_ingest":
      return `${targetName_13} does not let a cloud session write to ${subject}, which its background daemon would execute. Nothing was written.`;
    case "personal_credential":
      return `${targetName_13} does not let a cloud session read or change its SSH keys, cloud-provider credentials or saved developer-tool logins (${subject}). Nothing was read or written.`;
  }
}
function oJs({
  targetName: targetName_14
}) {
  return `${targetName_14} does not let a cloud session change its Claude Code settings files, or the folder that holds them. Nothing was run. Tell the user: those settings can only be changed on ${targetName_14} itself.`;
}
function sJs({
  targetName: targetName_15
}) {
  return `${targetName_15} does not let a cloud session change its Claude Code settings files. Nothing was changed. Tell the user: those settings can only be changed on ${targetName_15} itself.`;
}
function iJs({
  targetName: targetName_16,
  toolName: toolName_5
}) {
  return `${targetName_16} could not finish checking its permission rules for this ${toolName_5} call, so the call was not run and nobody was asked. Sending the same call again is unlikely to help. Tell the user: this is an error on ${targetName_16}, not a refusal by one of its rules.`;
}
function aJs({
  targetName: targetName_17,
  limit: limit
}) {
  return `${targetName_17} already keeps state for ${limit} cloud ${P(limit, "session")}, the most it holds at once \u2014 this session was not added and nothing ran. Tell the user: restarting Claude Code on ${targetName_17} frees those seats. Do not retry in a loop.`;
}
function lJs({
  targetName: targetName_18
}) {
  return `Claude Code on ${targetName_18} has only just started and had not finished loading the hooks and settings it checks every call against before this call's time ran out \u2014 nothing ran. Send the call again in a moment. If it is refused this way again, tell the user that Claude Code on ${targetName_18} is not finishing its start-up.`;
}
function dJs({
  targetName: targetName_19
}) {
  return `${targetName_19} changed how it allows this session's calls while this one was being checked \u2014 nothing ran. Send the call again.`;
}
function OUo({
  targetName: targetName_20,
  remedy: remedy
}) {
  return `${targetName_20} is set to run this session's calls only inside a VM, and the VM is not available \u2014 nothing ran. Sending the call again will not change that. Tell the user that the VM on ${targetName_20} is not available${remedy === void 0 ? ", and that its owner can check Claude Code there." : `. ${remedy}`}`;
}
function cJs({
  targetName: targetName_21
}) {
  return `${targetName_21} could not read all of its settings when this call arrived, so it could not tell whether this session's calls may run there or only inside a VM \u2014 nothing ran. The call can be sent again in a moment. If it is refused this way again, tell the user that Claude Code on ${targetName_21} cannot read its settings, and that its owner can check the settings files there and whether the organization's settings have loaded.`;
}
function uJs({
  targetName: targetName_22,
  leg: leg,
  endedAsk: endedAsk,
  ageMs: ageMs
}) {
  let o = leg === "call" ? "This call" : "This answer to a permission request",
    a = endedAsk ? "the request it answered was withdrawn and nothing ran. Send the call again if it is still wanted." : leg === "call" ? "nothing ran. Send it again if it is still wanted." : "nothing ran for it.";
  return ageMs === void 0 ? `${o} reached ${targetName_22} over a connection that could not be dated against the service's clock, so whether it is still current is unknown \u2014 ${a}` : `${o} reached ${targetName_22} ${cn(ageMs)} after it was sent (the machine was asleep, offline, or reconnecting), after this session had stopped waiting for it \u2014 ${a}`;
}
function MEt({
  targetName: targetName_23,
  status: status,
  subtype: subtype
}) {
  let s = `${sgt({
    status: status,
    payloadType: "control_request",
    subtype: subtype
  })} Nothing was done for it on ${targetName_23}. Sending it again will not change that: tell the user instead of retrying.`;
  return status === "UNSPECIFIED" && subtype === "remote_tool_call" ? `${s} Retrying, reconnecting ${targetName_23} or changing a setting on it is unlikely to fix this, and a new session is unlikely to help: ${targetName_23} got no confirmation it could read from Anthropic's service that this session is the sender. Tell the user that, ask them to report it to Anthropic, and continue without ${targetName_23}.` : s;
}
function fJs({
  targetName: targetName_24,
  state: state
}) {
  switch (state) {
    case "declined":
      return `This session's attached repositories were not marked trusted, so its calls to ${targetName_24} are not accepted \u2014 nothing was done for this one. Sending it again will not change that: ask the person to answer the trust question, and tell them what stays blocked until they do.`;
    case "nothing_to_mark":
    case "not_marked":
      return `This session has repositories or files attached that its owner has not said they trust, so its calls to ${targetName_24} are not accepted. Nothing was done for this one. Sending the same call again will not change that. Call ${GDe} once. If it refuses with a trust question, put the question to the person: their yes clears this. If it lists folders, call ${zDe} for the folder this session was using: the person's Allow clears this. If you have neither tool, if neither asks the person anything, or if ${targetName_24} still refuses after their answer, tell them plainly what stays blocked, and that a new session with no repository and none of their files can run a quick command.`;
  }
}
function pJs({
  targetName: targetName_25,
  askAgeMs: askAgeMs,
  windowMs: windowMs,
  dated: dated
}) {
  let o = Math.round(windowMs / 3600000),
    a = Math.floor(askAgeMs / 86400000),
    i = a >= 2 ? `${a} days` : "more than a day",
    h = dated ? `${i} after the request was raised \u2014 longer than an answer` : `over a channel that carries no delivery time, ${i} after the request was raised \u2014 longer than such an answer`;
  return `This approval reached ${targetName_25} ${h} is honoured for (${o} ${P(o, "hour")}) \u2014 so the request was withdrawn and nothing ran. Send the call again if it is still wanted.`;
}
function mJs({
  targetName: targetName_26,
  limit: limit_2
}) {
  return `${targetName_26} already has ${limit_2} approval ${P(limit_2, "request")} from this session waiting, the most it holds at once, so it did not ask about this call and this call was not run. Send it again once some of them have been answered.`;
}
function ghe({
  targetName: targetName_27,
  reason: reason
}) {
  switch (reason) {
    case "evicted":
      return `An older pending approval on ${targetName_27} was withdrawn because too many were waiting \u2014 it did not run.`;
    case "tool_withdrawn":
      return `The tool is no longer offered on ${targetName_27} \u2014 nothing ran.`;
    case "host_unbound":
      return `${targetName_27} stopped serving this session while the permission request was open \u2014 nothing ran.`;
    case "host_stopped":
      return `Claude Code on ${targetName_27} stopped while the permission request was open \u2014 nothing ran.`;
    case "stale_answer":
      return `The answer to this permission request reached ${targetName_27} after the session had stopped waiting for it \u2014 the request was withdrawn and nothing ran.`;
    case "replaced_by_retry":
      return `A newer copy of this call now carries the permission request on ${targetName_27}; this one was withdrawn and nothing ran under it.`;
    case "record_evicted":
      return `${targetName_27} no longer holds a record of this permission request \u2014 nothing ran under it.`;
    case "no_answer":
      return `Nobody answered the permission request for this call on ${targetName_27} in the time the session waits \u2014 it was withdrawn and nothing ran.`;
    case "host_withdrawn":
      return `Claude Code on ${targetName_27} left the session while the permission request was open \u2014 nothing ran.`;
    case "superseded":
      return `A newer Claude Code on ${targetName_27} took over while the permission request was open \u2014 nothing ran.`;
    case "unrecognized":
      return `The permission request on ${targetName_27} ended for a reason this version of Claude Code does not recognise \u2014 nothing is known to have run.`;
  }
}
export { U8n, XXs, JXs, QXs, ZXs, PUo, OGr, eJs, tJs, nJs, B8n, IGr, rJs, j8n, oJs, sJs, iJs, aJs, lJs, dJs, OUo, cJs, uJs, MEt, fJs, pJs, mJs, ghe };