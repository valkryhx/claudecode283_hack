// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { fjt, qdn, XSt, dme, pjt, mjt, po } from "B:/~BUN/root/chunk-67erjrg5.js";
import { hS, mG, hG, mme } from "B:/~BUN/root/chunk-99vcrndq.js";
import { $Po, gG, Tae } from "B:/~BUN/root/chunk-6wyrmmex.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var g = {};
Rr(g, {
  default: () => nme
});
var x = {};
Rr(x, {
  default: () => fnt
});
var X = Object.prototype;
function Z(r) {
  var t = r && r.constructor,
    e = typeof t == "function" && t.prototype || X;
  return r === e;
}
var mnt = Z;
function q(r, t) {
  return function (e) {
    return r(t(e));
  };
}
var dPo = q;
var H = dPo(Object.keys, Object),
  v = H;
var Y = Object.prototype,
  J = Y.hasOwnProperty;
function Q(r) {
  if (!mnt(r)) return v(r);
  var t = [];
  for (var e in Object(r)) if (J.call(r, e) && e != "constructor") t.push(e);
  return t;
}
var cPo = Q;
var rr = dme(gG, "DataView"),
  c = rr;
var tr = dme(gG, "Promise"),
  l = tr;
var er = dme(gG, "Set"),
  ojt = er;
var or = dme(gG, "WeakMap"),
  d = or;
var j = "[object Map]",
  ar = "[object Object]",
  _ = "[object Promise]",
  w = "[object Set]",
  P = "[object WeakMap]",
  I = "[object DataView]",
  ir = XSt(c),
  nr = XSt(pjt),
  fr = XSt(l),
  pr = XSt(ojt),
  sr = XSt(d),
  p = Tae;
if (c && p(new c(new ArrayBuffer(1))) != I || pjt && p(new pjt()) != j || l && p(l.resolve()) != _ || ojt && p(new ojt()) != w || d && p(new d()) != P) p = function (r) {
  var t = Tae(r),
    e = t == ar ? r.constructor : void 0,
    o = e ? XSt(e) : "";
  if (o) switch (o) {
    case ir:
      return I;
    case nr:
      return j;
    case fr:
      return _;
    case pr:
      return w;
    case sr:
      return P;
  }
  return t;
};
var yxe = p;
var mr = "[object Arguments]";
function ur(r) {
  return mG(r) && Tae(r) == mr;
}
var T = ur;
var S = Object.prototype,
  {
    hasOwnProperty: hasOwnProperty,
    propertyIsEnumerable: propertyIsEnumerable
  } = S,
  dr = T(function () {
    return arguments;
  }()) ? T : function (r) {
    return mG(r) && hasOwnProperty.call(r, "callee") && !propertyIsEnumerable.call(r, "callee");
  },
  _we = dr;
var yr = 9007199254740991;
function gr(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= yr;
}
var K2n = gr;
function br(r) {
  return r != null && K2n(r.length) && !qdn(r);
}
var Vte = br;
function xr() {
  return !1;
}
var O = xr;
var k = typeof g == "object" && g && !g.nodeType && g,
  E = k && typeof y == "object" && y && !y.nodeType && y,
  hr = E && E.exports === k,
  M = hr ? gG.Buffer : void 0,
  Tr = M ? M.isBuffer : void 0,
  Ar = Tr || O,
  nme = Ar;
var vr = "[object Arguments]",
  jr = "[object Array]",
  _r = "[object Boolean]",
  wr = "[object Date]",
  Pr = "[object Error]",
  Ir = "[object Function]",
  Sr = "[object Map]",
  Or = "[object Number]",
  Er = "[object Object]",
  Mr = "[object RegExp]",
  kr = "[object Set]",
  Cr = "[object String]",
  Lr = "[object WeakMap]",
  zr = "[object ArrayBuffer]",
  Gr = "[object DataView]",
  Kr = "[object Float32Array]",
  Br = "[object Float64Array]",
  Fr = "[object Int8Array]",
  Ur = "[object Int16Array]",
  Nr = "[object Int32Array]",
  Dr = "[object Uint8Array]",
  Vr = "[object Uint8ClampedArray]",
  Wr = "[object Uint16Array]",
  $r = "[object Uint32Array]",
  a = {};
a[Kr] = a[Br] = a[Fr] = a[Ur] = a[Nr] = a[Dr] = a[Vr] = a[Wr] = a[$r] = !0;
a[vr] = a[jr] = a[zr] = a[_r] = a[Gr] = a[wr] = a[Pr] = a[Ir] = a[Sr] = a[Or] = a[Er] = a[Mr] = a[kr] = a[Cr] = a[Lr] = !1;
function Xr(r) {
  return mG(r) && K2n(r.length) && !!a[Tae(r)];
}
var C = Xr;
function Zr(r) {
  return function (t) {
    return r(t);
  };
}
var qHe = Zr;
var L = typeof x == "object" && x && !x.nodeType && x,
  u = L && typeof b == "object" && b && !b.nodeType && b,
  qr = u && u.exports === L,
  A = qr && $Po.process,
  Hr = function () {
    try {
      var r = u && u.require && u.require("util").types;
      if (r) return r;
      return A && A.binding && A.binding("util");
    } catch (error) {}
  }(),
  fnt = Hr;
