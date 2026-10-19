// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
function ZGs(n) {
  switch (n) {
    case "hipaa":
      return "HIPAA";
    case "zdr":
      return "ZDR (Zero Data Retention)";
    default:
      return t(`Unknown compliance_taint '${n}' from policyLimits`, {
        level: "warn"
      }), r;
  }
}
var r = "Organization policy",
  myt = "Per your organization's policy, some features are limited",
  U3n = "HIPAA configured",
  o = new Set(["hipaa", "zdr"]);
function Pcn(n) {
  return o.has(n) || !1;
}
function Ocn(n) {
  let e = L(n),
    i = e.filter(Pcn);
  if (i.length === e.length) return i;
  return t(`Unknown compliance_taint values from policyLimits (${e.length - i.length})`, {
    level: "warn"
  }), [...i, r];
}
var a = new Set(["hipaa"]);
function HEe(n) {
  return L(n).filter(item => a.has(item));
}
export { ZGs, myt, U3n, Pcn, Ocn, HEe };