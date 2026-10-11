// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { jc } from "B:/~BUN/root/chunk-1f9marcm.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { FR } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { randomUUID as I } from "crypto";
var v = "is not supported in a cloud-hosted session",
  E = "names a path on this machine; the agent's files are in the cloud container",
  w = "is not available while this process drives a cloud-hosted session";
function R(e) {
  return `these options cannot apply to a cloud-hosted session, where the agent runs in the cloud container; remove: ${e.join(", ")}`;
}
var error = "bypassPermissions is not available in a cloud-hosted session",
  error_2 = "file rewinding is not available in a cloud-hosted session: the cloud agent keeps no file checkpoints",
  error_3 = "MCP server changes are not available in a cloud-hosted session yet; this machine's MCP servers reach cloud sessions through the device link",
  Eeo = new Set(["mcp_read_resource_v1"]),
  O = new Set(["model", "advisorModel", "effortLevel", "ultracode", "fastMode", "viewMode", "alwaysThinkingEnabled"]);
function x(e) {
  return typeof e === "object" && e !== null && "subtype" in e ? e.subtype : void 0;
}
function Teo(e, t) {
  let route = D(e, t);
  return route === null ? {
    route: {
      kind: "reject",
      error: `${L(x(e))} ${v}`
    },
    telemetrySubtype: "unknown"
  } : {
    route: route,
    telemetrySubtype: e.subtype
  };
}
var p = 8;
function h(e) {
  let t = e.slice(0, p).map(item => re(_h(item), 64));
  return e.length > p ? `${t.join(", ")} (and ${e.length - p} more)` : t.join(", ");
}
function L(e) {
  return typeof e === "string" ? re(_h(e), 64) : "a request without a string subtype";
}
function D(e, t) {
  let s = {
      kind: "forward",
      holdsLaterSends: !1
    },
    n = {
      kind: "forward",
      holdsLaterSends: !0
    };
  switch (e.subtype) {
    case "initialize":
    case "interrupt":
    case "end_session":
    case "cancel_async_message":
      return {
        kind: "local",
        handler: e.subtype
      };
    case "set_permission_mode":
      return t.strict && e.mode === "bypassPermissions" ? {
        kind: "reject",
        error: error
      } : n;
    case "set_model":
    case "set_max_thinking_tokens":
    case "mcp_toggle":
    case "mcp_reconnect":
    case "reload_plugins":
    case "reload_skills":
    case "reload_output_styles":
    case "set_mcp_permission_mode_override":
    case "set_chrome_browser_hints":
    case "set_prompt_suggestions_paused":
      return n;
    case "apply_flag_settings":
      {
        let r = T(e.settings);
        return r === null ? {
          kind: "reject",
          error: "apply_flag_settings requires settings to be an object"
        } : r.length > 0 ? {
          kind: "reject",
          error: `apply_flag_settings keys not available in a cloud-hosted session: ${h(r)}`
        } : n;
      }
    case "update_settings":
      return {
        kind: "reject",
        error: "update_settings is not available in a cloud-hosted session yet"
      };
    case "get_memory_dialog":
      return {
        kind: "reject",
        error: "get_memory_dialog is not available in a cloud-hosted session"
      };
    case "get_skills_dialog":
      return {
        kind: "reject",
        error: "get_skills_dialog is not available in a cloud-hosted session"
      };
    case "get_status":
      return {
        kind: "reject",
        error: "get_status is not available in a cloud-hosted session"
      };
    case "export_conversation":
      return {
        kind: "reject",
        error: "export_conversation is not available in a cloud-hosted session"
      };
    case "get_chrome_dialog":
      return {
        kind: "reject",
        error: "get_chrome_dialog is not available in a cloud-hosted session"
      };
    case "get_chrome_browsers":
      return {
        kind: "reject",
        error: "get_chrome_browsers is not available in a cloud-hosted session"
      };
    case "select_chrome_browser":
      return {
        kind: "reject",
        error: "select_chrome_browser is not available in a cloud-hosted session"
      };
    case "get_sandbox_dialog":
      return {
        kind: "reject",
        error: "get_sandbox_dialog is not available in a cloud-hosted session"
      };
    case "rewind_conversation":
      return n;
    case "fork_conversation":
      return {
        kind: "reject",
        error: "fork_conversation is not available in a cloud-hosted session"
      };
    case "seed_read_state":
      return n;
    case "rewind_files":
      return {
        kind: "reject",
        error: error_2
      };
    case "get_context_usage":
    case "get_session_cost":
    case "mcp_status":
    case "list_models":
    case "get_usage":
    case "get_binary_version":
    case "file_suggestions":
    case "read_file":
    case "get_workspace_diff":
    case "get_plan":
    case "stop_task":
    case "background_tasks":
    case "get_settings":
    case "get_hooks_listing":
    case "list_permission_rules":
    case "submit_feedback":
    case "message_rated":
    case "generate_session_title":
    case "side_question":
    case "mcp_call":
      return s;
    case "prefetch_attachments":
      return s;
    case "rename_session":
      return s;
    case "mcp_set_servers":
      return {
        kind: "reject",
        error: error_3
      };
    case "set_cwd":
    case "claim_session":
    case "add_directory":
    case "register_repo_root":
      return {
        kind: "reject",
        error: `${e.subtype} ${E}`
      };
    case "remote_control":
    case "channel_enable":
    case "ultrareview_launch":
    case "claude_authenticate":
    case "claude_oauth_callback":
    case "claude_oauth_wait_for_completion":
    case "mcp_authenticate":
    case "mcp_clear_auth":
    case "mcp_oauth_callback_url":
    case "set_color":
      return {
        kind: "reject",
        error: `${e.subtype} ${w}`
      };
    case "mcp_message":
      return {
        kind: "reject",
        error: "SDK MCP servers are not available in a cloud-hosted session"
      };
    case "mcp_read_resource":
      return {
        kind: "reject",
        error: "mcp_read_resource is not available in a cloud-hosted session yet"
      };
    case "poll_event":
      return {
        kind: "reject",
        error: "poll_event is not available in a cloud-hosted session yet"
      };
    case "stage_file":
    case "turn_handoff":
      return {
        kind: "reject",
        error: `${e.subtype} is sent to a cloud agent by the service, not by a host`
      };
    case "register_device_hooks":
    case "upload_device_hook_template":
    case "remote_tools_announce":
      return {
        kind: "reject",
        error: `${e.subtype} is sent to a cloud agent by the attached client, not by a host`
      };
    case "can_use_tool":
    case "hook_callback":
    case "elicitation":
    case "request_user_dialog":
    case "oauth_token_refresh":
    case "host_auth_token_refresh":
    case "remote_tool_call":
    case "remote_plumbing_call":
    case "remote_tools_probe":
    case "remote_tools_reannounce":
    case "remote_control_work_secret":
      return {
        kind: "reject",
        error: `${e.subtype} is agent-originated and cannot be sent by a host`
      };
    default:
      return N(e);
  }
}
function N(e) {
  return null;
}
function T(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  return Object.keys(e).filter(item => !O.has(item));
}
var f = {
    systemPrompt: "lost",
    appendSystemPrompt: "lost",
    agents: "lost",
    jsonSchema: "lost",
    skills: "lost",
    title: "preference",
    planModeInstructions: "lost",
    systemPromptSnapshot: "lost",
    toolAliases: "lost",
    excludeDynamicSections: "preference",
    appendSubagentSystemPrompt: "lost",
    promptSuggestions: "preference",
    agentProgressSummaries: "preference",
    forwardSubagentText: "lost",
    webSearchIsolationExemptMcpServers: "lost",
    supportedDialogKinds: "preference",
    perTaskStopAffordance: "lost",
    rapidFollowupPreempt: "preference",
    plugins: "lost",
    workspaceTrust: "preference",
    proactivity: "preference",
    attachServeRequest: "preference"
  },
  M = Object.keys(f);
