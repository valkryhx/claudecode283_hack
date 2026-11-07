// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { sui, M4t, jE, s1e, dkn, Z5r, yrr, ckn, _rr, e8r, t8r, n8r, $K, i1e, a1e, P8, a3e, iui, l3e, L4t, RRt } from "B:/~BUN/root/chunk-1pb6cmje.js";
import { M3e, RYt, Rfi, t9r } from "B:/~BUN/root/chunk-44wgxs8c.js";
import h from "ws";
function D(e) {
  return {
    on: (t, i) => {
      e.on(t, i);
    },
    removeAllListeners: () => e.removeAllListeners(),
    send: t => e.send(t),
    close: (t, i) => {
      if (e.readyState === h.OPEN) e.close(t, i);else e.terminate();
    },
    get readyState() {
      return e.readyState;
    }
  };
}
var E = 30000,
  P = 90000,
  A = {
    persisted: "the last-picked",
    only: "the only connected",
    local: "this computer's"
  },
  N = new Set(["external_message", "external_message_result", "external_config"]),
  M = new Set(["paired", "waiting", "extensions_list", "peer_connected", "peer_disconnected", "ping", "pong", "tool_result", "routing_ack", "external_message_result", "permission_request"]),
  C = 30000;
function b(e, t) {
  if (typeof e !== "string") return;
  let i = e.replace(/[\r\n\t\u0000-\u001f]/g, " ").trim();
  return i.length > t ? `${i.slice(0, t)}\u2026` : i;
}
function B(e) {
  if (typeof e.deviceId !== "string" || !dkn.test(e.deviceId)) return;
  return {
    deviceId: e.deviceId,
    name: b(e.name, 50),
    osPlatform: b(e.osPlatform, 30),
    connectedAt: typeof e.connectedAt === "number" ? e.connectedAt : 0
  };
}
var x = 4;
function q(e, t) {
  if (!Array.isArray(e)) return;
  let i = new Map(),
    n = (s, o) => {
      if (i.has(s)) {
        i.set(s, o);
        return;
      }
      if (i.size >= x) {
        t?.(`sanitizeBridgeNotices: notice cap (${x}) reached; dropping entry`);
        return;
      }
      i.set(s, o);
    };
  for (let s of e) {
    if (typeof s !== "object" || s === null) continue;
    let {
      kind: kind,
      domain: domain
    } = s;
    if (typeof kind !== "string" || !/^[a-z0-9_]{1,64}$/i.test(kind)) continue;
    let kind_2 = kind.toLowerCase();
    if (domain === void 0) n(`${kind_2}:`, {
      kind: kind_2
    });else if (typeof domain === "string" && domain.length <= 253 && /^[a-z0-9.-]+$/i.test(domain)) {
      let domain_2 = domain.toLowerCase().replace(/\.$/, "");
      if (domain_2.length === 0) continue;
      n(`${kind_2}:${domain_2}`, {
        kind: kind_2,
        domain: domain_2
      });
    }
  }
  return i.size > 0 ? Array.from(i.values()) : void 0;
}
var v = e => new P8("Chrome extension disconnected mid-call", {
  routingAckReceived: e.routingAckReceived ?? !1
});
class Y2o {
  ws = null;
  connected = !1;
  authenticated = !1;
  connecting = !1;
  connectEpoch = 0;
  socketUserId;
  hostHasAnswered = !1;
  mismatchWaivedLogged = !1;
  reconnectTimer = null;
  handshakeTimer = null;
  reconnectAttempts = 0;
  pendingCalls = new Map();
  timedOutCalls = new Map();
  notificationHandler = null;
  context;
  permissionMode = "ask";
  allowedDomains;
  connectionStartTime = null;
  connectionEstablishedTime = null;
  selectedDeviceId;
  discoveryComplete = !1;
  multiBrowserPendingSelection = !1;
  discoveryPromise = null;
  pendingDiscovery = null;
  listExtensionsPromise = null;
  previousSelectedDeviceId;
  previousSelectedLeftAt;
  peerConnectedWaiters = [];
  pendingPairingRequestId;
  pairingInProgress = !1;
  persistedDeviceId;
  pendingSwitchResolve = null;
  pairingPromptAbort = null;
  pairingPromptTimeout = null;
  keepAliveInterval = null;
  lastPongReceived = 0;
  externalRelays = new _rr();
  constructor(e) {
    if (this.context = e, e.initialPermissionMode) this.permissionMode = e.initialPermissionMode;
  }
  identity(e = this.socketUserId) {
    let getCurrentUserId = this.context.getCurrentUserId;
    if (!getCurrentUserId || this.context.bridgeConfig?.devUserId) return "ok";
    let i;
    try {
      i = getCurrentUserId();
    } catch {
      i = null;
    }
    if (i === void 0) {
      if (!this.hostHasAnswered) return "ok";
      i = null;
    }
    if (this.hostHasAnswered = !0, i === null) return "signed_out";
    if (e === void 0 || i.toLowerCase() === e.toLowerCase()) return "ok";
    let n = !0;
    try {
      n = this.context.isAccountMismatchEnforced?.() !== !1;
    } catch {}
    if (n) return "other";
    if (!this.mismatchWaivedLogged) this.mismatchWaivedLogged = !0, this.context.logger.warn(`[${this.context.serverName}] Using a relay connection made for a different account from the one signed in: the host has switched off the check that refuses it`);
    return "ok";
  }
  canWrite() {
    return this.ws?.readyState === h.OPEN && this.identity() === "ok";
  }
  closedSince(e) {
    return this.context.getCurrentUserId !== void 0 && e !== this.connectEpoch;
  }
  sendFrame(e) {
    if (!this.ws || this.identity() !== "ok") return !1;
    return this.ws.send(e), !0;
  }
  closeForOtherAccount(phase) {
    let {
      logger: logger,
      serverName: serverName,
      trackEvent: trackEvent
    } = this.context;
    logger.info(`[${serverName}] Closing the bridge socket: it connected as a different account from the one signed in`), trackEvent?.("chrome_bridge_identity_mismatch", {
      phase: phase
    }), this.cleanup();
  }
  refusedForIdentity(e) {
    let t = this.identity(e);
    if (t === "ok") return !1;
    let {
      logger: logger_2,
      serverName: serverName_2,
      trackEvent: trackEvent_2
    } = this.context;
    if (logger_2.info(`[${serverName_2}] Not connecting: ${t === "other" ? "this connection was for a different account from the one signed in" : "nobody is signed in"}`), this.connecting = !1, this.handshakeTimer) clearTimeout(this.handshakeTimer), this.handshakeTimer = null;
    if (t === "other") trackEvent_2?.("chrome_bridge_identity_mismatch", {
      phase: "connect"
    }), this.scheduleReconnect();
    return !0;
  }
  reconcileIdentity() {
    if (this.identity() === "other") this.closeForOtherAccount("use");
  }
  async ensureConnected() {
    let {
      logger: logger_3,
      serverName: serverName_3
    } = this.context;
    logger_3.info(`[${serverName_3}] ensureConnected called, connected=${this.connected}, authenticated=${this.authenticated}, wsState=${this.ws?.readyState}`);
    let i = this.identity();
    if (i === "signed_out") return logger_3.info(`[${serverName_3}] Not connecting: nobody is signed in`), !1;
    if (i === "other") this.closeForOtherAccount("use");
    if (this.connected && this.authenticated && this.ws?.readyState === h.OPEN) return logger_3.info(`[${serverName_3}] Already connected and authenticated`), !0;
    if (!this.connecting && !this.reconnectTimer) logger_3.info(`[${serverName_3}] Not connecting, starting connection...`), await this.connect();else logger_3.info(`[${serverName_3}] Connect in progress or reconnect scheduled, waiting...`);
    return new Promise(n => {
      let s = null,
        o = setTimeout(() => {
          if (s) clearTimeout(s);
          logger_3.info(`[${serverName_3}] Connection timeout, connected=${this.connected}, authenticated=${this.authenticated}`), n(!1);
        }, 1e4),
        r = () => {
          if (this.connected && this.authenticated) logger_3.info(`[${serverName_3}] Connection successful`), clearTimeout(o), n(!0);else if (!this.connecting && !this.reconnectTimer) logger_3.info(`[${serverName_3}] No longer connecting, giving up`), clearTimeout(o), n(!1);else s = setTimeout(r, 200);
        };
      r();
    });
  }
  async callTool(e, args, i, n) {
    let {
      logger: logger_4,
      serverName: serverName_4,
      trackEvent: trackEvent_3
    } = this.context;
    if (!this.canWrite()) throw new jE(`[${serverName_4}] Bridge not connected`);
    let connectEpoch = this.connectEpoch;
    if (this.assertTargetAllowed(e, i, n), n?.requireDeviceId !== void 0) {
      if (await this.reselectIfBack(n.requireDeviceId), !this.canWrite() || this.closedSince(connectEpoch)) throw new jE(`[${serverName_4}] Bridge not connected`);
    }
    if (this.assertRequiredDevice(e, n), n?.targetDeviceId === void 0 && !this.selectedDeviceId && (!this.discoveryComplete || this.multiBrowserPendingSelection)) {
      if (this.discoveryPromise ??= this.discoverAndSelectExtension().finally(() => {
        this.discoveryPromise = null;
      }), await this.discoveryPromise, this.identity() !== "ok" || this.closedSince(connectEpoch) || !this.discoveryComplete && !this.selectedDeviceId) throw new jE(`[${serverName_4}] Bridge not connected`);
    }
    if (n?.targetDeviceId === void 0 && this.discoveryComplete && !this.selectedDeviceId && !this.pairingInProgress && !this.multiBrowserPendingSelection) throw new i1e(`[${serverName_4}] No Chrome extension connected after discovery`);
    let c = i?.sessionScope?.sessionId,
      a = i?.sessionScope?.userMessageUuid,
      l = this.context.browserActivityObserver?.onBeforeToolCall;
    if (l) {
      let selectedDeviceId = this.selectedDeviceId;
      try {
        await l({
          sessionId: c,
          toolName: e,
          args: args
        });
      } catch {
        logger_4.debug(`[${serverName_4}] browser activity observer threw`);
      }
      if (!this.canWrite() || this.closedSince(connectEpoch)) throw new jE(`[${serverName_4}] Bridge disconnected before tool call was sent`);
      if (selectedDeviceId !== void 0 && this.selectedDeviceId === void 0 && (n?.targetDeviceId ?? selectedDeviceId) === selectedDeviceId) throw new P8("Chrome extension disconnected mid-call");
    }
    this.assertRequiredDevice(e, n);
    let tool_use_id = crypto.randomUUID(),
      startTime = Date.now(),
      f = n?.timeoutMs ?? this.context.getToolCallTimeoutMs?.(e) ?? M3e,
      p = {
        type: "tool_call",
        tool_use_id: tool_use_id,
        client_type: this.context.clientTypeId,
        tool: e,
        args: args,
        supports_tool_result_notices: !0,
        supports_tool_result_error_code: !0
      },
      w = n?.targetDeviceId ?? this.selectedDeviceId;
    if (w) p.target_device_id = w;
    Object.assign(p, n8r({
      ...i,
      permissionMode: i?.permissionMode ?? this.permissionMode,
      allowedDomains: i?.allowedDomains ?? this.allowedDomains
    }));
    let y = JSON.stringify(p);
    return trackEvent_3?.("chrome_bridge_tool_call_started", {
      tool_name: `browser:${e}`,
      tool_use_id: tool_use_id,
      session_id: c,
      user_message_uuid: a,
      timeout_ms: f,
      transport: "bridge",
      request_bytes: Buffer.byteLength(y, "utf-8")
    }), new Promise((resolve, reject) => {
      let timer = this.createTimeoutTimer(tool_use_id, f);
      if (this.pendingCalls.set(tool_use_id, {
        resolve: resolve,
        reject: reject,
        timer: timer,
        onPermissionRequest: i?.onPermissionRequest,
        startTime: startTime,
        toolName: e,
        timeoutMs: f,
        sessionId: c,
        userMessageUuid: a,
        args: args,
        targetDeviceId: n?.targetDeviceId
      }), logger_4.debug(`[${serverName_4}] Sending tool_call: ${$K(e)} (${tool_use_id.slice(0, 8)})`), !this.sendFrame(y)) clearTimeout(timer), this.pendingCalls.delete(tool_use_id), reject(new jE(`[${serverName_4}] Bridge not connected`));
    });
  }
  sendExternalMessage(e, t, i) {
    let {
        serverName: serverName_5
      } = this.context,
      s = i?.requireDeviceId;
    return e8r({
      assertOpen: () => {
        if (!this.ws || this.ws.readyState !== h.OPEN) throw new jE(`[${serverName_5}] Bridge not connected`);
      },
      refuse: () => s !== void 0 && this.selectedDeviceId !== s ? {
        error: "no_target",
        reason: "its browser is no longer selected",
        detail: "not_sent"
      } : !this.selectedDeviceId ? {
        error: "no_target",
        reason: "no extension selected",
        detail: "no_selection"
      } : void 0,
      pushConfig: () => {
        this.pushExternalConfig();
      },
      prepare: ({
        requestId: requestId,
        extensionIds: extensionIds,
        payload: payload,
        timeoutMs: timeoutMs
      }) => JSON.stringify({
        type: "external_message",
        requestId: requestId,
        extensionIds: extensionIds,
        payload: payload,
        timeoutMs: timeoutMs,
        target_device_id: this.selectedDeviceId
      }),
      send: r => {
        if (!this.sendFrame(r)) throw new ckn("the bridge socket belongs to a different account, or nobody is signed in");
      }
    }, this.externalRelays, this.context, e, t, i);
  }
  pushExternalConfig(e) {
    if (this.selectedDeviceId === void 0) return !1;
    return this.pushExternalConfigToPeer(this.selectedDeviceId, e);
  }
  pushExternalConfigToPeer(target_device_id, t) {
    if (this.ws?.readyState !== h.OPEN) return !1;
    let i = yrr(this.context, t);
    if (!i) return !1;
    return this.sendFrame(JSON.stringify({
      type: "external_config",
      extensionIds: i.extensionIds,
      ...(i.hooks !== void 0 && {
        hooks: i.hooks
      }),
      target_device_id: target_device_id
    }));
  }
  async pushExternalConfigToAllPeers(e) {
    if (this.ws?.readyState !== h.OPEN) return 0;
    if (!yrr(this.context, e)) return 0;
    let t = await this.queryBridgeExtensions(),
      i = 0;
    for (let n of t) if (this.pushExternalConfigToPeer(n.deviceId, e)) i++;
    return i;
  }
  isConnected() {
    return this.socketUp() && this.identity() === "ok";
  }
  socketUp() {
    return this.connected && this.authenticated && this.ws?.readyState === h.OPEN;
  }
  disconnect() {
    this.cleanup();
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
  }
  async discoverAndSelectExtension() {
    let {
      logger: logger_5,
      serverName: serverName_6
    } = this.context;
    this.persistedDeviceId = this.context.getPersistedDeviceId?.();
    let connectEpoch_2 = this.connectEpoch,
      n = () => this.identity() !== "ok" || this.closedSince(connectEpoch_2),
      s = await this.queryBridgeExtensions();
    if (s.length === 0) {
      if (logger_5.info(`[${serverName_6}] No extensions connected, waiting up to ${RYt}ms for peer_connected`), await this.waitForPeerConnected(RYt)) s = await this.queryBridgeExtensions();
    }
    if (n()) return;
    if (this.context.getRequirePairedDevice?.()) {
      if (!this.persistedDeviceId) {
        logger_5.info(`[${serverName_6}] requirePairedDevice set but no persistedDeviceId; refusing to auto-select`), this.discoveryComplete = !0;
        return;
      }
      let persistedDeviceId = this.persistedDeviceId,
        a = s.find(item => item.deviceId === persistedDeviceId);
      if (!a) {
        if (logger_5.info(`[${serverName_6}] requirePairedDevice: persisted ${persistedDeviceId.slice(0, 8)} not connected (${s.length} other(s) visible); waiting`), await this.waitForPeerConnected(RYt)) s = await this.queryBridgeExtensions(), a = s.find(item => item.deviceId === persistedDeviceId);
        if (n()) return;
      }
      if (this.discoveryComplete = !0, a) this.selectExtension(a.deviceId);else logger_5.info(`[${serverName_6}] requirePairedDevice: persisted device never arrived; refusing to auto-select`);
      return;
    }
    let o = await this.awaitPreviousBrowser();
    if (n()) return;
    if (o) return this.selectedDeviceId ? void 0 : this.discoverAndSelectExtension();
    let r = s.length > 1 && !s.some(item => item.deviceId === this.persistedDeviceId) ? await RRt(this.context.getLocalDeviceIds) : void 0;
    if (n()) return;
    if (this.discoveryComplete = !0, this.selectedDeviceId) return;
    let d = L4t(s, this.persistedDeviceId, r);
    if (d.kind === "none") {
      logger_5.info(`[${serverName_6}] No extensions found after waiting`), this.multiBrowserPendingSelection = !1;
      return;
    }
    if (d.kind === "select") {
      let {
        extension: extension,
        reason: reason
      } = d;
      if (logger_5.info(`[${serverName_6}] Auto-connecting to ${A[reason]} extension: ${extension.name || extension.deviceId.slice(0, 8)}`), reason === "only" && !this.isLocalExtension(extension)) this.context.onRemoteExtensionWarning?.(extension);
      this.selectExtension(extension.deviceId), this.reportBrowserSelected(reason, s, r);
      return;
    }
    if (!this.multiBrowserPendingSelection) this.reportBrowserSelected("ask", s, r);
    if (this.context.askUserToolName) {
      this.multiBrowserPendingSelection = !0;
      return;
    }
    if (!this.broadcastPairingRequest()) return;
    this.pairingInProgress = !0, this.firePairingPrompt();
  }
  reportBrowserSelected(outcome, t, i) {
    this.context.trackEvent?.("chrome_bridge_browser_selected", {
      outcome: outcome,
      connected_count: t.length,
      local_count: i === void 0 ? null : t.filter(item => i.has(item.deviceId)).length
    });
  }
  queryBridgeExtensions() {
    if (this.listExtensionsPromise) return this.listExtensionsPromise;
    let e = new Promise(resolve_2 => {
      let timeout = setTimeout(() => {
        this.pendingDiscovery = null, resolve_2([]);
      }, t9r);
      if (this.pendingDiscovery = {
        resolve: resolve_2,
        timeout: timeout
      }, !this.sendFrame(JSON.stringify({
        type: "list_extensions"
      })) && this.identity() !== "ok") clearTimeout(timeout), this.pendingDiscovery = null, resolve_2([]);
    }).then(t => {
      let i = new Map();
      for (let n of t) {
        let s = i.get(n.deviceId);
        if (!s || n.connectedAt > s.connectedAt) i.set(n.deviceId, n);
      }
      return [...i.values()].map(B).filter(item => item !== void 0);
    });
    return this.listExtensionsPromise = e, e.finally(() => {
      if (this.listExtensionsPromise === e) this.listExtensionsPromise = null;
    }), e;
  }
  async reselectIfBack(e) {
    let t = () => this.selectedDeviceId === void 0 && this.previousSelectedDeviceId === e && !this.pendingSwitchResolve;
    if (!t()) return;
    let i = await this.queryBridgeExtensions();
    if (t() && i.some(item => item.deviceId === e)) this.selectExtension(e);
  }
  assertTargetAllowed(e, t, i) {
    let n = i?.targetDeviceId;
    if (n === void 0) return;
    let {
      serverName: serverName_7
    } = this.context;
    if (t?.onPermissionRequest) throw Error(`[${serverName_7}] ${$K(e)} not sent: a targeted call cannot raise a permission prompt`);
    if (this.context.getRequirePairedDevice?.() && n !== this.context.getPersistedDeviceId?.()) throw new a3e(`[${serverName_7}] ${$K(e)} not sent: only the paired browser may be used`);
  }
  assertRequiredDevice(e, t) {
    let i = t?.requireDeviceId;
    if (i !== void 0 && this.selectedDeviceId !== i) throw new a3e(`[${this.context.serverName}] ${$K(e)} not sent: its browser is no longer selected`);
  }
  getSelectedDeviceId() {
    if (this.identity() !== "ok") return;
    return this.selectedDeviceId ?? this.context.getPersistedDeviceId?.();
  }
  hasActiveSelection() {
    return this.selectedDeviceId !== void 0 && this.identity() === "ok";
  }
  async awaitPreviousBrowser() {
    let {
        logger: logger_6,
        serverName: serverName_8
      } = this.context,
      i = (this.previousSelectedLeftAt ?? -1 / 0) + Rfi - Date.now();
    if (!this.previousSelectedDeviceId || i <= 0 || this.pendingSwitchResolve || this.context.getRequirePairedDevice?.()) return !1;
    if (logger_6.info(`[${serverName_8}] Waiting up to ${i}ms for the previously selected extension to return`), await this.waitForPeerConnected(i), !this.connected) throw new jE(`[${serverName_8}] Bridge disconnected while waiting for the selected browser`);
    return !0;
  }
  async peekTargetBrowser() {
    if (this.identity() !== "ok") return;
    let socketUserId = this.socketUserId,
      connectEpoch_3 = this.connectEpoch;
    if (this.selectedDeviceId !== void 0) return this.selectedDeviceId;
    let i = this.context.getPersistedDeviceId?.(),
      n = await this.queryBridgeExtensions();
    if (n.length === 0 && (await this.waitForPeerConnected(RYt))) n = await this.queryBridgeExtensions();
    if (await this.awaitPreviousBrowser()) return this.peekTargetBrowser();
    let s = n.length > 1 && !n.some(item => item.deviceId === i) ? await RRt(this.context.getLocalDeviceIds) : void 0;
    if (this.identity(socketUserId) !== "ok" || this.closedSince(connectEpoch_3)) return;
    if (this.selectedDeviceId !== void 0) return this.selectedDeviceId;
    let o = L4t(n, i, s);
    return o.kind === "select" && (o.reason === "persisted" || !this.context.getRequirePairedDevice?.()) ? o.extension.deviceId : void 0;
  }
  clearSelection() {
    this.selectedDeviceId = void 0, this.previousSelectedDeviceId = void 0, this.previousSelectedLeftAt = void 0, this.discoveryComplete = !1, this.multiBrowserPendingSelection = !1, this.pairingInProgress = !1, this.abortPairingPrompt();
  }
  selectExtension(e) {
    let {
      logger: logger_7,
      serverName: serverName_9
    } = this.context;
    this.selectedDeviceId = e, this.previousSelectedDeviceId = void 0, this.previousSelectedLeftAt = void 0, this.multiBrowserPendingSelection = !1, logger_7.info(`[${serverName_9}] Selected Chrome extension: ${e.slice(0, 8)}...`), this.pushExternalConfig();
  }
  async clearSelectionIfGone(e) {
    let {
        logger: logger_8,
        serverName: serverName_10
      } = this.context,
      n = await this.queryBridgeExtensions();
    if (this.selectedDeviceId !== e) return;
    if (n.some(item => item.deviceId === e)) return;
    logger_8.info(`[${serverName_10}] Selected extension ${e.slice(0, 8)} absent from bridge roster after error; clearing selection`), this.selectedDeviceId = void 0, this.discoveryComplete = !1;
  }
  async rejectTargetedCallsIfGone() {
    let e = i => i.targetDeviceId !== void 0;
    if (![...this.pendingCalls.values()].some(e)) return;
    let t = await this.queryBridgeExtensions();
    this.rejectPendingCalls(v, i => e(i) && !t.some(item => item.deviceId === i.targetDeviceId));
  }
  async listConnectedExtensions() {
    if (!(await this.ensureConnected())) return [];
    let socketUserId_2 = this.socketUserId,
      connectEpoch_4 = this.connectEpoch,
      i = await this.queryBridgeExtensions();
    if (this.identity() !== "ok") return [];
    let n = i.length > 1 ? await RRt(this.context.getLocalDeviceIds) : void 0;
    if (this.identity(socketUserId_2) !== "ok" || this.closedSince(connectEpoch_4)) return [];
    return i.map(item => ({
      ...item,
      isLocal: this.isLocalExtension(item),
      ...(n?.has(item.deviceId) && {
        onThisComputer: !0
      })
    }));
  }
  connectedUserId() {
    return this.context.bridgeConfig?.devUserId ? void 0 : this.socketUserId;
  }
  async connectedDeviceIds() {
    if (this.ws?.readyState !== h.OPEN) return [];
    let e = await this.queryBridgeExtensions();
    if (this.identity() !== "ok") return [];
    let t = e.map(item => item.deviceId);
    return this.context.getRequirePairedDevice?.() ? t.filter(item => item === this.context.getPersistedDeviceId?.()) : t;
  }
  selectExtensionById(deviceId, name) {
    if (this.discoveryComplete = !0, this.pairingInProgress = !1, this.pendingPairingRequestId = void 0, this.selectExtension(deviceId), this.context.onExtensionPaired?.(deviceId, name), this.pendingSwitchResolve) this.pendingSwitchResolve({
      deviceId: deviceId,
      name: name
    });
    this.abortPairingPrompt();
  }
  firePairingPrompt() {
    if (this.abortPairingPrompt(), !this.context.onPairingPrompted) return;
    let abortController = new AbortController();
    this.pairingPromptAbort = abortController, this.pairingPromptTimeout = setTimeout(() => this.abortPairingPrompt(), 120000), this.context.onPairingPrompted(abortController.signal);
  }
  abortPairingPrompt() {
    if (this.pairingPromptTimeout) clearTimeout(this.pairingPromptTimeout), this.pairingPromptTimeout = null;
    if (this.pairingPromptAbort) this.pairingPromptAbort.abort(), this.pairingPromptAbort = null;
  }
  isLocalExtension(e) {
    if (!e.osPlatform) return !1;
    return e.osPlatform === Z5r(this.context.getHostPlatform?.() ?? "win32");
  }
  waitForPeerConnected(e) {
    return new Promise(t => {
      let i = setTimeout(() => {
          this.peerConnectedWaiters = this.peerConnectedWaiters.filter(item => item !== n), t(!1);
        }, e),
        n = s => {
          clearTimeout(i), t(s);
        };
      this.peerConnectedWaiters.push(n);
    });
  }
  broadcastPairingRequest() {
    if (this.identity() !== "ok") return !1;
    let request_id = crypto.randomUUID();
    return this.pendingPairingRequestId = request_id, this.sendFrame(JSON.stringify({
      type: "pairing_request",
      request_id: request_id,
      client_type: this.context.clientTypeId
    })), !0;
  }
  async switchBrowser() {
    let e = await this.queryBridgeExtensions(),
      t = this.selectedDeviceId ?? this.previousSelectedDeviceId;
    if (e.length === 0 || e.length === 1 && (!t || e[0].deviceId === t)) return "no_other_browsers";
    this.previousSelectedDeviceId = this.selectedDeviceId, this.selectedDeviceId = void 0, this.discoveryComplete = !1, this.pairingInProgress = !1;
    let request_id_2 = crypto.randomUUID();
    if (this.pendingPairingRequestId = request_id_2, !this.canWrite()) return null;
    if (this.sendFrame(JSON.stringify({
      type: "pairing_request",
      request_id: request_id_2,
      client_type: this.context.clientTypeId
    })), this.firePairingPrompt(), this.pendingSwitchResolve) this.pendingSwitchResolve(null);
    return new Promise(n => {
      let s = setTimeout(() => {
        if (this.pendingPairingRequestId === request_id_2) this.pendingPairingRequestId = void 0;
        this.pendingSwitchResolve = null, this.abortPairingPrompt(), n(null);
      }, 120000);
      this.pendingSwitchResolve = o => {
        clearTimeout(s), this.pendingSwitchResolve = null, n(o);
      };
    });
  }
  async connect() {
    let {
      logger: logger_9,
      serverName: serverName_11,
      bridgeConfig: bridgeConfig,
      trackEvent: trackEvent_4
    } = this.context;
    if (!bridgeConfig) {
      logger_9.error(`[${serverName_11}] No bridge config provided`);
      return;
    }
    if (this.connecting) return;
    this.connecting = !0;
    let connectEpoch_5 = this.connectEpoch,
      o = () => connectEpoch_5 !== this.connectEpoch;
    this.authenticated = !1, this.connectionStartTime = Date.now(), this.closeSocket(), this.handshakeTimer = setTimeout(() => {
      if (this.handshakeTimer = null, !this.connecting) return;
      let ws_state = this.ws?.readyState;
      if (logger_9.warn(`[${serverName_11}] Bridge connect stuck after ${C}ms (ws_state=${ws_state})`), trackEvent_4?.("chrome_bridge_handshake_timeout", {
        duration_ms: Date.now() - (this.connectionStartTime ?? 0),
        ws_state: ws_state
      }), ws_state === void 0) return;
      this.connecting = !1, this.closeSocket(), this.scheduleReconnect();
    }, C);
    let r, d;
    if (bridgeConfig.devUserId) r = bridgeConfig.devUserId, logger_9.debug(`[${serverName_11}] Using dev user ID for bridge connection`);else {
      logger_9.debug(`[${serverName_11}] Fetching user ID for bridge connection`);
      let error_detail, l;
      if (bridgeConfig.getUserIdResult) {
        let u = await bridgeConfig.getUserIdResult();
        if (o()) return;
        if (u.ok) l = u.userId;else error_detail = u.error;
      } else if (l = await bridgeConfig.getUserId(), o()) return;
      if (!l) {
        let duration_ms = Date.now() - this.connectionStartTime;
        logger_9.error(`[${serverName_11}] No user ID available after ${duration_ms}ms`), trackEvent_4?.("chrome_bridge_connection_failed", {
          duration_ms: duration_ms,
          error_type: "no_user_id",
          error_detail: error_detail,
          reconnect_attempt: this.reconnectAttempts
        }), this.connecting = !1, this.scheduleReconnect();
        return;
      }
      if (r = l, logger_9.debug(`[${serverName_11}] Fetching OAuth token for bridge connection`), d = await bridgeConfig.getOAuthToken(), o()) return;
      if (!d) {
        let duration_ms_2 = Date.now() - this.connectionStartTime;
        logger_9.error(`[${serverName_11}] No OAuth token available after ${duration_ms_2}ms`), trackEvent_4?.("chrome_bridge_connection_failed", {
          duration_ms: duration_ms_2,
          error_type: "no_oauth_token",
          reconnect_attempt: this.reconnectAttempts
        }), this.connecting = !1, this.scheduleReconnect();
        return;
      }
    }
    if (this.refusedForIdentity(r)) return;
    let bridge_url = `${bridgeConfig.url}/chrome/${r}`;
    logger_9.info(`[${serverName_11}] Connecting to bridge: ${bridge_url}`), trackEvent_4?.("chrome_bridge_connection_started", {
      bridge_url: bridge_url
    });
    try {
      if (bridgeConfig.createWebSocket) {
        let a = await bridgeConfig.createWebSocket(bridge_url);
        if (o()) {
          a.on("error", () => {}), a.close();
          return;
        }
        this.ws = a;
      } else {
        let tls = (await bridgeConfig.getWsOptions?.()) ?? bridgeConfig.wsOptions;
        if (o()) return;
        this.ws = D(new h(bridge_url, tls ? {
          ...tls,
          tls: tls
        } : void 0));
      }
    } catch (a) {
      if (o()) return;
      let duration_ms_3 = Date.now() - this.connectionStartTime;
      logger_9.error(`[${serverName_11}] Failed to create WebSocket after ${duration_ms_3}ms:`, a), trackEvent_4?.("chrome_bridge_connection_failed", {
        duration_ms: duration_ms_3,
        error_type: "websocket_error",
        error_code: a?.code,
        reconnect_attempt: this.reconnectAttempts
      }), this.connecting = !1, this.scheduleReconnect();
      return;
    }
    this.socketUserId = r, this.ws.on("open", () => {
      if (this.refusedForIdentity(r)) {
        this.closeSocket();
        return;
      }
      logger_9.info(`[${serverName_11}] WebSocket connected, sending connect message`);
      let a = {
        type: "connect",
        client_type: this.context.clientTypeId
      };
      if (bridgeConfig.devUserId) a.dev_user_id = bridgeConfig.devUserId;else a.oauth_token = d;
      this.ws?.send(JSON.stringify(a));
    }), this.ws.on("message", a => {
      try {
        let l = a.toString(),
          u = JSON.parse(l);
        if (N.has(u.type)) logger_9.debug(`[${serverName_11}] Bridge received: ${String(u.type)} (ok=${String(u.ok)})`);else if (logger_9.isDebugEnabled?.() ?? !0) logger_9.debug(`[${serverName_11}] Bridge received: ${JSON.stringify(u)}`);
        this.handleMessage(u, Buffer.byteLength(l, "utf-8"));
      } catch (l) {
        logger_9.error(`[${serverName_11}] Failed to parse bridge message:`, l);
      }
    }), this.ws.on("close", close_code => {
      let duration_since_connect_ms = this.connectionEstablishedTime ? Date.now() - this.connectionEstablishedTime : 0;
      if (logger_9.info(`[${serverName_11}] Bridge connection closed (code: ${close_code}, duration: ${duration_since_connect_ms}ms)`), trackEvent_4?.("chrome_bridge_disconnected", {
        close_code: close_code,
        duration_since_connect_ms: duration_since_connect_ms,
        reconnect_attempt: this.reconnectAttempts + 1
      }), this.connected = !1, this.authenticated = !1, this.connecting = !1, this.socketUserId = void 0, this.connectionEstablishedTime = null, this.selectedDeviceId) this.previousSelectedLeftAt = Date.now();
      this.losePendingCalls("Bridge connection closed mid-call"), this.scheduleReconnect();
    }), this.ws.on("error", a => {
      let duration_ms_4 = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
      logger_9.error(`[${serverName_11}] Bridge WebSocket error after ${duration_ms_4}ms: ${a.message}`), trackEvent_4?.("chrome_bridge_connection_failed", {
        duration_ms: duration_ms_4,
        error_type: "websocket_error",
        error_code: a.code,
        reconnect_attempt: this.reconnectAttempts
      }), this.connected = !1, this.authenticated = !1, this.connecting = !1, this.losePendingCalls(`Bridge connection error: ${a.message}`);
    });
  }
  handleMessage(e, t) {
    let {
        logger: logger_10,
        serverName: serverName_12,
        trackEvent: trackEvent_5
      } = this.context,
      o = this.identity();
    if (o === "other") {
      this.closeForOtherAccount("use");
      return;
    }
    if (o === "signed_out" && !M.has(String(e.type))) return;
    switch (e.type) {
      case "paired":
        {
          let duration_ms_5 = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
          if (logger_10.info(`[${serverName_12}] Paired with Chrome extension (duration: ${duration_ms_5}ms)`), this.connected = !0, this.authenticated = !0, this.connecting = !1, this.reconnectAttempts = 0, this.connectionEstablishedTime = Date.now(), this.startKeepAlive(), trackEvent_5?.("chrome_bridge_connection_succeeded", {
            duration_ms: duration_ms_5,
            status: "paired"
          }), this.pushExternalConfigToAllPeers(), this.previousSelectedDeviceId && !this.context.getRequirePairedDevice?.()) this.reselectIfBack(this.previousSelectedDeviceId);
          this.context.onPeerRosterChanged?.();
          break;
        }
      case "waiting":
        {
          let duration_ms_6 = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
          logger_10.info(`[${serverName_12}] Waiting for Chrome extension to connect (duration: ${duration_ms_6}ms)`), this.connected = !0, this.authenticated = !0, this.connecting = !1, this.reconnectAttempts = 0, this.connectionEstablishedTime = Date.now(), this.startKeepAlive(), trackEvent_5?.("chrome_bridge_connection_succeeded", {
            duration_ms: duration_ms_6,
            status: "waiting"
          });
          break;
        }
      case "peer_connected":
        if (logger_10.info(`[${serverName_12}] Chrome extension connected to bridge`), trackEvent_5?.("chrome_bridge_peer_connected", null), !this.selectedDeviceId) this.discoveryComplete = !1;
        if (this.previousSelectedDeviceId && e.deviceId === this.previousSelectedDeviceId && !this.pendingSwitchResolve) logger_10.info(`[${serverName_12}] Previously selected extension reconnected, auto-reselecting`), this.selectExtension(this.previousSelectedDeviceId), this.previousSelectedDeviceId = void 0;
        if (this.peerConnectedWaiters.length > 0) {
          let peerConnectedWaiters = this.peerConnectedWaiters;
          this.peerConnectedWaiters = [];
          for (let d of peerConnectedWaiters) d(!0);
        }
        if (typeof e.deviceId === "string" && dkn.test(e.deviceId)) this.pushExternalConfigToPeer(e.deviceId);else this.pushExternalConfig();
        this.context.onPeerRosterChanged?.();
        break;
      case "peer_disconnected":
        {
          let deviceId_2 = e.deviceId;
          if (logger_10.info(`[${serverName_12}] Chrome extension disconnected from bridge (deviceId=${deviceId_2 ?? "none"}, selected=${this.selectedDeviceId ?? "none"})`), trackEvent_5?.("chrome_bridge_peer_disconnected", {
            disconnected_device_id: deviceId_2 ?? null,
            selected_device_id: this.selectedDeviceId ?? null,
            had_match: deviceId_2 !== null && deviceId_2 !== void 0 && deviceId_2 === this.selectedDeviceId,
            pending_calls: this.pendingCalls.size
          }), this.context.onPeerDisconnected?.({
            deviceId: deviceId_2,
            wasSelected: deviceId_2 !== null && deviceId_2 !== void 0 && deviceId_2 === this.selectedDeviceId
          }), e.deviceId && e.deviceId === this.selectedDeviceId) logger_10.info(`[${serverName_12}] Selected extension disconnected, clearing selection`), this.previousSelectedDeviceId = this.selectedDeviceId, this.previousSelectedLeftAt = Date.now(), this.selectedDeviceId = void 0, this.discoveryComplete = !1, this.rejectPendingCalls(v, d => d.targetDeviceId === void 0);else if (!this.selectedDeviceId && this.multiBrowserPendingSelection) this.discoveryComplete = !1, this.multiBrowserPendingSelection = !1;
          this.rejectPendingCalls(v, d => d.targetDeviceId !== void 0 && d.targetDeviceId === deviceId_2), this.context.onPeerRosterChanged?.();
          break;
        }
      case "routing_ack":
        {
          trackEvent_5?.("chrome_bridge_routing_ack", {
            tool_use_id: e.tool_use_id ?? null,
            routed_to: e.routed_to ?? null,
            target_connected_at: e.target_connected_at ?? null,
            target_pong_age_ms: e.target_pong_age_ms ?? null,
            extension_sockets: e.extension_sockets ?? null,
            mcp_sockets: e.mcp_sockets ?? null
          });
          let r = this.pendingCalls.get(e.tool_use_id ?? "");
          if (r) r.routingAckReceived = !0, r.routingAckPongAgeMs = e.target_pong_age_ms ?? null;
          break;
        }
      case "extensions_list":
        if (this.pendingDiscovery) clearTimeout(this.pendingDiscovery.timeout), this.pendingDiscovery.resolve(e.extensions ?? []), this.pendingDiscovery = null;
        break;
      case "pairing_response":
        {
          let request_id_3 = e.request_id;
          if (this.pendingPairingRequestId !== request_id_3) break;
          if (e.dismissed === !0) {
            logger_10.info(`[${serverName_12}] Pairing prompt dismissed in extension`), this.abortPairingPrompt();
            break;
          }
          let deviceId_3 = typeof e.device_id === "string" && dkn.test(e.device_id) ? e.device_id : void 0,
            name_2 = b(e.name, 50);
          if (deviceId_3 && name_2) {
            if (this.pendingPairingRequestId = void 0, this.pairingInProgress = !1, this.selectExtension(deviceId_3), this.context.onExtensionPaired?.(deviceId_3, name_2), this.abortPairingPrompt(), logger_10.info(`[${serverName_12}] Paired with "${name_2}" (${deviceId_3.slice(0, 8)})`), this.pendingSwitchResolve) this.pendingSwitchResolve({
              deviceId: deviceId_3,
              name: name_2
            }), this.pendingSwitchResolve = null;
          }
          break;
        }
      case "ping":
        this.ws?.send(JSON.stringify({
          type: "pong"
        }));
        break;
      case "pong":
        this.lastPongReceived = Date.now();
        break;
      case "tool_result":
        this.handleToolResult(e, t);
        break;
      case "external_message_result":
        {
          let r = typeof e.requestId === "string" ? e.requestId : void 0;
          if (!r || !this.externalRelays.settle(r, e)) logger_10.debug(`[${serverName_12}] external_message_result for unknown request: ${r?.slice(0, 8) ?? "none"}`);
          break;
        }
      case "external_message":
      case "external_config":
        break;
      case "permission_request":
        this.handlePermissionRequest(e).catch(r => {
          logger_10.error(`[${serverName_12}] Error handling permission_request:`, r);
        });
        break;
      case "notification":
        if (typeof e.method !== "string") logger_10.warn(`[${serverName_12}] Dropped a notification whose method is not a string`);else this.notificationHandler?.({
          method: e.method,
          params: e.params
        });
        break;
      case "error":
        if (logger_10.warn(`[${serverName_12}] Bridge error: ${e.error}`), this.selectedDeviceId) this.clearSelectionIfGone(this.selectedDeviceId);
        this.rejectTargetedCallsIfGone();
        break;
      default:
        logger_10.warn(`[${serverName_12}] Unrecognized bridge message type: ${e.type}`);
    }
  }
  async handlePermissionRequest(e) {
    let {
        logger: logger_11,
        serverName: serverName_13
      } = this.context,
      {
        tool_use_id: n,
        request_id: s
      } = e;
    if (typeof n !== "string" || typeof s !== "string") {
      logger_11.warn(`[${serverName_13}] permission_request missing tool_use_id or request_id`);
      return;
    }
    let o = this.pendingCalls.get(n);
    if (!o?.onPermissionRequest) {
      logger_11.debug(`[${serverName_13}] Ignoring permission_request for unknown tool_use_id ${n.slice(0, 8)} (not our call)`);
      return;
    }
    if (this.identity() !== "ok") {
      this.endUnanswerable(n, o);
      return;
    }
    let r = t8r(e, {
      toolUseId: n,
      requestId: s
    });
    clearTimeout(o.timer), o.permissionPaused = !0;
    let d;
    try {
      let a = await o.onPermissionRequest(r);
      d = this.sendPermissionResponse(s, a);
    } catch (a) {
      logger_11.error(`[${serverName_13}] Error handling permission request:`, a), d = this.sendPermissionResponse(s, !1);
    }
    if (!d && this.identity() !== "ok") {
      this.endUnanswerable(n, o);
      return;
    }
    let c = this.pendingCalls.get(n);
    if (c) c.timer = this.createTimeoutTimer(n, c.timeoutMs);
  }
  endUnanswerable(e, t) {
    if (!this.pendingCalls.delete(e)) return;
    clearTimeout(t.timer), t.reject(new s1e(`[${this.context.serverName}] ${t.toolName} was stopped: it needed a permission, and no answer could be sent because nobody is signed in, or a different account is`));
  }
  sendPermissionResponse(request_id_4, allowed) {
    if (this.ws?.readyState !== h.OPEN) return !1;
    let i = {
      type: "permission_response",
      request_id: request_id_4,
      allowed: allowed
    };
    if (this.selectedDeviceId) i.target_device_id = this.selectedDeviceId;
    return this.sendFrame(JSON.stringify(i));
  }
  handleToolResult(e, response_bytes) {
    let {
        logger: logger_12,
        serverName: serverName_14,
        trackEvent: trackEvent_6
      } = this.context,
      tool_use_id_2 = e.tool_use_id;
    if (typeof tool_use_id_2 !== "string") {
      logger_12.warn(`[${serverName_14}] Received tool_result without tool_use_id`);
      return;
    }
    let r = this.pendingCalls.get(tool_use_id_2);
    if (!r) {
      logger_12.debug(`[${serverName_14}] Received tool_result for unknown call: ${tool_use_id_2.slice(0, 8)}`);
      let u = this.timedOutCalls.get(tool_use_id_2);
      if (trackEvent_6?.("chrome_bridge_tool_call_late_result", {
        tool_use_id: tool_use_id_2,
        gap_from_timeout_ms: u ? Date.now() - u : null,
        reason: u ? "post_timeout" : "unknown",
        is_error: typeof e.is_error === "boolean" ? e.is_error : null
      }), u) this.timedOutCalls.delete(tool_use_id_2);
      return;
    }
    let duration_ms_7 = Date.now() - r.startTime,
      c = this.normalizeBridgeResponse(e),
      a = Boolean(e.is_error) || "error" in c;
    clearTimeout(r.timer), this.pendingCalls.delete(tool_use_id_2);
    let l = this.context.browserActivityObserver?.onToolResult;
    if (l) try {
      l({
        sessionId: r.sessionId,
        toolName: r.toolName,
        args: r.args,
        ok: !a,
        resultContent: a ? void 0 : c.result?.content
      });
    } catch {
      logger_12.debug(`[${serverName_14}] browser activity observer threw`);
    }
    if (a) {
      let u = M4t(c.error).slice(0, 200);
      logger_12.warn(`[${serverName_14}] Tool call error: ${r.toolName} (${tool_use_id_2.slice(0, 8)}) after ${duration_ms_7}ms`);
      let error_type = sui(r.toolName, u, e.error_code);
      if (trackEvent_6?.("chrome_bridge_tool_call_error", {
        tool_name: `browser:${r.toolName}`,
        tool_use_id: tool_use_id_2,
        duration_ms: duration_ms_7,
        error_type: error_type,
        session_id: r.sessionId,
        user_message_uuid: r.userMessageUuid,
        transport: "bridge"
      }), r.targetDeviceId === void 0 && !this.selectedDeviceId && !this.pairingInProgress) {
        this.discoveryComplete = !1, r.reject(new P8(`[${serverName_14}] Extension disconnected during tool call: ${r.toolName}`, {
          routingAckReceived: r.routingAckReceived ?? !1
        }));
        return;
      }
    } else logger_12.debug(`[${serverName_14}] Tool call completed: ${r.toolName} (${tool_use_id_2.slice(0, 8)}) in ${duration_ms_7}ms`), trackEvent_6?.("chrome_bridge_tool_call_completed", {
      tool_name: `browser:${r.toolName}`,
      tool_use_id: tool_use_id_2,
      duration_ms: duration_ms_7,
      session_id: r.sessionId,
      user_message_uuid: r.userMessageUuid,
      transport: "bridge",
      response_bytes: response_bytes
    });
    r.resolve(c);
  }
  normalizeBridgeResponse(e) {
    let {
        notices: notices,
        error_code: error_code,
        ...n
      } = e,
      notices_2 = q(notices, r => this.context.logger.warn(`[${this.context.serverName}] ${r}`)),
      o = notices_2 ? {
        notices: notices_2
      } : void 0;
    if (n.result || n.error) return o ? {
      ...n,
      ...o
    } : n;
    if (n.content) {
      if (n.is_error) return {
        error: {
          content: n.content
        },
        ...o
      };
      return {
        result: {
          content: n.content
        },
        ...o
      };
    }
    return o ? {
      ...n,
      ...o
    } : n;
  }
  getTimeoutDiagnostics() {
    let free_mem_pct = -1;
    try {
      let i = process.getSystemMemoryInfo(),
        n = i.free + (i.fileBacked ?? 0);
      free_mem_pct = i.total > 0 ? Math.round(n / i.total * 1000) / 10 : -1;
    } catch {}
    let pong_age_ms = this.lastPongReceived > 0 ? Date.now() - this.lastPongReceived : void 0;
    return {
      free_mem_pct: free_mem_pct,
      pong_age_ms: pong_age_ms
    };
  }
  createTimeoutTimer(tool_use_id_3, timeout_ms) {
    let {
      logger: logger_13,
      serverName: serverName_15,
      trackEvent: trackEvent_7
    } = this.context;
    return setTimeout(() => {
      let o = this.pendingCalls.get(tool_use_id_3);
      if (!o) return;
      if (this.timedOutCalls.set(tool_use_id_3, Date.now()), this.timedOutCalls.size > 200) {
        let a = this.timedOutCalls.keys().next().value;
        if (a) this.timedOutCalls.delete(a);
      }
      this.pendingCalls.delete(tool_use_id_3);
      let duration_ms_8 = Date.now() - o.startTime,
        d = this.getTimeoutDiagnostics(),
        c = o.routingAckReceived ?? !1;
      if (logger_13.warn(`[${serverName_15}] Tool call timeout: ${o.toolName} (${tool_use_id_3.slice(0, 8)}) after ${duration_ms_8}ms, pending calls: ${this.pendingCalls.size}`), trackEvent_7?.("chrome_bridge_tool_call_timeout", {
        tool_name: `browser:${o.toolName}`,
        tool_use_id: tool_use_id_3,
        duration_ms: duration_ms_8,
        timeout_ms: timeout_ms,
        session_id: o.sessionId,
        user_message_uuid: o.userMessageUuid,
        transport: "bridge",
        routing_ack_received: c,
        routing_ack_pong_age_ms: o.routingAckPongAgeMs ?? null,
        permission_paused: o.permissionPaused ?? !1,
        ...d
      }), this.socketUp()) o.reject(new a1e(`[${serverName_15}] Tool call timed out: ${o.toolName}`, {
        routingAckReceived: c
      }));else o.reject(new s1e(`[${serverName_15}] Tool call timed out with bridge disconnected: ${o.toolName}`));
    }, timeout_ms);
  }
  scheduleReconnect() {
    let {
      logger: logger_14,
      serverName: serverName_16,
      trackEvent: trackEvent_8
    } = this.context;
    if (this.reconnectTimer) return;
    if (this.identity() === "signed_out") return;
    if (this.reconnectAttempts++, this.reconnectAttempts > 100) {
      logger_14.warn(`[${serverName_16}] Giving up bridge reconnection after 100 attempts`), trackEvent_8?.("chrome_bridge_reconnect_exhausted", {
        total_attempts: 100
      }), this.reconnectAttempts = 0;
      return;
    }
    let n = Math.min(2000 * Math.pow(1.5, this.reconnectAttempts - 1), 30000);
    if (this.reconnectAttempts <= 10 || this.reconnectAttempts % 10 === 0) logger_14.info(`[${serverName_16}] Bridge reconnecting in ${Math.round(n)}ms (attempt ${this.reconnectAttempts})`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, n);
  }
  startKeepAlive() {
    this.stopKeepAlive(), this.lastPongReceived = Date.now();
    let {
      logger: logger_15,
      serverName: serverName_17
    } = this.context;
    this.keepAliveInterval = setInterval(() => {
      let i = this.identity();
      if (i === "other") {
        this.closeForOtherAccount("use");
        return;
      }
      if (i === "signed_out" && this.context.isSignOutSettled?.()) {
        this.cleanup();
        return;
      }
      if (this.ws?.readyState === h.OPEN) this.ws.send(JSON.stringify({
        type: "ping"
      }));
      if (this.lastPongReceived > 0 && Date.now() - this.lastPongReceived > P) logger_15.warn(`[${serverName_17}] No pong received in ${P}ms, closing dead connection`), this.losePendingCalls("Bridge keepalive timeout \u2014 connection dead"), this.closeSocket(), this.scheduleReconnect();
    }, E);
  }
  stopKeepAlive() {
    if (this.keepAliveInterval) clearInterval(this.keepAliveInterval), this.keepAliveInterval = null;
    this.lastPongReceived = 0;
  }
  closeSocket() {
    if (this.socketUserId = void 0, this.stopKeepAlive(), this.handshakeTimer) clearTimeout(this.handshakeTimer), this.handshakeTimer = null;
    if (this.ws) this.ws.removeAllListeners(), this.ws.on("error", () => {}), this.ws.close(), this.ws = null;
    if (this.connected = !1, this.authenticated = !1, this.selectedDeviceId) this.previousSelectedDeviceId = this.selectedDeviceId, this.previousSelectedLeftAt ??= Date.now();
    if (this.selectedDeviceId = void 0, this.discoveryComplete = !1, this.multiBrowserPendingSelection = !1, this.pendingPairingRequestId = void 0, this.pairingInProgress = !1, this.abortPairingPrompt(), this.pendingSwitchResolve) this.pendingSwitchResolve(null), this.pendingSwitchResolve = null;
    if (this.pendingDiscovery) clearTimeout(this.pendingDiscovery.timeout), this.pendingDiscovery.resolve([]), this.pendingDiscovery = null;
    if (this.peerConnectedWaiters.length > 0) {
      let peerConnectedWaiters_2 = this.peerConnectedWaiters;
      this.peerConnectedWaiters = [];
      for (let t of peerConnectedWaiters_2) t(!1);
    }
    this.context.onPeerRosterChanged?.();
  }
  rejectPendingCalls(e, t = () => !0) {
    for (let [i, n] of this.pendingCalls) if (t(n)) clearTimeout(n.timer), this.pendingCalls.delete(i), n.reject(e(n));
  }
  losePendingCalls(e) {
    for (let [tool_use_id_4, i] of this.pendingCalls) this.context.trackEvent?.("chrome_bridge_tool_call_lost", {
      tool_name: `browser:${i.toolName}`,
      tool_use_id: tool_use_id_4,
      duration_ms: Date.now() - i.startTime,
      session_id: i.sessionId,
      user_message_uuid: i.userMessageUuid,
      transport: "bridge",
      routing_ack_received: i.routingAckReceived ?? !1
    });
    this.rejectPendingCalls(() => new s1e(e));
  }
  drainExternalRelays() {
    this.externalRelays.drain("send_failed");
  }
  cleanup() {
    if (this.connectEpoch++, this.connecting = !1, this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.losePendingCalls("Bridge client disconnected"), this.drainExternalRelays(), this.closeSocket(), this.reconnectAttempts = 0;
  }
}
function H_n(e) {
  return new Y2o(e);
}
var O = 300,
  U = 1000,
  W = 30000,
  F = 10,
  L = {
    steps: [[2000, 30]],
    thenMs: 1e4
  },
  J = {
    steps: [[2000, 30]],
    thenMs: 60000
  },
  j = {
    steps: [[3000, 100]],
    thenMs: 1e4
  },
  H = (e, t, i) => Math.min(e * 1.5 ** (t - 1), i);
function _({
  steps: steps,
  thenMs: thenMs
}, i) {
  let n = 0;
  for (let [s, o] of steps) if (n += o, i <= n) return s;
  return thenMs;
}
function G(e, t) {
  switch (e) {
    case "transport":
      return H(U, t, W);
    case "mismatch":
      return _(j, t);
    case "not_ready":
      return _(L, t);
    case "token":
      return _(J, t);
  }
}
var z = {
    peer_not_ready: "not_ready",
    awaits_token: "token",
    peer_may_move: "mismatch",
    retry: "transport"
  },
  S = cadence => ({
    attempts: 0,
    timer: null,
    wanted: !1,
    cadence: cadence
  });
function T(e) {
  return e.replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0085/g, "\\u0085");
}
function K(availableTabs, t) {
  let i = o => T(JSON.stringify(o)),
    n = availableTabs.map(item => {
      let r = item;
      return `  \u2022 tabId ${r.tabId}: ${i(r.title)} (${i(r.url)})`;
    }).join(`
`),
    s = {
      availableTabs: availableTabs
    };
  if (t !== void 0) s.tabGroupId = t;
  return {
    result: {
      content: [{
        type: "text",
        text: T(JSON.stringify(s))
      }, {
        type: "text",
        text: `

Tab Context:
- Available tabs:
${n}`
      }]
    }
  };
}
class R {
  clients = new Map();
  stragglers = new WeakSet();
  tabRoutes = new Map();
  ambiguousTabs = new Set();
  lookedUp = new Set();
  context;
  notificationHandler = null;
  refreshPromise = null;
  generation = 0;
  unwatchSockets = null;
  scanTimer = null;
  dialing = new WeakSet();
  parked = new WeakSet();
  redials = new WeakMap();
  orphaned = new WeakSet();
  constructor(e) {
    this.context = e;
  }
  startProactivePairing() {
    let {
      localPairing: localPairing,
      watchSocketPaths: watchSocketPaths
    } = this.context;
    if (!localPairing || !watchSocketPaths) return;
    if (!this.unwatchSockets) this.unwatchSockets = watchSocketPaths(() => this.scheduleScan());
    this.parked = new WeakSet(), this.scheduleScan();
  }
  scheduleScan() {
    if (this.scanTimer) return;
    this.scanTimer = setTimeout(() => {
      this.scanTimer = null, this.dialAvailable();
    }, O), this.scanTimer.unref?.();
  }
  async dialAvailable() {
    if (!this.unwatchSockets || this.context.isDisabled?.()) return;
    let generation = this.generation;
    if (this.refreshPromise) await this.refreshPromise;
    if (await this.refreshClients(), generation !== this.generation || !this.unwatchSockets) return;
    for (let [t, i] of this.clients.entries()) {
      if (i.isConnected()) {
        this.clearRedial(i);
        continue;
      }
      if (this.parked.has(i) || this.dialing.has(i) || this.redials.get(i)?.timer) continue;
      this.clearRedial(i), this.dial(t, i);
    }
  }
  dial(e, t) {
    this.dialing.add(t);
    let i = this.redials.get(t);
    if (i) i.wanted = !1;
    let n = s => {
      if (this.dialing.delete(t), this.clients.get(e) !== t || this.redials.get(t)?.cadence === "dead") return;
      if (s) {
        this.clearRedial(t);
        return;
      }
      if (this.redials.get(t)?.wanted || t.isConnecting()) {
        this.onRedialWanted(e, t);
        return;
      }
      let o = t.lastPairingRefuseCode(),
        r = o === void 0 ? "durable" : iui(o, t.lastPairingRefusePeerReported());
      if (r === "durable") this.parked.add(t);else this.onRedialWanted(e, t, z[r]);
    };
    t.ensureConnected().then(n, () => n(!1));
  }
  onRedialWanted(e, t, i = "transport") {
    if (!this.unwatchSockets || this.clients.get(e) !== t) return;
    if (this.orphaned.has(t)) {
      this.removeClient(e, t);
      return;
    }
    let n = this.redials.get(t) ?? S(i);
    if (n.wanted = !0, n.cadence !== i) n.attempts = 0, n.cadence = i;
    if (this.redials.set(t, n), n.timer) return;
    if (i === "transport" && n.attempts >= F) {
      this.context.logger.info(`[${this.context.serverName}] Giving up on ${e} after ${n.attempts} proactive redials`);
      return;
    }
    n.attempts += 1;
    let s = G(i, n.attempts);
    n.timer = setTimeout(() => {
      if (n.timer = null, this.unwatchSockets && this.clients.get(e) === t && !this.context.isDisabled?.() && !t.isConnected() && !this.dialing.has(t)) this.dial(e, t);
    }, s), n.timer.unref?.();
  }
  onSocketDead(e, t) {
    if (!this.unwatchSockets || this.clients.get(e) !== t) return;
    this.clearRedial(t), this.redials.set(t, S("dead")), this.refreshClients();
  }
  clearRedial(e) {
    let t = this.redials.get(e);
    if (t?.timer) clearTimeout(t.timer);
    this.redials.delete(e);
  }
  removeClient(e, t) {
    this.context.logger.info(`[${this.context.serverName}] Removing stale socket from pool: ${e}`), this.clearRedial(t), this.orphaned.delete(t), t.disconnect(), this.clients.delete(e);
    for (let [i, n] of this.tabRoutes.entries()) if (n === e) this.tabRoutes.delete(i);
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
    for (let t of this.clients.values()) t.setNotificationHandler(e);
  }
  async ensureConnected() {
    let {
      logger: logger_16,
      serverName: serverName_18
    } = this.context;
    await this.refreshClients();
    let i = [],
      n = [];
    for (let o of this.clients.values()) {
      if (o.isConnected()) {
        this.stragglers.delete(o);
        continue;
      }
      let r = this.stragglers.has(o),
        d = o.ensureConnected().then(c => {
          if (c) this.stragglers.delete(o);else this.stragglers.add(o);
          return c;
        }, () => (this.stragglers.add(o), !1));
      (r ? n : i).push(d);
    }
    if (await Promise.all(i), this.getConnectedClients().length === 0) await Promise.all(n);
    let s = this.getConnectedClients().length;
    if (s === 0) return logger_16.info(`[${serverName_18}] No connected sockets in pool`), !1;
    return logger_16.info(`[${serverName_18}] Socket pool: ${s} connected`), !0;
  }
  async callTool(e, t, i, n) {
    if (e === "tabs_context_mcp") return this.callTabsContext(t, i);
    if (n?.singleBrowser || n?.requireDeviceId !== void 0) {
      let r = typeof t.tabId === "number" ? t.tabId : void 0,
        d = r !== void 0 ? this.browserOfTab(r) : void 0,
        requireDeviceId = n.requireDeviceId;
      if (!(requireDeviceId !== void 0 ? d === requireDeviceId : d !== void 0)) throw new a3e(`[${this.context.serverName}] ${e} not sent: its tab's browser can't be confirmed`);
    }
    let tabId = t.tabId;
    if (tabId !== void 0) {
      let r = this.tabRoutes.get(tabId);
      if (r) {
        let d = this.clients.get(r);
        if (d?.isConnected()) return d.callTool(e, t, i);
      }
    }
    let o = this.getConnectedClients();
    if (o.length === 0) throw new jE(`[${this.context.serverName}] No connected sockets available`);
    return o[0].callTool(e, t, i);
  }
  isConnected() {
    return this.getConnectedClients().length > 0;
  }
  browserOfTab(e) {
    let t = this.tabRoutes.get(e);
    if (t === void 0) {
      let i = this.getConnectedClients();
      return i.length === 1 ? this.getSocketPathForClient(i[0]) : void 0;
    }
    return this.lookedUp.has(t) && !this.ambiguousTabs.has(e) && this.clients.get(t)?.isConnected() === !0 ? t : void 0;
  }
  hasActiveSelection() {
    return this.isConnected();
  }
  hasCallInFlight() {
    return this.getConnectedClients().some(item => item.hasCallInFlight());
  }
  onPairingEnded(deviceId_4) {
    this.context.onPeerDisconnected?.({
      deviceId: deviceId_4,
      wasSelected: !this.isConnected()
    });
  }
  sendExternalMessage(e, t, i) {
    let {
        logger: logger_17,
        serverName: serverName_19
      } = this.context,
      o = this.getConnectedClients();
    if (o.length === 1) {
      if (i?.requireDeviceId !== void 0 && this.getSocketPathForClient(o[0]) !== i.requireDeviceId) return logger_17.info(`[${serverName_19}] external_message refused: the paired browser is not the tab's`), Promise.resolve({
        ok: !1,
        error: "no_target",
        detail: "not_sent"
      });
      return o[0].sendExternalMessage(e, t, {
        ...(i?.timeoutMs !== void 0 && {
          timeoutMs: i.timeoutMs
        })
      });
    }
    if (o.length === 0) return Promise.reject(new jE(`[${serverName_19}] Cannot relay: no paired browser`));
    return logger_17.info(`[${serverName_19}] external_message refused: ${o.length} browsers are paired; relays go only to a single paired browser`), Promise.resolve({
      ok: !1,
      error: "no_target",
      detail: "multiple_browsers"
    });
  }
  pushExternalConfigToAllPeers(e) {
    let t = 0;
    for (let i of this.getConnectedClients()) if (i.pushExternalConfig(e)) t += 1;
    return Promise.resolve(t);
  }
  disconnect() {
    if (this.generation += 1, this.refreshPromise = null, this.unwatchSockets?.(), this.unwatchSockets = null, this.scanTimer) clearTimeout(this.scanTimer), this.scanTimer = null;
    for (let e of this.clients.values()) this.clearRedial(e), e.disconnect();
    this.clients.clear(), this.tabRoutes.clear(), this.ambiguousTabs.clear(), this.lookedUp.clear();
  }
  getConnectedClients() {
    return [...this.clients.values()].filter(item => item.isConnected());
  }
  async callTabsContext(e, t) {
    let {
        logger: logger_18,
        serverName: serverName_20
      } = this.context,
      s = this.getConnectedClients();
    if (s.length === 0) throw new jE(`[${serverName_20}] No connected sockets available`);
    if (s.length === 1) {
      let c = await s[0].callTool("tabs_context_mcp", e, t);
      return this.ambiguousTabs.clear(), this.lookedUp = new Set([this.getSocketPathForClient(s[0])]), this.updateTabRoutes(c, this.getSocketPathForClient(s[0])), c;
    }
    let o = await Promise.allSettled(s.map(async item => {
        let result = await item.callTool("tabs_context_mcp", e, t),
          socketPath = this.getSocketPathForClient(item);
        return {
          result: result,
          socketPath: socketPath
        };
      })),
      r = [],
      d;
    this.tabRoutes.clear(), this.ambiguousTabs.clear(), this.lookedUp = new Set(s.map(item => this.getSocketPathForClient(item)));
    for (let c of o) {
      if (c.status !== "fulfilled") {
        logger_18.info(`[${serverName_20}] tabs_context_mcp failed on one socket: ${c.reason}`);
        continue;
      }
      let {
          result: result_2,
          socketPath: socketPath_2
        } = c.value,
        u = this.extractTabs(result_2);
      for (let g of u ?? []) {
        let f = g?.tabId,
          p = typeof f === "number" ? this.tabRoutes.get(f) : void 0;
        if (p !== void 0 && p !== socketPath_2) this.ambiguousTabs.add(f);
      }
      if (this.updateTabRoutes(result_2, socketPath_2), u) for (let g of u) r.push(g);
      if (d === void 0) d = this.extractTabGroupId(result_2);
    }
    if (r.length > 0) return K(r, d);
    for (let c of o) if (c.status === "fulfilled") return c.value.result;
    throw new jE(`[${serverName_20}] All sockets failed for tabs_context_mcp`);
  }
  updateTabRoutes(e, t) {
    let i = this.extractTabs(e);
    if (!i) return;
    for (let n of i) if (typeof n === "object" && n !== null && "tabId" in n) {
      let tabId_2 = n.tabId;
      this.tabRoutes.set(tabId_2, t);
    }
  }
  extractTabs(e) {
    if (!e || typeof e !== "object") return null;
    let i = e.result?.content;
    if (!i || !Array.isArray(i)) return null;
    for (let n of i) if (n.type === "text" && n.text) try {
      let s = JSON.parse(n.text);
      if (Array.isArray(s)) return s;
      let o = s;
      if (o && Array.isArray(o.availableTabs)) return o.availableTabs;
    } catch {}
    return null;
  }
  extractTabGroupId(e) {
    if (!e || typeof e !== "object") return;
    let i = e.result?.content;
    if (!i || !Array.isArray(i)) return;
    for (let n of i) if (n.type === "text" && n.text) try {
      let s = JSON.parse(n.text);
      if (typeof s.tabGroupId === "number") return s.tabGroupId;
    } catch {}
    return;
  }
  getSocketPathForClient(e) {
    for (let [t, i] of this.clients.entries()) if (i === e) return t;
    return "";
  }
  refreshClients() {
    if (!this.refreshPromise) {
      let e = this.doRefreshClients().finally(() => {
        if (this.refreshPromise === e) this.refreshPromise = null;
      });
      this.refreshPromise = e;
    }
    return this.refreshPromise;
  }
  async doRefreshClients() {
    let {
        logger: logger_19,
        serverName: serverName_21
      } = this.context,
      generation_2 = this.generation,
      n;
    try {
      n = (await this.context.getSocketPaths?.()) ?? [];
    } catch (error) {
      logger_19.info(`[${serverName_21}] Socket scan failed:`, error);
      return;
    }
    if (generation_2 !== this.generation) return;
    for (let socketPath_3 of n) if (!this.clients.has(socketPath_3)) {
      logger_19.info(`[${serverName_21}] Adding socket to pool: ${socketPath_3}`);
      let o = {
          ...this.context,
          socketPath: socketPath_3,
          getSocketPath: void 0,
          getSocketPaths: void 0,
          onPeerDisconnected: () => this.onPairingEnded(socketPath_3)
        },
        r = l3e(o);
      if (r.disableAutoReconnect = !0, r.onRedialWanted = d => d === "dead" ? this.onSocketDead(socketPath_3, r) : this.onRedialWanted(socketPath_3, r, d === "peer_dropped" ? "not_ready" : "transport"), this.notificationHandler) r.setNotificationHandler(this.notificationHandler);
      this.clients.set(socketPath_3, r);
    }
    for (let [s, o] of this.clients.entries()) if (n.includes(s)) this.orphaned.delete(o);else if (o.isConnected()) this.orphaned.add(o);else this.removeClient(s, o);
  }
}
function rQn(e) {
  return new R(e);
}
export { Y2o, H_n, rQn };