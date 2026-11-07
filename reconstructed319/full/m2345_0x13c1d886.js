// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ea
} from "B:/~BUN/root/chunk-ahv8vexc.js";
import {
  j0
} from "B:/~BUN/root/chunk-z2e0ksra.js";

function hit(r) {
  return r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED"
}

function T_n(r) {
  if (r instanceof j0) return !0;
  if (hit(r)) return !1;
  if (r instanceof Error && !(r instanceof Ea) && "code" in r) {
    if (r.code === 403) return !r.message.includes("Server returned 403 after trying upscoping");
    if (r.code === 401) return !r.message.includes("Server returned 401 after successful authentication")
  }
  return !1
}
export {
  hit,
  T_n
};
