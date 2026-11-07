// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var e;
function X() {
  return e === !0;
}
function Boa(t) {
  let n = t === !0;
  if (e === void 0) return e = n, "pinned";
  return e === n ? "unchanged" : "conflict";
}
export { X, Boa };