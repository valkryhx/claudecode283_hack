// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  Gr,
  F
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  b
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  Ke,
  Ve,
  x,
  H,
  d,
  G
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  gn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  Es
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  Kl,
  XL,
  gU
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  hO,
  VRo,
  ysn,
  qft,
  oOr,
  QRo,
  PVn,
  OVn,
  IVn,
  pd
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  is
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  qC,
  BO,
  Kk
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Bs
} from "B:/~BUN/root/chunk-yw21pggd.js";
import {
  dr
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  e_t
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  vw
} from "B:/~BUN/root/chunk-dq7zfs8r.js";
import {
  AT
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  LY
} from "B:/~BUN/root/chunk-bz422xf8.js";
import {
  Jtr,
  T2t
} from "B:/~BUN/root/chunk-sx40pnv6.js";
import {
  q_e,
  slr,
  ilr,
  CNe
} from "B:/~BUN/root/chunk-ghxd5shf.js";
import {
  sbe,
  WYt
} from "B:/~BUN/root/chunk-79tg5w0m.js";
import {
  noe
} from "B:/~BUN/root/chunk-nbhvqx0k.js";
import {
  h1
} from "B:/~BUN/root/chunk-sajqdp4j.js";
import {
  B$
} from "B:/~BUN/root/chunk-a4ntc3g3.js";
import {
  NP
} from "B:/~BUN/root/chunk-mh8d9g35.js";
import {
  As
} from "B:/~BUN/root/chunk-xnas864x.js";
import {
  $me
} from "B:/~BUN/root/chunk-mbz8rhex.js";
import {
  _c,
  dR,
  si
} from "B:/~BUN/root/chunk-b0487zs4.js";
import {
  A4,
  LBo
} from "B:/~BUN/root/chunk-f43s8pq0.js";
import {
  o,
  u,
  U,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  hostname as gt
} from "os";
import {
  dirname as ht,
  join as St
} from "path";
var xe = 1e4,
  Ie = 3,
  He = 60000;
class M extends Error {
  unavailable;
  name = "PassthroughMcpUnavailableError";
  constructor(e, n, i) {
    super(n, i);
    this.unavailable = e
  }
}

