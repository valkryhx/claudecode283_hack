// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pr, _S } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { st } from "B:/~BUN/root/chunk-game8aqv.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Hn, DD, Cm, Dyt, rH, SV } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { iM } from "B:/~BUN/root/chunk-trd3c21n.js";
import { YK, p6, Kdr, JPt, eye, qM, p9, oL, Ie } from "B:/~BUN/root/chunk-27h4st9h.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { Whe, dI, xle } from "B:/~BUN/root/chunk-ra105wwp.js";
import { gii } from "B:/~BUN/root/chunk-ehbbk4me.js";
import { jhe } from "B:/~BUN/root/chunk-cre1tnba.js";
import { SBe } from "B:/~BUN/root/chunk-23ewg8ga.js";
import { Da } from "B:/~BUN/root/chunk-tc6a3318.js";
async function Hbn(t, toolUseContext, a, o = {}) {
  let {
    extraMessages: extraMessages,
    forkOrigin: forkOrigin,
    narrowCanUseTool: narrowCanUseTool
  } = o;
  if (toolUseContext.getAppState().endedByModel) return m("subagent_launch", "subagent_fork_ended_by_model"), null;
  if (Da()) return m("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let i = toolUseContext.renderedSystemPrompt;
  if (!i) {
    if (i = await F(toolUseContext), !i) return m("subagent_launch", "subagent_fork_prompt_missing"), null;
  }
  let r = toolUseContext.agentLifecycle.allocateName(N(o.nameHint ?? t)),
    u = (typeof o.description === "function" ? o.description(r) : o.description ?? t).replace(/\s+/g, " ").trim(),
    description = u.length > 50 ? Q(u, 49) + "\u2026" : u,
    n = _S(o.nameHint !== void 0 && o.nameHintHoldsNoUserContent ? r : void 0),
    {
      taskRegistry: taskRegistry
    } = toolUseContext,
    startTime = Date.now(),
    f = Cm(toolUseContext.agentContext) + 1,
    C = YK(p6.model, toolUseContext.options.mainLoopModel, "inherit", se(toolUseContext).mode),
    ownerAgentId = st(),
    T = JPt(toolUseContext, ownerAgentId),
    y = eye({
      outputFileReadable: oL(toolUseContext.options.tools),
      ownerCanContinueAgents: T,
      agentId: n,
      ownerAgentId: ownerAgentId,
      spawnDepth: f,
      description: description,
      prompt: t,
      model: C,
      selectedAgent: p6,
      taskRegistry: taskRegistry,
      toolUseId: toolUseContext.toolUseId,
      sessionScratch: toolUseContext.session.sessionScratch
    }),
    abortController = y.abortController;
  if (toolUseContext.appendSystemMessage?.(gii(n, description)), toolUseContext.agentLifecycle.registerName(r, Pr(n)), narrowCanUseTool) Hn().canUseToolNarrowings.set(n, narrowCanUseTool);
  Hn().agentSpawned.emit({
    agentId: n,
    agentType: p6.agentType,
    parentAgentId: toolUseContext.agentId,
    taskRegistry: taskRegistry
  });
  let b = {
      prompt: t,
      resolvedAgentModel: C,
      isBuiltInAgent: !0,
      startTime: startTime,
      agentType: p6.agentType,
      isAsync: !0,
      agentDepth: f,
      callerCanContinueAgents: T,
      source: p6.source
    },
    agentContext = {
      agentId: n,
      parentAgentId: toolUseContext.agentId,
      depth: f,
      ...(Dyt(toolUseContext) && {
        spawnedByMainThread: !0
      }),
      parentSessionId: iM(),
      agentType: "subagent",
      subagentName: p6.agentType,
      displayName: r,
      isAsync: !0,
      isBackgroundAgent: !0,
      isBuiltIn: !0,
      ...(rH(toolUseContext.agentContext) && {
        forkOfMainConversation: !0
      }),
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...SV(toolUseContext.agentContext)
    },
    onRunSettled = taskRegistry.takeConcurrencySlot(),
    {
      onToolPool: onToolPool,
      reviewTools: reviewTools
    } = Whe(toolUseContext.options.tools);
  return DD(agentContext, () => xle({
    taskId: y.agentId,
    abortController: abortController,
    makeStream: (onCacheSafeParams, onQueryProgress, onStreamTokenEstimate) => dI({
      onQueryProgress: onQueryProgress,
      onStreamTokenEstimate: onStreamTokenEstimate,
      onModelRestricted: SBe(p6.agentType, toolUseContext.appendSystemMessage),
      agentDefinition: p6,
      turnPrompt: t,
      promptMessages: [...(extraMessages ?? []), Ie({
        content: [{
          type: "text",
          text: Kdr(t)
        }]
      })],
      toolUseContext: toolUseContext,
      canUseTool: narrowCanUseTool ? narrowCanUseTool(a) : a,
      isAsync: !0,
      querySource: jhe(p6.agentType, !0),
      forkOrigin: forkOrigin,
      spawnedBySkill: toolUseContext.options.spawnedBySkill ?? toolUseContext.options.activeSkill,
      spawnedByForkedSkill: toolUseContext.options.spawnedByForkedSkill,
      model: "inherit",
      override: {
        systemPrompt: i,
        parentSystemPrompt: !0,
        agentId: Pr(y.agentId),
        agentContext: agentContext,
        abortController: abortController,
        requireCanUseTool: narrowCanUseTool ? !0 : void 0
      },
      availableTools: toolUseContext.options.tools,
      forkContextMessages: toolUseContext.messages,
      useExactTools: !0,
      onCacheSafeParams: onCacheSafeParams,
      onToolPool: onToolPool,
      description: description,
      name: r
    }),
    metadata: {
      ...b,
      agentContext: agentContext
    },
    description: description,
    toolUseContext: toolUseContext,
    reviewTools: reviewTools,
    taskRegistry: taskRegistry,
    agentIdForCleanup: n,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onRunSettled: onRunSettled
  })), g("subagent_launch"), {
    agentId: n,
    name: r
  };
}
async function F(toolUseContext_2) {
  let e = toolUseContext_2.getAppState(),
    mainThreadAgentDefinition = e.agent ? e.agentDefinitions.activeAgents.find(item => item.agentType === e.agent) : void 0,
    defaultSystemPrompt = await qM(toolUseContext_2.options.tools, toolUseContext_2.options.mainLoopModel);
  return p9({
    mainThreadAgentDefinition: mainThreadAgentDefinition,
    toolUseContext: toolUseContext_2,
    customSystemPrompt: toolUseContext_2.options.customSystemPrompt,
    defaultSystemPrompt: defaultSystemPrompt,
    appendSystemPrompt: toolUseContext_2.options.appendSystemPrompt
  });
}
function N(t) {
  return t.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork";
}
export { Hbn };