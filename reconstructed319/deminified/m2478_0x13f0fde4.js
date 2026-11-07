// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wo } from "B:/~BUN/root/chunk-wm671vgg.js";
import { Yy } from "B:/~BUN/root/chunk-97r06se6.js";
var s = Wo({
  kind: "permission_workflow",
  payload: p(() => Yy(o => typeof o === "object" && o !== null && "requestId" in o && "toolName" in o && "permissionResult" in o && "script" in o)),
  result: p(() => Yy(o => typeof o === "object" && o !== null && "behavior" in o)),
  default: {
    behavior: "cancelled"
  }
});
export { s as workflowPermissionDialog };