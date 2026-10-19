// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { $9n, KBo, U9n, B9n, ZKs, hfn, e4s, yfn, ade, j9n, Ahe, t4s, n4s, YBo, _fn, r4s, v1t, XBo, o4s, rbt, $ze, Vl, JBo, s4s, AUr, QBo, z7s, G7s, V7s, q7s, K7s, i4s, Y7s, gTe, a4s, B0e, ZBo, Uze, xUr, PUr, l4s, k1t, B7e, e1o, d4s, zS, X7s, c4s, gr, Bze, W9n, QJ, ZJ } from "B:/~BUN/root/chunk-axjnbnmy.js";
function ns() {
  let _zod = this._zod;
  return _zod.message ?? (_zod.message = JSON.stringify(_zod.def, U9n, 2)), _zod.message;
}
function is(e) {
  this._zod.message = e;
}
var ss = {
    get: ns,
    set: is,
    enumerable: !0,
    configurable: !0
  },
  Ie = {
    value: void 0,
    enumerable: !1
  },
  weakSet = new WeakSet([Object.prototype, Error.prototype]),
  Wt = (e, t) => {
    e.name = "$ZodError", Ie.value = t, Object.defineProperty(e, "issues", Ie), Ie.value = void 0, Object.defineProperty(e, "message", ss);
    let r = Object.getPrototypeOf(e);
    if (!weakSet.has(r)) weakSet.add(r), Object.defineProperty(r, "toString", {
      configurable: !0,
      enumerable: !1,
      get() {
        let value = () => this.message;
        return Object.defineProperty(this, "toString", {
          value: value,
          configurable: !0,
          writable: !0
        }), value;
      },
      set(value_2) {
        Object.defineProperty(this, "toString", {
          value: value_2,
          configurable: !0,
          writable: !0
        });
      }
    });
  },
  Gt = gr("$ZodError", Wt),
  qt = gr("$ZodError", Wt, void 0, {
    Parent: Error
  });
function cs(e, t, r) {
  if (!Object.prototype.hasOwnProperty.call(e, t)) if (t === "__proto__") Object.defineProperty(e, t, {
    value: r(),
    writable: !0,
    enumerable: !0,
    configurable: !0
  });else e[t] = r();
  return e[t];
}
function Yt(e, t = r => r.message) {
  let fieldErrors = {},
    formErrors = [];
  for (let i of e.issues) if (i.path.length > 0) cs(fieldErrors, i.path[0], () => []).push(t(i));else formErrors.push(t(i));
  return {
    formErrors: formErrors,
    fieldErrors: fieldErrors
  };
}
function Xt(e, t = r => r.message) {
  let r = {
      _errors: []
    },
    n = (i, s = []) => {
      for (let c of i.issues) if (c.code === "invalid_union" && c.errors.length) c.errors.map(a => n({
        issues: a
      }, [...s, ...c.path]));else if (c.code === "invalid_key") n({
        issues: c.issues
      }, [...s, ...c.path]);else if (c.code === "invalid_element") n({
        issues: c.issues
      }, [...s, ...c.path]);else {
        let a = [...s, ...c.path];
        if (a.length === 0) r._errors.push(t(c));else {
          let l = r,
            p = 0;
          while (p < a.length) {
            let f = a[p],
              d = p === a.length - 1;
            if (f === "_errors") {
              if (d) l._errors.push(t(c));
              p++;
              continue;
            }
            if (!Object.prototype.hasOwnProperty.call(l, f)) Object.defineProperty(l, f, {
              value: {
                _errors: []
              },
              enumerable: !0,
              writable: !0,
              configurable: !0
            });
            let _ = l[f];
            if (d) _._errors.push(t(c));
            l = _, p++;
          }
        }
      }
    };
  return n(e), r;
}
function se(e, t) {
  return {
    callee: t?.callee ?? e,
    Err: t?.Err
  };
}
var ce = e => {
  let t = (r, value_3, i, s) => {
    let c = i ? {
        ...i,
        async: !1
      } : {
        async: !1
      },
      a = r._zod.run({
        value: value_3,
        issues: []
      }, c);
    if (a instanceof Promise) throw new Bze();
    if (a.issues.length) {
      let l = new (s?.Err ?? e)(a.issues.map(item => Uze(item, c, ZJ())));
      throw YBo(l, s?.callee ?? t), l;
    }
    return a.value;
  };
  return t;
};
var ue = e => {
  let t = async (r, value_4, i, s) => {
    let c = i ? {
        ...i,
        async: !0
      } : {
        async: !0
      },
      a = r._zod.run({
        value: value_4,
        issues: []
      }, c);
    if (a instanceof Promise) a = await a;
    if (a.issues.length) {
      let l = new (s?.Err ?? e)(a.issues.map(item => Uze(item, c, ZJ())));
      throw YBo(l, s?.callee ?? t), l;
    }
    return a.value;
  };
  return t;
};
var B = e => (t, value_5, n) => {
    let i = n ? {
        ...n,
        async: !1
      } : {
        async: !1
      },
      s = t._zod.run({
        value: value_5,
        issues: []
      }, i);
    if (s instanceof Promise) throw new Bze();
    return s.issues.length ? Qt(e, s.issues, i) : {
      success: !0,
      data: s.value
    };
  },
  WBo = B(qt);
function Qt(e, t, r) {
  let n;
  return {
    success: !1,
    get error() {
      if (!n) n = new e(t.map(item => Uze(item, r, ZJ()))), t = void 0, r = void 0;
      return n;
    },
    set error(i) {
      n = i, t = void 0, r = void 0;
    }
  };
}
var ae = e => async (t, value_6, n) => {
  let i = n ? {
      ...n,
      async: !0
    } : {
      async: !0
    },
    s = t._zod.run({
      value: value_6,
      issues: []
    }, i);
  if (s instanceof Promise) s = await s;
  return s.issues.length ? Qt(e, s.issues, i) : {
    success: !0,
    data: s.value
  };
};
var as = Symbol.for("zod.compile.invalid"),
  ls = Symbol.for("zod.compile.fallback"),
  Oe = (e, t, r) => {
    let validator = e._zod.bag.validator;
    if (validator !== void 0) {
      if (validator(t) !== as) return !0;
      if (validator.definite === !0 && r === void 0) return !1;
    }
    return ps(e, t, r);
  };
function ps(e, value_7, r) {
  let n = r ? {
      ...r,
      async: !1,
      abortEarly: !0
    } : {
      async: !1,
      abortEarly: !0
    },
    fallbackRun = e._zod.bag.fallbackRun,
    s;
  if (fallbackRun) n[ls] = !0, s = fallbackRun({
    value: value_7,
    issues: []
  }, n);else s = e._zod.run({
    value: value_7,
    issues: []
  }, n);
  if (s instanceof Promise) throw new Bze();
  return s.issues.length === 0;
}
var Ae = async (e, value_8, r) => {
    let n = r ? {
        ...r,
        async: !0,
        abortEarly: !0
      } : {
        async: !0,
        abortEarly: !0
      },
      i = e._zod.run({
        value: value_8,
        issues: []
      }, n);
    if (i instanceof Promise) i = await i;
    return i.issues.length === 0;
  },
  er = e => {
    let t = ce(e),
      r = (n, i, s, c) => {
        let a = s ? {
          ...s,
          direction: "backward"
        } : {
          direction: "backward"
        };
        return t(n, i, a, se(r, c));
      };
    return r;
  };
var tr = e => {
  let t = ce(e),
    r = (n, i, s, c) => t(n, i, s, se(r, c));
  return r;
};
var rr = e => {
  let t = ue(e),
    r = async (n, i, s, c) => {
      let a = s ? {
        ...s,
        direction: "backward"
      } : {
        direction: "backward"
      };
      return await t(n, i, a, se(r, c));
    };
  return r;
};
var or = e => {
  let t = ue(e),
    r = async (n, i, s, c) => await t(n, i, s, se(r, c));
  return r;
};
var nr = e => (t, r, n) => {
  let i = n ? {
    ...n,
    direction: "backward"
  } : {
    direction: "backward"
  };
  return B(e)(t, r, i);
};
var ir = e => (t, r, n) => B(e)(t, r, n);
var sr = e => async (t, r, n) => {
  let i = n ? {
    ...n,
    direction: "backward"
  } : {
    direction: "backward"
  };
  return ae(e)(t, r, i);
};
var cr = e => async (t, r, n) => ae(e)(t, r, n);
var ur = /^[cC][0-9a-z]{6,}$/,
  ar = /^[0-9a-z]+$/,
  lr = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
  pr = /^[0-9a-vA-V]{20}$/,
  fr = /^[A-Za-z0-9]{27}$/,
  dr = /^[a-zA-Z0-9_-]{21}$/;
function mr(e) {
  return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var hr = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var _r = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  Te = e => {
    if (!e) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
  };
var xr = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var fs = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function vr() {
  return new RegExp(fs, "u");
}
var yr = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  $r = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var zr = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  br = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  kr = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  Zr = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
var wr = /^https?$/,
  Pr = /^\+[1-9]\d{6,14}$/;
var Sr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function ds(e) {
  return new RegExp(`^${e}$`);
}
var Ir = ds(Sr);
function Ee(e) {
  return typeof e.precision === "number" ? e.precision === -1 ? "(?:[01]\\d|2[0-3]):[0-5]\\d" : e.precision === 0 ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:\\.\\d+)?" : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function Or(e) {
  return new RegExp(`^${Ee(e)}$`);
}
function Ar(e) {
  let t = ["Z"];
  if (e.offset) t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  let r = `${Ee({
      precision: e.precision,
      seconds: !0
    })}(?:${t.join("|")})`,
    n = e.local ? `${r}|${Ee({
      precision: e.precision
    })}` : r;
  return new RegExp(`^${Sr}T(?:${n})$`);
}
var Er = /^[\s\S]{0,}$/;
var Ne = /^-?\d+$/,
  V = /^-?\d+(?:\.\d+)?$/,
  Tr = /^(?:true|false)$/i,
  Nr = /^null$/i;
var Cr = /^undefined$/i;
var Rr = /^[^A-Z]*$/,
  Dr = /^[^a-z]*$/;
var MW = gr("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
});
var Ce = e => {
    let t = e.value;
    return !ZKs(t) && t.length !== void 0;
  },
  le = {
    number: "number",
    bigint: "bigint",
    object: "date"
  },
  Re = gr("$ZodCheckLessThan", (inst, t) => {
    MW.init(inst, t);
    let r = le[typeof t.value];
    inst._zod.check = n => {
      if (t.inclusive ? n.value <= t.value : n.value < t.value) return;
      n.issues.push({
        origin: le[typeof n.value] ?? r,
        code: "too_big",
        maximum: typeof t.value === "object" ? t.value.getTime() : t.value,
        input: n.value,
        inclusive: t.inclusive,
        inst: inst,
        continue: !t.abort
      });
    };
  }),
  je = gr("$ZodCheckGreaterThan", (inst_2, t) => {
    MW.init(inst_2, t);
    let r = le[typeof t.value];
    inst_2._zod.check = n => {
      if (t.inclusive ? n.value >= t.value : n.value > t.value) return;
      n.issues.push({
        origin: le[typeof n.value] ?? r,
        code: "too_small",
        minimum: typeof t.value === "object" ? t.value.getTime() : t.value,
        input: n.value,
        inclusive: t.inclusive,
        inst: inst_2,
        continue: !t.abort
      });
    };
  }),
  jr = gr("$ZodCheckMultipleOf", (inst_3, t) => {
    MW.init(inst_3, t), inst_3._zod.check = r => {
      if (typeof r.value !== typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
      if (typeof r.value === "bigint" ? t.value !== BigInt(0) && r.value % t.value === BigInt(0) : e4s(r.value, t.value) === 0) return;
      r.issues.push({
        origin: typeof r.value,
        code: "not_multiple_of",
        divisor: t.value,
        input: r.value,
        inst: inst_3,
        continue: !t.abort
      });
    };
  }),
  Lr = gr("$ZodCheckNumberFormat", (inst_4, t) => {
    MW.init(inst_4, t), t.format = t.format || "float64";
    let r = t.format?.includes("int"),
      n = r ? "int" : "number",
      [minimum, maximum] = AUr[t.format];
    inst_4._zod.check = c => {
      let input = c.value;
      if (r) {
        if (!Number.isInteger(input)) {
          c.issues.push({
            expected: n,
            format: t.format,
            code: "invalid_type",
            continue: !1,
            input: input,
            inst: inst_4
          });
          return;
        }
        if (!Number.isSafeInteger(input)) {
          if (input > 0) c.issues.push({
            input: input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: inst_4,
            origin: n,
            inclusive: !0,
            continue: !t.abort
          });else c.issues.push({
            input: input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: inst_4,
            origin: n,
            inclusive: !0,
            continue: !t.abort
          });
          return;
        }
      }
      if (input < minimum) c.issues.push({
        origin: "number",
        input: input,
        code: "too_small",
        minimum: minimum,
        inclusive: !0,
        inst: inst_4,
        continue: !t.abort
      });
      if (input > maximum) c.issues.push({
        origin: "number",
        input: input,
        code: "too_big",
        maximum: maximum,
        inclusive: !0,
        inst: inst_4,
        continue: !t.abort
      });
    };
  });
var Fr = gr("$ZodCheckMaxLength", (inst_5, t) => {
    var r;
    MW.init(inst_5, t), (r = inst_5._zod.def).when ?? (r.when = Ce), inst_5._zod.check = n => {
      let input_2 = n.value,
        s = input_2.length;
      if ((typeof input_2 === "string" && s > t.maximum ? xUr(input_2) : s) <= t.maximum) return;
      let origin = PUr(input_2);
      n.issues.push({
        origin: origin,
        code: "too_big",
        maximum: t.maximum,
        inclusive: !0,
        input: input_2,
        inst: inst_5,
        continue: !t.abort
      });
    };
  }),
  Mr = gr("$ZodCheckMinLength", (inst_6, t) => {
    var r;
    MW.init(inst_6, t), (r = inst_6._zod.def).when ?? (r.when = Ce), inst_6._zod.check = n => {
      let input_3 = n.value,
        s = input_3.length;
      if ((typeof input_3 === "string" && s >= t.minimum && s < t.minimum * 2 ? xUr(input_3) : s) >= t.minimum) return;
      let origin_2 = PUr(input_3);
      n.issues.push({
        origin: origin_2,
        code: "too_small",
        minimum: t.minimum,
        inclusive: !0,
        input: input_3,
        inst: inst_6,
        continue: !t.abort
      });
    };
  }),
  Ur = gr("$ZodCheckLengthEquals", (inst_7, t) => {
    var r;
    MW.init(inst_7, t), (r = inst_7._zod.def).when ?? (r.when = Ce), inst_7._zod.check = n => {
      let i = n.value,
        s = i.length,
        c = typeof i === "string" && s >= t.length && s <= t.length * 2 ? xUr(i) : s;
      if (c === t.length) return;
      let origin_3 = PUr(i),
        l = c > t.length;
      n.issues.push({
        origin: origin_3,
        ...(l ? {
          code: "too_big",
          maximum: t.length
        } : {
          code: "too_small",
          minimum: t.length
        }),
        inclusive: !0,
        exact: !0,
        input: n.value,
        inst: inst_7,
        continue: !t.abort
      });
    };
  }),
  W = gr("$ZodCheckStringFormat", (inst_8, t) => {
    var r, n;
    if (MW.init(inst_8, t), t.pattern) (r = inst_8._zod).check ?? (r.check = i => {
      if (t.pattern.lastIndex = 0, t.pattern.test(i.value)) return;
      i.issues.push({
        origin: "string",
        code: "invalid_format",
        format: t.format,
        input: i.value,
        ...(t.pattern ? {
          pattern: t.pattern.toString()
        } : {}),
        inst: inst_8,
        continue: !t.abort
      });
    });else (n = inst_8._zod).check ?? (n.check = () => {});
  }),
  Br = gr("$ZodCheckRegex", (inst_9, t) => {
    W.init(inst_9, t), inst_9._zod.check = r => {
      if (t.pattern.lastIndex = 0, t.pattern.test(r.value)) return;
      r.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: r.value,
        pattern: t.pattern.toString(),
        inst: inst_9,
        continue: !t.abort
      });
    };
  }),
  Vr = gr("$ZodCheckLowerCase", (e, t) => {
    t.pattern ?? (t.pattern = Rr), W.init(e, t);
  }),
  Kr = gr("$ZodCheckUpperCase", (e, t) => {
    t.pattern ?? (t.pattern = Dr), W.init(e, t);
  }),
  Wr = gr("$ZodCheckIncludes", (inst_10, t) => {
    MW.init(inst_10, t);
    let r = rbt(t.includes),
      regExp = new RegExp(typeof t.position === "number" ? `^.{${t.position},}${r}` : r);
    t.pattern = regExp, inst_10._zod.check = i => {
      if (i.value.includes(t.includes, t.position)) return;
      i.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: t.includes,
        input: i.value,
        inst: inst_10,
        continue: !t.abort
      });
    };
  }),
  Gr = gr("$ZodCheckStartsWith", (inst_11, t) => {
    MW.init(inst_11, t);
    let regExp_2 = new RegExp(`^${rbt(t.prefix)}.*`);
    t.pattern ?? (t.pattern = regExp_2), inst_11._zod.check = n => {
      if (n.value.startsWith(t.prefix)) return;
      n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: t.prefix,
        input: n.value,
        inst: inst_11,
        continue: !t.abort
      });
    };
  }),
  qr = gr("$ZodCheckEndsWith", (inst_12, t) => {
    MW.init(inst_12, t);
    let regExp_3 = new RegExp(`.*${rbt(t.suffix)}$`);
    t.pattern ?? (t.pattern = regExp_3), inst_12._zod.check = n => {
      if (n.value.endsWith(t.suffix)) return;
      n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: t.suffix,
        input: n.value,
        inst: inst_12,
        continue: !t.abort
      });
    };
  });
