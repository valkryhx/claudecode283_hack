// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { jn } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Z2 } from "B:/~BUN/root/chunk-nggrknsv.js";
var Hqn = String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`,
  regExp = new RegExp(`^[${Hqn}]+`, "u");
function Exo(t) {
  return t.replace(regExp, "");
}
function fIr(t, e = Cxo(t)) {
  return jn(t) || Tmt(t) || Z2.test(e[0]) || e.map(Exo).some(item => jn(item) || Tmt(item));
}
function Tmt(t) {
  return !1;
}
function Txo(t) {
  let e = t.slice(7);
  return fIr(e) || fIr(e.slice(1));
}
var i = /(?:%[0-9A-Fa-f]{2}){1,512}/g,
  u = /^%[0-9A-Fa-f]{2}/;
function Cxo(t) {
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
export { Hqn, Exo, fIr, Tmt, Txo, Cxo };