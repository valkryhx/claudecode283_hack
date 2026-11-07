// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
class o {
  restored = !1;
  markRestored() {
    this.restored = !0;
  }
}
var r = new W(() => new o());
function UEt(t) {
  r.of(t).markRestored();
}
function UG(t) {
  return r.of(t).restored;
}
export { UEt, UG };