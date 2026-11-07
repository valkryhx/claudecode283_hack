// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { n } from "B:/~BUN/root/chunk-qey16aan.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { z_, pu, hy, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
function y(s) {
  return s !== "";
}
function C(o, a) {
  return r(pu, {
    children: [a > 0 && e(n, {
      dimColor: !0,
      children: " \xB7 "
    }), o]
  }, hy(o) ? o.key ?? a : a);
}
function Ce(g) {
  let m = S(5),
    {
      children: children
    } = g,
    children_2,
    c;
  if (m[0] !== children) {
    c = Pn;
    T: {
      let R = z_.toArray(children).filter(y);
      if (R.length === 0) {
        c = null;
        break T;
      }
      children_2 = R.map(C);
    }
    m[0] = children, m[1] = children_2, m[2] = c;
  } else children_2 = m[1], c = m[2];
  if (c !== Pn) return c;
  let f;
  if (m[3] !== children_2) f = e(ne, {
    children: children_2
  }), m[3] = children_2, m[4] = f;else f = m[4];
  return f;
}
export { Ce };