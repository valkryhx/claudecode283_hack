// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { vC, BR } from "B:/~BUN/root/chunk-wthaftk0.js";
import { lEe, v5t, zMe, qPt, Yeo, Tje, E5t } from "B:/~BUN/root/chunk-27h4st9h.js";
import { YHt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import Ye from "net";
import { request as Ne } from "http";
var Me = new Set([204, 205, 304]),
  Ue = new Set(["POST", "GET", "DELETE"]);
function de(e, s, u) {
  return Be("127.0.0.1", e, s, u);
}
function ce(e, s, u) {
  return fe("127.0.0.1", e, s, u, !0);
}
function Be(e, s, u, o) {
  return fe(e, s, u, o, !1);
}
function fe(host, port, path, {
  method: method,
  headers: headers,
  body: body,
  signal: signal
}, O) {
  let method_2 = method.toUpperCase();
  if (!O && !Ue.has(method_2)) return Promise.reject(Error("only POST, GET and DELETE are relayed"));
  if (method_2 === "CONNECT") return Promise.reject(Error("CONNECT is not relayed"));
  for (let N of ["content-length", "transfer-encoding", "connection"]) headers.delete(N);
  let v = O || method_2 === "POST" ? body : void 0;
  if (O && v !== void 0) headers.set("content-length", String(v.length));
  return new Promise((N, q) => {
    let A = Ne({
      host: host,
      port: port,
      path: path,
      method: method_2,
      headers: Object.fromEntries(headers),
      signal: signal,
      agent: !1
    }, x => {
      try {
        N($e(x));
      } catch (error) {
        x.destroy(), q(error);
      }
    });
    A.once("error", q), A.once("close", () => q(Error("closed unanswered"))), A.end(v);
  });
}
function $e(e) {
  if (e.statusCode === void 0 || e.statusCode < 200) throw Error("no final status");
  let headers_2 = new Headers();
  for (let c = 0; c + 1 < e.rawHeaders.length; c += 2) headers_2.append(e.rawHeaders[c], e.rawHeaders[c + 1]);
  let u = Me.has(e.statusCode ?? 0),
    response = new Response(u ? null : De(e), {
      status: e.statusCode,
      statusText: e.statusMessage,
      headers: headers_2
    });
  if (u) e.resume();
  return response;
}
function De(e) {
  let s = e[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(u) {
      let o = await s.next();
      if (o.done) u.close();else u.enqueue(o.value);
    },
    async cancel() {
      await s.return?.();
    }
  });
}
function ge(e) {
  let s = ee(e);
  if (typeof s !== "object" || s === null) return;
  return {
    ...s,
    httpRequest: s.httpRequest && {
      ...s.httpRequest,
      port: s.httpRequest.port ?? 0,
      body: pe(s.httpRequest.body)
    },
    wsOpen: s.wsOpen && {
      ...s.wsOpen,
      port: s.wsOpen.port ?? 0
    },
    wsMessage: s.wsMessage && {
      ...s.wsMessage,
      data: pe(s.wsMessage.data)
    }
  };
}
function me(e) {
  if ("httpChunk" in e) {
    let data = Buffer.from(e.httpChunk.data).toString("base64");
    return _({
      httpChunk: {
        ...e.httpChunk,
        data: data
      }
    });
  }
  if ("wsMessage" in e) {
    let data_2 = Buffer.from(e.wsMessage.data).toString("base64");
    return _({
      wsMessage: {
        ...e.wsMessage,
        data: data_2
      }
    });
  }
  return _(e);
}
function he(e) {
  let sessionId,
    u = {};
  return lEe(e, {
    onBytes(c, p) {
      if (c === 1) {
        sessionId = zMe(p);
        return;
      }
      let y = Le[c];
      if (y !== void 0 && u !== void 0) u = y(p);
    }
  }) && u !== void 0 ? {
    sessionId: sessionId,
    ...u
  } : void 0;
}
function ye(e) {
  if ("httpHeaders" in e) {
    let httpHeaders = e.httpHeaders;
    return Buffer.concat(E5t(1, [...Tje(1, httpHeaders.requestId), ...qPt(2, httpHeaders.statusCode), ...Tje(3, httpHeaders.statusText), ...httpHeaders.headers.flatMap(item => E5t(4, [...Tje(1, item.name ?? ""), ...Tje(2, item.value ?? "")])), ...qPt(5, httpHeaders.sequenceNumber)]));
  }
  if ("httpChunk" in e) {
    let httpChunk = e.httpChunk;
    return Buffer.concat(E5t(2, [...Tje(1, httpChunk.requestId), ...Yeo(2, httpChunk.data), ...qPt(3, httpChunk.isFinal ? 1 : 0), ...qPt(4, httpChunk.sequenceNumber)]));
  }
  if ("wsMessage" in e) {
    let wsMessage = e.wsMessage;
    return Buffer.concat(E5t(5, [...Tje(1, wsMessage.tunnelId), ...Yeo(2, wsMessage.data), ...qPt(3, wsMessage.isBinary ? 1 : 0), ...qPt(4, wsMessage.sequenceNumber)]));
  }
  if ("wsClose" in e) {
    let wsClose = e.wsClose;
    return Buffer.concat(E5t(6, [...Tje(1, wsClose.tunnelId), ...qPt(2, wsClose.code), ...Tje(3, wsClose.reason)]));
  }
  if ("httpError" in e) {
    let {
      requestId: requestId,
      errorMessage: errorMessage
    } = e.httpError;
    return K(3, requestId, errorMessage);
  }
  if ("wsOpened" in e) {
    let {
      tunnelId: tunnelId,
      protocol: protocol
    } = e.wsOpened;
    return K(4, tunnelId, protocol);
  }
  if ("wsError" in e) {
    let {
      tunnelId: tunnelId_2,
      errorMessage: errorMessage_2
    } = e.wsError;
    return K(7, tunnelId_2, errorMessage_2);
  }
  let {
    tunnelId: tunnelId_3,
    errorMessage: errorMessage_3
  } = e.ptyError;
  return K(11, tunnelId_3, errorMessage_3);
}
var Le = {
  2: xe,
  3: Fe,
  4: He,
  5: Ve,
  6: Ge,
  7: je
};
function xe(e) {
  let s = [],
    httpRequest = {
      port: 0
    },
    o = lEe(e, {
      onVarint(c, p) {
        if (c === 2) httpRequest.port = p;
      },
      onBytes(c, p) {
        switch (c) {
          case 1:
            httpRequest.requestId = zMe(p);
            break;
          case 3:
            httpRequest.method = zMe(p);
            break;
          case 4:
            httpRequest.path = zMe(p);
            break;
          case 5:
            s.push(p);
            break;
          case 6:
            httpRequest.body = p;
            break;
        }
      }
    });
  return httpRequest.headers = be(s), o && httpRequest.headers !== void 0 ? {
    httpRequest: httpRequest
  } : void 0;
}
function Fe(e) {
  return lEe(e, {}) ? {
    httpCancel: {
      requestId: v5t(e, 1)
    }
  } : void 0;
}
function He(e) {
  let s = [],
    protocols = [],
    wsOpen = {
      port: 0,
      protocols: protocols
    },
    c = lEe(e, {
      onVarint(p, y) {
        if (p === 2) wsOpen.port = y;
      },
      onBytes(p, y) {
        switch (p) {
          case 1:
            wsOpen.tunnelId = zMe(y);
            break;
          case 3:
            wsOpen.path = zMe(y);
            break;
          case 4:
            s.push(y);
            break;
          case 5:
            protocols.push(zMe(y));
            break;
        }
      }
    });
  return wsOpen.headers = be(s), c && wsOpen.headers !== void 0 ? {
    wsOpen: wsOpen
  } : void 0;
}
function Ve(e) {
  let wsMessage_2 = {};
  return lEe(e, {
    onVarint(o, c) {
      if (o === 3) wsMessage_2.isBinary = c !== 0;else if (o === 4) wsMessage_2.sequenceNumber = c;
    },
    onBytes(o, c) {
      if (o === 1) wsMessage_2.tunnelId = zMe(c);else if (o === 2) wsMessage_2.data = c;
    }
  }) ? {
    wsMessage: wsMessage_2
  } : void 0;
}
function Ge(e) {
  let wsClose_2 = {};
  return lEe(e, {
    onVarint(o, c) {
      if (o === 2) wsClose_2.code = c;
    },
    onBytes(o, c) {
      if (o === 1) wsClose_2.tunnelId = zMe(c);else if (o === 3) wsClose_2.reason = zMe(c);
    }
  }) ? {
    wsClose: wsClose_2
  } : void 0;
}
function je(e) {
  return lEe(e, {}) ? {
    ptyOpen: {
      tunnelId: v5t(e, 1)
    }
  } : void 0;
}
function be(e) {
  return e.every(item => lEe(item, {})) ? e.map(item => ({
    name: v5t(item, 1),
    value: v5t(item, 2)
  })) : void 0;
}
function K(e, s, u) {
  return Buffer.concat(E5t(e, [...Tje(1, s), ...Tje(2, u)]));
}
function pe(e) {
  if (e !== void 0 && typeof e !== "string") throw TypeError("its body or data field is not a string");
  return e === void 0 ? void 0 : Buffer.from(e, "base64");
}
var ze = "/anthropic.ccr.api.v1alpha2.tunnel.TunnelService/TunnelProxy",
  Te = 1000,
  we = 30000,
  Ke = 10,
  Je = 5000,
  Xe = 2,
  Qe = "application/proto; fallback=json",
  Ze = 1e4,
  J = 30000,
  en = 75000,
  nn = 7168 * (J / 1000);
