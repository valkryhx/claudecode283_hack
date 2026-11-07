// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { lU } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { bZr, Jge, _b } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Hd } from "B:/~BUN/root/chunk-eak7wp7z.js";
import { Yjo } from "B:/~BUN/root/chunk-xa7ng0zm.js";
import { $i } from "B:/~BUN/root/chunk-78494p3w.js";
import { lo } from "B:/~BUN/root/chunk-detjgwj4.js";
function ovt(o, e = !1) {
  return l(o, [...($i() ? Jge() : []), ...(bZr() ? [_b] : []), ...(Hd() ? (lU() ?? []).filter(Yjo) : []), ...(e ? s() : [])]);
}
function s() {
  return [];
}
function J3s(o, e) {
  return l(o, [...($i() ? Jge() : []), ...(bZr() && !i.CLAUDE_CODE_SIMPLE ? [_b] : [])].filter(item => item.isEnabled() && !lo(e, item)));
}
function l(o, e) {
  if (e.length === 0) return o;
  let t = new Set(o.map(item => item.name)),
    r = e.filter(item => !t.has(item.name));
  return r.length > 0 ? [...o, ...r] : o;
}
export { ovt, J3s };