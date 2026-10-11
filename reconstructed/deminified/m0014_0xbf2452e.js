// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
var Yt = typeof global == "object" && global && global.Object === Object && global,
  g9n = Yt;
var Xt = typeof self == "object" && self && self.Object === Object && self,
  qt = g9n || Xt || Function("return this")(),
  zD = qt;
var Qt = zD.Symbol,
  z$ = Qt;
var it = Object.prototype,
  {
    hasOwnProperty: hasOwnProperty,
    toString: toString
  } = it,
  P = z$ ? z$.toStringTag : void 0;
function ne(t) {
  var e = hasOwnProperty.call(t, P),
    n = t[P];
  try {
    t[P] = void 0;
    var r = !0;
  } catch (error) {}
  var o = toString.call(t);
  if (r) if (e) t[P] = n;else delete t[P];
  return o;
}
var st = ne;
var re = Object.prototype,
  oe = re.toString;
function ie(t) {
  return oe.call(t);
}
var at = ie;
var se = "[object Null]",
  ae = "[object Undefined]",
  ut = z$ ? z$.toStringTag : void 0;
function ue(t) {
  if (t == null) return t === void 0 ? ae : se;
  return ut && ut in Object(t) ? st(t) : at(t);
}
var fQ = ue;
function le(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Vw = le;
var ce = "[object AsyncFunction]",
  fe = "[object Function]",
  pe = "[object GeneratorFunction]",
  de = "[object Proxy]";
function ge(t) {
  if (!Vw(t)) return !1;
  var e = fQ(t);
  return e == fe || e == pe || e == ce || e == de;
}
var egt = ge;
var me = zD["__core-js_shared__"],
  I = me;
var lt = function () {
  var t = /[^.]+$/.exec(I && I.keys && I.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function he(t) {
  return !!lt && lt in t;
}
var ct = he;
var xe = Function.prototype,
  we = xe.toString;
function be(t) {
  if (t != null) {
    try {
      return we.call(t);
    } catch (error) {}
    try {
      return t + "";
    } catch (error) {}
  }
  return "";
}
var NBe = be;
var _e = /[\\^$.*+?()[\]{}|]/g,
  Se = /^\[object .+?Constructor\]$/,
  ve = Function.prototype,
  ye = Object.prototype,
  Te = ve.toString,
  Ae = ye.hasOwnProperty,
  Oe = RegExp("^" + Te.call(Ae).replace(_e, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Ce(t) {
  if (!Vw(t) || ct(t)) return !1;
  var e = egt(t) ? Oe : Se;
  return e.test(NBe(t));
}
var ft = Ce;
function Ee(t, e) {
  return t == null ? void 0 : t[e];
}
var pt = Ee;
function Ne(t, e) {
  var n = pt(t, e);
  return ft(n) ? n : void 0;
}
var mQ = Ne;
var Pe = mQ(Object, "create"),
  x = Pe;
function De() {
  this.__data__ = x ? x(null) : {}, this.size = 0;
}
var dt = De;
function Re(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var gt = Re;
var Le = "__lodash_hash_undefined__",
  Me = Object.prototype,
  Ie = Me.hasOwnProperty;
function ke(t) {
  var e = this.__data__;
  if (x) {
    var n = e[t];
    return n === Le ? void 0 : n;
  }
  return Ie.call(e, t) ? e[t] : void 0;
}
var mt = ke;
var $e = Object.prototype,
  je = $e.hasOwnProperty;
function He(t) {
  var e = this.__data__;
  return x ? e[t] !== void 0 : je.call(e, t);
}
var ht = He;
var We = "__lodash_hash_undefined__";
function Ue(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = x && e === void 0 ? We : e, this;
}
var xt = Ue;
function y(t) {
  var e = -1,
    n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
y.prototype.clear = dt;
y.prototype.delete = gt;
y.prototype.get = mt;
y.prototype.has = ht;
y.prototype.set = xt;
var G = y;
function Fe() {
  this.__data__ = [], this.size = 0;
}
var wt = Fe;
function ze(t, e) {
  return t === e || t !== t && e !== e;
}
var Vde = ze;
function Be(t, e) {
  var n = t.length;
  while (n--) if (Vde(t[n][0], e)) return n;
  return -1;
}
var b = Be;
var Ge = Array.prototype,
  Ve = Ge.splice;
function Je(t) {
  var e = this.__data__,
    n = b(e, t);
  if (n < 0) return !1;
  var r = e.length - 1;
  if (n == r) e.pop();else Ve.call(e, n, 1);
  return --this.size, !0;
}
var bt = Je;
function Ke(t) {
  var e = this.__data__,
    n = b(e, t);
  return n < 0 ? void 0 : e[n][1];
}
var _t = Ke;
function Ze(t) {
  return b(this.__data__, t) > -1;
}
var St = Ze;
function Ye(t, e) {
  var n = this.__data__,
    r = b(n, t);
  if (r < 0) ++this.size, n.push([t, e]);else n[r][1] = e;
  return this;
}
var vt = Ye;
function T(t) {
  var e = -1,
    n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
T.prototype.clear = wt;
T.prototype.delete = bt;
T.prototype.get = _t;
T.prototype.has = St;
T.prototype.set = vt;
var $9e = T;
var Xe = mQ(zD, "Map"),
  U9e = Xe;
function qe() {
  this.size = 0, this.__data__ = {
    hash: new G(),
    map: new (U9e || $9e)(),
    string: new G()
  };
}
var yt = qe;
function Qe(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var Tt = Qe;
function tn(t, e) {
  var n = t.__data__;
  return Tt(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
var _ = tn;
function en(t) {
  var e = _(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var At = en;
function nn(t) {
  return _(this, t).get(t);
}
var Ot = nn;
function rn(t) {
  return _(this, t).has(t);
}
var Ct = rn;
function on(t, e) {
  var n = _(this, t),
    r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
var Et = on;
function A(t) {
  var e = -1,
    n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
A.prototype.clear = yt;
A.prototype.delete = At;
A.prototype.get = Ot;
A.prototype.has = Ct;
A.prototype.set = Et;
var tgt = A;
var sn = "Expected a function";
function V(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function") throw TypeError(sn);
  var n = function () {
    var r = arguments,
      o = e ? e.apply(this, r) : r[0],
      i = n.cache;
    if (i.has(o)) return i.get(o);
    var s = t.apply(this, r);
    return n.cache = i.set(o, s) || i, s;
  };
  return n.cache = new (V.Cache || tgt)(), n;
}
V.Cache = tgt;
var $o = V;
function Rt(t, e) {
  return t;
}
var G_e = /[.\s]+$/,
  mKr = /\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i,
  GBo = /~\d/;
function JS(t) {
  let e = t.indexOf("."),
    n = (e === -1 ? t : t.slice(0, e)).replace(/ +$/, "");
  return /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/i.test(n);
}
function VBo(t) {
  return G_e.test(t) || mKr.test(t);
}
function Fjt(t) {
  return /^(?=[^.]{3,8}(?:\.|$))[^.]{1,6}~[0-9]{1,6}(?:\.[^.]{1,3})?$/.test(t);
}
function Lyn(t) {
  return Fjt(t.replace(/\u0307/g, ""));
}
function HBe(t) {
  return Array.from(t, e => {
    let n = e.toUpperCase();
    return [...n].length === 1 ? n : e;
  }).join("").toLowerCase();
}
function B9e(t) {
  let e = HBe(t);
  return e === "users" || e === "documents and settings" || e === "dokumente und einstellungen" || /^do[ck]ume~[0-9]+$/.test(e);
}
function an(t) {
  if (t.length < 3 || !B9e(t[0])) return;
  let e = un.get(t[2]) ?? ln.find(([n]) => n.test(t[2]))?.[1];
  return e === void 0 ? void 0 : [...t.slice(0, 2), ...e, ...t.slice(3)];
}
function h9n(t) {
  return HBe(t).split("/").filter(Boolean);
}
function y9n(t) {
  let e = h9n(t),
    n = an(e);
  return n === void 0 ? [e] : [e, n];
}
function Nyn(t, e) {
  let n = y9n(e);
  return y9n(t).flatMap(item => n.flatMap(o => item.length <= o.length && item.every((item, index) => cn(index, item, o[index])) ? [o.slice(item.length)] : []));
}
var un = new Map([["my documents", ["documents"]], ["application data", ["appdata", "roaming"]], ["local settings", ["appdata", "local"]]]),
  ln = [[/^mydocu~[0-9]+$/, ["documents"]], [/^applic~[0-9]+$/, ["appdata", "roaming"]], [/^locals~[0-9]+$/, ["appdata", "local"]]];
function cn(t, e, n) {
  return gKr(e, n) || t === 0 && B9e(e) && B9e(n);
}
function gKr(t, e) {
  return t === e || Lyn(t) || Lyn(e);
}
import { lstatSync as fn, readFileSync as mo, readlinkSync as nt, realpathSync as Ut, statSync as ho } from "fs";
import { readlink as pn } from "fs/promises";
import { homedir as rt } from "os";
import { basename as Y, dirname as c, isAbsolute as w, join as X, parse as W, relative as q, resolve as p, sep as g } from "path";
import * as tt from "path";
function xn(t) {
  return t;
}
function Dn(t) {
  return /^[\\/]{2}/.test(t) || SH(t);
}
function zh(t) {
  return /(^|[\\/])\.\.([\\/]|$)/.test(t);
}
function Gh(t) {
  return /^[\\/]\?\?[\\/]/.test(t);
}
function Ej(t) {
  if (/^[\\/]{2}[?.][\\/](?!unc[\\/])/i.test(t)) return null;
  return t.match(/^[\\/]{2}(?:[?.][\\/]unc[\\/])?([^\\/]+)/i)?.[1]?.replace(/[A-Z]/g, e => e.toLowerCase()) ?? null;
}
function Ka(t) {
  return /(^|[\\/])\.{1,2}[. ]*([\\/]|$)/.test(t);
}
function Fxe(t) {
  return t.split(/[/\\]/).some(item => /^\.\. [ .]*$/.test(item));
}
function _9n(t, e = "win32") {
  return e === "win32" ? /(^|[\\/])\.{1,2}([\\/]|$)/.test(t) : /(^|\/)\.{1,2}(\/|$)/.test(t);
}
function G$(t) {
  return Ka(t);
}
function oM(t) {
  return /^[\\/]{2}[?.][\\/]/.test(t);
}
function B_(t) {
  if (!/\/\.(?:vol|file|nofollow|resolve)(?:\/|$)/i.test(t)) return !1;
  if (!t.startsWith("/")) return !1;
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if (e.push(n), e.length === 1 && /^\.(?:vol|file|nofollow|resolve)$/i.test(n)) return !0;
  }
  return !1;
}
function b9n(t) {
  return /^[\\/](GLOBAL\?\?|GLOBALROOT|DosDevices|Device)[\\/]/i.test(t);
}
function XY(t, e) {
  if (!Dn(t)) return !1;
  if (oM(t) || SH(t)) return !0;
  if (Ka(t)) return !0;
  let n = Ej(t);
  return n === null || n !== Ej(e);
}
function C(t) {
  return t.length === 2 && HC(t[0]) === "net" || t.length === 3 && HC(t[0]) === "network" && HC(t[1]) === "servers";
}
function JY(t) {
  return null;
}
function O(t) {
  return t.replace(/[A-Z]/g, e => e.toLowerCase());
}
function HC(t) {
  return t.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").toUpperCase().toLowerCase();
}
function Hyn(t, e = "win32") {
  let n = t.split("/");
  if (n[0] !== "") return t;
  let r, o;
  if (e === "darwin" ? C(n.slice(1, 3)) : n[1] === "net" && n.length >= 3) r = "/net/", o = 2;else if (e === "darwin" && C(n.slice(1, 4))) r = "/Network/Servers/", o = 3;else return t;
  let i = n[o];
  if (i === void 0 || i === "") return t;
  let s = n.slice(o + 1);
  return r + O(i).replace(/\.$/, "") + (s.length > 0 ? "/" + s.join("/") : "");
}
function S9n(t) {
  let e = /^([\\/]{2,})([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)\.(?=[\\/]|$)/.exec(t);
  if (e === null || e[2].toLowerCase() === "wsl.localhost") return t;
  return e[1][0].repeat(2) + e[2] + t.slice(e[1].length + e[2].length + 1);
}
function sM(t, e) {
  if (B_(t)) return !0;
  if (Wi(t)) {
    let n = JY(t);
    if (n === null || n !== JY(e)) return !0;
  }
  return w9n(t, e);
}
function _i(t, e) {
  let n = p(e, t);
  if (XY(t, e) || XY(n, e)) return !0;
  let r = JY(e);
  for (let o of [t, n]) {
    if (Wi(o)) {
      let i = JY(o);
      if (i === null || i !== r) return !0;
    }
    if (bH(o) || rS(o) || B_(o) || w9n(o, e)) return !0;
  }
  return !1;
}
function w9n(t, e, n = "win32", r = n === "darwin" && !0) {
  if (n !== "darwin" || !q$(t, n, r)) return !1;
  let o = et(e, n, r).complete[0] ?? null,
    {
      complete: complete,
      partial: partial
    } = et(t, n, r);
  if (complete.length === 0 && partial.length === 0) return !0;
  if (o === null) return !0;
  return complete.some(item => item !== o) || partial.some(item => !o.startsWith(item));
}
var To = Rt({
  value: void 0
}, t => {
  t.value = void 0;
});
var dn = 6;
function et(t, e, n) {
  let complete_2 = [],
    partial_2 = [];
  if (!t.startsWith("/")) return {
    complete: complete_2,
    partial: partial_2
  };
  let i = [];
  for (let s of t.split("/")) {
    if (s === "" || s === ".") continue;
    if (s === "..") {
      i.pop();
      continue;
    }
    if (i.push(s), i.length > dn) continue;
    let a = "/" + i.join("/"),
      u = (e === "darwin" ? K$(a) : a).split("/").filter(item => item !== ""),
      h = u[0]?.toLowerCase();
    if (h === "network") {
      if (u.length === 1) partial_2.push("/network/");else if (u.length === 2) partial_2.push(`/network/${O(u[1])}/`);else if (u.length === 3) complete_2.push(`/network/${O(u[1])}/${O(u[2])}`);
    } else if (n && h === "home" && u.length === 2) complete_2.push(`/home/${u[1]}`);
  }
  return {
    complete: complete_2,
    partial: partial_2
  };
}
function Wi(t) {
  return !1;
}
function V$(t) {
  return !1;
}
function Nd(t) {
  return Dn(t) || Wi(t) || FC(t) || B_(t);
}
function Vg(t) {
  return Wi(t) || FC(t) || rS(t) || B_(t);
}
function Yi(t) {
  return $xe(t) !== null;
}
var Ft = 1024,
  zt = 4096,
  k = new Map(),
  j = new Map();
function $xe(t) {
  if (!t.startsWith("/")) return null;
  if (t.length > zt) return Nt(t);
  let e = k.get(t);
  if (e === void 0) {
    if (e = Nt(t), k.size >= Ft) k.clear();
    k.set(t, e);
  }
  return e;
}
function Nt(t) {
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if (e.push(n), C(e)) return "/" + e.join("/");
  }
  return null;
}
function qBo(t) {
  let e = $xe(t);
  return e === null ? null : e.slice(e.lastIndexOf("/") + 1);
}
var gn = /^([\\/]{2}(?:wsl\.localhost|wsl\$)[\\/]+[^\\/]+)((?:[\\/].*)?)$/i;
function $jt(t) {
  let e = gn.exec(t);
  return e === null ? void 0 : {
    prefix: e[1],
    rest: e[2] ?? ""
  };
}
function rS(t) {
  if (!t.startsWith("/")) return !1;
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    e.push(n);
  }
  return e.length === 1 && e[0].toLowerCase() === "net";
}
function bH(t) {
  if (!t.startsWith("/")) return !1;
  if (t.length > zt) return Pt(t);
  let e = j.get(t);
  if (e === void 0) {
    if (e = Pt(t), j.size >= Ft) j.clear();
    j.set(t, e);
  }
  return e;
}
function Pt(t) {
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue;
    }
    if (e.push(n), e.length === 1 && e[0].toLowerCase() === "network") return !0;
  }
  return !1;
}
function FC(t) {
  return !1;
}
function qg(t) {
  return Yi(t) || rS(t) || bH(t) || B_(t);
}
function j9e(t, e, n = null) {
  let r = QY(t),
    o = QY(e);
  if (!r && !o) return !1;
  if (r && !o) return !0;
  if (!r && o) {
    let u = n === null || Dn(n) ? null : JY(n),
      h = Dn(e) ? null : J(e);
    if (u !== null && h !== null && u === h) return !1;
    if (n !== null && Dn(n) && Dn(e) && !XY(e, n)) return !1;
    return !0;
  }
  let i = Dn(t) ? null : J(t),
    s = Dn(e) ? null : J(e);
  if (i !== null || s !== null) return i === null || s === null || i !== s;
  let a = Ej(t),
    l = Ej(e);
  if (a !== null || l !== null) return a === null || l === null || a !== l;
  return t !== e;
}
function J(t) {
  return bH(t) ? null : JY(t);
}
function q$(t, e = "win32", n = e === "darwin" && !0) {
  if (e !== "darwin") return !1;
  if (bH(t) || B_(t)) return !0;
  if (!t.startsWith("/")) return !1;
  let {
    complete: complete_3,
    partial: partial_3
  } = et(t, e, n);
  if (partial_3.length > 0) return !0;
  if (complete_3.some(item => item.startsWith("/network/"))) return !0;
  let i = complete_3.filter(item => item.startsWith("/home/"));
  if (i.length > 0) {
    let s = mn();
    if (i.some(item => item !== s)) return !0;
  }
  return !1;
}
function mn() {
  let t;
  try {
    t = rt();
  } catch {
    return null;
  }
  let e = /^\/home\/([^/]+)/.exec(K$(t));
  return e ? `/home/${e[1]}` : null;
}
function QY(t) {
  return Ujt(t) || bH(t);
}
function Ujt(t) {
  return ns(t) || Yi(t) || rS(t) || oM(t) || SH(t) || b9n(t) || B_(t);
}
function Bjt(t) {
  let e = t.split("/").filter(Boolean);
  if (e.length === 0) return t;
  let n = e.at(-1);
  return "/" + [...e.slice(0, -1).map(HC), O(n)].join("/");
}
function Uxe(t) {
  if (!t.startsWith("/")) return [];
  let e = [],
    n = [];
  for (let r of t.split("/")) {
    if (r === "" || r === ".") continue;
    if (r === "..") {
      n.pop();
      continue;
    }
    if (n.push(r), C(n)) e.push(Bjt("/" + n.join("/")));
  }
  return e;
}
function kl(t) {
  let e = /^[\\/]{2}wsl(?:\$|\.localhost)[\\/]([^\\/]*)/i.exec(t);
  return e !== null && !/^\.{0,2}[. ]*$/.test(e[1] ?? "");
}
function ns(t) {
  return Dn(t) && !kl(t);
}
function nd(t) {
  if (t === "~" || t.startsWith("~/") || t.startsWith("~\\")) return rt() + t.slice(1);
  return t;
}
function nP(t) {
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (n === "*" || n === "?") return e;
    if (n === "[" && t.indexOf("]", e + 1) !== -1) return e;
  }
  return -1;
}
function iM(t) {
  if (t.startsWith("\\\\?\\UNC\\")) return "\\\\" + t.slice(8);
  if (t.startsWith("\\\\?\\") && t.length >= 7 && t[5] === ":") return t.slice(4);
  return t;
}
function aE(t) {
  if (rP(t)) {
    let e = iM(t).replace(/^([\\/])[\\/]+/, "$1");
    for (let n = 0; n < hn && SH(e); n++) {
      e = Zt(e).replace(/^([\\/])[\\/]+/, "$1");
      let r = 1;
      while (e[r] === "?" && e[r + 1] === "?" && (r + 2 === e.length || Dt(e[r + 2]))) {
        r += 3;
        while (Dt(e[r])) r++;
      }
      e = e.slice(0, 1) + e.slice(r);
    }
    return SH(e) ? e.slice(0, 1) : e;
  }
  return t;
}
var hn = 4;
function Dt(t) {
  return t === "\\" || t === "/";
}
function rP(t) {
  if (/^\\\\\?\\volume\{/i.test(t)) return Lt(t);
  if (SH(t)) return !0;
  let e = iM(t);
  if (e !== t && Lt(e)) return !0;
  return Dn(e) && !kl(e);
}
function Lt(t) {
  return Ka(t) || t.includes("/");
}
function nm(t) {
  try {
    return iM(Ut.native(t));
  } catch {
    return null;
  }
}
var Bt = new Set(["EPERM", "EBUSY", "EACCES"]),
  ot = 4,
  R = 50,
  hKr = R * (ot - 1),
  Mt;
function gQ(t) {
  return C9n(t).real ?? null;
}
function Fyn(t, e) {
  let n = p(e).toLowerCase(),
    r = c(p(t)).toLowerCase();
  if (r === n || It(r, n) || kt(r, n, "lexical")) return !0;
  let o = gQ(e)?.toLowerCase();
  if (o == null) return !1;
  let i = gQ(c(p(t)))?.toLowerCase();
  if (i == null) return !0;
  return i === o || It(i, o) || kt(i, o, "canonical");
}
var wn = new Set(["node_modules", ".venv", "venv", "env", ".env", "virtualenv", ".tox", ".nox", ".direnv", "__pypackages__"]);
function It(t, e) {
  if (!t.startsWith(U(e) + g)) return !1;
  return t.split(g).some(item => wn.has(item));
}
function U(t) {
  return t.endsWith(g) ? t.slice(0, -1) : t;
}
var K;
function kt(t, e, n) {
  let r = rt(),
    o = (process.env.LOCALAPPDATA ?? "").trim();
  if (n === "lexical") return Z($t(r, o, l => p(l).toLowerCase()), t, e);
  let key = r + "\x00" + o;
  if (K?.key === key) return Z(K.aliasDirs, t, e);
  let s = !0,
    aliasDirs = $t(r, o, l => {
      if (!bn(l)) return p(l).toLowerCase();
      let u = gQ(l)?.toLowerCase();
      if (u == null) return s = !1, p(l).toLowerCase();
      return u;
    });
  if (s) K = {
    key: key,
    aliasDirs: aliasDirs
  };
  return Z(aliasDirs, t, e);
}
function $t(t, e, n) {
  let r = [];
  if (t) r.push(U(n(t)) + g + ["appdata", "local", "microsoft", "windowsapps"].join(g));
  if (e) {
    let o = U(n(e)) + g + ["microsoft", "windowsapps"].join(g);
    if (!r.includes(o)) r.push(o);
  }
  return r;
}
function bn(t) {
  return /^[A-Za-z]:[\\/](?![\\/])/.test(t);
}
function Z(t, e, n) {
  let r = U(n);
  for (let o of t) {
    if (!(o === r || o.startsWith(r + g))) continue;
    if (e === o || e.startsWith(o + g)) return !0;
  }
  return !1;
}
var _n = ["usr/local", "usr/libexec/cups", "usr/share/snmp", "AppleInternal", "Applications", "Library", "Users", "Volumes", "cores", "home", "media", "mnt", "opt", "pkg", "private", "sw"];
function K$(t) {
  let e = t.split("/");
  if (e.length < 5 || e[0] !== "" || D(e[1] ?? "") !== "system" || D(e[2] ?? "") !== "volumes" || D(e[3] ?? "") !== "data") return t;
  let n = e.slice(4);
  for (let r of _n) {
    let o = r.split("/");
    if (n.length < o.length) continue;
    if (o.every((item, index) => D(n[index] ?? "") === D(item))) return "/" + n.join("/");
  }
  return t;
}
function D(t) {
  return t.toUpperCase().toLowerCase();
}
function U2(t) {
  return Y(c(t)) === "worktrees" && Y(c(c(t))) === ".claude" ? c(c(c(t))) : null;
}
function FBe(t, {
  allowLocalWsl = !1
} = {}) {
  let n = i => allowLocalWsl && $yn(i);
  if (n(t)) return !1;
  if (uA(t)) return !0;
  let r = AK(t);
  if (!w(r) || /^[\\/](?![\\/])/.test(r)) return !0;
  if (Bxe(r, {
    allowLocalWsl: allowLocalWsl
  })) return !0;
  let o = p(r);
  for (;;) {
    let i = C9n(o);
    if (i.real !== void 0) return uA(i.real) && !n(i.real);
    if (i.code !== "ENOENT" && i.code !== "ENOTDIR") return !0;
    let s = c(o);
    if (s === o) return !1;
    o = s;
  }
}
function $yn(t) {
  let e = AK(t);
  return kl(e) && !Ka(e);
}
function W9e(t) {
  return t.replace(/^([\\/]{2})wsl\$(?=[\\/])/i, "$1wsl.localhost");
}
var Sn = /^\/mnt\/[a-z](?:\/|$)/i;
function v9n(t, e, n = "") {
  if (!t.startsWith("/") || Sn.test(t) || _9n(t, "linux")) return;
  let r = n === "" ? t : t.startsWith(n + "/") ? t.slice(n.length) : void 0;
  return r === void 0 ? void 0 : e.replace(/[\\/]+$/, "") + r.replace(/\//g, "\\");
}
function k9n(t, {
  exactDots = !1
} = {}) {
  if (exactDots ? _9n(t, "linux") : Ka(t)) return;
  let n = /^\/mnt\/([A-Za-z])\/+(.+)$/.exec(t);
  if (!n) return;
  let r = n[2].replace(/\/+$/, "").replace(/\//g, "\\");
  return r === "" || Kt(r) ? void 0 : `${n[1].toUpperCase()}:\\${r}`;
}
function E9n(t, {
  exactDots: exactDots_2 = !1
} = {}) {
  let n = AK(t);
  return;
}
function KBo(t) {
  return uA(t) && !$yn(t);
}
function uA(t) {
  let e = AK(t);
  return Tn(e) || qg(e) || b9n(e);
}
function T9n(t, {
  allowLocalWsl: allowLocalWsl_2 = !1
} = {}) {
  let n = AK(t);
  if (!w(n)) return !0;
  let {
    root: root
  } = W(n);
  return v(root, S(n.slice(root.length)), 0, allowLocalWsl_2);
}
function ngt(trustedRoot, e) {
  return v(trustedRoot, S(e), 0, !1, {
    trustedStart: !0,
    trustedRoot: trustedRoot
  });
}
function Uyn(t, trustedRoot_2 = c(t)) {
  let n = L(() => nt(t));
  if (n.value === void 0) return n.code !== "ENOENT" && n.code !== "EINVAL";
  let r = n.value;
  if (Gt(r)) return !0;
  let o = /^[\\/](?![\\/])/.test(r);
  if (o && Ka(r)) return !0;
  let i = o ? X(W(trustedRoot_2).root, r) : r,
    s = {
      trustedStart: !0,
      trustedRoot: trustedRoot_2
    };
  if (w(i)) {
    let u = q(trustedRoot_2, i);
    if (!Ka(i) && u !== "" && !Ht(u) && !w(u)) return v(trustedRoot_2, S(u), 1, !1, s);
    return uA(i) || Bxe(i);
  }
  if (uA(i)) return !0;
  let a = q(trustedRoot_2, c(t)),
    l = !Ht(a) && !w(a);
  return v(l ? trustedRoot_2 : c(t), [...(l ? S(a) : []), ...S(i)], 1, !1, s);
}
function Bxe(t, e = {}) {
  return T9n(t, e) || Ka(t) && T9n(p(t), e);
}
var jt = 40;
function S(t) {
  return t.split(/[\\/]+/).filter(Boolean);
}
function H(t, e) {
  return uA(t) && !(e && $yn(t));
}
function Ht(t) {
  return t === ".." || /^\.\.[\\/]/.test(t);
}
function Gt(t) {
  return /^[A-Za-z]:(?![\\/])/.test(t);
}
function v(t, e, n, r, {
  trustedStart = !1,
  trustedRoot: trustedRoot_3 = t
} = {}) {
  let s = trustedRoot_3.endsWith(g) ? trustedRoot_3 : trustedRoot_3 + g,
    a = u => trustedStart && (u === trustedRoot_3 || u.startsWith(s)),
    l = t;
  if (!a(l) && H(l, r)) return !0;
  for (let u = 0; u < e.length; u++) {
    let h = e[u];
    if (h === ".") continue;
    if (h === "..") {
      l = c(l);
      continue;
    }
    let m = X(l, h);
    if (!a(m) && H(m, r)) return !0;
    let E = L(() => fn(m));
    if (E.value === void 0) {
      if (E.code !== "ENOENT" && E.code !== "ENOTDIR") return !0;
      let f = m;
      for (let N of e.slice(u + 1)) if (f = N === ".." ? c(f) : N === "." ? f : X(f, N), !a(f) && H(f, r)) return !0;
      return !1;
    }
    let M;
    if (E.value.isSymbolicLink()) {
      if (n >= jt) return !0;
      if (M = L(() => nt(m)).value, M === void 0) return !0;
    } else if (E.value.isDirectory()) {
      let f = _Kr(m);
      if (f.kind === "junction") {
        if (n >= jt) return !0;
        M = f.target;
      } else if (f.kind === "directory") {
        l = m;
        continue;
      } else return !0;
    } else {
      l = m;
      continue;
    }
    let d = M;
    if (!(trustedStart && w(d) && !Ka(d) && a(d)) && H(d, r)) return !0;
    let B = e.slice(u + 1);
    if (Gt(d)) return !0;
    if (w(d)) {
      if (trustedStart && !Ka(d) && a(d)) return v(trustedRoot_3, [...S(d.slice(s.length)), ...B], n + 1, r, {
        trustedStart: !0,
        trustedRoot: trustedRoot_3
      });
      let f = W(d).root,
        N = /^[\\/]$/.test(f) ? W(l).root : f;
      return v(N, [...S(d.slice(f.length)), ...B], n + 1, r);
    }
    return v(l, [...S(d), ...B], n + 1, r, {
      trustedStart: a(l),
      trustedRoot: trustedRoot_3
    });
  }
  return !1;
}
function C9n(t) {
  let e = L(() => iM(Ut.native(t)));
  return {
    real: e.value,
    code: e.code
  };
}
function z(t) {
  return t != null && typeof t === "object" && "code" in t && typeof t.code === "string" ? t.code : void 0;
}
function L(t) {
  try {
    return {
      value: vn(t)
    };
  } catch (error) {
    return {
      code: z(error)
    };
  }
}
function vn(t) {
  return Vt(t, () => !0);
}
function yKr(t) {
  let e = 0;
  return n => Vt(n, () => {
    if (e + R > t) return !1;
    return e += R, !0;
  });
}
function Vt(t, e) {
  for (let n = 0;; n++) try {
    return t();
  } catch (error) {
    let o = z(error);
    if (o === void 0 || !1 || !Bt.has(o) || n >= ot - 1 || !e()) throw error;
    Mt ??= new Int32Array(new SharedArrayBuffer(4)), Atomics.wait(Mt, 0, 0, R);
  }
}
function Jt(error_2) {
  let code = z(error_2);
  return code === "EINVAL" ? {
    kind: "directory"
  } : code === "ENOENT" ? {
    kind: "absent"
  } : {
    kind: "error",
    code: code,
    error: error_2
  };
}
function _Kr(t) {
  let e,
    n = L(() => {
      try {
        return nt(t);
      } catch (error) {
        throw e = error, error;
      }
    });
  return n.value !== void 0 ? {
    kind: "junction",
    target: n.value
  } : Jt(e);
}
async function jxe(t) {
  let e,
    n = await yn(async () => {
      try {
        return await pn(t);
      } catch (error) {
        throw e = error, error;
      }
    });
  return n.value !== void 0 ? {
    kind: "junction",
    target: n.value
  } : Jt(e);
}
async function yn(t) {
  for (let e = 0;; e++) try {
    return {
      value: await t()
    };
  } catch (error) {
    let code_2 = z(error);
    if (code_2 === void 0 || !1 || !Bt.has(code_2) || e >= ot - 1) return {
      code: code_2
    };
    await Q(R);
  }
}
function Tn(t) {
  return B2(t) || Yi(t);
}
function Kt(t) {
  return Ka(t) || /[. :](?=[\\/]|$)/.test(t) || t.split(/[\\/]/).some(item => JS(item) || JS(item.slice(0, Math.max(0, item.indexOf(":")))));
}
function AK(t) {
  let e = /^(?:[\\/][\\/][?.][\\/]|[\\/]\?\?[\\/])(?=[A-Za-z]:[\\/])/.exec(t);
  if (!e) return t;
  let n = t.slice(e[0].length),
    r = n.slice(2);
  return e[0].includes("\\") && r.includes("/") || Kt(r) ? t : n;
}
function QS(t, {
  foldCase: foldCase,
  knownNotSuspect = !1
} = {}) {
  if (foldCase ??= !0, t = AK(t), B2(t) || Yi(t)) {
    let a = W9e(p(W9e(t))).normalize("NFC");
    return foldCase ? a.toLowerCase() : a;
  }
  if (!knownNotSuspect && Bxe(w(t) ? t : p(t))) {
    let a = p(t).normalize("NFC");
    return foldCase ? a.toLowerCase() : a;
  }
  let r = p(t),
    o = [],
    i = nm(r);
  while (i === null && c(r) !== r) o.unshift(Y(r)), r = c(r), i = nm(r);
  i = o.length > 0 ? p(i ?? r, ...o) : i ?? r;
  let s = W9e(i).normalize("NFC");
  return foldCase ? s.toLowerCase() : s;
}
function Km(t, e, {
  alreadyComparable = !1,
  foldCase: foldCase_2
} = {}) {
  let o = q(alreadyComparable ? t : QS(t, {
    foldCase: foldCase_2
  }), alreadyComparable ? e : QS(e, {
    foldCase: foldCase_2
  }));
  return o === "" || !w(o) && o !== ".." && !o.startsWith(`..${g}`);
}
function Wxe(t, e) {
  let n = nm(t),
    r = nm(e);
  return n !== null && r !== null && F(n) === F(r);
}
function bKr(t, e) {
  let n = nm(t),
    r = nm(e);
  return n !== null && r !== null && An(F(n), F(r), /[\\/]/);
}
function An(t, e, n) {
  let regExp = new RegExp(`(?:${n.source})+$`),
    o = t.replace(regExp, "").split(n),
    i = e.replace(regExp, "").split(n);
  return o.length <= i.length && o.every((item, index) => item === i[index]);
}
function F(t) {
  return xn(W9e(t));
}
function B2(t) {
  return Dn(t);
}
function SH(t) {
  return Wt.test(t) || t.includes("??") && Wt.test(Zt(t));
}
var Wt = /^[\\/]\?\?[\\/]/;
function Zt(t) {
  return tt.win32 ? tt.win32.normalize(t) : t;
}
export { Vde, $9e, g9n, zD, z$, fQ, Vw, egt, NBe, mQ, U9e, tgt, $o, Rt, G_e, mKr, GBo, JS, VBo, Fjt, Lyn, HBe, B9e, h9n, y9n, Nyn, gKr, xn, Dn, zh, Gh, Ej, Ka, Fxe, _9n, G$, oM, B_, b9n, XY, JY, HC, Hyn, S9n, sM, _i, w9n, Wi, V$, Nd, Vg, Yi, $xe, qBo, $jt, rS, bH, FC, qg, j9e, q$, QY, Ujt, Bjt, Uxe, kl, ns, nd, nP, iM, aE, rP, nm, hKr, gQ, Fyn, K$, U2, FBe, $yn, W9e, v9n, k9n, E9n, KBo, uA, T9n, ngt, Uyn, Bxe, C9n, yKr, _Kr, jxe, AK, QS, Km, Wxe, bKr, B2, SH };