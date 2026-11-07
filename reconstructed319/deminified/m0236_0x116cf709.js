// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q, Wn } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { vqe, wta, ai } from "B:/~BUN/root/chunk-1g25msn4.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ct, Os } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Det, Zfe, ODs } from "B:/~BUN/root/chunk-97r06se6.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
var w = /\p{Default_Ignorable_Code_Point}/u,
  R = /\p{Cf}/u;
function T(n) {
  return n >= 8204 && n <= 8207 || n === 1564 || n >= 65024 && n <= 65039 || n >= 6155 && n <= 6159 || n === 10240;
}
function d(n, t) {
  return w.test(n) || n === "\u2028" || n === "\u2029" || n === "\u2800" || t >= 55296 && t <= 57343 || t === 1109742 || R.test(n);
}
function pbe(n) {
  for (let t of n) if (d(t, t.codePointAt(0) ?? 0)) return !0;
  return !1;
}
function M(n, t) {
  return d(n, t) && !T(t);
}
function b(n, t) {
  let e = "";
  for (let r of n) e += t(r, r.codePointAt(0) ?? 0) ? "\uFFFD" : r;
  return e;
}
function S(n, t) {
  let e = Array.from(n),
    r = "";
  for (let o = 0; o < e.length; o++) {
    let i = e[o] ?? "";
    r += t(i, i.codePointAt(0) ?? 0, e[o - 1]?.codePointAt(0) ?? Number.NaN, e[o + 1]?.codePointAt(0) ?? Number.NaN) ? "\uFFFD" : i;
  }
  return r;
}
function dc(n) {
  return ai(b(n, M));
}
function ggt(n) {
  return h(E(n));
}
function E(n) {
  return ai(b(n, d));
}
var JI = 2000,
  F = 253;
function KAr(n) {
  return F + (n.endsWith(".") && !n.endsWith("..") ? 1 : 0);
}
var aC = 200000;
function D(n, t = JI) {
  return Q(n, t) === n;
}
function US(n) {
  return n.includes(`
`) || ce(n) > 80;
}
function j$n(n) {
  let t = Q(n, JI),
    e = t.replace(/\t/g, " ");
  return t === n ? e : `${e}\u2026`;
}
function f(n) {
  return ce(n.replace(/[\uFE0E\uFE0F\u180B-\u180F\u2800]/gu, "").trim()) > 0;
}
function p(n) {
  return Array.from(n).filter(item => C(item)).join("");
}
function C(n) {
  return ce(n.replace(/[\uFE0E\uFE0F\u180B-\u180F]/gu, "")) > 0;
}
var VRs = 8,
  I = /\p{M}/u;
function KRs(n) {
  return I.test(n) || !C(n);
}
function jy(n) {
  let t = "",
    e = 0,
    r = !1;
  for (let o of n) {
    if (o === `
`) {
      if (r) t += "\uFFFD", r = !1;
      t += o, e = 0;
      continue;
    }
    if (!KRs(o)) {
      if (r) t += "\uFFFD", r = !1;
      t += o, e = 0;
      continue;
    }
    if (e < VRs) {
      t += o, e++;
      continue;
    }
    r = !0;
  }
  return r ? `${t}\uFFFD` : t;
}
function h(n) {
  return ai(jy(n));
}
function O(n) {
  let t = Array.from(n),
    e = 0,
    r = t.length;
  while (e < r && !f(t[e] ?? "")) e++;
  while (r > e && !f(t[r - 1] ?? "")) r--;
  return t.slice(e, r).join("");
}
function m(n, t) {
  let e = Array.from(O(n));
  return t === "end" ? e.at(-1) : e[0];
}
function A(n) {
  return m(n, "end") === "\u2026";
}
function Cqi(n) {
  let t = Array.from(n),
    e = t.length;
  for (;;) {
    let r = e;
    while (r > 0 && !f(t[r - 1] ?? "")) r--;
    if (r > 0 && t[r - 1] === "\u2026") {
      e = r - 1;
      continue;
    }
    break;
  }
  return t.slice(0, e).join("");
}
function Uee(n) {
  let t = [],
    e = !1;
  for (let r of Array.from(n)) {
    if (r !== `
` && !f(r)) {
      e = !0;
      continue;
    }
    if (r === "\uFFFD" && e) {
      e = !1;
      continue;
    }
    e = !1, t.push(r);
  }
  return f(t.join(""));
}
function L(n) {
  return /^[A-Za-z_$][\w$]*$/.test(n);
}
function $Qe(n) {
  return ggt(n);
}
function grn(n) {
  return h(ai(S(n, (t, e, r, o) => {
    if (e === 65038 || e === 65039) return !(r > 127 || o === 8419);
    if (e === 8204 || e === 8205) return !(r > 127 && o > 127);
    if (e >= 6155 && e <= 6159) return !(r > 127);
    return d(t, e);
  })));
}
function Fv(n) {
  if (n === void 0) return !1;
  let t = ggt(n).replace(/\uFFFD/g, "").replace(/\s+/g, " ").trim();
  return t !== "" && ce(t) > 0;
}
var ygt = 48,
  GF = 256;
