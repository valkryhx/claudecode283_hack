// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  wm
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Jt,
  ve,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var u = Jt(void 0);

function Jvt(d) {
  let c = S(3),
    {
      queue: t,
      children: r
    } = d,
    o;
  if (c[0] !== r || c[1] !== t) o = e(u.Provider, {
    value: t,
    children: r
  }), c[0] = r, c[1] = t, c[2] = o;
  else o = c[2];
  return o
}

function Nf() {
  return ve(u) ?? wm()
}
export {
  Jvt,
  Nf
};
