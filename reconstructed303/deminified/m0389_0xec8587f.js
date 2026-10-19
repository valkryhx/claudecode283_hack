// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ijr } from "B:/~BUN/root/chunk-rpez7z7a.js";
var kN = {
    red: "red_FOR_SUBAGENTS_ONLY",
    blue: "blue_FOR_SUBAGENTS_ONLY",
    green: "green_FOR_SUBAGENTS_ONLY",
    yellow: "yellow_FOR_SUBAGENTS_ONLY",
    purple: "purple_FOR_SUBAGENTS_ONLY",
    orange: "orange_FOR_SUBAGENTS_ONLY",
    pink: "pink_FOR_SUBAGENTS_ONLY",
    cyan: "cyan_FOR_SUBAGENTS_ONLY"
  },
  Bb = Object.keys(kN);
function _G(e) {
  return e !== void 0 && Bb.includes(e);
}
function CBe(e) {
  return e.userOverride ?? e.agentDefinitionColor;
}
function RBe(e) {
  if (e === "general-purpose") return;
  let n = ijr().get(e);
  if (n && Bb.includes(n)) return kN[n];
  return;
}
function Spt(e, o) {
  let n = ijr();
  if (!o) {
    n.delete(e);
    return;
  }
  if (Bb.includes(o)) n.set(e, o);
}
export { kN, Bb, _G, CBe, RBe, Spt };