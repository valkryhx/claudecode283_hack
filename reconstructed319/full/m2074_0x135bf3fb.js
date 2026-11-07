// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ku,
  N$
} from "B:/~BUN/root/chunk-rrf8gvt4.js";
import {
  sc,
  Jve,
  Ore,
  Ire,
  yI
} from "B:/~BUN/root/chunk-27h4st9h.js";

function s(o, t) {
  let c = Ku(),
    e = sc(o),
    n = Ire(e, t),
    a = yI(e, t),
    r = !(N$() && !Jve(e, t));
  return {
    enabled: c,
    effectiveWindow: n,
    threshold: a,
    enforced: r,
    source: Ore(e, t)
  }
}

function LYs(o) {
  let t;
  return {
    notify(c, e) {
      let n = s(c, e);
      if (t !== void 0 && k0o(t, n)) return;
      t = n, o(n)
    },
    reset() {
      t = void 0
    }
  }
}

function k0o(o, t) {
  return o.enabled === t.enabled && o.effectiveWindow === t.effectiveWindow && o.threshold === t.threshold && o.enforced === t.enforced && o.source === t.source
}
export {
  LYs,
  k0o
};
