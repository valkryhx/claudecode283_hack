// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  _,
  J,
  CDe,
  vQ,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  O,
  qs,
  Up
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  qM,
  SW,
  yA
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  E,
  ir
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  randomInt as K
} from "crypto";

function A7o() {
  return E("tengu_harbor_permissions", !1)
}

function q() {
  return ir("tengu_quiet_elephant", !0)
}
var A = "abcdefghijkmnopqrstuvwxyz",
  H = ["fuck", "shit", "cunt", "cock", "dick", "twat", "piss", "crap", "bitch", "whore", "ass", "tit", "cum", "fag", "dyke", "nig", "kike", "rape", "nazi", "damn", "poo", "pee", "wank", "anus"];

function N(n) {
  let e = 2166136261;
  for (let r = 0; r < n.length; r++) e ^= n.charCodeAt(r), e = Math.imul(e, 16777619);
  e = e >>> 0;
  let o = "";
  for (let r = 0; r < 5; r++) o += A[e % 25], e = Math.floor(e / 25);
  return o
}

function x7o(n) {
  if (!q()) return U(n);
  let e = "";
  for (let o = 0; o <= 10; o++) {
    e = "";
    for (let r = 0; r < 5; r++) e += A[K(A.length)];
    if (!H.some((r) => e.includes(r))) return e
  }
  return e
}

function U(n) {
  let e = N(n);
  for (let o = 0; o < 10; o++) {
    if (!H.some((r) => e.includes(r))) return e;
    e = N(`${n}:${o}`)
  }
  return e
}
var V = 3500,
  w = 2000,
  F = 1500,
  L = 15000,
  z = 30000;

function jqt(n) {
  return v(f(n).replace(/\s+/g, " ").trim())
}

function v(n) {
  let e = Array.from(n);
  if (e.length <= V) return n;
  let o = e.length - w - F;
  return e.slice(0, w).join("") + `
\u22EF ${o} ${O(o,"code point")} elided \u22EF
` + e.slice(e.length - F).join("")
}

function f(n) {
  return Array.from(Up(n), (e) => yA(e.codePointAt(0) ?? 0) ? " " : e).join("").replace(qM, "\xB7").replace(W, "\xB7").replace(Y, "\xB7").replace(SW, " ")
}
var W = /[\u2018\u2019\u201A\u201B\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C0\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]/g,
  Y = /[\u02C2\u02C3\uFE64\uFE65\uFF1C\uFF1E]/g;

function k(n) {
  return T(_(n)).replace(/\s/g, " ")
}

function B(n, e, o) {
  let r = n,
    s = k(n);
  if (e.has(s)) {
    let i = s,
      a = o.get(i) ?? 2;
    r = `${n}#${a}`, s = k(r);
    while (e.has(s)) a++, r = `${n}#${a}`, s = k(r);
    o.set(i, a + 1)
  }
  return e.add(s), r
}

function S(n) {
  if (Array.isArray(n)) return n.map(S);
  if (n !== null && typeof n === "object") {
    let e = Object.create(null),
      o = new Set,
      r = new Map;
    for (let [s, i] of Object.entries(n)) e[B(CDe(s), o, r)] = S(i);
    return e
  }
  return n
}
var Q = 32000,
  Z = 2000000;

function M(n) {
  if (n === null || typeof n !== "object") return !1;
  let e = Z,
    o = [{
      node: n,
      depth: 1
    }];
  while (o.length > 0) {
    let r = o.pop(),
      {
        depth: s,
        node: i
      } = r;
    if (s >= Q) return !0;
    if (typeof i.toJSON === "function") {
      if (e -= 1, e < 0) return !0;
      let u;
      try {
        u = i.toJSON()
      } catch {
        return !0
      }
      if (u === null || typeof u !== "object") continue;
      i = u
    }
    if (Array.isArray(i)) {
      if (e -= i.length, e < 0) return !0
    }
    for (let u of Object.keys(i)) {
      if (e -= 1, e < 0) return !0;
      let p = i[u];
      if (p !== null && typeof p === "object") o.push({
        node: p,
        depth: s + 1
      })
    }
  }
  return !1
}

