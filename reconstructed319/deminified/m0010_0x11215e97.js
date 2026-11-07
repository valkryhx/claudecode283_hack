// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var k = Object.create;
var {
  getPrototypeOf: getPrototypeOf,
  defineProperty: defineProperty,
  getOwnPropertyNames: getOwnPropertyNames
} = Object;
var j = Object.prototype.hasOwnProperty;
function n(a) {
  return this[a];
}
var o,
  p,
  Oe = (value, b, c) => {
    var d = value != null && typeof value === "object";
    if (d) {
      var h = b ? o ??= new WeakMap() : p ??= new WeakMap(),
        i = h.get(value);
      if (i) return i;
    }
    c = value != null ? k(getPrototypeOf(value)) : {};
    let e = b || !value || !value.__esModule || !j.call(value, "default") ? defineProperty(c, "default", {
      value: value,
      enumerable: !0
    }) : c;
    if (value && typeof value === "object" || typeof value === "function") {
      for (let g of getOwnPropertyNames(value)) if (!j.call(e, g)) defineProperty(e, g, {
        get: n.bind(value, g),
        enumerable: !0
      });
    }
    if (d) h.set(value, e);
    return e;
  };
var M = (a, b) => () => (b || a((b = {
  exports: {}
}).exports, b), b.exports);
var q = a => a;
function r(a, b) {
  this[a] = q.bind(null, b);
}
var Rr = (a, b) => {
  for (var c in b) defineProperty(a, c, {
    get: b[c],
    enumerable: !0,
    configurable: !0,
    set: r.bind(b, c)
  });
};
var wl = (a, b, c) => () => {
  if (a) try {
    b = a(a = 0);
  } catch (error) {
    c = [error];
  }
  if (c) throw c[0];
  return b;
};
var w = Symbol.for("react.memo_cache_sentinel"),
  Pn = Symbol.for("react.early_return_sentinel"),
  ypa = (a, b, c) => {
    for (var d in b) defineProperty(a, d, {
      get: b[d],
      set: c[d],
      enumerable: !0,
      configurable: !0
    });
  },
  je = import.meta.require;
export { Oe, M, Rr, wl, w, Pn, ypa, je };