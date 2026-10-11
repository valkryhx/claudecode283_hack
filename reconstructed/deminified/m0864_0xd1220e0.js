// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ud } from "B:/~BUN/root/chunk-bpp59nyd.js";
var ESt = "usage limit",
  zKt = ` (after ${ESt})`;
function dsr(e, t = !1) {
  let r = ud(e, t);
  if (r === void 0) return;
  return /^\d/.test(r) ? `resets at ${r}` : `resets ${r}`;
}
function n(e) {
  let t = dsr(e);
  return t === void 0 ? ESt : `${ESt} ${t}`;
}
function z7r(e) {
  return `Paused \xB7 ${n(e)}`;
}
function usr(e) {
  return [["paused", n(e)], ["paused", ESt], ["paused"]];
}
export { ESt, zKt, dsr, z7r, usr };