// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { As } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { s } from "B:/~BUN/root/chunk-qey16aan.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ve, A, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var t = Jt(null),
  mK = 1;
function Bvt(O) {
  let u = S(10),
    {
      box: box,
      reserve: reserve,
      children: children
    } = O,
    h = A(null),
    o = box ?? h,
    {
      rows: rows
    } = As(Re()),
    value;
  if (u[0] !== o || u[1] !== reserve || u[2] !== rows) value = {
    box: o,
    rows: rows,
    reserve: reserve
  }, u[0] = o, u[1] = reserve, u[2] = rows, u[3] = value;else value = u[3];
  let children_2;
  if (u[4] !== o || u[5] !== children) children_2 = e(s, {
    ref: o,
    flexDirection: "column",
    children: children
  }), u[4] = o, u[5] = children, u[6] = children_2;else children_2 = u[6];
  let R;
  if (u[7] !== value || u[8] !== children_2) R = e(t, {
    value: value,
    children: children_2
  }), u[7] = value, u[8] = children_2, u[9] = R;else R = u[9];
  return R;
}
function Bj() {
  return ve(t);
}
export { mK, Bvt, Bj };