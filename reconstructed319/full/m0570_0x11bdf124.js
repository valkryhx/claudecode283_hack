// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  wte
} from "B:/~BUN/root/chunk-7wn6n2hd.js";

function jWe() {
  let e = i.CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL;
  if (!e || e.toLowerCase() === "inherit") return;
  if (i.CLAUDE_CODE_SUBAGENT_MODEL_FORCE && wte("CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL")?.trim() !== e) return;
  return e
}
export {
  jWe
};
