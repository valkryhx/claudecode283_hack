// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
function Qu(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "in_process_teammate";
}
function m_o(e) {
  let t = "";
  for (let a of Object.values(e)) if (Qu(a)) t += `${a.id}:${a.status};`;
  return t;
}
function SEr(e) {
  return e.status === "running" && !e.isIdle && e.currentWorkAbortController !== void 0;
}
function H$n(e) {
  if (!SEr(e)) return !1;
  return e.currentWorkAbortController?.abort(), !0;
}
function F$n(e) {
  return e.awaitingPlanApproval || e.pendingUserMessages.length > 0;
}
var $$n = 50;
function lLe(e, t) {
  if (e === void 0 || e.length === 0) return [t];
  if (e.length >= $$n) {
    let a = e.slice(-($$n - 1));
    return a.push(t), a;
  }
  return [...e, t];
}
function g_o(e, t) {
  let a = e === void 0 || e.every(item => item.uuid !== t.uuid) ? e : e.filter(item => item.uuid !== t.uuid);
  return lLe(a, t);
}
var wEr = {
  local_agent: "subagent",
  local_workflow: "workflow",
  local_bash: "shell",
  monitor_mcp: "monitor",
  monitor_ws: "monitor",
  mcp_task: "MCP task",
  in_process_teammate: "teammate",
  dream: "dream",
  auto_mode_scan: "auto-mode scan",
  remote_agent: "cloud session"
};
function nKe(e) {
  return wEr[e] ?? e;
}
function Hd(e) {
  return e.type === "local_agent" && "isObserver" in e && e.isObserver === !0;
}
function Ist(e, t, a, o) {
  if (o !== void 0 && "agentId" in e && typeof e.agentId === "string" && o(e.agentId)) return !1;
  let s = new Set(),
    n = "parentAgentId" in e && typeof e.parentAgentId === "string" ? e.parentAgentId : void 0;
  while (n && !s.has(n)) {
    if (n === t) return !0;
    if (o?.(n)) return !1;
    s.add(n);
    let r = a[n];
    n = r !== void 0 && r.type === "local_agent" && !("forkWorker" in r && r.forkWorker === !0) && "parentAgentId" in r && typeof r.parentAgentId === "string" ? r.parentAgentId : void 0;
  }
  return !1;
}
function fF(e) {
  if (e.type === "local_agent") return !Hd(e);
  return e.type === "local_workflow";
}
function km(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  if ("isBackgrounded" in e && e.isBackgrounded === !1) return !1;
  return !0;
}
function VPt(e) {
  return e.type === "mcp_task" && e.parked === !0;
}
function rKe(e) {
  return e.type === "local_bash" && e.kind === "monitor" || e.type === "monitor_mcp" || e.type === "monitor_ws" && e.ambient !== !0;
}
function i(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && e.frameLive?.explicit !== !0;
}
function Otn(e) {
  return i(e);
}
function p9(e) {
  return e.skipTranscript === !0 || e.type === "monitor_ws" && e.ambient === !0;
}
function cLe(e) {
  return e.type === "in_process_teammate" && e.isIdle && !F$n(e);
}
function Ost(e) {
  switch (e.type) {
    case "local_agent":
      return e.abortController?.signal.aborted === !0;
    case "in_process_teammate":
      return e.currentWorkAbortController?.signal.aborted === !0;
    default:
      return !1;
  }
}
function U$n(e) {
  return e?.type === "local_workflow";
}
var dLe = new Set(["local_agent", "in_process_teammate", "local_workflow", "dream"]);
export { Qu, m_o, SEr, H$n, F$n, $$n, lLe, g_o, wEr, nKe, Hd, Ist, fF, km, VPt, rKe, Otn, p9, cLe, Ost, U$n, dLe };