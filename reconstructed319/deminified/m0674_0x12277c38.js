// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function hQn(t) {
  let e = {};
  for (let [n, value] of Object.entries(t)) {
    if (value === void 0) continue;
    if (n === "__proto__") Object.defineProperty(e, n, {
      value: value,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });else e[n] = value;
  }
  return e;
}
export { hQn };