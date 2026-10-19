// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { nye } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { _ } from "B:/~BUN/root/chunk-6za2ez23.js";
import { fJe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { v, De, U } from "B:/~BUN/root/chunk-g3snhg6n.js";
var i = "live_only",
  error = "The reply is too large to be sent without storing it";
function u8t(e) {
  return e.type === "control_response" && e[i] === !0;
}
function bcs(e) {
  if (!(i in e)) return e;
  let {
    [i]: n,
    ...t
  } = e;
  return t;
}
function Scs(e, n) {
  if (!u8t(e) || Buffer.byteLength(_(e)) <= n) return e;
  let response = e.response;
  return {
    type: "control_response",
    [i]: !0,
    ...(typeof e.uuid === "string" && {
      uuid: e.uuid
    }),
    response: {
      subtype: "error",
      request_id: response?.request_id,
      error: error
    }
  };
}
var c = new Set(["interrupt", "stop_task", "send_task_message", "set_permission_mode", "set_model", "set_max_thinking_tokens", "set_color", "mcp_toggle", "message_rated", "side_question", "ui_press", "ui_input", "ui_select", "ui_client_press", "ui_pane_show", "ui_close", "ui_scroll", "ui_prompt_edit"]),
  d = new Set(["can_use_tool", "request_user_dialog", "elicitation"]),
  l = new Set(["set_model", "set_permission_mode", "set_max_thinking_tokens"]);
function HMn(e) {
  return u(e.request) && !l.has(e.request.subtype);
}
function wcs() {
  nye(!0);
}
function Xso(e, n) {
  switch (e.type) {
    case "user":
      return !(n?.hostOwnsOrigin === !0 && fJe(e.origin, e.isSynthetic));
    case "bash_command":
      return !0;
    case "control_request":
      return u(e.request);
    default:
      return !1;
  }
}
function u(e) {
  let n = e?.subtype;
  return typeof n === "string" && c.has(n) && e?.by !== "app";
}
function z4e(e) {
  return d.has(e.request.subtype);
}
var p8t = "x-ccr-session-writers",
  vcs = f(() => De({
    writers: U(["owner_account_only", "not_owner_only"]),
    statedAtMs: v()
  }));
function kcs(e) {
  if (e === null || e.includes(",")) return;
  let n = new Map();
  for (let t of e.split(";")) {
    let r = t.trim(),
      s = r.indexOf("="),
      o = s === -1 ? "" : r.slice(0, s);
    if (o === "") continue;
    if (n.has(o)) return;
    n.set(o, r.slice(s + 1));
  }
  if (n.get("v") !== "1") return;
  switch (n.get("owner_account_only")) {
    case "true":
      return "owner_account_only";
    case "false":
      return "not_owner_only";
    default:
      return;
  }
}
function G4e(e) {
  return e === "owner_account_only";
}
function jfr({
  frameCreatedAt: frameCreatedAt,
  sessionWriters: sessionWriters,
  maxFrameAgeMs: maxFrameAgeMs,
  maxStatementAgeMs: maxStatementAgeMs,
  now: now
}) {
  if (frameCreatedAt === void 0) return "no_frame_stamp";
  if (now - frameCreatedAt > maxFrameAgeMs) return "stale_frame";
  if (sessionWriters === void 0) return "session_writers_unknown";
  if (!G4e(sessionWriters.writers)) return "session_not_owner_only";
  if (maxStatementAgeMs === void 0) return;
  let o = now - sessionWriters.statedAtMs;
  return o >= 0 && o <= maxStatementAgeMs ? void 0 : "session_writers_stale";
}
export { u8t, bcs, Scs, HMn, wcs, Xso, z4e, p8t, vcs, kcs, G4e, jfr };