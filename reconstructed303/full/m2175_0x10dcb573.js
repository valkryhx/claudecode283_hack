// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  py,
  Zo
} from "B:/~BUN/root/chunk-f2a36mfn.js";
var s = Zo({
  kind: "permission_workflow",
  payload: f(() => py((o) => typeof o === "object" && o !== null && ("requestId" in o) && ("toolName" in o) && ("permissionResult" in o) && ("script" in o))),
  result: f(() => py((o) => typeof o === "object" && o !== null && ("behavior" in o))),
  default: {
    behavior: "cancelled"
  }
});
export {
  s as workflowPermissionDialog
};
