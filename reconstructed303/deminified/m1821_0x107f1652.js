// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { oi } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { qan, VE, Kan } from "B:/~BUN/root/chunk-h2myanpn.js";
import { Kn } from "B:/~BUN/root/chunk-dsby0gnt.js";
var A_e = "cc-plugin-you-should-know";
var gir = {
  id: "you-should-know-plugin",
  providerAgnostic: !0,
  advertisedCommand: "plugin",
  cooldownSessions: 10,
  maxLifetimeShows: 3,
  content: async o => `Want a side agent watching your back while Claude works? Turn on You should know:
${Kn("suggestion", o.theme)(`/plugin enable ${A_e}@${oi}`)}`,
  isRelevant: async () => qan(A_e) && VE(A_e)?.defaultEnabled === !1 && Kan(`${A_e}@${oi}`) === void 0
};
export { A_e, gir };