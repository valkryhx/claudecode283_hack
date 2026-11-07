// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Gyr, Sq, gIn } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { DK, GYo, VYo, oF } from "B:/~BUN/root/chunk-gh4155re.js";
function YOe() {
  return DK().cachedSystemTheme() ?? s() ?? "dark";
}
function XSn() {
  return DK().cachedSystemTheme() ?? s();
}
function Str() {
  return DK().cachedSystemTheme();
}
function JSn(e) {
  DK().setSystemTheme(e);
}
function Uqt(e) {
  return DK().onSystemThemeChange(e);
}
function QSn(e) {
  if (e === "auto") return YOe();
  if (Gyr(e)) return e;
  let t = oF(e);
  return t && GYo(t) || "dark";
}
function eat(e) {
  let t = Sq(QSn(e)),
    n = oF(e);
  if (!n) return t;
  return gIn(t, VYo(n)?.overrides);
}
function Qli(e) {
  let t = u(e);
  if (!t) return;
  return 0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b > 0.5 ? "light" : "dark";
}
function u(e) {
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
  let COLORFGBG = i.COLORFGBG;
  if (!COLORFGBG) return;
  let n = COLORFGBG.split(";").at(-1);
  if (n === void 0 || n === "") return;
  let r = Number(n);
  if (!Number.isInteger(r) || r < 0 || r > 15) return;
  return r <= 6 || r === 8 ? "dark" : "light";
}
export { YOe, XSn, Str, JSn, Uqt, QSn, eat, Qli };