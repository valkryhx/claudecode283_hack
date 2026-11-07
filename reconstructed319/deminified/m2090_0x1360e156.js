// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wo } from "B:/~BUN/root/chunk-wm671vgg.js";
import { B, Ep } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var rre = Wo({
    kind: "mcp_elicitation",
    payload: p(() => Ep(t => typeof t === "object" && t !== null && "serverName" in t && "params" in t)),
    result: p(() => Ep(t => typeof t === "object" && t !== null)),
    default: {
      action: "cancel"
    },
    holdsTop: !0
  }),
  uve = Wo({
    kind: "mcp_elicitation_waiting",
    payload: p(() => Ep(t => typeof t === "object" && t !== null && "serverName" in t && "params" in t)),
    result: p(() => B(["dismiss", "retry", "cancel", "cancelled"])),
    default: "cancelled"
  });
function t9o(t) {
  return t === rre.kind || t === uve.kind;
}
export { rre, uve, t9o };