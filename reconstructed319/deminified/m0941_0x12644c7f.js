// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
function i() {
  return v("tengu_mcp_claudeai_eligibility_gate", !1);
}
function Dui() {
  return v("tengu_delightful_hamster", !1) === !0;
}
function BRt(e) {
  return e.type === "claudeai-proxy" && e.eligible === !1 && i();
}
export { Dui, BRt };