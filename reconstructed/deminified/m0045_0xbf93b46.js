// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var g,
  L8e = Object.freeze({
    status: "aborted"
  });
function Gn(value, t, r) {
  function value_2(o, def) {
    if (!o._zod) Object.defineProperty(o, "_zod", {
      value: {
        def: def,
        constr: constr,
        traits: new Set()
      },
      enumerable: !1
    });
    if (o._zod.traits.has(value)) return;
    o._zod.traits.add(value), t(o, def);
    let u = constr.prototype,
      p = Object.keys(u);
    for (let d = 0; d < p.length; d++) {
      let h = p[d];
      if (!(h in o)) o[h] = u[h].bind(o);
    }
  }
  let s = r?.Parent ?? Object;
  class c extends s {}
  Object.defineProperty(c, "name", {
    value: value
  });
  function constr(o) {
    var f;
    let u = r?.Parent ? new c() : this;
    value_2(u, o), (f = u._zod).deferred ?? (f.deferred = []);
    for (let p of u._zod.deferred) p();
    return u;
  }
  return Object.defineProperty(constr, "init", {
    value: value_2
  }), Object.defineProperty(constr, Symbol.hasInstance, {
    value: o => {
      if (r?.Parent && o instanceof r.Parent) return !0;
      return o?._zod?.traits?.has(value);
    }
  }), Object.defineProperty(constr, "name", {
    value: value
  }), constr;
}
var b = Symbol("zod_brand");
class CUe extends Error {
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
(g = globalThis).__zod_globalConfig ?? (g.__zod_globalConfig = {});
var __zod_globalConfig = globalThis.__zod_globalConfig;
function oj(e) {
  if (e) Object.assign(__zod_globalConfig, e);
  return __zod_globalConfig;
}
function bYn(e) {
  let t = Object.values(e).filter(item => typeof item === "number");
  return Object.entries(e).filter(([n, s]) => t.indexOf(+n) === -1).map(([n, s]) => s);
}
function dWr(e, t = "|") {
  return e.map(item => mWr(item)).join(t);
}
function Hgn(e, t) {
  if (typeof t === "bigint") return t.toString();
  return t;
}
function Fgn(e) {
  return {
    get value() {
      {
        let value_3 = e();
        return Object.defineProperty(this, "value", {
          value: value_3
        }), value_3;
      }
      throw Error("cached value already set");
    }
  };
}
function SYn(e) {
  return e === null || e === void 0;
}
function gBt(e) {
  let t = e.startsWith("^") ? 1 : 0,
    r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function KFo(e, t) {
  let r = e / t,
    n = Math.round(r),
    s = Number.EPSILON * Math.max(Math.abs(r), 1);
  if (Math.abs(r - n) < s) return 0;
  return r - n;
}
var y = Symbol("evaluating");
function Bg(e, t, r) {
  let n = void 0;
  Object.defineProperty(e, t, {
    get() {
      if (n === y) return;
      if (n === void 0) n = y, n = r();
      return n;
    },
    set(value_4) {
      Object.defineProperty(e, t, {
        value: value_4
      });
    },
    configurable: !0
  });
}
function a(e, t, value_5) {
  Object.defineProperty(e, t, {
    value: value_5,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function N8e(...e) {
  let t = {};
  for (let r of e) {
    let n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function uWr(e) {
  return JSON.stringify(e);
}
function YFo(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var pWr = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function hBt(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var XFo = Fgn(() => {
  if (__zod_globalConfig.jitless) return !1;
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
  try {
    return new Function(""), !0;
  } catch (error) {
    return !1;
  }
});
function Aft(e) {
  if (hBt(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  if (typeof t !== "function") return !0;
  let r = t.prototype;
  if (hBt(r) === !1) return !1;
  if (Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1) return !1;
  return !0;
}
function fWr(e) {
  if (Aft(e)) return {
    ...e
  };
  if (Array.isArray(e)) return [...e];
  if (e instanceof Map) return new Map(e);
  if (e instanceof Set) return new Set(e);
  return e;
}
var JFo = new Set(["string", "number", "symbol"]);
function H8e(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function i_e(e, t, r) {
  let n = new e._zod.constr(t ?? e._zod.def);
  if (!t || r?.parent) n._zod.parent = e;
  return n;
}
function Sa(e) {
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
function mWr(e) {
  if (typeof e === "bigint") return e.toString() + "n";
  if (typeof e === "string") return `"${e}"`;
  return `${e}`;
}
function QFo(e) {
  return Object.keys(e).filter(item => e[item]._zod.optin === "optional" && e[item]._zod.optout === "optional");
}
var ZFo = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function lVo(e, t) {
  let def_2 = e._zod.def,
    checks = def_2.checks;
  if (checks && checks.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
  let c = N8e(e._zod.def, {
    get shape() {
      let i = {};
      for (let o in t) {
        if (!(o in def_2.shape)) throw Error(`Unrecognized key: "${o}"`);
        if (!t[o]) continue;
        i[o] = def_2.shape[o];
      }
      return a(this, "shape", i), i;
    },
    checks: []
  });
  return i_e(e, c);
}
function cVo(e, t) {
  let def_3 = e._zod.def,
    checks_2 = def_3.checks;
  if (checks_2 && checks_2.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
  let c = N8e(e._zod.def, {
    get shape() {
      let i = {
        ...e._zod.def.shape
      };
      for (let o in t) {
        if (!(o in def_3.shape)) throw Error(`Unrecognized key: "${o}"`);
        if (!t[o]) continue;
        delete i[o];
      }
      return a(this, "shape", i), i;
    },
    checks: []
  });
  return i_e(e, c);
}
function dVo(e, t) {
  if (!Aft(t)) throw Error("Invalid input to extend: expected a plain object");
  let checks_3 = e._zod.def.checks;
  if (checks_3 && checks_3.length > 0) {
    let shape = e._zod.def.shape;
    for (let i in t) if (Object.getOwnPropertyDescriptor(shape, i) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  let s = N8e(e._zod.def, {
    get shape() {
      let c = {
        ...e._zod.def.shape,
        ...t
      };
      return a(this, "shape", c), c;
    }
  });
  return i_e(e, s);
}
function uVo(e, t) {
  if (!Aft(t)) throw Error("Invalid input to safeExtend: expected a plain object");
  let r = N8e(e._zod.def, {
    get shape() {
      let n = {
        ...e._zod.def.shape,
        ...t
      };
      return a(this, "shape", n), n;
    }
  });
  return i_e(e, r);
}
function pVo(e, t) {
  if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  let r = N8e(e._zod.def, {
    get shape() {
      let n = {
        ...e._zod.def.shape,
        ...t._zod.def.shape
      };
      return a(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return i_e(e, r);
}
function fVo(e, t, r) {
  let checks_4 = t._zod.def.checks;
  if (checks_4 && checks_4.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
  let i = N8e(t._zod.def, {
    get shape() {
      let shape_2 = t._zod.def.shape,
        f = {
          ...shape_2
        };
      if (r) for (let u in r) {
        if (!(u in shape_2)) throw Error(`Unrecognized key: "${u}"`);
        if (!r[u]) continue;
        f[u] = e ? new e({
          type: "optional",
          innerType: shape_2[u]
        }) : shape_2[u];
      } else for (let u in shape_2) f[u] = e ? new e({
        type: "optional",
        innerType: shape_2[u]
      }) : shape_2[u];
      return a(this, "shape", f), f;
    },
    checks: []
  });
  return i_e(t, i);
}
function mVo(e, t, r) {
  let n = N8e(t._zod.def, {
    get shape() {
      let shape_3 = t._zod.def.shape,
        c = {
          ...shape_3
        };
      if (r) for (let i in r) {
        if (!(i in c)) throw Error(`Unrecognized key: "${i}"`);
        if (!r[i]) continue;
        c[i] = new e({
          type: "nonoptional",
          innerType: shape_3[i]
        });
      } else for (let i in shape_3) c[i] = new e({
        type: "nonoptional",
        innerType: shape_3[i]
      });
      return a(this, "shape", c), c;
    }
  });
  return i_e(t, n);
}
function xft(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue !== !0) return !0;
  return !1;
}
function e$o(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue === !1) return !0;
  return !1;
}
function GAe(e, t) {
  return t.map(item => {
    var n;
    return (n = item).path ?? (n.path = []), item.path.unshift(e), item;
  });
}
function l(e) {
  return typeof e === "string" ? e : e?.message;
}
function a_e(e, t, r) {
  let n = e.message ? e.message : l(e.inst?._zod.def?.error?.(e)) ?? l(t?.error?.(e)) ?? l(r.customError?.(e)) ?? l(r.localeError?.(e)) ?? "Invalid input",
    {
      inst: inst,
      continue: c,
      input: input,
      ...o
    } = e;
  if (o.path ?? (o.path = []), o.message = n, t?.reportInput) o.input = input;
  return o;
}
function wYn(e) {
  if (Array.isArray(e)) return "array";
  if (typeof e === "string") return "string";
  return "unknown";
}
function t$o(e) {
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
function Pft(...e) {
  let [message, input_2, inst_2] = e;
  if (typeof message === "string") return {
    message: message,
    code: "custom",
    input: input_2,
    inst: inst_2
  };
  return {
    ...message
  };
}
export { L8e, Gn, CUe, ZodEncodeError as Ngn, __zod_globalConfig as mBt, oj, bYn, dWr, Hgn, Fgn, SYn, gBt, KFo, Bg, N8e, uWr, YFo, pWr, hBt, XFo, Aft, fWr, JFo, H8e, i_e, Sa, mWr, QFo, ZFo, lVo, cVo, dVo, uVo, pVo, fVo, mVo, xft, e$o, GAe, a_e, wYn, t$o, Pft };