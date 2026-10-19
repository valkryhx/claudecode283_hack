// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Zl } from "B:/~BUN/root/chunk-ps74es0g.js";
import { Nut } from "B:/~BUN/root/chunk-raq9cfnw.js";
import { P, A, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
function Cs(n, e, t) {
  let r = Zl(),
    i = r?.getDisplayText(n, e),
    o = i === void 0,
    s = r ? "action_not_found" : "no_context",
    u = A(!1);
  if (P(() => {
    if (o && !u.current) u.current = !0, Nut(n, e, t, s);
  }, [o, n, e, t, s]), o) return t;
  return i === null ? "" : i;
}
export { Cs };