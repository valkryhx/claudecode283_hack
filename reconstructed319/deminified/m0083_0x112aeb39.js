// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { W2n, hae, cnt, z2n, rPo, Iqe, Mdn } from "B:/~BUN/root/chunk-0mf55a06.js";
import { KHe, Ndn, Fdn, Hdn, _we, nme, qHe, fnt, mnt, rme, q2n, yxe, bwe, ome, _xe, Kte } from "B:/~BUN/root/chunk-3cca501e.js";
import { VR } from "B:/~BUN/root/chunk-67erjrg5.js";
import { l7, hS, mG } from "B:/~BUN/root/chunk-99vcrndq.js";
import { gG, dY, Tae } from "B:/~BUN/root/chunk-6wyrmmex.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var b = {};
Rr(b, {
  default: () => B0r
});
var lr = "[object Object]",
  cr = Function.prototype,
  ur = Object.prototype,
  A = cr.toString,
  sr = ur.hasOwnProperty,
  gr = A.call(Object);
function br(r) {
  if (!mG(r) || Tae(r) != lr) return !1;
  var t = z2n(r);
  if (t === null) return !0;
  var e = sr.call(t, "constructor") && t.constructor;
  return typeof e == "function" && e instanceof e && A.call(e) == gr;
}
var $Se = br;
function dr(r, t) {
  var e = -1,
    n = r == null ? 0 : r.length;
  while (++e < n) if (t(r[e], e, r) === !1) break;
  return r;
}
var O = dr;
function yr(r, t, e, n) {
  var o = !e;
  e || (e = {});
  var i = -1,
    a = t.length;
  while (++i < a) {
    var m = t[i],
      p = n ? n(e[m], r[m], m, e, r) : void 0;
    if (p === void 0) p = r[m];
    if (o) hae(e, m, p);else cnt(e, m, p);
  }
  return e;
}
var pHe = yr;
function Tr(r, t) {
  return r && pHe(t, rme(t), r);
}
var h = Tr;
function xr(r, t) {
  return r && pHe(t, Iqe(t), r);
}
var v = xr;
var I = typeof b == "object" && b && !b.nodeType && b,
  S = I && typeof g == "object" && g && !g.nodeType && g,
  jr = S && S.exports === I,
  w = jr ? gG.Buffer : void 0,
  C = w ? w.allocUnsafe : void 0;
function Ar(r, t) {
  if (t) return r.slice();
  var e = r.length,
    n = C ? C(e) : new r.constructor(e);
  return r.copy(n), n;
}
var B0r = Ar;
function Or(r, t) {
  var e = -1,
    n = r.length;
  t || (t = Array(n));
  while (++e < n) t[e] = r[e];
  return t;
}
var eRo = Or;
function hr(r, t) {
  return pHe(r, Hdn(r), t);
}
var P = hr;
function vr(r, t) {
  return pHe(r, rPo(r), t);
}
var F = vr;
var Sr = Object.prototype,
  wr = Sr.hasOwnProperty;
function Cr(r) {
  var t = r.length,
    e = new r.constructor(t);
  if (t && typeof r[0] == "string" && wr.call(r, "index")) e.index = r.index, e.input = r.input;
  return e;
}
var _ = Cr;
function Ir(r) {
  var t = new r.constructor(r.byteLength);
  return new Ndn(t).set(new Ndn(r)), t;
}
var s = Ir;
function Pr(r, t) {
  var e = t ? s(r.buffer) : r.buffer;
  return new r.constructor(e, r.byteOffset, r.byteLength);
}
var E = Pr;
var Fr = /\w*$/;
function _r(r) {
  var t = new r.constructor(r.source, Fr.exec(r));
  return t.lastIndex = r.lastIndex, t;
}
var L = _r;
var U = dY ? dY.prototype : void 0,
  B = U ? U.valueOf : void 0;
function Er(r) {
  return B ? Object(B.call(r)) : {};
}
var M = Er;
function Lr(r, t) {
  var e = t ? s(r.buffer) : r.buffer;
  return new r.constructor(e, r.byteOffset, r.length);
}
var ZCo = Lr;
var Ur = "[object Boolean]",
  Br = "[object Date]",
  Mr = "[object Map]",
  Nr = "[object Number]",
  Dr = "[object RegExp]",
  Gr = "[object Set]",
  Kr = "[object String]",
  Hr = "[object Symbol]",
  Yr = "[object ArrayBuffer]",
  Wr = "[object DataView]",
  $r = "[object Float32Array]",
  qr = "[object Float64Array]",
  Jr = "[object Int8Array]",
  Qr = "[object Int16Array]",
  Vr = "[object Int32Array]",
  Xr = "[object Uint8Array]",
  Zr = "[object Uint8ClampedArray]",
  zr = "[object Uint16Array]",
  kr = "[object Uint32Array]";
