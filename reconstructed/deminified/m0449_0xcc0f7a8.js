// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
function NIe(t, r) {
  switch (r) {
    case "bash":
      return `!${t}`;
    default:
      return t;
  }
}
function Kh(t) {
  if (t.startsWith("!")) return "bash";
  return "prompt";
}
function JC(t) {
  if (Kh(t) === "prompt") return t;
  return t.slice(1);
}
function zQe(t) {
  return t === "!";
}
function tQr({
  nextValue: nextValue,
  value: value,
  cursorOffset: cursorOffset,
  mode: mode
}) {
  let e = Kh(nextValue);
  if (cursorOffset !== 0 || e === "prompt" || e === mode) return !1;
  return nextValue.length === value.length + 1 || value.length === 0;
}
export { NIe, Kh, JC, zQe, tQr };