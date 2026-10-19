// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  F,
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  x,
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Qx
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  es,
  rn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Da
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Z6n
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  ck,
  iE
} from "B:/~BUN/root/chunk-07c8fw5z.js";
import {
  $D,
  YC
} from "B:/~BUN/root/chunk-qp0344nb.js";
import {
  If
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  Xl,
  Qt
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  Q0,
  aM
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  tU,
  mSe,
  UAt,
  $ue,
  BAt,
  jAt,
  WAt,
  SSe,
  lgs,
  Mhr,
  Dhr,
  p_,
  spe,
  Sq,
  wPt,
  j$e
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  mee
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  Bko
} from "B:/~BUN/root/chunk-r0jnxjth.js";
import {
  nD
} from "B:/~BUN/root/chunk-n0e205s6.js";
import {
  Cxn,
  GV,
  vss,
  zdr,
  Ob
} from "B:/~BUN/root/chunk-4bgwjb4z.js";
import {
  irs,
  CYt
} from "B:/~BUN/root/chunk-5qymzycm.js";
import {
  AE,
  tb
} from "B:/~BUN/root/chunk-c2nm18xm.js";
import {
  V0t,
  nnn,
  l8e,
  Nie,
  zPs,
  jCr,
  avo,
  e3,
  lvo,
  dvo
} from "B:/~BUN/root/chunk-455kgrq5.js";
import {
  Yi
} from "B:/~BUN/root/chunk-s39maerh.js";
import {
  o,
  v,
  M,
  T,
  u,
  De
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  lookup as le
} from "dns/promises";
import {
  isIP as ce
} from "net";
import K from "ws";
class Iot extends Error {
  constructor(e) {
    super(e);
    this.name = "MonitorWsPreconditionError"
  }
}

function Glr(e) {
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
      throw new Iot(`unsupported socket base scheme ${e.protocol}`)
  }
  return e.toString()
}

function U(e) {
  return e.replace(/^\[|\]$/g, "")
}
async function ue(e, n) {
  let s = new URL(e),
    r = U(s.hostname);
  if (ce(r)) {
    if (wPt(r)) throw new Iot(`${r} is in a private, link-local, or cloud-metadata range`);
    return {
      url: e,
      tls: n.tls
    }
  }
  let d;
  try {
    d = await le(r, {
      all: !0
    })
  } catch (C) {
    throw new Iot(`could not resolve ${r}: ${H(C).message}`)
  }
  if (d.length === 0) throw new Iot(`could not resolve ${r}`);
  for (let {
      address: C
    }
    of d)
    if (wPt(C)) throw new Iot(`${r} resolves to ${C}, which is in a private, link-local, or cloud-metadata range`);
  if (n.proxy) return {
    url: e,
    tls: n.tls
  };
  if (s.protocol === "wss:") return {
    url: e,
    tls: n.tls
  };
  let p = d.find((C) => C.family === 4) ?? d[0],
    S = s.host;
  return s.hostname = p.family === 6 ? `[${p.address}]` : p.address, {
    url: s.toString(),
    headers: {
      Host: S
    },
    tls: n.tls
  }
}
var me = 30000,
  TAn = "handshake_timeout";

function pe(e, n) {
  let s = Number.isInteger(e) && e >= 100 && e <= 599 ? e : 0;
  return `${n?"cf_mitigated":"upgrade_rejected"}_${s}`
}

function WRe(e) {
  let n = /^(cf_mitigated|upgrade_rejected)_(\d{1,3})$/.exec(e ?? "");
  if (n === null) return null;
  return {
    status: Number(n[2]),
    cfMitigated: n[1] === "cf_mitigated"
  }
}
var B = 1048576;

function fe(e) {
  if (Array.isArray(e)) return e.reduce((n, s) => n + s.length, 0);
  if (e instanceof ArrayBuffer) return e.byteLength;
  return e.length
}

