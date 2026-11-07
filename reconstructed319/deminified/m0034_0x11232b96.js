// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function Zv(t) {
  return t;
}
function Pr(t) {
  return t;
}
var SWt = "hook-agent-";
function lK(t) {
  return typeof t === "string" && t.length <= 200 && /^[A-Za-z0-9_][A-Za-z0-9_-]*$/.test(t) && !/^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i.test(t);
}
var r = "[\\w-]{1,63}",
  regExp = new RegExp(`^${r}$`),
  u = /^[\w-]{1,128}$/;
function hB(t) {
  return u.test(t);
}
var regExp_2 = new RegExp(`^a(?:${r}-)?[0-9a-f]{16}$`);
function hm(t) {
  return regExp_2.test(t) ? t : null;
}
import { createHash as i, randomBytes as a, randomUUID as Jae } from "crypto";
var g = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  d = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function eUr(t) {
  return d.test(t);
}
function wP(t, o) {
  let f = Buffer.from(o.replace(/-/g, ""), "hex"),
    n = i("sha1").update(f).update(Buffer.from(t, "utf8")).digest();
  n[6] = n[6] & 15 | 80, n[8] = n[8] & 63 | 128;
  let e = n.subarray(0, 16).toString("hex");
  return `${e.slice(0, 8)}-${e.slice(8, 12)}-${e.slice(12, 16)}-${e.slice(16, 20)}-${e.slice(20, 32)}`;
}
function Nt(t) {
  if (typeof t !== "string") return null;
  return g.test(t) ? t : null;
}
function _S(t) {
  if (t && !regExp.test(t)) t = t.replace(/[^\w-]/g, "").slice(0, 63);
  let o = a(8).toString("hex");
  return t ? `a${t}-${o}` : `a${o}`;
}
export { Jae, Zv, Pr, SWt, lK, hB, hm, eUr, wP, Nt, _S };