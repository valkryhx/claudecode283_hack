// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var g;
(function (e) {
  e.assertEqual = s => {};
  function t(s) {}
  e.assertIs = t;
  function r(s) {
    throw Error();
  }
  e.assertNever = r, e.arrayToEnum = s => {
    let i = {};
    for (let n of s) i[n] = n;
    return i;
  }, e.getValidEnumValues = s => {
    let i = e.objectKeys(s).filter(item => typeof s[s[item]] !== "number"),
      n = {};
    for (let c of i) n[c] = s[c];
    return e.objectValues(n);
  }, e.objectValues = s => e.objectKeys(s).map(function (item) {
    return s[item];
  }), e.objectKeys = typeof Object.keys === "function" ? s => Object.keys(s) : s => {
    let i = [];
    for (let n in s) if (Object.prototype.hasOwnProperty.call(s, n)) i.push(n);
    return i;
  }, e.find = (s, i) => {
    for (let n of s) if (i(n)) return n;
    return;
  }, e.isInteger = typeof Number.isInteger === "function" ? s => Number.isInteger(s) : s => typeof s === "number" && Number.isFinite(s) && Math.floor(s) === s;
  function a(s, i = " | ") {
    return s.map(item => typeof item === "string" ? `'${item}'` : item).join(i);
  }
  e.joinValues = a, e.jsonStringifyReplacer = (s, i) => {
    if (typeof i === "bigint") return i.toString();
    return i;
  };
})(g || (g = {}));
var be;
(function (e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
  });
})(be || (be = {}));
var d = g.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
  R = e => {
    switch (typeof e) {
      case "undefined":
        return d.undefined;
      case "string":
        return d.string;
      case "number":
        return Number.isNaN(e) ? d.nan : d.number;
      case "boolean":
        return d.boolean;
      case "function":
        return d.function;
      case "bigint":
        return d.bigint;
      case "symbol":
        return d.symbol;
      case "object":
        if (Array.isArray(e)) return d.array;
        if (e === null) return d.null;
        if (e.then && typeof e.then === "function" && e.catch && typeof e.catch === "function") return d.promise;
        if (typeof Map < "u" && e instanceof Map) return d.map;
        if (typeof Set < "u" && e instanceof Set) return d.set;
        if (typeof Date < "u" && e instanceof Date) return d.date;
        return d.object;
      default:
        return d.unknown;
    }
  };
