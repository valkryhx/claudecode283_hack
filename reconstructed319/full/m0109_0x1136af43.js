// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
var a = null,
  s = null,
  u = null;

function Ita() {
  if (!u) u = new Intl.DisplayNames(["en"], {
    type: "language"
  });
  return u
}

function Sa() {
  if (!a) a = new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  });
  return a
}

function t7(e) {
  if (!e) return "";
  return Sa().segment(e)[Symbol.iterator]().next().value?.segment ?? ""
}

function jte(e) {
  if (!e) return "";
  let t = "";
  for (let {
      segment: r
    }
    of Sa().segment(e)) t = r;
  return t
}

function cae(e) {
  if (!e) return 0;
  let t = 0;
  for (let r of Sa().segment(e)) t++;
  return t
}

function mxe(e) {
  if (!e) return [];
  return Array.from(Sa().segment(e), (t) => t.segment)
}

function kFr(e) {
  if (e.length < 2) return e;
  let t = e.join("");
  if (!y(t)) return e;
  let r = [],
    n = "",
    i = 0,
    o = e[0].length;
  for (let {
      segment: h,
      index: I
    }
    of Sa().segment(t)) {
    while (I >= o && i < e.length - 1) r.push(n), n = "", i++, o += e[i].length;
    n += h
  }
  r.push(n);
  while (r.length < e.length) r.push("");
  return r
}

function y(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r >= 128 || r === 13) return !0
  }
  return !1
}

function g1s() {
  if (!s) s = new Intl.Segmenter(void 0, {
    granularity: "word"
  });
  return s
}

function Mta(e) {
  let t = e.trim();
  if (t === "") return 0;
  let r = t.split(/\s+/).length,
    n = 0;
  for (let i of g1s().segment(t))
    if (i.isWordLike) n++;
  return Math.max(r, n)
}
var m = new Map;

function y1s(e, t) {
  let r = `${e}:${t}`,
    n = m.get(r);
  if (!n) n = new Intl.RelativeTimeFormat("en", {
    style: e,
    numeric: t
  }), m.set(r, n);
  return n
}
var g = null;

function Dta() {
  if (!g) g = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return g
}
var l = null;

function Lta() {
  if (l === null) try {
    let e = Intl.DateTimeFormat().resolvedOptions().locale;
    l = new Intl.Locale(e).language
  } catch {
    l = void 0
  }
  return l
}
var f = new WeakMap;

function p(e) {
  if (!e) return "";
  let t = f.get(e);
  if (t !== void 0) return t;
  let r = Object.entries(e).sort(([i], [o]) => i < o ? -1 : i > o ? 1 : 0),
    n = "";
  for (let [i, o] of r) n += `${i}=${String(o)};`;
  return f.set(e, n), n
}
var c = new Map;

function xqe(e, t) {
  return t ? {
    ...e,
    timeZone: t
  } : e
}

function nY(e, t) {
  let r = `${e??""}|${p(t)}`,
    n = c.get(r);
  if (!n) n = new Intl.DateTimeFormat(e, t), c.set(r, n);
  return n
}
var d = new Map;

function Nta(e, t) {
  let r = `${e??""}|${p(t)}`,
    n = d.get(r);
  if (!n) n = new Intl.NumberFormat(e, t), d.set(r, n);
  return n
}
export {
  Ita,
  Sa,
  t7,
  jte,
  cae,
  mxe,
  kFr,
  g1s,
  Mta,
  y1s,
  Dta,
  Lta,
  xqe,
  nY,
  Nta
};
