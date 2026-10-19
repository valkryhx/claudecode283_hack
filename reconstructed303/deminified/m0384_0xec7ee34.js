// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { M5, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { xl } from "B:/~BUN/root/chunk-648jq7hr.js";
var rrn = e => e.mcpInfo?.effectiveMaxPermission === "ask" ? {
  ceiling: "ask"
} : {};
var NBe = e => ({
  tool: e.name,
  ceiling: rrn(e).ceiling
});
class d extends Error {}
var d_2 = [[48, 57]],
  w_2 = [[48, 57], [65, 90], [95, 95], [97, 122]],
  s_2 = [[9, 13], [32, 32], [160, 160], [5760, 5760], [8192, 8202], [8232, 8233], [8239, 8239], [8287, 8287], [12288, 12288], [65279, 65279]],
  C = {
    d: d_2,
    D: E(d_2),
    w: w_2,
    W: E(w_2),
    s: s_2,
    S: E(s_2)
  },
  R = E([[10, 10], [13, 13], [8232, 8233]]),
  j = /^[ -/:-@[-`{-~]$/,
  F = 100,
  q = "^$\\.*+?()[]{}|";
function H(e, n) {
  let r = 0,
    o = e.length;
  while (r < o) {
    let i = r + o >> 1;
    if (n > e[i][1]) r = i + 1;else o = i;
  }
  return r < e.length && n >= e[r][0];
}
function E(e) {
  let n = [],
    r = 0;
  for (let [o, i] of e) {
    if (o > r) n.push([r, o - 1]);
    r = i + 1;
  }
  if (r <= 65535) n.push([r, 65535]);
  return n;
}
function M(e) {
  let n = [];
  for (let [r, o] of e.toSorted((i, u) => i[0] - u[0])) {
    let i = n.at(-1);
    if (i !== void 0 && r <= i[1] + 1) i[1] = Math.max(i[1], o);else n.push([r, o]);
  }
  return n;
}
function G(e) {
  let n = 0,
    r = 0;
  function o(s) {
    if (!e.startsWith(s, n)) return !1;
    return n += s.length, !0;
  }
  function i() {
    if (n >= e.length) throw new d();
    return e.charCodeAt(n++);
  }
  function u() {
    let options = [l()];
    while (o("|")) options.push(l());
    return {
      type: "either",
      options: options
    };
  }
  function l() {
    let items = [];
    while (n < e.length && e[n] !== "|" && e[n] !== ")") items.push(w());
    return {
      type: "sequence",
      items: items
    };
  }
  function w() {
    if (o("^")) return {
      type: "start"
    };
    if (o("$")) return {
      type: "end"
    };
    if (o("\\b")) return {
      type: "boundary"
    };
    if (o("\\B")) return {
      type: "notBoundary"
    };
    let item = S(),
      mark = e[n];
    if (mark !== "*" && mark !== "+" && mark !== "?") return item;
    return n++, o("?"), {
      type: "repeat",
      item: item,
      mark: mark
    };
  }
  function S() {
    if (o("(")) {
      if (e[n] === "?" && !o("?:") || ++r > F) throw new d();
      let s = u();
      if (!o(")")) throw new d();
      return r--, s;
    }
    if (o(".")) return {
      type: "set",
      set: R
    };
    if (o("[")) return {
      type: "set",
      set: y()
    };
    if (o("\\")) {
      let unit = x();
      return typeof unit === "number" ? {
        type: "unit",
        unit: unit
      } : {
        type: "set",
        set: unit
      };
    }
    if (q.includes(e[n] ?? "")) throw new d();
    return {
      type: "unit",
      unit: i()
    };
  }
  function x() {
    let s = i(),
      a = String.fromCharCode(s);
    if (Object.hasOwn(C, a)) return C[a];
    if (!j.test(a)) throw new d();
    return s;
  }
  function y() {
    let s = o("^"),
      a = [];
    while (!o("]")) {
      let b = o("\\") ? x() : i(),
        P = e[n] === "-" && e[n + 1] !== "]";
      if (typeof b !== "number") {
        if (P) throw new d();
        a.push(...b);
        continue;
      }
      if (!P) {
        a.push([b, b]);
        continue;
      }
      n++;
      let _ = o("\\") ? x() : i();
      if (typeof _ !== "number" || _ < b) throw new d();
      a.push([b, _]);
    }
    return s ? E(M(a)) : M(a);
  }
  let m = {
      type: "start"
    },
    unless,
    whole;
  if (o("^(?!")) {
    if (unless = {
      type: "sequence",
      items: [m, u()]
    }, !o(")")) throw new d();
    whole = {
      type: "sequence",
      items: [m, l()]
    };
  } else whole = u();
  if (n < e.length) throw new d();
  return {
    unless: unless,
    whole: whole
  };
}
var f = {
  match: 0,
  unit: 1,
  set: 2,
  jump: 3,
  split: 4,
  start: 5,
  end: 6,
  boundary: 7,
  notBoundary: 8
};
function g(e, n, r = 0, o) {
  return e.to.push(r), e.other.push(0), e.sets.push(o), e.ops.push(n) - 1;
}
function k(e, n) {
  let {
    ops: ops,
    to: to,
    other: other
  } = n;
  switch (e.type) {
    case "unit":
      g(n, f.unit, e.unit);
      return;
    case "set":
      g(n, f.set, 0, e.set);
      return;
    case "start":
    case "end":
    case "boundary":
    case "notBoundary":
      g(n, f[e.type]);
      return;
    case "sequence":
      for (let u of e.items) k(u, n);
      return;
    case "either":
      {
        let u = [];
        for (let l of e.options.slice(0, -1)) {
          let w = g(n, f.split, ops.length + 1);
          k(l, n), u.push(g(n, f.jump)), other[w] = ops.length;
        }
        k(e.options.at(-1), n);
        for (let l of u) to[l] = ops.length;
        return;
      }
    case "repeat":
      {
        let u = ops.length;
        if (e.mark === "+") {
          k(e.item, n);
          let l = g(n, f.split, u);
          other[l] = ops.length;
          return;
        }
        if (g(n, f.split, u + 1), k(e.item, n), e.mark === "*") g(n, f.jump, u);
        other[u] = ops.length;
      }
  }
}
function L({
  ops: ops_2,
  to: to_2,
  other: other_2,
  sets: sets
}, i) {
  let u = new Int32Array(ops_2.length).fill(-1),
    int32Array = new Int32Array(ops_2.length),
    int32Array_2 = new Int32Array(ops_2.length),
    S = 0,
    x = 0,
    y = 0;
  function m(h) {
    if (u[h] !== y) u[h] = y, int32Array[S++] = h;
  }
  for (;; y++) {
    while (x > 0) m(int32Array_2[--x]);
    m(0);
    let h = y < i.length ? i.charCodeAt(y) : -1;
    while (S > 0) {
      let c = int32Array[--S];
      switch (ops_2[c]) {
        case f.match:
          return !0;
        case f.unit:
          if (h === to_2[c]) int32Array_2[x++] = c + 1;
          break;
        case f.set:
          if (H(sets[c], h)) int32Array_2[x++] = c + 1;
          break;
        case f.split:
          m(other_2[c]), m(to_2[c]);
          break;
        case f.jump:
          m(to_2[c]);
          break;
        case f.start:
          if (y === 0) m(c + 1);
          break;
        case f.boundary:
        case f.notBoundary:
          {
            if ((y > 0 && H(w_2, i.charCodeAt(y - 1))) !== H(w_2, h) === (ops_2[c] === f.boundary)) m(c + 1);
            break;
          }
        default:
          if (h < 0) m(c + 1);
      }
    }
    if (h < 0) return !1;
  }
}
function D(e) {
  let n = {
    ops: [],
    to: [],
    other: [],
    sets: []
  };
  return k(e, n), g(n, f.match), L.bind(null, n);
}
function v(e) {
  try {
    let {
        unless: unless_2,
        whole: whole_2
      } = G(e),
      test = D(whole_2);
    if (unless_2 === void 0) return {
      test: test
    };
    let i = D(unless_2);
    return {
      test: u => !i(u) && test(u)
    };
  } catch (error) {
    if (error instanceof d) return;
    throw error;
  }
}
var X = 2048,
  B = 512;
class Bfe extends Error {}
function K(e) {
  if (e.length > X) return "too_long";
  let n = v(e);
  if (n !== void 0) return n;
  try {
    return new RegExp(e), "not_read";
  } catch {
    return "invalid";
  }
}
function _zn(e) {
  if (!de()) return new RegExp(e);
  let n = K(e);
  if (n === "invalid") throw SyntaxError("invalid hook matcher");
  if (typeof n === "string") throw new Bfe("This hook's matcher cannot be tested in a cloud session: it has to be rewritten.");
  return {
    test(r) {
      if (r.length > B) throw new Bfe(`The name that this hook's matcher is tested against (for a tool call, the tool's name) has over ${B} characters, more than a cloud session tests.`);
      return n.test(r);
    }
  };
}
function Rpt(e) {
  return e.hook.type === "callback" && e.hook.internal === !0;
}
function vIs(e, n) {
  if (xl()) {
    let r = e.filter(Rpt),
      num_dropped = e.length - r.length;
    if (num_dropped > 0) t(`Hooks: ${num_dropped} ${n} ${O(num_dropped, "hook")} from settings or plugins not run: claude mcp serve --transport http never runs them (intended)`, {
      level: "warn"
    }), p(M5(n), "not_run_in_tool_server_daemon", {
      num_dropped: num_dropped
    });
    return r;
  }
  return e;
}
export { Bfe, _zn, rrn, NBe, Rpt, vIs };