function UKo(e) {
  let n = e.ops ?? je(),
    i = e.dialLatch ?? WYt(),
    c = Object.keys(e.configs),
    s = new Map,
    m = new Map,
    v = new WeakSet,
    P = Me(),
    y = Date.now(),
    g, T = !1,
    O = () => {},
    N = new Promise((r) => {
      O = r
    }),
    R, te = Date.now(),
    A = () => g !== void 0;

  function L() {
    if (T) return;
    if (T = !0, R !== void 0) clearTimeout(R), R = void 0;
    let r = [...m.values()],
      a = (p) => F(r, (h) => h === p);
    O({
      configured: c.length,
      connected: a("connected"),
      cached: a("cached"),
      failed: a("failed"),
      needsAuth: a("needs-auth"),
      disabled: a("disabled"),
      blocked: a("blocked"),
      excluded: a("excluded"),
      unreported: c.length - m.size,
      settleMs: Date.now() - y
    }), oe([...s].filter(([, p]) => p.handle.type === "cached").map(([p]) => p))
  }
  async function oe(r) {
    let a = async (S) => {
      z();
      let w = s.get(S);
      if (w && !A()) await ie(S, w).catch(() => {}), z()
    }, p = (S) => n.dialConcurrency(e.configs[S]), h = r.filter((S) => s.has(S));
    await Promise.all(AT(h, (S) => p(S).kind === "local").filter((S) => S.length > 0).map((S) => vw(S, a, {
      concurrency: p(S[0]).limit
    })))
  }

  function B() {
    try {
      P.emit()
    } catch (r) {
      l(r)
    }
  }

  function D(r, a) {
    let p = s.get(r);
    if (p) s.set(r, {
      ...p,
      ...a
    })
  }

  function Ae(r, a) {
    let p = s.get(r.name),
      h = le(r.name, a);
    if (s.set(r.name, {
        handle: r,
        tools: h,
        dialing: p?.dialing,
        listing: void 0,
        consecutiveDialFailures: 0,
        everConnected: p?.everConnected === !0 || r.type === "connected"
      }), r.type === "connected") {
      if (h.length === 0) D(r.name, {
        listing: V(r.name, r)
      });
      re(r.name, r)
    } else if (T) oe([r.name]);
    if (p !== void 0 || T) B()
  }

  function re(r, a) {
    let p = s.get(r);
    if (!p || A()) return;
    if (p.handle !== a) D(r, {
      handle: a,
      everConnected: !0
    }), D(r, {
      listing: V(r, a)
    }), B();
    if (!v.has(a) && a.capabilities?.tools?.listChanged) v.add(a), n.onToolListChanged(a, async () => {
      await V(r, a)
    })
  }

  function V(r, a) {
    let p = !1;
    return n.refreshTools(a, (h, S) => {
      if (s.get(r)?.handle === a && !A()) D(r, {
        tools: le(r, S),
        listing: void 0
      }), p = !0, B()
    }, e.storageV5).then(() => p, (h) => (t(`[deviceBridge] passthrough MCP tools refresh failed for ${r}: ${H(h).message}`), !1))
  }

  function k(r, a) {
    let p = s.get(r);
    if (!p || A()) return;
    s.delete(r), n.dispose(r, p.handle.config), n.cleanup([p.handle]), t(`[deviceBridge] passthrough MCP server ${r} left the pool (${a})`), B()
  }

  function z() {
    let r = Date.now();
    if (r - te >= He) te = r, n.refreshPolicy();
    for (let [a, p] of s)
      if (!n.allowedByPolicy(a, p.handle.config)) k(a, "denied by managed policy")
  }

  function ie(r, a) {
    if (a.dialing) return a.dialing;
    if (i.shouldSkip(r)) return Promise.reject(new M("server", "MCP server failed to connect recently; not retrying yet"));
    let p = n.ensureConnected(a.handle).then((h) => {
      if (se(r, p), i.recordSuccess(r), A() || !s.has(r)) throw n.cleanup([h]), new M("server", "MCP server is no longer offered by this machine");
      return D(r, {
        consecutiveDialFailures: 0
      }), re(r, h), h
    }, (h) => {
      if (se(r, p), K(h)) throw k(r, "needs authentication"), h;
      i.recordFailure(r);
      let S = s.get(r),
        w = (S?.consecutiveDialFailures ?? 0) + 1;
      if (D(r, {
          consecutiveDialFailures: w
        }), w >= Ie && S?.everConnected !== !0) k(r, "repeated dial failures");
      else if (s.has(r)) n.dispose(r, a.handle.config);
      throw h
    });
    return D(r, {
      dialing: p
    }), p
  }

  function se(r, a) {
    if (s.get(r)?.dialing === a) D(r, {
      dialing: void 0
    })
  }
  async function Ee(r, {
    signal: a,
    deadline: p
  }) {
    let h = s.get(r)?.listing;
    while (h !== void 0) {
      let S = await sbe(h, {
          signal: a,
          timeoutMs: Math.max(0, p - Date.now()),
          serverName: r,
          context: "device tool call"
        }).catch((E) => {
          if (Ve(E)) throw E;
          throw new M("server", "MCP server connected too late for this call", {
            cause: E
          })
        }),
        w = s.get(r);
      if (S || w?.listing === void 0) return;
      if (w.listing !== h) {
        h = w.listing;
        continue
      }
      if (w.handle.type === "connected") D(r, {
        listing: V(r, w.handle)
      });
      throw new M("server", "MCP server did not list its tools")
    }
  }
  async function Re(r, {
    signal: a,
    timeoutMs: p
  }) {
    let h = s.get(r);
    if (A() || !h) throw new M("server", "MCP server is not available on this machine");
    try {
      return await sbe(ie(r, h), {
        signal: a,
        timeoutMs: p,
        serverName: r,
        context: "device tool call"
      })
    } catch (S) {
      if (Ve(S) || S instanceof M) throw S;
      if (K(S)) throw de(S);
      throw t(`[deviceBridge] passthrough MCP dial failed for ${r}: ${H(S).message}`), new M("server", "MCP server could not be reached for this call", {
        cause: S
      })
    }
  }

  function ae(r, a) {
    z();
    let p = s.get(r);
    if (!p || A()) throw new M("server", "MCP server is not available on this machine");
    let h = p.tools.find((S) => Le(S) === a);
    if (!h) throw new M("tool", "MCP tool is not offered by this machine");
    if (h.mcpInfo?.effectiveMaxPermission === "blocked") throw new M("tool", "MCP tool is blocked on this machine by the organization")
  }
  async function De(r, a, {
    signal: p,
    deadline: h
  }) {
    ae(r, a);
    let S = await Re(r, {
      signal: p,
      timeoutMs: Math.max(0, h - Date.now())
    });
    if (await Ee(r, {
        signal: p,
        deadline: h
      }), ae(r, a), s.get(r)?.handle !== S) throw new M("server", "MCP server was reconnected during this call; retry");
    if (h - Date.now() <= 0) throw new M("server", "MCP server connected too late for this call");
    return S
  }
  async function Oe(r, a, p, {
    signal: h,
    deadline: S,
    imageLimits: w
  }) {
    let E = As(h, {
        timeoutMs: Math.max(0, S - Date.now()),
        refTimer: !0
      }),
      q = (j) => h.aborted ? new Ke(`MCP tool call on '${r}' aborted`) : E.signal.aborted ? new x(`MCP server "${r}" did not answer the call within its deadline`, "MCP passthrough call deadline") : j;
    try {
      let j = await n.callTool(a, p, {
        signal: E.signal,
        imageLimits: w
      }).catch((X) => {
        throw q(X)
      });
      if (j.isError) throw "urlElicitationDeclined" in j ? new M("tool", "MCP tool needs a consent step in a browser on this machine, which a served call cannot show") : q(new x("MCP tool call on this machine ended without a result", "MCP passthrough call ended without a result"));
      return j
    } finally {
      E.cleanup()
    }
  }

  function Ne(r, a) {
    if (!K(a)) return a;
    return k(r, "needs authentication"), de(a)
  }

  function ke({
    client: r,
    tools: a
  }) {
    if (A() || m.get(r.name) === "dropped") {
      n.cleanup([r]);
      return
    }
    if (!Object.hasOwn(e.configs, r.name)) return;
    switch (r.type) {
      case "connected":
      case "cached":
        m.set(r.name, r.type), Ae(r, a);
        break;
      case "failed":
        m.set(r.name, r.type), k(r.name, "failed");
        break;
      case "needs-auth":
        m.set(r.name, r.type), k(r.name, "needs authentication");
        break;
      case "disabled":
        m.set(r.name, r.type), k(r.name, "disabled");
        break;
      case "pending":
        break;
      default:
    }
    if (m.size >= c.length) L()
  }
  n.policySettled().then(() => {
    if (A()) return;
    R = setTimeout(L, e.settleTimeoutMs ?? xe);
    let r = Bs(e.configs, (a, p) => {
      if (m.get(p) === "dropped") return !1;
      if (n.needsLocalPrompts(a)) return m.set(p, "excluded"), !1;
      let h = n.allowedByPolicy(p, a);
      if (!h) m.set(p, "blocked");
      return h
    });
    return n.discover(ke, r, e.storageV5)
  }).catch((r) => {
    t(`[deviceBridge] passthrough MCP discovery failed: ${H(r).message}`)
  }).finally(() => {
    L(), ce((r) => A() || m.get(r) === "dropped")
  });

  function ce(r = () => !0) {
    for (let a of c.filter(r)) n.dispose(a, e.configs[a])
  }
  return {
    settled: N,
    servers() {
      return z(), c.flatMap((r) => {
        let a = s.get(r);
        return a ? [{
          name: r,
          scope: a.handle.config.scope,
          tools: a.tools,
          status: a.handle.type
        }] : []
      })
    },
    subscribe: P.subscribe,
    async callTool(r, a, {
      signal: p,
      timeout: h,
      imageLimits: S
    }) {
      let w = Date.now() + h,
        E = async (q) => {
          let j = await De(r, a.name, {
            signal: p,
            deadline: w
          });
          try {
            return await Oe(r, j, a, {
              signal: p,
              deadline: w,
              imageLimits: S
            })
          } catch (X) {
            if (q && X instanceof BO) return E(!1);
            throw Ne(r, X)
          }
        };
      return E(!0)
    },
    toolTimeoutMs: (r) => n.toolTimeoutMs(e.configs[r]),
    dropServer(r) {
      if (A() || !Object.hasOwn(e.configs, r)) return;
      if (m.set(r, "dropped"), s.has(r)) k(r, "dropped by the caller");
      else n.dispose(r, e.configs[r]);
      if (m.size >= c.length) L()
    },
    stop() {
      return g ??= (async () => {
        if (R !== void 0) clearTimeout(R), R = void 0;
        P.clear();
        let r = [...s.values()].map((a) => a.handle);
        s.clear(), L(), ce(), await n.cleanup(r)
      })(), g
    }
  }
}

