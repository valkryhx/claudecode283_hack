// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Wf } from "B:/~BUN/root/chunk-6za2ez23.js";
import { $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { K7e } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { Ole } from "B:/~BUN/root/chunk-e4q58xft.js";
var ep = "MEMORY.md",
  WH = 200,
  ole = 25000,
  iDr = 4 * ole,
  IIe = 200,
  sle = 4096;
function Mgt(t) {
  let trimmed = t.trim();
  return {
    trimmed: trimmed,
    lineCount: $t(trimmed, `
`) + 1,
    byteCount: trimmed.length
  };
}
function IM(t) {
  return t.normalize("NFC").toLowerCase();
}
function zG(t) {
  let r = t?.lastIndexOf("/") ?? -1;
  if (r <= 0) return "";
  let n = t.slice(0, r + 1);
  return n.split("/").some(item => item.startsWith(".")) ? "" : n;
}
var Nje = "This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",
  aDr = "Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";
function oB(t) {
  let r = "";
  for (let n of K7e(Wf(t.replace(/\r\n?|[\u2028\u2029]/g, `
`)))) {
    let e = n.codePointAt(0),
      o = e !== 9 && e !== 10 && (e < 32 || e >= 127 && e <= 159);
    r += o ? "\uFFFD" : n;
  }
  return r;
}
function ile(t) {
  return Ole(s(t));
}
function VBs(t) {
  return Dgt(t) || /[\p{Cc}\u2028\u2029]/u.test(t);
}
function tln(t) {
  return ile(t.replace(/[\t\n\r\u2028\u2029]/g, ""));
}
var dMo = new Set([8204, 8205, 65038, 65039]),
  i = /^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;
function Dgt(t) {
  let r = t.codePointAt(0);
  if (dMo.has(r) || r === 9 || r === 10 || r === 13) return !1;
  return i.test(t) || r < 32 || r >= 127 && r <= 159;
}
function s(t) {
  let r = "";
  for (let n of t.replace(/\r\n?|[\u2028\u2029]/g, `
`)) {
    if (Dgt(n)) continue;
    r += n;
  }
  return r;
}
export { ep, WH, ole, iDr, IIe, sle, Mgt, IM, zG, Nje, aDr, oB, ile, VBs, tln, dMo, Dgt };