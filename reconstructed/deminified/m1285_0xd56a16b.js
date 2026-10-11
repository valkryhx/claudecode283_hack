// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n, _t } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
function ic(u) {
  let h = w(10),
    {
      children: children,
      color: o,
      title: t
    } = u,
    f = _t();
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
export { ic };