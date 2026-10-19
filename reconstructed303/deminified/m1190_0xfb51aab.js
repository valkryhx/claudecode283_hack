// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { At } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { sn } from "B:/~BUN/root/chunk-zayh6xmh.js";
function Abe() {
  return dRt() === void 0;
}
function dRt() {
  if (At() || xe() !== "firstParty") return "egress";
  return sn("allow_remote_sessions") ? void 0 : "policy_org";
}
export { Abe, dRt };