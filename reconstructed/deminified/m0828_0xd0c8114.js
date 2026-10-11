// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { lNt } from "B:/~BUN/root/chunk-1gjty2tq.js";
import { Zi } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { k, Re } from "B:/~BUN/root/chunk-yv67t8hr.js";
var u = k(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  n.getMachineId = void 0;
  var r = Re("fs"),
    i = lNt(),
    t = Zi();
  async function c() {
    try {
      return (await r.promises.readFile("/etc/hostid", {
        encoding: "utf8"
      })).trim();
    } catch (error) {
      t.diag.debug(`error reading machine id: ${error}`);
    }
    try {
      return (await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (error) {
      t.diag.debug(`error reading machine id: ${error}`);
    }
    return;
  }
  n.getMachineId = c;
});
export default u();