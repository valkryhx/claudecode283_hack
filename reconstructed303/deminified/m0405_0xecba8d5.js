// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i, Qs } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { zD, nR } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { HEe } from "B:/~BUN/root/chunk-dq3y90rd.js";
var r = "tengu_org_policy_denied";
function l(o, n) {
  let e = nR(o);
  if (e === null || e === "unregistered") return null;
  return {
    org_policy_key: c(o),
    org_policy_deny_kind: c(e),
    org_policy_taint_named: HEe(zD()).length > 0,
    surface: c(n)
  };
}
function eA(o, n) {
  let e = l(o, n);
  if (e) i(r, e);
}
async function vG(o, n) {
  let e = l(o, n);
  if (e) await Qs(r, e);
}
export { eA, vG };