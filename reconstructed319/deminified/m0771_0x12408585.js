// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { eg, $Bs } from "B:/~BUN/root/chunk-1g25msn4.js";
import { MLi } from "B:/~BUN/root/chunk-k5xd4a86.js";
function Gbn(a, t) {
  return MLi(a, e => e.replace(/\.jsonl$/, t), e => {
    if (e.namespace !== "transcript" || e.agentId === void 0) return;
    let n = ["subagents", ...(e.agentRelPath ?? []), `agent-${e.agentId}${t}`],
      r = Ve.sidecar(e.projectKey, e.sessionId, n);
    return n.length <= $Bs && eg(r) === void 0 ? r : void 0;
  });
}
export { Gbn };