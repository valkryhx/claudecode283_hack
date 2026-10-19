// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ps } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { h5n } from "B:/~BUN/root/chunk-ejm0pmyj.js";
function m4e(t) {
  let r = [];
  for (let o of t) {
    if (!Ps(o)) continue;
    let {
        config: config
      } = o,
      n = config && typeof config === "object" && "url" in config && typeof config.url === "string" ? config.url : null;
    if (n !== null && h5n(n)) r.push(o);
  }
  return r.length === 1 ? r[0] : null;
}
export { m4e };