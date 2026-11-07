// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { y2s, _2s } from "B:/~BUN/root/chunk-game8aqv.js";
import { be } from "B:/~BUN/root/chunk-7wn6n2hd.js";
function C3n() {
  _2s(structuredClone(be("policySettings")));
}
function cmn() {
  let t = y2s();
  if (t === void 0) return !0;
  return !Bun.deepEquals(t, be("policySettings"));
}
export { C3n, cmn };