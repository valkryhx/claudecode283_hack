// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ms
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  me,
  nr
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  Sfn
} from "B:/~BUN/root/chunk-07c8fw5z.js";

function rqe() {
  let e = (nr() || {}).proxyAuthHelper;
  Sfn({
    helper: e,
    fromProjectOrLocal: me("projectSettings")?.proxyAuthHelper === e || me("localSettings")?.proxyAuthHelper === e,
    trustAccepted: Ms
  })
}
export {
  rqe
};
