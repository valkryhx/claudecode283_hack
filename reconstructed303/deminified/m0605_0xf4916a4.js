// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { p0e } from "B:/~BUN/root/chunk-8ye9n4fk.js";
function xoe(e, n) {
  let p = n.map(item => item.mcpInfo === void 0 || item.mcpInfo.scope === e.config.scope && item.mcpInfo.pluginSource === e.config.pluginSource ? item : {
    ...item,
    mcpInfo: p0e(e)
  });
  return p.every((item, index) => item === n[index]) ? n : p;
}
export { xoe };