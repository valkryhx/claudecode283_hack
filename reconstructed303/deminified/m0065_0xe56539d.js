// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { gd, Cne, Rne, O2 } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { tW, Lgt } from "B:/~BUN/root/chunk-dyer18a2.js";
import { Fje, Hje } from "B:/~BUN/root/chunk-vg8k87xx.js";
import { Tn } from "B:/~BUN/root/chunk-f43s8pq0.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
function H() {
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
var g = H();
var _d = g.get;
var Zan = g.set;
import { isProxy as so } from "util/types";
import { isProxy as eo } from "util/types";
function Gy(o) {
  if (!N(o)) return !1;
  let r = Object.getPrototypeOf(o);
  return r === null || !eo(r) && Object.getPrototypeOf(r) === null;
}
function A(node, r, below) {
  if (typeof node !== "object" || !node || r.has(node)) return below;
  if (so(node)) return below;
  let depth = (below?.depth ?? 0) + 1;
  if (depth > Fje) throw RangeError(Hje);
  r.add(node);
  let n = Array.isArray(node);
  return n || Gy(node) ? {
    node: node,
    keys: n ? [] : Object.keys(node),
    at: 0,
    depth: depth,
    below: below
  } : below;
}
function oMo(o, r) {
  let t = A(o, r, void 0);
  while (t !== void 0) {
    let {
        node: node_2,
        keys: keys,
        at: at
      } = t,
      a = Array.isArray(node_2);
    if (at < (a ? node_2 : keys).length) t.at = at + 1, t = A(a ? node_2[at] : node_2[keys[at] ?? ""], r, t);else Object.freeze(node_2), t = t.below;
  }
}
function Lje(o) {
  return oMo(o, new Set()), o;
}
function xgt(o, r = "aborted") {
  let {
    reason: reason
  } = o;
  return reason instanceof Error ? reason.message : reason === void 0 ? r : String(reason);
}
var hQs = o => `the answer is not plain data: ${o}`;
class Ie extends Error {
  name = "HooksError";
  telemetryMessage = "function hooks error (message not reported: it may contain plugin details)";
  thrownName;
}
function Xan(o, r) {
  if (!N(o)) throw new Ie(`${r}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);
  return o;
}
function tMo(o) {
  if (!(o instanceof Error)) return;
  let cause = o.cause;
  return typeof cause === "string" ? cause : void 0;
}
var UBs = o => typeof o === "object" && o !== null && "aborted" in o && typeof o.addEventListener === "function" && typeof o.removeEventListener === "function";
var Jan = o => `next() argument is not plain data: ${o}`;
var eDr = (o, r) => `${o}: arguments are not plain data: ${r}`;
class Zme extends Ie {}
var BBs = o => o.reason instanceof Zme;
var nMo = (o, r) => r === !0 ? new Zme(o) : new Ie(o);
var x4n = o => o.reason instanceof Zme ? {
  isSettled: !0
} : {};
var yQs = o => o instanceof Zme ? new Ie(o.message) : o;
var weakMap = new WeakMap();
function P4n(o, r) {
  if (typeof o === "object" && o !== null) weakMap.set(o, r);
  return o;
}
var rMo = o => typeof o === "object" && o !== null ? weakMap.get(o) : void 0;
class tDr extends Ie {
  asked;
  constructor(o, r) {
    super(o);
    this.asked = r;
  }
}
var weakSet = new WeakSet();
var nDr = o => typeof o === "object" && o !== null && weakSet.has(o);
function O4n(o) {
  if (typeof o === "object" && o !== null) weakSet.add(o);
  return o;
}
function W() {
  let weakMap_2 = new WeakMap();
  return {
    mark(r, t) {
      if (typeof r === "object" && r !== null && t !== void 0) weakMap_2.set(r, t);
      return r;
    },
    of(r) {
      return typeof r === "object" && r !== null ? weakMap_2.get(r) : void 0;
    }
  };
}
var b = W();
var Pgt = (o, r) => b.mark(o, r);
var AIe = o => new Ie(`${o}: its environment was unloaded`);
var I4n = (plugin, op, message) => ({
  plugin: plugin,
  op: op,
  message: message
});
function _Qs(o, r) {
  let t = AIe(o);
  return Pgt(t, I4n(o, r, t.message));
}
var M4n = o => b.of(o);
var zBs = (o, r) => !tW(o) && !Lgt(o, r);
function rDr(o, r, t) {
  if (o === void 0) return !0;
  if (Array.isArray(o)) return o.some(item => rDr(item, r, t));
  if (!Gy(o) || Object.keys(o).join() !== r) return !1;
  let e = o[r];
  return Array.isArray(e) ? e.includes(t) : e === t;
}
var jBs = 8;
var WBs = 256;
var E = 65536;
function Io(o) {
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
var xIe = o => Gy(o) && !p(o);
var C = o => o?.paths.some(r => r.length === 0) === !0;
var Yan = "__proto__";
function Vk(o, r) {
  let t = Object.create(null);
  for (let [e, n] of Object.entries(o)) if (e !== Yan && r(n, e)) t[e] = n;
  return t;
}
var bQs = o => Object.freeze(Vk(N(o) ? o : {}, r => typeof r === "string"));
function F(o, r) {
  let t = L([r, gd(r)].flatMap(item => Rne(item, o)));
  return L(t.concat(t.flatMap(item => O2(item, o))).flatMap(item => [item, ...Cne(item)]));
}
function K(o, r) {
  return o.paths.some(item => item[0] === r) ? {
    table: o.table,
    paths: o.paths.filter(item => item[0] === r).map(item => item.slice(1))
  } : void 0;
}
var SQs = Object.freeze({});
var S = Object.freeze({
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
var sMo = o => Object.hasOwn(S, o) ? S[o] : void 0;
var U = (o, r, t) => C(o) && typeof r === "string" && typeof t === "string" && F(o.table, t).includes(r);
function oDr(o) {
  let r = typeof o === "function";
  return p(o) ? String(o) : Array.isArray(o) ? o.map(oDr).join("|") : xIe(o) ? `{${Object.entries(o).map(([t, e]) => xIe(e) ? `${t} has ${oDr(e)}` : `${t}=${oDr(e)}`).join(", ")}}` : r ? "function" : String(o);
}
var i = o => ({
  source: String(Reflect.get(RegExp.prototype, "source", o)),
  flags: String(Reflect.get(RegExp.prototype, "flags", o))
});
var sDr = /^\^?(?:\((?:\?:)?)?\^?\w+\$?(?:\|\^?\w+\$?)*\)?\$?$/;
var D = "w";
var z = o => Array.from(o, r => Tn(r) === r ? D : r).join("");
function G(o) {
  let r = o.source.startsWith("^(") && o.source.endsWith(")$");
  return o.flags === "" && sDr.test(z(o.source)) && (r || o.source.split("|").every(item => item.startsWith("^") && item.endsWith("$")));
}
var Y = (o, r, t) => C(o.names) && typeof t === "string" && G(i(r)) && F(o.names.table, t).some(item => o.test(r, item));
function B(o, r) {
  return o.names === void 0 ? o : {
    test: o.test,
    names: K(o.names, r)
  };
}
function u(o, r, t) {
  if (Array.isArray(o)) return Array.prototype.some.call(o, e => u(e, r, t));
  if (Array.isArray(r)) return Array.prototype.some.call(r, e => u(o, e, t));
  if (typeof o !== "object" || o === null) return o === r || U(t.names, o, r);
  if (Gy(o)) {
    if (typeof r !== "object" || !r) return !1;
    for (let e of Object.keys(o)) if (!Object.hasOwn(r, e) || !u(o[e], r[e], B(t, e))) return !1;
    return !0;
  }
  return p(o) && (t.test(o, String(r)) || Y(t, o, r));
}
function Qan(o, r, path = "") {
  let e;
  if (Array.isArray(o)) return Array.prototype.some.call(o, n => (e = Qan(n, r, path), e !== void 0)), e;
  if (Array.isArray(r)) return Array.prototype.some.call(r, n => (e = Qan(o, n, path), e !== void 0)), e;
  if (!xIe(o)) return;
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
    if (e = Qan(o[n], r[n], path === "" ? n : `${path}.${n}`), e !== void 0) return e;
  }
  return;
}
function iMo(o, r, t) {
  let e = t.path.split(".").at(-1) ?? t.path;
  return `hooks module ${o}: on('${r}') matcher at ${t.path} is a nested object, but e.${t.path} is a ${t.kind} there, which an object matcher can never match (a matcher has no operator keys); the hook will not run for it. A ${t.kind} is matched by the literal value or, as a string, by a RegExp, e.g. { ${e}: /^prefix/ }`;
}
var aMo = 32;
var x = "$$regex";
function M(o, where, t) {
  if (Array.isArray(o)) return Array.prototype.map.call(o, (e, n) => M(e, where, `${t}[${n}]`));
  if (xIe(o)) {
    let at_2 = t === "" ? "" : ` at ${t}`,
      source = o[x];
    if (typeof source === "string" && typeof o.flags === "string" && Object.keys(o).length === 2) return I({
      source: source,
      flags: o.flags,
      where: where,
      at: at_2
    }), new RegExp(source, o.flags);
    _(o, where, at_2);
    let a = {};
    for (let [O, Q] of Object.entries(o)) a[O] = M(Q, where, t === "" ? O : `${t}.${O}`);
    return a;
  }
  return o;
}
function h(o) {
  if (p(o)) {
    let {
      source: source_2,
      flags: flags
    } = i(o);
    return {
      [x]: source_2,
      flags: flags
    };
  }
  if (Array.isArray(o)) return Array.prototype.map.call(o, h);
  if (xIe(o)) {
    let r = {};
    for (let [t, e] of Object.entries(o)) r[t] = h(e);
    return r;
  }
  return o;
}
var lMo = o => o.map(({
  matcher: matcher,
  ...t
}) => matcher === void 0 ? t : {
  ...t,
  matcher: h(matcher)
});
var X = o => /\([^()]*[+*?}]\)\s*[+*{]/.test(o);
var w = o => o.includes("g") ? "g" : o.includes("y") ? "y" : void 0;
function I({
  source: source_3,
  flags: flags_2,
  where: where_2,
  at: at_3
}) {
  let n = w(flags_2);
  if (n) throw new Ie(`${where_2}: matcher${at_3} is a RegExp with the ${n} flag, which keeps state between tests; drop it`);
  if (X(source_3)) throw new Ie(`${where_2}: matcher${at_3} is a RegExp with a nested quantifier (${source_3}), which can backtrack without bound; rewrite it`);
}
function _(o, r, t) {
  if (Object.hasOwn(o, Yan)) throw new Ie(`${r}: matcher${t} has the key ${Yan}, which a matcher does not keep`);
}
function P(o, where_3, t) {
  let at_4 = t === "" ? "" : ` at ${t}`;
  if (p(o)) {
    I({
      ...i(o),
      where: where_3,
      at: at_4
    });
    return;
  }
  if (Array.isArray(o)) {
    Array.prototype.forEach.call(o, (n, s) => P(n, where_3, `${t}[${s}]`));
    return;
  }
  if (xIe(o)) {
    if (Object.hasOwn(o, x)) throw new Ie(`${where_3}: matcher${at_4} uses the reserved key ${x} (how a RegExp crosses the worker boundary); a RegExp goes in as a RegExp`);
    _(o, where_3, at_4);
    for (let [n, s] of Object.entries(o)) P(s, where_3, t === "" ? n : `${t}.${n}`);
    return;
  }
  switch (typeof o) {
    case "string":
      if (o.length > E) throw new Ie(`${where_3}: matcher${at_4} is a string longer than ${E} characters, which cannot match`);
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
  throw new Ie(`${where_3}: matcher${t === "" ? "" : ` at ${t}`} must be a string, a number, a boolean, null, a RegExp, an array of those, or a nested object; got ${Io(o)}`);
}
function test(o, r) {
  if (r.length > E) return _d().log(`matcher: a value of ${r.length} characters is past the ${E} a RegExp matcher reads; it matches, so the hook decides`), !0;
  if (w(i(o).flags)) o.lastIndex = 0;
  return RegExp.prototype.exec.call(o, r) !== null;
}
function wQs(o, r) {
  if (!xIe(o)) throw new Ie(`${r}: the matcher must be a plain object (a partial of e)`);
  P(o, r, "");
}
var vQs = (o, r = "matcher") => M(o, r, "");
var Ogt = (o, r, names) => u(o, r, {
  test: test,
  names: names
});
var D4n = (o, r, names_2) => u(o, r, {
  test: () => !0,
  names: names_2
});
var R = (o, r, t) => Array.isArray(o) ? o.some(item => R(item, r, t)) : !Gy(o) || !Object.hasOwn(o, r.field) || D4n(o[r.field], r.value, t);
var L4n = (o, r, t) => Object.entries(r).every(([field, value]) => R(o, {
  field: field,
  value: value
}, t && K(t, field)));
var Igt = (o, field_2, value_2) => R(o, {
  field: field_2,
  value: value_2
});
export { Yan, Vk, xgt, hQs, Ie, Xan, tMo, UBs, Jan, eDr, Zme, BBs, nMo, x4n, yQs, P4n, rMo, tDr, nDr, O4n, Pgt, AIe, I4n, _Qs, M4n, Gy, oMo, Lje, rDr, jBs, WBs, xIe, bQs, SQs, sMo, oDr, sDr, Qan, iMo, aMo, lMo, _d, Zan, wQs, vQs, Ogt, D4n, L4n, Igt, zBs };