function FTt(e) {
  return {
    taskRegistry: e.taskRegistry,
    toolUseId: e.toolUseId,
    agentId: e.agentId,
    storageV5: e.storageV5,
    credentials: e.credentials
  }
}

function ge(e) {
  return (n) => {
    if (e.readyState === K.OPEN) try {
      e.send(n)
    } catch {}
  }
}
async function EYt(e, n) {
  let s = FTt(n),
    {
      description: r,
      timeout_ms: d,
      persistent: p
    } = e,
    {
      url: S,
      protocols: C
    } = e.ws;
  Z6n(S);
  let {
    toolUseId: N,
    taskRegistry: y
  } = s, k = mee(s), i = e.reuseTaskId ?? AE("monitor_ws"), D = Cxn({
    description: r,
    agentId: k,
    taskRef: {
      id: i
    },
    arm: e.quietLifecycle ? void 0 : "ws",
    killTask: () => {
      if (!zdr(i, c)) return !1;
      return Ob(i, y, {
        quiet: !0
      }), !0
    }
  }), I = iE(S), _ = await ue(S, {
    proxy: I,
    tls: ck()
  }), W = Da(e.headers ?? {}, (m, a) => a.toLowerCase() === "host"), c = new K(_.url, C, {
    proxy: I,
    headers: {
      ...W,
      ..._.headers
    },
    tls: _.tls,
    maxPayload: B
  }), E = Date.now(), O, R = () => zdr(i, c), A = Date.now();
  c.on("open", () => {
    let m = y.all()[i];
    if (m && m.status === "running" && R()) try {
      e.onLifecycle?.("open", void 0, Date.now() - E)
    } catch {}
    let a = e.keepalive;
    if (a && m && m.status === "running" && R()) {
      for (let h of a.openFrames) try {
        c.send(h)
      } catch {}
      A = Date.now();
      let g = {
        lastAt: A
      };
      O = setInterval((h, w, b, ie, z, q) => {
        let j = Date.now();
        if (b !== void 0 && j - A > b) {
          try {
            h.terminate()
          } catch {}
          return
        }
        let J = z;
        try {
          J = ie?.() ?? z
        } catch {}
        if (!(b !== void 0 && j - A > b - z * 2) && j - q.lastAt < J - z / 2) return;
        q.lastAt = j;
        for (let ae of typeof w === "function" ? w() : w) try {
          h.send(ae)
        } catch {}
      }, a.intervalMs, c, typeof a.frame === "string" ? [a.frame] : a.frame, a.deadlineMs, a.sendEveryMs, a.intervalMs, g), O.unref?.()
    }
    if (e.onSender && m && m.status === "running" && R()) try {
      e.onSender(ge(c))
    } catch {}
  }), c.on("ping", () => {
    A = Date.now()
  }), c.on("message", (m, a) => {
    A = Date.now();
    let g = y.all()[i];
    if (!g || g.status !== "running" || !R()) return;
    let h = fe(m);
    if (h > B) {
      GV(r, `[Dropped ${h}-byte frame (exceeds ${B}); closing]`, i, {
        isHousekeeping: !0,
        agentId: k,
        turnAttribution: "none"
      }), Ob(i, y, {
        quiet: !0
      });
      return
    }
    if (a) {
      if (typeof e.transform === "function") return;
      D.onData(`[binary frame, ${h} bytes]
`);
      return
    }
    let w = m.toString("utf8");
    if (typeof e.transform === "function") {
      let b;
      try {
        b = e.transform(w)
      } catch {
        b = null
      }
      if (b === null) return;
      w = b
    }
    D.onData(w + `
`)
  });
  let L;
  c.on("unexpected-response", (m, a) => {
    let g = a?.statusCode ?? 0;
    if (g === 101) return;
    let h = a?.headers ?? {},
      w = h["cf-mitigated"] !== void 0;
    L = pe(g, w), t(`[callWs] upgrade rejected: status=${g} cf-mitigated=${String(h["cf-mitigated"])} cf-ray=${String(h["cf-ray"])}`), a?.resume?.();
    let b = y.all()[i];
    if (!e.quietLifecycle && b?.status === "running" && R()) GV(r, `[WebSocket upgrade rejected: HTTP ${g}]`, i, {
      isHousekeeping: !0,
      agentId: k,
      turnAttribution: "none"
    });
    try {
      c.terminate()
    } catch {}
  }), c.on("error", (m) => {
    clearInterval(O);
    try {
      e.onSenderClosed?.()
    } catch {}
    let a = y.all()[i];
    if (!a || a.status !== "running" || !R()) return;
    if (t(`[callWs] socket error: ${m.message}`), !e.quietLifecycle && L === void 0) GV(r, `[WebSocket error: ${m.message}]`, i, {
      isHousekeeping: !0,
      agentId: k,
      turnAttribution: "none"
    })
  }), c.on("close", (m, a) => {
    clearInterval(O), D.flushAndClose();
    try {
      e.onSenderClosed?.()
    } catch {}
    let g = y.all()[i];
    if (!g || g.status !== "running" || !R()) return;
    try {
      e.onLifecycle?.("close", L ?? String(m), Date.now() - E)
    } catch {}
    if (!e.quietLifecycle) {
      let h = a.length ? ` ${a.toString("utf8")}` : "";
      GV(r, `[WebSocket closed: ${m}${h}]`, i, {
        isHousekeeping: !0,
        agentId: k,
        turnAttribution: "none"
      })
    }
    Ob(i, y, {
      quiet: !0,
      connectionLost: !0
    })
  });
  let re = p ? void 0 : setTimeout((m, a, g, h, w, b) => {
      if (m.isClosed()) return;
      if (!b.quiet) {
        if (m.flush(), m.isClosed()) return;
        GV(a, jCr(b.timeoutMs, m.eventCount(), b.bounded), g, {
          isHousekeeping: !0,
          agentId: h
        })
      }
      Ob(g, w, {
        quiet: !0
      })
    }, d, D, r, i, k, y, {
      timeoutMs: d,
      bounded: e.bounded === !0,
      quiet: e.quietLifecycle
    }),
    se = {
      ...tb(i, "monitor_ws", r, N),
      type: "monitor_ws",
      status: "running",
      url: S,
      timeoutId: re,
      agentId: k,
      ...e.ambient && {
        ambient: !0
      },
      ...e.autoReactArmed && {
        autoReactArmed: !0
      },
      ...e.autoReactSlug && {
        autoReactSlug: e.autoReactSlug
      },
      ...e.frameLive && {
        frameLive: {
          ...e.frameLive,
          armedAt: Date.now()
        }
      }
    };
  if (y.register(se), vss(i, c), Q0(k, `monitor:${i}`, y), e.ambient) {
    let m = setTimeout((a, g, h, w, b) => {
      if (a.readyState === 0 && zdr(g, a)) {
        try {
          w.onLifecycle?.("close", TAn, Date.now() - b)
        } catch {}
        Ob(g, h, {
          quiet: !0,
          connectionLost: !0
        })
      }
    }, e.handshakeDeadlineMs ?? me, c, i, y, e, E);
    m.unref?.(), c.once("open", () => clearTimeout(m)), c.once("close", () => clearTimeout(m))
  }
  return {
    data: {
      taskId: i,
      timeoutMs: p ? 0 : d,
      persistent: p
    }
  }
}
import {
  isIP as he
} from "net";
var Y = "Shell command or script. Each stdout line is an event; exit ends the watch.",
  be = "command contains control characters that would be hidden in the approval dialog",
  X = () => o().refine(Qx, be),
  ye = () => u({
    url: o().refine(Qx, "url contains control characters that would be hidden in the approval dialog").refine((e) => {
      try {
        let n = new URL(e);
        return (n.protocol === "ws:" || n.protocol === "wss:") && !n.username && !n.password && !/[\t\n\r]/.test(e) && /^[\x00-\x7F]*$/.test(e)
      } catch {
        return !1
      }
    }, "url must be a valid ASCII ws:// or wss:// URL with no userinfo or whitespace"),
    protocols: T(o().regex(/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, "protocol must be an RFC 6455 token")).refine((e) => new Set(e).size === e.length, "protocols must be unique").optional()
  }).describe("WebSocket to open. Each text frame is an event; binary frames are reported as a placeholder line. Socket close ends the watch. Cannot be combined with command."),
  G = "Short human-readable description of what you are monitoring (shown in notifications).";

