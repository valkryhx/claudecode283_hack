// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { tt, qg, X3, Tl } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { _i } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { mr } from "B:/~BUN/root/chunk-jkv8n5r0.js";
import { fq, DR, ex, _hs } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { l5e, tBe } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { dh } from "B:/~BUN/root/chunk-k382hx6g.js";
import { aot } from "B:/~BUN/root/chunk-sgcv8apk.js";
import { Jqe, _oe as permissionRelays } from "B:/~BUN/root/chunk-0s60mnx7.js";
import { oot } from "B:/~BUN/root/chunk-8xdjnqdd.js";
import { gke } from "B:/~BUN/root/chunk-b4xxgr0r.js";
async function uar({
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
  let [defaultSystemPrompt, userContext, systemContext, t] = await Promise.all([customSystemPrompt !== void 0 ? Promise.resolve([]) : ex(tools, mainLoopModel, {
    excludeDynamicSections: excludeDynamicSections,
    analysisOnly: analysisOnly
  }), DR(session, storageV5, credentials), customSystemPrompt !== void 0 ? Promise.resolve({}) : fq(session, cacheBreakerPhrase), excludeDynamicSections && customSystemPrompt === void 0 ? _hs(mainLoopModel, {
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
async function Z9r({
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
    mainLoopModel_2 = qg({
      permissionMode: r.toolPermissionContext.mode,
      mainLoopModel: tt()
    }),
    {
      defaultSystemPrompt: defaultSystemPrompt_2,
      userContext: userContext_2,
      systemContext: systemContext_2
    } = await uar({
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
    systemPrompt = _i(tBe(l5e(customSystemPrompt_2, defaultSystemPrompt_2), {
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
      agentContext: Tl(),
      options: {
        commands: commands,
        debug: !1,
        mainLoopModel: mainLoopModel_2,
        tools: tools_2,
        toolCatalog: toolCatalog,
        verbose: !1,
        thinkingConfig: thinkingConfig ?? (X3() !== !1 ? {
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
      abortController: mr(),
      readFileState: readFileState,
      toolState: toolState,
      toolDecisions: new Map(),
      permissionRelays: permissionRelays,
      getAppState: getAppState,
      setAppState: setAppState,
      ...oot(getAppState, setAppState),
      queuedNotificationsRegistry: aot(getAppState, setAppState, session_2),
      taskRegistry: dh(getAppState, setAppState),
      sessionHooksRegistry: l,
      teammateColors: Jqe(gke(getAppState, setAppState, "teammateColors")),
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
export { uar, Z9r };