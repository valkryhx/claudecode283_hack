// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, Jp } from "B:/~BUN/root/chunk-game8aqv.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Os, cn } from "B:/~BUN/root/chunk-bkfncj77.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { $8 } from "B:/~BUN/root/chunk-435hgmb7.js";
import { rio, IDe, pZ, u_, Rye, Jde, PIt, EPn } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { Ql } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { jIt } from "B:/~BUN/root/chunk-4vcs773m.js";
import { U9, D7t, OI } from "B:/~BUN/root/chunk-0jhmwh3q.js";
import { zke, RCt } from "B:/~BUN/root/chunk-61tvx6vn.js";
import { hVo } from "B:/~BUN/root/chunk-x76hpay7.js";
import { hCt, S6e, lii } from "B:/~BUN/root/chunk-xp5ya8v1.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
function uBe() {
  return !i.CLAUDE_DISABLE_ADOPT;
}
var c = 50;
function d(e) {
  let o = [];
  for (let n of Jp()) {
    if (e && !e(n)) continue;
    o.push({
      label: "scheduled task",
      detail: `${b(n)} \xB7 ${Os(n.prompt, c, !0)}`
    });
  }
  return o;
}
function b(e) {
  if (e.recurring) return OI(e.cron);
  let o = U9(e.cron),
    n = o && D7t(o, new Date(e.createdAt), {
      oneShot: !0
    });
  if (!n) return OI(e.cron);
  let r = Math.max(0, n.getTime() - Date.now());
  return `Runs once in ${cn(r, {
    mostSignificantOnly: !0
  })}`;
}
function Toi(e, {
  includeDream = !1,
  mcpClients: mcpClients
} = {}) {
  let r = [],
    a = new Set(Object.values(e).flatMap(item => item.type === "local_agent" && item.agentType !== "main-session" && (PIt(item) || item.status === "killed") ? [item.agentId] : []));
  for (let t of Object.values(e)) {
    if (!u_(t) || t.type === "remote_agent") continue;
    if (!includeDream && t.type === "dream") continue;
    if (t.type === "post_turn_memory") continue;
    if (t.type === "monitor_ws" && t.ambient) continue;
    if (Jde(t)) continue;
    if (PIt(t)) continue;
    if (Ql(t) && t.agentId !== void 0 && a.has(t.agentId)) continue;
    if (g(t, mcpClients)) continue;
    if (Ql(t) && t.stopsOnExit && k(t.kind)) continue;
    r.push({
      label: IDe(t.type),
      detail: Os(t.description, c, !0)
    });
  }
  return r.push(...d()), r;
}
var y = {
  agent: "subagent",
  workflow: "workflow",
  shell: "shell",
  monitor: "monitor",
  mcp: "MCP task"
};
function Coi(e, o) {
  let n = jIt(),
    {
      items: items,
      kinds: kinds
    } = n,
    t = [];
  for (let s of items) {
    if (s.kind === "todo" || s.doneAt !== void 0 || s.stopsOnExit && k(s.kind)) continue;
    if (g(e?.[s.id], o)) continue;
    t.push({
      label: y[s.kind],
      detail: Os(s.label, c, !0)
    });
  }
  if (kinds.includes("auto_mode_scan")) t.push({
    label: rio.auto_mode_scan,
    detail: "environment scan for /auto-mode-setup"
  });
  if (kinds.includes("local_memory_import")) t.push({
    label: rio.local_memory_import,
    detail: "still reading local memory notes; running the command again later continues it"
  });
  if (le() && kinds.includes("local_script")) {
    let s = n.scripts?.length ? n.scripts : [import.meta.require("B:/~BUN/root/chunk-fmaaem8y.js").UNNAMED_SCRIPT];
    for (let l of s) t.push({
      label: IDe("local_script"),
      detail: Os(l, c, !0)
    });
  }
  return t.push(...d()), t;
}
function _(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && !zke(e);
}
function m(e) {
  return Object.values(e).filter(u_).filter(item => item.type !== "remote_agent" && item.type !== "dream" && item.type !== "post_turn_memory").filter(item => !_(item));
}
function pVo(e) {
  return le() ? m(e).filter(pZ).map(item => item.description) : [];
}
function p(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  if (Rye(e)) return !1;
  if (e.type === "in_process_teammate" && e.evictAfter === 0 && e.currentWorkAbortController === void 0 && Jde(e)) return !1;
  if (e.type === "remote_agent" || e.type === "dream" || e.type === "post_turn_memory") return !1;
  if (e.type === "mcp_task" && e.abortController === void 0) {
    if (e.protocol === "sep2663") {
      if (e.parked === !0) return !1;
      return e.sidecarSessionId !== z() || e.sidecarProjectDir !== $8();
    }
    return !1;
  }
  if (e.type === "monitor_ws" && e.ambient === !0) return !1;
  return !0;
}
function T(e) {
  return zke(e) && e.frameLive !== void 0;
}
function mVo() {
  return uBe() && !i.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}
function I(e) {
  return zke(e) && RCt(e);
}
function Roi(e) {
  return Object.values(e).some(I) || lii() || S6e().size > 0;
}
function Hke(e) {
  return Object.values(e).some(p);
}
function nF(e, {
  sessionCrons = !0
} = {}) {
  let n = m(e),
    r = sessionCrons ? Jp().length : 0,
    kinds_2 = L(n.map(f)),
    t = new Set(n.flatMap(item => T(item) ? [item.frameLive.slug] : [])),
    s = !uBe() ? 0 : U(L([...hCt(), ...S6e()]), u => !t.has(u));
  if (s > 0 && !kinds_2.includes("artifact_watch")) kinds_2.push("artifact_watch");
  let drainableMonitors = mVo() ? t.size + s : 0;
  if (r > 0) kinds_2.push("session_cron");
  let restartableCount = U(Object.values(e), EPn);
  return {
    count: n.length + r + s,
    restartableCount: restartableCount,
    kinds: kinds_2,
    drainableMonitors: drainableMonitors,
    carriedMonitors: t.size + s
  };
}
function f(e) {
  if (e.type === "monitor_ws" && e.ambient) return "artifact_watch";
  return Ql(e) && e.kind === "monitor" ? "monitor" : e.type;
}
function kit(e, o) {
  let n = m(e),
    r = d(o?.cronFilter),
    count = n.length + r.length,
    kinds_3 = L(n.map(f));
  if (r.length > 0) kinds_3.push("session_cron");
  let s = [hVo(n), r.length ? `${r.length} ${P(r.length, "loop")}` : ""];
  return {
    count: count,
    kinds: kinds_3,
    summary: s.filter(Boolean).join(", ")
  };
}
function Aoi() {
  let {
    tasks: tasks
  } = jIt();
  if (tasks === 0) return;
  return `Detached \u2014 ${tasks} ${P(tasks, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}
function g(e, o) {
  if (e?.type !== "mcp_task" || p(e)) return !1;
  let n = o?.find(r => r.name === e.serverName)?.config.type;
  return n !== void 0 && n !== "stdio" && n !== "sdk";
}
function k(e) {
  return e !== "monitor" || v("tengu_mossy_dijkstra", !0);
}
export { uBe, Toi, Coi, pVo, mVo, Roi, Hke, nF, kit, Aoi };