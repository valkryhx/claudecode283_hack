// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { KHe, Ndn, _we, nme, unt, K2n, pnt, rme, q2n, yxe, Y2n, bwe, ome, _xe, Kte } from "B:/~BUN/root/chunk-3cca501e.js";
import { r$e, VR, mjt } from "B:/~BUN/root/chunk-67erjrg5.js";
import { hS, mG } from "B:/~BUN/root/chunk-99vcrndq.js";
import { dY } from "B:/~BUN/root/chunk-6wyrmmex.js";
var z = "__lodash_hash_undefined__";
function V(r) {
  return this.__data__.set(r, z), this;
}
var I = V;
function j(r) {
  return this.__data__.has(r);
}
var h = j;
function O(r) {
  var e = -1,
    n = r == null ? 0 : r.length;
  this.__data__ = new mjt();
  while (++e < n) this.add(r[e]);
}
O.prototype.add = O.prototype.push = I;
O.prototype.has = h;
var Ddn = O;
function k(r, e) {
  var n = -1,
    t = r == null ? 0 : r.length;
  while (++n < t) if (e(r[n], n, r)) return !0;
  return !1;
}
var M = k;
function rr(r, e) {
  return r.has(e);
}
var Ldn = rr;
var er = 1,
  nr = 2;
function tr(r, e, n, t, i, f) {
  var a = n & er,
    o = r.length,
    p = e.length;
  if (o != p && !(a && p > o)) return !1;
  var m = f.get(r),
    s = f.get(e);
  if (m && s) return m == e && s == r;
  var l = -1,
    u = !0,
    A = n & nr ? new Ddn() : void 0;
  f.set(r, e), f.set(e, r);
  while (++l < o) {
    var d = r[l],
      g = e[l];
    if (t) var _ = a ? t(g, d, l, e, r, f) : t(d, g, l, r, e, f);
    if (_ !== void 0) {
      if (_) continue;
      u = !1;
      break;
    }
    if (A) {
      if (!M(e, function (y, v) {
        if (!Ldn(A, v) && (d === y || i(d, y, n, t, f))) return A.push(v);
      })) {
        u = !1;
        break;
      }
    } else if (!(d === g || i(d, g, n, t, f))) {
      u = !1;
      break;
    }
  }
  return f.delete(r), f.delete(e), u;
}
var T = tr;
function fr(r) {
  var e = -1,
    n = Array(r.size);
  return r.forEach(function (item, index) {
    n[++e] = [index, item];
  }), n;
}
var C = fr;
function ir(r) {
  var e = -1,
    n = Array(r.size);
  return r.forEach(function (item) {
    n[++e] = item;
  }), n;
}
var G2n = ir;
var ar = 1,
  or = 2,
  ur = "[object Boolean]",
  pr = "[object Date]",
  mr = "[object Error]",
  lr = "[object Map]",
  sr = "[object Number]",
  dr = "[object RegExp]",
  gr = "[object Set]",
  Ar = "[object String]",
  _r = "[object Symbol]",
  yr = "[object ArrayBuffer]",
  vr = "[object DataView]",
  D = dY ? dY.prototype : void 0,
  R = D ? D.valueOf : void 0;
function xr(r, e, n, t, i, f, a) {
  switch (n) {
    case vr:
      if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset) return !1;
      r = r.buffer, e = e.buffer;
    case yr:
      if (r.byteLength != e.byteLength || !f(new Ndn(r), new Ndn(e))) return !1;
      return !0;
    case ur:
    case pr:
    case sr:
      return r$e(+r, +e);
    case mr:
      return r.name == e.name && r.message == e.message;
    case dr:
    case Ar:
      return r == e + "";
    case lr:
      var o = C;
    case gr:
      var p = t & ar;
      if (o || (o = G2n), r.size != e.size && !p) return !1;
      var m = a.get(r);
      if (m) return m == e;
      t |= or, a.set(r, e);
      var s = T(o(r), o(e), t, i, f, a);
      return a.delete(r), s;
    case _r:
      if (R) return R.call(r) == R.call(e);
  }
  return !1;
}
var c = xr;
var Pr = 1,
  Or = Object.prototype,
  Tr = Or.hasOwnProperty;
function Er(r, e, n, t, i, f) {
  var a = n & Pr,
    o = q2n(r),
    p = o.length,
    m = q2n(e),
    s = m.length;
  if (p != s && !a) return !1;
  var l = p;
  while (l--) {
    var u = o[l];
    if (!(a ? u in e : Tr.call(e, u))) return !1;
  }
  var A = f.get(r),
    d = f.get(e);
  if (A && d) return A == e && d == r;
  var g = !0;
  f.set(r, e), f.set(e, r);
  var _ = a;
  while (++l < p) {
    u = o[l];
    var y = r[u],
      v = e[u];
    if (t) var S = a ? t(v, y, u, e, r, f) : t(y, v, u, r, e, f);
    if (!(S === void 0 ? y === v || i(y, v, n, t, f) : S)) {
      g = !1;
      break;
    }
    _ || (_ = u == "constructor");
  }
  if (g && !_) {
    var x = r.constructor,
      P = e.constructor;
    if (x != P && "constructor" in r && "constructor" in e && !(typeof x == "function" && x instanceof x && typeof P == "function" && P instanceof P)) g = !1;
  }
  return f.delete(r), f.delete(e), g;
}
var G = Er;
var wr = 1,
  q = "[object Arguments]",
  H = "[object Array]",
  E = "[object Object]",
  Lr = Object.prototype,
  b = Lr.hasOwnProperty;
