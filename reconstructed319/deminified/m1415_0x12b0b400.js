// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe, rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var FSn = {};
Rr(FSn, {
  booleanOfInput: () => Yit,
  default: () => FSn,
  isHeldTrue: () => q6r,
  numberInputHint: () => LSn,
  numberOfInput: () => NSn
});
var Yit = n => Pe(n) ? !0 : rs(n) ? !1 : void 0;
var q6r = n => n === !0 || n === "true";
function LSn(n) {
  return `It takes a number${n.min !== void 0 || n.max !== void 0 ? ` between ${n.min ?? "-\u221E"} and ${n.max ?? "\u221E"}` : ""}.`;
}
function NSn(n, e) {
  let r = n.trim(),
    t = Number(r);
  return r !== "" && Number.isFinite(t) && (e.min === void 0 || t >= e.min) && (e.max === void 0 || t <= e.max) ? t : void 0;
}
export { Yit, q6r, LSn, NSn, FSn };