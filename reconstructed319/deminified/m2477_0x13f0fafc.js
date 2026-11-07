// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Wo } from "B:/~BUN/root/chunk-wm671vgg.js";
import { Yy } from "B:/~BUN/root/chunk-97r06se6.js";
var t = "Claude wants to send this session\u2019s work to a Claude Project",
  r = Wo({
    kind: "permission_continue_in_projects",
    payload: p(() => Yy(e => typeof e === "object" && e !== null && "requestId" in e && "toolName" in e && "permissionResult" in e)),
    result: p(() => Yy(e => typeof e === "object" && e !== null && "behavior" in e)),
    default: {
      behavior: "cancelled"
    }
  });
export { t as CONTINUE_NOTIFICATION, r as projectContinuePermissionDialog };