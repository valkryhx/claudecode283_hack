// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
function r(n) {
  return n;
}
function y(n) {
  return r(n);
}
function c(n) {
  return r(n);
}
function ue(n) {
  return n == null ? void 0 : r(n);
}
function hr(n) {
  return r(String(n));
}
function Cj(n) {
  return n == null ? void 0 : r(String(n));
}
function Vc(...n) {
  return r(n.join(""));
}
function Wyn(n) {
  return r(n.join(","));
}
function Oa(n) {
  return r([...n].sort().join(","));
}
function My(n, e) {
  return r(n.join(e ?? ","));
}
function bn(n) {
  return r(n);
}
function Dy(n, e) {
  return e ? bn(n) : void 0;
}
function _Q(n, e) {
  return e ? bn(n) : y("custom");
}
function vre(n) {
  return _Q(n.agentType, n.source === "built-in");
}
function A9n(n, e) {
  return e ? bn(n) : y("third-party");
}
export { y, c, ue, hr, Cj, Vc, Wyn, Oa, My, bn, Dy, _Q, vre, A9n };