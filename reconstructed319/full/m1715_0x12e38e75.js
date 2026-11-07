// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  Ee
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f,
  de,
  bo,
  x7
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  vj
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  ea
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Ar
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  vt,
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Ld,
  jn
} from "B:/~BUN/root/chunk-rr294jrm.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  NTo
} from "B:/~BUN/root/chunk-grwykqvw.js";
import {
  vC,
  BR
} from "B:/~BUN/root/chunk-wthaftk0.js";
import {
  IJ
} from "B:/~BUN/root/chunk-zn7b14jn.js";
import {
  uBt
} from "B:/~BUN/root/chunk-qfq22jk9.js";
import {
  Me
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  LCs
} from "B:/~BUN/root/chunk-w0nyevkg.js";
import {
  LYe,
  IUo
} from "B:/~BUN/root/chunk-s0f2pmzg.js";
import {
  GGi,
  JEs,
  VGi,
  KGi,
  qGi,
  QCr,
  QEs,
  YGi,
  Qq,
  XGi,
  JGi,
  ZEs,
  hyo,
  ZCr,
  rFt
} from "B:/~BUN/root/chunk-wxhfn3za.js";
import {
  vf,
  x1,
  oCr
} from "B:/~BUN/root/chunk-x6frvp1m.js";
import {
  JTe,
  R0n,
  WW,
  TJe,
  eX
} from "B:/~BUN/root/chunk-dcmvdxnm.js";
import {
  la
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  GOe,
  kSn
} from "B:/~BUN/root/chunk-4m01cdtr.js";
import {
  S2t
} from "B:/~BUN/root/chunk-0g4fsbt6.js";
import {
  A8n,
  x8n,
  vGr,
  E2t,
  fst
} from "B:/~BUN/root/chunk-6tytshr3.js";
import {
  IEt
} from "B:/~BUN/root/chunk-f8k1512b.js";
import {
  a8
} from "B:/~BUN/root/chunk-bpeb7mmy.js";
import {
  fre
} from "B:/~BUN/root/chunk-3e8b6pq9.js";
import {
  YIe
} from "B:/~BUN/root/chunk-an15mqdc.js";
import {
  kt
} from "B:/~BUN/root/chunk-86hj8bna.js";
import {
  o,
  E,
  hN,
  u,
  Be,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  WA
} from "B:/~BUN/root/chunk-tr26qctc.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  hostname as je
} from "os";
class Z {
  transport;
  announced;
  now;
  random;
  onEvent;
  onTransportEvent;
  started = !1;
  stopping = !1;
  timers = ZEs(QEs);
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
    this.transport = e.transport, this.announced = e.announced, this.onEvent = e.onEvent, this.onTransportEvent = e.onTransportEvent, this.now = e.now ?? Date.now, this.random = e.random ?? Math.random, this.transport.onevent = this.handleTransportEvent
  }
  start() {
    if (this.started) return;
    this.started = !0, this.openConnection()
  }
  async stop() {
    this.stopping = !0, this.clearReconnectTimer(), this.clearConnectionTimers(), this.cancelReannounce(), await this.transport.close()
  }
  requestReannounce(e) {
    if (!this.started || this.stopping) return;
    let n = QCr[e];
    switch (this.reannounce.phase) {
      case "draining":
      case "rotating":
        return;
      case "coalescing":
        if (this.reannounce.fireAt <= this.now() + n) return;
        clearTimeout(this.reannounce.timer);
        break;
      case "idle":
        break
    }
    this.reannounce = {
      phase: "coalescing",
      reason: e,
      fireAt: this.now() + n,
      timer: setTimeout(this.beginReannounce, n)
    }
  }
  getReconnectAttempts() {
    return this.reconnectAttempts
  }
  getConsecutiveSlotContention() {
    return this.consecutiveSlotContention
  }
  getConsecutivePongTimeouts() {
    return this.consecutivePongTimeouts
  }
  handleTransportEvent = (e) => {
    switch (this.notifyTransportListener(e), e.kind) {
      case "authenticated":
        this.handleAuthenticated(e.protocolVersion, e.timings);
        return;
      case "hb_ack":
        this.handleAck();
        return;
      case "rejected": {
        let n = this.endRotation(),
          i = n !== void 0 && e.reason === "duplicate_device_id";
        if (i) this.emit({
          kind: "reannounce_contended",
          reason: n
        });
        else if (e.slotContention) this.lastFailureWasContention = !0;
        this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect(i);
        return
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
        return
    }
  };
  async openConnection() {
    if (this.stopping) return;
    try {
      await this.transport.openConnection()
    } catch (e) {
      t(`[deviceBridge] open connection failed: ${F(e).message}`), this.endRotation(), this.scheduleReconnect()
    }
  }
  handleAuthenticated(e, n) {
    if (this.stopping) return;
    if (this.timers = ZEs(n), this.lastAckAt = this.now(), this.clearKeepaliveTimer(), this.endRotation() === void 0 || this.stableTimer === void 0) this.clearStableTimer(), this.stableTimer = setTimeout(this.markStable, KGi);
    if (this.announced.hasUnservedChange()) this.requestReannounce("connected_stale");
    if (e < 1) {
      this.consecutivePongTimeouts = 0, this.emit({
        kind: "heartbeat_unsupported",
        protocolVersion: e
      });
      return
    }
    this.keepaliveTimer = setInterval(this.keepaliveTick, this.timers.keepaliveIntervalMs), this.sendHeartbeat()
  }
  handleAck() {
    if (this.lastAckAt = this.now(), this.consecutivePongTimeouts > 0) this.consecutivePongTimeouts = 0, this.reconnectAttempts = 0
  }
  keepaliveTick = () => {
    if (!this.transport.isAuthenticated()) return;
    if (this.now() - this.lastAckAt > this.timers.pongTimeoutMs) {
      this.consecutivePongTimeouts++, this.emit({
        kind: "pong_timeout",
        consecutive: this.consecutivePongTimeouts
      }), this.cancelDrain(), this.clearConnectionTimers(), this.transport.disconnect(), this.scheduleReconnect();
      return
    }
    this.sendHeartbeat()
  };
  sendHeartbeat() {
    this.transport.sendRaw(GGi)
  }
  markStable = () => {
    if (this.stableTimer = void 0, this.consecutiveSlotContention = 0, this.contentionBackoffNotified = !1, this.consecutivePongTimeouts === 0) this.reconnectAttempts = 0;
    this.emit({
      kind: "stabilized"
    })
  };
  scheduleReconnect(e = !1) {
    if (this.stopping || !this.started || this.reconnectTimer !== void 0) return;
    let n = this.nextDelayMs(e);
    if (this.stopping) return;
    this.reconnectTimer = setTimeout(this.reconnect, n), this.emit({
      kind: "reconnect_scheduled",
      delayMs: n,
      attempt: this.reconnectAttempts,
      slotContention: this.consecutiveSlotContention > 0
    })
  }
  nextDelayMs(e) {
    let n = this.lastFailureWasContention;
    if (this.lastFailureWasContention = !1, e) return hyo(0, 1, this.timers.slotContentionFastAttempts, this.random);
    if (n) {
      if (this.consecutiveSlotContention++, this.consecutiveSlotContention > this.timers.slotContentionFastAttempts && !this.contentionBackoffNotified) this.contentionBackoffNotified = !0, this.emit({
        kind: "slot_contention_backoff",
        consecutive: this.consecutiveSlotContention
      });
      return hyo(0, this.consecutiveSlotContention, this.timers.slotContentionFastAttempts, this.random)
    }
    if (this.consecutiveSlotContention = 0, this.contentionBackoffNotified = !1, this.reconnectAttempts >= VGi) {
      this.reconnectAttempts = 0, this.emit({
        kind: "reconnect_exhausted"
      });
      try {
        this.transport.onerror?.(Error("Bridge unreachable"))
      } catch (r) {
        t(`[deviceBridge] transport onerror listener threw: ${F(r).message}`)
      }
    }
    let i = hyo(this.reconnectAttempts, 0, this.timers.slotContentionFastAttempts, this.random);
    return this.reconnectAttempts++, i
  }
  reconnect = () => {
    this.reconnectTimer = void 0, this.openConnection()
  };
  beginReannounce = () => {
    if (this.reannounce.phase !== "coalescing") return;
    let {
      reason: e
    } = this.reannounce;
    if (this.reannounce = {
        phase: "idle"
      }, this.stopping) return;
    let n = this.announced.inFlightCalls(),
      i = this.reannounceSkipOutcome();
    if (i !== void 0) {
      this.emit({
        kind: "reannounce",
        reason: e,
        outcome: i,
        inFlightAtStart: n,
        drainedMs: 0,
        drainTimedOut: !1
      });
      return
    }
    let r = {
      phase: "draining",
      reason: e,
      startedAt: this.now(),
      inFlightAtStart: n,
      timer: setTimeout(this.handleDrainTimeout, this.timers.rotateDrainMaxMs)
    };
    this.reannounce = r, this.announced.whenIdle().then(() => this.rotate(r, !1), () => this.rotate(r, !1))
  };
  handleDrainTimeout = () => {
    if (this.reannounce.phase === "draining") this.rotate(this.reannounce, !0)
  };
  rotate(e, n) {
    if (this.reannounce !== e) return;
    if (clearTimeout(e.timer), this.reannounce = {
        phase: "idle"
      }, this.stopping) return;
    let i = this.reannounceSkipOutcome() ?? "rotated";
    if (i === "rotated") this.reannounce = {
      phase: "rotating",
      reason: e.reason
    };
    if (this.emit({
        kind: "reannounce",
        reason: e.reason,
        outcome: i,
        inFlightAtStart: e.inFlightAtStart,
        drainedMs: this.now() - e.startedAt,
        drainTimedOut: n
      }), this.reannounce.phase !== "rotating" || this.stopping) return;
    this.clearKeepaliveTimer(), this.transport.disconnect(), this.openConnection()
  }
  reannounceSkipOutcome() {
    if (!this.announced.hasUnservedChange()) return "already_served";
    if (!this.transport.isAuthenticated()) return "not_connected";
    return
  }
  endRotation() {
    if (this.reannounce.phase !== "rotating") return;
    let {
      reason: e
    } = this.reannounce;
    return this.reannounce = {
      phase: "idle"
    }, e
  }
  cancelDrain() {
    if (this.reannounce.phase !== "draining") return;
    let e = this.reannounce;
    clearTimeout(e.timer), this.reannounce = {
      phase: "idle"
    }, this.emit({
      kind: "reannounce",
      reason: e.reason,
      outcome: "not_connected",
      inFlightAtStart: e.inFlightAtStart,
      drainedMs: this.now() - e.startedAt,
      drainTimedOut: !1
    })
  }
  cancelReannounce() {
    switch (this.reannounce.phase) {
      case "coalescing":
      case "draining":
        clearTimeout(this.reannounce.timer);
        break;
      case "rotating":
      case "idle":
        break
    }
    this.reannounce = {
      phase: "idle"
    }
  }
  emit(e) {
    try {
      this.onEvent?.(e)
    } catch (n) {
      t(`[deviceBridge] liveness event listener threw: ${F(n).message}`)
    }
  }
  notifyTransportListener(e) {
    try {
      this.onTransportEvent?.(e)
    } catch (n) {
      t(`[deviceBridge] transport event listener threw: ${F(n).message}`)
    }
  }
  clearReconnectTimer() {
    if (this.reconnectTimer === void 0) return;
    clearTimeout(this.reconnectTimer), this.reconnectTimer = void 0
  }
  clearConnectionTimers() {
    this.clearKeepaliveTimer(), this.clearStableTimer()
  }
  clearKeepaliveTimer() {
    if (this.keepaliveTimer !== void 0) clearInterval(this.keepaliveTimer), this.keepaliveTimer = void 0
  }
  clearStableTimer() {
    if (this.stableTimer !== void 0) clearTimeout(this.stableTimer), this.stableTimer = void 0
  }
}

