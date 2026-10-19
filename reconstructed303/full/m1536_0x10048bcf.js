// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  pw
} from "B:/~BUN/root/chunk-d69870x4.js";
import {
  ji
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  yn
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var s = [" ", "\u258F", "\u258E", "\u258D", "\u258C", "\u258B", "\u258A", "\u2589", "\u2588"],
  I = {
    fill: "\u25B0",
    empty: "\u25B1"
  },
  E = {
    fill: "\u2588",
    empty: "\u2591"
  },
  _ = () => pw.hasGeometricShapesInkBleedBug() ? E : I,
  g = (a) => Math.min(1, Math.max(0, a)),
  k = (a, t) => {
    let o = Math.floor(a * t),
      l = [ji(s.at(-1), o)];
    if (o < t) {
      let i = a * t - o,
        p = Math.floor(i * (s.length - 1));
      l.push(s[p]);
      let m = t - o - 1;
      if (m > 0) l.push(s[0].repeat(m))
    }
    return l.join("")
  };

function UA(a) {
  let T = w(17),
    {
      ratio: t,
      width: o,
      fillColor: l,
      emptyColor: i,
      variant: p
    } = a,
    m = p === void 0 ? "block" : p,
    f, c, h, u, y, P;
  if (T[0] !== i || T[1] !== l || T[2] !== t || T[3] !== m || T[4] !== o) {
    P = yn;
    z: {
      let b = g(t);
      if (m === "pill") {
        let {
          fill: x,
          empty: A
        } = _();
        let B = Math.round(b * o);
        P = r(n, {
          children: [e(n, {
            color: l,
            children: ji(x, B)
          }), e(n, {
            color: i,
            dimColor: i === void 0,
            children: ji(A, o - B)
          })]
        });
        break z
      }
      f = n;c = l;h = i;u = `${Math.round(b*100)}%`;y = k(b, o)
    }
    T[0] = i, T[1] = l, T[2] = t, T[3] = m, T[4] = o, T[5] = f, T[6] = c, T[7] = h, T[8] = u, T[9] = y, T[10] = P
  } else f = T[5], c = T[6], h = T[7], u = T[8], y = T[9], P = T[10];
  if (P !== yn) return P;
  let G;
  if (T[11] !== f || T[12] !== c || T[13] !== h || T[14] !== u || T[15] !== y) G = e(f, {
    color: c,
    backgroundColor: h,
    "aria-label": u,
    children: y
  }), T[11] = f, T[12] = c, T[13] = h, T[14] = u, T[15] = y, T[16] = G;
  else G = T[16];
  return G
}
export {
  UA
};
