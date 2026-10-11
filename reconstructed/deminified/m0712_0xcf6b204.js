// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
function Cr(R) {
  let c = w(9),
    {
      children: children,
      hint: i
    } = R;
  if (!i) {
    let o;
    if (c[0] !== children) o = e(n, {
      dimColor: !0,
      children: children
    }), c[0] = children, c[1] = o;else o = c[1];
    return o;
  }
  let o;
  if (c[2] !== children) o = e(n, {
    dimColor: !0,
    children: children
  }), c[2] = children, c[3] = o;else o = c[3];
  let d;
  if (c[4] !== i) d = e(n, {
    dimColor: !0,
    children: i
  }), c[4] = i, c[5] = d;else d = c[5];
  let a;
  if (c[6] !== o || c[7] !== d) a = r(s, {
    flexDirection: "column",
    children: [o, d]
  }), c[6] = o, c[7] = d, c[8] = a;else a = c[8];
  return a;
}
export { Cr };