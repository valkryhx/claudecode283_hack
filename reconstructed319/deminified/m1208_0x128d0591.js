// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { od } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { M, je } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var d = M(function (i) {
  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  i.getMachineId = void 0;
  var t = je("fs"),
    r = od();
  async function s() {
    let c = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
    for (let a of c) try {
      return (await t.promises.readFile(a, {
        encoding: "utf8"
      })).trim();
    } catch (error) {
      r.diag.debug(`error reading machine id: ${error}`);
    }
    return;
  }
  i.getMachineId = s;
});
export default d();