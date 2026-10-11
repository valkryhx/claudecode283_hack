// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { wpt, sY } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { n, bt } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
function Nj(H) {
  let y = w(10),
    {
      children: children,
      color: color,
      bold: bold,
      linkHref: linkHref
    } = H,
    children_2;
  if (y[0] !== children || y[1] !== linkHref) {
    children_2 = [];
    let l = 0;
    for (const i of children.matchAll(wpt)) {
      let x = sY(i[0]);
      let k = linkHref === void 0 ? x : linkHref(x);
      if (k === void 0) {
        continue;
      }
      if (i.index > l) children_2.push(children.slice(l, i.index));
      children_2.push(e(bt, {
        url: k,
        children: k
      }, i.index)), l = i.index + x.length;
    }
    let s;
    if (y[3] !== children || y[4] !== l) s = children.slice(l), y[3] = children, y[4] = l, y[5] = s;else s = y[5];
    children_2.push(s);
    y[0] = children, y[1] = linkHref, y[2] = children_2;
  } else children_2 = y[2];
  let s;
  if (y[6] !== bold || y[7] !== color || y[8] !== children_2) s = e(n, {
    color: color,
    bold: bold,
    children: children_2
  }), y[6] = bold, y[7] = color, y[8] = children_2, y[9] = s;else s = y[9];
  return s;
}
export { Nj };