// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ce } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { NSn } from "B:/~BUN/root/chunk-aaxpf4ns.js";
function Bre({
  newState: newState,
  oldState: oldState
}, n, s, p) {
  if (NSn({
    newState: newState,
    oldState: oldState
  }, n, void 0, s, p), newState.expandedView !== oldState.expandedView) {
    let showExpandedTodos = newState.expandedView === "tasks";
    Ce(o => {
      if (o.showExpandedTodos === showExpandedTodos) return o;
      return {
        ...o,
        showExpandedTodos: showExpandedTodos
      };
    }, s);
  }
}
export { Bre };