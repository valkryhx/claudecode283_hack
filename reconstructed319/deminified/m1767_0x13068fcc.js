// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { kqo, kZn } from "B:/~BUN/root/chunk-qpgfy792.js";
import { Dce, K0i } from "B:/~BUN/root/chunk-4tz0m6qq.js";
import { o, oe, C, u, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var n = 1,
  a = 64,
  s = "offer",
  t = p(() => o().regex(Dce).refine(K0i)),
  c = p(() => u({
    v: T(n),
    head: t(),
    branch: o().min(1).max(kqo).refine(kZn),
    ancestors: C(oe()).max(a).pipe(C(t()))
  }));
function Q6s(e) {
  let r = c().safeParse(e[s]);
  return r.success ? r.data : null;
}
export { Q6s };