// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l,
  pi
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  JD,
  OO
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  mpe
} from "B:/~BUN/root/chunk-zvpxvfbv.js";
var n = "tengu_org_policy_denied";

function r(i, o) {
  let e = OO(i);
  if (e === null || e === "unregistered") return null;
  return {
    org_policy_key: f(i),
    org_policy_deny_kind: f(e),
    org_policy_taint_named: mpe(JD()).length > 0,
    surface: f(o)
  }
}

function FI(i, o) {
  let e = r(i, o);
  if (e) l(n, e)
}
async function PF(i, o) {
  let e = r(i, o);
  if (e) await pi(n, e)
}
export {
  FI,
  PF
};
