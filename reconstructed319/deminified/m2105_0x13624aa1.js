// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { bG } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { En } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { YTo } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { p0r } from "B:/~BUN/root/chunk-jgwwv4gf.js";
import { jM, h3e } from "B:/~BUN/root/chunk-9fbg6p79.js";
import { o5e, MEn, cmi } from "B:/~BUN/root/chunk-bf2nn51k.js";
import { VRs, lRe, Ki } from "B:/~BUN/root/chunk-4jfmvmew.js";
import { Sa } from "B:/~BUN/root/chunk-63176a0t.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
var A = 8,
  tor = 120,
  x = 40,
  _ui = x + A,
  bui = tor + A,
  K = (1 + VRs) * 2,
  P8r = 400,
  S = "  ",
  g = '" +',
  m3e = "* ",
  O8r = `${m3e}Name may not be what it looks like.`,
  z = /[\u1735\u2041\u2044\u2215\u22F0\u22F1\u233F-\u2342\u2571\u27CB\u29F6-\u29F8\u2AFB\u2AFD\u2E17\u2E4A\u2E5D\u2F03\u3033-\u3035\u31CF\u31D2\u31D3\uA718\uFF9E\uFF9F\uFFFD\u{16FE4}\u{1D23A}\u{1F67C}\u{1F67D}\u{1FBA0}-\u{1FBA3}]/u,
  G = /[\u3099\u309A]/,
  H = /\p{Script=Latin}/u,
  T = /\p{M}/u,
  b = [/\p{Script=Arabic}/u, /\p{Script=Armenian}/u, /\p{Script=Bengali}/u, /\p{Script=Cyrillic}/u, /\p{Script=Devanagari}/u, /\p{Script=Ethiopic}/u, /\p{Script=Georgian}/u, /\p{Script=Greek}/u, /\p{Script=Gujarati}/u, /\p{Script=Gurmukhi}/u, /\p{Script=Hangul}/u, /\p{Script=Han}/u, /\p{Script=Hebrew}/u, /\p{Script=Hiragana}/u, /\p{Script=Katakana}/u, /\p{Script=Kannada}/u, /\p{Script=Khmer}/u, /\p{Script=Lao}/u, /\p{Script=Latin}/u, /\p{Script=Malayalam}/u, /\p{Script=Myanmar}/u, /\p{Script=Oriya}/u, /\p{Script=Sinhala}/u, /\p{Script=Tamil}/u, /\p{Script=Telugu}/u, /\p{Script=Thaana}/u, /\p{Script=Thai}/u, /\p{Script=Tibetan}/u],
  regExp = new RegExp(`(?![\\p{Script=Common}\\p{Script=Inherited}${b.map(item => item.source).join("")}])\\p{L}`, "u"),
  B = "\xAA\xBA",
  L = /^(?:(?=\p{L})\p{Script=Latin}\p{M}*)+$/u,
  U = /(?=\p{L})\p{Script=Latin}/u,
  M = /\p{Nd}/u,
  X = /[\p{L}\p{M}\p{Nd}]/u,
  F = /(?![\p{Script=Latin}\p{Script=Common}\p{Script=Inherited}])\p{L}/u,
  h = /^\p{L}/u,
  R = /\p{Lm}/u,
  v = /\p{Script=Common}/u,
  O = /[\p{Script=Latin}\p{Script=Common}]/u,
  E = /[\uff21-\uff3a\uff41-\uff5a]/,
  I = /[\uff10-\uff19]/,
  w = [/\p{Script=Cyrillic}/u, /\p{Script=Greek}/u, /\p{Script=Armenian}/u, /\p{Script=Cherokee}/u, /\p{Script=Coptic}/u, /\p{Script=Lisu}/u],
  J = /(?!\p{Script=Inherited})[\p{scx=Arabic}\p{scx=Hebrew}\p{scx=Syriac}\p{scx=Thaana}\p{scx=Nko}\p{scx=Samaritan}\p{scx=Mandaic}\p{scx=Adlam}\p{scx=Hanifi_Rohingya}\p{scx=Yezidi}\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u,
  y = "\u0131",
  Y = /^(?:[\p{L}\p{N}][\p{L}\p{M}]*|[\p{P}\p{S}]|\p{Extended_Pictographic}\p{Emoji_Modifier}?|\p{Regional_Indicator}{2})$/u;
function Sui(e) {
  let i = Math.min(tor, e - A);
  return i < x ? void 0 : i;
}
function I8r(e, i) {
  let {
    rows: rows,
    isMarked: isMarked
  } = _(e, i);
  return rows.length + (isMarked ? 1 : 0) <= jM;
}
function I8o(e) {
  return _(e, tor).isMarked;
}
function wui(e, i, a) {
  let {
    rows: rows_2,
    isMarked: isMarked_2
  } = _(e, a);
  return [`${[`This call sends ${e.length} ${P(e.length, "file")} from this computer`, `to the connector ${o5e(i)} and to the storage that connector chooses:`, ...rows_2].join(`
`)}.`, ...(isMarked_2 ? [O8r] : [])].join(`
`);
}
function kui(e) {
  return k(e)?.written;
}
function vui(e) {
  return k(e)?.liesAt;
}
function k(e) {
  let i = e.split(`
`).slice(2),
    a = i.at(-1) === O8r,
    u = a ? i.slice(0, -1) : i,
    written = [],
    liesAt = [],
    o = !1;
  for (let t = 0; t < u.length; t++) {
    let f = u[t];
    if (!f.startsWith(m3e)) continue;
    o = !0;
    let l = f.startsWith(`${m3e}the file at "`);
    if (!l && !f.startsWith(`${m3e}"`)) return;
    while (f.endsWith(g)) {
      if (t++, u[t]?.startsWith(`${S}"`) !== !0) return;
      f = `${f.slice(0, -g.length)}${u[t].slice(S.length + 1)}`;
    }
    let r = et(f.slice(f.indexOf('"'), f.lastIndexOf('"') + 1), !1);
    if (typeof r !== "string") return;
    (l ? liesAt : written).push(r);
  }
  return a === o ? {
    written: written,
    liesAt: liesAt
  } : void 0;
}
function _(e, i) {
  let a = e.map(item => ({
      written: MEn(item.path),
      lies: cmi(item.path, En(item.realPath)) ? item.realPath : void 0,
      size: en(item.size)
    })),
    u = a.flatMap(({
      written: written_2,
      lies: lies
    }) => lies === void 0 ? [written_2] : [written_2, lies]),
    s = new Map(lRe(u, Z).map((item, index) => [u[index], item.replace(/[<>&`]|'{2,}/g, bG)])),
    n = new Set(u.filter(q));
  return {
    rows: a.flatMap(({
      written: written_3,
      lies: lies_2,
      size: size
    }) => [...N(n.has(written_3) ? m3e : "", s.get(written_3), ` (${size})`, i), ...(lies_2 === void 0 ? [] : N(`${n.has(lies_2) ? m3e : S}the file at `, s.get(lies_2), "", i))]),
    isMarked: n.size > 0
  };
}
function Z(e) {
  let {
      letters: letters,
      isCodedForLooks: isCodedForLooks
    } = D(e),
    u = `"${letters.map((item, index) => {
      let o = item.normalize("NFKC"),
        t = `${item}${o}`;
      return !J.test(item) && !isCodedForLooks[index] && Y.test(item) && h3e(item) <= K && ce(item) > 0 && !G.test(o) && !t.includes("/") && !z.test(t) && YTo(t) === t && Array.from(Sa().segment(`"${item}"`)).length === 3 ? item : item === '"' || item === "\\" ? `\\${item}` : YTo(item, " ").replace(/[^ -~]/gu, bG);
    }).join("")}"`;
  return Ki(u).text === u ? u : o5e(e);
}
function D(e) {
  let letters_2 = Array.from(Sa().segment(e), ({
      segment: segment
    }) => segment),
    scripts = letters_2.map(item => {
      let o = String.fromCodePoint(item.codePointAt(0) ?? 0);
      if (H.test(o)) return 0;
      let t = w.findIndex(item => item.test(o));
      return t === -1 ? void 0 : t + 1;
    }),
    isCodedForLooks_2 = letters_2.map((item, index) => scripts[index] === 0 && item !== y && Object.hasOwn(p0r.table, String.fromCodePoint(item.codePointAt(0) ?? 0))),
    s = 0;
  while (s < letters_2.length) {
    let n = s;
    while (n < letters_2.length && h.test(letters_2[n])) n++;
    if (new Set(scripts.slice(s, n).filter(item => item !== void 0)).size > 1) {
      for (let t = s; t < n; t++) if (scripts[t] !== void 0 && scripts[t] !== 0) isCodedForLooks_2[t] = !0;
    }
    s = Math.max(n, s + 1);
  }
  return {
    letters: letters_2,
    scripts: scripts,
    isCodedForLooks: isCodedForLooks_2
  };
}
function q(e) {
  let {
    letters: letters_3,
    scripts: scripts_2,
    isCodedForLooks: isCodedForLooks_3
  } = D(e);
  if (isCodedForLooks_3.includes(!0) || regExp.test(e) || letters_3.some((item, index) => scripts_2[index] !== void 0 && h.test(item) && T.test(item.normalize("NFC")))) return !0;
  return e.split(/[\\/]/).some(item => {
    let n = Array.from(item, character => {
      let p = M.test(character),
        c = character.codePointAt(0) ?? 0,
        d = 0;
      while (p && M.test(String.fromCodePoint(c - d - 1))) d++;
      return {
        character: character,
        reading: Q(character),
        digit: p ? d % 10 : void 0
      };
    });
    if (!n.some(({
      reading: reading
    }) => F.test(reading)) && n.some(({
      character: character_2,
      reading: reading_2
    }) => reading_2 !== character_2 && L.test(reading_2))) return !0;
    if (w.some(item => {
      let p = n.filter(({
        character: character_3
      }) => item.test(character_3) && h.test(character_3) && !R.test(character_3));
      return p.length > 0 && p.every(({
        reading: reading_3
      }) => L.test(reading_3));
    })) return !0;
    let o = [],
      t = [o];
    for (let r of n) if (X.test(r.character) && !F.test(r.reading)) o.push(r);else o = [], t.push(o);
    let f = new Set();
    for (let r of t) {
      let p = r.filter(({
          character: character_4,
          reading: reading_4
        }) => U.test(reading_4) && O.test(character_4)),
        c = r.filter(({
          digit: digit
        }) => digit !== void 0);
      if (p.length > 0) {
        let d = p.every(({
          character: character_5
        }) => E.test(character_5));
        if (c.some(({
          character: character_6
        }) => character_6 > "\x7F" && !(d && I.test(character_6)))) return !0;
      } else if (c.every(({
        character: character_7,
        digit: digit_2
      }) => digit_2 === 0 && !v.test(character_7))) for (let {
        character: character_8
      } of c) f.add(character_8);
    }
    if (Array.from(f).some(item => {
      let p = b.find(c => c.test(item));
      return p === void 0 || !n.some(({
        character: character_9,
        digit: digit_3
      }) => p.test(character_9) && (h.test(character_9) && !R.test(character_9) || (digit_3 ?? 0) > 0));
    })) return !0;
    let l;
    for (let r of n) {
      if (T.test(r.character)) continue;
      let p = L.test(r.reading) && O.test(r.character);
      if (p && l !== void 0 && (r.reading !== r.character || l.reading !== l.character) && !(E.test(r.character) && E.test(l.character))) return !0;
      l = p ? r : void 0;
    }
    return n.some(({
      character: character_10,
      reading: reading_5,
      digit: digit_4
    }) => digit_4 !== void 0 && reading_5 !== character_10 && !I.test(character_10));
  });
}
function Q(e) {
  if (e <= "\x7F" || B.includes(e)) return e;
  return C(e) ?? Array.from(e.normalize("NFKC"), i => C(i) ?? i).join("");
}
function C(e) {
  let [i = "", ...a] = e.normalize("NFD");
  return i !== y && Object.hasOwn(p0r.table, i) ? `${p0r.table[i]}${a.join("")}` : void 0;
}
function N(e, i, a, u) {
  let s = i.lastIndexOf('"'),
    n = i.slice(1, s),
    o = n.split(/(\\u[0-9a-f]{4}|\\.)/).flatMap((item, index) => index % 2 === 1 ? [item] : Array.from(Sa().segment(item), ({
      segment: segment_2
    }) => segment_2)),
    t = [],
    f = `${e}"`,
    l = "",
    r = h3e(n) + 1;
  for (let d of o) {
    let m = h3e(f) + h3e(l);
    if (l !== "" && m + r > u - 1 && m + h3e(d) + h3e(g) > u - 1) t.push(`${f}${l}${g}`), f = `${S}"`, l = "";
    l += d, r -= h3e(d);
  }
  let p = `${f}${l}"`,
    c = `${i.slice(s + 1)}${a}`;
  return c !== "" && h3e(p) + h3e(c) > u - 1 ? [...t, p, `${S}${c.trimStart()}`] : [...t, `${p}${c}`];
}
export { tor, _ui, bui, P8r, m3e, O8r, Sui, I8r, I8o, wui, kui, vui };