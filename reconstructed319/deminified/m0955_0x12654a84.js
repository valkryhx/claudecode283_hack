// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Gv, NO } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { zke } from "B:/~BUN/root/chunk-61tvx6vn.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
function hVo(e) {
  let r = e[0];
  if (!r) return null;
  let t = e.length;
  if (e.every(item => item.type === r.type)) switch (r.type) {
    case "local_bash":
      {
        let o = U(e, s => s.type === "local_bash" && s.kind === "monitor"),
          n = t - o,
          a = [];
        if (n > 0) a.push(n === 1 ? "1 shell" : `${n} shells`);
        if (o > 0) a.push(o === 1 ? "1 monitor" : `${o} monitors`);
        return a.join(", ");
      }
    case "in_process_teammate":
      {
        let o = new Set(e.map(item => item.type === "in_process_teammate" ? item.identity.teamName : "")).size;
        return o === 1 ? "1 team" : `${o} teams`;
      }
    case "local_agent":
      return t === 1 ? "1 local agent" : `${t} local agents`;
    case "remote_agent":
      {
        if (t === 1 && r.isUltraplan) switch (r.ultraplanPhase) {
          case "plan_ready":
            return `${NO} ultraplan ready`;
          case "needs_input":
            return `${Gv} ultraplan needs your input`;
          default:
            return `${Gv} ultraplan`;
        }
        if (e.every(item => item.type === "remote_agent" && item.remoteTaskType === "remote-workflow")) return t === 1 ? `${Gv} 1 remote dynamic workflow` : `${Gv} ${t} remote dynamic workflows`;
        return t === 1 ? `${Gv} 1 cloud session` : `${Gv} ${t} cloud sessions`;
      }
    case "local_workflow":
      return l(t);
    case "monitor_mcp":
    case "monitor_ws":
      {
        if (e.every(zke)) return t === 1 ? "1 Artifact comment monitor" : `${t} Artifact comment monitors`;
        return t === 1 ? "1 monitor" : `${t} monitors`;
      }
    case "mcp_task":
      return t === 1 ? "1 MCP task" : `${t} MCP tasks`;
    case "dream":
      return "dreaming";
    case "auto_mode_scan":
      return "auto-mode scan";
    case "local_memory_import":
      return r.windowsPlanned > 0 ? `memory import ${r.windowsDone}/${r.windowsPlanned}` : "memory import";
    case "post_turn_memory":
      return "saving memories";
    default:
  }
  return i(t);
}
function AKt(e, r) {
  if (r.length === 0) return hVo(e);
  let t = e.length + r.length;
  return r.every(item => item.taskType === "local_workflow") && e.every(item => item.type === "local_workflow") ? l(t) : i(t);
}
function l(e) {
  return e === 1 ? "1 background dynamic workflow" : `${e} background dynamic workflows`;
}
function i(e) {
  return `${e} background ${e === 1 ? "task" : "tasks"}`;
}
function gVo(e) {
  if (e.length !== 1) return !1;
  let r = e[0];
  return r.type === "remote_agent" && r.isUltraplan === !0 && r.ultraplanPhase !== void 0;
}
export { hVo, AKt, gVo };