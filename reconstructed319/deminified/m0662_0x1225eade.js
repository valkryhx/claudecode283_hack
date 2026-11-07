// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { IC } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { l5n, N8s, ohe } from "B:/~BUN/root/chunk-0hrp5wpd.js";
import { kFr } from "B:/~BUN/root/chunk-63176a0t.js";
var l = "\x1B[0m";
function n(e) {
  return Se.level > 0 && e.includes(l) ? l + e.replace(/\r?\n/g, `${l}$&${l}`) + l : Se.reset(e);
}
var d = new Map(Object.entries({
  keyword: Se.blue,
  built_in: Se.cyan,
  type: Se.cyan.dim,
  literal: Se.blue,
  number: Se.green,
  regexp: Se.red,
  string: Se.red,
  subst: n,
  symbol: n,
  class: Se.blue,
  function: Se.yellow,
  title: n,
  "title.function": Se.yellow,
  "title.class": Se.blue,
  params: n,
  comment: Se.green,
  doctag: Se.green,
  meta: Se.grey,
  "meta-keyword": n,
  "meta-string": n,
  "meta.keyword": n,
  "meta.string": n,
  section: n,
  tag: Se.grey,
  name: Se.blue,
  attr: Se.cyan,
  attribute: n,
  variable: n,
  bullet: n,
  code: n,
  emphasis: Se.italic,
  strong: Se.bold,
  link: Se.underline,
  quote: n,
  addition: Se.green,
  deletion: Se.red
}));
function h(e) {
  let t = IC(e, "hljs-");
  for (;;) {
    let r = d.get(t);
    if (r) return r;
    let i = t.lastIndexOf(".");
    if (i < 0) return;
    t = t.slice(0, i);
  }
}
function y(e) {
  let t = [],
    r = [];
  u(e, t, r);
  let i = kFr(r);
  if (i === r) return;
  t.forEach(({
    siblings: siblings,
    at: at
  }, index) => {
    siblings[at] = i[index];
  });
}
function u(e, t, r) {
  e.children.forEach((item, o) => {
    if (typeof item === "string") t.push({
      siblings: e.children,
      at: o
    }), r.push(item);else u(item, t, r);
  });
}
function m(e) {
  if (typeof e === "string") return e;
  let t = e.children.map(m).join(""),
    r = e.scope ?? e.kind,
    i = r ? h(r) : void 0;
  return i ? i(t) : t;
}
function highlight(e, t) {
  let r = t?.language;
  if (!r) return e;
  try {
    let language = ohe(r);
    if (!language) return e;
    let o = t?.work,
      s = o ? N8s(o, c => c.highlight(e, {
        language: language,
        ignoreIllegals: !0
      })) : l5n().highlight(e, {
        language: language,
        ignoreIllegals: !0
      }),
      g = s._emitter ?? s.emitter,
      a = g?.rootNode ?? g?.root;
    if (!a || typeof a === "string") return e;
    return y(a), a.children.map(m).join("");
  } catch {
    return e;
  }
}
function supportsLanguage(e) {
  return ohe(e) !== null;
}
var S = {
  highlight: highlight,
  supportsLanguage: supportsLanguage
};
function hK() {
  return S;
}
export { hK };