function rt(r, t, e) {
  var n = r.constructor;
  switch (t) {
    case Yr:
      return s(r);
    case Ur:
    case Br:
      return new n(+r);
    case Wr:
      return E(r, e);
    case $r:
    case qr:
    case Jr:
    case Qr:
    case Vr:
    case Xr:
    case Zr:
    case zr:
    case kr:
      return ZCo(r, e);
    case Mr:
      return new n();
    case Nr:
    case Kr:
      return new n(r);
    case Dr:
      return L(r);
    case Gr:
      return new n();
    case Hr:
      return M(r);
  }
}
var N = rt;
var D = Object.create,
  tt = function () {
    function r() {}
    return function (t) {
      if (!VR(t)) return {};
      if (D) return D(t);
      r.prototype = t;
      var e = new r();
      return r.prototype = void 0, e;
    };
  }(),
  G = tt;
function et(r) {
  return typeof r.constructor == "function" && !mnt(r) ? G(z2n(r)) : {};
}
var tRo = et;
var ot = "[object Map]";
function nt(r) {
  return mG(r) && yxe(r) == ot;
}
var R = nt;
var K = fnt && fnt.isMap,
  it = K ? qHe(K) : R,
  H = it;
var ft = "[object Set]";
function at(r) {
  return mG(r) && yxe(r) == ft;
}
var Y = at;
var W = fnt && fnt.isSet,
  mt = W ? qHe(W) : Y,
  q = mt;
var pt = 1,
  lt = 2,
  ct = 4,
  J = "[object Arguments]",
  ut = "[object Array]",
  st = "[object Boolean]",
  gt = "[object Date]",
  bt = "[object Error]",
  Q = "[object Function]",
  dt = "[object GeneratorFunction]",
  yt = "[object Map]",
  Tt = "[object Number]",
  V = "[object Object]",
  xt = "[object RegExp]",
  jt = "[object Set]",
  At = "[object String]",
  Ot = "[object Symbol]",
  ht = "[object WeakMap]",
  vt = "[object ArrayBuffer]",
  St = "[object DataView]",
  wt = "[object Float32Array]",
  Ct = "[object Float64Array]",
  It = "[object Int8Array]",
  Pt = "[object Int16Array]",
  Ft = "[object Int32Array]",
  _t = "[object Uint8Array]",
  Et = "[object Uint8ClampedArray]",
  Lt = "[object Uint16Array]",
  Ut = "[object Uint32Array]",
  f = {};
f[J] = f[ut] = f[vt] = f[St] = f[st] = f[gt] = f[wt] = f[Ct] = f[It] = f[Pt] = f[Ft] = f[yt] = f[Tt] = f[V] = f[xt] = f[jt] = f[At] = f[Ot] = f[_t] = f[Et] = f[Lt] = f[Ut] = !0;
f[bt] = f[Q] = f[ht] = !1;
function d(r, t, e, n, o, i) {
  var a,
    m = t & pt,
    p = t & lt,
    mr = t & ct;
  if (e) a = o ? e(r, n, o, i) : e(r);
  if (a !== void 0) return a;
  if (!VR(r)) return r;
  var y = hS(r);
  if (y) {
    if (a = _(r), !m) return eRo(r, a);
  } else {
    var u = yxe(r),
      T = u == Q || u == dt;
    if (nme(r)) return B0r(r, m);
    if (u == V || u == J || T && !o) {
      if (a = p || T ? {} : tRo(r), !m) return p ? F(r, v(a, r)) : P(r, h(a, r));
    } else {
      if (!f[u]) return o ? r : {};
      a = N(r, u, m);
    }
  }
  i || (i = new KHe());
  var x = i.get(r);
  if (x) return x;
  if (i.set(r, a), q(r)) r.forEach(function (item) {
    a.add(d(item, t, e, item, r, i));
  });else if (H(r)) r.forEach(function (item, index) {
    a.set(index, d(item, t, e, index, r, i));
  });
  var pr = mr ? p ? Mdn : q2n : p ? Iqe : rme,
    j = y ? void 0 : pr(r);
  return O(j || r, function (l, c) {
    if (j) c = l, l = r[c];
    cnt(a, c, d(l, t, e, c, r, i));
  }), a;
}
var X = d;
function Bt(r) {
  var t = r == null ? 0 : r.length;
  return t ? r[t - 1] : void 0;
}
var dM = Bt;
function Mt(r, t, e) {
  var n = -1,
    o = r.length;
  if (t < 0) t = -t > o ? 0 : o + t;
  if (e = e > o ? o : e, e < 0) e += o;
  o = t > e ? 0 : e - t >>> 0, t >>>= 0;
  var i = Array(o);
  while (++n < o) i[n] = r[n + t];
  return i;
}
var OKe = Mt;
function Nt(r, t) {
  return t.length < 2 ? r : _xe(r, OKe(t, 0, -1));
}
var Z = Nt;
var Dt = Object.prototype,
  Gt = Dt.hasOwnProperty;
