// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Zt } from "B:/~BUN/root/chunk-bpp59nyd.js";
var TEr = 128,
  E_o = /^[\x21-\x7e]+$/,
  T_o = "io.modelcontextprotocol/tasks";
function G$n(r) {
  return re(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""), TEr);
}
function sae(r) {
  return re(G$n(r), 8);
}
function CEr(r) {
  if (!Number.isFinite(r) || r <= 0) return;
  return r < 1000 ? `${r}ms` : Zt(r);
}
export { TEr, E_o, T_o, G$n, sae, CEr };