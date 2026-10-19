// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-9ka04m0y.js";
import { hk } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import { d, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y, je } from "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import { _, J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { tu } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-yrjpmz6e.js";
import { sc } from "B:/~BUN/root/chunk-bgdxazfn.js";
import "B:/~BUN/root/chunk-28dw3zbk.js";
import "B:/~BUN/root/chunk-kzgf20y6.js";
import { ck, iE, wb } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { nP } from "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import "B:/~BUN/root/chunk-vpgpdrbv.js";
import "B:/~BUN/root/chunk-7ybsx93y.js";
import "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-mgb2hezz.js";
import { o2e, Rhn, n8, jde, EQn, ISt, Ahn, xhn, oCe, vet, yWt, _re, Phn, _Wt } from "B:/~BUN/root/chunk-abyad2rh.js";
import "B:/~BUN/root/chunk-mxxcv7nt.js";
import { nYo } from "B:/~BUN/root/chunk-e0tkmfhx.js";
import "B:/~BUN/root/chunk-yw21pggd.js";
import "B:/~BUN/root/chunk-6ft8yhc8.js";
import "B:/~BUN/root/chunk-2zk4vqr8.js";
import "B:/~BUN/root/chunk-nvgn0qsr.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-ek28wssa.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import "B:/~BUN/root/chunk-rvc0n7zm.js";
import "B:/~BUN/root/chunk-wegca9zh.js";
import "B:/~BUN/root/chunk-xrp58hm9.js";
import "B:/~BUN/root/chunk-pjgzz98k.js";
import "B:/~BUN/root/chunk-d9rmnpx3.js";
import "B:/~BUN/root/chunk-k9zm82w3.js";
import "B:/~BUN/root/chunk-fsp20me0.js";
import "B:/~BUN/root/chunk-fvn1tqbf.js";
import { S3t } from "B:/~BUN/root/chunk-2xrpx96h.js";
import "B:/~BUN/root/chunk-2ypz4cxh.js";
import { ml } from "B:/~BUN/root/chunk-46c1kmhs.js";
import "B:/~BUN/root/chunk-0p1hpv0s.js";
import { QN, J6n } from "B:/~BUN/root/chunk-4qc55bxf.js";
import { tS } from "B:/~BUN/root/chunk-7wsxhgty.js";
import "B:/~BUN/root/chunk-31x8pa20.js";
import "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import { randomUUID as ot } from "crypto";
import { constants as rt } from "fs";
import { access as st, mkdir as it, readFile as at, stat as ct } from "fs/promises";
import { createServer as lt } from "http";
import { hostname as ut } from "os";
import { join as dt, resolve as be } from "path";
import { spawn as Ie } from "child_process";
import { randomBytes as Ce } from "crypto";
import { open as De, readdir as Pe, stat as Le, unlink as le, writeFile as ae } from "fs/promises";
import { tmpdir as Ae } from "os";
import { join as ce } from "path";
var z = 5000,
  xe = 512,
  Me = 300000;
