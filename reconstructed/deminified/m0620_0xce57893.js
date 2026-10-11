// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { vke, MFn, tkr, kke } from "B:/~BUN/root/chunk-3jyp964r.js";
import { GKe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { ip } from "B:/~BUN/root/chunk-ftthz33s.js";
function pWe() {
  return kke() || vke(ip, GKe());
}
function Kqo() {
  if (!pWe()) return null;
  if (tkr() && !vke(ip, GKe())) return MFn;
  return "--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry).";
}
function Qqt(r) {
  let {
    mode: mode,
    isBypassPermissionsModeAvailable: isBypassPermissionsModeAvailable
  } = me(r);
  return mode === "bypassPermissions" || mode === "plan" && isBypassPermissionsModeAvailable;
}
export { pWe, Kqo, Qqt };