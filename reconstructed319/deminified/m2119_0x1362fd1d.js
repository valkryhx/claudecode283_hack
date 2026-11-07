// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { thr } from "B:/~BUN/root/chunk-bfwh5k9e.js";
import { Uf } from "B:/~BUN/root/chunk-zy4xrndc.js";
function p_n() {
  return thr() !== "Apple_Terminal";
}
function* i(n) {
  for (let e of n) if (e.type === "assistant" && Array.isArray(e.message.content)) {
    for (let s of e.message.content) if (s.type === "tool_use" && Uf.includes(s.name)) {
      let {
        input: input
      } = s;
      if (typeof input === "object" && input !== null && "command" in input && typeof input.command === "string") yield input.command;
    }
  }
}
function _7n(n) {
  let e = new Set();
  for (let s of i(n)) {
    let t = m(s);
    if (t) e.add(t);
  }
  return e;
}
var a = /https?:\/\/([^\s/?#'"`<>\\)\];&|(,]+)/gi;
function f(n) {
  if (!n) return [];
  let e = [];
  for (let s of n.matchAll(a)) {
    let t = s[1].toLowerCase(),
      o = t.lastIndexOf("@");
    if (o !== -1) t = t.slice(o + 1);
    let r = t.indexOf(":");
    if (r !== -1) t = t.slice(0, r);
    if (t) e.push(t);
  }
  return e;
}
function b7n(n) {
  let e = new Set();
  for (let s of i(n)) for (let t of f(s)) e.add(t);
  return e;
}
function sri(n) {
  let e = new Set();
  for (let s of n) if (s.type === "assistant" && Array.isArray(s.message.content)) {
    for (let t of s.message.content) if (t.type === "tool_use") e.add(t.name);
  }
  return e;
}
var c = new Set(["sudo"]);
function m(n) {
  if (!n) return;
  let e = n.trim().split(/\s+/);
  for (let s of e) {
    if (/^[A-Za-z_]\w*=/.test(s)) continue;
    if (c.has(s)) continue;
    return s;
  }
  return;
}
export { p_n, _7n, b7n, sri };