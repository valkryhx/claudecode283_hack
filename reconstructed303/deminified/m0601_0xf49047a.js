// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { Gm, L1o } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { YOs } from "B:/~BUN/root/chunk-74f4ssah.js";
function e6t(a, t) {
  return YOs(a, e => e.replace(/\.jsonl$/, t), e => {
    if (e.namespace !== "transcript" || e.agentId === void 0) return;
    let n = ["subagents", ...(e.agentRelPath ?? []), `agent-${e.agentId}${t}`],
      r = Be.sidecar(e.projectKey, e.sessionId, n);
    return n.length <= L1o && Gm(r) === void 0 ? r : void 0;
  });
}
export { e6t };