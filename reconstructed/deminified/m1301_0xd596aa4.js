// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { c, ue, hr, Cj } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { te } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { uK } from "B:/~BUN/root/chunk-zksmb712.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { qd } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Nn } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { gt, b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { S3n } from "B:/~BUN/root/chunk-dv435n4g.js";
import { Ue, St } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { SC, wC } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { aY } from "B:/~BUN/root/chunk-4h4gje25.js";
import { ci, pr } from "B:/~BUN/root/chunk-1rjcv085.js";
import { MDr } from "B:/~BUN/root/chunk-hjery5bx.js";
import { jd, k6 } from "B:/~BUN/root/chunk-f6h9k5ss.js";
import { PE, oEe, ZP, sEe, XA, JA, oz, Sf, FT, Irn, Di } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { LXr, Dtr, NXr, HXr, FXr, tqt, Ltr, $Xr, iL, UXr, BXr, Ntr, Bkn, Htr, Uje } from "B:/~BUN/root/chunk-myd8edm1.js";
import { koe, HSt } from "B:/~BUN/root/chunk-k7mv1tkq.js";
import { LVt, NVt, HVt, mQe, vIe } from "B:/~BUN/root/chunk-4zjf9ss8.js";
import { mU } from "B:/~BUN/root/chunk-ap9x1xq2.js";
import { DSe } from "B:/~BUN/root/chunk-2yea34mb.js";
import { Aoe } from "B:/~BUN/root/chunk-y1yq0gxq.js";
import { o, E, Wne, u, $e, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { UD } from "B:/~BUN/root/chunk-zhkdb3ds.js";
import { hostname as Ie } from "os";
class J {
  transport;
  announced;
  now;
  random;
  onEvent;
  onTransportEvent;
  started = !1;
  stopping = !1;
  timers = Ntr(Ltr);
  lastAckAt = 0;
  reconnectAttempts = 0;
  consecutiveSlotContention = 0;
  lastFailureWasContention = !1;
  contentionBackoffNotified = !1;
  consecutivePongTimeouts = 0;
  keepaliveTimer;
  reconnectTimer;
  stableTimer;
  reannounce = {
    phase: "idle"
  };
  constructor(e) {
    this.transport = e.transport, this.announced = e.announced, this.onEvent = e.onEvent, this.onTransportEvent = e.onTransportEvent, this.now = e.now ?? Date.now, this.random = e.random ?? Math.random, this.transport.onevent = this.handleTransportEvent;
  }
  start() {
    if (this.started) return;
    this.started = !0, this.openConnection();
  }
  async stop() {
    this.stopping = !0, this.clearReconnectTimer(), this.clearConnectionTimers(), this.cancelReannounce(), await this.transport.close();
  }
  requestReannounce(reason) {
    if (!this.started || this.stopping) return;
    let n = tqt[reason];
    switch (this.reannounce.phase) {
      case "draining":
      case "rotating":
        return;
      case "coalescing":
        if (this.reannounce.fireAt <= this.now() + n) return;
        clearTimeout(this.reannounce.timer);
        break;
      case "idle":
        break;
    }
    this.reannounce = {
      phase: "coalescing",
      reason: reason,
      fireAt: this.now() + n,
      timer: setTimeout(this.beginReannounce, n)
    };
  }
  getReconnectAttempts() {
    return this.reconnectAttempts;
  }
  getConsecutiveSlotContention() {
    return this.consecutiveSlotContention;
  }
  getConsecutivePongTimeouts() {
    return this.consecutivePongTimeouts;
  }
  handleTransportEvent = e => {
    switch (this.notifyTransportListener(e), e.kind) {
      case "authenticated":
        this.handleAuthenticated(e.protocolVersion, e.timings);
        return;
      case "hb_ack":
        this.handleAck();
        return;
      case "rejected":
        {
          let reason_2 = this.endRotation(),
            r = reason_2 !== void 0 && e.reason === "duplicate_device_id";
          if (r) this.emit({
            kind: "reannounce_contended",
            reason: reason_2
          });else if (e.slotContention) this.lastFailureWasContention = !0;
          this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect(r);
          return;
        }
      case "closed":
        if (e.superseded) this.lastFailureWasContention = !0;
        this.endRotation(), this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect();
        return;
      case "handshake_timeout":
      case "dial_failed":
      case "token_unavailable":
        this.endRotation(), this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect();
        return;
      case "transport_closed":
        this.stopping = !0, this.clearReconnectTimer(), this.clearConnectionTimers(), this.cancelReannounce();
        return;
      case "connecting":
      case "socket_error":
      case "inbound_unknown":
      case "inbound_invalid":
      case "outbound_dropped":
        return;
    }
  };
  async openConnection() {
    if (this.stopping) return;
    try {
      await this.transport.openConnection();
    } catch (error) {
      t(`[deviceBridge] open connection failed: ${te(error).message}`), this.endRotation(), this.scheduleReconnect();
    }
  }
  handleAuthenticated(protocolVersion, n) {
    if (this.stopping) return;
    if (this.timers = Ntr(n), this.lastAckAt = this.now(), this.clearKeepaliveTimer(), this.endRotation() === void 0 || this.stableTimer === void 0) this.clearStableTimer(), this.stableTimer = setTimeout(this.markStable, HXr);
    if (this.announced.hasUnservedChange()) this.requestReannounce("connected_stale");
    if (protocolVersion < 1) {
      this.consecutivePongTimeouts = 0, this.emit({
        kind: "heartbeat_unsupported",
        protocolVersion: protocolVersion
      });
      return;
    }
    this.keepaliveTimer = setInterval(this.keepaliveTick, this.timers.keepaliveIntervalMs), this.sendHeartbeat();
  }
  handleAck() {
    if (this.lastAckAt = this.now(), this.consecutivePongTimeouts > 0) this.consecutivePongTimeouts = 0, this.reconnectAttempts = 0;
  }
  keepaliveTick = () => {
    if (!this.transport.isAuthenticated()) return;
    if (this.now() - this.lastAckAt > this.timers.pongTimeoutMs) {
      this.consecutivePongTimeouts++, this.emit({
        kind: "pong_timeout",
        consecutive: this.consecutivePongTimeouts
      }), this.cancelDrain(), this.clearConnectionTimers(), this.transport.disconnect(), this.scheduleReconnect();
      return;
    }
    this.sendHeartbeat();
  };
  sendHeartbeat() {
    this.transport.sendRaw(LXr);
  }
  markStable = () => {
    if (this.stableTimer = void 0, this.consecutiveSlotContention = 0, this.contentionBackoffNotified = !1, this.consecutivePongTimeouts === 0) this.reconnectAttempts = 0;
    this.emit({
      kind: "stabilized"
    });
  };
  scheduleReconnect(e = !1) {
    if (this.stopping || !this.started || this.reconnectTimer !== void 0) return;
    let delayMs = this.nextDelayMs(e);
    if (this.stopping) return;
    this.reconnectTimer = setTimeout(this.reconnect, delayMs), this.emit({
      kind: "reconnect_scheduled",
      delayMs: delayMs,
      attempt: this.reconnectAttempts,
      slotContention: this.consecutiveSlotContention > 0
    });
  }
  nextDelayMs(e) {
    let lastFailureWasContention = this.lastFailureWasContention;
    if (this.lastFailureWasContention = !1, e) return Bkn(0, 1, this.timers.slotContentionFastAttempts, this.random);
    if (lastFailureWasContention) {
      if (this.consecutiveSlotContention++, this.consecutiveSlotContention > this.timers.slotContentionFastAttempts && !this.contentionBackoffNotified) this.contentionBackoffNotified = !0, this.emit({
        kind: "slot_contention_backoff",
        consecutive: this.consecutiveSlotContention
      });
      return Bkn(0, this.consecutiveSlotContention, this.timers.slotContentionFastAttempts, this.random);
    }
    if (this.consecutiveSlotContention = 0, this.contentionBackoffNotified = !1, this.reconnectAttempts >= NXr) {
      this.reconnectAttempts = 0, this.emit({
        kind: "reconnect_exhausted"
      });
      try {
        this.transport.onerror?.(Error("Bridge unreachable"));
      } catch (error) {
        t(`[deviceBridge] transport onerror listener threw: ${te(error).message}`);
      }
    }
    let r = Bkn(this.reconnectAttempts, 0, this.timers.slotContentionFastAttempts, this.random);
    return this.reconnectAttempts++, r;
  }
  reconnect = () => {
    this.reconnectTimer = void 0, this.openConnection();
  };
  beginReannounce = () => {
    if (this.reannounce.phase !== "coalescing") return;
    let {
      reason: reason_3
    } = this.reannounce;
    if (this.reannounce = {
      phase: "idle"
    }, this.stopping) return;
    let inFlightAtStart = this.announced.inFlightCalls(),
      outcome = this.reannounceSkipOutcome();
    if (outcome !== void 0) {
      this.emit({
        kind: "reannounce",
        reason: reason_3,
        outcome: outcome,
        inFlightAtStart: inFlightAtStart,
        drainedMs: 0,
        drainTimedOut: !1
      });
      return;
    }
    let s = {
      phase: "draining",
      reason: reason_3,
      startedAt: this.now(),
      inFlightAtStart: inFlightAtStart,
      timer: setTimeout(this.handleDrainTimeout, this.timers.rotateDrainMaxMs)
    };
    this.reannounce = s, this.announced.whenIdle().then(() => this.rotate(s, !1), () => this.rotate(s, !1));
  };
  handleDrainTimeout = () => {
    if (this.reannounce.phase === "draining") this.rotate(this.reannounce, !0);
  };
  rotate(e, drainTimedOut) {
    if (this.reannounce !== e) return;
    if (clearTimeout(e.timer), this.reannounce = {
      phase: "idle"
    }, this.stopping) return;
    let outcome_2 = this.reannounceSkipOutcome() ?? "rotated";
    if (outcome_2 === "rotated") this.reannounce = {
      phase: "rotating",
      reason: e.reason
    };
    if (this.emit({
      kind: "reannounce",
      reason: e.reason,
      outcome: outcome_2,
      inFlightAtStart: e.inFlightAtStart,
      drainedMs: this.now() - e.startedAt,
      drainTimedOut: drainTimedOut
    }), this.reannounce.phase !== "rotating" || this.stopping) return;
    this.clearKeepaliveTimer(), this.transport.disconnect(), this.openConnection();
  }
  reannounceSkipOutcome() {
    if (!this.announced.hasUnservedChange()) return "already_served";
    if (!this.transport.isAuthenticated()) return "not_connected";
    return;
  }
  endRotation() {
    if (this.reannounce.phase !== "rotating") return;
    let {
      reason: reason_4
    } = this.reannounce;
    return this.reannounce = {
      phase: "idle"
    }, reason_4;
  }
  cancelDrain() {
    if (this.reannounce.phase !== "draining") return;
    let reannounce = this.reannounce;
    clearTimeout(reannounce.timer), this.reannounce = {
      phase: "idle"
    }, this.emit({
      kind: "reannounce",
      reason: reannounce.reason,
      outcome: "not_connected",
      inFlightAtStart: reannounce.inFlightAtStart,
      drainedMs: this.now() - reannounce.startedAt,
      drainTimedOut: !1
    });
  }
  cancelReannounce() {
    switch (this.reannounce.phase) {
      case "coalescing":
      case "draining":
        clearTimeout(this.reannounce.timer);
        break;
      case "rotating":
      case "idle":
        break;
    }
    this.reannounce = {
      phase: "idle"
    };
  }
  emit(e) {
    try {
      this.onEvent?.(e);
    } catch (error) {
      t(`[deviceBridge] liveness event listener threw: ${te(error).message}`);
    }
  }
  notifyTransportListener(e) {
    try {
      this.onTransportEvent?.(e);
    } catch (error) {
      t(`[deviceBridge] transport event listener threw: ${te(error).message}`);
    }
  }
  clearReconnectTimer() {
    if (this.reconnectTimer === void 0) return;
    clearTimeout(this.reconnectTimer), this.reconnectTimer = void 0;
  }
  clearConnectionTimers() {
    this.clearKeepaliveTimer(), this.clearStableTimer();
  }
  clearKeepaliveTimer() {
    if (this.keepaliveTimer !== void 0) clearInterval(this.keepaliveTimer), this.keepaliveTimer = void 0;
  }
  clearStableTimer() {
    if (this.stableTimer !== void 0) clearTimeout(this.stableTimer), this.stableTimer = void 0;
  }
}
function se() {
  let e = new Map(),
    n,
    r = Me(),
    s = Q(e, n),
    a,
    l = g => {
      let v = Q(e, n),
        R = s;
      if (s = v, v.hash === R.hash) return;
      try {
        r.emit(g);
      } catch (error) {
        for (let T of error instanceof AggregateError ? error.errors : [error]) d(T);
      }
    };
  return {
    get: g => s.byName.get(g),
    setGroup(g, v, R = "tools_changed") {
      e.set(g, [...v]);
      let h = Q(e, n),
        T = s;
      if (s = h, h.dropped.length > 0 && b(h.dropped) !== b(T.dropped)) t(`[deviceBridge] duplicate device tool names not announced: ${b(h.dropped)}`);
      if (h.hash === T.hash) return;
      try {
        r.emit(R);
      } catch (error) {
        for (let k of error instanceof AggregateError ? error.errors : [error]) d(k);
      }
    },
    definitions: () => s.definitions,
    definitionsOf: g => (e.get(g) ?? []).flatMap(item => s.byName.get(item.definition.name) === item ? [item.definition] : []),
    serve() {
      return a = s.hash, s.definitions;
    },
    hasUnservedChange: () => a !== s.hash,
    subscribe: r.subscribe,
    withholdAllExcept(g, v) {
      n = v ? new Set(g) : void 0, l("tools_changed");
    }
  };
}
function Q(e, n) {
  let {
      byName: byName,
      dropped: dropped
    } = [...e.entries()].flatMap(([l, g]) => n === void 0 || n.has(l) ? g : []).reduce((acc, item) => {
      let v = item.definition.name;
      if (acc.byName.has(v)) acc.dropped.push(v);else acc.byName.set(v, item);
      return acc;
    }, {
      byName: new Map(),
      dropped: []
    }),
    definitions = [...byName.values()].map(item => item.definition);
  return {
    byName: byName,
    definitions: definitions,
    dropped: dropped,
    hash: UD(b(definitions))
  };
}
var Re = 0,
  W = 1,
  code = -32603,
  ae = Symbol("device-bridge-token-deadline"),
  id_2 = "__synthetic_init__",
  z = 33554432;
function De(e) {
  let n = new globalThis.WebSocket(e, {
    proxy: wC(e),
    tls: SC() || void 0
  });
  return n.binaryType = "arraybuffer", n;
}
class X {
  options;
  onclose;
  onerror;
  onmessage;
  onevent;
  started = !1;
  closing = !1;
  ws;
  pendingToken;
  authenticated = !1;
  connectGeneration = 0;
  handshakeTimer;
  negotiated;
  constructor(e) {
    this.options = e;
  }
  async start() {
    if (this.started) throw Error("DeviceBridgeTransport start can only be called once.");
    this.started = !0;
  }
  async close() {
    if (this.closing) return;
    this.closing = !0, this.disconnect(), this.emit({
      kind: "transport_closed"
    }), this.onclose?.();
  }
  async send(e) {
    if (Ce(e)) return;
    let ws = this.ws;
    if (!ws || !this.authenticated || ws.readyState !== W) {
      this.emit({
        kind: "outbound_dropped",
        messageType: Y(e) === void 0 ? "other" : "request"
      });
      return;
    }
    try {
      ws.send(b(e));
    } catch (error) {
      t(`[deviceBridge] outbound send failed: ${te(error).message}`), this.emit({
        kind: "outbound_dropped",
        messageType: Y(e) === void 0 ? "other" : "request"
      });
    }
  }
  sendRaw(e) {
    let ws_2 = this.ws;
    if (!ws_2 || ws_2.readyState !== W) return !1;
    try {
      ws_2.send(e);
    } catch (error) {
      return t(`[deviceBridge] raw send failed: ${te(error).message}`), !1;
    }
    return !0;
  }
  isAuthenticated() {
    return this.authenticated;
  }
  isConnected() {
    return this.ws !== void 0;
  }
  getNegotiated() {
    return this.negotiated;
  }
  async openConnection() {
    if (this.closing || this.ws) return;
    let e = ++this.connectGeneration,
      n = await this.resolveAccessToken();
    if (e !== this.connectGeneration || this.closing || this.ws !== void 0) return;
    if (!n) {
      this.emit({
        kind: "token_unavailable"
      });
      return;
    }
    let r, s;
    try {
      r = this.options.getUrl(), s = (this.options.isAllowedUrl ?? S3n)(r);
    } catch (l) {
      this.emit({
        kind: "dial_failed",
        error: te(l)
      });
      return;
    }
    if (!s) {
      t("[deviceBridge] refusing dial: bridge URL failed validation"), this.emit({
        kind: "dial_failed",
        error: Error("bridge URL failed validation")
      });
      return;
    }
    let a;
    try {
      a = (this.options.createSocket ?? De)(r);
    } catch (l) {
      this.emit({
        kind: "dial_failed",
        error: te(l)
      });
      return;
    }
    if (this.ws = a, this.pendingToken = n, this.handshakeTimer = setTimeout(this.handleHandshakeTimeout, Dtr), a.addEventListener("open", this.handleOpen), a.addEventListener("message", this.handleMessage), a.addEventListener("close", this.handleClose), a.addEventListener("error", this.handleSocketError), this.emit({
      kind: "connecting"
    }), this.closing || this.ws !== a) return;
    if (a.readyState === W) this.handleOpen();
  }
  async resolveAccessToken() {
    let e;
    try {
      let n = await Promise.race([Promise.resolve(this.options.getAccessToken()), new Promise(r => {
        e = setTimeout(s => s(ae), Dtr, r);
      })]);
      if (n === ae) {
        t("[deviceBridge] access token resolution timed out");
        return;
      }
      return n;
    } catch (error) {
      t(`[deviceBridge] access token resolution failed: ${te(error).message}`);
      return;
    } finally {
      if (e !== void 0) clearTimeout(e);
    }
  }
  disconnect() {
    this.connectGeneration++, this.clearHandshakeTimer(), this.pendingToken = void 0, this.authenticated = !1, this.negotiated = void 0;
    let ws_3 = this.ws;
    if (!ws_3) return;
    if (this.ws = void 0, ws_3.removeEventListener("open", this.handleOpen), ws_3.removeEventListener("message", this.handleMessage), ws_3.removeEventListener("close", this.handleClose), ws_3.removeEventListener("error", this.handleSocketError), ws_3.readyState === W || ws_3.readyState === Re) try {
      ws_3.close();
    } catch (error) {
      t(`[deviceBridge] socket close failed: ${te(error).message}`);
    }
  }
  emit(e) {
    try {
      this.onevent?.(e);
    } catch (error) {
      t(`[deviceBridge] transport event listener threw: ${te(error).message}`);
    }
  }
  clearHandshakeTimer() {
    if (this.handshakeTimer === void 0) return;
    clearTimeout(this.handshakeTimer), this.handshakeTimer = void 0;
  }
  handleHandshakeTimeout = () => {
    if (this.handshakeTimer = void 0, !this.ws || this.authenticated) return;
    this.disconnect(), this.emit({
      kind: "handshake_timeout"
    });
  };
  handleOpen = () => {
    let ws_4 = this.ws,
      n = this.pendingToken;
    if (!ws_4 || n === void 0) return;
    this.pendingToken = void 0;
    try {
      ws_4.send(b(UXr({
        oauthToken: n,
        tools: this.options.getTools(),
        deviceId: this.options.getDeviceId?.(),
        sessionId: this.options.getSessionId()
      })));
    } catch (r) {
      this.disconnect(), this.emit({
        kind: "dial_failed",
        error: te(r)
      });
    }
  };
  handleMessage = e => {
    let n = Oe(e.data);
    if (n.kind === "unsupported") {
      t("[deviceBridge] dropping unsupported inbound payload type"), this.emit({
        kind: "inbound_invalid",
        error: Error("unsupported inbound payload type")
      });
      return;
    }
    if (n.kind === "oversize") {
      t(`[deviceBridge] dropping ${n.size}-unit inbound frame (cap ${z})`), this.emit({
        kind: "inbound_invalid",
        error: Error("inbound frame exceeded the device bridge size cap")
      });
      return;
    }
    let r = BXr(n.text);
    switch (r.kind) {
      case "ignored":
        if (this.authenticated) t("[deviceBridge] dropping unparseable inbound frame"), this.emit({
          kind: "inbound_invalid",
          error: Error("unparseable inbound frame")
        });
        return;
      case "hb_ack":
        this.emit({
          kind: "hb_ack"
        });
        return;
      case "error":
        this.handleReject(r.reason, r.status, r.detail);
        return;
      case "connected":
        this.authenticate(r.protocolVersion, r.timings);
        return;
      case "unknown":
        this.emit({
          kind: "inbound_unknown",
          frameType: r.frameType
        });
        return;
      case "rpc":
        this.deliver(r.message);
        return;
    }
  };
  authenticate(protocolVersion_2, timings) {
    if (this.authenticated) return;
    if (this.clearHandshakeTimer(), this.authenticated = !0, this.negotiated = {
      protocolVersion: protocolVersion_2,
      timings: timings
    }, this.emit({
      kind: "authenticated",
      protocolVersion: protocolVersion_2,
      timings: timings
    }), this.closing || this.ws === void 0) return;
    this.injectSyntheticInitialize();
  }
  injectSyntheticInitialize() {
    let e;
    try {
      e = this.options.parseMessage(we());
    } catch (n) {
      this.emit({
        kind: "inbound_invalid",
        error: te(n)
      });
      return;
    }
    try {
      this.onmessage?.(e);
    } catch (n) {
      this.emit({
        kind: "inbound_invalid",
        error: te(n)
      });
    }
  }
  handleReject(reason_5, status, detail) {
    let s = !this.authenticated;
    this.disconnect(), this.emit({
      kind: "rejected",
      phase: s ? "pre_auth" : "post_auth",
      reason: reason_5,
      status: status,
      detail: detail,
      slotContention: s && $Xr(reason_5)
    });
  }
  deliver(e) {
    if (!this.authenticated) return;
    let n;
    try {
      n = this.options.parseMessage(e);
    } catch (r) {
      this.emit({
        kind: "inbound_invalid",
        error: te(r)
      }), this.replyInternalError(e);
      return;
    }
    try {
      this.onmessage?.(n);
    } catch (r) {
      this.emit({
        kind: "inbound_invalid",
        error: te(r)
      }), this.replyInternalError(e);
    }
  }
  replyInternalError(e) {
    let id = Y(e);
    if (id === void 0) return;
    this.sendRaw(b({
      jsonrpc: "2.0",
      id: id,
      error: {
        code: code,
        message: "internal error"
      }
    }));
  }
  handleClose = e => {
    let phase = this.authenticated ? "post_auth" : "pre_auth",
      code_2 = typeof e.code === "number" ? e.code : void 0,
      reason_6 = typeof e.reason === "string" ? e.reason : void 0;
    this.disconnect(), this.emit({
      kind: "closed",
      phase: phase,
      code: code_2,
      reason: reason_6,
      superseded: code_2 === FXr
    });
  };
  handleSocketError = () => {
    this.emit({
      kind: "socket_error"
    });
  };
}
function we() {
  return {
    jsonrpc: "2.0",
    id: id_2,
    method: "initialize",
    params: {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: {
        name: "remote-tools-bridge",
        version: "1.0.0"
      }
    }
  };
}
function Ce(e) {
  return "id" in e && e.id === id_2 && ("result" in e || "error" in e);
}
var Ae = f(() => u({
  jsonrpc: A("2.0"),
  id: $e([o(), E()]),
  method: o(),
  result: Wne().optional(),
  error: Wne().optional()
}));
function Y(e) {
  let n = Ae().safeParse(e);
  return n.success ? n.data.id : void 0;
}
function Oe(text) {
  if (typeof text === "string") return text.length > z ? {
    kind: "oversize",
    size: text.length
  } : {
    kind: "text",
    text: text
  };
  if (text instanceof ArrayBuffer) return text.byteLength > z ? {
    kind: "oversize",
    size: text.byteLength
  } : {
    kind: "text",
    text: Buffer.from(text).toString("utf8")
  };
  if (ArrayBuffer.isView(text)) return text.byteLength > z ? {
    kind: "oversize",
    size: text.byteLength
  } : {
    kind: "text",
    text: Buffer.from(text.buffer, text.byteOffset, text.byteLength).toString("utf8")
  };
  return {
    kind: "unsupported"
  };
}
function le(e) {
  return {
    policy: e.policy,
    get description() {
      return e.description;
    },
    onRedescribed: e.onRedescribed,
    heldServedCall: e.heldServedCall,
    deps: e.deps
  };
}
function pe(e) {
  let n = () => b([e.definitionsOf(mQe), e.definitionsOf(vIe)]);
  return {
    native: () => e.definitionsOf(mQe).flatMap(Pe),
    passthrough: () => e.definitionsOf(vIe).flatMap(ce),
    localNameFor: r => e.definitionsOf(vIe).filter(item => item.name === r).flatMap(ce)[0]?.local_name,
    subscribe: r => {
      let s = n();
      return e.subscribe(a => {
        let l = n();
        if (l !== s) s = l, r(a);
      });
    }
  };
}
function Pe(e) {
  let n = Irn(e._meta?.[FT]);
  return n === void 0 ? [] : [{
    name: e.name,
    refused_input_fields: n.refused_input_fields,
    protocol_versions: n.protocol_versions ?? [Sf],
    description: e.description,
    input_schema: e.inputSchema
  }];
}
function ce(e) {
  let n = HSt(e._meta?.[koe]);
  if (n === void 0) return [];
  let annotations = Be(e.annotations ?? {}),
    hints = Le(e._meta ?? {});
  return [{
    name: e.name,
    local_name: n.tool,
    description: e.description,
    input_schema: e.inputSchema,
    ...(annotations !== void 0 && {
      annotations: annotations
    }),
    ...(hints !== void 0 && {
      hints: hints
    })
  }];
}
function Be({
  title: title,
  readOnlyHint: readOnlyHint,
  destructiveHint: destructiveHint,
  openWorldHint: openWorldHint
}) {
  let a = {
    ...(title !== void 0 && {
      title: title
    }),
    ...(readOnlyHint !== void 0 && {
      readOnlyHint: readOnlyHint
    }),
    ...(destructiveHint !== void 0 && {
      destructiveHint: destructiveHint
    }),
    ...(openWorldHint !== void 0 && {
      openWorldHint: openWorldHint
    })
  };
  return Object.keys(a).length > 0 ? a : void 0;
}
function Le(e) {
  let search_hint = e[iL.searchHint],
    r = e[iL.alwaysLoad],
    max_result_size_chars = e[iL.maxResultSizeChars],
    a = e[iL.requiresUserInteraction],
    l = {
      ...(typeof search_hint === "string" && {
        search_hint: search_hint
      }),
      ...(r === !0 && {
        always_load: !0
      }),
      ...(typeof max_result_size_chars === "number" && {
        max_result_size_chars: max_result_size_chars
      }),
      ...(a === !0 && {
        requires_user_interaction: !0
      })
    };
  return Object.keys(l).length > 0 ? l : void 0;
}
var xe = "wss://bridge.claudeusercontent.com",
  Ne = "wss://bridge-staging.claudeusercontent.com",
  he = 8,
  Fe = "served-bridge-trusted-devices",
  version = typeof {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  } < "u" ? {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.283",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-09-25T00:44:42Z",
    GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION : "unknown";
function Ge(e, n) {
  let r = Uje(e),
    s = Htr(pr(n).slice(-he), he);
  return s ? `${r}-cc-${s}` : r;
}
function je(e, n, r, s) {
  return `${e}/devices/${encodeURIComponent(n)}_${encodeURIComponent(r)}/${encodeURIComponent(s)}/bridge`;
}
function We(e, n) {
  let r, s;
  try {
    r = new URL(e), s = new URL(n);
  } catch {
    return !1;
  }
  let a = r.hostname === "localhost" || r.hostname === "127.0.0.1" || r.hostname === "[::1]";
  return r.origin === s.origin && r.username === "" && r.password === "" && (r.protocol === "wss:" || r.protocol === "ws:" && a);
}
function ze() {
  if (Nn.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0) return Nn.CLAUDE_REMOTE_TOOLS_BRIDGE_URL;
  switch (uK()) {
    case "":
      return xe;
    case "-staging-oauth":
      return Ne;
    default:
      return;
  }
}
function vgt(options) {
  let transport = options.transport ?? (ZP() ? "bridge" : "auto"),
    r = !1,
    s,
    a,
    l,
    g,
    v = !1,
    R = !1,
    h = !1,
    T = new Set(),
    D = !1,
    k,
    registry,
    servingKit = {
      current: void 0
    },
    M = p => g ??= G(p),
    G = async p => {
      if (r = !0, a?.(), a = void 0, v) await started.catch(() => !1);
      s?.(), s = void 0, l?.(), l = void 0, await H(p);
    },
    H = async p => {
      let S = k;
      if (S === void 0) return;
      if (k = void 0, await S.stop(), R) i("tengu_device_bridge_stopped", {
        reason: c(p)
      });
    },
    j = async () => {
      let readiness = options.readiness ?? (await import("B:/~BUN/root/chunk-0qxd6asg.js")).createServingReadiness(),
        S = performance.now();
      await readiness.whenReady();
      let readiness_wait_ms = Math.round(performance.now() - S),
        V = await (options.isEnabled ?? jd)();
      if (v = !0, !V) return !1;
      let isEgressAllowed = options.isEgressAllowed ?? Aoe;
      if (!isEgressAllowed()) return t("[deviceBridge] skipped: non-essential egress disabled, non-first-party provider, or remote sessions policy-denied"), !1;
      if (r) return !1;
      if (transport === "bridge" && (options.isBridgeRefused ?? MDr)()) return t("[deviceBridge] skipped: the bridge cannot check a device proof and trusted devices are required or unknown"), h = !0, m("device_bridge_register", "trusted_devices_required_or_unknown"), options.onNotice?.(Fe, Di["serving_off.bridge_trusted_devices"]), !1;
      let C = await (options.getAccount ?? DSe)(),
        orgUuid = options.orgUuid;
      if (!orgUuid || C.status !== "resolved") return i("tengu_device_bridge_skipped", {
        missing_org: orgUuid === void 0,
        missing_account: C.status === "missing",
        account_mismatch: C.status === "mismatch"
      }), t(`[deviceBridge] skipped: ${orgUuid ? `account ${C.status}` : "no org"}`), !1;
      let {
          accountUuid: accountUuid
        } = C,
        limiter = NVt(LVt);
      if (registry = se(), registry.setGroup(HVt, []), await oEe(), r) return !1;
      let offReason = oz(void 0, {
        ignoringMute: !0
      });
      if (offReason === void 0 && O() === "windows") PE();
      let _e = options.toolGroupProviders ?? (await qe(offReason));
      if (r) return !1;
      l = Je(_e, {
        registry: registry,
        sessionId: options.sessionId,
        serving: {
          offReason: offReason
        },
        getDeviceId: options.getDeviceId ?? (() => {
          return;
        }),
        limiter: limiter,
        storageV5: options.storageV5,
        servedSettingsChanged: options.servedSettingsChanged,
        ...(options.deviceMcpQuestion && {
          deviceMcpQuestion: options.deviceMcpQuestion
        }),
        servingKit: servingKit,
        transport: transport,
        readiness: readiness,
        ...(options.dirSync !== void 0 && {
          dirSync: options.dirSync
        }),
        ...(options.folderRelation !== void 0 && {
          folderRelation: options.folderRelation
        }),
        onNotice: options.onNotice ?? ((L, Se) => {
          t(`[remote-tools] ${L}: ${Se}`);
        })
      });
      let registry_2 = registry;
      if (transport === "bridge") {
        if (k = await He({
          options: options,
          orgUuid: orgUuid,
          accountUuid: accountUuid,
          registry: registry_2,
          isEgressAllowed: isEgressAllowed,
          isStopped: () => r,
          onLivenessEvent: onLivenessEvent,
          onTransportEvent: onTransportEvent
        }), k === void 0 || r) return await k?.stop(), k = void 0, !1;
      }
      let ne = () => {
          if (!isEgressAllowed()) M("egress_denied");
        },
        be = options.isStillEnabled ?? (() => !k6()),
        ie = () => {
          if (!be()) t("[deviceBridge] stopping: the gate turned off"), M("gate_off");
        },
        Te = (options.onEgressGateChange ?? aY)(ne),
        ye = (options.onEnabledChange ?? qd)(ie),
        re = !1,
        oe = () => {
          let muted = (options.isMuted ?? XA)();
          if (muted !== re) re = muted, t(`[deviceBridge] serving ${muted ? "muted" : "unmuted"} by the emergency switch`), i("tengu_device_bridge_muted", {
            muted: muted
          });
          registry_2.withholdAllExcept([HVt], muted);
        },
        ke = (options.onMuteRecheck ?? JA)(oe);
      if (a = () => {
        Te(), ye(), ke();
      }, oe(), ne(), ie(), r) return !1;
      if (R = !0, i("tengu_device_bridge_started", {
        account_source: c(C.source),
        transport: c(transport),
        redial: !1,
        readiness_wait_ms: readiness_wait_ms
      }), transport === "auto" && !h) h = !0, _("device_bridge_register");
      return k?.start(), !0;
    },
    onTransportEvent = p => {
      if (p.kind === "authenticated") {
        if (T.clear(), D = !1, !h) h = !0, _("device_bridge_register");
        fe(p);
        return;
      }
      let S = Ke(p);
      if (S === void 0) return;
      if (T.has(S)) return;
      T.add(S), fe(p);
    },
    onLivenessEvent = p => {
      if (p.kind === "reconnect_exhausted") {
        if (!h) h = !0, m("device_bridge_register", "reconnect_exhausted");
        if (D) return;
        D = !0;
      }
      Ve(p);
    };
  s = (options.registerExitCleanup ?? gt)(() => M("exit"));
  let started = j().catch(p => {
      if (t(`[deviceBridge] registration failed: ${te(p).message}`), i("tengu_device_bridge_start_failed", {}), !h) h = !0, m("device_bridge_register", "start_failed");
      return !1;
    }),
    serving = started.then(p => p && registry !== void 0 && servingKit.current !== void 0 ? {
      kit: le(servingKit.current.kit),
      source: pe(registry)
    } : void 0);
  return started.then(p => {
    if (!p && !r) s?.(), s = void 0, l?.(), l = void 0;
  }), {
    started: started,
    announceSettled: () => {},
    serving: serving,
    stop: () => M("attach_ended"),
    heldServedCall: p => r || servingKit.current === void 0 ? mU : servingKit.current.kit.heldServedCall(p)
  };
}
async function He({
  options: options_2,
  orgUuid: orgUuid_2,
  accountUuid: accountUuid_2,
  registry: registry_3,
  isEgressAllowed: isEgressAllowed_2,
  isStopped: isStopped,
  onLivenessEvent: g,
  onTransportEvent: onTransportEvent_2
}) {
  let R = Ge((options_2.getHostname ?? Ie)(), options_2.sessionId),
    h = options_2.getBridgeBaseUrl !== void 0 || Nn.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0,
    T = (options_2.getBridgeBaseUrl ?? ze)();
  if (T === void 0) {
    t("[deviceBridge] skipped: no device bridge for this OAuth environment");
    return;
  }
  let D = je(T, orgUuid_2, accountUuid_2, R),
    {
      createDeviceMcpServer: createDeviceMcpServer,
      deviceInfoProbeTool: deviceInfoProbeTool,
      parseJsonRpcMessage: P
    } = await import("B:/~BUN/root/chunk-z2ekh5bm.js");
  if (isStopped()) return;
  let M = {
      getDeviceName: () => R,
      version: version
    },
    G = deviceInfoProbeTool(M),
    H = deviceInfoProbeTool({
      ...M,
      idle: !0
    }),
    j = y => {
      let C = registry_3.definitions().every(item => item.name === G.definition.name);
      registry_3.setGroup(HVt, [C ? H : G], y);
    };
  j();
  let K = registry_3.subscribe(j),
    x = () => {
      K(), registry_3.setGroup(HVt, []);
    },
    transport_2 = new X({
      getUrl: () => D,
      getAccessToken: () => options_2.getAccessToken(),
      getTools: () => Qe(registry_3),
      getDeviceId: options_2.getDeviceId,
      getSessionId: () => ci(options_2.sessionId),
      parseMessage: P,
      createSocket: options_2.createSocket,
      isAllowedUrl: y => isEgressAllowed_2() && (S3n(y) || h && We(y, T))
    }),
    {
      server: server,
      inFlightCalls: inFlightCalls,
      whenIdle: whenIdle
    } = createDeviceMcpServer({
      registry: registry_3,
      version: version,
      sessionId: options_2.sessionId
    });
  try {
    await server.connect(transport_2);
  } catch (error) {
    throw x(), error;
  }
  if (isStopped()) {
    x(), await server.close();
    return;
  }
  let F = new J({
      transport: transport_2,
      announced: {
        hasUnservedChange: registry_3.hasUnservedChange,
        inFlightCalls: inFlightCalls,
        whenIdle: whenIdle
      },
      onEvent: g,
      onTransportEvent: onTransportEvent_2
    }),
    Z = registry_3.subscribe(y => F.requestReannounce(y)),
    V;
  return {
    start: () => F.start(),
    stop: () => V ??= (async () => {
      Z(), x(), await Promise.allSettled([F.stop(), server.close()]);
    })()
  };
}
function Ke(e) {
  switch (e.kind) {
    case "rejected":
      return `rejected:${e.phase}:${e.reason ?? ""}:${e.status ?? ""}`;
    case "closed":
      return `closed:${e.phase}:${e.code ?? ""}:${e.superseded}`;
    case "token_unavailable":
    case "handshake_timeout":
    case "socket_error":
    case "dial_failed":
      return e.kind;
    default:
      return;
  }
}
function fe(e) {
  switch (e.kind) {
    case "authenticated":
      i("tengu_device_bridge_connected", {
        protocol_version: e.protocolVersion,
        hb_interval_ms: e.timings.hbIntervalMs,
        staleness_ms: e.timings.stalenessMs,
        rpc_timeout_ms: e.timings.rpcTimeoutMs
      });
      return;
    case "rejected":
      i("tengu_device_bridge_rejected", {
        phase: c(e.phase),
        reason: ue(e.reason),
        status: Cj(e.status),
        slot_contention: e.slotContention
      });
      return;
    case "closed":
      i("tengu_device_bridge_closed", {
        phase: c(e.phase),
        code: Cj(e.code),
        superseded: e.superseded
      });
      return;
    case "token_unavailable":
    case "handshake_timeout":
    case "socket_error":
      i("tengu_device_bridge_connect_failed", {
        cause: c(e.kind)
      });
      return;
    case "dial_failed":
      i("tengu_device_bridge_connect_failed", {
        cause: c("dial_failed")
      });
      return;
    default:
      return;
  }
}
function Ve(e) {
  switch (e.kind) {
    case "pong_timeout":
      i("tengu_device_bridge_pong_timeout", {
        consecutive: e.consecutive
      });
      return;
    case "reconnect_exhausted":
      i("tengu_device_bridge_reconnect_exhausted", {});
      return;
    case "heartbeat_unsupported":
      i("tengu_device_bridge_heartbeat_unsupported", {
        protocol_version: hr(e.protocolVersion)
      });
      return;
    case "reannounce":
      i("tengu_device_bridge_reannounce", {
        reason: c(e.reason),
        outcome: c(e.outcome),
        inflight_at_start: e.inFlightAtStart,
        drained_ms: e.drainedMs,
        drain_timed_out: e.drainTimedOut
      });
      return;
    case "reannounce_contended":
      i("tengu_device_bridge_reannounce_contended", {
        reason: c(e.reason)
      });
      return;
    default:
      return;
  }
}
async function qe(e) {
  if (e === void 0 || sEe(e)) try {
    let [{
      remoteToolServingGroupProvider: remoteToolServingGroupProvider
    }, {
      passthroughServingGroupProvider: passthroughServingGroupProvider
    }, {
      dirSyncServingGroupProvider: dirSyncServingGroupProvider
    }] = await Promise.all([import("B:/~BUN/root/chunk-9n7n49s1.js"), import("B:/~BUN/root/chunk-7mzgsf7h.js"), import("B:/~BUN/root/chunk-164rhrg8.js")]);
    return e === void 0 ? [remoteToolServingGroupProvider(), passthroughServingGroupProvider(), dirSyncServingGroupProvider()] : [remoteToolServingGroupProvider()];
  } catch (error) {
    d(te(error));
  }
  return [];
}
function Je(e, n) {
  let r = e.flatMap(item => {
    try {
      let a = item(n);
      return a ? [a] : [];
    } catch (error) {
      return d(te(error)), [];
    }
  });
  return () => r.forEach(item => {
    try {
      item();
    } catch (error) {
      d(te(error));
    }
  });
}
function Qe(e) {
  let n = e.hasUnservedChange(),
    r = e.serve();
  if (!n) return r;
  let s = r.map(item => item.name);
  return t(`[deviceBridge] connect frame announces ${r.length} tools: ${s.slice(0, 12).join(", ")}${s.length > 12 ? ", \u2026" : ""}`), i("tengu_device_bridge_connect_frame", {
    tool_count: r.length,
    serves_bash: s.includes(Ue),
    serves_powershell: s.includes(St),
    mcp_tool_count: U(s, a => a.includes("__"))
  }), r;
}
export { vgt };