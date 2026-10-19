// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Y
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  He
} from "B:/~BUN/root/chunk-8znbjmp4.js";
var ne = typeof global == "object" && global && global.Object === Object && global,
  Vjr = ne;
var re = typeof self == "object" && self && self.Object === Object && self,
  oe = Vjr || re || Function("return this")(),
  l1 = oe;
var ie = l1.Symbol,
  cV = ie;
var ct = Object.prototype,
  {
    hasOwnProperty: se,
    toString: ae
  } = ct,
  R = cV ? cV.toStringTag : void 0;

function ue(t) {
  var e = se.call(t, R),
    n = t[R];
  try {
    t[R] = void 0;
    var r = !0
  } catch (i) {}
  var o = ae.call(t);
  if (r)
    if (e) t[R] = n;
    else delete t[R];
  return o
}
var ft = ue;
var le = Object.prototype,
  ce = le.toString;

function fe(t) {
  return ce.call(t)
}
var pt = fe;
var pe = "[object Null]",
  de = "[object Undefined]",
  dt = cV ? cV.toStringTag : void 0;

function ge(t) {
  if (t == null) return t === void 0 ? de : pe;
  return dt && dt in Object(t) ? ft(t) : pt(t)
}
var Fde = ge;

function me(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function")
}
var lC = me;
var he = "[object AsyncFunction]",
  xe = "[object Function]",
  be = "[object GeneratorFunction]",
  we = "[object Proxy]";

function ye(t) {
  if (!lC(t)) return !1;
  var e = Fde(t);
  return e == xe || e == be || e == he || e == we
}
var rWt = ye;
var _e = l1["__core-js_shared__"],
  j = _e;
var gt = function() {
  var t = /[^.]+$/.exec(j && j.keys && j.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : ""
}();

function Se(t) {
  return !!gt && gt in t
}
var mt = Se;
var ve = Function.prototype,
  Te = ve.toString;

function Ae(t) {
  if (t != null) {
    try {
      return Te.call(t)
    } catch (e) {}
    try {
      return t + ""
    } catch (e) {}
  }
  return ""
}
var met = Ae;
var Oe = /[\\^$.*+?()[\]{}|]/g,
  Ce = /^\[object .+?Constructor\]$/,
  Ee = Function.prototype,
  Ne = Object.prototype,
  Pe = Ee.toString,
  Re = Ne.hasOwnProperty,
  De = RegExp("^" + Pe.call(Re).replace(Oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function ke(t) {
  if (!lC(t) || mt(t)) return !1;
  var e = rWt(t) ? De : Ce;
  return e.test(met(t))
}
var ht = ke;

function Le(t, e) {
  return t == null ? void 0 : t[e]
}
var xt = Le;

function Me(t, e) {
  var n = xt(t, e);
  return ht(n) ? n : void 0
}
var Hde = Me;
var Ie = Hde(l1, "Map"),
  ASt = Ie;

function $e() {
  this.__data__ = [], this.size = 0
}
var bt = $e;

function je(t, e) {
  return t === e || t !== t && e !== e
}
var eCe = je;

function We(t, e) {
  var n = t.length;
  while (n--)
    if (eCe(t[n][0], e)) return n;
  return -1
}
var w = We;
var Ue = Array.prototype,
  ze = Ue.splice;

function Fe(t) {
  var e = this.__data__,
    n = w(e, t);
  if (n < 0) return !1;
  var r = e.length - 1;
  if (n == r) e.pop();
  else ze.call(e, n, 1);
  return --this.size, !0
}
var wt = Fe;

function Be(t) {
  var e = this.__data__,
    n = w(e, t);
  return n < 0 ? void 0 : e[n][1]
}
var yt = Be;

function Ge(t) {
  return w(this.__data__, t) > -1
}
var _t = Ge;

function Je(t, e) {
  var n = this.__data__,
    r = w(n, t);
  if (r < 0) ++this.size, n.push([t, e]);
  else n[r][1] = e;
  return this
}
var St = Je;

function T(t) {
  var e = -1,
    n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1])
  }
}
T.prototype.clear = bt;
T.prototype.delete = wt;
T.prototype.get = yt;
T.prototype.has = _t;
T.prototype.set = St;
var RSt = T;
var Ve = Hde(Object, "create"),
  x = Ve;

function Ke() {
  this.__data__ = x ? x(null) : {}, this.size = 0
}
var vt = Ke;

function Ze(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e
}
var Tt = Ze;
var Ye = "__lodash_hash_undefined__",
  Xe = Object.prototype,
  qe = Xe.hasOwnProperty;

function Qe(t) {
  var e = this.__data__;
  if (x) {
    var n = e[t];
    return n === Ye ? void 0 : n
  }
  return qe.call(e, t) ? e[t] : void 0
}
var At = Qe;
var tn = Object.prototype,
  en = tn.hasOwnProperty;

function nn(t) {
  var e = this.__data__;
  return x ? e[t] !== void 0 : en.call(e, t)
}
var Ot = nn;
var rn = "__lodash_hash_undefined__";

