// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  go,
  Vm
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  qe
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  re
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  er,
  WE,
  Sd,
  pD
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  _,
  m
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Vk
} from "B:/~BUN/root/chunk-6spmd6p4.js";
import {
  iZ,
  ZH,
  CQt,
  SE,
  tB,
  H8,
  HO,
  Ce
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  uL,
  rk,
  p4
} from "B:/~BUN/root/chunk-fwqmqt2f.js";
import {
  z5
} from "B:/~BUN/root/chunk-3fag6yem.js";
import {
  _pe
} from "B:/~BUN/root/chunk-y96pqvt2.js";
import {
  Ni
} from "B:/~BUN/root/chunk-aqngsaqg.js";
async function Svt(t, e, a, n = {}) {
  let {
    extraMessages: p,
    forkOrigin: S
  } = n;
  if (e.getAppState().endedByModel) return m("subagent_launch", "subagent_fork_ended_by_model"), null;
  if (Ni()) return m("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let s = e.renderedSystemPrompt;
  if (!s) {
    if (s = await I(e), !s) return m("subagent_launch", "subagent_fork_prompt_missing"), null
  }
  let r = e.agentLifecycle.allocateName(h(n.nameHint ?? t)),
    l = (n.description ?? t).replace(/\s+/g, " ").trim(),
    g = l.length > 50 ? re(l, 49) + "\u2026" : l,
    o = Vm(r),
    {
      taskRegistry: i
    } = e,
    k = Date.now(),
    d = Sd(e.agentContext) + 1,
    f = uL(ZH.model, e.options.mainLoopModel, "inherit", me(e).mode),
    u = H8({
      outputFileReadable: HO(e.options.tools),
      agentId: o,
      ownerAgentId: qe(),
      spawnDepth: d,
      description: g,
      prompt: t,
      model: f,
      selectedAgent: ZH,
      taskRegistry: i,
      toolUseId: e.toolUseId,
      sessionScratch: e.session.sessionScratch
    }),
    y = u.abortController;
  e.agentLifecycle.registerName(r, go(o)), er().agentSpawned.emit({
    agentId: o,
    agentType: ZH.agentType,
    parentAgentId: e.agentId,
    taskRegistry: i
  });
  let A = {
      prompt: t,
      resolvedAgentModel: f,
      isBuiltInAgent: !0,
      startTime: k,
      agentType: ZH.agentType,
      isAsync: !0,
      agentDepth: d,
      source: ZH.source
    },
    c = {
      agentId: o,
      parentAgentId: e.agentId,
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
      ...pD(e.agentContext)
    },
    C = i.takeConcurrencySlot();
  return WE(c, () => p4({
    taskId: u.agentId,
    abortController: y,
    makeStream: (T, b, P) => rk({
      onQueryProgress: b,
      onStreamTokenEstimate: P,
      onModelRestricted: _pe(ZH.agentType, e.appendSystemMessage),
      agentDefinition: ZH,
      promptMessages: [...p ?? [], Ce({
        content: [{
          type: "text",
          text: CQt(t)
        }]
      })],
      toolUseContext: e,
      canUseTool: a,
      isAsync: !0,
      querySource: z5(ZH.agentType, !0),
      forkOrigin: S,
      spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill,
      spawnedByForkedSkill: e.options.spawnedByForkedSkill,
      model: "inherit",
      override: {
        systemPrompt: s,
        parentSystemPrompt: !0,
        agentId: go(u.agentId),
        agentContext: c,
        abortController: y
      },
      availableTools: e.options.tools,
      forkContextMessages: e.messages,
      useExactTools: !0,
      onCacheSafeParams: T,
      description: g,
      name: r
    }),
    metadata: A,
    description: g,
    toolUseContext: e,
    taskRegistry: i,
    agentIdForCleanup: o,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onRunSettled: C
  })), _("subagent_launch"), {
    agentId: o,
    name: r
  }
}
async function I(t) {
  let e = t.getAppState(),
    a = e.agent ? e.agentDefinitions.activeAgents.find((p) => p.agentType === e.agent) : void 0,
    n = await SE(t.options.tools, t.options.mainLoopModel);
  return tB({
    mainThreadAgentDefinition: a,
    toolUseContext: t,
    customSystemPrompt: t.options.customSystemPrompt,
    defaultSystemPrompt: n,
    appendSystemPrompt: t.options.appendSystemPrompt,
    skillsPersistencePrompt: iZ(t.options.tools)
  })
}

function h(t) {
  return t.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork"
}
export {
  Svt
};
