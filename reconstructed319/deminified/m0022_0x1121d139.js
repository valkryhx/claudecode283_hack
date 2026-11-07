// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ey } from "B:/~BUN/root/chunk-n8cnxns2.js";
function Zn(r) {
  return Bun.stripANSI(r);
}
function s4e(r) {
  return Ey(Zn(Ey(String(r))));
}
function $a(r) {
  return r.replace(/[^\n\r\v\f\x85\u2028\u2029]+/g, n => Zn(n));
}
export { Zn, s4e, $a };