function ae() {
  let e = new Map,
    n = De(),
    i = se(e),
    r;
  return {
    get: (s) => i.byName.get(s),
    setGroup(s, d, S = "tools_changed") {
      e.set(s, [...d]);
      let b = se(e),
        O = i;
      if (i = b, b.dropped.length > 0 && _(b.dropped) !== _(O.dropped)) t(`[deviceBridge] duplicate device tool names not announced: ${_(b.dropped)}`);
      if (b.hash === O.hash) return;
      try {
        n.emit(S)
      } catch (h) {
        for (let k of h instanceof AggregateError ? h.errors : [h]) a(k)
      }
    },
    definitions: () => i.definitions,
    definitionsOf: (s) => (e.get(s) ?? []).flatMap((d) => i.byName.get(d.definition.name) === d ? [d.definition] : []),
    serve() {
      return r = i.hash, i.definitions
    },
    hasUnservedChange: () => r !== i.hash,
    subscribe: n.subscribe
  }
}

function se(e) {
  let {
    byName: n,
    dropped: i
  } = [...e.values()].flat().reduce((s, d) => {
    let S = d.definition.name;
    if (s.byName.has(S)) s.dropped.push(S);
    else s.byName.set(S, d);
    return s
  }, {
    byName: new Map,
    dropped: []
  }), r = [...n.values()].map((s) => s.definition);
  return {
    byName: n,
    definitions: r,
    dropped: i,
    hash: WA(_(r))
  }
}
var Ce = 0,
  z = 1,
  Ae = -32603,
  ce = Symbol("device-bridge-token-deadline"),
  ue = "__synthetic_init__",
  K = 33554432;

