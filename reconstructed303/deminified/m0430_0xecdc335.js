// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { Fv } from "B:/~BUN/root/chunk-2j35ee92.js";
import { d0e } from "B:/~BUN/root/chunk-8ye9n4fk.js";
var orn = o => o.name === d0e && Fv(o);
var MU = o => {
  let e = o.startsWith("classic.") || o === "tool.describe" || o === "tool.call" || o === "tool.check";
  return Ne().loadedModules.filter(item => !(e && orn(item)));
};
export { orn, MU };