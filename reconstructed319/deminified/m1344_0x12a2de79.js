// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { hm } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { randomUUID as s } from "crypto";
var gii = (launchedAgentId, t) => ({
  type: "system",
  subtype: "informational",
  content: `Started in the background: ${t}`,
  isMeta: !1,
  timestamp: new Date().toISOString(),
  uuid: s(),
  level: "info",
  launchedAgentId: launchedAgentId
});
function yii(e) {
  let n = e.type === "system" && e.subtype === "informational" ? e.launchedAgentId : void 0;
  return n !== void 0 && hm(n) !== null ? n : void 0;
}
export { gii, yii };