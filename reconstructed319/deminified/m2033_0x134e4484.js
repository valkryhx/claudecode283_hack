// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { l$o } from "B:/~BUN/root/chunk-31b4g6te.js";
import { Br } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { n, qs } from "B:/~BUN/root/chunk-qey16aan.js";
import { Ye } from "B:/~BUN/root/chunk-4swxab5a.js";
import { Wj } from "B:/~BUN/root/chunk-hh79wmvd.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { ES } from "B:/~BUN/root/chunk-09wqth96.js";
import { zas } from "B:/~BUN/root/chunk-dt45jjk2.js";
import { Jt, ve, Z, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
j();
j();
var l = Jt(!1);
function Xjr(t) {
  let s = S(2),
    {
      children: children
    } = t,
    o;
  if (s[0] !== children) o = e(l.Provider, {
    value: !0,
    children: children
  }), s[0] = children, s[1] = o;else o = s[1];
  return o;
}
function u() {
  return ve(l);
}
function M(t) {
  try {
    let r = ee(t),
      s = _(r),
      o = t.replaceAll("\\/", "/").replace(/\s+/g, ""),
      m = s.replace(/\s+/g, "");
    if (o !== m) return t;
    return _(r, null, 2);
  } catch {
    return t;
  }
}
var P = 1e4;
function x(t) {
  if (t.length > P) return t;
  return t.split(`
`).map(M).join(`
`);
}
var A = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,
  C = 1e5;
function Jjr(t, themeName) {
  if (t.length > C) return t;
  let s = o => o.replace(A, m => ES(m, void 0, {
    themeName: themeName
  }));
  if (!t.includes(l$o)) return s(t);
  return t.split(`
`).map(item => item.includes(l$o) ? item : s(item)).join(`
`);
}
function I0(t) {
  let c = S(14),
    {
      content: content,
      verbose: verbose,
      isError: isError
    } = t,
    {
      columns: columns
    } = Re(),
    [d] = Br(),
    k = u(),
    g = ve(Wj),
    z = verbose || k,
    O;
  if (c[0] !== content || c[1] !== d) O = Jjr(x(content), d), c[0] = content, c[1] = d, c[2] = O;else O = c[2];
  let a = O,
    h;
  ct: {
    if (z) {
      let i;
      if (c[3] !== a) i = f(a), c[3] = a, c[4] = i;else i = c[4];
      h = i;
      break ct;
    }
    let i;
    if (c[5] !== columns || c[6] !== a || c[7] !== g) i = f(zas(a, columns, g)), c[5] = columns, c[6] = a, c[7] = g, c[8] = i;else i = c[8];
    h = i;
  }
  let children_2 = h,
    color = isError ? "error" : void 0,
    children_3;
  if (c[9] !== children_2) children_3 = e(qs, {
    children: children_2
  }), c[9] = children_2, c[10] = children_3;else children_3 = c[10];
  let v;
  if (c[11] !== color || c[12] !== children_3) v = e(Ye, {
    children: e(n, {
      color: color,
      children: children_3
    })
  }), c[11] = color, c[12] = children_3, c[13] = v;else v = c[13];
  return v;
}
function f(t) {
  return t.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g, "");
}
export { Xjr, Jjr, I0 };