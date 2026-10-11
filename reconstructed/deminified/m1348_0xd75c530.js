// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { it, Kf, t2, Tc } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { YU, pk, SE, wpo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Hn } from "B:/~BUN/root/chunk-hqrtayw5.js";
import { ei, jme } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Eg } from "B:/~BUN/root/chunk-y39emrp9.js";
import { RWe } from "B:/~BUN/root/chunk-4jwsev0y.js";
import { XIe, L5 as permissionRelays } from "B:/~BUN/root/chunk-kchavkh0.js";
import { EWe } from "B:/~BUN/root/chunk-tk5n033r.js";
import { Ole } from "B:/~BUN/root/chunk-aky7m4ay.js";
async function pTn({
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
  let [defaultSystemPrompt, userContext, systemContext, o] = await Promise.all([customSystemPrompt !== void 0 ? Promise.resolve([]) : SE(tools, mainLoopModel, {
    excludeDynamicSections: excludeDynamicSections,
    analysisOnly: analysisOnly
  }), pk(session, storageV5, credentials), customSystemPrompt !== void 0 ? Promise.resolve({}) : YU(session, cacheBreakerPhrase), excludeDynamicSections && customSystemPrompt === void 0 ? wpo(mainLoopModel, {
    analysisOnly: analysisOnly
  }) : Promise.resolve({})]);
  if (excludeDynamicSections) return {
    defaultSystemPrompt: defaultSystemPrompt,
    userContext: {
      ...systemContext,
      ...userContext,
      ...o
    },
    systemContext: {}
  };
  return {
    defaultSystemPrompt: defaultSystemPrompt,
    userContext: userContext,
    systemContext: systemContext
  };
}
async function zor({
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
  sessionHooks: d,
  getAppState: getAppState,
  setAppState: setAppState,
  customSystemPrompt: customSystemPrompt_2,
  appendSystemPrompt: appendSystemPrompt,
  excludeDynamicSections: excludeDynamicSections_2,
  thinkingConfig: thinkingConfig,
  agents: P,
  storageV5: storageV5_2,
  credentials: credentials_2,
  runQuery: runQuery
}) {
  let i = getAppState(),
    mainLoopModel_2 = Kf({
      permissionMode: i.toolPermissionContext.mode,
      mainLoopModel: it()
    }),
    {
      defaultSystemPrompt: defaultSystemPrompt_2,
      userContext: userContext_2,
      systemContext: systemContext_2
    } = await pTn({
      session: session_2,
      tools: tools_2,
      mainLoopModel: mainLoopModel_2,
      customSystemPrompt: customSystemPrompt_2,
      excludeDynamicSections: excludeDynamicSections_2,
      cacheBreakerPhrase: i.cacheBreakerPhrase,
      analysisOnly: !0,
      storageV5: storageV5_2,
      credentials: credentials_2
    }),
    systemPrompt = ei([...(typeof customSystemPrompt_2 === "string" ? jme(customSystemPrompt_2) : Array.isArray(customSystemPrompt_2) ? customSystemPrompt_2 : defaultSystemPrompt_2), ...(appendSystemPrompt ? [appendSystemPrompt] : [])]),
    k = messages.at(-1),
    h = turnInProgress && k?.type === "assistant" && k.message.stop_reason === null ? messages.slice(0, -1) : messages,
    toolUseContext = {
      messageQueue: messageQueue,
      session: session_2,
      storageV5: storageV5_2,
      credentials: credentials_2,
      agentContext: Tc(),
      options: {
        commands: commands,
        debug: !1,
        mainLoopModel: mainLoopModel_2,
        tools: tools_2,
        toolCatalog: toolCatalog,
        verbose: !1,
        thinkingConfig: thinkingConfig ?? (t2() !== !1 ? {
          type: "adaptive"
        } : {
          type: "disabled"
        }),
        mcpClients: mcpClients,
        mcpResources: {},
        isNonInteractiveSession: !0,
        runQuery: runQuery,
        agentDefinitions: {
          activeAgents: P,
          allAgents: []
        },
        customSystemPrompt: customSystemPrompt_2,
        ...(customSystemPrompt_2 !== void 0 && {
          omitGitStatus: !0
        }),
        appendSystemPrompt: appendSystemPrompt,
        autoCompactWindow: i.autoCompactWindow,
        fastMode: i.fastMode,
        cacheBreakerPhrase: i.cacheBreakerPhrase
      },
      abortController: Hn(),
      readFileState: readFileState,
      toolState: toolState,
      toolDecisions: new Map(),
      permissionRelays: permissionRelays,
      getAppState: getAppState,
      setAppState: setAppState,
      ...EWe(getAppState, setAppState),
      queuedNotificationsRegistry: RWe(getAppState, setAppState, session_2),
      taskRegistry: Eg(getAppState, setAppState),
      sessionHooksRegistry: d,
      teammateColors: XIe(Ole(getAppState, setAppState, "teammateColors")),
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
    advisorModel: i.advisorModel
  };
}
export { pTn, zor };