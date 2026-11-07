// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { _h } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { TSt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { Yx } from "B:/~BUN/root/chunk-smrt7z22.js";
var lm = "MEMORY.md",
  YF = 200,
  Gee = 25000,
  gwo = 4 * Gee,
  W2e = 200,
  Ibe = 4096;
function z2e(t) {
  let trimmed = t.trim();
  return {
    trimmed: trimmed,
    lineCount: Dt(trimmed, `
`) + 1,
    byteCount: trimmed.length
  };
}
function PD(t) {
  return t.normalize("NFC").toLowerCase();
}
function I3(t) {
  let r = t?.lastIndexOf("/") ?? -1;
  if (r <= 0) return "";
  let n = t.slice(0, r + 1);
  return n.split("/").some(item => item.startsWith(".")) ? "" : n;
}
var mZe = "This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",
  ywo = "Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";
function Tz(t) {
  let r = "";
  for (let n of TSt(_h(t.replace(/\r\n?|[\u2028\u2029]/g, `
`)))) {
    let e = n.codePointAt(0),
      o = e !== 9 && e !== 10 && (e < 32 || e >= 127 && e <= 159);
    r += o ? "\uFFFD" : n;
  }
  return r;
}
function wfe(t) {
  return Yx(s(t));
}
function CPr(t) {
  return DHt(t) || /[\p{Cc}\u2028\u2029]/u.test(t);
}
function UUn(t) {
  return wfe(t.replace(/[\t\n\r\u2028\u2029]/g, ""));
}
var Kxs = new Set([8204, 8205, 65038, 65039]),
  i = /^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;
function DHt(t) {
  let r = t.codePointAt(0);
  if (Kxs.has(r) || r === 9 || r === 10 || r === 13) return !1;
  return i.test(t) || r < 32 || r >= 127 && r <= 159;
}
function s(t) {
  let r = "";
  for (let n of t.replace(/\r\n?|[\u2028\u2029]/g, `
`)) {
    if (DHt(n)) continue;
    r += n;
  }
  return r;
}
export { lm, YF, Gee, gwo, W2e, Ibe, z2e, PD, I3, mZe, ywo, Tz, wfe, CPr, UUn, Kxs, DHt };