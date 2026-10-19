// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s } from "B:/~BUN/root/chunk-damrp3r8.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
function ko(P) {
  let K = w(8),
    {
      onKeyDown: onKeyDown,
      onPaste: onPaste,
      flexDirection: flexDirection,
      gap: gap,
      tabIndex: tabIndex,
      autoFocus: autoFocus,
      children: children
    } = P,
    flexDirection_2 = flexDirection === void 0 ? "column" : flexDirection,
    tabIndex_2 = tabIndex === void 0 ? 0 : tabIndex,
    autoFocus_2 = autoFocus === void 0 ? !0 : autoFocus,
    v;
  if (K[0] !== autoFocus_2 || K[1] !== children || K[2] !== flexDirection_2 || K[3] !== gap || K[4] !== onKeyDown || K[5] !== onPaste || K[6] !== tabIndex_2) v = e(s, {
    flexDirection: flexDirection_2,
    gap: gap,
    tabIndex: tabIndex_2,
    autoFocus: autoFocus_2,
    onKeyDown: onKeyDown,
    onPaste: onPaste,
    children: children
  }), K[0] = autoFocus_2, K[1] = children, K[2] = flexDirection_2, K[3] = gap, K[4] = onKeyDown, K[5] = onPaste, K[6] = tabIndex_2, K[7] = v;else v = K[7];
  return v;
}
export { ko };