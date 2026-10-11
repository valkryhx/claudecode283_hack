// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { nt } from "B:/~BUN/root/chunk-17wqwt36.js";
import { en } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Mp as usage } from "B:/~BUN/root/chunk-504tqm4f.js";
import { tH, Ehn } from "B:/~BUN/root/chunk-q42dvn02.js";
import { randomUUID as i } from "crypto";
function k_e(request_id, response) {
  return {
    type: "control_response",
    response: {
      subtype: "success",
      request_id: request_id,
      response: response
    }
  };
}
function T2(request_id_2, error, error_code) {
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
function C2(session_id, errors, user_message_uuid) {
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
    uuid: i(),
    errors: errors,
    ...(user_message_uuid !== void 0 && {
      user_message_uuid: user_message_uuid
    })
  };
}
var u = 1000;
function v5n(r = process.argv.slice(2)) {
  return Ehn(r) && tH("--output-format", r) === "stream-json";
}
function nmt() {
  return Ne(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS);
}
function d(r, e = process.argv.slice(2)) {
  let t = tH("--session-id", e);
  return (tH("--sdk-url", e) === void 0 ? en(t) : t) || r;
}
function rmt({
  sessionId: sessionId,
  message: message,
  reason: t,
  resultIndex: o = 0
}) {
  return {
    ...C2(sessionId, [message]),
    ...(t !== void 0 && {
      startup_failure_reason: t
    }),
    ...(o !== null && {
      result_index: o
    })
  };
}
async function VJ(r) {
  let stdout = process.stdout;
  if (!nmt() || !v5n() || stdout.writableEnded || stdout.destroyed) return;
  let t = JSON.stringify(rmt({
      ...r,
      sessionId: d(r.sessionId)
    })) + `
`,
    o = () => {},
    promise = new Promise(n => {
      o = n;
    });
  stdout.once("error", o);
  try {
    stdout.write(t, () => o());
  } catch {
    return;
  }
  await nt(promise, u);
}
export { k_e, T2, C2, v5n, nmt, rmt, VJ };