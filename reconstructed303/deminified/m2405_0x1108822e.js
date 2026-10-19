// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { dt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
var e = "claudecode/editResult",
  u = "1";
function OWr(o, t) {
  return o === dt && Dn(t) && t[e] === u;
}
async function IWr(o, t) {
  if (o.isError === !0 || t.subagentFrameResult === void 0) return o;
  try {
    if ((await t.subagentFrameResultHolds?.()) === !1) return o;
  } catch (error) {
    return l(error), o;
  }
  return {
    ...o,
    _meta: {
      ...o._meta,
      [e]: t.subagentFrameResult
    }
  };
}
export { OWr, IWr };