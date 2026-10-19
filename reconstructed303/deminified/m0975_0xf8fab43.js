// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { nl } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { R, Ue } from "B:/~BUN/root/chunk-ef0msk7r.js";
var d = R(function (i) {
  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  i.getMachineId = void 0;
  var t = Ue("fs"),
    r = nl();
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