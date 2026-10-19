// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { hr } from "B:/~BUN/root/chunk-7gwemd3j.js";
import { WK, $je, VG } from "B:/~BUN/root/chunk-et37ax67.js";
function Qts(script, e, r) {
  hr().bundledWorkflows.push({
    source: "built-in",
    ...e,
    script: script,
    disableModelInvocation: r?.disableModelInvocation
  });
}
function I4t() {
  if (WK()) return [];
  let bundledWorkflows = hr().bundledWorkflows;
  if ($je()) return bundledWorkflows.filter(item => !VG(item.name));
  return bundledWorkflows;
}
export { Qts, I4t };