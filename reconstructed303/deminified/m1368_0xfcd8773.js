// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Fa } from "B:/~BUN/root/chunk-a3hh790f.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
function gt(x) {
  let N = w(7),
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
    chord = Fa(action, context, fallback),
    s;
  if (N[0] !== bold || N[1] !== chord || N[2] !== o || N[3] !== format || N[4] !== parens || N[5] !== terse) s = e(q, {
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