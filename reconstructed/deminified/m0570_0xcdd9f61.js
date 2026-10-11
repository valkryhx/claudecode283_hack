// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { Y, U_ } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { fo, Zt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { fwe } from "B:/~BUN/root/chunk-m24apm1y.js";
import { _tn } from "B:/~BUN/root/chunk-y39emrp9.js";
import { _p } from "B:/~BUN/root/chunk-3jyp964r.js";
import { LB, Pat, Ck } from "B:/~BUN/root/chunk-5a1m1kxy.js";
import { Dot } from "B:/~BUN/root/chunk-9sy3w2pa.js";
import { m7, Aze } from "B:/~BUN/root/chunk-1mdmjaqt.js";
import { vSe } from "B:/~BUN/root/chunk-qqa5c82w.js";
import { yze, KSe, Cno } from "B:/~BUN/root/chunk-tvk6phkz.js";
import { wEr, nKe, km, Otn, cLe, Ost } from "B:/~BUN/root/chunk-ydzwkn0c.js";
import { U, L } from "B:/~BUN/root/chunk-z1enakv9.js";
function tpe() {
  return !a.CLAUDE_DISABLE_ADOPT;
}
var u = 50;
function l(t) {
  let n = [];
  for (let o of U_()) {
    if (t && !t(o)) continue;
    n.push({
      label: "scheduled task",
      detail: `${f(o)} \xB7 ${fo(o.prompt, u, !0)}`
    });
  }
  return n;
}
function f(t) {
  if (t.recurring) return Ck(t.cron);
  let n = LB(t.cron),
    o = n && Pat(n, new Date(t.createdAt));
  if (!o) return Ck(t.cron);
  let e = Math.max(0, o.getTime() - Date.now());
  return `Runs once in ${Zt(e, {
    mostSignificantOnly: !0
  })}`;
}
function x7r(t, {
  includeDream = !1
} = {}) {
  let o = [];
  for (let e of Object.values(t)) {
    if (!km(e) || e.type === "remote_agent") continue;
    if (!includeDream && e.type === "dream") continue;
    if (e.type === "monitor_ws" && e.ambient) continue;
    if (cLe(e)) continue;
    if (Ost(e)) continue;
    o.push({
      label: nKe(e.type),
      detail: fo(e.description, u, !0)
    });
  }
  return o.push(...l()), o;
}
var g = {
  agent: "subagent",
  workflow: "workflow",
  shell: "shell",
  monitor: "monitor",
  mcp: "MCP task"
};
function P7r() {
  let t = Dot(),
    {
      items: items,
      kinds: kinds
    } = t,
    e = [];
  for (let r of items) {
    if (r.kind === "todo" || r.doneAt !== void 0) continue;
    e.push({
      label: g[r.kind],
      detail: fo(r.label, u, !0)
    });
  }
  if (kinds.includes("auto_mode_scan")) e.push({
    label: wEr.auto_mode_scan,
    detail: "environment scan for /auto-mode-setup"
  });
  return e.push(...l()), e;
}
function k(t) {
  return t.type === "monitor_ws" && t.ambient === !0 && !m7(t);
}
function p(t) {
  return Object.values(t).filter(km).filter(item => item.type !== "remote_agent" && item.type !== "dream").filter(item => !k(item));
}
function h(t) {
  if (t.status !== "running" && t.status !== "pending") return !1;
  if (Otn(t)) return !1;
  if (t.type === "in_process_teammate" && t.evictAfter === 0 && t.currentWorkAbortController === void 0 && cLe(t)) return !1;
  if (t.type === "remote_agent" || t.type === "dream") return !1;
  if (t.type === "mcp_task" && t.abortController === void 0) {
    if (t.protocol === "sep2663") {
      if (t.parked === !0) return !1;
      return t.sidecarSessionId !== Y() || t.sidecarProjectDir !== fwe();
    }
    return !1;
  }
  if (t.type === "monitor_ws" && t.ambient === !0) return !1;
  return !0;
}
function T(t) {
  return m7(t) && t.frameLive !== void 0;
}
function Kor() {
  return tpe() && !a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}
function S(t) {
  return m7(t) && Aze(t);
}
function I7r(t) {
  return Object.values(t).some(S) || Cno() || KSe().size > 0;
}
function wSe(t) {
  return Object.values(t).some(h);
}
function fM(t) {
  let n = p(t),
    o = U_().length,
    kinds_2 = L(n.map(d)),
    r = new Set(n.flatMap(item => T(item) ? [item.frameLive.slug] : [])),
    i = !tpe() ? 0 : U(L([...yze(), ...KSe()]), s => !r.has(s));
  if (i > 0 && !kinds_2.includes("artifact_watch")) kinds_2.push("artifact_watch");
  let drainableMonitors = Kor() ? r.size + i : 0;
  if (o > 0) kinds_2.push("session_cron");
  let restartableCount = U(Object.values(t), _tn);
  return {
    count: n.length + o + i,
    restartableCount: restartableCount,
    kinds: kinds_2,
    drainableMonitors: drainableMonitors,
    carriedMonitors: r.size + i
  };
}
function d(t) {
  if (t.type === "monitor_ws" && t.ambient) return "artifact_watch";
  return _p(t) && t.kind === "monitor" ? "monitor" : t.type;
}
function JIe(t, n) {
  let o = p(t),
    e = l(n?.cronFilter),
    count = o.length + e.length,
    kinds_3 = L(o.map(d));
  if (e.length > 0) kinds_3.push("session_cron");
  let c = [vSe(o), e.length ? `${e.length} ${I(e.length, "loop")}` : ""];
  return {
    count: count,
    kinds: kinds_3,
    summary: c.filter(Boolean).join(", ")
  };
}
function O7r() {
  let {
    tasks: tasks
  } = Dot();
  if (tasks === 0) return;
  return `Detached \u2014 ${tasks} ${I(tasks, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
export { tpe, x7r, P7r, Kor, I7r, wSe, fM, JIe, O7r };