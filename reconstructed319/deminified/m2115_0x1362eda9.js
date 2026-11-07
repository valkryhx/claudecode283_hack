// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
function Dg(d) {
  let i = S(4),
    {
      children: children,
      color: color
    } = d,
    l;
  if (i[0] === w) l = e(s, {
    "aria-hidden": !0,
    width: 2,
    flexShrink: 0,
    children: e(n, {
      children: re.bullet
    })
  }), i[0] = l;else l = i[0];
  let c;
  if (i[1] !== children || i[2] !== color) c = r(s, {
    flexDirection: "row",
    children: [l, e(s, {
      flexGrow: 1,
      flexShrink: 1,
      children: e(n, {
        color: color,
        children: children
      })
    })]
  }), i[1] = children, i[2] = color, i[3] = c;else c = i[3];
  return c;
}
export { Dg };