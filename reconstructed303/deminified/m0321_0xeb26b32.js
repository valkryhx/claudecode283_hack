// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { wr } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { Mf } from "B:/~BUN/root/chunk-bp7zxkzq.js";
function Zu() {
  return Mf().backgroundTasksDisabled || bje();
}
function bje() {
  return a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || wr();
}
function lgt() {
  let n = Mf();
  return n.backgroundTasksDisabled && !n.backgroundShellsKeptElsewhere || bje();
}
function dgt() {
  let n = Mf();
  return n.backgroundTasksDisabled && n.backgroundLaunchRule === void 0 || n.backgroundAgentLaunchDisabled || a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || wr();
}
function lte() {
  return Zu() || Mf().backgroundAgentLaunchDisabled;
}
function cgt() {
  let n = Mf();
  if (!n.foregroundAgentMovesAdmitted) return lte();
  return n.backgroundAgentLaunchDisabled || a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || wr();
}
function BUs() {
  let n = Mf();
  return n.backgroundLaunchRule !== void 0 && !n.backgroundLaunchByDefault && !dgt();
}
function fan() {
  return Mf().backgroundLaunchByDefault && !dgt();
}
export { Zu, bje, lgt, dgt, lte, cgt, BUs, fan };