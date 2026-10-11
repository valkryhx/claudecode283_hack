// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
function jr(m) {
  let v = w(7),
    {
      onKeyDown: onKeyDown,
      flexDirection: flexDirection,
      gap: gap,
      tabIndex: tabIndex,
      autoFocus: autoFocus,
      children: children
    } = m,
    flexDirection_2 = flexDirection === void 0 ? "column" : flexDirection,
    tabIndex_2 = tabIndex === void 0 ? 0 : tabIndex,
    autoFocus_2 = autoFocus === void 0 ? !0 : autoFocus,
    p;
  if (v[0] !== autoFocus_2 || v[1] !== children || v[2] !== flexDirection_2 || v[3] !== gap || v[4] !== onKeyDown || v[5] !== tabIndex_2) p = e(s, {
    flexDirection: flexDirection_2,
    gap: gap,
    tabIndex: tabIndex_2,
    autoFocus: autoFocus_2,
    onKeyDown: onKeyDown,
    children: children
  }), v[0] = autoFocus_2, v[1] = children, v[2] = flexDirection_2, v[3] = gap, v[4] = onKeyDown, v[5] = tabIndex_2, v[6] = p;else p = v[6];
  return p;
}
export { jr };