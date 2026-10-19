// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { bl } from "B:/~BUN/root/chunk-b900np4s.js";
import { s } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Ql } from "B:/~BUN/root/chunk-5xpqz53z.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
var paddingX_2 = 2,
  paddingX = 1,
  TV = 2;
function ds(d) {
  let c = w(9),
    {
      children: children,
      color: color
    } = d;
  if (bl()) {
    let o;
    if (c[0] !== children) o = e(s, {
      flexDirection: "column",
      paddingX: paddingX,
      flexShrink: 0,
      children: children
    }), c[0] = children, c[1] = o;else o = c[1];
    return o;
  }
  let o;
  if (c[2] !== color) o = e(Ql, {
    color: color
  }), c[2] = color, c[3] = o;else o = c[3];
  let n;
  if (c[4] !== children) n = e(s, {
    flexDirection: "column",
    paddingX: paddingX_2,
    children: children
  }), c[4] = children, c[5] = n;else n = c[5];
  let l;
  if (c[6] !== o || c[7] !== n) l = r(s, {
    flexDirection: "column",
    paddingTop: 1,
    children: [o, n]
  }), c[6] = o, c[7] = n, c[8] = l;else l = c[8];
  return l;
}
export { paddingX_2 as vk, paddingX as xI, TV, ds };