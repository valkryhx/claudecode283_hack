// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Q, Ht } from "B:/~BUN/root/chunk-17wqwt36.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { gt, oE, b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { I, re, Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { ZN, Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { sc, p1t, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { lK, QN, Ea, tt, Ve } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { Ho, Tzr, o1t, P$, Ro } from "B:/~BUN/root/chunk-y72v2pst.js";
import { Rhr, Ahr, Lco as onFailure, kJt, X_r, na } from "B:/~BUN/root/chunk-3jyp964r.js";
import { hqn } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { qgn } from "B:/~BUN/root/chunk-339q6g5w.js";
import { wft, vft, $Fo, UFo, y2, SC, wC } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { F1 } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { qN } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { Fl } from "B:/~BUN/root/chunk-ejjy06g8.js";
import { sa, mae } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { kOr } from "B:/~BUN/root/chunk-j36yaq51.js";
import { kqt, Eqt, cSe, Wue } from "B:/~BUN/root/chunk-3933trze.js";
import { e3r } from "B:/~BUN/root/chunk-z4e03v46.js";
import { Spe, Goe, wpe } from "B:/~BUN/root/chunk-kfsc6egp.js";
import { YHe } from "B:/~BUN/root/chunk-dqm1wqrw.js";
import { execFile as fr } from "child_process";
import { constants as pr, statSync as gr } from "fs";
import { access as mr, mkdir as Xe, readFile as le, stat as Xt, unlink as oe, writeFile as se } from "fs/promises";
import { homedir as je, tmpdir as hr } from "os";
import { delimiter as jt, join as M, parse as yr } from "path";
function Qe(n) {
  return;
}
import { createHash as en } from "crypto";
import { isIP as tn } from "net";
var clientProcess = "<non-linux>";
var nt = 524288,
  nn = 30000,
  control = 0,
  rn = 1,
  on = 2,
  an = 3,
  rt = 4,
  xe = 2,
  sn = {
    openTimeoutMs: 1e4,
    openMaxAttempts: 3,
    openBackoffBaseMs: 100,
    sendHighWater: 4194304,
    sendLowWater: 1048576,
    drainPollMs: 50,
    sendPauseAfterPendingBytes: 0,
    pendingBytesCap: 33554432,
    sendStallTimeoutMs: 180000,
    receiveHighWater: 4194304,
    receiveLowWater: 1048576,
    downloadQueuedReportBytes: 16777216,
    uploadQueuedReportBytes: 16777216,
    poolMax: 4,
    poolIdleTtlMs: 1e4,
    poolMaxAgeMs: 2700000,
    finGraceMs: 1e4
  };
