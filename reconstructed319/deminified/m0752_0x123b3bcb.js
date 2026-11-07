// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, F, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Yi, jJ } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { TC } from "B:/~BUN/root/chunk-1g25msn4.js";
import { Os, cn } from "B:/~BUN/root/chunk-bkfncj77.js";
import { cMr } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { vC, BR } from "B:/~BUN/root/chunk-wthaftk0.js";
import { IU } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { dp } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { Uy } from "B:/~BUN/root/chunk-ckdgegnz.js";
import { dn } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { vI, dA } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { s2, A7r, Gve, c3t, wre, u3t, f3t, p3t, aSi, qZr, XZr, yje, qb, iEe, tq, n8t, Jto, _9e } from "B:/~BUN/root/chunk-27h4st9h.js";
import { o1, gce } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { Y6, $Dn } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { VTe } from "B:/~BUN/root/chunk-6bx54the.js";
import { f7t } from "B:/~BUN/root/chunk-kk81ayzj.js";
import { ya, FXe, _Mn, T0e, Ice, x0i, Wdo, oms, sms, ims } from "B:/~BUN/root/chunk-6cgv9p77.js";
import { JZn, QZn, GY, eai, GYr, Dk } from "B:/~BUN/root/chunk-61tvx6vn.js";
import { usi, Tbn } from "B:/~BUN/root/chunk-yb9x9bq9.js";
import { OS, $g } from "B:/~BUN/root/chunk-kgvnwy91.js";
import { Ll } from "B:/~BUN/root/chunk-zy4xrndc.js";
import { Fs as name } from "B:/~BUN/root/chunk-fkcdzerj.js";
import { Wv } from "B:/~BUN/root/chunk-bxk17zm0.js";
import { o, E, I, C, u, He } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { isIP as we } from "net";
import { lookup as fe } from "dns/promises";
import { isIP as ge } from "net";
import te from "ws";
class MonitorWsPreconditionError extends Error {
  constructor(e) {
    super(e);
    this.name = "MonitorWsPreconditionError";
  }
}
function Y4r(e) {
  switch (e.protocol) {
    case "wss:":
    case "https:":
      e.protocol = "wss:";
      break;
    case "ws:":
    case "http:":
      e.protocol = "ws:";
      break;
    default:
      throw new MonitorWsPreconditionError(`unsupported socket base scheme ${e.protocol}`);
  }
  return e.toString();
}
function X(e) {
  return e.replace(/^\[|\]$/g, "");
}
async function he(url, n) {
  let s = new URL(url),
    r = X(s.hostname);
  if (ge(r)) {
    if (n8t(r)) throw new MonitorWsPreconditionError(`${r} is in a private, link-local, or cloud-metadata range`);
    return {
      url: url,
      tls: n.tls
    };
  }
  let g;
  try {
    g = await fe(r, {
      all: !0
    });
  } catch (error) {
    let L = k(error);
    if (n.proxy && i.CLAUDE_CODE_PROXY_RESOLVES_HOSTS && (L === "EAI_AGAIN" || L === "ENOTFOUND")) {
      if (jJ(r) || r.replace(/\.$/, "").split(".").includes("")) throw new MonitorWsPreconditionError(`${r} did not resolve here and is not left to the proxy: the name means loopback or cloud metadata, or has an empty label`);
      return t(`[callWs] ${r} did not resolve here (${F(error).message}); left to the proxy`), {
        url: url,
        tls: n.tls
      };
    }
    throw new MonitorWsPreconditionError(`could not resolve ${r}: ${F(error).message}`);
  }
  if (g.length === 0) throw new MonitorWsPreconditionError(`could not resolve ${r}`);
  for (let {
    address: address
  } of g) if (n8t(address)) throw new MonitorWsPreconditionError(`${r} resolves to ${address}, which is in a private, link-local, or cloud-metadata range`);
  if (n.proxy) return {
    url: url,
    tls: n.tls
  };
  if (s.protocol === "wss:") return {
    url: url,
    tls: n.tls
  };
  let h = g.find(item => item.family === 4) ?? g[0],
    Host = s.host;
  return s.hostname = h.family === 6 ? `[${h.address}]` : h.address, {
    url: s.toString(),
    headers: {
      Host: Host
    },
    tls: n.tls
  };
}
var ye = 30000,
  ZQn = "handshake_timeout";
