// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { mtt, iOn, V9t, oTt, aOn, lOn, Fwe, sR, sTt, H0e, Tse, yao, cOn, q9t, iTt } from "B:/~BUN/root/chunk-y69xbd21.js";
import { aTt, K9t, $fr, Ufr, bao, Sao, wao, htt } from "B:/~BUN/root/chunk-eg1v19ms.js";
import { D7, RG } from "B:/~BUN/root/chunk-1wfkh4zw.js";
import { C7 } from "B:/~BUN/root/chunk-z8k0q871.js";
import g from "ws";
var m = /^[A-Za-z0-9-]{1,64}$/;
function f(e = "win32") {
  return e === "darwin" ? "macOS" : e === "win32" ? "Windows" : "Linux";
}
function N(e) {
  return {
    on: (n, t) => {
      e.on(n, t);
    },
    removeAllListeners: () => e.removeAllListeners(),
    send: n => e.send(n),
    close: (n, t) => {
      if (e.readyState === g.OPEN) e.close(n, t);else e.terminate();
    },
    get readyState() {
      return e.readyState;
    }
  };
}
var O = 30000,
  C = 90000,
  B = {
    persisted: "the last-picked",
    only: "the only connected",
    local: "this computer's"
  },
  L = 30000,
  q = new Set(["external_message", "external_message_result", "external_config"]),
  S = 30000;
