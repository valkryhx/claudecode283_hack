// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Vr, Cy } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Ze } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Vn, Ox, hp, SJe, s2, fB } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { bA } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { z1, Bz, $Dn, Zat, Rse, ex, wq, oM, Re } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { le } from "B:/~BUN/root/chunk-e7tskyjv.js";
import { AR, x7 } from "B:/~BUN/root/chunk-fbgs9vjp.js";
import { oos } from "B:/~BUN/root/chunk-1s8qqe91.js";
import { Toe } from "B:/~BUN/root/chunk-jnv7mp4r.js";
import { KRe } from "B:/~BUN/root/chunk-tabp3jhw.js";
import { da } from "B:/~BUN/root/chunk-0zewma8k.js";
async function NYt(t, toolUseContext, a, n = {}) {
  let {
    extraMessages: extraMessages,
    forkOrigin: forkOrigin,
    narrowCanUseTool: narrowCanUseTool
  } = n;
  if (toolUseContext.getAppState().endedByModel) return m("subagent_launch", "subagent_fork_ended_by_model"), null;
  if (da()) return m("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let i = toolUseContext.renderedSystemPrompt;
  if (!i) {
    if (i = await U(toolUseContext), !i) return m("subagent_launch", "subagent_fork_prompt_missing"), null;
  }
  let r = toolUseContext.agentLifecycle.allocateName(_(n.nameHint ?? t)),
    d = (typeof n.description === "function" ? n.description(r) : n.description ?? t).replace(/\s+/g, " ").trim(),
    description = d.length > 50 ? ne(d, 49) + "\u2026" : d,
    o = Cy(r),
    {
      taskRegistry: taskRegistry
    } = toolUseContext,
    startTime = Date.now(),
    f = hp(toolUseContext.agentContext) + 1,
    c = z1(Bz.model, toolUseContext.options.mainLoopModel, "inherit", le(toolUseContext).mode),
    ownerAgentId = Ze(),
    S = Zat(toolUseContext, ownerAgentId),
    y = Rse({
      outputFileReadable: oM(toolUseContext.options.tools),
      ownerCanContinueAgents: S,
      agentId: o,
      ownerAgentId: ownerAgentId,
      spawnDepth: f,
      description: description,
      prompt: t,
      model: c,
      selectedAgent: Bz,
      taskRegistry: taskRegistry,
      toolUseId: toolUseContext.toolUseId,
      sessionScratch: toolUseContext.session.sessionScratch
    }),
    abortController = y.abortController;
  if (toolUseContext.appendSystemMessage?.(oos(o, description)), toolUseContext.agentLifecycle.registerName(r, Vr(o)), narrowCanUseTool) Vn().canUseToolNarrowings.set(o, narrowCanUseTool);
  Vn().agentSpawned.emit({
    agentId: o,
    agentType: Bz.agentType,
    parentAgentId: toolUseContext.agentId,
    taskRegistry: taskRegistry
  });
  let metadata = {
      prompt: t,
      resolvedAgentModel: c,
      isBuiltInAgent: !0,
      startTime: startTime,
      agentType: Bz.agentType,
      isAsync: !0,
      agentDepth: f,
      callerCanContinueAgents: S,
      source: Bz.source
    },
    agentContext = {
      agentId: o,
      parentAgentId: toolUseContext.agentId,
      depth: f,
      ...(SJe(toolUseContext) && {
        spawnedByMainThread: !0
      }),
      parentSessionId: bA(),
      agentType: "subagent",
      subagentName: Bz.agentType,
      displayName: r,
      isAsync: !0,
      isBackgroundAgent: !0,
      isBuiltIn: !0,
      ...(s2(toolUseContext.agentContext) && {
        forkOfMainConversation: !0
      }),
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...fB(toolUseContext.agentContext)
    },
    onRunSettled = taskRegistry.takeConcurrencySlot();
  return Ox(agentContext, () => x7({
    taskId: y.agentId,
    abortController: abortController,
    makeStream: (onCacheSafeParams, onQueryProgress, onStreamTokenEstimate) => AR({
      onQueryProgress: onQueryProgress,
      onStreamTokenEstimate: onStreamTokenEstimate,
      onModelRestricted: KRe(Bz.agentType, toolUseContext.appendSystemMessage),
      agentDefinition: Bz,
      turnPrompt: t,
      promptMessages: [...(extraMessages ?? []), Re({
        content: [{
          type: "text",
          text: $Dn(t)
        }]
      })],
      toolUseContext: toolUseContext,
      canUseTool: narrowCanUseTool ? narrowCanUseTool(a) : a,
      isAsync: !0,
      querySource: Toe(Bz.agentType, !0),
      forkOrigin: forkOrigin,
      spawnedBySkill: toolUseContext.options.spawnedBySkill ?? toolUseContext.options.activeSkill,
      spawnedByForkedSkill: toolUseContext.options.spawnedByForkedSkill,
      model: "inherit",
      override: {
        systemPrompt: i,
        parentSystemPrompt: !0,
        agentId: Vr(y.agentId),
        agentContext: agentContext,
        abortController: abortController,
        requireCanUseTool: narrowCanUseTool ? !0 : void 0
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
  })), g("subagent_launch"), {
    agentId: o,
    name: r
  };
}
async function U(toolUseContext_2) {
  let e = toolUseContext_2.getAppState(),
    mainThreadAgentDefinition = e.agent ? e.agentDefinitions.activeAgents.find(item => item.agentType === e.agent) : void 0,
    defaultSystemPrompt = await ex(toolUseContext_2.options.tools, toolUseContext_2.options.mainLoopModel);
  return wq({
    mainThreadAgentDefinition: mainThreadAgentDefinition,
    toolUseContext: toolUseContext_2,
    customSystemPrompt: toolUseContext_2.options.customSystemPrompt,
    defaultSystemPrompt: defaultSystemPrompt,
    appendSystemPrompt: toolUseContext_2.options.appendSystemPrompt
  });
}
function _(t) {
  return t.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork";
}
export { NYt };