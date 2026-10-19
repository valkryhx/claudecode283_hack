// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, Ee, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
B();
var t = qt(void 0);
function Xtt() {
  return Ee(t);
}
function ytr(p) {
  let l = w(7),
    {
      isFirst: isFirst,
      selectionHighlight: selectionHighlight,
      noticeSystemLines: noticeSystemLines,
      children: children
    } = p,
    a;
  if (l[0] !== isFirst || l[1] !== noticeSystemLines || l[2] !== selectionHighlight) a = {
    isQueued: !0,
    isFirst: isFirst,
    selectionHighlight: selectionHighlight,
    noticeSystemLines: noticeSystemLines
  }, l[0] = isFirst, l[1] = noticeSystemLines, l[2] = selectionHighlight, l[3] = a;else a = l[3];
  let value = a,
    r;
  if (l[4] !== children || l[5] !== value) r = e(t.Provider, {
    value: value,
    children: children
  }), l[4] = children, l[5] = value, l[6] = r;else r = l[6];
  return r;
}
export { Xtt, ytr };