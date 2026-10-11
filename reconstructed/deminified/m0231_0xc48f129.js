// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Dn } from "B:/~BUN/root/chunk-54p0h65d.js";
import { tM } from "B:/~BUN/root/chunk-y04k89s2.js";
var Pin = String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,
  regExp = new RegExp(`^[${Pin}]+`, "u");
function qPr(t) {
  return t.replace(regExp, "");
}
function qjn(t, e = YPr(t)) {
  return Dn(t) || f3e(t) || tM.test(e[0]) || e.map(qPr).some(item => Dn(item) || f3e(item));
}
function f3e(t) {
  return !1;
}
function KPr(t) {
  let e = t.slice(7);
  return qjn(e) || qjn(e.slice(1));
}
var i = /(?:%[0-9A-Fa-f]{2}){1,512}/g,
  u = /^%[0-9A-Fa-f]{2}/;
function YPr(t) {
  if (!t.includes("%")) return [t, t];
  let textDecoder = new TextDecoder("utf-8", {
    fatal: !1,
    ignoreBOM: !0
  });
  return [t.replace(i, (n, r) => {
    let o = r + n.length;
    return textDecoder.decode(s(n), {
      stream: u.test(t.slice(o, o + 3))
    });
  }), t.replace(i, n => Array.from(s(n), r => String.fromCharCode(r)).join(""))];
}
function s(t) {
  return Uint8Array.from(t.slice(1).split("%"), e => parseInt(e, 16));
}
export { Pin, qPr, qjn, f3e, KPr, YPr };