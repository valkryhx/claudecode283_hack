// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  ri
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Fgt,
  wR,
  IUn
} from "B:/~BUN/root/chunk-zstr1969.js";
import {
  lr
} from "B:/~BUN/root/chunk-75wha2r5.js";
var bOe = "cc-plugin-you-should-know";
var Pqr = {
  id: "you-should-know-plugin",
  providerAgnostic: !0,
  advertisedCommand: "plugin",
  cooldownSessions: 10,
  maxLifetimeShows: 3,
  content: async (o) => `Want a side agent watching your back while Claude works? Turn on You should know:
${lr("suggestion",o.theme)(`/plugin enable ${bOe}@${ri}`)}`,
  isRelevant: async () => Fgt(bOe) && wR(bOe)?.defaultEnabled === !1 && IUn(`${bOe}@${ri}`) === void 0
};
export {
  bOe,
  Pqr
};
