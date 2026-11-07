// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Ke, We, R, F, d, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { zB, eR as allowedByPolicy } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Qq } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { uO, rEs, zFn, zGe, Mgo, cEs, sCr, iCr, aCr } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { Er } from "B:/~BUN/root/chunk-pc24rkga.js";
import { $d } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { lS } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ir as refreshPolicy } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { oS, EO, qy } from "B:/~BUN/root/chunk-q2rjek8y.js";
import { Dd, PE, br } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { wKe } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { MK } from "B:/~BUN/root/chunk-s12bzehs.js";
import { bGr } from "B:/~BUN/root/chunk-bnhebyhk.js";
import { GOe, M6r as v_2, D6r, O6e } from "B:/~BUN/root/chunk-4m01cdtr.js";
import { WM, nvn } from "B:/~BUN/root/chunk-bf9d8yv4.js";
import { Che as refreshTools } from "B:/~BUN/root/chunk-zkjxrhgg.js";
import { rgn } from "B:/~BUN/root/chunk-zr472vkx.js";
import { GC } from "B:/~BUN/root/chunk-3namn0f2.js";
import { zM } from "B:/~BUN/root/chunk-kr1v6gnh.js";
import { Al } from "B:/~BUN/root/chunk-md18120p.js";
import { os } from "B:/~BUN/root/chunk-kj33sgq2.js";
import { Y_ } from "B:/~BUN/root/chunk-vtghd2qd.js";
import { aRe } from "B:/~BUN/root/chunk-4jfmvmew.js";
import { vo } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { BO, cqe, iSt } from "B:/~BUN/root/chunk-2631cdbp.js";
import { o, C, u, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { hostname } from "os";
import { dirname as wt, join as Mt } from "path";
var $e = 1e4,
  Be = 3,
  ze = 60000;
class M extends Error {
  unavailable;
  name = "PassthroughMcpUnavailableError";
  constructor(e, n, i) {
    super(n, i);
    this.unavailable = e;
  }
}
function M4s(e) {
  let n = e.ops ?? Ge(),
    i = e.dialLatch ?? nvn(),
    m = Object.keys(e.configs),
    s = new Map(),
    l = new Map(),
    weakSet = new WeakSet(),
    P = De(),
    y = Date.now(),
    g,
    w = !1,
    x = () => {},
    k = new Promise(r => {
      x = r;
    }),
    O,
    oe = Date.now(),
    D = () => g !== void 0;
  function L() {
    if (w) return;
    if (w = !0, O !== void 0) clearTimeout(O), O = void 0;
    let r = [...l.values()],
      c = f => U(r, h => h === f);
    x({
      configured: m.length,
      connected: c("connected"),
      cached: c("cached"),
      failed: c("failed"),
      needsAuth: c("needs-auth"),
      disabled: c("disabled"),
      blocked: c("blocked"),
      excluded: c("excluded"),
      unreported: m.length - l.size,
      settleMs: Date.now() - y
    }), re([...s].filter(([, f]) => f.handle.type === "cached").map(([f]) => f));
  }
  async function re(r) {
    let c = async S => {
        G();
        let A = s.get(S);
        if (A && !D()) await se(S, A).catch(() => {}), G();
      },
      f = S => n.dialConcurrency(e.configs[S]),
      h = r.filter(item => s.has(item));
    await Promise.all(lS(h, S => f(S).kind === "local").filter(item => item.length > 0).map(item => Y_(item, c, {
      concurrency: f(item[0]).limit
    })));
  }
  function z() {
    try {
      P.emit();
    } catch (error) {
      a(error);
    }
  }
  function N(r, c) {
    let f = s.get(r);
    if (f) s.set(r, {
      ...f,
      ...c
    });
  }
  function Oe(handle, c) {
    let f = s.get(handle.name),
      tools = pe(handle.name, c);
    if (s.set(handle.name, {
      handle: handle,
      tools: tools,
      dialing: f?.dialing,
      listing: void 0,
      consecutiveDialFailures: 0,
      everConnected: f?.everConnected === !0 || handle.type === "connected"
    }), handle.type === "connected") {
      if (tools.length === 0) N(handle.name, {
        listing: W(handle.name, handle)
      });
      ie(handle.name, handle);
    } else if (w) re([handle.name]);
    if (f !== void 0 || w) z();
  }
  function ie(r, handle_2) {
    let f = s.get(r);
    if (!f || D()) return;
    if (f.handle !== handle_2) N(r, {
      handle: handle_2,
      everConnected: !0
    }), N(r, {
      listing: W(r, handle_2)
    }), z();
    if (!weakSet.has(handle_2) && handle_2.capabilities?.tools?.listChanged) weakSet.add(handle_2), n.onToolListChanged(handle_2, async () => {
      await W(r, handle_2);
    });
  }
  function W(r, c) {
    let f = !1;
    return n.refreshTools(c, (h, S) => {
      if (s.get(r)?.handle === c && !D()) N(r, {
        tools: pe(r, S),
        listing: void 0
      }), f = !0, z();
    }, e.storageV5).then(() => f, h => (t(`[deviceBridge] passthrough MCP tools refresh failed for ${r}: ${F(h).message}`), !1));
  }
  function I(r, c) {
    let f = s.get(r);
    if (!f || D()) return;
    s.delete(r), n.dispose(r, f.handle.config), n.cleanup([f.handle]), t(`[deviceBridge] passthrough MCP server ${r} left the pool (${c})`), z();
  }
  function G() {
    let r = Date.now();
    if (r - oe >= ze) oe = r, n.refreshPolicy();
    for (let [c, f] of s) if (!n.allowedByPolicy(c, f.handle.config)) I(c, "denied by managed policy");
  }
  function se(r, c) {
    if (c.dialing) return c.dialing;
    if (i.shouldSkip(r)) return Promise.reject(new M("server", "MCP server failed to connect recently; not retrying yet"));
    let dialing = n.ensureConnected(c.handle).then(h => {
      if (ae(r, dialing), i.recordSuccess(r), D() || !s.has(r)) throw n.cleanup([h]), new M("server", "MCP server is no longer offered by this machine");
      return N(r, {
        consecutiveDialFailures: 0
      }), ie(r, h), h;
    }, h => {
      if (ae(r, dialing), Y(h)) throw I(r, "needs authentication"), h;
      i.recordFailure(r);
      let S = s.get(r),
        consecutiveDialFailures = (S?.consecutiveDialFailures ?? 0) + 1;
      if (N(r, {
        consecutiveDialFailures: consecutiveDialFailures
      }), consecutiveDialFailures >= Be && S?.everConnected !== !0) I(r, "repeated dial failures");else if (s.has(r)) n.dispose(r, c.handle.config);
      throw h;
    });
    return N(r, {
      dialing: dialing
    }), dialing;
  }
  function ae(r, c) {
    if (s.get(r)?.dialing === c) N(r, {
      dialing: void 0
    });
  }
  async function Ne(serverName, {
    signal: signal,
    deadline: deadline
  }) {
    let h = s.get(serverName)?.listing;
    while (h !== void 0) {
      let S = await WM(h, {
          signal: signal,
          timeoutMs: Math.max(0, deadline - Date.now()),
          serverName: serverName,
          context: "device tool call"
        }).catch(cause => {
          if (We(cause)) throw cause;
          throw new M("server", "MCP server connected too late for this call", {
            cause: cause
          });
        }),
        A = s.get(serverName);
      if (S || A?.listing === void 0) return;
      if (A.listing !== h) {
        h = A.listing;
        continue;
      }
      if (A.handle.type === "connected") N(serverName, {
        listing: W(serverName, A.handle)
      });
      throw new M("server", "MCP server did not list its tools");
    }
  }
  async function xe(serverName_2, {
    signal: signal_2,
    timeoutMs: timeoutMs
  }) {
    let h = s.get(serverName_2);
    if (D() || !h) throw new M("server", "MCP server is not available on this machine");
    try {
      return await WM(se(serverName_2, h), {
        signal: signal_2,
        timeoutMs: timeoutMs,
        serverName: serverName_2,
        context: "device tool call"
      });
    } catch (S) {
      if (We(S) || S instanceof M) throw S;
      if (Y(S)) throw ue(S);
      throw t(`[deviceBridge] passthrough MCP dial failed for ${serverName_2}: ${F(S).message}`), new M("server", "MCP server could not be reached for this call", {
        cause: S
      });
    }
  }
  function ce(r, c) {
    G();
    let f = s.get(r);
    if (!f || D()) throw new M("server", "MCP server is not available on this machine");
    let h = f.tools.find(item => le(item) === c);
    if (!h) throw new M("tool", "MCP tool is not offered by this machine");
    if (h.mcpInfo?.effectiveMaxPermission === "blocked") throw new M("tool", "MCP tool is blocked on this machine by the organization");
  }
  async function ke(r, c, {
    signal: signal_3,
    deadline: deadline_2
  }) {
    ce(r, c);
    let S = await xe(r, {
      signal: signal_3,
      timeoutMs: Math.max(0, deadline_2 - Date.now())
    });
    if (await Ne(r, {
      signal: signal_3,
      deadline: deadline_2
    }), ce(r, c), s.get(r)?.handle !== S) throw new M("server", "MCP server was reconnected during this call; retry");
    if (deadline_2 - Date.now() <= 0) throw new M("server", "MCP server connected too late for this call");
    return S;
  }
  async function Ie(r, c, f, {
    signal: signal_4,
    deadline: deadline_3,
    imageLimits: imageLimits
  }) {
    let E = os(signal_4, {
        timeoutMs: Math.max(0, deadline_3 - Date.now()),
        refTimer: !0
      }),
      q = j => signal_4.aborted ? new Ke(`MCP tool call on '${r}' aborted`) : E.signal.aborted ? new R(`MCP server "${r}" did not answer the call within its deadline`, "MCP passthrough call deadline") : j;
    try {
      let j = await n.callTool(c, f, {
        signal: E.signal,
        imageLimits: imageLimits
      }).catch(V => {
        throw q(V);
      });
      if (j.isError) throw "urlElicitationDeclined" in j ? new M("tool", "MCP tool needs a consent step in a browser on this machine, which a served call cannot show") : q(new R("MCP tool call on this machine ended without a result", "MCP passthrough call ended without a result"));
      return j;
    } finally {
      E.cleanup();
    }
  }
  function He(r, c) {
    if (!Y(c)) return c;
    return I(r, "needs authentication"), ue(c);
  }
  function je({
    client: client,
    tools: tools_2
  }) {
    if (D() || l.get(client.name) === "dropped") {
      n.cleanup([client]);
      return;
    }
    if (!Object.hasOwn(e.configs, client.name)) return;
    switch (client.type) {
      case "connected":
      case "cached":
        l.set(client.name, client.type), Oe(client, tools_2);
        break;
      case "failed":
        l.set(client.name, client.type), I(client.name, "failed");
        break;
      case "needs-auth":
        l.set(client.name, client.type), I(client.name, "needs authentication");
        break;
      case "disabled":
        l.set(client.name, client.type), I(client.name, "disabled");
        break;
      case "pending":
        break;
      default:
    }
    if (l.size >= m.length) L();
  }
  n.policySettled().then(() => {
    if (D()) return;
    O = setTimeout(L, e.settleTimeoutMs ?? $e);
    let r = Ro(e.configs, (c, f) => {
      if (l.get(f) === "dropped") return !1;
      if (n.needsLocalPrompts(c)) return l.set(f, "excluded"), !1;
      let h = n.allowedByPolicy(f, c);
      if (!h) l.set(f, "blocked");
      return h;
    });
    return n.discover(je, r, e.storageV5);
  }).catch(r => {
    t(`[deviceBridge] passthrough MCP discovery failed: ${F(r).message}`);
  }).finally(() => {
    L(), de(r => D() || l.get(r) === "dropped");
  });
  function de(r = () => !0) {
    for (let c of m.filter(r)) n.dispose(c, e.configs[c]);
  }
  return {
    settled: k,
    servers() {
      return G(), m.flatMap(r => {
        let c = s.get(r);
        return c ? [{
          name: r,
          scope: c.handle.config.scope,
          tools: c.tools,
          status: c.handle.type
        }] : [];
      });
    },
    subscribe: P.subscribe,
    async callTool(r, c, {
      signal: signal_5,
      timeout: timeout,
      imageLimits: imageLimits_2
    }) {
      let deadline_4 = Date.now() + timeout,
        E = async q => {
          let j = await ke(r, c.name, {
            signal: signal_5,
            deadline: deadline_4
          });
          try {
            return await Ie(r, j, c, {
              signal: signal_5,
              deadline: deadline_4,
              imageLimits: imageLimits_2
            });
          } catch (error) {
            let Le = c.name;
            if (q && error instanceof EO && (!error.mayHaveRun || s.get(r)?.tools.find(Fe => le(Fe) === Le)?.readOnlyHint === !0)) return E(!1);
            throw He(r, error);
          }
        };
      return E(!0);
    },
    toolTimeoutMs: r => n.toolTimeoutMs(e.configs[r]),
    dropServer(r) {
      if (D() || !Object.hasOwn(e.configs, r)) return;
      if (l.set(r, "dropped"), s.has(r)) I(r, "dropped by the caller");else n.dispose(r, e.configs[r]);
      if (l.size >= m.length) L();
    },
    stop() {
      return g ??= (async () => {
        if (O !== void 0) clearTimeout(O), O = void 0;
        P.clear();
        let r = [...s.values()].map(item => item.handle);
        s.clear(), L(), de(), await n.cleanup(r);
      })(), g;
    }
  };
}
function Ge() {
  let e = import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule();
  return {
    policySettled: () => Promise.all([GC(), wKe()]).then(() => {
      return;
    }),
    discover: (n, i, m) => e.getMcpToolsCommandsAndResources(n, i, m),
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
function le(e) {
  return e.mcpInfo?.toolName ?? e.name;
}
function Y(e) {
  return e instanceof oS || e !== null && typeof e === "object" && "mcpErrorSource" in e && e.mcpErrorSource === "user_auth";
}
function ue(cause_2) {
  return new M("server", "MCP server needs authentication on this machine", {
    cause: cause_2
  });
}
function pe(e, n) {
  return n.filter(item => item.mcpInfo !== void 0 && Dd(item, e));
}
var fe = rEs,
  J = zFn;
class PassthroughCallError extends R {
  verdict;
  constructor(e, n, i) {
    super(n, i, e.code);
    this.verdict = e;
    this.name = "PassthroughCallError";
  }
}
function D4s(e, n) {
  return e?.onToolVerdict?.({
    kind: "refused",
    code: "not_served"
  }, n.message), {
    result: !1,
    message: n.message,
    errorCode: 1
  };
}
function L4s(e, n, i) {
  let m = new PassthroughCallError({
    kind: "refused",
    code: "not_served"
  }, n, i);
  throw e?.onToolVerdict?.(m.verdict, m.message), m;
}
function N4s(e, n, name, m) {
  let s = new Set(m.values()),
    l = J.filter(item => !s.has(item));
  return async (v, P) => {
    if (P.remoteCall === void 0) throw new PassthroughCallError({
      kind: "refused",
      code: "invalid_request"
    }, me, me);
    let timeout_2 = e.toolTimeoutMs(n),
      {
        onToolVerdict: onToolVerdict
      } = P.remoteCall,
      w = await e.callTool(n, {
        name: name,
        arguments: vo(v, l)
      }, {
        signal: P.abortController.signal,
        timeout: timeout_2,
        imageLimits: {
          ...Al(P.options.mainLoopModel),
          allowWebp: !1
        }
      }).catch(x => {
        let k = qe(x, n);
        if (k instanceof PassthroughCallError) onToolVerdict?.(k.verdict, k.message);
        throw k;
      });
    return {
      data: w.content,
      ...((w._meta || w.structuredContent) && {
        mcpMeta: {
          ...(w._meta && {
            _meta: zM(w._meta)
          }),
          ...(w.structuredContent && {
            structuredContent: w.structuredContent
          })
        }
      })
    };
  };
}
var me = "MCP passthrough tools run only for a remote tool call; the call did not run";
function qe(e, n) {
  if (We(e) || e instanceof PassthroughCallError) return e;
  if (e instanceof qy) return new qy(`MCP server "${n}" on this machine returned an error for the call (it reached the server and may have had effects): ${e.message}`, "MCP passthrough tool returned an error", e.mcpMeta);
  if (Ye(e)) return new PassthroughCallError({
    kind: "refused",
    code: "not_served"
  }, `MCP server "${n}" on this machine needs a consent step in a browser there before this tool can run; the call did not run`, "MCP passthrough call needs URL consent on this machine");
  if (e instanceof M) return new PassthroughCallError({
    kind: "refused",
    code: "not_served"
  }, `MCP server "${n}" on this machine: ${e.message}; the call did not run`, e.message);
  return t(`[deviceBridge] passthrough MCP call on ${n} failed: ${F(e).message}`), new PassthroughCallError({
    kind: "failed",
    code: "tool_error"
  }, `MCP server "${n}" on this machine gave no usable result for the call (timeout, lost connection, or a protocol-level error); it may have run and had effects`, "MCP tool call failed on this machine");
}
var Xe = -32042;
function Ye(e) {
  return e !== null && typeof e === "object" && "code" in e && e.code === Xe;
}
var Je = cEs,
  Qe = sCr - 262144,
  Ze = Mgo,
  et = 65536,
  tt = 256,
  nt = 512,
  ot = {
    enterprise: 0,
    managed: 1,
    local: 2,
    user: 3,
    dynamic: 4,
    project: 5,
    claudeai: 6,
    agent: 7
  },
  Se = new Set(["enterprise", "managed"]);
async function F4s(e, n) {
  let i = ye(e),
    m = await Promise.all(i.map(item => Promise.all(item.tools.map(g => ct(item.name, g, n.target))))),
    s = rt(i, m, n.configured),
    {
      tools: tools_3,
      dropped: dropped,
      byServer: byServer
    } = i.reduce((acc, item, w) => {
      let x = Me(item.scope) ? {
        reason: "enterprise_scope"
      } : s.server(item);
      return (m[w] ?? []).reduce((acc, item) => it(acc, item, x, s, n), acc);
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
function rt(e, n, i) {
  let m = ye([...e, ...i.filter(item => !e.some(w => w.name === item.name))]),
    s = new Set(m.filter(item => Se.has(item.scope)).map(item => item.name)),
    l = [...s].map(item => `${BO(PE(item))}_`),
    v = (g, w) => !s.has(g) && l.some(item => `${w}_`.startsWith(item)),
    P = he(m.map(item => [BO(PE(item.name)), {
      server: item.name,
      admin: s.has(item.name)
    }])),
    y = he(n.flat().map(item => [BO(item.name), {
      server: item.server,
      admin: s.has(item.server),
      rawName: item.rawName
    }]));
  return {
    server: g => iSt(g.name) || cqe(g.name) || v(g.name, BO(PE(g.name))) ? {
      reason: "collision"
    } : ge(P.get(BO(PE(g.name))) ?? [], g.name, w => w.server === g.name),
    tool: g => D6r(g.name) ? {
      reason: "service_reserved"
    } : !O6e(g.name) || iSt(g.name) || cqe(g.name) || v(g.server, BO(g.name)) ? {
      reason: "collision"
    } : ge(y.get(BO(g.name)) ?? [], g.server, w => w.server === g.server && w.rawName === g.rawName)
  };
}
function ge(e, n, i) {
  let m = e.find(item => item.admin) ?? (e.length === 1 ? e[0] : void 0);
  if (m === void 0) return {
    reason: "alias_collision",
    contenders: e.map(item => item.server).filter(item => item !== n)
  };
  return i(m) ? void 0 : {
    reason: "collision"
  };
}
function he(e) {
  return e.reduce((acc, [i, m]) => {
    let s = acc.get(i) ?? [];
    if (!s.some(item => item.server === m.server)) acc.set(i, [...s, m]);
    return acc;
  }, new Map());
}
function it(e, n, i, m, {
  isDenied: isDenied,
  serve: serve
}) {
  let v = i ?? m.tool(n) ?? (n.tool.mcpInfo?.effectiveMaxPermission === "blocked" ? {
    reason: "permission_ceiling"
  } : isDenied(n.tool) ? {
    reason: "deny_rule"
  } : st(n, e));
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
  let P = e.byServer.get(n.server);
  if (P === void 0) P = [], e.byServer.set(n.server, P);
  return P.push(v.definition), e;
}
function st({
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
  if (name_2.length > Je) return {
    reason: "name_length"
  };
  if (announced.has(name_2)) return {
    reason: "collision"
  };
  if (definition === void 0) return {
    reason: "definition_error"
  };
  let bytes_2 = Buffer.byteLength(_(definition));
  if (bytes_2 > et) return {
    reason: "definition_size"
  };
  if (!zGe(definition.inputSchema, aCr)) return {
    reason: "schema_depth"
  };
  if (bytes + bytes_2 > Qe) return {
    reason: "announce_budget"
  };
  if (announced.size >= Ze) return {
    reason: "announce_count"
  };
  return {
    definition: definition,
    bytes: bytes_2,
    wireArguments: wireArguments
  };
}
function ye(e) {
  return e.map((n, index) => ({
    server: n,
    index: index,
    rank: at(n.scope)
  })).sort((itemA, itemB) => itemA.rank - itemB.rank || itemA.index - itemB.index).map(item => item.server);
}
function at(e) {
  return ot[e] ?? Number.MAX_SAFE_INTEGER;
}
async function ct(server, tool, i) {
  let rawName = tool.mcpInfo?.toolName ?? tool.name,
    name_3 = dt(server, rawName),
    wireArguments_2 = pt(tool.inputJSONSchema),
    v = wireArguments_2 === "reserved_argument" ? rgn() : wireArguments_2;
  try {
    return {
      server: server,
      rawName: rawName,
      name: name_3,
      tool: tool,
      definition: await ft(name_3, tool, i, v),
      wireArguments: wireArguments_2
    };
  } catch (error) {
    return t(`[deviceBridge] passthrough cannot describe '${name_3}': ${F(error).message}`, {
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
function dt(e, n) {
  return br(e, n).slice(5);
}
function ve(e) {
  return `${e}_arg`;
}
var lt = new Set(["$schema", "$comment", "type", "title", "description", "properties", "required", "additionalProperties", "unevaluatedProperties", "$defs", "definitions", "default", "examples", "minProperties", "maxProperties"]),
  ut = new Set(["$ref", "$dynamicRef", "$recursiveRef", "$anchor", "$dynamicAnchor", "$recursiveAnchor", "$id"]);
function pt(e) {
  let n = e?.properties,
    i = e?.required,
    m = new Set([...(typeof n === "object" && n !== null ? Object.keys(n) : []), ...(Array.isArray(i) ? i.filter(item => typeof item === "string") : [])]),
    s = J,
    l = fe;
  if (l.some(item => m.has(ve(item)))) return "reserved_argument";
  let v = s.filter(item => m.has(item));
  if (v.length === 0) return rgn();
  if (v.some(item => !l.includes(item)) || e === void 0 || !Pe(e.type) || Object.keys(e).some(item => !lt.has(item)) || mt(e) || v.some(item => typeof n === "object" && n !== null && Object.hasOwn(n, item) && !we(Reflect.get(n, item)))) return "reserved_argument";
  let P = new Map(v.map(item => [ve(item), item]));
  return [...P.keys()].some(item => s.includes(item)) ? "reserved_argument" : P;
}
function mt(e) {
  let n = (i, m) => {
    if (m > aCr) return !0;
    if (Array.isArray(i)) return i.some(item => n(item, m + 1));
    if (typeof i !== "object" || i === null) return !1;
    return Object.entries(i).some(([s, l]) => ut.has(s) || n(l, m + 1));
  };
  return n(e, 0);
}
async function ft(name_4, n, i, m) {
  let s = await n.description({}, {
      isNonInteractiveSession: !1,
      toolPermissionContext: $d(),
      tools: []
    }),
    annotations = yt(n),
    v = zB();
  return {
    name: name_4,
    description: s.length <= Math.min(v, iCr) ? s : Z(s, Math.min(v, iCr - Ce.length)),
    inputSchema: gt(n, m),
    ...(annotations && {
      annotations: annotations
    }),
    _meta: Ct(n, i)
  };
}
var Ce = "\u2026 [truncated]";
function Z(e, n) {
  return e.length > n ? Q(e, n) + Ce : e;
}
function gt(e, n) {
  let inputJSONSchema = e.inputJSONSchema;
  if (inputJSONSchema === void 0 || !Pe(inputJSONSchema.type)) return {
    type: "object",
    properties: {}
  };
  let properties = typeof inputJSONSchema.properties === "object" && inputJSONSchema.properties !== null && !Array.isArray(inputJSONSchema.properties) ? St(inputJSONSchema.properties) : {};
  return ht({
    ...inputJSONSchema,
    type: "object",
    properties: properties
  }, n);
}
function ht(e, n) {
  if (n.size === 0) return e;
  let i = new Map([...n].map(([l, v]) => [v, l])),
    properties_2 = Er(uO(e.properties, (l, v) => i.get(v) ?? v), (l, v) => {
      let P = n.get(v);
      return P === void 0 ? l : {
        ...l,
        description: vt(P, l)
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
function vt(e, n) {
  let i = Reflect.get(n, "description"),
    m = `(The tool's own "${e}" parameter, passed under this name.)`;
  return typeof i === "string" && i !== "" ? `${i} ${m}` : m;
}
function Pe(e) {
  return e === void 0 || e === "object" || Array.isArray(e) && e.includes("object");
}
function St(e) {
  return Object.fromEntries(Object.entries(e).flatMap(([n, i]) => we(i) ? [[n, i === !0 ? {} : i]] : []));
}
function we(e) {
  return e === !0 || typeof e === "object" && e !== null && !Array.isArray(e);
}
function yt(e) {
  let n = e.mcpInfo?.title,
    i = {
      ...(n !== void 0 && {
        title: Z(n, tt)
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
function Ct(e, n) {
  let {
      inventory: inventory,
      ...target
    } = n,
    s = {
      v: v_2,
      tool: e.name,
      target: target
    };
  return {
    [GOe]: s,
    ...(e.searchHint !== void 0 && {
      [Qq.searchHint]: Z(e.searchHint, nt)
    }),
    ...(e.alwaysLoad === !0 && {
      [Qq.alwaysLoad]: !0
    }),
    ...(e.persistenceThresholdCeiling !== void 0 && {
      [Qq.maxResultSizeChars]: e.maxResultSizeChars
    }),
    ...(e.requiresUserInteraction?.() === !0 && {
      [Qq.requiresUserInteraction]: !0
    })
  };
}
var H4s = b("mcp_passthrough");
function Me(e) {
  return Se.has(e);
}
var te = !1;
function $4s(e) {
  return !Me(e) && (te || e !== "project");
}
var version = 1;
function _e() {
  return [bGr ? "each-call-asked" : "local-rules-decide", te ? "project-servers" : "no-project-servers"].join("+");
}
var Tt = p(() => u({
    version: T(version),
    choice: B(["accepted", "declined"]),
    terms: o(),
    decidedAt: o(),
    hostname: o()
  })),
  be = "device-mcp-consent",
  Ae = "device-mcp-consent-not-now",
  version_2 = 1;
function U4s() {
  return `delete ${ks(_t())} to be asked again`;
}
function l4n() {
  return `delete ${ks(bt())}, then start a new claude --cloud session`;
}
function ne(e) {
  return Mt(Ue(), "state", `${e}.json`);
}
function _t() {
  return ne(be);
}
function bt() {
  return ne(Ae);
}
async function Vun(e) {
  let n;
  try {
    n = await e.readText();
  } catch (error) {
    return t(`device-mcp consent: store unreadable (${d(error)})`, {
      level: "warn"
    }), "unreadable";
  }
  if (n === void 0) return "unset";
  try {
    let i = Tt().safeParse(ee(n));
    return i.success && MK(i.data.hostname) === MK(e.hostname()) && (i.data.choice === "declined" || i.data.terms === _e()) ? i.data.choice : "unset";
  } catch {
    return "unset";
  }
}
async function d4n(e) {
  let n = await Vun(e);
  return n === "unreadable" ? "unset" : n;
}
async function c4n(choice, n) {
  try {
    return await n.writeText(_({
      version: version,
      choice: choice,
      terms: _e(),
      decidedAt: n.now().toISOString(),
      hostname: MK(n.hostname())
    }, null, 2) + `
`), !0;
  } catch (error) {
    return t(`device-mcp consent: answer not saved (${d(error)})`, {
      level: "warn"
    }), !1;
  }
}
var At = p(() => u({
  version: T(version_2),
  servers: C(o()),
  decidedAt: o(),
  hostname: o()
}));
async function hkt(e) {
  let n;
  try {
    n = await e.readText();
  } catch (error) {
    return t(`device-mcp not-now: store unreadable (${d(error)})`, {
      level: "warn"
    }), [];
  }
  if (n === void 0) return [];
  try {
    let i = At().safeParse(ee(n));
    return i.success && MK(i.data.hostname) === MK(e.hostname()) ? i.data.servers : [];
  } catch {
    return [];
  }
}
async function u4n(servers, n) {
  try {
    return await n.writeText(_({
      version: version_2,
      servers: servers,
      decidedAt: n.now().toISOString(),
      hostname: MK(n.hostname())
    }, null, 2) + `
`), !0;
  } catch (error) {
    return t(`device-mcp not-now: not saved (${d(error)})`, {
      level: "warn"
    }), !1;
  }
}
async function f4n(e) {
  try {
    await e.removeText();
  } catch (error) {
    t(`device-mcp not-now: not cleared (${d(error)})`, {
      level: "warn"
    });
  }
}
function gkt(e, n) {
  if (e.length === 0) return !1;
  let i = new Set(e);
  return n.every(item => i.has(item));
}
function Ee(e, n) {
  let i = X() && n !== void 0 ? n : void 0,
    m = Ve.state(e),
    s = ne(e);
  return {
    readText: async () => {
      if (i) {
        let l = await i.readText([m]);
        if (!l.ok) throw Error("device-mcp state read failed");
        let v = l.value.items[0];
        return v.found ? v.value : void 0;
      }
      try {
        return await Dn().read(s);
      } catch (error) {
        if (K(error)) return;
        throw error;
      }
    },
    writeText: async l => {
      if (i) {
        if (!(await i.write(m, l, {
          mode: 384
        })).ok) throw Error("device-mcp state write failed");
        return;
      }
      await Dn().mkdir(wt(s), 448), await Dn().atomicWrite(s, l, 384);
    },
    removeText: async () => {
      if (i) {
        if (!(await i.delete(m)).ok) throw Error("device-mcp state delete failed");
        return;
      }
      try {
        await Dn().delete(s);
      } catch (error) {
        if (!K(error)) throw error;
      }
    },
    now: () => new Date(),
    hostname: hostname
  };
}
function dPe(e) {
  return Ee(be, e);
}
function Vwe(e) {
  return Ee(Ae, e);
}
function O7(e) {
  return aRe(e);
}
export { M4s, D4s, L4s, N4s, F4s, H4s, $4s, U4s, l4n, Vun, d4n, c4n, hkt, u4n, f4n, gkt, dPe, Vwe, O7 };