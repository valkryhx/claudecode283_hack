// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { DSn, $re } from "B:/~BUN/root/chunk-b0gxvjar.js";
import { sXn } from "B:/~BUN/root/chunk-pp80ffk4.js";
var s = "\x1B[0m";
function i(t) {
  return he.level > 0 && t.includes(s) ? s + t.replace(/\r?\n/g, `${s}$&${s}`) + s : he.reset(t);
}
var c = new Map(Object.entries({
  keyword: he.blue,
  built_in: he.cyan,
  type: he.cyan.dim,
  literal: he.blue,
  number: he.green,
  regexp: he.red,
  string: he.red,
  subst: i,
  symbol: i,
  class: he.blue,
  function: he.yellow,
  title: i,
  "title.function": he.yellow,
  "title.class": he.blue,
  params: i,
  comment: he.green,
  doctag: he.green,
  meta: he.grey,
  "meta-keyword": i,
  "meta-string": i,
  "meta.keyword": i,
  "meta.string": i,
  section: i,
  tag: he.grey,
  name: he.blue,
  attr: he.cyan,
  attribute: i,
  variable: i,
  bullet: i,
  code: i,
  emphasis: he.italic,
  strong: he.bold,
  link: he.underline,
  quote: i,
  addition: he.green,
  deletion: he.red
}));
function m(t) {
  let e = t.replace(/^hljs-/, "");
  for (;;) {
    let r = c.get(e);
    if (r) return r;
    let n = e.lastIndexOf(".");
    if (n < 0) return;
    e = e.slice(0, n);
  }
}
function d(t) {
  let e = [],
    r = [];
  p(t, e, r);
  let n = sXn(r);
  if (n === r) return;
  e.forEach(({
    siblings: siblings,
    at: at
  }, index) => {
    siblings[at] = n[index];
  });
}
function p(t, e, r) {
  t.children.forEach((item, o) => {
    if (typeof item === "string") e.push({
      siblings: t.children,
      at: o
    }), r.push(item);else p(item, e, r);
  });
}
function u(t) {
  if (typeof t === "string") return t;
  let e = t.children.map(u).join(""),
    r = t.scope ?? t.kind,
    n = r ? m(r) : void 0;
  return n ? n(e) : e;
}
function highlight(t, e) {
  let r = e?.language;
  if (!r) return t;
  try {
    let language = $re(r);
    if (!language) return t;
    let o = DSn().highlight(t, {
        language: language,
        ignoreIllegals: !0
      }),
      a = o._emitter ?? o.emitter,
      l = a?.rootNode ?? a?.root;
    if (!l || typeof l === "string") return t;
    return d(l), l.children.map(u).join("");
  } catch {
    return t;
  }
}
function supportsLanguage(t) {
  return $re(t) !== null;
}
var h = {
  highlight: highlight,
  supportsLanguage: supportsLanguage
};
function m1() {
  return h;
}
export { m1 };