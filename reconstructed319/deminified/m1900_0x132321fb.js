// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { tWn } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { wht } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { cr, e2e, Zq, DL, rC } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { W_ } from "B:/~BUN/root/chunk-6j3gg6xr.js";
import { uz, Hht } from "B:/~BUN/root/chunk-2fbpqb1a.js";
function xVr({
  requested: requested,
  attached: attached
}) {
  let n = rC(requested);
  if (e2e(requested) && !DL(requested)) return `No machine named "${n}" is attached to this session \u2014 to run this in the session's own environment, omit "${cr}".`;
  let s = attached.length > 0 ? `Attached: ${attached.join(", ")}.` : "No machine is attached to this session: only this session's own environment is available \u2014 it is not the user's machine, so do not describe it as one.",
    r = n !== requested.trim() && attached.some(item => item === n || item === `${n} (offline)`) ? " (the name as written contains extra or invisible characters)" : "";
  return `No machine named "${n}"${r} is attached to this session. ${s}`;
}
var remedy = "this session's Claude Code is the older of the two: a newer cloud environment is needed, not a change on the machine";
function T(e, t) {
  let n = wht.map(item => `v${item}`).join("/"),
    s = Math.max(...wht);
  return {
    what: `the two Claude Code builds share no remote-tool protocol version (${t.length > 0 ? `its remote-tool protocol ${t.map(item => `v${item}`).join("/")}, ours ${n}` : `it names no remote-tool protocol version this session reads; ours is ${n}`})`,
    remedy: t.length === 0 ? "whichever of the two is older needs updating" : Math.max(...t) < s ? `Claude Code on ${e} is the older of the two and needs updating` : remedy
  };
}
function _(e, t) {
  return t === "computer" ? {
    what: "its Claude Code is older than this session works with",
    remedy: `Claude Code on ${e} needs updating (or the Claude desktop app, if that is what runs it there)`
  } : {
    what: "its Claude Code works only with a newer Claude Code than this session runs",
    remedy: remedy
  };
}
function FXn({
  name: name,
  why: why,
  runsOnlyThere: runsOnlyThere,
  servedInsteadBy: servedInsteadBy
}) {
  let {
      what: what,
      remedy: remedy_2
    } = why.cause === "wire" ? T(name, why.announced) : _(name, why.older),
    l = servedInsteadBy !== void 0 ? `${servedInsteadBy.toolName} has no home ${a()}; ${servedInsteadBy.name} serves it \u2014 set "${cr}" to "${servedInsteadBy.name}".` : runsOnlyThere === void 0 ? `Omit "${cr}" to run it ${a()} instead.` : `${runsOnlyThere} exists only on ${name}, so it cannot run from this session until then.`;
  return `${name} is attached but ${what}; the call did not run; ${remedy_2}. ${l}`;
}
function PVr() {
  return `The user's computer could not be reached right now; the call did not run. Do not call it again in this turn: do the rest of the task without it, and tell the user what is blocked. ${W_["away.ending"]()}`;
}
function AZs(e) {
  return `The user's computer is not ready yet \u2014 it may still be connecting (or running tools for cloud sessions is switched off on it, or this session could not verify it), so this session cannot tell yet whether "${rC(e)}" is its name; the call did not run. Try once more in a few seconds; if it is still not ready, tell the user.`;
}
function b(e, t) {
  return t ? `for "${rC(e)}" to reconnect after this session's cloud environment restarted` : `for "${rC(e)}" to connect (this session could not reach it either)`;
}
var g = "the computer may be asleep or offline, Claude may not be running on it, running tools for cloud sessions may be switched off on it, or this session could not verify it",
  y = "Do not send this call again yet. If you have not asked for a folder on that computer since that wait, look the user's computer folders up and, if that computer is listed as online, ask for the folder this session was using there (the user approves the request); when it is attached, send the call again. Otherwise, or if the request does not bring the computer back, ask the user to check that Claude is running on that computer.";
