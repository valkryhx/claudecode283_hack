/* ==========================================================================
 * m0573.MJe   [m0573_0xcde50bc.js @ 4277]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function MJe() {
  return {
    ...IH(),
    taskDecorations: {},
    prStatus: null,
    prNeedsAuth: !1,
    expandedView: "none",
    replTab: "convo",
    panelFileView: null,
    diffPanelVisible: !1,
    paneHoldsToasts: !1,
    coordinatorTaskIndex: -1,
    workflowFooterIndex: 0,
    viewSelectionMode: "none",
    queueEditIndex: null,
    footerSelection: null,
    footerLinks: [],
    remoteSessionUrl: void 0,
    projectsSelfIdentity: jwn,
    remoteConnectionStatus: "connecting",
    remoteModeSessions: {},
    remoteBootstrap: null,
    remoteBackgroundTasks: [],
    workerInventory: null,
    hasRemoteReplyChannel: !1,
    replBridgeAutoOnByDefault: !1,
    replBridgeConnected: !1,
    replBridgeReconnecting: !1,
    replBridgeConnectUrl: void 0,
    replBridgeSessionUrl: void 0,
    replBridgeEnvironmentId: void 0,
    replBridgeSessionId: void 0,
    replBridgeError: void 0,
    replBridgeErrorKind: void 0,
    replBridgeInitialName: void 0,
    setupIssues: {
      settingsErrorCount: 0,
      lspFailedCount: 0,
      marketplaceIssueCount: 0,
      chromeExtensionIssueCount: 0,
      sandboxIssueCount: 0,
      statuslineIssueCount: 0,
      flaggedPluginCount: 0,
      modelDeprecationWarning: null,
      modelRestrictedWarning: null,
      existingClaudeSubscription: null
    },
    notifications: {
      current: null,
      queue: [],
      pinned: []
    },
    autoUpdaterResult: null,
    activeOverlays: new Set()
  };
}
