// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { We, Ke, P, te, l, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Se } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { io } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { mse, PEt } from "B:/~BUN/root/chunk-zbm36w2e.js";
import { Ss as refreshPolicy } from "B:/~BUN/root/chunk-290k5gh5.js";
import { TI, L0, CI } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { ss } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { xa } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Qt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { O5e } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { QU, zW as allowedByPolicy } from "B:/~BUN/root/chunk-3jyp964r.js";
import { iee, VCr, KIt, BKe, yBn, QCr, Orn, Mrn, Drn, Cl } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { np } from "B:/~BUN/root/chunk-msy8grqx.js";
import { Ste } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { tb } from "B:/~BUN/root/chunk-846bv8b5.js";
import { NT } from "B:/~BUN/root/chunk-y39emrp9.js";
import { Uue as refreshTools } from "B:/~BUN/root/chunk-x3g0tez1.js";
import { koe, MTn as v_2, DTn, CSe } from "B:/~BUN/root/chunk-k7mv1tkq.js";
import { iL } from "B:/~BUN/root/chunk-myd8edm1.js";
import { aW } from "B:/~BUN/root/chunk-b8z99tfd.js";
import { Tkn, Y_t } from "B:/~BUN/root/chunk-j92898s3.js";
import { jH } from "B:/~BUN/root/chunk-0sj8manb.js";
import { Ao } from "B:/~BUN/root/chunk-9sajt7dp.js";
import { Z1, Fjr } from "B:/~BUN/root/chunk-z24e0xw2.js";
import { xc, x8e, Ia } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { o, u, z, A } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
var Ie = 1e4,
  He = 3,
  je = 60000;
