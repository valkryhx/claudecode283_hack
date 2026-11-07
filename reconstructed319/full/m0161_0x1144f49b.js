// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";

function JJi(n) {
  switch (n) {
    case "hipaa":
      return "HIPAA";
    case "zdr":
      return "ZDR (Zero Data Retention)";
    default:
      return t(`Unknown compliance_taint '${n}' from policyLimits`, {
        level: "warn"
      }), r
  }
}
var r = "Organization policy",
  XUt = "Per your organization's policy, some features are limited",
  s0r = "HIPAA configured",
  o = new Set(["hipaa", "zdr"]);

function SWn(n) {
  return o.has(n) || !1
}

function wWn(n) {
  let e = L(n),
    i = e.filter(SWn);
  if (i.length === e.length) return i;
  return t(`Unknown compliance_taint values from policyLimits (${e.length-i.length})`, {
    level: "warn"
  }), [...i, r]
}
var a = new Set(["hipaa"]);

function mpe(n) {
  return L(n).filter((e) => a.has(e))
}
export {
  JJi,
  XUt,
  s0r,
  SWn,
  wWn,
  mpe
};
