// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var regExp = new RegExp("^(?:settings|(?:plugin|skill)(?::[A-Za-z0-9][A-Za-z0-9._-]{0,63})?)$"),
  regExp_2 = new RegExp("^[A-Za-z0-9][A-Za-z0-9._-]{0,63}@[A-Za-z0-9][A-Za-z0-9._-]{0,63}$");
function dXn(n) {
  return typeof n === "string" && regExp.test(n) ? n : void 0;
}
function cXn(n) {
  return typeof n === "string" && regExp_2.test(n) ? n : void 0;
}
function UQs(n, e) {
  if (n === `PreToolUse:${e}`) return "PreToolUse";
  return n === "tool.check" ? "tool.check" : void 0;
}
function BQs(n) {
  return n === "PreToolUse" || n === "tool.check" ? n : void 0;
}
export { dXn, cXn, UQs, BQs };