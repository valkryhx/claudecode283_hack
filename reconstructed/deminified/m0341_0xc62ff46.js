// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Gc } from "B:/~BUN/root/chunk-y04k89s2.js";
function Lr(l, i) {
  if (!l.trim() || !i.trim()) return null;
  let n = Gc(i),
    regExp = new RegExp(`<${n}(?:\\s+[^>]*)?>([\\s\\S]*?)<\\/${n}>`, "gi"),
    e,
    t = 0,
    s = 0,
    regExp_2 = new RegExp(`<${n}(?:\\s+[^>]*?)?>`, "gi"),
    regExp_3 = new RegExp(`<\\/${n}>`, "gi");
  while ((e = regExp.exec(l)) !== null) {
    let g = e[1],
      o = l.slice(s, e.index);
    t = 0, regExp_2.lastIndex = 0;
    while (regExp_2.exec(o) !== null) t++;
    regExp_3.lastIndex = 0;
    while (regExp_3.exec(o) !== null) t--;
    if (t === 0 && g) return g;
    s = e.index + e[0].length;
  }
  return null;
}
export { Lr };