function on(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = x && e === void 0 ? rn : e, this
}
var Ct = on;

function A(t) {
  var e = -1,
    n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1])
  }
}
A.prototype.clear = vt;
A.prototype.delete = Tt;
A.prototype.get = At;
A.prototype.has = Ot;
A.prototype.set = Ct;
var Z = A;

function sn() {
  this.size = 0, this.__data__ = {
    hash: new Z,
    map: new(ASt || RSt),
    string: new Z
  }
}
var Et = sn;

function an(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var Nt = an;

function un(t, e) {
  var n = t.__data__;
  return Nt(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var y = un;

function ln(t) {
  var e = y(this, t).delete(t);
  return this.size -= e ? 1 : 0, e
}
var Pt = ln;

function cn(t) {
  return y(this, t).get(t)
}
var Rt = cn;

function fn(t) {
  return y(this, t).has(t)
}
var Dt = fn;

function pn(t, e) {
  var n = y(this, t),
    r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this
}
var kt = pn;

function O(t) {
  var e = -1,
    n = t == null ? 0 : t.length;
  this.clear();
  while (++e < n) {
    var r = t[e];
    this.set(r[0], r[1])
  }
}
O.prototype.clear = Et;
O.prototype.delete = Pt;
O.prototype.get = Rt;
O.prototype.has = Dt;
O.prototype.set = kt;
var oWt = O;
var dn = "Expected a function";

function X(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function") throw TypeError(dn);
  var n = function() {
    var r = arguments,
      o = e ? e.apply(this, r) : r[0],
      i = n.cache;
    if (i.has(o)) return i.get(o);
    var s = t.apply(this, r);
    return n.cache = i.set(o, s) || i, s
  };
  return n.cache = new(X.Cache || oWt), n
}
X.Cache = oWt;
var eo = X;
class z {
  #t;
  #e = new WeakMap;
  constructor(t) {
    this.#t = t
  }
  of(t) {
    let e = this.#e.get(t);
    if (e !== void 0) return e;
    let n = this.#t();
    return this.#e.set(t, n), n
  }
}
import {
  lstatSync as bn,
  readFileSync as To,
  readlinkSync as st,
  realpath as wn,
  realpathSync as at,
  statSync as Ao
} from "fs";
import {
  readlink as yn
} from "fs/promises";
var jDe = /[.\s]+$/,
  mqo = /\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i,
  sQn = /~\d/;

function Fw(t) {
  let e = t.indexOf("."),
    n = (e === -1 ? t : t.slice(0, e)).replace(/ +$/, "");
  return /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/i.test(n)
}

function iQn(t) {
  return jDe.test(t) || mqo.test(t)
}

function ghn(t) {
  return /^(?=[^.]{3,8}(?:\.|$))[^.]{1,6}~[0-9]{1,6}(?:\.[^.]{1,3})?$/.test(t)
}

function aQn(t) {
  return ghn(t.replace(/\u0307/g, ""))
}

function get(t) {
  return Array.from(t, (e) => {
    let n = e.toUpperCase();
    return [...n].length === 1 ? n : e
  }).join("").toLowerCase()
}

function xSt(t) {
  let e = get(t);
  return e === "users" || e === "documents and settings" || e === "dokumente und einstellungen" || /^do[ck]ume~[0-9]+$/.test(e)
}

function gn(t) {
  if (t.length < 3 || !xSt(t[0])) return;
  let e = mn.get(t[2]) ?? hn.find(([n]) => n.test(t[2]))?.[1];
  return e === void 0 ? void 0 : [...t.slice(0, 2), ...e, ...t.slice(3)]
}

function lQn(t) {
  return get(t).split("/").filter(Boolean)
}

function qjr(t) {
  let e = lQn(t),
    n = gn(e);
  return n === void 0 ? [e] : [e, n]
}

function dQn(t, e) {
  let n = qjr(e);
  return qjr(t).flatMap((r) => n.flatMap((o) => r.length <= o.length && r.every((i, s) => xn(s, i, o[s])) ? [o.slice(r.length)] : []))
}
var mn = new Map([
    ["my documents", ["documents"]],
    ["application data", ["appdata", "roaming"]],
    ["local settings", ["appdata", "local"]]
  ]),
  hn = [
    [/^mydocu~[0-9]+$/, ["documents"]],
    [/^applic~[0-9]+$/, ["appdata", "roaming"]],
    [/^locals~[0-9]+$/, ["appdata", "local"]]
  ];

function xn(t, e, n) {
  return cQn(e, n) || t === 0 && xSt(e) && xSt(n)
}

function cQn(t, e) {
  return t === e || aQn(t) || aQn(e)
}

function WDe(t) {
  let e = /^[\\/]{2}(?:[?.][\\/]([A-Za-z]):|(?:localhost|127\.0\.0\.1)[\\/]([A-Za-z])\$)(?=$|[\\/])/i.exec(t);
  if (e === null) return t;
  let n = t.slice(e[0].length);
  return `${e[1]??e[2]}:${n===""?"\\":n}`
}
import {
  homedir as ut
} from "os";
import {
  basename as et,
  dirname as f,
  isAbsolute as b,
  join as nt,
  parse as k,
  relative as rt,
  resolve as p,
  sep as g
} from "path";
import * as ot from "path";

function $n(t) {
  return t
}

function jn(t) {
  return /^[\\/]{2}/.test(t) || x$(t)
}

function n_(t) {
  return /(^|[\\/])\.\.([\\/]|$)/.test(t)
}

function NA(t) {
  return !1
}

function r_(t) {
  return /^[\\/]\?\?[\\/]/.test(t)
}

function mP(t) {
  if (/^[\\/]{2}[?.][\\/](?!unc[\\/])/i.test(t)) return null;
  return t.match(/^[\\/]{2}(?:[?.][\\/]unc[\\/])?([^\\/]+)/i)?.[1]?.replace(/[A-Z]/g, (e) => e.toLowerCase()) ?? null
}

function ul(t) {
  return /(^|[\\/])\.{1,2}[. ]*([\\/]|$)/.test(t)
}

function QGe(t) {
  return t.split(/[/\\]/).some((e) => /^\.\. [ .]*$/.test(e))
}

function Kjr(t, e = "win32") {
  return e === "win32" ? /(^|[\\/])\.{1,2}([\\/]|$)/.test(t) : /(^|\/)\.{1,2}(\/|$)/.test(t)
}

function C$(t) {
  return ul(t)
}

function dC(t) {
  return /^[\\/]{2}[?.][\\/]/.test(t)
}

function Eb(t) {
  if (!/\/\.(?:vol|file|nofollow|resolve)(?:\/|$)/i.test(t)) return !1;
  if (!t.startsWith("/")) return !1;
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue
    }
    if (e.push(n), e.length === 1 && /^\.(?:vol|file|nofollow|resolve)$/i.test(n)) return !0
  }
  return !1
}

function Yjr(t) {
  return /^[\\/](GLOBAL\?\?|GLOBALROOT|DosDevices|Device)[\\/]/i.test(t)
}

function $de(t, e) {
  if (!jn(t)) return !1;
  if (dC(t) || x$(t)) return !0;
  if (ul(t)) return !0;
  let n = mP(t);
  return n === null || n !== mP(e)
}

function E(t) {
  return t.length === 2 && gP(t[0]) === "net" || t.length === 3 && gP(t[0]) === "network" && gP(t[1]) === "servers"
}

function ure(t) {
  return null
}

function C(t) {
  return t.replace(/[A-Z]/g, (e) => e.toLowerCase())
}

function gP(t) {
  return t.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").toUpperCase().toLowerCase()
}

function uQn(t, e = "win32") {
  let n = t.split("/");
  if (n[0] !== "") return t;
  let r, o;
  if (e === "darwin" ? E(n.slice(1, 3)) : n[1] === "net" && n.length >= 3) r = "/net/", o = 2;
  else if (e === "darwin" && E(n.slice(1, 4))) r = "/Network/Servers/", o = 3;
  else return t;
  let i = n[o];
  if (i === void 0 || i === "") return t;
  let s = n.slice(o + 1);
  return r + C(i).replace(/\.$/, "") + (s.length > 0 ? "/" + s.join("/") : "")
}

function Xjr(t) {
  let e = /^([\\/]{2,})([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)\.(?=[\\/]|$)/.exec(t);
  if (e === null || e[2].toLowerCase() === "wsl.localhost") return t;
  return e[1][0].repeat(2) + e[2] + t.slice(e[1].length + e[2].length + 1)
}

function R$(t, e) {
  if (Eb(t)) return !0;
  if (Na(t)) {
    let n = ure(t);
    if (n === null || n !== ure(e)) return !0
  }
  return Jjr(t, e)
}

function Vi(t, e) {
  let n = p(e, t);
  if ($de(t, e) || $de(n, e)) return !0;
  let r = ure(e);
  for (let o of [t, n]) {
    if (Na(o)) {
      let i = ure(o);
      if (i === null || i !== r) return !0
    }
    if (h0(o) || XS(o) || Eb(o) || Jjr(o, e)) return !0
  }
  return !1
}

function Jjr(t, e, n = "win32", r = n === "darwin" && !0) {
  if (n !== "darwin" || !bL(t, n, r)) return !1;
  let o = it(e, n, r).complete[0] ?? null,
    {
      complete: i,
      partial: s
    } = it(t, n, r);
  if (i.length === 0 && s.length === 0) return !0;
  if (o === null) return !0;
  return i.some((u) => u !== o) || s.some((u) => !o.startsWith(u))
}
var ko = He({
  value: void 0
}, (t) => {
  t.value = void 0
});
var _n = 6;

function it(t, e, n) {
  let r = [],
    o = [];
  if (!t.startsWith("/")) return {
    complete: r,
    partial: o
  };
  let i = [];
  for (let s of t.split("/")) {
    if (s === "" || s === ".") continue;
    if (s === "..") {
      i.pop();
      continue
    }
    if (i.push(s), i.length > _n) continue;
    let u = "/" + i.join("/"),
      a = (e === "darwin" ? A$(u) : u).split("/").filter((h) => h !== ""),
      S = a[0]?.toLowerCase();
    if (S === "network") {
      if (a.length === 1) o.push("/network/");
      else if (a.length === 2) o.push(`/network/${C(a[1])}/`);
      else if (a.length === 3) r.push(`/network/${C(a[1])}/${C(a[2])}`)
    } else if (n && S === "home" && a.length === 2) r.push(`/home/${a[1]}`)
  }
  return {
    complete: r,
    partial: o
  }
}

function Na(t) {
  return !1
}

function uV(t) {
  return !1
}

function Ja(t) {
  return jn(t) || Na(t) || kI(t) || Eb(t)
}

function zh(t) {
  return Na(t) || kI(t) || XS(t) || Eb(t)
}

function pl(t) {
  return ZGe(t) !== null
}
var Gt = 1024,
  Jt = 4096,
  W = new Map,
  U = new Map;

function ZGe(t) {
  if (!t.startsWith("/")) return null;
  if (t.length > Jt) return Lt(t);
  let e = W.get(t);
  if (e === void 0) {
    if (e = Lt(t), W.size >= Gt) W.clear();
    W.set(t, e)
  }
  return e
}

function Lt(t) {
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue
    }
    if (e.push(n), E(e)) return "/" + e.join("/")
  }
  return null
}

