// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import { N } from "B:/~BUN/root/chunk-kjwczfsg.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var E = {};
Rr(E, {
  CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR: () => p,
  CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN: () => o,
  CLAUDE_CODE_MCP_SERVE_ENABLED_PLUGINS: () => C,
  CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION: () => _,
  CLAUDE_CODE_MCP_SERVE_SETTINGS: () => e,
  CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT: () => r,
  CLAUDE_CODE_MCP_SERVE_TUNNEL_BINARY_FRAMES: () => S,
  CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT: () => t
});
var o = N.rawStr(),
  r = N.bool(),
  e = N.rawStr(),
  t = N.str(),
  _ = N.int({
    min: 1,
    digitsOnly: !0
  }),
  C = N.rawStr(),
  S = N.bool(),
  p = N.str();
var O = {
  ...E
};
export { O as toolServerShape };