function Se() {
  return {
    description: o().describe(G),
    timeout_ms: v().min(1000).optional().default(V0t).describe(`Kill the monitor after this deadline. Default ${V0t}ms, max ${nnn}ms. Ignored when persistent is true.`),
    persistent: M().optional().default(!1).describe("Run for the lifetime of the session (no timeout). Use for session-length watches like PR monitoring or log tails. Stop with TaskStop.")
  }
}

function Z() {
  let e = l8e();
  return {
    description: o().describe(G),
    timeout_ms: v().min(1000).max(nnn, `timeout_ms must be \u2264 ${nnn}`).optional().default(V0t).describe(`Kill the monitor after this deadline. Default ${V0t}ms. Deadlines above ${e}ms are capped to ${e}ms. You are notified at expiry and can re-arm.`)
  }
}
var ke = {
  message: `timeout_ms must be \u2264 ${nnn}`,
  path: ["timeout_ms"]
};

function we(e) {
  return e.persistent || e.timeout_ms <= nnn
}

function Q(...e) {
  return F(e, Boolean) === 1
}

function Me() {
  return mSe() ? UAt() : {}
}
var ee = "allowed_domains applies only to a command monitor";

function te(e) {
  return e.command !== void 0 || $ue(e) === void 0
}

function Te(e) {
  let n = BAt(e);
  return n === void 0 ? e.command ?? "" : {
    command: e.command ?? "",
    ...n
  }
}
var oe = "exactly one of command or ws";

