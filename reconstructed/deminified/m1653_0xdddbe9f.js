// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Nt, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Ke, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { uu as message_4, Vb as message_5 } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { BLe, Srn, bit, Rrn, Arn, ga, TEe, Bit } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { xfo, rF, iv, jP, oF, K8 } from "B:/~BUN/root/chunk-3jyp964r.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { N_ } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { Ct, wn } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { dr, h0, Pk, Ik } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { nQn } from "B:/~BUN/root/chunk-csc0cbrx.js";
import { Atr } from "B:/~BUN/root/chunk-cvp4mxy2.js";
import { G_t, Etr, Skn, W9r, z9r } from "B:/~BUN/root/chunk-p4et90hb.js";
import { tG } from "B:/~BUN/root/chunk-tdkq03qj.js";
import { yXr } from "B:/~BUN/root/chunk-ap9x1xq2.js";
import { Rwt } from "B:/~BUN/root/chunk-48xh1a28.js";
import { Weo } from "B:/~BUN/root/chunk-a3ac8bzj.js";
import { at } from "B:/~BUN/root/chunk-2h7x7bdj.js";
import { o, E, C, u, $e, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
function vbn({
  requested: requested,
  attached: attached
}) {
  let r = Ik(requested),
    s = requested.trim().replace(/\s+\(offline\)$/i, "");
  if (Pk(s.toLowerCase()) && !Pk(requested)) return `No machine named "${r}" is attached to this session \u2014 to run this in the session's own environment, omit "${dr}".`;
  let h = attached.find(item => item.replace(/ \(offline\)$/, "") === s.toLowerCase()),
    a = h?.replace(/ \(offline\)$/, "");
  if (a !== void 0 && a !== requested) {
    let w = s !== requested.trim();
    return `No machine named "${r}" is attached to this session \u2014 machine names are exact and lower-case: use "${a}"${w ? ' without the "(offline)" note' : ""}${h !== a ? " \u2014 though it did not answer when last asked: do not call it again in this turn, tell the user instead" : ""}.`;
  }
  let g = attached.length > 0 ? `Attached: ${attached.join(", ")}.` : "No machine is attached to this session: only this session's own environment is available \u2014 it is not the user's machine, so do not describe it as one.",
    b = r !== requested.trim() && attached.some(item => item === r || item === `${r} (offline)`) ? " (the name as written contains extra or invisible characters)" : "";
  return `No machine named "${r}"${b} is attached to this session. ${g}`;
}
function Bzt({
  name: name,
  announced: announced,
  runsOnlyThere: runsOnlyThere,
  servedInsteadBy: servedInsteadBy
}) {
  let h = BLe.map(item => `v${item}`).join("/"),
    a = Math.max(...BLe),
    g = announced.length > 0 ? `its remote-tool protocol ${announced.map(item => `v${item}`).join("/")}, ours ${h}` : `it names no remote-tool protocol version this session reads; ours is ${h}`,
    b = announced.length === 0 ? "whichever of the two is older needs updating" : Math.max(...announced) < a ? `Claude Code on ${name} is the older of the two and needs updating` : "this session's Claude Code is the older of the two: a newer cloud environment is needed, not a change on the machine",
    w = servedInsteadBy !== void 0 ? `${servedInsteadBy.toolName} has no home ${F()}; ${servedInsteadBy.name} serves it \u2014 set "${dr}" to "${servedInsteadBy.name}".` : runsOnlyThere === void 0 ? `Omit "${dr}" to run it ${F()} instead.` : `${runsOnlyThere} exists only on ${name}, so it cannot run from this session until then.`;
  return `${name} is attached but the two Claude Code builds share no remote-tool protocol version (${g}); the call did not run; ${b}. ${w}`;
}
function jJn() {
  return "The user's computer could not be reached right now; the call did not run. Do not call it again in this turn: do the rest of the task that this container can do, and tell the user what is blocked. Check once more only when the user says it is back or asks you to try again.";
}
function m6r(e) {
  return `The user's computer is not ready yet \u2014 it may still be connecting (or running tools for cloud sessions is switched off on it, or this session could not verify it), so this session cannot tell yet whether "${Ik(e)}" is its name; the call did not run. Try once more in a few seconds; if it is still not ready, tell the user.`;
}
function V(e, n) {
  return n ? `for "${Ik(e)}" to reconnect after this session's cloud environment restarted` : `for "${Ik(e)}" to connect (this session could not reach it either)`;
}
var z = "the computer may be asleep or offline, Claude may not be running on it, running tools for cloud sessions may be switched off on it, or this session could not verify it";
function g6r(e, n, r = !0) {
  return `This call waited ${Math.round(n / 1000)} s ${V(e, r)}; it did not \u2014 ${z}. Nothing was sent. Ask the user to check that Claude is running on that computer rather than retrying immediately.`;
}
function h6r(e, n, r = !0) {
  return `This session already waited ${Math.round(n / 1000)} s earlier ${V(e, r)}, and it still has not \u2014 ${z}. Nothing was sent. Ask the user to check that Claude is running on that computer.`;
}
function WJn(e) {
  return `"${Ik(e)}" cannot run anything for this session right now: Claude on that computer stopped offering its tools here (the Claude app there may have closed or lost its connection, or running tools for cloud sessions was switched off on it). Nothing was sent. Ask the user to check that Claude is running on that computer, and to open the Claude app there if it was closed; if this session got the computer by asking to use one of its folders, look the folders up and ask to use that folder again afterwards.`;
}
function y6r() {
  return `The user's computer is linked to this session, but Claude on it has not connected \u2014 ${z}; the call did not run. Ask the user to check that Claude is running on that computer.`;
}
function iht(e, n = "machine") {
  if (n === "this_side") return `${e} is not answering right now \u2014 most often because Claude on it is not connected (the computer may be offline or asleep, or reconnecting after another session used it); the call did not run. Try again shortly, or ask the user to check that Claude is running on ${e}.`;
  return `${e} is not answering right now \u2014 most often because Claude on it is not connected (the computer may be offline or asleep, or reconnecting after another session used it); the call did not run. Do not call ${e} again in this turn: do the rest of the task that this container can do, and tell the user what is blocked and to check that Claude is running on ${e}. Check once more only when the user says it is back or asks you to try again.`;
}
function kbn(e, n, r = "machine") {
  let s = `${e} could not be reached from this session (${n}); the call did not run. If Claude is not running on ${e}, or is no longer connected to this session, ask the user to check it; a call that was too large to deliver will not succeed on a retry.`;
  return r === "this_side" ? s : `${s} Do not call ${e} again in this turn: do the rest of the task that this container can do, and tell the user what is blocked. Check once more only when the user says it is back or asks you to try again.`;
}
function _6r({
  name: name_2,
  toolName: toolName
}) {
  return `${name_2} announced ${toolName} in a form this session cannot read (a version or naming mismatch between the two Claude Code builds \u2014 update whichever is older); nothing ran.`;
}
function jzt({
  name: name_3,
  toolName: toolName_2
}) {
  return `${name_3} does not serve ${toolName_2} right now (its MCP server may have disconnected there); nothing ran.`;
}
function b6r({
  name: name_4,
  toolName: toolName_3
}) {
  return `${name_4}'s MCP tools are not available in this session right now; ${toolName_3} did not run.`;
}
function S6r({
  name: name_5,
  toolName: toolName_4
}) {
  return `${toolName_4} runs only on ${name_5}; omit "${dr}".`;
}
function zJn({
  toolName: toolName_5,
  machines: machines
}) {
  let [r, ...s] = machines;
  return s.length === 0 ? `${toolName_5} cannot run ${F()} \u2014 this session's own environment has no ${toolName_5}; it runs on ${r}: omit "${dr}" or set it to "${r}".` : `${toolName_5} cannot run ${F()} \u2014 this session's own environment has no ${toolName_5} \u2014 and ${machines.length} attached machines serve it, so the call must say which: set "${dr}" to one of ${machines.join(", ")}. Nothing ran.`;
}
function w6r({
  name: name_6,
  toolName: toolName_6
}) {
  return `${name_6} is no longer attached to this session, and this session's own environment has no ${toolName_6}: there is nowhere to run it until a computer that serves ${toolName_6} attaches again. Nothing ran; do not retry it ${F()} with another tool.`;
}
function v6r({
  name: name_7,
  toolName: toolName_7,
  servedBy: servedBy
}) {
  return `${name_7} does not serve ${toolName_7}, and this session's own environment has none; ${servedBy} serves it \u2014 set "${dr}" to "${servedBy}" or omit it. Nothing ran.`;
}
function k6r({
  name: name_8,
  toolName: toolName_8
}) {
  return `Running ${toolName_8} on ${name_8} is not available in this session right now, and this session's own environment has no ${toolName_8}; it did not run.`;
}
function E6r({
  name: name_9,
  toolName: toolName_9
}) {
  return `${name_9} does not serve ${toolName_9} right now (its Claude Code there may have restarted without it, or be an older version), and this session's own environment has no ${toolName_9}; nothing ran.`;
}
function T6r({
  name: name_10,
  toolName: toolName_10,
  served: served
}) {
  let s = served.length === 0 ? "" : ` \u2014 or do it on ${name_10} through a tool it does serve there (${served.join(", ")})`;
  return `${name_10} does not serve ${toolName_10} right now (its Claude Code may be an older version); omit "${dr}" to run it ${F()}${s}.`;
}
function MXe({
  name: name_11,
  ruleMessage: ruleMessage
}) {
  return `${ruleMessage} ${name_11} was not contacted.`;
}
function C6r({
  name: name_12,
  toolName: toolName_11,
  path: path,
  spellingIs: spellingIs
}) {
  return `${toolName_11} was given "${se(path, oe)}", which is ${spellingIs} \u2014 a spelling this session cannot match to its own path rules as written. Use the file's full path as ${name_12} shows it. ${name_12} was not contacted.`;
}
function Ebn({
  name: name_13,
  requestBytes: requestBytes,
  capBytes: capBytes
}) {
  return `This call's input is ${J(requestBytes)} MiB, over the ${J(capBytes)} MiB limit for calls to ${name_13}; it was not sent.`;
}
function Tbn({
  name: name_14,
  capMs: capMs,
  left = !1
}) {
  return left ? `${name_14} did not answer within ${Math.round(capMs / 1000)}s, and what became of the call could not be learned from it afterwards; the request was left with ${name_14}, so the command may have run or may still be running there. Check its effect on ${name_14} before repeating it.` : `${name_14} did not answer within ${Math.round(capMs / 1000)}s, and what became of the call could not be learned from it afterwards, so it was withdrawn there; it may have partially run. Check its effect on ${name_14} before repeating it.`;
}
function Z(e) {
  return `${e} disconnected during the call. If the command had started, it has most likely continued to run there, but its result could not be delivered. Do not simply re-run it \u2014 first check whether it took effect (e.g. whether the file, commit or process now exists) or ask the user.`;
}
function W(e, n) {
  switch (n) {
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
function Q(e) {
  return `This call may or may not have reached ${e}: this session's connection to the service was backed up and the upload carrying it could not be confirmed in time, and what became of it could not be learned from ${e} afterwards. This is not a problem with ${e}. Check whether the command took effect before re-running it.`;
}
function R6r(e) {
  return `This session's upload of your approval could not be confirmed in time (its connection to the service was backed up); whether ${e} received it and ran the command could not be learned from it afterwards. This is not a problem with ${e}. Check whether the command ran before retrying it.`;
}
function ee(e) {
  return `A sender this session could not verify reported this call refused, and ${e} could not be asked what became of it; whether it ran there is not confirmed. Check its effect before re-running it.`;
}
function Cbn({
  name: name_15,
  state: state,
  cause: cause
}) {
  let s = cause === "unasked" ? `${name_15} answered that this call is still under way there` : `${W(name_15, cause)}; asked again, ${name_15} reports`;
  switch (state) {
    case "running":
      return `${s}${cause === "unasked" ? "" : " the command is STILL RUNNING there"}; its outcome is not known yet. Do not re-run it \u2014 check on its effect later, or ask the user.`;
    case "admitting":
      return `${s}${cause === "unasked" ? " \u2014" : ""} it had received the call but nothing had started yet; whether it then ran is not known. Check on its effect before repeating it, or ask the user.`;
    case "awaiting_approval":
      return `${s}${cause === "unasked" ? " \u2014" : ""} it was waiting for a permission decision and nothing had run, but it no longer accepts an answer to that question, so check on its effect before retrying it, or ask the user.`;
  }
}
function GJn(e, n, r) {
  let s = n === "dropped" ? `The connection to ${e} dropped before your approval reached it` : n === "classifier_refused" ? `This session's automatic check (not a person) had approved the call; a sender this session could not verify reported the approval refused, and ${e} had not run it when asked` : n === "unverified_refusal" ? `A sender this session could not verify reported your approval refused, and ${e} had not received it when asked` : n === "write_unresolved" || n === "approval_write_unresolved" ? `This session's upload of your approval could not be confirmed in time (its connection to the service was backed up), and ${e} had not received it when asked` : `${e} did not answer your approval within this session's time limit and had not received it when asked`,
    h = n === "unverified_refusal" ? "If the user answered from a surface this session cannot verify, send the call again and have them approve from the terminal or desktop prompt, unedited." : n === "classifier_refused" ? `If only a person's approval counts for this tool on ${e}, send the call again and ask the user to approve it from the terminal or desktop prompt.` : "It is safe to retry the call if it is still wanted.";
  return r ? `${s}; the request was withdrawn there and nothing ran. ${h}` : `${s}; the request was then withdrawn, but whether a delayed copy of the approval reached it first is not known. Check whether the command ran before retrying it.`;
}
function A6r(e, n) {
  return `${W(e, n)}, and Claude Code on ${e} has restarted since: the command was lost with it. It may have partially run before the restart \u2014 check its effect before repeating it.`;
}
function x6r(e, n) {
  return `${W(e, n)}, and ${e} reports it never received it: it did not run. It is safe to retry.`;
}
function P6r(e, n) {
  return `Waiting up to ${n} s for ${Ik(e)} to reconnect\u2026`;
}
function I6r(e, n) {
  return `waited ${n} s for ${e} to reconnect after this session's environment restarted`;
}
function VJn(e) {
  return `Reconnecting to ${e} to learn what happened to the call\u2026`;
}
function Rbn(e = "completed") {
  switch (e) {
    case "completed":
      return "(delivered after reconnect \u2014 the first reply was lost; this is the recorded result, the command was not run again)";
    case "refused":
      return "(delivered after reconnect \u2014 the first reply was lost; this is the refusal recorded then, nothing ran)";
    case "failed":
      return "(delivered after reconnect \u2014 the first reply was lost; this is how the call ended, it was not run again)";
  }
}
function Abn(e, n = "completed") {
  let r = e === void 0 || !Number.isFinite(e) || Math.abs(e) > 8640000000000000 ? "earlier" : `at ${be(new Date(e))} UTC`;
  switch (n) {
    case "completed":
      return `(replayed \u2014 this call already ran ${r}; it was not run again)`;
    case "refused":
      return `(replayed \u2014 this is the refusal recorded ${r}; nothing ran then or now)`;
    case "failed":
      return `(replayed \u2014 this is how the call ended ${r}; it was not run again)`;
  }
}
function be(e) {
  return [e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()].map(item => String(item).padStart(2, "0")).join(":");
}
function xbn({
  name: name_16,
  detail: detail
}) {
  return `The call to ${name_16} failed in transit (${D(detail, H)}); it may not have run.`;
}
function aht({
  name: name_17,
  message: message
}) {
  return `[refused by ${Ik(name_17)}] ${D(message, H)}`;
}
function te({
  name: name_18,
  message: message_2
}) {
  return `[refused \u2014 did not run on ${Ik(name_18)}] ${D(message_2, H)}`;
}
function ne({
  name: name_19,
  message: message_3
}) {
  return `[failed on ${Ik(name_19)}] ${D(message_3, H)}`;
}
var oe = 256,
  H = 8192;
function qJn(e, n) {
  let r = e.working_dir === "" ? "unknown directory" : se(KJn(e.working_dir, n), oe);
  return `[ran on ${Ik(e.name)} \xB7 ${r}]`;
}
function KJn(e, n) {
  let r = n?.replace(/[\\/]$/, "");
  if (!r) return e;
  if (e === r) return "~";
  let s = e.slice(r.length);
  return e.startsWith(r) && /^[\\/]/.test(s) ? `~${s}` : e;
}
function se(e, n) {
  return re(e.replace(/[\p{Cc}\p{Cf}]/gu, ""), n);
}
function D(e, n) {
  return re(e.replace(/[\p{Cc}\p{Cf}]/gu, r => r === `
` || r === "\t" ? r : ""), n);
}
function J(e) {
  return (e / 1048576).toFixed(2);
}
function F() {
  return h0() === "container" ? "in the container" : "on this machine";
}
function G(e) {
  return `The approval for this call could not be verified as the user's own answer, so ${e} did not run it and nothing ran (its earlier permission request for this call may stay open there; that is harmless). To proceed, send the call again and have the user approve from the terminal or desktop prompt, unedited.`;
}
function O6r(e, n) {
  return `This session's automatic check approved this ${n} call, but for ${n} on ${e} only a person's approval counts in this session, so it was not cleared to run and nothing ran. Send the call again and ask the user to approve it from the terminal or desktop prompt.`;
}
function ie(e) {
  return `The approval for this call could not be verified as the user's own answer, so the call was not cleared to run on ${e} and nothing ran. Ask again and have the user approve from the terminal or desktop prompt, unedited.`;
}
function ae({
  name: name_20,
  capMs: capMs_2
}) {
  return `The call to ${name_20} could not be sent within ${Math.round(capMs_2 / 1000)}s \u2014 this session's connection to the service was backed up \u2014 so it was withdrawn while still queued here. Most likely nothing ran on ${name_20}: if the call reaches it late, its withdrawal arrives with it (for a command with side effects, check before repeating it). This is not a problem with ${name_20}; try the call again.`;
}
function de({
  name: name_21,
  capMs: capMs_3
}) {
  return `Nothing ran on ${name_21}: the call could not be sent within ${Math.round(capMs_3 / 1000)}s \u2014 this session's connection to the service was backed up \u2014 and it was taken back before it left this session, so ${name_21} never received it. This is not a problem with ${name_21}; try the call again.`;
}
function YJn({
  name: name_22,
  capMs: capMs_4
}) {
  return `The call had reached ${name_22} and asked for approval there, but the user's approval could not be sent within ${Math.round(capMs_4 / 1000)}s \u2014 this session's connection to the service was backed up \u2014 and it was taken back before it left this session, so ${name_22} never received it and nothing ran; the pending request on ${name_22} is withdrawn. This is not a problem with ${name_22}; send the call again and the user will be asked once more.`;
}
function M6r({
  name: name_23,
  capMs: capMs_5
}) {
  return `The user's approval could not be sent to ${name_23} within ${Math.round(capMs_5 / 1000)}s \u2014 this session's connection to the service was backed up \u2014 so it was withdrawn while still queued here, and the pending request on ${name_23} with it. Most likely nothing ran: if the approval still reaches ${name_23} late, its cancellation arrives with it (for a command with side effects, check before repeating it). This is not a problem with ${name_23}; send the call again and the user will be asked once more.`;
}
function D6r({
  name: name_24,
  capMs: capMs_6
}) {
  return `The call had reached ${name_24} and asked for approval there, but the check that ${name_24} is still connected could not be sent within ${Math.round(capMs_6 / 1000)}s \u2014 this session's connection to the service was backed up \u2014 so the user's approval was never sent and the pending request on ${name_24} is withdrawn; nothing ran. This is not a problem with ${name_24}; send the call again and the user will be asked once more.`;
}
function ue({
  name: name_25,
  capMs: capMs_7
}) {
  return `A liveness check to ${name_25} could not be sent within ${Math.round(capMs_7 / 1000)}s \u2014 this session's connection to the service was backed up; the call was not sent and nothing ran. This is not a problem with ${name_25}; try the call again.`;
}
function ce({
  name: name_26,
  why: why,
  unsent: unsent
}) {
  let s = why === "withdrawn" ? `Claude Code on ${name_26} withdrew from this session (it exited or stopped serving)` : `Claude Code on ${name_26} restarted`;
  return unsent ? `${s} before this call reached it; nothing ran there, and no result will arrive for it.` : `The call was interrupted: ${s} while the call was with it, so no result will arrive for it. It may have partially run \u2014 check its effects on ${name_26} before repeating it.`;
}
var DXe = 262144,
  image = 8388608,
  remaining = 8388608,
  Pbn = 100;
function ve(e) {
  let n = he(e);
  return {
    content: n.content,
    truncated: !1,
    ...(n.cut && {
      cutHere: !0
    })
  };
}
function he(content) {
  if (typeof content === "string") return content.length > DXe ? {
    content: re(content, DXe),
    cut: !0
  } : {
    content: content,
    cut: !1
  };
  let {
    blocks: blocks,
    cut: cut
  } = content.slice(0, Pbn).reduce((acc, item) => {
    if (item.type === "text") {
      let text = re(item.text, Math.max(0, acc.text));
      if (text.trim() !== "") acc.blocks.push({
        ...item,
        text: text
      });
      return {
        ...acc,
        text: acc.text - text.length,
        cut: acc.cut || text.length < item.text.length
      };
    }
    if (item.type === "image") {
      let a = item.source.type === "base64" ? item.source.data.length : void 0;
      if (a !== void 0 && a <= acc.image) return acc.blocks.push(item), {
        ...acc,
        image: acc.image - a
      };
      return acc.blocks.push({
        type: "text",
        text: "(an image in the answer was dropped: too large, or not sent inline)"
      }), {
        ...acc,
        cut: !0
      };
    }
    return acc.blocks.push(item), acc;
  }, {
    blocks: [],
    text: DXe,
    image: image,
    cut: content.length > Pbn
  });
  return {
    content: cut || blocks.length !== content.length ? blocks : content,
    cut: cut
  };
}
function Ce(e) {
  return e?.type === "text" && e.text.startsWith(Arn);
}
function Me(e) {
  return Buffer.from(e.slice(0, 8), "base64").toString("latin1").startsWith("%PDF-");
}
function Te(e, n) {
  if (n === void 0 || n.length === 0 || typeof e === "string") return e;
  let {
    placed: placed
  } = n.reduce((acc, item) => item.data.length <= acc.remaining && Me(item.data) && Ce(e[item.at]) && !acc.placed.has(item.at) ? {
    placed: new Map([...acc.placed, [item.at, item]]),
    remaining: acc.remaining - item.data.length
  } : acc, {
    placed: new Map(),
    remaining: remaining
  });
  if (placed.size === 0) return e;
  return e.map((item, index) => {
    let a = placed.get(index);
    return a === void 0 ? item : {
      type: "document",
      source: {
        type: "base64",
        media_type: a.media_type,
        data: a.data
      }
    };
  });
}
function xe(output) {
  if (typeof output !== "object" || output === null) return {
    output: output,
    truncated: !1
  };
  let {
    entries: entries,
    cut: r
  } = Object.entries(output).reduce((acc, [h, a]) => {
    if (typeof a !== "string") return acc.entries.push([h, a]), acc;
    let g = re(a, Math.max(0, acc.remaining));
    return acc.entries.push([h, g]), {
      ...acc,
      remaining: acc.remaining - g.length,
      cut: acc.cut || g.length < a.length
    };
  }, {
    entries: [],
    remaining: DXe,
    cut: !1
  });
  return {
    output: r ? Object.fromEntries(entries) : output,
    truncated: r
  };
}
function le(e) {
  return e.machineNotAnswering === !0 ? "machine" : "this_side";
}
function gPe(e, n, r, {
  afterReconnect = !1,
  call: call
} = {}) {
  let host = f1e(n),
    name_27 = n.name;
  switch (r.kind) {
    case "result":
      if (r.envelope !== void 0) return {
        outcome: Pe(e, n, r.envelope, {
          afterReconnect: afterReconnect,
          dirSync: r.dirSync,
          call: call
        }),
        responseBytes: r.responseBytes,
        metaCopy: r.metaCopy,
        refusalCode: r.envelope.outcome === "refused" ? r.envelope.code : void 0,
        failureCode: r.envelope.outcome === "failed" ? r.envelope.code : void 0
      };
      if (r.isError) return {
        outcome: {
          kind: "error",
          code: "transport_error",
          message: Ee({
            name: name_27,
            detail: gA(HXe(r.content))
          }),
          host: host
        },
        responseBytes: r.responseBytes
      };
      return {
        outcome: {
          kind: "completed",
          host: host,
          homeDir: fe(n),
          ...ve(r.content),
          isError: !1,
          output: void 0,
          disposition: void 0,
          notes: [],
          hostLocal: [],
          envelope: "missing",
          delivery: "fresh"
        },
        responseBytes: r.responseBytes
      };
    case "unreachable":
      return {
        outcome: {
          kind: "error",
          code: "unreachable",
          message: n.transport.kind === "session" ? kbn(name_27, r.detail, le(r)) : iht(name_27, le(r)),
          host: host
        }
      };
    case "approval_unverified":
      return {
        outcome: {
          kind: "error",
          code: "approval_unverified",
          message: n.transport.kind === "session" ? ie(name_27) : G(name_27),
          host: host
        }
      };
    case "timed_out":
      return {
        outcome: {
          kind: "error",
          code: "timed_out",
          message: Tbn({
            name: name_27,
            capMs: r.capMs
          }),
          host: host,
          open: "timed_out"
        }
      };
    case "stalled":
      return {
        outcome: {
          kind: "error",
          code: r.takenBack ? "stalled_unsent" : "stalled",
          message: r.request === "probe" ? ue({
            name: name_27,
            capMs: r.capMs
          }) : r.takenBack ? de({
            name: name_27,
            capMs: r.capMs
          }) : ae({
            name: name_27,
            capMs: r.capMs
          }),
          ...(r.request !== "probe" && !r.takenBack && {
            open: "stalled"
          }),
          host: host
        }
      };
    case "host_gone":
      return {
        outcome: {
          kind: "error",
          code: r.why === "withdrawn" ? "host_withdrawn" : "host_gone",
          message: ce({
            name: name_27,
            why: r.why,
            unsent: r.unsent
          }),
          host: host
        }
      };
    case "dropped":
      return {
        outcome: {
          kind: "error",
          code: "dropped",
          message: bit(r) ? ee(name_27) : r.why === "write_unresolved" ? Q(name_27) : Z(name_27),
          host: host,
          open: "delivery_unknown"
        }
      };
    case "cancelled":
      return {
        outcome: LXe(host)
      };
    case "transport_error":
      return {
        outcome: {
          kind: "error",
          code: "transport_error",
          message: r.unreadableResult === !0 ? Re(name_27) : xbn({
            name: name_27,
            detail: gA(r.detail)
          }),
          host: host,
          ...(r.unreadableResult === !0 && {
            unreadableResult: !0
          })
        }
      };
  }
}
var Se = 2000,
  X = 8;
function JJn(e, n) {
  let r = e.slice(0, X).map(item => `[note from ${n}] ${gA(item, Se)}`);
  return e.length > X ? [...r, `(${e.length - X} more notes omitted)`] : r;
}
var lht = 2000;
function Re(e) {
  return `${e} answered in a result format this session cannot read (Claude Code version mismatch?); the command probably ran there \u2014 check its effect before repeating it.`;
}
function Ee({
  name: name_28,
  detail: detail_2
}) {
  return `The connection to ${name_28} answered with an error: ${detail_2} \u2014 ${name_28}'s Claude Code did not report running the call; whether it ran there is not known, so check its effect before repeating it.`;
}
var Ae = new Set(["backgroundTaskId", "backgroundedByUser", "persistedOutputPath", "persistedOutputSize", "rawOutputPath", "structuredContent"]);
function Pe(e, n, r, {
  afterReconnect: afterReconnect_2 = !1,
  dirSync: dirSync,
  call: call_2
} = {}) {
  let host_2 = {
      name: n.name,
      working_dir: q(r.target.working_dir)
    },
    b = k => (r.outcome === "refused" || r.outcome === "failed") && r.notes !== void 0 && r.notes.length > 0 ? [k, ...JJn(r.notes, n.name)].join(`
`) : k,
    w = r.outcome !== "refused" && r.outcome !== "failed" ? "" : afterReconnect_2 ? ` ${Rbn(r.outcome)}` : r.replayed === !0 ? ` ${Abn(r.served_at, r.outcome)}` : "";
  switch (r.outcome) {
    case "completed":
      {
        let k = he(e.name === at ? Te(r.content, r.documents) : r.content),
          v = Fe(e, r, call_2),
          M = tG(e) ? xe(v.output) : {
            output: v.output,
            truncated: !1
          };
        return {
          kind: "completed",
          host: host_2,
          homeDir: fe(n),
          content: k.content,
          truncated: r.truncated === !0,
          ...((k.cut || M.truncated) && {
            cutHere: !0
          }),
          isError: r.is_error,
          output: M.output,
          hostLocal: v.hostLocal,
          ...(v.spilledBytes !== void 0 && {
            spilled: {
              bytes: v.spilledBytes
            }
          }),
          disposition: r.disposition,
          notes: r.notes ?? [],
          envelope: "present",
          delivery: afterReconnect_2 ? "after_reconnect" : r.replayed === !0 ? "replayed" : "fresh",
          ...(r.served_at !== void 0 && {
            servedAt: r.served_at
          }),
          ...(dirSync !== void 0 && {
            dirSync: dirSync
          })
        };
      }
    case "refused":
      {
        if (r.code === "no_approval") return {
          kind: "error",
          code: "approval_unverified",
          message: b(`${G(n.name)}${w}`),
          host: host_2
        };
        let k = n.transport.kind === "session" ? te : aht;
        return {
          kind: "error",
          code: "refused_by_host",
          message: b(`${k({
            name: n.name,
            message: gA(r.message, lht)
          })}${w}`),
          host: host_2
        };
      }
    case "failed":
      return {
        kind: "error",
        code: "failed_on_host",
        message: b(`${ne({
          name: n.name,
          message: gA(r.message, lht)
        })}${w}`),
        host: host_2
      };
    case "in_progress":
      return {
        kind: "error",
        code: "still_running",
        message: Cbn({
          name: n.name,
          state: r.state,
          cause: "unasked"
        }),
        host: host_2,
        open: r.state === "running" ? "still_running" : "delivery_unknown"
      };
    case "needs_approval":
      return {
        kind: "error",
        code: "refused_by_host",
        message: aht({
          name: n.name,
          message: gA(r.message, lht)
        }),
        host: host_2
      };
    case "acknowledged":
      return {
        kind: "error",
        code: "refused_by_host",
        message: aht({
          name: n.name,
          message: "the machine acknowledged a decision for a call this session did not ask about"
        }),
        host: host_2
      };
  }
}
function Fe(e, n, r) {
  let output_2 = n.output;
  if (output_2 === void 0 || output_2 === null || typeof output_2 !== "object") return {
    output: void 0,
    hostLocal: [],
    spilledBytes: void 0
  };
  let h = Object.keys(output_2),
    a = tG(e) ? Reflect.get(output_2, Srn) : void 0,
    spilledBytes = typeof a === "number" && Number.isSafeInteger(a) && a > 0 ? a : void 0,
    hostLocal = [...(h.includes("persistedOutputPath") ? ["saved_output_file"] : []), ...(h.includes("backgroundTaskId") ? ["background_task"] : [])];
  if (h.some(item => Ae.has(item)) || Reflect.get(output_2, "isImage") === !0) return {
    output: void 0,
    hostLocal: hostLocal,
    spilledBytes: spilledBytes
  };
  let w = Rrn.get(e.name);
  if (w === void 0) return {
    output: void 0,
    hostLocal: hostLocal,
    spilledBytes: spilledBytes
  };
  let k = Qr(output_2, (R, P) => w.has(P)),
    v = tG(e) ? k : n.is_error || n.truncated === !0 ? void 0 : Ne(e.name, k, r),
    M = v === void 0 ? void 0 : e.outputSchema?.safeParse(v);
  return {
    output: M?.success ? M.data : void 0,
    hostLocal: hostLocal,
    spilledBytes: spilledBytes
  };
}
var Le = 200,
  Oe = 5000;
function Ne(e, n, r) {
  if (r === void 0 || !Ue(n.structuredPatch)) return;
  let s = r.input.file_path;
  if (typeof s !== "string") return;
  if (e === Ct) return {
    filePath: s,
    oldString: r.input.old_string,
    newString: r.input.new_string,
    replaceAll: r.input.replace_all === !0,
    originalFile: null,
    structuredPatch: n.structuredPatch,
    userModified: r.editedByApproval
  };
  if (e === wn) {
    let h = n.type === "create" || Array.isArray(n.structuredPatch) && n.structuredPatch.length === 0;
    return {
      type: n.type,
      filePath: s,
      content: h ? r.input.content : "",
      structuredPatch: n.structuredPatch,
      originalFile: null,
      userModified: r.editedByApproval
    };
  }
  return;
}
function Ue(e) {
  if (!Array.isArray(e) || e.length > Le) return !1;
  if (!e.every(He)) return !1;
  let n = e.flatMap(item => item.lines);
  return n.length <= Oe && n.reduce((acc, item) => acc + item.length, 0) <= DXe;
}
function He(e) {
  if (typeof e !== "object" || e === null) return !1;
  let {
    oldStart: oldStart,
    oldLines: oldLines,
    newStart: newStart,
    newLines: newLines,
    lines: lines
  } = e;
  if (![oldStart, oldLines, newStart, newLines].every(item => typeof item === "number" && Number.isSafeInteger(item) && item >= 0) || !Array.isArray(lines) || !lines.every(item => typeof item === "string" && /^[ +\\-][^\x00-\x08\x0A-\x1F\x7F-\x9F\p{Cf}\p{Cs}\p{Zl}\p{Zp}]*\r?$/u.test(item))) return !1;
  let g = b => U(lines, w => b.includes(w[0]));
  return g(" -") === oldLines && g(" +") === newLines;
}
function f1e(e) {
  let n = yXr(e);
  return {
    name: n.name,
    working_dir: q(n.working_dir)
  };
}
function fe(e) {
  let n = e.description?.home_dir;
  return n === void 0 ? void 0 : q(n);
}
function q(e) {
  return gA(e).trim();
}
function gA(e, n) {
  return ga(e, n).replace(/[\p{Ps}\u2308\u230A\u231C\u231E\u23A1-\u23A3\u02F9\u02FB]/gu, "(").replace(/[\p{Pe}\u2309\u230B\u231D\u231F\u23A4-\u23A6\u02FA\u02FC\u02FD]/gu, ")");
}
function LXe(host_3, {
  askLater = !1
} = {}) {
  return {
    kind: "error",
    code: "interrupted",
    message: message_4,
    host: host_3,
    ...(askLater && {
      open: "interrupted"
    })
  };
}
function NXe(host_4) {
  return {
    kind: "error",
    code: "cancelled",
    message: message_5,
    host: host_4
  };
}
function QJn(e, n) {
  if (e !== void 0) return n !== void 0 && n.trim() !== "" ? `${K8}${n}` : oF;
  return rF(n !== void 0 && n.trim() !== "" ? `${jP}${n}` : iv);
}
function HXe(e) {
  return typeof e === "string" ? e : e.flatMap(item => item.type === "text" ? [item.text] : []).join(`
`);
}
function De(e) {
  if (e.own === null) return {
    agreed: "unknown",
    reason: "no_own_frame"
  };
  if (e.peer === null) return {
    agreed: "unknown",
    reason: "peer_too_old"
  };
  if (e.peerStale === !0) return {
    agreed: "unknown",
    reason: "peer_stale"
  };
  if (!e.peer.takes) return {
    agreed: !1,
    reason: "peer_does_not_take"
  };
  switch (e.guarantee) {
    case "down":
      return {
        agreed: e.peer.taken === e.own.gen
      };
    case "up":
      return {
        agreed: e.own.taken >= e.peer.gen
      };
    case "both":
      {
        let [n, r] = e.own.side === "laptop" ? [e.own, e.peer] : [e.peer, e.own];
        return {
          agreed: Weo(n, r)
        };
      }
  }
}
var pe = e => e === "message_send" ? c("message_send") : e === "turn_start" ? c("turn_start") : e === "before_command" ? c("before_command") : e === "after_command" ? c("after_command") : c("turn_end");
function K(e) {
  try {
    let n = De(e);
    if (i("tengu_dir_sync_barrier", {
      point: pe(e.point),
      guarantee: e.guarantee === "up" ? c("up") : e.guarantee === "down" ? c("down") : c("both"),
      agreed: n.agreed === "unknown" ? c("unknown") : n.agreed ? c("yes") : c("no"),
      ...("reason" in n && {
        reason: n.reason === "peer_too_old" ? c("peer_too_old") : n.reason === "peer_stale" ? c("peer_stale") : n.reason === "no_own_frame" ? c("no_own_frame") : c("peer_does_not_take")
      }),
      outcome: c(e.outcome),
      empty: e.empty,
      ms: e.ms,
      ...(e.requests !== void 0 && {
        requests: e.requests
      }),
      events: e.events
    }), n.agreed === !1 && !("reason" in n)) i("tengu_dir_sync_frame_disagree", {
      point: pe(e.point)
    });
  } catch {}
}
var ye = "sync_files",
  wait_ms = 15000,
  deadlineMs = 30000,
  ze = 300;
class we {
  #e = void 0;
  #t = Skn();
  ledger = W9r();
  inFlight = void 0;
  countedTooOld = new Set();
  offered = new Set();
  register(e) {
    this.#e = e, this.#t = Skn(), this.ledger.invalidateAll(), this.offered.clear();
  }
  engine() {
    return this.#e ?? Promise.resolve(null);
  }
  noteLocalWrite() {
    this.#e?.then(e => e?.noteLocalWrite?.(), () => {});
  }
  caughtUp(e) {
    return this.#t.of(e) ?? 0;
  }
  taken(e, n) {
    this.#t.file(e, r => Math.max(r ?? 0, n)), this.#e?.then(r => r?.laptopTookIn?.(n), () => {});
  }
}
var je = new Nt(() => new we());
function B() {
  return je.of(j());
}
function tqo(e, n = Bit.subscribe) {
  let r = B();
  r.register(e), xfo(() => r.noteLocalWrite()), e.then(s => {
    if (s === null) return;
    n(a => {
      if (a === TEe) s.laptopJournalStaged?.();
    }), Atr("take_in", {
      pending: () => s.takeInPending?.() ?? !1,
      visit: a => Ge(s, a)
    }, j());
    let {
      streaming: streaming
    } = s;
    if (streaming !== void 0) Atr("publish", {
      pending: () => streaming.publishDue(Date.now()),
      visit: a => We(streaming, a)
    }, j());
  }, () => {});
}
async function We(e, n) {
  let r = Date.now(),
    s = e.startDue(n);
  if (s === null) {
    i("tengu_dir_sync_between_tools_publish", {
      outcome: c("none"),
      duration_ms: 0,
      held_ms: 0
    });
    return;
  }
  await s.snapshotTaken;
  let held_ms = Date.now() - r;
  s.outcome.catch(() => null).then(a => i("tengu_dir_sync_between_tools_publish", {
    outcome: c(a?.kind ?? "none"),
    duration_ms: Date.now() - r,
    held_ms: held_ms
  }));
}
async function Ge(e, n) {
  let r = Date.now(),
    s = e.takeInBetweenToolCalls === void 0 ? null : await e.takeInBetweenToolCalls(n).catch(() => null);
  i("tengu_dir_sync_between_tools_take_in", {
    outcome: c(s?.kind ?? "none"),
    duration_ms: Date.now() - r,
    ...(s?.kind === "applied" && {
      files_updated: s.filesUpdated,
      files_merged: s.filesMerged,
      files_renamed: s.filesRenamed,
      files_trashed: s.filesTrashed,
      not_taken: s.notTaken
    })
  });
}
function ZJn(e, n, r = Date.now()) {
  let s = Etr(n);
  if (s !== null) B().ledger.heard(e, s.frame, r);
  return s;
}
function Ibn(e) {
  return e.plumbingTools?.has(ye) === !0 && e.transport.callPlumbing !== void 0;
}
var Xe = ["branch_changed", "capped_until_upload", "upload_only", "round_skipped", "still_arriving", "held_open", "serving_another_command", "turn_end", "awaiting_container"],
  qe = 3,
  Ye = 120,
  Je = ["lane_lost", "journal_unreadable", "journal_failed", "object_failed", "refused", "not_seen", "aborted", "crashed"],
  Ve = ["no_session", "unbound_device", "mode_withdrawn", "too_many_concurrent", "no_engine", "not_syncing", "unsupported", "unknown_job", "cancelled", "failed"],
  Ze = ["busy", "momentary", "mid_operation", "unmerged_index", "aborted", "unreadable", "unborn", "too_large", "too_many_prerequisites", "file_store_full"],
  O = e => n => e.includes(n) ? n : "other",
  me = e => gA(N_(e).replace(/[\p{Cc}\p{Cf}]/gu, " ").replace(/:\/\/[^/\s@]*@/g, "://***@"), ze),
  Qe = e => gA(N_(e).replace(/[\p{Cc}\p{Cf}]/gu, " "), Ye),
  et = f(() => $e([u({
    kind: A("ready"),
    generation: E().int().nonnegative()
  }), u({
    kind: A("deferred"),
    reason: o().transform(O(Xe)),
    generation: E().int().nonnegative(),
    held: C(o()).transform(e => e.slice(0, qe).map(item => Qe(item)).filter(item => item.length > 0)).optional(),
    heldCount: E().int().nonnegative().optional()
  }), u({
    kind: A("failed"),
    reason: o().transform(O(Je))
  }), u({
    kind: A("not_running")
  })])),
  tt = f(() => $e([u({
    kind: A("sent"),
    generation: E().int().nonnegative()
  }), u({
    kind: A("unchanged"),
    generation: E().int().nonnegative()
  }), u({
    kind: A("kept_here"),
    reason: o().transform(O(Ze)),
    detail: o().transform(me)
  }), u({
    kind: A("failed"),
    reason: o().transform(me)
  }), u({
    kind: A("not_attempted")
  })])),
  nt = f(() => $e([u({
    state: A("done"),
    job: o().max(64),
    outcome: u({
      catchUp: et(),
      push: tt()
    })
  }), u({
    state: A("running"),
    job: o().max(64)
  }), u({
    state: A("refused"),
    reason: o().transform(O(Ve))
  })]));
async function _e(e, n, signal, s) {
  let transport = e.transport;
  if (transport.callPlumbing === void 0) return {
    kind: "unreachable",
    transport: "unreachable",
    detail: "this transport carries no sync calls"
  };
  let job,
    g = !1,
    b = !1;
  for (let polls = 1;; polls += 1) {
    if (signal.aborted) return {
      kind: "aborted"
    };
    if (polls > 1) s?.(polls);
    let k = await transport.callPlumbing(ye, {
      up_to: n.upTo,
      upload: n.upload,
      wait_ms: wait_ms,
      ...(job !== void 0 && {
        job: job
      }),
      ...(job === void 0 && n.offer !== void 0 && {
        [nQn]: n.offer
      })
    }, {
      signal: signal,
      deadlineMs: deadlineMs,
      idempotent: job !== void 0
    });
    switch (k.kind) {
      case "cancelled":
        return {
          kind: "aborted"
        };
      case "unreachable":
      case "dropped":
      case "transport_error":
      case "timed_out":
        {
          let detail_3 = k.kind === "timed_out" ? `no answer within ${Math.round(k.capMs / 1000)} s` : k.detail;
          if (t(`dir-sync: sync_files call failed (${k.kind}): ${detail_3}`), !g && (!n.upload || job !== void 0)) {
            g = !0;
            continue;
          }
          return {
            kind: "unreachable",
            transport: k.kind,
            detail: detail_3
          };
        }
      case "result":
        break;
    }
    let v = nt().safeParse(k.structuredContent);
    if (!v.success) return t(`dir-sync: sync_files answered unreadably: ${k.text.slice(0, 200)}`), {
      kind: "unreadable",
      isError: k.isError
    };
    let M = v.data;
    switch (M.state) {
      case "running":
        job = M.job;
        continue;
      case "refused":
        if (M.reason === "unknown_job" && !b) {
          b = !0, job = void 0;
          continue;
        }
        return {
          kind: "refused",
          reason: M.reason
        };
      case "done":
        return {
          kind: "done",
          outcome: M.outcome,
          polls: polls
        };
    }
  }
}
async function eQn({
  host: host_5,
  readOnly: n,
  signal: signal_2,
  onStatus: onStatus
}) {
  let h = B();
  if (!Ibn(host_5)) {
    if (!h.countedTooOld.has(host_5.name)) h.countedTooOld.add(host_5.name), h.engine().then(g => {
      if (g !== null) i("tengu_dir_sync_mid_turn", {
        point: c("pre_forward"),
        clearance: c("machine_too_old")
      }), K({
        point: "before_command",
        guarantee: "down",
        empty: !0,
        ms: 0,
        events: 0,
        outcome: "go",
        own: g.frame?.() ?? null,
        peer: null
      });
    });
    return {
      kind: "go"
    };
  }
  if ((await h.engine().catch(() => null))?.pushPoint !== void 0) try {
    let outcome = await host_5.transport.checkLive?.({
      signal: signal_2
    });
    if (outcome !== void 0) return i("tengu_dir_sync_mid_turn", {
      point: c("pre_forward"),
      clearance: c("machine_away"),
      read_only: n
    }), {
      kind: "away",
      outcome: outcome
    };
  } catch (error) {
    if (!Ke(error)) d(error);
  }
  while (h.inFlight !== void 0 && !signal_2.aborted) await h.inFlight.catch(() => {});
  if (signal_2.aborted) return {
    kind: "go"
  };
  let a = rt(h, host_5, n, signal_2, onStatus);
  h.inFlight = a;
  try {
    return await a;
  } catch (error) {
    return d(error), t(`dir-sync: pre-forward sync point failed: ${l(error)}`, {
      level: "error"
    }), i("tengu_dir_sync_mid_turn", {
      point: c("pre_forward"),
      clearance: c("threw"),
      read_only: n
    }), x({
      cause: "this session's file sync failed unexpectedly before the command (an internal error)",
      remedy: "the user's next message resyncs",
      name: host_5.name,
      readOnly: n
    });
  } finally {
    h.inFlight = void 0;
  }
}
async function rt(e, n, readOnly, s, h) {
  let a = Date.now(),
    events = 0,
    b = await e.engine();
  if (b?.pushPoint === void 0 || s.aborted) return {
    kind: "go"
  };
  if (await st(e, n, b, s, h), s.aborted) return {
    kind: "go"
  };
  let push = await b.pushPoint();
  if (push === null || s.aborted) return {
    kind: "go"
  };
  let k = push.kind === "failed" && push.reason === "store_full" ? ge(push.reason, n.name, readOnly) : null,
    v = (S, N) => {
      let T = k ?? N,
        L = e.ledger.peer(n),
        taken = e.caughtUp(n);
      return K({
        point: "before_command",
        guarantee: "down",
        empty: push.kind === "clean" && events === 0,
        ms: Date.now() - a,
        events: events,
        outcome: T.kind === "go_with_note" ? "note" : T.kind,
        own: b.frame?.() ?? null,
        peer: L.frame === null || L.frame.taken >= taken ? L.frame : {
          ...L.frame,
          taken: taken
        },
        peerStale: L.stale
      }), wt(a, {
        push: push,
        ...S,
        readOnly: readOnly
      }, T);
    };
  if (push.kind === "failed" && k === null) return v({}, ge(push.reason, n.name, readOnly));
  let laptopJournalUnread = b.takeInPending?.() ?? !1;
  if (!laptopJournalUnread && (push.generation <= e.caughtUp(n) || !z9r({
    view: e.ledger.peer(n),
    upTo: push.generation,
    newest: push.generation,
    laptopJournalUnread: laptopJournalUnread
  }))) return v({}, {
    kind: "go"
  });
  if (push.kind !== "clean") h?.(`Syncing your changes to ${n.name}\u2026`);
  let R = upload => (events += 1, _e(n, {
      upTo: push.generation,
      upload: upload
    }, s, () => h?.(`Waiting for ${n.name} to take in your changes\u2026`))),
    reply = await R(!1),
    escalated = !1;
  if (it(reply) && !readOnly && b.pullPoint !== void 0) {
    escalated = !0, h?.(`Syncing with ${n.name} so it can take more changes\u2026`);
    let S = await R(!0),
      N = S.kind === "done" && (S.outcome.push.kind === "sent" || S.outcome.push.kind === "unchanged") ? S.outcome.push.generation : null;
    if (reply = S, N !== null) {
      await b.pullPoint(N, s);
      let T = await b.pushPoint();
      if (T !== null && T.kind !== "failed") reply = await R(!1);
    } else if (S.kind === "done" && S.outcome.push.kind !== "not_attempted" && !s.aborted) {
      let {
        push: push_2
      } = S.outcome;
      return v({
        reply: reply,
        escalated: escalated
      }, x({
        cause: `${n.name} holds as many of this session's changes as it takes before uploading its own, and that upload did not go (${push_2.kind === "kept_here" ? push_2.detail || push_2.reason : push_2.kind === "failed" ? push_2.reason : push_2.kind})`,
        remedy: push_2.kind === "kept_here" ? push_2.reason === "file_store_full" ? `nothing on the machine can; the user's next message ends file sync for this session, and from then on commands for ${n.name} run on its files directly` : "the user clears that on the machine (its terminal says how); their next message then completes the exchange" : "the user's next message retries it",
        name: n.name,
        readOnly: readOnly
      }));
    }
  }
  if (s.aborted) reply = {
    kind: "aborted"
  };
  return v({
    reply: reply,
    escalated: escalated
  }, dt(reply, e, n, readOnly, push.generation));
}
var ot = "sync_at_attach";
async function st(e, n, r, s, h) {
  let a = `${n.name}\x00${n.description?.epoch ?? ""}`;
  if (r.attachOffer === void 0 || r.pullPoint === void 0 || e.offered.has(a) || n.description?.capabilities?.includes(ot) !== !0) return;
  let g = Date.now(),
    b = (w, armed) => {
      if (i("tengu_dir_sync_attach_offer", {
        outcome: c(w),
        armed: armed,
        duration_ms: Date.now() - g
      }), armed) _("ccr_dir_sync_attach");else if (w === "threw") m("ccr_dir_sync_attach", w);else p("ccr_dir_sync_attach", w);
    };
  try {
    if (!(await Rwt())) return;
    let offer = await r.attachOffer();
    if (offer === null || s.aborted) return;
    e.offered.add(a), h?.(`Starting file sync with ${n.name}\u2026`);
    let k = await _e(n, {
        upTo: 0,
        upload: !0,
        offer: offer
      }, s, () => h?.(`Waiting for ${n.name} to send its files\u2026`)),
      v = k.kind === "done" && (k.outcome.push.kind === "sent" || k.outcome.push.kind === "unchanged") ? k.outcome.push.generation : null;
    if (v === null || v < 1) {
      b(k.kind === "refused" ? `refused_${k.reason}` : k.kind === "done" ? `push_${k.outcome.push.kind}` : k.kind, !1);
      return;
    }
    let M = await r.pullPoint(v, s, {
      mayArm: !0
    });
    b(M === null ? "not_armed" : `taken_${M.kind}`, r.integratedGeneration?.() != null);
  } catch (error) {
    d(error), b("threw", !1);
  }
}
function it(e) {
  return e.kind === "done" && e.outcome.catchUp.kind === "deferred" && e.outcome.catchUp.reason === "capped_until_upload";
}
function dt(e, n, r, readOnly_2, h) {
  let {
    name: name_29
  } = r;
  switch (e.kind) {
    case "aborted":
      return {
        kind: "go"
      };
    case "unreachable":
      return x({
        cause: `${name_29} could not be asked to take in this session's latest file changes first (${e.detail})`,
        remedy: "the user's next message resyncs; if the machine is unreachable the command would not have reached it either",
        name: name_29,
        readOnly: readOnly_2
      });
    case "unreadable":
      return x({
        cause: e.isError ? `${name_29}'s Claude Code failed this session's sync request` : `${name_29}'s Claude Code answered this session's sync request in a form it cannot read (mismatched versions)`,
        remedy: "the user's next message resyncs",
        name: name_29,
        readOnly: readOnly_2
      });
    case "refused":
      return ut(e.reason, name_29, readOnly_2);
    case "done":
      {
        let {
          catchUp: catchUp
        } = e.outcome;
        switch (catchUp.kind) {
          case "ready":
            return n.taken(r, Math.min(catchUp.generation, h)), {
              kind: "go"
            };
          case "deferred":
            return ct(catchUp, name_29, readOnly_2);
          case "not_running":
            return {
              kind: "go_with_note",
              note: `${name_29} has stopped syncing this session's files; the command ran on its files as they are, which may not include your edits here`
            };
          case "failed":
            return x({
              cause: `${name_29} could not take in this session's latest file changes first (${ft(catchUp.reason)})`,
              remedy: pt(catchUp.reason),
              name: name_29,
              readOnly: readOnly_2
            });
        }
      }
  }
}
function ge(e, name_30, readOnly_3) {
  if (e === "note_refused") return {
    kind: "go_with_note",
    note: `this session's file sync can no longer publish to ${name_30} (the sync service refuses it), so your edits here are not reaching that machine; the command ran on its files as they are`
  };
  if (e === "store_full") return {
    kind: "go"
  };
  return x({
    cause: `this session's latest file changes could not be sent to ${name_30} first (${lt(e)})`,
    remedy: ht(e),
    name: name_30,
    readOnly: readOnly_3
  });
}
function ut(e, name_31, readOnly_4) {
  switch (e) {
    case "no_session":
    case "unbound_device":
    case "mode_withdrawn":
      return {
        kind: "go"
      };
    case "no_engine":
    case "not_syncing":
      return {
        kind: "go_with_note",
        note: `${name_31} is not syncing this session's files (sync is off or stopped there, or another terminal started the session); the command ran on that machine's files as they are, which may not include your edits here`
      };
    case "unsupported":
      return {
        kind: "go_with_note",
        note: `${name_31} syncs this session's files only at turn boundaries (its sync engine has no mid-turn sync points); the command ran on that machine's files as of the user's last message, which may not include your edits here`
      };
    case "too_many_concurrent":
    case "unknown_job":
    case "cancelled":
    case "failed":
    case "other":
      return x({
        cause: `${name_31} could not take in this session's latest file changes first (${e === "other" ? "it refused for a reason this version does not know" : `its Claude Code said: ${e.replace(/_/g, " ")}`})`,
        remedy: "the user's next message resyncs",
        name: name_31,
        readOnly: readOnly_4
      });
  }
}
function ct(e, name_32, readOnly_5) {
  switch (e.reason) {
    case "upload_only":
      return {
        kind: "go_with_note",
        note: `${name_32} only sends files to this session and does not take this session's changes back (it is not bound to the session as a device, or cannot take files back); the command ran on the user's files as they are there`
      };
    case "branch_changed":
      return x({
        cause: `the user has switched the checkout on ${name_32} to another branch than the one this session's changes were made on, so your edits here are held back from it`,
        remedy: "it clears when they switch back; tell the user if you need the command run there",
        name: name_32,
        readOnly: readOnly_5
      });
    case "capped_until_upload":
      return x({
        cause: `${name_32} has taken in as many of this session's changes as it holds before the user's next message`,
        remedy: "the user's next message completes the exchange",
        name: name_32,
        readOnly: readOnly_5
      });
    case "still_arriving":
      return x({
        cause: `${name_32} is still taking in this session's latest changes`,
        remedy: "the next command forwarded there tries again",
        name: name_32,
        readOnly: readOnly_5
      });
    case "held_open":
      {
        let s = e.held ?? [],
          h = Math.max(0, (e.heldCount ?? s.length) - s.length),
          a = s.length === 1 && h === 0,
          b = `${s.length === 0 ? "files this session changed" : `${s.map(item => `"${item}"`).join(", ")}${h > 0 ? ` and ${h} more` : ""}`} ${a ? "is" : "are"} open in another program on ${name_32}, so this session's changes to ${a ? "it" : "them"} are not there yet; they land at the next sync after that program closes ${a ? "it" : "them"}`;
        return {
          kind: "go_with_note",
          note: readOnly_5 ? `${b}. This read ran on ${name_32}'s older ${a ? "copy of that file" : "copies of those files"}` : `${b}. The command ran; on ${name_32} ${a ? "that file still has its" : "those files still have their"} earlier contents`
        };
      }
    case "serving_another_command":
      return x({
        cause: `${name_32} is running another command for this session and takes this session's changes in between commands`,
        remedy: "they catch up at the next sync point, before the next command runs there",
        name: name_32,
        readOnly: readOnly_5
      });
    case "turn_end":
      return x({
        cause: `${name_32} takes this turn's file changes in when the turn ends`,
        remedy: "the end of this turn; a command forwarded there after that runs on them",
        name: name_32,
        readOnly: readOnly_5
      });
    case "awaiting_container":
      return x({
        cause: `${name_32} could not download one of this session's earlier file uploads and takes in nothing newer until the session sends its changes in a form it can take`,
        remedy: `the session's next upload (this turn's end at the latest) is built so ${name_32} can take it; a command forwarded there after that runs on the session's files`,
        name: name_32,
        readOnly: readOnly_5
      });
    case "round_skipped":
    case "other":
      return x({
        cause: `${name_32} left this session's latest changes unapplied (its Claude Code told the user why)`,
        remedy: "the user's next message resyncs",
        name: name_32,
        readOnly: readOnly_5
      });
  }
}
function x({
  cause: cause_2,
  remedy: remedy,
  name: name_33,
  readOnly: readOnly_6
}) {
  return readOnly_6 ? {
    kind: "go_with_note",
    note: `${cause_2}; this read ran on ${name_33}'s files as they were, which do not include your latest edits here`
  } : {
    kind: "hold",
    message: `Not run on ${name_33}: ${cause_2}, so the command would have acted on stale files. ${name_33} was not contacted. What clears it: ${remedy}.`
  };
}
function lt(e) {
  switch (e) {
    case "note_not_published":
    case "put_failed":
      return "the sync service did not take them just now";
    case "over_cap":
      return "together they are larger than one sync step carries";
    case "checkout_unready":
      return "this checkout is mid-merge, mid-rebase or has unresolved conflicts";
    case "snapshot_refused":
      return "this checkout could not be read just now";
    case "bundle_failed":
    case "no_ref":
      return "git could not package them here";
    case "crashed":
      return "this session's sync hit an internal error";
    default:
      return e.replace(/_/g, " ");
  }
}
function ht(e) {
  switch (e) {
    case "over_cap":
      return "take the large files out of what is synced (the directory-sync notice says how); the next command forwarded there then carries the rest";
    case "checkout_unready":
      return "finish or abort the merge or rebase in this checkout first";
    case "note_not_published":
    case "put_failed":
    case "snapshot_refused":
      return "usually momentary \u2014 the next command forwarded there tries again, and the user's next message resyncs";
    default:
      return "the user's next message resyncs";
  }
}
function ft(e) {
  switch (e) {
    case "not_seen":
      return "it could not yet see what this session sent";
    case "lane_lost":
      return "it has lost access to the sync service";
    case "journal_unreadable":
    case "journal_failed":
      return "it could not read this session's sync record";
    case "object_failed":
      return "the download failed";
    case "refused":
      return "its Claude Code refused them (the user was told why)";
    case "aborted":
      return "the call was interrupted";
    case "crashed":
      return "its Claude Code's sync hit an internal error";
    case "other":
      return "for a reason this version does not know";
  }
}
function pt(e) {
  switch (e) {
    case "lane_lost":
    case "journal_unreadable":
      return "sync is off for this session on that machine until the user re-attaches it";
    case "refused":
      return "the user's next message resyncs once they have dealt with what their Claude Code reported";
    default:
      return "usually momentary \u2014 the next command forwarded there tries again, and the user's next message resyncs";
  }
}
var mt = {
    shipped: "sent",
    shipping: "sent",
    unchanged: "unchanged",
    kept_here: "kept_here",
    deferred: "kept_here",
    failed: "failed",
    not_running: "not_attempted"
  },
  gt = ["too_large", "refused", "unauthorized", "lane_unavailable", "local_failures", "file_store_full", "crashed", "uploads_failing"];
async function tQn(e) {
  let n = Etr(e);
  if (n === null) {
    let r = typeof e === "object" && e !== null && e.v === G_t;
    t(`dir-sync: unreadable dir_sync word on a served result (${r ? "malformed" : "other version"})`), i("tengu_dir_sync_mid_turn", {
      point: y("after_forward"),
      machine_push: y(r ? "malformed" : "other_version")
    });
    return;
  }
  try {
    let r = await B().engine();
    if (r === null || r.pullPoint === void 0) return;
    let s = mt[n.outcome.kind];
    i("tengu_dir_sync_mid_turn", {
      point: y("after_forward"),
      machine_push: c(s),
      ...((s === "kept_here" || s === "failed") && {
        machine_push_reason: c(O(gt)(n.outcome.reason ?? "other"))
      })
    });
  } catch (error) {
    t(`dir-sync: could not record what the machine said about a command's files (telemetry only; the result is unaffected): ${l(error)}`, {
      level: "error"
    }), i("tengu_dir_sync_mid_turn", {
      point: y("after_forward"),
      machine_push: y("error")
    });
  }
}
function yt(e, n, {
  push: push_3,
  reply: reply_2,
  pull: pull,
  readOnly: a,
  escalated: escalated_2
}) {
  let b = reply_2?.kind === "done" ? reply_2.outcome : void 0;
  return {
    point: c(e),
    duration_ms: Date.now() - n,
    ...(push_3 !== void 0 && {
      push: c(push_3.kind)
    }),
    ...(reply_2 !== void 0 && {
      machine: c(reply_2.kind)
    }),
    ...(reply_2?.kind === "unreachable" && {
      transport: c(reply_2.transport)
    }),
    ...(reply_2?.kind === "refused" && {
      refused: c(reply_2.reason)
    }),
    ...(reply_2?.kind === "done" && {
      polls: reply_2.polls
    }),
    ...(b !== void 0 && {
      catch_up: c(b.catchUp.kind),
      machine_push: c(b.push.kind)
    }),
    ...(b?.catchUp.kind === "deferred" && {
      deferred: c(b.catchUp.reason)
    }),
    ...(b?.catchUp.kind === "failed" && {
      catch_up_failure: c(b.catchUp.reason)
    }),
    ...(pull !== void 0 && {
      pull: c(pull.kind)
    }),
    ...(a !== void 0 && {
      read_only: a
    }),
    ...(escalated_2 !== void 0 && {
      escalated: escalated_2
    })
  };
}
function wt(e, n, r) {
  return i("tengu_dir_sync_mid_turn", {
    ...yt("pre_forward", e, n),
    clearance: c(r.kind)
  }), r;
}
export { vbn, Bzt, jJn, m6r, g6r, h6r, WJn, y6r, iht, kbn, _6r, jzt, b6r, S6r, zJn, w6r, v6r, k6r, E6r, T6r, MXe, C6r, Ebn, Tbn, R6r, Cbn, GJn, A6r, x6r, P6r, I6r, VJn, Rbn, Abn, xbn, aht, qJn, KJn, O6r, YJn, M6r, D6r, DXe, image as XJn, Pbn, gPe, JJn, lht, f1e, gA, LXe, NXe, QJn, HXe, tqo, ZJn, Ibn, eQn, tQn };