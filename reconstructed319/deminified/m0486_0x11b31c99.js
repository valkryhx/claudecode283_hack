// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Jf, bj } from "B:/~BUN/root/chunk-rr294jrm.js";
function dLe() {
  if (i.CLAUDE_CODE_REMOTE !== !0) return;
  let e = i.CLAUDE_CODE_REMOTE_SESSION_ID ?? "";
  return bj(e) ? Jf(e) : void 0;
}
export { dLe };