// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { ia, x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
function Ws() {
  let CLAUDE_CODE_HARBOR_KITE = a.CLAUDE_CODE_HARBOR_KITE;
  if (CLAUDE_CODE_HARBOR_KITE !== void 0) return Ne(CLAUDE_CODE_HARBOR_KITE);
  if (O() === "windows" && !x("tengu_harbor_kite_win", !0)) return !1;
  return x("tengu_harbor_kite", !0);
}
function Xee(e) {
  if (e?.flagsSettled === !1 && ia("tengu_cuddly_willow", !0).source === "fallback") return !1;
  return x("tengu_cuddly_willow", !0);
}
var IMt = "Cross-session messaging is not available in this session.";
export { Ws, Xee, IMt };