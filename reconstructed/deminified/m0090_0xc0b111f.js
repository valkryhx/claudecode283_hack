// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { be, k, vo, Re } from "B:/~BUN/root/chunk-yv67t8hr.js";
var bn = k(function (Cl, yn) {
  var Stream = Re("stream").Stream,
    Ca = Re("util");
  yn.exports = oe;
  function oe() {
    this.source = null, this.dataSize = 0, this.maxDataSize = 1048576, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
  }
  Ca.inherits(oe, Stream);
  oe.create = function create(e, t) {
    var r = new this();
    t = t || {};
    for (var n in t) r[n] = t[n];
    r.source = e;
    var o = e.emit;
    if (e.emit = function emit() {
      return r._handleEmit(arguments), o.apply(e, arguments);
    }, e.on("error", function () {}), r.pauseStream) e.pause();
    return r;
  };
  Object.defineProperty(oe.prototype, "readable", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return this.source.readable;
    }
  });
  oe.prototype.setEncoding = function setEncoding() {
    return this.source.setEncoding.apply(this.source, arguments);
  };
  oe.prototype.resume = function resume() {
    if (!this._released) this.release();
    this.source.resume();
  };
  oe.prototype.pause = function pause() {
    this.source.pause();
  };
  oe.prototype.release = function release() {
    this._released = !0, this._bufferedEvents.forEach(function (e) {
      this.emit.apply(this, e);
    }.bind(this)), this._bufferedEvents = [];
  };
  oe.prototype.pipe = function pipe() {
    var e = Stream.prototype.pipe.apply(this, arguments);
    return this.resume(), e;
  };
  oe.prototype._handleEmit = function _handleEmit(e) {
    if (this._released) {
      this.emit.apply(this, e);
      return;
    }
    if (e[0] === "data") this.dataSize += e[1].length, this._checkIfMaxDataSizeExceeded();
    this._bufferedEvents.push(e);
  };
  oe.prototype._checkIfMaxDataSizeExceeded = function _checkIfMaxDataSizeExceeded() {
    if (this._maxDataSizeExceeded) return;
    if (this.dataSize <= this.maxDataSize) return;
    this._maxDataSizeExceeded = !0;
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", Error(e));
  };
});
var Rn = k(function (vl, wn) {
  var va = Re("util"),
    Stream_2 = Re("stream").Stream,
    gn = bn();
  wn.exports = F;
  function F() {
    this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2097152, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
  }
  va.inherits(F, Stream_2);
  F.create = function create(e) {
    var t = new this();
    e = e || {};
    for (var r in e) t[r] = e[r];
    return t;
  };
  F.isStreamLike = function isStreamLike(e) {
    return typeof e !== "function" && typeof e !== "string" && typeof e !== "boolean" && typeof e !== "number" && !Buffer.isBuffer(e);
  };
  F.prototype.append = function append(e) {
    var t = F.isStreamLike(e);
    if (t) {
      if (!(e instanceof gn)) {
        var r = gn.create(e, {
          maxDataSize: 1 / 0,
          pauseStream: this.pauseStreams
        });
        e.on("data", this._checkDataSize.bind(this)), e = r;
      }
      if (this._handleErrors(e), this.pauseStreams) e.pause();
    }
    return this._streams.push(e), this;
  };
  F.prototype.pipe = function pipe(e, t) {
    return Stream_2.prototype.pipe.call(this, e, t), this.resume(), e;
  };
  F.prototype._getNext = function _getNext() {
    if (this._currentStream = null, this._insideLoop) {
      this._pendingNext = !0;
      return;
    }
    this._insideLoop = !0;
    try {
      do this._pendingNext = !1, this._realGetNext(); while (this._pendingNext);
    } finally {
      this._insideLoop = !1;
    }
  };
  F.prototype._realGetNext = function _realGetNext() {
    var e = this._streams.shift();
    if (typeof e > "u") {
      this.end();
      return;
    }
    if (typeof e !== "function") {
      this._pipeNext(e);
      return;
    }
    var t = e;
    t(function (r) {
      var n = F.isStreamLike(r);
      if (n) r.on("data", this._checkDataSize.bind(this)), this._handleErrors(r);
      this._pipeNext(r);
    }.bind(this));
  };
  F.prototype._pipeNext = function _pipeNext(e) {
    this._currentStream = e;
    var t = F.isStreamLike(e);
    if (t) {
      e.on("end", this._getNext.bind(this)), e.pipe(this, {
        end: !1
      });
      return;
    }
    var r = e;
    this.write(r), this._getNext();
  };
  F.prototype._handleErrors = function _handleErrors(e) {
    var t = this;
    e.on("error", function (r) {
      t._emitError(r);
    });
  };
  F.prototype.write = function write(e) {
    this.emit("data", e);
  };
  F.prototype.pause = function pause() {
    if (!this.pauseStreams) return;
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function") this._currentStream.pause();
    this.emit("pause");
  };
  F.prototype.resume = function resume() {
    if (!this._released) this._released = !0, this.writable = !0, this._getNext();
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function") this._currentStream.resume();
    this.emit("resume");
  };
  F.prototype.end = function end() {
    this._reset(), this.emit("end");
  };
  F.prototype.destroy = function destroy() {
    this._reset(), this.emit("close");
  };
  F.prototype._reset = function _reset() {
    this.writable = !1, this._streams = [], this._currentStream = null;
  };
  F.prototype._checkDataSize = function _checkDataSize() {
    if (this._updateDataSize(), this.dataSize <= this.maxDataSize) return;
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(Error(e));
  };
  F.prototype._updateDataSize = function _updateDataSize() {
    this.dataSize = 0;
    var e = this;
    if (this._streams.forEach(function (item) {
      if (!item.dataSize) return;
      e.dataSize += item.dataSize;
    }), this._currentStream && this._currentStream.dataSize) this.dataSize += this._currentStream.dataSize;
  };
  F.prototype._emitError = function _emitError(e) {
    this._reset(), this.emit("error", e);
  };
});
var _n = k(function (Tl, xn) {
  var Ze = e => () => {
    throw Error("mime-types." + e + "() is stubbed in this build. Do not rely on axios auto-multipart serialization (plain object + Content-Type: multipart/form-data). Use native FormData or hand-roll the multipart body instead. See scripts/build-plugins.ts stubMimeTypes plugin.");
  };
  xn.exports = {
    lookup: Ze("lookup"),
    contentType: Ze("contentType"),
    extension: Ze("extension"),
    charset: Ze("charset"),
    extensions: Object.create(null),
    types: Object.create(null),
    charsets: {
      lookup: Ze("charsets.lookup")
    }
  };
});
var An = k(function (Pl, Sn) {
  Sn.exports = Ta;
  function Ta(e) {
    var t = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
    if (t) t(e);else setTimeout(e, 0);
  }
});
var Jt = k(function (Fl, Cn) {
  var On = An();
  Cn.exports = Pa;
  function Pa(e) {
    var t = !1;
    return On(function () {
      t = !0;
    }), function (n, o) {
      if (t) e(n, o);else On(function () {
        e(n, o);
      });
    };
  }
});
var Kt = k(function (Ll, vn) {
  vn.exports = La;
  function La(e) {
    Object.keys(e.jobs).forEach(Ba.bind(e)), e.jobs = {};
  }
  function Ba(e) {
    if (typeof this.jobs[e] == "function") this.jobs[e]();
  }
});
var Xt = k(function (Bl, Pn) {
  var Tn = Jt(),
    Na = Kt();
  Pn.exports = Da;
  function Da(e, t, r, n) {
    var o = r.keyedList ? r.keyedList[r.index] : r.index;
    r.jobs[o] = Ua(t, o, e[o], function (s, i) {
      if (!(o in r.jobs)) return;
      if (delete r.jobs[o], s) Na(r);else r.results[o] = i;
      n(s, r.results);
    });
  }
  function Ua(e, t, r, n) {
    var o;
    if (e.length == 2) o = e(r, Tn(n));else o = e(r, t, Tn(n));
    return o;
  }
});
var Yt = k(function (Nl, Fn) {
  Fn.exports = qa;
  function qa(e, t) {
    var r = !Array.isArray(e),
      n = {
        index: 0,
        keyedList: r || t ? Object.keys(e) : null,
        jobs: {},
        results: r ? {} : [],
        size: r ? Object.keys(e).length : e.length
      };
    if (t) n.keyedList.sort(r ? t : function (o, s) {
      return t(e[o], e[s]);
    });
    return n;
  }
});
var Qt = k(function (Dl, Ln) {
  var Ia = Kt(),
    ka = Jt();
  Ln.exports = ja;
  function ja(e) {
    if (!Object.keys(this.jobs).length) return;
    this.index = this.size, Ia(this), ka(e)(null, this.results);
  }
});
var Nn = k(function (Ul, Bn) {
  var Ma = Xt(),
    Ha = Yt(),
    za = Qt();
  Bn.exports = $a;
  function $a(e, t, r) {
    var n = Ha(e);
    while (n.index < (n.keyedList || e).length) Ma(e, t, n, function (o, s) {
      if (o) {
        r(o, s);
        return;
      }
      if (Object.keys(n.jobs).length === 0) {
        r(null, n.results);
        return;
      }
    }), n.index++;
    return za.bind(n, r);
  }
});
var Zt = k(function (ql, _t) {
  var Dn = Xt(),
    Va = Yt(),
    Wa = Qt();
  _t.exports = Ga;
  _t.exports.ascending = Un;
  _t.exports.descending = Ja;
  function Ga(e, t, r, n) {
    var o = Va(e, r);
    return Dn(e, t, o, function s(i, a) {
      if (i) {
        n(i, a);
        return;
      }
      if (o.index++, o.index < (o.keyedList || e).length) {
        Dn(e, t, o, s);
        return;
      }
      n(null, o.results);
    }), Wa.bind(o, n);
  }
  function Un(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
  }
  function Ja(e, t) {
    return -1 * Un(e, t);
  }
});
var In = k(function (Il, qn) {
  var Ka = Zt();
  qn.exports = Xa;
  function Xa(e, t, r) {
    return Ka(e, t, null, r);
  }
});
var jn = k(function (kl, kn) {
  kn.exports = {
    parallel: Nn(),
    serial: In(),
    serialOrdered: Zt()
  };
});
var er = k(function (jl, Mn) {
  Mn.exports = Object;
});
var zn = k(function (Ml, Hn) {
  Hn.exports = Error;
});
var Vn = k(function (Hl, $n) {
  $n.exports = EvalError;
});
var Gn = k(function (zl, Wn) {
  Wn.exports = RangeError;
});
var Kn = k(function ($l, Jn) {
  Jn.exports = ReferenceError;
});
var Yn = k(function (Vl, Xn) {
  Xn.exports = SyntaxError;
});
var St = k(function (Wl, Qn) {
  Qn.exports = TypeError;
});
var eo = k(function (Gl, Zn) {
  Zn.exports = URIError;
});
var ro = k(function (Jl, to) {
  to.exports = Math.abs;
});
var oo = k(function (Kl, no) {
  no.exports = Math.floor;
});
var io = k(function (Xl, so) {
  so.exports = Math.max;
});
var uo = k(function (Yl, ao) {
  ao.exports = Math.min;
});
var fo = k(function (Ql, co) {
  co.exports = Math.pow;
});
var po = k(function (Zl, lo) {
  lo.exports = Math.round;
});
var mo = k(function (ep, ho) {
  ho.exports = Number.isNaN || function (t) {
    return t !== t;
  };
});
var bo = k(function (tp, yo) {
  var Ya = mo();
  yo.exports = function exports(t) {
    if (Ya(t) || t === 0) return t;
    return t < 0 ? -1 : 1;
  };
});
var Eo = k(function (rp, go) {
  go.exports = Object.getOwnPropertyDescriptor;
});
var tr = k(function (np, wo) {
  var At = Eo();
  if (At) try {
    At([], "length");
  } catch (error) {
    At = null;
  }
  wo.exports = At;
});
var xo = k(function (op, Ro) {
  var Ot = Object.defineProperty || !1;
  if (Ot) try {
    Ot({}, "a", {
      value: 1
    });
  } catch (error) {
    Ot = !1;
  }
  Ro.exports = Ot;
});
var rr = k(function (sp, _o) {
  _o.exports = function exports() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return !1;
    if (typeof Symbol.iterator === "symbol") return !0;
    var t = {},
      r = Symbol("test"),
      n = Object(r);
    if (typeof r === "string") return !1;
    if (Object.prototype.toString.call(r) !== "[object Symbol]") return !1;
    if (Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
    var o = 42;
    t[r] = o;
    for (var s in t) return !1;
    if (typeof Object.keys === "function" && Object.keys(t).length !== 0) return !1;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(t).length !== 0) return !1;
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== r) return !1;
    if (!Object.prototype.propertyIsEnumerable.call(t, r)) return !1;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var a = Object.getOwnPropertyDescriptor(t, r);
      if (a.value !== o || a.enumerable !== !0) return !1;
    }
    return !0;
  };
});
var Oo = k(function (ip, Ao) {
  var So = typeof Symbol < "u" && Symbol,
    Qa = rr();
  Ao.exports = function exports() {
    if (typeof So !== "function") return !1;
    if (typeof Symbol !== "function") return !1;
    if (typeof So("foo") !== "symbol") return !1;
    if (typeof Symbol("bar") !== "symbol") return !1;
    return Qa();
  };
});
var nr = k(function (ap, Co) {
  Co.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
});
var or = k(function (up, To) {
  var Za = er();
  To.exports = Za.getPrototypeOf || null;
});
var Lo = k(function (cp, Fo) {
  var eu = "Function.prototype.bind called on incompatible ",
    tu = Object.prototype.toString,
    ru = Math.max,
    nu = "[object Function]",
    Po = function (t, r) {
      var n = [];
      for (var o = 0; o < t.length; o += 1) n[o] = t[o];
      for (var s = 0; s < r.length; s += 1) n[s + t.length] = r[s];
      return n;
    },
    ou = function (t, r) {
      var n = [];
      for (var o = r || 0, s = 0; o < t.length; o += 1, s += 1) n[s] = t[o];
      return n;
    },
    su = function (e, t) {
      var r = "";
      for (var n = 0; n < e.length; n += 1) if (r += e[n], n + 1 < e.length) r += t;
      return r;
    };
  Fo.exports = function exports(t) {
    var r = this;
    if (typeof r !== "function" || tu.apply(r) !== nu) throw TypeError(eu + r);
    var n = ou(arguments, 1),
      o,
      s = function () {
        if (this instanceof o) {
          var c = r.apply(this, Po(n, arguments));
          if (Object(c) === c) return c;
          return this;
        }
        return r.apply(t, Po(n, arguments));
      },
      i = ru(0, r.length - n.length),
      a = [];
    for (var l = 0; l < i; l++) a[l] = "$" + l;
    if (o = Function("binder", "return function (" + su(a, ",") + "){ return binder.apply(this,arguments); }")(s), r.prototype) {
      var f = function () {};
      f.prototype = r.prototype, o.prototype = new f(), f.prototype = null;
    }
    return o;
  };
});
var we = k(function (fp, Bo) {
  var iu = Lo();
  Bo.exports = Function.prototype.bind || iu;
});
var Ct = k(function (lp, No) {
  No.exports = Function.prototype.call;
});
var sr = k(function (pp, Do) {
  Do.exports = Function.prototype.apply;
});
var qo = k(function (dp, Uo) {
  Uo.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
});
var ko = k(function (hp, Io) {
  var au = we(),
    uu = sr(),
    cu = Ct(),
    lu = qo();
  Io.exports = lu || au.call(cu, uu);
});
var Mo = k(function (mp, jo) {
  var pu = we(),
    du = St(),
    hu = Ct(),
    mu = ko();
  jo.exports = function exports(t) {
    if (t.length < 1 || typeof t[0] !== "function") throw new du("a function is required");
    return mu(pu, hu, t);
  };
});
var Go = k(function (yp, Wo) {
  var yu = Mo(),
    Ho = tr(),
    $o;
  try {
    $o = [].__proto__ === Array.prototype;
  } catch (error) {
    if (!error || typeof error !== "object" || !("code" in error) || error.code !== "ERR_PROTO_ACCESS") throw error;
  }
  var ir = !!$o && Ho && Ho(Object.prototype, "__proto__"),
    Object_2 = Object,
    zo = Object_2.getPrototypeOf;
  Wo.exports = ir && typeof ir.get === "function" ? yu([ir.get]) : typeof zo === "function" ? function (t) {
    return zo(t == null ? t : Object_2(t));
  } : !1;
});
var Qo = k(function (bp, Yo) {
  var Jo = nr(),
    Ko = or(),
    Xo = Go();
  Yo.exports = Jo ? function (t) {
    return Jo(t);
  } : Ko ? function (t) {
    if (!t || typeof t !== "object" && typeof t !== "function") throw TypeError("getProto: not an object");
    return Ko(t);
  } : Xo ? function (t) {
    return Xo(t);
  } : null;
});
var es = k(function (gp, Zo) {
  var bu = Function.prototype.call,
    gu = Object.prototype.hasOwnProperty,
    Eu = we();
  Zo.exports = Eu.call(bu, gu);
});
var is = k(function (Ep, ss) {
  var _,
    wu = er(),
    Ru = zn(),
    xu = Vn(),
    _u = Gn(),
    Su = Kn(),
    je = Yn(),
    ke = St(),
    Au = eo(),
    Ou = ro(),
    Cu = oo(),
    vu = io(),
    Tu = uo(),
    Pu = fo(),
    Fu = po(),
    Lu = bo(),
    Function_2 = Function,
    ar = function (e) {
      try {
        return Function_2('"use strict"; return (' + e + ").constructor;")();
      } catch (error) {}
    },
    et = tr(),
    Bu = xo(),
    ur = function () {
      throw new ke();
    },
    Nu = et ? function () {
      try {
        return arguments.callee, ur;
      } catch (error) {
        try {
          return et(arguments, "callee").get;
        } catch (error) {
          return ur;
        }
      }
    }() : ur,
    qe = Oo()(),
    M = Qo(),
    Du = or(),
    Uu = nr(),
    os = sr(),
    tt = Ct(),
    Ie = {},
    qu = typeof Uint8Array > "u" || !M ? _ : M(Uint8Array),
    xe = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError > "u" ? _ : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? _ : ArrayBuffer,
      "%ArrayIteratorPrototype%": qe && M ? M([][Symbol.iterator]()) : _,
      "%AsyncFromSyncIteratorPrototype%": _,
      "%AsyncFunction%": Ie,
      "%AsyncGenerator%": Ie,
      "%AsyncGeneratorFunction%": Ie,
      "%AsyncIteratorPrototype%": Ie,
      "%Atomics%": typeof Atomics > "u" ? _ : Atomics,
      "%BigInt%": typeof BigInt > "u" ? _ : BigInt,
      "%BigInt64Array%": typeof BigInt64Array > "u" ? _ : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array > "u" ? _ : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? _ : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Ru,
      "%eval%": eval,
      "%EvalError%": xu,
      "%Float16Array%": typeof Float16Array > "u" ? _ : Float16Array,
      "%Float32Array%": typeof Float32Array > "u" ? _ : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? _ : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? _ : FinalizationRegistry,
      "%Function%": Function_2,
      "%GeneratorFunction%": Ie,
      "%Int8Array%": typeof Int8Array > "u" ? _ : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? _ : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? _ : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": qe && M ? M(M([][Symbol.iterator]())) : _,
      "%JSON%": typeof JSON === "object" ? JSON : _,
      "%Map%": typeof Map > "u" ? _ : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !qe || !M ? _ : M(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": wu,
      "%Object.getOwnPropertyDescriptor%": et,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? _ : Promise,
      "%Proxy%": typeof Proxy > "u" ? _ : Proxy,
      "%RangeError%": _u,
      "%ReferenceError%": Su,
      "%Reflect%": typeof Reflect > "u" ? _ : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? _ : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !qe || !M ? _ : M(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? _ : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": qe && M ? M(""[Symbol.iterator]()) : _,
      "%Symbol%": qe ? Symbol : _,
      "%SyntaxError%": je,
      "%ThrowTypeError%": Nu,
      "%TypedArray%": qu,
      "%TypeError%": ke,
      "%Uint8Array%": typeof Uint8Array > "u" ? _ : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? _ : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? _ : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? _ : Uint32Array,
      "%URIError%": Au,
      "%WeakMap%": typeof WeakMap > "u" ? _ : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? _ : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? _ : WeakSet,
      "%Function.prototype.call%": tt,
      "%Function.prototype.apply%": os,
      "%Object.defineProperty%": Bu,
      "%Object.getPrototypeOf%": Du,
      "%Math.abs%": Ou,
      "%Math.floor%": Cu,
      "%Math.max%": vu,
      "%Math.min%": Tu,
      "%Math.pow%": Pu,
      "%Math.round%": Fu,
      "%Math.sign%": Lu,
      "%Reflect.getPrototypeOf%": Uu
    };
  if (M) try {
    null.error;
  } catch (error) {
    cr = M(M(error)), xe["%Error.prototype%"] = cr;
  }
  var cr,
    Iu = function e(t) {
      var r;
      if (t === "%AsyncFunction%") r = ar("async function () {}");else if (t === "%GeneratorFunction%") r = ar("function* () {}");else if (t === "%AsyncGeneratorFunction%") r = ar("async function* () {}");else if (t === "%AsyncGenerator%") {
        var n = e("%AsyncGeneratorFunction%");
        if (n) r = n.prototype;
      } else if (t === "%AsyncIteratorPrototype%") {
        var o = e("%AsyncGenerator%");
        if (o && M) r = M(o.prototype);
      }
      return xe[t] = r, r;
    },
    ts = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    rt = we(),
    vt = es(),
    ku = rt.call(tt, Array.prototype.concat),
    ju = rt.call(os, Array.prototype.splice),
    rs = rt.call(tt, String.prototype.replace),
    Tt = rt.call(tt, String.prototype.slice),
    Mu = rt.call(tt, RegExp.prototype.exec),
    Hu = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    zu = /\\(\\)?/g,
    $u = function (t) {
      var r = Tt(t, 0, 1),
        n = Tt(t, -1);
      if (r === "%" && n !== "%") throw new je("invalid intrinsic syntax, expected closing `%`");else if (n === "%" && r !== "%") throw new je("invalid intrinsic syntax, expected opening `%`");
      var o = [];
      return rs(t, Hu, function (s, i, a, l) {
        o[o.length] = a ? rs(l, zu, "$1") : i || s;
      }), o;
    },
    Vu = function (t, r) {
      var name = t,
        alias;
      if (vt(ts, name)) alias = ts[name], name = "%" + alias[0] + "%";
      if (vt(xe, name)) {
        var value = xe[name];
        if (value === Ie) value = Iu(name);
        if (typeof value > "u" && !r) throw new ke("intrinsic " + t + " exists, but is not available. Please file an issue!");
        return {
          alias: alias,
          name: name,
          value: value
        };
      }
      throw new je("intrinsic " + t + " does not exist!");
    };
  ss.exports = function exports(t, r) {
    if (typeof t !== "string" || t.length === 0) throw new ke("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r !== "boolean") throw new ke('"allowMissing" argument must be a boolean');
    if (Mu(/^%?[^%]*%?$/, t) === null) throw new je("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = $u(t),
      o = n.length > 0 ? n[0] : "",
      s = Vu("%" + o + "%", r),
      {
        name: name_2,
        value: value_2
      } = s,
      l = !1,
      alias_2 = s.alias;
    if (alias_2) o = alias_2[0], ju(n, ku([0, 1], alias_2));
    for (var c = 1, p = !0; c < n.length; c += 1) {
      var d = n[c],
        b = Tt(d, 0, 1),
        m = Tt(d, -1);
      if ((b === '"' || b === "'" || b === "`" || m === '"' || m === "'" || m === "`") && b !== m) throw new je("property names with quotes must have matching quotes");
      if (d === "constructor" || !p) l = !0;
      if (o += "." + d, name_2 = "%" + o + "%", vt(xe, name_2)) value_2 = xe[name_2];else if (value_2 != null) {
        if (!(d in value_2)) {
          if (!r) throw new ke("base intrinsic for " + t + " exists, but the property is not available.");
          return;
        }
        if (et && c + 1 >= n.length) {
          var g = et(value_2, d);
          if (p = !!g, p && "get" in g && !("originalValue" in g.get)) value_2 = g.get;else value_2 = value_2[d];
        } else p = vt(value_2, d), value_2 = value_2[d];
        if (p && !l) xe[name_2] = value_2;
      }
    }
    return value_2;
  };
});
var us = k(function (wp, as) {
  var Wu = rr();
  as.exports = function exports() {
    return Wu() && !!Symbol.toStringTag;
  };
});
var fs = k(function (Rp, cs) {
  var Gu = Function.prototype.call,
    Ju = Object.prototype.hasOwnProperty,
    Ku = we();
  cs.exports = Ku.call(Gu, Ju);
});
var ds = k(function (xp, ps) {
  var Xu = is(),
    ls = Xu("%Object.defineProperty%", !0),
    Yu = us()(),
    Qu = fs(),
    Zu = St(),
    Pt = Yu ? Symbol.toStringTag : null;
  ps.exports = function exports(t, value_3) {
    var n = arguments.length > 2 && !!arguments[2] && arguments[2].force,
      o = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if (typeof n < "u" && typeof n !== "boolean" || typeof o < "u" && typeof o !== "boolean") throw new Zu("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
    if (Pt && (n || !Qu(t, Pt))) if (ls) ls(t, Pt, {
      configurable: !o,
      enumerable: !1,
      value: value_3,
      writable: !1
    });else t[Pt] = value_3;
  };
});
var ms = k(function (_p, hs) {
  var ec = Function.prototype.call,
    tc = Object.prototype.hasOwnProperty,
    rc = we();
  hs.exports = rc.call(ec, tc);
});
var bs = k(function (Sp, ys) {
  ys.exports = function exports(e, t) {
    return Object.keys(t).forEach(function (item) {
      e[item] = e[item] || t[item];
    }), e;
  };
});
var ws = k(function (Ap, Es) {
  var dr = Rn(),
    nc = Re("util"),
    fr = Re("path"),
    oc = Re("http"),
    sc = Re("https"),
    ic = Re("url").parse,
    ac = Re("fs"),
    Stream_3 = Re("stream").Stream,
    cc = Re("crypto"),
    lr = _n(),
    fc = jn(),
    lc = ds(),
    pe = ms(),
    pr = bs();
  function gs(e) {
    return String(e).replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/"/g, "%22");
  }
  function S(e) {
    if (!(this instanceof S)) return new S(e);
    this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], dr.call(this), e = e || {};
    for (var t in e) this[t] = e[t];
  }
  nc.inherits(S, dr);
  S.LINE_BREAK = `\r
`;
  S.DEFAULT_CONTENT_TYPE = "application/octet-stream";
  S.prototype.append = function append(e, t, filename) {
    if (filename = filename || {}, typeof filename === "string") filename = {
      filename: filename
    };
    var n = dr.prototype.append.bind(this);
    if (typeof t === "number" || t == null) t = String(t);
    if (Array.isArray(t)) {
      this._error(Error("Arrays are not supported."));
      return;
    }
    var o = this._multiPartHeader(e, t, filename),
      s = this._multiPartFooter();
    n(o), n(t), n(s), this._trackLength(o, t, filename);
  };
  S.prototype._trackLength = function _trackLength(e, t, r) {
    var n = 0;
    if (r.knownLength != null) n += Number(r.knownLength);else if (Buffer.isBuffer(t)) n = t.length;else if (typeof t === "string") n = Buffer.byteLength(t);
    if (this._valueLength += n, this._overheadLength += Buffer.byteLength(e) + S.LINE_BREAK.length, !t || !t.path && !(t.readable && pe(t, "httpVersion")) && !(t instanceof Stream_3)) return;
    if (!r.knownLength) this._valuesToMeasure.push(t);
  };
  S.prototype._lengthRetriever = function _lengthRetriever(e, t) {
    if (pe(e, "fd")) {
      if (e.end != null && e.end != 1 / 0 && e.start != null) t(null, e.end + 1 - (e.start ? e.start : 0));else ac.stat(e.path, function (r, n) {
        if (r) {
          t(r);
          return;
        }
        var o = n.size - (e.start ? e.start : 0);
        t(null, o);
      });
    } else if (pe(e, "httpVersion")) t(null, Number(e.headers["content-length"]));else if (pe(e, "httpModule")) e.on("response", function (r) {
      e.pause(), t(null, Number(r.headers["content-length"]));
    }), e.resume();else t("Unknown stream");
  };
  S.prototype._multiPartHeader = function _multiPartHeader(e, t, r) {
    if (typeof r.header === "string") return r.header;
    var n = this._getContentDisposition(t, r),
      o = this._getContentType(t, r),
      s = "",
      i = {
        "Content-Disposition": ["form-data", 'name="' + gs(e) + '"'].concat(n || []),
        "Content-Type": [].concat(o || [])
      };
    if (typeof r.header === "object") pr(i, r.header);
    var a;
    for (var l in i) if (pe(i, l)) {
      if (a = i[l], a == null) continue;
      if (!Array.isArray(a)) a = [a];
      if (a.length) s += l + ": " + a.join("; ") + S.LINE_BREAK;
    }
    return "--" + this.getBoundary() + S.LINE_BREAK + s + S.LINE_BREAK;
  };
  S.prototype._getContentDisposition = function _getContentDisposition(e, t) {
    var r;
    if (typeof t.filepath === "string") r = fr.normalize(t.filepath).replace(/\\/g, "/");else if (t.filename || e && (e.name || e.path)) r = fr.basename(t.filename || e && (e.name || e.path));else if (e && e.readable && pe(e, "httpVersion")) r = fr.basename(e.client._httpMessage.path || "");
    if (r) return 'filename="' + gs(r) + '"';
  };
  S.prototype._getContentType = function _getContentType(e, t) {
    var contentType = t.contentType;
    if (!contentType && e && e.name) contentType = lr.lookup(e.name);
    if (!contentType && e && e.path) contentType = lr.lookup(e.path);
    if (!contentType && e && e.readable && pe(e, "httpVersion")) contentType = e.headers["content-type"];
    if (!contentType && (t.filepath || t.filename)) contentType = lr.lookup(t.filepath || t.filename);
    if (!contentType && e && typeof e === "object") contentType = S.DEFAULT_CONTENT_TYPE;
    return contentType;
  };
  S.prototype._multiPartFooter = function _multiPartFooter() {
    return function (e) {
      var LINE_BREAK = S.LINE_BREAK,
        r = this._streams.length === 0;
      if (r) LINE_BREAK += this._lastBoundary();
      e(LINE_BREAK);
    }.bind(this);
  };
  S.prototype._lastBoundary = function _lastBoundary() {
    return "--" + this.getBoundary() + "--" + S.LINE_BREAK;
  };
  S.prototype.getHeaders = function getHeaders(e) {
    var t,
      r = {
        "content-type": "multipart/form-data; boundary=" + this.getBoundary()
      };
    for (t in e) if (pe(e, t)) r[t.toLowerCase()] = e[t];
    return r;
  };
  S.prototype.setBoundary = function setBoundary(e) {
    if (typeof e !== "string") throw TypeError("FormData boundary must be a string");
    this._boundary = e;
  };
  S.prototype.getBoundary = function getBoundary() {
    if (!this._boundary) this._generateBoundary();
    return this._boundary;
  };
  S.prototype.getBuffer = function getBuffer() {
    var e = new Buffer.alloc(0),
      t = this.getBoundary();
    for (var r = 0, n = this._streams.length; r < n; r++) if (typeof this._streams[r] !== "function") {
      if (Buffer.isBuffer(this._streams[r])) e = Buffer.concat([e, this._streams[r]]);else e = Buffer.concat([e, Buffer.from(this._streams[r])]);
      if (typeof this._streams[r] !== "string" || this._streams[r].substring(2, t.length + 2) !== t) e = Buffer.concat([e, Buffer.from(S.LINE_BREAK)]);
    }
    return Buffer.concat([e, Buffer.from(this._lastBoundary())]);
  };
  S.prototype._generateBoundary = function _generateBoundary() {
    this._boundary = "--------------------------" + cc.randomBytes(12).toString("hex");
  };
  S.prototype.getLengthSync = function getLengthSync() {
    var e = this._overheadLength + this._valueLength;
    if (this._streams.length) e += this._lastBoundary().length;
    if (!this.hasKnownLength()) this._error(Error("Cannot calculate proper length in synchronous way."));
    return e;
  };
  S.prototype.hasKnownLength = function hasKnownLength() {
    var e = !0;
    if (this._valuesToMeasure.length) e = !1;
    return e;
  };
  S.prototype.getLength = function getLength(e) {
    var t = this._overheadLength + this._valueLength;
    if (this._streams.length) t += this._lastBoundary().length;
    if (!this._valuesToMeasure.length) {
      process.nextTick(e.bind(this, null, t));
      return;
    }
    fc.parallel(this._valuesToMeasure, this._lengthRetriever, function (r, n) {
      if (r) {
        e(r);
        return;
      }
      n.forEach(function (item) {
        t += item;
      }), e(null, t);
    });
  };
  S.prototype.submit = function submit(e, t) {
    var r,
      n,
      o = {
        method: "post"
      };
    if (typeof e === "string") e = ic(e), n = pr({
      port: e.port,
      path: e.pathname,
      host: e.hostname,
      protocol: e.protocol
    }, o);else if (n = pr(e, o), !n.port) n.port = n.protocol === "https:" ? 443 : 80;
    if (n.headers = this.getHeaders(e.headers), n.protocol === "https:") r = sc.request(n);else r = oc.request(n);
    return this.getLength(function (s, i) {
      if (s && s !== "Unknown stream") {
        this._error(s);
        return;
      }
      if (i) r.setHeader("Content-Length", i);
      if (this.pipe(r), t) {
        var a,
          l = function (f, c) {
            return r.removeListener("error", l), r.removeListener("response", a), t.call(this, f, c);
          };
        a = l.bind(this, null), r.on("error", l), r.on("response", a);
      }
    }.bind(this)), r;
  };
  S.prototype._error = function _error(e) {
    if (!this.error) this.error = e, this.pause(), this.emit("error", e);
  };
  S.prototype.toString = function toString() {
    return "[object FormData]";
  };
  lc(S.prototype, "FormData");
  Es.exports = S;
});
var iWr = k(function (Cd, Us) {
  var ze = 1000,
    $e = ze * 60,
    Ve = $e * 60,
    Ae = Ve * 24,
    qc = Ae * 7,
    Ic = Ae * 365.25;
  Us.exports = function exports(e, t) {
    t = t || {};
    var r = typeof e;
    if (r === "string" && e.length > 0) return kc(e);else if (r === "number" && isFinite(e)) return t.long ? Mc(e) : jc(e);
    throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
  };
  function kc(e) {
    if (e = String(e), e.length > 100) return;
    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
    if (!t) return;
    var r = parseFloat(t[1]),
      n = (t[2] || "ms").toLowerCase();
    switch (n) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return r * Ic;
      case "weeks":
      case "week":
      case "w":
        return r * qc;
      case "days":
      case "day":
      case "d":
        return r * Ae;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return r * Ve;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return r * $e;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return r * ze;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return r;
      default:
        return;
    }
  }
  function jc(e) {
    var t = Math.abs(e);
    if (t >= Ae) return Math.round(e / Ae) + "d";
    if (t >= Ve) return Math.round(e / Ve) + "h";
    if (t >= $e) return Math.round(e / $e) + "m";
    if (t >= ze) return Math.round(e / ze) + "s";
    return e + "ms";
  }
  function Mc(e) {
    var t = Math.abs(e);
    if (t >= Ae) return Nt(e, t, Ae, "day");
    if (t >= Ve) return Nt(e, t, Ve, "hour");
    if (t >= $e) return Nt(e, t, $e, "minute");
    if (t >= ze) return Nt(e, t, ze, "second");
    return e + " ms";
  }
  function Nt(e, t, r, n) {
    var o = t >= r * 1.5;
    return Math.round(e / r) + " " + n + (o ? "s" : "");
  }
});
var Cr = k(function (vd, qs) {
  function Hc(e) {
    r.debug = r, r.default = r, r.coerce = l, r.disable = i, r.enable = o, r.enabled = a, r.humanize = iWr(), r.destroy = f, Object.keys(e).forEach(item => {
      r[item] = e[item];
    }), r.names = [], r.skips = [], r.formatters = {};
    function t(c) {
      let p = 0;
      for (let d = 0; d < c.length; d++) p = (p << 5) - p + c.charCodeAt(d), p |= 0;
      return r.colors[Math.abs(p) % r.colors.length];
    }
    r.selectColor = t;
    function r(c) {
      let p,
        d = null,
        b,
        m;
      function g(...h) {
        if (!g.enabled) return;
        let E = g,
          B = Number(new Date()),
          C = B - (p || B);
        if (E.diff = C, E.prev = p, E.curr = B, p = B, h[0] = r.coerce(h[0]), typeof h[0] !== "string") h.unshift("%O");
        let x = 0;
        h[0] = h[0].replace(/%([a-zA-Z%])/g, (G, v) => {
          if (G === "%%") return "%";
          x++;
          let J = r.formatters[v];
          if (typeof J === "function") {
            let N = h[x];
            G = J.call(E, N), h.splice(x, 1), x--;
          }
          return G;
        }), r.formatArgs.call(E, h), (E.log || r.log).apply(E, h);
      }
      if (g.namespace = c, g.useColors = r.useColors(), g.color = r.selectColor(c), g.extend = n, g.destroy = r.destroy, Object.defineProperty(g, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => {
          if (d !== null) return d;
          if (b !== r.namespaces) b = r.namespaces, m = r.enabled(c);
          return m;
        },
        set: h => {
          d = h;
        }
      }), typeof r.init === "function") r.init(g);
      return g;
    }
    function n(c, p) {
      let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
      return d.log = this.log, d;
    }
    function o(c) {
      r.save(c), r.namespaces = c, r.names = [], r.skips = [];
      let p = (typeof c === "string" ? c : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (let d of p) if (d[0] === "-") r.skips.push(d.slice(1));else r.names.push(d);
    }
    function s(c, p) {
      let d = 0,
        b = 0,
        m = -1,
        g = 0;
      while (d < c.length) if (b < p.length && (p[b] === c[d] || p[b] === "*")) {
        if (p[b] === "*") m = b, g = d, b++;else d++, b++;
      } else if (m !== -1) b = m + 1, g++, d = g;else return !1;
      while (b < p.length && p[b] === "*") b++;
      return b === p.length;
    }
    function i() {
      let c = [...r.names, ...r.skips.map(item => "-" + item)].join(",");
      return r.enable(""), c;
    }
    function a(c) {
      for (let p of r.skips) if (s(c, p)) return !1;
      for (let p of r.names) if (s(c, p)) return !0;
      return !1;
    }
    function l(c) {
      if (c instanceof Error) return c.stack || c.message;
      return c;
    }
    function f() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  qs.exports = Hc;
});
var Is = k(function (vr, Ut) {
  vr.formatArgs = $c;
  vr.save = Vc;
  vr.load = Wc;
  vr.useColors = zc;
  vr.storage = Gc();
  vr.destroy = (() => {
    let e = !1;
    return () => {
      if (!e) e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    };
  })();
  vr.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  function zc() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
    let e;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function $c(e) {
    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + Ut.exports.humanize(this.diff), !this.useColors) return;
    let t = "color: " + this.color;
    e.splice(1, 0, t, "color: inherit");
    let r = 0,
      n = 0;
    e[0].replace(/%[a-zA-Z%]/g, o => {
      if (o === "%%") return;
      if (r++, o === "%c") n = r;
    }), e.splice(n, 0, t);
  }
  vr.log = console.debug || console.log || (() => {});
  function Vc(e) {
    try {
      if (e) vr.storage.setItem("debug", e);else vr.storage.removeItem("debug");
    } catch (error) {}
  }
  function Wc() {
    let e;
    try {
      e = vr.storage.getItem("debug");
    } catch (error) {}
    if (!e && typeof process < "u" && "env" in process) e = process.env.DEBUG;
    return e;
  }
  function Gc() {
    try {
      return localStorage;
    } catch (error) {}
  }
  Ut.exports = Cr()(vr);
  var {
    formatters: formatters
  } = Ut.exports;
  formatters.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (error) {
      return "[UnexpectedJSONParseError]: " + error.message;
    }
  };
});
var mYn = k(function (Pd, ks) {
  ks.exports = (e, t = process.argv) => {
    let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--",
      n = t.indexOf(r + e),
      o = t.indexOf("--");
    return n !== -1 && (o === -1 || n < o);
  };
});
var Hs = k(function (Fd, Ms) {
  var js = Re("os"),
    qt = Re("tty"),
    ee = mYn(),
    {
      env: env
    } = process,
    It;
  if (ee("no-color") || ee("no-colors") || ee("color=false") || ee("color=never")) It = 0;else if (ee("color") || ee("colors") || ee("color=true") || ee("color=always")) It = 1;
  function rf() {
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") return 1;
      if (env.FORCE_COLOR === "false") return 0;
      return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  function nf(level) {
    if (level === 0) return !1;
    return {
      level: level,
      hasBasic: !0,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function of(e, {
    streamIsTTY: streamIsTTY,
    sniffFlags = !0
  } = {}) {
    let n = rf();
    if (n !== void 0) It = n;
    let o = sniffFlags ? It : n;
    if (o === 0) return 0;
    if (sniffFlags) {
      if (ee("color=16m") || ee("color=full") || ee("color=truecolor")) return 3;
      if (ee("color=256")) return 2;
    }
    if (e && !streamIsTTY && o === void 0) return 0;
    let s = o || 0;
    if (env.TERM === "dumb") return s;
    {
      let i = js.release().split(".");
      if (Number(i[0]) >= 10 && Number(i[2]) >= 10586) return Number(i[2]) >= 14931 ? 3 : 2;
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE", "DRONE"].some(item => item in env) || env.CI_NAME === "codeship") return 1;
      return s;
    }
    if ("TEAMCITY_VERSION" in env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    if (env.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in env) {
      let i = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return i >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) return 1;
    if ("COLORTERM" in env) return 1;
    return s;
  }
  function supportsColor(e, t = {}) {
    let r = of(e, {
      streamIsTTY: e && e.isTTY,
      ...t
    });
    return nf(r);
  }
  Ms.exports = {
    supportsColor: supportsColor,
    stdout: supportsColor({
      isTTY: qt.isatty(1)
    }),
    stderr: supportsColor({
      isTTY: qt.isatty(2)
    })
  };
});
var Ws = k(function (Pr, kt) {
  var zs = Re("tty"),
    me = Re("util");
  Pr.init = pf;
  Pr.log = cf;
  Pr.formatArgs = af;
  Pr.save = ff;
  Pr.load = lf;
  Pr.useColors = sf;
  Pr.destroy = me.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  Pr.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = Hs();
    if (e && (e.stderr || e).level >= 2) Pr.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
  } catch (error) {}
  Pr.inspectOpts = Object.keys(process.env).filter(item => /^debug_/i.test(item)).reduce((acc, item) => {
    let r = item.substring(6).toLowerCase().replace(/_([a-z])/g, (o, s) => s.toUpperCase()),
      n = process.env[item];
    if (/^(yes|on|true|enabled)$/i.test(n)) n = !0;else if (/^(no|off|false|disabled)$/i.test(n)) n = !1;else if (n === "null") n = null;else n = Number(n);
    return acc[r] = n, acc;
  }, {});
  function sf() {
    return "colors" in Pr.inspectOpts ? Boolean(Pr.inspectOpts.colors) : zs.isatty(process.stderr.fd);
  }
  function af(e) {
    let {
      namespace: namespace,
      useColors: useColors
    } = this;
    if (useColors) {
      let color = this.color,
        o = "\x1B[3" + (color < 8 ? color : "8;5;" + color),
        s = `  ${o};1m${namespace} \x1B[0m`;
      e[0] = s + e[0].split(`
`).join(`
` + s), e.push(o + "m+" + kt.exports.humanize(this.diff) + "\x1B[0m");
    } else e[0] = uf() + namespace + " " + e[0];
  }
  function uf() {
    if (Pr.inspectOpts.hideDate) return "";
    return new Date().toISOString() + " ";
  }
  function cf(...e) {
    return process.stderr.write(me.formatWithOptions(Pr.inspectOpts, ...e) + `
`);
  }
  function ff(e) {
    if (e) process.env.DEBUG = e;else delete process.env.DEBUG;
  }
  function lf() {
    return process.env.DEBUG;
  }
  function pf(e) {
    e.inspectOpts = {};
    let t = Object.keys(Pr.inspectOpts);
    for (let r = 0; r < t.length; r++) e.inspectOpts[t[r]] = Pr.inspectOpts[t[r]];
  }
  kt.exports = Cr()(Pr);
  var {
    formatters: formatters_2
  } = kt.exports;
  formatters_2.o = function (e) {
    return this.inspectOpts.colors = this.useColors, me.inspect(e, this.inspectOpts).split(`
`).map(item => item.trim()).join(" ");
  };
  formatters_2.O = function (e) {
    return this.inspectOpts.colors = this.useColors, me.inspect(e, this.inspectOpts);
  };
});
var cBt = k(function (Bd, Fr) {
  if (typeof process > "u" || process.type === "renderer" || !1 || process.__nwjs) Fr.exports = Is();else Fr.exports = Ws();
});
var Js = k(function (Nd, Gs) {
  var at;
  Gs.exports = function exports() {
    if (!at) {
      try {
        at = cBt()("follow-redirects");
      } catch (error) {}
      if (typeof at !== "function") at = function () {};
    }
    at.apply(null, arguments);
  };
});
var Zs = k(function (Dd, zr) {
  var ct = Re("url"),
    URL_2 = ct.URL,
    http = Re("http"),
    https = Re("https"),
    Writable = Re("stream").Writable,
    qr = Re("assert"),
    Ks = Js();
  (function () {
    var t = typeof process < "u",
      r = typeof window < "u" && typeof document < "u",
      n = ve(Error.captureStackTrace);
    if (!t && (r || !n)) console.warn("The follow-redirects package should be excluded from browser builds.");
  })();
  var Ir = !1;
  try {
    qr(new URL_2(""));
  } catch (error) {
    Ir = error.code === "ERR_INVALID_URL";
  }
  var xf = ["Authorization", "Proxy-Authorization", "Cookie"],
    _f = ["auth", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "hash"],
    kr = ["abort", "aborted", "connect", "error", "socket", "timeout"],
    jr = Object.create(null);
  kr.forEach(function (item) {
    jr[item] = function (t, r, n) {
      this._redirectable.emit(item, t, r, n);
    };
  });
  var Br = ft("ERR_INVALID_URL", "Invalid URL", TypeError),
    Nr = ft("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"),
    Sf = ft("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", Nr),
    Af = ft("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"),
    Of = ft("ERR_STREAM_WRITE_AFTER_END", "write after end"),
    Cf = Writable.prototype.destroy || Ys;
  function Y(e, t) {
    if (Writable.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t) this.on("response", t);
    var r = this;
    this._onNativeResponse = function _onNativeResponse(n) {
      try {
        r._processResponse(n);
      } catch (o) {
        r.emit("error", o instanceof Nr ? o : new Nr({
          cause: o
        }));
      }
    }, this._headerFilter = new RegExp("^(?:" + xf.concat(e.sensitiveHeaders).map(Bf).join("|") + ")$", "i"), this._performRequest();
  }
  Y.prototype = Object.create(Writable.prototype);
  Y.prototype.abort = function abort() {
    Hr(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
  };
  Y.prototype.destroy = function destroy(e) {
    return Hr(this._currentRequest, e), Cf.call(this, e), this;
  };
  Y.prototype.write = function write(data, encoding, r) {
    if (this._ending) throw new Of();
    if (!Ce(data) && !Ff(data)) throw TypeError("data should be a string, Buffer or Uint8Array");
    if (ve(encoding)) r = encoding, encoding = null;
    if (data.length === 0) {
      if (r) r();
      return;
    }
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) this._requestBodyLength += data.length, this._requestBodyBuffers.push({
      data: data,
      encoding: encoding
    }), this._currentRequest.write(data, encoding, r);else this.emit("error", new Af()), this.abort();
  };
  Y.prototype.end = function end(e, t, r) {
    if (ve(e)) r = e, e = t = null;else if (ve(t)) r = t, t = null;
    if (!e) this._ended = this._ending = !0, this._currentRequest.end(null, null, r);else {
      var n = this,
        _currentRequest = this._currentRequest;
      this.write(e, t, function () {
        n._ended = !0, _currentRequest.end(null, null, r);
      }), this._ending = !0;
    }
  };
  Y.prototype.setHeader = function setHeader(e, t) {
    this._options.headers[e] = t, this._currentRequest.setHeader(e, t);
  };
  Y.prototype.removeHeader = function removeHeader(e) {
    delete this._options.headers[e], this._currentRequest.removeHeader(e);
  };
  Y.prototype.setTimeout = function (e, t) {
    var r = this;
    function n(i) {
      i.setTimeout(e), i.removeListener("timeout", i.destroy), i.addListener("timeout", i.destroy);
    }
    function o(i) {
      if (r._timeout) clearTimeout(r._timeout);
      r._timeout = setTimeout(function () {
        r.emit("timeout"), s();
      }, e), n(i);
    }
    function s() {
      if (r._timeout) clearTimeout(r._timeout), r._timeout = null;
      if (r.removeListener("abort", s), r.removeListener("error", s), r.removeListener("response", s), r.removeListener("close", s), t) r.removeListener("timeout", t);
      if (!r.socket) r._currentRequest.removeListener("socket", o);
    }
    if (t) this.on("timeout", t);
    if (this.socket) o(this.socket);else this._currentRequest.once("socket", o);
    return this.on("socket", n), this.on("abort", s), this.on("error", s), this.on("response", s), this.on("close", s), this;
  };
  ["flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(function (item) {
    Y.prototype[item] = function (t, r) {
      return this._currentRequest[item](t, r);
    };
  });
  ["aborted", "connection", "socket"].forEach(function (item) {
    Object.defineProperty(Y.prototype, item, {
      get: function () {
        return this._currentRequest[item];
      }
    });
  });
  Y.prototype._sanitizeOptions = function _sanitizeOptions(e) {
    if (!e.headers) e.headers = {};
    if (!Pf(e.sensitiveHeaders)) e.sensitiveHeaders = [];
    if (e.host) {
      if (!e.hostname) e.hostname = e.host;
      delete e.host;
    }
    if (!e.pathname && e.path) {
      var t = e.path.indexOf("?");
      if (t < 0) e.pathname = e.path;else e.pathname = e.path.substring(0, t), e.search = e.path.substring(t);
    }
  };
  Y.prototype._performRequest = function _performRequest() {
    var protocol = this._options.protocol,
      t = this._options.nativeProtocols[protocol];
    if (!t) throw TypeError("Unsupported protocol " + protocol);
    if (this._options.agents) {
      var r = protocol.slice(0, -1);
      this._options.agent = this._options.agents[r];
    }
    var n = this._currentRequest = t.request(this._options, this._onNativeResponse);
    n._redirectable = this;
    for (var o of kr) n.on(o, jr[o]);
    if (this._currentUrl = /^\//.test(this._options.path) ? ct.format(this._options) : this._options.path, this._isRedirect) {
      var s = 0,
        i = this,
        _requestBodyBuffers = this._requestBodyBuffers;
      (function l(f) {
        if (n === i._currentRequest) {
          if (f) i.emit("error", f);else if (s < _requestBodyBuffers.length) {
            var c = _requestBodyBuffers[s++];
            if (!n.finished) n.write(c.data, c.encoding, l);
          } else if (i._ended) n.end();
        }
      })();
    }
  };
  Y.prototype._processResponse = function _processResponse(e) {
    var statusCode = e.statusCode;
    if (this._options.trackRedirects) this._redirects.push({
      url: this._currentUrl,
      headers: e.headers,
      statusCode: statusCode
    });
    var location = e.headers.location;
    if (!location || this._options.followRedirects === !1 || statusCode < 300 || statusCode >= 400) {
      e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), this._requestBodyBuffers = [];
      return;
    }
    if (Hr(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects) throw new Sf();
    var headers,
      beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) headers = Object.assign({
      Host: e.req.getHeader("host")
    }, this._options.headers);
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) this._options.method = "GET", this._requestBodyBuffers = [], Lr(/^content-/i, this._options.headers);
    var i = Lr(/^host$/i, this._options.headers),
      a = Mr(this._currentUrl),
      host = i || a.host,
      url = /^\w+:/.test(location) ? this._currentUrl : ct.format(Object.assign(a, {
        host: host
      })),
      c = vf(location, url);
    if (Ks("redirecting to", c.href), this._isRedirect = !0, Dr(c, this._options), c.protocol !== a.protocol && c.protocol !== "https:" || c.host !== host && !Tf(c.host, host)) Lr(this._headerFilter, this._options.headers);
    if (ve(beforeRedirect)) {
      var p = {
          headers: e.headers,
          statusCode: statusCode
        },
        d = {
          url: url,
          method: method,
          headers: headers
        };
      beforeRedirect(this._options, p, d), this._sanitizeOptions(this._options);
    }
    this._performRequest();
  };
  function Xs(e) {
    var t = {
        maxRedirects: 21,
        maxBodyLength: 10485760
      },
      r = {};
    return Object.keys(e).forEach(function (item) {
      var protocol_2 = item + ":",
        s = r[protocol_2] = e[item],
        i = t[item] = Object.create(s);
      function value_4(f, c, p) {
        if (Lf(f)) f = Dr(f);else if (Ce(f)) f = Dr(Mr(f));else p = c, c = Qs(f), f = {
          protocol: protocol_2
        };
        if (ve(c)) p = c, c = null;
        if (c = Object.assign({
          maxRedirects: t.maxRedirects,
          maxBodyLength: t.maxBodyLength
        }, f, c), c.nativeProtocols = r, !Ce(c.host) && !Ce(c.hostname)) c.hostname = "::1";
        return qr.equal(c.protocol, protocol_2, "protocol mismatch"), Ks("options", c), new Y(c, p);
      }
      function value_5(f, c, p) {
        var d = i.request(f, c, p);
        return d.end(), d;
      }
      Object.defineProperties(i, {
        request: {
          value: value_4,
          configurable: !0,
          enumerable: !0,
          writable: !0
        },
        get: {
          value: value_5,
          configurable: !0,
          enumerable: !0,
          writable: !0
        }
      });
    }), t;
  }
  function Ys() {}
  function Mr(input) {
    var t;
    if (Ir) t = new URL_2(input);else if (t = Qs(ct.parse(input)), !Ce(t.protocol)) throw new Br({
      input: input
    });
    return t;
  }
  function vf(e, t) {
    return Ir ? new URL_2(e, t) : Mr(ct.resolve(t, e));
  }
  function Qs(e) {
    if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname)) throw new Br({
      input: e.href || e
    });
    if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host)) throw new Br({
      input: e.href || e
    });
    return e;
  }
  function Dr(e, t) {
    var r = t || {};
    for (var n of _f) r[n] = e[n];
    if (r.hostname.startsWith("[")) r.hostname = r.hostname.slice(1, -1);
    if (r.port !== "") r.port = Number(r.port);
    return r.path = r.search ? r.pathname + r.search : r.pathname, r;
  }
  function Lr(e, t) {
    var r;
    for (var n in t) if (e.test(n)) r = t[n], delete t[n];
    return r === null || typeof r > "u" ? void 0 : String(r).trim();
  }
  function ft(e, t, r) {
    function value_6(o) {
      if (ve(Error.captureStackTrace)) Error.captureStackTrace(this, this.constructor);
      Object.assign(this, o || {}), this.code = e, this.message = this.cause ? t + ": " + this.cause.message : t;
    }
    return value_6.prototype = Object.create((r || Error).prototype), Object.defineProperties(value_6.prototype, {
      constructor: {
        value: value_6,
        enumerable: !1
      },
      name: {
        value: "Error [" + e + "]",
        enumerable: !1
      }
    }), value_6;
  }
  function Hr(e, t) {
    for (var r of kr) e.removeListener(r, jr[r]);
    e.on("error", Ys), e.destroy(t);
  }
  function Tf(e, t) {
    qr(Ce(e) && Ce(t));
    var r = e.length - t.length - 1;
    return r > 0 && e[r] === "." && e.endsWith(t);
  }
  function Pf(e) {
    return e instanceof Array;
  }
  function Ce(e) {
    return typeof e === "string" || e instanceof String;
  }
  function ve(e) {
    return typeof e === "function";
  }
  function Ff(e) {
    return typeof e === "object" && "length" in e;
  }
  function Lf(e) {
    return URL_2 && e instanceof URL_2;
  }
  function Bf(e) {
    return e.replace(/[\]\\/()*+?.$]/g, "\\$&");
  }
  zr.exports = Xs({
    http: http,
    https: https
  });
  zr.exports.wrap = Xs;
});
function Ke(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
var {
    toString: toString
  } = Object.prototype,
  {
    getPrototypeOf: getPrototypeOf
  } = Object,
  {
    iterator: iterator,
    toStringTag: toStringTag
  } = Symbol,
  kindOf = (e => t => {
    let r = toString.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  kindOfTest = e => (e = e.toLowerCase(), t => kindOf(t) === e),
  xt = e => t => typeof t === e,
  {
    isArray: isArray
  } = Array,
  isUndefined = xt("undefined");
function isBuffer(e) {
  return e !== null && !isUndefined(e) && e.constructor !== null && !isUndefined(e.constructor) && isFunction(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(e) {
  let t;
  if (typeof ArrayBuffer < "u" && ArrayBuffer.isView) t = ArrayBuffer.isView(e);else t = e && e.buffer && isArrayBuffer(e.buffer);
  return t;
}
var isString = xt("string"),
  isFunction = xt("function"),
  isNumber = xt("number"),
  isObject = e => e !== null && typeof e === "object",
  isBoolean = e => e === !0 || e === !1,
  isPlainObject = e => {
    if (kindOf(e) !== "object") return !1;
    let t = getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(toStringTag in e) && !(iterator in e);
  },
  isEmptyObject = e => {
    if (!isObject(e) || isBuffer(e)) return !1;
    try {
      return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
    } catch (error) {
      return !1;
    }
  },
  isDate = kindOfTest("Date"),
  isFile = kindOfTest("File"),
  isReactNativeBlob = e => !!(e && typeof e.uri < "u"),
  isReactNative = e => e && typeof e.getParts < "u",
  isBlob = kindOfTest("Blob"),
  isFileList = kindOfTest("FileList"),
  isStream = e => isObject(e) && isFunction(e.pipe);
function Yi() {
  if (typeof globalThis < "u") return globalThis;
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  return {};
}
var on = Yi(),
  sn = typeof on.FormData < "u" ? on.FormData : void 0,
  isFormData = e => {
    if (!e) return !1;
    if (sn && e instanceof sn) return !0;
    let t = getPrototypeOf(e);
    if (!t || t === Object.prototype) return !1;
    if (!isFunction(e.append)) return !1;
    let r = kindOf(e);
    return r === "formdata" || r === "object" && isFunction(e.toString) && e.toString() === "[object FormData]";
  },
  isURLSearchParams = kindOfTest("URLSearchParams"),
  [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest),
  trim = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(e, t, {
  allOwnKeys = !1
} = {}) {
  if (e === null || typeof e > "u") return;
  let n, o;
  if (typeof e !== "object") e = [e];
  if (isArray(e)) for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);else {
    if (isBuffer(e)) return;
    let s = allOwnKeys ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length,
      a;
    for (n = 0; n < i; n++) a = s[n], t.call(null, e[a], a, e);
  }
}
function findKey(e, t) {
  if (isBuffer(e)) return null;
  t = t.toLowerCase();
  let r = Object.keys(e),
    n = r.length,
    o;
  while (n-- > 0) if (o = r[n], t === o.toLowerCase()) return o;
  return null;
}
var global_2 = (() => {
    if (typeof globalThis < "u") return globalThis;
    return typeof self < "u" ? self : typeof window < "u" ? window : global;
  })(),
  isContextDefined = e => !isUndefined(e) && e !== global_2;
function merge() {
  let {
      caseless: caseless,
      skipUndefined: skipUndefined
    } = isContextDefined(this) && this || {},
    r = {},
    n = (o, s) => {
      if (s === "__proto__" || s === "constructor" || s === "prototype") return;
      let i = caseless && findKey(r, s) || s;
      if (isPlainObject(r[i]) && isPlainObject(o)) r[i] = merge(r[i], o);else if (isPlainObject(o)) r[i] = merge({}, o);else if (isArray(o)) r[i] = o.slice();else if (!skipUndefined || !isUndefined(o)) r[i] = o;
    };
  for (let o = 0, s = arguments.length; o < s; o++) arguments[o] && forEach(arguments[o], n);
  return r;
}
var extend = (e, t, r, {
    allOwnKeys: allOwnKeys_2
  } = {}) => (forEach(t, (value_7, s) => {
    if (r && isFunction(value_7)) Object.defineProperty(e, s, {
      value: Ke(value_7, r),
      writable: !0,
      enumerable: !0,
      configurable: !0
    });else Object.defineProperty(e, s, {
      value: value_7,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  }, {
    allOwnKeys: allOwnKeys_2
  }), e),
  stripBOM = e => {
    if (e.charCodeAt(0) === 65279) e = e.slice(1);
    return e;
  },
  inherits = (value_8, t, r, n) => {
    value_8.prototype = Object.create(t.prototype, n), Object.defineProperty(value_8.prototype, "constructor", {
      value: value_8,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(value_8, "super", {
      value: t.prototype
    }), r && Object.assign(value_8.prototype, r);
  },
  toFlatObject = (e, t, r, n) => {
    let o,
      s,
      i,
      a = {};
    if (t = t || {}, e == null) return t;
    do {
      o = Object.getOwnPropertyNames(e), s = o.length;
      while (s-- > 0) if (i = o[s], (!n || n(i, e, t)) && !a[i]) t[i] = e[i], a[i] = !0;
      e = r !== !1 && getPrototypeOf(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  endsWith = (e, t, r) => {
    if (e = String(e), r === void 0 || r > e.length) r = e.length;
    r -= t.length;
    let n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  toArray = e => {
    if (!e) return null;
    if (isArray(e)) return e;
    let t = e.length;
    if (!isNumber(t)) return null;
    let r = Array(t);
    while (t-- > 0) r[t] = e[t];
    return r;
  },
  isTypedArray = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && getPrototypeOf(Uint8Array)),
  forEachEntry = (e, t) => {
    let n = (e && e[iterator]).call(e),
      o;
    while ((o = n.next()) && !o.done) {
      let s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  matchAll = (e, t) => {
    let r,
      n = [];
    while ((r = e.exec(t)) !== null) n.push(r);
    return n;
  },
  isHTMLForm = kindOfTest("HTMLFormElement"),
  toCamelCase = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, o) {
    return n.toUpperCase() + o;
  }),
  an = (({
    hasOwnProperty: hasOwnProperty
  }) => (t, r) => hasOwnProperty.call(t, r))(Object.prototype),
  isRegExp = kindOfTest("RegExp"),
  reduceDescriptors = (e, t) => {
    let r = Object.getOwnPropertyDescriptors(e),
      n = {};
    forEach(r, (o, s) => {
      let i;
      if ((i = t(o, s, e)) !== !1) n[s] = i || o;
    }), Object.defineProperties(e, n);
  },
  freezeMethods = e => {
    reduceDescriptors(e, (t, r) => {
      if (isFunction(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
      let n = e[r];
      if (!isFunction(n)) return;
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      if (!t.set) t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      };
    });
  },
  toObjectSet = (e, t) => {
    let r = {},
      n = o => {
        o.forEach(item => {
          r[item] = !0;
        });
      };
    return isArray(e) ? n(e) : n(String(e).split(t)), r;
  },
  noop = () => {},
  toFiniteNumber = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function isSpecCompliantForm(e) {
  return !!(e && isFunction(e.append) && e[toStringTag] === "FormData" && e[iterator]);
}
var toJSONObject = e => {
    let t = [,,,,,,,,,,],
      r = (n, o) => {
        if (isObject(n)) {
          if (t.indexOf(n) >= 0) return;
          if (isBuffer(n)) return n;
          if (!("toJSON" in n)) {
            t[o] = n;
            let s = isArray(n) ? [] : {};
            return forEach(n, (i, a) => {
              let l = r(i, o + 1);
              !isUndefined(l) && (s[a] = l);
            }), t[o] = void 0, s;
          }
        }
        return n;
      };
    return r(e, 0);
  },
  isAsyncFn = kindOfTest("AsyncFunction"),
  isThenable = e => e && (isObject(e) || isFunction(e)) && isFunction(e.then) && isFunction(e.catch),
  setImmediate_2 = ((e, t) => {
    if (e) return setImmediate;
    return t ? ((r, n) => (global_2.addEventListener("message", ({
      source: source,
      data: data_2
    }) => {
      if (source === global_2 && data_2 === r) n.length && n.shift()();
    }, !1), o => {
      n.push(o), global_2.postMessage(r, "*");
    }))(`axios@${Math.random()}`, []) : r => setTimeout(r);
  })(typeof setImmediate === "function", isFunction(global_2.postMessage)),
  asap = typeof queueMicrotask < "u" ? queueMicrotask.bind(global_2) : typeof process < "u" && process.nextTick || setImmediate_2,
  isIterable = e => e != null && isFunction(e[iterator]),
  u = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isEmptyObject: isEmptyObject,
    isReadableStream: isReadableStream,
    isRequest: isRequest,
    isResponse: isResponse,
    isHeaders: isHeaders,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isReactNativeBlob: isReactNativeBlob,
    isReactNative: isReactNative,
    isBlob: isBlob,
    isRegExp: isRegExp,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isTypedArray: isTypedArray,
    isFileList: isFileList,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM,
    inherits: inherits,
    toFlatObject: toFlatObject,
    kindOf: kindOf,
    kindOfTest: kindOfTest,
    endsWith: endsWith,
    toArray: toArray,
    forEachEntry: forEachEntry,
    matchAll: matchAll,
    isHTMLForm: isHTMLForm,
    hasOwnProperty: an,
    hasOwnProp: an,
    reduceDescriptors: reduceDescriptors,
    freezeMethods: freezeMethods,
    toObjectSet: toObjectSet,
    toCamelCase: toCamelCase,
    noop: noop,
    toFiniteNumber: toFiniteNumber,
    findKey: findKey,
    global: global_2,
    isContextDefined: isContextDefined,
    isSpecCompliantForm: isSpecCompliantForm,
    toJSONObject: toJSONObject,
    isAsyncFn: isAsyncFn,
    isThenable: isThenable,
    setImmediate: setImmediate_2,
    asap: asap,
    isIterable: isIterable
  };
class AxiosError extends Error {
  static from(e, t, r, n, o, s) {
    let i = new AxiosError(e.message, t || e.code, r, n, o);
    if (i.cause = e, i.name = e.name, e.status != null && i.status == null) i.status = e.status;
    return s && Object.assign(i, s), i;
  }
  constructor(value_9, t, r, n, o) {
    super(value_9);
    if (Object.defineProperty(this, "message", {
      value: value_9,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), r && (this.config = r), n && (this.request = n), o) this.response = o, this.status = o.status;
  }
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: u.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
}
AxiosError.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
AxiosError.ERR_BAD_OPTION = "ERR_BAD_OPTION";
AxiosError.ECONNABORTED = "ECONNABORTED";
AxiosError.ETIMEDOUT = "ETIMEDOUT";
AxiosError.ERR_NETWORK = "ERR_NETWORK";
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
AxiosError.ERR_DEPRECATED = "ERR_DEPRECATED";
AxiosError.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
AxiosError.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
AxiosError.ERR_CANCELED = "ERR_CANCELED";
AxiosError.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
AxiosError.ERR_INVALID_URL = "ERR_INVALID_URL";
AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
var y = AxiosError;
var Rs = be(ws(), 1),
  FormData_2 = Rs.default;
function isVisitable(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function xs(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function hr(e, t, r) {
  if (!e) return t;
  return e.concat(t).map(function (item, index) {
    return item = xs(item), !r && index ? "[" + item + "]" : item;
  }).join(r ? "." : "");
}
function pc(e) {
  return u.isArray(e) && !e.some(isVisitable);
}
var dc = u.toFlatObject(u, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function hc(e, t, r) {
  if (!u.isObject(e)) throw TypeError("target must be an object");
  t = t || new (FormData_2 || FormData)(), r = u.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function (h, E) {
    return !u.isUndefined(E[h]);
  });
  let metaTokens = r.metaTokens,
    o = r.visitor || defaultVisitor,
    dots = r.dots,
    indexes = r.indexes,
    a = r.Blob || typeof Blob < "u" && Blob,
    l = r.maxDepth === void 0 ? 100 : r.maxDepth,
    f = a && u.isSpecCompliantForm(t);
  if (!u.isFunction(o)) throw TypeError("visitor must be a function");
  function convertValue(g) {
    if (g === null) return "";
    if (u.isDate(g)) return g.toISOString();
    if (u.isBoolean(g)) return g.toString();
    if (!f && u.isBlob(g)) throw new y("Blob is not supported. Use a Buffer instead.");
    if (u.isArrayBuffer(g) || u.isTypedArray(g)) return f && typeof Blob === "function" ? new Blob([g]) : Buffer.from(g);
    return g;
  }
  function defaultVisitor(g, h, E) {
    let B = g;
    if (u.isReactNative(t) && u.isReactNativeBlob(g)) return t.append(hr(E, h, dots), convertValue(g)), !1;
    if (g && !E && typeof g === "object") {
      if (u.endsWith(h, "{}")) h = metaTokens ? h : h.slice(0, -2), g = JSON.stringify(g);else if (u.isArray(g) && pc(g) || (u.isFileList(g) || u.endsWith(h, "[]")) && (B = u.toArray(g))) return h = xs(h), B.forEach(function (item, index) {
        !(u.isUndefined(item) || item === null) && t.append(indexes === !0 ? hr([h], index, dots) : indexes === null ? h : h + "[]", convertValue(item));
      }), !1;
    }
    if (isVisitable(g)) return !0;
    return t.append(hr(E, h, dots), convertValue(g)), !1;
  }
  let d = [],
    b = Object.assign(dc, {
      defaultVisitor: defaultVisitor,
      convertValue: convertValue,
      isVisitable: isVisitable
    });
  function m(g, h, E = 0) {
    if (u.isUndefined(g)) return;
    if (E > l) throw new y("Object is too deeply nested (" + E + " levels). Max depth: " + l, y.ERR_FORM_DATA_DEPTH_EXCEEDED);
    if (d.indexOf(g) !== -1) throw Error("Circular reference detected in " + h.join("."));
    d.push(g), u.forEach(g, function (C, x) {
      if ((!(u.isUndefined(C) || C === null) && o.call(t, C, u.isString(x) ? x.trim() : x, h, b)) === !0) m(C, h ? h.concat(x) : [x], E + 1);
    }), d.pop();
  }
  if (!u.isObject(e)) throw TypeError("data must be an object");
  return m(e), t;
}
var de = hc;
function _s(e) {
  let t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (n) {
    return t[n];
  });
}
function Ss(e, t) {
  this._pairs = [], e && de(e, this, t);
}
var As = Ss.prototype;
As.append = function append(t, r) {
  this._pairs.push([t, r]);
};
As.toString = function toString(t) {
  let r = t ? function (n) {
    return t.call(this, n, _s);
  } : _s;
  return this._pairs.map(function (item) {
    return r(item[0]) + "=" + r(item[1]);
  }, "").join("&");
};
var Os = Ss;
function mc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function _e(e, t, serialize) {
  if (!t) return e;
  let n = serialize && serialize.encode || mc,
    o = u.isFunction(serialize) ? {
      serialize: serialize
    } : serialize,
    s = o && o.serialize,
    i;
  if (s) i = s(t, o);else i = u.isURLSearchParams(t) ? t.toString() : new Os(t, o).toString(n);
  if (i) {
    let a = e.indexOf("#");
    if (a !== -1) e = e.slice(0, a);
    e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Cs {
  constructor() {
    this.handlers = [];
  }
  use(fulfilled, rejected, r) {
    return this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(e) {
    if (this.handlers[e]) this.handlers[e] = null;
  }
  clear() {
    if (this.handlers) this.handlers = [];
  }
  forEach(e) {
    u.forEach(this.handlers, function (r) {
      if (r !== null) e(r);
    });
  }
}
var yr = Cs;
var transitional = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
};
import bc from "crypto";
import yc from "url";
var URLSearchParams = yc.URLSearchParams;
var ALPHA = "abcdefghijklmnopqrstuvwxyz",
  DIGIT = "0123456789",
  ALPHABET = {
    DIGIT: DIGIT,
    ALPHA: ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  },
  generateString = (e = 16, t = ALPHABET.ALPHA_DIGIT) => {
    let r = "",
      {
        length: length
      } = t,
      uint32Array = new Uint32Array(e);
    bc.randomFillSync(uint32Array);
    for (let s = 0; s < e; s++) r += t[uint32Array[s] % length];
    return r;
  },
  Fs = {
    isNode: !0,
    classes: {
      URLSearchParams: URLSearchParams,
      FormData: FormData_2,
      Blob: typeof Blob < "u" && Blob || null
    },
    ALPHABET: ALPHABET,
    generateString: generateString,
    protocols: ["http", "https", "file", "data"]
  };
var wr = {};
vo(wr, {
  hasBrowserEnv: () => Er,
  hasStandardBrowserEnv: () => Ec,
  hasStandardBrowserWebWorkerEnv: () => wc,
  navigator: () => gr,
  origin: () => Rc
});
var Er = typeof window < "u" && typeof document < "u",
  gr = typeof navigator === "object" && navigator || void 0,
  Ec = Er && (!gr || ["ReactNative", "NativeScript", "NS"].indexOf(gr.product) < 0),
  wc = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function")(),
  Rc = Er && window.location.href || "http://localhost";
var A = {
  ...wr,
  ...Fs
};
function Rr(e, t) {
  return de(e, new A.classes.URLSearchParams(), {
    visitor: function visitor(r, n, o, s) {
      if (A.isNode && u.isBuffer(r)) return this.append(n, r.toString("base64")), !1;
      return s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function xc(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map(item => item[0] === "[]" ? "" : item[1] || item[0]);
}
function _c(e) {
  let t = {},
    r = Object.keys(e),
    n,
    o = r.length,
    s;
  for (n = 0; n < o; n++) s = r[n], t[s] = e[s];
  return t;
}
function Sc(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    if (i === "__proto__") return !0;
    let a = Number.isFinite(+i),
      l = s >= r.length;
    if (i = !i && u.isArray(o) ? o.length : i, l) {
      if (u.hasOwnProp(o, i)) o[i] = u.isArray(o[i]) ? o[i].concat(n) : [o[i], n];else o[i] = n;
      return !a;
    }
    if (!o[i] || !u.isObject(o[i])) o[i] = [];
    if (t(r, n, o[i], s) && u.isArray(o[i])) o[i] = _c(o[i]);
    return !a;
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    let r = {};
    return u.forEachEntry(e, (n, o) => {
      t(xc(n), o, r, 0);
    }), r;
  }
  return null;
}
var Lt = Sc;
var Me = (e, t) => e != null && u.hasOwnProp(e, t) ? e[t] : void 0;
function Ac(e, t, r) {
  if (u.isString(e)) try {
    return (t || JSON.parse)(e), u.trim(e);
  } catch (error) {
    if (error.name !== "SyntaxError") throw error;
  }
  return (r || JSON.stringify)(e);
}
var xr = {
  transitional: transitional,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function (t, r) {
    let n = r.getContentType() || "",
      o = n.indexOf("application/json") > -1,
      s = u.isObject(t);
    if (s && u.isHTMLForm(t)) t = new FormData(t);
    if (u.isFormData(t)) return o ? JSON.stringify(Lt(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t)) return t;
    if (u.isArrayBufferView(t)) return t.buffer;
    if (u.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      let l = Me(this, "formSerializer");
      if (n.indexOf("application/x-www-form-urlencoded") > -1) return Rr(t, l).toString();
      if ((a = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        let f = Me(this, "env"),
          c = f && f.FormData;
        return de(a ? {
          "files[]": t
        } : t, c && new c(), l);
      }
    }
    if (s || o) return r.setContentType("application/json", !1), Ac(t);
    return t;
  }],
  transformResponse: [function (t) {
    let r = Me(this, "transitional") || xr.transitional,
      n = r && r.forcedJSONParsing,
      o = Me(this, "responseType"),
      s = o === "json";
    if (u.isResponse(t) || u.isReadableStream(t)) return t;
    if (t && u.isString(t) && (n && !o || s)) {
      let a = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t, Me(this, "parseReviver"));
      } catch (error) {
        if (a) {
          if (error.name === "SyntaxError") throw y.from(error, y.ERR_BAD_RESPONSE, this, null, Me(this, "response"));
          throw error;
        }
      }
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
  },
  validateStatus: function validateStatus(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
u.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
  xr.headers[e] = {};
});
var He = xr;
var Oc = u.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
  Ls = e => {
    let t = {},
      r,
      n,
      o;
    return e && e.split(`
`).forEach(function (item) {
      if (o = item.indexOf(":"), r = item.substring(0, o).trim().toLowerCase(), n = item.substring(o + 1).trim(), !r || t[r] && Oc[r]) return;
      if (r === "set-cookie") {
        if (t[r]) t[r].push(n);else t[r] = [n];
      } else t[r] = t[r] ? t[r] + ", " + n : n;
    }), t;
  };
var Bs = Symbol("internals"),
  Cc = /[^\x09\x20-\x7E\x80-\xFF]/g;
function vc(e) {
  let t = 0,
    r = e.length;
  while (t < r) {
    let n = e.charCodeAt(t);
    if (n !== 9 && n !== 32) break;
    t += 1;
  }
  while (r > t) {
    let n = e.charCodeAt(r - 1);
    if (n !== 9 && n !== 32) break;
    r -= 1;
  }
  return t === 0 && r === e.length ? e : e.slice(t, r);
}
function nt(e) {
  return e && String(e).trim().toLowerCase();
}
function Tc(e) {
  return vc(e.replace(Cc, ""));
}
function Bt(e) {
  if (e === !1 || e == null) return e;
  return u.isArray(e) ? e.map(Bt) : Tc(String(e));
}
function Pc(e) {
  let t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
    n;
  while (n = r.exec(e)) t[n[1]] = n[2];
  return t;
}
var Fc = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _r(e, t, r, n, o) {
  if (u.isFunction(n)) return n.call(this, t, r);
  if (o) t = r;
  if (!u.isString(t)) return;
  if (u.isString(n)) return t.indexOf(n) !== -1;
  if (u.isRegExp(n)) return n.test(t);
}
function Lc(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Bc(e, t) {
  let r = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach(item => {
    Object.defineProperty(e, item + r, {
      value: function value(o, s, i) {
        return this[item].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class ot {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    let n = this;
    function o(i, a, l) {
      let f = nt(a);
      if (!f) throw Error("header name must be a non-empty string");
      let c = u.findKey(n, f);
      if (!c || n[c] === void 0 || l === !0 || l === void 0 && n[c] !== !1) n[c || a] = Bt(i);
    }
    let s = (i, a) => u.forEach(i, (l, f) => o(l, f, a));
    if (u.isPlainObject(e) || e instanceof this.constructor) s(e, t);else if (u.isString(e) && (e = e.trim()) && !Fc(e)) s(Ls(e), t);else if (u.isObject(e) && u.isIterable(e)) {
      let i = {},
        a,
        l;
      for (let f of e) {
        if (!u.isArray(f)) throw TypeError("Object iterator must return a key-value pair");
        i[l = f[0]] = (a = i[l]) ? u.isArray(a) ? [...a, f[1]] : [a, f[1]] : f[1];
      }
      s(i, t);
    } else e != null && o(t, e, r);
    return this;
  }
  get(e, t) {
    if (e = nt(e), e) {
      let r = u.findKey(this, e);
      if (r) {
        let n = this[r];
        if (!t) return n;
        if (t === !0) return Pc(n);
        if (u.isFunction(t)) return t.call(this, n, r);
        if (u.isRegExp(t)) return t.exec(n);
        throw TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = nt(e), e) {
      let r = u.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || _r(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    let r = this,
      n = !1;
    function o(s) {
      if (s = nt(s), s) {
        let i = u.findKey(r, s);
        if (i && (!t || _r(r, r[i], i, t))) delete r[i], n = !0;
      }
    }
    if (u.isArray(e)) e.forEach(o);else o(e);
    return n;
  }
  clear(e) {
    let t = Object.keys(this),
      r = t.length,
      n = !1;
    while (r--) {
      let o = t[r];
      if (!e || _r(this, this[o], o, e, !0)) delete this[o], n = !0;
    }
    return n;
  }
  normalize(e) {
    let t = this,
      r = {};
    return u.forEach(this, (n, o) => {
      let s = u.findKey(r, o);
      if (s) {
        t[s] = Bt(n), delete t[o];
        return;
      }
      let i = e ? Lc(o) : String(o).trim();
      if (i !== o) delete t[o];
      t[i] = Bt(n), r[i] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    let t = Object.create(null);
    return u.forEach(this, (r, n) => {
      r != null && r !== !1 && (t[n] = e && u.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    let r = new this(e);
    return t.forEach(item => r.set(item)), r;
  }
  static accessor(e) {
    let accessors = (this[Bs] = this[Bs] = {
        accessors: {}
      }).accessors,
      n = this.prototype;
    function o(s) {
      let i = nt(s);
      if (!accessors[i]) Bc(n, s), accessors[i] = !0;
    }
    return u.isArray(e) ? e.forEach(o) : o(e), this;
  }
}
ot.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(ot.prototype, ({
  value: value_10
}, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => value_10,
    set(n) {
      this[r] = n;
    }
  };
});
u.freezeMethods(ot);
var P = ot;
function st(e, t) {
  let r = this || He,
    n = t || r,
    o = P.from(n.headers),
    s = n.data;
  return u.forEach(e, function (a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function it(e) {
  return !!(e && e.__CANCEL__);
}
class CanceledError extends y {
  constructor(e, t, r) {
    super(e == null ? "canceled" : e, y.ERR_CANCELED, t, r);
    this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
var Q = CanceledError;
function ue(e, t, r) {
  let validateStatus = r.config.validateStatus;
  if (!r.status || !validateStatus || validateStatus(r.status)) e(r);else t(new y("Request failed with status code " + r.status, [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
}
function Sr(e) {
  if (typeof e !== "string") return !1;
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ar(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Se(e, t, r) {
  let n = !Sr(t);
  if (e && (n || r === !1)) return Ar(e, t);
  return t;
}
var Nc = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};
function Dc(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function Ds(e) {
  var t = (typeof e === "string" ? Dc(e) : e) || {},
    {
      protocol: protocol_3,
      host: host_2,
      port: port
    } = t;
  if (typeof host_2 !== "string" || !host_2 || typeof protocol_3 !== "string") return "";
  if (protocol_3 = protocol_3.split(":", 1)[0], host_2 = host_2.replace(/:\d*$/, ""), port = parseInt(port) || Nc[protocol_3] || 0, !Uc(host_2, port)) return "";
  var s = Or(protocol_3 + "_proxy") || Or("all_proxy");
  if (s && s.indexOf("://") === -1) s = protocol_3 + "://" + s;
  return s;
}
function Uc(e, t) {
  var r = Or("no_proxy").toLowerCase();
  if (!r) return !0;
  if (r === "*") return !1;
  return r.split(/[,\s]/).every(function (item) {
    if (!item) return !0;
    var o = item.match(/^(.+):(\d+)$/),
      s = o ? o[1] : item,
      i = o ? parseInt(o[2]) : 0;
    if (i && i !== t) return !0;
    if (!/^[.*]/.test(s)) return e !== s;
    if (s.charAt(0) === "*") s = s.slice(1);
    return !e.endsWith(s);
  });
}
function Or(e) {
  return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
}
var Ri = be(Zs(), 1);
import Yf from "http";
import Qf from "https";
import Ei from "http2";
import wi from "util";
import { resolve as pi } from "path";
import ye from "zlib";
var Te = "1.15.2";
function lt(e) {
  let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
var Nf = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function $r(e, t, r) {
  let n = r && r.Blob || A.classes.Blob,
    o = lt(e);
  if (t === void 0 && n) t = !0;
  if (o === "data") {
    e = o.length ? e.slice(o.length + 1) : e;
    let s = Nf.exec(e);
    if (!s) throw new y("Invalid URL", y.ERR_INVALID_URL);
    let type = s[1],
      a = s[2],
      l = s[3],
      f = Buffer.from(decodeURIComponent(l), a ? "base64" : "utf8");
    if (t) {
      if (!n) throw new y("Blob is not supported", y.ERR_NOT_SUPPORT);
      return new n([f], {
        type: type
      });
    }
    return f;
  }
  throw new y("Unsupported protocol " + o, y.ERR_NOT_SUPPORT);
}
import se from "stream";
import Df from "stream";
var Vr = Symbol("internals");
class ei extends Df.Transform {
  constructor(e) {
    e = u.toFlatObject(e, {
      maxRate: 0,
      chunkSize: 65536,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (r, n) => !u.isUndefined(n[r]));
    super({
      readableHighWaterMark: e.chunkSize
    });
    let t = this[Vr] = {
      timeWindow: e.timeWindow,
      chunkSize: e.chunkSize,
      maxRate: e.maxRate,
      minChunkSize: e.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on("newListener", r => {
      if (r === "progress") {
        if (!t.isCaptured) t.isCaptured = !0;
      }
    });
  }
  _read(e) {
    let t = this[Vr];
    if (t.onReadCallback) t.onReadCallback();
    return super._read(e);
  }
  _transform(e, t, r) {
    let n = this[Vr],
      maxRate = n.maxRate,
      readableHighWaterMark = this.readableHighWaterMark,
      timeWindow = n.timeWindow,
      a = 1000 / timeWindow,
      l = maxRate / a,
      f = n.minChunkSize !== !1 ? Math.max(n.minChunkSize, l * 0.01) : 0,
      c = (d, b) => {
        let m = Buffer.byteLength(d);
        if (n.bytesSeen += m, n.bytes += m, n.isCaptured && this.emit("progress", n.bytesSeen), this.push(d)) process.nextTick(b);else n.onReadCallback = () => {
          n.onReadCallback = null, process.nextTick(b);
        };
      },
      p = (d, b) => {
        let m = Buffer.byteLength(d),
          g = null,
          h = readableHighWaterMark,
          E,
          B = 0;
        if (maxRate) {
          let C = Date.now();
          if (!n.ts || (B = C - n.ts) >= timeWindow) n.ts = C, E = l - n.bytes, n.bytes = E < 0 ? -E : 0, B = 0;
          E = l - n.bytes;
        }
        if (maxRate) {
          if (E <= 0) return setTimeout(() => {
            b(null, d);
          }, timeWindow - B);
          if (E < h) h = E;
        }
        if (h && m > h && m - h > f) g = d.subarray(h), d = d.subarray(0, h);
        c(d, g ? () => {
          process.nextTick(b, null, g);
        } : b);
      };
    p(e, function d(b, m) {
      if (b) return r(b);
      if (m) p(m, d);else r(null);
    });
  }
}
var Wr = ei;
import { EventEmitter as Zf } from "events";
import qf from "util";
import { Readable as If } from "stream";
var {
    asyncIterator: asyncIterator
  } = Symbol,
  Uf = async function* (e) {
    if (e.stream) yield* e.stream();else if (e.arrayBuffer) yield await e.arrayBuffer();else if (e[asyncIterator]) yield* e[asyncIterator]();else yield e;
  },
  jt = Uf;
var kf = A.ALPHABET.ALPHA_DIGIT + "-_",
  pt = typeof TextEncoder === "function" ? new TextEncoder() : new qf.TextEncoder(),
  Pe = `\r
`,
  jf = pt.encode(Pe),
  Mf = 2;
class ri {
  constructor(e, t) {
    let {
        escapeName: escapeName
      } = this.constructor,
      n = u.isString(t),
      o = `Content-Disposition: form-data; name="${escapeName(e)}"${!n && t.name ? `; filename="${escapeName(t.name)}"` : ""}${Pe}`;
    if (n) t = pt.encode(String(t).replace(/\r?\n|\r\n?/g, Pe));else {
      let s = String(t.type || "application/octet-stream").replace(/[\r\n]/g, "");
      o += `Content-Type: ${s}${Pe}`;
    }
    this.headers = pt.encode(o + Pe), this.contentLength = n ? t.byteLength : t.size, this.size = this.headers.byteLength + this.contentLength + Mf, this.name = e, this.value = t;
  }
  async *encode() {
    yield this.headers;
    let {
      value: value_11
    } = this;
    if (u.isTypedArray(value_11)) yield value_11;else yield* jt(value_11);
    yield jf;
  }
  static escapeName(e) {
    return String(e).replace(/[\r\n"]/g, t => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[t]);
  }
}
var Hf = (e, t, r) => {
    let {
      tag = "form-data-boundary",
      size = 25,
      boundary = tag + "-" + A.generateString(size, kf)
    } = r || {};
    if (!u.isFormData(e)) throw TypeError("FormData instance required");
    if (boundary.length < 1 || boundary.length > 70) throw Error("boundary must be 10-70 characters long");
    let i = pt.encode("--" + boundary + Pe),
      a = pt.encode("--" + boundary + "--" + Pe),
      byteLength = a.byteLength,
      f = Array.from(e.entries()).map(([p, d]) => {
        let b = new ri(p, d);
        return byteLength += b.size, b;
      });
    byteLength += i.byteLength * f.length, byteLength = u.toFiniteNumber(byteLength);
    let c = {
      "Content-Type": `multipart/form-data; boundary=${boundary}`
    };
    if (Number.isFinite(byteLength)) c["Content-Length"] = byteLength;
    return t && t(c), If.from(async function* () {
      for (let p of f) yield i, yield* p.encode();
      yield a;
    }());
  },
  ni = Hf;
import zf from "stream";
class oi extends zf.Transform {
  __transform(e, t, r) {
    this.push(e), r();
  }
  _transform(e, t, r) {
    if (e.length !== 0) {
      if (this._transform = this.__transform, e[0] !== 120) {
        let n = Buffer.alloc(2);
        n[0] = 120, n[1] = 156, this.push(n, t);
      }
    }
    this.__transform(e, t, r);
  }
}
var si = oi;
var $f = (e, t) => u.isAsyncFn(e) ? function (...r) {
    let n = r.pop();
    e.apply(this, r).then(o => {
      try {
        t ? n(null, ...t(o)) : n(null, o);
      } catch (error) {
        n(error);
      }
    }, n);
  } : e,
  ii = $f;
var Vf = new Set(["localhost"]),
  ci = e => {
    let t = e.split(".");
    if (t.length !== 4) return !1;
    if (t[0] !== "127") return !1;
    return t.every(item => /^\d+$/.test(item) && Number(item) >= 0 && Number(item) <= 255);
  },
  Wf = e => {
    if (e === "::1") return !0;
    let t = e.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
    if (t) return ci(t[1]);
    let r = e.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
    if (r) {
      let o = parseInt(r[1], 16);
      return o >= 32512 && o <= 32767;
    }
    let n = e.split(":");
    if (n.length === 8) {
      for (let o = 0; o < 7; o++) if (!/^0+$/.test(n[o])) return !1;
      return /^0*1$/.test(n[7]);
    }
    return !1;
  },
  ai = e => {
    if (!e) return !1;
    if (Vf.has(e)) return !0;
    if (ci(e)) return !0;
    return Wf(e);
  },
  Gf = {
    http: 80,
    https: 443,
    ws: 80,
    wss: 443,
    ftp: 21
  },
  Jf = e => {
    let t = e,
      r = 0;
    if (t.charAt(0) === "[") {
      let s = t.indexOf("]");
      if (s !== -1) {
        let i = t.slice(1, s),
          a = t.slice(s + 1);
        if (a.charAt(0) === ":" && /^\d+$/.test(a.slice(1))) r = Number.parseInt(a.slice(1), 10);
        return [i, r];
      }
    }
    let n = t.indexOf(":"),
      o = t.lastIndexOf(":");
    if (n !== -1 && n === o && /^\d+$/.test(t.slice(o + 1))) r = Number.parseInt(t.slice(o + 1), 10), t = t.slice(0, o);
    return [t, r];
  },
  ui = e => {
    if (!e) return e;
    if (e.charAt(0) === "[" && e.charAt(e.length - 1) === "]") e = e.slice(1, -1);
    return e.replace(/\.+$/, "");
  };
function Gr(e) {
  let t;
  try {
    t = new URL(e);
  } catch (error) {
    return !1;
  }
  let r = (process.env.no_proxy || process.env.NO_PROXY || "").toLowerCase();
  if (!r) return !1;
  if (r === "*") return !0;
  let n = Number.parseInt(t.port, 10) || Gf[t.protocol.split(":", 1)[0]] || 0,
    o = ui(t.hostname.toLowerCase());
  return r.split(/[\s,]+/).some(item => {
    if (!item) return !1;
    let [i, a] = Jf(item);
    if (i = ui(i), !i) return !1;
    if (a && a !== n) return !1;
    if (i.charAt(0) === "*") i = i.slice(1);
    if (i.charAt(0) === ".") return o.endsWith(i);
    return o === i || ai(o) && ai(i);
  });
}
function Kf(e, t) {
  e = e || 10;
  let r = Array(e),
    n = Array(e),
    o = 0,
    s = 0,
    i;
  return t = t !== void 0 ? t : 1000, function (l) {
    let f = Date.now(),
      c = n[s];
    if (!i) i = f;
    r[o] = l, n[o] = f;
    let p = s,
      d = 0;
    while (p !== o) d += r[p++], p = p % e;
    if (o = (o + 1) % e, o === s) s = (s + 1) % e;
    if (f - i < t) return;
    let b = c && f - c;
    return b ? Math.round(d * 1000 / b) : void 0;
  };
}
var fi = Kf;
function Xf(e, t) {
  let r = 0,
    n = 1000 / t,
    o,
    s,
    i = (f, c = Date.now()) => {
      if (r = c, o = null, s) clearTimeout(s), s = null;
      e(...f);
    };
  return [(...f) => {
    let c = Date.now(),
      p = c - r;
    if (p >= n) i(f, c);else if (o = f, !s) s = setTimeout(() => {
      s = null, i(o);
    }, n - p);
  }, () => o && i(o)];
}
var li = Xf;
var le = (e, t, r = 3) => {
    let n = 0,
      o = fi(50, 250);
    return li(event => {
      let loaded = event.loaded,
        total = event.lengthComputable ? event.total : void 0,
        loaded_2 = total != null ? Math.min(loaded, total) : loaded,
        bytes = Math.max(0, loaded_2 - n),
        c = o(bytes);
      n = Math.max(n, loaded_2);
      let p = {
        loaded: loaded_2,
        total: total,
        progress: total ? loaded_2 / total : void 0,
        bytes: bytes,
        rate: c ? c : void 0,
        estimated: c && total ? (total - loaded_2) / c : void 0,
        event: event,
        lengthComputable: total != null,
        [t ? "download" : "upload"]: !0
      };
      e(p);
    }, r);
  },
  We = (total_2, t) => {
    let lengthComputable = total_2 != null;
    return [loaded_3 => t[0]({
      lengthComputable: lengthComputable,
      total: total_2,
      loaded: loaded_3
    }), t[1]];
  },
  Ge = e => (...t) => u.asap(() => e(...t));
function Jr(e) {
  if (!e || typeof e !== "string") return 0;
  if (!e.startsWith("data:")) return 0;
  let t = e.indexOf(",");
  if (t < 0) return 0;
  let r = e.slice(5, t),
    n = e.slice(t + 1);
  if (/;base64/i.test(r)) {
    let {
      length: length_2,
      length: length_3
    } = n;
    for (let d = 0; d < length_3; d++) if (n.charCodeAt(d) === 37 && d + 2 < length_3) {
      let b = n.charCodeAt(d + 1),
        m = n.charCodeAt(d + 2);
      if ((b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102) && (m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102)) length_2 -= 2, d += 2;
    }
    let a = 0,
      l = length_3 - 1,
      f = d => d >= 2 && n.charCodeAt(d - 2) === 37 && n.charCodeAt(d - 1) === 51 && (n.charCodeAt(d) === 68 || n.charCodeAt(d) === 100);
    if (l >= 0) {
      if (n.charCodeAt(l) === 61) a++, l--;else if (f(l)) a++, l -= 3;
    }
    if (a === 1 && l >= 0) {
      if (n.charCodeAt(l) === 61) a++;else if (f(l)) a++;
    }
    let p = Math.floor(length_2 / 4) * 3 - (a || 0);
    return p > 0 ? p : 0;
  }
  return Buffer.byteLength(n, "utf8");
}
var di = {
    flush: ye.constants.Z_SYNC_FLUSH,
    finishFlush: ye.constants.Z_SYNC_FLUSH
  },
  el = {
    flush: ye.constants.BROTLI_OPERATION_FLUSH,
    finishFlush: ye.constants.BROTLI_OPERATION_FLUSH
  },
  hi = u.isFunction(ye.createBrotliDecompress),
  {
    http: http_2,
    https: https_2
  } = Ri.default,
  nl = /https:?/,
  mi = Symbol("axios.http.socketListener"),
  Mt = Symbol("axios.http.currentReq"),
  yi = A.protocols.map(item => item + ":"),
  bi = (e, [t, r]) => (e.on("end", r).on("error", r), t);
class xi {
  constructor() {
    this.sessions = Object.create(null);
  }
  getSession(e, t) {
    t = Object.assign({
      sessionTimeout: 1000
    }, t);
    let r = this.sessions[e];
    if (r) {
      let f = r.length;
      for (let c = 0; c < f; c++) {
        let [p, d] = r[c];
        if (!p.destroyed && !p.closed && wi.isDeepStrictEqual(d, t)) return p;
      }
    }
    let n = Ei.connect(e, t),
      o,
      s = () => {
        if (o) return;
        o = !0;
        let f = r,
          c = f.length,
          p = c;
        while (p--) if (f[p][0] === n) {
          if (c === 1) delete this.sessions[e];else f.splice(p, 1);
          if (!n.closed) n.close();
          return;
        }
      },
      request = n.request,
      {
        sessionTimeout: sessionTimeout
      } = t;
    if (sessionTimeout != null) {
      let f,
        c = 0;
      n.request = function request() {
        let p = request.apply(this, arguments);
        if (c++, f) clearTimeout(f), f = null;
        return p.once("close", () => {
          if (! --c) f = setTimeout(() => {
            f = null, s();
          }, sessionTimeout);
        }), p;
      };
    }
    n.once("close", s);
    let l = [n, t];
    return r ? r.push(l) : r = this.sessions[e] = [l], n;
  }
}
var ol = new xi();
function beforeRedirect_2(e, t) {
  if (e.beforeRedirects.proxy) e.beforeRedirects.proxy(e);
  if (e.beforeRedirects.config) e.beforeRedirects.config(e, t);
}
function _i(e, t, r) {
  let proxy = t;
  if (!proxy && proxy !== !1) {
    let o = Ds(r);
    if (o) {
      if (!Gr(r)) proxy = new URL(o);
    }
  }
  if (proxy) {
    if (proxy.username) proxy.auth = (proxy.username || "") + ":" + (proxy.password || "");
    if (proxy.auth) {
      if (Boolean(proxy.auth.username || proxy.auth.password)) proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || "");else if (typeof proxy.auth === "object") throw new y("Invalid proxy authorization", y.ERR_BAD_OPTION, {
        proxy: proxy
      });
      let i = Buffer.from(proxy.auth, "utf8").toString("base64");
      e.headers["Proxy-Authorization"] = "Basic " + i;
    }
    e.headers.host = e.hostname + (e.port ? ":" + e.port : "");
    let o = proxy.hostname || proxy.host;
    if (e.hostname = o, e.host = o, e.port = proxy.port, e.path = r, proxy.protocol) e.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`;
  }
  e.beforeRedirects.proxy = function proxy(s) {
    _i(s, t, s.href);
  };
}
var il = typeof process < "u" && u.kindOf(process) === "process",
  al = e => new Promise((t, r) => {
    let n,
      o,
      s = (l, f) => {
        if (o) return;
        o = !0, n && n(l, f);
      },
      i = l => {
        s(l), t(l);
      },
      a = l => {
        s(l, !0), r(l);
      };
    e(i, a, l => n = l).catch(a);
  }),
  ul = ({
    address: address,
    family: family
  }) => {
    if (!u.isString(address)) throw TypeError("address must be a string");
    return {
      address: address,
      family: family || (address.indexOf(".") < 0 ? 6 : 4)
    };
  },
  gi = (address_2, family_2) => ul(u.isObject(address_2) ? address_2 : {
    address: address_2,
    family: family_2
  }),
  cl = {
    request(e, t) {
      let r = e.protocol + "//" + e.hostname + ":" + (e.port || (e.protocol === "https:" ? 443 : 80)),
        {
          http2Options: http2Options,
          headers: headers_2
        } = e,
        s = ol.getSession(r, http2Options),
        {
          HTTP2_HEADER_SCHEME: HTTP2_HEADER_SCHEME,
          HTTP2_HEADER_METHOD: HTTP2_HEADER_METHOD,
          HTTP2_HEADER_PATH: HTTP2_HEADER_PATH,
          HTTP2_HEADER_STATUS: HTTP2_HEADER_STATUS
        } = Ei.constants,
        c = {
          [HTTP2_HEADER_SCHEME]: e.protocol.replace(":", ""),
          [HTTP2_HEADER_METHOD]: e.method,
          [HTTP2_HEADER_PATH]: e.path
        };
      u.forEach(headers_2, (d, b) => {
        b.charAt(0) !== ":" && (c[b] = d);
      });
      let p = s.request(c);
      return p.once("response", d => {
        let b = p;
        d = Object.assign({}, d);
        let m = d[HTTP2_HEADER_STATUS];
        delete d[HTTP2_HEADER_STATUS], b.headers = d, b.statusCode = +m, t(b);
      }), p;
    }
  },
  http_3 = il && function (config) {
    return al(async function (n, o, s) {
      let i = R => u.hasOwnProp(config, R) ? config[R] : void 0,
        a = i("data"),
        l = i("lookup"),
        family_3 = i("family"),
        c = i("httpVersion");
      if (c === void 0) c = 1;
      let http2Options_2 = i("http2Options"),
        d = i("responseType"),
        b = i("responseEncoding"),
        method_2 = config.method.toUpperCase(),
        g,
        h = !1,
        E;
      if (c = +c, Number.isNaN(c)) throw TypeError(`Invalid protocol version: '${config.httpVersion}' is not a number`);
      if (c !== 1 && c !== 2) throw TypeError(`Unsupported protocol version '${c}'`);
      let B = c === 2;
      if (l) {
        let R = ii(l, w => u.isArray(w) ? w : [w]);
        l = (w, O, L) => {
          R(w, O, (T, K, fe) => {
            if (T) return L(T);
            let U = u.isArray(K) ? K.map(item => gi(item)) : [gi(K, fe)];
            O.all ? L(T, U) : L(T, U[0].address, U[0].family);
          });
        };
      }
      let C = new Zf();
      function x(R) {
        try {
          C.emit("abort", !R || R.type ? new Q(null, config, E) : R);
        } catch (error) {
          console.warn("emit error", error);
        }
      }
      C.once("abort", o);
      let I = () => {
        if (config.cancelToken) config.cancelToken.unsubscribe(x);
        if (config.signal) config.signal.removeEventListener("abort", x);
        C.removeAllListeners();
      };
      if (config.cancelToken || config.signal) {
        if (config.cancelToken && config.cancelToken.subscribe(x), config.signal) config.signal.aborted ? x() : config.signal.addEventListener("abort", x);
      }
      s((R, w) => {
        if (g = !0, w) {
          h = !0, I();
          return;
        }
        let {
          data: data_3
        } = R;
        if (data_3 instanceof se.Readable || data_3 instanceof se.Duplex) {
          let L = se.finished(data_3, () => {
            L(), I();
          });
        } else I();
      });
      let G = Se(config.baseURL, config.url, config.allowAbsoluteUrls),
        v = new URL(G, A.hasBrowserEnv ? A.origin : void 0),
        protocol_4 = v.protocol || yi[0];
      if (protocol_4 === "data:") {
        if (config.maxContentLength > -1) {
          let w = String(config.url || G || "");
          if (Jr(w) > config.maxContentLength) return o(new y("maxContentLength size of " + config.maxContentLength + " exceeded", y.ERR_BAD_RESPONSE, config));
        }
        let data_4;
        if (method_2 !== "GET") return ue(n, o, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: config
        });
        try {
          data_4 = $r(config.url, d === "blob", {
            Blob: config.env && config.env.Blob
          });
        } catch (error) {
          throw y.from(error, y.ERR_BAD_REQUEST, config);
        }
        if (d === "text") {
          if (data_4 = data_4.toString(b), !b || b === "utf8") data_4 = u.stripBOM(data_4);
        } else if (d === "stream") data_4 = se.Readable.from(data_4);
        return ue(n, o, {
          data: data_4,
          status: 200,
          statusText: "OK",
          headers: new P(),
          config: config
        });
      }
      if (yi.indexOf(protocol_4) === -1) return o(new y("Unsupported protocol " + protocol_4, y.ERR_BAD_REQUEST, config));
      let N = P.from(config.headers).normalize();
      N.set("User-Agent", "axios/" + Te, !1);
      let {
          onUploadProgress: onUploadProgress,
          onDownloadProgress: onDownloadProgress
        } = config,
        maxRate_2 = config.maxRate,
        ae = void 0,
        Z = void 0;
      if (u.isSpecCompliantForm(a)) {
        let R = N.getContentType(/boundary=([-_\w\d]{10,70})/i);
        a = ni(a, w => {
          N.set(w);
        }, {
          tag: `axios-${Te}-boundary`,
          boundary: R && R[1] || void 0
        });
      } else if (u.isFormData(a) && u.isFunction(a.getHeaders) && a.getHeaders !== Object.prototype.getHeaders) {
        if (N.set(a.getHeaders()), !N.hasContentLength()) try {
          let R = await wi.promisify(a.getLength).call(a);
          Number.isFinite(R) && R >= 0 && N.setContentLength(R);
        } catch (error) {}
      } else if (u.isBlob(a) || u.isFile(a)) a.size && N.setContentType(a.type || "application/octet-stream"), N.setContentLength(a.size || 0), a = se.Readable.from(jt(a));else if (a && !u.isStream(a)) {
        if (Buffer.isBuffer(a)) ;else if (u.isArrayBuffer(a)) a = Buffer.from(new Uint8Array(a));else if (u.isString(a)) a = Buffer.from(a, "utf-8");else return o(new y("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", y.ERR_BAD_REQUEST, config));
        if (N.setContentLength(a.length, !1), config.maxBodyLength > -1 && a.length > config.maxBodyLength) return o(new y("Request body larger than maxBodyLength limit", y.ERR_BAD_REQUEST, config));
      }
      let bt = u.toFiniteNumber(N.getContentLength());
      if (u.isArray(maxRate_2)) ae = maxRate_2[0], Z = maxRate_2[1];else ae = Z = maxRate_2;
      if (a && (onUploadProgress || ae)) {
        if (!u.isStream(a)) a = se.Readable.from(a, {
          objectMode: !1
        });
        a = se.pipeline([a, new Wr({
          maxRate: u.toFiniteNumber(ae)
        })], u.noop), onUploadProgress && a.on("progress", bi(a, We(bt, le(Ge(onUploadProgress), !1, 3))));
      }
      let auth = void 0,
        Be = i("auth");
      if (Be) {
        let R = Be.username || "",
          w = Be.password || "";
        auth = R + ":" + w;
      }
      if (!auth && v.username) {
        let {
          username: username,
          password: password
        } = v;
        auth = username + ":" + password;
      }
      auth && N.delete("authorization");
      let path;
      try {
        path = _e(v.pathname + v.search, config.params, config.paramsSerializer).replace(/^\?/, "");
      } catch (error) {
        let w = Error(error.message);
        return w.config = config, w.url = config.url, w.exists = !0, o(w);
      }
      N.set("Accept-Encoding", "gzip, compress, deflate" + (hi ? ", br" : ""), !1);
      let z = Object.assign(Object.create(null), {
        path: path,
        method: method_2,
        headers: N.toJSON(),
        agents: {
          http: config.httpAgent,
          https: config.httpsAgent
        },
        auth: auth,
        protocol: protocol_4,
        family: family_3,
        beforeRedirect: beforeRedirect_2,
        beforeRedirects: Object.create(null),
        http2Options: http2Options_2
      });
      if (!u.isUndefined(l) && (z.lookup = l), config.socketPath) {
        if (typeof config.socketPath !== "string") return o(new y("socketPath must be a string", y.ERR_BAD_OPTION_VALUE, config));
        if (config.allowedSocketPaths != null) {
          let R = Array.isArray(config.allowedSocketPaths) ? config.allowedSocketPaths : [config.allowedSocketPaths],
            w = pi(config.socketPath);
          if (!R.some(item => typeof item === "string" && pi(item) === w)) return o(new y(`socketPath "${config.socketPath}" is not permitted by allowedSocketPaths`, y.ERR_BAD_OPTION_VALUE, config));
        }
        z.socketPath = config.socketPath;
      } else z.hostname = v.hostname.startsWith("[") ? v.hostname.slice(1, -1) : v.hostname, z.port = v.port, _i(z, config.proxy, protocol_4 + "//" + v.hostname + (v.port ? ":" + v.port : "") + z.path);
      let ge,
        V = nl.test(z.protocol);
      if (z.agent = V ? config.httpsAgent : config.httpAgent, B) ge = cl;else {
        let R = i("transport");
        if (R) ge = R;else if (config.maxRedirects === 0) ge = V ? Qf : Yf;else {
          if (config.maxRedirects) z.maxRedirects = config.maxRedirects;
          let w = i("beforeRedirect");
          if (w) z.beforeRedirects.config = w;
          ge = V ? https_2 : http_2;
        }
      }
      if (config.maxBodyLength > -1) z.maxBodyLength = config.maxBodyLength;else z.maxBodyLength = 1 / 0;
      if (z.insecureHTTPParser = Boolean(i("insecureHTTPParser")), E = ge.request(z, function (w) {
        if (E.destroyed) return;
        let O = [w],
          L = u.toFiniteNumber(w.headers["content-length"]);
        if (onDownloadProgress || Z) {
          let U = new Wr({
            maxRate: u.toFiniteNumber(Z)
          });
          onDownloadProgress && U.on("progress", bi(U, We(L, le(Ge(onDownloadProgress), !0, 3)))), O.push(U);
        }
        let T = w,
          request_2 = w.req || E;
        if (config.decompress !== !1 && w.headers["content-encoding"]) {
          if (method_2 === "HEAD" || w.statusCode === 204) delete w.headers["content-encoding"];
          switch ((w.headers["content-encoding"] || "").toLowerCase()) {
            case "gzip":
            case "x-gzip":
            case "compress":
            case "x-compress":
              O.push(ye.createUnzip(di)), delete w.headers["content-encoding"];
              break;
            case "deflate":
              O.push(new si()), O.push(ye.createUnzip(di)), delete w.headers["content-encoding"];
              break;
            case "br":
              if (hi) O.push(ye.createBrotliDecompress(el)), delete w.headers["content-encoding"];
          }
        }
        T = O.length > 1 ? se.pipeline(O, u.noop) : O[0];
        let fe = {
          status: w.statusCode,
          statusText: w.statusMessage,
          headers: new P(w.headers),
          config: config,
          request: request_2
        };
        if (d === "stream") {
          if (config.maxContentLength > -1) {
            let maxContentLength = config.maxContentLength,
              Ne = T;
            async function* Je() {
              let j = 0;
              for await (let nn of Ne) {
                if (j += nn.length, j > maxContentLength) throw new y("maxContentLength size of " + maxContentLength + " exceeded", y.ERR_BAD_RESPONSE, config, request_2);
                yield nn;
              }
            }
            T = se.Readable.from(Je(), {
              objectMode: !1
            });
          }
          fe.data = T, ue(n, o, fe);
        } else {
          let U = [],
            Ne = 0;
          T.on("data", function (j) {
            if (U.push(j), Ne += j.length, config.maxContentLength > -1 && Ne > config.maxContentLength) h = !0, T.destroy(), x(new y("maxContentLength size of " + config.maxContentLength + " exceeded", y.ERR_BAD_RESPONSE, config, request_2));
          }), T.on("aborted", function () {
            if (h) return;
            let j = new y("stream has been aborted", y.ERR_BAD_RESPONSE, config, request_2);
            T.destroy(j), o(j);
          }), T.on("error", function (j) {
            if (E.destroyed) return;
            o(y.from(j, null, config, request_2));
          }), T.on("end", function () {
            try {
              let j = U.length === 1 ? U[0] : Buffer.concat(U);
              if (d !== "arraybuffer") {
                if (j = j.toString(b), !b || b === "utf8") j = u.stripBOM(j);
              }
              fe.data = j;
            } catch (error) {
              return o(y.from(error, null, config, fe.request, fe));
            }
            ue(n, o, fe);
          });
        }
        C.once("abort", U => {
          if (!T.destroyed) T.emit("error", U), T.destroy();
        });
      }), C.once("abort", R => {
        if (E.close) E.close();else E.destroy(R);
      }), E.on("error", function (w) {
        o(y.from(w, null, config, E));
      }), E.on("socket", function (w) {
        if (w.setKeepAlive(!0, 60000), !w[mi]) w.on("error", function (L) {
          let T = w[Mt];
          if (T && !T.destroyed) T.destroy(L);
        }), w[mi] = !0;
        w[Mt] = E, E.once("close", function () {
          if (w[Mt] === E) w[Mt] = null;
        });
      }), config.timeout) {
        let R = parseInt(config.timeout, 10);
        if (Number.isNaN(R)) {
          x(new y("error trying to parse `config.timeout` to int", y.ERR_BAD_OPTION_VALUE, config, E));
          return;
        }
        E.setTimeout(R, function () {
          if (g) return;
          let O = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded",
            L = config.transitional || transitional;
          if (config.timeoutErrorMessage) O = config.timeoutErrorMessage;
          x(new y(O, L.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED, config, E));
        });
      } else E.setTimeout(0);
      if (u.isStream(a)) {
        let R = !1,
          w = !1;
        a.on("end", () => {
          R = !0;
        }), a.once("error", L => {
          w = !0, E.destroy(L);
        }), a.on("close", () => {
          if (!R && !w) x(new Q("Request stream has been aborted", config, E));
        });
        let O = a;
        if (config.maxBodyLength > -1 && config.maxRedirects === 0) {
          let maxBodyLength = config.maxBodyLength,
            T = 0;
          O = se.pipeline([a, new se.Transform({
            transform(K, fe, U) {
              if (T += K.length, T > maxBodyLength) return U(new y("Request body larger than maxBodyLength limit", y.ERR_BAD_REQUEST, config, E));
              U(null, K);
            }
          })], u.noop), O.on("error", K => {
            if (!E.destroyed) E.destroy(K);
          });
        }
        O.pipe(E);
      } else a && E.write(a), E.end();
    });
  };
var Ai = A.hasStandardBrowserEnv ? ((e, t) => r => (r = new URL(r, A.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(new URL(A.origin), A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)) : () => !0;
var Oi = A.hasStandardBrowserEnv ? {
  write(e, t, r, n, o, s, i) {
    if (typeof document > "u") return;
    let a = [`${e}=${encodeURIComponent(t)}`];
    if (u.isNumber(r)) a.push(`expires=${new Date(r).toUTCString()}`);
    if (u.isString(n)) a.push(`path=${n}`);
    if (u.isString(o)) a.push(`domain=${o}`);
    if (s === !0) a.push("secure");
    if (u.isString(i)) a.push(`SameSite=${i}`);
    document.cookie = a.join("; ");
  },
  read(e) {
    if (typeof document > "u") return null;
    let t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : null;
  },
  remove(e) {
    this.write(e, "", Date.now() - 86400000, "/");
  }
} : {
  write() {},
  read() {
    return null;
  },
  remove() {}
};
var Ci = e => e instanceof P ? {
  ...e
} : e;
function ie(e, t) {
  t = t || {};
  let r = Object.create(null);
  Object.defineProperty(r, "hasOwnProperty", {
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function n(f, c, p, caseless_2) {
    if (u.isPlainObject(f) && u.isPlainObject(c)) return u.merge.call({
      caseless: caseless_2
    }, f, c);else if (u.isPlainObject(c)) return u.merge({}, c);else if (u.isArray(c)) return c.slice();
    return c;
  }
  function o(f, c, p, d) {
    if (!u.isUndefined(c)) return n(f, c, p, d);else if (!u.isUndefined(f)) return n(void 0, f, p, d);
  }
  function s(f, c) {
    if (!u.isUndefined(c)) return n(void 0, c);
  }
  function i(f, c) {
    if (!u.isUndefined(c)) return n(void 0, c);else if (!u.isUndefined(f)) return n(void 0, f);
  }
  function validateStatus_2(f, c, p) {
    if (u.hasOwnProp(t, p)) return n(f, c);else if (u.hasOwnProp(e, p)) return n(void 0, f);
  }
  let l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    allowedSocketPaths: i,
    responseEncoding: i,
    validateStatus: validateStatus_2,
    headers: (f, c, p) => o(Ci(f), Ci(c), p, !0)
  };
  return u.forEach(Object.keys({
    ...e,
    ...t
  }), function (c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    let p = u.hasOwnProp(l, c) ? l[c] : o,
      d = u.hasOwnProp(e, c) ? e[c] : void 0,
      b = u.hasOwnProp(t, c) ? t[c] : void 0,
      m = p(d, b, c);
    u.isUndefined(m) && p !== validateStatus_2 || (r[c] = m);
  }), r;
}
var Ht = e => {
  let t = ie({}, e),
    r = d => u.hasOwnProp(t, d) ? t[d] : void 0,
    n = r("data"),
    o = r("withXSRFToken"),
    s = r("xsrfHeaderName"),
    i = r("xsrfCookieName"),
    a = r("headers"),
    l = r("auth"),
    f = r("baseURL"),
    c = r("allowAbsoluteUrls"),
    p = r("url");
  if (t.headers = a = P.from(a), t.url = _e(Se(f, p, c), e.params, e.paramsSerializer), l) a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
  if (u.isFormData(n)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);else if (u.isFunction(n.getHeaders)) {
      let d = n.getHeaders(),
        b = ["content-type", "content-length"];
      Object.entries(d).forEach(([m, g]) => {
        if (b.includes(m.toLowerCase())) a.set(m, g);
      });
    }
  }
  if (A.hasStandardBrowserEnv) {
    if (u.isFunction(o)) o = o(t);
    if (o === !0 || o == null && Ai(t.url)) {
      let b = s && i && Oi.read(i);
      if (b) a.set(s, b);
    }
  }
  return t;
};
var fl = typeof XMLHttpRequest < "u",
  xhr = fl && function (config_2) {
    return new Promise(function (r, n) {
      let o = Ht(config_2),
        s = o.data,
        i = P.from(o.headers).normalize(),
        {
          responseType: responseType,
          onUploadProgress: onUploadProgress_2,
          onDownloadProgress: onDownloadProgress_2
        } = o,
        c,
        p,
        d,
        b,
        m;
      function g() {
        b && b(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
      }
      let h = new XMLHttpRequest();
      h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
      function E() {
        if (!h) return;
        let headers_3 = P.from("getAllResponseHeaders" in h && h.getAllResponseHeaders()),
          I = {
            data: !responseType || responseType === "text" || responseType === "json" ? h.responseText : h.response,
            status: h.status,
            statusText: h.statusText,
            headers: headers_3,
            config: config_2,
            request: h
          };
        ue(function (v) {
          r(v), g();
        }, function (v) {
          n(v), g();
        }, I), h = null;
      }
      if ("onloadend" in h) h.onloadend = E;else h.onreadystatechange = function onreadystatechange() {
        if (!h || h.readyState !== 4) return;
        if (h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0)) return;
        setTimeout(E);
      };
      if (h.onabort = function onabort() {
        if (!h) return;
        n(new y("Request aborted", y.ECONNABORTED, config_2, h)), h = null;
      }, h.onerror = function onerror(x) {
        let I = x && x.message ? x.message : "Network Error",
          G = new y(I, y.ERR_NETWORK, config_2, h);
        G.event = x || null, n(G), h = null;
      }, h.ontimeout = function ontimeout() {
        let x = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded",
          I = o.transitional || transitional;
        if (o.timeoutErrorMessage) x = o.timeoutErrorMessage;
        n(new y(x, I.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED, config_2, h)), h = null;
      }, s === void 0 && i.setContentType(null), "setRequestHeader" in h) u.forEach(i.toJSON(), function (x, I) {
        h.setRequestHeader(I, x);
      });
      if (!u.isUndefined(o.withCredentials)) h.withCredentials = !!o.withCredentials;
      if (responseType && responseType !== "json") h.responseType = o.responseType;
      if (onDownloadProgress_2) [d, m] = le(onDownloadProgress_2, !0), h.addEventListener("progress", d);
      if (onUploadProgress_2 && h.upload) [p, b] = le(onUploadProgress_2), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", b);
      if (o.cancelToken || o.signal) {
        if (c = C => {
          if (!h) return;
          n(!C || C.type ? new Q(null, config_2, h) : C), h.abort(), h = null;
        }, o.cancelToken && o.cancelToken.subscribe(c), o.signal) o.signal.aborted ? c() : o.signal.addEventListener("abort", c);
      }
      let B = lt(o.url);
      if (B && A.protocols.indexOf(B) === -1) {
        n(new y("Unsupported protocol " + B + ":", y.ERR_BAD_REQUEST, config_2));
        return;
      }
      h.send(s || null);
    });
  };
var ll = (e, t) => {
    let {
      length: length_4
    } = e = e ? e.filter(Boolean) : [];
    if (t || length_4) {
      let abortController = new AbortController(),
        o,
        s = function (f) {
          if (!o) {
            o = !0, a();
            let c = f instanceof Error ? f : this.reason;
            abortController.abort(c instanceof y ? c : new Q(c instanceof Error ? c.message : c));
          }
        },
        i = t && setTimeout(() => {
          i = null, s(new y(`timeout of ${t}ms exceeded`, y.ETIMEDOUT));
        }, t),
        a = () => {
          if (e) i && clearTimeout(i), i = null, e.forEach(item => {
            item.unsubscribe ? item.unsubscribe(s) : item.removeEventListener("abort", s);
          }), e = null;
        };
      e.forEach(item => item.addEventListener("abort", s));
      let {
        signal: signal
      } = abortController;
      return signal.unsubscribe = () => u.asap(a), signal;
    }
  },
  Ti = ll;
var pl = function* (e, t) {
    let byteLength_2 = e.byteLength;
    if (!t || byteLength_2 < t) {
      yield e;
      return;
    }
    let n = 0,
      o;
    while (n < byteLength_2) o = n + t, yield e.slice(n, o), n = o;
  },
  dl = async function* (e, t) {
    for await (let r of hl(e)) yield* pl(r, t);
  },
  hl = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    let t = e.getReader();
    try {
      for (;;) {
        let {
          done: done,
          value: value_12
        } = await t.read();
        if (done) break;
        yield value_12;
      }
    } finally {
      await t.cancel();
    }
  },
  Kr = (e, t, r, n) => {
    let o = dl(e, t),
      s = 0,
      i,
      a = l => {
        if (!i) i = !0, n && n(l);
      };
    return new ReadableStream({
      async pull(l) {
        try {
          let {
            done: done_2,
            value: value_13
          } = await o.next();
          if (done_2) {
            a(), l.close();
            return;
          }
          let byteLength_3 = value_13.byteLength;
          if (r) {
            let d = s += byteLength_3;
            r(d);
          }
          l.enqueue(new Uint8Array(value_13));
        } catch (error) {
          throw a(error), error;
        }
      },
      cancel(l) {
        return a(l), o.return();
      }
    }, {
      highWaterMark: 2
    });
  };
var Pi = 65536,
  {
    isFunction: isFunction_2
  } = u,
  ml = (({
    Request: Request,
    Response: Response
  }) => ({
    Request: Request,
    Response: Response
  }))(u.global),
  {
    ReadableStream: ReadableStream_2,
    TextEncoder: TextEncoder_2
  } = u.global,
  Bi = (e, ...t) => {
    try {
      return !!e(...t);
    } catch (error) {
      return !1;
    }
  },
  yl = e => {
    e = u.merge.call({
      skipUndefined: !0
    }, ml, e);
    let {
        fetch: fetch_2,
        Request: Request_2,
        Response: Response_2
      } = e,
      o = fetch_2 ? isFunction_2(fetch_2) : typeof fetch === "function",
      s = isFunction_2(Request_2),
      i = isFunction_2(Response_2);
    if (!o) return !1;
    let a = o && isFunction_2(ReadableStream_2),
      l = o && (typeof TextEncoder_2 === "function" ? (m => g => m.encode(g))(new TextEncoder_2()) : async m => new Uint8Array(await new Request_2(m).arrayBuffer())),
      f = s && a && Bi(() => {
        let m = !1,
          g = new Request_2(A.origin, {
            body: new ReadableStream_2(),
            method: "POST",
            get duplex() {
              return m = !0, "half";
            }
          }),
          h = g.headers.has("Content-Type");
        if (g.body != null) g.body.cancel();
        return m && !h;
      }),
      c = i && a && Bi(() => u.isReadableStream(new Response_2("").body)),
      p = {
        stream: c && (m => m.body)
      };
    o && (() => {
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(item => {
        !p[item] && (p[item] = (g, h) => {
          let E = g && g[item];
          if (E) return E.call(g);
          throw new y(`Response type '${item}' is not supported`, y.ERR_NOT_SUPPORT, h);
        });
      });
    })();
    let d = async body => {
        if (body == null) return 0;
        if (u.isBlob(body)) return body.size;
        if (u.isSpecCompliantForm(body)) return (await new Request_2(A.origin, {
          method: "POST",
          body: body
        }).arrayBuffer()).byteLength;
        if (u.isArrayBufferView(body) || u.isArrayBuffer(body)) return body.byteLength;
        if (u.isURLSearchParams(body)) body = body + "";
        if (u.isString(body)) return (await l(body)).byteLength;
      },
      b = async (m, g) => {
        let h = u.toFiniteNumber(m.getContentLength());
        return h == null ? d(g) : h;
      };
    return async config_3 => {
      let {
          url: url_2,
          method: method_3,
          data: E,
          signal: signal_2,
          cancelToken: cancelToken,
          timeout: timeout,
          onDownloadProgress: onDownloadProgress_3,
          onUploadProgress: onUploadProgress_3,
          responseType: responseType_2,
          headers: headers_4,
          withCredentials = "same-origin",
          fetchOptions: fetchOptions
        } = Ht(config_3),
        Le = fetch_2 || fetch;
      responseType_2 = responseType_2 ? (responseType_2 + "").toLowerCase() : "text";
      let signal_3 = Ti([signal_2, cancelToken && cancelToken.toAbortSignal()], timeout),
        request_3 = null,
        Z = signal_3 && signal_3.unsubscribe && (() => {
          signal_3.unsubscribe();
        }),
        bt;
      try {
        if (onUploadProgress_3 && f && method_3 !== "get" && method_3 !== "head" && (bt = await b(headers_4, E)) !== 0) {
          let V = new Request_2(url_2, {
              method: "POST",
              body: E,
              duplex: "half"
            }),
            R;
          if (u.isFormData(E) && (R = V.headers.get("content-type"))) headers_4.setContentType(R);
          if (V.body) {
            let [w, O] = We(bt, le(Ge(onUploadProgress_3)));
            E = Kr(V.body, Pi, w, O);
          }
        }
        if (!u.isString(withCredentials)) withCredentials = withCredentials ? "include" : "omit";
        let D = s && "credentials" in Request_2.prototype;
        if (u.isFormData(E)) {
          let V = headers_4.getContentType();
          if (V && /^multipart\/form-data/i.test(V) && !/boundary=/i.test(V)) headers_4.delete("content-type");
        }
        let Be = {
          ...fetchOptions,
          signal: signal_3,
          method: method_3.toUpperCase(),
          headers: headers_4.normalize().toJSON(),
          body: E,
          duplex: "half",
          credentials: D ? withCredentials : void 0
        };
        request_3 = s && new Request_2(url_2, Be);
        let re = await (s ? Le(request_3, fetchOptions) : Le(url_2, Be)),
          z = c && (responseType_2 === "stream" || responseType_2 === "response");
        if (c && (onDownloadProgress_3 || z && Z)) {
          let V = {};
          ["status", "statusText", "headers"].forEach(item => {
            V[item] = re[item];
          });
          let R = u.toFiniteNumber(re.headers.get("content-length")),
            [w, O] = onDownloadProgress_3 && We(R, le(Ge(onDownloadProgress_3), !0)) || [];
          re = new Response_2(Kr(re.body, Pi, w, () => {
            O && O(), Z && Z();
          }), V);
        }
        responseType_2 = responseType_2 || "text";
        let data_5 = await p[u.findKey(p, responseType_2) || "text"](re, config_3);
        return !z && Z && Z(), await new Promise((V, R) => {
          ue(V, R, {
            data: data_5,
            headers: P.from(re.headers),
            status: re.status,
            statusText: re.statusText,
            config: config_3,
            request: request_3
          });
        });
      } catch (error) {
        if (Z && Z(), error && error.name === "TypeError" && /Load failed|fetch/i.test(error.message)) throw Object.assign(new y("Network Error", y.ERR_NETWORK, config_3, request_3, error && error.response), {
          cause: error.cause || error
        });
        throw y.from(error, error && error.code, config_3, request_3, error && error.response);
      }
    };
  },
  bl = new Map(),
  Xr = e => {
    let t = e && e.env || {},
      {
        fetch: fetch_3,
        Request: Request_3,
        Response: Response_3
      } = t,
      s = [Request_3, Response_3, fetch_3],
      i = s.length,
      a = i,
      l,
      f,
      c = bl;
    while (a--) l = s[a], f = c.get(l), f === void 0 && c.set(l, f = a ? new Map() : yl(t)), c = f;
    return f;
  },
  Cm = Xr();
var adapters = {
  http: http_3,
  xhr: xhr,
  fetch: {
    get: Xr
  }
};
u.forEach(adapters, (e, value_14) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", {
        value: value_14
      });
    } catch (error) {}
    Object.defineProperty(e, "adapterName", {
      value: value_14
    });
  }
});
var Ni = e => `- ${e}`,
  El = e => u.isFunction(e) || e === null || e === !1;
function getAdapter(e, t) {
  e = u.isArray(e) ? e : [e];
  let {
      length: length_5
    } = e,
    n,
    o,
    s = {};
  for (let i = 0; i < length_5; i++) {
    n = e[i];
    let a;
    if (o = n, !El(n)) {
      if (o = adapters[(a = String(n)).toLowerCase()], o === void 0) throw new y(`Unknown adapter '${a}'`);
    }
    if (o && (u.isFunction(o) || (o = o.get(t)))) break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    let i = Object.entries(s).map(([l, f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")),
      a = length_5 ? i.length > 1 ? `since :
` + i.map(Ni).join(`
`) : " " + Ni(i[0]) : "as no adapter specified";
    throw new y("There is no suitable adapter to dispatch the request " + a, "ERR_NOT_SUPPORT");
  }
  return o;
}
var $t = {
  getAdapter: getAdapter,
  adapters: adapters
};
function Qr(e) {
  if (e.cancelToken) e.cancelToken.throwIfRequested();
  if (e.signal && e.signal.aborted) throw new Q(null, e);
}
function Vt(e) {
  if (Qr(e), e.headers = P.from(e.headers), e.data = st.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1) e.headers.setContentType("application/x-www-form-urlencoded", !1);
  return $t.getAdapter(e.adapter || He.adapter, e)(e).then(function (n) {
    return Qr(e), n.data = st.call(e, e.transformResponse, n), n.headers = P.from(n.headers), n;
  }, function (n) {
    if (!it(n)) {
      if (Qr(e), n && n.response) n.response.data = st.call(e, e.transformResponse, n.response), n.response.headers = P.from(n.response.headers);
    }
    return Promise.reject(n);
  });
}
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((item, index) => {
  validators[item] = function (n) {
    return typeof n === item || "a" + (index < 1 ? "n " : " ") + item;
  };
});
var Di = {};
validators.transitional = function transitional(t, r, n) {
  function o(s, i) {
    return "[Axios v" + Te + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, a) => {
    if (t === !1) throw new y(o(i, " has been removed" + (r ? " in " + r : "")), y.ERR_DEPRECATED);
    if (r && !Di[i]) Di[i] = !0, console.warn(o(i, " has been deprecated since v" + r + " and will be removed in the near future"));
    return t ? t(s, i, a) : !0;
  };
};
validators.spelling = function spelling(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function assertOptions(e, t, r) {
  if (typeof e !== "object") throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  let n = Object.keys(e),
    o = n.length;
  while (o-- > 0) {
    let s = n[o],
      i = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
    if (i) {
      let a = e[s],
        l = a === void 0 || i(a, s, e);
      if (l !== !0) throw new y("option " + s + " must be " + l, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new y("Unknown option " + s, y.ERR_BAD_OPTION);
  }
}
var dt = {
  assertOptions: assertOptions,
  validators: validators
};
var validators_2 = dt.validators;
class ht {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new yr(),
      response: new yr()
    };
  }
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (error) {
      if (error instanceof Error) {
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = Error();
        let o = (() => {
          if (!n.stack) return "";
          let s = n.stack.indexOf(`
`);
          return s === -1 ? "" : n.stack.slice(s + 1);
        })();
        try {
          if (!error.stack) error.stack = o;else if (o) {
            let s = o.indexOf(`
`),
              i = s === -1 ? -1 : o.indexOf(`
`, s + 1),
              a = i === -1 ? "" : o.slice(i + 1);
            if (!String(error.stack).endsWith(a)) error.stack += `
` + o;
          }
        } catch (error) {}
      }
      throw error;
    }
  }
  _request(e, t) {
    if (typeof e === "string") t = t || {}, t.url = e;else t = e || {};
    t = ie(this.defaults, t);
    let {
      transitional: transitional_2,
      paramsSerializer: n,
      headers: headers_5
    } = t;
    if (transitional_2 !== void 0) dt.assertOptions(transitional_2, {
      silentJSONParsing: validators_2.transitional(validators_2.boolean),
      forcedJSONParsing: validators_2.transitional(validators_2.boolean),
      clarifyTimeoutError: validators_2.transitional(validators_2.boolean),
      legacyInterceptorReqResOrdering: validators_2.transitional(validators_2.boolean)
    }, !1);
    if (n != null) if (u.isFunction(n)) t.paramsSerializer = {
      serialize: n
    };else dt.assertOptions(n, {
      encode: validators_2.function,
      serialize: validators_2.function
    }, !0);
    if (t.allowAbsoluteUrls !== void 0) ;else if (this.defaults.allowAbsoluteUrls !== void 0) t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;else t.allowAbsoluteUrls = !0;
    dt.assertOptions(t, {
      baseUrl: validators_2.spelling("baseURL"),
      withXsrfToken: validators_2.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = headers_5 && u.merge(headers_5.common, headers_5[t.method]);
    headers_5 && u.forEach(["delete", "get", "head", "post", "put", "patch", "common"], b => {
      delete headers_5[b];
    }), t.headers = P.concat(s, headers_5);
    let i = [],
      a = !0;
    this.interceptors.request.forEach(function (item) {
      if (typeof item.runWhen === "function" && item.runWhen(t) === !1) return;
      a = a && item.synchronous;
      let g = t.transitional || transitional;
      if (g && g.legacyInterceptorReqResOrdering) i.unshift(item.fulfilled, item.rejected);else i.push(item.fulfilled, item.rejected);
    });
    let l = [];
    this.interceptors.response.forEach(function (item) {
      l.push(item.fulfilled, item.rejected);
    });
    let f,
      c = 0,
      p;
    if (!a) {
      let b = [Vt.bind(this), void 0];
      b.unshift(...i), b.push(...l), p = b.length, f = Promise.resolve(t);
      while (c < p) f = f.then(b[c++], b[c++]);
      return f;
    }
    p = i.length;
    let d = t;
    while (c < p) {
      let b = i[c++],
        m = i[c++];
      try {
        d = b(d);
      } catch (error) {
        m.call(this, error);
        break;
      }
    }
    try {
      f = Vt.call(this, d);
    } catch (error) {
      return Promise.reject(error);
    }
    c = 0, p = l.length;
    while (c < p) f = f.then(l[c++], l[c++]);
    return f;
  }
  getUri(e) {
    e = ie(this.defaults, e);
    let t = Se(e.baseURL, e.url, e.allowAbsoluteUrls);
    return _e(t, e.params, e.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function (method_4) {
  ht.prototype[method_4] = function (url_3, n) {
    return this.request(ie(n || {}, {
      method: method_4,
      url: url_3,
      data: (n || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function (method_5) {
  function r(n) {
    return function (url_4, data_6, a) {
      return this.request(ie(a || {}, {
        method: method_5,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url_4,
        data: data_6
      }));
    };
  }
  ht.prototype[method_5] = r(), ht.prototype[method_5 + "Form"] = r(!0);
});
var yt = ht;
class Zr {
  constructor(e) {
    if (typeof e !== "function") throw TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function (o) {
      t = o;
    });
    let r = this;
    this.promise.then(n => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      while (o-- > 0) r._listeners[o](n);
      r._listeners = null;
    }), this.promise.then = n => {
      let o,
        s = new Promise(i => {
          r.subscribe(i), o = i;
        }).then(n);
      return s.cancel = function cancel() {
        r.unsubscribe(o);
      }, s;
    }, e(function (o, s, i) {
      if (r.reason) return;
      r.reason = new Q(o, s, i), t(r.reason);
    });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    if (this._listeners) this._listeners.push(e);else this._listeners = [e];
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    let t = this._listeners.indexOf(e);
    if (t !== -1) this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    let abortController_2 = new AbortController(),
      t = r => {
        abortController_2.abort(r);
      };
    return this.subscribe(t), abortController_2.signal.unsubscribe = () => this.unsubscribe(t), abortController_2.signal;
  }
  static source() {
    let cancel;
    return {
      token: new Zr(function (n) {
        cancel = n;
      }),
      cancel: cancel
    };
  }
}
var Ui = Zr;
function en(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function tn(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
var rn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(rn).forEach(([e, t]) => {
  rn[t] = e;
});
var qi = rn;
function Ii(e) {
  let t = new yt(e),
    r = Ke(yt.prototype.request, t);
  return u.extend(r, yt.prototype, t, {
    allOwnKeys: !0
  }), u.extend(r, t, null, {
    allOwnKeys: !0
  }), r.create = function create(o) {
    return Ii(ie(e, o));
  }, r;
}
var q = Ii(He);
q.Axios = yt;
q.CanceledError = Q;
q.CancelToken = Ui;
q.isCancel = it;
q.VERSION = Te;
q.toFormData = de;
q.AxiosError = y;
q.Cancel = q.CanceledError;
q.all = function all(t) {
  return Promise.all(t);
};
q.spread = en;
q.isAxiosError = tn;
q.mergeConfig = ie;
q.AxiosHeaders = P;
q.formToJSON = e => Lt(u.isHTMLForm(e) ? new FormData(e) : e);
q.getAdapter = $t.getAdapter;
q.HttpStatusCode = qi;
q.default = q;
var mt = q;
var {
  Axios: Axios,
  AxiosError: AxiosError_2,
  CanceledError: CanceledError_2,
  isCancel: isCancel,
  CancelToken: CancelToken,
  VERSION: VERSION,
  all: all,
  Cancel: Cancel,
  isAxiosError: isAxiosError,
  spread: spread,
  toFormData: toFormData,
  AxiosHeaders: AxiosHeaders,
  HttpStatusCode: HttpStatusCode,
  formToJSON: formToJSON,
  getAdapter: getAdapter_2,
  mergeConfig: mergeConfig
} = mt;
export { iWr, mYn, cBt, mt, AxiosError_2 as dBt, isCancel as Fa, isAxiosError as fu };