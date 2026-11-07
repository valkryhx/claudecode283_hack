// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { G$n } from "B:/~BUN/root/chunk-4pbpxqac.js";
import { od } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { M } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var o = M(function (c) {
  Object.defineProperty(c, "__esModule", {
    value: !0
  });
  c.getMachineId = void 0;
  var i = G$n(),
    n = od();
  async function u() {
    try {
      let t = (await i.execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find(item => item.includes("IOPlatformUUID"));
      if (!t) return;
      let r = t.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (error) {
      n.diag.debug(`error reading machine id: ${error}`);
    }
    return;
  }
  c.getMachineId = u;
});
export default o();