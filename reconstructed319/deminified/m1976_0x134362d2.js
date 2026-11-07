// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P, Oi, oc } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { LVn } from "B:/~BUN/root/chunk-09sn55yf.js";
import { o4e, Oae } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { rN, M4, AO } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { v, rn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { randomInt as J } from "crypto";
function $ti() {
  return v("tengu_harbor_permissions", !1);
}
function q() {
  return rn("tengu_quiet_elephant", !0);
}
var k = "abcdefghijkmnopqrstuvwxyz",
  G = ["fuck", "shit", "cunt", "cock", "dick", "twat", "piss", "crap", "bitch", "whore", "ass", "tit", "cum", "fag", "dyke", "nig", "kike", "rape", "nazi", "damn", "poo", "pee", "wank", "anus"];
function N(n) {
  let e = 2166136261;
  for (let r = 0; r < n.length; r++) e ^= n.charCodeAt(r), e = Math.imul(e, 16777619);
  e = e >>> 0;
  let o = "";
  for (let r = 0; r < 5; r++) o += k[e % 25], e = Math.floor(e / 25);
  return o;
}
function Uti(n) {
  if (!q()) return K(n);
  let e = "";
  for (let o = 0; o <= 10; o++) {
    e = "";
    for (let r = 0; r < 5; r++) e += k[J(k.length)];
    if (!G.some(item => e.includes(item))) return e;
  }
  return e;
}
function K(n) {
  let e = N(n);
  for (let o = 0; o < 10; o++) {
    if (!G.some(item => e.includes(item))) return e;
    e = N(`${n}:${o}`);
  }
  return e;
}
var V = 3500,
  E = 2000,
  w = 1500,
  L = 15000,
  z = 30000;
function jyn(n) {
  return B(f(n).replace(/\s+/g, " ").trim());
}
function B(n) {
  let e = Array.from(n);
  if (e.length <= V) return n;
  let o = e.length - E - w;
  return e.slice(0, E).join("") + `
\u22EF ${o} ${P(o, "code point")} elided \u22EF
` + e.slice(e.length - w).join("");
}
function f(n) {
  return Array.from(oc(n), e => AO(e.codePointAt(0) ?? 0) ? " " : e).join("").replace(rN, "\xB7").replace(U, "\xB7").replace(regExp, "\xB7").replace(M4, " ");
}
var U = /[\u2018\u2019\u201A\u201B\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C0\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]/g,
  W = new Set(["\u1433", "\u1438", "\u16B2", "\uD81B\uDF3F", "\u2039", "\u203A"]),
  regExp = new RegExp(`[${[...LVn.keys()].filter(item => !W.has(item)).join("")}]`, "gu");
function I(n) {
  return T(_(n)).replace(/\s/g, " ");
}
function R(n, e, o) {
  let r = n,
    s = I(n);
  if (e.has(s)) {
    let i = s,
      l = o.get(i) ?? 2;
    r = `${n}#${l}`, s = I(r);
    while (e.has(s)) l++, r = `${n}#${l}`, s = I(r);
    o.set(i, l + 1);
  }
  return e.add(s), r;
}
function S(n) {
  if (Array.isArray(n)) return n.map(S);
  if (n !== null && typeof n === "object") {
    let e = Object.create(null),
      o = new Set(),
      r = new Map();
    for (let [s, i] of Object.entries(n)) e[R(o4e(s), o, r)] = S(i);
    return e;
  }
  return n;
}
var Q = 32000,
  X = 2000000;
function M(node) {
  if (node === null || typeof node !== "object") return !1;
  let e = X,
    o = [{
      node: node,
      depth: 1
    }];
  while (o.length > 0) {
    let r = o.pop(),
      {
        depth: depth,
        node: node_2
      } = r;
    if (depth >= Q) return !0;
    if (typeof node_2.toJSON === "function") {
      if (e -= 1, e < 0) return !0;
      let u;
      try {
        u = node_2.toJSON();
      } catch {
        return !0;
      }
      if (u === null || typeof u !== "object") continue;
      node_2 = u;
    }
    if (Array.isArray(node_2)) {
      if (e -= node_2.length, e < 0) return !0;
    }
    for (let u of Object.keys(node_2)) {
      if (e -= 1, e < 0) return !0;
      let node_3 = node_2[u];
      if (node_3 !== null && typeof node_3 === "object") o.push({
        node: node_3,
        depth: depth + 1
      });
    }
  }
  return !1;
}
function Bti(n) {
  try {
    if (n !== null && typeof n === "object" && !Array.isArray(n)) {
      let s = [],
        i = 0,
        l = [],
        u = new Set(),
        p = new Map();
      for (let g of Object.keys(n)) {
        let h,
          m,
          y = !1;
        try {
          if (h = n[g], M(h)) y = !0;else m = _(h);
        } catch {
          y = !0;
        }
        if (m === void 0) {
          if (!y) continue;
          let F = R(o4e(g), u, p);
          t("truncateForPreview: field serialization threw (depth) \u2014 rendering a loud unserializable marker", {
            level: "error"
          });
          let b = f(_(F)).replace(/\s+/g, " "),
            A = Oi(b, 50),
            D = A.length < b.length ? A + "\u2026" : A;
          if (i >= L) {
            l.push(D);
            continue;
          }
          let j = `${D}: (value unserializable)`;
          i += Array.from(j).length, s.push(j);
          continue;
        }
        let d = R(o4e(g), u, p);
        if (i >= L) {
          let F = f(_(d)).replace(/\s+/g, " "),
            b = Oi(F, 50);
          l.push(b.length < F.length ? b + "\u2026" : b);
          continue;
        }
        let c,
          x = !1;
        try {
          c = _(S(Oae({
            [g]: ee(m)
          }, o4e)[g]));
        } catch {
          x = !0;
        }
        if (c === void 0) if (x) t(`truncateForPreview: redaction round-trip threw for field ${_(d)} \u2014 rendering unredacted`, {
          level: "error"
        });else t(`truncateForPreview: redaction round-trip yielded no text for field ${_(d)} \u2014 rendering unredacted`, {
          level: "error"
        }), a(Error("truncateForPreview: redaction round-trip yielded no text for a field \u2014 rendering unredacted"));
        let H = c === void 0 ? m : c,
          O = `${T(_(d))}: ${T(H)}`;
        i += Array.from(O).length, s.push(O);
      }
      let C = "";
      if (l.length > 0) {
        let h = Math.floor(z / 10);
        if (l.length <= h) {
          let m = Math.max(8, Math.floor(z / l.length) - 2),
            y = l.map(item => {
              let c = Oi(item, m);
              return c.length < item.length ? c + "\u2026" : c;
            });
          C = `
\u22EF ${l.length} ${P(l.length, "field")} elided: ${y.join(", ")} \u22EF
`;
        } else C = `
\u22EF ${l.length} ${P(l.length, "field")} elided (count exceeds the ${h}-name bound \u2014 refuse) \u22EF
`;
      }
      return `{ ${s.join(", ")} }${C}`;
    }
    let e;
    try {
      if (M(n)) return t("truncateForPreview: non-object input exceeds the serialization depth probe \u2014 rendering a loud unserializable marker", {
        level: "error"
      }), "(value unserializable)";
      e = _(n);
    } catch {
      return t("truncateForPreview: non-object input serialization threw \u2014 rendering a loud unserializable marker", {
        level: "error"
      }), "(value unserializable)";
    }
    if (e === void 0) return "(unserializable)";
    let o,
      r = !1;
    try {
      o = _(S(Oae(ee(e), o4e)));
    } catch {
      r = !0;
    }
    if (o === void 0) {
      if (r) t("truncateForPreview: non-object redaction round-trip threw \u2014 rendering unredacted", {
        level: "error"
      });else t("truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted", {
        level: "error"
      }), a(Error("truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted"));
      o = e;
    }
    return B(f(o).replace(/\s{2,}/g, " "));
  } catch {
    return "(unserializable)";
  }
}
function T(n) {
  if (n.length <= 1e5) return B(f(n).replace(/\s{2,}/g, " "));
  let e = 0;
  for (let l of n) e++;
  let o = f(Oi(n.slice(0, E * 2 + 1), E)).replace(/\s{2,}/g, " "),
    r = Array.from(oc(n.slice(-(w * 2 + 1)))),
    s = f(r.slice(-w).join("")).replace(/\s{2,}/g, " "),
    i = e - E - w;
  return o + `
\u22EF ${i} ${P(i, "code point")} elided \u22EF
` + s;
}
function QVt(n, e) {
  return !!n?.experimental?.[e];
}
function jti(n, e, o) {
  return n.filter(item => item.type === "connected" && e(item.name) && QVt(item.capabilities, "claude/channel") && QVt(item.capabilities, "claude/channel/permission") && o(item.name) && item.protocolEra !== "modern");
}
function Wti(isServerRegistered) {
  let e = new Map(),
    o = new Set();
  return {
    isServerRegistered: isServerRegistered,
    onResponse(r, s) {
      let i = r.toLowerCase();
      if (q()) {
        if (o.has(i)) return e.delete(i), t("Channel permission relay: a request ID was drawn twice in one session; channel replies with that ID are ignored \u2014 answer in the terminal", {
          level: "warn"
        }), () => {};
        o.add(i);
      }
      return e.set(i, s), () => {
        e.delete(i);
      };
    },
    resolve(r, behavior, fromServer) {
      let l = r.toLowerCase(),
        u = e.get(l);
      if (!u) return !1;
      return e.delete(l), u({
        behavior: behavior,
        fromServer: fromServer
      }), !0;
    }
  };
}
export { $ti, Uti, jyn, Bti, QVt, jti, Wti };