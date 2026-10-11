// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { wmt, e8n, n8n, vmt, hBe, r8n, kmt, o8n, Ode, Mde, Exe, pre, oQ, _Be, uH } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Vde, Vw } from "B:/~BUN/root/chunk-54p0h65d.js";
var v = Object.prototype,
  d = v.hasOwnProperty;
function g(r, t, e) {
  var o = r[t];
  if (!(d.call(r, t) && Vde(o, e)) || e === void 0 && !(t in r)) Mde(r, t, e);
}
var ZUe = g;
function P(r, t, e, o) {
  if (!Vw(r)) return r;
  t = pre(t, r);
  var i = -1,
    m = t.length,
    s = m - 1,
    n = r;
  while (n != null && ++i < m) {
    var f = oQ(t[i]),
      a = e;
    if (f === "__proto__" || f === "constructor" || f === "prototype") return r;
    if (i != s) {
      var p = n[f];
      if (a = o ? o(p, f, n) : void 0, a === void 0) a = Vw(p) ? p : hBe(t[i + 1]) ? [] : {};
    }
    ZUe(n, f, a), n = n[f];
  }
  return r;
}
var u = P;
function x(r, t, e) {
  var o = -1,
    i = t.length,
    m = {};
  while (++o < i) {
    var s = t[o],
      n = _Be(r, s);
    if (e(n, s)) u(m, pre(s, r), n);
  }
  return m;
}
var _5n = x;
var O = o8n(Object.getPrototypeOf, Object),
  n1t = O;
var I = Object.getOwnPropertySymbols,
  h = !I ? n8n : function (r) {
    var t = [];
    while (r) wmt(t, vmt(r)), r = n1t(r);
    return t;
  },
  b5n = h;
function K(r) {
  var t = [];
  if (r != null) for (var e in Object(r)) t.push(e);
  return t;
}
var l = K;
var c = Object.prototype,
  A = c.hasOwnProperty;
function S(r) {
  if (!Vw(r)) return l(r);
  var t = kmt(r),
    e = [];
  for (var o in r) if (!(o == "constructor" && (t || !A.call(r, o)))) e.push(o);
  return e;
}
var y = S;
function w(r) {
  return Ode(r) ? r8n(r, !0) : y(r);
}
var axe = w;
function b(r) {
  return e8n(r, axe, b5n);
}
var r1t = b;
function _(r, t) {
  if (r == null) return {};
  var e = Exe(r1t(r), function (o) {
    return [o];
  });
  return t = uH(t), _5n(r, e, function (o, i) {
    return t(o, i[0]);
  });
}
var Qr = _;
export { ZUe, _5n, n1t, b5n, axe, r1t, Qr };