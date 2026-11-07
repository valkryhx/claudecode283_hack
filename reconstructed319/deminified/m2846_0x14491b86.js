// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { dt } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
var e = "claudecode/editResult",
  l = "1";
function bMo(o, t) {
  return o === dt && it(t) && t[e] === l;
}
async function SMo(o, t) {
  if (o.isError === !0 || t.subagentFrameResult === void 0) return o;
  try {
    if ((await t.subagentFrameResultHolds?.()) === !1) return o;
  } catch (error) {
    return a(error), o;
  }
  return {
    ...o,
    _meta: {
      ...o._meta,
      [e]: t.subagentFrameResult
    }
  };
}
export { bMo, SMo };