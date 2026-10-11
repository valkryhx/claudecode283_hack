// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import { dT } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import { b, J } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Ic } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-5px6g0cn.js";
import "B:/~BUN/root/chunk-vyq5y0zs.js";
import "B:/~BUN/root/chunk-51n463p1.js";
import { SC, wC, jv } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { tT } from "B:/~BUN/root/chunk-py7yqpgt.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import "B:/~BUN/root/chunk-skjrk8s1.js";
import { Gxe, j2, Y_e, zyn, agt, Vjt, qjt, Yde, jBe, lgt, t5, FKr, cgt } from "B:/~BUN/root/chunk-56s855cj.js";
import "B:/~BUN/root/chunk-339q6g5w.js";
import "B:/~BUN/root/chunk-2swveyqa.js";
import "B:/~BUN/root/chunk-shgdrs47.js";
import "B:/~BUN/root/chunk-bpp59nyd.js";
import "B:/~BUN/root/chunk-zv4xh2j0.js";
import "B:/~BUN/root/chunk-9fcn5kmc.js";
import "B:/~BUN/root/chunk-5w2ecytn.js";
import "B:/~BUN/root/chunk-0djrqga0.js";
import "B:/~BUN/root/chunk-y72v2pst.js";
import { mwt } from "B:/~BUN/root/chunk-5fb2zc0k.js";
import "B:/~BUN/root/chunk-83yxmdy5.js";
import { Xa } from "B:/~BUN/root/chunk-wjm31a93.js";
import { sd } from "B:/~BUN/root/chunk-xm4508e2.js";
import "B:/~BUN/root/chunk-10m2dkry.js";
import { i$, kpn } from "B:/~BUN/root/chunk-73hzyafy.js";
import { Qf } from "B:/~BUN/root/chunk-sa6ew4xs.js";
import "B:/~BUN/root/chunk-8j4yaj30.js";
import "B:/~BUN/root/chunk-81280fc2.js";
import "B:/~BUN/root/chunk-0bx1tycm.js";
import "B:/~BUN/root/chunk-tndjj29v.js";
import { randomUUID as Ge } from "crypto";
import { constants as Ke } from "fs";
import { access as Be, mkdir as Ye, readFile as ze, stat as Qe } from "fs/promises";
import { createServer as Ve } from "http";
import { hostname as Xe } from "os";
import { join as Je, resolve as ue } from "path";
import { spawn as Ee } from "child_process";
import { randomBytes as Se } from "crypto";
import { open as be, readdir as ke, stat as Re, unlink as X, writeFile as z } from "fs/promises";
import { tmpdir as Te } from "os";
import { join as V } from "path";
var P = 5000,
  $e = 512,
  ye = 300000;
