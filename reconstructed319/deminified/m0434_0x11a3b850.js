// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var AMn = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/u;
function rco(n) {
  return AMn.test(n);
}
var o = /\p{Cs}/u;
function xoe(n) {
  return rco(n) || o.test(n);
}
function R0e(n, t) {
  return n.split(/\r?\n/).some(xoe) ? `${t} is not shown here because it holds hidden or control characters` : n;
}
function u1(n) {
  return xoe(n) ? "a path not shown here because it holds hidden or control characters" : n;
}
export { AMn, rco, xoe, R0e, u1 };