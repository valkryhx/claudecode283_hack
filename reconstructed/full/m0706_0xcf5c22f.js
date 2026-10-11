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
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Qg,
  sl,
  Du,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  hn
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();

function y(s) {
  return s !== ""
}

function C(o, a) {
  return r(sl, {
    children: [a > 0 && e(n, {
      dimColor: !0,
      children: " \xB7 "
    }), o]
  }, Du(o) ? o.key ?? a : a)
}

function ye(g) {
  let m = w(5),
    {
      children: l
    } = g,
    i, c;
  if (m[0] !== l) {
    c = hn;
    q: {
      let R = Qg.toArray(l).filter(y);
      if (R.length === 0) {
        c = null;
        break q
      }
      i = R.map(C)
    }
    m[0] = l, m[1] = i, m[2] = c
  } else i = m[1], c = m[2];
  if (c !== hn) return c;
  let f;
  if (m[3] !== i) f = e(V, {
    children: i
  }), m[3] = i, m[4] = f;
  else f = m[4];
  return f
}
export {
  ye
};