function Oe(e) {
  let n = new globalThis.WebSocket(e, {
    proxy: BR(e),
    tls: vC(void 0) || void 0
  });
  return n.binaryType = "arraybuffer", n
}
class ne {
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
    this.options = e
  }
  async start() {
    if (this.started) throw Error("DeviceBridgeTransport start can only be called once.");
    this.started = !0
  }
  async close() {
    if (this.closing) return;
    this.closing = !0, this.disconnect(), this.emit({
      kind: "transport_closed"
    }), this.onclose?.()
  }
  async send(e) {
    if (Ie(e)) return;
    let n = this.ws;
    if (!n || !this.authenticated || n.readyState !== z) {
      this.emit({
        kind: "outbound_dropped",
        messageType: ee(e) === void 0 ? "other" : "request"
      });
      return
    }
    try {
      n.send(_(e))
    } catch (i) {
      t(`[deviceBridge] outbound send failed: ${F(i).message}`), this.emit({
        kind: "outbound_dropped",
        messageType: ee(e) === void 0 ? "other" : "request"
      })
    }
  }
  sendRaw(e) {
    let n = this.ws;
    if (!n || n.readyState !== z) return !1;
    try {
      n.send(e)
    } catch (i) {
      return t(`[deviceBridge] raw send failed: ${F(i).message}`), !1
    }
    return !0
  }
  isAuthenticated() {
    return this.authenticated
  }
  isConnected() {
    return this.ws !== void 0
  }
  getNegotiated() {
    return this.negotiated
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
      return
    }
    let i, r;
    try {
      i = this.options.getUrl(), r = (this.options.isAllowedUrl ?? NTo)(i)
    } catch (d) {
      this.emit({
        kind: "dial_failed",
        error: F(d)
      });
      return
    }
    if (!r) {
      t("[deviceBridge] refusing dial: bridge URL failed validation"), this.emit({
        kind: "dial_failed",
        error: Error("bridge URL failed validation")
      });
      return
    }
    let s;
    try {
      s = (this.options.createSocket ?? Oe)(i)
    } catch (d) {
      this.emit({
        kind: "dial_failed",
        error: F(d)
      });
      return
    }
    if (this.ws = s, this.pendingToken = n, this.handshakeTimer = setTimeout(this.handleHandshakeTimeout, JEs), s.addEventListener("open", this.handleOpen), s.addEventListener("message", this.handleMessage), s.addEventListener("close", this.handleClose), s.addEventListener("error", this.handleSocketError), this.emit({
        kind: "connecting"
      }), this.closing || this.ws !== s) return;
    if (s.readyState === z) this.handleOpen()
  }
  async resolveAccessToken() {
    let e;
    try {
      let n = await Promise.race([Promise.resolve(this.options.getAccessToken()), new Promise((i) => {
        e = setTimeout((r) => r(ce), JEs, i)
      })]);
      if (n === ce) {
        t("[deviceBridge] access token resolution timed out");
        return
      }
      if (n !== void 0 && uBt(n)) {
        t("[deviceBridge] the desktop app's sign-in is not sent to the bridge");
        return
      }
      return n
    } catch (n) {
      t(`[deviceBridge] access token resolution failed: ${F(n).message}`);
      return
    } finally {
      if (e !== void 0) clearTimeout(e)
    }
  }
  disconnect() {
    this.connectGeneration++, this.clearHandshakeTimer(), this.pendingToken = void 0, this.authenticated = !1, this.negotiated = void 0;
    let e = this.ws;
    if (!e) return;
    if (this.ws = void 0, e.removeEventListener("open", this.handleOpen), e.removeEventListener("message", this.handleMessage), e.removeEventListener("close", this.handleClose), e.removeEventListener("error", this.handleSocketError), e.readyState === z || e.readyState === Ce) try {
      e.close()
    } catch (n) {
      t(`[deviceBridge] socket close failed: ${F(n).message}`)
    }
  }
  emit(e) {
    try {
      this.onevent?.(e)
    } catch (n) {
      t(`[deviceBridge] transport event listener threw: ${F(n).message}`)
    }
  }
  clearHandshakeTimer() {
    if (this.handshakeTimer === void 0) return;
    clearTimeout(this.handshakeTimer), this.handshakeTimer = void 0
  }
  handleHandshakeTimeout = () => {
    if (this.handshakeTimer = void 0, !this.ws || this.authenticated) return;
    this.disconnect(), this.emit({
      kind: "handshake_timeout"
    })
  };
  handleOpen = () => {
    let e = this.ws,
      n = this.pendingToken;
    if (!e || n === void 0) return;
    this.pendingToken = void 0;
    try {
      e.send(_(XGi({
        oauthToken: n,
        tools: this.options.getTools(),
        deviceId: this.options.getDeviceId?.(),
        sessionId: this.options.getSessionId()
      })))
    } catch (i) {
      this.disconnect(), this.emit({
        kind: "dial_failed",
        error: F(i)
      })
    }
  };
  handleMessage = (e) => {
    let n = Le(e.data);
    if (n.kind === "unsupported") {
      t("[deviceBridge] dropping unsupported inbound payload type"), this.emit({
        kind: "inbound_invalid",
        error: Error("unsupported inbound payload type")
      });
      return
    }
    if (n.kind === "oversize") {
      t(`[deviceBridge] dropping ${n.size}-unit inbound frame (cap ${K})`), this.emit({
        kind: "inbound_invalid",
        error: Error("inbound frame exceeded the device bridge size cap")
      });
      return
    }
    let i = JGi(n.text);
    switch (i.kind) {
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
        this.handleReject(i.reason, i.status, i.detail);
        return;
      case "connected":
        this.authenticate(i.protocolVersion, i.timings);
        return;
      case "unknown":
        this.emit({
          kind: "inbound_unknown",
          frameType: i.frameType
        });
        return;
      case "rpc":
        this.deliver(i.message);
        return
    }
  };
  authenticate(e, n) {
    if (this.authenticated) return;
    if (this.clearHandshakeTimer(), this.authenticated = !0, this.negotiated = {
        protocolVersion: e,
        timings: n
      }, this.emit({
        kind: "authenticated",
        protocolVersion: e,
        timings: n
      }), this.closing || this.ws === void 0) return;
    this.injectSyntheticInitialize()
  }
  injectSyntheticInitialize() {
    let e;
    try {
      e = this.options.parseMessage(Pe())
    } catch (n) {
      this.emit({
        kind: "inbound_invalid",
        error: F(n)
      });
      return
    }
    try {
      this.onmessage?.(e)
    } catch (n) {
      this.emit({
        kind: "inbound_invalid",
        error: F(n)
      })
    }
  }
  handleReject(e, n, i) {
    let r = !this.authenticated;
    this.disconnect(), this.emit({
      kind: "rejected",
      phase: r ? "pre_auth" : "post_auth",
      reason: e,
      status: n,
      detail: i,
      slotContention: r && YGi(e)
    })
  }
  deliver(e) {
    if (!this.authenticated) return;
    let n;
    try {
      n = this.options.parseMessage(e)
    } catch (i) {
      this.emit({
        kind: "inbound_invalid",
        error: F(i)
      }), this.replyInternalError(e);
      return
    }
    try {
      this.onmessage?.(n)
    } catch (i) {
      this.emit({
        kind: "inbound_invalid",
        error: F(i)
      }), this.replyInternalError(e)
    }
  }
  replyInternalError(e) {
    let n = ee(e);
    if (n === void 0) return;
    this.sendRaw(_({
      jsonrpc: "2.0",
      id: n,
      error: {
        code: Ae,
        message: "internal error"
      }
    }))
  }
  handleClose = (e) => {
    let n = this.authenticated ? "post_auth" : "pre_auth",
      i = typeof e.code === "number" ? e.code : void 0,
      r = typeof e.reason === "string" ? e.reason : void 0;
    this.disconnect(), this.emit({
      kind: "closed",
      phase: n,
      code: i,
      reason: r,
      superseded: i === qGi
    })
  };
  handleSocketError = () => {
    this.emit({
      kind: "socket_error"
    })
  }
}

