// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  bVs
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  ZSt
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Ff
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  rI
} from "B:/~BUN/root/chunk-cacx0j4x.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  z_,
  pu,
  hy,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
j();

function re(ae) {
  return z_.toArray(ae.props.children)
}

function ie(de) {
  return de.header !== void 0
}

function le(me) {
  return me.header
}
var W = {
    start: "flex-start",
    center: "center",
    end: "flex-end"
  },
  A = 2,
  _Gt = 12;

function Z(o) {
  if (typeof o === "string" || typeof o === "number") return !0;
  if (hy(o) && o.type === pu) return !0;
  return !1
}

function k(o, i, h) {
  if (!Z(o)) return o;
  return e(n, {
    dimColor: i.dim && !h,
    bold: i.bold || h,
    children: o
  })
}

function B(o) {
  return ce(rI(o))
}

function G(o, i, h, w) {
  let x = o.length,
    c = o.map((t, l) => {
      let u = h ? B(t.header) : 0;
      for (let d of i) u = Math.max(u, B(d[l]));
      return u
    }),
    p = Array(x),
    a = [];
  for (let t = 0; t < x; t++) {
    let l = o[t].width;
    if (l === "fill") p[t] = 0;
    else if (typeof l === "number") p[t] = l;
    else if (l && "ratio" in l && l.ratio !== void 0) a.push(t), p[t] = 0;
    else if (l) p[t] = Ff(c[t], l.min ?? 0, l.max ?? 1 / 0);
    else p[t] = c[t]
  }
  if (a.length > 0) {
    let t = p.reduce((d, m) => d + m, 0),
      l = Math.max(0, w - A * (x - 1) - t),
      u = a.reduce((d, m) => d + (o[m].width.ratio ?? 0), 0);
    for (let d of a) {
      let m = o[d].width,
        f = u > 0 ? Math.floor(l * (m.ratio ?? 0) / u) : 0;
      p[d] = Ff(f, m.min ?? 1, m.max ?? 1 / 0)
    }
  }
  return p
}

function N(o) {
  let l = S(16),
    {
      cells: i,
      columns: h,
      widths: w,
      isHeader: x
    } = o,
    c = h.length - 1,
    p = h[c]?.width,
    a = p === "fill" ? _Gt : p === void 0 ? Math.min(_Gt, w[c] ?? 0) : 0;
  const t = a > 0 ? "wrap" : "nowrap";
  let u;
  if (l[0] !== i || l[1] !== h || l[2] !== a || l[3] !== x || l[4] !== c || l[5] !== w) {
    let d;
    if (l[7] !== i || l[8] !== a || l[9] !== x || l[10] !== c || l[11] !== w) d = (m, f) => m.width === "fill" ? e(s, {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      minWidth: f === c ? a : 1,
      justifyContent: W[m.align ?? "start"],
      children: k(i[f], m, x)
    }, f) : e(s, {
      width: w[f] || void 0,
      flexShrink: f === c && m.width === void 0 ? 1 : 0,
      flexBasis: f === c && a > 0 ? a : void 0,
      flexGrow: f === c && a > 0 ? 1 : 0,
      maxWidth: f === c && a > 0 ? w[f] : void 0,
      justifyContent: W[m.align ?? "start"],
      children: k(i[f], m, x)
    }, f), l[7] = i, l[8] = a, l[9] = x, l[10] = c, l[11] = w, l[12] = d;
    else d = l[12];
    u = h.map(d);
    l[0] = i, l[1] = h, l[2] = a, l[3] = x, l[4] = c, l[5] = w, l[6] = u
  } else u = l[6];
  let d;
  if (l[13] !== t || l[14] !== u) d = e(s, {
    flexDirection: "row",
    columnGap: A,
    flexWrap: t,
    children: u
  }), l[13] = t, l[14] = u, l[15] = d;
  else d = l[15];
  return d
}

function L(o) {
  let h = S(2),
    {
      children: i
    } = o,
    w;
  if (h[0] !== i) w = e(ne, {
    children: i
  }), h[0] = i, h[1] = w;
  else w = h[1];
  return w
}

function P(o) {
  let p = S(12),
    {
      columns: i,
      children: h,
      forceWidth: w
    } = o,
    {
      columns: x
    } = Re(),
    c = w ?? x,
    a, t, l, u;
  if (p[0] !== h || p[1] !== i || p[2] !== c) {
    let d = z_.toArray(h).filter(hy);
    let m = d.map(re);
    let f = i.some(ie);
    let Q = G(i, m, f, c);
    a = s;
    t = "column";
    l = f && e(N, {
      cells: i.map(le),
      columns: i,
      widths: Q,
      isHeader: !0
    });
    u = m.map((se, V) => e(N, {
      cells: se,
      columns: i,
      widths: Q,
      isHeader: !1
    }, d[V].key ?? V));
    p[0] = h, p[1] = i, p[2] = c, p[3] = a, p[4] = t, p[5] = l, p[6] = u
  } else a = p[3], t = p[4], l = p[5], u = p[6];
  let X;
  if (p[7] !== a || p[8] !== t || p[9] !== l || p[10] !== u) X = r(a, {
    flexDirection: t,
    children: [l, u]
  }), p[7] = a, p[8] = t, p[9] = l, p[10] = u, p[11] = X;
  else X = p[11];
  return X
}
var gm = Object.assign(P, {
  Row: L
});
j();

function yUe(o) {
  return At(bVs, () => ZSt(o))
}
export {
  _Gt,
  gm,
  yUe
};
