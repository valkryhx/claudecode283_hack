// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Qo } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Xt, DU, hpe, RE } from "B:/~BUN/root/chunk-jgwwv4gf.js";
function wgs(t) {
  return "  " + t.replace(oJe, `
`).split(`
`).join(`
  `);
}
var kgs = y1,
  oJe = /\r\n?|[\u001c-\u001e\u2028\u2029\u0085\v\f]/g;
function Ize(t) {
  return t.replace(oJe, `
`);
}
var N0e = /[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu,
  {
    open: open,
    close: close,
    slash: slash
  } = DU;
function RQt(t, r) {
  return r.replace(N0e, "").replace(new RegExp(`[${open}]([\\s${slash}]*${Qo(t)}\\b(?:${hpe(`^${open}${close}`, 2)}[${close}])?)`, "giu"), (n, o) => "[" + o);
}
var AQt = "forwarded_user_turns",
  Mze = "forwarded_turn",
  p = ["transcript", AQt, Mze];
function mpt(t) {
  let r = t;
  for (let n of p) r = RQt(n, r);
  return r;
}
function y1(t) {
  return "  " + mpt(Ize(t)).split(`
`).join(`
  `);
}
var a = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;
function luo(t) {
  return wgs(Xt(RE(Ize(t).replace(N0e, "").replace(a, ""))));
}
export { wgs, kgs, oJe, Ize, N0e, RQt, AQt, Mze, mpt, y1, luo };