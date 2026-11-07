// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Yn
} from "B:/~BUN/root/chunk-drx9cnw1.js";
var n = new Set(["starting", "running", "resuming", "adopted", "crashed", "working", "blocked", "done", "stopped", "failed", "busy", "shell", "idle", "waiting"]);

function l8(e) {
  if (e === void 0) return;
  return Yn(n.has(e) ? e : "other")
}
var t = new Set(["cold", "spare", "adopted"]);

function V2t(e) {
  return typeof e === "string" && t.has(e) ? e : void 0
}
export {
  l8,
  V2t
};