function be(e, n) {
  let s = Number.isInteger(e) && e >= 100 && e <= 599 ? e : 0;
  return `${n ? "cf_mitigated" : "upgrade_rejected"}_${s}`;
}
function gBe(e) {
  let n = /^(cf_mitigated|upgrade_rejected)_(\d{1,3})$/.exec(e ?? "");
  if (n === null) return null;
  return {
    status: Number(n[2]),
    cfMitigated: n[1] === "cf_mitigated"
  };
}
var ee = 1048576;
function Se(e) {
  if (Array.isArray(e)) return e.reduce((acc, item) => acc + item.length, 0);
  if (e instanceof ArrayBuffer) return e.byteLength;
  return e.length;
}
function zKt(e) {
  return {
    taskRegistry: e.taskRegistry,
    toolUseId: e.toolUseId,
    agentId: e.agentId,
    storageV5: e.storageV5,
    credentials: e.credentials,
    hookCaller: e.hookCaller,
    hookServesModel: e.hookServesModel
  };
}
function ke(e) {
  return n => {
    if (e.readyState === te.OPEN) try {
      e.send(n);
    } catch {}
  };
}
async function vbn(e, n) {
  let s = zKt(n),
    {
      description: description,
      timeout_ms: g,
      persistent: persistent
    } = e,
    {
      url: url_2,
      protocols: protocols
    } = e.ws;
  cMr(url_2);
  let {
      toolUseId: toolUseId,
      taskRegistry: taskRegistry
    } = s,
    agentId = gce(s),
    l = e.reuseTaskId ?? OS("monitor_ws");
  QZn(l, s, taskRegistry);
  let N = JZn({
      description: description,
      agentId: agentId,
      taskRef: {
        id: l
      },
      arm: e.quietLifecycle ? void 0 : "ws",
      killTask: () => {
        if (!GYr(l, f)) return !1;
        return Dk(l, taskRegistry, {
          quiet: !0
        }), !0;
      }
    }),
    proxy = BR(url_2),
    B = await he(url_2, {
      proxy: proxy,
      tls: vC(url_2)
    }),
    O = Yi(e.headers ?? {}, (d, m) => m.toLowerCase() === "host"),
    f = new te(B.url, protocols, {
      proxy: proxy,
      headers: {
        ...O,
        ...B.headers
      },
      tls: B.tls
    }),
    z = Date.now(),
    v,
    A = () => GYr(l, f),
    lastAt = Date.now();
  f.on("open", () => {
    let d = taskRegistry.all()[l];
    if (d && d.status === "running" && A()) try {
      e.onLifecycle?.("open", void 0, Date.now() - z);
    } catch {}
    let keepalive = e.keepalive;
    if (keepalive && d && d.status === "running" && A()) {
      for (let S of keepalive.openFrames) try {
        f.send(S);
      } catch {}
      lastAt = Date.now();
      let y = {
        lastAt: lastAt
      };
      v = setInterval((S, D, M, de, V, Z) => {
        let J = Date.now();
        if (M !== void 0 && J - lastAt > M) {
          try {
            S.terminate();
          } catch {}
          return;
        }
        let Q = V;
        try {
          Q = de?.() ?? V;
        } catch {}
        if (!(M !== void 0 && J - lastAt > M - V * 2) && J - Z.lastAt < Q - V / 2) return;
        Z.lastAt = J;
        for (let pe of typeof D === "function" ? D() : D) try {
          S.send(pe);
        } catch {}
      }, keepalive.intervalMs, f, typeof keepalive.frame === "string" ? [keepalive.frame] : keepalive.frame, keepalive.deadlineMs, keepalive.sendEveryMs, keepalive.intervalMs, y), v.unref?.();
    }
    if (e.onSender && d && d.status === "running" && A()) try {
      e.onSender(ke(f));
    } catch {}
  }), f.on("ping", () => {
    lastAt = Date.now();
  }), f.on("message", (d, m) => {
    lastAt = Date.now();
    let y = taskRegistry.all()[l];
    if (!y || y.status !== "running" || !A()) return;
    let S = Se(d);
    if (S > ee) {
      GY(description, `[Dropped ${S}-byte frame (exceeds ${ee}); closing]`, l, {
        isHousekeeping: !0,
        agentId: agentId,
        turnAttribution: "none"
      }), Dk(l, taskRegistry, {
        quiet: !0
      });
      return;
    }
    if (m) {
      if (typeof e.transform === "function") return;
      N.onData(`[binary frame, ${S} bytes]
`);
      return;
    }
    let D = d.toString("utf8");
    if (typeof e.transform === "function") {
      let M;
      try {
        M = e.transform(D);
      } catch {
        M = null;
      }
      if (M === null) return;
      D = M;
    }
    N.onData(D + `
`);
  });
  let H;
  f.on("unexpected-response", (d, m) => {
    let y = m?.statusCode ?? 0;
    if (y === 101) return;
    let S = m?.headers ?? {},
      D = S["cf-mitigated"] !== void 0;
    H = be(y, D), t(`[callWs] upgrade rejected: status=${y} cf-mitigated=${String(S["cf-mitigated"])} cf-ray=${String(S["cf-ray"])}`), m?.resume?.();
    let M = taskRegistry.all()[l];
    if (!e.quietLifecycle && M?.status === "running" && A()) GY(description, `[WebSocket upgrade rejected: HTTP ${y}]`, l, {
      isHousekeeping: !0,
      agentId: agentId,
      turnAttribution: "none"
    });
    try {
      f.terminate();
    } catch {}
  }), f.on("error", d => {
    clearInterval(v);
    try {
      e.onSenderClosed?.();
    } catch {}
    let m = taskRegistry.all()[l];
    if (!m || m.status !== "running" || !A()) return;
    if (t(`[callWs] socket error: ${d.message}`), !e.quietLifecycle && H === void 0) GY(description, `[WebSocket error: ${d.message}]`, l, {
      isHousekeeping: !0,
      agentId: agentId,
      turnAttribution: "none"
    });
  }), f.on("close", (d, m) => {
    clearInterval(v), N.flushAndClose();
    try {
      e.onSenderClosed?.();
    } catch {}
    let y = taskRegistry.all()[l];
    if (!y || y.status !== "running" || !A()) return;
    try {
      e.onLifecycle?.("close", H ?? String(d), Date.now() - z);
    } catch {}
    if (!e.quietLifecycle) {
      let S = m.length ? ` ${m.toString("utf8")}` : "";
      GY(description, `[WebSocket closed: ${d}${S}]`, l, {
        isHousekeeping: !0,
        agentId: agentId,
        turnAttribution: "none"
      });
    }
    Dk(l, taskRegistry, {
      quiet: !0,
      connectionLost: !0
    });
  });
  let timeoutId = persistent ? void 0 : setTimeout((d, m, y, agentId_2, D, M) => {
      if (d.isClosed()) return;
      if (!M.quiet) {
        if (d.flush(), d.isClosed()) return;
        GY(m, Wdo(M.timeoutMs, d.eventCount(), M.bounded), y, {
          isHousekeeping: !0,
          agentId: agentId_2
        });
      }
      Dk(y, D, {
        quiet: !0
      });
    }, g, N, description, l, agentId, taskRegistry, {
      timeoutMs: g,
      bounded: e.bounded === !0,
      quiet: e.quietLifecycle
    }),
    j = {
      ...$g(l, "monitor_ws", description, toolUseId),
      type: "monitor_ws",
      status: "running",
      url: url_2,
      timeoutId: timeoutId,
      agentId: agentId,
      ...(e.ambient && {
        ambient: !0
      }),
      ...(e.autoReactArmed && {
        autoReactArmed: !0
      }),
      ...(e.autoReactSlug && {
        autoReactSlug: e.autoReactSlug
      }),
      ...(e.frameLive && {
        frameLive: {
          ...e.frameLive,
          armedAt: Date.now()
        }
      })
    };
  if (taskRegistry.register(j), eai(l, f), vI(agentId, `monitor:${l}`, taskRegistry), e.ambient) {
    let d = setTimeout((m, y, S, D, M) => {
      if (m.readyState === 0 && GYr(y, m)) {
        try {
          D.onLifecycle?.("close", ZQn, Date.now() - M);
        } catch {}
        Dk(y, S, {
          quiet: !0,
          connectionLost: !0
        });
      }
    }, e.handshakeDeadlineMs ?? ye, f, l, taskRegistry, e, z);
    d.unref?.(), f.once("open", () => clearTimeout(d)), f.once("close", () => clearTimeout(d));
  }
  return {
    data: {
      taskId: l,
      timeoutMs: persistent ? 0 : g,
      persistent: persistent
    }
  };
}
var oe = "Shell command or script. Each stdout line is an event; exit ends the watch.",
  Me = "command contains control characters that would be hidden in the approval dialog",
  ne = () => o().refine(TC, Me),
  Ce = () => u({
    url: o().refine(TC, "url contains control characters that would be hidden in the approval dialog").refine(e => {
      try {
        let n = new URL(e);
        return (n.protocol === "ws:" || n.protocol === "wss:") && !n.username && !n.password && !/[\t\n\r]/.test(e) && /^[\x00-\x7F]*$/.test(e);
      } catch {
        return !1;
      }
    }, "url must be a valid ASCII ws:// or wss:// URL with no userinfo or whitespace"),
    protocols: C(o().regex(/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, "protocol must be an RFC 6455 token")).refine(e => new Set(e).size === e.length, "protocols must be unique").optional()
  }).describe("WebSocket to open. Each text frame is an event; binary frames are reported as a placeholder line. Socket close ends the watch. Cannot be combined with command."),
  re = "Short human-readable description of what you are monitoring (shown in notifications).";
