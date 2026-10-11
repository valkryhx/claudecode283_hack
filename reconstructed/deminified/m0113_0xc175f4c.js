// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { y, bn } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { qde, rgt, Wn, Ot, _u, Np, Y$, ogt, z9e, V_e, G9e, q_e, V9e, q9e, K9e, Y9e, l, v, jjt, xK } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { uK } from "B:/~BUN/root/chunk-zksmb712.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { b, J, ce, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Ri } from "B:/~BUN/root/chunk-vpejnsp4.js";
import { cAe, Uw, kJ, DN, NUr, cY, Dx } from "B:/~BUN/root/chunk-2d028bdz.js";
import { jm } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { I$t, zfn, A3n, G0, O$t, x3n, Ppt } from "B:/~BUN/root/chunk-cwzv7tgb.js";
import { d$o as grant_type, u$o as grant_type_2, OYn, Nft, p$o, f$o, xUe, m$o, MYn, DYn, FJ, Hft, u_e, fc } from "B:/~BUN/root/chunk-g1mh72ry.js";
import { be, k } from "B:/~BUN/root/chunk-yv67t8hr.js";
var Bo = k(function ($o) {
  Object.defineProperty($o, "__esModule", {
    value: !0
  });
  $o.timingSafeEqual = void 0;
  function Ho(e, r = "") {
    if (!e) throw Error(r);
  }
  function ja(e, r) {
    if (e.byteLength !== r.byteLength) return !1;
    if (!(e instanceof DataView)) e = new DataView(ArrayBuffer.isView(e) ? e.buffer : e);
    if (!(r instanceof DataView)) r = new DataView(ArrayBuffer.isView(r) ? r.buffer : r);
    Ho(e instanceof DataView), Ho(r instanceof DataView);
    let byteLength = e.byteLength,
      s = 0,
      o = -1;
    while (++o < byteLength) s |= e.getUint8(o) ^ r.getUint8(o);
    return s === 0;
  }
  $o.timingSafeEqual = ja;
});
var qo = k(function (oe) {
  var qa = oe && oe.__extends || function () {
    var e = function (r, n) {
      return e = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (s, o) {
        s.__proto__ = o;
      } || function (s, o) {
        for (var i in o) if (o.hasOwnProperty(i)) s[i] = o[i];
      }, e(r, n);
    };
    return function (r, n) {
      e(r, n);
      function s() {
        this.constructor = r;
      }
      r.prototype = n === null ? Object.create(n) : (s.prototype = n.prototype, new s());
    };
  }();
  Object.defineProperty(oe, "__esModule", {
    value: !0
  });
  var V = 256,
    as = function () {
      function e(r) {
        if (r === void 0) r = "=";
        this._paddingCharacter = r;
      }
      return e.prototype.encodedLength = function encodedLength(r) {
        if (!this._paddingCharacter) return (r * 8 + 5) / 6 | 0;
        return (r + 2) / 3 * 4 | 0;
      }, e.prototype.encode = function encode(r) {
        var n = "",
          s = 0;
        for (; s < r.length - 2; s += 3) {
          var o = r[s] << 16 | r[s + 1] << 8 | r[s + 2];
          n += this._encodeByte(o >>> 18 & 63), n += this._encodeByte(o >>> 12 & 63), n += this._encodeByte(o >>> 6 & 63), n += this._encodeByte(o >>> 0 & 63);
        }
        var i = r.length - s;
        if (i > 0) {
          var o = r[s] << 16 | (i === 2 ? r[s + 1] << 8 : 0);
          if (n += this._encodeByte(o >>> 18 & 63), n += this._encodeByte(o >>> 12 & 63), i === 2) n += this._encodeByte(o >>> 6 & 63);else n += this._paddingCharacter || "";
          n += this._paddingCharacter || "";
        }
        return n;
      }, e.prototype.maxDecodedLength = function maxDecodedLength(r) {
        if (!this._paddingCharacter) return (r * 6 + 7) / 8 | 0;
        return r / 4 * 3 | 0;
      }, e.prototype.decodedLength = function decodedLength(r) {
        return this.maxDecodedLength(r.length - this._getPaddingLength(r));
      }, e.prototype.decode = function decode(r) {
        if (r.length === 0) return new Uint8Array(0);
        var n = this._getPaddingLength(r),
          s = r.length - n,
          uint8Array = new Uint8Array(this.maxDecodedLength(s)),
          i = 0,
          c = 0,
          a = 0,
          d = 0,
          S = 0,
          E = 0,
          h = 0;
        for (; c < s - 4; c += 4) d = this._decodeChar(r.charCodeAt(c + 0)), S = this._decodeChar(r.charCodeAt(c + 1)), E = this._decodeChar(r.charCodeAt(c + 2)), h = this._decodeChar(r.charCodeAt(c + 3)), uint8Array[i++] = d << 2 | S >>> 4, uint8Array[i++] = S << 4 | E >>> 2, uint8Array[i++] = E << 6 | h, a |= d & V, a |= S & V, a |= E & V, a |= h & V;
        if (c < s - 1) d = this._decodeChar(r.charCodeAt(c)), S = this._decodeChar(r.charCodeAt(c + 1)), uint8Array[i++] = d << 2 | S >>> 4, a |= d & V, a |= S & V;
        if (c < s - 2) E = this._decodeChar(r.charCodeAt(c + 2)), uint8Array[i++] = S << 4 | E >>> 2, a |= E & V;
        if (c < s - 3) h = this._decodeChar(r.charCodeAt(c + 3)), uint8Array[i++] = E << 6 | h, a |= h & V;
        if (a !== 0) throw Error("Base64Coder: incorrect characters for decoding");
        return uint8Array;
      }, e.prototype._encodeByte = function _encodeByte(r) {
        var n = r;
        return n += 65, n += 25 - r >>> 8 & 6, n += 51 - r >>> 8 & -75, n += 61 - r >>> 8 & -15, n += 62 - r >>> 8 & 3, String.fromCharCode(n);
      }, e.prototype._decodeChar = function _decodeChar(r) {
        var n = V;
        return n += (42 - r & r - 44) >>> 8 & -V + r - 43 + 62, n += (46 - r & r - 48) >>> 8 & -V + r - 47 + 63, n += (47 - r & r - 58) >>> 8 & -V + r - 48 + 52, n += (64 - r & r - 91) >>> 8 & -V + r - 65 + 0, n += (96 - r & r - 123) >>> 8 & -V + r - 97 + 26, n;
      }, e.prototype._getPaddingLength = function _getPaddingLength(r) {
        var n = 0;
        if (this._paddingCharacter) {
          for (var s = r.length - 1; s >= 0; s--) {
            if (r[s] !== this._paddingCharacter) break;
            n++;
          }
          if (r.length < 4 || n > 2) throw Error("Base64Coder: incorrect padding");
        }
        return n;
      }, e;
    }();
  oe.Coder = as;
  var Vt = new as();
  function Ka(e) {
    return Vt.encode(e);
  }
  oe.encode = Ka;
  function Va(e) {
    return Vt.decode(e);
  }
  oe.decode = Va;
  var Wo = function (e) {
    qa(r, e);
    function r() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return r.prototype._encodeByte = function _encodeByte(n) {
      var s = n;
      return s += 65, s += 25 - n >>> 8 & 6, s += 51 - n >>> 8 & -75, s += 61 - n >>> 8 & -13, s += 62 - n >>> 8 & 49, String.fromCharCode(s);
    }, r.prototype._decodeChar = function _decodeChar(n) {
      var s = V;
      return s += (44 - n & n - 46) >>> 8 & -V + n - 45 + 62, s += (94 - n & n - 96) >>> 8 & -V + n - 95 + 63, s += (47 - n & n - 58) >>> 8 & -V + n - 48 + 52, s += (64 - n & n - 91) >>> 8 & -V + n - 65 + 0, s += (96 - n & n - 123) >>> 8 & -V + n - 97 + 26, s;
    }, r;
  }(as);
  oe.URLSafeCoder = Wo;
  var jo = new Wo();
  function Ja(e) {
    return jo.encode(e);
  }
  oe.encodeURLSafe = Ja;
  function Ga(e) {
    return jo.decode(e);
  }
  oe.decodeURLSafe = Ga;
  oe.encodedLength = function encodedLength(e) {
    return Vt.encodedLength(e);
  };
  oe.maxDecodedLength = function maxDecodedLength(e) {
    return Vt.maxDecodedLength(e);
  };
  oe.decodedLength = function decodedLength(e) {
    return Vt.decodedLength(e);
  };
});
var Vo = k(function (Ko, Xr) {
  (function (e, r) {
    var n = {};
    r(n);
    var s = n.default;
    for (var o in n) s[o] = n[o];
    if (typeof Xr === "object" && typeof Xr.exports === "object") Xr.exports = s;else if (typeof define === "function" && define.amd) define(function () {
      return s;
    });else e.sha256 = s;
  })(Ko, function (e) {
    e.__esModule = !0, e.digestLength = 32, e.blockSize = 64;
    var uint32Array = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    function n(h, f, w, A, C) {
      var I, P, x, M, N, D, G, F, K, L, W, le, Ue;
      while (C >= 64) {
        I = f[0], P = f[1], x = f[2], M = f[3], N = f[4], D = f[5], G = f[6], F = f[7];
        for (L = 0; L < 16; L++) W = A + L * 4, h[L] = (w[W] & 255) << 24 | (w[W + 1] & 255) << 16 | (w[W + 2] & 255) << 8 | w[W + 3] & 255;
        for (L = 16; L < 64; L++) K = h[L - 2], le = (K >>> 17 | K << 15) ^ (K >>> 19 | K << 13) ^ K >>> 10, K = h[L - 15], Ue = (K >>> 7 | K << 25) ^ (K >>> 18 | K << 14) ^ K >>> 3, h[L] = (le + h[L - 7] | 0) + (Ue + h[L - 16] | 0);
        for (L = 0; L < 64; L++) le = (((N >>> 6 | N << 26) ^ (N >>> 11 | N << 21) ^ (N >>> 25 | N << 7)) + (N & D ^ ~N & G) | 0) + (F + (uint32Array[L] + h[L] | 0) | 0) | 0, Ue = ((I >>> 2 | I << 30) ^ (I >>> 13 | I << 19) ^ (I >>> 22 | I << 10)) + (I & P ^ I & x ^ P & x) | 0, F = G, G = D, D = N, N = M + le | 0, M = x, x = P, P = I, I = le + Ue | 0;
        f[0] += I, f[1] += P, f[2] += x, f[3] += M, f[4] += N, f[5] += D, f[6] += G, f[7] += F, A += 64, C -= 64;
      }
      return A;
    }
    var s = function () {
      function h() {
        this.digestLength = e.digestLength, this.blockSize = e.blockSize, this.state = new Int32Array(8), this.temp = new Int32Array(64), this.buffer = new Uint8Array(128), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1, this.reset();
      }
      return h.prototype.reset = function reset() {
        return this.state[0] = 1779033703, this.state[1] = 3144134277, this.state[2] = 1013904242, this.state[3] = 2773480762, this.state[4] = 1359893119, this.state[5] = 2600822924, this.state[6] = 528734635, this.state[7] = 1541459225, this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1, this;
      }, h.prototype.clean = function clean() {
        for (var f = 0; f < this.buffer.length; f++) this.buffer[f] = 0;
        for (var f = 0; f < this.temp.length; f++) this.temp[f] = 0;
        this.reset();
      }, h.prototype.update = function update(f, w) {
        if (w === void 0) w = f.length;
        if (this.finished) throw Error("SHA256: can't update because hash was finished.");
        var A = 0;
        if (this.bytesHashed += w, this.bufferLength > 0) {
          while (this.bufferLength < 64 && w > 0) this.buffer[this.bufferLength++] = f[A++], w--;
          if (this.bufferLength === 64) n(this.temp, this.state, this.buffer, 0, 64), this.bufferLength = 0;
        }
        if (w >= 64) A = n(this.temp, this.state, f, A, w), w %= 64;
        while (w > 0) this.buffer[this.bufferLength++] = f[A++], w--;
        return this;
      }, h.prototype.finish = function finish(f) {
        if (!this.finished) {
          var bytesHashed = this.bytesHashed,
            bufferLength = this.bufferLength,
            C = bytesHashed / 536870912 | 0,
            I = bytesHashed << 3,
            P = bytesHashed % 64 < 56 ? 64 : 128;
          this.buffer[bufferLength] = 128;
          for (var x = bufferLength + 1; x < P - 8; x++) this.buffer[x] = 0;
          this.buffer[P - 8] = C >>> 24 & 255, this.buffer[P - 7] = C >>> 16 & 255, this.buffer[P - 6] = C >>> 8 & 255, this.buffer[P - 5] = C >>> 0 & 255, this.buffer[P - 4] = I >>> 24 & 255, this.buffer[P - 3] = I >>> 16 & 255, this.buffer[P - 2] = I >>> 8 & 255, this.buffer[P - 1] = I >>> 0 & 255, n(this.temp, this.state, this.buffer, 0, P), this.finished = !0;
        }
        for (var x = 0; x < 8; x++) f[x * 4 + 0] = this.state[x] >>> 24 & 255, f[x * 4 + 1] = this.state[x] >>> 16 & 255, f[x * 4 + 2] = this.state[x] >>> 8 & 255, f[x * 4 + 3] = this.state[x] >>> 0 & 255;
        return this;
      }, h.prototype.digest = function digest() {
        var uint8Array_2 = new Uint8Array(this.digestLength);
        return this.finish(uint8Array_2), uint8Array_2;
      }, h.prototype._saveState = function _saveState(f) {
        for (var w = 0; w < this.state.length; w++) f[w] = this.state[w];
      }, h.prototype._restoreState = function _restoreState(f, w) {
        for (var A = 0; A < this.state.length; A++) this.state[A] = f[A];
        this.bytesHashed = w, this.finished = !1, this.bufferLength = 0;
      }, h;
    }();
    e.Hash = s;
    var o = function () {
      function h(f) {
        this.inner = new s(), this.outer = new s(), this.blockSize = this.inner.blockSize, this.digestLength = this.inner.digestLength;
        var uint8Array_3 = new Uint8Array(this.blockSize);
        if (f.length > this.blockSize) new s().update(f).finish(uint8Array_3).clean();else for (var A = 0; A < f.length; A++) uint8Array_3[A] = f[A];
        for (var A = 0; A < uint8Array_3.length; A++) uint8Array_3[A] ^= 54;
        this.inner.update(uint8Array_3);
        for (var A = 0; A < uint8Array_3.length; A++) uint8Array_3[A] ^= 106;
        this.outer.update(uint8Array_3), this.istate = new Uint32Array(8), this.ostate = new Uint32Array(8), this.inner._saveState(this.istate), this.outer._saveState(this.ostate);
        for (var A = 0; A < uint8Array_3.length; A++) uint8Array_3[A] = 0;
      }
      return h.prototype.reset = function reset() {
        return this.inner._restoreState(this.istate, this.inner.blockSize), this.outer._restoreState(this.ostate, this.outer.blockSize), this;
      }, h.prototype.clean = function clean() {
        for (var f = 0; f < this.istate.length; f++) this.ostate[f] = this.istate[f] = 0;
        this.inner.clean(), this.outer.clean();
      }, h.prototype.update = function update(f) {
        return this.inner.update(f), this;
      }, h.prototype.finish = function finish(f) {
        if (this.outer.finished) this.outer.finish(f);else this.inner.finish(f), this.outer.update(f, this.digestLength).finish(f);
        return this;
      }, h.prototype.digest = function digest() {
        var uint8Array_4 = new Uint8Array(this.digestLength);
        return this.finish(uint8Array_4), uint8Array_4;
      }, h;
    }();
    e.HMAC = o;
    function i(h) {
      var f = new s().update(h),
        w = f.digest();
      return f.clean(), w;
    }
    e.hash = i, e.default = i;
    function c(h, f) {
      var w = new o(h).update(f),
        A = w.digest();
      return w.clean(), A;
    }
    e.hmac = c;
    function a(h, f, w, A) {
      var C = A[0];
      if (C === 0) throw Error("hkdf: cannot expand more");
      if (f.reset(), C > 1) f.update(h);
      if (w) f.update(w);
      f.update(A), f.finish(h), A[0]++;
    }
    var uint8Array_5 = new Uint8Array(e.digestLength);
    function S(h, f, w, A) {
      if (f === void 0) f = uint8Array_5;
      if (A === void 0) A = 32;
      var uint8Array_6 = new Uint8Array([1]),
        I = c(f, h),
        P = new o(I),
        uint8Array_7 = new Uint8Array(P.digestLength),
        M = uint8Array_7.length,
        uint8Array_8 = new Uint8Array(A);
      for (var D = 0; D < A; D++) {
        if (M === uint8Array_7.length) a(uint8Array_7, P, w, uint8Array_6), M = 0;
        uint8Array_8[D] = uint8Array_7[M++];
      }
      return P.clean(), uint8Array_7.fill(0), uint8Array_6.fill(0), uint8Array_8;
    }
    e.hkdf = S;
    function E(h, f, w, A) {
      var C = new o(h),
        digestLength = C.digestLength,
        uint8Array_9 = new Uint8Array(4),
        uint8Array_10 = new Uint8Array(digestLength),
        uint8Array_11 = new Uint8Array(digestLength),
        uint8Array_12 = new Uint8Array(A);
      for (var D = 0; D * digestLength < A; D++) {
        var G = D + 1;
        uint8Array_9[0] = G >>> 24 & 255, uint8Array_9[1] = G >>> 16 & 255, uint8Array_9[2] = G >>> 8 & 255, uint8Array_9[3] = G >>> 0 & 255, C.reset(), C.update(f), C.update(uint8Array_9), C.finish(uint8Array_11);
        for (var F = 0; F < digestLength; F++) uint8Array_10[F] = uint8Array_11[F];
        for (var F = 2; F <= w; F++) {
          C.reset(), C.update(uint8Array_11).finish(uint8Array_11);
          for (var K = 0; K < digestLength; K++) uint8Array_10[K] ^= uint8Array_11[K];
        }
        for (var F = 0; F < digestLength && D * digestLength + F < A; F++) uint8Array_12[D * digestLength + F] = uint8Array_10[F];
      }
      for (var D = 0; D < digestLength; D++) uint8Array_10[D] = uint8Array_11[D] = 0;
      for (var D = 0; D < 4; D++) uint8Array_9[D] = 0;
      return C.clean(), uint8Array_12;
    }
    e.pbkdf2 = E;
  });
});
var Qo = k(function (Yo) {
  Object.defineProperty(Yo, "__esModule", {
    value: !0
  });
  Yo.Webhook = Yo.WebhookVerificationError = void 0;
  var Go = Bo(),
    Qr = qo(),
    zo = Vo(),
    Jo = 300;
  class ExtendableError extends Error {
    constructor(e) {
      super(e);
      Object.setPrototypeOf(this, ExtendableError.prototype), this.name = "ExtendableError", this.stack = Error(e).stack;
    }
  }
  class WebhookVerificationError extends ExtendableError {
    constructor(e) {
      super(e);
      Object.setPrototypeOf(this, WebhookVerificationError.prototype), this.name = "WebhookVerificationError";
    }
  }
  Yo.WebhookVerificationError = WebhookVerificationError;
  class Jt {
    constructor(e, r) {
      if (!e) throw Error("Secret can't be empty.");
      if ((r === null || r === void 0 ? void 0 : r.format) === "raw") {
        if (e instanceof Uint8Array) this.key = e;else this.key = Uint8Array.from(e, n => n.charCodeAt(0));
      } else {
        if (typeof e !== "string") throw Error("Expected secret to be of type string");
        if (e.startsWith(Jt.prefix)) e = e.substring(Jt.prefix.length);
        this.key = Qr.decode(e);
      }
    }
    verify(e, r) {
      let n = {};
      for (let h of Object.keys(r)) n[h.toLowerCase()] = r[h];
      let s = n["webhook-id"],
        o = n["webhook-signature"],
        i = n["webhook-timestamp"];
      if (!o || !s || !i) throw new WebhookVerificationError("Missing required headers");
      let c = this.verifyTimestamp(i),
        d = this.sign(s, c, e).split(",")[1],
        S = o.split(" "),
        E = new globalThis.TextEncoder();
      for (let h of S) {
        let [f, w] = h.split(",");
        if (f !== "v1") continue;
        if (Go.timingSafeEqual(E.encode(w), E.encode(d))) return JSON.parse(e.toString());
      }
      throw new WebhookVerificationError("No matching signature found");
    }
    sign(e, r, n) {
      if (typeof n === "string") ;else if (n.constructor.name === "Buffer") n = n.toString();else throw Error("Expected payload to be of type string or Buffer.");
      let textEncoder = new TextEncoder(),
        o = Math.floor(r.getTime() / 1000),
        i = textEncoder.encode(`${e}.${o}.${n}`);
      return `v1,${Qr.encode(zo.hmac(this.key, i))}`;
    }
    verifyTimestamp(e) {
      let r = Math.floor(Date.now() / 1000),
        n = parseInt(e, 10);
      if (isNaN(n)) throw new WebhookVerificationError("Invalid Signature Headers");
      if (r - n > Jo) throw new WebhookVerificationError("Message timestamp too old");
      if (n > r + Jo) throw new WebhookVerificationError("Message timestamp too new");
      return new Date(n * 1000);
    }
  }
  Yo.Webhook = Jt;
  Jt.prefix = "whsec_";
});
import { existsSync as ea, readFileSync as ta } from "fs";
import { homedir as ra } from "os";
import { join as Ws } from "path";
var vl = Symbol("secureStorage.READ_FAILED");
import { AsyncLocalStorage as $i } from "async_hooks";
import { join as Ui } from "path";
var On = new $i(),
  Fs = Promise.resolve();
