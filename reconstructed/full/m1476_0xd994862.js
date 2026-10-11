// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  re
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  zs
} from "B:/~BUN/root/chunk-3hjtxzqy.js";

function NQe(n) {
  return n.replace(/[\r\n\u2028\u2029]+/g, " ")
}

function sSe(n, r) {
  let e = zs(n);
  if (e.length <= r) return e;
  let t = re(e, r),
    o = Array.from(e.slice(t.length)).length;
  return `${t} \u2026 (${o} more characters follow that are NOT shown in this message)`
}
export {
  NQe,
  sSe
};
