// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ry, $v } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { m7 } from "B:/~BUN/root/chunk-1mdmjaqt.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
function vSe(r) {
  let o = r[0];
  if (!o) return null;
  let t = r.length;
  if (r.every(item => item.type === o.type)) switch (o.type) {
    case "local_bash":
      {
        let e = U(r, s => s.type === "local_bash" && s.kind === "monitor"),
          a = t - e,
          n = [];
        if (a > 0) n.push(a === 1 ? "1 shell" : `${a} shells`);
        if (e > 0) n.push(e === 1 ? "1 monitor" : `${e} monitors`);
        return n.join(", ");
      }
    case "in_process_teammate":
      {
        let e = new Set(r.map(item => item.type === "in_process_teammate" ? item.identity.teamName : "")).size;
        return e === 1 ? "1 team" : `${e} teams`;
      }
    case "local_agent":
      return t === 1 ? "1 local agent" : `${t} local agents`;
    case "remote_agent":
      {
        if (t === 1 && o.isUltraplan) switch (o.ultraplanPhase) {
          case "plan_ready":
            return `${$v} ultraplan ready`;
          case "needs_input":
            return `${Ry} ultraplan needs your input`;
          default:
            return `${Ry} ultraplan`;
        }
        if (r.every(item => item.type === "remote_agent" && item.remoteTaskType === "remote-workflow")) return t === 1 ? `${Ry} 1 remote dynamic workflow` : `${Ry} ${t} remote dynamic workflows`;
        return t === 1 ? `${Ry} 1 cloud session` : `${Ry} ${t} cloud sessions`;
      }
    case "local_workflow":
      return t === 1 ? "1 background dynamic workflow" : `${t} background dynamic workflows`;
    case "monitor_mcp":
    case "monitor_ws":
      {
        if (r.every(m7)) return t === 1 ? "1 Artifact comment monitor" : `${t} Artifact comment monitors`;
        return t === 1 ? "1 monitor" : `${t} monitors`;
      }
    case "mcp_task":
      return t === 1 ? "1 MCP task" : `${t} MCP tasks`;
    case "dream":
      return "dreaming";
    case "auto_mode_scan":
      return "auto-mode scan";
    default:
  }
  return `${t} background ${t === 1 ? "task" : "tasks"}`;
}
function Yor(r) {
  if (r.length !== 1) return !1;
  let o = r[0];
  return o.type === "remote_agent" && o.isUltraplan === !0 && o.ultraplanPhase !== void 0;
}
export { vSe, Yor };