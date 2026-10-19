// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vr, are, dV, Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Me } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { uqo, nQn, ESt, W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { oWr } from "B:/~BUN/root/chunk-89mss1tj.js";
import { eCe, RSt, Vjr, l1, cV, Fde, lC, rWt, met, Hde, ASt, oWt, z, eo, $n, w3s, v3s } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Mr } from "B:/~BUN/root/chunk-ef0msk7r.js";
var q = {};
Mr(q, {
  default: () => Xhe
});
var G = {};
Mr(G, {
  default: () => MGe
});
var On = Object.prototype;
function In(e) {
  var t = e && e.constructor,
    o = typeof t == "function" && t.prototype || On;
  return e === o;
}
var DGe = In;
function Fn(e, t) {
  return function (o) {
    return e(t(o));
  };
}
var E1r = Fn;
var En = E1r(Object.keys, Object),
  ot = En;
var Dn = Object.prototype,
  Hn = Dn.hasOwnProperty;
function _n(e) {
  if (!DGe(e)) return ot(e);
  var t = [];
  for (var o in Object(e)) if (Hn.call(e, o) && o != "constructor") t.push(o);
  return t;
}
var T1r = _n;
var Un = Hde(l1, "DataView"),
  H = Un;
var jn = Hde(l1, "Promise"),
  B = jn;
var qn = Hde(l1, "Set"),
  tSt = qn;
var Wn = Hde(l1, "WeakMap"),
  _ = Wn;
var rt = "[object Map]",
  Gn = "[object Object]",
  it = "[object Promise]",
  st = "[object Set]",
  lt = "[object WeakMap]",
  dt = "[object DataView]",
  Kn = met(H),
  Vn = met(ASt),
  Jn = met(B),
  zn = met(tSt),
  Qn = met(_),
  R = Fde;
if (H && R(new H(new ArrayBuffer(1))) != dt || ASt && R(new ASt()) != rt || B && R(B.resolve()) != it || tSt && R(new tSt()) != st || _ && R(new _()) != lt) R = function (e) {
  var t = Fde(e),
    o = t == Gn ? e.constructor : void 0,
    r = o ? met(o) : "";
  if (r) switch (r) {
    case Kn:
      return dt;
    case Vn:
      return rt;
    case Jn:
      return it;
    case zn:
      return st;
    case Qn:
      return lt;
  }
  return t;
};
var UTe = R;
function Yn(e) {
  return e != null && typeof e == "object";
}
var eV = Yn;
var Xn = "[object Arguments]";
function Zn(e) {
  return eV(e) && Fde(e) == Xn;
}
var te = Zn;
var ut = Object.prototype,
  {
    hasOwnProperty: hasOwnProperty,
    propertyIsEnumerable: propertyIsEnumerable
  } = ut,
  oo = te(function () {
    return arguments;
  }()) ? te : function (e) {
    return eV(e) && hasOwnProperty.call(e, "callee") && !propertyIsEnumerable.call(e, "callee");
  },
  $Te = oo;
var ro = Array.isArray,
  KS = ro;
var io = 9007199254740991;
function ao(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= io;
}
var P = ao;
function lo(e) {
  return e != null && P(e.length) && !rWt(e);
}
var Qne = lo;
function uo() {
  return !1;
}
var ct = uo;
var gt = typeof q == "object" && q && !q.nodeType && q,
  pt = gt && typeof U == "object" && U && !U.nodeType && U,
  co = pt && pt.exports === gt,
  ft = co ? l1.Buffer : void 0,
  po = ft ? ft.isBuffer : void 0,
  fo = po || ct,
  Xhe = fo;
var go = "[object Arguments]",
  ho = "[object Array]",
  mo = "[object Boolean]",
  So = "[object Date]",
  yo = "[object Error]",
  bo = "[object Function]",
  ko = "[object Map]",
  Co = "[object Number]",
  xo = "[object Object]",
  Ro = "[object RegExp]",
  To = "[object Set]",
  Po = "[object String]",
  Mo = "[object WeakMap]",
  Ao = "[object ArrayBuffer]",
  wo = "[object DataView]",
  Lo = "[object Float32Array]",
  Oo = "[object Float64Array]",
  Io = "[object Int8Array]",
  Fo = "[object Int16Array]",
  Eo = "[object Int32Array]",
  Do = "[object Uint8Array]",
  Ho = "[object Uint8ClampedArray]",
  Bo = "[object Uint16Array]",
  _o = "[object Uint32Array]",
  S = {};
S[Lo] = S[Oo] = S[Io] = S[Fo] = S[Eo] = S[Do] = S[Ho] = S[Bo] = S[_o] = !0;
S[go] = S[ho] = S[Ao] = S[mo] = S[wo] = S[So] = S[yo] = S[bo] = S[ko] = S[Co] = S[xo] = S[Ro] = S[To] = S[Po] = S[Mo] = !1;
function Uo(e) {
  return eV(e) && P(e.length) && !!S[Fde(e)];
}
var ht = Uo;
function jo(e) {
  return function (t) {
    return e(t);
  };
}
var rgn = jo;
var mt = typeof G == "object" && G && !G.nodeType && G,
  O = mt && typeof N == "object" && N && !N.nodeType && N,
  qo = O && O.exports === mt,
  ne = qo && Vjr.process,
  Wo = function () {
    try {
      var e = O && O.require && O.require("util").types;
      if (e) return e;
      return ne && ne.binding && ne.binding("util");
    } catch (error) {}
  }(),
  MGe = Wo;
var St = MGe && MGe.isTypedArray,
  No = St ? rgn(St) : ht,
  qZe = No;
function Go() {
  this.__data__ = new RSt(), this.size = 0;
}
var yt = Go;
function Ko(e) {
  var t = this.__data__,
    o = t.delete(e);
  return this.size = t.size, o;
}
var vt = Ko;
function Vo(e) {
  return this.__data__.get(e);
}
var bt = Vo;
function Jo(e) {
  return this.__data__.has(e);
}
var kt = Jo;
var zo = 200;
function Qo(e, t) {
  var o = this.__data__;
  if (o instanceof RSt) {
    var r = o.__data__;
    if (!ASt || r.length < zo - 1) return r.push([e, t]), this.size = ++o.size, this;
    o = this.__data__ = new oWt(r);
  }
  return o.set(e, t), this.size = o.size, this;
}
var Ct = Qo;
function M(e) {
  var t = this.__data__ = new RSt(e);
  this.size = t.size;
}
M.prototype.clear = yt;
M.prototype.delete = vt;
M.prototype.get = bt;
M.prototype.has = kt;
M.prototype.set = Ct;
var IGe = M;
var Yo = "__lodash_hash_undefined__";
function Xo(e) {
  return this.__data__.set(e, Yo), this;
}
var xt = Xo;
function $o(e) {
  return this.__data__.has(e);
}
var Rt = $o;
function V(e) {
  var t = -1,
    o = e == null ? 0 : e.length;
  this.__data__ = new oWt();
  while (++t < o) this.add(e[t]);
}
V.prototype.add = V.prototype.push = xt;
V.prototype.has = Rt;
var _1r = V;
function Zo(e, t) {
  var o = -1,
    r = e == null ? 0 : e.length;
  while (++o < r) if (t(e[o], o, e)) return !0;
  return !1;
}
var Tt = Zo;
function er(e, t) {
  return e.has(t);
}
var b1r = er;
var tr = 1,
  nr = 2;