function aRe(n) {
  let t = $Qe(Q(n, GF)),
    e = t.replace(/\s+/g, " ").trim();
  return ct(qAr(e, t, n.length > GF), ygt);
}
function qAr(n, t, e = !1) {
  let r = m(n, "start") === '"' || m(n, "end") === '"' || A(n);
  return n === t && !r && !e ? n : _(t);
}
function N(n) {
  let t = $Qe(Q(n, GF)),
    e = t.replace(/\s+/g, " ").trim();
  return qAr(e, t, n.length > GF);
}
function lfe(n) {
  return Q(n, GF) === n;
}
function lRe(n, t) {
  let e = new Map(),
    r = s => t(s).normalize("NFC");
  for (let s of n) {
    let a = r(s),
      u = e.get(a) ?? new Set();
    u.add(s), e.set(a, u);
  }
  let o = s => _(Q(s, JI)).replace(/[\u007f-\uffff]/g, a => `\\u${a.charCodeAt(0).toString(16).padStart(4, "0")}`) + (s.length > JI ? "\u2026" : ""),
    i = new Map();
  return n.map(item => {
    let a = r(item);
    if ((e.get(a)?.size ?? 0) <= 1) return t(item);
    let u = o(item),
      l = i.get(u) ?? new Map();
    i.set(u, l);
    let c = l.get(item) ?? l.size + 1;
    return l.set(item, c), c > 1 ? `${u} (#${c})` : u;
  });
}
function W$n(n) {
  let t = new Map();
  for (let i of n) t.set(i, L(i) ? i : _(ggt(i)));
  let e = new Map();
  for (let i of t.values()) e.set(i, (e.get(i) ?? 0) + 1);
  let r = z(n),
    o = new Map();
  for (let i of n) {
    let s = t.get(i) ?? "",
      a = (e.get(s) ?? 0) > 1 || r.has(i.normalize("NFC"));
    o.set(i, a ? _(i).replace(/[\u007f-\uffff]/g, u => `\\u${u.charCodeAt(0).toString(16).padStart(4, "0")}`) : s);
  }
  return o;
}
function z(n) {
  let t = new Map(),
    e = new Set();
  for (let r of n) {
    let o = r.normalize("NFC"),
      i = t.get(o);
    if (i !== void 0 && i !== r) e.add(o);else t.set(o, r);
  }
  return e;
}
function _R(n) {
  return typeof n === "string" && ZFt(n) ? "" : String(dfe(n));
}
function dfe(n) {
  let t = typeof n === "string" && !ZFt(n) ? n : Det;
  return Zfe(aRe(t));
}
function ZFt(n) {
  return n === "" || ce(Q(n, GF)) === 0;
}
function P(n) {
  return n.replace(/_+/g, " ").trim().replace(/\b\w/g, t => t.toUpperCase());
}
function YAr(n) {
  let t = Q((n.scope === "claudeai" ? n.displayName : void 0) ?? "", GF),
    e = Q(n.title ?? "", GF),
    r = grn(Q(n.serverName, GF)),
    o = Fv(t) ? grn(t) : Uee(r) ? r : "(unnamed server)",
    i = Q(n.toolName, GF),
    s = $Qe(P(i)),
    a = $Qe(i),
    u = Fv(e) ? grn(e) : Uee(s) ? s : Uee(a) ? a : "(unnamed tool)";
  return Zfe(ct(`${o} \u2014 ${u}`.replace(/\s+/g, " ").trim(), ygt));
}
function XAr(n) {
  return Zfe(v2e(n, "(unnamed tool)"));
}
function v2e(n, t) {
  let e = aRe(n);
  return Uee(e) ? e : t;
}
function Ki(n) {
  if (typeof n !== "string") return {
    text: Zfe(""),
    needsGutter: !1
  };
  let t = h(dc(j$n(n)));
  return {
    text: Zfe(t),
    needsGutter: US(t)
  };
}
function HX(n) {
  if (typeof n !== "string") return null;
  if (!lfe(n) || n.trim() === "" || ce(n) === 0) return null;
  if (jy(n) !== n) return null;
  return {
    display: Zfe(N(n))
  };
}
var g = "(value cannot be shown in full \u2014 approval withheld; one-time options only)",
  B = 1e4,
  U = 64;
