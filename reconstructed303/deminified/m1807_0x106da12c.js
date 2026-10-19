// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nr } from "B:/~BUN/root/chunk-3aez4b53.js";
var OWt = {
    invalid_path: "sad",
    unsupported_name: "sad",
    symlink_in_path: "sad",
    path_not_canonical: "sad",
    read_rule: "sad",
    not_found: "sad",
    not_a_directory: "sad",
    os_permission_denied: "sad",
    workspace_moved: "bad",
    unexpected_error: "bad"
  },
  t = "list denied: ";
function wF(e, n) {
  return new Nr(`${t}${e}`, n, e);
}
function Met(e) {
  if (!(e instanceof Nr)) return;
  let errorClass = e.errorClass;
  return errorClass !== void 0 && o(errorClass) && e.message === `${t}${errorClass}` ? errorClass : void 0;
}
function o(e) {
  return Object.hasOwn(OWt, e);
}
export { OWt, wF, Met };