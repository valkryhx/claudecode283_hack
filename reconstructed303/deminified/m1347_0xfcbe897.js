// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ck, iE } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { QN } from "B:/~BUN/root/chunk-4qc55bxf.js";
import Re from "net";
import { request as _e } from "http";
var ve = new Set([204, 205, 304]);
function ie(port, path, {
  method: method,
  headers: headers,
  body: body,
  signal: signal
}) {
  let method_2 = method.toUpperCase();
  if (method_2 !== "POST" && method_2 !== "GET" && method_2 !== "DELETE") return Promise.reject(Error("only POST, GET and DELETE are relayed"));
  for (let R of ["content-length", "transfer-encoding", "connection"]) headers.delete(R);
  return new Promise((R, I) => {
    let w = _e({
      host: "127.0.0.1",
      port: port,
      path: path,
      method: method_2,
      headers: Object.fromEntries(headers),
      signal: signal,
      agent: !1
    }, W => {
      try {
        R(Ee(W));
      } catch (error) {
        W.destroy(), I(error);
      }
    });
    w.once("error", I), w.once("close", () => I(Error("closed unanswered"))), w.end(method_2 === "POST" ? body : void 0);
  });
}
function Ee(r) {
  if (r.statusCode === void 0 || r.statusCode < 200) throw Error("no final status");
  let headers_2 = new Headers();
  for (let y = 0; y + 1 < r.rawHeaders.length; y += 2) headers_2.append(r.rawHeaders[y], r.rawHeaders[y + 1]);
  let l = ve.has(r.statusCode ?? 0),
    response = new Response(l ? null : Ie(r), {
      status: r.statusCode,
      statusText: r.statusMessage,
      headers: headers_2
    });
  if (l) r.resume();
  return response;
}
function Ie(r) {
  let u = r[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(l) {
      let g = await u.next();
      if (g.done) l.close();else l.enqueue(g.value);
    },
    async cancel() {
      await u.return?.();
    }
  });
}
var Pe = "/anthropic.ccr.api.v1alpha2.tunnel.TunnelService/TunnelProxy",
  ae = 1000,
  le = 30000,
  ke = 10,
  We = 5000,
  Ne = 1e4,
  ee = 30000,
  Ce = 75000,
  Oe = 7168 * (ee / 1000);
function Ae(r) {
  let u = r instanceof Uint8Array ? Buffer.from(r).toString("latin1") : "";
  return /^\d{1,15}$/.test(u) ? Number(u) : -1;
}
var $e = "preview_tunnel_liveness_would_have_fired",
  ue = 32768,
  Me = 4194304,
  Le = 1048576,
  De = 50,
  He = 30000,
  xe = "/__control/status",
  Be = 2000,
  ce = new Set(["cookie", "authorization", "proxy-authorization", "referer"]),
  qe = 1e4,
  de = 8,
  Ue = 64;
