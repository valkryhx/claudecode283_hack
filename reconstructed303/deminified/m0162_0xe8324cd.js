// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { kd } from "B:/~BUN/root/chunk-3aez4b53.js";
import { j3, SIe } from "B:/~BUN/root/chunk-nw686kdq.js";
var Ean = (r, e) => j3(r, o => o instanceof kd) === !0 || SIe(r, e);
var n4n = (r, e) => r.catch(o => SIe(o, e) ? void 0 : Promise.reject(o));
export { Ean, n4n };