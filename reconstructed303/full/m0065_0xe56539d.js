// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  gd,
  Cne,
  Rne,
  O2
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  tW,
  Lgt
} from "B:/~BUN/root/chunk-dyer18a2.js";
import {
  Fje,
  Hje
} from "B:/~BUN/root/chunk-vg8k87xx.js";
import {
  Tn
} from "B:/~BUN/root/chunk-f43s8pq0.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";

function H() {
  let o = {
    log() {},
    hookFailed() {}
  };
  return {
    set: (r) => {
      o = r
    },
    get: () => o
  }
}
var g = H();
var _d = g.get;
var Zan = g.set;
import {
  isProxy as so
} from "util/types";
import {
  isProxy as eo
} from "util/types";

function Gy(o) {
  if (!N(o)) return !1;
  let r = Object.getPrototypeOf(o);
  return r === null || !eo(r) && Object.getPrototypeOf(r) === null
}

function A(o, r, t) {
  if (typeof o !== "object" || !o || r.has(o)) return t;
  if (so(o)) return t;
  let e = (t?.depth ?? 0) + 1;
  if (e > Fje) throw RangeError(Hje);
  r.add(o);
  let n = Array.isArray(o);
  return n || Gy(o) ? {
    node: o,
    keys: n ? [] : Object.keys(o),
    at: 0,
    depth: e,
    below: t
  } : t
}

function oMo(o, r) {
  let t = A(o, r, void 0);
  while (t !== void 0) {
    let {
      node: e,
      keys: n,
      at: s
    } = t, a = Array.isArray(e);
    if (s < (a ? e : n).length) t.at = s + 1, t = A(a ? e[s] : e[n[s] ?? ""], r, t);
    else Object.freeze(e), t = t.below
  }
}

function Lje(o) {
  return oMo(o, new Set), o
}

function xgt(o, r = "aborted") {
  let {
    reason: t
  } = o;
  return t instanceof Error ? t.message : t === void 0 ? r : String(t)
}
var hQs = (o) => `the answer is not plain data: ${o}`;
class Ie extends Error {
  name = "HooksError";
  telemetryMessage = "function hooks error (message not reported: it may contain plugin details)";
  thrownName
}

