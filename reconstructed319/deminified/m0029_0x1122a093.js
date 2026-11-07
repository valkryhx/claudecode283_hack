// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { pd } from "B:/~BUN/root/chunk-838fxqce.js";
import { $e } from "B:/~BUN/root/chunk-fg0appz9.js";
import { Xl, $pe, Upe, h5 } from "B:/~BUN/root/chunk-44q965xg.js";
import { U2e, B2e } from "B:/~BUN/root/chunk-m4hycz0k.js";
import { bn } from "B:/~BUN/root/chunk-2631cdbp.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
function M() {
  let o = {
    log() {},
    hookFailed() {}
  };
  return {
    set: r => {
      o = r;
    },
    get: () => o
  };
}
var y = M();
var qd = y.get;
var NUn = y.set;
function BS(o) {
  if (!D(o)) return !1;
  let r = Object.getPrototypeOf(o);
  return r === null || !pd(r) && Object.getPrototypeOf(r) === null;
}
function h(node, r, below) {
  if (typeof node !== "object" || !node || r.has(node)) return below;
  if (pd(node)) return below;
  let depth = (below?.depth ?? 0) + 1;
  if (depth > U2e) throw RangeError(B2e);
  r.add(node);
  let n = Array.isArray(node);
  return n || BS(node) ? {
    node: node,
    keys: n ? [] : Object.keys(node),
    at: 0,
    depth: depth,
    below: below
  } : below;
}
function $xs(o, r) {
  let t = h(o, r, void 0);
  while (t !== void 0) {
    let {
        node: node_2,
        keys: keys,
        at: at
      } = t,
      a = Array.isArray(node_2);
    if (at < (a ? node_2 : keys).length) t.at = at + 1, t = h(a ? node_2[at] : node_2[keys[at] ?? ""], r, t);else Object.freeze(node_2), t = t.below;
  }
}
function aZe(o) {
  return $xs(o, new Set()), o;
}
function owo(o, r, t) {
  if (o === void 0) return !0;
  if (Array.isArray(o)) return o.some(item => owo(item, r, t));
  if (!BS(o) || Object.keys(o).join() !== r) return !1;
  let e = o[r];
  return Array.isArray(e) ? e.includes(t) : e === t;
}
var J4i = 8;
var Q4i = 256;
var fPr = 65536;
function ro(o) {
  if (o === void 0) return "undefined";
  if (typeof o === "function") return "a function";
  if (typeof o === "object" && o) {
    let r = Object.prototype.toString.call(o).replace(/^\[object |\]$/g, "");
    return r === "Object" ? "an object" : `a ${r}`;
  }
  return `a ${typeof o}`;
}
function p(o) {
  if (typeof o !== "object" || !o) return !1;
  try {
    return Reflect.get(RegExp.prototype, "source", o), !0;
  } catch {
    return !1;
  }
}
var lZe = o => BS(o) && !p(o);
var N = o => o?.paths.some(r => r.length === 0) === !0;
var MUn = "__proto__";
function kR(o, r) {
  let t = Object.create(null);
  for (let [e, n] of Object.entries(o)) if (e !== MUn && r(n, e)) t[e] = n;
  return t;
}
var Pua = o => Object.freeze(kR(D(o) ? o : {}, r => typeof r === "string"));
function _(o, r) {
  let t = L([r, Xl(r)].flatMap(item => Upe(item, o)));
  return L(t.concat(t.flatMap(item => h5(item, o))).flatMap(item => [item, ...$pe(item)]));
}
function P(o, r) {
  return o.paths.some(item => item[0] === r) ? {
    table: o.table,
    paths: o.paths.filter(item => item[0] === r).map(item => item.slice(1))
  } : void 0;
}
var Oua = Object.freeze({});
var b = Object.freeze({
  "tool.call": [["tool"]],
  "tool.check": [["tool"]],
  "tool.describe": [["tool"]],
  "classic.PreToolUse": [["tool"]],
  "classic.PostToolUse": [["tool_name"]],
  "classic.PostToolUseFailure": [["tool_name"]],
  "classic.PermissionRequest": [["tool_name"]],
  "classic.PermissionDenied": [["tool_name"]],
  "classic.PostToolBatch": [["tool_calls", "tool_name"]],
  "session.append": [["origin", "tool"]],
  "session.compact": [["messages", "toolUses", "tool"]],
  "ui.render": [["props", "tool"], ["props", "calls", "tool"]]
});
var Uxs = o => Object.hasOwn(b, o) ? b[o] : void 0;
var I = (o, r, t) => N(o) && typeof r === "string" && typeof t === "string" && _(o.table, t).includes(r);
function swo(o) {
  let r = typeof o === "function";
  return p(o) ? String(o) : Array.isArray(o) ? o.map(swo).join("|") : lZe(o) ? `{${Object.entries(o).map(([t, e]) => lZe(e) ? `${t} has ${swo(e)}` : `${t}=${swo(e)}`).join(", ")}}` : r ? "function" : String(o);
}
var i = o => ({
  source: String(Reflect.get(RegExp.prototype, "source", o)),
  flags: String(Reflect.get(RegExp.prototype, "flags", o))
});
var iwo = /^\^?(?:\((?:\?:)?)?\^?\w+\$?(?:\|\^?\w+\$?)*\)?\$?$/;
var W = "w";
var H = o => Array.from(o, r => bn(r) === r ? W : r).join("");
function S(o) {
  let r = o.source.startsWith("^(") && o.source.endsWith(")$");
  return o.flags === "" && iwo.test(H(o.source)) && (r || o.source.split("|").every(item => item.startsWith("^") && item.endsWith("$")));
}
var K = (o, r, t) => N(o.names) && typeof t === "string" && S(i(r)) && _(o.names.table, t).some(item => o.test(r, item));
function C(o, r) {
  return o.names === void 0 ? o : {
    test: o.test,
    names: P(o.names, r)
  };
}
function DUn(o, r, t) {
  if (Array.isArray(o)) return Array.prototype.some.call(o, e => DUn(e, r, t));
  if (Array.isArray(r)) return Array.prototype.some.call(r, e => DUn(o, e, t));
  if (typeof o !== "object" || o === null) return o === r || I(t.names, o, r);
  if (BS(o)) {
    if (typeof r !== "object" || !r) return !1;
    for (let e of Object.keys(o)) if (!Object.hasOwn(r, e) || !DUn(o[e], r[e], C(t, e))) return !1;
    return !0;
  }
  return p(o) && (t.test(o, String(r)) || K(t, o, r));
}
function LUn(o, r, path = "") {
  let e;
  if (Array.isArray(o)) return Array.prototype.some.call(o, n => (e = LUn(n, r, path), e !== void 0)), e;
  if (Array.isArray(r)) return Array.prototype.some.call(r, n => (e = LUn(o, n, path), e !== void 0)), e;
  if (!lZe(o)) return;
  if (r === null) return {
    path: path,
    kind: "null"
  };
  switch (typeof r) {
    case "string":
      return {
        path: path,
        kind: "string"
      };
    case "number":
      return {
        path: path,
        kind: "number"
      };
    case "boolean":
      return {
        path: path,
        kind: "boolean"
      };
    case "bigint":
      return {
        path: path,
        kind: "bigint"
      };
    case "object":
      break;
    case "undefined":
    case "symbol":
    case "function":
      return;
  }
  for (let n of Object.keys(o)) {
    if (!Object.hasOwn(r, n)) continue;
    if (e = LUn(o[n], r[n], path === "" ? n : `${path}.${n}`), e !== void 0) return e;
  }
  return;
}
function Bxs(o, r, t) {
  let e = t.path.split(".").at(-1) ?? t.path;
  return `hooks module ${o}: on('${r}') matcher at ${t.path} is a nested object, but e.${t.path} is a ${t.kind} there, which an object matcher can never match (a matcher has no operator keys); the hook will not run for it. A ${t.kind} is matched by the literal value or, as a string, by a RegExp, e.g. { ${e}: /^prefix/ }`;
}
var jxs = 32;
var u = "$$regex";
function E(o, where, t) {
  if (Array.isArray(o)) return Array.prototype.map.call(o, (e, n) => E(e, where, `${t}[${n}]`));
  if (lZe(o)) {
    let at_2 = t === "" ? "" : ` at ${t}`,
      source = o[u];
    if (typeof source === "string" && typeof o.flags === "string" && Object.keys(o).length === 2) return A({
      source: source,
      flags: o.flags,
      where: where,
      at: at_2
    }), new RegExp(source, o.flags);
    O(o, where, at_2);
    let a = {};
    for (let [T, G] of Object.entries(o)) a[T] = E(G, where, t === "" ? T : `${t}.${T}`);
    return a;
  }
  return o;
}
function d(o) {
  if (p(o)) {
    let {
      source: source_2,
      flags: flags
    } = i(o);
    return {
      [u]: source_2,
      flags: flags
    };
  }
  if (Array.isArray(o)) return Array.prototype.map.call(o, d);
  if (lZe(o)) {
    let r = {};
    for (let [t, e] of Object.entries(o)) r[t] = d(e);
    return r;
  }
  return o;
}
var Wxs = o => o.map(({
  matcher: matcher,
  ...t
}) => matcher === void 0 ? t : {
  ...t,
  matcher: d(matcher)
});
var F = o => /\([^()]*[+*?}]\)\s*[+*{]/.test(o);
var g = o => o.includes("g") ? "g" : o.includes("y") ? "y" : void 0;
function A({
  source: source_3,
  flags: flags_2,
  where: where_2,
  at: at_3
}) {
  let n = g(flags_2);
  if (n) throw new $e(`${where_2}: matcher${at_3} is a RegExp with the ${n} flag, which keeps state between tests; drop it`);
  if (F(source_3)) throw new $e(`${where_2}: matcher${at_3} is a RegExp with a nested quantifier (${source_3}), which can backtrack without bound; rewrite it`);
}
function O(o, r, t) {
  if (Object.hasOwn(o, MUn)) throw new $e(`${r}: matcher${t} has the key ${MUn}, which a matcher does not keep`);
}
function j(o, where_3, t) {
  let at_4 = t === "" ? "" : ` at ${t}`;
  if (p(o)) {
    A({
      ...i(o),
      where: where_3,
      at: at_4
    });
    return;
  }
  if (Array.isArray(o)) {
    Array.prototype.forEach.call(o, (n, s) => j(n, where_3, `${t}[${s}]`));
    return;
  }
  if (lZe(o)) {
    if (Object.hasOwn(o, u)) throw new $e(`${where_3}: matcher${at_4} uses the reserved key ${u} (how a RegExp crosses the worker boundary); a RegExp goes in as a RegExp`);
    O(o, where_3, at_4);
    for (let [n, s] of Object.entries(o)) j(s, where_3, t === "" ? n : `${t}.${n}`);
    return;
  }
  switch (typeof o) {
    case "string":
      if (o.length > fPr) throw new $e(`${where_3}: matcher${at_4} is a string longer than ${fPr} characters, which cannot match`);
      return;
    case "number":
    case "boolean":
      return;
    case "object":
      if (!o) return;
      break;
    case "bigint":
    case "symbol":
    case "undefined":
    case "function":
      break;
  }
  throw new $e(`${where_3}: matcher${t === "" ? "" : ` at ${t}`} must be a string, a number, a boolean, null, a RegExp, an array of those, or a nested object; got ${ro(o)}`);
}
function test(o, r) {
  if (r.length > fPr) return qd().log(`matcher: a value of ${r.length} characters is past the ${fPr} a RegExp matcher reads; it matches, so the hook decides`), !0;
  if (g(i(o).flags)) o.lastIndex = 0;
  return RegExp.prototype.exec.call(o, r) !== null;
}
function Iua(o, r) {
  if (!lZe(o)) throw new $e(`${r}: the matcher must be a plain object (a partial of e)`);
  j(o, r, "");
}
var Mua = (o, r = "matcher") => E(o, r, "");
var dZe = (o, r, names) => DUn(o, r, {
  test: test,
  names: names
});
var lon = (o, r, names_2) => DUn(o, r, {
  test: () => !0,
  names: names_2
});
var k = (o, r, t, e = lon) => Array.isArray(o) ? o.some(item => k(item, r, t, e)) : !BS(o) || !Object.hasOwn(o, r.field) || e(o[r.field], r.value, t);
var awo = (o, r, t, e) => Object.entries(r).every(([field, value]) => k(o, {
  field: field,
  value: value
}, t && P(t, field), e));
var OHt = (o, field_2, value_2) => k(o, {
  field: field_2,
  value: value_2
});
export { BS, $xs, aZe, owo, J4i, Q4i, fPr, lZe, MUn, kR, Pua, Oua, Uxs, swo, iwo, DUn, LUn, Bxs, jxs, Wxs, qd, NUn, test as Z4i, Iua, Mua, dZe, lon, awo, OHt };