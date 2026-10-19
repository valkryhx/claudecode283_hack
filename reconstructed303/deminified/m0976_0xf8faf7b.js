// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { gan } from "B:/~BUN/root/chunk-06krp960.js";
import { nl } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { R, Ue } from "B:/~BUN/root/chunk-ef0msk7r.js";
var u = R(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  n.getMachineId = void 0;
  var r = Ue("fs"),
    i = gan(),
    t = nl();
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