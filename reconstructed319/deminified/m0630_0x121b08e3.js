// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Bin } from "B:/~BUN/root/chunk-qtjkgnxr.js";
import { HV as code_2, USe as code } from "B:/~BUN/root/chunk-ts69mavc.js";
import { Rr } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var p1o = {};
Rr(p1o, {
  default: () => p1o,
  endsInARowOf: () => qsa,
  unsettledBy: () => x2r,
  workerEndingOf: () => Ysa
});
function qsa(e) {
  let n = Number(e);
  return Number.isSafeInteger(n) && n > 0 ? n : 0;
}
var x2r = e => ({
  reason: `Error: ${d(e)}`,
  kind: e instanceof Bin ? "passing" : "lasting"
});
var o = 5,
  m = `It did not pass in ${o} tries`,
  p = "it is held for good, or refused to this process",
  t = "Start the daemon again once this is mended.",
  a = `${m}: ${p}. ${t}`;
function Ysa(e, n) {
  let r = e.kind === "passing",
    s = r && n + 1 < o,
    i = r ? a : t;
  return s ? {
    code: code,
    said: `${e.reason}
`
  } : {
    code: code_2,
    said: `${e.reason}
${i}
`
  };
}
export { qsa, x2r, Ysa, p1o };