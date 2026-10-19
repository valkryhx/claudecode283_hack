// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { We, xt } from "B:/~BUN/root/chunk-kad4nq7y.js";
var r = new Set([We, xt]);
function s_e(e) {
  return r.has(e);
}
function x8o(e, n) {
  return s_e(e) ? e : n;
}
function MVe(e) {
  return e === xt ? "Select-Object -First, Select-Object -Last or Select-String" : "head, tail or grep";
}
function AI(e) {
  return e.isMcp !== !0 && s_e(e.name);
}
export { s_e, x8o, MVe, AI };