function y3s(t) {
  let e = ZGe(t);
  return e === null ? null : e.slice(e.lastIndexOf("/") + 1)
}
var Sn = /^([\\/]{2}(?:wsl\.localhost|wsl\$)[\\/]+[^\\/]+)((?:[\\/].*)?)$/i;

function sWt(t) {
  let e = Sn.exec(t);
  return e === null ? void 0 : {
    prefix: e[1],
    rest: e[2] ?? ""
  }
}

function XS(t) {
  if (!t.startsWith("/")) return !1;
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue
    }
    e.push(n)
  }
  return e.length === 1 && e[0].toLowerCase() === "net"
}

function h0(t) {
  if (!t.startsWith("/")) return !1;
  if (t.length > Jt) return Mt(t);
  let e = U.get(t);
  if (e === void 0) {
    if (e = Mt(t), U.size >= Gt) U.clear();
    U.set(t, e)
  }
  return e
}

function Mt(t) {
  let e = [];
  for (let n of t.split("/")) {
    if (n === "" || n === ".") continue;
    if (n === "..") {
      e.pop();
      continue
    }
    if (e.push(n), e.length === 1 && e[0].toLowerCase() === "network") return !0
  }
  return !1
}

function kI(t) {
  return !1
}

function Ry(t) {
  return pl(t) || XS(t) || h0(t) || Eb(t)
}

