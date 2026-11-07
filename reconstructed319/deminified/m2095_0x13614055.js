// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { bVs } from "B:/~BUN/root/chunk-game8aqv.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ZSt } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Ff } from "B:/~BUN/root/chunk-31b4g6te.js";
import { rI } from "B:/~BUN/root/chunk-cacx0j4x.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { z_, pu, hy, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
j();
function re(ae) {
  return z_.toArray(ae.props.children);
}
function ie(de) {
  return de.header !== void 0;
}
function le(me) {
  return me.header;
}
var W = {
    start: "flex-start",
    center: "center",
    end: "flex-end"
  },
  columnGap = 2,
  _Gt = 12;
function Z(o) {
  if (typeof o === "string" || typeof o === "number") return !0;
  if (hy(o) && o.type === pu) return !0;
  return !1;
}
function k(children, i, h) {
  if (!Z(children)) return children;
  return e(n, {
    dimColor: i.dim && !h,
    bold: i.bold || h,
    children: children
  });
}
function B(o) {
  return ce(rI(o));
}
function G(o, i, h, w) {
  let x = o.length,
    c = o.map((item, index) => {
      let u = h ? B(item.header) : 0;
      for (let d of i) u = Math.max(u, B(d[index]));
      return u;
    }),
    p = Array(x),
    a = [];
  for (let t = 0; t < x; t++) {
    let width = o[t].width;
    if (width === "fill") p[t] = 0;else if (typeof width === "number") p[t] = width;else if (width && "ratio" in width && width.ratio !== void 0) a.push(t), p[t] = 0;else if (width) p[t] = Ff(c[t], width.min ?? 0, width.max ?? 1 / 0);else p[t] = c[t];
  }
  if (a.length > 0) {
    let t = p.reduce((acc, item) => acc + item, 0),
      l = Math.max(0, w - columnGap * (x - 1) - t),
      u = a.reduce((acc, item) => acc + (o[item].width.ratio ?? 0), 0);
    for (let d of a) {
      let width_2 = o[d].width,
        f = u > 0 ? Math.floor(l * (width_2.ratio ?? 0) / u) : 0;
      p[d] = Ff(f, width_2.min ?? 1, width_2.max ?? 1 / 0);
    }
  }
  return p;
}
function N(o) {
  let l = S(16),
    {
      cells: cells,
      columns: columns,
      widths: widths,
      isHeader: isHeader
    } = o,
    c = columns.length - 1,
    p = columns[c]?.width,
    a = p === "fill" ? _Gt : p === void 0 ? Math.min(_Gt, widths[c] ?? 0) : 0;
  const flexWrap = a > 0 ? "wrap" : "nowrap";
  let children_2;
  if (l[0] !== cells || l[1] !== columns || l[2] !== a || l[3] !== isHeader || l[4] !== c || l[5] !== widths) {
    let d;
    if (l[7] !== cells || l[8] !== a || l[9] !== isHeader || l[10] !== c || l[11] !== widths) d = (m, f) => m.width === "fill" ? e(s, {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      minWidth: f === c ? a : 1,
      justifyContent: W[m.align ?? "start"],
      children: k(cells[f], m, isHeader)
    }, f) : e(s, {
      width: widths[f] || void 0,
      flexShrink: f === c && m.width === void 0 ? 1 : 0,
      flexBasis: f === c && a > 0 ? a : void 0,
      flexGrow: f === c && a > 0 ? 1 : 0,
      maxWidth: f === c && a > 0 ? widths[f] : void 0,
      justifyContent: W[m.align ?? "start"],
      children: k(cells[f], m, isHeader)
    }, f), l[7] = cells, l[8] = a, l[9] = isHeader, l[10] = c, l[11] = widths, l[12] = d;else d = l[12];
    children_2 = columns.map(d);
    l[0] = cells, l[1] = columns, l[2] = a, l[3] = isHeader, l[4] = c, l[5] = widths, l[6] = children_2;
  } else children_2 = l[6];
  let d;
  if (l[13] !== flexWrap || l[14] !== children_2) d = e(s, {
    flexDirection: "row",
    columnGap: columnGap,
    flexWrap: flexWrap,
    children: children_2
  }), l[13] = flexWrap, l[14] = children_2, l[15] = d;else d = l[15];
  return d;
}
function Row(o) {
  let h = S(2),
    {
      children: children_3
    } = o,
    w;
  if (h[0] !== children_3) w = e(ne, {
    children: children_3
  }), h[0] = children_3, h[1] = w;else w = h[1];
  return w;
}
function P(o) {
  let p = S(12),
    {
      columns: columns_2,
      children: children_4,
      forceWidth: forceWidth
    } = o,
    {
      columns: columns_3
    } = Re(),
    c = forceWidth ?? columns_3,
    a,
    flexDirection,
    l,
    u;
  if (p[0] !== children_4 || p[1] !== columns_2 || p[2] !== c) {
    let d = z_.toArray(children_4).filter(hy);
    let m = d.map(re);
    let f = columns_2.some(ie);
    let widths_2 = G(columns_2, m, f, c);
    a = s;
    flexDirection = "column";
    l = f && e(N, {
      cells: columns_2.map(le),
      columns: columns_2,
      widths: widths_2,
      isHeader: !0
    });
    u = m.map((se, index) => e(N, {
      cells: se,
      columns: columns_2,
      widths: widths_2,
      isHeader: !1
    }, d[index].key ?? index));
    p[0] = children_4, p[1] = columns_2, p[2] = c, p[3] = a, p[4] = flexDirection, p[5] = l, p[6] = u;
  } else a = p[3], flexDirection = p[4], l = p[5], u = p[6];
  let X;
  if (p[7] !== a || p[8] !== flexDirection || p[9] !== l || p[10] !== u) X = r(a, {
    flexDirection: flexDirection,
    children: [l, u]
  }), p[7] = a, p[8] = flexDirection, p[9] = l, p[10] = u, p[11] = X;else X = p[11];
  return X;
}
var gm = Object.assign(P, {
  Row: Row
});
j();
function yUe(o) {
  return At(bVs, () => ZSt(o));
}
export { _Gt, gm, yUe };