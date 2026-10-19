// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Cpe, xSr, Lpo, v$e } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { $a, YEe } from "B:/~BUN/root/chunk-m0xdacj9.js";
function loe() {
  return v$e() || Cpe($a, YEe());
}
function w8r() {
  if (!loe()) return null;
  if (Lpo() && !Cpe($a, YEe())) return xSr;
  return "--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry).";
}
function FEn(r) {
  let {
    mode: mode,
    isBypassPermissionsModeAvailable: isBypassPermissionsModeAvailable
  } = le(r);
  return mode === "bypassPermissions" || mode === "plan" && isBypassPermissionsModeAvailable;
}
export { loe, w8r, FEn };