function Pe() {
  return {
    jsonrpc: "2.0",
    id: ue,
    method: "initialize",
    params: {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: {
        name: "remote-tools-bridge",
        version: "1.0.0"
      }
    }
  }
}

function Ie(e) {
  return "id" in e && e.id === ue && (("result" in e) || ("error" in e))
}
var xe = p(() => u({
  jsonrpc: T("2.0"),
  id: Be([o(), E()]),
  method: o(),
  result: hN().optional(),
  error: hN().optional()
}));

function ee(e) {
  let n = xe().safeParse(e);
  return n.success ? n.data.id : void 0
}

function Le(e) {
  if (typeof e === "string") return e.length > K ? {
    kind: "oversize",
    size: e.length
  } : {
    kind: "text",
    text: e
  };
  if (e instanceof ArrayBuffer) return e.byteLength > K ? {
    kind: "oversize",
    size: e.byteLength
  } : {
    kind: "text",
    text: Buffer.from(e).toString("utf8")
  };
  if (ArrayBuffer.isView(e)) return e.byteLength > K ? {
    kind: "oversize",
    size: e.byteLength
  } : {
    kind: "text",
    text: Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8")
  };
  return {
    kind: "unsupported"
  }
}

function pe(e) {
  return {
    policy: e.policy,
    get description() {
      return e.description
    },
    onRedescribed: e.onRedescribed,
    heldServedCall: e.heldServedCall,
    ensureSettingsHeld: e.ensureSettingsHeld,
    deps: e.deps
  }
}

