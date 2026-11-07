// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  wQe
} from "B:/~BUN/root/chunk-rmd6bs96.js";
import {
  ot,
  Vr
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  xo,
  z7
} from "B:/~BUN/root/chunk-tzwf3sbj.js";
import {
  si,
  so
} from "B:/~BUN/root/chunk-cpzw87wr.js";
import {
  sr,
  aa
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Ws
} from "B:/~BUN/root/chunk-x2k0mb6b.js";
import {
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
j();

function h() {
  let [o] = y(() => wQe() ? z7 : xo);
  return o
}

function fUe(o, {
  selfOpened: u,
  hasOpeningGrace: r = u,
  onCancelled: S,
  owedAtExit: b
}) {
  let [C, s] = y(!1), n = A(!1), [c, R] = y(!1), e = A(!1), i = h(), E = Vr(r ? i : null), d = !r || E, x = ot() ? !0 : !1, g = si(i), {
    refusedWithin: v,
    noteRefused: w
  } = so();

  function _() {
    if (r && (g() || v(i))) return w(), !0;
    return !1
  }
  let a = Ws(() => {
    if (e.current) return;
    let t = n.current;
    n.current = !0;
    let l = S(t);
    if (l === void 0) {
      e.current = !0;
      let p = b?.(t);
      if (p === void 0) {
        aa(1);
        return
      }
      p.then((m) => sr(1, "other", m === void 0 ? void 0 : {
        finalMessage: m
      }), () => sr(1));
      return
    }
    s(!0), f(l)
  }, void 0, u && !c);

  function D() {
    if (n.current || !d) return !1;
    return n.current = !0, s(!0), !0
  }

  function f(t) {
    if (e.current) return;
    e.current = !0, R(!0), o(t)
  }
  return {
    choicesDisabled: !d && !x,
    decided: C,
    take: D,
    refuseInput: _,
    settled: () => e.current,
    handBack: f,
    exit: a,
    exitHintShowing: a.pending && !c
  }
}
export {
  fUe
};
