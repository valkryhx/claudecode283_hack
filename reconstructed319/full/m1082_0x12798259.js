// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  As
} from "B:/~BUN/root/chunk-q8sf8fhe.js";
import {
  s
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Jt,
  ve,
  A,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var t = Jt(null),
  mK = 1;

function Bvt(O) {
  let u = S(10),
    {
      box: d,
      reserve: l,
      children: c
    } = O,
    h = A(null),
    o = d ?? h,
    {
      rows: m
    } = As(Re()),
    r;
  if (u[0] !== o || u[1] !== l || u[2] !== m) r = {
    box: o,
    rows: m,
    reserve: l
  }, u[0] = o, u[1] = l, u[2] = m, u[3] = r;
  else r = u[3];
  let n;
  if (u[4] !== o || u[5] !== c) n = e(s, {
    ref: o,
    flexDirection: "column",
    children: c
  }), u[4] = o, u[5] = c, u[6] = n;
  else n = u[6];
  let R;
  if (u[7] !== r || u[8] !== n) R = e(t, {
    value: r,
    children: n
  }), u[7] = r, u[8] = n, u[9] = R;
  else R = u[9];
  return R
}

function Bj() {
  return ve(t)
}
export {
  mK,
  Bvt,
  Bj
};
