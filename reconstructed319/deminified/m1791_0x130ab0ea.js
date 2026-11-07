// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n, Gp } from "B:/~BUN/root/chunk-qey16aan.js";
import { LG } from "B:/~BUN/root/chunk-fh7pby6f.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ve, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
function Ye(p) {
  let c = S(8),
    {
      children: children,
      height: height
    } = p;
  if (ve(o)) {
    return children;
  }
  let u;
  if (c[0] === w) u = e(Gp, {
    fromLeftEdge: !0,
    flexShrink: 0,
    children: r(n, {
      "aria-hidden": !0,
      dimColor: !0,
      children: ["  ", "\u23BF \xA0"]
    })
  }), c[0] = u;else u = c[0];
  let h;
  if (c[1] !== children) h = e(s, {
    flexShrink: 1,
    flexGrow: 1,
    children: children
  }), c[1] = children, c[2] = h;else h = c[2];
  let g;
  if (c[3] !== height || c[4] !== h) g = e(f, {
    children: r(s, {
      flexDirection: "row",
      height: height,
      overflowY: "hidden",
      children: [u, h]
    })
  }), c[3] = height, c[4] = h, c[5] = g;else g = c[5];
  let children_2 = g;
  if (height !== void 0) {
    return children_2;
  }
  let x;
  if (c[6] !== children_2) x = e(LG, {
    lock: "offscreen",
    children: children_2
  }), c[6] = children_2, c[7] = x;else x = c[7];
  return x;
}
var o = Jt(!1);
function Uvt() {
  return ve(o);
}
function f(p) {
  let i = S(2),
    {
      children: children_3
    } = p,
    m;
  if (i[0] !== children_3) m = e(o.Provider, {
    value: !0,
    children: children_3
  }), i[0] = children_3, i[1] = m;else m = i[1];
  return m;
}
export { Ye, Uvt };