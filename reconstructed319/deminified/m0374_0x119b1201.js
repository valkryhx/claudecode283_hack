// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { jS } from "B:/~BUN/root/chunk-m4hycz0k.js";
var Op = Symbol("untrustedArray.unreadable"),
  yX = "<unreadable list>";
function bw(e) {
  let n;
  try {
    if (!Array.isArray(e)) return;
    n = e.length;
  } catch {
    return Op;
  }
  if (typeof n !== "number" || !Number.isSafeInteger(n) || n < 0 || n > jS) return Op;
  let u = [];
  for (let r = 0; r < n; r++) {
    let t;
    try {
      t = e[r];
    } catch {
      t = void 0;
    }
    u.push(t);
  }
  return u;
}
function Eue(e) {
  let n = bw(e);
  return n === Op ? void 0 : n;
}
export { Op, yX, bw, Eue };