function je() {
  let e = import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule();
  return {
    policySettled: () => Promise.all([NP(), e_t()]).then(() => {
      return
    }),
    discover: (n, i, c) => e.getMcpToolsCommandsAndResources(n, i, c),
    ensureConnected: (n) => e.ensureConnectedClient(n),
    onToolListChanged: (n, i) => e.onMcpToolListChanged(n, i),
    refreshTools: noe,
    callTool: (n, i, {
      signal: c,
      imageLimits: s
    }) => e.callMCPTool({
      client: n,
      tool: i.name,
      args: i.arguments ?? {},
      meta: i._meta,
      signal: c,
      imageLimits: s,
      hasResultSizeAnnotation: !0,
      storageV5: void 0,
      credentials: void 0
    }),
    cleanup: (n) => e.cleanupConnectedMcpClients(n),
    dispose: (n, i) => e.disposeServerConnectionDetached(n, i),
    refreshPolicy: dr,
    allowedByPolicy: gU,
    needsLocalPrompts: (n) => e.isFirstPartyDesignServerConfig(n),
    dialConcurrency: (n) => e.isLocalMcpServer(n) ? {
      kind: "local",
      limit: e.getMcpServerConnectionBatchSize()
    } : {
      kind: "remote",
      limit: e.getRemoteMcpServerConnectionBatchSize()
    },
    toolTimeoutMs: (n) => e.getMcpToolTimeoutMs(n)
  }
}

