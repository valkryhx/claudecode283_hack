// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
var n = he({
  scale: void 0
}, (e) => {
  e.scale = void 0
});

function Sgt() {
  let e = i.CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP ?? 1;
  if (typeof Bun < "u" && typeof Bun.unsafe.setJITPolicy === "function") Bun.unsafe.setJITPolicy(e), n.scale = e;
  return e
}

function hAs() {
  return n.scale
}
export {
  Sgt,
  hAs
};
