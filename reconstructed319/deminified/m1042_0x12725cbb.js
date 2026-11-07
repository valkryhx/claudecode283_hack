// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { wa, bh } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Jo as icon, UBt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ot, n, PYe, pl } from "B:/~BUN/root/chunk-qey16aan.js";
import { ow } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { AYe, kS, Ry, hv } from "B:/~BUN/root/chunk-9ezywpz7.js";
import { gp } from "B:/~BUN/root/chunk-nyy541yq.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Lg } from "B:/~BUN/root/chunk-e7wx2kwq.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
var WPe = {
    success: {
      icon: re.tick,
      color: "success",
      ariaLabel: "done:"
    },
    error: {
      icon: re.cross,
      color: "error",
      ariaLabel: "failed:"
    },
    warning: {
      icon: re.warning,
      color: "warning",
      ariaLabel: "warning:"
    },
    info: {
      icon: re.info,
      color: "suggestion",
      ariaLabel: "note:"
    },
    pending: {
      icon: re.circle,
      color: void 0,
      ariaLabel: "pending:"
    },
    loading: {
      icon: "\u2026",
      color: void 0,
      ariaLabel: "loading:"
    },
    running: {
      icon: icon,
      color: void 0,
      ariaLabel: "running:"
    },
    on: {
      icon: re.tick,
      color: "success",
      ariaLabel: "on:"
    },
    off: {
      icon: re.circle,
      color: void 0,
      ariaLabel: "off:"
    },
    working: {
      icon: UBt,
      color: void 0,
      ariaLabel: "working:"
    },
    needsYou: {
      icon: UBt,
      color: "warning",
      ariaLabel: "needs you:"
    },
    idle: {
      icon: UBt,
      color: void 0,
      ariaLabel: "idle:"
    },
    failed: {
      icon: UBt,
      color: "error",
      ariaLabel: "error:"
    }
  },
  I = {
    working: UBt,
    needsYou: "!",
    idle: "\u25E6",
    failed: "\xD7"
  },
  L = 8,
  Y = 200;
function rEt() {
  return Math.max(...Object.values(WPe).map(item => ce(item.icon)));
}
function N5n() {
  return rEt() + 1;
}
function Tt(l) {
  let a = S(20),
    {
      status: status,
      "aria-label": s,
      withSpace: withSpace,
      slot: slot
    } = l,
    withSpace_2 = withSpace === void 0 ? !1 : withSpace;
  if (status === void 0) {
    let p;
    if (a[0] !== slot) p = slot && e(n, {
      children: " ".repeat(N5n())
    }), a[0] = slot, a[1] = p;else p = a[1];
    return p;
  }
  let t = WPe[status],
    p;
  if (a[2] !== s || a[3] !== t || a[4] !== slot) p = s ?? (slot === "trailing" ? bh(t.ariaLabel, ":") : t.ariaLabel), a[2] = s, a[3] = t, a[4] = slot, a[5] = p;else p = a[5];
  let spoken = p;
  if (B(status)) {
    let f;
    if (a[6] !== slot || a[7] !== spoken || a[8] !== status || a[9] !== withSpace_2) f = e(M, {
      status: status,
      spoken: spoken,
      slot: slot,
      withSpace: withSpace_2
    }), a[6] = slot, a[7] = spoken, a[8] = status, a[9] = withSpace_2, a[10] = f;else f = a[10];
    return f;
  }
  const color = t.color,
    dimColor = !t.color;
  let children;
  if (a[11] !== t.icon || a[12] !== slot || a[13] !== spoken || a[14] !== withSpace_2) children = x(t.icon, spoken, slot, withSpace_2), a[11] = t.icon, a[12] = slot, a[13] = spoken, a[14] = withSpace_2, a[15] = children;else children = a[15];
  let k;
  if (a[16] !== t.color || a[17] !== dimColor || a[18] !== children) k = e(n, {
    color: color,
    dimColor: dimColor,
    children: children
  }), a[16] = t.color, a[17] = dimColor, a[18] = children, a[19] = k;else k = a[19];
  return k;
}
function x(children_2, i, s, u) {
  let o = s === void 0 ? u && " " : wa(" ", N5n() - ce(children_2));
  return r(ne, {
    children: [s === "trailing" && o, e(n, {
      "aria-label": i,
      children: children_2
    }), s !== "trailing" && o]
  });
}
function B(l) {
  return l in I;
}
function M(l) {
  let a = S(17),
    {
      status: status_2,
      spoken: spoken_2,
      slot: slot_2,
      withSpace: withSpace_3
    } = l,
    c = ow(),
    p;
  if (a[0] !== c.subtle) p = hv(c.subtle), a[0] = c.subtle, a[1] = p;else p = a[1];
  let dimmer = p,
    d;
  if (a[2] !== c.inactive) d = hv(c.inactive), a[2] = c.inactive, a[3] = d;else d = a[3];
  let dim = d,
    {
      color: color_2
    } = WPe[status_2],
    g = Se.level >= 2 && dimmer !== null && dim !== null;
  const k = g ? UBt : I[status_2];
  let K;
  if (a[4] !== slot_2 || a[5] !== spoken_2 || a[6] !== k || a[7] !== withSpace_3) K = x(k, spoken_2, slot_2, withSpace_3), a[4] = slot_2, a[5] = spoken_2, a[6] = k, a[7] = withSpace_3, a[8] = K;else K = a[8];
  let children_3 = K;
  if (g && status_2 === "working") {
    let w;
    if (a[9] !== dim || a[10] !== dimmer || a[11] !== children_3) w = e(N, {
      dimmer: dimmer,
      dim: dim,
      children: children_3
    }), a[9] = dim, a[10] = dimmer, a[11] = children_3, a[12] = w;else w = a[12];
    return w;
  }
  const dimColor_2 = !color_2;
  let Q;
  if (a[13] !== color_2 || a[14] !== children_3 || a[15] !== dimColor_2) Q = e(n, {
    color: color_2,
    dimColor: dimColor_2,
    children: children_3
  }), a[13] = color_2, a[14] = children_3, a[15] = dimColor_2, a[16] = Q;else Q = a[16];
  return Q;
}
function N(l) {
  let d = S(8),
    {
      dimmer: dimmer_2,
      dim: dim_2,
      children: children_4
    } = l,
    o = gp(),
    c = ot(),
    a = o || c,
    p = Math.ceil(PYe(Y) / Lg) * Lg,
    [, t] = pl(a ? null : p),
    f;
  if (d[0] !== dim_2 || d[1] !== dimmer_2 || d[2] !== a || d[3] !== t) f = a ? "subtle" : Ry(kS(dimmer_2, dim_2, AYe(Math.floor(t / p) % L, L))), d[0] = dim_2, d[1] = dimmer_2, d[2] = a, d[3] = t, d[4] = f;else f = d[4];
  let color_3 = f,
    g;
  if (d[5] !== children_4 || d[6] !== color_3) g = e(n, {
    color: color_3,
    children: children_4
  }), d[5] = children_4, d[6] = color_3, d[7] = g;else g = d[7];
  return g;
}
export { WPe, rEt, N5n, Tt };