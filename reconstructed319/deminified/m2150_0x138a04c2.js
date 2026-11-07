// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Z1, ha } from "B:/~BUN/root/chunk-q2rjek8y.js";
async function L6n(r, i, a) {
  if (!(r instanceof Error) || !r.message.startsWith("SDK auth failed: ") || !(r.cause instanceof Error)) return !1;
  let {
      cause: cause
    } = r,
    s = import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpAuthModule().classifySdkAuthFailure(r.message, cause);
  if (s !== "dcr_failed" && s !== "dcr_rejected") return !1;
  if (!("status" in cause) && !("errorCode" in cause)) return cause.message === "Incompatible auth server: does not support dynamic client registration";
  if (!((await Z1())?.[ha(i, a)]?.discoveryState?.oauthMetadataFound ?? a.oauth?.authServerMetadataUrl !== void 0)) return !1;
  let t = "status" in cause ? cause.status : Number(/^HTTP (\d{3}): Invalid OAuth error response: /.exec(cause.message)?.[1]);
  if (typeof t === "number" && Number.isFinite(t)) return t >= 400 && t < 500 && t !== 408 && t !== 429;
  switch ("errorCode" in cause ? cause.errorCode : void 0) {
    case "invalid_client_metadata":
    case "invalid_client":
    case "unauthorized_client":
      return !0;
    default:
      return !1;
  }
}
export { L6n };