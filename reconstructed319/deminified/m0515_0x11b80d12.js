// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { J } from "B:/~BUN/root/chunk-r5zmhp23.js";
function $Dt(t) {
  return function (e) {
    let o = t * 2 ** (e - 1),
      r = Math.round(o * (0.5 + Math.random() / 2));
    return J(r);
  };
}
export { $Dt };