function xZs(e, t, n = !0, s = !1) {
  return `This call waited ${Math.round(t / 1000)} s ${b(e, n)}; it did not \u2014 ${g}. Nothing was sent. ${s ? y : "Ask the user to check that Claude is running on that computer rather than retrying immediately."}`;
}
function PZs(e, t, n = !0, s = !1) {
  return `This session already waited ${Math.round(t / 1000)} s earlier ${b(e, n)}, and it still has not \u2014 ${g}. Nothing was sent. ${s ? y : "Ask the user to check that Claude is running on that computer."}`;
}
function Djo(e) {
  return `"${rC(e)}" cannot run anything for this session right now: Claude on that computer stopped offering its tools here (the Claude app there may have closed or lost its connection, or running tools for cloud sessions was switched off on it). Nothing was sent. Ask the user to check that Claude is running on that computer, and to open the Claude app there if it was closed; if this session got the computer by asking to use one of its folders, look the folders up and ask to use that folder again afterwards.`;
}
function k(e, t) {
  switch (t) {
    case "idle":
      return `${e} stopped serving this session because the session had run nothing on it for a while: an idle computer frees its place for other sessions. Nothing on ${e} needs restarting and there is nothing to ask the user to fix. If the task still needs ${e}, look the user's computer folders up and ask for that folder again (the user approves the request); otherwise do the rest of the task without it. Do not call ${e} with "${cr}" until it is attached again.`;
    case "released":
      return `The person at ${e} disconnected this session from the folder it was using there. Nothing on ${e} is down. Do the rest of the task without ${e} and tell the user what that leaves undone; ask for the folder again only if the user wants you to. Do not call ${e} with "${cr}" until it is attached again.`;
  }
}
function OVr(e, t) {
  let n = rC(e);
  return `${n} is no longer attached to this session; the call did not run. ${k(n, t)}`;
}
function Ljo() {
  return "A computer is offering its tools to this session over an older connection that this session does not accept; the call did not run. If it is the user's computer, Claude Code on it needs updating. Do not retry until the user says it has been updated.";
}
function OZs() {
  return `The user's computer is linked to this session, but Claude on it has not connected \u2014 ${g}; the call did not run. Ask the user to check that Claude is running on that computer.`;
}
var Njo = "most often because Claude there was quit, Remote Control or running tools for cloud sessions was turned off on it, or this session was disconnected from that computer; more rarely Claude there stopped offering its tools by itself, and then says why on that computer";
function wVt(e, t = "machine") {
  let n = `${e} is not answering right now, most often because its Claude is not connected to this session (Claude is not running on ${e}, the computer is asleep or offline, or it is reconnecting after another session used it); the call did not run.`;
  if (t === "this_side") return `${n} Try again shortly, or ask the user to check that Claude is open on ${e}.`;
  return `${n} Do not call ${e} again in this turn: do the rest of the task without ${e}, and tell the user what is blocked and that opening Claude on ${e}, with the computer awake and online, is what brings it back. ${W_["away.ending"]()}`;
}
function HXn(e, t, n, s, {
  cause: cause,
  lastHeardAt: lastHeardAt,
  leftFor: leftFor
} = {}) {
  let x = lastHeardAt === void 0 ? "" : `last heard from at ${C(new Date(lastHeardAt))} UTC; `,
    i = `${e} could not be reached from this session (${x}${t}); the call did not run.`;
  if (n === "this_side") return `${i} If Claude is not running on ${e}, or is no longer connected to this session, ask the user to check it; a call that was too large to deliver will not succeed on a retry.`;
  let p = s ? "" : ", and to say when it is back",
    h = W_["away.until"](s ? e : void 0),
    d = s ? "" : ` ${W_["away.ending"]()}`;
  switch (cause) {
    case "asleep":
      return `${i} Waking the computer is all the user needs to do to bring ${e} back. Do not call ${e} again ${h}: do the rest of the task without ${e}, and tell the user what is blocked.${d}`;
    case "signed_off":
      if (leftFor !== void 0) return `${i} ${k(e, leftFor)}`;
      return `${i} Its Claude stopped serving this session by its own word, ${Njo}: ask the user to open Claude on ${e} again with Remote Control on${p}. Do not call ${e} again ${h}: do the rest of the task without ${e}, and tell the user what is blocked.${d}`;
    case "busy":
      return `${i} The last thing heard from it was its word that it was busy running a command and could not hear this session, so Claude on ${e} and the computer are most likely fine and it is the connection between them and this session that is down: ask the user to check that computer's network, and not to quit Claude there, which would stop the command it is running${s ? "" : "; and to say when it is back"}. Do not call ${e} again ${h}: do the rest of the task without ${e}, and tell the user what is blocked.${d}`;
    case void 0:
      return `${i} If Claude is not running on ${e}, or is no longer connected to this session, ask the user to check it${p}. Do not call ${e} again ${h}: do the rest of the task without ${e}, and tell the user what is blocked.${d}`;
    case "silent":
      return `${i} Most likely Claude on ${e} is no longer running (the app was closed, say) or lost its connection, or the computer went to sleep or offline: ask the user to open Claude on ${e} again with the computer awake and online${p}. Do not call ${e} again ${h}: do the rest of the task without ${e}, and tell the user what is blocked.${d}`;
  }
}
function IZs({
  name: name_2,
  toolName: toolName
}) {
  return `${name_2} announced ${toolName} in a form this session cannot read (a version or naming mismatch between the two Claude Code builds \u2014 update whichever is older); nothing ran.`;
}
function lyn({
  name: name_3,
  toolName: toolName_2
}) {
  return `${name_3} does not serve ${toolName_2} right now (its MCP server may have disconnected there); nothing ran.`;
}
function MZs({
  name: name_4,
  toolName: toolName_3
}) {
  return `${name_4}'s MCP tools are not available in this session right now; ${toolName_3} did not run.`;
}
function DZs({
  name: name_5,
  toolName: toolName_4
}) {
  return `${toolName_4} runs only on ${name_5}; omit "${cr}".`;
}
function Fjo({
  toolName: toolName_5,
  machines: machines
}) {
  let [n, ...s] = machines;
  return s.length === 0 ? `${toolName_5} cannot run ${a()} \u2014 this session's own environment has no ${toolName_5}; it runs on ${n}: omit "${cr}" or set it to "${n}".` : `${toolName_5} cannot run ${a()} \u2014 this session's own environment has no ${toolName_5} \u2014 and ${machines.length} attached machines serve it, so the call must say which: set "${cr}" to one of ${machines.join(", ")}. Nothing ran.`;
}
function LZs({
  name: name_6,
  toolName: toolName_6
}) {
  return `${name_6} is no longer attached to this session, and this session's own environment has no ${toolName_6}: there is nowhere to run it until a computer that serves ${toolName_6} attaches again. Nothing ran; do not retry it ${a()} with another tool.`;
}
function NZs({
  name: name_7,
  toolName: toolName_7,
  servedBy: servedBy
}) {
  return `${name_7} does not serve ${toolName_7}, and this session's own environment has none; ${servedBy} serves it \u2014 set "${cr}" to "${servedBy}" or omit it. Nothing ran.`;
}
function FZs({
  name: name_8,
  toolName: toolName_8
}) {
  return `Running ${toolName_8} on ${name_8} is not available in this session right now, and this session's own environment has no ${toolName_8}; it did not run.`;
}
function HZs({
  name: name_9,
  toolName: toolName_9
}) {
  return `${name_9} does not serve ${toolName_9} right now (its Claude Code there may have restarted without it, or be an older version), and this session's own environment has no ${toolName_9}; nothing ran.`;
}
function $Zs({
  name: name_10,
  toolName: toolName_10,
  served: served
}) {
  let s = served.length === 0 ? "" : ` \u2014 or do it on ${name_10} through a tool it does serve there (${served.join(", ")})`;
  return `${name_10} does not serve ${toolName_10} right now (its Claude Code may be an older version); omit "${cr}" to run it ${a()}${s}.`;
}
function Nst({
  name: name_11,
  ruleMessage: ruleMessage
}) {
  return `${ruleMessage} ${name_11} was not contacted.`;
}
function UZs({
  name: name_12,
  toolName: toolName_11,
  path: path,
  spellingIs: spellingIs
}) {
  return `${toolName_11} was given "${S(path, M)}", which is ${spellingIs} \u2014 a spelling this session cannot match to its own path rules as written. Use the file's full path as ${name_12} shows it. ${name_12} was not contacted.`;
}
var R = {
  hook: "A hook's approval",
  host_prompt: "The approval given in the app running this session",
  prompt: "The user's approval",
  classifier: "The approval"
};
function BZs({
  toolName: toolName_12,
  name: name_13,
  by: by
}) {
  return `${by === void 0 ? "The approval" : R[by]} changed this ${toolName_12} call, but ${name_13} runs only the call it asked permission for, so the request there was withdrawn and nothing ran. Do not guess at the change: tell the user that the approval changed the call and that nothing ran.`;
}
function IVr({
  name: name_14,
  requestBytes: requestBytes,
  capBytes: capBytes
}) {
  return `This call's input is ${w(requestBytes)} MiB, over the ${w(capBytes)} MiB limit for calls to ${name_14}; it was not sent.`;
}
function $Xn({
  name: name_15,
  capMs: capMs,
  left = !1
}) {
  return left ? `${name_15} did not answer within ${Math.round(capMs / 1000)}s, and what became of the call could not be learned from it afterwards; the request was left with ${name_15}, so the command may have run or may still be running there. Check its effect on ${name_15} before repeating it.` : `${name_15} did not answer within ${Math.round(capMs / 1000)}s, and what became of the call could not be learned from it afterwards, so it was withdrawn there; it may have partially run. Check its effect on ${name_15} before repeating it.`;
}
function jZs(e) {
  return `${e} disconnected during the call. If the command had started, it has most likely continued to run there, but its result could not be delivered. Do not simply re-run it \u2014 first check whether it took effect (e.g. whether the file, commit or process now exists) or ask the user.`;
}
function f(e, t) {
  switch (t) {
    case "in_progress":
      return `${e} answered that this call was already under way there from an earlier attempt`;
    case "dropped":
      return `The connection to ${e} dropped during the call`;
    case "timed_out":
      return `${e} did not answer this call within this session's time limit`;
    case "unverified_refusal":
      return `A sender this session could not verify reported the call to ${e} refused`;
    case "classifier_refused":
      return `This session's automatic check (not a person) had approved the call to ${e}, and a sender this session could not verify reported it refused`;
    case "write_unresolved":
      return `This session could not confirm that this call was sent to ${e} in time (its connection to the service was backed up: the upload had not completed, or ended without an answer)`;
    case "approval_write_unresolved":
      return `This session could not confirm that your approval was sent to ${e} in time (its connection to the service was backed up: the upload had not completed, or ended without an answer)`;
  }
}
function WZs(e) {
  return `This call may or may not have reached ${e}: this session's connection to the service was backed up and the upload carrying it could not be confirmed in time, and what became of it could not be learned from ${e} afterwards. This is not a problem with ${e}. Check whether the command took effect before re-running it.`;
}
function zZs(e) {
  return `This session's upload of your approval could not be confirmed in time (its connection to the service was backed up); whether ${e} received it and ran the command could not be learned from it afterwards. This is not a problem with ${e}. Check whether the command ran before retrying it.`;
}
function GZs(e) {
  return `A sender this session could not verify reported this call refused, and ${e} could not be asked what became of it; whether it ran there is not confirmed. Check its effect before re-running it.`;
}
function UXn({
  name: name_16,
  state: state,
  cause: cause_2
}) {
  let s = cause_2 === "unasked" ? `${name_16} answered that this call is still under way there` : `${f(name_16, cause_2)}; asked again, ${name_16} reports`;
  switch (state) {
    case "running":
      return `${s}${cause_2 === "unasked" ? "" : " the command is STILL RUNNING there"}; its outcome is not known yet. Do not re-run it \u2014 check on its effect later, or ask the user.`;
    case "admitting":
      return `${s}${cause_2 === "unasked" ? " \u2014" : ""} it had received the call but nothing had started yet; whether it then ran is not known. Check on its effect before repeating it, or ask the user.`;
    case "awaiting_approval":
      return `${s}${cause_2 === "unasked" ? " \u2014" : ""} it was waiting for a permission decision and nothing had run, but it no longer accepts an answer to that question, so check on its effect before retrying it, or ask the user.`;
  }
}
function Hjo(e, t, n) {
  let s = t === "dropped" ? `The connection to ${e} dropped before your approval reached it` : t === "classifier_refused" ? `This session's automatic check (not a person) had approved the call; a sender this session could not verify reported the approval refused, and ${e} had not run it when asked` : t === "unverified_refusal" ? `A sender this session could not verify reported your approval refused, and ${e} had not received it when asked` : t === "write_unresolved" || t === "approval_write_unresolved" ? `This session's upload of your approval could not be confirmed in time (its connection to the service was backed up), and ${e} had not received it when asked` : `${e} did not answer your approval within this session's time limit and had not received it when asked`,
    r = t === "unverified_refusal" ? "If the user answered from a surface this session cannot verify, send the call again and have them approve from the terminal or desktop prompt, unedited." : t === "classifier_refused" ? `Retry once if it is still needed. If it is refused again, stop and tell the user that this tool on ${e} needs their own approval.` : "It is safe to retry the call if it is still wanted.";
  return n ? `${s}; the request was withdrawn there and nothing ran. ${r}` : `${s}; the request was then withdrawn, but whether a delayed copy of the approval reached it first is not known. Check whether the command ran before retrying it.`;
}
function VZs(e, t) {
  return `${f(e, t)}, and Claude Code on ${e} has restarted since: the command was lost with it. It may have partially run before the restart \u2014 check its effect before repeating it.`;
}
function KZs(e, t) {
  return `${f(e, t)}, and ${e} reports it never received it: it did not run. It is safe to retry.`;
}
function qZs(e, t) {
  return `Waiting up to ${t} s for ${rC(e)} to reconnect\u2026`;
}
function YZs(e, t) {
  return `waited ${t} s for ${e} to reconnect after this session's environment restarted`;
}
function $jo(e) {
  return `Reconnecting to ${e} to learn what happened to the call\u2026`;
}
function BXn(e = "completed") {
  switch (e) {
    case "completed":
      return "(delivered after reconnect \u2014 the first reply was lost; this is the recorded result, the command was not run again)";
    case "refused":
      return "(delivered after reconnect \u2014 the first reply was lost; this is the refusal recorded then, nothing ran)";
    case "failed":
      return "(delivered after reconnect \u2014 the first reply was lost; this is how the call ended, it was not run again)";
  }
}
function jXn(e, t = "completed") {
  let n = e === void 0 || !Number.isFinite(e) || Math.abs(e) > 8640000000000000 ? "earlier" : `at ${C(new Date(e))} UTC`;
  switch (t) {
    case "completed":
      return `(replayed \u2014 this call already ran ${n}; it was not run again)`;
    case "refused":
      return `(replayed \u2014 this is the refusal recorded ${n}; nothing ran then or now)`;
    case "failed":
      return `(replayed \u2014 this is how the call ended ${n}; it was not run again)`;
  }
}
function C(e) {
  return [e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()].map(item => String(item).padStart(2, "0")).join(":");
}
function WXn({
  name: name_17,
  detail: detail
}) {
  return `The call to ${name_17} failed in transit (${u(detail, c)}); it may not have run.`;
}
function kVt({
  name: name_18,
  message: message
}) {
  return `[refused by ${rC(name_18)}] ${u(message, c)}`;
}
function XZs({
  name: name_19,
  message: message_2
}) {
  return `[refused \u2014 did not run on ${rC(name_19)}] ${u(message_2, c)}`;
}
function JZs({
  name: name_20,
  message: message_3
}) {
  return `[failed on ${rC(name_20)}] ${u(message_3, c)}`;
}
var M = 256,
  c = 8192,
  N = {
    prompt: "approved at a permission prompt",
    host_prompt: "approved at a permission prompt",
    hook: "approved by a permission hook",
    classifier: "approved by the auto-mode classifier",
    unasked: "no approval needed"
  };
