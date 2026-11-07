// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { pf, rT } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Ww } from "B:/~BUN/root/chunk-27h4st9h.js";
function o(e) {
  let t = pf(e);
  return t === pf("") ? "(unnamed agent)" : t;
}
function r(e, t, i) {
  return `${o(e)} agent: ${rT(t, i)}`;
}
function s(e, t, i) {
  return {
    type: "notification",
    notification: {
      key: `agent-model-restricted-${o(e)}-${pf(t)}`,
      text: r(e, t, i),
      priority: "medium",
      color: "warning",
      timeoutMs: 1e4
    }
  };
}
function OZn(e, t) {
  return (i, n) => {
    t?.(s(e, i, n));
  };
}
function SBe(e, t) {
  return (i, n) => {
    t?.(Ww(r(e, i, n), "warning"));
  };
}
export { OZn, SBe };