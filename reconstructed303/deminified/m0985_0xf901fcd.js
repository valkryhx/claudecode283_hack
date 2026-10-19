// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import { D } from "B:/~BUN/root/chunk-psh1mp8h.js";
import { Mr } from "B:/~BUN/root/chunk-ef0msk7r.js";
var e = {};
Mr(e, {
  CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR: () => p,
  CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN: () => r,
  CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION: () => _,
  CLAUDE_CODE_MCP_SERVE_SETTINGS: () => t,
  CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT: () => o,
  CLAUDE_CODE_MCP_SERVE_WORKSPACE_ROOT: () => E
});
var r = D.rawStr(),
  o = D.bool(),
  t = D.rawStr(),
  E = D.str(),
  _ = D.int({
    min: 1,
    digitsOnly: !0
  }),
  p = D.str();
var C = {
  ...e
};
export { C as toolServerShape };