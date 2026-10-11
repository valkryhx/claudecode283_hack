// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { g3t } from "B:/~BUN/root/chunk-nvr3pbxz.js";
import { Z3n, pft } from "B:/~BUN/root/chunk-ah3egpyh.js";
var {
  ceil: ceil,
  max: max
} = Math;
function m(t, e, r) {
  if (r ? Z3n(t, e, r) : e === void 0) e = 1;else e = max(g3t(e), 0);
  var n = t == null ? 0 : t.length;
  if (!n || e < 1) return [];
  var l = 0,
    f = 0,
    o = Array(ceil(n / e));
  while (l < n) o[f++] = pft(t, l, l += e);
  return o;
}
var Bwt = m;
export { Bwt };