function Le(e) {
  return e.mcpInfo?.toolName ?? e.name
}

function K(e) {
  return e instanceof qC || e !== null && typeof e === "object" && "mcpErrorSource" in e && e.mcpErrorSource === "user_auth"
}

function de(e) {
  return new M("server", "MCP server needs authentication on this machine", {
    cause: e
  })
}

function le(e, n) {
  return n.filter((i) => i.mcpInfo !== void 0 && _c(i, e))
}
var me = VRo,
  Y = ysn;
class I extends x {
  verdict;
  constructor(e, n, i) {
    super(n, i, e.code);
    this.verdict = e;
    this.name = "PassthroughCallError"
  }
}

function BKo(e, n) {
  return e?.onToolVerdict?.({
    kind: "refused",
    code: "not_served"
  }, n.message), {
    result: !1,
    message: n.message,
    errorCode: 1
  }
}

function jKo(e, n, i) {
  let c = new I({
    kind: "refused",
    code: "not_served"
  }, n, i);
  throw e?.onToolVerdict?.(c.verdict, c.message), c
}

function WKo(e, n, i, c) {
  let s = new Set(c.values()),
    m = Y.filter((v) => !s.has(v));
  return async (v, P) => {
    if (P.remoteCall === void 0) throw new I({
      kind: "refused",
      code: "invalid_request"
    }, ue, ue);
    let y = e.toolTimeoutMs(n),
      {
        onToolVerdict: g
      } = P.remoteCall,
      T = await e.callTool(n, {
        name: i,
        arguments: is(v, m)
      }, {
        signal: P.abortController.signal,
        timeout: y,
        imageLimits: {
          ...Kl(P.options.mainLoopModel),
          allowWebp: !1
        }
      }).catch((O) => {
        let N = Fe(O, n);
        if (N instanceof I) g?.(N.verdict, N.message);
        throw N
      });
    return {
      data: T.content,
      ...(T._meta || T.structuredContent) && {
        mcpMeta: {
          ...T._meta && {
            _meta: B$(T._meta)
          },
          ...T.structuredContent && {
            structuredContent: T.structuredContent
          }
        }
      }
    }
  }
}
var ue = "MCP passthrough tools run only for a remote tool call; the call did not run";

