// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Qo } from "B:/~BUN/root/chunk-n8cnxns2.js";
var x = /^\s*<tool_use_error>([\s\S]*)<\/tool_use_error>\s*$/i,
  f = /<\/?tool_use_error\b/i;
function Di(n, e) {
  if (!n.trim() || !e.trim()) return null;
  let g = Qo(e),
    regExp = new RegExp(`<${g}(?=[\\s>])`, "gi"),
    regExp_2 = new RegExp(`<\\/${g}>`, "gi"),
    s = 0;
  for (;;) {
    regExp.lastIndex = s;
    let t = regExp.exec(n);
    regExp_2.lastIndex = s;
    let i = regExp_2.exec(n);
    if (!t || !i) return null;
    let c = n.indexOf(">", t.index + t[0].length);
    if (c === -1) return null;
    regExp_2.lastIndex = c + 1;
    let r = regExp_2.exec(n);
    if (!r) return null;
    let u = i.index + i[0].length <= t.index,
      d = n.slice(c + 1, r.index);
    if (d && !u) return d;
    s = r.index + r[0].length;
  }
}
function cut(n) {
  let e = x.exec(n)?.[1];
  return e !== void 0 && !f.test(e) ? e : void 0;
}
export { Di, cut };