class _ extends Error {
  unavailable;
  name = "PassthroughMcpUnavailableError";
  constructor(e, n, i) {
    super(n, i);
    this.unavailable = e;
  }
}
function F4r(e) {
  let n = e.ops ?? Le(),
    i = e.dialLatch ?? PEt(),
    c = Object.keys(e.configs),
    s = new Map(),
    p = new Map(),
    weakSet = new WeakSet(),
    T = Me(),
    C = Date.now(),
    g,
    M = !1,
    N = () => {},
    k = new Promise(r => {
      N = r;
    }),
    D,
    ee = Date.now(),
    E = () => g !== void 0;
  function L() {
    if (M) return;
    if (M = !0, D !== void 0) clearTimeout(D), D = void 0;
    let r = [...p.values()],
      a = m => U(r, h => h === m);
    N({
      configured: c.length,
      connected: a("connected"),
      cached: a("cached"),
      failed: a("failed"),
      needsAuth: a("needs-auth"),
      disabled: a("disabled"),
      blocked: a("blocked"),
      excluded: a("excluded"),
      unreported: c.length - p.size,
      settleMs: Date.now() - C
    }), ne([...s].filter(([, m]) => m.handle.type === "cached").map(([m]) => m));
  }
  async function ne(r) {
    let a = async S => {
        G();
        let w = s.get(S);
        if (w && !E()) await ie(S, w).catch(() => {}), G();
      },
      m = S => n.dialConcurrency(e.configs[S]),
      h = r.filter(item => s.has(item));
    await Promise.all(NT(h, S => m(S).kind === "local").filter(item => item.length > 0).map(item => tb(item, a, {
      concurrency: m(item[0]).limit
    })));
  }
  function F() {
    try {
      T.emit();
    } catch (error) {
      d(error);
    }
  }
  function O(r, a) {
    let m = s.get(r);
    if (m) s.set(r, {
      ...m,
      ...a
    });
  }
  function Ee(handle, a) {
    let m = s.get(handle.name),
      tools = le(handle.name, a);
    if (s.set(handle.name, {
      handle: handle,
      tools: tools,
      dialing: m?.dialing,
      listing: void 0,
      consecutiveDialFailures: 0,
      everConnected: m?.everConnected === !0 || handle.type === "connected"
    }), handle.type === "connected") {
      if (tools.length === 0) O(handle.name, {
        listing: V(handle.name, handle)
      });
      oe(handle.name, handle);
    } else if (M) ne([handle.name]);
    if (m !== void 0 || M) F();
  }
  function oe(r, handle_2) {
    let m = s.get(r);
    if (!m || E()) return;
    if (m.handle !== handle_2) O(r, {
      handle: handle_2,
      everConnected: !0
    }), O(r, {
      listing: V(r, handle_2)
    }), F();
    if (!weakSet.has(handle_2) && handle_2.capabilities?.tools?.listChanged) weakSet.add(handle_2), n.onToolListChanged(handle_2, async () => {
      await V(r, handle_2);
    });
  }
  function V(r, a) {
    let m = !1;
    return n.refreshTools(a, (h, S) => {
      if (s.get(r)?.handle === a && !E()) O(r, {
        tools: le(r, S),
        listing: void 0
      }), m = !0, F();
    }, e.storageV5).then(() => m, h => (t(`[deviceBridge] passthrough MCP tools refresh failed for ${r}: ${te(h).message}`), !1));
  }
  function I(r, a) {
    let m = s.get(r);
    if (!m || E()) return;
    s.delete(r), n.dispose(r, m.handle.config), n.cleanup([m.handle]), t(`[deviceBridge] passthrough MCP server ${r} left the pool (${a})`), F();
  }
  function G() {
    let r = Date.now();
    if (r - ee >= je) ee = r, n.refreshPolicy();
    for (let [a, m] of s) if (!n.allowedByPolicy(a, m.handle.config)) I(a, "denied by managed policy");
  }
  function ie(r, a) {
    if (a.dialing) return a.dialing;
    if (i.shouldSkip(r)) return Promise.reject(new _("server", "MCP server failed to connect recently; not retrying yet"));
    let dialing = n.ensureConnected(a.handle).then(h => {
      if (se(r, dialing), i.recordSuccess(r), E() || !s.has(r)) throw n.cleanup([h]), new _("server", "MCP server is no longer offered by this machine");
      return O(r, {
        consecutiveDialFailures: 0
      }), oe(r, h), h;
    }, h => {
      if (se(r, dialing), X(h)) throw I(r, "needs authentication"), h;
      i.recordFailure(r);
      let S = s.get(r),
        consecutiveDialFailures = (S?.consecutiveDialFailures ?? 0) + 1;
      if (O(r, {
        consecutiveDialFailures: consecutiveDialFailures
      }), consecutiveDialFailures >= He && S?.everConnected !== !0) I(r, "repeated dial failures");else if (s.has(r)) n.dispose(r, a.handle.config);
      throw h;
    });
    return O(r, {
      dialing: dialing
    }), dialing;
  }
  function se(r, a) {
    if (s.get(r)?.dialing === a) O(r, {
      dialing: void 0
    });
  }
  async function Re(serverName, {
    signal: signal,
    deadline: deadline
  }) {
    let h = s.get(serverName)?.listing;
    while (h !== void 0) {
      let S = await mse(h, {
          signal: signal,
          timeoutMs: Math.max(0, deadline - Date.now()),
          serverName: serverName,
          context: "device tool call"
        }).catch(cause => {
          if (Ke(cause)) throw cause;
          throw new _("server", "MCP server connected too late for this call", {
            cause: cause
          });
        }),
        w = s.get(serverName);
      if (S || w?.listing === void 0) return;
      if (w.listing !== h) {
        h = w.listing;
        continue;
      }
      if (w.handle.type === "connected") O(serverName, {
        listing: V(serverName, w.handle)
      });
      throw new _("server", "MCP server did not list its tools");
    }
  }
  async function De(serverName_2, {
    signal: signal_2,
    timeoutMs: timeoutMs
  }) {
    let h = s.get(serverName_2);
    if (E() || !h) throw new _("server", "MCP server is not available on this machine");
    try {
      return await mse(ie(serverName_2, h), {
        signal: signal_2,
        timeoutMs: timeoutMs,
        serverName: serverName_2,
        context: "device tool call"
      });
    } catch (S) {
      if (Ke(S) || S instanceof _) throw S;
      if (X(S)) throw de(S);
      throw t(`[deviceBridge] passthrough MCP dial failed for ${serverName_2}: ${te(S).message}`), new _("server", "MCP server could not be reached for this call", {
        cause: S
      });
    }
  }
  function ae(r, a) {
    G();
    let m = s.get(r);
    if (!m || E()) throw new _("server", "MCP server is not available on this machine");
    let h = m.tools.find(item => Fe(item) === a);
    if (!h) throw new _("tool", "MCP tool is not offered by this machine");
    if (h.mcpInfo?.effectiveMaxPermission === "blocked") throw new _("tool", "MCP tool is blocked on this machine by the organization");
  }
  async function Oe(r, a, {
    signal: signal_3,
    deadline: deadline_2
  }) {
    ae(r, a);
    let S = await De(r, {
      signal: signal_3,
      timeoutMs: Math.max(0, deadline_2 - Date.now())
    });
    if (await Re(r, {
      signal: signal_3,
      deadline: deadline_2
    }), ae(r, a), s.get(r)?.handle !== S) throw new _("server", "MCP server was reconnected during this call; retry");
    if (deadline_2 - Date.now() <= 0) throw new _("server", "MCP server connected too late for this call");
    return S;
  }
  async function Ne(r, a, m, {
    signal: signal_4,
    deadline: deadline_3,
    imageLimits: imageLimits
  }) {
    let R = Ao(signal_4, {
        timeoutMs: Math.max(0, deadline_3 - Date.now()),
        refTimer: !0
      }),
      W = j => signal_4.aborted ? new We(`MCP tool call on '${r}' aborted`) : R.signal.aborted ? new P(`MCP server "${r}" did not answer the call within its deadline`, "MCP passthrough call deadline") : j;
    try {
      let j = await n.callTool(a, m, {
        signal: R.signal,
        imageLimits: imageLimits
      }).catch(q => {
        throw W(q);
      });
      if (j.isError) throw "urlElicitationDeclined" in j ? new _("tool", "MCP tool needs a consent step in a browser on this machine, which a served call cannot show") : W(new P("MCP tool call on this machine ended without a result", "MCP passthrough call ended without a result"));
      return j;
    } finally {
      R.cleanup();
    }
  }
  function ke(r, a) {
    if (!X(a)) return a;
    return I(r, "needs authentication"), de(a);
  }
  function xe({
    client: client,
    tools: tools_2
  }) {
    if (E()) {
      n.cleanup([client]);
      return;
    }
    if (!Object.hasOwn(e.configs, client.name)) return;
    switch (client.type) {
      case "connected":
      case "cached":
        p.set(client.name, client.type), Ee(client, tools_2);
        break;
      case "failed":
        p.set(client.name, client.type), I(client.name, "failed");
        break;
      case "needs-auth":
        p.set(client.name, client.type), I(client.name, "needs authentication");
        break;
      case "disabled":
        p.set(client.name, client.type), I(client.name, "disabled");
        break;
      case "pending":
        break;
      default:
    }
    if (p.size >= c.length) L();
  }
  n.policySettled().then(() => {
    if (E()) return;
    D = setTimeout(L, e.settleTimeoutMs ?? Ie);
    let r = Qr(e.configs, (a, m) => {
      if (n.needsLocalPrompts(a)) return p.set(m, "excluded"), !1;
      let h = n.allowedByPolicy(m, a);
      if (!h) p.set(m, "blocked");
      return h;
    });
    return n.discover(xe, r, e.storageV5);
  }).catch(r => {
    t(`[deviceBridge] passthrough MCP discovery failed: ${te(r).message}`);
  }).finally(() => {
    if (L(), E()) ce();
  });
  function ce() {
    for (let r of c) n.dispose(r, e.configs[r]);
  }
  return {
    settled: k,
    servers() {
      return G(), c.flatMap(r => {
        let a = s.get(r);
        return a ? [{
          name: r,
          scope: a.handle.config.scope,
          tools: a.tools,
          status: a.handle.type
        }] : [];
      });
    },
    subscribe: T.subscribe,
    async callTool(r, a, {
      signal: signal_5,
      timeout: timeout,
      imageLimits: imageLimits_2
    }) {
      let deadline_4 = Date.now() + timeout,
        R = async W => {
          let j = await Oe(r, a.name, {
            signal: signal_5,
            deadline: deadline_4
          });
          try {
            return await Ne(r, j, a, {
              signal: signal_5,
              deadline: deadline_4,
              imageLimits: imageLimits_2
            });
          } catch (error) {
            if (W && error instanceof L0) return R(!1);
            throw ke(r, error);
          }
        };
      return R(!0);
    },
    toolTimeoutMs: r => n.toolTimeoutMs(e.configs[r]),
    stop() {
      return g ??= (async () => {
        if (D !== void 0) clearTimeout(D), D = void 0;
        T.clear();
        let r = [...s.values()].map(item => item.handle);
        s.clear(), L(), ce(), await n.cleanup(r);
      })(), g;
    }
  };
}
function Le() {
  let e = import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule();
  return {
    policySettled: () => Promise.all([jH(), O5e()]).then(() => {
      return;
    }),
    discover: (n, i, c) => e.getMcpToolsCommandsAndResources(n, i, c),
    ensureConnected: n => e.ensureConnectedClient(n),
    onToolListChanged: (n, i) => e.onMcpToolListChanged(n, i),
    refreshTools: refreshTools,
    callTool: (client_2, i, {
      signal: signal_6,
      imageLimits: imageLimits_3
    }) => e.callMCPTool({
      client: client_2,
      tool: i.name,
      args: i.arguments ?? {},
      meta: i._meta,
      signal: signal_6,
      imageLimits: imageLimits_3,
      hasResultSizeAnnotation: !0,
      storageV5: void 0,
      credentials: void 0
    }),
    cleanup: n => e.cleanupConnectedMcpClients(n),
    dispose: (n, i) => e.disposeServerConnectionDetached(n, i),
    refreshPolicy: refreshPolicy,
    allowedByPolicy: allowedByPolicy,
    needsLocalPrompts: n => e.isFirstPartyDesignServerConfig(n),
    dialConcurrency: n => e.isLocalMcpServer(n) ? {
      kind: "local",
      limit: e.getMcpServerConnectionBatchSize()
    } : {
      kind: "remote",
      limit: e.getRemoteMcpServerConnectionBatchSize()
    },
    toolTimeoutMs: n => e.getMcpToolTimeoutMs(n)
  };
}
function Fe(e) {
  return e.mcpInfo?.toolName ?? e.name;
}
function X(e) {
  return e instanceof TI || e !== null && typeof e === "object" && "mcpErrorSource" in e && e.mcpErrorSource === "user_auth";
}
function de(cause_2) {
  return new _("server", "MCP server needs authentication on this machine", {
    cause: cause_2
  });
}
function le(e, n) {
  return n.filter(item => item.mcpInfo !== void 0 && xc(item, e));
}
var me = VCr,
  K = KIt;