async function _Wr(e) {
  if (On.getStore()) return e();
  let r = Fs,
    n = Promise.withResolvers();
  Fs = n.promise;
  try {
    await r;
    let s = Uw();
    await ce().mkdir(s);
    let o = await Ri(Ui(s, ".storage-write"), {
      realpath: !1,
      retries: {
        retries: 10,
        minTimeout: 100,
        maxTimeout: 1000
      },
      stale: 15000,
      onCompromised: i => t(`[secureStorage] write lock compromised: ${l(i)}`, {
        level: "warn"
      })
    });
    try {
      return await On.run(!0, e);
    } finally {
      await o().catch(i => t(`[secureStorage] write lock release failed: ${l(i)}`, {
        level: "warn"
      }));
    }
  } finally {
    n.resolve();
  }
}
async function c$o(e) {
  return On.run(!0, e);
}
function Be(e, r, n) {
  return _Wr(async () => {
    e.invalidateCache?.();
    let s = await (e.readAsyncStrict?.(n, {
      inaccessibleAs: "failureIfTransient"
    }) ?? e.readAsync(n));
    if (s === vl) return p("secure_storage_credentials_write", "read_failed_skip_write"), {
      success: !1,
      transient: !0
    };
    let o = s ?? {},
      i = r(o);
    return i === o ? {
      success: !0
    } : await e.update(i, n);
  });
}
var Bi = Symbol("secureStorage.fallbackLegs");
function Ls(e, r) {
  let n = r.osGuarded === !0 ? o => o : Wi,
    s = {
      name: `${e.name}-with-${r.name}-fallback`,
      [Bi]: [e, r],
      osGuarded: e.osGuarded === !0,
      read(o) {
        let i = e.read(o);
        if (i !== null && i !== void 0) return i;
        return n(r.read(o)) || {};
      },
      async readAsync(o) {
        let i = await e.readAsync();
        if (i !== null && i !== void 0) return i;
        return n(await r.readAsync(o)) || {};
      },
      async readAsyncStrict(o, i) {
        let c = await (e.readAsyncStrict?.(void 0, i) ?? e.readAsync());
        if (c === vl) return vl;
        if (c !== null || i?.inaccessibleAs === "failure") return c;
        let a = await (r.readAsyncStrict?.(o, i) ?? r.readAsync(o));
        return a === vl ? a : n(a) || {};
      },
      invalidateCache() {
        e.invalidateCache?.(), r.invalidateCache?.();
      },
      mutate(o, i) {
        return Be(s, o, i);
      },
      async update(o, i) {
        let c = await e.readAsync(),
          a = await e.update(o);
        if (a.success) {
          if (c === null) await r.delete(i);
          return _("secure_storage_credentials_write"), a;
        }
        if (a.transient) return p("secure_storage_credentials_write", a.keychainLocked ? "keychain_locked_skip_fallback" : "primary_transient_skip_fallback"), a;
        let d = await r.update(o, i);
        if (d.success) {
          if (c !== null) await e.delete();
          return p("secure_storage_credentials_write", "plaintext_fallback_used"), {
            success: !0,
            warning: d.warning
          };
        }
        return m("secure_storage_credentials_write", "primary_and_fallback_failed"), {
          success: !1
        };
      },
      async delete(o) {
        let i = (await r.readAsync(o)) !== null,
          [c, a] = await Promise.all([e.delete(), r.delete(o)]);
        return c || i && a;
      }
    };
  return s;
}
function Wi(e) {
  let r = e?.slackTag;
  if (typeof r !== "object" || r === null || !("lastBinding" in r)) return e;
  let {
    lastBinding: lastBinding,
    ...slackTag
  } = r;
  return {
    ...e,
    slackTag: slackTag
  };
}
var ji = 2000;
var et;
function bWr() {
  if (et !== void 0) return et;
  return et = Promise.resolve(!1), et;
}
import { chmod as qi } from "fs/promises";
import { join as Ki } from "path";
function xe() {
  let storageDir = Uw(),
    r = ".credentials.json";
  return {
    storageDir: storageDir,
    storagePath: Ki(storageDir, ".credentials.json")
  };
}
var warning = "Warning: Storing credentials in plaintext.";
function Vi(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return null;
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return null;
  return vl;
}
function Ji(e, r) {
  return e === "ENOENT" ? null : vl;
}
var Gi = {
  async read() {
    let {
      storagePath: storagePath
    } = xe();
    try {
      let r = await ce().readFile(storagePath, {
        encoding: "utf8"
      });
      return J(r);
    } catch {
      return null;
    }
  },
  async readStrict(e) {
    let {
        storagePath: storagePath_2
      } = xe(),
      n;
    try {
      n = await ce().readFile(storagePath_2, {
        encoding: "utf8"
      });
    } catch (error) {
      return (e ? Ji : Vi)(v(error), "win32");
    }
    try {
      return J(n);
    } catch {
      if (e) return vl;
      return null;
    }
  },
  async write(e) {
    try {
      let {
        storageDir: storageDir_2,
        storagePath: storagePath_3
      } = xe();
      return await ce().mkdir(storageDir_2), await Cn(storagePath_3, b(e), 384), await qi(storagePath_3, 384), {
        success: !0,
        warning: warning
      };
    } catch {
      return {
        success: !1
      };
    } finally {
      if (H()) d_e();
    }
  },
  async remove() {
    let {
      storagePath: storagePath_4
    } = xe();
    try {
      return await ce().unlink(storagePath_4), !0;
    } catch (error) {
      if (v(error) === "ENOENT") return !0;
      return !1;
    } finally {
      if (H()) d_e();
    }
  }
};
function zi(e) {
  switch (e.state) {
    case "present":
      return e.data;
    case "absent":
    case "corrupt":
      return null;
    case "refused-symlink":
    case "read-failed":
      return vl;
    default:
      {
        let r = e;
        return vl;
      }
  }
}
function Yi(e) {
  return {
    async read() {
      let {
          storagePath: storagePath_5
        } = xe(),
        n = tt(),
        generation = n.generation,
        o = await Cr(e.readCredentials(), n);
      return Hs(n, o, storagePath_5, generation), o.state === "present" ? o.data : null;
    },
    async readStrict(r) {
      let {
          storagePath: storagePath_6
        } = xe(),
        s = tt(),
        generation_2 = s.generation,
        i = await Cr(r ? e.readCredentials() : e.readCredentialsStrict(), s);
      if (Hs(s, i, storagePath_6, generation_2), r) return i.state === "present" ? i.data : i.state === "absent" ? null : vl;
      return zi(i);
    },
    async write(r) {
      let {
          storagePath: storagePath_7
        } = xe(),
        s = tt(),
        generation_3 = s.generation,
        i = await Cr(e.writeCredentials(r), s);
      if (i.state === "written" && generation_3 === s.generation) Mr(s, storagePath_7, b(r));else We(s);
      return i.state === "written" ? {
        success: !0,
        warning: warning
      } : {
        success: !1
      };
    },
    async remove() {
      let {
          storagePath: storagePath_8
        } = xe(),
        n = tt(),
        generation_4 = n.generation,
        o = await Cr(e.deleteCredentials(), n);
      if (o.state === "deleted" && generation_4 === n.generation) Mr(n, storagePath_8, null);else We(n);
      return o.state === "deleted";
    }
  };
}
async function Cr(e, r) {
  try {
    return await e;
  } catch (error) {
    throw We(r), error;
  }
}
class $s {
  copy = void 0;
  generation = 0;
}
var Xi = new q(() => new $s());
function tt() {
  return Xi.of(j().host);
}
function Mr(e, storagePath_9, text) {
  e.copy = {
    storagePath: storagePath_9,
    text: text
  }, e.generation++;
}
function Hs(e, r, n, s) {
  if (s !== e.generation) {
    We(e);
    return;
  }
  switch (r.state) {
    case "present":
      Mr(e, n, b(r.data));
      return;
    case "absent":
    case "corrupt":
    case "refused-symlink":
      Mr(e, n, null);
      return;
    case "read-failed":
      We(e);
      return;
    default:
      {
        let o = r;
        We(e);
      }
  }
}
function We(e) {
  e.copy = void 0, e.generation++;
}
function d_e() {
  We(tt());
}
function Or(e) {
  return H() && e !== void 0 ? Yi(e) : Gi;
}
var Nr = {
  name: "plaintext",
  osGuarded: !1,
  read(e) {
    let {
      storagePath: storagePath_10
    } = xe();
    try {
      let n = H() && e?.fromStoreCopy === !0 ? tt().copy : void 0;
      if (n !== void 0 && n.storagePath === storagePath_10) {
        if (n.text === null) return null;
        return JSON.parse(n.text);
      }
      let s = ce().readFileSync(storagePath_10, {
        encoding: "utf8"
      });
      return J(s);
    } catch {
      return null;
    }
  },
  invalidateCache() {
    d_e();
  },
  readAsync(e) {
    return Or(e).read();
  },
  readAsyncStrict(e, r) {
    return Or(e).readStrict(r?.unreadableFileAs === "failure");
  },
  mutate(e, r) {
    return Be(Nr, e, r);
  },
  update(e, r) {
    return Or(r).write(e);
  },
  delete(e) {
    return Or(e).remove();
  }
};
function Dr() {
  let e = globalThis.Bun?.secrets;
  if (e && typeof e.get === "function" && typeof e.set === "function" && typeof e.delete === "function") return e;
  return null;
}
function Fr() {
  return {
    service: kJ(cAe),
    name: DN()
  };
}
var Us = 2000;
function U(e, r) {
  let n;
  return Promise.race([e.finally(() => n !== void 0 && clearTimeout(n)), new Promise((s, o) => {
    n = setTimeout((i, c) => i(Error(`${c} timed out after ${Us}ms`)), Us, o, r).unref();
  })]);
}
class Mn extends Error {}
async function Nn(e, r) {
  let n = await U(e.get(G0(r, "m")), "Bun.secrets.get");
  if (!n) return null;
  try {
    return A3n(JSON.parse(n));
  } catch {
    return null;
  }
}
async function Bs(e, r) {
  let n = await Nn(e, r);
  if (!n) return U(e.get(r), "Bun.secrets.get");
  let s = await Promise.all(Array.from({
      length: n.n
    }, (i, c) => U(e.get(G0(r, c)), "Bun.secrets.get"))),
    o = s.join("");
  if (o.length !== n.l || s.some(item => item == null)) throw Error(`chunked read inconsistent: got ${o.length}B of ${n.l}B across ${n.n} chunks`);
  return Buffer.from(o, "base64").toString("utf8");
}
async function Qi(e, r, value) {
  let s = await Nn(e, r),
    o = Buffer.byteLength(value, "utf8");
  if (o <= I$t) {
    if (await U(e.set({
      ...r,
      value: value
    }), "Bun.secrets.set"), s) await U(e.set({
      ...G0(r, "p"),
      value: String(s.n)
    }), "Bun.secrets.set"), await U(e.delete(G0(r, "m")), "Bun.secrets.delete"), await Promise.allSettled(Array.from({
      length: s.n
    }, (d, S) => U(e.delete(G0(r, S)), "Bun.secrets.delete"))), await U(e.delete(G0(r, "p")), "Bun.secrets.delete").catch(() => {});
    return;
  }
  let i = Buffer.from(value, "utf8").toString("base64"),
    c = Math.ceil(i.length / I$t);
  if (c > zfn) throw new Mn(`SecureStorageData too large for Credential Manager (${o}B; max ~${Math.floor(zfn * I$t * 3 / 4)}B)`);
  await U(e.set({
    ...G0(r, "p"),
    value: String(Math.max(s?.n ?? 0, c))
  }), "Bun.secrets.set"), await Promise.all(Array.from({
    length: c
  }, (d, S) => U(e.set({
    ...G0(r, S),
    value: i.slice(S * I$t, (S + 1) * I$t)
  }), "Bun.secrets.set"))), await U(e.set({
    ...G0(r, "m"),
    value: JSON.stringify({
      n: c,
      l: i.length
    })
  }), "Bun.secrets.set");
  let a = [U(e.delete(r), "Bun.secrets.delete")];
  for (let d = c; d < (s?.n ?? 0); d++) a.push(U(e.delete(G0(r, d)), "Bun.secrets.delete"));
  await Promise.allSettled(a), await U(e.delete(G0(r, "p")), "Bun.secrets.delete").catch(() => {});
}
async function Zi(e, r) {
  let n = await Nn(e, r),
    s = [U(e.delete(r), "Bun.secrets.delete")];
  if (n) {
    for (let d = 0; d < n.n; d++) s.push(U(e.delete(G0(r, d)), "Bun.secrets.delete"));
    s.push(U(e.delete(G0(r, "m")), "Bun.secrets.delete"));
  }
  await Promise.all(s);
  let o = await U(e.get(G0(r, "p")), "Bun.secrets.get").catch(() => null),
    i = o ? Math.min(Math.max(parseInt(o, 10) || 0, 0), zfn) : 0,
    c = n?.n ?? 0,
    a = Math.max(c, i);
  if (a === 0) try {
    while (a < zfn && (await U(e.get(G0(r, a)), "Bun.secrets.get")) !== null) a++;
  } catch {}
  await Promise.allSettled([U(e.delete(G0(r, "m")), "Bun.secrets.delete"), U(e.delete(G0(r, "p")), "Bun.secrets.delete"), ...Array.from({
    length: a - c
  }, (d, S) => U(e.delete(G0(r, c + S)), "Bun.secrets.delete"))]);
}
var Dn = {
  name: "windows-credman",
  osGuarded: !0,
  read() {
    let e = cY();
    if (!O$t()) return null;
    return e.cache.cachedAt !== 0 ? e.cache.data : x3n();
  },
  async readAsync() {
    let e = cY();
    if (!O$t()) return null;
    let r = e.cache;
    if (Date.now() - r.cachedAt < NUr) return r.data;
    if (e.readInFlight) return e.readInFlight;
    let n = Dr();
    if (!n) return null;
    let generation_5 = e.generation,
      o = Bs(n, Fr()).then(i => {
        let data = i ? J(i) : null;
        if (generation_5 === e.generation) e.cache = {
          data: data,
          cachedAt: Date.now()
        }, Ppt(data), e.readInFlight = null;
        return data;
      }).catch(i => {
        if (t(`[windows-credman] load failed: ${l(i)}`, {
          level: "warn"
        }), generation_5 === e.generation) {
          if (r.cachedAt !== 0) e.cache = {
            data: r.data,
            cachedAt: Date.now()
          };
          e.readInFlight = null;
        }
        return r.cachedAt !== 0 ? r.data : x3n();
      });
    return e.readInFlight = o, o;
  },
  async readAsyncStrict(e, r) {
    let n = cY(),
      s = O$t() ? Dr() : null;
    if (!s) return r?.inaccessibleAs === "failure" ? vl : null;
    let generation_6 = n.generation,
      i;
    try {
      i = await Bs(s, Fr());
    } catch (error) {
      return t(`[windows-credman] strict load failed: ${l(error)}`, {
        level: "warn"
      }), vl;
    }
    let c;
    try {
      c = i ? J(i) : null;
    } catch {
      c = null;
    }
    if (generation_6 === n.generation) {
      let data_2 = c ?? n.cache.data;
      if (n.cache = {
        data: data_2,
        cachedAt: Date.now()
      }, data_2 !== null) Ppt(data_2);
    }
    return c;
  },
  invalidateCache() {
    Dx();
  },
  mutate(e) {
    return Be(Dn, e);
  },
  async update(data_3) {
    let r = cY();
    if (!O$t()) return {
      success: !1
    };
    let n = Dr();
    if (!n) return {
      success: !1
    };
    Dx();
    try {
      return await Qi(n, Fr(), b(data_3)), r.cache = {
        data: data_3,
        cachedAt: Date.now()
      }, Ppt(data_3), r.generation++, r.readInFlight = null, {
        success: !0
      };
    } catch (error) {
      if (t(`[windows-credman] store failed: ${l(error)}`, {
        level: "warn"
      }), error instanceof Mn) p("secure_storage_credentials_write", "credman_oversize");
      return {
        success: !1
      };
    }
  },
  async delete() {
    let e = cY();
    Dx(), Ppt(null);
    let r = Dr();
    if (!r) return !1;
    try {
      return await Zi(r, Fr()), e.cache = {
        data: null,
        cachedAt: Date.now()
      }, Ppt(null), e.generation++, e.readInFlight = null, !0;
    } catch (error) {
      return t(`[windows-credman] remove failed: ${l(error)}`, {
        level: "warn"
      }), !1;
    }
  }
};
class qs {
  memo;
  handedIn;
  prime(enabled, r) {
    if (this.memo !== void 0) return;
    this.handedIn = {
      enabled: enabled,
      ...r()
    };
  }
  resolve(e, r) {
    if (this.memo !== void 0) return this.memo;
    try {
      let n = e(),
        handedIn = this.handedIn;
      if (handedIn !== void 0 && handedIn.legacyPath === n.legacyPath && handedIn.configPath === n.configPath) this.memo = handedIn.enabled;else this.memo = r(n);
    } catch {
      this.memo = !1;
    }
    return this.memo;
  }
  reset() {
    this.memo = void 0, this.handedIn = void 0;
  }
}
var na = new q(() => new qs());
function Ks() {
  return na.of(j().host);
}
function Vs() {
  return {
    legacyPath: Ws(Se(), ".config.json"),
    configPath: Ws(process.env.CLAUDE_CONFIG_DIR || ra(), `.claude${uK()}.json`)
  };
}
function IYn() {
  if (process.env.CLAUDE_CODE_FORCE_WINDOWS_CREDMAN === "1") return !0;
  return Ks().resolve(Vs, sa);
}
function sa({
  legacyPath: legacyPath,
  configPath: configPath
}) {
  let n = ea(legacyPath) ? legacyPath : configPath;
  return JSON.parse(ta(n, "utf8")).cachedGrowthBookFeatures?.tengu_windows_credman === !0;
}
function SWr(e) {
  Ks().prime(e, Vs);
}
var js;
function Un() {
  if (js) return js;
  if (IYn()) return Ls(Dn, Nr);
  return Nr;
}
function gr(e, r, n, s, o) {
  if (s === "m") throw TypeError("Private method is not writable");
  if (s === "a" && !o) throw TypeError("Private accessor was defined without a setter");
  if (typeof r === "function" ? e !== r || !o : !r.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
  return s === "a" ? o.call(e, n) : o ? o.value = n : r.set(e, n), n;
}
function He(e, r, n, s) {
  if (n === "a" && !s) throw TypeError("Private accessor was defined without a getter");
  if (typeof r === "function" ? e !== r || !s : !r.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : r.get(e);
}
function pe() {
  return Math.floor(Date.now() / 1000);
}
class Ift {
  constructor(e, r) {
    this.cached = null, this.pendingRefresh = null, this.nextForce = !1, this.lastAdvisoryError = 0, this.provider = e, this.onAdvisoryRefreshError = r;
  }
  async getToken() {
    let nextForce = this.nextForce;
    this.nextForce = !1;
    let cached = this.cached;
    if (nextForce || cached == null) return (await this.refresh(nextForce)).token;
    if (cached.expiresAt == null) return cached.token;
    let n = cached.expiresAt - pe();
    if (n > f$o) return cached.token;
    if (n > xUe) return this.backgroundRefresh(), cached.token;
    return (await this.refresh()).token;
  }
  invalidate() {
    this.cached = null, this.nextForce = !0;
  }
  refresh(e = !1) {
    if (this.pendingRefresh && !e) return this.pendingRefresh;
    return this.doRefresh(e);
  }
  backgroundRefresh() {
    if (this.pendingRefresh) return;
    if (pe() - this.lastAdvisoryError < m$o) return;
    this.doRefresh().catch(e => {
      this.lastAdvisoryError = pe(), this.onAdvisoryRefreshError?.(e);
    });
  }
  doRefresh(e = !1) {
    return this.pendingRefresh = this.provider(e ? {
      forceRefresh: !0
    } : void 0).then(r => (this.cached = r, this.pendingRefresh = null, r), r => {
      throw this.pendingRefresh = null, r;
    }), this.pendingRefresh;
  }
}
var ue = "0.112.1";
var Ys = () => typeof window < "u" && typeof window.document < "u" && typeof navigator < "u";
function oa() {
  if (typeof Deno < "u" && Deno.build != null) return "deno";
  if (typeof EdgeRuntime < "u") return "edge";
  if (Object.prototype.toString.call(typeof globalThis.process < "u" ? globalThis.process : 0) === "[object process]") return "node";
  return "unknown";
}
var ia = () => {
  let e = oa();
  if (e === "deno") return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": ue,
    "X-Stainless-OS": Gs(Deno.build.os),
    "X-Stainless-Arch": Js(Deno.build.arch),
    "X-Stainless-Runtime": "deno",
    "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
  };
  if (typeof EdgeRuntime < "u") return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": ue,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": `other:${EdgeRuntime}`,
    "X-Stainless-Runtime": "edge",
    "X-Stainless-Runtime-Version": globalThis.process.version
  };
  if (e === "node") return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": ue,
    "X-Stainless-OS": Gs(globalThis.process.platform ?? "unknown"),
    "X-Stainless-Arch": Js(globalThis.process.arch ?? "unknown"),
    "X-Stainless-Runtime": "node",
    "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown"
  };
  let r = aa();
  if (r) return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": ue,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": `browser:${r.browser}`,
    "X-Stainless-Runtime-Version": r.version
  };
  return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": ue,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": "unknown",
    "X-Stainless-Runtime-Version": "unknown"
  };
};
function aa() {
  if (typeof navigator > "u" || !navigator) return null;
  let e = [{
    key: "edge",
    pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "ie",
    pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "ie",
    pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "chrome",
    pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "firefox",
    pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "safari",
    pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
  }];
  for (let {
    key: r,
    pattern: pattern
  } of e) {
    let s = pattern.exec(navigator.userAgent);
    if (s) {
      let o = s[1] || 0,
        i = s[2] || 0,
        c = s[3] || 0;
      return {
        browser: r,
        version: `${o}.${i}.${c}`
      };
    }
  }
  return null;
}
var Js = e => {
    if (e === "x32") return "x32";
    if (e === "x86_64" || e === "x64") return "x64";
    if (e === "arm") return "arm";
    if (e === "aarch64" || e === "arm64") return "arm64";
    if (e) return `other:${e}`;
    return "unknown";
  },
  Gs = e => {
    if (e = e.toLowerCase(), e.includes("ios")) return "iOS";
    if (e === "android") return "Android";
    if (e === "darwin") return "MacOS";
    if (e === "win32") return "Windows";
    if (e === "freebsd") return "FreeBSD";
    if (e === "openbsd") return "OpenBSD";
    if (e === "linux") return "Linux";
    if (e) return `Other:${e}`;
    return "Unknown";
  },
  zs,
  Rt = () => zs ?? (zs = ia());
var ca = /^[a-z][a-z0-9+.-]*:/i,
  Xs = e => ca.test(e),
  Z = e => (Z = Array.isArray, Z(e)),
  Fn = Z;
function It(e) {
  if (typeof e !== "object") return {};
  return e ?? {};
}
function Ln(e) {
  if (!e) return !0;
  for (let r in e) return !1;
  return !0;
}
function Qs(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
var Zs = (e, r) => {
  if (typeof r !== "number" || !Number.isInteger(r)) throw new Wn(`${e} must be an integer`);
  if (r < 0) throw new Wn(`${e} must be a positive integer`);
  return r;
};
var vt = e => {
  try {
    return JSON.parse(e);
  } catch (error) {
    return;
  }
};
function ro(e) {
  let r = 0;
  for (let o of e) r += o.length;
  let uint8Array_13 = new Uint8Array(r),
    s = 0;
  for (let o of e) uint8Array_13.set(o, s), s += o.length;
  return uint8Array_13;
}
var eo;
function rt(e) {
  let r;
  return (eo ?? (r = new globalThis.TextEncoder(), eo = r.encode.bind(r)))(e);
}
var to;
function Hn(e) {
  let r;
  return (to ?? (r = new globalThis.TextDecoder(), to = r.decode.bind(r)))(e);
}
var O = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var Tt = "warn",
  Hr = {
    off: 0,
    error: 200,
    warn: 300,
    info: 400,
    debug: 500
  },
  $r = (e, r, n) => {
    if (!e) return;
    if (Qs(Hr, e)) return e;
    n.warn(`${r} was set to ${JSON.stringify(e)}, expected one of ${JSON.stringify(Object.keys(Hr))}`);
    return;
  };
function Pt() {}
function Lr(e, r, n) {
  if (!r || Hr[e] > Hr[n]) return Pt;else return r[e].bind(r);
}
var la = {
    error: Pt,
    warn: Pt,
    info: Pt,
    debug: Pt
  },
  weakMap = new WeakMap();
function Bn(e, r) {
  let n = weakMap.get(e);
  if (n && n[0] === r) return n[1];
  let s = {
    error: Lr("error", e, r),
    warn: Lr("warn", e, r),
    info: Lr("info", e, r),
    debug: Lr("debug", e, r)
  };
  return weakMap.set(e, [r, s]), s;
}
function H_(e) {
  let logger = e.logger,
    n = e.logLevel ?? "off";
  if (!logger) return la;
  return Bn(logger, n);
}
var so, $n;
function oo() {
  let e = O("ANTHROPIC_LOG");
  if (!$n || e !== so) so = e, $n = Bn(console, $r(e, "process.env['ANTHROPIC_LOG']", Bn(console, Tt)) ?? Tt);
  return $n;
}
var ye = e => {
  if (e.options) e.options = {
    ...e.options
  }, delete e.options.headers;
  if (e.headers) e.headers = Object.fromEntries((e.headers instanceof Headers ? [...e.headers] : Object.entries(e.headers)).map(([r, n]) => [r, r.toLowerCase() === "authorization" || r.toLowerCase() === "api-key" || r.toLowerCase() === "x-api-key" || r.toLowerCase() === "cookie" || r.toLowerCase() === "set-cookie" ? "***" : n]));
  if ("retryOfRequestLogID" in e) {
    if (e.retryOfRequestLogID) e.retryOf = e.retryOfRequestLogID;
    delete e.retryOfRequestLogID;
  }
  return e;
};
var nt = function () {
  let {
    crypto: crypto
  } = globalThis;
  if (crypto?.randomUUID) return nt = crypto.randomUUID.bind(crypto), crypto.randomUUID();
  let uint8Array_14 = new Uint8Array(1),
    n = crypto ? () => crypto.getRandomValues(uint8Array_14)[0] : () => Math.random() * 255 & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, s => (+s ^ n() & 15 >> +s / 4).toString(16));
};
var me = (e, r) => new Promise(n => {
  if (r?.aborted) return n();
  let s = () => {
      clearTimeout(o), n();
    },
    o = setTimeout(() => {
      r?.removeEventListener("abort", s), n();
    }, e);
  r?.addEventListener("abort", s, {
    once: !0
  });
});
var format = "RFC3986",
  qn = e => String(e),
  Kn = {
    RFC1738: e => String(e).replace(/%20/g, "+"),
    RFC3986: qn
  },
  io = "RFC1738";
var Ur = (e, r) => (Ur = Object.hasOwn ?? Function.prototype.call.bind(Object.prototype.hasOwnProperty), Ur(e, r)),
  we = (() => {
    let e = [];
    for (let r = 0; r < 256; ++r) e.push("%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase());
    return e;
  })();
var Vn = 1024,
  encoder = (e, r, n, s, o) => {
    if (e.length === 0) return e;
    let i = e;
    if (typeof e === "symbol") i = Symbol.prototype.toString.call(e);else if (typeof e !== "string") i = String(e);
    if (n === "iso-8859-1") return escape(i).replace(/%u[0-9a-f]{4}/gi, function (a) {
      return "%26%23" + parseInt(a.slice(2), 16) + "%3B";
    });
    let c = "";
    for (let a = 0; a < i.length; a += Vn) {
      let d = i.length >= Vn ? i.slice(a, a + Vn) : i,
        S = [];
      for (let E = 0; E < d.length; ++E) {
        let h = d.charCodeAt(E);
        if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === io && (h === 40 || h === 41)) {
          S[S.length] = d.charAt(E);
          continue;
        }
        if (h < 128) {
          S[S.length] = we[h];
          continue;
        }
        if (h < 2048) {
          S[S.length] = we[192 | h >> 6] + we[128 | h & 63];
          continue;
        }
        if (h < 55296 || h >= 57344) {
          S[S.length] = we[224 | h >> 12] + we[128 | h >> 6 & 63] + we[128 | h & 63];
          continue;
        }
        E += 1, h = 65536 + ((h & 1023) << 10 | d.charCodeAt(E) & 1023), S[S.length] = we[240 | h >> 18] + we[128 | h >> 12 & 63] + we[128 | h >> 6 & 63] + we[128 | h & 63];
      }
      c += S.join("");
    }
    return c;
  };
function co(e) {
  if (!e || typeof e !== "object") return !1;
  return !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}
function Jn(e, r) {
  if (Z(e)) {
    let n = [];
    for (let s = 0; s < e.length; s += 1) n.push(r(e[s]));
    return n;
  }
  return r(e);
}
var uo = {
    brackets(e) {
      return String(e) + "[]";
    },
    comma: "comma",
    indices(e, r) {
      return String(e) + "[" + r + "]";
    },
    repeat(e) {
      return String(e);
    }
  },
  fo = function (e, r) {
    Array.prototype.push.apply(e, Z(r) ? r : [r]);
  },
  lo,
  z = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: encoder,
    encodeValuesOnly: !1,
    format: format,
    formatter: qn,
    indices: !1,
    serializeDate(e) {
      return (lo ?? (lo = Function.prototype.call.bind(Date.prototype.toISOString)))(e);
    },
    skipNulls: !1,
    strictNullHandling: !1
  };
function ua(e) {
  return typeof e === "string" || typeof e === "number" || typeof e === "boolean" || typeof e === "symbol" || typeof e === "bigint";
}
var Gn = {};
function ho(e, r, n, s, o, i, c, a, d, S, E, h, f, w, A, C, I, P) {
  let x = e,
    M = P,
    N = 0,
    D = !1;
  while ((M = M.get(Gn)) !== void 0 && !D) {
    let W = M.get(e);
    if (N += 1, typeof W < "u") if (W === N) throw RangeError("Cyclic object value");else D = !0;
    if (typeof M.get(Gn) > "u") N = 0;
  }
  if (typeof S === "function") x = S(r, x);else if (x instanceof Date) x = f?.(x);else if (n === "comma" && Z(x)) x = Jn(x, function (W) {
    if (W instanceof Date) return f?.(W);
    return W;
  });
  if (x === null) {
    if (i) return d && !C ? d(r, z.encoder, I, "key", w) : r;
    x = "";
  }
  if (ua(x) || co(x)) {
    if (d) {
      let W = C ? r : d(r, z.encoder, I, "key", w);
      return [A?.(W) + "=" + A?.(d(x, z.encoder, I, "value", w))];
    }
    return [A?.(r) + "=" + A?.(String(x))];
  }
  let G = [];
  if (typeof x > "u") return G;
  let F;
  if (n === "comma" && Z(x)) {
    if (C && d) x = Jn(x, d);
    F = [{
      value: x.length > 0 ? x.join(",") || null : void 0
    }];
  } else if (Z(S)) F = S;else {
    let W = Object.keys(x);
    F = E ? W.sort(E) : W;
  }
  let K = a ? String(r).replace(/\./g, "%2E") : String(r),
    L = s && Z(x) && x.length === 1 ? K + "[]" : K;
  if (o && Z(x) && x.length === 0) return L + "[]";
  for (let W = 0; W < F.length; ++W) {
    let le = F[W],
      Ue = typeof le === "object" && typeof le.value < "u" ? le.value : x[le];
    if (c && Ue === null) continue;
    let Tn = h && a ? le.replace(/\./g, "%2E") : le,
      Hi = Z(x) ? typeof n === "function" ? n(L, Tn) : L : L + (h ? "." + Tn : "[" + Tn + "]");
    P.set(e, N);
    let weakMap_2 = new WeakMap();
    weakMap_2.set(Gn, P), fo(G, ho(Ue, Hi, n, s, o, i, c, a, n === "comma" && C && Z(x) ? null : d, S, E, h, f, w, A, C, I, weakMap_2));
  }
  return G;
}
function da(e = z) {
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays !== "boolean") throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys !== "boolean") throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder !== "function") throw TypeError("Encoder has to be a function.");
  let charset = e.charset || z.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  let format_2 = format;
  if (typeof e.format < "u") {
    if (!Ur(Kn, e.format)) throw TypeError("Unknown format option provided.");
    format_2 = e.format;
  }
  let formatter = Kn[format_2],
    filter = z.filter;
  if (typeof e.filter === "function" || Z(e.filter)) filter = e.filter;
  let arrayFormat;
  if (e.arrayFormat && e.arrayFormat in uo) arrayFormat = e.arrayFormat;else if ("indices" in e) arrayFormat = e.indices ? "indices" : "repeat";else arrayFormat = z.arrayFormat;
  if ("commaRoundTrip" in e && typeof e.commaRoundTrip !== "boolean") throw TypeError("`commaRoundTrip` must be a boolean, or absent");
  let allowDots = typeof e.allowDots > "u" ? !!e.encodeDotInKeys === !0 ? !0 : z.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix === "boolean" ? e.addQueryPrefix : z.addQueryPrefix,
    allowDots: allowDots,
    allowEmptyArrays: typeof e.allowEmptyArrays === "boolean" ? !!e.allowEmptyArrays : z.allowEmptyArrays,
    arrayFormat: arrayFormat,
    charset: charset,
    charsetSentinel: typeof e.charsetSentinel === "boolean" ? e.charsetSentinel : z.charsetSentinel,
    commaRoundTrip: !!e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? z.delimiter : e.delimiter,
    encode: typeof e.encode === "boolean" ? e.encode : z.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys === "boolean" ? e.encodeDotInKeys : z.encodeDotInKeys,
    encoder: typeof e.encoder === "function" ? e.encoder : z.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly === "boolean" ? e.encodeValuesOnly : z.encodeValuesOnly,
    filter: filter,
    format: format_2,
    formatter: formatter,
    serializeDate: typeof e.serializeDate === "function" ? e.serializeDate : z.serializeDate,
    skipNulls: typeof e.skipNulls === "boolean" ? e.skipNulls : z.skipNulls,
    sort: typeof e.sort === "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling === "boolean" ? e.strictNullHandling : z.strictNullHandling
  };
}
function po(e, r = {}) {
  let n = e,
    s = da(r),
    o,
    i;
  if (typeof s.filter === "function") i = s.filter, n = i("", n);else if (Z(s.filter)) i = s.filter, o = i;
  let c = [];
  if (typeof n !== "object" || n === null) return "";
  let a = uo[s.arrayFormat],
    d = a === "comma" && s.commaRoundTrip;
  if (!o) o = Object.keys(n);
  if (s.sort) o.sort(s.sort);
  let weakMap_3 = new WeakMap();
  for (let f = 0; f < o.length; ++f) {
    let w = o[f];
    if (s.skipNulls && n[w] === null) continue;
    fo(c, ho(n[w], w, a, d, s.allowEmptyArrays, s.strictNullHandling, s.skipNulls, s.encodeDotInKeys, s.encode ? s.encoder : null, s.filter, s.sort, s.allowDots, s.serializeDate, s.format, s.formatter, s.encodeValuesOnly, s.charset, weakMap_3));
  }
  let E = c.join(s.delimiter),
    h = s.addQueryPrefix === !0 ? "?" : "";
  if (s.charsetSentinel) if (s.charset === "iso-8859-1") h += "utf8=%26%2310003%3B&";else h += "utf8=%E2%9C%93&";
  return E.length > 0 ? h + E : "";
}
function mo(e) {
  return po(e, {
    arrayFormat: "brackets"
  });
}
var n$o = "1.0",
  version = "1.0",
  ha = /^[A-Za-z0-9_.-]+$/;
function go(e) {
  if (!e) throw Error("profile name is empty");
  if (e === "." || e === "..") throw Error(`profile name "${e}" is not allowed`);
  if (e.includes("/") || e.includes("\\")) throw Error(`profile name "${e}" must not contain path separators`);
  if (!ha.test(e)) throw Error(`profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`);
}
var r$o = async e => (await zn(e))?.config ?? null,
  zn = async e => {
    var r, n;
    let s = await Yn();
    if (s === null) return null;
    let o = e ?? (await _o());
    if (o === null) return null;
    go(o);
    let i = await import("fs"),
      c = await import("path"),
      a = c.join(s, "configs", `${o}.json`),
      d;
    try {
      d = await i.promises.readFile(a, "utf-8");
    } catch (error) {
      if (error?.code !== "ENOENT") throw Error(`failed to read config file ${a}: ${error}`);
      d = null;
    }
    if (d === null) {
      let organization_id = O("ANTHROPIC_ORGANIZATION_ID"),
        path = O("ANTHROPIC_IDENTITY_TOKEN_FILE"),
        federation_rule_id = O("ANTHROPIC_FEDERATION_RULE_ID");
      if (federation_rule_id && organization_id) return {
        fromFile: !1,
        config: {
          organization_id: organization_id,
          workspace_id: O("ANTHROPIC_WORKSPACE_ID"),
          base_url: O("ANTHROPIC_BASE_URL"),
          authentication: {
            type: "oidc_federation",
            federation_rule_id: federation_rule_id,
            service_account_id: O("ANTHROPIC_SERVICE_ACCOUNT_ID"),
            identity_token: path ? {
              source: "file",
              path: path
            } : void 0,
            scope: O("ANTHROPIC_SCOPE")
          }
        }
      };
      return null;
    }
    let config;
    try {
      config = JSON.parse(d);
    } catch (error) {
      throw Error(`failed to parse config file ${a}: ${error}`);
    }
    if (!config.authentication) throw Error(`config file ${a} is missing "authentication"`);
    let E = config.authentication.type;
    if (E !== "oidc_federation" && E !== "user_oauth") throw Error(`authentication.type "${E}" is not a known authentication type`);
    if (config.organization_id ?? (config.organization_id = O("ANTHROPIC_ORGANIZATION_ID")), config.workspace_id ?? (config.workspace_id = O("ANTHROPIC_WORKSPACE_ID")), config.base_url ?? (config.base_url = O("ANTHROPIC_BASE_URL")), (r = config.authentication).scope ?? (r.scope = O("ANTHROPIC_SCOPE")), config.authentication.type === "oidc_federation") {
      if (!config.authentication.identity_token) {
        let path_2 = O("ANTHROPIC_IDENTITY_TOKEN_FILE");
        if (path_2) config.authentication.identity_token = {
          source: "file",
          path: path_2
        };
      }
      if (!config.authentication.federation_rule_id) config.authentication.federation_rule_id = O("ANTHROPIC_FEDERATION_RULE_ID") ?? "";
      (n = config.authentication).service_account_id ?? (n.service_account_id = O("ANTHROPIC_SERVICE_ACCOUNT_ID"));
    }
    return {
      config: config,
      fromFile: !0
    };
  };
var vYn = async (e, r) => {
    if (e?.authentication.credentials_path) return e.authentication.credentials_path;
    let n = await Yn();
    if (!n) return null;
    let s = r ?? (await _o());
    if (!s) return null;
    go(s);
    let o = await import("path");
    return o.join(n, "credentials", `${s}.json`);
  },
  Yn = async () => {
    if (!pa()) return null;
    let e = await import("path"),
      r = O("ANTHROPIC_CONFIG_DIR");
    if (r) return r;
    if (Rt()["X-Stainless-OS"] === "Windows") {
      let i = O("APPDATA");
      if (i) return e.join(i, "Anthropic");
      let c = O("USERPROFILE");
      if (c) return e.join(c, "AppData", "Roaming", "Anthropic");
      return null;
    }
    let s = O("XDG_CONFIG_HOME");
    if (s) return e.join(s, "anthropic");
    let o = O("HOME");
    if (o) return e.join(o, ".config", "anthropic");
    return null;
  },
  pa = () => {
    let e = Rt()["X-Stainless-Runtime"];
    return e === "node" || e === "deno";
  },
  _o = async () => {
    let e = await Yn();
    if (!e) return null;
    let r = O("ANTHROPIC_PROFILE");
    if (r) return r;
    let n = await import("fs"),
      s = await import("path"),
      o = s.join(e, "active_config");
    try {
      return (await n.promises.readFile(o, "utf-8")).trim() || "default";
    } catch (error) {
      if (error?.code !== "ENOENT") throw Error(`failed to read ${o}: ${error}`);
      return "default";
    }
  };
