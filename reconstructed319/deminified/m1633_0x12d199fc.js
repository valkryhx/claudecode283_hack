// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { mTo } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { OKe } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { xBt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
var {
  ceil: ceil,
  max: max
} = Math;
function m(t, e, r) {
  if (r ? xBt(t, e, r) : e === void 0) e = 1;else e = max(mTo(e), 0);
  var n = t == null ? 0 : t.length;
  if (!n || e < 1) return [];
  var l = 0,
    f = 0,
    o = Array(ceil(n / e));
  while (l < n) o[f++] = OKe(t, l, l += e);
  return o;
}
var H1e = m;
export { H1e };