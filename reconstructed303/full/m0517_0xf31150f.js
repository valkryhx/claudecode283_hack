// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  qzo
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  ma
} from "B:/~BUN/root/chunk-7fsmvr58.js";

function cYr(e) {
  if (e) ma.terminalFocusGainedAt = Date.now();
  if (!e && ma.terminalFocus === "blurred") return;
  ma.terminalFocus = e ? "focused" : "blurred", qzo(e), ma.terminalFocusChanged.emit()
}

function HLe() {
  return ma.terminalFocus !== "blurred"
}

function o7() {
  return ma.terminalFocus
}

function X9o() {
  return ma.terminalFocusGainedAt
}

function JCe(e) {
  return ma.terminalFocusChanged.subscribe(e)
}
export {
  cYr,
  HLe,
  o7,
  X9o,
  JCe
};
