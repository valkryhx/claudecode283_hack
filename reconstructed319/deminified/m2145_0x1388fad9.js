// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { _a } from "B:/~BUN/root/chunk-5xe4wxb1.js";
function _Ie(n) {
  let e = _a(n.client);
  return e != null && "transport" in e && e.transport === void 0;
}
function bIe(n, e) {
  return n === e || n?.type === "connected" && e?.type === "connected" && n.client === e.client;
}
export { _Ie, bIe };