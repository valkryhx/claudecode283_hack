// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
function uRe(t, r) {
  switch (r) {
    case "bash":
      return `!${t}`;
    default:
      return t;
  }
}
function xb(t) {
  if (t.startsWith("!")) return "bash";
  return "prompt";
}
function LI(t) {
  if (xb(t) === "prompt") return t;
  return t.slice(1);
}
function Hkt(t) {
  return t === "!";
}
function cQo({
  nextValue: nextValue,
  value: value,
  cursorOffset: cursorOffset,
  mode: mode
}) {
  let e = xb(nextValue);
  if (cursorOffset !== 0 || e === "prompt" || e === mode) return !1;
  return nextValue.length === value.length + 1 || value.length === 0;
}
export { uRe, xb, LI, Hkt, cQo };