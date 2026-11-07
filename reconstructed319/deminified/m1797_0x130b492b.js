// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ot, s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
function YR(u) {
  let h = S(10),
    {
      children: children,
      color: o,
      title: t
    } = u,
    f = ot();
  const borderStyle = f ? void 0 : "round",
    paddingX = f ? 0 : 1,
    gap = t ? 1 : 0;
  let c;
  if (h[0] !== o || h[1] !== t) c = t && e(n, {
    bold: !0,
    color: o,
    children: t
  }), h[0] = o, h[1] = t, h[2] = c;else c = h[2];
  let y;
  if (h[3] !== children || h[4] !== o || h[5] !== borderStyle || h[6] !== paddingX || h[7] !== gap || h[8] !== c) y = r(s, {
    borderStyle: borderStyle,
    borderColor: o,
    flexDirection: "column",
    paddingX: paddingX,
    gap: gap,
    children: [c, children]
  }), h[3] = children, h[4] = o, h[5] = borderStyle, h[6] = paddingX, h[7] = gap, h[8] = c, h[9] = y;else y = h[9];
  return y;
}
export { YR };