function Ceo(e) {
  return f[e] ?? "lost";
}
var P = new Set();
function ACn(e) {
  return typeof e === "object" && e !== null && Object.values(e).some(item => Array.isArray(item) && item.length > 0);
}
function Cwt(e) {
  if (typeof e !== "object" || e === null) return !1;
  let t = "tools" in e ? e.tools : void 0,
    s = "disallowedTools" in e ? e.disallowedTools : void 0,
    n = "hooks" in e ? e.hooks : void 0,
    r = "permissionMode" in e ? e.permissionMode : void 0,
    l = o => Array.isArray(o) && o.length === 1 && o[0] === "*",
    u = o => Array.isArray(o) && o.length > 0;
  return t !== void 0 && !l(t) || u(s) && !l(s) || ACn(n) || r === "plan" || r === "dontAsk";
}
function K(e) {
  if (e === void 0) return [];
  if (typeof e !== "object" || e === null || Array.isArray(e)) return ["(unreadable)"];
  return Object.entries(e).filter(([, t]) => Cwt(t)).map(([t]) => t);
}
var z = "agent definitions that list tools or hooks, or set a permission mode, are not enforced by a cloud session",
  Yir = "structured output is not delivered to a cloud session yet";
function xCn(e, t, s = P) {
  let n = ACn(e.hooks),
    sdkMcpServers = e.sdkMcpServers,
    l = Array.isArray(sdkMcpServers) && sdkMcpServers.length > 0,
    u = e.jsonSchema !== void 0,
    o = K(e.agents),
    a = [...(n ? ["hooks"] : []), ...(l ? ["sdkMcpServers"] : []), ...(o.length > 0 ? ["agents"] : []), ...(u ? ["jsonSchema"] : [])],
    ignored = M.filter(item => e[item] !== void 0 && !s.has(item) && !a.includes(item) && !H(item, e[item]));
  if (a.length > 0 && t === "strict") return {
    outcome: "reject",
    error: R(a.map(item => item === "jsonSchema" ? `jsonSchema (${Yir})` : item === "agents" ? `agents (${h(o)}: ${z})` : item)),
    ignored: ignored
  };
  return {
    outcome: "accept",
    ignored: [...a, ...ignored]
  };
}
function H(e, t) {
  return e === "systemPrompt" && Array.isArray(t) && t.length === 1 && t[0] === "";
}
function Reo(account) {
  return {
    commands: [],
    agents: [],
    output_style: "default",
    available_output_styles: [],
    models: [],
    account: account,
    pid: process.pid
  };
}
function G7e(session_id, uuid, content) {
  return {
    type: "user",
    uuid: uuid,
    session_id: session_id,
    isReplay: !0,
    parent_tool_use_id: null,
    message: {
      role: "user",
      content: content
    }
  };
}
function o4(session_id_2, level, content_2) {
  return {
    type: "system",
    subtype: "informational",
    level: level,
    content: content_2,
    uuid: I(),
    session_id: session_id_2
  };
}
var F = 512,
  XWe = 200,
  PCn = 8;
