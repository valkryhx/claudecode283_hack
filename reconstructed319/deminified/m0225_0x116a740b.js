// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Ml, xn } from "B:/~BUN/root/chunk-game8aqv.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
function Da() {
  if (!Pe(process.env.CLAUDE_CODE_COORDINATOR_MODE)) return !1;
  if (Ml() && !xn() && !i.CLAUDE_CODE_REMOTE) return !1;
  return !0;
}
function X_e(e) {
  return Da() && e.agentId === void 0;
}
export { Da, X_e };