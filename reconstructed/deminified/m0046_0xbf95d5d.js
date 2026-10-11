// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Gn, CUe, Ngn, mBt, oj, bYn, Hgn, Fgn, SYn, gBt, KFo, Bg, N8e, uWr, YFo, pWr, hBt, XFo, Aft, fWr, JFo, H8e, i_e, Sa, QFo, ZFo, lVo, cVo, dVo, uVo, pVo, fVo, mVo, xft, e$o, GAe, a_e, wYn, Pft } from "B:/~BUN/root/chunk-yvjds69w.js";
var fr = (e, value) => {
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
      value: e._zod,
      enumerable: !1
    }), Object.defineProperty(e, "issues", {
      value: value,
      enumerable: !1
    }), e.message = JSON.stringify(value, Hgn, 2), Object.defineProperty(e, "toString", {
      value: () => e.message,
      enumerable: !1
    });
  },
  K = Gn("$ZodError", fr),
  ce = Gn("$ZodError", fr, {
    Parent: Error
  });
function hr(e, r = t => t.message) {
  let fieldErrors = {},
    formErrors = [];
  for (let s of e.issues) if (s.path.length > 0) fieldErrors[s.path[0]] = fieldErrors[s.path[0]] || [], fieldErrors[s.path[0]].push(r(s));else formErrors.push(r(s));
  return {
    formErrors: formErrors,
    fieldErrors: fieldErrors
  };
}
function _r(e, r = t => t.message) {
  let t = {
      _errors: []
    },
    n = (s, i = []) => {
      for (let c of s.issues) if (c.code === "invalid_union" && c.errors.length) c.errors.map(a => n({
        issues: a
      }, [...i, ...c.path]));else if (c.code === "invalid_key") n({
        issues: c.issues
      }, [...i, ...c.path]);else if (c.code === "invalid_element") n({
        issues: c.issues
      }, [...i, ...c.path]);else {
        let a = [...i, ...c.path];
        if (a.length === 0) t._errors.push(r(c));else {
          let p = t,
            l = 0;
          while (l < a.length) {
            let m = a[l];
            if (l !== a.length - 1) p[m] = p[m] || {
              _errors: []
            };else p[m] = p[m] || {
              _errors: []
            }, p[m]._errors.push(r(c));
            p = p[m], l++;
          }
        }
      }
    };
  return n(e), t;
}
var G = e => (r, value_2, n, s) => {
  let i = n ? {
      ...n,
      async: !1
    } : {
      async: !1
    },
    c = r._zod.run({
      value: value_2,
      issues: []
    }, i);
  if (c instanceof Promise) throw new CUe();
  if (c.issues.length) {
    let a = new (s?.Err ?? e)(c.issues.map(item => a_e(item, i, oj())));
    throw pWr(a, s?.callee), a;
  }
  return c.value;
};
var Y = e => async (r, value_3, n, s) => {
  let i = n ? {
      ...n,
      async: !0
    } : {
      async: !0
    },
    c = r._zod.run({
      value: value_3,
      issues: []
    }, i);
  if (c instanceof Promise) c = await c;
  if (c.issues.length) {
    let a = new (s?.Err ?? e)(c.issues.map(item => a_e(item, i, oj())));
    throw pWr(a, s?.callee), a;
  }
  return c.value;
};
var N = e => (r, value_4, n) => {
    let s = n ? {
        ...n,
        async: !1
      } : {
        async: !1
      },
      i = r._zod.run({
        value: value_4,
        issues: []
      }, s);
    if (i instanceof Promise) throw new CUe();
    return i.issues.length ? {
      success: !1,
      error: new (e ?? K)(i.issues.map(item => a_e(item, s, oj())))
    } : {
      success: !0,
      data: i.value
    };
  },
  Mgn = N(ce),
  R = e => async (r, value_5, n) => {
    let s = n ? {
        ...n,
        async: !0
      } : {
        async: !0
      },
      i = r._zod.run({
        value: value_5,
        issues: []
      }, s);
    if (i instanceof Promise) i = await i;
    return i.issues.length ? {
      success: !1,
      error: new e(i.issues.map(item => a_e(item, s, oj())))
    } : {
      success: !0,
      data: i.value
    };
  },
  xr = R(ce),
  zr = e => (r, t, n) => {
    let s = n ? {
      ...n,
      direction: "backward"
    } : {
      direction: "backward"
    };
    return G(e)(r, t, s);
  };
var vr = e => (r, t, n) => G(e)(r, t, n);
var $r = e => async (r, t, n) => {
  let s = n ? {
    ...n,
    direction: "backward"
  } : {
    direction: "backward"
  };
  return Y(e)(r, t, s);
};
var yr = e => async (r, t, n) => Y(e)(r, t, n);
var br = e => (r, t, n) => {
  let s = n ? {
    ...n,
    direction: "backward"
  } : {
    direction: "backward"
  };
  return N(e)(r, t, s);
};
var Zr = e => (r, t, n) => N(e)(r, t, n);
var kr = e => async (r, t, n) => {
  let s = n ? {
    ...n,
    direction: "backward"
  } : {
    direction: "backward"
  };
  return R(e)(r, t, s);
};
var wr = e => async (r, t, n) => R(e)(r, t, n);
var Pr = /^[cC][0-9a-z]{6,}$/,
  Sr = /^[0-9a-z]+$/,
  Ir = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
  Or = /^[0-9a-vA-V]{20}$/,
  Tr = /^[A-Za-z0-9]{27}$/,
  Er = /^[a-zA-Z0-9_-]{21}$/,
  Nr = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var Ar = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  ue = e => {
    if (!e) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
  };
var Cr = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var rs = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Rr() {
  return new RegExp(rs, "u");
}
var jr = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Dr = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var Lr = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  Fr = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Jr = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  pe = /^[A-Za-z0-9_-]*$/;
var Ur = /^https?$/,
  Mr = /^\+[1-9]\d{6,14}$/,
  Br = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
  regExp = new RegExp(`^${Br}$`);
function Wr(e) {
  return typeof e.precision === "number" ? e.precision === -1 ? "(?:[01]\\d|2[0-3]):[0-5]\\d" : e.precision === 0 ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}` : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function Kr(e) {
  return new RegExp(`^${Wr(e)}$`);
}
function Gr(e) {
  let r = Wr({
      precision: e.precision
    }),
    t = ["Z"];
  if (e.local) t.push("");
  if (e.offset) t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  let n = `${r}(?:${t.join("|")})`;
  return new RegExp(`^${Br}T(?:${n})$`);
}
var Yr = e => {
  let r = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
};
var qr = /^-?\d+$/,
  le = /^-?\d+(?:\.\d+)?$/,
  Xr = /^(?:true|false)$/i,
  Hr = /^null$/i;
var Qr = /^undefined$/i;
var et = /^[^A-Z]*$/,
  rt = /^[^a-z]*$/;
var Z = Gn("$ZodCheck", (e, r) => {
    var t;
    e._zod ?? (e._zod = {}), e._zod.def = r, (t = e._zod).onattach ?? (t.onattach = []);
  }),
  tt = {
    number: "number",
    bigint: "bigint",
    object: "date"
  },
  me = Gn("$ZodCheckLessThan", (inst, r) => {
    Z.init(inst, r);
    let origin = tt[typeof r.value];
    inst._zod.onattach.push(n => {
      let bag = n._zod.bag,
        i = (r.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      if (r.value < i) if (r.inclusive) bag.maximum = r.value;else bag.exclusiveMaximum = r.value;
    }), inst._zod.check = n => {
      if (r.inclusive ? n.value <= r.value : n.value < r.value) return;
      n.issues.push({
        origin: origin,
        code: "too_big",
        maximum: typeof r.value === "object" ? r.value.getTime() : r.value,
        input: n.value,
        inclusive: r.inclusive,
        inst: inst,
        continue: !r.abort
      });
    };
  }),
  de = Gn("$ZodCheckGreaterThan", (inst_2, r) => {
    Z.init(inst_2, r);
    let origin_2 = tt[typeof r.value];
    inst_2._zod.onattach.push(n => {
      let bag_2 = n._zod.bag,
        i = (r.inclusive ? bag_2.minimum : bag_2.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      if (r.value > i) if (r.inclusive) bag_2.minimum = r.value;else bag_2.exclusiveMinimum = r.value;
    }), inst_2._zod.check = n => {
      if (r.inclusive ? n.value >= r.value : n.value > r.value) return;
      n.issues.push({
        origin: origin_2,
        code: "too_small",
        minimum: typeof r.value === "object" ? r.value.getTime() : r.value,
        input: n.value,
        inclusive: r.inclusive,
        inst: inst_2,
        continue: !r.abort
      });
    };
  }),
  ot = Gn("$ZodCheckMultipleOf", (inst_3, r) => {
    Z.init(inst_3, r), inst_3._zod.onattach.push(t => {
      var n;
      (n = t._zod.bag).multipleOf ?? (n.multipleOf = r.value);
    }), inst_3._zod.check = t => {
      if (typeof t.value !== typeof r.value) throw Error("Cannot mix number and bigint in multiple_of check.");
      if (typeof t.value === "bigint" ? t.value % r.value === BigInt(0) : KFo(t.value, r.value) === 0) return;
      t.issues.push({
        origin: typeof t.value,
        code: "not_multiple_of",
        divisor: r.value,
        input: t.value,
        inst: inst_3,
        continue: !r.abort
      });
    };
  }),
  nt = Gn("$ZodCheckNumberFormat", (inst_4, r) => {
    Z.init(inst_4, r), r.format = r.format || "float64";
    let t = r.format?.includes("int"),
      n = t ? "int" : "number",
      [minimum, maximum] = ZFo[r.format];
    inst_4._zod.onattach.push(c => {
      let bag_3 = c._zod.bag;
      if (bag_3.format = r.format, bag_3.minimum = minimum, bag_3.maximum = maximum, t) bag_3.pattern = qr;
    }), inst_4._zod.check = c => {
      let input = c.value;
      if (t) {
        if (!Number.isInteger(input)) {
          c.issues.push({
            expected: n,
            format: r.format,
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
            continue: !r.abort
          });else c.issues.push({
            input: input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: inst_4,
            origin: n,
            inclusive: !0,
            continue: !r.abort
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
        continue: !r.abort
      });
      if (input > maximum) c.issues.push({
        origin: "number",
        input: input,
        code: "too_big",
        maximum: maximum,
        inclusive: !0,
        inst: inst_4,
        continue: !r.abort
      });
    };
  });
var st = Gn("$ZodCheckMaxLength", (inst_5, r) => {
    var t;
    Z.init(inst_5, r), (t = inst_5._zod.def).when ?? (t.when = n => {
      let s = n.value;
      return !SYn(s) && s.length !== void 0;
    }), inst_5._zod.onattach.push(n => {
      let s = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      if (r.maximum < s) n._zod.bag.maximum = r.maximum;
    }), inst_5._zod.check = n => {
      let input_2 = n.value;
      if (input_2.length <= r.maximum) return;
      let origin_3 = wYn(input_2);
      n.issues.push({
        origin: origin_3,
        code: "too_big",
        maximum: r.maximum,
        inclusive: !0,
        input: input_2,
        inst: inst_5,
        continue: !r.abort
      });
    };
  }),
  it = Gn("$ZodCheckMinLength", (inst_6, r) => {
    var t;
    Z.init(inst_6, r), (t = inst_6._zod.def).when ?? (t.when = n => {
      let s = n.value;
      return !SYn(s) && s.length !== void 0;
    }), inst_6._zod.onattach.push(n => {
      let s = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      if (r.minimum > s) n._zod.bag.minimum = r.minimum;
    }), inst_6._zod.check = n => {
      let input_3 = n.value;
      if (input_3.length >= r.minimum) return;
      let origin_4 = wYn(input_3);
      n.issues.push({
        origin: origin_4,
        code: "too_small",
        minimum: r.minimum,
        inclusive: !0,
        input: input_3,
        inst: inst_6,
        continue: !r.abort
      });
    };
  }),
  ct = Gn("$ZodCheckLengthEquals", (inst_7, r) => {
    var t;
    Z.init(inst_7, r), (t = inst_7._zod.def).when ?? (t.when = n => {
      let s = n.value;
      return !SYn(s) && s.length !== void 0;
    }), inst_7._zod.onattach.push(n => {
      let bag_4 = n._zod.bag;
      bag_4.minimum = r.length, bag_4.maximum = r.length, bag_4.length = r.length;
    }), inst_7._zod.check = n => {
      let s = n.value,
        i = s.length;
      if (i === r.length) return;
      let origin_5 = wYn(s),
        a = i > r.length;
      n.issues.push({
        origin: origin_5,
        ...(a ? {
          code: "too_big",
          maximum: r.length
        } : {
          code: "too_small",
          minimum: r.length
        }),
        inclusive: !0,
        exact: !0,
        input: n.value,
        inst: inst_7,
        continue: !r.abort
      });
    };
  }),
  j = Gn("$ZodCheckStringFormat", (inst_8, r) => {
    var t, n;
    if (Z.init(inst_8, r), inst_8._zod.onattach.push(s => {
      let bag_5 = s._zod.bag;
      if (bag_5.format = r.format, r.pattern) bag_5.patterns ?? (bag_5.patterns = new Set()), bag_5.patterns.add(r.pattern);
    }), r.pattern) (t = inst_8._zod).check ?? (t.check = s => {
      if (r.pattern.lastIndex = 0, r.pattern.test(s.value)) return;
      s.issues.push({
        origin: "string",
        code: "invalid_format",
        format: r.format,
        input: s.value,
        ...(r.pattern ? {
          pattern: r.pattern.toString()
        } : {}),
        inst: inst_8,
        continue: !r.abort
      });
    });else (n = inst_8._zod).check ?? (n.check = () => {});
  }),
  at = Gn("$ZodCheckRegex", (inst_9, r) => {
    j.init(inst_9, r), inst_9._zod.check = t => {
      if (r.pattern.lastIndex = 0, r.pattern.test(t.value)) return;
      t.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: t.value,
        pattern: r.pattern.toString(),
        inst: inst_9,
        continue: !r.abort
      });
    };
  }),
  pt = Gn("$ZodCheckLowerCase", (e, r) => {
    r.pattern ?? (r.pattern = et), j.init(e, r);
  }),
  lt = Gn("$ZodCheckUpperCase", (e, r) => {
    r.pattern ?? (r.pattern = rt), j.init(e, r);
  }),
  mt = Gn("$ZodCheckIncludes", (inst_10, r) => {
    Z.init(inst_10, r);
    let t = H8e(r.includes),
      regExp_2 = new RegExp(typeof r.position === "number" ? `^.{${r.position}}${t}` : t);
    r.pattern = regExp_2, inst_10._zod.onattach.push(s => {
      let bag_6 = s._zod.bag;
      bag_6.patterns ?? (bag_6.patterns = new Set()), bag_6.patterns.add(regExp_2);
    }), inst_10._zod.check = s => {
      if (s.value.includes(r.includes, r.position)) return;
      s.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: r.includes,
        input: s.value,
        inst: inst_10,
        continue: !r.abort
      });
    };
  }),
  dt = Gn("$ZodCheckStartsWith", (inst_11, r) => {
    Z.init(inst_11, r);
    let regExp_3 = new RegExp(`^${H8e(r.prefix)}.*`);
    r.pattern ?? (r.pattern = regExp_3), inst_11._zod.onattach.push(n => {
      let bag_7 = n._zod.bag;
      bag_7.patterns ?? (bag_7.patterns = new Set()), bag_7.patterns.add(regExp_3);
    }), inst_11._zod.check = n => {
      if (n.value.startsWith(r.prefix)) return;
      n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: r.prefix,
        input: n.value,
        inst: inst_11,
        continue: !r.abort
      });
    };
  }),
  ft = Gn("$ZodCheckEndsWith", (inst_12, r) => {
    Z.init(inst_12, r);
    let regExp_4 = new RegExp(`.*${H8e(r.suffix)}$`);
    r.pattern ?? (r.pattern = regExp_4), inst_12._zod.onattach.push(n => {
      let bag_8 = n._zod.bag;
      bag_8.patterns ?? (bag_8.patterns = new Set()), bag_8.patterns.add(regExp_4);
    }), inst_12._zod.check = n => {
      if (n.value.endsWith(r.suffix)) return;
      n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: r.suffix,
        input: n.value,
        inst: inst_12,
        continue: !r.abort
      });
    };
  });
var ht = Gn("$ZodCheckOverwrite", (e, r) => {
  Z.init(e, r), e._zod.check = t => {
    t.value = r.tx(t.value);
  };
});
class he {
  constructor(e = []) {
    if (this.content = [], this.indent = 0, this) this.args = e;
  }
  indented(e) {
    this.indent += 1, e(this), this.indent -= 1;
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
    let t = e.split(`
