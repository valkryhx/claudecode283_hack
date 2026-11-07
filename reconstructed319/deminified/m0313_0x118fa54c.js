// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { or } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { L5 } from "B:/~BUN/root/chunk-n8cnxns2.js";
var dAr = String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,
  regExp = new RegExp(`^[${dAr}]+`, "u");
function _Cs(t) {
  return t.replace(regExp, "");
}
function i_o(t, e = SCs(t)) {
  return or(t) || IFt(t) || L5.test(e[0]) || e.map(_Cs).some(item => or(item) || IFt(item));
}
function IFt(t) {
  return !1;
}
function bCs(t) {
  let e = t.slice(7);
  return i_o(e) || i_o(e.slice(1));
}
var i = /(?:%[0-9A-Fa-f]{2}){1,512}/g,
  u = /^%[0-9A-Fa-f]{2}/;
function SCs(t) {
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
export { dAr, _Cs, i_o, IFt, bCs, SCs };