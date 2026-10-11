// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  D6
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  s,
  n,
  bt
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  ic
} from "B:/~BUN/root/chunk-a3pp6jsm.js";
import {
  ko
} from "B:/~BUN/root/chunk-v1xd9kf3.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  R,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function T(c, I) {
  let p = c.match(b);
  if (!p) {
    return e(n, {
      dimColor: !0,
      children: c
    }, I)
  }
  let h = p[0];
  let B = p.index ?? 0;
  let q = c.slice(0, B);
  let v = c.slice(B + h.length);
  return r(n, {
    dimColor: !0,
    children: [q, e(bt, {
      url: h,
      children: h
    }), v]
  }, I)
}
var b = /https?:\/\/\S+/;

function P1e() {
  let u = w(10),
    y;
  if (u[0] === S) y = D6.getInstance().getStatus(), u[0] = y;
  else y = u[0];
  let [t, Y] = g(y), A, k;
  if (u[1] === S) A = () => D6.getInstance().subscribe(Y), k = [], u[1] = A, u[2] = k;
  else A = u[1], k = u[2];
  if (R(A, k), !t.isAuthenticating && !t.error && t.output.length === 0) {
    return null
  }
  if (!t.isAuthenticating && !t.error) {
    return null
  }
  let a;
  if (u[3] !== t.output) a = t.output.length > 0 && e(s, {
    flexDirection: "column",
    children: t.output.slice(-5).map(T)
  }), u[3] = t.output, u[4] = a;
  else a = u[4];
  let l;
  if (u[5] !== t.error) l = t.error && e(ko, {
    error: t.error
  }), u[5] = t.error, u[6] = l;
  else l = u[6];
  let C;
  if (u[7] !== a || u[8] !== l) C = e(s, {
    marginY: 1,
    children: r(ic, {
      color: "permission",
      title: "Authentication",
      children: [a, l]
    })
  }), u[7] = a, u[8] = l, u[9] = C;
  else C = u[9];
  return C
}
export {
  P1e
};
