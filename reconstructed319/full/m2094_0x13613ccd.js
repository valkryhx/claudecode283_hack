// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  cn
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  Rn
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Sn
} from "B:/~BUN/root/chunk-v95bwhaa.js";
import {
  ue,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function BN(r, o, t = 1000, n = 0, a) {
  let e = Rn(),
    u = () => cn(Math.max(0, (a ?? Date.now()) - r - n)),
    l = ue((f) => {
      if (!o) return () => {};
      let i, s = () => {
        try {
          f()
        } finally {
          i = e.setTimeout(s, t)
        }
      };
      return i = e.setTimeout(s, t), () => i()
    }, [o, t, e]);
  return At(l, u, u)
}

function OY({
  onClose: r,
  onBack: o,
  onKill: t,
  onEnter: n
}) {
  return Sn({
      "confirm:yes": n ?? r
    }, {
      context: "Confirmation"
    }),
    function(e) {
      if (e.key === " ") e.preventDefault(), r();
      else if (e.key === "left" && o) e.preventDefault(), o();
      else if (e.key === "x" && !e.ctrl && !e.meta && t) e.preventDefault(), t()
    }
}
export {
  BN,
  OY
};
