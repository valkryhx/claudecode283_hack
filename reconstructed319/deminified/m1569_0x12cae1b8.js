// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
async function vrr(e, rule, n) {
  if (rule === null || e.behavior === "deny") return e;
  return e.behavior === "ask" ? {
    ...e,
    matchedAskRule: e.matchedAskRule ?? rule
  } : {
    behavior: "ask",
    message: await n(),
    decisionReason: {
      type: "rule",
      rule: rule
    },
    ...("updatedInput" in e && e.updatedInput !== void 0 && {
      updatedInput: e.updatedInput
    })
  };
}
export { vrr };