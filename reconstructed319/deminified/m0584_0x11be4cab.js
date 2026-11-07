// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { cn } from "B:/~BUN/root/chunk-bkfncj77.js";
var WTe = 128,
  xq = /^[\x21-\x7e]+$/,
  iJe = "io.modelcontextprotocol/tasks";
function i_e(r) {
  return Q(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""), WTe);
}
function $Z(r) {
  return Q(i_e(r), 8);
}
function Egs(r) {
  if (!Number.isFinite(r) || r <= 0) return;
  return r < 1000 ? `${r}ms` : cn(r);
}
export { WTe, xq, iJe, i_e, $Z, Egs };