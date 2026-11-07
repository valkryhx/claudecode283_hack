// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { XU, int } from "B:/~BUN/root/chunk-bkfncj77.js";
import { n } from "B:/~BUN/root/chunk-qey16aan.js";
import { ia } from "B:/~BUN/root/chunk-q793s85g.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Wj } from "B:/~BUN/root/chunk-hh79wmvd.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ve, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
var c = Jt(!1);
function XGt(m) {
  let i = S(2),
    {
      children: children
    } = m,
    a;
  if (i[0] !== children) a = e(c.Provider, {
    value: !0,
    children: children
  }), i[0] = children, i[1] = a;else a = i[1];
  return a;
}
function Ap() {
  let a = S(3),
    m = ve(c),
    o = ve(Wj),
    chord = ia("app:toggleTranscript", "Global", "ctrl+o");
  if (m || o) {
    return null;
  }
  let format;
  if (a[0] === w) format = {
    keyCase: "lower"
  }, a[0] = format;else format = a[0];
  let d;
  if (a[1] !== chord) d = e(n, {
    dimColor: !0,
    children: e(Y, {
      chord: chord,
      action: "expand",
      parens: !0,
      format: format
    })
  }), a[1] = chord, a[2] = d;else d = a[2];
  return d;
}
function U_(m) {
  let l = S(11),
    {
      count: count,
      unit: unit,
      expandable: expandable,
      hiddenChars: hiddenChars
    } = m,
    d = unit === void 0 ? "line" : unit,
    h = expandable === void 0 ? !1 : expandable;
  if (count <= 0) {
    return null;
  }
  let p;
  if (l[0] !== count || l[1] !== d) p = XU(count, d), l[0] = count, l[1] = d, l[2] = p;else p = l[2];
  let s;
  if (l[3] !== hiddenChars) s = hiddenChars !== void 0 && hiddenChars >= 1000 && ` (~${int(hiddenChars)} KB)`, l[3] = hiddenChars, l[4] = s;else s = l[4];
  let u;
  if (l[5] !== h) u = h && r(ne, {
    children: [" ", e(Ap, {})]
  }), l[5] = h, l[6] = u;else u = l[6];
  let b;
  if (l[7] !== p || l[8] !== s || l[9] !== u) b = r(n, {
    dimColor: !0,
    children: [p, s, u]
  }), l[7] = p, l[8] = s, l[9] = u, l[10] = b;else b = l[10];
  return b;
}
export { XGt, Ap, U_ };