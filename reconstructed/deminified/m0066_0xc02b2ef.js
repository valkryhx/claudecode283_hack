// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var a = null,
  s = null,
  u = null;
function B$o() {
  if (!u) u = new Intl.DisplayNames(["en"], {
    type: "language"
  });
  return u;
}
function ya() {
  if (!a) a = new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  });
  return a;
}
function q8e(e) {
  if (!e) return "";
  return ya().segment(e)[Symbol.iterator]().next().value?.segment ?? "";
}
function v2(e) {
  if (!e) return "";
  let t = "";
  for (let {
    segment: segment
  } of ya().segment(e)) t = segment;
  return t;
}
function AY(e) {
  if (!e) return 0;
  let t = 0;
  for (let r of ya().segment(e)) t++;
  return t;
}
function qne(e) {
  if (!e) return [];
  return Array.from(ya().segment(e), t => t.segment);
}
function rhn(e) {
  if (e.length < 2) return e;
  let t = e.join("");
  if (!y(t)) return e;
  let r = [],
    n = "",
    i = 0,
    o = e[0].length;
  for (let {
    segment: segment_2,
    index: index
  } of ya().segment(t)) {
    while (index >= o && i < e.length - 1) r.push(n), n = "", i++, o += e[i].length;
    n += segment_2;
  }
  r.push(n);
  while (r.length < e.length) r.push("");
  return r;
}
function y(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r >= 128 || r === 13) return !0;
  }
  return !1;
}
function tzr() {
  if (!s) s = new Intl.Segmenter(void 0, {
    granularity: "word"
  });
  return s;
}
function j$o(e) {
  let t = e.trim();
  if (t === "") return 0;
  let r = t.split(/\s+/).length,
    n = 0;
  for (let i of tzr().segment(t)) if (i.isWordLike) n++;
  return Math.max(r, n);
}
var m = new Map();
function nzr(style, numeric) {
  let r = `${style}:${numeric}`,
    n = m.get(r);
  if (!n) n = new Intl.RelativeTimeFormat("en", {
    style: style,
    numeric: numeric
  }), m.set(r, n);
  return n;
}
var g = null;
function rzr() {
  if (!g) g = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return g;
}
var l = null;
function W$o() {
  if (l === null) try {
    let locale = Intl.DateTimeFormat().resolvedOptions().locale;
    l = new Intl.Locale(locale).language;
  } catch {
    l = void 0;
  }
  return l;
}
var weakMap = new WeakMap();
function p(e) {
  if (!e) return "";
  let t = weakMap.get(e);
  if (t !== void 0) return t;
  let r = Object.entries(e).sort(([i], [o]) => i < o ? -1 : i > o ? 1 : 0),
    n = "";
  for (let [i, o] of r) n += `${i}=${String(o)};`;
  return weakMap.set(e, n), n;
}
var c = new Map();
function h_e(e, timeZone) {
  return timeZone ? {
    ...e,
    timeZone: timeZone
  } : e;
}
function Kne(e, t) {
  let r = `${e ?? ""}|${p(t)}`,
    n = c.get(r);
  if (!n) n = new Intl.DateTimeFormat(e, t), c.set(r, n);
  return n;
}
var d = new Map();
function z$o(e, t) {
  let r = `${e ?? ""}|${p(t)}`,
    n = d.get(r);
  if (!n) n = new Intl.NumberFormat(e, t), d.set(r, n);
  return n;
}
export { B$o, ya, q8e, v2, AY, qne, rhn, tzr, j$o, nzr, rzr, W$o, h_e, Kne, z$o };