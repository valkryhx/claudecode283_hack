// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
function t() {
  return process.argv.includes("--agent-teams");
}
function as() {
  if (!a.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS && !t()) return !1;
  if (!E("tengu_amber_flint", !0)) return !1;
  return !0;
}
async function Rmo() {
  if (!as()) return;
  let {
    captureTeammateModeSnapshot: captureTeammateModeSnapshot
  } = await import("B:/~BUN/root/chunk-rb6yx96t.js");
  captureTeammateModeSnapshot();
}
export { as, Rmo };