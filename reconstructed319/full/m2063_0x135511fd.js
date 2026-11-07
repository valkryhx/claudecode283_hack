// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  WPe,
  Tt
} from "B:/~BUN/root/chunk-dw9hahea.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";

function Lu(x) {
  let i = S(9),
    {
      status: t,
      children: l
    } = x,
    {
      color: o
    } = WPe[t],
    c;
  if (i[0] !== t) c = e(s, {
    width: 2,
    flexShrink: 0,
    children: e(Tt, {
      status: t
    })
  }), i[0] = t, i[1] = c;
  else c = i[1];
  const u = !o;
  let a;
  if (i[2] !== l || i[3] !== o || i[4] !== u) a = e(s, {
    flexGrow: 1,
    flexShrink: 1,
    children: e(n, {
      color: o,
      dimColor: u,
      children: l
    })
  }), i[2] = l, i[3] = o, i[4] = u, i[5] = a;
  else a = i[5];
  let d;
  if (i[6] !== c || i[7] !== a) d = r(s, {
    flexDirection: "row",
    children: [c, a]
  }), i[6] = c, i[7] = a, i[8] = d;
  else d = i[8];
  return d
}
export {
  Lu
};