function NH(e) {
  return _h(e, XWe);
}
var B = 2048,
  S = "[\\u200C\\u200D\\uFE00-\\uFE0F\\u{E0100}-\\u{E01EF}]",
  regExp = new RegExp(S, "gu"),
  regExp_2 = new RegExp(`(?:(?!${S})[\\p{Cc}\\p{Cf}\\p{Default_Ignorable_Code_Point}\\u2028\\u2029])+`, "gu"),
  X = 8;
function LSe(e) {
  return _h(e, B);
}
function _h(e, t = F) {
  let s = 0;
  return re(wt(e).replace(regExp_2, " ").replace(regExp, n => s++ < X ? n : "").trim(), t);
}
var g = 400,
  J = /^[0-9A-Za-z][0-9A-Za-z.+-]{0,63}$/,
  q = ["mcp_tool", "skill_tool", "dynamic_tool", "other_tool"];
function G(e) {
  if (e.startsWith("mcp__")) return "mcp_tool";
  if (e.startsWith(FR)) return "skill_tool";
  return e.includes("__") ? "dynamic_tool" : "other_tool";
}
function Aeo(e, t) {
  let s = typeof e.claude_code_version === "string" && J.test(e.claude_code_version) ? e.claude_code_version : "unknown",
    startup_timing = e.startup_timing,
    r = typeof startup_timing === "object" && startup_timing !== null && "warm_spare_claimed" in startup_timing ? startup_timing.warm_spare_claimed : void 0,
    l = typeof r === "boolean" ? String(r) : "unknown",
    u = `[headlessCloudClient] worker init: claude_code_version=${s} warm_spare=${l}`;
  if (!Array.isArray(e.tools)) return `${u} tools=unknown`;
  let o = e.tools.filter(item => typeof item === "string").map(jc),
    a = o.filter(item => t.has(item)),
    d = o.filter(item => !t.has(item)).map(G),
    i = q.flatMap(item => {
      let m = U(d, k => k === item);
      return m > 0 ? [`${item} x${m}`] : [];
    }),
    y = [...a.slice(0, g), ...i].join(","),
    b = a.length > g ? ` (+${a.length - g} more not shown)` : "";
  return `${u} tools(${o.length})=${y}${b}`;
}
var _ = "Cloud session disconnected";
function ICn(e) {
  switch (e) {
    case "untrusted_device":
    case "session_stale_relogin":
      return e;
    case "invalid_session_id":
    case "request_rejected":
    case "malformed_response":
    case void 0:
      return "stream_closed";
  }
}
function OCn(e) {
  switch (e) {
    case "stream_closed":
      return `${_} (stream_closed): this machine is no longer attached. If the session still exists it keeps running in the cloud; open it again to re-attach.`;
    case "untrusted_device":
      return `${_} (untrusted_device): the server no longer accepts this machine's device proof. Sign in again on this machine, then open the session again.`;
    case "session_stale_relogin":
      return `${_} (session_stale_relogin): the sign-in on this machine has expired. Sign in again on this machine, then open the session again.`;
    case "attach_rejected":
      return `${_} (attach_rejected): this cloud session can no longer be attached to (it may have been archived). Start a new cloud session instead.`;
  }
}
export { Eeo, Teo, Ceo, ACn, Cwt, Yir, xCn, Reo, G7e, o4, XWe, PCn, NH, LSe, _h, Aeo, ICn, OCn };