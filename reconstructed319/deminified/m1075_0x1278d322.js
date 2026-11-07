// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { BJ } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { n, qs, Gj } from "B:/~BUN/root/chunk-qey16aan.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
function Gd(B) {
  let d = S(27),
    {
      width: width,
      color: color,
      char: char,
      padding: padding,
      title: i,
      titleAlign: titleAlign
    } = B,
    o = char === void 0 ? BJ : char,
    F = padding === void 0 ? 0 : padding,
    G = titleAlign === void 0 ? "center" : titleAlign,
    {
      columns: columns
    } = Re(),
    f = Math.max(0, (width ?? columns) - F),
    x;
  if (d[0] !== color || d[1] !== i) x = i ? e(n, {
    color: color,
    dimColor: !color,
    children: e(qs, {
      children: i
    })
  }) : null, d[0] = color, d[1] = i, d[2] = x;else x = d[2];
  let fallback = x;
  if (i) {
    let I = ce(i) + 2;
    let b = Math.max(0, f - I);
    let s = G === "start" ? Math.min(4, b) : Math.floor(b / 2);
    let k = b - s;
    const dimColor = !color;
    let l;
    if (d[3] !== o || d[4] !== s) l = o.repeat(s), d[3] = o, d[4] = s, d[5] = l;else l = d[5];
    let h;
    if (d[6] !== i) h = e(n, {
      dimColor: !0,
      children: e(qs, {
        children: i
      })
    }), d[6] = i, d[7] = h;else h = d[7];
    let p;
    if (d[8] !== o || d[9] !== k) p = o.repeat(k), d[8] = o, d[9] = k, d[10] = p;else p = d[10];
    let children;
    if (d[11] !== color || d[12] !== dimColor || d[13] !== l || d[14] !== h || d[15] !== p) children = r(n, {
      color: color,
      dimColor: dimColor,
      children: [l, " ", h, " ", p]
    }), d[11] = color, d[12] = dimColor, d[13] = l, d[14] = h, d[15] = p, d[16] = children;else children = d[16];
    let D;
    if (d[17] !== fallback || d[18] !== children) D = e(Gj, {
      fallback: fallback,
      children: children
    }), d[17] = fallback, d[18] = children, d[19] = D;else D = d[19];
    return D;
  }
  const dimColor_2 = !color;
  let children_2;
  if (d[20] !== o || d[21] !== f) children_2 = o.repeat(f), d[20] = o, d[21] = f, d[22] = children_2;else children_2 = d[22];
  let h;
  if (d[23] !== color || d[24] !== dimColor_2 || d[25] !== children_2) h = e(Gj, {
    children: e(n, {
      color: color,
      dimColor: dimColor_2,
      children: children_2
    })
  }), d[23] = color, d[24] = dimColor_2, d[25] = children_2, d[26] = h;else h = d[26];
  return h;
}
export { Gd };