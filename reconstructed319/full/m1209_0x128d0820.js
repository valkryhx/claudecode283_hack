// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  G$n
} from "B:/~BUN/root/chunk-4pbpxqac.js";
import {
  od
} from "B:/~BUN/root/chunk-1s0yt4vj.js";
import {
  M,
  je
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var u = M(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  n.getMachineId = void 0;
  var r = je("fs"),
    i = G$n(),
    t = od();
  async function c() {
    try {
      return (await r.promises.readFile("/etc/hostid", {
        encoding: "utf8"
      })).trim()
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`)
    }
    try {
      return (await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim()
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`)
    }
    return
  }
  n.getMachineId = c
});
export default u();
