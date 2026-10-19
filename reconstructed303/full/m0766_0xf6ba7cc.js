// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  rOn,
  oOn,
  sOn,
  t3t,
  n3t,
  r3t,
  o3t,
  iOn,
  aOn,
  lOn,
  dOn,
  cOn,
  uOn,
  _st
} from "B:/~BUN/root/chunk-w6w8tkbb.js";
import {
  ut
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  X3
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  pd
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  UMt,
  iut
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  e0n
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  hvn
} from "B:/~BUN/root/chunk-mtfjz3py.js";
import {
  dot
} from "B:/~BUN/root/chunk-w2w7b0v5.js";

function Qre(t = {}) {
  let e = import.meta.require("B:/~BUN/root/chunk-zec84vgx.js"),
    s = e.isTeammate() && e.isPlanModeRequired() ? "plan" : "default";
  return {
    sessionNoticesPoll: {
      pendingDeliveryUuids: []
    },
    settings: ut(),
    tasks: {},
    transcripts: {},
    runningSubagents: 0,
    agentNameRegistry: new Map,
    sendMessagePins: {},
    agentTypesInvokedThisSession: new Set,
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
    toolPermissionContext: {
      ...pd(),
      mode: s
    },
    attentionBudget: e0n,
    proactivityLevel: UMt,
    agent: void 0,
    agentDefinitions: {
      activeAgents: [],
      allAgents: []
    },
    fileHistory: {
      snapshots: [],
      trackedFiles: new Set,
      snapshotSequence: 0
    },
    attribution: iut(),
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
    artifactDbReadConsentSlugs: oOn,
    artifactDbReadHumanConsentSlugs: sOn,
    artifactReadConsentSlugs: t3t,
    artifactConsentEpoch: 0,
    artifactAssetUploadConsentSlugs: iOn,
    artifactAssetUploadHumanConsentSlugs: aOn,
    artifactAssetReadConsentSlugs: n3t,
    artifactAssetReadHumanConsentSlugs: r3t,
    artifactOutsideOrgConsentSlugs: o3t,
    artifactHandlersReadConsentSlugs: lOn,
    artifactHandlersReadHumanConsentSlugs: dOn,
    artifactHandlersWriteConsentSlugs: cOn,
    artifactHandlersWriteHumanConsentSlugs: uOn,
    artifactRoomJoinConsentSlugs: _st,
    artifactReadPageDataApproved: !1,
    artifactReadPageDataHumanApproved: !1,
    artifactPlanPublishConsentPaths: rOn,
    ultrareviewOverageConfirmed: !1,
    thinkingEnabled: X3(),
    promptSuggestionEnabled: t.promptSuggestionEnabled ?? hvn(),
    awaySummaryEnabled: dot(),
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
    storedImagePaths: new Map,
    imageDescriptions: new Map,
    classifierApprovals: {
      approvals: new Map,
      checking: new Set
    },
    teammateColors: {
      assignments: new Map,
      index: 0
    },
    webBrowser: import.meta.require("B:/~BUN/root/chunk-3khsfxr9.js").getDefaultWebBrowserState()
  }
}
export {
  Qre
};
