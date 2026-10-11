// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { oGr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Ji } from "B:/~BUN/root/chunk-thz7h362.js";
function jtr(e) {
  if (e) Ji.terminalFocusGainedAt = Date.now();
  if (!e && Ji.terminalFocus === "blurred") return;
  Ji.terminalFocus = e ? "focused" : "blurred", oGr(e), Ji.terminalFocusChanged.emit();
}
function Zbe() {
  return Ji.terminalFocus !== "blurred";
}
function gU() {
  return Ji.terminalFocus;
}
function ZXr() {
  return Ji.terminalFocusGainedAt;
}
function VQ(e) {
  return Ji.terminalFocusChanged.subscribe(e);
}
export { jtr, Zbe, gU, ZXr, VQ };