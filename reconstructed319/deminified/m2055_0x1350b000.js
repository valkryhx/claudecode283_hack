// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ot, s } from "B:/~BUN/root/chunk-qey16aan.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
function Ul(f) {
  let b = S(6),
    {
      children: children,
      paddingX: paddingX,
      marginTop: marginTop,
      marginBottom: marginBottom
    } = f,
    paddingX_2 = paddingX === void 0 ? 1 : paddingX;
  const borderStyle = ot() ? void 0 : "dashed";
  let i;
  if (b[0] !== children || b[1] !== marginBottom || b[2] !== marginTop || b[3] !== paddingX_2 || b[4] !== borderStyle) i = e(s, {
    borderStyle: borderStyle,
    borderColor: "subtle",
    borderLeft: !1,
    borderRight: !1,
    flexDirection: "column",
    overflow: "hidden",
    paddingX: paddingX_2,
    marginTop: marginTop,
    marginBottom: marginBottom,
    children: children
  }), b[0] = children, b[1] = marginBottom, b[2] = marginTop, b[3] = paddingX_2, b[4] = borderStyle, b[5] = i;else i = b[5];
  return i;
}
export { Ul };