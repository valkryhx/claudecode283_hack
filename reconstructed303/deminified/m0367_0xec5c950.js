// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { En, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { Mf } from "B:/~BUN/root/chunk-bp7zxkzq.js";
function Ki() {
  if (Mf().messagingBeyondOwnAgentsDisabled) return !1;
  let CLAUDE_CODE_HARBOR_KITE = a.CLAUDE_CODE_HARBOR_KITE;
  if (CLAUDE_CODE_HARBOR_KITE !== void 0) return Fe(CLAUDE_CODE_HARBOR_KITE);
  if (I() === "windows" && !E("tengu_harbor_kite_win", !0)) return !1;
  return E("tengu_harbor_kite", !0);
}
function nae(e) {
  if (e?.flagsSettled === !1 && En("tengu_cuddly_willow", !0).source === "fallback") return !1;
  return E("tengu_cuddly_willow", !0);
}
var Yrn = "Cross-session messaging is not available in this session.";
export { Ki, nae, Yrn };