class PassthroughCallError extends P {
  verdict;
  constructor(e, n, i) {
    super(n, i, e.code);
    this.verdict = e;
    this.name = "PassthroughCallError";
  }
}
function $4r(e, n) {
  return e?.onToolVerdict?.({
    kind: "refused",
    code: "not_served"
  }, n.message), {
    result: !1,
    message: n.message,
    errorCode: 1
  };
}
function U4r(e, n, i) {
  let c = new PassthroughCallError({
    kind: "refused",
    code: "not_served"
  }, n, i);
  throw e?.onToolVerdict?.(c.verdict, c.message), c;
}
function B4r(e, n, name, c) {
  let s = new Set(c.values()),
    p = K.filter(item => !s.has(item));
  return async (v, T) => {
    if (T.remoteCall === void 0) throw new PassthroughCallError({
      kind: "refused",
      code: "invalid_request"
    }, ue, ue);
    let timeout_2 = e.toolTimeoutMs(n),
      {
        onToolVerdict: onToolVerdict
      } = T.remoteCall,
      M = await e.callTool(n, {
        name: name,
        arguments: ss(v, p)
      }, {
        signal: T.abortController.signal,
        timeout: timeout_2,
        imageLimits: Cl(T.options.mainLoopModel)
      }).catch(N => {
        let k = $e(N, n);
        if (k instanceof PassthroughCallError) onToolVerdict?.(k.verdict, k.message);
        throw k;
      });
    return {
      data: M.content,
      ...((M._meta || M.structuredContent) && {
        mcpMeta: {
          ...(M._meta && {
            _meta: M._meta
          }),
          ...(M.structuredContent && {
            structuredContent: M.structuredContent
          })
        }
      })
    };
  };
}
var ue = "MCP passthrough tools run only for a remote tool call; the call did not run";
function $e(e, n) {
  if (Ke(e) || e instanceof PassthroughCallError) return e;
  if (e instanceof CI) return new CI(`MCP server "${n}" on this machine returned an error for the call (it reached the server and may have had effects): ${e.message}`, "MCP passthrough tool returned an error", e.mcpMeta);
  if (Ue(e)) return new PassthroughCallError({
    kind: "refused",
    code: "not_served"
  }, `MCP server "${n}" on this machine needs a consent step in a browser there before this tool can run; the call did not run`, "MCP passthrough call needs URL consent on this machine");
  if (e instanceof _) return new PassthroughCallError({
    kind: "refused",
    code: "not_served"
  }, `MCP server "${n}" on this machine: ${e.message}; the call did not run`, e.message);
  return t(`[deviceBridge] passthrough MCP call on ${n} failed: ${te(e).message}`), new PassthroughCallError({
    kind: "failed",
    code: "tool_error"
  }, `MCP server "${n}" on this machine gave no usable result for the call (timeout, lost connection, or a protocol-level error); it may have run and had effects`, "MCP tool call failed on this machine");
}
var Be = -32042;
function Ue(e) {
  return e !== null && typeof e === "object" && "code" in e && e.code === Be;
}
var Ve = QCr;
var Ge = Orn - 262144,
  ze = yBn,
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
async function j4r(e, n) {
  let i = ve(e),
    c = await Promise.all(i.map(item => Promise.all(item.tools.map(g => nt(item.name, g, n.target))))),
    s = Qe(i, c, n.configured),
    {
      tools: tools_3,
      dropped: dropped,
      byServer: byServer
    } = i.reduce((acc, item, M) => {
      let N = Te(item.scope) ? {
        reason: "enterprise_scope"
      } : s.server(item);
      return (c[M] ?? []).reduce((acc, item) => Ze(acc, item, N, s, n), acc);
    }, {
      announced: new Set(),
      bytes: 0,
      tools: [],
      dropped: [],
      byServer: new Map()
    });
  return {
    tools: tools_3,
    dropped: dropped,
    byServer: byServer
  };
}
function Qe(e, n, i) {
  let c = ve([...e, ...i.filter(item => !e.some(M => M.name === item.name))]),
    s = new Set(c.filter(item => he.has(item.scope)).map(item => item.name)),
    p = [...s].map(item => `${Z1(x8e(item))}_`),
    v = (g, M) => !s.has(g) && p.some(item => `${M}_`.startsWith(item)),
    T = fe(c.map(item => [Z1(x8e(item.name)), {
      server: item.name,
      admin: s.has(item.name)
    }])),
    C = fe(n.flat().map(item => [Z1(item.name), {
      server: item.server,
      admin: s.has(item.server),
      rawName: item.rawName
    }]));
  return {
    server: g => Fjr(g.name) || v(g.name, Z1(x8e(g.name))) ? {
      reason: "collision"
    } : pe(T.get(Z1(x8e(g.name))) ?? [], g.name, M => M.server === g.name),
    tool: g => DTn(g.name) ? {
      reason: "service_reserved"
    } : !CSe(g.name) || Fjr(g.name) || v(g.server, Z1(g.name)) ? {
      reason: "collision"
    } : pe(C.get(Z1(g.name)) ?? [], g.server, M => M.server === g.server && M.rawName === g.rawName)
  };
}
function pe(e, n, i) {
  let c = e.find(item => item.admin) ?? (e.length === 1 ? e[0] : void 0);
  if (c === void 0) return {
    reason: "alias_collision",
    contenders: e.map(item => item.server).filter(item => item !== n)
  };
  return i(c) ? void 0 : {
    reason: "collision"
  };
}
function fe(e) {
  return e.reduce((acc, [i, c]) => {
    let s = acc.get(i) ?? [];
    if (!s.some(item => item.server === c.server)) acc.set(i, [...s, c]);
    return acc;
  }, new Map());
}
function Ze(e, n, i, c, {
  isDenied: isDenied,
  serve: serve
}) {
  let v = i ?? c.tool(n) ?? (n.tool.mcpInfo?.effectiveMaxPermission === "blocked" ? {
    reason: "permission_ceiling"
  } : isDenied(n.tool) ? {
    reason: "deny_rule"
  } : et(n, e));
  if ("reason" in v) return e.dropped.push({
    server: n.server,
    tool: n.rawName,
    ...v
  }), e;
  e.announced.add(n.name), e.bytes += v.bytes, e.tools.push(serve({
    ...n,
    definition: v.definition,
    wireArguments: v.wireArguments
  }));
  let T = e.byServer.get(n.server);
  if (T === void 0) T = [], e.byServer.set(n.server, T);
  return T.push(v.definition), e;
}
function et({
  name: name_2,
  definition: definition,
  wireArguments: wireArguments
}, {
  announced: announced,
  bytes: bytes
}) {
  if (wireArguments === "reserved_argument") return {
    reason: "reserved_argument"
  };
  if (name_2.length > Ve) return {
    reason: "name_length"
  };
  if (announced.has(name_2)) return {
    reason: "collision"
  };
  if (definition === void 0) return {
    reason: "definition_error"
  };
  let bytes_2 = Buffer.byteLength(b(definition));
  if (bytes_2 > qe) return {
    reason: "definition_size"
  };
  if (!BKe(definition.inputSchema, Drn)) return {
    reason: "schema_depth"
  };
  if (bytes + bytes_2 > Ge) return {
    reason: "announce_budget"
  };
  if (announced.size >= ze) return {
    reason: "announce_count"
  };
  return {
    definition: definition,
    bytes: bytes_2,
    wireArguments: wireArguments
  };
}
function ve(e) {
  return e.map((n, index) => ({
    server: n,
    index: index,
    rank: tt(n.scope)
  })).sort((itemA, itemB) => itemA.rank - itemB.rank || itemA.index - itemB.index).map(item => item.server);
}
function tt(e) {
  return Je[e] ?? Number.MAX_SAFE_INTEGER;
}
async function nt(server, tool, i) {
  let rawName = tool.mcpInfo?.toolName ?? tool.name,
    name_3 = ot(server, rawName),
    wireArguments_2 = st(tool.inputJSONSchema),
    v = wireArguments_2 === "reserved_argument" ? Y_t() : wireArguments_2;
  try {
    return {
      server: server,
      rawName: rawName,
      name: name_3,
      tool: tool,
      definition: await ct(name_3, tool, i, v),
      wireArguments: wireArguments_2
    };
  } catch (error) {
    return t(`[deviceBridge] passthrough cannot describe '${name_3}': ${te(error).message}`, {
      level: "error"
    }), {
      server: server,
      rawName: rawName,
      name: name_3,
      tool: tool,
      definition: void 0,
      wireArguments: wireArguments_2
    };
  }
}
function ot(e, n) {
  return Ia(e, n).slice(5);
}
function ge(e) {
  return `${e}_arg`;
}
var rt = new Set(["$schema", "$comment", "type", "title", "description", "properties", "required", "additionalProperties", "unevaluatedProperties", "$defs", "definitions", "default", "examples", "minProperties", "maxProperties"]),
  it = new Set(["$ref", "$dynamicRef", "$recursiveRef", "$anchor", "$dynamicAnchor", "$recursiveAnchor", "$id"]);
