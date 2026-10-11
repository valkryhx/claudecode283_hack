// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { qe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { QW } from "B:/~BUN/root/chunk-72ygq84a.js";
var u9 = 300000,
  NL = 3600000;
import { AsyncLocalStorage as t } from "async_hooks";
var Rst = "X-CCR-Turn-Id",
  o = 128,
  u = /^[\x21-\x7e]+$/,
  i = new t();
function c_o(id, n) {
  return i.run({
    id: id
  }, n);
}
function jPt() {
  return i.getStore()?.id;
}
function WPt() {
  let e = i.getStore();
  if (e) e.id = void 0;
}
function Ast(e) {
  let n = jPt();
  if (n === void 0) return;
  if (e.some(item => item.ccrTurnId !== n)) WPt();
}
function L$n(e, {
  isRelayHuman: isRelayHuman
}) {
  if (!isRelayHuman) return;
  if (typeof e !== "object" || e === null || !("turn_id" in e)) return;
  let turn_id = e.turn_id;
  if (typeof turn_id !== "string" || turn_id === "" || turn_id.length > o || !u.test(turn_id)) return;
  return turn_id;
}
function zPt(e) {
  if (e.length > 0) WPt();
}
function d_o(e) {
  let n = e[0]?.ccrTurnId;
  return e.every(item => item.ccrTurnId === n) ? n : void 0;
}
function u_o(e, n) {
  return e !== void 0 && e.mode === "poll-event" && e.pollEvent?.wake === !0 && !n;
}
function N$n(e) {
  return e === "prompt" || e === "orphaned-permission" || e === "task-notification" || e === "poll-event";
}
function cc(e) {
  return e.agentId === qe();
}
var p_o = {
  kind: "task-notification",
  source: "goal-checkin"
};
function Itn(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "goal-checkin";
}
var f_o = {
  kind: "task-notification",
  source: "worker-checkin"
};
function tKe(e) {
  return e.origin?.kind === "task-notification" && (e.origin.source === "goal-checkin" || e.origin.source === "worker-checkin");
}
function xst(e) {
  return cc(e) && e.mode === "task-notification";
}
function GPt(e) {
  let origin = e.queueOrigin ?? e.origin;
  return tKe({
    origin: origin
  }) ? QW(origin) : origin;
}
function bEr(e) {
  return e.queueMode ?? d(GPt(e));
}
function Pst(e) {
  return e.queueSkipAttachments === !0 || bEr(e) === "task-notification" ? !0 : void 0;
}
function d(e) {
  return e?.kind === "task-notification" ? "task-notification" : "prompt";
}
export { u9, NL, Rst, c_o, jPt, WPt, Ast, L$n, zPt, d_o, u_o, N$n, cc, p_o, Itn, f_o, tKe, xst, GPt, bEr, Pst };