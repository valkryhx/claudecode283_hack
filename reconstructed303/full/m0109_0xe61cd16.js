// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
var $yt = "/v2/ccr-sessions/-/meta/mcp",
  jd = "claude-code-remote",
  vFo = ["list_triggers", "create_trigger", "update_trigger", "delete_trigger", "fire_trigger", "send_later"],
  kFo = "send_message",
  EFo = ["add_repo", "check_repo_access", "list_repos"],
  kQe = [...EFo, "register_repo_root"],
  Z2s = "Claude Code Remote",
  XEe = "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a",
  TFo = "X-MCP-Server-ID";

function Uyt(e, s) {
  return {
    type: "http",
    url: e,
    headers: {
      ["X-MCP-Server-ID"]: "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a",
      "X-Session-UUID": s,
      "anthropic-version": "2023-06-01"
    },
    alwaysLoad: !0
  }
}
var Ec = "hearthbot",
  d = {
    read_thread: "fetch_thread",
    read_project_chat: "fetch_project_timeline",
    read_messages_by_id: "fetch_messages",
    list_threads: "list_thread_sessions",
    list_prs: "list_project_prs",
    edit_message: "update_message",
    request_decision: "ask_decision",
    update_progress_checklist: "update_status"
  },
  aHr = {
    post_message: "reply",
    rename_thread: "set_thread_label"
  },
  l = {
    start_thread: "start_thread_session"
  };

function T(e, s) {
  return [...e.map((t) => [t, t]), ...Object.entries(s).flatMap(([t, _]) => {
    let o = e.find((a) => a === _);
    return o === void 0 ? [] : [
      [t, o]
    ]
  })]
}

function EQe(e, s = d) {
  return T(e, s).map(([t]) => t)
}

function r(e) {
  return `mcp__${Ec}__${e}`
}

function n(e, s = d) {
  let [, t] = EQe([e], s);
  return r(t ?? e)
}
var lHr = r("reply"),
  dHr = n("reply", aHr),
  u = n("set_thread_label", aHr),
  g = n("start_thread_session", l),
  O = r("fetch_messages"),
  h = r("fetch_thread"),
  R = r("fetch_project_timeline"),
  KMe = new Set(EQe(["fetch_messages", "fetch_thread", "fetch_project_timeline"]).map(r));

function nne(e, s) {
  return e.some((t) => s.some((_) => t.name === _ || t.aliases?.includes(_)))
}
var c = r("update_status"),
  CFo = [c, n("update_status")],
  cHr = [r("start_thread_session"), g],
  A = [...cHr, r("start_folder_thread")],
  v5n = {
    reply: lHr,
    postIsAnswer: !1,
    status: c,
    reads: {
      messages: O,
      thread: h,
      timeline: R
    }
  };

function TQe(e) {
  let s = v5n,
    t = (i) => {
      let p = n(i.slice(r("").length));
      return nne(e, [p]) && !nne(e, [i]) ? p : i
    },
    _ = nne(e, [dHr]) && !nne(e, [lHr, c, ...A]),
    {
      messages: o,
      thread: a,
      timeline: E
    } = s.reads;
  return {
    reply: _ ? dHr : s.reply,
    postIsAnswer: _,
    status: t(s.status),
    reads: {
      messages: t(o),
      thread: t(a),
      timeline: t(E)
    }
  }
}
var RFo = /^[A-Za-z0-9_-]{1,160}$/;

function AFo(e) {
  return `/v2/ccr-sessions/${e}/hearthbot/mcp`
}

function eVs(e, s) {
  return {
    type: "http",
    url: e,
    headers: {
      "X-Session-UUID": s,
      "anthropic-version": "2023-06-01"
    },
    alwaysLoad: !0
  }
}
var tVs = new Set(EQe(["reply", "update_status", "no_reply_needed", "switch_model", "fetch_thread", "fetch_project_timeline", "fetch_messages", "search_channels", "set_thread_label", "set_thread_resolved", "list_thread_sessions", "list_thread_connectors", "list_project_members", "list_project_artifacts", "list_project_prs", "list_project_files", "read_project_file", "react", "unreact", "update_message", "get_channel_session_id", "get_project_session_id", "read_memory", "update_memory", "report_issue", "set_time_zone", "pin_artifact", "unpin_artifact", "suggest_connectors", "post_widget", "cookie_sign_in_request"])),
  nVs = new Set(EQe(["update_memory", "update_message", "set_thread_resolved", "switch_model", "pin_artifact", "unpin_artifact", "report_issue", "set_time_zone", "cookie_sign_in_request", "post_widget", "suggest_connectors"]));
export {
  $yt,
  jd,
  vFo,
  kFo,
  EFo,
  kQe,
  Z2s,
  XEe,
  TFo,
  Uyt,
  Ec,
  aHr,
  EQe,
  lHr,
  dHr,
  KMe,
  nne,
  CFo,
  cHr,
  v5n,
  TQe,
  RFo,
  AFo,
  eVs,
  tVs,
  nVs
};