function st(e) {
  let n = e?.properties,
    i = e?.required,
    c = new Set([...(typeof n === "object" && n !== null ? Object.keys(n) : []), ...(Array.isArray(i) ? i.filter(item => typeof item === "string") : [])]),
    s = K,
    p = me;
  if (p.some(item => c.has(ge(item)))) return "reserved_argument";
  let v = s.filter(item => c.has(item));
  if (v.length === 0) return Y_t();
  if (v.some(item => !p.includes(item)) || e === void 0 || !Ce(e.type) || Object.keys(e).some(item => !rt.has(item)) || at(e) || v.some(item => typeof n === "object" && n !== null && Object.hasOwn(n, item) && !Pe(Reflect.get(n, item)))) return "reserved_argument";
  let T = new Map(v.map(item => [ge(item), item]));
  return [...T.keys()].some(item => s.includes(item)) ? "reserved_argument" : T;
}
function at(e) {
  let n = (i, c) => {
    if (c > Drn) return !0;
    if (Array.isArray(i)) return i.some(item => n(item, c + 1));
    if (typeof i !== "object" || i === null) return !1;
    return Object.entries(i).some(([s, p]) => it.has(s) || n(p, c + 1));
  };
  return n(e, 0);
}
async function ct(name_4, n, i, c) {
  let s = await n.description({}, {
      isNonInteractiveSession: !1,
      toolPermissionContext: np(),
      tools: []
    }),
    annotations = pt(n),
    v = QU();
  return {
    name: name_4,
    description: s.length <= Math.min(v, Mrn) ? s : Y(s, Math.min(v, Mrn - ye.length)),
    inputSchema: dt(n, c),
    ...(annotations && {
      annotations: annotations
    }),
    _meta: ft(n, i)
  };
}
var ye = "\u2026 [truncated]";
function Y(e, n) {
  return e.length > n ? re(e, n) + ye : e;
}
function dt(e, n) {
  let inputJSONSchema = e.inputJSONSchema;
  if (inputJSONSchema === void 0 || !Ce(inputJSONSchema.type)) return {
    type: "object",
    properties: {}
  };
  let properties = typeof inputJSONSchema.properties === "object" && inputJSONSchema.properties !== null && !Array.isArray(inputJSONSchema.properties) ? mt(inputJSONSchema.properties) : {};
  return lt({
    ...inputJSONSchema,
    type: "object",
    properties: properties
  }, n);
}
function lt(e, n) {
  if (n.size === 0) return e;
  let i = new Map([...n].map(([p, v]) => [v, p])),
    properties_2 = io(iee(e.properties, (p, v) => i.get(v) ?? v), (p, v) => {
      let T = n.get(v);
      return T === void 0 ? p : {
        ...p,
        description: ut(T, p)
      };
    }),
    required = Array.isArray(e.required) ? e.required.map(item => i.get(item) ?? item) : void 0;
  return {
    ...e,
    properties: properties_2,
    ...(required && {
      required: required
    })
  };
}
function ut(e, n) {
  let i = Reflect.get(n, "description"),
    c = `(The tool's own "${e}" parameter, passed under this name.)`;
  return typeof i === "string" && i !== "" ? `${i} ${c}` : c;
}
function Ce(e) {
  return e === void 0 || e === "object" || Array.isArray(e) && e.includes("object");
}
function mt(e) {
  return Object.fromEntries(Object.entries(e).flatMap(([n, i]) => Pe(i) ? [[n, i === !0 ? {} : i]] : []));
}
function Pe(e) {
  return e === !0 || typeof e === "object" && e !== null && !Array.isArray(e);
}
function pt(e) {
  let n = e.mcpInfo?.title,
    i = {
      ...(n !== void 0 && {
        title: Y(n, Xe)
      }),
      ...(e.readOnlyHint !== void 0 && {
        readOnlyHint: e.readOnlyHint
      }),
      ...(e.isDestructive?.({}) === !0 && {
        destructiveHint: !0
      }),
      ...(e.isOpenWorld?.({}) === !0 && {
        openWorldHint: !0
      })
    };
  return Object.keys(i).length > 0 ? i : void 0;
}
function ft(e, target) {
  let i = {
    v: v_2,
    tool: e.name,
    target: target
  };
  return {
    [koe]: i,
    ...(e.searchHint !== void 0 && {
      [iL.searchHint]: Y(e.searchHint, Ye)
    }),
    ...(e.alwaysLoad === !0 && {
      [iL.alwaysLoad]: !0
    }),
    ...(e.persistenceThresholdCeiling !== void 0 && {
      [iL.maxResultSizeChars]: e.maxResultSizeChars
    }),
    ...(e.requiresUserInteraction?.() === !0 && {
      [iL.requiresUserInteraction]: !0
    })
  };
}
var W4r = y("mcp_passthrough");
function Te(e) {
  return he.has(e);
}
var Q = !1;
function z4r(e) {
  return !Te(e) && (Q || e !== "project");
}
import { hostname } from "os";
import { dirname as ht, join as St } from "path";
var version = 1;
function we() {
  return [Tkn ? "each-call-asked" : "local-rules-decide", Q ? "project-servers" : "no-project-servers"].join("+");
}
var vt = f(() => u({
    version: A(version),
    choice: z(["accepted", "declined"]),
    terms: o(),
    decidedAt: o(),
    hostname: o()
  })),
  be = "device-mcp-consent";
