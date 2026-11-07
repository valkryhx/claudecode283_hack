// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Ye } from "B:/~BUN/root/chunk-4swxab5a.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
function qjr() {
  return e(Ye, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Fetching\u2026"
    })
  });
}
function hGt(g) {
  let u = S(7),
    {
      bytes: bytes,
      status: status
    } = g,
    children;
  if (u[0] !== bytes) children = en(bytes), u[0] = bytes, u[1] = children;else children = u[1];
  let t;
  if (u[2] !== children) t = e(n, {
    bold: !0,
    children: children
  }), u[2] = children, u[3] = t;else t = u[3];
  const o = status !== void 0 && ` (${status})`;
  let c;
  if (u[4] !== t || u[5] !== o) c = e(Ye, {
    height: 1,
    children: r(n, {
      children: ["Received ", t, o]
    })
  }), u[4] = t, u[5] = o, u[6] = c;else c = u[6];
  return c;
}
function q5s({
  bytes: bytes_2,
  code: code,
  codeText: codeText,
  result: u
}, m, {
  verbose: verbose
}) {
  let o = e(hGt, {
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
export { qjr, hGt, q5s };