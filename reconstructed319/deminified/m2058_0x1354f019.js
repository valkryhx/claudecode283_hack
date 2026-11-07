// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
var Q4e = {
  heading: "Learn the moves",
  body: "Quick lessons on the things power users do \u2014 plan mode, undo, " + "subagents, memory. About 5 minutes. Come back any time with /powerup.",
  banner: "New here? Type /powerup for a 5-minute tour \u2014 modes, undo, " + "@-mentions, and how to teach Claude your rules."
};
function fNo() {
  let CLAUDE_CODE_POWERUP_ONBOARDING = i.CLAUDE_CODE_POWERUP_ONBOARDING;
  if (CLAUDE_CODE_POWERUP_ONBOARDING === "banner" || CLAUDE_CODE_POWERUP_ONBOARDING === "step") return CLAUDE_CODE_POWERUP_ONBOARDING;
  return v("tengu_birch_lantern", "off");
}
export { Q4e, fNo };