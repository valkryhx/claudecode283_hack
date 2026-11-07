// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { xi, Vi, nA, Dc, z0 } from "B:/~BUN/root/chunk-w089myk0.js";
function g3e(r) {
  return r instanceof Error && "code" in r && r.code === "CLAUDEAI_BEARER_REJECTED";
}
function Tkn(r) {
  if (r instanceof z0) return !0;
  if (g3e(r)) return !1;
  if (r instanceof nA && (r.status === 403 || r.status === 401)) return r.code !== xi.ClientHttpAuthentication && r.code !== xi.ClientHttpForbidden;
  if (r instanceof Error && !(r instanceof Dc) && !(r instanceof Vi) && "code" in r && (r.code === 403 || r.code === 401)) return !0;
  return !1;
}
export { g3e, Tkn };