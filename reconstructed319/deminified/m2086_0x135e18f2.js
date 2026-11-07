// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var r, a;
function n() {
  if (r !== void 0 && a === "external") return r;
  return a = "external", r = [], r;
}
function L3s() {
  return n().map(item => item.id);
}
function N3s(e) {
  for (let template of n()) {
    let o = template.digests.find(item => item.sha256 === e);
    if (o) return {
      template: template,
      label: o.label
    };
  }
  return;
}
function evt(e) {
  return n().find(item => item.id === e);
}
function G6n(e) {
  return e.event === "PreToolUse";
}
function V6n() {
  return !0;
}
export { L3s, N3s, evt, G6n, V6n };