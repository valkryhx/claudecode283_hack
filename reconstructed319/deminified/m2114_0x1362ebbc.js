// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { n, sn } from "B:/~BUN/root/chunk-qey16aan.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
function LT(a) {
  let l = S(2),
    {
      url: url
    } = a,
    t;
  if (l[0] !== url) t = r(n, {
    dimColor: !0,
    children: ["Learn more: ", e(sn, {
      url: url
    })]
  }), l[0] = url, l[1] = t;else t = l[1];
  return t;
}
export { LT };