// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  kc
} from "B:/~BUN/root/chunk-trd3c21n.js";

function Idi(t) {
  if (kc()) return;
  return t.remoteSessionName ?? t.standaloneAgentContext?.name
}

function UBe(t, e) {
  let n = t.standaloneAgentContext;
  if (!Object.keys(e).some((o) => n?.[o] !== e[o])) return t;
  return {
    ...t,
    standaloneAgentContext: {
      ...n,
      name: n?.name ?? "",
      ...e
    }
  }
}
export {
  Idi,
  UBe
};
