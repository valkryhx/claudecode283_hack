// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
function j2e(n, e, t) {
  if (typeof t !== "function") return;
  Object.defineProperty(n, e, {
    get: t,
    enumerable: !0,
    configurable: !0
  })
}

function vPr(n, e, t) {
  if (typeof t !== "function") return;
  Object.defineProperty(n, e, {
    get: t,
    enumerable: !0,
    configurable: !0
  })
}

function EPr(n, e) {
  if (typeof e !== "function") return;
  Object.defineProperty(n, "policyGate", {
    get: e,
    enumerable: !0,
    configurable: !0
  })
}
export {
  j2e,
  vPr,
  EPr
};
