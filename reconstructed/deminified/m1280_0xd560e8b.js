// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, Pe, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
N();
var t = Vt(void 0);
function $Je() {
  return Pe(t);
}
function svn(g) {
  let u = w(6),
    {
      isFirst: isFirst,
      selectionHighlight: selectionHighlight,
      children: children
    } = g,
    r;
  if (u[0] !== isFirst || u[1] !== selectionHighlight) r = {
    isQueued: !0,
    isFirst: isFirst,
    selectionHighlight: selectionHighlight
  }, u[0] = isFirst, u[1] = selectionHighlight, u[2] = r;else r = u[2];
  let value = r,
    l;
  if (u[3] !== children || u[4] !== value) l = e(t.Provider, {
    value: value,
    children: children
  }), u[3] = children, u[4] = value, u[5] = l;else l = u[5];
  return l;
}
export { $Je, svn };