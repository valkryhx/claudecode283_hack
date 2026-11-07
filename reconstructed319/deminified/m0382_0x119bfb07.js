// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
function ed() {
  let MCP_TIMEOUT = i.MCP_TIMEOUT;
  return MCP_TIMEOUT && MCP_TIMEOUT > 0 ? Math.min(MCP_TIMEOUT, 2147483647) : 30000;
}
function XTe() {
  let MCP_CONNECT_TIMEOUT_MS = i.MCP_CONNECT_TIMEOUT_MS;
  return MCP_CONNECT_TIMEOUT_MS && MCP_CONNECT_TIMEOUT_MS > 0 ? Math.min(MCP_CONNECT_TIMEOUT_MS, 2147483647) : 5000;
}
var zZ = 2000,
  mHi = 8000,
  hHi = 500;
export { ed, XTe, zZ, mHi, hHi };