var Yr = gr("$ZodCheckOverwrite", (e, t) => {
  MW.init(e, t), e._zod.check = r => {
    r.value = t.tx(r.value);
  };
});
class Le {
  constructor(e = [], t = {}) {
    this.content = [], this.indent = 0, this.args = e, this.closed = t;
  }
  indented(e) {
    this.indent += 1;
    try {
      e(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(e) {
    if (typeof e === "function") {
      e(this, {
        execution: "sync"
      }), e(this, {
        execution: "async"
      });
      return;
    }
    let r = e.split(`
`).filter(item => item),
      n = Math.min(...r.map(item => item.length - item.trimStart().length)),
      i = r.map(item => item.slice(n)).map(item => " ".repeat(this.indent * 2) + item);
    for (let s of i) this.content.push(s);
  }
  compile() {
    let Function_2 = Function,
      t = this?.content ?? [""];
    return new Function_2(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${t.join(`
`)}
};`)(...Object.values(this.closed));
  }
}
var Hr = {
  major: 4,
  minor: 6,
  patch: 2
};
var dk = gr("$ZodType", (e, t) => {
    var r;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Hr;
    let checks = e._zod.def.checks,
      i = e._zod.traits.has("$ZodCheck") ? [e, ...(checks ?? [])] : checks?.length ? [...checks] : [];
    for (let s of i) for (let c of s._zod.onattach) c(e);
    if (i.length === 0) (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });else {
      let s = (a, l, p) => {
          if (a.memo) return a;
          let f = gTe(a),
            d;
          for (let _ of l) {
            if (_._zod.def.when) {
              if (a4s(a)) continue;
              if (!_._zod.def.when(a)) continue;
            } else if (f) continue;
            let m = a.issues.length,
              h = _._zod.check(a);
            if (h instanceof Promise && p?.async === !1) throw new Bze();
            if (d || h instanceof Promise) d = (d ?? Promise.resolve()).then(async () => {
              if (await h, a.issues.length === m) return;
              if (ZBo(a.issues, m, e), !f) f = gTe(a, m);
            });else {
              if (a.issues.length === m) continue;
              if (ZBo(a.issues, m, e), !f) f = gTe(a, m);
            }
          }
          if (d) return d.then(() => a);
          return a;
        },
        c = (a, l, p) => {
          if (gTe(a)) return a.aborted = !0, a;
          let f = s(l, i, p);
          if (f instanceof Promise) {
            if (p.async === !1) throw new Bze();
            return f.then(d => e._zod.parse(d, p));
          }
          return e._zod.parse(f, p);
        };
      e._zod.run = (a, l) => {
        if (l.skipChecks) return e._zod.parse(a, l);
        if (l.direction === "backward") {
          let f = e._zod.parse({
            value: a.value,
            issues: []
          }, {
            ...l,
            skipChecks: !0
          });
          if (f instanceof Promise) return f.then(d => c(d, a, l));
          return c(f, a, l);
        }
        let p = e._zod.parse(a, l);
        if (p instanceof Promise) {
          if (l.async === !1) throw new Bze();
          return p.then(f => s(f, i, l));
        }
        return s(p, i, l);
      };
    }
  }, {
    get "~standard"() {
      return e1o(this, "~standard", Me(this));
    },
    set "~standard"(e) {
      B7e(this, "~standard", e);
    }
  }),
  fo = (e, t) => e.issues.length ? {
    issues: e.issues.map(item => Uze(item, t, ZJ()))
  } : {
    value: e.value
  };
async function ms(e, value_9) {
  let r = {
    async: !0
  };
  return fo(await e._zod.run({
    value: value_9,
    issues: []
  }, r), r);
}
function Me(e) {
  return {
    validate: value_10 => {
      let r = {
        async: !1
      };
      try {
        let n = e._zod.run({
          value: value_10,
          issues: []
        }, r);
        if (!(n instanceof Promise)) return fo(n, r);
      } catch (error) {}
      return ms(e, value_10);
    },
    vendor: "zod",
    version: 1
  };
}
var me = gr("$ZodString", (inst_13, t) => {
    dk.init(inst_13, t), inst_13._zod.pattern = t.pattern ?? Er, inst_13._zod.parse = (r, n) => {
      if (t.coerce) try {
        r.value = String(r.value);
      } catch (error) {}
      if (typeof r.value === "string") return r;
      return r.issues.push({
        expected: "string",
        code: "invalid_type",
        input: r.value,
        inst: inst_13
      }), r;
    };
  }),
  b = gr("$ZodStringFormat", (e, t) => {
    W.init(e, t), me.init(e, t);
  }),
  mo = gr("$ZodGUID", (e, t) => {
    t.pattern ?? (t.pattern = _r), b.init(e, t);
  }),
  ho = gr("$ZodUUID", (e, t) => {
    if (t.version) {
      let n = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      }[t.version];
      if (n === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = Te(n));
    } else t.pattern ?? (t.pattern = Te());
    b.init(e, t);
  }),
  _o = gr("$ZodEmail", (e, t) => {
    t.pattern ?? (t.pattern = xr), b.init(e, t);
  }),
  go = 1,
  xo = 2;
function hs(e, t) {
  if (!t.normalize && t.protocol?.source === wr.source && !/^https?:\/\//i.test(e)) return go;
  try {
    return new URL(e);
  } catch {
    return xo;
  }
}
var _s = /[\t\n\r]/g;
function gs(e) {
  return e.replace(_s, "");
}
function xs(e, t) {
  return t.lastIndex = 0, t.test(e.hostname);
}
function vs(e, t) {
  return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
var vo = gr("$ZodURL", (inst_14, t) => {
    b.init(inst_14, t), inst_14._zod.check = r => {
      try {
        let n = r.value.trim(),
          i = hs(n, t);
        if (i === go) {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid URL format",
            input: r.value,
            inst: inst_14,
            continue: !t.abort
          });
          return;
        }
        if (i === xo) {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            input: r.value,
            inst: inst_14,
            continue: !t.abort
          });
          return;
        }
        if (t.hostname && !xs(i, t.hostname)) r.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: t.hostname.source,
          input: r.value,
          inst: inst_14,
          continue: !t.abort
        });
        if (t.protocol && !vs(i, t.protocol)) r.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: t.protocol.source,
          input: r.value,
          inst: inst_14,
          continue: !t.abort
        });
        r.value = t.normalize ? i.href : gs(n);
        return;
      } catch (error) {
        r.issues.push({
          code: "invalid_format",
          format: "url",
          input: r.value,
          inst: inst_14,
          continue: !t.abort
        });
      }
    };
  }),
  yo = gr("$ZodEmoji", (e, t) => {
    t.pattern ?? (t.pattern = vr()), b.init(e, t);
  }),
  $o = gr("$ZodNanoID", (e, t) => {
    if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
    t.pattern ?? (t.pattern = t.length === void 0 ? dr : mr(t.length)), b.init(e, t);
  }),
  zo = gr("$ZodCUID", (e, t) => {
    t.pattern ?? (t.pattern = ur), b.init(e, t);
  }),
  bo = gr("$ZodCUID2", (e, t) => {
    t.pattern ?? (t.pattern = ar), b.init(e, t);
  }),
  ko = gr("$ZodULID", (e, t) => {
    t.pattern ?? (t.pattern = lr), b.init(e, t);
  }),
  Zo = gr("$ZodXID", (e, t) => {
    t.pattern ?? (t.pattern = pr), b.init(e, t);
  }),
  wo = gr("$ZodKSUID", (e, t) => {
    t.pattern ?? (t.pattern = fr), b.init(e, t);
  }),
  Po = gr("$ZodISODateTime", (e, t) => {
    t.pattern ?? (t.pattern = Ar(t)), b.init(e, t);
  }),
  So = gr("$ZodISODate", (e, t) => {
    t.pattern ?? (t.pattern = Ir), b.init(e, t);
  }),
  Io = gr("$ZodISOTime", (e, t) => {
    t.pattern ?? (t.pattern = Or(t)), b.init(e, t);
  }),
  Oo = gr("$ZodISODuration", (e, t) => {
    t.pattern ?? (t.pattern = hr), b.init(e, t);
  }),
  Ao = gr("$ZodIPv4", (e, t) => {
    t.pattern ?? (t.pattern = yr), b.init(e, t);
  }),
  ys = /^[0-9a-fA-F:.]+$/;
function Eo(e) {
  if (!ys.test(e)) return !1;
  try {
    return new URL(`http://[${e}]`), !0;
  } catch {
    return !1;
  }
}
var To = gr("$ZodIPv6", (inst_15, t) => {
  t.pattern ?? (t.pattern = $r), b.init(inst_15, t), inst_15._zod.check = r => {
    if (!Eo(r.value)) r.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: r.value,
      inst: inst_15,
      continue: !t.abort
    });
  };
});
var No = gr("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = zr), b.init(e, t);
});
function $s(e) {
  let t = e.split("/");
  if (t.length !== 2) return !1;
  let [r, n] = t;
  if (!n) return !1;
  let i = Number(n);
  if (`${i}` !== n) return !1;
  if (i < 0 || i > 128) return !1;
  return Eo(r);
}
var Co = gr("$ZodCIDRv6", (inst_16, t) => {
  t.pattern ?? (t.pattern = br), b.init(inst_16, t), inst_16._zod.check = r => {
    if (!$s(r.value)) r.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: r.value,
      inst: inst_16,
      continue: !t.abort
    });
  };
});
function Ro(e) {
  if (e === "") return !0;
  if (/\s/.test(e)) return !1;
  if (e.length % 4 !== 0) return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
var Ue = /^[0-9a-zA-Z+/]*={0,2}$/,
  Do = gr("$ZodBase64", (inst_17, t) => {
    t.pattern ?? (t.pattern = Ue), b.init(inst_17, t), inst_17._zod.check = r => {
      if (Ro(r.value)) return;
      r.issues.push({
        code: "invalid_format",
        format: "base64",
        input: r.value,
        inst: inst_17,
        continue: !t.abort
      });
    };
  }),
  he = /^[A-Za-z0-9_-]*$/;
function zs(e) {
  if (!he.test(e)) return !1;
  let t = e.replace(/[-_]/g, n => n === "-" ? "+" : "/"),
    r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Ro(r);
}
var jo = gr("$ZodBase64URL", (inst_18, t) => {
    t.pattern ?? (t.pattern = he), b.init(inst_18, t), inst_18._zod.check = r => {
      if (zs(r.value)) return;
      r.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: r.value,
        inst: inst_18,
        continue: !t.abort
      });
    };
  }),
  Lo = gr("$ZodE164", (e, t) => {
    t.pattern ?? (t.pattern = Pr), b.init(e, t);
  });
function bs(e, t = null) {
  try {
    let r = e.split(".");
    if (r.length !== 3) return !1;
    let [n] = r;
    if (!n) return !1;
    let i = JSON.parse(atob(n));
    if ("typ" in i && i?.typ !== "JWT") return !1;
    if (!i.alg) return !1;
    if (t && (!("alg" in i) || i.alg !== t)) return !1;
    return !0;
  } catch {
    return !1;
  }
}
var Fo = gr("$ZodJWT", (inst_19, t) => {
  b.init(inst_19, t), inst_19._zod.check = r => {
    if (bs(r.value, t.alg)) return;
    r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: inst_19,
      continue: !t.abort
    });
  };
});
var Je = gr("$ZodNumber", (inst_20, t) => {
    dk.init(inst_20, t), inst_20._zod.pattern = V, inst_20._zod.parse = (r, n) => {
      if (t.coerce) try {
        r.value = Number(r.value);
      } catch (error) {}
      let input_4 = r.value;
      if (typeof input_4 === "number" && !Number.isNaN(input_4) && Number.isFinite(input_4)) return r;
      let received = typeof input_4 === "number" ? Number.isNaN(input_4) ? "NaN" : !Number.isFinite(input_4) ? String(input_4) : void 0 : void 0;
      return r.issues.push({
        expected: "number",
        code: "invalid_type",
        input: input_4,
        inst: inst_20,
        ...(received ? {
          received: received
        } : {})
      }), r;
    };
  }),
  Mo = gr("$ZodNumberFormat", (e, t) => {
    Lr.init(e, t), Je.init(e, t);
  }),
  Uo = gr("$ZodBoolean", (inst_21, t) => {
    dk.init(inst_21, t), inst_21._zod.pattern = Tr, inst_21._zod.parse = (r, n) => {
      if (t.coerce) try {
        r.value = Boolean(r.value);
      } catch (error) {}
      let input_5 = r.value;
      if (typeof input_5 === "boolean") return r;
      return r.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input: input_5,
        inst: inst_21
      }), r;
    };
  });
var Jo = gr("$ZodUndefined", (inst_22, t) => {
    dk.init(inst_22, t), inst_22._zod.pattern = Cr, inst_22._zod.values = new Set([void 0]), inst_22._zod.parse = (r, n) => {
      let input_6 = r.value;
      if (typeof input_6 > "u") return r;
      return r.issues.push({
        expected: "undefined",
        code: "invalid_type",
        input: input_6,
        inst: inst_22
      }), r;
    };
  }),
  Bo = gr("$ZodNull", (inst_23, t) => {
    dk.init(inst_23, t), inst_23._zod.pattern = Nr, inst_23._zod.values = new Set([null]), inst_23._zod.parse = (r, n) => {
      let input_7 = r.value;
      if (input_7 === null) return r;
      return r.issues.push({
        expected: "null",
        code: "invalid_type",
        input: input_7,
        inst: inst_23
      }), r;
    };
  }),
  Vo = gr("$ZodAny", (e, t) => {
    dk.init(e, t), e._zod.parse = r => r;
  }),
  Ko = gr("$ZodUnknown", (e, t) => {
    dk.init(e, t), e._zod.parse = r => r;
  }),
  Wo = gr("$ZodNever", (inst_24, t) => {
    dk.init(inst_24, t), inst_24._zod.parse = (r, n) => (r.issues.push({
      expected: "never",
      code: "invalid_type",
      input: r.value,
      inst: inst_24
    }), r);
  });
