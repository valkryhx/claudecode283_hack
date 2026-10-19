// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
class e {
  wait = null;
}
var t = new e();
function kGs(i) {
  let wait = t.wait;
  return t.wait = i, wait;
}
async function C3n() {
  try {
    await t.wait?.();
  } catch {}
}
export { kGs, C3n };