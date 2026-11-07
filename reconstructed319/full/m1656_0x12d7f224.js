// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";

function Ys(m) {
  let p = S(4),
    {
      error: r
    } = m;
  if (!r) {
    return null
  }
  let o;
  if (p[0] !== r) o = d(r), p[0] = r, p[1] = o;
  else o = p[1];
  let f;
  if (p[2] !== o) f = e(n, {
    color: "error",
    children: o
  }), p[2] = o, p[3] = f;
  else f = p[3];
  return f
}
export {
  Ys
};
