// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { n } from "B:/~BUN/root/chunk-qey16aan.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Ws } from "B:/~BUN/root/chunk-x2k0mb6b.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
function ele(s) {
  let b = S(3),
    {
      children: children,
      exitActive: exitActive,
      onInterrupt: onInterrupt,
      italic: italic
    } = s,
    R = exitActive === void 0 ? !0 : exitActive,
    italic_2 = italic === void 0 ? !1 : italic,
    {
      pending: pending,
      keyName: keyName
    } = Ws(void 0, onInterrupt, R);
  const children_2 = pending ? `Press ${keyName} again to exit` : children;
  let a;
  if (b[0] !== italic_2 || b[1] !== children_2) a = e(n, {
    dimColor: !0,
    italic: italic_2,
    children: children_2
  }), b[0] = italic_2, b[1] = children_2, b[2] = a;else a = b[2];
  return a;
}
export { ele };