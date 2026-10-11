// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  it,
  Kf,
  t2,
  Tc
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  YU,
  pk,
  SE,
  wpo
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Hn
} from "B:/~BUN/root/chunk-hqrtayw5.js";
import {
  ei,
  jme
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  Eg
} from "B:/~BUN/root/chunk-y39emrp9.js";
import {
  RWe
} from "B:/~BUN/root/chunk-4jwsev0y.js";
import {
  XIe,
  L5
} from "B:/~BUN/root/chunk-kchavkh0.js";
import {
  EWe
} from "B:/~BUN/root/chunk-tk5n033r.js";
import {
  Ole
} from "B:/~BUN/root/chunk-aky7m4ay.js";
async function pTn({
  session: s,
  tools: f,
  mainLoopModel: n,
  customSystemPrompt: a,
  excludeDynamicSections: m,
  cacheBreakerPhrase: g,
  analysisOnly: r,
  storageV5: p,
  credentials: c
}) {
  let [l, d, e, o] = await Promise.all([a !== void 0 ? Promise.resolve([]) : SE(f, n, {
    excludeDynamicSections: m,
    analysisOnly: r
  }), pk(s, p, c), a !== void 0 ? Promise.resolve({}) : YU(s, g), m && a === void 0 ? wpo(n, {
    analysisOnly: r
  }) : Promise.resolve({})]);
  if (m) return {
    defaultSystemPrompt: l,
    userContext: {
      ...e,
      ...d,
      ...o
    },
    systemContext: {}
  };
  return {
    defaultSystemPrompt: l,
    userContext: d,
    systemContext: e
  }
}
async function zor({
  session: s,
  messageQueue: f,
  tools: n,
  toolCatalog: a,
  commands: m,
  mcpClients: g,
  messages: r,
  turnInProgress: p,
  readFileState: c,
  toolState: l,
  sessionHooks: d,
  getAppState: e,
  setAppState: o,
  customSystemPrompt: t,
  appendSystemPrompt: u,
  excludeDynamicSections: x,
  thinkingConfig: M,
  agents: P,
  storageV5: C,
  credentials: S,
  runQuery: T
}) {
  let i = e(),
    y = Kf({
      permissionMode: i.toolPermissionContext.mode,
      mainLoopModel: it()
    }),
    {
      defaultSystemPrompt: v,
      userContext: j,
      systemContext: b
    } = await pTn({
      session: s,
      tools: n,
      mainLoopModel: y,
      customSystemPrompt: t,
      excludeDynamicSections: x,
      cacheBreakerPhrase: i.cacheBreakerPhrase,
      analysisOnly: !0,
      storageV5: C,
      credentials: S
    }),
    R = ei([...typeof t === "string" ? jme(t) : Array.isArray(t) ? t : v, ...u ? [u] : []]),
    k = r.at(-1),
    h = p && k?.type === "assistant" && k.message.stop_reason === null ? r.slice(0, -1) : r,
    B = {
      messageQueue: f,
      session: s,
      storageV5: C,
      credentials: S,
      agentContext: Tc(),
      options: {
        commands: m,
        debug: !1,
        mainLoopModel: y,
        tools: n,
        toolCatalog: a,
        verbose: !1,
        thinkingConfig: M ?? (t2() !== !1 ? {
          type: "adaptive"
        } : {
          type: "disabled"
        }),
        mcpClients: g,
        mcpResources: {},
        isNonInteractiveSession: !0,
        runQuery: T,
        agentDefinitions: {
          activeAgents: P,
          allAgents: []
        },
        customSystemPrompt: t,
        ...t !== void 0 && {
          omitGitStatus: !0
        },
        appendSystemPrompt: u,
        autoCompactWindow: i.autoCompactWindow,
        fastMode: i.fastMode,
        cacheBreakerPhrase: i.cacheBreakerPhrase
      },
      abortController: Hn(),
      readFileState: c,
      toolState: l,
      toolDecisions: new Map,
      permissionRelays: L5,
      getAppState: e,
      setAppState: o,
      ...EWe(e, o),
      queuedNotificationsRegistry: RWe(e, o, s),
      taskRegistry: Eg(e, o),
      sessionHooksRegistry: d,
      teammateColors: XIe(Ole(e, o, "teammateColors")),
      rootToolSurface: {
        tools: n,
        mainLoopModel: y
      },
      messages: h,
      turnStartIndex: 0,
      getFileHistoryState: () => {
        return
      },
      applyFileHistoryOp: () => {},
      applyAttributionOp: () => {}
    };
  return {
    systemPrompt: R,
    userContext: j,
    systemContext: b,
    toolUseContext: B,
    forkContextMessages: h,
    advisorModel: i.advisorModel
  }
}
export {
  pTn,
  zor
};
