// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { r } from "B:/~BUN/root/chunk-qkvevvte.js";
function Ab(b) {
  let R = w(7),
    {
      children: children,
      color: o,
      textColor: textColor,
      padded: padded,
      bold: bold,
      wrap: wrap
    } = b,
    e = padded ? " " : "";
  const color = textColor ?? (o ? "inverseText" : void 0);
  let s;
  if (R[0] !== bold || R[1] !== children || R[2] !== o || R[3] !== e || R[4] !== color || R[5] !== wrap) s = r(n, {
    backgroundColor: o,
    color: color,
    bold: bold,
    wrap: wrap,
    children: [e, children, e]
  }), R[0] = bold, R[1] = children, R[2] = o, R[3] = e, R[4] = color, R[5] = wrap, R[6] = s;else s = R[6];
  return s;
}
export { Ab };