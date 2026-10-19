// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { Zo } from "B:/~BUN/root/chunk-f2a36mfn.js";
import { o, M, Sf, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
var lh = Zo({
    kind: "local_jsx",
    payload: f(() => u({
      nodeId: o(),
      commandName: o(),
      immediate: M(),
      hidesPrompt: M(),
      holdsQueue: M().optional()
    })),
    result: f(() => Sf()),
    default: null,
    userInvoked: !0,
    hideWhile: []
  }),
  t = f(() => u({
    holdsQueue: M().optional()
  }));
function VCt(a) {
  return a.open.some(item => item.kind === lh.kind && t().safeParse(item.payload).data?.holdsQueue !== !1);
}
var Ceo = new Set(["rate-limit-options", "pro-trial-expired"]);
export { lh, VCt, Ceo };