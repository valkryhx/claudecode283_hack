// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { nnn, FL, aIt } from "B:/~BUN/root/chunk-0av24qsq.js";
import { hL, fdr, mdr, rR } from "B:/~BUN/root/chunk-tq1hs216.js";
function Joe() {
  return hL().cachedSystemTheme() ?? s() ?? "dark";
}
function Voo() {
  return hL().cachedSystemTheme() ?? s();
}
function CYt() {
  return hL().cachedSystemTheme();
}
function tkt(e) {
  hL().setSystemTheme(e);
}
function KZe(e) {
  return hL().onSystemThemeChange(e);
}
function nkt(e) {
  if (e === "auto") return Joe();
  if (nnn(e)) return e;
  let t = rR(e);
  return t && fdr(t) || "dark";
}
function $Oe(e) {
  let t = FL(nkt(e)),
    n = rR(e);
  if (!n) return t;
  return aIt(t, mdr(n)?.overrides);
}
function qoo(e) {
  let t = i(e);
  if (!t) return;
  return 0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b > 0.5 ? "light" : "dark";
}
function i(e) {
  let t = /^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);
  if (t) return {
    r: m(t[1]),
    g: m(t[2]),
    b: m(t[3])
  };
  let n = /^#([0-9a-f]+)$/i.exec(e);
  if (n && n[1].length % 3 === 0) {
    let r = n[1],
      o = r.length / 3;
    return {
      r: m(r.slice(0, o)),
      g: m(r.slice(o, 2 * o)),
      b: m(r.slice(2 * o))
    };
  }
  return;
}
function m(e) {
  let t = 16 ** e.length - 1;
  return parseInt(e, 16) / t;
}
function s() {
  let COLORFGBG = a.COLORFGBG;
  if (!COLORFGBG) return;
  let n = COLORFGBG.split(";").at(-1);
  if (n === void 0 || n === "") return;
  let r = Number(n);
  if (!Number.isInteger(r) || r < 0 || r > 15) return;
  return r <= 6 || r === 8 ? "dark" : "light";
}
export { Joe, Voo, CYt, tkt, KZe, nkt, $Oe, qoo };