function Rt(r, t) {
  t = bwe(t, r);
  var e = -1,
    n = t.length;
  if (!n) return !0;
  while (++e < n) {
    var o = ome(t[e]);
    if (o === "__proto__" && !Gt.call(r, "__proto__")) return !1;
    if ((o === "constructor" || o === "prototype") && e < n - 1) return !1;
  }
  var i = Z(r, t);
  return i == null || delete i[ome(dM(t))];
}
var oRo = Rt;
function Kt(r) {
  return $Se(r) ? void 0 : r;
}
var z = Kt;
var k = dY ? dY.isConcatSpreadable : void 0;
function Ht(r) {
  return hS(r) || _we(r) || !!(k && r && r[k]);
}
var rr = Ht;
function tr(r, t, e, n, o) {
  var i = -1,
    a = r.length;
  e || (e = rr), o || (o = []);
  while (++i < a) {
    var m = r[i];
    if (t > 0 && e(m)) {
      if (t > 1) tr(m, t - 1, e, n, o);else Fdn(o, m);
    } else if (!n) o[o.length] = m;
  }
  return o;
}
var $an = tr;
function Yt(r) {
  var t = r == null ? 0 : r.length;
  return t ? $an(r, 1) : [];
}
var er = Yt;
function Wt(r, t, e) {
  switch (e.length) {
    case 0:
      return r.call(t);
    case 1:
      return r.call(t, e[0]);
    case 2:
      return r.call(t, e[0], e[1]);
    case 3:
      return r.call(t, e[0], e[1], e[2]);
  }
  return r.apply(t, e);
}
var or = Wt;
var nr = Math.max;
function $t(r, t, e) {
  return t = nr(t === void 0 ? r.length - 1 : t, 0), function () {
    var n = arguments,
      o = -1,
      i = nr(n.length - t, 0),
      a = Array(i);
    while (++o < i) a[o] = n[t + o];
    o = -1;
    var m = Array(t + 1);
    while (++o < t) m[o] = n[o];
    return m[t] = e(a), or(r, this, m);
  };
}
var nRo = $t;
function qt(r) {
  return function () {
    return r;
  };
}
var ir = qt;
var Jt = !W2n ? Kte : function (r, t) {
    return W2n(r, "toString", {
      configurable: !0,
      enumerable: !1,
      value: ir(t),
      writable: !0
    });
  },
  fr = Jt;
var Qt = 800,
  Vt = 16,
  Xt = Date.now;
function Zt(r) {
  var t = 0,
    e = 0;
  return function () {
    var n = Xt(),
      o = Vt - (n - e);
    if (e = n, o > 0) {
      if (++t >= Qt) return arguments[0];
    } else t = 0;
    return r.apply(void 0, arguments);
  };
}
var ar = Zt;
var zt = ar(fr),
  rRo = zt;
function kt(r) {
  return rRo(nRo(r, void 0, er), r + "");
}
var sRo = kt;
var re = 1,
  te = 2,
  ee = 4,
  oe = sRo(function (r, t) {
    var e = {};
    if (r == null) return e;
    var n = !1;
    if (t = l7(t, function (i) {
      return i = bwe(i, r), n || (n = i.length > 1), i;
    }), pHe(r, Mdn(r), e), n) e = X(e, re | te | ee, z);
    var o = t.length;
    while (o--) oRo(e, t[o]);
    return e;
  }),
  vo = oe;
export { B0r, ZCo, eRo, tRo, $Se, pHe, nRo, rRo, dM, OKe, oRo, $an, sRo, vo };