function PSt(t, e, n = null) {
  let r = pre(t),
    o = pre(e);
  if (!r && !o) return !1;
  if (r && !o) return !0;
  if (!r && o) {
    let a = n === null || jn(n) ? null : ure(n),
      S = jn(e) ? null : q(e);
    if (a !== null && S !== null && a === S) return !1;
    if (n !== null && jn(n) && jn(e) && !$de(e, n)) return !1;
    return !0
  }
  let i = jn(t) ? null : q(t),
    s = jn(e) ? null : q(e);
  if (i !== null || s !== null) return i === null || s === null || i !== s;
  let u = mP(t),
    l = mP(e);
  if (u !== null || l !== null) return u === null || l === null || u !== l;
  return t !== e
}

function q(t) {
  return h0(t) ? null : ure(t)
}

function bL(t, e = "win32", n = e === "darwin" && !0) {
  if (e !== "darwin") return !1;
  if (h0(t) || Eb(t)) return !0;
  if (!t.startsWith("/")) return !1;
  let {
    complete: r,
    partial: o
  } = it(t, e, n);
  if (o.length > 0) return !0;
  if (r.some((s) => s.startsWith("/network/"))) return !0;
  let i = r.filter((s) => s.startsWith("/home/"));
  if (i.length > 0) {
    let s = vn();
    if (i.some((u) => u !== s)) return !0
  }
  return !1
}

function vn() {
  let t;
  try {
    t = ut()
  } catch {
    return null
  }
  let e = /^\/home\/([^/]+)/.exec(A$(t));
  return e ? `/home/${e[1]}` : null
}

function pre(t) {
  return hhn(t) || h0(t)
}

function hhn(t) {
  return Ds(t) || pl(t) || XS(t) || dC(t) || x$(t) || Yjr(t) || Eb(t)
}

function yhn(t) {
  let e = t.split("/").filter(Boolean);
  if (e.length === 0) return t;
  let n = e.at(-1);
  return "/" + [...e.slice(0, -1).map(gP), C(n)].join("/")
}