function he(e) {
  let n = () => _([e.definitionsOf(E2t), e.definitionsOf(fst)]);
  return {
    native: () => e.definitionsOf(E2t).flatMap(Ne),
    passthrough: () => e.definitionsOf(fst).flatMap(le),
    localNameFor: (i) => e.definitionsOf(fst).filter((r) => r.name === i).flatMap(le)[0]?.local_name,
    subscribe: (i) => {
      let r = n();
      return e.subscribe((s) => {
        let d = n();
        if (d !== r) r = d, i(s)
      })
    }
  }
}

function Ne(e) {
  let n = oCr(e._meta?.[x1]);
  return n === void 0 ? [] : [{
    name: e.name,
    refused_input_fields: n.refused_input_fields,
    protocol_versions: n.protocol_versions ?? [vf],
    description: e.description,
    input_schema: e.inputSchema
  }]
}

function le(e) {
  let n = kSn(e._meta?.[GOe]);
  if (n === void 0) return [];
  let i = Ue(e.annotations ?? {}),
    r = Fe(e._meta ?? {});
  return [{
    name: e.name,
    local_name: n.tool,
    description: e.description,
    input_schema: e.inputSchema,
    ...i !== void 0 && {
      annotations: i
    },
    ...r !== void 0 && {
      hints: r
    }
  }]
}

function Ue({
  title: e,
  readOnlyHint: n,
  destructiveHint: i,
  openWorldHint: r
}) {
  let s = {
    ...e !== void 0 && {
      title: e
    },
    ...n !== void 0 && {
      readOnlyHint: n
    },
    ...i !== void 0 && {
      destructiveHint: i
    },
    ...r !== void 0 && {
      openWorldHint: r
    }
  };
  return Object.keys(s).length > 0 ? s : void 0
}

