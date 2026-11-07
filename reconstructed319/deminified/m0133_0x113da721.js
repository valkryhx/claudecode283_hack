// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var weakMap = new WeakMap();
var hZe = o => weakMap.get(o);
function sYi(o) {
  let t = Object.values(o ?? {}).flatMap(item => (item ?? []).flatMap(item => (item.hooks ?? []).map(hZe))),
    [e] = t;
  return t.every(item => item === e) ? e : void 0;
}
function G2e(o, t) {
  if (t === void 0) return;
  for (let e of Object.values(o)) for (let r of e ?? []) for (let s of r.hooks ?? []) weakMap.set(s, t);
}
export { hZe, sYi, G2e };