// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Ne
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  nt
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  en
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  Mp
} from "B:/~BUN/root/chunk-504tqm4f.js";
import {
  tH,
  Ehn
} from "B:/~BUN/root/chunk-q42dvn02.js";
import {
  randomUUID as i
} from "crypto";

function k_e(r, e) {
  return {
    type: "control_response",
    response: {
      subtype: "success",
      request_id: r,
      response: e
    }
  }
}

function T2(r, e, t) {
  return {
    type: "control_response",
    response: {
      subtype: "error",
      request_id: r,
      error: e,
      ...t !== void 0 && {
        error_code: t
      }
    }
  }
}

function C2(r, e, t) {
  return {
    type: "result",
    subtype: "error_during_execution",
    duration_ms: 0,
    duration_api_ms: 0,
    is_error: !0,
    num_turns: 0,
    stop_reason: null,
    session_id: r,
    total_cost_usd: 0,
    usage: Mp,
    modelUsage: {},
    permission_denials: [],
    uuid: i(),
    errors: e,
    ...t !== void 0 && {
      user_message_uuid: t
    }
  }
}
var u = 1000;

function v5n(r = process.argv.slice(2)) {
  return Ehn(r) && tH("--output-format", r) === "stream-json"
}

function nmt() {
  return Ne(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS)
}

function d(r, e = process.argv.slice(2)) {
  let t = tH("--session-id", e);
  return (tH("--sdk-url", e) === void 0 ? en(t) : t) || r
}

function rmt({
  sessionId: r,
  message: e,
  reason: t,
  resultIndex: o = 0
}) {
  return {
    ...C2(r, [e]),
    ...t !== void 0 && {
      startup_failure_reason: t
    },
    ...o !== null && {
      result_index: o
    }
  }
}
async function VJ(r) {
  let e = process.stdout;
  if (!nmt() || !v5n() || e.writableEnded || e.destroyed) return;
  let t = JSON.stringify(rmt({
      ...r,
      sessionId: d(r.sessionId)
    })) + `
`,
    o = () => {},
    s = new Promise((n) => {
      o = n
    });
  e.once("error", o);
  try {
    e.write(t, () => o())
  } catch {
    return
  }
  await nt(s, u)
}
export {
  k_e,
  T2,
  C2,
  v5n,
  nmt,
  rmt,
  VJ
};
