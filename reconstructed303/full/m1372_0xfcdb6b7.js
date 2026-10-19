// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  One,
  nGe
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  Fa
} from "B:/~BUN/root/chunk-a3hh790f.js";
import {
  q
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  CV
} from "B:/~BUN/root/chunk-1nevq7mk.js";
import {
  Q,
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  qt,
  Ee,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
var c = qt(!1);

function Wvt(m) {
  let i = w(2),
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

function Gu() {
  let a = w(3),
    m = Ee(c),
    o = Ee(CV),
    i = Fa("app:toggleTranscript", "Global", "ctrl+o");
  if (m || o) {
    return null
  }
  let t;
  if (a[0] === S) t = {
    keyCase: "lower"
  }, a[0] = t;
  else t = a[0];
  let d;
  if (a[1] !== i) d = e(n, {
    dimColor: !0,
    children: e(q, {
      chord: i,
      action: "expand",
      parens: !0,
      format: t
    })
  }), a[1] = i, a[2] = d;
  else d = a[2];
  return d
}

function d_(m) {
  let l = w(11),
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
  if (l[0] !== o || l[1] !== d) p = One(o, d), l[0] = o, l[1] = d, l[2] = p;
  else p = l[2];
  let s;
  if (l[3] !== t) s = t !== void 0 && t >= 1000 && ` (~${nGe(t)} KB)`, l[3] = t, l[4] = s;
  else s = l[4];
  let u;
  if (l[5] !== h) u = h && r(Q, {
    children: [" ", e(Gu, {})]
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
  Wvt,
  Gu,
  d_
};
