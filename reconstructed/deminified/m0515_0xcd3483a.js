// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { MP } from "B:/~BUN/root/chunk-3jyp964r.js";
import { mb, Xy } from "B:/~BUN/root/chunk-gf53qpk6.js";
function o(e) {
  let t = mb(e);
  return t === mb("") ? "(unnamed agent)" : t;
}
function r(e, t, i) {
  return `${o(e)} agent: ${Xy(t, i)}`;
}
function s(e, t, i) {
  return {
    type: "notification",
    notification: {
      key: `agent-model-restricted-${o(e)}-${mb(t)}`,
      text: r(e, t, i),
      priority: "medium",
      color: "warning",
      timeoutMs: 1e4
    }
  };
}
function Z3t(e, t) {
  return (i, n) => {
    t?.(s(e, i, n));
  };
}
function _pe(e, t) {
  return (i, n) => {
    t?.(MP(r(e, i, n), "warning"));
  };
}
export { Z3t, _pe };