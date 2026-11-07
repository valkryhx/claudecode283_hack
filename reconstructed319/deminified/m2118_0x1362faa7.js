// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { WIs, pn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { QVi } from "B:/~BUN/root/chunk-m749kjym.js";
import { _t } from "B:/~BUN/root/chunk-3a409jmn.js";
var f7n = "tengu_amber_quillwort",
  YGo = "tengu_velvet_harrow";
function dKt(e) {
  if (_t(e, {
    safe: !1
  })) return !0;
  let CLAUDE_INTERNAL_FC_OVERRIDES = i.CLAUDE_INTERNAL_FC_OVERRIDES;
  return CLAUDE_INTERNAL_FC_OVERRIDES !== void 0 && WIs(e) && !QVi("CLAUDE_INTERNAL_FC_OVERRIDES", CLAUDE_INTERNAL_FC_OVERRIDES) && pn(e, !1).value === !0;
}
export { f7n, YGo, dKt };