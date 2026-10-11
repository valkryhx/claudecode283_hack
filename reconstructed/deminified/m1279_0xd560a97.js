// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, Pe, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
N();
var o = Vt(!1);
function Wyt(n) {
  let t = w(2),
    {
      children: children
    } = n,
    a;
  if (t[0] !== children) a = e(o.Provider, {
    value: !0,
    children: children
  }), t[0] = children, t[1] = a;else a = t[1];
  return a;
}
function der() {
  return Pe(o);
}
function Dj(n, r) {
  let t = Pe(o);
  return Boolean(n || r || t);
}
export { Wyt, der, Dj };