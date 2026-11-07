// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  nh
} from "B:/~BUN/root/chunk-dwg8my6z.js";
import {
  s,
  NY
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  Wj
} from "B:/~BUN/root/chunk-hh79wmvd.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  ve,
  Zt,
  G_,
  A,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function u() {
  let r = ve(Wj),
    [o, n, t, i] = NY(),
    m = i() ?? n.isVisible;
  return [o, m || r, t]
}

function ZO({
  children: r
}) {
  let o = ve(nh),
    [n, t, i] = u(),
    m = A(r),
    [, f] = G_((p) => p + 1, 0),
    c = !t;
  if (!c) m.current = r;
  let a = o?.columns,
    l = o?.rows;
  return Zt(() => {
    if (c && i()) f()
  }, [a, l, c, i]), e(s, {
    ref: n,
    children: m.current
  })
}

function Nj(r) {
  let [o, n] = u(), t = A(r);
  if (n) t.current = r;
  return [o, t.current]
}
export {
  ZO,
  Nj
};