function Rr(r, e, n, t, i, f) {
  var a = hS(r),
    o = hS(e),
    p = a ? H : yxe(r),
    m = o ? H : yxe(e);
  p = p == q ? E : p, m = m == q ? E : m;
  var s = p == E,
    l = m == E,
    u = p == m;
  if (u && nme(r)) {
    if (!nme(e)) return !1;
    a = !0, s = !1;
  }
  if (u && !s) return f || (f = new KHe()), a || pnt(r) ? T(r, e, n, t, i, f) : c(r, e, p, n, t, i, f);
  if (!(n & wr)) {
    var A = s && b.call(r, "__wrapped__"),
      d = l && b.call(e, "__wrapped__");
    if (A || d) {
      var g = A ? r.value() : r,
        _ = d ? e.value() : e;
      return f || (f = new KHe()), i(g, _, n, t, f);
    }
  }
  if (!u) return !1;
  return f || (f = new KHe()), G(r, e, n, t, i, f);
}
var N = Rr;
function B(r, e, n, t, i) {
  if (r === e) return !0;
  if (r == null || e == null || !mG(r) && !mG(e)) return r !== r && e !== e;
  return N(r, e, n, t, B, i);
}
var V2n = B;
var Sr = 1,
  Ir = 2;
function hr(r, e, n, t) {
  var i = n.length,
    f = i,
    a = !t;
  if (r == null) return !f;
  r = Object(r);
  while (i--) {
    var o = n[i];
    if (a && o[2] ? o[1] !== r[o[0]] : !(o[0] in r)) return !1;
  }
  while (++i < f) {
    o = n[i];
    var p = o[0],
      m = r[p],
      s = o[1];
    if (a && o[2]) {
      if (m === void 0 && !(p in r)) return !1;
    } else {
      var l = new KHe();
      if (t) var u = t(m, s, p, r, e, l);
      if (!(u === void 0 ? V2n(s, m, Sr | Ir, t, l) : u)) return !1;
    }
  }
  return !0;
}
var F = hr;
function Mr(r) {
  return r === r && !VR(r);
}
var w = Mr;
function Cr(r) {
  var e = rme(r),
    n = e.length;
  while (n--) {
    var t = e[n],
      i = r[t];
    e[n] = [t, i, w(i)];
  }
  return e;
}
var K = Cr;
function Dr(r, e) {
  return function (n) {
    if (n == null) return !1;
    return n[r] === e && (e !== void 0 || r in Object(n));
  };
}
var L = Dr;
function cr(r) {
  var e = K(r);
  if (e.length == 1 && e[0][2]) return L(e[0][0], e[0][1]);
  return function (n) {
    return n === r || F(n, r, e);
  };
}
var U = cr;
function Gr(r, e, n) {
  var t = r == null ? void 0 : _xe(r, e);
  return t === void 0 ? n : t;
}
var yae = Gr;
function qr(r, e) {
  return r != null && e in Object(r);
}
var J = qr;
function Hr(r, e, n) {
  e = bwe(e, r);
  var t = -1,
    i = e.length,
    f = !1;
  while (++t < i) {
    var a = ome(e[t]);
    if (!(f = r != null && n(r, a))) break;
    r = r[a];
  }
  if (f || ++t != i) return f;
  return i = r == null ? 0 : r.length, !!i && K2n(i) && unt(a, i) && (hS(r) || _we(r));
}
var Q = Hr;
function br(r, e) {
  return r != null && Q(r, e, J);
}
var oPo = br;
var Nr = 1,
  Br = 2;
function Fr(r, e) {
  if (Y2n(r) && w(e)) return L(ome(r), e);
  return function (n) {
    var t = yae(n, r);
    return t === void 0 && t === e ? oPo(n, r) : V2n(e, t, Nr | Br);
  };
}
var X = Fr;
function Kr(r) {
  return function (e) {
    return e == null ? void 0 : e[r];
  };
}
var Y = Kr;
function Ur(r) {
  return function (e) {
    return _xe(e, r);
  };
}
var Z = Ur;
function Jr(r) {
  return Y2n(r) ? Y(ome(r)) : Z(r);
}
var W = Jr;
function Qr(r) {
  if (typeof r == "function") return r;
  if (r == null) return Kte;
  if (typeof r == "object") return hS(r) ? X(r[0], r[1]) : U(r);
  return W(r);
}
var AT = Qr;
export { Ddn, Ldn, G2n, V2n, yae, oPo, AT };