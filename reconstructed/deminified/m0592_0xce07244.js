// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Xr } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { DUr, LUr, qNo, KNo } from "B:/~BUN/root/chunk-ejjy06g8.js";
async function Nct(e, r = {}) {
  try {
    if (!Xr()) {
      if (!a.CLAUDE_CODE_OAUTH_TOKEN && r.bgAuthSnapshot !== "leave") await DUr(e);
      await LUr(e), await qNo(e);
    }
    await KNo(e);
  } catch (error) {
    t(`Descriptor credential prime failed (non-fatal): ${l(error)}`, {
      level: "error"
    });
  }
}
export { Nct };