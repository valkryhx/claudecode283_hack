// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { go, Vm } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { qe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { er, WE, Sd, pD } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { Vk } from "B:/~BUN/root/chunk-6spmd6p4.js";
import { iZ, ZH, CQt, SE, tB, H8, HO, Ce } from "B:/~BUN/root/chunk-3jyp964r.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { uL, rk, p4 } from "B:/~BUN/root/chunk-fwqmqt2f.js";
import { z5 } from "B:/~BUN/root/chunk-3fag6yem.js";
import { _pe } from "B:/~BUN/root/chunk-y96pqvt2.js";
import { Ni } from "B:/~BUN/root/chunk-aqngsaqg.js";
async function Svt(prompt, toolUseContext, canUseTool, n = {}) {
  let {
    extraMessages: extraMessages,
    forkOrigin: forkOrigin
  } = n;
  if (toolUseContext.getAppState().endedByModel) return m("subagent_launch", "subagent_fork_ended_by_model"), null;
  if (Ni()) return m("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let s = toolUseContext.renderedSystemPrompt;
  if (!s) {
    if (s = await I(toolUseContext), !s) return m("subagent_launch", "subagent_fork_prompt_missing"), null;
  }
  let r = toolUseContext.agentLifecycle.allocateName(h(n.nameHint ?? prompt)),
    l = (n.description ?? prompt).replace(/\s+/g, " ").trim(),
    description = l.length > 50 ? re(l, 49) + "\u2026" : l,
    o = Vm(r),
    {
      taskRegistry: taskRegistry
    } = toolUseContext,
    startTime = Date.now(),
    d = Sd(toolUseContext.agentContext) + 1,
    f = uL(ZH.model, toolUseContext.options.mainLoopModel, "inherit", me(toolUseContext).mode),
    u = H8({
      outputFileReadable: HO(toolUseContext.options.tools),
      agentId: o,
      ownerAgentId: qe(),
      spawnDepth: d,
      description: description,
      prompt: prompt,
      model: f,
      selectedAgent: ZH,
      taskRegistry: taskRegistry,
      toolUseId: toolUseContext.toolUseId,
      sessionScratch: toolUseContext.session.sessionScratch
    }),
    abortController = u.abortController;
  toolUseContext.agentLifecycle.registerName(r, go(o)), er().agentSpawned.emit({
    agentId: o,
    agentType: ZH.agentType,
    parentAgentId: toolUseContext.agentId,
    taskRegistry: taskRegistry
  });
  let metadata = {
      prompt: prompt,
      resolvedAgentModel: f,
      isBuiltInAgent: !0,
      startTime: startTime,
      agentType: ZH.agentType,
      isAsync: !0,
      agentDepth: d,
      source: ZH.source
    },
    agentContext = {
      agentId: o,
      parentAgentId: toolUseContext.agentId,
      depth: d,
      parentSessionId: Vk(),
      agentType: "subagent",
      subagentName: ZH.agentType,
      displayName: r,
      isAsync: !0,
      isBackgroundAgent: !0,
      isBuiltIn: !0,
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...pD(toolUseContext.agentContext)
    },
    onRunSettled = taskRegistry.takeConcurrencySlot();
  return WE(agentContext, () => p4({
    taskId: u.agentId,
    abortController: abortController,
    makeStream: (onCacheSafeParams, onQueryProgress, onStreamTokenEstimate) => rk({
      onQueryProgress: onQueryProgress,
      onStreamTokenEstimate: onStreamTokenEstimate,
      onModelRestricted: _pe(ZH.agentType, toolUseContext.appendSystemMessage),
      agentDefinition: ZH,
      promptMessages: [...(extraMessages ?? []), Ce({
        content: [{
          type: "text",
          text: CQt(prompt)
        }]
      })],
      toolUseContext: toolUseContext,
      canUseTool: canUseTool,
      isAsync: !0,
      querySource: z5(ZH.agentType, !0),
      forkOrigin: forkOrigin,
      spawnedBySkill: toolUseContext.options.spawnedBySkill ?? toolUseContext.options.activeSkill,
      spawnedByForkedSkill: toolUseContext.options.spawnedByForkedSkill,
      model: "inherit",
      override: {
        systemPrompt: s,
        parentSystemPrompt: !0,
        agentId: go(u.agentId),
        agentContext: agentContext,
        abortController: abortController
      },
      availableTools: toolUseContext.options.tools,
      forkContextMessages: toolUseContext.messages,
      useExactTools: !0,
      onCacheSafeParams: onCacheSafeParams,
      description: description,
      name: r
    }),
    metadata: metadata,
    description: description,
    toolUseContext: toolUseContext,
    taskRegistry: taskRegistry,
    agentIdForCleanup: o,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onRunSettled: onRunSettled
  })), _("subagent_launch"), {
    agentId: o,
    name: r
  };
}
async function I(toolUseContext_2) {
  let e = toolUseContext_2.getAppState(),
    mainThreadAgentDefinition = e.agent ? e.agentDefinitions.activeAgents.find(item => item.agentType === e.agent) : void 0,
    defaultSystemPrompt = await SE(toolUseContext_2.options.tools, toolUseContext_2.options.mainLoopModel);
  return tB({
    mainThreadAgentDefinition: mainThreadAgentDefinition,
    toolUseContext: toolUseContext_2,
    customSystemPrompt: toolUseContext_2.options.customSystemPrompt,
    defaultSystemPrompt: defaultSystemPrompt,
    appendSystemPrompt: toolUseContext_2.options.appendSystemPrompt,
    skillsPersistencePrompt: iZ(toolUseContext_2.options.tools)
  });
}
function h(t) {
  return t.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork";
}
export { Svt };