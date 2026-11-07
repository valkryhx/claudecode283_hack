// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pr,
  _S
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  st
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Hn,
  DD,
  Cm,
  Dyt,
  rH,
  SV
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  iM
} from "B:/~BUN/root/chunk-trd3c21n.js";
import {
  YK,
  p6,
  Kdr,
  JPt,
  eye,
  qM,
  p9,
  oL,
  Ie
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  Whe,
  dI,
  xle
} from "B:/~BUN/root/chunk-ra105wwp.js";
import {
  gii
} from "B:/~BUN/root/chunk-ehbbk4me.js";
import {
  jhe
} from "B:/~BUN/root/chunk-cre1tnba.js";
import {
  SBe
} from "B:/~BUN/root/chunk-23ewg8ga.js";
import {
  Da
} from "B:/~BUN/root/chunk-tc6a3318.js";
async function Hbn(t, e, a, o = {}) {
  let {
    extraMessages: d,
    forkOrigin: k,
    narrowCanUseTool: s
  } = o;
  if (e.getAppState().endedByModel) return m("subagent_launch", "subagent_fork_ended_by_model"), null;
  if (Da()) return m("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let i = e.renderedSystemPrompt;
  if (!i) {
    if (i = await F(e), !i) return m("subagent_launch", "subagent_fork_prompt_missing"), null
  }
  let r = e.agentLifecycle.allocateName(N(o.nameHint ?? t)),
    u = (typeof o.description === "function" ? o.description(r) : o.description ?? t).replace(/\s+/g, " ").trim(),
    p = u.length > 50 ? Q(u, 49) + "\u2026" : u,
    n = _S(o.nameHint !== void 0 && o.nameHintHoldsNoUserContent ? r : void 0),
    {
      taskRegistry: l
    } = e,
    w = Date.now(),
    f = Cm(e.agentContext) + 1,
    C = YK(p6.model, e.options.mainLoopModel, "inherit", se(e).mode),
    S = st(),
    T = JPt(e, S),
    y = eye({
      outputFileReadable: oL(e.options.tools),
      ownerCanContinueAgents: T,
      agentId: n,
      ownerAgentId: S,
      spawnDepth: f,
      description: p,
      prompt: t,
      model: C,
      selectedAgent: p6,
      taskRegistry: l,
      toolUseId: e.toolUseId,
      sessionScratch: e.session.sessionScratch
    }),
    A = y.abortController;
  if (e.appendSystemMessage?.(gii(n, p)), e.agentLifecycle.registerName(r, Pr(n)), s) Hn().canUseToolNarrowings.set(n, s);
  Hn().agentSpawned.emit({
    agentId: n,
    agentType: p6.agentType,
    parentAgentId: e.agentId,
    taskRegistry: l
  });
  let b = {
      prompt: t,
      resolvedAgentModel: C,
      isBuiltInAgent: !0,
      startTime: w,
      agentType: p6.agentType,
      isAsync: !0,
      agentDepth: f,
      callerCanContinueAgents: T,
      source: p6.source
    },
    c = {
      agentId: n,
      parentAgentId: e.agentId,
      depth: f,
      ...Dyt(e) && {
        spawnedByMainThread: !0
      },
      parentSessionId: iM(),
      agentType: "subagent",
      subagentName: p6.agentType,
      displayName: r,
      isAsync: !0,
      isBackgroundAgent: !0,
      isBuiltIn: !0,
      ...rH(e.agentContext) && {
        forkOfMainConversation: !0
      },
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...SV(e.agentContext)
    },
    M = l.takeConcurrencySlot(),
    {
      onToolPool: h,
      reviewTools: I
    } = Whe(e.options.tools);
  return DD(c, () => xle({
    taskId: y.agentId,
    abortController: A,
    makeStream: (P, U, _) => dI({
      onQueryProgress: U,
      onStreamTokenEstimate: _,
      onModelRestricted: SBe(p6.agentType, e.appendSystemMessage),
      agentDefinition: p6,
      turnPrompt: t,
      promptMessages: [...d ?? [], Ie({
        content: [{
          type: "text",
          text: Kdr(t)
        }]
      })],
      toolUseContext: e,
      canUseTool: s ? s(a) : a,
      isAsync: !0,
      querySource: jhe(p6.agentType, !0),
      forkOrigin: k,
      spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill,
      spawnedByForkedSkill: e.options.spawnedByForkedSkill,
      model: "inherit",
      override: {
        systemPrompt: i,
        parentSystemPrompt: !0,
        agentId: Pr(y.agentId),
        agentContext: c,
        abortController: A,
        requireCanUseTool: s ? !0 : void 0
      },
      availableTools: e.options.tools,
      forkContextMessages: e.messages,
      useExactTools: !0,
      onCacheSafeParams: P,
      onToolPool: h,
      description: p,
      name: r
    }),
    metadata: {
      ...b,
      agentContext: c
    },
    description: p,
    toolUseContext: e,
    reviewTools: I,
    taskRegistry: l,
    agentIdForCleanup: n,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onRunSettled: M
  })), g("subagent_launch"), {
    agentId: n,
    name: r
  }
}
async function F(t) {
  let e = t.getAppState(),
    a = e.agent ? e.agentDefinitions.activeAgents.find((d) => d.agentType === e.agent) : void 0,
    o = await qM(t.options.tools, t.options.mainLoopModel);
  return p9({
    mainThreadAgentDefinition: a,
    toolUseContext: t,
    customSystemPrompt: t.options.customSystemPrompt,
    defaultSystemPrompt: o,
    appendSystemPrompt: t.options.appendSystemPrompt
  })
}

function N(t) {
  return t.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork"
}
export {
  Hbn
};
