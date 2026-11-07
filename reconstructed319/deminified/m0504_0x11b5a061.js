// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { v, rn } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
function a1() {
  return v("tengu_lantern_prism", !1) || i.CLAUDE_CODE_LANTERN_PRISM;
}
function uE() {
  return mfs() || rn("tengu_spicy_blossom", !1) === !0;
}
function mfs() {
  return rn("tengu_encapsulated_pebble", !0) !== !1;
}
function CIn() {
  return !v("tengu_sharded_snowflake", !1);
}
function Zyr() {
  if (CIn()) return {
    enabled: !0,
    text: "`claude plugin eval` is available in this session (generally available; no enablement setting is needed on any client, including Bedrock/Vertex/Foundry, LLM gateways, telemetry-disabled clients and CI runners)."
  };
  return {
    enabled: !1,
    text: '`claude plugin eval` is generally available but switched OFF for this session by a server-side kill switch: it exists but prints "currently unavailable" here. If the user asks about it, say that plainly rather than that it does not exist; there is no setting or variable that turns it back on, and `claude update` plus a fresh session picks the command up again once the switch is lifted.'
  };
}
export { a1, uE, mfs, CIn, Zyr };