function ne() {
  return {
    command: X().optional().describe(Y),
    ...Me(),
    ws: ye().optional()
  }
}
var Ce = f(() => De({
    ...Se(),
    ...ne()
  }).refine((e) => Q(e.command, e.ws), oe).refine(te, ee).refine(we, ke)),
  Ie = f(() => u({
    ...Z(),
    ...ne()
  }).refine((e) => Q(e.command, e.ws), oe).refine(te, ee));

function _e() {
  return Nie() ? Ie() : Ce()
}
var Re = f(() => u({
  ...Z(),
  command: X().describe(Y)
}));

function Ee() {
  if (!de()) return;
  let e = nD(Re());
  return ve(e) ? e : void 0
}

function ve(e) {
  return e.type === "object"
}
var xe = f(() => u({
  taskId: o().describe("ID of the background monitor task."),
  timeoutMs: v().describe("Timeout deadline in milliseconds (0 when persistent)."),
  persistent: M().optional().describe("No timeout \u2014 runs until TaskStop or session end.")
}));

function Ae(e) {
  let n = mee(e);
  if (n !== void 0 && tU(n)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.")
}

function Oe(e, n) {
  return Dhr({
    ...e,
    command: e.command
  }, {
    ...n,
    permissionLayers: [...n.permissionLayers ?? [], {
      kind: "sandbox_auto_allow_suspended"
    }]
  })
}
async function Le(e, n, s, r, d) {
  let {
    description: p,
    timeout_ms: S,
    persistent: C
  } = n, {
    abortController: N,
    toolUseId: y,
    taskRegistry: k
  } = r, i = mee(r), P = {}, D = Cxn({
    description: p,
    agentId: i,
    taskRef: P,
    arm: "bash",
    killTask: () => {
      if (!P.id) return !1;
      return Sq(P.id, k), !0
    }
  }), I = await spe(e, N.signal, "bash", {
    session: r.session,
    owningAgentId: i,
    preventCwdChanges: !0,
    shouldUseSandbox: p_({
      command: e
    }),
    sandboxAttributionId: y,
    sandboxNetworkLists: WAt(y, e),
    attributionMessageId: d?.message.id,
    onStdout: D.onData,
    agentWorktree: r.agentWorktree,
    isolationRoot: SSe(r),
    sessionEnvVars: r.sessionEnvVars,
    storageV5: r.storageV5
  });
  if (I.status === "completed") {
    let c = await I.result;
    if (c.preSpawnError) {
      let E = new x(c.preSpawnError, "Monitor: pre-spawn error (cwd/argv redacted)");
      throw c.preSpawnErrorCode === "e2big" ? $D(E, {
        kind: "spawn_arg_limit"
      }) : E
    }
  }
  if (I.status === "killed") {
    if (await I.result, I.cleanup(), i !== void 0 && tU(i)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
    throw Error("This call was interrupted before the monitor started; nothing is running.")
  }
  let _ = await j$e({
    command: e,
    description: p,
    shellCommand: I,
    toolUseId: y,
    agentId: i,
    kind: "monitor"
  }, {
    abortController: N,
    taskRegistry: k
  });
  P.id = _.taskId, Q0(i, `monitor:${_.taskId}`, k);
  let W = C ? void 0 : setTimeout((c, E, O, R, A, L) => {
    if (c.isClosed()) return;
    if (c.flush(), c.isClosed()) return;
    GV(E, jCr(L.timeoutMs, c.eventCount(), L.bounded), O, {
      isHousekeeping: !0,
      agentId: R
    }), Sq(O, A)
  }, S, D, p, _.taskId, i, k, {
    timeoutMs: S,
    bounded: s
  });
  return I.result.then(async () => {
    if (W) clearTimeout(W);
    try {
      await D.reportExit(_)
    } catch (c) {
      l(c)
    } finally {
      aM(i, `monitor:${_.taskId}`, k)
    }
  }), {
    data: {
      taskId: _.taskId,
      timeoutMs: C ? 0 : S,
      persistent: C
    }
  }
}

function TYt(e) {
  let n = If("allow_web_fetch", "Arbitrary-URL egress", "is");
  if (n !== null) return {
    kind: "compliance",
    host: "",
    detail: n
  };
  let s = new URL(e),
    r = U(s.hostname);
  if (he(r) && wPt(r)) return {
    kind: "ssrf",
    host: r,
    detail: "the address is in a private, link-local, or cloud-metadata range"
  };
  let d = s.port !== "" ? Number(s.port) : s.protocol === "wss:" ? 443 : 80,
    p = Bko(r, d);
  if (!p.allowed) return {
    kind: "sandbox-policy",
    host: r,
    detail: p.reason
  };
  return null
}

function Pe(e) {
  let n = TYt(e.url);
  if (n !== null) return {
    behavior: "deny",
    message: n.kind === "compliance" ? `Monitor cannot open a WebSocket. ${n.detail}` : `Monitor cannot open a WebSocket to ${n.host}: ${n.detail}.`,
    decisionReason: {
      type: "other",
      reason: n.kind === "compliance" ? "organization policy disables model-chosen URL egress" : n.kind === "ssrf" ? "SSRF-blocked address range" : n.detail
    }
  };
  let s = e.protocols !== void 0 && e.protocols.length > 0 ? ` (subprotocols: ${CYt(e.protocols)})` : "";
  return {
    behavior: "ask",
    message: `Monitor will open a WebSocket to ${e.url}${s}`,
    suggestions: []
  }
}

function V(e, n) {
  return {
    get session() {
      return e.session
    },
    get storageV5() {
      return e.storageV5
    },
    get credentials() {
      return e.credentials
    },
    get agentId() {
      return e.agentId
    },
    get agentWorktree() {
      return e.agentWorktree
    },
    get taskRegistry() {
      return e.taskRegistry
    },
    get sessionEnvVars() {
      return e.sessionEnvVars
    },
    get shellPermission() {
      return {
        ...e.shellPermission,
        abortController: {
          signal: n.signal
        },
        toolUseId: n.toolUseId
      }
    },
    get mcpState() {
      return e.mcpState
    },
    get getMcp() {
      return e.mcpState
    },
    get toolUseId() {
      return n.toolUseId
    },
    get abortController() {
      return {
        signal: n.signal
      }
    }
  }
}
var $e = {
    name: Yi,
    enablesCodeExecution: !0,
    maxResultSizeChars: 1e4,
    shouldDefer: !0,
    userFacingName() {
      return "Monitor"
    },
    getToolUseSummary(e) {
      if (!e?.description) return null;
      return es(e.description, YC)
    },
    getActivityDescription(e) {
      return e?.description ? `Monitoring: ${e.description}` : "Monitoring"
    },
    isEnabled() {
      return e3() && Xl()
    },
    isConcurrencySafe() {
      return !0
    },
    renderToolUseMessage(e) {
      if (!e.description) return null;
      return e.description
    },
    get outputSchema() {
      return xe()
    },
    mapToolResultToToolResultBlockParam(e, n) {
      let s = e.persistent ? "persistent \u2014 runs until TaskStop or session end" : Nie() ? `expires in ${rn(e.timeoutMs,{hideTrailingZeros:!0})} unless the source ends first; you get one notice at expiry \u2014 re-arm if you still need the watch` : `timeout ${e.timeoutMs}ms`;
      return {
        tool_use_id: n,
        type: "tool_result",
        content: `Monitor started (task ${e.taskId}, ${s}). You will be notified on each event. Keep working \u2014 do not poll or sleep. Events may arrive while you are waiting for the user \u2014 an event is not their reply.`
      }
    }
  },
  Ne = Qt({
    ...$e,
    backgrounding: "never",
    searchHint: "watch, monitor, or keep an eye on a process/log/command or WebSocket \u2014 stream each stdout line as a live notification",
    async description() {
      return lvo() + (de() ? "" : dvo) + avo()
    },
    async prompt() {
      return lvo() + (de() ? "" : dvo) + avo()
    },
    get inputSchema() {
      return _e()
    },
    get inputJSONSchema() {
      return Ee()
    },
    toAutoClassifierInput(e) {
      return e.ws ? `websocket ${e.ws.url}${irs(e.ws)}` : Te(e)
    },
    sandboxNetworkLists(e) {
      return $ue(e)
    },
    create(e) {
      return {
        permissionCheckFailureDecision(n, s) {
          let r = V(e, s);
          return Mhr(Yi, r.shellPermission)
        },
        async validateInput(n) {
          if (n.command !== void 0) {
            let s = jAt(n, p_({
              command: n.command
            }));
            if (s !== void 0) return s
          }
          return {
            result: !0
          }
        },
        async checkPermissions(n, s) {
          let r = V(e, s);
          if (n.ws) {
            let d = lgs("Monitor websocket", r.shellPermission);
            if (d !== void 0) return d;
            return Pe(n.ws)
          }
          return Oe(n, r.shellPermission)
        },
        async call(n, s) {
          let r = V(e, s),
            {
              parentMessage: d
            } = s;
          Ae(r);
          let p = Nie(),
            S = zPs(n, p);
          if (n.ws) return EYt({
            ...n,
            ...S,
            bounded: p,
            ws: n.ws
          }, FTt(r));
          return Le(n.command, {
            ...n,
            ...S
          }, p, r, d)
        }
      }
    }
  }),
  qni = Ne;
export {
  Iot,
  Glr,
  TAn,
  WRe,
  FTt,
  EYt,
  TYt,
  qni
};
