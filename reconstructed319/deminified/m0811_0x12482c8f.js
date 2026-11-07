// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { g } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { TXe } from "B:/~BUN/root/chunk-vy4t7613.js";
import { za } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { WMn } from "B:/~BUN/root/chunk-98qgaht2.js";
import { Kp } from "B:/~BUN/root/chunk-xgwmwbnb.js";
import { tp, EXt } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { Ko } from "B:/~BUN/root/chunk-kgvnwy91.js";
var Wyn = {
    name: "InProcessTeammateTask",
    type: "in_process_teammate",
    async kill(a, s, i, r, m) {
      let {
        memberRemoval: memberRemoval,
        osTeardown: osTeardown
      } = WJn(a, s, i, m);
      await Promise.all([memberRemoval, osTeardown]);
    }
  },
  k = 1e4;
function WJn(a, s, i, r) {
  let killed = !1,
    l = null,
    o = null,
    toolUseId,
    summary,
    n;
  s.update(a, e => {
    if (e.status !== "running") return e;
    return l = e.identity.teamName, o = e.identity.agentId, toolUseId = e.toolUseId, summary = e.description, n = e.paneTeardown, e.abortController?.abort(), killed = !0, e.onIdleCallbacks?.forEach(p => p()), {
      ...e,
      status: "killed",
      notified: !0,
      endTime: Date.now(),
      onIdleCallbacks: [],
      pendingUserMessages: [],
      abortController: void 0,
      currentWorkAbortController: void 0,
      paneTeardown: void 0,
      evictAfter: void 0
    };
  });
  let osTeardown_2 = n ? zt(n(), k, `pane teardown did not settle within ${k}ms`).then(e => {
    if (!e) t(`[killInProcessTeammate] pane teardown for ${a} reported failure \u2014 the backend could not find/kill the pane; its separate \`claude --agent-id\` process may still be running`, {
      level: "warn"
    });
    return e;
  }, e => (t(`[killInProcessTeammate] pane teardown for ${a} did not complete cleanly: ${d(e)}. Not blocking the stop result on it; the backend kill continues in the background and the separate \`claude --agent-id\` process may still be running`, {
    level: "warn"
  }), !1)) : Promise.resolve(void 0);
  if (killed && o) i(e => {
    if (!e.teamContext?.teammates?.[o]) return e;
    let {
      [o]: p,
      ...teammates
    } = e.teamContext.teammates;
    return {
      ...e,
      teamContext: {
        ...e.teamContext,
        teammates: teammates
      }
    };
  });
  let memberRemoval_2 = Promise.resolve();
  if (l && o) memberRemoval_2 = WMn(l, o, {
    onlyIfJoinedBefore: Date.now()
  }, r);
  if (killed) Kp(a), za(a, "stopped", {
    toolUseId: toolUseId,
    summary: summary
  }), setTimeout((e, p) => e.evictTerminal(p), EXt, s, a);
  if (o) TXe(o);
  return g("swarm_in_process_kill"), {
    killed: killed,
    memberRemoval: memberRemoval_2,
    osTeardown: osTeardown_2
  };
}
function sBe(a, s) {
  let i;
  for (let r of Object.values(s)) if (tp(r) && r.identity.agentId === a) {
    if (r.status === "running") return r;
    if (!i) i = r;
  }
  return i;
}
function jJn(a, s) {
  let task = sBe(a, s);
  if (task) return {
    status: "found",
    task: task
  };
  let r = Object.values(s).filter(tp).filter(item => item.identity.resumableAgentId === a),
    task_2 = r.find(item => item.status === "running") ?? r[0];
  if (task_2) return {
    status: "found",
    task: task_2
  };
  let l = new Map();
  for (let n of Object.values(s)) {
    if (!tp(n) || n.identity.agentName !== a) continue;
    let c = l.get(n.identity.agentId);
    if (!c || c.status !== "running" && n.status === "running") l.set(n.identity.agentId, n);
  }
  let o = [...l.values()],
    f = o.filter(item => item.status === "running"),
    u = f.length > 0 ? f : o;
  if (u.length === 1) return {
    status: "found",
    task: u[0]
  };
  if (u.length > 1) return {
    status: "ambiguous",
    candidates: u.map(item => item.identity.agentId),
    anyLive: u.some(item => !Ko(item.status))
  };
  return {
    status: "not_found"
  };
}
function Vti(a) {
  return xTt(a).filter(item => item.status === "running").map(item => item.identity.agentId);
}
function xTt(a) {
  return Object.values(a).filter(tp);
}
export { sBe, jJn, Vti, xTt, Wyn, WJn };