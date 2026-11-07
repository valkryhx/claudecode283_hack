// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var weakMap = new WeakMap();
function r(e, o) {
  let t = weakMap.get(e);
  if (t === void 0) t = new Set(), weakMap.set(e, t);
  t.add(o);
}
function i(e, o) {
  return weakMap.get(e)?.has(o) === !0;
}
export { i as isScriptRowUUID, r as rememberScriptRowUUID };