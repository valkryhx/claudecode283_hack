// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ne, zr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { mt } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { pn } from "B:/~BUN/root/chunk-6za2ez23.js";
var i = 200,
  o = i * 4,
  r = /[\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function jp(n) {
  let e = n === void 0 ? "" : zr(pn(n).replace(r, " "));
  return e === "" ? void 0 : mt(ne(e, o), i);
}
export { jp };