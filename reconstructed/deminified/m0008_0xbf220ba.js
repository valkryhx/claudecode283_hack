// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var l = Object.create;
var {
  getPrototypeOf: getPrototypeOf,
  defineProperty: defineProperty,
  getOwnPropertyNames: getOwnPropertyNames
} = Object;
var j = Object.prototype.hasOwnProperty;
function o(a) {
  return this[a];
}
var p,
  q,
  be = (value, b, c) => {
    var d = value != null && typeof value === "object";
    if (d) {
      var h = b ? p ??= new WeakMap() : q ??= new WeakMap(),
        i = h.get(value);
      if (i) return i;
    }
    c = value != null ? l(getPrototypeOf(value)) : {};
    let e = b || !value || !value.__esModule || !j.call(value, "default") ? defineProperty(c, "default", {
      value: value,
      enumerable: !0
    }) : c;
    if (value && typeof value === "object" || typeof value === "function") {
      for (let g of getOwnPropertyNames(value)) if (!j.call(e, g)) defineProperty(e, g, {
        get: o.bind(value, g),
        enumerable: !0
      });
    }
    if (d) h.set(value, e);
    return e;
  };
var k = (a, b) => () => (b || a((b = {
  exports: {}
}).exports, b), b.exports);
var r = a => a;
function s(a, b) {
  this[a] = r.bind(null, b);
}
var vo = (a, b) => {
  for (var c in b) defineProperty(a, c, {
    get: b[c],
    enumerable: !0,
    configurable: !0,
    set: s.bind(b, c)
  });
};
var si = (a, b, c) => () => {
  if (a) try {
    b = a(a = 0);
  } catch (error) {
    c = [error];
  }
  if (c) throw c[0];
  return b;
};
var S = Symbol.for("react.memo_cache_sentinel"),
  hn = Symbol.for("react.early_return_sentinel"),
  SVo = (a, b, c) => {
    for (var d in b) defineProperty(a, d, {
      get: b[d],
      set: c[d],
      enumerable: !0,
      configurable: !0
    });
  },
  Re = import.meta.require;
export { be, k, vo, si, S, hn, SVo, Re };