function het(t) {
  if (!t.startsWith("/")) return [];
  let e = [],
    n = [];
  for (let r of t.split("/")) {
    if (r === "" || r === ".") continue;
    if (r === "..") {
      n.pop();
      continue
    }
    if (n.push(r), E(n)) e.push(yhn("/" + n.join("/")))
  }
  return e
}

function Qa(t) {
  let e = /^[\\/]{2}wsl(?:\$|\.localhost)[\\/]([^\\/]*)/i.exec(t);
  return e !== null && !/^\.{0,2}[. ]*$/.test(e[1] ?? "")
}

function Ds(t) {
  return jn(t) && !Qa(t)
}

function nu(t) {
  if (Vt(t)) return ut() + t.slice(1);
  return t
}

function _hn(t, e) {
  if (Vt(t)) return e + t.slice(1);
  return t
}

function Vt(t) {
  return t === "~" || t.startsWith("~/") || t.startsWith("~\\")
}

function y0(t) {
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (n === "*" || n === "?") return e;
    if (n === "[" && t.indexOf("]", e + 1) !== -1) return e
  }
  return -1
}

function uT(t) {
  if (t.startsWith("\\\\?\\UNC\\")) return "\\\\" + t.slice(8);
  if (t.startsWith("\\\\?\\") && t.length >= 7 && t[5] === ":") return t.slice(4);
  return t
}

function FA(t) {
  if (SL(t)) {
    let e = uT(t).replace(/^([\\/])[\\/]+/, "$1");
    for (let n = 0; n < Tn && x$(e); n++) {
      e = Qt(e).replace(/^([\\/])[\\/]+/, "$1");
      let r = 1;
      while (e[r] === "?" && e[r + 1] === "?" && (r + 2 === e.length || Ht(e[r + 2]))) {
        r += 3;
        while (Ht(e[r])) r++
      }
      e = e.slice(0, 1) + e.slice(r)
    }
    return x$(e) ? e.slice(0, 1) : e
  }
  return t
}
var Tn = 4;

function Ht(t) {
  return t === "\\" || t === "/"
}

