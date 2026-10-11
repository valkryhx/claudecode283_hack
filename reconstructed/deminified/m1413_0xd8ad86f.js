// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { o_ } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n, Yc } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Qg, Vt, Du, Pe, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function _(p, d) {
  return e(s, {
    width: 2,
    children: e(n, {
      dimColor: !0,
      children: D[p]
    })
  }, d);
}
var D = {
  branch: o_.branch,
  last: o_.last,
  pipe: o_.pipe,
  space: ""
};
function oje(u) {
  let a = w(7),
    {
      connectors: connectors,
      children: children
    } = u,
    o;
  if (a[0] !== connectors) o = connectors.length > 0 && e(Yc, {
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
var R = Vt({
    variant: "outline",
    ancestors: []
  }),
  f = Vt(!0);
function h(u, t = !0) {
  let c = Qg.toArray(u);
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
  let m = w(19),
    {
      label: label,
      children: children_5,
      dimColor: dimColor,
      color: color
    } = u,
    {
      variant: variant_3,
      ancestors: ancestors_2
    } = Pe(R),
    p = Pe(f),
    d = variant_3 === "outline" ? "last" : p ? "last" : "branch",
    v = variant_3 === "outline" ? "space" : p ? "space" : "pipe",
    x = label != null && label !== !1,
    children_6 = x ? label : children_5,
    connectors_2;
  if (m[0] !== ancestors_2 || m[1] !== d) connectors_2 = [...ancestors_2, d], m[0] = ancestors_2, m[1] = d, m[2] = connectors_2;else connectors_2 = m[2];
  let children_7;
  if (m[3] !== color || m[4] !== dimColor || m[5] !== children_6) children_7 = Du(children_6) ? children_6 : e(n, {
    dimColor: dimColor,
    color: color,
    children: children_6
  }), m[3] = color, m[4] = dimColor, m[5] = children_6, m[6] = children_7;else children_7 = m[6];
  let T;
  if (m[7] !== connectors_2 || m[8] !== children_7) T = e(oje, {
    connectors: connectors_2,
    children: children_7
  }), m[7] = connectors_2, m[8] = children_7, m[9] = T;else T = m[9];
  let y;
  if (m[10] !== ancestors_2 || m[11] !== children_5 || m[12] !== v || m[13] !== x || m[14] !== variant_3) y = x && e(R.Provider, {
    value: {
      variant: variant_3,
      ancestors: [...ancestors_2, v]
    },
    children: h(children_5)
  }), m[10] = ancestors_2, m[11] = children_5, m[12] = v, m[13] = x, m[14] = variant_3, m[15] = y;else y = m[15];
  let z;
  if (m[16] !== T || m[17] !== y) z = r(s, {
    flexDirection: "column",
    children: [T, y]
  }), m[16] = T, m[17] = y, m[18] = z;else z = m[18];
  return z;
}
function Group(u) {
  let a = w(3),
    {
      children: children_8
    } = u,
    c = Pe(f),
    o;
  if (a[0] !== children_8 || a[1] !== c) o = h(children_8, c), a[0] = children_8, a[1] = c, a[2] = o;else o = a[2];
  return o;
}
var qc = Object.assign(O, {
  Node: Node,
  Group: Group
});
export { oje, qc };