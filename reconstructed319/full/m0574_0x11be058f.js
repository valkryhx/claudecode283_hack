// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
function E7t(e, n) {
  return {
    ...e,
    endedByModel: n
  }
}

function xce(e) {
  return e?.endedByModel
}

function V_r() {
  return !1
}

function vps() {
  return ""
}

function c1(e) {
  let n = vps();
  return n === "" ? e : `${e} ${n}`
}
export {
  E7t,
  xce,
  V_r,
  vps,
  c1
};
