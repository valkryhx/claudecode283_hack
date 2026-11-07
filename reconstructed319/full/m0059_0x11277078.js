// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
function P1s(t, e) {
  return t.value === !e && t.source === "payload" && t.defaultHost ? !e : e
}
class BSt {
  reader = null;
  register(t) {
    let e = this.reader;
    return this.reader = t, e
  }
  read(t, e) {
    let r = this.reader;
    if (!r) return e;
    try {
      return P1s(r(t, e), e)
    } catch {
      return e
    }
  }
}
export {
  P1s,
  BSt
};
