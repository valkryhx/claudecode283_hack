// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { G } from "B:/~BUN/root/chunk-ah3egpyh.js";
function aQe(e) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 ? e : void 0;
}
function w9r(e, d) {
  let manifests = new Map(),
    malformedServerNames = [];
  if (e === void 0 || e === null) return {
    manifests: manifests,
    malformedField: !1,
    malformedServerNames: malformedServerNames
  };
  if (!G(e)) return {
    manifests: manifests,
    malformedField: !0,
    malformedServerNames: malformedServerNames
  };
  for (let r of d) {
    if (!Object.hasOwn(e, r)) continue;
    let n = e[r],
      initializeResult = G(n) ? n.initializeResult : void 0,
      toolsListResult = G(n) && n.toolsListResult !== null ? n.toolsListResult : void 0;
    if (G(initializeResult) && (toolsListResult === void 0 || G(toolsListResult))) manifests.set(r, toolsListResult === void 0 ? {
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
var l = "notifications/tools/list_changed";
function lQe(e) {
  return G(e) && !("id" in e) && e.method === l;
}
export { aQe, w9r, lQe };