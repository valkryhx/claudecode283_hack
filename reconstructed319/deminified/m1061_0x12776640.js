// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { hy, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function rI(r) {
  if (typeof r === "string") return r;
  if (typeof r === "number") return String(r);
  if (!r) return "";
  if (Array.isArray(r)) return r.map(rI).join("");
  if (hy(r)) return rI(r.props.children);
  return "";
}
export { rI };