function Xan(o, r) {
  if (!N(o)) throw new Ie(`${r}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);
  return o
}

function tMo(o) {
  if (!(o instanceof Error)) return;
  let r = o.cause;
  return typeof r === "string" ? r : void 0
}
var UBs = (o) => typeof o === "object" && o !== null && ("aborted" in o) && typeof o.addEventListener === "function" && typeof o.removeEventListener === "function";
var Jan = (o) => `next() argument is not plain data: ${o}`;
var eDr = (o, r) => `${o}: arguments are not plain data: ${r}`;
class Zme extends Ie {}
var BBs = (o) => o.reason instanceof Zme;
var nMo = (o, r) => r === !0 ? new Zme(o) : new Ie(o);
var x4n = (o) => o.reason instanceof Zme ? {
  isSettled: !0
} : {};
var yQs = (o) => o instanceof Zme ? new Ie(o.message) : o;
var k = new WeakMap;

function P4n(o, r) {
  if (typeof o === "object" && o !== null) k.set(o, r);
  return o
}
var rMo = (o) => typeof o === "object" && o !== null ? k.get(o) : void 0;
class tDr extends Ie {
  asked;
  constructor(o, r) {
    super(o);
    this.asked = r
  }
}
var T = new WeakSet;
var nDr = (o) => typeof o === "object" && o !== null && T.has(o);

function O4n(o) {
  if (typeof o === "object" && o !== null) T.add(o);
  return o
}

function W() {
  let o = new WeakMap;
  return {
    mark(r, t) {
      if (typeof r === "object" && r !== null && t !== void 0) o.set(r, t);
      return r
    },
    of(r) {
      return typeof r === "object" && r !== null ? o.get(r) : void 0
    }
  }
}
var b = W();
var Pgt = (o, r) => b.mark(o, r);
var AIe = (o) => new Ie(`${o}: its environment was unloaded`);
var I4n = (o, r, t) => ({
  plugin: o,
  op: r,
  message: t
});

function _Qs(o, r) {
  let t = AIe(o);
  return Pgt(t, I4n(o, r, t.message))
}
var M4n = (o) => b.of(o);
var zBs = (o, r) => !tW(o) && !Lgt(o, r);

function rDr(o, r, t) {
  if (o === void 0) return !0;
  if (Array.isArray(o)) return o.some((n) => rDr(n, r, t));
  if (!Gy(o) || Object.keys(o).join() !== r) return !1;
  let e = o[r];
  return Array.isArray(e) ? e.includes(t) : e === t
}
var jBs = 8;
var WBs = 256;
var E = 65536;

function Io(o) {
  if (o === void 0) return "undefined";
  if (typeof o === "function") return "a function";
  if (typeof o === "object" && o) {
    let r = Object.prototype.toString.call(o).replace(/^\[object |\]$/g, "");
    return r === "Object" ? "an object" : `a ${r}`
  }
  return `a ${typeof o}`
}

function p(o) {
  if (typeof o !== "object" || !o) return !1;
  try {
    return Reflect.get(RegExp.prototype, "source", o), !0
  } catch {
    return !1
  }
}
var xIe = (o) => Gy(o) && !p(o);
var C = (o) => o?.paths.some((r) => r.length === 0) === !0;
var Yan = "__proto__";

function Vk(o, r) {
  let t = Object.create(null);
  for (let [e, n] of Object.entries(o))
    if (e !== Yan && r(n, e)) t[e] = n;
  return t
}
var bQs = (o) => Object.freeze(Vk(N(o) ? o : {}, (r) => typeof r === "string"));

function F(o, r) {
  let t = L([r, gd(r)].flatMap((e) => Rne(e, o)));
  return L(t.concat(t.flatMap((e) => O2(e, o))).flatMap((e) => [e, ...Cne(e)]))
}

function K(o, r) {
  return o.paths.some((e) => e[0] === r) ? {
    table: o.table,
    paths: o.paths.filter((e) => e[0] === r).map((e) => e.slice(1))
  } : void 0
}
var SQs = Object.freeze({});
var S = Object.freeze({
  "tool.call": [
    ["tool"]
  ],
  "tool.check": [
    ["tool"]
  ],
  "tool.describe": [
    ["tool"]
  ],
  "classic.PreToolUse": [
    ["tool"]
  ],
  "classic.PostToolUse": [
    ["tool_name"]
  ],
  "classic.PostToolUseFailure": [
    ["tool_name"]
  ],
  "classic.PermissionRequest": [
    ["tool_name"]
  ],
  "classic.PermissionDenied": [
    ["tool_name"]
  ],
  "classic.PostToolBatch": [
    ["tool_calls", "tool_name"]
  ],
  "session.append": [
    ["origin", "tool"]
  ],
  "session.compact": [
    ["messages", "toolUses", "tool"]
  ],
  "ui.render": [
    ["props", "tool"],
    ["props", "calls", "tool"]
  ]
});
var sMo = (o) => Object.hasOwn(S, o) ? S[o] : void 0;
var U = (o, r, t) => C(o) && typeof r === "string" && typeof t === "string" && F(o.table, t).includes(r);

function oDr(o) {
  let r = typeof o === "function";
  return p(o) ? String(o) : Array.isArray(o) ? o.map(oDr).join("|") : xIe(o) ? `{${Object.entries(o).map(([t,e])=>xIe(e)?`${t} has ${oDr(e)}`:`${t}=${oDr(e)}`).join(", ")}}` : r ? "function" : String(o)
}
var i = (o) => ({
  source: String(Reflect.get(RegExp.prototype, "source", o)),
  flags: String(Reflect.get(RegExp.prototype, "flags", o))
});
var sDr = /^\^?(?:\((?:\?:)?)?\^?\w+\$?(?:\|\^?\w+\$?)*\)?\$?$/;
var D = "w";
var z = (o) => Array.from(o, (r) => Tn(r) === r ? D : r).join("");

function G(o) {
  let r = o.source.startsWith("^(") && o.source.endsWith(")$");
  return o.flags === "" && sDr.test(z(o.source)) && (r || o.source.split("|").every((t) => t.startsWith("^") && t.endsWith("$")))
}
var Y = (o, r, t) => C(o.names) && typeof t === "string" && G(i(r)) && F(o.names.table, t).some((e) => o.test(r, e));

function B(o, r) {
  return o.names === void 0 ? o : {
    test: o.test,
    names: K(o.names, r)
  }
}

function u(o, r, t) {
  if (Array.isArray(o)) return Array.prototype.some.call(o, (e) => u(e, r, t));
  if (Array.isArray(r)) return Array.prototype.some.call(r, (e) => u(o, e, t));
  if (typeof o !== "object" || o === null) return o === r || U(t.names, o, r);
  if (Gy(o)) {
    if (typeof r !== "object" || !r) return !1;
    for (let e of Object.keys(o))
      if (!Object.hasOwn(r, e) || !u(o[e], r[e], B(t, e))) return !1;
    return !0
  }
  return p(o) && (t.test(o, String(r)) || Y(t, o, r))
}

function Qan(o, r, t = "") {
  let e;
  if (Array.isArray(o)) return Array.prototype.some.call(o, (n) => (e = Qan(n, r, t), e !== void 0)), e;
  if (Array.isArray(r)) return Array.prototype.some.call(r, (n) => (e = Qan(o, n, t), e !== void 0)), e;
  if (!xIe(o)) return;
  if (r === null) return {
    path: t,
    kind: "null"
  };
  switch (typeof r) {
    case "string":
      return {
        path: t, kind: "string"
      };
    case "number":
      return {
        path: t, kind: "number"
      };
    case "boolean":
      return {
        path: t, kind: "boolean"
      };
    case "bigint":
      return {
        path: t, kind: "bigint"
      };
    case "object":
      break;
    case "undefined":
    case "symbol":
    case "function":
      return
  }
  for (let n of Object.keys(o)) {
    if (!Object.hasOwn(r, n)) continue;
    if (e = Qan(o[n], r[n], t === "" ? n : `${t}.${n}`), e !== void 0) return e
  }
  return
}

function iMo(o, r, t) {
  let e = t.path.split(".").at(-1) ?? t.path;
  return `hooks module ${o}: on('${r}') matcher at ${t.path} is a nested object, but e.${t.path} is a ${t.kind} there, which an object matcher can never match (a matcher has no operator keys); the hook will not run for it. A ${t.kind} is matched by the literal value or, as a string, by a RegExp, e.g. { ${e}: /^prefix/ }`
}
var aMo = 32;
var x = "$$regex";

function M(o, r, t) {
  if (Array.isArray(o)) return Array.prototype.map.call(o, (e, n) => M(e, r, `${t}[${n}]`));
  if (xIe(o)) {
    let e = t === "" ? "" : ` at ${t}`,
      n = o[x];
    if (typeof n === "string" && typeof o.flags === "string" && Object.keys(o).length === 2) return I({
      source: n,
      flags: o.flags,
      where: r,
      at: e
    }), new RegExp(n, o.flags);
    _(o, r, e);
    let a = {};
    for (let [O, Q] of Object.entries(o)) a[O] = M(Q, r, t === "" ? O : `${t}.${O}`);
    return a
  }
  return o
}

function h(o) {
  if (p(o)) {
    let {
      source: r,
      flags: t
    } = i(o);
    return {
      [x]: r,
      flags: t
    }
  }
  if (Array.isArray(o)) return Array.prototype.map.call(o, h);
  if (xIe(o)) {
    let r = {};
    for (let [t, e] of Object.entries(o)) r[t] = h(e);
    return r
  }
  return o
}
var lMo = (o) => o.map(({
  matcher: r,
  ...t
}) => r === void 0 ? t : {
  ...t,
  matcher: h(r)
});
var X = (o) => /\([^()]*[+*?}]\)\s*[+*{]/.test(o);
var w = (o) => o.includes("g") ? "g" : o.includes("y") ? "y" : void 0;

function I({
  source: o,
  flags: r,
  where: t,
  at: e
}) {
  let n = w(r);
  if (n) throw new Ie(`${t}: matcher${e} is a RegExp with the ${n} flag, which keeps state between tests; drop it`);
  if (X(o)) throw new Ie(`${t}: matcher${e} is a RegExp with a nested quantifier (${o}), which can backtrack without bound; rewrite it`)
}

function _(o, r, t) {
  if (Object.hasOwn(o, Yan)) throw new Ie(`${r}: matcher${t} has the key ${Yan}, which a matcher does not keep`)
}

function P(o, r, t) {
  let e = t === "" ? "" : ` at ${t}`;
  if (p(o)) {
    I({
      ...i(o),
      where: r,
      at: e
    });
    return
  }
  if (Array.isArray(o)) {
    Array.prototype.forEach.call(o, (n, s) => P(n, r, `${t}[${s}]`));
    return
  }
  if (xIe(o)) {
    if (Object.hasOwn(o, x)) throw new Ie(`${r}: matcher${e} uses the reserved key ${x} (how a RegExp crosses the worker boundary); a RegExp goes in as a RegExp`);
    _(o, r, e);
    for (let [n, s] of Object.entries(o)) P(s, r, t === "" ? n : `${t}.${n}`);
    return
  }
  switch (typeof o) {
    case "string":
      if (o.length > E) throw new Ie(`${r}: matcher${e} is a string longer than ${E} characters, which cannot match`);
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
      break
  }
  throw new Ie(`${r}: matcher${t===""?"":` at ${t}`} must be a string, a number, a boolean, null, a RegExp, an array of those, or a nested object; got ${Io(o)}`)
}

function ar(o, r) {
  if (r.length > E) return _d().log(`matcher: a value of ${r.length} characters is past the ${E} a RegExp matcher reads; it matches, so the hook decides`), !0;
  if (w(i(o).flags)) o.lastIndex = 0;
  return RegExp.prototype.exec.call(o, r) !== null
}

function wQs(o, r) {
  if (!xIe(o)) throw new Ie(`${r}: the matcher must be a plain object (a partial of e)`);
  P(o, r, "")
}
var vQs = (o, r = "matcher") => M(o, r, "");
var Ogt = (o, r, t) => u(o, r, {
  test: ar,
  names: t
});
var D4n = (o, r, t) => u(o, r, {
  test: () => !0,
  names: t
});
var R = (o, r, t) => Array.isArray(o) ? o.some((e) => R(e, r, t)) : !Gy(o) || !Object.hasOwn(o, r.field) || D4n(o[r.field], r.value, t);
var L4n = (o, r, t) => Object.entries(r).every(([e, n]) => R(o, {
  field: e,
  value: n
}, t && K(t, e)));
var Igt = (o, r, t) => R(o, {
  field: r,
  value: t
});
export {
  Yan,
  Vk,
  xgt,
  hQs,
  Ie,
  Xan,
  tMo,
  UBs,
  Jan,
  eDr,
  Zme,
  BBs,
  nMo,
  x4n,
  yQs,
  P4n,
  rMo,
  tDr,
  nDr,
  O4n,
  Pgt,
  AIe,
  I4n,
  _Qs,
  M4n,
  Gy,
  oMo,
  Lje,
  rDr,
  jBs,
  WBs,
  xIe,
  bQs,
  SQs,
  sMo,
  oDr,
  sDr,
  Qan,
  iMo,
  aMo,
  lMo,
  _d,
  Zan,
  wQs,
  vQs,
  Ogt,
  D4n,
  L4n,
  Igt,
  zBs
};
