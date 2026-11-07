// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { dXn, cXn, BQs } from "B:/~BUN/root/chunk-f9gn5qf9.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { I9, DWe, yq } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { o, E, I, oe, C, xt, me, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { randomUUID as h } from "crypto";
var g = p(() => {
  let input = me(o(), oe()),
    text = xt({
      type: T("text"),
      text: o()
    }),
    assistantByType = new Map(),
    r = {
      text: text,
      tool_use: xt({
        type: T("tool_use"),
        id: o(),
        name: o(),
        input: input
      }),
      thinking: xt({
        type: T("thinking"),
        thinking: o(),
        signature: o().optional()
      }),
      redacted_thinking: xt({
        type: T("redacted_thinking"),
        data: o()
      }),
      server_tool_use: xt({
        type: T("server_tool_use"),
        id: o(),
        name: o(),
        input: input
      }),
      mcp_tool_use: xt({
        type: T("mcp_tool_use"),
        id: o(),
        name: o(),
        server_name: o(),
        input: input
      })
    };
  for (let [l, c] of Object.entries(r)) assistantByType.set(l, c);
  let i = E().finite();
  return {
    text: text,
    assistantByType: assistantByType,
    usage: xt({
      input_tokens: i,
      output_tokens: i,
      cache_creation_input_tokens: i.nullish(),
      cache_read_input_tokens: i.nullish(),
      iterations: C(xt({})).nullish()
    }),
    generic: xt({
      type: o()
    }),
    toolResultLike: xt({
      type: o(),
      tool_use_id: o()
    }),
    toolResult: xt({
      type: T("tool_result"),
      tool_use_id: o(),
      is_error: I().optional()
    })
  };
});
function u(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var y = 256,
  w = "[truncated: too deep]";
function k(value) {
  let s = [];
  if (typeof value === "object" && value !== null) s.push({
    value: value,
    depth: 1
  });
  while (s.length > 0) {
    let {
      value: value_2,
      depth: depth
    } = s.pop();
    if (depth > y) return !0;
    for (let value_3 of Object.values(value_2)) if (typeof value_3 === "object" && value_3 !== null) s.push({
      value: value_3,
      depth: depth + 1
    });
  }
  return !1;
}
function z(value_4) {
  let s = 0,
    n = [{
      value: value_4,
      depth: 1
    }];
  while (n.length > 0) {
    let {
        value: value_5,
        depth: depth_2
      } = n.pop(),
      l = Array.isArray(value_5) ? value_5 : u(value_5) ? value_5 : null;
    if (l === null) continue;
    for (let c of Object.keys(l)) {
      let value_6 = Reflect.get(l, c);
      if (typeof value_6 !== "object" || value_6 === null) continue;
      if (depth_2 + 1 > y) Reflect.set(l, c, w), s++;else n.push({
        value: value_6,
        depth: depth_2 + 1
      });
    }
  }
  return s;
}
function m(e) {
  return u(e) && typeof e.type === "string" ? e.type : null;
}
function v(e) {
  let s = m(e);
  if (s !== null) return s;
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function j(e) {
  let s = m(e);
  if (s === null) return !1;
  let n = g();
  return (n.assistantByType.get(s) ?? (s.endsWith("_tool_result") ? n.toolResultLike : n.generic)).safeParse(e).success;
}
function O(e) {
  let content = e.content;
  if (content === void 0 || typeof content === "string") return !0;
  if (Array.isArray(content)) {
    let n = content.filter(item => {
      let i = m(item);
      if (i === null) return !1;
      return i === "text" ? g().text.safeParse(item).success : g().generic.safeParse(item).success;
    });
    if (n.length !== content.length) e.content = n;
    return !0;
  }
  if (!u(content)) return e.content = String(content), !0;
  try {
    return e.content = _(content), !0;
  } catch {
    return !1;
  }
}
function A(e) {
  let s = m(e);
  if (s === null || !u(e)) return !1;
  let n = g();
  if (s === "text") return n.text.safeParse(e).success;
  if (s === "tool_result") {
    if (!n.toolResult.safeParse(e).success) return !1;
    return O(e);
  }
  return n.generic.safeParse(e).success;
}
function a(e, s, n) {
  t(`[wireFrameShape] ${e} frame ${typeof s === "string" ? s : "(no uuid)"}: ${n}`, {
    level: "error"
  });
}
function b(e, s, n, r) {
  let i = [],
    l = e.filter(item => {
      try {
        if (s(item)) return !0;
      } catch (error) {
        return i.push(`unreadable block (${d(error)})`), !1;
      }
      return i.push(v(item)), !1;
    });
  if (i.length === 0) return e;
  return a(n, r, `dropped ${i.length} malformed content block(s): ${i.join(", ")}`), l;
}
function R(e) {
  let s;
  if (typeof e.uuid === "string" && e.uuid !== "") s = e.uuid;else a("assistant", e.uuid, "minted a uuid \u2014 original was not a non-empty string"), s = h(), e.uuid = s;
  let n = e.message;
  if (!u(n)) return a("assistant", e.uuid, "dropped \u2014 message is not an object"), !1;
  if (n.id !== void 0 && typeof n.id !== "string") n.id = typeof n.id === "number" && Number.isFinite(n.id) ? String(n.id) : e.uuid, a("assistant", e.uuid, "coerced a non-string message.id");
  if (typeof n.content === "string") n.content = [{
    type: "text",
    text: n.content
  }];
  let content_2 = n.content;
  if (!Array.isArray(content_2)) return a("assistant", e.uuid, "dropped \u2014 message.content is not an array"), !1;
  let i = b(content_2, j, "assistant", e.uuid);
  if (i.length === 0 && content_2.length > 0) return a("assistant", e.uuid, "dropped \u2014 no valid content blocks remain"), !1;
  if (i !== content_2) n.content = i;
  return S(n, s), !0;
}
function S(e, s) {
  let n = [];
  if (e.model !== void 0 && typeof e.model !== "string") delete e.model, n.push("model");
  if (e.stop_reason !== void 0 && e.stop_reason !== null && typeof e.stop_reason !== "string") e.stop_reason = null, n.push("stop_reason");
  if (e.usage !== void 0 && !g().usage.safeParse(e.usage).success) delete e.usage, n.push("usage");
  if (n.length > 0) a("assistant", s, `removed malformed envelope field(s): ${n.join(", ")}`);
}
function x(e) {
  if (e.uuid !== void 0 && (typeof e.uuid !== "string" || e.uuid === "")) a("user", e.uuid, "minted a uuid \u2014 original was not a non-empty string"), e.uuid = h();
  let s = e.message;
  if (!u(s)) return a("user", e.uuid, "dropped \u2014 message is not an object"), !1;
  let content_3 = s.content;
  if (typeof content_3 === "string") return !0;
  if (!Array.isArray(content_3)) return a("user", e.uuid, "dropped \u2014 message.content is neither string nor array"), !1;
  let r = b(content_3, A, "user", e.uuid);
  if (r.length === 0 && content_3.length > 0) return a("user", e.uuid, "dropped \u2014 no valid content blocks remain"), !1;
  if (r !== content_3) s.content = r;
  return !0;
}
function K0o(e) {
  if (!u(e)) return !1;
  switch (e.type) {
    case "message_start":
      return u(e.message) && typeof e.message.id === "string";
    case "content_block_start":
      {
        let content_block = e.content_block;
        if (!u(content_block) || typeof content_block.type !== "string") return !1;
        switch (content_block.type) {
          case "tool_use":
          case "server_tool_use":
            return typeof content_block.id === "string" && typeof content_block.name === "string";
          case "text":
            return typeof content_block.text === "string";
          case "thinking":
            return typeof content_block.thinking === "string";
          default:
            return !0;
        }
      }
    case "content_block_delta":
      {
        let delta = e.delta;
        if (!u(delta)) return !1;
        switch (delta.type) {
          case "text_delta":
            return typeof delta.text === "string";
          case "input_json_delta":
            return typeof delta.partial_json === "string";
          case "signature_delta":
            return typeof delta.signature === "string";
          case "thinking_delta":
            return typeof delta.thinking === "string";
          default:
            return !0;
        }
      }
    default:
      return !0;
  }
}
function U4e(e) {
  if (!u(e)) return !0;
  try {
    let s = !0;
    try {
      let r = z(e);
      if (r > 0) a(typeof e.type === "string" ? e.type : "unknown", e.uuid, `replaced ${r} subtree(s) nested deeper than ${y} levels with a marker`);
    } catch {
      s = !1;
    }
    let n;
    switch (e.type) {
      case "assistant":
        n = R(e);
        break;
      case "user":
        n = x(e);
        break;
      case "stream_event":
        if (n = K0o(e.event), !n) a("stream_event", e.uuid, "dropped \u2014 inner event is malformed");
        break;
      default:
        n = !0;
        break;
    }
    if (n && !s && k(e)) return a(typeof e.type === "string" ? e.type : "unknown", e.uuid, `dropped \u2014 nested deeper than ${y} levels`), !1;
    return n;
  } catch (error) {
    return a(typeof e.type === "string" ? e.type : "unknown", e.uuid, `dropped \u2014 conformance threw: ${d(error)}`), !1;
  }
}
var P = ["blocked_path", "decision_reason", "decision_reason_type", "decision_reason_code", "decision_reason_rule_source", "title", "display_name", "description", "agent_id", "tool_kind", "server_prompt", "provenance_prompt_line"],
  U = [["decision_reason_hook_event", BQs], ["decision_reason_hook_source", dXn], ["decision_reason_hook_plugin_id", cXn]],
  N = ["classifier_approvable", "suppress_always_allow_rule", "default_to_no", "requires_user_interaction", "server_policy_ask_only"];
function Q5(e) {
  return typeof e.agent_id === "string" && e.agent_id !== "" && typeof e.tool_name === "string" && !DWe(e.tool_name) && !yq(e.tool_name);
}
function $Yn(e) {
  if (!u(e)) return !1;
  try {
    if (typeof e.tool_name !== "string" || typeof e.tool_use_id !== "string" || !u(e.input) || k(e)) return t("[wireFrameShape] can_use_tool request dropped \u2014 tool_name/tool_use_id not strings, input not an object, or nested too deep", {
      level: "error"
    }), !1;
    let s = [];
    for (let n of P) if (e[n] !== void 0 && typeof e[n] !== "string") delete e[n], s.push(n);
    for (let [n, r] of U) if (e[n] !== void 0 && r(e[n]) === void 0) delete e[n], s.push(n);
    for (let n of N) if (e[n] !== void 0 && typeof e[n] !== "boolean") delete e[n], s.push(n);
    if (e.permission_suggestions !== void 0) {
      let permission_suggestions = e.permission_suggestions,
        r = Array.isArray(permission_suggestions) ? permission_suggestions.filter(item => I9().safeParse(item).success) : [];
      if (!Array.isArray(permission_suggestions) || r.length !== permission_suggestions.length) if (s.push(`permission_suggestions (${Array.isArray(permission_suggestions) ? `${permission_suggestions.length - r.length} of ${permission_suggestions.length} entries` : "not an array"})`), r.length > 0) e.permission_suggestions = r;else delete e.permission_suggestions;
    }
    if (e.matched_ask_rule !== void 0) {
      let matched_ask_rule = e.matched_ask_rule;
      if (!u(matched_ask_rule) || typeof matched_ask_rule.source !== "string" || typeof matched_ask_rule.tool_name !== "string" || matched_ask_rule.rule_content !== void 0 && typeof matched_ask_rule.rule_content !== "string") delete e.matched_ask_rule, s.push("matched_ask_rule");
    }
    if (e.mcp_server !== void 0) {
      let mcp_server = e.mcp_server;
      if (!u(mcp_server) || typeof mcp_server.name !== "string" || typeof mcp_server.source !== "string") delete e.mcp_server, s.push("mcp_server");
    }
    if (e.mcp_skill !== void 0) {
      let mcp_skill = e.mcp_skill;
      if (!u(mcp_skill) || typeof mcp_skill.name !== "string" || typeof mcp_skill.version !== "string" || mcp_skill.server_description !== void 0 && typeof mcp_skill.server_description !== "string") delete e.mcp_skill, e.tool_kind = "mcp_skill", s.push("mcp_skill (tool_kind set to 'mcp_skill')");
    }
    if (e.computer_folder !== void 0) {
      let computer_folder = e.computer_folder;
      if (!u(computer_folder) || typeof computer_folder.path !== "string" || typeof computer_folder.computer_name !== "string") delete e.computer_folder, s.push("computer_folder");
    }
    if (s.length > 0) t(`[wireFrameShape] can_use_tool request ${e.tool_use_id}: removed malformed field(s): ${s.join(", ")}`, {
      level: "error"
    });
    return !0;
  } catch (error) {
    return t(`[wireFrameShape] can_use_tool request dropped \u2014 conformance threw: ${d(error)}`, {
      level: "error"
    }), !1;
  }
}
function mzt(e) {
  let toolUseID = "tool_use_id" in e ? e.tool_use_id : void 0;
  return {
    behavior: "deny",
    message: "Malformed permission request from worker",
    ...(typeof toolUseID === "string" && {
      toolUseID: toolUseID
    })
  };
}
function UYn(e) {
  let worker_epoch = e.worker_epoch;
  return typeof worker_epoch === "number" && Number.isSafeInteger(worker_epoch) && worker_epoch > 0 ? worker_epoch : void 0;
}
function hzt(e) {
  let s = e;
  return s.type === "system" && (s.subtype === "status" && s.status === "requesting" || s.subtype === "init" && s.request_at_init === !0);
}
export { K0o, U4e, Q5, $Yn, mzt, UYn, hzt };