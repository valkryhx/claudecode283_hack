// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { $t, bgo } from "B:/~BUN/root/chunk-3jyp964r.js";
var XSn = {
    create: "Cloud session active",
    attach: "Attached to cloud session"
  },
  JSn = " \xB7 code here or at ";
function a(e, t) {
  return `${XSn[e]}${JSn}${t}`;
}
function j2t(e, t, o) {
  let s = a(e, t);
  return o ? bgo(e, t, s) : $t(s, "info");
}
export { XSn, JSn, j2t };