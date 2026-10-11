// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
function dbo(t, r, o = {}) {
  e().host.telemetryHandles.installMeter(t, r, o);
}
function ubo() {
  return e().host.telemetryHandles.sessionCounter();
}
function oTr() {
  return e().host.telemetryHandles.locCounter();
}
function mKe() {
  return e().host.telemetryHandles.prCounter();
}
function pbo() {
  return e().host.telemetryHandles.commitCounter();
}
function fbo() {
  return e().host.telemetryHandles.costCounter();
}
function onn() {
  return e().host.telemetryHandles.tokenCounter();
}
function oUn() {
  return e().host.telemetryHandles.codeEditToolDecisionCounter();
}
function mbo() {
  return e().host.telemetryHandles.activeTimeCounter();
}
function gbo() {
  return e().host.telemetryHandles.meterProvider();
}
function sTr(t) {
  e().host.telemetryHandles.replaceMeterProvider(t);
}
function e() {
  return j();
}
export { dbo, ubo, oTr, mKe, pbo, fbo, onn, oUn, mbo, gbo, sTr };