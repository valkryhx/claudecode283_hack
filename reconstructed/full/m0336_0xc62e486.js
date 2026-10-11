// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Fhe
} from "B:/~BUN/root/chunk-n5swsemr.js";
import {
  dt
} from "B:/~BUN/root/chunk-hhgrczac.js";
var Vp = (o, e, s) => (s ?? dt().loadedModules).some((r) => r.hooks(o) && (e === void 0 || Object.entries(e).every(([t, d]) => Fhe(r.matcherFor(o), t, d))));
export {
  Vp
};