`).filter(item => item),
      n = Math.min(...t.map(item => item.length - item.trimStart().length)),
      s = t.map(item => item.slice(n)).map(item => " ".repeat(this.indent * 2) + item);
    for (let i of s) this.content.push(i);
  }
  compile() {
    let Function_2 = Function,
      r = this?.args,
      n = [...(this?.content ?? [""]).map(item => `  ${item}`)];
    return new Function_2(...r, n.join(`
`));
  }
}
var gt = {
  major: 4,
  minor: 4,
  patch: 3
};
var Qb = Gn("$ZodType", (e, r) => {
    var t;
    e ?? (e = {}), e._zod.def = r, e._zod.bag = e._zod.bag || {}, e._zod.version = gt;
    let n = [...(e._zod.def.checks ?? [])];
    if (e._zod.traits.has("$ZodCheck")) n.unshift(e);
    for (let s of n) for (let i of s._zod.onattach) i(e);
    if (n.length === 0) (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });else {
      let s = (c, a, p) => {
          let l = xft(c),
            m;
          for (let d of a) {
            if (d._zod.def.when) {
              if (e$o(c)) continue;
              if (!d._zod.def.when(c)) continue;
            } else if (l) continue;
            let h = c.issues.length,
              f = d._zod.check(c);
            if (f instanceof Promise && p?.async === !1) throw new CUe();
            if (m || f instanceof Promise) m = (m ?? Promise.resolve()).then(async () => {
              if (await f, c.issues.length === h) return;
              if (!l) l = xft(c, h);
            });else {
              if (c.issues.length === h) continue;
              if (!l) l = xft(c, h);
            }
          }
          if (m) return m.then(() => c);
          return c;
        },
        i = (c, a, p) => {
          if (xft(c)) return c.aborted = !0, c;
          let l = s(a, n, p);
          if (l instanceof Promise) {
            if (p.async === !1) throw new CUe();
            return l.then(m => e._zod.parse(m, p));
          }
          return e._zod.parse(l, p);
        };
      e._zod.run = (c, a) => {
        if (a.skipChecks) return e._zod.parse(c, a);
        if (a.direction === "backward") {
          let l = e._zod.parse({
            value: c.value,
            issues: []
          }, {
            ...a,
            skipChecks: !0
          });
          if (l instanceof Promise) return l.then(m => i(m, c, a));
          return i(l, c, a);
        }
        let p = e._zod.parse(c, a);
        if (p instanceof Promise) {
          if (a.async === !1) throw new CUe();
          return p.then(l => s(l, n, a));
        }
        return s(p, n, a);
      };
    }
    Bg(e, "~standard", () => ({
      validate: s => {
        try {
          let i = Mgn(e, s);
          return i.success ? {
            value: i.data
          } : {
            issues: i.error?.issues
          };
        } catch (i) {
          return xr(e, s).then(c => c.success ? {
            value: c.data
          } : {
            issues: c.error?.issues
          });
        }
      },
      vendor: "zod",
      version: 1
    }));
  }),
  Q = Gn("$ZodString", (inst_13, r) => {
    Qb.init(inst_13, r), inst_13._zod.pattern = [...(inst_13?._zod.bag?.patterns ?? [])].pop() ?? Yr(inst_13._zod.bag), inst_13._zod.parse = (t, n) => {
      if (r.coerce) try {
        t.value = String(t.value);
      } catch (error) {}
      if (typeof t.value === "string") return t;
      return t.issues.push({
        expected: "string",
        code: "invalid_type",
        input: t.value,
        inst: inst_13
      }), t;
    };
  }),
  g = Gn("$ZodStringFormat", (e, r) => {
    j.init(e, r), Q.init(e, r);
  }),
  It = Gn("$ZodGUID", (e, r) => {
    r.pattern ?? (r.pattern = Ar), g.init(e, r);
  }),
  Ot = Gn("$ZodUUID", (e, r) => {
    if (r.version) {
      let n = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      }[r.version];
      if (n === void 0) throw Error(`Invalid UUID version: "${r.version}"`);
      r.pattern ?? (r.pattern = ue(n));
    } else r.pattern ?? (r.pattern = ue());
    g.init(e, r);
  }),
  Tt = Gn("$ZodEmail", (e, r) => {
    r.pattern ?? (r.pattern = Cr), g.init(e, r);
  }),
  Et = Gn("$ZodURL", (inst_14, r) => {
    g.init(inst_14, r), inst_14._zod.check = t => {
      try {
        let n = t.value.trim();
        if (!r.normalize && r.protocol?.source === Ur.source) {
          if (!/^https?:\/\//i.test(n)) {
            t.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid URL format",
              input: t.value,
              inst: inst_14,
              continue: !r.abort
            });
            return;
          }
        }
        let s = new URL(n);
        if (r.hostname) {
          if (r.hostname.lastIndex = 0, !r.hostname.test(s.hostname)) t.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: r.hostname.source,
            input: t.value,
            inst: inst_14,
            continue: !r.abort
          });
        }
        if (r.protocol) {
          if (r.protocol.lastIndex = 0, !r.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol)) t.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: r.protocol.source,
            input: t.value,
            inst: inst_14,
            continue: !r.abort
          });
        }
        if (r.normalize) t.value = s.href;else t.value = n;
        return;
      } catch (error) {
        t.issues.push({
          code: "invalid_format",
          format: "url",
          input: t.value,
          inst: inst_14,
          continue: !r.abort
        });
      }
    };
  }),
  Nt = Gn("$ZodEmoji", (e, r) => {
    r.pattern ?? (r.pattern = Rr()), g.init(e, r);
  }),
  At = Gn("$ZodNanoID", (e, r) => {
    r.pattern ?? (r.pattern = Er), g.init(e, r);
  }),
  Ct = Gn("$ZodCUID", (e, r) => {
    r.pattern ?? (r.pattern = Pr), g.init(e, r);
  }),
  Rt = Gn("$ZodCUID2", (e, r) => {
    r.pattern ?? (r.pattern = Sr), g.init(e, r);
  }),
  jt = Gn("$ZodULID", (e, r) => {
    r.pattern ?? (r.pattern = Ir), g.init(e, r);
  }),
  Dt = Gn("$ZodXID", (e, r) => {
    r.pattern ?? (r.pattern = Or), g.init(e, r);
  }),
  Lt = Gn("$ZodKSUID", (e, r) => {
    r.pattern ?? (r.pattern = Tr), g.init(e, r);
  }),
  Ft = Gn("$ZodISODateTime", (e, r) => {
    r.pattern ?? (r.pattern = Gr(r)), g.init(e, r);
  }),
  Jt = Gn("$ZodISODate", (e, r) => {
    r.pattern ?? (r.pattern = regExp), g.init(e, r);
  }),
  Ut = Gn("$ZodISOTime", (e, r) => {
    r.pattern ?? (r.pattern = Kr(r)), g.init(e, r);
  }),
  Mt = Gn("$ZodISODuration", (e, r) => {
    r.pattern ?? (r.pattern = Nr), g.init(e, r);
  }),
  Bt = Gn("$ZodIPv4", (e, r) => {
    r.pattern ?? (r.pattern = jr), g.init(e, r), e._zod.bag.format = "ipv4";
  }),
  Vt = Gn("$ZodIPv6", (inst_15, r) => {
    r.pattern ?? (r.pattern = Dr), g.init(inst_15, r), inst_15._zod.bag.format = "ipv6", inst_15._zod.check = t => {
      try {
        new URL(`http://[${t.value}]`);
      } catch {
        t.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: t.value,
          inst: inst_15,
          continue: !r.abort
        });
      }
    };
  });
var Wt = Gn("$ZodCIDRv4", (e, r) => {
    r.pattern ?? (r.pattern = Lr), g.init(e, r);
  }),
  Kt = Gn("$ZodCIDRv6", (inst_16, r) => {
    r.pattern ?? (r.pattern = Fr), g.init(inst_16, r), inst_16._zod.check = t => {
      let n = t.value.split("/");
      try {
        if (n.length !== 2) throw Error();
        let [s, i] = n;
        if (!i) throw Error();
        let c = Number(i);
        if (`${c}` !== i) throw Error();
        if (c < 0 || c > 128) throw Error();
        new URL(`http://[${s}]`);
      } catch {
        t.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: t.value,
          inst: inst_16,
          continue: !r.abort
        });
      }
    };
  });
function Gt(e) {
  if (e === "") return !0;
  if (/\s/.test(e)) return !1;
  if (e.length % 4 !== 0) return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
var Yt = Gn("$ZodBase64", (inst_17, r) => {
  r.pattern ?? (r.pattern = Jr), g.init(inst_17, r), inst_17._zod.bag.contentEncoding = "base64", inst_17._zod.check = t => {
    if (Gt(t.value)) return;
    t.issues.push({
      code: "invalid_format",
      format: "base64",
      input: t.value,
      inst: inst_17,
      continue: !r.abort
    });
  };
});
function ts(e) {
  if (!pe.test(e)) return !1;
  let r = e.replace(/[-_]/g, n => n === "-" ? "+" : "/"),
    t = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return Gt(t);
}
var qt = Gn("$ZodBase64URL", (inst_18, r) => {
    r.pattern ?? (r.pattern = pe), g.init(inst_18, r), inst_18._zod.bag.contentEncoding = "base64url", inst_18._zod.check = t => {
      if (ts(t.value)) return;
      t.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: t.value,
        inst: inst_18,
        continue: !r.abort
      });
    };
  }),
  Xt = Gn("$ZodE164", (e, r) => {
    r.pattern ?? (r.pattern = Mr), g.init(e, r);
  });
function os(e, r = null) {
  try {
    let t = e.split(".");
    if (t.length !== 3) return !1;
    let [n] = t;
    if (!n) return !1;
    let s = JSON.parse(atob(n));
    if ("typ" in s && s?.typ !== "JWT") return !1;
    if (!s.alg) return !1;
    if (r && (!("alg" in s) || s.alg !== r)) return !1;
    return !0;
  } catch {
    return !1;
  }
}
var Ht = Gn("$ZodJWT", (inst_19, r) => {
  g.init(inst_19, r), inst_19._zod.check = t => {
    if (os(t.value, r.alg)) return;
    t.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: t.value,
      inst: inst_19,
      continue: !r.abort
    });
  };
});
var ge = Gn("$ZodNumber", (inst_20, r) => {
    Qb.init(inst_20, r), inst_20._zod.pattern = inst_20._zod.bag.pattern ?? le, inst_20._zod.parse = (t, n) => {
      if (r.coerce) try {
        t.value = Number(t.value);
      } catch (error) {}
      let input_4 = t.value;
      if (typeof input_4 === "number" && !Number.isNaN(input_4) && Number.isFinite(input_4)) return t;
      let received = typeof input_4 === "number" ? Number.isNaN(input_4) ? "NaN" : !Number.isFinite(input_4) ? "Infinity" : void 0 : void 0;
      return t.issues.push({
        expected: "number",
        code: "invalid_type",
        input: input_4,
        inst: inst_20,
        ...(received ? {
          received: received
        } : {})
      }), t;
    };
  }),
  Qt = Gn("$ZodNumberFormat", (e, r) => {
    nt.init(e, r), ge.init(e, r);
  }),
  eo = Gn("$ZodBoolean", (inst_21, r) => {
    Qb.init(inst_21, r), inst_21._zod.pattern = Xr, inst_21._zod.parse = (t, n) => {
      if (r.coerce) try {
        t.value = Boolean(t.value);
      } catch (error) {}
      let input_5 = t.value;
      if (typeof input_5 === "boolean") return t;
      return t.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input: input_5,
        inst: inst_21
      }), t;
    };
  });
