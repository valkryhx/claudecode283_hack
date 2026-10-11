// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Z7, lie, PL, zP, cV } from "B:/~BUN/root/chunk-3jyp964r.js";
import { uG } from "B:/~BUN/root/chunk-p5693x4a.js";
async function dwt() {
  Z7(), zP(), lie(), cV(), PL.emit();
  try {
    await uG.rehome(), _("skill_directory_reload");
  } catch (error) {
    t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${error}`, {
      level: "error"
    }), p("skill_directory_reload", "rehome_failed");
  }
}
export { dwt };