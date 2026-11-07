// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { at, S_, Zee, cc } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Xn } from "B:/~BUN/root/chunk-vmcmhkh2.js";
import { Mpt, Xa } from "B:/~BUN/root/chunk-m8dg5txf.js";
import { qM, ywi, _9, bI } from "B:/~BUN/root/chunk-27h4st9h.js";
import { oXe } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { uy } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { ZTt } from "B:/~BUN/root/chunk-dsf173dz.js";
import { bit, Hhe as permissionRelays } from "B:/~BUN/root/chunk-bq1zhyqz.js";
import { XTt } from "B:/~BUN/root/chunk-raq1af4d.js";
import { $Ne } from "B:/~BUN/root/chunk-3xtmwvra.js";
async function i4r({
  session: session,
  tools: tools,
  mainLoopModel: mainLoopModel,
  customSystemPrompt: customSystemPrompt,
  excludeDynamicSections: excludeDynamicSections,
  cacheBreakerPhrase: cacheBreakerPhrase,
  analysisOnly: analysisOnly,
  storageV5: storageV5,
  credentials: credentials
}) {
  let [defaultSystemPrompt, userContext, systemContext, t] = await Promise.all([customSystemPrompt !== void 0 ? Promise.resolve([]) : qM(tools, mainLoopModel, {
    excludeDynamicSections: excludeDynamicSections,
    analysisOnly: analysisOnly
  }), bI(session, storageV5, credentials), customSystemPrompt !== void 0 ? Promise.resolve({}) : _9(session, cacheBreakerPhrase), excludeDynamicSections && customSystemPrompt === void 0 ? ywi(mainLoopModel, {
    analysisOnly: analysisOnly
  }) : Promise.resolve({})]);
  if (excludeDynamicSections) return {
    defaultSystemPrompt: defaultSystemPrompt,
    userContext: {
      ...systemContext,
      ...userContext,
      ...t
    },
    systemContext: {}
  };
  return {
    defaultSystemPrompt: defaultSystemPrompt,
    userContext: userContext,
    systemContext: systemContext
  };
}
async function Z2o({
  session: session_2,
  messageQueue: messageQueue,
  tools: tools_2,
  toolCatalog: toolCatalog,
  commands: commands,
  mcpClients: mcpClients,
  messages: messages,
  turnInProgress: turnInProgress,
  readFileState: readFileState,
  toolState: toolState,
  sessionHooks: l,
  getAppState: getAppState,
  setAppState: setAppState,
  customSystemPrompt: customSystemPrompt_2,
  appendSystemPrompt: appendSystemPrompt,
  excludeDynamicSections: excludeDynamicSections_2,
  thinkingConfig: thinkingConfig,
  agents: M,
  storageV5: storageV5_2,
  credentials: credentials_2,
  runQuery: runQuery
}) {
  let r = getAppState(),
    mainLoopModel_2 = S_({
      permissionMode: r.toolPermissionContext.mode,
      mainLoopModel: at()
    }),
    {
      defaultSystemPrompt: defaultSystemPrompt_2,
      userContext: userContext_2,
      systemContext: systemContext_2
    } = await i4r({
      session: session_2,
      tools: tools_2,
      mainLoopModel: mainLoopModel_2,
      customSystemPrompt: customSystemPrompt_2,
      excludeDynamicSections: excludeDynamicSections_2,
      cacheBreakerPhrase: r.cacheBreakerPhrase,
      analysisOnly: !0,
      storageV5: storageV5_2,
      credentials: credentials_2
    }),
    systemPrompt = Xa(oXe(Mpt(customSystemPrompt_2, defaultSystemPrompt_2), {
      tools: tools_2,
      appendSystemPrompt: appendSystemPrompt
    })),
    k = messages.at(-1),
    h = turnInProgress && k?.type === "assistant" && k.message.stop_reason === null ? messages.slice(0, -1) : messages,
    toolUseContext = {
      messageQueue: messageQueue,
      session: session_2,
      storageV5: storageV5_2,
      credentials: credentials_2,
      agentContext: cc(),
      options: {
        commands: commands,
        debug: !1,
        mainLoopModel: mainLoopModel_2,
        tools: tools_2,
        toolCatalog: toolCatalog,
        verbose: !1,
        thinkingConfig: thinkingConfig ?? (Zee() !== !1 ? {
          type: "adaptive"
        } : {
          type: "disabled"
        }),
        mcpClients: mcpClients,
        mcpResources: {},
        isNonInteractiveSession: !0,
        runQuery: runQuery,
        agentDefinitions: {
          activeAgents: M,
          allAgents: []
        },
        customSystemPrompt: customSystemPrompt_2,
        ...(customSystemPrompt_2 !== void 0 && {
          omitGitStatus: !0
        }),
        appendSystemPrompt: appendSystemPrompt,
        autoCompactWindow: r.autoCompactWindow,
        fastMode: r.fastMode,
        cacheBreakerPhrase: r.cacheBreakerPhrase
      },
      abortController: Xn(),
      readFileState: readFileState,
      toolState: toolState,
      toolDecisions: new Map(),
      permissionRelays: permissionRelays,
      getAppState: getAppState,
      setAppState: setAppState,
      ...XTt(getAppState, setAppState),
      queuedNotificationsRegistry: ZTt(getAppState, setAppState, session_2),
      taskRegistry: uy(getAppState, setAppState),
      sessionHooksRegistry: l,
      teammateColors: bit($Ne(getAppState, setAppState, "teammateColors")),
      rootToolSurface: {
        tools: tools_2,
        mainLoopModel: mainLoopModel_2
      },
      messages: h,
      turnStartIndex: 0,
      getFileHistoryState: () => {
        return;
      },
      applyFileHistoryOp: () => {},
      applyAttributionOp: () => {}
    };
  return {
    systemPrompt: systemPrompt,
    userContext: userContext_2,
    systemContext: systemContext_2,
    toolUseContext: toolUseContext,
    forkContextMessages: h,
    advisorModel: r.advisorModel
  };
}
export { i4r, Z2o };