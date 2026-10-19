// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { p_e, ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
function Ep(x) {
  let i = w(9),
    {
      status: status,
      children: children
    } = x,
    {
      color: color
    } = p_e[status],
    c;
  if (i[0] !== status) c = e(s, {
    width: 2,
    flexShrink: 0,
    children: e(ft, {
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
export { Ep };