async function Ue(e, t) {
  let r = ce(Ae(), `${e}-${Ce(6).toString("hex")}`),
    n = await De(r, "wx", 384);
  try {
    await n.writeFile(t);
  } catch (error) {
    throw await le(r).catch(() => {}), error;
  } finally {
    await n.close();
  }
  return r;
}
async function Fe(e, t, r, n, l) {
  let o = ce(e, t.jti);
  try {
    await ae(`${o}.jwt`, r, {
      mode: 384
    }), await ae(`${o}.json`, _(t, null, 2), {
      mode: 384
    }), await ae(`${o}.stderr`, n, {
      mode: 384
    });
  } catch (error) {
    l(`[runner:orchestrator] debug-dir write failed: ${d(error)}`);
  }
  try {
    let a = Date.now() - Me,
      h = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(jwt|json|stderr)$/;
    for (let c of await Pe(e)) {
      if (!h.test(c)) continue;
      let f = ce(e, c),
        i = await Le(f).catch(() => null);
      if (i?.isFile() && i.mtimeMs < a) await le(f).catch(() => {});
    }
  } catch (error) {
    l(`[runner:orchestrator] debug-dir prune failed: ${d(error)}`);
  }
}
function re(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r < 32 || r >= 127 && r <= 159 || r === 8232 || r === 8233) return !0;
  }
  return !1;
}
async function pe(e) {
  if (n8(e.claims.jti, "spawn-hint jti"), e.claims.session_id) n8(e.claims.session_id, "spawn-hint session_id");
  if (e.claims.pool_id) n8(e.claims.pool_id, "spawn-hint environment_id");
  if (e.claims.account_id) n8(e.claims.account_id, "spawn-hint account_id");
  if (re(e.claims.account_email)) throw Error("spawn-hint account_email: control character");
  for (let f of e.claims.repo_sources) {
    if (f.url && (!S3t(f.url) || re(f.url))) throw Error("spawn-hint repo_sources: unsafe git URL");
    if (f.revision && !hk(f.revision)) throw Error("spawn-hint repo_sources: unsafe revision");
  }
  if (re(e.claims.correlation_id) || e.claims.correlation_id.startsWith("-") || /\s/.test(e.claims.correlation_id)) throw Error("spawn-hint correlation_id: unsafe value");
  if (re(e.claims.server_time)) throw Error("spawn-hint server_time: unsafe value");
  if (typeof e.claims.attempt !== "number" || !Number.isInteger(e.claims.attempt) || e.claims.attempt < 0) throw Error("spawn-hint attempt: unsafe value");
  let CLAUDE_RUNNER_CLIENT_PLATFORM = vet(e.claims.client_platform);
  if (e.claims.client_platform && e.claims.client_platform !== oCe && CLAUDE_RUNNER_CLIENT_PLATFORM === void 0) {
    let client_platform = yWt(e.claims.client_platform);
    e.onDebug(`[runner:orchestrator] spawn-hint client_platform rejected by the env-export gate (CLAUDE_RUNNER_CLIENT_PLATFORM left unset): "${client_platform}" (len=${e.claims.client_platform.length})`), e.claims = {
      ...e.claims,
      client_platform: client_platform
    };
  }
  if (!/^[A-Za-z0-9_.-]+$/.test(e.jwt)) throw Error("spawn-hint work_order_jwt: unsafe character (not base64url + dot)");
  let r = Date.now(),
    CLAUDE_RUNNER_WORK_ORDER_FILE = await Ue(`work-order-${e.claims.jti}`, e.jwt);
  e.onDebug(`[runner:orchestrator] spawn-runner jti=${e.claims.jti} workOrderFile=${CLAUDE_RUNNER_WORK_ORDER_FILE}`);
  let env = {
      ...process.env,
      SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
      SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
      CLAUDE_RUNNER_WORK_ORDER_FILE: CLAUDE_RUNNER_WORK_ORDER_FILE,
      CLAUDE_RUNNER_ORDER_ID: e.claims.jti,
      CLAUDE_RUNNER_SESSION_ID: J6n("session", e.claims.session_id) ?? e.claims.session_id,
      CLAUDE_RUNNER_SESSION_UUID: e.claims.session_id,
      CLAUDE_RUNNER_ATTEMPT: String(e.claims.attempt),
      CLAUDE_RUNNER_POOL_ID: e.claims.pool_id,
      CLAUDE_RUNNER_ACCOUNT_EMAIL: e.claims.account_email,
      CLAUDE_RUNNER_ACCOUNT_ID: e.claims.account_id,
      CLAUDE_RUNNER_ORDER_SERVER_TIME: e.claims.server_time,
      CLAUDE_RUNNER_PRIMARY_REPO_URL: e.claims.primary_repo_url,
      CLAUDE_RUNNER_PRIMARY_REPO_REVISION: e.claims.primary_repo_revision,
      CLAUDE_RUNNER_REPO_SOURCES: e.claims.repo_sources.length > 0 ? _(e.claims.repo_sources) : "",
      CLAUDE_RUNNER_CORRELATION_ID: e.claims.correlation_id,
      CLAUDE_RUNNER_CLIENT_PLATFORM: CLAUDE_RUNNER_CLIENT_PLATFORM
    },
    stderrTail = "",
    timedOut = !1,
    exitCode = null,
    execError = !1;
  try {
    await new Promise(f => {
      let i;
      try {
        i = Ie(e.hookPath, [], {
          cwd: void 0,
          env: env,
          stdio: ["ignore", "pipe", "pipe"],
          detached: !0,
          windowsHide: !0
        }), nP(i.pid);
      } catch (error) {
        execError = !0, stderrTail = `spawn-runner hook exec failed: ${d(error)}`, f();
        return;
      }
      let u = () => {},
        I,
        A,
        v,
        W = setTimeout((S, D, M, O, q, F) => {
          if (timedOut = !0, O(`[runner:orchestrator] spawn-runner jti=${D} timed out after ${M}ms, sending SIGTERM to process tree`), S !== void 0) tS(S, "SIGTERM");
          I = setTimeout((g, B, m, s, R) => {
            if (g !== void 0) tS(g, "SIGKILL");
            v = setTimeout((V, w, H, k) => {
              w(`[runner:orchestrator] spawn-runner jti=${V} did not exit after SIGKILL within ${z}ms (likely D-state); abandoning child and resolving as timed out`), H?.removeEventListener("abort", u), k();
            }, z, B, m, s, R);
          }, z, S, D, O, q, F);
        }, e.timeoutMs, i.pid, e.claims.jti, e.timeoutMs, e.onStatus, e.signal, f),
        E = 65536;
      i.stdout?.setEncoding("utf8"), i.stderr?.setEncoding("utf8");
      let N = "",
        p = "",
        x = (S, D) => {
          let M = S.split(`
`),
            O = M.pop() ?? "";
          for (let q of M) {
            let F = sc(q).replace(/[\x00-\x08\x0b-\x1f\x7f]/g, "");
            if (e.onStatus(`[runner:hook:spawn-runner] ${F}`), D) stderrTail = (stderrTail + F + `
`).slice(-xe);
          }
          return O;
        };
      if (i.stdout?.on("data", S => {
        if (N = x(N + S, !1), N.length > E) N = N.slice(-E);
      }), i.stderr?.on("data", S => {
        if (p = x(p + S, !0), p.length > E) p = p.slice(-E);
      }), i.once("close", () => {
        if (N) x(N + `
`, !1);
        if (p) x(p + `
`, !0);
      }), u = () => {
        if (e.onStatus(`[runner:orchestrator] spawn-runner jti=${e.claims.jti} aborted by shutdown, sending SIGTERM to process tree`), i.pid !== void 0) tS(i.pid, "SIGTERM"), A = setTimeout(S => void tS(S, "SIGKILL"), z, i.pid), A.unref();
      }, e.signal?.addEventListener("abort", u, {
        once: !0
      }), e.signal?.aborted) u();
      i.on("error", S => {
        if (clearTimeout(W), I) clearTimeout(I);
        if (A) clearTimeout(A);
        if (v) clearTimeout(v);
        e.signal?.removeEventListener("abort", u), execError = !0, stderrTail = G(S) ? "spawn-runner hook missing (ENOENT)" : `spawn-runner hook exec failed: ${d(S)}`, f();
      }), i.on("close", S => {
        if (clearTimeout(W), I) clearTimeout(I);
        if (A) clearTimeout(A);
        if (v) clearTimeout(v);
        e.signal?.removeEventListener("abort", u), exitCode = S, f();
      });
    });
  } finally {
    await le(CLAUDE_RUNNER_WORK_ORDER_FILE).catch(f => e.onDebug(`[runner:orchestrator] failed to delete ${CLAUDE_RUNNER_WORK_ORDER_FILE}: ${d(f)}`));
  }
  if (timedOut && !stderrTail) stderrTail = `spawn-runner hook timed out after ${e.timeoutMs}ms`;
  if (e.debugDir) await Fe(e.debugDir, e.claims, e.jwt, stderrTail, e.onDebug);
  return {
    ok: exitCode === 0 && !timedOut && !execError,
    exitCode: exitCode,
    timedOut: timedOut,
    execError: execError,
    stderrTail: stderrTail,
    durationMs: Date.now() - r
  };
}
import { readFile as qe } from "fs/promises";
var We = "/v1/code/scm-connectors/{provider}/{id}/tunnel",
  _e = 4003,
  Ge = 30000,
  me = 1000,
  he = 30000,
  Be = 1e4,
  Ke = 30000,
  fe = 32768,
  Ye = 4194304,
  ze = 1048576,
  Qe = 50,
  Ve = 30000,
  Xe = 1e4,
  Je = new Set(["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]),
  Ze = new Set(["host", "connection", "content-length", "transfer-encoding"]);
function ue(e) {
  if (e.includes("://") || e.includes("/") || e.includes("@")) throw Error("--scm-connector-host expects a bare hostname (e.g. ghe.example.com[:443]), not a URL");
  let t = e.lastIndexOf(":"),
    r = e.startsWith("["),
    host,
    port = 443;
  if (t > 0 && (!r || r && e[t - 1] === "]")) {
    host = e.slice(0, t);
    let o = e.slice(t + 1),
      a = parseInt(o, 10);
    if (Number.isNaN(a) || a < 1 || a > 65535 || String(a) !== o) throw Error("--scm-connector-host port must be an integer in [1, 65535]");
    port = a;
  } else host = e;
  if (host.length === 0) throw Error("--scm-connector-host: hostname is empty");
  if (host.includes(":") && !(host.startsWith("[") && host.endsWith("]"))) throw Error("--scm-connector-host: hostname must be a bare hostname or [v6] literal");
  return {
    host: host,
    port: port
  };
}
function ge(e) {
  let t = e.indexOf("=");
  if (t <= 0 || t === e.length - 1) throw Error("--scm-connector-host-rewrite requires <from>=<to_host:to_port>");
  let r = e.slice(0, t).toLowerCase(),
    n = e.slice(t + 1);
  for (let a of [r, n]) if (a.includes("://") || a.includes("/") || a.includes("@")) throw Error("--scm-connector-host-rewrite expects bare hostnames, not URLs");
  let {
    host: l,
    port: o
  } = ue(n);
  return {
    from: r,
    toHost: l,
    toPort: o
  };
}
function et(e) {
  if (typeof e !== "string" || e.length === 0) return "path must be a non-empty string";
  if (e[0] !== "/") return "path must start with /";
  if (e[1] === "/") return "path must not start with // (scheme-relative)";
  if (e[1] === "@") return "path must not start with /@";
  if (e.includes("\\")) return "path must not contain backslash";
  return null;
}
function tt(e, t, r) {
  let n = new URL("https://placeholder.invalid/");
  if (n.host = `${e}:${t}`, n.hostname === "placeholder.invalid") throw Error("scm-connector dial host is not a valid URL host");
  let l = n.origin,
    o = r.indexOf("?");
  if (n.pathname = o >= 0 ? r.slice(0, o) : r, n.search = o >= 0 ? r.slice(o) : "", n.origin !== l || n.username !== "" || n.password !== "") throw Error("path escaped the configured origin");
  return n;
}
function nt(e, t) {
  let r = We.replace("{provider}", encodeURIComponent(t.provider)).replace("{id}", String(t.connectorId));
  return e.replace(/^http/, "ws").replace(/\/+$/, "") + r;
}
function we() {
  return {
    connected: !1,
    last_connected_at: 0,
    last_error: null,
    reconnects: 0,
    requests_forwarded: 0
  };
}
function Se(e, t, r, n) {
  let l = nt(r.apiUrl, e),
    o = e.hostRewrite && e.hostRewrite.from === e.host.toLowerCase() ? e.hostRewrite.toHost : e.host,
    a = e.hostRewrite && e.hostRewrite.from === e.host.toLowerCase() ? e.hostRewrite.toPort : e.port,
    h = !1,
    c = null,
    f = null,
    i = null,
    u = null,
    I = me,
    A = 0,
    ca,
    W = e.caFile === void 0,
    E = new Map(),
    N = m => {
      t.last_error = sc(m);
    },
    p = m => r.onStatus(`[runner:scm-connector] ${m}`),
    x = m => r.onDebug(`[runner:scm-connector] ${m}`);
  function S(m) {
    let s = c;
    if (!s || s.readyState !== WebSocket.OPEN) return;
    try {
      s.send(_(m));
    } catch (error) {
      N(d(error)), p(`send failed: ${d(error)}`);
    }
  }
  function D(requestId, errorMessage) {
    S({
      httpError: {
        requestId: requestId,
        errorMessage: errorMessage
      }
    });
  }
  function M(m) {
    let s = c;
    if (!s || s.readyState !== WebSocket.OPEN || s.bufferedAmount <= Ye) return Promise.resolve();
    return new Promise(R => {
      let V = setInterval(() => {
        if (h || m.aborted || c !== s || s.readyState !== WebSocket.OPEN || s.bufferedAmount <= ze) clearInterval(V), R();
      }, Qe);
    });
  }
  async function O(m) {
    let requestId_2 = m.requestId;
    if (!requestId_2) return;
    if (m.port !== void 0 && m.port !== 0 && m.port !== e.port) {
      D(requestId_2, `port ${m.port} does not match this connector's configured port ${e.port}`);
      return;
    }
    let R = et(m.path);
    if (R) {
      D(requestId_2, R);
      return;
    }
    let V = m.path,
      method = (m.method ?? "GET").toUpperCase();
    if (!Je.has(method)) {
      D(requestId_2, "method not allowed");
      return;
    }
    let H;
    try {
      H = tt(o, a, V);
    } catch (error) {
      D(requestId_2, d(error));
      return;
    }
    let abortController = new AbortController();
    E.set(requestId_2, abortController);
    let b = setTimeout(y => y.abort(), Ve, abortController),
      K;
    try {
      let headers = new Headers();
      for (let C of m.headers ?? []) {
        if (!C.name || Ze.has(C.name.toLowerCase())) continue;
        headers.append(C.name, C.value ?? "");
      }
      headers.set("Host", e.port === 443 ? e.host : `${e.host}:${e.port}`);
      let body = m.body !== void 0 && m.body !== "" ? Buffer.from(m.body, "base64") : void 0;
      K = await fetch(H, {
        method: method,
        headers: headers,
        body: body,
        redirect: "manual",
        signal: abortController.signal,
        tls: ca !== void 0 || o !== e.host ? {
          ca: ca,
          serverName: e.host
        } : void 0
      });
    } catch (error) {
      clearTimeout(b), E.delete(requestId_2), N(`forward to ${e.host}: ${d(error)}`), D(requestId_2, d(error));
      return;
    }
    clearTimeout(b);
    let headers_2 = [];
    K.headers.forEach((y, U) => {
      headers_2.push({
        name: U,
        value: y
      });
    });
    let sequenceNumber = 0;
    S({
      httpHeaders: {
        requestId: requestId_2,
        statusCode: K.status,
        statusText: K.statusText || String(K.status),
        headers: headers_2,
        sequenceNumber: sequenceNumber
      }
    }), sequenceNumber++;
    try {
      if (K.body) {
        let y = K.body.getReader();
        for (;;) {
          if (await M(abortController.signal), abortController.signal.aborted) {
            await y.cancel();
            break;
          }
          let U = await y.read();
          if (U.value && U.value.length > 0) for (let C = 0; C < U.value.length; C += fe) {
            let X = U.value.subarray(C, C + fe);
            S({
              httpChunk: {
                requestId: requestId_2,
                data: Buffer.from(X).toString("base64"),
                isFinal: !1,
                sequenceNumber: sequenceNumber
              }
            }), sequenceNumber++;
          }
          if (U.done) break;
          if (abortController.signal.aborted) {
            await y.cancel();
            break;
          }
        }
      }
      S({
        httpChunk: {
          requestId: requestId_2,
          data: "",
          isFinal: !0,
          sequenceNumber: sequenceNumber
        }
      }), t.requests_forwarded++;
    } catch (error) {
      D(requestId_2, `error reading GHES response body: ${d(error)}`);
    } finally {
      E.delete(requestId_2);
    }
  }
  function q(m) {
    let s;
    try {
      s = J(m);
    } catch (error) {
      p(`failed to parse tunnel request: ${d(error)}`);
      return;
    }
    if (s.httpRequest) O(s.httpRequest).catch(R => {
      N(d(R)), p(`handleHttpRequest failed: ${d(R)}`);
    });else if (s.httpCancel) {
      let requestId_3 = s.httpCancel.requestId;
      if (requestId_3) E.get(requestId_3)?.abort(), E.delete(requestId_3);
    } else if (s.wsOpen) S({
      wsError: {
        tunnelId: s.wsOpen.tunnelId ?? "",
        errorMessage: "WebSocket tunnel is not supported by the SCM connector"
      }
    });else if (s.ptyOpen) S({
      ptyError: {
        tunnelId: s.ptyOpen.tunnelId ?? "",
        errorMessage: "PTY tunnel is not supported by the SCM connector"
      }
    });
  }
  function F(m) {
    if (h) return;
    t.reconnects++;
    let s;
    if (m === _e) s = Ge, p(`standby (close code ${m}): another orchestrator holds connector ${e.connectorId}; retrying in ${s / 1000}s`);else {
      if (A > 0 && Date.now() - A > he) I = me;
      s = I + Math.floor(Math.random() * (I / 2)), I = Math.min(I * 2, he), x(`reconnecting in ${s}ms`);
    }
    A = 0, i = setTimeout(g, s);
  }
  function g() {
    if (h) return;
    if (i = null, !W) ml(qe(e.caFile, "utf8"), Xe, `--scm-connector-ca-file read from ${e.caFile}`).then(s => {
      ca = s, W = !0;
    }).catch(s => {
      N(`reading --scm-connector-ca-file: ${d(s)}`), p(`reading --scm-connector-ca-file: ${d(s)}`);
    });
    let m;
    try {
      m = new globalThis.WebSocket(l, {
        headers: {
          Authorization: `Bearer ${r.poolSecret}`
        },
        proxy: iE(l),
        tls: ck() || void 0
      });
    } catch (error) {
      N(d(error)), p(`WebSocket construct failed: ${d(error)}`), F();
      return;
    }
    c = m, u = setTimeout(s => {
      N("WebSocket open timeout"), s.onopen = s.onmessage = s.onerror = s.onclose = null;
      try {
        s.close();
      } catch {}
      if (c === s) c = null;
      F();
    }, Be, m), m.onopen = () => {
      if (u) clearTimeout(u), u = null;
      t.connected = !0, t.last_connected_at = Date.now(), t.last_error = null, A = Date.now(), p(`connected provider=${e.provider} connector_id=${e.connectorId} forward=${e.host}:${e.port}${o !== e.host ? ` (dial=${o}:${a})` : ""}`), f = setInterval(() => {
        if (m.readyState === WebSocket.OPEN) m.ping?.();
      }, Ke);
    }, m.onmessage = s => {
      let R = typeof s.data === "string" ? s.data : Buffer.from(s.data).toString("utf8");
      q(R);
    }, m.onerror = s => {
      N("message" in s && typeof s.message === "string" ? s.message : "WebSocket error");
    }, m.onclose = s => {
      if (t.connected = !1, u) clearTimeout(u), u = null;
      if (f) clearInterval(f), f = null;
      for (let R of E.values()) R.abort();
      if (E.clear(), c === m) c = null;
      if (s.code !== _e) p(`closed code=${s.code} reason=${s.reason || "(none)"}`);
      F(s.code);
    };
  }
  function stop() {
    if (h) return;
    if (h = !0, i) clearTimeout(i), i = null;
    if (u) clearTimeout(u), u = null;
    if (f) clearInterval(f), f = null;
    for (let m of E.values()) m.abort();
    E.clear(), t.connected = !1;
    try {
      c?.close();
    } catch {}
    c = null, p("stopped");
  }
  return n?.addEventListener("abort", stop, {
    once: !0
  }), p(`starting provider=${e.provider} connector_id=${e.connectorId} url=${l}`), g(), {
    stop: stop
  };
}
var apiUrl = "https://api.anthropic.com",
  Ee = 1500,
  Te = 8080,
  hookConcurrency = 4,
  hookTimeoutMs = 60000,
  expectedSpawnSeconds = 120,
  pt = 1e4,
  _t = 60000,
  mt = 5000,
  ht = 500,
  ft = 2000,
  gt = 3600,
  wt = 0.2,
  ke = 1000,
  St = 30000,
  bt = new Set([400, 401, 403, 404, 426]),
  ee = [0.1, 0.25, 0.5, 1, 2.5, 5, 10, 20, 30, 60];
function Et() {
  return {
    buckets: ee.map(() => 0),
    count: 0,
    sum: 0
  };
}
function kt(e, t) {
  e.sum += t, e.count += 1;
  for (let r = 0; r < ee.length; r++) if (t <= ee[r]) e.buckets[r]++;
}
var te = [0.5, 1, 2.5, 5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120];
function $t() {
  return {
    buckets: te.map(() => 0),
    count: 0,
    sum: 0
  };
}
function Tt(e, t) {
  let r = Math.max(0, t);
  e.sum += r, e.count += 1;
  for (let n = 0; n < te.length; n++) if (r <= te[n]) e.buckets[n]++;
}
function Rt(e) {
  let t = {
      apiUrl: apiUrl,
      hooksDir: process.env.SELF_HOSTED_RUNNER_HOOKS_DIR ? be(process.env.SELF_HOSTED_RUNNER_HOOKS_DIR) : void 0,
      healthPort: yt(process.env.SELF_HOSTED_RUNNER_HEALTH_PORT, Te, "SELF_HOSTED_RUNNER_HEALTH_PORT"),
      hookConcurrency: hookConcurrency,
      hookTimeoutMs: hookTimeoutMs,
      expectedSpawnSeconds: expectedSpawnSeconds,
      minIdle: 0,
      debugDir: process.env.SELF_HOSTED_RUNNER_DEBUG_DIR,
      logLevel: "info",
      shutdownDrainMs: 0
    },
    r,
    connectorId,
    provider = "ghe",
    o = !1,
    caFile,
    hostRewrite;
  for (let c = 0; c < e.length; c++) {
    let f = e[c],
      i = e[c + 1];
    switch (f) {
      case "--api-url":
        if (i) t.apiUrl = i, c++;
        break;
      case "--pool-secret-file":
      case "--environment-secret-file":
        if (f === "--pool-secret-file") console.error("[runner:warn] --pool-secret-file is deprecated; use --environment-secret-file");
        if (i) t.poolSecretFile = i, c++;
        break;
      case "--hooks-dir":
        if (i) t.hooksDir = be(i), c++;
        break;
      case "--health-port":
        if (i) {
          let u = tu(i);
          if (Number.isNaN(u) || u < 0 || u > 65535) throw Error(`--health-port must be an integer in [0, 65535] (0 disables), got: ${i}`);
          t.healthPort = u, c++;
        }
        break;
      case "--hook-concurrency":
        if (i) {
          let u = tu(i);
          if (Number.isNaN(u) || u < 1 || u > 100) throw Error(`--hook-concurrency must be an integer in [1, 100], got: ${i}`);
          t.hookConcurrency = u, c++;
        }
        break;
      case "--hook-timeout":
        if (i) {
          let u = Number(i);
          if (!Number.isFinite(u) || u <= 0) throw Error(`--hook-timeout must be a positive number of seconds, got: ${i}`);
          t.hookTimeoutMs = u * 1000, c++;
        }
        break;
      case "--expected-spawn-seconds":
        if (i) {
          let u = parseInt(i, 10);
          if (Number.isNaN(u) || u < 10 || u > 3600 || String(u) !== i.trim()) throw Error(`--expected-spawn-seconds must be an integer in [10, 3600], got: ${i}`);
          t.expectedSpawnSeconds = u, c++;
        }
        break;
      case "--min-idle":
        if (i) {
          let u = parseInt(i, 10);
          if (Number.isNaN(u) || u < 0 || u > 200 || String(u) !== i.trim()) throw Error("--min-idle must be an integer in [0, 200]");
          t.minIdle = u, c++;
        }
        break;
      case "--scm-connector-host":
        if (!i) throw Error("--scm-connector-host requires HOST[:PORT]");
        r = ue(i), c++;
        break;
      case "--scm-connector-id":
        {
          if (!i) throw Error("--scm-connector-id requires an integer");
          let u = parseInt(i, 10);
          if (Number.isNaN(u) || u < 1 || String(u) !== i.trim()) throw Error("--scm-connector-id must be a positive integer");
          connectorId = u, c++;
          break;
        }
      case "--scm-connector-provider":
        if (!i) throw Error("--scm-connector-provider requires a value");
        if (!/^[a-z0-9-]{1,32}$/.test(i)) throw Error("--scm-connector-provider must match ^[a-z0-9-]{1,32}$");
        provider = i, o = !0, c++;
        break;
      case "--scm-connector-ca-file":
        if (!i) throw Error("--scm-connector-ca-file requires a path");
        caFile = i, c++;
        break;
      case "--scm-connector-host-rewrite":
        if (!i) throw Error("--scm-connector-host-rewrite requires <from>=<to_host:to_port>");
        hostRewrite = ge(i), c++;
        break;
      case "--debug-dir":
        if (i) t.debugDir = i, c++;
        break;
      case "--shutdown-drain-sec":
        if (i) t.shutdownDrainMs = vt(i) * 1000, c++;
        break;
      case "--log-level":
        if (i) t.logLevel = i, c++;
        break;
      default:
        if (f?.startsWith("--")) throw Error(`unknown flag ${f}`);
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
  } else if (connectorId !== void 0 || o || caFile !== void 0 || hostRewrite !== void 0) throw Error("--scm-connector-id / --scm-connector-provider / --scm-connector-ca-file / --scm-connector-host-rewrite require --scm-connector-host");
  if (t.hookTimeoutMs + z >= t.expectedSpawnSeconds * 1000) throw Error(`--hook-timeout (${t.hookTimeoutMs / 1000}s) + ${z / 1000}s SIGKILL grace must be less than --expected-spawn-seconds (${t.expectedSpawnSeconds}s) \u2014 otherwise an HA replica ` + "re-claims the lease while this hook is still running and both spawn a runner");
  return t;
}
function yt(e, t, r) {
  if (e === void 0 || e === "") return t;
  let n = tu(e);
  if (Number.isNaN(n) || n < 0 || n > 65535) throw Error(`${r} must be an integer in [0, 65535], got: "${e}"`);
  return n;
}
function vt(e) {
  let t = parseInt(e, 10);
  if (Number.isNaN(t) || t < 0 || t > gt || String(t) !== e.trim()) throw Error("--shutdown-drain-sec must be a whole number of seconds from 0 to 3600 (0 turns the drain off)");
  return t;
}
async function Nt(e) {
  if (!e) throw Error("orchestrator requires --hooks-dir (or SELF_HOSTED_RUNNER_HOOKS_DIR) \u2014 no spawn-runner hook directory configured");
  let t = dt(e, "spawn-runner"),
    r;
  try {
    r = await ml(ct(t), 5000, `stat ${t}`);
  } catch (error) {
    throw Error(`spawn-runner hook not found at ${t} \u2014 the orchestrator cannot start without it (${d(error)})`);
  }
  if (!r.isFile()) throw Error(`spawn-runner hook at ${t} is not a regular file`);
  try {
    await ml(st(t, rt.X_OK), 5000, `access ${t}`);
  } catch {
    throw Error(`spawn-runner hook at ${t} is not executable (chmod +x ${t})`);
  }
  return t;
}
function Ot(e) {
  let t = e.replace(/^sk-ant-[a-z]+-/, ""),
    r = QN(t),
    n = r !== null && typeof r === "object" ? r["ccr:pool_id"] : void 0;
  if (typeof n !== "string" || n === "") throw Error("environment secret is missing the ccr:pool_id claim \u2014 cannot derive the environment ID for spawn-hint polling");
  return n;
}
function Ht(e) {
  if (e === void 0 || e === null) return 0;
  if (typeof e === "number") return e;
  if (typeof e === "string") return /^(0|[1-9]\d{0,14})$/.test(e) ? Number(e) : e;
  return String(e);
}
function It(e, t) {
  let r = QN(e.work_order_jwt),
    n = r !== null && typeof r === "object" ? r : {},
    l = f => typeof n[f] === "string" ? n[f] : "",
    aud = n.aud,
    a = Array.isArray(aud) ? aud.find(item => typeof item === "string") ?? "" : typeof aud === "string" ? aud : "",
    pool_id = l("ccr:pool_id") || (a.startsWith("ccpool_") ? a : ""),
    repo_sources = (e.sources ?? []).map(item => ({
      url: item.url ?? "",
      revision: item.revision ?? ""
    }));
  return {
    jti: e.jti || l("jti"),
    session_id: e.session_uuid ?? "",
    attempt: Ht(e.attempt),
    pool_id: pool_id,
    account_id: l("ccr:spawn_account_id") || l("account_id"),
    account_email: l("ccr:spawn_account_email") || l("account_email"),
    server_time: t ?? "",
    repo_sources: repo_sources,
    primary_repo_url: repo_sources[0]?.url ?? "",
    primary_repo_revision: repo_sources[0]?.revision ?? "",
    correlation_id: typeof e.correlation_id === "string" ? e.correlation_id : "",
    client_platform: typeof e.client_platform === "string" ? e.client_platform : ""
  };
}
function Ct(e, t = Date.now()) {
  if (!e) return null;
  let r = Date.parse(e);
  if (Number.isNaN(r)) return null;
  return t - r;
}
function Dt(e, t = Date.now()) {
  let r = e.last_poll_at > 0 ? (t - e.last_poll_at) / 1000 : 0,
    n = `version="${_re(e.version)}",pool_id="${_re(e.pool_id)}",orchestrator_uuid="${_re(e.orchestratorUuid)}",hostname="${_re(e.hostname)}"`,
    l = "claude_code_self_hosted_orchestrator",
    o = "";
  if (o += `# HELP claude_code_self_hosted_orchestrator_info Self-hosted orchestrator identity (info-style gauge; value is always 1).
`, o += `# TYPE claude_code_self_hosted_orchestrator_info gauge
`, o += `claude_code_self_hosted_orchestrator_info{${n}} 1
`, o += `# HELP claude_code_self_hosted_orchestrator_connected 1 when the last PollSpawnHints returned successfully; 0 on transport/5xx error.
`, o += `# TYPE claude_code_self_hosted_orchestrator_connected gauge
`, o += `claude_code_self_hosted_orchestrator_connected ${e.connected ? 1 : 0}
`, o += `# HELP claude_code_self_hosted_orchestrator_last_poll_age_seconds Seconds since the last PollSpawnHints attempt (success or failure).
`, o += `# TYPE claude_code_self_hosted_orchestrator_last_poll_age_seconds gauge
`, o += `claude_code_self_hosted_orchestrator_last_poll_age_seconds ${r}
`, o += `# HELP claude_code_self_hosted_orchestrator_queue_pending_sessions Spawn-hint queue rows claimable right now (eta < now, unclaimed, not circuit-broken). Server-side aggregate for this environment.
`, o += `# TYPE claude_code_self_hosted_orchestrator_queue_pending_sessions gauge
`, e.queue_counts !== null) o += `claude_code_self_hosted_orchestrator_queue_pending_sessions ${e.queue_counts.pending}
`;
  if (o += `# HELP claude_code_self_hosted_orchestrator_queue_backing_off_sessions Spawn-hint queue rows in retry backoff (nacked retryable; eta in the future). Server-side aggregate for this environment.
`, o += `# TYPE claude_code_self_hosted_orchestrator_queue_backing_off_sessions gauge
`, e.queue_counts !== null) o += `claude_code_self_hosted_orchestrator_queue_backing_off_sessions ${e.queue_counts.backing_off}
`;
  if (o += `# HELP claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions Spawn-hint queue rows circuit-broken (nacked non-retryable; operator must RetrySpawnHint to re-admit). Server-side aggregate for this environment.
`, o += `# TYPE claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions gauge
`, e.queue_counts !== null) o += `claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions ${e.queue_counts.circuit_broken}
`;
  if (o += `# HELP claude_code_self_hosted_orchestrator_pool_pending_sessions Total sessions currently waiting on a runner for this environment (the UI "N ahead of you" number). Autoscale on this, not on queue_pending_sessions.
`, o += `# TYPE claude_code_self_hosted_orchestrator_pool_pending_sessions gauge
`, e.pool_pending_session_count !== null) o += `claude_code_self_hosted_orchestrator_pool_pending_sessions ${e.pool_pending_session_count}
`;
  if (o += `# HELP ${"claude_code_self_hosted_orchestrator"}_pool_active_sessions Sessions currently assigned to an alive runner in this environment (the server's environment-wide sum of the per-runner _active_sessions gauges). Environment-wide aggregate \u2014 identical on every orchestrator for one environment; use MAX not SUM across orchestrator instances.
`, o += `# TYPE claude_code_self_hosted_orchestrator_pool_active_sessions gauge
`, e.pool_active_session_count !== null) o += `claude_code_self_hosted_orchestrator_pool_active_sessions ${e.pool_active_session_count}
`;
  o += `# HELP claude_code_self_hosted_orchestrator_warm_hints_dispatched_total Standby (warm) hints dispatched since process start.
`, o += `# TYPE claude_code_self_hosted_orchestrator_warm_hints_dispatched_total counter
`, o += `claude_code_self_hosted_orchestrator_warm_hints_dispatched_total ${e.warm_hints_dispatched}
`, o += `# HELP ${"claude_code_self_hosted_orchestrator"}_spawn_hooks_total spawn-runner hook outcomes since process start (exit-code contract: ok=0, retryable=1/timeout/signal, non_retryable=>=2/ENOENT/EACCES). Counts orchestrator hook invocations (seat + warm), NOT runner child spawns \u2014 NOT comparable to the runner's sessions_started_total (capacity>1, warm environments, and per-runner re-spawns all diverge them).
`, o += `# TYPE claude_code_self_hosted_orchestrator_spawn_hooks_total counter
`, o += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="ok"} ${e.spawnHooks.ok}
`, o += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="retryable"} ${e.spawnHooks.retryable}
`, o += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="non_retryable"} ${e.spawnHooks.nonRetryable}
`, o += `# HELP claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds Wall-clock seconds per spawn-runner hook run (all outcomes; seat + warm).
`, o += `# TYPE claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds histogram
`;
  let spawnHookDurations = e.spawnHookDurations;
  for (let c = 0; c < ee.length; c++) o += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_bucket{le="${ee[c]}"} ${spawnHookDurations.buckets[c]}
`;
  o += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_bucket{le="+Inf"} ${spawnHookDurations.count}
`, o += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_sum ${spawnHookDurations.sum}
`, o += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_count ${spawnHookDurations.count}
`, o += `# HELP claude_code_self_hosted_orchestrator_session_queue_wait_seconds Seconds each session waited in the queue before the orchestrator claimed it for spawn (HTTP Date header - SpawnHint.queue_wait_started_at; seat hints only). For p50/p99 queue-time SLOs and "queue wait > N" alerting.
`, o += `# TYPE claude_code_self_hosted_orchestrator_session_queue_wait_seconds histogram
`;
  let sessionQueueWaits = e.sessionQueueWaits;
  for (let c = 0; c < te.length; c++) o += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_bucket{le="${te[c]}"} ${sessionQueueWaits.buckets[c]}
`;
  o += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_bucket{le="+Inf"} ${sessionQueueWaits.count}
`, o += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_sum ${sessionQueueWaits.sum}
`, o += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_count ${sessionQueueWaits.count}
`, o += `# HELP claude_code_self_hosted_orchestrator_poll_errors_total PollSpawnHints request failures by error kind (transport=no HTTP response; timeout=client deadline; 5xx/429/4xx by status). All five series present from process start so rate() works and absent() means process-down.
`, o += `# TYPE claude_code_self_hosted_orchestrator_poll_errors_total counter
`;
  for (let c of EQn) o += `claude_code_self_hosted_orchestrator_poll_errors_total{error_kind="${c}"} ${e.pollErrors[c]}
`;
  if (o += `# HELP claude_code_self_hosted_orchestrator_clock_skew_seconds Local-minus-server clock skew from the most recent PollSpawnHints Date header. Sample omitted until measured.
`, o += `# TYPE claude_code_self_hosted_orchestrator_clock_skew_seconds gauge
`, e.clock_skew_ms !== null) o += `claude_code_self_hosted_orchestrator_clock_skew_seconds ${e.clock_skew_ms / 1000}
`;
  if (o += `# HELP claude_code_self_hosted_orchestrator_scm_connector_connected 1 when the standing SCM connector WebSocket is OPEN; 0 when dialing/backing off. Series absent when --scm-connector-host is not set.
`, o += `# TYPE claude_code_self_hosted_orchestrator_scm_connector_connected gauge
`, e.scm_connector !== null) o += `claude_code_self_hosted_orchestrator_scm_connector_connected ${e.scm_connector.connected ? 1 : 0}
`;
  if (o += `# HELP claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total Cumulative HTTP requests proxied to the configured SCM host since process start.
`, o += `# TYPE claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total counter
`, e.scm_connector !== null) o += `claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total ${e.scm_connector.requests_forwarded}
`;
  return o;
}
function Pt(e, t, r) {
  let n = lt((o, a) => {
    if (o.method === "GET" && o.url === "/metrics") {
      let c = Dt(t);
      a.writeHead(200, {
        "Content-Type": "text/plain; version=0.0.4; charset=utf-8",
        "Content-Length": Buffer.byteLength(c)
      }), a.end(c);
      return;
    }
    if (o.method !== "GET" || o.url !== "/healthz") {
      a.writeHead(404, {
        "Content-Type": "text/plain"
      }), a.end(`not found
`);
      return;
    }
    let h = _({
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
    a.writeHead(200, {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(h)
    }), a.end(h);
  });
  n.unref();
  let l = 0;
  return n.on("error", o => {
    if (o.code === "EADDRINUSE" && l === 0) {
      l++, r(`[runner:warn] /healthz port ${e} busy, retrying in ${Ee}ms`), setTimeout((a, h) => a.listen(h), Ee, n, e).unref();
      return;
    }
    r(`[runner:warn] /healthz listener failed on port ${e}: ${o.message} \u2014 continuing without health endpoint`);
  }), n.on("listening", () => {
    let o = n.address(),
      a = typeof o === "object" && o ? o.port : e;
    r(`[runner:health] orchestrator /healthz and /metrics listening on :${a}`);
  }), n.listen(e), n;
}
function Lt(e, t) {
  return Math.round(e * (1 + wt * (2 * t() - 1)));
}
async function At(e, signal) {
  let {
      apiClient: apiClient,
      healthState: healthState,
      onStatus: onStatus,
      onDebug: onDebug,
      args: args,
      hookPath: hookPath,
      runHook = pe,
      fatalExit = xt,
      pollIntervalMs = mt,
      minPollGapMs = ht,
      fullAnswerSettleMs = ft,
      random = Math.random,
      drain: drain,
      now = () => performance.now()
    } = e,
    E = drain?.stopSignal ?? signal,
    N = () => drain && E.aborted && !signal.aborted ? AbortSignal.timeout(Rhn) : signal,
    p = {
      at: void 0,
      pollInFlight: !1,
      hooksRunning: 0,
      started: 0,
      handedBack: 0,
      standbyDropped: 0,
      hooksOk: 0,
      hooksFailed: 0,
      hooksStopped: 0,
      nacksFailed: 0
    },
    x = !1,
    S = 0,
    D = () => {
      p.at = now(), p.pollInFlight = x, p.hooksRunning = S;
    };
  if (drain) {
    if (drain.stopSignal.addEventListener("abort", D, {
      once: !0
    }), drain.stopSignal.aborted) D();
  }
  let M = ke,
    O = new Set(),
    hookConcurrency_2 = args.hookConcurrency,
    F = -1 / 0,
    g = -1 / 0,
    B = !1,
    m = 0;
  while (!E.aborted && !signal.aborted) {
    if (O.size >= hookConcurrency_2) {
      await Promise.race(O);
      continue;
    }
    let w = performance.now();
    if (B && w - F < pollIntervalMs && w - g < pollIntervalMs) {
      await Y(pollIntervalMs - (w - g), E);
      continue;
    }
    let max = hookConcurrency_2 - O.size;
    healthState.last_poll_at = Date.now(), g = w, x = !0;
    let k;
    try {
      k = await apiClient.pollSpawnHints({
        orchestrator_uuid: healthState.orchestratorUuid,
        hostname: healthState.hostname,
        client_version: o2e,
        max: max,
        expected_spawn_seconds: args.expectedSpawnSeconds,
        ...(args.minIdle > 0 && {
          min_idle: args.minIdle
        })
      }, signal), x = !1;
    } catch (error) {
      if (x = !1, signal.aborted) break;
      healthState.pollErrors[ISt(error)]++;
      let L = jde(error),
        j = sc(d(error));
      if (E.aborted) {
        healthState.connected = !1, healthState.last_error = j, onStatus(`[runner:orchestrator] stop: the poll in flight failed${L ? ` (HTTP ${L})` : ""}: ${j}. If the server had claimed a session for this poll, that session is requested again only after --expected-spawn-seconds`);
        break;
      }
      if (L !== void 0 && bt.has(L)) {
        if (healthState.connected = !1, healthState.last_error = j, O.size > 0) onStatus(`[runner:orchestrator] poll rejected (HTTP ${L}): waiting for ${O.size} running hook(s) to end, then exiting`), await Promise.allSettled(O);
        fatalExit(L === 426 ? `orchestrator version too old (HTTP 426): ${j} \u2014 upgrade and restart` : `PollSpawnHints rejected (HTTP ${L}): ${j}`);
      }
      healthState.connected = !1, healthState.last_error = j, onStatus(`[runner:orchestrator] poll failed${L ? ` (HTTP ${L})` : ""}: ${j} \u2014 retrying in ${Math.round(M / 1000)}s`), await Y(M, E), M = Math.min(M * 2, St);
      continue;
    }
    healthState.connected = !0, healthState.last_error = null, M = ke, s(k.server_date), healthState.queue_counts = {
      pending: k.pending_count,
      backing_off: k.backing_off_count,
      circuit_broken: k.circuit_broken_count
    }, healthState.pool_pending_session_count = k.pool_pending_session_count ?? null, healthState.pool_active_session_count = k.pool_active_session_count ?? null;
    {
      let T = k.server_date !== null ? Date.parse(k.server_date) : Date.now(),
        L = Number.isFinite(T) ? T : Date.now();
      for (let j of k.hints) {
        if (typeof j.queue_wait_started_at !== "string") continue;
        let oe = Date.parse(j.queue_wait_started_at);
        if (!Number.isFinite(oe)) continue;
        Tt(healthState.sessionQueueWaits, (L - oe) / 1000);
      }
    }
    let b = k.hints.slice(0, max),
      K = k.hints.slice(max);
    for (let T of K) onStatus(`[runner:orchestrator] server over-returned hint session=${T.session_uuid} (got ${k.hints.length}, max=${max}) \u2014 nacking retryably`), await apiClient.nackSpawnHint({
      session_uuid: T.session_uuid,
      attempt: T.attempt,
      error: "orchestrator: server over-returned hints (>max)",
      retryable: !0
    }, N()).catch(L => onStatus(`[runner:orchestrator] nack of over-returned hint failed: ${d(L)} \u2014 lease expiry will re-admit`));
    let Q = Math.max(0, max - b.length),
      P = args.minIdle > 0 ? k.warm_hints.slice(0, Q) : [];
    if (k.warm_hints.length > P.length) onDebug(`[runner:orchestrator] dropping ${k.warm_hints.length - P.length} warm hint(s) (budget=${Q}, minIdle=${args.minIdle})`);
    let y = drain !== void 0 && E.aborted,
      U = drain?.abortAt(),
      C = U === void 0 ? 0 : U - now(),
      X = !y || !signal.aborted && C >= args.hookTimeoutMs + 2 * z,
      Z = X ? b : [],
      Oe = X ? [] : b,
      ne = X ? P : [];
    if (y) {
      p.started += Z.length + ne.length;
      for (let T of Z) onStatus(`[runner:orchestrator] stop: starting session=${T.session_uuid} attempt=${T.attempt} jti=${T.jti}, which the poll in flight brought: ${Math.floor(C / 1000)}s of the shutdown drain are left`);
      if (!X && P.length > 0) p.standbyDropped += P.length, onStatus(`[runner:orchestrator] stop: not starting ${P.length} standby runner(s) that the poll in flight brought: too little of the shutdown drain is left. The server asks for them again once their lease has ended`);
    }
    if (Z.length > 0) onStatus(`[runner:orchestrator] dispatching ${Z.length} hint(s) (concurrency=${args.hookConcurrency})`);
    if (ne.length > 0) onStatus(`[runner:orchestrator] dispatching ${ne.length} warm hint(s) (min_idle=${args.minIdle})`);
    let de = [...Z.map(T => ({
        hint: T,
        hook: R(T, k.server_date, !1)
      })), ...Oe.map(T => ({
        hint: T,
        hook: V(T)
      })), ...ne.map(T => ({
        hint: T,
        hook: R(T, k.server_date, !0)
      }))],
      se = void 0;
    if (hookConcurrency_2 = Math.min(args.hookConcurrency, se ?? args.hookConcurrency), B = se !== void 0, se === void 0) await Promise.all([...de.map(item => item.hook), ...O]);else {
      let T = [...O],
        L = [];
      for (let {
        hint: hint,
        hook: hook
      } of de) {
        let ie = hook.catch(He => {
          healthState.last_error = sc(d(He)), onStatus(`[runner:orchestrator] hint dispatch threw session=${hint.session_uuid} jti=${hint.jti}: ${healthState.last_error} \u2014 not retried here; the server's state is whatever its hook or nack already set`);
        }).finally(() => O.delete(ie));
        O.add(ie), L.push(ie);
      }
      if (b.length > 0) {
        if (L.length >= Math.min(max, hookConcurrency_2) && m < fullAnswerSettleMs) await je(Promise.race([Promise.all(L), ...T]), fullAnswerSettleMs);
        await Y(Math.min(minPollGapMs, Math.max(0, minPollGapMs - (Date.now() - healthState.last_poll_at))), E);
        continue;
      }
    }
    await Y(Lt(pollIntervalMs, random), E);
  }
  if (await Promise.all(O), drain?.stopSignal.removeEventListener("abort", D), p.at !== void 0) onStatus(`[runner:orchestrator] stop summary: poll_in_flight=${p.pollInFlight ? 1 : 0} hooks_running=${p.hooksRunning} started_after_stop=${p.started} handed_back=${p.handedBack} standby_dropped=${p.standbyDropped} hooks_ok=${p.hooksOk} hooks_failed=${p.hooksFailed} hooks_stopped=${p.hooksStopped} nacks_failed=${p.nacksFailed} aborted=${signal.aborted ? 1 : 0} seconds=${((now() - p.at) / 1000).toFixed(1)}`);
  function s(w) {
    let H = Ct(w);
    if (H === null) return;
    if (healthState.clock_skew_ms = H, Math.abs(H) > _t) onStatus(`[runner:warn] clock skew ${Math.round(H / 1000)}s vs server \u2014 check NTP (work-order exp checks may fail)`);
  }
  async function R(w, H, k) {
    if (healthState.last_hint_at = Date.now(), k) healthState.warm_hints_dispatched++;
    let b,
      K = !1;
    S++;
    try {
      let claims = It(w, H);
      b = await runHook({
        hookPath: hookPath,
        jwt: w.work_order_jwt,
        claims: claims,
        timeoutMs: args.hookTimeoutMs,
        debugDir: args.debugDir,
        signal: signal,
        onStatus: onStatus,
        onDebug: onDebug
      }), K = !0;
    } catch (error) {
      b = {
        ok: !1,
        exitCode: 1,
        timedOut: !1,
        execError: !1,
        stderrTail: `spawn-runner hook setup failed: ${d(error)}`,
        durationMs: 0
      };
    }
    if (S--, m = b.durationMs, kt(healthState.spawnHookDurations, b.durationMs / 1000), b.ok) {
      if (healthState.spawnHooks.ok++, healthState.last_hook_ok_at = Date.now(), k) healthState.last_warm_hook_ok_at = healthState.last_hook_ok_at;
      if (onDebug(`[runner:orchestrator] ok session=${w.session_uuid} attempt=${w.attempt} jti=${w.jti} (${b.durationMs}ms)`), p.at !== void 0) p.hooksOk++, onStatus(`[runner:orchestrator] stop: hook ended ok session=${w.session_uuid} attempt=${w.attempt} jti=${w.jti} (${b.durationMs}ms)`);
      return;
    }
    let Q = !b.timedOut && !b.execError && (b.exitCode === null || b.exitCode > 128 && b.exitCode <= 159);
    if (p.at !== void 0) if (Q) p.hooksStopped++;else p.hooksFailed++;
    let error_2 = sc(b.stderrTail || (b.exitCode === null ? "hook killed by external signal (no stderr)" : `exit ${b.exitCode}`)),
      retryable = b.exitCode === 1 || b.timedOut || b.exitCode === null && !b.execError,
      failure_kind = !K ? void 0 : b.timedOut ? "SESSION_FAILURE_KIND_SPAWN_TIMEOUT" : "SESSION_FAILURE_KIND_SPAWN_HOOK_ERROR";
    if (retryable) healthState.spawnHooks.retryable++;else healthState.spawnHooks.nonRetryable++;
    if (healthState.last_error = `spawn-runner hook failed: ${error_2}`, k) {
      onStatus(`[runner:orchestrator] warm hook failed jti=${w.jti} exit=${b.exitCode} timedOut=${b.timedOut}: ${error_2} \u2014 lease expiry will re-mint`);
      return;
    }
    if (drain && E.aborted && !signal.aborted && Q) {
      p.nacksFailed++, onStatus(`[runner:orchestrator] stop: no nack for session=${w.session_uuid} attempt=${w.attempt} jti=${w.jti} exit=${b.exitCode}: a signal ended its hook during the shutdown drain, and the hook may already have submitted its runner \u2014 if it had not, lease expiry will re-admit`);
      return;
    }
    F = performance.now(), onStatus(`[runner:orchestrator] nack session=${w.session_uuid} attempt=${w.attempt} exit=${b.exitCode} timedOut=${b.timedOut} retryable=${retryable}: ${error_2}`);
    try {
      await apiClient.nackSpawnHint({
        session_uuid: w.session_uuid,
        attempt: w.attempt,
        error: error_2,
        retryable: retryable,
        ...(failure_kind && {
          failure_kind: failure_kind
        })
      }, N());
    } catch (error) {
      if (p.at !== void 0) p.nacksFailed++;
      onStatus(`[runner:orchestrator] nack failed session=${w.session_uuid}: ${d(error)} \u2014 lease expiry will re-admit`);
    }
  }
  async function V(w) {
    p.handedBack++, onStatus(`[runner:orchestrator] stop: handing back session=${w.session_uuid} attempt=${w.attempt} jti=${w.jti}, which the poll in flight brought: too little of the shutdown drain is left to run its hook`);
    try {
      await apiClient.nackSpawnHint({
        session_uuid: w.session_uuid,
        attempt: w.attempt,
        error: "orchestrator is shutting down: the spawn-runner hook was not run",
        retryable: !0
      }, AbortSignal.timeout(Rhn));
    } catch (error) {
      p.nacksFailed++, onStatus(`[runner:orchestrator] nack failed session=${w.session_uuid}: ${d(error)} \u2014 lease expiry will re-admit`);
    }
  }
}
function Ne(e) {
  return t => {
    e(`${new Date().toISOString()} [self-hosted-runner] [runner:fatal] ${sc(t)}`), process.exit(1);
  };
}
var xt = Ne(e => console.error(e));
async function In(e) {
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
  --shutdown-drain-sec <n>    On SIGTERM, stop polling but give the poll in flight and the running hooks
                              up to <n> seconds to end before they are stopped (default: 0, stop them
                              at once). SIGINT, or a second SIGTERM, stops them at once; a signal after
                              that exits at once, without waiting for them. Set <n> to at least
                              --hook-timeout + 10, and the process manager's kill delay to at least
                              <n> + 15.
  --health-port <port>        Port for /healthz HTTP listener (default: ${Te}). 0 disables.
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
  wb();
  let t = () => new Date().toISOString(),
    r = Phn({
      stamp: g => `${t()} [self-hosted-runner] ${sc(g)}`
    }),
    args_2;
  try {
    _Wt("orchestrator mode"), nYo(e), args_2 = Rt(e);
  } catch (error) {
    r.write("stderr", `error: ${sc(d(error))}
Run 'claude self-hosted-runner orchestrator --help' for usage.`), process.exit(2);
  }
  let l = args_2.logLevel === "debug",
    o = g => sc(g).replace(/[\x00-\x08\x0b-\x1f\x7f]/g, ""),
    onDebug_2 = g => {
      if (l) r.write("stderr", `${t()} [DEBUG] ${o(g)}`);
    },
    onStatus_2 = g => {
      r.write("stdout", `${t()} [self-hosted-runner] ${o(g)}`);
    };
  onDebug_2(`[runner:log] ${r.describe()}`);
  let hookPath_2;
  try {
    hookPath_2 = await Nt(args_2.hooksDir);
  } catch (error) {
    onStatus_2(`[runner:fatal] ${d(error)}`), process.exit(1);
  }
  onStatus_2(`[runner:hook] spawn-runner hook found at ${hookPath_2}`);
  let poolSecret;
  try {
    poolSecret = await Mt(args_2, g => r.write("stderr", g));
  } catch (error) {
    onStatus_2(`[runner:fatal] ${d(error)}`), process.exit(1);
  }
  if (args_2.debugDir) await it(args_2.debugDir, {
    recursive: !0,
    mode: 448
  }).catch(g => onStatus_2(`[runner:warn] failed to create --debug-dir ${args_2.debugDir}: ${d(g)} \u2014 continuing without debug artifacts`));
  let orchestratorUuid = ot(),
    hostname = ut();
  if (onStatus_2(`[runner:orchestrator] starting orchestrator_uuid=${orchestratorUuid} hostname=${hostname} hook-concurrency=${args_2.hookConcurrency} hook-timeout=${args_2.hookTimeoutMs}ms`), args_2.shutdownDrainMs > 0) {
    let g = args_2.shutdownDrainMs / 1000;
    onStatus_2(`[runner:orchestrator] shutdown drain: ${g}s after SIGTERM; SIGINT or a second SIGTERM ends it early. Allow up to ${g + Rhn / 1000}s for the exit, longer if a hook cannot be killed`);
    let B = args_2.hookTimeoutMs + 2 * z;
    if (args_2.shutdownDrainMs < B) onStatus_2(`[runner:warn] --shutdown-drain-sec (${g}s) is less than --hook-timeout + ${2 * z / 1000}s (${B / 1000}s): a hook that is running at SIGTERM may be stopped before it ends, and every spawn request that arrives after SIGTERM is handed back to the server`);
  }
  let pool_id_2;
  try {
    pool_id_2 = Ot(poolSecret);
  } catch (error) {
    onStatus_2(`[runner:fatal] ${d(error)}`), process.exit(1);
  }
  onStatus_2(`[runner:orchestrator] environment_id=${pool_id_2}`);
  let apiClient_2 = xhn({
      baseUrl: args_2.apiUrl,
      poolSecret: poolSecret,
      onDebug: onDebug_2
    }),
    healthState_2 = {
      orchestratorUuid: orchestratorUuid,
      hostname: hostname,
      version: o2e,
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
      spawnHookDurations: Et(),
      pollErrors: Ahn(),
      scm_connector: args_2.scmConnector ? we() : null,
      sessionQueueWaits: $t()
    },
    W = args_2.healthPort > 0 ? Pt(args_2.healthPort, healthState_2, onStatus_2) : void 0,
    abortController_2 = new AbortController(),
    abortController_3 = new AbortController(),
    p,
    x,
    drain_2 = args_2.shutdownDrainMs > 0 ? {
      stopSignal: abortController_3.signal,
      abortAt: () => p
    } : void 0,
    D = args_2.scmConnector && healthState_2.scm_connector ? Se(args_2.scmConnector, healthState_2.scm_connector, {
      apiUrl: args_2.apiUrl,
      poolSecret: poolSecret,
      onStatus: onStatus_2,
      onDebug: onDebug_2
    }, abortController_2.signal) : void 0,
    M = !1,
    O = g => {
      if (drain_2 && !abortController_2.signal.aborted) {
        if (g && !abortController_3.signal.aborted) {
          onStatus_2(`Received SIGTERM, stopping poll loop; the poll in flight and running hooks have up to ${args_2.shutdownDrainMs / 1000}s to end...`), p = performance.now() + args_2.shutdownDrainMs, x = setTimeout((B, m) => {
            B("Shutdown drain time is over, stopping what is still running..."), m.abort();
          }, args_2.shutdownDrainMs, onStatus_2, abortController_2), abortController_3.abort();
          return;
        }
        onStatus_2(abortController_3.signal.aborted ? "Received a second shutdown signal, stopping what is still running..." : "Received SIGINT, stopping poll loop and running hooks..."), clearTimeout(x), p = performance.now(), abortController_3.abort(), abortController_2.abort();
        return;
      }
      if (M || drain_2) onStatus_2("Forced shutdown"), process.exit(1);
      M = !0, onStatus_2("Received shutdown signal, stopping poll loop..."), abortController_2.abort();
    },
    q = () => O(!0),
    F = () => O(!1);
  process.on("SIGTERM", q), process.on("SIGINT", F);
  try {
    await At({
      apiClient: apiClient_2,
      hookPath: hookPath_2,
      args: args_2,
      healthState: healthState_2,
      onStatus: onStatus_2,
      onDebug: onDebug_2,
      drain: drain_2,
      fatalExit: Ne(g => r.write("stderr", g))
    }, abortController_2.signal);
  } finally {
    clearTimeout(x), D?.stop(), W?.closeAllConnections?.(), W?.close(), process.removeListener("SIGTERM", q), process.removeListener("SIGINT", F);
  }
}
async function Mt(e, t = r => console.error(r)) {
  if (e.poolSecretFile) return (await ml(at(e.poolSecretFile, {
    encoding: "utf-8"
  }), pt, `environment-secret read from ${e.poolSecretFile}`)).trim();
  let SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET = process.env.SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET;
  if (SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET) return SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET.trim();
  let SELF_HOSTED_RUNNER_POOL_SECRET = process.env.SELF_HOSTED_RUNNER_POOL_SECRET;
  if (SELF_HOSTED_RUNNER_POOL_SECRET) return t("[runner:warn] SELF_HOSTED_RUNNER_POOL_SECRET is deprecated; use SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET"), SELF_HOSTED_RUNNER_POOL_SECRET.trim();
  throw Error("No environment secret provided. Use --environment-secret-file or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET.");
}
export { In as selfHostedRunnerOrchestratorMain };