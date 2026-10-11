// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { i, Ls } from "B:/~BUN/root/chunk-728mwbhs.js";
import { f$, Bq } from "B:/~BUN/root/chunk-4h4gje25.js";
import { Yce } from "B:/~BUN/root/chunk-erkcnv3k.js";
var r = "tengu_org_policy_denied";
function l(o, n) {
  let e = Bq(o);
  if (e === null || e === "unregistered") return null;
  return {
    org_policy_key: c(o),
    org_policy_deny_kind: c(e),
    org_policy_taint_named: Yce(f$()).length > 0,
    surface: c(n)
  };
}
function Rk(o, n) {
  let e = l(o, n);
  if (e) i(r, e);
}
async function qB(o, n) {
  let e = l(o, n);
  if (e) await Ls(r, e);
}
export { Rk, qB };