// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function Dte(n) {
  return n.replace(/[-_]/g, "").toLowerCase();
}
function uNr(n) {
  return new Map(n.map(item => [Dte(item), item]));
}
function it(n) {
  if (typeof n !== "object" || n === null) return !1;
  let t = Object.getPrototypeOf(n);
  return t === Object.prototype || t === null;
}
export { Dte, uNr, it };