function Fe(e, n) {
  if (Ve(e) || e instanceof I) return e;
  if (e instanceof Kk) return new Kk(`MCP server "${n}" on this machine returned an error for the call (it reached the server and may have had effects): ${e.message}`, "MCP passthrough tool returned an error", e.mcpMeta);
  if (Ue(e)) return new I({
    kind: "refused",
    code: "not_served"
  }, `MCP server "${n}" on this machine needs a consent step in a browser there before this tool can run; the call did not run`, "MCP passthrough call needs URL consent on this machine");
  if (e instanceof M) return new I({
    kind: "refused",
    code: "not_served"
  }, `MCP server "${n}" on this machine: ${e.message}; the call did not run`, e.message);
  return t(`[deviceBridge] passthrough MCP call on ${n} failed: ${H(e).message}`), new I({
    kind: "failed",
    code: "tool_error"
  }, `MCP server "${n}" on this machine gave no usable result for the call (timeout, lost connection, or a protocol-level error); it may have run and had effects`, "MCP tool call failed on this machine")
}
var $e = -32042;

function Ue(e) {
  return e !== null && typeof e === "object" && "code" in e && e.code === $e
}
var Ge = QRo;
var We = PVn - 262144,
  ze = oOr,
  qe = 65536,
  Xe = 256,
  Ye = 512,
  Je = {
    enterprise: 0,
    managed: 1,
    local: 2,
    user: 3,
    dynamic: 4,
    project: 5,
    claudeai: 6,
    agent: 7
  },
  he = new Set(["enterprise", "managed"]);
async function zKo(e, n) {
  let i = Se(e),
    c = await Promise.all(i.map((y) => Promise.all(y.tools.map((g) => nt(y.name, g, n.target))))),
    s = Qe(i, c, n.configured),
    {
      tools: m,
      dropped: v,
      byServer: P
    } = i.reduce((y, g, T) => {
      let O = Te(g.scope) ? {
        reason: "enterprise_scope"
      } : s.server(g);
      return (c[T] ?? []).reduce((N, R) => Ze(N, R, O, s, n), y)
    }, {
      announced: new Set,
      bytes: 0,
      tools: [],
      dropped: [],
      byServer: new Map
    });
  return {
    tools: m,
    dropped: v,
    byServer: P
  }
}