function v(e, n) {
  if (typeof e !== "string") return;
  let t = e.replace(/[\r\n\t\u0000-\u001f]/g, " ").trim();
  return t.length > n ? `${t.slice(0, n)}\u2026` : t;
}
function U(e) {
  if (typeof e.deviceId !== "string" || !m.test(e.deviceId)) return;
  return {
    deviceId: e.deviceId,
    name: v(e.name, 50),
    osPlatform: v(e.osPlatform, 30),
    connectedAt: typeof e.connectedAt === "number" ? e.connectedAt : 0
  };
}
var x = 4;
function W(e, n) {
  if (!Array.isArray(e)) return;
  let t = new Map(),
    s = (o, i) => {
      if (t.has(o)) {
        t.set(o, i);
        return;
      }
      if (t.size >= x) {
        n?.(`sanitizeBridgeNotices: notice cap (${x}) reached; dropping entry`);
        return;
      }
      t.set(o, i);
    };
  for (let o of e) {
    if (typeof o !== "object" || o === null) continue;
    let {
      kind: kind,
      domain: domain
    } = o;
    if (typeof kind !== "string" || !/^[a-z0-9_]{1,64}$/i.test(kind)) continue;
    let kind_2 = kind.toLowerCase();
    if (domain === void 0) s(`${kind_2}:`, {
      kind: kind_2
    });else if (typeof domain === "string" && domain.length <= 253 && /^[a-z0-9.-]+$/i.test(domain)) {
      let domain_2 = domain.toLowerCase().replace(/\.$/, "");
      if (domain_2.length === 0) continue;
      s(`${kind_2}:${domain_2}`, {
        kind: kind_2,
        domain: domain_2
      });
    }
  }
  return t.size > 0 ? Array.from(t.values()) : void 0;
}
class _ {
  ws = null;
  connected = !1;
  authenticated = !1;
  connecting = !1;
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
  peerConnectedWaiters = [];
  pendingPairingRequestId;
  pairingInProgress = !1;
  persistedDeviceId;
  pendingSwitchResolve = null;
  pairingPromptAbort = null;
  pairingPromptTimeout = null;
  keepAliveInterval = null;
  lastPongReceived = 0;
  pendingExternalMessages = new Map();
  constructor(e) {
    if (this.context = e, e.initialPermissionMode) this.permissionMode = e.initialPermissionMode;
  }
  async ensureConnected() {
    let {
      logger: logger,
      serverName: serverName
    } = this.context;
    if (logger.info(`[${serverName}] ensureConnected called, connected=${this.connected}, authenticated=${this.authenticated}, wsState=${this.ws?.readyState}`), this.connected && this.authenticated && this.ws?.readyState === g.OPEN) return logger.info(`[${serverName}] Already connected and authenticated`), !0;
    if (!this.connecting && !this.reconnectTimer) logger.info(`[${serverName}] Not connecting, starting connection...`), await this.connect();else logger.info(`[${serverName}] Connect in progress or reconnect scheduled, waiting...`);
    return new Promise(t => {
      let s = null,
        o = setTimeout(() => {
          if (s) clearTimeout(s);
          logger.info(`[${serverName}] Connection timeout, connected=${this.connected}, authenticated=${this.authenticated}`), t(!1);
        }, 1e4),
        i = () => {
          if (this.connected && this.authenticated) logger.info(`[${serverName}] Connection successful`), clearTimeout(o), t(!0);else if (!this.connecting && !this.reconnectTimer) logger.info(`[${serverName}] No longer connecting, giving up`), clearTimeout(o), t(!1);else s = setTimeout(i, 200);
        };
      i();
    });
  }
  async callTool(e, args, t) {
    let {
      logger: logger_2,
      serverName: serverName_2,
      trackEvent: trackEvent
    } = this.context;
    if (!this.ws || this.ws.readyState !== g.OPEN) throw new sR(`[${serverName_2}] Bridge not connected`);
    if (!this.selectedDeviceId && (!this.discoveryComplete || this.multiBrowserPendingSelection)) this.discoveryPromise ??= this.discoverAndSelectExtension().finally(() => {
      this.discoveryPromise = null;
    }), await this.discoveryPromise;
    if (this.discoveryComplete && !this.selectedDeviceId && !this.pairingInProgress && !this.multiBrowserPendingSelection) throw new sTt(`[${serverName_2}] No Chrome extension connected after discovery`);
    let r = t?.sessionScope?.sessionId,
      a = t?.sessionScope?.userMessageUuid,
      c = this.context.browserActivityObserver?.onBeforeToolCall;
    if (c) {
      let selectedDeviceId = this.selectedDeviceId;
      try {
        await c({
          sessionId: r,
          toolName: e,
          args: args
        });
      } catch {
        logger_2.debug(`[${serverName_2}] browser activity observer threw`);
      }
      if (!this.ws || this.ws.readyState !== g.OPEN) throw new sR(`[${serverName_2}] Bridge disconnected before tool call was sent`);
      if (selectedDeviceId !== void 0 && this.selectedDeviceId === void 0) throw new Tse("Chrome extension disconnected mid-call");
    }
    let tool_use_id = crypto.randomUUID(),
      startTime = Date.now(),
      l = this.context.getToolCallTimeoutMs?.(e) ?? aTt,
      h = {
        type: "tool_call",
        tool_use_id: tool_use_id,
        client_type: this.context.clientTypeId,
        tool: e,
        args: args,
        supports_tool_result_notices: !0
      };
    if (this.selectedDeviceId) h.target_device_id = this.selectedDeviceId;
    Object.assign(h, lOn({
      ...t,
      permissionMode: t?.permissionMode ?? this.permissionMode,
      allowedDomains: t?.allowedDomains ?? this.allowedDomains
    }));
    let P = JSON.stringify(h);
    return trackEvent?.("chrome_bridge_tool_call_started", {
      tool_name: `browser:${e}`,
      tool_use_id: tool_use_id,
      session_id: r,
      user_message_uuid: a,
      timeout_ms: l,
      transport: "bridge",
      request_bytes: Buffer.byteLength(P, "utf-8")
    }), new Promise((resolve, reject) => {
      let timer = this.createTimeoutTimer(tool_use_id, l);
      this.pendingCalls.set(tool_use_id, {
        resolve: resolve,
        reject: reject,
        timer: timer,
        onPermissionRequest: t?.onPermissionRequest,
        startTime: startTime,
        toolName: e,
        timeoutMs: l,
        sessionId: r,
        userMessageUuid: a,
        args: args
      }), logger_2.debug(`[${serverName_2}] Sending tool_call: ${Fwe(e)} (${tool_use_id.slice(0, 8)})`), this.ws.send(P);
    });
  }
  sendExternalMessage(e, payload, t) {
    let {
      logger: logger_3,
      serverName: serverName_3
    } = this.context;
    if (!this.ws || this.ws.readyState !== g.OPEN) return Promise.reject(new sR(`[${serverName_3}] Bridge not connected`));
    if (!this.selectedDeviceId) return logger_3.info(`[${serverName_3}] external_message refused: no extension selected`), Promise.resolve({
      ok: !1,
      error: "no_target"
    });
    this.pushExternalConfig();
    let requestId = crypto.randomUUID(),
      r = t?.timeoutMs,
      timeoutMs = Math.min(typeof r === "number" && Number.isFinite(r) && r > 0 ? r : Ufr, bao),
      c = {
        type: "external_message",
        requestId: requestId,
        extensionIds: [...e],
        payload: payload,
        timeoutMs: timeoutMs,
        target_device_id: this.selectedDeviceId
      };
    return new Promise(resolve_2 => {
      let timer_2 = setTimeout(() => {
        if (this.pendingExternalMessages.delete(requestId)) logger_3.warn(`[${serverName_3}] external_message timed out locally (${requestId.slice(0, 8)})`), resolve_2({
          ok: !1,
          error: "timeout"
        });
      }, timeoutMs + L);
      this.pendingExternalMessages.set(requestId, {
        resolve: resolve_2,
        timer: timer_2
      }), logger_3.debug(`[${serverName_3}] Sending external_message (${requestId.slice(0, 8)})`);
      try {
        this.ws.send(JSON.stringify(c));
      } catch (l) {
        clearTimeout(timer_2), this.pendingExternalMessages.delete(requestId), logger_3.warn(`[${serverName_3}] external_message serialization/send failed: ${l instanceof Error ? l.message : String(l)}`), resolve_2({
          ok: !1,
          error: "send_failed"
        });
      }
    });
  }
  pushExternalConfig(e) {
    if (this.selectedDeviceId === void 0) return !1;
    return this.pushExternalConfigToPeer(this.selectedDeviceId, e);
  }
  pushExternalConfigToPeer(target_device_id, n) {
    if (this.ws?.readyState !== g.OPEN) return !1;
    let t = n;
    if (!t) {
      if (!this.context.getExternalRelayConfig) return !1;
      t = this.context.getExternalRelayConfig() ?? {
        extensionIds: []
      };
    }
    return this.ws.send(JSON.stringify({
      type: "external_config",
      extensionIds: t.extensionIds,
      ...(t.hooks !== void 0 && {
        hooks: t.hooks
      }),
      target_device_id: target_device_id
    })), !0;
  }
  async pushExternalConfigToAllPeers(e) {
    if (this.ws?.readyState !== g.OPEN) return 0;
    if (!e && !this.context.getExternalRelayConfig) return 0;
    let n = await this.queryBridgeExtensions(),
      t = 0;
    for (let s of n) if (this.pushExternalConfigToPeer(s.deviceId, e)) t++;
    return t;
  }
  isConnected() {
    return this.connected && this.authenticated && this.ws?.readyState === g.OPEN;
  }
  disconnect() {
    this.cleanup();
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
  }
  async discoverAndSelectExtension() {
    let {
      logger: logger_4,
      serverName: serverName_4
    } = this.context;
    this.persistedDeviceId = this.context.getPersistedDeviceId?.();
    let t = await this.queryBridgeExtensions();
    if (t.length === 0) {
      if (logger_4.info(`[${serverName_4}] No extensions connected, waiting up to ${K9t}ms for peer_connected`), await this.waitForPeerConnected(K9t)) t = await this.queryBridgeExtensions();
    }
    if (this.context.getRequirePairedDevice?.()) {
      if (!this.persistedDeviceId) {
        logger_4.info(`[${serverName_4}] requirePairedDevice set but no persistedDeviceId; refusing to auto-select`), this.discoveryComplete = !0;
        return;
      }
      let persistedDeviceId = this.persistedDeviceId,
        r = t.find(item => item.deviceId === persistedDeviceId);
      if (!r) {
        if (logger_4.info(`[${serverName_4}] requirePairedDevice: persisted ${persistedDeviceId.slice(0, 8)} not connected (${t.length} other(s) visible); waiting`), await this.waitForPeerConnected(K9t)) t = await this.queryBridgeExtensions(), r = t.find(item => item.deviceId === persistedDeviceId);
      }
      if (this.discoveryComplete = !0, r) this.selectExtension(r.deviceId);else logger_4.info(`[${serverName_4}] requirePairedDevice: persisted device never arrived; refusing to auto-select`);
      return;
    }
    let s = t.length > 1 && !t.some(item => item.deviceId === this.persistedDeviceId) ? await oTt(this.context.getLocalDeviceIds) : void 0;
    if (this.discoveryComplete = !0, this.selectedDeviceId) return;
    let o = V9t(t, this.persistedDeviceId, s);
    if (o.kind === "none") {
      logger_4.info(`[${serverName_4}] No extensions found after waiting`), this.multiBrowserPendingSelection = !1;
      return;
    }
    if (o.kind === "select") {
      let {
        extension: extension,
        reason: reason
      } = o;
      if (logger_4.info(`[${serverName_4}] Auto-connecting to ${B[reason]} extension: ${extension.name || extension.deviceId.slice(0, 8)}`), reason === "only" && !this.isLocalExtension(extension)) this.context.onRemoteExtensionWarning?.(extension);
      this.selectExtension(extension.deviceId), this.reportBrowserSelected(reason, t, s);
      return;
    }
    if (!this.multiBrowserPendingSelection) this.reportBrowserSelected("ask", t, s);
    if (this.context.askUserToolName) {
      this.multiBrowserPendingSelection = !0;
      return;
    }
    this.broadcastPairingRequest(), this.pairingInProgress = !0, this.firePairingPrompt();
  }
  reportBrowserSelected(outcome, n, t) {
    this.context.trackEvent?.("chrome_bridge_browser_selected", {
      outcome: outcome,
      connected_count: n.length,
      local_count: t === void 0 ? null : n.filter(item => t.has(item.deviceId)).length
    });
  }
  queryBridgeExtensions() {
    if (this.listExtensionsPromise) return this.listExtensionsPromise;
    let e = new Promise(resolve_3 => {
      let timeout = setTimeout(() => {
        this.pendingDiscovery = null, resolve_3([]);
      }, $fr);
      this.pendingDiscovery = {
        resolve: resolve_3,
        timeout: timeout
      }, this.ws?.send(JSON.stringify({
        type: "list_extensions"
      }));
    }).then(n => {
      let t = new Map();
      for (let s of n) {
        let o = t.get(s.deviceId);
        if (!o || s.connectedAt > o.connectedAt) t.set(s.deviceId, s);
      }
      return [...t.values()].map(U).filter(item => item !== void 0);
    });
    return this.listExtensionsPromise = e, e.finally(() => {
      if (this.listExtensionsPromise === e) this.listExtensionsPromise = null;
    }), e;
  }
  getSelectedDeviceId() {
    return this.selectedDeviceId ?? this.context.getPersistedDeviceId?.();
  }
  hasActiveSelection() {
    return this.selectedDeviceId !== void 0;
  }
  clearSelection() {
    this.selectedDeviceId = void 0, this.previousSelectedDeviceId = void 0, this.discoveryComplete = !1, this.multiBrowserPendingSelection = !1, this.pairingInProgress = !1, this.abortPairingPrompt();
  }
  selectExtension(e) {
    let {
      logger: logger_5,
      serverName: serverName_5
    } = this.context;
    this.selectedDeviceId = e, this.previousSelectedDeviceId = void 0, this.multiBrowserPendingSelection = !1, logger_5.info(`[${serverName_5}] Selected Chrome extension: ${e.slice(0, 8)}...`), this.pushExternalConfig();
  }
  async clearSelectionIfGone(e) {
    let {
        logger: logger_6,
        serverName: serverName_6
      } = this.context,
      s = await this.queryBridgeExtensions();
    if (this.selectedDeviceId !== e) return;
    if (s.some(item => item.deviceId === e)) return;
    logger_6.info(`[${serverName_6}] Selected extension ${e.slice(0, 8)} absent from bridge roster after error; clearing selection`), this.selectedDeviceId = void 0, this.discoveryComplete = !1;
  }
  async listConnectedExtensions() {
    if (!(await this.ensureConnected())) return [];
    let e = await this.queryBridgeExtensions(),
      n = e.length > 1 ? await oTt(this.context.getLocalDeviceIds) : void 0;
    return e.map(item => ({
      ...item,
      isLocal: this.isLocalExtension(item),
      ...(n?.has(item.deviceId) && {
        onThisComputer: !0
      })
    }));
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
    return e.osPlatform === f(this.context.getHostPlatform?.() ?? "win32");
  }
  waitForPeerConnected(e) {
    return new Promise(n => {
      let t = setTimeout(() => {
          this.peerConnectedWaiters = this.peerConnectedWaiters.filter(item => item !== s), n(!1);
        }, e),
        s = o => {
          clearTimeout(t), n(o);
        };
      this.peerConnectedWaiters.push(s);
    });
  }
  broadcastPairingRequest() {
    let request_id = crypto.randomUUID();
    this.pendingPairingRequestId = request_id, this.ws?.send(JSON.stringify({
      type: "pairing_request",
      request_id: request_id,
      client_type: this.context.clientTypeId
    }));
  }
  async switchBrowser() {
    let e = await this.queryBridgeExtensions(),
      n = this.selectedDeviceId ?? this.previousSelectedDeviceId;
    if (e.length === 0 || e.length === 1 && (!n || e[0].deviceId === n)) return "no_other_browsers";
    this.previousSelectedDeviceId = this.selectedDeviceId, this.selectedDeviceId = void 0, this.discoveryComplete = !1, this.pairingInProgress = !1;
    let request_id_2 = crypto.randomUUID();
    if (this.pendingPairingRequestId = request_id_2, this.ws?.readyState !== g.OPEN) return null;
    if (this.ws.send(JSON.stringify({
      type: "pairing_request",
      request_id: request_id_2,
      client_type: this.context.clientTypeId
    })), this.firePairingPrompt(), this.pendingSwitchResolve) this.pendingSwitchResolve(null);
    return new Promise(s => {
      let o = setTimeout(() => {
        if (this.pendingPairingRequestId === request_id_2) this.pendingPairingRequestId = void 0;
        this.pendingSwitchResolve = null, this.abortPairingPrompt(), s(null);
      }, 120000);
      this.pendingSwitchResolve = i => {
        clearTimeout(o), this.pendingSwitchResolve = null, s(i);
      };
    });
  }
  async connect() {
    let {
      logger: logger_7,
      serverName: serverName_7,
      bridgeConfig: bridgeConfig,
      trackEvent: trackEvent_2
    } = this.context;
    if (!bridgeConfig) {
      logger_7.error(`[${serverName_7}] No bridge config provided`);
      return;
    }
    if (this.connecting) return;
    this.connecting = !0, this.authenticated = !1, this.connectionStartTime = Date.now(), this.closeSocket(), this.handshakeTimer = setTimeout(() => {
      if (this.handshakeTimer = null, !this.connecting) return;
      let ws_state = this.ws?.readyState;
      if (logger_7.warn(`[${serverName_7}] Bridge connect stuck after ${S}ms (ws_state=${ws_state})`), trackEvent_2?.("chrome_bridge_handshake_timeout", {
        duration_ms: Date.now() - (this.connectionStartTime ?? 0),
        ws_state: ws_state
      }), ws_state === void 0) return;
      this.connecting = !1, this.closeSocket(), this.scheduleReconnect();
    }, S);
    let o, i;
    if (bridgeConfig.devUserId) o = bridgeConfig.devUserId, logger_7.debug(`[${serverName_7}] Using dev user ID for bridge connection`);else {
      logger_7.debug(`[${serverName_7}] Fetching user ID for bridge connection`);
      let error_detail, c;
      if (bridgeConfig.getUserIdResult) {
        let d = await bridgeConfig.getUserIdResult();
        if (d.ok) c = d.userId;else error_detail = d.error;
      } else c = await bridgeConfig.getUserId();
      if (!c) {
        let duration_ms = Date.now() - this.connectionStartTime;
        logger_7.error(`[${serverName_7}] No user ID available after ${duration_ms}ms`), trackEvent_2?.("chrome_bridge_connection_failed", {
          duration_ms: duration_ms,
          error_type: "no_user_id",
          error_detail: error_detail,
          reconnect_attempt: this.reconnectAttempts
        }), this.connecting = !1, this.scheduleReconnect();
        return;
      }
      if (o = c, logger_7.debug(`[${serverName_7}] Fetching OAuth token for bridge connection`), i = await bridgeConfig.getOAuthToken(), !i) {
        let duration_ms_2 = Date.now() - this.connectionStartTime;
        logger_7.error(`[${serverName_7}] No OAuth token available after ${duration_ms_2}ms`), trackEvent_2?.("chrome_bridge_connection_failed", {
          duration_ms: duration_ms_2,
          error_type: "no_oauth_token",
          reconnect_attempt: this.reconnectAttempts
        }), this.connecting = !1, this.scheduleReconnect();
        return;
      }
    }
    let bridge_url = `${bridgeConfig.url}/chrome/${o}`;
    logger_7.info(`[${serverName_7}] Connecting to bridge: ${bridge_url}`), trackEvent_2?.("chrome_bridge_connection_started", {
      bridge_url: bridge_url
    });
    try {
      if (bridgeConfig.createWebSocket) this.ws = await bridgeConfig.createWebSocket(bridge_url);else {
        let tls = (await bridgeConfig.getWsOptions?.()) ?? bridgeConfig.wsOptions;
        this.ws = N(new g(bridge_url, tls ? {
          ...tls,
          tls: tls
        } : void 0));
      }
    } catch (a) {
      let duration_ms_3 = Date.now() - this.connectionStartTime;
      logger_7.error(`[${serverName_7}] Failed to create WebSocket after ${duration_ms_3}ms:`, a), trackEvent_2?.("chrome_bridge_connection_failed", {
        duration_ms: duration_ms_3,
        error_type: "websocket_error",
        error_code: a?.code,
        reconnect_attempt: this.reconnectAttempts
      }), this.connecting = !1, this.scheduleReconnect();
      return;
    }
    this.ws.on("open", () => {
      logger_7.info(`[${serverName_7}] WebSocket connected, sending connect message`);
      let a = {
        type: "connect",
        client_type: this.context.clientTypeId
      };
      if (bridgeConfig.devUserId) a.dev_user_id = bridgeConfig.devUserId;else a.oauth_token = i;
      this.ws?.send(JSON.stringify(a));
    }), this.ws.on("message", a => {
      try {
        let c = a.toString(),
          d = JSON.parse(c);
        if (q.has(d.type)) logger_7.debug(`[${serverName_7}] Bridge received: ${String(d.type)} (ok=${String(d.ok)})`);else if (logger_7.isDebugEnabled?.() ?? !0) logger_7.debug(`[${serverName_7}] Bridge received: ${JSON.stringify(d)}`);
        this.handleMessage(d, Buffer.byteLength(c, "utf-8"));
      } catch (c) {
        logger_7.error(`[${serverName_7}] Failed to parse bridge message:`, c);
      }
    }), this.ws.on("close", close_code => {
      let duration_since_connect_ms = this.connectionEstablishedTime ? Date.now() - this.connectionEstablishedTime : 0;
      logger_7.info(`[${serverName_7}] Bridge connection closed (code: ${close_code}, duration: ${duration_since_connect_ms}ms)`), trackEvent_2?.("chrome_bridge_disconnected", {
        close_code: close_code,
        duration_since_connect_ms: duration_since_connect_ms,
        reconnect_attempt: this.reconnectAttempts + 1
      }), this.connected = !1, this.authenticated = !1, this.connecting = !1, this.connectionEstablishedTime = null, this.rejectPendingCalls(new sR("Bridge connection closed mid-call")), this.scheduleReconnect();
    }), this.ws.on("error", a => {
      let duration_ms_4 = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
      logger_7.error(`[${serverName_7}] Bridge WebSocket error after ${duration_ms_4}ms: ${a.message}`), trackEvent_2?.("chrome_bridge_connection_failed", {
        duration_ms: duration_ms_4,
        error_type: "websocket_error",
        error_code: a.code,
        reconnect_attempt: this.reconnectAttempts
      }), this.connected = !1, this.authenticated = !1, this.connecting = !1, this.rejectPendingCalls(new sR(`Bridge connection error: ${a.message}`));
    });
  }
  handleMessage(e, n) {
    let {
      logger: logger_8,
      serverName: serverName_8,
      trackEvent: trackEvent_3
    } = this.context;
    switch (e.type) {
      case "paired":
        {
          let duration_ms_5 = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
          logger_8.info(`[${serverName_8}] Paired with Chrome extension (duration: ${duration_ms_5}ms)`), this.connected = !0, this.authenticated = !0, this.connecting = !1, this.reconnectAttempts = 0, this.connectionEstablishedTime = Date.now(), this.startKeepAlive(), trackEvent_3?.("chrome_bridge_connection_succeeded", {
            duration_ms: duration_ms_5,
            status: "paired"
          }), this.pushExternalConfigToAllPeers(), this.context.onPeerRosterChanged?.();
          break;
        }
      case "waiting":
        {
          let duration_ms_6 = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
          logger_8.info(`[${serverName_8}] Waiting for Chrome extension to connect (duration: ${duration_ms_6}ms)`), this.connected = !0, this.authenticated = !0, this.connecting = !1, this.reconnectAttempts = 0, this.connectionEstablishedTime = Date.now(), this.startKeepAlive(), trackEvent_3?.("chrome_bridge_connection_succeeded", {
            duration_ms: duration_ms_6,
            status: "waiting"
          });
          break;
        }
      case "peer_connected":
        if (logger_8.info(`[${serverName_8}] Chrome extension connected to bridge`), trackEvent_3?.("chrome_bridge_peer_connected", null), !this.selectedDeviceId) this.discoveryComplete = !1;
        if (this.previousSelectedDeviceId && e.deviceId === this.previousSelectedDeviceId && !this.pendingSwitchResolve) logger_8.info(`[${serverName_8}] Previously selected extension reconnected, auto-reselecting`), this.selectExtension(this.previousSelectedDeviceId), this.previousSelectedDeviceId = void 0;
        if (this.peerConnectedWaiters.length > 0) {
          let peerConnectedWaiters = this.peerConnectedWaiters;
          this.peerConnectedWaiters = [];
          for (let r of peerConnectedWaiters) r(!0);
        }
        if (typeof e.deviceId === "string" && m.test(e.deviceId)) this.pushExternalConfigToPeer(e.deviceId);else this.pushExternalConfig();
        this.context.onPeerRosterChanged?.();
        break;
      case "peer_disconnected":
        {
          let deviceId_2 = e.deviceId;
          if (logger_8.info(`[${serverName_8}] Chrome extension disconnected from bridge (deviceId=${deviceId_2 ?? "none"}, selected=${this.selectedDeviceId ?? "none"})`), trackEvent_3?.("chrome_bridge_peer_disconnected", {
            disconnected_device_id: deviceId_2 ?? null,
            selected_device_id: this.selectedDeviceId ?? null,
            had_match: deviceId_2 !== null && deviceId_2 !== void 0 && deviceId_2 === this.selectedDeviceId,
            pending_calls: this.pendingCalls.size
          }), this.context.onPeerDisconnected?.({
            deviceId: deviceId_2,
            wasSelected: deviceId_2 !== null && deviceId_2 !== void 0 && deviceId_2 === this.selectedDeviceId
          }), e.deviceId && e.deviceId === this.selectedDeviceId) logger_8.info(`[${serverName_8}] Selected extension disconnected, clearing selection`), this.previousSelectedDeviceId = this.selectedDeviceId, this.selectedDeviceId = void 0, this.discoveryComplete = !1, this.rejectPendingCalls(new Tse("Chrome extension disconnected mid-call"));else if (!this.selectedDeviceId && this.multiBrowserPendingSelection) this.discoveryComplete = !1, this.multiBrowserPendingSelection = !1;
          this.context.onPeerRosterChanged?.();
          break;
        }
      case "routing_ack":
        {
          trackEvent_3?.("chrome_bridge_routing_ack", {
            tool_use_id: e.tool_use_id ?? null,
            routed_to: e.routed_to ?? null,
            target_connected_at: e.target_connected_at ?? null,
            target_pong_age_ms: e.target_pong_age_ms ?? null,
            extension_sockets: e.extension_sockets ?? null,
            mcp_sockets: e.mcp_sockets ?? null
          });
          let i = this.pendingCalls.get(e.tool_use_id ?? "");
          if (i) i.routingAckReceived = !0, i.routingAckPongAgeMs = e.target_pong_age_ms ?? null;
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
            logger_8.info(`[${serverName_8}] Pairing prompt dismissed in extension`), this.abortPairingPrompt();
            break;
          }
          let deviceId_3 = typeof e.device_id === "string" && m.test(e.device_id) ? e.device_id : void 0,
            name_2 = v(e.name, 50);
          if (deviceId_3 && name_2) {
            if (this.pendingPairingRequestId = void 0, this.pairingInProgress = !1, this.selectExtension(deviceId_3), this.context.onExtensionPaired?.(deviceId_3, name_2), this.abortPairingPrompt(), logger_8.info(`[${serverName_8}] Paired with "${name_2}" (${deviceId_3.slice(0, 8)})`), this.pendingSwitchResolve) this.pendingSwitchResolve({
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
        this.handleToolResult(e, n);
        break;
      case "external_message_result":
        {
          let i = typeof e.requestId === "string" ? e.requestId : void 0,
            r = i ? this.pendingExternalMessages.get(i) : void 0;
          if (!i || !r) {
            logger_8.debug(`[${serverName_8}] external_message_result for unknown request: ${i?.slice(0, 8) ?? "none"}`);
            break;
          }
          if (clearTimeout(r.timer), this.pendingExternalMessages.delete(i), e.ok === !0) r.resolve({
            ok: !0,
            response: e.response
          });else {
            let a = e.error;
            r.resolve({
              ok: !1,
              error: a === "no_target" || a === "timeout" ? a : "send_failed"
            });
          }
          break;
        }
      case "external_message":
      case "external_config":
        break;
      case "permission_request":
        this.handlePermissionRequest(e).catch(i => {
          logger_8.error(`[${serverName_8}] Error handling permission_request:`, i);
        });
        break;
      case "notification":
        if (typeof e.method !== "string") logger_8.warn(`[${serverName_8}] Dropped a notification whose method is not a string`);else this.notificationHandler?.({
          method: e.method,
          params: e.params
        });
        break;
      case "error":
        if (logger_8.warn(`[${serverName_8}] Bridge error: ${e.error}`), this.selectedDeviceId) this.clearSelectionIfGone(this.selectedDeviceId);
        break;
      default:
        logger_8.warn(`[${serverName_8}] Unrecognized bridge message type: ${e.type}`);
    }
  }
  async handlePermissionRequest(e) {
    let {
        logger: logger_9,
        serverName: serverName_9
      } = this.context,
      {
        tool_use_id: s,
        request_id: o
      } = e;
    if (typeof s !== "string" || typeof o !== "string") {
      logger_9.warn(`[${serverName_9}] permission_request missing tool_use_id or request_id`);
      return;
    }
    let i = this.pendingCalls.get(s);
    if (!i?.onPermissionRequest) {
      logger_9.debug(`[${serverName_9}] Ignoring permission_request for unknown tool_use_id ${s.slice(0, 8)} (not our call)`);
      return;
    }
    let r = aOn(e, {
      toolUseId: s,
      requestId: o
    });
    clearTimeout(i.timer), i.permissionPaused = !0;
    try {
      let c = await i.onPermissionRequest(r);
      this.sendPermissionResponse(o, c);
    } catch (c) {
      logger_9.error(`[${serverName_9}] Error handling permission request:`, c), this.sendPermissionResponse(o, !1);
    }
    let a = this.pendingCalls.get(s);
    if (a) a.timer = this.createTimeoutTimer(s, a.timeoutMs);
  }
  sendPermissionResponse(request_id_4, allowed) {
    if (this.ws?.readyState === g.OPEN) {
      let t = {
        type: "permission_response",
        request_id: request_id_4,
        allowed: allowed
      };
      if (this.selectedDeviceId) t.target_device_id = this.selectedDeviceId;
      this.ws.send(JSON.stringify(t));
    }
  }
  handleToolResult(e, response_bytes) {
    let {
        logger: logger_10,
        serverName: serverName_10,
        trackEvent: trackEvent_4
      } = this.context,
      tool_use_id_2 = e.tool_use_id;
    if (typeof tool_use_id_2 !== "string") {
      logger_10.warn(`[${serverName_10}] Received tool_result without tool_use_id`);
      return;
    }
    let r = this.pendingCalls.get(tool_use_id_2);
    if (!r) {
      logger_10.debug(`[${serverName_10}] Received tool_result for unknown call: ${tool_use_id_2.slice(0, 8)}`);
      let l = this.timedOutCalls.get(tool_use_id_2);
      if (trackEvent_4?.("chrome_bridge_tool_call_late_result", {
        tool_use_id: tool_use_id_2,
        gap_from_timeout_ms: l ? Date.now() - l : null,
        reason: l ? "post_timeout" : "unknown",
        is_error: typeof e.is_error === "boolean" ? e.is_error : null
      }), l) this.timedOutCalls.delete(tool_use_id_2);
      return;
    }
    let duration_ms_7 = Date.now() - r.startTime,
      c = this.normalizeBridgeResponse(e),
      d = Boolean(e.is_error) || "error" in c;
    clearTimeout(r.timer), this.pendingCalls.delete(tool_use_id_2);
    let u = this.context.browserActivityObserver?.onToolResult;
    if (u) try {
      u({
        sessionId: r.sessionId,
        toolName: r.toolName,
        args: r.args,
        ok: !d,
        resultContent: d ? void 0 : c.result?.content
      });
    } catch {
      logger_10.debug(`[${serverName_10}] browser activity observer threw`);
    }
    if (d) {
      let l = iOn(c.error).slice(0, 200);
      logger_10.warn(`[${serverName_10}] Tool call error: ${r.toolName} (${tool_use_id_2.slice(0, 8)}) after ${duration_ms_7}ms`);
      let error_type = mtt(r.toolName, l);
      if (trackEvent_4?.("chrome_bridge_tool_call_error", {
        tool_name: `browser:${r.toolName}`,
        tool_use_id: tool_use_id_2,
        duration_ms: duration_ms_7,
        error_type: error_type,
        session_id: r.sessionId,
        user_message_uuid: r.userMessageUuid,
        transport: "bridge"
      }), !this.selectedDeviceId && !this.pairingInProgress) {
        this.discoveryComplete = !1, r.reject(new Tse(`[${serverName_10}] Extension disconnected during tool call: ${r.toolName}`));
        return;
      }
    } else logger_10.debug(`[${serverName_10}] Tool call completed: ${r.toolName} (${tool_use_id_2.slice(0, 8)}) in ${duration_ms_7}ms`), trackEvent_4?.("chrome_bridge_tool_call_completed", {
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
        ...t
      } = e,
      notices_2 = W(notices, i => this.context.logger.warn(`[${this.context.serverName}] ${i}`)),
      o = notices_2 ? {
        notices: notices_2
      } : void 0;
    if (t.result || t.error) return o ? {
      ...t,
      ...o
    } : t;
    if (t.content) {
      if (t.is_error) return {
        error: {
          content: t.content
        },
        ...o
      };
      return {
        result: {
          content: t.content
        },
        ...o
      };
    }
    return o ? {
      ...t,
      ...o
    } : t;
  }
  getTimeoutDiagnostics() {
    let free_mem_pct = -1;
    try {
      let t = process.getSystemMemoryInfo(),
        s = t.free + (t.fileBacked ?? 0);
      free_mem_pct = t.total > 0 ? Math.round(s / t.total * 1000) / 10 : -1;
    } catch {}
    let pong_age_ms = this.lastPongReceived > 0 ? Date.now() - this.lastPongReceived : void 0;
    return {
      free_mem_pct: free_mem_pct,
      pong_age_ms: pong_age_ms
    };
  }
  createTimeoutTimer(tool_use_id_3, timeout_ms) {
    let {
      logger: logger_11,
      serverName: serverName_11,
      trackEvent: trackEvent_5
    } = this.context;
    return setTimeout(() => {
      let i = this.pendingCalls.get(tool_use_id_3);
      if (!i) return;
      if (this.timedOutCalls.set(tool_use_id_3, Date.now()), this.timedOutCalls.size > 200) {
        let d = this.timedOutCalls.keys().next().value;
        if (d) this.timedOutCalls.delete(d);
      }
      this.pendingCalls.delete(tool_use_id_3);
      let duration_ms_8 = Date.now() - i.startTime,
        a = this.getTimeoutDiagnostics(),
        c = i.routingAckReceived ?? !1;
      if (logger_11.warn(`[${serverName_11}] Tool call timeout: ${i.toolName} (${tool_use_id_3.slice(0, 8)}) after ${duration_ms_8}ms, pending calls: ${this.pendingCalls.size}`), trackEvent_5?.("chrome_bridge_tool_call_timeout", {
        tool_name: `browser:${i.toolName}`,
        tool_use_id: tool_use_id_3,
        duration_ms: duration_ms_8,
        timeout_ms: timeout_ms,
        session_id: i.sessionId,
        user_message_uuid: i.userMessageUuid,
        transport: "bridge",
        routing_ack_received: c,
        routing_ack_pong_age_ms: i.routingAckPongAgeMs ?? null,
        permission_paused: i.permissionPaused ?? !1,
        ...a
      }), this.isConnected()) i.reject(new H0e(`[${serverName_11}] Tool call timed out: ${i.toolName}`, {
        routingAckReceived: c
      }));else i.reject(new sR(`[${serverName_11}] Tool call timed out with bridge disconnected: ${i.toolName}`));
    }, timeout_ms);
  }
  scheduleReconnect() {
    let {
      logger: logger_12,
      serverName: serverName_12,
      trackEvent: trackEvent_6
    } = this.context;
    if (this.reconnectTimer) return;
    if (this.reconnectAttempts++, this.reconnectAttempts > 100) {
      logger_12.warn(`[${serverName_12}] Giving up bridge reconnection after 100 attempts`), trackEvent_6?.("chrome_bridge_reconnect_exhausted", {
        total_attempts: 100
      }), this.reconnectAttempts = 0;
      return;
    }
    let s = Math.min(2000 * Math.pow(1.5, this.reconnectAttempts - 1), 30000);
    if (this.reconnectAttempts <= 10 || this.reconnectAttempts % 10 === 0) logger_12.info(`[${serverName_12}] Bridge reconnecting in ${Math.round(s)}ms (attempt ${this.reconnectAttempts})`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, s);
  }
  startKeepAlive() {
    this.stopKeepAlive(), this.lastPongReceived = Date.now();
    let {
      logger: logger_13,
      serverName: serverName_13
    } = this.context;
    this.keepAliveInterval = setInterval(() => {
      if (this.ws?.readyState === g.OPEN) this.ws.send(JSON.stringify({
        type: "ping"
      }));
      if (this.lastPongReceived > 0 && Date.now() - this.lastPongReceived > C) logger_13.warn(`[${serverName_13}] No pong received in ${C}ms, closing dead connection`), this.rejectPendingCalls(new sR("Bridge keepalive timeout \u2014 connection dead")), this.closeSocket(), this.scheduleReconnect();
    }, O);
  }
  stopKeepAlive() {
    if (this.keepAliveInterval) clearInterval(this.keepAliveInterval), this.keepAliveInterval = null;
    this.lastPongReceived = 0;
  }
  closeSocket() {
    if (this.stopKeepAlive(), this.handshakeTimer) clearTimeout(this.handshakeTimer), this.handshakeTimer = null;
    if (this.ws) this.ws.removeAllListeners(), this.ws.on("error", () => {}), this.ws.close(), this.ws = null;
    if (this.connected = !1, this.authenticated = !1, this.selectedDeviceId) this.previousSelectedDeviceId = this.selectedDeviceId;
    if (this.selectedDeviceId = void 0, this.discoveryComplete = !1, this.multiBrowserPendingSelection = !1, this.pendingPairingRequestId = void 0, this.pairingInProgress = !1, this.abortPairingPrompt(), this.pendingSwitchResolve) this.pendingSwitchResolve(null), this.pendingSwitchResolve = null;
    if (this.pendingDiscovery) clearTimeout(this.pendingDiscovery.timeout), this.pendingDiscovery.resolve([]), this.pendingDiscovery = null;
    if (this.peerConnectedWaiters.length > 0) {
      let peerConnectedWaiters_2 = this.peerConnectedWaiters;
      this.peerConnectedWaiters = [];
      for (let n of peerConnectedWaiters_2) n(!1);
    }
    this.context.onPeerRosterChanged?.();
  }
  rejectPendingCalls(e) {
    for (let n of this.pendingCalls.values()) clearTimeout(n.timer), n.reject(e);
    this.pendingCalls.clear();
  }
  drainExternalRelays() {
    for (let e of this.pendingExternalMessages.values()) clearTimeout(e.timer), e.resolve({
      ok: !1,
      error: "send_failed"
    });
    this.pendingExternalMessages.clear();
  }
  cleanup() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.rejectPendingCalls(new sR("Bridge client disconnected")), this.drainExternalRelays(), this.closeSocket(), this.reconnectAttempts = 0;
  }
}
function b(e) {
  return new _(e);
}
var F = 300,
  H = 1000,
  J = 30000,
  j = 10,
  G = {
    steps: [[2000, 30]],
    thenMs: 1e4
  },
  z = {
    steps: [[2000, 30]],
    thenMs: 60000
  },
  K = {
    steps: [[3000, 100]],
    thenMs: 1e4
  },
  X = (e, n, t) => Math.min(e * 1.5 ** (n - 1), t);
function w({
  steps: steps,
  thenMs: thenMs
}, t) {
  let s = 0;
  for (let [o, i] of steps) if (s += i, t <= s) return o;
  return thenMs;
}
function Y(e, n) {
  switch (e) {
    case "transport":
      return X(H, n, J);
    case "mismatch":
      return w(K, n);
    case "not_ready":
      return w(G, n);
    case "token":
      return w(z, n);
  }
}
var V = {
    peer_not_ready: "not_ready",
    awaits_token: "token",
    peer_may_move: "mismatch",
    retry: "transport"
  },
  y = cadence => ({
    attempts: 0,
    timer: null,
    wanted: !1,
    cadence: cadence
  });
function k(e) {
  return e.replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0085/g, "\\u0085");
}
function Q(availableTabs, n) {
  let t = i => k(JSON.stringify(i)),
    s = availableTabs.map(item => {
      let r = item;
      return `  \u2022 tabId ${r.tabId}: ${t(r.title)} (${t(r.url)})`;
    }).join(`
`),
    o = {
      availableTabs: availableTabs
    };
  if (n !== void 0) o.tabGroupId = n;
  return {
    result: {
      content: [{
        type: "text",
        text: k(JSON.stringify(o))
      }, {
        type: "text",
        text: `

Tab Context:
- Available tabs:
${s}`
      }]
    }
  };
}
class I {
  clients = new Map();
  stragglers = new WeakSet();
  tabRoutes = new Map();
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
    }, F), this.scanTimer.unref?.();
  }
  async dialAvailable() {
    if (!this.unwatchSockets || this.context.isDisabled?.()) return;
    let generation = this.generation;
    if (this.refreshPromise) await this.refreshPromise;
    if (await this.refreshClients(), generation !== this.generation || !this.unwatchSockets) return;
    for (let [n, t] of this.clients.entries()) {
      if (t.isConnected()) {
        this.clearRedial(t);
        continue;
      }
      if (this.parked.has(t) || this.dialing.has(t) || this.redials.get(t)?.timer) continue;
      this.clearRedial(t), this.dial(n, t);
    }
  }
  dial(e, n) {
    this.dialing.add(n);
    let t = this.redials.get(n);
    if (t) t.wanted = !1;
    let s = o => {
      if (this.dialing.delete(n), this.clients.get(e) !== n || this.redials.get(n)?.cadence === "dead") return;
      if (o) {
        this.clearRedial(n);
        return;
      }
      if (this.redials.get(n)?.wanted || n.isConnecting()) {
        this.onRedialWanted(e, n);
        return;
      }
      let i = n.lastPairingRefuseCode(),
        r = i === void 0 ? "durable" : yao(i, n.lastPairingRefusePeerReported());
      if (r === "durable") this.parked.add(n);else this.onRedialWanted(e, n, V[r]);
    };
    n.ensureConnected().then(s, () => s(!1));
  }
  onRedialWanted(e, n, t = "transport") {
    if (!this.unwatchSockets || this.clients.get(e) !== n) return;
    if (this.orphaned.has(n)) {
      this.removeClient(e, n);
      return;
    }
    let s = this.redials.get(n) ?? y(t);
    if (s.wanted = !0, s.cadence !== t) s.attempts = 0, s.cadence = t;
    if (this.redials.set(n, s), s.timer) return;
    if (t === "transport" && s.attempts >= j) {
      this.context.logger.info(`[${this.context.serverName}] Giving up on ${e} after ${s.attempts} proactive redials`);
      return;
    }
    s.attempts += 1;
    let o = Y(t, s.attempts);
    s.timer = setTimeout(() => {
      if (s.timer = null, this.unwatchSockets && this.clients.get(e) === n && !this.context.isDisabled?.() && !n.isConnected() && !this.dialing.has(n)) this.dial(e, n);
    }, o), s.timer.unref?.();
  }
  onSocketDead(e, n) {
    if (!this.unwatchSockets || this.clients.get(e) !== n) return;
    this.clearRedial(n), this.redials.set(n, y("dead")), this.refreshClients();
  }
  clearRedial(e) {
    let n = this.redials.get(e);
    if (n?.timer) clearTimeout(n.timer);
    this.redials.delete(e);
  }
  removeClient(e, n) {
    this.context.logger.info(`[${this.context.serverName}] Removing stale socket from pool: ${e}`), this.clearRedial(n), this.orphaned.delete(n), n.disconnect(), this.clients.delete(e);
    for (let [t, s] of this.tabRoutes.entries()) if (s === e) this.tabRoutes.delete(t);
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
    for (let n of this.clients.values()) n.setNotificationHandler(e);
  }
  async ensureConnected() {
    let {
      logger: logger_14,
      serverName: serverName_14
    } = this.context;
    await this.refreshClients();
    let t = [],
      s = [];
    for (let i of this.clients.values()) {
      if (i.isConnected()) {
        this.stragglers.delete(i);
        continue;
      }
      let r = this.stragglers.has(i),
        a = i.ensureConnected().then(c => {
          if (c) this.stragglers.delete(i);else this.stragglers.add(i);
          return c;
        }, () => (this.stragglers.add(i), !1));
      (r ? s : t).push(a);
    }
    if (await Promise.all(t), this.getConnectedClients().length === 0) await Promise.all(s);
    let o = this.getConnectedClients().length;
    if (o === 0) return logger_14.info(`[${serverName_14}] No connected sockets in pool`), !1;
    return logger_14.info(`[${serverName_14}] Socket pool: ${o} connected`), !0;
  }
  async callTool(e, n, t) {
    if (e === "tabs_context_mcp") return this.callTabsContext(n, t);
    let tabId = n.tabId;
    if (tabId !== void 0) {
      let i = this.tabRoutes.get(tabId);
      if (i) {
        let r = this.clients.get(i);
        if (r?.isConnected()) return r.callTool(e, n, t);
      }
    }
    let o = this.getConnectedClients();
    if (o.length === 0) throw new sR(`[${this.context.serverName}] No connected sockets available`);
    return o[0].callTool(e, n, t);
  }
  isConnected() {
    return this.getConnectedClients().length > 0;
  }
  disconnect() {
    if (this.generation += 1, this.refreshPromise = null, this.unwatchSockets?.(), this.unwatchSockets = null, this.scanTimer) clearTimeout(this.scanTimer), this.scanTimer = null;
    for (let e of this.clients.values()) this.clearRedial(e), e.disconnect();
    this.clients.clear(), this.tabRoutes.clear();
  }
  getConnectedClients() {
    return [...this.clients.values()].filter(item => item.isConnected());
  }
  async callTabsContext(e, n) {
    let {
        logger: logger_15,
        serverName: serverName_15
      } = this.context,
      o = this.getConnectedClients();
    if (o.length === 0) throw new sR(`[${serverName_15}] No connected sockets available`);
    if (o.length === 1) {
      let c = await o[0].callTool("tabs_context_mcp", e, n);
      return this.updateTabRoutes(c, this.getSocketPathForClient(o[0])), c;
    }
    let i = await Promise.allSettled(o.map(async item => {
        let result = await item.callTool("tabs_context_mcp", e, n),
          socketPath = this.getSocketPathForClient(item);
        return {
          result: result,
          socketPath: socketPath
        };
      })),
      r = [],
      a;
    this.tabRoutes.clear();
    for (let c of i) {
      if (c.status !== "fulfilled") {
        logger_15.info(`[${serverName_15}] tabs_context_mcp failed on one socket: ${c.reason}`);
        continue;
      }
      let {
        result: result_2,
        socketPath: socketPath_2
      } = c.value;
      this.updateTabRoutes(result_2, socketPath_2);
      let l = this.extractTabs(result_2);
      if (l) for (let h of l) r.push(h);
      if (a === void 0) a = this.extractTabGroupId(result_2);
    }
    if (r.length > 0) return Q(r, a);
    for (let c of i) if (c.status === "fulfilled") return c.value.result;
    throw new sR(`[${serverName_15}] All sockets failed for tabs_context_mcp`);
  }
  updateTabRoutes(e, n) {
    let t = this.extractTabs(e);
    if (!t) return;
    for (let s of t) if (typeof s === "object" && s !== null && "tabId" in s) {
      let tabId_2 = s.tabId;
      this.tabRoutes.set(tabId_2, n);
    }
  }
  extractTabs(e) {
    if (!e || typeof e !== "object") return null;
    let t = e.result?.content;
    if (!t || !Array.isArray(t)) return null;
    for (let s of t) if (s.type === "text" && s.text) try {
      let o = JSON.parse(s.text);
      if (Array.isArray(o)) return o;
      let i = o;
      if (i && Array.isArray(i.availableTabs)) return i.availableTabs;
    } catch {}
    return null;
  }
  extractTabGroupId(e) {
    if (!e || typeof e !== "object") return;
    let t = e.result?.content;
    if (!t || !Array.isArray(t)) return;
    for (let s of t) if (s.type === "text" && s.text) try {
      let o = JSON.parse(s.text);
      if (typeof o.tabGroupId === "number") return o.tabGroupId;
    } catch {}
    return;
  }
  getSocketPathForClient(e) {
    for (let [n, t] of this.clients.entries()) if (t === e) return n;
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
        logger: logger_16,
        serverName: serverName_16
      } = this.context,
      generation_2 = this.generation,
      s;
    try {
      s = (await this.context.getSocketPaths?.()) ?? [];
    } catch (error) {
      logger_16.info(`[${serverName_16}] Socket scan failed:`, error);
      return;
    }
    if (generation_2 !== this.generation) return;
    for (let socketPath_3 of s) if (!this.clients.has(socketPath_3)) {
      logger_16.info(`[${serverName_16}] Adding socket to pool: ${socketPath_3}`);
      let i = {
          ...this.context,
          socketPath: socketPath_3,
          getSocketPath: void 0,
          getSocketPaths: void 0
        },
        r = cOn(i);
      if (r.disableAutoReconnect = !0, r.onRedialWanted = a => a === "dead" ? this.onSocketDead(socketPath_3, r) : this.onRedialWanted(socketPath_3, r, a === "peer_dropped" ? "not_ready" : "transport"), this.notificationHandler) r.setNotificationHandler(this.notificationHandler);
      this.clients.set(socketPath_3, r);
    }
    for (let [o, i] of this.clients.entries()) if (s.includes(o)) this.orphaned.delete(i);else if (i.isConnected()) this.orphaned.add(i);else this.removeClient(o, i);
  }
}
function T(e) {
  return new I(e);
}
var R = new Map(),
  E = "frontLoadedTabGroupId",
  Z = [E, "isBridgeTimeout", "isFrontLoadBoundExceeded"];