function Xn(e) {
  if (!e) throw new Wn("Identity token file path is empty");
  return async () => {
    let r = await import("fs"),
      n;
    try {
      n = await r.promises.readFile(e, "utf-8");
    } catch (error) {
      throw new Wn(`Failed to read identity token file at ${e}: ${error}`);
    }
    let s = n.trim();
    if (!s) throw new Wn(`Identity token file at ${e} is empty`);
    return s;
  };
}
function yo(e) {
  if (!e) throw new Wn("Identity token value is empty");
  return () => e;
}
function bo(e) {
  return async () => {
    MYn(e.baseURL);
    let assertion = await e.identityTokenProvider();
    if (assertion.length > 16384) throw new fc(`Identity token is ${Math.ceil(assertion.length / 1024)} KiB, exceeds the 16 KiB assertion limit`);
    let n = {
      grant_type: grant_type,
      assertion: assertion,
      federation_rule_id: e.federationRuleId,
      organization_id: e.organizationId
    };
    if (e.serviceAccountId) n.service_account_id = e.serviceAccountId;
    if (e.workspaceId) n.workspace_id = e.workspaceId;
    let s = `${e.baseURL}${OYn}`,
      o;
    try {
      o = await e.fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-beta": `${Nft},${p$o}`,
          "User-Agent": e.userAgent || `anthropic-sdk-typescript/${ue} oidcFederationProvider`
        },
        body: JSON.stringify(n)
      });
    } catch (error) {
      throw new fc(`Failed to reach token endpoint ${s}: ${error}`);
    }
    let i = o.headers.get("Request-Id");
    if (!o.ok) {
      let d = await o.text().catch(() => ""),
        S = FJ(d),
        E = "";
      if (o.status === 401) E = ` Ensure your federation rule matches your identity token. ${e.workspaceId ? "" : "If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`;
      throw new fc(`Token exchange failed with status ${o.status}${i ? ` (request-id ${i})` : ""}: ${S}${E}`, o.status, S, i);
    }
    let c = await DYn(o, i),
      a = Number(c.expires_in);
    if (!Number.isFinite(a)) throw new fc(`Token endpoint response missing required fields: ${JSON.stringify(FJ(c))}`, o.status, FJ(c), i);
    return {
      token: c.access_token,
      expiresAt: pe() + a
    };
  };
}
function So(e) {
  return async r => {
    let n = await import("fs");
    await Hft(e.credentialsPath, e.onSafetyWarning);
    let s;
    try {
      s = await n.promises.readFile(e.credentialsPath, "utf-8");
    } catch (error) {
      throw new fc(`Credentials file not found at ${e.credentialsPath}: ${error}`);
    }
    let o;
    try {
      o = JSON.parse(s);
    } catch (error) {
      throw new fc(`Credentials file at ${e.credentialsPath} is not valid JSON: ${error}`);
    }
    let i = o.access_token;
    if (!i) throw new fc(`Credentials file at ${e.credentialsPath} must include 'access_token'`);
    let expires_at = o.expires_at;
    if (!r?.forceRefresh && (expires_at == null || pe() < expires_at - xUe)) return {
      token: i,
      expiresAt: expires_at ?? null
    };
    let refresh_token = o.refresh_token;
    if (!e.clientId || !refresh_token) throw new fc(`Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId ? "set" : "empty"}, refresh_token ${refresh_token ? "set" : "empty"})`);
    MYn(e.baseURL);
    let d = {
        grant_type: grant_type_2,
        refresh_token: refresh_token,
        client_id: e.clientId
      },
      S = `${e.baseURL}${OYn}`,
      E;
    try {
      E = await e.fetch(S, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-beta": Nft,
          "User-Agent": e.userAgent || `anthropic-sdk-typescript/${ue} userOAuthProvider`
        },
        body: JSON.stringify(d)
      });
    } catch (error) {
      throw new fc(`User OAuth refresh failed to reach token endpoint: ${error}`);
    }
    let h = E.headers.get("Request-Id");
    if (!E.ok) {
      let I = await E.text().catch(() => "");
      throw new fc(`User OAuth refresh failed (HTTP ${E.status}): ${FJ(I)}`, E.status, FJ(I), h);
    }
    let f = await DYn(E, h),
      w = Number(f.expires_in);
    if (!Number.isFinite(w)) throw new fc(`User OAuth refresh response missing or invalid expires_in: ${JSON.stringify(FJ(f))}`, E.status, FJ(f), h);
    let A = pe() + w,
      refresh_token_2 = f.refresh_token || refresh_token;
    return await u_e(e.credentialsPath, {
      ...o,
      version: version,
      type: "oauth_token",
      access_token: f.access_token,
      expires_at: A,
      refresh_token: refresh_token_2
    }), {
      token: f.access_token,
      expiresAt: A
    };
  };
}
function Oft(e, r) {
  let n = e.authentication.credentials_path ?? null,
    s = (e.base_url || r.baseURL).replace(/\/+$/, ""),
    provider = ma(e, n, s, r),
    extraHeaders = {};
  if (e.workspace_id && e.authentication.type === "user_oauth") extraHeaders["anthropic-workspace-id"] = e.workspace_id;
  return {
    provider: provider,
    extraHeaders: extraHeaders,
    baseURL: e.base_url || void 0
  };
}
async function wo(e, r) {
  let n = await zn(r);
  if (!n) return null;
  let {
      config: config_2,
      fromFile: fromFile
    } = n,
    i = config_2.authentication.credentials_path || !fromFile ? config_2 : {
      ...config_2,
      authentication: {
        ...config_2.authentication,
        credentials_path: (await vYn(config_2, r)) ?? void 0
      }
    };
  return Oft(i, e);
}
function ma(e, credentialsPath, baseURL, s) {
  switch (e.authentication.type) {
    case "oidc_federation":
      {
        let authentication = e.authentication,
          identityTokenProvider = ga(authentication);
        if (!identityTokenProvider) throw new fc("oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)");
        if (!authentication.federation_rule_id) throw new fc("oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence).");
        if (!e.organization_id) throw new fc("oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)");
        let c = bo({
          identityTokenProvider: identityTokenProvider,
          federationRuleId: authentication.federation_rule_id,
          organizationId: e.organization_id,
          serviceAccountId: authentication.service_account_id,
          workspaceId: e.workspace_id,
          baseURL: baseURL,
          fetch: s.fetch,
          userAgent: s.userAgent
        });
        if (credentialsPath) return _a(c, credentialsPath, s.onCacheWriteError, s.onSafetyWarning);
        return c;
      }
    case "user_oauth":
      {
        if (!credentialsPath) throw new fc("user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)");
        return So({
          credentialsPath: credentialsPath,
          clientId: e.authentication.client_id,
          baseURL: baseURL,
          fetch: s.fetch,
          userAgent: s.userAgent,
          onSafetyWarning: s.onSafetyWarning
        });
      }
    default:
      {
        let o = e.authentication.type;
        throw new fc(`authentication.type "${o}" is not a known authentication type`);
      }
  }
}
function ga(e) {
  if (e.identity_token) {
    let source = e.identity_token.source;
    if (source !== "file") throw new fc(`identity_token.source "${source}" is not supported by this SDK version (only "file")`);
    if (!e.identity_token.path) throw new fc('identity_token.source "file" requires a non-empty path');
    return Xn(e.identity_token.path);
  }
  let r = O("ANTHROPIC_IDENTITY_TOKEN_FILE");
  if (r) return Xn(r);
  let n = O("ANTHROPIC_IDENTITY_TOKEN");
  if (n) return yo(n);
  return null;
}
function _a(e, r, n, s) {
  return async o => {
    let i = await import("fs");
    await Hft(r, s);
    let c;
    try {
      let d = await i.promises.readFile(r, "utf-8");
      c = JSON.parse(d);
      let token = c?.access_token;
      if (token && !o?.forceRefresh) {
        let E = c?.expires_at;
        if (E == null || pe() < E - xUe) return {
          token: token,
          expiresAt: E ?? null
        };
      }
    } catch (error) {
      if (error?.code !== "ENOENT" && !(error instanceof SyntaxError)) n?.(error);
    }
    let a = await e(o);
    try {
      await u_e(r, {
        ...(c ?? {}),
        version: version,
        type: "oauth_token",
        access_token: a.token,
        expires_at: a.expiresAt
      });
    } catch (error) {
      n?.(error);
    }
    return a;
  };
}
class ToolError extends Error {
  constructor(e) {
    let r = typeof e === "string" ? e : e.map(item => {
      if (item.type === "text") return item.text;
      return `[${item.type}]`;
    }).join(" ");
    super(r);
    this.name = "ToolError", this.content = e;
  }
}
function _Bt() {
  let resolve, reject;
  return {
    promise: new Promise((s, o) => {
      resolve = s, reject = o;
    }),
    resolve: resolve,
    reject: reject
  };
}
function Eo() {
  if (typeof fetch < "u") return fetch;
  throw Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`");
}
function Qn(...e) {
  let ReadableStream = globalThis.ReadableStream;
  if (typeof ReadableStream > "u") throw Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
  return new ReadableStream(...e);
}
function Br(e) {
  let r = Symbol.asyncIterator in e ? e[Symbol.asyncIterator]() : e[Symbol.iterator]();
  return Qn({
    start() {},
    async pull(n) {
      let {
        done: done,
        value: value_2
      } = await r.next();
      if (done) n.close();else n.enqueue(value_2);
    },
    async cancel() {
      await r.return?.();
    }
  });
}
function Ct(e) {
  if (e[Symbol.asyncIterator]) return e;
  let r = e.getReader();
  return {
    async next() {
      try {
        let n = await r.read();
        if (n?.done) r.releaseLock();
        return n;
      } catch (error) {
        throw r.releaseLock(), error;
      }
    },
    async return() {
      let n = r.cancel();
      return r.releaseLock(), await n, {
        done: !0,
        value: void 0
      };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
async function ko(e) {
  if (e === null || typeof e !== "object") return;
  if (e[Symbol.asyncIterator]) {
    await e[Symbol.asyncIterator]().return?.();
    return;
  }
  let r = e.getReader(),
    n = r.cancel();
  r.releaseLock(), await n;
}
var xo = ({
  headers: headers,
  body: body
}) => ({
  bodyHeaders: {
    "content-type": "application/json"
  },
  body: JSON.stringify(body)
});
var ne, se;
class Ie {
  constructor() {
    ne.set(this, void 0), se.set(this, void 0), gr(this, ne, new Uint8Array(), "f"), gr(this, se, null, "f");
  }
  decode(e) {
    if (e == null) return [];
    let r = e instanceof ArrayBuffer ? new Uint8Array(e) : typeof e === "string" ? rt(e) : e;
    gr(this, ne, ro([He(this, ne, "f"), r]), "f");
    let n = [],
      s;
    while ((s = Sa(He(this, ne, "f"), He(this, se, "f"))) != null) {
      if (s.carriage && He(this, se, "f") == null) {
        gr(this, se, s.index, "f");
        continue;
      }
      if (He(this, se, "f") != null && (s.index !== He(this, se, "f") + 1 || s.carriage)) {
        n.push(Hn(He(this, ne, "f").subarray(0, He(this, se, "f") - 1))), gr(this, ne, He(this, ne, "f").subarray(He(this, se, "f")), "f"), gr(this, se, null, "f");
        continue;
      }
      let o = He(this, se, "f") !== null ? s.preceding - 1 : s.preceding,
        i = Hn(He(this, ne, "f").subarray(0, o));
      n.push(i), gr(this, ne, He(this, ne, "f").subarray(s.index), "f"), gr(this, se, null, "f");
    }
    return n;
  }
  flush() {
    if (!He(this, ne, "f").length) return [];
    return this.decode(`
`);
  }
}
ne = new WeakMap(), se = new WeakMap();
Ie.NEWLINE_CHARS = new Set([`
`, "\r"]);
Ie.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
function Sa(e, r) {
  for (let preceding = r ?? 0; preceding < e.length; preceding++) {
    if (e[preceding] === 10) return {
      preceding: preceding,
      index: preceding + 1,
      carriage: !1
    };
    if (e[preceding] === 13) return {
      preceding: preceding,
      index: preceding + 1,
      carriage: !0
    };
  }
  return null;
}
function Ao(e) {
  for (let s = 0; s < e.length - 1; s++) {
    if (e[s] === 10 && e[s + 1] === 10) return s + 2;
    if (e[s] === 13 && e[s + 1] === 13) return s + 2;
    if (e[s] === 13 && e[s + 1] === 10 && s + 3 < e.length && e[s + 2] === 13 && e[s + 3] === 10) return s + 4;
  }
  return -1;
}
var Mt;
class ee {
  constructor(e, r, n) {
    this.iterator = e, Mt.set(this, void 0), this.controller = r, gr(this, Mt, n, "f");
  }
  static rawEvents(e, r = new AbortController()) {
    return Ro(e, r);
  }
  static fromSSEResponse(e, r, n) {
    let s = !1,
      o = n ? H_(n) : console;
    async function* i() {
      if (s) throw new Wn("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      s = !0;
      let c = !1;
      try {
        for await (let a of Ro(e, r)) {
          if (a.event === "completion") try {
            yield JSON.parse(a.data);
          } catch (d) {
            throw o.error("Could not parse message into JSON:", a.data), o.error("From chunk:", a.raw), d;
          }
          if (a.event === "message_start" || a.event === "message_delta" || a.event === "message_stop" || a.event === "content_block_start" || a.event === "content_block_delta" || a.event === "content_block_stop" || a.event === "message" || a.event === "user.message" || a.event === "user.interrupt" || a.event === "user.tool_confirmation" || a.event === "user.custom_tool_result" || a.event === "user.tool_result" || a.event === "agent.message" || a.event === "agent.thinking" || a.event === "agent.tool_use" || a.event === "agent.tool_result" || a.event === "agent.mcp_tool_use" || a.event === "agent.mcp_tool_result" || a.event === "agent.custom_tool_use" || a.event === "agent.thread_context_compacted" || a.event === "session.status_running" || a.event === "session.status_idle" || a.event === "session.status_rescheduled" || a.event === "session.status_terminated" || a.event === "session.error" || a.event === "session.deleted" || a.event === "session.updated" || a.event === "span.model_request_start" || a.event === "span.model_request_end" || a.event === "span.outcome_evaluation_start" || a.event === "span.outcome_evaluation_ongoing" || a.event === "span.outcome_evaluation_end" || a.event === "user.define_outcome" || a.event === "agent.thread_message_received" || a.event === "agent.thread_message_sent" || a.event === "agent.session_thread_message_received" || a.event === "agent.session_thread_message_sent" || a.event === "session.thread_created" || a.event === "session.thread_status_created" || a.event === "session.thread_status_running" || a.event === "session.thread_status_idle" || a.event === "session.thread_status_rescheduled" || a.event === "session.thread_status_terminated" || a.event === "event_start" || a.event === "event_delta" || a.event === "system.message") try {
            yield JSON.parse(a.data);
          } catch (d) {
            throw o.error("Could not parse message into JSON:", a.data), o.error("From chunk:", a.raw), d;
          }
          if (a.event === "ping") continue;
          if (a.event === "error") {
            let d = vt(a.data) ?? a.data,
              S = d?.error?.type;
            throw new Ot(void 0, d, void 0, e.headers, S);
          }
        }
        c = !0;
      } catch (error) {
        if (qde(error)) return;
        throw error;
      } finally {
        if (!c) r.abort();
      }
    }
    return new ee(i, r, n);
  }
  static fromReadableStream(e, r, n) {
    let s = !1;
    async function* o() {
      let c = new Ie(),
        a = Ct(e);
      for await (let d of a) for (let S of c.decode(d)) yield S;
      for (let d of c.flush()) yield d;
    }
    async function* i() {
      if (s) throw new Wn("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      s = !0;
      let c = !1;
      try {
        for await (let a of o()) {
          if (c) continue;
          if (a) yield JSON.parse(a);
        }
        c = !0;
      } catch (error) {
        if (qde(error)) return;
        throw error;
      } finally {
        if (!c) r.abort();
      }
    }
    return new ee(i, r, n);
  }
  [(Mt = new WeakMap(), Symbol.asyncIterator)]() {
    return this.iterator();
  }
  tee() {
    let e = [],
      r = [],
      n = this.iterator(),
      s = o => ({
        next: () => {
          if (o.length === 0) {
            let i = n.next();
            e.push(i), r.push(i);
          }
          return o.shift();
        }
      });
    return [new ee(() => s(e), this.controller, He(this, Mt, "f")), new ee(() => s(r), this.controller, He(this, Mt, "f"))];
  }
  toReadableStream() {
    let e = this,
      r;
    return Qn({
      async start() {
        r = e[Symbol.asyncIterator]();
      },
      async pull(n) {
        try {
          let {
            value: value_3,
            done: done_2
          } = await r.next();
          if (done_2) return n.close();
          let i = rt(JSON.stringify(value_3) + `
`);
          n.enqueue(i);
        } catch (s) {
          n.error(s);
        }
      },
      async cancel() {
        await r.return?.();
      }
    });
  }
}
async function* Ro(e, r) {
  if (!e.body) {
    if (r.abort(), typeof globalThis.navigator < "u" && globalThis.navigator.product === "ReactNative") throw new Wn("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api");
    throw new Wn("Attempted to iterate over a response with no body");
  }
  let n = new Io(),
    s = new Ie(),
    o = Ct(e.body);
  for await (let i of Ea(o)) for (let c of s.decode(i)) {
    let a = n.decode(c);
    if (a) yield a;
  }
  for (let i of s.flush()) {
    let c = n.decode(i);
    if (c) yield c;
  }
}
async function* Ea(e) {
  let uint8Array_15 = new Uint8Array();
  for await (let n of e) {
    if (n == null) continue;
    let s = n instanceof ArrayBuffer ? new Uint8Array(n) : typeof n === "string" ? rt(n) : n,
      uint8Array_16 = new Uint8Array(uint8Array_15.length + s.length);
    uint8Array_16.set(uint8Array_15), uint8Array_16.set(s, uint8Array_15.length), uint8Array_15 = uint8Array_16;
    let i;
    while ((i = Ao(uint8Array_15)) !== -1) yield uint8Array_15.slice(0, i), uint8Array_15 = uint8Array_15.slice(i);
  }
  if (uint8Array_15.length > 0) yield uint8Array_15;
}
class Io {
  constructor() {
    this.event = null, this.data = [], this.chunks = [];
  }
  decode(e) {
    if (e.endsWith("\r")) e = e.substring(0, e.length - 1);
    if (!e) {
      if (!this.event && !this.data.length) return null;
      let o = {
        event: this.event,
        data: this.data.join(`
`),
        raw: this.chunks
      };
      return this.event = null, this.data = [], this.chunks = [], o;
    }
    if (this.chunks.push(e), e.startsWith(":")) return null;
    let [r, n, s] = ka(e, ":");
    if (s.startsWith(" ")) s = s.substring(1);
    if (r === "event") this.event = s;else if (r === "data") this.data.push(s);
    return null;
  }
}
function ka(e, r) {
  let n = e.indexOf(r);
  if (n !== -1) return [e.substring(0, n), r, e.substring(n + r.length)];
  return [e, "", ""];
}
async function Wr(e, r) {
  let {
      response: response,
      requestLogID: requestLogID,
      retryOfRequestLogID: retryOfRequestLogID,
      startTime: startTime
    } = r,
    body_2 = await (async () => {
      if (r.options.stream) return H_(e).debug("response", response.status, response.url, response.headers, response.body), ee.fromSSEResponse(response, r.controller);
      if (response.status === 204) return null;
      if (r.options.__binaryResponse) return response;
      let d = response.headers.get("content-type")?.split(";")[0]?.trim();
      if (d?.includes("application/json") || d?.endsWith("+json")) {
        if (response.headers.get("content-length") === "0") return;
        let f = await response.json();
        return Nt(f, response);
      }
      return await response.text();
    })();
  return H_(e).debug(`[${requestLogID}] response parsed`, ye({
    retryOfRequestLogID: retryOfRequestLogID,
    url: response.url,
    status: response.status,
    body: body_2,
    durationMs: Date.now() - startTime
  })), body_2;
}
function Nt(e, r) {
  if (!e || typeof e !== "object" || Array.isArray(e)) return e;
  return Object.defineProperty(e, "_request_id", {
    value: r.headers.get("request-id"),
    enumerable: !1
  });
}
var weakSet = new WeakSet();
function Zn(e) {
  return typeof e === "object" && e !== null && weakSet.has(e);
}
function To(e) {
  let r = new Set();
  while (typeof e === "object" && e !== null && !r.has(e)) {
    if (r.add(e), Zn(e) || qde(e) || e instanceof Np || e instanceof ogt) return !0;
    e = e.cause;
  }
  return !1;
}
function es(e, r, n, s) {
  return async (o, i = {}) => {
    if (r.length === 0) return e.call(void 0, o, i);
    let headers_2 = i.headers instanceof Headers ? i.headers : new Headers(i.headers),
      a = await Aa(e, r, n, s)({
        ...i,
        headers: headers_2,
        url: typeof o === "string" ? o : o instanceof URL ? o.href : o.url
      });
    if (a.bodyUsed || a.body?.locked) throw new Wn("middleware consumed the response body; use response.clone() to inspect it, or return new Response(body, response) to consume and replace it");
    return a;
  };
}
function xa(options, r) {
  let weakMap_4 = new WeakMap();
  return {
    options: options,
    logger: r ? H_(r) : oo(),
    parse(s) {
      if (options?.stream && s.ok) return vo(s, options);
      let o = weakMap_4.get(s);
      if (!o) o = vo(s, options), weakMap_4.set(s, o);
      return o;
    }
  };
}
async function vo(e, r) {
  if (e.bodyUsed || e.body?.locked) throw new Wn("cannot ctx.parse() a response whose body was already consumed; call ctx.parse() instead of reading the body, or read via response.clone()");
  if (r?.stream && e.ok) return ee.fromSSEResponse(e.clone(), new AbortController());
  if (e.status === 204) return null;
  if (r?.__binaryResponse) return e;
  let s = e.headers.get("content-type")?.split(";")[0]?.trim();
  if (s?.includes("application/json") || s?.endsWith("+json")) {
    if (e.headers.get("content-length") === "0") return;
    return Nt(await e.clone().json(), e);
  }
  return await e.clone().text();
}
function Aa(e, r, n, s) {
  let o = async ({
      url: url,
      ...a
    }) => {
      try {
        return await e.call(void 0, url, a);
      } catch (error) {
        let S = rgt(error);
        throw weakSet.add(S), S;
      }
    },
    i = xa(n, s);
  for (let c = r.length - 1; c >= 0; c--) {
    let a = r[c],
      d = o;
    o = async S => a(S, d, i);
  }
  return o;
}
var Dt;
class je extends Promise {
  constructor(e, r, n = Wr) {
    super(s => {
      s(null);
    });
    this.responsePromise = r, this.parseResponse = n, Dt.set(this, void 0), gr(this, Dt, e, "f");
  }
  _thenUnwrap(e) {
    return new je(He(this, Dt, "f"), this.responsePromise, async (r, n) => Nt(e(await this.parseResponse(r, n), n), n.response));
  }
  asResponse() {
    return this.responsePromise.then(e => e.response);
  }
  async withResponse() {
    let [data_4, response_2] = await Promise.all([this.parse(), this.asResponse()]);
    return {
      data: data_4,
      response: response_2,
      request_id: response_2.headers.get("request-id")
    };
  }
  parse() {
    if (!this.parsedPromise) this.parsedPromise = this.responsePromise.then(e => this.parseResponse(He(this, Dt, "f"), e));
    return this.parsedPromise;
  }
  then(e, r) {
    return this.parse().then(e, r);
  }
  catch(e) {
    return this.parse().catch(e);
  }
  finally(e) {
    return this.parse().finally(e);
  }
}
Dt = new WeakMap();
var jr;
class qr {
  constructor(e, r, n, s) {
    jr.set(this, void 0), gr(this, jr, e, "f"), this.options = s, this.response = r, this.body = n;
  }
  hasNextPage() {
    if (!this.getPaginatedItems().length) return !1;
    return this.nextPageRequestOptions() != null;
  }
  async getNextPage() {
    let e = this.nextPageRequestOptions();
    if (!e) throw new Wn("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
    return await He(this, jr, "f").requestAPIList(this.constructor, e);
  }
  async *iterPages() {
    let e = this;
    yield e;
    while (e.hasNextPage()) e = await e.getNextPage(), yield e;
  }
  async *[(jr = new WeakMap(), Symbol.asyncIterator)]() {
    for await (let e of this.iterPages()) for (let r of e.getPaginatedItems()) yield r;
  }
}
class Kr extends je {
  constructor(e, r, n) {
    super(e, r, async (s, o) => new n(s, o.response, await Wr(s, o), o.options));
  }
  async *[Symbol.asyncIterator]() {
    let e = await this;
    for await (let r of e) yield r;
  }
}
class ge extends qr {
  constructor(e, r, n, s) {
    super(e, r, n, s);
    this.data = n.data || [], this.has_more = n.has_more || !1, this.first_id = n.first_id || null, this.last_id = n.last_id || null;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    if (this.has_more === !1) return !1;
    return super.hasNextPage();
  }
  nextPageRequestOptions() {
    if (this.options.query?.before_id) {
      let r = this.first_id;
      if (!r) return null;
      return {
        ...this.options,
        query: {
          ...It(this.options.query),
          before_id: r
        }
      };
    }
    let e = this.last_id;
    if (!e) return null;
    return {
      ...this.options,
      query: {
        ...It(this.options.query),
        after_id: e
      }
    };
  }
}
class T extends qr {
  constructor(e, r, n, s) {
    super(e, r, n, s);
    this.data = n.data || [], this.next_page = n.next_page || null;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  nextPageRequestOptions() {
    let e = this.next_page;
    if (!e) return null;
    return {
      ...this.options,
      query: {
        ...It(this.options.query),
        page: e
      }
    };
  }
}
class ts extends qr {
  constructor(e, r, n, s) {
    super(e, r, n, s);
    this.data = n.data || [], this.next_page = n.next_page || null, this.prev_page = n.prev_page || null;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  nextPageRequestOptions() {
    let e = this.next_page;
    if (!e) return null;
    return {
      ...this.options,
      query: {
        ...It(this.options.query),
        page: e
      }
    };
  }
}
var ns = () => {
  if (typeof File > "u") {
    let {
        process: process_2
      } = globalThis,
      r = typeof process_2?.versions?.node === "string" && parseInt(process_2.versions.node.split(".")) < 20;
    throw Error("`File` is not defined as a global, which is required for file uploads." + (r ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`." : ""));
  }
};
function qe(e, r, n) {
  return ns(), new File(e, r ?? "unknown_file", n);
}
function Ft(e, r) {
  let n = typeof e === "object" && e !== null && ("name" in e && e.name && String(e.name) || "url" in e && e.url && String(e.url) || "filename" in e && e.filename && String(e.filename) || "path" in e && e.path && String(e.path)) || "";
  return r ? n.split(/[\\/]/).pop() || void 0 : n;
}
var ss = e => e != null && typeof e === "object" && typeof e[Symbol.asyncIterator] === "function";
var st = async (e, r, n = !0) => ({
    ...e,
    body: await va(e.body, r, n)
  }),
  weakMap_5 = new WeakMap();
function Ia(e) {
  let r = typeof e === "function" ? e : e.fetch,
    n = weakMap_5.get(r);
  if (n) return n;
  let s = (async () => {
    try {
      let o = "Response" in r ? r.Response : (await r("data:,")).constructor,
        formData = new FormData();
      if (formData.toString() === (await new o(formData).text())) return !1;
      return !0;
    } catch {
      return !0;
    }
  })();
  return weakMap_5.set(r, s), s;
}
var va = async (e, r, n = !0) => {
    if (!(await Ia(r))) throw TypeError("The provided fetch function does not support file uploads with the current global FormData class.");
    let formData_2 = new FormData();
    return await Promise.all(Object.entries(e || {}).map(([o, i]) => rs(formData_2, o, i, n))), formData_2;
  },
  Pa = e => e instanceof Blob && "name" in e;
