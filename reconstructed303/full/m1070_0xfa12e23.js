// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Vr,
  Cy
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  Ze
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  Vn,
  Ox,
  hp,
  SJe,
  s2,
  fB
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  bA
} from "B:/~BUN/root/chunk-8v3gkznb.js";
import {
  z1,
  Bz,
  $Dn,
  Zat,
  Rse,
  ex,
  wq,
  oM,
  Re
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  le
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  AR,
  x7
} from "B:/~BUN/root/chunk-fbgs9vjp.js";
import {
  oos
} from "B:/~BUN/root/chunk-1s8qqe91.js";
import {
  Toe
} from "B:/~BUN/root/chunk-jnv7mp4r.js";
import {
  KRe
} from "B:/~BUN/root/chunk-tabp3jhw.js";
import {
  da
} from "B:/~BUN/root/chunk-0zewma8k.js";
async function NYt(t, e, a, n = {}) {
  let {
    extraMessages: u,
    forkOrigin: k,
    narrowCanUseTool: s
  } = n;
  if (e.getAppState().endedByModel) return m("subagent_launch", "subagent_fork_ended_by_model"), null;
  if (da()) return m("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let i = e.renderedSystemPrompt;
  if (!i) {
    if (i = await U(e), !i) return m("subagent_launch", "subagent_fork_prompt_missing"), null
  }
  let r = e.agentLifecycle.allocateName(_(n.nameHint ?? t)),
    d = (typeof n.description === "function" ? n.description(r) : n.description ?? t).replace(/\s+/g, " ").trim(),
    p = d.length > 50 ? ne(d, 49) + "\u2026" : d,
    o = Cy(r),
    {
      taskRegistry: l
    } = e,
    w = Date.now(),
    f = hp(e.agentContext) + 1,
    c = z1(Bz.model, e.options.mainLoopModel, "inherit", le(e).mode),
    C = Ze(),
    S = Zat(e, C),
    y = Rse({
      outputFileReadable: oM(e.options.tools),
      ownerCanContinueAgents: S,
      agentId: o,
      ownerAgentId: C,
      spawnDepth: f,
      description: p,
      prompt: t,
      model: c,
      selectedAgent: Bz,
      taskRegistry: l,
      toolUseId: e.toolUseId,
      sessionScratch: e.session.sessionScratch
    }),
    T = y.abortController;
  if (e.appendSystemMessage?.(oos(o, p)), e.agentLifecycle.registerName(r, Vr(o)), s) Vn().canUseToolNarrowings.set(o, s);
  Vn().agentSpawned.emit({
    agentId: o,
    agentType: Bz.agentType,
    parentAgentId: e.agentId,
    taskRegistry: l
  });
  let b = {
      prompt: t,
      resolvedAgentModel: c,
      isBuiltInAgent: !0,
      startTime: w,
      agentType: Bz.agentType,
      isAsync: !0,
      agentDepth: f,
      callerCanContinueAgents: S,
      source: Bz.source
    },
    A = {
      agentId: o,
      parentAgentId: e.agentId,
      depth: f,
      ...SJe(e) && {
        spawnedByMainThread: !0
      },
      parentSessionId: bA(),
      agentType: "subagent",
      subagentName: Bz.agentType,
      displayName: r,
      isAsync: !0,
      isBackgroundAgent: !0,
      isBuiltIn: !0,
      ...s2(e.agentContext) && {
        forkOfMainConversation: !0
      },
      invocationKind: "spawn",
      invocationEmitted: !1,
      ...fB(e.agentContext)
    },
    M = l.takeConcurrencySlot();
  return Ox(A, () => x7({
    taskId: y.agentId,
    abortController: T,
    makeStream: (I, h, P) => AR({
      onQueryProgress: h,
      onStreamTokenEstimate: P,
      onModelRestricted: KRe(Bz.agentType, e.appendSystemMessage),
      agentDefinition: Bz,
      turnPrompt: t,
      promptMessages: [...u ?? [], Re({
        content: [{
          type: "text",
          text: $Dn(t)
        }]
      })],
      toolUseContext: e,
      canUseTool: s ? s(a) : a,
      isAsync: !0,
      querySource: Toe(Bz.agentType, !0),
      forkOrigin: k,
      spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill,
      spawnedByForkedSkill: e.options.spawnedByForkedSkill,
      model: "inherit",
      override: {
        systemPrompt: i,
        parentSystemPrompt: !0,
        agentId: Vr(y.agentId),
        agentContext: A,
        abortController: T,
        requireCanUseTool: s ? !0 : void 0
      },
      availableTools: e.options.tools,
      forkContextMessages: e.messages,
      useExactTools: !0,
      onCacheSafeParams: I,
      description: p,
      name: r
    }),
    metadata: b,
    description: p,
    toolUseContext: e,
    taskRegistry: l,
    agentIdForCleanup: o,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onRunSettled: M
  })), g("subagent_launch"), {
    agentId: o,
    name: r
  }
}
async function U(t) {
  let e = t.getAppState(),
    a = e.agent ? e.agentDefinitions.activeAgents.find((u) => u.agentType === e.agent) : void 0,
    n = await ex(t.options.tools, t.options.mainLoopModel);
  return wq({
    mainThreadAgentDefinition: a,
    toolUseContext: t,
    customSystemPrompt: t.options.customSystemPrompt,
    defaultSystemPrompt: n,
    appendSystemPrompt: t.options.appendSystemPrompt
  })
}

function _(t) {
  return t.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork"
}
export {
  NYt
};
