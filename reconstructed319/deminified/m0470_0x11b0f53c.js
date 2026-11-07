// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { e_ } from "B:/~BUN/root/chunk-game8aqv.js";
import { te, gD } from "B:/~BUN/root/chunk-6v74v9ar.js";
import { na } from "B:/~BUN/root/chunk-5az22yft.js";
var n = "Error POSTing to endpoint: MCP server not allowed";
function R1i(t) {
  if (!(t instanceof Error)) return !1;
  let e = t.message.trimEnd();
  if (e === `Streamable HTTP error: ${n}`) return "code" in t && t.code === 403;
  if (e !== n) return !1;
  return "status" in t ? t.status === 403 : "telemetryMessage" in t && typeof t.telemetryMessage === "string" && t.telemetryMessage.startsWith("SdkHttpError ");
}
function PLe() {
  return (e_() ?? []).find(item => item.name === na);
}
function Wws() {
  return gD() ? te().mcpEntryRowNotServed : null;
}
function R_e(t) {
  return Wws() === t;
}
export { R1i, PLe, Wws, R_e };