// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { gn } from "B:/~BUN/root/chunk-f0zgv0ya.js";
function YIe() {
  return b6t() === void 0;
}
function b6t() {
  if (St() || Te() !== "firstParty") return "egress";
  return gn("allow_remote_sessions") ? void 0 : "policy_org";
}
export { YIe, b6t };