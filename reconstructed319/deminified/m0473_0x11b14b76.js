// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { pn, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { kg } from "B:/~BUN/root/chunk-2392ztjf.js";
function jl(e = "send") {
  if (e === "send" && kg().messagingBeyondOwnAgentsDisabled) return !1;
  let CLAUDE_CODE_HARBOR_KITE = i.CLAUDE_CODE_HARBOR_KITE;
  if (CLAUDE_CODE_HARBOR_KITE !== void 0) return Pe(CLAUDE_CODE_HARBOR_KITE);
  if (x() === "windows" && !v("tengu_harbor_kite_win", !0)) return !1;
  return v("tengu_harbor_kite", !0);
}
function gue(e) {
  if (e?.flagsSettled === !1 && pn("tengu_cuddly_willow", !0).source === "fallback") return !1;
  return v("tengu_cuddly_willow", !0);
}
var KLn = "Cross-session messaging is not available in this session.";
export { jl, gue, KLn };