var ro = Gn("$ZodUndefined", (inst_22, r) => {
    Qb.init(inst_22, r), inst_22._zod.pattern = Qr, inst_22._zod.values = new Set([void 0]), inst_22._zod.parse = (t, n) => {
      let input_6 = t.value;
      if (typeof input_6 > "u") return t;
      return t.issues.push({
        expected: "undefined",
        code: "invalid_type",
        input: input_6,
        inst: inst_22
      }), t;
    };
  }),
  to = Gn("$ZodNull", (inst_23, r) => {
    Qb.init(inst_23, r), inst_23._zod.pattern = Hr, inst_23._zod.values = new Set([null]), inst_23._zod.parse = (t, n) => {
      let input_7 = t.value;
      if (input_7 === null) return t;
      return t.issues.push({
        expected: "null",
        code: "invalid_type",
        input: input_7,
        inst: inst_23
      }), t;
    };
  }),
  oo = Gn("$ZodAny", (e, r) => {
    Qb.init(e, r), e._zod.parse = t => t;
  }),
  no = Gn("$ZodUnknown", (e, r) => {
    Qb.init(e, r), e._zod.parse = t => t;
  }),
  so = Gn("$ZodNever", (inst_24, r) => {
    Qb.init(inst_24, r), inst_24._zod.parse = (t, n) => (t.issues.push({
      expected: "never",
      code: "invalid_type",
      input: t.value,
      inst: inst_24
    }), t);
  });
function xt(e, r, t) {
  if (e.issues.length) r.issues.push(...GAe(t, e.issues));
  r.value[t] = e.value;
}
var io = Gn("$ZodArray", (inst_25, r) => {
  Qb.init(inst_25, r), inst_25._zod.parse = (t, n) => {
    let input_8 = t.value;
    if (!Array.isArray(input_8)) return t.issues.push({
      expected: "array",
      code: "invalid_type",
      input: input_8,
      inst: inst_25
    }), t;
    t.value = Array(input_8.length);
    let i = [];
    for (let c = 0; c < input_8.length; c++) {
      let value_6 = input_8[c],
        p = r.element._zod.run({
          value: value_6,
          issues: []
        }, n);
      if (p instanceof Promise) i.push(p.then(l => xt(l, t, c)));else xt(p, t, c);
    }
    if (i.length) return Promise.all(i).then(() => t);
    return t;
  };
});
function H(e, r, t, n, s, i) {
  let c = t in n;
  if (e.issues.length) {
    if (s && i && !c) return;
    r.issues.push(...GAe(t, e.issues));
  }
  if (!c && !s) {
    if (!e.issues.length) r.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [t]
    });
    return;
  }
  if (e.value === void 0) {
    if (c) r.value[t] = void 0;
  } else r.value[t] = e.value;
}
function co(e) {
  let keys = Object.keys(e.shape);
  for (let n of keys) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
  let t = QFo(e.shape);
  return {
    ...e,
    keys: keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(t)
  };
}
function uo(e, input_9, t, n, s, inst_26) {
  let keys_2 = [],
    keySet = s.keySet,
    _zod = s.catchall._zod,
    l = _zod.def.type,
    m = _zod.optin === "optional",
    d = _zod.optout === "optional";
  for (let h in input_9) {
    if (h === "__proto__") continue;
    if (keySet.has(h)) continue;
    if (l === "never") {
      keys_2.push(h);
      continue;
    }
    let f = _zod.run({
      value: input_9[h],
      issues: []
    }, n);
    if (f instanceof Promise) e.push(f.then(_ => H(_, t, h, input_9, m, d)));else H(f, t, h, input_9, m, d);
  }
  if (keys_2.length) t.issues.push({
    code: "unrecognized_keys",
    keys: keys_2,
    input: input_9,
    inst: inst_26
  });
  if (!e.length) return t;
  return Promise.all(e).then(() => t);
}
var ns = Gn("$ZodObject", (inst_27, r) => {
    if (Qb.init(inst_27, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
      let shape = r.shape;
      Object.defineProperty(r, "shape", {
        get: () => {
          let value_7 = {
            ...shape
          };
          return Object.defineProperty(r, "shape", {
            value: value_7
          }), value_7;
        }
      });
    }
    let n = Fgn(() => co(r));
    Bg(inst_27._zod, "propValues", () => {
      let shape_2 = r.shape,
        p = {};
      for (let l in shape_2) {
        let _zod_2 = shape_2[l]._zod;
        if (_zod_2.values) {
          p[l] ?? (p[l] = new Set());
          for (let d of _zod_2.values) p[l].add(d);
        }
      }
      return p;
    });
    let s = hBt,
      catchall = r.catchall,
      c;
    inst_27._zod.parse = (a, p) => {
      c ?? (c = n.value);
      let input_10 = a.value;
      if (!s(input_10)) return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: input_10,
        inst: inst_27
      }), a;
      a.value = {};
      let m = [],
        shape_3 = c.shape;
      for (let h of c.keys) {
        let f = shape_3[h],
          _ = f._zod.optin === "optional",
          T = f._zod.optout === "optional",
          y = f._zod.run({
            value: input_10[h],
            issues: []
          }, p);
        if (y instanceof Promise) m.push(y.then(ie => H(ie, a, h, input_10, _, T)));else H(y, a, h, input_10, _, T);
      }
      if (!catchall) return m.length ? Promise.all(m).then(() => a) : a;
      return uo(m, input_10, a, p, n.value, inst_27);
    };
  }),
  ao = Gn("$ZodObjectJIT", (inst_28, r) => {
    ns.init(inst_28, r);
    let t = inst_28._zod.parse,
      n = Fgn(() => co(r)),
      s = h => {
        let f = new he(["shape", "payload", "ctx"]),
          _ = n.value,
          T = P => {
            let v = uWr(P);
            return `shape[${v}]._zod.run({ value: input[${v}], issues: [] }, ctx)`;
          };
        f.write("const input = payload.value;");
        let y = Object.create(null),
          ie = 0;
        for (let P of _.keys) y[P] = `key_${ie++}`;
        f.write("const newResult = {};");
        for (let P of _.keys) {
          let v = y[P],
            b = uWr(P),
            mr = h[P],
            dr = mr?._zod?.optin === "optional",
            Qn = mr?._zod?.optout === "optional";
          if (f.write(`const ${v} = ${T(P)};`), dr && Qn) f.write(`
        if (${v}.issues.length) {
          if (${b} in input) {
            payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${b}, ...iss.path] : [${b}]
            })));
          }
        }
        
        if (${v}.value === undefined) {
          if (${b} in input) {
            newResult[${b}] = undefined;
          }
        } else {
          newResult[${b}] = ${v}.value;
        }
        
      `);else if (!dr) f.write(`
        const ${v}_present = ${b} in input;
        if (${v}.issues.length) {
          payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${b}, ...iss.path] : [${b}]
          })));
        }
        if (!${v}_present && !${v}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${b}]
          });
        }

        if (${v}_present) {
          if (${v}.value === undefined) {
            newResult[${b}] = undefined;
          } else {
            newResult[${b}] = ${v}.value;
          }
        }

      `);else f.write(`
        if (${v}.issues.length) {
          payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${b}, ...iss.path] : [${b}]
          })));
        }
        
        if (${v}.value === undefined) {
          if (${b} in input) {
            newResult[${b}] = undefined;
          }
        } else {
          newResult[${b}] = ${v}.value;
        }
        
      `);
        }
        f.write("payload.value = newResult;"), f.write("return payload;");
        let Hn = f.compile();
        return (P, v) => Hn(h, P, v);
      },
      i,
      c = hBt,
      a = !mBt.jitless,
      l = a && XFo.value,
      catchall_2 = r.catchall,
      d;
    inst_28._zod.parse = (h, f) => {
      d ?? (d = n.value);
      let input_11 = h.value;
      if (!c(input_11)) return h.issues.push({
        expected: "object",
        code: "invalid_type",
        input: input_11,
        inst: inst_28
      }), h;
      if (a && l && f?.async === !1 && f.jitless !== !0) {
        if (!i) i = s(r.shape);
        if (h = i(h, f), !catchall_2) return h;
        return uo([], input_11, h, f, d, inst_28);
      }
      return t(h, f);
    };
  });
function zt(e, r, inst_29, n) {
  for (let i of e) if (i.issues.length === 0) return r.value = i.value, r;
  let s = e.filter(item => !xft(item));
  if (s.length === 1) return r.value = s[0].value, s[0];
  return r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: inst_29,
    errors: e.map(item => item.issues.map(item => a_e(item, n, oj())))
  }), r;
}
var xe = Gn("$ZodUnion", (e, r) => {
  Qb.init(e, r), Bg(e._zod, "optin", () => r.options.some(item => item._zod.optin === "optional") ? "optional" : void 0), Bg(e._zod, "optout", () => r.options.some(item => item._zod.optout === "optional") ? "optional" : void 0), Bg(e._zod, "values", () => {
    if (r.options.every(item => item._zod.values)) return new Set(r.options.flatMap(item => Array.from(item._zod.values)));
    return;
  }), Bg(e._zod, "pattern", () => {
    if (r.options.every(item => item._zod.pattern)) {
      let n = r.options.map(item => item._zod.pattern);
      return new RegExp(`^(${n.map(item => gBt(item.source)).join("|")})$`);
    }
    return;
  });
  let t = r.options.length === 1 ? r.options[0]._zod.run : null;
  e._zod.parse = (n, s) => {
    if (t) return t(n, s);
    let i = !1,
      c = [];
    for (let a of r.options) {
      let p = a._zod.run({
        value: n.value,
        issues: []
      }, s);
      if (p instanceof Promise) c.push(p), i = !0;else {
        if (p.issues.length === 0) return p;
        c.push(p);
      }
    }
    if (!i) return zt(c, n, e, s);
    return Promise.all(c).then(a => zt(a, n, e, s));
  };
});
var po = Gn("$ZodDiscriminatedUnion", (inst_30, r) => {
    r.inclusive = !1, xe.init(inst_30, r);
    let t = inst_30._zod.parse;
    Bg(inst_30._zod, "propValues", () => {
      let s = {};
      for (let i of r.options) {
        let propValues = i._zod.propValues;
        if (!propValues || Object.keys(propValues).length === 0) throw Error(`Invalid discriminated union option at index "${r.options.indexOf(i)}"`);
        for (let [a, p] of Object.entries(propValues)) {
          if (!s[a]) s[a] = new Set();
          for (let l of p) s[a].add(l);
        }
      }
      return s;
    });
    let n = Fgn(() => {
      let options = r.options,
        i = new Map();
      for (let c of options) {
        let a = c._zod.propValues?.[r.discriminator];
        if (!a || a.size === 0) throw Error(`Invalid discriminated union option at index "${r.options.indexOf(c)}"`);
        for (let p of a) {
          if (i.has(p)) throw Error(`Duplicate discriminator value "${String(p)}"`);
          i.set(p, c);
        }
      }
      return i;
    });
    inst_30._zod.parse = (s, i) => {
      let input_12 = s.value;
      if (!hBt(input_12)) return s.issues.push({
        code: "invalid_type",
        expected: "object",
        input: input_12,
        inst: inst_30
      }), s;
      let a = n.value.get(input_12?.[r.discriminator]);
      if (a) return a._zod.run(s, i);
      if (r.unionFallback || i.direction === "backward") return t(s, i);
      return s.issues.push({
        code: "invalid_union",
        errors: [],
        note: "No matching discriminator",
        discriminator: r.discriminator,
        options: Array.from(n.value.keys()),
        input: input_12,
        path: [r.discriminator],
        inst: inst_30
      }), s;
    };
  }),
  lo = Gn("$ZodIntersection", (e, r) => {
    Qb.init(e, r), e._zod.parse = (t, n) => {
      let value_8 = t.value,
        i = r.left._zod.run({
          value: value_8,
          issues: []
        }, n),
        c = r.right._zod.run({
          value: value_8,
          issues: []
        }, n);
      if (i instanceof Promise || c instanceof Promise) return Promise.all([i, c]).then(([p, l]) => vt(t, p, l));
      return vt(t, i, c);
    };
  });
