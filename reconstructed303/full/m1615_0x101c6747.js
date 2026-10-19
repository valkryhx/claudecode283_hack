// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Zo
} from "B:/~BUN/root/chunk-f2a36mfn.js";
import {
  U,
  Jc
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var poe = Zo({
    kind: "mcp_elicitation",
    payload: f(() => Jc((t) => typeof t === "object" && t !== null && ("serverName" in t) && ("params" in t))),
    result: f(() => Jc((t) => typeof t === "object" && t !== null)),
    default: {
      action: "cancel"
    },
    holdsTop: !0
  }),
  Oce = Zo({
    kind: "mcp_elicitation_waiting",
    payload: f(() => Jc((t) => typeof t === "object" && t !== null && ("serverName" in t) && ("params" in t))),
    result: f(() => U(["dismiss", "retry", "cancel", "cancelled"])),
    default: "cancelled"
  });

function N9r(t) {
  return t === poe.kind || t === Oce.kind
}
export {
  poe,
  Oce,
  N9r
};
