// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { M9, kk, rn, TB } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { o, C, u, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
var v = 1,
  Obn = 64,
  nQn = "offer",
  n = f(() => o().regex(rn).refine(TB)),
  s = f(() => u({
    v: A(v),
    head: n(),
    branch: o().min(1).max(M9).refine(kk),
    ancestors: C(n()).max(Obn)
  }));
function L6r(t) {
  let r = s().safeParse(t[nQn]);
  return r.success ? r.data : null;
}
function N6r({
  head: head,
  branch: branch,
  history: history
}) {
  let e = s().safeParse({
    v: v,
    head: head,
    branch: branch,
    ancestors: history.filter(item => item !== head).slice(0, Obn)
  });
  return e.success ? e.data : null;
}
function H6r(t, r) {
  if (r.branch === null || r.branch !== t.branch) return "other_branch";
  return r.head === t.head || t.ancestors.includes(r.head) ? "covers" : "not_in_history";
}
export { Obn, nQn, L6r, N6r, H6r };