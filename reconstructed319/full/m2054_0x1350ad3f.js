// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  ot,
  s
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";

function Bi(d) {
  let l = S(4),
    {
      multiline: n,
      children: r
    } = d;
  if (ot()) {
    let o;
    if (l[0] !== r) o = e(s, {
      "aria-role": "blockquote",
      children: r
    }), l[0] = r, l[1] = o;
    else o = l[1];
    return o
  }
  if (!n) {
    return r
  }
  let o;
  if (l[2] !== r) o = e(s, {
    borderStyle: "single",
    borderLeft: !0,
    borderRight: !1,
    borderTop: !1,
    borderBottom: !1,
    borderDimColor: !0,
    paddingLeft: 1,
    children: r
  }), l[2] = r, l[3] = o;
  else o = l[3];
  return o
}
export {
  Bi
};
