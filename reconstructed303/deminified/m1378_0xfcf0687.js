// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
function ls(m) {
  let p = w(4),
    {
      error: error
    } = m;
  if (!error) {
    return null;
  }
  let children;
  if (p[0] !== error) children = d(error), p[0] = error, p[1] = children;else children = p[1];
  let f;
  if (p[2] !== children) f = e(n, {
    color: "error",
    children: children
  }), p[2] = children, p[3] = f;else f = p[3];
  return f;
}
export { ls };