function P7o(n) {
  try {
    if (n !== null && typeof n === "object" && !Array.isArray(n)) {
      let s = [],
        i = 0,
        a = [],
        u = new Set,
        p = new Map;
      for (let g of Object.keys(n)) {
        let h, m, y = !1;
        try {
          if (h = n[g], M(h)) y = !0;
          else m = _(h)
        } catch {
          y = !0
        }
        if (m === void 0) {
          if (!y) continue;
          let C = B(CDe(g), u, p);
          t("truncateForPreview: field serialization threw (depth) \u2014 rendering a loud unserializable marker", {
            level: "error"
          });
          let b = f(_(C)).replace(/\s+/g, " "),
            I = qs(b, 50),
            D = I.length < b.length ? I + "\u2026" : I;
          if (i >= L) {
            a.push(D);
            continue
          }
          let j = `${D}: (value unserializable)`;
          i += Array.from(j).length, s.push(j);
          continue
        }
        let d = B(CDe(g), u, p);
        if (i >= L) {
          let C = f(_(d)).replace(/\s+/g, " "),
            b = qs(C, 50);
          a.push(b.length < C.length ? b + "\u2026" : b);
          continue
        }
        let c, R = !1;
        try {
          c = _(S(vQ({
            [g]: J(m)
          }, CDe)[g]))
        } catch {
          R = !0
        }
        if (c === void 0)
          if (R) t(`truncateForPreview: redaction round-trip threw for field ${_(d)} \u2014 rendering unredacted`, {
            level: "error"
          });
          else t(`truncateForPreview: redaction round-trip yielded no text for field ${_(d)} \u2014 rendering unredacted`, {
            level: "error"
          }), l(Error("truncateForPreview: redaction round-trip yielded no text for a field \u2014 rendering unredacted"));
        let G = c === void 0 ? m : c,
          x = `${T(_(d))}: ${T(G)}`;
        i += Array.from(x).length, s.push(x)
      }
      let P = "";
      if (a.length > 0) {
        let h = Math.floor(z / 10);
        if (a.length <= h) {
          let m = Math.max(8, Math.floor(z / a.length) - 2),
            y = a.map((d) => {
              let c = qs(d, m);
              return c.length < d.length ? c + "\u2026" : c
            });
          P = `
\u22EF ${a.length} ${O(a.length,"field")} elided: ${y.join(", ")} \u22EF
`
        } else P = `
\u22EF ${a.length} ${O(a.length,"field")} elided (count exceeds the ${h}-name bound \u2014 refuse) \u22EF
`
      }
      return `{ ${s.join(", ")} }${P}`
    }
    let e;
    try {
      if (M(n)) return t("truncateForPreview: non-object input exceeds the serialization depth probe \u2014 rendering a loud unserializable marker", {
        level: "error"
      }), "(value unserializable)";
      e = _(n)
    } catch {
      return t("truncateForPreview: non-object input serialization threw \u2014 rendering a loud unserializable marker", {
        level: "error"
      }), "(value unserializable)"
    }
    if (e === void 0) return "(unserializable)";
    let o, r = !1;
    try {
      o = _(S(vQ(J(e), CDe)))
    } catch {
      r = !0
    }
    if (o === void 0) {
      if (r) t("truncateForPreview: non-object redaction round-trip threw \u2014 rendering unredacted", {
        level: "error"
      });
      else t("truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted", {
        level: "error"
      }), l(Error("truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted"));
      o = e
    }
    return v(f(o).replace(/\s{2,}/g, " "))
  } catch {
    return "(unserializable)"
  }
}

function T(n) {
  if (n.length <= 1e5) return v(f(n).replace(/\s{2,}/g, " "));
  let e = 0;
  for (let a of n) e++;
  let o = f(qs(n.slice(0, w * 2 + 1), w)).replace(/\s{2,}/g, " "),
    r = Array.from(Up(n.slice(-(F * 2 + 1)))),
    s = f(r.slice(-F).join("")).replace(/\s{2,}/g, " "),
    i = e - w - F;
  return o + `
\u22EF ${i} ${O(i,"code point")} elided \u22EF
` + s
}

function lEt(n, e) {
  return !!n?.experimental?.[e]
}

function O7o(n, e, o) {
  return n.filter((r) => r.type === "connected" && e(r.name) && lEt(r.capabilities, "claude/channel") && lEt(r.capabilities, "claude/channel/permission") && o(r.name) && r.protocolEra !== "modern")
}

function I7o(n) {
  let e = new Map,
    o = new Set;
  return {
    isServerRegistered: n,
    onResponse(r, s) {
      let i = r.toLowerCase();
      if (q()) {
        if (o.has(i)) return e.delete(i), t("Channel permission relay: a request ID was drawn twice in one session; channel replies with that ID are ignored \u2014 answer in the terminal", {
          level: "warn"
        }), () => {};
        o.add(i)
      }
      return e.set(i, s), () => {
        e.delete(i)
      }
    },
    resolve(r, s, i) {
      let a = r.toLowerCase(),
        u = e.get(a);
      if (!u) return !1;
      return e.delete(a), u({
        behavior: s,
        fromServer: i
      }), !0
    }
  }
}
export {
  A7o,
  x7o,
  jqt,
  P7o,
  lEt,
  O7o,
  I7o
};