function Fe(e) {
  let n = e[Qq.searchHint],
    i = e[Qq.alwaysLoad],
    r = e[Qq.maxResultSizeChars],
    s = e[Qq.requiresUserInteraction],
    d = {
      ...typeof n === "string" && {
        search_hint: n
      },
      ...i === !0 && {
        always_load: !0
      },
      ...typeof r === "number" && {
        max_result_size_chars: r
      },
      ...s === !0 && {
        requires_user_interaction: !0
      }
    };
  return Object.keys(d).length > 0 ? d : void 0
}
var He = "wss://bridge.claudeusercontent.com",
  We = "wss://bridge-staging.claudeusercontent.com",
  fe = 8,
  $e = "served-bridge-trusted-devices",
  ve = typeof {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  } < "u" ? {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.319",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-11-05T18:14:18Z",
    GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
    HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "win32"
  }.VERSION : "unknown";

function ze(e, n) {
  let i = rFt(e),
    r = ZCr(jn(n).slice(-fe), fe);
  return r ? `${i}-cc-${r}` : i
}

function Ke(e, n, i, r) {
  return `${e}/devices/${encodeURIComponent(n)}_${encodeURIComponent(i)}/${encodeURIComponent(r)}/bridge`
}

function Ve(e, n) {
  let i, r;
  try {
    i = new URL(e), r = new URL(n)
  } catch {
    return !1
  }
  let s = i.hostname === "localhost" || i.hostname === "127.0.0.1" || i.hostname === "[::1]";
  return i.origin === r.origin && i.username === "" && i.password === "" && (i.protocol === "wss:" || i.protocol === "ws:" && s)
}

function qe() {
  if (Ar.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0) return Ar.CLAUDE_REMOTE_TOOLS_BRIDGE_URL;
  switch (vj()) {
    case "":
      return He;
    case "-staging-oauth":
      return We;
    default:
      return
  }
}

