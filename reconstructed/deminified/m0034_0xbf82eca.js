// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { re, D2, fr } from "B:/~BUN/root/chunk-y04k89s2.js";
function wt(e) {
  return Bun.stripANSI(e);
}
var s = "\\p{Default_Ignorable_Code_Point}\\u2800",
  dde = `\\p{Cc}\\p{Cf}\\p{Cs}\\p{Co}\\p{Cn}\\u2028\\u2029${s}`,
  regExp = new RegExp(`[${dde}]+`, "gu"),
  o = "\\u200D\\uFE0E\\uFE0F",
  regExp_2 = new RegExp(`(?:(?![${o}])[${dde}])+`, "gu"),
  regExp_3 = new RegExp(`(?:(?![${o}\\n])[${dde}])+`, "gu"),
  regExp_4 = new RegExp(`(?<!\\S)[${o}]+`, "gu"),
  g = /\p{Cs}/gu;
function J0(e, n, r) {
  let t = r?.keepNewlines === !0 || r?.keepEmojiJoiners === !0,
    i = wt(e.replace(g, "\u200B")).replace(r?.keepNewlines ? regExp_3 : t ? regExp_2 : regExp, n);
  return t ? i.replace(regExp_4, "") : i;
}
var regExp_5 = new RegExp(`[\\p{Cf}\\p{Co}\\p{Cn}\\u2028\\u2029\\u007F-\\u009F${s}]`, "gu");
function E(e) {
  let n = e.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
  return n = n.replace(/[\u200B-\u200F]/g, "").replace(/[\u202A-\u202E]/g, "").replace(/[\u2066-\u2069]/g, "").replace(/[\uFEFF]/g, "").replace(/[\uE000-\uF8FF]/g, ""), n;
}
function af(e) {
  let n = D2(e);
  for (let r = 0; r < 10; r++) {
    let t = E(n);
    if (t === n) return n;
    n = t;
  }
  return n;
}
var f = /\p{Default_Ignorable_Code_Point}/gu;
function Ay(e) {
  return fr(af(e).replace(f, ""));
}
function jjr(e) {
  let n = e,
    r = "",
    t = 0,
    i = 10;
  while (n !== r && t < i) r = n, n = n.normalize("NFKC"), n = af(n), t++;
  if (t >= i) throw Error(`Unicode sanitization reached maximum iterations (${i}) for input: ${e.slice(0, 100)}`);
  return n;
}
function N_(e) {
  if (typeof e === "string") return jjr(e);
  if (Array.isArray(e)) return e.map(N_);
  if (e !== null && typeof e === "object") {
    let n = {};
    for (let [r, t] of Object.entries(e)) n[N_(r)] = N_(t);
    return n;
  }
  return e;
}
function wl(e) {
  return kUe(e.replace(/\\(?=u[0-9a-fA-F]{4})/g, "\\u005c"));
}
function kUe(e) {
  return e.replace(/[^\x20-\x7e]/g, cYn);
}
function Tn(e) {
  return e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu, " ");
}
function LJ(e) {
  return e.replace(regExp_5, n => Array.from({
    length: n.length
  }, (r, t) => `\\u${n.charCodeAt(t).toString(16).padStart(4, "0")}`).join(""));
}
function NJ(e) {
  return D2(wt(e)).replace(regExp, " ");
}
function po(e, n) {
  let r = NJ(e);
  if (n?.drop) r = r.replace(n.drop, "");
  if (r = r.replace(/\s+/g, " ").trim(), n?.maxCodeUnits !== void 0) r = re(r, n.maxCodeUnits).trim();
  return r;
}
var EUe = 255;
function eE(e) {
  let n = po(e, {
    drop: /[`<>]/g
  }).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :");
  return re(n, EUe).trim();
}
var oBt = 2048,
  xgn = /[`\[\]<>]/g;
function TY(e) {
  let n = po(e).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :").replace(/</g, "< ").replace(/\s+/g, " ").trim();
  return re(n, oBt).trim();
}
function P8e(e) {
  return e.replace(/[\u007F-\u009F\u2028\u2029\p{Cf}]/gu, cYn);
}
function cYn(e) {
  return e.split("").map(item => "\\u" + item.charCodeAt(0).toString(16).padStart(4, "0")).join("");
}
export { wt, dde, J0, af, Ay, jjr, N_, wl, kUe, Tn, LJ, NJ, po, EUe, eE, oBt, xgn, TY, P8e, cYn };