// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { WGt, b5 } from "B:/~BUN/root/chunk-w5s5fy4b.js";
import { rhn } from "B:/~BUN/root/chunk-nfc48pcb.js";
var a = new Map(Object.entries({
  keyword: pe.blue,
  built_in: pe.cyan,
  type: pe.cyan.dim,
  literal: pe.blue,
  number: pe.green,
  regexp: pe.red,
  string: pe.red,
  subst: pe.reset,
  symbol: pe.reset,
  class: pe.blue,
  function: pe.yellow,
  title: pe.reset,
  "title.function": pe.yellow,
  "title.class": pe.blue,
  params: pe.reset,
  comment: pe.green,
  doctag: pe.green,
  meta: pe.grey,
  "meta-keyword": pe.reset,
  "meta-string": pe.reset,
  "meta.keyword": pe.reset,
  "meta.string": pe.reset,
  section: pe.reset,
  tag: pe.grey,
  name: pe.blue,
  attr: pe.cyan,
  attribute: pe.reset,
  variable: pe.reset,
  bullet: pe.reset,
  code: pe.reset,
  emphasis: pe.italic,
  strong: pe.bold,
  link: pe.underline,
  quote: pe.reset,
  addition: pe.green,
  deletion: pe.red
}));
function u(e) {
  let t = e.replace(/^hljs-/, "");
  for (;;) {
    let r = a.get(t);
    if (r) return r;
    let n = t.lastIndexOf(".");
    if (n < 0) return;
    t = t.slice(0, n);
  }
}
function c(e) {
  let t = [],
    r = [];
  l(e, t, r);
  let n = rhn(r);
  if (n === r) return;
  t.forEach(({
    siblings: siblings,
    at: at
  }, index) => {
    siblings[at] = n[index];
  });
}
function l(e, t, r) {
  e.children.forEach((item, i) => {
    if (typeof item === "string") t.push({
      siblings: e.children,
      at: i
    }), r.push(item);else l(item, t, r);
  });
}
function g(e) {
  if (typeof e === "string") return e;
  let t = e.children.map(g).join(""),
    r = e.scope ?? e.kind,
    n = r ? u(r) : void 0;
  return n ? n(t) : t;
}
function highlight(e, t) {
  let r = t?.language;
  if (!r) return e;
  try {
    let language = b5(r);
    if (!language) return e;
    let i = WGt().highlight(e, {
        language: language,
        ignoreIllegals: !0
      }),
      s = i._emitter ?? i.emitter,
      o = s?.rootNode ?? s?.root;
    if (!o || typeof o === "string") return e;
    return c(o), o.children.map(g).join("");
  } catch {
    return e;
  }
}
function supportsLanguage(e) {
  return b5(e) !== null;
}
var p = {
  highlight: highlight,
  supportsLanguage: supportsLanguage
};
function JD() {
  return p;
}
export { JD };