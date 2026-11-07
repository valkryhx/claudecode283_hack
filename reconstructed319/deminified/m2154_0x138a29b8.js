// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _we, nme, pnt, mnt, cPo, Vte, yxe } from "B:/~BUN/root/chunk-3cca501e.js";
import { hS } from "B:/~BUN/root/chunk-99vcrndq.js";
var i = "[object Map]",
  f = "[object Set]",
  p = Object.prototype,
  e = p.hasOwnProperty;
function m(r) {
  if (r == null) return !0;
  if (Vte(r) && (hS(r) || typeof r == "string" || typeof r.splice == "function" || nme(r) || pnt(r) || _we(r))) return !r.length;
  var t = yxe(r);
  if (t == i || t == f) return !r.size;
  if (mnt(r)) return !cPo(r).length;
  for (var o in r) if (e.call(r, o)) return !1;
  return !0;
}
var e4n = m;
export { e4n };