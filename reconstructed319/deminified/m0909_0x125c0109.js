// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { nZ, poo, Zos, r9e } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ta, GFe } from "B:/~BUN/root/chunk-e0q1m1z9.js";
function Dhe() {
  return r9e() || nZ(Ta, GFe());
}
function AGo() {
  if (!Dhe()) return null;
  if (Zos() && !nZ(Ta, GFe())) return poo;
  return "--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry).";
}
function YJn(r) {
  let {
    mode: mode,
    isBypassPermissionsModeAvailable: isBypassPermissionsModeAvailable
  } = se(r);
  return mode === "bypassPermissions" || mode === "plan" && isBypassPermissionsModeAvailable;
}
export { Dhe, AGo, YJn };