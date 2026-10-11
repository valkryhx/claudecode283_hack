// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Z
} from "B:/~BUN/root/chunk-08bth2fj.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";

function yf(d) {
  let i = w(4),
    {
      children: o,
      color: t
    } = d,
    l;
  if (i[0] === S) l = e(s, {
    "aria-hidden": !0,
    width: 2,
    flexShrink: 0,
    children: e(n, {
      children: Z.bullet
    })
  }), i[0] = l;
  else l = i[0];
  let c;
  if (i[1] !== o || i[2] !== t) c = r(s, {
    flexDirection: "row",
    children: [l, e(s, {
      flexGrow: 1,
      flexShrink: 1,
      children: e(n, {
        color: t,
        children: o
      })
    })]
  }), i[1] = o, i[2] = t, i[3] = c;
  else c = i[3];
  return c
}
export {
  yf
};