function Qr(e, t, r) {
  if (e.issues.length) t.issues.push(...B0e(r, e.issues));
  t.value[r] = e.value;
}
var Go = gr("$ZodArray", (inst_25, t) => {
  dk.init(inst_25, t);
  let memoizer = QJ.memoizer;
  memoizer?.attach(inst_25), inst_25._zod.parse = (n, i) => {
    let input_8 = n.value;
    if (!Array.isArray(input_8)) return n.issues.push({
      expected: "array",
      code: "invalid_type",
      input: input_8,
      inst: inst_25
    }), n;
    n.value = memoizer ? memoizer.alloc(inst_25, n, Array(input_8.length), i) : Array(input_8.length);
    let c = [],
      a = i?.abortEarly;
    for (let l = 0; l < input_8.length; l++) {
      let value_11 = input_8[l],
        f = t.element._zod.run({
          value: value_11,
          issues: []
        }, i);
      if (f instanceof Promise) c.push(f.then(d => Qr(d, n, l)));else if (Qr(f, n, l), a && f.issues.length !== 0 && gTe(f)) break;
    }
    if (c.length) return Promise.all(c).then(() => n);
    return n;
  };
});
function de(e, t, r, n, i, s) {
  let c = r in n,
    a = s === "optional";
  if (!c && a && i === "optional") return;
  if (e.issues.length) {
    if (i !== void 0 && a && !c) return;
    t.issues.push(...B0e(r, e.issues));
  }
  if (!c && i === void 0) {
    if (!e.issues.length) t.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [r]
    });
    return;
  }
  if (e.value === void 0) {
    if (c || i === "defaulted" && !a) t.value[r] = void 0;
  } else t.value[r] = e.value;
}
var ks = [];
function qo(e) {
  let t = Object.keys(e.shape),
    r = Object.getOwnPropertySymbols(e.shape),
    symbolKeys = r.length ? r : ks,
    allKeys = symbolKeys.length ? [...t, ...symbolKeys] : t;
  for (let c of allKeys) if (!e.shape?.[c]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(c)}": expected a Zod schema`);
  let s = s4s(e.shape);
  return {
    ...e,
    allKeys: allKeys,
    symbolKeys: symbolKeys,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(s)
  };
}
function Yo(e, input_9, r, n, i, inst_26, c) {
  let keys = [],
    keySet = i.keySet,
    _zod_2 = i.catchall._zod,
    f = _zod_2.def.type,
    {
      optin: optin,
      optout: optout
    } = _zod_2,
    m = 0;
  for (let h in input_9) {
    if (c && r.issues.length !== m) {
      if (gTe(r, m)) break;
      m = r.issues.length;
    }
    if (keySet.has(h)) continue;
    if (h === "__proto__") {
      if (f === "never") keys.push(h);
      continue;
    }
    if (f === "never") {
      keys.push(h);
      continue;
    }
    let g = _zod_2.run({
      value: input_9[h],
      issues: []
    }, n);
    if (g instanceof Promise) e.push(g.then(x => de(x, r, h, input_9, optin, optout)));else de(g, r, h, input_9, optin, optout);
  }
  if (keys.length) r.issues.push({
    code: "unrecognized_keys",
    keys: keys,
    input: input_9,
    inst: inst_26,
    continue: !0
  });
  if (!e.length) return r;
  return Promise.all(e).then(() => r);
}
var Zs = gr("$ZodObject", (inst_27, t) => {
    dk.init(inst_27, t);
    let r = Object.getOwnPropertyDescriptor(t, "shape"),
      n = r?.get ? r.get.raw : t.shape ?? {};
    if (n) {
      let p = () => {
        let value_12 = {
          ...n
        };
        return Object.defineProperty(t, "shape", {
          value: value_12
        }), p.raw = value_12, value_12;
      };
      p.raw = n, Object.defineProperty(t, "shape", {
        get: p
      });
    }
    let i = B9n(() => qo(t));
    zS(inst_27, "propValues", p => {
      let shape = p.def.shape,
        d = {};
      for (let _ in shape) {
        let _zod_3 = shape[_]._zod;
        if (_zod_3.values) {
          if (!Object.prototype.hasOwnProperty.call(d, _)) ade(d, _, new Set());
          for (let h of _zod_3.values) d[_].add(h);
          if (_zod_3.optin !== void 0) d[_].add(void 0);
        }
      }
      return d;
    });
    let s = _fn,
      catchall = t.catchall,
      a,
      memoizer_2 = QJ.memoizer;
    memoizer_2?.attach(inst_27), inst_27._zod.parse = (p, f) => {
      a ?? (a = i.value);
      let input_10 = p.value;
      if (!s(input_10)) return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: input_10,
        inst: inst_27
      }), p;
      p.value = memoizer_2 ? memoizer_2.alloc(inst_27, p, {}, f) : {};
      let _ = [],
        shape_2 = a.shape,
        h = f?.abortEarly,
        g = p.issues.length;
      for (let x of a.allKeys) {
        if (h && p.issues.length !== g) {
          if (gTe(p, g)) break;
          g = p.issues.length;
        }
        if (x === "__proto__") continue;
        let y = shape_2[x],
          optin_2 = y._zod.optin,
          optout_2 = y._zod.optout,
          J = y._zod.run({
            value: input_10[x],
            issues: []
          }, f);
        if (J instanceof Promise) _.push(J.then(w => de(w, p, x, input_10, optin_2, optout_2)));else de(J, p, x, input_10, optin_2, optout_2);
      }
      if (!catchall) return _.length ? Promise.all(_).then(() => p) : p;
      return Yo(_, input_10, p, f, i.value, inst_27, h === !0);
    };
  }),
  Xo = gr("$ZodObjectJIT", (inst_28, t) => {
    Zs.init(inst_28, t);
    let r = inst_28._zod.parse,
      n = B9n(() => qo(t)),
      i = QJ.memoizer,
      s = shape_3 => {
        let h = n.value,
          g = h.symbolKeys,
          x = new Le(["payload", "ctx"], {
            shape: shape_3,
            inst: inst_28,
            memo: i,
            syms: g
          }),
          y = w => `shape[${w}]._zod.run({ value: input[${w}], issues: [] }, ctx)`,
          O = (w, z) => `
          let ${w}_ab = false;
          for (let i = 0; i < ${w}.issues.length; i++) {
            const iss = ${w}.issues[i];
            iss.path = iss.path ? [${z}, ...iss.path] : [${z}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${w}_ab = true;
          }
          if (${w}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
        x.write("const input = payload.value;");
        let F = Object.create(null),
          J = 0;
        for (let w of h.allKeys) F[w] = `key_${J++}`;
        x.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
        for (let w of h.allKeys) {
          if (w === "__proto__") continue;
          let z = F[w],
            A = typeof w === "symbol" ? `syms[${g.indexOf(w)}]` : t4s(w),
            Pe = `${A} in input`,
            Bt = shape_3[w],
            Se = Bt?._zod?.optin,
            Vt = Se !== void 0,
            rs = Bt?._zod?.optout === "optional";
          if (x.write(`const ${z} = ${y(A)};`), Vt && rs) {
            let os = Se === "optional" ? `${z}_present` : `${z}.value !== undefined || ${z}_present`;
            x.write(`
        const ${z}_present = ${Pe};
        if (!${z}.issues.length || ${z}_present) {
          if (${z}.issues.length) {${O(z, A)}
          }

          if (${os}) {
            newResult[${A}] = ${z}.value;
          }
        }

      `);
          } else if (!Vt) x.write(`
        const ${z}_present = ${Pe};
        if (${z}.issues.length) {${O(z, A)}
        }
        if (!${z}_present && !${z}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${A}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${z}_present) {
          newResult[${A}] = ${z}.value;
        }

      `);else if (x.write(`
        if (${z}.issues.length) {${O(z, A)}
        }
      `), Se === "defaulted") x.write(`newResult[${A}] = ${z}.value;`);else x.write(`
        if (${z}.value !== undefined || ${Pe}) {
          newResult[${A}] = ${z}.value;
        }
      `);
        }
        return x.write("payload.value = newResult;"), x.write("return payload;"), x.compile();
      },
      c,
      a = _fn,
      l = !QJ.jitless,
      f = l && r4s.value,
      catchall_2 = t.catchall,
      _;
    inst_28._zod.parse = (m, h) => {
      _ ?? (_ = n.value);
      let input_11 = m.value;
      if (!a(input_11)) return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: input_11,
        inst: inst_28
      }), m;
      if (l && f && h?.async === !1 && h.jitless !== !0) {
        if (!c) c = s(t.shape);
        if (m = c(m, h), !catchall_2) return m;
        return Yo([], input_11, m, h, _, inst_28, h?.abortEarly === !0);
      }
      return r(m, h);
    };
  });
function eo(e, t, inst_29, n) {
  for (let s of e) if (s.issues.length === 0) return t.value = s.value, t;
  let i = e.filter(item => !gTe(item));
  if (i.length === 1) return t.value = i[0].value, i[0];
  return t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: inst_29,
    errors: e.map(item => item.issues.map(item => Uze(item, n, ZJ())))
  }), t;
}
var Be = gr("$ZodUnion", (e, t) => {
  dk.init(e, t), zS(e, "optin", n => n.def.options.some(item => item._zod.optin === "defaulted") ? "defaulted" : n.def.options.some(item => item._zod.optin !== void 0) ? "optional" : void 0), zS(e, "optout", n => n.def.options.some(item => item._zod.optout === "optional") ? "optional" : void 0), zS(e, "values", n => {
    if (n.def.options.every(item => item._zod.values)) return new Set(n.def.options.flatMap(item => Array.from(item._zod.values)));
    return;
  }), zS(e, "pattern", n => {
    if (n.def.options.every(item => item._zod.pattern)) {
      let i = n.def.options.map(item => item._zod.pattern);
      return new RegExp(`^(${i.map(item => hfn(item.source)).join("|")})$`);
    }
    return;
  });
  let r = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (n, i) => {
    if (r) return r(n, i);
    let s = !1,
      c = [];
    for (let a of t.options) {
      let l = a._zod.run({
        value: n.value,
        issues: []
      }, i);
      if (l instanceof Promise) c.push(l), s = !0;else {
        if (l.issues.length === 0) return l;
        c.push(l);
      }
    }
    if (!s) return eo(c, n, e, i);
    return Promise.all(c).then(a => eo(a, n, e, i));
  };
});
function ws(e) {
  let t = new Map();
  for (let r of e.options) {
    let n = r._zod.propValues?.[e.discriminator];
    if (!n || n.size === 0) throw Error(`Invalid discriminated union option at index "${e.options.indexOf(r)}"`);
    for (let i of n) if (t.has(i)) {
      if (i !== void 0) throw Error(`Duplicate discriminator value "${String(i)}"`);
      t.set(i, null);
    } else t.set(i, r);
  }
  return t;
}
var Ho = gr("$ZodDiscriminatedUnion", (inst_30, t) => {
    t.inclusive = !1, Be.init(inst_30, t);
    let r = inst_30._zod.parse;
    zS(inst_30, "propValues", i => {
      let s = {},
        c = 0;
      for (let a of i.def.options) {
        let propValues = a._zod.propValues;
        if (!propValues || Object.keys(propValues).length === 0) throw Error(`Invalid discriminated union option at index "${i.def.options.indexOf(a)}"`);
        if (propValues[i.def.discriminator]?.has(void 0)) c++;
        for (let [p, f] of Object.entries(propValues)) {
          if (!Object.prototype.hasOwnProperty.call(s, p)) ade(s, p, new Set());
          for (let d of f) s[p].add(d);
        }
      }
      if (!i.def.unionFallback && c > 1) s[i.def.discriminator]?.delete(void 0);
      return s;
    }), t.options.forEach((item, index) => {
      let c = j9n(item._zod.def);
      if (c && !Object.prototype.hasOwnProperty.call(c, t.discriminator)) throw Error(`Invalid discriminated union option at index "${index}"`);
    });
    let n = B9n(() => ws(t));
    inst_30._zod.parse = (i, s) => {
      let input_12 = i.value;
      if (!_fn(input_12)) return i.issues.push({
        code: "invalid_type",
        expected: "object",
        input: input_12,
        inst: inst_30
      }), i;
      let a = input_12?.[t.discriminator],
        l = n.value.get(a);
      if (l && (a !== void 0 || s.direction !== "backward")) return l._zod.run(i, s);
      if (t.unionFallback || s.direction === "backward") return r(i, s);
      return i.issues.push({
        code: "invalid_union",
        errors: [],
        note: "No matching discriminator",
        discriminator: t.discriminator,
        options: Array.from(n.value.keys()).filter(item => n.value.get(item) !== null),
        input: input_12,
        path: [t.discriminator],
        inst: inst_30
      }), i;
    };
  }),
  Qo = gr("$ZodIntersection", (e, t) => {
    dk.init(e, t), e._zod.parse = (r, n) => {
      let value_13 = r.value,
        s = t.left._zod.run({
          value: value_13,
          issues: []
        }, n),
        c = t.right._zod.run({
          value: value_13,
          issues: []
        }, n);
      if (s instanceof Promise || c instanceof Promise) return Promise.all([s, c]).then(([l, p]) => to(r, l, p));
      return to(r, s, c);
    };
  });
function Fe(data, t) {
  if (data === t) return {
    valid: !0,
    data: data
  };
  if (data instanceof Date && t instanceof Date && +data === +t) return {
    valid: !0,
    data: data
  };
  if (v1t(data) && v1t(t)) {
    let r = Object.keys(t),
      n = Object.keys(data).filter(item => r.indexOf(item) !== -1),
      data_2 = {
        ...data,
        ...t
      };
    if (Object.prototype.hasOwnProperty.call(data_2, "__proto__")) delete data_2.__proto__;
    for (let s of n) {
      if (s === "__proto__") continue;
      let c = Fe(data[s], t[s]);
      if (!c.valid) return {
        valid: !1,
        mergeErrorPath: [s, ...c.mergeErrorPath]
      };
      data_2[s] = c.data;
    }
    return {
      valid: !0,
      data: data_2
    };
  }
  if (Array.isArray(data) && Array.isArray(t)) {
    if (data.length !== t.length) return {
      valid: !1,
      mergeErrorPath: []
    };
    let data_3 = [];
    for (let n = 0; n < data.length; n++) {
      let i = data[n],
        s = t[n],
        c = Fe(i, s);
      if (!c.valid) return {
        valid: !1,
        mergeErrorPath: [n, ...c.mergeErrorPath]
      };
      data_3.push(c.data);
    }
    return {
      valid: !0,
      data: data_3
    };
  }
  return {
    valid: !1,
    mergeErrorPath: []
  };
}
function to(e, t, r) {
  let n = new Map(),
    i,
    s = new Map(),
    c = (p, f) => {
      let d;
      if (p.code === "unrecognized_keys" && !p.path?.length) i ?? (i = p), d = p.keys;else if (p.code === "invalid_key" && p.origin === "record" && p.path?.length === 1) {
        let _ = String(p.path[0]);
        if (!s.has(_)) s.set(_, p);
        d = [_];
      } else return !1;
      for (let _ of d) {
        if (!n.has(_)) n.set(_, {});
        n.get(_)[f] = !0;
      }
      return !0;
    };
  for (let p of t.issues) if (!c(p, "l")) e.issues.push(p);
  for (let p of r.issues) if (!c(p, "r")) e.issues.push(p);
  let a = [...n].filter(([, p]) => p.l && p.r).map(([p]) => p);
  if (a.length) {
    let keys_2 = i ? a.filter(item => i.keys.includes(item)) : [];
    if (keys_2.length) e.issues.push({
      ...i,
      keys: keys_2
    });
    for (let f of a) if (!keys_2.includes(f) && s.has(f)) e.issues.push(s.get(f));
  }
  let l = Fe(t.value, r.value);
  if (!l.valid) {
    if (gTe(e)) return e;
    throw Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  }
  return e.value = l.data, e;
}
var en = gr("$ZodTuple", (inst_31, t) => {
  dk.init(inst_31, t);
  let items = t.items,
    memoizer_3 = QJ.memoizer;
  memoizer_3?.attach(inst_31), inst_31._zod.parse = (i, s) => {
    let input_13 = i.value;
    if (!Array.isArray(input_13)) return i.issues.push({
      input: input_13,
      inst: inst_31,
      expected: "tuple",
      code: "invalid_type"
    }), i;
    i.value = memoizer_3 ? memoizer_3.alloc(inst_31, i, [], s) : [];
    let a = [],
      minimum_2 = ro(items, "optin"),
      p = ro(items, "optout");
    if (!t.rest) {
      if (input_13.length < minimum_2) return i.issues.push({
        code: "too_small",
        minimum: minimum_2,
        inclusive: !0,
        input: input_13,
        inst: inst_31,
        origin: "array"
      }), i;
      if (input_13.length > items.length) i.issues.push({
        code: "too_big",
        maximum: items.length,
        inclusive: !0,
        input: input_13,
        inst: inst_31,
        origin: "array"
      });
    }
    let f = Array(items.length),
      d = t.rest ? s?.abortEarly : void 0,
      _ = !1;
    for (let m = 0; m < items.length; m++) {
      let h = items[m]._zod.run({
        value: input_13[m],
        issues: []
      }, s);
      if (h instanceof Promise) a.push(h.then(g => {
        f[m] = g;
      }));else if (f[m] = h, d && !_ && h.issues.length) _ = gTe(h);
    }
    if (t.rest && !_) {
      let m = items.length - 1,
        h = input_13.slice(items.length),
        g = i.issues.length;
      for (let value_14 of h) {
        if (d && i.issues.length !== g) {
          if (gTe(i, g)) break;
          g = i.issues.length;
        }
        m++;
        let y = t.rest._zod.run({
          value: value_14,
          issues: []
        }, s);
        if (y instanceof Promise) a.push(y.then(O => oo(O, i, m)));else oo(y, i, m);
      }
    }
    if (a.length) return Promise.all(a).then(() => no(f, i, items, input_13, p));
    return no(f, i, items, input_13, p);
  };
});
function ro(e, t) {
  for (let r = e.length - 1; r >= 0; r--) if (!(t === "optin" ? e[r]._zod.optin !== void 0 : e[r]._zod.optout === "optional")) return r + 1;
  return 0;
}
function oo(e, t, r) {
  if (e.issues.length) t.issues.push(...B0e(r, e.issues));
  t.value[r] = e.value;
}
function no(e, t, r, n, i) {
  for (let s = 0; s < r.length; s++) {
    let c = e[s],
      a = s < n.length;
    if (!a && s >= i && r[s]._zod.optin === "optional") {
      t.value.length = s;
      break;
    }
    if (c.issues.length) {
      if (!a && s >= i) {
        t.value.length = s;
        break;
      }
      t.issues.push(...B0e(s, c.issues));
    }
    t.value[s] = c.value;
  }
  for (let s = t.value.length - 1; s >= n.length; s--) if (r[s]._zod.optout === "optional" && t.value[s] === void 0) t.value.length = s;else break;
  return t;
}
var tn = gr("$ZodRecord", (inst_32, t) => {
  dk.init(inst_32, t);
  let memoizer_4 = QJ.memoizer;
  memoizer_4?.attach(inst_32), inst_32._zod.parse = (n, i) => {
    let input_14 = n.value;
    if (!v1t(input_14)) return n.issues.push({
      expected: "record",
      code: "invalid_type",
      input: input_14,
      inst: inst_32
    }), n;
    let c = [],
      a = t.keyType._zod.values;
    if (a && !t.partial) {
      n.value = memoizer_4 ? memoizer_4.alloc(inst_32, n, {}, i) : {};
      let l = new Set();
      for (let f of a) if (typeof f === "string" || typeof f === "number" || typeof f === "symbol") {
        if (l.add(typeof f === "number" ? f.toString() : f), f === "__proto__") continue;
        let d = t.keyType._zod.run({
          value: f,
          issues: []
        }, i);
        if (d instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if (d.issues.length) {
          n.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: d.issues.map(item => Uze(item, i, ZJ())),
            input: f,
            path: [f],
            inst: inst_32
          });
          continue;
        }
        let _ = d.value;
        if (_ === "__proto__") continue;
        let m = t.valueType._zod.run({
          value: input_14[f],
          issues: []
        }, i);
        if (m instanceof Promise) c.push(m.then(h => {
          if (h.issues.length) n.issues.push(...B0e(f, h.issues));
          n.value[_] = h.value;
        }));else {
          if (m.issues.length) n.issues.push(...B0e(f, m.issues));
          n.value[_] = m.value;
        }
      }
      let keys_3;
      for (let f in input_14) if (!l.has(f)) if (t.mode === "loose") {
        if (f === "__proto__") continue;
        n.value[f] = input_14[f];
      } else keys_3 = keys_3 ?? [], keys_3.push(f);
      if (keys_3 && keys_3.length > 0) n.issues.push({
        code: "unrecognized_keys",
        input: input_14,
        inst: inst_32,
        keys: keys_3,
        continue: !0
      });
    } else {
      n.value = memoizer_4 ? memoizer_4.alloc(inst_32, n, {}, i) : {};
      let keys_4;
      for (let p of Reflect.ownKeys(input_14)) {
        if (p === "__proto__") continue;
        if (!Object.prototype.propertyIsEnumerable.call(input_14, p)) continue;
        let f = t.keyType._zod.run({
          value: p,
          issues: []
        }, i);
        if (f instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if (typeof p === "string" && V.test(p) && f.issues.length) {
          let h = t.keyType._zod.run({
            value: Number(p),
            issues: []
          }, i);
          if (h instanceof Promise) throw Error("Async schemas not supported in object keys currently");
          if (h.issues.length === 0) f = h;
        }
        if (f.issues.length) {
          if (t.mode === "loose") n.value[p] = input_14[p];else if (a) keys_4 = keys_4 ?? [], keys_4.push(p);else n.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: f.issues.map(item => Uze(item, i, ZJ())),
            input: p,
            path: [p],
            inst: inst_32
          });
          continue;
        }
        let _ = f.value;
        if (_ === "__proto__") continue;
        let m = t.valueType._zod.run({
          value: input_14[p],
          issues: []
        }, i);
        if (m instanceof Promise) c.push(m.then(h => {
          if (h.issues.length) n.issues.push(...B0e(p, h.issues));
          n.value[_] = h.value;
        }));else {
          if (m.issues.length) n.issues.push(...B0e(p, m.issues));
          n.value[_] = m.value;
        }
      }
      if (keys_4 && keys_4.length > 0) n.issues.push({
        code: "unrecognized_keys",
        input: input_14,
        inst: inst_32,
        keys: keys_4,
        continue: !0
      });
    }
    if (c.length) return Promise.all(c).then(() => n);
    return n;
  };
});
var rn = gr("$ZodEnum", (inst_33, t) => {
    dk.init(inst_33, t);
    let values = $9n(t.entries),
      n = new Set(values);
    inst_33._zod.values = n, zS(inst_33, "pattern", i => {
      let s = $9n(i.def.entries).filter(item => o4s.has(typeof item));
      return new RegExp(s.length ? `^(${s.map(item => rbt(item.toString())).join("|")})$` : "^[^\\s\\S]$");
    }), inst_33._zod.parse = (i, s) => {
      let input_15 = i.value;
      if (n.has(input_15)) return i;
      return i.issues.push({
        code: "invalid_value",
        values: values,
        input: input_15,
        inst: inst_33
      }), i;
    };
  }),
  on = gr("$ZodLiteral", (inst_34, t) => {
    dk.init(inst_34, t);
    let r = new Set(t.values);
    inst_34._zod.values = r, zS(inst_34, "pattern", n => {
      let i = n.def.values;
      return new RegExp(i.length ? `^(${i.map(item => typeof item === "string" ? rbt(item) : item ? rbt(item.toString()) : String(item)).join("|")})$` : "^[^\\s\\S]$");
    }), inst_34._zod.parse = (n, i) => {
      let input_16 = n.value;
      if (r.has(input_16)) return n;
      return n.issues.push({
        code: "invalid_value",
        values: t.values,
        input: input_16,
        inst: inst_34
      }), n;
    };
  });
var nn = gr("$ZodTransform", (e, t) => {
  dk.init(e, t), e._zod.optin = "optional", QJ.memoizer?.guard(e), e._zod.parse = (r, n) => {
    if (n.direction === "backward") throw new W9n(e.constructor.name);
    let i = t.transform(r.value, r);
    if (n.async) return (i instanceof Promise ? i : Promise.resolve(i)).then(c => (r.value = c, r));
    if (i instanceof Promise) throw new Bze();
    return r.value = i, r;
  };
});
function io(e, t) {
  return e.value = t.issues.length ? void 0 : t.value, e;
}
var Ve = gr("$ZodOptional", (e, t) => {
    dk.init(e, t), zS(e, "optin", r => r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", zS(e, "values", r => {
      let n = r.def.innerType._zod.values;
      return n ? new Set([...n, void 0]) : void 0;
    }), zS(e, "pattern", r => {
      let pattern = r.def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${hfn(pattern.source)})?$`) : void 0;
    }), e._zod.parse = (r, n) => {
      if (r.value === void 0) {
        if (t.innerType._zod.optin !== "defaulted") return r;
        let i = t.innerType._zod.run({
          value: r.value,
          issues: []
        }, n);
        if (i instanceof Promise) return i.then(s => io(r, s));
        return io(r, i);
      }
      return t.innerType._zod.run(r, n);
    };
  }),
  sn = gr("$ZodExactOptional", (e, t) => {
    Ve.init(e, t), zS(e, "values", r => r.def.innerType._zod.values), zS(e, "pattern", r => r.def.innerType._zod.pattern), e._zod.parse = (r, n) => t.innerType._zod.run(r, n);
  }),
  cn = gr("$ZodNullable", (e, t) => {
    dk.init(e, t), zS(e, "optin", r => r.def.innerType._zod.optin), zS(e, "optout", r => r.def.innerType._zod.optout), zS(e, "pattern", r => {
      let pattern_2 = r.def.innerType._zod.pattern;
      return pattern_2 ? new RegExp(`^(${hfn(pattern_2.source)}|null)$`) : void 0;
    }), zS(e, "values", r => r.def.innerType._zod.values ? new Set([...r.def.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => {
      if (r.value === null) return r;
      return t.innerType._zod.run(r, n);
    };
  }),
  un = gr("$ZodDefault", (e, t) => {
    dk.init(e, t), e._zod.optin = "defaulted", zS(e, "values", r => r.def.innerType._zod.values), e._zod.parse = (r, n) => {
      if (n.direction === "backward") return t.innerType._zod.run(r, n);
      if (r.value === void 0) return r.value = t.defaultValue, r;
      let i = t.innerType._zod.run(r, n);
      if (i instanceof Promise) return i.then(s => so(s, t));
      return so(i, t);
    };
  });
function so(e, t) {
  if (e.value === void 0) e.value = t.defaultValue;
  return e;
}
var an = gr("$ZodPrefault", (e, t) => {
    dk.init(e, t), e._zod.optin = "defaulted", zS(e, "values", r => r.def.innerType._zod.values), e._zod.parse = (r, n) => {
      if (n.direction === "backward") return t.innerType._zod.run(r, n);
      if (r.value === void 0) r.value = t.defaultValue;
      return t.innerType._zod.run(r, n);
    };
  }),
  ln = gr("$ZodNonOptional", (e, t) => {
    dk.init(e, t), zS(e, "values", r => {
      let n = r.def.innerType._zod.values;
      return n ? new Set([...n].filter(item => item !== void 0)) : void 0;
    }), e._zod.parse = (r, n) => {
      let i = t.innerType._zod.run(r, n);
      if (i instanceof Promise) return i.then(s => co(s, e));
      return co(i, e);
    };
  });
function co(e, inst_35) {
  if (!e.issues.length && e.value === void 0) e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: inst_35
  });
  return e;
}
function uo(e, t, r, n) {
  if (!t.issues.length) {
    if (e.value = t.value, t.memo) e.memo = !0;
    return e;
  }
  return e.value = r.catchValue({
    ...t,
    value: e.value,
    error: {
      issues: t.issues.map(item => Uze(item, n, ZJ()))
    },
    input: e.value
  }), e;
}
var pn = gr("$ZodCatch", (e, t) => {
  dk.init(e, t), zS(e, "optin", r => r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), zS(e, "optout", r => r.def.innerType._zod.optout), zS(e, "values", r => r.def.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward") return t.innerType._zod.run(r, n);
    let i = t.innerType._zod.run({
      value: r.value,
      issues: []
    }, n);
    if (i instanceof Promise) return i.then(s => uo(r, s, t, n));
    return uo(r, i, t, n);
  };
});
var Ke = gr("$ZodPipe", (e, t) => {
  dk.init(e, t), zS(e, "values", r => r.def.in._zod.values), zS(e, "optin", r => r.def.in._zod.optin), zS(e, "optout", r => r.def.out._zod.optout), zS(e, "propValues", r => r.def.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      let s = t.out._zod.run(r, n);
      if (s instanceof Promise) return s.then(c => pe(c, t.in, n));
      return pe(s, t.in, n);
    }
    let i = t.in._zod.run(r, n);
    if (i instanceof Promise) return i.then(s => pe(s, t.out, n));
    return pe(i, t.out, n);
  };
});
function pe(e, t, r) {
  if (e.issues.some(item => item.code !== "unrecognized_keys")) return e.aborted = !0, e;
  return t._zod.run({
    value: e.value,
    issues: e.issues
  }, r);
}
var fn = gr("$ZodPreprocess", (e, t) => {
    Ke.init(e, t);
  }),
  dn = gr("$ZodReadonly", (e, t) => {
    dk.init(e, t), zS(e, "propValues", r => r.def.innerType._zod.propValues), zS(e, "values", r => r.def.innerType._zod.values), zS(e, "optin", r => r.def.innerType?._zod?.optin), zS(e, "optout", r => r.def.innerType?._zod?.optout), e._zod.parse = (r, n) => {
      if (n.direction === "backward") return t.innerType._zod.run(r, n);
      let i = t.innerType._zod.run(r, n);
      if (i instanceof Promise) return i.then(ao);
      return ao(i);
    };
  });
