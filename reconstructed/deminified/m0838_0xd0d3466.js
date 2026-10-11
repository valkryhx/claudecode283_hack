// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Nt } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import { B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import { b, J } from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-rwwxddqq.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-ht635kqk.js";
import "B:/~BUN/root/chunk-y72v2pst.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { sa } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import "B:/~BUN/root/chunk-w5bkq1td.js";
import "B:/~BUN/root/chunk-mjdkd2h9.js";
import "B:/~BUN/root/chunk-81280fc2.js";
import { zI, rre, CUo } from "B:/~BUN/root/chunk-tndjj29v.js";
import { U, L } from "B:/~BUN/root/chunk-z1enakv9.js";
import { lstat as Bn, realpath as he } from "fs/promises";
import { resolve as Ne, sep as _e } from "path";
var re = e => e === "a" || e === "e" || e === "i" || e === "o" || e === "u",
  se = (e, t) => {
    let n = e[t];
    if (re(n)) return !0;
    if (n !== "y") return !1;
    let o = t;
    while (o > 0 && e[o - 1] === "y") o--;
    let s = o === 0 ? !0 : re(e[o - 1]);
    return (t - o) % 2 === 0 ? !s : s;
  },
  G = e => {
    let t = 0,
      n = !1;
    for (let o = 0; o < e.length; o++) {
      let s = e[o],
        r = re(s) || s === "y" && o > 0 && !n;
      if (!r && n) t++;
      n = r;
    }
    return t;
  },
  Be = e => {
    let t = !1;
    for (let n = 0; n < e.length; n++) {
      let o = e[n];
      if (t = re(o) || o === "y" && n > 0 && !t, t) return !0;
    }
    return !1;
  },
  We = e => e.length >= 2 && e.at(-1) === e.at(-2) && !se(e, e.length - 1),
  je = e => {
    if (e.length < 3) return !1;
    let t = e.at(-1);
    return !se(e, e.length - 3) && se(e, e.length - 2) && !se(e, e.length - 1) && t !== "w" && t !== "x" && t !== "y";
  },
  Le = (e, t) => {
    for (let [n, o, s] of t) {
      if (!e.endsWith(n)) continue;
      let r = e.slice(0, e.length - n.length);
      return G(r) > s ? r + o : e;
    }
    return e;
  },
  Ct = e => {
    if (e.endsWith("sses")) return e.slice(0, -2);
    if (e.endsWith("ies")) return e.slice(0, -2);
    if (e.endsWith("ss")) return e;
    if (e.endsWith("s")) return e.slice(0, -1);
    return e;
  },
  _t = e => {
    if (e.endsWith("eed")) {
      let o = e.slice(0, -3);
      return G(o) > 0 ? e.slice(0, -1) : e;
    }
    let t = e.endsWith("ed") ? e.slice(0, -2) : e.endsWith("ing") ? e.slice(0, -3) : void 0;
    if (t === void 0 || !Be(t)) return e;
    if (t.endsWith("at") || t.endsWith("bl") || t.endsWith("iz")) return t + "e";
    let n = t.at(-1);
    if (We(t) && n !== "l" && n !== "s" && n !== "z") return t.slice(0, -1);
    if (G(t) === 1 && je(t)) return t + "e";
    return t;
  },
  Lt = e => e.endsWith("y") && Be(e.slice(0, -1)) ? e.slice(0, -1) + "i" : e,
  Bt = [["ational", "ate", 0], ["tional", "tion", 0], ["enci", "ence", 0], ["anci", "ance", 0], ["izer", "ize", 0], ["abli", "able", 0], ["bli", "ble", 0], ["alli", "al", 0], ["entli", "ent", 0], ["eli", "e", 0], ["ousli", "ous", 0], ["ization", "ize", 0], ["ation", "ate", 0], ["ator", "ate", 0], ["alism", "al", 0], ["iveness", "ive", 0], ["fulness", "ful", 0], ["ousness", "ous", 0], ["aliti", "al", 0], ["iviti", "ive", 0], ["biliti", "ble", 0], ["logi", "log", 0]],
  Wt = [["icate", "ic", 0], ["ative", "", 0], ["alize", "al", 0], ["iciti", "ic", 0], ["ical", "ic", 0], ["ful", "", 0], ["ness", "", 0]],
  jt = ["al", "ance", "ence", "er", "ic", "able", "ible", "ant", "ement", "ment", "ent", "ion", "ou", "ism", "ate", "iti", "ous", "ive", "ize"],
  Ut = e => {
    for (let t of jt) {
      if (!e.endsWith(t)) continue;
      let n = e.slice(0, e.length - t.length),
        o = t !== "ion" || n.endsWith("s") || n.endsWith("t");
      return G(n) > 1 && o ? n : e;
    }
    return e;
  },
  Ht = e => {
    if (!e.endsWith("e")) return e;
    let t = e.slice(0, -1),
      n = G(t);
    if (n > 1) return t;
    if (n === 1 && !je(t)) return t;
    return e;
  },
  Gt = e => G(e) > 1 && We(e) && e.endsWith("l") ? e.slice(0, -1) : e,
  Qt = e => {
    if (e.length <= 2) return e;
    let t = Ct(e);
    return t = _t(t), t = Lt(t), t = Le(t, Bt), t = Le(t, Wt), t = Ut(t), t = Ht(t), t = Gt(t), t;
  },
  Ue = zI(Qt, e => e, 50000),
  eo = rre(Ue.cache),
  xe = e => e.length <= 2 ? e : Ue(e);
