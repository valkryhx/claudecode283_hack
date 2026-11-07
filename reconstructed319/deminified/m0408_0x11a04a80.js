// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Nr } from "B:/~BUN/root/chunk-eev762xg.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { kg } from "B:/~BUN/root/chunk-2392ztjf.js";
import { AV } from "B:/~BUN/root/chunk-trd3c21n.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var n = he({
    work: null,
    text: null,
    stopsAfterReply: !1,
    sentBashTextStops: null
  }, e => {
    e.work = null, e.text = null, e.stopsAfterReply = !1, e.sentBashTextStops = null;
  }),
  KCs = "In this session, once your reply ends and until the user writes again, you may not be told when a background command ends, and a few minutes later the command is likely stopped along with every other process left running here; run in the foreground, with a long enough `timeout`, any command that must finish and can finish within the foreground maximum, and otherwise tell the user it will likely be stopped a few minutes after your reply.";
function WKi(e) {
  n.work = e;
}
function L_o() {
  return n.work?.() ?? !1;
}
function zKi(e) {
  n.text = e, n.stopsAfterReply = !1;
}
function Uy() {
  if (!n.stopsAfterReply && n.text?.() === !0) n.stopsAfterReply = !0;
  return n.stopsAfterReply;
}
function qCs(e) {
  if (e !== void 0) n.sentBashTextStops = (n.sentBashTextStops ?? !0) && e.includes(KCs);
}
function GKi() {
  return n.sentBashTextStops === !0;
}
function ff() {
  return kg().backgroundTasksDisabled || dbe();
}
function dbe() {
  return i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || Nr();
}
function CQe() {
  return kg().backgroundShellsKeptElsewhere || Uy();
}
function RQe() {
  return Uy() && !igt() && !AV();
}
function y2e() {
  let e = kg();
  return e.backgroundTasksDisabled && !e.backgroundShellsKeptElsewhere || dbe();
}
function igt() {
  let e = kg();
  return e.backgroundTasksDisabled && e.backgroundLaunchRule === void 0 || e.backgroundAgentLaunchDisabled || i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || Nr();
}
function C3() {
  return ff() || kg().backgroundAgentLaunchDisabled;
}
function AQe() {
  let e = kg();
  if (!e.foregroundAgentMovesAdmitted) return C3();
  return e.backgroundAgentLaunchDisabled || i.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || Nr();
}
function VKi() {
  let e = kg();
  return e.backgroundLaunchRule !== void 0 && !e.backgroundLaunchByDefault && !igt();
}
function w$n() {
  return kg().backgroundLaunchByDefault && !igt();
}
export { KCs, WKi, L_o, zKi, Uy, qCs, GKi, ff, dbe, CQe, RQe, y2e, igt, C3, AQe, VKi, w$n };