function tn(e) {
  let s = e instanceof Uint8Array ? Buffer.from(e).toString("latin1") : "";
  return /^\d{1,15}$/.test(s) ? Number(s) : -1;
}
var rn = "preview_tunnel_liveness_would_have_fired",
  Se = 32768,
  sn = 4194304,
  on = 1048576,
  an = 50,
  un = 30000,
  ln = "/__control/status",
  dn = 2000,
  _e = new Set(["cookie", "authorization", "proxy-authorization", "referer"]),
  cn = 1e4,
  Re = 8,
  fn = 64;
function pn(e) {
  return e.replace(/^http/, "ws").replace(/\/+$/, "") + ze;
}
var se = "tunnel request does not name this session",
  oe = "the newest token names another session than the one this tunnel was started for";
function gn(e, s) {
  if (!Array.isArray(e)) return !1;
  let u = e.filter(item => typeof item?.name === "string" && item.name.toLowerCase() === "host");
  return u.length === 1 && u[0].value === `127.0.0.1:${s}`;
}
function Ee(e, s) {
  let u = o => o.slice(o.lastIndexOf("_") + 1);
  return u(e) !== "" && u(e) === u(s);
}
function ve(e, s, u) {
  if (typeof e !== "number" || !Number.isInteger(e) || e < 1024 || e > 65535) return `invalid port: ${e}`;
  if (!u.has(e)) return `port ${e} is not one this tunnel may reach`;
  if (typeof s !== "string" || !s.startsWith("/")) return "invalid path: must start with /";
  return null;
}
var mn = new Set([1004, 1005, 1006, 1015]);
function hn(e) {
  return Tn(e ?? "").trim();
}
function yn(e) {
  return e.includes("does not have live preview enabled") || e.includes(bn);
}
var bn = "tunnel:preview";
function Tn(e) {
  return e.replace(/[\u0000-\u001f\u007f-\u009f\u200e\u200f\u2028\u2029\u202a-\u202e\u2066-\u2069]+/g, " ");
}
function Ie(e) {
  if (typeof e !== "number" || e < 1000 || e > 4999 || mn.has(e)) return 1000;
  return e;
}
function We(e) {
  if (!e) return "";
  return Buffer.byteLength(e, "utf8") <= 123 ? e : "";
}
function wn(port_2) {
  return new Promise(s => {
    let u = !1,
      o = p => {
        if (u) return;
        u = !0, c.destroy(), s(p);
      },
      c = Ye.createConnection({
        host: "127.0.0.1",
        port: port_2
      });
    c.setTimeout(dn), c.once("connect", () => o(!0)), c.once("error", () => o(!1)), c.once("timeout", () => o(!1));
  });
}
function lZs(e) {
  let s = pn(e.apiBaseUrl),
    {
      accessToken: accessToken,
      sessionId: sessionId_2
    } = e,
    c = !1,
    p = !1,
    y = null,
    O = null,
    k = null,
    v = null,
    N = Te,
    q = 0,
    A = 0,
    x = !1,
    M = 0,
    V = 0,
    X = 0,
    j = 0,
    Y = !1,
    consecutive_failures = 0,
    F = !1,
    D = !1,
    Q = !1,
    U = new Map(),
    R = new Map(),
    h = (r, level = "info") => t(`[bridge:preview-tunnel] ${r}`, {
      level: level
    });
  function P(r) {
    let n = y;
    if (!n || n.readyState !== WebSocket.OPEN || D === void 0) return;
    try {
      let i = D ? ye(r) : me(r);
      n.send(i), V += i.length;
    } catch (error) {
      h(`send failed: ${d(error)}`, "error");
    }
  }
  function G(requestId_2, errorMessage_4) {
    P({
      httpError: {
        requestId: requestId_2,
        errorMessage: errorMessage_4
      }
    });
  }
  function ie(r) {
    let n = y;
    if (!n || n.readyState !== WebSocket.OPEN || n.bufferedAmount <= sn) return Promise.resolve();
    return new Promise(i => {
      let f = setInterval(() => {
        if (p || r.aborted || y !== n || n.readyState !== WebSocket.OPEN || n.bufferedAmount <= on) clearInterval(f), i();
      }, an);
    });
  }
  async function ke(requestId_3, n, i) {
    let port_3 = 0;
    try {
      let E = n.body !== void 0 && n.body.length > 0 ? Buffer.from(n.body).toString("utf8") : "{}",
        w = ee(E);
      if (w !== null && typeof w.port === "number") port_3 = w.port;
    } catch (error) {
      h(`control/status: bad body: ${d(error)}`, "error");
    }
    let a = Number.isInteger(port_3) && port_3 >= 1024 && port_3 <= 65535 && e.allowedPorts.has(port_3),
      listening = a ? await wn(port_3) : !1;
    h(`control/status port=${port_3} permitted=${a} listening=${listening}`), P({
      httpHeaders: {
        requestId: requestId_3,
        statusCode: 200,
        statusText: "OK",
        headers: [{
          name: "Content-Type",
          value: "application/x-ndjson"
        }],
        sequenceNumber: 0
      }
    });
    let I = _({
      type: "result",
      status: 200,
      data: {
        listening: listening,
        port: port_3
      }
    }) + `
`;
    if (P({
      httpChunk: {
        requestId: requestId_3,
        data: Buffer.from(I, "utf8"),
        isFinal: !0,
        sequenceNumber: 1
      }
    }), !a && i && Number.isInteger(port_3) && port_3 >= 1024 && port_3 <= 65535) Promise.resolve().then(() => p ? void 0 : e.onUnlistedPortProbed?.(port_3)).catch(E => h(`control/status: onUnlistedPortProbed failed: ${d(E)}`, "error"));
  }
  async function Ae(r, n) {
    let requestId_4 = r.requestId;
    if (!requestId_4) return;
    if (e.toolServer === void 0 && r.port === 0 && r.path === ln && (r.method ?? "").toUpperCase() === "POST") {
      await ke(requestId_4, r, n);
      return;
    }
    let f = ve(r.port, r.path, e.allowedPorts);
    if (f) {
      G(requestId_4, f);
      return;
    }
    let {
        port: port_4,
        path: path_2
      } = r,
      method_3 = r.method ?? "GET";
    if (port_4 === e.toolServer?.port && !gn(r.headers, port_4)) {
      G(requestId_4, `Host is not 127.0.0.1:${port_4}, which CCR's route to the tool server sends`);
      return;
    }
    let abortController = new AbortController();
    U.set(requestId_4, abortController);
    let w = setTimeout(m => m.abort(), un, abortController),
      C;
    try {
      let headers_3 = new Headers();
      for (let W of r.headers ?? []) {
        if (!W.name || _e.has(W.name.toLowerCase())) continue;
        headers_3.append(W.name, W.value ?? "");
      }
      if (headers_3.set("Host", `127.0.0.1:${port_4}`), port_4 === e.toolServer?.port) headers_3.set("Authorization", `Bearer ${e.toolServer.authToken}`);
      let body_2 = r.body !== void 0 && r.body.length > 0 ? r.body : void 0;
      if (port_4 === e.toolServer?.port) C = await de(port_4, path_2, {
        method: method_3,
        headers: headers_3,
        body: body_2,
        signal: abortController.signal
      });else {
        let W = new URL(`http://127.0.0.1:${port_4}${path_2}`);
        C = await ce(port_4, W.pathname + W.search, {
          method: method_3,
          headers: headers_3,
          body: body_2,
          signal: abortController.signal
        });
      }
    } catch (error) {
      clearTimeout(w), U.delete(requestId_4), G(requestId_4, d(error));
      return;
    }
    clearTimeout(w);
    let headers_4 = [];
    C.headers.forEach((m, S) => {
      headers_4.push({
        name: S,
        value: m
      });
    });
    let sequenceNumber = 0;
    P({
      httpHeaders: {
        requestId: requestId_4,
        statusCode: C.status,
        statusText: C.statusText || String(C.status),
        headers: headers_4,
        sequenceNumber: sequenceNumber
      }
    }), sequenceNumber++;
    try {
      if (C.body) {
        let m = C.body.getReader();
        for (;;) {
          if (await ie(abortController.signal), abortController.signal.aborted) {
            await m.cancel();
            break;
          }
          let S = await m.read();
          if (S.value && S.value.length > 0) for (let W = 0; W < S.value.length; W += Se) P({
            httpChunk: {
              requestId: requestId_4,
              data: S.value.subarray(W, W + Se),
              isFinal: !1,
              sequenceNumber: sequenceNumber
            }
          }), sequenceNumber++;
          if (S.done) break;
          if (abortController.signal.aborted) {
            await m.cancel();
            break;
          }
        }
      }
      P({
        httpChunk: {
          requestId: requestId_4,
          data: new Uint8Array(0),
          isFinal: !0,
          sequenceNumber: sequenceNumber
        }
      });
    } catch (error) {
      G(requestId_4, `error reading response body: ${d(error)}`);
    } finally {
      U.delete(requestId_4);
    }
  }
  function H(tunnelId_4, errorMessage_5) {
    P({
      wsError: {
        tunnelId: tunnelId_4,
        errorMessage: errorMessage_5
      }
    });
  }
  function L(tunnelId_5, n) {
    let i = R.get(tunnelId_5);
    if (!i) return;
    if (R.delete(tunnelId_5), i.dialTimer) clearTimeout(i.dialTimer), i.dialTimer = null;
    if (i.abort.abort(), i.pending.length = 0, !i.terminated && n) if (i.terminated = !0, "error" in n) H(tunnelId_5, n.error);else P({
      wsClose: {
        tunnelId: tunnelId_5,
        ...n.close
      }
    });
    try {
      i.sock.close();
    } catch {}
  }
  async function Oe(r) {
    let n = R.get(r);
    if (!n || n.flushing) return;
    n.flushing = !0;
    try {
      while (n.pending.length > 0 && R.get(r) === n) {
        if (await ie(n.abort.signal), n.abort.signal.aborted || R.get(r) !== n) return;
        let i = n.pending.shift();
        if (i) P(i);
      }
    } finally {
      n.flushing = !1;
    }
  }
  function Pe(r) {
    let tunnelId_6 = r.tunnelId;
    if (!tunnelId_6) return;
    if (!e.isHmrEnabled?.()) {
      H(tunnelId_6, "WebSocket tunnel is not enabled for this session");
      return;
    }
    if (L(tunnelId_6), R.size >= Re) {
      H(tunnelId_6, `too many concurrent WebSocket tunnels (max ${Re})`);
      return;
    }
    let i = ve(r.port, r.path, e.allowedPorts);
    if (i) {
      H(tunnelId_6, i);
      return;
    }
    let {
        port: port_5,
        path: path_3
      } = r,
      T = new Set(["host", "connection", "upgrade", "sec-websocket-key", "sec-websocket-version", "sec-websocket-protocol", "sec-websocket-extensions"]),
      headers_5 = {};
    for (let g of r.headers ?? []) {
      if (!g.name) continue;
      let m = g.value ?? "";
      if (/[\r\n\0]/.test(g.name) || /[\r\n\0]/.test(m)) continue;
      let S = g.name.toLowerCase();
      if (_e.has(S) || T.has(S)) continue;
      headers_5[g.name] = m;
    }
    let protocols_2 = (r.protocols ?? []).filter(item => !/[\r\n\0]/.test(item)),
      sock;
    try {
      sock = new globalThis.WebSocket(`ws://127.0.0.1:${port_5}${path_3}`, {
        headers: headers_5,
        protocols: protocols_2
      });
    } catch (error) {
      H(tunnelId_6, `WebSocket dial failed: ${d(error)}`);
      return;
    }
    sock.binaryType = "arraybuffer";
    let C = new AbortController(),
      b = {
        sock: sock,
        abort: C,
        dialTimer: null,
        nextSeq: 0,
        pending: [],
        flushing: !1,
        terminated: !1
      };
    R.set(tunnelId_6, b), b.dialTimer = setTimeout(g => {
      g.abort.abort();
      try {
        g.sock.close();
      } catch {}
    }, cn, b), C.signal.addEventListener("abort", () => {
      if (R.get(tunnelId_6) !== b) return;
      sock.onopen = sock.onmessage = sock.onerror = sock.onclose = null, L(tunnelId_6, {
        error: `WebSocket dial to 127.0.0.1:${port_5} timed out`
      });
    }, {
      once: !0
    }), sock.onopen = () => {
      if (b.dialTimer) clearTimeout(b.dialTimer), b.dialTimer = null;
      if (R.get(tunnelId_6) !== b) return;
      P({
        wsOpened: {
          tunnelId: tunnelId_6,
          protocol: sock.protocol ?? ""
        }
      }), h(`ws tunnel opened id=${tunnelId_6} port=${port_5}`);
    }, sock.onmessage = g => {
      if (R.get(tunnelId_6) !== b || b.terminated) return;
      let data_3, isBinary;
      if (typeof g.data === "string") data_3 = Buffer.from(g.data, "utf8"), isBinary = !1;else if (g.data instanceof ArrayBuffer) data_3 = new Uint8Array(g.data), isBinary = !0;else {
        h(`ws tunnel ${tunnelId_6}: dropping unsupported message type`, "error");
        return;
      }
      if (b.nextSeq++, b.pending.push({
        wsMessage: {
          tunnelId: tunnelId_6,
          data: data_3,
          isBinary: isBinary,
          sequenceNumber: b.nextSeq
        }
      }), b.pending.length > fn) {
        L(tunnelId_6, {
          error: "backpressure queue overflow; closing WebSocket tunnel"
        });
        return;
      }
      Oe(tunnelId_6).catch(W => h(`ws flush failed: ${d(W)}`, "error"));
    }, sock.onerror = () => {}, sock.onclose = g => {
      let m = b.dialTimer != null;
      if (b.dialTimer) clearTimeout(b.dialTimer), b.dialTimer = null;
      if (R.get(tunnelId_6) !== b) return;
      if (m) {
        L(tunnelId_6, {
          error: `WebSocket dial to 127.0.0.1:${port_5} failed (close code ${g.code})`
        });
        return;
      }
      L(tunnelId_6, {
        close: {
          code: Ie(g.code),
          reason: We(g.reason)
        }
      });
    };
  }
  function Ce(r) {
    let tunnelId_7 = r.tunnelId;
    if (!tunnelId_7) return;
    let i = R.get(tunnelId_7);
    if (!i || i.sock.readyState !== WebSocket.OPEN) return;
    try {
      let f = Buffer.from(r.data ?? new Uint8Array(0));
      if (r.isBinary) i.sock.send(f);else i.sock.send(f.toString("utf8"));
    } catch (f) {
      L(tunnelId_7, {
        error: `write to local WebSocket failed: ${d(f)}`
      });
    }
  }
  function qe(r) {
    let tunnelId_8 = r.tunnelId;
    if (!tunnelId_8) return;
    let i = R.get(tunnelId_8);
    if (!i) return;
    if (i.terminated = !0, R.delete(tunnelId_8), i.dialTimer) clearTimeout(i.dialTimer), i.dialTimer = null;
    i.abort.abort(), i.pending.length = 0;
    try {
      i.sock.close(Ie(r.code), We(r.reason));
    } catch {
      try {
        i.sock.close();
      } catch {}
    }
  }
  function ae() {
    for (let r of [...R.keys()]) L(r);
  }
  function Z(r) {
    let n;
    try {
      n = typeof r === "string" ? ge(r) : he(r);
    } catch (error) {
      h(`failed to parse tunnel request: ${d(error)}`, "error");
      return;
    }
    if (n === void 0) {
      h(typeof r === "string" ? "tunnel request is not an object" : "dropped a tunnel request: its protobuf is malformed", "error");
      return;
    }
    let enforce = e.toolServer !== void 0 || e.refusesOtherSessions === !0,
      f = typeof n.sessionId === "string" && Ee(n.sessionId, sessionId_2);
    if (!f) {
      if (!c) c = !0, h(`${se}; ${enforce ? "refused" : "served all the same"}`, "error"), l("tengu_preview_tunnel_other_session", {
        enforce: enforce
      });
      if (enforce) {
        if (n.httpRequest?.requestId) G(n.httpRequest.requestId, se);else if (n.wsOpen?.tunnelId) H(n.wsOpen.tunnelId, se);
        return;
      }
    }
    if (n.httpRequest) Ae(n.httpRequest, f).catch(a => h(`handleHttpRequest failed: ${d(a)}`, "error"));else if (n.httpCancel) {
      let requestId_5 = n.httpCancel.requestId;
      if (requestId_5) U.get(requestId_5)?.abort(), U.delete(requestId_5);
    } else if (n.wsOpen) Pe(n.wsOpen);else if (n.wsMessage) Ce(n.wsMessage);else if (n.wsClose) qe(n.wsClose);else if (n.ptyOpen) P({
      ptyError: {
        tunnelId: n.ptyOpen.tunnelId ?? "",
        errorMessage: "PTY tunnel not supported by bridge worker"
      }
    });
  }
  function ne(r, n) {
    if (p) return;
    if (p = !0, k) clearTimeout(k), k = null;
    h(`permanent failure (${n}): ${r}`, "error"), l("tengu_preview_tunnel_permanent_failure", {
      consecutive_failures: consecutive_failures,
      policy_refusal: n === "policy" && r !== oe,
      own_refusal: r === oe
    }), e.onPermanentFailure?.(r, n);
  }
  function te() {
    if (consecutive_failures++, e.onPermanentFailure && consecutive_failures >= Ke) return ne(`${consecutive_failures} consecutive failed or short-lived ` + "connections \u2014 relay unreachable or refusing", "exhausted"), !0;
    return !1;
  }
  function z() {
    if (p) return;
    if (q > 0 && Date.now() - q > we) N = Te;
    q = 0, F = !1;
    let r = N + Math.floor(Math.random() * (N / 2));
    h(`reconnecting in ${r}ms`), k = setTimeout(le, r), N = Math.min(N * 2, we);
  }
  function ue(r) {
    if (v) clearTimeout(v), v = null;
    if (O) clearInterval(O), O = null;
    for (let n of U.values()) n.abort();
    if (U.clear(), ae(), y === r) y = null;
  }
  function re(r, n) {
    h(`${n}; forcing reconnect`, "error"), r.onopen = r.onmessage = r.onerror = r.onclose = null, ue(r);
    try {
      let terminate = r.terminate;
      if (typeof terminate === "function") terminate.call(r);else r.close();
    } catch {}
    z();
  }
  function le() {
    if (p) return;
    k = null;
    let r = YHt(accessToken) ?? "";
    if (e.refusesOtherSessions === !0 && !Ee(r, e.sessionId)) {
      ne(oe, "policy");
      return;
    }
    sessionId_2 = r || e.sessionId;
    let n = e.toolServer?.asksForBinaryFrames === !0 && consecutive_failures < Xe;
    if (e.toolServer?.asksForBinaryFrames === !0 && !n) h(`not asking for binary frames on this dial, after ${consecutive_failures} failed dials in a row`);
    let headers_6 = {
        Authorization: `Bearer ${accessToken}`,
        "x-session-id": sessionId_2,
        ...(e.toolServer && {
          "x-tunnel-peer": "tool-server"
        }),
        ...(n && {
          "Content-Type": Qe
        })
      },
      f;
    try {
      f = new globalThis.WebSocket(s, {
        headers: headers_6,
        proxy: BR(s),
        tls: e.toolServer || e.refusesOtherSessions === !0 ? {
          ...vC(void 0),
          rejectUnauthorized: !0
        } : vC(void 0) || void 0
      });
    } catch (error) {
      if (h(`WebSocket construct failed: ${d(error)}`, "error"), te()) return;
      z();
      return;
    }
    y = f, D = n ? void 0 : !1, v = setTimeout(a => {
      h("open timeout; retrying", "error"), a.onopen = a.onmessage = a.onerror = a.onclose = null;
      try {
        a.close();
      } catch {}
      if (y === a) y = null;
      if (te()) return;
      z();
    }, Ze, f), f.onopen = () => {
      if (v) clearTimeout(v), v = null;
      h(`connected session=${e.sessionId}`), q = Date.now(), A = Date.now(), x = !1, M = 0, V = 0, X = 0, j = 0, Y = !1, F = !1;
      let a = f;
      a.addEventListener?.("ping", () => {
        A = Date.now(), F = !0;
      }), a.addEventListener?.("pong", T => {
        A = Date.now(), F = !0, x = !0, M = 0;
        let I = tn(T?.data);
        if (I > j && I <= V) j = I;
      }), O = setInterval(() => {
        if (f.readyState !== WebSocket.OPEN) return;
        if (e.livenessEnforce && e.quietLivenessPings !== void 0 && (x || e.toolServer !== void 0) && M >= Math.max(e.quietLivenessPings, e.toolServer === void 0 || Date.now() - A < J ? (X - j) / nn : 0)) {
          l("tengu_preview_tunnel_liveness_enforced_reconnect", {
            idle_ms: M * J,
            quiet: !0
          }), re(f, `${M} pings in a row unanswered (liveness deadline exceeded)`);
          return;
        }
        if (Date.now() - A > (e.livenessDeadlineMs ?? en)) {
          if (e.livenessEnforce) {
            let idle_ms = Date.now() - A;
            l("tengu_preview_tunnel_liveness_enforced_reconnect", {
              idle_ms: idle_ms
            }), re(f, `no peer activity for ${idle_ms}ms (liveness deadline exceeded)`);
            return;
          }
          if (!Y) {
            let idle_ms_2 = Date.now() - A;
            h(`${rn}: no peer activity for ${idle_ms_2}ms (liveness deadline exceeded; observe-only, not reconnecting)`, "error"), l("tengu_preview_tunnel_liveness_would_have_fired", {
              idle_ms: idle_ms_2,
              enforce: !1
            }), Y = !0;
          }
        } else Y = !1;
        if (e.quietLivenessPings === void 0) {
          a.ping?.();
          return;
        }
        if (M === 0) X = V;
        M++, a.ping?.(String(V));
      }, J);
    }, f.onmessage = a => {
      if (A = Date.now(), F = !0, D === void 0) D = typeof a.data !== "string", h(D ? "the relay is using binary frames, as asked" : "the relay answered in JSON, so this connection speaks JSON: it did not grant binary frames, or a proxy dropped the Content-Type header");
      if (typeof a.data === "string") Z(a.data);else if (D) Z(a.data instanceof Uint8Array ? a.data : new Uint8Array(a.data));else Z(Buffer.from(a.data).toString("utf8"));
    }, f.onerror = a => {
      h(`error: ${"message" in a && typeof a.message === "string" ? a.message : "unknown"}`, "error");
    }, f.onclose = a => {
      let T = hn(a.reason);
      h(`closed code=${a.code} reason=${T || "(none)"}`), ue(f);
      let I = F || q > 0 && Date.now() - q >= Je;
      if (I) consecutive_failures = 0, Q = !1;
      if (a.code === 1008 && yn(T)) {
        if (e.policyStopEnforce) {
          ne(`relay refused with close code 1008 (policy violation): ${T || "(no reason)"} \u2014 not retrying`, "policy");
          return;
        }
        if (!Q) Q = !0, h(`POLICY_STOP_WOULD_HAVE_FIRED: capability-refusal 1008 (${T || "(no reason)"}); observe-only, retrying`, "error"), l("tengu_preview_tunnel_policy_stop_would_have_fired", {
          enforce: !1
        });
      }
      if (!I && te()) return;
      z();
    };
  }
  return h(`starting session=${e.sessionId} url=${s}`), le(), {
    updateAccessToken(r) {
      accessToken = r;
    },
    forceReconnect() {
      if (p || y === null) return;
      re(y, "caller requested");
    },
    stop() {
      if (p) return;
      if (p = !0, k) clearTimeout(k), k = null;
      if (v) clearTimeout(v), v = null;
      if (O) clearInterval(O), O = null;
      for (let r of U.values()) r.abort();
      U.clear(), ae();
      try {
        y?.close();
      } catch {}
      y = null, h(`stopped session=${e.sessionId}`);
    }
  };
}
export { lZs };