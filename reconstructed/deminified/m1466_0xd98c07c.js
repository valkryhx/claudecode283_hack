// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { uo } from "B:/~BUN/root/chunk-6pbxcdg3.js";
import { z, lp } from "B:/~BUN/root/chunk-n8qdr73v.js";
var d8 = uo({
    kind: "mcp_elicitation",
    payload: f(() => lp(t => typeof t === "object" && t !== null && "serverName" in t && "params" in t)),
    result: f(() => lp(t => typeof t === "object" && t !== null)),
    default: {
      action: "cancel"
    },
    holdsTop: !0
  }),
  I7 = uo({
    kind: "mcp_elicitation_waiting",
    payload: f(() => lp(t => typeof t === "object" && t !== null && "serverName" in t && "params" in t)),
    result: f(() => z(["dismiss", "retry", "cancel", "cancelled"])),
    default: "cancelled"
  });
function Cfr(t) {
  return t === d8.kind || t === I7.kind;
}
export { d8, I7, Cfr };