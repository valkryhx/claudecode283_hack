// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { n } from "B:/~BUN/root/chunk-qey16aan.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
function Ys(m) {
  let p = S(4),
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
export { Ys };