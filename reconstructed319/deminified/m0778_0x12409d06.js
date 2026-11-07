// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k3e, pge, ore } from "B:/~BUN/root/chunk-jzac91sc.js";
function xP(config, e) {
  let n = {
    name: e.client.name,
    config: config
  };
  return {
    ...e,
    client: pge(e.client, config),
    ...(e.tools !== void 0 && {
      tools: ore(n, e.tools)
    }),
    ...(e.commands !== void 0 && {
      commands: k3e(n, e.commands)
    })
  };
}
export { xP };