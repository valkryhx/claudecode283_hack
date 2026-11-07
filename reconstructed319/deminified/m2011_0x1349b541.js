// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { uUn } from "B:/~BUN/root/chunk-n98vg3jf.js";
function mKt(e) {
  if (Array.isArray(e)) {
    let n = e.map(mKt);
    return n.length > 0 && n.every(item => item !== void 0) ? n.flatMap(item => item ?? []) : void 0;
  }
  return uUn(e, "door");
}
export { mKt };