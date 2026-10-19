// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { jc } from "B:/~BUN/root/chunk-183sjefx.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { L4n } from "B:/~BUN/root/chunk-hkh6hras.js";
import { RIe } from "B:/~BUN/root/chunk-pm2vnc51.js";
function tl(o, e, s) {
  let t = e && RIe(o);
  return (s ?? Ne().loadedModules).some(item => item.hooks(o) && jc(item) && (e === void 0 || L4n(item.matcherFor(o), e, t)));
}
export { tl };