function ao(e) {
  if (!e.memo) e.value = Object.freeze(e.value);
  return e;
}
var kUr = gr("$ZodLazy", (e, t) => {
    dk.init(e, t), yfn(e._zod, "innerType", () => {
      let r = t;
      if (!r._cachedInner) r._cachedInner = t.getter();
      return r._cachedInner;
    }), zS(e, "pattern", r => r.innerType?._zod?.pattern), zS(e, "propValues", r => r.innerType?._zod?.propValues), zS(e, "optin", r => r.innerType?._zod?.optin ?? void 0), zS(e, "optout", r => r.innerType?._zod?.optout ?? void 0), e._zod.parse = (r, n) => e._zod.innerType._zod.run(r, n);
  }),
  mn = gr("$ZodCustom", (e, t) => {
    MW.init(e, t), dk.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = r => {
      let n = r.value,
        i = t.fn(n);
      if (i instanceof Promise) return i.then(s => lo(s, r, n, e));
      lo(i, r, n, e);
      return;
    };
  });
function lo(e, t, input_17, inst_36) {
  if (!e) {
    let i = {
      code: "custom",
      input: input_17,
      inst: inst_36,
      path: [...(inst_36._zod.def.path ?? [])],
      continue: !inst_36._zod.def.abort
    };
    if (inst_36._zod.def.params) i.params = inst_36._zod.def.params;
    t.issues.push(k1t(i));
  }
}
function po(e, t, r) {
  if (e.issues.length) t.issues.push(...B0e(r, e.issues));
}
var Ps = gr("$ZodProperties", (inst_37, t) => {
  dk.init(inst_37, t), MW.init(inst_37, t);
  let memoizer_5 = QJ.memoizer;
  memoizer_5?.attach(inst_37);
  let n,
    i = (s, c) => {
      n ?? (n = Reflect.ownKeys(t.shape).map(item => [item, t.shape[item]]));
      let a = s.value,
        l;
      for (let [p, f] of n) {
        let d = f._zod.run({
          value: a[p],
          issues: []
        }, c);
        if (d instanceof Promise) l ?? (l = []), l.push(d.then(_ => po(_, s, p)));else po(d, s, p);
      }
      if (l) return Promise.all(l).then(() => {
        return;
      });
      return;
    };
  inst_37._zod.parse = (s, c) => {
    let input_18 = s.value;
    if (input_18 === null || typeof input_18 !== "object" && typeof input_18 !== "function") return s.issues.push({
      expected: "object",
      code: "invalid_type",
      input: input_18,
      inst: inst_37
    }), s;
    if (c.direction === "backward") c = {
      ...c,
      direction: "forward"
    };
    if (memoizer_5) memoizer_5.alloc(inst_37, s, input_18, c);
    let l = i(s, c);
    return l instanceof Promise ? l.then(() => s) : s;
  }, inst_37._zod.check = s => {
    if (s.value == null) {
      s.issues.push({
        expected: "object",
        code: "invalid_type",
        input: s.value,
        inst: inst_37
      });
      return;
    }
    return i(s, {});
  };
}, {
  *[Symbol.iterator]() {
    yield this;
  }
});
class ZodCyclicError extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform");
    this.name = "ZodCyclicError";
  }
}
var Ge = "~memo",
  hn = [];
function gn(e) {
  return e !== null && (typeof e === "object" || typeof e === "function");
}
function We(e) {
  return e.map(item => item.path ? {
    ...item,
    path: item.path.slice()
  } : {
    ...item
  });
}
var weakMap = new WeakMap(),
  G = 0,
  xe = 1,
  q = 2;
function ve(e, t, r) {
  let n = weakMap.get(e);
  if (n !== void 0) return n ? q : G;
  if (t.has(e)) return q;
  t.add(e);
  let i = G,
    s = f => {
      if (i !== q && f?._zod) {
        let d = ve(f, t, r);
        if (d > i) i = d;
      }
    },
    c = (f, d) => {
      let _ = G;
      for (let m of Reflect.ownKeys(f)) {
        let h = Object.getOwnPropertyDescriptor(f, m);
        if (d && !h.enumerable) continue;
        let g = h.get ? xe : h.value?._zod ? ve(h.value, t, r) : G;
        if (g > _) _ = g;
      }
      return _;
    },
    a = f => {
      if (f > i) i = f;
    },
    def = e._zod.def,
    p = def.type;
  switch (p) {
    case "object":
      {
        let f = j9n(def);
        a(f ? c(f, !0) : xe), s(def.catchall);
        break;
      }
    case "properties":
      a(c(def.shape, !1));
      break;
    case "array":
      s(def.element);
      break;
    case "tuple":
      for (let f of def.items) s(f);
      s(def.rest);
      break;
    case "record":
    case "map":
      s(def.keyType), s(def.valueType);
      break;
    case "set":
      s(def.valueType);
      break;
    case "union":
      for (let f of def.options) s(f);
      break;
    case "intersection":
      s(def.left), s(def.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      s(def.innerType);
      break;
    case "pipe":
      s(def.in), s(def.out);
      break;
    case "function":
      s(def.input), s(def.output);
      break;
    case "lazy":
      {
        let f = def._cachedInner ?? (r ? e._zod.innerType : void 0);
        a(f ? ve(f, t, !1) : xe);
        break;
      }
    case "template_literal":
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default:
      for (let f in def) {
        let d = Object.getOwnPropertyDescriptor(def, f);
        if (!d || d.get) continue;
        let _ = d.value;
        if (!_ || typeof _ !== "object") continue;
        if (_._zod) s(_);else if (Array.isArray(_)) for (let m of _) s(m);
      }
  }
  return t.delete(e), Ss(e, i);
}
function Ss(e, t) {
  if (t !== xe) weakMap.set(e, t === q);
  return t;
}
function Is(e, t) {
  let r = e.buckets.get(t);
  if (!r) r = new WeakMap(), e.buckets.set(t, r);
  return r;
}
var _e,
  ge = [],
  Os = {
    alloc(e, t, value_15) {
      let n = _e;
      if (!n) return value_15;
      _e = void 0;
      let i = {
        value: value_15,
        issues: null
      };
      return n.set(t.value, i), ge.push(i), value_15;
    },
    guard(e) {
      var t;
      (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
        let r = e._zod.parse,
          n = (i, s) => {
            if (s.direction !== "backward" && As(s, i.value)) throw new ZodCyclicError();
            return r(i, s);
          };
        if (e._zod.parse = n, e._zod.run === r) e._zod.run = n;
      });
    },
    attach(e) {
      var t;
      let r,
        n = !1,
        i,
        s;
      (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
        let c = e._zod.parse,
          a = (l, p) => {
            if (r === void 0) {
              let y = ve(e, new Set(), !1);
              if (y === G) {
                if (e._zod.parse = c, e._zod.run === a) e._zod.run = c;
                return c(l, p);
              }
              if (y === q || n) r = !0;else n = !0;
            }
            let f = l.value;
            if (!gn(f)) return c(l, p);
            let d = p[Ge];
            if (!d) d = {
              buckets: new WeakMap(),
              backEdges: void 0
            }, p[Ge] = d;
            let _;
            if (i === p) _ = s;else _ = Is(d, e), i = p, s = _;
            let m = _.get(f);
            if (m) {
              if (l.value = m.value, m.issues) {
                if (m.issues.length) l.issues.push(...We(m.issues));
              } else l.memo = !0, d.backEdges ?? (d.backEdges = new WeakSet()), d.backEdges.add(m.value);
              return l;
            }
            _e = _;
            let h = ge.length,
              g = c(l, p);
            _e = void 0;
            let x = ge.length > h ? ge.pop() : void 0;
            if (g instanceof Promise) return g.then(y => {
              if (x) x.issues = y.issues.length ? We(y.issues) : hn;
              return y;
            });
            if (x) x.issues = g.issues.length ? We(g.issues) : hn;
            return g;
          };
        if (e._zod.parse = a, e._zod.run === c) e._zod.run = a;
      });
    }
  };
