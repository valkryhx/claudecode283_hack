// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Rs } from "B:/~BUN/root/chunk-8sb89kt9.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
function ur(R) {
  let t = w(10),
    {
      message: message,
      bold: bold,
      dimColor: dimColor,
      subtitle: o
    } = R,
    bold_2 = bold === void 0 ? !1 : bold,
    dimColor_2 = dimColor === void 0 ? !1 : dimColor,
    p;
  if (t[0] === S) p = e(Rs, {}), t[0] = p;else p = t[0];
  let l;
  if (t[1] !== bold_2 || t[2] !== dimColor_2 || t[3] !== message) l = r(s, {
    flexDirection: "row",
    children: [p, r(n, {
      bold: bold_2,
      dimColor: dimColor_2,
      children: [" ", message]
    })]
  }), t[1] = bold_2, t[2] = dimColor_2, t[3] = message, t[4] = l;else l = t[4];
  let i;
  if (t[5] !== o) i = o && e(n, {
    dimColor: !0,
    children: o
  }), t[5] = o, t[6] = i;else i = t[6];
  let c;
  if (t[7] !== l || t[8] !== i) c = r(s, {
    flexDirection: "column",
    children: [l, i]
  }), t[7] = l, t[8] = i, t[9] = c;else c = t[9];
  return c;
}
export { ur };