var z = fnt && fnt.isTypedArray,
  Yr = z ? qHe(z) : C,
  pnt = Yr;
function Jr() {
  this.__data__ = new fjt(), this.size = 0;
}
var G = Jr;
function Qr(r) {
  var t = this.__data__,
    e = t.delete(r);
  return this.size = t.size, e;
}
var K = Qr;
function rt(r) {
  return this.__data__.get(r);
}
var B = rt;
function tt(r) {
  return this.__data__.has(r);
}
var F = tt;
var et = 200;
function ot(r, t) {
  var e = this.__data__;
  if (e instanceof fjt) {
    var o = e.__data__;
    if (!pjt || o.length < et - 1) return o.push([r, t]), this.size = ++e.size, this;
    e = this.__data__ = new mjt(o);
  }
  return e.set(r, t), this.size = e.size, this;
}
var U = ot;
function s(r) {
  var t = this.__data__ = new fjt(r);
  this.size = t.size;
}
s.prototype.clear = G;
s.prototype.delete = K;
s.prototype.get = B;
s.prototype.has = F;
s.prototype.set = U;
var KHe = s;
var at = gG.Uint8Array,
  Ndn = at;
function it(r, t) {
  var e = -1,
    o = t.length,
    i = r.length;
  while (++e < o) r[i + e] = t[e];
  return r;
}
var Fdn = it;
function nt(r, t, e) {
  var o = t(r);
  return hS(r) ? o : Fdn(o, e(r));
}
var sPo = nt;
function ft(r, t) {
  var e = -1,
    o = r == null ? 0 : r.length,
    i = 0,
    f = [];
  while (++e < o) {
    var m = r[e];
    if (t(m, e, r)) f[i++] = m;
  }
  return f;
}
var iPo = ft;
function pt() {
  return [];
}
var aPo = pt;
var st = Object.prototype,
  mt = st.propertyIsEnumerable,
  N = Object.getOwnPropertySymbols,
  ut = !N ? aPo : function (r) {
    if (r == null) return [];
    return r = Object(r), iPo(N(r), function (t) {
      return mt.call(r, t);
    });
  },
  Hdn = ut;
function ct(r, t) {
  var e = -1,
    o = Array(r);
  while (++e < r) o[e] = t(e);
  return o;
}
var D = ct;
var lt = 9007199254740991,
  dt = /^(?:0|[1-9]\d*)$/;
function yt(r, t) {
  var e = typeof r;
  return t = t == null ? lt : t, !!t && (e == "number" || e != "symbol" && dt.test(r)) && r > -1 && r % 1 == 0 && r < t;
}
var unt = yt;
var gt = Object.prototype,
  bt = gt.hasOwnProperty;
function xt(r, t) {
  var e = hS(r),
    o = !e && _we(r),
    i = !e && !o && nme(r),
    f = !e && !o && !i && pnt(r),
    m = e || o || i || f,
    h = m ? D(r.length, String) : [],
    W = h.length;
  for (var n in r) if ((t || bt.call(r, n)) && !(m && (n == "length" || i && (n == "offset" || n == "parent") || f && (n == "buffer" || n == "byteLength" || n == "byteOffset") || unt(n, W)))) h.push(n);
  return h;
}
var lPo = xt;
function ht(r) {
  return Vte(r) ? lPo(r) : cPo(r);
}
var rme = ht;
function Tt(r) {
  return sPo(r, rme, Hdn);
}
var q2n = Tt;
var At = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  vt = /^\w*$/;
function jt(r, t) {
  if (hS(r)) return !1;
  var e = typeof r;
  if (e == "number" || e == "symbol" || e == "boolean" || r == null || hG(r)) return !0;
  return vt.test(r) || !At.test(r) || t != null && r in Object(t);
}
var Y2n = jt;
var _t = 500;
function wt(r) {
  var t = po(r, function (o) {
      if (e.size === _t) e.clear();
      return o;
    }),
    e = t.cache;
  return t;
}
var V = wt;
var Pt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  It = /\\(\\)?/g,
  St = V(function (r) {
    var t = [];
    if (r.charCodeAt(0) === 46) t.push("");
    return r.replace(Pt, function (e, o, i, f) {
      t.push(i ? f.replace(It, "$1") : o || e);
    }), t;
  }),
  R = St;
function Ot(r, t) {
  if (hS(r)) return r;
  return Y2n(r, t) ? [r] : R(mme(r));
}
var bwe = Ot;
var Et = 1 / 0;
function Mt(r) {
  if (typeof r == "string" || hG(r)) return r;
  var t = r + "";
  return t == "0" && 1 / r == -Et ? "-0" : t;
}
var ome = Mt;
function kt(r, t) {
  t = bwe(t, r);
  var e = 0,
    o = t.length;
  while (r != null && e < o) r = r[ome(t[e++])];
  return e && e == o ? r : void 0;
}
var _xe = kt;
function Ct(r) {
  return r;
}
var Kte = Ct;
export { KHe, Ndn, Fdn, sPo, iPo, aPo, Hdn, _we, nme, unt, K2n, qHe, fnt, pnt, lPo, mnt, dPo, cPo, Vte, rme, q2n, ojt, yxe, Y2n, bwe, ome, _xe, Kte };