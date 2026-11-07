// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { n } from "B:/~BUN/root/chunk-qey16aan.js";
import { r } from "B:/~BUN/root/chunk-t16eynda.js";
function fb(b) {
  let R = S(7),
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
export { fb };