function Qe(e, n, i) {
  let c = Se([...e, ...i.filter((g) => !e.some((T) => T.name === g.name))]),
    s = new Set(c.filter((g) => he.has(g.scope)).map((g) => g.name)),
    m = [...s].map((g) => `${A4(dR(g))}_`),
    v = (g, T) => !s.has(g) && m.some((O) => `${T}_`.startsWith(O)),
    P = fe(c.map((g) => [A4(dR(g.name)), {
      server: g.name,
      admin: s.has(g.name)
    }])),
    y = fe(n.flat().map((g) => [A4(g.name), {
      server: g.server,
      admin: s.has(g.server),
      rawName: g.rawName
    }]));
  return {
    server: (g) => LBo(g.name) || v(g.name, A4(dR(g.name))) ? {
      reason: "collision"
    } : pe(P.get(A4(dR(g.name))) ?? [], g.name, (T) => T.server === g.name),
    tool: (g) => ilr(g.name) ? {
      reason: "service_reserved"
    } : !CNe(g.name) || LBo(g.name) || v(g.server, A4(g.name)) ? {
      reason: "collision"
    } : pe(y.get(A4(g.name)) ?? [], g.server, (T) => T.server === g.server && T.rawName === g.rawName)
  }
}

function pe(e, n, i) {
  let c = e.find((s) => s.admin) ?? (e.length === 1 ? e[0] : void 0);
  if (c === void 0) return {
    reason: "alias_collision",
    contenders: e.map((s) => s.server).filter((s) => s !== n)
  };
  return i(c) ? void 0 : {
    reason: "collision"
  }
}

function fe(e) {
  return e.reduce((n, [i, c]) => {
    let s = n.get(i) ?? [];
    if (!s.some((m) => m.server === c.server)) n.set(i, [...s, c]);
    return n
  }, new Map)
}

function Ze(e, n, i, c, {
  isDenied: s,
  serve: m
}) {
  let v = i ?? c.tool(n) ?? (n.tool.mcpInfo?.effectiveMaxPermission === "blocked" ? {
    reason: "permission_ceiling"
  } : s(n.tool) ? {
    reason: "deny_rule"
  } : et(n, e));
  if ("reason" in v) return e.dropped.push({
    server: n.server,
    tool: n.rawName,
    ...v
  }), e;
  e.announced.add(n.name), e.bytes += v.bytes, e.tools.push(m({
    ...n,
    definition: v.definition,
    wireArguments: v.wireArguments
  }));
  let P = e.byServer.get(n.server);
  if (P === void 0) P = [], e.byServer.set(n.server, P);
  return P.push(v.definition), e
}

function et({
  name: e,
  definition: n,
  wireArguments: i
}, {
  announced: c,
  bytes: s
}) {
  if (i === "reserved_argument") return {
    reason: "reserved_argument"
  };
  if (e.length > Ge) return {
    reason: "name_length"
  };
  if (c.has(e)) return {
    reason: "collision"
  };
  if (n === void 0) return {
    reason: "definition_error"
  };
  let m = Buffer.byteLength(_(n));
  if (m > qe) return {
    reason: "definition_size"
  };
  if (!qft(n.inputSchema, IVn)) return {
    reason: "schema_depth"
  };
  if (s + m > We) return {
    reason: "announce_budget"
  };
  if (c.size >= ze) return {
    reason: "announce_count"
  };
  return {
    definition: n,
    bytes: m,
    wireArguments: i
  }
}

function Se(e) {
  return e.map((n, i) => ({
    server: n,
    index: i,
    rank: tt(n.scope)
  })).sort((n, i) => n.rank - i.rank || n.index - i.index).map((n) => n.server)
}

function tt(e) {
  return Je[e] ?? Number.MAX_SAFE_INTEGER
}
async function nt(e, n, i) {
  let c = n.mcpInfo?.toolName ?? n.name,
    s = ot(e, c),
    m = st(n.inputJSONSchema),
    v = m === "reserved_argument" ? T2t() : m;
  try {
    return {
      server: e,
      rawName: c,
      name: s,
      tool: n,
      definition: await ct(s, n, i, v),
      wireArguments: m
    }
  } catch (P) {
    return t(`[deviceBridge] passthrough cannot describe '${s}': ${H(P).message}`, {
      level: "error"
    }), {
      server: e,
      rawName: c,
      name: s,
      tool: n,
      definition: void 0,
      wireArguments: m
    }
  }
}

