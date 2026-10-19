// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
function r(n) {
  return n;
}
function b(n) {
  return r(n);
}
function c(n) {
  return r(n);
}
function pe(n) {
  return n == null ? void 0 : r(n);
}
function jr(n) {
  return r(String(n));
}
function tY(n) {
  return n == null ? void 0 : r(String(n));
}
function ru(...n) {
  return r(n.join(""));
}
function SQn(n) {
  return r(n.join(","));
}
function fl(n) {
  return r([...n].sort().join(","));
}
function K_(n, e) {
  return r(n.join(e ?? ","));
}
function xn(n) {
  return r(n);
}
function JS(n, e) {
  return e ? xn(n) : void 0;
}
function Rqo(n, e) {
  return n !== void 0 && e.includes(n) && /^[a-z0-9-]{1,64}$/.test(n) ? xn(n) : b("none");
}
function Bde(n, e) {
  return e ? xn(n) : b("custom");
}
function wye(n) {
  return Bde(n.agentType, n.source === "built-in");
}
function rWr(n, e) {
  return e ? xn(n) : b("third-party");
}
export { b, c, pe, jr, tY, ru, SQn, fl, K_, xn, JS, Rqo, Bde, wye, rWr };