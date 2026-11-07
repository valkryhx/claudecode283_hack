// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Qi
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  xo,
  ra
} from "B:/~BUN/root/chunk-tzwf3sbj.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  FCt
} from "B:/~BUN/root/chunk-83f94s4f.js";
import {
  q4e
} from "B:/~BUN/root/chunk-fw3bvjzd.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  O,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function Pzt({
  children: n
}) {
  let [t, u] = y(null), [l, i] = y(!1), r = A({
    current: 0,
    revealedAt: null
  });
  if (O(() => {
      let s = null;
      return FCt((f, d, R) => new Promise((c) => {
        s = c, r.current = {
          current: 0,
          revealedAt: null
        };

        function p(o, v) {
          if (s !== c || v !== r.current.current) return !1;
          return s = null, u(null), i(o === "rejected"), c(o), !0
        }
        u({
          settings: f,
          baseline: d,
          version: 0,
          answer: p
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
              answer: p
            })
          }
        })().catch((o) => a(o))
      })), () => {
        FCt(null);
        let f = s;
        s = null, f?.("deferred_no_consent_surface")
      }
    }, []), l) return null;
  if (t === null) return n;
  return e(m, {
    review: t,
    gate: r.current
  })
}

function m({
  review: n,
  gate: t
}) {
  let u = Qi();
  O(() => {
    if (t.current === n.version) t.revealedAt = Date.now()
  }, [t, n.version, n.settings, n.baseline]);

  function l() {
    return t.current === n.version && t.revealedAt !== null && !ra(u, t.revealedAt, xo)
  }

  function i(r) {
    if (!l()) {
      if (t.revealedAt !== null) t.revealedAt = Date.now();
      return !1
    }
    return n.answer(r, n.version)
  }
  return e(q4e, {
    settings: n.settings,
    baseline: n.baseline,
    reveal: "org_config_hold",
    wouldTakeAnswer: l,
    onAccept: () => i("approved"),
    onReject: () => i("rejected")
  })
}
export {
  Pzt
};