function Ae(n) {
  let e = n.length,
    o = [],
    r = e;
  while (r > 127) o.push(r & 127 | 128), r >>>= 7;
  o.push(r);
  let uint8Array = new Uint8Array(1 + o.length + e);
  return uint8Array[0] = 10, uint8Array.set(o, 1), uint8Array.set(n, 1 + o.length), uint8Array;
}
function Ce(n, e = 0) {
  let o = [16, n];
  if (e !== 0) o.push(24, e);
  return new Uint8Array(o);
}
function ln(n) {
  let e = {
    data: n.subarray(0, 0),
    control: control,
    version: 0
  };
  return X_r(n, {
    onVarint(r, s) {
      if (r === 2) e.control = s;else if (r === 3) e.version = s;
    },
    onBytes(r, s) {
      if (r === 1) e.data = s;
    }
  }) ? e : null;
}
function ie(n) {
  let e = wft(n);
  if (e.startsWith("*.")) return "*." + ie(e.slice(2));
  let o = e.replace(/\.+$/, "").toLowerCase(),
    r = vft(o).replace(/\.+$/, "");
  return r !== "" ? r : o;
}
function cn(n) {
  let e = n.split(".").map(Number);
  return e[0] === 10 || e[0] === 172 && e[1] >= 16 && e[1] <= 31 || e[0] === 192 && e[1] === 168 || e[0] === 100 && e[1] >= 64 && e[1] <= 127;
}
function un(n, e) {
  let o = ie(n);
  for (let r of e) {
    let s = ie(r);
    if (s === "") continue;
    if (s === "*") return !0;
    if (s.startsWith("*.")) {
      let d = s.slice(1);
      if (o.endsWith(d)) return !0;
      continue;
    }
    if (!s.includes("*")) {
      if (o === s) return !0;
      continue;
    }
    if (new RegExp("^" + s.split("*").map(item => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("[^.]+") + "$").test(o)) return !0;
  }
  return !1;
}
function dn(n) {
  let e = ie(n);
  if (e === "localhost" || e === "ip6-localhost" || e === "ip6-loopback" || e === "metadata.google.internal" || e === "instance-data" || e === "instance-data.ec2.internal" || e.endsWith(".localhost")) return "blocked_hostname";
  let o = e.normalize("NFKC");
  if (o.includes("[") || o.includes(":")) return "ipv6_literal";
  let r = e.split("."),
    s = /^(0|[1-9]\d{0,2})$/;
  if (!(r.length === 4 && r.every(item => s.test(item) && Number(item) <= 255))) return UFo(e) !== null || $Fo(e) ? "noncanonical_ipv4" : null;
  let d = r.map(Number);
  if (d[0] === 0) return "unspecified";
  if (d[0] === 127) return "loopback";
  if (d[0] === 169 && d[1] === 254) return "link_local";
  if (e === "100.100.100.200") return "metadata_alibaba";
  if (e === "168.63.129.16") return "metadata_azure";
  if (e === "192.0.0.192") return "metadata_reserved";
  return null;
}
function fn(n) {
  if (!n) return "peer_unreadable";
  if (n.includes(":")) return pn(n);
  let e = n.split(".").map(Number);
  if (e.length !== 4 || e.some(item => !Number.isFinite(item) || item < 0 || item > 255)) return "peer_unreadable";
  return st(e, n);
}
function st(n, e) {
  if (n[0] === 0) return "unspecified";
  if (n[0] === 127) return "loopback";
  if (n[0] === 169 && n[1] === 254) return "link_local";
  if (e === "100.100.100.200") return "metadata_alibaba";
  if (e === "168.63.129.16") return "metadata_azure";
  if (e === "192.0.0.192") return "metadata_reserved";
  return null;
}
function pn(n) {
  let e = gn(n);
  if (!e) return "peer_unreadable";
  let o = e.slice(0, 12),
    r = o.every((item, index) => item === (index === 10 || index === 11 ? 255 : 0)),
    s = o.every(item => item === 0),
    g = e[0] === 0 && e[1] === 100 && e[2] === 255 && e[3] === 155 && o.slice(4).every(item => item === 0);
  if (r || s || g) {
    let u = [e[12], e[13], e[14], e[15]],
      f = u.join(".");
    if (s && u.every(item => item === 0)) return "unspecified";
    if (s && u[0] === 0 && u[1] === 0 && u[2] === 0 && u[3] === 1) return "loopback";
    return st(u, f);
  }
  if (((e[0] ?? 0) & 224) === 32) return null;
  if ((e[0] ?? 0) === 254 && ((e[1] ?? 0) & 192) === 128) return "link_local";
  if (((e[0] ?? 0) & 254) === 252) return "unique_local";
  return "v6_non_global";
}
function gn(n) {
  let e = n.indexOf("%"),
    r = (e >= 0 ? n.slice(0, e) : n).toLowerCase().split("::");
  if (r.length > 2) return null;
  let s = r[0] ? r[0].split(":") : [],
    g = r.length === 2 && r[1] ? r[1].split(":") : [],
    d = r.length === 2 ? g : s,
    u = d.at(-1),
    f = [];
  if (u && u.includes(".")) {
    let P = u.split(".").map(Number);
    if (P.length !== 4 || P.some(item => !Number.isFinite(item) || item < 0 || item > 255)) return null;
    f = P, d.pop();
  }
  let h = P => {
      let C = [];
      for (let A of P) {
        if (!/^[0-9a-f]{1,4}$/.test(A)) return null;
        let N = parseInt(A, 16);
        C.push(N >> 8, N & 255);
      }
      return C;
    },
    y = h(r.length === 2 ? s : []),
    w = h(d);
  if (y === null || w === null) return null;
  let T = r.length === 2 ? y : w,
    x = r.length === 2 ? (w ?? []).concat(f) : f,
    S = 16 - T.length - x.length;
  if (S < 0 || r.length === 1 && S !== 0) return null;
  let E = T.concat(Array(S).fill(0), x);
  return E.length === 16 ? E : null;
}
function lt(n, e, o) {
  let directUpstream = e.directUpstream;
  if (!directUpstream) return;
  if (directUpstream.writeBuf.length > 0) directUpstream.writeBuf.push(o), directUpstream.writeBufBytes += o.length;else {
    let s = directUpstream.write(o);
    if (s < o.length) directUpstream.writeBuf.push(o.subarray(s)), directUpstream.writeBufBytes += o.length - s;
  }
  if (directUpstream.writeBufBytes > e.limits.pendingBytesCap) {
    O(e.ctx, "direct_writebuf_cap", `direct-upstream write buffer exceeded ${e.limits.pendingBytesCap} bytes`, D(e)), e.closed = !0;
    try {
      directUpstream.end();
    } catch {}
    n.end();
  }
}
var ct = "[\\u0000-\\u001f\\u007f-\\u009f]",
  regExp = new RegExp(ct, "u"),
  regExp_2 = new RegExp(ct, "gu");
function U(n, e, o) {
  let r = n.badEventBudgets.get(e);
  if (!r) r = {
    bucket: wpe(Spe, Goe),
    suppressed: 0
  }, n.badEventBudgets.set(e, r);
  if (!r.bucket.tryConsume()) return r.suppressed++, !1;
  return m("agent_proxy_request", e, r.suppressed > 0 ? {
    ...o,
    suppressed_since_last: r.suppressed
  } : o), r.suppressed = 0, !0;
}
function O(n, kind, o, r) {
  let s = {
    ts: new Date().toISOString(),
    kind: kind,
    detail: o.replace(regExp_2, "?"),
    host: r?.replace(regExp_2, "?")
  };
  if (n.failures.push(s), n.failures.length > Rhr) n.failures.shift();
  n.onFailure?.(s);
}
function D(n) {
  return n.connectAuthority || void 0;
}
function ut(n, e, o, r, s) {
  n.write(`HTTP/1.1 ${e} ${o}\r
Content-Type: ${r}\r
Content-Length: ${Buffer.byteLength(s)}\r
Connection: close\r
\r
` + s);
}
function L(n, e, o, r) {
  ut(n, e, o, "text/plain; charset=utf-8", `agent-proxy relay: ${r}
GET /__agentproxy/status on this proxy port shows proxy state and recent failures.
`);
}
function hn(limits, pool, ctx) {
  return {
    connectBuf: Buffer.alloc(0),
    pending: [],
    pendingBytes: 0,
    startedAt: Date.now(),
    uploadBytes: 0,
    downloadBytes: 0,
    pendingPeakBytes: 0,
    uploadPauses: 0,
    uploadAborted: !1,
    connectRejected: !1,
    wsOpen: !1,
    established: !1,
    closed: !1,
    connectLine: "",
    connectAuthority: "",
    clientProcess: clientProcess,
    wsAttempt: 0,
    paused: !1,
    sendStallBuffered: 0,
    sendStallSince: 0,
    readPaused: !1,
    limits: limits,
    pool: pool,
    finSeen: !1,
    localClosed: !1,
    ctx: ctx
  };
}
function yn(n, e, o, r) {
  let s = () => new Promise((g, d) => {
    let u = !1,
      f = _t(n, e),
      h = setTimeout(() => {
        if (u) return;
        u = !0;
        try {
          f.close();
        } catch {}
        d(Error("handshake timeout"));
      }, o);
    f.onopen = () => {
      if (u) return;
      u = !0, clearTimeout(h);
      try {
        f.close();
      } catch {}
      g();
    }, f.onerror = y => {
      if (u) return;
      u = !0, clearTimeout(h), d(Error(y?.message ?? "WebSocket error"));
    };
  });
  return (async () => {
    let g;
    for (let d = 0; d < r; d++) try {
      await s();
      return;
    } catch (error) {
      if (g = error, d + 1 < r) await Q(Math.min(200 * 2 ** d, 2000));
    }
    throw g;
  })();
}
var _n = 1048576,
  wn = 33554432;
function bn(n) {
  return new Promise((e, o) => {
    let r = !1,
      s = Buffer.alloc(0),
      g = Bun.listen({
        hostname: "127.0.0.1",
        port: 0,
        socket: {
          data(y, w) {
            if (r) return;
            s = Buffer.concat([s, w]);
            let T = s.indexOf(`\r
\r
`);
            if (T < 0) return;
            let x = /sec-websocket-key: *(\S+)/i.exec(s.subarray(0, T).toString("latin1"))?.[1] ?? "",
              S = en("sha1").update(x + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest("base64");
            if (y.write(`HTTP/1.1 101 Switching Protocols\r
Upgrade: websocket\r
Connection: Upgrade\r
Sec-WebSocket-Accept: ${S}\r
\r
`), r = !0, typeof y.pause === "function") y.pause();
          }
        }
      }),
      d = !1,
      u = y => {
        if (d) return;
        d = !0, clearTimeout(f);
        try {
          h.close();
        } catch {}
        if (g.stop(!0), y instanceof Error) o(y);else e(y);
      },
      f = setTimeout(y => y(Error("handshake timeout")), n, u),
      h = new globalThis.WebSocket(`ws://127.0.0.1:${g.port}/`);
    h.binaryType = "arraybuffer", h.onerror = () => u(Error("WebSocket error")), h.onclose = () => u(Error("closed before the check completed")), h.onopen = () => {
      let uint8Array_2 = new Uint8Array(_n);
      try {
        for (let w = 0; w < wn; w += uint8Array_2.length) if (h.send(uint8Array_2), h.bufferedAmount > 0) {
          u(!0);
          return;
        }
      } catch {
        u(Error("send failed"));
        return;
      }
      u(!1);
    };
  });
}
async function dt(n) {
  let e = n.getToken ?? (() => n.token),
    o = {
      connectHeader: () => "Basic " + Buffer.from(`${n.sessionId}:${e()}`).toString("base64"),
      wsHeader: () => `Bearer ${e()}`
    },
    r = {
      ...sn,
      ...n.limits
    },
    s = {
      statusProvider: n.statusProvider,
      failures: [],
      onFailure: n.onFailure,
      downloadQueuedBytes: 0,
      downloadQueuedPeakBytes: 0,
      uploadPausedClients: 0,
      uploadPauses: 0,
      selective: n.selective,
      upstreamOpened: !1,
      badEventBudgets: new Map()
    },
    g = Sn(n.wsUrl, o, r, s);
  if (n.startupProbe) yn(n.wsUrl, o, r.openTimeoutMs, r.openMaxAttempts).then(() => {
    t("[agent-proxy] startup reachability probe: ok");
  }).catch(d => {
    if (s.upstreamOpened) {
      t(`[agent-proxy] startup reachability probe failed (${d?.message ?? String(d)}) after a tunnel already opened; ignoring`, {
        level: "warn"
      });
      return;
    }
    s.startupError = (`hosted agent-proxy unreachable at startup: ${d?.message ?? String(d)}. Tunneled CONNECTs get one dial attempt each and return 502 until ` + "one reaches upstream (which clears this) \u2014 inference is " + "force-tunneled, so a session without the hosted proxy is non-functional regardless. Check network egress to the CCR base URL.").replace(regExp_2, "?"), t(`[agent-proxy] ${s.startupError}`, {
      level: "error"
    }), p("agent_proxy_init", "agent_proxy_startup_probe_failed");
  }), bn(r.openTimeoutMs).then(d => {
    if (s.bufferedAmountTrusted = d, !d) t("[agent-proxy] WebSocket.bufferedAmount stays 0 with bytes queued: the upload gate cannot engage on this runtime", {
      level: "warn"
    }), p("agent_proxy_init", "agent_proxy_buffered_amount_untrusted");
  }).catch(d => {
    t(`[agent-proxy] bufferedAmount self-check did not run: ${d?.message ?? String(d)}`, {
      level: "warn"
    });
  });
  return t(`[agent-proxy] relay listening on 127.0.0.1:${g.port}`), g;
}
function ot(n) {
  if (n.ctx.downloadQueuedBytes -= n.writeBufBytes, n.writeBufBytes = 0, n.writeBuf = [], ce(n), te(n), n.writeBufPeakBytes > n.limits.receiveHighWater || n.writeBufPeakBytes >= n.limits.downloadQueuedReportBytes) i("tengu_agent_proxy_download_queue", {
    download_queued_peak_bytes: n.writeBufPeakBytes
  });
  if (n.writeBufPeakBytes = 0, n.uploadPauses > 0 || n.pendingPeakBytes >= n.limits.uploadQueuedReportBytes) i("tengu_agent_proxy_upload_queue", {
    upload_queued_peak_bytes: n.pendingPeakBytes,
    upload_pauses: n.uploadPauses,
    upload_aborted: n.uploadAborted
  });
  n.pendingPeakBytes = 0, n.uploadPauses = 0;
}
function Tn() {
  return "pause" in globalThis.WebSocket.prototype;
}
function Sn(n, e, o, r) {
  let s = [],
    g = Bun.listen({
      hostname: "127.0.0.1",
      port: 0,
      socket: {
        open(d) {
          if (d.data = {
            ...hn(o, s, r),
            writeBuf: [],
            writeBufBytes: 0,
            writeBufPeakBytes: 0,
            endAfterDrain: !1,
            destroyAfterDrain: !1
          }, typeof d.pause === "function") d.data.clientRead = d;
        },
        data(d, u) {
          let f = d.data;
          if (f.closed) return;
          let h = {
            write: y => {
              let w = typeof y === "string" ? Buffer.from(y, "utf8") : y,
                T = f.writeBuf.length > 0 ? 0 : d.write(w);
              if (T < 0 || T === w.length) return;
              let x = w.subarray(T);
              if (f.writeBuf.push(x), f.writeBufBytes += x.length, f.ctx.downloadQueuedBytes += x.length, f.writeBufBytes > f.writeBufPeakBytes) f.writeBufPeakBytes = f.writeBufBytes;
              if (f.ctx.downloadQueuedBytes > f.ctx.downloadQueuedPeakBytes) f.ctx.downloadQueuedPeakBytes = f.ctx.downloadQueuedBytes;
              if (f.writeBufBytes > f.limits.receiveHighWater) An(f);
            },
            end: () => {
              if (te(f), f.writeBuf.length > 0) {
                f.endAfterDrain = !0;
                return;
              }
              d.end();
            },
            destroy: () => {
              if (te(f), f.writeBuf.length > 0) {
                f.destroyAfterDrain = !0;
                return;
              }
              d.terminate();
            }
          };
          f.client = h, xn(h, f, u, n, e);
        },
        drain(d) {
          let u = d.data;
          while (u.writeBuf.length > 0) {
            let f = u.writeBuf[0],
              h = d.write(f);
            if (h < 0) break;
            if (u.writeBufBytes -= h, u.ctx.downloadQueuedBytes -= h, h < f.length) {
              u.writeBuf[0] = f.subarray(h);
              break;
            }
            u.writeBuf.shift();
          }
          if (u.writeBufBytes <= u.limits.receiveLowWater) ce(u);
          if (u.writeBuf.length > 0) return;
          if (u.destroyAfterDrain) {
            u.destroyAfterDrain = !1, d.terminate();
            return;
          }
          if (u.endAfterDrain) u.endAfterDrain = !1, d.end();
        },
        close(d) {
          let u = d.data;
          if (ot(u), mt(u)) return;
          if (u.localClosed && u.finCloseTimer) return;
          if (!u.closed && wt(u)) return;
          G(u);
        },
        error(d, u) {
          t(`[agent-proxy] client socket error: ${u.message}`);
          let f = d.data;
          if (ot(f), f.localClosed && f.finCloseTimer) return;
          G(f);
        }
      }
    });
  return {
    port: g.port,
    stop: () => {
      kn(s), g.stop(!0);
    }
  };
}
function xn(n, e, o, r, s) {
  if (!e.ws && !e.directUpstream && !e.directDialing) {
    if (e.connectBuf = Buffer.concat([e.connectBuf, o]), e.connectBuf[0] === 22) {
      if (U(e.ctx, "agent_proxy_request_tls_to_relay")) t("[agent-proxy] client sent TLS to the relay port (HTTPS_PROXY must be an http:// URL)", {
        level: "warn"
      });
      O(e.ctx, "tls_to_relay", "client opened TLS to the relay port; HTTPS_PROXY must be an http:// URL pointing at this port"), e.closed = !0, n.end();
      return;
    }
    let g = e.connectBuf.indexOf(`\r
\r
`);
    if (g === -1) {
      if (e.connectBuf.length > 8192) e.closed = !0, L(n, 400, "Bad Request", "request headers exceeded 8 KiB before the end of the CONNECT request"), n.end(), U(e.ctx, "agent_proxy_request_header_too_long"), O(e.ctx, "header_too_long", "headers exceeded 8 KiB");
      return;
    }
    let d = e.connectBuf.subarray(0, g).toString("utf8"),
      u = Ze(d, `\r
`),
      f = u.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i);
    if (!f) {
      if (/^GET\s+\/__agentproxy\/status(\?\S*)?\s+HTTP\/1\.[01]$/i.test(u)) {
        let E = {
          ...(e.ctx.statusProvider?.() ?? {}),
          startupError: e.ctx.startupError,
          recentRelayFailures: e.ctx.failures,
          downloadQueuedBytes: e.ctx.downloadQueuedBytes,
          downloadQueuedPeakBytes: e.ctx.downloadQueuedPeakBytes,
          downloadReceivePauseSupported: Tn(),
          downloadReceiveGateEnabled: Number.isFinite(e.limits.receiveHighWater),
          uploadPausedClients: e.ctx.uploadPausedClients,
          uploadPauses: e.ctx.uploadPauses,
          uploadPauseSupported: e.clientRead !== void 0,
          uploadGateEnabled: Number.isFinite(e.limits.sendPauseAfterPendingBytes),
          bufferedAmountTrusted: e.ctx.bufferedAmountTrusted ?? null
        };
        ut(n, 200, "OK", "application/json", b(E, null, 2) + `
`), e.closed = !0, n.end();
        return;
      }
      e.closed = !0, L(n, 405, "Method Not Allowed", "this proxy only accepts HTTPS CONNECT tunnels. Plain-HTTP/absolute-form requests are not supported \u2014 common causes are axios releases before 1.16.1 (broken HTTPS proxy handling) or a tool configured with HTTP_PROXY pointing at this relay."), n.end(), U(e.ctx, "agent_proxy_request_not_connect");
      let [T = "", x = ""] = u.split(/\s+/),
        S = T;
      try {
        let E = new URL(x);
        S = `${T} ${E.protocol}//${E.host}`;
      } catch {}
      O(e.ctx, "not_connect", `non-CONNECT request: ${S.slice(0, 120)}`);
      return;
    }
    e.connectLine = u, e.connectAuthority = f[1] ?? "";
    let h = e.connectBuf.subarray(g + 4);
    if (h.length > 0) {
      if (Te(n, e, Buffer.from(h)), e.closed) return;
    }
    e.connectBuf = Buffer.alloc(0);
    let selective = e.ctx.selective,
      connectAuthority = e.connectAuthority;
    if (selective && connectAuthority) {
      let T = connectAuthority.lastIndexOf(":"),
        x = T > 0 ? connectAuthority.slice(0, T) : connectAuthority,
        S = ie(x.replace(/^\[|\]$/g, ""));
      if (regExp.test(S)) O(e.ctx, "selective_invalid_host", "control byte in CONNECT host", S);else if (tn(S) === 4 && !cn(S)) ;else if (!un(S, selective.includeHosts)) {
        let E = T > 0 ? Number(connectAuthority.slice(T + 1)) : 443;
        Rn(n, e, S, E);
        return;
      }
    }
    vn(n, e, r, s);
    return;
  }
  if (e.directUpstream) {
    lt(n, e, o);
    return;
  }
  if (e.directDialing) {
    Te(n, e, Buffer.from(o));
    return;
  }
  if (!e.wsOpen || e.paused) {
    if (Te(n, e, Buffer.from(o)), !e.closed && e.pendingBytes > e.limits.sendPauseAfterPendingBytes) Pn(e);
    return;
  }
  if (e.redialEligible = !1, e.ws) Re(e, e.ws, o), pt(e);
}
function Te(n, e, o) {
  if (e.pending.push(o), e.pendingBytes += o.length, e.pendingBytes > e.pendingPeakBytes) e.pendingPeakBytes = e.pendingBytes;
  if (e.pendingBytes > e.limits.pendingBytesCap) t(`[agent-proxy] pending buffer cap (${e.limits.pendingBytesCap}) exceeded; aborting request`, {
    level: "warn"
  }), ft(n, e, "pending_overflow", e.established ? `upload aborted: more than ${e.limits.pendingBytesCap} request bytes buffered while the tunnel was not draining` : "too much request data buffered while the upstream tunnel was unavailable (pending buffer cap exceeded)");
}
function ft(n, e, o, r) {
  if (U(e.ctx, `agent_proxy_request_${o}`), O(e.ctx, o, r, D(e)), e.closed = !0, e.uploadAborted = !0, !e.established) L(n, 502, "Bad Gateway", r), n.end();else {
    e.pending = [], e.pendingBytes = 0;
    let s = wt(e);
    if (n.destroy(), s) return;
  }
  G(e);
}
function pt(n) {
  if (n.paused || !n.ws) return;
  if (n.ws.bufferedAmount > n.limits.sendHighWater) n.paused = !0, n.sendStallBuffered = n.ws.bufferedAmount, n.sendStallSince = Date.now(), n.drainTimer = setInterval(En, n.limits.drainPollMs, n);
}
function En(n) {
  let ws = n.ws;
  if (!ws || ws.readyState !== WebSocket.OPEN || n.closed) {
    ee(n);
    return;
  }
  let o = Date.now();
  if (ws.bufferedAmount < n.sendStallBuffered) n.sendStallBuffered = ws.bufferedAmount, n.sendStallSince = o;else if (n.readPaused && n.client && o - n.sendStallSince > n.limits.sendStallTimeoutMs) {
    ee(n);
    let r = Math.round((o - n.sendStallSince) / 1000);
    t(`[agent-proxy] tunnel accepted no request bytes for ${r}s; aborting request`, {
      level: "warn"
    }), ft(n.client, n, "upload_stalled", `upload aborted: the tunnel accepted no request bytes for ${r}s`);
    return;
  }
  if (ws.bufferedAmount > n.limits.sendLowWater) return;
  while (n.pending.length > 0 && ws.bufferedAmount <= n.limits.sendHighWater) {
    let r = n.pending.shift();
    n.pendingBytes -= r.length, n.redialEligible = !1, Re(n, ws, r);
  }
  if (n.sendStallBuffered = ws.bufferedAmount, n.sendStallSince = o, n.pending.length === 0) n.paused = !1, ee(n), te(n);
}
function ee(n) {
  if (n.drainTimer) clearInterval(n.drainTimer), n.drainTimer = void 0;
}
function Pn(n) {
  if (n.readPaused || !n.clientRead) return;
  n.readPaused = !0, n.uploadPauses++, n.ctx.uploadPausedClients++, n.ctx.uploadPauses++, n.clientRead.pause();
}
function te(n) {
  if (!n.readPaused || !n.clientRead) return;
  n.readPaused = !1, n.ctx.uploadPausedClients--, n.clientRead.resume();
}
function An(n) {
  let ws_2 = n.ws;
  if (!ws_2?.pause || ws_2.readyState !== WebSocket.OPEN || ws_2.isPaused === !0) return;
  ws_2.pause();
}
function ce(n) {
  let ws_3 = n.ws;
  if (!ws_3?.resume || ws_3.readyState !== WebSocket.OPEN || ws_3.isPaused === !1) return;
  ws_3.resume();
}
function vn(n, e, o, r) {
  let s = On(e);
  if (s) {
    e.ws = s.ws, e.wsOpen = !0, e.pinger = s.pinger, e.wsMeta = s.meta;
    let g = e.pending.slice();
    e.redialEligible = !0;
    let d = !1,
      u = f => {
        if (d || e.closed) return;
        if (d = !0, e.redialEligible = !1, t(`[agent-proxy] pooled ws failed before response (${f}); falling through to fresh dial`), e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
        if (e.pooledDeadline = void 0, e.pinger) clearInterval(e.pinger), e.pinger = void 0;
        s.ws.onopen = s.ws.onmessage = s.ws.onerror = s.ws.onclose = null;
        try {
          s.ws.close();
        } catch {}
        if (e.ws = void 0, e.wsOpen = !1, e.wsMeta = void 0, ee(e), e.paused = !1, e.pending = [...g, ...e.pending], e.pendingBytes = e.pending.reduce((acc, item) => acc + item.length, 0), e.pendingBytes > e.pendingPeakBytes) e.pendingPeakBytes = e.pendingBytes;
        e.uploadBytes = 0, Pe(n, e, o, r);
      };
    e.pooledDeadline = () => {
      if (e.openTimer = void 0, e.closed || e.established) return;
      if (e.redialEligible) {
        u("pooled ws unresponsive");
        return;
      }
      e.closed = !0, U(e.ctx, "agent_proxy_request_ws_error"), L(n, 502, "Bad Gateway", "the pooled tunnel to the CCR agent-proxy became unresponsive before a response was received"), n.end(), O(e.ctx, "ws_error", "pooled tunnel unresponsive before first response", D(e)), G(e);
    }, e.openTimer = setTimeout(Ln, e.limits.openTimeoutMs, e), ht(n, e, s.ws, u), yt(e, s.ws, r.connectHeader());
    return;
  }
  Pe(n, e, o, r);
}
function Rn(n, e, hostname, port) {
  let s = dn(hostname);
  if (s) {
    e.closed = !0, L(n, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${hostname} (${s})`), n.end(), U(e.ctx, "agent_proxy_direct_blocked_" + s), O(e.ctx, "direct_blocked", s, D(e));
    return;
  }
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    e.closed = !0, L(n, 400, "Bad Request", "invalid CONNECT port"), n.end(), U(e.ctx, "agent_proxy_request_bad_connect_port"), O(e.ctx, "bad_connect_port", "invalid CONNECT port", D(e));
    return;
  }
  e.directDialing = !0;
  let g = !1,
    d = setTimeout(() => {
      if (e.closed) return;
      g = !0, e.closed = !0, e.directDialing = !1, L(n, 504, "Gateway Timeout", `agent-proxy selective relay: direct dial to ${hostname}:${port} timed out after ${e.limits.openTimeoutMs}ms`), n.end(), O(e.ctx, "direct_dial_timeout", `${hostname}:${port}`, D(e));
    }, e.limits.openTimeoutMs);
  Bun.connect({
    hostname: hostname,
    port: port,
    socket: {
      open(u) {
        if (clearTimeout(d), e.closed || g) {
          u.end();
          return;
        }
        let f = fn(u.remoteAddress);
        if (f) {
          u.end(), e.closed = !0, e.directDialing = !1, L(n, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${hostname} ` + `\u2014 resolved to a blocked address (${f})`), n.end(), U(e.ctx, "agent_proxy_direct_peer_blocked_" + f), O(e.ctx, "direct_peer_blocked", f, D(e));
          return;
        }
        e.directUpstream = {
          write: h => u.write(h),
          end: () => u.end(),
          writeBuf: [],
          writeBufBytes: 0
        }, e.directDialing = !1, n.write(`HTTP/1.1 200 Connection Established\r
\r
`), e.established = !0;
        for (let h of e.pending) lt(n, e, h);
        e.pending = [], e.pendingBytes = 0;
      },
      data(u, f) {
        if (e.closed) return;
        n.write(f);
      },
      drain() {
        let directUpstream_2 = e.directUpstream;
        if (!directUpstream_2) return;
        while (directUpstream_2.writeBuf.length > 0) {
          let f = directUpstream_2.writeBuf[0];
          if (!f) {
            directUpstream_2.writeBuf.shift();
            continue;
          }
          let h = directUpstream_2.write(f);
          if (directUpstream_2.writeBufBytes -= h, h < f.length) {
            directUpstream_2.writeBuf[0] = f.subarray(h);
            return;
          }
          directUpstream_2.writeBuf.shift();
        }
      },
      close() {
        if (!e.closed) e.closed = !0, n.end();
      },
      error(u, f) {
        if (clearTimeout(d), e.closed) return;
        if (e.closed = !0, !e.established) L(n, 502, "Bad Gateway", `normal-networking dial failed: ${f?.message ?? String(f)}`), n.end();else n.destroy();
        O(e.ctx, e.established ? "direct_upstream_error" : "direct_dial_failed", f?.message ?? String(f), D(e));
      }
    }
  }).catch(u => {
    if (clearTimeout(d), e.directDialing = !1, e.closed) return;
    e.closed = !0, L(n, 502, "Bad Gateway", `normal-networking dial failed: ${u?.message ?? String(u)}`), n.end(), O(e.ctx, "direct_dial_failed", u?.message ?? String(u), D(e));
  });
}
function On(n) {
  let {
    pool: pool_2,
    limits: limits_2
  } = n;
  while (pool_2.length > 0) {
    let r = pool_2.pop();
    if (r.ws.readyState !== WebSocket.OPEN) {
      clearInterval(r.pinger);
      continue;
    }
    if (Date.now() - r.idleSince > limits_2.poolIdleTtlMs || Date.now() - r.meta.openedAt > limits_2.poolMaxAgeMs) {
      clearInterval(r.pinger);
      try {
        r.ws.close();
      } catch {}
      continue;
    }
    return r;
  }
  return;
}
function mt(n) {
  let {
    ws: ws_4,
    wsMeta: o
  } = n;
  if (!ws_4 || !o?.v2 || !n.finSeen || ws_4.readyState !== WebSocket.OPEN || !n.established || n.closed || !n.pinger || n.pool.length >= n.limits.poolMax || Date.now() - o.openedAt > n.limits.poolMaxAgeMs) return !1;
  ee(n), ce(n), te(n), ws_4.onmessage = null, ws_4.onerror = null;
  let pool_3 = n.pool;
  return ws_4.onclose = () => Bn(pool_3, ws_4), pool_3.push({
    ws: ws_4,
    pinger: n.pinger,
    idleSince: Date.now(),
    meta: o
  }), n.ws = void 0, n.pinger = void 0, n.wsMeta = void 0, !0;
}
function Bn(n, e) {
  let o = n.findIndex(item => item.ws === e);
  if (o >= 0) clearInterval(n[o].pinger), n.splice(o, 1);
}
function kn(n) {
  for (let e of n) {
    clearInterval(e.pinger), e.ws.onclose = null;
    try {
      e.ws.close();
    } catch {}
  }
  n.length = 0;
}
function ht(n, e, o, r) {
  o.onmessage = s => {
    let g = s.data instanceof ArrayBuffer ? new Uint8Array(s.data) : new Uint8Array(Buffer.from(s.data)),
      d = ln(g);
    if (!d) return;
    if (d.control !== control) {
      Dn(n, e, o, d);
      return;
    }
    if (d.data.length > 0) {
      if (!e.wsMeta?.v2) {
        ve(n, e, "server sent data before HELLO_ACK");
        return;
      }
      if (e.localClosed) return;
      if (!e.established) {
        e.established = !0;
        let u = Buffer.from(d.data.subarray(0, 16)).toString("utf8").match(/^HTTP\/1\.[01] ([45]\d\d)/);
        if (u) e.connectRejected = !0, O(e.ctx, "connect_rejected", `gateway answered ${u[1]} to CONNECT (policy denial or upstream failure)`, D(e));
        if (e.redialEligible = !1, e.pooledDeadline) {
          if (e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
          e.pooledDeadline = void 0;
        }
        _("agent_proxy_request");
      }
      e.downloadBytes += d.data.length, n.write(d.data);
    }
  }, o.onerror = s => {
    let g = "message" in s ? String(s.message) : "websocket error";
    if (t(`[agent-proxy] ws error: ${g}`), e.closed) return;
    if (r && e.redialEligible && !e.established) {
      r(`ws error: ${g}`);
      return;
    }
    if (e.closed = !0, e.localClosed) {
      G(e);
      return;
    }
    if (!e.established) U(e.ctx, "agent_proxy_request_ws_error"), L(n, 502, "Bad Gateway", `the WebSocket tunnel to the CCR agent-proxy reported an error (${g.slice(0, 120)})`), n.end(), O(e.ctx, "ws_error", `tunnel error before response: ${g.slice(0, 120)}`, D(e));else it(n, e, `tunnel error: ${re(g, 120)}`);
    G(e);
  }, o.onclose = s => {
    if (e.closed) return;
    if (r && e.redialEligible && !e.established) {
      r("closed before response");
      return;
    }
    if (e.closed = !0, e.localClosed) {
      G(e);
      return;
    }
    if (!e.established) U(e.ctx, "agent_proxy_request_ws_error"), L(n, 502, "Bad Gateway", "the WebSocket tunnel to the CCR agent-proxy closed before a response was received"), n.end(), O(e.ctx, "ws_error", "tunnel closed before response", D(e));else it(n, e, `tunnel closed (code ${s.code}${s.reason ? `, ${re(s.reason, 120)}` : ""})`, s.code);
    G(e);
  };
}
function it(n, e, o, close_code) {
  if (e.connectRejected) {
    n.destroy();
    return;
  }
  let elapsed_ms = Date.now() - e.startedAt;
  U(e.ctx, "agent_proxy_request_ws_closed_mid_exchange", {
    elapsed_ms: elapsed_ms,
    upload_bytes: e.uploadBytes,
    download_bytes: e.downloadBytes,
    upload_paused: e.readPaused,
    pending_bytes: e.pendingBytes,
    ...(close_code !== void 0 && {
      close_code: close_code
    })
  }), O(e.ctx, "ws_closed_mid_exchange", `${o} after ${Math.round(elapsed_ms / 1000)}s; ${e.uploadBytes} B sent, ${e.downloadBytes} B received, client ${e.readPaused ? "paused" : "reading"}, ${e.pendingBytes} B still queued in the relay`, D(e)), n.destroy();
}
function Dn(n, e, o, r) {
  if (r.control === on) {
    if (e.wsMeta && !e.wsMeta.v2) {
      if (r.version !== xe) {
        ve(n, e, `server acknowledged protocol version ${r.version}, expected ${xe}`);
        return;
      }
      if (e.wsMeta.v2 = !0, e.helloAckDeadline) {
        if (e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
        e.helloAckDeadline = void 0;
      }
      t("[agent-proxy] tunnel protocol v2 negotiated");
    }
    return;
  }
  if (!e.wsMeta?.v2) return;
  if (r.control === an) {
    Nn(n, e, o);
    return;
  }
}
function Nn(n, e, o) {
  if (e.finSeen) return;
  if (e.closed) {
    if (e.finCloseTimer && o.readyState === WebSocket.OPEN) e.finSeen = !0, o.send(Ce(rt)), G(e);
    return;
  }
  if (e.finSeen = !0, e.finCloseTimer) clearTimeout(e.finCloseTimer), e.finCloseTimer = void 0;
  if (!e.localClosed) n.end();
  if (ee(e), e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
  e.pooledDeadline = void 0, e.paused = !1, e.pending = [], e.pendingBytes = 0, o.send(Ce(rt));
  let r = mt(e);
  if (e.closed = !0, !r) G(e);
}
function yt(n, e, o) {
  let r = `${n.connectLine}\r
Proxy-Authorization: ${o}\r
X-Agent-Proxy-Client-Process: ${n.clientProcess}\r
\r
`;
  e.send(Ae(Buffer.from(r, "utf8")));
  for (let s of n.pending) Re(n, e, s);
  n.pending = [], n.pendingBytes = 0, te(n), pt(n);
}
function _t(n, e) {
  let headers = {
      "Content-Type": "application/proto",
      Authorization: e.wsHeader()
    },
    r = new globalThis.WebSocket(n, {
      headers: headers,
      proxy: wC(n),
      tls: SC() || void 0
    });
  return r.binaryType = "arraybuffer", r;
}
function Pe(n, e, o, r) {
  if (e.wsAttempt === 0) e.probeErrorAtDial = e.ctx.startupError;
  let s = _t(o, r);
  e.ws = s, e.wsOpen = !1, e.wsMeta = void 0;
  let g = () => {
      s.onopen = s.onmessage = s.onerror = s.onclose = null;
      try {
        s.close();
      } catch {}
    },
    d = u => {
      if (e.closed) return;
      if (e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
      g(), e.wsAttempt++;
      let probeErrorAtDial = e.probeErrorAtDial,
        h = probeErrorAtDial ? 1 : e.limits.openMaxAttempts;
      if (e.wsAttempt < h) {
        let w = e.limits.openBackoffBaseMs * 2 ** (e.wsAttempt - 1);
        t(`[agent-proxy] ws open failed (${u}); retry ${e.wsAttempt}/${h - 1} in ${w}ms`), e.openTimer = setTimeout(Pe, w, n, e, o, r);
        return;
      }
      t(`[agent-proxy] ws open failed (${u}); attempts exhausted`), e.closed = !0, U(e.ctx, "agent_proxy_request_ws_error");
      let y = `could not open the WebSocket tunnel to the CCR agent-proxy (${u.slice(0, 120)}) after ${e.wsAttempt} ${I(e.wsAttempt, "attempt")}`;
      L(n, 502, "Bad Gateway", probeErrorAtDial ? `${y}. Also: ${probeErrorAtDial}` : y), n.end(), O(e.ctx, "ws_open_failed", `tunnel open failed after ${e.wsAttempt} ${I(e.wsAttempt, "attempt")}: ${u.slice(0, 120)}`, D(e)), G(e);
    };
  e.failOrRetry = d, e.openTimer = setTimeout(In, e.limits.openTimeoutMs, e), s.onopen = () => {
    if (e.closed) return;
    if (e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
    e.failOrRetry = void 0, e.wsOpen = !0, e.wsMeta = {
      v2: !1,
      openedAt: Date.now()
    }, e.ctx.startupError = void 0, e.ctx.upstreamOpened = !0, ht(n, e, s), s.send(Ce(rn, xe)), yt(e, s, r.connectHeader()), e.pinger = setInterval($n, nn, s), e.helloAckDeadline = () => {
      e.openTimer = void 0, e.helloAckDeadline = void 0, ve(n, e, `no HELLO_ACK within ${e.limits.openTimeoutMs}ms`);
    }, e.openTimer = setTimeout(Mn, e.limits.openTimeoutMs, e);
  }, s.onerror = u => {
    let f = "message" in u ? String(u.message) : "websocket error";
    t(`[agent-proxy] ws error: ${f}`), d(f);
  }, s.onclose = () => d("closed before open");
}
function $n(n) {
  if (n.readyState === WebSocket.OPEN) n.send(Ae(new Uint8Array(0)));
}
function In(n) {
  if (n.ws && n.ws.readyState === WebSocket.CONNECTING) t("[agent-proxy] ws open timeout"), n.failOrRetry?.("handshake timeout");
}
function Ln(n) {
  n.pooledDeadline?.();
}
function Mn(n) {
  n.helloAckDeadline?.();
}
function ve(n, e, o) {
  if (e.closed) return;
  e.closed = !0, t(`[agent-proxy] tunnel protocol v2 negotiation failed: ${o}`, {
    level: "warn"
  }), U(e.ctx, "agent_proxy_request_v2_not_acked"), L(n, 502, "Bad Gateway", `requires tunnel protocol v2; the server did not acknowledge the negotiation (${o}) \u2014 server too old or connection broken`), n.end(), O(e.ctx, "v2_not_acked", `tunnel protocol v2 not acknowledged: ${o}`, D(e)), G(e);
}
function wt(n) {
  if (!n.wsMeta?.v2 || n.finSeen || n.localClosed || n.ws?.readyState !== WebSocket.OPEN) return !1;
  if (n.localClosed = !0, n.redialEligible = !1, n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
  return n.pooledDeadline = void 0, n.finCloseTimer = setTimeout(Hn, n.limits.finGraceMs, n), !0;
}
function Hn(n) {
  if (n.finCloseTimer = void 0, n.finSeen) return;
  G(n);
}
function Re(n, e, o) {
  if (e.readyState !== WebSocket.OPEN) return;
  n.uploadBytes += o.length;
  for (let r = 0; r < o.length; r += nt) {
    let s = o.subarray(r, r + nt);
    e.send(Ae(s));
  }
}
function G(n) {
  if (!n) return;
  if (n.directUpstream) {
    try {
      n.directUpstream.end();
    } catch {}
    n.directUpstream = void 0;
  }
  if (n.closed = !0, n.pinger) clearInterval(n.pinger);
  if (n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
  if (n.finCloseTimer) clearTimeout(n.finCloseTimer), n.finCloseTimer = void 0;
  if (ee(n), ce(n), te(n), n.pending = [], n.pendingBytes = 0, n.failOrRetry = void 0, n.redialEligible = !1, n.pooledDeadline = void 0, n.helloAckDeadline = void 0, n.ws && n.ws.readyState <= WebSocket.OPEN) try {
    n.ws.close();
  } catch {}
  n.ws = void 0;
}
import { constants as de } from "fs";
import { chmod as Fn, lstat as fe, open as xt, readdir as Gn, readlink as Un, rename as Wn, stat as ke, symlink as Yn, unlink as ue } from "fs/promises";
import { basename as De, join as ae } from "path";
var direct = {
    script: "update-ca-certificates",
    conf: "/etc/ca-certificates.conf",
    distCertsDir: "/usr/share/ca-certificates",
    localCertsDir: "/usr/local/share/ca-certificates",
    certsDir: "/etc/ssl/certs",
    bundle: "/etc/ssl/certs/ca-certificates.crt",
    hooksDir: "/etc/ca-certificates/update.d",
    restorecon: "/sbin/restorecon",
    rehash: ["openssl", "rehash", "."],
    listHooks: ["run-parts", "--test", "--", "/etc/ca-certificates/update.d"]
  },
  Xn = ["CERTSCONF=/etc/ca-certificates.conf", "CERTSDIR=/usr/share/ca-certificates", "LOCALCERTSDIR=/usr/local/share/ca-certificates", "ETCCERTSDIR=/etc/ssl/certs", "HOOKSDIR=/etc/ca-certificates/update.d"],
  jn = 65536,
  Kn = 262144,
  Vn = 1048576,
  Jn = 4194304,
  maxBuffer = 1048576,
  bt = 2048;
async function $e(n, e) {
  let {
      anchorPath: anchorPath,
      link: link,
      layout: layout,
      recordPath: recordPath,
      timeoutMs: timeoutMs
    } = e,
    u = Buffer.from(n, "utf8"),
    f;
  try {
    f = await zn(anchorPath, link, u, layout);
  } catch (error) {
    f = {
      reason: "layout",
      detail: l(error)
    };
  }
  if ("reason" in f) return t(`[agent-proxy] direct CA install not attempted (${f.reason}: ${f.detail}); using ${layout.script}`), {
    outcome: "not_attempted",
    reason: f.reason
  };
  await ue(recordPath).catch(() => {});
  let h;
  try {
    h = await xt(anchorPath, de.O_WRONLY | de.O_CREAT | de.O_EXCL, 420), await h.writeFile(u), await h.chmod(420), await h.close();
  } catch (error) {
    if (h) await h.close().catch(() => {}), await ue(anchorPath).catch(() => {});
    return t(`[agent-proxy] direct CA install not attempted (anchor: ${l(error)}); using ${layout.script}`), {
      outcome: "not_attempted",
      reason: "anchor_create"
    };
  }
  let y = !1,
    w = async (step, A) => {
      if (t(`[agent-proxy] direct CA install abandoned at ${step} (${A}); running ${layout.script} instead`, {
        level: "warn"
      }), y) await ue(link).catch(() => {});
      return {
        outcome: "abandoned",
        step: step
      };
    };
  try {
    let C = await ZN(layout.bundle, f.bundle);
    try {
      await Fn(C, 420), await Wn(C, layout.bundle);
    } catch (error) {
      throw await ue(C).catch(() => {}), error;
    }
  } catch (error) {
    return await w("bundle", l(error));
  }
  try {
    await Yn(anchorPath, link), y = !0;
  } catch (error) {
    return await w("link", l(error));
  }
  let T = Date.now() + timeoutMs,
    x = (C, input) => tt(C[0], C.slice(1), {
      timeout: Math.max(1, T - Date.now()),
      cwd: layout.certsDir,
      ...(input === void 0 ? {
        stdin: "ignore"
      } : {
        input: input
      }),
      maxBuffer: maxBuffer,
      preserveOutputOnError: !0
    }),
    S = await x(layout.rehash);
  if (Be("openssl rehash", S), S.exitCode !== 0) return await w("rehash", Oe(S));
  let E = [];
  if ((await ke(layout.hooksDir).catch(() => {
    return;
  }))?.isDirectory()) {
    let C = await x(layout.listHooks);
    if (C.exitCode !== 0) return Be("run-parts", C), await w("hooks", Oe(C));
    E = C.stdout.split(`
`).filter(item => item.length > 0);
  }
  for (let C of E) {
    let A = await x([C], `+${link}
`);
    if (Be(C, A), A.exitCode === void 0) return t(`[agent-proxy] direct CA install: hook ${C} gave no exit status (${Oe(A)}); not recording the install, so the next start redoes it`, {
      level: "warn"
    }), {
      outcome: "hook_incomplete"
    };
    if (A.exitCode !== 0) t(`[agent-proxy] direct CA install: hook ${C} exit status ${A.exitCode} ignored, as ${layout.script} ignores it`);
  }
  return {
    outcome: "installed"
  };
}
async function zn(n, e, o, r) {
  let s = r.script.includes("/") ? r.script : await sc(r.script),
    g = s ? await pe(s, jn) : void 0;
  if (g === void 0 || !g.subarray(0, 9).equals(Buffer.from("#!/bin/sh")) || !Xn.every(item => g.includes(item))) return {
    reason: "script",
    detail: s ?? r.script
  };
  let d = await pe(r.conf, Kn);
  if (d === void 0 || d.length === 0) return {
    reason: "conf",
    detail: r.conf
  };
  for (let detail of [r.certsDir, r.localCertsDir, r.distCertsDir]) if (!(await fe(detail).catch(() => {
    return;
  }))?.isDirectory()) return {
    reason: "layout",
    detail: detail
  };
  if (!(await fe(r.bundle).catch(() => {
    return;
  }))?.isFile()) return {
    reason: "layout",
    detail: r.bundle
  };
  if (await St(r.restorecon)) return {
    reason: "layout",
    detail: r.restorecon
  };
  for (let S of [n, e]) if (await St(S)) return {
    reason: "anchor_present",
    detail: `${S} exists`
  };
  let u = [],
    f = detail_2 => ({
      reason: "unsynced",
      detail: detail_2
    });
  for (let S of d.toString("utf8").split(`
`)) {
    if (S === "" || S.startsWith("#")) continue;
    if (S.startsWith("!")) {
      let C = ae(r.certsDir, `${De(S.slice(1), ".crt")}.pem`);
      if ((await fe(C).catch(() => {
        return;
      }))?.isSymbolicLink()) return f(`${C} still linked`);
      continue;
    }
    let E = ae(r.distCertsDir, S);
    if (!(await ke(E).catch(() => {
      return;
    }))?.isFile()) continue;
    let P = await Tt(E, r);
    if (P === void 0) return f(E);
    u.push(P);
  }
  let h = De(n),
    y = [h];
  for (let S of await Gn(r.localCertsDir, {
    withFileTypes: !0
  })) {
    let E = await ke(ae(r.localCertsDir, S.name));
    if (E.isDirectory()) return f(`${S.name} is a directory`);
    if (E.isFile() && S.name.endsWith(".crt")) y.push(S.name);
  }
  y.sort();
  let w = Et(o);
  for (let S of y) {
    if (S === h) {
      u.push(w);
      continue;
    }
    let E = ae(r.localCertsDir, S),
      P = await Tt(E, r);
    if (P === void 0) return f(E);
    u.push(P);
  }
  let T = await pe(r.bundle, Jn),
    x = Buffer.concat(u.filter(item => item !== w));
  if (T === void 0 || !T.equals(x)) return f("bundle differs from what the script would build");
  return {
    bundle: Buffer.concat(u)
  };
}
async function Tt(n, e) {
  let o = De(n, ".crt").replace(/ /g, "_").replace(/[()]/g, "=").replace(/,/g, "_") + ".pem";
  if ((await Un(ae(e.certsDir, o)).catch(() => {
    return;
  })) !== n) return;
  let s = await pe(n, Vn);
  return s && Et(s);
}
function Et(n) {
  return n.length === 0 || n.at(-1) === 10 ? n : Buffer.concat([n, Buffer.from(`
`)]);
}
async function St(n) {
  return fe(n).then(() => !0, e => {
    if (B(e)) return !1;
    throw e;
  });
}
async function pe(n, e) {
  let o;
  try {
    o = await xt(n, de.O_RDONLY | mae());
    let r = await o.stat();
    if (!r.isFile() || r.size > e) return;
    return await o.readFile();
  } catch {
    return;
  } finally {
    await o?.close().catch(() => {});
  }
}
function Oe(n) {
  if (n.exitCode !== void 0) return `exit status ${n.exitCode}`;
  if (n.timedOut) return "still running at the deadline";
  if (n.maxBufferExceeded) return "output over the cap";
  return `did not run (${n.error ?? "unknown"})`;
}
function Be(n, e) {
  let o = `${e.stdout}
${e.stderr}`.trim();
  if (!o) return;
  if (o.length > bt) o = `${o.slice(0, bt)}\u2026 (${o.length} chars)`;
  t(`[agent-proxy] ${n}: ${o}`);
}
import { mkdir as He, open as kt, readFile as Dt, realpath as Fe, rename as Qn, stat as Zn, unlink as V, writeFile as z } from "fs/promises";
import { homedir as Pt } from "os";
import { dirname as Le, join as J } from "path";
var ge = "changeit",
  er = /[\s'"]/,
  At = "# >>> ccr-agent-proxy (managed by Claude Code) >>>",
  Ie = "# <<< ccr-agent-proxy <<<",
  Nt = ".ca.pem",
  tr = 4277010157,
  nr = 33554432,
  rr = 3000;
function $t(n, e, o) {
  let r = o?.trim();
  if (r?.includes("javax.net.ssl.trustStore=")) return r;
  let s = It(n, e).join(" ");
  return r ? `${s} ${r}` : s;
}
function It(n, e) {
  return e === "JKS" ? [`-Djavax.net.ssl.trustStore=${n}`, "-Djavax.net.ssl.trustStoreType=JKS"] : [`-Djavax.net.ssl.trustStore=${n}`, `-Djavax.net.ssl.trustStorePassword=${ge}`, "-Djavax.net.ssl.trustStoreType=PKCS12"];
}
async function Lt(n) {
  let failureCodes = [],
    o = {
      failureCodes: failureCodes
    },
    r = {
      used: !1
    },
    s = J(n.stateDir, "agent-proxy-ca.crt");
  try {
    await He(n.stateDir, {
      recursive: !0
    }), await z(s, n.ccrCa, "utf8");
  } catch (error) {
    return t(`[agent-proxy] tool trust setup skipped: cannot write CA file: ${l(error)}`, {
      level: "warn"
    }), m("agent_proxy_tool_trust", "ca_file_write_failed"), o;
  }
  let g = await vt(n.keytoolBin, or),
    d = await vt(n.certutilBin, () => sc("certutil")),
    [u, nss_dbs_unchanged] = await Promise.all([(async () => {
      if (!g) {
        t("[agent-proxy] no keytool found; skipping JVM truststore");
        return;
      }
      let path = J(n.stateDir, "java-truststore.p12"),
        w,
        T = async () => {
          let cacerts = await Mt(g),
            holdsCa = cacerts !== void 0 && (await ir(cacerts, n.ccrCa));
          return {
            cacerts: cacerts,
            holdsCa: holdsCa
          };
        },
        x = await T(),
        S = (await he(`${path}${Nt}`, n.ccrCa)) && (await Zn(path).then(E => E.isFile(), () => !1));
      if (!x.holdsCa && !S) await n.systemTrust?.then(() => {}, () => {}), x = await T();
      if (x.cacerts && x.holdsCa) t(`[agent-proxy] JDK truststore at ${x.cacerts} already holds the CA; using it`), w = {
        path: x.cacerts,
        type: "JKS",
        source: "system"
      };else if (S) t(`[agent-proxy] reusing JVM truststore at ${path}`), w = {
        path: path,
        type: "PKCS12",
        source: "reused"
      };else {
        let E = A => ar(g, x.cacerts, n.ccrCa, s, path, A),
          P = [],
          path_2 = await E(P);
        if (P[0] === "java_truststore_seed_failed") r.used = !0, t("[agent-proxy] keytool seed failed; trying once more after a pause"), await (n.seedRetryPause?.() ?? Q(rr)), path_2 = await E(failureCodes);else failureCodes.push(...P);
        if (!path_2) return;
        w = {
          path: path_2,
          type: "PKCS12",
          source: "built"
        };
      }
      if (er.test(w.path)) {
        t(`[agent-proxy] truststore path contains JVM-unsafe characters; not emitting JAVA_TOOL_OPTIONS: ${w.path}`, {
          level: "warn"
        }), failureCodes.push("jvm_unsafe_truststore_path");
        return;
      }
      return o.javaTrustStorePath = w.path, o.javaTrustStoreType = w.type, await sr(w.path, w.type, n.bazelrcPath ?? "/etc/bazel.bazelrc", failureCodes), w.source;
    })(), (async () => {
      if (!d) {
        t("[agent-proxy] certutil not found; skipping NSS trust for browsers");
        return;
      }
      return lr(s, n.ccrCa, n.nssDbDirs ?? [J(Pt(), ".pki", "nssdb"), J(YHe(), "pki", "nssdb")], d, failureCodes);
    })(), ur(n.caBundlePath, n.botoConfigPath ?? J(Pt(), ".boto"), failureCodes), dr(n, n.profileDPath ?? "/etc/profile.d/ccr-agent-proxy-ca.sh", failureCodes).then(y => {
      o.profileDPath = y;
    })]),
    h = nss_dbs_unchanged === void 0 ? void 0 : {
      nss_dbs_unchanged: nss_dbs_unchanged
    };
  if (failureCodes.length === 0) _("agent_proxy_tool_trust", {
    reused: u === "reused",
    ...(u && {
      store: c(u)
    }),
    ...(r.used && {
      java_seed_retried: !0
    }),
    ...h
  });else {
    let y = failureCodes[0];
    if (r.used || h) p("agent_proxy_tool_trust", y, {
      ...(r.used && {
        java_seed_retried: !0
      }),
      ...h
    });else p("agent_proxy_tool_trust", y);
  }
  return o;
}
async function vt(n, e) {
  if (n) return Fe(n).catch(() => {
    return;
  });
  return (await e()) ?? void 0;
}
async function or() {
  let n = [await sc("keytool"), a.JAVA_HOME ? J(a.JAVA_HOME, "bin", "keytool") : void 0],
    e;
  for (let o of n) {
    if (!o) continue;
    let r = await Fe(o).catch(() => {
      return;
    });
    if (!r) continue;
    if (e ??= r, await Mt(r)) return r;
  }
  return e;
}
async function Mt(n) {
  let e = Le(Le(n));
  for (let o of [J(e, "lib", "security", "cacerts"), J(e, "jre", "lib", "security", "cacerts")]) {
    let r = await Fe(o).catch(() => {
      return;
    });
    if (r) return r;
  }
  return;
}
async function ir(n, e) {
  let o = e.match(y2);
  if (!o) return !1;
  let r, s;
  try {
    s = await kt(n, sa());
    let g = await s.stat();
    if (!g.isFile() || g.size > nr) return !1;
    r = await s.readFile();
  } catch {
    return !1;
  } finally {
    await s?.close().catch(() => {});
  }
  if (r.length < 4 || r.readUInt32BE(0) !== tr) return !1;
  return o.every(item => {
    let d = Me(item);
    return d.length >= 64 && d[0] === 48 && r.includes(d);
  });
}
async function ar(n, e, o, r, s, g) {
  if (!e) {
    t(`[agent-proxy] no JDK cacerts found near ${n}; skipping JVM truststore`), g.push("jdk_cacerts_not_found");
    return;
  }
  let d = `${s}.${process.pid}.tmp`;
  await V(d).catch(() => {});
  let u = await K(n, ["-importkeystore", "-noprompt", "-srckeystore", e, "-srcstorepass", ge, "-destkeystore", d, "-deststoretype", "PKCS12", "-deststorepass", ge]);
  if (!u.ok) {
    t(`[agent-proxy] keytool importkeystore failed: ${u.detail}`, {
      level: "warn"
    }), g.push("java_truststore_seed_failed"), await V(d).catch(() => {});
    return;
  }
  let f = await Rt(n, d, "ccr-agent-proxy", r);
  if (!f.ok) {
    t(`[agent-proxy] keytool importcert failed: ${f.detail}`, {
      level: "warn"
    }), g.push("java_truststore_import_failed"), await V(d).catch(() => {});
    return;
  }
  let h = me(o),
    y = !0;
  if (h !== void 0) {
    let T = `${d}.second.crt`,
      x = await z(T, `${h}
`, "utf8").then(() => Rt(n, d, "ccr-agent-proxy-2", T), S => ({
        ok: !1,
        detail: l(S)
      }));
    if (await V(T).catch(() => {}), !x.ok) t(`[agent-proxy] could not import the second certificate: ${x.detail}; the store holds the first only and is rebuilt on the next start`, {
      level: "warn"
    }), g.push("java_truststore_second_import_failed"), y = !1;
  }
  let w = `${s}${Nt}`;
  if (!y) await V(w).catch(() => {});
  try {
    await Qn(d, s).catch(async () => {
      await z(s, await Dt(d)), await V(d).catch(() => {});
    });
  } catch (error) {
    t(`[agent-proxy] could not move JVM truststore into place: ${l(error)}`, {
      level: "warn"
    }), g.push("java_truststore_publish_failed");
    return;
  }
  if (y) await z(w, o, "utf8").catch(T => {
    t(`[agent-proxy] could not record the truststore's CA: ${l(T)}`);
  });
  return t(`[agent-proxy] JVM truststore built at ${s}`), s;
}
function Rt(n, e, o, r) {
  return K(n, ["-importcert", "-noprompt", "-trustcacerts", "-alias", o, "-file", r, "-keystore", e, "-storetype", "PKCS12", "-storepass", ge]);
}
async function sr(n, e, o, r) {
  let s = It(n, e).map(item => `--host_jvm_args=${item}`).join(" "),
    g = `${At}
# Bazel's repository downloader runs on its embedded JDK and ignores
# JAVA_TOOL_OPTIONS; carry the agent-proxy truststore via startup options.
startup ${s}
${Ie}
`,
    d;
  try {
    d = await Dt(o, "utf8");
  } catch (error) {
    if (!B(error)) {
      t(`[agent-proxy] could not read ${o}: ${l(error)}`), r.push("bazelrc_write_failed");
      return;
    }
    d = "";
  }
  let u = d.indexOf(At),
    f = d.indexOf(Ie),
    y = (u >= 0 && f > u ? d.slice(0, u) + d.slice(f + Ie.length).replace(/^\n/, "") : d).trimEnd(),
    w = y ? `${y}

${g}` : g;
  if (w === d) return;
  try {
    await z(o, w, "utf8"), t(`[agent-proxy] wrote Bazel trust block to ${o}`);
  } catch (error) {
    t(`[agent-proxy] could not write ${o}: ${l(error)}`), r.push("bazelrc_write_failed");
  }
}
async function lr(n, e, o, r, s) {
  let g = 0,
    d = e.match(y2)?.[0],
    u = me(e),
    f = `${n}.${process.pid}.second`;
  if (u !== void 0) await z(f, `${u}
`, "utf8").catch(() => {});
  for (let h of o) {
    if (!(await He(h, {
      recursive: !0
    }).then(() => !0, S => (t(`[agent-proxy] could not create NSS dir ${h}: ${l(S)}`), !1)))) {
      s.push("nss_add_failed");
      continue;
    }
    let w = `sql:${h}`;
    if (d !== void 0 && (await cr(r, w, u === void 0 ? [d] : [d, u]).catch(S => (t(`[agent-proxy] NSS check of ${h} threw, taken as a difference: ${l(S)}`), !1)))) {
      t(`[agent-proxy] NSS DB at ${h} already holds the served certificates, trusted; left as is`), g++;
      continue;
    }
    await K(r, ["-D", "-d", w, "-n", "ccr-agent-proxy"]), await K(r, ["-D", "-d", w, "-n", "ccr-agent-proxy-2"]);
    let T = Ot(w, "ccr-agent-proxy", n),
      x = await K(r, T);
    if (!x.ok) await K(r, ["-N", "--empty-password", "-d", w]), x = await K(r, T);
    if (x.ok) {
      if (t(`[agent-proxy] MITM CA added to NSS DB at ${h}`), u !== void 0) {
        let S = await K(r, Ot(w, "ccr-agent-proxy-2", f));
        if (!S.ok) t(`[agent-proxy] could not add the second certificate to the NSS DB at ${h}: ${S.detail}; it holds the first only`), s.push("nss_second_add_failed");
      }
    } else t(`[agent-proxy] certutil -A failed for ${h}: ${x.detail}`), s.push("nss_add_failed");
  }
  return await V(f).catch(() => {}), g;
}
function Ot(n, e, o) {
  return ["-A", "-d", n, "-t", "C,,", "-n", e, "-i", o];
}
async function cr(n, e, o) {
  let r = await K(n, ["-L", "-d", e]);
  if (!r.ok) return !1;
  let s = r.stdout.split(`
`).map(item => item.trim().split(/\s+/)),
    g = ["ccr-agent-proxy", "ccr-agent-proxy-2"];
  for (let [f, h] of g.entries()) {
    let y = s.filter(item => item.length === 2 && item[0] === h).map(item => item[1]),
      w = f < o.length ? 1 : 0;
    if (y.length !== w || y.some(item => item !== "C,,")) return !1;
  }
  let d = new Set();
  for (let f of g.slice(0, o.length)) {
    let h = await K(n, ["-L", "-d", e, "-n", f, "-a"]);
    if (!h.ok) return !1;
    for (let y of h.stdout.match(y2) ?? []) d.add(Me(y).toString("base64"));
  }
  let u = new Set(o.map(item => Me(item).toString("base64")));
  return d.size === u.size && [...u].every(item => d.has(item));
}
async function ur(n, e, o) {
  let r = `[Boto]
ca_certificates_file = ${n}
`;
  try {
    await z(e, r, {
      flag: "wx",
      mode: 420
    }), t(`[agent-proxy] wrote ${e} for gsutil trust`);
  } catch (error) {
    if (v(error) === "EEXIST") return;
    t(`[agent-proxy] could not write ${e}: ${l(error)}`), o.push("boto_write_failed");
  }
}
async function dr(n, e, o) {
  if (!n.hasSystemCa) {
    await V(e).catch(() => {});
    return;
  }
  let r = ["# Managed by Claude Code (CCR agent-proxy). Re-exports CA-trust env", "# vars for login shells that start from a scrubbed environment. Each", "# export is set-if-absent so an explicit value in the shell wins.", "# HTTPS_PROXY is intentionally NOT set here: the relay port is", "# ephemeral and persisting it would break all HTTPS in login shells", "# once the relay process exits. Scrubbed login shells dial direct.", `if [ -r ${Ft(n.caBundlePath)} ]; then`];
  for (let g of [...kqt, ...Eqt]) r.push("  " + Bt(g, n.caBundlePath));
  for (let [g, d] of Object.entries(Wue)) r.push("  " + Bt(g, d));
  r.push("fi");
  let s = r.join(`
`) + `
`;
  try {
    return await He(Le(e), {
      recursive: !0
    }), await z(e, s, {
      mode: 420
    }), t(`[agent-proxy] wrote ${e} for login-shell trust`), e;
  } catch (error) {
    t(`[agent-proxy] could not write ${e}: ${l(error)}`), o.push("profile_d_write_failed");
    return;
  }
}
function Bt(n, e) {
  return `if [ -z "\${${n}:-}" ]; then ${n}=${Ft(e)}; fi; export ${n}`;
}
function Ft(n) {
  return `'${n.replace(/'/g, "'\\''")}'`;
}
function me(n) {
  let e = n.match(y2) ?? [];
  return e.length === 2 && e[1] !== e[0] ? e[1] : void 0;
}
function Me(n) {
  return Buffer.from(n.replace(/-----(?:BEGIN|END) CERTIFICATE-----/g, ""), "base64");
}
async function Ge(n, e) {
  let o = Buffer.from(e, "utf8"),
    r;
  try {
    r = await kt(n, sa());
    let s = await r.stat();
    if (!s.isFile() || s.size !== o.length) return "differs";
    let g = Buffer.alloc(o.length + 1),
      {
        bytesRead: bytesRead
      } = await r.read(g, 0, g.length, 0);
    return bytesRead === o.length && g.subarray(0, bytesRead).equals(o) ? "holds" : "differs";
  } catch (error) {
    return B(error) ? "missing" : "differs";
  } finally {
    await r?.close().catch(() => {});
  }
}
async function he(n, e) {
  return (await Ge(n, e)) === "holds";
}
async function K(n, e) {
  let o = await tt(n, e, {
    timeout: 20000,
    preserveOutputOnError: !0,
    useCwd: !1
  });
  if (o.code === 0) return {
    ok: !0,
    stdout: o.stdout,
    detail: ""
  };
  return {
    ok: !1,
    stdout: o.stdout,
    detail: `${o.error ?? `exit ${o.code}`} ${o.stderr.slice(0, 200)}`.trim()
  };
}
var l1o = "/run/ccr/session_token",
  Kt = ["/etc/ssl/certs/ca-certificates.crt", "/etc/pki/tls/certs/ca-bundle.crt", "/etc/ssl/cert.pem"],
  Q4r = ["localhost", "127.0.0.1", "::1", "127.0.0.0/8", "0.0.0.0/8", "::", "169.254.0.0/16", "api.anthropic.com", "api-staging.anthropic.com", "api-pr-preview.anthropic.com", "mcp-proxy.anthropic.com", "mcp-proxy-staging.anthropic.com", "registry.npmjs.org", "jsr.io", "npm.jsr.io", "pypi.org", "files.pythonhosted.org", "index.crates.io", "proxy.golang.org", "host.docker.internal"],
  noProxy = [...Q4r, "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10", ".svc.cluster.local", "*.svc.cluster.local"].join(","),
  c1o = Q4r.join(","),
  d1o = ["127.0.0.1", "localhost", "::1", "127.0.0.0/8", "0.0.0.0/8", "169.254.0.0/16", "host.docker.internal", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10", ".svc.cluster.local", "*.svc.cluster.local"].join(","),
  Z4r = ["localhost", "127.0.0.1", "::1", "127.0.0.0/8", "0.0.0.0/8", "::", "host.docker.internal"].join(","),
  u1o = [Z4r, "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10"].join(","),
  KVo = ["169.254.0.0/16", ".svc.cluster.local", "*.svc.cluster.local"].join(",");
class Vt {
  state = {
    enabled: !1,
    noProxy: noProxy
  };
  relay = void 0;
  generation = 0;
  activate(n, e) {
    this.state = n, this.relay = e, Ahr(`${qe(e.port)}/__agentproxy/status`);
  }
  reset() {
    this.generation++, this.state = {
      enabled: !1,
      noProxy: noProxy
    }, kJt(void 0), kOr(void 0), Ahr(void 0), this.relay?.stop(), this.relay = void 0;
  }
}
var p1o = new q(() => new Vt());
function ye() {
  return p1o.of(j().host);
}
async function YVo(opts) {
  let runtime = ye(),
    o = process.env.AGENT_PROXY_URL,
    r = process.env.AGENT_PROXY_AUTH_TOKEN;
  a.unset("AGENT_PROXY_URL"), a.unset("AGENT_PROXY_AUTH_TOKEN");
  let CCR_AGENT_PROXY_RELAY_MODE = a.CCR_AGENT_PROXY_RELAY_MODE,
    CCR_AGENT_PROXY_INCLUDE_HOSTS = a.CCR_AGENT_PROXY_INCLUDE_HOSTS,
    CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED = a.CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED,
    CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED = a.CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED,
    CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY = a.CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY;
  if (a.unset("CCR_AGENT_PROXY_RELAY_MODE"), a.unset("CCR_AGENT_PROXY_INCLUDE_HOSTS"), a.unset("CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED"), a.unset("CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED"), !Ne(process.env.CLAUDE_CODE_REMOTE)) return runtime.state;
  if (!a.CCR_AGENT_PROXY_ENABLED) return runtime.state;
  let h = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!h) return t("[agent-proxy] CLAUDE_CODE_REMOTE_SESSION_ID unset; proxy disabled", {
    level: "warn"
  }), m("agent_proxy_init", "agent_proxy_init_no_session_id"), runtime.state;
  let y = opts?.tokenPath ?? l1o,
    w = await Or(y),
    {
      existed: existed,
      token: token
    } = w;
  if (!token) token = Fl();
  if (!token && !r) return t("[agent-proxy] no session token; proxy disabled"), m("agent_proxy_init", "agent_proxy_init_no_token"), runtime.state;
  t(`[agent-proxy] token via ${existed ? y : "sessionIngressAuth"}`), Qe(Y => t(`[agent-proxy] ${Y}`, {
    level: "warn"
  }));
  let baseUrl = o ?? opts?.ccrBaseUrl ?? process.env.ANTHROPIC_BASE_URL ?? "https://api.anthropic.com",
    caBundlePath = opts?.caBundlePath ?? (Wt() ? M(Se(), "ccr", "ca-bundle.crt") : M(je(), ".ccr", "ca-bundle.crt")),
    systemCa = opts?.systemCaPath ? await le(opts.systemCaPath, "utf8").catch(() => "") : await m1o(),
    C = await kr(systemCa, caBundlePath),
    localCa = C ? `${systemCa}
${C}` : systemCa,
    toolScoped = Wt(),
    installedClisScan = toolScoped ? void 0 : Cr(),
    selective_2;
  if (!o && CCR_AGENT_PROXY_RELAY_MODE === "selective") {
    let includeHosts = (CCR_AGENT_PROXY_INCLUDE_HOSTS ?? "").split(",").map(item => item.trim()).filter(item => item.length > 0);
    if (includeHosts.length > 0) selective_2 = {
      includeHosts: includeHosts
    }, t(`[agent-proxy] selective relay: ${includeHosts.length} include hosts; unlisted use normal networking`);else t("[agent-proxy] CCR_AGENT_PROXY_RELAY_MODE=selective but include-host " + "list is empty/unparsable \u2014 FAIL-CLOSED to tunnel-all", {
      level: "warn"
    }), p("agent_proxy_init", "agent_proxy_selective_empty_include");
  }
  let W = o ? Z4r : u1o,
    H = {
      runtime: runtime,
      generation: runtime.generation,
      sessionId: h,
      standaloneUrl: o,
      standaloneAuthToken: r,
      token: token,
      unlinkTokenPath: existed ? y : void 0,
      baseUrl: baseUrl,
      caBundlePath: caBundlePath,
      systemCa: systemCa,
      localCa: localCa,
      toolScoped: toolScoped,
      selective: selective_2,
      noProxy: CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY ? W : selective_2 ? d1o : o ? c1o : noProxy,
      bundleCoversEveryHost: systemCa !== "" || Boolean(o) && CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY,
      receiveGateDisabled: Boolean(CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED),
      uploadGateDisabled: Boolean(CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED),
      installedClisScan: installedClisScan,
      opts: opts
    },
    ne = await qt(H, 1);
  if (ne.outcome === "retry") p("agent_proxy_init", "agent_proxy_init_ca_exhausted_retrying"), wr(H, ne).catch(Y => {
    t(`[agent-proxy] retry loop crashed: ${l(Y)}; proxy stays disabled`, {
      level: "warn"
    }), m("agent_proxy_init", "agent_proxy_init_retry_loop_crashed");
  });
  return runtime.state;
}
var Gt = 300000,
  _r = 3600000;
function Jt(n, e) {
  if (n.generation !== e || n.state.enabled || oE()) return "exit";
  return na() ? "defer" : null;
}
function f1o(n, e) {
  return Math.min(qN(n - 1, e, Gt), Gt);
}
async function wr(n, e) {
  let {
      runtime: runtime_2,
      generation: generation,
      opts: opts_2
    } = n,
    g = Date.now(),
    d = opts_2?.retryBadAfterMs ?? _r,
    u = !1;
  for (let f = 2;; f++) {
    let h = opts_2?.retryDelayMs?.(f) ?? f1o(f, e.retryAfter);
    t(`[agent-proxy] ${e.detail}; attempt ${f} in ${(h / 1000).toFixed(1)}s`, {
      level: "warn"
    }), await Q(h, void 0, {
      unref: !0
    });
    let y = Jt(runtime_2, generation);
    if (y === "exit") return;
    if (y === "defer") continue;
    let w = await qt(n, f);
    if (w.outcome !== "retry") return;
    if (e = w, !u && Date.now() - g >= d) u = !0, t(`[agent-proxy] ${e.detail}; still failing after ${f} attempts over ${Math.round((Date.now() - g) / 60000)} min \u2014 counting as exhausted, retrying anyway`, {
      level: "warn"
    }), m("agent_proxy_init", "agent_proxy_init_ca_exhausted");
  }
}
async function qt(n, attempts) {
  let {
      runtime: runtime_3,
      sessionId: sessionId,
      standaloneUrl: standaloneUrl,
      standaloneAuthToken: standaloneAuthToken,
      token: token_2,
      unlinkTokenPath: unlinkTokenPath,
      baseUrl: baseUrl_2,
      caBundlePath: caBundlePath_2,
      systemCa: systemCa_2,
      localCa: localCa_2,
      toolScoped: toolScoped_2,
      selective: selective_3,
      noProxy: noProxy_2,
      bundleCoversEveryHost: bundleCoversEveryHost,
      receiveGateDisabled: receiveGateDisabled,
      uploadGateDisabled: uploadGateDisabled,
      installedClisScan: installedClisScan_2,
      opts: opts_3
    } = n,
    hasSystemCa = systemCa_2 !== "",
    k = await $r(baseUrl_2, localCa_2, caBundlePath_2, {
      budgetMs: opts_3?.caFetchBudgetMs ?? (attempts === 1 ? 5000 : 15000),
      tries: attempts === 1 ? 3 : 1
    });
  if (k.outcome === "retry") return k;
  if (k.outcome === "fatal") return t(`[agent-proxy] ${k.detail}; proxy disabled`, {
    level: "warn"
  }), m("agent_proxy_init", `agent_proxy_init_ca_${k.code}`), k;
  let W = k.ccrCa;
  if (!toolScoped_2) await Ir(opts_3?.awsConfigPath ?? M(je(), ".aws", "config"));
  try {
    let wsUrl = baseUrl_2.replace(/^http/, "ws") + hqn + "/ws",
      readmePath = M(caBundlePath_2, "..", "README.md"),
      token_3 = standaloneAuthToken ?? token_2 ?? "",
      F = await dt({
        wsUrl: wsUrl,
        sessionId: sessionId,
        token: token_3,
        getToken: standaloneAuthToken ? () => token_3 : () => Fl() || token_3,
        selective: selective_3,
        startupProbe: !0,
        limits: {
          ...(receiveGateDisabled && {
            receiveHighWater: 1 / 0
          }),
          ...(uploadGateDisabled && {
            sendPauseAfterPendingBytes: 1 / 0,
            sendStallTimeoutMs: 1 / 0
          })
        },
        statusProvider: () => ({
          ...runtime_3.state,
          readmePath: readmePath,
          gitConfigInjection: Ye(),
          gitSshRewrite: Ye() && Je()
        }),
        onFailure: onFailure
      }),
      Qt = gt(async () => F.stop()),
      X = {
        enabled: !0,
        port: F.port,
        caBundlePath: caBundlePath_2,
        hasSystemCa: hasSystemCa,
        bundleCoversEveryHost: bundleCoversEveryHost,
        noProxy: noProxy_2,
        selective: Boolean(selective_3),
        standalone: Boolean(standaloneUrl),
        toolScoped: toolScoped_2,
        installedProxyPreconfiguredClis: await installedClisScan_2
      },
      ze = Jt(runtime_3, n.generation);
    if (ze) return F.stop(), Qt(), ze === "exit" ? {
      outcome: "stale"
    } : {
      outcome: "retry",
      detail: "shutdown claimed during bring-up",
      retryAfter: null
    };
    if (runtime_3.activate(X, F), !selective_3 && !standaloneUrl && !toolScoped_2) kOr({
      proxyUrl: qe(F.port),
      gatewayCa: W
    });
    if (toolScoped_2) {
      let R = !1,
        [git_config, we] = await Promise.all([a.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG ? Sr(F.port, caBundlePath_2).catch(be => (t(`[agent-proxy] governed git config append failed: ${l(be)}`, {
          level: "warn"
        }), p("agent_proxy_tool_scoped", "git_config_append_failed"), R = !0, !1)) : !1, a.CLAUDE_CODE_AGENT_PROXY_GH_SHIM ? Er(F.port, caBundlePath_2).catch(be => {
          t(`[agent-proxy] gh shim write failed: ${l(be)}`, {
            level: "warn"
          }), p("agent_proxy_tool_scoped", "gh_shim_write_failed"), R = !0;
          return;
        }) : void 0]);
      if (we) X.ghShimDir = we;
      if (!R) _("agent_proxy_tool_scoped", {
        git_config: git_config,
        gh_shim: Boolean(we)
      });
    }
    t(`[agent-proxy] enabled on 127.0.0.1:${F.port}`), _("agent_proxy_init", {
      attempts: attempts
    }), kJt(We(caBundlePath_2, void 0)), se(readmePath, Rr(F.port, caBundlePath_2), "utf8").then(() => {
      if (runtime_3.state !== X) return;
      kJt(We(caBundlePath_2, readmePath));
    }).catch(R => {
      if (t(`[agent-proxy] README write failed: ${R instanceof Error ? R.message : String(R)}`), runtime_3.state !== X) return;
      kJt(We(caBundlePath_2, void 0));
    }), vr().then(R => {
      if (R.length > 0 && runtime_3.state === X) X.gitConfigConflicts = R, t(`[agent-proxy] git config may defeat proxy routing: ${R.join(", ")}`, {
        level: "warn"
      });
    }).catch(() => {});
    let systemTrust = toolScoped_2 ? void 0 : g1o(W, opts_3?.systemTrustTargets ?? Dr, {
      systemCa: systemCa_2,
      recordPath: M(caBundlePath_2, "..", "system-trust.ca.pem")
    }).catch(() => {});
    if (opts_3?.toolTrust !== !1 && !toolScoped_2) Lt({
      ccrCa: W,
      caBundlePath: caBundlePath_2,
      hasSystemCa: X.hasSystemCa ?? !1,
      stateDir: M(caBundlePath_2, ".."),
      systemTrust: systemTrust,
      ...(opts_3?.toolTrust ?? {})
    }).then(R => {
      if (runtime_3.state !== X) return;
      if (R.javaTrustStorePath && R.javaTrustStoreType) X.javaTrustStorePath = R.javaTrustStorePath, X.javaTrustStoreType = R.javaTrustStoreType;
      if (R.profileDPath) {
        let profileDPath = R.profileDPath;
        gt(() => oe(profileDPath).catch(() => {}));
      }
      if (R.failureCodes.length > 0) X.toolTrustFailureCodes = R.failureCodes;
    }).catch(R => {
      t(`[agent-proxy] tool trust setup failed: ${R instanceof Error ? R.message : String(R)}`, {
        level: "warn"
      }), p("agent_proxy_tool_trust", "setup_threw");
    });
    if (unlinkTokenPath) await oe(unlinkTokenPath).catch(() => {
      t("[agent-proxy] token file unlink failed", {
        level: "warn"
      });
    });
    return {
      outcome: "ok"
    };
  } catch (error) {
    return t(`[agent-proxy] relay start failed: ${error instanceof Error ? error.message : String(error)}; proxy disabled`, {
      level: "warn"
    }), m("agent_proxy_init", "agent_proxy_init_relay_start_failed"), {
      outcome: "fatal"
    };
  }
}
var Ke = [{
    clis: ["gh"],
    realCredentialEnv: ["GH_TOKEN", "GITHUB_TOKEN"],
    placeholders: {
      GH_TOKEN: F1,
      GITHUB_TOKEN: F1
    }
  }, {
    clis: ["aws"],
    realCredentialEnv: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "AWS_PROFILE", "AWS_SHARED_CREDENTIALS_FILE", "AWS_CONFIG_FILE", "AWS_WEB_IDENTITY_TOKEN_FILE", "AWS_ROLE_ARN", "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", "AWS_CONTAINER_CREDENTIALS_FULL_URI"],
    placeholders: {
      AWS_ACCESS_KEY_ID: F1,
      AWS_SECRET_ACCESS_KEY: F1
    }
  }, {
    clis: ["gcloud", "bq", "gsutil"],
    realCredentialEnv: ["CLOUDSDK_AUTH_ACCESS_TOKEN", "GOOGLE_APPLICATION_CREDENTIALS"],
    placeholders: {
      CLOUDSDK_AUTH_ACCESS_TOKEN: F1
    }
  }],
  Ut = Ke.flatMap(item => item.clis).sort(),
  wWt = Ke.flatMap(item => Object.keys(item.placeholders)),
  zt = 1000;
function XVo() {
  let state = ye().state;
  if (!state.enabled || !state.port || !state.caBundlePath) {
    if (process.env.HTTPS_PROXY && process.env.SSL_CERT_FILE) {
      let r = {};
      for (let s of ["HTTPS_PROXY", "https_proxy", "NO_PROXY", "no_proxy", ...cSe, ...Object.keys(Wue), ...wWt]) if (process.env[s]) r[s] = process.env[s];
      return r;
    }
    return {};
  }
  if (state.toolScoped) {
    let r = {};
    if (state.ghShimDir) {
      let s = process.env.PATH ?? "";
      r.PATH = s ? `${state.ghShimDir}${jt}${s}` : state.ghShimDir;
    }
    return r;
  }
  let e = qe(state.port),
    o = {
      HTTPS_PROXY: e,
      https_proxy: e,
      NO_PROXY: state.noProxy,
      no_proxy: state.noProxy
    };
  for (let r of kqt) o[r] = state.caBundlePath;
  if (state.bundleCoversEveryHost) {
    for (let r of Eqt) o[r] = state.caBundlePath;
    for (let [r, s] of Object.entries(Wue)) if (process.env[r] === void 0) o[r] = s;
  }
  if (state.javaTrustStorePath && state.javaTrustStoreType) o.JAVA_TOOL_OPTIONS = $t(state.javaTrustStorePath, state.javaTrustStoreType, a.JAVA_TOOL_OPTIONS);
  if (a.GIT_TERMINAL_PROMPT === void 0) o.GIT_TERMINAL_PROMPT = lK.GIT_TERMINAL_PROMPT;
  if (a.GIT_ASKPASS === void 0) o.GIT_ASKPASS = lK.GIT_ASKPASS;
  if (a.GCM_INTERACTIVE === void 0) o.GCM_INTERACTIVE = lK.GCM_INTERACTIVE;
  if (Ye()) {
    let r = [["credential.interactive", "false"]];
    if (Je()) r.push(...Tzr.map(item => [`url.https://${Ho}/.insteadOf`, item]));
    Object.assign(o, QN(void 0, r));
  }
  for (let r of Ke) if (!r.realCredentialEnv.some(item => process.env[item])) Object.assign(o, r.placeholders);
  return o;
}
function Wt() {
  return Boolean(a.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG || a.CLAUDE_CODE_AGENT_PROXY_GH_SHIM);
}
var Yt = "# >>> claude agent-proxy governed-git (auto-generated; do not edit) >>>",
  Ue = "# <<< claude agent-proxy governed-git <<<",
  br = '"!f() { case $1 in get) echo quit=true ;; esac; }; f"';
function Tr() {
  let CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS = a.CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS;
  if (!CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS || CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS.trim() === "") return [Ho];
  let e = [],
    o = 0;
  for (let r of CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS.split(",")) {
    let s = r.trim();
    if (s === "") continue;
    let g = P$(s);
    if (g === "" || g.length > 255 || !o1t.test(g)) {
      o++;
      continue;
    }
    let d = Ro(g) ? Ho : g;
    if (!e.includes(d)) e.push(d);
  }
  if (o > 0) t(`[agent-proxy] governed git: ignored ${o} governed-host ${I(o, "entry", "entries")} that ${I(o, "is", "are")} not a bare hostname`, {
    level: "warn"
  });
  return e;
}
async function Sr(n, e) {
  let GIT_CONFIG_GLOBAL = process.env.GIT_CONFIG_GLOBAL;
  if (!GIT_CONFIG_GLOBAL) return t("[agent-proxy] governed git config arm set but GIT_CONFIG_GLOBAL is unset; skipping (refusing to write a shared global config)", {
    level: "warn"
  }), !1;
  if (/[\n\r"]/.test(e)) return t("[agent-proxy] governed git: CA bundle path contains a newline or quote; skipping git config arm", {
    level: "warn"
  }), !1;
  let r = Tr();
  if (r.length === 0) return t("[agent-proxy] governed git: the governed-host list carried no usable host; skipping git config arm", {
    level: "warn"
  }), !1;
  let s = [Yt];
  for (let f of r) if (s.push(`[http "https://${f}/"]`, `	proxy = http://127.0.0.1:${n}`, `	sslCAInfo = ${e}`, ...(f === Ho ? [] : ["\textraHeader =", "\tcookieFile ="]), `[credential "https://${f}/"]`, ...(f === Ho ? [] : ["\thelper =", `	helper = ${br}`]), "\tinteractive = false"), f === Ho && Je()) s.push(`[url "https://${Ho}/"]`, ...Tzr.map(item => `	insteadOf = ${item}`));
  s.push(Ue);
  let g = "";
  try {
    g = await le(GIT_CONFIG_GLOBAL, "utf8");
  } catch (error) {
    if (!B(error)) throw error;
  }
  let d = g.indexOf(Yt);
  if (d !== -1) {
    let f = g.indexOf(Ue, d);
    g = f !== -1 ? g.slice(0, d) + g.slice(f + Ue.length).replace(/^\n/, "") : g.slice(0, d);
  }
  let u = g.length > 0 && !g.endsWith(`
`) ? g + `
` : g;
  return await Cn(GIT_CONFIG_GLOBAL, u + s.join(`
`) + `
`, 384), t(`[agent-proxy] governed git: relay routing for ${r.length} governed ${I(r.length, "host")} appended to ${GIT_CONFIG_GLOBAL}`), !0;
}
async function xr(n, e) {
  let o = (a.PATH ?? "").split(jt);
  for (let r of o) {
    if (!r || r === e) continue;
    let s = M(r, n);
    try {
      if (await mr(s, pr.X_OK), (await Xt(s)).isFile()) return s;
    } catch {}
  }
  return;
}
async function Cr() {
  let n = new Set();
  try {
    await Ht(p1t(Ut, n), zt, "installed-CLI PATH sweep timed out");
  } catch (error) {
    t(`[agent-proxy] ${l(error)}; naming only the CLIs resolved so far`, {
      level: "warn"
    }), p("agent_proxy_init", "agent_proxy_path_probe_timeout");
  }
  return Ut.filter(item => n.has(item));
}
async function Er(n, e) {
  return;
}
function Ye() {
  return a.GIT_CONFIG_COUNT === void 0;
}
function Je() {
  return !ye().state.standalone && a.SSH_AUTH_SOCK === void 0 && a.GIT_SSH_COMMAND === void 0;
}
function We(n, e) {
  let o = e ? `see ${e} and ` : "",
    state_2 = ye().state;
  if (state_2.toolScoped) return `GitHub access for git${state_2.ghShimDir ? " and gh" : ""} goes through a pre-configured session proxy (CA bundle: ${n}) via per-session git config${state_2.ghShimDir ? " and a gh PATH shim" : ""}; other network traffic uses this machine's own egress. If git or gh fail against github.com (TLS or HTTP errors, or a transfer cut off with connection reset / unexpected disconnect), ${o}check the git config file named by $GIT_CONFIG_GLOBAL; never disable TLS verification or remove the proxy/sslCAInfo entries there.`;
  let s = state_2.installedProxyPreconfiguredClis ?? [],
    g = s.length > 0 ? ` Installed CLIs preconfigured for the proxy: ${s.join(", ")} \u2014 ` + "prefer a skill/MCP tool, then these, over raw curl." : "";
  return `Outbound HTTPS goes through a pre-configured agent proxy (CA bundle: ${n}). If a tool fails TLS verification, gets 403/405/407 from the proxy, or a transfer is cut off (connection reset, unexpected disconnect, RPC failed), ${o}run curl -sS "$HTTPS_PROXY/__agentproxy/status" for per-tool fixes and proxy state; never disable TLS verification or unset HTTPS_PROXY.` + g;
}
var Pr = [["git_http_proxy_configured", /^http\.(.+\.)?proxy$/m], ["git_ssl_cainfo_configured", /^http\.(.+\.)?sslcainfo$/m], ["git_https_to_ssh_insteadof_configured", /^url\.(git@|ssh:\/\/).*\.insteadof$/m]];
function Ar() {
  let n = yr(hr()).root;
  try {
    let e = je();
    if (e && gr(e).isDirectory()) return e;
    return n;
  } catch {
    return n;
  }
}
async function vr() {
  let n = new Set(),
    e = await Promise.all(["--global", "--system"].map(item => Ve("git", ["config", item, "--list", "--name-only"], {
      timeout: 5000,
      preserveOutputOnError: !0,
      cwd: Ar()
    })));
  for (let o of e) {
    if (o.code !== 0) continue;
    for (let [r, s] of Pr) if (s.test(o.stdout)) n.add(r);
  }
  return [...n];
}
function Rr(n, e) {
  let o = M(e, ".."),
    r = `http://127.0.0.1:${n}`;
  return `# Claude Code agent proxy

Outbound HTTPS from this session goes through a local proxy at ${r}
(set via HTTPS_PROXY) which tunnels to a policy-enforcing egress proxy. TLS is
re-terminated there, so every tool must trust the CA bundle at
${e}. The standard CA environment variables, the system trust
store (where possible), a JVM truststore, the Bazel system bazelrc, the
browser NSS store, and gsutil's boto config are already set up.

## Quick diagnosis

1. Run: curl -sS ${r}/__agentproxy/status
   It reports proxy state, which trust and git accommodations are active
   (javaTrustStorePath, toolTrustFailureCodes, gitSshRewrite,
   gitConfigConflicts), and the most recent proxy-side failures.
2. Find the failure class below and apply the matching fix; gitConfigConflicts
   codes map to the git section, toolTrustFailureCodes to the JVM section.
3. Never disable TLS verification, never unset HTTPS_PROXY, and do not retry
   organization policy denials (403/407) \u2014 report them instead.

## Failure classes and fixes

### "certificate verify failed" / "self-signed certificate in chain" / PKIX errors

The failing tool is not reading the pre-set CA configuration. In order:

- If the tool has a CA flag or env var, point it at ${e}
  (examples: --cacert, SSL_CERT_FILE, NODE_EXTRA_CA_CERTS, REQUESTS_CA_BUNDLE,
  AWS_CA_BUNDLE, DENO_CERT, CARGO_HTTP_CAINFO, PIP_CERT, GIT_SSL_CAINFO,
  BUNDLE_SSL_CA_CERT, HEX_CACERTS_PATH, NIX_SSL_CERT_FILE).
- Tool config files override environment variables. If one of these sets its
  own CA or disables verification, point it at the bundle instead:
  pip.conf "cert", npm "cafile" (npm config get cafile), ~/.curlrc "cacert",
  .wgetrc "ca_certificate", conda "ssl_verify", git "http.sslCAInfo",
  gradle.properties / MAVEN_OPTS "-Djavax.net.ssl.trustStore".
- JVM tools (Maven, Gradle, plain Java): when a JDK is present,
  JAVA_TOOL_OPTIONS points JVMs at a truststore that holds the proxy CA: the
  JDK's own store if the system trust install already added the CA there,
  otherwise ${o}/java-truststore.p12 (password "changeit"). Confirm
  javaTrustStorePath is set in the status output before pointing a build at it
  (toolTrustFailureCodes explains why it is missing). If the image or the
  build sets its own trustStore, that one wins \u2014 import the proxy CA into it
  with
  keytool -importcert -noprompt -alias ccr-agent-proxy -file ${o}/agent-proxy-ca.crt -keystore <their store>
  or point the build at the ready-made one. Bazel reads the managed block in
  /etc/bazel.bazelrc rather than JAVA_TOOL_OPTIONS.

### "405 Method Not Allowed" from the proxy

The tool sent a plain-HTTP (non-CONNECT) request: usually axios older than
1.16.1 (upgrade it) or a tool configured with HTTP_PROXY (unset HTTP_PROXY for
that tool \u2014 only HTTPS_PROXY is supported).

### 403 / 407 from the proxy

The destination host is not allowed by your organization's egress policy for
this session. Do not retry or route around it \u2014 report the blocked host.
Note: curl hides response bodies on failed CONNECTs; the status endpoint
records the reason.

### "connection reset" / "unexpected disconnect" / "RPC failed" mid-transfer

Once a tunnel is up the proxy cannot send an error response, so a connection
it aborts (tunnel to the egress proxy lost, or an upload the tunnel stopped
accepting) reaches the tool as a bare reset. recentRelayFailures in the status
output names the host and reason; check it before concluding the remote
service refused the operation.

### Tool ignores the proxy entirely (timeouts with no proxy error)

Some clients do not read HTTPS_PROXY: Node's built-in fetch (run that command
with NODE_USE_ENV_PROXY=1 on Node >= 22.21), aiohttp (pass trust_env=True),
Ruby bundler (reads only HTTP_PROXY, which this proxy does not serve),
hand-rolled Go dialers. Prefer the tool's own proxy option where one exists.

### git

SSH-form GitHub remotes (git@github.com:...) are rewritten to HTTPS
automatically unless this session has its own SSH setup or supplies its own
GIT_CONFIG_* (see gitSshRewrite in the status output). A gitconfig that sets
http.proxy / http.<url>.proxy (even empty), its own http.sslCAInfo, or an
https-to-ssh insteadOf makes git bypass the proxy or fail verification \u2014 the
status output's gitConfigConflicts codes name which of these were detected;
adjust those keys for this session if git times out.

### docker build / docker run

Processes inside containers cannot reach 127.0.0.1:${n} and do not trust
the CA. Workarounds: run builds with --network host, copy ${e}
into the build context and install it in an early layer, and pass proxy/CA
settings explicitly to the build.

### Not supported through the proxy (report, do not work around)

gRPC / HTTP/2-only APIs, WebSocket upgrades, client-mTLS, certificate-pinned
clients (e.g. Snowflake, ngrok), non-443 HTTPS ports, raw-TCP databases.

If a tool still cannot work through the proxy, report it to your
administrator or Anthropic support so the policy or tooling can be fixed.
`;
}
async function Or(n) {
  try {
    return {
      existed: !0,
      token: (await le(n, "utf8")).trim() || null
    };
  } catch (error) {
    if (B(error)) return {
      existed: !1,
      token: null
    };
    return t(`[agent-proxy] token read failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    }), {
      existed: !1,
      token: null
    };
  }
}
async function m1o(n = Kt) {
  for (let e of n) try {
    return await le(e, "utf8");
  } catch {}
  return "";
}
var Br = 1048576;
async function kr(n, e) {
  let o = new Set(),
    r = [],
    s = n;
  for (let g of cSe) {
    let d = process.env[g]?.trim();
    if (!d || d === e || o.has(d) || Kt.includes(d)) continue;
    o.add(d);
    let u;
    try {
      let y = await Xt(d);
      if (!y.isFile() || y.size > Br) continue;
      u = await le(d, "utf8");
    } catch (error) {
      if (!B(error)) t(`[agent-proxy] could not read customer CA bundle from ${g}: ${error instanceof Error ? error.message : String(error)}`, {
        level: "warn"
      });
      continue;
    }
    let f = u.match(y2);
    if (!f) continue;
    let h = 0;
    for (let y of f) {
      if (s.includes(y)) continue;
      r.push(y), s += `
${y}`, h++;
    }
    if (h > 0) t(`[agent-proxy] folded ${h} customer CA cert(s) from ${g} into the relay bundle`);
  }
  return r.join(`
`);
}
var Dr = [{
    dir: "/usr/local/share/ca-certificates",
    name: "ccr-agent-proxy.crt",
    refresh: ["update-ca-certificates"],
    link: "/etc/ssl/certs/ccr-agent-proxy.pem",
    direct: direct
  }, {
    dir: "/etc/pki/ca-trust/source/anchors",
    name: "ccr-agent-proxy.crt",
    refresh: ["update-ca-trust", "extract"]
  }],
  Nr = 1e4;
async function g1o(n, e, {
  systemCa: systemCa_3,
  recordPath: recordPath_2,
  timeoutMs: s = Nr
}) {
  let g = h1o(systemCa_3, n) && (await he(recordPath_2, n)),
    d = () => se(recordPath_2, n, "utf8").catch(y => {
      t(`[agent-proxy] could not record the system trust install: ${l(y)}`);
    }),
    u = {},
    f = me(n),
    h = `${f ?? n.match(y2)?.[0] ?? n.trimEnd()}
`;
  for (let {
    dir: dir,
    name: name,
    refresh: refresh,
    link: link_2,
    direct: S
  } of e) try {
    let anchorPath_2 = M(dir, name),
      P = link_2 ? {
        path: M(dir, name.replace(/\.crt$/, "-2.crt")),
        link: link_2.replace(/\.pem$/, "-2.pem")
      } : void 0,
      C = P === void 0 ? "missing" : await Ge(P.path, h),
      A = P !== void 0 && f !== void 0 && C === "missing";
    if (g && (await he(anchorPath_2, n)) && C !== "differs") {
      t("[agent-proxy] CA already in the system trust store; install skipped"), _("agent_proxy_system_trust", {
        reused: !0,
        ...(A && {
          old_layout: !0
        })
      });
      return;
    }
    if (S && link_2 && C === "missing") {
      let Z = Date.now() + s,
        k = !1,
        W = await $e(n, {
          anchorPath: anchorPath_2,
          link: link_2,
          layout: S,
          recordPath: recordPath_2,
          timeoutMs: s
        });
      if (W.outcome === "installed" && f !== void 0 && P) k = !0, W = await $e(h, {
        anchorPath: P.path,
        link: P.link,
        layout: S,
        recordPath: recordPath_2,
        timeoutMs: Math.max(1, Z - Date.now())
      });
      switch (W.outcome) {
        case "installed":
          await d(), t("[agent-proxy] CA installed to system trust directly"), _("agent_proxy_system_trust", {
            reused: !1,
            method: c("direct")
          });
          return;
        case "hook_incomplete":
          p("agent_proxy_system_trust", "hook_incomplete");
          return;
        case "abandoned":
          {
            let step_2 = W.step;
            u = {
              direct_failed_step: c(step_2)
            };
            break;
          }
        case "not_attempted":
          {
            let H = c(W.reason);
            u = k ? {
              second_anchor_direct_skipped: H
            } : {
              direct_skipped: H
            };
            break;
          }
      }
    } else if (S && link_2) u = {
      direct_skipped: c("anchor_present")
    };
    if (await se(anchorPath_2, n, "utf8"), await oe(recordPath_2).catch(() => {}), P && (f !== void 0 || C !== "missing")) await se(P.path, h, "utf8"), await oe(P.link).catch(() => {});
    if (link_2) await oe(link_2).catch(() => {});
    let N = await new Promise(Z => {
      fr(refresh[0], refresh.slice(1), {
        timeout: s,
        cwd: "/",
        windowsHide: !0,
        ...Ea("helper")
      }, k => Z(k ? B(k) ? 127 : 1 : 0));
    });
    if (N === 0) {
      await d(), t(`[agent-proxy] CA installed to system trust via ${refresh[0]}`), _("agent_proxy_system_trust", {
        reused: !1,
        method: c("refresh"),
        ...u
      });
      return;
    }
    t(`[agent-proxy] ${refresh[0]} exited ${N}; falling back to env-var trust`, {
      level: "warn"
    });
  } catch (error) {
    if (B(error)) continue;
    t(`[agent-proxy] system trust install via ${dir} failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    });
  }
  if (e.length > 0) p("agent_proxy_system_trust", "unavailable", u);
}
function h1o(n, e) {
  let o = e.match(y2);
  return o !== null && o.every(item => n.includes(item));
}
async function $r(n, e, o, {
  budgetMs: budgetMs,
  tries: tries
}) {
  let signal = AbortSignal.timeout(budgetMs),
    d = "",
    retryAfter = null;
  for (let h = 0; h < tries; h++) {
    retryAfter = null;
    try {
      let y = await fetch(`${n}${hqn}/ca-cert`, {
        signal: signal
      });
      if (y.status >= 500 || y.status === 408 || y.status === 429) {
        d = `status ${y.status}`, retryAfter = y.headers.get("retry-after");
        continue;
      }
      if (!y.ok) return {
        outcome: "fatal",
        code: "http_error",
        detail: `ca-cert fetch ${y.status}`
      };
      let ccrCa = await y.text();
      if (!ccrCa.match(y2)) {
        d = "no certificate in response";
        continue;
      }
      try {
        await Xe(M(o, ".."), {
          recursive: !0
        }), await Cn(o, Lr(e, ccrCa));
      } catch (error) {
        let detail_3 = `ca-bundle write failed (${l(error)})`;
        if (qgn(error)) return {
          outcome: "retry",
          detail: detail_3,
          retryAfter: null
        };
        return {
          outcome: "fatal",
          code: "write_failed",
          detail: detail_3
        };
      }
      return {
        outcome: "ok",
        ccrCa: ccrCa
      };
    } catch (error) {
      d = error instanceof Error ? error.message : String(error);
    }
  }
  return {
    outcome: "retry",
    detail: `ca-cert fetch exhausted (${d})`,
    retryAfter: retryAfter
  };
}
async function Ir(n) {
  try {
    await Xe(M(n, ".."), {
      recursive: !0,
      mode: 448
    }), await se(n, `[default]
s3 =
  payload_signing_enabled = false
`, {
      flag: "wx",
      mode: 384
    });
  } catch (error) {
    if (v(error) === "EEXIST") return;
    t(`[agent-proxy] aws config write failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    });
  }
}
function qe(n) {
  return `http://127.0.0.1:${n}`;
}
function Lr(n, e) {
  return n + `
` + e;
}
export { l1o, Q4r, noProxy as PXn, c1o, d1o, Z4r, u1o, KVo, p1o, YVo, f1o, wWt, XVo, m1o, g1o, h1o };