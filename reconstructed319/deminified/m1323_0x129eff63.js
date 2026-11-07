// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Fr } from "B:/~BUN/root/chunk-ge2k1jpp.js";
import { zX, pZe, O3 } from "B:/~BUN/root/chunk-jy87sa4x.js";
function qoi(script, e, r) {
  Fr().bundledWorkflows.push({
    source: "built-in",
    ...e,
    script: script,
    disableModelInvocation: r?.disableModelInvocation
  });
}
function lbn() {
  if (zX()) return [];
  let bundledWorkflows = Fr().bundledWorkflows;
  if (pZe()) return bundledWorkflows.filter(item => !O3(item.name));
  return bundledWorkflows;
}
export { qoi, lbn };