// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  ia
} from "B:/~BUN/root/chunk-q793s85g.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";

function gt(x) {
  let N = S(7),
    {
      action: h,
      context: k,
      fallback: K,
      description: o,
      parens: t,
      bold: n,
      terse: r,
      format: i
    } = x,
    a = ia(h, k, K),
    s;
  if (N[0] !== n || N[1] !== a || N[2] !== o || N[3] !== i || N[4] !== t || N[5] !== r) s = e(Y, {
    chord: a,
    action: o,
    parens: t,
    bold: n,
    terse: r,
    format: i
  }), N[0] = n, N[1] = a, N[2] = o, N[3] = i, N[4] = t, N[5] = r, N[6] = s;
  else s = N[6];
  return s
}
export {
  gt
};