function _e(data, r) {
  if (data === r) return {
    valid: !0,
    data: data
  };
  if (data instanceof Date && r instanceof Date && +data === +r) return {
    valid: !0,
    data: data
  };
  if (Aft(data) && Aft(r)) {
    let t = Object.keys(r),
      n = Object.keys(data).filter(item => t.indexOf(item) !== -1),
      data_2 = {
        ...data,
        ...r
      };
    for (let i of n) {
      let c = _e(data[i], r[i]);
      if (!c.valid) return {
        valid: !1,
        mergeErrorPath: [i, ...c.mergeErrorPath]
      };
      data_2[i] = c.data;
    }
    return {
      valid: !0,
      data: data_2
    };
  }
  if (Array.isArray(data) && Array.isArray(r)) {
    if (data.length !== r.length) return {
      valid: !1,
      mergeErrorPath: []
    };
    let data_3 = [];
    for (let n = 0; n < data.length; n++) {
      let s = data[n],
        i = r[n],
        c = _e(s, i);
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
function vt(e, r, t) {
  let n = new Map(),
    s;
  for (let a of r.issues) if (a.code === "unrecognized_keys") {
    s ?? (s = a);
    for (let p of a.keys) {
      if (!n.has(p)) n.set(p, {});
      n.get(p).l = !0;
    }
  } else e.issues.push(a);
  for (let a of t.issues) if (a.code === "unrecognized_keys") for (let p of a.keys) {
    if (!n.has(p)) n.set(p, {});
    n.get(p).r = !0;
  } else e.issues.push(a);
  let keys_3 = [...n].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (keys_3.length && s) e.issues.push({
    ...s,
    keys: keys_3
  });
  if (xft(e)) return e;
  let c = _e(r.value, t.value);
  if (!c.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
  return e.value = c.data, e;
}
var mo = Gn("$ZodTuple", (inst_31, r) => {
  Qb.init(inst_31, r);
  let items = r.items;
  inst_31._zod.parse = (n, s) => {
    let input_13 = n.value;
    if (!Array.isArray(input_13)) return n.issues.push({
      input: input_13,
      inst: inst_31,
      expected: "tuple",
      code: "invalid_type"
    }), n;
    n.value = [];
    let c = [],
      minimum_2 = $t(items, "optin"),
      p = $t(items, "optout");
    if (!r.rest) {
      if (input_13.length < minimum_2) return n.issues.push({
        code: "too_small",
        minimum: minimum_2,
        inclusive: !0,
        input: input_13,
        inst: inst_31,
        origin: "array"
      }), n;
      if (input_13.length > items.length) n.issues.push({
        code: "too_big",
        maximum: items.length,
        inclusive: !0,
        input: input_13,
        inst: inst_31,
        origin: "array"
      });
    }
    let l = Array(items.length);
    for (let m = 0; m < items.length; m++) {
      let d = items[m]._zod.run({
        value: input_13[m],
        issues: []
      }, s);
      if (d instanceof Promise) c.push(d.then(h => {
        l[m] = h;
      }));else l[m] = d;
    }
    if (r.rest) {
      let m = items.length - 1,
        d = input_13.slice(items.length);
      for (let value_9 of d) {
        m++;
        let f = r.rest._zod.run({
          value: value_9,
          issues: []
        }, s);
        if (f instanceof Promise) c.push(f.then(_ => yt(_, n, m)));else yt(f, n, m);
      }
    }
    if (c.length) return Promise.all(c).then(() => bt(l, n, items, input_13, p));
    return bt(l, n, items, input_13, p);
  };
});
function $t(e, r) {
  for (let t = e.length - 1; t >= 0; t--) if (e[t]._zod[r] !== "optional") return t + 1;
  return 0;
}
function yt(e, r, t) {
  if (e.issues.length) r.issues.push(...GAe(t, e.issues));
  r.value[t] = e.value;
}
function bt(e, r, t, n, s) {
  for (let i = 0; i < t.length; i++) {
    let c = e[i],
      a = i < n.length;
    if (c.issues.length) {
      if (!a && i >= s) {
        r.value.length = i;
        break;
      }
      r.issues.push(...GAe(i, c.issues));
    }
    r.value[i] = c.value;
  }
  for (let i = r.value.length - 1; i >= n.length; i--) if (t[i]._zod.optout === "optional" && r.value[i] === void 0) r.value.length = i;else break;
  return r;
}
var fo = Gn("$ZodRecord", (inst_32, r) => {
  Qb.init(inst_32, r), inst_32._zod.parse = (t, n) => {
    let input_14 = t.value;
    if (!Aft(input_14)) return t.issues.push({
      expected: "record",
      code: "invalid_type",
      input: input_14,
      inst: inst_32
    }), t;
    let i = [],
      c = r.keyType._zod.values;
    if (c) {
      t.value = {};
      let a = new Set();
      for (let l of c) if (typeof l === "string" || typeof l === "number" || typeof l === "symbol") {
        a.add(typeof l === "number" ? l.toString() : l);
        let m = r.keyType._zod.run({
          value: l,
          issues: []
        }, n);
        if (m instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if (m.issues.length) {
          t.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: m.issues.map(item => a_e(item, n, oj())),
            input: l,
            path: [l],
            inst: inst_32
          });
          continue;
        }
        let d = m.value,
          h = r.valueType._zod.run({
            value: input_14[l],
            issues: []
          }, n);
        if (h instanceof Promise) i.push(h.then(f => {
          if (f.issues.length) t.issues.push(...GAe(l, f.issues));
          t.value[d] = f.value;
        }));else {
          if (h.issues.length) t.issues.push(...GAe(l, h.issues));
          t.value[d] = h.value;
        }
      }
      let keys_4;
      for (let l in input_14) if (!a.has(l)) keys_4 = keys_4 ?? [], keys_4.push(l);
      if (keys_4 && keys_4.length > 0) t.issues.push({
        code: "unrecognized_keys",
        input: input_14,
        inst: inst_32,
        keys: keys_4
      });
    } else {
      t.value = {};
      for (let a of Reflect.ownKeys(input_14)) {
        if (a === "__proto__") continue;
        if (!Object.prototype.propertyIsEnumerable.call(input_14, a)) continue;
        let p = r.keyType._zod.run({
          value: a,
          issues: []
        }, n);
        if (p instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if (typeof a === "string" && le.test(a) && p.issues.length) {
          let d = r.keyType._zod.run({
            value: Number(a),
            issues: []
          }, n);
          if (d instanceof Promise) throw Error("Async schemas not supported in object keys currently");
          if (d.issues.length === 0) p = d;
        }
        if (p.issues.length) {
          if (r.mode === "loose") t.value[a] = input_14[a];else t.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: p.issues.map(item => a_e(item, n, oj())),
            input: a,
            path: [a],
            inst: inst_32
          });
          continue;
        }
        let m = r.valueType._zod.run({
          value: input_14[a],
          issues: []
        }, n);
        if (m instanceof Promise) i.push(m.then(d => {
          if (d.issues.length) t.issues.push(...GAe(a, d.issues));
          t.value[p.value] = d.value;
        }));else {
          if (m.issues.length) t.issues.push(...GAe(a, m.issues));
          t.value[p.value] = m.value;
        }
      }
    }
    if (i.length) return Promise.all(i).then(() => t);
    return t;
  };
});
var ho = Gn("$ZodEnum", (inst_33, r) => {
    Qb.init(inst_33, r);
    let values = bYn(r.entries),
      n = new Set(values);
    inst_33._zod.values = n, inst_33._zod.pattern = new RegExp(`^(${values.filter(item => JFo.has(typeof item)).map(item => typeof item === "string" ? H8e(item) : item.toString()).join("|")})$`), inst_33._zod.parse = (s, i) => {
      let input_15 = s.value;
      if (n.has(input_15)) return s;
      return s.issues.push({
        code: "invalid_value",
        values: values,
        input: input_15,
        inst: inst_33
      }), s;
    };
  }),
  _o = Gn("$ZodLiteral", (inst_34, r) => {
    if (Qb.init(inst_34, r), r.values.length === 0) throw Error("Cannot create literal schema with no valid values");
    let t = new Set(r.values);
    inst_34._zod.values = t, inst_34._zod.pattern = new RegExp(`^(${r.values.map(item => typeof item === "string" ? H8e(item) : item ? H8e(item.toString()) : String(item)).join("|")})$`), inst_34._zod.parse = (n, s) => {
      let input_16 = n.value;
      if (t.has(input_16)) return n;
      return n.issues.push({
        code: "invalid_value",
        values: r.values,
        input: input_16,
        inst: inst_34
      }), n;
    };
  });
var go = Gn("$ZodTransform", (e, r) => {
  Qb.init(e, r), e._zod.optin = "optional", e._zod.parse = (t, n) => {
    if (n.direction === "backward") throw new Ngn(e.constructor.name);
    let s = r.transform(t.value, t);
    if (n.async) return (s instanceof Promise ? s : Promise.resolve(s)).then(c => (t.value = c, t.fallback = !0, t));
    if (s instanceof Promise) throw new CUe();
    return t.value = s, t.fallback = !0, t;
  };
});
function Zt(e, r) {
  if (r === void 0 && (e.issues.length || e.fallback)) return {
    issues: [],
    value: void 0
  };
  return e;
}
var ze = Gn("$ZodOptional", (e, r) => {
    Qb.init(e, r), e._zod.optin = "optional", e._zod.optout = "optional", Bg(e._zod, "values", () => r.innerType._zod.values ? new Set([...r.innerType._zod.values, void 0]) : void 0), Bg(e._zod, "pattern", () => {
      let pattern = r.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${gBt(pattern.source)})?$`) : void 0;
    }), e._zod.parse = (t, n) => {
      if (r.innerType._zod.optin === "optional") {
        let s = t.value,
          i = r.innerType._zod.run(t, n);
        if (i instanceof Promise) return i.then(c => Zt(c, s));
        return Zt(i, s);
      }
      if (t.value === void 0) return t;
      return r.innerType._zod.run(t, n);
    };
  }),
  xo = Gn("$ZodExactOptional", (e, r) => {
    ze.init(e, r), Bg(e._zod, "values", () => r.innerType._zod.values), Bg(e._zod, "pattern", () => r.innerType._zod.pattern), e._zod.parse = (t, n) => r.innerType._zod.run(t, n);
  }),
  zo = Gn("$ZodNullable", (e, r) => {
    Qb.init(e, r), Bg(e._zod, "optin", () => r.innerType._zod.optin), Bg(e._zod, "optout", () => r.innerType._zod.optout), Bg(e._zod, "pattern", () => {
      let pattern_2 = r.innerType._zod.pattern;
      return pattern_2 ? new RegExp(`^(${gBt(pattern_2.source)}|null)$`) : void 0;
    }), Bg(e._zod, "values", () => r.innerType._zod.values ? new Set([...r.innerType._zod.values, null]) : void 0), e._zod.parse = (t, n) => {
      if (t.value === null) return t;
      return r.innerType._zod.run(t, n);
    };
  }),
  vo = Gn("$ZodDefault", (e, r) => {
    Qb.init(e, r), e._zod.optin = "optional", Bg(e._zod, "values", () => r.innerType._zod.values), e._zod.parse = (t, n) => {
      if (n.direction === "backward") return r.innerType._zod.run(t, n);
      if (t.value === void 0) return t.value = r.defaultValue, t;
      let s = r.innerType._zod.run(t, n);
      if (s instanceof Promise) return s.then(i => kt(i, r));
      return kt(s, r);
    };
  });
function kt(e, r) {
  if (e.value === void 0) e.value = r.defaultValue;
  return e;
}
var $o = Gn("$ZodPrefault", (e, r) => {
    Qb.init(e, r), e._zod.optin = "optional", Bg(e._zod, "values", () => r.innerType._zod.values), e._zod.parse = (t, n) => {
      if (n.direction === "backward") return r.innerType._zod.run(t, n);
      if (t.value === void 0) t.value = r.defaultValue;
      return r.innerType._zod.run(t, n);
    };
  }),
  yo = Gn("$ZodNonOptional", (e, r) => {
    Qb.init(e, r), Bg(e._zod, "values", () => {
      let t = r.innerType._zod.values;
      return t ? new Set([...t].filter(item => item !== void 0)) : void 0;
    }), e._zod.parse = (t, n) => {
      let s = r.innerType._zod.run(t, n);
      if (s instanceof Promise) return s.then(i => wt(i, e));
      return wt(s, e);
    };
  });
function wt(e, inst_35) {
  if (!e.issues.length && e.value === void 0) e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: inst_35
  });
  return e;
}
var bo = Gn("$ZodCatch", (e, r) => {
  Qb.init(e, r), e._zod.optin = "optional", Bg(e._zod, "optout", () => r.innerType._zod.optout), Bg(e._zod, "values", () => r.innerType._zod.values), e._zod.parse = (t, n) => {
    if (n.direction === "backward") return r.innerType._zod.run(t, n);
    let s = r.innerType._zod.run(t, n);
    if (s instanceof Promise) return s.then(i => {
      if (t.value = i.value, t.issues = i.issues, i.issues.length) t.value = r.catchValue({
        ...t,
        error: {
          issues: i.issues.map(item => a_e(item, n, oj()))
        },
        input: t.value
      }), t.issues = [], t.fallback = !0;
      return t;
    });
    if (t.value = s.value, t.issues = s.issues, s.issues.length) t.value = r.catchValue({
      ...t,
      error: {
        issues: s.issues.map(item => a_e(item, n, oj()))
      },
      input: t.value
    }), t.issues = [], t.fallback = !0;
    return t;
  };
});
var ve = Gn("$ZodPipe", (e, r) => {
  Qb.init(e, r), Bg(e._zod, "values", () => r.in._zod.values), Bg(e._zod, "optin", () => r.in._zod.optin), Bg(e._zod, "optout", () => r.out._zod.optout), Bg(e._zod, "propValues", () => r.in._zod.propValues), e._zod.parse = (t, n) => {
    if (n.direction === "backward") {
      let i = r.out._zod.run(t, n);
      if (i instanceof Promise) return i.then(c => X(c, r.in, n));
      return X(i, r.in, n);
    }
    let s = r.in._zod.run(t, n);
    if (s instanceof Promise) return s.then(i => X(i, r.out, n));
    return X(s, r.out, n);
  };
});
function X(e, r, t) {
  if (e.issues.length) return e.aborted = !0, e;
  return r._zod.run({
    value: e.value,
    issues: e.issues,
    fallback: e.fallback
  }, t);
}
var Zo = Gn("$ZodPreprocess", (e, r) => {
    ve.init(e, r);
  }),
  ko = Gn("$ZodReadonly", (e, r) => {
    Qb.init(e, r), Bg(e._zod, "propValues", () => r.innerType._zod.propValues), Bg(e._zod, "values", () => r.innerType._zod.values), Bg(e._zod, "optin", () => r.innerType?._zod?.optin), Bg(e._zod, "optout", () => r.innerType?._zod?.optout), e._zod.parse = (t, n) => {
      if (n.direction === "backward") return r.innerType._zod.run(t, n);
      let s = r.innerType._zod.run(t, n);
      if (s instanceof Promise) return s.then(Pt);
      return Pt(s);
    };
  });
function Pt(e) {
  return e.value = Object.freeze(e.value), e;
}
var gYn = Gn("$ZodLazy", (e, r) => {
    Qb.init(e, r), Bg(e._zod, "innerType", () => {
      let t = r;
      if (!t._cachedInner) t._cachedInner = r.getter();
      return t._cachedInner;
    }), Bg(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), Bg(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), Bg(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), Bg(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n);
  }),
  wo = Gn("$ZodCustom", (e, r) => {
    Z.init(e, r), Qb.init(e, r), e._zod.parse = (t, n) => t, e._zod.check = t => {
      let n = t.value,
        s = r.fn(n);
      if (s instanceof Promise) return s.then(i => St(i, t, n, e));
      St(s, t, n, e);
      return;
    };
  });
function St(e, r, input_17, inst_36) {
  if (!e) {
    let s = {
      code: "custom",
      input: input_17,
      inst: inst_36,
      path: [...(inst_36._zod.def.path ?? [])],
      continue: !inst_36._zod.def.abort
    };
    if (inst_36._zod.def.params) s.params = inst_36._zod.def.params;
    r.issues.push(Pft(s));
  }
}
var Po,
  Zi = Symbol("ZodOutput"),
  ki = Symbol("ZodInput");
class So {
  constructor() {
    this._map = new WeakMap(), this._idmap = new Map();
  }
  add(e, ...r) {
    let t = r[0];
    if (this._map.set(e, t), t && typeof t === "object" && "id" in t) this._idmap.set(t.id, e);
    return this;
  }
  clear() {
    return this._map = new WeakMap(), this._idmap = new Map(), this;
  }
  remove(e) {
    let r = this._map.get(e);
    if (r && typeof r === "object" && "id" in r) this._idmap.delete(r.id);
    return this._map.delete(e), this;
  }
  get(e) {
    let parent = e._zod.parent;
    if (parent) {
      let t = {
        ...(this.get(parent) ?? {})
      };
      delete t.id;
      let n = {
        ...t,
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
function ss() {
  return new So();
}
(Po = globalThis).__zod_globalRegistry ?? (Po.__zod_globalRegistry = ss());
var __zod_globalRegistry = globalThis.__zod_globalRegistry;
function Io(e, r) {
  return new e({
    type: "string",
    ...Sa(r)
  });
}
function jFo(e, r) {
  return new e({
    type: "string",
    coerce: !0,
    ...Sa(r)
  });
}
function ye(e, r) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function be(e, r) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Ze(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Oo(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Sa(r)
  });
}
function To(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Sa(r)
  });
}
function Eo(e, r) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Sa(r)
  });
}
function ke(e, r) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function No(e, r) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Ao(e, r) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Co(e, r) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Ro(e, r) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function jo(e, r) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Do(e, r) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Lo(e, r) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Fo(e, r) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Jo(e, r) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Uo(e, r) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Mo(e, r) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function we(e, r) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Bo(e, r) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Vo(e, r) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Wo(e, r) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Sa(r)
  });
}
function Ko(e, r) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Sa(r)
  });
}
function Go(e, r) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...Sa(r)
  });
}
function Yo(e, r) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Sa(r)
  });
}
function qo(e, r) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Sa(r)
  });
}
function Xo(e, r) {
  return new e({
    type: "number",
    checks: [],
    ...Sa(r)
  });
}
function WFo(e, r) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...Sa(r)
  });
}
function Ho(e, r) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...Sa(r)
  });
}
function en(e, r) {
  return new e({
    type: "boolean",
    ...Sa(r)
  });
}
function zFo(e, r) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...Sa(r)
  });
}
function rn(e, r) {
  return new e({
    type: "undefined",
    ...Sa(r)
  });
}
function tn(e, r) {
  return new e({
    type: "null",
    ...Sa(r)
  });
}
function on(e) {
  return new e({
    type: "any"
  });
}
function nn(e) {
  return new e({
    type: "unknown"
  });
}
function sn(e, r) {
  return new e({
    type: "never",
    ...Sa(r)
  });
}
function ee(value_10, r) {
  return new me({
    check: "less_than",
    ...Sa(r),
    value: value_10,
    inclusive: !1
  });
}
function D(value_11, r) {
  return new me({
    check: "less_than",
    ...Sa(r),
    value: value_11,
    inclusive: !0
  });
}
function re(value_12, r) {
  return new de({
    check: "greater_than",
    ...Sa(r),
    value: value_12,
    inclusive: !1
  });
}
function L(value_13, r) {
  return new de({
    check: "greater_than",
    ...Sa(r),
    value: value_13,
    inclusive: !0
  });
}
function te(value_14, r) {
  return new ot({
    check: "multiple_of",
    ...Sa(r),
    value: value_14
  });
}
function uBt(maximum_2, r) {
  return new st({
    check: "max_length",
    ...Sa(r),
    maximum: maximum_2
  });
}
function O(minimum_3, r) {
  return new it({
    check: "min_length",
    ...Sa(r),
    minimum: minimum_3
  });
}
function oe(length, r) {
  return new ct({
    check: "length_equals",
    ...Sa(r),
    length: length
  });
}
function Pe(pattern_3, r) {
  return new at({
    check: "string_format",
    format: "regex",
    ...Sa(r),
    pattern: pattern_3
  });
}
function Se(e) {
  return new pt({
    check: "string_format",
    format: "lowercase",
    ...Sa(e)
  });
}
function Ie(e) {
  return new lt({
    check: "string_format",
    format: "uppercase",
    ...Sa(e)
  });
}
function Oe(includes, r) {
  return new mt({
    check: "string_format",
    format: "includes",
    ...Sa(r),
    includes: includes
  });
}
function Te(prefix, r) {
  return new dt({
    check: "string_format",
    format: "starts_with",
    ...Sa(r),
    prefix: prefix
  });
}
function Ee(suffix, r) {
  return new ft({
    check: "string_format",
    format: "ends_with",
    ...Sa(r),
    suffix: suffix
  });
}
function S(tx) {
  return new ht({
    check: "overwrite",
    tx: tx
  });
}
function Ne(e) {
  return S(r => r.normalize(e));
}
function Ae() {
  return S(e => e.trim());
}
function Ce() {
  return S(e => e.toLowerCase());
}
function Re() {
  return S(e => e.toUpperCase());
}
function je() {
  return S(e => YFo(e));
}
function cn(e, element, t) {
  return new e({
    type: "array",
    element: element,
    ...Sa(t)
  });
}
function un(e, fn_2, t) {
  let n = Sa(t);
  return n.abort ?? (n.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: fn_2,
    ...n
  });
}
function an(e, fn_3, t) {
  return new e({
    type: "custom",
    check: "custom",
    fn: fn_3,
    ...Sa(t)
  });
}
function pn(e, r) {
  let t = is(n => (n.addIssue = s => {
    if (typeof s === "string") n.issues.push(Pft(s, n.value, t._zod.def));else {
      let i = s;
      if (i.fatal) i.continue = !1;
      i.code ?? (i.code = "custom"), i.input ?? (i.input = n.value), i.inst ?? (i.inst = t), i.continue ?? (i.continue = !t._zod.def.abort), n.issues.push(Pft(i));
    }
  }, e(n.value, n)), r);
  return t;
}
function is(e, r) {
  let t = new Z({
    check: "custom",
    ...Sa(r)
  });
  return t._zod.check = e, t;
}
function J(e) {
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
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    external: e?.external ?? void 0
  };
}
function Wv(e, r, t = {
  path: [],
  schemaPath: []
}) {
  var n;
  let def = e._zod.def,
    i = r.seen.get(e);
  if (i) {
    if (i.count++, t.schemaPath.includes(e)) i.cycle = t.path;
    return i.schema;
  }
  let c = {
    schema: {},
    count: 1,
    cycle: void 0,
    path: t.path
  };
  r.seen.set(e, c);
  let a = e._zod.toJSONSchema?.();
  if (a) c.schema = a;else {
    let m = {
      ...t,
      schemaPath: [...t.schemaPath, e],
      path: t.path
    };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(r, c.schema, m);else {
      let schema = c.schema,
        f = r.processors[def.type];
      if (!f) throw Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      f(e, r, schema, m);
    }
    let parent_2 = e._zod.parent;
    if (parent_2) {
      if (!c.ref) c.ref = parent_2;
      Wv(parent_2, r, m), r.seen.get(parent_2).isParent = !0;
    }
  }
  let p = r.metadataRegistry.get(e);
  if (p) Object.assign(c.schema, p);
  if (r.io === "input" && k(e)) delete c.schema.examples, delete c.schema.default;
  if (r.io === "input" && "_prefault" in c.schema) (n = c.schema).default ?? (n.default = c.schema._prefault);
  return delete c.schema._prefault, r.seen.get(e).schema;
}
function U(e, r) {
  let t = e.seen.get(r);
  if (!t) throw Error("Unprocessed schema. This is a bug in Zod.");
  let n = new Map();
  for (let c of e.seen.entries()) {
    let a = e.metadataRegistry.get(c[0])?.id;
    if (a) {
      let p = n.get(a);
      if (p && p !== c[0]) throw Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(a, c[0]);
    }
  }
  let s = c => {
      let a = e.target === "draft-2020-12" ? "$defs" : "definitions";
      if (e.external) {
        let d = e.external.registry.get(c[0])?.id,
          h = e.external.uri ?? (_ => _);
        if (d) return {
          ref: h(d)
        };
        let defId = c[1].defId ?? c[1].schema.id ?? `schema${e.counter++}`;
        return c[1].defId = defId, {
          defId: defId,
          ref: `${h("__shared")}#/${a}/${defId}`
        };
      }
      if (c[1] === t) return {
        ref: "#"
      };
      let l = `${"#"}/${a}/`,
        defId_2 = c[1].schema.id ?? `__schema${e.counter++}`;
      return {
        defId: defId_2,
        ref: l + defId_2
      };
    },
    i = c => {
      if (c[1].schema.$ref) return;
      let a = c[1],
        {
          ref: ref,
          defId: defId_3
        } = s(c);
      if (a.def = {
        ...a.schema
      }, defId_3) a.defId = defId_3;
      let schema_2 = a.schema;
      for (let d in schema_2) delete schema_2[d];
      schema_2.$ref = ref;
    };
  if (e.cycles === "throw") for (let c of e.seen.entries()) {
    let a = c[1];
    if (a.cycle) throw Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
  }
  for (let c of e.seen.entries()) {
    let a = c[1];
    if (r === c[0]) {
      i(c);
      continue;
    }
    if (e.external) {
      let l = e.external.registry.get(c[0])?.id;
      if (r !== c[0] && l) {
        i(c);
        continue;
      }
    }
    if (e.metadataRegistry.get(c[0])?.id) {
      i(c);
      continue;
    }
    if (a.cycle) {
      i(c);
      continue;
    }
    if (a.count > 1) {
      if (e.reused === "ref") {
        i(c);
        continue;
      }
    }
  }
}
function B(e, r) {
  let t = e.seen.get(r);
  if (!t) throw Error("Unprocessed schema. This is a bug in Zod.");
  let n = zodSchema => {
    let p = e.seen.get(zodSchema);
    if (p.ref === null) return;
    let jsonSchema = p.def ?? p.schema,
      m = {
        ...jsonSchema
      },
      ref_2 = p.ref;
    if (p.ref = null, ref_2) {
      n(ref_2);
      let f = e.seen.get(ref_2),
        schema_3 = f.schema;
      if (schema_3.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0")) jsonSchema.allOf = jsonSchema.allOf ?? [], jsonSchema.allOf.push(schema_3);else Object.assign(jsonSchema, schema_3);
      if (Object.assign(jsonSchema, m), zodSchema._zod.parent === ref_2) for (let y in jsonSchema) {
        if (y === "$ref" || y === "allOf") continue;
        if (!(y in m)) delete jsonSchema[y];
      }
      if (schema_3.$ref && f.def) for (let y in jsonSchema) {
        if (y === "$ref" || y === "allOf") continue;
        if (y in f.def && JSON.stringify(jsonSchema[y]) === JSON.stringify(f.def[y])) delete jsonSchema[y];
      }
    }
    let parent_3 = zodSchema._zod.parent;
    if (parent_3 && parent_3 !== ref_2) {
      n(parent_3);
      let f = e.seen.get(parent_3);
      if (f?.schema.$ref) {
        if (jsonSchema.$ref = f.schema.$ref, f.def) for (let _ in jsonSchema) {
          if (_ === "$ref" || _ === "allOf") continue;
          if (_ in f.def && JSON.stringify(jsonSchema[_]) === JSON.stringify(f.def[_])) delete jsonSchema[_];
        }
      }
    }
    e.override({
      zodSchema: zodSchema,
      jsonSchema: jsonSchema,
      path: p.path ?? []
    });
  };
  for (let a of [...e.seen.entries()].reverse()) n(a[0]);
  let s = {};
  if (e.target === "draft-2020-12") s.$schema = "https://json-schema.org/draft/2020-12/schema";else if (e.target === "draft-07") s.$schema = "http://json-schema.org/draft-07/schema#";else if (e.target === "draft-04") s.$schema = "http://json-schema.org/draft-04/schema#";else if (e.target === "openapi-3.0") ;
  if (e.external?.uri) {
    let a = e.external.registry.get(r)?.id;
    if (!a) throw Error("Schema is missing an `id` property");
    s.$id = e.external.uri(a);
  }
  Object.assign(s, t.def ?? t.schema);
  let i = e.metadataRegistry.get(r)?.id;
  if (i !== void 0 && s.id === i) delete s.id;
  let c = e.external?.defs ?? {};
  for (let a of e.seen.entries()) {
    let p = a[1];
    if (p.def && p.defId) {
      if (p.def.id === p.defId) delete p.def.id;
      c[p.defId] = p.def;
    }
  }
  if (e.external) ;else if (Object.keys(c).length > 0) if (e.target === "draft-2020-12") s.$defs = c;else s.definitions = c;
  try {
    let a = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(a, "~standard", {
      value: {
        ...r["~standard"],
        jsonSchema: {
          input: F(r, "input", e.processors),
          output: F(r, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), a;
  } catch (error) {
    throw Error("Error converting schema to JSON.");
  }
}
function k(e, r) {
  let t = r ?? {
    seen: new Set()
  };
  if (t.seen.has(e)) return !1;
  t.seen.add(e);
  let def_2 = e._zod.def;
  if (def_2.type === "transform") return !0;
  if (def_2.type === "array") return k(def_2.element, t);
  if (def_2.type === "set") return k(def_2.valueType, t);
  if (def_2.type === "lazy") return k(def_2.getter(), t);
  if (def_2.type === "promise" || def_2.type === "optional" || def_2.type === "nonoptional" || def_2.type === "nullable" || def_2.type === "readonly" || def_2.type === "default" || def_2.type === "prefault") return k(def_2.innerType, t);
  if (def_2.type === "intersection") return k(def_2.left, t) || k(def_2.right, t);
  if (def_2.type === "record" || def_2.type === "map") return k(def_2.keyType, t) || k(def_2.valueType, t);
  if (def_2.type === "pipe") {
    if (e._zod.traits.has("$ZodCodec")) return !0;
    return k(def_2.in, t) || k(def_2.out, t);
  }
  if (def_2.type === "object") {
    for (let s in def_2.shape) if (k(def_2.shape[s], t)) return !0;
    return !1;
  }
  if (def_2.type === "union") {
    for (let s of def_2.options) if (k(s, t)) return !0;
    return !1;
  }
  if (def_2.type === "tuple") {
    for (let s of def_2.items) if (k(s, t)) return !0;
    if (def_2.rest && k(def_2.rest, t)) return !0;
    return !1;
  }
  return !1;
}
var ln = (e, processors = {}) => t => {
    let n = J({
      ...t,
      processors: processors
    });
    return Wv(e, n), U(n, e), B(n, e);
  },
  F = (e, io_2, processors_2 = {}) => n => {
    let {
        libraryOptions: libraryOptions,
        target: target_2
      } = n ?? {},
      c = J({
        ...(libraryOptions ?? {}),
        target: target_2,
        io: io_2,
        processors: processors_2
      });
    return Wv(e, c), U(c, e), B(c, e);
  };
var cs = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
  },
  string = (e, r, t, n) => {
    let s = t;
    s.type = "string";
    let {
      minimum: minimum_4,
      maximum: maximum_3,
      format: format,
      patterns: patterns,
      contentEncoding: contentEncoding
    } = e._zod.bag;
    if (typeof minimum_4 === "number") s.minLength = minimum_4;
    if (typeof maximum_3 === "number") s.maxLength = maximum_3;
    if (format) {
      if (s.format = cs[format] ?? format, s.format === "") delete s.format;
      if (format === "time") delete s.format;
    }
    if (contentEncoding) s.contentEncoding = contentEncoding;
    if (patterns && patterns.size > 0) {
      let m = [...patterns];
      if (m.length === 1) s.pattern = m[0].source;else if (m.length > 1) s.allOf = [...m.map(item => ({
        ...(r.target === "draft-07" || r.target === "draft-04" || r.target === "openapi-3.0" ? {
          type: "string"
        } : {}),
        pattern: item.source
      }))];
    }
  },
  number = (e, r, t, n) => {
    let s = t,
      {
        minimum: minimum_5,
        maximum: maximum_4,
        format: format_2,
        multipleOf: multipleOf,
        exclusiveMaximum: exclusiveMaximum,
        exclusiveMinimum: exclusiveMinimum
      } = e._zod.bag;
    if (typeof format_2 === "string" && format_2.includes("int")) s.type = "integer";else s.type = "number";
    let d = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum_5 ?? Number.NEGATIVE_INFINITY),
      h = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum_4 ?? Number.POSITIVE_INFINITY),
      f = r.target === "draft-04" || r.target === "openapi-3.0";
    if (d) {
      if (f) s.minimum = exclusiveMinimum, s.exclusiveMinimum = !0;else s.exclusiveMinimum = exclusiveMinimum;
    } else if (typeof minimum_5 === "number") s.minimum = minimum_5;
    if (h) {
      if (f) s.maximum = exclusiveMaximum, s.exclusiveMaximum = !0;else s.exclusiveMaximum = exclusiveMaximum;
    } else if (typeof maximum_4 === "number") s.maximum = maximum_4;
    if (typeof multipleOf === "number") s.multipleOf = multipleOf;
  },
  boolean = (e, r, t, n) => {
    t.type = "boolean";
  },
  bigint = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("BigInt cannot be represented in JSON Schema");
  },
  symbol = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("Symbols cannot be represented in JSON Schema");
  },
  Je = (e, r, t, n) => {
    if (r.target === "openapi-3.0") t.type = "string", t.nullable = !0, t.enum = [null];else t.type = "null";
  },
  undefined = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("Undefined cannot be represented in JSON Schema");
  },
  hn = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("Void cannot be represented in JSON Schema");
  },
  never = (e, r, t, n) => {
    t.not = {};
  },
  any = (e, r, t, n) => {},
  unknown = (e, r, t, n) => {},
  date = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("Date cannot be represented in JSON Schema");
  },
  We = (e, r, t, n) => {
    let def_3 = e._zod.def,
      i = bYn(def_3.entries);
    if (i.every(item => typeof item === "number")) t.type = "number";
    if (i.every(item => typeof item === "string")) t.type = "string";
    t.enum = i;
  },
  literal = (e, r, t, n) => {
    let def_4 = e._zod.def,
      i = [];
    for (let c of def_4.values) if (c === void 0) {
      if (r.unrepresentable === "throw") throw Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof c === "bigint") {
      if (r.unrepresentable === "throw") throw Error("BigInt literals cannot be represented in JSON Schema");else i.push(Number(c));
    } else i.push(c);
    if (i.length === 0) ;else if (i.length === 1) {
      let c = i[0];
      if (t.type = c === null ? "null" : typeof c, r.target === "draft-04" || r.target === "openapi-3.0") t.enum = [c];else t.const = c;
    } else {
      if (i.every(item => typeof item === "number")) t.type = "number";
      if (i.every(item => typeof item === "string")) t.type = "string";
      if (i.every(item => typeof item === "boolean")) t.type = "boolean";
      if (i.every(item => item === null)) t.type = "null";
      t.enum = i;
    }
  },
  nan = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("NaN cannot be represented in JSON Schema");
  },
  template_literal = (e, r, t, n) => {
    let s = t,
      pattern_4 = e._zod.pattern;
    if (!pattern_4) throw Error("Pattern not found in template literal");
    s.type = "string", s.pattern = pattern_4.source;
  },
  file = (e, r, t, n) => {
    let s = t,
      i = {
        type: "string",
        format: "binary",
        contentEncoding: "binary"
      },
      {
        minimum: minimum_6,
        maximum: maximum_5,
        mime: mime
      } = e._zod.bag;
    if (minimum_6 !== void 0) i.minLength = minimum_6;
    if (maximum_5 !== void 0) i.maxLength = maximum_5;
    if (mime) {
      if (mime.length === 1) i.contentMediaType = mime[0], Object.assign(s, i);else Object.assign(s, i), s.anyOf = mime.map(l => ({
        contentMediaType: l
      }));
    } else Object.assign(s, i);
  },
  success = (e, r, t, n) => {
    t.type = "boolean";
  },
  custom = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
  },
  $n = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("Function types cannot be represented in JSON Schema");
  },
  transform = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
  },
  map = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("Map cannot be represented in JSON Schema");
  },
  bn = (e, r, t, n) => {
    if (r.unrepresentable === "throw") throw Error("Set cannot be represented in JSON Schema");
  },
  array = (e, r, t, n) => {
    let s = t,
      def_5 = e._zod.def,
      {
        minimum: minimum_7,
        maximum: maximum_6
      } = e._zod.bag;
    if (typeof minimum_7 === "number") s.minItems = minimum_7;
    if (typeof maximum_6 === "number") s.maxItems = maximum_6;
    s.type = "array", s.items = Wv(def_5.element, r, {
      ...n,
      path: [...n.path, "items"]
    });
  },
  object = (e, r, t, n) => {
    let s = t,
      def_6 = e._zod.def;
    s.type = "object", s.properties = {};
    let shape_4 = def_6.shape;
    for (let l in shape_4) s.properties[l] = Wv(shape_4[l], r, {
      ...n,
      path: [...n.path, "properties", l]
    });
    let a = new Set(Object.keys(shape_4)),
      p = new Set([...a].filter(item => {
        let _zod_3 = def_6.shape[item]._zod;
        if (r.io === "input") return _zod_3.optin === void 0;else return _zod_3.optout === void 0;
      }));
    if (p.size > 0) s.required = Array.from(p);
    if (def_6.catchall?._zod.def.type === "never") s.additionalProperties = !1;else if (!def_6.catchall) {
      if (r.io === "output") s.additionalProperties = !1;
    } else if (def_6.catchall) s.additionalProperties = Wv(def_6.catchall, r, {
      ...n,
      path: [...n.path, "additionalProperties"]
    });
  },
  union = (e, r, t, n) => {
    let def_7 = e._zod.def,
      i = def_7.inclusive === !1,
      c = def_7.options.map((item, index) => Wv(item, r, {
        ...n,
        path: [...n.path, i ? "oneOf" : "anyOf", index]
      }));
    if (i) t.oneOf = c;else t.anyOf = c;
  },
  intersection = (e, r, t, n) => {
    let def_8 = e._zod.def,
      i = Wv(def_8.left, r, {
        ...n,
        path: [...n.path, "allOf", 0]
      }),
      c = Wv(def_8.right, r, {
        ...n,
        path: [...n.path, "allOf", 1]
      }),
      a = l => "allOf" in l && Object.keys(l).length === 1,
      p = [...(a(i) ? i.allOf : [i]), ...(a(c) ? c.allOf : [c])];
    t.allOf = p;
  },
  tuple = (e, r, t, n) => {
    let s = t,
      def_9 = e._zod.def;
    s.type = "array";
    let c = r.target === "draft-2020-12" ? "prefixItems" : "items",
      a = r.target === "draft-2020-12" ? "items" : r.target === "openapi-3.0" ? "items" : "additionalItems",
      anyOf = def_9.items.map((item, index) => Wv(item, r, {
        ...n,
        path: [...n.path, c, index]
      })),
      l = def_9.rest ? Wv(def_9.rest, r, {
        ...n,
        path: [...n.path, a, ...(r.target === "openapi-3.0" ? [def_9.items.length] : [])]
      }) : null;
    if (r.target === "draft-2020-12") {
      if (s.prefixItems = anyOf, l) s.items = l;
    } else if (r.target === "openapi-3.0") {
      if (s.items = {
        anyOf: anyOf
      }, l) s.items.anyOf.push(l);
      if (s.minItems = anyOf.length, !l) s.maxItems = anyOf.length;
    } else if (s.items = anyOf, l) s.additionalItems = l;
    let {
      minimum: minimum_8,
      maximum: maximum_7
    } = e._zod.bag;
    if (typeof minimum_8 === "number") s.minItems = minimum_8;
    if (typeof maximum_7 === "number") s.maxItems = maximum_7;
  },
  record = (e, r, t, n) => {
    let s = t,
      def_10 = e._zod.def;
    s.type = "object";
    let keyType = def_10.keyType,
      p = keyType._zod.bag?.patterns;
    if (def_10.mode === "loose" && p && p.size > 0) {
      let m = Wv(def_10.valueType, r, {
        ...n,
        path: [...n.path, "patternProperties", "*"]
      });
      s.patternProperties = {};
      for (let d of p) s.patternProperties[d.source] = m;
    } else {
      if (r.target === "draft-07" || r.target === "draft-2020-12") s.propertyNames = Wv(def_10.keyType, r, {
        ...n,
        path: [...n.path, "propertyNames"]
      });
      s.additionalProperties = Wv(def_10.valueType, r, {
        ...n,
        path: [...n.path, "additionalProperties"]
      });
    }
    let l = keyType._zod.values;
    if (l) {
      let m = [...l].filter(item => typeof item === "string" || typeof item === "number");
      if (m.length > 0) s.required = m;
    }
  },
  nullable = (e, r, t, n) => {
    let def_11 = e._zod.def,
      i = Wv(def_11.innerType, r, n),
      c = r.seen.get(e);
    if (r.target === "openapi-3.0") c.ref = def_11.innerType, t.nullable = !0;else t.anyOf = [i, {
      type: "null"
    }];
  },
  nonoptional = (e, r, t, n) => {
    let def_12 = e._zod.def;
    Wv(def_12.innerType, r, n);
    let i = r.seen.get(e);
    i.ref = def_12.innerType;
  },
  sr = (e, r, t, n) => {
    let def_13 = e._zod.def;
    Wv(def_13.innerType, r, n);
    let i = r.seen.get(e);
    i.ref = def_13.innerType, t.default = JSON.parse(JSON.stringify(def_13.defaultValue));
  },
  prefault = (e, r, t, n) => {
    let def_14 = e._zod.def;
    Wv(def_14.innerType, r, n);
    let i = r.seen.get(e);
    if (i.ref = def_14.innerType, r.io === "input") t._prefault = JSON.parse(JSON.stringify(def_14.defaultValue));
  },
  cr = (e, r, t, n) => {
    let def_15 = e._zod.def;
    Wv(def_15.innerType, r, n);
    let i = r.seen.get(e);
    i.ref = def_15.innerType;
    let c;
    try {
      c = def_15.catchValue(void 0);
    } catch {
      throw Error("Dynamic catch values are not supported in JSON Schema");
    }
    t.default = c;
  },
  pipe = (e, r, t, n) => {
    let def_16 = e._zod.def,
      i = def_16.in._zod.traits.has("$ZodTransform"),
      c = r.io === "input" ? i ? def_16.out : def_16.in : def_16.out;
    Wv(c, r, n);
    let a = r.seen.get(e);
    a.ref = c;
  },
  readonly = (e, r, t, n) => {
    let def_17 = e._zod.def;
    Wv(def_17.innerType, r, n);
    let i = r.seen.get(e);
    i.ref = def_17.innerType, t.readOnly = !0;
  },
  promise = (e, r, t, n) => {
    let def_18 = e._zod.def;
    Wv(def_18.innerType, r, n);
    let i = r.seen.get(e);
    i.ref = def_18.innerType;
  },
  optional = (e, r, t, n) => {
    let def_19 = e._zod.def;
    Wv(def_19.innerType, r, n);
    let i = r.seen.get(e);
    i.ref = def_19.innerType;
  },
  lazy = (e, r, t, n) => {
    let innerType = e._zod.innerType;
    Wv(innerType, r, n);
    let i = r.seen.get(e);
    i.ref = innerType;
  },
  processors_3 = {
    string: string,
    number: number,
    boolean: boolean,
    bigint: bigint,
    symbol: symbol,
    null: Je,
    undefined: undefined,
    void: hn,
    never: never,
    any: any,
    unknown: unknown,
    date: date,
    enum: We,
    literal: literal,
    nan: nan,
    template_literal: template_literal,
    file: file,
    success: success,
    custom: custom,
    function: $n,
    transform: transform,
    map: map,
    set: bn,
    array: array,
    object: object,
    union: union,
    intersection: intersection,
    tuple: tuple,
    record: record,
    nullable: nullable,
    nonoptional: nonoptional,
    default: sr,
    prefault: prefault,
    catch: cr,
    pipe: pipe,
    readonly: readonly,
    promise: promise,
    optional: optional,
    lazy: lazy
  };
