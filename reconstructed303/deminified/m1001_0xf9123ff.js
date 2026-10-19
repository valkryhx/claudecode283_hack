// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { uHt, WOo, KUs } from "B:/~BUN/root/chunk-h938nwmq.js";
import { u1o, sbt } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { rHt } from "B:/~BUN/root/chunk-rryssr1x.js";
import { _h } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { m1o, vfn } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { ve, R, Ue } from "B:/~BUN/root/chunk-ef0msk7r.js";
var Ml = R(function (ze) {
  var np = ze && ze.__createBinding || (Object.create ? function (e, t, r, n) {
      if (n === void 0) n = r;
      var o = Object.getOwnPropertyDescriptor(t, r);
      if (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) o = {
        enumerable: !0,
        get: function () {
          return t[r];
        }
      };
      Object.defineProperty(e, n, o);
    } : function (e, t, r, n) {
      if (n === void 0) n = r;
      e[n] = t[r];
    }),
    op = ze && ze.__setModuleDefault || (Object.create ? function (e, value) {
      Object.defineProperty(e, "default", {
        enumerable: !0,
        value: value
      });
    } : function (e, t) {
      e.default = t;
    }),
    Ol = ze && ze.__importStar || function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) {
        for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) np(t, e, r);
      }
      return op(t, e), t;
    },
    ip = ze && ze.__importDefault || function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    };
  Object.defineProperty(ze, "__esModule", {
    value: !0
  });
  ze.HttpProxyAgent = void 0;
  var sp = Ol(Ue("net")),
    ap = Ol(Ue("tls")),
    cp = ip(vfn()),
    Nl = Ue("events"),
    xl = u1o(),
    qo = Ue("url"),
    qr = (0, cp.default)("http-proxy-agent");
  class la extends xl.Agent {
    constructor(e, t) {
      super(t);
      this.proxy = typeof e === "string" ? new qo.URL(e) : e, this.proxyHeaders = t?.headers ?? {}, qr("Creating new HttpProxyAgent instance: %o", this.proxy.href);
      let host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
        port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ...(t ? lp(t, "headers") : null),
        host: host,
        port: port
      };
    }
    addRequest(e, t) {
      e._header = null, this.setRequestProps(e, t), super.addRequest(e, t);
    }
    setRequestProps(e, t) {
      let {
          proxy: proxy
        } = this,
        n = t.secureEndpoint ? "https:" : "http:",
        o = e.getHeader("host") || "localhost",
        i = `${n}//${o}`,
        s = new qo.URL(e.path, i);
      if (t.port !== 80) s.port = String(t.port);
      e.path = String(s);
      let a = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
        ...this.proxyHeaders
      };
      if (proxy.username || proxy.password) {
        let c = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
        a["Proxy-Authorization"] = `Basic ${Buffer.from(c).toString("base64")}`;
      }
      if (!a["Proxy-Connection"]) a["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let c of Object.keys(a)) {
        let l = a[c];
        if (l) e.setHeader(c, l);
      }
    }
    async connect(e, t) {
      if (e._header = null, !e.path.includes("://")) this.setRequestProps(e, t);
      let r, n;
      if (qr("Regenerating stored HTTP header string for request"), e._implicitHeader(), e.outputData && e.outputData.length > 0) qr("Patching connection write() output buffer with updated header"), r = e.outputData[0].data, n = r.indexOf(`\r
\r
`) + 4, e.outputData[0].data = e._header + r.substring(n), qr("Output buffer: %o", e.outputData[0].data);
      let o;
      if (this.proxy.protocol === "https:") qr("Creating `tls.Socket`: %o", this.connectOpts), o = ap.connect(this.connectOpts);else qr("Creating `net.Socket`: %o", this.connectOpts), o = sp.connect(this.connectOpts);
      return await Nl.once(o, "connect"), o;
    }
  }
  la.protocols = ["http", "https"];
  ze.HttpProxyAgent = la;
  function lp(e, ...t) {
    let r = {},
      n;
    for (n in e) if (!t.includes(n)) r[n] = e[n];
    return r;
  }
});
var hd = R(function (dd) {
  Object.defineProperty(dd, "__esModule", {
    value: !0
  });
  dd.state = void 0;
  dd.state = {
    instrumenterImplementation: void 0
  };
});
var _d = R(function (Ad) {
  Object.defineProperty(Ad, "__esModule", {
    value: !0
  });
  Ad.state = void 0;
  Ad.state = {
    operationRequestMap: new WeakMap()
  };
});
var ic = R(function (X0, Dh) {
  var my = rHt();
  Dh.exports = function exports(e, t) {
    t = t || {};
    var r = my.decode(e, t);
    if (!r) return null;
    var payload = r.payload;
    if (typeof payload === "string") try {
      var o = JSON.parse(payload);
      if (o !== null && typeof o === "object") payload = o;
    } catch (error) {}
    if (t.complete === !0) return {
      header: r.header,
      payload: payload,
      signature: r.signature
    };
    return payload;
  };
});
var vo = R(function (Z0, Uh) {
  var cs = function (e, t) {
    if (Error.call(this, e), Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    if (this.name = "JsonWebTokenError", this.message = e, t) this.inner = t;
  };
  cs.prototype = Object.create(Error.prototype);
  cs.prototype.constructor = cs;
  Uh.exports = cs;
});
var sc = R(function (eL, Hh) {
  var Lh = vo(),
    ls = function (e, t) {
      Lh.call(this, e), this.name = "NotBeforeError", this.date = t;
    };
  ls.prototype = Object.create(Lh.prototype);
  ls.prototype.constructor = ls;
  Hh.exports = ls;
});
var ac = R(function (tL, $h) {
  var Fh = vo(),
    ds = function (e, t) {
      Fh.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t;
    };
  ds.prototype = Object.create(Fh.prototype);
  ds.prototype.constructor = ds;
  $h.exports = ds;
});
var cc = R(function (rL, Bh) {
  var py = m1o();
  Bh.exports = function exports(e, t) {
    var r = t || Math.floor(Date.now() / 1000);
    if (typeof e === "string") {
      var n = py(e);
      if (typeof n > "u") return;
      return Math.floor(r + n / 1000);
    } else if (typeof e === "number") return r + e;else return;
  };
});
var qh = R(function (nL, Gh) {
  var zh = _h();
  Gh.exports = zh.satisfies(process.version, ">=15.7.0");
});
var jh = R(function (oL, Vh) {
  var Kh = _h();
  Vh.exports = Kh.satisfies(process.version, ">=16.9.0");
});
var lc = R(function (iL, Yh) {
  var gy = qh(),
    yy = jh(),
    Ty = {
      ec: ["ES256", "ES384", "ES512"],
      rsa: ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
      "rsa-pss": ["PS256", "PS384", "PS512"]
    },
    Ey = {
      ES256: "prime256v1",
      ES384: "secp384r1",
      ES512: "secp521r1"
    };
  Yh.exports = function exports(e, t) {
    if (!e || !t) return;
    let asymmetricKeyType = t.asymmetricKeyType;
    if (!asymmetricKeyType) return;
    let n = Ty[asymmetricKeyType];
    if (!n) throw Error(`Unknown key type "${asymmetricKeyType}".`);
    if (!n.includes(e)) throw Error(`"alg" parameter for "${asymmetricKeyType}" key type must be one of: ${n.join(", ")}.`);
    if (gy) switch (asymmetricKeyType) {
      case "ec":
        let namedCurve = t.asymmetricKeyDetails.namedCurve,
          i = Ey[e];
        if (namedCurve !== i) throw Error(`"alg" parameter "${e}" requires curve "${i}".`);
        break;
      case "rsa-pss":
        if (yy) {
          let s = parseInt(e.slice(-3), 10),
            {
              hashAlgorithm: hashAlgorithm,
              mgf1HashAlgorithm: mgf1HashAlgorithm,
              saltLength: saltLength
            } = t.asymmetricKeyDetails;
          if (hashAlgorithm !== `sha${s}` || mgf1HashAlgorithm !== hashAlgorithm) throw Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${e}.`);
          if (saltLength !== void 0 && saltLength > s >> 3) throw Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${e}.`);
        }
        break;
    }
  };
});
var dc = R(function (sL, Wh) {
  var Cy = _h();
  Wh.exports = Cy.satisfies(process.version, "^6.12.0 || >=8.0.0");
});
var Zh = R(function (aL, Xh) {
  var W = vo(),
    Ay = sc(),
    Qh = ac(),
    Iy = ic(),
    _y = cc(),
    Sy = lc(),
    Ry = dc(),
    Jh = rHt(),
    {
      KeyObject: KeyObject,
      createSecretKey: createSecretKey,
      createPublicKey: createPublicKey
    } = Ue("crypto"),
    uc = ["RS256", "RS384", "RS512"],
    by = ["ES256", "ES384", "ES512"],
    hc = ["RS256", "RS384", "RS512"],
    Py = ["HS256", "HS384", "HS512"];
  if (Ry) uc.splice(uc.length, 0, "PS256", "PS384", "PS512"), hc.splice(hc.length, 0, "PS256", "PS384", "PS512");
  Xh.exports = function exports(e, t, r, n) {
    if (typeof r === "function" && !n) n = r, r = {};
    if (!r) r = {};
    r = Object.assign({}, r);
    let o;
    if (n) o = n;else o = function (d, u) {
      if (d) throw d;
      return u;
    };
    if (r.clockTimestamp && typeof r.clockTimestamp !== "number") return o(new W("clockTimestamp must be a number"));
    if (r.nonce !== void 0 && (typeof r.nonce !== "string" || r.nonce.trim() === "")) return o(new W("nonce must be a non-empty string"));
    if (r.allowInvalidAsymmetricKeyTypes !== void 0 && typeof r.allowInvalidAsymmetricKeyTypes !== "boolean") return o(new W("allowInvalidAsymmetricKeyTypes must be a boolean"));
    let i = r.clockTimestamp || Math.floor(Date.now() / 1000);
    if (!e) return o(new W("jwt must be provided"));
    if (typeof e !== "string") return o(new W("jwt must be a string"));
    let s = e.split(".");
    if (s.length !== 3) return o(new W("jwt malformed"));
    let a;
    try {
      a = Iy(e, {
        complete: !0
      });
    } catch (error) {
      return o(error);
    }
    if (!a) return o(new W("invalid token"));
    let header = a.header,
      l;
    if (typeof t === "function") {
      if (!n) return o(new W("verify must be called asynchronous if secret or public key is provided as a callback"));
      l = t;
    } else l = function (d, u) {
      return u(null, t);
    };
    return l(header, function (d, u) {
      if (d) return o(new W("error in secret or public key callback: " + d.message));
      let m = s[2].trim() !== "";
      if (!m && u) return o(new W("jwt signature is required"));
      if (m && !u) return o(new W("secret or public key must be provided"));
      if (!m && !r.algorithms) return o(new W('please specify "none" in "algorithms" to verify unsigned tokens'));
      if (u != null && !(u instanceof KeyObject)) try {
        u = createPublicKey(u);
      } catch (error) {
        try {
          u = createSecretKey(typeof u === "string" ? Buffer.from(u) : u);
        } catch (error) {
          return o(new W("secretOrPublicKey is not valid key material"));
        }
      }
      if (!r.algorithms) if (u.type === "secret") r.algorithms = Py;else if (["rsa", "rsa-pss"].includes(u.asymmetricKeyType)) r.algorithms = hc;else if (u.asymmetricKeyType === "ec") r.algorithms = by;else r.algorithms = uc;
      if (r.algorithms.indexOf(a.header.alg) === -1) return o(new W("invalid algorithm"));
      if (header.alg.startsWith("HS") && u.type !== "secret") return o(new W(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));else if (/^(?:RS|PS|ES)/.test(header.alg) && u.type !== "public") return o(new W(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
      if (!r.allowInvalidAsymmetricKeyTypes) try {
        Sy(header.alg, u);
      } catch (error) {
        return o(error);
      }
      let p;
      try {
        p = Jh.verify(e, a.header.alg, u);
      } catch (error) {
        return o(error);
      }
      if (!p) return o(new W("invalid signature"));
      let payload_2 = a.payload;
      if (typeof payload_2.nbf < "u" && !r.ignoreNotBefore) {
        if (typeof payload_2.nbf !== "number") return o(new W("invalid nbf value"));
        if (payload_2.nbf > i + (r.clockTolerance || 0)) return o(new Ay("jwt not active", new Date(payload_2.nbf * 1000)));
      }
      if (typeof payload_2.exp < "u" && !r.ignoreExpiration) {
        if (typeof payload_2.exp !== "number") return o(new W("invalid exp value"));
        if (i >= payload_2.exp + (r.clockTolerance || 0)) return o(new Qh("jwt expired", new Date(payload_2.exp * 1000)));
      }
      if (r.audience) {
        let T = Array.isArray(r.audience) ? r.audience : [r.audience];
        if (!(Array.isArray(payload_2.aud) ? payload_2.aud : [payload_2.aud]).some(function (item) {
          return T.some(function (B) {
            return B instanceof RegExp ? B.test(item) : B === item;
          });
        })) return o(new W("jwt audience invalid. expected: " + T.join(" or ")));
      }
      if (r.issuer) {
        if (typeof r.issuer === "string" && payload_2.iss !== r.issuer || Array.isArray(r.issuer) && r.issuer.indexOf(payload_2.iss) === -1) return o(new W("jwt issuer invalid. expected: " + r.issuer));
      }
      if (r.subject) {
        if (payload_2.sub !== r.subject) return o(new W("jwt subject invalid. expected: " + r.subject));
      }
      if (r.jwtid) {
        if (payload_2.jti !== r.jwtid) return o(new W("jwt jwtid invalid. expected: " + r.jwtid));
      }
      if (r.nonce) {
        if (payload_2.nonce !== r.nonce) return o(new W("jwt nonce invalid. expected: " + r.nonce));
      }
      if (r.maxAge) {
        if (typeof payload_2.iat !== "number") return o(new W("iat required when maxAge is specified"));
        let T = _y(r.maxAge, payload_2.iat);
        if (typeof T > "u") return o(new W('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        if (i >= T + (r.clockTolerance || 0)) return o(new Qh("maxAge exceeded", new Date(T * 1000)));
      }
      if (r.complete === !0) {
        let signature = a.signature;
        return o(null, {
          header: header,
          payload: payload_2,
          signature: signature
        });
      }
      return o(null, payload_2);
    });
  };
});
var sf = R(function (cL, of) {
  var ef = 1 / 0,
    rf = 9007199254740991,
    Oy = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
    tf = NaN,
    Ny = "[object Arguments]",
    xy = "[object Function]",
    My = "[object GeneratorFunction]",
    Dy = "[object String]",
    Uy = "[object Symbol]",
    Ly = /^\s+|\s+$/g,
    Hy = /^[-+]0x[0-9a-f]+$/i,
    Fy = /^0b[01]+$/i,
    $y = /^0o[0-7]+$/i,
    By = /^(?:0|[1-9]\d*)$/,
    parseInt_2 = parseInt;
  function Gy(e, t) {
    var r = -1,
      n = e ? e.length : 0,
      o = Array(n);
    while (++r < n) o[r] = t(e[r], r, e);
    return o;
  }
  function qy(e, t, r, n) {
    var o = e.length,
      i = r + (n ? 1 : -1);
    while (n ? i-- : ++i < o) if (t(e[i], i, e)) return i;
    return -1;
  }
  function Ky(e, t, r) {
    if (t !== t) return qy(e, Vy, r);
    var n = r - 1,
      o = e.length;
    while (++n < o) if (e[n] === t) return n;
    return -1;
  }
  function Vy(e) {
    return e !== e;
  }
  function jy(e, t) {
    var r = -1,
      n = Array(e);
    while (++r < e) n[r] = t(r);
    return n;
  }
  function Yy(e, t) {
    return Gy(t, function (r) {
      return e[r];
    });
  }
  function Wy(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var us = Object.prototype,
    {
      hasOwnProperty: hasOwnProperty,
      toString: toString,
      propertyIsEnumerable: propertyIsEnumerable
    } = us,
    Jy = Wy(Object.keys, Object),
    Xy = Math.max;
  function Zy(e, t) {
    var r = nf(e) || oT(e) ? jy(e.length, String) : [],
      n = r.length,
      o = !!n;
    for (var i in e) if ((t || hasOwnProperty.call(e, i)) && !(o && (i == "length" || tT(i, n)))) r.push(i);
    return r;
  }
  function eT(e) {
    if (!rT(e)) return Jy(e);
    var t = [];
    for (var r in Object(e)) if (hasOwnProperty.call(e, r) && r != "constructor") t.push(r);
    return t;
  }
  function tT(e, t) {
    return t = t == null ? rf : t, !!t && (typeof e == "number" || By.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  function rT(e) {
    var t = e && e.constructor,
      r = typeof t == "function" && t.prototype || us;
    return e === r;
  }
  function nT(e, t, r, n) {
    e = pc(e) ? e : mT(e), r = r && !n ? uT(r) : 0;
    var o = e.length;
    if (r < 0) r = Xy(o + r, 0);
    return cT(e) ? r <= o && e.indexOf(t, r) > -1 : !!o && Ky(e, t, r) > -1;
  }
  function oT(e) {
    return iT(e) && hasOwnProperty.call(e, "callee") && (!propertyIsEnumerable.call(e, "callee") || toString.call(e) == Ny);
  }
  var nf = Array.isArray;
  function pc(e) {
    return e != null && aT(e.length) && !sT(e);
  }
  function iT(e) {
    return gc(e) && pc(e);
  }
  function sT(e) {
    var t = fc(e) ? toString.call(e) : "";
    return t == xy || t == My;
  }
  function aT(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= rf;
  }
  function fc(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function gc(e) {
    return !!e && typeof e == "object";
  }
  function cT(e) {
    return typeof e == "string" || !nf(e) && gc(e) && toString.call(e) == Dy;
  }
  function lT(e) {
    return typeof e == "symbol" || gc(e) && toString.call(e) == Uy;
  }
  function dT(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = hT(e), e === ef || e === -ef) {
      var t = e < 0 ? -1 : 1;
      return t * Oy;
    }
    return e === e ? e : 0;
  }
  function uT(e) {
    var t = dT(e),
      r = t % 1;
    return t === t ? r ? t - r : t : 0;
  }
  function hT(e) {
    if (typeof e == "number") return e;
    if (lT(e)) return tf;
    if (fc(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = fc(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(Ly, "");
    var r = Fy.test(e);
    return r || $y.test(e) ? parseInt_2(e.slice(2), r ? 2 : 8) : Hy.test(e) ? tf : +e;
  }
  function fT(e) {
    return pc(e) ? Zy(e) : eT(e);
  }
  function mT(e) {
    return e ? Yy(e, fT(e)) : [];
  }
  of.exports = nT;
});
var cf = R(function (lL, af) {
  var pT = "[object Boolean]",
    gT = Object.prototype,
    yT = gT.toString;
  function TT(e) {
    return e === !0 || e === !1 || ET(e) && yT.call(e) == pT;
  }
  function ET(e) {
    return !!e && typeof e == "object";
  }
  af.exports = TT;
});
var ff = R(function (dL, hf) {
  var lf = 1 / 0,
    CT = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
    df = NaN,
    AT = "[object Symbol]",
    IT = /^\s+|\s+$/g,
    _T = /^[-+]0x[0-9a-f]+$/i,
    ST = /^0b[01]+$/i,
    RT = /^0o[0-7]+$/i,
    parseInt_3 = parseInt,
    vT = Object.prototype,
    kT = vT.toString;
  function bT(e) {
    return typeof e == "number" && e == xT(e);
  }
  function uf(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function PT(e) {
    return !!e && typeof e == "object";
  }
  function OT(e) {
    return typeof e == "symbol" || PT(e) && kT.call(e) == AT;
  }
  function NT(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = MT(e), e === lf || e === -lf) {
      var t = e < 0 ? -1 : 1;
      return t * CT;
    }
    return e === e ? e : 0;
  }
  function xT(e) {
    var t = NT(e),
      r = t % 1;
    return t === t ? r ? t - r : t : 0;
  }
  function MT(e) {
    if (typeof e == "number") return e;
    if (OT(e)) return df;
    if (uf(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = uf(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(IT, "");
    var r = ST.test(e);
    return r || RT.test(e) ? parseInt_3(e.slice(2), r ? 2 : 8) : _T.test(e) ? df : +e;
  }
  hf.exports = bT;
});
var pf = R(function (uL, mf) {
  var DT = "[object Number]",
    UT = Object.prototype,
    LT = UT.toString;
  function HT(e) {
    return !!e && typeof e == "object";
  }
  function FT(e) {
    return typeof e == "number" || HT(e) && LT.call(e) == DT;
  }
  mf.exports = FT;
});
var Ef = R(function (hL, Tf) {
  var $T = "[object Object]";
  function BT(e) {
    var t = !1;
    if (e != null && typeof e.toString != "function") try {
      t = !!(e + "");
    } catch (error) {}
    return t;
  }
  function zT(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var GT = Function.prototype,
    gf = Object.prototype,
    yf = GT.toString,
    qT = gf.hasOwnProperty,
    KT = yf.call(Object),
    VT = gf.toString,
    jT = zT(Object.getPrototypeOf, Object);
  function YT(e) {
    return !!e && typeof e == "object";
  }
  function WT(e) {
    if (!YT(e) || VT.call(e) != $T || BT(e)) return !1;
    var t = jT(e);
    if (t === null) return !0;
    var r = qT.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && yf.call(r) == KT;
  }
  Tf.exports = WT;
});
var Af = R(function (fL, Cf) {
  var QT = "[object String]",
    JT = Object.prototype,
    XT = JT.toString,
    ZT = Array.isArray;
  function eE(e) {
    return !!e && typeof e == "object";
  }
  function tE(e) {
    return typeof e == "string" || !ZT(e) && eE(e) && XT.call(e) == QT;
  }
  Cf.exports = tE;
});
var wf = R(function (mL, Rf) {
  var rE = "Expected a function",
    If = 1 / 0,
    nE = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
    _f = NaN,
    oE = "[object Symbol]",
    iE = /^\s+|\s+$/g,
    sE = /^[-+]0x[0-9a-f]+$/i,
    aE = /^0b[01]+$/i,
    cE = /^0o[0-7]+$/i,
    parseInt_4 = parseInt,
    dE = Object.prototype,
    uE = dE.toString;
  function hE(e, t) {
    var r;
    if (typeof t != "function") throw TypeError(rE);
    return e = yE(e), function () {
      if (--e > 0) r = t.apply(this, arguments);
      if (e <= 1) t = void 0;
      return r;
    };
  }
  function fE(e) {
    return hE(2, e);
  }
  function Sf(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function mE(e) {
    return !!e && typeof e == "object";
  }
  function pE(e) {
    return typeof e == "symbol" || mE(e) && uE.call(e) == oE;
  }
  function gE(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = TE(e), e === If || e === -If) {
      var t = e < 0 ? -1 : 1;
      return t * nE;
    }
    return e === e ? e : 0;
  }
  function yE(e) {
    var t = gE(e),
      r = t % 1;
    return t === t ? r ? t - r : t : 0;
  }
  function TE(e) {
    if (typeof e == "number") return e;
    if (pE(e)) return _f;
    if (Sf(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = Sf(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(iE, "");
    var r = aE.test(e);
    return r || cE.test(e) ? parseInt_4(e.slice(2), r ? 2 : 8) : sE.test(e) ? _f : +e;
  }
  Rf.exports = fE;
});
var Df = R(function (pL, Mf) {
  var vf = cc(),
    EE = dc(),
    CE = lc(),
    ms = rHt(),
    Pf = sf(),
    isValid_3 = cf(),
    kf = ff(),
    isValid_4 = pf(),
    isValid = Ef(),
    isValid_2 = Af(),
    AE = wf(),
    {
      KeyObject: KeyObject_2,
      createSecretKey: createSecretKey_2,
      createPrivateKey: createPrivateKey
    } = Ue("crypto"),
    Nf = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
  if (EE) Nf.splice(3, 0, "PS256", "PS384", "PS512");
  var RE = {
      expiresIn: {
        isValid: function isValid(e) {
          return kf(e) || isValid_2(e) && e;
        },
        message: '"expiresIn" should be a number of seconds or string representing a timespan'
      },
      notBefore: {
        isValid: function isValid(e) {
          return kf(e) || isValid_2(e) && e;
        },
        message: '"notBefore" should be a number of seconds or string representing a timespan'
      },
      audience: {
        isValid: function isValid(e) {
          return isValid_2(e) || Array.isArray(e);
        },
        message: '"audience" must be a string or array'
      },
      algorithm: {
        isValid: Pf.bind(null, Nf),
        message: '"algorithm" must be a valid string enum value'
      },
      header: {
        isValid: isValid,
        message: '"header" must be an object'
      },
      encoding: {
        isValid: isValid_2,
        message: '"encoding" must be a string'
      },
      issuer: {
        isValid: isValid_2,
        message: '"issuer" must be a string'
      },
      subject: {
        isValid: isValid_2,
        message: '"subject" must be a string'
      },
      jwtid: {
        isValid: isValid_2,
        message: '"jwtid" must be a string'
      },
      noTimestamp: {
        isValid: isValid_3,
        message: '"noTimestamp" must be a boolean'
      },
      keyid: {
        isValid: isValid_2,
        message: '"keyid" must be a string'
      },
      mutatePayload: {
        isValid: isValid_3,
        message: '"mutatePayload" must be a boolean'
      },
      allowInsecureKeySizes: {
        isValid: isValid_3,
        message: '"allowInsecureKeySizes" must be a boolean'
      },
      allowInvalidAsymmetricKeyTypes: {
        isValid: isValid_3,
        message: '"allowInvalidAsymmetricKeyTypes" must be a boolean'
      }
    },
    wE = {
      iat: {
        isValid: isValid_4,
        message: '"iat" should be a number of seconds'
      },
      exp: {
        isValid: isValid_4,
        message: '"exp" should be a number of seconds'
      },
      nbf: {
        isValid: isValid_4,
        message: '"nbf" should be a number of seconds'
      }
    };
  function xf(e, t, r, n) {
    if (!isValid(r)) throw Error('Expected "' + n + '" to be a plain object.');
    Object.keys(r).forEach(function (item) {
      let i = e[item];
      if (!i) {
        if (!t) throw Error('"' + item + '" is not allowed in "' + n + '"');
        return;
      }
      if (!i.isValid(r[item])) throw Error(i.message);
    });
  }
  function vE(e) {
    return xf(RE, !1, e, "options");
  }
  function kE(e) {
    return xf(wE, !0, e, "payload");
  }
  var bf = {
      audience: "aud",
      issuer: "iss",
      subject: "sub",
      jwtid: "jti"
    },
    bE = ["expiresIn", "notBefore", "noTimestamp", "audience", "issuer", "subject", "jwtid"];
  Mf.exports = function exports(payload_3, t, r, n) {
    if (typeof r === "function") n = r, r = {};else r = r || {};
    let o = typeof payload_3 === "object" && !Buffer.isBuffer(payload_3),
      header_2 = Object.assign({
        alg: r.algorithm || "HS256",
        typ: o ? "JWT" : void 0,
        kid: r.keyid
      }, r.header);
    function s(l) {
      if (n) return n(l);
      throw l;
    }
    if (!t && r.algorithm !== "none") return s(Error("secretOrPrivateKey must have a value"));
    if (t != null && !(t instanceof KeyObject_2)) try {
      t = createPrivateKey(t);
    } catch (error) {
      try {
        t = createSecretKey_2(typeof t === "string" ? Buffer.from(t) : t);
      } catch (error) {
        return s(Error("secretOrPrivateKey is not valid key material"));
      }
    }
    if (header_2.alg.startsWith("HS") && t.type !== "secret") return s(Error(`secretOrPrivateKey must be a symmetric key when using ${header_2.alg}`));else if (/^(?:RS|PS|ES)/.test(header_2.alg)) {
      if (t.type !== "private") return s(Error(`secretOrPrivateKey must be an asymmetric key when using ${header_2.alg}`));
      if (!r.allowInsecureKeySizes && !header_2.alg.startsWith("ES") && t.asymmetricKeyDetails !== void 0 && t.asymmetricKeyDetails.modulusLength < 2048) return s(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header_2.alg}`));
    }
    if (typeof payload_3 > "u") return s(Error("payload is required"));else if (o) {
      try {
        kE(payload_3);
      } catch (error) {
        return s(error);
      }
      if (!r.mutatePayload) payload_3 = Object.assign({}, payload_3);
    } else {
      let l = bE.filter(function (item) {
        return typeof r[item] < "u";
      });
      if (l.length > 0) return s(Error("invalid " + l.join(",") + " option for " + typeof payload_3 + " payload"));
    }
    if (typeof payload_3.exp < "u" && typeof r.expiresIn < "u") return s(Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    if (typeof payload_3.nbf < "u" && typeof r.notBefore < "u") return s(Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    try {
      vE(r);
    } catch (error) {
      return s(error);
    }
    if (!r.allowInvalidAsymmetricKeyTypes) try {
      CE(header_2.alg, t);
    } catch (error) {
      return s(error);
    }
    let a = payload_3.iat || Math.floor(Date.now() / 1000);
    if (r.noTimestamp) delete payload_3.iat;else if (o) payload_3.iat = a;
    if (typeof r.notBefore < "u") {
      try {
        payload_3.nbf = vf(r.notBefore, a);
      } catch (error) {
        return s(error);
      }
      if (typeof payload_3.nbf > "u") return s(Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    if (typeof r.expiresIn < "u" && typeof payload_3 === "object") {
      try {
        payload_3.exp = vf(r.expiresIn, a);
      } catch (error) {
        return s(error);
      }
      if (typeof payload_3.exp > "u") return s(Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    Object.keys(bf).forEach(function (item) {
      let d = bf[item];
      if (typeof r[item] < "u") {
        if (typeof payload_3[d] < "u") return s(Error('Bad "options.' + item + '" option. The payload already has an "' + d + '" property.'));
        payload_3[d] = r[item];
      }
    });
    let encoding = r.encoding || "utf8";
    if (typeof n === "function") n = n && AE(n), ms.createSign({
      header: header_2,
      privateKey: t,
      payload: payload_3,
      encoding: encoding
    }).once("error", n).once("done", function (l) {
      if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(header_2.alg) && l.length < 256) return n(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header_2.alg}`));
      n(null, l);
    });else {
      let l = ms.sign({
        header: header_2,
        payload: payload_3,
        secret: t,
        encoding: encoding
      });
      if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(header_2.alg) && l.length < 256) throw Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header_2.alg}`);
      return l;
    }
  };
});
var Lf = R(function (gL, Uf) {
  Uf.exports = {
    decode: ic(),
    verify: Zh(),
    sign: Df(),
    JsonWebTokenError: vo(),
    NotBeforeError: sc(),
    TokenExpiredError: ac()
  };
});
var packageVersion_3 = "4.10.1",
  Ps = "04b07795-8ddb-461a-bbee-02f9e1bf7b46",
  zc = "common",
  bs;
(function (e) {
  e.AzureChina = "https://login.chinacloudapi.cn", e.AzureGermany = "https://login.microsoftonline.de", e.AzureGovernment = "https://login.microsoftonline.us", e.AzurePublicCloud = "https://login.microsoftonline.com";
})(bs || (bs = {}));
var AzurePublicCloud = bs.AzurePublicCloud,
  Gc = "login.microsoftonline.com",
  qc = ["*"],
  Kc = "cae",
  Vc = "nocae",
  jc = "msal.cache";
var Os = void 0;
var Yc = void 0;
function generatePluginConfiguration(e) {
  var t, r, n, o, i, s, a;
  let c = {
    cache: {},
    broker: {
      isEnabled: (r = (t = e.brokerOptions) === null || t === void 0 ? void 0 : t.enabled) !== null && r !== void 0 ? r : !1,
      enableMsaPassthrough: (o = (n = e.brokerOptions) === null || n === void 0 ? void 0 : n.legacyEnableMsaPassthrough) !== null && o !== void 0 ? o : !1,
      parentWindowHandle: (i = e.brokerOptions) === null || i === void 0 ? void 0 : i.parentWindowHandle
    }
  };
  if ((s = e.tokenCachePersistenceOptions) === null || s === void 0 ? void 0 : s.enabled) {
    if (Os === void 0) throw Error(["Persistent token caching was requested, but no persistence provider was configured.", "You must install the identity-cache-persistence plugin package (`npm install --save @azure/identity-cache-persistence`)", "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling", "`useIdentityPlugin(cachePersistencePlugin)` before using `tokenCachePersistenceOptions`."].join(" "));
    let l = e.tokenCachePersistenceOptions.name || jc;
    c.cache.cachePlugin = Os(Object.assign({
      name: `${l}.${Vc}`
    }, e.tokenCachePersistenceOptions)), c.cache.cachePluginCae = Os(Object.assign({
      name: `${l}.${Kc}`
    }, e.tokenCachePersistenceOptions));
  }
  if ((a = e.brokerOptions) === null || a === void 0 ? void 0 : a.enabled) {
    if (Yc === void 0) throw Error(["Broker for WAM was requested to be enabled, but no native broker was configured.", "You must install the identity-broker plugin package (`npm install --save @azure/identity-broker`)", "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling", "`useIdentityPlugin(createNativeBrokerPlugin())` before using `enableBroker`."].join(" "));
    c.broker.nativeBrokerPlugin = Yc.broker;
  }
  return c;
}
var Wc = {
  generatePluginConfiguration: generatePluginConfiguration
};
import { EOL as mm } from "os";
import pm from "util";
import * as Qc from "process";
function log(e, ...t) {
  Qc.stderr.write(`${pm.format(e, ...t)}${mm}`);
}
var Xc = typeof process < "u" && process.env && process.env.DEBUG || void 0,
  Zc,
  Ns = [],
  xs = [],
  Mo = [];
if (Xc) enable(Xc);
var el = Object.assign(e => tl(e), {
  enable: enable,
  enabled: enabled,
  disable: disable,
  log: log
});
function enable(e) {
  Zc = e, Ns = [], xs = [];
  let t = /\*/g,
    r = e.split(",").map(item => item.trim().replace(t, ".*?"));
  for (let n of r) if (n.startsWith("-")) xs.push(new RegExp(`^${n.substr(1)}$`));else Ns.push(new RegExp(`^${n}$`));
  for (let n of Mo) n.enabled = enabled(n.namespace);
}
function enabled(e) {
  if (e.endsWith("*")) return !0;
  for (let t of xs) if (t.test(e)) return !1;
  for (let t of Ns) if (t.test(e)) return !0;
  return !1;
}
function disable() {
  let e = Zc || "";
  return enable(""), e;
}
function tl(namespace) {
  let t = Object.assign(r, {
    enabled: enabled(namespace),
    destroy: destroy,
    log: el.log,
    namespace: namespace,
    extend: extend
  });
  function r(...n) {
    if (!t.enabled) return;
    if (n.length > 0) n[0] = `${namespace} ${n[0]}`;
    t.log(...n);
  }
  return Mo.push(t), t;
}
function destroy() {
  let e = Mo.indexOf(this);
  if (e >= 0) return Mo.splice(e, 1), !0;
  return !1;
}
function extend(e) {
  let t = tl(`${this.namespace}:${e}`);
  return t.log = this.log, t;
}
var $r = el;
var Us = ["verbose", "info", "warning", "error"],
  rl = {
    verbose: 400,
    info: 300,
    warning: 200,
    error: 100
  };
function nl(e, t) {
  t.log = (...r) => {
    e.log(...r);
  };
}
function ol(e) {
  return Us.includes(e);
}
function Do(e) {
  let t = new Set(),
    r = typeof process < "u" && process.env && process.env[e.logLevelEnvVarName] || void 0,
    n,
    logger = $r(e.namespace);
  logger.log = (...d) => {
    $r.log(...d);
  };
  function setLogLevel(d) {
    if (d && !ol(d)) throw Error(`Unknown log level '${d}'. Acceptable values: ${Us.join(",")}`);
    n = d;
    let u = [];
    for (let m of t) if (s(m)) u.push(m.namespace);
    $r.enable(u.join(","));
  }
  if (r) if (ol(r)) setLogLevel(r);else console.error(`${e.logLevelEnvVarName} set to unknown log level '${r}'; logging is not enabled. Acceptable values: ${Us.join(", ")}.`);
  function s(d) {
    return Boolean(n && rl[d.level] <= rl[n]);
  }
  function a(d, level) {
    let m = Object.assign(d.extend(level), {
      level: level
    });
    if (nl(d, m), s(m)) {
      let p = $r.disable();
      $r.enable(p + "," + m.namespace);
    }
    return t.add(m), m;
  }
  function getLogLevel() {
    return n;
  }
  function createClientLogger(d) {
    let u = logger.extend(d);
    return nl(logger, u), {
      error: a(u, "error"),
      warning: a(u, "warning"),
      info: a(u, "info"),
      verbose: a(u, "verbose")
    };
  }
  return {
    setLogLevel: setLogLevel,
    getLogLevel: getLogLevel,
    createClientLogger: createClientLogger,
    logger: logger
  };
}
var il = Do({
    logLevelEnvVarName: "TYPESPEC_RUNTIME_LOG_LEVEL",
    namespace: "typeSpecRuntime"
  }),
  logger_2 = il.logger;
function Uo(e) {
  return il.createClientLogger(e);
}
var Ls = Do({
    logLevelEnvVarName: "AZURE_LOG_LEVEL",
    namespace: "azure"
  }),
  logger_3 = Ls.logger;
function Lo() {
  return Ls.getLogLevel();
}
function Ot(e) {
  return Ls.createClientLogger(e);
}
var Be = Ot("identity");
function Ho(e) {
  return e.reduce((acc, item) => {
    if (process.env[item]) acc.assigned.push(item);else acc.missing.push(item);
    return acc;
  }, {
    missing: [],
    assigned: []
  });
}
function he(e) {
  return `SUCCESS. Scopes: ${Array.isArray(e) ? e.join(", ") : e}.`;
}
function q(e, t) {
  let r = "ERROR.";
  if (e === null || e === void 0 ? void 0 : e.length) r += ` Scopes: ${Array.isArray(e) ? e.join(", ") : e}.`;
  return `${r} Error message: ${typeof t === "string" ? t : t.message}.`;
}
function sl(title, t, r = Be) {
  let fullTitle = t ? `${t.fullTitle} ${title}` : title;
  function info(c) {
    r.info(`${fullTitle} =>`, c);
  }
  function warning(c) {
    r.warning(`${fullTitle} =>`, c);
  }
  function verbose(c) {
    r.verbose(`${fullTitle} =>`, c);
  }
  function error_2(c) {
    r.error(`${fullTitle} =>`, c);
  }
  return {
    title: title,
    fullTitle: fullTitle,
    info: info,
    warning: warning,
    verbose: verbose,
    error: error_2
  };
}
function z(e, parent = Be) {
  let r = sl(e, void 0, parent);
  return Object.assign(Object.assign({}, r), {
    parent: parent,
    getToken: sl("=> getToken()", r, parent)
  });
}
function Em(e) {
  return e && typeof e.error === "string" && typeof e.error_description === "string";
}
var Cm = "CredentialUnavailableError";
class w extends Error {
  constructor(e, t) {
    super(e, t);
    this.name = Cm;
  }
}
var Hs = "AuthenticationError";
class $n extends Error {
  constructor(e, t, r) {
    let n = {
      error: "unknown",
      errorDescription: "An unknown error occurred and no additional details are available."
    };
    if (Em(t)) n = al(t);else if (typeof t === "string") try {
      let o = JSON.parse(t);
      n = al(o);
    } catch (o) {
      if (e === 400) n = {
        error: "invalid_request",
        errorDescription: `The service indicated that the request was invalid.

${t}`
      };else n = {
        error: "unknown_error",
        errorDescription: `An unknown error has occurred. Response body:

${t}`
      };
    } else n = {
      error: "unknown_error",
      errorDescription: "An unknown error occurred and no additional details are available."
    };
    super(`${n.error} Status code: ${e}
More details:
${n.errorDescription},`, r);
    this.statusCode = e, this.errorResponse = n, this.name = Hs;
  }
}
var Am = "AggregateAuthenticationError";
class Fs extends Error {
  constructor(e, t) {
    let r = e.join(`
`);
    super(`${t}
${r}`);
    this.errors = e, this.name = Am;
  }
}
function al(e) {
  return {
    error: e.error,
    errorDescription: e.error_description,
    correlationId: e.correlation_id,
    errorCodes: e.error_codes,
    timestamp: e.timestamp,
    traceId: e.trace_id
  };
}
class AuthenticationRequiredError extends Error {
  constructor(e) {
    super(e.message, e.cause ? {
      cause: e.cause
    } : void 0);
    this.scopes = e.scopes, this.getTokenOptions = e.getTokenOptions, this.name = "AuthenticationRequiredError";
  }
}
function Im(e) {
  return `The current credential is not configured to acquire tokens for tenant ${e}. To enable acquiring tokens for this tenant add it to the AdditionallyAllowedTenants on the credential options, or add "*" to AdditionallyAllowedTenants to allow acquiring tokens for any tenant.`;
}
function Ee(e, t, r = [], n) {
  var o;
  let i;
  if (process.env.AZURE_IDENTITY_DISABLE_MULTITENANTAUTH) i = e;else if (e === "adfs") i = e;else i = (o = t === null || t === void 0 ? void 0 : t.tenantId) !== null && o !== void 0 ? o : e;
  if (e && i !== e && !r.includes("*") && !r.some(item => item.localeCompare(i) === 0)) {
    let s = Im(i);
    throw n === null || n === void 0 || n.info(s), new w(s);
  }
  return i;
}
function Re(e, t) {
  if (!t.match(/^[0-9a-zA-Z-.]+$/)) {
    let r = Error("Invalid tenant id provided. You can locate your tenant id by following the instructions listed here: https://learn.microsoft.com/partner-center/find-ids-and-domain-names.");
    throw e.info(q("", r)), r;
  }
}
function cl(e, t, r) {
  if (t) return Re(e, t), t;
  if (!r) r = Ps;
  if (r !== Ps) return "common";
  return "organizations";
}
function we(e) {
  if (!e || e.length === 0) return [];
  if (e.includes("*")) return qc;
  return e;
}
function Fo(e) {
  return e.toLowerCase();
}
function* _m(e) {
  for (let t of e.values()) yield [t.name, t.value];
}
class ll {
  constructor(e) {
    if (this._headersMap = new Map(), e) for (let t of Object.keys(e)) this.set(t, e[t]);
  }
  set(name, t) {
    this._headersMap.set(Fo(name), {
      name: name,
      value: String(t).trim()
    });
  }
  get(e) {
    var t;
    return (t = this._headersMap.get(Fo(e))) === null || t === void 0 ? void 0 : t.value;
  }
  has(e) {
    return this._headersMap.has(Fo(e));
  }
  delete(e) {
    this._headersMap.delete(Fo(e));
  }
  toJSON(e = {}) {
    let t = {};
    if (e.preserveCase) for (let r of this._headersMap.values()) t[r.name] = r.value;else for (let [r, n] of this._headersMap) t[r] = n.value;
    return t;
  }
  toString() {
    return JSON.stringify(this.toJSON({
      preserveCase: !0
    }));
  }
  [Symbol.iterator]() {
    return _m(this._headersMap);
  }
}
function et(e) {
  return new ll(e);
}
import { randomUUID as Sm } from "crypto";
var $s,
  Rm = typeof (($s = globalThis === null || globalThis === void 0 ? void 0 : globalThis.crypto) === null || $s === void 0 ? void 0 : $s.randomUUID) === "function" ? globalThis.crypto.randomUUID.bind(globalThis.crypto) : Sm;
function Bn() {
  return Rm();
}
class dl {
  constructor(e) {
    var t, r, n, o, i, s, a;
    this.url = e.url, this.body = e.body, this.headers = (t = e.headers) !== null && t !== void 0 ? t : et(), this.method = (r = e.method) !== null && r !== void 0 ? r : "GET", this.timeout = (n = e.timeout) !== null && n !== void 0 ? n : 0, this.multipartBody = e.multipartBody, this.formData = e.formData, this.disableKeepAlive = (o = e.disableKeepAlive) !== null && o !== void 0 ? o : !1, this.proxySettings = e.proxySettings, this.streamResponseStatusCodes = e.streamResponseStatusCodes, this.withCredentials = (i = e.withCredentials) !== null && i !== void 0 ? i : !1, this.abortSignal = e.abortSignal, this.onUploadProgress = e.onUploadProgress, this.onDownloadProgress = e.onDownloadProgress, this.requestId = e.requestId || Bn(), this.allowInsecureConnection = (s = e.allowInsecureConnection) !== null && s !== void 0 ? s : !1, this.enableBrowserStreams = (a = e.enableBrowserStreams) !== null && a !== void 0 ? a : !1, this.requestOverrides = e.requestOverrides, this.authSchemes = e.authSchemes;
  }
}
function Bs(e) {
  return new dl(e);
}
var ul = new Set(["Deserialize", "Serialize", "Retry", "Sign"]);
class $o {
  constructor(e) {
    var t;
    this._policies = [], this._policies = (t = e === null || e === void 0 ? void 0 : e.slice(0)) !== null && t !== void 0 ? t : [], this._orderedPolicies = void 0;
  }
  addPolicy(policy, options = {}) {
    if (options.phase && options.afterPhase) throw Error("Policies inside a phase cannot specify afterPhase.");
    if (options.phase && !ul.has(options.phase)) throw Error(`Invalid phase name: ${options.phase}`);
    if (options.afterPhase && !ul.has(options.afterPhase)) throw Error(`Invalid afterPhase name: ${options.afterPhase}`);
    this._policies.push({
      policy: policy,
      options: options
    }), this._orderedPolicies = void 0;
  }
  removePolicy(e) {
    let t = [];
    return this._policies = this._policies.filter(item => {
      if (e.name && item.policy.name === e.name || e.phase && item.options.phase === e.phase) return t.push(item.policy), !1;else return !0;
    }), this._orderedPolicies = void 0, t;
  }
  sendRequest(e, t) {
    return this.getOrderedPolicies().reduceRight((acc, item) => s => item.sendRequest(s, acc), o => e.sendRequest(o))(t);
  }
  getOrderedPolicies() {
    if (!this._orderedPolicies) this._orderedPolicies = this.orderPolicies();
    return this._orderedPolicies;
  }
  clone() {
    return new $o(this._policies);
  }
  static create() {
    return new $o();
  }
  orderPolicies() {
    let e = [],
      t = new Map();
    function r(name_2) {
      return {
        name: name_2,
        policies: new Set(),
        hasRun: !1,
        hasAfterPolicies: !1
      };
    }
    let n = r("Serialize"),
      o = r("None"),
      i = r("Deserialize"),
      s = r("Retry"),
      a = r("Sign"),
      c = [n, o, i, s, a];
    function l(p) {
      if (p === "Retry") return s;else if (p === "Serialize") return n;else if (p === "Deserialize") return i;else if (p === "Sign") return a;else return o;
    }
    for (let p of this._policies) {
      let {
          policy: policy_2,
          options: options_2
        } = p,
        I = policy_2.name;
      if (t.has(I)) throw Error("Duplicate policy names not allowed in pipeline");
      let k = {
        policy: policy_2,
        dependsOn: new Set(),
        dependants: new Set()
      };
      if (options_2.afterPhase) k.afterPhase = l(options_2.afterPhase), k.afterPhase.hasAfterPolicies = !0;
      t.set(I, k), l(options_2.phase).policies.add(k);
    }
    for (let p of this._policies) {
      let {
          policy: policy_3,
          options: options_3
        } = p,
        I = policy_3.name,
        k = t.get(I);
      if (!k) throw Error(`Missing node for policy ${I}`);
      if (options_3.afterPolicies) for (let U of options_3.afterPolicies) {
        let B = t.get(U);
        if (B) k.dependsOn.add(B), B.dependants.add(k);
      }
      if (options_3.beforePolicies) for (let U of options_3.beforePolicies) {
        let B = t.get(U);
        if (B) B.dependsOn.add(k), k.dependants.add(B);
      }
    }
    function d(p) {
      p.hasRun = !0;
      for (let y of p.policies) {
        if (y.afterPhase && (!y.afterPhase.hasRun || y.afterPhase.policies.size)) continue;
        if (y.dependsOn.size === 0) {
          e.push(y.policy);
          for (let T of y.dependants) T.dependsOn.delete(y);
          t.delete(y.policy.name), p.policies.delete(y);
        }
      }
    }
    function u() {
      for (let p of c) {
        if (d(p), p.policies.size > 0 && p !== o) {
          if (!o.hasRun) d(o);
          return;
        }
        if (p.hasAfterPolicies) d(o);
      }
    }
    let m = 0;
    while (t.size > 0) {
      m++;
      let p = e.length;
      if (u(), e.length <= p && m > 1) throw Error("Cannot satisfy policy dependencies due to requirements cycle.");
    }
    return e;
  }
}
function zs() {
  return $o.create();
}
function zn(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}
function tr(e) {
  if (zn(e)) {
    let t = typeof e.name === "string",
      r = typeof e.message === "string";
    return t && r;
  }
  return !1;
}
import { inspect as wm } from "util";
var custom = wm.custom;
var Gs = "REDACTED",
  vm = ["x-ms-client-request-id", "x-ms-return-client-request-id", "x-ms-useragent", "x-ms-correlation-request-id", "x-ms-request-id", "client-request-id", "ms-cv", "return-client-request-id", "traceparent", "Access-Control-Allow-Credentials", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Expose-Headers", "Access-Control-Max-Age", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Origin", "Accept", "Accept-Encoding", "Cache-Control", "Connection", "Content-Length", "Content-Type", "Date", "ETag", "Expires", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "Last-Modified", "Pragma", "Request-Id", "Retry-After", "Server", "Transfer-Encoding", "User-Agent", "WWW-Authenticate"],
  km = ["api-version"];
class tt {
  constructor({
    additionalAllowedHeaderNames = [],
    additionalAllowedQueryParameters = []
  } = {}) {
    additionalAllowedHeaderNames = vm.concat(additionalAllowedHeaderNames), additionalAllowedQueryParameters = km.concat(additionalAllowedQueryParameters), this.allowedHeaderNames = new Set(additionalAllowedHeaderNames.map(item => item.toLowerCase())), this.allowedQueryParameters = new Set(additionalAllowedQueryParameters.map(item => item.toLowerCase()));
  }
  sanitize(e) {
    let t = new Set();
    return JSON.stringify(e, (r, n) => {
      if (n instanceof Error) return Object.assign(Object.assign({}, n), {
        name: n.name,
        message: n.message
      });
      if (r === "headers") return this.sanitizeHeaders(n);else if (r === "url") return this.sanitizeUrl(n);else if (r === "query") return this.sanitizeQuery(n);else if (r === "body") return;else if (r === "response") return;else if (r === "operationSpec") return;else if (Array.isArray(n) || zn(n)) {
        if (t.has(n)) return "[Circular]";
        t.add(n);
      }
      return n;
    }, 2);
  }
  sanitizeUrl(e) {
    if (typeof e !== "string" || e === null || e === "") return e;
    let t = new URL(e);
    if (!t.search) return e;
    for (let [r] of t.searchParams) if (!this.allowedQueryParameters.has(r.toLowerCase())) t.searchParams.set(r, Gs);
    return t.toString();
  }
  sanitizeHeaders(e) {
    let t = {};
    for (let r of Object.keys(e)) if (this.allowedHeaderNames.has(r.toLowerCase())) t[r] = e[r];else t[r] = Gs;
    return t;
  }
  sanitizeQuery(e) {
    if (typeof e !== "object" || e === null) return e;
    let t = {};
    for (let r of Object.keys(e)) if (this.allowedQueryParameters.has(r.toLowerCase())) t[r] = e[r];else t[r] = Gs;
    return t;
  }
}
var bm = new tt();
class RestError extends Error {
  constructor(e, t = {}) {
    super(e);
    this.name = "RestError", this.code = t.code, this.statusCode = t.statusCode, Object.defineProperty(this, "request", {
      value: t.request,
      enumerable: !1
    }), Object.defineProperty(this, "response", {
      value: t.response,
      enumerable: !1
    }), Object.defineProperty(this, custom, {
      value: () => `RestError: ${this.message} 
 ${bm.sanitize(Object.assign(Object.assign({}, this), {
        request: this.request,
        response: this.response
      }))}`,
      enumerable: !1
    }), Object.setPrototypeOf(this, RestError.prototype);
  }
}
RestError.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
RestError.PARSE_ERROR = "PARSE_ERROR";
function qs(e) {
  if (e instanceof RestError) return !0;
  return tr(e) && e.name === "RestError";
}
import * as Br from "http";
import * as zr from "https";
import * as Bo from "zlib";
import { Transform as Pm } from "stream";
class AbortError extends Error {
  constructor(e) {
    super(e);
    this.name = "AbortError";
  }
}
var je = Uo("ts-http-runtime");
var Om = {};
function Gn(e) {
  return e && typeof e.pipe === "function";
}
function fl(e) {
  if (e.readable === !1) return Promise.resolve();
  return new Promise(t => {
    let r = () => {
      t(), e.removeListener("close", r), e.removeListener("end", r), e.removeListener("error", r);
    };
    e.on("close", r), e.on("end", r), e.on("error", r);
  });
}
function ml(e) {
  return e && typeof e.byteLength === "number";
}
class Ks extends Pm {
  _transform(e, t, r) {
    this.push(e), this.loadedBytes += e.length;
    try {
      this.progressCallback({
        loadedBytes: this.loadedBytes
      }), r();
    } catch (error) {
      r(error);
    }
  }
  constructor(e) {
    super();
    this.loadedBytes = 0, this.progressCallback = e;
  }
}
class pl {
  constructor() {
    this.cachedHttpsAgents = new WeakMap();
  }
  async sendRequest(request) {
    var t, r, n;
    let abortController = new AbortController(),
      i;
    if (request.abortSignal) {
      if (request.abortSignal.aborted) throw new AbortError("The operation was aborted. Request has already been canceled.");
      i = u => {
        if (u.type === "abort") abortController.abort();
      }, request.abortSignal.addEventListener("abort", i);
    }
    let s;
    if (request.timeout > 0) s = setTimeout(() => {
      let u = new tt();
      je.info(`request to '${u.sanitizeUrl(request.url)}' timed out. canceling...`), abortController.abort();
    }, request.timeout);
    let a = request.headers.get("Accept-Encoding"),
      c = (a === null || a === void 0 ? void 0 : a.includes("gzip")) || (a === null || a === void 0 ? void 0 : a.includes("deflate")),
      l = typeof request.body === "function" ? request.body() : request.body;
    if (l && !request.headers.has("Content-Length")) {
      let u = Dm(l);
      if (u !== null) request.headers.set("Content-Length", u);
    }
    let d;
    try {
      if (l && request.onUploadProgress) {
        let onUploadProgress = request.onUploadProgress,
          k = new Ks(onUploadProgress);
        if (k.on("error", U => {
          je.error("Error in upload progress", U);
        }), Gn(l)) l.pipe(k);else k.end(l);
        l = k;
      }
      let u = await this.makeRequest(request, abortController, l);
      if (s !== void 0) clearTimeout(s);
      let headers = Nm(u),
        y = {
          status: (t = u.statusCode) !== null && t !== void 0 ? t : 0,
          headers: headers,
          request: request
        };
      if (request.method === "HEAD") return u.resume(), y;
      d = c ? xm(u, headers) : u;
      let onDownloadProgress = request.onDownloadProgress;
      if (onDownloadProgress) {
        let I = new Ks(onDownloadProgress);
        I.on("error", k => {
          je.error("Error in download progress", k);
        }), d.pipe(I), d = I;
      }
      if (((r = request.streamResponseStatusCodes) === null || r === void 0 ? void 0 : r.has(Number.POSITIVE_INFINITY)) || ((n = request.streamResponseStatusCodes) === null || n === void 0 ? void 0 : n.has(y.status))) y.readableStreamBody = d;else y.bodyAsText = await Mm(d);
      return y;
    } finally {
      if (request.abortSignal && i) {
        let u = Promise.resolve();
        if (Gn(l)) u = fl(l);
        let m = Promise.resolve();
        if (Gn(d)) m = fl(d);
        Promise.all([u, m]).then(() => {
          var p;
          if (i) (p = request.abortSignal) === null || p === void 0 || p.removeEventListener("abort", i);
        }).catch(p => {
          je.warning("Error when cleaning up abortListener on httpRequest", p);
        });
      }
    }
  }
  makeRequest(request_2, t, r) {
    var n;
    let o = new URL(request_2.url),
      i = o.protocol !== "https:";
    if (i && !request_2.allowInsecureConnection) throw Error(`Cannot connect to ${request_2.url} while allowInsecureConnection is false.`);
    let agent = (n = request_2.agent) !== null && n !== void 0 ? n : this.getOrCreateAgent(request_2, i),
      a = Object.assign({
        agent: agent,
        hostname: o.hostname,
        path: `${o.pathname}${o.search}`,
        port: o.port,
        method: request_2.method,
        headers: request_2.headers.toJSON({
          preserveCase: !0
        })
      }, request_2.requestOverrides);
    return new Promise((c, l) => {
      let d = i ? Br.request(a, c) : zr.request(a, c);
      if (d.once("error", u => {
        var m;
        l(new RestError(u.message, {
          code: (m = u.code) !== null && m !== void 0 ? m : RestError.REQUEST_SEND_ERROR,
          request: request_2
        }));
      }), t.signal.addEventListener("abort", () => {
        let u = new AbortError("The operation was aborted. Rejecting from abort signal callback while making request.");
        d.destroy(u), l(u);
      }), r && Gn(r)) r.pipe(d);else if (r) {
        if (typeof r === "string" || Buffer.isBuffer(r)) d.end(r);else if (ml(r)) d.end(ArrayBuffer.isView(r) ? Buffer.from(r.buffer) : Buffer.from(r));else je.error("Unrecognized body type", r), l(new RestError("Unrecognized body type"));
      } else d.end();
    });
  }
  getOrCreateAgent(e, t) {
    var r;
    let disableKeepAlive = e.disableKeepAlive;
    if (t) {
      if (disableKeepAlive) return Br.globalAgent;
      if (!this.cachedHttpAgent) this.cachedHttpAgent = new Br.Agent({
        keepAlive: !0
      });
      return this.cachedHttpAgent;
    } else {
      if (disableKeepAlive && !e.tlsSettings) return zr.globalAgent;
      let o = (r = e.tlsSettings) !== null && r !== void 0 ? r : Om,
        i = this.cachedHttpsAgents.get(o);
      if (i && i.options.keepAlive === !disableKeepAlive) return i;
      return je.info("No cached TLS Agent exist, creating a new Agent"), i = new zr.Agent(Object.assign({
        keepAlive: !disableKeepAlive
      }, o)), this.cachedHttpsAgents.set(o, i), i;
    }
  }
}
function Nm(e) {
  let t = et();
  for (let r of Object.keys(e.headers)) {
    let n = e.headers[r];
    if (Array.isArray(n)) {
      if (n.length > 0) t.set(r, n[0]);
    } else if (n) t.set(r, n);
  }
  return t;
}
function xm(e, t) {
  let r = t.get("Content-Encoding");
  if (r === "gzip") {
    let n = Bo.createGunzip();
    return e.pipe(n), n;
  } else if (r === "deflate") {
    let n = Bo.createInflate();
    return e.pipe(n), n;
  }
  return e;
}
function Mm(e) {
  return new Promise((t, r) => {
    let n = [];
    e.on("data", o => {
      if (Buffer.isBuffer(o)) n.push(o);else n.push(Buffer.from(o));
    }), e.on("end", () => {
      t(Buffer.concat(n).toString("utf8"));
    }), e.on("error", o => {
      if (o && (o === null || o === void 0 ? void 0 : o.name) === "AbortError") r(o);else r(new RestError(`Error reading response as text: ${o.message}`, {
        code: RestError.PARSE_ERROR
      }));
    });
  });
}
function Dm(e) {
  if (!e) return 0;else if (Buffer.isBuffer(e)) return e.length;else if (Gn(e)) return null;else if (ml(e)) return e.byteLength;else if (typeof e === "string") return Buffer.from(e).length;else return null;
}
function gl() {
  return new pl();
}
function Vs() {
  return gl();
}
function qn() {
  return zs();
}
var ut = Ot("core-rest-pipeline");
function js(e) {
  return {
    name: "agentPolicy",
    sendRequest: async (t, r) => {
      if (!t.agent) t.agent = e;
      return r(t);
    }
  };
}
function Ys() {
  return {
    name: "decompressResponsePolicy",
    async sendRequest(e, t) {
      if (e.method !== "HEAD") e.headers.set("Accept-Encoding", "gzip,deflate");
      return t(e);
    }
  };
}
function Ws(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e;
}
function Kn(e, t) {
  let r = t.retryDelayInMs * Math.pow(2, e),
    n = Math.min(t.maxRetryDelayInMs, r);
  return {
    retryAfterInMs: n / 2 + Ws(0, n / 2)
  };
}
var Um = "The operation was aborted.";
function yl(e, t, r) {
  return new Promise((n, o) => {
    let i = void 0,
      s = void 0,
      a = () => o(new AbortError((r === null || r === void 0 ? void 0 : r.abortErrorMsg) ? r === null || r === void 0 ? void 0 : r.abortErrorMsg : Um)),
      c = () => {
        if ((r === null || r === void 0 ? void 0 : r.abortSignal) && s) r.abortSignal.removeEventListener("abort", s);
      };
    if (s = () => {
      if (i) clearTimeout(i);
      return c(), a();
    }, (r === null || r === void 0 ? void 0 : r.abortSignal) && r.abortSignal.aborted) return a();
    if (i = setTimeout(() => {
      c(), n(t);
    }, e), r === null || r === void 0 ? void 0 : r.abortSignal) r.abortSignal.addEventListener("abort", s);
  });
}
function Tl(e, t) {
  let r = e.headers.get(t);
  if (!r) return;
  let n = Number(r);
  if (Number.isNaN(n)) return;
  return n;
}
var Qs = "Retry-After",
  Lm = ["retry-after-ms", "x-ms-retry-after-ms", Qs];
function El(e) {
  if (!(e && [429, 503].includes(e.status))) return;
  try {
    for (let o of Lm) {
      let i = Tl(e, o);
      if (i === 0 || i) return i * (o === Qs ? 1000 : 1);
    }
    let t = e.headers.get(Qs);
    if (!t) return;
    let n = Date.parse(t) - Date.now();
    return Number.isFinite(n) ? Math.max(0, n) : void 0;
  } catch (error) {
    return;
  }
}
function Cl(e) {
  return Number.isFinite(El(e));
}
function Al() {
  return {
    name: "throttlingRetryStrategy",
    retry({
      response: response
    }) {
      let retryAfterInMs = El(response);
      if (!Number.isFinite(retryAfterInMs)) return {
        skipStrategy: !0
      };
      return {
        retryAfterInMs: retryAfterInMs
      };
    }
  };
}
var Hm = 1000,
  Fm = 64000;
function Il(e = {}) {
  var t, r;
  let retryDelayInMs = (t = e.retryDelayInMs) !== null && t !== void 0 ? t : Hm,
    maxRetryDelayInMs = (r = e.maxRetryDelayInMs) !== null && r !== void 0 ? r : Fm;
  return {
    name: "exponentialRetryStrategy",
    retry({
      retryCount: retryCount,
      response: response_2,
      responseError: a
    }) {
      let c = Bm(a),
        l = c && e.ignoreSystemErrors,
        d = $m(response_2),
        u = d && e.ignoreHttpStatusCodes;
      if (response_2 && (Cl(response_2) || !d) || u || l) return {
        skipStrategy: !0
      };
      if (a && !c && !d) return {
        errorToThrow: a
      };
      return Kn(retryCount, {
        retryDelayInMs: retryDelayInMs,
        maxRetryDelayInMs: maxRetryDelayInMs
      });
    }
  };
}
function $m(e) {
  return Boolean(e && e.status !== void 0 && (e.status >= 500 || e.status === 408) && e.status !== 501 && e.status !== 505);
}
function Bm(e) {
  if (!e) return !1;
  return e.code === "ETIMEDOUT" || e.code === "ESOCKETTIMEDOUT" || e.code === "ECONNREFUSED" || e.code === "ECONNRESET" || e.code === "ENOENT" || e.code === "ENOTFOUND";
}
var maxRetries = 3;
var zm = Uo("ts-http-runtime retryPolicy"),
  name_3 = "retryPolicy";
function jn(e, t = {
  maxRetries: maxRetries
}) {
  let r = t.logger || zm;
  return {
    name: name_3,
    async sendRequest(n, o) {
      var i, s;
      let response_3,
        responseError,
        retryCount_2 = -1;
      e: while (!0) {
        retryCount_2 += 1, response_3 = void 0, responseError = void 0;
        try {
          r.info(`Retry ${retryCount_2}: Attempting to send request`, n.requestId), response_3 = await o(n), r.info(`Retry ${retryCount_2}: Received a response from request`, n.requestId);
        } catch (d) {
          if (r.error(`Retry ${retryCount_2}: Received an error from request`, n.requestId), responseError = d, !d || responseError.name !== "RestError") throw d;
          response_3 = responseError.response;
        }
        if ((i = n.abortSignal) === null || i === void 0 ? void 0 : i.aborted) throw r.error(`Retry ${retryCount_2}: Request aborted.`), new AbortError();
        if (retryCount_2 >= ((s = t.maxRetries) !== null && s !== void 0 ? s : maxRetries)) if (r.info(`Retry ${retryCount_2}: Maximum retries reached. Returning the last received response, or throwing the last received error.`), responseError) throw responseError;else if (response_3) return response_3;else throw Error("Maximum retries reached with no response or error to throw");
        r.info(`Retry ${retryCount_2}: Processing ${e.length} retry strategies.`);
        t: for (let d of e) {
          let u = d.logger || r;
          u.info(`Retry ${retryCount_2}: Processing retry strategy ${d.name}.`);
          let m = d.retry({
            retryCount: retryCount_2,
            response: response_3,
            responseError: responseError
          });
          if (m.skipStrategy) {
            u.info(`Retry ${retryCount_2}: Skipped.`);
            continue t;
          }
          let {
            errorToThrow: errorToThrow,
            retryAfterInMs: retryAfterInMs_2,
            redirectTo: redirectTo
          } = m;
          if (errorToThrow) throw u.error(`Retry ${retryCount_2}: Retry strategy ${d.name} throws error:`, errorToThrow), errorToThrow;
          if (retryAfterInMs_2 || retryAfterInMs_2 === 0) {
            u.info(`Retry ${retryCount_2}: Retry strategy ${d.name} retries after ${retryAfterInMs_2}`), await yl(retryAfterInMs_2, void 0, {
              abortSignal: n.abortSignal
            });
            continue e;
          }
          if (redirectTo) {
            u.info(`Retry ${retryCount_2}: Retry strategy ${d.name} redirects to ${redirectTo}`), n.url = redirectTo;
            continue e;
          }
        }
        if (responseError) throw r.info("None of the retry strategies could work with the received error. Throwing it."), responseError;
        if (response_3) return r.info("None of the retry strategies could work with the received response. Returning it."), response_3;
      }
    }
  };
}
var name_4 = "defaultRetryPolicy";
function Xs(e = {}) {
  var t;
  return {
    name: name_4,
    sendRequest: jn([Al(), Il(e)], {
      maxRetries: (t = e.maxRetries) !== null && t !== void 0 ? t : maxRetries
    }).sendRequest
  };
}
function rt(e, t) {
  return Buffer.from(e, t);
}
var Zs,
  ea,
  ta,
  ra,
  _l = typeof window < "u" && typeof window.document < "u",
  Sl = typeof self === "object" && typeof (self === null || self === void 0 ? void 0 : self.importScripts) === "function" && (((Zs = self.constructor) === null || Zs === void 0 ? void 0 : Zs.name) === "DedicatedWorkerGlobalScope" || ((ea = self.constructor) === null || ea === void 0 ? void 0 : ea.name) === "ServiceWorkerGlobalScope" || ((ta = self.constructor) === null || ta === void 0 ? void 0 : ta.name) === "SharedWorkerGlobalScope"),
  Rl = typeof Deno < "u" && typeof Deno.version < "u" && typeof Deno.version.deno < "u",
  wl = typeof Bun < "u" && typeof Bun.version < "u",
  Gr = typeof globalThis.process < "u" && Boolean(globalThis.process.version) && Boolean((ra = globalThis.process.versions) === null || ra === void 0 ? void 0 : ra.node);
var vl = typeof navigator < "u" && (navigator === null || navigator === void 0 ? void 0 : navigator.product) === "ReactNative";
var name_5 = "formDataPolicy";
function qm(e) {
  var t;
  let r = {};
  for (let [n, o] of e.entries()) (t = r[n]) !== null && t !== void 0 || (r[n] = []), r[n].push(o);
  return r;
}
function oa() {
  return {
    name: name_5,
    async sendRequest(e, t) {
      if (Gr && typeof FormData < "u" && e.body instanceof FormData) e.formData = qm(e.body), e.body = void 0;
      if (e.formData) {
        let r = e.headers.get("Content-Type");
        if (r && r.indexOf("application/x-www-form-urlencoded") !== -1) e.body = Km(e.formData);else await Vm(e.formData, e);
        e.formData = void 0;
      }
      return t(e);
    }
  };
}
function Km(e) {
  let uRLSearchParams = new URLSearchParams();
  for (let [r, n] of Object.entries(e)) if (Array.isArray(n)) for (let o of n) uRLSearchParams.append(r, o.toString());else uRLSearchParams.append(r, n.toString());
  return uRLSearchParams.toString();
}
async function Vm(e, t) {
  let r = t.headers.get("Content-Type");
  if (r && !r.startsWith("multipart/form-data")) return;
  t.headers.set("Content-Type", r !== null && r !== void 0 ? r : "multipart/form-data");
  let parts = [];
  for (let [o, i] of Object.entries(e)) for (let body of Array.isArray(i) ? i : [i]) if (typeof body === "string") parts.push({
    headers: et({
      "Content-Disposition": `form-data; name="${o}"`
    }),
    body: rt(body, "utf-8")
  });else if (body === void 0 || body === null || typeof body !== "object") throw Error(`Unexpected value for key ${o}: ${body}. Value should be serialized to string first.`);else {
    let a = body.name || "blob",
      headers_2 = et();
    headers_2.set("Content-Disposition", `form-data; name="${o}"; filename="${a}"`), headers_2.set("Content-Type", body.type || "application/octet-stream"), parts.push({
      headers: headers_2,
      body: body
    });
  }
  t.multipartBody = {
    parts: parts
  };
}
var name_6 = "logPolicy";
function sa(e = {}) {
  var t;
  let r = (t = e.logger) !== null && t !== void 0 ? t : je.info,
    n = new tt({
      additionalAllowedHeaderNames: e.additionalAllowedHeaderNames,
      additionalAllowedQueryParameters: e.additionalAllowedQueryParameters
    });
  return {
    name: name_6,
    async sendRequest(o, i) {
      if (!r.enabled) return i(o);
      r(`Request: ${n.sanitize(o)}`);
      let s = await i(o);
      return r(`Response status code: ${s.status}`), r(`Headers: ${n.sanitize(s.headers)}`), s;
    }
  };
}
function zo(e) {
  return typeof e.stream === "function";
}
import { Readable as aa } from "stream";
function kl() {
  return WOo(this, arguments, function* () {
    let t = this.getReader();
    try {
      while (!0) {
        let {
          done: done,
          value: value_2
        } = yield uHt(t.read());
        if (done) return yield uHt(void 0);
        yield yield uHt(value_2);
      }
    } finally {
      t.releaseLock();
    }
  });
}
function jm(e) {
  if (!e[Symbol.asyncIterator]) e[Symbol.asyncIterator] = kl.bind(e);
  if (!e.values) e.values = kl.bind(e);
}
function bl(e) {
  if (e instanceof ReadableStream) return jm(e), aa.fromWeb(e);else return e;
}
function Ym(e) {
  if (e instanceof Uint8Array) return aa.from(Buffer.from(e));else if (zo(e)) return bl(e.stream());else return bl(e);
}
async function Pl(e) {
  return function () {
    let t = e.map(item => typeof item === "function" ? item() : item).map(Ym);
    return aa.from(function () {
      return WOo(this, arguments, function* () {
        var r, n, o, i;
        for (let l of t) try {
          for (var s = !0, a = (n = void 0, KUs(l)), c; c = yield uHt(a.next()), r = c.done, !r; s = !0) i = c.value, s = !1, yield yield uHt(i);
        } catch (error_3) {
          n = {
            error: error_3
          };
        } finally {
          try {
            if (!s && !r && (o = a.return)) yield uHt(o.call(a));
          } finally {
            if (n) throw n.error;
          }
        }
      });
    }());
  };
}
function Wm() {
  return `----AzSDKFormBoundary${Bn()}`;
}
function Qm(e) {
  let t = "";
  for (let [r, n] of e) t += `${r}: ${n}\r
`;
  return t;
}
function Jm(e) {
  if (e instanceof Uint8Array) return e.byteLength;else if (zo(e)) return e.size === -1 ? void 0 : e.size;else return;
}
function Xm(e) {
  let t = 0;
  for (let r of e) {
    let n = Jm(r);
    if (n === void 0) return;else t += n;
  }
  return t;
}
async function Zm(e, t, r) {
  let n = [rt(`--${r}`, "utf-8"), ...t.flatMap(item => [rt(`\r
`, "utf-8"), rt(Qm(item.headers), "utf-8"), rt(`\r
`, "utf-8"), item.body, rt(`\r
--${r}`, "utf-8")]), rt(`--\r
\r
`, "utf-8")],
    o = Xm(n);
  if (o) e.headers.set("Content-Length", o);
  e.body = await Pl(n);
}
var name_7 = "multipartPolicy",
  ep = 70,
  tp = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'()+,-./:=?");
function rp(e) {
  if (e.length > ep) throw Error(`Multipart boundary "${e}" exceeds maximum length of 70 characters`);
  if (Array.from(e).some(item => !tp.has(item))) throw Error(`Multipart boundary "${e}" contains invalid characters`);
}
function ca() {
  return {
    name: name_7,
    async sendRequest(e, t) {
      var r;
      if (!e.multipartBody) return t(e);
      if (e.body) throw Error("multipartBody and regular body cannot be set at the same time");
      let boundary = e.multipartBody.boundary,
        o = (r = e.headers.get("Content-Type")) !== null && r !== void 0 ? r : "multipart/mixed",
        i = o.match(/^(multipart\/[^ ;]+)(?:; *boundary=(.+))?$/);
      if (!i) throw Error(`Got multipart request body, but content-type header was not multipart: ${o}`);
      let [, s, a] = i;
      if (a && boundary && a !== boundary) throw Error(`Multipart boundary was specified as ${a} in the header, but got ${boundary} in the request body`);
      if (boundary !== null && boundary !== void 0 || (boundary = a), boundary) rp(boundary);else boundary = Wm();
      return e.headers.set("Content-Type", `${s}; boundary=${boundary}`), await Zm(e, e.multipartBody.parts, boundary), e.multipartBody = void 0, t(e);
    }
  };
}
var Hl = ve(sbt(), 1),
  Fl = ve(Ml(), 1);
var dp = "HTTPS_PROXY",
  up = "HTTP_PROXY",
  hp = "ALL_PROXY",
  fp = "NO_PROXY",
  name_8 = "proxyPolicy",
  Dl = [],
  $l = !1,
  mp = new Map();
function Ko(e) {
  if (process.env[e]) return process.env[e];else if (process.env[e.toLowerCase()]) return process.env[e.toLowerCase()];
  return;
}
function pp() {
  if (!process) return;
  let e = Ko(dp),
    t = Ko(hp),
    r = Ko(up);
  return e || t || r;
}
function gp(e, t, r) {
  if (t.length === 0) return !1;
  let hostname = new URL(e).hostname;
  if (r === null || r === void 0 ? void 0 : r.has(hostname)) return r.get(hostname);
  let o = !1;
  for (let i of t) if (i[0] === ".") {
    if (hostname.endsWith(i)) o = !0;else if (hostname.length === i.length - 1 && hostname === i.slice(1)) o = !0;
  } else if (hostname === i) o = !0;
  return r === null || r === void 0 || r.set(hostname, o), o;
}
function yp() {
  let e = Ko(fp);
  if ($l = !0, e) return e.split(",").map(item => item.trim()).filter(item => item.length);
  return [];
}
function Tp() {
  let e = pp();
  return e ? new URL(e) : void 0;
}
function Ul(e) {
  let t;
  try {
    t = new URL(e.host);
  } catch (error) {
    throw Error(`Expecting a valid host string in proxy settings, but found "${e.host}".`);
  }
  if (t.port = String(e.port), e.username) t.username = e.username;
  if (e.password) t.password = e.password;
  return t;
}
function Ll(e, t, r) {
  if (e.agent) return;
  let o = new URL(e.url).protocol !== "https:";
  if (e.tlsSettings) je.warning("TLS settings are not supported in combination with custom Proxy, certificates provided to the client will be ignored.");
  let headers_3 = e.headers.toJSON();
  if (o) {
    if (!t.httpProxyAgent) t.httpProxyAgent = new Fl.HttpProxyAgent(r, {
      headers: headers_3
    });
    e.agent = t.httpProxyAgent;
  } else {
    if (!t.httpsProxyAgent) t.httpsProxyAgent = new Hl.HttpsProxyAgent(r, {
      headers: headers_3
    });
    e.agent = t.httpsProxyAgent;
  }
}
function ua(e, t) {
  if (!$l) Dl.push(...yp());
  let r = e ? Ul(e) : Tp(),
    n = {};
  return {
    name: name_8,
    async sendRequest(o, i) {
      var s;
      if (!o.proxySettings && r && !gp(o.url, (s = t === null || t === void 0 ? void 0 : t.customNoProxyList) !== null && s !== void 0 ? s : Dl, (t === null || t === void 0 ? void 0 : t.customNoProxyList) ? void 0 : mp)) Ll(o, n, r);else if (o.proxySettings) Ll(o, n, Ul(o.proxySettings));
      return i(o);
    }
  };
}
var Bl = ["GET", "HEAD"];
function ha(e = {}) {
  let {
    maxRetries: maxRetries_2 = 20
  } = e;
  return {
    name: "redirectPolicy",
    async sendRequest(r, n) {
      let o = await n(r);
      return zl(n, o, maxRetries_2);
    }
  };
}
async function zl(e, t, r, n = 0) {
  let {
      request: request_3,
      status: status,
      headers: headers_4
    } = t,
    a = headers_4.get("location");
  if (a && (status === 300 || status === 301 && Bl.includes(request_3.method) || status === 302 && Bl.includes(request_3.method) || status === 303 && request_3.method === "POST" || status === 307) && n < r) {
    let c = new URL(a, request_3.url);
    if (request_3.url = c.toString(), status === 303) request_3.method = "GET", request_3.headers.delete("Content-Length"), delete request_3.body;
    request_3.headers.delete("Authorization");
    let l = await e(request_3);
    return zl(e, l, r, n + 1);
  }
  return t;
}
function fa(e) {
  return {
    name: "tlsPolicy",
    sendRequest: async (t, r) => {
      if (!t.tlsSettings) t.tlsSettings = e;
      return r(t);
    }
  };
}
function Gl(e = {}) {
  return sa(Object.assign({
    logger: ut.info
  }, e));
}
function ql(e = {}) {
  return ha(e);
}
import * as Kr from "os";
import * as Vo from "process";
function Kl() {
  return "User-Agent";
}
async function Vl(e) {
  if (Vo && Vo.versions) {
    let versions = Vo.versions;
    if (versions.bun) e.set("Bun", versions.bun);else if (versions.deno) e.set("Deno", versions.deno);else if (versions.node) e.set("Node", versions.node);
  }
  e.set("OS", `(${Kr.arch()}-${Kr.type()}-${Kr.release()})`);
}
var packageVersion_2 = "1.21.0",
  maxRetries_3 = 3;
function Sp(e) {
  let t = [];
  for (let [r, n] of e) {
    let o = n ? `${r}/${n}` : r;
    t.push(o);
  }
  return t.join(" ");
}
function Yl() {
  return Kl();
}
async function Yo(e) {
  let t = new Map();
  t.set("core-rest-pipeline", packageVersion_2), await Vl(t);
  let r = Sp(t);
  return e ? `${e} ${r}` : r;
}
var Wl = Yl(),
  name_9 = "userAgentPolicy";
function Ql(e = {}) {
  let t = Yo(e.userAgentPrefix);
  return {
    name: name_9,
    async sendRequest(r, n) {
      if (!r.headers.has(Wl)) r.headers.set(Wl, await t);
      return n(r);
    }
  };
}
class AbortError_2 extends Error {
  constructor(e) {
    super(e);
    this.name = "AbortError";
  }
}
function Jl(e, t) {
  let {
    cleanupBeforeAbort: cleanupBeforeAbort,
    abortSignal: abortSignal,
    abortErrorMsg: abortErrorMsg
  } = t !== null && t !== void 0 ? t : {};
  return new Promise((i, s) => {
    function a() {
      s(new AbortError_2(abortErrorMsg !== null && abortErrorMsg !== void 0 ? abortErrorMsg : "The operation was aborted."));
    }
    function c() {
      abortSignal === null || abortSignal === void 0 || abortSignal.removeEventListener("abort", l);
    }
    function l() {
      cleanupBeforeAbort === null || cleanupBeforeAbort === void 0 || cleanupBeforeAbort(), c(), a();
    }
    if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) return a();
    try {
      e(d => {
        c(), i(d);
      }, d => {
        c(), s(d);
      });
    } catch (error) {
      s(error);
    }
    abortSignal === null || abortSignal === void 0 || abortSignal.addEventListener("abort", l);
  });
}
var kp = "The delay was aborted.";
function ma(e, t) {
  let r,
    {
      abortSignal: abortSignal_2,
      abortErrorMsg: abortErrorMsg_2
    } = t !== null && t !== void 0 ? t : {};
  return Jl(i => {
    r = setTimeout(i, e);
  }, {
    cleanupBeforeAbort: () => clearTimeout(r),
    abortSignal: abortSignal_2,
    abortErrorMsg: abortErrorMsg_2 !== null && abortErrorMsg_2 !== void 0 ? abortErrorMsg_2 : kp
  });
}
function jr(e) {
  if (tr(e)) return e.message;else {
    let t;
    try {
      if (typeof e === "object" && e) t = JSON.stringify(e);else t = String(e);
    } catch (error) {
      t = "[unable to stringify input]";
    }
    return `Unknown error ${t}`;
  }
}
function Xl(e, t) {
  return Kn(e, t);
}
function Wo(e) {
  return tr(e);
}
var Qo = Gr,
  Yn = Gr;
var Zl = Symbol("rawContent");
function pa(e) {
  return typeof e[Zl] === "function";
}
function ed(e) {
  if (pa(e)) return e[Zl]();else return e;
}
var name_10 = name_7;
function td() {
  let e = ca();
  return {
    name: name_10,
    sendRequest: async (t, r) => {
      if (t.multipartBody) {
        for (let n of t.multipartBody.parts) if (pa(n.body)) n.body = ed(n.body);
      }
      return e.sendRequest(t, r);
    }
  };
}
function rd() {
  return Ys();
}
function nd(e = {}) {
  return Xs(e);
}
function od() {
  return oa();
}
function id(e, t) {
  return ua(e, t);
}
function sd(e = "x-ms-client-request-id") {
  return {
    name: "setClientRequestIdPolicy",
    async sendRequest(t, r) {
      if (!t.headers.has(e)) t.headers.set(e, t.requestId);
      return r(t);
    }
  };
}
function ad(e) {
  return js(e);
}
function cd(e) {
  return fa(e);
}
var Yr = {
  span: Symbol.for("@azure/core-tracing span"),
  namespace: Symbol.for("@azure/core-tracing namespace")
};
function ld(e = {}) {
  let t = new Wn(e.parentContext);
  if (e.span) t = t.setValue(Yr.span, e.span);
  if (e.namespace) t = t.setValue(Yr.namespace, e.namespace);
  return t;
}
class Wn {
  constructor(e) {
    this._contextMap = e instanceof Wn ? new Map(e._contextMap) : new Map();
  }
  setValue(e, t) {
    let r = new Wn(this);
    return r._contextMap.set(e, t), r;
  }
  getValue(e) {
    return this._contextMap.get(e);
  }
  deleteValue(e) {
    let t = new Wn(this);
    return t._contextMap.delete(e), t;
  }
}
var fd = ve(hd(), 1),
  state = fd.state;
function bp() {
  return {
    end: () => {},
    isRecording: () => !1,
    recordException: () => {},
    setAttribute: () => {},
    setStatus: () => {},
    addEvent: () => {}
  };
}
function Pp() {
  return {
    createRequestHeaders: () => ({}),
    parseTraceparentHeader: () => {
      return;
    },
    startSpan: (e, t) => ({
      span: bp(),
      tracingContext: ld({
        parentContext: t.tracingContext
      })
    }),
    withContext(e, t, ...r) {
      return t(...r);
    }
  };
}
function Qn() {
  if (!state.instrumenterImplementation) state.instrumenterImplementation = Pp();
  return state.instrumenterImplementation;
}
function Jn(e) {
  let {
    namespace: namespace_2,
    packageName: packageName,
    packageVersion: packageVersion
  } = e;
  function startSpan(l, d, u) {
    var m;
    let p = Qn().startSpan(l, Object.assign(Object.assign({}, u), {
        packageName: packageName,
        packageVersion: packageVersion,
        tracingContext: (m = d === null || d === void 0 ? void 0 : d.tracingOptions) === null || m === void 0 ? void 0 : m.tracingContext
      })),
      {
        tracingContext: tracingContext,
        span: span
      } = p;
    if (!tracingContext.getValue(Yr.namespace)) tracingContext = tracingContext.setValue(Yr.namespace, namespace_2);
    span.setAttribute("az.namespace", tracingContext.getValue(Yr.namespace));
    let updatedOptions = Object.assign({}, d, {
      tracingOptions: Object.assign(Object.assign({}, d === null || d === void 0 ? void 0 : d.tracingOptions), {
        tracingContext: tracingContext
      })
    });
    return {
      span: span,
      updatedOptions: updatedOptions
    };
  }
  async function withSpan(l, d, u, m) {
    let {
      span: span_2,
      updatedOptions: updatedOptions_2
    } = startSpan(l, d, m);
    try {
      let T = await withContext(updatedOptions_2.tracingOptions.tracingContext, () => Promise.resolve(u(updatedOptions_2, span_2)));
      return span_2.setStatus({
        status: "success"
      }), T;
    } catch (error_4) {
      throw span_2.setStatus({
        status: "error",
        error: error_4
      }), error_4;
    } finally {
      span_2.end();
    }
  }
  function withContext(l, d, ...u) {
    return Qn().withContext(l, d, ...u);
  }
  function parseTraceparentHeader(l) {
    return Qn().parseTraceparentHeader(l);
  }
  function createRequestHeaders(l) {
    return Qn().createRequestHeaders(l);
  }
  return {
    startSpan: startSpan,
    withSpan: withSpan,
    withContext: withContext,
    parseTraceparentHeader: parseTraceparentHeader,
    createRequestHeaders: createRequestHeaders
  };
}
var Wr = RestError;
function Xn(e) {
  return qs(e);
}
var name_11 = "tracingPolicy";
function md(e = {}) {
  let t = Yo(e.userAgentPrefix),
    r = new tt({
      additionalAllowedQueryParameters: e.additionalAllowedQueryParameters
    }),
    n = Np();
  return {
    name: name_11,
    async sendRequest(o, i) {
      var s;
      if (!n) return i(o);
      let a = await t,
        c = {
          "http.url": r.sanitizeUrl(o.url),
          "http.method": o.method,
          "http.user_agent": a,
          requestId: o.requestId
        };
      if (a) c["http.user_agent"] = a;
      let {
        span: span_3,
        tracingContext: tracingContext_2
      } = (s = xp(n, o, c)) !== null && s !== void 0 ? s : {};
      if (!span_3 || !tracingContext_2) return i(o);
      try {
        let u = await n.withContext(tracingContext_2, i, o);
        return Dp(span_3, u), u;
      } catch (error) {
        throw Mp(span_3, error), error;
      }
    }
  };
}
function Np() {
  try {
    return Jn({
      namespace: "",
      packageName: "@azure/core-rest-pipeline",
      packageVersion: packageVersion_2
    });
  } catch (error) {
    ut.warning(`Error when creating the TracingClient: ${jr(error)}`);
    return;
  }
}
function xp(e, t, spanAttributes) {
  try {
    let {
      span: span_4,
      updatedOptions: updatedOptions_3
    } = e.startSpan(`HTTP ${t.method}`, {
      tracingOptions: t.tracingOptions
    }, {
      spanKind: "client",
      spanAttributes: spanAttributes
    });
    if (!span_4.isRecording()) {
      span_4.end();
      return;
    }
    let i = e.createRequestHeaders(updatedOptions_3.tracingOptions.tracingContext);
    for (let [s, a] of Object.entries(i)) t.headers.set(s, a);
    return {
      span: span_4,
      tracingContext: updatedOptions_3.tracingOptions.tracingContext
    };
  } catch (error) {
    ut.warning(`Skipping creating a tracing span due to an error: ${jr(error)}`);
    return;
  }
}
function Mp(e, t) {
  try {
    if (e.setStatus({
      status: "error",
      error: Wo(t) ? t : void 0
    }), Xn(t) && t.statusCode) e.setAttribute("http.status_code", t.statusCode);
    e.end();
  } catch (error) {
    ut.warning(`Skipping tracing span processing due to an error: ${jr(error)}`);
  }
}
function Dp(e, t) {
  try {
    e.setAttribute("http.status_code", t.status);
    let r = t.headers.get("x-ms-request-id");
    if (r) e.setAttribute("serviceRequestId", r);
    if (t.status >= 400) e.setStatus({
      status: "error"
    });
    e.end();
  } catch (error) {
    ut.warning(`Skipping tracing span processing due to an error: ${jr(error)}`);
  }
}
function Xo(abortSignal_3) {
  if (abortSignal_3 instanceof AbortSignal) return {
    abortSignal: abortSignal_3
  };
  if (abortSignal_3.aborted) return {
    abortSignal: AbortSignal.abort(abortSignal_3.reason)
  };
  let abortController_2 = new AbortController(),
    r = !0;
  function cleanup() {
    if (r) abortSignal_3.removeEventListener("abort", o), r = !1;
  }
  function o() {
    abortController_2.abort(abortSignal_3.reason), cleanup();
  }
  return abortSignal_3.addEventListener("abort", o), {
    abortSignal: abortController_2.signal,
    cleanup: cleanup
  };
}
var name_12 = "wrapAbortSignalLikePolicy";
function pd() {
  return {
    name: name_12,
    sendRequest: async (e, t) => {
      if (!e.abortSignal) return t(e);
      let {
        abortSignal: abortSignal_4,
        cleanup: cleanup_2
      } = Xo(e.abortSignal);
      e.abortSignal = abortSignal_4;
      try {
        return await t(e);
      } finally {
        cleanup_2 === null || cleanup_2 === void 0 || cleanup_2();
      }
    }
  };
}
function ya(e) {
  var t;
  let r = qn();
  if (Yn) {
    if (e.agent) r.addPolicy(ad(e.agent));
    if (e.tlsOptions) r.addPolicy(cd(e.tlsOptions));
    r.addPolicy(id(e.proxyOptions)), r.addPolicy(rd());
  }
  if (r.addPolicy(pd()), r.addPolicy(od(), {
    beforePolicies: [name_10]
  }), r.addPolicy(Ql(e.userAgentOptions)), r.addPolicy(sd((t = e.telemetryOptions) === null || t === void 0 ? void 0 : t.clientRequestIdHeaderName)), r.addPolicy(td(), {
    afterPhase: "Deserialize"
  }), r.addPolicy(nd(e.retryOptions), {
    phase: "Retry"
  }), r.addPolicy(md(Object.assign(Object.assign({}, e.userAgentOptions), e.loggingOptions)), {
    afterPhase: "Retry"
  }), Yn) r.addPolicy(ql(e.redirectOptions), {
    afterPhase: "Retry"
  });
  return r.addPolicy(Gl(e.loggingOptions), {
    afterPhase: "Sign"
  }), r;
}
function Ta() {
  let e = Vs();
  return {
    async sendRequest(t) {
      let {
        abortSignal: abortSignal_5,
        cleanup: cleanup_3
      } = t.abortSignal ? Xo(t.abortSignal) : {};
      try {
        return t.abortSignal = abortSignal_5, await e.sendRequest(t);
      } finally {
        cleanup_3 === null || cleanup_3 === void 0 || cleanup_3();
      }
    }
  };
}
function rr(e) {
  return et(e);
}
function Ye(e) {
  return Bs(e);
}
var logger_4 = Ot("core-rest-pipeline retryPolicy");
function Ea(e, t = {
  maxRetries: maxRetries_3
}) {
  return jn(e, Object.assign({
    logger: logger_4
  }, t));
}
var Hp = {
  forcedRefreshWindowInMs: 1000,
  retryIntervalInMs: 3000,
  refreshWindowInMs: 120000
};
async function Fp(e, t, r) {
  async function n() {
    if (Date.now() < r) try {
      return await e();
    } catch (error) {
      return null;
    } else {
      let i = await e();
      if (i === null) throw Error("Failed to refresh access token.");
      return i;
    }
  }
  let o = await n();
  while (o === null) await ma(t), o = await n();
  return o;
}
function gd(e, t) {
  let r = null,
    n = null,
    o,
    i = Object.assign(Object.assign({}, Hp), t),
    s = {
      get isRefreshing() {
        return r !== null;
      },
      get shouldRefresh() {
        var c;
        if (s.isRefreshing) return !1;
        if ((n === null || n === void 0 ? void 0 : n.refreshAfterTimestamp) && n.refreshAfterTimestamp < Date.now()) return !0;
        return ((c = n === null || n === void 0 ? void 0 : n.expiresOnTimestamp) !== null && c !== void 0 ? c : 0) - i.refreshWindowInMs < Date.now();
      },
      get mustRefresh() {
        return n === null || n.expiresOnTimestamp - i.forcedRefreshWindowInMs < Date.now();
      }
    };
  function a(c, l) {
    var d;
    if (!s.isRefreshing) r = Fp(() => e.getToken(c, l), i.retryIntervalInMs, (d = n === null || n === void 0 ? void 0 : n.expiresOnTimestamp) !== null && d !== void 0 ? d : Date.now()).then(m => (r = null, n = m, o = l.tenantId, n)).catch(m => {
      throw r = null, n = null, o = void 0, m;
    });
    return r;
  }
  return async (c, l) => {
    let d = Boolean(l.claims),
      u = o !== l.tenantId;
    if (d) n = null;
    if (u || d || s.mustRefresh) return a(c, l);
    if (s.shouldRefresh) a(c, l);
    return n;
  };
}
var name_13 = "bearerTokenAuthenticationPolicy";
async function Zo(e, t) {
  try {
    return [await t(e), void 0];
  } catch (error) {
    if (Xn(error) && error.response) return [error.response, error];else throw error;
  }
}
async function $p(e) {
  let {
      scopes: scopes,
      getAccessToken: getAccessToken,
      request: request_4
    } = e,
    o = {
      abortSignal: request_4.abortSignal,
      tracingOptions: request_4.tracingOptions,
      enableCae: !0
    },
    i = await getAccessToken(scopes, o);
  if (i) e.request.headers.set("Authorization", `Bearer ${i.token}`);
}
function yd(e) {
  return e.status === 401 && e.headers.has("WWW-Authenticate");
}
async function Td(e, claims) {
  var r;
  let {
      scopes: scopes_2
    } = e,
    o = await e.getAccessToken(scopes_2, {
      enableCae: !0,
      claims: claims
    });
  if (!o) return !1;
  return e.request.headers.set("Authorization", `${(r = o.tokenType) !== null && r !== void 0 ? r : "Bearer"} ${o.token}`), !0;
}
function Zn(e) {
  var t, r, n;
  let {
      credential: credential,
      scopes: scopes_3,
      challengeCallbacks: challengeCallbacks
    } = e,
    logger_5 = e.logger || ut,
    c = {
      authorizeRequest: (r = (t = challengeCallbacks === null || challengeCallbacks === void 0 ? void 0 : challengeCallbacks.authorizeRequest) === null || t === void 0 ? void 0 : t.bind(challengeCallbacks)) !== null && r !== void 0 ? r : $p,
      authorizeRequestOnChallenge: (n = challengeCallbacks === null || challengeCallbacks === void 0 ? void 0 : challengeCallbacks.authorizeRequestOnChallenge) === null || n === void 0 ? void 0 : n.bind(challengeCallbacks)
    },
    getAccessToken_2 = credential ? gd(credential) : () => Promise.resolve(null);
  return {
    name: name_13,
    async sendRequest(request_5, u) {
      if (!request_5.url.toLowerCase().startsWith("https://")) throw Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
      await c.authorizeRequest({
        scopes: Array.isArray(scopes_3) ? scopes_3 : [scopes_3],
        request: request_5,
        getAccessToken: getAccessToken_2,
        logger: logger_5
      });
      let response_4, p, y;
      if ([response_4, p] = await Zo(request_5, u), yd(response_4)) {
        let T = Ed(response_4.headers.get("WWW-Authenticate"));
        if (T) {
          let I;
          try {
            I = atob(T);
          } catch (error) {
            return logger_5.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${T}`), response_4;
          }
          if (y = await Td({
            scopes: Array.isArray(scopes_3) ? scopes_3 : [scopes_3],
            response: response_4,
            request: request_5,
            getAccessToken: getAccessToken_2,
            logger: logger_5
          }, I), y) [response_4, p] = await Zo(request_5, u);
        } else if (c.authorizeRequestOnChallenge) {
          if (y = await c.authorizeRequestOnChallenge({
            scopes: Array.isArray(scopes_3) ? scopes_3 : [scopes_3],
            request: request_5,
            response: response_4,
            getAccessToken: getAccessToken_2,
            logger: logger_5
          }), y) [response_4, p] = await Zo(request_5, u);
          if (yd(response_4)) {
            if (T = Ed(response_4.headers.get("WWW-Authenticate")), T) {
              let I;
              try {
                I = atob(T);
              } catch (error) {
                return logger_5.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${T}`), response_4;
              }
              if (y = await Td({
                scopes: Array.isArray(scopes_3) ? scopes_3 : [scopes_3],
                response: response_4,
                request: request_5,
                getAccessToken: getAccessToken_2,
                logger: logger_5
              }, I), y) [response_4, p] = await Zo(request_5, u);
            }
          }
        }
      }
      if (p) throw p;else return response_4;
    }
  };
}
function Bp(e) {
  let t = /(\w+)\s+((?:\w+=(?:"[^"]*"|[^,]*),?\s*)+)/g,
    r = /(\w+)="([^"]*)"/g,
    n = [],
    o;
  while ((o = t.exec(e)) !== null) {
    let scheme = o[1],
      s = o[2],
      params = {},
      c;
    while ((c = r.exec(s)) !== null) params[c[1]] = c[2];
    n.push({
      scheme: scheme,
      params: params
    });
  }
  return n;
}
function Ed(e) {
  var t;
  if (!e) return;
  return (t = Bp(e).find(item => item.scheme === "Bearer" && item.params.claims && item.params.error === "insufficient_claims")) === null || t === void 0 ? void 0 : t.params.claims;
}
var Ca = "$",
  ei = "_";
function zp(e, t) {
  return t !== "Composite" && t !== "Dictionary" && (typeof e === "string" || typeof e === "number" || typeof e === "boolean" || (t === null || t === void 0 ? void 0 : t.match(/^(Date|DateTime|DateTimeRfc1123|UnixTime|ByteArray|Base64Url)$/i)) !== null || e === void 0 || e === null);
}
function Gp(e) {
  let t = Object.assign(Object.assign({}, e.headers), e.body);
  if (e.hasNullableType && Object.getOwnPropertyNames(t).length === 0) return e.shouldWrapBody ? {
    body: null
  } : null;else return e.shouldWrapBody ? Object.assign(Object.assign({}, e.headers), {
    body: e.body
  }) : t;
}
function Aa(e, t) {
  var r, n;
  let o = e.parsedHeaders;
  if (e.request.method === "HEAD") return Object.assign(Object.assign({}, o), {
    body: e.parsedBody
  });
  let i = t && t.bodyMapper,
    hasNullableType = Boolean(i === null || i === void 0 ? void 0 : i.nullable),
    a = i === null || i === void 0 ? void 0 : i.type.name;
  if (a === "Stream") return Object.assign(Object.assign({}, o), {
    blobBody: e.blobBody,
    readableStreamBody: e.readableStreamBody
  });
  let c = a === "Composite" && i.type.modelProperties || {},
    l = Object.keys(c).some(item => c[item].serializedName === "");
  if (a === "Sequence" || l) {
    let d = (r = e.parsedBody) !== null && r !== void 0 ? r : [];
    for (let u of Object.keys(c)) if (c[u].serializedName) d[u] = (n = e.parsedBody) === null || n === void 0 ? void 0 : n[u];
    if (o) for (let u of Object.keys(o)) d[u] = o[u];
    return hasNullableType && !e.parsedBody && !o && Object.getOwnPropertyNames(c).length === 0 ? null : d;
  }
  return Gp({
    body: e.parsedBody,
    headers: o,
    hasNullableType: hasNullableType,
    shouldWrapBody: zp(e.parsedBody, a)
  });
}
var ht = {
  Base64Url: "Base64Url",
  Boolean: "Boolean",
  ByteArray: "ByteArray",
  Composite: "Composite",
  Date: "Date",
  DateTime: "DateTime",
  DateTimeRfc1123: "DateTimeRfc1123",
  Dictionary: "Dictionary",
  Enum: "Enum",
  Number: "Number",
  Object: "Object",
  Sequence: "Sequence",
  String: "String",
  Stream: "Stream",
  TimeSpan: "TimeSpan",
  UnixTime: "UnixTime"
};
var Sd = ve(_d(), 1),
  state_2 = Sd.state;
function xt(e, t, r) {
  let {
      parameterPath: parameterPath,
      mapper: mapper
    } = t,
    i;
  if (typeof parameterPath === "string") parameterPath = [parameterPath];
  if (Array.isArray(parameterPath)) {
    if (parameterPath.length > 0) if (mapper.isConstant) i = mapper.defaultValue;else {
      let s = Rd(e, parameterPath);
      if (!s.propertyFound && r) s = Rd(r, parameterPath);
      let a = !1;
      if (!s.propertyFound) a = mapper.required || parameterPath[0] === "options" && parameterPath.length === 2;
      i = a ? mapper.defaultValue : s.propertyValue;
    }
  } else {
    if (mapper.required) i = {};
    for (let s in parameterPath) {
      let mapper_2 = mapper.type.modelProperties[s],
        parameterPath_2 = parameterPath[s],
        l = xt(e, {
          parameterPath: parameterPath_2,
          mapper: mapper_2
        }, r);
      if (l !== void 0) {
        if (!i) i = {};
        i[s] = l;
      }
    }
  }
  return i;
}
function Rd(e, t) {
  let r = {
      propertyFound: !1
    },
    n = 0;
  for (; n < t.length; ++n) {
    let o = t[n];
    if (e && o in e) e = e[o];else break;
  }
  if (n === t.length) r.propertyValue = e, r.propertyFound = !0;
  return r;
}
var wd = Symbol.for("@azure/core-client original request");
function qp(e) {
  return wd in e;
}
function ft(e) {
  if (qp(e)) return ft(e[wd]);
  let t = state_2.operationRequestMap.get(e);
  if (!t) t = {}, state_2.operationRequestMap.set(e, t);
  return t;
}
var Kp = ["application/json", "text/json"],
  Vp = ["application/xml", "application/atom+xml"],
  name_14 = "deserializationPolicy";
function vd(e = {}) {
  var t, r, n, o, i, s, a;
  let c = (r = (t = e.expectedContentTypes) === null || t === void 0 ? void 0 : t.json) !== null && r !== void 0 ? r : Kp,
    l = (o = (n = e.expectedContentTypes) === null || n === void 0 ? void 0 : n.xml) !== null && o !== void 0 ? o : Vp,
    {
      parseXML: parseXML,
      serializerOptions: serializerOptions
    } = e,
    m = {
      xml: {
        rootName: (i = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.rootName) !== null && i !== void 0 ? i : "",
        includeRoot: (s = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.includeRoot) !== null && s !== void 0 ? s : !1,
        xmlCharKey: (a = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.xmlCharKey) !== null && a !== void 0 ? a : ei
      }
    };
  return {
    name: name_14,
    async sendRequest(p, y) {
      let T = await y(p);
      return Qp(c, l, T, m, parseXML);
    }
  };
}
function Yp(e) {
  let t,
    request_6 = e.request,
    n = ft(request_6),
    o = n === null || n === void 0 ? void 0 : n.operationSpec;
  if (o) if (!(n === null || n === void 0 ? void 0 : n.operationResponseGetter)) t = o.responses[e.status];else t = n === null || n === void 0 ? void 0 : n.operationResponseGetter(o, e);
  return t;
}
function Wp(e) {
  let request_7 = e.request,
    r = ft(request_7),
    n = r === null || r === void 0 ? void 0 : r.shouldDeserialize,
    o;
  if (n === void 0) o = !0;else if (typeof n === "boolean") o = n;else o = n(e);
  return o;
}
async function Qp(e, t, r, n, o) {
  let response_5 = await Zp(e, t, r, n, o);
  if (!Wp(response_5)) return response_5;
  let s = ft(response_5.request),
    a = s === null || s === void 0 ? void 0 : s.operationSpec;
  if (!a || !a.responses) return response_5;
  let c = Yp(response_5),
    {
      error: error_5,
      shouldReturnResponse: shouldReturnResponse
    } = Xp(response_5, a, c, n);
  if (error_5) throw error_5;else if (shouldReturnResponse) return response_5;
  if (c) {
    if (c.bodyMapper) {
      let parsedBody = response_5.parsedBody;
      if (a.isXML && c.bodyMapper.type.name === ht.Sequence) parsedBody = typeof parsedBody === "object" ? parsedBody[c.bodyMapper.xmlElementName] : [];
      try {
        response_5.parsedBody = a.serializer.deserialize(c.bodyMapper, parsedBody, "operationRes.parsedBody", n);
      } catch (error) {
        throw new Wr(`Error ${error} occurred in deserializing the responseBody - ${response_5.bodyAsText}`, {
          statusCode: response_5.status,
          request: response_5.request,
          response: response_5
        });
      }
    } else if (a.httpMethod === "HEAD") response_5.parsedBody = r.status >= 200 && r.status < 300;
    if (c.headersMapper) response_5.parsedHeaders = a.serializer.deserialize(c.headersMapper, response_5.headers.toJSON(), "operationRes.parsedHeaders", {
      xml: {},
      ignoreUnknownProperties: !0
    });
  }
  return response_5;
}
function Jp(e) {
  let t = Object.keys(e.responses);
  return t.length === 0 || t.length === 1 && t[0] === "default";
}
function Xp(response_6, t, r, n) {
  var o, i, s, a, c;
  let l = 200 <= response_6.status && response_6.status < 300;
  if (Jp(t) ? l : !!r) if (r) {
    if (!r.isError) return {
      error: null,
      shouldReturnResponse: !1
    };
  } else return {
    error: null,
    shouldReturnResponse: !1
  };
  let u = r !== null && r !== void 0 ? r : t.responses.default,
    m = ((o = response_6.request.streamResponseStatusCodes) === null || o === void 0 ? void 0 : o.has(response_6.status)) ? `Unexpected status code: ${response_6.status}` : response_6.bodyAsText,
    error_6 = new Wr(m, {
      statusCode: response_6.status,
      request: response_6.request,
      response: response_6
    });
  if (!u && !(((s = (i = response_6.parsedBody) === null || i === void 0 ? void 0 : i.error) === null || s === void 0 ? void 0 : s.code) && ((c = (a = response_6.parsedBody) === null || a === void 0 ? void 0 : a.error) === null || c === void 0 ? void 0 : c.message))) throw error_6;
  let y = u === null || u === void 0 ? void 0 : u.bodyMapper,
    T = u === null || u === void 0 ? void 0 : u.headersMapper;
  try {
    if (response_6.parsedBody) {
      let parsedBody_2 = response_6.parsedBody,
        k;
      if (y) {
        let B = parsedBody_2;
        if (t.isXML && y.type.name === ht.Sequence) {
          B = [];
          let xmlElementName = y.xmlElementName;
          if (typeof parsedBody_2 === "object" && xmlElementName) B = parsedBody_2[xmlElementName];
        }
        k = t.serializer.deserialize(y, B, "error.response.parsedBody", n);
      }
      let U = parsedBody_2.error || k || parsedBody_2;
      if (error_6.code = U.code, U.message) error_6.message = U.message;
      if (y) error_6.response.parsedBody = k;
    }
    if (response_6.headers && T) error_6.response.parsedHeaders = t.serializer.deserialize(T, response_6.headers.toJSON(), "operationRes.parsedHeaders");
  } catch (error) {
    error_6.message = `Error "${error.message}" occurred in deserializing the responseBody - "${response_6.bodyAsText}" for the default response.`;
  }
  return {
    error: error_6,
    shouldReturnResponse: !1
  };
}
async function Zp(e, t, response_7, n, o) {
  var i;
  if (!((i = response_7.request.streamResponseStatusCodes) === null || i === void 0 ? void 0 : i.has(response_7.status)) && response_7.bodyAsText) {
    let bodyAsText = response_7.bodyAsText,
      a = response_7.headers.get("Content-Type") || "",
      c = !a ? [] : a.split(";").map(item => item.toLowerCase());
    try {
      if (c.length === 0 || c.some(item => e.indexOf(item) !== -1)) return response_7.parsedBody = JSON.parse(bodyAsText), response_7;else if (c.some(item => t.indexOf(item) !== -1)) {
        if (!o) throw Error("Parsing XML not supported.");
        let l = await o(bodyAsText, n.xml);
        return response_7.parsedBody = l, response_7;
      }
    } catch (error) {
      let d = `Error "${error}" occurred while parsing the response body - ${response_7.bodyAsText}.`,
        code = error.code || Wr.PARSE_ERROR;
      throw new Wr(d, {
        code: code,
        statusCode: response_7.status,
        request: response_7.request,
        response: response_7
      });
    }
  }
  return response_7;
}
function kd(e) {
  let t = new Set();
  for (let r in e.responses) {
    let n = e.responses[r];
    if (n.bodyMapper && n.bodyMapper.type.name === ht.Stream) t.add(Number(r));
  }
  return t;
}
function nt(e) {
  let {
      parameterPath: parameterPath_3,
      mapper: mapper_3
    } = e,
    n;
  if (typeof parameterPath_3 === "string") n = parameterPath_3;else if (Array.isArray(parameterPath_3)) n = parameterPath_3.join(".");else n = mapper_3.serializedName;
  return n;
}
var name_15 = "serializationPolicy";
function bd(e = {}) {
  let stringifyXML = e.stringifyXML;
  return {
    name: name_15,
    async sendRequest(r, n) {
      let o = ft(r),
        i = o === null || o === void 0 ? void 0 : o.operationSpec,
        s = o === null || o === void 0 ? void 0 : o.operationArguments;
      if (i && s) tg(r, s, i), rg(r, s, i, stringifyXML);
      return n(r);
    }
  };
}
function tg(e, t, r) {
  var n, o;
  if (r.headerParameters) for (let s of r.headerParameters) {
    let a = xt(t, s);
    if (a !== null && a !== void 0 || s.mapper.required) {
      a = r.serializer.serialize(s.mapper, a, nt(s));
      let headerCollectionPrefix = s.mapper.headerCollectionPrefix;
      if (headerCollectionPrefix) for (let l of Object.keys(a)) e.headers.set(headerCollectionPrefix + l, a[l]);else e.headers.set(s.mapper.serializedName || nt(s), a);
    }
  }
  let i = (o = (n = t.options) === null || n === void 0 ? void 0 : n.requestOptions) === null || o === void 0 ? void 0 : o.customHeaders;
  if (i) for (let s of Object.keys(i)) e.headers.set(s, i[s]);
}
function rg(e, t, r, n = function () {
  throw Error("XML serialization unsupported!");
}) {
  var o, i, s, a, c;
  let l = (o = t.options) === null || o === void 0 ? void 0 : o.serializerOptions,
    d = {
      xml: {
        rootName: (i = l === null || l === void 0 ? void 0 : l.xml.rootName) !== null && i !== void 0 ? i : "",
        includeRoot: (s = l === null || l === void 0 ? void 0 : l.xml.includeRoot) !== null && s !== void 0 ? s : !1,
        xmlCharKey: (a = l === null || l === void 0 ? void 0 : l.xml.xmlCharKey) !== null && a !== void 0 ? a : ei
      }
    },
    xmlCharKey = d.xml.xmlCharKey;
  if (r.requestBody && r.requestBody.mapper) {
    e.body = xt(t, r.requestBody);
    let mapper_4 = r.requestBody.mapper,
      {
        required: required,
        serializedName: serializedName,
        xmlName: xmlName,
        xmlElementName: xmlElementName_2,
        xmlNamespace: xmlNamespace,
        xmlNamespacePrefix: xmlNamespacePrefix,
        nullable: nullable
      } = mapper_4,
      X = mapper_4.type.name;
    try {
      if (e.body !== void 0 && e.body !== null || nullable && e.body === null || required) {
        let A = nt(r.requestBody);
        e.body = r.serializer.serialize(mapper_4, e.body, A, d);
        let C = X === ht.Stream;
        if (r.isXML) {
          let E = xmlNamespacePrefix ? `xmlns:${xmlNamespacePrefix}` : "xmlns",
            _ = ng(xmlNamespace, E, X, e.body, d);
          if (X === ht.Sequence) e.body = n(og(_, xmlElementName_2 || xmlName || serializedName, E, xmlNamespace), {
            rootName: xmlName || serializedName,
            xmlCharKey: xmlCharKey
          });else if (!C) e.body = n(_, {
            rootName: xmlName || serializedName,
            xmlCharKey: xmlCharKey
          });
        } else if (X === ht.String && (((c = r.contentType) === null || c === void 0 ? void 0 : c.match("text/plain")) || r.mediaType === "text")) return;else if (!C) e.body = JSON.stringify(e.body);
      }
    } catch (error) {
      throw Error(`Error "${error.message}" occurred in serializing the payload - ${JSON.stringify(serializedName, void 0, "  ")}.`);
    }
  } else if (r.formDataParameters && r.formDataParameters.length > 0) {
    e.formData = {};
    for (let m of r.formDataParameters) {
      let p = xt(t, m);
      if (p !== void 0 && p !== null) {
        let y = m.mapper.serializedName || nt(m);
        e.formData[y] = r.serializer.serialize(m.mapper, p, nt(m), d);
      }
    }
  }
}
function ng(e, t, r, n, o) {
  if (e && !["Composite", "Sequence", "Dictionary"].includes(r)) {
    let i = {};
    return i[o.xml.xmlCharKey] = n, i[Ca] = {
      [t]: e
    }, i;
  }
  return n;
}
function og(e, t, r, n) {
  if (!Array.isArray(e)) e = [e];
  if (!r || !n) return {
    [t]: e
  };
  let o = {
    [t]: e
  };
  return o[Ca] = {
    [r]: n
  }, o;
}
function Pd(e = {}) {
  let t = ya(e !== null && e !== void 0 ? e : {});
  if (e.credentialOptions) t.addPolicy(Zn({
    credential: e.credentialOptions.credential,
    scopes: e.credentialOptions.credentialScopes
  }));
  return t.addPolicy(bd(e.serializationOptions), {
    phase: "Serialize"
  }), t.addPolicy(vd(e.deserializationOptions), {
    phase: "Deserialize"
  }), t;
}
var _a;
function Od() {
  if (!_a) _a = Ta();
  return _a;
}
var ig = {
  CSV: ",",
  SSV: " ",
  Multi: "Multi",
  TSV: "\t",
  Pipes: "|"
};
function xd(e, t, r, n) {
  let o = sg(t, r, n),
    i = !1,
    s = Nd(e, o);
  if (t.path) {
    let l = Nd(t.path, o);
    if (t.path === "/{nextLink}" && l.startsWith("/")) l = l.substring(1);
    if (ag(l)) s = l, i = !0;else s = cg(s, l);
  }
  let {
    queryParams: queryParams,
    sequenceParams: sequenceParams
  } = lg(t, r, n);
  return s = ug(s, queryParams, sequenceParams, i), s;
}
function Nd(e, t) {
  let r = e;
  for (let [n, o] of t) r = r.split(n).join(o);
  return r;
}
function sg(e, t, r) {
  var n;
  let o = new Map();
  if ((n = e.urlParameters) === null || n === void 0 ? void 0 : n.length) for (let i of e.urlParameters) {
    let s = xt(t, i, r),
      a = nt(i);
    if (s = e.serializer.serialize(i.mapper, s, a), !i.skipEncoding) s = encodeURIComponent(s);
    o.set(`{${i.mapper.serializedName || a}}`, s);
  }
  return o;
}
function ag(e) {
  return e.includes("://");
}
function cg(e, t) {
  if (!t) return e;
  let r = new URL(e),
    pathname = r.pathname;
  if (!pathname.endsWith("/")) pathname = `${pathname}/`;
  if (t.startsWith("/")) t = t.substring(1);
  let o = t.indexOf("?");
  if (o !== -1) {
    let i = t.substring(0, o),
      s = t.substring(o + 1);
    if (pathname = pathname + i, s) r.search = r.search ? `${r.search}&${s}` : s;
  } else pathname = pathname + t;
  return r.pathname = pathname, r.toString();
}
function lg(e, t, r) {
  var n;
  let queryParams_2 = new Map(),
    sequenceParams_2 = new Set();
  if ((n = e.queryParameters) === null || n === void 0 ? void 0 : n.length) for (let s of e.queryParameters) {
    if (s.mapper.type.name === "Sequence" && s.mapper.serializedName) sequenceParams_2.add(s.mapper.serializedName);
    let a = xt(t, s, r);
    if (a !== void 0 && a !== null || s.mapper.required) {
      a = e.serializer.serialize(s.mapper, a, nt(s));
      let c = s.collectionFormat ? ig[s.collectionFormat] : "";
      if (Array.isArray(a)) a = a.map(item => {
        if (item === null || item === void 0) return "";
        return item;
      });
      if (s.collectionFormat === "Multi" && a.length === 0) continue;else if (Array.isArray(a) && (s.collectionFormat === "SSV" || s.collectionFormat === "TSV")) a = a.join(c);
      if (!s.skipEncoding) if (Array.isArray(a)) a = a.map(item => encodeURIComponent(item));else a = encodeURIComponent(a);
      if (Array.isArray(a) && (s.collectionFormat === "CSV" || s.collectionFormat === "Pipes")) a = a.join(c);
      queryParams_2.set(s.mapper.serializedName || nt(s), a);
    }
  }
  return {
    queryParams: queryParams_2,
    sequenceParams: sequenceParams_2
  };
}
function dg(e) {
  let t = new Map();
  if (!e || e[0] !== "?") return t;
  e = e.slice(1);
  let r = e.split("&");
  for (let n of r) {
    let [o, i] = n.split("=", 2),
      s = t.get(o);
    if (s) {
      if (Array.isArray(s)) s.push(i);else t.set(o, [s, i]);
    } else t.set(o, i);
  }
  return t;
}
function ug(e, t, r, n = !1) {
  if (t.size === 0) return e;
  let o = new URL(e),
    i = dg(o.search);
  for (let [a, c] of t) {
    let l = i.get(a);
    if (Array.isArray(l)) {
      if (Array.isArray(c)) {
        l.push(...c);
        let d = new Set(l);
        i.set(a, Array.from(d));
      } else l.push(c);
    } else if (l) {
      if (Array.isArray(c)) c.unshift(l);else if (r.has(a)) i.set(a, [l, c]);
      if (!n) i.set(a, c);
    } else i.set(a, c);
  }
  let s = [];
  for (let [a, c] of i) if (typeof c === "string") s.push(`${a}=${c}`);else if (Array.isArray(c)) for (let l of c) s.push(`${a}=${l}`);else s.push(`${a}=${c}`);
  return o.search = s.length ? `?${s.join("&")}` : "", o.toString();
}
var Md = Ot("core-client");
class ti {
  constructor(e = {}) {
    var t, r;
    if (this._requestContentType = e.requestContentType, this._endpoint = (t = e.endpoint) !== null && t !== void 0 ? t : e.baseUri, e.baseUri) Md.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead.");
    if (this._allowInsecureConnection = e.allowInsecureConnection, this._httpClient = e.httpClient || Od(), this.pipeline = e.pipeline || hg(e), (r = e.additionalPolicies) === null || r === void 0 ? void 0 : r.length) for (let {
      policy: policy_4,
      position: position
    } of e.additionalPolicies) {
      let afterPhase = position === "perRetry" ? "Sign" : void 0;
      this.pipeline.addPolicy(policy_4, {
        afterPhase: afterPhase
      });
    }
  }
  async sendRequest(e) {
    return this.pipeline.sendRequest(this._httpClient, e);
  }
  async sendOperationRequest(e, t) {
    let r = t.baseUrl || this._endpoint;
    if (!r) throw Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");
    let url = xd(r, t, e, this),
      o = Ye({
        url: url
      });
    o.method = t.httpMethod;
    let i = ft(o);
    i.operationSpec = t, i.operationArguments = e;
    let s = t.contentType || this._requestContentType;
    if (s && t.requestBody) o.headers.set("Content-Type", s);
    let options_4 = e.options;
    if (options_4) {
      let requestOptions = options_4.requestOptions;
      if (requestOptions) {
        if (requestOptions.timeout) o.timeout = requestOptions.timeout;
        if (requestOptions.onUploadProgress) o.onUploadProgress = requestOptions.onUploadProgress;
        if (requestOptions.onDownloadProgress) o.onDownloadProgress = requestOptions.onDownloadProgress;
        if (requestOptions.shouldDeserialize !== void 0) i.shouldDeserialize = requestOptions.shouldDeserialize;
        if (requestOptions.allowInsecureConnection) o.allowInsecureConnection = !0;
      }
      if (options_4.abortSignal) o.abortSignal = options_4.abortSignal;
      if (options_4.tracingOptions) o.tracingOptions = options_4.tracingOptions;
    }
    if (this._allowInsecureConnection) o.allowInsecureConnection = !0;
    if (o.streamResponseStatusCodes === void 0) o.streamResponseStatusCodes = kd(t);
    try {
      let c = await this.sendRequest(o),
        l = Aa(c, t.responses[c.status]);
      if (options_4 === null || options_4 === void 0 ? void 0 : options_4.onResponse) options_4.onResponse(c, l);
      return l;
    } catch (error) {
      if (typeof error === "object" && (error === null || error === void 0 ? void 0 : error.response)) {
        let response_8 = error.response,
          d = Aa(response_8, t.responses[error.statusCode] || t.responses.default);
        if (error.details = d, options_4 === null || options_4 === void 0 ? void 0 : options_4.onResponse) options_4.onResponse(response_8, d, error);
      }
      throw error;
    }
  }
}
function hg(e) {
  let credentialScopes = fg(e),
    credentialOptions = e.credential && credentialScopes ? {
      credentialScopes: credentialScopes,
      credential: e.credential
    } : void 0;
  return Pd(Object.assign(Object.assign({}, e), {
    credentialOptions: credentialOptions
  }));
}
function fg(e) {
  if (e.credentialScopes) return e.credentialScopes;
  if (e.endpoint) return `${e.endpoint}/.default`;
  if (e.baseUri) return `${e.baseUri}/.default`;
  if (e.credential && !e.credentialScopes) throw Error("When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy");
  return;
}
function Dd(e) {
  if (e === "adfs") return "oauth2/token";else return "oauth2/v2.0/token";
}
var Z = Jn({
  namespace: "Microsoft.AAD",
  packageName: "@azure/identity",
  packageVersion: packageVersion_3
});
var Ud = "Specifying a `clientId` or `resourceId` is not supported by the Service Fabric managed identity environment. The managed identity configuration is determined by the Service Fabric cluster resource configuration. See https://aka.ms/servicefabricmi for more information";
function eo(e) {
  let t = "";
  if (Array.isArray(e)) {
    if (e.length !== 1) return;
    t = e[0];
  } else if (typeof e === "string") t = e;
  if (!t.endsWith("/.default")) return t;
  return t.substr(0, t.lastIndexOf("/.default"));
}
function Ld(e) {
  if (typeof e.expires_on === "number") return e.expires_on * 1000;
  if (typeof e.expires_on === "string") {
    let t = +e.expires_on;
    if (!isNaN(t)) return t * 1000;
    let r = Date.parse(e.expires_on);
    if (!isNaN(r)) return r;
  }
  if (typeof e.expires_in === "number") return Date.now() + e.expires_in * 1000;
  throw Error(`Failed to parse token expiration from body. expires_in="${e.expires_in}", expires_on="${e.expires_on}"`);
}
function Hd(e) {
  if (e.refresh_on) {
    if (typeof e.refresh_on === "number") return e.refresh_on * 1000;
    if (typeof e.refresh_on === "string") {
      let t = +e.refresh_on;
      if (!isNaN(t)) return t * 1000;
      let r = Date.parse(e.refresh_on);
      if (!isNaN(r)) return r;
    }
    throw Error(`Failed to parse refresh_on from body. refresh_on="${e.refresh_on}"`);
  } else return;
}
var to = "noCorrelationId";
function mg(e) {
  let t = e === null || e === void 0 ? void 0 : e.authorityHost;
  if (Qo) t = t !== null && t !== void 0 ? t : process.env.AZURE_AUTHORITY_HOST;
  return t !== null && t !== void 0 ? t : AzurePublicCloud;
}
class Qr extends ti {
  constructor(e) {
    var t, r;
    let n = `azsdk-js-identity/${packageVersion_3}`,
      userAgentPrefix = ((t = e === null || e === void 0 ? void 0 : e.userAgentOptions) === null || t === void 0 ? void 0 : t.userAgentPrefix) ? `${e.userAgentOptions.userAgentPrefix} ${n}` : `${n}`,
      baseUri = mg(e);
    if (!baseUri.startsWith("https:")) throw Error("The authorityHost address must use the 'https' protocol.");
    super(Object.assign(Object.assign({
      requestContentType: "application/json; charset=utf-8",
      retryOptions: {
        maxRetries: 3
      }
    }, e), {
      userAgentOptions: {
        userAgentPrefix: userAgentPrefix
      },
      baseUri: baseUri
    }));
    if (this.allowInsecureConnection = !1, this.authorityHost = baseUri, this.abortControllers = new Map(), this.allowLoggingAccountIdentifiers = (r = e === null || e === void 0 ? void 0 : e.loggingOptions) === null || r === void 0 ? void 0 : r.allowLoggingAccountIdentifiers, this.tokenCredentialOptions = Object.assign({}, e), e === null || e === void 0 ? void 0 : e.allowInsecureConnection) this.allowInsecureConnection = e.allowInsecureConnection;
  }
  async sendTokenRequest(e) {
    Be.info(`IdentityClient: sending token request to [${e.url}]`);
    let t = await this.sendRequest(e);
    if (t.bodyAsText && (t.status === 200 || t.status === 201)) {
      let r = JSON.parse(t.bodyAsText);
      if (!r.access_token) return null;
      this.logIdentifiers(t);
      let n = {
        accessToken: {
          token: r.access_token,
          expiresOnTimestamp: Ld(r),
          refreshAfterTimestamp: Hd(r),
          tokenType: "Bearer"
        },
        refreshToken: r.refresh_token
      };
      return Be.info(`IdentityClient: [${e.url}] token acquired, expires on ${n.accessToken.expiresOnTimestamp}`), n;
    } else {
      let r = new $n(t.status, t.bodyAsText);
      throw Be.warning(`IdentityClient: authentication error. HTTP status: ${t.status}, ${r.errorResponse.errorDescription}`), r;
    }
  }
  async refreshAccessToken(e, client_id, scope, refresh_token, o, i = {}) {
    if (refresh_token === void 0) return null;
    Be.info(`IdentityClient: refreshing access token with client ID: ${client_id}, scopes: ${scope} started`);
    let s = {
      grant_type: "refresh_token",
      client_id: client_id,
      refresh_token: refresh_token,
      scope: scope
    };
    if (o !== void 0) s.client_secret = o;
    let uRLSearchParams_2 = new URLSearchParams(s);
    return Z.withSpan("IdentityClient.refreshAccessToken", i, async c => {
      try {
        let l = Dd(e),
          d = Ye({
            url: `${this.authorityHost}/${e}/${l}`,
            method: "POST",
            body: uRLSearchParams_2.toString(),
            abortSignal: i.abortSignal,
            headers: rr({
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            }),
            tracingOptions: c.tracingOptions
          }),
          u = await this.sendTokenRequest(d);
        return Be.info(`IdentityClient: refreshed token for client ID: ${client_id}`), u;
      } catch (l) {
        if (l.name === Hs && l.errorResponse.error === "interaction_required") return Be.info(`IdentityClient: interaction required for client ID: ${client_id}`), null;else throw Be.warning(`IdentityClient: failed refreshing token for client ID: ${client_id}: ${l}`), l;
      }
    });
  }
  generateAbortSignal(e) {
    let abortController_3 = new AbortController(),
      r = this.abortControllers.get(e) || [];
    r.push(abortController_3), this.abortControllers.set(e, r);
    let onabort = abortController_3.signal.onabort;
    return abortController_3.signal.onabort = (...o) => {
      if (this.abortControllers.set(e, void 0), onabort) onabort.apply(abortController_3.signal, o);
    }, abortController_3.signal;
  }
  abortRequests(e) {
    let t = e || to,
      r = [...(this.abortControllers.get(t) || []), ...(this.abortControllers.get(to) || [])];
    if (!r.length) return;
    for (let n of r) n.abort();
    this.abortControllers.set(t, void 0);
  }
  getCorrelationId(e) {
    var t;
    let r = (t = e === null || e === void 0 ? void 0 : e.body) === null || t === void 0 ? void 0 : t.split("&").map(item => item.split("=")).find(([n]) => n === "client-request-id");
    return r && r.length ? r[1] || to : to;
  }
  async sendGetRequestAsync(url_2, t) {
    let r = Ye({
        url: url_2,
        method: "GET",
        body: t === null || t === void 0 ? void 0 : t.body,
        allowInsecureConnection: this.allowInsecureConnection,
        headers: rr(t === null || t === void 0 ? void 0 : t.headers),
        abortSignal: this.generateAbortSignal(to)
      }),
      n = await this.sendRequest(r);
    return this.logIdentifiers(n), {
      body: n.bodyAsText ? JSON.parse(n.bodyAsText) : void 0,
      headers: n.headers.toJSON(),
      status: n.status
    };
  }
  async sendPostRequestAsync(url_3, t) {
    let r = Ye({
        url: url_3,
        method: "POST",
        body: t === null || t === void 0 ? void 0 : t.body,
        headers: rr(t === null || t === void 0 ? void 0 : t.headers),
        allowInsecureConnection: this.allowInsecureConnection,
        abortSignal: this.generateAbortSignal(this.getCorrelationId(t))
      }),
      n = await this.sendRequest(r);
    return this.logIdentifiers(n), {
      body: n.bodyAsText ? JSON.parse(n.bodyAsText) : void 0,
      headers: n.headers.toJSON(),
      status: n.status
    };
  }
  getTokenCredentialOptions() {
    return this.tokenCredentialOptions;
  }
  logIdentifiers(e) {
    if (!this.allowLoggingAccountIdentifiers || !e.bodyAsText) return;
    let t = "No User Principal Name available";
    try {
      let access_token = (e.parsedBody || JSON.parse(e.bodyAsText)).access_token;
      if (!access_token) return;
      let o = access_token.split(".")[1],
        {
          appid: appid,
          upn: upn,
          tid: tid,
          oid: oid
        } = JSON.parse(Buffer.from(o, "base64").toString("utf8"));
      Be.info(`[Authenticated account] Client ID: ${appid}. Tenant ID: ${tid}. User Principal Name: ${upn || t}. Object ID (user): ${oid}`);
    } catch (error) {
      Be.warning("allowLoggingAccountIdentifiers was set, but we couldn't log the account information. Error:", error.message);
    }
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Jr {
  static serializeJSONBlob(e) {
    return JSON.stringify(e);
  }
  static serializeAccounts(e) {
    let t = {};
    return Object.keys(e).map(function (item) {
      let n = e[item];
      t[item] = {
        home_account_id: n.homeAccountId,
        environment: n.environment,
        realm: n.realm,
        local_account_id: n.localAccountId,
        username: n.username,
        authority_type: n.authorityType,
        name: n.name,
        client_info: n.clientInfo,
        last_modification_time: n.lastModificationTime,
        last_modification_app: n.lastModificationApp,
        tenantProfiles: n.tenantProfiles?.map(o => JSON.stringify(o))
      };
    }), t;
  }
  static serializeIdTokens(e) {
    let t = {};
    return Object.keys(e).map(function (item) {
      let n = e[item];
      t[item] = {
        home_account_id: n.homeAccountId,
        environment: n.environment,
        credential_type: n.credentialType,
        client_id: n.clientId,
        secret: n.secret,
        realm: n.realm
      };
    }), t;
  }
  static serializeAccessTokens(e) {
    let t = {};
    return Object.keys(e).map(function (item) {
      let n = e[item];
      t[item] = {
        home_account_id: n.homeAccountId,
        environment: n.environment,
        credential_type: n.credentialType,
        client_id: n.clientId,
        secret: n.secret,
        realm: n.realm,
        target: n.target,
        cached_at: n.cachedAt,
        expires_on: n.expiresOn,
        extended_expires_on: n.extendedExpiresOn,
        refresh_on: n.refreshOn,
        key_id: n.keyId,
        token_type: n.tokenType,
        requestedClaims: n.requestedClaims,
        requestedClaimsHash: n.requestedClaimsHash,
        userAssertionHash: n.userAssertionHash
      };
    }), t;
  }
  static serializeRefreshTokens(e) {
    let t = {};
    return Object.keys(e).map(function (item) {
      let n = e[item];
      t[item] = {
        home_account_id: n.homeAccountId,
        environment: n.environment,
        credential_type: n.credentialType,
        client_id: n.clientId,
        secret: n.secret,
        family_id: n.familyId,
        target: n.target,
        realm: n.realm
      };
    }), t;
  }
  static serializeAppMetadata(e) {
    let t = {};
    return Object.keys(e).map(function (item) {
      let n = e[item];
      t[item] = {
        client_id: n.clientId,
        environment: n.environment,
        family_id: n.familyId
      };
    }), t;
  }
  static serializeAllCache(e) {
    return {
      Account: this.serializeAccounts(e.accounts),
      IdToken: this.serializeIdTokens(e.idTokens),
      AccessToken: this.serializeAccessTokens(e.accessTokens),
      RefreshToken: this.serializeRefreshTokens(e.refreshTokens),
      AppMetadata: this.serializeAppMetadata(e.appMetadata)
    };
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var f = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    DEFAULT_COMMON_TENANT: "common",
    ADFS: "adfs",
    DSTS: "dstsv2",
    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    CIAM_AUTH_URL: ".ciamlogin.com",
    AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
    RESOURCE_DELIM: "|",
    NO_ACCOUNT: "NO_ACCOUNT",
    CLAIMS: "claims",
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    EMAIL_SCOPE: "email",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined",
    EMPTY_STRING: "",
    NOT_APPLICABLE: "N/A",
    NOT_AVAILABLE: "Not Available",
    FORWARD_SLASH: "/",
    IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
    IMDS_VERSION: "2020-06-01",
    IMDS_TIMEOUT: 2000,
    AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
    REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
    KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
    SHR_NONCE_VALIDITY: 240,
    INVALID_INSTANCE: "invalid_instance"
  },
  P = {
    SUCCESS: 200,
    SUCCESS_RANGE_START: 200,
    SUCCESS_RANGE_END: 299,
    REDIRECT: 302,
    CLIENT_ERROR: 400,
    CLIENT_ERROR_RANGE_START: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    GONE: 410,
    TOO_MANY_REQUESTS: 429,
    CLIENT_ERROR_RANGE_END: 499,
    SERVER_ERROR: 500,
    SERVER_ERROR_RANGE_START: 500,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    SERVER_ERROR_RANGE_END: 599,
    MULTI_SIDED_ERROR: 600
  };
var ye = [f.OPENID_SCOPE, f.PROFILE_SCOPE, f.OFFLINE_ACCESS_SCOPE],
  Sa = [...ye, f.EMAIL_SCOPE],
  Y = {
    CONTENT_TYPE: "Content-Type",
    CONTENT_LENGTH: "Content-Length",
    RETRY_AFTER: "Retry-After",
    CCS_HEADER: "X-AnchorMailbox",
    WWWAuthenticate: "WWW-Authenticate",
    AuthenticationInfo: "Authentication-Info",
    X_MS_REQUEST_ID: "x-ms-request-id",
    X_MS_HTTP_VERSION: "x-ms-httpver"
  };
var be = {
    COMMON: "common",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers"
  },
  nr = {
    ACCESS_TOKEN: "access_token",
    XMS_CC: "xms_cc"
  },
  or = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
    CREATE: "create",
    NO_SESSION: "no_session"
  },
  ri = {
    PLAIN: "plain",
    S256: "S256"
  },
  Xr = {
    CODE: "code",
    IDTOKEN_TOKEN: "id_token token",
    IDTOKEN_TOKEN_REFRESHTOKEN: "id_token token refresh_token"
  };
var mt = {
    QUERY: "query",
    FRAGMENT: "fragment",
    FORM_POST: "form_post"
  },
  Pe = {
    IMPLICIT_GRANT: "implicit",
    AUTHORIZATION_CODE_GRANT: "authorization_code",
    CLIENT_CREDENTIALS_GRANT: "client_credentials",
    RESOURCE_OWNER_PASSWORD_GRANT: "password",
    REFRESH_TOKEN_GRANT: "refresh_token",
    DEVICE_CODE_GRANT: "device_code",
    JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer"
  },
  ir = {
    MSSTS_ACCOUNT_TYPE: "MSSTS",
    ADFS_ACCOUNT_TYPE: "ADFS",
    MSAV1_ACCOUNT_TYPE: "MSA",
    GENERIC_ACCOUNT_TYPE: "Generic"
  },
  pt = {
    CACHE_KEY_SEPARATOR: "-",
    CLIENT_INFO_SEPARATOR: "."
  },
  K = {
    ID_TOKEN: "IdToken",
    ACCESS_TOKEN: "AccessToken",
    ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
    REFRESH_TOKEN: "RefreshToken"
  };
var ro = "appmetadata",
  Fd = "client_info",
  Mt = "1",
  Zr = {
    CACHE_KEY: "authority-metadata",
    REFRESH_TIME_SECONDS: 86400
  },
  Ce = {
    CONFIG: "config",
    CACHE: "cache",
    NETWORK: "network",
    HARDCODED_VALUES: "hardcoded_values"
  },
  de = {
    SCHEMA_VERSION: 5,
    MAX_LAST_HEADER_BYTES: 330,
    MAX_CACHED_ERRORS: 50,
    CACHE_KEY: "server-telemetry",
    CATEGORY_SEPARATOR: "|",
    VALUE_SEPARATOR: ",",
    OVERFLOW_TRUE: "1",
    OVERFLOW_FALSE: "0",
    UNKNOWN_ERROR: "unknown_error"
  },
  L = {
    BEARER: "Bearer",
    POP: "pop",
    SSH: "ssh-cert"
  },
  ot = {
    DEFAULT_THROTTLE_TIME_SECONDS: 60,
    DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
    THROTTLING_PREFIX: "throttling",
    X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
  },
  no = {
    INVALID_GRANT_ERROR: "invalid_grant",
    CLIENT_MISMATCH_ERROR: "client_mismatch"
  },
  oo = {
    username: "username",
    password: "password"
  },
  sr = {
    FAILED_AUTO_DETECTION: "1",
    INTERNAL_CACHE: "2",
    ENVIRONMENT_VARIABLE: "3",
    IMDS: "4"
  },
  ni = {
    CONFIGURED_NO_AUTO_DETECTION: "2",
    AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
    AUTO_DETECTION_REQUESTED_FAILED: "5"
  },
  j = {
    NOT_APPLICABLE: "0",
    FORCE_REFRESH_OR_CLAIMS: "1",
    NO_CACHED_ACCESS_TOKEN: "2",
    CACHED_ACCESS_TOKEN_EXPIRED: "3",
    PROACTIVELY_REFRESHED: "4"
  };
var tokenRenewalOffsetSeconds = 300,
  me = {
    BASE64: "base64",
    HEX: "hex",
    UTF8: "utf-8"
  }; /*! @azure/msal-common v15.13.1 2025-10-29 */
var code_2 = "unexpected_error",
  code_3 = "post_request_failed"; /*! @azure/msal-common v15.13.1 2025-10-29 */
var ii = {
    [code_2]: "Unexpected error in authentication.",
    [code_3]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  },
  $d = {
    unexpectedError: {
      code: code_2,
      desc: ii[code_2]
    },
    postRequestFailed: {
      code: code_3,
      desc: ii[code_3]
    }
  };
class AuthError extends Error {
  constructor(e, t, r) {
    let n = t ? `${e}: ${t}` : e;
    super(n);
    Object.setPrototypeOf(this, AuthError.prototype), this.errorCode = e || f.EMPTY_STRING, this.errorMessage = t || f.EMPTY_STRING, this.subError = r || f.EMPTY_STRING, this.name = "AuthError";
  }
  setCorrelationId(e) {
    this.correlationId = e;
  }
}
function wa(e, t) {
  return new AuthError(e, t ? `${ii[e]} ${t}` : ii[e]);
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var code_4 = "client_info_decoding_error",
  code_5 = "client_info_empty_error",
  code_6 = "token_parsing_error",
  code_7 = "null_or_empty_token",
  code_8 = "endpoints_resolution_error",
  code_9 = "network_error",
  code_10 = "openid_config_error",
  code_11 = "hash_not_deserialized",
  code_12 = "invalid_state",
  code_13 = "state_mismatch",
  code_14 = "state_not_found",
  code_15 = "nonce_mismatch",
  code_16 = "auth_time_not_found",
  code_17 = "max_age_transpired",
  code_18 = "multiple_matching_tokens",
  code_19 = "multiple_matching_accounts",
  code_20 = "multiple_matching_appMetadata",
  code_21 = "request_cannot_be_made",
  code_22 = "cannot_remove_empty_scope",
  code_23 = "cannot_append_scopeset",
  code_24 = "empty_input_scopeset",
  code_25 = "device_code_polling_cancelled",
  code_26 = "device_code_expired",
  code_27 = "device_code_unknown_error",
  code_28 = "no_account_in_silent_request",
  code_29 = "invalid_cache_record",
  code_30 = "invalid_cache_environment",
  code_31 = "no_account_found",
  code_32 = "no_crypto_object",
  code_33 = "unexpected_credential_type",
  code_34 = "invalid_assertion",
  code_35 = "invalid_client_credential",
  code_36 = "token_refresh_required",
  code_37 = "user_timeout_reached",
  code_38 = "token_claims_cnf_required_for_signedjwt",
  code_39 = "authorization_code_missing_from_server_response",
  code_40 = "binding_key_not_removed",
  code_41 = "end_session_endpoint_not_supported",
  code_42 = "key_id_missing",
  code_43 = "no_network_connectivity",
  code_44 = "user_canceled",
  code_45 = "missing_tenant_id_error",
  M = "method_not_implemented",
  code_46 = "nested_app_auth_bridge_disabled"; /*! @azure/msal-common v15.13.1 2025-10-29 */
var O = {
    [code_4]: "The client info could not be parsed/decoded correctly",
    [code_5]: "The client info was empty",
    [code_6]: "Token cannot be parsed",
    [code_7]: "The token is null or empty",
    [code_8]: "Endpoints cannot be resolved",
    [code_9]: "Network request failed",
    [code_10]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
    [code_11]: "The hash parameters could not be deserialized",
    [code_12]: "State was not the expected format",
    [code_13]: "State mismatch error",
    [code_14]: "State not found",
    [code_15]: "Nonce mismatch error",
    [code_16]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
    [code_17]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
    [code_18]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
    [code_19]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
    [code_20]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
    [code_21]: "Token request cannot be made without authorization code or refresh token.",
    [code_22]: "Cannot remove null or empty scope from ScopeSet",
    [code_23]: "Cannot append ScopeSet",
    [code_24]: "Empty input ScopeSet cannot be processed",
    [code_25]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
    [code_26]: "Device code is expired.",
    [code_27]: "Device code stopped polling for unknown reasons.",
    [code_28]: "Please pass an account object, silent flow is not supported without account information",
    [code_29]: "Cache record object was null or undefined.",
    [code_30]: "Invalid environment when attempting to create cache entry",
    [code_31]: "No account found in cache for given key.",
    [code_32]: "No crypto object detected.",
    [code_33]: "Unexpected credential type.",
    [code_34]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
    [code_35]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
    [code_36]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
    [code_37]: "User defined timeout for device code polling reached",
    [code_38]: "Cannot generate a POP jwt if the token_claims are not populated",
    [code_39]: "Server response does not contain an authorization code to proceed",
    [code_40]: "Could not remove the credential's binding key from storage.",
    [code_41]: "The provided authority does not support logout",
    [code_42]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
    [code_43]: "No network connectivity. Check your internet connection.",
    [code_44]: "User cancelled the flow.",
    [code_45]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
    [M]: "This method has not been implemented",
    [code_46]: "The nested app auth bridge is disabled"
  },
  Bd = {
    clientInfoDecodingError: {
      code: code_4,
      desc: O[code_4]
    },
    clientInfoEmptyError: {
      code: code_5,
      desc: O[code_5]
    },
    tokenParsingError: {
      code: code_6,
      desc: O[code_6]
    },
    nullOrEmptyToken: {
      code: code_7,
      desc: O[code_7]
    },
    endpointResolutionError: {
      code: code_8,
      desc: O[code_8]
    },
    networkError: {
      code: code_9,
      desc: O[code_9]
    },
    unableToGetOpenidConfigError: {
      code: code_10,
      desc: O[code_10]
    },
    hashNotDeserialized: {
      code: code_11,
      desc: O[code_11]
    },
    invalidStateError: {
      code: code_12,
      desc: O[code_12]
    },
    stateMismatchError: {
      code: code_13,
      desc: O[code_13]
    },
    stateNotFoundError: {
      code: code_14,
      desc: O[code_14]
    },
    nonceMismatchError: {
      code: code_15,
      desc: O[code_15]
    },
    authTimeNotFoundError: {
      code: code_16,
      desc: O[code_16]
    },
    maxAgeTranspired: {
      code: code_17,
      desc: O[code_17]
    },
    multipleMatchingTokens: {
      code: code_18,
      desc: O[code_18]
    },
    multipleMatchingAccounts: {
      code: code_19,
      desc: O[code_19]
    },
    multipleMatchingAppMetadata: {
      code: code_20,
      desc: O[code_20]
    },
    tokenRequestCannotBeMade: {
      code: code_21,
      desc: O[code_21]
    },
    removeEmptyScopeError: {
      code: code_22,
      desc: O[code_22]
    },
    appendScopeSetError: {
      code: code_23,
      desc: O[code_23]
    },
    emptyInputScopeSetError: {
      code: code_24,
      desc: O[code_24]
    },
    DeviceCodePollingCancelled: {
      code: code_25,
      desc: O[code_25]
    },
    DeviceCodeExpired: {
      code: code_26,
      desc: O[code_26]
    },
    DeviceCodeUnknownError: {
      code: code_27,
      desc: O[code_27]
    },
    NoAccountInSilentRequest: {
      code: code_28,
      desc: O[code_28]
    },
    invalidCacheRecord: {
      code: code_29,
      desc: O[code_29]
    },
    invalidCacheEnvironment: {
      code: code_30,
      desc: O[code_30]
    },
    noAccountFound: {
      code: code_31,
      desc: O[code_31]
    },
    noCryptoObj: {
      code: code_32,
      desc: O[code_32]
    },
    unexpectedCredentialType: {
      code: code_33,
      desc: O[code_33]
    },
    invalidAssertion: {
      code: code_34,
      desc: O[code_34]
    },
    invalidClientCredential: {
      code: code_35,
      desc: O[code_35]
    },
    tokenRefreshRequired: {
      code: code_36,
      desc: O[code_36]
    },
    userTimeoutReached: {
      code: code_37,
      desc: O[code_37]
    },
    tokenClaimsRequired: {
      code: code_38,
      desc: O[code_38]
    },
    noAuthorizationCodeFromServer: {
      code: code_39,
      desc: O[code_39]
    },
    bindingKeyNotRemovedError: {
      code: code_40,
      desc: O[code_40]
    },
    logoutNotSupported: {
      code: code_41,
      desc: O[code_41]
    },
    keyIdMissing: {
      code: code_42,
      desc: O[code_42]
    },
    noNetworkConnectivity: {
      code: code_43,
      desc: O[code_43]
    },
    userCanceledError: {
      code: code_44,
      desc: O[code_44]
    },
    missingTenantIdError: {
      code: code_45,
      desc: O[code_45]
    },
    nestedAppAuthBridgeDisabled: {
      code: code_46,
      desc: O[code_46]
    }
  };
class ClientAuthError extends AuthError {
  constructor(e, t) {
    super(e, t ? `${O[e]}: ${t}` : O[e]);
    this.name = "ClientAuthError", Object.setPrototypeOf(this, ClientAuthError.prototype);
  }
}
function g(e, t) {
  return new ClientAuthError(e, t);
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var Tn = {
  createNewGuid: () => {
    throw g(M);
  },
  base64Decode: () => {
    throw g(M);
  },
  base64Encode: () => {
    throw g(M);
  },
  base64UrlEncode: () => {
    throw g(M);
  },
  encodeKid: () => {
    throw g(M);
  },
  async getPublicKeyThumbprint() {
    throw g(M);
  },
  async removeTokenBindingKey() {
    throw g(M);
  },
  async clearKeystore() {
    throw g(M);
  },
  async signJwt() {
    throw g(M);
  },
  async hashString() {
    throw g(M);
  }
}; /*! @azure/msal-common v15.13.1 2025-10-29 */
var G;
(function (e) {
  e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Info = 2] = "Info", e[e.Verbose = 3] = "Verbose", e[e.Trace = 4] = "Trace";
})(G || (G = {}));
class Le {
  constructor(e, t, r) {
    this.level = G.Info;
    let n = () => {
        return;
      },
      o = e || Le.createDefaultLoggerOptions();
    this.localCallback = o.loggerCallback || n, this.piiLoggingEnabled = o.piiLoggingEnabled || !1, this.level = typeof o.logLevel === "number" ? o.logLevel : G.Info, this.correlationId = o.correlationId || f.EMPTY_STRING, this.packageName = t || f.EMPTY_STRING, this.packageVersion = r || f.EMPTY_STRING;
  }
  static createDefaultLoggerOptions() {
    return {
      loggerCallback: () => {},
      piiLoggingEnabled: !1,
      logLevel: G.Info
    };
  }
  clone(e, t, r) {
    return new Le({
      loggerCallback: this.localCallback,
      piiLoggingEnabled: this.piiLoggingEnabled,
      logLevel: this.level,
      correlationId: r || this.correlationId
    }, e, t);
  }
  logMessage(e, t) {
    if (t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii) return;
    let o = `${`[${new Date().toUTCString()}] : [${t.correlationId || this.correlationId || ""}]`} : ${this.packageName}@${this.packageVersion} : ${G[t.logLevel]} - ${e}`;
    this.executeCallback(t.logLevel, o, t.containsPii || !1);
  }
  executeCallback(e, t, r) {
    if (this.localCallback) this.localCallback(e, t, r);
  }
  error(e, t) {
    this.logMessage(e, {
      logLevel: G.Error,
      containsPii: !1,
      correlationId: t || f.EMPTY_STRING
    });
  }
  errorPii(e, t) {
    this.logMessage(e, {
      logLevel: G.Error,
      containsPii: !0,
      correlationId: t || f.EMPTY_STRING
    });
  }
  warning(e, t) {
    this.logMessage(e, {
      logLevel: G.Warning,
      containsPii: !1,
      correlationId: t || f.EMPTY_STRING
    });
  }
  warningPii(e, t) {
    this.logMessage(e, {
      logLevel: G.Warning,
      containsPii: !0,
      correlationId: t || f.EMPTY_STRING
    });
  }
  info(e, t) {
    this.logMessage(e, {
      logLevel: G.Info,
      containsPii: !1,
      correlationId: t || f.EMPTY_STRING
    });
  }
  infoPii(e, t) {
    this.logMessage(e, {
      logLevel: G.Info,
      containsPii: !0,
      correlationId: t || f.EMPTY_STRING
    });
  }
  verbose(e, t) {
    this.logMessage(e, {
      logLevel: G.Verbose,
      containsPii: !1,
      correlationId: t || f.EMPTY_STRING
    });
  }
  verbosePii(e, t) {
    this.logMessage(e, {
      logLevel: G.Verbose,
      containsPii: !0,
      correlationId: t || f.EMPTY_STRING
    });
  }
  trace(e, t) {
    this.logMessage(e, {
      logLevel: G.Trace,
      containsPii: !1,
      correlationId: t || f.EMPTY_STRING
    });
  }
  tracePii(e, t) {
    this.logMessage(e, {
      logLevel: G.Trace,
      containsPii: !0,
      correlationId: t || f.EMPTY_STRING
    });
  }
  isPiiLoggingEnabled() {
    return this.piiLoggingEnabled || !1;
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var pi = "@azure/msal-common",
  version = "15.13.1"; /*! @azure/msal-common v15.13.1 2025-10-29 */
var Ft = {
  None: "none",
  AzurePublic: "https://login.microsoftonline.com",
  AzurePpe: "https://login.windows-ppe.net",
  AzureChina: "https://login.chinacloudapi.cn",
  AzureGermany: "https://login.microsoftonline.de",
  AzureUsGovernment: "https://login.microsoftonline.us"
}; /*! @azure/msal-common v15.13.1 2025-10-29 */
var code_47 = "redirect_uri_empty",
  code_48 = "claims_request_parsing_error",
  code_49 = "authority_uri_insecure",
  code_50 = "url_parse_error",
  code_51 = "empty_url_error",
  code_52 = "empty_input_scopes_error",
  code_53 = "invalid_claims",
  code_54 = "token_request_empty",
  code_55 = "logout_request_empty",
  code_56 = "invalid_code_challenge_method",
  code_57 = "pkce_params_missing",
  code_58 = "invalid_cloud_discovery_metadata",
  code_59 = "invalid_authority_metadata",
  code_60 = "untrusted_authority",
  code_61 = "missing_ssh_jwk",
  code_62 = "missing_ssh_kid",
  code_63 = "missing_nonce_authentication_header",
  code_64 = "invalid_authentication_header",
  code_65 = "cannot_set_OIDCOptions",
  code_66 = "cannot_allow_platform_broker",
  code_67 = "authority_mismatch",
  code_69 = "invalid_request_method_for_EAR",
  code_68 = "invalid_authorize_post_body_parameters"; /*! @azure/msal-common v15.13.1 2025-10-29 */
var ee = {
    [code_47]: "A redirect URI is required for all calls, and none has been set.",
    [code_48]: "Could not parse the given claims request object.",
    [code_49]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
    [code_50]: "URL could not be parsed into appropriate segments.",
    [code_51]: "URL was empty or null.",
    [code_52]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
    [code_53]: "Given claims parameter must be a stringified JSON object.",
    [code_54]: "Token request was empty and not found in cache.",
    [code_55]: "The logout request was null or undefined.",
    [code_56]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
    [code_57]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
    [code_58]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
    [code_59]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
    [code_60]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
    [code_61]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
    [code_62]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
    [code_63]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
    [code_64]: "Invalid authentication header provided",
    [code_65]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
    [code_66]: "Cannot set allowPlatformBroker parameter to true when not in AAD protocol mode.",
    [code_67]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority.",
    [code_68]: "Invalid authorize post body parameters provided. If you are using authorizePostBodyParameters, the request method must be POST. Please check the request method and parameters.",
    [code_69]: "Invalid request method for EAR protocol mode. The request method cannot be GET when using EAR protocol mode. Please change the request method to POST."
  },
  zd = {
    redirectUriNotSet: {
      code: code_47,
      desc: ee[code_47]
    },
    claimsRequestParsingError: {
      code: code_48,
      desc: ee[code_48]
    },
    authorityUriInsecure: {
      code: code_49,
      desc: ee[code_49]
    },
    urlParseError: {
      code: code_50,
      desc: ee[code_50]
    },
    urlEmptyError: {
      code: code_51,
      desc: ee[code_51]
    },
    emptyScopesError: {
      code: code_52,
      desc: ee[code_52]
    },
    invalidClaimsRequest: {
      code: code_53,
      desc: ee[code_53]
    },
    tokenRequestEmptyError: {
      code: code_54,
      desc: ee[code_54]
    },
    logoutRequestEmptyError: {
      code: code_55,
      desc: ee[code_55]
    },
    invalidCodeChallengeMethod: {
      code: code_56,
      desc: ee[code_56]
    },
    invalidCodeChallengeParams: {
      code: code_57,
      desc: ee[code_57]
    },
    invalidCloudDiscoveryMetadata: {
      code: code_58,
      desc: ee[code_58]
    },
    invalidAuthorityMetadata: {
      code: code_59,
      desc: ee[code_59]
    },
    untrustedAuthority: {
      code: code_60,
      desc: ee[code_60]
    },
    missingSshJwk: {
      code: code_61,
      desc: ee[code_61]
    },
    missingSshKid: {
      code: code_62,
      desc: ee[code_62]
    },
    missingNonceAuthenticationHeader: {
      code: code_63,
      desc: ee[code_63]
    },
    invalidAuthenticationHeader: {
      code: code_64,
      desc: ee[code_64]
    },
    cannotSetOIDCOptions: {
      code: code_65,
      desc: ee[code_65]
    },
    cannotAllowPlatformBroker: {
      code: code_66,
      desc: ee[code_66]
    },
    authorityMismatch: {
      code: code_67,
      desc: ee[code_67]
    },
    invalidAuthorizePostBodyParameters: {
      code: code_68,
      desc: ee[code_68]
    },
    invalidRequestMethodForEAR: {
      code: code_69,
      desc: ee[code_69]
    }
  };
class ClientConfigurationError extends AuthError {
  constructor(e) {
    super(e, ee[e]);
    this.name = "ClientConfigurationError", Object.setPrototypeOf(this, ClientConfigurationError.prototype);
  }
}
function V(e) {
  return new ClientConfigurationError(e);
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class re {
  static isEmptyObj(e) {
    if (e) try {
      let t = JSON.parse(e);
      return Object.keys(t).length === 0;
    } catch (error) {}
    return !0;
  }
  static startsWith(e, t) {
    return e.indexOf(t) === 0;
  }
  static endsWith(e, t) {
    return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length;
  }
  static queryStringToObject(e) {
    let t = {},
      r = e.split("&"),
      n = o => decodeURIComponent(o.replace(/\+/g, " "));
    return r.forEach(item => {
      if (item.trim()) {
        let [i, s] = item.split(/=(.+)/g, 2);
        if (i && s) t[n(i)] = n(s);
      }
    }), t;
  }
  static trimArrayEntries(e) {
    return e.map(item => item.trim());
  }
  static removeEmptyStringsFromArray(e) {
    return e.filter(item => !!item);
  }
  static jsonParseHelper(e) {
    try {
      return JSON.parse(e);
    } catch (error) {
      return null;
    }
  }
  static matchPattern(e, t) {
    return new RegExp(e.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?")).test(t);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class oe {
  constructor(e) {
    let t = e ? re.trimArrayEntries([...e]) : [],
      r = t ? re.removeEmptyStringsFromArray(t) : [];
    if (!r || !r.length) throw V(code_52);
    this.scopes = new Set(), r.forEach(item => this.scopes.add(item));
  }
  static fromString(e) {
    let r = (e || f.EMPTY_STRING).split(" ");
    return new oe(r);
  }
  static createSearchScopes(e) {
    let t = e && e.length > 0 ? e : [...ye],
      r = new oe(t);
    if (!r.containsOnlyOIDCScopes()) r.removeOIDCScopes();else r.removeScope(f.OFFLINE_ACCESS_SCOPE);
    return r;
  }
  containsScope(e) {
    let t = this.printScopesLowerCase().split(" "),
      r = new oe(t);
    return e ? r.scopes.has(e.toLowerCase()) : !1;
  }
  containsScopeSet(e) {
    if (!e || e.scopes.size <= 0) return !1;
    return this.scopes.size >= e.scopes.size && e.asArray().every(item => this.containsScope(item));
  }
  containsOnlyOIDCScopes() {
    let e = 0;
    return Sa.forEach(item => {
      if (this.containsScope(item)) e += 1;
    }), this.scopes.size === e;
  }
  appendScope(e) {
    if (e) this.scopes.add(e.trim());
  }
  appendScopes(e) {
    try {
      e.forEach(item => this.appendScope(item));
    } catch (error) {
      throw g(code_23);
    }
  }
  removeScope(e) {
    if (!e) throw g(code_22);
    this.scopes.delete(e.trim());
  }
  removeOIDCScopes() {
    Sa.forEach(item => {
      this.scopes.delete(item);
    });
  }
  unionScopeSets(e) {
    if (!e) throw g(code_24);
    let t = new Set();
    return e.scopes.forEach(item => t.add(item.toLowerCase())), this.scopes.forEach(item => t.add(item.toLowerCase())), t;
  }
  intersectingScopeSets(e) {
    if (!e) throw g(code_24);
    if (!e.containsOnlyOIDCScopes()) e.removeOIDCScopes();
    let t = this.unionScopeSets(e),
      r = e.getScopeCount(),
      n = this.getScopeCount();
    return t.size < n + r;
  }
  getScopeCount() {
    return this.scopes.size;
  }
  asArray() {
    let e = [];
    return this.scopes.forEach(item => e.push(item)), e;
  }
  printScopes() {
    if (this.scopes) return this.asArray().join(" ");
    return f.EMPTY_STRING;
  }
  printScopesLowerCase() {
    return this.printScopes().toLowerCase();
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
function kn(e, t) {
  if (!e) throw g(code_5);
  try {
    let r = t(e);
    return JSON.parse(r);
  } catch (error) {
    throw g(code_4);
  }
}
function st(e) {
  if (!e) throw g(code_4);
  let t = e.split(pt.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: t[0],
    utid: t.length < 2 ? f.EMPTY_STRING : t[1]
  };
} /*! @azure/msal-common v15.13.1 2025-10-29 */
function Gd(e, t) {
  return !!e && !!t && e === t.split(".")[1];
}
function po(e, localAccountId, tenantId_2, n) {
  if (n) {
    let {
        oid: oid_2,
        sub: sub,
        tid: tid_2,
        name: name_16,
        tfp: tfp,
        acr: acr,
        preferred_username: preferred_username,
        upn: upn_2,
        login_hint: m
      } = n,
      tenantId = tid_2 || tfp || acr || "";
    return {
      tenantId: tenantId,
      localAccountId: oid_2 || sub || "",
      name: name_16,
      username: preferred_username || upn_2 || "",
      loginHint: m,
      isHomeTenant: Gd(tenantId, e)
    };
  } else return {
    tenantId: tenantId_2,
    localAccountId: localAccountId,
    username: "",
    isHomeTenant: Gd(tenantId_2, e)
  };
}
function wi(e, t, idTokenClaims, idToken) {
  let o = e;
  if (t) {
    let {
      isHomeTenant: isHomeTenant,
      ...s
    } = t;
    o = {
      ...e,
      ...s
    };
  }
  if (idTokenClaims) {
    let {
      isHomeTenant: isHomeTenant_2,
      ...s
    } = po(e.homeAccountId, e.localAccountId, e.tenantId, idTokenClaims);
    return o = {
      ...o,
      ...s,
      idTokenClaims: idTokenClaims,
      idToken: idToken
    }, o;
  }
  return o;
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var Ge = {
  Default: 0,
  Adfs: 1,
  Dsts: 2,
  Ciam: 3
}; /*! @azure/msal-common v15.13.1 2025-10-29 */
function vi(e) {
  if (e) return e.tid || e.tfp || e.acr || null;
  return null;
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var Ae = {
  AAD: "AAD",
  OIDC: "OIDC",
  EAR: "EAR"
}; /*! @azure/msal-common v15.13.1 2025-10-29 */
class fe {
  static getAccountInfo(e) {
    return {
      homeAccountId: e.homeAccountId,
      environment: e.environment,
      tenantId: e.realm,
      username: e.username,
      localAccountId: e.localAccountId,
      loginHint: e.loginHint,
      name: e.name,
      nativeAccountId: e.nativeAccountId,
      authorityType: e.authorityType,
      tenantProfiles: new Map((e.tenantProfiles || []).map(item => [item.tenantId, item])),
      dataBoundary: e.dataBoundary
    };
  }
  isSingleTenant() {
    return !this.tenantProfiles;
  }
  static createAccount(e, t, r) {
    let n = new fe();
    if (t.authorityType === Ge.Adfs) n.authorityType = ir.ADFS_ACCOUNT_TYPE;else if (t.protocolMode === Ae.OIDC) n.authorityType = ir.GENERIC_ACCOUNT_TYPE;else n.authorityType = ir.MSSTS_ACCOUNT_TYPE;
    let o;
    if (e.clientInfo && r) {
      if (o = kn(e.clientInfo, r), o.xms_tdbr) n.dataBoundary = o.xms_tdbr === "EU" ? "EU" : "None";
    }
    n.clientInfo = e.clientInfo, n.homeAccountId = e.homeAccountId, n.nativeAccountId = e.nativeAccountId;
    let i = e.environment || t && t.getPreferredCache();
    if (!i) throw g(code_30);
    n.environment = i, n.realm = o?.utid || vi(e.idTokenClaims) || "", n.localAccountId = o?.uid || e.idTokenClaims?.oid || e.idTokenClaims?.sub || "";
    let s = e.idTokenClaims?.preferred_username || e.idTokenClaims?.upn,
      a = e.idTokenClaims?.emails ? e.idTokenClaims.emails[0] : null;
    if (n.username = s || a || "", n.loginHint = e.idTokenClaims?.login_hint, n.name = e.idTokenClaims?.name || "", n.cloudGraphHostName = e.cloudGraphHostName, n.msGraphHost = e.msGraphHost, e.tenantProfiles) n.tenantProfiles = e.tenantProfiles;else {
      let c = po(e.homeAccountId, n.localAccountId, n.realm, e.idTokenClaims);
      n.tenantProfiles = [c];
    }
    return n;
  }
  static createFromAccountInfo(e, t, r) {
    let n = new fe();
    return n.authorityType = e.authorityType || ir.GENERIC_ACCOUNT_TYPE, n.homeAccountId = e.homeAccountId, n.localAccountId = e.localAccountId, n.nativeAccountId = e.nativeAccountId, n.realm = e.tenantId, n.environment = e.environment, n.username = e.username, n.name = e.name, n.loginHint = e.loginHint, n.cloudGraphHostName = t, n.msGraphHost = r, n.tenantProfiles = Array.from(e.tenantProfiles?.values() || []), n.dataBoundary = e.dataBoundary, n;
  }
  static generateHomeAccountId(e, t, r, n, o) {
    if (!(t === Ge.Adfs || t === Ge.Dsts)) {
      if (e) try {
        let i = kn(e, n.base64Decode);
        if (i.uid && i.utid) return `${i.uid}.${i.utid}`;
      } catch (error) {}
      r.warning("No client info in response");
    }
    return o?.sub || "";
  }
  static isAccountEntity(e) {
    if (!e) return !1;
    return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType");
  }
  static accountInfoIsEqual(e, t, r) {
    if (!e || !t) return !1;
    let n = !0;
    if (r) {
      let o = e.idTokenClaims || {},
        i = t.idTokenClaims || {};
      n = o.iat === i.iat && o.nonce === i.nonce;
    }
    return e.homeAccountId === t.homeAccountId && e.localAccountId === t.localAccountId && e.username === t.username && e.tenantId === t.tenantId && e.loginHint === t.loginHint && e.environment === t.environment && e.nativeAccountId === t.nativeAccountId && n;
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
function yt(e, t) {
  let r = pg(e);
  try {
    let n = t(r);
    return JSON.parse(n);
  } catch (error) {
    throw g(code_6);
  }
}
function qd(e) {
  if (!e.signin_state) return !1;
  let t = ["kmsi", "dvc_dmjd"];
  return e.signin_state.some(item => t.includes(item.trim().toLowerCase()));
}
function pg(e) {
  if (!e) throw g(code_7);
  let r = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);
  if (!r || r.length < 4) throw g(code_6);
  return r[2];
}
function ki(e, t) {
  if (t === 0 || Date.now() - 300000 > e + t) throw g(code_17);
} /*! @azure/msal-common v15.13.1 2025-10-29 */
function gg(e) {
  if (e.startsWith("#/")) return e.substring(2);else if (e.startsWith("#") || e.startsWith("?")) return e.substring(1);
  return e;
}
function ka(e) {
  if (!e || e.indexOf("=") < 0) return null;
  try {
    let t = gg(e),
      r = Object.fromEntries(new URLSearchParams(t));
    if (r.code || r.ear_jwe || r.error || r.error_description || r.state) return r;
  } catch (error) {
    throw g(code_11);
  }
  return null;
}
function pe(e, t = !0, r) {
  let n = [];
  return e.forEach((item, index) => {
    if (!t && r && index in r) n.push(`${index}=${item}`);else n.push(`${index}=${encodeURIComponent(item)}`);
  }), n.join("&");
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class x {
  get urlString() {
    return this._urlString;
  }
  constructor(e) {
    if (this._urlString = e, !this._urlString) throw V(code_51);
    if (!e.includes("#")) this._urlString = x.canonicalizeUri(e);
  }
  static canonicalizeUri(e) {
    if (e) {
      let t = e.toLowerCase();
      if (re.endsWith(t, "?")) t = t.slice(0, -1);else if (re.endsWith(t, "?/")) t = t.slice(0, -2);
      if (!re.endsWith(t, "/")) t += "/";
      return t;
    }
    return e;
  }
  validateAsUri() {
    let e;
    try {
      e = this.getUrlComponents();
    } catch (error) {
      throw V(code_50);
    }
    if (!e.HostNameAndPort || !e.PathSegments) throw V(code_50);
    if (!e.Protocol || e.Protocol.toLowerCase() !== "https:") throw V(code_49);
  }
  static appendQueryString(e, t) {
    if (!t) return e;
    return e.indexOf("?") < 0 ? `${e}?${t}` : `${e}&${t}`;
  }
  static removeHashFromUrl(e) {
    return x.canonicalizeUri(e.split("#")[0]);
  }
  replaceTenantPath(e) {
    let t = this.getUrlComponents(),
      PathSegments = t.PathSegments;
    if (e && PathSegments.length !== 0 && (PathSegments[0] === be.COMMON || PathSegments[0] === be.ORGANIZATIONS)) PathSegments[0] = e;
    return x.constructAuthorityUriFromObject(t);
  }
  getUrlComponents() {
    let e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),
      t = this.urlString.match(e);
    if (!t) throw V(code_50);
    let r = {
        Protocol: t[1],
        HostNameAndPort: t[4],
        AbsolutePath: t[5],
        QueryString: t[7]
      },
      n = r.AbsolutePath.split("/");
    if (n = n.filter(item => item && item.length > 0), r.PathSegments = n, r.QueryString && r.QueryString.endsWith("/")) r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1);
    return r;
  }
  static getDomainFromUrl(e) {
    let t = RegExp("^([^:/?#]+://)?([^/?#]*)"),
      r = e.match(t);
    if (!r) throw V(code_50);
    return r[2];
  }
  static getAbsoluteUrl(e, t) {
    if (e[0] === f.FORWARD_SLASH) {
      let n = new x(t).getUrlComponents();
      return n.Protocol + "//" + n.HostNameAndPort + e;
    }
    return e;
  }
  static constructAuthorityUriFromObject(e) {
    return new x(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"));
  }
  static hashContainsKnownProperties(e) {
    return !!ka(e);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var jd = {
    endpointMetadata: {
      "login.microsoftonline.com": {
        token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token",
        jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
        authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout"
      },
      "login.chinacloudapi.cn": {
        token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token",
        jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
        authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout"
      },
      "login.microsoftonline.us": {
        token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token",
        jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
        authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout"
      }
    },
    instanceDiscoveryMetadata: {
      metadata: [{
        preferred_network: "login.microsoftonline.com",
        preferred_cache: "login.windows.net",
        aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]
      }, {
        preferred_network: "login.partner.microsoftonline.cn",
        preferred_cache: "login.partner.microsoftonline.cn",
        aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]
      }, {
        preferred_network: "login.microsoftonline.de",
        preferred_cache: "login.microsoftonline.de",
        aliases: ["login.microsoftonline.de"]
      }, {
        preferred_network: "login.microsoftonline.us",
        preferred_cache: "login.microsoftonline.us",
        aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]
      }, {
        preferred_network: "login-us.microsoftonline.com",
        preferred_cache: "login-us.microsoftonline.com",
        aliases: ["login-us.microsoftonline.com"]
      }]
    }
  },
  {
    endpointMetadata: endpointMetadata,
    instanceDiscoveryMetadata: instanceDiscoveryMetadata
  } = jd,
  Oa = new Set();
instanceDiscoveryMetadata.metadata.forEach(item => {
  item.aliases.forEach(item => {
    Oa.add(item);
  });
});
function Yd(e, t) {
  let r,
    canonicalAuthority = e.canonicalAuthority;
  if (canonicalAuthority) {
    let HostNameAndPort = new x(canonicalAuthority).getUrlComponents().HostNameAndPort;
    r = Vd(HostNameAndPort, e.cloudDiscoveryMetadata?.metadata, Ce.CONFIG, t) || Vd(HostNameAndPort, instanceDiscoveryMetadata.metadata, Ce.HARDCODED_VALUES, t) || e.knownAuthorities;
  }
  return r || [];
}
function Vd(e, t, r, n) {
  if (n?.trace(`getAliasesFromMetadata called with source: ${r}`), e && t) {
    let o = go(t, e);
    if (o) return n?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${r}, returning aliases`), o.aliases;else n?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${r}`);
  }
  return null;
}
function Wd(e) {
  return go(instanceDiscoveryMetadata.metadata, e);
}
function go(e, t) {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n.aliases.includes(t)) return n;
  }
  return null;
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var Na = "cache_quota_exceeded",
  bi = "cache_error_unknown"; /*! @azure/msal-common v15.13.1 2025-10-29 */
var xa = {
  [Na]: "Exceeded cache storage capacity.",
  [bi]: "Unexpected error occurred when using cache storage."
};
class CacheError extends AuthError {
  constructor(e, t) {
    let r = t || (xa[e] ? xa[e] : xa[bi]);
    super(`${e}: ${r}`);
    Object.setPrototypeOf(this, CacheError.prototype), this.name = "CacheError", this.errorCode = e, this.errorMessage = r;
  }
}
function Qd(e) {
  if (!(e instanceof Error)) return new CacheError(bi);
  if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.message.includes("exceeded the quota")) return new CacheError(Na);else return new CacheError(e.name, e.message);
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class yr {
  constructor(e, t, r, n, o) {
    this.clientId = e, this.cryptoImpl = t, this.commonLogger = r.clone(pi, version), this.staticAuthorityOptions = o, this.performanceClient = n;
  }
  getAllAccounts(e, t) {
    return this.buildTenantProfiles(this.getAccountsFilteredBy(e, t), t, e);
  }
  getAccountInfoFilteredBy(e, t) {
    if (Object.keys(e).length === 0 || Object.values(e).every(item => !item)) return this.commonLogger.warning("getAccountInfoFilteredBy: Account filter is empty or invalid, returning null"), null;
    let r = this.getAllAccounts(e, t);
    if (r.length > 1) return r.sort(itemA => itemA.idTokenClaims ? -1 : 1)[0];else if (r.length === 1) return r[0];else return null;
  }
  getBaseAccountInfo(e, t) {
    let r = this.getAccountsFilteredBy(e, t);
    if (r.length > 0) return fe.getAccountInfo(r[0]);else return null;
  }
  buildTenantProfiles(e, t, r) {
    return e.flatMap(item => this.getTenantProfilesFromAccountEntity(item, t, r?.tenantId, r));
  }
  getTenantedAccountInfoByFilter(e, t, r, n, o) {
    let i = null,
      s;
    if (o) {
      if (!this.tenantProfileMatchesFilter(r, o)) return null;
    }
    let a = this.getIdToken(e, n, t, r.tenantId);
    if (a) {
      if (s = yt(a.secret, this.cryptoImpl.base64Decode), !this.idTokenClaimsMatchTenantProfileFilter(s, o)) return null;
    }
    return i = wi(e, r, s, a?.secret), i;
  }
  getTenantProfilesFromAccountEntity(e, t, r, n) {
    let o = fe.getAccountInfo(e),
      i = o.tenantProfiles || new Map(),
      s = this.getTokenKeys();
    if (r) {
      let c = i.get(r);
      if (c) i = new Map([[r, c]]);else return [];
    }
    let a = [];
    return i.forEach(item => {
      let l = this.getTenantedAccountInfoByFilter(o, s, item, t, n);
      if (l) a.push(l);
    }), a;
  }
  tenantProfileMatchesFilter(e, t) {
    if (!!t.localAccountId && !this.matchLocalAccountIdFromTenantProfile(e, t.localAccountId)) return !1;
    if (!!t.name && e.name !== t.name) return !1;
    if (t.isHomeTenant !== void 0 && e.isHomeTenant !== t.isHomeTenant) return !1;
    return !0;
  }
  idTokenClaimsMatchTenantProfileFilter(e, t) {
    if (t) {
      if (!!t.localAccountId && !this.matchLocalAccountIdFromTokenClaims(e, t.localAccountId)) return !1;
      if (!!t.loginHint && !this.matchLoginHintFromTokenClaims(e, t.loginHint)) return !1;
      if (!!t.username && !this.matchUsername(e.preferred_username, t.username)) return !1;
      if (!!t.name && !this.matchName(e, t.name)) return !1;
      if (!!t.sid && !this.matchSid(e, t.sid)) return !1;
    }
    return !0;
  }
  async saveCacheRecord(e, t, r, n) {
    if (!e) throw g(code_29);
    try {
      if (e.account) await this.setAccount(e.account, t, r);
      if (!!e.idToken && n?.idToken !== !1) await this.setIdTokenCredential(e.idToken, t, r);
      if (!!e.accessToken && n?.accessToken !== !1) await this.saveAccessToken(e.accessToken, t, r);
      if (!!e.refreshToken && n?.refreshToken !== !1) await this.setRefreshTokenCredential(e.refreshToken, t, r);
      if (e.appMetadata) this.setAppMetadata(e.appMetadata, t);
    } catch (o) {
      if (this.commonLogger?.error("CacheManager.saveCacheRecord: failed"), o instanceof AuthError) throw o;else throw Qd(o);
    }
  }
  async saveAccessToken(e, t, r) {
    let n = {
        clientId: e.clientId,
        credentialType: e.credentialType,
        environment: e.environment,
        homeAccountId: e.homeAccountId,
        realm: e.realm,
        tokenType: e.tokenType,
        requestedClaimsHash: e.requestedClaimsHash
      },
      o = this.getTokenKeys(),
      i = oe.fromString(e.target);
    o.accessToken.forEach(item => {
      if (!this.accessTokenKeyMatchesFilter(item, n, !1)) return;
      let a = this.getAccessTokenCredential(item, t);
      if (a && this.credentialMatchesFilter(a, n)) {
        if (oe.fromString(a.target).intersectingScopeSets(i)) this.removeAccessToken(item, t);
      }
    }), await this.setAccessTokenCredential(e, t, r);
  }
  getAccountsFilteredBy(e, t) {
    let r = this.getAccountKeys(),
      n = [];
    return r.forEach(item => {
      let i = this.getAccount(item, t);
      if (!i) return;
      if (!!e.homeAccountId && !this.matchHomeAccountId(i, e.homeAccountId)) return;
      if (!!e.username && !this.matchUsername(i.username, e.username)) return;
      if (!!e.environment && !this.matchEnvironment(i, e.environment)) return;
      if (!!e.realm && !this.matchRealm(i, e.realm)) return;
      if (!!e.nativeAccountId && !this.matchNativeAccountId(i, e.nativeAccountId)) return;
      if (!!e.authorityType && !this.matchAuthorityType(i, e.authorityType)) return;
      let s = {
          localAccountId: e?.localAccountId,
          name: e?.name
        },
        a = i.tenantProfiles?.filter(c => this.tenantProfileMatchesFilter(c, s));
      if (a && a.length === 0) return;
      n.push(i);
    }), n;
  }
  credentialMatchesFilter(e, t) {
    if (!!t.clientId && !this.matchClientId(e, t.clientId)) return !1;
    if (!!t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash)) return !1;
    if (typeof t.homeAccountId === "string" && !this.matchHomeAccountId(e, t.homeAccountId)) return !1;
    if (!!t.environment && !this.matchEnvironment(e, t.environment)) return !1;
    if (!!t.realm && !this.matchRealm(e, t.realm)) return !1;
    if (!!t.credentialType && !this.matchCredentialType(e, t.credentialType)) return !1;
    if (!!t.familyId && !this.matchFamilyId(e, t.familyId)) return !1;
    if (!!t.target && !this.matchTarget(e, t.target)) return !1;
    if (t.requestedClaimsHash || e.requestedClaimsHash) {
      if (e.requestedClaimsHash !== t.requestedClaimsHash) return !1;
    }
    if (e.credentialType === K.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
      if (!!t.tokenType && !this.matchTokenType(e, t.tokenType)) return !1;
      if (t.tokenType === L.SSH) {
        if (t.keyId && !this.matchKeyId(e, t.keyId)) return !1;
      }
    }
    return !0;
  }
  getAppMetadataFilteredBy(e) {
    let t = this.getKeys(),
      r = {};
    return t.forEach(item => {
      if (!this.isAppMetadata(item)) return;
      let o = this.getAppMetadata(item);
      if (!o) return;
      if (!!e.environment && !this.matchEnvironment(o, e.environment)) return;
      if (!!e.clientId && !this.matchClientId(o, e.clientId)) return;
      r[item] = o;
    }), r;
  }
  getAuthorityMetadataByAlias(e) {
    let t = this.getAuthorityMetadataKeys(),
      r = null;
    return t.forEach(item => {
      if (!this.isAuthorityMetadata(item) || item.indexOf(this.clientId) === -1) return;
      let o = this.getAuthorityMetadata(item);
      if (!o) return;
      if (o.aliases.indexOf(e) === -1) return;
      r = o;
    }), r;
  }
  removeAllAccounts(e) {
    this.getAllAccounts({}, e).forEach(item => {
      this.removeAccount(item, e);
    });
  }
  removeAccount(e, t) {
    this.removeAccountContext(e, t);
    let r = this.getAccountKeys(),
      n = o => o.includes(e.homeAccountId) && o.includes(e.environment);
    r.filter(n).forEach(item => {
      this.removeItem(item, t), this.performanceClient.incrementFields({
        accountsRemoved: 1
      }, t);
    });
  }
  removeAccountContext(e, t) {
    let r = this.getTokenKeys(),
      n = o => o.includes(e.homeAccountId) && o.includes(e.environment);
    r.idToken.filter(n).forEach(item => {
      this.removeIdToken(item, t);
    }), r.accessToken.filter(n).forEach(item => {
      this.removeAccessToken(item, t);
    }), r.refreshToken.filter(n).forEach(item => {
      this.removeRefreshToken(item, t);
    });
  }
  removeAccessToken(e, t) {
    let r = this.getAccessTokenCredential(e, t);
    if (this.removeItem(e, t), this.performanceClient.incrementFields({
      accessTokensRemoved: 1
    }, t), !r || r.credentialType.toLowerCase() !== K.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() || r.tokenType !== L.POP) return;
    let keyId = r.keyId;
    if (keyId) this.cryptoImpl.removeTokenBindingKey(keyId).catch(() => {
      this.commonLogger.error(`Failed to remove token binding key ${keyId}`, t), this.performanceClient?.incrementFields({
        removeTokenBindingKeyFailure: 1
      }, t);
    });
  }
  removeAppMetadata(e) {
    return this.getKeys().forEach(item => {
      if (this.isAppMetadata(item)) this.removeItem(item, e);
    }), !0;
  }
  getIdToken(e, t, r, realm, o) {
    this.commonLogger.trace("CacheManager - getIdToken called");
    let i = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: K.ID_TOKEN,
        clientId: this.clientId,
        realm: realm
      },
      s = this.getIdTokensByFilter(i, t, r),
      a = s.size;
    if (a < 1) return this.commonLogger.info("CacheManager:getIdToken - No token found"), null;else if (a > 1) {
      let c = s;
      if (!realm) {
        let l = new Map();
        s.forEach((item, index) => {
          if (item.realm === e.tenantId) l.set(index, item);
        });
        let d = l.size;
        if (d < 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result"), s.values().next().value;else if (d === 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile"), l.values().next().value;else c = l;
      }
      if (this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them"), c.forEach((item, index) => {
        this.removeIdToken(index, t);
      }), o && t) o.addFields({
        multiMatchedID: s.size
      }, t);
      return null;
    }
    return this.commonLogger.info("CacheManager:getIdToken - Returning ID token"), s.values().next().value;
  }
  getIdTokensByFilter(e, t, r) {
    let n = r && r.idToken || this.getTokenKeys().idToken,
      o = new Map();
    return n.forEach(item => {
      if (!this.idTokenKeyMatchesFilter(item, {
        clientId: this.clientId,
        ...e
      })) return;
      let s = this.getIdTokenCredential(item, t);
      if (s && this.credentialMatchesFilter(s, e)) o.set(item, s);
    }), o;
  }
  idTokenKeyMatchesFilter(e, t) {
    let r = e.toLowerCase();
    if (t.clientId && r.indexOf(t.clientId.toLowerCase()) === -1) return !1;
    if (t.homeAccountId && r.indexOf(t.homeAccountId.toLowerCase()) === -1) return !1;
    return !0;
  }
  removeIdToken(e, t) {
    this.removeItem(e, t);
  }
  removeRefreshToken(e, t) {
    this.removeItem(e, t);
  }
  getAccessToken(e, t, r, n) {
    let correlationId = t.correlationId;
    this.commonLogger.trace("CacheManager - getAccessToken called", correlationId);
    let target = oe.createSearchScopes(t.scopes),
      tokenType = t.authenticationScheme || L.BEARER,
      credentialType = tokenType && tokenType.toLowerCase() !== L.BEARER.toLowerCase() ? K.ACCESS_TOKEN_WITH_AUTH_SCHEME : K.ACCESS_TOKEN,
      c = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: credentialType,
        clientId: this.clientId,
        realm: n || e.tenantId,
        target: target,
        tokenType: tokenType,
        keyId: t.sshKid,
        requestedClaimsHash: t.requestedClaimsHash
      },
      l = r && r.accessToken || this.getTokenKeys().accessToken,
      d = [];
    l.forEach(item => {
      if (this.accessTokenKeyMatchesFilter(item, c, !0)) {
        let p = this.getAccessTokenCredential(item, correlationId);
        if (p && this.credentialMatchesFilter(p, c)) d.push(p);
      }
    });
    let u = d.length;
    if (u < 1) return this.commonLogger.info("CacheManager:getAccessToken - No token found", correlationId), null;else if (u > 1) return this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them", correlationId), d.forEach(item => {
      this.removeAccessToken(this.generateCredentialKey(item), correlationId);
    }), this.performanceClient.addFields({
      multiMatchedAT: d.length
    }, correlationId), null;
    return this.commonLogger.info("CacheManager:getAccessToken - Returning access token", correlationId), d[0];
  }
  accessTokenKeyMatchesFilter(e, t, r) {
    let n = e.toLowerCase();
    if (t.clientId && n.indexOf(t.clientId.toLowerCase()) === -1) return !1;
    if (t.homeAccountId && n.indexOf(t.homeAccountId.toLowerCase()) === -1) return !1;
    if (t.realm && n.indexOf(t.realm.toLowerCase()) === -1) return !1;
    if (t.requestedClaimsHash && n.indexOf(t.requestedClaimsHash.toLowerCase()) === -1) return !1;
    if (t.target) {
      let o = t.target.asArray();
      for (let i = 0; i < o.length; i++) if (r && !n.includes(o[i].toLowerCase())) return !1;else if (!r && n.includes(o[i].toLowerCase())) return !0;
    }
    return !0;
  }
  getAccessTokensByFilter(e, t) {
    let r = this.getTokenKeys(),
      n = [];
    return r.accessToken.forEach(item => {
      if (!this.accessTokenKeyMatchesFilter(item, e, !0)) return;
      let i = this.getAccessTokenCredential(item, t);
      if (i && this.credentialMatchesFilter(i, e)) n.push(i);
    }), n;
  }
  getRefreshToken(e, t, r, n, o) {
    this.commonLogger.trace("CacheManager - getRefreshToken called");
    let familyId = t ? Mt : void 0,
      s = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: K.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: familyId
      },
      a = n && n.refreshToken || this.getTokenKeys().refreshToken,
      c = [];
    a.forEach(item => {
      if (this.refreshTokenKeyMatchesFilter(item, s)) {
        let u = this.getRefreshTokenCredential(item, r);
        if (u && this.credentialMatchesFilter(u, s)) c.push(u);
      }
    });
    let multiMatchedRT = c.length;
    if (multiMatchedRT < 1) return this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null;
    if (multiMatchedRT > 1 && o && r) o.addFields({
      multiMatchedRT: multiMatchedRT
    }, r);
    return this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), c[0];
  }
  refreshTokenKeyMatchesFilter(e, t) {
    let r = e.toLowerCase();
    if (t.familyId && r.indexOf(t.familyId.toLowerCase()) === -1) return !1;
    if (!t.familyId && t.clientId && r.indexOf(t.clientId.toLowerCase()) === -1) return !1;
    if (t.homeAccountId && r.indexOf(t.homeAccountId.toLowerCase()) === -1) return !1;
    return !0;
  }
  readAppMetadataFromCache(environment) {
    let t = {
        environment: environment,
        clientId: this.clientId
      },
      r = this.getAppMetadataFilteredBy(t),
      n = Object.keys(r).map(item => r[item]),
      o = n.length;
    if (o < 1) return null;else if (o > 1) throw g(code_20);
    return n[0];
  }
  isAppMetadataFOCI(e) {
    let t = this.readAppMetadataFromCache(e);
    return !!(t && t.familyId === Mt);
  }
  matchHomeAccountId(e, t) {
    return typeof e.homeAccountId === "string" && t === e.homeAccountId;
  }
  matchLocalAccountIdFromTokenClaims(e, t) {
    let r = e.oid || e.sub;
    return t === r;
  }
  matchLocalAccountIdFromTenantProfile(e, t) {
    return e.localAccountId === t;
  }
  matchName(e, t) {
    return t.toLowerCase() === e.name?.toLowerCase();
  }
  matchUsername(e, t) {
    return !!(e && typeof e === "string" && t?.toLowerCase() === e.toLowerCase());
  }
  matchUserAssertionHash(e, t) {
    return !!(e.userAssertionHash && t === e.userAssertionHash);
  }
  matchEnvironment(e, t) {
    if (this.staticAuthorityOptions) {
      let n = Yd(this.staticAuthorityOptions, this.commonLogger);
      if (n.includes(t) && n.includes(e.environment)) return !0;
    }
    let r = this.getAuthorityMetadataByAlias(t);
    if (r && r.aliases.indexOf(e.environment) > -1) return !0;
    return !1;
  }
  matchCredentialType(e, t) {
    return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase();
  }
  matchClientId(e, t) {
    return !!(e.clientId && t === e.clientId);
  }
  matchFamilyId(e, t) {
    return !!(e.familyId && t === e.familyId);
  }
  matchRealm(e, t) {
    return e.realm?.toLowerCase() === t.toLowerCase();
  }
  matchNativeAccountId(e, t) {
    return !!(e.nativeAccountId && t === e.nativeAccountId);
  }
  matchLoginHintFromTokenClaims(e, t) {
    if (e.login_hint === t) return !0;
    if (e.preferred_username === t) return !0;
    if (e.upn === t) return !0;
    return !1;
  }
  matchSid(e, t) {
    return e.sid === t;
  }
  matchAuthorityType(e, t) {
    return !!(e.authorityType && t.toLowerCase() === e.authorityType.toLowerCase());
  }
  matchTarget(e, t) {
    if (e.credentialType !== K.ACCESS_TOKEN && e.credentialType !== K.ACCESS_TOKEN_WITH_AUTH_SCHEME || !e.target) return !1;
    return oe.fromString(e.target).containsScopeSet(t);
  }
  matchTokenType(e, t) {
    return !!(e.tokenType && e.tokenType === t);
  }
  matchKeyId(e, t) {
    return !!(e.keyId && e.keyId === t);
  }
  isAppMetadata(e) {
    return e.indexOf(ro) !== -1;
  }
  isAuthorityMetadata(e) {
    return e.indexOf(Zr.CACHE_KEY) !== -1;
  }
  generateAuthorityMetadataCacheKey(e) {
    return `${Zr.CACHE_KEY}-${this.clientId}-${e}`;
  }
  static toObject(e, t) {
    for (let r in t) e[r] = t[r];
    return e;
  }
}
class Pi extends yr {
  async setAccount() {
    throw g(M);
  }
  getAccount() {
    throw g(M);
  }
  async setIdTokenCredential() {
    throw g(M);
  }
  getIdTokenCredential() {
    throw g(M);
  }
  async setAccessTokenCredential() {
    throw g(M);
  }
  getAccessTokenCredential() {
    throw g(M);
  }
  async setRefreshTokenCredential() {
    throw g(M);
  }
  getRefreshTokenCredential() {
    throw g(M);
  }
  setAppMetadata() {
    throw g(M);
  }
  getAppMetadata() {
    throw g(M);
  }
  setServerTelemetry() {
    throw g(M);
  }
  getServerTelemetry() {
    throw g(M);
  }
  setAuthorityMetadata() {
    throw g(M);
  }
  getAuthorityMetadata() {
    throw g(M);
  }
  getAuthorityMetadataKeys() {
    throw g(M);
  }
  setThrottlingCache() {
    throw g(M);
  }
  getThrottlingCache() {
    throw g(M);
  }
  removeItem() {
    throw g(M);
  }
  getKeys() {
    throw g(M);
  }
  getAccountKeys() {
    throw g(M);
  }
  getTokenKeys() {
    throw g(M);
  }
  generateCredentialKey() {
    throw g(M);
  }
  generateAccountKey() {
    throw g(M);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var h = {
    AcquireTokenByCode: "acquireTokenByCode",
    AcquireTokenByRefreshToken: "acquireTokenByRefreshToken",
    AcquireTokenSilent: "acquireTokenSilent",
    AcquireTokenSilentAsync: "acquireTokenSilentAsync",
    AcquireTokenPopup: "acquireTokenPopup",
    AcquireTokenPreRedirect: "acquireTokenPreRedirect",
    AcquireTokenRedirect: "acquireTokenRedirect",
    CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint",
    CryptoOptsSignJwt: "cryptoOptsSignJwt",
    SilentCacheClientAcquireToken: "silentCacheClientAcquireToken",
    SilentIframeClientAcquireToken: "silentIframeClientAcquireToken",
    AwaitConcurrentIframe: "awaitConcurrentIframe",
    SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken",
    SsoSilent: "ssoSilent",
    StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority",
    FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker",
    NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken",
    BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders",
    NetworkClientSendPostRequestAsync: "networkClientSendPostRequestAsync",
    RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint",
    AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint",
    BrokerHandhshake: "brokerHandshake",
    AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker",
    AcquireTokenByBroker: "acquireTokenByBroker",
    RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest",
    RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken",
    RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken",
    RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken",
    RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody",
    AcquireTokenFromCache: "acquireTokenFromCache",
    SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken",
    SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord",
    AcquireTokenBySilentIframe: "acquireTokenBySilentIframe",
    InitializeBaseRequest: "initializeBaseRequest",
    InitializeSilentRequest: "initializeSilentRequest",
    InitializeClientApplication: "initializeClientApplication",
    InitializeCache: "initializeCache",
    SilentIframeClientTokenHelper: "silentIframeClientTokenHelper",
    SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest",
    SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash",
    SilentHandlerLoadFrame: "silentHandlerLoadFrame",
    SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync",
    StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient",
    StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration",
    StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest",
    GetAuthCodeUrl: "getAuthCodeUrl",
    GetStandardParams: "getStandardParams",
    HandleCodeResponseFromServer: "handleCodeResponseFromServer",
    HandleCodeResponse: "handleCodeResponse",
    HandleResponseEar: "handleResponseEar",
    HandleResponsePlatformBroker: "handleResponsePlatformBroker",
    HandleResponseCode: "handleResponseCode",
    UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority",
    AuthClientAcquireToken: "authClientAcquireToken",
    AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest",
    AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody",
    PopTokenGenerateCnf: "popTokenGenerateCnf",
    PopTokenGenerateKid: "popTokenGenerateKid",
    HandleServerTokenResponse: "handleServerTokenResponse",
    DeserializeResponse: "deserializeResponse",
    AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance",
    AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync",
    AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources",
    AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork",
    AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata",
    AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork",
    AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata",
    AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation",
    RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion",
    RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS",
    RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion",
    AcquireTokenByCodeAsync: "acquireTokenByCodeAsync",
    GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork",
    GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement",
    HandleRedirectPromiseMeasurement: "handleRedirectPromise",
    HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise",
    UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement",
    UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken",
    NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake",
    NativeGenerateAuthResult: "nativeGenerateAuthResult",
    RemoveHiddenIframe: "removeHiddenIframe",
    ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims",
    CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken",
    ImportExistingCache: "importExistingCache",
    SetUserData: "setUserData",
    LocalStorageUpdated: "localStorageUpdated",
    GeneratePkceCodes: "generatePkceCodes",
    GenerateCodeVerifier: "generateCodeVerifier",
    GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier",
    Sha256Digest: "sha256Digest",
    GetRandomValues: "getRandomValues",
    GenerateHKDF: "generateHKDF",
    GenerateBaseKey: "generateBaseKey",
    Base64Decode: "base64Decode",
    UrlEncodeArr: "urlEncodeArr",
    Encrypt: "encrypt",
    Decrypt: "decrypt",
    GenerateEarKey: "generateEarKey",
    DecryptEarResponse: "decryptEarResponse"
  },
  hb = new Map([[h.AcquireTokenByCode, "ATByCode"], [h.AcquireTokenByRefreshToken, "ATByRT"], [h.AcquireTokenSilent, "ATS"], [h.AcquireTokenSilentAsync, "ATSAsync"], [h.AcquireTokenPopup, "ATPopup"], [h.AcquireTokenRedirect, "ATRedirect"], [h.CryptoOptsGetPublicKeyThumbprint, "CryptoGetPKThumb"], [h.CryptoOptsSignJwt, "CryptoSignJwt"], [h.SilentCacheClientAcquireToken, "SltCacheClientAT"], [h.SilentIframeClientAcquireToken, "SltIframeClientAT"], [h.SilentRefreshClientAcquireToken, "SltRClientAT"], [h.SsoSilent, "SsoSlt"], [h.StandardInteractionClientGetDiscoveredAuthority, "StdIntClientGetDiscAuth"], [h.FetchAccountIdWithNativeBroker, "FetchAccIdWithNtvBroker"], [h.NativeInteractionClientAcquireToken, "NtvIntClientAT"], [h.BaseClientCreateTokenRequestHeaders, "BaseClientCreateTReqHead"], [h.NetworkClientSendPostRequestAsync, "NetClientSendPost"], [h.RefreshTokenClientExecutePostToTokenEndpoint, "RTClientExecPost"], [h.AuthorizationCodeClientExecutePostToTokenEndpoint, "AuthCodeClientExecPost"], [h.BrokerHandhshake, "BrokerHandshake"], [h.AcquireTokenByRefreshTokenInBroker, "ATByRTInBroker"], [h.AcquireTokenByBroker, "ATByBroker"], [h.RefreshTokenClientExecuteTokenRequest, "RTClientExecTReq"], [h.RefreshTokenClientAcquireToken, "RTClientAT"], [h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, "RTClientATWithCachedRT"], [h.RefreshTokenClientAcquireTokenByRefreshToken, "RTClientATByRT"], [h.RefreshTokenClientCreateTokenRequestBody, "RTClientCreateTReqBody"], [h.AcquireTokenFromCache, "ATFromCache"], [h.SilentFlowClientAcquireCachedToken, "SltFlowClientATCached"], [h.SilentFlowClientGenerateResultFromCacheRecord, "SltFlowClientGenResFromCache"], [h.AcquireTokenBySilentIframe, "ATBySltIframe"], [h.InitializeBaseRequest, "InitBaseReq"], [h.InitializeSilentRequest, "InitSltReq"], [h.InitializeClientApplication, "InitClientApplication"], [h.InitializeCache, "InitCache"], [h.ImportExistingCache, "importCache"], [h.SetUserData, "setUserData"], [h.LocalStorageUpdated, "localStorageUpdated"], [h.SilentIframeClientTokenHelper, "SIClientTHelper"], [h.SilentHandlerInitiateAuthRequest, "SHandlerInitAuthReq"], [h.SilentHandlerMonitorIframeForHash, "SltHandlerMonitorIframeForHash"], [h.SilentHandlerLoadFrame, "SHandlerLoadFrame"], [h.SilentHandlerLoadFrameSync, "SHandlerLoadFrameSync"], [h.StandardInteractionClientCreateAuthCodeClient, "StdIntClientCreateAuthCodeClient"], [h.StandardInteractionClientGetClientConfiguration, "StdIntClientGetClientConf"], [h.StandardInteractionClientInitializeAuthorizationRequest, "StdIntClientInitAuthReq"], [h.GetAuthCodeUrl, "GetAuthCodeUrl"], [h.HandleCodeResponseFromServer, "HandleCodeResFromServer"], [h.HandleCodeResponse, "HandleCodeResp"], [h.HandleResponseEar, "HandleRespEar"], [h.HandleResponseCode, "HandleRespCode"], [h.HandleResponsePlatformBroker, "HandleRespPlatBroker"], [h.UpdateTokenEndpointAuthority, "UpdTEndpointAuth"], [h.AuthClientAcquireToken, "AuthClientAT"], [h.AuthClientExecuteTokenRequest, "AuthClientExecTReq"], [h.AuthClientCreateTokenRequestBody, "AuthClientCreateTReqBody"], [h.PopTokenGenerateCnf, "PopTGenCnf"], [h.PopTokenGenerateKid, "PopTGenKid"], [h.HandleServerTokenResponse, "HandleServerTRes"], [h.DeserializeResponse, "DeserializeRes"], [h.AuthorityFactoryCreateDiscoveredInstance, "AuthFactCreateDiscInst"], [h.AuthorityResolveEndpointsAsync, "AuthResolveEndpointsAsync"], [h.AuthorityResolveEndpointsFromLocalSources, "AuthResolveEndpointsFromLocal"], [h.AuthorityGetCloudDiscoveryMetadataFromNetwork, "AuthGetCDMetaFromNet"], [h.AuthorityUpdateCloudDiscoveryMetadata, "AuthUpdCDMeta"], [h.AuthorityGetEndpointMetadataFromNetwork, "AuthUpdCDMetaFromNet"], [h.AuthorityUpdateEndpointMetadata, "AuthUpdEndpointMeta"], [h.AuthorityUpdateMetadataWithRegionalInformation, "AuthUpdMetaWithRegInfo"], [h.RegionDiscoveryDetectRegion, "RegDiscDetectReg"], [h.RegionDiscoveryGetRegionFromIMDS, "RegDiscGetRegFromIMDS"], [h.RegionDiscoveryGetCurrentVersion, "RegDiscGetCurrentVer"], [h.AcquireTokenByCodeAsync, "ATByCodeAsync"], [h.GetEndpointMetadataFromNetwork, "GetEndpointMetaFromNet"], [h.GetCloudDiscoveryMetadataFromNetworkMeasurement, "GetCDMetaFromNet"], [h.HandleRedirectPromiseMeasurement, "HandleRedirectPromise"], [h.HandleNativeRedirectPromiseMeasurement, "HandleNtvRedirectPromise"], [h.UpdateCloudDiscoveryMetadataMeasurement, "UpdateCDMeta"], [h.UsernamePasswordClientAcquireToken, "UserPassClientAT"], [h.NativeMessageHandlerHandshake, "NtvMsgHandlerHandshake"], [h.NativeGenerateAuthResult, "NtvGenAuthRes"], [h.RemoveHiddenIframe, "RemoveHiddenIframe"], [h.ClearTokensAndKeysWithClaims, "ClearTAndKeysWithClaims"], [h.CacheManagerGetRefreshToken, "CacheManagerGetRT"], [h.GeneratePkceCodes, "GenPkceCodes"], [h.GenerateCodeVerifier, "GenCodeVerifier"], [h.GenerateCodeChallengeFromVerifier, "GenCodeChallengeFromVerifier"], [h.Sha256Digest, "Sha256Digest"], [h.GetRandomValues, "GetRandomValues"], [h.GenerateHKDF, "genHKDF"], [h.GenerateBaseKey, "genBaseKey"], [h.Base64Decode, "b64Decode"], [h.UrlEncodeArr, "urlEncArr"], [h.Encrypt, "encrypt"], [h.Decrypt, "decrypt"], [h.GenerateEarKey, "genEarKey"], [h.DecryptEarResponse, "decryptEarResp"]]),
  Jd = {
    NotStarted: 0,
    InProgress: 1,
    Completed: 2
  }; /*! @azure/msal-common v15.13.1 2025-10-29 */
class Ma {
  startMeasurement() {
    return;
  }
  endMeasurement() {
    return;
  }
  flushMeasurement() {
    return null;
  }
}
class bn {
  generateId() {
    return "callback-id";
  }
  startMeasurement(name_17, t) {
    return {
      end: () => null,
      discard: () => {},
      add: () => {},
      increment: () => {},
      event: {
        eventId: this.generateId(),
        status: Jd.InProgress,
        authority: "",
        libraryName: "",
        libraryVersion: "",
        clientId: "",
        name: name_17,
        startTimeMs: Date.now(),
        correlationId: t || ""
      },
      measurement: new Ma()
    };
  }
  startPerformanceMeasurement() {
    return new Ma();
  }
  calculateQueuedTime() {
    return 0;
  }
  addQueueMeasurement() {
    return;
  }
  setPreQueueTime() {
    return;
  }
  endMeasurement() {
    return null;
  }
  discardMeasurements() {
    return;
  }
  removePerformanceCallback() {
    return !0;
  }
  addPerformanceCallback() {
    return "";
  }
  emitEvents() {
    return;
  }
  addFields() {
    return;
  }
  incrementFields() {
    return;
  }
  cacheEventByCorrelationId() {
    return;
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var yg = {
    tokenRenewalOffsetSeconds: tokenRenewalOffsetSeconds,
    preventCorsPreflight: !1
  },
  Tg = {
    loggerCallback: () => {},
    piiLoggingEnabled: !1,
    logLevel: G.Info,
    correlationId: f.EMPTY_STRING
  },
  Eg = {
    claimsBasedCachingEnabled: !1
  },
  Cg = {
    async sendGetRequestAsync() {
      throw g(M);
    },
    async sendPostRequestAsync() {
      throw g(M);
    }
  },
  Ag = {
    sku: f.SKU,
    version: version,
    cpu: f.EMPTY_STRING,
    os: f.EMPTY_STRING
  },
  Ig = {
    clientSecret: f.EMPTY_STRING,
    clientAssertion: void 0
  },
  azureCloudOptions = {
    azureCloudInstance: Ft.None,
    tenant: `${f.DEFAULT_COMMON_TENANT}`
  },
  Sg = {
    application: {
      appName: "",
      appVersion: ""
    }
  };
function Xd({
  authOptions: authOptions,
  systemOptions: systemOptions,
  loggerOptions: loggerOptions,
  cacheOptions: cacheOptions,
  storageInterface: storageInterface,
  networkInterface: networkInterface,
  cryptoInterface: cryptoInterface,
  clientCredentials: clientCredentials,
  libraryInfo: libraryInfo,
  telemetry: telemetry,
  serverTelemetryManager: serverTelemetryManager,
  persistencePlugin: persistencePlugin,
  serializableCache: serializableCache
}) {
  let loggerOptions_2 = {
    ...Tg,
    ...loggerOptions
  };
  return {
    authOptions: Rg(authOptions),
    systemOptions: {
      ...yg,
      ...systemOptions
    },
    loggerOptions: loggerOptions_2,
    cacheOptions: {
      ...Eg,
      ...cacheOptions
    },
    storageInterface: storageInterface || new Pi(authOptions.clientId, Tn, new Le(loggerOptions_2), new bn()),
    networkInterface: networkInterface || Cg,
    cryptoInterface: cryptoInterface || Tn,
    clientCredentials: clientCredentials || Ig,
    libraryInfo: {
      ...Ag,
      ...libraryInfo
    },
    telemetry: {
      ...Sg,
      ...telemetry
    },
    serverTelemetryManager: serverTelemetryManager || null,
    persistencePlugin: persistencePlugin || null,
    serializableCache: serializableCache || null
  };
}
function Rg(e) {
  return {
    clientCapabilities: [],
    azureCloudOptions: azureCloudOptions,
    skipAuthorityMetadataCache: !1,
    instanceAware: !1,
    encodeExtraQueryParams: !1,
    ...e
  };
}
function Oi(e) {
  return e.authOptions.authority.options.protocolMode === Ae.OIDC;
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var Ie = {
  HOME_ACCOUNT_ID: "home_account_id",
  UPN: "UPN"
}; /*! @azure/msal-common v15.13.1 2025-10-29 */
var Tt = "client_id",
  Da = "redirect_uri",
  Zd = "response_type",
  eu = "response_mode",
  tu = "grant_type",
  ru = "claims",
  nu = "scope";
var ou = "refresh_token";
var iu = "state",
  su = "nonce",
  au = "prompt";
var cu = "code",
  lu = "code_challenge",
  du = "code_challenge_method",
  uu = "code_verifier",
  hu = "client-request-id",
  fu = "x-client-SKU",
  mu = "x-client-VER",
  pu = "x-client-OS",
  gu = "x-client-CPU",
  yu = "x-client-current-telemetry",
  Tu = "x-client-last-telemetry",
  Eu = "x-ms-lib-capability",
  Cu = "x-app-name",
  Au = "x-app-ver",
  Iu = "post_logout_redirect_uri",
  _u = "id_token_hint",
  Su = "device_code",
  Ru = "client_secret",
  wu = "client_assertion",
  vu = "client_assertion_type",
  Ua = "token_type",
  La = "req_cnf",
  ku = "assertion",
  bu = "requested_token_use",
  wg = "on_behalf_of";
var Ha = "return_spa_code";
var Pu = "logout_hint",
  Ou = "sid",
  Nu = "login_hint",
  xu = "domain_hint",
  Mu = "x-client-xtra-sku",
  Ni = "brk_client_id",
  Fa = "brk_redirect_uri",
  To = "instance_aware"; /*! @azure/msal-common v15.13.1 2025-10-29 */
function Pn(e, t, r) {
  if (!t) return;
  let embeddedClientId = e.get(Tt);
  if (embeddedClientId && e.has(Ni)) r?.addFields({
    embeddedClientId: embeddedClientId,
    embeddedRedirectUri: e.get(Da)
  }, t);
}
function Du(e, t) {
  e.set(Zd, t);
}
function Uu(e, t) {
  e.set(eu, t ? t : mt.QUERY);
}
function Qe(e, t, r = !0, n = ye) {
  if (r && !n.includes("openid") && !t.includes("openid")) n.push("openid");
  let o = r ? [...(t || []), ...n] : t || [],
    i = new oe(o);
  e.set(nu, i.printScopes());
}
function Je(e, t) {
  e.set(Tt, t);
}
function On(e, t) {
  e.set(Da, t);
}
function Lu(e, t) {
  e.set(Iu, t);
}
function Hu(e, t) {
  e.set(_u, t);
}
function Fu(e, t) {
  e.set(xu, t);
}
function Eo(e, t) {
  e.set(Nu, t);
}
function Bt(e, t) {
  e.set(Y.CCS_HEADER, `UPN:${t}`);
}
function zt(e, t) {
  e.set(Y.CCS_HEADER, `Oid:${t.uid}@${t.utid}`);
}
function Ba(e, t) {
  e.set(Ou, t);
}
function Xe(e, t, r) {
  let n = Og(t, r);
  try {
    JSON.parse(n);
  } catch (error) {
    throw V(code_53);
  }
  e.set(ru, n);
}
function at(e, t) {
  e.set(hu, t);
}
function Et(e, t) {
  if (e.set(fu, t.sku), e.set(mu, t.version), t.os) e.set(pu, t.os);
  if (t.cpu) e.set(gu, t.cpu);
}
function Ct(e, t) {
  if (t?.appName) e.set(Cu, t.appName);
  if (t?.appVersion) e.set(Au, t.appVersion);
}
function $u(e, t) {
  e.set(au, t);
}
function xi(e, t) {
  if (t) e.set(iu, t);
}
function Bu(e, t) {
  e.set(su, t);
}
function vg(e, t, r) {
  if (t && r) e.set(lu, t), e.set(du, r);else throw V(code_57);
}
function zu(e, t) {
  e.set(cu, t);
}
function kg(e, t) {
  e.set(Su, t);
}
function Gu(e, t) {
  e.set(ou, t);
}
function qu(e, t) {
  e.set(uu, t);
}
function Tr(e, t) {
  e.set(Ru, t);
}
function Er(e, t) {
  if (t) e.set(wu, t);
}
function Cr(e, t) {
  if (t) e.set(vu, t);
}
function bg(e, t) {
  e.set(ku, t);
}
function Pg(e, t) {
  e.set(bu, t);
}
function Gt(e, t) {
  e.set(tu, t);
}
function At(e) {
  e.set(Fd, "1");
}
function Mi(e) {
  if (!e.has(To)) e.set(To, "true");
}
function He(e, t) {
  Object.entries(t).forEach(([r, n]) => {
    if (!e.has(r) && n) e.set(r, n);
  });
}
function Og(e, values) {
  let r;
  if (!e) r = {};else try {
    r = JSON.parse(e);
  } catch (error) {
    throw V(code_53);
  }
  if (values && values.length > 0) {
    if (!r.hasOwnProperty(nr.ACCESS_TOKEN)) r[nr.ACCESS_TOKEN] = {};
    r[nr.ACCESS_TOKEN][nr.XMS_CC] = {
      values: values
    };
  }
  return JSON.stringify(r);
}
function Ng(e, t) {
  e.set(oo.username, t);
}
function xg(e, t) {
  e.set(oo.password, t);
}
function Di(e, t) {
  if (t) e.set(Ua, L.POP), e.set(La, t);
}
function Ui(e, t) {
  if (t) e.set(Ua, L.SSH), e.set(La, t);
}
function qt(e, t) {
  e.set(yu, t.generateCurrentRequestHeaderValue()), e.set(Tu, t.generateLastRequestHeaderValue());
}
function Kt(e) {
  e.set(Eu, ot.X_MS_LIB_CAPABILITY_VALUE);
}
function Ku(e, t) {
  e.set(Pu, t);
}
function Vt(e, t, r) {
  if (!e.has(Ni)) e.set(Ni, t);
  if (!e.has(Fa)) e.set(Fa, r);
} /*! @azure/msal-common v15.13.1 2025-10-29 */
function Vu(e) {
  return e.hasOwnProperty("authorization_endpoint") && e.hasOwnProperty("token_endpoint") && e.hasOwnProperty("issuer") && e.hasOwnProperty("jwks_uri");
} /*! @azure/msal-common v15.13.1 2025-10-29 */
function ju(e) {
  return e.hasOwnProperty("tenant_discovery_endpoint") && e.hasOwnProperty("metadata");
} /*! @azure/msal-common v15.13.1 2025-10-29 */
function Yu(e) {
  return e.hasOwnProperty("error") && e.hasOwnProperty("error_description");
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var Wu = (e, t, r, n, o) => (...i) => {
    r.trace(`Executing function ${t}`);
    let s = n?.startMeasurement(t, o);
    if (o) {
      let a = t + "CallCount";
      n?.incrementFields({
        [a]: 1
      }, o);
    }
    try {
      let a = e(...i);
      return s?.end({
        success: !0
      }), r.trace(`Returning result from ${t}`), a;
    } catch (error) {
      r.trace(`Error occurred in ${t}`);
      try {
        r.trace(JSON.stringify(error));
      } catch (error) {
        r.trace("Unable to print error message.");
      }
      throw s?.end({
        success: !1
      }, error), error;
    }
  },
  F = (e, t, r, n, o) => (...i) => {
    r.trace(`Executing function ${t}`);
    let s = n?.startMeasurement(t, o);
    if (o) {
      let a = t + "CallCount";
      n?.incrementFields({
        [a]: 1
      }, o);
    }
    return n?.setPreQueueTime(t, o), e(...i).then(a => (r.trace(`Returning result from ${t}`), s?.end({
      success: !0
    }), a)).catch(a => {
      r.trace(`Error occurred in ${t}`);
      try {
        r.trace(JSON.stringify(a));
      } catch (error) {
        r.trace("Unable to print error message.");
      }
      throw s?.end({
        success: !1
      }, a), a;
    });
  }; /*! @azure/msal-common v15.13.1 2025-10-29 */
class Co {
  constructor(e, t, r, n) {
    this.networkInterface = e, this.logger = t, this.performanceClient = r, this.correlationId = n;
  }
  async detectRegion(e, t) {
    this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryDetectRegion, this.correlationId);
    let r = e;
    if (!r) {
      let IMDS_OPTIONS = Co.IMDS_OPTIONS;
      try {
        let o = await F(this.getRegionFromIMDS.bind(this), h.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(f.IMDS_VERSION, IMDS_OPTIONS);
        if (o.status === P.SUCCESS) r = o.body, t.region_source = sr.IMDS;
        if (o.status === P.BAD_REQUEST) {
          let i = await F(this.getCurrentVersion.bind(this), h.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(IMDS_OPTIONS);
          if (!i) return t.region_source = sr.FAILED_AUTO_DETECTION, null;
          let s = await F(this.getRegionFromIMDS.bind(this), h.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(i, IMDS_OPTIONS);
          if (s.status === P.SUCCESS) r = s.body, t.region_source = sr.IMDS;
        }
      } catch (error) {
        return t.region_source = sr.FAILED_AUTO_DETECTION, null;
      }
    } else t.region_source = sr.ENVIRONMENT_VARIABLE;
    if (!r) t.region_source = sr.FAILED_AUTO_DETECTION;
    return r || null;
  }
  async getRegionFromIMDS(e, t) {
    return this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryGetRegionFromIMDS, this.correlationId), this.networkInterface.sendGetRequestAsync(`${f.IMDS_ENDPOINT}?api-version=${e}&format=text`, t, f.IMDS_TIMEOUT);
  }
  async getCurrentVersion(e) {
    this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryGetCurrentVersion, this.correlationId);
    try {
      let t = await this.networkInterface.sendGetRequestAsync(`${f.IMDS_ENDPOINT}?format=json`, e);
      if (t.status === P.BAD_REQUEST && t.body && t.body["newest-versions"] && t.body["newest-versions"].length > 0) return t.body["newest-versions"][0];
      return null;
    } catch (error) {
      return null;
    }
  }
}
Co.IMDS_OPTIONS = {
  headers: {
    Metadata: "true"
  }
}; /*! @azure/msal-common v15.13.1 2025-10-29 */
function Q() {
  return Math.round(new Date().getTime() / 1000);
}
function Li(e) {
  if (e) return new Date(Number(e) * 1000);
  return new Date();
}
function jt(e, t) {
  let r = Number(e) || 0;
  return Q() + t > r;
}
function Qu(e) {
  return Number(e) > Q();
}
function Mg(e, t) {
  return new Promise(r => setTimeout(() => r(t), e));
} /*! @azure/msal-common v15.13.1 2025-10-29 */
function Ju(homeAccountId, environment_2, secret, clientId, realm_2) {
  return {
    credentialType: K.ID_TOKEN,
    homeAccountId: homeAccountId,
    environment: environment_2,
    clientId: clientId,
    secret: secret,
    realm: realm_2,
    lastUpdatedAt: Date.now().toString()
  };
}
function Xu(homeAccountId_2, environment_3, secret_2, clientId_2, realm_3, target_2, s, a, c, l, d, u, m, p, y) {
  let T = {
    homeAccountId: homeAccountId_2,
    credentialType: K.ACCESS_TOKEN,
    secret: secret_2,
    cachedAt: Q().toString(),
    expiresOn: s.toString(),
    extendedExpiresOn: a.toString(),
    environment: environment_3,
    clientId: clientId_2,
    realm: realm_3,
    target: target_2,
    tokenType: d || L.BEARER,
    lastUpdatedAt: Date.now().toString()
  };
  if (u) T.userAssertionHash = u;
  if (l) T.refreshOn = l.toString();
  if (p) T.requestedClaims = p, T.requestedClaimsHash = y;
  if (T.tokenType?.toLowerCase() !== L.BEARER.toLowerCase()) switch (T.credentialType = K.ACCESS_TOKEN_WITH_AUTH_SCHEME, T.tokenType) {
    case L.POP:
      let I = yt(secret_2, c);
      if (!I?.cnf?.kid) throw g(code_38);
      T.keyId = I.cnf.kid;
      break;
    case L.SSH:
      T.keyId = m;
  }
  return T;
}
function Zu(homeAccountId_3, environment_4, secret_3, clientId_3, o, i, s) {
  let a = {
    credentialType: K.REFRESH_TOKEN,
    homeAccountId: homeAccountId_3,
    environment: environment_4,
    clientId: clientId_3,
    secret: secret_3,
    lastUpdatedAt: Date.now().toString()
  };
  if (i) a.userAssertionHash = i;
  if (o) a.familyId = o;
  if (s) a.expiresOn = s.toString();
  return a;
}
function za(e) {
  return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("credentialType") && e.hasOwnProperty("clientId") && e.hasOwnProperty("secret");
}
function eh(e) {
  if (!e) return !1;
  return za(e) && e.hasOwnProperty("realm") && e.hasOwnProperty("target") && (e.credentialType === K.ACCESS_TOKEN || e.credentialType === K.ACCESS_TOKEN_WITH_AUTH_SCHEME);
}
function th(e) {
  if (!e) return !1;
  return za(e) && e.hasOwnProperty("realm") && e.credentialType === K.ID_TOKEN;
}
function rh(e) {
  if (!e) return !1;
  return za(e) && e.credentialType === K.REFRESH_TOKEN;
}
function Dg(e, t) {
  let r = e.indexOf(de.CACHE_KEY) === 0,
    n = !0;
  if (t) n = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits");
  return r && n;
}
function Ug(e, t) {
  let r = !1;
  if (e) r = e.indexOf(ot.THROTTLING_PREFIX) === 0;
  let n = !0;
  if (t) n = t.hasOwnProperty("throttleTime");
  return r && n;
}
function Lg({
  environment: environment_5,
  clientId: clientId_4
}) {
  return [ro, environment_5, clientId_4].join(pt.CACHE_KEY_SEPARATOR).toLowerCase();
}
function nh(e, t) {
  if (!t) return !1;
  return e.indexOf(ro) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment");
}
function Hg(e, t) {
  if (!t) return !1;
  return e.indexOf(Zr.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri");
}
function Ga() {
  return Q() + Zr.REFRESH_TIME_SECONDS;
}
function Ao(e, t, r) {
  e.authorization_endpoint = t.authorization_endpoint, e.token_endpoint = t.token_endpoint, e.end_session_endpoint = t.end_session_endpoint, e.issuer = t.issuer, e.endpointsFromNetwork = r, e.jwks_uri = t.jwks_uri;
}
function Hi(e, t, r) {
  e.aliases = t.aliases, e.preferred_cache = t.preferred_cache, e.preferred_network = t.preferred_network, e.aliasesFromNetwork = r;
}
function qa(e) {
  return e.expiresAt <= Q();
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class ue {
  constructor(e, t, r, n, o, i, s, a) {
    this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = r, this.authorityOptions = n, this.regionDiscoveryMetadata = {
      region_used: void 0,
      region_source: void 0,
      region_outcome: void 0
    }, this.logger = o, this.performanceClient = s, this.correlationId = i, this.managedIdentity = a || !1, this.regionDiscovery = new Co(t, this.logger, this.performanceClient, this.correlationId);
  }
  getAuthorityType(e) {
    if (e.HostNameAndPort.endsWith(f.CIAM_AUTH_URL)) return Ge.Ciam;
    let PathSegments_2 = e.PathSegments;
    if (PathSegments_2.length) switch (PathSegments_2[0].toLowerCase()) {
      case f.ADFS:
        return Ge.Adfs;
      case f.DSTS:
        return Ge.Dsts;
    }
    return Ge.Default;
  }
  get authorityType() {
    return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
  }
  get protocolMode() {
    return this.authorityOptions.protocolMode;
  }
  get options() {
    return this.authorityOptions;
  }
  get canonicalAuthority() {
    return this._canonicalAuthority.urlString;
  }
  set canonicalAuthority(e) {
    this._canonicalAuthority = new x(e), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null;
  }
  get canonicalAuthorityUrlComponents() {
    if (!this._canonicalAuthorityUrlComponents) this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
    return this._canonicalAuthorityUrlComponents;
  }
  get hostnameAndPort() {
    return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
  }
  get tenant() {
    return this.canonicalAuthorityUrlComponents.PathSegments[0];
  }
  get authorizationEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.authorization_endpoint);else throw g(code_8);
  }
  get tokenEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint);else throw g(code_8);
  }
  get deviceCodeEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));else throw g(code_8);
  }
  get endSessionEndpoint() {
    if (this.discoveryComplete()) {
      if (!this.metadata.end_session_endpoint) throw g(code_41);
      return this.replacePath(this.metadata.end_session_endpoint);
    } else throw g(code_8);
  }
  get selfSignedJwtAudience() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.issuer);else throw g(code_8);
  }
  get jwksUri() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.jwks_uri);else throw g(code_8);
  }
  canReplaceTenant(e) {
    return e.PathSegments.length === 1 && !ue.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === Ge.Default && this.protocolMode !== Ae.OIDC;
  }
  replaceTenant(e) {
    return e.replace(/{tenant}|{tenantid}/g, this.tenant);
  }
  replacePath(e) {
    let t = e,
      n = new x(this.metadata.canonical_authority).getUrlComponents(),
      PathSegments_3 = n.PathSegments;
    return this.canonicalAuthorityUrlComponents.PathSegments.forEach((item, index) => {
      let c = PathSegments_3[index];
      if (index === 0 && this.canReplaceTenant(n)) {
        let l = new x(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
        if (c !== l) this.logger.verbose(`Replacing tenant domain name ${c} with id ${l}`), c = l;
      }
      if (item !== c) t = t.replace(`/${c}/`, `/${item}/`);
    }), this.replaceTenant(t);
  }
  get defaultOpenIdConfigurationEndpoint() {
    let hostnameAndPort = this.hostnameAndPort;
    if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === Ge.Adfs || this.protocolMode === Ae.OIDC && !this.isAliasOfKnownMicrosoftAuthority(hostnameAndPort)) return `${this.canonicalAuthority}.well-known/openid-configuration`;
    return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
  }
  discoveryComplete() {
    return !!this.metadata;
  }
  async resolveEndpointsAsync() {
    this.performanceClient?.addQueueMeasurement(h.AuthorityResolveEndpointsAsync, this.correlationId);
    let e = this.getCurrentMetadataEntity(),
      cloudDiscoverySource = await F(this.updateCloudDiscoveryMetadata.bind(this), h.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(e);
    this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, e.preferred_network);
    let r = await F(this.updateEndpointMetadata.bind(this), h.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(e);
    this.updateCachedMetadata(e, cloudDiscoverySource, {
      source: r
    }), this.performanceClient?.addFields({
      cloudDiscoverySource: cloudDiscoverySource,
      authorityEndpointSource: r
    }, this.correlationId);
  }
  getCurrentMetadataEntity() {
    let e = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
    if (!e) e = {
      aliases: [],
      preferred_cache: this.hostnameAndPort,
      preferred_network: this.hostnameAndPort,
      canonical_authority: this.canonicalAuthority,
      authorization_endpoint: "",
      token_endpoint: "",
      end_session_endpoint: "",
      issuer: "",
      aliasesFromNetwork: !1,
      endpointsFromNetwork: !1,
      expiresAt: Ga(),
      jwks_uri: ""
    };
    return e;
  }
  updateCachedMetadata(e, t, r) {
    if (t !== Ce.CACHE && r?.source !== Ce.CACHE) e.expiresAt = Ga(), e.canonical_authority = this.canonicalAuthority;
    let n = this.cacheManager.generateAuthorityMetadataCacheKey(e.preferred_cache);
    this.cacheManager.setAuthorityMetadata(n, e), this.metadata = e;
  }
  async updateEndpointMetadata(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateEndpointMetadata, this.correlationId);
    let t = this.updateEndpointMetadataFromLocalSources(e);
    if (t) {
      if (t.source === Ce.HARDCODED_VALUES) {
        if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
          if (t.metadata) {
            let n = await F(this.updateMetadataWithRegionalInformation.bind(this), h.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(t.metadata);
            Ao(e, n, !1), e.canonical_authority = this.canonicalAuthority;
          }
        }
      }
      return t.source;
    }
    let r = await F(this.getEndpointMetadataFromNetwork.bind(this), h.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (r) {
      if (this.authorityOptions.azureRegionConfiguration?.azureRegion) r = await F(this.updateMetadataWithRegionalInformation.bind(this), h.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(r);
      return Ao(e, r, !0), Ce.NETWORK;
    } else throw g(code_10, this.defaultOpenIdConfigurationEndpoint);
  }
  updateEndpointMetadataFromLocalSources(e) {
    this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
    let t = this.getEndpointMetadataFromConfig();
    if (t) return this.logger.verbose("Found endpoint metadata in authority configuration"), Ao(e, t, !1), {
      source: Ce.CONFIG
    };
    if (this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values."), this.authorityOptions.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");else {
      let metadata = this.getEndpointMetadataFromHardcodedValues();
      if (metadata) return Ao(e, metadata, !1), {
        source: Ce.HARDCODED_VALUES,
        metadata: metadata
      };else this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.");
    }
    let r = qa(e);
    if (this.isAuthoritySameType(e) && e.endpointsFromNetwork && !r) return this.logger.verbose("Found endpoint metadata in the cache."), {
      source: Ce.CACHE
    };else if (r) this.logger.verbose("The metadata entity is expired.");
    return null;
  }
  isAuthoritySameType(e) {
    return new x(e.canonical_authority).getUrlComponents().PathSegments.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
  }
  getEndpointMetadataFromConfig() {
    if (this.authorityOptions.authorityMetadata) try {
      return JSON.parse(this.authorityOptions.authorityMetadata);
    } catch (error) {
      throw V(code_59);
    }
    return null;
  }
  async getEndpointMetadataFromNetwork() {
    this.performanceClient?.addQueueMeasurement(h.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
    let e = {},
      defaultOpenIdConfigurationEndpoint = this.defaultOpenIdConfigurationEndpoint;
    this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${defaultOpenIdConfigurationEndpoint}`);
    try {
      let r = await this.networkInterface.sendGetRequestAsync(defaultOpenIdConfigurationEndpoint, e);
      if (Vu(r.body)) return r.body;else return this.logger.verbose("Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration"), null;
    } catch (error) {
      return this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${error}`), null;
    }
  }
  getEndpointMetadataFromHardcodedValues() {
    if (this.hostnameAndPort in endpointMetadata) return endpointMetadata[this.hostnameAndPort];
    return null;
  }
  async updateMetadataWithRegionalInformation(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
    let t = this.authorityOptions.azureRegionConfiguration?.azureRegion;
    if (t) {
      if (t !== f.AZURE_REGION_AUTO_DISCOVER_FLAG) return this.regionDiscoveryMetadata.region_outcome = ni.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = t, ue.replaceWithRegionalInformation(e, t);
      let r = await F(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), h.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
      if (r) return this.regionDiscoveryMetadata.region_outcome = ni.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = r, ue.replaceWithRegionalInformation(e, r);
      this.regionDiscoveryMetadata.region_outcome = ni.AUTO_DETECTION_REQUESTED_FAILED;
    }
    return e;
  }
  async updateCloudDiscoveryMetadata(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
    let t = this.updateCloudDiscoveryMetadataFromLocalSources(e);
    if (t) return t;
    let r = await F(this.getCloudDiscoveryMetadataFromNetwork.bind(this), h.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (r) return Hi(e, r, !0), Ce.NETWORK;
    throw V(code_60);
  }
  updateCloudDiscoveryMetadataFromLocalSources(e) {
    this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration"), this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities || f.NOT_APPLICABLE}`), this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata || f.NOT_APPLICABLE}`), this.logger.verbosePii(`Canonical Authority: ${e.canonical_authority || f.NOT_APPLICABLE}`);
    let t = this.getCloudDiscoveryMetadataFromConfig();
    if (t) return this.logger.verbose("Found cloud discovery metadata in authority configuration"), Hi(e, t, !1), Ce.CONFIG;
    if (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values."), this.options.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");else {
      let n = Wd(this.hostnameAndPort);
      if (n) return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), Hi(e, n, !1), Ce.HARDCODED_VALUES;
      this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.");
    }
    let r = qa(e);
    if (this.isAuthoritySameType(e) && e.aliasesFromNetwork && !r) return this.logger.verbose("Found cloud discovery metadata in the cache."), Ce.CACHE;else if (r) this.logger.verbose("The metadata entity is expired.");
    return null;
  }
  getCloudDiscoveryMetadataFromConfig() {
    if (this.authorityType === Ge.Ciam) return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), ue.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    if (this.authorityOptions.cloudDiscoveryMetadata) {
      this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
      try {
        this.logger.verbose("Attempting to parse the cloud discovery metadata.");
        let e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata),
          t = go(e.metadata, this.hostnameAndPort);
        if (this.logger.verbose("Parsed the cloud discovery metadata."), t) return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), t;else this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
      } catch (error) {
        throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), V(code_58);
      }
    }
    if (this.isInKnownAuthorities()) return this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), ue.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    return null;
  }
  async getCloudDiscoveryMetadataFromNetwork() {
    this.performanceClient?.addQueueMeasurement(h.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
    let e = `${f.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`,
      t = {},
      r = null;
    try {
      let n = await this.networkInterface.sendGetRequestAsync(e, t),
        o,
        i;
      if (ju(n.body)) o = n.body, i = o.metadata, this.logger.verbosePii(`tenant_discovery_endpoint is: ${o.tenant_discovery_endpoint}`);else if (Yu(n.body)) {
        if (this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${n.status}`), o = n.body, o.error === f.INVALID_INSTANCE) return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), null;
        this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${o.error}`), this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${o.error_description}`), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), i = [];
      } else return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), null;
      this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), r = go(i, this.hostnameAndPort);
    } catch (n) {
      if (n instanceof AuthError) this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${n.errorCode}
Error Description: ${n.errorMessage}`);else {
        let o = n;
        this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${o.name}
Error Description: ${o.message}`);
      }
      return null;
    }
    if (!r) this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), r = ue.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    return r;
  }
  isInKnownAuthorities() {
    return this.authorityOptions.knownAuthorities.filter(item => item && x.getDomainFromUrl(item).toLowerCase() === this.hostnameAndPort).length > 0;
  }
  static generateAuthority(e, t) {
    let r;
    if (t && t.azureCloudInstance !== Ft.None) {
      let n = t.tenant ? t.tenant : f.DEFAULT_COMMON_TENANT;
      r = `${t.azureCloudInstance}/${n}/`;
    }
    return r ? r : e;
  }
  static createCloudDiscoveryMetadataFromHost(e) {
    return {
      preferred_network: e,
      preferred_cache: e,
      aliases: [e]
    };
  }
  getPreferredCache() {
    if (this.managedIdentity) return f.DEFAULT_AUTHORITY_HOST;else if (this.discoveryComplete()) return this.metadata.preferred_cache;else throw g(code_8);
  }
  isAlias(e) {
    return this.metadata.aliases.indexOf(e) > -1;
  }
  isAliasOfKnownMicrosoftAuthority(e) {
    return Oa.has(e);
  }
  static isPublicCloudAuthority(e) {
    return f.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
  }
  static buildRegionalAuthorityString(e, t, r) {
    let n = new x(e);
    n.validateAsUri();
    let o = n.getUrlComponents(),
      HostNameAndPort_2 = `${t}.${o.HostNameAndPort}`;
    if (this.isPublicCloudAuthority(o.HostNameAndPort)) HostNameAndPort_2 = `${t}.${f.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
    let urlString = x.constructAuthorityUriFromObject({
      ...n.getUrlComponents(),
      HostNameAndPort: HostNameAndPort_2
    }).urlString;
    if (r) return `${urlString}?${r}`;
    return urlString;
  }
  static replaceWithRegionalInformation(e, t) {
    let r = {
      ...e
    };
    if (r.authorization_endpoint = ue.buildRegionalAuthorityString(r.authorization_endpoint, t), r.token_endpoint = ue.buildRegionalAuthorityString(r.token_endpoint, t), r.end_session_endpoint) r.end_session_endpoint = ue.buildRegionalAuthorityString(r.end_session_endpoint, t);
    return r;
  }
  static transformCIAMAuthority(e) {
    let t = e,
      n = new x(e).getUrlComponents();
    if (n.PathSegments.length === 0 && n.HostNameAndPort.endsWith(f.CIAM_AUTH_URL)) {
      let o = n.HostNameAndPort.split(".")[0];
      t = `${t}${o}${f.AAD_TENANT_DOMAIN_SUFFIX}`;
    }
    return t;
  }
}
ue.reservedTenantDomains = new Set(["{tenant}", "{tenantid}", be.COMMON, be.CONSUMERS, be.ORGANIZATIONS]);
function ih(e) {
  let n = new x(e).getUrlComponents().PathSegments.slice(-1)[0]?.toLowerCase();
  switch (n) {
    case be.COMMON:
    case be.ORGANIZATIONS:
    case be.CONSUMERS:
      return;
    default:
      return n;
  }
}
function Fi(e) {
  return e.endsWith(f.FORWARD_SLASH) ? e : `${e}${f.FORWARD_SLASH}`;
}
function Ka(e) {
  let cloudDiscoveryMetadata = e.cloudDiscoveryMetadata,
    cloudDiscoveryMetadata_2 = void 0;
  if (cloudDiscoveryMetadata) try {
    cloudDiscoveryMetadata_2 = JSON.parse(cloudDiscoveryMetadata);
  } catch (error) {
    throw V(code_58);
  }
  return {
    canonicalAuthority: e.authority ? Fi(e.authority) : void 0,
    knownAuthorities: e.knownAuthorities,
    cloudDiscoveryMetadata: cloudDiscoveryMetadata_2
  };
} /*! @azure/msal-common v15.13.1 2025-10-29 */
async function Va(e, t, r, n, o, i, s) {
  s?.addQueueMeasurement(h.AuthorityFactoryCreateDiscoveredInstance, i);
  let a = ue.transformCIAMAuthority(Fi(e)),
    c = new ue(a, t, r, n, o, i, s);
  try {
    return await F(c.resolveEndpointsAsync.bind(c), h.AuthorityResolveEndpointsAsync, o, s, i)(), c;
  } catch (error) {
    throw g(code_8);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class ServerError extends AuthError {
  constructor(e, t, r, n, o) {
    super(e, t, r);
    this.name = "ServerError", this.errorNo = n, this.status = o, Object.setPrototypeOf(this, ServerError.prototype);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
function Nn(clientId_5, t, homeAccountIdentifier) {
  return {
    clientId: clientId_5,
    authority: t.authority,
    scopes: t.scopes,
    homeAccountIdentifier: homeAccountIdentifier,
    claims: t.claims,
    authenticationScheme: t.authenticationScheme,
    resourceRequestMethod: t.resourceRequestMethod,
    resourceRequestUri: t.resourceRequestUri,
    shrClaims: t.shrClaims,
    sshKid: t.sshKid,
    embeddedClientId: t.embeddedClientId || t.tokenBodyParameters?.clientId
  };
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class It {
  static generateThrottlingStorageKey(e) {
    return `${ot.THROTTLING_PREFIX}.${JSON.stringify(e)}`;
  }
  static preProcess(e, t, r) {
    let n = It.generateThrottlingStorageKey(t),
      o = e.getThrottlingCache(n);
    if (o) {
      if (o.throttleTime < Date.now()) {
        e.removeItem(n, r);
        return;
      }
      throw new ServerError(o.errorCodes?.join(" ") || f.EMPTY_STRING, o.errorMessage, o.subError);
    }
  }
  static postProcess(e, t, r, n) {
    if (It.checkResponseStatus(r) || It.checkResponseForRetryAfter(r)) {
      let o = {
        throttleTime: It.calculateThrottleTime(parseInt(r.headers[Y.RETRY_AFTER])),
        error: r.body.error,
        errorCodes: r.body.error_codes,
        errorMessage: r.body.error_description,
        subError: r.body.suberror
      };
      e.setThrottlingCache(It.generateThrottlingStorageKey(t), o, n);
    }
  }
  static checkResponseStatus(e) {
    return e.status === 429 || e.status >= 500 && e.status < 600;
  }
  static checkResponseForRetryAfter(e) {
    if (e.headers) return e.headers.hasOwnProperty(Y.RETRY_AFTER) && (e.status < 200 || e.status >= 300);
    return !1;
  }
  static calculateThrottleTime(e) {
    let t = e <= 0 ? 0 : e,
      r = Date.now() / 1000;
    return Math.floor(Math.min(r + (t || ot.DEFAULT_THROTTLE_TIME_SECONDS), r + ot.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
  }
  static removeThrottle(e, t, r, n) {
    let o = Nn(t, r, n),
      i = this.generateThrottlingStorageKey(o);
    e.removeItem(i, r.correlationId);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class NetworkError extends AuthError {
  constructor(e, t, r) {
    super(e.errorCode, e.errorMessage, e.subError);
    Object.setPrototypeOf(this, NetworkError.prototype), this.name = "NetworkError", this.error = e, this.httpStatus = t, this.responseHeaders = r;
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class Te {
  constructor(e, t) {
    this.config = Xd(e), this.logger = new Le(this.config.loggerOptions, pi, version), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
  }
  createTokenRequestHeaders(e) {
    let t = {};
    if (t[Y.CONTENT_TYPE] = f.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e) switch (e.type) {
      case Ie.HOME_ACCOUNT_ID:
        try {
          let r = st(e.credential);
          t[Y.CCS_HEADER] = `Oid:${r.uid}@${r.utid}`;
        } catch (error) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + error);
        }
        break;
      case Ie.UPN:
        t[Y.CCS_HEADER] = `UPN: ${e.credential}`;
        break;
    }
    return t;
  }
  async executePostToTokenEndpoint(e, body_2, headers_5, n, o, i) {
    if (i) this.performanceClient?.addQueueMeasurement(i, o);
    let s = await this.sendPostRequest(n, e, {
      body: body_2,
      headers: headers_5
    }, o);
    if (this.config.serverTelemetryManager && s.status < 500 && s.status !== 429) this.config.serverTelemetryManager.clearTelemetryCache();
    return s;
  }
  async sendPostRequest(e, t, r, n) {
    It.preProcess(this.cacheManager, e, n);
    let o;
    try {
      o = await F(this.networkClient.sendPostRequestAsync.bind(this.networkClient), h.NetworkClientSendPostRequestAsync, this.logger, this.performanceClient, n)(t, r);
      let i = o.headers || {};
      this.performanceClient?.addFields({
        refreshTokenSize: o.body.refresh_token?.length || 0,
        httpVerToken: i[Y.X_MS_HTTP_VERSION] || "",
        requestId: i[Y.X_MS_REQUEST_ID] || ""
      }, n);
    } catch (i) {
      if (i instanceof NetworkError) {
        let responseHeaders = i.responseHeaders;
        if (responseHeaders) this.performanceClient?.addFields({
          httpVerToken: responseHeaders[Y.X_MS_HTTP_VERSION] || "",
          requestId: responseHeaders[Y.X_MS_REQUEST_ID] || "",
          contentTypeHeader: responseHeaders[Y.CONTENT_TYPE] || void 0,
          contentLengthHeader: responseHeaders[Y.CONTENT_LENGTH] || void 0,
          httpStatus: i.httpStatus
        }, n);
        throw i.error;
      }
      if (i instanceof AuthError) throw i;else throw g(code_9);
    }
    return It.postProcess(this.cacheManager, e, o, n), o;
  }
  async updateAuthority(e, t) {
    this.performanceClient?.addQueueMeasurement(h.UpdateTokenEndpointAuthority, t);
    let r = `https://${e}/${this.authority.tenant}/`,
      n = await Va(r, this.networkClient, this.cacheManager, this.authority.options, this.logger, t, this.performanceClient);
    this.authority = n;
  }
  createTokenQueryParameters(e) {
    let t = new Map();
    if (e.embeddedClientId) Vt(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (e.tokenQueryParameters) He(t, e.tokenQueryParameters);
    return at(t, e.correlationId), Pn(t, e.correlationId, this.performanceClient), pe(t);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var code_70 = "no_tokens_found",
  code_71 = "native_account_unavailable",
  zi = "refresh_token_expired",
  ja = "ux_not_allowed",
  ah = "interaction_required",
  ch = "consent_required",
  lh = "login_required",
  code_72 = "bad_token"; /*! @azure/msal-common v15.13.1 2025-10-29 */
var dh = [ah, ch, lh, code_72, ja],
  $g = ["message_only", "additional_action", "basic_action", "user_password_expired", "consent_required", "bad_token"],
  Gi = {
    [code_70]: "No refresh token found in the cache. Please sign-in.",
    [code_71]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
    [zi]: "Refresh token has expired.",
    [code_72]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve.",
    [ja]: "`canShowUI` flag in Edge was set to false. User interaction required on web page. Please invoke an interactive API to resolve."
  },
  Bg = {
    noTokensFoundError: {
      code: code_70,
      desc: Gi[code_70]
    },
    native_account_unavailable: {
      code: code_71,
      desc: Gi[code_71]
    },
    bad_token: {
      code: code_72,
      desc: Gi[code_72]
    }
  };
class InteractionRequiredAuthError extends AuthError {
  constructor(e, t, r, n, o, i, s, a) {
    super(e, t, r);
    Object.setPrototypeOf(this, InteractionRequiredAuthError.prototype), this.timestamp = n || f.EMPTY_STRING, this.traceId = o || f.EMPTY_STRING, this.correlationId = i || f.EMPTY_STRING, this.claims = s || f.EMPTY_STRING, this.name = "InteractionRequiredAuthError", this.errorNo = a;
  }
}
function uh(e, t, r) {
  let n = !!e && dh.indexOf(e) > -1,
    o = !!r && $g.indexOf(r) > -1,
    i = !!t && dh.some(item => t.indexOf(item) > -1);
  return n || i || o;
}
function Ya(e) {
  return new InteractionRequiredAuthError(e, Gi[e]);
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class qi {
  static setRequestState(e, t, r) {
    let n = qi.generateLibraryState(e, r);
    return t ? `${n}${f.RESOURCE_DELIM}${t}` : n;
  }
  static generateLibraryState(e, t) {
    if (!e) throw g(code_32);
    let r = {
      id: e.createNewGuid()
    };
    if (t) r.meta = t;
    let n = JSON.stringify(r);
    return e.base64Encode(n);
  }
  static parseRequestState(e, t) {
    if (!e) throw g(code_32);
    if (!t) throw g(code_12);
    try {
      let r = t.split(f.RESOURCE_DELIM),
        n = r[0],
        o = r.length > 1 ? r.slice(1).join(f.RESOURCE_DELIM) : f.EMPTY_STRING,
        i = e.base64Decode(n),
        libraryState = JSON.parse(i);
      return {
        userRequestState: o || f.EMPTY_STRING,
        libraryState: libraryState
      };
    } catch (error) {
      throw g(code_12);
    }
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var zg = {
  SW: "sw"
};
class Rr {
  constructor(e, t) {
    this.cryptoUtils = e, this.performanceClient = t;
  }
  async generateCnf(e, t) {
    this.performanceClient?.addQueueMeasurement(h.PopTokenGenerateCnf, e.correlationId);
    let r = await F(this.generateKid.bind(this), h.PopTokenGenerateCnf, t, this.performanceClient, e.correlationId)(e),
      reqCnfString = this.cryptoUtils.base64UrlEncode(JSON.stringify(r));
    return {
      kid: r.kid,
      reqCnfString: reqCnfString
    };
  }
  async generateKid(e) {
    return this.performanceClient?.addQueueMeasurement(h.PopTokenGenerateKid, e.correlationId), {
      kid: await this.cryptoUtils.getPublicKeyThumbprint(e),
      xms_ksl: zg.SW
    };
  }
  async signPopToken(e, t, r) {
    return this.signPayload(e, t, r);
  }
  async signPayload(at_2, t, r, n) {
    let {
        resourceRequestMethod: resourceRequestMethod,
        resourceRequestUri: resourceRequestUri,
        shrClaims: shrClaims,
        shrNonce: shrNonce,
        shrOptions: shrOptions
      } = r,
      d = (resourceRequestUri ? new x(resourceRequestUri) : void 0)?.getUrlComponents();
    return this.cryptoUtils.signJwt({
      at: at_2,
      ts: Q(),
      m: resourceRequestMethod?.toUpperCase(),
      u: d?.HostNameAndPort,
      nonce: shrNonce || this.cryptoUtils.createNewGuid(),
      p: d?.AbsolutePath,
      q: d?.QueryString ? [[], d.QueryString] : void 0,
      client_claims: shrClaims || void 0,
      ...n
    }, t, shrOptions, r.correlationId);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class Ze {
  constructor(e, t) {
    this.cache = e, this.hasChanged = t;
  }
  get cacheHasChanged() {
    return this.hasChanged;
  }
  get tokenCache() {
    return this.cache;
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class ie {
  constructor(e, t, r, n, o, i, s) {
    this.clientId = e, this.cacheStorage = t, this.cryptoObj = r, this.logger = n, this.serializableCache = o, this.persistencePlugin = i, this.performanceClient = s;
  }
  validateTokenResponse(e, t) {
    if (e.error || e.error_description || e.suberror) {
      let r = `Error(s): ${e.error_codes || f.NOT_AVAILABLE} - Timestamp: ${e.timestamp || f.NOT_AVAILABLE} - Description: ${e.error_description || f.NOT_AVAILABLE} - Correlation ID: ${e.correlation_id || f.NOT_AVAILABLE} - Trace ID: ${e.trace_id || f.NOT_AVAILABLE}`,
        n = e.error_codes?.length ? e.error_codes[0] : void 0,
        o = new ServerError(e.error, r, e.suberror, n, e.status);
      if (t && e.status && e.status >= P.SERVER_ERROR_RANGE_START && e.status <= P.SERVER_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${o}`);
        return;
      } else if (t && e.status && e.status >= P.CLIENT_ERROR_RANGE_START && e.status <= P.CLIENT_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${o}`);
        return;
      }
      if (uh(e.error, e.error_description, e.suberror)) throw new InteractionRequiredAuthError(e.error, e.error_description, e.suberror, e.timestamp || f.EMPTY_STRING, e.trace_id || f.EMPTY_STRING, e.correlation_id || f.EMPTY_STRING, e.claims || f.EMPTY_STRING, n);
      throw o;
    }
  }
  async handleServerTokenResponse(e, t, r, n, o, i, s, a, c) {
    this.performanceClient?.addQueueMeasurement(h.HandleServerTokenResponse, e.correlation_id);
    let l;
    if (e.id_token) {
      if (l = yt(e.id_token || f.EMPTY_STRING, this.cryptoObj.base64Decode), o && o.nonce) {
        if (l.nonce !== o.nonce) throw g(code_15);
      }
      if (n.maxAge || n.maxAge === 0) {
        let auth_time = l.auth_time;
        if (!auth_time) throw g(code_16);
        ki(auth_time, n.maxAge);
      }
    }
    this.homeAccountIdentifier = fe.generateHomeAccountId(e.client_info || f.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, l);
    let d;
    if (!!o && !!o.state) d = qi.parseRequestState(this.cryptoObj, o.state);
    e.key_id = e.key_id || n.sshKid || void 0;
    let u = this.generateCacheRecord(e, t, r, n, l, i, o),
      m;
    try {
      if (this.persistencePlugin && this.serializableCache) this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), m = new Ze(this.serializableCache, !0), await this.persistencePlugin.beforeCacheAccess(m);
      if (s && !a && u.account) {
        let p = this.cacheStorage.generateAccountKey(fe.getAccountInfo(u.account));
        if (!this.cacheStorage.getAccount(p, n.correlationId)) return this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), await ie.generateAuthenticationResult(this.cryptoObj, t, u, !1, n, l, d, void 0, c);
      }
      await this.cacheStorage.saveCacheRecord(u, n.correlationId, qd(l || {}), n.storeInCache);
    } finally {
      if (this.persistencePlugin && this.serializableCache && m) this.logger.verbose("Persistence enabled, calling afterCacheAccess"), await this.persistencePlugin.afterCacheAccess(m);
    }
    return ie.generateAuthenticationResult(this.cryptoObj, t, u, !1, n, l, d, e, c);
  }
  generateCacheRecord(e, t, r, n, o, i, s) {
    let environment_6 = t.getPreferredCache();
    if (!environment_6) throw g(code_30);
    let c = vi(o),
      idToken_2,
      account;
    if (e.id_token && !!o) idToken_2 = Ju(this.homeAccountIdentifier, environment_6, e.id_token, this.clientId, c || ""), account = hh(this.cacheStorage, t, this.homeAccountIdentifier, this.cryptoObj.base64Decode, n.correlationId, o, e.client_info, environment_6, c, s, void 0, this.logger);
    let accessToken = null;
    if (e.access_token) {
      let y = e.scope ? oe.fromString(e.scope) : new oe(n.scopes || []),
        T = (typeof e.expires_in === "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0,
        I = (typeof e.ext_expires_in === "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0,
        k = (typeof e.refresh_in === "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0,
        U = r + T,
        B = U + I,
        X = k && k > 0 ? r + k : void 0;
      accessToken = Xu(this.homeAccountIdentifier, environment_6, e.access_token, this.clientId, c || t.tenant || "", y.printScopes(), U, B, this.cryptoObj.base64Decode, X, e.token_type, i, e.key_id, n.claims, n.requestedClaimsHash);
    }
    let refreshToken = null;
    if (e.refresh_token) {
      let y;
      if (e.refresh_token_expires_in) {
        let T = typeof e.refresh_token_expires_in === "string" ? parseInt(e.refresh_token_expires_in, 10) : e.refresh_token_expires_in;
        y = r + T;
      }
      refreshToken = Zu(this.homeAccountIdentifier, environment_6, e.refresh_token, this.clientId, e.foci, i, y);
    }
    let appMetadata = null;
    if (e.foci) appMetadata = {
      clientId: this.clientId,
      environment: environment_6,
      familyId: e.foci
    };
    return {
      account: account,
      idToken: idToken_2,
      accessToken: accessToken,
      refreshToken: refreshToken,
      appMetadata: appMetadata
    };
  }
  static async generateAuthenticationResult(e, t, r, fromCache, o, i, s, a, c) {
    let l = f.EMPTY_STRING,
      scopes_4 = [],
      expiresOn = null,
      extExpiresOn,
      refreshOn,
      y = f.EMPTY_STRING;
    if (r.accessToken) {
      if (r.accessToken.tokenType === L.POP && !o.popKid) {
        let U = new Rr(e),
          {
            secret: secret_4,
            keyId: keyId_2
          } = r.accessToken;
        if (!keyId_2) throw g(code_42);
        l = await U.signPopToken(secret_4, keyId_2, o);
      } else l = r.accessToken.secret;
      if (scopes_4 = oe.fromString(r.accessToken.target).asArray(), expiresOn = Li(r.accessToken.expiresOn), extExpiresOn = Li(r.accessToken.extendedExpiresOn), r.accessToken.refreshOn) refreshOn = Li(r.accessToken.refreshOn);
    }
    if (r.appMetadata) y = r.appMetadata.familyId === Mt ? Mt : "";
    let uniqueId = i?.oid || i?.sub || "",
      tenantId_3 = i?.tid || "";
    if (a?.spa_accountid && !!r.account) r.account.nativeAccountId = a?.spa_accountid;
    let account_2 = r.account ? wi(fe.getAccountInfo(r.account), void 0, i, r.idToken?.secret) : null;
    return {
      authority: t.canonicalAuthority,
      uniqueId: uniqueId,
      tenantId: tenantId_3,
      scopes: scopes_4,
      account: account_2,
      idToken: r?.idToken?.secret || "",
      idTokenClaims: i || {},
      accessToken: l,
      fromCache: fromCache,
      expiresOn: expiresOn,
      extExpiresOn: extExpiresOn,
      refreshOn: refreshOn,
      correlationId: o.correlationId,
      requestId: c || f.EMPTY_STRING,
      familyId: y,
      tokenType: r.accessToken?.tokenType || f.EMPTY_STRING,
      state: s ? s.userRequestState : f.EMPTY_STRING,
      cloudGraphHostName: r.account?.cloudGraphHostName || f.EMPTY_STRING,
      msGraphHost: r.account?.msGraphHost || f.EMPTY_STRING,
      code: a?.spa_code,
      fromNativeBroker: !1
    };
  }
}
function hh(e, t, homeAccountId_4, n, o, idTokenClaims_2, clientInfo, environment_7, c, l, nativeAccountId, u) {
  u?.verbose("setCachedAccount called");
  let p = e.getAccountKeys().find(item => item.startsWith(homeAccountId_4)),
    y = null;
  if (p) y = e.getAccount(p, o);
  let T = y || fe.createAccount({
      homeAccountId: homeAccountId_4,
      idTokenClaims: idTokenClaims_2,
      clientInfo: clientInfo,
      environment: environment_7,
      cloudGraphHostName: l?.cloud_graph_host_name,
      msGraphHost: l?.msgraph_host,
      nativeAccountId: nativeAccountId
    }, t, n),
    I = T.tenantProfiles || [],
    k = c || T.realm;
  if (k && !I.find(item => item.tenantId === k)) {
    let U = po(homeAccountId_4, T.localAccountId, k, idTokenClaims_2);
    I.push(U);
  }
  return T.tenantProfiles = I, T;
} /*! @azure/msal-common v15.13.1 2025-10-29 */
async function _e(e, clientId_6, tokenEndpoint) {
  if (typeof e === "string") return e;else return e({
    clientId: clientId_6,
    tokenEndpoint: tokenEndpoint
  });
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class Ki extends Te {
  constructor(e, t) {
    super(e, t);
    this.includeRedirectUri = !0, this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
  }
  async acquireToken(e, t) {
    if (this.performanceClient?.addQueueMeasurement(h.AuthClientAcquireToken, e.correlationId), !e.code) throw g(code_21);
    let r = Q(),
      n = await F(this.executeTokenRequest.bind(this), h.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(this.authority, e),
      o = n.headers?.[Y.X_MS_REQUEST_ID],
      i = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
    return i.validateTokenResponse(n.body), F(i.handleServerTokenResponse.bind(i), h.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(n.body, this.authority, r, e, t, void 0, void 0, void 0, o);
  }
  getLogoutUri(e) {
    if (!e) throw V(code_55);
    let t = this.createLogoutUrlQueryString(e);
    return x.appendQueryString(this.authority.endSessionEndpoint, t);
  }
  async executeTokenRequest(e, t) {
    this.performanceClient?.addQueueMeasurement(h.AuthClientExecuteTokenRequest, t.correlationId);
    let r = this.createTokenQueryParameters(t),
      n = x.appendQueryString(e.tokenEndpoint, r),
      o = await F(this.createTokenRequestBody.bind(this), h.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, t.correlationId)(t),
      i = void 0;
    if (t.clientInfo) try {
      let c = kn(t.clientInfo, this.cryptoUtils.base64Decode);
      i = {
        credential: `${c.uid}${pt.CLIENT_INFO_SEPARATOR}${c.utid}`,
        type: Ie.HOME_ACCOUNT_ID
      };
    } catch (error) {
      this.logger.verbose("Could not parse client info for CCS Header: " + error);
    }
    let s = this.createTokenRequestHeaders(i || t.ccsCredential),
      a = Nn(this.config.authOptions.clientId, t);
    return F(this.executePostToTokenEndpoint.bind(this), h.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, t.correlationId)(n, o, s, a, t.correlationId, h.AuthorizationCodeClientExecutePostToTokenEndpoint);
  }
  async createTokenRequestBody(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthClientCreateTokenRequestBody, e.correlationId);
    let t = new Map();
    if (Je(t, e.embeddedClientId || e.tokenBodyParameters?.[Tt] || this.config.authOptions.clientId), !this.includeRedirectUri) {
      if (!e.redirectUri) throw V(code_47);
    } else On(t, e.redirectUri);
    if (Qe(t, e.scopes, !0, this.oidcDefaultScopes), zu(t, e.code), Et(t, this.config.libraryInfo), Ct(t, this.config.telemetry.application), Kt(t), this.serverTelemetryManager && !Oi(this.config)) qt(t, this.serverTelemetryManager);
    if (e.codeVerifier) qu(t, e.codeVerifier);
    if (this.config.clientCredentials.clientSecret) Tr(t, this.config.clientCredentials.clientSecret);
    if (this.config.clientCredentials.clientAssertion) {
      let clientAssertion = this.config.clientCredentials.clientAssertion;
      Er(t, await _e(clientAssertion.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), Cr(t, clientAssertion.assertionType);
    }
    if (Gt(t, Pe.AUTHORIZATION_CODE_GRANT), At(t), e.authenticationScheme === L.POP) {
      let n = new Rr(this.cryptoUtils, this.performanceClient),
        o;
      if (!e.popKid) o = (await F(n.generateCnf.bind(n), h.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString;else o = this.cryptoUtils.encodeKid(e.popKid);
      Di(t, o);
    } else if (e.authenticationScheme === L.SSH) if (e.sshJwk) Ui(t, e.sshJwk);else throw V(code_61);
    if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Xe(t, e.claims, this.config.authOptions.clientCapabilities);
    let r = void 0;
    if (e.clientInfo) try {
      let n = kn(e.clientInfo, this.cryptoUtils.base64Decode);
      r = {
        credential: `${n.uid}${pt.CLIENT_INFO_SEPARATOR}${n.utid}`,
        type: Ie.HOME_ACCOUNT_ID
      };
    } catch (error) {
      this.logger.verbose("Could not parse client info for CCS Header: " + error);
    } else r = e.ccsCredential;
    if (this.config.systemOptions.preventCorsPreflight && r) switch (r.type) {
      case Ie.HOME_ACCOUNT_ID:
        try {
          let n = st(r.credential);
          zt(t, n);
        } catch (error) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + error);
        }
        break;
      case Ie.UPN:
        Bt(t, r.credential);
        break;
    }
    if (e.embeddedClientId) Vt(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (e.tokenBodyParameters) He(t, e.tokenBodyParameters);
    if (e.enableSpaAuthorizationCode && (!e.tokenBodyParameters || !e.tokenBodyParameters[Ha])) He(t, {
      [Ha]: "1"
    });
    return Pn(t, e.correlationId, this.performanceClient), pe(t);
  }
  createLogoutUrlQueryString(e) {
    let t = new Map();
    if (e.postLogoutRedirectUri) Lu(t, e.postLogoutRedirectUri);
    if (e.correlationId) at(t, e.correlationId);
    if (e.idTokenHint) Hu(t, e.idTokenHint);
    if (e.state) xi(t, e.state);
    if (e.logoutHint) Ku(t, e.logoutHint);
    if (e.extraQueryParameters) He(t, e.extraQueryParameters);
    if (this.config.authOptions.instanceAware) Mi(t);
    return pe(t, this.config.authOptions.encodeExtraQueryParams, e.extraQueryParameters);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var Gg = 300;
class xn extends Te {
  constructor(e, t) {
    super(e, t);
  }
  async acquireToken(e) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireToken, e.correlationId);
    let t = Q(),
      r = await F(this.executeTokenRequest.bind(this), h.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(e, this.authority),
      n = r.headers?.[Y.X_MS_REQUEST_ID],
      o = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return o.validateTokenResponse(r.body), F(o.handleServerTokenResponse.bind(o), h.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(r.body, this.authority, t, e, void 0, void 0, !0, e.forceCache, n);
  }
  async acquireTokenByRefreshToken(e) {
    if (!e) throw V(code_54);
    if (this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireTokenByRefreshToken, e.correlationId), !e.account) throw g(code_28);
    if (this.cacheManager.isAppMetadataFOCI(e.account.environment)) try {
      return await F(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !0);
    } catch (error) {
      let n = error instanceof InteractionRequiredAuthError && error.errorCode === code_70,
        o = error instanceof ServerError && error.errorCode === no.INVALID_GRANT_ERROR && error.subError === no.CLIENT_MISMATCH_ERROR;
      if (n || o) return F(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !1);else throw error;
    }
    return F(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !1);
  }
  async acquireTokenWithCachedRefreshToken(e, t) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId);
    let r = Wu(this.cacheManager.getRefreshToken.bind(this.cacheManager), h.CacheManagerGetRefreshToken, this.logger, this.performanceClient, e.correlationId)(e.account, t, e.correlationId, void 0, this.performanceClient);
    if (!r) throw Ya(code_70);
    if (r.expiresOn && jt(r.expiresOn, e.refreshTokenExpirationOffsetSeconds || Gg)) throw this.performanceClient?.addFields({
      rtExpiresOnMs: Number(r.expiresOn)
    }, e.correlationId), Ya(zi);
    let n = {
      ...e,
      refreshToken: r.secret,
      authenticationScheme: e.authenticationScheme || L.BEARER,
      ccsCredential: {
        credential: e.account.homeAccountId,
        type: Ie.HOME_ACCOUNT_ID
      }
    };
    try {
      return await F(this.acquireToken.bind(this), h.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(n);
    } catch (error) {
      if (error instanceof InteractionRequiredAuthError) {
        if (this.performanceClient?.addFields({
          rtExpiresOnMs: Number(r.expiresOn)
        }, e.correlationId), error.subError === code_72) {
          this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
          let i = this.cacheManager.generateCredentialKey(r);
          this.cacheManager.removeRefreshToken(i, e.correlationId);
        }
      }
      throw error;
    }
  }
  async executeTokenRequest(e, t) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientExecuteTokenRequest, e.correlationId);
    let r = this.createTokenQueryParameters(e),
      n = x.appendQueryString(t.tokenEndpoint, r),
      o = await F(this.createTokenRequestBody.bind(this), h.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, e.correlationId)(e),
      i = this.createTokenRequestHeaders(e.ccsCredential),
      s = Nn(this.config.authOptions.clientId, e);
    return F(this.executePostToTokenEndpoint.bind(this), h.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, e.correlationId)(n, o, i, s, e.correlationId, h.RefreshTokenClientExecutePostToTokenEndpoint);
  }
  async createTokenRequestBody(e) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientCreateTokenRequestBody, e.correlationId);
    let t = new Map();
    if (Je(t, e.embeddedClientId || e.tokenBodyParameters?.[Tt] || this.config.authOptions.clientId), e.redirectUri) On(t, e.redirectUri);
    if (Qe(t, e.scopes, !0, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes), Gt(t, Pe.REFRESH_TOKEN_GRANT), At(t), Et(t, this.config.libraryInfo), Ct(t, this.config.telemetry.application), Kt(t), this.serverTelemetryManager && !Oi(this.config)) qt(t, this.serverTelemetryManager);
    if (Gu(t, e.refreshToken), this.config.clientCredentials.clientSecret) Tr(t, this.config.clientCredentials.clientSecret);
    if (this.config.clientCredentials.clientAssertion) {
      let clientAssertion_2 = this.config.clientCredentials.clientAssertion;
      Er(t, await _e(clientAssertion_2.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), Cr(t, clientAssertion_2.assertionType);
    }
    if (e.authenticationScheme === L.POP) {
      let r = new Rr(this.cryptoUtils, this.performanceClient),
        n;
      if (!e.popKid) n = (await F(r.generateCnf.bind(r), h.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString;else n = this.cryptoUtils.encodeKid(e.popKid);
      Di(t, n);
    } else if (e.authenticationScheme === L.SSH) if (e.sshJwk) Ui(t, e.sshJwk);else throw V(code_61);
    if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Xe(t, e.claims, this.config.authOptions.clientCapabilities);
    if (this.config.systemOptions.preventCorsPreflight && e.ccsCredential) switch (e.ccsCredential.type) {
      case Ie.HOME_ACCOUNT_ID:
        try {
          let r = st(e.ccsCredential.credential);
          zt(t, r);
        } catch (error) {
          this.logger.verbose("Could not parse home account ID for CCS Header: " + error);
        }
        break;
      case Ie.UPN:
        Bt(t, e.ccsCredential.credential);
        break;
    }
    if (e.embeddedClientId) Vt(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (e.tokenBodyParameters) He(t, e.tokenBodyParameters);
    return Pn(t, e.correlationId, this.performanceClient), pe(t);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
class Vi extends Te {
  constructor(e, t) {
    super(e, t);
  }
  async acquireCachedToken(e) {
    this.performanceClient?.addQueueMeasurement(h.SilentFlowClientAcquireCachedToken, e.correlationId);
    let NOT_APPLICABLE = j.NOT_APPLICABLE;
    if (e.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !re.isEmptyObj(e.claims)) throw this.setCacheOutcome(j.FORCE_REFRESH_OR_CLAIMS, e.correlationId), g(code_36);
    if (!e.account) throw g(code_28);
    let r = e.account.tenantId || ih(e.authority),
      n = this.cacheManager.getTokenKeys(),
      accessToken_2 = this.cacheManager.getAccessToken(e.account, e, n, r);
    if (!accessToken_2) throw this.setCacheOutcome(j.NO_CACHED_ACCESS_TOKEN, e.correlationId), g(code_36);else if (Qu(accessToken_2.cachedAt) || jt(accessToken_2.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.setCacheOutcome(j.CACHED_ACCESS_TOKEN_EXPIRED, e.correlationId), g(code_36);else if (accessToken_2.refreshOn && jt(accessToken_2.refreshOn, 0)) NOT_APPLICABLE = j.PROACTIVELY_REFRESHED;
    let i = e.authority || this.authority.getPreferredCache(),
      s = {
        account: this.cacheManager.getAccount(this.cacheManager.generateAccountKey(e.account), e.correlationId),
        accessToken: accessToken_2,
        idToken: this.cacheManager.getIdToken(e.account, e.correlationId, n, r, this.performanceClient),
        refreshToken: null,
        appMetadata: this.cacheManager.readAppMetadataFromCache(i)
      };
    if (this.setCacheOutcome(NOT_APPLICABLE, e.correlationId), this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
    return [await F(this.generateResultFromCacheRecord.bind(this), h.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, e.correlationId)(s, e), NOT_APPLICABLE];
  }
  setCacheOutcome(cacheOutcome, t) {
    if (this.serverTelemetryManager?.setCacheOutcome(cacheOutcome), this.performanceClient?.addFields({
      cacheOutcome: cacheOutcome
    }, t), cacheOutcome !== j.NOT_APPLICABLE) this.logger.info(`Token refresh is required due to cache outcome: ${cacheOutcome}`);
  }
  async generateResultFromCacheRecord(e, t) {
    this.performanceClient?.addQueueMeasurement(h.SilentFlowClientGenerateResultFromCacheRecord, t.correlationId);
    let r;
    if (e.idToken) r = yt(e.idToken.secret, this.config.cryptoInterface.base64Decode);
    if (t.maxAge || t.maxAge === 0) {
      let n = r?.auth_time;
      if (!n) throw g(code_16);
      ki(n, t.maxAge);
    }
    return ie.generateAuthenticationResult(this.cryptoUtils, this.authority, e, !0, t, r);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */
function qg(e, t, r, n) {
  let correlationId_2 = t.correlationId,
    i = new Map();
  Je(i, t.embeddedClientId || t.extraQueryParameters?.[Tt] || e.clientId);
  let s = [...(t.scopes || []), ...(t.extraScopesToConsent || [])];
  if (Qe(i, s, !0, e.authority.options.OIDCOptions?.defaultScopes), On(i, t.redirectUri), at(i, correlationId_2), Uu(i, t.responseMode), At(i), t.prompt) $u(i, t.prompt), n?.addFields({
    prompt: t.prompt
  }, correlationId_2);
  if (t.domainHint) Fu(i, t.domainHint), n?.addFields({
    domainHintFromRequest: !0
  }, correlationId_2);
  if (t.prompt !== or.SELECT_ACCOUNT) {
    if (t.sid && t.prompt === or.NONE) r.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), Ba(i, t.sid), n?.addFields({
      sidFromRequest: !0
    }, correlationId_2);else if (t.account) {
      let a = Vg(t.account),
        c = jg(t.account);
      if (c && t.domainHint) r.warning('AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint'), c = null;
      if (c) {
        r.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), Eo(i, c), n?.addFields({
          loginHintFromClaim: !0
        }, correlationId_2);
        try {
          let l = st(t.account.homeAccountId);
          zt(i, l);
        } catch (error) {
          r.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      } else if (a && t.prompt === or.NONE) {
        r.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), Ba(i, a), n?.addFields({
          sidFromClaim: !0
        }, correlationId_2);
        try {
          let l = st(t.account.homeAccountId);
          zt(i, l);
        } catch (error) {
          r.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      } else if (t.loginHint) r.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), Eo(i, t.loginHint), Bt(i, t.loginHint), n?.addFields({
        loginHintFromRequest: !0
      }, correlationId_2);else if (t.account.username) {
        r.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), Eo(i, t.account.username), n?.addFields({
          loginHintFromUpn: !0
        }, correlationId_2);
        try {
          let l = st(t.account.homeAccountId);
          zt(i, l);
        } catch (error) {
          r.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      }
    } else if (t.loginHint) r.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), Eo(i, t.loginHint), Bt(i, t.loginHint), n?.addFields({
      loginHintFromRequest: !0
    }, correlationId_2);
  } else r.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
  if (t.nonce) Bu(i, t.nonce);
  if (t.state) xi(i, t.state);
  if (t.claims || e.clientCapabilities && e.clientCapabilities.length > 0) Xe(i, t.claims, e.clientCapabilities);
  if (t.embeddedClientId) Vt(i, e.clientId, e.redirectUri);
  if (e.instanceAware && (!t.extraQueryParameters || !Object.keys(t.extraQueryParameters).includes(To))) Mi(i);
  return i;
}
function Kg(e, t, r, n) {
  let o = pe(t, r, n);
  return x.appendQueryString(e.authorizationEndpoint, o);
}
function Vg(e) {
  return e.idTokenClaims?.sid || null;
}
function jg(e) {
  return e.loginHint || e.idTokenClaims?.login_hint || null;
} /*! @azure/msal-common v15.13.1 2025-10-29 */
var mh = ",",
  ph = "|";
function Yg(e) {
  let {
      skus: skus,
      libraryName: libraryName,
      libraryVersion: libraryVersion,
      extensionName: extensionName,
      extensionVersion: extensionVersion
    } = e,
    s = new Map([[0, [libraryName, libraryVersion]], [2, [extensionName, extensionVersion]]]),
    skuArr = [];
  if (skus?.length) {
    if (skuArr = skus.split(mh), skuArr.length < 4) return skus;
  } else skuArr = Array.from({
    length: 4
  }, () => ph);
  return s.forEach((item, index_2) => {
    if (item.length === 2 && item[0]?.length && item[1]?.length) Wg({
      skuArr: skuArr,
      index: index_2,
      skuName: item[0],
      skuVersion: item[1]
    });
  }), skuArr.join(mh);
}
function Wg(e) {
  let {
    skuArr: skuArr_2,
    index: index_3,
    skuName: skuName,
    skuVersion: skuVersion
  } = e;
  if (index_3 >= skuArr_2.length) return;
  skuArr_2[index_3] = [skuName, skuVersion].join(ph);
}
class Yt {
  constructor(e, t) {
    this.cacheOutcome = j.NOT_APPLICABLE, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || f.EMPTY_STRING, this.wrapperVer = e.wrapperVer || f.EMPTY_STRING, this.telemetryCacheKey = de.CACHE_KEY + pt.CACHE_KEY_SEPARATOR + e.clientId;
  }
  generateCurrentRequestHeaderValue() {
    let e = `${this.apiId}${de.VALUE_SEPARATOR}${this.cacheOutcome}`,
      t = [this.wrapperSKU, this.wrapperVer],
      r = this.getNativeBrokerErrorCode();
    if (r?.length) t.push(`broker_error=${r}`);
    let n = t.join(de.VALUE_SEPARATOR),
      o = this.getRegionDiscoveryFields(),
      i = [e, o].join(de.VALUE_SEPARATOR);
    return [de.SCHEMA_VERSION, i, n].join(de.CATEGORY_SEPARATOR);
  }
  generateLastRequestHeaderValue() {
    let e = this.getLastRequests(),
      t = Yt.maxErrorsToSend(e),
      r = e.failedRequests.slice(0, 2 * t).join(de.VALUE_SEPARATOR),
      n = e.errors.slice(0, t).join(de.VALUE_SEPARATOR),
      o = e.errors.length,
      i = t < o ? de.OVERFLOW_TRUE : de.OVERFLOW_FALSE,
      s = [o, i].join(de.VALUE_SEPARATOR);
    return [de.SCHEMA_VERSION, e.cacheHits, r, n, s].join(de.CATEGORY_SEPARATOR);
  }
  cacheFailedRequest(e) {
    let t = this.getLastRequests();
    if (t.errors.length >= de.MAX_CACHED_ERRORS) t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift();
    if (t.failedRequests.push(this.apiId, this.correlationId), e instanceof Error && !!e && e.toString()) {
      if (e instanceof AuthError) {
        if (e.subError) t.errors.push(e.subError);else if (e.errorCode) t.errors.push(e.errorCode);else t.errors.push(e.toString());
      } else t.errors.push(e.toString());
    } else t.errors.push(de.UNKNOWN_ERROR);
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
    return;
  }
  incrementCacheHits() {
    let e = this.getLastRequests();
    return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId), e.cacheHits;
  }
  getLastRequests() {
    let e = {
      failedRequests: [],
      errors: [],
      cacheHits: 0
    };
    return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || e;
  }
  clearTelemetryCache() {
    let e = this.getLastRequests(),
      t = Yt.maxErrorsToSend(e),
      r = e.errors.length;
    if (t === r) this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);else {
      let n = {
        failedRequests: e.failedRequests.slice(t * 2),
        errors: e.errors.slice(t),
        cacheHits: 0
      };
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, n, this.correlationId);
    }
  }
  static maxErrorsToSend(e) {
    let t,
      r = 0,
      n = 0,
      o = e.errors.length;
    for (t = 0; t < o; t++) {
      let i = e.failedRequests[2 * t] || f.EMPTY_STRING,
        s = e.failedRequests[2 * t + 1] || f.EMPTY_STRING,
        a = e.errors[t] || f.EMPTY_STRING;
      if (n += i.toString().length + s.toString().length + a.length + 3, n < de.MAX_LAST_HEADER_BYTES) r += 1;else break;
    }
    return r;
  }
  getRegionDiscoveryFields() {
    let e = [];
    return e.push(this.regionUsed || f.EMPTY_STRING), e.push(this.regionSource || f.EMPTY_STRING), e.push(this.regionOutcome || f.EMPTY_STRING), e.join(",");
  }
  updateRegionDiscoveryMetadata(e) {
    this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome;
  }
  setCacheOutcome(e) {
    this.cacheOutcome = e;
  }
  setNativeBrokerErrorCode(e) {
    let t = this.getLastRequests();
    t.nativeBrokerErrorCode = e, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
  }
  getNativeBrokerErrorCode() {
    return this.getLastRequests().nativeBrokerErrorCode;
  }
  clearNativeBrokerErrorCode() {
    let e = this.getLastRequests();
    delete e.nativeBrokerErrorCode, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId);
  }
  static makeExtraSkuString(e) {
    return Yg(e);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */ /*! @azure/msal-node v3.8.1 2025-10-29 */
class wr {
  static deserializeJSONBlob(e) {
    return !e ? {} : JSON.parse(e);
  }
  static deserializeAccounts(e) {
    let t = {};
    if (e) Object.keys(e).map(function (item) {
      let n = e[item],
        o = {
          homeAccountId: n.home_account_id,
          environment: n.environment,
          realm: n.realm,
          localAccountId: n.local_account_id,
          username: n.username,
          authorityType: n.authority_type,
          name: n.name,
          clientInfo: n.client_info,
          lastModificationTime: n.last_modification_time,
          lastModificationApp: n.last_modification_app,
          tenantProfiles: n.tenantProfiles?.map(s => JSON.parse(s)),
          lastUpdatedAt: Date.now().toString()
        },
        i = new fe();
      yr.toObject(i, o), t[item] = i;
    });
    return t;
  }
  static deserializeIdTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function (item) {
      let n = e[item],
        o = {
          homeAccountId: n.home_account_id,
          environment: n.environment,
          credentialType: n.credential_type,
          clientId: n.client_id,
          secret: n.secret,
          realm: n.realm,
          lastUpdatedAt: Date.now().toString()
        };
      t[item] = o;
    });
    return t;
  }
  static deserializeAccessTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function (item) {
      let n = e[item],
        o = {
          homeAccountId: n.home_account_id,
          environment: n.environment,
          credentialType: n.credential_type,
          clientId: n.client_id,
          secret: n.secret,
          realm: n.realm,
          target: n.target,
          cachedAt: n.cached_at,
          expiresOn: n.expires_on,
          extendedExpiresOn: n.extended_expires_on,
          refreshOn: n.refresh_on,
          keyId: n.key_id,
          tokenType: n.token_type,
          requestedClaims: n.requestedClaims,
          requestedClaimsHash: n.requestedClaimsHash,
          userAssertionHash: n.userAssertionHash,
          lastUpdatedAt: Date.now().toString()
        };
      t[item] = o;
    });
    return t;
  }
  static deserializeRefreshTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function (item) {
      let n = e[item],
        o = {
          homeAccountId: n.home_account_id,
          environment: n.environment,
          credentialType: n.credential_type,
          clientId: n.client_id,
          secret: n.secret,
          familyId: n.family_id,
          target: n.target,
          realm: n.realm,
          lastUpdatedAt: Date.now().toString()
        };
      t[item] = o;
    });
    return t;
  }
  static deserializeAppMetadata(e) {
    let t = {};
    if (e) Object.keys(e).map(function (item) {
      let n = e[item];
      t[item] = {
        clientId: n.client_id,
        environment: n.environment,
        familyId: n.family_id
      };
    });
    return t;
  }
  static deserializeAllCache(e) {
    return {
      accounts: e.Account ? this.deserializeAccounts(e.Account) : {},
      idTokens: e.IdToken ? this.deserializeIdTokens(e.IdToken) : {},
      accessTokens: e.AccessToken ? this.deserializeAccessTokens(e.AccessToken) : {},
      refreshTokens: e.RefreshToken ? this.deserializeRefreshTokens(e.RefreshToken) : {},
      appMetadata: e.AppMetadata ? this.deserializeAppMetadata(e.AppMetadata) : {}
    };
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */ /*! @azure/msal-node v3.8.1 2025-10-29 */
var gh = "system_assigned_managed_identity",
  ny = "managed_identity",
  Wa = `https://login.microsoftonline.com/${ny}/`,
  Ne = {
    AUTHORIZATION_HEADER_NAME: "Authorization",
    METADATA_HEADER_NAME: "Metadata",
    APP_SERVICE_SECRET_HEADER_NAME: "X-IDENTITY-HEADER",
    ML_AND_SF_SECRET_HEADER_NAME: "secret"
  },
  ce = {
    API_VERSION: "api-version",
    RESOURCE: "resource",
    SHA256_TOKEN_TO_REFRESH: "token_sha256_to_refresh",
    XMS_CC: "xms_cc"
  },
  v = {
    AZURE_POD_IDENTITY_AUTHORITY_HOST: "AZURE_POD_IDENTITY_AUTHORITY_HOST",
    DEFAULT_IDENTITY_CLIENT_ID: "DEFAULT_IDENTITY_CLIENT_ID",
    IDENTITY_ENDPOINT: "IDENTITY_ENDPOINT",
    IDENTITY_HEADER: "IDENTITY_HEADER",
    IDENTITY_SERVER_THUMBPRINT: "IDENTITY_SERVER_THUMBPRINT",
    IMDS_ENDPOINT: "IMDS_ENDPOINT",
    MSI_ENDPOINT: "MSI_ENDPOINT",
    MSI_SECRET: "MSI_SECRET"
  },
  b = {
    APP_SERVICE: "AppService",
    AZURE_ARC: "AzureArc",
    CLOUD_SHELL: "CloudShell",
    DEFAULT_TO_IMDS: "DefaultToImds",
    IMDS: "Imds",
    MACHINE_LEARNING: "MachineLearning",
    SERVICE_FABRIC: "ServiceFabric"
  },
  ne = {
    SYSTEM_ASSIGNED: "system-assigned",
    USER_ASSIGNED_CLIENT_ID: "user-assigned-client-id",
    USER_ASSIGNED_RESOURCE_ID: "user-assigned-resource-id",
    USER_ASSIGNED_OBJECT_ID: "user-assigned-object-id"
  },
  J = {
    GET: "get",
    POST: "post"
  },
  ji = {
    SUCCESS_RANGE_START: P.SUCCESS_RANGE_START,
    SUCCESS_RANGE_END: P.SUCCESS_RANGE_END,
    SERVER_ERROR: P.SERVER_ERROR
  },
  yh = "REGION_NAME",
  Th = "MSAL_FORCE_REGION",
  Eh = 32,
  Ch = {
    SHA256: "sha256"
  },
  Yi = {
    CV_CHARSET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
  },
  Qa = {
    KEY_SEPARATOR: "-"
  },
  Se = {
    MSAL_SKU: "msal.js.node",
    JWT_BEARER_ASSERTION_TYPE: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    AUTHORIZATION_PENDING: "authorization_pending",
    HTTP_PROTOCOL: "http://",
    LOCALHOST: "localhost"
  },
  St = {
    acquireTokenSilent: 62,
    acquireTokenByUsernamePassword: 371,
    acquireTokenByDeviceCode: 671,
    acquireTokenByClientCredential: 771,
    acquireTokenByCode: 871,
    acquireTokenByRefreshToken: 872
  },
  Ke = {
    RSA_256: "RS256",
    PSS_256: "PS256",
    X5T_256: "x5t#S256",
    X5T: "x5t",
    X5C: "x5c",
    AUDIENCE: "aud",
    EXPIRATION_TIME: "exp",
    ISSUER: "iss",
    SUBJECT: "sub",
    NOT_BEFORE: "nbf",
    JWT_ID: "jti"
  },
  Wi = {
    INTERVAL_MS: 100,
    TIMEOUT_MS: 5000
  },
  Ah = 4096; /*! @azure/msal-node v3.8.1 2025-10-29 */
class Io {
  static getNetworkResponse(headers_6, body_3, status_2) {
    return {
      headers: headers_6,
      body: body_3,
      status: status_2
    };
  }
  static urlToHttpOptions(e) {
    let t = {
      protocol: e.protocol,
      hostname: e.hostname && e.hostname.startsWith("[") ? e.hostname.slice(1, -1) : e.hostname,
      hash: e.hash,
      search: e.search,
      pathname: e.pathname,
      path: `${e.pathname || ""}${e.search || ""}`,
      href: e.href
    };
    if (e.port !== "") t.port = Number(e.port);
    if (e.username || e.password) t.auth = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`;
    return t;
  }
}
import Ja from "http";
import Ih from "https"; /*! @azure/msal-node v3.8.1 2025-10-29 */
class _o {
  constructor(e, t) {
    this.proxyUrl = e || "", this.customAgentOptions = t || {};
  }
  async sendGetRequestAsync(e, t, r) {
    if (this.proxyUrl) return Sh(e, this.proxyUrl, J.GET, t, this.customAgentOptions, r);else return Rh(e, J.GET, t, this.customAgentOptions, r);
  }
  async sendPostRequestAsync(e, t) {
    if (this.proxyUrl) return Sh(e, this.proxyUrl, J.POST, t, this.customAgentOptions);else return Rh(e, J.POST, t, this.customAgentOptions);
  }
}
var Sh = (e, t, r, n, o, i) => {
    let s = new URL(e),
      a = new URL(t),
      headers_7 = n?.headers || {},
      l = {
        host: a.hostname,
        port: a.port,
        method: "CONNECT",
        path: s.hostname,
        headers: headers_7
      };
    if (o && Object.keys(o).length) l.agent = new Ja.Agent(o);
    let d = "";
    if (r === J.POST) {
      let m = n?.body || "";
      d = `Content-Type: application/x-www-form-urlencoded\r
Content-Length: ${m.length}\r
\r
${m}`;
    } else if (i) l.timeout = i;
    let u = `${r.toUpperCase()} ${s.href} HTTP/1.1\r
Host: ${s.host}\r
Connection: close\r
` + d + `\r
`;
    return new Promise((m, p) => {
      let y = Ja.request(l);
      if (i) y.on("timeout", () => {
        y.destroy(), p(Error("Request time out"));
      });
      y.end(), y.on("connect", (T, I) => {
        let k = T?.statusCode || ji.SERVER_ERROR;
        if (k < ji.SUCCESS_RANGE_START || k > ji.SUCCESS_RANGE_END) y.destroy(), I.destroy(), p(Error(`Error connecting to proxy. Http status code: ${T.statusCode}. Http status message: ${T?.statusMessage || "Unknown"}`));
        I.write(u);
        let U = [];
        I.on("data", B => {
          U.push(B);
        }), I.on("end", () => {
          let X = Buffer.concat([...U]).toString().split(`\r
`),
            A = parseInt(X[0].split(" ")[1]),
            C = X[0].split(" ").slice(2).join(" "),
            E = X[X.length - 1],
            _ = X.slice(1, X.length - 2),
            H = new Map();
          _.forEach(item => {
            let Bc = item.split(new RegExp(/:\s(.*)/s)),
              hm = Bc[0],
              ks = Bc[1];
            try {
              let No = JSON.parse(ks);
              if (No && typeof No === "object") ks = No;
            } catch (error) {}
            H.set(hm, ks);
          });
          let D = Object.fromEntries(H),
            se = Io.getNetworkResponse(D, wh(A, C, D, E), A);
          if ((A < P.SUCCESS_RANGE_START || A > P.SUCCESS_RANGE_END) && se.body.error !== Se.AUTHORIZATION_PENDING) y.destroy();
          m(se);
        }), I.on("error", B => {
          y.destroy(), I.destroy(), p(Error(B.toString()));
        });
      }), y.on("error", T => {
        y.destroy(), p(Error(T.toString()));
      });
    });
  },
  Rh = (e, method, r, n, o) => {
    let i = method === J.POST,
      s = r?.body || "",
      a = new URL(e),
      headers_8 = r?.headers || {},
      l = {
        method: method,
        headers: headers_8,
        ...Io.urlToHttpOptions(a)
      };
    if (n && Object.keys(n).length) l.agent = new Ih.Agent(n);
    if (i) l.headers = {
      ...l.headers,
      "Content-Length": s.length
    };else if (o) l.timeout = o;
    return new Promise((d, u) => {
      let m;
      if (l.protocol === "http:") m = Ja.request(l);else m = Ih.request(l);
      if (i) m.write(s);
      if (o) m.on("timeout", () => {
        m.destroy(), u(Error("Request time out"));
      });
      m.end(), m.on("response", p => {
        let {
            headers: headers_9,
            statusCode: statusCode,
            statusMessage: statusMessage
          } = p,
          k = [];
        p.on("data", U => {
          k.push(U);
        }), p.on("end", () => {
          let U = Buffer.concat([...k]).toString(),
            B = headers_9,
            X = Io.getNetworkResponse(B, wh(statusCode, statusMessage, B, U), statusCode);
          if ((statusCode < P.SUCCESS_RANGE_START || statusCode > P.SUCCESS_RANGE_END) && X.body.error !== Se.AUTHORIZATION_PENDING) m.destroy();
          d(X);
        });
      }), m.on("error", p => {
        m.destroy(), u(Error(p.toString()));
      });
    });
  },
  wh = (e, t, r, n) => {
    let o;
    try {
      o = JSON.parse(n);
    } catch (i) {
      let error_7, a;
      if (e >= P.CLIENT_ERROR_RANGE_START && e <= P.CLIENT_ERROR_RANGE_END) error_7 = "client_error", a = "A client";else if (e >= P.SERVER_ERROR_RANGE_START && e <= P.SERVER_ERROR_RANGE_END) error_7 = "server_error", a = "A server";else error_7 = "unknown_error", a = "An unknown";
      o = {
        error: error_7,
        error_description: `${a} error occured.
Http status code: ${e}
Http status message: ${t || "Unknown"}
Headers: ${JSON.stringify(r)}`
      };
    }
    return o;
  }; /*! @azure/msal-node v3.8.1 2025-10-29 */
var Qi = "invalid_file_extension",
  Ji = "invalid_file_path",
  Wt = "invalid_managed_identity_id_type",
  Xi = "invalid_secret",
  vh = "missing_client_id",
  kh = "network_unavailable",
  Zi = "platform_not_supported",
  es = "unable_to_create_azure_arc",
  ts = "unable_to_create_cloud_shell",
  rs = "unable_to_create_source",
  So = "unable_to_read_secret_file",
  bh = "user_assigned_not_available_at_runtime",
  ns = "www_authenticate_header_missing",
  os = "www_authenticate_header_unsupported_format",
  vr = {
    [v.AZURE_POD_IDENTITY_AUTHORITY_HOST]: "azure_pod_identity_authority_host_url_malformed",
    [v.IDENTITY_ENDPOINT]: "identity_endpoint_url_malformed",
    [v.IMDS_ENDPOINT]: "imds_endpoint_url_malformed",
    [v.MSI_ENDPOINT]: "msi_endpoint_url_malformed"
  }; /*! @azure/msal-node v3.8.1 2025-10-29 */
var oy = {
  [Qi]: "The file path in the WWW-Authenticate header does not contain a .key file.",
  [Ji]: "The file path in the WWW-Authenticate header is not in a valid Windows or Linux Format.",
  [Wt]: "More than one ManagedIdentityIdType was provided.",
  [Xi]: "The secret in the file on the file path in the WWW-Authenticate header is greater than 4096 bytes.",
  [Zi]: "The platform is not supported by Azure Arc. Azure Arc only supports Windows and Linux.",
  [vh]: "A ManagedIdentityId id was not provided.",
  [vr.AZURE_POD_IDENTITY_AUTHORITY_HOST]: `The Managed Identity's '${v.AZURE_POD_IDENTITY_AUTHORITY_HOST}' environment variable is malformed.`,
  [vr.IDENTITY_ENDPOINT]: `The Managed Identity's '${v.IDENTITY_ENDPOINT}' environment variable is malformed.`,
  [vr.IMDS_ENDPOINT]: `The Managed Identity's '${v.IMDS_ENDPOINT}' environment variable is malformed.`,
  [vr.MSI_ENDPOINT]: `The Managed Identity's '${v.MSI_ENDPOINT}' environment variable is malformed.`,
  [kh]: "Authentication unavailable. The request to the managed identity endpoint timed out.",
  [es]: "Azure Arc Managed Identities can only be system assigned.",
  [ts]: "Cloud Shell Managed Identities can only be system assigned.",
  [rs]: "Unable to create a Managed Identity source based on environment variables.",
  [So]: "Unable to read the secret file.",
  [bh]: "Service Fabric user assigned managed identity ClientId or ResourceId is not configurable at runtime.",
  [ns]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is missing.",
  [os]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is in an unsupported format."
};
class ManagedIdentityError extends AuthError {
  constructor(e) {
    super(e, oy[e]);
    this.name = "ManagedIdentityError", Object.setPrototypeOf(this, ManagedIdentityError.prototype);
  }
}
function ae(e) {
  return new ManagedIdentityError(e);
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Za {
  get id() {
    return this._id;
  }
  set id(e) {
    this._id = e;
  }
  get idType() {
    return this._idType;
  }
  set idType(e) {
    this._idType = e;
  }
  constructor(e) {
    let t = e?.userAssignedClientId,
      r = e?.userAssignedResourceId,
      n = e?.userAssignedObjectId;
    if (t) {
      if (r || n) throw ae(Wt);
      this.id = t, this.idType = ne.USER_ASSIGNED_CLIENT_ID;
    } else if (r) {
      if (t || n) throw ae(Wt);
      this.id = r, this.idType = ne.USER_ASSIGNED_RESOURCE_ID;
    } else if (n) {
      if (t || r) throw ae(Wt);
      this.id = n, this.idType = ne.USER_ASSIGNED_OBJECT_ID;
    } else this.id = gh, this.idType = ne.SYSTEM_ASSIGNED;
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var le = {
  invalidLoopbackAddressType: {
    code: "invalid_loopback_server_address_type",
    desc: "Loopback server address is not type string. This is unexpected."
  },
  unableToLoadRedirectUri: {
    code: "unable_to_load_redirectUrl",
    desc: "Loopback server callback was invoked without a url. This is unexpected."
  },
  noAuthCodeInResponse: {
    code: "no_auth_code_in_response",
    desc: "No auth code found in the server response. Please check your network trace to determine what happened."
  },
  noLoopbackServerExists: {
    code: "no_loopback_server_exists",
    desc: "No loopback server exists yet."
  },
  loopbackServerAlreadyExists: {
    code: "loopback_server_already_exists",
    desc: "Loopback server already exists. Cannot create another."
  },
  loopbackServerTimeout: {
    code: "loopback_server_timeout",
    desc: "Timed out waiting for auth code listener to be registered."
  },
  stateNotFoundError: {
    code: "state_not_found",
    desc: "State not found. Please verify that the request originated from msal."
  },
  thumbprintMissing: {
    code: "thumbprint_missing_from_client_certificate",
    desc: "Client certificate does not contain a SHA-1 or SHA-256 thumbprint."
  },
  redirectUriNotSupported: {
    code: "redirect_uri_not_supported",
    desc: "RedirectUri is not supported in this scenario. Please remove redirectUri from the request."
  }
};
class NodeAuthError extends AuthError {
  constructor(e, t) {
    super(e, t);
    this.name = "NodeAuthError";
  }
  static createInvalidLoopbackAddressTypeError() {
    return new NodeAuthError(le.invalidLoopbackAddressType.code, `${le.invalidLoopbackAddressType.desc}`);
  }
  static createUnableToLoadRedirectUrlError() {
    return new NodeAuthError(le.unableToLoadRedirectUri.code, `${le.unableToLoadRedirectUri.desc}`);
  }
  static createNoAuthCodeInResponseError() {
    return new NodeAuthError(le.noAuthCodeInResponse.code, `${le.noAuthCodeInResponse.desc}`);
  }
  static createNoLoopbackServerExistsError() {
    return new NodeAuthError(le.noLoopbackServerExists.code, `${le.noLoopbackServerExists.desc}`);
  }
  static createLoopbackServerAlreadyExistsError() {
    return new NodeAuthError(le.loopbackServerAlreadyExists.code, `${le.loopbackServerAlreadyExists.desc}`);
  }
  static createLoopbackServerTimeoutError() {
    return new NodeAuthError(le.loopbackServerTimeout.code, `${le.loopbackServerTimeout.desc}`);
  }
  static createStateNotFoundError() {
    return new NodeAuthError(le.stateNotFoundError.code, le.stateNotFoundError.desc);
  }
  static createThumbprintMissingError() {
    return new NodeAuthError(le.thumbprintMissing.code, le.thumbprintMissing.desc);
  }
  static createRedirectUriNotSupportedError() {
    return new NodeAuthError(le.redirectUriNotSupported.code, le.redirectUriNotSupported.desc);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var iy = {
    clientId: f.EMPTY_STRING,
    authority: f.DEFAULT_AUTHORITY,
    clientSecret: f.EMPTY_STRING,
    clientAssertion: f.EMPTY_STRING,
    clientCertificate: {
      thumbprint: f.EMPTY_STRING,
      thumbprintSha256: f.EMPTY_STRING,
      privateKey: f.EMPTY_STRING,
      x5c: f.EMPTY_STRING
    },
    knownAuthorities: [],
    cloudDiscoveryMetadata: f.EMPTY_STRING,
    authorityMetadata: f.EMPTY_STRING,
    clientCapabilities: [],
    protocolMode: Ae.AAD,
    azureCloudOptions: {
      azureCloudInstance: Ft.None,
      tenant: f.EMPTY_STRING
    },
    skipAuthorityMetadataCache: !1,
    encodeExtraQueryParams: !1
  },
  sy = {
    claimsBasedCachingEnabled: !1
  },
  loggerOptions_3 = {
    loggerCallback: () => {},
    piiLoggingEnabled: !1,
    logLevel: G.Info
  },
  ay = {
    loggerOptions: loggerOptions_3,
    networkClient: new _o(),
    proxyUrl: f.EMPTY_STRING,
    customAgentOptions: {},
    disableInternalRetries: !1
  },
  cy = {
    application: {
      appName: f.EMPTY_STRING,
      appVersion: f.EMPTY_STRING
    }
  };
function Ph({
  auth: auth,
  broker: broker,
  cache: cache,
  system: system,
  telemetry: telemetry_2
}) {
  let i = {
    ...ay,
    networkClient: new _o(system?.proxyUrl, system?.customAgentOptions),
    loggerOptions: system?.loggerOptions || loggerOptions_3,
    disableInternalRetries: system?.disableInternalRetries || !1
  };
  if (!!auth.clientCertificate && !auth.clientCertificate.thumbprint && !auth.clientCertificate.thumbprintSha256) throw NodeAuthError.createStateNotFoundError();
  return {
    auth: {
      ...iy,
      ...auth
    },
    broker: {
      ...broker
    },
    cache: {
      ...sy,
      ...cache
    },
    system: {
      ...i,
      ...system
    },
    telemetry: {
      ...cy,
      ...telemetry_2
    }
  };
}
function Oh({
  clientCapabilities: clientCapabilities,
  managedIdentityIdParams: managedIdentityIdParams,
  system: system_2
}) {
  let managedIdentityId = new Za(managedIdentityIdParams),
    loggerOptions_4 = system_2?.loggerOptions || loggerOptions_3,
    networkClient;
  if (system_2?.networkClient) networkClient = system_2.networkClient;else networkClient = new _o(system_2?.proxyUrl, system_2?.customAgentOptions);
  return {
    clientCapabilities: clientCapabilities || [],
    managedIdentityId: managedIdentityId,
    system: {
      loggerOptions: loggerOptions_4,
      networkClient: networkClient
    },
    disableInternalRetries: system_2?.disableInternalRetries || !1
  };
}
import { randomUUID } from "crypto";
var tc = {
  randomUUID: randomUUID
};
import { randomFillSync as dy } from "crypto";
var uint8Array = new Uint8Array(256),
  is = uint8Array.length;
function rc() {
  if (is > uint8Array.length - 16) dy(uint8Array), is = 0;
  return uint8Array.slice(is, is += 16);
}
var ge = [];
for (let e = 0; e < 256; ++e) ge.push((e + 256).toString(16).slice(1));
function Nh(e, t = 0) {
  return (ge[e[t + 0]] + ge[e[t + 1]] + ge[e[t + 2]] + ge[e[t + 3]] + "-" + ge[e[t + 4]] + ge[e[t + 5]] + "-" + ge[e[t + 6]] + ge[e[t + 7]] + "-" + ge[e[t + 8]] + ge[e[t + 9]] + "-" + ge[e[t + 10]] + ge[e[t + 11]] + ge[e[t + 12]] + ge[e[t + 13]] + ge[e[t + 14]] + ge[e[t + 15]]).toLowerCase();
}
function uy(e, t, r) {
  if (tc.randomUUID && !t && !e) return tc.randomUUID();
  e = e || {};
  let n = e.random ?? e.rng?.() ?? rc();
  if (n.length < 16) throw Error("Random bytes length must be >= 16");
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    if (r = r || 0, r < 0 || r + 16 > t.length) throw RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let o = 0; o < 16; ++o) t[r + o] = n[o];
    return t;
  }
  return Nh(n);
}
var nc = uy; /*! @azure/msal-node v3.8.1 2025-10-29 */
class Ro {
  generateGuid() {
    return nc();
  }
  isGuid(e) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class xe {
  static base64Encode(e, t) {
    return Buffer.from(e, t).toString(me.BASE64);
  }
  static base64EncodeUrl(e, t) {
    return xe.base64Encode(e, t).replace(/=/g, f.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
  }
  static base64Decode(e) {
    return Buffer.from(e, me.BASE64).toString("utf8");
  }
  static base64DecodeUrl(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    while (t.length % 4) t += "=";
    return xe.base64Decode(t);
  }
}
import hy from "crypto"; /*! @azure/msal-node v3.8.1 2025-10-29 */
class kr {
  sha256(e) {
    return hy.createHash(Ch.SHA256).update(e).digest();
  }
}
import fy from "crypto"; /*! @azure/msal-node v3.8.1 2025-10-29 */
class oc {
  constructor() {
    this.hashUtils = new kr();
  }
  async generatePkceCodes() {
    let verifier = this.generateCodeVerifier(),
      challenge = this.generateCodeChallengeFromVerifier(verifier);
    return {
      verifier: verifier,
      challenge: challenge
    };
  }
  generateCodeVerifier() {
    let e = [],
      t = 256 - 256 % Yi.CV_CHARSET.length;
    while (e.length <= Eh) {
      let n = fy.randomBytes(1)[0];
      if (n >= t) continue;
      let o = n % Yi.CV_CHARSET.length;
      e.push(Yi.CV_CHARSET[o]);
    }
    let r = e.join(f.EMPTY_STRING);
    return xe.base64EncodeUrl(r);
  }
  generateCodeChallengeFromVerifier(e) {
    return xe.base64EncodeUrl(this.hashUtils.sha256(e).toString(me.BASE64), me.BASE64);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Qt {
  constructor() {
    this.pkceGenerator = new oc(), this.guidGenerator = new Ro(), this.hashUtils = new kr();
  }
  base64UrlEncode() {
    throw Error("Method not implemented.");
  }
  encodeKid() {
    throw Error("Method not implemented.");
  }
  createNewGuid() {
    return this.guidGenerator.generateGuid();
  }
  base64Encode(e) {
    return xe.base64Encode(e);
  }
  base64Decode(e) {
    return xe.base64Decode(e);
  }
  generatePkceCodes() {
    return this.pkceGenerator.generatePkceCodes();
  }
  getPublicKeyThumbprint() {
    throw Error("Method not implemented.");
  }
  removeTokenBindingKey() {
    throw Error("Method not implemented.");
  }
  clearKeystore() {
    throw Error("Method not implemented.");
  }
  signJwt() {
    throw Error("Method not implemented.");
  }
  async hashString(e) {
    return xe.base64EncodeUrl(this.hashUtils.sha256(e).toString(me.BASE64), me.BASE64);
  }
} /*! @azure/msal-common v15.13.1 2025-10-29 */ /*! @azure/msal-node v3.8.1 2025-10-29 */
function xh(e) {
  let t = e.credentialType === K.REFRESH_TOKEN && e.familyId || e.clientId,
    r = e.tokenType && e.tokenType.toLowerCase() !== L.BEARER.toLowerCase() ? e.tokenType.toLowerCase() : "";
  return [e.homeAccountId, e.environment, e.credentialType, t, e.realm || "", e.target || "", e.requestedClaimsHash || "", r].join(Qa.KEY_SEPARATOR).toLowerCase();
}
function Mh(e) {
  let t = e.homeAccountId.split(".")[1];
  return [e.homeAccountId, e.environment, t || e.tenantId || ""].join(Qa.KEY_SEPARATOR).toLowerCase();
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class br extends yr {
  constructor(e, t, r, n) {
    super(t, r, e, new bn(), n);
    this.cache = {}, this.changeEmitters = [], this.logger = e;
  }
  registerChangeEmitter(e) {
    this.changeEmitters.push(e);
  }
  emitChange() {
    this.changeEmitters.forEach(item => item.call(null));
  }
  cacheToInMemoryCache(e) {
    let t = {
      accounts: {},
      idTokens: {},
      accessTokens: {},
      refreshTokens: {},
      appMetadata: {}
    };
    for (let r in e) {
      let n = e[r];
      if (typeof n !== "object") continue;
      if (n instanceof fe) t.accounts[r] = n;else if (th(n)) t.idTokens[r] = n;else if (eh(n)) t.accessTokens[r] = n;else if (rh(n)) t.refreshTokens[r] = n;else if (nh(r, n)) t.appMetadata[r] = n;else continue;
    }
    return t;
  }
  inMemoryCacheToCache(e) {
    let t = this.getCache();
    return t = {
      ...t,
      ...e.accounts,
      ...e.idTokens,
      ...e.accessTokens,
      ...e.refreshTokens,
      ...e.appMetadata
    }, t;
  }
  getInMemoryCache() {
    return this.logger.trace("Getting in-memory cache"), this.cacheToInMemoryCache(this.getCache());
  }
  setInMemoryCache(e) {
    this.logger.trace("Setting in-memory cache");
    let t = this.inMemoryCacheToCache(e);
    this.setCache(t), this.emitChange();
  }
  getCache() {
    return this.logger.trace("Getting cache key-value store"), this.cache;
  }
  setCache(e) {
    this.logger.trace("Setting cache key value store"), this.cache = e, this.emitChange();
  }
  getItem(e) {
    return this.logger.tracePii(`Item key: ${e}`), this.getCache()[e];
  }
  setItem(e, t) {
    this.logger.tracePii(`Item key: ${e}`);
    let r = this.getCache();
    r[e] = t, this.setCache(r);
  }
  generateCredentialKey(e) {
    return xh(e);
  }
  generateAccountKey(e) {
    return Mh(e);
  }
  getAccountKeys() {
    let e = this.getInMemoryCache();
    return Object.keys(e.accounts);
  }
  getTokenKeys() {
    let e = this.getInMemoryCache();
    return {
      idToken: Object.keys(e.idTokens),
      accessToken: Object.keys(e.accessTokens),
      refreshToken: Object.keys(e.refreshTokens)
    };
  }
  getAccount(e) {
    return this.getItem(e) ? Object.assign(new fe(), this.getItem(e)) : null;
  }
  async setAccount(e) {
    let t = this.generateAccountKey(fe.getAccountInfo(e));
    this.setItem(t, e);
  }
  getIdTokenCredential(e) {
    let t = this.getItem(e);
    if (th(t)) return t;
    return null;
  }
  async setIdTokenCredential(e) {
    let t = this.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getAccessTokenCredential(e) {
    let t = this.getItem(e);
    if (eh(t)) return t;
    return null;
  }
  async setAccessTokenCredential(e) {
    let t = this.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getRefreshTokenCredential(e) {
    let t = this.getItem(e);
    if (rh(t)) return t;
    return null;
  }
  async setRefreshTokenCredential(e) {
    let t = this.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getAppMetadata(e) {
    let t = this.getItem(e);
    if (nh(e, t)) return t;
    return null;
  }
  setAppMetadata(e) {
    let t = Lg(e);
    this.setItem(t, e);
  }
  getServerTelemetry(e) {
    let t = this.getItem(e);
    if (t && Dg(e, t)) return t;
    return null;
  }
  setServerTelemetry(e, t) {
    this.setItem(e, t);
  }
  getAuthorityMetadata(e) {
    let t = this.getItem(e);
    if (t && Hg(e, t)) return t;
    return null;
  }
  getAuthorityMetadataKeys() {
    return this.getKeys().filter(item => this.isAuthorityMetadata(item));
  }
  setAuthorityMetadata(e, t) {
    this.setItem(e, t);
  }
  getThrottlingCache(e) {
    let t = this.getItem(e);
    if (t && Ug(e, t)) return t;
    return null;
  }
  setThrottlingCache(e, t) {
    this.setItem(e, t);
  }
  removeItem(e) {
    this.logger.tracePii(`Item key: ${e}`);
    let t = !1,
      r = this.getCache();
    if (r[e]) delete r[e], t = !0;
    if (t) this.setCache(r), this.emitChange();
    return t;
  }
  removeOutdatedAccount(e) {
    this.removeItem(e);
  }
  containsKey(e) {
    return this.getKeys().includes(e);
  }
  getKeys() {
    this.logger.trace("Retrieving all cache keys");
    let e = this.getCache();
    return [...Object.keys(e)];
  }
  clear() {
    this.logger.trace("Clearing cache entries created by MSAL"), this.getKeys().forEach(item => {
      this.removeItem(item);
    }), this.emitChange();
  }
  static generateInMemoryCache(e) {
    return wr.deserializeAllCache(wr.deserializeJSONBlob(e));
  }
  static generateJsonCache(e) {
    return Jr.serializeAllCache(e);
  }
  updateCredentialCacheKey(e, t) {
    let r = this.generateCredentialKey(t);
    if (e !== r) {
      let n = this.getItem(e);
      if (n) return this.removeItem(e), this.setItem(r, n), this.logger.verbose(`Updated an outdated ${t.credentialType} cache key`), r;else this.logger.error(`Attempted to update an outdated ${t.credentialType} cache key but no item matching the outdated key was found in storage`);
    }
    return e;
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var wo = {
  Account: {},
  IdToken: {},
  AccessToken: {},
  RefreshToken: {},
  AppMetadata: {}
};
class as {
  constructor(e, t, r) {
    if (this.cacheHasChanged = !1, this.storage = e, this.storage.registerChangeEmitter(this.handleChangeEvent.bind(this)), r) this.persistence = r;
    this.logger = t;
  }
  hasChanged() {
    return this.cacheHasChanged;
  }
  serialize() {
    this.logger.trace("Serializing in-memory cache");
    let e = Jr.serializeAllCache(this.storage.getInMemoryCache());
    if (this.cacheSnapshot) this.logger.trace("Reading cache snapshot from disk"), e = this.mergeState(JSON.parse(this.cacheSnapshot), e);else this.logger.trace("No cache snapshot to merge");
    return this.cacheHasChanged = !1, JSON.stringify(e);
  }
  deserialize(e) {
    if (this.logger.trace("Deserializing JSON to in-memory cache"), this.cacheSnapshot = e, this.cacheSnapshot) {
      this.logger.trace("Reading cache snapshot from disk");
      let t = wr.deserializeAllCache(this.overlayDefaults(JSON.parse(this.cacheSnapshot)));
      this.storage.setInMemoryCache(t);
    } else this.logger.trace("No cache snapshot to deserialize");
  }
  getKVStore() {
    return this.storage.getCache();
  }
  getCacheSnapshot() {
    let e = br.generateInMemoryCache(this.cacheSnapshot);
    return this.storage.inMemoryCacheToCache(e);
  }
  async getAllAccounts(e = new Qt().createNewGuid()) {
    this.logger.trace("getAllAccounts called");
    let t;
    try {
      if (this.persistence) t = new Ze(this, !1), await this.persistence.beforeCacheAccess(t);
      return this.storage.getAllAccounts({}, e);
    } finally {
      if (this.persistence && t) await this.persistence.afterCacheAccess(t);
    }
  }
  async getAccountByHomeId(e) {
    let t = await this.getAllAccounts();
    if (e && t && t.length) return t.filter(item => item.homeAccountId === e)[0] || null;else return null;
  }
  async getAccountByLocalId(e) {
    let t = await this.getAllAccounts();
    if (e && t && t.length) return t.filter(item => item.localAccountId === e)[0] || null;else return null;
  }
  async removeAccount(e, t) {
    this.logger.trace("removeAccount called");
    let r;
    try {
      if (this.persistence) r = new Ze(this, !0), await this.persistence.beforeCacheAccess(r);
      this.storage.removeAccount(e, t || new Ro().generateGuid());
    } finally {
      if (this.persistence && r) await this.persistence.afterCacheAccess(r);
    }
  }
  async overwriteCache() {
    if (!this.persistence) {
      this.logger.info("No persistence layer specified, cache cannot be overwritten");
      return;
    }
    this.logger.info("Overwriting in-memory cache with persistent cache"), this.storage.clear();
    let e = new Ze(this, !1);
    await this.persistence.beforeCacheAccess(e);
    let t = this.getCacheSnapshot();
    this.storage.setCache(t), await this.persistence.afterCacheAccess(e);
  }
  handleChangeEvent() {
    this.cacheHasChanged = !0;
  }
  mergeState(e, t) {
    this.logger.trace("Merging in-memory cache with cache snapshot");
    let r = this.mergeRemovals(e, t);
    return this.mergeUpdates(r, t);
  }
  mergeUpdates(e, t) {
    return Object.keys(t).forEach(item => {
      let n = t[item];
      if (!e.hasOwnProperty(item)) {
        if (n !== null) e[item] = n;
      } else {
        let o = n !== null,
          i = typeof n === "object",
          s = !Array.isArray(n),
          a = typeof e[item] < "u" && e[item] !== null;
        if (o && i && s && a) this.mergeUpdates(e[item], n);else e[item] = n;
      }
    }), e;
  }
  mergeRemovals(e, t) {
    this.logger.trace("Remove updated entries in cache");
    let Account = e.Account ? this.mergeRemovalsDict(e.Account, t.Account) : e.Account,
      AccessToken = e.AccessToken ? this.mergeRemovalsDict(e.AccessToken, t.AccessToken) : e.AccessToken,
      RefreshToken = e.RefreshToken ? this.mergeRemovalsDict(e.RefreshToken, t.RefreshToken) : e.RefreshToken,
      IdToken = e.IdToken ? this.mergeRemovalsDict(e.IdToken, t.IdToken) : e.IdToken,
      AppMetadata = e.AppMetadata ? this.mergeRemovalsDict(e.AppMetadata, t.AppMetadata) : e.AppMetadata;
    return {
      ...e,
      Account: Account,
      AccessToken: AccessToken,
      RefreshToken: RefreshToken,
      IdToken: IdToken,
      AppMetadata: AppMetadata
    };
  }
  mergeRemovalsDict(e, t) {
    let r = {
      ...e
    };
    return Object.keys(e).forEach(item => {
      if (!t || !t.hasOwnProperty(item)) delete r[item];
    }), r;
  }
  overlayDefaults(e) {
    return this.logger.trace("Overlaying input cache with the default cache"), {
      Account: {
        ...wo.Account,
        ...e.Account
      },
      IdToken: {
        ...wo.IdToken,
        ...e.IdToken
      },
      AccessToken: {
        ...wo.AccessToken,
        ...e.AccessToken
      },
      RefreshToken: {
        ...wo.RefreshToken,
        ...e.RefreshToken
      },
      AppMetadata: {
        ...wo.AppMetadata,
        ...e.AppMetadata
      }
    };
  }
}
var Hf = ve(Lf(), 1); /*! @azure/msal-node v3.8.1 2025-10-29 */
class ct {
  static fromAssertion(e) {
    let t = new ct();
    return t.jwt = e, t;
  }
  static fromCertificate(e, t, r) {
    let n = new ct();
    if (n.privateKey = t, n.thumbprint = e, n.useSha256 = !1, r) n.publicCertificate = this.parseCertificate(r);
    return n;
  }
  static fromCertificateWithSha256Thumbprint(e, t, r) {
    let n = new ct();
    if (n.privateKey = t, n.thumbprint = e, n.useSha256 = !0, r) n.publicCertificate = this.parseCertificate(r);
    return n;
  }
  getJwt(e, t, r) {
    if (this.privateKey && this.thumbprint) {
      if (this.jwt && !this.isExpired() && t === this.issuer && r === this.jwtAudience) return this.jwt;
      return this.createJwt(e, t, r);
    }
    if (this.jwt) return this.jwt;
    throw g(code_34);
  }
  createJwt(e, t, r) {
    this.issuer = t, this.jwtAudience = r;
    let n = Q();
    this.expirationTime = n + 600;
    let header_3 = {
        alg: this.useSha256 ? Ke.PSS_256 : Ke.RSA_256
      },
      s = this.useSha256 ? Ke.X5T_256 : Ke.X5T;
    if (Object.assign(header_3, {
      [s]: xe.base64EncodeUrl(this.thumbprint, me.HEX)
    }), this.publicCertificate) Object.assign(header_3, {
      [Ke.X5C]: this.publicCertificate
    });
    let a = {
      [Ke.AUDIENCE]: this.jwtAudience,
      [Ke.EXPIRATION_TIME]: this.expirationTime,
      [Ke.ISSUER]: this.issuer,
      [Ke.SUBJECT]: this.issuer,
      [Ke.NOT_BEFORE]: n,
      [Ke.JWT_ID]: e.createNewGuid()
    };
    return this.jwt = Hf.default.sign(a, this.privateKey, {
      header: header_3
    }), this.jwt;
  }
  isExpired() {
    return this.expirationTime < Q();
  }
  static parseCertificate(e) {
    let t = /-----BEGIN CERTIFICATE-----\r*\n(.+?)\r*\n-----END CERTIFICATE-----/gs,
      r = [],
      n;
    while ((n = t.exec(e)) !== null) r.push(n[1].replace(/\r*\n/g, f.EMPTY_STRING));
    return r;
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var ps = "@azure/msal-node",
  lt = "3.8.1"; /*! @azure/msal-node v3.8.1 2025-10-29 */
class gs extends Te {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    this.logger.info("in acquireToken call in username-password client");
    let t = Q(),
      r = await this.executeTokenRequest(this.authority, e),
      n = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return n.validateTokenResponse(r.body), n.handleServerTokenResponse(r.body, this.authority, t, e);
  }
  async executeTokenRequest(e, t) {
    let r = this.createTokenQueryParameters(t),
      n = x.appendQueryString(e.tokenEndpoint, r),
      o = await this.createTokenRequestBody(t),
      i = this.createTokenRequestHeaders({
        credential: t.username,
        type: Ie.UPN
      }),
      s = {
        clientId: this.config.authOptions.clientId,
        authority: e.canonicalAuthority,
        scopes: t.scopes,
        claims: t.claims,
        authenticationScheme: t.authenticationScheme,
        resourceRequestMethod: t.resourceRequestMethod,
        resourceRequestUri: t.resourceRequestUri,
        shrClaims: t.shrClaims,
        sshKid: t.sshKid
      };
    return this.executePostToTokenEndpoint(n, o, i, s, t.correlationId);
  }
  async createTokenRequestBody(e) {
    let t = new Map();
    if (Je(t, this.config.authOptions.clientId), Ng(t, e.username), xg(t, e.password), Qe(t, e.scopes), Du(t, Xr.IDTOKEN_TOKEN), Gt(t, Pe.RESOURCE_OWNER_PASSWORD_GRANT), At(t), Et(t, this.config.libraryInfo), Ct(t, this.config.telemetry.application), Kt(t), this.serverTelemetryManager) qt(t, this.serverTelemetryManager);
    let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (at(t, r), this.config.clientCredentials.clientSecret) Tr(t, this.config.clientCredentials.clientSecret);
    let clientAssertion_3 = this.config.clientCredentials.clientAssertion;
    if (clientAssertion_3) Er(t, await _e(clientAssertion_3.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), Cr(t, clientAssertion_3.assertionType);
    if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Xe(t, e.claims, this.config.authOptions.clientCapabilities);
    if (this.config.systemOptions.preventCorsPreflight && e.username) Bt(t, e.username);
    return pe(t);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
function Ff(e, authority, r, n) {
  let o = qg({
    ...e.auth,
    authority: authority,
    redirectUri: r.redirectUri || ""
  }, r, n);
  if (Et(o, {
    sku: Se.MSAL_SKU,
    version: lt,
    cpu: "x64",
    os: "win32"
  }), e.auth.protocolMode !== Ae.OIDC) Ct(o, e.telemetry.application);
  if (Du(o, Xr.CODE), r.codeChallenge && r.codeChallengeMethod) vg(o, r.codeChallenge, r.codeChallengeMethod);
  return He(o, r.extraQueryParameters || {}), Kg(authority, o, e.auth.encodeExtraQueryParams, r.extraQueryParameters);
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Mn {
  constructor(e) {
    this.config = Ph(e), this.cryptoProvider = new Qt(), this.logger = new Le(this.config.system.loggerOptions, ps, lt), this.storage = new br(this.logger, this.config.auth.clientId, this.cryptoProvider, Ka(this.config.auth)), this.tokenCache = new as(this.storage, this.logger, this.config.cache.cachePlugin);
  }
  async getAuthCodeUrl(e) {
    this.logger.info("getAuthCodeUrl called", e.correlationId);
    let t = {
        ...e,
        ...(await this.initializeBaseRequest(e)),
        responseMode: e.responseMode || mt.QUERY,
        authenticationScheme: L.BEARER,
        state: e.state || "",
        nonce: e.nonce || ""
      },
      r = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions);
    return Ff(this.config, r, t, this.logger);
  }
  async acquireTokenByCode(e, t) {
    if (this.logger.info("acquireTokenByCode called"), e.state && t) this.logger.info("acquireTokenByCode - validating state"), this.validateState(e.state, t.state || ""), t = {
      ...t,
      state: ""
    };
    let r = {
        ...e,
        ...(await this.initializeBaseRequest(e)),
        authenticationScheme: L.BEARER
      },
      n = this.initializeServerTelemetryManager(St.acquireTokenByCode, r.correlationId);
    try {
      let o = await this.createAuthority(r.authority, r.correlationId, void 0, e.azureCloudOptions),
        i = await this.buildOauthClientConfiguration(o, r.correlationId, r.redirectUri, n),
        s = new Ki(i);
      return this.logger.verbose("Auth code client created", r.correlationId), await s.acquireToken(r, t);
    } catch (error) {
      if (error instanceof AuthError) error.setCorrelationId(r.correlationId);
      throw n.cacheFailedRequest(error), error;
    }
  }
  async acquireTokenByRefreshToken(e) {
    this.logger.info("acquireTokenByRefreshToken called", e.correlationId);
    let t = {
        ...e,
        ...(await this.initializeBaseRequest(e)),
        authenticationScheme: L.BEARER
      },
      r = this.initializeServerTelemetryManager(St.acquireTokenByRefreshToken, t.correlationId);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions),
        o = await this.buildOauthClientConfiguration(n, t.correlationId, t.redirectUri || "", r),
        i = new xn(o);
      return this.logger.verbose("Refresh token client created", t.correlationId), await i.acquireToken(t);
    } catch (error) {
      if (error instanceof AuthError) error.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(error), error;
    }
  }
  async acquireTokenSilent(e) {
    let t = {
        ...e,
        ...(await this.initializeBaseRequest(e)),
        forceRefresh: e.forceRefresh || !1
      },
      r = this.initializeServerTelemetryManager(St.acquireTokenSilent, t.correlationId, t.forceRefresh);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions),
        o = await this.buildOauthClientConfiguration(n, t.correlationId, t.redirectUri || "", r),
        i = new Vi(o);
      this.logger.verbose("Silent flow client created", t.correlationId);
      try {
        return await this.tokenCache.overwriteCache(), await this.acquireCachedTokenSilent(t, i, o);
      } catch (error) {
        if (error instanceof ClientAuthError && error.errorCode === code_36) return new xn(o).acquireTokenByRefreshToken(t);
        throw error;
      }
    } catch (error) {
      if (error instanceof AuthError) error.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(error), error;
    }
  }
  async acquireCachedTokenSilent(e, t, r) {
    let [n, o] = await t.acquireCachedToken({
      ...e,
      scopes: e.scopes?.length ? e.scopes : [...ye]
    });
    if (o === j.PROACTIVELY_REFRESHED) {
      this.logger.info("ClientApplication:acquireCachedTokenSilent - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
      let i = new xn(r);
      try {
        await i.acquireTokenByRefreshToken(e);
      } catch {}
    }
    return n;
  }
  async acquireTokenByUsernamePassword(e) {
    this.logger.info("acquireTokenByUsernamePassword called", e.correlationId);
    let t = {
        ...e,
        ...(await this.initializeBaseRequest(e))
      },
      r = this.initializeServerTelemetryManager(St.acquireTokenByUsernamePassword, t.correlationId);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions),
        o = await this.buildOauthClientConfiguration(n, t.correlationId, "", r),
        i = new gs(o);
      return this.logger.verbose("Username password client created", t.correlationId), await i.acquireToken(t);
    } catch (error) {
      if (error instanceof AuthError) error.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(error), error;
    }
  }
  getTokenCache() {
    return this.logger.info("getTokenCache called"), this.tokenCache;
  }
  validateState(e, t) {
    if (!e) throw NodeAuthError.createStateNotFoundError();
    if (e !== t) throw g(code_13);
  }
  getLogger() {
    return this.logger;
  }
  setLogger(e) {
    this.logger = e;
  }
  async buildOauthClientConfiguration(authority_2, correlationId_3, redirectUri, serverTelemetryManager_2) {
    return this.logger.verbose("buildOauthClientConfiguration called", correlationId_3), this.logger.info(`Building oauth client configuration with the following authority: ${authority_2.tokenEndpoint}.`, correlationId_3), serverTelemetryManager_2?.updateRegionDiscoveryMetadata(authority_2.regionDiscoveryMetadata), {
      authOptions: {
        clientId: this.config.auth.clientId,
        authority: authority_2,
        clientCapabilities: this.config.auth.clientCapabilities,
        redirectUri: redirectUri
      },
      loggerOptions: {
        logLevel: this.config.system.loggerOptions.logLevel,
        loggerCallback: this.config.system.loggerOptions.loggerCallback,
        piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
        correlationId: correlationId_3
      },
      cacheOptions: {
        claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
      },
      cryptoInterface: this.cryptoProvider,
      networkInterface: this.config.system.networkClient,
      storageInterface: this.storage,
      serverTelemetryManager: serverTelemetryManager_2,
      clientCredentials: {
        clientSecret: this.clientSecret,
        clientAssertion: await this.getClientAssertion(authority_2)
      },
      libraryInfo: {
        sku: Se.MSAL_SKU,
        version: lt,
        cpu: "x64",
        os: "win32"
      },
      telemetry: this.config.telemetry,
      persistencePlugin: this.config.cache.cachePlugin,
      serializableCache: this.tokenCache
    };
  }
  async getClientAssertion(e) {
    if (this.developerProvidedClientAssertion) this.clientAssertion = ct.fromAssertion(await _e(this.developerProvidedClientAssertion, this.config.auth.clientId, e.tokenEndpoint));
    return this.clientAssertion && {
      assertion: this.clientAssertion.getJwt(this.cryptoProvider, this.config.auth.clientId, e.tokenEndpoint),
      assertionType: Se.JWT_BEARER_ASSERTION_TYPE
    };
  }
  async initializeBaseRequest(e) {
    if (this.logger.verbose("initializeRequestScopes called", e.correlationId), e.authenticationScheme && e.authenticationScheme === L.POP) this.logger.verbose("Authentication Scheme 'pop' is not supported yet, setting Authentication Scheme to 'Bearer' for request", e.correlationId);
    if (e.authenticationScheme = L.BEARER, this.config.cache.claimsBasedCachingEnabled && e.claims && !re.isEmptyObj(e.claims)) e.requestedClaimsHash = await this.cryptoProvider.hashString(e.claims);
    return {
      ...e,
      scopes: [...(e && e.scopes || []), ...ye],
      correlationId: e && e.correlationId || this.cryptoProvider.createNewGuid(),
      authority: e.authority || this.config.auth.authority
    };
  }
  initializeServerTelemetryManager(apiId, correlationId_4, r) {
    let n = {
      clientId: this.config.auth.clientId,
      correlationId: correlationId_4,
      apiId: apiId,
      forceRefresh: r || !1
    };
    return new Yt(n, this.storage);
  }
  async createAuthority(e, t, azureRegionConfiguration, n) {
    this.logger.verbose("createAuthority called", t);
    let o = ue.generateAuthority(e, n || this.config.auth.azureCloudOptions),
      i = {
        protocolMode: this.config.auth.protocolMode,
        knownAuthorities: this.config.auth.knownAuthorities,
        cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
        authorityMetadata: this.config.auth.authorityMetadata,
        azureRegionConfiguration: azureRegionConfiguration,
        skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
      };
    return Va(o, this.config.system.networkClient, this.storage, i, this.logger, t);
  }
  clearCache() {
    this.storage.clear();
  }
}
import PE from "http"; /*! @azure/msal-node v3.8.1 2025-10-29 */
class Tc {
  async listenForAuthCode(e, t) {
    if (this.server) throw NodeAuthError.createLoopbackServerAlreadyExistsError();
    return new Promise((r, n) => {
      this.server = PE.createServer((o, i) => {
        let s = o.url;
        if (!s) {
          i.end(t || "Error occurred loading redirectUrl"), n(NodeAuthError.createUnableToLoadRedirectUrlError());
          return;
        } else if (s === f.FORWARD_SLASH) {
          i.end(e || "Auth code was successfully acquired. You can close this window now.");
          return;
        }
        let location = this.getRedirectUri(),
          c = new URL(s, location),
          l = ka(c.search) || {};
        if (l.code) i.writeHead(P.REDIRECT, {
          location: location
        }), i.end();
        if (l.error) i.end(t || `Error occurred: ${l.error}`);
        r(l);
      }), this.server.listen(0, "127.0.0.1");
    });
  }
  getRedirectUri() {
    if (!this.server || !this.server.listening) throw NodeAuthError.createNoLoopbackServerExistsError();
    let e = this.server.address();
    if (!e || typeof e === "string" || !e.port) throw this.closeServer(), NodeAuthError.createInvalidLoopbackAddressTypeError();
    let t = e && e.port;
    return `${Se.HTTP_PROTOCOL}${Se.LOCALHOST}:${t}`;
  }
  closeServer() {
    if (this.server) {
      if (this.server.close(), typeof this.server.closeAllConnections === "function") this.server.closeAllConnections();
      this.server.unref(), this.server = void 0;
    }
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class ys extends Te {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    let t = await this.getDeviceCode(e);
    e.deviceCodeCallback(t);
    let r = Q(),
      n = await this.acquireTokenWithDeviceCode(e, t),
      o = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return o.validateTokenResponse(n), o.handleServerTokenResponse(n, this.authority, r, e);
  }
  async getDeviceCode(e) {
    let t = this.createExtraQueryParameters(e),
      r = x.appendQueryString(this.authority.deviceCodeEndpoint, t),
      n = this.createQueryString(e),
      o = this.createTokenRequestHeaders(),
      i = {
        clientId: this.config.authOptions.clientId,
        authority: e.authority,
        scopes: e.scopes,
        claims: e.claims,
        authenticationScheme: e.authenticationScheme,
        resourceRequestMethod: e.resourceRequestMethod,
        resourceRequestUri: e.resourceRequestUri,
        shrClaims: e.shrClaims,
        sshKid: e.sshKid
      };
    return this.executePostRequestToDeviceCodeEndpoint(r, n, o, i, e.correlationId);
  }
  createExtraQueryParameters(e) {
    let t = new Map();
    if (e.extraQueryParameters) He(t, e.extraQueryParameters);
    return pe(t);
  }
  async executePostRequestToDeviceCodeEndpoint(e, body_4, headers_10, n, o) {
    let {
      body: {
        user_code: i,
        device_code: s,
        verification_uri: a,
        expires_in: c,
        interval: interval,
        message: message
      }
    } = await this.sendPostRequest(n, e, {
      body: body_4,
      headers: headers_10
    }, o);
    return {
      userCode: i,
      deviceCode: s,
      verificationUri: a,
      expiresIn: c,
      interval: interval,
      message: message
    };
  }
  createQueryString(e) {
    let t = new Map();
    if (Qe(t, e.scopes), Je(t, this.config.authOptions.clientId), e.extraQueryParameters) He(t, e.extraQueryParameters);
    if (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Xe(t, e.claims, this.config.authOptions.clientCapabilities);
    return pe(t);
  }
  continuePolling(e, t, r) {
    if (r) throw this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true"), g(code_25);else if (t && t < e && Q() > t) throw this.logger.error(`User defined timeout for device code polling reached. The timeout was set for ${t}`), g(code_37);else if (Q() > e) {
      if (t) this.logger.verbose(`User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for ${t}`);
      throw this.logger.error(`Device code expired. Expiration time of device code was ${e}`), g(code_26);
    }
    return !0;
  }
  async acquireTokenWithDeviceCode(e, t) {
    let r = this.createTokenQueryParameters(e),
      n = x.appendQueryString(this.authority.tokenEndpoint, r),
      o = this.createTokenRequestBody(e, t),
      i = this.createTokenRequestHeaders(),
      s = e.timeout ? Q() + e.timeout : void 0,
      a = Q() + t.expiresIn,
      c = t.interval * 1000;
    while (this.continuePolling(a, s, e.cancel)) {
      let l = {
          clientId: this.config.authOptions.clientId,
          authority: e.authority,
          scopes: e.scopes,
          claims: e.claims,
          authenticationScheme: e.authenticationScheme,
          resourceRequestMethod: e.resourceRequestMethod,
          resourceRequestUri: e.resourceRequestUri,
          shrClaims: e.shrClaims,
          sshKid: e.sshKid
        },
        d = await this.executePostToTokenEndpoint(n, o, i, l, e.correlationId);
      if (d.body && d.body.error) {
        if (d.body.error === f.AUTHORIZATION_PENDING) this.logger.info("Authorization pending. Continue polling."), await Mg(c);else throw this.logger.info("Unexpected error in polling from the server"), wa(code_3, d.body.error);
      } else return this.logger.verbose("Authorization completed successfully. Polling stopped."), d.body;
    }
    throw this.logger.error("Polling stopped for unknown reasons."), g(code_27);
  }
  createTokenRequestBody(e, t) {
    let r = new Map();
    Qe(r, e.scopes), Je(r, this.config.authOptions.clientId), Gt(r, Pe.DEVICE_CODE_GRANT), kg(r, t.deviceCode);
    let n = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (at(r, n), At(r), Et(r, this.config.libraryInfo), Ct(r, this.config.telemetry.application), Kt(r), this.serverTelemetryManager) qt(r, this.serverTelemetryManager);
    if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Xe(r, e.claims, this.config.authOptions.clientCapabilities);
    return pe(r);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Ts extends Mn {
  constructor(e) {
    super(e);
    if (this.config.broker.nativeBrokerPlugin) if (this.config.broker.nativeBrokerPlugin.isBrokerAvailable) this.nativeBrokerPlugin = this.config.broker.nativeBrokerPlugin, this.nativeBrokerPlugin.setLogger(this.config.system.loggerOptions);else this.logger.warning("NativeBroker implementation was provided but the broker is unavailable.");
    this.skus = Yt.makeExtraSkuString({
      libraryName: Se.MSAL_SKU,
      libraryVersion: lt
    });
  }
  async acquireTokenByDeviceCode(e) {
    this.logger.info("acquireTokenByDeviceCode called", e.correlationId);
    let t = Object.assign(e, await this.initializeBaseRequest(e)),
      r = this.initializeServerTelemetryManager(St.acquireTokenByDeviceCode, t.correlationId);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions),
        o = await this.buildOauthClientConfiguration(n, t.correlationId, "", r),
        i = new ys(o);
      return this.logger.verbose("Device code client created", t.correlationId), await i.acquireToken(t);
    } catch (error) {
      if (error instanceof AuthError) error.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(error), error;
    }
  }
  async acquireTokenInteractive(e) {
    let correlationId_5 = e.correlationId || this.cryptoProvider.createNewGuid();
    this.logger.trace("acquireTokenInteractive called", correlationId_5);
    let {
      openBrowser: openBrowser,
      successTemplate: successTemplate,
      errorTemplate: errorTemplate,
      windowHandle: windowHandle,
      loopbackClient: loopbackClient,
      ...a
    } = e;
    if (this.nativeBrokerPlugin) {
      let p = {
        ...a,
        clientId: this.config.auth.clientId,
        scopes: e.scopes || ye,
        redirectUri: e.redirectUri || "",
        authority: e.authority || this.config.auth.authority,
        correlationId: correlationId_5,
        extraParameters: {
          ...a.extraQueryParameters,
          ...a.tokenQueryParameters,
          [Mu]: this.skus
        },
        accountId: a.account?.nativeAccountId
      };
      return this.nativeBrokerPlugin.acquireTokenInteractive(p, windowHandle);
    }
    if (e.redirectUri) {
      if (!this.config.broker.nativeBrokerPlugin) throw NodeAuthError.createRedirectUriNotSupportedError();
      e.redirectUri = "";
    }
    let {
        verifier: c,
        challenge: l
      } = await this.cryptoProvider.generatePkceCodes(),
      d = loopbackClient || new Tc(),
      u = {},
      m = null;
    try {
      let p = d.listenForAuthCode(successTemplate, errorTemplate).then(B => {
          u = B;
        }).catch(B => {
          m = B;
        }),
        redirectUri_2 = await this.waitForRedirectUri(d),
        T = {
          ...a,
          correlationId: correlationId_5,
          scopes: e.scopes || ye,
          redirectUri: redirectUri_2,
          responseMode: mt.QUERY,
          codeChallenge: l,
          codeChallengeMethod: ri.S256
        },
        I = await this.getAuthCodeUrl(T);
      if (await openBrowser(I), await p, m) throw m;
      if (u.error) throw new ServerError(u.error, u.error_description, u.suberror);else if (!u.code) throw NodeAuthError.createNoAuthCodeInResponseError();
      let client_info = u.client_info,
        U = {
          code: u.code,
          codeVerifier: c,
          clientInfo: client_info || f.EMPTY_STRING,
          ...T
        };
      return await this.acquireTokenByCode(U);
    } finally {
      d.closeServer();
    }
  }
  async acquireTokenSilent(e) {
    let correlationId_6 = e.correlationId || this.cryptoProvider.createNewGuid();
    if (this.logger.trace("acquireTokenSilent called", correlationId_6), this.nativeBrokerPlugin) {
      let r = {
        ...e,
        clientId: this.config.auth.clientId,
        scopes: e.scopes || ye,
        redirectUri: e.redirectUri || "",
        authority: e.authority || this.config.auth.authority,
        correlationId: correlationId_6,
        extraParameters: {
          ...e.tokenQueryParameters,
          [Mu]: this.skus
        },
        accountId: e.account.nativeAccountId,
        forceRefresh: e.forceRefresh || !1
      };
      return this.nativeBrokerPlugin.acquireTokenSilent(r);
    }
    if (e.redirectUri) {
      if (!this.config.broker.nativeBrokerPlugin) throw NodeAuthError.createRedirectUriNotSupportedError();
      e.redirectUri = "";
    }
    return super.acquireTokenSilent(e);
  }
  async signOut(e) {
    if (this.nativeBrokerPlugin && e.account.nativeAccountId) {
      let t = {
        clientId: this.config.auth.clientId,
        accountId: e.account.nativeAccountId,
        correlationId: e.correlationId || this.cryptoProvider.createNewGuid()
      };
      await this.nativeBrokerPlugin.signOut(t);
    }
    await this.getTokenCache().removeAccount(e.account, e.correlationId);
  }
  async getAllAccounts() {
    if (this.nativeBrokerPlugin) {
      let e = this.cryptoProvider.createNewGuid();
      return this.nativeBrokerPlugin.getAllAccounts(this.config.auth.clientId, e);
    }
    return this.getTokenCache().getAllAccounts();
  }
  async waitForRedirectUri(e) {
    return new Promise((t, r) => {
      let n = 0,
        o = setInterval(() => {
          if (Wi.TIMEOUT_MS / Wi.INTERVAL_MS < n) {
            clearInterval(o), r(NodeAuthError.createLoopbackServerTimeoutError());
            return;
          }
          try {
            let i = e.getRedirectUri();
            clearInterval(o), t(i);
            return;
          } catch (error) {
            if (error instanceof AuthError && error.errorCode === le.noLoopbackServerExists.code) {
              n++;
              return;
            }
            clearInterval(o), r(error);
            return;
          }
        }, Wi.INTERVAL_MS);
    });
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Dn extends Te {
  constructor(e, t) {
    super(e);
    this.appTokenProvider = t;
  }
  async acquireToken(e) {
    if (e.skipCache || e.claims) return this.executeTokenRequest(e, this.authority);
    let [t, r] = await this.getCachedAuthenticationResult(e, this.config, this.cryptoUtils, this.authority, this.cacheManager, this.serverTelemetryManager);
    if (t) {
      if (r === j.PROACTIVELY_REFRESHED) {
        this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
        let n = !0;
        await this.executeTokenRequest(e, this.authority, n);
      }
      return t;
    } else return this.executeTokenRequest(e, this.authority);
  }
  async getCachedAuthenticationResult(e, t, r, n, o, i) {
    let s = t,
      a = t,
      NOT_APPLICABLE_2 = j.NOT_APPLICABLE,
      l;
    if (s.serializableCache && s.persistencePlugin) l = new Ze(s.serializableCache, !1), await s.persistencePlugin.beforeCacheAccess(l);
    let accessToken_3 = this.readAccessTokenFromCache(n, a.managedIdentityId?.id || s.authOptions.clientId, new oe(e.scopes || []), o, e.correlationId);
    if (s.serializableCache && s.persistencePlugin && l) await s.persistencePlugin.afterCacheAccess(l);
    if (!accessToken_3) return i?.setCacheOutcome(j.NO_CACHED_ACCESS_TOKEN), [null, j.NO_CACHED_ACCESS_TOKEN];
    if (jt(accessToken_3.expiresOn, s.systemOptions?.tokenRenewalOffsetSeconds || tokenRenewalOffsetSeconds)) return i?.setCacheOutcome(j.CACHED_ACCESS_TOKEN_EXPIRED), [null, j.CACHED_ACCESS_TOKEN_EXPIRED];
    if (accessToken_3.refreshOn && jt(accessToken_3.refreshOn.toString(), 0)) NOT_APPLICABLE_2 = j.PROACTIVELY_REFRESHED, i?.setCacheOutcome(j.PROACTIVELY_REFRESHED);
    return [await ie.generateAuthenticationResult(r, n, {
      account: null,
      idToken: null,
      accessToken: accessToken_3,
      refreshToken: null,
      appMetadata: null
    }, !0, e), NOT_APPLICABLE_2];
  }
  readAccessTokenFromCache(e, clientId_7, r, n, o) {
    let i = {
        homeAccountId: f.EMPTY_STRING,
        environment: e.canonicalAuthorityUrlComponents.HostNameAndPort,
        credentialType: K.ACCESS_TOKEN,
        clientId: clientId_7,
        realm: e.tenant,
        target: oe.createSearchScopes(r.asArray())
      },
      s = n.getAccessTokensByFilter(i, o);
    if (s.length < 1) return null;else if (s.length > 1) throw g(code_18);
    return s[0];
  }
  async executeTokenRequest(e, t, r) {
    let n, o;
    if (this.appTokenProvider) {
      this.logger.info("Using appTokenProvider extensibility.");
      let a = {
        correlationId: e.correlationId,
        tenantId: this.config.authOptions.authority.tenant,
        scopes: e.scopes,
        claims: e.claims
      };
      o = Q();
      let c = await this.appTokenProvider(a);
      n = {
        access_token: c.accessToken,
        expires_in: c.expiresInSeconds,
        refresh_in: c.refreshInSeconds,
        token_type: L.BEARER
      };
    } else {
      let a = this.createTokenQueryParameters(e),
        c = x.appendQueryString(t.tokenEndpoint, a),
        l = await this.createTokenRequestBody(e),
        d = this.createTokenRequestHeaders(),
        u = {
          clientId: this.config.authOptions.clientId,
          authority: e.authority,
          scopes: e.scopes,
          claims: e.claims,
          authenticationScheme: e.authenticationScheme,
          resourceRequestMethod: e.resourceRequestMethod,
          resourceRequestUri: e.resourceRequestUri,
          shrClaims: e.shrClaims,
          sshKid: e.sshKid
        };
      this.logger.info("Sending token request to endpoint: " + t.tokenEndpoint), o = Q();
      let m = await this.executePostToTokenEndpoint(c, l, d, u, e.correlationId);
      n = m.body, n.status = m.status;
    }
    let i = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return i.validateTokenResponse(n, r), await i.handleServerTokenResponse(n, this.authority, o, e);
  }
  async createTokenRequestBody(e) {
    let t = new Map();
    if (Je(t, this.config.authOptions.clientId), Qe(t, e.scopes, !1), Gt(t, Pe.CLIENT_CREDENTIALS_GRANT), Et(t, this.config.libraryInfo), Ct(t, this.config.telemetry.application), Kt(t), this.serverTelemetryManager) qt(t, this.serverTelemetryManager);
    let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (at(t, r), this.config.clientCredentials.clientSecret) Tr(t, this.config.clientCredentials.clientSecret);
    let n = e.clientAssertion || this.config.clientCredentials.clientAssertion;
    if (n) Er(t, await _e(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), Cr(t, n.assertionType);
    if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Xe(t, e.claims, this.config.authOptions.clientCapabilities);
    return pe(t);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Es extends Te {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    if (this.scopeSet = new oe(e.scopes || []), this.userAssertionHash = await this.cryptoUtils.hashString(e.oboAssertion), e.skipCache || e.claims) return this.executeTokenRequest(e, this.authority, this.userAssertionHash);
    try {
      return await this.getCachedAuthenticationResult(e);
    } catch (error) {
      return await this.executeTokenRequest(e, this.authority, this.userAssertionHash);
    }
  }
  async getCachedAuthenticationResult(e) {
    let accessToken_4 = this.readAccessTokenFromCacheForOBO(this.config.authOptions.clientId, e);
    if (!accessToken_4) throw this.serverTelemetryManager?.setCacheOutcome(j.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), g(code_36);else if (jt(accessToken_4.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.serverTelemetryManager?.setCacheOutcome(j.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info(`OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within ${this.config.systemOptions.tokenRenewalOffsetSeconds} seconds.`), g(code_36);
    let idToken_3 = this.readIdTokenFromCacheForOBO(accessToken_4.homeAccountId, e.correlationId),
      n,
      account_3 = null;
    if (idToken_3) {
      n = yt(idToken_3.secret, xe.base64Decode);
      let i = n.oid || n.sub,
        s = {
          homeAccountId: idToken_3.homeAccountId,
          environment: idToken_3.environment,
          tenantId: idToken_3.realm,
          username: f.EMPTY_STRING,
          localAccountId: i || f.EMPTY_STRING
        };
      account_3 = this.cacheManager.getAccount(this.cacheManager.generateAccountKey(s), e.correlationId);
    }
    if (this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
    return ie.generateAuthenticationResult(this.cryptoUtils, this.authority, {
      account: account_3,
      accessToken: accessToken_4,
      idToken: idToken_3,
      refreshToken: null,
      appMetadata: null
    }, !0, e, n);
  }
  readIdTokenFromCacheForOBO(homeAccountId_5, t) {
    let r = {
        homeAccountId: homeAccountId_5,
        environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
        credentialType: K.ID_TOKEN,
        clientId: this.config.authOptions.clientId,
        realm: this.authority.tenant
      },
      n = this.cacheManager.getIdTokensByFilter(r, t);
    if (Object.values(n).length < 1) return null;
    return Object.values(n)[0];
  }
  readAccessTokenFromCacheForOBO(clientId_8, t) {
    let tokenType_2 = t.authenticationScheme || L.BEARER,
      o = {
        credentialType: tokenType_2 && tokenType_2.toLowerCase() !== L.BEARER.toLowerCase() ? K.ACCESS_TOKEN_WITH_AUTH_SCHEME : K.ACCESS_TOKEN,
        clientId: clientId_8,
        target: oe.createSearchScopes(this.scopeSet.asArray()),
        tokenType: tokenType_2,
        keyId: t.sshKid,
        requestedClaimsHash: t.requestedClaimsHash,
        userAssertionHash: this.userAssertionHash
      },
      i = this.cacheManager.getAccessTokensByFilter(o, t.correlationId),
      s = i.length;
    if (s < 1) return null;else if (s > 1) throw g(code_18);
    return i[0];
  }
  async executeTokenRequest(e, t, r) {
    let n = this.createTokenQueryParameters(e),
      o = x.appendQueryString(t.tokenEndpoint, n),
      i = await this.createTokenRequestBody(e),
      s = this.createTokenRequestHeaders(),
      a = {
        clientId: this.config.authOptions.clientId,
        authority: e.authority,
        scopes: e.scopes,
        claims: e.claims,
        authenticationScheme: e.authenticationScheme,
        resourceRequestMethod: e.resourceRequestMethod,
        resourceRequestUri: e.resourceRequestUri,
        shrClaims: e.shrClaims,
        sshKid: e.sshKid
      },
      c = Q(),
      l = await this.executePostToTokenEndpoint(o, i, s, a, e.correlationId),
      d = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return d.validateTokenResponse(l.body), await d.handleServerTokenResponse(l.body, this.authority, c, e, void 0, r);
  }
  async createTokenRequestBody(e) {
    let t = new Map();
    if (Je(t, this.config.authOptions.clientId), Qe(t, e.scopes), Gt(t, Pe.JWT_BEARER), At(t), Et(t, this.config.libraryInfo), Ct(t, this.config.telemetry.application), Kt(t), this.serverTelemetryManager) qt(t, this.serverTelemetryManager);
    let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (at(t, r), Pg(t, wg), bg(t, e.oboAssertion), this.config.clientCredentials.clientSecret) Tr(t, this.config.clientCredentials.clientSecret);
    let clientAssertion_4 = this.config.clientCredentials.clientAssertion;
    if (clientAssertion_4) Er(t, await _e(clientAssertion_4.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), Cr(t, clientAssertion_4.assertionType);
    if (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Xe(t, e.claims, this.config.authOptions.clientCapabilities);
    return pe(t);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Cs extends Mn {
  constructor(e) {
    super(e);
    let t = !!this.config.auth.clientSecret,
      r = !!this.config.auth.clientAssertion,
      n = (!!this.config.auth.clientCertificate?.thumbprint || !!this.config.auth.clientCertificate?.thumbprintSha256) && !!this.config.auth.clientCertificate?.privateKey;
    if (this.appTokenProvider) return;
    if (t && r || r && n || t && n) throw g(code_35);
    if (this.config.auth.clientSecret) {
      this.clientSecret = this.config.auth.clientSecret;
      return;
    }
    if (this.config.auth.clientAssertion) {
      this.developerProvidedClientAssertion = this.config.auth.clientAssertion;
      return;
    }
    if (!n) throw g(code_35);else this.clientAssertion = this.config.auth.clientCertificate.thumbprintSha256 ? ct.fromCertificateWithSha256Thumbprint(this.config.auth.clientCertificate.thumbprintSha256, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c) : ct.fromCertificate(this.config.auth.clientCertificate.thumbprint, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c);
    this.appTokenProvider = void 0;
  }
  SetAppTokenProvider(e) {
    this.appTokenProvider = e;
  }
  async acquireTokenByClientCredential(e) {
    this.logger.info("acquireTokenByClientCredential called", e.correlationId);
    let clientAssertion_5;
    if (e.clientAssertion) clientAssertion_5 = {
      assertion: await _e(e.clientAssertion, this.config.auth.clientId),
      assertionType: Se.JWT_BEARER_ASSERTION_TYPE
    };
    let r = await this.initializeBaseRequest(e),
      n = {
        ...r,
        scopes: r.scopes.filter(item => !ye.includes(item))
      },
      o = {
        ...e,
        ...n,
        clientAssertion: clientAssertion_5
      },
      s = new x(o.authority).getUrlComponents().PathSegments[0];
    if (Object.values(be).includes(s)) throw g(code_45);
    let a = process.env[Th],
      azureRegion;
    if (o.azureRegion !== "DisableMsalForceRegion") if (!o.azureRegion && a) azureRegion = a;else azureRegion = o.azureRegion;
    let l = {
        azureRegion: azureRegion,
        environmentRegion: process.env[yh]
      },
      d = this.initializeServerTelemetryManager(St.acquireTokenByClientCredential, o.correlationId, o.skipCache);
    try {
      let u = await this.createAuthority(o.authority, o.correlationId, l, e.azureCloudOptions),
        m = await this.buildOauthClientConfiguration(u, o.correlationId, "", d),
        p = new Dn(m, this.appTokenProvider);
      return this.logger.verbose("Client credential client created", o.correlationId), await p.acquireToken(o);
    } catch (error) {
      if (error instanceof AuthError) error.setCorrelationId(o.correlationId);
      throw d.cacheFailedRequest(error), error;
    }
  }
  async acquireTokenOnBehalfOf(e) {
    this.logger.info("acquireTokenOnBehalfOf called", e.correlationId);
    let t = {
      ...e,
      ...(await this.initializeBaseRequest(e))
    };
    try {
      let r = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions),
        n = await this.buildOauthClientConfiguration(r, t.correlationId, "", void 0),
        o = new Es(n);
      return this.logger.verbose("On behalf of client created", t.correlationId), await o.acquireToken(t);
    } catch (error) {
      if (error instanceof AuthError) error.setCorrelationId(t.correlationId);
      throw error;
    }
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
function $f(e) {
  if (typeof e !== "string") return !1;
  let date = new Date(e);
  return !isNaN(date.getTime()) && date.toISOString() === e;
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Ec {
  constructor(e, t, r) {
    this.httpClientNoRetries = e, this.retryPolicy = t, this.logger = r;
  }
  async sendNetworkRequestAsyncHelper(e, t, r) {
    if (e === J.GET) return this.httpClientNoRetries.sendGetRequestAsync(t, r);else return this.httpClientNoRetries.sendPostRequestAsync(t, r);
  }
  async sendNetworkRequestAsync(e, t, r) {
    let n = await this.sendNetworkRequestAsyncHelper(e, t, r);
    if ("isNewRequest" in this.retryPolicy) this.retryPolicy.isNewRequest = !0;
    let o = 0;
    while (await this.retryPolicy.pauseForRetry(n.status, o, this.logger, n.headers[Y.RETRY_AFTER])) n = await this.sendNetworkRequestAsyncHelper(e, t, r), o++;
    return n;
  }
  async sendGetRequestAsync(e, t) {
    return this.sendNetworkRequestAsync(J.GET, e, t);
  }
  async sendPostRequestAsync(e, t) {
    return this.sendNetworkRequestAsync(J.POST, e, t);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var Pr = {
  MANAGED_IDENTITY_CLIENT_ID_2017: "clientid",
  MANAGED_IDENTITY_CLIENT_ID: "client_id",
  MANAGED_IDENTITY_OBJECT_ID: "object_id",
  MANAGED_IDENTITY_RESOURCE_ID_IMDS: "msi_res_id",
  MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS: "mi_res_id"
};
class Me {
  constructor(e, t, r, n, o) {
    this.logger = e, this.nodeStorage = t, this.networkClient = r, this.cryptoProvider = n, this.disableInternalRetries = o;
  }
  async getServerTokenResponseAsync(e, t, r, n) {
    return this.getServerTokenResponse(e);
  }
  getServerTokenResponse(e) {
    let refresh_in, expires_in;
    if (e.body.expires_on) {
      if ($f(e.body.expires_on)) e.body.expires_on = new Date(e.body.expires_on).getTime() / 1000;
      if (expires_in = e.body.expires_on - Q(), expires_in > 7200) refresh_in = expires_in / 2;
    }
    return {
      status: e.status,
      access_token: e.body.access_token,
      expires_in: expires_in,
      scope: e.body.resource,
      token_type: e.body.token_type,
      refresh_in: refresh_in,
      correlation_id: e.body.correlation_id || e.body.correlationId,
      error: typeof e.body.error === "string" ? e.body.error : e.body.error?.code,
      error_description: e.body.message || (typeof e.body.error === "string" ? e.body.error_description : e.body.error?.message),
      error_codes: e.body.error_codes,
      timestamp: e.body.timestamp,
      trace_id: e.body.trace_id
    };
  }
  async acquireTokenWithManagedIdentity(e, t, r, n) {
    let o = this.createRequest(e.resource, t);
    if (e.revokedTokenSha256Hash) this.logger.info(`[Managed Identity] The following claims are present in the request: ${e.claims}`), o.queryParameters[ce.SHA256_TOKEN_TO_REFRESH] = e.revokedTokenSha256Hash;
    if (e.clientCapabilities?.length) {
      let m = e.clientCapabilities.toString();
      this.logger.info(`[Managed Identity] The following client capabilities are present in the request: ${m}`), o.queryParameters[ce.XMS_CC] = m;
    }
    let headers_11 = o.headers;
    headers_11[Y.CONTENT_TYPE] = f.URL_FORM_CONTENT_TYPE;
    let s = {
      headers: headers_11
    };
    if (Object.keys(o.bodyParameters).length) s.body = o.computeParametersBodyString();
    let a = this.disableInternalRetries ? this.networkClient : new Ec(this.networkClient, o.retryPolicy, this.logger),
      c = Q(),
      l;
    try {
      if (o.httpMethod === J.POST) l = await a.sendPostRequestAsync(o.computeUri(), s);else l = await a.sendGetRequestAsync(o.computeUri(), s);
    } catch (error) {
      if (error instanceof AuthError) throw error;else throw g(code_9);
    }
    let d = new ie(t.id, this.nodeStorage, this.cryptoProvider, this.logger, null, null),
      u = await this.getServerTokenResponseAsync(l, a, o, s);
    return d.validateTokenResponse(u, n), d.handleServerTokenResponse(u, r, c, e);
  }
  getManagedIdentityUserAssignedIdQueryParameterKey(e, t, r) {
    switch (e) {
      case ne.USER_ASSIGNED_CLIENT_ID:
        return this.logger.info(`[Managed Identity] [API version ${r ? "2017+" : "2019+"}] Adding user assigned client id to the request.`), r ? Pr.MANAGED_IDENTITY_CLIENT_ID_2017 : Pr.MANAGED_IDENTITY_CLIENT_ID;
      case ne.USER_ASSIGNED_RESOURCE_ID:
        return this.logger.info("[Managed Identity] Adding user assigned resource id to the request."), t ? Pr.MANAGED_IDENTITY_RESOURCE_ID_IMDS : Pr.MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS;
      case ne.USER_ASSIGNED_OBJECT_ID:
        return this.logger.info("[Managed Identity] Adding user assigned object id to the request."), Pr.MANAGED_IDENTITY_OBJECT_ID;
      default:
        throw ae(Wt);
    }
  }
}
Me.getValidatedEnvVariableUrlString = (e, t, r, n) => {
  try {
    return new x(t).urlString;
  } catch (error) {
    throw n.info(`[Managed Identity] ${r} managed identity is unavailable because the '${e}' environment variable is malformed.`), ae(vr[e]);
  }
}; /*! @azure/msal-node v3.8.1 2025-10-29 */
class Cc {
  calculateDelay(e, t) {
    if (!e) return t;
    let r = Math.round(parseFloat(e) * 1000);
    if (isNaN(r)) r = new Date(e).valueOf() - new Date().valueOf();
    return Math.max(t, r);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var OE = 3,
  NE = 1000,
  xE = [P.NOT_FOUND, P.REQUEST_TIMEOUT, P.TOO_MANY_REQUESTS, P.SERVER_ERROR, P.SERVICE_UNAVAILABLE, P.GATEWAY_TIMEOUT];
class As {
  constructor() {
    this.linearRetryStrategy = new Cc();
  }
  static get DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS() {
    return NE;
  }
  async pauseForRetry(e, t, r, n) {
    if (xE.includes(e) && t < OE) {
      let o = this.linearRetryStrategy.calculateDelay(n, As.DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS);
      return r.verbose(`Retrying request in ${o}ms (retry attempt: ${t + 1})`), await new Promise(i => setTimeout(i, o)), !0;
    }
    return !1;
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Fe {
  constructor(e, t, r) {
    this.httpMethod = e, this._baseEndpoint = t, this.headers = {}, this.bodyParameters = {}, this.queryParameters = {}, this.retryPolicy = r || new As();
  }
  computeUri() {
    let e = new Map();
    if (this.queryParameters) He(e, this.queryParameters);
    let t = pe(e);
    return x.appendQueryString(this._baseEndpoint, t);
  }
  computeParametersBodyString() {
    let e = new Map();
    if (this.bodyParameters) He(e, this.bodyParameters);
    return pe(e);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var ME = "2019-08-01";
class Or extends Me {
  constructor(e, t, r, n, o, i, s) {
    super(e, t, r, n, o);
    this.identityEndpoint = i, this.identityHeader = s;
  }
  static getEnvironmentVariables() {
    let e = process.env[v.IDENTITY_ENDPOINT],
      t = process.env[v.IDENTITY_HEADER];
    return [e, t];
  }
  static tryCreate(e, t, r, n, o) {
    let [i, s] = Or.getEnvironmentVariables();
    if (!i || !s) return e.info(`[Managed Identity] ${b.APP_SERVICE} managed identity is unavailable because one or both of the '${v.IDENTITY_HEADER}' and '${v.IDENTITY_ENDPOINT}' environment variables are not defined.`), null;
    let a = Or.getValidatedEnvVariableUrlString(v.IDENTITY_ENDPOINT, i, b.APP_SERVICE, e);
    return e.info(`[Managed Identity] Environment variables validation passed for ${b.APP_SERVICE} managed identity. Endpoint URI: ${a}. Creating ${b.APP_SERVICE} managed identity.`), new Or(e, t, r, n, o, i, s);
  }
  createRequest(e, t) {
    let r = new Fe(J.GET, this.identityEndpoint);
    if (r.headers[Ne.APP_SERVICE_SECRET_HEADER_NAME] = this.identityHeader, r.queryParameters[ce.API_VERSION] = ME, r.queryParameters[ce.RESOURCE] = e, t.idType !== ne.SYSTEM_ASSIGNED) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType)] = t.id;
    return r;
  }
}
import { accessSync as DE, constants as Bf, statSync as UE, readFileSync as LE } from "fs";
import HE from "path"; /*! @azure/msal-node v3.8.1 2025-10-29 */
var FE = "2019-11-01",
  zf = "http://127.0.0.1:40342/metadata/identity/oauth2/token",
  Gf = "N/A: himds executable exists",
  qf = {
    win32: `${process.env.ProgramData}\\AzureConnectedMachineAgent\\Tokens\\`,
    linux: "/var/opt/azcmagent/tokens/"
  },
  $E = {
    win32: `${process.env.ProgramFiles}\\AzureConnectedMachineAgent\\himds.exe`,
    linux: "/opt/azcmagent/bin/himds"
  };
class Xt extends Me {
  constructor(e, t, r, n, o, i) {
    super(e, t, r, n, o);
    this.identityEndpoint = i;
  }
  static getEnvironmentVariables() {
    let e = process.env[v.IDENTITY_ENDPOINT],
      t = process.env[v.IMDS_ENDPOINT];
    if (!e || !t) {
      let win32 = $E.win32;
      try {
        DE(win32, Bf.F_OK | Bf.R_OK), e = zf, t = Gf;
      } catch (error) {}
    }
    return [e, t];
  }
  static tryCreate(e, t, r, n, o, i) {
    let [s, a] = Xt.getEnvironmentVariables();
    if (!s || !a) return e.info(`[Managed Identity] ${b.AZURE_ARC} managed identity is unavailable through environment variables because one or both of '${v.IDENTITY_ENDPOINT}' and '${v.IMDS_ENDPOINT}' are not defined. ${b.AZURE_ARC} managed identity is also unavailable through file detection.`), null;
    if (a === Gf) e.info(`[Managed Identity] ${b.AZURE_ARC} managed identity is available through file detection. Defaulting to known ${b.AZURE_ARC} endpoint: ${zf}. Creating ${b.AZURE_ARC} managed identity.`);else {
      let c = Xt.getValidatedEnvVariableUrlString(v.IDENTITY_ENDPOINT, s, b.AZURE_ARC, e);
      c.endsWith("/") && c.slice(0, -1), Xt.getValidatedEnvVariableUrlString(v.IMDS_ENDPOINT, a, b.AZURE_ARC, e), e.info(`[Managed Identity] Environment variables validation passed for ${b.AZURE_ARC} managed identity. Endpoint URI: ${c}. Creating ${b.AZURE_ARC} managed identity.`);
    }
    if (i.idType !== ne.SYSTEM_ASSIGNED) throw ae(es);
    return new Xt(e, t, r, n, o, s);
  }
  createRequest(e) {
    let t = new Fe(J.GET, this.identityEndpoint.replace("localhost", "127.0.0.1"));
    return t.headers[Ne.METADATA_HEADER_NAME] = "true", t.queryParameters[ce.API_VERSION] = FE, t.queryParameters[ce.RESOURCE] = e, t;
  }
  async getServerTokenResponseAsync(e, t, r, n) {
    let o;
    if (e.status === P.UNAUTHORIZED) {
      let i = e.headers["www-authenticate"];
      if (!i) throw ae(ns);
      if (!i.includes("Basic realm=")) throw ae(os);
      let s = i.split("Basic realm=")[1];
      if (!qf.hasOwnProperty("win32")) throw ae(Zi);
      let win32_2 = qf.win32,
        c = HE.basename(s);
      if (!c.endsWith(".key")) throw ae(Qi);
      if (win32_2 + c !== s) throw ae(Ji);
      let l;
      try {
        l = await UE(s).size;
      } catch (error) {
        throw ae(So);
      }
      if (l > Ah) throw ae(Xi);
      let d;
      try {
        d = LE(s, me.UTF8);
      } catch (error) {
        throw ae(So);
      }
      let u = `Basic ${d}`;
      this.logger.info("[Managed Identity] Adding authorization header to the request."), r.headers[Ne.AUTHORIZATION_HEADER_NAME] = u;
      try {
        o = await t.sendGetRequestAsync(r.computeUri(), n);
      } catch (error) {
        if (error instanceof AuthError) throw error;else throw g(code_9);
      }
    }
    return this.getServerTokenResponse(o || e);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Nr extends Me {
  constructor(e, t, r, n, o, i) {
    super(e, t, r, n, o);
    this.msiEndpoint = i;
  }
  static getEnvironmentVariables() {
    return [process.env[v.MSI_ENDPOINT]];
  }
  static tryCreate(e, t, r, n, o, i) {
    let [s] = Nr.getEnvironmentVariables();
    if (!s) return e.info(`[Managed Identity] ${b.CLOUD_SHELL} managed identity is unavailable because the '${v.MSI_ENDPOINT} environment variable is not defined.`), null;
    let a = Nr.getValidatedEnvVariableUrlString(v.MSI_ENDPOINT, s, b.CLOUD_SHELL, e);
    if (e.info(`[Managed Identity] Environment variable validation passed for ${b.CLOUD_SHELL} managed identity. Endpoint URI: ${a}. Creating ${b.CLOUD_SHELL} managed identity.`), i.idType !== ne.SYSTEM_ASSIGNED) throw ae(ts);
    return new Nr(e, t, r, n, o, s);
  }
  createRequest(e) {
    let t = new Fe(J.POST, this.msiEndpoint);
    return t.headers[Ne.METADATA_HEADER_NAME] = "true", t.bodyParameters[ce.RESOURCE] = e, t;
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Ac {
  constructor(e, t, r) {
    this.minExponentialBackoff = e, this.maxExponentialBackoff = t, this.exponentialDeltaBackoff = r;
  }
  calculateDelay(e) {
    if (e === 0) return this.minExponentialBackoff;
    return Math.min(Math.pow(2, e - 1) * this.exponentialDeltaBackoff, this.maxExponentialBackoff);
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var BE = [P.NOT_FOUND, P.REQUEST_TIMEOUT, P.GONE, P.TOO_MANY_REQUESTS],
  zE = 3,
  GE = 7,
  qE = 1000,
  KE = 4000,
  VE = 2000,
  jE = 1e4;
class xr {
  constructor() {
    this.exponentialRetryStrategy = new Ac(xr.MIN_EXPONENTIAL_BACKOFF_MS, xr.MAX_EXPONENTIAL_BACKOFF_MS, xr.EXPONENTIAL_DELTA_BACKOFF_MS);
  }
  static get MIN_EXPONENTIAL_BACKOFF_MS() {
    return qE;
  }
  static get MAX_EXPONENTIAL_BACKOFF_MS() {
    return KE;
  }
  static get EXPONENTIAL_DELTA_BACKOFF_MS() {
    return VE;
  }
  static get HTTP_STATUS_GONE_RETRY_AFTER_MS() {
    return jE;
  }
  set isNewRequest(e) {
    this._isNewRequest = e;
  }
  async pauseForRetry(e, t, r) {
    if (this._isNewRequest) this._isNewRequest = !1, this.maxRetries = e === P.GONE ? GE : zE;
    if ((BE.includes(e) || e >= P.SERVER_ERROR_RANGE_START && e <= P.SERVER_ERROR_RANGE_END && t < this.maxRetries) && t < this.maxRetries) {
      let n = e === P.GONE ? xr.HTTP_STATUS_GONE_RETRY_AFTER_MS : this.exponentialRetryStrategy.calculateDelay(t);
      return r.verbose(`Retrying request in ${n}ms (retry attempt: ${t + 1})`), await new Promise(o => setTimeout(o, n)), !0;
    }
    return !1;
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var Kf = "/metadata/identity/oauth2/token",
  YE = `http://169.254.169.254${Kf}`,
  WE = "2018-02-01";
class ko extends Me {
  constructor(e, t, r, n, o, i) {
    super(e, t, r, n, o);
    this.identityEndpoint = i;
  }
  static tryCreate(e, t, r, n, o) {
    let i;
    if (process.env[v.AZURE_POD_IDENTITY_AUTHORITY_HOST]) e.info(`[Managed Identity] Environment variable ${v.AZURE_POD_IDENTITY_AUTHORITY_HOST} for ${b.IMDS} returned endpoint: ${process.env[v.AZURE_POD_IDENTITY_AUTHORITY_HOST]}`), i = ko.getValidatedEnvVariableUrlString(v.AZURE_POD_IDENTITY_AUTHORITY_HOST, `${process.env[v.AZURE_POD_IDENTITY_AUTHORITY_HOST]}${Kf}`, b.IMDS, e);else e.info(`[Managed Identity] Unable to find ${v.AZURE_POD_IDENTITY_AUTHORITY_HOST} environment variable for ${b.IMDS}, using the default endpoint.`), i = YE;
    return new ko(e, t, r, n, o, i);
  }
  createRequest(e, t) {
    let r = new Fe(J.GET, this.identityEndpoint);
    if (r.headers[Ne.METADATA_HEADER_NAME] = "true", r.queryParameters[ce.API_VERSION] = WE, r.queryParameters[ce.RESOURCE] = e, t.idType !== ne.SYSTEM_ASSIGNED) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType, !0)] = t.id;
    return r.retryPolicy = new xr(), r;
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var QE = "2019-07-01-preview";
class Mr extends Me {
  constructor(e, t, r, n, o, i, s) {
    super(e, t, r, n, o);
    this.identityEndpoint = i, this.identityHeader = s;
  }
  static getEnvironmentVariables() {
    let e = process.env[v.IDENTITY_ENDPOINT],
      t = process.env[v.IDENTITY_HEADER],
      r = process.env[v.IDENTITY_SERVER_THUMBPRINT];
    return [e, t, r];
  }
  static tryCreate(e, t, r, n, o, i) {
    let [s, a, c] = Mr.getEnvironmentVariables();
    if (!s || !a || !c) return e.info(`[Managed Identity] ${b.SERVICE_FABRIC} managed identity is unavailable because one or all of the '${v.IDENTITY_HEADER}', '${v.IDENTITY_ENDPOINT}' or '${v.IDENTITY_SERVER_THUMBPRINT}' environment variables are not defined.`), null;
    let l = Mr.getValidatedEnvVariableUrlString(v.IDENTITY_ENDPOINT, s, b.SERVICE_FABRIC, e);
    if (e.info(`[Managed Identity] Environment variables validation passed for ${b.SERVICE_FABRIC} managed identity. Endpoint URI: ${l}. Creating ${b.SERVICE_FABRIC} managed identity.`), i.idType !== ne.SYSTEM_ASSIGNED) e.warning(`[Managed Identity] ${b.SERVICE_FABRIC} user assigned managed identity is configured in the cluster, not during runtime. See also: https://learn.microsoft.com/en-us/azure/service-fabric/configure-existing-cluster-enable-managed-identity-token-service.`);
    return new Mr(e, t, r, n, o, s, a);
  }
  createRequest(e, t) {
    let r = new Fe(J.GET, this.identityEndpoint);
    if (r.headers[Ne.ML_AND_SF_SECRET_HEADER_NAME] = this.identityHeader, r.queryParameters[ce.API_VERSION] = QE, r.queryParameters[ce.RESOURCE] = e, t.idType !== ne.SYSTEM_ASSIGNED) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType)] = t.id;
    return r;
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var JE = "2017-09-01",
  XE = `Only client id is supported for user-assigned managed identity in ${b.MACHINE_LEARNING}.`;
class Dr extends Me {
  constructor(e, t, r, n, o, i, s) {
    super(e, t, r, n, o);
    this.msiEndpoint = i, this.secret = s;
  }
  static getEnvironmentVariables() {
    let e = process.env[v.MSI_ENDPOINT],
      t = process.env[v.MSI_SECRET];
    return [e, t];
  }
  static tryCreate(e, t, r, n, o) {
    let [i, s] = Dr.getEnvironmentVariables();
    if (!i || !s) return e.info(`[Managed Identity] ${b.MACHINE_LEARNING} managed identity is unavailable because one or both of the '${v.MSI_ENDPOINT}' and '${v.MSI_SECRET}' environment variables are not defined.`), null;
    let a = Dr.getValidatedEnvVariableUrlString(v.MSI_ENDPOINT, i, b.MACHINE_LEARNING, e);
    return e.info(`[Managed Identity] Environment variables validation passed for ${b.MACHINE_LEARNING} managed identity. Endpoint URI: ${a}. Creating ${b.MACHINE_LEARNING} managed identity.`), new Dr(e, t, r, n, o, i, s);
  }
  createRequest(e, t) {
    let r = new Fe(J.GET, this.msiEndpoint);
    if (r.headers[Ne.METADATA_HEADER_NAME] = "true", r.headers[Ne.ML_AND_SF_SECRET_HEADER_NAME] = this.secret, r.queryParameters[ce.API_VERSION] = JE, r.queryParameters[ce.RESOURCE] = e, t.idType === ne.SYSTEM_ASSIGNED) r.queryParameters[Pr.MANAGED_IDENTITY_CLIENT_ID_2017] = process.env[v.DEFAULT_IDENTITY_CLIENT_ID];else if (t.idType === ne.USER_ASSIGNED_CLIENT_ID) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType, !1, !0)] = t.id;else throw Error(XE);
    return r;
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
class Rt {
  constructor(e, t, r, n, o) {
    this.logger = e, this.nodeStorage = t, this.networkClient = r, this.cryptoProvider = n, this.disableInternalRetries = o;
  }
  async sendManagedIdentityTokenRequest(e, t, r, n) {
    if (!Rt.identitySource) Rt.identitySource = this.selectManagedIdentitySource(this.logger, this.nodeStorage, this.networkClient, this.cryptoProvider, this.disableInternalRetries, t);
    return Rt.identitySource.acquireTokenWithManagedIdentity(e, t, r, n);
  }
  allEnvironmentVariablesAreDefined(e) {
    return Object.values(e).every(item => item !== void 0);
  }
  getManagedIdentitySource() {
    return Rt.sourceName = this.allEnvironmentVariablesAreDefined(Mr.getEnvironmentVariables()) ? b.SERVICE_FABRIC : this.allEnvironmentVariablesAreDefined(Or.getEnvironmentVariables()) ? b.APP_SERVICE : this.allEnvironmentVariablesAreDefined(Dr.getEnvironmentVariables()) ? b.MACHINE_LEARNING : this.allEnvironmentVariablesAreDefined(Nr.getEnvironmentVariables()) ? b.CLOUD_SHELL : this.allEnvironmentVariablesAreDefined(Xt.getEnvironmentVariables()) ? b.AZURE_ARC : b.DEFAULT_TO_IMDS, Rt.sourceName;
  }
  selectManagedIdentitySource(e, t, r, n, o, i) {
    let s = Mr.tryCreate(e, t, r, n, o, i) || Or.tryCreate(e, t, r, n, o) || Dr.tryCreate(e, t, r, n, o) || Nr.tryCreate(e, t, r, n, o, i) || Xt.tryCreate(e, t, r, n, o, i) || ko.tryCreate(e, t, r, n, o);
    if (!s) throw ae(rs);
    return s;
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */
var ZE = [b.SERVICE_FABRIC];
class wt {
  constructor(e) {
    this.config = Oh(e || {}), this.logger = new Le(this.config.system.loggerOptions, ps, lt);
    let t = {
      canonicalAuthority: f.DEFAULT_AUTHORITY
    };
    if (!wt.nodeStorage) wt.nodeStorage = new br(this.logger, this.config.managedIdentityId.id, Tn, t);
    this.networkClient = this.config.system.networkClient, this.cryptoProvider = new Qt();
    let r = {
      protocolMode: Ae.AAD,
      knownAuthorities: [Wa],
      cloudDiscoveryMetadata: "",
      authorityMetadata: ""
    };
    this.fakeAuthority = new ue(Wa, this.networkClient, wt.nodeStorage, r, this.logger, this.cryptoProvider.createNewGuid(), void 0, !0), this.fakeClientCredentialClient = new Dn({
      authOptions: {
        clientId: this.config.managedIdentityId.id,
        authority: this.fakeAuthority
      }
    }), this.managedIdentityClient = new Rt(this.logger, wt.nodeStorage, this.networkClient, this.cryptoProvider, this.config.disableInternalRetries), this.hashUtils = new kr();
  }
  async acquireToken(e) {
    if (!e.resource) throw V(code_51);
    let t = {
      forceRefresh: e.forceRefresh,
      resource: e.resource.replace("/.default", ""),
      scopes: [e.resource.replace("/.default", "")],
      authority: this.fakeAuthority.canonicalAuthority,
      correlationId: this.cryptoProvider.createNewGuid(),
      claims: e.claims,
      clientCapabilities: this.config.clientCapabilities
    };
    if (t.forceRefresh) return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
    let [r, n] = await this.fakeClientCredentialClient.getCachedAuthenticationResult(t, this.config, this.cryptoProvider, this.fakeAuthority, wt.nodeStorage);
    if (t.claims) {
      let o = this.managedIdentityClient.getManagedIdentitySource();
      if (r && ZE.includes(o)) {
        let i = this.hashUtils.sha256(r.accessToken).toString(me.HEX);
        t.revokedTokenSha256Hash = i;
      }
      return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
    }
    if (r) {
      if (n === j.PROACTIVELY_REFRESHED) {
        this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
        let o = !0;
        await this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority, o);
      }
      return r;
    } else return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
  }
  async acquireTokenFromManagedIdentity(e, t, r, n) {
    return this.managedIdentityClient.sendManagedIdentityTokenRequest(e, t, r, n);
  }
  getManagedIdentitySource() {
    return Rt.sourceName || this.managedIdentityClient.getManagedIdentitySource();
  }
} /*! @azure/msal-node v3.8.1 2025-10-29 */ /*! @azure/msal-node v3.8.1 2025-10-29 */
var bo = z("IdentityUtils"),
  version_2 = "1.0";
function Un(e, t, getTokenOptions) {
  let n = message_2 => (bo.getToken.info(message_2), new AuthenticationRequiredError({
    scopes: Array.isArray(e) ? e : [e],
    getTokenOptions: getTokenOptions,
    message: message_2
  }));
  if (!t) throw n("No response");
  if (!t.expiresOn) throw n('Response had no "expiresOn" property.');
  if (!t.accessToken) throw n('Response had no "accessToken" property.');
}
function _c(e) {
  let t = e === null || e === void 0 ? void 0 : e.authorityHost;
  if (!t && Yn) t = process.env.AZURE_AUTHORITY_HOST;
  return t !== null && t !== void 0 ? t : AzurePublicCloud;
}
function Sc(e, t) {
  if (!t) t = AzurePublicCloud;
  if (new RegExp(`${e}/?$`).test(t)) return t;
  if (t.endsWith("/")) return t + e;else return `${t}/${e}`;
}
function Vf(e, t, r) {
  if (e === "adfs" && t || r) return [t];
  return [];
}
var Is = (e, t = Qo ? "Node" : "Browser") => (r, n, o) => {
  if (o) return;
  switch (r) {
    case G.Error:
      e.info(`MSAL ${t} V2 error: ${n}`);
      return;
    case G.Info:
      e.info(`MSAL ${t} V2 info message: ${n}`);
      return;
    case G.Verbose:
      e.info(`MSAL ${t} V2 verbose message: ${n}`);
      return;
    case G.Warning:
      e.info(`MSAL ${t} V2 warning: ${n}`);
      return;
  }
};
function _s(e) {
  switch (e) {
    case "error":
      return G.Error;
    case "info":
      return G.Info;
    case "verbose":
      return G.Verbose;
    case "warning":
      return G.Warning;
    default:
      return G.Info;
  }
}
function Ur(scopes_5, t, getTokenOptions_2) {
  if (t.name === "AuthError" || t.name === "ClientAuthError" || t.name === "BrowserAuthError") {
    let n = t;
    switch (n.errorCode) {
      case "endpoints_resolution_error":
        return bo.info(q(scopes_5, t.message)), new w(t.message);
      case "device_code_polling_cancelled":
        return new AbortError_2("The authentication has been aborted by the caller.");
      case "consent_required":
      case "interaction_required":
      case "login_required":
        bo.info(q(scopes_5, `Authentication returned errorCode ${n.errorCode}`));
        break;
      default:
        bo.info(q(scopes_5, `Failed to acquire token: ${t.message}`));
        break;
    }
  }
  if (t.name === "ClientConfigurationError" || t.name === "BrowserConfigurationAuthError" || t.name === "AbortError" || t.name === "AuthenticationError") return t;
  if (t.name === "NativeAuthError") return bo.info(q(scopes_5, `Error from the native broker: ${t.message} with status code: ${t.statusCode}`)), t;
  return new AuthenticationRequiredError({
    scopes: scopes_5,
    getTokenOptions: getTokenOptions_2,
    message: t.message
  });
}
function jf(e) {
  return {
    localAccountId: e.homeAccountId,
    environment: e.authority,
    username: e.username,
    homeAccountId: e.homeAccountId,
    tenantId: e.tenantId
  };
}
function Yf(clientId_9, t) {
  var r;
  return {
    authority: (r = t.environment) !== null && r !== void 0 ? r : Gc,
    homeAccountId: t.homeAccountId,
    tenantId: t.tenantId || zc,
    username: t.username,
    clientId: clientId_9,
    version: version_2
  };
}
var maxRetryDelayInMs_2 = 64000;
function Wf(e) {
  return Ea([{
    name: "imdsRetryPolicy",
    retry: ({
      retryCount: retryCount_3,
      response: response_9
    }) => {
      if ((response_9 === null || response_9 === void 0 ? void 0 : response_9.status) !== 404) return {
        skipStrategy: !0
      };
      return Xl(retryCount_3, {
        retryDelayInMs: e.startDelayInMs,
        maxRetryDelayInMs: maxRetryDelayInMs_2
      });
    }
  }], {
    maxRetries: e.maxRetries
  });
}
var vt = "ManagedIdentityCredential - IMDS",
  Lr = z(vt),
  rC = "http://169.254.169.254",
  nC = "/metadata/identity/oauth2/token";
function oC(e) {
  var t;
  if (!eo(e)) throw Error(`${vt}: Multiple scopes are not supported.`);
  let n = new URL(nC, (t = process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) !== null && t !== void 0 ? t : rC),
    o = {
      Accept: "application/json"
    };
  return {
    url: `${n}`,
    method: "GET",
    headers: rr(o)
  };
}
var Qf = {
  name: "imdsMsi",
  async isAvailable(e) {
    let {
        scopes: scopes_6,
        identityClient: identityClient,
        getTokenOptions: getTokenOptions_3
      } = e,
      o = eo(scopes_6);
    if (!o) return Lr.info(`${vt}: Unavailable. Multiple scopes are not supported.`), !1;
    if (process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) return !0;
    if (!identityClient) throw Error("Missing IdentityClient");
    let i = oC(o);
    return Z.withSpan("ManagedIdentityCredential-pingImdsEndpoint", getTokenOptions_3 !== null && getTokenOptions_3 !== void 0 ? getTokenOptions_3 : {}, async s => {
      var a, c;
      i.tracingOptions = s.tracingOptions;
      let l = Ye(i);
      l.timeout = ((a = s.requestOptions) === null || a === void 0 ? void 0 : a.timeout) || 1000, l.allowInsecureConnection = !0;
      let d;
      try {
        Lr.info(`${vt}: Pinging the Azure IMDS endpoint`), d = await identityClient.sendRequest(l);
      } catch (error) {
        if (Wo(error)) Lr.verbose(`${vt}: Caught error ${error.name}: ${error.message}`);
        return Lr.info(`${vt}: The Azure IMDS endpoint is unavailable`), !1;
      }
      if (d.status === 403) {
        if ((c = d.bodyAsText) === null || c === void 0 ? void 0 : c.includes("unreachable")) return Lr.info(`${vt}: The Azure IMDS endpoint is unavailable`), Lr.info(`${vt}: ${d.bodyAsText}`), !1;
      }
      return Lr.info(`${vt}: The Azure IMDS endpoint is available`), !0;
    });
  }
};
var Rc;
(function (e) {
  e.AutoDiscoverRegion = "AutoDiscoverRegion", e.USWest = "westus", e.USWest2 = "westus2", e.USCentral = "centralus", e.USEast = "eastus", e.USEast2 = "eastus2", e.USNorthCentral = "northcentralus", e.USSouthCentral = "southcentralus", e.USWestCentral = "westcentralus", e.CanadaCentral = "canadacentral", e.CanadaEast = "canadaeast", e.BrazilSouth = "brazilsouth", e.EuropeNorth = "northeurope", e.EuropeWest = "westeurope", e.UKSouth = "uksouth", e.UKWest = "ukwest", e.FranceCentral = "francecentral", e.FranceSouth = "francesouth", e.SwitzerlandNorth = "switzerlandnorth", e.SwitzerlandWest = "switzerlandwest", e.GermanyNorth = "germanynorth", e.GermanyWestCentral = "germanywestcentral", e.NorwayWest = "norwaywest", e.NorwayEast = "norwayeast", e.AsiaEast = "eastasia", e.AsiaSouthEast = "southeastasia", e.JapanEast = "japaneast", e.JapanWest = "japanwest", e.AustraliaEast = "australiaeast", e.AustraliaSouthEast = "australiasoutheast", e.AustraliaCentral = "australiacentral", e.AustraliaCentral2 = "australiacentral2", e.IndiaCentral = "centralindia", e.IndiaSouth = "southindia", e.IndiaWest = "westindia", e.KoreaSouth = "koreasouth", e.KoreaCentral = "koreacentral", e.UAECentral = "uaecentral", e.UAENorth = "uaenorth", e.SouthAfricaNorth = "southafricanorth", e.SouthAfricaWest = "southafricawest", e.ChinaNorth = "chinanorth", e.ChinaEast = "chinaeast", e.ChinaNorth2 = "chinanorth2", e.ChinaEast2 = "chinaeast2", e.GermanyCentral = "germanycentral", e.GermanyNorthEast = "germanynortheast", e.GovernmentUSVirginia = "usgovvirginia", e.GovernmentUSIowa = "usgoviowa", e.GovernmentUSArizona = "usgovarizona", e.GovernmentUSTexas = "usgovtexas", e.GovernmentUSDodEast = "usdodeast", e.GovernmentUSDodCentral = "usdodcentral";
})(Rc || (Rc = {}));
function Ss(e) {
  var t, r;
  let n = e;
  if (n === void 0 && ((r = (t = globalThis.process) === null || t === void 0 ? void 0 : t.env) === null || r === void 0 ? void 0 : r.AZURE_REGIONAL_AUTHORITY_NAME) !== void 0) n = process.env.AZURE_REGIONAL_AUTHORITY_NAME;
  if (n === Rc.AutoDiscoverRegion) return "AUTO_DISCOVER";
  return n;
}
var De = z("MsalClient");
function iC(clientId_10, t, r = {}) {
  var n, o, i;
  let s = cl((n = r.logger) !== null && n !== void 0 ? n : De, t, clientId_10),
    a = Sc(s, _c(r)),
    networkClient_2 = new Qr(Object.assign(Object.assign({}, r.tokenCredentialOptions), {
      authorityHost: a,
      loggingOptions: r.loggingOptions
    }));
  return {
    auth: {
      clientId: clientId_10,
      authority: a,
      knownAuthorities: Vf(s, a, r.disableInstanceDiscovery)
    },
    system: {
      networkClient: networkClient_2,
      loggerOptions: {
        loggerCallback: Is((o = r.logger) !== null && o !== void 0 ? o : De),
        logLevel: _s(Lo()),
        piiLoggingEnabled: (i = r.loggingOptions) === null || i === void 0 ? void 0 : i.enableUnsafeSupportLogging
      }
    }
  };
}
function Zt(e, t, r = {}) {
  var n;
  let o = {
      msalConfig: iC(e, t, r),
      cachedAccount: r.authenticationRecord ? jf(r.authenticationRecord) : null,
      pluginConfiguration: Wc.generatePluginConfiguration(r),
      logger: (n = r.logger) !== null && n !== void 0 ? n : De
    },
    i = new Map();
  async function s(A = {}) {
    let C = A.enableCae ? "CAE" : "default",
      E = i.get(C);
    if (E) return o.logger.getToken.info("Existing PublicClientApplication found in cache, returning it."), E;
    o.logger.getToken.info(`Creating new PublicClientApplication with CAE ${A.enableCae ? "enabled" : "disabled"}.`);
    let _ = A.enableCae ? o.pluginConfiguration.cache.cachePluginCae : o.pluginConfiguration.cache.cachePlugin;
    return o.msalConfig.auth.clientCapabilities = A.enableCae ? ["cp1"] : void 0, E = new Ts(Object.assign(Object.assign({}, o.msalConfig), {
      broker: {
        nativeBrokerPlugin: o.pluginConfiguration.broker.nativeBrokerPlugin
      },
      cache: {
        cachePlugin: await _
      }
    })), i.set(C, E), E;
  }
  let a = new Map();
  async function c(A = {}) {
    let C = A.enableCae ? "CAE" : "default",
      E = a.get(C);
    if (E) return o.logger.getToken.info("Existing ConfidentialClientApplication found in cache, returning it."), E;
    o.logger.getToken.info(`Creating new ConfidentialClientApplication with CAE ${A.enableCae ? "enabled" : "disabled"}.`);
    let _ = A.enableCae ? o.pluginConfiguration.cache.cachePluginCae : o.pluginConfiguration.cache.cachePlugin;
    return o.msalConfig.auth.clientCapabilities = A.enableCae ? ["cp1"] : void 0, E = new Cs(Object.assign(Object.assign({}, o.msalConfig), {
      broker: {
        nativeBrokerPlugin: o.pluginConfiguration.broker.nativeBrokerPlugin
      },
      cache: {
        cachePlugin: await _
      }
    })), a.set(C, E), E;
  }
  async function l(A, scopes_7, E = {}) {
    if (o.cachedAccount === null) throw o.logger.getToken.info("No cached account found in local state."), new AuthenticationRequiredError({
      scopes: scopes_7
    });
    if (E.claims) o.cachedClaims = E.claims;
    let _ = {
      account: o.cachedAccount,
      scopes: scopes_7,
      claims: o.cachedClaims
    };
    if (o.pluginConfiguration.broker.isEnabled) {
      if (_.tokenQueryParameters || (_.tokenQueryParameters = {}), o.pluginConfiguration.broker.enableMsaPassthrough) _.tokenQueryParameters.msal_request_type = "consumer_passthrough";
    }
    if (E.proofOfPossessionOptions) _.shrNonce = E.proofOfPossessionOptions.nonce, _.authenticationScheme = "pop", _.resourceRequestMethod = E.proofOfPossessionOptions.resourceRequestMethod, _.resourceRequestUri = E.proofOfPossessionOptions.resourceRequestUrl;
    o.logger.getToken.info("Attempting to acquire token silently");
    try {
      return await A.acquireTokenSilent(_);
    } catch (error) {
      throw Ur(scopes_7, error, E);
    }
  }
  function d(A) {
    if (A === null || A === void 0 ? void 0 : A.tenantId) return Sc(A.tenantId, _c(r));
    return o.msalConfig.auth.authority;
  }
  async function u(A, scopes_8, getTokenOptions_4, _) {
    var H, S;
    let D = null;
    try {
      D = await l(A, scopes_8, getTokenOptions_4);
    } catch (error) {
      if (error.name !== "AuthenticationRequiredError") throw error;
      if (getTokenOptions_4.disableAutomaticAuthentication) throw new AuthenticationRequiredError({
        scopes: scopes_8,
        getTokenOptions: getTokenOptions_4,
        message: "Automatic authentication has been disabled. You may call the authentication() method."
      });
    }
    if (D === null) try {
      D = await _();
    } catch (error) {
      throw Ur(scopes_8, error, getTokenOptions_4);
    }
    return Un(scopes_8, D, getTokenOptions_4), o.cachedAccount = (H = D === null || D === void 0 ? void 0 : D.account) !== null && H !== void 0 ? H : null, o.logger.getToken.info(he(scopes_8)), {
      token: D.accessToken,
      expiresOnTimestamp: D.expiresOn.getTime(),
      refreshAfterTimestamp: (S = D.refreshOn) === null || S === void 0 ? void 0 : S.getTime(),
      tokenType: D.tokenType
    };
  }
  async function getTokenByClientSecret(scopes_9, C, E = {}) {
    var _;
    o.logger.getToken.info("Attempting to acquire token using client secret"), o.msalConfig.auth.clientSecret = C;
    let H = await c(E);
    try {
      let S = await H.acquireTokenByClientCredential({
        scopes: scopes_9,
        authority: d(E),
        azureRegion: Ss(),
        claims: E === null || E === void 0 ? void 0 : E.claims
      });
      return Un(scopes_9, S, E), o.logger.getToken.info(he(scopes_9)), {
        token: S.accessToken,
        expiresOnTimestamp: S.expiresOn.getTime(),
        refreshAfterTimestamp: (_ = S.refreshOn) === null || _ === void 0 ? void 0 : _.getTime(),
        tokenType: S.tokenType
      };
    } catch (error) {
      throw Ur(scopes_9, error, E);
    }
  }
  async function getTokenByClientAssertion(scopes_10, clientAssertion_6, E = {}) {
    var _;
    o.logger.getToken.info("Attempting to acquire token using client assertion"), o.msalConfig.auth.clientAssertion = clientAssertion_6;
    let H = await c(E);
    try {
      let S = await H.acquireTokenByClientCredential({
        scopes: scopes_10,
        authority: d(E),
        azureRegion: Ss(),
        claims: E === null || E === void 0 ? void 0 : E.claims,
        clientAssertion: clientAssertion_6
      });
      return Un(scopes_10, S, E), o.logger.getToken.info(he(scopes_10)), {
        token: S.accessToken,
        expiresOnTimestamp: S.expiresOn.getTime(),
        refreshAfterTimestamp: (_ = S.refreshOn) === null || _ === void 0 ? void 0 : _.getTime(),
        tokenType: S.tokenType
      };
    } catch (error) {
      throw Ur(scopes_10, error, E);
    }
  }
  async function getTokenByClientCertificate(scopes_11, C, E = {}) {
    var _;
    o.logger.getToken.info("Attempting to acquire token using client certificate"), o.msalConfig.auth.clientCertificate = C;
    let H = await c(E);
    try {
      let S = await H.acquireTokenByClientCredential({
        scopes: scopes_11,
        authority: d(E),
        azureRegion: Ss(),
        claims: E === null || E === void 0 ? void 0 : E.claims
      });
      return Un(scopes_11, S, E), o.logger.getToken.info(he(scopes_11)), {
        token: S.accessToken,
        expiresOnTimestamp: S.expiresOn.getTime(),
        refreshAfterTimestamp: (_ = S.refreshOn) === null || _ === void 0 ? void 0 : _.getTime(),
        tokenType: S.tokenType
      };
    } catch (error) {
      throw Ur(scopes_11, error, E);
    }
  }
  async function getTokenByDeviceCode(scopes_12, deviceCodeCallback, E = {}) {
    o.logger.getToken.info("Attempting to acquire token using device code");
    let _ = await s(E);
    return u(_, scopes_12, E, () => {
      var H, S;
      let D = {
          scopes: scopes_12,
          cancel: (S = (H = E === null || E === void 0 ? void 0 : E.abortSignal) === null || H === void 0 ? void 0 : H.aborted) !== null && S !== void 0 ? S : !1,
          deviceCodeCallback: deviceCodeCallback,
          authority: d(E),
          claims: E === null || E === void 0 ? void 0 : E.claims
        },
        se = _.acquireTokenByDeviceCode(D);
      if (E.abortSignal) E.abortSignal.addEventListener("abort", () => {
        D.cancel = !0;
      });
      return se;
    });
  }
  async function getTokenByUsernamePassword(scopes_13, username, password, _ = {}) {
    o.logger.getToken.info("Attempting to acquire token using username and password");
    let H = await s(_);
    return u(H, scopes_13, _, () => {
      let S = {
        scopes: scopes_13,
        username: username,
        password: password,
        authority: d(_),
        claims: _ === null || _ === void 0 ? void 0 : _.claims
      };
      return H.acquireTokenByUsernamePassword(S);
    });
  }
  function getActiveAccount() {
    if (!o.cachedAccount) return;
    return Yf(e, o.cachedAccount);
  }
  async function getTokenByAuthorizationCode(scopes_14, redirectUri_3, code_73, _, H = {}) {
    o.logger.getToken.info("Attempting to acquire token using authorization code");
    let S;
    if (_) o.msalConfig.auth.clientSecret = _, S = await c(H);else S = await s(H);
    return u(S, scopes_14, H, () => S.acquireTokenByCode({
      scopes: scopes_14,
      redirectUri: redirectUri_3,
      code: code_73,
      authority: d(H),
      claims: H === null || H === void 0 ? void 0 : H.claims
    }));
  }
  async function getTokenOnBehalfOf(scopes_15, oboAssertion, E, _ = {}) {
    var H;
    if (De.getToken.info("Attempting to acquire token on behalf of another user"), typeof E === "string") De.getToken.info("Using client secret for on behalf of flow"), o.msalConfig.auth.clientSecret = E;else if (typeof E === "function") De.getToken.info("Using client assertion callback for on behalf of flow"), o.msalConfig.auth.clientAssertion = E;else De.getToken.info("Using client certificate for on behalf of flow"), o.msalConfig.auth.clientCertificate = E;
    let S = await c(_);
    try {
      let D = await S.acquireTokenOnBehalfOf({
        scopes: scopes_15,
        authority: d(_),
        claims: _.claims,
        oboAssertion: oboAssertion
      });
      return Un(scopes_15, D, _), De.getToken.info(he(scopes_15)), {
        token: D.accessToken,
        expiresOnTimestamp: D.expiresOn.getTime(),
        refreshAfterTimestamp: (H = D.refreshOn) === null || H === void 0 ? void 0 : H.getTime(),
        tokenType: D.tokenType
      };
    } catch (error) {
      throw Ur(scopes_15, error, _);
    }
  }
  async function getTokenByInteractiveRequest(scopes_16, C = {}) {
    De.getToken.info("Attempting to acquire token interactively");
    let E = await s(C);
    async function _(S) {
      var D;
      De.verbose("Authentication will resume through the broker");
      let se = H();
      if (o.pluginConfiguration.broker.parentWindowHandle) se.windowHandle = Buffer.from(o.pluginConfiguration.broker.parentWindowHandle);else De.warning("Parent window handle is not specified for the broker. This may cause unexpected behavior. Please provide the parentWindowHandle.");
      if (o.pluginConfiguration.broker.enableMsaPassthrough) ((D = se.tokenQueryParameters) !== null && D !== void 0 ? D : se.tokenQueryParameters = {}).msal_request_type = "consumer_passthrough";
      if (S) se.prompt = "none", De.verbose("Attempting broker authentication using the default broker account");else De.verbose("Attempting broker authentication without the default broker account");
      if (C.proofOfPossessionOptions) se.shrNonce = C.proofOfPossessionOptions.nonce, se.authenticationScheme = "pop", se.resourceRequestMethod = C.proofOfPossessionOptions.resourceRequestMethod, se.resourceRequestUri = C.proofOfPossessionOptions.resourceRequestUrl;
      try {
        return await E.acquireTokenInteractive(se);
      } catch (error) {
        if (De.verbose(`Failed to authenticate through the broker: ${error.message}`), S) return _(!1);else throw error;
      }
    }
    function H() {
      var S, D;
      return {
        openBrowser: async se => {
          let er = await import("B:/~BUN/root/chunk-hp58mswf.js");
          await er.default(se, {
            wait: !0,
            newInstance: !0
          });
        },
        scopes: scopes_16,
        authority: d(C),
        claims: C === null || C === void 0 ? void 0 : C.claims,
        loginHint: C === null || C === void 0 ? void 0 : C.loginHint,
        errorTemplate: (S = C === null || C === void 0 ? void 0 : C.browserCustomizationOptions) === null || S === void 0 ? void 0 : S.errorMessage,
        successTemplate: (D = C === null || C === void 0 ? void 0 : C.browserCustomizationOptions) === null || D === void 0 ? void 0 : D.successMessage,
        prompt: (C === null || C === void 0 ? void 0 : C.loginHint) ? "login" : "select_account"
      };
    }
    return u(E, scopes_16, C, async () => {
      var S;
      let D = H();
      if (o.pluginConfiguration.broker.isEnabled) return _((S = o.pluginConfiguration.broker.useDefaultBrokerAccount) !== null && S !== void 0 ? S : !1);
      if (C.proofOfPossessionOptions) D.shrNonce = C.proofOfPossessionOptions.nonce, D.authenticationScheme = "pop", D.resourceRequestMethod = C.proofOfPossessionOptions.resourceRequestMethod, D.resourceRequestUri = C.proofOfPossessionOptions.resourceRequestUrl;
      return E.acquireTokenInteractive(D);
    });
  }
  return {
    getActiveAccount: getActiveAccount,
    getTokenByClientSecret: getTokenByClientSecret,
    getTokenByClientAssertion: getTokenByClientAssertion,
    getTokenByClientCertificate: getTokenByClientCertificate,
    getTokenByDeviceCode: getTokenByDeviceCode,
    getTokenByUsernamePassword: getTokenByUsernamePassword,
    getTokenByAuthorizationCode: getTokenByAuthorizationCode,
    getTokenOnBehalfOf: getTokenOnBehalfOf,
    getTokenByInteractiveRequest: getTokenByInteractiveRequest
  };
}
var logger_6 = z("ClientAssertionCredential");
class wc {
  constructor(e, t, r, n = {}) {
    if (!e) throw new w("ClientAssertionCredential: tenantId is a required parameter.");
    if (!t) throw new w("ClientAssertionCredential: clientId is a required parameter.");
    if (!r) throw new w("ClientAssertionCredential: clientAssertion is a required parameter.");
    this.tenantId = e, this.additionallyAllowedTenantIds = we(n === null || n === void 0 ? void 0 : n.additionallyAllowedTenants), this.options = n, this.getAssertion = r, this.msalClient = Zt(t, e, Object.assign(Object.assign({}, n), {
      logger: logger_6,
      tokenCredentialOptions: this.options
    }));
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${this.constructor.name}.getToken`, t, async r => {
      r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, logger_6);
      let n = Array.isArray(e) ? e : [e];
      return this.msalClient.getTokenByClientAssertion(n, this.getAssertion, r);
    });
  }
}
import { readFile as sC } from "fs/promises";
var Hr = "WorkloadIdentityCredential",
  aC = ["AZURE_TENANT_ID", "AZURE_CLIENT_ID", "AZURE_FEDERATED_TOKEN_FILE"],
  Po = z(Hr);
class Fr {
  constructor(e) {
    this.azureFederatedTokenFileContent = void 0, this.cacheDate = void 0;
    let t = Ho(aC).assigned.join(", ");
    Po.info(`Found the following environment variables: ${t}`);
    let r = e !== null && e !== void 0 ? e : {},
      n = r.tenantId || process.env.AZURE_TENANT_ID,
      o = r.clientId || process.env.AZURE_CLIENT_ID;
    if (this.federatedTokenFilePath = r.tokenFilePath || process.env.AZURE_FEDERATED_TOKEN_FILE, n) Re(Po, n);
    if (!o) throw new w(`${Hr}: is unavailable. clientId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_CLIENT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    if (!n) throw new w(`${Hr}: is unavailable. tenantId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_TENANT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    if (!this.federatedTokenFilePath) throw new w(`${Hr}: is unavailable. federatedTokenFilePath is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_FEDERATED_TOKEN_FILE".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    Po.info(`Invoking ClientAssertionCredential with tenant ID: ${n}, clientId: ${r.clientId} and federated token path: [REDACTED]`), this.client = new wc(n, o, this.readFileContents.bind(this), e);
  }
  async getToken(e, t) {
    if (!this.client) {
      let r = `${Hr}: is unavailable. tenantId, clientId, and federatedTokenFilePath are required parameters. 
      In DefaultAzureCredential and ManagedIdentityCredential, these can be provided as environment variables - 
      "AZURE_TENANT_ID",
      "AZURE_CLIENT_ID",
      "AZURE_FEDERATED_TOKEN_FILE". See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`;
      throw Po.info(r), new w(r);
    }
    return Po.info("Invoking getToken() of Client Assertion Credential"), this.client.getToken(e, t);
  }
  async readFileContents() {
    if (this.cacheDate !== void 0 && Date.now() - this.cacheDate >= 300000) this.azureFederatedTokenFileContent = void 0;
    if (!this.federatedTokenFilePath) throw new w(`${Hr}: is unavailable. Invalid file path provided ${this.federatedTokenFilePath}.`);
    if (!this.azureFederatedTokenFileContent) {
      let t = (await sC(this.federatedTokenFilePath, "utf8")).trim();
      if (!t) throw new w(`${Hr}: is unavailable. No content on the file ${this.federatedTokenFilePath}.`);else this.azureFederatedTokenFileContent = t, this.cacheDate = Date.now();
    }
    return this.azureFederatedTokenFileContent;
  }
}
var Xf = "ManagedIdentityCredential - Token Exchange",
  cC = z(Xf),
  vc = {
    name: "tokenExchangeMsi",
    async isAvailable(e) {
      let env = process.env,
        r = Boolean((e || env.AZURE_CLIENT_ID) && env.AZURE_TENANT_ID && process.env.AZURE_FEDERATED_TOKEN_FILE);
      if (!r) cC.info(`${Xf}: Unavailable. The environment variables needed are: AZURE_CLIENT_ID (or the client ID sent through the parameters), AZURE_TENANT_ID and AZURE_FEDERATED_TOKEN_FILE`);
      return r;
    },
    async getToken(e, t = {}) {
      let {
          scopes: scopes_17,
          clientId: clientId_11
        } = e,
        o = {};
      return new Fr(Object.assign(Object.assign({
        clientId: clientId_11,
        tenantId: process.env.AZURE_TENANT_ID,
        tokenFilePath: process.env.AZURE_FEDERATED_TOKEN_FILE
      }, o), {
        disableInstanceDiscovery: !0
      })).getToken(scopes_17, t);
    }
  };
var $e = z("ManagedIdentityCredential");
class Ln {
  constructor(e, t) {
    var r, n;
    this.msiRetryConfig = {
      maxRetries: 5,
      startDelayInMs: 800,
      intervalIncrement: 2
    };
    let o;
    if (typeof e === "string") this.clientId = e, o = t !== null && t !== void 0 ? t : {};else this.clientId = e === null || e === void 0 ? void 0 : e.clientId, o = e !== null && e !== void 0 ? e : {};
    this.resourceId = o === null || o === void 0 ? void 0 : o.resourceId, this.objectId = o === null || o === void 0 ? void 0 : o.objectId;
    let i = [{
      key: "clientId",
      value: this.clientId
    }, {
      key: "resourceId",
      value: this.resourceId
    }, {
      key: "objectId",
      value: this.objectId
    }].filter(item => item.value);
    if (i.length > 1) throw Error(`ManagedIdentityCredential: only one of 'clientId', 'resourceId', or 'objectId' can be provided. Received values: ${JSON.stringify({
      clientId: this.clientId,
      resourceId: this.resourceId,
      objectId: this.objectId
    })}`);
    if (o.allowInsecureConnection = !0, ((r = o.retryOptions) === null || r === void 0 ? void 0 : r.maxRetries) !== void 0) this.msiRetryConfig.maxRetries = o.retryOptions.maxRetries;
    this.identityClient = new Qr(Object.assign(Object.assign({}, o), {
      additionalPolicies: [{
        policy: Wf(this.msiRetryConfig),
        position: "perCall"
      }]
    })), this.managedIdentityApp = new wt({
      managedIdentityIdParams: {
        userAssignedClientId: this.clientId,
        userAssignedResourceId: this.resourceId,
        userAssignedObjectId: this.objectId
      },
      system: {
        disableInternalRetries: !0,
        networkClient: this.identityClient,
        loggerOptions: {
          logLevel: _s(Lo()),
          piiLoggingEnabled: (n = o.loggingOptions) === null || n === void 0 ? void 0 : n.enableUnsafeSupportLogging,
          loggerCallback: Is($e)
        }
      }
    }), this.isAvailableIdentityClient = new Qr(Object.assign(Object.assign({}, o), {
      retryOptions: {
        maxRetries: 0
      }
    }));
    let s = this.managedIdentityApp.getManagedIdentitySource();
    if (s === "CloudShell") {
      if (this.clientId || this.resourceId || this.objectId) throw $e.warning(`CloudShell MSI detected with user-provided IDs - throwing. Received values: ${JSON.stringify({
        clientId: this.clientId,
        resourceId: this.resourceId,
        objectId: this.objectId
      })}.`), new w("ManagedIdentityCredential: Specifying a user-assigned managed identity is not supported for CloudShell at runtime. When using Managed Identity in CloudShell, omit the clientId, resourceId, and objectId parameters.");
    }
    if (s === "ServiceFabric") {
      if (this.clientId || this.resourceId || this.objectId) throw $e.warning(`Service Fabric detected with user-provided IDs - throwing. Received values: ${JSON.stringify({
        clientId: this.clientId,
        resourceId: this.resourceId,
        objectId: this.objectId
      })}.`), new w(`ManagedIdentityCredential: ${Ud}`);
    }
    if ($e.info(`Using ${s} managed identity.`), i.length === 1) {
      let {
        key: key,
        value: value_3
      } = i[0];
      $e.info(`${s} with ${key}: ${value_3}`);
    }
  }
  async getToken(scopes_18, getTokenOptions_5 = {}) {
    $e.getToken.info("Using the MSAL provider for Managed Identity.");
    let resource = eo(scopes_18);
    if (!resource) throw new w(`ManagedIdentityCredential: Multiple scopes are not supported. Scopes: ${JSON.stringify(scopes_18)}`);
    return Z.withSpan("ManagedIdentityCredential.getToken", getTokenOptions_5, async () => {
      var n;
      try {
        let o = await vc.isAvailable(this.clientId),
          i = this.managedIdentityApp.getManagedIdentitySource(),
          s = i === "DefaultToImds" || i === "Imds";
        if ($e.getToken.info(`MSAL Identity source: ${i}`), o) {
          $e.getToken.info("Using the token exchange managed identity.");
          let c = await vc.getToken({
            scopes: scopes_18,
            clientId: this.clientId,
            identityClient: this.identityClient,
            retryConfig: this.msiRetryConfig,
            resourceId: this.resourceId
          });
          if (c === null) throw new w("Attempted to use the token exchange managed identity, but received a null response.");
          return c;
        } else if (s) {
          if ($e.getToken.info("Using the IMDS endpoint to probe for availability."), !(await Qf.isAvailable({
            scopes: scopes_18,
            clientId: this.clientId,
            getTokenOptions: getTokenOptions_5,
            identityClient: this.isAvailableIdentityClient,
            resourceId: this.resourceId
          }))) throw new w("Attempted to use the IMDS endpoint, but it is not available.");
        }
        $e.getToken.info("Calling into MSAL for managed identity token.");
        let a = await this.managedIdentityApp.acquireToken({
          resource: resource
        });
        return this.ensureValidMsalToken(scopes_18, a, getTokenOptions_5), $e.getToken.info(he(scopes_18)), {
          expiresOnTimestamp: a.expiresOn.getTime(),
          token: a.accessToken,
          refreshAfterTimestamp: (n = a.refreshOn) === null || n === void 0 ? void 0 : n.getTime(),
          tokenType: "Bearer"
        };
      } catch (o) {
        if ($e.getToken.error(q(scopes_18, o)), o.name === "AuthenticationRequiredError") throw o;
        if (lC(o)) throw new w(`ManagedIdentityCredential: Network unreachable. Message: ${o.message}`, {
          cause: o
        });
        throw new w(`ManagedIdentityCredential: Authentication failed. Message ${o.message}`, {
          cause: o
        });
      }
    });
  }
  ensureValidMsalToken(e, t, getTokenOptions_6) {
    let n = message_3 => ($e.getToken.info(message_3), new AuthenticationRequiredError({
      scopes: Array.isArray(e) ? e : [e],
      getTokenOptions: getTokenOptions_6,
      message: message_3
    }));
    if (!t) throw n("No response.");
    if (!t.expiresOn) throw n('Response had no "expiresOn" property.');
    if (!t.accessToken) throw n('Response had no "accessToken" property.');
  }
}
function lC(e) {
  if (e.errorCode === "network_error") return !0;
  if (e.code === "ENETUNREACH" || e.code === "EHOSTUNREACH") return !0;
  if (e.statusCode === 403 || e.code === 403) {
    if (e.message.includes("unreachable")) return !0;
  }
  return !1;
}
function Rs(e) {
  return Array.isArray(e) ? e : [e];
}
function Hn(e, t) {
  if (!e.match(/^[0-9a-zA-Z-_.:/]+$/)) {
    let r = Error("Invalid scope was specified by the user or calling client");
    throw t.getToken.info(q(e, r)), r;
  }
}
function ws(e) {
  return e.replace(/\/.default$/, "");
}
import dC from "child_process";
function kc(e, t) {
  if (!t.match(/^[0-9a-zA-Z-._ ]+$/)) {
    let r = Error("Invalid subscription provided. You can locate your subscription by following the instructions listed here: https://learn.microsoft.com/azure/azure-portal/get-subscription-tenant-id.");
    throw e.info(q("", r)), r;
  }
}
var Ve = z("AzureCliCredential"),
  Zf = {
    getSafeWorkingDir() {
      {
        let e = process.env.SystemRoot || process.env.SYSTEMROOT;
        if (!e) Ve.getToken.warning("The SystemRoot environment variable is not set. This may cause issues when using the Azure CLI credential."), e = "C:\\Windows";
        return e;
      }
    },
    async getAzureCliAccessToken(e, t, r, timeout) {
      let o = [],
        i = [];
      if (t) o = ["--tenant", t];
      if (r) i = ["--subscription", `"${r}"`];
      return new Promise((s, a) => {
        try {
          dC.execFile("az", ["account", "get-access-token", "--output", "json", "--resource", e, ...o, ...i], {
            cwd: Zf.getSafeWorkingDir(),
            shell: !0,
            timeout: timeout
          }, (error_8, stdout, stderr) => {
            s({
              stdout: stdout,
              stderr: stderr,
              error: error_8
            });
          });
        } catch (error) {
          a(error);
        }
      });
    }
  };
class bc {
  constructor(e) {
    if (e === null || e === void 0 ? void 0 : e.tenantId) Re(Ve, e === null || e === void 0 ? void 0 : e.tenantId), this.tenantId = e === null || e === void 0 ? void 0 : e.tenantId;
    if (e === null || e === void 0 ? void 0 : e.subscription) kc(Ve, e === null || e === void 0 ? void 0 : e.subscription), this.subscription = e === null || e === void 0 ? void 0 : e.subscription;
    this.additionallyAllowedTenantIds = we(e === null || e === void 0 ? void 0 : e.additionallyAllowedTenants), this.timeout = e === null || e === void 0 ? void 0 : e.processTimeoutInMs;
  }
  async getToken(e, t = {}) {
    let r = Ee(this.tenantId, t, this.additionallyAllowedTenantIds);
    if (r) Re(Ve, r);
    if (this.subscription) kc(Ve, this.subscription);
    let n = typeof e === "string" ? e : e[0];
    return Ve.getToken.info(`Using the scope ${n}`), Z.withSpan(`${this.constructor.name}.getToken`, t, async () => {
      var o, i, s, a;
      try {
        Hn(n, Ve);
        let c = ws(n),
          l = await Zf.getAzureCliAccessToken(c, r, this.subscription, this.timeout),
          d = (o = l.stderr) === null || o === void 0 ? void 0 : o.match("(.*)az login --scope(.*)"),
          u = ((i = l.stderr) === null || i === void 0 ? void 0 : i.match("(.*)az login(.*)")) && !d;
        if (((s = l.stderr) === null || s === void 0 ? void 0 : s.match("az:(.*)not found")) || ((a = l.stderr) === null || a === void 0 ? void 0 : a.startsWith("'az' is not recognized"))) {
          let p = new w("Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'.");
          throw Ve.getToken.info(q(e, p)), p;
        }
        if (u) {
          let p = new w("Please run 'az login' from a command prompt to authenticate before using this credential.");
          throw Ve.getToken.info(q(e, p)), p;
        }
        try {
          let stdout_2 = l.stdout,
            y = this.parseRawResponse(stdout_2);
          return Ve.getToken.info(he(e)), y;
        } catch (error) {
          if (l.stderr) throw new w(l.stderr);
          throw error;
        }
      } catch (error) {
        let l = error.name === "CredentialUnavailableError" ? error : new w(error.message || "Unknown error while trying to retrieve the access token");
        throw Ve.getToken.info(q(e, l)), l;
      }
    });
  }
  parseRawResponse(e) {
    let t = JSON.parse(e),
      r = t.accessToken,
      expiresOnTimestamp = Number.parseInt(t.expires_on, 10) * 1000;
    if (!isNaN(expiresOnTimestamp)) return Ve.getToken.info("expires_on is available and is valid, using it"), {
      token: r,
      expiresOnTimestamp: expiresOnTimestamp,
      tokenType: "Bearer"
    };
    if (expiresOnTimestamp = new Date(t.expiresOn).getTime(), isNaN(expiresOnTimestamp)) throw new w(`Unexpected response from Azure CLI when getting token. Expected "expiresOn" to be a RFC3339 date string. Got: "${t.expiresOn}"`);
    return {
      token: r,
      expiresOnTimestamp: expiresOnTimestamp,
      tokenType: "Bearer"
    };
  }
}
import uC from "child_process";
var kt = z("AzureDeveloperCliCredential"),
  em = {
    getSafeWorkingDir() {
      {
        let e = process.env.SystemRoot || process.env.SYSTEMROOT;
        if (!e) kt.getToken.warning("The SystemRoot environment variable is not set. This may cause issues when using the Azure Developer CLI credential."), e = "C:\\Windows";
        return e;
      }
    },
    async getAzdAccessToken(e, t, timeout_2) {
      let n = [];
      if (t) n = ["--tenant-id", t];
      return new Promise((o, i) => {
        try {
          uC.execFile("azd", ["auth", "token", "--output", "json", ...e.reduce((acc, item) => acc.concat("--scope", item), []), ...n], {
            cwd: em.getSafeWorkingDir(),
            timeout: timeout_2
          }, (error_9, stdout_3, stderr_2) => {
            o({
              stdout: stdout_3,
              stderr: stderr_2,
              error: error_9
            });
          });
        } catch (error) {
          i(error);
        }
      });
    }
  };
class Pc {
  constructor(e) {
    if (e === null || e === void 0 ? void 0 : e.tenantId) Re(kt, e === null || e === void 0 ? void 0 : e.tenantId), this.tenantId = e === null || e === void 0 ? void 0 : e.tenantId;
    this.additionallyAllowedTenantIds = we(e === null || e === void 0 ? void 0 : e.additionallyAllowedTenants), this.timeout = e === null || e === void 0 ? void 0 : e.processTimeoutInMs;
  }
  async getToken(e, t = {}) {
    let r = Ee(this.tenantId, t, this.additionallyAllowedTenantIds);
    if (r) Re(kt, r);
    let n;
    if (typeof e === "string") n = [e];else n = e;
    return kt.getToken.info(`Using the scopes ${e}`), Z.withSpan(`${this.constructor.name}.getToken`, t, async () => {
      var o, i, s, a;
      try {
        n.forEach(item => {
          Hn(item, kt);
        });
        let c = await em.getAzdAccessToken(n, r, this.timeout),
          l = ((o = c.stderr) === null || o === void 0 ? void 0 : o.match("not logged in, run `azd login` to login")) || ((i = c.stderr) === null || i === void 0 ? void 0 : i.match("not logged in, run `azd auth login` to login"));
        if (((s = c.stderr) === null || s === void 0 ? void 0 : s.match("azd:(.*)not found")) || ((a = c.stderr) === null || a === void 0 ? void 0 : a.startsWith("'azd' is not recognized")) || c.error && c.error.code === "ENOENT") {
          let u = new w("Azure Developer CLI couldn't be found. To mitigate this issue, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
          throw kt.getToken.info(q(e, u)), u;
        }
        if (l) {
          let u = new w("Please run 'azd auth login' from a command prompt to authenticate before using this credential. For more information, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
          throw kt.getToken.info(q(e, u)), u;
        }
        try {
          let u = JSON.parse(c.stdout);
          return kt.getToken.info(he(e)), {
            token: u.token,
            expiresOnTimestamp: new Date(u.expiresOn).getTime(),
            tokenType: "Bearer"
          };
        } catch (error) {
          if (c.stderr) throw new w(c.stderr);
          throw error;
        }
      } catch (error) {
        let l = error.name === "CredentialUnavailableError" ? error : new w(error.message || "Unknown error while trying to retrieve the access token");
        throw kt.getToken.info(q(e, l)), l;
      }
    });
  }
}
import * as tm from "child_process";
var rm = {
  execFile(e, t, r) {
    return new Promise((n, o) => {
      tm.execFile(e, t, r, (i, s, a) => {
        if (Buffer.isBuffer(s)) s = s.toString("utf8");
        if (Buffer.isBuffer(a)) a = a.toString("utf8");
        if (a || i) o(a ? Error(a) : i);else n(s);
      });
    });
  }
};
var bt = z("AzurePowerShellCredential"),
  om = !0;
function im(e) {
  if (om) return `${e}.exe`;else return e;
}
async function nm(e, timeout_3) {
  let r = [];
  for (let n of e) {
    let [o, ...i] = n,
      s = await rm.execFile(o, i, {
        encoding: "utf8",
        timeout: timeout_3
      });
    r.push(s);
  }
  return r;
}
var sm = {
    login: "Run Connect-AzAccount to login",
    installed: "The specified module 'Az.Accounts' with version '2.2.0' was not loaded because no valid module file was found in any module directory"
  },
  Oc = {
    login: "Please run 'Connect-AzAccount' from PowerShell to authenticate before using this credential.",
    installed: `The 'Az.Account' module >= 2.2.0 is not installed. Install the Azure Az PowerShell module with: "Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force".`,
    troubleshoot: "To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot."
  },
  hC = e => e.message.match(`(.*)${sm.login}(.*)`),
  fC = e => e.message.match(sm.installed),
  Nc = [im("pwsh")];
if (om) Nc.push(im("powershell"));
class xc {
  constructor(e) {
    if (e === null || e === void 0 ? void 0 : e.tenantId) Re(bt, e === null || e === void 0 ? void 0 : e.tenantId), this.tenantId = e === null || e === void 0 ? void 0 : e.tenantId;
    this.additionallyAllowedTenantIds = we(e === null || e === void 0 ? void 0 : e.additionallyAllowedTenants), this.timeout = e === null || e === void 0 ? void 0 : e.processTimeoutInMs;
  }
  async getAzurePowerShellAccessToken(e, t, r) {
    for (let n of [...Nc]) {
      try {
        await nm([[n, "/?"]], r);
      } catch (error) {
        Nc.shift();
        continue;
      }
      let i = (await nm([[n, "-NoProfile", "-NonInteractive", "-Command", `
          $tenantId = "${t !== null && t !== void 0 ? t : ""}"
          $m = Import-Module Az.Accounts -MinimumVersion 2.2.0 -PassThru
          $useSecureString = $m.Version -ge [version]'2.17.0'

          $params = @{
            ResourceUrl = "${e}"
          }

          if ($tenantId.Length -gt 0) {
            $params["TenantId"] = $tenantId
          }

          if ($useSecureString) {
            $params["AsSecureString"] = $true
          }

          $token = Get-AzAccessToken @params

          $result = New-Object -TypeName PSObject
          $result | Add-Member -MemberType NoteProperty -Name ExpiresOn -Value $token.ExpiresOn
          if ($useSecureString) {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value (ConvertFrom-SecureString -AsPlainText $token.Token)
          } else {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value $token.Token
          }

          Write-Output (ConvertTo-Json $result)
          `]]))[0];
      return mC(i);
    }
    throw Error("Unable to execute PowerShell. Ensure that it is installed in your system");
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${this.constructor.name}.getToken`, t, async () => {
      let r = Ee(this.tenantId, t, this.additionallyAllowedTenantIds),
        n = typeof e === "string" ? e : e[0];
      if (r) Re(bt, r);
      try {
        Hn(n, bt), bt.getToken.info(`Using the scope ${n}`);
        let o = ws(n),
          i = await this.getAzurePowerShellAccessToken(o, r, this.timeout);
        return bt.getToken.info(he(e)), {
          token: i.Token,
          expiresOnTimestamp: new Date(i.ExpiresOn).getTime(),
          tokenType: "Bearer"
        };
      } catch (error) {
        if (fC(error)) {
          let s = new w(Oc.installed);
          throw bt.getToken.info(q(n, s)), s;
        } else if (hC(error)) {
          let s = new w(Oc.login);
          throw bt.getToken.info(q(n, s)), s;
        }
        let i = new w(`${error}. ${Oc.troubleshoot}`);
        throw bt.getToken.info(q(n, i)), i;
      }
    });
  }
}
async function mC(e) {
  let t = /{[^{}]*}/g,
    r = e.match(t),
    n = e;
  if (r) try {
    for (let o of r) try {
      let i = JSON.parse(o);
      if (i === null || i === void 0 ? void 0 : i.Token) {
        if (n = n.replace(o, ""), n) bt.getToken.warning(n);
        return i;
      }
    } catch (error) {
      continue;
    }
  } catch (error) {
    throw Error(`Unable to parse the output of PowerShell. Received output: ${e}`);
  }
  throw Error(`No access token found in the output. Received output: ${e}`);
}
var Mc = z("ChainedTokenCredential");
class Dc {
  constructor(...e) {
    this._sources = [], this._sources = e;
  }
  async getToken(e, t = {}) {
    let {
      token: token
    } = await this.getTokenInternal(e, t);
    return token;
  }
  async getTokenInternal(e, t = {}) {
    let token_2 = null,
      successfulCredential,
      o = [];
    return Z.withSpan("ChainedTokenCredential.getToken", t, async i => {
      for (let s = 0; s < this._sources.length && token_2 === null; s++) try {
        token_2 = await this._sources[s].getToken(e, i), successfulCredential = this._sources[s];
      } catch (error) {
        if (error.name === "CredentialUnavailableError" || error.name === "AuthenticationRequiredError") o.push(error);else throw Mc.getToken.info(q(e, error)), error;
      }
      if (!token_2 && o.length > 0) {
        let s = new Fs(o, "ChainedTokenCredential authentication failed.");
        throw Mc.getToken.info(q(e, s)), s;
      }
      if (Mc.getToken.info(`Result for ${successfulCredential.constructor.name}: ${he(e)}`), token_2 === null) throw new w("Failed to retrieve a valid token");
      return {
        token: token_2,
        successfulCredential: successfulCredential
      };
    });
  }
}
import { createHash as am, createPrivateKey as pC } from "crypto";
import { readFile as gC } from "fs/promises";
var Oo = "ClientCertificateCredential",
  logger_7 = z(Oo);
class Uc {
  constructor(e, t, certificatePath, tokenCredentialOptions = {}) {
    if (!e || !t) throw Error(`${Oo}: tenantId and clientId are required parameters.`);
    this.tenantId = e, this.additionallyAllowedTenantIds = we(tokenCredentialOptions === null || tokenCredentialOptions === void 0 ? void 0 : tokenCredentialOptions.additionallyAllowedTenants), this.sendCertificateChain = tokenCredentialOptions.sendCertificateChain, this.certificateConfiguration = Object.assign({}, typeof certificatePath === "string" ? {
      certificatePath: certificatePath
    } : certificatePath);
    let certificate = this.certificateConfiguration.certificate,
      certificatePath_2 = this.certificateConfiguration.certificatePath;
    if (!this.certificateConfiguration || !(certificate || certificatePath_2)) throw Error(`${Oo}: Provide either a PEM certificate in string form, or the path to that certificate in the filesystem. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    if (certificate && certificatePath_2) throw Error(`${Oo}: To avoid unexpected behaviors, providing both the contents of a PEM certificate and the path to a PEM certificate is forbidden. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    this.msalClient = Zt(t, e, Object.assign(Object.assign({}, tokenCredentialOptions), {
      logger: logger_7,
      tokenCredentialOptions: tokenCredentialOptions
    }));
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${Oo}.getToken`, t, async r => {
      r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, logger_7);
      let n = Array.isArray(e) ? e : [e],
        o = await this.buildClientCertificate();
      return this.msalClient.getTokenByClientCertificate(n, o, r);
    });
  }
  async buildClientCertificate() {
    var e;
    let t = await yC(this.certificateConfiguration, (e = this.sendCertificateChain) !== null && e !== void 0 ? e : !1),
      privateKey;
    if (this.certificateConfiguration.certificatePassword !== void 0) privateKey = pC({
      key: t.certificateContents,
      passphrase: this.certificateConfiguration.certificatePassword,
      format: "pem"
    }).export({
      format: "pem",
      type: "pkcs8"
    }).toString();else privateKey = t.certificateContents;
    return {
      thumbprint: t.thumbprint,
      thumbprintSha256: t.thumbprintSha256,
      privateKey: privateKey,
      x5c: t.x5c
    };
  }
}
async function yC(e, t) {
  let {
      certificate: certificate_2,
      certificatePath: certificatePath_3
    } = e,
    certificateContents = certificate_2 || (await gC(certificatePath_3, "utf8")),
    x5c = t ? certificateContents : void 0,
    s = /(-+BEGIN CERTIFICATE-+)(\n\r?|\r\n?)([A-Za-z0-9+/\n\r]+=*)(\n\r?|\r\n?)(-+END CERTIFICATE-+)/g,
    a = [],
    c;
  do if (c = s.exec(certificateContents), c) a.push(c[3]); while (c);
  if (a.length === 0) throw Error("The file at the specified path does not contain a PEM-encoded certificate.");
  let thumbprint = am("sha1").update(Buffer.from(a[0], "base64")).digest("hex").toUpperCase(),
    thumbprintSha256 = am("sha256").update(Buffer.from(a[0], "base64")).digest("hex").toUpperCase();
  return {
    certificateContents: certificateContents,
    thumbprintSha256: thumbprintSha256,
    thumbprint: thumbprint,
    x5c: x5c
  };
}
var logger_8 = z("ClientSecretCredential");
class Lc {
  constructor(e, t, r, tokenCredentialOptions_2 = {}) {
    if (!e) throw new w("ClientSecretCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    if (!t) throw new w("ClientSecretCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    if (!r) throw new w("ClientSecretCredential: clientSecret is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    this.clientSecret = r, this.tenantId = e, this.additionallyAllowedTenantIds = we(tokenCredentialOptions_2 === null || tokenCredentialOptions_2 === void 0 ? void 0 : tokenCredentialOptions_2.additionallyAllowedTenants), this.msalClient = Zt(t, e, Object.assign(Object.assign({}, tokenCredentialOptions_2), {
      logger: logger_8,
      tokenCredentialOptions: tokenCredentialOptions_2
    }));
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${this.constructor.name}.getToken`, t, async r => {
      r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, logger_8);
      let n = Rs(e);
      return this.msalClient.getTokenByClientSecret(n, this.clientSecret, r);
    });
  }
}
var TC = z("UsernamePasswordCredential");
class Hc {
  constructor(e, t, r, n, o = {}) {
    if (!e) throw new w("UsernamePasswordCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!t) throw new w("UsernamePasswordCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!r) throw new w("UsernamePasswordCredential: username is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!n) throw new w("UsernamePasswordCredential: password is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    this.tenantId = e, this.additionallyAllowedTenantIds = we(o === null || o === void 0 ? void 0 : o.additionallyAllowedTenants), this.username = r, this.password = n, this.msalClient = Zt(t, this.tenantId, Object.assign(Object.assign({}, o), {
      tokenCredentialOptions: o !== null && o !== void 0 ? o : {}
    }));
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${this.constructor.name}.getToken`, t, async r => {
      r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, TC);
      let n = Rs(e);
      return this.msalClient.getTokenByUsernamePassword(n, this.username, this.password, r);
    });
  }
}
var EC = ["AZURE_TENANT_ID", "AZURE_CLIENT_ID", "AZURE_CLIENT_SECRET", "AZURE_CLIENT_CERTIFICATE_PATH", "AZURE_CLIENT_CERTIFICATE_PASSWORD", "AZURE_USERNAME", "AZURE_PASSWORD", "AZURE_ADDITIONALLY_ALLOWED_TENANTS", "AZURE_CLIENT_SEND_CERTIFICATE_CHAIN"];
function CC() {
  var e;
  return ((e = process.env.AZURE_ADDITIONALLY_ALLOWED_TENANTS) !== null && e !== void 0 ? e : "").split(";");
}
var vs = "EnvironmentCredential",
  Pt = z(vs);
function AC() {
  var e;
  let t = ((e = process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN) !== null && e !== void 0 ? e : "").toLowerCase(),
    r = t === "true" || t === "1";
  return Pt.verbose(`AZURE_CLIENT_SEND_CERTIFICATE_CHAIN: ${process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN}; sendCertificateChain: ${r}`), r;
}
class Fc {
  constructor(e) {
    this._credential = void 0;
    let t = Ho(EC).assigned.join(", ");
    Pt.info(`Found the following environment variables: ${t}`);
    let AZURE_TENANT_ID = process.env.AZURE_TENANT_ID,
      AZURE_CLIENT_ID = process.env.AZURE_CLIENT_ID,
      AZURE_CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET,
      additionallyAllowedTenantIds = CC(),
      sendCertificateChain = AC(),
      a = Object.assign(Object.assign({}, e), {
        additionallyAllowedTenantIds: additionallyAllowedTenantIds,
        sendCertificateChain: sendCertificateChain
      });
    if (AZURE_TENANT_ID) Re(Pt, AZURE_TENANT_ID);
    if (AZURE_TENANT_ID && AZURE_CLIENT_ID && AZURE_CLIENT_SECRET) {
      Pt.info(`Invoking ClientSecretCredential with tenant ID: ${AZURE_TENANT_ID}, clientId: ${AZURE_CLIENT_ID} and clientSecret: [REDACTED]`), this._credential = new Lc(AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, a);
      return;
    }
    let c = process.env.AZURE_CLIENT_CERTIFICATE_PATH,
      l = process.env.AZURE_CLIENT_CERTIFICATE_PASSWORD;
    if (AZURE_TENANT_ID && AZURE_CLIENT_ID && c) {
      Pt.info(`Invoking ClientCertificateCredential with tenant ID: ${AZURE_TENANT_ID}, clientId: ${AZURE_CLIENT_ID} and certificatePath: ${c}`), this._credential = new Uc(AZURE_TENANT_ID, AZURE_CLIENT_ID, {
        certificatePath: c,
        certificatePassword: l
      }, a);
      return;
    }
    let AZURE_USERNAME = process.env.AZURE_USERNAME,
      AZURE_PASSWORD = process.env.AZURE_PASSWORD;
    if (AZURE_TENANT_ID && AZURE_CLIENT_ID && AZURE_USERNAME && AZURE_PASSWORD) Pt.info(`Invoking UsernamePasswordCredential with tenant ID: ${AZURE_TENANT_ID}, clientId: ${AZURE_CLIENT_ID} and username: ${AZURE_USERNAME}`), Pt.warning("Environment is configured to use username and password authentication. This authentication method is deprecated, as it doesn't support multifactor authentication (MFA). Use a more secure credential. For more details, see https://aka.ms/azsdk/identity/mfa."), this._credential = new Hc(AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_USERNAME, AZURE_PASSWORD, a);
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${vs}.getToken`, t, async r => {
      if (this._credential) try {
        let n = await this._credential.getToken(e, r);
        return Pt.getToken.info(he(e)), n;
      } catch (n) {
        let o = new $n(400, {
          error: `${vs} authentication failed. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`,
          error_description: n.message.toString().split("More details:").join("")
        });
        throw Pt.getToken.info(q(e, o)), o;
      }
      throw new w(`${vs} is unavailable. No underlying credential could be used. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`);
    });
  }
}
var $c = z("DefaultAzureCredential");
function IC(e = {}) {
  var t, r, n, o;
  (t = e.retryOptions) !== null && t !== void 0 || (e.retryOptions = {
    maxRetries: 5,
    retryDelayInMs: 800
  });
  let clientId_12 = (r = e === null || e === void 0 ? void 0 : e.managedIdentityClientId) !== null && r !== void 0 ? r : process.env.AZURE_CLIENT_ID,
    s = (n = e === null || e === void 0 ? void 0 : e.workloadIdentityClientId) !== null && n !== void 0 ? n : clientId_12,
    resourceId = e === null || e === void 0 ? void 0 : e.managedIdentityResourceId,
    AZURE_FEDERATED_TOKEN_FILE = process.env.AZURE_FEDERATED_TOKEN_FILE,
    tenantId_4 = (o = e === null || e === void 0 ? void 0 : e.tenantId) !== null && o !== void 0 ? o : process.env.AZURE_TENANT_ID;
  if (resourceId) {
    let d = Object.assign(Object.assign({}, e), {
      resourceId: resourceId
    });
    return new Ln(d);
  }
  if (AZURE_FEDERATED_TOKEN_FILE && s) {
    let d = Object.assign(Object.assign({}, e), {
      tenantId: tenantId_4
    });
    return new Ln(s, d);
  }
  if (clientId_12) {
    let d = Object.assign(Object.assign({}, e), {
      clientId: clientId_12
    });
    return new Ln(d);
  }
  return new Ln(e);
}
function _C(e) {
  var t, r, n;
  let o = (t = e === null || e === void 0 ? void 0 : e.managedIdentityClientId) !== null && t !== void 0 ? t : process.env.AZURE_CLIENT_ID,
    clientId_13 = (r = e === null || e === void 0 ? void 0 : e.workloadIdentityClientId) !== null && r !== void 0 ? r : o,
    s = process.env.AZURE_FEDERATED_TOKEN_FILE,
    tenantId_5 = (n = e === null || e === void 0 ? void 0 : e.tenantId) !== null && n !== void 0 ? n : process.env.AZURE_TENANT_ID;
  if (s && clientId_13) {
    let c = Object.assign(Object.assign({}, e), {
      tenantId: tenantId_5,
      clientId: clientId_13,
      tokenFilePath: s
    });
    return new Fr(c);
  }
  if (tenantId_5) {
    let c = Object.assign(Object.assign({}, e), {
      tenantId: tenantId_5
    });
    return new Fr(c);
  }
  return new Fr(e);
}
function SC(e = {}) {
  let processTimeoutInMs = e.processTimeoutInMs;
  return new Pc(Object.assign({
    processTimeoutInMs: processTimeoutInMs
  }, e));
}
function RC(e = {}) {
  let processTimeoutInMs_2 = e.processTimeoutInMs;
  return new bc(Object.assign({
    processTimeoutInMs: processTimeoutInMs_2
  }, e));
}
function wC(e = {}) {
  let processTimeoutInMs_3 = e.processTimeoutInMs;
  return new xc(Object.assign({
    processTimeoutInMs: processTimeoutInMs_3
  }, e));
}
function vC(e = {}) {
  return new Fc(e);
}
class dm {
  constructor(e, t) {
    this.credentialName = e, this.credentialUnavailableErrorMessage = t;
  }
  getToken() {
    return $c.getToken.info(`Skipping ${this.credentialName}, reason: ${this.credentialUnavailableErrorMessage}`), Promise.resolve(null);
  }
}
class um extends Dc {
  constructor(e) {
    let t = process.env.AZURE_TOKEN_CREDENTIALS ? process.env.AZURE_TOKEN_CREDENTIALS.trim().toLowerCase() : void 0,
      r = [RC, wC, SC],
      n = [vC, _C, IC],
      o = [];
    if (t) switch (t) {
      case "dev":
        o = r;
        break;
      case "prod":
        o = n;
        break;
      default:
        {
          let s = `Invalid value for AZURE_TOKEN_CREDENTIALS = ${process.env.AZURE_TOKEN_CREDENTIALS}. Valid values are 'prod' or 'dev'.`;
          throw $c.warning(s), Error(s);
        }
    } else o = [...n, ...r];
    let i = o.map(item => {
      try {
        return item(e);
      } catch (error) {
        return $c.warning(`Skipped ${item.name} because of an error creating the credential: ${error}`), new dm(item.name, error.message);
      }
    });
    super(...i);
  }
}
function kC(credential_2, scopes_19, r) {
  let {
      abortSignal: abortSignal_6,
      tracingOptions: tracingOptions
    } = r || {},
    i = qn();
  i.addPolicy(Zn({
    credential: credential_2,
    scopes: scopes_19
  }));
  async function s() {
    var a;
    let l = (a = (await i.sendRequest({
      sendRequest: request_8 => Promise.resolve({
        request: request_8,
        status: 200,
        headers: request_8.headers
      })
    }, Ye({
      url: "https://example.com",
      abortSignal: abortSignal_6,
      tracingOptions: tracingOptions
    }))).headers.get("authorization")) === null || a === void 0 ? void 0 : a.split(" ")[1];
    if (!l) throw Error("Failed to get access token");
    return l;
  }
  return s;
}
export { um as DefaultAzureCredential, kC as getBearerTokenProvider };