var rr = g.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super();
    this.issues = [], this.addIssue = r => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    let t = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, t);else this.__proto__ = t;
    this.name = "ZodError", this.issues = e;
  }
  format(e) {
    let t = e || function (s) {
        return s.message;
      },
      r = {
        _errors: []
      },
      a = s => {
        for (let i of s.issues) if (i.code === "invalid_union") i.unionErrors.map(a);else if (i.code === "invalid_return_type") a(i.returnTypeError);else if (i.code === "invalid_arguments") a(i.argumentsError);else if (i.path.length === 0) r._errors.push(t(i));else {
          let n = r,
            c = 0;
          while (c < i.path.length) {
            let o = i.path[c];
            if (c !== i.path.length - 1) n[o] = n[o] || {
              _errors: []
            };else n[o] = n[o] || {
              _errors: []
            }, n[o]._errors.push(t(i));
            n = n[o], c++;
          }
        }
      };
    return a(this), r;
  }
  static assert(e) {
    if (!(e instanceof ZodError)) throw Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, g.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = t => t.message) {
    let fieldErrors = Object.create(null),
      formErrors = [];
    for (let a of this.issues) if (a.path.length > 0) {
      let s = a.path[0];
      fieldErrors[s] = fieldErrors[s] || [], fieldErrors[s].push(e(a));
    } else formErrors.push(e(a));
    return {
      formErrors: formErrors,
      fieldErrors: fieldErrors
    };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = e => new ZodError(e);
var Re = (e, t) => {
    let message;
    switch (e.code) {
      case rr.invalid_type:
        if (e.received === d.undefined) message = "Required";else message = `Expected ${e.expected}, received ${e.received}`;
        break;
      case rr.invalid_literal:
        message = `Invalid literal value, expected ${JSON.stringify(e.expected, g.jsonStringifyReplacer)}`;
        break;
      case rr.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${g.joinValues(e.keys, ", ")}`;
        break;
      case rr.invalid_union:
        message = "Invalid input";
        break;
      case rr.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${g.joinValues(e.options)}`;
        break;
      case rr.invalid_enum_value:
        message = `Invalid enum value. Expected ${g.joinValues(e.options)}, received '${e.received}'`;
        break;
      case rr.invalid_arguments:
        message = "Invalid function arguments";
        break;
      case rr.invalid_return_type:
        message = "Invalid function return type";
        break;
      case rr.invalid_date:
        message = "Invalid date";
        break;
      case rr.invalid_string:
        if (typeof e.validation === "object") {
          if ("includes" in e.validation) {
            if (message = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${e.validation.position}`;
          } else if ("startsWith" in e.validation) message = `Invalid input: must start with "${e.validation.startsWith}"`;else if ("endsWith" in e.validation) message = `Invalid input: must end with "${e.validation.endsWith}"`;else g.assertNever(e.validation);
        } else if (e.validation !== "regex") message = `Invalid ${e.validation}`;else message = "Invalid";
        break;
      case rr.too_small:
        if (e.type === "array") message = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`;else if (e.type === "string") message = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`;else if (e.type === "number") message = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`;else if (e.type === "bigint") message = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`;else if (e.type === "date") message = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`;else message = "Invalid input";
        break;
      case rr.too_big:
        if (e.type === "array") message = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`;else if (e.type === "string") message = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`;else if (e.type === "number") message = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`;else if (e.type === "bigint") message = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`;else if (e.type === "date") message = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`;else message = "Invalid input";
        break;
      case rr.custom:
        message = "Invalid input";
        break;
      case rr.invalid_intersection_types:
        message = "Intersection results could not be merged";
        break;
      case rr.not_multiple_of:
        message = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case rr.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = t.defaultError, g.assertNever(e);
    }
    return {
      message: message
    };
  },
  N = Re;
var Oe = N;
function J() {
  return Oe;
}
var l;
(function (e) {
  e.errToObj = message_2 => typeof message_2 === "string" ? {
    message: message_2
  } : message_2 || {}, e.toString = t => typeof t === "string" ? t : t?.message;
})(l || (l = {}));
var ie = e => {
  let {
      data: data,
      path: path,
      errorMaps: errorMaps,
      issueData: issueData
    } = e,
    path_2 = [...path, ...(issueData.path || [])],
    n = {
      ...issueData,
      path: path_2
    };
  if (issueData.message !== void 0) return {
    ...issueData,
    path: path_2,
    message: issueData.message
  };
  let c = "",
    o = errorMaps.filter(item => !!item).slice().reverse();
  for (let m of o) c = m(n, {
    data: data,
    defaultError: c
  }).message;
  return {
    ...issueData,
    path: path_2,
    message: c
  };
};
function u(e, issueData_2) {
  let r = J(),
    a = ie({
      issueData: issueData_2,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, r, r === N ? void 0 : N].filter(item => !!item)
    });
  e.common.issues.push(a);
}
class v {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray(e, t) {
    let value = [];
    for (let a of t) {
      if (a.status === "aborted") return f;
      if (a.status === "dirty") e.dirty();
      value.push(a.value);
    }
    return {
      status: e.value,
      value: value
    };
  }
  static async mergeObjectAsync(e, t) {
    let r = [];
    for (let a of t) {
      let key = await a.key,
        value_2 = await a.value;
      r.push({
        key: key,
        value: value_2
      });
    }
    return v.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, t) {
    let value_4 = {};
    for (let a of t) {
      let {
        key: key_2,
        value: value_3
      } = a;
      if (key_2.status === "aborted") return f;
      if (value_3.status === "aborted") return f;
      if (key_2.status === "dirty") e.dirty();
      if (value_3.status === "dirty") e.dirty();
      if (key_2.value !== "__proto__" && (typeof value_3.value < "u" || a.alwaysSet)) value_4[key_2.value] = value_3.value;
    }
    return {
      status: e.value,
      value: value_4
    };
  }
}
var f = Object.freeze({
    status: "aborted"
  }),
  L = value_5 => ({
    status: "dirty",
    value: value_5
  }),
  x = value_6 => ({
    status: "valid",
    value: value_6
  }),
  me = e => e.status === "aborted",
  _e = e => e.status === "dirty",
  M = e => e.status === "valid",
  Y = e => typeof Promise < "u" && e instanceof Promise;
class w {
  constructor(e, t, r, a) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = a;
  }
  get path() {
    if (!this._cachedPath.length) if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);else this._cachedPath.push(...this._path, this._key);
    return this._cachedPath;
  }
}
var we = (e, t) => {
  if (M(t)) return {
    success: !0,
    data: t.value
  };else {
    if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let r = new ZodError(e.common.issues);
        return this._error = r, this._error;
      }
    };
  }
};
function p(e) {
  if (!e) return {};
  let {
    errorMap: errorMap,
    invalid_type_error: invalid_type_error,
    required_error: required_error,
    description: description
  } = e;
  if (errorMap && (invalid_type_error || required_error)) throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  if (errorMap) return {
    errorMap: errorMap,
    description: description
  };
  return {
    errorMap: (n, c) => {
      let {
        message: message_3
      } = e;
      if (n.code === "invalid_enum_value") return {
        message: message_3 ?? c.defaultError
      };
      if (typeof c.data > "u") return {
        message: message_3 ?? required_error ?? c.defaultError
      };
      if (n.code !== "invalid_type") return {
        message: c.defaultError
      };
      return {
        message: message_3 ?? invalid_type_error ?? c.defaultError
      };
    },
    description: description
  };
}
class _ {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return R(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: R(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new v(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: R(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    let t = this._parse(e);
    if (Y(t)) throw Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    let t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    let r = this.safeParse(e, t);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(data_2, t) {
    let parent = {
        common: {
          issues: [],
          async: t?.async ?? !1,
          contextualErrorMap: t?.errorMap
        },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: data_2,
        parsedType: R(data_2)
      },
      a = this._parseSync({
        data: data_2,
        path: parent.path,
        parent: parent
      });
    return we(parent, a);
  }
  "~validate"(data_3) {
    let parent_2 = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: data_3,
      parsedType: R(data_3)
    };
    if (!this["~standard"].async) try {
      let r = this._parseSync({
        data: data_3,
        path: [],
        parent: parent_2
      });
      return M(r) ? {
        value: r.value
      } : {
        issues: parent_2.common.issues
      };
    } catch (error) {
      if (error?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = !0;
      parent_2.common = {
        issues: [],
        async: !0
      };
    }
    return this._parseAsync({
      data: data_3,
      path: [],
      parent: parent_2
    }).then(r => M(r) ? {
      value: r.value
    } : {
      issues: parent_2.common.issues
    });
  }
  async parseAsync(e, t) {
    let r = await this.safeParseAsync(e, t);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(data_4, t) {
    let parent_3 = {
        common: {
          issues: [],
          contextualErrorMap: t?.errorMap,
          async: !0
        },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: data_4,
        parsedType: R(data_4)
      },
      a = this._parse({
        data: data_4,
        path: parent_3.path,
        parent: parent_3
      }),
      s = await (Y(a) ? a : Promise.resolve(a));
    return we(parent_3, s);
  }
  refine(e, message_4) {
    let r = a => {
      if (typeof message_4 === "string" || typeof message_4 > "u") return {
        message: message_4
      };else if (typeof message_4 === "function") return message_4(a);else return message_4;
    };
    return this._refinement((a, s) => {
      let i = e(a),
        n = () => s.addIssue({
          code: rr.custom,
          ...r(a)
        });
      if (typeof Promise < "u" && i instanceof Promise) return i.then(c => {
        if (!c) return n(), !1;else return !0;
      });
      if (!i) return n(), !1;else return !0;
    });
  }
  refinement(e, t) {
    return this._refinement((r, a) => {
      if (!e(r)) return a.addIssue(typeof t === "function" ? t(r, a) : t), !1;else return !0;
    });
  }
  _refinement(refinement) {
    return new A({
      schema: this,
      typeName: h.ZodEffects,
      effect: {
        type: "refinement",
        refinement: refinement
      }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: t => this["~validate"](t)
    };
  }
  optional() {
    return S.create(this, this._def);
  }
  nullable() {
    return E.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return C.create(this);
  }
  promise() {
    return q.create(this, this._def);
  }
  or(e) {
    return K.create([this, e], this._def);
  }
  and(e) {
    return Z.create(this, e, this._def);
  }
  transform(transform) {
    return new A({
      ...p(this._def),
      schema: this,
      typeName: h.ZodEffects,
      effect: {
        type: "transform",
        transform: transform
      }
    });
  }
  default(e) {
    let defaultValue = typeof e === "function" ? e : () => e;
    return new se({
      ...p(this._def),
      innerType: this,
      defaultValue: defaultValue,
      typeName: h.ZodDefault
    });
  }
  brand() {
    return new xe({
      typeName: h.ZodBranded,
      type: this,
      ...p(this._def)
    });
  }
  catch(e) {
    let catchValue = typeof e === "function" ? e : () => e;
    return new ae({
      ...p(this._def),
      innerType: this,
      catchValue: catchValue,
      typeName: h.ZodCatch
    });
  }
  describe(description_2) {
    return new this.constructor({
      ...this._def,
      description: description_2
    });
  }
  pipe(e) {
    return he.create(this, e);
  }
  readonly() {
    return ne.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var je = /^c[^\s-]{8,}$/i,
  Ie = /^[0-9a-z]+$/,
  Ne = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Ee = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  $e = /^[a-z0-9_-]{21}$/i,
  Me = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Ve = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  De = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  ze = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  ge,
  Pe = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Le = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  Fe = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  We = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Be = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  Ue = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Ce = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  regExp = new RegExp(`^${Ce}$`);
function Se(e) {
  let t = "[0-5]\\d";
  if (e.precision) t = `${t}\\.\\d{${e.precision}}`;else if (e.precision == null) t = `${t}(\\.\\d+)?`;
  let r = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
}
function Je(e) {
  return new RegExp(`^${Se(e)}$`);
}
function Ye(e) {
  let t = `${Ce}T${Se(e)}`,
    r = [];
  if (r.push(e.local ? "Z?" : "Z"), e.offset) r.push("([+-]\\d{2}:?\\d{2})");
  return t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function He(e, t) {
  if ((t === "v4" || !t) && Pe.test(e)) return !0;
  if ((t === "v6" || !t) && Fe.test(e)) return !0;
  return !1;
}
function Ge(e, t) {
  if (!Me.test(e)) return !1;
  try {
    let [r] = e.split(".");
    if (!r) return !1;
    let a = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="),
      s = JSON.parse(atob(a));
    if (typeof s !== "object" || s === null) return !1;
    if ("typ" in s && s?.typ !== "JWT") return !1;
    if (!s.alg) return !1;
    if (t && s.alg !== t) return !1;
    return !0;
  } catch {
    return !1;
  }
}
function Qe(e, t) {
  if ((t === "v4" || !t) && Le.test(e)) return !0;
  if ((t === "v6" || !t) && We.test(e)) return !0;
  return !1;
}
class T extends _ {
  _parse(e) {
    if (this._def.coerce) e.data = String(e.data);
    if (this._getType(e) !== d.string) {
      let s = this._getOrReturnCtx(e);
      return u(s, {
        code: rr.invalid_type,
        expected: d.string,
        received: s.parsedType
      }), f;
    }
    let r = new v(),
      a = void 0;
    for (let s of this._def.checks) if (s.kind === "min") {
      if (e.data.length < s.value) a = this._getOrReturnCtx(e, a), u(a, {
        code: rr.too_small,
        minimum: s.value,
        type: "string",
        inclusive: !0,
        exact: !1,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "max") {
      if (e.data.length > s.value) a = this._getOrReturnCtx(e, a), u(a, {
        code: rr.too_big,
        maximum: s.value,
        type: "string",
        inclusive: !0,
        exact: !1,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "length") {
      let i = e.data.length > s.value,
        n = e.data.length < s.value;
      if (i || n) {
        if (a = this._getOrReturnCtx(e, a), i) u(a, {
          code: rr.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        });else if (n) u(a, {
          code: rr.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        });
        r.dirty();
      }
    } else if (s.kind === "email") {
      if (!De.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "email",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "emoji") {
      if (!ge) ge = new RegExp(ze, "u");
      if (!ge.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "emoji",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "uuid") {
      if (!Ee.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "uuid",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "nanoid") {
      if (!$e.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "nanoid",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "cuid") {
      if (!je.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "cuid",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "cuid2") {
      if (!Ie.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "cuid2",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "ulid") {
      if (!Ne.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "ulid",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "url") try {
      new URL(e.data);
    } catch {
      a = this._getOrReturnCtx(e, a), u(a, {
        validation: "url",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "regex") {
      if (s.regex.lastIndex = 0, !s.regex.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "regex",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "trim") e.data = e.data.trim();else if (s.kind === "includes") {
      if (!e.data.includes(s.value, s.position)) a = this._getOrReturnCtx(e, a), u(a, {
        code: rr.invalid_string,
        validation: {
          includes: s.value,
          position: s.position
        },
        message: s.message
      }), r.dirty();
    } else if (s.kind === "toLowerCase") e.data = e.data.toLowerCase();else if (s.kind === "toUpperCase") e.data = e.data.toUpperCase();else if (s.kind === "startsWith") {
      if (!e.data.startsWith(s.value)) a = this._getOrReturnCtx(e, a), u(a, {
        code: rr.invalid_string,
        validation: {
          startsWith: s.value
        },
        message: s.message
      }), r.dirty();
    } else if (s.kind === "endsWith") {
      if (!e.data.endsWith(s.value)) a = this._getOrReturnCtx(e, a), u(a, {
        code: rr.invalid_string,
        validation: {
          endsWith: s.value
        },
        message: s.message
      }), r.dirty();
    } else if (s.kind === "datetime") {
      if (!Ye(s).test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        code: rr.invalid_string,
        validation: "datetime",
        message: s.message
      }), r.dirty();
    } else if (s.kind === "date") {
      if (!regExp.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        code: rr.invalid_string,
        validation: "date",
        message: s.message
      }), r.dirty();
    } else if (s.kind === "time") {
      if (!Je(s).test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        code: rr.invalid_string,
        validation: "time",
        message: s.message
      }), r.dirty();
    } else if (s.kind === "duration") {
      if (!Ve.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "duration",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "ip") {
      if (!He(e.data, s.version)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "ip",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "jwt") {
      if (!Ge(e.data, s.alg)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "jwt",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "cidr") {
      if (!Qe(e.data, s.version)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "cidr",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "base64") {
      if (!Be.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "base64",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else if (s.kind === "base64url") {
      if (!Ue.test(e.data)) a = this._getOrReturnCtx(e, a), u(a, {
        validation: "base64url",
        code: rr.invalid_string,
        message: s.message
      }), r.dirty();
    } else g.assertNever(s);
    return {
      status: r.value,
      value: e.data
    };
  }
  _regex(e, validation, r) {
    return this.refinement(a => e.test(a), {
      validation: validation,
      code: rr.invalid_string,
      ...l.errToObj(r)
    });
  }
  _addCheck(e) {
    return new T({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({
      kind: "email",
      ...l.errToObj(e)
    });
  }
  url(e) {
    return this._addCheck({
      kind: "url",
      ...l.errToObj(e)
    });
  }
  emoji(e) {
    return this._addCheck({
      kind: "emoji",
      ...l.errToObj(e)
    });
  }
  uuid(e) {
    return this._addCheck({
      kind: "uuid",
      ...l.errToObj(e)
    });
  }
  nanoid(e) {
    return this._addCheck({
      kind: "nanoid",
      ...l.errToObj(e)
    });
  }
  cuid(e) {
    return this._addCheck({
      kind: "cuid",
      ...l.errToObj(e)
    });
  }
  cuid2(e) {
    return this._addCheck({
      kind: "cuid2",
      ...l.errToObj(e)
    });
  }
  ulid(e) {
    return this._addCheck({
      kind: "ulid",
      ...l.errToObj(e)
    });
  }
  base64(e) {
    return this._addCheck({
      kind: "base64",
      ...l.errToObj(e)
    });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...l.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({
      kind: "jwt",
      ...l.errToObj(e)
    });
  }
  ip(e) {
    return this._addCheck({
      kind: "ip",
      ...l.errToObj(e)
    });
  }
  cidr(e) {
    return this._addCheck({
      kind: "cidr",
      ...l.errToObj(e)
    });
  }
  datetime(message_5) {
    if (typeof message_5 === "string") return this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: message_5
    });
    return this._addCheck({
      kind: "datetime",
      precision: typeof message_5?.precision > "u" ? null : message_5?.precision,
      offset: message_5?.offset ?? !1,
      local: message_5?.local ?? !1,
      ...l.errToObj(message_5?.message)
    });
  }
  date(message_6) {
    return this._addCheck({
      kind: "date",
      message: message_6
    });
  }
  time(message_7) {
    if (typeof message_7 === "string") return this._addCheck({
      kind: "time",
      precision: null,
      message: message_7
    });
    return this._addCheck({
      kind: "time",
      precision: typeof message_7?.precision > "u" ? null : message_7?.precision,
      ...l.errToObj(message_7?.message)
    });
  }
  duration(e) {
    return this._addCheck({
      kind: "duration",
      ...l.errToObj(e)
    });
  }
  regex(regex, t) {
    return this._addCheck({
      kind: "regex",
      regex: regex,
      ...l.errToObj(t)
    });
  }
  includes(value_7, t) {
    return this._addCheck({
      kind: "includes",
      value: value_7,
      position: t?.position,
      ...l.errToObj(t?.message)
    });
  }
  startsWith(value_8, t) {
    return this._addCheck({
      kind: "startsWith",
      value: value_8,
      ...l.errToObj(t)
    });
  }
  endsWith(value_9, t) {
    return this._addCheck({
      kind: "endsWith",
      value: value_9,
      ...l.errToObj(t)
    });
  }
  min(value_10, t) {
    return this._addCheck({
      kind: "min",
      value: value_10,
      ...l.errToObj(t)
    });
  }
  max(value_11, t) {
    return this._addCheck({
      kind: "max",
      value: value_11,
      ...l.errToObj(t)
    });
  }
  length(value_12, t) {
    return this._addCheck({
      kind: "length",
      value: value_12,
      ...l.errToObj(t)
    });
  }
  nonempty(e) {
    return this.min(1, l.errToObj(e));
  }
  trim() {
    return new T({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new T({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new T({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(item => item.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find(item => item.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find(item => item.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find(item => item.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find(item => item.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(item => item.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(item => item.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(item => item.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find(item => item.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find(item => item.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(item => item.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(item => item.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(item => item.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find(item => item.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find(item => item.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find(item => item.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "min") {
      if (e === null || t.value > e) e = t.value;
    }
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "max") {
      if (e === null || t.value < e) e = t.value;
    }
    return e;
  }
}
T.create = e => new T({
  checks: [],
  typeName: h.ZodString,
  coerce: e?.coerce ?? !1,
  ...p(e)
});
function Xe(e, t) {
  let r = (e.toString().split(".")[1] || "").length,
    a = (t.toString().split(".")[1] || "").length,
    s = r > a ? r : a,
    i = Number.parseInt(e.toFixed(s).replace(".", "")),
    n = Number.parseInt(t.toFixed(s).replace(".", ""));
  return i % n / 10 ** s;
}
class D extends _ {
  constructor() {
    super(...arguments);
    this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce) e.data = Number(e.data);
    if (this._getType(e) !== d.number) {
      let s = this._getOrReturnCtx(e);
      return u(s, {
        code: rr.invalid_type,
        expected: d.number,
        received: s.parsedType
      }), f;
    }
    let r = void 0,
      a = new v();
    for (let s of this._def.checks) if (s.kind === "int") {
      if (!g.isInteger(e.data)) r = this._getOrReturnCtx(e, r), u(r, {
        code: rr.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), a.dirty();
    } else if (s.kind === "min") {
      if (s.inclusive ? e.data < s.value : e.data <= s.value) r = this._getOrReturnCtx(e, r), u(r, {
        code: rr.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty();
    } else if (s.kind === "max") {
      if (s.inclusive ? e.data > s.value : e.data >= s.value) r = this._getOrReturnCtx(e, r), u(r, {
        code: rr.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), a.dirty();
    } else if (s.kind === "multipleOf") {
      if (Xe(e.data, s.value) !== 0) r = this._getOrReturnCtx(e, r), u(r, {
        code: rr.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty();
    } else if (s.kind === "finite") {
      if (!Number.isFinite(e.data)) r = this._getOrReturnCtx(e, r), u(r, {
        code: rr.not_finite,
        message: s.message
      }), a.dirty();
    } else g.assertNever(s);
    return {
      status: a.value,
      value: e.data
    };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, l.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, l.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, l.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, l.toString(t));
  }
  setLimit(kind, value_13, inclusive, a) {
    return new D({
      ...this._def,
      checks: [...this._def.checks, {
        kind: kind,
        value: value_13,
        inclusive: inclusive,
        message: l.toString(a)
      }]
    });
  }
  _addCheck(e) {
    return new D({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: l.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: l.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: l.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: l.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: l.toString(e)
    });
  }
  multipleOf(value_14, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: value_14,
      message: l.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: l.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: l.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: l.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "min") {
      if (e === null || t.value > e) e = t.value;
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "max") {
      if (e === null || t.value < e) e = t.value;
    }
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(item => item.kind === "int" || item.kind === "multipleOf" && g.isInteger(item.value));
  }
  get isFinite() {
    let e = null,
      t = null;
    for (let r of this._def.checks) if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf") return !0;else if (r.kind === "min") {
      if (t === null || r.value > t) t = r.value;
    } else if (r.kind === "max") {
      if (e === null || r.value < e) e = r.value;
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
D.create = e => new D({
  checks: [],
  typeName: h.ZodNumber,
  coerce: e?.coerce || !1,
  ...p(e)
});
class z extends _ {
  constructor() {
    super(...arguments);
    this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce) try {
      e.data = BigInt(e.data);
    } catch {
      return this._getInvalidInput(e);
    }
    if (this._getType(e) !== d.bigint) return this._getInvalidInput(e);
    let r = void 0,
      a = new v();
    for (let s of this._def.checks) if (s.kind === "min") {
      if (s.inclusive ? e.data < s.value : e.data <= s.value) r = this._getOrReturnCtx(e, r), u(r, {
        code: rr.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty();
    } else if (s.kind === "max") {
      if (s.inclusive ? e.data > s.value : e.data >= s.value) r = this._getOrReturnCtx(e, r), u(r, {
        code: rr.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), a.dirty();
    } else if (s.kind === "multipleOf") {
      if (e.data % s.value !== BigInt(0)) r = this._getOrReturnCtx(e, r), u(r, {
        code: rr.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), a.dirty();
    } else g.assertNever(s);
    return {
      status: a.value,
      value: e.data
    };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return u(t, {
      code: rr.invalid_type,
      expected: d.bigint,
      received: t.parsedType
    }), f;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, l.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, l.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, l.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, l.toString(t));
  }
  setLimit(kind_2, value_15, inclusive_2, a) {
    return new z({
      ...this._def,
      checks: [...this._def.checks, {
        kind: kind_2,
        value: value_15,
        inclusive: inclusive_2,
        message: l.toString(a)
      }]
    });
  }
  _addCheck(e) {
    return new z({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: l.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: l.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: l.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: l.toString(e)
    });
  }
  multipleOf(value_16, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: value_16,
      message: l.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "min") {
      if (e === null || t.value > e) e = t.value;
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "max") {
      if (e === null || t.value < e) e = t.value;
    }
    return e;
  }
}
z.create = e => new z({
  checks: [],
  typeName: h.ZodBigInt,
  coerce: e?.coerce ?? !1,
  ...p(e)
});
class G extends _ {
  _parse(e) {
    if (this._def.coerce) e.data = Boolean(e.data);
    if (this._getType(e) !== d.boolean) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: rr.invalid_type,
        expected: d.boolean,
        received: r.parsedType
      }), f;
    }
    return x(e.data);
  }
}
G.create = e => new G({
  typeName: h.ZodBoolean,
  coerce: e?.coerce || !1,
  ...p(e)
});
class W extends _ {
  _parse(e) {
    if (this._def.coerce) e.data = new Date(e.data);
    if (this._getType(e) !== d.date) {
      let s = this._getOrReturnCtx(e);
      return u(s, {
        code: rr.invalid_type,
        expected: d.date,
        received: s.parsedType
      }), f;
    }
    if (Number.isNaN(e.data.getTime())) {
      let s = this._getOrReturnCtx(e);
      return u(s, {
        code: rr.invalid_date
      }), f;
    }
    let r = new v(),
      a = void 0;
    for (let s of this._def.checks) if (s.kind === "min") {
      if (e.data.getTime() < s.value) a = this._getOrReturnCtx(e, a), u(a, {
        code: rr.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty();
    } else if (s.kind === "max") {
      if (e.data.getTime() > s.value) a = this._getOrReturnCtx(e, a), u(a, {
        code: rr.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), r.dirty();
    } else g.assertNever(s);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new W({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: l.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: l.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "min") {
      if (e === null || t.value > e) e = t.value;
    }
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks) if (t.kind === "max") {
      if (e === null || t.value < e) e = t.value;
    }
    return e != null ? new Date(e) : null;
  }
}
W.create = e => new W({
  checks: [],
  coerce: e?.coerce || !1,
  typeName: h.ZodDate,
  ...p(e)
});
class ce extends _ {
  _parse(e) {
    if (this._getType(e) !== d.symbol) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: rr.invalid_type,
        expected: d.symbol,
        received: r.parsedType
      }), f;
    }
    return x(e.data);
  }
}
ce.create = e => new ce({
  typeName: h.ZodSymbol,
  ...p(e)
});
class Q extends _ {
  _parse(e) {
    if (this._getType(e) !== d.undefined) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: rr.invalid_type,
        expected: d.undefined,
        received: r.parsedType
      }), f;
    }
    return x(e.data);
  }
}
Q.create = e => new Q({
  typeName: h.ZodUndefined,
  ...p(e)
});
class X extends _ {
  _parse(e) {
    if (this._getType(e) !== d.null) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: rr.invalid_type,
        expected: d.null,
        received: r.parsedType
      }), f;
    }
    return x(e.data);
  }
}
X.create = e => new X({
  typeName: h.ZodNull,
  ...p(e)
});
class B extends _ {
  constructor() {
    super(...arguments);
    this._any = !0;
  }
  _parse(e) {
    return x(e.data);
  }
}
B.create = e => new B({
  typeName: h.ZodAny,
  ...p(e)
});
class V extends _ {
  constructor() {
    super(...arguments);
    this._unknown = !0;
  }
  _parse(e) {
    return x(e.data);
  }
}
V.create = e => new V({
  typeName: h.ZodUnknown,
  ...p(e)
});
class j extends _ {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return u(t, {
      code: rr.invalid_type,
      expected: d.never,
      received: t.parsedType
    }), f;
  }
}
j.create = e => new j({
  typeName: h.ZodNever,
  ...p(e)
});
class oe extends _ {
  _parse(e) {
    if (this._getType(e) !== d.undefined) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: rr.invalid_type,
        expected: d.void,
        received: r.parsedType
      }), f;
    }
    return x(e.data);
  }
}
oe.create = e => new oe({
  typeName: h.ZodVoid,
  ...p(e)
});
class C extends _ {
  _parse(e) {
    let {
        ctx: ctx,
        status: status
      } = this._processInputParams(e),
      _def = this._def;
    if (ctx.parsedType !== d.array) return u(ctx, {
      code: rr.invalid_type,
      expected: d.array,
      received: ctx.parsedType
    }), f;
    if (_def.exactLength !== null) {
      let i = ctx.data.length > _def.exactLength.value,
        n = ctx.data.length < _def.exactLength.value;
      if (i || n) u(ctx, {
        code: i ? rr.too_big : rr.too_small,
        minimum: n ? _def.exactLength.value : void 0,
        maximum: i ? _def.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: _def.exactLength.message
      }), status.dirty();
    }
    if (_def.minLength !== null) {
      if (ctx.data.length < _def.minLength.value) u(ctx, {
        code: rr.too_small,
        minimum: _def.minLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: _def.minLength.message
      }), status.dirty();
    }
    if (_def.maxLength !== null) {
      if (ctx.data.length > _def.maxLength.value) u(ctx, {
        code: rr.too_big,
        maximum: _def.maxLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: _def.maxLength.message
      }), status.dirty();
    }
    if (ctx.common.async) return Promise.all([...ctx.data].map((item, index) => _def.type._parseAsync(new w(ctx, item, ctx.path, index)))).then(i => v.mergeArray(status, i));
    let s = [...ctx.data].map((item, index) => _def.type._parseSync(new w(ctx, item, ctx.path, index)));
    return v.mergeArray(status, s);
  }
  get element() {
    return this._def.type;
  }
  min(value_17, t) {
    return new C({
      ...this._def,
      minLength: {
        value: value_17,
        message: l.toString(t)
      }
    });
  }
  max(value_18, t) {
    return new C({
      ...this._def,
      maxLength: {
        value: value_18,
        message: l.toString(t)
      }
    });
  }
  length(value_19, t) {
    return new C({
      ...this._def,
      exactLength: {
        value: value_19,
        message: l.toString(t)
      }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
C.create = (type, t) => new C({
  type: type,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: h.ZodArray,
  ...p(t)
});
function F(e) {
  if (e instanceof y) {
    let t = {};
    for (let r in e.shape) {
      let a = e.shape[r];
      t[r] = S.create(F(a));
    }
    return new y({
      ...e._def,
      shape: () => t
    });
  } else if (e instanceof C) return new C({
    ...e._def,
    type: F(e.element)
  });else if (e instanceof S) return S.create(F(e.unwrap()));else if (e instanceof E) return E.create(F(e.unwrap()));else if (e instanceof I) return I.create(e.items.map(item => F(item)));else return e;
}
class y extends _ {
  constructor() {
    super(...arguments);
    this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let shape = this._def.shape(),
      keys = g.objectKeys(shape);
    return this._cached = {
      shape: shape,
      keys: keys
    }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== d.object) {
      let o = this._getOrReturnCtx(e);
      return u(o, {
        code: rr.invalid_type,
        expected: d.object,
        received: o.parsedType
      }), f;
    }
    let {
        status: status_2,
        ctx: ctx_2
      } = this._processInputParams(e),
      {
        shape: shape_2,
        keys: keys_2
      } = this._getCached(),
      keys_3 = [];
    if (!(this._def.catchall instanceof j && this._def.unknownKeys === "strip")) {
      for (let o in ctx_2.data) if (!keys_2.includes(o)) keys_3.push(o);
    }
    let c = [];
    for (let value_20 of keys_2) {
      let m = shape_2[value_20],
        b = ctx_2.data[value_20];
      c.push({
        key: {
          status: "valid",
          value: value_20
        },
        value: m._parse(new w(ctx_2, b, ctx_2.path, value_20)),
        alwaysSet: value_20 in ctx_2.data
      });
    }
    if (this._def.catchall instanceof j) {
      let unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") for (let value_21 of keys_3) c.push({
        key: {
          status: "valid",
          value: value_21
        },
        value: {
          status: "valid",
          value: ctx_2.data[value_21]
        }
      });else if (unknownKeys === "strict") {
        if (keys_3.length > 0) u(ctx_2, {
          code: rr.unrecognized_keys,
          keys: keys_3
        }), status_2.dirty();
      } else if (unknownKeys === "strip") ;else throw Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let catchall = this._def.catchall;
      for (let value_22 of keys_3) {
        let b = ctx_2.data[value_22];
        c.push({
          key: {
            status: "valid",
            value: value_22
          },
          value: catchall._parse(new w(ctx_2, b, ctx_2.path, value_22)),
          alwaysSet: value_22 in ctx_2.data
        });
      }
    }
    if (ctx_2.common.async) return Promise.resolve().then(async () => {
      let o = [];
      for (let m of c) {
        let key_3 = await m.key,
          value_23 = await m.value;
        o.push({
          key: key_3,
          value: value_23,
          alwaysSet: m.alwaysSet
        });
      }
      return o;
    }).then(o => v.mergeObjectSync(status_2, o));else return v.mergeObjectSync(status_2, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return l.errToObj, new y({
      ...this._def,
      unknownKeys: "strict",
      ...(e !== void 0 ? {
        errorMap: (t, r) => {
          let message_8 = this._def.errorMap?.(t, r).message ?? r.defaultError;
          if (t.code === "unrecognized_keys") return {
            message: l.errToObj(e).message ?? message_8
          };
          return {
            message: message_8
          };
        }
      } : {})
    });
  }
  strip() {
    return new y({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new y({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(e) {
    return new y({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  merge(e) {
    return new y({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: h.ZodObject
    });
  }
  setKey(e, t) {
    return this.augment({
      [e]: t
    });
  }
  catchall(catchall_2) {
    return new y({
      ...this._def,
      catchall: catchall_2
    });
  }
  pick(e) {
    let t = {};
    for (let r of g.objectKeys(e)) if (e[r] && this.shape[r]) t[r] = this.shape[r];
    return new y({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    let t = {};
    for (let r of g.objectKeys(this.shape)) if (!e[r]) t[r] = this.shape[r];
    return new y({
      ...this._def,
      shape: () => t
    });
  }
  deepPartial() {
    return F(this);
  }
  partial(e) {
    let t = {};
    for (let r of g.objectKeys(this.shape)) {
      let a = this.shape[r];
      if (e && !e[r]) t[r] = a;else t[r] = a.optional();
    }
    return new y({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    let t = {};
    for (let r of g.objectKeys(this.shape)) if (e && !e[r]) t[r] = this.shape[r];else {
      let s = this.shape[r];
      while (s instanceof S) s = s._def.innerType;
      t[r] = s;
    }
    return new y({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ae(g.objectKeys(this.shape));
  }
}
y.create = (e, t) => new y({
  shape: () => e,
  unknownKeys: "strip",
  catchall: j.create(),
  typeName: h.ZodObject,
  ...p(t)
});
y.strictCreate = (e, t) => new y({
  shape: () => e,
  unknownKeys: "strict",
  catchall: j.create(),
  typeName: h.ZodObject,
  ...p(t)
});
y.lazycreate = (shape_3, t) => new y({
  shape: shape_3,
  unknownKeys: "strip",
  catchall: j.create(),
  typeName: h.ZodObject,
  ...p(t)
});
class K extends _ {
  _parse(e) {
    let {
        ctx: ctx_3
      } = this._processInputParams(e),
      options = this._def.options;
    function a(s) {
      for (let n of s) if (n.result.status === "valid") return n.result;
      for (let n of s) if (n.result.status === "dirty") return ctx_3.common.issues.push(...n.ctx.common.issues), n.result;
      let unionErrors = s.map(item => new ZodError(item.ctx.common.issues));
      return u(ctx_3, {
        code: rr.invalid_union,
        unionErrors: unionErrors
      }), f;
    }
    if (ctx_3.common.async) return Promise.all(options.map(async item => {
      let i = {
        ...ctx_3,
        common: {
          ...ctx_3.common,
          issues: []
        },
        parent: null
      };
      return {
        result: await item._parseAsync({
          data: ctx_3.data,
          path: ctx_3.path,
          parent: i
        }),
        ctx: i
      };
    })).then(a);else {
      let s = void 0,
        i = [];
      for (let c of options) {
        let o = {
            ...ctx_3,
            common: {
              ...ctx_3.common,
              issues: []
            },
            parent: null
          },
          result = c._parseSync({
            data: ctx_3.data,
            path: ctx_3.path,
            parent: o
          });
        if (result.status === "valid") return result;else if (result.status === "dirty" && !s) s = {
          result: result,
          ctx: o
        };
        if (o.common.issues.length) i.push(o.common.issues);
      }
      if (s) return ctx_3.common.issues.push(...s.ctx.common.issues), s.result;
      let unionErrors_2 = i.map(item => new ZodError(item));
      return u(ctx_3, {
        code: rr.invalid_union,
        unionErrors: unionErrors_2
      }), f;
    }
  }
  get options() {
    return this._def.options;
  }
}
K.create = (options_2, t) => new K({
  options: options_2,
  typeName: h.ZodUnion,
  ...p(t)
});
var O = e => {
  if (e instanceof ee) return O(e.schema);else if (e instanceof A) return O(e.innerType());else if (e instanceof te) return [e.value];else if (e instanceof P) return e.options;else if (e instanceof re) return g.objectValues(e.enum);else if (e instanceof se) return O(e._def.innerType);else if (e instanceof Q) return [void 0];else if (e instanceof X) return [null];else if (e instanceof S) return [void 0, ...O(e.unwrap())];else if (e instanceof E) return [null, ...O(e.unwrap())];else if (e instanceof xe) return O(e.unwrap());else if (e instanceof ne) return O(e.unwrap());else if (e instanceof ae) return O(e._def.innerType);else return [];
};
class ve extends _ {
  _parse(e) {
    let {
      ctx: t
    } = this._processInputParams(e);
    if (t.parsedType !== d.object) return u(t, {
      code: rr.invalid_type,
      expected: d.object,
      received: t.parsedType
    }), f;
    let discriminator = this.discriminator,
      a = t.data[discriminator],
      s = this.optionsMap.get(a);
    if (!s) return u(t, {
      code: rr.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [discriminator]
    }), f;
    if (t.common.async) return s._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    });else return s._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    });
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator_2, options_3, r) {
    let optionsMap = new Map();
    for (let s of options_3) {
      let i = O(s.shape[discriminator_2]);
      if (!i.length) throw Error(`A discriminator value for key \`${discriminator_2}\` could not be extracted from all schema options`);
      for (let n of i) {
        if (optionsMap.has(n)) throw Error(`Discriminator property ${String(discriminator_2)} has duplicate value ${String(n)}`);
        optionsMap.set(n, s);
      }
    }
    return new ve({
      typeName: h.ZodDiscriminatedUnion,
      discriminator: discriminator_2,
      options: options_3,
      optionsMap: optionsMap,
      ...p(r)
    });
  }
}
function ye(data_5, t) {
  let r = R(data_5),
    a = R(t);
  if (data_5 === t) return {
    valid: !0,
    data: data_5
  };else if (r === d.object && a === d.object) {
    let s = g.objectKeys(t),
      i = g.objectKeys(data_5).filter(item => s.indexOf(item) !== -1),
      data_6 = {
        ...data_5,
        ...t
      };
    for (let c of i) {
      let o = ye(data_5[c], t[c]);
      if (!o.valid) return {
        valid: !1
      };
      data_6[c] = o.data;
    }
    return {
      valid: !0,
      data: data_6
    };
  } else if (r === d.array && a === d.array) {
    if (data_5.length !== t.length) return {
      valid: !1
    };
    let data_7 = [];
    for (let i = 0; i < data_5.length; i++) {
      let n = data_5[i],
        c = t[i],
        o = ye(n, c);
      if (!o.valid) return {
        valid: !1
      };
      data_7.push(o.data);
    }
    return {
      valid: !0,
      data: data_7
    };
  } else if (r === d.date && a === d.date && +data_5 === +t) return {
    valid: !0,
    data: data_5
  };else return {
    valid: !1
  };
}
class Z extends _ {
  _parse(e) {
    let {
        status: status_3,
        ctx: r
      } = this._processInputParams(e),
      a = (s, i) => {
        if (me(s) || me(i)) return f;
        let n = ye(s.value, i.value);
        if (!n.valid) return u(r, {
          code: rr.invalid_intersection_types
        }), f;
        if (_e(s) || _e(i)) status_3.dirty();
        return {
          status: status_3.value,
          value: n.data
        };
      };
    if (r.common.async) return Promise.all([this._def.left._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    })]).then(([s, i]) => a(s, i));else return a(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Z.create = (left, right, r) => new Z({
  left: left,
  right: right,
  typeName: h.ZodIntersection,
  ...p(r)
});
class I extends _ {
  _parse(e) {
    let {
      status: status_4,
      ctx: ctx_4
    } = this._processInputParams(e);
    if (ctx_4.parsedType !== d.array) return u(ctx_4, {
      code: rr.invalid_type,
      expected: d.array,
      received: ctx_4.parsedType
    }), f;
    if (ctx_4.data.length < this._def.items.length) return u(ctx_4, {
      code: rr.too_small,
      minimum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), f;
    if (!this._def.rest && ctx_4.data.length > this._def.items.length) u(ctx_4, {
      code: rr.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), status_4.dirty();
    let s = [...ctx_4.data].map((item, index) => {
      let c = this._def.items[index] || this._def.rest;
      if (!c) return null;
      return c._parse(new w(ctx_4, item, ctx_4.path, index));
    }).filter(item => !!item);
    if (ctx_4.common.async) return Promise.all(s).then(i => v.mergeArray(status_4, i));else return v.mergeArray(status_4, s);
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new I({
      ...this._def,
      rest: rest
    });
  }
}
I.create = (items, t) => {
  if (!Array.isArray(items)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new I({
    items: items,
    typeName: h.ZodTuple,
    rest: null,
    ...p(t)
  });
};
class ue extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let {
      status: status_5,
      ctx: ctx_5
    } = this._processInputParams(e);
    if (ctx_5.parsedType !== d.object) return u(ctx_5, {
      code: rr.invalid_type,
      expected: d.object,
      received: ctx_5.parsedType
    }), f;
    let a = [],
      keyType = this._def.keyType,
      valueType = this._def.valueType;
    for (let n in ctx_5.data) a.push({
      key: keyType._parse(new w(ctx_5, n, ctx_5.path, n)),
      value: valueType._parse(new w(ctx_5, ctx_5.data[n], ctx_5.path, n)),
      alwaysSet: n in ctx_5.data
    });
    if (ctx_5.common.async) return v.mergeObjectAsync(status_5, a);else return v.mergeObjectSync(status_5, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, valueType_2, r) {
    if (valueType_2 instanceof _) return new ue({
      keyType: e,
      valueType: valueType_2,
      typeName: h.ZodRecord,
      ...p(r)
    });
    return new ue({
      keyType: T.create(),
      valueType: e,
      typeName: h.ZodRecord,
      ...p(valueType_2)
    });
  }
}
class le extends _ {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let {
      status: status_6,
      ctx: ctx_6
    } = this._processInputParams(e);
    if (ctx_6.parsedType !== d.map) return u(ctx_6, {
      code: rr.invalid_type,
      expected: d.map,
      received: ctx_6.parsedType
    }), f;
    let keyType_2 = this._def.keyType,
      valueType_3 = this._def.valueType,
      i = [...ctx_6.data.entries()].map(([n, c], index) => ({
        key: keyType_2._parse(new w(ctx_6, n, ctx_6.path, [index, "key"])),
        value: valueType_3._parse(new w(ctx_6, c, ctx_6.path, [index, "value"]))
      }));
    if (ctx_6.common.async) {
      let value_24 = new Map();
      return Promise.resolve().then(async () => {
        for (let c of i) {
          let o = await c.key,
            m = await c.value;
          if (o.status === "aborted" || m.status === "aborted") return f;
          if (o.status === "dirty" || m.status === "dirty") status_6.dirty();
          value_24.set(o.value, m.value);
        }
        return {
          status: status_6.value,
          value: value_24
        };
      });
    } else {
      let value_26 = new Map();
      for (let c of i) {
        let {
          key: key_4,
          value: value_25
        } = c;
        if (key_4.status === "aborted" || value_25.status === "aborted") return f;
        if (key_4.status === "dirty" || value_25.status === "dirty") status_6.dirty();
        value_26.set(key_4.value, value_25.value);
      }
      return {
        status: status_6.value,
        value: value_26
      };
    }
  }
}
le.create = (keyType_3, valueType_4, r) => new le({
  valueType: valueType_4,
  keyType: keyType_3,
  typeName: h.ZodMap,
  ...p(r)
});
class U extends _ {
  _parse(e) {
    let {
      status: status_7,
      ctx: ctx_7
    } = this._processInputParams(e);
    if (ctx_7.parsedType !== d.set) return u(ctx_7, {
      code: rr.invalid_type,
      expected: d.set,
      received: ctx_7.parsedType
    }), f;
    let _def_2 = this._def;
    if (_def_2.minSize !== null) {
      if (ctx_7.data.size < _def_2.minSize.value) u(ctx_7, {
        code: rr.too_small,
        minimum: _def_2.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: _def_2.minSize.message
      }), status_7.dirty();
    }
    if (_def_2.maxSize !== null) {
      if (ctx_7.data.size > _def_2.maxSize.value) u(ctx_7, {
        code: rr.too_big,
        maximum: _def_2.maxSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: _def_2.maxSize.message
      }), status_7.dirty();
    }
    let valueType_5 = this._def.valueType;
    function i(c) {
      let value_27 = new Set();
      for (let m of c) {
        if (m.status === "aborted") return f;
        if (m.status === "dirty") status_7.dirty();
        value_27.add(m.value);
      }
      return {
        status: status_7.value,
        value: value_27
      };
    }
    let n = [...ctx_7.data.values()].map((item, index) => valueType_5._parse(new w(ctx_7, item, ctx_7.path, index)));
    if (ctx_7.common.async) return Promise.all(n).then(c => i(c));else return i(n);
  }
  min(value_28, t) {
    return new U({
      ...this._def,
      minSize: {
        value: value_28,
        message: l.toString(t)
      }
    });
  }
  max(value_29, t) {
    return new U({
      ...this._def,
      maxSize: {
        value: value_29,
        message: l.toString(t)
      }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
U.create = (valueType_6, t) => new U({
  valueType: valueType_6,
  minSize: null,
  maxSize: null,
  typeName: h.ZodSet,
  ...p(t)
});
class H extends _ {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(e) {
    let {
      ctx: ctx_8
    } = this._processInputParams(e);
    if (ctx_8.parsedType !== d.function) return u(ctx_8, {
      code: rr.invalid_type,
      expected: d.function,
      received: ctx_8.parsedType
    }), f;
    function r(data_8, argumentsError) {
      return ie({
        data: data_8,
        path: ctx_8.path,
        errorMaps: [ctx_8.common.contextualErrorMap, ctx_8.schemaErrorMap, J(), N].filter(item => !!item),
        issueData: {
          code: rr.invalid_arguments,
          argumentsError: argumentsError
        }
      });
    }
    function a(data_9, returnTypeError) {
      return ie({
        data: data_9,
        path: ctx_8.path,
        errorMaps: [ctx_8.common.contextualErrorMap, ctx_8.schemaErrorMap, J(), N].filter(item => !!item),
        issueData: {
          code: rr.invalid_return_type,
          returnTypeError: returnTypeError
        }
      });
    }
    let s = {
        errorMap: ctx_8.common.contextualErrorMap
      },
      i = ctx_8.data;
    if (this._def.returns instanceof q) {
      let n = this;
      return x(async function (...c) {
        let o = new ZodError([]),
          m = await n._def.args.parseAsync(c, s).catch(pe => {
            throw o.addIssue(r(c, pe)), o;
          }),
          b = await Reflect.apply(i, this, m);
        return await n._def.returns._def.type.parseAsync(b, s).catch(pe => {
          throw o.addIssue(a(b, pe)), o;
        });
      });
    } else {
      let n = this;
      return x(function (...c) {
        let o = n._def.args.safeParse(c, s);
        if (!o.success) throw new ZodError([r(c, o.error)]);
        let m = Reflect.apply(i, this, o.data),
          b = n._def.returns.safeParse(m, s);
        if (!b.success) throw new ZodError([a(m, b.error)]);
        return b.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new H({
      ...this._def,
      args: I.create(e).rest(V.create())
    });
  }
  returns(returns) {
    return new H({
      ...this._def,
      returns: returns
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, r) {
    return new H({
      args: e ? e : I.create([]).rest(V.create()),
      returns: t || V.create(),
      typeName: h.ZodFunction,
      ...p(r)
    });
  }
}
class ee extends _ {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    let {
      ctx: t
    } = this._processInputParams(e);
    return this._def.getter()._parse({
      data: t.data,
      path: t.path,
      parent: t
    });
  }
}
ee.create = (getter, t) => new ee({
  getter: getter,
  typeName: h.ZodLazy,
  ...p(t)
});
class te extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return u(t, {
        received: t.data,
        code: rr.invalid_literal,
        expected: this._def.value
      }), f;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
  get value() {
    return this._def.value;
  }
}
te.create = (value_30, t) => new te({
  value: value_30,
  typeName: h.ZodLiteral,
  ...p(t)
});
function Ae(values, t) {
  return new P({
    values: values,
    typeName: h.ZodEnum,
    ...p(t)
  });
}
class P extends _ {
  _parse(e) {
    if (typeof e.data !== "string") {
      let t = this._getOrReturnCtx(e),
        r = this._def.values;
      return u(t, {
        expected: g.joinValues(r),
        received: t.parsedType,
        code: rr.invalid_type
      }), f;
    }
    if (!this._cache) this._cache = new Set(this._def.values);
    if (!this._cache.has(e.data)) {
      let t = this._getOrReturnCtx(e),
        options_4 = this._def.values;
      return u(t, {
        received: t.data,
        code: rr.invalid_enum_value,
        options: options_4
      }), f;
    }
    return x(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return P.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return P.create(this.options.filter(item => !e.includes(item)), {
      ...this._def,
      ...t
    });
  }
}
P.create = Ae;
class re extends _ {
  _parse(e) {
    let t = g.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(e);
    if (r.parsedType !== d.string && r.parsedType !== d.number) {
      let a = g.objectValues(t);
      return u(r, {
        expected: g.joinValues(a),
        received: r.parsedType,
        code: rr.invalid_type
      }), f;
    }
    if (!this._cache) this._cache = new Set(g.getValidEnumValues(this._def.values));
    if (!this._cache.has(e.data)) {
      let options_5 = g.objectValues(t);
      return u(r, {
        received: r.data,
        code: rr.invalid_enum_value,
        options: options_5
      }), f;
    }
    return x(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
re.create = (values_2, t) => new re({
  values: values_2,
  typeName: h.ZodNativeEnum,
  ...p(t)
});
class q extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let {
      ctx: ctx_9
    } = this._processInputParams(e);
    if (ctx_9.parsedType !== d.promise && ctx_9.common.async === !1) return u(ctx_9, {
      code: rr.invalid_type,
      expected: d.promise,
      received: ctx_9.parsedType
    }), f;
    let r = ctx_9.parsedType === d.promise ? ctx_9.data : Promise.resolve(ctx_9.data);
    return x(r.then(a => this._def.type.parseAsync(a, {
      path: ctx_9.path,
      errorMap: ctx_9.common.contextualErrorMap
    })));
  }
}
q.create = (type_2, t) => new q({
  type: type_2,
  typeName: h.ZodPromise,
  ...p(t)
});
class A extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === h.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    let {
        status: status_8,
        ctx: r
      } = this._processInputParams(e),
      a = this._def.effect || null,
      s = {
        addIssue: i => {
          if (u(r, i), i.fatal) status_8.abort();else status_8.dirty();
        },
        get path() {
          return r.path;
        }
      };
    if (s.addIssue = s.addIssue.bind(s), a.type === "preprocess") {
      let data_11 = a.transform(r.data, s);
      if (r.common.async) return Promise.resolve(data_11).then(async data_10 => {
        if (status_8.value === "aborted") return f;
        let c = await this._def.schema._parseAsync({
          data: data_10,
          path: r.path,
          parent: r
        });
        if (c.status === "aborted") return f;
        if (c.status === "dirty") return L(c.value);
        if (status_8.value === "dirty") return L(c.value);
        return c;
      });else {
        if (status_8.value === "aborted") return f;
        let n = this._def.schema._parseSync({
          data: data_11,
          path: r.path,
          parent: r
        });
        if (n.status === "aborted") return f;
        if (n.status === "dirty") return L(n.value);
        if (status_8.value === "dirty") return L(n.value);
        return n;
      }
    }
    if (a.type === "refinement") {
      let i = n => {
        let c = a.refinement(n, s);
        if (r.common.async) return Promise.resolve(c);
        if (c instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return n;
      };
      if (r.common.async === !1) {
        let n = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (n.status === "aborted") return f;
        if (n.status === "dirty") status_8.dirty();
        return i(n.value), {
          status: status_8.value,
          value: n.value
        };
      } else return this._def.schema._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }).then(n => {
        if (n.status === "aborted") return f;
        if (n.status === "dirty") status_8.dirty();
        return i(n.value).then(() => ({
          status: status_8.value,
          value: n.value
        }));
      });
    }
    if (a.type === "transform") if (r.common.async === !1) {
      let i = this._def.schema._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      if (!M(i)) return f;
      let value_31 = a.transform(i.value, s);
      if (value_31 instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return {
        status: status_8.value,
        value: value_31
      };
    } else return this._def.schema._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }).then(i => {
      if (!M(i)) return f;
      return Promise.resolve(a.transform(i.value, s)).then(value_32 => ({
        status: status_8.value,
        value: value_32
      }));
    });
    g.assertNever(a);
  }
}
A.create = (schema, effect, r) => new A({
  schema: schema,
  typeName: h.ZodEffects,
  effect: effect,
  ...p(r)
});
A.createWithPreprocess = (transform_2, schema_2, r) => new A({
  schema: schema_2,
  effect: {
    type: "preprocess",
    transform: transform_2
  },
  typeName: h.ZodEffects,
  ...p(r)
});
class S extends _ {
  _parse(e) {
    if (this._getType(e) === d.undefined) return x(void 0);
    return this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
S.create = (innerType, t) => new S({
  innerType: innerType,
  typeName: h.ZodOptional,
  ...p(t)
});
class E extends _ {
  _parse(e) {
    if (this._getType(e) === d.null) return x(null);
    return this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
E.create = (innerType_2, t) => new E({
  innerType: innerType_2,
  typeName: h.ZodNullable,
  ...p(t)
});
class se extends _ {
  _parse(e) {
    let {
        ctx: t
      } = this._processInputParams(e),
      data_12 = t.data;
    if (t.parsedType === d.undefined) data_12 = this._def.defaultValue();
    return this._def.innerType._parse({
      data: data_12,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
se.create = (innerType_3, t) => new se({
  innerType: innerType_3,
  typeName: h.ZodDefault,
  defaultValue: typeof t.default === "function" ? t.default : () => t.default,
  ...p(t)
});
class ae extends _ {
  _parse(e) {
    let {
        ctx: ctx_10
      } = this._processInputParams(e),
      r = {
        ...ctx_10,
        common: {
          ...ctx_10.common,
          issues: []
        }
      },
      a = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: {
          ...r
        }
      });
    if (Y(a)) return a.then(s => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new ZodError(r.common.issues);
        },
        input: r.data
      })
    }));else return {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new ZodError(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ae.create = (innerType_4, t) => new ae({
  innerType: innerType_4,
  typeName: h.ZodCatch,
  catchValue: typeof t.catch === "function" ? t.catch : () => t.catch,
  ...p(t)
});
class fe extends _ {
  _parse(e) {
    if (this._getType(e) !== d.nan) {
      let r = this._getOrReturnCtx(e);
      return u(r, {
        code: rr.invalid_type,
        expected: d.nan,
        received: r.parsedType
      }), f;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
}
fe.create = e => new fe({
  typeName: h.ZodNaN,
  ...p(e)
});
var _t = Symbol("zod_brand");
class xe extends _ {
  _parse(e) {
    let {
        ctx: t
      } = this._processInputParams(e),
      data_13 = t.data;
    return this._def.type._parse({
      data: data_13,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class he extends _ {
  _parse(e) {
    let {
      status: status_9,
      ctx: r
    } = this._processInputParams(e);
    if (r.common.async) return (async () => {
      let s = await this._def.in._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      });
      if (s.status === "aborted") return f;
      if (s.status === "dirty") return status_9.dirty(), L(s.value);else return this._def.out._parseAsync({
        data: s.value,
        path: r.path,
        parent: r
      });
    })();else {
      let a = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      if (a.status === "aborted") return f;
      if (a.status === "dirty") return status_9.dirty(), {
        status: "dirty",
        value: a.value
      };else return this._def.out._parseSync({
        data: a.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, out) {
    return new he({
      in: e,
      out: out,
      typeName: h.ZodPipeline
    });
  }
}
class ne extends _ {
  _parse(e) {
    let t = this._def.innerType._parse(e),
      r = a => {
        if (M(a)) a.value = Object.freeze(a.value);
        return a;
      };
    return Y(t) ? t.then(a => r(a)) : r(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ne.create = (innerType_5, t) => new ne({
  innerType: innerType_5,
  typeName: h.ZodReadonly,
  ...p(t)
});
function Te(message_9, t) {
  let message_10 = typeof message_9 === "function" ? message_9(t) : typeof message_9 === "string" ? {
    message: message_9
  } : message_9;
  return typeof message_10 === "string" ? {
    message: message_10
  } : message_10;
}
function Djt(e, t = {}, r) {
  if (e) return B.create().superRefine((a, s) => {
    let i = e(a);
    if (i instanceof Promise) return i.then(n => {
      if (!n) {
        let c = Te(t, a),
          fatal = c.fatal ?? r ?? !0;
        s.addIssue({
          code: "custom",
          ...c,
          fatal: fatal
        });
      }
    });
    if (!i) {
      let n = Te(t, a),
        fatal_2 = n.fatal ?? r ?? !0;
      s.addIssue({
        code: "custom",
        ...n,
        fatal: fatal_2
      });
    }
    return;
  });
  return B.create();
}
var gt = {
    object: y.lazycreate
  },
  h;
(function (e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(h || (h = {}));
var de = T.create,
  fn = D.create,
  yt = fe.create,
  vt = z.create,
  ho = G.create,
  xt = W.create,
  kt = ce.create,
  uKr = Q.create,
  _Vo = X.create,
  bt = B.create,
  Pc = V.create,
  wt = j.create,
  Tt = oe.create,
  Xn = C.create,
  {
    create: create,
    strictCreate: strictCreate
  } = y,
  JI = K.create,
  Myn = ve.create,
  Ct = Z.create,
  pKr = I.create,
  mg = ue.create,
  St = le.create,
  At = U.create,
  Rt = H.create,
  Ot = ee.create,
  qu = te.create,
  jl = P.create,
  jt = re.create,
  It = q.create,
  Nt = A.create,
  Et = S.create,
  $t = E.create,
  createWithPreprocess = A.createWithPreprocess,
  Mt = he.create;
var eP = {
  string: e => T.create({
    ...e,
    coerce: !0
  }),
  number: e => D.create({
    ...e,
    coerce: !0
  }),
  boolean: e => G.create({
    ...e,
    coerce: !0
  }),
  bigint: e => z.create({
    ...e,
    coerce: !0
  }),
  date: e => W.create({
    ...e,
    coerce: !0
  })
};
var bVo = f;
export { rr, Djt, de, fn, ho, uKr, _Vo, Pc, Xn, create as lt, strictCreate as Il, JI, Myn, pKr, mg, qu, jl, createWithPreprocess as Ljt, eP, bVo };