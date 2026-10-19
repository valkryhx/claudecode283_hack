// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, ot } from "B:/~BUN/root/chunk-damrp3r8.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
function Ol(f) {
  let b = w(6),
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
export { Ol };