function _Wt() {
  return `delete ${xa(Z())} to be asked again`;
}
function Z() {
  return St(Se(), "state", `${be}.json`);
}
async function Egt(e) {
  let n;
  try {
    n = await e.readText();
  } catch (error) {
    return t(`device-mcp consent: store unreadable (${l(error)})`, {
      level: "warn"
    }), "unreadable";
  }
  if (n === void 0) return "unset";
  try {
    let i = vt().safeParse(J(n));
    return i.success && aW(i.data.hostname) === aW(e.hostname()) && (i.data.choice === "declined" || i.data.terms === we()) ? i.data.choice : "unset";
  } catch {
    return "unset";
  }
}
async function G4r(e) {
  let n = await Egt(e);
  return n === "unreadable" ? "unset" : n;
}
async function bWt(choice, n) {
  try {
    return await n.writeText(b({
      version: version,
      choice: choice,
      terms: we(),
      decidedAt: n.now().toISOString(),
      hostname: aW(n.hostname())
    }, null, 2) + `
`), !0;
  } catch (error) {
    return t(`device-mcp consent: answer not saved (${l(error)})`, {
      level: "warn"
    }), !1;
  }
}
function Are(e) {
  let n = H() && e !== void 0 ? e : void 0,
    i = Ae.state(be);
  return {
    readText: async () => {
      if (n) {
        let c = await n.readText([i]);
        if (!c.ok) throw Error("device-mcp consent read failed");
        let s = c.value.items[0];
        return s.found ? s.value : void 0;
      }
      try {
        return await Qt().read(Z());
      } catch (error) {
        if (B(error)) return;
        throw error;
      }
    },
    writeText: async c => {
      if (n) {
        if (!(await n.write(i, c, {
          mode: 384
        })).ok) throw Error("device-mcp consent write failed");
        return;
      }
      let s = Z();
      await Qt().mkdir(ht(s), 448), await Qt().atomicWrite(s, c, 384);
    },
    now: () => new Date(),
    hostname: hostname
  };
}
function Rj(e) {
  return Ste(e);
}
export { F4r, $4r, U4r, B4r, j4r, W4r, z4r, _Wt, Egt, G4r, bWt, Are, Rj };