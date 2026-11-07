// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s,
  n
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
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function x() {
  return !1
}
var t = Jt(!1);

function cle() {
  return ve(t)
}

function Osa(r) {
  let {
    children: o
  } = r;
  return Re(), y(x), o
}

function MWr(r) {
  let l = S(2),
    {
      children: o
    } = r,
    c;
  if (l[0] !== o) c = e(t, {
    value: !0,
    children: e(s, {
      flexDirection: "column",
      paddingLeft: 1,
      children: o
    })
  }), l[0] = o, l[1] = c;
  else c = l[1];
  return c
}

function vUe(r) {
  let {
    children: o,
    bold: l,
    color: c
  } = r;
  return cle() ? e(n, {
    children: o
  }) : e(n, {
    bold: l,
    color: c,
    children: o
  })
}
export {
  cle,
  Osa,
  MWr,
  vUe
};
