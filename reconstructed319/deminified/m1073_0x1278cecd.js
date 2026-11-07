// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ve, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function x() {
  return !1;
}
var t = Jt(!1);
function cle() {
  return ve(t);
}
function Osa(r) {
  let {
    children: children
  } = r;
  return Re(), y(x), children;
}
function MWr(r) {
  let l = S(2),
    {
      children: children_2
    } = r,
    c;
  if (l[0] !== children_2) c = e(t, {
    value: !0,
    children: e(s, {
      flexDirection: "column",
      paddingLeft: 1,
      children: children_2
    })
  }), l[0] = children_2, l[1] = c;else c = l[1];
  return c;
}
function vUe(r) {
  let {
    children: children_3,
    bold: bold,
    color: color
  } = r;
  return cle() ? e(n, {
    children: children_3
  }) : e(n, {
    bold: bold,
    color: color,
    children: children_3
  });
}
export { cle, Osa, MWr, vUe };