// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Bx } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { n, Jr, SA } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
function Ml(E) {
  let d = w(27),
    {
      width: width,
      color: color,
      char: char,
      padding: padding,
      title: i,
      titleAlign: titleAlign
    } = E,
    o = char === void 0 ? Bx : char,
    G = padding === void 0 ? 0 : padding,
    H = titleAlign === void 0 ? "center" : titleAlign,
    {
      columns: columns
    } = ve(),
    f = Math.max(0, (width ?? columns) - G),
    D;
  if (d[0] !== color || d[1] !== i) D = i ? e(n, {
    color: color,
    dimColor: !color,
    children: e(Jr, {
      children: i
    })
  }) : null, d[0] = color, d[1] = i, d[2] = D;else D = d[2];
  let fallback = D;
  if (i) {
    let J = ie(i) + 2;
    let b = Math.max(0, f - J);
    let s = H === "start" ? Math.min(4, b) : Math.floor(b / 2);
    let k = b - s;
    const dimColor = !color;
    let l;
    if (d[3] !== o || d[4] !== s) l = o.repeat(s), d[3] = o, d[4] = s, d[5] = l;else l = d[5];
    let h;
    if (d[6] !== i) h = e(n, {
      dimColor: !0,
      children: e(Jr, {
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
    let R;
    if (d[17] !== fallback || d[18] !== children) R = e(SA, {
      fallback: fallback,
      children: children
    }), d[17] = fallback, d[18] = children, d[19] = R;else R = d[19];
    return R;
  }
  const dimColor_2 = !color;
  let children_2;
  if (d[20] !== o || d[21] !== f) children_2 = o.repeat(f), d[20] = o, d[21] = f, d[22] = children_2;else children_2 = d[22];
  let h;
  if (d[23] !== color || d[24] !== dimColor_2 || d[25] !== children_2) h = e(SA, {
    children: e(n, {
      color: color,
      dimColor: dimColor_2,
      children: children_2
    })
  }), d[23] = color, d[24] = dimColor_2, d[25] = children_2, d[26] = h;else h = d[26];
  return h;
}
export { Ml };