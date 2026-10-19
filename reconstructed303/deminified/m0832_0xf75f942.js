// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { S_, Kd, Mm, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
function y(s) {
  return s !== "";
}
function C(o, a) {
  return r(Kd, {
    children: [a > 0 && e(n, {
      dimColor: !0,
      children: " \xB7 "
    }), o]
  }, Mm(o) ? o.key ?? a : a);
}
function Se(g) {
  let m = w(5),
    {
      children: children
    } = g,
    children_2,
    c;
  if (m[0] !== children) {
    c = yn;
    T: {
      let R = S_.toArray(children).filter(y);
      if (R.length === 0) {
        c = null;
        break T;
      }
      children_2 = R.map(C);
    }
    m[0] = children, m[1] = children_2, m[2] = c;
  } else children_2 = m[1], c = m[2];
  if (c !== yn) return c;
  let f;
  if (m[3] !== children_2) f = e(Q, {
    children: children_2
  }), m[3] = children_2, m[4] = f;else f = m[4];
  return f;
}
export { Se };