// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  aYt,
  lYt,
  cYt,
  Fvt,
  $vt,
  Uvt,
  Bvt,
  dYt,
  uYt,
  pYt,
  fYt,
  mYt,
  gYt,
  jze
} from "B:/~BUN/root/chunk-6yjt7rfc.js";
import {
  Je
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  t2
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  np
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  TIt,
  KKe
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  yJt
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  aqt
} from "B:/~BUN/root/chunk-xqjbapaq.js";
import {
  bWe
} from "B:/~BUN/root/chunk-18pna2e9.js";

function IH() {
  let e = import.meta.require("B:/~BUN/root/chunk-t9rxr1my.js"),
    t = e.isTeammate() && e.isPlanModeRequired() ? "plan" : "default";
  return {
    sessionNoticesPoll: {
      pendingDeliveryUuids: []
    },
    settings: Je(),
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
      ...np(),
      mode: t
    },
    attentionBudget: yJt,
    proactivityLevel: TIt,
    agent: void 0,
    agentDefinitions: {
      activeAgents: [],
      allAgents: []
    },
    skillTools: [],
    fileHistory: {
      snapshots: [],
      trackedFiles: new Set,
      snapshotSequence: 0
    },
    attribution: KKe(),
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
      nudge: null
    },
    prResolvedThisSession: !1,
    frameUrls: {},
    frameOpenFailedPath: null,
    frameOpenFailedSeen: !1,
    artifactWatchApproved: !1,
    artifactDbWriteApproved: !1,
    artifactDbWriteHumanApproved: !1,
    artifactDbReadConsentSlugs: lYt,
    artifactDbReadHumanConsentSlugs: cYt,
    artifactReadConsentSlugs: Fvt,
    artifactConsentEpoch: 0,
    artifactAssetUploadConsentSlugs: dYt,
    artifactAssetUploadHumanConsentSlugs: uYt,
    artifactAssetReadConsentSlugs: $vt,
    artifactAssetReadHumanConsentSlugs: Uvt,
    artifactOutsideOrgConsentSlugs: Bvt,
    artifactHandlersReadConsentSlugs: pYt,
    artifactHandlersReadHumanConsentSlugs: fYt,
    artifactHandlersWriteConsentSlugs: mYt,
    artifactHandlersWriteHumanConsentSlugs: gYt,
    artifactRoomJoinConsentSlugs: jze,
    artifactReadPageDataApproved: !1,
    artifactReadPageDataHumanApproved: !1,
    artifactPlanPublishConsentPaths: aYt,
    ultrareviewOverageConfirmed: !1,
    thinkingEnabled: t2(),
    promptSuggestionEnabled: aqt(),
    awaySummaryEnabled: bWe(),
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
    webBrowser: import.meta.require("B:/~BUN/root/chunk-ahqjz9fk.js").getDefaultWebBrowserState()
  }
}
export {
  IH
};
