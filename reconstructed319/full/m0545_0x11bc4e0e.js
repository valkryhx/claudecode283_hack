// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
class l {
  implementation = null;
  isC4EUpsellCommandEnabled() {
    return this.implementation === null ? !1 : this.implementation()
  }
  register(e) {
    this.implementation = e
  }
}
var Hfs = new l;

function wMi(e) {
  Hfs.register(e.isC4EUpsellCommandEnabled)
}
export {
  Hfs,
  wMi
};
