// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function r(n) {
  return n;
}
function b(n) {
  return r(n);
}
function f(n) {
  return r(n);
}
function de(n) {
  return n == null ? void 0 : r(n);
}
function bo(n) {
  return r(String(n));
}
function x7(n) {
  return n == null ? void 0 : r(String(n));
}
function Rp(...n) {
  return r(n.join(""));
}
function Q$r(n) {
  return r(n.join(","));
}
function ka(n) {
  return r([...n].sort().join(","));
}
function xk(n, e) {
  return r(n.join(e ?? ","));
}
function Yn(n) {
  return r(n);
}
function Qv(n, e) {
  return e ? Yn(n) : void 0;
}
function BKs(n, e) {
  return n !== void 0 && e.includes(n) && /^[a-z0-9-]{1,64}$/.test(n) ? Yn(n) : b("none");
}
function Yae(n, e) {
  return e ? Yn(n) : b("custom");
}
function jwe(n) {
  return Yae(n.agentType, n.source === "built-in");
}
function VIo(n, e) {
  return e ? Yn(n) : b("third-party");
}
export { b, f, de, bo, x7, Rp, Q$r, ka, xk, Yn, Qv, BKs, Yae, jwe, VIo };