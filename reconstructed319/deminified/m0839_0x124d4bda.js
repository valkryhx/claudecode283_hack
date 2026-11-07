// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
function qXn(e) {
  if (le()) {
    let timestamp = new Date().toISOString();
    return e.flatMap(item => (item.pollEvent?.displayRows ?? []).map(item => ({
      ...item,
      timestamp: timestamp
    })));
  }
  return [];
}
export { qXn };