var rs = async (e, r, n, s) => {
  if (n === void 0) return;
  if (n == null) throw TypeError(`Received null for "${r}"; to pass null in FormData, you must use the string 'null'`);
  if (typeof n === "string" || typeof n === "number" || typeof n === "boolean") e.append(r, String(n));else if (n instanceof Response) {
    let o = {},
      type = n.headers.get("Content-Type");
    if (type) o = {
      type: type
    };
    e.append(r, qe([await n.blob()], Ft(n, s), o));
  } else if (ss(n)) e.append(r, qe([await new Response(Br(n)).blob()], Ft(n, s)));else if (Pa(n)) e.append(r, qe([n], Ft(n, s), {
    type: n.type
  }));else if (Array.isArray(n)) await Promise.all(n.map(item => rs(e, r + "[]", item, s)));else if (typeof n === "object") await Promise.all(Object.entries(n).map(([o, i]) => rs(e, `${r}[${o}]`, i, s)));else throw TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`);
};
var Oo = e => e != null && typeof e === "object" && typeof e.size === "number" && typeof e.type === "string" && typeof e.text === "function" && typeof e.slice === "function" && typeof e.arrayBuffer === "function",
  Ta = e => e != null && typeof e === "object" && typeof e.name === "string" && typeof e.lastModified === "number" && Oo(e),
  Ca = e => e != null && typeof e === "object" && typeof e.url === "string" && typeof e.blob === "function";
async function Vr(e, r, n) {
  if (ns(), e = await e, r || (r = Ft(e, !0)), Ta(e)) {
    if (e instanceof File && r == null && n == null) return e;
    return qe([await e.arrayBuffer()], r ?? e.name, {
      type: e.type,
      lastModified: e.lastModified,
      ...n
    });
  }
  if (Ca(e)) {
    let o = await e.blob();
    return r || (r = new URL(e.url).pathname.split(/[\\/]/).pop()), qe(await os(o), r, n);
  }
  let s = await os(e);
  if (!n?.type) {
    let type_2 = s.find(item => typeof item === "object" && "type" in item && item.type);
    if (typeof type_2 === "string") n = {
      ...n,
      type: type_2
    };
  }
  return qe(s, r, n);
}
async function os(e) {
  let r = [];
  if (typeof e === "string" || ArrayBuffer.isView(e) || e instanceof ArrayBuffer) r.push(e);else if (Oo(e)) r.push(e instanceof Blob ? e : await e.arrayBuffer());else if (ss(e)) for await (let n of e) r.push(...(await os(n)));else {
    let n = e?.constructor?.name;
    throw Error(`Unexpected data type: ${typeof e}${n ? `; constructor: ${n}` : ""}${Oa(e)}`);
  }
  return r;
}
function Oa(e) {
  if (typeof e !== "object" || e === null) return "";
  return `; props: [${Object.getOwnPropertyNames(e).map(item => `"${item}"`).join(", ")}]`;
}
class R {
  constructor(e) {
    this._client = e;
  }
}
var Mo = Symbol.for("brand.privateNullableHeaders");
function* Na(e) {
  if (!e) return;
  if (Mo in e) {
    let {
      values: values,
      nulls: nulls
    } = e;
    yield* values.entries();
    for (let i of nulls) yield [i, null];
    return;
  }
  let r = !1,
    n;
  if (e instanceof Headers) n = e.entries();else if (Fn(e)) n = e;else r = !0, n = Object.entries(e ?? {});
  for (let s of n) {
    let o = s[0];
    if (typeof o !== "string") throw TypeError("expected header name to be a string");
    let i = Fn(s[1]) ? s[1] : [s[1]],
      c = !1;
    for (let a of i) {
      if (a === void 0) continue;
      if (r && !c) c = !0, yield [o, Jr];
      yield [o, a];
    }
  }
}
var Jr = Symbol("clear"),
  Da = new Set(["x-stainless-helper"]),
  No = (e, r) => {
    let n = e ? e.split(",").map(item => item.trim()).filter(Boolean) : [];
    for (let s of r.split(",").map(item => item.trim())) if (s && !n.includes(s)) n.push(s);
    return n.join(", ");
  },
  u = e => {
    let r = new Headers(),
      nulls_2 = new Set();
    for (let s of e) {
      let o = new Set();
      for (let [i, c] of Na(s)) {
        let a = i.toLowerCase();
        if (Da.has(a)) {
          if (c === Jr) continue;
          if (c === null) r.delete(i), nulls_2.add(a);else r.set(i, No(r.get(i), c)), nulls_2.delete(a);
          continue;
        }
        if (c === Jr || !o.has(a)) {
          if (r.delete(i), o.add(a), c === Jr) continue;
        }
        if (c === null) r.delete(i), nulls_2.add(a);else r.append(i, c), nulls_2.delete(a);
      }
    }
    return {
      [Mo]: !0,
      values: r,
      nulls: nulls_2
    };
  };
function Fo(e) {
  return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var Do = Object.freeze(Object.create(null)),
  Fa = (e = Fo) => function (n, ...s) {
    if (n.length === 1) return n[0];
    let o = !1,
      i = [],
      c = n.reduce((acc, item, f) => {
        if (/[?#]/.test(item)) o = !0;
        let w = s[f],
          A = (o ? encodeURIComponent : e)("" + w);
        if (f !== s.length && (w == null || typeof w === "object" && w.toString === Object.getPrototypeOf(Object.getPrototypeOf(w.hasOwnProperty ?? Do) ?? Do)?.toString)) A = w + "", i.push({
          start: acc.length + item.length,
          length: A.length,
          error: `Value of type ${Object.prototype.toString.call(w).slice(8, -1)} is not a valid path parameter`
        });
        return acc + item + (f === s.length ? "" : A);
      }, ""),
      a = c.split(/[?#]/, 1)[0],
      d = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,
      S;
    while ((S = d.exec(a)) !== null) i.push({
      start: S.index,
      length: S[0].length,
      error: `Value "${S[0]}" can't be safely passed as a path parameter`
    });
    if (i.sort((itemA, itemB) => itemA.start - itemB.start), i.length > 0) {
      let E = 0,
        h = i.reduce((acc, item) => {
          let A = " ".repeat(item.start - E),
            C = "^".repeat(item.length);
          return E = item.start + item.length, acc + A + C;
        }, "");
      throw new Wn(`Path parameters result in path with invalid segments:
${i.map(item => item.error).join(`
`)}
${c}
${h}`);
    }
    return c;
  },
  g = Fa(Fo);
