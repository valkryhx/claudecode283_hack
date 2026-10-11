// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne, zo } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Ic } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { de, Ljt } from "B:/~BUN/root/chunk-8386ms9e.js";
function o(n) {
  let e = n?.trim();
  return e ? e : void 0;
}
function r(n) {
  return n === void 0 ? void 0 : String(n);
}
var d = f(() => Ljt(r, de().optional().transform(o))),
  s = f(() => Ljt(r, de().optional())),
  u = f(() => Ljt(r, de().optional().transform(n => Ne(n)))),
  m = f(() => Ljt(r, de().optional().transform(n => {
    if (Ne(n)) return !0;
    if (zo(n)) return !1;
    return;
  }))),
  a = f(() => t());
function $Bo(n) {
  if (typeof n === "boolean") return n ? "1" : "0";
  return String(n);
}
var D = {
  str: () => d(),
  rawStr: () => s(),
  bool: () => u(),
  triBool: () => m(),
  int: n => n ? t(n) : a(),
  enum: n => Ljt(r, de().optional().transform(e => e !== void 0 && n.includes(e.trim()) ? e.trim() : void 0))
};
function t(n) {
  return Ljt(r, de().optional().transform(e => {
    if (e === void 0) return;
    if (n?.digitsOnly && !/^[+-]?\d+$/.test(e.trim())) return;
    let i = Ic(e);
    if (!Number.isFinite(i)) return;
    if (n?.min !== void 0 && i < n.min) return;
    if (n?.max !== void 0 && i > n.max) return;
    return i;
  }));
}
export { $Bo, D };