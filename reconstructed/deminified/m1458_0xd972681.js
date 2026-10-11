// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Ma } from "B:/~BUN/root/chunk-trcn2d68.js";
import { Jv } from "B:/~BUN/root/chunk-mr8gretd.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Qg, sl, Du, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
function re(ce) {
  return Qg.toArray(ce.props.children);
}
function le(de) {
  return de.header !== void 0;
}
function ae(me) {
  return me.header;
}
var H = {
    start: "flex-start",
    center: "center",
    end: "flex-end"
  },
  columnGap = 2,
  Byt = 12;
function I(l) {
  if (typeof l === "string" || typeof l === "number") return !0;
  if (Du(l) && l.type === sl) return !0;
  return !1;
}
function A(children, o, h) {
  if (!I(children)) return children;
  return e(n, {
    dimColor: o.dim && !h,
    bold: o.bold || h,
    children: children
  });
}
function M(l) {
  return ie(Jv(l));
}
function S(l, o, h, b) {
  let y = l.length,
    c = l.map((item, index) => {
      let f = h ? M(item.header) : 0;
      for (let d of o) f = Math.max(f, M(d[index]));
      return f;
    }),
    p = Array(y),
    a = [];
  for (let t = 0; t < y; t++) {
    let width = l[t].width;
    if (width === "fill") p[t] = 0;else if (typeof width === "number") p[t] = width;else if (width && "ratio" in width && width.ratio !== void 0) a.push(t), p[t] = 0;else if (width) p[t] = Ma(c[t], width.min ?? 0, width.max ?? 1 / 0);else p[t] = c[t];
  }
  if (a.length > 0) {
    let t = p.reduce((acc, item) => acc + item, 0),
      i = Math.max(0, b - columnGap * (y - 1) - t),
      f = a.reduce((acc, item) => acc + (l[item].width.ratio ?? 0), 0);
    for (let d of a) {
      let width_2 = l[d].width,
        u = f > 0 ? Math.floor(i * (width_2.ratio ?? 0) / f) : 0;
      p[d] = Ma(u, width_2.min ?? 1, width_2.max ?? 1 / 0);
    }
  }
  return p;
}
function k(l) {
  let i = w(16),
    {
      cells: cells,
      columns: columns,
      widths: widths,
      isHeader: isHeader
    } = l,
    c = columns.length - 1,
    p = columns[c]?.width,
    a = p === "fill" ? Byt : p === void 0 ? Math.min(Byt, widths[c] ?? 0) : 0;
  const flexWrap = a > 0 ? "wrap" : "nowrap";
  let children_2;
  if (i[0] !== cells || i[1] !== columns || i[2] !== a || i[3] !== isHeader || i[4] !== c || i[5] !== widths) {
    let d;
    if (i[7] !== cells || i[8] !== a || i[9] !== isHeader || i[10] !== c || i[11] !== widths) d = (m, u) => m.width === "fill" ? e(s, {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      minWidth: u === c ? a : 1,
      justifyContent: H[m.align ?? "start"],
      children: A(cells[u], m, isHeader)
    }, u) : e(s, {
      width: widths[u] || void 0,
      flexShrink: u === c && m.width === void 0 ? 1 : 0,
      flexBasis: u === c && a > 0 ? a : void 0,
      flexGrow: u === c && a > 0 ? 1 : 0,
      maxWidth: u === c && a > 0 ? widths[u] : void 0,
      justifyContent: H[m.align ?? "start"],
      children: A(cells[u], m, isHeader)
    }, u), i[7] = cells, i[8] = a, i[9] = isHeader, i[10] = c, i[11] = widths, i[12] = d;else d = i[12];
    children_2 = columns.map(d);
    i[0] = cells, i[1] = columns, i[2] = a, i[3] = isHeader, i[4] = c, i[5] = widths, i[6] = children_2;
  } else children_2 = i[6];
  let d;
  if (i[13] !== flexWrap || i[14] !== children_2) d = e(s, {
    flexDirection: "row",
    columnGap: columnGap,
    flexWrap: flexWrap,
    children: children_2
  }), i[13] = flexWrap, i[14] = children_2, i[15] = d;else d = i[15];
  return d;
}
function Row(l) {
  let h = w(2),
    {
      children: children_3
    } = l,
    b;
  if (h[0] !== children_3) b = e(V, {
    children: children_3
  }), h[0] = children_3, h[1] = b;else b = h[1];
  return b;
}
function P(l) {
  let p = w(12),
    {
      columns: columns_2,
      children: children_4,
      forceWidth: forceWidth
    } = l,
    {
      columns: columns_3
    } = ve(),
    c = forceWidth ?? columns_3,
    a,
    flexDirection,
    i,
    f;
  if (p[0] !== children_4 || p[1] !== columns_2 || p[2] !== c) {
    let d = Qg.toArray(children_4).filter(Du);
    let m = d.map(re);
    let u = columns_2.some(le);
    let widths_2 = S(columns_2, m, u, c);
    a = s;
    flexDirection = "column";
    i = u && e(k, {
      cells: columns_2.map(ae),
      columns: columns_2,
      widths: widths_2,
      isHeader: !0
    });
    f = m.map((se, index) => e(k, {
      cells: se,
      columns: columns_2,
      widths: widths_2,
      isHeader: !1
    }, d[index].key ?? index));
    p[0] = children_4, p[1] = columns_2, p[2] = c, p[3] = a, p[4] = flexDirection, p[5] = i, p[6] = f;
  } else a = p[3], flexDirection = p[4], i = p[5], f = p[6];
  let Z;
  if (p[7] !== a || p[8] !== flexDirection || p[9] !== i || p[10] !== f) Z = r(a, {
    flexDirection: flexDirection,
    children: [i, f]
  }), p[7] = a, p[8] = flexDirection, p[9] = i, p[10] = f, p[11] = Z;else Z = p[11];
  return Z;
}
var hd = Object.assign(P, {
  Row: Row
});
export { Byt, hd };