// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Le,
  fe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  L,
  js
} from "B:/~BUN/root/chunk-5ha2avah.js";
var l = 256;

function E7s(e) {
  let n = new Set(js(fe().seenSecurityWarnings));
  return e.filter((r) => r.seenKey === void 0 || !n.has(r.seenKey))
}

function T7s(e, n) {
  if (e.length === 0) return;
  Le((r) => {
    let i = js(r.seenSecurityWarnings),
      o = new Set(i),
      t = L(e).filter((s) => !o.has(s));
    if (t.length === 0) return r;
    return {
      ...r,
      seenSecurityWarnings: [...i, ...t].slice(-l)
    }
  }, n)
}
async function P9n() {
  try {
    let [{
      getAllBaseTools: e
    }, {
      collectPermissionRuleAdvisories: n
    }, {
      loadAllPermissionRulesFromDisk: r
    }] = await Promise.all([import("B:/~BUN/root/chunk-0zr39xvy.js"), import("B:/~BUN/root/chunk-prfqjhn8.js"), import("B:/~BUN/root/chunk-88n8me64.js")]);
    return L(n(r(), e).map((i) => i.line))
  } catch (e) {
    return a(e), []
  }
}
export {
  E7s,
  T7s,
  P9n
};
