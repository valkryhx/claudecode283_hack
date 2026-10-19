// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
class t {
  reader = null;
  register(e) {
    let reader = this.reader;
    return this.reader = e, reader;
  }
}
var o = new t();
function v2s(e) {
  return o.register(e);
}
function l() {
  let reader_2 = o.reader;
  if (!reader_2) return !0;
  try {
    let {
      value: value,
      source: source,
      defaultHost: defaultHost
    } = reader_2("tengu_warm_sunrise", !0);
    return value !== !1 || source !== "payload" || !defaultHost;
  } catch {
    return !0;
  }
}
function Z3n(e) {
  return e !== "-rm" || l();
}
class d {
  reader = null;
  register(e) {
    let reader_3 = this.reader;
    return this.reader = e, reader_3;
  }
}
var n = new d();
function k2s(e) {
  return n.register(e);
}
function E2s() {
  let reader_4 = n.reader;
  if (!reader_4) return !0;
  try {
    let {
      value: value_2,
      source: source_2,
      defaultHost: defaultHost_2
    } = reader_4("tengu_vast_puddle", !0);
    return value_2 !== !1 || source_2 !== "payload" || !defaultHost_2;
  } catch {
    return !0;
  }
}
export { v2s, Z3n, k2s, E2s };