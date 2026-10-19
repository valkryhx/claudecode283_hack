// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { R, Ue } from "B:/~BUN/root/chunk-ef0msk7r.js";
var d = R(function (V, W) {
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var A = Ue("buffer"),
    Buffer = A.Buffer;
  function U(e, r) {
    for (var t in e) r[t] = e[t];
  }
  if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) W.exports = A;else U(A, V), V.Buffer = y;
  function y(e, r, t) {
    return Buffer(e, r, t);
  }
  y.prototype = Object.create(Buffer.prototype);
  U(Buffer, y);
  y.from = function (e, r, t) {
    if (typeof e === "number") throw TypeError("Argument must not be a number");
    return Buffer(e, r, t);
  };
  y.alloc = function alloc(e, r, t) {
    if (typeof e !== "number") throw TypeError("Argument must be a number");
    var n = Buffer(e);
    if (r !== void 0) {
      if (typeof t === "string") n.fill(r, t);else n.fill(r);
    } else n.fill(0);
    return n;
  };
  y.allocUnsafe = function allocUnsafe(e) {
    if (typeof e !== "number") throw TypeError("Argument must be a number");
    return Buffer(e);
  };
  y.allocUnsafeSlow = function allocUnsafeSlow(e) {
    if (typeof e !== "number") throw TypeError("Argument must be a number");
    return A.SlowBuffer(e);
  };
});
var Q = R(function (_r, Z) {
  function K(e) {
    var r = (e / 8 | 0) + (e % 8 === 0 ? 0 : 1);
    return r;
  }
  var Oe = {
    ES256: K(256),
    ES384: K(384),
    ES512: K(521)
  };
  function De(e) {
    var r = Oe[e];
    if (r) return r;
    throw Error('Unknown algorithm "' + e + '"');
  }
  Z.exports = De;
});
var UOo = R(function (Tr, re) {
  var Buffer_2 = d().Buffer,
    Y = Q(),
    _ = 128,
    z = 0,
    Ve = 32,
    Ke = 16,
    Ne = 2,
    k = Ke | Ve | z << 6,
    T = Ne | z << 6;
  function He(e) {
    return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function ee(e) {
    if (Buffer_2.isBuffer(e)) return e;else if (typeof e === "string") return Buffer_2.from(e, "base64");
    throw TypeError("ECDSA signature must be a Base64 string or a Buffer");
  }
  function derToJose(e, r) {
    e = ee(e);
    var t = Y(r),
      n = t + 1,
      a = e.length,
      i = 0;
    if (e[i++] !== k) throw Error('Could not find expected "seq"');
    var u = e[i++];
    if (u === (_ | 1)) u = e[i++];
    if (a - i < u) throw Error('"seq" specified length of "' + u + '", only "' + (a - i) + '" remaining');
    if (e[i++] !== T) throw Error('Could not find expected "int" for "r"');
    var s = e[i++];
    if (a - i - 2 < s) throw Error('"r" specified length of "' + s + '", only "' + (a - i - 2) + '" available');
    if (n < s) throw Error('"r" specified length of "' + s + '", max of "' + n + '" is acceptable');
    var S = i;
    if (i += s, e[i++] !== T) throw Error('Could not find expected "int" for "s"');
    var l = e[i++];
    if (a - i !== l) throw Error('"s" specified length of "' + l + '", expected "' + (a - i) + '"');
    if (n < l) throw Error('"s" specified length of "' + l + '", max of "' + n + '" is acceptable');
    var o = i;
    if (i += l, i !== a) throw Error('Expected to consume entire buffer, but "' + (a - i) + '" bytes remain');
    var f = t - s,
      D = t - l,
      v = Buffer_2.allocUnsafe(f + s + D + l);
    for (i = 0; i < f; ++i) v[i] = 0;
    e.copy(v, i, S + Math.max(-f, 0), S + s), i = t;
    for (var Re = i; i < Re + D; ++i) v[i] = 0;
    return e.copy(v, i, o + Math.max(-D, 0), o + l), v = v.toString("base64"), v = He(v), v;
  }
  function X(e, r, t) {
    var n = 0;
    while (r + n < t && e[r + n] === 0) ++n;
    var a = e[r + n] >= _;
    if (a) --n;
    return n;
  }
  function joseToDer(e, r) {
    e = ee(e);
    var t = Y(r),
      n = e.length;
    if (n !== t * 2) throw TypeError('"' + r + '" signatures must be "' + t * 2 + '" bytes, saw "' + n + '"');
    var a = X(e, 0, t),
      i = X(e, t, e.length),
      u = t - a,
      s = t - i,
      S = 2 + u + 1 + 1 + s,
      l = S < _,
      o = Buffer_2.allocUnsafe((l ? 2 : 3) + S),
      f = 0;
    if (o[f++] = k, l) o[f++] = S;else o[f++] = _ | 1, o[f++] = S & 255;
    if (o[f++] = T, o[f++] = u, a < 0) o[f++] = 0, f += e.copy(o, f, 0, t);else f += e.copy(o, f, a, t);
    if (o[f++] = T, o[f++] = s, i < 0) o[f++] = 0, e.copy(o, f, t);else e.copy(o, f, t + i);
    return o;
  }
  re.exports = {
    derToJose: derToJose,
    joseToDer: joseToDer
  };
});
var N = R(function (Ir, te) {
  var Buffer_3 = d().Buffer,
    Me = Ue("stream"),
    je = Ue("util");
  function x(e) {
    if (this.buffer = null, this.writable = !0, this.readable = !0, !e) return this.buffer = Buffer_3.alloc(0), this;
    if (typeof e.pipe === "function") return this.buffer = Buffer_3.alloc(0), e.pipe(this), this;
    if (e.length || typeof e === "object") return this.buffer = e, this.writable = !1, process.nextTick(function () {
      this.emit("end", e), this.readable = !1, this.emit("close");
    }.bind(this)), this;
    throw TypeError("Unexpected data type (" + typeof e + ")");
  }
  je.inherits(x, Me);
  x.prototype.write = function write(r) {
    this.buffer = Buffer_3.concat([this.buffer, Buffer_3.from(r)]), this.emit("data", r);
  };
  x.prototype.end = function end(r) {
    if (r) this.write(r);
    this.emit("end", r), this.emit("close"), this.writable = !1, this.readable = !1;
  };
  te.exports = x;
});
var ie = R(function (xr, ne) {
  var Buffer_4 = Ue("buffer").Buffer,
    SlowBuffer = Ue("buffer").SlowBuffer;
  ne.exports = P;
  function P(e, r) {
    if (!Buffer_4.isBuffer(e) || !Buffer_4.isBuffer(r)) return !1;
    if (e.length !== r.length) return !1;
    var t = 0;
    for (var n = 0; n < e.length; n++) t |= e[n] ^ r[n];
    return t === 0;
  }
  P.install = function install() {
    Buffer_4.prototype.equal = SlowBuffer.prototype.equal = function equal(r) {
      return P(this, r);
    };
  };
  var equal = Buffer_4.prototype.equal,
    equal_2 = SlowBuffer.prototype.equal;
  P.restore = function restore() {
    Buffer_4.prototype.equal = equal, SlowBuffer.prototype.equal = equal_2;
  };
});
var j = R(function (Pr, pe) {
  var Buffer_5 = d().Buffer,
    c = Ue("crypto"),
    fe = UOo(),
    ae = Ue("util"),
    We = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,
    E = "secret must be a string or buffer",
    m = "key must be a string or a buffer",
    Ze = "key must be a string, a buffer or an object",
    J = typeof c.createPublicKey === "function";
  if (J) m += " or a KeyObject", E += "or a KeyObject";
  function oe(e) {
    if (Buffer_5.isBuffer(e)) return;
    if (typeof e === "string") return;
    if (!J) throw h(m);
    if (typeof e !== "object") throw h(m);
    if (typeof e.type !== "string") throw h(m);
    if (typeof e.asymmetricKeyType !== "string") throw h(m);
    if (typeof e.export !== "function") throw h(m);
  }
  function ue(e) {
    if (Buffer_5.isBuffer(e)) return;
    if (typeof e === "string") return;
    if (typeof e === "object") return;
    throw h(Ze);
  }
  function $e(e) {
    if (Buffer_5.isBuffer(e)) return;
    if (typeof e === "string") return e;
    if (!J) throw h(E);
    if (typeof e !== "object") throw h(E);
    if (e.type !== "secret") throw h(E);
    if (typeof e.export !== "function") throw h(E);
  }
  function M(e) {
    return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function se(e) {
    e = e.toString();
    var r = 4 - e.length % 4;
    if (r !== 4) for (var t = 0; t < r; ++t) e += "=";
    return e.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function h(e) {
    var r = [].slice.call(arguments, 1),
      t = ae.format.bind(ae, e).apply(null, r);
    return TypeError(t);
  }
  function Qe(e) {
    return Buffer_5.isBuffer(e) || typeof e === "string";
  }
  function q(e) {
    if (!Qe(e)) e = JSON.stringify(e);
    return e;
  }
  function hs(e) {
    return function (t, n) {
      $e(n), t = q(t);
      var a = c.createHmac("sha" + e, n),
        i = (a.update(t), a.digest("base64"));
      return M(i);
    };
  }
  var G,
    Xe = "timingSafeEqual" in c ? function (r, t) {
      if (r.byteLength !== t.byteLength) return !1;
      return c.timingSafeEqual(r, t);
    } : function (r, t) {
      if (!G) G = ie();
      return G(r, t);
    };
  function hs_2(e) {
    return function (t, n, a) {
      var i = hs(e)(t, a);
      return Xe(Buffer_5.from(n), Buffer_5.from(i));
    };
  }
  function rs(e) {
    return function (t, n) {
      ue(n), t = q(t);
      var a = c.createSign("RSA-SHA" + e),
        i = (a.update(t), a.sign(n, "base64"));
      return M(i);
    };
  }
  function rs_2(e) {
    return function (t, n, a) {
      oe(a), t = q(t), n = se(n);
      var i = c.createVerify("RSA-SHA" + e);
      return i.update(t), i.verify(a, n, "base64");
    };
  }
  function ps(e) {
    return function (t, key) {
      ue(key), t = q(t);
      var a = c.createSign("RSA-SHA" + e),
        i = (a.update(t), a.sign({
          key: key,
          padding: c.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: c.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
      return M(i);
    };
  }
  function ps_2(e) {
    return function (t, n, key_2) {
      oe(key_2), t = q(t), n = se(n);
      var i = c.createVerify("RSA-SHA" + e);
      return i.update(t), i.verify({
        key: key_2,
        padding: c.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: c.constants.RSA_PSS_SALTLEN_DIGEST
      }, n, "base64");
    };
  }
  function es(e) {
    var r = rs(e);
    return function () {
      var n = r.apply(null, arguments);
      return n = fe.derToJose(n, "ES" + e), n;
    };
  }
  function es_2(e) {
    var r = rs_2(e);
    return function (n, a, i) {
      a = fe.joseToDer(a, "ES" + e).toString("base64");
      var u = r(n, a, i);
      return u;
    };
  }
  function none() {
    return function () {
      return "";
    };
  }
  function none_2() {
    return function (r, t) {
      return t === "";
    };
  }
  pe.exports = function exports(r) {
    var t = {
        hs: hs,
        rs: rs,
        ps: ps,
        es: es,
        none: none
      },
      n = {
        hs: hs_2,
        rs: rs_2,
        ps: ps_2,
        es: es_2,
        none: none_2
      },
      a = r.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
    if (!a) throw h(We, r);
    var i = (a[1] || a[3]).toLowerCase(),
      u = a[2];
    return {
      sign: t[i](u),
      verify: n[i](u)
    };
  };
});
var C = R(function (Lr, ve) {
  var Buffer_6 = Ue("buffer").Buffer;
  ve.exports = function exports(r) {
    if (typeof r === "string") return r;
    if (typeof r === "number" || Buffer_6.isBuffer(r)) return r.toString();
    return JSON.stringify(r);
  };
});
var be = R(function (Rr, ge) {
  var Buffer_7 = d().Buffer,
    Se = N(),
    fr = j(),
    or = Ue("stream"),
    ye = C(),
    F = Ue("util");
  function de(e, r) {
    return Buffer_7.from(e, r).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function ur(e, r, t) {
    t = t || "utf8";
    var n = de(ye(e), "binary"),
      a = de(ye(r), t);
    return F.format("%s.%s", n, a);
  }
  function me(e) {
    var {
        header: header,
        payload: payload
      } = e,
      n = e.secret || e.privateKey,
      encoding = e.encoding,
      i = fr(header.alg),
      u = ur(header, payload, encoding),
      s = i.sign(u, n);
    return F.format("%s.%s", u, s);
  }
  function L(e) {
    var secret = e.secret;
    if (secret = secret == null ? e.privateKey : secret, secret = secret == null ? e.key : secret, /^hs/i.test(e.header.alg) === !0 && secret == null) throw TypeError("secret must be a string or buffer or a KeyObject");
    var t = new Se(secret);
    this.readable = !0, this.header = e.header, this.encoding = e.encoding, this.secret = this.privateKey = this.key = t, this.payload = new Se(e.payload), this.secret.once("close", function () {
      if (!this.payload.writable && this.readable) this.sign();
    }.bind(this)), this.payload.once("close", function () {
      if (!this.secret.writable && this.readable) this.sign();
    }.bind(this));
  }
  F.inherits(L, or);
  L.prototype.sign = function sign() {
    try {
      var r = me({
        header: this.header,
        payload: this.payload.buffer,
        secret: this.secret.buffer,
        encoding: this.encoding
      });
      return this.emit("done", r), this.emit("data", r), this.emit("end"), this.readable = !1, r;
    } catch (error) {
      this.readable = !1, this.emit("error", error), this.emit("close");
    }
  };
  L.sign = me;
  ge.exports = L;
});
var Pe = R(function (Or, xe) {
  var Buffer_8 = d().Buffer,
    we = N(),
    sr = j(),
    cr = Ue("stream"),
    qe = C(),
    lr = Ue("util"),
    hr = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
  function pr(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function vr(e) {
    if (pr(e)) return e;
    try {
      return JSON.parse(e);
    } catch (error) {
      return;
    }
  }
  function Ae(e) {
    var r = e.split(".", 1)[0];
    return vr(Buffer_8.from(r, "base64").toString("binary"));
  }
  function Sr(e) {
    return e.split(".", 2).join(".");
  }
  function Be(e) {
    return e.split(".")[2];
  }
  function yr(e, r) {
    r = r || "utf8";
    var t = e.split(".")[1];
    return Buffer_8.from(t, "base64").toString(r);
  }
  function _e(e) {
    return hr.test(e) && !!Ae(e);
  }
  function Te(e, r, t) {
    if (!r) {
      var n = Error("Missing algorithm parameter for jws.verify");
      throw n.code = "MISSING_ALGORITHM", n;
    }
    e = qe(e);
    var a = Be(e),
      i = Sr(e),
      u = sr(r);
    return u.verify(i, a, t);
  }
  function Ie(e, r) {
    if (r = r || {}, e = qe(e), !_e(e)) return null;
    var header_2 = Ae(e);
    if (!header_2) return null;
    var payload_2 = yr(e);
    if (header_2.typ === "JWT" || r.json) payload_2 = JSON.parse(payload_2, r.encoding);
    return {
      header: header_2,
      payload: payload_2,
      signature: Be(e)
    };
  }
  function b(e) {
    e = e || {};
    var secret_2 = e.secret;
    if (secret_2 = secret_2 == null ? e.publicKey : secret_2, secret_2 = secret_2 == null ? e.key : secret_2, /^hs/i.test(e.algorithm) === !0 && secret_2 == null) throw TypeError("secret must be a string or buffer or a KeyObject");
    var t = new we(secret_2);
    this.readable = !0, this.algorithm = e.algorithm, this.encoding = e.encoding, this.secret = this.publicKey = this.key = t, this.signature = new we(e.signature), this.secret.once("close", function () {
      if (!this.signature.writable && this.readable) this.verify();
    }.bind(this)), this.signature.once("close", function () {
      if (!this.secret.writable && this.readable) this.verify();
    }.bind(this));
  }
  lr.inherits(b, cr);
  b.prototype.verify = function verify() {
    try {
      var r = Te(this.signature.buffer, this.algorithm, this.key.buffer),
        t = Ie(this.signature.buffer, this.encoding);
      return this.emit("done", r, t), this.emit("data", r), this.emit("end"), this.readable = !1, r;
    } catch (error) {
      this.readable = !1, this.emit("error", error), this.emit("close");
    }
  };
  b.decode = Ie;
  b.isValid = _e;
  b.verify = Te;
  xe.exports = b;
});
var rHt = R(function (mr) {
  var Le = be(),
    O = Pe(),
    dr = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"];
  mr.ALGORITHMS = dr;
  mr.sign = Le.sign;
  mr.verify = O.verify;
  mr.decode = O.decode;
  mr.isValid = O.isValid;
  mr.createSign = function createSign(r) {
    return new Le(r);
  };
  mr.createVerify = function createVerify(r) {
    return new O(r);
  };
});
export { UOo, rHt };