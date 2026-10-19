// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";

function tCs(t, r, o = {}) {
  e().host.telemetryHandles.installMeter(t, r, o)
}

function nCs() {
  return e().host.telemetryHandles.sessionCounter()
}

function m_o() {
  return e().host.telemetryHandles.locCounter()
}

function o5e() {
  return e().host.telemetryHandles.prCounter()
}

function g_o() {
  return e().host.telemetryHandles.commitCounter()
}

function rCs() {
  return e().host.telemetryHandles.costCounter()
}

function mBn() {
  return e().host.telemetryHandles.tokenCounter()
}

function mEr() {
  return e().host.telemetryHandles.codeEditToolDecisionCounter()
}

function oCs() {
  return e().host.telemetryHandles.activeTimeCounter()
}

function sCs() {
  return e().host.telemetryHandles.meterProvider()
}

function h_o(t) {
  e().host.telemetryHandles.replaceMeterProvider(t)
}

function e() {
  return j()
}
export {
  tCs,
  nCs,
  m_o,
  o5e,
  g_o,
  rCs,
  mBn,
  mEr,
  oCs,
  sCs,
  h_o
};
