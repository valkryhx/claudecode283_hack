// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { gHe, tLr } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { z9t } from "B:/~BUN/root/chunk-27h4st9h.js";
import { mv } from "B:/~BUN/root/chunk-h37egt7q.js";
import { AGt } from "B:/~BUN/root/chunk-206ebgh5.js";
import { Nvt } from "B:/~BUN/root/chunk-ve4gzwvf.js";
import { LM } from "B:/~BUN/root/chunk-fd5dzvk6.js";
import { Hh } from "B:/~BUN/root/chunk-81tfbmye.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ve, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function RGt(d) {
  let x = S(17),
    {
      command: command,
      args: args,
      color: color
    } = d,
    t = args === void 0 ? command : `${command} ${args}`,
    i;
  if (x[0] === w) i = z9t(), x[0] = i;else i = x[0];
  let U = i,
    [bold, h] = y(!1),
    b = mv();
  if (!U) {
    let c;
    if (x[1] !== color || x[2] !== t) c = r(n, {
      underline: !0,
      color: color,
      children: ["/", t]
    }), x[1] = color, x[2] = t, x[3] = c;else c = x[3];
    return c;
  }
  let onClick;
  if (x[4] !== command || x[5] !== t || x[6] !== b) onClick = v => {
    if (b(v)) {
      return;
    }
    l("tengu_slash_link_clicked", {
      command: f(command)
    }), U(t, {
      kind: "human"
    });
  }, x[4] = command, x[5] = t, x[6] = b, x[7] = onClick;else onClick = x[7];
  let onMouseEnter, onMouseLeave;
  if (x[8] === w) onMouseEnter = () => h(!0), onMouseLeave = () => h(!1), x[8] = onMouseEnter, x[9] = onMouseLeave;else onMouseEnter = x[8], onMouseLeave = x[9];
  let children;
  if (x[10] !== color || x[11] !== bold || x[12] !== t) children = r(n, {
    underline: !0,
    bold: bold,
    color: color,
    children: ["/", t]
  }), x[10] = color, x[11] = bold, x[12] = t, x[13] = children;else children = x[13];
  let T;
  if (x[14] !== onClick || x[15] !== children) T = e(s, {
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: children
  }), x[14] = onClick, x[15] = children, x[16] = T;else T = x[16];
  return T;
}
j();
j();
var kUe = Jt(!1),
  Fmn = Jt(!1);
var vne = Jt(!1);
function HPe(d) {
  let p = S(26),
    {
      tone: tone,
      text: a,
      detail: m,
      subLines: subLines,
      linkify: linkify
    } = d,
    i = linkify ? LM : n,
    C = ve(Fmn) ? " " : d.state === "live" && !d.reducedMotion ? tLr[d.frame % tLr.length] : gHe,
    color_2 = tone === "gold" ? "warning" : tone === "red" ? "error" : void 0,
    b = tone === "red";
  const c = tone === "dim",
    v = tone === "red" ? "error:" : tone === "gold" ? "warning:" : void 0,
    dimColor = tone === "dim";
  let u;
  if (p[0] !== C || p[1] !== color_2 || p[2] !== c || p[3] !== v || p[4] !== dimColor) u = r(n, {
    "aria-hidden": c,
    "aria-label": v,
    italic: !0,
    color: color_2,
    dimColor: dimColor,
    children: [C, " "]
  }), p[0] = C, p[1] = color_2, p[2] = c, p[3] = v, p[4] = dimColor, p[5] = u;else u = p[5];
  const color_3 = b ? "error" : void 0,
    dimColor_2 = !b;
  let L;
  if (p[6] !== i || p[7] !== a) L = e(i, {
    children: a
  }), p[6] = i, p[7] = a, p[8] = L;else L = p[8];
  let R;
  if (p[9] !== i || p[10] !== m) R = m !== void 0 && r(n, {
    dimColor: !0,
    children: [" \xB7 ", e(i, {
      children: m
    })]
  }), p[9] = i, p[10] = m, p[11] = R;else R = p[11];
  let H;
  if (p[12] !== color_3 || p[13] !== dimColor_2 || p[14] !== L || p[15] !== R) H = r(n, {
    italic: !0,
    color: color_3,
    dimColor: dimColor_2,
    children: [L, R]
  }), p[12] = color_3, p[13] = dimColor_2, p[14] = L, p[15] = R, p[16] = H;else H = p[16];
  let M;
  if (p[17] !== i || p[18] !== subLines) M = subLines?.map((children_2, re) => e(n, {
    dimColor: !0,
    children: e(i, {
      children: children_2
    })
  }, re)), p[17] = i, p[18] = subLines, p[19] = M;else M = p[19];
  let N;
  if (p[20] !== H || p[21] !== M) N = r(s, {
    flexDirection: "column",
    flexGrow: 1,
    children: [H, M]
  }), p[20] = H, p[21] = M, p[22] = N;else N = p[22];
  let z;
  if (p[23] !== N || p[24] !== u) z = r(s, {
    flexDirection: "row",
    children: [u, N]
  }), p[23] = N, p[24] = u, p[25] = z;else z = p[25];
  return z;
}
function $E(d) {
  let o = AGt(),
    a = Nvt()?.isQueued === !0;
  return !d && !o && !a && Hh();
}
function iHo(d) {
  let o = $E(d),
    a = Nvt();
  return a?.isQueued === !0 ? a.noticeSystemLines : o;
}
export { RGt, kUe, Fmn, vne, HPe, $E, iHo };