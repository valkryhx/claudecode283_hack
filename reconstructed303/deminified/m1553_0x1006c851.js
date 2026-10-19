// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n } from "B:/~BUN/root/chunk-damrp3r8.js";
import { ze } from "B:/~BUN/root/chunk-yqm8ptb8.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
function Uer() {
  return e(ze, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Fetching\u2026"
    })
  });
}
function Kwt(g) {
  let u = w(7),
    {
      bytes: bytes,
      status: status
    } = g,
    children;
  if (u[0] !== bytes) children = Zt(bytes), u[0] = bytes, u[1] = children;else children = u[1];
  let t;
  if (u[2] !== children) t = e(n, {
    bold: !0,
    children: children
  }), u[2] = children, u[3] = t;else t = u[3];
  const o = status !== void 0 && ` (${status})`;
  let c;
  if (u[4] !== t || u[5] !== o) c = e(ze, {
    height: 1,
    children: r(n, {
      children: ["Received ", t, o]
    })
  }), u[4] = t, u[5] = o, u[6] = c;else c = u[6];
  return c;
}
function O3o({
  bytes: bytes_2,
  code: code,
  codeText: codeText,
  result: u
}, m, {
  verbose: verbose
}) {
  let o = e(Kwt, {
    bytes: bytes_2,
    status: `${code} ${codeText}`
  });
  if (verbose) return r(s, {
    flexDirection: "column",
    children: [o, e(s, {
      flexDirection: "column",
      children: e(n, {
        children: u
      })
    })]
  });
  return o;
}
export { Uer, Kwt, O3o };