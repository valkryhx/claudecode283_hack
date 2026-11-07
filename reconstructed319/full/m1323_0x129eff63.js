// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Fr
} from "B:/~BUN/root/chunk-ge2k1jpp.js";
import {
  zX,
  pZe,
  O3
} from "B:/~BUN/root/chunk-jy87sa4x.js";

function qoi(o, e, r) {
  Fr().bundledWorkflows.push({
    source: "built-in",
    ...e,
    script: o,
    disableModelInvocation: r?.disableModelInvocation
  })
}

function lbn() {
  if (zX()) return [];
  let o = Fr().bundledWorkflows;
  if (pZe()) return o.filter((e) => !O3(e.name));
  return o
}
export {
  qoi,
  lbn
};
