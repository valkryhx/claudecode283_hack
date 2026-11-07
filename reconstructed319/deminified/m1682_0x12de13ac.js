// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
function K9s(e, l) {
  let manifests = new Map(),
    malformedServerNames = [];
  if (e === void 0 || e === null) return {
    manifests: manifests,
    malformedField: !1,
    malformedServerNames: malformedServerNames
  };
  if (!D(e)) return {
    manifests: manifests,
    malformedField: !0,
    malformedServerNames: malformedServerNames
  };
  for (let r of l) {
    if (!Object.hasOwn(e, r)) continue;
    let n = e[r],
      initializeResult = D(n) ? n.initializeResult : void 0,
      toolsListResult = D(n) && n.toolsListResult !== null ? n.toolsListResult : void 0;
    if (D(initializeResult) && (toolsListResult === void 0 || D(toolsListResult))) manifests.set(r, toolsListResult === void 0 ? {
      initializeResult: initializeResult
    } : {
      initializeResult: initializeResult,
      toolsListResult: toolsListResult
    });else malformedServerNames.push(r);
  }
  return {
    manifests: manifests,
    malformedField: !1,
    malformedServerNames: malformedServerNames
  };
}
var d = "notifications/tools/list_changed";
function b8n(e) {
  return D(e) && !("id" in e) && e.method === d;
}
export { K9s, b8n };