function fde(e, r) {
  if ("_idmap" in e) {
    let registry = e,
      s = J({
        ...r,
        processors: processors_3
      }),
      defs = {};
    for (let p of registry._idmap.entries()) {
      let [l, m] = p;
      Wv(m, s);
    }
    let schemas = {},
      a = {
        registry: registry,
        uri: r?.uri,
        defs: defs
      };
    s.external = a;
    for (let p of registry._idmap.entries()) {
      let [l, m] = p;
      U(s, m), schemas[l] = B(s, m);
    }
    if (Object.keys(defs).length > 0) {
      let p = s.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [p]: defs
      };
    }
    return {
      schemas: schemas
    };
  }
  let t = J({
    ...r,
    processors: processors_3
  });
  return Wv(e, t), U(t, e), B(t, e);
}
var kn = (e, r) => {
    K.init(e, r), e.name = "ZodError", Object.defineProperties(e, {
      format: {
        value: t => _r(e, t)
      },
      flatten: {
        value: t => hr(e, t)
      },
      addIssue: {
        value: t => {
          e.issues.push(t), e.message = JSON.stringify(e.issues, Hgn, 2);
        }
      },
      addIssues: {
        value: t => {
          e.issues.push(...t), e.message = JSON.stringify(e.issues, Hgn, 2);
        }
      },
      isEmpty: {
        get() {
          return e.issues.length === 0;
        }
      }
    });
  },
  QR = Gn("ZodError", kn),
  w = Gn("ZodError", kn, {
    Parent: Error
  });
