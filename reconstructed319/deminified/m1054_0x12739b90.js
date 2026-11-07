// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ow } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { RYe, sI, AYe, kS, Ry, hv } from "B:/~BUN/root/chunk-9ezywpz7.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { w, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var children = "\u25CF",
  M = 2000,
  P = {
    r: 171,
    g: 43,
    b: 63
  },
  T = {
    r: 0,
    g: 0,
    b: 0
  };
function rke(ae) {
  let a = S(35),
    {
      frame: frame,
      messageColor: l,
      stalledIntensity: stalledIntensity,
      thinkingIntensity: thinkingIntensity,
      reducedMotion: reducedMotion,
      time: time
    } = ae,
    f = stalledIntensity === void 0 ? 0 : stalledIntensity,
    i = thinkingIntensity === void 0 ? 0 : thinkingIntensity,
    he = reducedMotion === void 0 ? !1 : reducedMotion,
    de = time === void 0 ? 0 : time,
    m = ow();
  if (he) {
    let C = 1 - AYe(de, M);
    let color = i > 0 ? "warning" : l;
    let R = m[color];
    let g;
    if (a[0] !== R || a[1] !== C || a[2] !== i) {
      g = Pn;
      Re: {
        let G = R ? hv(R) : null;
        if (G) {
          let ce = kS(G, T, 0.5);
          let me = kS(ce, G, sI(C));
          const children_2 = e(n, {
            color: Ry(me),
            bold: i >= 0.5,
            children: children
          });
          let t;
          if (a[4] !== children_2) t = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: children_2
          }), a[4] = children_2, a[5] = t;else t = a[5];
          g = t;
          break Re;
        }
      }
      a[0] = R, a[1] = C, a[2] = i, a[3] = g;
    } else g = a[3];
    if (g !== Pn) return g;
    const dimColor = C < 0.5;
    const bold = i >= 0.5;
    let h;
    if (a[6] !== color || a[7] !== dimColor || a[8] !== bold) h = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: color,
        dimColor: dimColor,
        bold: bold,
        children: children
      })
    }), a[6] = color, a[7] = dimColor, a[8] = bold, a[9] = h;else h = a[9];
    return h;
  }
  let g;
  if (a[10] === w) g = RYe(), a[10] = g;else g = a[10];
  let q = g,
    children_3 = q[frame % q.length];
  if (f > 0) {
    let B = m[l];
    let r;
    if (a[11] !== B || a[12] !== children_3 || a[13] !== f) {
      r = Pn;
      Be: {
        let z = B ? hv(B) : null;
        if (z) {
          let ge = kS(z, P, sI(f));
          const children_4 = e(n, {
            color: Ry(ge),
            children: children_3
          });
          let h;
          if (a[15] !== children_4) h = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: children_4
          }), a[15] = children_4, a[16] = h;else h = a[16];
          r = h;
          break Be;
        }
      }
      a[11] = B, a[12] = children_3, a[13] = f, a[14] = r;
    } else r = a[14];
    if (r !== Pn) return r;
    let color_2 = f > 0.5 ? "error" : l;
    let t;
    if (a[17] !== color_2 || a[18] !== children_3) t = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: color_2,
        children: children_3
      })
    }), a[17] = color_2, a[18] = children_3, a[19] = t;else t = a[19];
    return t;
  }
  if (i > 0) {
    let I = m[l];
    let bold_2, r;
    if (a[20] !== I || a[21] !== children_3 || a[22] !== m.warning || a[23] !== i) {
      r = Pn;
      Ie: {
        let E = I ? hv(I) : null;
        let _ = hv(m.warning);
        bold_2 = i >= 0.5;
        if (E && _) {
          let be = kS(E, _, sI(i));
          const children_5 = e(n, {
            bold: bold_2,
            color: Ry(be),
            children: children_3
          });
          let h;
          if (a[26] !== children_5) h = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: children_5
          }), a[26] = children_5, a[27] = h;else h = a[27];
          r = h;
          break Ie;
        }
      }
      a[20] = I, a[21] = children_3, a[22] = m.warning, a[23] = i, a[24] = bold_2, a[25] = r;
    } else bold_2 = a[24], r = a[25];
    if (r !== Pn) return r;
    let color_3 = i > 0.5 ? "warning" : l;
    let t;
    if (a[28] !== bold_2 || a[29] !== color_3 || a[30] !== children_3) t = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        bold: bold_2,
        color: color_3,
        children: children_3
      })
    }), a[28] = bold_2, a[29] = color_3, a[30] = children_3, a[31] = t;else t = a[31];
    return t;
  }
  let r;
  if (a[32] !== l || a[33] !== children_3) r = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: l,
      children: children_3
    })
  }), a[32] = l, a[33] = children_3, a[34] = r;else r = a[34];
  return r;
}
export { children as IGt, rke };