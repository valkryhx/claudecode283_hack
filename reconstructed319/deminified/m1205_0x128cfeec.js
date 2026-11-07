// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { od } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { M } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var i = M(function (t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.getMachineId = void 0;
  var e = od();
  async function n() {
    e.diag.debug("could not read machine-id: unsupported platform");
    return;
  }
  t.getMachineId = n;
});
export default i();