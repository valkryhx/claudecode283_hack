// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  kzs
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Va
} from "B:/~BUN/root/chunk-gr5se97s.js";

function n1o(e) {
  if (e) Va.terminalFocusGainedAt = Date.now();
  if (!e && Va.terminalFocus === "blurred") return;
  Va.terminalFocus = e ? "focused" : "blurred", kzs(e), Va.terminalFocusChanged.emit()
}

function zYe() {
  return Va.terminalFocus !== "blurred"
}

function _le() {
  return Va.terminalFocus
}

function A7s() {
  return Va.terminalFocusGainedAt
}

function GUe(e) {
  return Va.terminalFocusChanged.subscribe(e)
}
export {
  n1o,
  zYe,
  _le,
  A7s,
  GUe
};
