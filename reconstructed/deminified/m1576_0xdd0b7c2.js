// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Vm } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { Y } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { wD } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import { qLo } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { zt } from "B:/~BUN/root/chunk-msy8grqx.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { Hn } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { In } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Kke, lnn } from "B:/~BUN/root/chunk-5yjtercz.js";
import { Tk } from "B:/~BUN/root/chunk-70qv5h0a.js";
import { fv } from "B:/~BUN/root/chunk-m1qtc24s.js";
import { _S, vm } from "B:/~BUN/root/chunk-tzzvaz2j.js";
import { Qu } from "B:/~BUN/root/chunk-ydzwkn0c.js";
function b(o, s) {
  if (s) return "plan";
  if (o === "plan" || o === "dontAsk") return "default";
  return o;
}
async function Pnr(o, s) {
  let {
      name: e,
      teamName: teamName,
      prompt: prompt,
      color: color,
      planModeRequired: planModeRequired,
      model: model
    } = o,
    {
      taskRegistry: taskRegistry
    } = s,
    agentId = wD(e, teamName),
    taskId = _S("in_process_teammate"),
    resumableAgentId = o.resumableAgentId ?? Vm(e);
  t(`[spawnInProcessTeammate] Spawning ${agentId} (taskId: ${taskId})`);
  try {
    let abortController = Hn(),
      parentSessionId = Y(),
      identity = {
        agentId: agentId,
        agentName: e,
        teamName: teamName,
        color: color,
        planModeRequired: planModeRequired,
        parentSessionId: parentSessionId,
        resumableAgentId: resumableAgentId
      },
      teammateContext = qLo({
        agentId: agentId,
        agentName: e,
        teamName: teamName,
        color: color,
        planModeRequired: planModeRequired,
        parentSessionId: parentSessionId,
        hasTaskListTools: fv() && s.rootToolSurface.tools.some(item => zt(item, Tk)),
        abortController: abortController
      });
    if (Kke()) lnn(agentId, e, parentSessionId);
    let w = o.description ?? `${prompt.substring(0, 50)}${prompt.length > 50 ? "..." : ""}`,
      C = {
        ...vm(taskId, "in_process_teammate", w, s.toolUseId),
        type: "in_process_teammate",
        status: "running",
        identity: identity,
        prompt: o.description ?? prompt,
        model: model,
        abortController: abortController,
        awaitingPlanApproval: !1,
        permissionMode: o.permissionMode ?? b(me(s).mode, planModeRequired),
        isIdle: !1,
        lastReportedToolCount: 0,
        lastReportedTokenCount: 0,
        pendingUserMessages: []
      };
    taskRegistry.register(C);
    let y = s.getAppState(),
      i = y.agentNameRegistry.get(e);
    if (i !== resumableAgentId) {
      let p = i !== void 0 ? y.tasks[i] : void 0,
        T = i !== void 0 && (p?.status === "running" || In(p) || Object.values(y.tasks).some(item => Qu(item) && item.status === "running" && item.identity.resumableAgentId === i)) ? s.agentLifecycle.allocateName(e) : e;
      if (T !== e) t(`[spawnInProcessTeammate] name "${e}" already routes to live ${i}; registry entry uses "${T}" instead`);
      s.agentLifecycle.registerName(T, resumableAgentId);
    }
    return t(`[spawnInProcessTeammate] Registered ${agentId} in AppState`), _("swarm_in_process_spawn"), {
      ok: !0,
      agentId: agentId,
      identity: identity,
      taskId: taskId,
      abortController: abortController,
      teammateContext: teammateContext
    };
  } catch (n) {
    let error = n instanceof Error ? n.message : "Unknown error during spawn";
    return t(`[spawnInProcessTeammate] Failed to spawn ${agentId}: ${error}`), m("swarm_in_process_spawn", "spawn_failed"), {
      ok: !1,
      agentId: agentId,
      error: error
    };
  }
}
export { Pnr };