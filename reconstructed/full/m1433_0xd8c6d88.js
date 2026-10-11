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
  Le
} from "B:/~BUN/root/chunk-dk0c0nrh.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Ut
} from "B:/~BUN/root/chunk-qbrwdgwc.js";

function fwn() {
  return e(Le, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Fetching\u2026"
    })
  })
}

function kJe(g) {
  let u = w(7),
    {
      bytes: a,
      status: p
    } = g,
    m;
  if (u[0] !== a) m = Ut(a), u[0] = a, u[1] = m;
  else m = u[1];
  let t;
  if (u[2] !== m) t = e(n, {
    bold: !0,
    children: m
  }), u[2] = m, u[3] = t;
  else t = u[3];
  const o = p !== void 0 && ` (${p})`;
  let c;
  if (u[4] !== t || u[5] !== o) c = e(Le, {
    height: 1,
    children: r(n, {
      children: ["Received ", t, o]
    })
  }), u[4] = t, u[5] = o, u[6] = c;
  else c = u[6];
  return c
}

function J5r({
  bytes: g,
  code: a,
  codeText: p,
  result: u
}, m, {
  verbose: t
}) {
  let o = e(kJe, {
    bytes: g,
    status: `${a} ${p}`
  });
  if (t) return r(s, {
    flexDirection: "column",
    children: [o, e(s, {
      flexDirection: "column",
      children: e(n, {
        children: u
      })
    })]
  });
  return o
}
export {
  fwn,
  kJe,
  J5r
};