function vn() {
  return Os;
}
function As(e, t) {
  let r = e[Ge]?.backEdges;
  return r !== void 0 && gn(t) && r.has(t);
}
var Es = () => {
  let e = {
    string: {
      unit: "characters",
      verb: "to have"
    },
    file: {
      unit: "bytes",
      verb: "to have"
    },
    array: {
      unit: "items",
      verb: "to have"
    },
    set: {
      unit: "items",
      verb: "to have"
    },
    map: {
      unit: "entries",
      verb: "to have"
    }
  };
  function t(s) {
    return e[s] ?? null;
  }
  let r = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      mac: "MAC address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      credit_card: "credit card number",
      iban: "IBAN",
      jwt: "JWT",
      template_literal: "input"
    },
    n = {
      nan: "NaN"
    };
  function i(s, c) {
    if (s === "number" && typeof c === "number" && !Number.isFinite(c)) return String(c);
    return n[s] ?? s;
  }
  return s => {
    switch (s.code) {
      case "invalid_type":
        {
          let c = i(s.expected),
            a = l4s(s.input),
            l = i(a, s.input);
          return `Invalid input: expected ${c}, received ${l}`;
        }
      case "invalid_value":
        if (s.values.length === 1) return `Invalid input: expected ${JBo(s.values[0])}`;
        return `Invalid option: expected one of ${KBo(s.values, "|")}`;
      case "too_big":
        {
          let c = s.exact ? "exactly " : s.inclusive ? "<=" : "<",
            a = t(s.origin);
          if (a) return `Too big: expected ${s.origin ?? "value"} to have ${c}${s.maximum.toString()} ${a.unit ?? "elements"}`;
          return `Too big: expected ${s.origin ?? "value"} to be ${c}${s.maximum.toString()}`;
        }
      case "too_small":
        {
          let c = s.exact ? "exactly " : s.inclusive ? ">=" : ">",
            a = t(s.origin);
          if (a) return `Too small: expected ${s.origin} to have ${c}${s.minimum.toString()} ${a.unit}`;
          return `Too small: expected ${s.origin} to be ${c}${s.minimum.toString()}`;
        }
      case "invalid_format":
        {
          let c = s;
          if (c.format === "starts_with") return `Invalid string: must start with "${c.prefix}"`;
          if (c.format === "ends_with") return `Invalid string: must end with "${c.suffix}"`;
          if (c.format === "includes") return `Invalid string: must include "${c.includes}"`;
          if (c.format === "regex") return `Invalid string: must match pattern ${c.pattern}`;
          return `Invalid ${r[c.format] ?? s.format}`;
        }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${s.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${s.keys.length > 1 ? "s" : ""}: ${KBo(s.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${s.origin}`;
      case "invalid_union":
        if (s.options && Array.isArray(s.options) && s.options.length > 0) return `Invalid discriminator value. Expected ${s.options.map(item => `'${item}'`).join(" | ")}`;
        if (s.inclusive === !1) return "Invalid input: more than one option matched";
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${s.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function qe() {
  return {
    localeError: Es()
  };
}
var yn;
class $n {
  constructor() {
    this._map = new WeakMap(), this._idmap = new Map();
  }
  add(e, ...t) {
    let r = t[0];
    if (this._map.set(e, r), r && typeof r === "object" && "id" in r) this._idmap.set(r.id, e);
    return this;
  }
  clear() {
    return this._map = new WeakMap(), this._idmap = new Map(), this;
  }
  remove(e) {
    let t = this._map.get(e);
    if (t && typeof t === "object" && "id" in t) this._idmap.delete(t.id);
    return this._map.delete(e), this;
  }
  get(e) {
    let parent = e._zod.parent;
    if (parent) {
      let r = {
        ...(this.get(parent) ?? {})
      };
      delete r.id;
      let n = {
        ...r,
        ...this._map.get(e)
      };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
}
function Ts() {
  return new $n();
}
(yn = globalThis).__zod_globalRegistry ?? (yn.__zod_globalRegistry = Ts());
var __zod_globalRegistry = globalThis.__zod_globalRegistry;
function zn(e, t) {
  return new e({
    type: "string",
    ...Vl(t)
  });
}
function VKs(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...Vl(t)
  });
}
function Ye(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function bn(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Xe(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function kn(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Vl(t)
  });
}
function Zn(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Vl(t)
  });
}
function wn(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Vl(t)
  });
}
function He(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Pn(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Sn(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function In(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function On(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function An(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function En(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Tn(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Nn(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Cn(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Rn(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Dn(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Qe(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function jn(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Ln(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
function Fn(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Vl(t)
  });
}
var qKs = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function EUr(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Vl(t)
  });
}
function TUr(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...Vl(t)
  });
}
function Mn(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Vl(t)
  });
}
function Un(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Vl(t)
  });
}
function Jn(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...Vl(t)
  });
}
function KKs(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...Vl(t)
  });
}
function Bn(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...Vl(t)
  });
}
function Vn(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...Vl(t)
  });
}
function Kn(e, t) {
  return new e({
    type: "boolean",
    ...Vl(t)
  });
}
function YKs(e, t) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...Vl(t)
  });
}
function Wn(e, t) {
  return new e({
    type: "undefined",
    ...Vl(t)
  });
}
function Gn(e, t) {
  return new e({
    type: "null",
    ...Vl(t)
  });
}
function qn(e) {
  return new e({
    type: "any"
  });
}
function Yn(e) {
  return new e({
    type: "unknown"
  });
}
function Xn(e, t) {
  return new e({
    type: "never",
    ...Vl(t)
  });
}
function ye(value_16, t) {
  return new Re({
    check: "less_than",
    ...Vl(t),
    value: value_16,
    inclusive: !1
  });
}
function Y(value_17, t) {
  return new Re({
    check: "less_than",
    ...Vl(t),
    value: value_17,
    inclusive: !0
  });
}
function ze(value_18, t) {
  return new je({
    check: "greater_than",
    ...Vl(t),
    value: value_18,
    inclusive: !1
  });
}
function X(value_19, t) {
  return new je({
    check: "greater_than",
    ...Vl(t),
    value: value_19,
    inclusive: !0
  });
}
function be(value_20, t) {
  return new jr({
    check: "multiple_of",
    ...Vl(t),
    value: value_20
  });
}
function ffn(maximum_2, t) {
  return new Fr({
    check: "max_length",
    ...Vl(t),
    maximum: maximum_2
  });
}
function R(minimum_3, t) {
  return new Mr({
    check: "min_length",
    ...Vl(t),
    minimum: minimum_3
  });
}
function ke(length, t) {
  return new Ur({
    check: "length_equals",
    ...Vl(t),
    length: length
  });
}
function et(pattern_3, t) {
  return new Br({
    check: "string_format",
    format: "regex",
    ...Vl(t),
    pattern: pattern_3
  });
}
function tt(e) {
  return new Vr({
    check: "string_format",
    format: "lowercase",
    ...Vl(e)
  });
}
function rt(e) {
  return new Kr({
    check: "string_format",
    format: "uppercase",
    ...Vl(e)
  });
}
function ot(includes, t) {
  return new Wr({
    check: "string_format",
    format: "includes",
    ...Vl(t),
    includes: includes
  });
}
function nt(prefix, t) {
  return new Gr({
    check: "string_format",
    format: "starts_with",
    ...Vl(t),
    prefix: prefix
  });
}
function it(suffix, t) {
  return new qr({
    check: "string_format",
    format: "ends_with",
    ...Vl(t),
    suffix: suffix
  });
}
function N(tx) {
  return new Yr({
    check: "overwrite",
    tx: tx
  });
}
function st(e) {
  return N(t => t.normalize(e));
}
function ct() {
  return N(e => e.trim());
}
function ut() {
  return N(e => e.toLowerCase());
}
function at() {
  return N(e => e.toUpperCase());
}
function lt() {
  return N(e => n4s(e));
}
function Hn(e, element, r) {
  return new e({
    type: "array",
    element: element,
    ...Vl(r)
  });
}
function Qn(e, fn_2, r) {
  let n = Vl(r);
  return n.abort ?? (n.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: fn_2,
    ...n
  });
}
function ei(e, fn_3, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: fn_3,
    ...Vl(r)
  });
}
function ti(e, t) {
  let r = Ns(n => (n.addIssue = i => {
    if (typeof i === "string") n.issues.push(k1t(i, n.value, r._zod.def));else {
      let s = i;
      if (s.fatal) s.continue = !1;
      if (s.code ?? (s.code = "custom"), !("input" in s)) s.input = n.value;
      s.inst ?? (s.inst = r), s.continue ?? (s.continue = !r._zod.def.abort), n.issues.push(k1t(s));
    }
  }, e(n.value, n)), t);
  return r;
}
function Ns(e, t) {
  let r = new MW({
    check: "custom",
    ...Vl(t)
  });
  return r._zod.check = e, r;
}
function H(e, ...t) {
  for (let r of t) for (let n of Reflect.ownKeys(r)) if (Object.prototype.propertyIsEnumerable.call(r, n)) ade(e, n, r[n]);
  return e;
}
function ee(e) {
  let target = e?.target ?? "draft-2020-12";
  if (target === "draft-4") target = "draft-04";
  if (target === "draft-7") target = "draft-07";
  return {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? __zod_globalRegistry,
    target: target,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {}),
    io: e?.io ?? "output",
    counter: 0,
    seen: new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: e?.external ?? void 0
  };
}
function Z(zodSchema, t, r, n, message) {
  let s = typeof t.unrepresentable === "function" ? t.unrepresentable({
    zodSchema: zodSchema,
    path: n.path,
    message: message
  }) : t.unrepresentable;
  if (s === "any") return !1;
  if (s === void 0 || s === "throw") throw Error(message);
  return Object.assign(r, s), !0;
}
function eC(e, t, r = {
  path: [],
  schemaPath: []
}) {
  var n;
  let def_2 = e._zod.def,
    s = t.seen.get(e);
  if (s) {
    if (s.count++, r.schemaPath.includes(e)) s.cycle = r.path;
    return s.schema;
  }
  let c = {
    schema: {},
    count: 1,
    cycle: void 0,
    path: r.path
  };
  t.seen.set(e, c), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
  let a = e._zod.toJSONSchema?.();
  if (a) c.schema = a;else {
    let f = {
      ...r,
      schemaPath: [...r.schemaPath, e],
      path: r.path
    };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, c.schema, f);else {
      let schema = c.schema,
        m = t.processors[def_2.type];
      if (!m) throw Error(`[toJSONSchema]: Non-representable type encountered: ${def_2.type}`);
      m(e, t, schema, f);
    }
    let parent_2 = e._zod.parent;
    if (parent_2) {
      if (!c.ref) c.ref = parent_2;
      eC(parent_2, t, f), t.seen.get(parent_2).isParent = !0;
    }
  }
  let l = t.metadataRegistry.get(e);
  if (l) H(c.schema, l);
  if (t.io === "input" && P(e)) delete c.schema.examples, delete c.schema.default;
  if (t.io === "input" && "_prefault" in c.schema) (n = c.schema).default ?? (n.default = c.schema._prefault);
  return delete c.schema._prefault, t.seen.get(e).schema;
}
function ri(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function te(e, t) {
  let r = e.seen.get(t);
  if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
  if (e.external && e.sharedDefsExtractedFor === e.external) return;
  let n = new Map();
  for (let c of e.seen.entries()) {
    let a = e.metadataRegistry.get(c[0])?.id;
    if (a) {
      let l = n.get(a);
      if (l && l !== c[0]) throw Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(a, c[0]);
    }
  }
  let i = c => {
      let a = e.target === "draft-2020-12" ? "$defs" : "definitions";
      if (e.external) {
        let d = e.external.registry.get(c[0])?.id,
          _ = e.external.uri ?? (h => h);
        if (d) return {
          ref: _(d)
        };
        let defId = c[1].defId ?? c[1].schema.id ?? `schema${e.counter++}`;
        return c[1].defId = defId, {
          defId: defId,
          ref: `${_("__shared")}#/${a}/${ri(defId)}`
        };
      }
      let ref = "#",
        p = `${ref}/${a}/`;
      if (c[1] === r && !c[1].schema.id) return {
        ref: ref
      };
      let defId_2 = c[1].schema.id ?? `__schema${e.counter++}`;
      return {
        defId: defId_2,
        ref: p + ri(defId_2)
      };
    },
    s = c => {
      if (c[1].schema.$ref) return;
      let a = c[1],
        {
          ref: ref_2,
          defId: defId_3
        } = i(c);
      if (a.def = {
        ...a.schema
      }, defId_3) a.defId = defId_3;
      let schema_2 = a.schema;
      for (let d in schema_2) delete schema_2[d];
      schema_2.$ref = ref_2;
    };
  if (e.cycles === "throw") for (let c of e.seen.entries()) {
    let a = c[1];
    if (a.cycle) throw Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
  }
  for (let c of e.seen.entries()) {
    let a = c[1];
    if (t === c[0]) {
      s(c);
      continue;
    }
    if (e.external) {
      let p = e.external.registry.get(c[0])?.id;
      if (t !== c[0] && p) {
        s(c);
        continue;
      }
    }
    if (e.metadataRegistry.get(c[0])?.id) {
      s(c);
      continue;
    }
    if (a.cycle) {
      s(c);
      continue;
    }
    if (a.count > 1) {
      if (e.reused === "ref") s(c);
    }
  }
  if (e.external) e.sharedDefsExtractedFor = e.external;
}
function ii(e) {
  let anyOf = e.anyOf;
  if (!Array.isArray(anyOf) || anyOf.length === 0 || e.type !== void 0) return;
  let r = [];
  for (let n of anyOf) {
    if (!n || typeof n !== "object") return;
    ii(n);
    let i = Object.keys(n);
    if (i.length !== 1 || i[0] !== "type") return;
    let s = n.type;
    for (let c of Array.isArray(s) ? s : [s]) {
      if (typeof c !== "string") return;
      if (!r.includes(c)) r.push(c);
    }
  }
  delete e.anyOf, e.type = r.length === 1 ? r[0] : r;
}
var si = new Set(["type", "properties", "required", "additionalProperties"]),
  oi = ["oneOf", "anyOf"];
function ni(e) {
  let additionalProperties = e.additionalProperties;
  if (additionalProperties === void 0 || additionalProperties === !1 || typeof additionalProperties !== "object" || additionalProperties === null) return null;
  return Object.keys(additionalProperties).length ? additionalProperties : null;
}
function pt(e) {
  let t = [];
  for (let s of e) {
    if (typeof s !== "object" || s.type !== "object") return null;
    for (let c in s) if (!si.has(c)) return null;
    t.push(s);
  }
  let properties = {},
    n = new Set();
  for (let s of t) {
    for (let c in s.properties) {
      if (Object.prototype.hasOwnProperty.call(properties, c)) continue;
      let allOf = [];
      for (let p of t) {
        let f = p.properties?.[c] ?? ni(p);
        if (f === null || f === void 0) continue;
        if (!allOf.some(item => JSON.stringify(item) === JSON.stringify(f))) allOf.push(f);
      }
      let l = allOf.length === 1 ? allOf[0] : pt(allOf) ?? {
        allOf: allOf
      };
      ade(properties, c, l);
    }
    for (let c of s.required ?? []) n.add(c);
  }
  let i = {
    type: "object",
    properties: properties
  };
  if (n.size) i.required = [...n];
  if (t.every(item => item.additionalProperties === !1)) i.additionalProperties = !1;else {
    let allOf_2 = [];
    for (let c of t) {
      let a = ni(c);
      if (a && !allOf_2.some(item => JSON.stringify(item) === JSON.stringify(a))) allOf_2.push(a);
    }
    if (allOf_2.length === 1) i.additionalProperties = allOf_2[0];else if (allOf_2.length > 1) i.additionalProperties = {
      allOf: allOf_2
    };
  }
  return i;
}
function Cs(e) {
  let allOf_3 = e.allOf;
  if (!Array.isArray(allOf_3) || allOf_3.length < 2) return;
  for (let i of si) if (i in e) return;
  let r = allOf_3.filter(item => oi.some(s => Array.isArray(item[s]))),
    n = null;
  if (!r.length) n = pt(allOf_3);else {
    let i = r[0],
      s = oi.find(item => Array.isArray(i[item]));
    if (Object.keys(i).length !== 1) return;
    let c = allOf_3.filter(item => item !== i),
      a = i[s].map(item => pt([...c, item]));
    if (a.some(item => !item)) return;
    n = {
      [s]: a
    };
  }
  if (!n) return;
  delete e.allOf, H(e, n);
}
function re(e, t) {
  let r = e.seen.get(t);
  if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
  let n = zodSchema_2 => {
    let l = e.seen.get(zodSchema_2);
    if (l.ref === null) return;
    let jsonSchema = l.def ?? l.schema,
      f = {
        ...jsonSchema
      },
      ref_3 = l.ref;
    if (l.ref = null, ref_3) {
      n(ref_3);
      let m = e.seen.get(ref_3),
        schema_3 = m.schema;
      if (schema_3.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0")) jsonSchema.allOf = jsonSchema.allOf ?? [], jsonSchema.allOf.push(schema_3);else H(jsonSchema, schema_3);
      if (H(jsonSchema, f), zodSchema_2._zod.parent === ref_3) for (let x in jsonSchema) {
        if (x === "$ref" || x === "allOf") continue;
        if (!(x in f)) delete jsonSchema[x];
      }
      if (schema_3.$ref && m.def) for (let x in jsonSchema) {
        if (x === "$ref" || x === "allOf") continue;
        if (x in m.def && JSON.stringify(jsonSchema[x]) === JSON.stringify(m.def[x])) delete jsonSchema[x];
      }
    }
    let parent_3 = zodSchema_2._zod.parent;
    if (parent_3 && parent_3 !== ref_3) {
      n(parent_3);
      let m = e.seen.get(parent_3);
      if (m?.schema.$ref) {
        if (jsonSchema.$ref = m.schema.$ref, m.def) for (let h in jsonSchema) {
          if (h === "$ref" || h === "allOf") continue;
          if (h in m.def && JSON.stringify(jsonSchema[h]) === JSON.stringify(m.def[h])) delete jsonSchema[h];
        }
      }
    }
    e.override({
      zodSchema: zodSchema_2,
      jsonSchema: jsonSchema,
      path: l.path ?? []
    });
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) {
    for (let a of [...e.seen.entries()].reverse()) n(a[0]);
    if (e.target !== "openapi-3.0") for (let a of e.seen.entries()) ii(a[1].def ?? a[1].schema);
    for (let a of e.deferred) a();
    if (e.intersections.length) {
      let a = new Map();
      for (let l of e.seen.values()) for (let p of [l.schema, l.def]) {
        let f = p?.allOf;
        if (!Array.isArray(f)) continue;
        let d = a.get(f);
        if (d) d.push(p);else a.set(f, [p]);
      }
      for (let l of e.intersections) for (let p of a.get(l) ?? []) Cs(p);
    }
  }
  let i = {};
  if (e.target === "draft-2020-12") i.$schema = "https://json-schema.org/draft/2020-12/schema";else if (e.target === "draft-07") i.$schema = "http://json-schema.org/draft-07/schema#";else if (e.target === "draft-04") i.$schema = "http://json-schema.org/draft-04/schema#";else if (e.target === "openapi-3.0") ;
  if (e.external?.uri) {
    let a = e.external.registry.get(t)?.id;
    if (!a) throw Error("Schema is missing an `id` property");
    i.$id = e.external.uri(a);
  }
  H(i, r.defId ? r.schema : r.def ?? r.schema);
  let s = e.metadataRegistry.get(t)?.id;
  if (s !== void 0 && i.id === s) delete i.id;
  let c = e.external?.defs ?? {};
  if (!e.external || e.sharedEmitDoneFor !== e.external) for (let a of e.seen.entries()) {
    let l = a[1];
    if (l.def && l.defId) {
      if (l.def.id === l.defId) delete l.def.id;
      ade(c, l.defId, l.def);
    }
  }
  if (e.external) e.sharedEmitDoneFor = e.external;
  if (e.external) ;else if (Object.keys(c).length > 0) if (e.target === "draft-2020-12") i.$defs = c;else i.definitions = c;
  try {
    let a = JSON.parse(JSON.stringify(i));
    return Object.defineProperty(a, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: Q(t, "input", e.processors),
          output: Q(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), a;
  } catch (error) {
    throw Error("Error converting schema to JSON.");
  }
}
function P(e, t) {
  let r = t ?? {
    seen: new Set()
  };
  if (r.seen.has(e)) return !1;
  r.seen.add(e);
  let def_3 = e._zod.def;
  if (def_3.type === "transform") return !0;
  if (def_3.type === "array") return P(def_3.element, r);
  if (def_3.type === "set") return P(def_3.valueType, r);
  if (def_3.type === "lazy") return P(def_3.getter(), r);
  if (def_3.type === "promise" || def_3.type === "optional" || def_3.type === "nonoptional" || def_3.type === "nullable" || def_3.type === "readonly" || def_3.type === "default" || def_3.type === "prefault" || def_3.type === "catch") return P(def_3.innerType, r);
  if (def_3.type === "intersection") return P(def_3.left, r) || P(def_3.right, r);
  if (def_3.type === "record" || def_3.type === "map") return P(def_3.keyType, r) || P(def_3.valueType, r);
  if (def_3.type === "pipe") {
    if (e._zod.traits.has("$ZodCodec")) return !0;
    return P(def_3.in, r) || P(def_3.out, r);
  }
  if (def_3.type === "object") {
    for (let i in def_3.shape) if (P(def_3.shape[i], r)) return !0;
    return !1;
  }
  if (def_3.type === "union") {
    for (let i of def_3.options) if (P(i, r)) return !0;
    return !1;
  }
  if (def_3.type === "tuple") {
    for (let i of def_3.items) if (P(i, r)) return !0;
    if (def_3.rest && P(def_3.rest, r)) return !0;
    return !1;
  }
  return !1;
}
var ci = (e, processors = {}) => r => {
    let n = ee({
      ...r,
      processors: processors
    });
    return eC(e, n), te(n, e), re(n, e);
  },
  Q = (e, io_2, processors_2 = {}) => n => {
    let {
        libraryOptions: libraryOptions,
        target: target_2
      } = n ?? {},
      c = ee({
        ...(libraryOptions ?? {}),
        target: target_2,
        io: io_2,
        processors: processors_2
      });
    return eC(e, c), te(c, e), re(c, e);
  };
var D = (e, t, r) => {
    if (e[t] === void 0 || r > e[t]) e[t] = r;
  },
  j = (e, t, r) => {
    if (e[t] === void 0 || r < e[t]) e[t] = r;
  },
  ui = (e, t) => {
    D(e, "minimum", t), j(e, "maximum", t);
  },
  di = (e, t) => {
    if (e.multipleOf ?? (e.multipleOf = []), !e.multipleOf.includes(t)) e.multipleOf.push(t);
  },
  mi = (e, t) => {
    e.patterns ?? (e.patterns = new Set()), e.patterns.add(t);
  },
  hi = (e, t) => {
    e.mime = e.mime ? e.mime.filter(item => t.includes(item)) : [...t];
  },
  _i = (e, t) => {
    if (e.format = t, t.includes("int")) e.isInt = !0;
  },
  ai = (e, t) => D(e, "minimum", t.minimum),
  li = (e, t) => j(e, "maximum", t.maximum),
  pi = e => (t, r) => {
    _i(t, r.format);
    let [n, i] = e[r.format];
    D(t, "minimum", n), j(t, "maximum", i);
  },
  Rs = {
    greater_than: (e, t) => D(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
    less_than: (e, t) => j(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
    multiple_of: (e, t) => di(e, t.value),
    number_format: pi(AUr),
    bigint_format: pi(QBo),
    min_length: ai,
    max_length: li,
    length_equals: (e, t) => ui(e, t.length),
    min_size: ai,
    max_size: li,
    size_equals: (e, t) => ui(e, t.size),
    string_format: (e, t) => {
      if (_i(e, t.format), t.pattern) mi(e, t.pattern);
      if (t.format === "base64" || t.format === "base64url") e.contentEncoding = t.format;
      if (t.local || t.precision === -1) e.laxFormat = !0;
    },
    mime_type: (e, t) => hi(e, t.mime)
  };
function S(e) {
  let t = {},
    def_4 = e._zod.def,
    n = e._zod.traits.has("$ZodCheck") ? [e, ...(def_4.checks ?? [])] : def_4.checks ?? [];
  for (let s of n) Rs[s._zod.def.check]?.(t, s._zod.def);
  let bag = e._zod.bag;
  if (bag.minimum !== void 0) D(t, "minimum", bag.minimum);
  if (bag.exclusiveMinimum !== void 0) D(t, "exclusiveMinimum", bag.exclusiveMinimum);
  if (bag.maximum !== void 0) j(t, "maximum", bag.maximum);
  if (bag.exclusiveMaximum !== void 0) j(t, "exclusiveMaximum", bag.exclusiveMaximum);
  if (bag.multipleOf !== void 0) di(t, bag.multipleOf);
  if (bag.format !== void 0) {
    if (t.format ?? (t.format = bag.format), bag.format.includes("int")) t.isInt = !0;
  }
  if (bag.mime) hi(t, bag.mime);
  for (let s of bag.patterns ?? []) mi(t, s);
  return t;
}
var Ds = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
  },
  js = new Map([[Ue, kr], [he, Zr]]),
  gi = e => js.get(e) ?? e,
  string = (e, t, r, n) => {
    let i = r;
    i.type = "string";
    let {
      minimum: minimum_4,
      maximum: maximum_3,
      format: format,
      patterns: patterns,
      contentEncoding: contentEncoding,
      laxFormat: laxFormat
    } = S(e);
    if (typeof minimum_4 === "number") i.minLength = minimum_4;
    if (typeof maximum_3 === "number") i.maxLength = maximum_3;
    if (format) {
      if (i.format = Ds[format] ?? format, i.format === "") delete i.format;
      if (format === "time" || laxFormat) delete i.format;
    }
    if (contentEncoding) i.contentEncoding = contentEncoding;
    if (patterns && patterns.size > 0) {
      let d = [...patterns].map(gi);
      if (d.length === 1) i.pattern = d[0].source;else if (d.length > 1) i.allOf = [...d.map(item => ({
        ...(t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? {
          type: "string"
        } : {}),
        pattern: item.source
      }))];
    }
  },
  number = (e, t, r, n) => {
    let i = r,
      {
        minimum: minimum_5,
        maximum: maximum_4,
        multipleOf: multipleOf,
        exclusiveMaximum: exclusiveMaximum,
        exclusiveMinimum: exclusiveMinimum,
        isInt: isInt
      } = S(e);
    i.type = isInt ? "integer" : "number";
    let d = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum_5 ?? Number.NEGATIVE_INFINITY),
      _ = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum_4 ?? Number.POSITIVE_INFINITY),
      m = t.target === "draft-04" || t.target === "openapi-3.0";
    if (d) {
      if (m) i.minimum = exclusiveMinimum, i.exclusiveMinimum = !0;else i.exclusiveMinimum = exclusiveMinimum;
    } else if (typeof minimum_5 === "number") i.minimum = minimum_5;
    if (_) {
      if (m) i.maximum = exclusiveMaximum, i.exclusiveMaximum = !0;else i.exclusiveMaximum = exclusiveMaximum;
    } else if (typeof maximum_4 === "number") i.maximum = maximum_4;
    if (multipleOf) {
      let h = new Set();
      for (let y of multipleOf) if (Number.isFinite(y) && y !== 0) h.add(Math.abs(y));else Z(e, t, i, n, `A multipleOf divisor of ${y} cannot be represented in JSON Schema`);
      let [g, ...x] = h;
      if (g !== void 0) i.multipleOf = g;
      if (x.length) i.allOf = [...(i.allOf ?? []), ...x.map(y => ({
        multipleOf: y
      }))];
    }
  },
  boolean = (e, t, r, n) => {
    r.type = "boolean";
  },
  bigint = (e, t, r, n) => {
    Z(e, t, r, n, "BigInt cannot be represented in JSON Schema");
  },
  symbol = (e, t, r, n) => {
    Z(e, t, r, n, "Symbols cannot be represented in JSON Schema");
  },
  xt = (e, t, r, n) => {
    if (t.target === "openapi-3.0") r.type = "string", r.nullable = !0, r.enum = [null];else r.type = "null";
  },
  undefined = (e, t, r, n) => {
    Z(e, t, r, n, "Undefined cannot be represented in JSON Schema");
  },
  yi = (e, t, r, n) => {
    Z(e, t, r, n, "Void cannot be represented in JSON Schema");
  },
  never = (e, t, r, n) => {
    r.not = {};
  },
  any = (e, t, r, n) => {},
  unknown = (e, t, r, n) => {},
  date = (e, t, r, n) => {
    Z(e, t, r, n, "Date cannot be represented in JSON Schema");
  },
  bt = (e, t, r, n) => {
    let def_5 = e._zod.def,
      s = $9n(def_5.entries);
    if (s.length === 0) {
      r.not = {};
      return;
    }
    if (s.every(item => typeof item === "number")) r.type = "number";
    if (s.every(item => typeof item === "string")) r.type = "string";
    r.enum = s;
  },
  literal = (e, t, r, n) => {
    let def_6 = e._zod.def;
    if (def_6.values.length === 0) {
      r.not = {};
      return;
    }
    let s = [];
    for (let c of def_6.values) if (c === void 0) {
      if (Z(e, t, r, n, "Literal `undefined` cannot be represented in JSON Schema")) return;
    } else if (typeof c === "bigint") {
      if (Z(e, t, r, n, "BigInt literals cannot be represented in JSON Schema")) return;
      s.push(Number(c));
    } else s.push(c);
    if (s.length === 0) ;else if (s.length === 1) {
      let c = s[0];
      if (r.type = c === null ? "null" : typeof c, t.target === "draft-04" || t.target === "openapi-3.0") r.enum = [c];else r.const = c;
    } else {
      if (s.every(item => typeof item === "number")) r.type = "number";
      if (s.every(item => typeof item === "string")) r.type = "string";
      if (s.every(item => typeof item === "boolean")) r.type = "boolean";
      if (s.every(item => item === null)) r.type = "null";
      r.enum = s;
    }
  },
  nan = (e, t, r, n) => {
    Z(e, t, r, n, "NaN cannot be represented in JSON Schema");
  },
  template_literal = (e, t, r, n) => {
    let i = r,
      pattern_4 = e._zod.pattern;
    if (!pattern_4) throw Error("Pattern not found in template literal");
    i.type = "string", i.pattern = pattern_4.source;
  },
  file = (e, t, r, n) => {
    let i = r;
    i.type = "string", i.format = "binary", i.contentEncoding = "binary";
    let {
      minimum: minimum_6,
      maximum: maximum_5,
      mime: mime
    } = S(e);
    if (minimum_6 !== void 0) i.minLength = minimum_6;
    if (maximum_5 !== void 0) i.maxLength = maximum_5;
    if (!mime) return;
    if (mime.length === 0) i.not = {};else if (mime.length === 1) i.contentMediaType = mime[0];else i.anyOf = mime.map(l => ({
      contentMediaType: l
    }));
  },
  success = (e, t, r, n) => {
    r.type = "boolean";
  },
  custom = (e, t, r, n) => {
    Z(e, t, r, n, "Custom types cannot be represented in JSON Schema");
  },
  wi = (e, t, r, n) => {
    Z(e, t, r, n, "Function types cannot be represented in JSON Schema");
  },
  transform = (e, t, r, n) => {
    Z(e, t, r, n, "Transforms cannot be represented in JSON Schema");
  },
  map = (e, t, r, n) => {
    Z(e, t, r, n, "Map cannot be represented in JSON Schema");
  },
  Si = (e, t, r, n) => {
    Z(e, t, r, n, "Set cannot be represented in JSON Schema");
  },
  array = (e, t, r, n) => {
    let i = r,
      def_7 = e._zod.def,
      {
        minimum: minimum_7,
        maximum: maximum_6
      } = S(e);
    if (typeof minimum_7 === "number") i.minItems = minimum_7;
    if (typeof maximum_6 === "number") i.maxItems = maximum_6;
    i.type = "array", i.items = eC(def_7.element, t, {
      ...n,
      path: [...n.path, "items"]
    });
  };
function L(e) {
  let def_8 = e._zod.def;
  if (def_8.type === "pipe" && def_8.in._zod.traits.has("$ZodTransform")) return L(def_8.out);
  if (def_8.type === "catch") return L(def_8.innerType);
  return e._zod.optin;
}
var object = (e, t, r, n) => {
    let i = r,
      def_9 = e._zod.def,
      shape_4 = def_9.shape;
    if (Object.getOwnPropertySymbols(shape_4).length && Z(e, t, i, n, "Symbol keys cannot be represented in JSON Schema")) return;
    i.type = "object", i.properties = {};
    for (let f in shape_4) ade(i.properties, f, eC(shape_4[f], t, {
      ...n,
      path: [...n.path, "properties", f]
    }));
    let l = new Set(Object.keys(shape_4)),
      p = new Set([...l].filter(item => {
        let d = def_9.shape[item];
        if (t.io === "input") return L(d) === void 0;else return d._zod.optout === void 0;
      }));
    if (p.size > 0) i.required = Array.from(p);
    if (def_9.catchall?._zod.def.type === "never") i.additionalProperties = !1;else if (!def_9.catchall) {
      if (t.io === "output") i.additionalProperties = !1;
    } else if (def_9.catchall) i.additionalProperties = eC(def_9.catchall, t, {
      ...n,
      path: [...n.path, "additionalProperties"]
    });
  },
  properties_2 = (e, t, r, n) => {
    let i = r,
      def_10 = e._zod.def;
    if (Object.getOwnPropertySymbols(def_10.shape).length && Z(e, t, i, n, "Symbol keys cannot be represented in JSON Schema")) return;
    if (t.io === "output") {
      for (let a in def_10.shape) if (P(def_10.shape[a]) && Z(e, t, i, n, `z.properties() returns its input, so the output of a transforming schema at key "${a}" cannot be represented in JSON Schema`)) return;
    }
    i.type = "object", i.properties = {};
    for (let a in def_10.shape) ade(i.properties, a, eC(def_10.shape[a], t, {
      ...n,
      path: [...n.path, "properties", a]
    }));
    let c = Object.keys(def_10.shape).filter(item => L(def_10.shape[item]) === void 0);
    if (c.length > 0) i.required = c;
  },
  union = (e, t, r, n) => {
    let def_11 = e._zod.def,
      s = def_11.inclusive === !1,
      c = def_11.options.map((item, index) => eC(item, t, {
        ...n,
        path: [...n.path, s ? "oneOf" : "anyOf", index]
      }));
    if (s) r.oneOf = c;else r.anyOf = c;
  },
  intersection = (e, t, r, n) => {
    let def_12 = e._zod.def,
      s = eC(def_12.left, t, {
        ...n,
        path: [...n.path, "allOf", 0]
      }),
      c = eC(def_12.right, t, {
        ...n,
        path: [...n.path, "allOf", 1]
      }),
      a = p => "allOf" in p && Object.keys(p).length === 1,
      l = [...(a(s) ? s.allOf : [s]), ...(a(c) ? c.allOf : [c])];
    r.allOf = l, t.intersections.push(l);
  },
  tuple = (e, t, r, n) => {
    let i = r,
      def_13 = e._zod.def;
    i.type = "array";
    let c = t.target === "draft-2020-12" ? "prefixItems" : "items",
      a = t.target === "draft-2020-12" ? "items" : t.target === "openapi-3.0" ? "items" : "additionalItems",
      anyOf_2 = def_13.items.map((item, index) => eC(item, t, {
        ...n,
        path: [...n.path, c, index]
      })),
      p = def_13.rest ? eC(def_13.rest, t, {
        ...n,
        path: [...n.path, a, ...(t.target === "openapi-3.0" ? [def_13.items.length] : [])]
      }) : null,
      f = def_13.items.length;
    while (f > 0) {
      let g = def_13.items[f - 1];
      if (!(t.io === "input" ? L(g) !== void 0 : g._zod.optout === "optional")) break;
      f--;
    }
    let d = def_13.items.length,
      _ = !def_13.rest;
    if (t.target === "draft-2020-12") {
      if (i.prefixItems = anyOf_2, _) i.items = !1;else if (p) i.items = p;
      if (f > 0) i.minItems = f;
      if (_) i.maxItems = d;
    } else if (t.target === "openapi-3.0") {
      if (i.items = {
        anyOf: anyOf_2
      }, p) i.items.anyOf.push(p);
      if (f > 0) i.minItems = f;
      if (_) i.maxItems = d;
    } else {
      if (i.items = anyOf_2, _) i.additionalItems = !1;else if (p) i.additionalItems = p;
      if (f > 0) i.minItems = f;
      if (_) i.maxItems = d;
    }
    let {
      minimum: minimum_8,
      maximum: maximum_7
    } = S(e);
    if (typeof minimum_8 === "number") i.minItems = minimum_8;
    if (typeof maximum_7 === "number") i.maxItems = maximum_7;
  };
function ft(e, t, r) {
  if (t.$ref) {
    if (r.has(t)) return t;
    r.add(t);
    let h = e.get(t)?.def;
    if (!h) return t;
    let g = ft(e, h, r);
    return g === h ? t : g;
  }
  for (let h of ["anyOf", "oneOf"]) {
    let g = t[h];
    if (!Array.isArray(g)) continue;
    let x = g.map(item => ft(e, item, r));
    if (x.some((item, index) => item !== g[index])) t = {
      ...t,
      [h]: x
    };
  }
  let n = Array.isArray(t.type) ? t.type : [t.type],
    i = !n.includes("string") && n.some(item => item === "number" || item === "integer"),
    s = t.enum ?? (t.const !== void 0 ? [t.const] : void 0);
  if (!i && !s?.some(h => typeof h === "number")) return t;
  let {
    minimum: minimum_9,
    maximum: maximum_8,
    exclusiveMinimum: exclusiveMinimum_2,
    exclusiveMaximum: exclusiveMaximum_2,
    multipleOf: multipleOf_2,
    format: format_2,
    id: id,
    ...m
  } = t;
  if (m.enum) m.enum = m.enum.map(item => typeof item === "number" ? String(item) : item);else if (typeof m.const === "number") m.const = String(m.const);
  if (!i) return m;
  if (m.type = "string", !s) m.pattern = (n.includes("number") ? V : Ne).source;
  return m;
}
var weakMap_2 = new WeakMap();
function Fs(e) {
  let t = new Map();
  for (let n of e.seen.values()) if (n.def && !t.has(n.schema)) t.set(n.schema, n);
  let r = new Map();
  for (let n of weakMap_2.get(e) ?? []) {
    let i = e.seen.get(n),
      s = (i?.def ?? i?.schema)?.propertyNames;
    if (!s || s === !0 || r.has(s)) continue;
    let c = ft(t, s, new Set());
    if (c !== s) r.set(s, c);
  }
  if (!r.size) return;
  for (let n of e.seen.values()) for (let i of [n.schema, n.def]) {
    let s = i && r.get(i.propertyNames);
    if (s) i.propertyNames = s;
  }
}
var record = (e, t, r, n) => {
    let i = r,
      def_14 = e._zod.def;
    i.type = "object";
    let keyType = def_14.keyType,
      patterns_2 = S(keyType).patterns;
    if (def_14.mode === "loose" && patterns_2 && patterns_2.size > 0) {
      let f = eC(def_14.valueType, t, {
        ...n,
        path: [...n.path, "patternProperties", "*"]
      });
      i.patternProperties = {};
      for (let d of patterns_2) ade(i.patternProperties, gi(d).source, f);
    } else {
      if (t.target === "draft-07" || t.target === "draft-2020-12") {
        i.propertyNames = eC(def_14.keyType, t, {
          ...n,
          path: [...n.path, "propertyNames"]
        });
        let f = weakMap_2.get(t);
        if (!f) f = [], weakMap_2.set(t, f), t.deferred.push(() => Fs(t));
        f.push(e);
      }
      i.additionalProperties = eC(def_14.valueType, t, {
        ...n,
        path: [...n.path, "additionalProperties"]
      });
    }
    let l = keyType._zod.values,
      p = t.io === "input" && L(def_14.valueType) !== void 0;
    if (l && !def_14.partial && !p) {
      let f = [...l].filter(item => typeof item === "string" || typeof item === "number");
      if (f.length > 0) i.required = f.map(String);
    }
  },
  nullable = (e, t, r, n) => {
    let def_15 = e._zod.def,
      s = eC(def_15.innerType, t, n),
      c = t.seen.get(e);
    if (t.target === "openapi-3.0") c.ref = def_15.innerType, r.nullable = !0;else r.anyOf = [s, {
      type: "null"
    }];
  },
  nonoptional = (e, t, r, n) => {
    let def_16 = e._zod.def;
    eC(def_16.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = def_16.innerType;
  },
  Ct = Symbol();
function Ii(e, t, r, n, i) {
  let s = !1,
    c = JSON.stringify(e, (a, l) => {
      if (typeof l !== "bigint") return l;
      return s = !0, null;
    });
  if (!s) return JSON.parse(c);
  return Z(t, r, n, i, "BigInt defaults cannot be represented in JSON Schema"), Ct;
}
var Rt = (e, t, r, n) => {
    let def_17 = e._zod.def;
    eC(def_17.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = def_17.innerType;
    let c = Ii(def_17.defaultValue, e, t, r, n);
    if (c !== Ct) r.default = c;
  },
  prefault = (e, t, r, n) => {
    let def_18 = e._zod.def;
    eC(def_18.innerType, t, n);
    let s = t.seen.get(e);
    if (s.ref = def_18.innerType, t.io !== "input") return;
    let c = Ii(def_18.defaultValue, e, t, r, n);
    if (c !== Ct) r._prefault = c;
  },
  jt = (e, t, r, n) => {
    let def_19 = e._zod.def;
    eC(def_19.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = def_19.innerType;
    let c;
    try {
      c = def_19.catchValue(void 0);
    } catch {
      Z(e, t, r, n, "Dynamic catch values are not supported in JSON Schema");
      return;
    }
    r.default = c;
  },
  pipe = (e, t, r, n) => {
    let def_20 = e._zod.def,
      s = def_20.in._zod.traits.has("$ZodTransform"),
      c = t.io === "input" ? s ? def_20.out : def_20.in : def_20.out;
    eC(c, t, n);
    let a = t.seen.get(e);
    a.ref = c;
  },
  readonly = (e, t, r, n) => {
    let def_21 = e._zod.def;
    eC(def_21.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = def_21.innerType, r.readOnly = !0;
  },
  promise = (e, t, r, n) => {
    let def_22 = e._zod.def;
    eC(def_22.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = def_22.innerType;
  },
  optional = (e, t, r, n) => {
    let def_23 = e._zod.def;
    eC(def_23.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = def_23.innerType;
  },
  lazy = (e, t, r, n) => {
    let innerType = e._zod.innerType;
    eC(innerType, t, n);
    let s = t.seen.get(e);
    s.ref = innerType;
  },
  processors_3 = {
    string: string,
    number: number,
    boolean: boolean,
    bigint: bigint,
    symbol: symbol,
    null: xt,
    undefined: undefined,
    void: yi,
    never: never,
    any: any,
    unknown: unknown,
    date: date,
    enum: bt,
    literal: literal,
    nan: nan,
    template_literal: template_literal,
    file: file,
    success: success,
    custom: custom,
    properties: properties_2,
    function: wi,
    transform: transform,
    map: map,
    set: Si,
    array: array,
    object: object,
    union: union,
    intersection: intersection,
    tuple: tuple,
    record: record,
    nullable: nullable,
    nonoptional: nonoptional,
    default: Rt,
    prefault: prefault,
    catch: jt,
    pipe: pipe,
    readonly: readonly,
    promise: promise,
    optional: optional,
    lazy: lazy
  };
function U7e(e, t) {
  if ("_idmap" in e) {
    let registry = e,
      i = ee({
        ...t,
        processors: processors_3
      }),
      defs = {};
    for (let l of registry._idmap.entries()) {
      let [p, f] = l;
      eC(f, i);
    }
    let schemas = {},
      a = {
        registry: registry,
        uri: t?.uri,
        defs: defs
      };
    i.external = a;
    for (let l of registry._idmap.entries()) {
      let [p, f] = l;
      te(i, f), ade(schemas, p, re(i, f));
    }
    if (Object.keys(defs).length > 0) {
      let l = i.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [l]: defs
      };
    }
    return {
      schemas: schemas
    };
  }
  let r = ee({
    ...t,
    processors: processors_3
  });
  return eC(e, r), te(r, e), re(r, e);
}
var weakSet_2 = new WeakSet([Object.prototype, Error.prototype]);
function we(e, t, r) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    get() {
      let value_21 = r(this);
      return Object.defineProperty(this, t, {
        value: value_21,
        configurable: !0,
        writable: !0
      }), value_21;
    },
    set(value_22) {
      Object.defineProperty(this, t, {
        value: value_22,
        configurable: !0,
        writable: !0
      });
    }
  });
}
var Ei = (e, t) => {
    Gt.init(e, t), e.name = "ZodError";
    let r = Object.getPrototypeOf(e);
    if (weakSet_2.has(r)) return;
    weakSet_2.add(r), we(r, "format", n => i => Xt(n, i)), we(r, "flatten", n => i => Yt(n, i)), we(r, "addIssue", n => i => {
      n.issues.push(i), n.message = JSON.stringify(n.issues, U9n, 2);
    }), we(r, "addIssues", n => i => {
      n.issues.push(...i), n.message = JSON.stringify(n.issues, U9n, 2);
    }), Object.defineProperty(r, "isEmpty", {
      configurable: !0,
      enumerable: !1,
      get() {
        return this.issues.length === 0;
      }
    });
  },
  Xx = gr("ZodError", Ei),
  I = gr("ZodError", Ei, void 0, {
    Parent: Error
  });
var Ti = ce(I),
  Ni = ue(I),
  CUr = B(I),
  Ci = ae(I),
  Ri = er(I),
  Di = tr(I),
  ji = rr(I),
  Li = or(I),
  Fi = nr(I),
  Mi = ir(I),
  Ui = sr(I),
  Ji = cr(I);
function Gs() {
  if (!QJ.localeError) ZJ(qe());
}
function ie() {
  if (!QJ.memoizer) ZJ({
    memoizer: vn()
  });
}
var rE = gr("ZodType", (e, t) => (Gs(), dk.init(e, t), e.def = t, e.type = t.type, e), {
    check(...e) {
      let def_24 = this.def;
      return this.clone(Ahe(def_24, {
        checks: [...(def_24.checks ?? []), ...e.map(r => typeof r === "function" ? {
          _zod: {
            check: r,
            def: {
              check: "custom"
            },
            onattach: []
          }
        } : r)]
      }), {
        parent: !0
      });
    },
    with(...e) {
      return this.check(...e);
    },
    clone(e, t) {
      return $ze(this, e, t);
    },
    brand() {
      return this;
    },
    register(e, t) {
      return e.add(this, t), this;
    },
    refine(e, t) {
      return this.check(Tc(e, t));
    },
    superRefine(e, t) {
      return this.check(Nc(e, t));
    },
    overwrite(e) {
      return this.check(N(e));
    },
    optional() {
      return na(this);
    },
    exactOptional() {
      return $c(this);
    },
    nullable() {
      return Bi(this);
    },
    nullish() {
      return na(Bi(this));
    },
    nonoptional(e) {
      return Pc(this, e);
    },
    array() {
      return T(this);
    },
    or(e) {
      return $e([this, e]);
    },
    and(e) {
      return Che(this, e);
    },
    transform(e) {
      return Vi(this, Hi(e));
    },
    default(e) {
      return kc(this, e);
    },
    prefault(e) {
      return wc(this, e);
    },
    catch(e) {
      return Sc(this, e);
    },
    pipe(e) {
      return Vi(this, e);
    },
    readonly() {
      return Ac(this);
    },
    describe(description) {
      let t = this.clone();
      return __zod_globalRegistry.add(t, {
        description: description
      }), t;
    },
    meta(...e) {
      if (e.length === 0) return __zod_globalRegistry.get(this);
      let t = this.clone();
      return __zod_globalRegistry.add(t, e[0]), t;
    },
    isOptional() {
      return this.safeParse(void 0).success;
    },
    isNullable() {
      return this.safeParse(null).success;
    },
    apply(e, ...t) {
      return t.length === 0 ? e(this) : e(this, ...t);
    },
    get "~standard"() {
      return e1o(this, "~standard", {
        ...Me(this),
        jsonSchema: {
          input: Q(this, "input"),
          output: Q(this, "output")
        }
      });
    },
    set "~standard"(e) {
      B7e(this, "~standard", e);
    },
    parse: function callee(t, r) {
      return Ti(this, t, r, {
        callee: callee
      });
    },
    parseAsync: async function callee_2(t, r) {
      return await Ni(this, t, r, {
        callee: callee_2
      });
    },
    safeParse(e, t) {
      return CUr(this, e, t);
    },
    async safeParseAsync(e, t) {
      return Ci(this, e, t);
    },
    get spa() {
      return this?.safeParseAsync;
    },
    set spa(e) {
      B7e(this, "spa", e);
    },
    validate(e, t) {
      return Oe(this, e, t);
    },
    validateAsync(e, t) {
      return Ae(this, e, t);
    },
    encode: function callee_3(t, r) {
      return Ri(this, t, r, {
        callee: callee_3
      });
    },
    decode: function callee_4(t, r) {
      return Di(this, t, r, {
        callee: callee_4
      });
    },
    encodeAsync: async function callee_5(t, r) {
      return await ji(this, t, r, {
        callee: callee_5
      });
    },
    decodeAsync: async function callee_6(t, r) {
      return await Li(this, t, r, {
        callee: callee_6
      });
    },
    safeEncode(e, t) {
      return Fi(this, e, t);
    },
    safeDecode(e, t) {
      return Mi(this, e, t);
    },
    async safeEncodeAsync(e, t) {
      return Ui(this, e, t);
    },
    async safeDecodeAsync(e, t) {
      return Ji(this, e, t);
    },
    toJSONSchema(e) {
      return ci(this, {})(e);
    },
    get description() {
      return __zod_globalRegistry.get(this)?.description;
    },
    get _def() {
      return this._zod.def;
    }
  }),
  Ki = gr("_ZodString", (e, t) => {
    me.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => string(e, r, n, i);
  }, d4s({
    format: e => S(e).format ?? null,
    minLength: e => S(e).minimum ?? null,
    maxLength: e => S(e).maximum ?? null
  }, {
    regex(...e) {
      return this.check(et(...e));
    },
    includes(...e) {
      return this.check(ot(...e));
    },
    startsWith(...e) {
      return this.check(nt(...e));
    },
    endsWith(...e) {
      return this.check(it(...e));
    },
    min(...e) {
      return this.check(R(...e));
    },
    max(...e) {
      return this.check(ffn(...e));
    },
    length(...e) {
      return this.check(ke(...e));
    },
    nonempty(...e) {
      return this.check(R(1, ...e));
    },
    lowercase(e) {
      return this.check(tt(e));
    },
    uppercase(e) {
      return this.check(rt(e));
    },
    trim() {
      return this.check(ct());
    },
    normalize(...e) {
      return this.check(st(...e));
    },
    toLowerCase() {
      return this.check(ut());
    },
    toUpperCase() {
      return this.check(at());
    },
    slugify() {
      return this.check(lt());
    }
  })),
  mfn = gr("ZodString", (e, t) => {
    me.init(e, t), Ki.init(e, t);
  }, {
    email(e) {
      return this.check(Ye(Wi, e));
    },
    url(e) {
      return this.check(He(Gi, e));
    },
    jwt(e) {
      return this.check(Fn(pc, e));
    },
    emoji(e) {
      return this.check(Pn(Hs, e));
    },
    guid(e) {
      return this.check(bn(Xs, e));
    },
    uuid(e) {
      return this.check(Xe(ne, e));
    },
    uuidv4(e) {
      return this.check(kn(ne, e));
    },
    uuidv6(e) {
      return this.check(Zn(ne, e));
    },
    uuidv7(e) {
      return this.check(wn(ne, e));
    },
    nanoid(e) {
      return this.check(Sn(Qs, e));
    },
    cuid(e) {
      return this.check(In(ec, e));
    },
    cuid2(e) {
      return this.check(On(tc, e));
    },
    ulid(e) {
      return this.check(An(rc, e));
    },
    base64(e) {
      return this.check(Qe(qi, e));
    },
    base64url(e) {
      return this.check(jn(ac, e));
    },
    xid(e) {
      return this.check(En(oc, e));
    },
    ksuid(e) {
      return this.check(Tn(nc, e));
    },
    ipv4(e) {
      return this.check(Nn(ic, e));
    },
    ipv6(e) {
      return this.check(Cn(sc, e));
    },
    cidrv4(e) {
      return this.check(Rn(cc, e));
    },
    cidrv6(e) {
      return this.check(Dn(uc, e));
    },
    e164(e) {
      return this.check(Ln(lc, e));
    },
    datetime(e) {
      return this.check(EUr(zBo, e));
    },
    date(e) {
      return this.check(TUr(GBo, e));
    },
    time(e) {
      return this.check(Mn(qs, e));
    },
    duration(e) {
      return this.check(Un(Ys, e));
    }
  });
function o(e) {
  return zn(mfn, e);
}
var k = gr("ZodStringFormat", (e, t) => {
    b.init(e, t), Ki.init(e, t);
  }),
  zBo = gr("ZodISODateTime", (e, t) => {
    Po.init(e, t), k.init(e, t);
  }),
  GBo = gr("ZodISODate", (e, t) => {
    So.init(e, t), k.init(e, t);
  }),
  qs = gr("ZodISOTime", (e, t) => {
    Io.init(e, t), k.init(e, t);
  }),
  Ys = gr("ZodISODuration", (e, t) => {
    Oo.init(e, t), k.init(e, t);
  }),
  Wi = gr("ZodEmail", (e, t) => {
    _o.init(e, t), k.init(e, t);
  });
function XKs(e) {
  return Ye(Wi, e);
}
var Xs = gr("ZodGUID", (e, t) => {
  mo.init(e, t), k.init(e, t);
});
var ne = gr("ZodUUID", (e, t) => {
  ho.init(e, t), k.init(e, t);
});
function L9n(e) {
  return Xe(ne, e);
}
var Gi = gr("ZodURL", (e, t) => {
  vo.init(e, t), k.init(e, t);
});
function b1t(e) {
  return He(Gi, e);
}
var Hs = gr("ZodEmoji", (e, t) => {
  yo.init(e, t), k.init(e, t);
});
var Qs = gr("ZodNanoID", (e, t) => {
  $o.init(e, t), k.init(e, t);
});
var ec = gr("ZodCUID", (e, t) => {
  zo.init(e, t), k.init(e, t);
});
var tc = gr("ZodCUID2", (e, t) => {
  bo.init(e, t), k.init(e, t);
});
var rc = gr("ZodULID", (e, t) => {
  ko.init(e, t), k.init(e, t);
});
var oc = gr("ZodXID", (e, t) => {
  Zo.init(e, t), k.init(e, t);
});
var nc = gr("ZodKSUID", (e, t) => {
  wo.init(e, t), k.init(e, t);
});
var ic = gr("ZodIPv4", (e, t) => {
  Ao.init(e, t), k.init(e, t);
});
var sc = gr("ZodIPv6", (e, t) => {
  To.init(e, t), k.init(e, t);
});
var cc = gr("ZodCIDRv4", (e, t) => {
  No.init(e, t), k.init(e, t);
});
var uc = gr("ZodCIDRv6", (e, t) => {
  Co.init(e, t), k.init(e, t);
});
var qi = gr("ZodBase64", (e, t) => {
  Do.init(e, t), k.init(e, t);
});
function JKs(e) {
  return Qe(qi, e);
}
var ac = gr("ZodBase64URL", (e, t) => {
  jo.init(e, t), k.init(e, t);
});
var lc = gr("ZodE164", (e, t) => {
  Lo.init(e, t), k.init(e, t);
});
var pc = gr("ZodJWT", (e, t) => {
  Fo.init(e, t), k.init(e, t);
});
var S1t = gr("ZodNumber", (e, t) => {
  Je.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => number(e, r, n, i), e.isFinite = !0;
}, d4s({
  minValue: e => {
    let {
      minimum: minimum_10,
      exclusiveMinimum: exclusiveMinimum_3
    } = S(e);
    return Math.max(minimum_10 ?? Number.NEGATIVE_INFINITY, exclusiveMinimum_3 ?? Number.NEGATIVE_INFINITY);
  },
  maxValue: e => {
    let {
      maximum: maximum_9,
      exclusiveMaximum: exclusiveMaximum_3
    } = S(e);
    return Math.min(maximum_9 ?? Number.POSITIVE_INFINITY, exclusiveMaximum_3 ?? Number.POSITIVE_INFINITY);
  },
  isInt: e => {
    let {
      isInt: isInt_2,
      multipleOf: multipleOf_3
    } = S(e);
    return !!isInt_2 || !!multipleOf_3?.some(Number.isSafeInteger);
  },
  format: e => S(e).format ?? null
}, {
  gt(e, t) {
    return this.check(ze(e, t));
  },
  gte(e, t) {
    return this.check(X(e, t));
  },
  min(e, t) {
    return this.check(X(e, t));
  },
  lt(e, t) {
    return this.check(ye(e, t));
  },
  lte(e, t) {
    return this.check(Y(e, t));
  },
  max(e, t) {
    return this.check(Y(e, t));
  },
  int(e) {
    return this.check(Bu(e));
  },
  safe(e) {
    return this.check(Bu(e));
  },
  positive(e) {
    return this.check(ze(0, e));
  },
  nonnegative(e) {
    return this.check(X(0, e));
  },
  negative(e) {
    return this.check(ye(0, e));
  },
  nonpositive(e) {
    return this.check(Y(0, e));
  },
  multipleOf(e, t) {
    return this.check(be(e, t));
  },
  step(e, t) {
    return this.check(be(e, t));
  },
  finite() {
    return this;
  }
}));
function v(e) {
  return Jn(S1t, e);
}
var Yi = gr("ZodNumberFormat", (e, t) => {
  Mo.init(e, t), S1t.init(e, t);
});
function Bu(e) {
  return Bn(Yi, e);
}
function QKs(e) {
  return Vn(Yi, e);
}
var gfn = gr("ZodBoolean", (e, t) => {
  Uo.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => boolean(e, r, n, i);
});
function M(e) {
  return Kn(gfn, e);
}
var fc = gr("ZodUndefined", (e, t) => {
  Jo.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => undefined(e, r, n, i);
});
function sI(e) {
  return Wn(fc, e);
}
var dc = gr("ZodNull", (e, t) => {
  Bo.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => xt(e, r, n, i);
});
function Sf(e) {
  return Gn(dc, e);
}
var mc = gr("ZodAny", (e, t) => {
  Vo.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => any(e, r, n, i);
});
function JJ() {
  return qn(mc);
}
var hc = gr("ZodUnknown", (e, t) => {
  Ko.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => unknown(e, r, n, i);
});
function oe() {
  return Yn(hc);
}
var _c = gr("ZodNever", (e, t) => {
  Wo.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => never(e, r, n, i);
});
function w1t(e) {
  return Xn(_c, e);
}
var VBo = gr("ZodArray", (e, t) => {
  ie(), Go.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => array(e, r, n, i), e.element = t.element;
}, {
  min(e, t) {
    return this.check(R(e, t));
  },
  nonempty(e) {
    return this.check(R(1, e));
  },
  max(e, t) {
    return this.check(ffn(e, t));
  },
  length(e, t) {
    return this.check(ke(e, t));
  },
  unwrap() {
    return this.element;
  }
});
function T(e, t) {
  return Hn(VBo, e, t);
}
var U0e = gr("ZodObject", (e, t) => {
  ie(), Xo.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => object(e, r, n, i), X7s(e, "shape", r => r._zod.def.shape, !1);
}, {
  keyof() {
    return U(Object.keys(this._zod.def.shape));
  },
  catchall(catchall_3) {
    return this.clone(Ahe(this._zod.def, {
      catchall: catchall_3
    }));
  },
  passthrough() {
    return this.clone(Ahe(this._zod.def, {
      catchall: oe()
    }));
  },
  loose() {
    return this.clone(Ahe(this._zod.def, {
      catchall: oe()
    }));
  },
  strict() {
    return this.clone(Ahe(this._zod.def, {
      catchall: w1t()
    }));
  },
  strip() {
    return this.clone(Ahe(this._zod.def, {
      catchall: void 0
    }));
  },
  extend(e) {
    return V7s(this, e);
  },
  safeExtend(e) {
    return q7s(this, e);
  },
  merge(e) {
    return K7s(this, e);
  },
  pick(e) {
    return z7s(this, e);
  },
  omit(e) {
    return G7s(this, e);
  },
  partial(...e) {
    return i4s(F9n, this, e[0]);
  },
  exactPartial(...e) {
    return i4s(Qi, this, e[0], "exactPartial");
  },
  required(...e) {
    return Y7s(es, this, e[0]);
  }
});
function u(e, t) {
  let r = {
    type: "object",
    shape: e ?? {},
    ...Vl(t)
  };
  return new U0e(r);
}
function De(shape_5, t) {
  return new U0e({
    type: "object",
    shape: shape_5,
    catchall: w1t(),
    ...Vl(t)
  });
}
function _t(shape_6, t) {
  return new U0e({
    type: "object",
    shape: shape_6,
    catchall: oe(),
    ...Vl(t)
  });
}
var Xi = gr("ZodUnion", (e, t) => {
  Be.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => union(e, r, n, i), e.options = t.options;
});
function $e(options, t) {
  return new Xi({
    type: "union",
    options: options,
    ...Vl(t)
  });
}
var gc = gr("ZodDiscriminatedUnion", (e, t) => {
  Xi.init(e, t), Ho.init(e, t);
});
function Jr(discriminator, options_2, r) {
  return new gc({
    type: "union",
    options: options_2,
    discriminator: discriminator,
    ...Vl(r)
  });
}
var xc = gr("ZodIntersection", (e, t) => {
  Qo.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => intersection(e, r, n, i);
});
function Che(left, right) {
  return new xc({
    type: "intersection",
    left: left,
    right: right
  });
}
var vc = gr("ZodTuple", (e, t) => {
  ie(), en.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => tuple(e, r, n, i);
}, {
  rest(rest) {
    return this.clone({
      ...this._zod.def,
      rest: rest
    });
  },
  partial() {
    let def_25 = this._zod.def;
    if (def_25.checks?.length) throw Error(".partial() cannot be used on tuple schemas containing refinements");
    return this.clone({
      ...def_25,
      items: def_25.items.map(t => new F9n({
        type: "optional",
        innerType: t
      }))
    });
  }
});
function oE(items_2, t, r) {
  let n = t instanceof dk,
    i = n ? r : t;
  return new vc({
    type: "tuple",
    items: items_2,
    rest: n ? t : null,
    ...Vl(i)
  });
}
var Jt = gr("ZodRecord", (e, t) => {
  ie(), tn.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => record(e, r, n, i), e.keyType = t.keyType, e.valueType = t.valueType;
});
function fe(e, valueType, r) {
  if (!valueType || !valueType._zod) return new Jt({
    type: "record",
    keyType: o(),
    valueType: e,
    ...Vl(valueType)
  });
  return new Jt({
    type: "record",
    keyType: e,
    valueType: valueType,
    ...Vl(r)
  });
}
function Rhe(keyType_2, valueType_2, r) {
  return new Jt({
    type: "record",
    keyType: keyType_2,
    valueType: valueType_2,
    ...Vl(r),
    partial: !0
  });
}
var N9n = gr("ZodEnum", (e, t) => {
  rn.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (n, i, s) => bt(e, n, i, s), e.enum = t.entries, e.options = [...e._zod.values];
  let r = new Set(Object.keys(t.entries));
  e.extract = (n, i) => {
    let entries = {};
    for (let c of n) if (r.has(c)) entries[c] = t.entries[c];else throw Error(`Key ${c} not found in enum`);
    return new N9n({
      ...t,
      checks: [],
      ...Vl(i),
      entries: entries
    });
  }, e.exclude = (n, i) => {
    let entries_2 = {
      ...t.entries
    };
    for (let c of n) if (r.has(c)) delete entries_2[c];else throw Error(`Key ${c} not found in enum`);
    return new N9n({
      ...t,
      checks: [],
      ...Vl(i),
      entries: entries_2
    });
  };
});
function U(e, t) {
  let entries_3 = Array.isArray(e) ? Object.fromEntries(e.map(item => [item, item])) : e;
  return new N9n({
    type: "enum",
    entries: entries_3,
    ...Vl(t)
  });
}
var qBo = gr("ZodLiteral", (e, t) => {
  on.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => literal(e, r, n, i), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function C(e, t) {
  return new qBo({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...Vl(t)
  });
}
var yc = gr("ZodTransform", (e, t) => {
  ie(), nn.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => transform(e, r, n, i), e._zod.parse = (r, n) => {
    if (n.direction === "backward") throw new W9n(e.constructor.name);
    r.addIssue = s => {
      if (typeof s === "string") r.issues.push(k1t(s, r.value, t));else {
        let c = s;
        if (c.fatal) c.continue = !1;
        if (c.code ?? (c.code = "custom"), !("input" in c)) c.input = r.value;
        c.inst ?? (c.inst = e), r.issues.push(k1t(c));
      }
    };
    let i = t.transform(r.value, r);
    if (i instanceof Promise) return i.then(s => (r.value = s, r));
    return r.value = i, r;
  };
});
function Hi(transform_2) {
  return new yc({
    type: "transform",
    transform: transform_2
  });
}
var F9n = gr("ZodOptional", (e, t) => {
  Ve.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => optional(e, r, n, i), e.unwrap = () => e._zod.def.innerType;
});
function na(innerType_2) {
  return new F9n({
    type: "optional",
    innerType: innerType_2
  });
}
var Qi = gr("ZodExactOptional", (e, t) => {
  sn.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => optional(e, r, n, i), e.unwrap = () => e._zod.def.innerType;
});
function $c(innerType_3) {
  return new Qi({
    type: "optional",
    innerType: innerType_3
  });
}
var zc = gr("ZodNullable", (e, t) => {
  cn.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => nullable(e, r, n, i), e.unwrap = () => e._zod.def.innerType;
});
function Bi(innerType_4) {
  return new zc({
    type: "nullable",
    innerType: innerType_4
  });
}
var bc = gr("ZodDefault", (e, t) => {
  un.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => Rt(e, r, n, i), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function kc(innerType_5, t) {
  return new bc({
    type: "default",
    innerType: innerType_5,
    get defaultValue() {
      return typeof t === "function" ? t() : XBo(t);
    }
  });
}
var Zc = gr("ZodPrefault", (e, t) => {
  an.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => prefault(e, r, n, i), e.unwrap = () => e._zod.def.innerType;
});
function wc(innerType_6, t) {
  return new Zc({
    type: "prefault",
    innerType: innerType_6,
    get defaultValue() {
      return typeof t === "function" ? t() : XBo(t);
    }
  });
}
var es = gr("ZodNonOptional", (e, t) => {
  ln.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => nonoptional(e, r, n, i), e.unwrap = () => e._zod.def.innerType;
});
function Pc(innerType_7, t) {
  return new es({
    type: "nonoptional",
    innerType: innerType_7,
    ...Vl(t)
  });
}
var RUr = gr("ZodCatch", (e, t) => {
  pn.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => jt(e, r, n, i), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Sc(innerType_8, t) {
  return new RUr({
    type: "catch",
    innerType: innerType_8,
    catchValue: typeof t === "function" ? t : c4s(t)
  });
}
var H9n = gr("ZodPipe", (e, t) => {
  Ke.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => pipe(e, r, n, i), e.in = t.in, e.out = t.out;
});
function Vi(e, out) {
  return new H9n({
    type: "pipe",
    in: e,
    out: out
  });
}
var Ic = gr("ZodPreprocess", (e, t) => {
    H9n.init(e, t), fn.init(e, t);
  }),
  Oc = gr("ZodReadonly", (e, t) => {
    dn.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => readonly(e, r, n, i), e.unwrap = () => e._zod.def.innerType;
  });
function Ac(innerType_9) {
  return new Oc({
    type: "readonly",
    innerType: innerType_9
  });
}
var Ec = gr("ZodLazy", (e, t) => {
  kUr.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => lazy(e, r, n, i), e.unwrap = () => e._zod.def.getter();
});
function sT(getter) {
  return new Ec({
    type: "lazy",
    getter: getter
  });
}
var ts = gr("ZodCustom", (e, t) => {
  mn.init(e, t), rE.init(e, t), e._zod.processJSONSchema = (r, n, i) => custom(e, r, n, i);
});
function Jc(e, t) {
  return Qn(ts, e ?? (() => !0), t);
}
function Tc(e, t = {}) {
  return ei(ts, e, t);
}
function Nc(e, t) {
  return ti(e, t);
}
function wa(e, out_2) {
  return new Ic({
    type: "pipe",
    in: Hi(e),
    out: out_2
  });
}
export { WBo, MW, dk, kUr, __zod_globalRegistry as $7e, VKs, qKs, EUr, TUr, KKs, YKs, ffn, eC, U7e, Xx, CUr, rE, mfn, o, zBo, GBo, XKs, L9n, b1t, JKs, S1t, v, Bu, QKs, gfn, M, sI, Sf, JJ, oe, w1t, VBo, T, U0e, u, De, _t, $e, Jr, Che, oE, fe, Rhe, N9n, U, qBo, C, F9n, na, RUr, H9n, sT, Jc, wa };