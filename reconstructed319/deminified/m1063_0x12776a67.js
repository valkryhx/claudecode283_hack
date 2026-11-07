// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { vd } from "B:/~BUN/root/chunk-7g0t7h3t.js";
import { d1, ZIn, fDt } from "B:/~BUN/root/chunk-qk8tvzkn.js";
import { O, A, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function ia(e, i, t) {
  let o = vd(),
    n = o ? ZIn(e, i, o.bindings) : void 0,
    r = n === void 0,
    f = o ? "action_not_found" : "no_context",
    d = A(!1);
  if (O(() => {
    if (r && !d.current) d.current = !0, fDt(e, i, t, f);
  }, [r, e, i, t, f]), n === void 0) return t;
  return n === null ? "" : d1(n);
}
export { ia };