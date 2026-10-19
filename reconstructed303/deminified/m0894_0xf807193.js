// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { J_e, zJr, xY, cYt, koe, Di, BRe, sAn, dAn, cAn, Q_e, uYt, uAn, pAn, fAn, mAn, gAn, hAn, VJr, gi } from "B:/~BUN/root/chunk-d8rhtyyx.js";
import { Dm, _Wn } from "B:/~BUN/root/chunk-h7v3htsh.js";
import { WBo } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { ve, R } from "B:/~BUN/root/chunk-ef0msk7r.js";
var X = R(function (W) {
  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.formatNames = W.fastFormats = W.fullFormats = void 0;
  function k(validate, compare) {
    return {
      validate: validate,
      compare: compare
    };
  }
  W.fullFormats = {
    date: k(Q, O),
    time: k(M(!0), j),
    "date-time": k(U(!0), K),
    "iso-time": k(M(), B),
    "iso-date-time": k(U(), G),
    duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: uri,
    "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
    "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
    ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
    regex: regex,
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    byte: byte,
    int32: {
      type: "number",
      validate: validate_2
    },
    int64: {
      type: "number",
      validate: validate_3
    },
    float: {
      type: "number",
      validate: validate_4
    },
    double: {
      type: "number",
      validate: validate_4
    },
    password: !0,
    binary: !0
  };
  W.fastFormats = {
    ...W.fullFormats,
    date: k(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, O),
    time: k(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, j),
    "date-time": k(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, K),
    "iso-time": k(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, B),
    "iso-date-time": k(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, G),
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
  };
  W.formatNames = Object.keys(W.fullFormats);
  function _e(e) {
    return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
  }
  var ke = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
    Te = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function Q(e) {
    let t = ke.exec(e);
    if (!t) return !1;
    let r = +t[1],
      a = +t[2],
      n = +t[3];
    return a >= 1 && a <= 12 && n >= 1 && n <= (a === 2 && _e(r) ? 29 : Te[a]);
  }
  function O(e, t) {
    if (!(e && t)) return;
    if (e > t) return 1;
    if (e < t) return -1;
    return 0;
  }
  var E = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function M(e) {
    return function (r) {
      let a = E.exec(r);
      if (!a) return !1;
      let n = +a[1],
        s = +a[2],
        o = +a[3],
        u = a[4],
        p = a[5] === "-" ? -1 : 1,
        i = +(a[6] || 0),
        c = +(a[7] || 0);
      if (i > 23 || c > 59 || e && !u) return !1;
      if (n <= 23 && s <= 59 && o < 60) return !0;
      let d = s - c * p,
        f = n - i * p - (d < 0 ? 1 : 0);
      return (f === 23 || f === -1) && (d === 59 || d === -1) && o < 61;
    };
  }
  function j(e, t) {
    if (!(e && t)) return;
    let r = new Date("2020-01-01T" + e).valueOf(),
      a = new Date("2020-01-01T" + t).valueOf();
    if (!(r && a)) return;
    return r - a;
  }
  function B(e, t) {
    if (!(e && t)) return;
    let r = E.exec(e),
      a = E.exec(t);
    if (!(r && a)) return;
    if (e = r[1] + r[2] + r[3], t = a[1] + a[2] + a[3], e > t) return 1;
    if (e < t) return -1;
    return 0;
  }
  var N = /t|\s/i;
  function U(e) {
    let t = M(e);
    return function (a) {
      let n = a.split(N);
      return n.length === 2 && Q(n[0]) && t(n[1]);
    };
  }
  function K(e, t) {
    if (!(e && t)) return;
    let r = new Date(e).valueOf(),
      a = new Date(t).valueOf();
    if (!(r && a)) return;
    return r - a;
  }
  function G(e, t) {
    if (!(e && t)) return;
    let [r, a] = e.split(N),
      [n, s] = t.split(N),
      o = O(r, n);
    if (o === void 0) return;
    return o || j(a, s);
  }
  var be = /\/|:/,
    we = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function uri(e) {
    return be.test(e) && we.test(e);
  }
  var V = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function byte(e) {
    return V.lastIndex = 0, V.test(e);
  }
  var xe = -2147483648,
    Ae = 2147483647;
  function validate_2(e) {
    return Number.isInteger(e) && e <= Ae && e >= xe;
  }
  function validate_3(e) {
    return Number.isInteger(e);
  }
  function validate_4() {
    return !0;
  }
  var Ie = /[^\\]\\Z/;
  function regex(e) {
    if (Ie.test(e)) return !1;
    try {
      return new RegExp(e), !0;
    } catch (error) {
      return !1;
    }
  }
});
var re = R(function (te) {
  Object.defineProperty(te, "__esModule", {
    value: !0
  });
  te.formatLimitDefinition = void 0;
  var ee = _Wn(),
    l = Dm(),
    operators = l.operators,
    D = {
      formatMaximum: {
        okStr: "<=",
        ok: operators.LTE,
        fail: operators.GT
      },
      formatMinimum: {
        okStr: ">=",
        ok: operators.GTE,
        fail: operators.LT
      },
      formatExclusiveMaximum: {
        okStr: "<",
        ok: operators.LT,
        fail: operators.GTE
      },
      formatExclusiveMinimum: {
        okStr: ">",
        ok: operators.GT,
        fail: operators.LTE
      }
    },
    error_2 = {
      message: ({
        keyword: keyword,
        schemaCode: schemaCode
      }) => l.str`should be ${D[keyword].okStr} ${schemaCode}`,
      params: ({
        keyword: keyword_2,
        schemaCode: schemaCode_2
      }) => l._`{comparison: ${D[keyword_2].okStr}, limit: ${schemaCode_2}}`
    };
  te.formatLimitDefinition = {
    keyword: Object.keys(D),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: error_2,
    code(e) {
      let {
          gen: gen,
          data: data,
          schemaCode: schemaCode_3,
          keyword: keyword_3,
          it: it
        } = e,
        {
          opts: opts,
          self: self
        } = it;
      if (!opts.validateFormats) return;
      let p = new ee.KeywordCxt(it, self.RULES.all.format.definition, "format");
      if (p.$data) i();else c();
      function i() {
        let f = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          }),
          m = gen.const("fmt", l._`${f}[${p.schemaCode}]`);
        e.fail$data(l.or(l._`typeof ${m} != "object"`, l._`${m} instanceof RegExp`, l._`typeof ${m}.compare != "function"`, d(m)));
      }
      function c() {
        let f = p.schema,
          ref = self.formats[f];
        if (!ref || ref === !0) return;
        if (typeof ref != "object" || ref instanceof RegExp || typeof ref.compare != "function") throw Error(`"${keyword_3}": format "${f}" does not define "compare" function`);
        let x = gen.scopeValue("formats", {
          key: f,
          ref: ref,
          code: opts.code.formats ? l._`${opts.code.formats}${l.getProperty(f)}` : void 0
        });
        e.fail$data(d(x));
      }
      function d(f) {
        return l._`${f}.compare(${data}, ${schemaCode_3}) ${D[keyword_3].fail} 0`;
      }
    },
    dependencies: ["format"]
  };
  var Me = e => (e.addKeyword(te.formatLimitDefinition), e);
  te.default = Me;
});
var oe = R(function (P, se) {
  Object.defineProperty(P, "__esModule", {
    value: !0
  });
  var y = X(),
    Oe = re(),
    w = Dm(),
    ae = new w.Name("fullFormats"),
    je = new w.Name("fastFormats"),
    C = (e, t = {
      keywords: !0
    }) => {
      if (Array.isArray(t)) return ne(e, t, y.fullFormats, ae), e;
      let [r, a] = t.mode === "fast" ? [y.fastFormats, je] : [y.fullFormats, ae],
        n = t.formats || y.formatNames;
      if (ne(e, n, r, a), t.keywords) (0, Oe.default)(e);
      return e;
    };
  C.get = (e, t = "full") => {
    let a = (t === "fast" ? y.fastFormats : y.fullFormats)[e];
    if (!a) throw Error(`Unknown format "${e}"`);
    return a;
  };
  function ne(e, t, r, a) {
    var n, s;
    (n = (s = e.opts.code).formats) !== null && n !== void 0 || (s.formats = w._`require("ajv-formats/dist/formats").${a}`);
    for (let o of t) e.addFormat(o, r[o]);
  }
  se.exports = P = C;
  Object.defineProperty(P, "__esModule", {
    value: !0
  });
  P.default = C;
});
function uKe(e) {
  return !!e._zod;
}
function A8(e, t) {
  if (uKe(e)) return WBo(e, t);
  return e.safeParse(t);
}
function ITt(e) {
  if (!e) return;
  let t;
  if (uKe(e)) t = e._zod?.def?.shape;else t = e.shape;
  if (!t) return;
  if (typeof t === "function") try {
    return t();
  } catch {
    return;
  }
  return t;
}
function H(e) {
  if (uKe(e)) {
    let s = e._zod?.def;
    if (s) {
      if (s.value !== void 0) return s.value;
      if (Array.isArray(s.values) && s.values.length > 0) return s.values[0];
    }
  }
  let _def = e._def;
  if (_def) {
    if (_def.value !== void 0) return _def.value;
    if (Array.isArray(_def.values) && _def.values.length > 0) return _def.values[0];
  }
  let a = e.value;
  if (a !== void 0) return a;
  return;
}
function T(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}
var fe = Symbol("Let zodToJsonSchema decide on which parser to use");
var Et = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function I(e) {
  let r = ITt(e)?.method;
  if (!r) throw Error("Schema is missing a method literal");
  let a = H(r);
  if (typeof a !== "string") throw Error("Schema method literal must be a string");
  return a;
}
function z(e, t) {
  let r = A8(e, t);
  if (!r.success) throw r.error;
  return r.data;
}
var ye = 60000;
class lYt {
  constructor(e) {
    if (this._options = e, this._requestMessageId = 0, this._requestHandlers = new Map(), this._requestHandlerAbortControllers = new Map(), this._notificationHandlers = new Map(), this._responseHandlers = new Map(), this._progressHandlers = new Map(), this._timeoutInfo = new Map(), this._pendingDebouncedNotifications = new Set(), this._taskProgressTokens = new Map(), this._requestResolvers = new Map(), this.setNotificationHandler(sAn, t => {
      this._oncancel(t);
    }), this.setNotificationHandler(cAn, t => {
      this._onprogress(t);
    }), this.setRequestHandler(dAn, t => ({})), this._taskStore = e?.taskStore, this._taskMessageQueue = e?.taskMessageQueue, this._taskStore) this.setRequestHandler(uAn, async (t, r) => {
      let a = await this._taskStore.getTask(t.params.taskId, r.sessionId);
      if (!a) throw new gi(Di.InvalidParams, "Failed to retrieve task: Task not found");
      return {
        ...a
      };
    }), this.setRequestHandler(fAn, async (t, r) => {
      let a = async () => {
        let taskId = t.params.taskId;
        if (this._taskMessageQueue) {
          let o;
          while (o = await this._taskMessageQueue.dequeue(taskId, r.sessionId)) {
            if (o.type === "response" || o.type === "error") {
              let u = o.message,
                p = u.id,
                i = this._requestResolvers.get(p);
              if (i) {
                if (this._requestResolvers.delete(p), o.type === "response") i(u);else {
                  let c = u,
                    d = new gi(c.error.code, c.error.message, c.error.data);
                  i(d);
                }
              } else {
                let c = o.type === "response" ? "Response" : "Error";
                this._onerror(Error(`${c} handler missing for request ${p}`));
              }
              continue;
            }
            await this._transport?.send(o.message, {
              relatedRequestId: r.requestId
            });
          }
        }
        let s = await this._taskStore.getTask(taskId, r.sessionId);
        if (!s) throw new gi(Di.InvalidParams, `Task not found: ${taskId}`);
        if (!T(s.status)) return await this._waitForTaskUpdate(taskId, r.signal), await a();
        if (T(s.status)) {
          let o = await this._taskStore.getTaskResult(taskId, r.sessionId);
          return this._clearTaskQueue(taskId), {
            ...o,
            _meta: {
              ...o._meta,
              [J_e]: {
                taskId: taskId
              }
            }
          };
        }
        return await a();
      };
      return await a();
    }), this.setRequestHandler(mAn, async (t, r) => {
      try {
        let {
          tasks: tasks,
          nextCursor: nextCursor
        } = await this._taskStore.listTasks(t.params?.cursor, r.sessionId);
        return {
          tasks: tasks,
          nextCursor: nextCursor,
          _meta: {}
        };
      } catch (error) {
        throw new gi(Di.InvalidParams, `Failed to list tasks: ${error instanceof Error ? error.message : String(error)}`);
      }
    }), this.setRequestHandler(hAn, async (t, r) => {
      try {
        let a = await this._taskStore.getTask(t.params.taskId, r.sessionId);
        if (!a) throw new gi(Di.InvalidParams, `Task not found: ${t.params.taskId}`);
        if (T(a.status)) throw new gi(Di.InvalidParams, `Cannot cancel task in terminal status: ${a.status}`);
        await this._taskStore.updateTaskStatus(t.params.taskId, "cancelled", "Client cancelled task execution.", r.sessionId), this._clearTaskQueue(t.params.taskId);
        let n = await this._taskStore.getTask(t.params.taskId, r.sessionId);
        if (!n) throw new gi(Di.InvalidParams, `Task not found after cancellation: ${t.params.taskId}`);
        return {
          _meta: {},
          ...n
        };
      } catch (error) {
        if (error instanceof gi) throw error;
        throw new gi(Di.InvalidRequest, `Failed to cancel task: ${error instanceof Error ? error.message : String(error)}`);
      }
    });
  }
  async _oncancel(e) {
    if (!e.params.requestId) return;
    this._requestHandlerAbortControllers.get(e.params.requestId)?.abort(e.params.reason);
  }
  _setupTimeout(e, timeout, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = !1) {
    this._timeoutInfo.set(e, {
      timeoutId: setTimeout(onTimeout, timeout),
      startTime: Date.now(),
      timeout: timeout,
      maxTotalTimeout: maxTotalTimeout,
      resetTimeoutOnProgress: resetTimeoutOnProgress,
      onTimeout: onTimeout
    });
  }
  _resetTimeout(e) {
    let t = this._timeoutInfo.get(e);
    if (!t) return !1;
    let totalElapsed = Date.now() - t.startTime;
    if (t.maxTotalTimeout && totalElapsed >= t.maxTotalTimeout) throw this._timeoutInfo.delete(e), gi.fromError(Di.RequestTimeout, "Maximum total timeout exceeded", {
      maxTotalTimeout: t.maxTotalTimeout,
      totalElapsed: totalElapsed
    });
    return clearTimeout(t.timeoutId), t.timeoutId = setTimeout(t.onTimeout, t.timeout), !0;
  }
  _cleanupTimeout(e) {
    let t = this._timeoutInfo.get(e);
    if (t) clearTimeout(t.timeoutId), this._timeoutInfo.delete(e);
  }
  async connect(e) {
    if (this._transport) throw Error("Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.");
    this._transport = e;
    let t = this.transport?.onclose;
    this._transport.onclose = () => {
      t?.(), this._onclose();
    };
    let r = this.transport?.onerror;
    this._transport.onerror = n => {
      r?.(n), this._onerror(n);
    };
    let a = this._transport?.onmessage;
    this._transport.onmessage = (n, s) => {
      if (a?.(n, s), koe(n) || BRe(n)) this._onresponse(n);else if (xY(n)) this._onrequest(n, s);else if (cYt(n)) this._onnotification(n);else this._onerror(Error(`Unknown message type: ${JSON.stringify(n)}`));
    }, await this._transport.start();
  }
  _onclose() {
    let _responseHandlers = this._responseHandlers;
    this._responseHandlers = new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (let r of this._timeoutInfo.values()) clearTimeout(r.timeoutId);
    this._timeoutInfo.clear();
    for (let r of this._requestHandlerAbortControllers.values()) r.abort();
    this._requestHandlerAbortControllers.clear();
    let t = gi.fromError(Di.ConnectionClosed, "Connection closed");
    this._transport = void 0, this.onclose?.();
    for (let r of _responseHandlers.values()) r(t);
  }
  _onerror(e) {
    this.onerror?.(e);
  }
  _onnotification(e) {
    let t = this._notificationHandlers.get(e.method) ?? this.fallbackNotificationHandler;
    if (t === void 0) return;
    Promise.resolve().then(() => t(e)).catch(r => this._onerror(Error(`Uncaught error in notification handler: ${r}`)));
  }
  _onrequest(e, t) {
    let r = this._requestHandlers.get(e.method) ?? this.fallbackRequestHandler,
      _transport = this._transport,
      taskId_2 = e.params?._meta?.[J_e]?.taskId;
    if (r === void 0) {
      let message = {
        jsonrpc: "2.0",
        id: e.id,
        error: {
          code: Di.MethodNotFound,
          message: "Method not found"
        }
      };
      if (taskId_2 && this._taskMessageQueue) this._enqueueTaskMessage(taskId_2, {
        type: "error",
        message: message,
        timestamp: Date.now()
      }, _transport?.sessionId).catch(c => this._onerror(Error(`Failed to enqueue error response: ${c}`)));else _transport?.send(message).catch(c => this._onerror(Error(`Failed to send an error response: ${c}`)));
      return;
    }
    let abortController = new AbortController();
    this._requestHandlerAbortControllers.set(e.id, abortController);
    let o = zJr(e.params) ? e.params.task : void 0,
      taskStore = this._taskStore ? this.requestTaskStore(e, _transport?.sessionId) : void 0,
      p = {
        signal: abortController.signal,
        sessionId: _transport?.sessionId,
        _meta: e.params?._meta,
        sendNotification: async i => {
          if (abortController.signal.aborted) return;
          let c = {
            relatedRequestId: e.id
          };
          if (taskId_2) c.relatedTask = {
            taskId: taskId_2
          };
          await this.notification(i, c);
        },
        sendRequest: async (i, c, d) => {
          if (abortController.signal.aborted) throw new gi(Di.ConnectionClosed, "Request was cancelled");
          let f = {
            ...d,
            relatedRequestId: e.id
          };
          if (taskId_2 && !f.relatedTask) f.relatedTask = {
            taskId: taskId_2
          };
          let m = f.relatedTask?.taskId ?? taskId_2;
          if (m && taskStore) await taskStore.updateTaskStatus(m, "input_required");
          return await this.request(i, c, f);
        },
        authInfo: t?.authInfo,
        requestId: e.id,
        requestInfo: t?.requestInfo,
        taskId: taskId_2,
        taskStore: taskStore,
        taskRequestedTtl: o?.ttl,
        closeSSEStream: t?.closeSSEStream,
        closeStandaloneSSEStream: t?.closeStandaloneSSEStream
      };
    Promise.resolve().then(() => {
      if (o) this.assertTaskHandlerCapability(e.method);
    }).then(() => r(e, p)).then(async result => {
      if (abortController.signal.aborted) return;
      let message_2 = {
        result: result,
        jsonrpc: "2.0",
        id: e.id
      };
      if (taskId_2 && this._taskMessageQueue) await this._enqueueTaskMessage(taskId_2, {
        type: "response",
        message: message_2,
        timestamp: Date.now()
      }, _transport?.sessionId);else await _transport?.send(message_2);
    }, async i => {
      if (abortController.signal.aborted) return;
      let message_3 = {
        jsonrpc: "2.0",
        id: e.id,
        error: {
          code: Number.isSafeInteger(i.code) ? i.code : Di.InternalError,
          message: i.message ?? "Internal error",
          ...(i.data !== void 0 && {
            data: i.data
          })
        }
      };
      if (taskId_2 && this._taskMessageQueue) await this._enqueueTaskMessage(taskId_2, {
        type: "error",
        message: message_3,
        timestamp: Date.now()
      }, _transport?.sessionId);else await _transport?.send(message_3);
    }).catch(i => this._onerror(Error(`Failed to send response: ${i}`))).finally(() => {
      if (this._requestHandlerAbortControllers.get(e.id) === abortController) this._requestHandlerAbortControllers.delete(e.id);
    });
  }
  _onprogress(e) {
    let {
        progressToken: progressToken,
        ...r
      } = e.params,
      a = Number(progressToken),
      n = this._progressHandlers.get(a);
    if (!n) {
      this._onerror(Error(`Received a progress notification for an unknown token: ${JSON.stringify(e)}`));
      return;
    }
    let s = this._responseHandlers.get(a),
      o = this._timeoutInfo.get(a);
    if (o && s && o.resetTimeoutOnProgress) try {
      this._resetTimeout(a);
    } catch (error) {
      this._responseHandlers.delete(a), this._progressHandlers.delete(a), this._cleanupTimeout(a), s(error);
      return;
    }
    n(r);
  }
  _onresponse(e) {
    let t = Number(e.id),
      r = this._requestResolvers.get(t);
    if (r) {
      if (this._requestResolvers.delete(t), koe(e)) r(e);else {
        let s = new gi(e.error.code, e.error.message, e.error.data);
        r(s);
      }
      return;
    }
    let a = this._responseHandlers.get(t);
    if (a === void 0) {
      this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(e)}`));
      return;
    }
    this._responseHandlers.delete(t), this._cleanupTimeout(t);
    let n = !1;
    if (koe(e) && e.result && typeof e.result === "object") {
      let result_2 = e.result;
      if (result_2.task && typeof result_2.task === "object") {
        let task = result_2.task;
        if (typeof task.taskId === "string") n = !0, this._taskProgressTokens.set(task.taskId, t);
      }
    }
    if (!n) this._progressHandlers.delete(t);
    if (koe(e)) a(e);else {
      let s = gi.fromError(e.error.code, e.error.message, e.error.data);
      a(s);
    }
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await this._transport?.close();
  }
  async *requestStream(e, t, r) {
    let {
      task: task_2
    } = r ?? {};
    if (!task_2) {
      try {
        yield {
          type: "result",
          result: await this.request(e, t, r)
        };
      } catch (s) {
        yield {
          type: "error",
          error: s instanceof gi ? s : new gi(Di.InternalError, String(s))
        };
      }
      return;
    }
    let taskId_3;
    try {
      let s = await this.request(e, Q_e, r);
      if (s.task) taskId_3 = s.task.taskId, yield {
        type: "taskCreated",
        task: s.task
      };else throw new gi(Di.InternalError, "Task creation did not return a task");
      while (!0) {
        let task_3 = await this.getTask({
          taskId: taskId_3
        }, r);
        if (yield {
          type: "taskStatus",
          task: task_3
        }, T(task_3.status)) {
          if (task_3.status === "completed") yield {
            type: "result",
            result: await this.getTaskResult({
              taskId: taskId_3
            }, t, r)
          };else if (task_3.status === "failed") yield {
            type: "error",
            error: new gi(Di.InternalError, `Task ${taskId_3} failed`)
          };else if (task_3.status === "cancelled") yield {
            type: "error",
            error: new gi(Di.InternalError, `Task ${taskId_3} was cancelled`)
          };
          return;
        }
        if (task_3.status === "input_required") {
          yield {
            type: "result",
            result: await this.getTaskResult({
              taskId: taskId_3
            }, t, r)
          };
          return;
        }
        let u = task_3.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1000;
        await new Promise(p => setTimeout(p, u)), r?.signal?.throwIfAborted();
      }
    } catch (s) {
      yield {
        type: "error",
        error: s instanceof gi ? s : new gi(Di.InternalError, String(s))
      };
    }
  }
  request(e, t, r) {
    let {
      relatedRequestId: relatedRequestId,
      resumptionToken: resumptionToken,
      onresumptiontoken: onresumptiontoken,
      task: task_4,
      relatedTask: relatedTask
    } = r ?? {};
    return new Promise((p, i) => {
      let c = g => {
        i(g);
      };
      if (!this._transport) {
        c(Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === !0) try {
        if (this.assertCapabilityForMethod(e.method), task_4) this.assertTaskCapability(e.method);
      } catch (error) {
        c(error);
        return;
      }
      r?.signal?.throwIfAborted();
      let d = this._requestMessageId++,
        message_4 = {
          ...e,
          jsonrpc: "2.0",
          id: d
        };
      if (r?.onprogress) this._progressHandlers.set(d, r.onprogress), message_4.params = {
        ...e.params,
        _meta: {
          ...(e.params?._meta || {}),
          progressToken: d
        }
      };
      if (task_4) message_4.params = {
        ...message_4.params,
        task: task_4
      };
      if (relatedTask) message_4.params = {
        ...message_4.params,
        _meta: {
          ...(message_4.params?._meta || {}),
          [J_e]: relatedTask
        }
      };
      let m = g => {
        this._responseHandlers.delete(d), this._progressHandlers.delete(d), this._cleanupTimeout(d), this._transport?.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: d,
            reason: String(g)
          }
        }, {
          relatedRequestId: relatedRequestId,
          resumptionToken: resumptionToken,
          onresumptiontoken: onresumptiontoken
        }).catch(A => this._onerror(Error(`Failed to send cancellation: ${A}`)));
        let _ = g instanceof gi ? g : new gi(Di.RequestTimeout, String(g));
        i(_);
      };
      this._responseHandlers.set(d, g => {
        if (r?.signal?.aborted) return;
        if (g instanceof Error) return i(g);
        try {
          let _ = A8(t, g.result);
          if (!_.success) i(_.error);else p(_.data);
        } catch (error) {
          i(error);
        }
      }), r?.signal?.addEventListener("abort", () => {
        m(r?.signal?.reason);
      });
      let timeout_2 = r?.timeout ?? ye,
        ce = () => m(gi.fromError(Di.RequestTimeout, "Request timed out", {
          timeout: timeout_2
        }));
      this._setupTimeout(d, timeout_2, r?.maxTotalTimeout, ce, r?.resetTimeoutOnProgress ?? !1);
      let F = relatedTask?.taskId;
      if (F) {
        let g = _ => {
          let A = this._responseHandlers.get(d);
          if (A) A(_);else this._onerror(Error(`Response handler missing for side-channeled request ${d}`));
        };
        this._requestResolvers.set(d, g), this._enqueueTaskMessage(F, {
          type: "request",
          message: message_4,
          timestamp: Date.now()
        }).catch(_ => {
          this._cleanupTimeout(d), i(_);
        });
      } else this._transport.send(message_4, {
        relatedRequestId: relatedRequestId,
        resumptionToken: resumptionToken,
        onresumptiontoken: onresumptiontoken
      }).catch(g => {
        this._cleanupTimeout(d), i(g);
      });
    });
  }
  async getTask(params, t) {
    return this.request({
      method: "tasks/get",
      params: params
    }, pAn, t);
  }
  async getTaskResult(params_2, t, r) {
    return this.request({
      method: "tasks/result",
      params: params_2
    }, t, r);
  }
  async listTasks(params_3, t) {
    return this.request({
      method: "tasks/list",
      params: params_3
    }, gAn, t);
  }
  async cancelTask(params_4, t) {
    return this.request({
      method: "tasks/cancel",
      params: params_4
    }, VJr, t);
  }
  async notification(e, t) {
    if (!this._transport) throw Error("Not connected");
    this.assertNotificationCapability(e.method);
    let r = t?.relatedTask?.taskId;
    if (r) {
      let message_5 = {
        ...e,
        jsonrpc: "2.0",
        params: {
          ...e.params,
          _meta: {
            ...(e.params?._meta || {}),
            [J_e]: t.relatedTask
          }
        }
      };
      await this._enqueueTaskMessage(r, {
        type: "notification",
        message: message_5,
        timestamp: Date.now()
      });
      return;
    }
    if ((this._options?.debouncedNotificationMethods ?? []).includes(e.method) && !e.params && !t?.relatedRequestId && !t?.relatedTask) {
      if (this._pendingDebouncedNotifications.has(e.method)) return;
      this._pendingDebouncedNotifications.add(e.method), Promise.resolve().then(() => {
        if (this._pendingDebouncedNotifications.delete(e.method), !this._transport) return;
        let o = {
          ...e,
          jsonrpc: "2.0"
        };
        if (t?.relatedTask) o = {
          ...o,
          params: {
            ...o.params,
            _meta: {
              ...(o.params?._meta || {}),
              [J_e]: t.relatedTask
            }
          }
        };
        this._transport?.send(o, t).catch(u => this._onerror(u));
      });
      return;
    }
    let s = {
      ...e,
      jsonrpc: "2.0"
    };
    if (t?.relatedTask) s = {
      ...s,
      params: {
        ...s.params,
        _meta: {
          ...(s.params?._meta || {}),
          [J_e]: t.relatedTask
        }
      }
    };
    await this._transport.send(s, t);
  }
  setRequestHandler(e, t) {
    let r = I(e);
    this.assertRequestHandlerCapability(r), this._requestHandlers.set(r, (a, n) => {
      let s = z(e, a);
      return Promise.resolve(t(s, n));
    });
  }
  removeRequestHandler(e) {
    this._requestHandlers.delete(e);
  }
  assertCanSetRequestHandler(e) {
    if (this._requestHandlers.has(e)) throw Error(`A request handler for ${e} already exists, which would be overridden`);
  }
  setNotificationHandler(e, t) {
    let r = I(e);
    this._notificationHandlers.set(r, a => {
      let n = z(e, a);
      return Promise.resolve(t(n));
    });
  }
  removeNotificationHandler(e) {
    this._notificationHandlers.delete(e);
  }
  _cleanupTaskProgressHandler(e) {
    let t = this._taskProgressTokens.get(e);
    if (t !== void 0) this._progressHandlers.delete(t), this._taskProgressTokens.delete(e);
  }
  async _enqueueTaskMessage(e, t, r) {
    if (!this._taskStore || !this._taskMessageQueue) throw Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
    let a = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(e, t, r, a);
  }
  async _clearTaskQueue(e, t) {
    if (this._taskMessageQueue) {
      let r = await this._taskMessageQueue.dequeueAll(e, t);
      for (let a of r) if (a.type === "request" && xY(a.message)) {
        let n = a.message.id,
          s = this._requestResolvers.get(n);
        if (s) s(new gi(Di.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(n);else this._onerror(Error(`Resolver missing for request ${n} during task ${e} cleanup`));
      }
    }
  }
  async _waitForTaskUpdate(e, t) {
    let r = this._options?.defaultTaskPollInterval ?? 1000;
    try {
      let a = await this._taskStore?.getTask(e);
      if (a?.pollInterval) r = a.pollInterval;
    } catch {}
    return new Promise((a, n) => {
      if (t.aborted) {
        n(new gi(Di.InvalidRequest, "Request cancelled"));
        return;
      }
      let s = setTimeout(a, r);
      t.addEventListener("abort", () => {
        clearTimeout(s), n(new gi(Di.InvalidRequest, "Request cancelled"));
      }, {
        once: !0
      });
    });
  }
  requestTaskStore(e, t) {
    let _taskStore = this._taskStore;
    if (!_taskStore) throw Error("No task store configured");
    return {
      createTask: async a => {
        if (!e) throw Error("No request provided");
        return await _taskStore.createTask(a, e.id, {
          method: e.method,
          params: e.params
        }, t);
      },
      getTask: async a => {
        let n = await _taskStore.getTask(a, t);
        if (!n) throw new gi(Di.InvalidParams, "Failed to retrieve task: Task not found");
        return n;
      },
      storeTaskResult: async (a, n, s) => {
        await _taskStore.storeTaskResult(a, n, s, t);
        let params_5 = await _taskStore.getTask(a, t);
        if (params_5) {
          let u = uYt.parse({
            method: "notifications/tasks/status",
            params: params_5
          });
          if (await this.notification(u), T(params_5.status)) this._cleanupTaskProgressHandler(a);
        }
      },
      getTaskResult: a => _taskStore.getTaskResult(a, t),
      updateTaskStatus: async (a, n, s) => {
        let o = await _taskStore.getTask(a, t);
        if (!o) throw new gi(Di.InvalidParams, `Task "${a}" not found - it may have been cleaned up`);
        if (T(o.status)) throw new gi(Di.InvalidParams, `Cannot update task "${a}" from terminal status "${o.status}" to "${n}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await _taskStore.updateTaskStatus(a, n, s, t);
        let params_6 = await _taskStore.getTask(a, t);
        if (params_6) {
          let p = uYt.parse({
            method: "notifications/tasks/status",
            params: params_6
          });
          if (await this.notification(p), T(params_6.status)) this._cleanupTaskProgressHandler(a);
        }
      },
      listTasks: a => _taskStore.listTasks(a, t)
    };
  }
}
function L(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function nAn(e, t) {
  let r = {
    ...e
  };
  for (let a in t) {
    let n = a,
      s = t[n];
    if (s === void 0) continue;
    let o = r[n];
    if (L(o) && L(s)) r[n] = {
      ...o,
      ...s
    };else r[n] = s;
  }
  return r;
}
var ie = ve(_Wn(), 1),
  ue = ve(oe(), 1);
function qe() {
  let e = new ie.default({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0
  });
  return ue.default(e), e;
}
class dYt {
  constructor(e) {
    this._ajv = e ?? qe();
  }
  getValidator(e) {
    let t = "$id" in e && typeof e.$id === "string" ? this._ajv.getSchema(e.$id) ?? this._ajv.compile(e) : this._ajv.compile(e);
    return data_2 => {
      if (t(data_2)) return {
        valid: !0,
        data: data_2,
        errorMessage: void 0
      };else return {
        valid: !1,
        data: void 0,
        errorMessage: this._ajv.errorsText(t.errors)
      };
    };
  }
}
function rAn(e, t, r) {
  if (!e) throw Error(`${r} does not support task creation (required for ${t})`);
  switch (t) {
    case "tools/call":
      if (!e.tools?.call) throw Error(`${r} does not support task creation for tools/call (required for ${t})`);
      break;
    default:
      break;
  }
}
function oAn(e, t, r) {
  if (!e) throw Error(`${r} does not support task creation (required for ${t})`);
  switch (t) {
    case "sampling/createMessage":
      if (!e.sampling?.createMessage) throw Error(`${r} does not support task creation for sampling/createMessage (required for ${t})`);
      break;
    case "elicitation/create":
      if (!e.elicitation?.create) throw Error(`${r} does not support task creation for elicitation/create (required for ${t})`);
      break;
    default:
      break;
  }
}
export { uKe, A8, ITt, lYt, nAn, dYt, rAn, oAn };