function or(e, t, o, r, i, s) {
  var a = o & tr,
    l = e.length,
    d = t.length;
  if (l != d && !(a && d > l)) return !1;
  var c = s.get(e),
    y = s.get(t);
  if (c && y) return c == t && y == e;
  var u = -1,
    f = !0,
    h = o & nr ? new _1r() : void 0;
  s.set(e, t), s.set(t, e);
  while (++u < l) {
    var g = e[u],
      v = t[u];
    if (r) var b = a ? r(v, g, u, t, e, s) : r(g, v, u, e, t, s);
    if (b !== void 0) {
      if (b) continue;
      f = !1;
      break;
    }
    if (h) {
      if (!Tt(t, function (p, C) {
        if (!b1r(h, C) && (g === p || i(g, p, o, r, s))) return h.push(C);
      })) {
        f = !1;
        break;
      }
    } else if (!(g === v || i(g, v, o, r, s))) {
      f = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}
var J = or;
var rr = l1.Uint8Array,
  tgn = rr;
function ir(e) {
  var t = -1,
    o = Array(e.size);
  return e.forEach(function (item, index) {
    o[++t] = [index, item];
  }), o;
}
var Pt = ir;
function sr(e) {
  var t = -1,
    o = Array(e.size);
  return e.forEach(function (item) {
    o[++t] = item;
  }), o;
}
var ngn = sr;
var ar = 1,
  lr = 2,
  dr = "[object Boolean]",
  ur = "[object Date]",
  cr = "[object Error]",
  pr = "[object Map]",
  fr = "[object Number]",
  gr = "[object RegExp]",
  hr = "[object Set]",
  mr = "[object String]",
  Sr = "[object Symbol]",
  yr = "[object ArrayBuffer]",
  vr = "[object DataView]",
  Mt = cV ? cV.prototype : void 0,
  oe = Mt ? Mt.valueOf : void 0;
function br(e, t, o, r, i, s, a) {
  switch (o) {
    case vr:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
      e = e.buffer, t = t.buffer;
    case yr:
      if (e.byteLength != t.byteLength || !s(new tgn(e), new tgn(t))) return !1;
      return !0;
    case dr:
    case ur:
    case fr:
      return eCe(+e, +t);
    case cr:
      return e.name == t.name && e.message == t.message;
    case gr:
    case mr:
      return e == t + "";
    case pr:
      var l = Pt;
    case hr:
      var d = r & ar;
      if (l || (l = ngn), e.size != t.size && !d) return !1;
      var c = a.get(e);
      if (c) return c == t;
      r |= lr, a.set(e, t);
      var y = J(l(e), l(t), r, i, s, a);
      return a.delete(e), y;
    case Sr:
      if (oe) return oe.call(e) == oe.call(t);
  }
  return !1;
}
var At = br;
function kr(e, t) {
  var o = -1,
    r = t.length,
    i = e.length;
  while (++o < r) e[i + o] = t[o];
  return e;
}
var Tjt = kr;
function Cr(e, t, o) {
  var r = t(e);
  return KS(e) ? r : Tjt(r, o(e));
}
var S1r = Cr;
function xr(e, t) {
  var o = -1,
    r = e == null ? 0 : e.length,
    i = 0,
    s = [];
  while (++o < r) {
    var a = e[o];
    if (t(a, o, e)) s[i++] = a;
  }
  return s;
}
var w1r = xr;
function Rr() {
  return [];
}
var v1r = Rr;
var Tr = Object.prototype,
  Pr = Tr.propertyIsEnumerable,
  wt = Object.getOwnPropertySymbols,
  Ar = !wt ? v1r : function (e) {
    if (e == null) return [];
    return e = Object(e), w1r(wt(e), function (t) {
      return Pr.call(e, t);
    });
  },
  Cjt = Ar;
function wr(e, t) {
  var o = -1,
    r = Array(e);
  while (++o < e) r[o] = t(o);
  return r;
}
var Lt = wr;
var Lr = 9007199254740991,
  Or = /^(?:0|[1-9]\d*)$/;
function Ir(e, t) {
  var o = typeof e;
  return t = t == null ? Lr : t, !!t && (o == "number" || o != "symbol" && Or.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var VZe = Ir;
var Fr = Object.prototype,
  Er = Fr.hasOwnProperty;
function Dr(e, t) {
  var o = KS(e),
    r = !o && $Te(e),
    i = !o && !r && Xhe(e),
    s = !o && !r && !i && qZe(e),
    a = o || r || i || s,
    l = a ? Lt(e.length, String) : [],
    d = l.length;
  for (var c in e) if ((t || Er.call(e, c)) && !(a && (c == "length" || i && (c == "offset" || c == "parent") || s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || VZe(c, d)))) l.push(c);
  return l;
}
var k1r = Dr;
function Hr(e) {
  return Qne(e) ? k1r(e) : T1r(e);
}
var Jhe = Hr;
function _r(e) {
  return S1r(e, Jhe, Cjt);
}
var wJn = _r;
var Ur = 1,
  jr = Object.prototype,
  qr = jr.hasOwnProperty;
function Wr(e, t, o, r, i, s) {
  var a = o & Ur,
    l = wJn(e),
    d = l.length,
    c = wJn(t),
    y = c.length;
  if (d != y && !a) return !1;
  var u = d;
  while (u--) {
    var f = l[u];
    if (!(a ? f in t : qr.call(t, f))) return !1;
  }
  var h = s.get(e),
    g = s.get(t);
  if (h && g) return h == t && g == e;
  var v = !0;
  s.set(e, t), s.set(t, e);
  var b = a;
  while (++u < d) {
    f = l[u];
    var p = e[f],
      C = t[f];
    if (r) var nt = a ? r(C, p, f, t, e, s) : r(p, C, f, e, t, s);
    if (!(nt === void 0 ? p === C || i(p, C, o, r, s) : nt)) {
      v = !1;
      break;
    }
    b || (b = f == "constructor");
  }
  if (v && !b) {
    var E = e.constructor,
      D = t.constructor;
    if (E != D && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof D == "function" && D instanceof D)) v = !1;
  }
  return s.delete(e), s.delete(t), v;
}
var Ot = Wr;
var Nr = 1,
  It = "[object Arguments]",
  Ft = "[object Array]",
  Q = "[object Object]",
  Kr = Object.prototype,
  Et = Kr.hasOwnProperty;
function Jr(e, t, o, r, i, s) {
  var a = KS(e),
    l = KS(t),
    d = a ? Ft : UTe(e),
    c = l ? Ft : UTe(t);
  d = d == It ? Q : d, c = c == It ? Q : c;
  var y = d == Q,
    u = c == Q,
    f = d == c;
  if (f && Xhe(e)) {
    if (!Xhe(t)) return !1;
    a = !0, y = !1;
  }
  if (f && !y) return s || (s = new IGe()), a || qZe(e) ? J(e, t, o, r, i, s) : At(e, t, d, o, r, i, s);
  if (!(o & Nr)) {
    var h = y && Et.call(e, "__wrapped__"),
      g = u && Et.call(t, "__wrapped__");
    if (h || g) {
      var v = h ? e.value() : e,
        b = g ? t.value() : t;
      return s || (s = new IGe()), i(v, b, o, r, s);
    }
  }
  if (!f) return !1;
  return s || (s = new IGe()), Ot(e, t, o, r, i, s);
}
var Dt = Jr;
function Ht(e, t, o, r, i) {
  if (e === t) return !0;
  if (e == null || t == null || !eV(e) && !eV(t)) return e !== e && t !== t;
  return Dt(e, t, o, r, Ht, i);
}
var A = Ht;
function zr(e, t) {
  return A(e, t);
}
var Nn = zr;
var Yr = function () {
    try {
      var e = Hde(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch (error) {}
  }(),
  sgn = Yr;
function Xr(e, t, value) {
  if (t == "__proto__" && sgn) sgn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: value,
    writable: !0
  });else e[t] = value;
}
var ere = Xr;
function $r(e) {
  return function (t, o, r) {
    var i = -1,
      s = Object(t),
      a = r(t),
      l = a.length;
    while (l--) {
      var d = a[e ? l : ++i];
      if (o(s[d], d, s) === !1) break;
    }
    return t;
  };
}
var Bt = $r;
var Zr = Bt(),
  P1r = Zr;
function ei(e, t) {
  return e && P1r(e, t, Jhe);
}
var Ajt = ei;
var ti = 1,
  ni = 2;
function oi(e, t, o, r) {
  var i = o.length,
    s = i,
    a = !r;
  if (e == null) return !s;
  e = Object(e);
  while (i--) {
    var l = o[i];
    if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
  }
  while (++i < s) {
    l = o[i];
    var d = l[0],
      c = e[d],
      y = l[1];
    if (a && l[2]) {
      if (c === void 0 && !(d in e)) return !1;
    } else {
      var u = new IGe();
      if (r) var f = r(c, y, d, e, t, u);
      if (!(f === void 0 ? A(y, c, ti | ni, r, u) : f)) return !1;
    }
  }
  return !0;
}
var _t = oi;
function ri(e) {
  return e === e && !lC(e);
}
var Y = ri;
function si(e) {
  var t = Jhe(e),
    o = t.length;
  while (o--) {
    var r = t[o],
      i = e[r];
    t[o] = [r, i, Y(i)];
  }
  return t;
}
var Ut = si;
function ai(e, t) {
  return function (o) {
    if (o == null) return !1;
    return o[e] === t && (t !== void 0 || e in Object(o));
  };
}
var X = ai;
function li(e) {
  var t = Ut(e);
  if (t.length == 1 && t[0][2]) return X(t[0][0], t[0][1]);
  return function (o) {
    return o === e || _t(o, e, t);
  };
}
var jt = li;
var di = "[object Symbol]";
function ci(e) {
  return typeof e == "symbol" || eV(e) && Fde(e) == di;
}
var xde = ci;
var pi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  fi = /^\w*$/;
function gi(e, t) {
  if (KS(e)) return !1;
  var o = typeof e;
  if (o == "number" || o == "symbol" || o == "boolean" || e == null || xde(e)) return !0;
  return fi.test(e) || !pi.test(e) || t != null && e in Object(t);
}
var w = gi;
var hi = 500;
function mi(e) {
  var t = eo(e, function (r) {
      if (o.size === hi) o.clear();
      return r;
    }),
    o = t.cache;
  return t;
}
var qt = mi;
var Si = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  yi = /\\(\\)?/g,
  vi = qt(function (e) {
    var t = [];
    if (e.charCodeAt(0) === 46) t.push("");
    return e.replace(Si, function (o, r, i, s) {
      t.push(i ? s.replace(yi, "$1") : r || o);
    }), t;
  }),
  Wt = vi;
function bi(e, t) {
  var o = -1,
    r = e == null ? 0 : e.length,
    i = Array(r);
  while (++o < r) i[o] = t(e[o], o, e);
  return i;
}
var NGe = bi;
var ki = 1 / 0,
  Nt = cV ? cV.prototype : void 0,
  Gt = Nt ? Nt.toString : void 0;
function Kt(e) {
  if (typeof e == "string") return e;
  if (KS(e)) return NGe(e, Kt) + "";
  if (xde(e)) return Gt ? Gt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ki ? "-0" : t;
}
var Jt = Kt;
function Ci(e) {
  return e == null ? "" : Jt(e);
}
var Qhe = Ci;
function xi(e, t) {
  if (KS(e)) return e;
  return w(e, t) ? [e] : Wt(Qhe(e));
}
var Zhe = xi;
var Ri = 1 / 0;
function Ti(e) {
  if (typeof e == "string" || xde(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ri ? "-0" : t;
}
var Pde = Ti;
function Pi(e, t) {
  t = Zhe(t, e);
  var o = 0,
    r = t.length;
  while (e != null && o < r) e = e[Pde(t[o++])];
  return o && o == r ? e : void 0;
}
var KZe = Pi;
function Mi(e, t, o) {
  var r = e == null ? void 0 : KZe(e, t);
  return r === void 0 ? o : r;
}
var O1r = Mi;
function Ai(e, t) {
  return e != null && t in Object(e);
}
var zt = Ai;
function wi(e, t, o) {
  t = Zhe(t, e);
  var r = -1,
    i = t.length,
    s = !1;
  while (++r < i) {
    var a = Pde(t[r]);
    if (!(s = e != null && o(e, a))) break;
    e = e[a];
  }
  if (s || ++r != i) return s;
  return i = e == null ? 0 : e.length, !!i && P(i) && VZe(a, i) && (KS(e) || $Te(e));
}
var Qt = wi;
function Li(e, t) {
  return e != null && Qt(e, t, zt);
}
var I1r = Li;
var Oi = 1,
  Ii = 2;
function Fi(e, t) {
  if (w(e) && Y(t)) return X(Pde(e), t);
  return function (o) {
    var r = O1r(o, e);
    return r === void 0 && r === t ? I1r(o, e) : A(t, r, Oi | Ii);
  };
}
var Yt = Fi;
function Ei(e) {
  return e;
}
var YZe = Ei;
function Di(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var Xt = Di;
function Hi(e) {
  return function (t) {
    return KZe(t, e);
  };
}
var $t = Hi;
function Bi(e) {
  return w(e) ? Xt(Pde(e)) : $t(e);
}
var Zt = Bi;
function _i(e) {
  if (typeof e == "function") return e;
  if (e == null) return YZe;
  if (typeof e == "object") return KS(e) ? Yt(e[0], e[1]) : jt(e);
  return Zt(e);
}
var n1 = _i;
function Ui(e, t) {
  var o = {};
  return t = n1(t, 3), Ajt(e, function (r, i, s) {
    ere(o, i, t(r, i, s));
  }), o;
}
var Gr = Ui;
function BTe(e, t) {
  return e.flatMap((item, index) => index ? [t(index), item] : [item]);
}
function F(e, t) {
  let o = 0;
  for (let r of e) o += +!!t(r);
  return o;
}
function bI(e, t) {
  if (e === t) return !0;
  if (e === void 0 || t === void 0 || e.length !== t.length) return !1;
  for (let o = 0; o < e.length; o++) if (e[o] !== t[o]) return !1;
  return !0;
}
function L(e) {
  return [...new Set(e)];
}
function oa(e) {
  if (!Array.isArray(e)) return [];
  return e.every(item => typeof item === "string") ? e : e.filter(item => typeof item === "string");
}
function pzo(e, t) {
  let o = Math.min(e.length, t.length),
    r = 0;
  while (r < o && e[r] === t[r]) r++;
  return r;
}
import { homedir as zi } from "os";
import { resolve as bn, sep as vn } from "path";
var re = "3ab19d7e-9f35-45c2-926e-75e271cc60b3";
function eSt(e) {
  return dV(e.trim(), re);
}
function SJn() {
  let e = process.env.CLAUDE_CODE_REMOTE_SESSION_ID?.trim();
  return e ? dV(e, re) : null;
}
function azo(e) {
  if (e.toLowerCase().endsWith(".jsonl")) return {
    sessionId: are(),
    ingressUrl: null,
    isUrl: !1,
    jsonlFile: e,
    isJsonlFile: !0
  };
  if (Vt(e)) return {
    sessionId: e,
    ingressUrl: null,
    isUrl: !1,
    jsonlFile: null,
    isJsonlFile: !1
  };
  try {
    let t = new URL(e);
    return {
      sessionId: SJn() ?? dV(t.href, re),
      ingressUrl: t.href,
      isUrl: !0,
      jsonlFile: null,
      isJsonlFile: !1
    };
  } catch {}
  return null;
}
import { basename as qi, dirname as tn } from "path";
function _I(e) {
  return {
    subscribe(t) {
      return e().subscribe(t);
    },
    emit(...t) {
      e().emit(...t);
    },
    clear() {
      e().clear();
    }
  };
}
class ie {
  walked = new Map();
  folderIsLink = new Map();
  managedMcp = null;
  clearWalk() {
    this.walked.clear(), this.folderIsLink.clear();
  }
  noteWalked(e, t) {
    if (!this.walked.has(e)) this.walked.set(e, t());
  }
  linkOf(e) {
    return this.walked.get(e) ?? null;
  }
  isLinked(e) {
    return this.linkOf(e) !== null;
  }
  all() {
    return [...this.walked.values(), this.managedMcp].filter(item => item !== null);
  }
}
var n3s = ["not_admin_owned", "other_writable", "group_writable", "symlinked", "unknown", "not_evaluated", "protected"];
function r3s({
  file: file,
  folder: folder,
  linked: linked,
  posix: posix
}) {
  if (!posix) return "not_evaluated";
  if (file === void 0 || folder === void 0) return linked ? "symlinked" : "unknown";
  if (file.uid !== 0 || folder.uid !== 0) return "not_admin_owned";
  let i = file.mode | folder.mode;
  if ((i & 2) !== 0) return "other_writable";
  if ((i & 16) !== 0) return "group_writable";
  return linked ? "symlinked" : "protected";
}
function o3s({
  file: file_2,
  folder: folder_2,
  euid: euid,
  groups: groups,
  posix: posix_2
}) {
  if (!posix_2 || euid === void 0) return;
  if (euid === 0) return !0;
  let s = [file_2, folder_2].filter(item => item !== void 0),
    a = s.map(item => {
      if (item.uid === euid || (item.mode & 2) !== 0) return !0;
      if ((item.mode & 16) === 0) return !1;
      return item.gid === void 0 ? void 0 : groups().includes(item.gid);
    });
  if (a.includes(!0)) return !0;
  return s.length < 2 || a.includes(void 0) ? void 0 : !1;
}
class se {
  documents = new Map();
  folderOwners = new Map();
  setsOrgPin = !1;
  clear() {
    this.documents.clear(), this.folderOwners.clear(), this.setsOrgPin = !1;
  }
  note(e, t) {
    this.documents.set(e, t);
  }
  all() {
    return [...this.documents];
  }
}
class ae {
  holders = 0;
  tiers;
  baseline;
  lingering;
  tier(e) {
    if (this.holders === 0 && this.lingering !== void 0) {
      let t = this.lingering();
      if (t === void 0) this.lingering = void 0;
      this.tiers = t;
    }
    return this.tiers?.get(e);
  }
  engage(e, t) {
    let o;
    if (this.holders === 0) {
      let i = e(),
        s = t?.() ?? i;
      if (this.lingering !== void 0) o = {
        tiers: this.tiers,
        lingering: this.lingering
      }, this.lingering = void 0;
      this.tiers = i, this.baseline = s;
    }
    this.holders++;
    let r = !1;
    return {
      release: () => {
        if (r) return {
          last: !1
        };
        if (r = !0, this.holders--, this.holders > 0) return {
          last: !1
        };
        return this.tiers = void 0, this.lingering = void 0, this.baseline = void 0, {
          last: !0
        };
      },
      abandon: () => {
        if (r) return;
        if (r = !0, this.holders--, this.holders === 0) this.tiers = o?.tiers, this.lingering = o?.lingering, this.baseline = void 0;
      }
    };
  }
  whileLive(e) {
    let tiers = this.tiers,
      lingering = this.lingering;
    this.tiers = void 0, this.lingering = void 0;
    try {
      return e();
    } finally {
      this.tiers = tiers, this.lingering = lingering;
    }
  }
  baselineTier(e) {
    return this.baseline?.get(e);
  }
  differingTiers(e) {
    return this.baseline === void 0 ? [] : ji(this.baseline, e);
  }
  rebaseline(e, t) {
    if (this.baseline === void 0) return;
    let o = new Map(this.baseline);
    for (let r of t) {
      let i = e.get(r);
      if (i === void 0) o.delete(r);else o.set(r, i);
    }
    this.baseline = o;
  }
  linger(e, t) {
    if (this.holders === 0) this.tiers = e, this.lingering = t, this.baseline = void 0;
  }
  isHeld() {
    return this.holders > 0;
  }
}
function Rjt(e) {
  return e !== null && Object.keys(e).length === 0 ? null : e;
}
function en(e) {
  return {
    ...e,
    settings: Rjt(e.settings),
    unfiltered: Rjt(e.unfiltered),
    ...(e.legacy !== void 0 && {
      legacy: Rjt(e.legacy)
    })
  };
}
function ji(e, t) {
  return [...e.keys(), ...[...t.keys()].filter(item => !e.has(item))].filter(item => {
    let r = e.get(item),
      i = t.get(item);
    return !Nn(r && en(r), i && en(i));
  });
}
class LGe {
  mergedSettings = null;
  perSource = new Map();
  parsedFiles = new Map();
  managedDocumentLinks = new ie();
  managedFileProtections = new se();
  folderListings = new Map();
  managedFileReads = new Map();
  primedFiles = new Set();
  policyWalks = 0;
  walkedFolders = new Map();
  policy = {};
  lastPolicyEnvComposition = null;
  isLoadingFromDisk = !1;
  autoModeUntrustedSourceWarned = !1;
  changed = Me();
  internalWrites = new Map();
  enabledSources;
  inlineFlagParse;
  repoTierFreeze = new ae();
  pluginBase;
  epoch = 0;
  systemSpaceServingLogged = !1;
  systemAttestationContradicted = !1;
  backendReadResetTail = Promise.resolve();
  backgroundWorkTail = Promise.resolve();
  invalidated = Me();
  pluginBaseLoaded = !1;
  primer;
  lastSeededUserLayer;
  localStoreProbes = new nn();
  retained = new Map();
  retainedListings = new Map();
  setPluginBase(e) {
    this.pluginBase = e, this.pluginBaseLoaded = !0;
  }
  clearPluginBase() {
    this.pluginBase = void 0;
  }
  invalidateAll(e) {
    if (this.epoch++, this.mergedSettings = null, this.perSource.clear(), this.parsedFiles.clear(), this.managedDocumentLinks.clearWalk(), this.managedFileProtections.clear(), this.primedFiles.clear(), this.policyWalks = 0, this.walkedFolders.clear(), this.folderListings.clear(), this.policy = {}, e?.userLayer === "retain" && W() && this.primer !== void 0) {
      for (let [t, o] of this.retained) this.parsedFiles.set(t, o.parsed), this.primedFiles.add(t);
      for (let [t, o] of this.retainedListings) this.folderListings.set(t, o.names);
    } else this.retained.clear(), this.retainedListings.clear();
    this.invalidated.emit();
  }
  invalidatePolicyLayer() {
    this.mergedSettings = null, this.perSource.delete("policySettings"), this.policy = {};
  }
  onInvalidate(e) {
    return this.invalidated.subscribe(e);
  }
  seedParsedFile(path, t, o, r) {
    if (r !== this.epoch) return !1;
    let i = this.parsedFiles.get(path),
      s = i !== void 0 && le(i, o),
      a = !s,
      parsed = s ? i : o;
    if (this.parsedFiles.set(path, parsed), t === "userSettings") this.lastSeededUserLayer = {
      path: path,
      parsed: parsed
    };
    if (a || this.primedFiles.has(path)) this.primedFiles.add(path);
    let d = this.retained.get(path);
    if (d !== void 0) d.parsed = parsed;
    if (a) this.dropDerivedCaches(t);
    return !0;
  }
  walkReadDiffers(e, t) {
    let o = this.parsedFiles.get(e);
    return o !== void 0 && !this.primedFiles.has(e) && !Nn(o, t);
  }
  unseedParsedFile(e, t, o) {
    if (o !== this.epoch) return;
    if (this.retained.delete(e), !this.primedFiles.has(e) || t === "policySettings" && this.policyWalks > 0) return;
    this.primedFiles.delete(e), this.parsedFiles.delete(e), this.dropDerivedCaches(t);
  }
  dropDerivedCaches(e) {
    if (this.perSource.delete(e), this.mergedSettings = null, e === "policySettings") this.policy = {};
  }
  primedFolderListing(e) {
    return W() ? this.folderListings.get(e) : void 0;
  }
  folderListingForPolicyWalk(e) {
    if (!W()) return;
    this.policyWalks++;
    let t = this.folderListings.get(e);
    if (!this.walkedFolders.has(e) || t !== void 0) this.walkedFolders.set(e, t ?? null);
    return t;
  }
  noteWalkListing(e, t) {
    if (!W()) return;
    this.walkedFolders.set(e, t);
  }
  get policyWalkCount() {
    return this.policyWalks;
  }
  policyInstallVerdict(e, t, o) {
    let r = this.parsedFiles.get(e);
    if (r === void 0 || le(r, t)) return "install";
    if (!this.primedFiles.has(e)) return "raced";
    if (this.policyWalks === 0) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  folderInstallVerdict(e, t, o) {
    if (!this.walkedFolders.has(e)) return this.hasParsedDropInOutside(e, t) ? "raced" : "install";
    let r = this.walkedFolders.get(e);
    if (r !== null && r !== void 0 && Nn(r, t)) return "install";
    return this.policyWalks > o ? "raced" : "deferred";
  }
  seedFolderListing(e, t, o) {
    if (o !== this.epoch) return !1;
    let r = this.folderListings.get(e);
    this.folderListings.set(e, t);
    let i = this.retainedListings.get(e);
    if (i !== void 0) i.names = t;
    if (r !== void 0 && !Nn(r, t)) this.dropDerivedCaches("policySettings");
    return !0;
  }
  walkReadManagedFileIn(e, t) {
    for (let [o, r] of this.parsedFiles) if (!o.includes("\x00") && !this.primedFiles.has(o) && (r.settings !== null || r.errors.length > 0) && (o === e || tn(o) === t)) return !0;
    return !1;
  }
  walkRead(e) {
    return this.parsedFiles.has(e) && !this.primedFiles.has(e);
  }
  hasParsedDropInOutside(e, t) {
    for (let o of this.parsedFiles.keys()) if (!o.includes("\x00") && !this.primedFiles.has(o) && tn(o) === e && !t.includes(qi(o))) return !0;
    return !1;
  }
  clearFolderListing(e, t) {
    if (t !== this.epoch) return;
    if (this.retainedListings.delete(e), !this.folderListings.has(e) || this.walkedFolders.has(e)) return;
    this.folderListings.delete(e), this.dropDerivedCaches("policySettings");
  }
  retainLayer(e, t) {
    let o = this.parsedFiles.get(e),
      r = {
        parsed: o !== void 0 && le(o, t) ? o : t
      };
    return this.retained.set(e, r), () => {
      if (this.retained.get(e) === r) this.retained.delete(e);
    };
  }
  dropRetainedLayer(e) {
    this.retained.delete(e);
  }
  retainFolderListing(e, names) {
    let o = {
      names: names
    };
    return this.retainedListings.set(e, o), () => {
      if (this.retainedListings.get(e) === o) this.retainedListings.delete(e);
    };
  }
}
class nn {
  ownerUidsByRoot = new Map();
  realHomeDir = void 0;
  canonicalRootOwnerUids(e, t) {
    let o = this.ownerUidsByRoot.get(e);
    if (o !== void 0) return o;
    let r = t(e);
    return this.ownerUidsByRoot.set(e, r), r;
  }
  hasCanonicalRootOwnerUids(e) {
    return this.ownerUidsByRoot.has(e);
  }
  primeCanonicalRootOwnerUids(e, t) {
    if (this.ownerUidsByRoot.has(e)) return !1;
    return this.ownerUidsByRoot.set(e, t), !0;
  }
  clearCanonicalRootOwnerUids() {
    this.ownerUidsByRoot.clear();
  }
  normalizedRealHomeDir(e) {
    return this.realHomeDir ??= e(), this.realHomeDir;
  }
  clearNormalizedRealHomeDir() {
    this.realHomeDir = void 0;
  }
}
var C1r = new z(() => new LGe());
function le(e, t) {
  return Nn({
    ...e,
    fileOwner: void 0
  }, {
    ...t,
    fileOwner: void 0
  });
}
function Zne() {
  return {
    sent: new Set(),
    rejected: new Set(),
    declaredTools: void 0,
    noChannelTools: void 0,
    declaredToolsDecided: !1,
    nameOnlyAnnouncements: new Set(),
    surfacedOnWire: new Set(),
    definedByValue: new Set(),
    inlineToolsRefusal: {
      rejectedHeader: void 0,
      announcementsByName: new Set()
    },
    advisorHeld: void 0,
    wireShapeSeed: void 0,
    webSearchHistoryRejected: !1,
    mediaItemCap: void 0,
    refusedToolSchemas: new Map(),
    systemMessagesAcceptedBy: new Set(),
    nameOnlyEntries: {
      held: new Set(),
      refused: !1,
      reported: void 0
    }
  };
}
function dT(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
    declaredTools: void 0,
    noChannelTools: void 0,
    declaredToolsDecided: !1,
    nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
    surfacedOnWire: new Set(e.surfacedOnWire),
    definedByValue: new Set(e.definedByValue),
    inlineToolsRefusal: {
      rejectedHeader: e.inlineToolsRefusal.rejectedHeader,
      announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName)
    },
    advisorHeld: e.advisorHeld,
    wireShapeSeed: e.wireShapeSeed,
    webSearchHistoryRejected: e.webSearchHistoryRejected,
    mediaItemCap: e.mediaItemCap,
    refusedToolSchemas: new Map(e.refusedToolSchemas),
    systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy),
    nameOnlyEntries: {
      ...e.nameOnlyEntries,
      held: new Set(e.nameOnlyEntries.held)
    }
  };
}
function nSt(e) {
  return {
    sent: new Set(e.sent),
    rejected: new Set(e.rejected),
    declaredTools: e.declaredTools,
    noChannelTools: e.noChannelTools,
    declaredToolsDecided: e.declaredToolsDecided,
    nameOnlyAnnouncements: new Set(e.nameOnlyAnnouncements),
    surfacedOnWire: new Set(e.surfacedOnWire),
    definedByValue: new Set(e.definedByValue),
    inlineToolsRefusal: {
      rejectedHeader: e.inlineToolsRefusal.rejectedHeader,
      announcementsByName: new Set(e.inlineToolsRefusal.announcementsByName)
    },
    advisorHeld: e.advisorHeld,
    wireShapeSeed: e.wireShapeSeed,
    webSearchHistoryRejected: e.webSearchHistoryRejected,
    mediaItemCap: e.mediaItemCap,
    refusedToolSchemas: new Map(e.refusedToolSchemas),
    systemMessagesAcceptedBy: new Set(e.systemMessagesAcceptedBy),
    nameOnlyEntries: {
      ...e.nameOnlyEntries,
      held: new Set(e.nameOnlyEntries.held)
    }
  };
}
function vJn(e) {
  lzo(e), e.nameOnlyEntries.held.clear(), e.nameOnlyEntries.refused = !1, e.nameOnlyEntries.reported = void 0;
}
function lzo(e) {
  e.declaredTools = void 0, e.noChannelTools = void 0, e.declaredToolsDecided = !1;
}
function rSt(e) {
  e.systemMessagesAcceptedBy.clear();
  let wireShapeSeed = e.wireShapeSeed;
  if (wireShapeSeed === void 0) return;
  for (let o of wireShapeSeed.sent) e.sent.delete(o);
  for (let o of wireShapeSeed.rejected) e.rejected.delete(o);
  e.wireShapeSeed = void 0;
}
function dzo(e, t) {
  for (let o of t.sent) hF(e, o);
  for (let o of t.rejected) kg(e, o);
  e.wireShapeSeed = t;
}
function oSt(e) {
  e.advisorHeld = void 0;
}
function kJn(e) {
  let {
    rejectedHeader: rejectedHeader,
    announcementsByName: announcementsByName
  } = e.inlineToolsRefusal;
  if (rejectedHeader !== void 0) e.rejected.delete(rejectedHeader), e.inlineToolsRefusal.rejectedHeader = void 0;
  for (let r of announcementsByName) e.nameOnlyAnnouncements.delete(r);
  announcementsByName.clear();
}
function s3s(e) {
  return e.advisorHeld = void 0, e;
}
function sSt(e) {
  e.declaredToolsDecided = !0;
}
function Z(e) {
  let t = Zne();
  if (t.declaredTools = e.declaredTools, t.noChannelTools = e.noChannelTools, t.declaredToolsDecided = e.declaredToolsDecided, t.advisorHeld = e.advisorHeld, e.wireShapeSeed !== void 0) dzo(t, e.wireShapeSeed);
  let {
    rejectedHeader: rejectedHeader_2,
    announcementsByName: announcementsByName_2
  } = e.inlineToolsRefusal;
  if (rejectedHeader_2 !== void 0) czo(t, rejectedHeader_2);
  uzo(t, announcementsByName_2), t.webSearchHistoryRejected = e.webSearchHistoryRejected, t.mediaItemCap = e.mediaItemCap;
  for (let [i, s] of e.refusedToolSchemas) t.refusedToolSchemas.set(i, s);
  return t.nameOnlyEntries.refused = e.nameOnlyEntries.refused, t.nameOnlyEntries.reported = e.nameOnlyEntries.reported, t;
}
function czo(e, t) {
  kg(e, t), e.inlineToolsRefusal.rejectedHeader = t;
}
function uzo(e, t) {
  for (let o of t) e.inlineToolsRefusal.announcementsByName.add(o), e.nameOnlyAnnouncements.add(o);
}
function ogn(e, t) {
  if (e.declaredTools === void 0) e.declaredTools = t;
  sSt(e);
}
function EJn(e) {
  return e.definedByValue.size === 0 ? e.surfacedOnWire : new Set([...e.surfacedOnWire, ...e.definedByValue]);
}
function hF(e, t) {
  if (!e.rejected.has(t)) e.sent.add(t);
}
function gk(e, t) {
  return e.sent.has(t) && !e.rejected.has(t);
}
function kg(e, t) {
  e.sent.delete(t), e.rejected.add(t);
}
function pm(e, t) {
  return e.rejected.has(t);
}
function R1r(e, t) {
  e.sent.delete(t), e.rejected.delete(t);
}
function i3s(e) {
  e.webSearchHistoryRejected = !0;
}
function TJn(e) {
  e.webSearchHistoryRejected = !1;
}
function A1r(e, t) {
  return e.mediaItemCap?.model === t ? e.mediaItemCap : void 0;
}
function x1r(e, t) {
  e.mediaItemCap = t;
}
function iSt(e) {
  e.mediaItemCap = void 0;
}
function CJn(e) {
  e.refusedToolSchemas.clear();
}
class ue {
  spawner = void 0;
  pairings = new Map();
  mainEnsureInFlight = !1;
  mainSlotBlocked = !1;
}
class ce {
  #e = Zne();
  #t = void 0;
  #n;
  stickyBetas() {
    return this.#e;
  }
  unlatchStickyBetas() {
    this.#e = Z(this.#e);
  }
  atisLatch() {
    return this.#t;
  }
  replaceAtisLatch(e) {
    this.#t = e, this.#n?.(e);
  }
  watchAtisLatch(e) {
    this.#n = e;
  }
  reset() {
    this.#e = Zne(), this.#t = void 0;
  }
}
function Wi(e, t) {
  var o,
    r = -1,
    i = e.length;
  while (++r < i) {
    var s = t(e[r]);
    if (s !== void 0) o = o === void 0 ? s : o + s;
  }
  return o;
}
var on = Wi;
function Ni(e, t) {
  return e && e.length ? on(e, n1(t, 2)) : 0;
}
var X5 = Ni;
var aSt = {
  inputTokens: 0,
  outputTokens: 0,
  cacheReadInputTokens: 0,
  cacheCreationInputTokens: 0
};
function ee(e) {
  let t = Object.create(null);
  return Object.assign(t, e);
}
class pe {
  #e = 0;
  #t = 0;
  #n = 0;
  #o = 0;
  #r = Date.now();
  #i = void 0;
  #s = 0;
  #u = 0;
  #d = 0;
  #l = aSt;
  #f = aSt;
  #p = !1;
  #a = 0;
  #c = ee();
  #h = null;
  #m = null;
  #g = null;
  totalCostUSD() {
    return this.#e;
  }
  restoredCostUSD() {
    return this.#d;
  }
  restoredTokens() {
    return this.#l;
  }
  totalAPIDuration() {
    return this.#t;
  }
  totalAPIDurationWithoutRetries() {
    return this.#n;
  }
  totalToolDuration() {
    return this.#o;
  }
  totalDuration() {
    return Math.max(0, Date.now() - this.#r);
  }
  sessionStartTime() {
    return this.#i ?? this.#r;
  }
  totalLinesAdded() {
    return this.#s;
  }
  totalLinesRemoved() {
    return this.#u;
  }
  hasUnknownModelCost() {
    return this.#p;
  }
  safetyStops() {
    return this.#a;
  }
  modelUsage() {
    return this.#c;
  }
  usageForModel(e) {
    return this.#c[e];
  }
  totalInputTokens() {
    return X5(Object.values(this.#c), "inputTokens");
  }
  totalOutputTokens() {
    return X5(Object.values(this.#c), "outputTokens");
  }
  totalCacheReadInputTokens() {
    return X5(Object.values(this.#c), "cacheReadInputTokens");
  }
  totalCacheCreationInputTokens() {
    return X5(Object.values(this.#c), "cacheCreationInputTokens");
  }
  totalWebSearchRequests() {
    return X5(Object.values(this.#c), "webSearchRequests");
  }
  recordApiDuration(e, t) {
    this.#t += e, this.#n += t;
  }
  spentTokens() {
    return this.#f;
  }
  recordSpentTokens(e) {
    let t = this.#f;
    this.#f = {
      inputTokens: t.inputTokens + e.inputTokens,
      outputTokens: t.outputTokens + e.outputTokens,
      cacheReadInputTokens: t.cacheReadInputTokens + e.cacheReadInputTokens,
      cacheCreationInputTokens: t.cacheCreationInputTokens + e.cacheCreationInputTokens
    };
  }
  recordCost(e, t, o) {
    this.#c[o] = t, this.#e += e;
  }
  recordToolDuration(e) {
    this.#o += e;
  }
  recordLinesChanged(e, t) {
    this.#s += e, this.#u += t;
  }
  markUnknownModelCost() {
    this.#p = !0;
  }
  recordSafetyStop() {
    this.#a += 1;
  }
  zeroDurationsAndCostForTests() {
    this.#t = 0, this.#n = 0, this.#e = 0, this.#d = 0;
  }
  restartClock() {
    this.#r = Date.now(), this.anchorLogicalStart(void 0);
  }
  anchorLogicalStart(e) {
    this.#i = e === void 0 ? void 0 : Math.min(e, this.#r);
  }
  restore({
    totalCostUSD: totalCostUSD,
    totalAPIDuration: totalAPIDuration,
    totalAPIDurationWithoutRetries: totalAPIDurationWithoutRetries,
    totalToolDuration: totalToolDuration,
    totalLinesAdded: totalLinesAdded,
    totalLinesRemoved: totalLinesRemoved,
    lastDuration: lastDuration,
    startTime: startTime,
    modelUsage: modelUsage,
    hasUnknownModelCost: hasUnknownModelCost
  }, y) {
    if (this.#g = y, this.#e = totalCostUSD, this.#d = totalCostUSD, this.#t = totalAPIDuration, this.#n = totalAPIDurationWithoutRetries, this.#o = totalToolDuration, this.#s = totalLinesAdded, this.#u = totalLinesRemoved, this.#p = hasUnknownModelCost ?? !1, modelUsage) this.#c = ee(modelUsage);
    if (this.#l = {
      inputTokens: this.totalInputTokens(),
      outputTokens: this.totalOutputTokens(),
      cacheReadInputTokens: this.totalCacheReadInputTokens(),
      cacheCreationInputTokens: this.totalCacheCreationInputTokens()
    }, lastDuration !== void 0) this.#r = Date.now() - lastDuration;
    this.anchorLogicalStart(startTime);
  }
  registerSaver(e) {
    this.#h = e;
  }
  runSaver(e, t) {
    (this.#h ?? (t ? t.#h : null))?.(e);
  }
  registerTranscriptRecorder(e) {
    this.#m = e;
  }
  runTranscriptRecorder(e, t, o) {
    (this.#m ?? (o ? o.#m : null))?.(e, t);
  }
  snapshot() {
    return {
      ownerSessionId: this.#g,
      totalCostUSD: this.#e,
      totalAPIDuration: this.#t,
      totalAPIDurationWithoutRetries: this.#n,
      totalToolDuration: this.#o,
      startTime: this.#r,
      sessionLogicalStartTime: this.#i,
      totalLinesAdded: this.#s,
      totalLinesRemoved: this.#u,
      restoredCostUSD: this.#d,
      restoredTokens: this.#l,
      hasUnknownModelCost: this.#p,
      safetyStops: this.#a,
      modelUsage: Gr(this.#c, e => ({
        ...e
      }))
    };
  }
  restoreSnapshot(e) {
    this.#g = e.ownerSessionId, this.#e = e.totalCostUSD, this.#t = e.totalAPIDuration, this.#n = e.totalAPIDurationWithoutRetries, this.#o = e.totalToolDuration, this.#r = e.startTime, this.#i = e.sessionLogicalStartTime, this.#s = e.totalLinesAdded, this.#u = e.totalLinesRemoved, this.#d = e.restoredCostUSD, this.#l = e.restoredTokens, this.#p = e.hasUnknownModelCost, this.#a = e.safetyStops, this.#c = ee(Gr(e.modelUsage, t => ({
      ...t
    })));
  }
  claim(e) {
    this.#g ??= e;
  }
  scopeTo(e) {
    this.#g = e;
  }
  ownerSessionId() {
    return this.#g;
  }
  belongsTo(e) {
    return this.#g === e;
  }
  reset(e) {
    this.#g = e, this.#e = 0, this.#d = 0, this.#l = aSt, this.#t = 0, this.#n = 0, this.#o = 0, this.#r = Date.now(), this.anchorLogicalStart(void 0), this.#s = 0, this.#u = 0, this.#p = !1, this.#a = 0, this.#c = ee();
  }
}
class fe {
  #e = new Set();
  #t = new Map();
  consentSessionFallback(e) {
    return this.#e.has(e);
  }
  replaceConsentSessionFallback(e, t) {
    if (t) this.#e.add(e);else this.#e.delete(e);
  }
  sessionConsentKey(e) {
    return this.#t.get(e) ?? null;
  }
  replaceSessionConsentKey(e, t) {
    if (t === null) this.#t.delete(e);else this.#t.set(e, t);
  }
  reset() {
    this.#e.clear(), this.#t.clear();
  }
}
class ge {
  #e = {
    registeredHooks: null
  };
  #t = void 0;
  #n = void 0;
  holder() {
    return this.#e;
  }
  mainThreadAgentType() {
    return this.#t;
  }
  replaceMainThreadAgentType(e) {
    this.#t = e;
  }
  mainThreadAgentHooks() {
    return this.#n;
  }
  replaceMainThreadAgentHooks(e) {
    this.#n = e;
  }
  reset() {
    this.#e = {
      registeredHooks: null
    }, this.#t = void 0, this.#n = void 0;
  }
}
class he {
  #e = new Map();
  skills() {
    return this.#e;
  }
  lookup(e) {
    return this.#e.get(e);
  }
  record(e, t) {
    this.#e.set(e, t);
  }
  forget(e) {
    this.#e.delete(e);
  }
  forgetAll() {
    this.#e.clear();
  }
  reset() {
    this.#e = new Map();
  }
}
class me {
  #e = [];
  #t;
  #n;
  #o;
  #r;
  approvedServers() {
    return this.#e;
  }
  approveServers(workspaceKey, t) {
    for (let name of t) if (!this.#e.some(item => item.name === name && item.workspaceKey === workspaceKey)) this.#e.push({
      name: name,
      workspaceKey: workspaceKey
    });
  }
  registerClientsAccessor(e) {
    this.#t = e;
  }
  acquireClientsAccessor(e) {
    if (this.#t) return () => {};
    return this.#t = e, () => {
      if (this.#t === e) this.#t = void 0;
    };
  }
  clientsFromAccessor() {
    return this.#t?.();
  }
  registerConnectedClientWiring(e) {
    this.#n = e;
  }
  connectedClientWiring() {
    return this.#n;
  }
  registerToolsSwapper(e) {
    this.#o = e;
  }
  acquireToolsSwapper(e) {
    if (this.#o) return () => {};
    return this.#o = e, () => {
      if (this.#o === e) this.#o = void 0;
    };
  }
  swapServerTools(e, t, o) {
    if (!this.#o) return !1;
    return this.#o(e, t, o);
  }
  registerConnections(e) {
    this.#r = e;
  }
  acquireConnections(e) {
    if (this.#r) return () => {};
    return this.#r = e, () => {
      if (this.#r === e) this.#r = void 0;
    };
  }
  connections() {
    return this.#r;
  }
  reset() {
    this.#e = [], this.#t = void 0;
  }
}
class Se {
  #e = void 0;
  #t = void 0;
  #n = void 0;
  #o = void 0;
  #r = void 0;
  #i = void 0;
  #s = !1;
  #u = !1;
  #d = void 0;
  #l = !1;
  #f = void 0;
  #p = void 0;
  #a = void 0;
  mainLoopModelOverride() {
    return this.#e;
  }
  overrideMainLoopModel(e) {
    this.#e = e;
  }
  mainLoopEffortState() {
    return this.#t;
  }
  replaceMainLoopEffortState(e) {
    this.#t = e;
  }
  initialMainLoopModel() {
    return this.#n;
  }
  replaceInitialMainLoopModel(e) {
    this.#n = e;
  }
  initialModelSettingLayer() {
    return this.#o;
  }
  replaceInitialModelSettingLayer(e) {
    this.#o = e;
  }
  resolvedOrgDefault() {
    return this.#r;
  }
  replaceResolvedOrgDefault(e) {
    this.#r = e;
  }
  initialEnvDefaultModel() {
    return this.#i;
  }
  replaceInitialEnvDefaultModel(e) {
    this.#i = e;
  }
  refusalFallbackOccurred() {
    return this.#s;
  }
  markRefusalFallbackOccurred(e) {
    this.#s = !0, this.#d ??= e;
  }
  refusalFallbackHeaderArmed() {
    return this.#u;
  }
  armRefusalFallbackHeader(e) {
    this.#u = !0, this.#d ??= e;
  }
  refusalFallbackLatchOriginRequestId() {
    return this.#d;
  }
  silentLaneServerArmed() {
    return this.#l;
  }
  armSilentLaneFromServer() {
    this.#l = !0;
  }
  forgetRefusalFallbackOccurred() {
    this.#s = !1, this.#u = !1, this.#l = !1, this.#d = void 0;
  }
  refusalFallbackModelLatch() {
    return this.#f;
  }
  replaceRefusalFallbackModelLatch(e, t = "superseded") {
    if (this.#f?.carriedEffort !== void 0 && e?.carriedEffort === void 0) this.#p = t;
    this.#f = e;
  }
  unlatchRefusalFallbackModel(e) {
    this.replaceRefusalFallbackModelLatch(void 0, e);
  }
  takeCarriedEffortEnd() {
    let e = this.#p;
    return this.#p = void 0, e;
  }
  availabilityFallbackChain() {
    return this.#a;
  }
  replaceAvailabilityFallbackChain(e) {
    this.#a = e;
  }
  reset() {
    this.#e = void 0, this.#t = void 0, this.#n = void 0, this.#o = void 0, this.#r = void 0, this.#i = void 0, this.#s = !1, this.#u = !1, this.#l = !1, this.#d = void 0, this.#f = void 0, this.#p = void 0, this.#a = void 0;
  }
}
class ye {
  #e = new Map();
  #t = 0;
  #n = void 0;
  sections() {
    return this.#e;
  }
  recordSection(e, t) {
    this.#e.set(e, t);
  }
  forgetAllSections() {
    this.#e.clear();
  }
  noteInvalidation(e = "other") {
    this.#t += 1, this.#n = e;
  }
  epoch() {
    return this.#t;
  }
  lastInvalidationReason() {
    return this.#n;
  }
  reset() {
    this.#e = new Map();
  }
}
class ve {
  #e = null;
  #t = null;
  #n = null;
  #o = null;
  #r = null;
  #i = 0;
  #s = null;
  #u = void 0;
  #d = 0;
  #l = null;
  #f = null;
  #p = null;
  #a = null;
  #c = null;
  #h = !1;
  #m = null;
  #g = null;
  #y = !1;
  lastAPIRequest() {
    return this.#e;
  }
  replaceLastAPIRequest(e) {
    this.#e = e;
  }
  lastCancelledAPIMessageId() {
    return this.#t;
  }
  replaceLastCancelledAPIMessageId(e) {
    this.#t = e;
  }
  lastAPIRequestMessages() {
    return this.#n;
  }
  replaceLastAPIRequestMessages(e) {
    this.#n = e;
  }
  lastClassifierRequests() {
    return this.#o;
  }
  replaceLastClassifierRequests(e) {
    this.#o = e;
  }
  promptId() {
    return this.#r;
  }
  replacePromptId(e) {
    this.#r = e;
  }
  promptIndex() {
    return this.#i;
  }
  replacePromptIndex(e) {
    this.#i = e;
  }
  incrementPromptIndex() {
    return this.#i++, this.#i;
  }
  lastPersonPrompt() {
    return this.#s;
  }
  replaceLastPersonPrompt(e) {
    this.#s = e;
  }
  lastMainRequestId() {
    return this.#u;
  }
  replaceLastMainRequestId(e) {
    if (this.#u = e, e === void 0) this.#d += 1;
  }
  mainChainReleaseCount() {
    return this.#d;
  }
  lastMainThreadCacheTtlMs() {
    return this.#l;
  }
  replaceLastMainThreadCacheTtlMs(ttlMs, model, o = !1) {
    this.#l = ttlMs, this.#a = Date.now(), this.#p = {
      ttlMs: ttlMs,
      model: model,
      requestAt: this.#a,
      askedAt: o ? this.#p?.askedAt ?? this.#a : this.#a
    }, this.#c = this.#a, this.#h = !0;
  }
  isLastMainThreadAskLive(e, t) {
    let o = this.#p;
    return o !== null && o.requestAt === this.#a && o.ttlMs === e && o.model === t && Date.now() - o.askedAt < e;
  }
  adjustLastMainThreadCacheTtlMs(e) {
    this.#l = e;
  }
  recordLastMainThreadCacheRenewal(e) {
    if (this.#a !== null) this.#f = {
      requestAt: this.#a,
      at: Math.max(e, this.lastMainThreadCacheRenewedAt() ?? -1 / 0)
    };
  }
  lastMainThreadCacheRenewedAt() {
    let e = this.#f;
    return e !== null && e.requestAt === this.#a ? e.at : null;
  }
  lastLiveMainThreadRequestAt() {
    return this.#c;
  }
  lastMainThreadRequestAt() {
    return this.#a;
  }
  mainThreadRequestedInProcess() {
    return this.#h;
  }
  recordMainThreadTurnStart() {
    this.#h = !0;
  }
  replaceLastMainThreadRequest(e, t) {
    this.#a = e, this.#l = t;
  }
  lastMainThreadContextTokens() {
    return this.#m;
  }
  replaceLastMainThreadContextTokens(e) {
    this.#m = e;
  }
  stageResumeSeed(e) {
    this.#S = e;
  }
  applyResumeSeed(e) {
    this.#S = null, this.#l = e.ttlMs, this.#a = e.requestAt, this.#m = e.contextTokens;
  }
  #S = null;
  clearLastMainThreadRequest(e) {
    let t = e !== void 0 && this.#S?.sessionId === e ? this.#S : null;
    this.#S = null, this.#l = t?.ttlMs ?? null, this.#a = t?.requestAt ?? null, this.#m = t?.contextTokens ?? null, this.#c = null, this.#h = !1;
  }
  lastApiCompletionTimestamp() {
    return this.#g;
  }
  replaceLastApiCompletionTimestamp(e) {
    this.#g = e;
  }
  pendingPostCompaction() {
    return this.#y;
  }
  replacePendingPostCompaction(e) {
    this.#y = e;
  }
  reset() {
    this.#e = null, this.#t = null, this.#n = null, this.#o = null, this.#r = null, this.#i = 0, this.#s = null, this.#u = void 0, this.#d += 1, this.#l = null, this.#a = null, this.#c = null, this.#h = !1, this.#m = null, this.#S = null, this.#g = null, this.#y = !1;
  }
}
class be {
  #e = [];
  #t = Object.create(null);
  #n = null;
  #o = 0;
  #r = !1;
  #i = 0;
  changed = Me();
  pendingLoopWakeup = Me();
  tasks() {
    return this.#e;
  }
  schedule(e) {
    this.#e.push(e);
  }
  replaceTasks(e) {
    this.#e = e;
  }
  chainStartedAt(e) {
    return this.#t[e];
  }
  recordChainStart(e, t) {
    this.#t[e] = t;
  }
  forgetChainStart(e) {
    delete this.#t[e];
  }
  tickInFlightPrompt() {
    return this.#n;
  }
  replaceTickInFlightPrompt(e) {
    this.#n = e;
  }
  consecutiveKeepalives() {
    return this.#o;
  }
  replaceConsecutiveKeepalives(e) {
    this.#o = e;
  }
  ended() {
    return this.#r;
  }
  replaceEnded(e) {
    this.#r = e;
  }
  wakeFires() {
    return this.#i;
  }
  recordWakeFire() {
    this.#i++;
  }
  resetWakeFires() {
    this.#i = 0;
  }
  reset() {
    this.#e = [], this.#t = Object.create(null), this.#n = null, this.#o = 0, this.#r = !1, this.#i = 0;
  }
}
class Ce {
  #e = !1;
  #t = !1;
  #n = !1;
  #o = !1;
  #r = !1;
  #i = !1;
  #s = !1;
  #u = !1;
  #d = !1;
  #l = !1;
  #f = !1;
  #p = void 0;
  #a = !1;
  #c = void 0;
  #h = !1;
  #m = !1;
  #g = null;
  #y = null;
  #S = null;
  #C = !1;
  #b = null;
  #v = !1;
  #x = !1;
  #k = !1;
  #T = !1;
  #R = !1;
  #P = void 0;
  #w = void 0;
  #A = void 0;
  #M = null;
  #L = null;
  onboardingShownThisSession() {
    return this.#e;
  }
  replaceOnboardingShownThisSession(e) {
    this.#e = e;
  }
  lspRecommendationShownThisSession() {
    return this.#t;
  }
  replaceLspRecommendationShownThisSession(e) {
    this.#t = e;
  }
  sessionTrustAccepted() {
    return this.#n;
  }
  replaceSessionTrustAccepted(e) {
    this.#n = e;
  }
  homeTrustDialogAccepted() {
    return this.#o;
  }
  replaceHomeTrustDialogAccepted(e) {
    this.#o = e;
  }
  hasExitedPlanMode() {
    return this.#r;
  }
  replaceHasExitedPlanMode(e) {
    this.#r = e;
  }
  needsPlanModeExitAttachment() {
    return this.#i;
  }
  replaceNeedsPlanModeExitAttachment(e) {
    this.#i = e;
  }
  needsAutoModeExitAttachment() {
    return this.#s;
  }
  replaceNeedsAutoModeExitAttachment(e) {
    this.#s = e;
  }
  memoryToggledOff() {
    return this.#u;
  }
  replaceMemoryToggledOff(e) {
    this.#u = e;
  }
  autoMemoryOffThisSession() {
    return this.#d;
  }
  replaceAutoMemoryOffThisSession(e) {
    this.#d = e;
  }
  memoryPausedByCommand() {
    return this.#f;
  }
  replaceMemoryPausedByCommand(e) {
    this.#f = e;
  }
  accountMemorySessionMode() {
    return this.#p;
  }
  replaceAccountMemorySessionMode(e, t = !1) {
    this.#p = e, this.#a = t && e !== void 0;
  }
  accountMemorySessionModeRestored() {
    return this.#a;
  }
  accountMemoryLaunchMode() {
    return this.#c;
  }
  replaceAccountMemoryLaunchMode(e) {
    this.#c = e;
  }
  restoredMemoryPause() {
    return this.#h;
  }
  replaceRestoredMemoryPause(e) {
    this.#h = e;
  }
  restoredAutoMemoryOff() {
    return this.#l;
  }
  replaceRestoredAutoMemoryOff(e) {
    this.#l = e;
  }
  teardownUnwindRequested() {
    return this.#C;
  }
  replaceTeardownUnwindRequested(e) {
    this.#C = e;
  }
  backgroundAutoModeSetupInFlight() {
    return this.#m;
  }
  replaceBackgroundAutoModeSetupInFlight(e) {
    this.#m = e;
  }
  deferredToolStubGateLatch() {
    return this.#g;
  }
  replaceDeferredToolStubGateLatch(e) {
    this.#g = e;
  }
  verifySkillRolloutGateLatch() {
    return this.#y;
  }
  replaceVerifySkillRolloutGateLatch(e) {
    this.#y = e;
  }
  commitSkillRolloutGateLatch() {
    return this.#S;
  }
  replaceCommitSkillRolloutGateLatch(e) {
    this.#S = e;
  }
  memoryToolsShapeLatch() {
    return this.#b;
  }
  replaceMemoryToolsShapeLatch(e) {
    this.#b = e;
  }
  proposeGoalAvailabilityLogged() {
    return this.#v;
  }
  markProposeGoalAvailabilityLogged() {
    this.#v = !0;
  }
  activeRoutine() {
    return this.#w;
  }
  replaceActiveRoutine(e) {
    this.#w = e;
  }
  inheritedTeamName() {
    return this.#A;
  }
  replaceInheritedTeamName(e) {
    this.#A = e;
  }
  teleportedSessionInfo() {
    return this.#M;
  }
  replaceTeleportedSessionInfo(e) {
    this.#M = e;
  }
  markFirstTeleportMessageLogged() {
    if (this.#M) this.#M.hasLoggedFirstMessage = !0;
  }
  cachedClaudeMdContent() {
    return this.#L;
  }
  replaceCachedClaudeMdContent(e) {
    this.#L = e;
  }
  accountSkillsSyncEnabled() {
    return this.#x;
  }
  replaceAccountSkillsSyncEnabled(e) {
    this.#x = e;
  }
  skillsSyncVetoed() {
    return this.#k;
  }
  replaceSkillsSyncVetoed(e) {
    this.#k = e;
  }
  accountPluginsSyncEnabled() {
    return this.#T;
  }
  replaceAccountPluginsSyncEnabled(e) {
    this.#T = e;
  }
  pluginsSyncVetoed() {
    return this.#R;
  }
  replacePluginsSyncVetoed(e) {
    this.#R = e;
  }
  armPendingContextCompacted(e) {
    this.#P = e;
  }
  consumePendingContextCompacted() {
    let e = this.#P;
    return this.#P = void 0, e;
  }
  forgetPendingContextCompacted() {
    this.#P = void 0;
  }
  reset() {
    this.#x = !1, this.#k = !1, this.#T = !1, this.#R = !1, this.#e = !1, this.#t = !1, this.#n = !1, this.#o = !1, this.#r = !1, this.#i = !1, this.#s = !1, this.#u = !1, this.#d = !1, this.#f = !1, this.#p = void 0, this.#a = !1, this.#c = void 0, this.#h = !1, this.#l = !1, this.#C = !1, this.#m = !1, this.#g = null, this.#y = null, this.#S = null, this.#b = null, this.#v = !1, this.#w = void 0, this.#A = void 0, this.#M = null, this.#L = null, this.#P = void 0;
  }
}
function rn() {
  return {
    messagesArriving: 0,
    lastInLine: Promise.resolve(),
    gaveUpOn: void 0,
    besideLine: 0,
    lastBesideLine: Promise.resolve(),
    gaveUpOnBeside: void 0,
    pathsArrivingBeside: new Map(),
    toolCallsWaiting: 0,
    pathsArriving: new Map()
  };
}
class xe {
  #e = new Map();
  #t = new Map();
  #n = null;
  #o = new Map();
  #r = new Set();
  #i = new Set();
  #s = new Set();
  #u = new Set();
  #d = new Set();
  #l = new Set();
  #f = new Set();
  #p = new Set();
  #a = new Set();
  #c = new Set();
  #h = new Map();
  #m = new Map();
  #g = new Map();
  #y;
  #S = {
    byFileUuid: new Map(),
    recentPrefetchStarts: []
  };
  #C = rn();
  #b = new Set();
  #v = void 0;
  #x = void 0;
  #k = void 0;
  #T = void 0;
  #R = void 0;
  planSlugCache() {
    return this.#e;
  }
  forgetPlanSlug(e) {
    this.#e.delete(e);
  }
  pendingBranchLinks() {
    return this.#t;
  }
  replacePendingBranchLinks() {
    this.#t = new Map();
  }
  vimSharedState() {
    return this.#n;
  }
  replaceVimSharedState(e) {
    this.#n = e;
  }
  agentColorMap() {
    return this.#o;
  }
  sessionCreatedTeams() {
    return this.#r;
  }
  sessionSpawnedTeammatePanes() {
    return this.#i;
  }
  surfacedHookSpawnFailures() {
    return this.#s;
  }
  bareMcpServerMatchersWarned() {
    return this.#u;
  }
  pendingConversationEditKinds() {
    return this.#d;
  }
  clientTruncatedAssistantIds() {
    return this.#l;
  }
  heldStatelessReplyIds() {
    return this.#f;
  }
  unsupportedThreadKeys() {
    return this.#p;
  }
  pendingPrLinks() {
    return this.#a;
  }
  policyPredicateTelemetryEmitted() {
    return this.#c;
  }
  humanAttachmentDigests() {
    return this.#h;
  }
  inboundAttachmentFiles() {
    return this.#m;
  }
  filesPlacedByName() {
    return this.#g;
  }
  filesPlacedByNameRead() {
    return this.#y;
  }
  setFilesPlacedByNameRead(e) {
    this.#y = e;
  }
  inboundAttachmentDownloads() {
    return this.#S;
  }
  arrivingInboundFiles() {
    return this.#C;
  }
  chromeAvailabilityStagesLogged() {
    return this.#b;
  }
  replaceChromeAvailabilityStagesLogged(e) {
    if (this.#b = new Set(), e) this.#v = Date.now();
  }
  chromeAvailabilityAnchorMs() {
    return this.#v;
  }
  pendingGoalIdleCheckin() {
    return this.#x;
  }
  replacePendingGoalIdleCheckin(e) {
    this.#x = e;
  }
  pendingGoalReprompt() {
    return this.#k;
  }
  replacePendingGoalReprompt(e) {
    this.#k = e;
  }
  goalInterruptionStreak() {
    return this.#T;
  }
  replaceGoalInterruptionStreak(e) {
    this.#T = e;
  }
  workerCheckin() {
    return this.#R;
  }
  replaceWorkerCheckin(e) {
    this.#R = e;
  }
  reset() {
    this.#e = new Map(), this.#t = new Map(), this.#n = null, this.#o = new Map(), this.#r = new Set(), this.#i = new Set(), this.#s = new Set(), this.#u = new Set(), this.#d = new Set(), this.#l = new Set(), this.#f = new Set(), this.#p = new Set(), this.#a = new Set(), this.#c = new Set(), this.#h = new Map(), this.#m = new Map(), this.#g = new Map(), this.#y = void 0;
    for (let e of this.#S.byFileUuid.values()) clearTimeout(e.expiry), e.abort.abort();
    this.#S = {
      byFileUuid: new Map(),
      recentPrefetchStarts: []
    }, this.#C = rn(), this.#b = new Set(), this.#v = void 0, clearTimeout(this.#x), this.#x = void 0, clearTimeout(this.#k), this.#k = void 0, this.#T = void 0, clearInterval(this.#R?.timer), this.#R = void 0;
  }
}
var sn = {
  renderTarget: "ink",
  workspace: "local",
  canDrive: !0,
  transcriptSource: "local-jsonl",
  remote: null
};
class Re {
  #e = !1;
  #t = void 0;
  #n = void 0;
  #o = void 0;
  #r = void 0;
  #i = void 0;
  #s = void 0;
  #u = null;
  #d = !1;
  #l = void 0;
  #f = sn;
  #p = !1;
  #a = "idle";
  attacherCapsChanged = Me();
  rvSupervisorLinkChanged = Me();
  sdkDialogHostActive() {
    return this.#e;
  }
  markSdkDialogHostActive(e) {
    this.#e = e;
  }
  sdkSupportedDialogKinds() {
    return this.#t;
  }
  sdkSupportedDialogKindsSource() {
    return this.#n;
  }
  declareDialogKinds(e, t) {
    this.#t = e, this.#n = e === void 0 ? void 0 : t;
  }
  sdkPerTaskStopAffordance() {
    return this.#o;
  }
  declarePerTaskStopAffordance(e) {
    this.#o = e;
  }
  sdkRapidFollowupPreempt() {
    return this.#r;
  }
  declareRapidFollowupPreempt(e) {
    this.#r = e;
  }
  sdkForwardNestedSubagentToolCalls() {
    return this.#i;
  }
  declareForwardNestedSubagentToolCalls(e) {
    this.#i = e;
  }
  hostRendersChromeSetupOffer() {
    return this.#s;
  }
  declareHostRendersChromeSetupOffer(e) {
    this.#s = e;
  }
  attacherCaps() {
    return this.#u;
  }
  replaceAttacherCaps(e) {
    this.#u = e, this.attacherCapsChanged.emit();
  }
  rvSupervisorLinkLive() {
    return this.#d;
  }
  replaceRvSupervisorLinkLive(e) {
    if (this.#d === e) return;
    this.#d = e, this.rvSupervisorLinkChanged.emit();
  }
  sdkBetas() {
    return this.#l;
  }
  replaceSdkBetas(e) {
    this.#l = e;
  }
  caps() {
    return this.#f;
  }
  replaceCaps(e) {
    this.#f = e;
  }
  markRemote(e) {
    this.#f = {
      ...this.#f,
      workspace: e ? "remote" : "local"
    };
  }
  replBridgeActive() {
    return this.#p;
  }
  replaceReplBridgeActive(e) {
    if (this.#p === e) return;
    this.#p = e;
  }
  mainLoopBusy() {
    return this.#a !== "idle";
  }
  mainQueryRunning() {
    return this.#a === "running";
  }
  replaceMainLoopStatus(e) {
    this.#a = e;
  }
  reset() {
    this.#e = !1, this.#t = void 0, this.#n = void 0, this.#o = void 0, this.#r = void 0, this.#i = void 0, this.#s = void 0, this.#u = null, this.#l = void 0, this.#f = sn, this.#p = !1, this.#a = "idle", this.#d = !1, this.attacherCapsChanged.clear(), this.rvSupervisorLinkChanged.clear();
  }
}
var an = 150;
class Te {
  #e = Date.now();
  #t = !1;
  #n = 0;
  interactionFired = Me();
  #o = void 0;
  terminalFocusFired = Me();
  #r = !1;
  #i;
  lastInteractionTime() {
    return this.#e;
  }
  lastSubmitTime() {
    return this.#n;
  }
  recordSubmit() {
    this.#n = Date.now();
  }
  recordInteraction(e) {
    if (e) this.#s();else this.#t = !0;
  }
  flushIfDirty() {
    if (this.#t) this.#s();
  }
  #s() {
    this.#e = Date.now(), this.#t = !1, this.interactionFired.emit();
  }
  resetBaseline() {
    this.#e = Date.now(), this.#t = !1;
  }
  terminalFocus() {
    return this.#o;
  }
  updateTerminalFocus(e) {
    this.#o = e, this.terminalFocusFired.emit();
  }
  scrollDraining() {
    return this.#r;
  }
  markScrollActivity() {
    if (this.#r = !0, this.#i) clearTimeout(this.#i);
    this.#i = setTimeout(() => {
      this.#r = !1, this.#i = void 0;
    }, an), this.#i.unref?.();
  }
  async waitForScrollIdle() {
    while (this.#r) await new Promise(e => setTimeout(e, an));
  }
  reset() {
    this.#e = Date.now(), this.#n = 0, this.#o = void 0, this.interactionFired.clear(), this.terminalFocusFired.clear();
  }
}
var hu = "(no content)",
  r1 = "No response requested.",
  ui = "<synthetic>",
  a3s = "Auto Mode Active",
  RJn = "the tracked path is (or became) a link or other non-regular file, its directory changed since the checkpoint, or its backup could not be safely read",
  ign = "Claude can't use thinking from another organization",
  l3s = "resume signed in to that organization to use it again";
function iC(e) {
  return (e.type === "user" || e.type === "assistant") && e.isVirtual === !0;
}
function TQ(e) {
  return e.type === "assistant" && e.isApiErrorMessage === !0 && e.message?.model === ui;
}
function tV(e) {
  return e.type === "system" && e.subtype === "local_command";
}
function dS(e) {
  if (e.type === "api_system") return !1;
  return e.type === "progress" || e.type === "system" && !tV(e) || iC(e) || TQ(e) || e.type === "attachment" && (e.attachment?.type === "thinking_drop" || e.attachment?.type === "credential_org" || e.attachment?.type === "prompt_snapshot" || e.attachment?.type === "prompt_render_point" || e.attachment?.type === "deferred_tools_record");
}
var Gi = ["sdk_single_prompt_gate", "subagent_estimate", "subagent_final_turn", "rows_unreadable"],
  Ki = 8;
class Pe {
  byAgent = new Map();
  attemptsByAgent = new Map();
  cappedFailuresByAgent = new Map();
  armGateEventEmitted = new Set();
  vetoedUnderPrompt = new Map();
  sidecarIo = Promise.resolve();
  rehydrateAttemptedSessions = new Set();
  sidecarReadsAhead = new Map();
  get(e) {
    return this.byAgent.get(e);
  }
  has(e) {
    return this.byAgent.has(e);
  }
  put(e, t) {
    this.byAgent.set(e, t);
  }
  remove(e) {
    this.byAgent.delete(e);
  }
  nextAttemptNumber(e) {
    let t = (this.attemptsByAgent.get(e) ?? 0) + 1;
    return this.attemptsByAgent.set(e, t), t;
  }
  consecutiveCountedFailures(e) {
    return this.cappedFailuresByAgent.get(e) ?? 0;
  }
  recordCountedFailure(e) {
    let t = (this.cappedFailuresByAgent.get(e) ?? 0) + 1;
    return this.cappedFailuresByAgent.set(e, t), t;
  }
  clearCountedFailures(e) {
    this.cappedFailuresByAgent.delete(e);
  }
  recordVeto(e, t) {
    this.vetoedUnderPrompt.set(e, t);
  }
  isVetoedUnder(e, t) {
    return this.vetoedUnderPrompt.get(e) === t;
  }
  latchArmGateEvent(e) {
    if (this.armGateEventEmitted.has(e)) return !1;
    return this.armGateEventEmitted.add(e), !0;
  }
  enqueueSidecarIo(e, t) {
    return this.sidecarIo = this.sidecarIo.then(e, e).catch(t), this.sidecarIo;
  }
  sidecarIoSettled() {
    return this.sidecarIo;
  }
  hasAttemptedRehydrate(e) {
    return this.rehydrateAttemptedSessions.has(e);
  }
  markRehydrateAttempted(e) {
    this.rehydrateAttemptedSessions.add(e);
  }
  keepSidecarReadAhead(e, t) {
    this.sidecarReadsAhead.delete(e);
    while (this.sidecarReadsAhead.size >= Ki) {
      let o = this.sidecarReadsAhead.keys().next().value;
      if (o === void 0) break;
      this.sidecarReadsAhead.delete(o);
    }
    this.sidecarReadsAhead.set(e, t);
  }
  takeSidecarReadAhead(e) {
    let t = this.sidecarReadsAhead.get(e);
    return this.sidecarReadsAhead.delete(e), t;
  }
  dropSidecarReadAhead(e) {
    this.sidecarReadsAhead.delete(e);
  }
  forgetSubagentTelemetry(e) {
    this.attemptsByAgent.delete(e), this.cappedFailuresByAgent.delete(e), this.vetoedUnderPrompt.delete(e);
    for (let t of Gi) this.armGateEventEmitted.delete(`${e}:${t}`);
  }
}
function xDe(e) {
  return e ?? "main";
}
function fzo({
  messages: messages,
  rowUuids: rowUuids
}, lastUuid) {
  return {
    lastUuid: lastUuid,
    seenUuids: new Set(messages.map(item => item.uuid)),
    rowUuids: rowUuids
  };
}
function M1r({
  coverage: coverage,
  kept: kept,
  sent: sent,
  received: received,
  instructions: instructions,
  fit: fit
}) {
  let a = ({
      uuid: uuid
    }) => coverage.seenUuids.has(uuid),
    l = new Set(sent.messages.map(item => item.uuid));
  if (!l.has(coverage.lastUuid)) return {
    kind: "refuse",
    reason: "boundary_uuid_missing"
  };
  if (!coverage.rowUuids.every(item => l.has(item))) return {
    kind: "refuse",
    reason: "covered_messages_changed"
  };
  if (kept.some(item => a(item) && !l.has(item.uuid))) return {
    kind: "refuse",
    reason: "kept_message_missing"
  };
  if (sent.messages.slice(0, sent.messages.findLastIndex(a)).some(item => item.type === "assistant" && !iC(item) && !a(item))) return {
    kind: "refuse",
    reason: "unseen_reply"
  };
  let c = sent.rowUuids.slice(0, sent.rowUuids.findLastIndex(p => coverage.seenUuids.has(p)) + 1);
  if (instructions || !received.messages.some(({
    uuid: uuid_2
  }) => uuid_2 === coverage.lastUuid) || !ln(received.rowUuids, c)) return {
    kind: "refuse",
    reason: "hook_rewrite"
  };
  let y = received.messages.findLastIndex(a),
    u = received.messages.flatMap((p, index) => p.type === "progress" || a(p) ? [] : [{
      message: p,
      isEarly: index < y
    }]),
    f = ({
      message: message,
      isEarly: isEarly
    }) => isEarly && iC(message),
    h = new Set(u.filter(f).map(({
      message: message_2
    }) => message_2)),
    g = u.filter(item => !f(item)),
    tail = g.map(({
      message: message_3
    }) => message_3),
    b = fit && Vi(fit, received.messages.filter(item => !h.has(item)), [...kept, ...tail]);
  if (b?.givesWay) return {
    kind: "refuse",
    reason: "would_not_fit",
    sizes: b.sizes
  };
  return {
    kind: "reuse",
    tail: tail,
    earlyTailCount: F(g, ({
      isEarly: isEarly_2
    }) => isEarly_2),
    displayOnlyLeftOutCount: h.size,
    headReordered: !ln(received.rowUuids, coverage.rowUuids),
    sizes: b?.sizes
  };
}
function Vi({
  thresholdTokens: thresholdTokens,
  windowTokens: windowTokens,
  liveTokens: liveTokens,
  madeFromTokens: madeFromTokens,
  summary: summary,
  sizeOf: sizeOf
}, a, l) {
  let d = new Set(l.map(item => item.uuid)),
    c = new Set(a.map(item => item.uuid)),
    y = a.filter(item => !d.has(item.uuid)),
    u = a.filter(item => d.has(item.uuid)),
    f = l.filter(item => !c.has(item.uuid)),
    postSwapTokens = Math.max(liveTokens - sizeOf(y), sizeOf(u)) + sizeOf([...summary, ...f]);
  return {
    sizes: {
      postSwapTokens: postSwapTokens,
      thresholdTokens: thresholdTokens,
      windowTokens: windowTokens
    },
    givesWay: postSwapTokens >= thresholdTokens && madeFromTokens < windowTokens
  };
}
function ln(e, t) {
  return t.every((item, index) => e[index] === item);
}
function mzo(e) {
  return e.findLast(o => o.type === "user" && !o.isMeta && o.toolUseResult === void 0 && (typeof o.message.content === "string" || !o.message.content.some(item => item.type === "tool_result")))?.uuid ?? "";
}
function d3s(e, t, o) {
  e.recordVeto(xDe(t), mzo(o));
}
class Ae {
  #e = void 0;
  get current() {
    return this.#e;
  }
  adopt(e) {
    this.#e = e;
  }
}
class Le {
  #e = null;
  #t = null;
  mainAgentId(e) {
    return this.#e ??= Vr(e), this.#e;
  }
  projectDir() {
    return this.#t;
  }
  replaceProjectDir(e) {
    this.#t = e;
  }
}
class Oe {
  openToolUseId;
  answeredThisSession = !1;
  get answered() {
    return this.answeredThisSession;
  }
  markAnswered() {
    this.answeredThisSession = !0;
  }
  isOpenElsewhere(e) {
    return this.openToolUseId !== void 0 && this.openToolUseId !== e;
  }
  open(e) {
    this.openToolUseId = e;
  }
  closeFor(e) {
    if (e !== void 0 && this.openToolUseId === e) this.openToolUseId = void 0;
  }
}
class Ie {
  granted = !1;
  isGranted() {
    return this.granted;
  }
  grant() {
    this.granted = !0;
  }
}
class Fe {
  inFlight = null;
  startedForTurnEnd = !1;
  reset() {
    this.inFlight?.abort(), this.inFlight = null, this.startedForTurnEnd = !1;
  }
}
class Ee {
  firstSyncPromise = null;
  accountListing = "pending";
  syncErrors = [];
  lastRoundListed = !1;
  listedStamp = null;
  changesLanded = 0;
  changesReloaded = 0;
  reloadsCompleted = 0;
  holdsSet = 0;
  reloadHeld = !1;
  lastCompleteList = null;
  lastSyncedLaneLoad = null;
  syncedLaneOpened = !1;
  syncedDirsLoadedHere = new Set();
  removalsDeferredHere = new Set();
  pendingTrashRemovals = [];
  ensureBucketRoot = null;
  deferredRelist = null;
  missingEntry = {
    resync: null,
    resyncAt: -1 / 0,
    swept: !1
  };
  settingsInstall = {
    current: null,
    next: null,
    loaded: null
  };
  holdReload() {
    this.reloadHeld = !0, this.holdsSet++;
  }
  endHoldSetBefore(e) {
    this.reloadHeld &&= this.holdsSet !== e;
  }
  reloaded(e) {
    this.changesReloaded = Math.max(this.changesReloaded, e), this.reloadsCompleted++;
  }
}
class De {
  abortController = null;
  eligibleTurns = 0;
  unusedInARow = 0;
  askOnNextTurn() {
    this.eligibleTurns = 0;
  }
  reset() {
    this.abortController?.abort(), this.abortController = null;
  }
  arm() {
    let abortController = new AbortController();
    return this.abortController = abortController, abortController;
  }
}
class He {
  #e = void 0;
  #t = void 0;
  ccrSessionID() {
    return this.#e;
  }
  latchCcrSessionID(e) {
    this.#e = e;
  }
  syncEnabled() {
    return this.#t;
  }
  latchSyncEnabled(e) {
    return this.#t = e, e;
  }
}
class Be {
  autonomousPreambleDelivered = !1;
  lastLoopFileDelivered = null;
  reset() {
    this.autonomousPreambleDelivered = !1, this.lastLoopFileDelivered = null;
  }
}
class _e {
  exchanges = [];
  replace(e) {
    this.exchanges = e;
  }
  append(question, response, fallbackNotice) {
    this.exchanges = [...this.exchanges, {
      question: question,
      response: response,
      ...(fallbackNotice && {
        fallbackNotice: fallbackNotice
      })
    }].slice(-20);
  }
  pendingReopen = null;
  reopenAway = !1;
  get reopenPending() {
    return this.pendingReopen !== null;
  }
  armReopen(e, t) {
    if (this.pendingReopen) {
      this.pendingReopen.owners.add(e);
      return;
    }
    this.pendingReopen = {
      owners: new Set([e]),
      cancel: t()
    };
  }
  clearPendingReopen(e) {
    let pendingReopen = this.pendingReopen;
    if (!pendingReopen) {
      this.reopenAway = !1;
      return;
    }
    if (e !== void 0) {
      if (pendingReopen.owners.delete(e), pendingReopen.owners.size > 0) return;
    }
    pendingReopen.cancel(), this.pendingReopen = null, this.reopenAway = !1;
  }
  reopener = null;
  setReopener(e) {
    this.reopener = e;
  }
  get hasReopener() {
    return this.reopener !== null;
  }
  reopenNow() {
    return this.reopener?.() ?? !1;
  }
  inFlightQuestions = [];
  get inFlight() {
    return this.inFlightQuestions.at(-1) ?? null;
  }
  pendingBesidesTop() {
    return this.inFlightQuestions.slice(0, -1);
  }
  setInFlight(e) {
    if (!this.inFlightQuestions.includes(e)) this.inFlightQuestions = [...this.inFlightQuestions, e];
  }
  clearInFlight(e) {
    if (this.inFlightQuestions.includes(e)) this.inFlightQuestions = this.inFlightQuestions.filter(item => item !== e);
  }
}
var Ji = 16;
class Ue {
  pending = null;
  shownThisSession = !1;
  changed = Me();
  submitted = [];
  submittedChanged = Me();
  subscribe = this.changed.subscribe;
  getSnapshot = () => this.pending;
  subscribeSubmitted = this.submittedChanged.subscribe;
  submit(e) {
    if (this.shownThisSession) return;
    if (this.submitted.length >= Ji) this.submitted.shift();
    this.submitted.push(e), this.submittedChanged.emit();
  }
  takeSubmitted() {
    let submitted = this.submitted;
    return this.submitted = [], submitted;
  }
  offer(e) {
    if (this.shownThisSession) return;
    this.pending = e, this.changed.emit();
  }
  dismiss() {
    if (this.pending !== null) this.pending = null, this.changed.emit();
  }
  markShown() {
    this.shownThisSession = !0;
  }
}
class AJn {
  lastEmittedAt = new Map();
  shouldEmit(e, t, o) {
    let r = this.lastEmittedAt.get(e) || 0;
    if (t - r < o) return !1;
    if (this.lastEmittedAt.size >= 100) {
      let i = this.lastEmittedAt.keys().next().value;
      if (i !== void 0) this.lastEmittedAt.delete(i);
    }
    return this.lastEmittedAt.set(e, t), !0;
  }
}
var XZe = Symbol("permission-stash-evicted");
class qe {
  entriesCap;
  evictedKeysCap;
  lanes = {
    write: new Map(),
    read: new Map()
  };
  evicted = {
    write: new Set(),
    read: new Set()
  };
  poisoned = {
    write: !1,
    read: !1
  };
  identities = new Map();
  identitiesEvicted = new Set();
  identitiesPoisoned = !1;
  constructor(e = 256, t = 1048576) {
    this.entriesCap = e;
    this.evictedKeysCap = t;
  }
  stash(e, t, o, r = "write") {
    if (e === void 0) return;
    let i = this.lanes[r],
      s = this.evicted[r],
      a = je(e, t);
    if (s.has(a)) return;
    let l = i.get(a);
    if (l !== void 0) {
      let d = new Set(o);
      i.set(a, l.filter(item => d.has(item)));
      return;
    }
    if (i.size >= this.entriesCap) {
      let d = i.keys().next().value;
      if (d !== void 0) {
        if (i.delete(d), s.add(d), s.size > this.evictedKeysCap) {
          this.poisoned[r] = !0;
          let c = s.values().next().value;
          if (c !== void 0) s.delete(c);
        }
      }
    }
    i.set(a, o);
  }
  holds(e, t, o = "write") {
    return e !== void 0 && this.lanes[o].has(je(e, t));
  }
  stashIdentity(e, t, o) {
    if (e === void 0) return;
    let r = this.identities.get(e),
      i = r?.get(t);
    if (r !== void 0 && i !== void 0) {
      if (i === null || o === null || i.dev !== o.dev || i.ino !== o.ino) r.set(t, null);
      return;
    }
    let s = this.identitiesEvicted.has(e) || this.identitiesPoisoned;
    if (r === void 0) {
      if (!s && this.identities.size >= this.entriesCap) {
        let a = this.identities.keys().next().value;
        if (a !== void 0) {
          if (this.identities.delete(a), this.identitiesEvicted.add(a), this.identitiesEvicted.size > this.evictedKeysCap) {
            this.identitiesPoisoned = !0;
            let l = this.identitiesEvicted.values().next().value;
            if (l !== void 0) this.identitiesEvicted.delete(l);
          }
        }
      }
      r = new Map(), this.identities.set(e, r);
    }
    r.set(t, s ? null : o);
  }
  takeIdentity(e, t) {
    if (e === void 0) return;
    let o = this.identities.get(e),
      r = o?.get(t);
    if (o?.delete(t) && o.size === 0) this.identities.delete(e);
    return r;
  }
  consume(e, t, o = "write") {
    if (e === void 0) return;
    let r = this.lanes[o],
      i = je(e, t),
      s = r.get(i),
      a = s === void 0 && (this.evicted[o].delete(i) || this.poisoned[o]),
      l = `${e}\x00`;
    for (let d of r.keys()) if (d.startsWith(l)) r.delete(d);
    if (o === "read") this.identities.delete(e), this.identitiesEvicted.delete(e);
    if (a) return XZe;
    return s;
  }
}
function je(e, t) {
  return `${e}\x00${t}`;
}
var dn = "NoProjectDirectoryError",
  un = new z(() => ({}));
var cn = () => {};
function pn(e) {
  cn = e;
}
class f0 extends Error {
  name = dn;
  constructor() {
    super("This session has no working directory.");
    try {
      cn(this);
    } catch {}
  }
}
function PDe(e) {
  try {
    return e instanceof Error && e.name === dn;
  } catch {
    return !1;
  }
}
function vo(e) {
  let {
    project: project
  } = e;
  if (project === null) throw new f0();
  return project;
}
function D1r(e) {
  return fn({
    kind: "root",
    host: e.host,
    id: e.id,
    parentId: e.parentId
  }, e.project, e.project?.isolationRoot);
}
function I(e, t) {
  let o = t.originalCwd ?? e?.originalCwd,
    r = t.projectRoot ?? e?.projectRoot,
    i = t.cwd ?? e?.cwd;
  if (o === void 0 && r === void 0 && i === void 0) return null;
  if (o === void 0 || r === void 0 || i === void 0) throw new f0();
  return {
    originalCwd: $n(o),
    projectRoot: $n(r),
    cwd: $n(i)
  };
}
function fn(e, t, o) {
  let r = {
      project: t === null ? null : I(null, t)
    },
    i = o,
    s = Me(),
    observers = e.kind === "fork" ? e.root.observers : new ue(),
    autonomousLoopPreamble = e.kind === "fork" ? e.root.autonomousLoopPreamble : new Be(),
    precompute = e.kind === "fork" ? e.root.precompute : new Pe(),
    c = {
      get originalCwd() {
        return vo(r).originalCwd;
      },
      get projectRoot() {
        return vo(r).projectRoot;
      },
      get cwd() {
        return vo(r).cwd;
      },
      get isolationRoot() {
        return i;
      }
    },
    y = {
      host: e.kind === "fork" ? e.root.host : e.host,
      get id() {
        return e.kind === "fork" ? e.root.id : e.id;
      },
      get parentId() {
        return e.kind === "fork" ? e.root.parentId : e.parentId;
      },
      get root() {
        return e.kind === "fork" ? e.root : y;
      },
      get project() {
        return r.project === null ? null : c;
      },
      observers: observers,
      autonomousLoopPreamble: autonomousLoopPreamble,
      btwHistory: e.kind === "fork" ? e.root.btwHistory : new _e(),
      ccrRecap: e.kind === "fork" ? e.root.ccrRecap : new Fe(),
      conversationLatches: e.kind === "fork" ? e.root.conversationLatches : new ce(),
      costLedger: e.kind === "fork" ? e.root.costLedger : new pe(),
      engineStore: e.kind === "fork" ? e.root.engineStore : new Ae(),
      usageCreditsOnlyModelConsentSlots: e.kind === "fork" ? e.root.usageCreditsOnlyModelConsentSlots : new fe(),
      hookRegistry: e.kind === "fork" ? e.root.hookRegistry : new ge(),
      identity: e.kind === "fork" ? e.root.identity : new Le(),
      invokedSkills: e.kind === "fork" ? e.root.invokedSkills : new he(),
      mcpSessionWiring: e.kind === "fork" ? e.root.mcpSessionWiring : new me(),
      modelSelection: e.kind === "fork" ? e.root.modelSelection : new Se(),
      promptAssembly: e.kind === "fork" ? e.root.promptAssembly : new ye(),
      promptSuggestion: e.kind === "fork" ? e.root.promptSuggestion : new De(),
      pendingHint: e.kind === "fork" ? e.root.pendingHint : new Ue(),
      pluginsSync: e.kind === "fork" ? e.root.pluginsSync : new Ee(),
      precompute: precompute,
      requestJournal: e.kind === "fork" ? e.root.requestJournal : new ve(),
      sessionCron: e.kind === "fork" ? e.root.sessionCron : new be(),
      sessionFlags: e.kind === "fork" ? e.root.sessionFlags : new Ce(),
      sessionRefsGate: e.kind === "fork" ? e.root.sessionRefsGate : new He(),
      sessionScratch: e.kind === "fork" ? e.root.sessionScratch : new xe(),
      surfaceCapabilities: e.kind === "fork" ? e.root.surfaceCapabilities : new Re(),
      toolProgressThrottle: e.kind === "fork" ? e.root.toolProgressThrottle : new AJn(),
      userPresence: e.kind === "fork" ? e.root.userPresence : new Te(),
      workflowUsageConsent: e.kind === "fork" ? e.root.workflowUsageConsent : new Ie(),
      outsideReadPrompt: e.kind === "fork" ? e.root.outsideReadPrompt : new Oe(),
      writePermissionStash: e.kind === "fork" ? e.root.writePermissionStash : new qe(),
      subscribe(u) {
        let f = s.subscribe(u);
        if (e.kind !== "fork") return f;
        let h = e.root,
          {
            id: id,
            parentId: parentId
          } = h,
          b = h.subscribe(() => {
            if (h.id === id && h.parentId === parentId) return;
            id = h.id, parentId = h.parentId, u();
          });
        return () => {
          f(), b();
        };
      },
      setCwd(cwd) {
        y.update({
          project: {
            cwd: cwd
          }
        });
      },
      setIsolationRoot(u) {
        if (u !== i) i = u, s.emit();
      },
      withProject(u) {
        return fn({
          kind: "fork",
          root: y.root
        }, I(r.project, u), u.isolationRoot ?? i);
      },
      update(u) {
        let f = u.project === void 0 ? r.project : u.project === null ? null : I(r.project, u.project),
          h = !1;
        if (u.id !== void 0 || "parentId" in u) {
          if (e.kind === "fork") throw Error("A withProject fork cannot re-identify the session \u2014 update the root session instead");
          if (u.id !== void 0 && u.id !== e.id) e.id = u.id, h = !0;
          if ("parentId" in u && u.parentId !== e.parentId) e.parentId = u.parentId, h = !0;
        }
        if (f?.originalCwd !== r.project?.originalCwd || f?.projectRoot !== r.project?.projectRoot || f?.cwd !== r.project?.cwd) r.project = f, h = !0;
        let g = u.project?.isolationRoot;
        if (g !== void 0 && g !== i) i = g, h = !0;
        if (h) s.emit();
      }
    };
  return y;
}
class at {
  #e;
  #t = new WeakMap();
  constructor(e) {
    this.#e = e;
  }
  peek(e) {
    return this.#t.get(e.root);
  }
  of(e) {
    let t = e.root,
      o = this.#t.get(t);
    if (o !== void 0) return o;
    let r = this.#e();
    return this.#t.set(t, r), r;
  }
  drop(e) {
    this.#t.delete(e.root);
  }
}
class We {
  #e = !1;
  #t = null;
  #n = !1;
  #o = void 0;
  #r = !1;
  #i = !1;
  #s = !1;
  #u = !1;
  #d = void 0;
  #l = !1;
  #f = !1;
  #p = null;
  #a = null;
  #c = new Map();
  #h = "cli";
  #m = "fresh";
  #g = void 0;
  #y = !1;
  #S = !1;
  #C = [];
  #b = !1;
  #v = !1;
  #x = !1;
  #k = new Set();
  #T = !1;
  #R = "none";
  #P = !1;
  #w = !1;
  #A = !1;
  #M = !1;
  #L = !1;
  #I = void 0;
  #F = void 0;
  #E = void 0;
  #D = void 0;
  #H = !1;
  #B = !1;
  #_ = !1;
  #U = null;
  #j = null;
  #q = !0;
  #W = null;
  #O = !1;
  #Y = Me();
  #N = null;
  #G = !1;
  #K = !1;
  #V = {};
  #J = null;
  #z = "none";
  #Q = void 0;
  isInteractive() {
    return this.#e;
  }
  replaceIsInteractive(e) {
    this.#e = e;
  }
  printOutputFormat() {
    return this.#t;
  }
  replacePrintOutputFormat(e) {
    this.#t = e;
  }
  thinkingDisplayExplicit() {
    return this.#n;
  }
  replaceThinkingDisplayExplicit(e) {
    this.#n = e;
  }
  permissionPromptToolName() {
    return this.#o;
  }
  replacePermissionPromptToolName(e) {
    this.#o = e;
  }
  hasStreamingInput() {
    return this.#r;
  }
  replaceHasStreamingInput(e) {
    this.#r = e;
  }
  singleShotPrintSession() {
    return this.#i;
  }
  replaceSingleShotPrintSession(e) {
    this.#i = e;
  }
  printInputClosed() {
    return this.#s;
  }
  markPrintInputClosed() {
    this.#s = !0;
  }
  modelOverrideOptOutForSession() {
    return this.#u;
  }
  replaceModelOverrideOptOutForSession(e) {
    this.#u = e;
  }
  rendererMode() {
    return this.#d;
  }
  replaceRendererMode(e) {
    this.#d = e;
  }
  strictToolResultPairing() {
    return this.#l;
  }
  replaceStrictToolResultPairing(e) {
    this.#l = e;
  }
  restrictedSession() {
    return this.#f;
  }
  replaceRestrictedSession(e) {
    this.#f = e;
  }
  workspaceRestrictionState() {
    return this.#p;
  }
  replaceWorkspaceRestrictionState(e) {
    this.#p = e;
  }
  replaceWorkspaceRestrictionUnsubscribe(e) {
    this.#a?.(), this.#a = e;
  }
  restrictedWorkspaceRoots() {
    return this.#c;
  }
  addRestrictedWorkspaceRoot(e, t) {
    this.#c.set(e, t);
  }
  clearRestrictedWorkspaceRoots() {
    this.#c = new Map();
  }
  clientType() {
    return this.#h;
  }
  replaceClientType(e) {
    this.#h = e;
  }
  sessionStartType() {
    return this.#m;
  }
  replaceSessionStartType(e) {
    this.#m = e;
  }
  questionPreviewFormat() {
    return this.#g;
  }
  replaceQuestionPreviewFormat(e) {
    this.#g = e;
  }
  extendedQuestionsEnabled() {
    return this.#y;
  }
  replaceExtendedQuestionsEnabled(e) {
    this.#y = e;
  }
  questionOptionDescriptionsOptional() {
    return this.#S;
  }
  replaceQuestionOptionDescriptionsOptional(e) {
    this.#S = e;
  }
  replConfigArgv() {
    return this.#C;
  }
  replaceReplConfigArgv(e) {
    this.#C = e;
  }
  userMsgOptIn() {
    return this.#b;
  }
  replaceUserMsgOptIn(e) {
    this.#b = e;
  }
  searchToolsOptIn() {
    return this.#v;
  }
  replaceSearchToolsOptIn(e) {
    this.#v = e;
  }
  todoToolsOptIn() {
    return this.#x;
  }
  replaceTodoToolsOptIn(e) {
    this.#x = e;
  }
  toolsOmittedByLaunchList() {
    return this.#k;
  }
  replaceToolsOmittedByLaunchList(e) {
    this.#k = e;
  }
  wizardOperatorToolsEnabled() {
    return this.#T;
  }
  replaceWizardOperatorToolsEnabled(e) {
    this.#T = e;
  }
  pollEventIngress() {
    return this.#R;
  }
  markPollEventIngress(e) {
    this.#R = e;
  }
  ownEventDeliveryRequested() {
    return this.#P && !this.#w;
  }
  replaceOwnEventDeliveryHeld(e) {
    this.#w = e;
  }
  markOwnEventDeliveryRequested() {
    this.#P = !0;
  }
  sdkAgentProgressSummariesEnabled() {
    return this.#A;
  }
  replaceSdkAgentProgressSummariesEnabled(e) {
    this.#A = e;
  }
  sessionPersistenceDisabled() {
    return this.#M;
  }
  replaceSessionPersistenceDisabled(e) {
    this.#M = e;
  }
  diskless() {
    return this.#L;
  }
  replaceDiskless(e) {
    this.#L = e;
  }
  ccrSessionUrl() {
    return this.#I;
  }
  replaceCcrSessionUrl(e) {
    this.#I = e;
  }
  ccrDerivedSurface() {
    return this.#F;
  }
  replaceCcrDerivedSurface(e) {
    this.#F = e;
  }
  entrypointOnRequests() {
    return this.#E;
  }
  replaceEntrypointOnRequests(e) {
    this.#E = e;
  }
  toolsMachine() {
    return this.#D;
  }
  replaceToolsMachine(e) {
    this.#D = e;
  }
  sessionBypassPermissionsMode() {
    return this.#H;
  }
  replaceSessionBypassPermissionsMode(e) {
    this.#H = e;
  }
  disableSlashCommands() {
    return this.#B;
  }
  replaceDisableSlashCommands(e) {
    this.#B = e;
  }
  disableFileMentions() {
    return this.#_;
  }
  replaceDisableFileMentions(e) {
    this.#_ = e;
  }
  sessionUploadsDir() {
    return this.#U;
  }
  replaceSessionUploadsDir(e) {
    this.#U = e;
  }
  localUploadsRoot() {
    return this.#j;
  }
  replaceLocalUploadsRoot(e) {
    this.#j = e;
  }
  mayForwardHomeSettings() {
    return this.#q;
  }
  replaceMayForwardHomeSettings(e) {
    this.#q = e;
  }
  homeSettingsHostConsent() {
    return this.#W;
  }
  replaceHomeSettingsHostConsent(e) {
    this.#W = e;
  }
  scheduledTasksEnabled() {
    return this.#O;
  }
  replaceScheduledTasksEnabled(e) {
    let t = e && !this.#O;
    if (this.#O = e, t) this.#Y.emit();
  }
  onScheduledTasksEnabled(e) {
    return this.#Y.subscribe(e);
  }
  initJsonSchema() {
    return this.#N;
  }
  replaceInitJsonSchema(e) {
    this.#N = e;
  }
  cliSessionConfigCarried() {
    return this.#G;
  }
  replaceCliSessionConfigCarried(e) {
    this.#G = e;
  }
  forkRestrictedLaunchConfig() {
    return this.#K;
  }
  replaceForkRestrictedLaunchConfig(e) {
    this.#K = e;
  }
  forkReplayLaunchConfig() {
    return this.#V;
  }
  spareClaimState() {
    return this.#z;
  }
  replaceSpareClaimState(e) {
    this.#z = e;
  }
  spareParkedAtMs() {
    return this.#Q;
  }
  replaceSpareParkedAtMs(e) {
    this.#Q = e;
  }
  replaceForkReplayLaunchConfig(e) {
    this.#V = e;
  }
  projectConfigRoot() {
    return this.#J;
  }
  replaceProjectConfigRoot(e) {
    this.#J = e;
  }
  reset() {
    this.#e = !1, this.#t = null, this.#z = "none", this.#Q = void 0, this.#n = !1, this.#o = void 0, this.#r = !1, this.#i = !1, this.#s = !1, this.#u = !1, this.#d = void 0, this.#l = !1, this.#f = !1, this.#p = null, this.replaceWorkspaceRestrictionUnsubscribe(null), this.#c = new Map(), this.#h = "cli", this.#m = "fresh", this.#g = void 0, this.#y = !1, this.#S = !1, this.#C = [], this.#b = !1, this.#v = !1, this.#x = !1, this.#k = new Set(), this.#T = !1, this.#R = "none", this.#P = !1, this.#w = !1, this.#A = !1, this.#M = !1, this.#L = !1, this.#I = void 0, this.#F = void 0, this.#E = void 0, this.#D = void 0, this.#H = !1, this.#B = !1, this.#_ = !1, this.#U = null, this.#j = null, this.#q = !0, this.#W = null, this.#O = !1, this.#N = null, this.#G = !1, this.#K = !1, this.#V = {}, this.#J = null;
  }
}
class Ne {
  #e = void 0;
  #t = [];
  #n = void 0;
  #o = void 0;
  #r = null;
  #i = null;
  #s = !1;
  #u = gn();
  #d = null;
  #l = !1;
  flagSettingsPath() {
    return this.#e;
  }
  replaceFlagSettingsPath(e) {
    this.#e = e;
  }
  flagAgentsFilePaths() {
    return this.#t;
  }
  replaceFlagAgentsFilePaths(e) {
    this.#t = e;
  }
  flagSettingsExpectedContent() {
    return this.#n;
  }
  replaceFlagSettingsExpectedContent(e) {
    this.#n = e;
  }
  flagSettingsFilePinnedContent() {
    return this.#o;
  }
  replaceFlagSettingsFilePinnedContent(e) {
    this.#o = e;
  }
  flagSettingsInline() {
    return this.#r;
  }
  replaceFlagSettingsInline(e) {
    this.#r = e;
  }
  parentManagedSettings() {
    return this.#i;
  }
  replaceParentManagedSettings(e) {
    this.#i = e;
  }
  parentManagedSettingsInvalid() {
    return this.#s;
  }
  replaceParentManagedSettingsInvalid(e) {
    this.#s = e;
  }
  allowedSettingSources() {
    return this.#u;
  }
  replaceAllowedSettingSources(e) {
    this.#u = e;
  }
  allowedSettingSourcesWithoutRepoDirSources() {
    let e = this.#u;
    if (this.#d?.of !== e) this.#d = {
      of: e,
      result: e.filter(item => item !== "projectSettings" && item !== "localSettings")
    };
    return this.#d.result;
  }
  useCoworkPlugins() {
    return this.#l;
  }
  replaceUseCoworkPlugins(e) {
    this.#l = e;
  }
  reset() {
    this.#e = void 0, this.#t = [], this.#n = void 0, this.#o = void 0, this.#r = null, this.#i = null, this.#s = !1, this.#u = gn(), this.#d = null, this.#l = !1;
  }
}
function gn() {
  return ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"];
}
class Ge {
  #e = [];
  #t = [];
  #n = [];
  #o = void 0;
  #r = new Map();
  #i = new Map();
  #s = new Map();
  #u = [];
  #d = [];
  #l = !1;
  #f = void 0;
  #p = void 0;
  #a = void 0;
  inlinePlugins() {
    return this.#e;
  }
  replaceInlinePlugins(e) {
    this.#e = e;
  }
  inlinePluginsNoMcp() {
    return this.#t;
  }
  replaceInlinePluginsNoMcp(e) {
    this.#t = e;
  }
  inlinePluginUrls() {
    return this.#n;
  }
  replaceInlinePluginUrls(e) {
    this.#n = e;
  }
  syncedPluginDirs() {
    return this.#o ?? [];
  }
  syncedPluginDirsRegistered() {
    return this.#o !== void 0;
  }
  syncedPluginAttestation(e) {
    return this.#r.get(e);
  }
  syncedPluginRowId(e) {
    return this.#i.get(e);
  }
  replaceSyncedPluginDirs(e, t = new Map(), o = new Map()) {
    this.#o = e, this.#r = t, this.#i = o, this.#s = this.#c(this.#s);
  }
  clearSyncedPluginDirs() {
    this.#o = void 0, this.#r = new Map(), this.#i = new Map(), this.#s = new Map();
  }
  attestedOfficialPluginMarketplace(e) {
    return this.#s.get(e);
  }
  replaceAttestedOfficialPluginIds(e) {
    this.#s = this.#c(e);
  }
  #c(e) {
    let t = new Set([...this.#r.values()].map(item => `${item.pluginName}@${item.marketplace}`));
    return new Map([...e].filter(([o, r]) => t.has(`${o.slice(0, o.lastIndexOf("@"))}@${r}`)));
  }
  additionalDirectoriesForClaudeMd() {
    return this.#u;
  }
  replaceAdditionalDirectoriesForClaudeMd(e) {
    this.#u = e;
  }
  allowedChannels() {
    return this.#d;
  }
  replaceAllowedChannels(e) {
    this.#d = e;
  }
  hasDevChannels() {
    return this.#l;
  }
  replaceHasDevChannels(e) {
    this.#l = e;
  }
  sessionSkillAllowlist() {
    return this.#f;
  }
  replaceSessionSkillAllowlist(e) {
    this.#f = e;
  }
  chromeFlagOverride() {
    return this.#p;
  }
  replaceChromeFlagOverride(e) {
    this.#p = e;
  }
  teammateAgentId() {
    return this.#a;
  }
  replaceTeammateAgentId(e) {
    this.#a = e;
  }
  reset() {
    this.#e = [], this.#t = [], this.#n = [], this.clearSyncedPluginDirs(), this.#u = [], this.#d = [], this.#l = !1, this.#f = void 0, this.#p = void 0, this.#a = void 0;
  }
}
class Ke {
  #e = null;
  #t = null;
  modelStrings() {
    return this.#e;
  }
  replaceModelStrings(e) {
    this.#e = e;
  }
  invalidate() {
    this.#e = null;
  }
  admin3PSteeringSnapshot() {
    return this.#t;
  }
  recordAdmin3PSteeringSnapshot(e) {
    this.#t = e;
  }
  reset() {
    this.#e = null, this.#t = null;
  }
}
var hn = [];
class Ve {
  #e = [];
  #t = [];
  #n = void 0;
  errorLog() {
    return this.#e;
  }
  recordError(e) {
    if (this.#e.length >= 100) this.#e.shift();
    this.#e.push(e);
  }
  recordSlowOperation(e, t) {
    return;
  }
  slowOperations() {
    if (this.#t.length === 0) return hn;
    let e = Date.now();
    if (this.#t.some(item => e - item.timestamp >= 1e4)) {
      if (this.#t = this.#t.filter(item => e - item.timestamp < 1e4), this.#t.length === 0) return hn;
    }
    return this.#t;
  }
  recordDevBarAlert(e) {
    return;
  }
  devBarAlert() {
    let e = this.#n;
    if (e && Date.now() - e.timestamp >= 60000) {
      this.#n = void 0;
      return;
    }
    return e;
  }
  reset() {
    this.#e = [], this.#t = [], this.#n = void 0;
  }
}
var c3s = 100;
function mn() {
  return {
    rateTokens: null,
    rateLastRefillMs: null,
    featureOkLogged: !1,
    reportedDropReasons: new Set()
  };
}
class Je {
  #e = null;
  #t = null;
  #n = null;
  #o = null;
  #r = null;
  #i = null;
  #s = null;
  #u = null;
  #d = null;
  #l = null;
  #f = null;
  #p = null;
  #a = null;
  #c = [];
  #h = null;
  #m = mn();
  #g = null;
  #y = null;
  #S = null;
  #C = {
    direct: null,
    proxied: null
  };
  #b = null;
  #v = null;
  installMeter(e, t, {
    omitUnits = !1
  } = {}) {
    this.#e = e;
    let r = i => omitUnits ? void 0 : i;
    this.#t = t("claude_code.session.count", {
      description: "Count of CLI sessions started"
    }), this.#n = t("claude_code.lines_of_code.count", {
      description: "Count of lines of code modified, with the 'type' attribute indicating whether lines were added or removed and the 'model' attribute indicating which model made the change"
    }), this.#o = t("claude_code.pull_request.count", {
      description: "Number of pull requests created"
    }), this.#r = t("claude_code.commit.count", {
      description: "Number of git commits created"
    }), this.#i = t("claude_code.cost.usage", {
      description: "Cost of the Claude Code session",
      unit: r("USD")
    }), this.#s = t("claude_code.token.usage", {
      description: "Number of tokens used",
      unit: r("tokens")
    }), this.#u = t("claude_code.code_edit_tool.decision", {
      description: "Count of code editing tool permission decisions (accept/reject) for Edit, Write, and NotebookEdit tools"
    }), this.#d = t("claude_code.active_time.total", {
      description: "Total active time in seconds",
      unit: r("s")
    });
  }
  meter() {
    return this.#e;
  }
  sessionCounter() {
    return this.#t;
  }
  locCounter() {
    return this.#n;
  }
  prCounter() {
    return this.#o;
  }
  commitCounter() {
    return this.#r;
  }
  costCounter() {
    return this.#i;
  }
  tokenCounter() {
    return this.#s;
  }
  codeEditToolDecisionCounter() {
    return this.#u;
  }
  activeTimeCounter() {
    return this.#d;
  }
  statsStore() {
    return this.#l;
  }
  replaceStatsStore(e) {
    this.#l = e;
  }
  loggerProvider() {
    return this.#f;
  }
  replaceLoggerProvider(e) {
    this.#f = e;
  }
  eventLogger() {
    return this.#p;
  }
  eventLoggerOwner() {
    return this.#a;
  }
  attachEventLogger(e, t) {
    if (this.#p = e, this.#a = e ? t : null, !e) return;
    let o = this.#c;
    if (this.#c = null, o) for (let r of o) e.emit(r);
  }
  bufferPendingEvent(e) {
    if (this.#c === null || this.#c.length >= 100) return !1;
    return this.#c.push(e), !0;
  }
  closeWindow(e) {
    this.#c = null, this.#h = e;
  }
  windowCloseCause() {
    return this.#h;
  }
  isWindowOpen() {
    return this.#c !== null;
  }
  hostOtel() {
    return this.#m;
  }
  meterProvider() {
    return this.#g;
  }
  replaceMeterProvider(e) {
    this.#g = e;
  }
  tracerProvider() {
    return this.#y;
  }
  replaceTracerProvider(e) {
    this.#y = e;
  }
  cachedTelemetryResource() {
    return this.#S;
  }
  replaceCachedTelemetryResource(e) {
    this.#S = e;
  }
  cachedOtlpHttpAgentFactory(e) {
    return this.#C[e ? "proxied" : "direct"];
  }
  replaceCachedOtlpHttpAgentFactory(e, t) {
    this.#C[e ? "proxied" : "direct"] = t;
  }
  inClusterOtlpTrustRoots() {
    return this.#b;
  }
  replaceInClusterOtlpTrustRoots(e) {
    this.#b = e;
  }
  inClusterOtlpAgentFactory() {
    return this.#v;
  }
  replaceInClusterOtlpAgentFactory(e) {
    this.#v = e;
  }
  reset() {
    this.#e = null, this.#t = null, this.#n = null, this.#o = null, this.#r = null, this.#i = null, this.#s = null, this.#u = null, this.#d = null, this.#l = null, this.#f = null, this.#p = null, this.#a = null, this.#c = [], this.#h = null, this.#m = mn(), this.#g = null, this.#y = null, this.#S = null, this.#C = {
      direct: null,
      proxied: null
    }, this.#b = null, this.#v = null;
  }
}
class ze {
  #e = void 0;
  #t = void 0;
  #n = !1;
  #o = void 0;
  #r = void 0;
  #i = new Set();
  #s = new Map();
  #u = void 0;
  #d = null;
  #l = null;
  #f = 0;
  #p = !1;
  #a = () => !1;
  #c = null;
  #h = void 0;
  #m = null;
  #g = null;
  sessionIngressToken() {
    return this.#e;
  }
  replaceSessionIngressToken(e) {
    this.#e = e;
  }
  oauthTokenFromFd() {
    return this.#t;
  }
  replaceOauthTokenFromFd(e) {
    this.#t = e;
  }
  oauthTokenFromBgSnapshot() {
    return this.#n;
  }
  replaceOauthTokenFromBgSnapshot(e) {
    this.#n = e;
  }
  oauthScopesFromFd() {
    return this.#o;
  }
  replaceOauthScopesFromFd(e) {
    this.#o = e;
  }
  apiKeyFromFd() {
    return this.#r;
  }
  replaceApiKeyFromFd(e) {
    this.#r = e;
  }
  descriptorAnnouncementConsumed(e) {
    return this.#i.has(e);
  }
  markDescriptorAnnouncementConsumed(e) {
    this.#i.add(e);
  }
  credentialRoad(e) {
    return this.#s.get(e);
  }
  noteCredentialRoad(e, t, o) {
    if (o !== null && !this.#s.has(e)) this.#s.set(e, t);
  }
  gatewayTokenFromDescriptor() {
    return this.#u;
  }
  replaceGatewayTokenFromDescriptor(e) {
    this.#u = e;
  }
  resetFdCredentialState() {
    this.#e = void 0, this.#t = void 0, this.#n = !1, this.#o = void 0, this.#r = void 0;
  }
  gatewayAuth() {
    return this.#d;
  }
  replaceGatewayAuth(e) {
    this.#d = e;
  }
  gatewayServerProcess() {
    return this.#p;
  }
  replaceGatewayServerProcess(e) {
    this.#p = e;
  }
  gatewayRequiredByHostPolicy() {
    return this.#a();
  }
  replaceGatewayRequiredByHostPolicyReader(e) {
    this.#a = e;
  }
  authenticatedAccount() {
    return this.#l;
  }
  authenticatedAccountEpoch() {
    return this.#f;
  }
  stampAuthenticatedAccount(e) {
    let t = this.#l;
    if (e !== null && t !== null && e.accountUuid === t.accountUuid && e.emailAddress === t.emailAddress && e.organizationUuid === t.organizationUuid) return;
    this.#f += 1, this.#l = e;
  }
  startupPolicySnapshot() {
    return this.#h;
  }
  replaceStartupPolicySnapshot(e) {
    this.#h = e;
  }
  gatewayRefreshInFlight() {
    return this.#c;
  }
  replaceGatewayRefreshInFlight(e) {
    this.#c = e;
  }
  sdkOAuthTokenRefreshCallback() {
    return this.#m;
  }
  replaceSdkOAuthTokenRefreshCallback(e) {
    this.#m = e;
  }
  hostAuthTokenRefreshCallback() {
    return this.#g;
  }
  replaceHostAuthTokenRefreshCallback(e) {
    this.#g = e;
  }
  resetForTests() {
    this.#e = null, this.#t = null, this.#n = !1, this.#o = void 0, this.#r = null, this.#i.clear(), this.#s.clear(), this.#u = void 0, this.#d = null, this.#l = null, this.#f = 0, this.#p = !1, this.#a = () => !1, this.#c = null, this.#h = void 0, this.#m = null, this.#g = null;
  }
}
class Qe {
  #e = void 0;
  #t = !1;
  #n = !1;
  #o;
  directConnectServerUrl() {
    return this.#e;
  }
  replaceDirectConnectServerUrl(e) {
    this.#e = e;
  }
  connectNonBlocking() {
    return this.#t;
  }
  replaceConnectNonBlocking(e) {
    this.#t = e;
  }
  strictConfig() {
    return this.#n;
  }
  replaceStrictConfig(e) {
    this.#n = e;
  }
  registerEnsureConnectedClient(e) {
    this.#o = e;
  }
  ensureConnectedClient() {
    return this.#o;
  }
  reset() {
    this.#e = void 0, this.#t = !1, this.#n = !1;
  }
}
class Ye {
  #e = null;
  #t = new Map();
  #n = new Map();
  #o = new Set();
  #r = new Set();
  #i = new Set();
  #s = new Map();
  #u = !1;
  #d = !1;
  #l = !1;
  #f = !1;
  #p = !1;
  #a = !1;
  #c = !1;
  #h = !1;
  #m = !1;
  #g = new Set();
  #y = !1;
  #S = new Set();
  #C = !1;
  #b = !1;
  #v = !1;
  #x = !1;
  #k = new Map();
  #T = void 0;
  #R = void 0;
  #P = !1;
  #w = void 0;
  #A = void 0;
  #M = new Map();
  #L = new Map();
  promptCache1hAllowlist() {
    return this.#e;
  }
  replacePromptCache1hAllowlist(e) {
    this.#e = e;
  }
  thinkingTypeOverrides() {
    return this.#t;
  }
  recordThinkingTypeOverride(e, t) {
    this.#t.set(e, t);
  }
  servedModelsByRequestedModel() {
    return this.#n;
  }
  recordServedModels(e, t) {
    this.#n.set(e, t);
  }
  effortUnsupportedModels() {
    return this.#o;
  }
  markEffortUnsupported(e) {
    this.#o.add(e);
  }
  structuredOutputsUnsupportedModels() {
    return this.#r;
  }
  markStructuredOutputsUnsupported(e) {
    this.#r.add(e);
  }
  clearStructuredOutputsUnsupported() {
    this.#r = new Set();
  }
  context1mRefusedModels() {
    return this.#i;
  }
  markContext1mRefused(e) {
    this.#i.add(e);
  }
  clearContext1mRefused() {
    this.#i = new Set();
  }
  refusedBetas(e) {
    return this.#s.get(e) ?? [];
  }
  markBetaRefused(e, t) {
    let o = this.#s.get(e);
    if (o) o.add(t);else this.#s.set(e, new Set([t]));
  }
  midConvCachePromotionRejected() {
    return this.#u;
  }
  markMidConvCachePromotionRejected() {
    this.#u = !0;
  }
  perTurnEffortOkEmitted() {
    return this.#d;
  }
  markPerTurnEffortOkEmitted() {
    this.#d = !0;
  }
  lateToolAdditionsOkEmitted() {
    return this.#l;
  }
  markLateToolAdditionsOkEmitted() {
    this.#l = !0;
  }
  toolResultScreeningOkEmitted() {
    return this.#f;
  }
  markToolResultScreeningOkEmitted() {
    this.#f = !0;
  }
  toolChangeHeaderRefused() {
    return this.#p;
  }
  markToolChangeHeaderRefused() {
    this.#p = !0;
  }
  promptEndMarkRefused() {
    return this.#a;
  }
  markPromptEndMarkRefused() {
    this.#a = !0;
  }
  inlineToolsRefused() {
    return this.#c;
  }
  markInlineToolsRefused() {
    this.#c = !0;
  }
  inlineToolsOkEmitted() {
    return this.#h;
  }
  markInlineToolsOkEmitted() {
    this.#h = !0;
  }
  thinkingResumptionRefused() {
    return this.#m;
  }
  markThinkingResumptionRefused() {
    this.#m = !0;
  }
  refusedBetaHeaders() {
    return this.#g;
  }
  markBetaHeaderRefused(e) {
    this.#g.add(e);
  }
  thinkingHighlightsRefused() {
    return this.#y;
  }
  markThinkingHighlightsRefused() {
    this.#y = !0;
  }
  toolChangeUnsupportedModels() {
    return this.#S;
  }
  markToolChangeUnsupportedModel(e) {
    this.#S.add(e);
  }
  internalModelFieldsRefused() {
    return this.#C;
  }
  markInternalModelFieldsRefused() {
    this.#C = !0;
  }
  internalModelFieldsRefusalAnnounced() {
    return this.#b;
  }
  markInternalModelFieldsRefusalAnnounced() {
    this.#b = !0;
  }
  thirdPartyServerClassifierRefused() {
    return this.#v;
  }
  markThirdPartyServerClassifierRefused() {
    this.#v = !0;
  }
  threadsHeldForServerClassifier() {
    return this.#x;
  }
  markThreadsHeldForServerClassifier() {
    this.#x = !0;
  }
  autoModeUnavailableResponse(e) {
    return this.#k.get(e);
  }
  autoModeUnavailableResponsesInARow(e) {
    let t = 0;
    for (let o of this.#k.values()) if (o.runKey === e) t++;
    return t;
  }
  noteAutoModeUnavailableResponse(e, t) {
    this.#k.set(e, t);
  }
  clearAutoModeUnavailableResponses(e) {
    for (let [t, o] of this.#k) if (o.runKey === e) this.#k.delete(t);
  }
  setAutoModeUnavailableStopNotice(e) {
    this.#T = e;
  }
  autoModeUnavailableStopNotice() {
    return this.#T;
  }
  setLocalCommandExitCode(e) {
    this.#R = e;
  }
  localCommandExitCode() {
    return this.#R;
  }
  observedGateway() {
    return this.#w;
  }
  serverClassifierFallbackChoice() {
    return this.#A;
  }
  setServerClassifierFallbackChoice(e) {
    this.#A = e;
  }
  clearServerClassifierFallbackChoice() {
    this.#A = void 0;
  }
  noteObservedGateway(e) {
    this.#w ??= e;
  }
  takeServerClassifierFallbackAnnouncement() {
    if (!this.#v || this.#P) return !1;
    return this.#P = !0, !0;
  }
  inferenceProfileBackingModels() {
    return this.#M;
  }
  recordInferenceProfileBackingModel(e, t) {
    this.#M.set(e, t);
  }
  foundryDeploymentCapabilities() {
    return this.#L;
  }
  reset() {
    this.#e = null, this.#t = new Map(), this.#n = new Map(), this.#o = new Set(), this.#r = new Set(), this.#i = new Set(), this.#s = new Map(), this.#u = !1, this.#d = !1, this.#l = !1, this.#f = !1, this.#p = !1, this.#a = !1, this.#c = !1, this.#h = !1, this.#m = !1, this.#g = new Set(), this.#y = !1, this.#S = new Set(), this.#C = !1, this.#b = !1, this.#v = !1, this.#x = !1, this.#k.clear(), this.#T = void 0, this.#R = void 0, this.#P = !1, this.#w = void 0, this.#A = void 0, this.#M = new Map(), this.#L = new Map();
  }
}
class Xe {
  #e = !1;
  #t = !1;
  longContext1mCreditsBlocked() {
    return this.#e;
  }
  replaceLongContext1mCreditsBlocked(e) {
    this.#e = e;
  }
  usageCreditsRequired() {
    return this.#t;
  }
  replaceUsageCreditsRequired(e) {
    this.#t = e;
  }
  reset() {
    this.#e = !1, this.#t = !1;
  }
}
class $e {
  #e = !1;
  #t = !1;
  #n = Sn;
  #o = Me();
  selectorGate() {
    return this.#e;
  }
  selectorGateEverOn() {
    return this.#t;
  }
  replaceSelectorGate(e) {
    this.#e = e, this.#t ||= e;
  }
  inheritSelectorGateEverOn() {
    this.#t = !0;
  }
  resampleSelectorGate(e) {
    let t = this.#e;
    if (this.#e = e, this.#t ||= e, t !== e) this.#o.emit(e);
  }
  subscribeSelectorGateChanged(e) {
    return this.#o.subscribe(e);
  }
  replaceHostGateSubscription(e) {
    let t = this.#n;
    this.#n = e, t();
  }
  dropHostGateSubscription() {
    this.replaceHostGateSubscription(Sn);
  }
}
function Sn() {}
class et {
  started = !1;
  stagingReaped = !1;
  claim() {
    if (this.started) return !1;
    return this.started = !0, !0;
  }
  claimStagingReap() {
    if (this.stagingReaped) return !1;
    return this.stagingReaped = !0, !0;
  }
}
class tt {
  clock;
  backgroundHousekeeping;
  launchOptions;
  settingsSource;
  extensionsConfig;
  modelStringsCache;
  diagnostics;
  telemetryHandles;
  credentialSlots;
  mcpProcessWiring;
  requestLatches;
  accountCreditLatches;
  proactivity;
  constructor(e) {
    this.clock = e.clock, this.backgroundHousekeeping = e.backgroundHousekeeping, this.launchOptions = e.launchOptions, this.settingsSource = e.settingsSource, this.extensionsConfig = e.extensionsConfig, this.modelStringsCache = e.modelStringsCache, this.diagnostics = e.diagnostics, this.telemetryHandles = e.telemetryHandles, this.credentialSlots = e.credentialSlots, this.mcpProcessWiring = e.mcpProcessWiring, this.requestLatches = e.requestLatches, this.accountCreditLatches = e.accountCreditLatches, this.proactivity = e.proactivity;
  }
}
function yn() {
  return new tt({
    clock: new oWr(),
    backgroundHousekeeping: new et(),
    launchOptions: new We(),
    settingsSource: new Ne(),
    extensionsConfig: new Ge(),
    modelStringsCache: new Ke(),
    diagnostics: new Ve(),
    telemetryHandles: new Je(),
    credentialSlots: new ze(),
    mcpProcessWiring: new Qe(),
    requestLatches: new Ye(),
    accountCreditLatches: new Xe(),
    proactivity: new $e()
  });
}
function Qi(e = uqo()) {
  return D1r({
    host: yn(),
    id: SJn() ?? are(),
    project: {
      originalCwd: e,
      projectRoot: e,
      cwd: e
    }
  });
}
var k = Qi(nQn);
function j() {
  return n();
}
function n() {
  return x()?.session ?? k;
}
function ms(e) {
  return e.of(k.host);
}
function m() {
  let e = x();
  return e?.session ? void 0 : e;
}
var x = () => {
  return;
};
function Bai(e) {
  x = e;
}
pn(e => un.of(n().host).reporter?.(e));
w3s({
  isDiskless: () => de(),
  reports: () => v3s.of(n().host)
});
function K() {
  return m()?.sessionId ?? n().id;
}
function Ze() {
  let e = m()?.sessionId;
  if (e) return Vr(e);
  let t = n();
  return t.identity.mainAgentId(t.id);
}
function kn() {
  let e = n();
  return e.requestJournal.promptIndex() > 0 || e.sessionScratch.chromeAvailabilityStagesLogged().size > 0;
}
function gzo(e = {}) {
  let t = n(),
    parentId_2 = t.id;
  t.sessionScratch.forgetPlanSlug(parentId_2), t.identity.replaceProjectDir(null);
  let r = kn();
  t.requestJournal.replacePromptIndex(0), t.requestJournal.replaceLastPersonPrompt(null), t.requestJournal.replaceLastCancelledAPIMessageId(null), t.requestJournal.clearLastMainThreadRequest(), t.requestJournal.replaceLastMainRequestId(void 0), t.modelSelection.forgetRefusalFallbackOccurred(), t.sessionFlags.forgetPendingContextCompacted(), t.sessionScratch.replacePendingBranchLinks(), t.sessionScratch.replaceChromeAvailabilityStagesLogged(r);
  let i = Rn(),
    id_2 = are();
  return t.costLedger.scopeTo(id_2), t.update({
    id: id_2,
    ...(e.setCurrentAsParent && {
      parentId: parentId_2
    })
  }), Cn(t, "clear", i), t.id;
}
function Cn(e, t, o) {
  let r = Tn.of(e);
  if (o) r.emit(e.id, t, o);else r.emit(e.id, t);
}
function xn(e) {
  Mn.of(e).emit(vo(e).originalCwd);
}
function ODe() {
  let e = m();
  return e ? e.parentSessionId : n().parentId;
}
function kb(id_3, t, o = null, r) {
  let i = n(),
    project_2 = r ? I(i.project, Pn(r)) : r,
    a,
    parentId_3 = i.parentId;
  if (i.id !== id_3) {
    if (i.sessionScratch.forgetPlanSlug(i.id), i.requestJournal.replaceLastCancelledAPIMessageId(null), i.requestJournal.replaceLastPersonPrompt(null), i.requestJournal.clearLastMainThreadRequest(id_3), t !== "fork") i.requestJournal.replaceLastMainRequestId(void 0);
    i.modelSelection.forgetRefusalFallbackOccurred(), i.sessionFlags.forgetPendingContextCompacted(), i.sessionScratch.replacePendingBranchLinks(), i.sessionScratch.replaceChromeAvailabilityStagesLogged(kn()), a = Rn(), parentId_3 = void 0;
  }
  if (i.identity.replaceProjectDir(o), i.update({
    id: id_3,
    parentId: parentId_3,
    ...(project_2 !== void 0 && {
      project: project_2
    })
  }), Cn(i, t, a), r?.originalCwd !== void 0) xn(i);
}
function Rn() {
  let e = n(),
    t = e.modelSelection.refusalFallbackModelLatch();
  if (e.modelSelection.unlatchRefusalFallbackModel("session_transition"), !t || e.modelSelection.mainLoopModelOverride() !== t.fallbackModel) return;
  return e.modelSelection.overrideMainLoopModel(t.previousOverride), {
    appStateModel: t.previousAppStateModel,
    forSessionValue: t.previousModelForSession,
    overrideValue: t.previousOverride,
    restoredToExplicitOverride: t.previousOverride !== void 0,
    fallbackModel: t.fallbackModel
  };
}
var Tn = new at(() => Me());
function Hc(e) {
  return Tn.of(n()).subscribe(e);
}
function L1r() {
  return n().sessionScratch.humanAttachmentDigests();
}
function hzo() {
  return n().sessionScratch.inboundAttachmentFiles();
}
function IDe() {
  return n().sessionScratch.filesPlacedByName();
}
function xJn() {
  return n().sessionScratch.filesPlacedByNameRead();
}
function N1r(e) {
  n().sessionScratch.setFilesPlacedByNameRead(e);
}
function xjt() {
  return n().sessionScratch.inboundAttachmentDownloads();
}
function Pjt() {
  return n().sessionScratch.arrivingInboundFiles();
}
function eye() {
  let e = m();
  return e ? e.sessionProjectDir : n().identity.projectDir();
}
function ke() {
  return m()?.originalCwd ?? vo(n()).originalCwd;
}
function ii() {
  if (m()?.originalCwd === void 0 && n().project === null) return null;
  return ke();
}
function J5() {
  return ESt();
}
function iP() {
  return ke() === zi();
}
function Qr() {
  return m()?.projectRoot ?? vo(n()).projectRoot;
}
function yu() {
  if (m()?.projectRoot === void 0 && n().project === null) return null;
  return Qr();
}
function Pn(e) {
  return e;
}
function agn(e) {
  let t = n();
  if (t.update({
    project: Pn(e)
  }), e.originalCwd !== void 0) xn(t);
}
function aP(originalCwd) {
  agn({
    originalCwd: originalCwd
  });
}
var Mn = new at(() => Me());
function yzo(e) {
  return Mn.of(n()).subscribe(e);
}
function jTe(projectRoot) {
  agn({
    projectRoot: projectRoot
  });
}
function yR() {
  return vo(n()).cwd;
}
function JZe(cwd_2) {
  agn({
    cwd: cwd_2
  });
}
function lgn() {
  n().costLedger.restartClock();
}
function FGe() {
  return n().costLedger.sessionStartTime();
}
function _zo() {
  return n().host.mcpProcessWiring.directConnectServerUrl();
}
function Ode() {
  return n().host.mcpProcessWiring.connectNonBlocking();
}
function bzo(e) {
  n().host.mcpProcessWiring.replaceConnectNonBlocking(e);
}
function Szo() {
  return n().sessionFlags.teardownUnwindRequested();
}
function F1r(e) {
  n().sessionFlags.replaceTeardownUnwindRequested(e);
}
function wzo() {
  return n().sessionFlags.backgroundAutoModeSetupInFlight();
}
function H1r(e) {
  n().sessionFlags.replaceBackgroundAutoModeSetupInFlight(e);
}
function vzo() {
  return n().sessionFlags.deferredToolStubGateLatch();
}
function kzo(e) {
  n().sessionFlags.replaceDeferredToolStubGateLatch(e);
}
function Ezo() {
  return n().sessionFlags.verifySkillRolloutGateLatch();
}
function Tzo(e) {
  n().sessionFlags.replaceVerifySkillRolloutGateLatch(e);
}
function Czo() {
  return n().sessionFlags.commitSkillRolloutGateLatch();
}
function Rzo(e) {
  n().sessionFlags.replaceCommitSkillRolloutGateLatch(e);
}
function Azo() {
  return n().sessionFlags.memoryToolsShapeLatch();
}
function PJn(e) {
  n().sessionFlags.replaceMemoryToolsShapeLatch(e);
}
function dgn(e) {
  n().sessionFlags.armPendingContextCompacted(e);
}
function xzo() {
  return n().sessionFlags.consumePendingContextCompacted();
}
function Pzo() {
  n().sessionFlags.forgetPendingContextCompacted();
}
function Mw() {
  return n().host.mcpProcessWiring.strictConfig();
}
function cgn(e) {
  n().host.mcpProcessWiring.replaceStrictConfig(e);
}
function ugn() {
  return n().host.launchOptions.cliSessionConfigCarried();
}
function pgn(e) {
  n().host.launchOptions.replaceCliSessionConfigCarried(e);
}
function yF() {
  return n().host.launchOptions.forkRestrictedLaunchConfig();
}
function Ozo(e) {
  n().host.launchOptions.replaceForkRestrictedLaunchConfig(e);
}
function CQ() {
  return n().host.launchOptions.forkReplayLaunchConfig();
}
function Izo(e) {
  n().host.launchOptions.replaceForkReplayLaunchConfig(e);
}
function fgn() {
  return n().mcpSessionWiring.approvedServers();
}
function OJn(e, t) {
  n().mcpSessionWiring.approveServers(e, t);
}
function Mzo(e, t) {
  n().costLedger.recordApiDuration(e, t);
}
function Dzo(e, t, o) {
  n().costLedger.recordCost(e, t, o);
}
function Lzo(e) {
  n().costLedger.recordSpentTokens(e);
}
function eh() {
  return n().costLedger.totalCostUSD();
}
function _F() {
  return n().costLedger.totalAPIDuration();
}
function tye() {
  return n().costLedger.totalDuration();
}
function $1r() {
  return n().costLedger.totalAPIDurationWithoutRetries();
}
function U1r() {
  return n().costLedger.totalToolDuration();
}
function B1r(e) {
  n().costLedger.recordToolDuration(e);
}
function lSt() {
  return n().host.telemetryHandles.statsStore();
}
function Nzo(e) {
  n().host.telemetryHandles.replaceStatsStore(e);
}
function nye(e) {
  n().userPresence.recordInteraction(e);
}
function rye() {
  n().userPresence.flushIfDirty();
}
function K4(e) {
  return n().userPresence.interactionFired.subscribe(e);
}
function Fzo() {
  n().userPresence.resetBaseline();
}
function Hzo(e, t) {
  n().costLedger.recordLinesChanged(e, t);
}
function MDe() {
  return n().costLedger.totalLinesAdded();
}
function DDe() {
  return n().costLedger.totalLinesRemoved();
}
function Ojt() {
  return n().costLedger.totalInputTokens();
}
function Th() {
  return n().costLedger.totalOutputTokens();
}
function Ijt() {
  return n().costLedger.totalCacheReadInputTokens();
}
function Mjt() {
  return n().costLedger.totalCacheCreationInputTokens();
}
function $zo() {
  return n().costLedger.totalWebSearchRequests();
}
function Uzo() {
  n().costLedger.markUnknownModelCost();
}
function j1r() {
  return n().costLedger.hasUnknownModelCost();
}
function W1r() {
  n().costLedger.recordSafetyStop();
}
function RQ() {
  return n().costLedger.safetyStops();
}
function nV() {
  return n().requestJournal.lastMainRequestId();
}
function Bzo(e) {
  n().requestJournal.replaceLastMainRequestId(e);
}
function WTe() {
  n().requestJournal.replaceLastMainRequestId(void 0);
}
function QZe() {
  return n().requestJournal.mainChainReleaseCount();
}
function Y4() {
  return n().requestJournal.lastMainThreadCacheTtlMs();
}
function jzo(e, t) {
  return n().requestJournal.isLastMainThreadAskLive(e, t);
}
function rV() {
  return n().requestJournal.lastMainThreadRequestAt();
}
function mgn() {
  return n().requestJournal.lastLiveMainThreadRequestAt();
}
function Wzo(e, t, o) {
  n().requestJournal.replaceLastMainThreadCacheTtlMs(e, t, o);
}
function IJn(e) {
  n().requestJournal.adjustLastMainThreadCacheTtlMs(e);
}
function zzo(e) {
  n().requestJournal.recordLastMainThreadCacheRenewal(e);
}
function dSt() {
  return n().requestJournal.lastMainThreadCacheRenewedAt();
}
function LDe() {
  return n().requestJournal.lastMainThreadContextTokens();
}
function NDe(e) {
  n().requestJournal.replaceLastMainThreadContextTokens(e);
}
function Gzo(e) {
  let t = n();
  if (e.sessionId !== void 0 && e.sessionId === t.id) t.requestJournal.applyResumeSeed(e);else t.requestJournal.stageResumeSeed(e);
}
function tre() {
  return n().requestJournal.lastApiCompletionTimestamp();
}
function MJn(e) {
  n().requestJournal.replaceLastApiCompletionTimestamp(e);
}
function Djt(e, {
  keepsCachedPrefix = !1
} = {}) {
  let requestJournal = n().requestJournal;
  if (requestJournal.replacePendingPostCompaction(!0), requestJournal.replaceLastMainThreadContextTokens(e), !keepsCachedPrefix) requestJournal.replaceLastMainThreadRequest(null, null);
}
function Vzo() {
  let e = n(),
    t = e.requestJournal.pendingPostCompaction();
  return e.requestJournal.replacePendingPostCompaction(!1), t;
}
function nf() {
  return n().userPresence.lastInteractionTime();
}
function z1r() {
  return n().userPresence.lastSubmitTime();
}
function ZZe() {
  n().userPresence.recordSubmit();
}
var eet = 60000;
function qzo(e) {
  n().userPresence.updateTerminalFocus(e);
}
function FDe() {
  return n().userPresence.terminalFocus();
}
function Kzo(e) {
  return n().userPresence.terminalFocusFired.subscribe(e);
}
function Yzo() {
  let e = FDe();
  if (e !== void 0) return e;
  return Date.now() - nf() < eet;
}
function G1r() {
  n().userPresence.markScrollActivity();
}
function cSt() {
  return n().userPresence.scrollDraining();
}
async function ggn() {
  return n().userPresence.waitForScrollIdle();
}
function m0() {
  return n().costLedger.modelUsage();
}
function Xzo(e) {
  return n().costLedger.usageForModel(e);
}
function gc() {
  return n().modelSelection.mainLoopModelOverride();
}
function hL() {
  return n().modelSelection.initialMainLoopModel();
}
function Bp(e) {
  n().modelSelection.overrideMainLoopModel(e);
}
function hgn() {
  return n().modelSelection.mainLoopEffortState();
}
function ygn(e) {
  n().modelSelection.replaceMainLoopEffortState(e);
}
function Jzo(e) {
  n().modelSelection.markRefusalFallbackOccurred(e);
}
function oV() {
  return n().modelSelection.refusalFallbackOccurred();
}
function Ljt(e) {
  n().modelSelection.armRefusalFallbackHeader(e);
}
function HGe() {
  return n().modelSelection.refusalFallbackHeaderArmed();
}
function Qzo() {
  n().modelSelection.armSilentLaneFromServer();
}
function V1r() {
  return n().modelSelection.silentLaneServerArmed();
}
function Zzo() {
  return n().modelSelection.refusalFallbackLatchOriginRequestId();
}
function Njt(e) {
  let t = n(),
    o = t.modelSelection.refusalFallbackModelLatch();
  if (o && t.modelSelection.mainLoopModelOverride() === o.fallbackModel) {
    t.modelSelection.replaceRefusalFallbackModelLatch({
      ...o,
      fallbackModel: e.fallbackModel,
      carriedEffort: e.carriedEffort ?? o.carriedEffort
    });
    return;
  }
  t.modelSelection.replaceRefusalFallbackModelLatch(e);
}
function oye() {
  n().modelSelection.unlatchRefusalFallbackModel("model_pick");
}
function JW() {
  return n().modelSelection.refusalFallbackModelLatch();
}
function _gn(e) {
  let {
      modelSelection: modelSelection
    } = n(),
    o = modelSelection.refusalFallbackModelLatch();
  if (o !== void 0) modelSelection.replaceRefusalFallbackModelLatch({
    ...o,
    carriedEffort: void 0
  }, e);
}
function eGo() {
  return n().modelSelection.takeCarriedEffortEnd();
}
function tGo(previousOverride) {
  let t = n(),
    o = t.modelSelection.refusalFallbackModelLatch();
  if (o) t.modelSelection.replaceRefusalFallbackModelLatch({
    ...o,
    previousOverride: previousOverride
  });
}
function nGo() {
  n().modelSelection.forgetRefusalFallbackOccurred();
}
function rGo(e) {
  n().surfaceCapabilities.markSdkDialogHostActive(e);
}
function sV() {
  return n().surfaceCapabilities.sdkDialogHostActive();
}
function q1r(e, t) {
  n().surfaceCapabilities.declareDialogKinds(e, t);
}
function Ide() {
  return n().surfaceCapabilities.sdkSupportedDialogKinds();
}
function oGo() {
  let e = n();
  if (e.surfaceCapabilities.sdkSupportedDialogKinds() === void 0) return "none";
  return e.surfaceCapabilities.sdkSupportedDialogKindsSource() ?? "none";
}
function sGo(e) {
  n().surfaceCapabilities.declarePerTaskStopAffordance(e);
}
function bgn() {
  return n().surfaceCapabilities.sdkPerTaskStopAffordance() === !0;
}
function iGo(e) {
  n().surfaceCapabilities.declareRapidFollowupPreempt(e);
}
function aGo() {
  return n().surfaceCapabilities.sdkRapidFollowupPreempt() === !0;
}
function lGo(e) {
  n().surfaceCapabilities.declareForwardNestedSubagentToolCalls(e);
}
function DJn(e) {
  n().surfaceCapabilities.declareHostRendersChromeSetupOffer(e);
}
function uSt() {
  return n().surfaceCapabilities.hostRendersChromeSetupOffer() === !0;
}
function v$() {
  return n().host.launchOptions.replConfigArgv();
}
function $Ge(e) {
  n().host.launchOptions.replaceReplConfigArgv(e);
}
function dGo(e) {
  n().modelSelection.replaceInitialMainLoopModel(e);
}
function cGo() {
  return n().modelSelection.availabilityFallbackChain();
}
function uGo(e) {
  n().modelSelection.replaceAvailabilityFallbackChain(e);
}
function Sgn() {
  return n().modelSelection.initialModelSettingLayer();
}
function pGo(e) {
  n().modelSelection.replaceInitialModelSettingLayer(e);
}
function fGo() {
  return n().modelSelection.resolvedOrgDefault();
}
function tet(e) {
  n().modelSelection.replaceResolvedOrgDefault(e);
}
function mGo() {
  return n().modelSelection.initialEnvDefaultModel();
}
function gGo(e) {
  n().modelSelection.replaceInitialEnvDefaultModel(e);
}
function wf() {
  return m()?.sdkBetas ?? n().surfaceCapabilities.sdkBetas();
}
function hGo(e) {
  n().surfaceCapabilities.replaceSdkBetas(e);
}
function Fjt() {
  return n().host.accountCreditLatches.longContext1mCreditsBlocked();
}
function yGo(e) {
  n().host.accountCreditLatches.replaceLongContext1mCreditsBlocked(e);
}
function _Go() {
  return n().host.accountCreditLatches.usageCreditsRequired();
}
function wgn(e) {
  n().host.accountCreditLatches.replaceUsageCreditsRequired(e);
}
function K1r(e) {
  return n().usageCreditsOnlyModelConsentSlots.consentSessionFallback(e);
}
function Y1r(e, t) {
  n().usageCreditsOnlyModelConsentSlots.replaceConsentSessionFallback(e, t);
}
function bGo(e) {
  return n().usageCreditsOnlyModelConsentSlots.sessionConsentKey(e);
}
function X1r(e, t) {
  n().usageCreditsOnlyModelConsentSlots.replaceSessionConsentKey(e, t);
}
function zTe() {
  return n().host.credentialSlots.sdkOAuthTokenRefreshCallback();
}
function Hjt(e) {
  n().host.credentialSlots.replaceSdkOAuthTokenRefreshCallback(e);
}
function UGe() {
  return n().host.credentialSlots.hostAuthTokenRefreshCallback();
}
function vgn(e) {
  n().host.credentialSlots.replaceHostAuthTokenRefreshCallback(e);
}
function SGo(e) {
  k.costLedger.registerSaver(e);
}
function wGo(e) {
  n().costLedger.runSaver(e, k.costLedger);
}
function vGo(e) {
  k.costLedger.registerTranscriptRecorder(e);
}
function kGo(e, t) {
  n().costLedger.runTranscriptRecorder(e, t, k.costLedger);
}
function EGo() {
  let e = n();
  return e.costLedger.belongsTo(e.id);
}
function $jt() {
  let e = n();
  e.costLedger.claim(e.id);
}
function TGo() {
  let e = n();
  e.costLedger.scopeTo(e.id);
}
function net() {
  let e = n();
  e.costLedger.reset(e.id), e.requestJournal.replacePromptId(null);
}
function CGo(e) {
  let t = n();
  t.costLedger.restore(e, t.id);
}
function so() {
  return n().host.launchOptions.projectConfigRoot();
}
function RGo(e) {
  n().host.launchOptions.replaceProjectConfigRoot(e);
}
function Ujt() {
  return n().host.modelStringsCache.modelStrings();
}
function LJn(e) {
  n().host.modelStringsCache.replaceModelStrings(e);
}
function AGo() {
  n().host.modelStringsCache.invalidate();
}
function xGo(e) {
  n().host.modelStringsCache.recordAdmin3PSteeringSnapshot(e);
}
function PGo() {
  return n().host.modelStringsCache.admin3PSteeringSnapshot();
}
function pSt() {
  return n().host.telemetryHandles.loggerProvider();
}
function J1r(e) {
  n().host.telemetryHandles.replaceLoggerProvider(e);
}
function BGe() {
  return n().host.telemetryHandles.eventLogger();
}
function Q1r() {
  return n().host.telemetryHandles.eventLoggerOwner();
}
function Z1r(e, t = "org") {
  n().host.telemetryHandles.attachEventLogger(e, t);
}
function OGo(e) {
  return n().host.telemetryHandles.bufferPendingEvent(e);
}
function ejr(e) {
  n().host.telemetryHandles.closeWindow(e);
}
function IGo() {
  return n().host.telemetryHandles.windowCloseCause();
}
function kgn() {
  return n().host.telemetryHandles.isWindowOpen();
}
function Bjt() {
  return n().host.telemetryHandles.hostOtel();
}
function ret() {
  return n().host.telemetryHandles.tracerProvider();
}
function tjr(e) {
  n().host.telemetryHandles.replaceTracerProvider(e);
}
function NJn() {
  return n().host.requestLatches.foundryDeploymentCapabilities();
}
function MGo() {
  return n().host.telemetryHandles.cachedTelemetryResource();
}
function DGo(e) {
  n().host.telemetryHandles.replaceCachedTelemetryResource(e);
}
function njr(e) {
  return n().host.telemetryHandles.cachedOtlpHttpAgentFactory(e);
}
function LGo(e, t) {
  n().host.telemetryHandles.replaceCachedOtlpHttpAgentFactory(e, t);
}
function we() {
  return !n().host.launchOptions.isInteractive();
}
function jjt() {
  return n().host.launchOptions.spareClaimState();
}
function lP() {
  return n().host.launchOptions.spareClaimState() === "parked";
}
function NGo() {
  let launchOptions = n().host.launchOptions;
  launchOptions.replaceSpareClaimState("parked"), launchOptions.replaceSpareParkedAtMs(Date.now());
}
function FGo() {
  let launchOptions_2 = n().host.launchOptions,
    t = launchOptions_2.spareParkedAtMs();
  return launchOptions_2.replaceSpareClaimState("claiming"), t === void 0 ? void 0 : Date.now() - t;
}
function HGo() {
  n().host.launchOptions.replaceSpareClaimState("claimed");
}
function $Go() {
  n().host.launchOptions.replaceSpareClaimState("failed");
}
function Wjt() {
  let e = n().host.launchOptions.spareClaimState();
  return e === "parked" || e === "claiming" || e === "failed";
}
function kp() {
  return n().host.launchOptions.isInteractive();
}
function UGo(e) {
  n().host.launchOptions.replaceIsInteractive(e);
}
function AQ() {
  return n().host.launchOptions.printOutputFormat();
}
function BGo(e) {
  n().host.launchOptions.replacePrintOutputFormat(e);
}
function oet() {
  return n().host.launchOptions.thinkingDisplayExplicit();
}
function set(e) {
  n().host.launchOptions.replaceThinkingDisplayExplicit(e);
}
function dP() {
  return n().host.launchOptions.permissionPromptToolName();
}
function jGo(e) {
  n().host.launchOptions.replacePermissionPromptToolName(e);
}
function $c() {
  return n().surfaceCapabilities.attacherCaps();
}
function WGo(e) {
  n().surfaceCapabilities.replaceAttacherCaps(e);
}
function g0(e) {
  return n().surfaceCapabilities.attacherCapsChanged.subscribe(e);
}
function zGo() {
  return n().surfaceCapabilities.rvSupervisorLinkLive();
}
function Egn(e) {
  n().surfaceCapabilities.replaceRvSupervisorLinkLive(e);
}
function GGo(e) {
  return n().surfaceCapabilities.rvSupervisorLinkChanged.subscribe(e);
}
function fSt() {
  return n().host.launchOptions.hasStreamingInput();
}
function VGo(e) {
  n().host.launchOptions.replaceHasStreamingInput(e);
}
function qGo({
  hasStreamingInput: hasStreamingInput,
  sdkUrl: sdkUrl
}) {
  return !hasStreamingInput && !sdkUrl;
}
function Yi(e) {
  if (e.entrypoint === "terminal") return e.ownEventsRequested ? "terminal" : "none";
  if (e.ownEventsOnly) return "evals";
  if (e.hasStreamingInput || e.sdkUrl) return "host";
  if (e.ownEventsRequested) return "evals";
  return "none";
}
function KGo(e) {
  n().host.launchOptions.replaceSingleShotPrintSession(e);
}
function iV() {
  return n().host.launchOptions.singleShotPrintSession();
}
function YGo() {
  n().host.launchOptions.markPrintInputClosed();
}
function HDe() {
  return n().host.launchOptions.printInputClosed();
}
function Tgn() {
  return n().host.launchOptions.clientType();
}
function XGo(e) {
  n().host.launchOptions.replaceClientType(e);
}
function sye() {
  return n().host.launchOptions.sdkAgentProgressSummariesEnabled();
}
function Cgn(e) {
  n().host.launchOptions.replaceSdkAgentProgressSummariesEnabled(e);
}
function Rgn() {
  return n().host.launchOptions.rendererMode();
}
function JGo(e) {
  n().host.launchOptions.replaceRendererMode(e);
}
function Agn() {
  return n().host.launchOptions.strictToolResultPairing();
}
function _v() {
  return n().host.launchOptions.restrictedSession();
}
function xgn(e) {
  n().host.launchOptions.replaceRestrictedSession(e);
}
function Pgn() {
  return n().host.launchOptions.workspaceRestrictionState()?.restriction ?? null;
}
function DA() {
  return Pgn() !== null;
}
function Xi(e) {
  for (let [t, o] of n().host.launchOptions.restrictedWorkspaceRoots()) if (e === t || e.startsWith(t.endsWith(vn) ? t : t + vn)) return o;
  return null;
}
function QGo(e) {
  return Xi(e) !== null;
}
function ZGo(e) {
  if (Pgn()?.gateKeys.includes(e)) return !0;
  for (let t of n().host.launchOptions.restrictedWorkspaceRoots().values()) if (t.gateKeys.includes(e)) return !0;
  return !1;
}
function e2o() {
  return n().sessionFlags.accountMemoryLaunchMode();
}
function cP() {
  return n().sessionFlags.memoryToggledOff();
}
function nre(e) {
  let t = n();
  if (t.sessionFlags.memoryToggledOff() === e) return;
  t.sessionFlags.replaceMemoryToggledOff(e), An.of(t).emit(e);
}
var An = new at(() => Me());
function Ogn(e, t = n()) {
  return An.of(t).subscribe(e);
}
function iye() {
  return n().sessionFlags.autoMemoryOffThisSession();
}
function iet(e) {
  let t = n();
  if (t.sessionFlags.autoMemoryOffThisSession() === e) return;
  if (t.sessionFlags.replaceAutoMemoryOffThisSession(e), t.sessionFlags.accountMemorySessionMode() !== "off") t.sessionFlags.replaceMemoryPausedByCommand(!1);
  wn.of(t).emit(e);
}
var wn = new at(() => Me());
function Ign(e, t = n()) {
  return wn.of(t).subscribe(e);
}
function rjr() {
  return n().sessionFlags.restoredMemoryPause();
}
function zjt(e) {
  n().sessionFlags.replaceRestoredMemoryPause(e);
}
function t2o() {
  return n().sessionFlags.restoredAutoMemoryOff();
}
function aet(e) {
  n().sessionFlags.replaceRestoredAutoMemoryOff(e);
}
function n2o(e) {
  if (e === !1) throw Error("setWizardOperatorToolsEnabled(false) is test-only: the wizard latch is one-way in production");
  n().host.launchOptions.replaceWizardOperatorToolsEnabled(e);
}
function r2o() {
  return n().host.launchOptions.wizardOperatorToolsEnabled();
}
function mSt() {
  return n().host.launchOptions.pollEventIngress();
}
function o2o() {
  return mSt() !== "none";
}
function $i(e) {
  n().host.launchOptions.markPollEventIngress(e);
}
function Zi() {
  n().host.launchOptions.markOwnEventDeliveryRequested();
}
function s2o(e) {
  let t = Yi(e);
  if (t !== "none" && !(t === "host" && mSt() === "evals")) $i(t);
  if (e.ownEventsRequested) Zi();
}
function QW() {
  return n().host.launchOptions.userMsgOptIn();
}
function $De(e) {
  n().host.launchOptions.replaceUserMsgOptIn(e);
}
function i2o() {
  return n().host.launchOptions.searchToolsOptIn();
}
function a2o(e) {
  n().host.launchOptions.replaceSearchToolsOptIn(e);
}
function l2o() {
  return n().host.launchOptions.todoToolsOptIn();
}
function d2o(e) {
  n().host.launchOptions.replaceTodoToolsOptIn(e);
}
function c2o() {
  return n().host.launchOptions.toolsOmittedByLaunchList();
}
function u2o(e) {
  n().host.launchOptions.replaceToolsOmittedByLaunchList(new Set(e));
}
function p2o() {
  return n().host.launchOptions.sessionStartType();
}
function Mgn(e) {
  n().host.launchOptions.replaceSessionStartType(e);
}
function ojr() {
  return n().host.launchOptions.questionPreviewFormat();
}
function sjr(e) {
  n().host.launchOptions.replaceQuestionPreviewFormat(e);
}
function GTe() {
  return n().host.launchOptions.extendedQuestionsEnabled();
}
function f2o(e) {
  n().host.launchOptions.replaceExtendedQuestionsEnabled(e);
}
function m2o() {
  return n().host.launchOptions.questionOptionDescriptionsOptional();
}
function g2o(e) {
  n().host.launchOptions.replaceQuestionOptionDescriptionsOptional(e);
}
function ijr() {
  return n().sessionScratch.agentColorMap();
}
function LA() {
  return n().host.settingsSource.flagSettingsPath();
}
function h2o(e) {
  n().host.settingsSource.replaceFlagSettingsPath(e);
}
function aye() {
  return n().host.settingsSource.flagAgentsFilePaths();
}
function y2o(e) {
  n().host.settingsSource.replaceFlagAgentsFilePaths(e);
}
function bv() {
  return n().host.settingsSource.flagSettingsExpectedContent();
}
function _2o(e) {
  n().host.settingsSource.replaceFlagSettingsExpectedContent(e);
}
function rre() {
  return n().host.settingsSource.flagSettingsFilePinnedContent();
}
function b2o(e) {
  n().host.settingsSource.replaceFlagSettingsFilePinnedContent(e);
}
function Gf() {
  return n().host.settingsSource.flagSettingsInline();
}
function uP(e) {
  n().host.settingsSource.replaceFlagSettingsInline(e);
}
function gSt() {
  return n().host.settingsSource.parentManagedSettings();
}
function S2o(e) {
  n().host.settingsSource.replaceParentManagedSettings(e);
}
function ore() {
  return n().host.settingsSource.parentManagedSettingsInvalid();
}
function w2o(e) {
  n().host.settingsSource.replaceParentManagedSettingsInvalid(e);
}
function jGe() {
  let e = x();
  return e ? e.secrets.sessionIngressToken : n().host.credentialSlots.sessionIngressToken();
}
function WGe(e) {
  let t = x();
  if (t) t.secrets.sessionIngressToken = e;else n().host.credentialSlots.replaceSessionIngressToken(e);
}
function X4() {
  return n().host.credentialSlots.oauthTokenFromFd();
}
function k$(e) {
  n().host.credentialSlots.replaceOauthTokenFromFd(e);
}
function o1() {
  return n().host.credentialSlots.oauthTokenFromBgSnapshot();
}
function Gjt(e) {
  n().host.credentialSlots.replaceOauthTokenFromBgSnapshot(e);
}
function v2o() {
  return n().host.credentialSlots.oauthScopesFromFd();
}
function Vjt(e) {
  n().host.credentialSlots.replaceOauthScopesFromFd(e);
}
function ajr() {
  return n().host.credentialSlots.apiKeyFromFd();
}
function ljr(e) {
  n().host.credentialSlots.replaceApiKeyFromFd(e);
}
function k2o(e) {
  return n().host.credentialSlots.descriptorAnnouncementConsumed(e);
}
function hSt(e) {
  n().host.credentialSlots.markDescriptorAnnouncementConsumed(e);
}
function qjt(e) {
  return n().host.credentialSlots.credentialRoad(e);
}
function lye(e, t, o) {
  n().host.credentialSlots.noteCredentialRoad(e, t, o);
}
function djr() {
  return n().host.credentialSlots.gatewayTokenFromDescriptor();
}
function FJn(e) {
  n().host.credentialSlots.replaceGatewayTokenFromDescriptor(e);
}
function E2o() {
  n().host.credentialSlots.resetFdCredentialState();
}
function Br() {
  return n().host.credentialSlots.gatewayAuth();
}
function T2o() {
  let e = n().host.credentialSlots.gatewayAuth();
  return !!e && e.expiresAt <= Date.now();
}
function pP(e) {
  return !!e && !e.unpinned;
}
function HJn(e) {
  let t = e?.hostVerdict;
  return t !== void 0 && "verified" in t && t.verified;
}
function $Jn(e) {
  return pP(e) || HJn(e);
}
function C2o(e) {
  n().host.credentialSlots.replaceGatewayServerProcess(e);
}
function det() {
  return n().host.credentialSlots.gatewayServerProcess();
}
function cet(e) {
  n().host.credentialSlots.replaceGatewayRequiredByHostPolicyReader(e);
}
function uet() {
  return n().host.credentialSlots.gatewayRequiredByHostPolicy();
}
function sre(e) {
  n().host.credentialSlots.replaceGatewayAuth(e);
}
function R2o() {
  return n().host.credentialSlots.authenticatedAccount();
}
function VTe(e) {
  n().host.credentialSlots.stampAuthenticatedAccount(e);
}
function dye() {
  return n().host.credentialSlots.authenticatedAccountEpoch();
}
function A2o() {
  return n().host.credentialSlots.startupPolicySnapshot();
}
function x2o(e) {
  n().host.credentialSlots.replaceStartupPolicySnapshot(e);
}
function UDe() {
  return n().host.credentialSlots.gatewayRefreshInFlight();
}
function cjr(e) {
  n().host.credentialSlots.replaceGatewayRefreshInFlight(e);
}
function P2o(e) {
  n().requestJournal.replaceLastAPIRequest(e);
}
function Dgn() {
  return n().requestJournal.lastAPIRequest();
}
function UJn(e) {
  n().requestJournal.replaceLastCancelledAPIMessageId(e);
}
function BDe() {
  return n().requestJournal.lastCancelledAPIMessageId();
}
function O2o(e) {
  n().requestJournal.replaceLastAPIRequestMessages(e);
}
function BJn(e) {
  n().requestJournal.replaceLastClassifierRequests(e);
}
function ujr() {
  return n().requestJournal.lastClassifierRequests();
}
function Lgn(e) {
  let t = m();
  if (t) t.cachedClaudeMdContent = e;else n().sessionFlags.replaceCachedClaudeMdContent(e);
}
function I2o() {
  let e = m();
  return e ? e.cachedClaudeMdContent : n().sessionFlags.cachedClaudeMdContent();
}
function zGe() {
  let {
    settingsSource: settingsSource,
    launchOptions: launchOptions_3
  } = n().host;
  return launchOptions_3.workspaceRestrictionState()?.restriction ? settingsSource.allowedSettingSourcesWithoutRepoDirSources() : settingsSource.allowedSettingSources();
}
function cye() {
  return n().host.settingsSource.allowedSettingSources();
}
function pjr(e) {
  n().host.settingsSource.replaceAllowedSettingSources(e);
}
function Ngn() {
  return we() && n().host.launchOptions.clientType() !== "claude-vscode";
}
function E$(e) {
  n().host.extensionsConfig.replaceInlinePlugins(e);
}
function cS() {
  return n().host.extensionsConfig.inlinePlugins();
}
function uye(e) {
  n().host.extensionsConfig.replaceInlinePluginsNoMcp(e);
}
function cT() {
  return n().host.extensionsConfig.inlinePluginsNoMcp();
}
function M2o(e) {
  n().host.extensionsConfig.replaceInlinePluginUrls(e);
}
function pye() {
  return n().host.extensionsConfig.inlinePluginUrls();
}
function ySt(e, t, o) {
  n().host.extensionsConfig.replaceSyncedPluginDirs(e, t, o);
}
function D2o(e) {
  return n().host.extensionsConfig.syncedPluginRowId(e);
}
function Fgn(e) {
  return n().host.extensionsConfig.syncedPluginAttestation(e);
}
function L2o(e) {
  n().host.extensionsConfig.replaceAttestedOfficialPluginIds(e);
}
function N2o(e) {
  return n().host.extensionsConfig.attestedOfficialPluginMarketplace(e);
}
function jJn() {
  return n().host.extensionsConfig.syncedPluginDirsRegistered();
}
function GGe() {
  return n().pluginsSync.syncedLaneOpened;
}
function F2o() {
  n().pluginsSync.syncedLaneOpened = !0;
}
function fjr(e) {
  for (let t of e) n().pluginsSync.syncedDirsLoadedHere.add(bn(t));
}
function H2o(e) {
  return n().pluginsSync.syncedDirsLoadedHere.has(bn(e));
}
function yL() {
  return n().pluginsSync;
}
function Hgn() {
  return n().pluginsSync.lastCompleteList;
}
function $2o() {
  return n().pluginsSync.lastSyncedLaneLoad;
}
function U2o(e) {
  n().pluginsSync.lastSyncedLaneLoad = e;
}
function B2o() {
  n().host.extensionsConfig.clearSyncedPluginDirs(), n().pluginsSync.syncedLaneOpened = !1, n().pluginsSync.syncedDirsLoadedHere.clear(), n().pluginsSync.removalsDeferredHere.clear(), n().pluginsSync.lastSyncedLaneLoad = null;
}
function xQ() {
  return n().host.extensionsConfig.syncedPluginDirs();
}
function $gn(e) {
  n().sessionFlags.replaceAccountSkillsSyncEnabled(e);
}
function Ugn() {
  return n().sessionFlags.accountSkillsSyncEnabled();
}
function Bgn(e) {
  n().sessionFlags.replaceSkillsSyncVetoed(e);
}
function aC() {
  return n().sessionFlags.skillsSyncVetoed();
}
function j2o(e) {
  n().sessionFlags.replaceAccountPluginsSyncEnabled(e);
}
function _St() {
  return n().sessionFlags.accountPluginsSyncEnabled();
}
function W2o(e) {
  n().sessionFlags.replacePluginsSyncVetoed(e);
}
function PQ() {
  return n().sessionFlags.pluginsSyncVetoed();
}
function z2o(e) {
  n().host.extensionsConfig.replaceChromeFlagOverride(e);
}
function Mde() {
  return n().host.extensionsConfig.chromeFlagOverride();
}
function G2o(e) {
  n().host.extensionsConfig.replaceTeammateAgentId(e);
}
function q_() {
  return n().host.extensionsConfig.teammateAgentId();
}
function V2o(e) {
  n().sessionFlags.replaceOnboardingShownThisSession(e);
}
function q2o() {
  return n().sessionFlags.onboardingShownThisSession();
}
function aV(e) {
  let t = n();
  t.host.settingsSource.replaceUseCoworkPlugins(e), C1r.of(t.host).invalidateAll();
}
function jgn() {
  return n().host.settingsSource.useCoworkPlugins();
}
function K2o(e) {
  n().host.launchOptions.replaceDisableSlashCommands(e);
}
function Ty() {
  return n().host.launchOptions.disableSlashCommands();
}
function Wgn() {
  return n().host.launchOptions.disableFileMentions();
}
function fye() {
  return n().host.launchOptions.sessionUploadsDir();
}
function Y2o(e) {
  n().host.launchOptions.replaceLocalUploadsRoot(e);
}
function VGe() {
  return n().host.launchOptions.localUploadsRoot();
}
function zgn(e) {
  n().host.launchOptions.replaceSessionBypassPermissionsMode(e);
}
function OQ() {
  return n().host.launchOptions.sessionBypassPermissionsMode();
}
function s1(e) {
  n().host.launchOptions.replaceScheduledTasksEnabled(e);
}
function WJn() {
  return n().host.launchOptions.scheduledTasksEnabled();
}
function X2o(e) {
  return n().host.launchOptions.onScheduledTasksEnabled(e);
}
function Tm() {
  return m()?.sessionCronTasks ?? n().sessionCron.tasks();
}
function qTe(e) {
  let t = m();
  if (t) t.sessionCronTasks.push(e);else n().sessionCron.schedule(e);
  n().sessionCron.changed.emit();
}
function J2o(e) {
  return n().sessionCron.chainStartedAt(e);
}
function mjr(e, t) {
  n().sessionCron.recordChainStart(e, t);
}
function Ggn(e) {
  n().sessionCron.forgetChainStart(e);
}
function mye() {
  return n().sessionCron.tickInFlightPrompt();
}
function bSt(e) {
  n().sessionCron.replaceTickInFlightPrompt(e);
}
function gjr() {
  return n().sessionCron.consecutiveKeepalives();
}
function Vgn(e) {
  n().sessionCron.replaceConsecutiveKeepalives(e);
}
function qgn() {
  return n().sessionCron.ended();
}
function Kjt() {
  return n().sessionCron.wakeFires();
}
function Kgn() {
  n().sessionCron.recordWakeFire();
}
function Yjt() {
  n().sessionCron.resetWakeFires();
}
function zJn(e) {
  if (n().sessionCron.replaceEnded(e), e) n().sessionCron.changed.emit();
}
function Q5(e, {
  handOff = !1
} = {}) {
  if (e.length === 0) return 0;
  let o = new Set(e),
    r = m(),
    i = r ? r.sessionCronTasks : n().sessionCron.tasks(),
    s = i.filter(item => !o.has(item.id)),
    a = i.length - s.length;
  if (a === 0) return 0;
  let l = !handOff && i.some(item => item.kind === "loop" && o.has(item.id));
  if (r) r.sessionCronTasks.length = 0, r.sessionCronTasks.push(...s);else n().sessionCron.replaceTasks(s);
  if (l) n().sessionCron.pendingLoopWakeup.emit(void 0);
  return n().sessionCron.changed.emit(), a;
}
function Ygn(e) {
  return n().sessionCron.changed.subscribe(e);
}
function Q2o(e) {
  return n().sessionCron.pendingLoopWakeup.subscribe(e);
}
function Xjt(e) {
  n().sessionCron.pendingLoopWakeup.emit(e);
}
function bF(e) {
  n().sessionFlags.replaceSessionTrustAccepted(e);
}
function KTe() {
  return n().sessionFlags.sessionTrustAccepted();
}
function qGe(e) {
  n().sessionFlags.replaceHomeTrustDialogAccepted(e);
}
function YTe() {
  return n().sessionFlags.homeTrustDialogAccepted();
}
function Z2o(e) {
  n().host.launchOptions.replaceSessionPersistenceDisabled(e);
}
function SI() {
  return n().host.launchOptions.sessionPersistenceDisabled();
}
function de() {
  return Eg();
}
function Eg() {
  return n().host.launchOptions.diskless();
}
function Dw() {
  return k.host.launchOptions.diskless();
}
function Xgn() {
  return n().host.launchOptions.ccrSessionUrl();
}
function gye() {
  return n().host.launchOptions.ccrDerivedSurface();
}
function XTe() {
  return n().host.launchOptions.entrypointOnRequests();
}
function Jgn() {
  return n().host.launchOptions.toolsMachine();
}
function Qgn() {
  return n().sessionFlags.hasExitedPlanMode();
}
function T$(e) {
  n().sessionFlags.replaceHasExitedPlanMode(e);
}
function hjr() {
  return n().host.proactivity.selectorGate();
}
function eVo() {
  return n().host.proactivity.selectorGateEverOn();
}
function tVo() {
  n().host.proactivity.inheritSelectorGateEverOn();
}
function yjr(e) {
  n().host.proactivity.replaceSelectorGate(e);
}
function nVo(e) {
  n().host.proactivity.resampleSelectorGate(e);
}
function Jjt(e) {
  return n().host.proactivity.subscribeSelectorGateChanged(e);
}
function rVo(e) {
  n().host.proactivity.replaceHostGateSubscription(e);
}
function oVo() {
  return n().sessionFlags.needsPlanModeExitAttachment();
}
function J4(e) {
  n().sessionFlags.replaceNeedsPlanModeExitAttachment(e);
}
function hye(e, t) {
  if (t === "plan" && e !== "plan") n().sessionFlags.replaceNeedsPlanModeExitAttachment(!1);
  if (e === "plan" && t !== "plan") n().sessionFlags.replaceNeedsPlanModeExitAttachment(!0);
}
function sVo() {
  return n().sessionFlags.needsAutoModeExitAttachment();
}
function SF(e) {
  n().sessionFlags.replaceNeedsAutoModeExitAttachment(e);
}
function iVo(e, t) {
  if (e === "auto" && t === "plan" || e === "plan" && t === "auto") return;
  let o = e === "auto",
    r = t === "auto";
  if (r && !o) n().sessionFlags.replaceNeedsAutoModeExitAttachment(!1);
  if (o && !r) n().sessionFlags.replaceNeedsAutoModeExitAttachment(!0);
}
function _jr() {
  return n().sessionFlags.lspRecommendationShownThisSession();
}
function bjr(e) {
  n().sessionFlags.replaceLspRecommendationShownThisSession(e);
}
function aVo(e) {
  n().host.launchOptions.replaceInitJsonSchema(e);
}
function Sjr() {
  return n().host.launchOptions.initJsonSchema();
}
function lVo(e) {
  n().mcpSessionWiring.registerClientsAccessor(e);
}
function wjr(e) {
  return n().mcpSessionWiring.acquireClientsAccessor(e);
}
function Lw() {
  return n().mcpSessionWiring.clientsFromAccessor();
}
function Zgn(e) {
  n().host.mcpProcessWiring.registerEnsureConnectedClient(e);
}
function Z5() {
  return n().host.mcpProcessWiring.ensureConnectedClient();
}
function SSt(e) {
  n().mcpSessionWiring.registerConnectedClientWiring(e);
}
function ehn() {
  return n().mcpSessionWiring.connectedClientWiring();
}
function dVo(e) {
  n().mcpSessionWiring.registerToolsSwapper(e);
}
function vjr(e) {
  return n().mcpSessionWiring.acquireToolsSwapper(e);
}
function thn(e, t, o) {
  return n().mcpSessionWiring.swapServerTools(e, t, o);
}
function T() {
  return m() ?? n().hookRegistry.holder();
}
function e8(e) {
  let t = T();
  if (!t.registeredHooks) t.registeredHooks = {};
  for (let [o, r] of Object.entries(e)) {
    let i = o;
    if (!t.registeredHooks[i]) t.registeredHooks[i] = [];
    t.registeredHooks[i].push(...r);
  }
  IQ();
}
function fP() {
  return T().registeredHooks;
}
function cVo() {
  return k.hookRegistry.holder().registeredHooks;
}
function nhn() {
  let e = T();
  e.registeredHooks = null, e.sdkHostOutOfReachNoted = void 0, IQ();
}
function uVo() {
  let e = T();
  if (e.sdkHostOutOfReachNoted) return !1;
  return e.sdkHostOutOfReachNoted = !0, !0;
}
function kjr() {
  T().sdkHostOutOfReachNoted = void 0;
}
function i1() {
  return T().pluginHookRunner;
}
function GJn(e) {
  let t = i1();
  es();
  let o = {};
  for (let [r, i] of Object.entries(e)) o[r] = i.filter(item => !("pluginRoot" in item) || t?.holds(item.pluginId) !== !0);
  e8(o);
}
function es() {
  let e = T();
  if (!e.registeredHooks) return;
  let pluginHookRunner = e.pluginHookRunner,
    o = {};
  for (let [r, i] of Object.entries(e.registeredHooks)) {
    let s = i.filter(item => !("pluginRoot" in item) || pluginHookRunner?.holds(item.pluginId) === !0);
    if (s.length > 0) o[r] = s;
  }
  e.registeredHooks = Object.keys(o).length > 0 ? o : null, IQ();
}
var Ln = new z(() => Me());
function IQ() {
  ms(Ln).emit();
}
function pVo(e) {
  return ms(Ln).subscribe(e);
}
function JTe() {
  return n().sessionScratch.planSlugCache();
}
function Ejr() {
  return m()?.sessionCreatedTeams ?? n().sessionScratch.sessionCreatedTeams();
}
function Tjr() {
  return m()?.sessionSpawnedTeammatePanes ?? n().sessionScratch.sessionSpawnedTeammatePanes();
}
function VJn() {
  return m()?.surfacedHookSpawnFailures ?? n().sessionScratch.surfacedHookSpawnFailures();
}
function Cjr() {
  return x()?.pendingConversationEditKinds ?? k.sessionScratch.pendingConversationEditKinds();
}
function Rjr() {
  return x()?.clientTruncatedAssistantIds ?? k.sessionScratch.clientTruncatedAssistantIds();
}
function Ajr() {
  return x()?.heldStatelessReplyIds ?? k.sessionScratch.heldStatelessReplyIds();
}
function xjr() {
  return x()?.unsupportedThreadKeys ?? k.sessionScratch.unsupportedThreadKeys();
}
function fVo() {
  return m()?.bareMcpServerMatchersWarned ?? n().sessionScratch.bareMcpServerMatchersWarned();
}
function qJn() {
  return m()?.pendingBranchLinks ?? n().sessionScratch.pendingBranchLinks();
}
function Pjr() {
  return n().sessionScratch.pendingPrLinks();
}
function mVo() {
  return n().sessionScratch.policyPredicateTelemetryEmitted();
}
function wSt() {
  return m()?.chromeAvailabilityStagesLogged ?? n().sessionScratch.chromeAvailabilityStagesLogged();
}
function gVo() {
  return n().sessionScratch.chromeAvailabilityAnchorMs();
}
function hVo() {
  return n().sessionFlags.proposeGoalAvailabilityLogged();
}
function yVo() {
  n().sessionFlags.markProposeGoalAvailabilityLogged();
}
function Ojr() {
  return n().sessionFlags.inheritedTeamName();
}
function _Vo(e) {
  n().sessionFlags.replaceInheritedTeamName(e);
}
function Qjt(e) {
  n().sessionFlags.replaceTeleportedSessionInfo({
    isTeleported: !0,
    hasLoggedFirstMessage: !1,
    sessionId: e.sessionId
  });
}
function Zjt() {
  return n().sessionFlags.teleportedSessionInfo();
}
function Ijr() {
  n().sessionFlags.markFirstTeleportMessageLogged();
}
function ire(skillName, skillPath, content, agentId = null) {
  let i = `${agentId ?? ""}:${skillName}`;
  n().invokedSkills.record(i, {
    skillName: skillName,
    skillPath: skillPath,
    content: content,
    invokedAt: Date.now(),
    agentId: agentId
  });
}
function MQ() {
  return n().invokedSkills.skills();
}
function Mjr(e, content_2) {
  let o = n(),
    r = o.invokedSkills.lookup(e);
  if (r) o.invokedSkills.record(e, {
    ...r,
    content: content_2
  });
}
function rhn(e) {
  let t = e ?? null,
    o = new Map();
  for (let [r, i] of n().invokedSkills.skills()) if (i.agentId === t) o.set(r, i);
  return o;
}
function bVo(e) {
  let t = n();
  if (!e || e.size === 0) {
    t.invokedSkills.forgetAll();
    return;
  }
  for (let [o, r] of t.invokedSkills.skills()) if (r.agentId === null || !e.has(r.agentId)) t.invokedSkills.forget(o);
}
function pet(e) {
  let t = n();
  for (let [o, r] of t.invokedSkills.skills()) if (r.agentId === e) t.invokedSkills.forget(o);
}
function jai(e, t) {
  n().host.diagnostics.recordSlowOperation(e, t);
}
function Wai() {
  return n().host.diagnostics.slowOperations();
}
function zai() {
  return n().host.diagnostics.devBarAlert();
}
function pE() {
  let e = m();
  return e ? e.mainThreadAgentType : n().hookRegistry.mainThreadAgentType();
}
function Dde(e) {
  let t = m();
  if (t) t.mainThreadAgentType = e;else n().hookRegistry.replaceMainThreadAgentType(e);
}
function DQ() {
  let e = m();
  return e ? e.mainThreadAgentHooks : n().hookRegistry.mainThreadAgentHooks();
}
function SVo() {
  return k.hookRegistry.mainThreadAgentHooks();
}
function KJn(e) {
  let t = m();
  if (t) t.mainThreadAgentHooks = e;else n().hookRegistry.replaceMainThreadAgentHooks(e);
  IQ();
}
function lV() {
  return n().host.extensionsConfig.sessionSkillAllowlist();
}
function wVo(e) {
  n().host.extensionsConfig.replaceSessionSkillAllowlist(e);
}
function wI() {
  return n().surfaceCapabilities.caps();
}
function ohn(e) {
  n().surfaceCapabilities.replaceCaps(e);
}
function Bn() {
  return n().surfaceCapabilities.caps().workspace === "remote";
}
function LQ(e) {
  n().surfaceCapabilities.markRemote(e);
}
function vSt() {
  return n().promptAssembly.sections();
}
function vVo(e, t) {
  n().promptAssembly.recordSection(e, t);
}
function shn(e) {
  n().promptAssembly.forgetAllSections(), vI(e);
}
function vI(e) {
  n().promptAssembly.noteInvalidation(e);
}
function NQ() {
  return n().promptAssembly.epoch();
}
function Gai() {
  return n().promptAssembly.lastInvalidationReason();
}
function kVo() {
  return n().sessionScratch.vimSharedState();
}
function EVo(e) {
  n().sessionScratch.replaceVimSharedState(e);
}
function hc() {
  return de() ? [] : n().host.extensionsConfig.additionalDirectoriesForClaudeMd();
}
function a1(e) {
  n().host.extensionsConfig.replaceAdditionalDirectoriesForClaudeMd(e);
}
function t_() {
  return n().host.extensionsConfig.allowedChannels();
}
function KGe(e) {
  n().host.extensionsConfig.replaceAllowedChannels(e);
}
function ihn() {
  return n().host.extensionsConfig.hasDevChannels();
}
function TVo(e) {
  n().host.extensionsConfig.replaceHasDevChannels(e);
}
function CVo() {
  return n().host.requestLatches.promptCache1hAllowlist();
}
function RVo(e) {
  n().host.requestLatches.replacePromptCache1hAllowlist(e);
}
function YGe(e) {
  return n().host.requestLatches.thinkingTypeOverrides().get(e);
}
function AVo(e, t) {
  n().host.requestLatches.recordThinkingTypeOverride(e, t);
}
function ahn(e) {
  return n().host.requestLatches.servedModelsByRequestedModel().get(e);
}
function Djr(e, t) {
  if (e === t) return;
  let requestLatches = n().host.requestLatches,
    r = requestLatches.servedModelsByRequestedModel().get(e);
  if (r) r.add(t);else requestLatches.recordServedModels(e, new Set([t]));
}
function YJn(e) {
  return n().host.requestLatches.effortUnsupportedModels().has(e);
}
function lhn(e) {
  n().host.requestLatches.markEffortUnsupported(e);
}
function xVo(e) {
  return n().host.requestLatches.structuredOutputsUnsupportedModels().has(e);
}
function PVo(e) {
  n().host.requestLatches.markStructuredOutputsUnsupported(e);
}
function OVo() {
  n().host.requestLatches.clearStructuredOutputsUnsupported();
}
function IVo(e) {
  return n().host.requestLatches.context1mRefusedModels().has(e);
}
function MVo(e) {
  n().host.requestLatches.markContext1mRefused(e);
}
function Ljr() {
  n().host.requestLatches.clearContext1mRefused();
}
function DVo(e) {
  return n().host.requestLatches.refusedBetas(e);
}
function LVo(e, t) {
  n().host.requestLatches.markBetaRefused(e, t);
}
function NVo() {
  return n().host.requestLatches.midConvCachePromotionRejected();
}
function FVo() {
  n().host.requestLatches.markMidConvCachePromotionRejected();
}
function Lde() {
  return n().host.requestLatches.thirdPartyServerClassifierRefused();
}
function dhn() {
  n().host.requestLatches.markThirdPartyServerClassifierRefused();
}
function XJn() {
  return n().host.requestLatches.threadsHeldForServerClassifier();
}
function HVo() {
  n().host.requestLatches.markThreadsHeldForServerClassifier();
}
function $Vo(e) {
  return n().host.requestLatches.autoModeUnavailableResponse(e);
}
function Njr(e) {
  return n().host.requestLatches.autoModeUnavailableResponsesInARow(e);
}
function Fjr(e, t) {
  n().host.requestLatches.noteAutoModeUnavailableResponse(e, t);
}
function Hjr(e) {
  n().host.requestLatches.clearAutoModeUnavailableResponses(e);
}
function $jr(e) {
  n().host.requestLatches.setAutoModeUnavailableStopNotice(e);
}
function JJn() {
  return n().host.requestLatches.autoModeUnavailableStopNotice();
}
function UVo(e) {
  n().host.requestLatches.setLocalCommandExitCode(e);
}
function BVo() {
  return n().host.requestLatches.localCommandExitCode();
}
function jVo() {
  return n().host.requestLatches.observedGateway();
}
function WVo(e) {
  n().host.requestLatches.noteObservedGateway(e);
}
function QJn() {
  return n().host.requestLatches.serverClassifierFallbackChoice();
}
function zVo(e) {
  n().host.requestLatches.setServerClassifierFallbackChoice(e);
}
function Ujr() {
  n().host.requestLatches.clearServerClassifierFallbackChoice();
}
function GVo() {
  return n().host.requestLatches.takeServerClassifierFallbackAnnouncement();
}
function VVo() {
  return n().host.requestLatches.perTurnEffortOkEmitted();
}
function qVo() {
  n().host.requestLatches.markPerTurnEffortOkEmitted();
}
function KVo() {
  return n().host.requestLatches.lateToolAdditionsOkEmitted();
}
function YVo() {
  n().host.requestLatches.markLateToolAdditionsOkEmitted();
}
function XVo() {
  return n().host.requestLatches.toolChangeHeaderRefused();
}
function JVo() {
  n().host.requestLatches.markToolChangeHeaderRefused();
}
function QVo() {
  return n().host.requestLatches.promptEndMarkRefused();
}
function ZVo() {
  n().host.requestLatches.markPromptEndMarkRefused();
}
function ZJn() {
  return n().host.requestLatches.inlineToolsRefused();
}
function Bjr() {
  n().host.requestLatches.markInlineToolsRefused();
}
function eqo() {
  return n().host.requestLatches.inlineToolsOkEmitted();
}
function tqo() {
  n().host.requestLatches.markInlineToolsOkEmitted();
}
function jjr() {
  return n().host.requestLatches.thinkingResumptionRefused();
}
function nqo() {
  n().host.requestLatches.markThinkingResumptionRefused();
}
function rqo() {
  return n().host.requestLatches.refusedBetaHeaders();
}
function kSt(e) {
  n().host.requestLatches.markBetaHeaderRefused(e);
}
function chn() {
  return n().host.requestLatches.thinkingHighlightsRefused();
}
function oqo() {
  n().host.requestLatches.markThinkingHighlightsRefused();
}
function sqo(e) {
  return n().host.requestLatches.toolChangeUnsupportedModels().has(e);
}
function iqo(e) {
  n().host.requestLatches.markToolChangeUnsupportedModel(e);
}
function QTe(e) {
  return n().host.requestLatches.inferenceProfileBackingModels().get(e);
}
function aqo(e, t) {
  n().host.requestLatches.recordInferenceProfileBackingModel(e, t);
}
function js() {
  return m()?.stickyBetas ?? n().conversationLatches.stickyBetas();
}
function FQ() {
  let e = m();
  return e ? e.conversationAtisLatch : n().conversationLatches.atisLatch();
}
function XGe(e) {
  let t = m();
  if (t) t.conversationAtisLatch = e;else n().conversationLatches.replaceAtisLatch(e);
}
function eQn() {
  let e = m();
  if (e) e.stickyBetas = Z(e.stickyBetas);else n().conversationLatches.unlatchStickyBetas();
  Ljr();
}
function Nde() {
  return n().requestJournal.promptId();
}
function eWt(e) {
  n().requestJournal.replacePromptId(e);
}
function lqo() {
  return n().requestJournal.incrementPromptIndex();
}
function Q4() {
  return n().requestJournal.promptIndex();
}
function uhn(uuid_3, timestamp) {
  let requestJournal_2 = n().requestJournal,
    r = requestJournal_2.lastPersonPrompt(),
    i = Date.parse(timestamp);
  if (r === null || !Number.isNaN(i) && !(i < Date.parse(r.timestamp))) requestJournal_2.replaceLastPersonPrompt({
    uuid: uuid_3,
    timestamp: timestamp
  });
}
function tQn() {
  return n().requestJournal.lastPersonPrompt();
}
function Sc() {
  return n().surfaceCapabilities.replBridgeActive();
}
function JGe(e) {
  n().surfaceCapabilities.replaceReplBridgeActive(e);
}
function ZTe() {
  return n().surfaceCapabilities.mainLoopBusy();
}
function phn() {
  return n().surfaceCapabilities.mainQueryRunning();
}
function dqo(e) {
  n().surfaceCapabilities.replaceMainLoopStatus(e);
}
export { eSt, SJn, azo, IGe, _1r, b1r, tgn, ngn, Tjt, KS, S1r, w1r, v1r, Cjt, eV, $Te, Xhe, VZe, rgn, MGe, qZe, k1r, DGe, E1r, T1r, Qne, Jhe, wJn, tSt, UTe, Nn, _I, n3s, r3s, o3s, Rjt, LGe, C1r, Zne, dT, nSt, vJn, lzo, rSt, dzo, oSt, kJn, s3s, sSt, czo, uzo, ogn, EJn, hF, gk, kg, pm, R1r, i3s, TJn, A1r, x1r, iSt, CJn, sgn, ere, P1r, Ajt, xde, NGe, Qhe, Zhe, Pde, KZe, O1r, I1r, YZe, n1, Gr, X5, aSt, BTe, F, bI, L, oa, pzo, hu, r1, ui, a3s, RJn, ign, l3s, iC, TQ, tV, dS, xDe, fzo, M1r, mzo, d3s, AJn, XZe, f0, PDe, vo, D1r, at, c3s, j, ms, Bai, K, Ze, gzo, ODe, kb, Hc, L1r, hzo, IDe, xJn, N1r, xjt, Pjt, eye, ke, ii, J5, iP, Qr, yu, agn, aP, yzo, jTe, yR, JZe, lgn, FGe, _zo, Ode, bzo, Szo, F1r, wzo, H1r, vzo, kzo, Ezo, Tzo, Czo, Rzo, Azo, PJn, dgn, xzo, Pzo, Mw, cgn, ugn, pgn, yF, Ozo, CQ, Izo, fgn, OJn, Mzo, Dzo, Lzo, eh, _F, tye, $1r, U1r, B1r, lSt, Nzo, nye, rye, K4, Fzo, Hzo, MDe, DDe, Ojt, Th, Ijt, Mjt, $zo, Uzo, j1r, W1r, RQ, nV, Bzo, WTe, QZe, Y4, jzo, rV, mgn, Wzo, IJn, zzo, dSt, LDe, NDe, Gzo, tre, MJn, Djt, Vzo, nf, z1r, ZZe, eet, qzo, FDe, Kzo, Yzo, G1r, cSt, ggn, m0, Xzo, gc, hL, Bp, hgn, ygn, Jzo, oV, Ljt, HGe, Qzo, V1r, Zzo, Njt, oye, JW, _gn, eGo, tGo, nGo, rGo, sV, q1r, Ide, oGo, sGo, bgn, iGo, aGo, lGo, DJn, uSt, v$, $Ge, dGo, cGo, uGo, Sgn, pGo, fGo, tet, mGo, gGo, wf, hGo, Fjt, yGo, _Go, wgn, K1r, Y1r, bGo, X1r, zTe, Hjt, UGe, vgn, SGo, wGo, vGo, kGo, EGo, $jt, TGo, net, CGo, so, RGo, Ujt, LJn, AGo, xGo, PGo, pSt, J1r, BGe, Q1r, Z1r, OGo, ejr, IGo, kgn, Bjt, ret, tjr, NJn, MGo, DGo, njr, LGo, we, jjt, lP, NGo, FGo, HGo, $Go, Wjt, kp, UGo, AQ, BGo, oet, set, dP, jGo, $c, WGo, g0, zGo, Egn, GGo, fSt, VGo, qGo, KGo, iV, YGo, HDe, Tgn, XGo, sye, Cgn, Rgn, JGo, Agn, _v, xgn, Pgn, DA, QGo, ZGo, e2o, cP, nre, Ogn, iye, iet, Ign, rjr, zjt, t2o, aet, n2o, r2o, mSt, o2o, s2o, QW, $De, i2o, a2o, l2o, d2o, c2o, u2o, p2o, Mgn, ojr, sjr, GTe, f2o, m2o, g2o, ijr, LA, h2o, aye, y2o, bv, _2o, rre, b2o, Gf, uP, gSt, S2o, ore, w2o, jGe, WGe, X4, k$, o1, Gjt, v2o, Vjt, ajr, ljr, k2o, hSt, qjt, lye, djr, FJn, E2o, Br, T2o, pP, HJn, $Jn, C2o, det, cet, uet, sre, R2o, VTe, dye, A2o, x2o, UDe, cjr, P2o, Dgn, UJn, BDe, O2o, BJn, ujr, Lgn, I2o, zGe, cye, pjr, Ngn, E$, cS, uye, cT, M2o, pye, ySt, D2o, Fgn, L2o, N2o, jJn, GGe, F2o, fjr, H2o, yL, Hgn, $2o, U2o, B2o, xQ, $gn, Ugn, Bgn, aC, j2o, _St, W2o, PQ, z2o, Mde, G2o, q_, V2o, q2o, aV, jgn, K2o, Ty, Wgn, fye, Y2o, VGe, zgn, OQ, s1, WJn, X2o, Tm, qTe, J2o, mjr, Ggn, mye, bSt, gjr, Vgn, qgn, Kjt, Kgn, Yjt, zJn, Q5, Ygn, Q2o, Xjt, bF, KTe, qGe, YTe, Z2o, SI, de, Eg, Dw, Xgn, gye, XTe, Jgn, Qgn, T$, hjr, eVo, tVo, yjr, nVo, Jjt, rVo, oVo, J4, hye, sVo, SF, iVo, _jr, bjr, aVo, Sjr, lVo, wjr, Lw, Zgn, Z5, SSt, ehn, dVo, vjr, thn, e8, fP, cVo, nhn, uVo, kjr, i1, GJn, IQ, pVo, JTe, Ejr, Tjr, VJn, Cjr, Rjr, Ajr, xjr, fVo, qJn, Pjr, mVo, wSt, gVo, hVo, yVo, Ojr, _Vo, Qjt, Zjt, Ijr, ire, MQ, Mjr, rhn, bVo, pet, jai, Wai, zai, pE, Dde, DQ, SVo, KJn, lV, wVo, wI, ohn, Bn, LQ, vSt, vVo, shn, vI, NQ, Gai, kVo, EVo, hc, a1, t_, KGe, ihn, TVo, CVo, RVo, YGe, AVo, ahn, Djr, YJn, lhn, xVo, PVo, OVo, IVo, MVo, Ljr, DVo, LVo, NVo, FVo, Lde, dhn, XJn, HVo, $Vo, Njr, Fjr, Hjr, $jr, JJn, UVo, BVo, jVo, WVo, QJn, zVo, Ujr, GVo, VVo, qVo, KVo, YVo, XVo, JVo, QVo, ZVo, ZJn, Bjr, eqo, tqo, jjr, nqo, rqo, kSt, chn, oqo, sqo, iqo, QTe, aqo, js, FQ, XGe, eQn, Nde, eWt, lqo, Q4, uhn, tQn, Sc, JGe, ZTe, phn, dqo };