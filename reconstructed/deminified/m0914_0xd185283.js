// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var Msr = "anthropic/dirSync";
function t(n) {
  return typeof n === "object" && n !== null && !Array.isArray(n);
}
function r4t(n) {
  if (!t(n)) return;
  let structuredContent = n.structuredContent;
  if (t(structuredContent) && structuredContent["anthropic/dirSync"] !== void 0) return structuredContent["anthropic/dirSync"];
  let _meta = n._meta;
  return t(_meta) ? _meta["anthropic/dirSync"] : void 0;
}
export { Msr, r4t };