function Te() {
  return {
    description: o().describe(re),
    timeout_ms: E().min(1000).optional().default(FXe).describe(`Kill the monitor after this deadline. Default ${FXe}ms, max ${_Mn}ms. Ignored when persistent is true.`),
    persistent: I().optional().default(!1).describe(Uy() ? `Run with no timeout until ${ya}. In this session a monitor is likely stopped a few minutes after your reply, so persistent does not keep a watch running past your reply.` : "Run for the lifetime of the session (no timeout). Use for session-length watches like PR monitoring or log tails. Stop with TaskStop.")
  };
}
function ie() {
  let e = T0e();
  return {
    description: o().describe(re),
    timeout_ms: E().min(1000).max(_Mn, `timeout_ms must be \u2264 ${_Mn}`).optional().default(FXe).describe(`Kill the monitor after this deadline. Default ${FXe}ms. Deadlines above ${e}ms are capped to ${e}ms. You are notified at expiry and can re-arm.`)
  };
}
var _e = {
  message: `timeout_ms must be \u2264 ${_Mn}`,
  path: ["timeout_ms"]
};
function ve(e) {
  return e.persistent || e.timeout_ms <= _Mn;
}
function ae(...e) {
  return U(e, Boolean) === 1;
}
function Ie() {
  return Gve() ? c3t() : {};
}
var le = "allowed_domains applies only to a command monitor";
function ce(e) {
  return e.command !== void 0 || wre(e) === void 0;
}
function Re(e) {
  let n = u3t(e);
  return n === void 0 ? e.command ?? "" : {
    command: e.command ?? "",
    ...n
  };
}
var ue = "exactly one of command or ws";
function me() {
  return {
    command: ne().optional().describe(oe),
    ...Ie(),
    ws: Ce().optional()
  };
}
var xe = p(() => He({
    ...Te(),
    ...me()
  }).refine(e => ae(e.command, e.ws), ue).refine(ce, le).refine(ve, _e)),
  De = p(() => u({
    ...ie(),
    ...me()
  }).refine(e => ae(e.command, e.ws), ue).refine(ce, le));
