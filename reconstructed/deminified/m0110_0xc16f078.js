// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { k, Re } from "B:/~BUN/root/chunk-yv67t8hr.js";
var je = k(function (Xt, Ge) {
  var W = Re("constants"),
    cwd = process.cwd,
    oe = null,
    pt = process.env.GRACEFUL_FS_PLATFORM || "win32";
  process.cwd = function cwd() {
    if (!oe) oe = cwd.call(process);
    return oe;
  };
  try {
    process.cwd();
  } catch (error) {}
  if (typeof process.chdir === "function") {
    if (ue = process.chdir, process.chdir = function chdir(e) {
      oe = null, ue.call(process, e);
    }, Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, ue);
  }
  var ue;
  Ge.exports = mt;
  function mt(e) {
    if (W.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) r(e);
    if (!e.lutimes) n(e);
    if (e.chown = c(e.chown), e.fchown = c(e.fchown), e.lchown = c(e.lchown), e.chmod = i(e.chmod), e.fchmod = i(e.fchmod), e.lchmod = i(e.lchmod), e.chownSync = p(e.chownSync), e.fchownSync = p(e.fchownSync), e.lchownSync = p(e.lchownSync), e.chmodSync = u(e.chmodSync), e.fchmodSync = u(e.fchmodSync), e.lchmodSync = u(e.lchmodSync), e.stat = d(e.stat), e.fstat = d(e.fstat), e.lstat = d(e.lstat), e.statSync = T(e.statSync), e.fstatSync = T(e.fstatSync), e.lstatSync = T(e.lstatSync), e.chmod && !e.lchmod) e.lchmod = function lchmod(o, m, f) {
      if (f) process.nextTick(f);
    }, e.lchmodSync = function lchmodSync() {};
    if (e.chown && !e.lchown) e.lchown = function lchown(o, m, f, a) {
      if (a) process.nextTick(a);
    }, e.lchownSync = function lchownSync() {};
    if (pt === "win32") e.rename = typeof e.rename !== "function" ? e.rename : function (o) {
      function m(f, a, h) {
        var g = Date.now(),
          _ = 0;
        o(f, a, function x(j) {
          if (j && (j.code === "EACCES" || j.code === "EPERM" || j.code === "EBUSY") && Date.now() - g < 60000) {
            if (setTimeout(function () {
              e.stat(a, function (G, Z) {
                if (G && G.code === "ENOENT") o(f, a, x);else h(j);
              });
            }, _), _ < 100) _ += 10;
            return;
          }
          if (h) h(j);
        });
      }
      if (Object.setPrototypeOf) Object.setPrototypeOf(m, o);
      return m;
    }(e.rename);
    e.read = typeof e.read !== "function" ? e.read : function (o) {
      function m(f, a, h, g, _, x) {
        var j;
        if (x && typeof x === "function") {
          var G = 0;
          j = function (Z, Me, Ce) {
            if (Z && Z.code === "EAGAIN" && G < 10) return G++, o.call(e, f, a, h, g, _, j);
            x.apply(this, arguments);
          };
        }
        return o.call(e, f, a, h, g, _, j);
      }
      if (Object.setPrototypeOf) Object.setPrototypeOf(m, o);
      return m;
    }(e.read), e.readSync = typeof e.readSync !== "function" ? e.readSync : function (o) {
      return function (m, f, a, h, g) {
        var _ = 0;
        while (!0) try {
          return o.call(e, m, f, a, h, g);
        } catch (error) {
          if (error.code === "EAGAIN" && _ < 10) {
            _++;
            continue;
          }
          throw error;
        }
      };
    }(e.readSync);
    function r(o) {
      o.lchmod = function lchmod(m, f, a) {
        o.open(m, W.O_WRONLY | W.O_SYMLINK, f, function (h, g) {
          if (h) {
            if (a) a(h);
            return;
          }
          o.fchmod(g, f, function (_) {
            o.close(g, function (x) {
              if (a) a(_ || x);
            });
          });
        });
      }, o.lchmodSync = function lchmodSync(m, f) {
        var a = o.openSync(m, W.O_WRONLY | W.O_SYMLINK, f),
          h = !0,
          g;
        try {
          g = o.fchmodSync(a, f), h = !1;
        } finally {
          if (h) try {
            o.closeSync(a);
          } catch (error) {} else o.closeSync(a);
        }
        return g;
      };
    }
    function n(o) {
      if (W.hasOwnProperty("O_SYMLINK") && o.futimes) o.lutimes = function lutimes(m, f, a, h) {
        o.open(m, W.O_SYMLINK, function (g, _) {
          if (g) {
            if (h) h(g);
            return;
          }
          o.futimes(_, f, a, function (x) {
            o.close(_, function (j) {
              if (h) h(x || j);
            });
          });
        });
      }, o.lutimesSync = function lutimesSync(m, f, a) {
        var h = o.openSync(m, W.O_SYMLINK),
          g,
          _ = !0;
        try {
          g = o.futimesSync(h, f, a), _ = !1;
        } finally {
          if (_) try {
            o.closeSync(h);
          } catch (error) {} else o.closeSync(h);
        }
        return g;
      };else if (o.futimes) o.lutimes = function lutimes(m, f, a, h) {
        if (h) process.nextTick(h);
      }, o.lutimesSync = function lutimesSync() {};
    }
    function i(o) {
      if (!o) return o;
      return function (m, f, a) {
        return o.call(e, m, f, function (h) {
          if (F(h)) h = null;
          if (a) a.apply(this, arguments);
        });
      };
    }
    function u(o) {
      if (!o) return o;
      return function (m, f) {
        try {
          return o.call(e, m, f);
        } catch (error) {
          if (!F(error)) throw error;
        }
      };
    }
    function c(o) {
      if (!o) return o;
      return function (m, f, a, h) {
        return o.call(e, m, f, a, function (g) {
          if (F(g)) g = null;
          if (h) h.apply(this, arguments);
        });
      };
    }
    function p(o) {
      if (!o) return o;
      return function (m, f, a) {
        try {
          return o.call(e, m, f, a);
        } catch (error) {
          if (!F(error)) throw error;
        }
      };
    }
    function d(o) {
      if (!o) return o;
      return function (m, f, a) {
        if (typeof f === "function") a = f, f = null;
        function h(g, _) {
          if (_) {
            if (_.uid < 0) _.uid += 4294967296;
            if (_.gid < 0) _.gid += 4294967296;
          }
          if (a) a.apply(this, arguments);
        }
        return f ? o.call(e, m, f, h) : o.call(e, m, h);
      };
    }
    function T(o) {
      if (!o) return o;
      return function (m, f) {
        var a = f ? o.call(e, m, f) : o.call(e, m);
        if (a) {
          if (a.uid < 0) a.uid += 4294967296;
          if (a.gid < 0) a.gid += 4294967296;
        }
        return a;
      };
    }
    function F(o) {
      if (!o) return !0;
      if (o.code === "ENOSYS") return !0;
      var m = !process.getuid || process.getuid() !== 0;
      if (m) {
        if (o.code === "EINVAL" || o.code === "EPERM") return !0;
      }
      return !1;
    }
  }
});
var Ae = k(function (Jt, Ue) {
  var Stream = Re("stream").Stream;
  Ue.exports = dt;
  function dt(e) {
    return {
      ReadStream: ReadStream,
      WriteStream: WriteStream
    };
    function ReadStream(i, u) {
      if (!(this instanceof ReadStream)) return new ReadStream(i, u);
      Stream.call(this);
      var c = this;
      this.path = i, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, u = u || {};
      var p = Object.keys(u);
      for (var d = 0, T = p.length; d < T; d++) {
        var F = p[d];
        this[F] = u[F];
      }
      if (this.encoding) this.setEncoding(this.encoding);
      if (this.start !== void 0) {
        if (typeof this.start !== "number") throw TypeError("start must be a Number");
        if (this.end === void 0) this.end = 1 / 0;else if (typeof this.end !== "number") throw TypeError("end must be a Number");
        if (this.start > this.end) throw Error("start must be <= end");
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function () {
          c._read();
        });
        return;
      }
      e.open(this.path, this.flags, this.mode, function (o, m) {
        if (o) {
          c.emit("error", o), c.readable = !1;
          return;
        }
        c.fd = m, c.emit("open", m), c._read();
      });
    }
    function WriteStream(i, u) {
      if (!(this instanceof WriteStream)) return new WriteStream(i, u);
      Stream.call(this), this.path = i, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, u = u || {};
      var c = Object.keys(u);
      for (var p = 0, d = c.length; p < d; p++) {
        var T = c[p];
        this[T] = u[T];
      }
      if (this.start !== void 0) {
        if (typeof this.start !== "number") throw TypeError("start must be a Number");
        if (this.start < 0) throw Error("start must be >= zero");
        this.pos = this.start;
      }
      if (this.busy = !1, this._queue = [], this.fd === null) this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush();
    }
  }
});
var We = k(function (Zt, $e) {
  $e.exports = vt;
  var yt = Object.getPrototypeOf || function (e) {
    return e.__proto__;
  };
  function vt(e) {
    if (e === null || typeof e !== "object") return e;
    if (e instanceof Object) var r = {
      __proto__: yt(e)
    };else var r = Object.create(null);
    return Object.getOwnPropertyNames(e).forEach(function (item) {
      Object.defineProperty(r, item, Object.getOwnPropertyDescriptor(e, item));
    }), r;
  }
});
var ge = k(function (er, we) {
  var L = Re("fs"),
    St = je(),
    _t = Ae(),
    wt = We(),
    ce = Re("util"),
    C,
    fe;
  if (typeof Symbol === "function" && typeof Symbol.for === "function") C = Symbol.for("graceful-fs.queue"), fe = Symbol.for("graceful-fs.previous");else C = "___graceful-fs.queue", fe = "___graceful-fs.previous";
  function gt() {}
  function Ke(e, r) {
    Object.defineProperty(e, C, {
      get: function () {
        return r;
      }
    });
  }
  var Q = gt;
  if (ce.debuglog) Q = ce.debuglog("gfs4");else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) Q = function () {
    var e = ce.format.apply(ce, arguments);
    e = "GFS4: " + e.split(/\n/).join(`
GFS4: `), console.error(e);
  };
  if (!L[C]) {
    if (ve = global[C] || [], Ke(L, ve), L.close = function (value) {
      function r(n, i) {
        return value.call(L, n, function (u) {
          if (!u) Ye();
          if (typeof i === "function") i.apply(this, arguments);
        });
      }
      return Object.defineProperty(r, fe, {
        value: value
      }), r;
    }(L.close), L.closeSync = function (value_2) {
      function r(n) {
        value_2.apply(L, arguments), Ye();
      }
      return Object.defineProperty(r, fe, {
        value: value_2
      }), r;
    }(L.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) process.on("exit", function () {
      Q(L[C]), Re("assert").equal(L[C].length, 0);
    });
  }
  var ve;
  if (!global[C]) Ke(global, L[C]);
  we.exports = Se(wt(L));
  if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !L.__patched) we.exports = Se(L), L.__patched = !0;
  function Se(e) {
    St(e), e.gracefulify = Se, e.createReadStream = Me, e.createWriteStream = Ce;
    var readFile = e.readFile;
    e.readFile = n;
    function n(s, S, y) {
      if (typeof S === "function") y = S, S = null;
      return P(s, S, y);
      function P(R, N, I, b) {
        return readFile(R, N, function (w) {
          if (w && (w.code === "EMFILE" || w.code === "ENFILE")) V([P, [R, N, I], w, b || Date.now(), Date.now()]);else if (typeof I === "function") I.apply(this, arguments);
        });
      }
    }
    var writeFile = e.writeFile;
    e.writeFile = u;
    function u(s, S, y, P) {
      if (typeof y === "function") P = y, y = null;
      return R(s, S, y, P);
      function R(N, I, b, w, M) {
        return writeFile(N, I, b, function (O) {
          if (O && (O.code === "EMFILE" || O.code === "ENFILE")) V([R, [N, I, b, w], O, M || Date.now(), Date.now()]);else if (typeof w === "function") w.apply(this, arguments);
        });
      }
    }
    var appendFile = e.appendFile;
    if (appendFile) e.appendFile = p;
    function p(s, S, y, P) {
      if (typeof y === "function") P = y, y = null;
      return R(s, S, y, P);
      function R(N, I, b, w, M) {
        return appendFile(N, I, b, function (O) {
          if (O && (O.code === "EMFILE" || O.code === "ENFILE")) V([R, [N, I, b, w], O, M || Date.now(), Date.now()]);else if (typeof w === "function") w.apply(this, arguments);
        });
      }
    }
    var copyFile = e.copyFile;
    if (copyFile) e.copyFile = T;
    function T(s, S, y, P) {
      if (typeof y === "function") P = y, y = 0;
      return R(s, S, y, P);
      function R(N, I, b, w, M) {
        return copyFile(N, I, b, function (O) {
          if (O && (O.code === "EMFILE" || O.code === "ENFILE")) V([R, [N, I, b, w], O, M || Date.now(), Date.now()]);else if (typeof w === "function") w.apply(this, arguments);
        });
      }
    }
    var readdir = e.readdir;
    e.readdir = m;
    var o = /^v[0-5]\./;
    function m(s, S, y) {
      if (typeof S === "function") y = S, S = null;
      var P = o.test(process.version) ? function (I, b, w, M) {
        return readdir(I, R(I, b, w, M));
      } : function (I, b, w, M) {
        return readdir(I, b, R(I, b, w, M));
      };
      return P(s, S, y);
      function R(N, I, b, w) {
        return function (M, O) {
          if (M && (M.code === "EMFILE" || M.code === "ENFILE")) V([P, [N, I, b], M, w || Date.now(), Date.now()]);else {
            if (O && O.sort) O.sort();
            if (typeof b === "function") b.call(this, M, O);
          }
        };
      }
    }
    if (process.version.substr(0, 4) === "v0.8") {
      var f = _t(e);
      x = f.ReadStream, G = f.WriteStream;
    }
    var ReadStream_2 = e.ReadStream;
    if (ReadStream_2) x.prototype = Object.create(ReadStream_2.prototype), x.prototype.open = j;
    var WriteStream_2 = e.WriteStream;
    if (WriteStream_2) G.prototype = Object.create(WriteStream_2.prototype), G.prototype.open = Z;
    Object.defineProperty(e, "ReadStream", {
      get: function () {
        return x;
      },
      set: function (s) {
        x = s;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "WriteStream", {
      get: function () {
        return G;
      },
      set: function (s) {
        G = s;
      },
      enumerable: !0,
      configurable: !0
    });
    var g = x;
    Object.defineProperty(e, "FileReadStream", {
      get: function () {
        return g;
      },
      set: function (s) {
        g = s;
      },
      enumerable: !0,
      configurable: !0
    });
    var _ = G;
    Object.defineProperty(e, "FileWriteStream", {
      get: function () {
        return _;
      },
      set: function (s) {
        _ = s;
      },
      enumerable: !0,
      configurable: !0
    });
    function x(s, S) {
      if (this instanceof x) return ReadStream_2.apply(this, arguments), this;else return x.apply(Object.create(x.prototype), arguments);
    }
    function j() {
      var s = this;
      ye(s.path, s.flags, s.mode, function (S, y) {
        if (S) {
          if (s.autoClose) s.destroy();
          s.emit("error", S);
        } else s.fd = y, s.emit("open", y), s.read();
      });
    }
    function G(s, S) {
      if (this instanceof G) return WriteStream_2.apply(this, arguments), this;else return G.apply(Object.create(G.prototype), arguments);
    }
    function Z() {
      var s = this;
      ye(s.path, s.flags, s.mode, function (S, y) {
        if (S) s.destroy(), s.emit("error", S);else s.fd = y, s.emit("open", y);
      });
    }
    function Me(s, S) {
      return new e.ReadStream(s, S);
    }
    function Ce(s, S) {
      return new e.WriteStream(s, S);
    }
    var open = e.open;
    e.open = ye;
    function ye(s, S, y, P) {
      if (typeof y === "function") P = y, y = null;
      return R(s, S, y, P);
      function R(N, I, b, w, M) {
        return open(N, I, b, function (O, Vt) {
          if (O && (O.code === "EMFILE" || O.code === "ENFILE")) V([R, [N, I, b, w], O, M || Date.now(), Date.now()]);else if (typeof w === "function") w.apply(this, arguments);
        });
      }
    }
    return e;
  }
  function V(e) {
    Q("ENQUEUE", e[0].name, e[1]), L[C].push(e), _e();
  }
  var ae;
  function Ye() {
    var e = Date.now();
    for (var r = 0; r < L[C].length; ++r) if (L[C][r].length > 2) L[C][r][3] = e, L[C][r][4] = e;
    _e();
  }
  function _e() {
    if (clearTimeout(ae), ae = void 0, L[C].length === 0) return;
    var e = L[C].shift(),
      r = e[0],
      n = e[1],
      i = e[2],
      u = e[3],
      c = e[4];
    if (u === void 0) Q("RETRY", r.name, n), r.apply(null, n);else if (Date.now() - u >= 60000) {
      Q("TIMEOUT", r.name, n);
      var p = n.pop();
      if (typeof p === "function") p.call(null, i);
    } else {
      var d = Date.now() - c,
        T = Math.max(c - u, 1),
        F = Math.min(T * 1.2, 100);
      if (d >= F) Q("RETRY", r.name, n), r.apply(null, n.concat([u]));else L[C].push(e);
    }
    if (ae === void 0) ae = setTimeout(_e, 0);
  }
});
var Be = k(function (tr, Qe) {
  function q(e, forever) {
    if (typeof forever === "boolean") forever = {
      forever: forever
    };
    if (this._originalTimeouts = JSON.parse(JSON.stringify(e)), this._timeouts = e, this._options = forever || {}, this._maxRetryTime = forever && forever.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._options.forever) this._cachedTimeouts = this._timeouts.slice(0);
  }
  Qe.exports = q;
  q.prototype.reset = function reset() {
    this._attempts = 1, this._timeouts = this._originalTimeouts;
  };
  q.prototype.stop = function stop() {
    if (this._timeout) clearTimeout(this._timeout);
    this._timeouts = [], this._cachedTimeouts = null;
  };
  q.prototype.retry = function retry(e) {
    if (this._timeout) clearTimeout(this._timeout);
    if (!e) return !1;
    var r = new Date().getTime();
    if (e && r - this._operationStart >= this._maxRetryTime) return this._errors.unshift(Error("RetryOperation timeout occurred")), !1;
    this._errors.push(e);
    var n = this._timeouts.shift();
    if (n === void 0) if (this._cachedTimeouts) this._errors.splice(this._errors.length - 1, this._errors.length), this._timeouts = this._cachedTimeouts.slice(0), n = this._timeouts.shift();else return !1;
    var i = this,
      u = setTimeout(function () {
        if (i._attempts++, i._operationTimeoutCb) {
          if (i._timeout = setTimeout(function () {
            i._operationTimeoutCb(i._attempts);
          }, i._operationTimeout), i._options.unref) i._timeout.unref();
        }
        i._fn(i._attempts);
      }, n);
    if (this._options.unref) u.unref();
    return !0;
  };
  q.prototype.attempt = function attempt(e, r) {
    if (this._fn = e, r) {
      if (r.timeout) this._operationTimeout = r.timeout;
      if (r.cb) this._operationTimeoutCb = r.cb;
    }
    var n = this;
    if (this._operationTimeoutCb) this._timeout = setTimeout(function () {
      n._operationTimeoutCb();
    }, n._operationTimeout);
    this._operationStart = new Date().getTime(), this._fn(this._attempts);
  };
  q.prototype.try = function (e) {
    console.log("Using RetryOperation.try() is deprecated"), this.attempt(e);
  };
  q.prototype.start = function start(e) {
    console.log("Using RetryOperation.start() is deprecated"), this.attempt(e);
  };
  q.prototype.start = q.prototype.try;
  q.prototype.errors = function errors() {
    return this._errors;
  };
  q.prototype.attempts = function attempts() {
    return this._attempts;
  };
  q.prototype.mainError = function mainError() {
    if (this._errors.length === 0) return null;
    var e = {},
      r = null,
      n = 0;
    for (var i = 0; i < this._errors.length; i++) {
      var u = this._errors[i],
        c = u.message,
        p = (e[c] || 0) + 1;
      if (e[c] = p, p >= n) r = u, n = p;
    }
    return r;
  };
});
var He = k(function (Oe) {
  var Ot = Be();
  Oe.operation = function operation(e) {
    var r = Oe.timeouts(e);
    return new Ot(r, {
      forever: e && e.forever,
      unref: e && e.unref,
      maxRetryTime: e && e.maxRetryTime
    });
  };
  Oe.timeouts = function timeouts(e) {
    if (e instanceof Array) return [].concat(e);
    var r = {
      retries: 10,
      factor: 2,
      minTimeout: 1000,
      maxTimeout: 1 / 0,
      randomize: !1
    };
    for (var n in e) r[n] = e[n];
    if (r.minTimeout > r.maxTimeout) throw Error("minTimeout is greater than maxTimeout");
    var i = [];
    for (var u = 0; u < r.retries; u++) i.push(this.createTimeout(u, r));
    if (e && e.forever && !i.length) i.push(this.createTimeout(u, r));
    return i.sort(function (itemA, itemB) {
      return itemA - itemB;
    }), i;
  };
  Oe.createTimeout = function createTimeout(e, r) {
    var n = r.randomize ? Math.random() + 1 : 1,
      i = Math.round(n * r.minTimeout * Math.pow(r.factor, e));
    return i = Math.min(i, r.maxTimeout), i;
  };
  Oe.wrap = function wrap(e, r, n) {
    if (r instanceof Array) n = r, r = null;
    if (!n) {
      n = [];
      for (var i in e) if (typeof e[i] === "function") n.push(i);
    }
    for (var u = 0; u < n.length; u++) {
      var c = n[u],
        p = e[c];
      e[c] = function (T) {
        var F = Oe.operation(r),
          o = Array.prototype.slice.call(arguments, 1),
          m = o.pop();
        o.push(function (f) {
          if (F.retry(f)) return;
          if (f) arguments[0] = F.mainError();
          m.apply(this, arguments);
        }), F.attempt(function () {
          T.apply(e, o);
        });
      }.bind(e, p), e[c].options = r;
    }
  };
});
var Xe = k(function (nr, Ve) {
  Ve.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"];
});
var Je = k(function (ir, J) {
  var process_2 = global.process,
    B = function (e) {
      return e && typeof e === "object" && typeof e.removeListener === "function" && typeof e.emit === "function" && typeof e.reallyExit === "function" && typeof e.listeners === "function" && typeof e.kill === "function" && typeof e.pid === "number" && typeof e.on === "function";
    };
  if (!B(process_2)) J.exports = function exports() {
    return function () {};
  };else {
    if (Ee = Re("assert"), z = Xe(), Te = /^win/i.test(process_2.platform), X = Re("events"), typeof X !== "function") X = X.EventEmitter;
    if (process_2.__signal_exit_emitter__) D = process_2.__signal_exit_emitter__;else D = process_2.__signal_exit_emitter__ = new X(), D.count = 0, D.emitted = {};
    if (!D.infinite) D.setMaxListeners(1 / 0), D.infinite = !0;
    J.exports = function exports(e, r) {
      if (!B(global.process)) return function () {};
      if (Ee.equal(typeof e, "function", "a callback must be provided for exit handler"), H === !1) le();
      var n = "exit";
      if (r && r.alwaysLast) n = "afterexit";
      var i = function () {
        if (D.removeListener(n, e), D.listeners("exit").length === 0 && D.listeners("afterexit").length === 0) ee();
      };
      return D.on(n, e), i;
    }, ee = function () {
      if (!H || !B(global.process)) return;
      H = !1, z.forEach(function (item) {
        try {
          process_2.removeListener(item, te[item]);
        } catch (error) {}
      }), process_2.emit = re, process_2.reallyExit = se, D.count -= 1;
    }, J.exports.unload = ee, Y = function (r, n, i) {
      if (D.emitted[r]) return;
      D.emitted[r] = !0, D.emit(r, n, i);
    }, te = {}, z.forEach(function (item) {
      te[item] = function () {
        if (!B(global.process)) return;
        var n = process_2.listeners(item);
        if (n.length === D.count) {
          if (ee(), Y("exit", null, item), Y("afterexit", null, item), Te && item === "SIGHUP") item = "SIGINT";
          process_2.kill(process_2.pid, item);
        }
      };
    }), J.exports.signals = function signals() {
      return z;
    }, H = !1, le = function () {
      if (H || !B(global.process)) return;
      H = !0, D.count += 1, z = z.filter(function (item) {
        try {
          return process_2.on(item, te[item]), !0;
        } catch (error) {
          return !1;
        }
      }), process_2.emit = ke, process_2.reallyExit = xe;
    }, J.exports.load = le, se = process_2.reallyExit, xe = function (r) {
      if (!B(global.process)) return;
      process_2.exitCode = r || 0, Y("exit", process_2.exitCode, null), Y("afterexit", process_2.exitCode, null), se.call(process_2, process_2.exitCode);
    }, re = process_2.emit, ke = function (r, n) {
      if (r === "exit" && B(global.process)) {
        if (n !== void 0) process_2.exitCode = n;
        var i = re.apply(this, arguments);
        return Y("exit", process_2.exitCode, null), Y("afterexit", process_2.exitCode, null), i;
      } else return re.apply(this, arguments);
    };
  }
  var Ee, z, Te, X, D, ee, Y, te, H, le, se, xe, re, ke;
});
var Ze = k(function (Lt, Le) {
  var Ie = Symbol();
  function kt(e, r, n) {
    let i = r[Ie];
    if (i) return r.stat(e, (c, p) => {
      if (c) return n(c);
      n(null, p.mtime, i);
    });
    let date = new Date(Math.ceil(Date.now() / 1000) * 1000 + 5);
    r.utimes(e, date, date, c => {
      if (c) return n(c);
      r.stat(e, (p, d) => {
        if (p) return n(p);
        let value_3 = d.mtime.getTime() % 1000 === 0 ? "s" : "ms";
        if (!(Ie in r)) try {
          Object.defineProperty(r, Ie, {
            value: value_3,
            configurable: !0
          });
        } catch {}
        n(null, d.mtime, value_3);
      });
    });
  }
  function It(e) {
    let r = Date.now();
    if (e === "s") r = Math.ceil(r / 1000) * 1000;
    return new Date(r);
  }
  Lt.probe = kt;
  Lt.getMtime = It;
});
var ot = k(function (Mt, ie) {
  var et = Re("path"),
    fs = ge(),
    tt = He(),
    Dt = Je(),
    pe = Ze(),
    A = {};
  function ne(e, r) {
    return r.lockfilePath || `${e}.lock`;
  }
  function Ne(e, r, n) {
    if (!r.realpath) return n(null, et.resolve(e));
    r.fs.realpath(e, n);
  }
  function Fe(file, r, n) {
    let i = ne(file, r);
    r.fs.mkdir(i, u => {
      if (!u) return pe.probe(i, r.fs, (c, p, d) => {
        if (c) return r.fs.rmdir(i, () => {}), n(c);
        n(null, p, d);
      });
      if (u.code !== "EEXIST") return n(u);
      if (r.stale <= 0) return n(Object.assign(Error("Lock file is already being held"), {
        code: "ELOCKED",
        file: file
      }));
      r.fs.stat(i, (c, p) => {
        if (c) {
          if (c.code === "ENOENT") return Fe(file, {
            ...r,
            stale: 0
          }, n);
          return n(c);
        }
        if (!rt(p, r)) return n(Object.assign(Error("Lock file is already being held"), {
          code: "ELOCKED",
          file: file
        }));
        nt(file, r, d => {
          if (d) return n(d);
          Fe(file, {
            ...r,
            stale: 0
          }, n);
        });
      });
    });
  }
  function rt(e, r) {
    return e.mtime.getTime() < Date.now() - r.stale;
  }
  function nt(e, r, n) {
    r.fs.rmdir(ne(e, r), i => {
      if (i && i.code !== "ENOENT") return n(i);
      n();
    });
  }
  function he(e, r) {
    let n = A[e];
    if (n.updateTimeout) return;
    if (n.updateDelay = n.updateDelay || r.update, n.updateTimeout = setTimeout(() => {
      n.updateTimeout = null, r.fs.stat(n.lockfilePath, (i, u) => {
        let c = n.lastUpdate + r.stale < Date.now();
        if (i) {
          if (i.code === "ENOENT" || c) return be(e, n, Object.assign(i, {
            code: "ECOMPROMISED"
          }));
          return n.updateDelay = 1000, he(e, r);
        }
        if (n.mtime.getTime() !== u.mtime.getTime()) return be(e, n, Object.assign(Error("Unable to update lock within the stale threshold"), {
          code: "ECOMPROMISED"
        }));
        let d = pe.getMtime(n.mtimePrecision);
        r.fs.utimes(n.lockfilePath, d, d, T => {
          let F = n.lastUpdate + r.stale < Date.now();
          if (n.released) return;
          if (T) {
            if (T.code === "ENOENT" || F) return be(e, n, Object.assign(T, {
              code: "ECOMPROMISED"
            }));
            return n.updateDelay = 1000, he(e, r);
          }
          n.mtime = d, n.lastUpdate = Date.now(), n.updateDelay = null, he(e, r);
        });
      });
    }, n.updateDelay), n.updateTimeout.unref) n.updateTimeout.unref();
  }
  function be(e, r, n) {
    if (r.released = !0, r.updateTimeout) clearTimeout(r.updateTimeout);
    if (A[e] === r) delete A[e];
    r.options.onCompromised(n);
  }
  function Nt(e, options, n) {
    options = {
      stale: 1e4,
      update: null,
      realpath: !0,
      retries: 0,
      fs: fs,
      onCompromised: i => {
        throw i;
      },
      ...options
    }, options.retries = options.retries || 0, options.retries = typeof options.retries === "number" ? {
      retries: options.retries
    } : options.retries, options.stale = Math.max(options.stale || 0, 2000), options.update = options.update == null ? options.stale / 2 : options.update || 0, options.update = Math.max(Math.min(options.update, options.stale / 2), 1000), Ne(e, options, (i, u) => {
      if (i) return n(i);
      let c = tt.operation(options.retries);
      c.attempt(() => {
        Fe(u, options, (p, mtime, mtimePrecision) => {
          if (c.retry(p)) return;
          if (p) return n(c.mainError());
          let F = A[u] = {
            lockfilePath: ne(u, options),
            mtime: mtime,
            mtimePrecision: mtimePrecision,
            options: options,
            lastUpdate: Date.now()
          };
          he(u, options), n(null, o => {
            if (F.released) return o && o(Object.assign(Error("Lock is already released"), {
              code: "ERELEASED"
            }));
            it(u, {
              ...options,
              realpath: !1
            }, o);
          });
        });
      });
    });
  }
  function it(e, r, n) {
    r = {
      fs: fs,
      realpath: !0,
      ...r
    }, Ne(e, r, (i, u) => {
      if (i) return n(i);
      let c = A[u];
      if (!c) return n(Object.assign(Error("Lock is not acquired/owned by you"), {
        code: "ENOTACQUIRED"
      }));
      c.updateTimeout && clearTimeout(c.updateTimeout), c.released = !0, delete A[u], nt(u, r, n);
    });
  }
  function Pt(e, r, n) {
    r = {
      stale: 1e4,
      realpath: !0,
      fs: fs,
      ...r
    }, r.stale = Math.max(r.stale || 0, 2000), Ne(e, r, (i, u) => {
      if (i) return n(i);
      r.fs.stat(ne(u, r), (c, p) => {
        if (c) return c.code === "ENOENT" ? n(null, !1) : n(c);
        return n(null, !rt(p, r));
      });
    });
  }
  function Rt() {
    return A;
  }
  Dt(() => {
    for (let e in A) {
      let options_2 = A[e].options;
      try {
        options_2.fs.rmdirSync(ne(e, options_2));
      } catch (error) {}
    }
  });
  Mt.lock = Nt;
  Mt.unlock = it;
  Mt.check = Pt;
  Mt.getLocks = Rt;
});
var ct = k(function (or, ut) {
  var Ut = ge();
  function At(e) {
    let r = ["mkdir", "realpath", "stat", "rmdir", "utimes"],
      n = {
        ...e
      };
    return r.forEach(item => {
      n[item] = (...u) => {
        let c = u.pop(),
          p;
        try {
          p = e[`${item}Sync`](...u);
        } catch (error) {
          return c(error);
        }
        c(null, p);
      };
    }), n;
  }
  function toPromise(e) {
    return (...r) => new Promise((n, i) => {
      r.push((u, c) => {
        if (u) i(u);else n(c);
      }), e(...r);
    });
  }
  function toSync(e) {
    return (...r) => {
      let n, i;
      if (r.push((u, c) => {
        n = u, i = c;
      }), e(...r), n) throw n;
      return i;
    };
  }
  function toSyncOptions(e) {
    if (e = {
      ...e
    }, e.fs = At(e.fs || Ut), typeof e.retries === "number" && e.retries > 0 || e.retries && typeof e.retries.retries === "number" && e.retries.retries > 0) throw Object.assign(Error("Cannot use retries with the sync api"), {
      code: "ESYNC"
    });
    return e;
  }
  ut.exports = {
    toPromise: toPromise,
    toSync: toSync,
    toSyncOptions: toSyncOptions
  };
});
var ft = k(function (ur, K) {
  var U = ot(),
    {
      toPromise: toPromise_2,
      toSync: toSync_2,
      toSyncOptions: toSyncOptions_2
    } = ct();
  async function at(e, r) {
    let n = await toPromise_2(U.lock)(e, r);
    return toPromise_2(n);
  }
  function Kt(e, r) {
    let n = toSync_2(U.lock)(e, toSyncOptions_2(r));
    return toSync_2(n);
  }
  function Qt(e, r) {
    return toPromise_2(U.unlock)(e, r);
  }
  function Bt(e, r) {
    return toSync_2(U.unlock)(e, toSyncOptions_2(r));
  }
  function zt(e, r) {
    return toPromise_2(U.check)(e, r);
  }
  function Ht(e, r) {
    return toSync_2(U.check)(e, toSyncOptions_2(r));
  }
  K.exports = at;
  K.exports.lock = at;
  K.exports.unlock = Qt;
  K.exports.lockSync = Kt;
  K.exports.unlockSync = Bt;
  K.exports.check = zt;
  K.exports.checkSync = Ht;
});
function lt() {
  return ft();
}
async function Ri(e, r) {
  let n = await lt().lock(e, r);
  return Object.assign(n, {
    [Symbol.asyncDispose]: n
  });
}
function BFo(e, r) {
  return lt().check(e, r);
}
async function $m(e, r) {
  if (!e) return;
  try {
    await e();
  } catch (error) {
    let i;
    try {
      let u = v(error);
      i = u === "ERELEASED" || u === "ENOTACQUIRED" ? `lock was no longer held at release (${u}); the locked section may have run without exclusivity` : `lock directory could not be removed and is left to go stale: ${l(error)}`;
    } catch {
      i = "lock release rejected with a value that cannot be described";
    }
    t(`${r}: ${i}`, {
      level: "warn"
    });
  }
}
export { Ri, BFo, $m };