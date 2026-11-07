// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Nt
} from "B:/~BUN/root/chunk-q78ga0zw.js";
var u = ["environment", "pool", "project", "ref", "onBranch", "noMonorepo", "teleport", "attachServe", "persistentVolume", "persistentVolumeFrom", "correlationId", "forwardHomeSettings", "fromPr", "forkSession", "sessionId", "worktree"];

function s(n, t) {
  let e = n.cloud ?? n.remote;
  if (e === void 0 || n.continue || t !== void 0 || u.some((d) => n[d] !== void 0)) return;
  let o = typeof e === "string" && e.trim() !== "" ? e.trim() : void 0,
    r = typeof n.resume === "string" ? n.resume.trim() : void 0,
    i = o === void 0 ? r : r === void 0 && n.resume === void 0 ? o : r?.toLowerCase() === o.toLowerCase() ? o : void 0;
  return Nt(i?.toLowerCase()) ?? void 0
}

function p(n) {
  return n.nonInteractive || n.options.print || n.hasOtherBackend || !n.stdinIsTTY ? void 0 : s(n.options, n.prompt)
}
export {
  p as localSessionMoveCandidate
};
