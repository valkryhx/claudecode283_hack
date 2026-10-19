// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  ize
} from "B:/~BUN/root/chunk-1gpjpba6.js";

function sPe() {
  let e = a.CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL;
  if (!e || e.toLowerCase() === "inherit") return;
  if (a.CLAUDE_CODE_SUBAGENT_MODEL_FORCE && ize("CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL")?.trim() !== e) return;
  return e
}
export {
  sPe
};
