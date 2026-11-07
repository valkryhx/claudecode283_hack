// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { hs } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { gpt } from "B:/~BUN/root/chunk-8ytf4evt.js";
function sW(e) {
  try {
    gpt(nn().BASE_API_URL, e);
  } catch {
    return "egress_blocked";
  }
  if (hs("zdr")) return "egress_blocked";
  return St() ? "essential_traffic" : void 0;
}
export { sW };