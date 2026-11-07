// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function rm(e) {
  return e.name?.startsWith("mcp__") || e.isMcp === !0;
}
function HJe(e) {
  return e.mcpInfo?.serverName ?? (e.name?.startsWith("mcp__") ? e.name.split("__")[1] : void 0);
}
export { rm, HJe };