var $t = /[\p{L}\p{M}\p{N}]+/gu,
  ae = e => e >= "A" && e <= "Z",
  Ie = e => e >= "a" && e <= "z",
  Se = e => e >= "0" && e <= "9",
  He = e => ae(e) || Ie(e),
  Vt = e => {
    let t = [],
      n = 0;
    for (let o = 1; o < e.length; o++) {
      let s = e[o - 1] ?? "",
        r = e[o] ?? "",
        i = e[o + 1] ?? "",
        a = i === "s" && o + 2 === e.length;
      if ((Ie(s) || Se(s)) && ae(r) || ae(s) && ae(r) && Ie(i) && !a || He(s) && Se(r) || Se(s) && He(r)) t.push(e.slice(n, o)), n = o;
    }
    return t.push(e.slice(n)), t;
  },
  de = e => e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
  Ge = e => /^[a-z]+$/.test(e),
  Qe = text => {
    let t = Vt(text);
    return t.length > 1 ? [{
      text: text,
      compound: !0
    }, ...t.map(n => ({
      text: n,
      compound: !1
    }))] : [{
      text: text,
      compound: !1
    }];
  },
  q = String.raw`(^|[^\p{L}\p{N}]|[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF])`,
  ie = String.raw`(?!(?![\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF])[\p{L}\p{N}])`,
  Kt = [[new RegExp(q + String.raw`[cC]\+\+` + ie, "gu"), " cpp "], [new RegExp(q + String.raw`[cC]#` + ie, "gu"), " csharp "], [new RegExp(q + String.raw`[fF]#` + ie, "gu"), " fsharp "], [new RegExp(q + String.raw`\.[nN][eE][tT]` + ie, "gu"), " dotnet "]],
  regExp = new RegExp(q + String.raw`([vV]?\d+(?:\.\d+)+)`, "gu"),
  Xt = /^(?![\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF])[\p{L}\p{N}]/u,
  O = /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]/,
  Jt = /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]+|[^\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7AF\uF900-\uFAFF]+/gu,
  Zt = e => {
    let t = [...e];
    if (t.length <= 2) return [e];
    let n = [e];
    for (let o = 0; o < t.length - 1; o++) n.push(t[o] + t[o + 1]);
    return n;
  },
  qt = /[\uFF66-\uFF9F]/,
  $e = /^\p{N}+$/u,
  en = e => {
    let t = [],
      n = !1,
      o = !1;
    for (let s of e) {
      let r = t.at(-1);
      if (r !== void 0 && $e.test(s) && o) {
        r.push(s), n = !0;
        continue;
      }
      if (r !== void 0 && n && O.test(s)) {
        r.push(s), n = !1, o = !0;
        continue;
      }
      t.push([s]), n = $e.test(s), o = O.test(s);
    }
    return t.map(item => item.length === 1 ? item[0] : item.join(""));
  },
  Ve = /^\p{L}$/u,
  tn = e => {
    let t = [];
    for (let n of e) {
      let o = t.at(-1),
        s = Ve.test(n) && !O.test(n);
      if (o !== void 0) {
        let r = o.at(-1);
        if (s && O.test(r)) {
          o.push(n);
          continue;
        }
        if (O.test(n) && Ve.test(r) && !O.test(r)) {
          o.push(n);
          continue;
        }
      }
      t.push([n]);
    }
    return t.map(item => item.length === 1 ? item[0] : item.join(""));
  },
  nn = e => {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      let o = e[n];
      if (!O.test(o) || [...o].length !== 1) continue;
      let s = n > 0 ? e[n - 1] : void 0,
        r = n + 1 < e.length ? e[n + 1] : void 0,
        text_2 = s !== void 0 && !O.test(s) && [...de(s)].length > 1 ? s + o : r !== void 0 && !O.test(r) && [...de(r)].length > 1 ? o + r : void 0;
      if (text_2 !== void 0) t.push({
        text: text_2,
        compound: !0
      });
    }
    return t;
  },
  ce = (e, t) => {
    let n = e.replace(/\[\[([^[\]]*)\]\]/g, " $1 ");
    for (let [r, i] of Kt) n = n.replace(r, (a, c) => c + i);
    n = n.replace(regExp, (r, i, a, c, l) => {
      let d = l.codePointAt(c + r.length);
      if (d !== void 0 && Xt.test(String.fromCodePoint(d))) return r;
      return `${i}${a} ${a.replaceAll(".", "")}`;
    });
    let o = n.match($t) ?? [],
      s = o.flatMap(item => {
        let i = qt.test(item) ? item.normalize("NFKC") : item;
        if (O.test(i)) {
          let c = tn(en(i.match(Jt) ?? [])),
            l = t.compounds ? nn(c) : [],
            d = c.flatMap(item => {
              if (!O.test(item)) {
                let m = Qe(item);
                return t.compounds ? m : m.filter(item => !item.compound);
              }
              let u = Zt(item),
                p = u.length > 1,
                f = (item.match(/\p{N}{3,}/gu) ?? []).map(m => ({
                  text: m,
                  compound: !0
                }));
              return [...u.map((m, index) => ({
                text: m,
                compound: p && index === 0
              })), ...f].filter(item => !item.compound || t.compounds);
            });
          return d.push(...l), [...d.filter(item => item.compound), ...d.filter(item => !item.compound)];
        }
        let a = Qe(i);
        return t.compounds ? a : a.filter(item => !item.compound);
      }).map(({
        text: text_3,
        compound: compound
      }) => ({
        text: de(text_3),
        compound: compound
      })).filter(({
        text: text_4
      }) => text_4.length > 1).flatMap(({
        text: text_5,
        compound: compound_2
      }) => {
        if (compound_2) {
          let c = t.dualStem && Ge(text_5) ? xe(text_5) : text_5;
          return c !== text_5 ? [text_5, c] : [text_5];
        }
        if (!Ge(text_5)) return [text_5];
        let a = xe(text_5);
        return t.dualStem && a !== text_5 ? [a, text_5] : [a];
      });
    if (s.length > 0 || o.length === 0 || t.singleCharFallback === !1) return s;
    return o.map(de);
  },
  W = e => ce(e, {
    dualStem: !1,
    compounds: !0
  }),
  we = e => ce(e, {
    dualStem: !1,
    compounds: !0,
    singleCharFallback: !1
  }),
  Q = e => ce(e, {
    dualStem: !0,
    compounds: !0
  }),
  Ke = e => ce(e, {
    dualStem: !1,
    compounds: !1
  });
