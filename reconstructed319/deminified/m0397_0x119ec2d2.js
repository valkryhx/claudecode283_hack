// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
class p extends Error {
  kind;
  constructor(t) {
    super();
    this.kind = t;
  }
}
var d_2 = [[48, 57]],
  w_2 = [[48, 57], [65, 90], [95, 95], [97, 122]],
  s_2 = [[9, 13], [32, 32], [160, 160], [5760, 5760], [8192, 8202], [8232, 8233], [8239, 8239], [8287, 8287], [12288, 12288], [65279, 65279]],
  N = {
    d: d_2,
    D: E(d_2),
    w: w_2,
    W: E(w_2),
    s: s_2,
    S: E(s_2)
  },
  H = E([[10, 10], [13, 13], [8232, 8233]]),
  I = /^[ -/:-@[-`{-~]$/,
  v = /^\{(\d+)(?:(,)(\d*))?\}/,
  K = /^([A-Za-z_$][\w$]*)>/,
  L = /\((?!\?)|\(\?<(?![=!])/,
  G = /\(\?<(?![=!])/,
  X = 100,
  j = 6,
  B = "^$\\.*+?()[]{}|";
function O(t, e) {
  let r = 0,
    i = t.length;
  while (r < i) {
    let n = r + i >> 1;
    if (e > t[n][1]) r = n + 1;else i = n;
  }
  return r < t.length && e >= t[r][0];
}
function E(t) {
  let e = [],
    r = 0;
  for (let [i, n] of t) {
    if (i > r) e.push([r, i - 1]);
    r = n + 1;
  }
  if (r <= 65535) e.push([r, 65535]);
  return e;
}
function k(t) {
  let e = [];
  for (let [r, i] of t.toSorted((n, g) => n[0] - g[0])) {
    let n = e.at(-1);
    if (n !== void 0 && r <= n[1] + 1) n[1] = Math.max(n[1], i);else e.push([r, i]);
  }
  return e;
}
function W(t) {
  let e = 0,
    r = 0,
    i = new Set();
  function n(o) {
    if (!t.startsWith(o, e)) return !1;
    return e += o.length, !0;
  }
  function g() {
    if (e >= t.length) throw new p("other");
    return t.charCodeAt(e++);
  }
  function d() {
    let options = [f()];
    while (n("|")) options.push(f());
    return {
      type: "either",
      options: options
    };
  }
  function f() {
    let items = [];
    while (e < t.length && t[e] !== "|" && t[e] !== ")") items.push(h());
    return {
      type: "sequence",
      items: items
    };
  }
  function h() {
    if (n("^")) return {
      type: "start"
    };
    if (n("$")) return {
      type: "end"
    };
    if (n("\\b")) return {
      type: "boundary"
    };
    if (n("\\B")) return {
      type: "notBoundary"
    };
    let item = l(),
      least = 0,
      most = 1 / 0;
    if (n("+")) least = 1;else if (n("?")) most = 1;else if (!n("*")) {
      let m = t[e] === "{" ? v.exec(t.slice(e)) : null;
      if (m === null) return item;
      if (e += m[0].length, least = Number(m[1]), m[2] === void 0) most = least;else if (m[3] !== "") most = Number(m[3]);
      if (most < least) throw new p("other");
    }
    return n("?"), {
      type: "repeat",
      item: item,
      least: least,
      most: most
    };
  }
  function l() {
    if (n("(")) return A();
    if (n(".")) return {
      type: "set",
      set: H
    };
    if (n("[")) return {
      type: "set",
      set: y()
    };
    if (n("\\")) {
      let unit = w();
      return typeof unit === "number" ? {
        type: "unit",
        unit: unit
      } : {
        type: "set",
        set: unit
      };
    }
    if (B.includes(t[e] ?? "")) throw new p("legacy_grammar");
    return {
      type: "unit",
      unit: g()
    };
  }
  function A() {
    if (++r > X) throw new p("too_large");
    let isNegative;
    if (n("?=")) isNegative = !1;else if (n("?!")) isNegative = !0;else if (n("?<=") || n("?<!")) throw new p("look_behind");else if (n("?<")) {
      let s = K.exec(t.slice(e))?.[1];
      if (s === void 0 || i.has(s)) throw new p("other");
      i.add(s), e += s.length + 1;
    } else if (t[e] === "?" && !n("?:")) throw new p("flags_group");
    let item_2 = d();
    if (!n(")")) throw new p("other");
    return r--, isNegative === void 0 ? item_2 : {
      type: "look",
      item: item_2,
      isNegative: isNegative
    };
  }
  function w(o = !1) {
    let a = g(),
      s = String.fromCharCode(a);
    if (Object.hasOwn(N, s)) return N[s];
    if (!I.test(s)) {
      let m = s === "k" ? G : L,
        c = !o && /[1-9k]/.test(s) && m.test(t);
      throw new p(c ? "back_reference" : "escape");
    }
    return a;
  }
  function y() {
    let o = n("^"),
      a = [];
    while (!n("]")) {
      let s = n("\\") ? w(!0) : g(),
        m = t[e] === "-" && t[e + 1] !== "]";
      if (typeof s !== "number") {
        if (m) throw new p("legacy_grammar");
        a.push(...s);
        continue;
      }
      if (!m) {
        a.push([s, s]);
        continue;
      }
      e++;
      let c = n("\\") ? w(!0) : g();
      if (typeof c !== "number") throw new p("legacy_grammar");
      if (c < s) throw new p("other");
      a.push([s, c]);
    }
    return o ? E(k(a)) : k(a);
  }
  let b = d();
  if (e < t.length) throw new p("other");
  return b;
}
var u = {
  match: 0,
  unit: 1,
  set: 2,
  jump: 3,
  split: 4,
  start: 5,
  end: 6,
  boundary: 7,
  notBoundary: 8,
  look: 9
};
function C(t) {
  if (--t.left < 0) throw new p("too_large");
}
function T(room) {
  return {
    room: room,
    ops: [],
    to: [],
    other: [],
    sets: []
  };
}
function x(t, e, r = 0, i) {
  return C(t.room), t.to.push(r), t.other.push(0), t.sets.push(i), t.ops.push(e) - 1;
}
function _(t, e, r, i) {
  C(e.room);
  let {
    ops: ops,
    to: to,
    other: other
  } = e;
  switch (t.type) {
    case "unit":
      x(e, u.unit, t.unit);
      return;
    case "set":
      x(e, u.set, 0, t.set);
      return;
    case "start":
    case "end":
    case "boundary":
    case "notBoundary":
      x(e, u[t.type]);
      return;
    case "look":
      {
        let f = r.indexOf.get(t);
        if (f === void 0) {
          let places = T(e.room);
          _(t.item, places, r, !0), x(places, u.match), f = r.list.push({
            places: places,
            isNegative: t.isNegative
          }) - 1, r.indexOf.set(t, f);
        }
        x(e, u.look, f);
        return;
      }
    case "sequence":
      for (let f of i ? t.items.toReversed() : t.items) _(f, e, r, i);
      return;
    case "either":
      {
        let f = [];
        for (let h of t.options.slice(0, -1)) {
          let l = x(e, u.split, ops.length + 1);
          _(h, e, r, i), f.push(x(e, u.jump)), other[l] = ops.length;
        }
        _(t.options.at(-1), e, r, i);
        for (let h of f) to[h] = ops.length;
        return;
      }
    case "repeat":
      {
        let f = ops.length;
        for (let l = 0; l < t.least; l++) f = ops.length, _(t.item, e, r, i);
        if (t.most === 1 / 0) {
          if (t.least > 0) {
            let A = x(e, u.split, f);
            other[A] = ops.length;
            return;
          }
          let l = x(e, u.split, ops.length + 1);
          _(t.item, e, r, i), x(e, u.jump, l), other[l] = ops.length;
          return;
        }
        let h = [];
        for (let least_2 = t.least; least_2 < t.most; least_2++) h.push(x(e, u.split, ops.length + 1)), _(t.item, e, r, i);
        for (let l of h) other[l] = ops.length;
      }
  }
}
function P({
  ops: ops_2,
  to: to_2,
  other: other_2,
  sets: sets
}, n, g, d) {
  let f = new Int32Array(ops_2.length).fill(-1),
    int32Array = new Int32Array(ops_2.length),
    int32Array_2 = new Int32Array(ops_2.length),
    A = 0,
    w = 0,
    y = d === void 0 ? 0 : n.length;
  function b(o) {
    if (f[o] !== y) f[o] = y, int32Array[A++] = o;
  }
  for (;;) {
    while (w > 0) b(int32Array_2[--w]);
    b(0);
    let o = y > 0 ? n.charCodeAt(y - 1) : -1,
      a = y < n.length ? n.charCodeAt(y) : -1,
      s = d === void 0 ? a : o,
      m = O(w_2, o) !== O(w_2, a);
    while (A > 0) {
      let c = int32Array[--A];
      switch (ops_2[c]) {
        case u.match:
          if (d === void 0) return !0;
          d[y] = 1;
          break;
        case u.unit:
          if (s === to_2[c]) int32Array_2[w++] = c + 1;
          break;
        case u.set:
          if (O(sets[c], s)) int32Array_2[w++] = c + 1;
          break;
        case u.split:
          b(other_2[c]), b(to_2[c]);
          break;
        case u.jump:
          b(to_2[c]);
          break;
        case u.start:
          if (o < 0) b(c + 1);
          break;
        case u.end:
          if (a < 0) b(c + 1);
          break;
        case u.boundary:
        case u.notBoundary:
          if (m === (ops_2[c] === u.boundary)) b(c + 1);
          break;
        default:
          if (g[to_2[c]][y] === 1) b(c + 1);
      }
    }
    if (s < 0) return !1;
    y += d === void 0 ? 1 : -1;
  }
}
function z(t, left) {
  let r = T({
      left: left
    }),
    i = {
      list: [],
      indexOf: new Map()
    };
  return _(t, r, i, !1), x(r, u.match), n => {
    let g = [];
    for (let d of i.list) {
      let uint8Array = new Uint8Array(n.length + 1);
      P(d.places, n, g, uint8Array), g.push(d.isNegative ? uint8Array.map(item => 1 - item) : uint8Array);
    }
    return P(r, n, g);
  };
}
function Z(t) {
  try {
    let e = j * (t.length + 1);
    return {
      test: z(W(t), e)
    };
  } catch (error) {
    if (error instanceof p) return error.kind;
    throw error;
  }
}
function M(t) {
  let e = Z(t);
  return typeof e === "object" ? e : void 0;
}
var gQt = 1024,
  kSr = 16384,
  F = kSr,
  D = 512,
  V = 2048;
class n_e extends Error {}
function Y(t) {
  let e = t.length > F ? void 0 : M(t);
  if (e !== void 0) return e;
  if (t.length > V) return "not_read";
  try {
    return new RegExp(t), "not_read";
  } catch {
    return "invalid";
  }
}
function vSr(t) {
  if (!q()) return new RegExp(t);
  let e = Y(t);
  if (e === "invalid") throw SyntaxError("invalid hook matcher");
  if (typeof e === "string") throw new n_e("This hook's matcher cannot be tested in a cloud session: it has to be rewritten.");
  return {
    test(r) {
      if (r.length > D) throw new n_e(`The name that this hook's matcher is tested against (for a tool call, the tool's name) has over ${D} characters, more than a cloud session tests.`);
      return e.test(r);
    }
  };
}
export { gQt, kSr, n_e, vSr };