function x(n, t, e = 0) {
  if (typeof n === "string") {
    if (n.length + 2 > t.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let i = _(n);
    if (t.unitsRemaining -= i.length, t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return i;
  }
  if (typeof n === "number") {
    let i = Number.isFinite(n) ? String(n) : "null";
    if (t.unitsRemaining -= i.length, t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return i;
  }
  if (typeof n === "boolean" || n === null) {
    if (t.unitsRemaining -= String(n).length, t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return String(n);
  }
  if (typeof n === "bigint") throw Error("bigint payload cannot be serialized");
  if (typeof n !== "object") return;
  if (e >= U) throw Error("payload exceeds the serialization depth wall");
  if (Array.isArray(n)) {
    let i = n.length;
    if (typeof i !== "number" || !Number.isSafeInteger(i) || i < 0) throw Error("payload length is not an honest array length");
    if (t.elementsRemaining -= i, t.elementsRemaining < 0) throw Error("payload exceeds the element serialization wall");
    if (t.unitsRemaining -= 2 + (i > 0 ? i - 1 : 0), t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    let s = [];
    for (let a = 0; a < i; a++) {
      let u = x(n[a], t, e + 1);
      if (u === void 0) {
        if (t.unitsRemaining -= 4, t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
        s.push("null");
      } else s.push(u);
    }
    return `[${s.join(",")}]`;
  }
  let r = Object.entries(n);
  if (t.elementsRemaining -= r.length, t.elementsRemaining < 0) throw Error("payload exceeds the element serialization wall");
  if (t.unitsRemaining -= 2, t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
  let o = [];
  for (let [i, s] of r) {
    let a = x(s, t, e + 1);
    if (a === void 0) continue;
    if (i.length + 2 > t.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let u = _(i);
    if (t.unitsRemaining -= u.length + 1 + (o.length > 0 ? 1 : 0), t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    o.push(`${u}:${a}`);
  }
  return `{${o.join(",")}}`;
}
function Sbo(n, unitsRemaining = JI, elementsRemaining = B) {
  try {
    return x(n, {
      unitsRemaining: unitsRemaining,
      elementsRemaining: elementsRemaining
    });
  } catch {
    return;
  }
}
function Eg(n, t) {
  let e = typeof n === "string" ? n : Sbo(n, t?.maxUnits);
  if (e === void 0) return {
    kind: "withheld",
    marker: Zfe(g)
  };
  if (!D(e, t?.maxUnits)) return {
    kind: "withheld",
    marker: Zfe(g)
  };
  let r = t?.softWrap ? wta(e) : e,
    o = (t?.scrub === "key" ? E(r) : dc(r)).replace(/\t/g, " "),
    i = t?.softWrap ? o.replaceAll(`
`, "") : o;
  if (vqe.test(i)) return {
    kind: "withheld",
    marker: Zfe(g)
  };
  if (jy(o) !== o) return {
    kind: "withheld",
    marker: Zfe(g)
  };
  return {
    kind: "full",
    text: Zfe(o),
    needsGutter: US(o)
  };
}
function hU(n) {
  let t = dc(n);
  return vqe.test(t) || k(t);
}
function Rqi(n) {
  return k(dc(n));
}
function k(n) {
  return jy(n) !== n;
}
function eHt(n) {
  let t = $Qe(Q(n, GF)),
    e = t.replace(/\s+/g, " ").trim();
  return qAr(e, t, e.includes(",") || e.includes(";") || p(e).includes(" and ") || p(e).startsWith("and ") || p(e).endsWith(" and") || n.length > GF || jy(Q(n, GF)) !== Q(n, GF));
}
function $1(n, t = N) {
  return lRe(n, t).map(item => Zfe(item));
}
function ma(n) {
  return n.replace(/[\n\r\u2028\u2029]/g, "\uFFFD");
}
function Aqi(n, t) {
  let e = n.map(item => Eg(item, t)),
    r = new Map();
  n.forEach((item, index) => {
    let y = e[index];
    if (y.kind === "full" && !r.has(item)) r.set(item, ma(y.text).replace(/\s+/g, " ").trim());
  });
  let o = n.filter((item, index) => e[index].kind === "full"),
    i = $1(o, l => r.get(l) ?? ""),
    s = [],
    a = 0,
    u = 0;
  for (let l of e) if (l.kind === "full") s.push({
    text: String(i[a++]),
    withheld: !1
  });else u += 1, s.push({
    text: `${l.marker} (#${u})`,
    withheld: !0
  });
  return s;
}
function tHt(n) {
  if (typeof n !== "string") return ODs("");
  return ODs(dc(n));
}
function s4(n) {
  if (typeof n !== "string") return null;
  let t = grn(Q(n, GF)).replace(/\t/g, " ");
  if (!Uee(Wn(t))) return null;
  if (A(Wn(t))) return null;
  return Zfe(Os(t, 24, !0));
}
function xqi(n, ...t) {
  let e = n[0] ?? "";
  for (let r = 0; r < t.length; r++) e += t[r] ?? "", e += n[r + 1] ?? "";
  return Zfe(e);
}
export { pbe, dc, ggt, JI, KAr, aC, US, j$n, VRs, KRs, jy, Cqi, Uee, $Qe, grn, Fv, ygt, GF, aRe, qAr, lfe, lRe, W$n, _R, dfe, ZFt, YAr, XAr, v2e, Ki, HX, Sbo, Eg, hU, Rqi, eHt, $1, ma, Aqi, tHt, s4, xqi };