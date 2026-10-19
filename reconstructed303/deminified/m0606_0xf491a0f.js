// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Aoe, O8 } from "B:/~BUN/root/chunk-5gazt5rq.js";
import { xoe } from "B:/~BUN/root/chunk-10ydm3ka.js";
function pC(config, e) {
  let n = {
    name: e.client.name,
    config: config
  };
  return {
    ...e,
    client: Aoe(e.client, config),
    ...(e.tools !== void 0 && {
      tools: O8(n, e.tools)
    }),
    ...(e.commands !== void 0 && {
      commands: xoe(n, e.commands)
    })
  };
}
export { pC };