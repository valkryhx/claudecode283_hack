// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
function SDi(t, r, o = {}) {
  e().host.telemetryHandles.installMeter(t, r, o);
}
function ups() {
  return e().host.telemetryHandles.sessionCounter();
}
function fps() {
  return e().host.telemetryHandles.locCounter();
}
function Mft() {
  return e().host.telemetryHandles.prCounter();
}
function pps() {
  return e().host.telemetryHandles.commitCounter();
}
function wDi() {
  return e().host.telemetryHandles.costCounter();
}
function U_r() {
  return e().host.telemetryHandles.tokenCounter();
}
function Edo() {
  return e().host.telemetryHandles.codeEditToolDecisionCounter();
}
function kDi() {
  return e().host.telemetryHandles.activeTimeCounter();
}
function B_r() {
  return e().host.telemetryHandles.meterProvider();
}
function mps(t) {
  e().host.telemetryHandles.replaceMeterProvider(t);
}
function e() {
  return H();
}
export { SDi, ups, fps, Mft, pps, wDi, U_r, Edo, kDi, B_r, mps };