function Ee() {
  return Ice() ? De() : xe();
}
var Ae = p(() => {
  let e = ie(),
    n = T0e();
  return u({
    ...e,
    timeout_ms: e.timeout_ms.describe(`Kill the monitor after this deadline. Default ${FXe}ms. Deadlines above ${n}ms are capped to ${n}ms. It may also stop soon after your reply.`),
    command: ne().describe(oe)
  });
});
function Oe() {
  if (!q()) return;
  let e = o1(Ae());
  return Pe(e) ? e : void 0;
}
function Pe(e) {
  return e.type === "object";
}
var Le = p(() => u({
  taskId: o().describe("ID of the background monitor task."),
  timeoutMs: E().describe("Timeout deadline in milliseconds (0 when persistent)."),
  persistent: I().optional().describe("No timeout \u2014 runs until TaskStop or session end.")
}));
function $e(e) {
  let n = gce(e);
  if (n !== void 0 && s2(n)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
}
async function Ne(e, n) {
  let s = f7t(se(n), name);
  if (s?.verdict.behavior === "deny") return s.verdict;
  let r = await XZr({
    ...e,
    command: e.command
  }, {
    ...n,
    permissionLayers: [...(n.permissionLayers ?? []), {
      kind: "sandbox_auto_allow_suspended"
    }]
  });
  if (s === null || r.behavior === "deny") return r;
  if (r.behavior === "ask") {
    let {
      suggestions: suggestions,
      ...h
    } = r;
    return {
      ...h,
      matchedAskRule: s.rule
    };
  }
  return s.verdict;
}
function We(e, n) {
  let s = f7t(se(n), name);
  if (s === null) return e;
  return s.verdict.behavior === "deny" ? s.verdict : {
    ...e,
    matchedAskRule: s.rule
  };
}
async function validateInput(e) {
  if (e.command === void 0) return {
    result: !0
  };
  let n = qb({
      command: e.command
    }),
    message = yje(n, e.command, !1, "bash");
  if (message !== null) return c("sandbox_exec", "sandbox_policy_refusal", {
    tool: b("monitor")
  }), {
    result: !1,
    message: message,
    errorCode: 14
  };
  return f3t(e, n) ?? {
    result: !0
  };
}
async function ze(command, n, bounded, r, g) {
  let {
      description: description_2,
      timeout_ms: T,
      persistent: persistent_2
    } = n,
    {
      abortController: abortController,
      toolUseId: w,
      taskRegistry: taskRegistry_2
    } = r,
    l = gce(r),
    shouldUseSandbox = qb({
      command: command
    }),
    N = yje(shouldUseSandbox, command, !1, "bash");
  if (N !== null) throw c("sandbox_exec", "sandbox_policy_refusal", {
    tool: b("monitor")
  }), new Y6(N);
  let taskRef = {},
    B = JZn({
      description: description_2,
      agentId: l,
      taskRef: taskRef,
      arm: "bash",
      killTask: () => {
        if (!taskRef.id) return !1;
        return tq(taskRef.id, taskRegistry_2), !0;
      }
    }),
    shellCommand = await iEe(command, abortController.signal, "bash", {
      session: r.session,
      owningAgentId: l,
      preventCwdChanges: !0,
      shouldUseSandbox: shouldUseSandbox,
      sandboxAttributionId: w,
      sandboxNetworkLists: p3t(w, command),
      attributionMessageId: g?.message.id,
      onStdout: B.onData,
      agentWorktree: r.agentWorktree,
      isolationRoot: VTe(r),
      sessionEnvVars: r.sessionEnvVars,
      storageV5: r.storageV5
    });
  if (shellCommand.status === "completed") {
    let v = await shellCommand.result;
    if (v.preSpawnError) {
      let A = new R(v.preSpawnError, "Monitor: pre-spawn error (cwd/argv redacted)");
      throw v.preSpawnErrorCode === "e2big" ? IU(A, {
        kind: "spawn_arg_limit"
      }) : A;
    }
  }
  if (shellCommand.status === "killed") {
    if (await shellCommand.result, shellCommand.cleanup(), l !== void 0 && s2(l)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
    throw Error("This call was interrupted before the monitor started; nothing is running.");
  }
  let f = await _9e({
    command: command,
    description: description_2,
    shellCommand: shellCommand,
    toolUseId: w,
    agentId: l,
    kind: "monitor"
  }, {
    abortController: abortController,
    taskRegistry: taskRegistry_2
  });
  taskRef.id = f.taskId, QZn(f.taskId, r, taskRegistry_2), vI(l, `monitor:${f.taskId}`, taskRegistry_2);
  let z = persistent_2 ? void 0 : setTimeout((v, A, P, agentId_3, Y, j) => {
    if (v.isClosed()) return;
    if (v.flush(), v.isClosed()) return;
    GY(A, Wdo(j.timeoutMs, v.eventCount(), j.bounded), P, {
      isHousekeeping: !0,
      agentId: agentId_3
    }), tq(P, Y);
  }, T, B, description_2, f.taskId, l, taskRegistry_2, {
    timeoutMs: T,
    bounded: bounded
  });
  return shellCommand.result.then(async () => {
    if (z) clearTimeout(z);
    try {
      await B.reportExit(f);
    } catch (error) {
      a(error);
    } finally {
      dA(l, `monitor:${f.taskId}`, taskRegistry_2);
    }
  }), {
    data: {
      taskId: f.taskId,
      timeoutMs: persistent_2 ? 0 : T,
      persistent: persistent_2
    }
  };
}
function Ebn(e) {
  let detail = dp("allow_web_fetch", "Arbitrary-URL egress", "is");
  if (detail !== null) return {
    kind: "compliance",
    host: "",
    detail: detail
  };
  let s = new URL(e),
    host = X(s.hostname);
  if (we(host) && n8t(host)) return {
    kind: "ssrf",
    host: host,
    detail: "the address is in a private, link-local, or cloud-metadata range"
  };
  let g = s.port !== "" ? Number(s.port) : s.protocol === "wss:" ? 443 : 80,
    h = $Dn(host, g);
  if (!h.allowed) return {
    kind: "sandbox-policy",
    host: host,
    detail: h.reason
  };
  return null;
}
function Ue(e, n) {
  let s = Ebn(e.url);
  if (s !== null) return {
    behavior: "deny",
    message: s.kind === "compliance" ? `Monitor cannot open a WebSocket. ${s.detail}` : `Monitor cannot open a WebSocket to ${s.host}: ${s.detail}.`,
    decisionReason: {
      type: "other",
      reason: s.kind === "compliance" ? "organization policy disables model-chosen URL egress" : s.kind === "ssrf" ? "SSRF-blocked address range" : s.detail
    }
  };
  let r = e.protocols !== void 0 && e.protocols.length > 0 ? ` (subprotocols: ${Tbn(e.protocols)})` : "";
  return We({
    behavior: "ask",
    message: `Monitor will open a WebSocket to ${e.url}${r}`,
    suggestions: []
  }, n);
}
function G(e, n) {
  return {
    get session() {
      return e.session;
    },
    get hookCaller() {
      return e.hookCaller;
    },
    get hookServesModel() {
      return e.hookServesModel;
    },
    get storageV5() {
      return e.storageV5;
    },
    get credentials() {
      return e.credentials;
    },
    get agentId() {
      return e.agentId;
    },
    get agentWorktree() {
      return e.agentWorktree;
    },
    get taskRegistry() {
      return e.taskRegistry;
    },
    get sessionEnvVars() {
      return e.sessionEnvVars;
    },
    get shellPermission() {
      return {
        ...e.shellPermission,
        abortController: {
          signal: n.signal
        },
        toolUseId: n.toolUseId
      };
    },
    get mcpState() {
      return e.mcpState;
    },
    get getMcp() {
      return e.mcpState;
    },
    get messages() {
      return e.messages;
    },
    get toolUseId() {
      return n.toolUseId;
    },
    get abortController() {
      return {
        signal: n.signal
      };
    }
  };
}
var je = {
    name: name,
    enablesCodeExecution: !0,
    maxResultSizeChars: 1e4,
    shouldDefer: !0,
    userFacingName() {
      return "Monitor";
    },
    getToolUseSummary(e) {
      if (!e?.description) return null;
      return Os(e.description, Wv);
    },
    getActivityDescription(e) {
      return e?.description ? `Monitoring: ${e.description}` : "Monitoring";
    },
    isEnabled() {
      return Ll();
    },
    async preparePermissionMatcher(e) {
      let n = A7r(e);
      return n === void 0 ? () => !1 : Jto(n);
    },
    isConcurrencySafe() {
      return !0;
    },
    renderToolUseMessage(e) {
      if (!e.description) return null;
      return e.description;
    },
    get outputSchema() {
      return Le();
    },
    mapToolResultToToolResultBlockParam(e, tool_use_id) {
      let s = cn(e.timeoutMs, {
          hideTrailingZeros: !0
        }),
        r = q() ? `expires in ${s} unless the command exits first, and may stop soon after your reply` : e.persistent ? "persistent \u2014 runs until TaskStop or session end" : Ice() ? `expires in ${s} unless the source ends first; you get one notice at expiry \u2014 re-arm if you still need the watch` : `timeout ${e.timeoutMs}ms`,
        g = !q() && Uy() ? `${r}; in this session it is also likely stopped a few minutes after your reply` : r;
      return {
        tool_use_id: tool_use_id,
        type: "tool_result",
        content: `Monitor started (task ${e.taskId}, ${g}). You will be notified on each event. Keep working \u2014 do not poll or sleep. ${q() ? "An event that arrives after your reply is not the user's reply." : "Events may arrive while you are waiting for the user \u2014 an event is not their reply."}`
      };
    }
  },
  Fe = dn({
    ...je,
    backgrounding: "never",
    searchHint: "watch, monitor, or keep an eye on a process/log/command or WebSocket \u2014 stream each stdout line as a live notification",
    async description() {
      return sms() + (q() ? "" : ims) + oms();
    },
    async prompt() {
      return sms() + (q() ? "" : ims) + oms();
    },
    get inputSchema() {
      return Ee();
    },
    get inputJSONSchema() {
      return Oe();
    },
    toAutoClassifierInput(e) {
      return e.ws ? `websocket ${e.ws.url}${usi(e.ws)}` : Re(e);
    },
    sandboxNetworkLists(e) {
      return wre(e);
    },
    create(e) {
      return {
        permissionCheckFailureDecision(n, s) {
          let r = G(e, s);
          return qZr(name, r.shellPermission);
        },
        validateInput: validateInput,
        async checkPermissions(n, s) {
          let r = G(e, s);
          if (n.ws) {
            let g = aSi("Monitor websocket", r.shellPermission);
            if (g !== void 0) return g;
            return Ue(n.ws, r.shellPermission);
          }
          return Ne(n, r.shellPermission);
        },
        async call(n, s) {
          let r = G(e, s),
            {
              parentMessage: parentMessage
            } = s;
          $e(r);
          let bounded_2 = Ice(),
            T = x0i(n, bounded_2);
          if (n.ws) return vbn({
            ...n,
            ...T,
            bounded: bounded_2,
            ws: n.ws
          }, zKt(r));
          return ze(n.command, {
            ...n,
            ...T
          }, bounded_2, r, parentMessage);
        }
      };
    }
  }),
  _ya = Fe;
export { MonitorWsPreconditionError as Tit, Y4r, ZQn, gBe, zKt, vbn, Ebn, _ya };