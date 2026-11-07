// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
class e {
  availability = () => !1;
  register(i) {
    this.availability = i;
  }
  isAvailable() {
    return this.availability();
  }
}
var a = new e();
function aui(i) {
  a.register(i);
}
function aw() {
  return a.isAvailable();
}
export { aui, aw };