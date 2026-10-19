// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fg } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, Ee, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
var u = qt(void 0);
function Ent(d) {
  let c = w(3),
    {
      queue: t,
      children: children
    } = d,
    o;
  if (c[0] !== children || c[1] !== t) o = e(u.Provider, {
    value: t,
    children: children
  }), c[0] = children, c[1] = t, c[2] = o;else o = c[2];
  return o;
}
function Ou() {
  return Ee(u) ?? Fg();
}
export { Ent, Ou };