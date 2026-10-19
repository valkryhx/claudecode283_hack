// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
function ol() {
  let MCP_TIMEOUT = a.MCP_TIMEOUT;
  return MCP_TIMEOUT && MCP_TIMEOUT > 0 ? Math.min(MCP_TIMEOUT, 2147483647) : 30000;
}
function pBe() {
  let MCP_CONNECT_TIMEOUT_MS = a.MCP_CONNECT_TIMEOUT_MS;
  return MCP_CONNECT_TIMEOUT_MS && MCP_CONNECT_TIMEOUT_MS > 0 ? Math.min(MCP_CONNECT_TIMEOUT_MS, 2147483647) : 5000;
}
var Pfe = 2000,
  lPs = 8000,
  dPs = 500;
export { ol, pBe, Pfe, lPs, dPs };