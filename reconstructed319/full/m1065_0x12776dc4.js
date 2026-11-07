// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  XU,
  int
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  ia
} from "B:/~BUN/root/chunk-q793s85g.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  Wj
} from "B:/~BUN/root/chunk-hh79wmvd.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Jt,
  ve,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
var c = Jt(!1);

function XGt(m) {
  let i = S(2),
    {
      children: o
    } = m,
    a;
  if (i[0] !== o) a = e(c.Provider, {
    value: !0,
    children: o
  }), i[0] = o, i[1] = a;
  else a = i[1];
  return a
}

function Ap() {
  let a = S(3),
    m = ve(c),
    o = ve(Wj),
    i = ia("app:toggleTranscript", "Global", "ctrl+o");
  if (m || o) {
    return null
  }
  let t;
  if (a[0] === w) t = {
    keyCase: "lower"
  }, a[0] = t;
  else t = a[0];
  let d;
  if (a[1] !== i) d = e(n, {
    dimColor: !0,
    children: e(Y, {
      chord: i,
      action: "expand",
      parens: !0,
      format: t
    })
  }), a[1] = i, a[2] = d;
  else d = a[2];
  return d
}

function U_(m) {
  let l = S(11),
    {
      count: o,
      unit: i,
      expandable: a,
      hiddenChars: t
    } = m,
    d = i === void 0 ? "line" : i,
    h = a === void 0 ? !1 : a;
  if (o <= 0) {
    return null
  }
  let p;
  if (l[0] !== o || l[1] !== d) p = XU(o, d), l[0] = o, l[1] = d, l[2] = p;
  else p = l[2];
  let s;
  if (l[3] !== t) s = t !== void 0 && t >= 1000 && ` (~${int(t)} KB)`, l[3] = t, l[4] = s;
  else s = l[4];
  let u;
  if (l[5] !== h) u = h && r(ne, {
    children: [" ", e(Ap, {})]
  }), l[5] = h, l[6] = u;
  else u = l[6];
  let b;
  if (l[7] !== p || l[8] !== s || l[9] !== u) b = r(n, {
    dimColor: !0,
    children: [p, s, u]
  }), l[7] = p, l[8] = s, l[9] = u, l[10] = b;
  else b = l[10];
  return b
}
export {
  XGt,
  Ap,
  U_
};
