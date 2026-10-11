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
  ol
} from "B:/~BUN/root/chunk-syke822n.js";
import {
  s
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  Ml
} from "B:/~BUN/root/chunk-ejdx9rag.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
var VC = 2,
  cU = 1,
  dU = 2;

function Go(d) {
  let c = w(9),
    {
      children: t,
      color: i
    } = d;
  if (ol()) {
    let o;
    if (c[0] !== t) o = e(s, {
      flexDirection: "column",
      paddingX: cU,
      flexShrink: 0,
      children: t
    }), c[0] = t, c[1] = o;
    else o = c[1];
    return o
  }
  let o;
  if (c[2] !== i) o = e(Ml, {
    color: i
  }), c[2] = i, c[3] = o;
  else o = c[3];
  let n;
  if (c[4] !== t) n = e(s, {
    flexDirection: "column",
    paddingX: VC,
    children: t
  }), c[4] = t, c[5] = n;
  else n = c[5];
  let l;
  if (c[6] !== o || c[7] !== n) l = r(s, {
    flexDirection: "column",
    paddingTop: 1,
    children: [o, n]
  }), c[6] = o, c[7] = n, c[8] = l;
  else l = c[8];
  return l
}
export {
  VC,
  cU,
  dU,
  Go
};
