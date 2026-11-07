// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q, Yr } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { ct } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Zn } from "B:/~BUN/root/chunk-12nc74pv.js";
var i = 200,
  o = i * 4,
  r = /[\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function nu(n) {
  let e = n === void 0 ? "" : Yr(Zn(n).replace(r, " "));
  return e === "" ? void 0 : ct(Q(e, o), i);
}
export { nu };