// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ya
} from "B:/~BUN/root/chunk-7nc4t0q7.js";
import {
  gKe
} from "B:/~BUN/root/chunk-y355pc11.js";
import {
  R,
  T,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();

function os(n, e, t) {
  let r = Ya(),
    i = r?.getDisplayText(n, e),
    o = i === void 0,
    s = r ? "action_not_found" : "no_context",
    u = T(!1);
  if (R(() => {
      if (o && !u.current) u.current = !0, gKe(n, e, t, s)
    }, [o, n, e, t, s]), o) return t;
  return i === null ? "" : i
}
export {
  os
};
