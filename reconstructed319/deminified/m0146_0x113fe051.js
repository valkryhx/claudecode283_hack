// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var FUt = "/v2/ccr-sessions/-/meta/mcp",
  Xd = "claude-code-remote",
  HTo = "send_later",
  g0s = "delete_trigger",
  mJi = ["list_triggers", "create_trigger", "update_trigger", "delete_trigger", "fire_trigger", "send_later"],
  y0s = "send_message",
  _0s = ["add_repo", "check_repo_access", "list_repos"],
  P_t = [..._0s, "register_repo_root"],
  hJi = "Claude Code Remote",
  nKe = "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a",
  b0s = "X-MCP-Server-ID";
function HUt(url, s) {
  return {
    type: "http",
    url: url,
    headers: {
      ["X-MCP-Server-ID"]: "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a",
      "X-Session-UUID": s,
      "anthropic-version": "2023-06-01"
    },
    alwaysLoad: !0
  };
}
var Rf = "hearthbot",
  p = {
    read_thread: "fetch_thread",
    read_project_chat: "fetch_project_timeline",
    read_messages_by_id: "fetch_messages",
    list_threads: "list_thread_sessions",
    list_prs: "list_project_prs",
    edit_message: "update_message",
    request_decision: "ask_decision",
    update_progress_checklist: "update_status"
  },
  $To = {
    post_message: "reply",
    rename_thread: "set_thread_label"
  },
  T = {
    start_thread: "start_thread_session"
  };
function l(e, s) {
  return [...e.map(item => [item, item]), ...Object.entries(s).flatMap(([t, _]) => {
    let o = e.find(item => item === _);
    return o === void 0 ? [] : [[t, o]];
  })];
}
function cpe(e, s = p) {
  return l(e, s).map(([t]) => t);
}
function r(e) {
  return `mcp__${Rf}__${e}`;
}
function n(e, s = p) {
  let [, t] = cpe([e], s);
  return r(t ?? e);
}
var reply = r("reply"),
  BTo = n("reply", $To),
  u = n("set_thread_label", $To),
  g = n("start_thread_session", T),
  messages = r("fetch_messages"),
  thread = r("fetch_thread"),
  timeline = r("fetch_project_timeline"),
  rKe = new Set(cpe(["fetch_messages", "fetch_thread", "fetch_project_timeline"]).map(r));
function RJ(e, s) {
  return e.some(item => s.some(_ => item.name === _ || item.aliases?.includes(_)));
}
var status = r("update_status"),
  S0s = [status, n("update_status")],
  jTo = [r("start_thread_session"), g],
  h = [...jTo, r("start_folder_thread")],
  $Dr = {
    reply: reply,
    postIsAnswer: !1,
    status: status,
    reads: {
      messages: messages,
      thread: thread,
      timeline: timeline
    }
  };
function Get(e) {
  let s = $Dr,
    t = i => {
      let c = n(i.slice(r("").length));
      return RJ(e, [c]) && !RJ(e, [i]) ? c : i;
    },
    postIsAnswer = RJ(e, [BTo]) && !RJ(e, [reply, status, ...h]),
    {
      messages: messages_2,
      thread: thread_2,
      timeline: timeline_2
    } = s.reads;
  return {
    reply: postIsAnswer ? BTo : s.reply,
    postIsAnswer: postIsAnswer,
    status: t(s.status),
    reads: {
      messages: t(messages_2),
      thread: t(thread_2),
      timeline: t(timeline_2)
    }
  };
}
var w0s = /^[A-Za-z0-9_-]{1,160}$/;
function k0s(e) {
  return `/v2/ccr-sessions/${e}/hearthbot/mcp`;
}
function gJi(url_2, s) {
  return {
    type: "http",
    url: url_2,
    headers: {
      "X-Session-UUID": s,
      "anthropic-version": "2023-06-01"
    },
    alwaysLoad: !0
  };
}
var yJi = new Set(cpe(["reply", "update_status", "no_reply_needed", "switch_model", "fetch_thread", "fetch_project_timeline", "fetch_messages", "search_channels", "set_thread_label", "set_thread_resolved", "list_thread_sessions", "list_thread_connectors", "list_project_members", "list_project_artifacts", "list_project_prs", "list_project_files", "read_project_file", "react", "unreact", "update_message", "get_channel_session_id", "get_project_session_id", "read_memory", "update_memory", "report_issue", "set_time_zone", "pin_artifact", "unpin_artifact", "suggest_connectors", "post_widget", "cookie_sign_in_request"])),
  _Ji = new Set(cpe(["update_memory", "update_message", "set_thread_resolved", "switch_model", "pin_artifact", "unpin_artifact", "report_issue", "set_time_zone", "cookie_sign_in_request", "post_widget", "suggest_connectors"]));
export { FUt, Xd, HTo, g0s, mJi, y0s, _0s, P_t, hJi, nKe, b0s, HUt, Rf, $To, cpe, reply as UTo, BTo, rKe, RJ, S0s, jTo, $Dr, Get, w0s, k0s, gJi, yJi, _Ji };