function Ujo(e) {
  return N[e];
}
function QZs(e, t, n, s = !1) {
  let r = s && n === "unasked" ? void 0 : n,
    o = r === void 0 ? "" : ` \xB7 ${Ujo(r)}`;
  return `[${s ? "on" : "ran on"} ${rC(e)} \xB7 ${t === "" ? "unknown directory" : t}${o}]`;
}
function Fst(e, t) {
  return tWn(A(e.trim(), t?.trim()), M, {
    isDirectory: !0
  });
}
function A(e, t) {
  let n = t?.replace(/[\\/]$/, "");
  if (!n) return e;
  if (e === n) return "~";
  let s = e.slice(n.length);
  return e.startsWith(n) && /^[\\/]/.test(s) ? `~${s}` : e;
}
function S(e, t) {
  return Q(uz(e), t);
}
function u(e, t) {
  return Q(Hht(e), t);
}
function w(e) {
  return (e / 1048576).toFixed(2);
}
function a() {
  return Zq() === "container" ? "in the container" : "on this machine";
}
function Bjo(e) {
  return `The approval for this call could not be verified as the user's own answer, so ${e} did not run it and nothing ran (its earlier permission request for this call may stay open there; that is harmless). To proceed, send the call again and have the user approve from the terminal or desktop prompt, unedited.`;
}
function ZZs(e, t) {
  return `This session's automatic check approved this ${t} call, but only a person's approval counts for ${t} on ${e}, so nothing ran. Retry once if it is still needed. If it is refused again, stop and tell the user that ${t} on ${e} needs their own approval.`;
}
function eei(e) {
  return `The approval for this call could not be verified as the user's own answer, so the call was not cleared to run on ${e} and nothing ran. Ask again and have the user approve from the terminal or desktop prompt, unedited.`;
}
function tei({
  name: name_21,
  capMs: capMs_2
}) {
  return `The call to ${name_21} could not be sent within ${Math.round(capMs_2 / 1000)}s \u2014 this session's connection to the service was backed up \u2014 so it was withdrawn while still queued here. Most likely nothing ran on ${name_21}: if the call reaches it late, its withdrawal arrives with it (for a command with side effects, check before repeating it). This is not a problem with ${name_21}; try the call again.`;
}
function nei({
  name: name_22,
  capMs: capMs_3
}) {
  return `Nothing ran on ${name_22}: the call could not be sent within ${Math.round(capMs_3 / 1000)}s \u2014 this session's connection to the service was backed up \u2014 and it was taken back before it left this session, so ${name_22} never received it. This is not a problem with ${name_22}; try the call again.`;
}
function jjo({
  name: name_23,
  capMs: capMs_4
}) {
  return `The call had reached ${name_23} and asked for approval there, but the user's approval could not be sent within ${Math.round(capMs_4 / 1000)}s \u2014 this session's connection to the service was backed up \u2014 and it was taken back before it left this session, so ${name_23} never received it and nothing ran; the pending request on ${name_23} is withdrawn. This is not a problem with ${name_23}; send the call again and the user will be asked once more.`;
}
function rei({
  name: name_24,
  capMs: capMs_5
}) {
  return `The user's approval could not be sent to ${name_24} within ${Math.round(capMs_5 / 1000)}s \u2014 this session's connection to the service was backed up \u2014 so it was withdrawn while still queued here, and the pending request on ${name_24} with it. Most likely nothing ran: if the approval still reaches ${name_24} late, its cancellation arrives with it (for a command with side effects, check before repeating it). This is not a problem with ${name_24}; send the call again and the user will be asked once more.`;
}
function oei({
  name: name_25,
  capMs: capMs_6
}) {
  return `The call had reached ${name_25} and asked for approval there, but the check that ${name_25} is still connected could not be sent within ${Math.round(capMs_6 / 1000)}s \u2014 this session's connection to the service was backed up \u2014 so the user's approval was never sent and the pending request on ${name_25} is withdrawn; nothing ran. This is not a problem with ${name_25}; send the call again and the user will be asked once more.`;
}
function sei({
  name: name_26,
  capMs: capMs_7
}) {
  return `A liveness check to ${name_26} could not be sent within ${Math.round(capMs_7 / 1000)}s \u2014 this session's connection to the service was backed up; the call was not sent and nothing ran. This is not a problem with ${name_26}; try the call again.`;
}
function iei({
  name: name_27,
  why: why_2,
  unsent: unsent
}) {
  let s = why_2 === "withdrawn" ? `Claude Code on ${name_27} withdrew from this session (it exited or stopped serving)` : `Claude Code on ${name_27} restarted`;
  return unsent ? `${s} before this call reached it; nothing ran there, and no result will arrive for it.` : `The call was interrupted: ${s} while the call was with it, so no result will arrive for it. It may have partially run \u2014 check its effects on ${name_27} before repeating it.`;
}
function zXn() {
  try {
    return v("tengu_violin_winding", !1) === !0;
  } catch {
    return !1;
  }
}
var L = "announces_return";
function Wjo(e) {
  return e.source === "session" && e.description?.capabilities?.includes(L) === !0;
}
function Hst(e) {
  return zXn() && e.transport.isAway?.() === !0 && (Wjo(e) || e.transport.isRechecked?.() === !0);
}
export { xVr, FXn, PVr, AZs, xZs, PZs, Djo, OVr, Ljo, OZs, Njo, wVt, HXn, IZs, lyn, MZs, DZs, Fjo, LZs, NZs, FZs, HZs, $Zs, Nst, UZs, BZs, IVr, $Xn, jZs, WZs, zZs, GZs, UXn, Hjo, VZs, KZs, qZs, YZs, $jo, BXn, jXn, WXn, kVt, XZs, JZs, Ujo, QZs, Fst, Bjo, ZZs, eei, tei, nei, jjo, rei, oei, sei, iei, zXn, Wjo, Hst };