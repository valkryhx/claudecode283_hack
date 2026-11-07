// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H5 } from "B:/~BUN/root/chunk-game8aqv.js";
import { oi } from "B:/~BUN/root/chunk-2pp12te6.js";
import { WRe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { E, He, B } from "B:/~BUN/root/chunk-4bfd0jkf.js";
var jEn = 61440,
  S = jEn - 4096;
function _(e) {
  return Buffer.byteLength(oi(e)) - 2;
}
function f(e, t, n, s, i) {
  return e.firstEvent.index === n.index && e.deltaType === s && e.first.parent_tool_use_id === t.parent_tool_use_id && e.first.thinking_display === t.thinking_display && e.first.api_message_id === t.api_message_id && e.bytes + i <= S;
}
function m(event) {
  if (event.type !== "content_block_delta") return null;
  switch (event.delta.type) {
    case "text_delta":
      return {
        event: event,
        deltaType: "text_delta",
        chunk: event.delta.text,
        estimatedTokens: void 0
      };
    case "input_json_delta":
      return {
        event: event,
        deltaType: "input_json_delta",
        chunk: event.delta.partial_json,
        estimatedTokens: void 0
      };
    case "thinking_delta":
      return {
        event: event,
        deltaType: "thinking_delta",
        chunk: event.delta.thinking,
        estimatedTokens: event.delta.estimated_tokens ?? void 0
      };
    case "citations_delta":
    case "signature_delta":
    case "compaction_delta":
      return null;
    default:
      return event.delta, null;
  }
}
function c(e) {
  if (e.count === 1) return e.first;
  let t;
  switch (e.deltaType) {
    case "text_delta":
      t = {
        type: "text_delta",
        text: e.accumulated
      };
      break;
    case "input_json_delta":
      t = {
        type: "input_json_delta",
        partial_json: e.accumulated
      };
      break;
    case "thinking_delta":
      t = {
        type: "thinking_delta",
        thinking: e.accumulated,
        estimated_tokens: e.estimatedTokens ?? null
      };
      break;
  }
  return {
    ...e.first,
    event: {
      ...e.firstEvent,
      delta: {
        ...e.firstEvent.delta,
        ...t
      }
    }
  };
}
function _ar(e) {
  if (e.length <= 1) return e;
  let t = [],
    n = null;
  for (let first of e) {
    let i = m(first.event);
    if (i === null) {
      if (n !== null) t.push(c(n)), n = null;
      t.push(first);
      continue;
    }
    let {
        event: r,
        deltaType: deltaType,
        chunk: o,
        estimatedTokens: estimatedTokens
      } = i,
      bytes = _(o);
    if (n !== null && f(n, first, r, deltaType, bytes)) {
      if (n.accumulated += o, n.bytes += bytes, n.count += 1, typeof estimatedTokens === "number") n.estimatedTokens = (n.estimatedTokens ?? 0) + estimatedTokens;
      continue;
    }
    if (n !== null) t.push(c(n));
    n = {
      first: first,
      firstEvent: r,
      deltaType: deltaType,
      accumulated: o,
      estimatedTokens: estimatedTokens,
      bytes: bytes,
      count: 1
    };
  }
  if (n !== null) t.push(c(n));
  return t;
}
function Cmi(e, t) {
  let n = e.findIndex(item => item.uuid === t);
  if (n < 0) return t;
  let s = null;
  for (let i = 0; i <= n; i++) {
    let first_2 = e[i],
      l = m(first_2.event);
    if (l === null) {
      s = null;
      continue;
    }
    let {
        event: o,
        deltaType: deltaType_2,
        chunk: chunk
      } = l,
      bytes_2 = _(chunk);
    if (s !== null && f(s, first_2, o, deltaType_2, bytes_2)) s.bytes += bytes_2;else s = {
      first: first_2,
      firstEvent: o,
      deltaType: deltaType_2,
      bytes: bytes_2
    };
  }
  return s?.first.uuid ?? t;
}
var g = new Set(["interrupt", "stop_task", "send_task_message", "set_permission_mode", "set_model", "set_max_thinking_tokens", "set_color", "mcp_toggle", "message_rated", "side_question", "ui_press", "ui_input", "ui_select", "ui_client_press", "ui_pane_show", "ui_close", "ui_scroll", "ui_prompt_edit"]),
  k = new Set(["can_use_tool", "request_user_dialog", "elicitation"]),
  T = new Set(["set_model", "set_permission_mode", "set_max_thinking_tokens"]);
function bar(e) {
  return y(e.request) && !T.has(e.request.subtype);
}
function Rmi() {
  H5(!0);
}
function $7o(e, t) {
  switch (e.type) {
    case "user":
      return !(t?.hostOwnsOrigin === !0 && WRe(e.origin, e.isSynthetic));
    case "bash_command":
      return !0;
    case "control_request":
      return y(e.request);
    default:
      return !1;
  }
}
function y(e) {
  let t = e?.subtype;
  return typeof t === "string" && g.has(t) && e?.by !== "app";
}
function $lt(e) {
  return k.has(e.request.subtype);
}
var WEn = "x-ccr-session-writers",
  Ami = p(() => He({
    writers: B(["owner_account_only", "not_owner_only"]),
    statedAtMs: E()
  }));
function xmi(e) {
  if (e === null || e.includes(",")) return;
  let t = new Map();
  for (let n of e.split(";")) {
    let s = n.trim(),
      i = s.indexOf("="),
      r = i === -1 ? "" : s.slice(0, i);
    if (r === "") continue;
    if (t.has(r)) return;
    t.set(r, s.slice(i + 1));
  }
  if (t.get("v") !== "1") return;
  switch (t.get("owner_account_only")) {
    case "true":
      return "owner_account_only";
    case "false":
      return "not_owner_only";
    default:
      return;
  }
}
function nde(e) {
  return e === "owner_account_only";
}
function nJr({
  frameCreatedAt: frameCreatedAt,
  sessionWriters: sessionWriters,
  maxFrameAgeMs: maxFrameAgeMs,
  maxStatementAgeMs: maxStatementAgeMs,
  now: now
}) {
  if (frameCreatedAt === void 0) return "no_frame_stamp";
  if (now - frameCreatedAt > maxFrameAgeMs) return "stale_frame";
  if (sessionWriters === void 0) return "session_writers_unknown";
  if (!nde(sessionWriters.writers)) return "session_not_owner_only";
  if (maxStatementAgeMs === void 0) return;
  let r = now - sessionWriters.statedAtMs;
  return r >= 0 && r <= maxStatementAgeMs ? void 0 : "session_writers_stale";
}
export { jEn, _ar, Cmi, bar, Rmi, $7o, $lt, WEn, Ami, xmi, nde, nJr };