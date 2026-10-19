// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Aw } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n, Iu } from "B:/~BUN/root/chunk-damrp3r8.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { S_, qt, Mm, Ee, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function _(p, d) {
  return e(s, {
    width: 2,
    children: e(n, {
      dimColor: !0,
      children: k[p]
    })
  }, d);
}
var k = {
  branch: Aw.branch,
  last: Aw.last,
  pipe: Aw.pipe,
  space: ""
};
function Utt(u) {
  let a = w(7),
    {
      connectors: connectors,
      children: children
    } = u,
    o;
  if (a[0] !== connectors) o = connectors.length > 0 && e(Iu, {
    "aria-hidden": !0,
    fromLeftEdge: !0,
    flexShrink: 0,
    flexDirection: "row",
    children: connectors.map(_)
  }), a[0] = connectors, a[1] = o;else o = a[1];
  let l;
  if (a[2] !== children) l = e(s, {
    flexGrow: 1,
    flexShrink: 1,
    children: children
  }), a[2] = children, a[3] = l;else l = a[3];
  let i;
  if (a[4] !== o || a[5] !== l) i = r(s, {
    flexDirection: "row",
    children: [o, l]
  }), a[4] = o, a[5] = l, a[6] = i;else i = a[6];
  return i;
}
var R = qt({
    variant: "outline",
    ancestors: []
  }),
  f = qt(!0);
function h(u, t = !0) {
  let c = S_.toArray(u);
  return c.map((a, index) => e(f.Provider, {
    value: t && index === c.length - 1,
    children: a
  }, index));
}
function O(u) {
  let o = w(10),
    {
      children: children_2,
      variant: variant
    } = u,
    variant_2 = variant === void 0 ? "outline" : variant,
    ancestors;
  if (o[0] === S) ancestors = [], o[0] = ancestors;else ancestors = o[0];
  let value;
  if (o[1] !== variant_2) value = {
    variant: variant_2,
    ancestors: ancestors
  }, o[1] = variant_2, o[2] = value;else value = o[2];
  let children_3;
  if (o[3] !== children_2) children_3 = h(children_2), o[3] = children_2, o[4] = children_3;else children_3 = o[4];
  let children_4;
  if (o[5] !== children_3) children_4 = e(s, {
    flexDirection: "column",
    children: children_3
  }), o[5] = children_3, o[6] = children_4;else children_4 = o[6];
  let v;
  if (o[7] !== value || o[8] !== children_4) v = e(R.Provider, {
    value: value,
    children: children_4
  }), o[7] = value, o[8] = children_4, o[9] = v;else v = o[9];
  return v;
}
function Node(u) {
  let N = w(19),
    {
      label: label,
      children: children_5,
      dimColor: dimColor,
      color: color
    } = u,
    {
      variant: variant_3,
      ancestors: ancestors_2
    } = Ee(R),
    p = Ee(f),
    d = variant_3 === "outline" ? "last" : p ? "last" : "branch",
    v = variant_3 === "outline" ? "space" : p ? "space" : "pipe",
    m = label != null && label !== !1,
    children_6 = m ? label : children_5,
    connectors_2;
  if (N[0] !== ancestors_2 || N[1] !== d) connectors_2 = [...ancestors_2, d], N[0] = ancestors_2, N[1] = d, N[2] = connectors_2;else connectors_2 = N[2];
  let children_7;
  if (N[3] !== color || N[4] !== dimColor || N[5] !== children_6) children_7 = Mm(children_6) ? children_6 : e(n, {
    dimColor: dimColor,
    color: color,
    children: children_6
  }), N[3] = color, N[4] = dimColor, N[5] = children_6, N[6] = children_7;else children_7 = N[6];
  let P;
  if (N[7] !== connectors_2 || N[8] !== children_7) P = e(Utt, {
    connectors: connectors_2,
    children: children_7
  }), N[7] = connectors_2, N[8] = children_7, N[9] = P;else P = N[9];
  let T;
  if (N[10] !== ancestors_2 || N[11] !== children_5 || N[12] !== v || N[13] !== m || N[14] !== variant_3) T = m && e(R.Provider, {
    value: {
      variant: variant_3,
      ancestors: [...ancestors_2, v]
    },
    children: h(children_5)
  }), N[10] = ancestors_2, N[11] = children_5, N[12] = v, N[13] = m, N[14] = variant_3, N[15] = T;else T = N[15];
  let z;
  if (N[16] !== P || N[17] !== T) z = r(s, {
    flexDirection: "column",
    children: [P, T]
  }), N[16] = P, N[17] = T, N[18] = z;else z = N[18];
  return z;
}
function Group(u) {
  let a = w(3),
    {
      children: children_8
    } = u,
    c = Ee(f),
    o;
  if (a[0] !== children_8 || a[1] !== c) o = h(children_8, c), a[0] = children_8, a[1] = c, a[2] = o;else o = a[2];
  return o;
}
var xu = Object.assign(O, {
  Node: Node,
  Group: Group
});
export { Utt, xu };