function D(e) {
  return htt.filter(item => (e.bridgeConfig !== void 0 || !Sao.has(item.name)) && !e.excludedTools?.has(item.name));
}
function cio(e) {
  return e.bridgeConfig ? b(e) : e.getSocketPaths ? T(e) : cOn(e);
}
function Dxn(e, n) {
  let {
      serverName: t,
      logger: logger_17
    } = e,
    o = n ?? cio(e),
    i = new C7({
      name: t,
      version: "1.0.0"
    }, {
      capabilities: {
        tools: {
          listChanged: !0
        },
        logging: {}
      }
    });
  return i.setRequestHandler(D7, () => {
    if (e.isDisabled?.()) return {
      tools: []
    };
    let r = wao(e.askUserToolName);
    return {
      tools: [...D(e).map(item => item.name === "list_connected_browsers" ? {
        ...item,
        description: `${item.description} ${r}`
      } : item), ...(e.hostTools?.() ?? [])]
    };
  }), i.setRequestHandler(RG, async r => {
    logger_17.info(`[${t}] Executing tool: ${Fwe(r.params.name)}`);
    let a = e.getRendererSessionScope?.(r.params._meta),
      c = a ? {
        permissionMode: "ask",
        sessionScope: {
          ...a,
          tabGroupId: R.get(a.sessionId)
        }
      } : void 0,
      result_3 = await q9t(e, o, r.params.name, r.params.arguments || {}, c);
    if (a && !result_3.isError) {
      let u = result_3._meta?.[E],
        l = typeof u === "number" ? u : r.params.name === "tabs_context_mcp" ? iTt({
          result: result_3
        }).tabGroupId : void 0;
      if (l !== void 0) R.set(a.sessionId, l);
    }
    if (result_3._meta) for (let u of Z) delete result_3._meta[u];
    return result_3;
  }), o.setNotificationHandler(r => {
    logger_17.info(`[${t}] Forwarding MCP notification: ${Fwe(r.method)}`), i.notification({
      method: r.method,
      params: r.params
    }).catch(a => {
      logger_17.info(`[${t}] Failed to forward MCP notification: ${a.message}`);
    });
  }), i;
}
export { cio, Dxn };