// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";

function is(P) {
  let K = S(8),
    {
      onKeyDown: o,
      onPaste: t,
      flexDirection: p,
      gap: n,
      tabIndex: d,
      autoFocus: u,
      children: a
    } = P,
    r = p === void 0 ? "column" : p,
    c = d === void 0 ? 0 : d,
    i = u === void 0 ? !0 : u,
    v;
  if (K[0] !== i || K[1] !== a || K[2] !== r || K[3] !== n || K[4] !== o || K[5] !== t || K[6] !== c) v = e(s, {
    flexDirection: r,
    gap: n,
    tabIndex: c,
    autoFocus: i,
    onKeyDown: o,
    onPaste: t,
    children: a
  }), K[0] = i, K[1] = a, K[2] = r, K[3] = n, K[4] = o, K[5] = t, K[6] = c, K[7] = v;
  else v = K[7];
  return v
}
export {
  is
};
