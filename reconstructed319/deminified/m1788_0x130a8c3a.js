// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { G } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { xl } from "B:/~BUN/root/chunk-6j3fjnhn.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ve, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
function ig() {
  return G(o => xl(o));
}
j();
j();
var t = Jt(void 0);
function Nvt() {
  return ve(t);
}
function Fvt(o) {
  let s = S(6),
    {
      selectionHighlight: selectionHighlight,
      noticeSystemLines: noticeSystemLines,
      children: children
    } = o,
    f;
  if (s[0] !== noticeSystemLines || s[1] !== selectionHighlight) f = {
    isQueued: !0,
    selectionHighlight: selectionHighlight,
    noticeSystemLines: noticeSystemLines
  }, s[0] = noticeSystemLines, s[1] = selectionHighlight, s[2] = f;else f = s[2];
  let value = f,
    a;
  if (s[3] !== children || s[4] !== value) a = e(t.Provider, {
    value: value,
    children: children
  }), s[3] = children, s[4] = value, s[5] = a;else a = s[5];
  return a;
}
export { ig, Nvt, Fvt };