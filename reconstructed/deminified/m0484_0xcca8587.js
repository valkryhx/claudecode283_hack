// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { P, te } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Epn } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { pa } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { fo, Zt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { SC, wC } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { DI, Pv } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { hI, Xt } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { Ft } from "B:/~BUN/root/chunk-msy8grqx.js";
import { VA, _R } from "B:/~BUN/root/chunk-y39emrp9.js";
import { vM, PMe, Dpo, DDn, LDn, wh, pie, Xnt, gZ, Jnt, Qnt, Znt, mrt, xL, Sie, lke } from "B:/~BUN/root/chunk-3jyp964r.js";
import { oIr } from "B:/~BUN/root/chunk-d8zzdckb.js";
import { Woe, qRn, tW, Fro, KRn, Sh } from "B:/~BUN/root/chunk-1mdmjaqt.js";
import { Ito, ivt } from "B:/~BUN/root/chunk-mppjs8gw.js";
import { _S, vm } from "B:/~BUN/root/chunk-tzzvaz2j.js";
import { Iat, B0t, kNe, K9, jTo, vjn, sPr, NB, iPr, aPr } from "B:/~BUN/root/chunk-hcqaqf9c.js";
import { ba } from "B:/~BUN/root/chunk-na2t7g12.js";
import { yl as name } from "B:/~BUN/root/chunk-9wrmdhxv.js";
import { o, E, M, C, u, Qe } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { isIP as de } from "net";
import { lookup as se } from "dns/promises";
import { isIP as ie } from "net";
import K from "ws";
class MonitorWsPreconditionError extends Error {
  constructor(e) {
    super(e);
    this.name = "MonitorWsPreconditionError";
  }
}
function gRn(e) {
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
function j(e) {
  return e.replace(/^\[|\]$/g, "");
}
async function ae(url, n) {
  let r = new URL(url),
    s = j(r.hostname);
  if (ie(s)) {
    if (mrt(s)) throw new MonitorWsPreconditionError(`${s} is in a private, link-local, or cloud-metadata range`);
    return {
      url: url,
      tls: n.tls
    };
  }
  let m;
  try {
    m = await se(s, {
      all: !0
    });
  } catch (error) {
    throw new MonitorWsPreconditionError(`could not resolve ${s}: ${te(error).message}`);
  }
  if (m.length === 0) throw new MonitorWsPreconditionError(`could not resolve ${s}`);
  for (let {
    address: address
  } of m) if (mrt(address)) throw new MonitorWsPreconditionError(`${s} resolves to ${address}, which is in a private, link-local, or cloud-metadata range`);
  if (n.proxy) return {
    url: url,
    tls: n.tls
  };
  if (r.protocol === "wss:") return {
    url: url,
    tls: n.tls
  };
  let b = m.find(item => item.family === 4) ?? m[0],
    Host = r.host;
  return r.hostname = b.family === 6 ? `[${b.address}]` : b.address, {
    url: r.toString(),
    headers: {
      Host: Host
    },
    tls: n.tls
  };
}
var le = 30000,
  I3t = "handshake_timeout";
function ce(e, n) {
  let r = Number.isInteger(e) && e >= 100 && e <= 599 ? e : 0;
  return `${n ? "cf_mitigated" : "upgrade_rejected"}_${r}`;
}
function mpe(e) {
  let n = /^(cf_mitigated|upgrade_rejected)_(\d{1,3})$/.exec(e ?? "");
  if (n === null) return null;
  return {
    status: Number(n[2]),
    cfMitigated: n[1] === "cf_mitigated"
  };
}
var maxPayload = 1048576;
function ue(e) {
  if (Array.isArray(e)) return e.reduce((acc, item) => acc + item.length, 0);
  if (e instanceof ArrayBuffer) return e.byteLength;
  return e.length;
}
function lZe(e) {
  return {
    taskRegistry: e.taskRegistry,
    toolUseId: e.toolUseId,
    agentId: e.agentId,
    storageV5: e.storageV5,
    credentials: e.credentials
  };
}
function me(e) {
  return n => {
    if (e.readyState === K.OPEN) try {
      e.send(n);
    } catch {}
  };
}
async function ovt(e, n) {
  let r = lZe(n),
    {
      description: description,
      timeout_ms: m,
      persistent: persistent
    } = e,
    {
      url: url_2,
      protocols: protocols
    } = e.ws;
  Epn(url_2);
  let {
      toolUseId: toolUseId,
      taskRegistry: taskRegistry
    } = r,
    agentId = Woe(r),
    i = e.reuseTaskId ?? _S("monitor_ws"),
    v = qRn({
      description: description,
      agentId: agentId,
      taskRef: {
        id: i
      },
      killTask: () => {
        if (!KRn(i, l)) return !1;
        return Sh(i, taskRegistry, {
          quiet: !0
        }), !0;
      }
    }),
    proxy = wC(url_2),
    I = await ae(url_2, {
      proxy: proxy,
      tls: SC()
    }),
    N = pa(e.headers ?? {}, (c, a) => a.toLowerCase() === "host"),
    l = new K(I.url, protocols, {
      proxy: proxy,
      headers: {
        ...N,
        ...I.headers
      },
      tls: I.tls,
      maxPayload: maxPayload
    }),
    D = Date.now(),
    A,
    _ = () => KRn(i, l),
    lastAt = Date.now();
  l.on("open", () => {
    let c = taskRegistry.all()[i];
    if (c && c.status === "running" && _()) try {
      e.onLifecycle?.("open", void 0, Date.now() - D);
    } catch {}
    let keepalive = e.keepalive;
    if (keepalive && c && c.status === "running" && _()) {
      for (let g of keepalive.openFrames) try {
        l.send(g);
      } catch {}
      lastAt = Date.now();
      let p = {
        lastAt: lastAt
      };
      A = setInterval((g, w, h, ne, z, V) => {
        let B = Date.now();
        if (h !== void 0 && B - lastAt > h) {
          try {
            g.terminate();
          } catch {}
          return;
        }
        let q = z;
        try {
          q = ne?.() ?? z;
        } catch {}
        if (!(h !== void 0 && B - lastAt > h - z * 2) && B - V.lastAt < q - z / 2) return;
        V.lastAt = B;
        for (let re of typeof w === "function" ? w() : w) try {
          g.send(re);
        } catch {}
      }, keepalive.intervalMs, l, typeof keepalive.frame === "string" ? [keepalive.frame] : keepalive.frame, keepalive.deadlineMs, keepalive.sendEveryMs, keepalive.intervalMs, p), A.unref?.();
    }
    if (e.onSender && c && c.status === "running" && _()) try {
      e.onSender(me(l));
    } catch {}
  }), l.on("ping", () => {
    lastAt = Date.now();
  }), l.on("message", (c, a) => {
    lastAt = Date.now();
    let p = taskRegistry.all()[i];
    if (!p || p.status !== "running" || !_()) return;
    let g = ue(c);
    if (g > maxPayload) {
      tW(description, `[Dropped ${g}-byte frame (exceeds ${maxPayload}); closing]`, i, {
        isHousekeeping: !0,
        agentId: agentId,
        turnAttribution: "none"
      }), Sh(i, taskRegistry, {
        quiet: !0
      });
      return;
    }
    if (a) {
      if (typeof e.transform === "function") return;
      v.onData(`[binary frame, ${g} bytes]
`);
      return;
    }
    let w = c.toString("utf8");
    if (typeof e.transform === "function") {
      let h;
      try {
        h = e.transform(w);
      } catch {
        h = null;
      }
      if (h === null) return;
      w = h;
    }
    v.onData(w + `
`);
  });
  let O;
  l.on("unexpected-response", (c, a) => {
    let p = a?.statusCode ?? 0;
    if (p === 101) return;
    let g = a?.headers ?? {},
      w = g["cf-mitigated"] !== void 0;
    O = ce(p, w), t(`[callWs] upgrade rejected: status=${p} cf-mitigated=${String(g["cf-mitigated"])} cf-ray=${String(g["cf-ray"])}`), a?.resume?.();
    let h = taskRegistry.all()[i];
    if (!e.quietLifecycle && h?.status === "running" && _()) tW(description, `[WebSocket upgrade rejected: HTTP ${p}]`, i, {
      isHousekeeping: !0,
      agentId: agentId,
      turnAttribution: "none"
    });
    try {
      l.terminate();
    } catch {}
  }), l.on("error", c => {
    clearInterval(A);
    try {
      e.onSenderClosed?.();
    } catch {}
    let a = taskRegistry.all()[i];
    if (!a || a.status !== "running" || !_()) return;
    if (t(`[callWs] socket error: ${c.message}`), !e.quietLifecycle && O === void 0) tW(description, `[WebSocket error: ${c.message}]`, i, {
      isHousekeeping: !0,
      agentId: agentId,
      turnAttribution: "none"
    });
  }), l.on("close", (c, a) => {
    clearInterval(A), v.flushAndClose();
    try {
      e.onSenderClosed?.();
    } catch {}
    let p = taskRegistry.all()[i];
    if (!p || p.status !== "running" || !_()) return;
    try {
      e.onLifecycle?.("close", O ?? String(c), Date.now() - D);
    } catch {}
    if (!e.quietLifecycle) {
      let g = a.length ? ` ${a.toString("utf8")}` : "";
      tW(description, `[WebSocket closed: ${c}${g}]`, i, {
        isHousekeeping: !0,
        agentId: agentId,
        turnAttribution: "none"
      });
    }
    Sh(i, taskRegistry, {
      quiet: !0,
      connectionLost: !0
    });
  });
  let timeoutId = persistent ? void 0 : setTimeout((c, a, p, agentId_2, w, h) => {
      if (c.isClosed()) return;
      if (!h.quiet) {
        if (c.flush(), c.isClosed()) return;
        tW(a, vjn(h.timeoutMs, c.eventCount(), h.bounded), p, {
          isHousekeeping: !0,
          agentId: agentId_2
        });
      }
      Sh(p, w, {
        quiet: !0
      });
    }, m, v, description, i, agentId, taskRegistry, {
      timeoutMs: m,
      bounded: e.bounded === !0,
      quiet: e.quietLifecycle
    }),
    oe = {
      ...vm(i, "monitor_ws", description, toolUseId),
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
  if (taskRegistry.register(oe), Fro(i, l), VA(agentId, `monitor:${i}`, taskRegistry), e.ambient) {
    let c = setTimeout((a, p, g, w, h) => {
      if (a.readyState === 0 && KRn(p, a)) {
        try {
          w.onLifecycle?.("close", I3t, Date.now() - h);
        } catch {}
        Sh(p, g, {
          quiet: !0,
          connectionLost: !0
        });
      }
    }, e.handshakeDeadlineMs ?? le, l, i, taskRegistry, e, D);
    c.unref?.(), l.once("open", () => clearTimeout(c)), l.once("close", () => clearTimeout(c));
  }
  return {
    data: {
      taskId: i,
      timeoutMs: persistent ? 0 : m,
      persistent: persistent
    }
  };
}
var pe = "Shell command or script. Each stdout line is an event; exit ends the watch.",
  fe = "command contains control characters that would be hidden in the approval dialog",
  ge = () => o().refine(hI, fe),
  he = () => u({
    url: o().refine(hI, "url contains control characters that would be hidden in the approval dialog").refine(e => {
      try {
        let n = new URL(e);
        return (n.protocol === "ws:" || n.protocol === "wss:") && !n.username && !n.password && !/[\t\n\r]/.test(e) && /^[\x00-\x7F]*$/.test(e);
      } catch {
        return !1;
      }
    }, "url must be a valid ASCII ws:// or wss:// URL with no userinfo or whitespace"),
    protocols: C(o().regex(/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, "protocol must be an RFC 6455 token")).refine(e => new Set(e).size === e.length, "protocols must be unique").optional()
  }).describe("WebSocket to open. Each text frame is an event; binary frames are reported as a placeholder line. Socket close ends the watch. Cannot be combined with command."),
  Y = "Short human-readable description of what you are monitoring (shown in notifications).";
function be() {
  return {
    description: o().describe(Y),
    timeout_ms: E().min(1000).optional().default(Iat).describe(`Kill the monitor after this deadline. Default ${Iat}ms, max ${B0t}ms. Ignored when persistent is true.`),
    persistent: M().optional().default(!1).describe("Run for the lifetime of the session (no timeout). Use for session-length watches like PR monitoring or log tails. Stop with TaskStop.")
  };
}
function ye() {
  let e = kNe();
  return {
    description: o().describe(Y),
    timeout_ms: E().min(1000).max(B0t, `timeout_ms must be \u2264 ${B0t}`).optional().default(Iat).describe(`Kill the monitor after this deadline. Default ${Iat}ms. Deadlines above ${e}ms are capped to ${e}ms. You are notified at expiry and can re-arm.`)
  };
}
var Se = {
  message: `timeout_ms must be \u2264 ${B0t}`,
  path: ["timeout_ms"]
};
function ke(e) {
  return e.persistent || e.timeout_ms <= B0t;
}
function X(...e) {
  return U(e, Boolean) === 1;
}
function we() {
  return pie() ? Xnt() : {};
}
var G = "allowed_domains applies only to a command monitor";
function Z(e) {
  return e.command !== void 0 || gZ(e) === void 0;
}
function Me(e) {
  let n = Jnt(e);
  return n === void 0 ? e.command ?? "" : {
    command: e.command ?? "",
    ...n
  };
}
var J = "exactly one of command or ws";
function Q() {
  return {
    command: ge().optional().describe(pe),
    ...we(),
    ws: he().optional()
  };
}
var Ce = f(() => Qe({
    ...be(),
    ...Q()
  }).refine(e => X(e.command, e.ws), J).refine(Z, G).refine(ke, Se)),
  Te = f(() => u({
    ...ye(),
    ...Q()
  }).refine(e => X(e.command, e.ws), J).refine(Z, G));
function Ie() {
  return K9() ? Te() : Ce();
}
var _e = f(() => u({
  taskId: o().describe("ID of the background monitor task."),
  timeoutMs: E().describe("Timeout deadline in milliseconds (0 when persistent)."),
  persistent: M().optional().describe("No timeout \u2014 runs until TaskStop or session end.")
}));
function ve(e) {
  let n = Woe(e);
  if (n !== void 0 && vM(n)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
}
async function Ee(command, n, bounded, s, m) {
  let {
      description: description_2,
      timeout_ms: S,
      persistent: persistent_2
    } = n,
    {
      abortController: abortController,
      toolUseId: y,
      taskRegistry: taskRegistry_2
    } = s,
    i = Woe(s),
    taskRef = {},
    v = qRn({
      description: description_2,
      agentId: i,
      taskRef: taskRef,
      killTask: () => {
        if (!taskRef.id) return !1;
        return xL(taskRef.id, taskRegistry_2), !0;
      }
    }),
    shellCommand = await Sie(command, abortController.signal, "bash", {
      session: s.session,
      owningAgentId: i,
      preventCwdChanges: !0,
      shouldUseSandbox: wh({
        command: command
      }),
      sandboxAttributionId: y,
      sandboxNetworkLists: Znt(y, command),
      attributionMessageId: m?.message.id,
      onStdout: v.onData,
      agentWorktree: s.agentWorktree,
      isolationRoot: PMe(s),
      sessionEnvVars: s.sessionEnvVars,
      storageV5: s.storageV5
    });
  if (shellCommand.status === "completed") {
    let l = await shellCommand.result;
    if (l.preSpawnError) {
      let D = new P(l.preSpawnError, "Monitor: pre-spawn error (cwd/argv redacted)");
      throw l.preSpawnErrorCode === "e2big" ? DI(D, {
        kind: "spawn_arg_limit"
      }) : D;
    }
  }
  if (shellCommand.status === "killed" && i !== void 0 && vM(i)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
  let I = await lke({
    command: command,
    description: description_2,
    shellCommand: shellCommand,
    toolUseId: y,
    agentId: i,
    kind: "monitor"
  }, {
    abortController: abortController,
    taskRegistry: taskRegistry_2
  });
  taskRef.id = I.taskId, VA(i, `monitor:${I.taskId}`, taskRegistry_2);
  let N = persistent_2 ? void 0 : setTimeout((l, D, A, agentId_3, x, O) => {
    if (l.isClosed()) return;
    if (l.flush(), l.isClosed()) return;
    tW(D, vjn(O.timeoutMs, l.eventCount(), O.bounded), A, {
      isHousekeeping: !0,
      agentId: agentId_3
    }), xL(A, x);
  }, S, v, description_2, I.taskId, i, taskRegistry_2, {
    timeoutMs: S,
    bounded: bounded
  });
  return shellCommand.result.then(async () => {
    if (N) clearTimeout(N);
    try {
      await v.reportExit(I);
    } catch (error) {
      d(error);
    } finally {
      _R(i, `monitor:${I.taskId}`, taskRegistry_2);
    }
  }), {
    data: {
      taskId: I.taskId,
      timeoutMs: persistent_2 ? 0 : S,
      persistent: persistent_2
    }
  };
}
function svt(e) {
  if (!Xt("allow_web_fetch")) return {
    kind: "compliance",
    host: "",
    detail: "arbitrary-URL egress is disabled by your organization's policy"
  };
  let n = new URL(e),
    host = j(n.hostname);
  if (de(host) && mrt(host)) return {
    kind: "ssrf",
    host: host,
    detail: "the address is in a private, link-local, or cloud-metadata range"
  };
  let s = n.port !== "" ? Number(n.port) : n.protocol === "wss:" ? 443 : 80,
    m = oIr(host, s);
  if (!m.allowed) return {
    kind: "sandbox-policy",
    host: host,
    detail: m.reason
  };
  return null;
}
function Re(e) {
  let n = svt(e.url);
  if (n !== null) return {
    behavior: "deny",
    message: n.kind === "compliance" ? `Monitor cannot open a WebSocket: ${n.detail}.` : `Monitor cannot open a WebSocket to ${n.host}: ${n.detail}.`,
    decisionReason: {
      type: "other",
      reason: n.kind === "compliance" ? "organization policy disables model-chosen URL egress" : n.kind === "ssrf" ? "SSRF-blocked address range" : n.detail
    }
  };
  let r = e.protocols !== void 0 && e.protocols.length > 0 ? ` (subprotocols: ${ivt(e.protocols)})` : "";
  return {
    behavior: "ask",
    message: `Monitor will open a WebSocket to ${e.url}${r}`,
    suggestions: []
  };
}
function F(e, n) {
  return {
    get session() {
      return e.session;
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
var De = {
    name: name,
    enablesCodeExecution: !0,
    maxResultSizeChars: 1e4,
    shouldDefer: !0,
    userFacingName() {
      return "Monitor";
    },
    getToolUseSummary(e) {
      if (!e?.description) return null;
      return fo(e.description, Pv);
    },
    getActivityDescription(e) {
      return e?.description ? `Monitoring: ${e.description}` : "Monitoring";
    },
    isEnabled() {
      return NB() && ba();
    },
    isConcurrencySafe() {
      return !0;
    },
    renderToolUseMessage(e) {
      if (!e.description) return null;
      return e.description;
    },
    get outputSchema() {
      return _e();
    },
    mapToolResultToToolResultBlockParam(e, tool_use_id) {
      let r = e.persistent ? "persistent \u2014 runs until TaskStop or session end" : K9() ? `expires in ${Zt(e.timeoutMs, {
        hideTrailingZeros: !0
      })} unless the source ends first; you get one notice at expiry \u2014 re-arm if you still need the watch` : `timeout ${e.timeoutMs}ms`;
      return {
        tool_use_id: tool_use_id,
        type: "tool_result",
        content: `Monitor started (task ${e.taskId}, ${r}). You will be notified on each event. Keep working \u2014 do not poll or sleep. Events may arrive while you are waiting for the user \u2014 an event is not their reply.`
      };
    }
  },
  xe = Ft({
    ...De,
    backgrounding: "never",
    searchHint: "watch, monitor, or keep an eye on a process/log/command or WebSocket \u2014 stream each stdout line as a live notification",
    async description() {
      return iPr() + aPr + sPr();
    },
    async prompt() {
      return iPr() + aPr + sPr();
    },
    get inputSchema() {
      return Ie();
    },
    toAutoClassifierInput(e) {
      return e.ws ? `websocket ${e.ws.url}${Ito(e.ws)}` : Me(e);
    },
    sandboxNetworkLists(e) {
      return gZ(e);
    },
    create(e) {
      return {
        permissionCheckFailureDecision(n, r) {
          let s = F(e, r);
          return DDn(name, s.shellPermission);
        },
        async validateInput(n) {
          if (n.command !== void 0) {
            let r = Qnt(n, wh({
              command: n.command
            }));
            if (r !== void 0) return r;
          }
          return {
            result: !0
          };
        },
        async checkPermissions(n, r) {
          let s = F(e, r);
          if (n.ws) {
            let m = Dpo("Monitor websocket", s.shellPermission);
            if (m !== void 0) return m;
            return Re(n.ws);
          }
          return LDn({
            ...n,
            command: n.command
          }, s.shellPermission);
        },
        async call(n, r) {
          let s = F(e, r),
            {
              parentMessage: parentMessage
            } = r;
          ve(s);
          let bounded_2 = K9(),
            S = jTo(n, bounded_2);
          if (n.ws) return ovt({
            ...n,
            ...S,
            bounded: bounded_2,
            ws: n.ws
          }, lZe(s));
          return Ee(n.command, {
            ...n,
            ...S
          }, bounded_2, s, parentMessage);
        }
      };
    }
  }),
  WKo = xe;
export { MonitorWsPreconditionError as gze, gRn, I3t, mpe, lZe, ovt, svt, WKo };