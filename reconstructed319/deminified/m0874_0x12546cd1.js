// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Le } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { d5n } from "B:/~BUN/root/chunk-m8nwks6r.js";
function she({
  newState: newState,
  oldState: oldState
}, n, s, p) {
  if (d5n({
    newState: newState,
    oldState: oldState
  }, n, void 0, s, p), newState.expandedView !== oldState.expandedView) {
    let showExpandedTodos = newState.expandedView === "tasks";
    Le(o => {
      if (o.showExpandedTodos === showExpandedTodos) return o;
      return {
        ...o,
        showExpandedTodos: showExpandedTodos
      };
    }, s);
  }
}
export { she };