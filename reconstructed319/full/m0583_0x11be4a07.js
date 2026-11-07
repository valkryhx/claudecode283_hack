// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  er
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  bjt,
  Zu
} from "B:/~BUN/root/chunk-65j2302z.js";
var JDt = 5000;

function lR() {
  if (i.CLAUDE_CODE_DISABLE_MCP_TASKS) return !1;
  return v("tengu_glowing_lark", Zu() === bjt && !i.CLAUDE_CODE_REMOTE && !er())
}

function CDn() {
  return lR() && v("tengu_mcp_task_worker_wake", !1)
}

function vgs() {
  return i.CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND
}
export {
  JDt,
  lR,
  CDn,
  vgs
};