function Fe(r) {
  return r.replace(/^http/, "ws").replace(/\/+$/, "") + Pe;
}
function Ge(r, u) {
  let l = QN(r);
  if (l !== null && typeof l === "object" && "session_id" in l && typeof l.session_id === "string" && l.session_id.length > 0) return l.session_id;
  return u;
}
var Z = "tunnel request does not name this session";
function Ve(r, u) {
  if (!Array.isArray(r)) return !1;
  let l = r.filter(item => typeof item?.name === "string" && item.name.toLowerCase() === "host");
  return l.length === 1 && l[0].value === `127.0.0.1:${u}`;
}
function Ye(r, u) {
  let l = g => g.slice(g.lastIndexOf("_") + 1);
  return l(r) !== "" && l(r) === l(u);
}
function fe(r, u, l) {
  if (typeof r !== "number" || !Number.isInteger(r) || r < 1024 || r > 65535) return `invalid port: ${r}`;
  if (!l.has(r)) return `port ${r} is not in the --preview-port allowlist for this bridge`;
  if (typeof u !== "string" || !u.startsWith("/")) return "invalid path: must start with /";
  return null;
}
var je = new Set([1004, 1005, 1006, 1015]);
function ze(r) {
  return Je(r ?? "").trim();
}
function Ke(r) {
  return r.includes("does not have live preview enabled") || r.includes(Xe);
}
var Xe = "tunnel:preview";
function Je(r) {
  return r.replace(/[\u0000-\u001f\u007f-\u009f\u200e\u200f\u2028\u2029\u202a-\u202e\u2066-\u2069]+/g, " ");
}
function ge(r) {
  if (typeof r !== "number" || r < 1000 || r > 4999 || je.has(r)) return 1000;
  return r;
}
function pe(r) {
  if (!r) return "";
  return Buffer.byteLength(r, "utf8") <= 123 ? r : "";
}
function Qe(port_2) {
  return new Promise(u => {
    let l = !1,
      g = E => {
        if (l) return;
        l = !0, y.destroy(), u(E);
      },
      y = Re.createConnection({
        host: "127.0.0.1",
        port: port_2
      });
    y.setTimeout(Be), y.once("connect", () => g(!0)), y.once("error", () => g(!1)), y.once("timeout", () => g(!1));
  });
}
function v5o(r) {
  let u = Fe(r.apiBaseUrl),
    {
      accessToken: accessToken,
      sessionId: sessionId
    } = r,
    y = !1,
    E = !1,
    b = null,
    R = null,
    I = null,
    w = null,
    W = ae,
    N = 0,
    O = 0,
    Y = !1,
    A = 0,
    x = 0,
    j = 0,
    F = 0,
    G = !1,
    consecutive_failures = 0,
    L = !1,
    z = !1,
    k = new Map(),
    T = new Map(),
    f = (o, level = "info") => t(`[bridge:preview-tunnel] ${o}`, {
      level: level
    });
  function P(o) {
    let e = b;
    if (!e || e.readyState !== WebSocket.OPEN) return;
    try {
      let n = _(o);
      e.send(n), x += n.length;
    } catch (error) {
      f(`send failed: ${d(error)}`, "error");
    }
  }
  function q(requestId, errorMessage) {
    P({
      httpError: {
        requestId: requestId,
        errorMessage: errorMessage
      }
    });
  }
  function ne(o) {
    let e = b;
    if (!e || e.readyState !== WebSocket.OPEN || e.bufferedAmount <= Me) return Promise.resolve();
    return new Promise(n => {
      let a = setInterval(() => {
        if (E || o.aborted || b !== e || e.readyState !== WebSocket.OPEN || e.bufferedAmount <= Le) clearInterval(a), n();
      }, De);
    });
  }
  async function me(requestId_2, e) {
    let port_3 = 0;
    try {
      let v = e.body !== void 0 && e.body !== "" ? Buffer.from(e.body, "base64").toString("utf8") : "{}",
        C = J(v);
      if (C !== null && typeof C.port === "number") port_3 = C.port;
    } catch (error) {
      f(`control/status: bad body: ${d(error)}`, "error");
    }
    let a = Number.isInteger(port_3) && port_3 >= 1024 && port_3 <= 65535 && r.allowedPorts.has(port_3),
      listening = a ? await Qe(port_3) : !1;
    f(`control/status port=${port_3} permitted=${a} listening=${listening}`), P({
      httpHeaders: {
        requestId: requestId_2,
        statusCode: 200,
        statusText: "OK",
        headers: [{
          name: "Content-Type",
          value: "application/x-ndjson"
        }],
        sequenceNumber: 0
      }
    });
    let H = _({
      type: "result",
      status: 200,
      data: {
        listening: listening,
        port: port_3
      }
    }) + `
`;
    P({
      httpChunk: {
        requestId: requestId_2,
        data: Buffer.from(H, "utf8").toString("base64"),
        isFinal: !0,
        sequenceNumber: 1
      }
    });
  }
  async function be(o) {
    let requestId_3 = o.requestId;
    if (!requestId_3) return;
    if (r.toolServer === void 0 && o.port === 0 && o.path === xe && (o.method ?? "").toUpperCase() === "POST") {
      await me(requestId_3, o);
      return;
    }
    let n = fe(o.port, o.path, r.allowedPorts);
    if (n) {
      q(requestId_3, n);
      return;
    }
    let {
        port: port_4,
        path: path_2
      } = o,
      method_3 = o.method ?? "GET";
    if (port_4 === r.toolServer?.port && !Ve(o.headers, port_4)) {
      q(requestId_3, `Host is not 127.0.0.1:${port_4}, which CCR's route to the tool server sends`);
      return;
    }
    let abortController = new AbortController();
    k.set(requestId_3, abortController);
    let C = setTimeout(s => s.abort(), He, abortController),
      p;
    try {
      let headers_3 = new Headers();
      for (let h of o.headers ?? []) {
        if (!h.name || ce.has(h.name.toLowerCase())) continue;
        headers_3.append(h.name, h.value ?? "");
      }
      if (headers_3.set("Host", `127.0.0.1:${port_4}`), port_4 === r.toolServer?.port) headers_3.set("Authorization", `Bearer ${r.toolServer.authToken}`);
      let body_2 = o.body !== void 0 && o.body !== "" ? Buffer.from(o.body, "base64") : void 0;
      p = port_4 === r.toolServer?.port ? await ie(port_4, path_2, {
        method: method_3,
        headers: headers_3,
        body: body_2,
        signal: abortController.signal
      }) : await fetch(`http://127.0.0.1:${port_4}${path_2}`, {
        method: method_3,
        headers: headers_3,
        body: body_2,
        redirect: "manual",
        signal: abortController.signal
      });
    } catch (error) {
      clearTimeout(C), k.delete(requestId_3), q(requestId_3, d(error));
      return;
    }
    clearTimeout(C);
    let headers_4 = [];
    p.headers.forEach((s, m) => {
      headers_4.push({
        name: m,
        value: s
      });
    });
    let sequenceNumber = 0;
    P({
      httpHeaders: {
        requestId: requestId_3,
        statusCode: p.status,
        statusText: p.statusText || String(p.status),
        headers: headers_4,
        sequenceNumber: sequenceNumber
      }
    }), sequenceNumber++;
    try {
      if (p.body) {
        let s = p.body.getReader();
        for (;;) {
          if (await ne(abortController.signal), abortController.signal.aborted) {
            await s.cancel();
            break;
          }
          let m = await s.read();
          if (m.value && m.value.length > 0) for (let h = 0; h < m.value.length; h += ue) {
            let Q = m.value.subarray(h, h + ue);
            P({
              httpChunk: {
                requestId: requestId_3,
                data: Buffer.from(Q).toString("base64"),
                isFinal: !1,
                sequenceNumber: sequenceNumber
              }
            }), sequenceNumber++;
          }
          if (m.done) break;
          if (abortController.signal.aborted) {
            await s.cancel();
            break;
          }
        }
      }
      P({
        httpChunk: {
          requestId: requestId_3,
          data: "",
          isFinal: !0,
          sequenceNumber: sequenceNumber
        }
      });
    } catch (error) {
      q(requestId_3, `error reading response body: ${d(error)}`);
    } finally {
      k.delete(requestId_3);
    }
  }
  function D(tunnelId, errorMessage_2) {
    P({
      wsError: {
        tunnelId: tunnelId,
        errorMessage: errorMessage_2
      }
    });
  }
  function M(tunnelId_2, e) {
    let n = T.get(tunnelId_2);
    if (!n) return;
    if (T.delete(tunnelId_2), n.dialTimer) clearTimeout(n.dialTimer), n.dialTimer = null;
    if (n.abort.abort(), n.pending.length = 0, !n.terminated && e) if (n.terminated = !0, "error" in e) D(tunnelId_2, e.error);else P({
      wsClose: {
        tunnelId: tunnelId_2,
        ...e.close
      }
    });
    try {
      n.sock.close();
    } catch {}
  }
  async function he(o) {
    let e = T.get(o);
    if (!e || e.flushing) return;
    e.flushing = !0;
    try {
      while (e.pending.length > 0 && T.get(o) === e) {
        if (await ne(e.abort.signal), e.abort.signal.aborted || T.get(o) !== e) return;
        let n = e.pending.shift();
        if (n) P(n);
      }
    } finally {
      e.flushing = !1;
    }
  }
  function ye(o) {
    let tunnelId_3 = o.tunnelId;
    if (!tunnelId_3) return;
    if (!r.isHmrEnabled?.()) {
      D(tunnelId_3, "WebSocket tunnel is not enabled for this session");
      return;
    }
    if (M(tunnelId_3), T.size >= de) {
      D(tunnelId_3, `too many concurrent WebSocket tunnels (max ${de})`);
      return;
    }
    let n = fe(o.port, o.path, r.allowedPorts);
    if (n) {
      D(tunnelId_3, n);
      return;
    }
    let {
        port: port_5,
        path: path_3
      } = o,
      H = new Set(["host", "connection", "upgrade", "sec-websocket-key", "sec-websocket-version", "sec-websocket-protocol", "sec-websocket-extensions"]),
      headers_5 = {};
    for (let s of o.headers ?? []) {
      if (!s.name) continue;
      let m = s.value ?? "";
      if (/[\r\n\0]/.test(s.name) || /[\r\n\0]/.test(m)) continue;
      let h = s.name.toLowerCase();
      if (ce.has(h) || H.has(h)) continue;
      headers_5[s.name] = m;
    }
    let protocols = (o.protocols ?? []).filter(item => !/[\r\n\0]/.test(item)),
      sock;
    try {
      sock = new globalThis.WebSocket(`ws://127.0.0.1:${port_5}${path_3}`, {
        headers: headers_5,
        protocols: protocols
      });
    } catch (error) {
      D(tunnelId_3, `WebSocket dial failed: ${d(error)}`);
      return;
    }
    sock.binaryType = "arraybuffer";
    let U = new AbortController(),
      c = {
        sock: sock,
        abort: U,
        dialTimer: null,
        nextSeq: 0,
        pending: [],
        flushing: !1,
        terminated: !1
      };
    T.set(tunnelId_3, c), c.dialTimer = setTimeout(s => {
      s.abort.abort();
      try {
        s.sock.close();
      } catch {}
    }, qe, c), U.signal.addEventListener("abort", () => {
      if (T.get(tunnelId_3) !== c) return;
      sock.onopen = sock.onmessage = sock.onerror = sock.onclose = null, M(tunnelId_3, {
        error: `WebSocket dial to 127.0.0.1:${port_5} timed out`
      });
    }, {
      once: !0
    }), sock.onopen = () => {
      if (c.dialTimer) clearTimeout(c.dialTimer), c.dialTimer = null;
      if (T.get(tunnelId_3) !== c) return;
      P({
        wsOpened: {
          tunnelId: tunnelId_3,
          protocol: sock.protocol ?? ""
        }
      }), f(`ws tunnel opened id=${tunnelId_3} port=${port_5}`);
    }, sock.onmessage = s => {
      if (T.get(tunnelId_3) !== c || c.terminated) return;
      let data, isBinary;
      if (typeof s.data === "string") data = Buffer.from(s.data, "utf8").toString("base64"), isBinary = !1;else if (s.data instanceof ArrayBuffer) data = Buffer.from(s.data).toString("base64"), isBinary = !0;else {
        f(`ws tunnel ${tunnelId_3}: dropping unsupported message type`, "error");
        return;
      }
      if (c.nextSeq++, c.pending.push({
        wsMessage: {
          tunnelId: tunnelId_3,
          data: data,
          isBinary: isBinary,
          sequenceNumber: c.nextSeq
        }
      }), c.pending.length > Ue) {
        M(tunnelId_3, {
          error: "backpressure queue overflow; closing WebSocket tunnel"
        });
        return;
      }
      he(tunnelId_3).catch(Q => f(`ws flush failed: ${d(Q)}`, "error"));
    }, sock.onerror = () => {}, sock.onclose = s => {
      let m = c.dialTimer != null;
      if (c.dialTimer) clearTimeout(c.dialTimer), c.dialTimer = null;
      if (T.get(tunnelId_3) !== c) return;
      if (m) {
        M(tunnelId_3, {
          error: `WebSocket dial to 127.0.0.1:${port_5} failed (close code ${s.code})`
        });
        return;
      }
      M(tunnelId_3, {
        close: {
          code: ge(s.code),
          reason: pe(s.reason)
        }
      });
    };
  }
  function Te(o) {
    let tunnelId_4 = o.tunnelId;
    if (!tunnelId_4) return;
    let n = T.get(tunnelId_4);
    if (!n || n.sock.readyState !== WebSocket.OPEN) return;
    try {
      let a = Buffer.from(o.data ?? "", "base64");
      if (o.isBinary) n.sock.send(a);else n.sock.send(a.toString("utf8"));
    } catch (a) {
      M(tunnelId_4, {
        error: `write to local WebSocket failed: ${d(a)}`
      });
    }
  }
  function we(o) {
    let tunnelId_5 = o.tunnelId;
    if (!tunnelId_5) return;
    let n = T.get(tunnelId_5);
    if (!n) return;
    if (n.terminated = !0, T.delete(tunnelId_5), n.dialTimer) clearTimeout(n.dialTimer), n.dialTimer = null;
    n.abort.abort(), n.pending.length = 0;
    try {
      n.sock.close(ge(o.code), pe(o.reason));
    } catch {
      try {
        n.sock.close();
      } catch {}
    }
  }
  function te() {
    for (let o of [...T.keys()]) M(o);
  }
  function Se(o) {
    let e;
    try {
      e = J(o);
    } catch (error) {
      f(`failed to parse tunnel request: ${d(error)}`, "error");
      return;
    }
    if (typeof e !== "object" || e === null) {
      f("tunnel request is not an object", "error");
      return;
    }
    if (typeof e.sessionId !== "string" || !Ye(e.sessionId, sessionId)) {
      if (!y) y = !0, f(`${Z}; ${r.toolServer ? "refused" : "served all the same"}`, "error"), i("tengu_preview_tunnel_other_session", {
        enforce: r.toolServer !== void 0
      });
      if (r.toolServer !== void 0) {
        if (e.httpRequest?.requestId) q(e.httpRequest.requestId, Z);else if (e.wsOpen?.tunnelId) D(e.wsOpen.tunnelId, Z);
        return;
      }
    }
    if (e.httpRequest) be(e.httpRequest).catch(n => f(`handleHttpRequest failed: ${d(n)}`, "error"));else if (e.httpCancel) {
      let requestId_4 = e.httpCancel.requestId;
      if (requestId_4) k.get(requestId_4)?.abort(), k.delete(requestId_4);
    } else if (e.wsOpen) ye(e.wsOpen);else if (e.wsMessage) Te(e.wsMessage);else if (e.wsClose) we(e.wsClose);else if (e.ptyOpen) P({
      ptyError: {
        tunnelId: e.ptyOpen.tunnelId ?? "",
        errorMessage: "PTY tunnel not supported by bridge worker"
      }
    });
  }
  function re(o, e) {
    if (E) return;
    if (E = !0, I) clearTimeout(I), I = null;
    f(`permanent failure (${e}): ${o}`, "error"), i("tengu_preview_tunnel_permanent_failure", {
      consecutive_failures: consecutive_failures,
      policy_refusal: e === "policy"
    }), r.onPermanentFailure?.(o, e);
  }
  function K() {
    if (consecutive_failures++, r.onPermanentFailure && consecutive_failures >= ke) return re(`${consecutive_failures} consecutive failed or short-lived ` + "connections \u2014 relay unreachable or refusing", "exhausted"), !0;
    return !1;
  }
  function V() {
    if (E) return;
    if (N > 0 && Date.now() - N > le) W = ae;
    N = 0, L = !1;
    let o = W + Math.floor(Math.random() * (W / 2));
    f(`reconnecting in ${o}ms`), I = setTimeout(se, o), W = Math.min(W * 2, le);
  }
  function oe(o) {
    if (w) clearTimeout(w), w = null;
    if (R) clearInterval(R), R = null;
    for (let e of k.values()) e.abort();
    if (k.clear(), te(), b === o) b = null;
  }
  function X(o, e) {
    f(`${e}; forcing reconnect`, "error"), o.onopen = o.onmessage = o.onerror = o.onclose = null, oe(o);
    try {
      let terminate = o.terminate;
      if (typeof terminate === "function") terminate.call(o);else o.close();
    } catch {}
    V();
  }
  function se() {
    if (E) return;
    I = null, sessionId = Ge(accessToken, r.sessionId);
    let headers_6 = {
        Authorization: `Bearer ${accessToken}`,
        "x-session-id": sessionId
      },
      e;
    try {
      e = new globalThis.WebSocket(u, {
        headers: headers_6,
        proxy: iE(u),
        tls: r.toolServer ? {
          ...ck(),
          rejectUnauthorized: !0
        } : ck() || void 0
      });
    } catch (error) {
      if (f(`WebSocket construct failed: ${d(error)}`, "error"), K()) return;
      V();
      return;
    }
    b = e, w = setTimeout(n => {
      f("open timeout; retrying", "error"), n.onopen = n.onmessage = n.onerror = n.onclose = null;
      try {
        n.close();
      } catch {}
      if (b === n) b = null;
      if (K()) return;
      V();
    }, Ne, e), e.onopen = () => {
      if (w) clearTimeout(w), w = null;
      f(`connected session=${r.sessionId}`), N = Date.now(), O = Date.now(), Y = !1, A = 0, x = 0, j = 0, F = 0, G = !1, L = !1;
      let n = e;
      n.addEventListener?.("ping", () => {
        O = Date.now(), L = !0;
      }), n.addEventListener?.("pong", a => {
        O = Date.now(), L = !0, Y = !0, A = 0;
        let S = Ae(a?.data);
        if (S > F && S <= x) F = S;
      }), R = setInterval(() => {
        if (e.readyState !== WebSocket.OPEN) return;
        if (r.livenessEnforce && r.quietLivenessPings !== void 0 && Y && A >= Math.max(r.quietLivenessPings, (j - F) / Oe)) {
          i("tengu_preview_tunnel_liveness_enforced_reconnect", {
            idle_ms: A * ee,
            quiet: !0
          }), X(e, `${A} pings in a row unanswered (liveness deadline exceeded)`);
          return;
        }
        if (Date.now() - O > (r.livenessDeadlineMs ?? Ce)) {
          if (r.livenessEnforce) {
            let idle_ms = Date.now() - O;
            i("tengu_preview_tunnel_liveness_enforced_reconnect", {
              idle_ms: idle_ms
            }), X(e, `no peer activity for ${idle_ms}ms (liveness deadline exceeded)`);
            return;
          }
          if (!G) {
            let idle_ms_2 = Date.now() - O;
            f(`${$e}: no peer activity for ${idle_ms_2}ms (liveness deadline exceeded; observe-only, not reconnecting)`, "error"), i("tengu_preview_tunnel_liveness_would_have_fired", {
              idle_ms: idle_ms_2,
              enforce: !1
            }), G = !0;
          }
        } else G = !1;
        if (r.quietLivenessPings === void 0) {
          n.ping?.();
          return;
        }
        if (A === 0) j = x;
        A++, n.ping?.(String(x));
      }, ee);
    }, e.onmessage = n => {
      O = Date.now(), L = !0;
      let a = typeof n.data === "string" ? n.data : Buffer.from(n.data).toString("utf8");
      Se(a);
    }, e.onerror = n => {
      f(`error: ${"message" in n && typeof n.message === "string" ? n.message : "unknown"}`, "error");
    }, e.onclose = n => {
      let a = ze(n.reason);
      f(`closed code=${n.code} reason=${a || "(none)"}`), oe(e);
      let S = L || N > 0 && Date.now() - N >= We;
      if (S) consecutive_failures = 0, z = !1;
      if (n.code === 1008 && Ke(a)) {
        if (r.policyStopEnforce) {
          re(`relay refused with close code 1008 (policy violation): ${a || "(no reason)"} \u2014 not retrying`, "policy");
          return;
        }
        if (!z) z = !0, f(`POLICY_STOP_WOULD_HAVE_FIRED: capability-refusal 1008 (${a || "(no reason)"}); observe-only, retrying`, "error"), i("tengu_preview_tunnel_policy_stop_would_have_fired", {
          enforce: !1
        });
      }
      if (!S && K()) return;
      V();
    };
  }
  return f(`starting session=${r.sessionId} url=${u}`), se(), {
    updateAccessToken(o) {
      accessToken = o;
    },
    forceReconnect() {
      if (E || b === null) return;
      X(b, "caller requested");
    },
    stop() {
      if (E) return;
      if (E = !0, I) clearTimeout(I), I = null;
      if (w) clearTimeout(w), w = null;
      if (R) clearInterval(R), R = null;
      for (let o of k.values()) o.abort();
      k.clear(), te();
      try {
        b?.close();
      } catch {}
      b = null, f(`stopped session=${r.sessionId}`);
    }
  };
}
export { v5o };