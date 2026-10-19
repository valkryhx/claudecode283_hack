// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Te
} from "B:/~BUN/root/chunk-smy4yvhm.js";
import {
  _,
  J
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  I4r
} from "B:/~BUN/root/chunk-1jz9m9yh.js";
import {
  br
} from "B:/~BUN/root/chunk-g5gf7tps.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  n,
  Go
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  ze
} from "B:/~BUN/root/chunk-yqm8ptb8.js";
import {
  CV
} from "B:/~BUN/root/chunk-1nevq7mk.js";
import {
  e
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  jw
} from "B:/~BUN/root/chunk-tmxfgevx.js";
import {
  Nmo
} from "B:/~BUN/root/chunk-gvcmagy5.js";
import {
  qt,
  Ee,
  Z,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
B();
B();
var c = qt(!1);

function jer(r) {
  let s = w(2),
    {
      children: t
    } = r,
    o;
  if (s[0] !== t) o = e(c.Provider, {
    value: !0,
    children: t
  }), s[0] = t, s[1] = o;
  else o = s[1];
  return o
}

function u() {
  return Ee(c)
}

function M(r) {
  try {
    let t = J(r),
      s = _(t),
      o = r.replaceAll("\\/", "/").replace(/\s+/g, ""),
      m = s.replace(/\s+/g, "");
    if (o !== m) return r;
    return _(t, null, 2)
  } catch {
    return r
  }
}
var P = 1e4;

function b(r) {
  if (r.length > P) return r;
  return r.split(`
`).map(M).join(`
`)
}
var A = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,
  C = 1e5;

function Wer(r, t) {
  if (r.length > C) return r;
  let s = (o) => o.replace(A, (m) => jw(m, void 0, {
    themeName: t
  }));
  if (!r.includes(I4r)) return s(r);
  return r.split(`
`).map((o) => o.includes(I4r) ? o : s(o)).join(`
`)
}

function vP(r) {
  let l = w(14),
    {
      content: t,
      verbose: s,
      isError: o,
      isWarning: m
    } = r,
    {
      columns: d
    } = Te(),
    [g] = br(),
    k = u(),
    h = Ee(CV),
    z = s || k,
    O;
  if (l[0] !== t || l[1] !== g) O = Wer(b(t), g), l[0] = t, l[1] = g, l[2] = O;
  else O = l[2];
  let a = O,
    N;
  fr: {
    if (z) {
      let i;
      if (l[3] !== a) i = f(a), l[3] = a, l[4] = i;
      else i = l[4];
      N = i;
      break fr
    }
    let i;
    if (l[5] !== d || l[6] !== a || l[7] !== h) i = f(Nmo(a, d, h)),
    l[5] = d,
    l[6] = a,
    l[7] = h,
    l[8] = i;
    else i = l[8];N = i
  }
  let R = N,
    x = o ? "error" : m ? "warning" : void 0,
    i;
  if (l[9] !== R) i = e(Go, {
    children: R
  }), l[9] = R, l[10] = i;
  else i = l[10];
  let v;
  if (l[11] !== x || l[12] !== i) v = e(ze, {
    children: e(n, {
      color: x,
      children: i
    })
  }), l[11] = x, l[12] = i, l[13] = v;
  else v = l[13];
  return v
}

function f(r) {
  return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g, "")
}
export {
  jer,
  Wer,
  vP
};
