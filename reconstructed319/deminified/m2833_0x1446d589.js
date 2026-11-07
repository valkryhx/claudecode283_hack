// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import "B:/~BUN/root/chunk-ahv8vexc.js";
import "B:/~BUN/root/chunk-47qakrcr.js";
import "B:/~BUN/root/chunk-z2e0ksra.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import { R } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { oge } from "B:/~BUN/root/chunk-r83ncggy.js";
var o = new Set(["ClaudeAiProxyBearerRejectedError", "McpAuthError", "McpError", "McpResponseSchemaError", "McpToolCallError", "ProtocolError", "SdkError", "SdkHttpError", "StreamableHTTPError", "TelemetrySafeError"]);
function a(r) {
  if (r instanceof DOMException) return r.name === "TimeoutError";
  if (!(r instanceof Error)) return !1;
  if (r instanceof R) return !0;
  if (r instanceof oge) return !0;
  if (("errorCode" in r && typeof r.errorCode === "string" || "code" in r && typeof r.code === "string") && /^HTTP 40[13]\b/.test(r.message)) return !0;
  let e = r.name !== "Error" ? r.name : r.constructor?.name ?? "";
  return o.has(e);
}
export { a as isExpectedMcpCallError };