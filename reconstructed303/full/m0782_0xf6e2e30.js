// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Bt,
  xbs
} from "B:/~BUN/root/chunk-9grc6xh0.js";
var Cer = {
    create: "Cloud session active",
    attach: "Attached to cloud session"
  },
  Rer = " \xB7 code here or at ";

function a(e, t) {
  return `${Cer[e]}${Rer}${t}`
}

function Vbn(e, t, o) {
  let s = a(e, t);
  return o ? xbs(e, t, s) : Bt(s, "info")
}
export {
  Cer,
  Rer,
  Vbn
};
