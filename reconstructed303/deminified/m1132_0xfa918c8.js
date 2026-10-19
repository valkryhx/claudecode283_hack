// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe, ws } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { Mr } from "B:/~BUN/root/chunk-ef0msk7r.js";
var p6t = {};
Mr(p6t, {
  booleanOfInput: () => AKe,
  default: () => p6t,
  isHeldTrue: () => Xdr,
  numberInputHint: () => c6t,
  numberOfInput: () => u6t
});
var AKe = n => Fe(n) ? !0 : ws(n) ? !1 : void 0;
var Xdr = n => n === !0 || n === "true";
function c6t(n) {
  return `It takes a number${n.min !== void 0 || n.max !== void 0 ? ` between ${n.min ?? "-\u221E"} and ${n.max ?? "\u221E"}` : ""}.`;
}
function u6t(n, e) {
  let r = n.trim(),
    t = Number(r);
  return r !== "" && Number.isFinite(t) && (e.min === void 0 || t >= e.min) && (e.max === void 0 || t <= e.max) ? t : void 0;
}
export { AKe, Xdr, c6t, u6t, p6t };