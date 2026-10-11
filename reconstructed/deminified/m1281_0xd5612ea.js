// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Mmn, Dmn } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { der } from "B:/~BUN/root/chunk-ekzfyp3g.js";
import { $Je } from "B:/~BUN/root/chunk-psrp3wry.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Nj } from "B:/~BUN/root/chunk-sxjerhqq.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
var Jre = 2;
function ovn() {
  return !1;
}
function ew(l) {
  let o = der(),
    f = $Je()?.isQueued === !0;
  return !l && !o && !f && ovn();
}
function Dbe(l) {
  let a = w(25),
    {
      tone: tone,
      text: f,
      detail: m,
      subLines: subLines,
      linkify: linkify
    } = l,
    t = linkify ? Nj : n,
    A = l.state === "live" && !l.reducedMotion ? Dmn[l.frame % Dmn.length] : Mmn,
    color = tone === "gold" ? "warning" : tone === "red" ? "error" : void 0,
    dimColor = tone === "dim";
  const R = tone === "red" ? "error:" : tone === "gold" ? "warning:" : void 0;
  let c;
  if (a[0] !== color || a[1] !== dimColor || a[2] !== A || a[3] !== R) c = r(n, {
    "aria-hidden": dimColor,
    "aria-label": R,
    italic: !0,
    color: color,
    dimColor: dimColor,
    children: [A, " "]
  }), a[0] = color, a[1] = dimColor, a[2] = A, a[3] = R, a[4] = c;else c = a[4];
  let C;
  if (a[5] !== t || a[6] !== f) C = e(t, {
    children: f
  }), a[5] = t, a[6] = f, a[7] = C;else C = a[7];
  let T;
  if (a[8] !== t || a[9] !== m) T = m !== void 0 && r(n, {
    dimColor: !0,
    children: [" \xB7 ", e(t, {
      children: m
    })]
  }), a[8] = t, a[9] = m, a[10] = T;else T = a[10];
  let _;
  if (a[11] !== color || a[12] !== dimColor || a[13] !== C || a[14] !== T) _ = r(n, {
    italic: !0,
    color: color,
    dimColor: dimColor,
    children: [C, T]
  }), a[11] = color, a[12] = dimColor, a[13] = C, a[14] = T, a[15] = _;else _ = a[15];
  let g;
  if (a[16] !== t || a[17] !== subLines) g = subLines?.map((children, B) => e(n, {
    dimColor: !0,
    children: e(t, {
      children: children
    })
  }, B)), a[16] = t, a[17] = subLines, a[18] = g;else g = a[18];
  let b;
  if (a[19] !== _ || a[20] !== g) b = r(s, {
    flexDirection: "column",
    flexGrow: 1,
    children: [_, g]
  }), a[19] = _, a[20] = g, a[21] = b;else b = a[21];
  let D;
  if (a[22] !== c || a[23] !== b) D = r(s, {
    flexDirection: "row",
    children: [c, b]
  }), a[22] = c, a[23] = b, a[24] = D;else D = a[24];
  return D;
}
export { Dbe, Jre, ovn, ew };