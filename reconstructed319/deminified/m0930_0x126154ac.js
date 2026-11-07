// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { L, js } from "B:/~BUN/root/chunk-5ha2avah.js";
var l = 256;
function E7s(e) {
  let n = new Set(js(fe().seenSecurityWarnings));
  return e.filter(item => item.seenKey === void 0 || !n.has(item.seenKey));
}
function T7s(e, n) {
  if (e.length === 0) return;
  Le(r => {
    let i = js(r.seenSecurityWarnings),
      o = new Set(i),
      t = L(e).filter(item => !o.has(item));
    if (t.length === 0) return r;
    return {
      ...r,
      seenSecurityWarnings: [...i, ...t].slice(-l)
    };
  }, n);
}
async function P9n() {
  try {
    let [{
      getAllBaseTools: getAllBaseTools
    }, {
      collectPermissionRuleAdvisories: collectPermissionRuleAdvisories
    }, {
      loadAllPermissionRulesFromDisk: loadAllPermissionRulesFromDisk
    }] = await Promise.all([import("B:/~BUN/root/chunk-0zr39xvy.js"), import("B:/~BUN/root/chunk-prfqjhn8.js"), import("B:/~BUN/root/chunk-88n8me64.js")]);
    return L(collectPermissionRuleAdvisories(loadAllPermissionRulesFromDisk(), getAllBaseTools).map(item => item.line));
  } catch (error) {
    return a(error), [];
  }
}
export { E7s, T7s, P9n };