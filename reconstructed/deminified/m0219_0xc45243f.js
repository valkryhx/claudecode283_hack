// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var r = /[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,
  Zat = 256,
  ran = /[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;
function qee(e) {
  return e.length > 0 && e.length <= 256 && !ran.test(e);
}
function GNe(e) {
  return e.length <= 256 && /^[A-Za-z0-9_:.-]+$/.test(e);
}
function k_(e) {
  return t(e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
}
function t(e) {
  return e.replace(r, n => `&#${n.charCodeAt(0)};`);
}
function _z(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function wc(e) {
  return t(_z(String(e ?? "")));
}
function xTe(e) {
  return wc(e).replaceAll('"', "&quot;");
}
export { Zat, ran, qee, GNe, k_, _z, wc, xTe };