function ot(e, n) {
  return si(e, n).slice(5)
}

function ge(e) {
  return `${e}_arg`
}
var rt = new Set(["$schema", "$comment", "type", "title", "description", "properties", "required", "additionalProperties", "unevaluatedProperties", "$defs", "definitions", "default", "examples", "minProperties", "maxProperties"]),
  it = new Set(["$ref", "$dynamicRef", "$recursiveRef", "$anchor", "$dynamicAnchor", "$recursiveAnchor", "$id"]);

function st(e) {
  let n = e?.properties,
    i = e?.required,
    c = new Set([...typeof n === "object" && n !== null ? Object.keys(n) : [], ...Array.isArray(i) ? i.filter((y) => typeof y === "string") : []]),
    s = Y,
    m = me;
  if (m.some((y) => c.has(ge(y)))) return "reserved_argument";
  let v = s.filter((y) => c.has(y));
  if (v.length === 0) return T2t();
  if (v.some((y) => !m.includes(y)) || e === void 0 || !ye(e.type) || Object.keys(e).some((y) => !rt.has(y)) || at(e) || v.some((y) => typeof n === "object" && n !== null && Object.hasOwn(n, y) && !Ce(Reflect.get(n, y)))) return "reserved_argument";
  let P = new Map(v.map((y) => [ge(y), y]));
  return [...P.keys()].some((y) => s.includes(y)) ? "reserved_argument" : P
}

function at(e) {
  let n = (i, c) => {
    if (c > IVn) return !0;
    if (Array.isArray(i)) return i.some((s) => n(s, c + 1));
    if (typeof i !== "object" || i === null) return !1;
    return Object.entries(i).some(([s, m]) => it.has(s) || n(m, c + 1))
  };
  return n(e, 0)
}
async function ct(e, n, i, c) {
  let s = await n.description({}, {
      isNonInteractiveSession: !1,
      toolPermissionContext: pd(),
      tools: []
    }),
    m = pt(n),
    v = XL();
  return {
    name: e,
    description: s.length <= Math.min(v, OVn) ? s : Q(s, Math.min(v, OVn - ve.length)),
    inputSchema: dt(n, c),
    ...m && {
      annotations: m
    },
    _meta: ft(n, i)
  }
}
var ve = "\u2026 [truncated]";

function Q(e, n) {
  return e.length > n ? ne(e, n) + ve : e
}

function dt(e, n) {
  let i = e.inputJSONSchema;
  if (i === void 0 || !ye(i.type)) return {
    type: "object",
    properties: {}
  };
  let c = typeof i.properties === "object" && i.properties !== null && !Array.isArray(i.properties) ? mt(i.properties) : {};
  return lt({
    ...i,
    type: "object",
    properties: c
  }, n)
}

function lt(e, n) {
  if (n.size === 0) return e;
  let i = new Map([...n].map(([m, v]) => [v, m])),
    c = Gr(hO(e.properties, (m, v) => i.get(v) ?? v), (m, v) => {
      let P = n.get(v);
      return P === void 0 ? m : {
        ...m,
        description: ut(P, m)
      }
    }),
    s = Array.isArray(e.required) ? e.required.map((m) => i.get(m) ?? m) : void 0;
  return {
    ...e,
    properties: c,
    ...s && {
      required: s
    }
  }
}

function ut(e, n) {
  let i = Reflect.get(n, "description"),
    c = `(The tool's own "${e}" parameter, passed under this name.)`;
  return typeof i === "string" && i !== "" ? `${i} ${c}` : c
}

function ye(e) {
  return e === void 0 || e === "object" || Array.isArray(e) && e.includes("object")
}

function mt(e) {
  return Object.fromEntries(Object.entries(e).flatMap(([n, i]) => Ce(i) ? [
    [n, i === !0 ? {} : i]
  ] : []))
}

function Ce(e) {
  return e === !0 || typeof e === "object" && e !== null && !Array.isArray(e)
}

