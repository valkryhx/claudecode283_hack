// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  kWn
} from "B:/~BUN/root/chunk-5az22yft.js";
var i = void 0;

function l(e) {
  return e.startsWith(kWn) && !e.slice(kWn.length).includes("__") || i !== void 0 && e === i
}

function u(e) {
  let o = e.mcpInfo;
  if (o === void 0) return "unplaced";
  if (o.accountMemoryServer === !0) return "verified";
  let n = o.source ?? (o.serverType === "sdk" ? "sdk" : void 0);
  return n === void 0 || n === "sdk" ? "unplaced" : "other_server"
}

function s(e, o) {
  if (e === "verified" || o === "verified") return "verified";
  return e === "unplaced" || o === "unplaced" ? "unplaced" : "other_server"
}
var a = new WeakMap;

function d(e) {
  let o = a.get(e);
  if (o === void 0) {
    let n = new Map;
    for (let r of e) {
      let c = u(r);
      for (let t of [r.name, ...r.aliases ?? []]) n.set(t, s(n.get(t), c))
    }
    o = n, a.set(e, o)
  }
  return o
}

function mz(e) {
  let o = new Set;
  return (n) => {
    if (o.has(n)) return "verified";
    let r = e(),
      c = r === void 0 ? "unplaced" : d(r).get(n) ?? "unplaced";
    if (c === "verified") o.add(n);
    return c
  }
}

function pAr(e) {
  return (o) => e.has(o) ? "verified" : "unplaced"
}

function Lse(e, o, n) {
  switch (o?.(e)) {
    case "verified":
      return !0;
    case "other_server":
      return n === "history" && l(e);
    default:
      return l(e)
  }
}

function kNe(e) {
  return Lse(e.name, () => u(e), "live")
}
export {
  mz,
  pAr,
  Lse,
  kNe
};
