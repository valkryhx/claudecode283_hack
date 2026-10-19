// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Cy } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { K } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { bjt, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { mr } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { TB } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { w2s } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { vt } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { xp, vn } from "B:/~BUN/root/chunk-k382hx6g.js";
import { iO } from "B:/~BUN/root/chunk-74f4ssah.js";
import { AUe, lBn } from "B:/~BUN/root/chunk-r1z1wgpe.js";
import { PT } from "B:/~BUN/root/chunk-f06s8ws5.js";
import { AE, tb } from "B:/~BUN/root/chunk-c2nm18xm.js";
var S = 50;
function Fsr(o) {
  let s = bjt(o, S),
    e = ne(s, S);
  return e.length < s.length ? `${e}...` : e;
}
function b(o, s) {
  if (s) return "plan";
  if (o === "plan" || o === "dontAsk") return "default";
  return o;
}
async function o8r(o, s) {
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
    agentId = TB(e, teamName),
    taskId = AE("in_process_teammate"),
    resumableAgentId = o.resumableAgentId ?? Cy(e);
  t(`[spawnInProcessTeammate] Spawning ${agentId} (taskId: ${taskId})`);
  try {
    let abortController = mr(),
      parentSessionId = K(),
      identity = {
        agentId: agentId,
        agentName: e,
        teamName: teamName,
        color: color,
        planModeRequired: planModeRequired,
        parentSessionId: parentSessionId,
        resumableAgentId: resumableAgentId
      },
      teammateContext = w2s({
        agentId: agentId,
        agentName: e,
        teamName: teamName,
        color: color,
        planModeRequired: planModeRequired,
        parentSessionId: parentSessionId,
        hasTaskListTools: iO() && s.rootToolSurface.tools.some(item => vt(item, PT)),
        abortController: abortController
      });
    if (AUe()) lBn(agentId, e, parentSessionId);
    let M = o.description || Fsr(prompt),
      _ = {
        ...tb(taskId, "in_process_teammate", M, s.toolUseId),
        type: "in_process_teammate",
        status: "running",
        identity: identity,
        spawnedWith: o.spawnedWith,
        prompt: o.shownPrompt ?? prompt,
        model: model,
        abortController: abortController,
        awaitingPlanApproval: !1,
        permissionMode: o.permissionMode ?? b(le(s).mode, planModeRequired),
        isIdle: !1,
        lastReportedToolCount: 0,
        lastReportedTokenCount: 0,
        pendingUserMessages: []
      };
    taskRegistry.register(_);
    let y = s.getAppState(),
      i = y.agentNameRegistry.get(e);
    if (i !== resumableAgentId) {
      let p = i !== void 0 ? y.tasks[i] : void 0,
        T = i !== void 0 && (p?.status === "running" || vn(p) || Object.values(y.tasks).some(item => xp(item) && item.status === "running" && item.identity.resumableAgentId === i)) ? s.agentLifecycle.allocateName(e) : e;
      if (T !== e) t(`[spawnInProcessTeammate] name "${e}" already routes to live ${i}; registry entry uses "${T}" instead`);
      s.agentLifecycle.registerName(T, resumableAgentId);
    }
    return t(`[spawnInProcessTeammate] Registered ${agentId} in AppState`), g("swarm_in_process_spawn"), {
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
export { Fsr, o8r };