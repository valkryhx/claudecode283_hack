// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { id } from "B:/~BUN/root/chunk-8v3gkznb.js";
function Wis(t) {
  if (id()) return;
  return t.standaloneAgentContext?.name;
}
function YKe(t, n) {
  let standaloneAgentContext = t.standaloneAgentContext;
  if (!Object.keys(n).some(item => standaloneAgentContext?.[item] !== n[item])) return t;
  return {
    ...t,
    standaloneAgentContext: {
      ...standaloneAgentContext,
      name: standaloneAgentContext?.name ?? "",
      ...n
    }
  };
}
export { Wis, YKe };