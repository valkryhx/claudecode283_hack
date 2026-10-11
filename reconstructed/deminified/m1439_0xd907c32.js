// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
var Sbe = {
  heading: "Learn the moves",
  body: "Quick lessons on the things power users do \u2014 plan mode, undo, " + "subagents, memory. About 5 minutes. Come back any time with /powerup.",
  banner: "New here? Type /powerup for a 5-minute tour \u2014 modes, undo, " + "@-mentions, and how to teach Claude your rules."
};
function l7n() {
  let CLAUDE_CODE_POWERUP_ONBOARDING = a.CLAUDE_CODE_POWERUP_ONBOARDING;
  if (CLAUDE_CODE_POWERUP_ONBOARDING === "banner" || CLAUDE_CODE_POWERUP_ONBOARDING === "step") return CLAUDE_CODE_POWERUP_ONBOARDING;
  return x("tengu_birch_lantern", "off");
}
export { Sbe, l7n };