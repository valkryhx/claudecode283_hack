// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { We } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { uG, Q9, yxs, _xs, bxs } from "B:/~BUN/root/chunk-dn8rakwm.js";
function cEn(o, r = o) {
  let m = uG() && r.some(item => item.mcpInfo?.serverName === Q9 && item.mcpInfo.toolName === We);
  return bxs(_xs(o)).filter(item => !m || item.mcpInfo?.serverName !== Q9 || item.mcpInfo.toolName !== yxs);
}
export { cEn };