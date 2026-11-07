// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Cr } from "B:/~BUN/root/chunk-7wn6n2hd.js";
function wEs() {
  if ((Cr() || {}).permissions?.disableBypassPermissionsMode === "disable") return "Bypass permissions mode was disabled by settings";
  return;
}
function EA() {
  return wEs() !== void 0;
}
export { wEs, EA };