function zun(e) {
  let n = e.transport ?? (WW() ? "bridge" : "auto"),
    i = !1,
    r, s, d, S, b = !1,
    O = !1,
    h = !1,
    k = new Set,
    M = !1,
    R, D, w = {
      current: void 0
    },
    C, I = (c) => S ??= V(c),
    V = async (c) => {
      if (i = !0, s?.(), s = void 0, b) await P.catch(() => !1);
      r?.(), r = void 0, d?.(), d = void 0, w.current?.kit.dispose();
      let v = C?.dispose();
      C = void 0, await N(c), await v
    }, N = async (c) => {
      let v = R;
      if (v === void 0) return;
      if (R = void 0, await v.stop(), O) l("tengu_device_bridge_stopped", {
        reason: f(c)
      })
    }, q = async () => {
      let c = e.readiness ?? (await import("B:/~BUN/root/chunk-t3n3hxpw.js")).createServingReadiness(),
        v = performance.now();
      await c.whenReady();
      let J = Math.round(performance.now() - v),
        {
          cloudClient: j
        } = e,
        Q = await (e.isEnabled ?? (() => IUo({
          cloudClient: j
        })))();
      if (b = !0, !Q) return !1;
      let L = e.isEgressAllowed ?? YIe;
      if (!L()) return t("[deviceBridge] skipped: non-essential egress disabled, non-first-party provider, or remote sessions policy-denied"), !1;
      if (i) return !1;
      if (n === "bridge" && (e.isBridgeRefused ?? LCs)()) return t("[deviceBridge] skipped: the bridge cannot check a device proof and trusted devices are required or unknown"), h = !0, m("device_bridge_register", "trusted_devices_required_or_unknown"), e.onNotice?.($e, la["serving_off.bridge_trusted_devices"]), !1;
      let B = await (e.getAccount ?? fre)(),
        H = e.orgUuid;
      if (!H || B.status !== "resolved") return l("tengu_device_bridge_skipped", {
        missing_org: H === void 0,
        missing_account: B.status === "missing",
        account_mismatch: B.status === "mismatch"
      }), t(`[deviceBridge] skipped: ${H?`account ${B.status}`:"no org"}`), !1;
      let {
        accountUuid: ge
      } = B, _e = x8n(A8n);
      if (D = ae(), D.setGroup(vGr, []), await JTe(), i) return !1;
      let W = eX(void 0, {
        ignoringMute: !0
      });
      if (W === void 0) {
        if (await S2t(), i) return !1
      }
      let te = W === void 0 && IEt() ? await import("B:/~BUN/root/chunk-362p7fb4.js").then((y) => y.gatherHostInventory(Ee())).catch((y) => {
        a(F(y));
        return
      }) : void 0;
      if (i) return !1;
      let nn = void 0,
        tn = void 0,
        be = e.toolGroupProviders ?? await Xe(W);
      if (i) return !1;
      let X = [];
      d = Ze(be, {
        registry: D,
        holdStartUntil: (y) => X.push(y),
        sessionId: e.sessionId,
        serving: {
          offReason: W
        },
        getDeviceId: e.getDeviceId ?? (() => {
          return
        }),
        limiter: _e,
        storageV5: e.storageV5,
        servedSettingsChanged: e.servedSettingsChanged,
        ...e.deviceMcpQuestion && {
          deviceMcpQuestion: e.deviceMcpQuestion
        },
        servingKit: w,
        transport: n,
        readiness: c,
        ...te !== void 0 && {
          hostInventory: te
        },
        ...C !== void 0 && {
          execution: C.execution
        },
        sandboxRequiredNow: R0n,
        ...e.dirSync !== void 0 && {
          dirSync: e.dirSync
        },
        ...e.folderRelation !== void 0 && {
          folderRelation: e.folderRelation
        },
        onNotice: e.onNotice ?? ((y, we) => {
          t(`[remote-tools] ${y}: ${we}`)
        })
      }), t(`[deviceBridge] start-up held on ${X.length} reads of its tool groups`);
      let Te = performance.now();
      await Promise.allSettled(X);
      let ie = Math.round(performance.now() - Te);
      if (t(`[deviceBridge] start-up released after ${ie} ms`), i) return !1;
      let ye = D;
      if (n === "bridge") {
        if (R = await Ye({
            options: e,
            orgUuid: H,
            accountUuid: ge,
            registry: ye,
            isEgressAllowed: L,
            isStopped: () => i,
            onLivenessEvent: G,
            onTransportEvent: x
          }), R === void 0 || i) return await R?.stop(), R = void 0, !1
      }
      let re = () => {
          if (!L()) I("egress_denied")
        },
        Se = e.isStillEnabled ?? (() => LYe({
          cloudClient: j
        }) === void 0),
        oe = () => {
          if (!Se()) t("[deviceBridge] stopping: the gate turned off"), I("gate_off")
        },
        ke = (e.onEgressGateChange ?? IJ)(re),
        Re = (e.onEnabledChange ?? ea)(oe);
      if (s = () => {
          ke(), Re()
        }, re(), oe(), i) return !1;
      if (O = !0, l("tengu_device_bridge_started", {
          account_source: f(B.source),
          transport: f(n),
          redial: !1,
          readiness_wait_ms: J,
          held_ms: ie
        }), n === "auto" && !h) h = !0, g("device_bridge_register");
      return R?.start(), !0
    }, x = (c) => {
      if (c.kind === "authenticated") {
        if (k.clear(), M = !1, !h) h = !0, g("device_bridge_register");
        me(c);
        return
      }
      let v = Je(c);
      if (v === void 0) return;
      if (k.has(v)) return;
      k.add(v), me(c)
    }, G = (c) => {
      if (c.kind === "reconnect_exhausted") {
        if (!h) h = !0, m("device_bridge_register", "reconnect_exhausted");
        if (M) return;
        M = !0
      }
      Qe(c)
    };
  r = (e.registerExitCleanup ?? vt)(() => I("exit"));
  let P = q().catch((c) => {
      if (t(`[deviceBridge] registration failed: ${F(c).message}`), l("tengu_device_bridge_start_failed", {}), !h) h = !0, m("device_bridge_register", "start_failed");
      return !1
    }),
    Y = P.then((c) => c && D !== void 0 && w.current !== void 0 ? {
      kit: pe(w.current.kit),
      source: he(D)
    } : void 0);
  return P.then((c) => {
    if (!c && !i) r?.(), r = void 0, d?.(), d = void 0, w.current?.kit.dispose(), C?.dispose(), C = void 0
  }), {
    started: P,
    announceSettled: () => {},
    serving: Y,
    stop: () => I("attach_ended"),
    heldServedCall: (c) => i || w.current === void 0 ? a8 : w.current.kit.heldServedCall(c)
  }
}
async function Ye({
  options: e,
  orgUuid: n,
  accountUuid: i,
  registry: r,
  isEgressAllowed: s,
  isStopped: d,
  onLivenessEvent: S,
  onTransportEvent: b
}) {
  let O = ze((e.getHostname ?? je)(), e.sessionId),
    h = e.getBridgeBaseUrl !== void 0 || Ar.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0,
    k = (e.getBridgeBaseUrl ?? qe)();
  if (k === void 0) {
    t("[deviceBridge] skipped: no device bridge for this OAuth environment");
    return
  }
  let M = Ke(k, n, i, O),
    {
      createDeviceMcpServer: R,
      deviceInfoProbeTool: D,
      parseJsonRpcMessage: w
    } = await import("B:/~BUN/root/chunk-1dmbx7q4.js");
  if (d()) return;
  let C = {
      getDeviceName: () => O,
      version: ve
    },
    I = D(C),
    V = D({
      ...C,
      idle: !0
    }),
    N = (A) => {
      let Q = r.definitions().every((L) => L.name === I.definition.name);
      r.setGroup(vGr, [Q ? V : I], A)
    };
  N();
  let q = r.subscribe(N),
    x = () => {
      q(), r.setGroup(vGr, [])
    },
    G = new ne({
      getUrl: () => M,
      getAccessToken: () => e.getAccessToken(),
      getTools: () => en(r),
      getDeviceId: e.getDeviceId,
      getSessionId: () => Ld(e.sessionId),
      parseMessage: w,
      createSocket: e.createSocket,
      isAllowedUrl: (A) => s() && (NTo(A) || h && Ve(A, k))
    }),
    {
      server: P,
      inFlightCalls: Y,
      whenIdle: c
    } = R({
      registry: r,
      version: ve,
      sessionId: e.sessionId
    });
  try {
    await P.connect(G)
  } catch (A) {
    throw x(), A
  }
  if (d()) {
    x(), await P.close();
    return
  }
  let v = new Z({
      transport: G,
      announced: {
        hasUnservedChange: r.hasUnservedChange,
        inFlightCalls: Y,
        whenIdle: c
      },
      onEvent: S,
      onTransportEvent: b
    }),
    J = r.subscribe((A) => v.requestReannounce(A)),
    j;
  return {
    start: () => v.start(),
    stop: () => j ??= (async () => {
      J(), x(), await Promise.allSettled([v.stop(), P.close()])
    })()
  }
}

