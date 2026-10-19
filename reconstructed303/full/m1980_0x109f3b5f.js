// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ot,
  Dr
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  No
} from "B:/~BUN/root/chunk-5xxjpbgm.js";
import {
  Za,
  cs
} from "B:/~BUN/root/chunk-nbjke4gr.js";
import {
  Yn,
  Ns
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  qo
} from "B:/~BUN/root/chunk-327wfkv3.js";
import {
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();

function RCe(p, {
  selfOpened: r,
  hasOpeningGrace: o = r,
  onCancelled: h,
  owedAtExit: m
}) {
  let [S, i] = y(!1), n = A(!1), [u, b] = y(!1), e = A(!1), C = Dr(o ? No : null), s = !o || C, R = ot() ? !0 : !1, E = Za(No), {
    refusedWithin: x,
    noteRefused: v
  } = cs();

  function w() {
    if (o && (E() || x(No))) return v(), !0;
    return !1
  }
  let c = qo(() => {
    if (e.current) return;
    let t = n.current;
    n.current = !0;
    let a = h(t);
    if (a === void 0) {
      e.current = !0;
      let f = m?.(t);
      if (f === void 0) {
        Ns(1);
        return
      }
      f.then((l) => Yn(1, "other", l === void 0 ? void 0 : {
        finalMessage: l
      }), () => Yn(1));
      return
    }
    i(!0), d(a)
  }, void 0, r && !u);

  function g() {
    if (n.current || !s) return !1;
    return n.current = !0, i(!0), !0
  }

  function d(t) {
    if (e.current) return;
    e.current = !0, b(!0), p(t)
  }
  return {
    choicesDisabled: !s && !R,
    decided: S,
    take: g,
    refuseInput: w,
    settled: () => e.current,
    handBack: d,
    exit: c,
    exitHintShowing: c.pending && !u
  }
}
export {
  RCe
};
