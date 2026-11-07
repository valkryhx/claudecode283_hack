// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Yn } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
function kn(r) {
  return Yn(nt(r).slice(0, 12));
}
function pea(r) {
  return Yn(nt(r).slice(0, 12));
}
var t = /^[0-9a-f]{12}$/;
function Wln(r) {
  return t.test(r) ? Yn(r) : void 0;
}
export { kn, pea, Wln };