// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { UVr, BVr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { he } from "B:/~BUN/root/chunk-3rzkfay5.js";
function rGt() {
  BVr(structuredClone(he("policySettings")));
}
function Tyt() {
  let t = UVr();
  if (t === void 0) return !0;
  return !Bun.deepEquals(t, he("policySettings"));
}
export { rGt, Tyt };