// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { uv } from "B:/~BUN/root/chunk-0av24qsq.js";
import { Ys } from "B:/~BUN/root/chunk-y04k89s2.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
var s = [" ", "\u258F", "\u258E", "\u258D", "\u258C", "\u258B", "\u258A", "\u2589", "\u2588"],
  I = {
    fill: "\u25B0",
    empty: "\u25B1"
  },
  E = {
    fill: "\u2588",
    empty: "\u2591"
  },
  _ = () => uv.hasGeometricShapesInkBleedBug() ? E : I,
  g = a => Math.min(1, Math.max(0, a)),
  k = (a, t) => {
    let o = Math.floor(a * t),
      l = [Ys(s.at(-1), o)];
    if (o < t) {
      let i = a * t - o,
        p = Math.floor(i * (s.length - 1));
      l.push(s[p]);
      let m = t - o - 1;
      if (m > 0) l.push(s[0].repeat(m));
    }
    return l.join("");
  };
function Yv(a) {
  let T = w(17),
    {
      ratio: ratio,
      width: width,
      fillColor: l,
      emptyColor: i,
      variant: variant
    } = a,
    m = variant === void 0 ? "block" : variant,
    f,
    color,
    backgroundColor,
    u,
    children,
    P;
  if (T[0] !== i || T[1] !== l || T[2] !== ratio || T[3] !== m || T[4] !== width) {
    P = hn;
    z: {
      let b = g(ratio);
      if (m === "pill") {
        let {
          fill: fill,
          empty: empty
        } = _();
        let B = Math.round(b * width);
        P = r(n, {
          children: [e(n, {
            color: l,
            children: Ys(fill, B)
          }), e(n, {
            color: i,
            dimColor: i === void 0,
            children: Ys(empty, width - B)
          })]
        });
        break z;
      }
      f = n;
      color = l;
      backgroundColor = i;
      u = `${Math.round(b * 100)}%`;
      children = k(b, width);
    }
    T[0] = i, T[1] = l, T[2] = ratio, T[3] = m, T[4] = width, T[5] = f, T[6] = color, T[7] = backgroundColor, T[8] = u, T[9] = children, T[10] = P;
  } else f = T[5], color = T[6], backgroundColor = T[7], u = T[8], children = T[9], P = T[10];
  if (P !== hn) return P;
  let G;
  if (T[11] !== f || T[12] !== color || T[13] !== backgroundColor || T[14] !== u || T[15] !== children) G = e(f, {
    color: color,
    backgroundColor: backgroundColor,
    "aria-label": u,
    children: children
  }), T[11] = f, T[12] = color, T[13] = backgroundColor, T[14] = u, T[15] = children, T[16] = G;else G = T[16];
  return G;
}
export { Yv };