class Lt extends R {
  retrieve(e, r = {}, n) {
    let {
      betas: betas
    } = r ?? {};
    return this._client.get(g`/v1/deployment_runs/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_2,
      ...query
    } = e ?? {};
    return this._client.getAPIList("/v1/deployment_runs?beta=true", T, {
      query: query,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_2 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
}
class Ht extends R {
  create(e, r) {
    let {
      betas: betas_3,
      ...body_3
    } = e;
    return this._client.post("/v1/deployments?beta=true", {
      body: body_3,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_3 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_4
    } = r ?? {};
    return this._client.get(g`/v1/deployments/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_4 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      betas: betas_5,
      ...body_4
    } = r;
    return this._client.post(g`/v1/deployments/${e}?beta=true`, {
      body: body_4,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_5 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_6,
      ...query_2
    } = e ?? {};
    return this._client.getAPIList("/v1/deployments?beta=true", T, {
      query: query_2,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_6 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
  archive(e, r = {}, n) {
    let {
      betas: betas_7
    } = r ?? {};
    return this._client.post(g`/v1/deployments/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_7 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  pause(e, r = {}, n) {
    let {
      betas: betas_8
    } = r ?? {};
    return this._client.post(g`/v1/deployments/${e}/pause?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_8 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  run(e, r = {}, n) {
    let {
      betas: betas_9
    } = r ?? {};
    return this._client.post(g`/v1/deployments/${e}/run?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_9 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  unpause(e, r = {}, n) {
    let {
      betas: betas_10
    } = r ?? {};
    return this._client.post(g`/v1/deployments/${e}/unpause?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_10 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
}
class $t extends R {
  create(e, r) {
    let {
      betas: betas_11,
      ...body_5
    } = e;
    return this._client.post("/v1/dreams?beta=true", {
      body: body_5,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_11 ?? []), "dreaming-2026-04-21"].toString()
      }, r?.headers])
    });
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_12
    } = r ?? {};
    return this._client.get(g`/v1/dreams/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_12 ?? []), "dreaming-2026-04-21"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_13,
      ...query_3
    } = e ?? {};
    return this._client.getAPIList("/v1/dreams?beta=true", T, {
      query: query_3,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_13 ?? []), "dreaming-2026-04-21"].toString()
      }, r?.headers])
    });
  }
  archive(e, r = {}, n) {
    let {
      betas: betas_14
    } = r ?? {};
    return this._client.post(g`/v1/dreams/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_14 ?? []), "dreaming-2026-04-21"].toString()
      }, n?.headers])
    });
  }
  cancel(e, r = {}, n) {
    let {
      betas: betas_15
    } = r ?? {};
    return this._client.post(g`/v1/dreams/${e}/cancel?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_15 ?? []), "dreaming-2026-04-21"].toString()
      }, n?.headers])
    });
  }
}
var Bt = "x-stainless-helper",
  zr = "x-stainless-helper-method";
function Wt(e) {
  return {
    ["x-stainless-helper"]: e
  };
}
var Ut = Symbol("anthropic.sdk.stainlessHelper");
function Gr(e) {
  return typeof e === "object" && e !== null && Ut in e;
}
function is(e, r) {
  let n = new Set();
  if (e) {
    for (let s of e) if (Gr(s)) n.add(s[Ut]);
  }
  if (r) for (let s of r) {
    if (Gr(s)) n.add(s[Ut]);
    let content = s.content;
    if (Array.isArray(content)) {
      for (let i of content) if (Gr(i)) n.add(i[Ut]);
    }
  }
  return Array.from(n);
}
function Yr(e, r) {
  let n = is(e, r);
  if (n.length === 0) return {};
  return {
    ["x-stainless-helper"]: n.join(", ")
  };
}
function Lo(e) {
  if (Gr(e)) return {
    ["x-stainless-helper"]: e[Ut]
  };
  return {};
}
class jt extends R {
  list(e = {}, r) {
    let {
      betas: betas_16,
      ...query_4
    } = e ?? {};
    return this._client.getAPIList("/v1/files?beta=true", ge, {
      query: query_4,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_16 ?? []), "files-api-2025-04-14"].toString()
      }, r?.headers])
    });
  }
  delete(e, r = {}, n) {
    let {
      betas: betas_17
    } = r ?? {};
    return this._client.delete(g`/v1/files/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_17 ?? []), "files-api-2025-04-14"].toString()
      }, n?.headers])
    });
  }
  download(e, r = {}, n) {
    let {
      betas: betas_18
    } = r ?? {};
    return this._client.get(g`/v1/files/${e}/content?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_18 ?? []), "files-api-2025-04-14"].toString(),
        Accept: "application/binary"
      }, n?.headers]),
      __binaryResponse: !0
    });
  }
  retrieveMetadata(e, r = {}, n) {
    let {
      betas: betas_19
    } = r ?? {};
    return this._client.get(g`/v1/files/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_19 ?? []), "files-api-2025-04-14"].toString()
      }, n?.headers])
    });
  }
  upload(e, r) {
    let {
      betas: betas_20,
      ...body_6
    } = e;
    return this._client.post("/v1/files?beta=true", st({
      body: body_6,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_20 ?? []), "files-api-2025-04-14"].toString()
      }, Lo(body_6.file), r?.headers])
    }, this._client));
  }
}
class qt extends R {
  retrieve(e, r = {}, n) {
    let {
      betas: betas_21
    } = r ?? {};
    return this._client.get(g`/v1/models/${e}?beta=true`, {
      ...n,
      headers: u([{
        ...(betas_21?.toString() != null ? {
          "anthropic-beta": betas_21?.toString()
        } : void 0)
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_22,
      ...query_5
    } = e ?? {};
    return this._client.getAPIList("/v1/models?beta=true", ge, {
      query: query_5,
      ...r,
      headers: u([{
        ...(betas_22?.toString() != null ? {
          "anthropic-beta": betas_22?.toString()
        } : void 0)
      }, r?.headers])
    });
  }
}
class Kt extends R {
  create(e, r) {
    let {
      betas: betas_23,
      ...body_7
    } = e;
    return this._client.post("/v1/user_profiles?beta=true", {
      body: body_7,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_23 ?? []), "user-profiles-2026-03-24"].toString()
      }, r?.headers])
    });
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_24
    } = r ?? {};
    return this._client.get(g`/v1/user_profiles/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_24 ?? []), "user-profiles-2026-03-24"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      betas: betas_25,
      ...body_8
    } = r;
    return this._client.post(g`/v1/user_profiles/${e}?beta=true`, {
      body: body_8,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_25 ?? []), "user-profiles-2026-03-24"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_26,
      ...query_6
    } = e ?? {};
    return this._client.getAPIList("/v1/user_profiles?beta=true", T, {
      query: query_6,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_26 ?? []), "user-profiles-2026-03-24"].toString()
      }, r?.headers])
    });
  }
  createEnrollmentURL(e, r = {}, n) {
    let {
      betas: betas_27
    } = r ?? {};
    return this._client.post(g`/v1/user_profiles/${e}/enrollment_url?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_27 ?? []), "user-profiles-2026-03-24"].toString()
      }, n?.headers])
    });
  }
}
var Zo = be(Qo(), 1);
class Gt extends R {
  unwrap(e, {
    headers: headers_3,
    key: key
  }) {
    if (headers_3 !== void 0) {
      let s = key === void 0 ? this._client.webhookKey : key;
      if (s === null) throw Error("Webhook key must not be null in order to unwrap");
      new Zo.Webhook(s).verify(e, headers_3);
    }
    return JSON.parse(e);
  }
}
class zt extends R {
  list(e, r = {}, n) {
    let {
      betas: betas_28,
      ...query_7
    } = r ?? {};
    return this._client.getAPIList(g`/v1/agents/${e}/versions?beta=true`, T, {
      query: query_7,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_28 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
}
class ot extends R {
  constructor() {
    super(...arguments);
    this.versions = new zt(this._client);
  }
  create(e, r) {
    let {
      betas: betas_29,
      ...body_9
    } = e;
    return this._client.post("/v1/agents?beta=true", {
      body: body_9,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_29 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_30,
      ...query_8
    } = r ?? {};
    return this._client.get(g`/v1/agents/${e}?beta=true`, {
      query: query_8,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_30 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      betas: betas_31,
      ...body_10
    } = r;
    return this._client.post(g`/v1/agents/${e}?beta=true`, {
      body: body_10,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_31 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_32,
      ...query_9
    } = e ?? {};
    return this._client.getAPIList("/v1/agents?beta=true", T, {
      query: query_9,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_32 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
  archive(e, r = {}, n) {
    let {
      betas: betas_33
    } = r ?? {};
    return this._client.post(g`/v1/agents/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_33 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
}
ot.Versions = zt;
function Ke(e, r) {
  if (!e) return () => {};
  if (e.aborted) return r.abort(), () => {};
  let n = () => r.abort();
  return e.addEventListener("abort", n), () => e.removeEventListener("abort", n);
}
function Pe(e, r) {
  return e instanceof Ot && e.status === r;
}
function ei(e) {
  return e instanceof Ot && typeof e.status === "number" && e.status >= 400 && e.status < 500;
}
function Te(e) {
  return ei(e) && !Pe(e, 408) && !Pe(e, 409) && !Pe(e, 429);
}
function ti(e, r, n) {
  return Math.min(r * 2 ** e, n);
}
function ls(e, r) {
  return e + Math.random() * (r - e);
}
function ri(e) {
  return e * (1 - Math.random() * 0.25);
}
function Zr(e, {
  authToken: authToken,
  helper: helper
}) {
  if (!authToken) throw new Wn(`copyClientForHelper: expected a non-empty authToken but received ${JSON.stringify(authToken)}`);
  let s = e,
    defaultHeaders = s._options.defaultHeaders,
    i = s._authState?.extraHeaders,
    c = i ? Object.fromEntries(Object.entries(i).filter(([d]) => {
      let S = d.toLowerCase();
      return S !== "authorization" && S !== "x-api-key";
    })) : void 0,
    defaultHeaders_2 = u([c, defaultHeaders, {
      [Bt]: helper
    }]);
  return e.withOptions({
    apiKey: null,
    authToken: authToken,
    baseURL: e.baseURL,
    credentials: void 0,
    defaultHeaders: defaultHeaders_2
  });
}
var it,
  en,
  de,
  tn,
  rn,
  nn,
  Yt,
  Xt,
  at,
  Za = 999,
  ec = 1000,
  tc = 60000;
class Ve {
  constructor(e) {
    it.set(this, void 0), en.set(this, !1), de.set(this, void 0), tn.set(this, void 0), rn.set(this, void 0), nn.set(this, void 0), Yt.set(this, void 0), Xt.set(this, void 0), at.set(this, void 0), this.client = e.client, this.environmentId = e.environmentId, this.environmentKey = e.environmentKey, this.workerId = e.workerId ?? nc(), gr(this, it, Zr(e.client, {
      authToken: e.environmentKey,
      helper: "environments-work-poller"
    }), "f"), gr(this, rn, e.autoStop ?? !0, "f"), gr(this, nn, e.drain ?? !1, "f"), gr(this, Yt, e.blockMs === void 0 ? Za : e.blockMs, "f"), gr(this, Xt, e.reclaimOlderThanMs ?? null, "f"), gr(this, at, e.requestOptions, "f"), gr(this, de, new AbortController(), "f"), gr(this, tn, Ke(e.signal, He(this, de, "f")), "f");
  }
  get signal() {
    return He(this, de, "f").signal;
  }
  abort() {
    He(this, de, "f").abort();
  }
  async *[(it = new WeakMap(), en = new WeakMap(), de = new WeakMap(), tn = new WeakMap(), rn = new WeakMap(), nn = new WeakMap(), Yt = new WeakMap(), Xt = new WeakMap(), at = new WeakMap(), Symbol.asyncIterator)]() {
    if (He(this, en, "f")) throw new Wn("Cannot iterate over a consumed WorkPoller");
    gr(this, en, !0, "f");
    let e = H_(this.client);
    e.info("poller starting", {
      component: "work-poller",
      environment_id: this.environmentId
    });
    try {
      let r = 0;
      while (!He(this, de, "f").signal.aborted) {
        let n;
        try {
          n = await He(this, it, "f").beta.environments.work.poll(this.environmentId, {
            "Anthropic-Worker-ID": this.workerId,
            ...(He(this, Yt, "f") !== null ? {
              block_ms: He(this, Yt, "f")
            } : {}),
            ...(He(this, Xt, "f") !== null ? {
              reclaim_older_than_ms: He(this, Xt, "f")
            } : {})
          }, {
            headers: u([He(this, at, "f")?.headers]),
            signal: He(this, de, "f").signal
          });
        } catch (s) {
          if (He(this, de, "f").signal.aborted) return;
          if (Te(s)) throw e.error("poll failed permanently, stopping poller", {
            error: String(s)
          }), s;
          let backoff_ms = ri(rc(r));
          e.warn("poll failed, backing off", {
            error: String(s),
            backoff_ms: backoff_ms
          }), r++, await me(backoff_ms, He(this, de, "f").signal);
          continue;
        }
        if (r = 0, n == null) {
          if (He(this, nn, "f")) return;
          await me(ls(1000, 3000), He(this, de, "f").signal);
          continue;
        }
        e.info("claimed work", {
          component: "work-poller",
          environment_id: this.environmentId,
          work_id: n.id,
          work_type: n.data.type
        });
        try {
          await He(this, it, "f").beta.environments.work.ack(n.id, {
            environment_id: n.environment_id
          }, {
            headers: u([He(this, at, "f")?.headers]),
            signal: He(this, de, "f").signal
          });
        } catch (s) {
          e.error("ack failed", {
            work_id: n.id,
            error: String(s)
          });
          continue;
        }
        try {
          yield n;
        } finally {
          if (He(this, rn, "f")) try {
            await He(this, it, "f").beta.environments.work.stop(n.id, {
              environment_id: n.environment_id
            }, {
              headers: u([He(this, at, "f")?.headers])
            });
          } catch (s) {
            if (!Pe(s, 409)) e.warn("stop failed", {
              work_id: n.id,
              error: String(s)
            });
          }
        }
      }
    } finally {
      He(this, tn, "f").call(this);
    }
  }
}
function rc(e) {
  return ti(e, ec, tc);
}
function nc() {
  let r = globalThis.process?.env?.HOSTNAME;
  return r ? `${r}-${nt()}` : nt();
}
var ct, Ce, lt;
class us {
  constructor() {
    ct.set(this, []), Ce.set(this, []), lt.set(this, !1);
  }
  push(value_4) {
    if (He(this, lt, "f")) return !1;
    let r = He(this, Ce, "f").shift();
    if (r) r({
      done: !1,
      value: value_4
    });else He(this, ct, "f").push(value_4);
    return !0;
  }
  close() {
    if (He(this, lt, "f")) return;
    gr(this, lt, !0, "f");
    while (He(this, Ce, "f").length > 0) He(this, Ce, "f").shift()({
      done: !0,
      value: void 0
    });
  }
  next(e) {
    if (He(this, ct, "f").length > 0) return Promise.resolve({
      done: !1,
      value: He(this, ct, "f").shift()
    });
    if (He(this, lt, "f") || e?.aborted) return Promise.resolve({
      done: !0,
      value: void 0
    });
    return new Promise(r => {
      let n = o => {
          e?.removeEventListener("abort", s), r(o);
        },
        s = () => {
          let o = He(this, Ce, "f").indexOf(n);
          if (o >= 0) He(this, Ce, "f").splice(o, 1);
          r({
            done: !0,
            value: void 0
          });
        };
      He(this, Ce, "f").push(n), e?.addEventListener("abort", s, {
        once: !0
      });
    });
  }
  tryShift() {
    return He(this, ct, "f").shift();
  }
}
ct = new WeakMap(), Ce = new WeakMap(), lt = new WeakMap();
function ds(e) {
  return "name" in e ? e.name : e.mcp_server_name;
}
function sc(e) {
  return e instanceof ToolError ? e.content : `Error: ${e instanceof Error ? e.message : String(e)}`;
}
async function ni(e, r, n) {
  try {
    let s = e.parse ? e.parse(r) : r;
    return {
      content: await e.run(s, n),
      isError: !1
    };
  } catch (error) {
    return {
      content: sc(error),
      isError: !0
    };
  }
}
var Qt, un, ut, Je, _e, B, sn, Q, on, Zt, dn, Y, ft, ie, ht, Oe, dt, Ae, er, fe, an, di, si, oi, ii, fs, ai, cn, ln, hs, ci, fi;
var li = 500,
  oc = 1e4,
  ic = 120000,
  ac = 30000,
  ui = 3,
  cc = 60000;
function hi(e) {
  return e.type === "session.status_idle" && e.stop_reason?.type === "end_turn";
}
class pi {
  constructor(e, r) {
    Qt.set(this, void 0), un.set(this, void 0), ut.set(this, new Set()), Je.set(this, !1), _e.set(this, void 0), gr(this, Qt, e, "f"), gr(this, un, r, "f");
  }
  noteEvent(e) {
    if (e.type === "user.tool_confirmation") return;
    if (hi(e)) this.arm();else this.disarm();
  }
  block(e) {
    if (He(this, ut, "f").add(e), He(this, _e, "f") !== void 0) gr(this, Je, !0, "f"), clearTimeout(He(this, _e, "f")), gr(this, _e, void 0, "f");
  }
  unblock(e) {
    if (He(this, ut, "f").delete(e), He(this, ut, "f").size === 0 && He(this, Je, "f")) this.arm();
  }
  arm() {
    if (He(this, Qt, "f") <= 0) return;
    if (He(this, ut, "f").size > 0) {
      gr(this, Je, !0, "f");
      return;
    }
    if (gr(this, Je, !1, "f"), He(this, _e, "f") !== void 0) clearTimeout(He(this, _e, "f"));
    gr(this, _e, setTimeout(He(this, un, "f"), He(this, Qt, "f")), "f");
  }
  disarm() {
    if (gr(this, Je, !1, "f"), He(this, _e, "f") !== void 0) clearTimeout(He(this, _e, "f")), gr(this, _e, void 0, "f");
  }
}
Qt = new WeakMap(), un = new WeakMap(), ut = new WeakMap(), Je = new WeakMap(), _e = new WeakMap();
class Ge {
  constructor(e, r) {
    B.add(this), sn.set(this, !1), Q.set(this, void 0), on.set(this, void 0), Zt.set(this, void 0), dn.set(this, void 0), Y.set(this, void 0), ft.set(this, new Set()), ie.set(this, new Set()), ht.set(this, new Map()), Oe.set(this, new Map()), dt.set(this, new us()), Ae.set(this, 0), er.set(this, null), fe.set(this, void 0), this.client = r.client, this.sessionId = e, this.tools = r.tools, this.maxIdleMs = r.maxIdleMs ?? cc, gr(this, Y, H_(r.client), "f"), gr(this, dn, new Map(r.tools.map(item => [ds(item), item])), "f"), gr(this, Q, new AbortController(), "f"), gr(this, on, Ke(r.signal, He(this, Q, "f")), "f"), gr(this, Zt, r.requestOptions, "f"), gr(this, fe, new pi(this.maxIdleMs, () => {
      He(this, Y, "f").info("session idle after end_turn; stopping", {
        component: "session-tool-runner",
        session_id: this.sessionId,
        max_idle_ms: this.maxIdleMs
      }), He(this, Q, "f").abort();
    }), "f");
  }
  get signal() {
    return He(this, Q, "f").signal;
  }
  abort() {
    He(this, Q, "f").abort();
  }
  async *[(sn = new WeakMap(), Q = new WeakMap(), on = new WeakMap(), Zt = new WeakMap(), dn = new WeakMap(), Y = new WeakMap(), ft = new WeakMap(), ie = new WeakMap(), ht = new WeakMap(), Oe = new WeakMap(), dt = new WeakMap(), Ae = new WeakMap(), er = new WeakMap(), fe = new WeakMap(), B = new WeakSet(), Symbol.asyncIterator)]() {
    if (He(this, sn, "f")) throw new Wn("Cannot iterate over a consumed SessionToolRunner");
    gr(this, sn, !0, "f"), He(this, Y, "f").info("session tool runner starting", {
      component: "session-tool-runner",
      session_id: this.sessionId
    });
    let e = He(this, B, "m", di).call(this).catch(r => {
      if (!He(this, Q, "f").signal.aborted) He(this, Y, "f").error("stream loop failed", {
        error: String(r)
      });
      He(this, Q, "f").abort();
    });
    try {
      while (!0) {
        let n = await He(this, dt, "f").next(He(this, Q, "f").signal);
        if (n.done) break;
        yield n.value;
      }
      await e;
      let r;
      while ((r = He(this, dt, "f").tryShift()) !== void 0) yield r;
    } finally {
      He(this, Q, "f").abort(), He(this, fe, "f").disarm(), await e;
      try {
        await He(this, B, "m", fi).call(this);
      } catch (r) {
        He(this, Y, "f").warn("drain failed", {
          error: String(r)
        });
      }
      He(this, dt, "f").close();
      for (let r of this.tools) try {
        await r.close?.();
      } catch (n) {
        He(this, Y, "f").warn("tool.close failed", {
          tool: ds(r),
          error: String(n)
        });
      }
      He(this, on, "f").call(this);
    }
  }
}
an = function () {
  return {
    ...He(this, Zt, "f"),
    headers: u([Wt("session-tool-runner"), He(this, Zt, "f")?.headers]),
    signal: He(this, Q, "f").signal
  };
}, di = async function () {
  let r = He(this, Q, "f"),
    backoff_ms_2 = li;
  while (!r.signal.aborted) {
    try {
      let s = await this.client.beta.sessions.events.stream(this.sessionId, {}, He(this, B, "m", an).call(this));
      await He(this, B, "m", si).call(this);
      for await (let o of s) if (backoff_ms_2 = li, await He(this, B, "m", ii).call(this, o)) return;
    } catch (s) {
      if (r.signal.throwIfAborted(), Te(s)) throw He(this, Y, "f").error("permanent stream failure, shutting down", {
        error: String(s)
      }), r.abort(), s;
      He(this, Y, "f").warn("stream disconnected, reconnecting", {
        error: String(s),
        backoff_ms: backoff_ms_2
      });
    }
    r.signal.throwIfAborted(), await me(backoff_ms_2, r.signal), backoff_ms_2 = Math.min(backoff_ms_2 * 2, oc);
  }
}, si = async function () {
  let r = He(this, Q, "f"),
    n = [],
    s = !1;
  try {
    for await (let c of this.client.beta.sessions.events.list(this.sessionId, {
      limit: 1000
    }, He(this, B, "m", an).call(this))) He(this, B, "m", oi).call(this, c, n), s = hi(c);
  } catch (c) {
    r.signal.throwIfAborted(), He(this, Y, "f").warn("reconcile list failed", {
      error: String(c)
    });
    for (let a of n) He(this, ft, "f").delete(a.id);
    return;
  }
  let o = n.filter(item => !He(this, ie, "f").has(item.id));
  He(this, fe, "f").disarm();
  for (let c of o) await He(this, B, "m", fs).call(this, c);
  for (let c of [...He(this, Oe, "f").values()]) {
    let a = He(this, ht, "f").get(c.id);
    if (a !== void 0) await He(this, B, "m", cn).call(this, c, a);
  }
  let i = o.filter(item => !He(this, ie, "f").has(item.id) && !He(this, Oe, "f").has(item.id));
  if (s && i.length === 0) He(this, fe, "f").arm();else He(this, fe, "f").disarm();
}, oi = function (r, n) {
  if (r.type === "agent.tool_use" || r.type === "agent.custom_tool_use") {
    if (He(this, ft, "f").add(r.id), !He(this, ie, "f").has(r.id)) n.push(r);
  } else if (r.type === "user.tool_result") He(this, ie, "f").add(r.tool_use_id);else if (r.type === "user.custom_tool_result") He(this, ie, "f").add(r.custom_tool_use_id);else if (r.type === "user.tool_confirmation") {
    if (!He(this, ie, "f").has(r.tool_use_id)) He(this, ht, "f").set(r.tool_use_id, r.result);
  }
}, ii = async function (r) {
  switch (He(this, fe, "f").noteEvent(r), r.type) {
    case "agent.tool_use":
    case "agent.custom_tool_use":
      if (!He(this, ft, "f").has(r.id)) He(this, ft, "f").add(r.id), await He(this, B, "m", fs).call(this, r);
      return !1;
    case "user.tool_confirmation":
      return await He(this, B, "m", ai).call(this, r), !1;
    case "user.tool_result":
      return He(this, ie, "f").add(r.tool_use_id), !1;
    case "user.custom_tool_result":
      return He(this, ie, "f").add(r.custom_tool_use_id), !1;
    case "session.status_terminated":
    case "session.deleted":
      return He(this, Y, "f").info("session terminated", {
        component: "session-tool-runner",
        session_id: this.sessionId
      }), He(this, Q, "f").abort(), !0;
    default:
      return !1;
  }
}, fs = async function (r) {
  let evaluated_permission = r.evaluated_permission,
    s = evaluated_permission === "deny" ? "deny" : He(this, ht, "f").get(r.id);
  if (s === void 0) {
    if (evaluated_permission === void 0 || evaluated_permission === "allow") await He(this, B, "m", hs).call(this, r, void 0);else if (!He(this, Oe, "f").has(r.id)) He(this, Y, "f").info("tool call awaiting confirmation; holding", {
      component: "session-tool-runner",
      session_id: this.sessionId,
      tool: r.name,
      tool_use_id: r.id
    }), He(this, Oe, "f").set(r.id, r), He(this, fe, "f").block(r.id);
    return;
  }
  await He(this, B, "m", cn).call(this, r, s);
}, ai = async function (r) {
  He(this, ht, "f").set(r.tool_use_id, r.result);
  let n = He(this, Oe, "f").get(r.tool_use_id);
  if (n === void 0) return;
  await He(this, B, "m", cn).call(this, n, r.result);
}, cn = async function (event, n) {
  let s = He(this, Oe, "f").delete(event.id);
  if (n === "allow") {
    if (He(this, Y, "f").info("tool call confirmed", {
      component: "session-tool-runner",
      session_id: this.sessionId,
      tool: event.name,
      tool_use_id: event.id
    }), !s) He(this, fe, "f").block(event.id);
    try {
      await He(this, B, "m", hs).call(this, event, "allow");
    } finally {
      He(this, fe, "f").unblock(event.id);
    }
    return;
  }
  if (s) He(this, fe, "f").unblock(event.id);
  He(this, ie, "f").add(event.id), He(this, Y, "f").info("tool call denied; not executing", {
    component: "session-tool-runner",
    session_id: this.sessionId,
    tool: event.name,
    tool_use_id: event.id
  }), He(this, B, "m", ln).call(this, {
    event: event,
    toolUseId: event.id,
    name: event.name,
    isError: !1,
    posted: !1,
    confirmation: "deny"
  });
}, ln = function (r) {
  He(this, dt, "f").push(r);
}, hs = async function (r, confirmation) {
  var s, o;
  if (He(this, ie, "f").has(r.id)) return;
  He(this, Y, "f").info("executing tool", {
    component: "session-tool-runner",
    session_id: this.sessionId,
    tool: r.name,
    tool_use_id: r.id
  }), gr(this, Ae, (s = He(this, Ae, "f"), s++, s), "f");
  try {
    let i = He(this, dn, "f").get(r.name);
    if (!i) {
      He(this, Y, "f").info("tool not owned by this runner; leaving the tool_use_id pending for its owner", {
        component: "session-tool-runner",
        session_id: this.sessionId,
        tool: r.name,
        tool_use_id: r.id
      }), He(this, B, "m", ln).call(this, {
        event: r,
        toolUseId: r.id,
        name: r.name,
        isError: !1,
        posted: !1,
        confirmation: confirmation
      });
      return;
    }
    let c,
      isError,
      abortController = new AbortController(),
      S = Ke(He(this, Q, "f").signal, abortController),
      E = setTimeout(() => abortController.abort(), ic);
    try {
      let w = await ni(i, r.input, {
        toolUse: r,
        toolUseBlock: r,
        signal: abortController.signal
      });
      c = w.content, isError = w.isError;
    } finally {
      clearTimeout(E), S();
    }
    let result = lc(r, isError, uc(c)),
      posted = await He(this, B, "m", ci).call(this, result, r.id);
    He(this, B, "m", ln).call(this, {
      event: r,
      result: result,
      toolUseId: r.id,
      name: r.name,
      isError: isError,
      posted: posted,
      confirmation: confirmation
    });
  } finally {
    if (gr(this, Ae, (o = He(this, Ae, "f"), o--, o), "f"), He(this, Ae, "f") === 0) He(this, er, "f")?.call(this);
  }
}, ci = async function (r, tool_use_id) {
  let s = He(this, Q, "f"),
    o;
  for (let i = 0; i < ui; i++) {
    s.signal.throwIfAborted();
    try {
      return await this.client.beta.sessions.events.send(this.sessionId, {
        events: [r]
      }, He(this, B, "m", an).call(this)), He(this, ie, "f").add(tool_use_id), !0;
    } catch (error) {
      if (o = error, Te(error)) break;
      if (i < ui - 1) await me((i + 1) * 1000, s.signal);
    }
  }
  return He(this, Y, "f").error("failed to send tool result", {
    tool_use_id: tool_use_id,
    error: String(o)
  }), !1;
}, fi = async function () {
  if (He(this, Ae, "f") === 0) return;
  if (await Promise.race([new Promise(r => gr(this, er, r, "f")), me(ac)]), gr(this, er, null, "f"), He(this, Ae, "f") > 0) He(this, Y, "f").warn("drain timeout exceeded");
};
function lc(e, is_error, content_2) {
  if (e.type === "agent.custom_tool_use") return {
    type: "user.custom_tool_result",
    custom_tool_use_id: e.id,
    is_error: is_error,
    content: content_2
  };
  return {
    type: "user.tool_result",
    tool_use_id: e.id,
    is_error: is_error,
    content: content_2
  };
}
function uc(e) {
  if (typeof e === "string") return [{
    type: "text",
    text: e || "(no output)"
  }];
  let r = e.map(item => {
    if (item.type === "text") return {
      type: "text",
      text: item.text || "(no output)"
    };
    if (item.type === "image" || item.type === "document") return item;
    if (item.type === "search_result") return {
      type: "search_result",
      source: item.source,
      title: item.title,
      content: item.content.map(item => ({
        type: "text",
        text: item.text
      })),
      citations: {
        enabled: item.citations?.enabled ?? !1
      }
    };
    return {
      type: "text",
      text: JSON.stringify(item)
    };
  });
  return r.length > 0 ? r : [{
    type: "text",
    text: "(no output)"
  }];
}
var fn,
  tr,
  ps,
  mi = 30000,
  dc = "NO_HEARTBEAT";
class rr {
  constructor(e) {
    fn.add(this), tr.set(this, void 0), this.client = e.client, this.environmentId = e.environmentId, this.environmentKey = e.environmentKey, this.tools = e.tools, this.workdir = e.workdir ?? process.cwd(), this.unrestrictedPaths = e.unrestrictedPaths, this.maxFileBytes = e.maxFileBytes, this.maxIdleMs = e.maxIdleMs, this.workerId = e.workerId, this.requestOptions = e.requestOptions, gr(this, tr, e.signal, "f");
  }
  async run(e) {
    let {
      environmentId: environmentId,
      environmentKey: environmentKey
    } = this;
    if (environmentId === void 0 || environmentKey === void 0) throw new Wn("EnvironmentWorker.run: environmentId and environmentKey are required to poll for work");
    let signal = e ?? He(this, tr, "f"),
      o = new Ve({
        client: this.client,
        environmentId: environmentId,
        environmentKey: environmentKey,
        ...(this.workerId !== void 0 ? {
          workerId: this.workerId
        } : {}),
        ...(signal ? {
          signal: signal
        } : {}),
        ...(this.requestOptions !== void 0 ? {
          requestOptions: this.requestOptions
        } : {}),
        autoStop: !1
      });
    for await (let i of o) await He(this, fn, "m", ps).call(this, i, environmentKey, o.signal);
  }
  async handleItem(e) {
    let id = e?.workId ?? O("ANTHROPIC_WORK_ID"),
      environment_id = e?.environmentId ?? O("ANTHROPIC_ENVIRONMENT_ID"),
      id_2 = e?.sessionId ?? O("ANTHROPIC_SESSION_ID"),
      o = e?.environmentKey ?? this.environmentKey ?? O("ANTHROPIC_ENVIRONMENT_KEY");
    if (!id) throw new Wn("handleItem: workId is required \u2014 pass it or set ANTHROPIC_WORK_ID");
    if (!environment_id) throw new Wn("handleItem: environmentId is required \u2014 pass it or set ANTHROPIC_ENVIRONMENT_ID");
    if (!id_2) throw new Wn("handleItem: sessionId is required \u2014 pass it or set ANTHROPIC_SESSION_ID");
    if (!o) throw new Wn("handleItem: environmentKey is required \u2014 pass it, construct the worker with it, or set ANTHROPIC_ENVIRONMENT_KEY");
    let i = {
      id: id,
      environment_id: environment_id,
      data: {
        type: "session",
        id: id_2
      }
    };
    await He(this, fn, "m", ps).call(this, i, o, e?.signal ?? He(this, tr, "f"));
  }
}
tr = new WeakMap(), fn = new WeakSet(), ps = async function (r, authToken_2, s) {
  let o = H_(this.client),
    client = Zr(this.client, {
      authToken: authToken_2,
      helper: "environments-worker"
    }),
    c = r.data.id,
    a = {
      workdir: this.workdir,
      client: this.client,
      sessionId: c,
      ...(this.unrestrictedPaths !== void 0 ? {
        unrestrictedPaths: this.unrestrictedPaths
      } : {}),
      ...(this.maxFileBytes !== void 0 ? {
        maxFileBytes: this.maxFileBytes
      } : {})
    },
    d = await import("B:/~BUN/root/chunk-qsyb6sgr.js"),
    S = async () => {};
  try {
    S = await d.setupSkills(a);
  } catch (A) {
    o.warn("skill setup failed", {
      session_id: c,
      work_id: r.id,
      error: String(A)
    });
  }
  let tools = typeof this.tools === "function" ? this.tools(a) : this.tools ?? d.betaAgentToolset20260401(a),
    abortController_2 = new AbortController(),
    f = Ke(s, abortController_2),
    w = pc(client, r, abortController_2, o, this.requestOptions).catch(A => {
      if (!abortController_2.signal.aborted) o.error("heartbeat loop failed", {
        work_id: r.id,
        error: String(A)
      });
      abortController_2.abort();
    });
  try {
    let A = new Ge(c, {
      client: client,
      tools: tools,
      ...(this.maxIdleMs !== void 0 ? {
        maxIdleMs: this.maxIdleMs
      } : {}),
      ...(this.requestOptions !== void 0 ? {
        requestOptions: this.requestOptions
      } : {}),
      signal: abortController_2.signal
    });
    for await (let C of A);
  } finally {
    abortController_2.abort(), f(), await w, await S().catch(A => {
      o.warn("skill cleanup failed", {
        session_id: c,
        work_id: r.id,
        error: String(A)
      });
    }), await hc(client, r, o, this.requestOptions);
  }
};
async function hc(e, r, n, s) {
  try {
    await e.beta.environments.work.stop(r.id, {
      environment_id: r.environment_id,
      force: !0
    }, {
      ...s,
      headers: u([s?.headers])
    });
  } catch (o) {
    if (!Pe(o, 409)) n.error("force-stop on exit failed", {
      work_id: r.id,
      error: String(o)
    });
  }
}
async function pc(e, r, n, s, o) {
  let i = mi,
    expected_last_heartbeat = dc,
    a = async () => {
      try {
        let d = await e.beta.environments.work.heartbeat(r.id, {
          environment_id: r.environment_id,
          expected_last_heartbeat: expected_last_heartbeat
        }, {
          ...o,
          headers: u([o?.headers]),
          signal: n.signal
        });
        if (expected_last_heartbeat = d.last_heartbeat, d.ttl_seconds > 0) i = Math.max(1000, Math.min(d.ttl_seconds * 1000 / 2, mi));
        if (d.state === "stopping" || d.state === "stopped") s.info("heartbeat signals shutdown", {
          work_id: r.id,
          state: d.state
        }), n.abort();
        if (!d.lease_extended) s.warn("lease not extended, shutting down", {
          work_id: r.id
        }), n.abort();
      } catch (d) {
        if (n.signal.throwIfAborted(), Te(d)) throw s.error("permanent heartbeat failure", {
          work_id: r.id,
          error: String(d)
        }), n.abort(), d;
        s.warn("transient heartbeat failure", {
          work_id: r.id,
          error: String(d)
        });
      }
    };
  await a();
  while (!n.signal.aborted) await me(i, n.signal), n.signal.throwIfAborted(), await a();
}
class ze extends R {
  retrieve(e, r, n) {
    let {
      environment_id: environment_id_2,
      betas: betas_34
    } = r;
    return this._client.get(g`/v1/environments/${environment_id_2}/work/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_34 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      environment_id: environment_id_3,
      betas: betas_35,
      ...body_11
    } = r;
    return this._client.post(g`/v1/environments/${environment_id_3}/work/${e}?beta=true`, {
      body: body_11,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_35 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  list(e, r = {}, n) {
    let {
      betas: betas_36,
      ...query_10
    } = r ?? {};
    return this._client.getAPIList(g`/v1/environments/${e}/work?beta=true`, T, {
      query: query_10,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_36 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  ack(e, r, n) {
    let {
      environment_id: environment_id_4,
      betas: betas_37
    } = r;
    return this._client.post(g`/v1/environments/${environment_id_4}/work/${e}/ack?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_37 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  heartbeat(e, r, n) {
    let {
      environment_id: environment_id_5,
      desired_ttl_seconds: desired_ttl_seconds,
      expected_last_heartbeat: expected_last_heartbeat_2,
      betas: betas_38
    } = r;
    return this._client.post(g`/v1/environments/${environment_id_5}/work/${e}/heartbeat?beta=true`, {
      query: {
        desired_ttl_seconds: desired_ttl_seconds,
        expected_last_heartbeat: expected_last_heartbeat_2
      },
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_38 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  poll(e, r = {}, n) {
    let {
      betas: betas_39,
      "Anthropic-Worker-ID": o,
      ...query_11
    } = r ?? {};
    return this._client.get(g`/v1/environments/${e}/work/poll?beta=true`, {
      query: query_11,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_39 ?? []), "managed-agents-2026-04-01"].toString(),
        ...(o != null ? {
          "Anthropic-Worker-ID": o
        } : void 0)
      }, n?.headers])
    });
  }
  stats(e, r = {}, n) {
    let {
      betas: betas_40
    } = r ?? {};
    return this._client.get(g`/v1/environments/${e}/work/stats?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_40 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  stop(e, r, n) {
    let {
      environment_id: environment_id_6,
      betas: betas_41,
      ...body_12
    } = r;
    return this._client.post(g`/v1/environments/${environment_id_6}/work/${e}/stop?beta=true`, {
      body: body_12,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_41 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  poller(e) {
    return new Ve({
      ...e,
      client: this._client
    });
  }
  worker(e) {
    return new rr({
      ...e,
      client: this._client
    });
  }
}
ze.WorkPoller = Ve;
ze.EnvironmentWorker = rr;
class pt extends R {
  constructor() {
    super(...arguments);
    this.work = new ze(this._client);
  }
  create(e, r) {
    let {
      betas: betas_42,
      ...body_13
    } = e;
    return this._client.post("/v1/environments?beta=true", {
      body: body_13,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_42 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_43
    } = r ?? {};
    return this._client.get(g`/v1/environments/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_43 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      betas: betas_44,
      ...body_14
    } = r;
    return this._client.post(g`/v1/environments/${e}?beta=true`, {
      body: body_14,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_44 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_45,
      ...query_12
    } = e ?? {};
    return this._client.getAPIList("/v1/environments?beta=true", T, {
      query: query_12,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_45 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
  delete(e, r = {}, n) {
    let {
      betas: betas_46
    } = r ?? {};
    return this._client.delete(g`/v1/environments/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_46 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  archive(e, r = {}, n) {
    let {
      betas: betas_47
    } = r ?? {};
    return this._client.post(g`/v1/environments/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_47 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
}
pt.Work = ze;
class nr extends R {
  create(e, r, n) {
    let {
      view: view,
      betas: betas_48,
      ...body_15
    } = r;
    return this._client.post(g`/v1/memory_stores/${e}/memories?beta=true`, {
      query: {
        view: view
      },
      body: body_15,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_48 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
  retrieve(e, r, n) {
    let {
      memory_store_id: memory_store_id,
      betas: betas_49,
      ...query_13
    } = r;
    return this._client.get(g`/v1/memory_stores/${memory_store_id}/memories/${e}?beta=true`, {
      query: query_13,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_49 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      memory_store_id: memory_store_id_2,
      view: view_2,
      betas: betas_50,
      ...body_16
    } = r;
    return this._client.post(g`/v1/memory_stores/${memory_store_id_2}/memories/${e}?beta=true`, {
      query: {
        view: view_2
      },
      body: body_16,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_50 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
  list(e, r = {}, n) {
    let {
      betas: betas_51,
      ...query_14
    } = r ?? {};
    return this._client.getAPIList(g`/v1/memory_stores/${e}/memories?beta=true`, T, {
      query: query_14,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_51 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
  delete(e, r, n) {
    let {
      memory_store_id: memory_store_id_3,
      expected_content_sha256: expected_content_sha256,
      betas: betas_52
    } = r;
    return this._client.delete(g`/v1/memory_stores/${memory_store_id_3}/memories/${e}?beta=true`, {
      query: {
        expected_content_sha256: expected_content_sha256
      },
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_52 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
}
class sr extends R {
  retrieve(e, r, n) {
    let {
      memory_store_id: memory_store_id_4,
      betas: betas_53,
      ...query_15
    } = r;
    return this._client.get(g`/v1/memory_stores/${memory_store_id_4}/memory_versions/${e}?beta=true`, {
      query: query_15,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_53 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
  list(e, r = {}, n) {
    let {
      betas: betas_54,
      ...query_16
    } = r ?? {};
    return this._client.getAPIList(g`/v1/memory_stores/${e}/memory_versions?beta=true`, T, {
      query: query_16,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_54 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
  redact(e, r, n) {
    let {
      memory_store_id: memory_store_id_5,
      betas: betas_55
    } = r;
    return this._client.post(g`/v1/memory_stores/${memory_store_id_5}/memory_versions/${e}/redact?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_55 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
}
class Ye extends R {
  constructor() {
    super(...arguments);
    this.memories = new nr(this._client), this.memoryVersions = new sr(this._client);
  }
  create(e, r) {
    let {
      betas: betas_56,
      ...body_17
    } = e;
    return this._client.post("/v1/memory_stores?beta=true", {
      body: body_17,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_56 ?? []), "agent-memory-2026-07-22"].toString()
      }, r?.headers])
    });
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_57
    } = r ?? {};
    return this._client.get(g`/v1/memory_stores/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_57 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      betas: betas_58,
      ...body_18
    } = r;
    return this._client.post(g`/v1/memory_stores/${e}?beta=true`, {
      body: body_18,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_58 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_59,
      ...query_17
    } = e ?? {};
    return this._client.getAPIList("/v1/memory_stores?beta=true", T, {
      query: query_17,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_59 ?? []), "agent-memory-2026-07-22"].toString()
      }, r?.headers])
    });
  }
  delete(e, r = {}, n) {
    let {
      betas: betas_60
    } = r ?? {};
    return this._client.delete(g`/v1/memory_stores/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_60 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
  archive(e, r = {}, n) {
    let {
      betas: betas_61
    } = r ?? {};
    return this._client.post(g`/v1/memory_stores/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_61 ?? []), "agent-memory-2026-07-22"].toString()
      }, n?.headers])
    });
  }
}
Ye.Memories = nr;
Ye.MemoryVersions = sr;
class mt {
  constructor(e, r) {
    this.iterator = e, this.controller = r;
  }
  async *decoder() {
    let e = new Ie();
    for await (let r of this.iterator) for (let n of e.decode(r)) yield JSON.parse(n);
    for (let r of e.flush()) yield JSON.parse(r);
  }
  [Symbol.asyncIterator]() {
    return this.decoder();
  }
  static fromResponse(e, r) {
    if (!e.body) {
      if (r.abort(), typeof globalThis.navigator < "u" && globalThis.navigator.product === "ReactNative") throw new Wn("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api");
      throw new Wn("Attempted to iterate over a response with no body");
    }
    return new mt(Ct(e.body), r);
  }
}
class or extends R {
  create(e, r) {
    let {
      betas: betas_62,
      user_profile_id: user_profile_id,
      ...body_19
    } = e;
    return this._client.post("/v1/messages/batches?beta=true", {
      body: body_19,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_62 ?? []), "message-batches-2024-09-24"].toString(),
        ...(user_profile_id != null ? {
          "anthropic-user-profile-id": user_profile_id
        } : void 0)
      }, r?.headers])
    });
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_63
    } = r ?? {};
    return this._client.get(g`/v1/messages/batches/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_63 ?? []), "message-batches-2024-09-24"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_64,
      ...query_18
    } = e ?? {};
    return this._client.getAPIList("/v1/messages/batches?beta=true", ge, {
      query: query_18,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_64 ?? []), "message-batches-2024-09-24"].toString()
      }, r?.headers])
    });
  }
  delete(e, r = {}, n) {
    let {
      betas: betas_65
    } = r ?? {};
    return this._client.delete(g`/v1/messages/batches/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_65 ?? []), "message-batches-2024-09-24"].toString()
      }, n?.headers])
    });
  }
  cancel(e, r = {}, n) {
    let {
      betas: betas_66
    } = r ?? {};
    return this._client.post(g`/v1/messages/batches/${e}/cancel?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_66 ?? []), "message-batches-2024-09-24"].toString()
      }, n?.headers])
    });
  }
  async results(e, r = {}, n) {
    let s = await this.retrieve(e);
    if (!s.results_url) throw new Wn(`No batch \`results_url\`; Has it finished processing? ${s.processing_status} - ${s.id}`);
    let {
      betas: betas_67
    } = r ?? {};
    return this._client.get(s.results_url, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_67 ?? []), "message-batches-2024-09-24"].toString(),
        Accept: "application/binary"
      }, n?.headers]),
      stream: !0,
      __binaryResponse: !0
    })._thenUnwrap((i, c) => mt.fromResponse(c.response, c.controller));
  }
}
var hn = {
  "claude-opus-4-20250514": 8192,
  "claude-opus-4-0": 8192,
  "claude-4-opus-20250514": 8192,
  "anthropic.claude-opus-4-20250514-v1:0": 8192,
  "claude-opus-4@20250514": 8192,
  "claude-opus-4-1-20250805": 8192,
  "anthropic.claude-opus-4-1-20250805-v1:0": 8192,
  "claude-opus-4-1@20250805": 8192
};
function gi(e) {
  return e?.output_format ?? e?.output_config?.format;
}
function ms(e, r, n) {
  let s = gi(r);
  if (!r || !("parse" in (s ?? {}))) return {
    ...e,
    content: e.content.map(item => {
      if (item.type === "text") {
        let i = Object.defineProperty({
          ...item
        }, "parsed_output", {
          value: null,
          enumerable: !1
        });
        return Object.defineProperty(i, "parsed", {
          get() {
            return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."), null;
          },
          enumerable: !1
        });
      }
      return item;
    }),
    parsed_output: null
  };
  return gs(e, r, n);
}
function gs(e, r, n) {
  let parsed_output = null,
    content_3 = e.content.map(item => {
      if (item.type === "text") {
        let value_5 = wc(r, item.text);
        if (parsed_output === null) parsed_output = value_5;
        let a = Object.defineProperty({
          ...item
        }, "parsed_output", {
          value: value_5,
          enumerable: !1
        });
        return Object.defineProperty(a, "parsed", {
          get() {
            return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."), value_5;
          },
          enumerable: !1
        });
      }
      return item;
    });
  return {
    ...e,
    content: content_3,
    parsed_output: parsed_output
  };
}
function wc(e, r) {
  let n = gi(e);
  if (n?.type !== "json_schema") return null;
  try {
    if ("parse" in n) return n.parse(r);
    return JSON.parse(r);
  } catch (error) {
    throw new Wn(`Failed to parse structured output: ${error}`);
  }
}
var Ec = e => {
    let r = 0,
      n = [];
    while (r < e.length) {
      let s = e[r];
      if (s === "\\") {
        r++;
        continue;
      }
      if (s === "{") {
        n.push({
          type: "brace",
          value: "{"
        }), r++;
        continue;
      }
      if (s === "}") {
        n.push({
          type: "brace",
          value: "}"
        }), r++;
        continue;
      }
      if (s === "[") {
        n.push({
          type: "paren",
          value: "["
        }), r++;
        continue;
      }
      if (s === "]") {
        n.push({
          type: "paren",
          value: "]"
        }), r++;
        continue;
      }
      if (s === ":") {
        n.push({
          type: "separator",
          value: ":"
        }), r++;
        continue;
      }
      if (s === ",") {
        n.push({
          type: "delimiter",
          value: ","
        }), r++;
        continue;
      }
      if (s === '"') {
        let value_6 = "",
          d = !1;
        s = e[++r];
        while (s !== '"') {
          if (r === e.length) {
            d = !0;
            break;
          }
          if (s === "\\") {
            if (r++, r === e.length) {
              d = !0;
              break;
            }
            value_6 += s + e[r], s = e[++r];
          } else value_6 += s, s = e[++r];
        }
        if (s = e[++r], !d) n.push({
          type: "string",
          value: value_6
        });
        continue;
      }
      if (s && /\s/.test(s)) {
        r++;
        continue;
      }
      let i = /[0-9]/;
      if (s && i.test(s) || s === "-" || s === ".") {
        let value_7 = "";
        if (s === "-") value_7 += s, s = e[++r];
        while (s && (i.test(s) || s === "." || s === "e" || s === "E" || (s === "-" || s === "+") && (value_7[value_7.length - 1] === "e" || value_7[value_7.length - 1] === "E"))) value_7 += s, s = e[++r];
        n.push({
          type: "number",
          value: value_7
        });
        continue;
      }
      let c = /[a-z]/i;
      if (s && c.test(s)) {
        let value_8 = "";
        while (s && c.test(s)) {
          if (r === e.length) break;
          value_8 += s, s = e[++r];
        }
        if (value_8 == "true" || value_8 == "false" || value_8 === "null") n.push({
          type: "name",
          value: value_8
        });else {
          r++;
          continue;
        }
        continue;
      }
      r++;
    }
    return n;
  },
  gt = e => {
    if (e.length === 0) return e;
    let r = e[e.length - 1];
    switch (r.type) {
      case "separator":
        return e = e.slice(0, e.length - 1), gt(e);
        break;
      case "number":
        let n = r.value[r.value.length - 1];
        if (n === "." || n === "-" || n === "+" || n === "e" || n === "E") return e = e.slice(0, e.length - 1), gt(e);
      case "string":
        let s = e[e.length - 2];
        if (s?.type === "delimiter") return e = e.slice(0, e.length - 1), gt(e);else if (s?.type === "brace" && s.value === "{") return e = e.slice(0, e.length - 1), gt(e);
        break;
      case "delimiter":
        return e = e.slice(0, e.length - 1), gt(e);
        break;
    }
    return e;
  },
  kc = e => {
    let r = [];
    if (e.map(item => {
      if (item.type === "brace") if (item.value === "{") r.push("}");else r.splice(r.lastIndexOf("}"), 1);
      if (item.type === "paren") if (item.value === "[") r.push("]");else r.splice(r.lastIndexOf("]"), 1);
    }), r.length > 0) r.reverse().map(item => {
      if (item === "}") e.push({
        type: "brace",
        value: "}"
      });else if (item === "]") e.push({
        type: "paren",
        value: "]"
      });
    });
    return e;
  },
  xc = e => {
    let r = "";
    return e.map(item => {
      switch (item.type) {
        case "string":
          r += '"' + item.value + '"';
          break;
        default:
          r += item.value;
          break;
      }
    }), r;
  },
  _i = e => JSON.parse(xc(kc(gt(Ec(e)))));
var Me = "__json_buf";
function pn(e, value_9) {
  let n = {};
  for (let i of Object.keys(e)) if (i !== "input") n[i] = e[i];
  Object.defineProperty(n, Me, {
    value: value_9,
    enumerable: !1,
    writable: !0
  });
  let s,
    o = !1;
  return Object.defineProperty(n, "input", {
    enumerable: !0,
    configurable: !0,
    get() {
      if (!o) s = value_9 ? _i(value_9) : {}, o = !0;
      return s;
    }
  }), n;
}
var te, Ne, _t, ir, mn, ar, cr, gn, lr, Ee, ur, _n, yn, Xe, Sn, wn, dr, _s, yi, fr, ys, bs, Ss, bi, ws;
function Es(e) {
  return e.type === "tool_use" || e.type === "server_tool_use" || e.type === "mcp_tool_use";
}
class hr {
  constructor(e, r) {
    te.add(this), this.messages = [], this.receivedMessages = [], Ne.set(this, void 0), _t.set(this, null), this.controller = new AbortController(), ir.set(this, void 0), mn.set(this, () => {}), ar.set(this, () => {}), cr.set(this, void 0), gn.set(this, () => {}), lr.set(this, () => {}), Ee.set(this, {}), ur.set(this, !1), _n.set(this, !1), yn.set(this, !1), Xe.set(this, !1), Sn.set(this, void 0), wn.set(this, void 0), dr.set(this, void 0), fr.set(this, n => {
      if (gr(this, _n, !0, "f"), qde(n)) n = new _u();
      if (n instanceof _u) return gr(this, yn, !0, "f"), this._emit("abort", n);
      if (n instanceof Wn) return this._emit("error", n);
      if (n instanceof Error) {
        let s = new Wn(n.message);
        return s.cause = n, this._emit("error", s);
      }
      return this._emit("error", new Wn(String(n)));
    }), gr(this, ir, new Promise((n, s) => {
      gr(this, mn, n, "f"), gr(this, ar, s, "f");
    }), "f"), gr(this, cr, new Promise((n, s) => {
      gr(this, gn, n, "f"), gr(this, lr, s, "f");
    }), "f"), He(this, ir, "f").catch(() => {}), He(this, cr, "f").catch(() => {}), gr(this, _t, e, "f"), gr(this, dr, r?.logger ?? console, "f");
  }
  get response() {
    return He(this, Sn, "f");
  }
  get request_id() {
    return He(this, wn, "f");
  }
  async withResponse() {
    gr(this, Xe, !0, "f");
    let response_3 = await He(this, ir, "f");
    if (!response_3) throw Error("Could not resolve a `Response` object");
    return {
      data: this,
      response: response_3,
      request_id: response_3.headers.get("request-id")
    };
  }
  static fromReadableStream(e) {
    let r = new hr(null);
    return r._run(() => r._fromReadableStream(e)), r;
  }
  static createMessage(e, r, n, {
    logger: logger_2
  } = {}) {
    let o = new hr(r, {
      logger: logger_2
    });
    for (let i of r.messages) o._addMessageParam(i);
    return gr(o, _t, {
      ...r,
      stream: !0
    }, "f"), o._run(() => o._createMessage(e, {
      ...r,
      stream: !0
    }, {
      ...n,
      headers: {
        ...n?.headers,
        [zr]: "stream"
      }
    })), o;
  }
  _run(e) {
    e().then(() => {
      this._emitFinal(), this._emit("end");
    }, He(this, fr, "f"));
  }
  _addMessageParam(e) {
    this.messages.push(e);
  }
  _addMessage(e, r = !0) {
    if (this.receivedMessages.push(e), r) this._emit("message", e);
  }
  async _createMessage(e, r, n) {
    let s = n?.signal,
      o;
    if (s) {
      if (s.aborted) this.controller.abort();
      o = this.controller.abort.bind(this.controller), s.addEventListener("abort", o);
    }
    try {
      He(this, te, "m", ys).call(this);
      let {
        response: response_4,
        data: data_5
      } = await e.create({
        ...r,
        stream: !0
      }, {
        ...n,
        signal: this.controller.signal
      }).withResponse();
      this._connected(response_4);
      for await (let a of data_5) He(this, te, "m", bs).call(this, a);
      if (data_5.controller.signal?.aborted) throw new _u();
      He(this, te, "m", Ss).call(this);
    } finally {
      if (s && o) s.removeEventListener("abort", o);
    }
  }
  _connected(e) {
    if (this.ended) return;
    gr(this, Sn, e, "f"), gr(this, wn, e?.headers.get("request-id"), "f"), He(this, mn, "f").call(this, e), this._emit("connect");
  }
  get ended() {
    return He(this, ur, "f");
  }
  get errored() {
    return He(this, _n, "f");
  }
  get aborted() {
    return He(this, yn, "f");
  }
  abort() {
    this.controller.abort();
  }
  on(e, listener) {
    return (He(this, Ee, "f")[e] || (He(this, Ee, "f")[e] = [])).push({
      listener: listener
    }), this;
  }
  off(e, r) {
    let n = He(this, Ee, "f")[e];
    if (!n) return this;
    let s = n.findIndex(item => item.listener === r);
    if (s >= 0) n.splice(s, 1);
    return this;
  }
  once(e, listener_2) {
    return (He(this, Ee, "f")[e] || (He(this, Ee, "f")[e] = [])).push({
      listener: listener_2,
      once: !0
    }), this;
  }
  emitted(e) {
    return new Promise((r, n) => {
      if (gr(this, Xe, !0, "f"), e !== "error") this.once("error", n);
      this.once(e, r);
    });
  }
  async done() {
    gr(this, Xe, !0, "f"), await He(this, cr, "f");
  }
  get currentMessage() {
    return He(this, Ne, "f");
  }
  async finalMessage() {
    return await this.done(), He(this, te, "m", _s).call(this);
  }
  async finalText() {
    return await this.done(), He(this, te, "m", yi).call(this);
  }
  _emit(e, ...r) {
    if (He(this, ur, "f")) return;
    if (e === "end") gr(this, ur, !0, "f"), He(this, gn, "f").call(this);
    let n = He(this, Ee, "f")[e];
    if (n) He(this, Ee, "f")[e] = n.filter(item => !item.once), n.forEach(({
      listener: listener_3
    }) => listener_3(...r));
    if (e === "abort") {
      let s = r[0];
      if (!He(this, Xe, "f") && !n?.length) Promise.reject(s);
      He(this, ar, "f").call(this, s), He(this, lr, "f").call(this, s), this._emit("end");
      return;
    }
    if (e === "error") {
      let s = r[0];
      if (!He(this, Xe, "f") && !n?.length) Promise.reject(s);
      He(this, ar, "f").call(this, s), He(this, lr, "f").call(this, s), this._emit("end");
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1)) this._emit("finalMessage", He(this, te, "m", _s).call(this));
  }
  async _fromReadableStream(e, r) {
    let n = r?.signal,
      s;
    if (n) {
      if (n.aborted) this.controller.abort();
      s = this.controller.abort.bind(this.controller), n.addEventListener("abort", s);
    }
    try {
      He(this, te, "m", ys).call(this), this._connected(null);
      let o = ee.fromReadableStream(e, this.controller);
      for await (let i of o) He(this, te, "m", bs).call(this, i);
      if (o.controller.signal?.aborted) throw new _u();
      He(this, te, "m", Ss).call(this);
    } finally {
      if (n && s) n.removeEventListener("abort", s);
    }
  }
  [(Ne = new WeakMap(), _t = new WeakMap(), ir = new WeakMap(), mn = new WeakMap(), ar = new WeakMap(), cr = new WeakMap(), gn = new WeakMap(), lr = new WeakMap(), Ee = new WeakMap(), ur = new WeakMap(), _n = new WeakMap(), yn = new WeakMap(), Xe = new WeakMap(), Sn = new WeakMap(), wn = new WeakMap(), dr = new WeakMap(), fr = new WeakMap(), te = new WeakSet(), _s = function () {
    if (this.receivedMessages.length === 0) throw new Wn("stream ended without producing a Message with role=assistant");
    return this.receivedMessages.at(-1);
  }, yi = function () {
    if (this.receivedMessages.length === 0) throw new Wn("stream ended without producing a Message with role=assistant");
    let r = this.receivedMessages.at(-1).content.filter(item => item.type === "text").map(item => item.text);
    if (r.length === 0) throw new Wn("stream ended without producing a content block with type=text");
    return r.join(" ");
  }, ys = function () {
    if (this.ended) return;
    gr(this, Ne, void 0, "f");
  }, bs = function (r) {
    if (this.ended) return;
    let n = He(this, te, "m", bi).call(this, r);
    switch (this._emit("streamEvent", r, n), r.type) {
      case "content_block_delta":
        {
          let s = n.content.at(-1);
          switch (r.delta.type) {
            case "text_delta":
              {
                if (s.type === "text") this._emit("text", r.delta.text, s.text || "");
                break;
              }
            case "citations_delta":
              {
                if (s.type === "text") this._emit("citation", r.delta.citation, s.citations ?? []);
                break;
              }
            case "input_json_delta":
              {
                if (Es(s) && He(this, Ee, "f").inputJson?.length) {
                  let o;
                  try {
                    o = s.input;
                  } catch (error) {
                    He(this, fr, "f").call(this, He(this, te, "m", ws).call(this, s, error));
                    break;
                  }
                  this._emit("inputJson", r.delta.partial_json, o);
                }
                break;
              }
            case "thinking_delta":
              {
                if (s.type === "thinking") this._emit("thinking", r.delta.thinking, s.thinking);
                break;
              }
            case "signature_delta":
              {
                if (s.type === "thinking") this._emit("signature", s.signature);
                break;
              }
            case "compaction_delta":
              {
                if (s.type === "compaction" && s.content) this._emit("compaction", s.content);
                break;
              }
            default:
              Si(r.delta);
          }
          break;
        }
      case "message_stop":
        {
          this._addMessageParam(n), this._addMessage(ms(n, He(this, _t, "f"), {
            logger: He(this, dr, "f")
          }), !0);
          break;
        }
      case "content_block_stop":
        {
          this._emit("contentBlock", n.content.at(-1));
          break;
        }
      case "message_start":
        {
          gr(this, Ne, n, "f");
          break;
        }
      case "content_block_start":
      case "message_delta":
        break;
    }
  }, Ss = function () {
    if (this.ended) throw new Wn("stream has ended, this shouldn't happen");
    let r = He(this, Ne, "f");
    if (!r) throw new Wn("request ended without sending any chunks");
    return gr(this, Ne, void 0, "f"), ms(r, He(this, _t, "f"), {
      logger: He(this, dr, "f")
    });
  }, bi = function (r) {
    let n = He(this, Ne, "f");
    if (r.type === "message_start") {
      if (n) throw new Wn(`Unexpected event order, got ${r.type} before receiving "message_stop"`);
      return r.message;
    }
    if (!n) throw new Wn(`Unexpected event order, got ${r.type} before "message_start"`);
    switch (r.type) {
      case "message_stop":
        return n;
      case "message_delta":
        if (n.container = r.delta.container, n.stop_reason = r.delta.stop_reason, n.stop_sequence = r.delta.stop_sequence, r.delta.stop_details != null) n.stop_details = r.delta.stop_details;
        if (n.usage.output_tokens = r.usage.output_tokens, n.context_management = r.context_management, r.usage.input_tokens != null) n.usage.input_tokens = r.usage.input_tokens;
        if (r.usage.cache_creation_input_tokens != null) n.usage.cache_creation_input_tokens = r.usage.cache_creation_input_tokens;
        if (r.usage.cache_read_input_tokens != null) n.usage.cache_read_input_tokens = r.usage.cache_read_input_tokens;
        if (r.usage.server_tool_use != null) n.usage.server_tool_use = r.usage.server_tool_use;
        if (r.usage.iterations != null) n.usage.iterations = r.usage.iterations;
        return n;
      case "content_block_start":
        if (n.content.push(r.content_block), r.content_block.type === "fallback") n.model = r.content_block.to.model;
        return n;
      case "content_block_delta":
        {
          let s = n.content.at(r.index);
          switch (r.delta.type) {
            case "text_delta":
              {
                if (s?.type === "text") n.content[r.index] = {
                  ...s,
                  text: (s.text || "") + r.delta.text
                };
                break;
              }
            case "citations_delta":
              {
                if (s?.type === "text") n.content[r.index] = {
                  ...s,
                  citations: [...(s.citations ?? []), r.delta.citation]
                };
                break;
              }
            case "input_json_delta":
              {
                if (s && Es(s)) {
                  let o = (s[Me] || "") + r.delta.partial_json;
                  n.content[r.index] = pn(s, o);
                }
                break;
              }
            case "thinking_delta":
              {
                if (s?.type === "thinking") n.content[r.index] = {
                  ...s,
                  thinking: s.thinking + r.delta.thinking
                };
                break;
              }
            case "signature_delta":
              {
                if (s?.type === "thinking") n.content[r.index] = {
                  ...s,
                  signature: r.delta.signature
                };
                break;
              }
            case "compaction_delta":
              {
                if (s?.type === "compaction") n.content[r.index] = {
                  ...s,
                  content: (s.content || "") + r.delta.content,
                  encrypted_content: r.delta.encrypted_content
                };
                break;
              }
            default:
              Si(r.delta);
          }
          return n;
        }
      case "content_block_stop":
        {
          let s = n.content.at(r.index);
          if (s && Es(s) && Me in s) {
            let value_10;
            try {
              value_10 = s.input;
            } catch (error) {
              value_10 = {}, He(this, fr, "f").call(this, He(this, te, "m", ws).call(this, s, error));
            }
            Object.defineProperty(s, "input", {
              value: value_10,
              enumerable: !0,
              configurable: !0,
              writable: !0
            });
          }
          return n;
        }
    }
  }, ws = function (r, n) {
    let s = r[Me];
    return new Wn(`Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${n}. JSON: ${s}`);
  }, Symbol.asyncIterator)]() {
    let e = [],
      r = [],
      n = !1;
    return this.on("streamEvent", s => {
      let o = r.shift();
      if (o) o.resolve(s);else e.push(s);
    }), this.on("end", () => {
      n = !0;
      for (let s of r) s.resolve(void 0);
      r.length = 0;
    }), this.on("abort", s => {
      n = !0;
      for (let o of r) o.reject(s);
      r.length = 0;
    }), this.on("error", s => {
      n = !0;
      for (let o of r) o.reject(s);
      r.length = 0;
    }), {
      next: async () => {
        if (!e.length) {
          if (n) return {
            value: void 0,
            done: !0
          };
          return new Promise((resolve_2, reject_2) => r.push({
            resolve: resolve_2,
            reject: reject_2
          })).then(value_11 => value_11 ? {
            value: value_11,
            done: !1
          } : {
            value: void 0,
            done: !0
          });
        }
        return {
          value: e.shift(),
          done: !1
        };
      },
      return: async () => (this.abort(), {
        value: void 0,
        done: !0
      })
    };
  }
  toReadableStream() {
    return new ee(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
  }
}
function Si(e) {}
var wi = 1e5,
  Ei = `You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
1. Task Overview
The user's core request and success criteria
Any clarifications or constraints they specified
2. Current State
What has been completed so far
Files created, modified, or analyzed (with paths if relevant)
Key outputs or artifacts produced
3. Important Discoveries
Technical constraints or requirements uncovered
Decisions made and their rationale
Errors encountered and how they were resolved
What approaches were tried that didn't work (and why)
4. Next Steps
Specific actions needed to complete the task
Any blockers or open questions to resolve
Priority order if multiple steps remain
5. Context to Preserve
User preferences or style requirements
Domain-specific details that aren't obvious
Any promises made to the user
Be concise but complete\u2014err on the side of including information that would prevent duplicate work or repeated mistakes. Write in a way that enables immediate resumption of the task.
Wrap your summary in <summary></summary> tags.`;
var pr, yt, Qe, X, re, ae, Re, De, mr, ki, ks;
class _r {
  constructor(e, r, n) {
    pr.add(this), this.client = e, yt.set(this, !1), Qe.set(this, !1), X.set(this, void 0), re.set(this, void 0), ae.set(this, void 0), Re.set(this, void 0), De.set(this, void 0), mr.set(this, 0), gr(this, X, {
      params: {
        ...r,
        messages: structuredClone(r.messages)
      }
    }, "f");
    let s = is(r.tools, r.messages);
    if (gr(this, re, {
      ...n,
      headers: u([Wt("BetaToolRunner"), s.length ? {
        [Bt]: s.join(", ")
      } : void 0, n?.headers])
    }, "f"), gr(this, De, _Bt(), "f"), r.compactionControl?.enabled) console.warn('Anthropic: The `compactionControl` parameter is deprecated and will be removed in a future version. Use server-side compaction instead by passing `edits: [{ type: "compact_20260112" }]` in the params passed to `toolRunner()`. See https://platform.claude.com/docs/en/build-with-claude/compaction');
  }
  async *[(yt = new WeakMap(), Qe = new WeakMap(), X = new WeakMap(), re = new WeakMap(), ae = new WeakMap(), Re = new WeakMap(), De = new WeakMap(), mr = new WeakMap(), pr = new WeakSet(), ki = async function () {
    let compactionControl = He(this, X, "f").params.compactionControl;
    if (!compactionControl || !compactionControl.enabled) return !1;
    let n = 0;
    if (He(this, ae, "f") !== void 0) try {
      let d = await He(this, ae, "f");
      n = d.usage.input_tokens + (d.usage.cache_creation_input_tokens ?? 0) + (d.usage.cache_read_input_tokens ?? 0) + d.usage.output_tokens;
    } catch {
      return !1;
    }
    let s = compactionControl.contextTokenThreshold ?? wi;
    if (n < s) return !1;
    let model = compactionControl.model ?? He(this, X, "f").params.model,
      text_2 = compactionControl.summaryPrompt ?? Ei,
      messages = He(this, X, "f").params.messages;
    if (messages[messages.length - 1].role === "assistant") {
      let d = messages[messages.length - 1];
      if (Array.isArray(d.content)) {
        let S = d.content.filter(item => item.type !== "tool_use");
        if (S.length === 0) messages.pop();else d.content = S;
      }
    }
    let a = await this.client.beta.messages.create({
      model: model,
      messages: [...messages, {
        role: "user",
        content: [{
          type: "text",
          text: text_2
        }]
      }],
      max_tokens: He(this, X, "f").params.max_tokens
    }, {
      signal: He(this, re, "f").signal,
      headers: u([He(this, re, "f").headers, Wt("compaction")])
    });
    if (a.content[0]?.type !== "text") throw new Wn("Expected text response for compaction");
    return He(this, X, "f").params.messages = [{
      role: "user",
      content: a.content
    }], !0;
  }, Symbol.asyncIterator)]() {
    var e;
    if (He(this, yt, "f")) throw new Wn("Cannot iterate over a consumed stream");
    gr(this, yt, !0, "f"), gr(this, Qe, !0, "f"), gr(this, Re, void 0, "f");
    try {
      while (!0) {
        let r;
        try {
          if (He(this, X, "f").params.max_iterations && He(this, mr, "f") >= He(this, X, "f").params.max_iterations) break;
          gr(this, Qe, !1, "f"), gr(this, Re, void 0, "f"), gr(this, mr, (e = He(this, mr, "f"), e++, e), "f"), gr(this, ae, void 0, "f");
          let {
            max_iterations: max_iterations,
            compactionControl: compactionControl_2,
            ...o
          } = He(this, X, "f").params;
          if (o.stream) r = this.client.beta.messages.stream({
            ...o
          }, He(this, re, "f")), gr(this, ae, r.finalMessage(), "f"), He(this, ae, "f").catch(() => {}), yield r;else gr(this, ae, this.client.beta.messages.create({
            ...o,
            stream: !1
          }, He(this, re, "f")), "f"), yield He(this, ae, "f");
          if (!(await He(this, pr, "m", ki).call(this))) {
            if (!He(this, Qe, "f")) {
              let a = await He(this, ae, "f");
              if (He(this, X, "f").params.messages.push({
                role: a.role,
                content: a.content
              }), a.stop_reason === "refusal") break;
            }
            let c = await He(this, pr, "m", ks).call(this, He(this, X, "f").params.messages.at(-1));
            if (c) He(this, X, "f").params.messages.push(c);else if (!He(this, Qe, "f")) break;
          }
        } finally {
          if (r) r.abort();
        }
      }
      if (!He(this, ae, "f")) throw new Wn("ToolRunner concluded without a message from the server");
      He(this, De, "f").resolve(await He(this, ae, "f"));
    } catch (error) {
      throw gr(this, yt, !1, "f"), He(this, De, "f").promise.catch(() => {}), He(this, De, "f").reject(error), gr(this, De, _Bt(), "f"), error;
    }
  }
  setMessagesParams(e) {
    if (typeof e === "function") He(this, X, "f").params = e(He(this, X, "f").params);else He(this, X, "f").params = e;
    gr(this, Qe, !0, "f"), gr(this, Re, void 0, "f");
  }
  setRequestOptions(e) {
    if (typeof e === "function") gr(this, re, e(He(this, re, "f")), "f");else gr(this, re, {
      ...He(this, re, "f"),
      ...e
    }, "f");
  }
  async generateToolResponse(e = He(this, re, "f").signal) {
    let r = (await He(this, ae, "f")) ?? this.params.messages.at(-1);
    if (!r) return null;
    return He(this, pr, "m", ks).call(this, r, e);
  }
  done() {
    return He(this, De, "f").promise;
  }
  async runUntilDone() {
    if (!He(this, yt, "f")) for await (let e of this);
    return this.done();
  }
  get params() {
    return He(this, X, "f").params;
  }
  pushMessages(...e) {
    this.setMessagesParams(r => ({
      ...r,
      messages: [...r.messages, ...e]
    }));
  }
  then(e, r) {
    return this.runUntilDone().then(e, r);
  }
}
ks = async function (r, signal_2 = He(this, re, "f").signal) {
  if (He(this, Re, "f") !== void 0) return He(this, Re, "f");
  return gr(this, Re, Ac(He(this, X, "f").params, r, {
    ...He(this, re, "f"),
    signal: signal_2
  }), "f"), He(this, Re, "f");
};
async function Ac(e, r = e.messages.at(-1), n) {
  if (!r || r.role !== "assistant" || !r.content || typeof r.content === "string") return null;
  let s = r.content.filter(item => item.type === "tool_use");
  if (s.length === 0) return null;
  return {
    role: "user",
    content: await Promise.all(s.map(async i => {
      let c = e.tools.find(item => ("name" in item ? item.name : item.mcp_server_name) === i.name);
      if (!c || !("run" in c)) return {
        type: "tool_result",
        tool_use_id: i.id,
        content: `Error: Tool '${i.name}' not found`,
        is_error: !0
      };
      try {
        let input = i.input;
        if ("parse" in c && c.parse) input = c.parse(input);
        let content_4 = await c.run(input, {
          toolUse: i,
          toolUseBlock: i,
          signal: n?.signal
        });
        return {
          type: "tool_result",
          tool_use_id: i.id,
          content: content_4
        };
      } catch (error) {
        return {
          type: "tool_result",
          tool_use_id: i.id,
          content: error instanceof ToolError ? error.content : `Error: ${error instanceof Error ? error.message : String(error)}`,
          is_error: !0
        };
      }
    }))
  };
}
var xi = {
    "claude-1.3": "November 6th, 2024",
    "claude-1.3-100k": "November 6th, 2024",
    "claude-instant-1.1": "November 6th, 2024",
    "claude-instant-1.1-100k": "November 6th, 2024",
    "claude-instant-1.2": "November 6th, 2024",
    "claude-3-sonnet-20240229": "July 21st, 2025",
    "claude-3-opus-20240229": "January 5th, 2026",
    "claude-2.1": "July 21st, 2025",
    "claude-2.0": "July 21st, 2025",
    "claude-3-7-sonnet-latest": "February 19th, 2026",
    "claude-3-7-sonnet-20250219": "February 19th, 2026",
    "claude-3-5-haiku-latest": "February 19th, 2026",
    "claude-3-5-haiku-20241022": "February 19th, 2026",
    "claude-opus-4-0": "June 15th, 2026",
    "claude-opus-4-20250514": "June 15th, 2026",
    "claude-sonnet-4-0": "June 15th, 2026",
    "claude-sonnet-4-20250514": "June 15th, 2026",
    "claude-opus-4-1": "August 5th, 2026",
    "claude-opus-4-1-20250805": "August 5th, 2026",
    "claude-mythos-preview": "June 30th, 2026"
  },
  Rc = ["claude-mythos-preview", "claude-opus-4-6"];
class Fe extends R {
  constructor() {
    super(...arguments);
    this.batches = new or(this._client);
  }
  create(e, r) {
    let n = Ai(e),
      {
        betas: betas_68,
        user_profile_id: user_profile_id_2,
        ...body_20
      } = n;
    if (body_20.model in xi) console.warn(`The model '${body_20.model}' is deprecated and will reach end-of-life on ${xi[body_20.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    if (Rc.includes(body_20.model) && body_20.thinking && body_20.thinking.type === "enabled") console.warn(`Using Claude with ${body_20.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);
    let timeout = this._client._options.timeout;
    if (!body_20.stream && timeout == null) {
      let d = hn[body_20.model] ?? void 0;
      timeout = this._client.calculateNonstreamingTimeout(body_20.max_tokens, d);
    }
    let a = Yr(body_20.tools, body_20.messages);
    return this._client.post("/v1/messages?beta=true", {
      body: body_20,
      timeout: timeout ?? 600000,
      ...r,
      headers: u([{
        ...(betas_68?.toString() != null ? {
          "anthropic-beta": betas_68?.toString()
        } : void 0),
        ...(user_profile_id_2 != null ? {
          "anthropic-user-profile-id": user_profile_id_2
        } : void 0)
      }, a, r?.headers]),
      stream: n.stream ?? !1
    });
  }
  parse(e, r) {
    return r = {
      ...r,
      headers: u([{
        "anthropic-beta": [...(e.betas ?? []), "structured-outputs-2025-12-15"].toString()
      }, r?.headers])
    }, this.create(e, r).then(n => gs(n, e, {
      logger: this._client.logger ?? console
    }));
  }
  stream(e, r) {
    return hr.createMessage(this, e, r);
  }
  countTokens(e, r) {
    let n = Ai(e),
      {
        betas: betas_69,
        user_profile_id: user_profile_id_3,
        ...body_21
      } = n;
    return this._client.post("/v1/messages/count_tokens?beta=true", {
      body: body_21,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_69 ?? []), "token-counting-2024-11-01"].toString(),
        ...(user_profile_id_3 != null ? {
          "anthropic-user-profile-id": user_profile_id_3
        } : void 0)
      }, r?.headers])
    });
  }
  toolRunner(e, r) {
    return new _r(this._client, e, r);
  }
}
function Ai(e) {
  if (!e.output_format) return e;
  if (e.output_config?.format) throw new Wn("Both output_format and output_config.format were provided. Please use only output_config.format (output_format is deprecated).");
  let {
    output_format: r,
    ...n
  } = e;
  return {
    ...n,
    output_config: {
      ...e.output_config,
      format: r
    }
  };
}
Fe.Batches = or;
Fe.BetaToolRunner = _r;
Fe.ToolError = ToolError;
class bt extends R {
  list(e, r = {}, n) {
    let {
      betas: betas_70,
      ...query_19
    } = r ?? {};
    return this._client.getAPIList(g`/v1/sessions/${e}/events?beta=true`, T, {
      query: query_19,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_70 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  send(e, r, n) {
    let {
      betas: betas_71,
      ...body_22
    } = r;
    return this._client.post(g`/v1/sessions/${e}/events?beta=true`, {
      body: body_22,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_71 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  stream(e, r = {}, n) {
    let {
      betas: betas_72,
      ...query_20
    } = r ?? {};
    return this._client.get(g`/v1/sessions/${e}/events/stream?beta=true`, {
      query: query_20,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_72 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers]),
      stream: !0
    });
  }
  toolRunner(e, r) {
    return new Ge(e, {
      ...r,
      client: this._client
    });
  }
}
bt.SessionToolRunner = Ge;
class yr extends R {
  retrieve(e, r, n) {
    let {
      session_id: session_id,
      betas: betas_73
    } = r;
    return this._client.get(g`/v1/sessions/${session_id}/resources/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_73 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      session_id: session_id_2,
      betas: betas_74,
      ...body_23
    } = r;
    return this._client.post(g`/v1/sessions/${session_id_2}/resources/${e}?beta=true`, {
      body: body_23,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_74 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  list(e, r = {}, n) {
    let {
      betas: betas_75,
      ...query_21
    } = r ?? {};
    return this._client.getAPIList(g`/v1/sessions/${e}/resources?beta=true`, T, {
      query: query_21,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_75 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  delete(e, r, n) {
    let {
      session_id: session_id_3,
      betas: betas_76
    } = r;
    return this._client.delete(g`/v1/sessions/${session_id_3}/resources/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_76 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  add(e, r, n) {
    let {
      betas: betas_77,
      ...body_24
    } = r;
    return this._client.post(g`/v1/sessions/${e}/resources?beta=true`, {
      body: body_24,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_77 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
}
class br extends R {
  list(e, r, n) {
    let {
      session_id: session_id_4,
      betas: betas_78,
      ...query_22
    } = r;
    return this._client.getAPIList(g`/v1/sessions/${session_id_4}/threads/${e}/events?beta=true`, T, {
      query: query_22,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_78 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  stream(e, r, n) {
    let {
      session_id: session_id_5,
      betas: betas_79
    } = r;
    return this._client.get(g`/v1/sessions/${session_id_5}/threads/${e}/stream?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_79 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers]),
      stream: !0
    });
  }
}
class St extends R {
  constructor() {
    super(...arguments);
    this.events = new br(this._client);
  }
  retrieve(e, r, n) {
    let {
      session_id: session_id_6,
      betas: betas_80
    } = r;
    return this._client.get(g`/v1/sessions/${session_id_6}/threads/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_80 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  list(e, r = {}, n) {
    let {
      betas: betas_81,
      ...query_23
    } = r ?? {};
    return this._client.getAPIList(g`/v1/sessions/${e}/threads?beta=true`, T, {
      query: query_23,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_81 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  archive(e, r, n) {
    let {
      session_id: session_id_7,
      betas: betas_82
    } = r;
    return this._client.post(g`/v1/sessions/${session_id_7}/threads/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_82 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
}
St.Events = br;
class Le extends R {
  constructor() {
    super(...arguments);
    this.events = new bt(this._client), this.resources = new yr(this._client), this.threads = new St(this._client);
  }
  create(e, r) {
    let {
      betas: betas_83,
      ...body_25
    } = e;
    return this._client.post("/v1/sessions?beta=true", {
      body: body_25,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_83 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_84
    } = r ?? {};
    return this._client.get(g`/v1/sessions/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_84 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      betas: betas_85,
      ...body_26
    } = r;
    return this._client.post(g`/v1/sessions/${e}?beta=true`, {
      body: body_26,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_85 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_86,
      ...query_24
    } = e ?? {};
    return this._client.getAPIList("/v1/sessions?beta=true", ts, {
      query: query_24,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_86 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
  delete(e, r = {}, n) {
    let {
      betas: betas_87
    } = r ?? {};
    return this._client.delete(g`/v1/sessions/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_87 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  archive(e, r = {}, n) {
    let {
      betas: betas_88
    } = r ?? {};
    return this._client.post(g`/v1/sessions/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_88 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
}
Le.Events = bt;
Le.Resources = yr;
Le.Threads = St;
class Sr extends R {
  create(e, r, n) {
    let {
      betas: betas_89,
      ...body_27
    } = r;
    return this._client.post(g`/v1/skills/${e}/versions?beta=true`, st({
      body: body_27,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_89 ?? []), "skills-2025-10-02"].toString()
      }, n?.headers])
    }, this._client, !1));
  }
  retrieve(e, r, n) {
    let {
      skill_id: skill_id,
      betas: betas_90
    } = r;
    return this._client.get(g`/v1/skills/${skill_id}/versions/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_90 ?? []), "skills-2025-10-02"].toString()
      }, n?.headers])
    });
  }
  list(e, r = {}, n) {
    let {
      betas: betas_91,
      ...query_25
    } = r ?? {};
    return this._client.getAPIList(g`/v1/skills/${e}/versions?beta=true`, T, {
      query: query_25,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_91 ?? []), "skills-2025-10-02"].toString()
      }, n?.headers])
    });
  }
  delete(e, r, n) {
    let {
      skill_id: skill_id_2,
      betas: betas_92
    } = r;
    return this._client.delete(g`/v1/skills/${skill_id_2}/versions/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_92 ?? []), "skills-2025-10-02"].toString()
      }, n?.headers])
    });
  }
  download(e, r, n) {
    let {
      skill_id: skill_id_3,
      betas: betas_93
    } = r;
    return this._client.get(g`/v1/skills/${skill_id_3}/versions/${e}/content?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_93 ?? []), "skills-2025-10-02"].toString(),
        Accept: "application/binary"
      }, n?.headers]),
      __binaryResponse: !0
    });
  }
}
class wt extends R {
  constructor() {
    super(...arguments);
    this.versions = new Sr(this._client);
  }
  create(e, r) {
    let {
      betas: betas_94,
      ...body_28
    } = e;
    return this._client.post("/v1/skills?beta=true", st({
      body: body_28,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_94 ?? []), "skills-2025-10-02"].toString()
      }, r?.headers])
    }, this._client, !1));
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_95
    } = r ?? {};
    return this._client.get(g`/v1/skills/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_95 ?? []), "skills-2025-10-02"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_96,
      ...query_26
    } = e ?? {};
    return this._client.getAPIList("/v1/skills?beta=true", T, {
      query: query_26,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_96 ?? []), "skills-2025-10-02"].toString()
      }, r?.headers])
    });
  }
  delete(e, r = {}, n) {
    let {
      betas: betas_97
    } = r ?? {};
    return this._client.delete(g`/v1/skills/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_97 ?? []), "skills-2025-10-02"].toString()
      }, n?.headers])
    });
  }
}
wt.Versions = Sr;
class wr extends R {
  create(e, r, n) {
    let {
      betas: betas_98,
      ...body_29
    } = r;
    return this._client.post(g`/v1/tunnels/${e}/certificates?beta=true`, {
      body: body_29,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_98 ?? []), "mcp-tunnels-2026-06-22"].toString()
      }, n?.headers])
    });
  }
  retrieve(e, r, n) {
    let {
      tunnel_id: tunnel_id,
      betas: betas_99
    } = r;
    return this._client.get(g`/v1/tunnels/${tunnel_id}/certificates/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_99 ?? []), "mcp-tunnels-2026-06-22"].toString()
      }, n?.headers])
    });
  }
  list(e, r = {}, n) {
    let {
      betas: betas_100,
      ...query_27
    } = r ?? {};
    return this._client.getAPIList(g`/v1/tunnels/${e}/certificates?beta=true`, T, {
      query: query_27,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_100 ?? []), "mcp-tunnels-2026-06-22"].toString()
      }, n?.headers])
    });
  }
  archive(e, r, n) {
    let {
      tunnel_id: tunnel_id_2,
      betas: betas_101
    } = r;
    return this._client.post(g`/v1/tunnels/${tunnel_id_2}/certificates/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_101 ?? []), "mcp-tunnels-2026-06-22"].toString()
      }, n?.headers])
    });
  }
}
class Et extends R {
  constructor() {
    super(...arguments);
    this.certificates = new wr(this._client);
  }
  create(e, r) {
    let {
      betas: betas_102,
      ...body_30
    } = e;
    return this._client.post("/v1/tunnels?beta=true", {
      body: body_30,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_102 ?? []), "mcp-tunnels-2026-06-22"].toString()
      }, r?.headers])
    });
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_103
    } = r ?? {};
    return this._client.get(g`/v1/tunnels/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_103 ?? []), "mcp-tunnels-2026-06-22"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_104,
      ...query_28
    } = e ?? {};
    return this._client.getAPIList("/v1/tunnels?beta=true", T, {
      query: query_28,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_104 ?? []), "mcp-tunnels-2026-06-22"].toString()
      }, r?.headers])
    });
  }
  archive(e, r = {}, n) {
    let {
      betas: betas_105
    } = r ?? {};
    return this._client.post(g`/v1/tunnels/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_105 ?? []), "mcp-tunnels-2026-06-22"].toString()
      }, n?.headers])
    });
  }
  revealToken(e, r = {}, n) {
    let {
      betas: betas_106
    } = r ?? {};
    return this._client.post(g`/v1/tunnels/${e}/reveal_token?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_106 ?? []), "mcp-tunnels-2026-06-22"].toString()
      }, n?.headers])
    });
  }
  rotateToken(e, r, n) {
    let {
      betas: betas_107,
      ...body_31
    } = r;
    return this._client.post(g`/v1/tunnels/${e}/rotate_token?beta=true`, {
      body: body_31,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_107 ?? []), "mcp-tunnels-2026-06-22"].toString()
      }, n?.headers])
    });
  }
}
Et.Certificates = wr;
class Er extends R {
  create(e, r, n) {
    let {
      betas: betas_108,
      ...body_32
    } = r;
    return this._client.post(g`/v1/vaults/${e}/credentials?beta=true`, {
      body: body_32,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_108 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  retrieve(e, r, n) {
    let {
      vault_id: vault_id,
      betas: betas_109
    } = r;
    return this._client.get(g`/v1/vaults/${vault_id}/credentials/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_109 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      vault_id: vault_id_2,
      betas: betas_110,
      ...body_33
    } = r;
    return this._client.post(g`/v1/vaults/${vault_id_2}/credentials/${e}?beta=true`, {
      body: body_33,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_110 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  list(e, r = {}, n) {
    let {
      betas: betas_111,
      ...query_29
    } = r ?? {};
    return this._client.getAPIList(g`/v1/vaults/${e}/credentials?beta=true`, T, {
      query: query_29,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_111 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  delete(e, r, n) {
    let {
      vault_id: vault_id_3,
      betas: betas_112
    } = r;
    return this._client.delete(g`/v1/vaults/${vault_id_3}/credentials/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_112 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  archive(e, r, n) {
    let {
      vault_id: vault_id_4,
      betas: betas_113
    } = r;
    return this._client.post(g`/v1/vaults/${vault_id_4}/credentials/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_113 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  mcpOAuthValidate(e, r, n) {
    let {
      vault_id: vault_id_5,
      betas: betas_114
    } = r;
    return this._client.post(g`/v1/vaults/${vault_id_5}/credentials/${e}/mcp_oauth_validate?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_114 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
}
class kt extends R {
  constructor() {
    super(...arguments);
    this.credentials = new Er(this._client);
  }
  create(e, r) {
    let {
      betas: betas_115,
      ...body_34
    } = e;
    return this._client.post("/v1/vaults?beta=true", {
      body: body_34,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_115 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
  retrieve(e, r = {}, n) {
    let {
      betas: betas_116
    } = r ?? {};
    return this._client.get(g`/v1/vaults/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_116 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  update(e, r, n) {
    let {
      betas: betas_117,
      ...body_35
    } = r;
    return this._client.post(g`/v1/vaults/${e}?beta=true`, {
      body: body_35,
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_117 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_118,
      ...query_30
    } = e ?? {};
    return this._client.getAPIList("/v1/vaults?beta=true", T, {
      query: query_30,
      ...r,
      headers: u([{
        "anthropic-beta": [...(betas_118 ?? []), "managed-agents-2026-04-01"].toString()
      }, r?.headers])
    });
  }
  delete(e, r = {}, n) {
    let {
      betas: betas_119
    } = r ?? {};
    return this._client.delete(g`/v1/vaults/${e}?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_119 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
  archive(e, r = {}, n) {
    let {
      betas: betas_120
    } = r ?? {};
    return this._client.post(g`/v1/vaults/${e}/archive?beta=true`, {
      ...n,
      headers: u([{
        "anthropic-beta": [...(betas_120 ?? []), "managed-agents-2026-04-01"].toString()
      }, n?.headers])
    });
  }
}
kt.Credentials = Er;
class qS extends R {
  constructor() {
    super(...arguments);
    this.models = new qt(this._client), this.messages = new Fe(this._client), this.agents = new ot(this._client), this.environments = new pt(this._client), this.sessions = new Le(this._client), this.deployments = new Ht(this._client), this.deploymentRuns = new Lt(this._client), this.vaults = new kt(this._client), this.memoryStores = new Ye(this._client), this.files = new jt(this._client), this.skills = new wt(this._client), this.webhooks = new Gt(this._client), this.userProfiles = new Kt(this._client), this.dreams = new $t(this._client), this.tunnels = new Et(this._client);
  }
}
qS.Models = qt;
qS.Messages = Fe;
qS.Agents = ot;
qS.Environments = pt;
qS.Sessions = Le;
qS.Deployments = Ht;
qS.DeploymentRuns = Lt;
qS.Vaults = kt;
qS.MemoryStores = Ye;
qS.Files = jt;
qS.Skills = wt;
qS.Webhooks = Gt;
qS.UserProfiles = Kt;
qS.Dreams = $t;
qS.Tunnels = Et;
class F8e extends R {
  create(e, r) {
    let {
      betas: betas_121,
      ...body_36
    } = e;
    return this._client.post("/v1/complete", {
      body: body_36,
      timeout: this._client._options.timeout ?? 600000,
      ...r,
      headers: u([{
        ...(betas_121?.toString() != null ? {
          "anthropic-beta": betas_121?.toString()
        } : void 0)
      }, r?.headers]),
      stream: e.stream ?? !1
    });
  }
}
function Ii(e) {
  return e?.output_config?.format;
}
function xs(e, r, n) {
  let s = Ii(r);
  if (!r || !("parse" in (s ?? {}))) return {
    ...e,
    content: e.content.map(item => {
      if (item.type === "text") return Object.defineProperty({
        ...item
      }, "parsed_output", {
        value: null,
        enumerable: !1
      });
      return item;
    }),
    parsed_output: null
  };
  return As(e, r, n);
}
function As(e, r, n) {
  let parsed_output_2 = null,
    content_5 = e.content.map(item => {
      if (item.type === "text") {
        let value_12 = $c(r, item.text);
        if (parsed_output_2 === null) parsed_output_2 = value_12;
        return Object.defineProperty({
          ...item
        }, "parsed_output", {
          value: value_12,
          enumerable: !1
        });
      }
      return item;
    });
  return {
    ...e,
    content: content_5,
    parsed_output: parsed_output_2
  };
}
function $c(e, r) {
  let n = Ii(e);
  if (n?.type !== "json_schema") return null;
  try {
    if ("parse" in n) return n.parse(r);
    return JSON.parse(r);
  } catch (error) {
    throw new Wn(`Failed to parse structured output: ${error}`);
  }
}
var he, $e, xt, kr, En, xr, Ar, kn, Rr, ke, Ir, xn, An, Ze, Rn, In, vr, Rs, vi, Is, vs, Ps, Ts, Pi;
function Cs(e) {
  return e.type === "tool_use" || e.type === "server_tool_use";
}
class Pr {
  constructor(e, r) {
    he.add(this), this.messages = [], this.receivedMessages = [], $e.set(this, void 0), xt.set(this, null), this.controller = new AbortController(), kr.set(this, void 0), En.set(this, () => {}), xr.set(this, () => {}), Ar.set(this, void 0), kn.set(this, () => {}), Rr.set(this, () => {}), ke.set(this, {}), Ir.set(this, !1), xn.set(this, !1), An.set(this, !1), Ze.set(this, !1), Rn.set(this, void 0), In.set(this, void 0), vr.set(this, void 0), Is.set(this, n => {
      if (gr(this, xn, !0, "f"), qde(n)) n = new _u();
      if (n instanceof _u) return gr(this, An, !0, "f"), this._emit("abort", n);
      if (n instanceof Wn) return this._emit("error", n);
      if (n instanceof Error) {
        let s = new Wn(n.message);
        return s.cause = n, this._emit("error", s);
      }
      return this._emit("error", new Wn(String(n)));
    }), gr(this, kr, new Promise((n, s) => {
      gr(this, En, n, "f"), gr(this, xr, s, "f");
    }), "f"), gr(this, Ar, new Promise((n, s) => {
      gr(this, kn, n, "f"), gr(this, Rr, s, "f");
    }), "f"), He(this, kr, "f").catch(() => {}), He(this, Ar, "f").catch(() => {}), gr(this, xt, e, "f"), gr(this, vr, r?.logger ?? console, "f");
  }
  get response() {
    return He(this, Rn, "f");
  }
  get request_id() {
    return He(this, In, "f");
  }
  async withResponse() {
    gr(this, Ze, !0, "f");
    let response_5 = await He(this, kr, "f");
    if (!response_5) throw Error("Could not resolve a `Response` object");
    return {
      data: this,
      response: response_5,
      request_id: response_5.headers.get("request-id")
    };
  }
  static fromReadableStream(e) {
    let r = new Pr(null);
    return r._run(() => r._fromReadableStream(e)), r;
  }
  static createMessage(e, r, n, {
    logger: logger_3
  } = {}) {
    let o = new Pr(r, {
      logger: logger_3
    });
    for (let i of r.messages) o._addMessageParam(i);
    return gr(o, xt, {
      ...r,
      stream: !0
    }, "f"), o._run(() => o._createMessage(e, {
      ...r,
      stream: !0
    }, {
      ...n,
      headers: {
        ...n?.headers,
        [zr]: "stream"
      }
    })), o;
  }
  _run(e) {
    e().then(() => {
      this._emitFinal(), this._emit("end");
    }, He(this, Is, "f"));
  }
  _addMessageParam(e) {
    this.messages.push(e);
  }
  _addMessage(e, r = !0) {
    if (this.receivedMessages.push(e), r) this._emit("message", e);
  }
  async _createMessage(e, r, n) {
    let s = n?.signal,
      o;
    if (s) {
      if (s.aborted) this.controller.abort();
      o = this.controller.abort.bind(this.controller), s.addEventListener("abort", o);
    }
    try {
      He(this, he, "m", vs).call(this);
      let {
        response: response_6,
        data: data_6
      } = await e.create({
        ...r,
        stream: !0
      }, {
        ...n,
        signal: this.controller.signal
      }).withResponse();
      this._connected(response_6);
      for await (let a of data_6) He(this, he, "m", Ps).call(this, a);
      if (data_6.controller.signal?.aborted) throw new _u();
      He(this, he, "m", Ts).call(this);
    } finally {
      if (s && o) s.removeEventListener("abort", o);
    }
  }
  _connected(e) {
    if (this.ended) return;
    gr(this, Rn, e, "f"), gr(this, In, e?.headers.get("request-id"), "f"), He(this, En, "f").call(this, e), this._emit("connect");
  }
  get ended() {
    return He(this, Ir, "f");
  }
  get errored() {
    return He(this, xn, "f");
  }
  get aborted() {
    return He(this, An, "f");
  }
  abort() {
    this.controller.abort();
  }
  on(e, listener_4) {
    return (He(this, ke, "f")[e] || (He(this, ke, "f")[e] = [])).push({
      listener: listener_4
    }), this;
  }
  off(e, r) {
    let n = He(this, ke, "f")[e];
    if (!n) return this;
    let s = n.findIndex(item => item.listener === r);
    if (s >= 0) n.splice(s, 1);
    return this;
  }
  once(e, listener_5) {
    return (He(this, ke, "f")[e] || (He(this, ke, "f")[e] = [])).push({
      listener: listener_5,
      once: !0
    }), this;
  }
  emitted(e) {
    return new Promise((r, n) => {
      if (gr(this, Ze, !0, "f"), e !== "error") this.once("error", n);
      this.once(e, r);
    });
  }
  async done() {
    gr(this, Ze, !0, "f"), await He(this, Ar, "f");
  }
  get currentMessage() {
    return He(this, $e, "f");
  }
  async finalMessage() {
    return await this.done(), He(this, he, "m", Rs).call(this);
  }
  async finalText() {
    return await this.done(), He(this, he, "m", vi).call(this);
  }
  _emit(e, ...r) {
    if (He(this, Ir, "f")) return;
    if (e === "end") gr(this, Ir, !0, "f"), He(this, kn, "f").call(this);
    let n = He(this, ke, "f")[e];
    if (n) He(this, ke, "f")[e] = n.filter(item => !item.once), n.forEach(({
      listener: listener_6
    }) => listener_6(...r));
    if (e === "abort") {
      let s = r[0];
      if (!He(this, Ze, "f") && !n?.length) Promise.reject(s);
      He(this, xr, "f").call(this, s), He(this, Rr, "f").call(this, s), this._emit("end");
      return;
    }
    if (e === "error") {
      let s = r[0];
      if (!He(this, Ze, "f") && !n?.length) Promise.reject(s);
      He(this, xr, "f").call(this, s), He(this, Rr, "f").call(this, s), this._emit("end");
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1)) this._emit("finalMessage", He(this, he, "m", Rs).call(this));
  }
  async _fromReadableStream(e, r) {
    let n = r?.signal,
      s;
    if (n) {
      if (n.aborted) this.controller.abort();
      s = this.controller.abort.bind(this.controller), n.addEventListener("abort", s);
    }
    try {
      He(this, he, "m", vs).call(this), this._connected(null);
      let o = ee.fromReadableStream(e, this.controller);
      for await (let i of o) He(this, he, "m", Ps).call(this, i);
      if (o.controller.signal?.aborted) throw new _u();
      He(this, he, "m", Ts).call(this);
    } finally {
      if (n && s) n.removeEventListener("abort", s);
    }
  }
  [($e = new WeakMap(), xt = new WeakMap(), kr = new WeakMap(), En = new WeakMap(), xr = new WeakMap(), Ar = new WeakMap(), kn = new WeakMap(), Rr = new WeakMap(), ke = new WeakMap(), Ir = new WeakMap(), xn = new WeakMap(), An = new WeakMap(), Ze = new WeakMap(), Rn = new WeakMap(), In = new WeakMap(), vr = new WeakMap(), Is = new WeakMap(), he = new WeakSet(), Rs = function () {
    if (this.receivedMessages.length === 0) throw new Wn("stream ended without producing a Message with role=assistant");
    return this.receivedMessages.at(-1);
  }, vi = function () {
    if (this.receivedMessages.length === 0) throw new Wn("stream ended without producing a Message with role=assistant");
    let r = this.receivedMessages.at(-1).content.filter(item => item.type === "text").map(item => item.text);
    if (r.length === 0) throw new Wn("stream ended without producing a content block with type=text");
    return r.join(" ");
  }, vs = function () {
    if (this.ended) return;
    gr(this, $e, void 0, "f");
  }, Ps = function (r) {
    if (this.ended) return;
    let n = He(this, he, "m", Pi).call(this, r);
    switch (this._emit("streamEvent", r, n), r.type) {
      case "content_block_delta":
        {
          let s = n.content.at(-1);
          switch (r.delta.type) {
            case "text_delta":
              {
                if (s.type === "text") this._emit("text", r.delta.text, s.text || "");
                break;
              }
            case "citations_delta":
              {
                if (s.type === "text") this._emit("citation", r.delta.citation, s.citations ?? []);
                break;
              }
            case "input_json_delta":
              {
                if (Cs(s) && He(this, ke, "f").inputJson?.length) this._emit("inputJson", r.delta.partial_json, s.input);
                break;
              }
            case "thinking_delta":
              {
                if (s.type === "thinking") this._emit("thinking", r.delta.thinking, s.thinking);
                break;
              }
            case "signature_delta":
              {
                if (s.type === "thinking") this._emit("signature", s.signature);
                break;
              }
            default:
              Ti(r.delta);
          }
          break;
        }
      case "message_stop":
        {
          this._addMessageParam(n), this._addMessage(xs(n, He(this, xt, "f"), {
            logger: He(this, vr, "f")
          }), !0);
          break;
        }
      case "content_block_stop":
        {
          this._emit("contentBlock", n.content.at(-1));
          break;
        }
      case "message_start":
        {
          gr(this, $e, n, "f");
          break;
        }
      case "content_block_start":
      case "message_delta":
        break;
    }
  }, Ts = function () {
    if (this.ended) throw new Wn("stream has ended, this shouldn't happen");
    let r = He(this, $e, "f");
    if (!r) throw new Wn("request ended without sending any chunks");
    return gr(this, $e, void 0, "f"), xs(r, He(this, xt, "f"), {
      logger: He(this, vr, "f")
    });
  }, Pi = function (r) {
    let n = He(this, $e, "f");
    if (r.type === "message_start") {
      if (n) throw new Wn(`Unexpected event order, got ${r.type} before receiving "message_stop"`);
      return r.message;
    }
    if (!n) throw new Wn(`Unexpected event order, got ${r.type} before "message_start"`);
    switch (r.type) {
      case "message_stop":
        return n;
      case "message_delta":
        if (n.stop_reason = r.delta.stop_reason, n.stop_sequence = r.delta.stop_sequence, r.delta.stop_details != null) n.stop_details = r.delta.stop_details;
        if (n.usage.output_tokens = r.usage.output_tokens, r.usage.input_tokens != null) n.usage.input_tokens = r.usage.input_tokens;
        if (r.usage.cache_creation_input_tokens != null) n.usage.cache_creation_input_tokens = r.usage.cache_creation_input_tokens;
        if (r.usage.cache_read_input_tokens != null) n.usage.cache_read_input_tokens = r.usage.cache_read_input_tokens;
        if (r.usage.server_tool_use != null) n.usage.server_tool_use = r.usage.server_tool_use;
        return n;
      case "content_block_start":
        return n.content.push({
          ...r.content_block
        }), n;
      case "content_block_delta":
        {
          let s = n.content.at(r.index);
          switch (r.delta.type) {
            case "text_delta":
              {
                if (s?.type === "text") n.content[r.index] = {
                  ...s,
                  text: (s.text || "") + r.delta.text
                };
                break;
              }
            case "citations_delta":
              {
                if (s?.type === "text") n.content[r.index] = {
                  ...s,
                  citations: [...(s.citations ?? []), r.delta.citation]
                };
                break;
              }
            case "input_json_delta":
              {
                if (s && Cs(s)) {
                  let o = (s[Me] || "") + r.delta.partial_json;
                  n.content[r.index] = pn(s, o);
                }
                break;
              }
            case "thinking_delta":
              {
                if (s?.type === "thinking") n.content[r.index] = {
                  ...s,
                  thinking: s.thinking + r.delta.thinking
                };
                break;
              }
            case "signature_delta":
              {
                if (s?.type === "thinking") n.content[r.index] = {
                  ...s,
                  signature: r.delta.signature
                };
                break;
              }
            default:
              Ti(r.delta);
          }
          return n;
        }
      case "content_block_stop":
        {
          let s = n.content.at(r.index);
          if (s && Cs(s) && Me in s) Object.defineProperty(s, "input", {
            value: s.input,
            enumerable: !0,
            configurable: !0,
            writable: !0
          });
          return n;
        }
    }
  }, Symbol.asyncIterator)]() {
    let e = [],
      r = [],
      n = !1;
    return this.on("streamEvent", s => {
      let o = r.shift();
      if (o) o.resolve(s);else e.push(s);
    }), this.on("end", () => {
      n = !0;
      for (let s of r) s.resolve(void 0);
      r.length = 0;
    }), this.on("abort", s => {
      n = !0;
      for (let o of r) o.reject(s);
      r.length = 0;
    }), this.on("error", s => {
      n = !0;
      for (let o of r) o.reject(s);
      r.length = 0;
    }), {
      next: async () => {
        if (!e.length) {
          if (n) return {
            value: void 0,
            done: !0
          };
          return new Promise((resolve_3, reject_3) => r.push({
            resolve: resolve_3,
            reject: reject_3
          })).then(value_13 => value_13 ? {
            value: value_13,
            done: !1
          } : {
            value: void 0,
            done: !0
          });
        }
        return {
          value: e.shift(),
          done: !1
        };
      },
      return: async () => (this.abort(), {
        value: void 0,
        done: !0
      })
    };
  }
  toReadableStream() {
    return new ee(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
  }
}
function Ti(e) {}
class Tr extends R {
  create(e, r) {
    let {
      user_profile_id: user_profile_id_4,
      ...body_37
    } = e;
    return this._client.post("/v1/messages/batches", {
      body: body_37,
      ...r,
      headers: u([{
        ...(user_profile_id_4 != null ? {
          "anthropic-user-profile-id": user_profile_id_4
        } : void 0)
      }, r?.headers])
    });
  }
  retrieve(e, r) {
    return this._client.get(g`/v1/messages/batches/${e}`, r);
  }
  list(query_31 = {}, r) {
    return this._client.getAPIList("/v1/messages/batches", ge, {
      query: query_31,
      ...r
    });
  }
  delete(e, r) {
    return this._client.delete(g`/v1/messages/batches/${e}`, r);
  }
  cancel(e, r) {
    return this._client.post(g`/v1/messages/batches/${e}/cancel`, r);
  }
  async results(e, r) {
    let n = await this.retrieve(e);
    if (!n.results_url) throw new Wn(`No batch \`results_url\`; Has it finished processing? ${n.processing_status} - ${n.id}`);
    return this._client.get(n.results_url, {
      ...r,
      headers: u([{
        Accept: "application/binary"
      }, r?.headers]),
      stream: !0,
      __binaryResponse: !0
    })._thenUnwrap((s, o) => mt.fromResponse(o.response, o.controller));
  }
}
class b2 extends R {
  constructor() {
    super(...arguments);
    this.batches = new Tr(this._client);
  }
  create(e, r) {
    let {
      user_profile_id: user_profile_id_5,
      ...body_38
    } = e;
    if (body_38.model in Ci) console.warn(`The model '${body_38.model}' is deprecated and will reach end-of-life on ${Ci[body_38.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    if (Bc.includes(body_38.model) && body_38.thinking && body_38.thinking.type === "enabled") console.warn(`Using Claude with ${body_38.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);
    let timeout_2 = this._client._options.timeout;
    if (!body_38.stream && timeout_2 == null) {
      let c = hn[body_38.model] ?? void 0;
      timeout_2 = this._client.calculateNonstreamingTimeout(body_38.max_tokens, c);
    }
    let i = Yr(body_38.tools, body_38.messages);
    return this._client.post("/v1/messages", {
      body: body_38,
      timeout: timeout_2 ?? 600000,
      ...r,
      headers: u([{
        ...(user_profile_id_5 != null ? {
          "anthropic-user-profile-id": user_profile_id_5
        } : void 0)
      }, i, r?.headers]),
      stream: e.stream ?? !1
    });
  }
  parse(e, r) {
    return this.create(e, r).then(n => As(n, e, {
      logger: this._client.logger ?? console
    }));
  }
  stream(e, r) {
    return Pr.createMessage(this, e, r, {
      logger: this._client.logger ?? console
    });
  }
  countTokens(e, r) {
    let {
      user_profile_id: user_profile_id_6,
      ...body_39
    } = e;
    return this._client.post("/v1/messages/count_tokens", {
      body: body_39,
      ...r,
      headers: u([{
        ...(user_profile_id_6 != null ? {
          "anthropic-user-profile-id": user_profile_id_6
        } : void 0)
      }, r?.headers])
    });
  }
}
var Ci = {
    "claude-1.3": "November 6th, 2024",
    "claude-1.3-100k": "November 6th, 2024",
    "claude-instant-1.1": "November 6th, 2024",
    "claude-instant-1.1-100k": "November 6th, 2024",
    "claude-instant-1.2": "November 6th, 2024",
    "claude-3-sonnet-20240229": "July 21st, 2025",
    "claude-3-opus-20240229": "January 5th, 2026",
    "claude-2.1": "July 21st, 2025",
    "claude-2.0": "July 21st, 2025",
    "claude-3-7-sonnet-latest": "February 19th, 2026",
    "claude-3-7-sonnet-20250219": "February 19th, 2026",
    "claude-3-5-haiku-latest": "February 19th, 2026",
    "claude-3-5-haiku-20241022": "February 19th, 2026",
    "claude-opus-4-0": "June 15th, 2026",
    "claude-opus-4-20250514": "June 15th, 2026",
    "claude-sonnet-4-0": "June 15th, 2026",
    "claude-sonnet-4-20250514": "June 15th, 2026",
    "claude-opus-4-1": "August 5th, 2026",
    "claude-opus-4-1-20250805": "August 5th, 2026",
    "claude-mythos-preview": "June 30th, 2026"
  },
  Bc = ["claude-mythos-preview", "claude-opus-4-6"];
b2.Batches = Tr;
class At extends R {
  retrieve(e, r = {}, n) {
    let {
      betas: betas_122
    } = r ?? {};
    return this._client.get(g`/v1/models/${e}`, {
      ...n,
      headers: u([{
        ...(betas_122?.toString() != null ? {
          "anthropic-beta": betas_122?.toString()
        } : void 0)
      }, n?.headers])
    });
  }
  list(e = {}, r) {
    let {
      betas: betas_123,
      ...query_32
    } = e ?? {};
    return this._client.getAPIList("/v1/models", ge, {
      query: query_32,
      ...r,
      headers: u([{
        ...(betas_123?.toString() != null ? {
          "anthropic-beta": betas_123?.toString()
        } : void 0)
      }, r?.headers])
    });
  }
}
var Os,
  Ms,
  vn,
  Oi,
  Mi = "\\n\\nHuman:",
  Ni = "\\n\\nAssistant:";
class KS {
  get credentials() {
    return this._authState.provider;
  }
  constructor({
    baseURL: baseURL_2 = O("ANTHROPIC_BASE_URL"),
    apiKey: apiKey,
    authToken: authToken_3,
    webhookKey = O("ANTHROPIC_WEBHOOK_SIGNING_KEY") ?? null,
    ...o
  } = {}) {
    if (Os.add(this), this._requestAuthFlags = new WeakMap(), vn.set(this, void 0), apiKey === void 0) apiKey = o.profile != null ? null : O("ANTHROPIC_API_KEY") ?? null;
    if (authToken_3 === void 0) authToken_3 = o.profile != null ? null : O("ANTHROPIC_AUTH_TOKEN") ?? null;
    if (o.profile != null && (o.credentials != null || o.config != null)) throw TypeError("Pass at most one of `profile`, `credentials`, or `config`.");
    let i = {
      apiKey: apiKey,
      authToken: authToken_3,
      webhookKey: webhookKey,
      ...o,
      baseURL: baseURL_2 || "https://api.anthropic.com"
    };
    if (!i.dangerouslyAllowBrowser && Ys()) throw new Wn(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);
    this.baseURL = i.baseURL, this._baseURLIsExplicit = o.__baseURLIsExplicit ?? !!baseURL_2, this.timeout = i.timeout ?? Ms.DEFAULT_TIMEOUT, this.logger = i.logger ?? console, this.logLevel = Tt, this.logLevel = $r(i.logLevel, "ClientOptions.logLevel", H_(this)) ?? $r(O("ANTHROPIC_LOG"), "process.env['ANTHROPIC_LOG']", H_(this)) ?? Tt, this.fetchOptions = i.fetchOptions, this.maxRetries = i.maxRetries ?? 2, this.fetch = i.fetch ?? Eo(), gr(this, vn, xo, "f"), this.middleware = [...(i.middleware ?? [])];
    let c = O("ANTHROPIC_CUSTOM_HEADERS");
    if (c) {
      let d = {};
      for (let S of c.split(`
`)) {
        let E = S.indexOf(":");
        if (E >= 0) d[S.substring(0, E).trim()] = S.substring(E + 1).trim();
      }
      i.defaultHeaders = {
        ...d,
        ...i.defaultHeaders
      };
    }
    let __auth = o.__auth;
    if (delete i.__auth, delete i.__baseURLIsExplicit, this._options = i, this.apiKey = typeof apiKey === "string" ? apiKey : null, this.authToken = authToken_3, this.webhookKey = webhookKey, __auth) {
      if (this._authState = __auth, !this._baseURLIsExplicit && __auth.baseURL) this.baseURL = __auth.baseURL;
    } else if (this._authState = {
      provider: null,
      tokenCache: null,
      resolution: null,
      error: null,
      extraHeaders: {}
    }, this.apiKey == null && this.authToken == null) {
      let d = i.credentials ?? null;
      if (d) this._authState.provider = d, this._authState.tokenCache = this._makeTokenCache(d);else if (i.config != null) {
        let S = Oft(i.config, this._credentialResolverOptions());
        this._authState.provider = S.provider, this._authState.tokenCache = this._makeTokenCache(S.provider), this._authState.extraHeaders = S.extraHeaders, this._applyCredentialBaseURL(S.baseURL);
      } else if (i.profile != null) this._authState.resolution = this._resolveDefaultCredentials(i.profile);else this._authState.resolution = this._resolveDefaultCredentials();
    }
  }
  _applyCredentialBaseURL(e) {
    if (!e) return;
    let r = e.replace(/\/+$/, "");
    if (this._authState.baseURL = r, !this._baseURLIsExplicit) this.baseURL = r;
  }
  _credentialResolverOptions() {
    return {
      baseURL: this.baseURL,
      fetch: this._credentialsFetch(),
      userAgent: this.getUserAgent(),
      onCacheWriteError: e => {
        H_(this).debug("credential cache write failed (best-effort)", e);
      },
      onSafetyWarning: e => {
        H_(this).warn(e);
      }
    };
  }
  _credentialsFetch() {
    return es(this.fetch, this.middleware, void 0, this);
  }
  _makeTokenCache(e) {
    return new Ift(e, r => {
      H_(this).debug("advisory token refresh failed; serving cached token", r);
    });
  }
  withOptions(e) {
    let r = "credentials" in e || "config" in e || "profile" in e,
      n = "apiKey" in e || "authToken" in e || r,
      s = {
        ...this._options,
        ...(this._baseURLIsExplicit ? {
          baseURL: this.baseURL
        } : {}),
        maxRetries: this.maxRetries,
        timeout: this.timeout,
        logger: this.logger,
        logLevel: this.logLevel,
        fetch: this.fetch,
        fetchOptions: this.fetchOptions,
        middleware: this.middleware,
        apiKey: this.apiKey,
        authToken: this.authToken,
        webhookKey: this.webhookKey,
        credentials: this.credentials,
        ...(r ? {
          credentials: void 0,
          config: void 0,
          profile: void 0
        } : {}),
        ...e,
        __auth: n ? void 0 : this._authState,
        __baseURLIsExplicit: "baseURL" in e ? !0 : this._baseURLIsExplicit
      };
    return new this.constructor(s);
  }
  async _resolveDefaultCredentials(e) {
    try {
      let r = await wo(this._credentialResolverOptions(), e);
      if (r) this._authState.provider = r.provider, this._authState.tokenCache = this._makeTokenCache(r.provider), this._authState.extraHeaders = r.extraHeaders, this._applyCredentialBaseURL(r.baseURL);else if (e != null) throw new Wn(`Profile "${e}" could not be resolved (no <config_dir>/configs/${e}.json found).`);
    } catch (r) {
      this._authState.error = r;
    } finally {
      this._authState.resolution = null;
    }
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({
    values: values_2,
    nulls: nulls_3
  }) {
    if (values_2.get("x-api-key") || values_2.get("authorization")) return;
    if (this._authState.error) throw this._authState.error;
    if (this._authState.tokenCache || this._authState.resolution) return;
    if (this.apiKey && values_2.get("x-api-key")) return;
    if (nulls_3.has("x-api-key")) return;
    if (this.authToken && values_2.get("authorization")) return;
    if (nulls_3.has("authorization")) return;
    throw Error('Could not resolve authentication method. Expected one of apiKey, authToken, credentials, config, or profile to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted');
  }
  _authFlags(e) {
    let r = this._requestAuthFlags.get(e);
    if (!r) r = {
      usedTokenCache: !1,
      didRefreshFor401: !1
    }, this._requestAuthFlags.set(e, r);
    return r;
  }
  async authHeaders(e) {
    if (this._authState.resolution) await this._authState.resolution;
    if (this._authState.error) return;
    if (this._authState.tokenCache && this.apiKey == null) {
      let r = await this._authState.tokenCache.getToken();
      return this._authFlags(e).usedTokenCache = !0, u([{
        Authorization: `Bearer ${r}`
      }]);
    }
    return u([await this.apiKeyAuth(e), await this.bearerAuth(e)]);
  }
  async apiKeyAuth(e) {
    if (this.apiKey == null) return;
    return u([{
      "X-Api-Key": this.apiKey
    }]);
  }
  async bearerAuth(e) {
    if (this.authToken == null) return;
    return u([{
      Authorization: `Bearer ${this.authToken}`
    }]);
  }
  stringifyQuery(e) {
    return mo(e);
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${ue}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${nt()}`;
  }
  makeStatusError(e, r, n, s) {
    return Ot.generate(e, r, n, s);
  }
  buildURL(e, r, n) {
    let s = !He(this, Os, "m", Oi).call(this) && n || this.baseURL,
      o = Xs(e) ? new URL(e) : new URL(s + (s.endsWith("/") && e.startsWith("/") ? e.slice(1) : e)),
      i = this.defaultQuery(),
      c = Object.fromEntries(o.searchParams);
    if (!Ln(i) || !Ln(c)) r = {
      ...c,
      ...i,
      ...r
    };
    if (typeof r === "object" && r && !Array.isArray(r)) o.search = this.stringifyQuery(r);
    return o.toString();
  }
  _calculateNonstreamingTimeout(e) {
    if (3600 * e / 128000 > 600) throw new Wn("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details");
    return 600000;
  }
  async prepareOptions(e) {}
  async prepareRequest(e, {
    url: url_2,
    options: options_2
  }) {
    if (this._authState.tokenCache && this.apiKey == null) {
      let s = e.headers instanceof Headers ? e.headers : new Headers(e.headers);
      for (let [i, c] of Object.entries(this._authState.extraHeaders)) if (!s.has(i)) s.set(i, c);
      if (!s.get("anthropic-beta")?.split(",").map(i => i.trim())?.includes(Nft)) s.append("anthropic-beta", Nft);
      e.headers = s;
    }
  }
  backendMiddleware() {
    return [];
  }
  get(e, r) {
    return this.methodRequest("get", e, r);
  }
  post(e, r) {
    return this.methodRequest("post", e, r);
  }
  patch(e, r) {
    return this.methodRequest("patch", e, r);
  }
  put(e, r) {
    return this.methodRequest("put", e, r);
  }
  delete(e, r) {
    return this.methodRequest("delete", e, r);
  }
  methodRequest(method, path_3, n) {
    return this.request(Promise.resolve(n).then(s => ({
      method: method,
      path: path_3,
      ...s
    })));
  }
  request(e, r = null) {
    return new je(this, this.makeRequest(e, r, void 0));
  }
  async makeRequest(e, r, retryOfRequestLogID_2) {
    let options_3 = await e,
      o = options_3.maxRetries ?? this.maxRetries;
    if (r == null) r = o, this._requestAuthFlags.delete(options_3);
    await this.prepareOptions(options_3);
    let {
        req: req,
        url: url_3,
        timeout: timeout_3
      } = await this.buildRequest(options_3, {
        retryCount: o - r
      }),
      requestLogID_2 = "log_" + (Math.random() * 16777216 | 0).toString(16).padStart(6, "0"),
      S = retryOfRequestLogID_2 === void 0 ? "" : `, retryOf: ${retryOfRequestLogID_2}`,
      startTime_2 = Date.now();
    if (options_3.signal?.aborted) throw new _u();
    let h = new AbortController(),
      f = await this.fetchWithTimeout(url_3, req, timeout_3, h, options_3, {
        requestLogID: requestLogID_2,
        retryOfRequestLogID: retryOfRequestLogID_2
      }).catch(rgt),
      w = Date.now();
    if (f instanceof globalThis.Error) {
      let I = `retrying, ${r} attempts remaining`;
      if (options_3.signal?.aborted) throw new _u();
      let P = qde(f) || /timed? ?out/i.test(String(f) + ("cause" in f ? String(f.cause) : "")),
        x = this.middleware.length > 0 || !!options_3.middleware?.length || this.backendMiddleware().length > 0;
      if (x && !P && !To(f)) throw H_(this).info(`[${requestLogID_2}] middleware error (not retryable)`), H_(this).debug(`[${requestLogID_2}] middleware error (not retryable)`, ye({
        retryOfRequestLogID: retryOfRequestLogID_2,
        url: url_3,
        durationMs: w - startTime_2,
        message: f.message
      })), f;
      if (r) return H_(this).info(`[${requestLogID_2}] connection ${P ? "timed out" : "failed"} - ${I}`), H_(this).debug(`[${requestLogID_2}] connection ${P ? "timed out" : "failed"} (${I})`, ye({
        retryOfRequestLogID: retryOfRequestLogID_2,
        url: url_3,
        durationMs: w - startTime_2,
        message: f.message
      })), this.retryRequest(options_3, r, retryOfRequestLogID_2 ?? requestLogID_2);
      if (H_(this).info(`[${requestLogID_2}] connection ${P ? "timed out" : "failed"} - error; no more retries left`), H_(this).debug(`[${requestLogID_2}] connection ${P ? "timed out" : "failed"} (error; no more retries left)`, ye({
        retryOfRequestLogID: retryOfRequestLogID_2,
        url: url_3,
        durationMs: w - startTime_2,
        message: f.message
      })), P) throw new Y$();
      if (x && !Zn(f)) throw f;
      throw new Np({
        cause: f
      });
    }
    let A = [...f.headers.entries()].filter(([I]) => I === "request-id").map(([I, P]) => ", " + I + ": " + JSON.stringify(P)).join(""),
      C = `[${requestLogID_2}${S}${A}] ${req.method} ${url_3} ${f.ok ? "succeeded" : "failed"} with status ${f.status} in ${w - startTime_2}ms`;
    if (!f.ok) {
      let I = await this.shouldRetry(f, options_3);
      if (r && I) {
        let G = `retrying, ${r} attempts remaining`;
        return await ko(f.body), H_(this).info(`${C} - ${G}`), H_(this).debug(`[${requestLogID_2}] response error (${G})`, ye({
          retryOfRequestLogID: retryOfRequestLogID_2,
          url: f.url,
          status: f.status,
          headers: f.headers,
          durationMs: w - startTime_2
        })), this.retryRequest(options_3, r, retryOfRequestLogID_2 ?? requestLogID_2, f.headers);
      }
      let P = I ? "error; no more retries left" : "error; not retryable";
      H_(this).info(`${C} - ${P}`);
      let x = await f.text().catch(G => rgt(G).message),
        M = vt(x),
        message = M ? void 0 : x;
      throw H_(this).debug(`[${requestLogID_2}] response error (${P})`, ye({
        retryOfRequestLogID: retryOfRequestLogID_2,
        url: f.url,
        status: f.status,
        headers: f.headers,
        message: message,
        durationMs: Date.now() - startTime_2
      })), this.makeStatusError(f.status, M, message, f.headers);
    }
    return H_(this).info(C), H_(this).debug(`[${requestLogID_2}] response start`, ye({
      retryOfRequestLogID: retryOfRequestLogID_2,
      url: f.url,
      status: f.status,
      headers: f.headers,
      durationMs: w - startTime_2
    })), {
      response: f,
      options: options_3,
      controller: h,
      requestLogID: requestLogID_2,
      retryOfRequestLogID: retryOfRequestLogID_2,
      startTime: startTime_2
    };
  }
  getAPIList(path_4, r, n) {
    return this.requestAPIList(r, n && "then" in n ? n.then(s => ({
      method: "get",
      path: path_4,
      ...s
    })) : {
      method: "get",
      path: path_4,
      ...n
    });
  }
  requestAPIList(e, r) {
    let n = this.makeRequest(r, null, void 0);
    return new Kr(this, n, e);
  }
  async fetchWithTimeout(e, r, n, s, options_4, i) {
    let {
        signal: signal_3,
        method: method_2,
        ...d
      } = r || {},
      S = this._makeAbort(s);
    if (signal_3) signal_3.addEventListener("abort", S, {
      once: !0
    });
    let E = globalThis.ReadableStream && d.body instanceof globalThis.ReadableStream || typeof d.body === "object" && d.body !== null && Symbol.asyncIterator in d.body,
      h = {
        signal: s.signal,
        ...(E ? {
          duplex: "half"
        } : {}),
        method: "GET",
        ...d
      };
    if (method_2) h.method = method_2.toUpperCase();
    let fetch_2 = this.fetch,
      w = async (x, M) => {
        let N = setTimeout(S, n);
        try {
          return await fetch_2.call(void 0, x, M);
        } finally {
          clearTimeout(N);
        }
      },
      A = options_4 === void 0 ? w : async (x, M = {}) => {
        let url_4 = typeof x === "string" ? x : x instanceof URL ? x.href : x.url;
        if (M.headers = M.headers instanceof Headers ? M.headers : new Headers(M.headers), await this.prepareRequest(M, {
          url: url_4,
          options: options_4
        }), i) H_(this).debug(`[${i.requestLogID}] sending request`, ye({
          retryOfRequestLogID: i.retryOfRequestLogID,
          method: M.method,
          url: url_4,
          options: options_4,
          headers: M.headers
        }));
        return w(x, M);
      },
      C = options_4?.middleware,
      I = this.backendMiddleware(),
      P = C?.length || I.length ? [...this.middleware, ...(C ?? []), ...I] : this.middleware;
    return await es(A, P, options_4, this)(e, h);
  }
  async shouldRetry(e, r) {
    let n = this._authFlags(r);
    if (e.status === 401 && this._authState.tokenCache && n.usedTokenCache && !n.didRefreshFor401) return n.didRefreshFor401 = !0, this._authState.tokenCache.invalidate(), !0;
    let s = e.headers.get("x-should-retry");
    if (s === "true") return !0;
    if (s === "false") return !1;
    if (e.status === 408) return !0;
    if (e.status === 409) return !0;
    if (e.status === 429) return !0;
    if (e.status >= 500) return !0;
    return !1;
  }
  async retryRequest(e, r, n, s) {
    let o,
      i = s?.get("retry-after-ms");
    if (i) {
      let a = parseFloat(i);
      if (!Number.isNaN(a)) o = a;
    }
    let c = s?.get("retry-after");
    if (c && !o) {
      let a = parseFloat(c);
      if (!Number.isNaN(a)) o = a * 1000;else o = Date.parse(c) - Date.now();
    }
    if (o === void 0) {
      let a = e.maxRetries ?? this.maxRetries;
      o = this.calculateDefaultRetryTimeoutMillis(r, a);
    }
    return await me(o), this.makeRequest(e, r - 1, n);
  }
  calculateDefaultRetryTimeoutMillis(e, r) {
    let o = r - e,
      i = Math.min(0.5 * Math.pow(2, o), 8),
      c = 1 - Math.random() * 0.25;
    return i * c * 1000;
  }
  calculateNonstreamingTimeout(e, r) {
    if (3600000 * e / 128000 > 600000 || r != null && e > r) throw new Wn("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details");
    return 600000;
  }
  async buildRequest(options_6, {
    retryCount = 0
  } = {}) {
    let options_5 = {
        ...options_6
      },
      {
        method: method_3,
        path: path_5,
        query: query_33,
        defaultBaseURL: defaultBaseURL
      } = options_5;
    if (this._authState.resolution) await this._authState.resolution;
    if (!this._baseURLIsExplicit && this._authState.baseURL && this.baseURL !== this._authState.baseURL) this.baseURL = this._authState.baseURL;
    let url_5 = this.buildURL(path_5, query_33, defaultBaseURL);
    if ("timeout" in options_5) Zs("timeout", options_5.timeout);
    options_5.timeout = options_5.timeout ?? this.timeout;
    let {
        bodyHeaders: bodyHeaders,
        body: body_40
      } = this.buildBody({
        options: options_5
      }),
      headers_4 = await this.buildHeaders({
        options: options_6,
        method: method_3,
        bodyHeaders: bodyHeaders,
        retryCount: retryCount
      });
    return {
      req: {
        method: method_3,
        headers: headers_4,
        ...(options_5.signal && {
          signal: options_5.signal
        }),
        ...(globalThis.ReadableStream && body_40 instanceof globalThis.ReadableStream && {
          duplex: "half"
        }),
        ...(body_40 && {
          body: body_40
        }),
        ...(this.fetchOptions ?? {}),
        ...(options_5.fetchOptions ?? {})
      },
      url: url_5,
      timeout: options_5.timeout
    };
  }
  async buildHeaders({
    options: options_7,
    method: method_4,
    bodyHeaders: bodyHeaders_2,
    retryCount: retryCount_2
  }) {
    let o = {};
    if (this.idempotencyHeader && method_4 !== "get") {
      if (!options_7.idempotencyKey) options_7.idempotencyKey = this.defaultIdempotencyKey();
      o[this.idempotencyHeader] = options_7.idempotencyKey;
    }
    let i = u([o, {
      Accept: "application/json",
      "User-Agent": this.getUserAgent(),
      "X-Stainless-Retry-Count": String(retryCount_2),
      ...(options_7.timeout ? {
        "X-Stainless-Timeout": String(Math.trunc(options_7.timeout / 1000))
      } : {}),
      ...Rt(),
      ...(this._options.dangerouslyAllowBrowser ? {
        "anthropic-dangerous-direct-browser-access": "true"
      } : void 0),
      "anthropic-version": "2023-06-01"
    }, await this.authHeaders(options_7), this._options.defaultHeaders, bodyHeaders_2, options_7.headers]);
    return this.validateHeaders(i), i.values;
  }
  _makeAbort(e) {
    return () => e.abort();
  }
  buildBody({
    options: {
      body: body_41,
      headers: headers_5
    }
  }) {
    if (!body_41) return {
      bodyHeaders: void 0,
      body: void 0
    };
    let headers_6 = u([headers_5]);
    if (ArrayBuffer.isView(body_41) || body_41 instanceof ArrayBuffer || body_41 instanceof DataView || typeof body_41 === "string" && headers_6.values.has("content-type") || globalThis.Blob && body_41 instanceof globalThis.Blob || body_41 instanceof FormData || body_41 instanceof URLSearchParams || globalThis.ReadableStream && body_41 instanceof globalThis.ReadableStream) return {
      bodyHeaders: void 0,
      body: body_41
    };else if (typeof body_41 === "object" && (Symbol.asyncIterator in body_41 || Symbol.iterator in body_41 && "next" in body_41 && typeof body_41.next === "function")) return {
      bodyHeaders: void 0,
      body: Br(body_41)
    };else if (typeof body_41 === "object" && headers_6.values.get("content-type") === "application/x-www-form-urlencoded") return {
      bodyHeaders: {
        "content-type": "application/x-www-form-urlencoded"
      },
      body: this.stringifyQuery(body_41)
    };else return He(this, vn, "f").call(this, {
      body: body_41,
      headers: headers_6
    });
  }
}
Ms = KS, vn = new WeakMap(), Os = new WeakSet(), Oi = function () {
  return this.baseURL !== "https://api.anthropic.com";
};
KS.Anthropic = Ms;
KS.HUMAN_PROMPT = Mi;
KS.AI_PROMPT = Ni;
KS.DEFAULT_TIMEOUT = 600000;
KS.AnthropicError = Wn;
KS.APIError = Ot;
KS.APIConnectionError = Np;
KS.APIConnectionTimeoutError = Y$;
KS.APIUserAbortError = _u;
KS.NotFoundError = q_e;
KS.ConflictError = V9e;
KS.RateLimitError = K9e;
KS.BadRequestError = z9e;
KS.AuthenticationError = V_e;
KS.InternalServerError = Y9e;
KS.PermissionDeniedError = G9e;
KS.UnprocessableEntityError = q9e;
KS.toFile = Vr;
class VN extends KS {
  constructor() {
    super(...arguments);
    this.completions = new F8e(this), this.messages = new b2(this), this.models = new At(this), this.beta = new qS(this);
  }
}
VN.Completions = F8e;
VN.Messages = b2;
VN.Models = At;
VN.Beta = qS;
function qN(e, r, n = 32000) {
  let s = Math.min(500 * Math.pow(2, e - 1), n),
    o = Math.round(s + Math.random() * 0.25 * s);
  if (r) {
    let i = parseInt(r, 10);
    if (!isNaN(i)) return Math.max(i * 1000, o);
  }
  return o;
}
import { STATUS_CODES as qc } from "http";
var o$o = 600000;
function kYn(e) {
  return e.escalated ? e.retryWindowMs : e.firstWindowMs;
}
class StreamNoResponseError extends Error {
  deadline;
  sleptMs;
  code = "StreamNoResponse";
  constructor(e, r) {
    super("No response from API within the first-byte window");
    this.deadline = e;
    this.sleptMs = r;
    this.name = "StreamNoResponseError";
  }
}
function bBt(e) {
  let r = xK(e, n => n instanceof StreamNoResponseError);
  return r instanceof StreamNoResponseError ? r : void 0;
}
var wa = "API Error",
  $8e = 1000;
function l_e(e) {
  return e instanceof Ot && e.status === 403 && (e.message?.includes("OAuth token has been revoked") ?? !1);
}
function SBt(e) {
  if (!(e instanceof Ot) || e.status !== 403) return !1;
  let r = e.message ?? "";
  return (e.type === "permission_error" || r.includes('"type":"permission_error"')) && r.includes("model:");
}
function sj(e) {
  if (!(e instanceof Ot)) return !1;
  return e.status === 529 || (e.message?.includes('"type":"overloaded_error"') ?? !1);
}
function Li(e) {
  return e instanceof Ot && e.status === 503 && e.headers?.get("x-should-retry") === "false";
}
function EYn(e) {
  return Li(e) ? y("headerless_decline") : y("headerless_retryable_503");
}
function TYn(e) {
  return Li(e) ? 0 : qN(1);
}
function Kc(e) {
  if (!(e instanceof Ot)) return !1;
  return e.status === 429 || (e.message?.includes('"type":"rate_limit_error"') ?? !1);
}
function CYn(e) {
  return e >= 400 && e < 500 && e !== 401 && e !== 408 && e !== 409 && e !== 429 && e !== 451;
}
var c_e = "dlp_request_denied";
function RUe(e) {
  return Ugn(e) === c_e;
}
function s$o(e) {
  if (!(e instanceof Ot) || e.status !== 400 || !Ns(e)) return !1;
  return e.error?.error?.type === "policy_blocked";
}
var U8e = "claude_code_version_too_old";
function gWr(e) {
  return Ugn(e) === U8e;
}
var CY = "safety_monitor_blocked";
function Mft(e) {
  return !1;
}
function Ugn(e) {
  if (!(e instanceof Ot) || !Ns(e)) return;
  return e.error?.error?.details?.error_code;
}
var Vc = /^[a-z][a-z0-9_]{0,63}$/;
function i$o(e) {
  let r = Ugn(e);
  return typeof r === "string" && Vc.test(r) ? r : void 0;
}
function hWr(e) {
  if (typeof e.status === "number") return e.status;
  if (sj(e)) return 529;
  if (Kc(e)) return 429;
  return;
}
var Dft = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "CERT_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CERT_REVOKED", "CERT_REJECTED", "CERT_UNTRUSTED", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_CHAIN_TOO_LONG", "PATH_LENGTH_EXCEEDED", "ERR_TLS_CERT_ALTNAME_INVALID", "HOSTNAME_MISMATCH"]),
  a$o = new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN"]),
  Jc = new Set([...Dft, "ERR_TLS_HANDSHAKE_TIMEOUT", "ERR_SSL_WRONG_VERSION_NUMBER", "ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC"]),
  DD = new Set(["ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "ENETUNREACH", "ENETDOWN", "EHOSTUNREACH", "EHOSTDOWN", "EAI_AGAIN", "FailedToOpenSocket", "ERR_PROXY_TUNNEL"]),
  C$ = new Set(["ECONNRESET", "EPIPE", "ConnectionClosed", "UND_ERR_SOCKET", "ETIMEDOUT", "ECONNABORTED", "ERR_SOCKET_CLOSED", "StreamSuspended", "StreamTruncated"]);
function Bgn(e) {
  return C$.has(e) || DD.has(e) ? bn(e) : y("other");
}
function B8e(e) {
  return DD.has(e) || C$.has(e) || Dft.has(e) ? bn(e) : void 0;
}
function AUe(e, r) {
  let n = /^[a-z][a-z0-9_]{0,63}$/.test(e) ? e : "unknown";
  return bn(`API error: type=${n} status=${typeof r === "number" ? r : "none"}`);
}
var Di = "Failed to resolve AWS credentials from the credential provider chain.",
  RYn = "Failed to acquire Google OAuth credentials.";
function Um(e) {
  if (!e || typeof e !== "object") return null;
  let r = e,
    n = 5,
    s = 0;
  while (r && s < n) {
    if (r instanceof Error) {
      if ("code" in r && typeof r.code === "string") {
        let code = r.code,
          isSSLError = Jc.has(code);
        return {
          code: code,
          message: r.message,
          isSSLError: isSSLError
        };
      }
      if (r.message.startsWith(jjt)) return {
        code: "ConnectionClosed",
        message: r.message,
        isSSLError: !1
      };
    }
    if (r instanceof Error && "cause" in r && r.cause !== r) r = r.cause, s++;else break;
  }
  return null;
}
function Gc(e) {
  let r = Um(e);
  return r !== null && DD.has(r.code);
}
function nK(e) {
  let r = Um(e);
  if (!r?.isSSLError) return null;
  return `SSL certificate error (${r.code}). If you are behind a corporate proxy or TLS-intercepting firewall, set NODE_EXTRA_CA_CERTS to your CA bundle path, or ask IT to allowlist *.anthropic.com. Run \`claude doctor\` for details.`;
}
function Pn(e) {
  if (e.includes("<!DOCTYPE html") || e.includes("<html")) {
    let r = e.match(/<title>([^<]+)<\/title>/);
    if (r && r[1]) return r[1].trim();
    return "";
  }
  return e;
}
function yWr(e) {
  let r = e.message;
  if (!r) return "";
  return Pn(r);
}
function Ns(e) {
  return typeof e === "object" && e !== null && "error" in e && typeof e.error === "object" && e.error !== null;
}
function Fi(e) {
  if (!Ns(e)) return null;
  let n = e.error,
    s = n?.error?.message;
  if (typeof s === "string" && s.length > 0) {
    let i = Pn(s);
    if (i.length > 0) return i;
  }
  let o = n?.message;
  if (typeof o === "string" && o.length > 0) {
    let i = Pn(o);
    if (i.length > 0) return i;
  }
  return null;
}
function zne(e) {
  let r = Um(e);
  if (r) {
    let {
      code: code_2,
      isSSLError: isSSLError_2
    } = r;
    if (code_2 === "StreamSuspended") return "Connection lost while your computer was asleep";
    if (code_2 === "StreamTruncated") return "Connection closed before the response finished";
    if (code_2 === "StreamNoResponse") return "No response from API";
    if (code_2 === "BedrockUnexpectedContentType") return r.message;
    if (code_2 === "ETIMEDOUT") return "Request timed out. Check your internet connection and proxy settings";
    if (isSSLError_2) {
      let c = `(${code_2}). The certificate comes from an authority Claude Code doesn't trust, usually a TLS-inspecting corporate proxy or a gateway signed by a private CA: set NODE_EXTRA_CA_CERTS to that CA bundle, or add it to the system certificate store \xB7 see https://code.claude.com/docs/en/network-config`;
      switch (code_2) {
        case "UNABLE_TO_VERIFY_LEAF_SIGNATURE":
        case "UNABLE_TO_GET_ISSUER_CERT":
        case "UNABLE_TO_GET_ISSUER_CERT_LOCALLY":
          return `Unable to connect to API: SSL certificate verification failed ${c}`;
        case "CERT_HAS_EXPIRED":
          return "Unable to connect to API: SSL certificate has expired";
        case "CERT_REVOKED":
          return "Unable to connect to API: SSL certificate has been revoked";
        case "DEPTH_ZERO_SELF_SIGNED_CERT":
        case "SELF_SIGNED_CERT_IN_CHAIN":
          return `Unable to connect to API: Self-signed certificate detected ${c}`;
        case "ERR_TLS_CERT_ALTNAME_INVALID":
        case "HOSTNAME_MISMATCH":
          return "Unable to connect to API: SSL certificate hostname mismatch";
        case "CERT_NOT_YET_VALID":
          return "Unable to connect to API: SSL certificate is not yet valid";
        default:
          return `Unable to connect to API: SSL error (${code_2})`;
      }
    }
  }
  if (e.message === Di || e.message === RYn) {
    let o = xK(e.cause, i => i.message.trim().length > 0 && i.message !== Di && i.message !== RYn);
    if (o) {
      let i = Pn(o.message.trim());
      if (i.length > 0) return i;
    }
  }
  if (e.message === "Connection error.") {
    let o = r?.code;
    if (o === void 0) return "Unable to connect to API. Check your internet connection";
    switch (o) {
      case "ECONNRESET":
      case "EPIPE":
      case "ECONNABORTED":
      case "ConnectionClosed":
      case "ERR_SOCKET_CLOSED":
      case "UND_ERR_SOCKET":
        return `Connection dropped (${o})`;
      case "ECONNREFUSED":
      case "ConnectionRefused":
        return `Connection refused \u2014 a firewall or proxy may be blocking it (${o})`;
      case "ENOTFOUND":
      case "EAI_AGAIN":
      case "FailedToOpenSocket":
        return `Can't reach the API server \u2014 check your internet or DNS (${o})`;
      case "ENETUNREACH":
      case "ENETDOWN":
      case "EHOSTUNREACH":
      case "EHOSTDOWN":
        return `No internet route \u2014 check your connection or VPN (${o})`;
      case "ERR_PROXY_TUNNEL":
        return `Couldn't connect through your proxy (${o}) \u2014 the proxy refused the tunnel: check its credentials and that it allows this host`;
      default:
        return `Unable to connect to API (${o})`;
    }
  }
  if (!e.message) return Fi(e) ?? `API error (status ${e.status ?? "unknown"})`;
  if (e.message.includes('{"')) {
    let o = Fi(e);
    if (o) return e.status ? `${e.status} ${o}` : o;
  }
  let n = yWr(e),
    s = /^(\d+ )?\s*</.test(e.message);
  if (n.length === 0 && s) {
    if (!e.status) return "API error (status unknown)";
    let o = qc[e.status];
    return o ? `${e.status} ${o}` : String(e.status);
  }
  if (n !== e.message && n.length > 0) {
    let o = e.status ? String(e.status) : void 0;
    return o && !n.match(/\d+/g)?.includes(o) ? `${o} ${n}` : n;
  }
  return e.message.trimEnd();
}
function jgn(e) {
  let r = c => e.headers?.get?.(c) ?? void 0,
    rateLimitType = r("anthropic-ratelimit-unified-representative-claim"),
    s = r("anthropic-ratelimit-unified-reset"),
    o = r("anthropic-ratelimit-unified-overage-status"),
    i = bBt(e);
  return {
    message: e.message,
    status: e.status,
    requestId: e.requestID ?? void 0,
    formatted: zne(e),
    connection: Um(e),
    isNetworkDown: Gc(e),
    rateLimits: rateLimitType || o ? {
      ...(rateLimitType && {
        rateLimitType: rateLimitType
      }),
      ...(s && {
        resetsAt: Math.round(Number(s))
      })
    } : null,
    noResponse: i ? {
      waitedMs: kYn(i.deadline),
      retryWaitMs: i.deadline.retryWindowMs
    } : null
  };
}
class StreamNoEventsError extends Error {
  constructor() {
    super("Stream ended without receiving any events");
    this.name = "StreamNoEventsError";
  }
}
class StreamMalformedEventError extends Error {
  blockState;
  constructor(e) {
    super("Content block not found");
    if (this.name = "StreamMalformedEventError", this.blockState = e, e === "closed") this.message = "Content block already closed";
  }
}
class StreamTruncatedError extends Error {
  code = "StreamTruncated";
  constructor() {
    super("Stream ended before the response was complete");
    this.name = "StreamTruncatedError";
  }
}
function l$o({
  connDetails: connDetails,
  isStaleConnection: isStaleConnection,
  isContextHintSse: isContextHintSse,
  streamIdleAborted: streamIdleAborted,
  noEvents: noEvents,
  malformedStream: malformedStream
}) {
  if (connDetails?.code === "StreamSuspended") return "stream_suspended";
  if (connDetails?.code === "StreamTruncated") return "stream_truncated";
  if (isStaleConnection) return "stale_connection";
  if (isContextHintSse) return "context_hint_sse";
  if (streamIdleAborted) return "watchdog";
  if (noEvents) return "no_events";
  if (malformedStream) return "malformed_stream";
  return "other";
}
export { gr, He, Ift, H_, n$o, version as yBt, r$o, vYn, Oft, ToolError as Af, _Bt, qS, F8e, b2, KS, VN, qN, o$o, kYn, StreamNoResponseError as $gn, bBt, wa, $8e, l_e, SBt, sj, EYn, TYn, CYn, c_e, RUe, s$o, U8e, gWr, CY, Mft, Ugn, i$o, hWr, Dft, a$o, DD, C$, Bgn, B8e, AUe, RYn, Um, nK, yWr, zne, jgn, StreamNoEventsError as AYn, StreamMalformedEventError as Lft, StreamTruncatedError as xYn, l$o, vl, _Wr, c$o, bWr, warning as PYn, d_e, IYn, SWr, Un };