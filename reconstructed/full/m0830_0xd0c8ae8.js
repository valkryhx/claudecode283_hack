// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Zi
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  k
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var i = k(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.getMachineId = void 0;
  var e = Zi();
  async function n() {
    e.diag.debug("could not read machine-id: unsupported platform");
    return
  }
  t.getMachineId = n
});
export default i();
