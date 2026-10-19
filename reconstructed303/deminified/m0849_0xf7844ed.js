// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ji } from "B:/~BUN/root/chunk-nggrknsv.js";
import { wo as icon, w_t } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { n, ot, MLe, Aa } from "B:/~BUN/root/chunk-damrp3r8.js";
import { ew } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { OLe, Py, Xm, yS } from "B:/~BUN/root/chunk-mvgarwbg.js";
import { Vu } from "B:/~BUN/root/chunk-44n8zjk2.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Ig } from "B:/~BUN/root/chunk-25gtd35b.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
var p_e = {
    success: {
      icon: te.tick,
      color: "success",
      ariaLabel: "done:"
    },
    error: {
      icon: te.cross,
      color: "error",
      ariaLabel: "failed:"
    },
    warning: {
      icon: te.warning,
      color: "warning",
      ariaLabel: "warning:"
    },
    info: {
      icon: te.info,
      color: "suggestion",
      ariaLabel: "note:"
    },
    pending: {
      icon: te.circle,
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
      icon: te.tick,
      color: "success",
      ariaLabel: "on:"
    },
    off: {
      icon: te.circle,
      color: void 0,
      ariaLabel: "off:"
    },
    working: {
      icon: w_t,
      color: void 0,
      ariaLabel: "working:"
    },
    needsYou: {
      icon: w_t,
      color: "warning",
      ariaLabel: "needs you:"
    },
    idle: {
      icon: w_t,
      color: void 0,
      ariaLabel: "idle:"
    },
    failed: {
      icon: w_t,
      color: "error",
      ariaLabel: "error:"
    }
  },
  I = {
    working: w_t,
    needsYou: "!",
    idle: "\u25E6",
    failed: "\xD7"
  },
  L = 8,
  Y = 200;
function Int() {
  return Math.max(...Object.values(p_e).map(item => ie(item.icon)));
}
function Vwn() {
  return Int() + 1;
}
function ft(l) {
  let a = w(20),
    {
      status: status,
      "aria-label": s,
      withSpace: withSpace,
      slot: slot
    } = l,
    withSpace_2 = withSpace === void 0 ? !1 : withSpace;
  if (status === void 0) {
    let m;
    if (a[0] !== slot) m = slot && e(n, {
      children: " ".repeat(Vwn())
    }), a[0] = slot, a[1] = m;else m = a[1];
    return m;
  }
  let t = p_e[status],
    m;
  if (a[2] !== s || a[3] !== t || a[4] !== slot) m = s ?? (slot === "trailing" ? t.ariaLabel.replace(/:$/, "") : t.ariaLabel), a[2] = s, a[3] = t, a[4] = slot, a[5] = m;else m = a[5];
  let spoken = m;
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
  let o = s === void 0 ? u && " " : ji(" ", Vwn() - ie(children_2));
  return r(Q, {
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
  let a = w(17),
    {
      status: status_2,
      spoken: spoken_2,
      slot: slot_2,
      withSpace: withSpace_3
    } = l,
    c = ew(),
    m;
  if (a[0] !== c.subtle) m = yS(c.subtle), a[0] = c.subtle, a[1] = m;else m = a[1];
  let dimmer = m,
    d;
  if (a[2] !== c.inactive) d = yS(c.inactive), a[2] = c.inactive, a[3] = d;else d = a[3];
  let dim = d,
    {
      color: color_2
    } = p_e[status_2],
    g = he.level >= 2 && dimmer !== null && dim !== null;
  const k = g ? w_t : I[status_2];
  let K;
  if (a[4] !== slot_2 || a[5] !== spoken_2 || a[6] !== k || a[7] !== withSpace_3) K = x(k, spoken_2, slot_2, withSpace_3), a[4] = slot_2, a[5] = spoken_2, a[6] = k, a[7] = withSpace_3, a[8] = K;else K = a[8];
  let children_3 = K;
  if (g && status_2 === "working") {
    let S;
    if (a[9] !== dim || a[10] !== dimmer || a[11] !== children_3) S = e(N, {
      dimmer: dimmer,
      dim: dim,
      children: children_3
    }), a[9] = dim, a[10] = dimmer, a[11] = children_3, a[12] = S;else S = a[12];
    return S;
  }
  const dimColor_2 = !color_2;
  let X;
  if (a[13] !== color_2 || a[14] !== children_3 || a[15] !== dimColor_2) X = e(n, {
    color: color_2,
    dimColor: dimColor_2,
    children: children_3
  }), a[13] = color_2, a[14] = children_3, a[15] = dimColor_2, a[16] = X;else X = a[16];
  return X;
}
function N(l) {
  let d = w(8),
    {
      dimmer: dimmer_2,
      dim: dim_2,
      children: children_4
    } = l,
    o = Vu(),
    c = ot(),
    a = o || c,
    m = Math.ceil(MLe(Y) / Ig) * Ig,
    [, t] = Aa(a ? null : m),
    f;
  if (d[0] !== dim_2 || d[1] !== dimmer_2 || d[2] !== a || d[3] !== t) f = a ? "subtle" : Xm(Py(dimmer_2, dim_2, OLe(Math.floor(t / m) % L, L))), d[0] = dim_2, d[1] = dimmer_2, d[2] = a, d[3] = t, d[4] = f;else f = d[4];
  let color_3 = f,
    g;
  if (d[5] !== children_4 || d[6] !== color_3) g = e(n, {
    color: color_3,
    children: children_4
  }), d[5] = children_4, d[6] = color_3, d[7] = g;else g = d[7];
  return g;
}
export { p_e, Int, Vwn, ft };