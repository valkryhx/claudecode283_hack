// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  Bl
} from "B:/~BUN/root/chunk-q8sf8fhe.js";
import {
  s
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Gd
} from "B:/~BUN/root/chunk-jx2rmjhh.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
var fv = 2,
  TP = 1,
  o8 = 2;

function Si(h) {
  let n = S(10),
    {
      children: t,
      color: c,
      insetX: m
    } = h,
    p = m === void 0 ? fv : m;
  if (Bl()) {
    let o;
    if (n[0] !== t) o = e(s, {
      flexDirection: "column",
      paddingX: TP,
      flexShrink: 0,
      children: t
    }), n[0] = t, n[1] = o;
    else o = n[1];
    return o
  }
  let o;
  if (n[2] !== c) o = e(Gd, {
    color: c
  }), n[2] = c, n[3] = o;
  else o = n[3];
  let i;
  if (n[4] !== t || n[5] !== p) i = e(s, {
    flexDirection: "column",
    paddingX: p,
    children: t
  }), n[4] = t, n[5] = p, n[6] = i;
  else i = n[6];
  let d;
  if (n[7] !== o || n[8] !== i) d = r(s, {
    flexDirection: "column",
    paddingTop: 1,
    children: [o, i]
  }), n[7] = o, n[8] = i, n[9] = d;
  else d = n[9];
  return d
}
export {
  fv,
  TP,
  o8,
  Si
};