function pt(e) {
  let n = e.mcpInfo?.title,
    i = {
      ...n !== void 0 && {
        title: Q(n, Xe)
      },
      ...e.readOnlyHint !== void 0 && {
        readOnlyHint: e.readOnlyHint
      },
      ...e.isDestructive?.({}) === !0 && {
        destructiveHint: !0
      },
      ...e.isOpenWorld?.({}) === !0 && {
        openWorldHint: !0
      }
    };
  return Object.keys(i).length > 0 ? i : void 0
}

function ft(e, n) {
  let {
    inventory: i,
    ...c
  } = n, s = {
    v: slr,
    tool: e.name,
    target: c
  };
  return {
    [q_e]: s,
    ...e.searchHint !== void 0 && {
      [h1.searchHint]: Q(e.searchHint, Ye)
    },
    ...e.alwaysLoad === !0 && {
      [h1.alwaysLoad]: !0
    },
    ...e.persistenceThresholdCeiling !== void 0 && {
      [h1.maxResultSizeChars]: e.maxResultSizeChars
    },
    ...e.requiresUserInteraction?.() === !0 && {
      [h1.requiresUserInteraction]: !0
    }
  }
}
var GKo = b("mcp_passthrough");

function Te(e) {
  return he.has(e)
}
var Z = !1;

function VKo(e) {
  return !Te(e) && (Z || e !== "project")
}
var _e = 1;

function we() {
  return [Jtr ? "each-call-asked" : "local-rules-decide", Z ? "project-servers" : "no-project-servers"].join("+")
}
var vt = f(() => u({
    version: C(_e),
    choice: U(["accepted", "declined"]),
    terms: o(),
    decidedAt: o(),
    hostname: o()
  })),
  be = "device-mcp-consent";

function pyn() {
  return `delete ${Es(ee())} to be asked again`
}

function ee() {
  return St(Pe(), "state", `${be}.json`)
}
async function HWt(e) {
  let n;
  try {
    n = await e.readText()
  } catch (i) {
    return t(`device-mcp consent: store unreadable (${d(i)})`, {
      level: "warn"
    }), "unreadable"
  }
  if (n === void 0) return "unset";
  try {
    let i = vt().safeParse(J(n));
    return i.success && LY(i.data.hostname) === LY(e.hostname()) && (i.data.choice === "declined" || i.data.terms === we()) ? i.data.choice : "unset"
  } catch {
    return "unset"
  }
}
async function qKo(e) {
  let n = await HWt(e);
  return n === "unreadable" ? "unset" : n
}
async function fyn(e, n) {
  try {
    return await n.writeText(_({
      version: _e,
      choice: e,
      terms: we(),
      decidedAt: n.now().toISOString(),
      hostname: LY(n.hostname())
    }, null, 2) + `
`), !0
  } catch (i) {
    return t(`device-mcp consent: answer not saved (${d(i)})`, {
      level: "warn"
    }), !1
  }
}

function Rye(e) {
  let n = W() && e !== void 0 ? e : void 0,
    i = Be.state(be);
  return {
    readText: async () => {
      if (n) {
        let c = await n.readText([i]);
        if (!c.ok) throw Error("device-mcp consent read failed");
        let s = c.value.items[0];
        return s.found ? s.value : void 0
      }
      try {
        return await gn().read(ee())
      } catch (c) {
        if (G(c)) return;
        throw c
      }
    },
    writeText: async (c) => {
      if (n) {
        if (!(await n.write(i, c, {
            mode: 384
          })).ok) throw Error("device-mcp consent write failed");
        return
      }
      let s = ee();
      await gn().mkdir(ht(s), 448), await gn().atomicWrite(s, c, 384)
    },
    now: () => new Date,
    hostname: gt
  }
}

function nY(e) {
  return $me(e)
}
export {
  UKo,
  BKo,
  jKo,
  WKo,
  zKo,
  GKo,
  VKo,
  pyn,
  HWt,
  qKo,
  fyn,
  Rye,
  nY
};
