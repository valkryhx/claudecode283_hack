// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  vd
} from "B:/~BUN/root/chunk-7g0t7h3t.js";
import {
  fDt
} from "B:/~BUN/root/chunk-qk8tvzkn.js";
import {
  O,
  A,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function wi(n, e, t) {
  let r = vd(),
    i = r?.getDisplayText(n, e),
    o = i === void 0,
    s = r ? "action_not_found" : "no_context",
    u = A(!1);
  if (O(() => {
      if (o && !u.current) u.current = !0, fDt(n, e, t, s)
    }, [o, n, e, t, s]), o) return t;
  return i === null ? "" : i
}
export {
  wi
};
