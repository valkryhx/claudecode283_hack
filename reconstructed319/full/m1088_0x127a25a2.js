// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  Ws
} from "B:/~BUN/root/chunk-x2k0mb6b.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";

function ele(s) {
  let b = S(3),
    {
      children: u,
      exitActive: o,
      onInterrupt: x,
      italic: r
    } = s,
    R = o === void 0 ? !0 : o,
    t = r === void 0 ? !1 : r,
    {
      pending: y,
      keyName: N
    } = Ws(void 0, x, R);
  const i = y ? `Press ${N} again to exit` : u;
  let a;
  if (b[0] !== t || b[1] !== i) a = e(n, {
    dimColor: !0,
    italic: t,
    children: i
  }), b[0] = t, b[1] = i, b[2] = a;
  else a = b[2];
  return a
}
export {
  ele
};
