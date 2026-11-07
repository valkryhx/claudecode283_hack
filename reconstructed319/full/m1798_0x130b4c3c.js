// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  XX
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s,
  n,
  sn
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Oa
} from "B:/~BUN/root/chunk-rzvkfy4m.js";
import {
  YR
} from "B:/~BUN/root/chunk-59dyvtcg.js";
import {
  Ys
} from "B:/~BUN/root/chunk-28bb8488.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  O,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();

function T(l, c) {
  let p = l.match(A);
  if (!p) {
    return e(n, {
      dimColor: !0,
      children: l
    }, c)
  }
  let R = p[0];
  let P = p.index ?? 0;
  let z = l.slice(0, P);
  let E = l.slice(P + R.length);
  return r(n, {
    dimColor: !0,
    children: [z, e(sn, {
      url: R,
      children: R
    }), E]
  }, c)
}
var A = /https?:\/\/\S+/;

function Dvt() {
  let a = S(10),
    f;
  if (a[0] === w) f = XX.getInstance().getStatus(), a[0] = f;
  else f = a[0];
  let [t, C] = y(f), m, d;
  if (a[1] === w) m = () => XX.getInstance().subscribe(C), d = [], a[1] = m, a[2] = d;
  else m = a[1], d = a[2];
  if (O(m, d), !t.isAuthenticating && !t.error && t.output.length === 0) {
    return null
  }
  if (!t.isAuthenticating && !t.error) {
    return null
  }
  let u;
  if (a[3] !== t.output) u = t.output.length > 0 && e(s, {
    flexDirection: "column",
    children: t.output.slice(-5).map(T)
  }), a[3] = t.output, a[4] = u;
  else u = a[4];
  let i;
  if (a[5] !== t.error) i = t.error && e(Ys, {
    error: t.error
  }), a[5] = t.error, a[6] = i;
  else i = a[6];
  let g;
  if (a[7] !== u || a[8] !== i) g = e(s, {
    marginY: 1,
    children: r(YR, {
      color: "permission",
      title: "Authentication",
      children: [u, i]
    })
  }), a[7] = u, a[8] = i, a[9] = g;
  else g = a[9];
  return g
}

function So(a) {
  let i = S(10),
    {
      message: f,
      bold: t,
      dimColor: C,
      subtitle: m
    } = a,
    d = t === void 0 ? !1 : t,
    u = C === void 0 ? !1 : C,
    g;
  if (i[0] === w) g = e(Oa, {}), i[0] = g;
  else g = i[0];
  let l;
  if (i[1] !== d || i[2] !== u || i[3] !== f) l = r(s, {
    flexDirection: "row",
    children: [g, r(n, {
      bold: d,
      dimColor: u,
      children: [" ", f]
    })]
  }), i[1] = d, i[2] = u, i[3] = f, i[4] = l;
  else l = i[4];
  let c;
  if (i[5] !== m) c = m && e(n, {
    dimColor: !0,
    children: m
  }), i[5] = m, i[6] = c;
  else c = i[6];
  let p;
  if (i[7] !== l || i[8] !== c) p = r(s, {
    flexDirection: "column",
    children: [l, c]
  }), i[7] = l, i[8] = c, i[9] = p;
  else p = i[9];
  return p
}
export {
  Dvt,
  So
};