var x = ["filename", "frontmatter", "headings", "body"],
  on = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/,
  sn = /^[\w-]+:/m,
  rn = /^#{1,6}\s+(.*)$/,
  an = /^(`{3,}|~{3,})(.*)$/,
  dn = e => {
    let t = e.slice(e.lastIndexOf("/") + 1),
      n = t.lastIndexOf(".");
    return n > 0 ? t.slice(0, n) : t;
  },
  cn = e => {
    let t = {
        headings: [],
        body: [[]]
      },
      n;
    for (let o of e) {
      let s = o.match(an);
      if (s !== null) {
        let a = s[1];
        if (n === void 0) {
          n = a, t.body.at(-1).push(o);
          continue;
        }
        if (a[0] === n[0] && a.length >= n.length && s[2].trim() === "") {
          n = void 0, t.body.at(-1).push(o);
          continue;
        }
      }
      let i = n !== void 0 ? void 0 : o.match(rn)?.[1];
      if (i === void 0) t.body.at(-1).push(o);else t.headings.push(i), t.body.push([]);
    }
    return t;
  },
  ln = e => {
    let t = e.map(item => we(item)).filter(item => item.length > 0);
    if (t.length > 0) return t.flatMap(item => [...item, ""]);
    return W(e.join(`
`));
  },
  un = e => {
    let t = e.map(item => we(item.join(`
`))).filter(item => item.length > 0);
    if (t.length > 0) return t.flatMap((item, index) => index === 0 ? item : ["", ...item]);
    return W(e.map(item => item.join(`
`)).join(`
`));
  },
  Fe = (path, t) => {
    let n = t.replace(/^\uFEFF/, ""),
      o = n.match(on),
      s = o !== null && sn.test(o[1] ?? ""),
      r = s ? o[1] ?? "" : "",
      i = s ? n.slice(o[0].length) : n,
      {
        headings: headings,
        body: body
      } = cn(i.split(/\r?\n/));
    return {
      path: path,
      fields: {
        filename: W(dn(path)),
        frontmatter: W(r),
        headings: ln(headings),
        body: un(body)
      }
    };
  };
var S = x.length,
  le = Object.fromEntries(x.map((item, index) => [item, index])),
  V = 4294967295,
  Ye = () => Object.fromEntries(x.map(item => [item, 0])),
  ee = () => ({
    terms: new Map(),
    docs: new Map(),
    pathToId: new Map(),
    unverified: new Set(),
    fieldLengthTotals: Ye(),
    fieldDocCounts: Ye(),
    nextDocId: 0
  }),
  Ee = (e, t) => {
    if (e.length >= t) return e;
    let uint32Array = new Uint32Array(Math.max(t, e.length * 2));
    return uint32Array.set(e), uint32Array;
  },
  fn = e => {
    let t = new Map();
    return x.forEach((item, index) => {
      e.fields[item].forEach((item, r) => {
        if (item === "") return;
        let i = t.get(item) ?? x.map(() => []);
        i[index].push(r), t.set(item, i);
      });
    }), t;
  },
  Pe = (e, t, n, o) => {
    let s = e.terms.get(t) ?? {
        docIds: new Uint32Array(2),
        offsets: new Uint32Array(2 * S + 1),
        positions: new Uint32Array(8),
        size: 0
      },
      r = s.size,
      i = s.offsets[S * r],
      a = o.reduce((acc, item) => acc + item.length, 0);
    if (i + a > V) throw Error("position space exhausted");
    if (r > 0 && s.docIds[r - 1] >= n) throw Error("posting docId out of order");
    s.docIds = Ee(s.docIds, r + 1), s.offsets = Ee(s.offsets, S * (r + 1) + 1), s.positions = Ee(s.positions, i + a), s.docIds[r] = n;
    let c = i;
    if (o.forEach((item, index) => {
      s.offsets[S * r + index] = c, s.positions.set(item, c), c += item.length;
    }), s.offsets[S * (r + 1)] = c, s.size = r + 1, r === 0) e.terms.set(t, s);
  },
  pn = (e, t) => {
    let n = e.offsets[S * t],
      o = e.offsets[S * (t + 1)],
      s = e.offsets[S * e.size];
    e.positions.copyWithin(n, o, s), e.docIds.copyWithin(t, t + 1, e.size);
    for (let r = S * (t + 1); r <= S * e.size; r++) e.offsets[r - S] = e.offsets[r] - (o - n);
    e.size--;
  },
  ue = (e, t) => {
    let n = 0,
      o = e.size - 1;
    while (n <= o) {
      let s = n + o >> 1,
        r = e.docIds[s];
      if (r === t) return s;
      if (r < t) n = s + 1;else o = s - 1;
    }
    return -1;
  },
  K = e => e.docIds.subarray(0, e.size),
  Xe = (e, t, n) => e.offsets[S * t + le[n] + 1] - e.offsets[S * t + le[n]],
  te = (e, t, n) => {
    let o = e.offsets[S * t + le[n]],
      s = e.offsets[S * t + le[n] + 1];
    return o === s ? void 0 : e.positions.subarray(o, s);
  },
  Je = (e, t) => e.terms.get(t)?.size ?? 0,
  Ze = (e, t) => {
    let n = e.terms.get(t);
    return n?.size === 1 ? n.docIds[0] : void 0;
  },
  qe = e => {
    e.docIds = e.docIds.slice(0, e.size), e.offsets = e.offsets.slice(0, S * e.size + 1), e.positions = e.positions.slice(0, e.offsets[S * e.size]);
  },
  ve = (e, t, n) => {
    if (e.nextDocId > V) throw Error("docId space exhausted");
    if (e.pathToId.has(t.path)) k(e, t.path);
    let o = e.nextDocId++;
    for (let [r, i] of fn(t)) Pe(e, r, o, i);
    let fieldLengths = Object.fromEntries(x.map(item => [item, U(t.fields[item], i => i !== "")]));
    for (let r of x) if (e.fieldLengthTotals[r] += fieldLengths[r], fieldLengths[r] > 0) e.fieldDocCounts[r]++;
    return e.docs.set(o, {
      path: t.path,
      hash: n.hash,
      size: n.size,
      mtimeMs: n.mtimeMs,
      fieldLengths: fieldLengths
    }), e.pathToId.set(t.path, o), o;
  },
  et = (e, t, n) => {
    for (let o of x) if (e.fieldLengthTotals[o] -= n.fieldLengths[o], n.fieldLengths[o] > 0) e.fieldDocCounts[o]--;
    e.docs.delete(t), e.pathToId.delete(n.path), e.unverified.delete(t);
  },
  tt = (e, t, n) => {
    for (let [o, s] of e.terms) {
      let r = ue(s, t);
      if (r < 0) continue;
      if (pn(s, r), s.size === 0) e.terms.delete(o);
    }
    et(e, t, n);
  },
  k = (e, t) => {
    let n = e.pathToId.get(t),
      o = n === void 0 ? void 0 : e.docs.get(n);
    if (n === void 0 || o === void 0) return !1;
    return tt(e, n, o), !0;
  },
  mn = (e, t) => {
    let n = 0;
    while (n < e.size && !t.has(e.docIds[n])) n++;
    if (n === e.size) return;
    let o = n,
      s = e.offsets[S * n];
    for (; n < e.size; n++) {
      let r = e.docIds[n],
        i = e.offsets[S * n],
        a = e.offsets[S * (n + 1)];
      if (t.has(r)) continue;
      let c = i - s;
      e.positions.copyWithin(s, i, a), e.docIds[o] = r;
      for (let l = 0; l < S; l++) e.offsets[S * o + l] = e.offsets[S * n + l] - c;
      s += a - i, o++;
    }
    e.offsets[S * o] = s, e.size = o;
  },
  hn = 16,
  nt = (e, t) => {
    let n = new Map();
    for (let s of t) {
      let r = e.pathToId.get(s),
        i = r === void 0 ? void 0 : e.docs.get(r);
      if (r !== void 0 && i !== void 0) n.set(r, i);
    }
    if (n.size < hn) {
      for (let [s, r] of n) tt(e, s, r);
      return n.size;
    }
    let o = new Set(n.keys());
    for (let [s, r] of e.terms) if (mn(r, o), r.size === 0) e.terms.delete(s);
    for (let [s, r] of n) et(e, s, r);
    return n.size;
  },
  ot = e => ({
    docCount: e.docs.size,
    avgFieldLength: Object.fromEntries(x.map(item => [item, e.fieldDocCounts[item] === 0 ? 0 : e.fieldLengthTotals[item] / e.fieldDocCounts[item]]))
  });
var Ae = {
    k1: 1.2,
    fieldWeights: {
      filename: 3,
      frontmatter: 3,
      headings: 2.5,
      body: 1
    },
    fieldB: {
      filename: 0.75,
      frontmatter: 0.75,
      headings: 0.75,
      body: 0.75
    },
    proximityWeight: 0,
    phraseBoost: 0.5
  },
  rt = e => {
    let t = Ke(e);
    if (t.length === 0) return [];
    let n = W(e),
      o = [],
      s = [],
      r = 0;
    for (let i of n) {
      if (r < t.length && i === t[r]) {
        s.push(i), r++;
        continue;
      }
      if (s.length > 0) o.push(s), s = [];
    }
    if (s.length > 0) o.push(s);
    for (; r < t.length; r++) o.push([t[r]]);
    return o;
  },
  Te = e => {
    let phrases = ((e.match(/"/g) ?? []).length & 1) === 0 ? [...e.matchAll(/"([^"]*)"/g)].flatMap(item => rt(item[1] ?? "")).filter(item => item.length > 1 && item.every(item => item.length > 1)) : [];
    return {
      terms: L(Q(e)),
      phrases: phrases,
      boostPhrases: []
    };
  },
  Re = (e, t) => {
    let n = Math.log((e - t + 0.5) / (t + 0.5));
    return n <= 0 ? 0.000001 : n;
  },
  gn = 0.7,
  yn = 16,
  it = e => e < yn ? 0 : gn * Re(e, 1),
  bn = (e, t, n, o, s) => x.reduce((acc, item) => {
    let a = Xe(e, t, item);
    if (a === 0 || o[item] === 0) return acc;
    let c = s.fieldB[item],
      l = 1 - c + c * n[item] / o[item];
    return acc + s.fieldWeights[item] * a / l;
  }, 0),
  st = (e, t, n) => {
    let o = n.map(item => at(e, item, t));
    if (o.some(item => item === void 0)) return !1;
    return x.some(item => {
      let r = [];
      for (let c of o) {
        let l = c === void 0 ? void 0 : te(c.entry, c.slot, item);
        if (l === void 0) return !1;
        r.push(l);
      }
      let [i, ...a] = r;
      if (i === void 0) return !1;
      return i.some(item => a.every((l, index) => xn(l, item + index + 1)));
    });
  },
  at = (e, t, n) => {
    let entry = e.terms.get(t),
      slot = entry === void 0 ? -1 : ue(entry, n);
    return entry === void 0 || slot < 0 ? void 0 : {
      entry: entry,
      slot: slot
    };
  },
  xn = (e, t) => {
    let n = 0,
      o = e.length - 1;
    while (n <= o) {
      let s = n + o >> 1,
        r = e[s];
      if (r === t) return !0;
      if (r < t) n = s + 1;else o = s - 1;
    }
    return !1;
  },
  dt = {
    span: 1 / 0,
    termCount: 0
  },
  Sn = (e, t, n) => {
    let o = n.map(item => {
      let d = at(e, item, t);
      return d === void 0 ? void 0 : te(d.entry, d.slot, "body");
    }).filter(item => item !== void 0);
    if (o.length < 2) return dt;
    let s = o.flatMap((item, d) => Array.from(item, pos => ({
        pos: pos,
        termIdx: d
      }))).sort((itemA, itemB) => itemA.pos - itemB.pos),
      r = new Map(),
      i = [],
      a = 0,
      span = 1 / 0;
    for (let l of s) {
      i.push(l);
      let d = r.get(l.termIdx) ?? 0;
      if (r.set(l.termIdx, d + 1), d === 0) a++;
      while (a === o.length) {
        let h = i.shift();
        if (h === void 0) break;
        span = Math.min(span, l.pos - h.pos + 1);
        let u = r.get(h.termIdx) ?? 0;
        if (r.set(h.termIdx, u - 1), u === 1) a--;
      }
    }
    return {
      span: span,
      termCount: o.length
    };
  },
  ct = (e, t) => {
    let n = e.flatMap(item => rt(item)),
      terms = L([...e.flatMap(item => Q(item)), ...t.flatMap(item => Q(item))]),
      s = n.filter(item => item.length > 1),
      r = new Set(),
      boostPhrases = s.filter(item => {
        let c = item.join(" ");
        if (r.has(c)) return !1;
        return r.add(c), !0;
      });
    return {
      terms: terms,
      phrases: [],
      boostPhrases: boostPhrases
    };
  },
  De = (e, t, n, o = Ae) => {
    let {
        terms: terms_2,
        phrases: phrases_2,
        boostPhrases: boostPhrases_2
      } = typeof t === "string" ? Te(t) : t,
      a = ot(e);
    if (a.docCount === 0 || terms_2.length === 0) return [];
    let c = terms_2.map(item => e.terms.get(item)),
      l = new Map(terms_2.map((item, index) => [item, Re(a.docCount, c[index]?.size ?? 0)])),
      d = new Map(boostPhrases_2.flat().filter(item => !l.has(item)).map(item => [item, Re(a.docCount, e.terms.get(item)?.size ?? 0)])),
      h = new Set(c.flatMap(item => item === void 0 ? [] : [...K(item)]));
    for (let p of boostPhrases_2) {
      let f = p.map(item => e.terms.get(item));
      if (f.some(item => item === void 0)) continue;
      let [m, ...g] = f,
        I = g.map(item => new Set(K(item)));
      for (let w of K(m)) if (I.every(item => item.has(w))) h.add(w);
    }
    return [...h].filter(item => phrases_2.every(f => st(e, item, f))).map(item => {
      let f = e.docs.get(item),
        m = c.map(v => v === void 0 ? -1 : ue(v, item)),
        matchedTerms = terms_2.filter((item, index) => m[index] >= 0),
        I = terms_2.reduce((acc, item, E) => {
          if (m[E] < 0) return acc;
          let D = bn(c[E], m[E], f.fieldLengths, a.avgFieldLength, o);
          return acc + l.get(item) * (D / (o.k1 + D));
        }, 0),
        w = boostPhrases_2.reduce((acc, R) => st(e, item, R) ? acc + o.phraseBoost * R.reduce((acc, item) => acc + (l.get(item) ?? d.get(item) ?? 0), 0) : acc, 0),
        {
          span: span_2,
          termCount: termCount
        } = o.proximityWeight > 0 ? Sn(e, item, matchedTerms) : dt,
        P = span_2 === 1 / 0 ? 0 : o.proximityWeight * I / Math.max(1, 1 + span_2 - termCount);
      return {
        path: f.path,
        score: I + w + P,
        matchedTerms: matchedTerms
      };
    }).filter(item => item.score > 0).sort((itemA, itemB) => itemB.score - itemA.score || (itemA.path < itemB.path ? -1 : 1)).slice(0, n);
  };
import { lstat as pe, open as In, readdir as wn, realpath as ne, stat as Fn } from "fs/promises";
import { join as Y, sep as En } from "path";
var j = Symbol("transient-read-failure"),
  Pn = e => {
    let t = e?.code;
    return t === "ENOENT" || t === "ENOTDIR" || t === "ELOOP" || t === "ENAMETOOLONG";
  },
  vn = e => {
    let t = e?.code;
    return t === "EACCES" || t === "EPERM";
  },
  A = e => Pn(e) ? "structural" : vn(e) ? "permission" : "other",
  lt = async (e, t) => {
    if ((await pe(e)).isSymbolicLink()) throw Object.assign(Error("not a regular file"), {
      code: "ENOTREG"
    });
    let n = await In(e, sa());
    try {
      let o = await n.stat();
      if (!o.isFile()) throw Object.assign(Error("not a regular file"), {
        code: "ENOTREG"
      });
      if (t?.maxBytes !== void 0 && o.size > t.maxBytes) throw Object.assign(Error("exceeds the read cap"), {
        code: "EFBIG"
      });
      if (t?.withinReal !== void 0) {
        let s = await ne(e).catch(i => {
          if (A(i) === "structural") return;
          throw i;
        });
        if (s === void 0 || !s.startsWith(t.withinReal + En)) throw Object.assign(Error("resolves outside the store root"), {
          code: "ENOTREG"
        });
        let r = await Fn(s).catch(i => {
          if (A(i) === "structural") return;
          throw i;
        });
        if (r === void 0) throw Object.assign(Error("resolves outside the store root"), {
          code: "ENOTREG"
        });
        if (r.dev !== o.dev || r.ino !== o.ino) throw Object.assign(Error("inode changed during read; retry"), {
          code: "EAGAIN"
        });
      }
      return await n.readFile();
    } finally {
      await n.close();
    }
  },
  ut = e => {
    let t = e?.code;
    return t === "ENOTREG" || t === "ELOOP" || t === "EFBIG";
  },
  fe = Symbol("not-a-regular-file"),
  ft = async (e, t, n) => pe(Y(e, t)).then(o => !o.isFile() || n !== void 0 && o.size > n, o => A(o) === "structural"),
  pt = async (e, t) => {
    if (!(await ft(e, t))) return !1;
    return ne(e).then(() => !0, () => !1);
  },
  mt = async (e, t, n, o = N) => {
    if (e.pathToId.get(n) === void 0) return !1;
    let withinReal = await ne(t).catch(() => j);
    if (typeof withinReal !== "string") return !1;
    let i = await lt(Y(t, n), {
      withinReal: withinReal,
      maxBytes: o.maxFileBytes
    }).catch(l => ut(l) ? fe : A(l) === "structural" ? void 0 : j);
    if (i === j) return !1;
    if (i === fe) return k(e, n);
    if (i === void 0) {
      if (!(await pt(t, n))) return !1;
      return k(e, n);
    }
    if (i.byteLength > o.maxFileBytes) return k(e, n);
    let a = new TextDecoder().decode(i),
      c = await pe(Y(t, n)).catch(() => {
        return;
      });
    return ve(e, Fe(n, a), {
      hash: ht(a),
      size: c?.size ?? i.byteLength,
      mtimeMs: c?.mtimeMs ?? 0
    }), !0;
  },
  N = {
    excludeBasenames: ["MEMORY.md"],
    maxFiles: 2000,
    maxFileBytes: 1048576
  },
  textEncoder = new TextEncoder(),
  ht = e => {
    let t = textEncoder.encode(e),
      n = -2078137563,
      o = -873292572;
    for (let r = 0; r < t.length; r++) {
      n ^= t[r];
      let i = n & 65535,
        a = n >>> 16,
        c = o & 65535,
        l = o >>> 16,
        d = i * 179,
        h = d & 65535;
      d = a * 179 + (d >>> 16);
      let u = d & 65535;
      d = c * 179 + (d >>> 16);
      let p = d & 65535;
      d = l * 179 + (d >>> 16);
      let f = d & 65535,
        m = n << 8,
        g = o << 8 | n >>> 24,
        I = h + (m & 65535),
        w = u + (m >>> 16) + (I >>> 16);
      n = w << 16 | I & 65535, o = (f << 16 | p) + g + m + (w >>> 16) | 0;
    }
    let s = r => (r >>> 0).toString(16).padStart(8, "0");
    return s(o) + s(n);
  },
  Me = (e, t) => {
    if (t.excludeLog?.(e)) return !0;
    if (t.isRecallVisible !== void 0 && !t.isRecallVisible(e)) return !0;
    if (t.excludePrefixes?.some(o => e.startsWith(o))) return !0;
    if (t.excludePaths !== void 0) return t.excludePaths.has(e);
    let n = e.slice(e.lastIndexOf("/") + 1);
    return t.excludeBasenames.includes(n);
  },
  An = async (e, t = N) => {
    let n = [],
      skippedSubtrees = new Set(),
      rootMissing = !1,
      r = [""];
    while (r.length > 0) {
      let f = r.pop(),
        m = await wn(Y(e, f), {
          withFileTypes: !0
        }).catch(g => {
          if (f === "") {
            if (B(g)) return rootMissing = !0, [];
            throw g;
          }
          switch (A(g)) {
            case "permission":
              return skippedSubtrees.add(f), [];
            case "structural":
              return [];
            default:
              throw g;
          }
        });
      for (let g of m) {
        let I = f === "" ? g.name : `${f}/${g.name}`;
        if (g.isSymbolicLink()) continue;
        if (g.isDirectory()) {
          if (t.excludePrefixes?.some(w => `${I}/`.startsWith(w)) ?? !1) continue;
          r.push(I);
        } else n.push(I);
      }
    }
    let i = n.filter(item => item.endsWith(".md")).filter(item => !Me(item, t)).sort(),
      skipped = new Set(),
      c = await Promise.allSettled(i.map(async f => {
        let m = await pe(Y(e, f)).catch(g => {
          switch (A(g)) {
            case "structural":
              return;
            case "permission":
              skipped.add(f);
              return;
            default:
              throw g;
          }
        });
        return m !== void 0 && m.isFile() && m.size <= t.maxFileBytes ? {
          path: f,
          size: m.size,
          mtimeMs: m.mtimeMs
        } : void 0;
      })),
      l = c.find(item => item.status === "rejected");
    if (l !== void 0 && l.status === "rejected") throw l.reason;
    let d = c.map(item => item.status === "fulfilled" ? item.value : void 0).filter(item => item !== void 0),
      files = d.length <= t.maxFiles ? d : d.toSorted((f, m) => m.mtimeMs - f.mtimeMs).slice(0, t.maxFiles).toSorted((f, m) => f.path < m.path ? -1 : 1),
      u = new Set(files.map(item => item.path)),
      capDropped = new Set(d.filter(item => !u.has(item.path)).map(item => item.path));
    return {
      files: files,
      skipped: skipped,
      skippedSubtrees: skippedSubtrees,
      rootMissing: rootMissing,
      capDropped: capDropped
    };
  };
var Tn = (e, t, n = new Set(), o = new Set(), s) => {
    let r = new Set(t.map(item => item.path)),
      i = [...o].map(item => item + "/"),
      a = d => i.length > 0 && i.some(item => d.startsWith(item)),
      toRemove = [...e.pathToId.keys()].filter(item => s?.(item) === !0 || !r.has(item) && !n.has(item) && !a(item)),
      toIndex = t.filter(item => {
        let h = e.pathToId.get(item.path);
        if (h === void 0) return !0;
        let u = e.docs.get(h);
        return u.size !== item.size || u.mtimeMs !== item.mtimeMs;
      });
    return {
      toIndex: toIndex,
      toRemove: toRemove,
      unchangedCount: t.length - toIndex.length
    };
  },
  gt = async (e, t, n = N, o) => {
    let s = {
      added: 0,
      updated: 0,
      removed: 0,
      unchanged: e.docs.size,
      rehashedUnchanged: 0,
      transientSkips: 0,
      scanCompleted: !1
    };
    if (o?.aborted) return s;
    let r = await An(t, n).catch(() => {
      return;
    });
    if (r === void 0) return s;
    if (r.rootMissing && e.docs.size > 0) return s;
    let withinReal_2 = await ne(t).catch(y => A(y) === "structural" ? void 0 : j);
    if (withinReal_2 === j) return s;
    let a = Tn(e, r.files, r.skipped, r.skippedSubtrees, y => Me(y, n)),
      c = [],
      l = [];
    await Promise.all(a.toRemove.map(async item => {
      if (Me(item, n) || r.capDropped.has(item)) c.push(item);else if (await ft(t, item, n.maxFileBytes)) l.push(item);
    }));
    let h = l.length === 0 || (await ne(t).then(() => !0, () => !1)) ? [...c, ...l] : c,
      u = a.toRemove.length - h.length,
      p = nt(e, h),
      added = 0,
      updated = 0,
      rehashedUnchanged = 0,
      I = 0,
      w = 0,
      T = !1;
    for (let y of a.toIndex) {
      if (o?.aborted) {
        T = !0;
        break;
      }
      let P = await lt(Y(t, y.path), {
        withinReal: withinReal_2,
        maxBytes: n.maxFileBytes
      }).catch(X => ut(X) ? fe : A(X) === "structural" ? void 0 : j);
      if (P === j) {
        w++;
        continue;
      }
      if (P === fe) {
        if (k(e, y.path)) I++;
        continue;
      }
      if (P === void 0) {
        if (!(await pt(t, y.path))) {
          w++;
          continue;
        }
        if (k(e, y.path)) I++;
        continue;
      }
      if (P.byteLength > n.maxFileBytes) {
        if (k(e, y.path)) I++;
        continue;
      }
      let v = new TextDecoder().decode(P),
        hash = ht(v),
        E = e.pathToId.get(y.path),
        D = E === void 0 ? void 0 : e.docs.get(E);
      if (D?.hash === hash && !e.unverified.has(E)) {
        e.docs.set(E, {
          ...D,
          size: y.size,
          mtimeMs: y.mtimeMs
        }), rehashedUnchanged++;
        continue;
      }
      if (ve(e, Fe(y.path, v), {
        hash: hash,
        size: y.size,
        mtimeMs: y.mtimeMs
      }), D === void 0) added++;else updated++;
    }
    return {
      added: added,
      updated: updated,
      removed: p + I,
      unchanged: a.unchangedCount,
      rehashedUnchanged: rehashedUnchanged,
      transientSkips: w + u + r.skipped.size + r.skippedSubtrees.size,
      scanCompleted: !T
    };
  };
var C = async (e, t = {}) => {
  let {
    logFeatureSad: logFeatureSad
  } = await import("B:/~BUN/root/chunk-sd62g3gg.js").catch(() => ({
    logFeatureSad: void 0
  }));
  logFeatureSad?.("memory_recall_select", e, {
    via_index: !0,
    ...t
  });
};
import { join as _n } from "path";
import { lstat as yt, open as Dn, unlink as Mn } from "fs/promises";
import { sep as zn } from "path";
var version = 10,
  On = e => {
    let t = [...e.docs.keys()].sort((itemA, itemB) => itemA - itemB),
      n = new Map(t.map((item, index) => [item, index])),
      docs = t.map(item => {
        let i = e.docs.get(item);
        return [i.path, i.hash, i.size, i.mtimeMs, x.map(item => i.fieldLengths[item])];
      }),
      terms_3 = [...e.terms.entries()].map(([r, i]) => {
        let a = [],
          c = -1;
        return K(i).forEach((item, index) => {
          let h = n.get(item);
          if (h === void 0) throw Error("posting references unknown docId");
          a.push(c < 0 ? h : h - c), c = h;
          let u = x.map(item => te(i, index, item));
          for (let p of u) a.push(p?.length ?? 0);
          for (let p of u) p?.forEach((f, m) => {
            a.push(m === 0 ? f : f - p[m - 1]);
          });
        }), [r, a];
      });
    return {
      version: version,
      docs: docs,
      terms: terms_3
    };
  },
  ze = (e, t) => {
    let n = e[t];
    if (typeof n !== "number" || !Number.isInteger(n) || n < 0 || n > V) throw Error("malformed posting data");
    return n;
  },
  kn = (e, t, n, o) => {
    let s = x.map(() => 0),
      r = x.map(() => []),
      i = 0,
      a = -1;
    while (i < n.length) {
      let l = ze(n, i++),
        d = a < 0 ? l : a + l;
      if (d >= o) throw Error("posting references unknown docId");
      if (a >= 0 && l === 0) throw Error("repeated posting docId");
      a = d;
      let h = 0;
      if (x.forEach((item, index) => {
        s[index] = ze(n, i + index), h += s[index];
      }), i += x.length, h === 0 || i + h > n.length) throw Error("malformed posting positions");
      x.forEach((item, index) => {
        let f = r[index];
        f.length = 0;
        let m = -1;
        for (let g = 0; g < s[index]; g++) {
          let I = ze(n, i++);
          if (m = m < 0 ? I : m + I, g > 0 && I === 0 || m > V) throw Error("malformed posting positions");
          f.push(m);
        }
      }), Pe(e, t, d, r);
    }
    let c = e.terms.get(t);
    if (c === void 0) throw Error("empty term entry");
    qe(c);
  },
  Nn = e => {
    if (e.version !== version) throw Error("unsupported index format version");
    if (!Array.isArray(e.docs) || !Array.isArray(e.terms)) throw Error("malformed index shape");
    let t = ee();
    for (let [n, o] of e.docs.entries()) {
      if (!Array.isArray(o) || o.length !== 5) throw Error("malformed doc entry");
      let [path_2, hash_2, size, mtimeMs, c] = o;
      if (typeof hash_2 !== "string" || !Number.isFinite(size) || !Number.isFinite(mtimeMs) || !Array.isArray(c) || c.length !== x.length || c.some(item => !Number.isInteger(item) || item < 0 || item > V)) throw Error("malformed doc metadata");
      if (typeof path_2 !== "string" || path_2.length === 0 || path_2.startsWith("/") || zn === "\\" && (path_2.includes("\\") || /^[A-Za-z]:/.test(path_2)) || path_2.includes("\x00") || path_2.split("/").some(item => item === ".." || item === "" || item === ".")) throw Error("non-contained doc path");
      if (t.pathToId.has(path_2)) throw Error("duplicate doc entry");
      let fieldLengths_2 = Object.fromEntries(x.map((item, index) => [item, c[index]]));
      t.docs.set(n, {
        path: path_2,
        hash: hash_2,
        size: size,
        mtimeMs: mtimeMs,
        fieldLengths: fieldLengths_2
      }), t.pathToId.set(path_2, n), t.unverified.add(n);
      for (let d of x) if (t.fieldLengthTotals[d] += fieldLengths_2[d], fieldLengths_2[d] > 0) t.fieldDocCounts[d]++;
    }
    if (x.some(item => !Number.isSafeInteger(t.fieldLengthTotals[item]))) throw Error("malformed doc metadata");
    t.nextDocId = e.docs.length;
    for (let n of e.terms) {
      if (!Array.isArray(n) || n.length !== 2) throw Error("malformed term entry");
      let [o, s] = n;
      if (typeof o !== "string" || o.length === 0 || !Array.isArray(s) || t.terms.has(o)) throw Error("malformed term entry");
      kn(t, o, s, e.docs.length);
    }
    return t;
  },
  xt = async (e, t, n = Oe) => {
    let o = b(On(e)),
      s = Buffer.byteLength(o);
    if (s > n) {
      C("index_persist_skipped_oversized");
      let r = await yt(t).catch(() => {
        return;
      });
      if (r !== void 0 && r.size > n) await Mn(t).catch(() => {});
      return 0;
    }
    return await Cn(t, o, 384), s;
  },
  me = Symbol("transient-index-read-failure"),
  oe = '{"version"',
  Oe = 67108864,
  code = Symbol("index-file-oversized"),
  St = async e => {
    if ((await yt(e)).isSymbolicLink()) throw Object.assign(Error("not a regular file"), {
      code: "ENOTREG"
    });
    let t = await Dn(e, sa());
    try {
      let n = await t.stat();
      if (!n.isFile()) throw Object.assign(Error("not a regular file"), {
        code: "ENOTREG"
      });
      if (n.size > Oe) {
        let s = Buffer.alloc(64),
          {
            bytesRead: bytesRead
          } = await t.read(s, 0, 64, 0);
        throw Object.assign(Error("index file oversized"), {
          code: code,
          head: s.subarray(0, bytesRead).toString("utf8")
        });
      }
      let o = await t.readFile({
        encoding: "utf8"
      });
      if (Buffer.byteLength(o) > Oe) throw Object.assign(Error("index file oversized"), {
        code: code,
        head: o.slice(0, 64)
      });
      return o;
    } finally {
      await t.close();
    }
  },
  It = e => {
    let t = e;
    if (t.code !== code) return;
    return (typeof t.head === "string" ? t.head.trim() : "").startsWith(oe);
  },
  wt = async e => {
    let t,
      n = await St(e).catch(o => (t = It(o), B(o) ? void 0 : me));
    if (n === me) return {
      owned: t ?? !1,
      absent: !1
    };
    if (n === void 0) return {
      owned: !0,
      absent: !0
    };
    try {
      let o = J(n);
      return {
        owned: typeof o === "object" && o !== null && typeof o.version === "number",
        absent: !1
      };
    } catch {
      let o = n.trim().slice(0, oe.length);
      return {
        owned: o === "" || oe.startsWith(o),
        absent: !1
      };
    }
  },
  Ft = async e => {
    let t,
      n = await St(e).catch(s => (t = It(s), B(s) ? void 0 : me));
    if (n === me) return {
      index: void 0,
      pathOwned: t ?? !1
    };
    if (n === void 0) return {
      index: void 0,
      pathOwned: !0
    };
    let o;
    try {
      o = J(n);
    } catch {
      let s = n.trim().slice(0, oe.length);
      return {
        index: void 0,
        pathOwned: s === "" || oe.startsWith(s)
      };
    }
    if (typeof o !== "object" || o === null || typeof o.version !== "number") return {
      index: void 0,
      pathOwned: !1
    };
    try {
      return {
        index: Nn(o),
        pathOwned: !0
      };
    } catch {
      return {
        index: void 0,
        pathOwned: !0
      };
    }
  };
var Ln = ".bm25-index.json",
  Et = async (dir, options = N, n, o = !0) => {
    let indexPath = _n(dir, Ln),
      r = o ? await Ft(indexPath) : {
        index: void 0,
        pathOwned: !1
      },
      i = r.index ?? ee(),
      a = await gt(i, dir, options, n),
      c = r.index !== void 0 && !a.scanCompleted;
    return {
      dir: dir,
      indexPath: indexPath,
      index: c ? ee() : i,
      lastSync: c ? {
        added: 0,
        updated: 0,
        removed: 0,
        unchanged: 0,
        rehashedUnchanged: 0,
        transientSkips: 0,
        scanCompleted: !1
      } : a,
      loadedFromDisk: r.index !== void 0,
      persistable: r.pathOwned && !c,
      options: options
    };
  },
  Pt = async e => {
    if (!e.persistable || !e.lastSync.scanCompleted) return 0;
    let t = await wt(e.indexPath);
    if (!t.owned || e.loadedFromDisk && t.absent) return 0;
    return xt(e.index, e.indexPath);
  },
  vt = async (e, t, n = 5, o = Ae) => {
    let s = new Set(),
      r = i => i.filter(item => !s.has(item.path));
    for (let i = 0; i < 8; i++) {
      let a = r(De(e.index, t, n + s.size, o)).slice(0, n),
        c = a.filter(item => {
          let d = e.index.pathToId.get(item.path);
          return d !== void 0 && e.index.unverified.has(d);
        });
      if (c.length === 0) return a;
      for (let l of c) {
        let d = e.index.pathToId.get(l.path);
        if (!(await mt(e.index, e.dir, l.path, e.options)) && d !== void 0 && e.index.unverified.has(d)) s.add(l.path);
      }
    }
    return r(De(e.index, t, n + s.size, o)).filter(item => {
      let a = e.index.pathToId.get(item.path);
      return a === void 0 || !e.index.unverified.has(a);
    }).slice(0, n);
  };
var ge = Symbol("transient-realpath-failure"),
  Wn = e => e.added > 0 || e.updated > 0 || e.removed > 0 || e.rehashedUnchanged > 0,
  jn = e => {
    let t = [...e.boostPhrases, ...e.phrases],
      n = new Set(),
      boostPhrases_3 = [];
    for (let s = t.length - 1; s >= 0; s--) {
      let r = t[s],
        i = r.join(" ");
      if (!n.has(i)) n.add(i), boostPhrases_3.push(r);
    }
    return boostPhrases_3.reverse(), {
      terms: e.terms,
      phrases: [],
      boostPhrases: boostPhrases_3
    };
  },
  Un = 4096,
  Hn = 3072,
  Gn = 1024,
  Rt = (e, t) => {
    if (((e.match(/"/g) ?? []).length & 1) === 0) return e;
    let n = t ? e.lastIndexOf('"') : e.indexOf('"');
    return e.slice(0, n) + " " + e.slice(n + 1);
  },
  At = (e, t) => t > 0 && t < e.length && (e.charCodeAt(t) & 64512) === 56320 ? t - 1 : t,
  Qn = e => {
    if (e.length <= Un) return e;
    let t = At(e, Hn),
      n = At(e, e.length - Gn),
      o = `${Rt(e.slice(0, t), !0)}
${Rt(e.slice(n), !1)}`;
    return ((e.match(/"/g) ?? []).length & 1) === 0 ? o : o.replaceAll('"', " ");
  },
  Dt = 64,
  $n = e => e.slice(-8).map(item => item.length <= 16 ? item : item.slice(0, 16)),
  Vn = 8,
  Kn = 24,
  Tt = 4,
  Yn = (e, t, n, o, s) => {
    let r = new Set(e),
      i = new Set(),
      a = new Map(),
      c = u => {
        let p = t(u);
        if (p === 0) return !1;
        if (p === 1) {
          let f = n(u);
          if (f !== void 0) {
            let m = a.get(f) ?? 0;
            if (m >= Tt) return !1;
            a.set(f, m + 1);
          }
        }
        return !0;
      };
    for (let u of s) if (r.has(u) && c(u)) i.add(u);
    let l = i.size;
    for (let u of o) {
      if (i.size >= l + Vn) break;
      if (r.has(u) && !i.has(u) && c(u)) i.add(u);
    }
    let d = i.size;
    for (let u = o.length - 1; u >= 0 && i.size < d + Kn; u--) {
      let p = o[u];
      if (r.has(p) && !i.has(p) && c(p)) i.add(p);
    }
    let h = e.filter(item => !i.has(item)).map(u => {
      let key = t(u);
      if (key === 0) return {
        t: u,
        key: Number.MAX_SAFE_INTEGER
      };
      if (key === 1) {
        let f = n(u);
        if (f !== void 0) {
          let m = a.get(f) ?? 0;
          if (a.set(f, m + 1), m >= Tt) return {
            t: u,
            key: Number.MAX_SAFE_INTEGER - 1
          };
        }
        return {
          t: u,
          key: 1
        };
      }
      return {
        t: u,
        key: key
      };
    }).sort((itemA, itemB) => itemA.key - itemB.key);
    for (let {
      t: t_2
    } of h) {
      if (i.size >= Dt) break;
      i.add(t_2);
    }
    return e.filter(item => i.has(item));
  },
  Xn = (e, t, n) => {
    if (e.terms.length <= Dt && e.boostPhrases.every(item => item.length <= 16) && e.boostPhrases.length <= 8) return e;
    let boostPhrases_4 = $n(e.boostPhrases);
    return {
      terms: Yn(e.terms, s => Je(t, s), s => Ze(t, s), n(), new Set(boostPhrases_4.flat())),
      phrases: e.phrases,
      boostPhrases: boostPhrases_4
    };
  },
  Jn = (e, excludeLog, isRecallVisible) => ({
    ...(e === null ? N : {
      ...N,
      excludePaths: new Set([...e.excluded].map(item => item.split(_e).join("/"))),
      excludePrefixes: e.excludedPrefixes.map(item => item.split(_e).join("/"))
    }),
    excludeLog: excludeLog,
    isRecallVisible: isRecallVisible
  }),
  Ce = (e, t) => `${t ? "persist" : "no-persist"}:${e}`;
class Mt {
  open = CUo(async (e, t, n, o, s) => {
    let r = performance.now(),
      store = await Et(e, Jn(t, n, o), void 0, s);
    if (s && store.lastSync.scanCompleted && (!store.loadedFromDisk ? store.index.docs.size > 0 : Wn(store.lastSync))) if (store.persistable) await Pt(store).catch(() => {
      C("index_persist_failed");
    });else C("index_path_foreign");
    return {
      store: store,
      openMs: performance.now() - r
    };
  }, (e, t, n, o, s) => Ce(e, s));
  isHeld(e, t) {
    return this.open.cache.has(Ce(e, t));
  }
  releaseIfCurrent(e, t, n) {
    let o = Ce(e, t);
    if (this.open.cache.get(o) === n) this.open.cache.delete(o);
  }
}
var zt = new Nt(() => new Mt()),
  Ot = async (e, t, n, o, s, r) => {
    let i = e.open(t, n, o, s, r),
      a = await i;
    if (!a.store.lastSync.scanCompleted || a.store.lastSync.transientSkips > 0 || a.store.index.docs.size === 0) e.releaseIfCurrent(t, r, i);
    return a;
  },
  Xo = (e, t, n, o) => {
    Ot(zt.of(e), t, null, n, o, !0).then(({
      store: store_2
    }) => {
      if (!store_2.lastSync.scanCompleted) C("index_prewarm_failed", {
        prewarm: !0,
        sweep_incomplete: !0
      });else if (store_2.lastSync.transientSkips > 0) C("index_prewarm_failed", {
        prewarm: !0,
        transient_skips: !0
      });
    }).catch(() => {
      C("index_prewarm_failed", {
        prewarm: !0
      });
    });
  },
  Jo = async (e, t, n, o, s = 5, r = null, i, a = !1, c) => {
    let l = performance.now(),
      d = zt.of(e),
      storeWasHeld = d.isHeld(n, a),
      {
        store: store_3,
        openMs: p
      } = await Ot(d, n, r, i, c, a),
      openWaitMs = performance.now() - l,
      m = () => it(store_3.index.docs.size),
      g = (sync, M = [], queryTermCount = 0) => {
        let topScore = M[0]?.score ?? 0,
          relevanceFloor = m(),
          belowFloorCount = U(M, Z => Z.score < relevanceFloor);
        return {
          docCount: store_3.index.docs.size,
          termCount: store_3.index.terms.size,
          loadedFromDisk: store_3.loadedFromDisk,
          sync: sync,
          tookMs: performance.now() - l,
          storeWasHeld: storeWasHeld,
          openWaitMs: openWaitMs,
          storeOpenMs: p,
          topScore: topScore,
          relevanceFloor: relevanceFloor,
          hitCount: M.length,
          belowFloorCount: belowFloorCount,
          suppressedByFloor: M.length > 0 && belowFloorCount === M.length,
          queryTermCount: queryTermCount
        };
      };
    if (o.aborted) return {
      ranked: [],
      stats: g(store_3.lastSync)
    };
    if (store_3.loadedFromDisk && !store_3.lastSync.scanCompleted) return {
      ranked: [],
      stats: g(store_3.lastSync)
    };
    let I = typeof t === "string" ? Qn(t) : "",
      w = typeof t === "string" ? Xn(jn(Te(I)), store_3.index, () => Q(I)) : ct(t.exact_terms, t.conceptual_keywords),
      T = await vt(store_3, w, s + 5),
      y = c === void 0 ? i === void 0 ? T : T.filter(item => !i(item.path)) : T.filter(item => (i === void 0 || !i(item.path)) && c(item.path)),
      P = await he(n).catch(() => {
        return;
      }),
      v = Ne(n),
      R = [],
      E = [],
      D = await Promise.all(y.map(async item => {
        let M = store_3.index.pathToId.get(item.path),
          z = M === void 0 ? void 0 : store_3.index.docs.get(M),
          path_3 = Ne(n, item.path),
          H = await he(path_3).catch(be => A(be) === "structural" ? void 0 : ge);
        if (H === void 0) {
          if (P !== void 0) R.push(item.path);
          return [];
        }
        if (H === ge) return [];
        if (!H.startsWith((P ?? v) + _e)) {
          if (P !== void 0) E.push(item.path);
          return [];
        }
        let Z = await Bn(path_3).catch(be => A(be) === "structural" ? void 0 : ge);
        if (Z === ge) return [];
        if (Z === void 0) {
          if (P !== void 0) R.push(item.path);
          return [];
        }
        if (!Z.isFile()) {
          if (P !== void 0) E.push(item.path);
          return [];
        }
        return [{
          path: path_3,
          mtimeMs: z?.mtimeMs ?? 0,
          score: item.score
        }];
      }));
    if (R.length > 0 || E.length > 0) {
      let F = await Promise.all(R.map(async item => (await he(Ne(n, item)).then(() => !1, _ => A(_) === "structural")) ? item : void 0)),
        M = await he(n).catch(() => {
          return;
        });
      if (M !== void 0 && M === P) {
        for (let z of E) k(store_3.index, z);
        for (let z of F) if (z !== void 0) k(store_3.index, z);
      }
    }
    let X = D.flat(),
      kt = m();
    return {
      ranked: X.filter(item => item.score >= kt).slice(0, s),
      stats: g(store_3.lastSync, X, w.terms.length)
    };
  };
export { Xo as prewarmMemoryIndex, Jo as searchMemoryFilesWithIndex };