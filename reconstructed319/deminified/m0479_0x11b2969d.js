// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
function t() {
  return process.argv.includes("--agent-teams");
}
function Zo() {
  if (!i.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS && !t()) return !1;
  if (!v("tengu_amber_flint", !0)) return !1;
  return !0;
}
async function cas() {
  if (!Zo()) return;
  let {
    captureTeammateModeSnapshot: captureTeammateModeSnapshot
  } = await import("B:/~BUN/root/chunk-2sypht65.js");
  captureTeammateModeSnapshot();
}
export { Zo, cas };