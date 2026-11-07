// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Vrr as artifactPlanPublishConsentPaths, Krr as artifactDbReadConsentSlugs, qrr as artifactDbReadHumanConsentSlugs, wkn as artifactReadConsentSlugs, kkn as artifactAssetReadConsentSlugs, vkn as artifactAssetReadHumanConsentSlugs, Ekn as artifactOutsideOrgConsentSlugs, Yrr as artifactAssetUploadConsentSlugs, Xrr as artifactAssetUploadHumanConsentSlugs, Jrr as artifactHandlersReadConsentSlugs, Qrr as artifactHandlersReadHumanConsentSlugs, Zrr as artifactHandlersWriteConsentSlugs, eor as artifactHandlersWriteHumanConsentSlugs, $Rt as artifactRoomJoinConsentSlugs } from "B:/~BUN/root/chunk-w5e3m3tb.js";
import { yt } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Zee } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { $d } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { Bar as attentionBudget, M6t as proactivityLevel } from "B:/~BUN/root/chunk-27h4st9h.js";
import { cMt } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { I9n } from "B:/~BUN/root/chunk-5z7p4cv1.js";
import { tCt } from "B:/~BUN/root/chunk-39etksx8.js";
function yhe(t = {}) {
  let e = import.meta.require("B:/~BUN/root/chunk-e9fwbs4n.js"),
    mode = e.isTeammate() && e.isPlanModeRequired() ? "plan" : "default";
  return {
    sessionNoticesPoll: {
      pendingDeliveryUuids: []
    },
    settings: yt(),
    tasks: {},
    transcripts: {},
    runningSubagents: 0,
    agentNameRegistry: new Map(),
    sendMessagePins: {},
    agentTypesInvokedThisSession: new Set(),
    verbose: !1,
    showMessageTimestamps: !1,
    mainLoopModel: null,
    mainLoopModelForSession: null,
    isBriefOnly: !1,
    slackTagConnected: !1,
    briefTranscript: !1,
    replBridgeEnabled: !1,
    replBridgeExplicit: !1,
    replBridgeOutboundOnly: !1,
    replBridgeSessionActive: !1,
    replBridgeSkipNextArchive: !1,
    replBridgeSessionGroupingId: void 0,
    replBridgeInitialName: void 0,
    replBridgeError: void 0,
    replBridgeErrorKind: void 0,
    toolPermissionContext: {
      ...$d(),
      mode: mode
    },
    attentionBudget: attentionBudget,
    proactivityLevel: proactivityLevel,
    agent: void 0,
    agentDefinitions: {
      activeAgents: [],
      allAgents: []
    },
    fileHistory: {
      snapshots: [],
      trackedFiles: new Set(),
      snapshotSequence: 0
    },
    attribution: cMt(),
    mcp: {
      clientsInitialized: !1,
      clients: [],
      tools: [],
      commands: [],
      resources: {},
      resourceTemplates: {},
      suppressedClaudeAiConnectors: [],
      pluginReconnectKey: 0
    },
    plugins: {
      enabled: [],
      disabled: [],
      commands: [],
      errors: [],
      warnings: [],
      installationStatus: {
        marketplaces: [],
        plugins: []
      },
      needsRefresh: !1
    },
    todos: {},
    queuedRemoteNotifications: {
      pending: [],
      drainedIds: [],
      nudge: null,
      readsThisTurn: [],
      readsDroppedThisTurn: 0,
      unfinishedReads: [],
      nudgeHeldUntil: {
        request: 0,
        cut: 0
      }
    },
    prResolvedThisSession: !1,
    frameUrls: {},
    frameOpenFailedPath: null,
    frameOpenFailedSeen: !1,
    artifactWatchApproved: !1,
    artifactDbWriteApproved: !1,
    artifactDbWriteHumanApproved: !1,
    artifactDbReadConsentSlugs: artifactDbReadConsentSlugs,
    artifactDbReadHumanConsentSlugs: artifactDbReadHumanConsentSlugs,
    artifactReadConsentSlugs: artifactReadConsentSlugs,
    artifactConsentEpoch: 0,
    artifactAssetUploadConsentSlugs: artifactAssetUploadConsentSlugs,
    artifactAssetUploadHumanConsentSlugs: artifactAssetUploadHumanConsentSlugs,
    artifactAssetReadConsentSlugs: artifactAssetReadConsentSlugs,
    artifactAssetReadHumanConsentSlugs: artifactAssetReadHumanConsentSlugs,
    artifactOutsideOrgConsentSlugs: artifactOutsideOrgConsentSlugs,
    artifactHandlersReadConsentSlugs: artifactHandlersReadConsentSlugs,
    artifactHandlersReadHumanConsentSlugs: artifactHandlersReadHumanConsentSlugs,
    artifactHandlersWriteConsentSlugs: artifactHandlersWriteConsentSlugs,
    artifactHandlersWriteHumanConsentSlugs: artifactHandlersWriteHumanConsentSlugs,
    artifactRoomJoinConsentSlugs: artifactRoomJoinConsentSlugs,
    artifactPlanPublishConsentPaths: artifactPlanPublishConsentPaths,
    ultrareviewOverageConfirmed: !1,
    thinkingEnabled: Zee(),
    promptSuggestionEnabled: t.promptSuggestionEnabled ?? I9n(),
    awaySummaryEnabled: tCt(),
    displayedMessageContent: {},
    inbox: {
      messages: []
    },
    pendingMemoryUpdates: [],
    pendingWorkerRequest: null,
    pendingSandboxRequest: null,
    promptSuggestion: {
      status: "empty"
    },
    taskSummary: null,
    initialMessage: null,
    sessionEffort: {
      kind: "inherit"
    },
    settingsEffortTable: {
      default: void 0,
      legacyUserEffort: void 0,
      byModel: {}
    },
    ultracode: void 0,
    cacheMissAckedAtOutputTokens: -1,
    fastMode: !1,
    storedImagePaths: new Map(),
    imageDescriptions: new Map(),
    classifierApprovals: {
      approvals: new Map(),
      checking: new Set()
    },
    teammateColors: {
      assignments: new Map(),
      index: 0
    },
    webBrowser: import.meta.require("B:/~BUN/root/chunk-05e1764w.js").getDefaultWebBrowserState()
  };
}
export { yhe };