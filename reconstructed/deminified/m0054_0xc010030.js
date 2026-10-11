// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { De } from "B:/~BUN/root/chunk-5dk9zqaz.js";
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
function I() {
  let r = {
    log() {},
    hookFailed() {}
  };
  return {
    set: o => {
      r = o;
    },
    get: () => r
  };
}
var x = I();
var ANt = x.set;
var kc = x.get;
var tOo = 8;
var nOo = 256;
var l = 65536;
function F(r) {
  if (r === void 0) return "undefined";
  if (typeof r === "function") return "a function";
  if (typeof r === "object" && r) {
    let o = Object.prototype.toString.call(r).replace(/^\[object |\]$/g, "");
    return o === "Object" ? "an object" : `a ${o}`;
  }
  return `a ${typeof r}`;
}
var gN = r => G(r) && (Object.getPrototypeOf(r) === null || Object.getPrototypeOf(Object.getPrototypeOf(r)) === null);
function y(r, o) {
  if (typeof r !== "object" || !r || o.has(r)) return;
  if (o.add(r), Array.isArray(r)) {
    for (let t of r) y(t, o);
    Object.freeze(r);
    return;
  }
  if (!gN(r)) return;
  for (let t of Object.keys(r)) y(r[t], o);
  Object.freeze(r);
}
function UCe(r) {
  return y(r, new Set()), r;
}
function i(r) {
  if (typeof r !== "object" || !r) return !1;
  try {
    return Reflect.get(RegExp.prototype, "source", r), !0;
  } catch {
    return !1;
  }
}
var BCe = r => gN(r) && !i(r);
function qVn(r) {
  let o = typeof r === "function";
  return i(r) ? String(r) : Array.isArray(r) ? r.map(qVn).join("|") : BCe(r) ? `{${Object.entries(r).map(([t, e]) => BCe(e) ? `${t} has ${qVn(e)}` : `${t}=${qVn(e)}`).join(", ")}}` : o ? "function" : String(r);
}
function p(r, o, t) {
  if (Array.isArray(r)) return Array.prototype.some.call(r, e => p(e, o, t));
  if (Array.isArray(o)) return Array.prototype.some.call(o, e => p(r, e, t));
  if (typeof r !== "object" || r === null) return r === o;
  if (gN(r)) {
    if (typeof o !== "object" || !o) return !1;
    for (let e of Object.keys(r)) if (!Object.hasOwn(o, e) || !p(r[e], o[e], t)) return !1;
    return !0;
  }
  return i(r) && t(r, String(o));
}
function xNt(r, o, path = "") {
  let e;
  if (Array.isArray(r)) return Array.prototype.some.call(r, n => (e = xNt(n, o, path), e !== void 0)), e;
  if (Array.isArray(o)) return Array.prototype.some.call(o, n => (e = xNt(r, n, path), e !== void 0)), e;
  if (!BCe(r)) return;
  if (o === null) return {
    path: path,
    kind: "null"
  };
  switch (typeof o) {
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
  for (let n of Object.keys(r)) {
    if (!Object.hasOwn(o, n)) continue;
    if (e = xNt(r[n], o[n], path === "" ? n : `${path}.${n}`), e !== void 0) return e;
  }
  return;
}
function MLr(r, o, t) {
  let e = t.path.split(".").at(-1) ?? t.path;
  return `hooks module ${r}: on('${o}') matcher at ${t.path} is a nested object, but e.${t.path} is a ${t.kind} there, which an object matcher can never match (a matcher has no operator keys); the hook will not run for it. A ${t.kind} is matched by the literal value or, as a string, by a RegExp, e.g. { ${e}: /^prefix/ }`;
}
var DLr = 32;
var s = "$$regex";
function h(r, where, t) {
  if (Array.isArray(r)) return Array.prototype.map.call(r, (e, n) => h(e, where, `${t}[${n}]`));
  if (BCe(r)) {
    let at = t === "" ? "" : ` at ${t}`,
      source = r[s];
    if (typeof source === "string" && typeof r.flags === "string" && Object.keys(r).length === 2) return E({
      source: source,
      flags: r.flags,
      where: where,
      at: at
    }), new RegExp(source, r.flags);
    w(r, where, at);
    let A = {};
    for (let [b, _] of Object.entries(r)) A[b] = h(_, where, t === "" ? b : `${t}.${b}`);
    return A;
  }
  return r;
}
var T = "__proto__";
var M = r => /\([^()]*[+*?}]\)\s*[+*{]/.test(r);
var d = r => r.includes("g") ? "g" : r.includes("y") ? "y" : void 0;
function E({
  source: source_2,
  flags: flags,
  where: where_2,
  at: at_2
}) {
  let n = d(flags);
  if (n) throw new De(`${where_2}: matcher${at_2} is a RegExp with the ${n} flag, which keeps state between tests; drop it`);
  if (M(source_2)) throw new De(`${where_2}: matcher${at_2} is a RegExp with a nested quantifier (${source_2}), which can backtrack without bound; rewrite it`);
}
var m = r => ({
  source: String(Reflect.get(RegExp.prototype, "source", r)),
  flags: String(Reflect.get(RegExp.prototype, "flags", r))
});
function w(r, o, t) {
  if (Object.hasOwn(r, T)) throw new De(`${o}: matcher${t} has the key ${T}, which no event has`);
}
function O(r, where_3, t) {
  let at_3 = t === "" ? "" : ` at ${t}`;
  if (i(r)) {
    E({
      ...m(r),
      where: where_3,
      at: at_3
    });
    return;
  }
  if (Array.isArray(r)) {
    Array.prototype.forEach.call(r, (n, u) => O(n, where_3, `${t}[${u}]`));
    return;
  }
  if (BCe(r)) {
    if (Object.hasOwn(r, s)) throw new De(`${where_3}: matcher${at_3} uses the reserved key ${s} (how a RegExp crosses the worker boundary); a RegExp goes in as a RegExp`);
    w(r, where_3, at_3);
    for (let [n, u] of Object.entries(r)) O(u, where_3, t === "" ? n : `${t}.${n}`);
    return;
  }
  switch (typeof r) {
    case "string":
      if (r.length > l) throw new De(`${where_3}: matcher${at_3} is a string longer than ${l} characters, which cannot match`);
      return;
    case "number":
    case "boolean":
      return;
    case "object":
      if (!r) return;
      break;
    case "bigint":
    case "symbol":
    case "undefined":
    case "function":
      break;
  }
  throw new De(`${where_3}: matcher${t === "" ? "" : ` at ${t}`} must be a string, a number, a boolean, null, a RegExp, an array of those, or a nested object; got ${F(r)}`);
}
function rr(r, o) {
  if (o.length > l) return kc().log(`matcher: a value of ${o.length} characters is past the ${l} a RegExp matcher reads; it matches, so the hook decides`), !0;
  if (d(m(r).flags)) r.lastIndex = 0;
  return RegExp.prototype.exec.call(r, o) !== null;
}
function k(r) {
  if (i(r)) {
    let {
      source: source_3,
      flags: flags_2
    } = m(r);
    return {
      [s]: source_3,
      flags: flags_2
    };
  }
  if (Array.isArray(r)) return Array.prototype.map.call(r, k);
  if (BCe(r)) {
    let o = {};
    for (let [t, e] of Object.entries(r)) o[t] = k(e);
    return o;
  }
  return r;
}
var LLr = r => r.map(({
  pattern: pattern,
  matcher: matcher
}) => matcher === void 0 ? {
  pattern: pattern
} : {
  pattern: pattern,
  matcher: k(matcher)
});
var NLr = (r, o) => p(r, o, () => !0);
var Fhe = (r, o, t) => Array.isArray(r) ? r.some(item => Fhe(item, o, t)) : !gN(r) || !Object.hasOwn(r, o) || NLr(r[o], t);
function U2o(r, o) {
  if (!BCe(r)) throw new De(`${o}: the matcher must be a plain object (a partial of e)`);
  O(r, o, "");
}
var B2o = (r, o = "matcher") => h(r, o, "");
var vdt = (r, o) => p(r, o, rr);
export { gN, UCe, kc, ANt, tOo, nOo, BCe, qVn, xNt, MLr, DLr, LLr, U2o, B2o, vdt, NLr, Fhe };