// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  dY,
  Tae
} from "B:/~BUN/root/chunk-6wyrmmex.js";

function s(r) {
  return r != null && typeof r == "object"
}
var mG = s;
var l = Array.isArray,
  hS = l;
var y = "[object Symbol]";

function b(r) {
  return typeof r == "symbol" || mG(r) && Tae(r) == y
}
var hG = b;

function u(r, t) {
  var o = -1,
    i = r == null ? 0 : r.length,
    n = Array(i);
  while (++o < i) n[o] = t(r[o], o, r);
  return n
}
var l7 = u;
var a = 1 / 0,
  e = dY ? dY.prototype : void 0,
  f = e ? e.toString : void 0;

function m(r) {
  if (typeof r == "string") return r;
  if (hS(r)) return l7(r, m) + "";
  if (hG(r)) return f ? f.call(r) : "";
  var t = r + "";
  return t == "0" && 1 / r == -a ? "-0" : t
}
var p = m;

function d(r) {
  return r == null ? "" : p(r)
}
var mme = d;
export {
  l7,
  hS,
  mG,
  hG,
  mme
};