function SL(t) {
  if (/^\\\\\?\\volume\{/i.test(t)) return It(t);
  if (x$(t)) return !0;
  let e = uT(t);
  if (e !== t && It(e)) return !0;
  return jn(e) && !Qa(e)
}

function It(t) {
  return ul(t) || t.includes("/")
}

function rf(t) {
  try {
    return uT(at.native(t))
  } catch {
    return null
  }
}
async function _3s(t) {
  return new Promise((e) => {
    try {
      wn.native(t, (n, r) => {
        e(n ? null : uT(r))
      })
    } catch {
      e(null)
    }
  })
}

function b3s(t) {
  try {
    return at(t)
  } catch {
    return null
  }
}
var Kt = new Set(["EPERM", "EBUSY", "EACCES"]),
  lt = 4,
  L = 50,
  Qjr = L * (lt - 1),
  $t;

function $Q(t) {
  return e2e(t).real ?? null
}

function pQn(t, e) {
  let n = p(e).toLowerCase(),
    r = f(p(t)).toLowerCase();
  if (r === n || jt(r, n) || Wt(r, n, "lexical")) return !0;
  let o = $Q(e)?.toLowerCase();
  if (o == null) return !1;
  let i = $Q(f(p(t)))?.toLowerCase();
  if (i == null) return !0;
  return i === o || jt(i, o) || Wt(i, o, "canonical")
}
var An = new Set(["node_modules", ".venv", "venv", "env", ".env", "virtualenv", ".tox", ".nox", ".direnv", "__pypackages__"]);

function jt(t, e) {
  if (!t.startsWith(B(e) + g)) return !1;
  return t.split(g).some((n) => An.has(n))
}

function B(t) {
  return t.endsWith(g) ? t.slice(0, -1) : t
}
var Q;

function Wt(t, e, n) {
  let r = ut(),
    o = (process.env.LOCALAPPDATA ?? "").trim();
  if (n === "lexical") return tt(Ut(r, o, (l) => p(l).toLowerCase()), t, e);
  let i = r + "\x00" + o;
  if (Q?.key === i) return tt(Q.aliasDirs, t, e);
  let s = !0,
    u = Ut(r, o, (l) => {
      if (!On(l)) return p(l).toLowerCase();
      let a = $Q(l)?.toLowerCase();
      if (a == null) return s = !1, p(l).toLowerCase();
      return a
    });
  if (s) Q = {
    key: i,
    aliasDirs: u
  };
  return tt(u, t, e)
}

function Ut(t, e, n) {
  let r = [];
  if (t) r.push(B(n(t)) + g + ["appdata", "local", "microsoft", "windowsapps"].join(g));
  if (e) {
    let o = B(n(e)) + g + ["microsoft", "windowsapps"].join(g);
    if (!r.includes(o)) r.push(o)
  }
  return r
}

function On(t) {
  return /^[A-Za-z]:[\\/](?![\\/])/.test(t)
}

function tt(t, e, n) {
  let r = B(n);
  for (let o of t) {
    if (!(o === r || o.startsWith(r + g))) continue;
    if (e === o || e.startsWith(o + g)) return !0
  }
  return !1
}
var Cn = ["usr/local", "usr/libexec/cups", "usr/share/snmp", "AppleInternal", "Applications", "Library", "Users", "Volumes", "cores", "home", "media", "mnt", "opt", "pkg", "private", "sw"];

function A$(t) {
  let e = t.split("/");
  if (e.length < 5 || e[0] !== "" || D(e[1] ?? "") !== "system" || D(e[2] ?? "") !== "volumes" || D(e[3] ?? "") !== "data") return t;
  let n = e.slice(4);
  for (let r of Cn) {
    let o = r.split("/");
    if (n.length < o.length) continue;
    if (o.every((i, s) => D(n[s] ?? "") === D(i))) return "/" + n.join("/")
  }
  return t
}

function D(t) {
  return t.toUpperCase().toLowerCase()
}

function pV(t) {
  return et(f(t)) === "worktrees" && et(f(f(t))) === ".claude" ? f(f(f(t))) : null
}

function fV(t, {
  allowLocalWsl: e = !1
} = {}) {
  let n = (i) => e && bhn(i);
  if (n(t)) return !1;
  if (Sv(t)) return !0;
  let r = UQ(t);
  if (!b(r) || /^[\\/](?![\\/])/.test(r)) return !0;
  if (tCe(r, {
      allowLocalWsl: e
    })) return !0;
  let o = p(r);
  for (;;) {
    let i = e2e(o);
    if (i.real !== void 0) return Sv(i.real) && !n(i.real);
    if (i.code !== "ENOENT" && i.code !== "ENOTDIR") return !0;
    let s = f(o);
    if (s === o) return !1;
    o = s
  }
}

function bhn(t) {
  let e = UQ(t);
  return Qa(e) && !ul(e)
}

function OSt(t) {
  return t.replace(/^([\\/]{2})wsl\$(?=[\\/])/i, "$1wsl.localhost")
}
var En = /^\/mnt\/[a-z](?:\/|$)/i;

function fQn(t, e, n = "") {
  if (!t.startsWith("/") || En.test(t) || Kjr(t, "linux")) return;
  let r = n === "" ? t : t.startsWith(n + "/") ? t.slice(n.length) : void 0;
  return r === void 0 ? void 0 : e.replace(/[\\/]+$/, "") + r.replace(/\//g, "\\")
}

function mQn(t, {
  exactDots: e = !1
} = {}) {
  if (e ? Kjr(t, "linux") : ul(t)) return;
  let n = /^\/mnt\/([A-Za-z])\/+(.+)$/.exec(t);
  if (!n) return;
  let r = n[2].replace(/\/+$/, "").replace(/\//g, "\\");
  return r === "" || qt(r) ? void 0 : `${n[1].toUpperCase()}:\\${r}`
}

function gQn(t, {
  exactDots: e = !1
} = {}) {
  let n = UQ(t);
  return
}

function S3s(t) {
  return Sv(t) && !bhn(t)
}

function Sv(t) {
  let e = UQ(t);
  return hqo(e) || Ry(e) || Yjr(e)
}

function Zjr(t, {
  allowLocalWsl: e = !1,
  eisdirIsFolder: n = !1
} = {}) {
  let r = UQ(t);
  if (!b(r)) return !0;
  let {
    root: o
  } = k(r);
  return v(o, _(r.slice(o.length)), 0, e, {
    eisdirIsFolder: n
  })
}

function iWt(t, e) {
  return v(t, _(e), 0, !1, {
    trustedStart: !0,
    trustedRoot: t
  })
}

function hQn(t, e = f(t)) {
  let n = M(() => st(t));
  if (n.value === void 0) return n.code !== "ENOENT" && n.code !== "EINVAL";
  let r = n.value;
  if (Zt(r)) return !0;
  let o = /^[\\/](?![\\/])/.test(r);
  if (o && ul(r)) return !0;
  let i = o ? nt(k(e).root, r) : r,
    s = {
      trustedStart: !0,
      trustedRoot: e
    };
  if (b(i)) {
    let a = rt(e, i);
    if (!ul(i) && a !== "" && !Ft(a) && !b(a)) return v(e, _(a), 1, !1, s);
    return Sv(i) || tCe(i)
  }
  if (Sv(i)) return !0;
  let u = rt(e, f(t)),
    l = !Ft(u) && !b(u);
  return v(l ? e : f(t), [...l ? _(u) : [], ..._(i)], 1, !1, s)
}

function tCe(t, e = {}) {
  return Zjr(t, e) || ul(t) && Zjr(p(t), e)
}
var zt = 40;

function Nn(t) {
  let e = $Q(t);
  return e !== null && !hP(e)
}

function _(t) {
  return t.split(/[\\/]+/).filter(Boolean)
}

function F(t, e) {
  return Sv(t) && !(e && bhn(t))
}

function Ft(t) {
  return t === ".." || /^\.\.[\\/]/.test(t)
}

function Zt(t) {
  return /^[A-Za-z]:(?![\\/])/.test(t)
}

function v(t, e, n, r, {
  trustedStart: o = !1,
  trustedRoot: i = t,
  eisdirIsFolder: s = !1
} = {}) {
  let u = i.endsWith(g) ? i : i + g,
    l = (h) => o && (h === i || h.startsWith(u)),
    a = t;
  if (!l(a) && F(a, r)) return !0;
  let S;
  for (let h = 0; h < e.length; h++) {
    let V = e[h];
    if (V === ".") continue;
    if (V === "..") {
      a = f(a);
      continue
    }
    let m = nt(a, V);
    if (!l(m) && F(m, r)) return !0;
    let N = M(() => bn(m));
    if (N.value === void 0) {
      if (N.code !== "ENOENT" && N.code !== "ENOTDIR") return !0;
      let c = m;
      for (let P of e.slice(h + 1))
        if (c = P === ".." ? f(c) : P === "." ? c : nt(c, P), !l(c) && F(c, r)) return !0;
      return !1
    }
    let I;
    if (N.value.isSymbolicLink()) {
      if (n >= zt) return !0;
      if (I = M(() => st(m)).value, I === void 0) return !0
    } else if (N.value.isDirectory()) {
      let c = gqo(m);
      if (c.kind === "junction") {
        if (n >= zt) return !0;
        I = c.target
      } else if (c.kind === "directory") {
        a = m;
        continue
      } else if (s && c.kind === "error" && c.code === "EISDIR" && !bhn(m) && (S ??= Nn(k(m).root))) {
        a = m;
        continue
      } else return !0
    } else {
      a = m;
      continue
    }
    let d = I;
    if (!(o && b(d) && !ul(d) && l(d)) && F(d, r)) return !0;
    let K = e.slice(h + 1);
    if (Zt(d)) return !0;
    if (b(d)) {
      if (o && !ul(d) && l(d)) return v(i, [..._(d.slice(u.length)), ...K], n + 1, r, {
        trustedStart: !0,
        trustedRoot: i,
        eisdirIsFolder: s
      });
      let c = k(d).root,
        P = /^[\\/]$/.test(c) ? k(a).root : c;
      return v(P, [..._(d.slice(c.length)), ...K], n + 1, r, {
        eisdirIsFolder: s
      })
    }
    return v(a, [..._(d), ...K], n + 1, r, {
      trustedStart: l(a),
      trustedRoot: i,
      eisdirIsFolder: s
    })
  }
  return !1
}

function e2e(t) {
  let e = M(() => uT(at.native(t)));
  return {
    real: e.value,
    code: e.code
  }
}

function J(t) {
  return t != null && typeof t === "object" && "code" in t && typeof t.code === "string" ? t.code : void 0
}

function M(t) {
  try {
    return {
      value: Pn(t)
    }
  } catch (e) {
    return {
      code: J(e)
    }
  }
}

function Pn(t) {
  return Yt(t, () => !0)
}

function eWr(t) {
  let e = 0;
  return (n) => Yt(n, () => {
    if (e + L > t) return !1;
    return e += L, !0
  })
}

function Yt(t, e) {
  for (let n = 0;; n++) try {
    return t()
  } catch (r) {
    let o = J(r);
    if (o === void 0 || !1 || !Kt.has(o) || n >= lt - 1 || !e()) throw r;
    $t ??= new Int32Array(new SharedArrayBuffer(4)), Atomics.wait($t, 0, 0, L)
  }
}

function Xt(t) {
  let e = J(t);
  return e === "EINVAL" ? {
    kind: "directory"
  } : e === "ENOENT" ? {
    kind: "absent"
  } : {
    kind: "error",
    code: e,
    error: t
  }
}

function gqo(t) {
  let e, n = M(() => {
    try {
      return st(t)
    } catch (r) {
      throw e = r, r
    }
  });
  return n.value !== void 0 ? {
    kind: "junction",
    target: n.value
  } : Xt(e)
}
async function fre(t) {
  let e, n = await Rn(async () => {
    try {
      return await yn(t)
    } catch (r) {
      throw e = r, r
    }
  });
  return n.value !== void 0 ? {
    kind: "junction",
    target: n.value
  } : Xt(e)
}
async function Rn(t) {
  for (let e = 0;; e++) try {
    return {
      value: await t()
    }
  } catch (n) {
    let r = J(n);
    if (r === void 0 || !1 || !Kt.has(r) || e >= lt - 1) return {
      code: r
    };
    await Y(L)
  }
}

function hqo(t) {
  return hP(t) || pl(t)
}

function qt(t) {
  return ul(t) || /[. :](?=[\\/]|$)/.test(t) || t.split(/[\\/]/).some((e) => Fw(e) || Fw(e.slice(0, Math.max(0, e.indexOf(":")))))
}

function UQ(t) {
  let e = /^(?:[\\/][\\/][?.][\\/]|[\\/]\?\?[\\/])(?=[A-Za-z]:[\\/])/.exec(t);
  if (!e) return t;
  let n = t.slice(e[0].length),
    r = n.slice(2);
  return e[0].includes("\\") && r.includes("/") || qt(r) ? t : n
}

function uS(t, {
  foldCase: e,
  knownNotSuspect: n = !1
} = {}) {
  if (e ??= !0, t = UQ(t), hP(t) || pl(t)) {
    let u = OSt(p(OSt(t))).normalize("NFC");
    return e ? u.toLowerCase() : u
  }
  if (!n && tCe(b(t) ? t : p(t))) {
    let u = p(t).normalize("NFC");
    return e ? u.toLowerCase() : u
  }
  let r = p(t),
    o = [],
    i = rf(r);
  while (i === null && f(r) !== r) o.unshift(et(r)), r = f(r), i = rf(r);
  i = o.length > 0 ? p(i ?? r, ...o) : i ?? r;
  let s = OSt(i).normalize("NFC");
  return e ? s.toLowerCase() : s
}

function Ym(t, e, {
  alreadyComparable: n = !1,
  foldCase: r
} = {}) {
  let o = rt(n ? t : uS(t, {
    foldCase: r
  }), n ? e : uS(e, {
    foldCase: r
  }));
  return o === "" || !b(o) && o !== ".." && !o.startsWith(`..${g}`)
}

function _ye(t, e) {
  let n = rf(t),
    r = rf(e);
  return n !== null && r !== null && G(n) === G(r)
}

function yqo(t, e) {
  let n = rf(t),
    r = rf(e);
  return n !== null && r !== null && Dn(G(n), G(r), /[\\/]/)
}

function Dn(t, e, n) {
  let r = new RegExp(`(?:${n.source})+$`),
    o = t.replace(r, "").split(n),
    i = e.replace(r, "").split(n);
  return o.length <= i.length && o.every((s, u) => s === i[u])
}

function G(t) {
  return $n(OSt(t))
}

function hP(t) {
  return jn(t)
}

function x$(t) {
  return Bt.test(t) || t.includes("??") && Bt.test(Qt(t))
}
var Bt = /^[\\/]\?\?[\\/]/;

function Qt(t) {
  return ot.win32 ? ot.win32.normalize(t) : t
}
var H = {
  isDiskless: () => !1,
  reports: () => ({
    asksLeft: 0
  })
};

function w3s(t) {
  H = t
}

function BQ() {
  return H.isDiskless()
}
var v3s = new z(() => ({
  asksLeft: 0
}));

function mre(t) {
  try {
    if (!H.isDiskless()) return;
    let e = H.reports();
    if (e.asksLeft > 0) e.asksLeft -= 1, new ee(t, "answered")
  } catch {}
}
var te = "NoConfigHomeError";
class ee extends Error {
  asked;
  outcome;
  name = te;
  constructor(t, e = "refused") {
    super("This session has no config or temp directory.");
    this.asked = t;
    this.outcome = e;
    try {
      H.reports().reporter?.(this)
    } catch {}
  }
}

function yet(t) {
  try {
    return typeof t === "object" && t !== null && "name" in t && t.name === te
  } catch {
    return !1
  }
}
export {
  eCe,
  RSt,
  Vjr,
  l1,
  cV,
  Fde,
  lC,
  rWt,
  met,
  Hde,
  ASt,
  oWt,
  z,
  eo,
  jDe,
  mqo,
  sQn,
  Fw,
  iQn,
  ghn,
  aQn,
  get,
  xSt,
  lQn,
  qjr,
  dQn,
  cQn,
  WDe,
  $n,
  jn,
  n_,
  NA,
  r_,
  mP,
  ul,
  QGe,
  Kjr,
  C$,
  dC,
  Eb,
  Yjr,
  $de,
  ure,
  gP,
  uQn,
  Xjr,
  R$,
  Vi,
  Jjr,
  Na,
  uV,
  Ja,
  zh,
  pl,
  ZGe,
  y3s,
  sWt,
  XS,
  h0,
  kI,
  Ry,
  PSt,
  bL,
  pre,
  hhn,
  yhn,
  het,
  Qa,
  Ds,
  nu,
  _hn,
  y0,
  uT,
  FA,
  SL,
  rf,
  _3s,
  b3s,
  Qjr,
  $Q,
  pQn,
  A$,
  pV,
  fV,
  bhn,
  OSt,
  fQn,
  mQn,
  gQn,
  S3s,
  Sv,
  Zjr,
  iWt,
  hQn,
  tCe,
  e2e,
  eWr,
  gqo,
  fre,
  hqo,
  UQ,
  uS,
  Ym,
  _ye,
  yqo,
  hP,
  x$,
  w3s,
  BQ,
  v3s,
  mre,
  yet
};
