// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
function $9n(e) {
  let t = Object.values(e).filter(item => typeof item === "number");
  return Object.entries(e).filter(([n, o]) => t.indexOf(+n) === -1).map(([n, o]) => o);
}
function KBo(e, t = "|") {
  return e.map(item => JBo(item)).join(t);
}
function U9n(e, t) {
  if (typeof t === "bigint") return t.toString();
  return t;
}
class A {
  constructor(e) {
    this._getter = e, this._value = void 0;
  }
  get value() {
    let _getter = this._getter;
    if (_getter !== void 0) this._value = _getter(), this._getter = void 0;
    return this._value;
  }
}
function B9n(e) {
  return new A(e);
}
function ZKs(e) {
  return e === null || e === void 0;
}
function hfn(e) {
  let t = e.startsWith("^") ? 1 : 0,
    r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function e4s(e, t) {
  let r = e / t,
    n = Math.round(r),
    o = 4 * Number.EPSILON * Math.max(Math.abs(r), 1);
  if (Math.abs(r - n) < o) return 0;
  return r - n;
}
var z = Symbol("evaluating");
function yfn(e, t, r) {
  let n = void 0;
  Object.defineProperty(e, t, {
    get() {
      if (n === z) return;
      if (n === void 0) n = z, n = r();
      return n;
    },
    set(value) {
      Object.defineProperty(e, t, {
        value: value
      });
    },
    configurable: !0
  });
}
function ade(e, t, value_2) {
  Object.defineProperty(e, t, {
    value: value_2,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function j9n(e) {
  let t = Object.getOwnPropertyDescriptor(e, "shape");
  return t?.get ? t.get.raw : t?.value;
}
function p(e) {
  return j9n(e._zod.def) ?? e._zod.def.shape;
}
function v(e, t, r) {
  Object.defineProperty(e, t, {
    get() {
      let n = r();
      return ade(this, t, n), n;
    },
    enumerable: !0,
    configurable: !0
  });
}
function k(e, t, r) {
  if (t in e) ade(e, t, r);else e[t] = r;
}
function h(e, t, r, n) {
  let o = p(t);
  for (let i of r) {
    let u = Object.getOwnPropertyDescriptor(o, i);
    if (!u.enumerable) continue;
    if (u.get) v(e, i, () => {
      let c = t._zod.def.shape[i];
      return n ? n(c, i) : c;
    });else k(e, i, n ? n(u.value, i) : u.value);
  }
}
function I(e, t) {
  for (let r of Reflect.ownKeys(t)) {
    let n = Object.getOwnPropertyDescriptor(t, r);
    if (!n.enumerable) continue;
    if (n.get) v(e, r, () => t[r]);else k(e, r, n.value);
  }
}
function Ahe(...e) {
  let t = {};
  for (let r of e) {
    let n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function t4s(e) {
  return JSON.stringify(e);
}
function n4s(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var YBo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function _fn(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var r4s = B9n(() => {
  if (__zod_globalConfig.jitless) return !1;
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
  try {
    return new Function(""), !0;
  } catch (error) {
    return !1;
  }
});
function v1t(e) {
  if (_fn(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  if (typeof t !== "function") return !0;
  let r = t.prototype;
  if (_fn(r) === !1) return !1;
  if (Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1) return !1;
  return !0;
}
function XBo(e) {
  if (v1t(e)) return {
    ...e
  };
  if (Array.isArray(e)) return [...e];
  if (e instanceof Map) return new Map(e);
  if (e instanceof Set) return new Set(e);
  return e;
}
var o4s = new Set(["string", "number", "symbol"]);
function rbt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function $ze(e, t, r) {
  let n = new e._zod.constr(t ?? e._zod.def);
  if (!t || r?.parent) n._zod.parent = e;
  return n;
}
function Vl(e) {
  let t = e;
  if (!t) return {};
  if (typeof t === "string") return {
    error: () => t
  };
  if (t?.message !== void 0) {
    if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  if (delete t.message, typeof t.error === "string") return {
    ...t,
    error: () => t.error
  };
  return t;
}
function JBo(e) {
  if (typeof e === "bigint") return e.toString() + "n";
  if (typeof e === "string") return `"${e}"`;
  return `${e}`;
}
function s4s(e) {
  return Object.keys(e).filter(item => e[item]._zod.optin !== void 0 && e[item]._zod.optout === "optional");
}
var AUr = (() => ({
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
  }))(),
  QBo = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")]
  };
function z7s(e, t) {
  let def = e._zod.def,
    checks = def.checks;
  if (checks && checks.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
  let shape = {};
  return h(shape, e, m(e, t)), $ze(e, Ahe(def, {
    shape: shape,
    checks: []
  }));
}
function m(e, t) {
  let r = p(e),
    n = [];
  for (let o of Reflect.ownKeys(t)) {
    if (!Object.getOwnPropertyDescriptor(r, o)?.enumerable) throw Error(`Unrecognized key: "${String(o)}"`);
    if (t[o]) n.push(o);
  }
  return n;
}
function G7s(e, t) {
  let def_2 = e._zod.def,
    checks_2 = def_2.checks;
  if (checks_2 && checks_2.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
  let i = new Set(m(e, t)),
    shape_2 = {};
  return h(shape_2, e, Reflect.ownKeys(p(e)).filter(item => !i.has(item))), $ze(e, Ahe(def_2, {
    shape: shape_2,
    checks: []
  }));
}
function V7s(e, t) {
  if (!v1t(t)) throw Error("Invalid input to extend: expected a plain object");
  let checks_3 = e._zod.def.checks;
  if (checks_3 && checks_3.length > 0) {
    let o = p(e);
    for (let i of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(o, i) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return $ze(e, Ahe(e._zod.def, {
    shape: T(e, t)
  }));
}
function T(e, t) {
  let r = {};
  return h(r, e, Reflect.ownKeys(p(e))), I(r, t), r;
}
function q7s(e, t) {
  if (!v1t(t)) throw Error("Invalid input to safeExtend: expected a plain object");
  return $ze(e, Ahe(e._zod.def, {
    shape: T(e, t)
  }));
}
function K7s(e, t) {
  if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  let shape_3 = {};
  h(shape_3, e, Reflect.ownKeys(p(e))), h(shape_3, t, Reflect.ownKeys(p(t)));
  let n = Ahe(e._zod.def, {
    shape: shape_3,
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return $ze(e, n);
}
function i4s(e, t, r, n = "partial") {
  let checks_4 = t._zod.def.checks;
  if (checks_4 && checks_4.length > 0) throw Error(`.${n}() cannot be used on object schemas containing refinements`);
  let c = r ? new Set(m(t, r)) : void 0,
    shape_4 = {};
  return h(shape_4, t, Reflect.ownKeys(p(t)), e && ((innerType, y) => c && !c.has(y) ? innerType : new e({
    type: "optional",
    innerType: innerType
  }))), $ze(t, Ahe(t._zod.def, {
    shape: shape_4,
    checks: []
  }));
}
function Y7s(e, t, r) {
  let n = r ? new Set(m(t, r)) : void 0,
    shape_5 = {};
  return h(shape_5, t, Reflect.ownKeys(p(t)), (innerType_2, u) => n && !n.has(u) ? innerType_2 : new e({
    type: "nonoptional",
    innerType: innerType_2
  })), $ze(t, Ahe(t._zod.def, {
    shape: shape_5
  }));
}
function gTe(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue !== !0) return !0;
  return !1;
}
function a4s(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue === !1) return !0;
  return !1;
}
function B0e(e, t) {
  return t.map(item => {
    var n;
    return (n = item).path ?? (n.path = []), item.path.unshift(e), item;
  });
}
function w(e) {
  return typeof e === "string" ? e : e?.message;
}
function ZBo(e, t, r) {
  var n;
  for (let o = t; o < e.length; o++) (n = e[o]).schema ?? (n.schema = r);
}
function Uze(e, t, r) {
  var n;
  let o = e.inst?._zod?.traits;
  if (o?.has("$ZodType")) if (o.has("$ZodCheck")) (n = e).schema ?? (n.schema = e.inst);else e.schema = e.inst;
  let i = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
    u = e.message ? e.message : w(e.inst?._zod.def?.error?.(e)) ?? w(i?.(e)) ?? w(t?.error?.(e)) ?? w(r.customError?.(e)) ?? w(r.localeError?.(e)) ?? "Invalid input",
    c = {};
  for (let f of Object.keys(e)) {
    if (f === "inst" || f === "schema" || f === "continue" || f === "input" || f === "__proto__") continue;
    c[f] = e[f];
  }
  if (c.path ?? (c.path = []), c.message = u, t?.reportInput) c.input = e.input;
  return c;
}
var M = /[\uD800-\uDBFF]/;
function xUr(e) {
  let t = e.length;
  if (!M.test(e)) return t;
  let r = t;
  for (let n = 0; n < t - 1; n++) if ((e.charCodeAt(n) & 64512) === 55296 && (e.charCodeAt(n + 1) & 64512) === 56320) r--, n++;
  return r;
}
function PUr(e) {
  if (Array.isArray(e)) return "array";
  if (typeof e === "string") return "string";
  return "unknown";
}
function l4s(e) {
  let t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object":
      {
        if (e === null) return "null";
        if (Array.isArray(e)) return "array";
        let r = e;
        if (r && Object.getPrototypeOf(r) !== Object.prototype && "constructor" in r && r.constructor) return r.constructor.name;
      }
  }
  return t;
}
function k1t(...e) {
  let [message, input, inst] = e;
  if (typeof message === "string") return {
    message: message,
    code: "custom",
    input: input,
    inst: inst
  };
  return {
    ...message
  };
}
function C(e, t) {
  for (let r in t) {
    let n = Object.getOwnPropertyDescriptor(t, r);
    if (n.get) Object.defineProperty(e, r, {
      ...n,
      enumerable: !1
    });else S(e, r, n.value);
  }
  for (let r of Object.getOwnPropertySymbols(t)) S(e, r, t[r]);
}
function B7e(e, t, value_3, enumerable = !0) {
  return Object.defineProperty(e, t, {
    configurable: !0,
    writable: !0,
    enumerable: enumerable,
    value: value_3
  }), value_3;
}
function e1o(e, t, r) {
  return B7e(e, t, r, !1);
}
function d4s(e, t) {
  for (let r in e) {
    let n = e[r];
    Object.defineProperty(t, r, {
      configurable: !0,
      enumerable: !0,
      get() {
        return B7e(this, r, n(this));
      },
      set(o) {
        B7e(this, r, o);
      }
    });
  }
  return t;
}
function S(e, t, r) {
  Object.defineProperty(e, t, {
    configurable: !0,
    get() {
      return this == null ? r : B7e(this, t, r.bind(this));
    },
    set(n) {
      B7e(this, t, n);
    }
  });
}
function D(e, t) {
  let r = Object.getPrototypeOf(e);
  return t in r ? void 0 : r;
}
var P,
  d = !1,
  K = {
    configurable: !0,
    get() {
      d = !0;
      return;
    }
  };
function zS(e, t, r) {
  let n = Object.getPrototypeOf(e._zod);
  if (t in n && P !== e._zod) {
    P = void 0;
    return;
  }
  P = e._zod, Object.defineProperty(n, t, {
    configurable: !0,
    get() {
      Object.defineProperty(this, t, K);
      let o = d;
      d = !1;
      try {
        let value_4 = r(this);
        if (d) delete this[t];else Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          value: value_4
        });
        return d = d || o, value_4;
      } catch (error) {
        throw delete this[t], d = d || o, error;
      }
    },
    set(value_5) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: value_5
      });
    }
  });
}
function X7s(e, t, r, enumerable_2) {
  let o = D(e, t);
  if (!o) return;
  Object.defineProperty(o, t, {
    configurable: !0,
    get() {
      let i = {
        configurable: !0,
        writable: !0,
        enumerable: enumerable_2,
        value: void 0
      };
      return Object.defineProperty(this, t, i), i.value = r(this), Object.defineProperty(this, t, i), i.value;
    },
    set(value_6) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        enumerable: enumerable_2,
        value: value_6
      });
    }
  });
}
var U = "~constantCatch";
function c4s(e) {
  let t = () => e;
  return t[U] = !0, t;
}
var N,
  D2 = Object.freeze({
    status: "aborted"
  }),
  E = {
    value: void 0,
    enumerable: !1
  },
  R = "captureStackTrace" in Error ? Error : null;
function L(e) {
  let t = R;
  if (t) {
    let stackTraceLimit = t.stackTraceLimit;
    if (typeof stackTraceLimit === "number") {
      try {
        t.stackTraceLimit = 0;
      } catch {
        return R = null, new e();
      }
      try {
        return new e();
      } finally {
        t.stackTraceLimit = stackTraceLimit;
      }
    }
  }
  return new e();
}
function gr(value_7, t, r, n) {
  let o = {};
  function i(s) {
    this.def = s, this.constr = g, this.traits = new Set();
  }
  i.prototype = o;
  let u = r,
    c = u && new WeakSet();
  function value_8(s, l) {
    if (!s._zod) {
      E.value = new i(l);
      try {
        Object.defineProperty(s, "_zod", E);
      } finally {
        E.value = void 0;
      }
    }
    if (s._zod.traits.has(value_7)) return;
    if (s._zod.traits.add(value_7), t(s, l), c) {
      let a = Object.getPrototypeOf(s),
        O = s._zod.constr.prototype,
        x = a;
      while (x && x !== O) x = Object.getPrototypeOf(x);
      let j = x ?? a;
      if (!c.has(j)) c.add(j), C(j, u);
    }
    let b = g.prototype;
    for (let a in b) {
      if (!Object.prototype.hasOwnProperty.call(b, a)) continue;
      if (!(a in s)) s[a] = b[a].bind(s);
    }
  }
  let _ = n?.Parent ?? Object;
  class y extends _ {}
  Object.defineProperty(y, "name", {
    value: value_7
  });
  function g(s) {
    let l = n?.Parent ? L(y) : this;
    value_8(l, s);
    let deferred = l._zod.deferred;
    if (deferred) {
      for (let O of deferred) O();
      l._zod.deferred = void 0;
    }
    let a = globalThis.__zod_globalConfig?.postProcessor;
    if (a) a(l);
    return l;
  }
  return Object.defineProperty(g, "init", {
    value: value_8
  }), Object.defineProperty(g, Symbol.hasInstance, {
    value: s => {
      if (n?.Parent && s instanceof n.Parent) return !0;
      return s?._zod?.traits?.has(value_7);
    }
  }), Object.defineProperty(g, "name", {
    value: value_7
  }), g;
}
class Bze extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class ZodEncodeError extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`);
    this.name = "ZodEncodeError";
  }
}
(N = globalThis).__zod_globalConfig ?? (N.__zod_globalConfig = {});
var __zod_globalConfig = globalThis.__zod_globalConfig;
function ZJ(e) {
  if (e) Object.assign(__zod_globalConfig, e);
  return __zod_globalConfig;
}
export { $9n, KBo, U9n, B9n, ZKs, hfn, e4s, yfn, ade, j9n, Ahe, t4s, n4s, YBo, _fn, r4s, v1t, XBo, o4s, rbt, $ze, Vl, JBo, s4s, AUr, QBo, z7s, G7s, V7s, q7s, K7s, i4s, Y7s, gTe, a4s, B0e, ZBo, Uze, xUr, PUr, l4s, k1t, B7e, e1o, d4s, zS, X7s, c4s, D2, gr, Bze, ZodEncodeError as W9n, __zod_globalConfig as QJ, ZJ };