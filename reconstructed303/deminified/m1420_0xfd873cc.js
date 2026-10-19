// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { v8n, k8n } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { avt } from "B:/~BUN/root/chunk-aps766z0.js";
import { Xtt } from "B:/~BUN/root/chunk-7byaw5d4.js";
import { sz } from "B:/~BUN/root/chunk-ek3t847v.js";
import { hE } from "B:/~BUN/root/chunk-88ayp7r7.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
function Yye(i) {
  let a = w(25),
    {
      tone: tone,
      text: l,
      detail: m,
      subLines: subLines,
      linkify: linkify
    } = i,
    t = linkify ? sz : n,
    R = i.state === "live" && !i.reducedMotion ? k8n[i.frame % k8n.length] : v8n,
    color = tone === "gold" ? "warning" : tone === "red" ? "error" : void 0,
    dimColor = tone === "dim";
  const h = tone === "red" ? "error:" : tone === "gold" ? "warning:" : void 0;
  let f;
  if (a[0] !== color || a[1] !== dimColor || a[2] !== R || a[3] !== h) f = r(n, {
    "aria-hidden": dimColor,
    "aria-label": h,
    italic: !0,
    color: color,
    dimColor: dimColor,
    children: [R, " "]
  }), a[0] = color, a[1] = dimColor, a[2] = R, a[3] = h, a[4] = f;else f = a[4];
  let y;
  if (a[5] !== t || a[6] !== l) y = e(t, {
    children: l
  }), a[5] = t, a[6] = l, a[7] = y;else y = a[7];
  let b;
  if (a[8] !== t || a[9] !== m) b = m !== void 0 && r(n, {
    dimColor: !0,
    children: [" \xB7 ", e(t, {
      children: m
    })]
  }), a[8] = t, a[9] = m, a[10] = b;else b = a[10];
  let g;
  if (a[11] !== color || a[12] !== dimColor || a[13] !== y || a[14] !== b) g = r(n, {
    italic: !0,
    color: color,
    dimColor: dimColor,
    children: [y, b]
  }), a[11] = color, a[12] = dimColor, a[13] = y, a[14] = b, a[15] = g;else g = a[15];
  let C;
  if (a[16] !== t || a[17] !== subLines) C = subLines?.map((children, P) => e(n, {
    dimColor: !0,
    children: e(t, {
      children: children
    })
  }, P)), a[16] = t, a[17] = subLines, a[18] = C;else C = a[18];
  let x;
  if (a[19] !== g || a[20] !== C) x = r(s, {
    flexDirection: "column",
    flexGrow: 1,
    children: [g, C]
  }), a[19] = g, a[20] = C, a[21] = x;else x = a[21];
  let q;
  if (a[22] !== f || a[23] !== x) q = r(s, {
    flexDirection: "row",
    children: [f, x]
  }), a[22] = f, a[23] = x, a[24] = q;else q = a[24];
  return q;
}
function $w(i) {
  let o = avt(),
    l = Xtt()?.isQueued === !0;
  return !i && !o && !l && hE();
}
function vqr(i) {
  let o = $w(i),
    l = Xtt();
  return l?.isQueued === !0 ? l.noticeSystemLines : o;
}
export { Yye, $w, vqr };