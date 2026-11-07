// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { qE } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { wa } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { n } from "B:/~BUN/root/chunk-qey16aan.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var p = [" ", "\u258F", "\u258E", "\u258D", "\u258C", "\u258B", "\u258A", "\u2589", "\u2588"],
  R = {
    fill: "\u25B0",
    empty: "\u25B1"
  },
  Y = {
    fill: "\u2588",
    empty: "\u2591"
  },
  k = {
    fill: "\u2593",
    empty: "\u2591"
  },
  _ = () => qE.hasGeometricShapesInkBleedBug() ? Y : R,
  g = m => Math.min(1, Math.max(0, m)),
  v = (m, a) => {
    let o = Math.floor(m * a),
      i = [wa(p.at(-1), o)];
    if (o < a) {
      let l = m * a - o,
        h = Math.floor(l * (p.length - 1));
      i.push(p[h]);
      let t = a - o - 1;
      if (t > 0) i.push(p[0].repeat(t));
    }
    return i.join("");
  };
function MM(m) {
  let G = S(17),
    {
      ratio: ratio,
      width: width,
      fillColor: i,
      emptyColor: l,
      variant: variant
    } = m,
    t = variant === void 0 ? "block" : variant,
    u,
    color,
    backgroundColor,
    C,
    children,
    M;
  if (G[0] !== l || G[1] !== i || G[2] !== ratio || G[3] !== t || G[4] !== width) {
    M = Pn;
    J: {
      let d = g(ratio);
      if (t !== "block") {
        let {
          fill: fill,
          empty: empty
        } = t === "shade" ? k : _();
        let I = Math.round(d * width);
        let E = t === "shade" && d > 0 && d < 1 ? Math.min(Math.max(width - 1, 0), Math.max(1, I)) : I;
        M = r(n, {
          "aria-label": t === "shade" ? `${Math.round(d * 100)}%` : void 0,
          children: [e(n, {
            color: i,
            children: wa(fill, E)
          }), e(n, {
            color: l,
            dimColor: l === void 0,
            children: wa(empty, width - E)
          })]
        });
        break J;
      }
      u = n;
      color = i;
      backgroundColor = l;
      C = `${Math.round(d * 100)}%`;
      children = v(d, width);
    }
    G[0] = l, G[1] = i, G[2] = ratio, G[3] = t, G[4] = width, G[5] = u, G[6] = color, G[7] = backgroundColor, G[8] = C, G[9] = children, G[10] = M;
  } else u = G[5], color = G[6], backgroundColor = G[7], C = G[8], children = G[9], M = G[10];
  if (M !== Pn) return M;
  let H;
  if (G[11] !== u || G[12] !== color || G[13] !== backgroundColor || G[14] !== C || G[15] !== children) H = e(u, {
    color: color,
    backgroundColor: backgroundColor,
    "aria-label": C,
    children: children
  }), G[11] = u, G[12] = color, G[13] = backgroundColor, G[14] = C, G[15] = children, G[16] = H;else H = G[16];
  return H;
}
export { MM };