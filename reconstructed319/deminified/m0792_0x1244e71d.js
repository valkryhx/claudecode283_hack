// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { dO } from "B:/~BUN/root/chunk-y1b1g4ac.js";
function w4r(e) {
  return dO() ? e : void 0;
}
function $ke(e) {
  return w4r(e.proactivityLevel);
}
function LQn(e, t) {
  let proactivityLevel = w4r(t);
  return {
    permissionMode: e ?? (proactivityLevel === void 0 ? void 0 : "default"),
    proactivityLevel: proactivityLevel
  };
}
export { w4r, $ke, LQn };