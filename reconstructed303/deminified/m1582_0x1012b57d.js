// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w5 } from "B:/~BUN/root/chunk-8z3a373v.js";
import { R_e } from "B:/~BUN/root/chunk-hrwgxymj.js";
import { td } from "B:/~BUN/root/chunk-9grc6xh0.js";
function dEt(e, r, o) {
  if (td(e.decisionReason, w5) !== void 0 || R_e(o)) return !0;
  if (r.requiresUserInteraction?.()) return !0;
  return e.forcedByCaller === !0;
}
export { dEt };