// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vt } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { randomUUID as s } from "crypto";
var usage = {
  output_tokens_details: {
    thinking_tokens: 0
  },
  input_tokens: 0,
  cache_creation_input_tokens: 0,
  cache_read_input_tokens: 0,
  output_tokens: 0,
  server_tool_use: {
    web_search_requests: 0,
    web_fetch_requests: 0
  },
  service_tier: "standard",
  cache_creation: {
    ephemeral_1h_input_tokens: 0,
    ephemeral_5m_input_tokens: 0
  },
  inference_geo: "",
  iterations: [],
  speed: "standard",
  fallback_credit: null
};
function B4(e) {
  if (e == null || typeof e.input_tokens !== "number") return;
  if (typeof e.output_tokens === "number") return e;
  return e.output_tokens == null ? {
    ...e,
    output_tokens: 0
  } : void 0;
}
function kZe(e) {
  return e.send_now === !0 && e.cancel_queued !== !0;
}
function zjo(e) {
  return typeof e === "string" && e.startsWith("late-bind-interrupt-");
}
var u = 8;
function jYs(e) {
  let for_user_message_uuids = e.for_user_message_uuids;
  if (e.cancel_queued === !0 || !Array.isArray(for_user_message_uuids) || for_user_message_uuids.length === 0 || for_user_message_uuids.length > u) return;
  let t = new Set();
  for (let o of for_user_message_uuids) {
    let r = Vt(o);
    if (r === null) return;
    t.add(r.toLowerCase());
  }
  return {
    names: o => o.some(item => t.has(item.toLowerCase()))
  };
}
function Wne(request_id, response) {
  return {
    type: "control_response",
    response: {
      subtype: "success",
      request_id: request_id,
      response: response
    }
  };
}
function XB(request_id_2, error, error_code) {
  return {
    type: "control_response",
    response: {
      subtype: "error",
      request_id: request_id_2,
      error: error,
      ...(error_code !== void 0 && {
        error_code: error_code
      })
    }
  };
}
function d0(session_id, errors, user_message_uuid) {
  return {
    type: "result",
    subtype: "error_during_execution",
    duration_ms: 0,
    duration_api_ms: 0,
    is_error: !0,
    num_turns: 0,
    stop_reason: null,
    session_id: session_id,
    total_cost_usd: 0,
    usage: usage,
    modelUsage: {},
    permission_denials: [],
    uuid: s(),
    errors: errors,
    ...(user_message_uuid !== void 0 && {
      user_message_uuid: user_message_uuid
    })
  };
}
export { usage as $f, B4, kZe, zjo, jYs, Wne, XB, d0 };