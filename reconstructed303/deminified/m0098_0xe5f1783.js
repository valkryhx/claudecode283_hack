// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
var weakMap = new WeakMap();
var eln = o => weakMap.get(o);
function GBs(o) {
  let t = Object.values(o ?? {}).flatMap(item => (item ?? []).flatMap(item => (item.hooks ?? []).map(eln))),
    [e] = t;
  return t.every(item => item === e) ? e : void 0;
}
function OIe(o, t) {
  if (t === void 0) return;
  for (let e of Object.values(o)) for (let r of e ?? []) for (let s of r.hooks ?? []) weakMap.set(s, t);
}
export { eln, GBs, OIe };