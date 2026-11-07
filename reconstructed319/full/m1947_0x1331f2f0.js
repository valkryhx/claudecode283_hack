// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  ai
} from "B:/~BUN/root/chunk-1g25msn4.js";

function QYe(n) {
  return n.replace(/[\r\n\u2028\u2029]+/g, " ")
}

function ZYe(n, r) {
  let e = ai(n);
  if (e.length <= r) return e;
  let t = Q(e, r),
    o = Array.from(e.slice(t.length)).length;
  return `${t} \u2026 (${o} more characters follow that are NOT shown in this message)`
}
export {
  QYe,
  ZYe
};
