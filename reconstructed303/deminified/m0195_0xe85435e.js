// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, Sr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { G0e, M4s, di } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { mt, es } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { HWe, RJ, VLo } from "B:/~BUN/root/chunk-f2a36mfn.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
var R = /\p{Default_Ignorable_Code_Point}/u,
  T = /\p{Cf}/u;
function M(n) {
  return n >= 8204 && n <= 8207 || n === 1564 || n >= 65024 && n <= 65039 || n >= 6155 && n <= 6159 || n === 10240;
}
function p(n, t) {
  return R.test(n) || n === "\u2028" || n === "\u2029" || n === "\u2800" || t >= 55296 && t <= 57343 || t === 1109742 || T.test(n);
}
function GX(n) {
  for (let t of n) if (p(t, t.codePointAt(0) ?? 0)) return !0;
  return !1;
}
function S(n, t) {
  return p(n, t) && !M(t);
}
function E(n, t) {
  let e = "";
  for (let r of n) e += t(r, r.codePointAt(0) ?? 0) ? "\uFFFD" : r;
  return e;
}
function F(n, t) {
  let e = Array.from(n),
    r = "";
  for (let o = 0; o < e.length; o++) {
    let i = e[o] ?? "";
    r += t(i, i.codePointAt(0) ?? 0, e[o - 1]?.codePointAt(0) ?? Number.NaN, e[o + 1]?.codePointAt(0) ?? Number.NaN) ? "\uFFFD" : i;
  }
  return r;
}
function Md(n) {
  return di(E(n, S));
}
function wXe(n) {
  return y(C(n));
}
function C(n) {
  return di(E(n, p));
}
var UK = 2000,
  D = 253;
function IKn(n) {
  return D + (n.endsWith(".") && !n.endsWith("..") ? 1 : 0);
}
var sv = 200000;
function I(n, t = UK) {
  return ne(n, t) === n;
}
function NS(n) {
  return n.includes(`
`) || ie(n) > 80;
}
function nan(n) {
  let t = ne(n, UK),
    e = t.replace(/\t/g, " ");
  return t === n ? e : `${e}\u2026`;
}
function g(n) {
  return ie(n.replace(/[\uFE0E\uFE0F\u180B-\u180F\u2800]/gu, "").trim()) > 0;
}
function m(n) {
  return Array.from(n).filter(item => k(item)).join("");
}
function k(n) {
  return ie(n.replace(/[\uFE0E\uFE0F\u180B-\u180F]/gu, "")) > 0;
}
var O = 8,
  L = /\p{M}/u;
function EOo(n) {
  return L.test(n) || !k(n);
}
function hh(n) {
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
    if (!EOo(o)) {
      if (r) t += "\uFFFD", r = !1;
      t += o, e = 0;
      continue;
    }
    if (e < O) {
      t += o, e++;
      continue;
    }
    r = !0;
  }
  return r ? `${t}\uFFFD` : t;
}
function y(n) {
  return di(hh(n));
}
function z(n) {
  let t = Array.from(n),
    e = 0,
    r = t.length;
  while (e < r && !g(t[e] ?? "")) e++;
  while (r > e && !g(t[r - 1] ?? "")) r--;
  return t.slice(e, r).join("");
}
function x(n, t) {
  let e = Array.from(z(n));
  return t === "end" ? e.at(-1) : e[0];
}
function A(n) {
  return x(n, "end") === "\u2026";
}
function TUs(n) {
  let t = Array.from(n),
    e = t.length;
  for (;;) {
    let r = e;
    while (r > 0 && !g(t[r - 1] ?? "")) r--;
    if (r > 0 && t[r - 1] === "\u2026") {
      e = r - 1;
      continue;
    }
    break;
  }
  return t.slice(0, e).join("");
}
function N3(n) {
  let t = [],
    e = !1;
  for (let r of Array.from(n)) {
    if (r !== `
` && !g(r)) {
      e = !0;
      continue;
    }
    if (r === "\uFFFD" && e) {
      e = !1;
      continue;
    }
    e = !1, t.push(r);
  }
  return g(t.join(""));
}
function P(n) {
  return /^[A-Za-z_$][\w$]*$/.test(n);
}
function gje(n) {
  return wXe(n);
}
function d(n) {
  return y(di(F(n, (t, e, r, o) => {
    if (e === 65038 || e === 65039) return !(r > 127 || o === 8419);
    if (e === 8204 || e === 8205) return !(r > 127 && o > 127);
    if (e >= 6155 && e <= 6159) return !(r > 127);
    return p(t, e);
  })));
}
function jN(n) {
  if (n === void 0) return !1;
  let t = wXe(n).replace(/\uFFFD/g, "").replace(/\s+/g, " ").trim();
  return t !== "" && ie(t) > 0;
}
var vXe = 48,
  $H = 256;
