// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { _ } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Yke } from "B:/~BUN/root/chunk-5yjtercz.js";
import { Si } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { o0t } from "B:/~BUN/root/chunk-8p6es4nr.js";
import { Tp } from "B:/~BUN/root/chunk-196w7fz7.js";
import { mst } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Qu } from "B:/~BUN/root/chunk-ydzwkn0c.js";
import { ui } from "B:/~BUN/root/chunk-3qp6kts8.js";
function findTaskByAgentId(n, o) {
  let i;
  for (let r of Object.values(o)) if (Qu(r) && r.identity.agentId === n) {
    if (r.status === "running") return r;
    if (!i) i = r;
  }
  return i;
}
function findTaskByAgentName(n, o) {
  let task = findTaskByAgentId(n, o);
  if (task) return {
    status: "found",
    task: task
  };
  let r = new Map();
  for (let s of Object.values(o)) {
    if (!Qu(s) || s.identity.agentName !== n) continue;
    let d = r.get(s.identity.agentId);
    if (!d || d.status !== "running" && s.status === "running") r.set(s.identity.agentId, s);
  }
  let m = [...r.values()],
    u = m.filter(item => item.status === "running"),
    a = u.length > 0 ? u : m;
  if (a.length === 1) return {
    status: "found",
    task: a[0]
  };
  if (a.length > 1) return {
    status: "ambiguous",
    candidates: a.map(item => item.identity.agentId),
    anyLive: a.some(item => !ui(item.status))
  };
  return {
    status: "not_found"
  };
}
function getRunningAgentIds(n) {
  return getTeammateTasks(n).filter(item => item.status === "running").map(item => item.identity.agentId);
}
function getTeammateTasks(n) {
  return Object.values(n).filter(Qu);
}
var inProcessTeammateTask = {
    name: "InProcessTeammateTask",
    type: "in_process_teammate",
    async kill(n, o, i, r, m) {
      let {
        memberRemoval: memberRemoval,
        osTeardown: osTeardown
      } = killInProcessTeammate(n, o, i, m);
      await Promise.all([memberRemoval, osTeardown]);
    }
  },
  PANE_TEARDOWN_TIMEOUT_MS = 1e4;
function killInProcessTeammate(n, o, i, r) {
  let killed = !1,
    u = null,
    a = null,
    toolUseId,
    summary,
    f;
  o.update(n, e => {
    if (e.status !== "running") return e;
    return u = e.identity.teamName, a = e.identity.agentId, toolUseId = e.toolUseId, summary = e.description, f = e.paneTeardown, e.abortController?.abort(), killed = !0, e.onIdleCallbacks?.forEach(c => c()), {
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
  let osTeardown_2 = f ? Ht(f(), PANE_TEARDOWN_TIMEOUT_MS, `pane teardown did not settle within ${PANE_TEARDOWN_TIMEOUT_MS}ms`).then(e => {
    if (!e) t(`[killInProcessTeammate] pane teardown for ${n} reported failure \u2014 the backend could not find/kill the pane; its separate \`claude --agent-id\` process may still be running`, {
      level: "warn"
    });
    return e;
  }, e => (t(`[killInProcessTeammate] pane teardown for ${n} did not complete cleanly: ${l(e)}. Not blocking the stop result on it; the backend kill continues in the background and the separate \`claude --agent-id\` process may still be running`, {
    level: "warn"
  }), !1)) : Promise.resolve(void 0);
  if (killed && a) i(e => {
    if (!e.teamContext?.teammates?.[a]) return e;
    let {
      [a]: c,
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
  if (u && a) memberRemoval_2 = o0t(u, a, {
    onlyIfJoinedBefore: Date.now()
  }, r);
  if (killed) Tp(n), Si(n, "stopped", {
    toolUseId: toolUseId,
    summary: summary
  }), setTimeout((e, c) => e.evictTerminal(c), mst, o, n);
  if (a) Yke(a);
  return _("swarm_in_process_kill"), {
    killed: killed,
    memberRemoval: memberRemoval_2,
    osTeardown: osTeardown_2
  };
}
export { findTaskByAgentId as Gue, findTaskByAgentName as KJr, getRunningAgentIds as YJr, getTeammateTasks as eWe, inProcessTeammateTask as Hbt, killInProcessTeammate as Oqt };