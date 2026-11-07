// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { WPe, Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
function Lu(x) {
  let i = S(9),
    {
      status: status,
      children: children
    } = x,
    {
      color: color
    } = WPe[status],
    c;
  if (i[0] !== status) c = e(s, {
    width: 2,
    flexShrink: 0,
    children: e(Tt, {
      status: status
    })
  }), i[0] = status, i[1] = c;else c = i[1];
  const dimColor = !color;
  let a;
  if (i[2] !== children || i[3] !== color || i[4] !== dimColor) a = e(s, {
    flexGrow: 1,
    flexShrink: 1,
    children: e(n, {
      color: color,
      dimColor: dimColor,
      children: children
    })
  }), i[2] = children, i[3] = color, i[4] = dimColor, i[5] = a;else a = i[5];
  let d;
  if (i[6] !== c || i[7] !== a) d = r(s, {
    flexDirection: "row",
    children: [c, a]
  }), i[6] = c, i[7] = a, i[8] = d;else d = i[8];
  return d;
}
export { Lu };