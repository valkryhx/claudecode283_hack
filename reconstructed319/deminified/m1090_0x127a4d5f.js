// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Qi } from "B:/~BUN/root/chunk-qey16aan.js";
import { xo, ra } from "B:/~BUN/root/chunk-tzwf3sbj.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { FCt } from "B:/~BUN/root/chunk-83f94s4f.js";
import { q4e } from "B:/~BUN/root/chunk-fw3bvjzd.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { O, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function Pzt({
  children: children
}) {
  let [review, u] = y(null),
    [l, i] = y(!1),
    r = A({
      current: 0,
      revealedAt: null
    });
  if (O(() => {
    let s = null;
    return FCt((settings, baseline, R) => new Promise(c => {
      s = c, r.current = {
        current: 0,
        revealedAt: null
      };
      function answer(o, v) {
        if (s !== c || v !== r.current.current) return !1;
        return s = null, u(null), i(o === "rejected"), c(o), !0;
      }
      u({
        settings: settings,
        baseline: baseline,
        version: 0,
        answer: answer
      }), (async () => {
        for await (let o of R) {
          if (s !== c) return;
          r.current = {
            current: r.current.current + 1,
            revealedAt: null
          }, u({
            settings: o.settings,
            baseline: o.baseline,
            version: r.current.current,
            answer: answer
          });
        }
      })().catch(o => a(o));
    })), () => {
      FCt(null);
      let f = s;
      s = null, f?.("deferred_no_consent_surface");
    };
  }, []), l) return null;
  if (review === null) return children;
  return e(m, {
    review: review,
    gate: r.current
  });
}
function m({
  review: review_2,
  gate: gate
}) {
  let u = Qi();
  O(() => {
    if (gate.current === review_2.version) gate.revealedAt = Date.now();
  }, [gate, review_2.version, review_2.settings, review_2.baseline]);
  function wouldTakeAnswer() {
    return gate.current === review_2.version && gate.revealedAt !== null && !ra(u, gate.revealedAt, xo);
  }
  function i(r) {
    if (!wouldTakeAnswer()) {
      if (gate.revealedAt !== null) gate.revealedAt = Date.now();
      return !1;
    }
    return review_2.answer(r, review_2.version);
  }
  return e(q4e, {
    settings: review_2.settings,
    baseline: review_2.baseline,
    reveal: "org_config_hold",
    wouldTakeAnswer: wouldTakeAnswer,
    onAccept: () => i("approved"),
    onReject: () => i("rejected")
  });
}
export { Pzt };