// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Vln, jpe } from "B:/~BUN/root/chunk-c79wfkj4.js";
import { n, sn } from "B:/~BUN/root/chunk-qey16aan.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
function LM(H) {
  let y = S(10),
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
    for (const i of children.matchAll(Vln)) {
      let x = jpe(i[0]);
      let k = linkHref === void 0 ? x : linkHref(x);
      if (k === void 0) {
        continue;
      }
      if (i.index > l) children_2.push(children.slice(l, i.index));
      children_2.push(e(sn, {
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
export { LM };