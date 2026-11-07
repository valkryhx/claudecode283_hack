// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { ia } from "B:/~BUN/root/chunk-q793s85g.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
function gt(x) {
  let N = S(7),
    {
      action: action,
      context: context,
      fallback: fallback,
      description: o,
      parens: parens,
      bold: bold,
      terse: terse,
      format: format
    } = x,
    chord = ia(action, context, fallback),
    s;
  if (N[0] !== bold || N[1] !== chord || N[2] !== o || N[3] !== format || N[4] !== parens || N[5] !== terse) s = e(Y, {
    chord: chord,
    action: o,
    parens: parens,
    bold: bold,
    terse: terse,
    format: format
  }), N[0] = bold, N[1] = chord, N[2] = o, N[3] = format, N[4] = parens, N[5] = terse, N[6] = s;else s = N[6];
  return s;
}
export { gt };