async function ve(e, t) {
  let r = V(Te(), `${e}-${Se(6).toString("hex")}`),
    o = await be(r, "wx", 384);
  try {
    await o.writeFile(t);
  } catch (error) {
    throw await X(r).catch(() => {}), error;
  } finally {
    await o.close();
  }
  return r;
}
async function Ne(e, t, r, o, d) {
  let n = V(e, t.jti);
  try {
    await z(`${n}.jwt`, r, {
      mode: 384
    }), await z(`${n}.json`, b(t, null, 2), {
      mode: 384
    }), await z(`${n}.stderr`, o, {
      mode: 384
    });
  } catch (error) {
    d(`[runner:orchestrator] debug-dir write failed: ${l(error)}`);
  }
  try {
    let s = Date.now() - ye,
      w = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(jwt|json|stderr)$/;
    for (let c of await ke(e)) {
      if (!w.test(c)) continue;
      let p = V(e, c),
        a = await Re(p).catch(() => null);
      if (a?.isFile() && a.mtimeMs < s) await X(p).catch(() => {});
    }
  } catch (error) {
    d(`[runner:orchestrator] debug-dir prune failed: ${l(error)}`);
  }
}
function Y(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r < 32 || r >= 127 && r <= 159 || r === 8232 || r === 8233) return !0;
  }
  return !1;
}
async function ne(e) {
  if (j2(e.claims.jti, "spawn-hint jti"), e.claims.session_id) j2(e.claims.session_id, "spawn-hint session_id");
  if (e.claims.pool_id) j2(e.claims.pool_id, "spawn-hint environment_id");
  if (e.claims.account_id) j2(e.claims.account_id, "spawn-hint account_id");
  if (Y(e.claims.account_email)) throw Error("spawn-hint account_email: control character");
  for (let p of e.claims.repo_sources) {
    if (p.url && (!mwt(p.url) || Y(p.url))) throw Error("spawn-hint repo_sources: unsafe git URL");
    if (p.revision && !dT(p.revision)) throw Error("spawn-hint repo_sources: unsafe revision");
  }
  if (Y(e.claims.correlation_id) || e.claims.correlation_id.startsWith("-") || /\s/.test(e.claims.correlation_id)) throw Error("spawn-hint correlation_id: unsafe value");
  if (Y(e.claims.server_time)) throw Error("spawn-hint server_time: unsafe value");
  if (typeof e.claims.attempt !== "number" || !Number.isInteger(e.claims.attempt) || e.claims.attempt < 0) throw Error("spawn-hint attempt: unsafe value");
  let CLAUDE_RUNNER_CLIENT_PLATFORM = jBe(e.claims.client_platform);
  if (e.claims.client_platform && e.claims.client_platform !== Yde && CLAUDE_RUNNER_CLIENT_PLATFORM === void 0) {
    let client_platform = lgt(e.claims.client_platform);
    e.onDebug(`[runner:orchestrator] spawn-hint client_platform rejected by the env-export gate (CLAUDE_RUNNER_CLIENT_PLATFORM left unset): "${client_platform}" (len=${e.claims.client_platform.length})`), e.claims = {
      ...e.claims,
      client_platform: client_platform
    };
  }
  if (!/^[A-Za-z0-9_.-]+$/.test(e.jwt)) throw Error("spawn-hint work_order_jwt: unsafe character (not base64url + dot)");
  let r = Date.now(),
    CLAUDE_RUNNER_WORK_ORDER_FILE = await ve(`work-order-${e.claims.jti}`, e.jwt);
  e.onDebug(`[runner:orchestrator] spawn-runner jti=${e.claims.jti} workOrderFile=${CLAUDE_RUNNER_WORK_ORDER_FILE}`);
  let env = {
      ...process.env,
      SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
      SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
      CLAUDE_RUNNER_WORK_ORDER_FILE: CLAUDE_RUNNER_WORK_ORDER_FILE,
      CLAUDE_RUNNER_ORDER_ID: e.claims.jti,
      CLAUDE_RUNNER_SESSION_ID: kpn("session", e.claims.session_id) ?? e.claims.session_id,
      CLAUDE_RUNNER_SESSION_UUID: e.claims.session_id,
      CLAUDE_RUNNER_ATTEMPT: String(e.claims.attempt),
      CLAUDE_RUNNER_POOL_ID: e.claims.pool_id,
      CLAUDE_RUNNER_ACCOUNT_EMAIL: e.claims.account_email,
      CLAUDE_RUNNER_ACCOUNT_ID: e.claims.account_id,
      CLAUDE_RUNNER_ORDER_SERVER_TIME: e.claims.server_time,
      CLAUDE_RUNNER_PRIMARY_REPO_URL: e.claims.primary_repo_url,
      CLAUDE_RUNNER_PRIMARY_REPO_REVISION: e.claims.primary_repo_revision,
      CLAUDE_RUNNER_REPO_SOURCES: e.claims.repo_sources.length > 0 ? b(e.claims.repo_sources) : "",
      CLAUDE_RUNNER_CORRELATION_ID: e.claims.correlation_id,
      CLAUDE_RUNNER_CLIENT_PLATFORM: CLAUDE_RUNNER_CLIENT_PLATFORM
    },
    stderrTail = "",
    timedOut = !1,
    exitCode = null,
    execError = !1;
  try {
    await new Promise(p => {
      let a;
      try {
        a = Ee(e.hookPath, [], {
          cwd: void 0,
          env: env,
          stdio: ["ignore", "pipe", "pipe"],
          detached: !0,
          windowsHide: !0
        }), tT(a.pid);
      } catch (error) {
        execError = !0, stderrTail = `spawn-runner hook exec failed: ${l(error)}`, p();
        return;
      }
      let u = () => {},
        N,
        y,
        _,
        k = setTimeout((f, S, O, x, A, L) => {
          if (timedOut = !0, x(`[runner:orchestrator] spawn-runner jti=${S} timed out after ${O}ms, sending SIGTERM to process tree`), f !== void 0) Qf(f, "SIGTERM");
          N = setTimeout((U, j, m, i, T) => {
            if (U !== void 0) Qf(U, "SIGKILL");
            _ = setTimeout((M, G, K, D) => {
              G(`[runner:orchestrator] spawn-runner jti=${M} did not exit after SIGKILL within ${P}ms (likely D-state); abandoning child and resolving as timed out`), K?.removeEventListener("abort", u), D();
            }, P, j, m, i, T);
          }, P, f, S, x, A, L);
        }, e.timeoutMs, a.pid, e.claims.jti, e.timeoutMs, e.onStatus, e.signal, p),
        R = 65536;
      a.stdout?.setEncoding("utf8"), a.stderr?.setEncoding("utf8");
      let g = "",
        E = "",
        h = (f, S) => {
          let O = f.split(`
`),
            x = O.pop() ?? "";
          for (let A of O) {
            let L = sd(A).replace(/[\x00-\x08\x0b-\x1f\x7f]/g, "");
            if (e.onStatus(`[runner:hook:spawn-runner] ${L}`), S) stderrTail = (stderrTail + L + `
`).slice(-$e);
          }
          return x;
        };
      if (a.stdout?.on("data", f => {
        if (g = h(g + f, !1), g.length > R) g = g.slice(-R);
      }), a.stderr?.on("data", f => {
        if (E = h(E + f, !0), E.length > R) E = E.slice(-R);
      }), a.once("close", () => {
        if (g) h(g + `
`, !1);
        if (E) h(E + `
`, !0);
      }), u = () => {
        if (e.onStatus(`[runner:orchestrator] spawn-runner jti=${e.claims.jti} aborted by shutdown, sending SIGTERM to process tree`), a.pid !== void 0) Qf(a.pid, "SIGTERM"), y = setTimeout(f => void Qf(f, "SIGKILL"), P, a.pid), y.unref();
      }, e.signal?.addEventListener("abort", u, {
        once: !0
      }), e.signal?.aborted) u();
      a.on("error", f => {
        if (clearTimeout(k), N) clearTimeout(N);
        if (y) clearTimeout(y);
        if (_) clearTimeout(_);
        e.signal?.removeEventListener("abort", u), execError = !0, stderrTail = B(f) ? "spawn-runner hook missing (ENOENT)" : `spawn-runner hook exec failed: ${l(f)}`, p();
      }), a.on("close", f => {
        if (clearTimeout(k), N) clearTimeout(N);
        if (y) clearTimeout(y);
        if (_) clearTimeout(_);
        e.signal?.removeEventListener("abort", u), exitCode = f, p();
      });
    });
  } finally {
    await X(CLAUDE_RUNNER_WORK_ORDER_FILE).catch(p => e.onDebug(`[runner:orchestrator] failed to delete ${CLAUDE_RUNNER_WORK_ORDER_FILE}: ${l(p)}`));
  }
  if (timedOut && !stderrTail) stderrTail = `spawn-runner hook timed out after ${e.timeoutMs}ms`;
  if (e.debugDir) await Ne(e.debugDir, e.claims, e.jwt, stderrTail, e.onDebug);
  return {
    ok: exitCode === 0 && !timedOut && !execError,
    exitCode: exitCode,
    timedOut: timedOut,
    execError: execError,
    stderrTail: stderrTail,
    durationMs: Date.now() - r
  };
}
import { readFile as Oe } from "fs/promises";
var He = "/v1/code/scm-connectors/{provider}/{id}/tunnel",
  oe = 4003,
  Ce = 30000,
  re = 1000,
  se = 30000,
  Le = 1e4,
  De = 30000,
  ie = 32768,
  Ie = 4194304,
  Pe = 1048576,
  xe = 50,
  Ae = 30000,
  Ue = 1e4,
  Me = new Set(["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]),
  qe = new Set(["host", "connection", "content-length", "transfer-encoding"]);
function Z(e) {
  if (e.includes("://") || e.includes("/") || e.includes("@")) throw Error("--scm-connector-host expects a bare hostname (e.g. ghe.example.com[:443]), not a URL");
  let t = e.lastIndexOf(":"),
    r = e.startsWith("["),
    host,
    port = 443;
  if (t > 0 && (!r || r && e[t - 1] === "]")) {
    host = e.slice(0, t);
    let n = e.slice(t + 1),
      s = parseInt(n, 10);
    if (Number.isNaN(s) || s < 1 || s > 65535 || String(s) !== n) throw Error("--scm-connector-host port must be an integer in [1, 65535]");
    port = s;
  } else host = e;
  if (host.length === 0) throw Error("--scm-connector-host: hostname is empty");
  if (host.includes(":") && !(host.startsWith("[") && host.endsWith("]"))) throw Error("--scm-connector-host: hostname must be a bare hostname or [v6] literal");
  return {
    host: host,
    port: port
  };
}
function ae(e) {
  let t = e.indexOf("=");
  if (t <= 0 || t === e.length - 1) throw Error("--scm-connector-host-rewrite requires <from>=<to_host:to_port>");
  let r = e.slice(0, t).toLowerCase(),
    o = e.slice(t + 1);
  for (let s of [r, o]) if (s.includes("://") || s.includes("/") || s.includes("@")) throw Error("--scm-connector-host-rewrite expects bare hostnames, not URLs");
  let {
    host: d,
    port: n
  } = Z(o);
  return {
    from: r,
    toHost: d,
    toPort: n
  };
}
function Fe(e) {
  if (typeof e !== "string" || e.length === 0) return "path must be a non-empty string";
  if (e[0] !== "/") return "path must start with /";
  if (e[1] === "/") return "path must not start with // (scheme-relative)";
  if (e[1] === "@") return "path must not start with /@";
  if (e.includes("\\")) return "path must not contain backslash";
  return null;
}
function We(e, t, r) {
  let o = new URL("https://placeholder.invalid/");
  if (o.host = `${e}:${t}`, o.hostname === "placeholder.invalid") throw Error("scm-connector dial host is not a valid URL host");
  let d = o.origin,
    n = r.indexOf("?");
  if (o.pathname = n >= 0 ? r.slice(0, n) : r, o.search = n >= 0 ? r.slice(n) : "", o.origin !== d || o.username !== "" || o.password !== "") throw Error("path escaped the configured origin");
  return o;
}
function je(e, t) {
  let r = He.replace("{provider}", encodeURIComponent(t.provider)).replace("{id}", String(t.connectorId));
  return e.replace(/^http/, "ws").replace(/\/+$/, "") + r;
}
function ce() {
  return {
    connected: !1,
    last_connected_at: 0,
    last_error: null,
    reconnects: 0,
    requests_forwarded: 0
  };
}
function le(e, t, r, o) {
  let d = je(r.apiUrl, e),
    n = e.hostRewrite && e.hostRewrite.from === e.host.toLowerCase() ? e.hostRewrite.toHost : e.host,
    s = e.hostRewrite && e.hostRewrite.from === e.host.toLowerCase() ? e.hostRewrite.toPort : e.port,
    w = !1,
    c = null,
    p = null,
    a = null,
    u = null,
    N = re,
    y = 0,
    ca,
    k = e.caFile === void 0,
    R = new Map(),
    g = m => {
      t.last_error = sd(m);
    },
    E = m => r.onStatus(`[runner:scm-connector] ${m}`),
    h = m => r.onDebug(`[runner:scm-connector] ${m}`);
  function f(m) {
    let i = c;
    if (!i || i.readyState !== WebSocket.OPEN) return;
    try {
      i.send(b(m));
    } catch (error) {
      g(l(error)), E(`send failed: ${l(error)}`);
    }
  }
  function S(requestId, errorMessage) {
    f({
      httpError: {
        requestId: requestId,
        errorMessage: errorMessage
      }
    });
  }
  function O(m) {
    let i = c;
    if (!i || i.readyState !== WebSocket.OPEN || i.bufferedAmount <= Ie) return Promise.resolve();
    return new Promise(T => {
      let M = setInterval(() => {
        if (w || m.aborted || c !== i || i.readyState !== WebSocket.OPEN || i.bufferedAmount <= Pe) clearInterval(M), T();
      }, xe);
    });
  }
  async function x(m) {
    let requestId_2 = m.requestId;
    if (!requestId_2) return;
    if (m.port !== void 0 && m.port !== 0 && m.port !== e.port) {
      S(requestId_2, `port ${m.port} does not match this connector's configured port ${e.port}`);
      return;
    }
    let T = Fe(m.path);
    if (T) {
      S(requestId_2, T);
      return;
    }
    let M = m.path,
      method = (m.method ?? "GET").toUpperCase();
    if (!Me.has(method)) {
      S(requestId_2, "method not allowed");
      return;
    }
    let K;
    try {
      K = We(n, s, M);
    } catch (error) {
      S(requestId_2, l(error));
      return;
    }
    let abortController = new AbortController();
    R.set(requestId_2, abortController);
    let ee = setTimeout(v => v.abort(), Ae, abortController),
      I;
    try {
      let headers = new Headers();
      for (let C of m.headers ?? []) {
        if (!C.name || qe.has(C.name.toLowerCase())) continue;
        headers.append(C.name, C.value ?? "");
      }
      headers.set("Host", e.port === 443 ? e.host : `${e.host}:${e.port}`);
      let body = m.body !== void 0 && m.body !== "" ? Buffer.from(m.body, "base64") : void 0;
      I = await fetch(K, {
        method: method,
        headers: headers,
        body: body,
        redirect: "manual",
        signal: abortController.signal,
        tls: ca !== void 0 || n !== e.host ? {
          ca: ca,
          serverName: e.host
        } : void 0
      });
    } catch (error) {
      clearTimeout(ee), R.delete(requestId_2), g(`forward to ${e.host}: ${l(error)}`), S(requestId_2, l(error));
      return;
    }
    clearTimeout(ee);
    let headers_2 = [];
    I.headers.forEach((v, H) => {
      headers_2.push({
        name: H,
        value: v
      });
    });
    let sequenceNumber = 0;
    f({
      httpHeaders: {
        requestId: requestId_2,
        statusCode: I.status,
        statusText: I.statusText || String(I.status),
        headers: headers_2,
        sequenceNumber: sequenceNumber
      }
    }), sequenceNumber++;
    try {
      if (I.body) {
        let v = I.body.getReader();
        for (;;) {
          if (await O(abortController.signal), abortController.signal.aborted) {
            await v.cancel();
            break;
          }
          let H = await v.read();
          if (H.value && H.value.length > 0) for (let C = 0; C < H.value.length; C += ie) {
            let we = H.value.subarray(C, C + ie);
            f({
              httpChunk: {
                requestId: requestId_2,
                data: Buffer.from(we).toString("base64"),
                isFinal: !1,
                sequenceNumber: sequenceNumber
              }
            }), sequenceNumber++;
          }
          if (H.done) break;
          if (abortController.signal.aborted) {
            await v.cancel();
            break;
          }
        }
      }
      f({
        httpChunk: {
          requestId: requestId_2,
          data: "",
          isFinal: !0,
          sequenceNumber: sequenceNumber
        }
      }), t.requests_forwarded++;
    } catch (error) {
      S(requestId_2, `error reading GHES response body: ${l(error)}`);
    } finally {
      R.delete(requestId_2);
    }
  }
  function A(m) {
    let i;
    try {
      i = J(m);
    } catch (error) {
      E(`failed to parse tunnel request: ${l(error)}`);
      return;
    }
    if (i.httpRequest) x(i.httpRequest).catch(T => {
      g(l(T)), E(`handleHttpRequest failed: ${l(T)}`);
    });else if (i.httpCancel) {
      let requestId_3 = i.httpCancel.requestId;
      if (requestId_3) R.get(requestId_3)?.abort(), R.delete(requestId_3);
    } else if (i.wsOpen) f({
      wsError: {
        tunnelId: i.wsOpen.tunnelId ?? "",
        errorMessage: "WebSocket tunnel is not supported by the SCM connector"
      }
    });else if (i.ptyOpen) f({
      ptyError: {
        tunnelId: i.ptyOpen.tunnelId ?? "",
        errorMessage: "PTY tunnel is not supported by the SCM connector"
      }
    });
  }
  function L(m) {
    if (w) return;
    t.reconnects++;
    let i;
    if (m === oe) i = Ce, E(`standby (close code ${m}): another orchestrator holds connector ${e.connectorId}; retrying in ${i / 1000}s`);else {
      if (y > 0 && Date.now() - y > se) N = re;
      i = N + Math.floor(Math.random() * (N / 2)), N = Math.min(N * 2, se), h(`reconnecting in ${i}ms`);
    }
    y = 0, a = setTimeout(U, i);
  }
  function U() {
    if (w) return;
    if (a = null, !k) Xa(Oe(e.caFile, "utf8"), Ue, `--scm-connector-ca-file read from ${e.caFile}`).then(i => {
      ca = i, k = !0;
    }).catch(i => {
      g(`reading --scm-connector-ca-file: ${l(i)}`), E(`reading --scm-connector-ca-file: ${l(i)}`);
    });
    let m;
    try {
      m = new globalThis.WebSocket(d, {
        headers: {
          Authorization: `Bearer ${r.poolSecret}`
        },
        proxy: wC(d),
        tls: SC() || void 0
      });
    } catch (error) {
      g(l(error)), E(`WebSocket construct failed: ${l(error)}`), L();
      return;
    }
    c = m, u = setTimeout(i => {
      g("WebSocket open timeout"), i.onopen = i.onmessage = i.onerror = i.onclose = null;
      try {
        i.close();
      } catch {}
      if (c === i) c = null;
      L();
    }, Le, m), m.onopen = () => {
      if (u) clearTimeout(u), u = null;
      t.connected = !0, t.last_connected_at = Date.now(), t.last_error = null, y = Date.now(), E(`connected provider=${e.provider} connector_id=${e.connectorId} forward=${e.host}:${e.port}${n !== e.host ? ` (dial=${n}:${s})` : ""}`), p = setInterval(() => {
        if (m.readyState === WebSocket.OPEN) m.ping?.();
      }, De);
    }, m.onmessage = i => {
      let T = typeof i.data === "string" ? i.data : Buffer.from(i.data).toString("utf8");
      A(T);
    }, m.onerror = i => {
      g("message" in i && typeof i.message === "string" ? i.message : "WebSocket error");
    }, m.onclose = i => {
      if (t.connected = !1, u) clearTimeout(u), u = null;
      if (p) clearInterval(p), p = null;
      for (let T of R.values()) T.abort();
      if (R.clear(), c === m) c = null;
      if (i.code !== oe) E(`closed code=${i.code} reason=${i.reason || "(none)"}`);
      L(i.code);
    };
  }
  function stop() {
    if (w) return;
    if (w = !0, a) clearTimeout(a), a = null;
    if (u) clearTimeout(u), u = null;
    if (p) clearInterval(p), p = null;
    for (let m of R.values()) m.abort();
    R.clear(), t.connected = !1;
    try {
      c?.close();
    } catch {}
    c = null, E("stopped");
  }
  return o?.addEventListener("abort", stop, {
    once: !0
  }), E(`starting provider=${e.provider} connector_id=${e.connectorId} url=${d}`), U(), {
    stop: stop
  };
}
var apiUrl = "https://api.anthropic.com",
  de = 1500,
  me = 8080,
  hookConcurrency = 4,
  hookTimeoutMs = 60000,
  expectedSpawnSeconds = 120,
  Ze = 1e4,
  et = 60000,
  tt = 5000,
  _e = 1000,
  nt = 30000,
  ot = new Set([400, 401, 403, 404, 426]),
  F = [0.1, 0.25, 0.5, 1, 2.5, 5, 10, 20, 30, 60];
function rt() {
  return {
    buckets: F.map(() => 0),
    count: 0,
    sum: 0
  };
}
function st(e, t) {
  e.sum += t, e.count += 1;
  for (let r = 0; r < F.length; r++) if (t <= F[r]) e.buckets[r]++;
}
var W = [0.5, 1, 2.5, 5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120];
function it() {
  return {
    buckets: W.map(() => 0),
    count: 0,
    sum: 0
  };
}
function at(e, t) {
  let r = Math.max(0, t);
  e.sum += r, e.count += 1;
  for (let o = 0; o < W.length; o++) if (r <= W[o]) e.buckets[o]++;
}
function ct(e) {
  let t = {
      apiUrl: apiUrl,
      hooksDir: process.env.SELF_HOSTED_RUNNER_HOOKS_DIR ? ue(process.env.SELF_HOSTED_RUNNER_HOOKS_DIR) : void 0,
      healthPort: lt(process.env.SELF_HOSTED_RUNNER_HEALTH_PORT, me, "SELF_HOSTED_RUNNER_HEALTH_PORT"),
      hookConcurrency: hookConcurrency,
      hookTimeoutMs: hookTimeoutMs,
      expectedSpawnSeconds: expectedSpawnSeconds,
      minIdle: 0,
      debugDir: process.env.SELF_HOSTED_RUNNER_DEBUG_DIR,
      logLevel: "info"
    },
    r,
    connectorId,
    provider = "ghe",
    n = !1,
    caFile,
    hostRewrite;
  for (let c = 0; c < e.length; c++) {
    let p = e[c],
      a = e[c + 1];
    switch (p) {
      case "--api-url":
        if (a) t.apiUrl = a, c++;
        break;
      case "--pool-secret-file":
      case "--environment-secret-file":
        if (p === "--pool-secret-file") console.error("[runner:warn] --pool-secret-file is deprecated; use --environment-secret-file");
        if (a) t.poolSecretFile = a, c++;
        break;
      case "--hooks-dir":
        if (a) t.hooksDir = ue(a), c++;
        break;
      case "--health-port":
        if (a) {
          let u = Ic(a);
          if (Number.isNaN(u) || u < 0 || u > 65535) throw Error(`--health-port must be an integer in [0, 65535] (0 disables), got: ${a}`);
          t.healthPort = u, c++;
        }
        break;
      case "--hook-concurrency":
        if (a) {
          let u = Ic(a);
          if (Number.isNaN(u) || u < 1 || u > 100) throw Error(`--hook-concurrency must be an integer in [1, 100], got: ${a}`);
          t.hookConcurrency = u, c++;
        }
        break;
      case "--hook-timeout":
        if (a) {
          let u = Number(a);
          if (!Number.isFinite(u) || u <= 0) throw Error(`--hook-timeout must be a positive number of seconds, got: ${a}`);
          t.hookTimeoutMs = u * 1000, c++;
        }
        break;
      case "--expected-spawn-seconds":
        if (a) {
          let u = parseInt(a, 10);
          if (Number.isNaN(u) || u < 10 || u > 3600 || String(u) !== a.trim()) throw Error(`--expected-spawn-seconds must be an integer in [10, 3600], got: ${a}`);
          t.expectedSpawnSeconds = u, c++;
        }
        break;
      case "--min-idle":
        if (a) {
          let u = parseInt(a, 10);
          if (Number.isNaN(u) || u < 0 || u > 200 || String(u) !== a.trim()) throw Error("--min-idle must be an integer in [0, 200]");
          t.minIdle = u, c++;
        }
        break;
      case "--scm-connector-host":
        if (!a) throw Error("--scm-connector-host requires HOST[:PORT]");
        r = Z(a), c++;
        break;
      case "--scm-connector-id":
        {
          if (!a) throw Error("--scm-connector-id requires an integer");
          let u = parseInt(a, 10);
          if (Number.isNaN(u) || u < 1 || String(u) !== a.trim()) throw Error("--scm-connector-id must be a positive integer");
          connectorId = u, c++;
          break;
        }
      case "--scm-connector-provider":
        if (!a) throw Error("--scm-connector-provider requires a value");
        if (!/^[a-z0-9-]{1,32}$/.test(a)) throw Error("--scm-connector-provider must match ^[a-z0-9-]{1,32}$");
        provider = a, n = !0, c++;
        break;
      case "--scm-connector-ca-file":
        if (!a) throw Error("--scm-connector-ca-file requires a path");
        caFile = a, c++;
        break;
      case "--scm-connector-host-rewrite":
        if (!a) throw Error("--scm-connector-host-rewrite requires <from>=<to_host:to_port>");
        hostRewrite = ae(a), c++;
        break;
      case "--debug-dir":
        if (a) t.debugDir = a, c++;
        break;
      case "--log-level":
        if (a) t.logLevel = a, c++;
        break;
      default:
        if (p?.startsWith("--")) throw Error(`unknown flag ${p}`);
        break;
    }
  }
  if (r !== void 0) {
    if (connectorId === void 0) throw Error("--scm-connector-id is required when --scm-connector-host is set");
    t.scmConnector = {
      host: r.host,
      port: r.port,
      provider: provider,
      connectorId: connectorId,
      caFile: caFile,
      hostRewrite: hostRewrite
    };
  } else if (connectorId !== void 0 || n || caFile !== void 0 || hostRewrite !== void 0) throw Error("--scm-connector-id / --scm-connector-provider / --scm-connector-ca-file / --scm-connector-host-rewrite require --scm-connector-host");
  if (t.hookTimeoutMs + P >= t.expectedSpawnSeconds * 1000) throw Error(`--hook-timeout (${t.hookTimeoutMs / 1000}s) + ${P / 1000}s SIGKILL grace must be less than --expected-spawn-seconds (${t.expectedSpawnSeconds}s) \u2014 otherwise an HA replica ` + "re-claims the lease while this hook is still running and both spawn a runner");
  return t;
}
function lt(e, t, r) {
  if (e === void 0 || e === "") return t;
  let o = Ic(e);
  if (Number.isNaN(o) || o < 0 || o > 65535) throw Error(`${r} must be an integer in [0, 65535], got: "${e}"`);
  return o;
}
async function ut(e) {
  if (!e) throw Error("orchestrator requires --hooks-dir (or SELF_HOSTED_RUNNER_HOOKS_DIR) \u2014 no spawn-runner hook directory configured");
  let t = Je(e, "spawn-runner"),
    r;
  try {
    r = await Xa(Qe(t), 5000, `stat ${t}`);
  } catch (error) {
    throw Error(`spawn-runner hook not found at ${t} \u2014 the orchestrator cannot start without it (${l(error)})`);
  }
  if (!r.isFile()) throw Error(`spawn-runner hook at ${t} is not a regular file`);
  try {
    await Xa(Be(t, Ke.X_OK), 5000, `access ${t}`);
  } catch {
    throw Error(`spawn-runner hook at ${t} is not executable (chmod +x ${t})`);
  }
  return t;
}
function dt(e) {
  let t = e.replace(/^sk-ant-[a-z]+-/, ""),
    r = i$(t),
    o = r !== null && typeof r === "object" ? r["ccr:pool_id"] : void 0;
  if (typeof o !== "string" || o === "") throw Error("environment secret is missing the ccr:pool_id claim \u2014 cannot derive the environment ID for spawn-hint polling");
  return o;
}
function _t(e) {
  if (e === void 0 || e === null) return 0;
  if (typeof e === "number") return e;
  if (typeof e === "string") return /^(0|[1-9]\d{0,14})$/.test(e) ? Number(e) : e;
  return String(e);
}
function pt(e, t) {
  let r = i$(e.work_order_jwt),
    o = r !== null && typeof r === "object" ? r : {},
    d = p => typeof o[p] === "string" ? o[p] : "",
    aud = o.aud,
    s = Array.isArray(aud) ? aud.find(item => typeof item === "string") ?? "" : typeof aud === "string" ? aud : "",
    pool_id = d("ccr:pool_id") || (s.startsWith("ccpool_") ? s : ""),
    repo_sources = (e.sources ?? []).map(item => ({
      url: item.url ?? "",
      revision: item.revision ?? ""
    }));
  return {
    jti: e.jti || d("jti"),
    session_id: e.session_uuid ?? "",
    attempt: _t(e.attempt),
    pool_id: pool_id,
    account_id: d("ccr:spawn_account_id") || d("account_id"),
    account_email: d("ccr:spawn_account_email") || d("account_email"),
    server_time: t ?? "",
    repo_sources: repo_sources,
    primary_repo_url: repo_sources[0]?.url ?? "",
    primary_repo_revision: repo_sources[0]?.revision ?? "",
    correlation_id: typeof e.correlation_id === "string" ? e.correlation_id : "",
    client_platform: typeof e.client_platform === "string" ? e.client_platform : ""
  };
}
function mt(e, t = Date.now()) {
  if (!e) return null;
  let r = Date.parse(e);
  if (Number.isNaN(r)) return null;
  return t - r;
}
function ht(e, t = Date.now()) {
  let r = e.last_poll_at > 0 ? (t - e.last_poll_at) / 1000 : 0,
    o = `version="${t5(e.version)}",pool_id="${t5(e.pool_id)}",orchestrator_uuid="${t5(e.orchestratorUuid)}",hostname="${t5(e.hostname)}"`,
    d = "claude_code_self_hosted_orchestrator",
    n = "";
  if (n += `# HELP claude_code_self_hosted_orchestrator_info Self-hosted orchestrator identity (info-style gauge; value is always 1).
`, n += `# TYPE claude_code_self_hosted_orchestrator_info gauge
`, n += `claude_code_self_hosted_orchestrator_info{${o}} 1
`, n += `# HELP claude_code_self_hosted_orchestrator_connected 1 when the last PollSpawnHints returned successfully; 0 on transport/5xx error.
`, n += `# TYPE claude_code_self_hosted_orchestrator_connected gauge
`, n += `claude_code_self_hosted_orchestrator_connected ${e.connected ? 1 : 0}
`, n += `# HELP claude_code_self_hosted_orchestrator_last_poll_age_seconds Seconds since the last PollSpawnHints attempt (success or failure).
`, n += `# TYPE claude_code_self_hosted_orchestrator_last_poll_age_seconds gauge
`, n += `claude_code_self_hosted_orchestrator_last_poll_age_seconds ${r}
`, n += `# HELP claude_code_self_hosted_orchestrator_queue_pending_sessions Spawn-hint queue rows claimable right now (eta < now, unclaimed, not circuit-broken). Server-side aggregate for this environment.
`, n += `# TYPE claude_code_self_hosted_orchestrator_queue_pending_sessions gauge
`, e.queue_counts !== null) n += `claude_code_self_hosted_orchestrator_queue_pending_sessions ${e.queue_counts.pending}
`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_queue_backing_off_sessions Spawn-hint queue rows in retry backoff (nacked retryable; eta in the future). Server-side aggregate for this environment.
`, n += `# TYPE claude_code_self_hosted_orchestrator_queue_backing_off_sessions gauge
`, e.queue_counts !== null) n += `claude_code_self_hosted_orchestrator_queue_backing_off_sessions ${e.queue_counts.backing_off}
`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions Spawn-hint queue rows circuit-broken (nacked non-retryable; operator must RetrySpawnHint to re-admit). Server-side aggregate for this environment.
`, n += `# TYPE claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions gauge
`, e.queue_counts !== null) n += `claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions ${e.queue_counts.circuit_broken}
`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_pool_pending_sessions Total sessions currently waiting on a runner for this environment (the UI "N ahead of you" number). Autoscale on this, not on queue_pending_sessions.
`, n += `# TYPE claude_code_self_hosted_orchestrator_pool_pending_sessions gauge
`, e.pool_pending_session_count !== null) n += `claude_code_self_hosted_orchestrator_pool_pending_sessions ${e.pool_pending_session_count}
`;
  if (n += `# HELP ${"claude_code_self_hosted_orchestrator"}_pool_active_sessions Sessions currently assigned to an alive runner in this environment (the server's environment-wide sum of the per-runner _active_sessions gauges). Environment-wide aggregate \u2014 identical on every orchestrator for one environment; use MAX not SUM across orchestrator instances.
`, n += `# TYPE claude_code_self_hosted_orchestrator_pool_active_sessions gauge
`, e.pool_active_session_count !== null) n += `claude_code_self_hosted_orchestrator_pool_active_sessions ${e.pool_active_session_count}
`;
  n += `# HELP claude_code_self_hosted_orchestrator_warm_hints_dispatched_total Standby (warm) hints dispatched since process start.
`, n += `# TYPE claude_code_self_hosted_orchestrator_warm_hints_dispatched_total counter
`, n += `claude_code_self_hosted_orchestrator_warm_hints_dispatched_total ${e.warm_hints_dispatched}
`, n += `# HELP ${"claude_code_self_hosted_orchestrator"}_spawn_hooks_total spawn-runner hook outcomes since process start (exit-code contract: ok=0, retryable=1/timeout/signal, non_retryable=>=2/ENOENT/EACCES). Counts orchestrator hook invocations (seat + warm), NOT runner child spawns \u2014 NOT comparable to the runner's sessions_started_total (capacity>1, warm environments, and per-runner re-spawns all diverge them).
`, n += `# TYPE claude_code_self_hosted_orchestrator_spawn_hooks_total counter
`, n += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="ok"} ${e.spawnHooks.ok}
`, n += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="retryable"} ${e.spawnHooks.retryable}
`, n += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="non_retryable"} ${e.spawnHooks.nonRetryable}
`, n += `# HELP claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds Wall-clock seconds per spawn-runner hook run (all outcomes; seat + warm).
`, n += `# TYPE claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds histogram
`;
  let spawnHookDurations = e.spawnHookDurations;
  for (let c = 0; c < F.length; c++) n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_bucket{le="${F[c]}"} ${spawnHookDurations.buckets[c]}
`;
  n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_bucket{le="+Inf"} ${spawnHookDurations.count}
`, n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_sum ${spawnHookDurations.sum}
`, n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_count ${spawnHookDurations.count}
`, n += `# HELP claude_code_self_hosted_orchestrator_session_queue_wait_seconds Seconds each session waited in the queue before the orchestrator claimed it for spawn (HTTP Date header - SpawnHint.queue_wait_started_at; seat hints only). For p50/p99 queue-time SLOs and "queue wait > N" alerting.
`, n += `# TYPE claude_code_self_hosted_orchestrator_session_queue_wait_seconds histogram
`;
  let sessionQueueWaits = e.sessionQueueWaits;
  for (let c = 0; c < W.length; c++) n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_bucket{le="${W[c]}"} ${sessionQueueWaits.buckets[c]}
`;
  n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_bucket{le="+Inf"} ${sessionQueueWaits.count}
`, n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_sum ${sessionQueueWaits.sum}
`, n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_count ${sessionQueueWaits.count}
`, n += `# HELP claude_code_self_hosted_orchestrator_poll_errors_total PollSpawnHints request failures by error kind (transport=no HTTP response; timeout=client deadline; 5xx/429/4xx by status). All five series present from process start so rate() works and absent() means process-down.
`, n += `# TYPE claude_code_self_hosted_orchestrator_poll_errors_total counter
`;
  for (let c of zyn) n += `claude_code_self_hosted_orchestrator_poll_errors_total{error_kind="${c}"} ${e.pollErrors[c]}
`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_clock_skew_seconds Local-minus-server clock skew from the most recent PollSpawnHints Date header. Sample omitted until measured.
`, n += `# TYPE claude_code_self_hosted_orchestrator_clock_skew_seconds gauge
`, e.clock_skew_ms !== null) n += `claude_code_self_hosted_orchestrator_clock_skew_seconds ${e.clock_skew_ms / 1000}
`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_scm_connector_connected 1 when the standing SCM connector WebSocket is OPEN; 0 when dialing/backing off. Series absent when --scm-connector-host is not set.
`, n += `# TYPE claude_code_self_hosted_orchestrator_scm_connector_connected gauge
`, e.scm_connector !== null) n += `claude_code_self_hosted_orchestrator_scm_connector_connected ${e.scm_connector.connected ? 1 : 0}
`;
  if (n += `# HELP claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total Cumulative HTTP requests proxied to the configured SCM host since process start.
`, n += `# TYPE claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total counter
`, e.scm_connector !== null) n += `claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total ${e.scm_connector.requests_forwarded}
`;
  return n;
}
function ft(e, t, r) {
  let o = Ve((n, s) => {
    if (n.method === "GET" && n.url === "/metrics") {
      let c = ht(t);
      s.writeHead(200, {
        "Content-Type": "text/plain; version=0.0.4; charset=utf-8",
        "Content-Length": Buffer.byteLength(c)
      }), s.end(c);
      return;
    }
    if (n.method !== "GET" || n.url !== "/healthz") {
      s.writeHead(404, {
        "Content-Type": "text/plain"
      }), s.end(`not found
`);
      return;
    }
    let w = b({
      status: "ok",
      orchestrator_uuid: t.orchestratorUuid,
      hostname: t.hostname,
      version: t.version,
      pool_id: t.pool_id,
      connected: t.connected,
      last_poll_at: t.last_poll_at > 0 ? new Date(t.last_poll_at).toISOString() : null,
      last_hint_at: t.last_hint_at > 0 ? new Date(t.last_hint_at).toISOString() : null,
      last_hook_ok_at: t.last_hook_ok_at > 0 ? new Date(t.last_hook_ok_at).toISOString() : null,
      last_warm_hook_ok_at: t.last_warm_hook_ok_at > 0 ? new Date(t.last_warm_hook_ok_at).toISOString() : null,
      last_error: t.last_error,
      clock_skew_ms: t.clock_skew_ms,
      queue_counts: t.queue_counts,
      pool_pending_session_count: t.pool_pending_session_count,
      pool_active_session_count: t.pool_active_session_count,
      warm_hints_dispatched: t.warm_hints_dispatched,
      scm_connector_connected: t.scm_connector?.connected ?? null,
      scm_connector: t.scm_connector ? {
        connected: t.scm_connector.connected,
        last_connected_at: t.scm_connector.last_connected_at > 0 ? new Date(t.scm_connector.last_connected_at).toISOString() : null,
        last_error: t.scm_connector.last_error,
        reconnects: t.scm_connector.reconnects,
        requests_forwarded: t.scm_connector.requests_forwarded
      } : null
    });
    s.writeHead(200, {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(w)
    }), s.end(w);
  });
  o.unref();
  let d = 0;
  return o.on("error", n => {
    if (n.code === "EADDRINUSE" && d === 0) {
      d++, r(`[runner:warn] /healthz port ${e} busy, retrying in ${de}ms`), setTimeout((s, w) => s.listen(w), de, o, e).unref();
      return;
    }
    r(`[runner:warn] /healthz listener failed on port ${e}: ${n.message} \u2014 continuing without health endpoint`);
  }), o.on("listening", () => {
    let n = o.address(),
      s = typeof n === "object" && n ? n.port : e;
    r(`[runner:health] orchestrator /healthz and /metrics listening on :${s}`);
  }), o.listen(e), o;
}
async function gt(e, signal) {
  let {
      apiClient: apiClient,
      healthState: healthState,
      onStatus: onStatus,
      onDebug: onDebug,
      args: args,
      hookPath: hookPath,
      runHook = ne,
      fatalExit = wt,
      pollIntervalMs = tt
    } = e,
    u = _e;
  while (!signal.aborted) {
    healthState.last_poll_at = Date.now();
    let _;
    try {
      _ = await apiClient.pollSpawnHints({
        orchestrator_uuid: healthState.orchestratorUuid,
        hostname: healthState.hostname,
        client_version: Gxe,
        max: args.hookConcurrency,
        expected_spawn_seconds: args.expectedSpawnSeconds,
        ...(args.minIdle > 0 && {
          min_idle: args.minIdle
        })
      }, signal);
    } catch (error) {
      if (signal.aborted) break;
      healthState.pollErrors[agt(error)]++;
      let f = Y_e(error),
        S = sd(l(error));
      if (f !== void 0 && ot.has(f)) healthState.connected = !1, healthState.last_error = S, fatalExit(f === 426 ? `orchestrator version too old (HTTP 426): ${S} \u2014 upgrade and restart` : `PollSpawnHints rejected (HTTP ${f}): ${S}`);
      healthState.connected = !1, healthState.last_error = S, onStatus(`[runner:orchestrator] poll failed${f ? ` (HTTP ${f})` : ""}: ${S} \u2014 retrying in ${Math.round(u / 1000)}s`), await Q(u, signal), u = Math.min(u * 2, nt);
      continue;
    }
    healthState.connected = !0, healthState.last_error = null, u = _e, N(_.server_date), healthState.queue_counts = {
      pending: _.pending_count,
      backing_off: _.backing_off_count,
      circuit_broken: _.circuit_broken_count
    }, healthState.pool_pending_session_count = _.pool_pending_session_count ?? null, healthState.pool_active_session_count = _.pool_active_session_count ?? null;
    {
      let h = _.server_date !== null ? Date.parse(_.server_date) : Date.now(),
        f = Number.isFinite(h) ? h : Date.now();
      for (let S of _.hints) {
        if (typeof S.queue_wait_started_at !== "string") continue;
        let O = Date.parse(S.queue_wait_started_at);
        if (!Number.isFinite(O)) continue;
        at(healthState.sessionQueueWaits, (f - O) / 1000);
      }
    }
    let k = _.hints.slice(0, args.hookConcurrency),
      R = _.hints.slice(args.hookConcurrency);
    for (let h of R) onStatus(`[runner:orchestrator] server over-returned hint session=${h.session_uuid} (got ${_.hints.length}, max=${args.hookConcurrency}) \u2014 nacking retryably`), await apiClient.nackSpawnHint({
      session_uuid: h.session_uuid,
      attempt: h.attempt,
      error: "orchestrator: server over-returned hints (>max)",
      retryable: !0
    }, signal).catch(f => onStatus(`[runner:orchestrator] nack of over-returned hint failed: ${l(f)} \u2014 lease expiry will re-admit`));
    let g = Math.max(0, args.hookConcurrency - k.length),
      E = args.minIdle > 0 ? _.warm_hints.slice(0, g) : [];
    if (_.warm_hints.length > E.length) onDebug(`[runner:orchestrator] dropping ${_.warm_hints.length - E.length} warm hint(s) (budget=${g}, minIdle=${args.minIdle})`);
    if (k.length > 0) onStatus(`[runner:orchestrator] dispatching ${k.length} hint(s) (concurrency=${args.hookConcurrency})`);
    if (E.length > 0) onStatus(`[runner:orchestrator] dispatching ${E.length} warm hint(s) (min_idle=${args.minIdle})`);
    if (k.length + E.length > 0) await Promise.all([...k.map(item => y(item, _.server_date, !1)), ...E.map(item => y(item, _.server_date, !0))]);
    await Q(pollIntervalMs, signal);
  }
  function N(_) {
    let k = mt(_);
    if (k === null) return;
    if (healthState.clock_skew_ms = k, Math.abs(k) > et) onStatus(`[runner:warn] clock skew ${Math.round(k / 1000)}s vs server \u2014 check NTP (work-order exp checks may fail)`);
  }
  async function y(_, k, R) {
    if (healthState.last_hint_at = Date.now(), R) healthState.warm_hints_dispatched++;
    let g,
      E = !1;
    try {
      let claims = pt(_, k);
      g = await runHook({
        hookPath: hookPath,
        jwt: _.work_order_jwt,
        claims: claims,
        timeoutMs: args.hookTimeoutMs,
        debugDir: args.debugDir,
        signal: signal,
        onStatus: onStatus,
        onDebug: onDebug
      }), E = !0;
    } catch (error) {
      g = {
        ok: !1,
        exitCode: 1,
        timedOut: !1,
        execError: !1,
        stderrTail: `spawn-runner hook setup failed: ${l(error)}`,
        durationMs: 0
      };
    }
    if (st(healthState.spawnHookDurations, g.durationMs / 1000), g.ok) {
      if (healthState.spawnHooks.ok++, healthState.last_hook_ok_at = Date.now(), R) healthState.last_warm_hook_ok_at = healthState.last_hook_ok_at;
      onDebug(`[runner:orchestrator] ok session=${_.session_uuid} attempt=${_.attempt} jti=${_.jti} (${g.durationMs}ms)`);
      return;
    }
    let error_2 = sd(g.stderrTail || (g.exitCode === null ? "hook killed by external signal (no stderr)" : `exit ${g.exitCode}`)),
      retryable = g.exitCode === 1 || g.timedOut || g.exitCode === null && !g.execError,
      failure_kind = !E ? void 0 : g.timedOut ? "SESSION_FAILURE_KIND_SPAWN_TIMEOUT" : "SESSION_FAILURE_KIND_SPAWN_HOOK_ERROR";
    if (retryable) healthState.spawnHooks.retryable++;else healthState.spawnHooks.nonRetryable++;
    if (healthState.last_error = `spawn-runner hook failed: ${error_2}`, R) {
      onStatus(`[runner:orchestrator] warm hook failed jti=${_.jti} exit=${g.exitCode} timedOut=${g.timedOut}: ${error_2} \u2014 lease expiry will re-mint`);
      return;
    }
    onStatus(`[runner:orchestrator] nack session=${_.session_uuid} attempt=${_.attempt} exit=${g.exitCode} timedOut=${g.timedOut} retryable=${retryable}: ${error_2}`);
    try {
      await apiClient.nackSpawnHint({
        session_uuid: _.session_uuid,
        attempt: _.attempt,
        error: error_2,
        retryable: retryable,
        ...(failure_kind && {
          failure_kind: failure_kind
        })
      }, signal);
    } catch (error) {
      onStatus(`[runner:orchestrator] nack failed session=${_.session_uuid}: ${l(error)} \u2014 lease expiry will re-admit`);
    }
  }
}
function wt(e) {
  console.error(`${new Date().toISOString()} [self-hosted-runner] [runner:fatal] ${sd(e)}`), process.exit(1);
}
async function dn(e) {
  if (e.includes("--help") || e.includes("-h")) {
    console.log(`Usage: claude self-hosted-runner orchestrator [options]

Polls the spawn-hints queue (server returns immediately) and runs \${hooks-dir}/spawn-runner once per
hint. The hook must submit work asynchronously (kubectl create job, EC2
RunInstances, ...) and exit within --hook-timeout. Exit-code contract (session
spawns): 0 = success (no-op); 1 = retryable failure (backoff); >=2 = non-retryable
(circuit-break); stderr tail is forwarded as the nack error. Standby (--min-idle)
spawns: any non-zero exit is logged locally and re-requested after the lease.

Connection:
  --api-url <url>             API base URL (default: ${apiUrl})
  --environment-secret-file <path>
                              Path to environment secret file (or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET)
                              (--pool-secret-file / SELF_HOSTED_RUNNER_POOL_SECRET are deprecated aliases.)

Hook:
  --hooks-dir <path>          Directory containing the spawn-runner hook (REQUIRED).
                              [env: SELF_HOSTED_RUNNER_HOOKS_DIR]
  --hook-concurrency <n>      Max spawn-runner hooks running in parallel (default: ${hookConcurrency}).
                              Also caps how many hints are claimed per poll.
  --hook-timeout <sec>        SIGTERM the hook after <sec> seconds (default: ${hookTimeoutMs / 1000}).
  --expected-spawn-seconds <n>  p99 boot time for runners this orchestrator spawns
                              (default: ${expectedSpawnSeconds}). Sent on every Poll as the
                              server-side lease; if the runner doesn't register before then, the
                              session is re-hinted with a fresh jti. HA replicas MUST use the same value.
  --min-idle <n>              Keep at least <n> idle slots free (free capacity across runners, not
                              runner count; default: 0, disabled). The server mints standby
                              work_orders (no session binding) for the gap on every Poll.

SCM connector (optional \u2014 standing tunnel so Anthropic-hosted pre-session flows can
reach a GHES host that is only routable from inside your network):
  --scm-connector-host <h[:p]>   GHES hostname to forward to (port defaults to 443).
                                 Setting this enables the connector.
  --scm-connector-id <n>         ghe_configurations.id for this org (REQUIRED with --scm-connector-host).
  --scm-connector-provider <s>   Provider slug (default: ghe).
  --scm-connector-ca-file <path> Extra CA bundle (PEM) for TLS to the GHES host.
  --scm-connector-host-rewrite <from>=<to_host:to_port>
                                 e2e only \u2014 redirect the TCP connect while keeping
                                 Host/SNI as --scm-connector-host.

Runtime:
  --health-port <port>        Port for /healthz HTTP listener (default: ${me}). 0 disables.
                              ALWAYS returns 200 (liveness). Body carries connected/last_*/queue_counts/warm_hints_dispatched
                              for readiness/alerting. [env: SELF_HOSTED_RUNNER_HEALTH_PORT]
  --log-level <level>         Log level: info or debug (default: info)

Debug:
  --debug-dir <path>          DEV ONLY \u2014 writes each work-order JWT + decoded JSON + hook stderr to
                              <dir>/<jti>.{jwt,json,stderr}. Auto-pruned after 5m.
                              [env: SELF_HOSTED_RUNNER_DEBUG_DIR]

  --help, -h                  Show this help message`);
    return;
  }
  jv();
  let args_2;
  try {
    cgt("orchestrator mode"), FKr(e), args_2 = ct(e);
  } catch (h) {
    console.error(`error: ${sd(l(h))}
Run 'claude self-hosted-runner orchestrator --help' for usage.`), process.exit(2);
  }
  let r = args_2.logLevel === "debug",
    o = () => new Date().toISOString(),
    d = h => sd(h).replace(/[\x00-\x08\x0b-\x1f\x7f]/g, ""),
    onDebug_2 = h => {
      if (r) console.error(`${o()} [DEBUG] ${d(h)}`);
    },
    onStatus_2 = h => {
      console.log(`${o()} [self-hosted-runner] ${d(h)}`);
    },
    hookPath_2;
  try {
    hookPath_2 = await ut(args_2.hooksDir);
  } catch (error) {
    onStatus_2(`[runner:fatal] ${l(error)}`), process.exit(1);
  }
  onStatus_2(`[runner:hook] spawn-runner hook found at ${hookPath_2}`);
  let poolSecret;
  try {
    poolSecret = await Et(args_2);
  } catch (error) {
    onStatus_2(`[runner:fatal] ${l(error)}`), process.exit(1);
  }
  if (args_2.debugDir) await Ye(args_2.debugDir, {
    recursive: !0,
    mode: 448
  }).catch(h => onStatus_2(`[runner:warn] failed to create --debug-dir ${args_2.debugDir}: ${l(h)} \u2014 continuing without debug artifacts`));
  let orchestratorUuid = Ge(),
    hostname = Xe();
  onStatus_2(`[runner:orchestrator] starting orchestrator_uuid=${orchestratorUuid} hostname=${hostname} hook-concurrency=${args_2.hookConcurrency} hook-timeout=${args_2.hookTimeoutMs}ms`);
  let pool_id_2;
  try {
    pool_id_2 = dt(poolSecret);
  } catch (error) {
    onStatus_2(`[runner:fatal] ${l(error)}`), process.exit(1);
  }
  onStatus_2(`[runner:orchestrator] environment_id=${pool_id_2}`);
  let apiClient_2 = qjt({
      baseUrl: args_2.apiUrl,
      poolSecret: poolSecret,
      onDebug: onDebug_2
    }),
    healthState_2 = {
      orchestratorUuid: orchestratorUuid,
      hostname: hostname,
      version: Gxe,
      pool_id: pool_id_2,
      connected: !1,
      last_poll_at: 0,
      last_hint_at: 0,
      last_hook_ok_at: 0,
      last_warm_hook_ok_at: 0,
      last_error: null,
      clock_skew_ms: null,
      queue_counts: null,
      pool_pending_session_count: null,
      pool_active_session_count: null,
      warm_hints_dispatched: 0,
      spawnHooks: {
        ok: 0,
        retryable: 0,
        nonRetryable: 0
      },
      spawnHookDurations: rt(),
      pollErrors: Vjt(),
      scm_connector: args_2.scmConnector ? ce() : null,
      sessionQueueWaits: it()
    },
    _ = args_2.healthPort > 0 ? ft(args_2.healthPort, healthState_2, onStatus_2) : void 0,
    abortController_2 = new AbortController(),
    R = args_2.scmConnector && healthState_2.scm_connector ? le(args_2.scmConnector, healthState_2.scm_connector, {
      apiUrl: args_2.apiUrl,
      poolSecret: poolSecret,
      onStatus: onStatus_2,
      onDebug: onDebug_2
    }, abortController_2.signal) : void 0,
    g = !1,
    E = () => {
      if (g) onStatus_2("Forced shutdown"), process.exit(1);
      g = !0, onStatus_2("Received shutdown signal, stopping poll loop..."), abortController_2.abort();
    };
  process.on("SIGTERM", E), process.on("SIGINT", E);
  try {
    await gt({
      apiClient: apiClient_2,
      hookPath: hookPath_2,
      args: args_2,
      healthState: healthState_2,
      onStatus: onStatus_2,
      onDebug: onDebug_2
    }, abortController_2.signal);
  } finally {
    R?.stop(), _?.closeAllConnections?.(), _?.close(), process.removeListener("SIGTERM", E), process.removeListener("SIGINT", E);
  }
}
async function Et(e) {
  if (e.poolSecretFile) return (await Xa(ze(e.poolSecretFile, {
    encoding: "utf-8"
  }), Ze, `environment-secret read from ${e.poolSecretFile}`)).trim();
  let SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET = process.env.SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET;
  if (SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET) return SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET.trim();
  let SELF_HOSTED_RUNNER_POOL_SECRET = process.env.SELF_HOSTED_RUNNER_POOL_SECRET;
  if (SELF_HOSTED_RUNNER_POOL_SECRET) return console.error("[runner:warn] SELF_HOSTED_RUNNER_POOL_SECRET is deprecated; use SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET"), SELF_HOSTED_RUNNER_POOL_SECRET.trim();
  throw Error("No environment secret provided. Use --environment-secret-file or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET.");
}
export { dn as selfHostedRunnerOrchestratorMain };