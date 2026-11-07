// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
var r = new Set([Me, kt]);
function rOe(e) {
  return r.has(e);
}
function YXs(e, n) {
  return rOe(e) ? e : n;
}
function mst(e) {
  return e === kt ? "Select-Object -First, Select-Object -Last or Select-String" : "head, tail or grep";
}
function JN(e) {
  return e.isMcp !== !0 && rOe(e.name);
}
export { rOe, YXs, mst, JN };