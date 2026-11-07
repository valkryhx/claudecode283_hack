// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ue, O, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function iy(r) {
  let [t, n] = y({
      attempts: 0,
      refused: null
    }),
    refuse = ue(refused => {
      n(a => ({
        attempts: a.attempts + 1,
        refused: refused
      }));
    }, []),
    answer = ue(e => {
      if (r(e) === !1) return refuse(e), !1;
      return !0;
    }, [r, refuse]);
  return O(() => {
    if (t.refused !== null) n(e => ({
      attempts: e.attempts,
      refused: null
    }));
  }, [t.refused]), {
    answer: answer,
    refuse: refuse,
    refused: t.refused,
    attempts: t.attempts
  };
}
export { iy };