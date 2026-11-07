// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Fdn,
  sPo,
  aPo,
  Hdn,
  lPo,
  mnt,
  dPo,
  Vte
} from "B:/~BUN/root/chunk-3cca501e.js";
import {
  r$e,
  VR,
  dme
} from "B:/~BUN/root/chunk-67erjrg5.js";
var a = dPo(Object.getPrototypeOf, Object),
  z2n = a;
var f = function() {
    try {
      var r = dme(Object, "defineProperty");
      return r({}, "", {}), r
    } catch (t) {}
  }(),
  W2n = f;

function p(r, t, e) {
  if (t == "__proto__" && W2n) W2n(r, t, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  });
  else r[t] = e
}
var hae = p;
var m = Object.prototype,
  s = m.hasOwnProperty;

function u(r, t, e) {
  var o = r[t];
  if (!(s.call(r, t) && r$e(o, e)) || e === void 0 && !(t in r)) hae(r, t, e)
}
var cnt = u;

function l(r) {
  var t = [];
  if (r != null)
    for (var e in Object(r)) t.push(e);
  return t
}
var i = l;
var y = Object.prototype,
  v = y.hasOwnProperty;

function P(r) {
  if (!VR(r)) return i(r);
  var t = mnt(r),
    e = [];
  for (var o in r)
    if (!(o == "constructor" && (t || !v.call(r, o)))) e.push(o);
  return e
}
var n = P;

function d(r) {
  return Vte(r) ? lPo(r, !0) : n(r)
}
var Iqe = d;
var g = Object.getOwnPropertySymbols,
  O = !g ? aPo : function(r) {
    var t = [];
    while (r) Fdn(t, Hdn(r)), r = z2n(r);
    return t
  },
  rPo = O;

function b(r) {
  return sPo(r, Iqe, rPo)
}
var Mdn = b;
export {
  W2n,
  hae,
  cnt,
  z2n,
  rPo,
  Iqe,
  Mdn
};