function Je(e) {
  switch (e.kind) {
    case "rejected":
      return `rejected:${e.phase}:${e.reason??""}:${e.status??""}`;
    case "closed":
      return `closed:${e.phase}:${e.code??""}:${e.superseded}`;
    case "token_unavailable":
    case "handshake_timeout":
    case "socket_error":
    case "dial_failed":
      return e.kind;
    default:
      return
  }
}

function me(e) {
  switch (e.kind) {
    case "authenticated":
      l("tengu_device_bridge_connected", {
        protocol_version: e.protocolVersion,
        hb_interval_ms: e.timings.hbIntervalMs,
        staleness_ms: e.timings.stalenessMs,
        rpc_timeout_ms: e.timings.rpcTimeoutMs
      });
      return;
    case "rejected":
      l("tengu_device_bridge_rejected", {
        phase: f(e.phase),
        reason: de(e.reason),
        status: x7(e.status),
        slot_contention: e.slotContention
      });
      return;
    case "closed":
      l("tengu_device_bridge_closed", {
        phase: f(e.phase),
        code: x7(e.code),
        superseded: e.superseded
      });
      return;
    case "token_unavailable":
    case "handshake_timeout":
    case "socket_error":
      l("tengu_device_bridge_connect_failed", {
        cause: f(e.kind)
      });
      return;
    case "dial_failed":
      l("tengu_device_bridge_connect_failed", {
        cause: f("dial_failed")
      });
      return;
    default:
      return
  }
}

function Qe(e) {
  switch (e.kind) {
    case "pong_timeout":
      l("tengu_device_bridge_pong_timeout", {
        consecutive: e.consecutive
      });
      return;
    case "reconnect_exhausted":
      l("tengu_device_bridge_reconnect_exhausted", {});
      return;
    case "heartbeat_unsupported":
      l("tengu_device_bridge_heartbeat_unsupported", {
        protocol_version: bo(e.protocolVersion)
      });
      return;
    case "reannounce":
      l("tengu_device_bridge_reannounce", {
        reason: f(e.reason),
        outcome: f(e.outcome),
        inflight_at_start: e.inFlightAtStart,
        drained_ms: e.drainedMs,
        drain_timed_out: e.drainTimedOut
      });
      return;
    case "reannounce_contended":
      l("tengu_device_bridge_reannounce_contended", {
        reason: f(e.reason)
      });
      return;
    default:
      return
  }
}
async function Xe(e) {
  if (e === void 0 || TJe(e)) try {
    let [{
      remoteToolServingGroupProvider: n
    }, {
      passthroughServingGroupProvider: i
    }, r] = await Promise.all([import("B:/~BUN/root/chunk-6ft54pjj.js"), import("B:/~BUN/root/chunk-815xfha6.js"), void 0]);
    return e === void 0 ? [n(), i(), ...[]] : [n()]
  } catch (n) {
    a(F(n))
  }
  return []
}

function Ze(e, n) {
  let i = e.flatMap((r) => {
    try {
      let s = r(n);
      return s ? [s] : []
    } catch (s) {
      return a(F(s)), []
    }
  });
  return () => i.forEach((r) => {
    try {
      r()
    } catch (s) {
      a(F(s))
    }
  })
}

function en(e) {
  let n = e.hasUnservedChange(),
    i = e.serve();
  if (!n) return i;
  let r = i.map((s) => s.name);
  return t(`[deviceBridge] connect frame announces ${i.length} tools: ${r.slice(0,12).join(", ")}${r.length>12?", \u2026":""}`), l("tengu_device_bridge_connect_frame", {
    tool_count: i.length,
    serves_bash: r.includes(Me),
    serves_powershell: r.includes(kt),
    mcp_tool_count: U(r, (s) => s.includes("__"))
  }), i
}
export {
  zun
};
