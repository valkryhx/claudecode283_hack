// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { _t, _r } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { oo } from "B:/~BUN/root/chunk-1a6hgte8.js";
import { Gi, rs } from "B:/~BUN/root/chunk-bt71g93n.js";
import { yo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Wr } from "B:/~BUN/root/chunk-5r1x61tc.js";
import { T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
function Sue(d, {
  selfOpened: selfOpened,
  onCancelled: onCancelled
}) {
  let [decided, r] = g(!1),
    n = T(!1),
    [i, p] = g(!1),
    e = T(!1),
    h = _r(selfOpened ? oo : null),
    u = !selfOpened || h,
    m = _t() ? !0 : !1,
    C = Gi(oo),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused
    } = rs();
  function refuseInput() {
    if (selfOpened && (C() || refusedWithin(oo))) return noteRefused(), !0;
    return !1;
  }
  let exit = Wr(() => {
    if (e.current) return;
    let current = n.current;
    n.current = !0;
    let a = onCancelled(current);
    if (a === void 0) {
      e.current = !0, yo(1);
      return;
    }
    r(!0), handBack(a);
  }, void 0, selfOpened && !i);
  function take() {
    if (n.current || !u) return !1;
    return n.current = !0, r(!0), !0;
  }
  function handBack(o) {
    if (e.current) return;
    e.current = !0, p(!0), d(o);
  }
  return {
    choicesDisabled: !u && !m,
    decided: decided,
    take: take,
    refuseInput: refuseInput,
    settled: () => e.current,
    handBack: handBack,
    exit: exit,
    exitHintShowing: exit.pending && !i
  };
}
export { Sue };