function $me(n) {
  let t = gje(ne(n, $H)),
    e = t.replace(/\s+/g, " ").trim();
  return mt(MKn(e, t, n.length > $H), vXe);
}
function MKn(n, t, e = !1) {
  let r = x(n, "start") === '"' || x(n, "end") === '"' || A(n);
  return n === t && !r && !e ? n : _(t);
}
function N(n) {
  let t = gje(ne(n, $H)),
    e = t.replace(/\s+/g, " ").trim();
  return MKn(e, t, n.length > $H);
}
function Lke(n) {
  return ne(n, $H) === n;
}
function hje(n, t) {
  let e = new Map(),
    r = s => t(s).normalize("NFC");
  for (let s of n) {
    let a = r(s),
      u = e.get(a) ?? new Set();
    u.add(s), e.set(a, u);
  }
  let o = s => _(ne(s, UK)).replace(/[\u007f-\uffff]/g, a => `\\u${a.charCodeAt(0).toString(16).padStart(4, "0")}`) + (s.length > UK ? "\u2026" : ""),
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
function ran(n) {
  let t = new Map();
  for (let i of n) t.set(i, P(i) ? i : _(wXe(i)));
  let e = new Map();
  for (let i of t.values()) e.set(i, (e.get(i) ?? 0) + 1);
  let r = B(n),
    o = new Map();
  for (let i of n) {
    let s = t.get(i) ?? "",
      a = (e.get(s) ?? 0) > 1 || r.has(i.normalize("NFC"));
    o.set(i, a ? _(i).replace(/[\u007f-\uffff]/g, u => `\\u${u.charCodeAt(0).toString(16).padStart(4, "0")}`) : s);
  }
  return o;
}
function B(n) {
  let t = new Map(),
    e = new Set();
  for (let r of n) {
    let o = r.normalize("NFC"),
      i = t.get(o);
    if (i !== void 0 && i !== r) e.add(o);else t.set(o, r);
  }
  return e;
}
function zk(n) {
  return typeof n === "string" && ngt(n) ? "" : String(ate(n));
}
function ate(n) {
  let t = typeof n === "string" && !ngt(n) ? n : HWe;
  return RJ($me(t));
}
function ngt(n) {
  return n === "" || ie(ne(n, $H)) === 0;
}
function U(n) {
  return n.replace(/_+/g, " ").trim().replace(/\b\w/g, t => t.toUpperCase());
}
function DKn(n) {
  let t = ne((n.scope === "claudeai" ? n.displayName : void 0) ?? "", $H),
    e = ne(n.title ?? "", $H),
    r = d(ne(n.serverName, $H)),
    o = jN(t) ? d(t) : N3(r) ? r : "(unnamed server)",
    i = ne(n.toolName, $H),
    s = gje(U(i)),
    a = gje(i),
    u = jN(e) ? d(e) : N3(s) ? s : N3(a) ? a : "(unnamed tool)";
  return RJ(mt(`${o} \u2014 ${u}`.replace(/\s+/g, " ").trim(), vXe));
}
function LKn(n) {
  return RJ(hIe(n, "(unnamed tool)"));
}
function hIe(n, t) {
  let e = $me(n);
  return N3(e) ? e : t;
}
function Xi(n) {
  if (typeof n !== "string") return {
    text: RJ(""),
    needsGutter: !1
  };
  let t = y(Md(nan(n)));
  return {
    text: RJ(t),
    needsGutter: NS(t)
  };
}
function F3(n) {
  if (typeof n !== "string") return null;
  if (!Lke(n) || n.trim() === "" || ie(n) === 0) return null;
  if (hh(n) !== n) return null;
  return {
    display: RJ(N(n))
  };
}
var f = "(value cannot be shown in full \u2014 approval withheld; one-time options only)",
  elementsRemaining = 1e4,
  j = 64;
function h(n, t, e = 0) {
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
  if (e >= j) throw Error("payload exceeds the serialization depth wall");
  if (Array.isArray(n)) {
    let i = n.length;
    if (typeof i !== "number" || !Number.isSafeInteger(i) || i < 0) throw Error("payload length is not an honest array length");
    if (t.elementsRemaining -= i, t.elementsRemaining < 0) throw Error("payload exceeds the element serialization wall");
    if (t.unitsRemaining -= 2 + (i > 0 ? i - 1 : 0), t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    let s = [];
    for (let a = 0; a < i; a++) {
      let u = h(n[a], t, e + 1);
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
    let a = h(s, t, e + 1);
    if (a === void 0) continue;
    if (i.length + 2 > t.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let u = _(i);
    if (t.unitsRemaining -= u.length + 1 + (o.length > 0 ? 1 : 0), t.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    o.push(`${u}:${a}`);
  }
  return `{${o.join(",")}}`;
}
function iv(n, t) {
  let e;
  if (typeof n === "string") e = n;else try {
    let s = h(n, {
      unitsRemaining: t?.maxUnits ?? UK,
      elementsRemaining: elementsRemaining
    });
    if (s === void 0) return {
      kind: "withheld",
      marker: RJ(f)
    };
    e = s;
  } catch {
    return {
      kind: "withheld",
      marker: RJ(f)
    };
  }
  if (!I(e, t?.maxUnits)) return {
    kind: "withheld",
    marker: RJ(f)
  };
  let r = t?.softWrap ? M4s(e) : e,
    o = (t?.scrub === "key" ? C(r) : Md(r)).replace(/\t/g, " "),
    i = t?.softWrap ? o.replaceAll(`
`, "") : o;
  if (G0e.test(i)) return {
    kind: "withheld",
    marker: RJ(f)
  };
  if (hh(o) !== o) return {
    kind: "withheld",
    marker: RJ(f)
  };
  return {
    kind: "full",
    text: RJ(o),
    needsGutter: NS(o)
  };
}
function WN(n) {
  let t = Md(n);
  return G0e.test(t) || w(t);
}
function CUs(n) {
  return w(Md(n));
}
function w(n) {
  return hh(n) !== n;
}
function xMr(n) {
  let t = gje(ne(n, $H)),
    e = t.replace(/\s+/g, " ").trim();
  return MKn(e, t, e.includes(",") || e.includes(";") || m(e).includes(" and ") || m(e).startsWith("and ") || m(e).endsWith(" and") || n.length > $H || hh(ne(n, $H)) !== ne(n, $H));
}
function Jj(n, t = N) {
  return hje(n, t).map(item => RJ(item));
}
function Wi(n) {
  return n.replace(/[\n\r\u2028\u2029]/g, "\uFFFD");
}
function oan(n, t) {
  let e = n.map(item => iv(item, t)),
    r = new Map();
  n.forEach((item, index) => {
    let b = e[index];
    if (b.kind === "full" && !r.has(item)) r.set(item, Wi(b.text).replace(/\s+/g, " ").trim());
  });
  let o = n.filter((item, index) => e[index].kind === "full"),
    i = Jj(o, l => r.get(l) ?? ""),
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
function rgt(n) {
  if (typeof n !== "string") return VLo("");
  return VLo(Md(n));
}
function Ume(n) {
  if (typeof n !== "string") return null;
  let t = d(ne(n, $H)).replace(/\t/g, " ");
  if (!N3(Sr(t))) return null;
  if (A(Sr(t))) return null;
  return RJ(es(t, 24, !0));
}
function RUs(n, ...t) {
  let e = n[0] ?? "";
  for (let r = 0; r < t.length; r++) e += t[r] ?? "", e += n[r + 1] ?? "";
  return RJ(e);
}
export { GX, Md, wXe, UK, IKn, sv, NS, nan, EOo, hh, TUs, N3, gje, jN, vXe, $H, $me, MKn, Lke, hje, ran, zk, ate, ngt, DKn, LKn, hIe, Xi, F3, iv, WN, CUs, xMr, Jj, Wi, oan, rgt, Ume, RUs };