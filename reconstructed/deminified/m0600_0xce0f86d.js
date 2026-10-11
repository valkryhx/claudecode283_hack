// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ee } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { mzt } from "B:/~BUN/root/chunk-kv3x2tn4.js";
function Xde({
  newState: newState,
  oldState: oldState
}, n, s, p) {
  if (mzt({
    newState: newState,
    oldState: oldState
  }, n, void 0, s, p), newState.expandedView !== oldState.expandedView) {
    let showExpandedTodos = newState.expandedView === "tasks";
    Ee(o => {
      if (o.showExpandedTodos === showExpandedTodos) return o;
      return {
        ...o,
        showExpandedTodos: showExpandedTodos
      };
    }, s);
  }
}
export { Xde };