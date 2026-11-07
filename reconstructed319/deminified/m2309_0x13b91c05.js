// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
var e = ["searchTools", "describeTool"],
  r = ["ask", "haiku", "opus", "sonnet", "fable"];
function m4r(o) {
  return le() && (e.includes(o) || r.includes(o));
}
export { m4r };