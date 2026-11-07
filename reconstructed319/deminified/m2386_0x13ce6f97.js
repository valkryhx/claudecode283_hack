// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { wQe } from "B:/~BUN/root/chunk-rmd6bs96.js";
import { ot, Vr } from "B:/~BUN/root/chunk-qey16aan.js";
import { xo, z7 } from "B:/~BUN/root/chunk-tzwf3sbj.js";
import { si, so } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { sr, aa } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ws } from "B:/~BUN/root/chunk-x2k0mb6b.js";
import { A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
j();
function h() {
  let [o] = y(() => wQe() ? z7 : xo);
  return o;
}
function fUe(o, {
  selfOpened: selfOpened,
  hasOpeningGrace = selfOpened,
  onCancelled: onCancelled,
  owedAtExit: owedAtExit
}) {
  let [decided, s] = y(!1),
    n = A(!1),
    [c, R] = y(!1),
    e = A(!1),
    i = h(),
    E = Vr(hasOpeningGrace ? i : null),
    d = !hasOpeningGrace || E,
    x = ot() ? !0 : !1,
    g = si(i),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused
    } = so();
  function refuseInput() {
    if (hasOpeningGrace && (g() || refusedWithin(i))) return noteRefused(), !0;
    return !1;
  }
  let exit = Ws(() => {
    if (e.current) return;
    let current = n.current;
    n.current = !0;
    let l = onCancelled(current);
    if (l === void 0) {
      e.current = !0;
      let p = owedAtExit?.(current);
      if (p === void 0) {
        aa(1);
        return;
      }
      p.then(finalMessage => sr(1, "other", finalMessage === void 0 ? void 0 : {
        finalMessage: finalMessage
      }), () => sr(1));
      return;
    }
    s(!0), handBack(l);
  }, void 0, selfOpened && !c);
  function take() {
    if (n.current || !d) return !1;
    return n.current = !0, s(!0), !0;
  }
  function handBack(t) {
    if (e.current) return;
    e.current = !0, R(!0), o(t);
  }
  return {
    choicesDisabled: !d && !x,
    decided: decided,
    take: take,
    refuseInput: refuseInput,
    settled: () => e.current,
    handBack: handBack,
    exit: exit,
    exitHintShowing: exit.pending && !c
  };
}
export { fUe };