// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { _Mr } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Rd } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { randomBytes as l } from "crypto";
function Ko(e) {
  return e === "completed" || e === "failed" || e === "killed";
}
var $fs = new Set(["local_agent", "remote_agent", "in_process_teammate", "local_workflow"]);
function A2(e) {
  return Object.values(e).some(iDt);
}
function sDt(e) {
  return Object.values(e).some(item => iDt(item) && item.status !== "paused" && !(item.type === "in_process_teammate" && item.identity?.resumableAgentId === void 0) && !(item.type === "remote_agent" && (item.ultraplanPhase === "needs_input" || item.ultraplanPhase === "plan_ready" || item.isUltraplan && item.restoredOnResume)));
}
function iDt(e) {
  return $fs.has(e.type) && !Ko(e.status) && !(e.type === "in_process_teammate" && e.isIdle) && !(e.type === "remote_agent" && e.isLongRunning);
}
function Ufs(e) {
  return Object.values(e).some(Qlo);
}
function Qlo(e) {
  return e.type === "local_bash" && !Ko(e.status);
}
var o = {
    local_bash: "b",
    local_agent: "a",
    remote_agent: "r",
    in_process_teammate: "t",
    local_workflow: "w",
    monitor_mcp: "m",
    monitor_ws: "s",
    mcp_task: "k",
    dream: "d",
    auto_mode_scan: "e",
    local_memory_import: "n",
    post_turn_memory: "p"
  },
  n = "0123456789abcdefghijklmnopqrstuvwxyz";
function x2(e, t) {
  let s = o[e];
  return s !== void 0 && t.length === 9 && t.startsWith(s) && t.slice(s.length).split("").every(item => n.includes(item));
}
function Bfs(e) {
  return e.length <= 1024 && /^(?:\/(?!\.{1,2}(?:\/|$))[A-Za-z0-9_.-]+)+$/.test(e);
}
function y_r(e, t) {
  return Bfs(t) && t.endsWith(`/${e}.output`);
}
function OS(e) {
  let t = o[e] ?? "x",
    s = l(8),
    a = t;
  for (let r = 0; r < 8; r++) a += n[s[r] % n.length];
  return a;
}
function $g(id, type, description, toolUseId) {
  let startedUnderUseCase = _Mr();
  return {
    id: id,
    type: type,
    status: "pending",
    description: description,
    toolUseId: toolUseId,
    startTime: Date.now(),
    ...(!q() && {
      outputFile: Rd(id)
    }),
    outputOffset: 0,
    notified: !1,
    ...(startedUnderUseCase !== void 0 && {
      startedUnderUseCase: startedUnderUseCase
    })
  };
}
export { Ko, $fs, A2, sDt, iDt, Ufs, Qlo, x2, Bfs, y_r, OS, $g };