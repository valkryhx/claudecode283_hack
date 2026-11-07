// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Q,
  Pa,
  I5,
  Ey,
  Yr,
  oy
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  ib,
  Nn
} from "B:/~BUN/root/chunk-jdtvghyw.js";
var s = /[\p{Pi}\p{Pf}\u201a\u201e\u201f\u2e32\u2e34\u2e41\u2e49\u2e42\u3003\u300c-\u300f\ufe41-\ufe44\u301d-\u301f\u275b-\u2760\u276e\u276f\u{1f676}-\u{1f678}\u2032-\u2037\u2057\u02b9\u02ba\u0374\u02bd-\u02bf\u02c8\u02d2\u02d3\u02ca\u02ce\u02cf\u02dd\u02f4-\u02f6\u02ee\u00b4\u0384\u0385\u1fbd\u1fbf\u1fcd-\u1fcf\u1fdd-\u1fdf\u1ffd\u1ffe\u05f3\u05f4\u0559-\u055b\u07f4\u07f5\ua67f\ua78b\ua78c\uff02\uff07\uff62\uff63]/gu,
  o = /(?<![^\s\p{P}])\p{M}+/gu;

function T_(n) {
  return Nn(IHe(Ey(n))).replace(/ {2,}/g, " ").trim()
}
var p = /\x1b\[[\x30-\x3f]*[\x20-\x2f]*[\x40-\x7e]|\x1b[\]PX^_][^\x1b\x07]*(?:\x07|\x1b\\)/g,
  a = 4;

function IHe(n) {
  let e = n;
  for (let t = 0; t < a; t++) {
    let r = e.replace(p, "");
    if (r === e) break;
    e = r
  }
  return e
}

function Et(n, e = 160) {
  return Nte(T_(l(n, e)).normalize("NFC").replace(/[`\uff40\u02cb\u1fef\u2035]/g, "'").replace(o, ""), e)
}
var x = new RegExp(`[^\\S ]|[${ib}]`, "u");

function A1t(n, e) {
  return n.length <= e && !x.test(n) && Et(n, e) === n.replaceAll("`", "'")
}

function zln(n, e = 2000) {
  let t = T_(l(n, e));
  return t.length > e ? `${Q(t,e)}\u2026` : t
}

function Nte(n, e = 2000) {
  return n.length > e ? `${Q(n,e)}\u2026` : n
}

function q4(n, e = 160) {
  let t = Ey(n).replace(/[\p{Cc}\p{Cf}]/gu, (r) => /\s/.test(r) ? r : "").replace(/\s+/g, " ").trim();
  return t.length > e ? `${Q(t,e)}\u2026` : t
}

function Ji(n, e = 300) {
  return Et(n ?? "", e)
}

function Qe(n, e = 300) {
  return Et(n ?? "", e).replace(s, "").replace(/[\u02bb\u02bc]/g, "\u2019").replace(/"/g, "\u201D").replace(/'/g, "\u2019").replace(o, "")
}

function Wd(n, e) {
  let t = Yr(oy(Ey(n).replace(/\s+/g, " "))).normalize("NFC").replace(s, "'").replace(/["\u02BB\u02BC]/g, "'").replace(o, "").trim();
  if (!t) return "";
  return `\u201C${e?I5(t,e.head,e.tail,()=>"\u2026"):t}\u201D`
}

function zU(n) {
  let e = Wd(n).replace(/[`\uff40\u02cb\u1fef\u2035]/g, "'").replace(o, "");
  return e === "" ? "(no printable name)" : e === `\u201C${n}\u201D` ? e : `${e} (not its exact spelling)`
}

function mea(n, e) {
  let t = Wd(n) || "\u201C\u201D";
  return t.length <= e ? t : Wd(n, {
    head: e - 3,
    tail: 0
  })
}

function SUs(n, {
  head: e,
  tail: t
}) {
  if (n.length <= e + t) return n;
  let r = e > 0 ? Q(n, e) : "",
    u = t > 0 ? Pa(n, t) : "",
    i = (r.match(/\u201C/g)?.length ?? 0) > (r.match(/\u201D/g)?.length ?? 0),
    c = u.indexOf("\u201D"),
    f = u.indexOf("\u201C"),
    g = c !== -1 && (f === -1 || c < f);
  return `${r}${i===g?"\u2026":i?"\u2026\u201D\u2026":"\u2026\u201C\u2026"}${u}`
}

function l(n, e) {
  let t = Q(n, e * 8);
  if (t.length === n.length) return t;
  let r = /\x1b(?:[\]PX^_][^\x1b\x07]*\x1b?|\[[\x30-\x3f]*[\x20-\x2f]*)$/.exec(t);
  if (r === null) return t;
  let u = n.slice(r.index);
  return (u[1] === "[" ? /^\x1b\[[\x30-\x3f]*[\x20-\x2f]*[\x40-\x7e]/.test(u) : /^\x1b[\]PX^_][^\x1b\x07]*(?:\x07|\x1b\\)/.test(u)) ? t.slice(0, r.index) : t
}

function oP(n, {
  isComposed: e
} = {}) {
  let t = d(n);
  return e?.(n) ? zln(t, 2000) : Et(t, 500)
}
export {
  T_,
  IHe,
  Et,
  A1t,
  zln,
  Nte,
  q4,
  Ji,
  Qe,
  Wd,
  zU,
  mea,
  SUs,
  oP
};