var wn = G(w),
  Pn = Y(w),
  hYn = N(w),
  Sn = R(w),
  In = zr(w),
  On = vr(w),
  Tn = $r(w),
  En = yr(w),
  Nn = br(w),
  An = Zr(w),
  Cn = kr(w),
  Rn = wr(w);
var weakMap = new WeakMap();
function W(e, r, t) {
  let n = Object.getPrototypeOf(e),
    s = weakMap.get(n);
  if (!s) s = new Set(), weakMap.set(n, s);
  if (s.has(r)) return;
  s.add(r);
  for (let i in t) {
    let c = t[i];
    Object.defineProperty(n, i, {
      configurable: !0,
      enumerable: !1,
      get() {
        let value_15 = c.bind(this);
        return Object.defineProperty(this, i, {
          configurable: !0,
          writable: !0,
          enumerable: !0,
          value: value_15
        }), value_15;
      },
      set(value_16) {
        Object.defineProperty(this, i, {
          configurable: !0,
          writable: !0,
          enumerable: !0,
          value: value_16
        });
      }
    });
  }
}
var Zb = Gn("ZodType", (e, value_17) => (Qb.init(e, value_17), Object.assign(e["~standard"], {
    jsonSchema: {
      input: F(e, "input"),
      output: F(e, "output")
    }
  }), e.toJSONSchema = ln(e, {}), e.def = value_17, e.type = value_17.type, Object.defineProperty(e, "_def", {
    value: value_17
  }), e.parse = (t, n) => wn(e, t, n, {
    callee: e.parse
  }), e.safeParse = (t, n) => hYn(e, t, n), e.parseAsync = async (t, n) => Pn(e, t, n, {
    callee: e.parseAsync
  }), e.safeParseAsync = async (t, n) => Sn(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => In(e, t, n), e.decode = (t, n) => On(e, t, n), e.encodeAsync = async (t, n) => Tn(e, t, n), e.decodeAsync = async (t, n) => En(e, t, n), e.safeEncode = (t, n) => Nn(e, t, n), e.safeDecode = (t, n) => An(e, t, n), e.safeEncodeAsync = async (t, n) => Cn(e, t, n), e.safeDecodeAsync = async (t, n) => Rn(e, t, n), W(e, "ZodType", {
    check(...t) {
      let def_20 = this.def;
      return this.clone(N8e(def_20, {
        checks: [...(def_20.checks ?? []), ...t.map(s => typeof s === "function" ? {
          _zod: {
            check: s,
            def: {
              check: "custom"
            },
            onattach: []
          }
        } : s)]
      }), {
        parent: !0
      });
    },
    with(...t) {
      return this.check(...t);
    },
    clone(t, n) {
      return i_e(this, t, n);
    },
    brand() {
      return this;
    },
    register(t, n) {
      return t.add(this, n), this;
    },
    refine(t, n) {
      return this.check(ei(t, n));
    },
    superRefine(t, n) {
      return this.check(ri(t, n));
    },
    overwrite(t) {
      return this.check(S(t));
    },
    optional() {
      return Bs(this);
    },
    exactOptional() {
      return Js(this);
    },
    nullable() {
      return Ln(this);
    },
    nullish() {
      return Bs(Ln(this));
    },
    nonoptional(t) {
      return Gs(this, t);
    },
    array() {
      return C(this);
    },
    or(t) {
      return $e([this, t]);
    },
    and(t) {
      return HJ(this, t);
    },
    transform(t) {
      return Fn(this, Yn(t));
    },
    default(t) {
      return Vs(this, t);
    },
    prefault(t) {
      return Ks(this, t);
    },
    catch(t) {
      return Ys(this, t);
    },
    pipe(t) {
      return Fn(this, t);
    },
    readonly() {
      return Hs(this);
    },
    describe(description) {
      let n = this.clone();
      return __zod_globalRegistry.add(n, {
        description: description
      }), n;
    },
    meta(...t) {
      if (t.length === 0) return __zod_globalRegistry.get(this);
      let n = this.clone();
      return __zod_globalRegistry.add(n, t[0]), n;
    },
    isOptional() {
      return this.safeParse(void 0).success;
    },
    isNullable() {
      return this.safeParse(null).success;
    },
    apply(t) {
      return t(this);
    }
  }), Object.defineProperty(e, "description", {
    get() {
      return __zod_globalRegistry.get(e)?.description;
    },
    configurable: !0
  }), e)),
  Mn = Gn("_ZodString", (e, r) => {
    Q.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (n, s, i) => string(e, n, s, i);
    let bag_9 = e._zod.bag;
    e.format = bag_9.format ?? null, e.minLength = bag_9.minimum ?? null, e.maxLength = bag_9.maximum ?? null, W(e, "_ZodString", {
      regex(...n) {
        return this.check(Pe(...n));
      },
      includes(...n) {
        return this.check(Oe(...n));
      },
      startsWith(...n) {
        return this.check(Te(...n));
      },
      endsWith(...n) {
        return this.check(Ee(...n));
      },
      min(...n) {
        return this.check(O(...n));
      },
      max(...n) {
        return this.check(uBt(...n));
      },
      length(...n) {
        return this.check(oe(...n));
      },
      nonempty(...n) {
        return this.check(O(1, ...n));
      },
      lowercase(n) {
        return this.check(Se(n));
      },
      uppercase(n) {
        return this.check(Ie(n));
      },
      trim() {
        return this.check(Ae());
      },
      normalize(...n) {
        return this.check(Ne(...n));
      },
      toLowerCase() {
        return this.check(Ce());
      },
      toUpperCase() {
        return this.check(Re());
      },
      slugify() {
        return this.check(je());
      }
    });
  }),
  pBt = Gn("ZodString", (e, r) => {
    Q.init(e, r), Mn.init(e, r), e.email = t => e.check(ye(Bn, t)), e.url = t => e.check(ke(Vn, t)), e.jwt = t => e.check(Wo(Is, t)), e.emoji = t => e.check(No(_s, t)), e.guid = t => e.check(be(Dn, t)), e.uuid = t => e.check(Ze(V, t)), e.uuidv4 = t => e.check(Oo(V, t)), e.uuidv6 = t => e.check(To(V, t)), e.uuidv7 = t => e.check(Eo(V, t)), e.nanoid = t => e.check(Ao(gs, t)), e.guid = t => e.check(be(Dn, t)), e.cuid = t => e.check(Co(xs, t)), e.cuid2 = t => e.check(Ro(zs, t)), e.ulid = t => e.check(jo(vs, t)), e.base64 = t => e.check(we(Wn, t)), e.base64url = t => e.check(Bo(Ps, t)), e.xid = t => e.check(Do($s, t)), e.ksuid = t => e.check(Lo(ys, t)), e.ipv4 = t => e.check(Fo(bs, t)), e.ipv6 = t => e.check(Jo(Zs, t)), e.cidrv4 = t => e.check(Uo(ks, t)), e.cidrv6 = t => e.check(Mo(ws, t)), e.e164 = t => e.check(Vo(Ss, t)), e.datetime = t => e.check(rj(t)), e.date = t => e.check(aWr(t)), e.time = t => e.check(Jn(t)), e.duration = t => e.check(Un(t));
  });
function o(e) {
  return Io(pBt, e);
}
var x = Gn("ZodStringFormat", (e, r) => {
    g.init(e, r), Mn.init(e, r);
  }),
  Bn = Gn("ZodEmail", (e, r) => {
    Tt.init(e, r), x.init(e, r);
  });
function GFo(e) {
  return ye(Bn, e);
}
var Dn = Gn("ZodGUID", (e, r) => {
  It.init(e, r), x.init(e, r);
});
var V = Gn("ZodUUID", (e, r) => {
  Ot.init(e, r), x.init(e, r);
});
function VFo(e) {
  return Ze(V, e);
}
var Vn = Gn("ZodURL", (e, r) => {
  Et.init(e, r), x.init(e, r);
});
function D8e(e) {
  return ke(Vn, e);
}
var _s = Gn("ZodEmoji", (e, r) => {
  Nt.init(e, r), x.init(e, r);
});
var gs = Gn("ZodNanoID", (e, r) => {
  At.init(e, r), x.init(e, r);
});
var xs = Gn("ZodCUID", (e, r) => {
  Ct.init(e, r), x.init(e, r);
});
var zs = Gn("ZodCUID2", (e, r) => {
  Rt.init(e, r), x.init(e, r);
});
var vs = Gn("ZodULID", (e, r) => {
  jt.init(e, r), x.init(e, r);
});
var $s = Gn("ZodXID", (e, r) => {
  Dt.init(e, r), x.init(e, r);
});
var ys = Gn("ZodKSUID", (e, r) => {
  Lt.init(e, r), x.init(e, r);
});
var bs = Gn("ZodIPv4", (e, r) => {
  Bt.init(e, r), x.init(e, r);
});
var Zs = Gn("ZodIPv6", (e, r) => {
  Vt.init(e, r), x.init(e, r);
});
var ks = Gn("ZodCIDRv4", (e, r) => {
  Wt.init(e, r), x.init(e, r);
});
var ws = Gn("ZodCIDRv6", (e, r) => {
  Kt.init(e, r), x.init(e, r);
});
var Wn = Gn("ZodBase64", (e, r) => {
  Yt.init(e, r), x.init(e, r);
});
function qFo(e) {
  return we(Wn, e);
}
var Ps = Gn("ZodBase64URL", (e, r) => {
  qt.init(e, r), x.init(e, r);
});
var Ss = Gn("ZodE164", (e, r) => {
  Xt.init(e, r), x.init(e, r);
});
var Is = Gn("ZodJWT", (e, r) => {
  Ht.init(e, r), x.init(e, r);
});
var Cft = Gn("ZodNumber", (e, r) => {
  ge.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (n, s, i) => number(e, n, s, i), W(e, "ZodNumber", {
    gt(n, s) {
      return this.check(re(n, s));
    },
    gte(n, s) {
      return this.check(L(n, s));
    },
    min(n, s) {
      return this.check(L(n, s));
    },
    lt(n, s) {
      return this.check(ee(n, s));
    },
    lte(n, s) {
      return this.check(D(n, s));
    },
    max(n, s) {
      return this.check(D(n, s));
    },
    int(n) {
      return this.check(VS(n));
    },
    safe(n) {
      return this.check(VS(n));
    },
    positive(n) {
      return this.check(re(0, n));
    },
    nonnegative(n) {
      return this.check(L(0, n));
    },
    negative(n) {
      return this.check(ee(0, n));
    },
    nonpositive(n) {
      return this.check(D(0, n));
    },
    multipleOf(n, s) {
      return this.check(te(n, s));
    },
    step(n, s) {
      return this.check(te(n, s));
    },
    finite() {
      return this;
    }
  });
  let bag_10 = e._zod.bag;
  e.minValue = Math.max(bag_10.minimum ?? Number.NEGATIVE_INFINITY, bag_10.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(bag_10.maximum ?? Number.POSITIVE_INFINITY, bag_10.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (bag_10.format ?? "").includes("int") || Number.isSafeInteger(bag_10.multipleOf ?? 0.5), e.isFinite = !0, e.format = bag_10.format ?? null;
});
function E(e) {
  return Xo(Cft, e);
}
var Os = Gn("ZodNumberFormat", (e, r) => {
  Qt.init(e, r), Cft.init(e, r);
});
function VS(e) {
  return Ho(Os, e);
}
var fBt = Gn("ZodBoolean", (e, r) => {
  eo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => boolean(e, t, n, s);
});
function M(e) {
  return en(fBt, e);
}
var Ts = Gn("ZodUndefined", (e, r) => {
  ro.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => undefined(e, t, n, s);
});
function Wne(e) {
  return rn(Ts, e);
}
var Es = Gn("ZodNull", (e, r) => {
  to.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => Je(e, t, n, s);
});
function uf(e) {
  return tn(Es, e);
}
var Ns = Gn("ZodAny", (e, r) => {
  oo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => any(e, t, n, s);
});
function eK() {
  return on(Ns);
}
var As = Gn("ZodUnknown", (e, r) => {
  no.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => unknown(e, t, n, s);
});
function ae() {
  return nn(As);
}
var Cs = Gn("ZodNever", (e, r) => {
  so.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => never(e, t, n, s);
});
function zAe(e) {
  return sn(Cs, e);
}
var lWr = Gn("ZodArray", (e, r) => {
  io.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => array(e, t, n, s), e.element = r.element, W(e, "ZodArray", {
    min(t, n) {
      return this.check(O(t, n));
    },
    nonempty(t) {
      return this.check(O(1, t));
    },
    max(t, n) {
      return this.check(uBt(t, n));
    },
    length(t, n) {
      return this.check(oe(t, n));
    },
    unwrap() {
      return this.element;
    }
  });
});
function C(e, r) {
  return cn(lWr, e, r);
}
var s_e = Gn("ZodObject", (e, r) => {
  ao.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => object(e, t, n, s), Bg(e, "shape", () => r.shape), W(e, "ZodObject", {
    keyof() {
      return z(Object.keys(this._zod.def.shape));
    },
    catchall(catchall_3) {
      return this.clone({
        ...this._zod.def,
        catchall: catchall_3
      });
    },
    passthrough() {
      return this.clone({
        ...this._zod.def,
        catchall: ae()
      });
    },
    loose() {
      return this.clone({
        ...this._zod.def,
        catchall: ae()
      });
    },
    strict() {
      return this.clone({
        ...this._zod.def,
        catchall: zAe()
      });
    },
    strip() {
      return this.clone({
        ...this._zod.def,
        catchall: void 0
      });
    },
    extend(t) {
      return dVo(this, t);
    },
    safeExtend(t) {
      return uVo(this, t);
    },
    merge(t) {
      return pVo(this, t);
    },
    pick(t) {
      return lVo(this, t);
    },
    omit(t) {
      return cVo(this, t);
    },
    partial(...t) {
      return fVo(yYn, this, t[0]);
    },
    required(...t) {
      return mVo(qn, this, t[0]);
    }
  });
});
function u(e, r) {
  let t = {
    type: "object",
    shape: e ?? {},
    ...Sa(r)
  };
  return new s_e(t);
}
function Qe(shape_5, r) {
  return new s_e({
    type: "object",
    shape: shape_5,
    catchall: zAe(),
    ...Sa(r)
  });
}
function ut(shape_6, r) {
  return new s_e({
    type: "object",
    shape: shape_6,
    catchall: ae(),
    ...Sa(r)
  });
}
var Kn = Gn("ZodUnion", (e, r) => {
  xe.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => union(e, t, n, s), e.options = r.options;
});
function $e(options_2, r) {
  return new Kn({
    type: "union",
    options: options_2,
    ...Sa(r)
  });
}
var Rs = Gn("ZodDiscriminatedUnion", (e, r) => {
  Kn.init(e, r), po.init(e, r);
});
function Qo(discriminator, options_3, t) {
  return new Rs({
    type: "union",
    options: options_3,
    discriminator: discriminator,
    ...Sa(t)
  });
}
var js = Gn("ZodIntersection", (e, r) => {
  lo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => intersection(e, t, n, s);
});
function HJ(left, right) {
  return new js({
    type: "intersection",
    left: left,
    right: right
  });
}
var Ds = Gn("ZodTuple", (e, r) => {
  mo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => tuple(e, t, n, s), e.rest = rest => e.clone({
    ...e._zod.def,
    rest: rest
  });
});
function tK(items_2, r, t) {
  let n = r instanceof Qb,
    s = n ? t : r;
  return new Ds({
    type: "tuple",
    items: items_2,
    rest: n ? r : null,
    ...Sa(s)
  });
}
var lr = Gn("ZodRecord", (e, r) => {
  fo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => record(e, t, n, s), e.keyType = r.keyType, e.valueType = r.valueType;
});
function fe(e, valueType, t) {
  if (!valueType || !valueType._zod) return new lr({
    type: "record",
    keyType: o(),
    valueType: e,
    ...Sa(valueType)
  });
  return new lr({
    type: "record",
    keyType: e,
    valueType: valueType,
    ...Sa(t)
  });
}
function Rft(e, valueType_2, t) {
  let keyType_2 = i_e(e);
  return keyType_2._zod.values = void 0, new lr({
    type: "record",
    keyType: keyType_2,
    valueType: valueType_2,
    ...Sa(t)
  });
}
var Dgn = Gn("ZodEnum", (e, r) => {
  ho.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (n, s, i) => We(e, n, s, i), e.enum = r.entries, e.options = Object.values(r.entries);
  let t = new Set(Object.keys(r.entries));
  e.extract = (n, s) => {
    let entries = {};
    for (let c of n) if (t.has(c)) entries[c] = r.entries[c];else throw Error(`Key ${c} not found in enum`);
    return new Dgn({
      ...r,
      checks: [],
      ...Sa(s),
      entries: entries
    });
  }, e.exclude = (n, s) => {
    let entries_2 = {
      ...r.entries
    };
    for (let c of n) if (t.has(c)) delete entries_2[c];else throw Error(`Key ${c} not found in enum`);
    return new Dgn({
      ...r,
      checks: [],
      ...Sa(s),
      entries: entries_2
    });
  };
});
function z(e, r) {
  let entries_3 = Array.isArray(e) ? Object.fromEntries(e.map(item => [item, item])) : e;
  return new Dgn({
    type: "enum",
    entries: entries_3,
    ...Sa(r)
  });
}
var cWr = Gn("ZodLiteral", (e, r) => {
  _o.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => literal(e, t, n, s), e.values = new Set(r.values), Object.defineProperty(e, "value", {
    get() {
      if (r.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return r.values[0];
    }
  });
});
function A(e, r) {
  return new cWr({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...Sa(r)
  });
}
var Ls = Gn("ZodTransform", (e, r) => {
  go.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => transform(e, t, n, s), e._zod.parse = (t, n) => {
    if (n.direction === "backward") throw new Ngn(e.constructor.name);
    t.addIssue = i => {
      if (typeof i === "string") t.issues.push(Pft(i, t.value, r));else {
        let c = i;
        if (c.fatal) c.continue = !1;
        c.code ?? (c.code = "custom"), c.input ?? (c.input = t.value), c.inst ?? (c.inst = e), t.issues.push(Pft(c));
      }
    };
    let s = r.transform(t.value, t);
    if (s instanceof Promise) return s.then(i => (t.value = i, t.fallback = !0, t));
    return t.value = s, t.fallback = !0, t;
  };
});
function Yn(transform_2) {
  return new Ls({
    type: "transform",
    transform: transform_2
  });
}
var yYn = Gn("ZodOptional", (e, r) => {
  ze.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => optional(e, t, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Bs(innerType_2) {
  return new yYn({
    type: "optional",
    innerType: innerType_2
  });
}
var Fs = Gn("ZodExactOptional", (e, r) => {
  xo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => optional(e, t, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Js(innerType_3) {
  return new Fs({
    type: "optional",
    innerType: innerType_3
  });
}
var Us = Gn("ZodNullable", (e, r) => {
  zo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => nullable(e, t, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Ln(innerType_4) {
  return new Us({
    type: "nullable",
    innerType: innerType_4
  });
}
var Ms = Gn("ZodDefault", (e, r) => {
  vo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => sr(e, t, n, s), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Vs(innerType_5, r) {
  return new Ms({
    type: "default",
    innerType: innerType_5,
    get defaultValue() {
      return typeof r === "function" ? r() : fWr(r);
    }
  });
}
var Ws = Gn("ZodPrefault", (e, r) => {
  $o.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => prefault(e, t, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Ks(innerType_6, r) {
  return new Ws({
    type: "prefault",
    innerType: innerType_6,
    get defaultValue() {
      return typeof r === "function" ? r() : fWr(r);
    }
  });
}
var qn = Gn("ZodNonOptional", (e, r) => {
  yo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => nonoptional(e, t, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Gs(innerType_7, r) {
  return new qn({
    type: "nonoptional",
    innerType: innerType_7,
    ...Sa(r)
  });
}
var _Yn = Gn("ZodCatch", (e, r) => {
  bo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => cr(e, t, n, s), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Ys(innerType_8, r) {
  return new _Yn({
    type: "catch",
    innerType: innerType_8,
    catchValue: typeof r === "function" ? r : () => r
  });
}
var Lgn = Gn("ZodPipe", (e, r) => {
  ve.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => pipe(e, t, n, s), e.in = r.in, e.out = r.out;
});
function Fn(e, out) {
  return new Lgn({
    type: "pipe",
    in: e,
    out: out
  });
}
var qs = Gn("ZodPreprocess", (e, r) => {
    Lgn.init(e, r), Zo.init(e, r);
  }),
  Xs = Gn("ZodReadonly", (e, r) => {
    ko.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => readonly(e, t, n, s), e.unwrap = () => e._zod.def.innerType;
  });
function Hs(innerType_9) {
  return new Xs({
    type: "readonly",
    innerType: innerType_9
  });
}
var Qs = Gn("ZodLazy", (e, r) => {
  gYn.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => lazy(e, t, n, s), e.unwrap = () => e._zod.def.getter();
});
function vC(getter) {
  return new Qs({
    type: "lazy",
    getter: getter
  });
}
var Xn = Gn("ZodCustom", (e, r) => {
  wo.init(e, r), Zb.init(e, r), e._zod.processJSONSchema = (t, n, s) => custom(e, t, n, s);
});
function lp(e, r) {
  return un(Xn, e ?? (() => !0), r);
}
function ei(e, r = {}) {
  return an(Xn, e, r);
}
function ri(e, r) {
  return pn(e, r);
}
function Bi(e, out_2) {
  return new qs({
    type: "pipe",
    in: Yn(e),
    out: out_2
  });
}
var oi = Gn("ZodISODateTime", (e, r) => {
  Ft.init(e, r), x.init(e, r);
});
function rj(e) {
  return Ko(oi, e);
}
var ni = Gn("ZodISODate", (e, r) => {
  Jt.init(e, r), x.init(e, r);
});
function aWr(e) {
  return Go(ni, e);
}
var si = Gn("ZodISOTime", (e, r) => {
  Ut.init(e, r), x.init(e, r);
});
function Jn(e) {
  return Yo(si, e);
}
var ii = Gn("ZodISODuration", (e, r) => {
  Mt.init(e, r), x.init(e, r);
});
function Un(e) {
  return qo(ii, e);
}
export { Mgn, Qb, gYn, __zod_globalRegistry as TUe, jFo, WFo, zFo, uBt, Wv, fde, rj, aWr, QR, hYn, Zb, pBt, o, GFo, VFo, D8e, qFo, Cft, E, VS, fBt, M, Wne, uf, eK, ae, zAe, lWr, C, s_e, u, Qe, ut, $e, Qo, HJ, tK, fe, Rft, Dgn, z, cWr, A, yYn, Bs, _Yn, Lgn, vC, lp, Bi };