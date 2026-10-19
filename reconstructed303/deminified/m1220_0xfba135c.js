// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { $0, mZ, V1, QL, h9 } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Uoe } from "B:/~BUN/root/chunk-56qrk24m.js";
async function d4e() {
  $0(), QL(), mZ(), h9(), V1.emit();
  try {
    await Uoe.rehome(), g("skill_directory_reload");
  } catch (error) {
    t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${error}`, {
      level: "error"
    }), p("skill_directory_reload", "rehome_failed");
  }
}
export { d4e };