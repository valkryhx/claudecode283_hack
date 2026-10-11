// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { g2 } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { b, fa } from "B:/~BUN/root/chunk-qe2zga5e.js";
var d = /[\x7f-\x9f]/g,
  t = e => e.replace(d, r => `\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`),
  c = /[\x00-\x1f\x7f-\x9f]/g;
function B8t(e) {
  return e.replace(c, "");
}
function j8t(e, {
  verbose: verbose
}) {
  if (Object.keys(e).length === 0) return "";
  let n = g2(e);
  if (n !== null) return n;
  return Object.entries(e).map(([o, i]) => {
    let s = t(b(i));
    return `${t(fa(o).slice(1, -1))}: ${s}`;
  }).join(", ");
}
export { B8t, j8t };