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
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";

function Fj(p) {
  let l = S(7),
    {
      children: i,
      subtitle: t
    } = p,
    o;
  if (l[0] !== i) o = e(n, {
    bold: !0,
    children: i
  }), l[0] = i, l[1] = o;
  else o = l[1];
  let c;
  if (l[2] !== t) c = t && e(n, {
    dimColor: !0,
    children: t
  }), l[2] = t, l[3] = c;
  else c = l[3];
  let a;
  if (l[4] !== o || l[5] !== c) a = r(s, {
    flexDirection: "column",
    children: [o, c]
  }), l[4] = o, l[5] = c, l[6] = a;
  else a = l[6];
  return a
}
export {
  Fj
};
