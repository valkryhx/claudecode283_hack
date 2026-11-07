// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ee, Oo, Ck, Wwt, oK, Gl } from "B:/~BUN/root/chunk-game8aqv.js";
import { Ke, d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, we, Ao } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Nr } from "B:/~BUN/root/chunk-eev762xg.js";
import { V } from "B:/~BUN/root/chunk-f9dwrymq.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ir } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { ln, fM, Tc, Yi, vp, Bie, Ui, Pi, vHe, di, xg, fj } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { FCo, un, NJ, o5 } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Er } from "B:/~BUN/root/chunk-pc24rkga.js";
import { Pg } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { gr, to } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { pe } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { J_ } from "B:/~BUN/root/chunk-79dw4seg.js";
import { sH } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Oet } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
import { Um, Aee } from "B:/~BUN/root/chunk-esnm3r09.js";
import { t4s, r4s } from "B:/~BUN/root/chunk-ws830w2f.js";
import { vrt } from "B:/~BUN/root/chunk-24afkz8v.js";
import { wn } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { pCr } from "B:/~BUN/root/chunk-9t9ygsbp.js";
import { Wl, X_ } from "B:/~BUN/root/chunk-detjgwj4.js";
import { c7r as permissionDecisionReason, Q8, HQo, u7r, Axt, TTn, M7r, _dt, Klr, OOt, pW, Bfr, b6, qre, oos, ios, Xfr, Lc, PEe, ki, SI, fw, jo, oss } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Ge } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { Gf } from "B:/~BUN/root/chunk-zstr1969.js";
import { f1, WXe, _co } from "B:/~BUN/root/chunk-63btkzab.js";
import { PMn, Nce, U7t, Bbr, Fce } from "B:/~BUN/root/chunk-nk59bmc9.js";
import { dMt, doe } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { fu } from "B:/~BUN/root/chunk-kexqfgtm.js";
import { uq } from "B:/~BUN/root/chunk-11wz0rq6.js";
import { was, rCi } from "B:/~BUN/root/chunk-mcdkvptw.js";
import { vS } from "B:/~BUN/root/chunk-zk8rd694.js";
import { xB, RP } from "B:/~BUN/root/chunk-7e6w46ha.js";
import { N$e, DWt, LWt } from "B:/~BUN/root/chunk-08wn5ty9.js";
import { s4s, Jqn } from "B:/~BUN/root/chunk-v4wwr1t7.js";
import { Hme, WMo, zMo, O4e } from "B:/~BUN/root/chunk-bk8e5jj0.js";
import { GC } from "B:/~BUN/root/chunk-3namn0f2.js";
import { D8r } from "B:/~BUN/root/chunk-fhmwhpks.js";
import { iJe } from "B:/~BUN/root/chunk-h29cx855.js";
import { mr } from "B:/~BUN/root/chunk-s20ae4sg.js";
import { ed } from "B:/~BUN/root/chunk-nk52yc3v.js";
import { os } from "B:/~BUN/root/chunk-kj33sgq2.js";
import { STr as code } from "B:/~BUN/root/chunk-e99p2x0p.js";
import { Qb } from "B:/~BUN/root/chunk-ynpwd78y.js";
import { ou } from "B:/~BUN/root/chunk-epyd9ybj.js";
import { bn, cqe } from "B:/~BUN/root/chunk-2631cdbp.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, E, I, oe, C, u, Be, me, B, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { Qy } from "B:/~BUN/root/chunk-tx4kppkg.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { isAbsolute as rt, sep as st } from "path";
var Ne = "io.modelcontextprotocol/clientInfo",
  Z = "io.modelcontextprotocol/clientCapabilities";
function fe(e) {
  let n = D(e) ? e[Z] : void 0,
    r = D(n) ? n.extensions : void 0;
  return D(r) && r[iJe] !== void 0;
}
function ge(e) {
  let {
    [D8r]: n,
    [Ne]: r,
    [Z]: s,
    ...i
  } = e;
  return i;
}
var Oqs = "ListProjectMcpServers",
  Iqs = "RelayProjectMcpMessage",
  Mqs = "CloseProjectMcpServers",
  Dqs = "SetProjectMcpServerEnabled",
  OWt = 100,
  Se = 1000,
  Ue = 8388608,
  he = 8388608,
  Fe = 65280,
  ye = 32768,
  ee = 122,
  We = /^(ping|tools\/call|resources\/(list|read|templates\/list)|prompts\/(list|get))$/,
  Pe = /(?<=^|HTTP )[1-5]\d\d\b/,
  Ve = /^tasks\/(get|cancel)$/,
  $e = {
    code: code,
    message: "The answer to a status request for this task was too large to read, so the task's result will not be delivered. The task may have finished its work: check what it did before calling the tool again, and when you call it again, ask for less data."
  },
  P7 = new Je(() => {
    let e = Qy();
    return {
      listed: {
        project: new Map(),
        plugins: new Map(),
        orgConnectors: new Map()
      },
      round: {},
      repoRoundStarted: Promise.withResolvers(),
      list: (n, ...r) => e.run(n === "orgConnectors" ? n : "", () => ot(n, ...r)),
      setEnabled: (...n) => e.run("", () => Ze(...n)),
      closed: !1
    };
  }),
  ro = p(() => u({
    servers: C(u({
      name: o(),
      status: B(["connected", "failed", "needs-auth", "pending", "disabled"]),
      error: o().optional(),
      initializeResult: me(o(), oe()).optional(),
      toolsListResult: me(o(), oe()).optional(),
      toolPermissions: me(o(), Bie()).optional()
    })).max(OWt),
    cut: I(),
    hooksChecked: I().optional(),
    relaysTasks: I().optional()
  })),
  Ye = p(() => u({
    plugins: I().optional(),
    waitMs: E().optional(),
    only: C(o()).optional(),
    unlessListed: I().optional(),
    tasks: I().optional()
  })),
  Xe = p(() => u({
    server: o(),
    message: u({
      jsonrpc: T("2.0"),
      id: Be([o(), E()]),
      method: o(),
      params: me(o(), oe()).optional()
    })
  })),
  so = p(() => u({
    response: u({
      jsonrpc: T("2.0"),
      id: Be([o(), E()]),
      result: me(o(), oe()).optional(),
      error: u({
        code: E(),
        message: o(),
        data: oe().optional()
      }).optional()
    })
  }));
function F() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js");
}
function ke({
  config: config
}) {
  return "toolPermissions" in config && config.toolPermissions || {};
}
function Me(e) {
  return {
    protocolVersion: e.negotiatedProtocolVersion,
    capabilities: e.capabilities,
    serverInfo: e.serverInfo,
    instructions: e.instructions
  };
}
async function qe(e) {
  let {
    name: name
  } = e;
  if (!Ui(e)) {
    let {
        error: error,
        errorCode: errorCode
      } = Object(e),
      [f] = Pe.exec(`${errorCode} ${error}`) ?? [],
      m = f ? `Server answered HTTP ${f}` : "Connection error",
      error_2 = error && "url" in e.config ? m : error;
    return {
      server: {
        name: name,
        status: e.type,
        error: error_2
      }
    };
  }
  let live;
  try {
    live = await F().mcpClientModule().ensureConnectedClient(e);
  } catch {
    return {
      server: {
        name: name,
        status: "failed",
        error: "Connection error"
      }
    };
  }
  let server = {
    name: name,
    status: "connected",
    initializeResult: Me(live),
    toolPermissions: ke(live)
  };
  if (live.capabilities.tools) try {
    server.toolsListResult = await was(live, {
      method: "tools/list"
    }, {
      timeout: ed()
    });
  } catch {}
  return {
    server: server,
    live: live
  };
}
async function EUr(e, n, r) {
  let {
      list: list,
      round: round
    } = P7.of(r.session),
    l = Ye().safeParse(e ?? {}).data ?? {};
  if (l.only) {
    let m = J(l.waitMs ?? 0, n, {
      unref: !0
    });
    await Promise.race([round.project?.ended, m]), l.waitMs = 0;
  }
  let f = l.plugins ? te : et;
  return list("project", f, n, r, !1, l);
}
function Lqs(e, n, r) {
  let {
    list: list_2
  } = P7.of(r.session);
  return list_2("project", te, n, r, !0);
}
var Qe = p(() => u({
  server: o(),
  enabled: I(),
  requestId: o().max(64).optional()
}));
function Nqs(e, n, r) {
  let s = Qe().safeParse(e);
  if (!s.success) throw Error("Takes a server name, whether it is enabled, and optionally a request id of at most 64 characters");
  let {
      server: server_2,
      enabled: enabled,
      requestId: requestId
    } = s.data,
    {
      setEnabled: setEnabled
    } = P7.of(r.session);
  return setEnabled(server_2, enabled, requestId, n, r);
}
async function Ze(name_2, enabled_2, requestId_2, s, i) {
  let l = P7.of(i.session);
  if (l.closed) throw Error("The repo's MCP servers have been closed");
  let switched = l.switched;
  if (requestId_2 !== void 0 && switched?.requestId === requestId_2 && switched.name === name_2 && switched.enabled === enabled_2) return be(enabled_2, switched.isSaved);
  let S = Object.keys(await te(s, i)).filter(item => !G(i, item, "") && !cqe(item)).slice(0, OWt).includes(name_2),
    h = l.listed.project.get(name_2),
    project = l.round.project,
    O = h ?? project?.rows.find(k => k.name === name_2);
  if (!(S || !enabled_2 && O !== void 0)) throw Error("The listing has no server of that name");
  s.throwIfAborted();
  let {
      storageV5: storageV5
    } = i.toolUseContext(),
    isSaved = await oss(name_2, enabled_2, storageV5);
  l.switched = {
    requestId: requestId_2,
    name: name_2,
    enabled: enabled_2,
    isSaved: isSaved
  };
  let y = be(enabled_2, isSaved);
  if (!enabled_2 && O !== void 0) l.listed.project.delete(name_2), project?.settled.set(name_2, {
    server: {
      name: name_2,
      status: "disabled"
    }
  }), await F().mcpClientModule().clearServerCache(name_2, O.config);
  return y;
}
async function et(e, n) {
  let r = Object.entries(await TUr(n));
  return Object.fromEntries(r.filter(function ([, i]) {
    return i.scope === "project";
  }));
}
async function te(e, n) {
  let {
      storageV5: storageV5_2,
      credentials: credentials
    } = n.toolUseContext(),
    i = Object.entries(await TUr(n)),
    l = await ki(storageV5_2, credentials);
  return Object.fromEntries(i.filter(function ([, m]) {
    let {
      scope: scope,
      pluginSource: h,
      pluginPath = ""
    } = m;
    if (h === void 0) return scope === "project";
    let O = {
      sourceName: h,
      pluginPath: pluginPath
    };
    return !PMn(h) && !Gf(h) && !LWt(O, l, void 0);
  }));
}
async function TUr(e) {
  let {
    storageV5: storageV5_3,
    credentials: credentials_2
  } = e.toolUseContext();
  return await GC(), ir(), Lc(storageV5_3, credentials_2), (Ck() || Nr() ? {
    servers: {}
  } : await fw({}, {
    storageV5: storageV5_3,
    credentials: credentials_2
  })).servers;
}
function tt(e, n, r) {
  let {
      storageV5: storageV5_4,
      credentials: credentials_3
    } = r.toolUseContext(),
    l = n.filter(function ([y]) {
      return !G(r, y, "") && (e === "orgConnectors" || !cqe(y));
    }),
    f = {
      launchPermissionContext: void 0
    },
    unnamed = n.filter(function ([y]) {
      return e === "project" && !jo(y) && (G(f, y, "") || cqe(y));
    }),
    S = Object.fromEntries(l.slice(0, OWt)),
    h = Jqn.of(r.session.host);
  for (let [b, y] of Object.entries(S)) if (h.size < s4s && F().mcpClientModule().isLocalMcpServer(y) && !jo(b)) h.add(b);
  let w = [],
    settled = new Map(),
    M = b => settled.get(b)?.server.status === "disabled",
    v = {
      rows: Object.entries(S).map(function ([name_3, config_2]) {
        return {
          name: name_3,
          type: "pending",
          config: config_2
        };
      }),
      settled: settled,
      unnamed: unnamed,
      cut: l.length > OWt,
      ended: F().mcpClientModule().getMcpToolsCommandsAndResources(function ({
        client: client
      }) {
        if (M(client.name)) return;
        w.push(qe(client).then(k => {
          if (!M(client.name)) settled.set(client.name, k);
        }));
      }, S, storageV5_4, credentials_3, void 0, void 0, e !== "plugins" && r.callerLogsSharedEvents).then(() => Promise.all(w)).finally(() => {
        v.hasEnded = !0;
      }),
      hasEnded: !1
    };
  return v;
}
async function Ce(e, n) {
  let r = new Set();
  for (let {
    name: name_4,
    config: config_3
  } of e) r.add(mr(name_4, config_3));
  for (let {
    name: name_5,
    config: config_4
  } of n) if (!r.has(mr(name_5, config_4))) await F().mcpClientModule().clearServerCache(name_5, config_4);
}
async function ot(e, n, r, s, i = !1, {
  waitMs: waitMs,
  only: only,
  unlessListed: unlessListed,
  tasks = !1
} = {}) {
  let h = P7.of(s.session),
    w = h.round[e];
  if (unlessListed && w !== void 0) return {
    summary: "already listed",
    output: {
      servers: [],
      cut: !1
    }
  };
  let O = only || waitMs !== void 0 && w?.hasEnded === !1 && !Array.from(w.settled.values()).some(({
    server: {
      name: name_6,
      status: status
    }
  }) => status === "disabled" && !jo(name_6));
  if (!O) await w?.ended.catch(() => {});
  if (!i) r.throwIfAborted();
  let M = w;
  if (!M || !O) {
    if (await Ce(h.listed[e].values(), w?.rows ?? []), tasks) bt().sessionFollowsTasks = !0;
    if (M = h.round[e] = i ? {
      rows: [],
      settled: new Map(),
      unnamed: [],
      cut: !1,
      ended: Promise.resolve(),
      hasEnded: !0
    } : tt(e, Object.entries(await n(r, s)), s), e === "project") h.repoRoundStarted.resolve(!0);
  }
  let v = waitMs !== void 0 && J(waitMs, r, {
    unref: !0
  });
  if (await (v ? Promise.race([M.ended, v]) : M.ended), !M.hasEnded) r.throwIfAborted();
  let {
      settled: settled_2,
      rows: rows
    } = M,
    {
      cut: cut
    } = M,
    L = [...settled_2.values()],
    W = M.hasEnded ? [] : rows.filter(item => !settled_2.has(item.name)),
    H = [],
    N = new Map(),
    j = 0,
    x = 0;
  for (let {
    name: name_7,
    type: P
  } of W) L.push({
    server: {
      name: name_7,
      status: P
    },
    live: void 0
  });
  for (let [name_8] of M.unnamed) L.push({
    server: {
      name: name_8,
      status: "failed"
    },
    live: void 0
  });
  for (let {
    server: server_3,
    live: live_2
  } of L) {
    let toolsListResult = server_3.toolsListResult && {
        ...server_3.toolsListResult
      },
      z = toolsListResult ? {
        ...server_3,
        toolsListResult: toolsListResult
      } : server_3;
    if (Array.isArray(toolsListResult?.tools)) {
      cut ||= toolsListResult.tools.length > Se;
      let ue = toolsListResult.tools.slice(0, Se);
      if (toolsListResult.tools = ue.filter(function (item) {
        let {
          name: name_9
        } = Object(item);
        return !G(s, z.name, name_9) && z.toolPermissions?.[name_9] !== "blocked";
      }), live_2?.config.alwaysLoad === !1) for (let le of ue) delete Object(le)._meta?.["anthropic/alwaysLoad"];
    }
    let {
        bytes: bytes,
        values: values,
        depth: depth
      } = Te(z),
      Le = x + values <= Fe && depth <= ee;
    if (H.length === OWt || !Le || j + bytes > Ue) {
      if (cut = !0, live_2) M.settled.set(z.name, {
        server: server_3
      });else if (server_3.status === "pending") M.settled.set(z.name, {
        server: {
          ...server_3,
          status: "disabled"
        }
      });
      continue;
    }
    if (j += bytes, x += values, H.push(z), live_2) N.set(live_2.name, live_2);
  }
  let A = h.listed[e];
  if (h.listed[e] = r.aborted && !i ? A : N, e === "project" && h.listed.project === N && !only) h.closed = i;
  let K = [...h.listed[e].values(), ...W];
  return await Ce(K, [...A.values(), ...rows]), r.throwIfAborted(), {
    summary: `${N.size} of ${H.length} servers connected${cut ? ", cut at a limit" : ""}${tasks ? ", tasks relayed" : ""}`,
    output: {
      servers: only ? H.filter(item => only.includes(item.name)) : H,
      cut: cut,
      ...(tasks && {
        relaysTasks: !0
      })
    }
  };
}
function Fqs(e, n, r) {
  return Gqn("project", e, n, r);
}
async function Gqn(e, n, r, s) {
  let i = Xe().safeParse(n);
  if (!i.success) throw Error("Takes a server name and one JSON-RPC request with an id");
  let {
      server: server_4,
      message: message
    } = i.data,
    m = P7.of(s.session),
    S = m.listed[e].get(server_4);
  if (S === void 0 && e === "project" && m.closed) throw Error("The repo's MCP servers have been closed");
  if (S === void 0) throw Error("The latest listing has no connected server of that name");
  let h = await nt(message, S, r, s);
  return {
    summary: `${message.method}${h.error ? " failed" : ""}`,
    output: {
      response: {
        jsonrpc: "2.0",
        id: message.id,
        ...h
      }
    }
  };
}
async function nt({
  method: method,
  params: params
}, r, signal, i) {
  if (method === "initialize") {
    let protocolVersion = params?.protocolVersion;
    return _e(method, {
      result: {
        ...Me(r),
        protocolVersion: protocolVersion
      }
    });
  }
  let l = Ve.test(method),
    error_3 = {
      code: -32601,
      message: `${method} is not relayed`
    };
  if (!We.test(method) && !l) return {
    error: error_3
  };
  let m = method === "tools/call",
    h = ke(r)[String(params?.name)] === "blocked" || G(i, r.name, params?.name);
  if (m && h) return {
    error: {
      code: -32602,
      message: "tools/call must name a tool that no launch deny rule names and its entry does not block"
    }
  };
  let w = F().mcpClientModule(),
    O = params?._meta,
    M;
  try {
    let v = await w.ensureConnectedClient(r, {
        signal: signal
      }),
      maxTotalTimeout = w.getMcpToolTimeoutMs(v.config),
      y = D(O) ? {
        ...ge(O),
        progressToken: void 0
      } : void 0,
      k = v.protocolEra === "modern" ? rCi(v) : void 0;
    if (l && k === void 0) return {
      error: error_3
    };
    let L = l || m && k !== void 0 && fe(O),
      W = k && {
        [Z]: L ? Klr : _dt(k)
      };
    M = {
      result: await was(v, {
        method: method,
        params: y || W ? {
          ...params,
          _meta: {
            ...y,
            ...W
          }
        } : params
      }, {
        signal: signal,
        ...(L && {
          allowTask: !0
        }),
        ...(m ? {
          timeout: w.getMcpToolIdleTimeoutMs(v.config) || maxTotalTimeout,
          maxTotalTimeout: maxTotalTimeout,
          resetTimeoutOnProgress: !0,
          onprogress: function onprogress() {}
        } : {
          timeout: ed()
        })
      })
    };
  } catch (v) {
    if (signal.throwIfAborted(), F().mcpIsListAuthErrorModule().isListAuthError(v)) await w.clearServerCache(r.name, r.config);
    let {
      code: code_2,
      message: message_2,
      data: data
    } = IMo(v);
    M = code_2 === void 0 ? {
      error: {
        code: -32603,
        message: message_2
      }
    } : {
      error: {
        code: code_2,
        message: message_2,
        data: data
      }
    };
  }
  return _e(method, M);
}
function IMo(e) {
  let {
      code: code_3,
      data: data_2
    } = Object(e),
    {
      getMcpErrorCode: getMcpErrorCode
    } = F().mcpSdkErrorClassificationModule(),
    code_4 = code_3 === "REQUEST_TIMEOUT" ? -32001 : getMcpErrorCode(e),
    {
      status: status_2 = code_3
    } = Object(data_2),
    f = d(e).replace(/^MCP error -?\d+: /, ""),
    [m] = Pe.exec(`${status_2} ${f}`) ?? [],
    S = m ? `Server answered HTTP ${m}` : "Connection error";
  return {
    code: code_4,
    message: code_4 === void 0 ? S : f,
    data: data_2
  };
}
function _e(e, n) {
  let {
    bytes: bytes_2,
    values: values_2,
    depth: depth_2
  } = Te(n);
  if (bytes_2 > he || values_2 > ye || depth_2 > ee) {
    let message_3 = `The answer to ${e} is over ${he} bytes, ${ye} fields and list elements or ${ee} levels deep`;
    return {
      error: e === "tasks/get" ? $e : {
        code: -32603,
        message: message_3
      }
    };
  }
  return n;
}
function Te(e) {
  let values_3 = 0,
    depth_3 = 0,
    weakMap = new WeakMap();
  try {
    let i = _(e, function (f, m) {
      if (values_3++, typeof m === "object" && m !== null) {
        let S = (weakMap.get(Object(this)) ?? 0) + 1;
        weakMap.set(m, S), depth_3 = Math.max(depth_3, S);
      }
      return m;
    });
    return {
      bytes: Buffer.byteLength(i),
      values: values_3,
      depth: depth_3
    };
  } catch {
    return {
      bytes: 1 / 0,
      values: 1 / 0,
      depth: 1 / 0
    };
  }
}
function G({
  launchPermissionContext: launchPermissionContext
}, serverName, r) {
  let s = gr(to(serverName))?.serverName;
  if (typeof r !== "string" || s !== bn(serverName)) return !0;
  if (launchPermissionContext === void 0) return !1;
  let i = {
    name: r,
    mcpInfo: {
      serverName: serverName,
      toolName: r
    }
  };
  return Wl(launchPermissionContext).some(function (item) {
    return X_(launchPermissionContext, i, item);
  });
}
function be(enabled_3, n) {
  if (!n) throw Error("The choice could not be saved");
  return {
    summary: enabled_3 ? "Saved as on" : "Switched off",
    output: {
      enabled: enabled_3
    }
  };
}
var MMo = "this machine holds no sign-in, so the organization's HTTP hook lists cannot be read";
function Vqn() {
  return Boolean(sH());
}
function CUr() {
  return vp() ? RP() : xB();
}
async function Oun(e) {
  if (await Ao(CUr(), e, () => new Ke()), Ge.isSandboxingEnabled()) await Ge.initialize();
}
async function RUr(e, n, r, s, i, l, f) {
  if (!Vqn() && f === void 0) {
    let w = MMo;
    return {
      stdout: "",
      stderr: w,
      output: w,
      status: 1
    };
  }
  let m = await OOt({
    ...e,
    timeout: s ?? e.timeout
  }, n, _(r), i, fu, void 0, void 0, !0, {
    isRepoHookOfThisContainer: !0,
    flagLists: fM({
      ...(Vqn() ? void 0 : f)
    }, l, fj)
  });
  if (m.aborted) return {
    stdout: "",
    stderr: "",
    output: "",
    status: 1,
    aborted: !0
  };
  let stdout = m.ok ? m.body : "",
    stderr = m.error ?? "";
  return {
    stdout: stdout,
    stderr: stderr,
    output: `${stdout}${stderr}`,
    status: m.ok ? 0 : 1,
    ...(m.statusCode !== void 0 && {
      httpStatus: m.statusCode
    })
  };
}
function Hqs(e, n, r) {
  let {
    listed: listed,
    round: round_2
  } = P7.of(r);
  return !M7r(n) && listed.project.size === 0 && round_2.project === void 0 && SI(e.server)?.scope === "project";
}
function AUr({
  listed: listed_2,
  round: round_3
}) {
  let {
    rows: rows_2 = [],
    settled: settled_3,
    hasEnded: hasEnded
  } = round_3.project ?? {};
  return [...listed_2.project.values(), ...(hasEnded ? [] : rows_2).flatMap(item => {
    let f = settled_3?.get(item.name);
    return f === void 0 ? [item] : f.live ? [f.live] : [];
  })];
}
function DMo(e, n) {
  return AUr(P7.of(n)).some(({
    name: name_10
  }) => name_10 === e.server) || SI(e.server)?.scope === "project";
}
function xUr() {
  return o5() || FCo(NJ()) !== void 0;
}
function ve(e, {
  accountListing: accountListing,
  lastCompleteList: lastCompleteList
}, s, i) {
  try {
    if (!Bbr()) return "sync_not_armed";
    if (!Fce() || oK()) return "sync_off";
    if (accountListing === "refused") return "listing_refused";
    if (lastCompleteList === null || s === null) return "unknown";
    let l = Um(e),
      f = new Set();
    for (let [S, h] of lastCompleteList.dirsById) for (let w of h) if (Um(PEe(w)) === l) f.add(S);
    if (f.size === 0) return "absent_from_listing";
    let m = s.find(item => item.bucket === lastCompleteList.bucket && item.pluginId !== void 0 && f.has(item.pluginId));
    switch (m?.outcome) {
      case void 0:
        return "no_copy_at_load";
      case "held_back":
        return "held_back";
      case "not_loaded":
        {
          let S = vHe(m.pluginName, Pi);
          return i.some(item => item.type === "synced-plugin-shadowed" && item.source === S) ? "local_copy_wins" : "not_loaded";
        }
      case "loaded":
        return "unknown";
    }
  } catch (error) {
    return V("warn", "plugins_sync_absence_unreadable"), a(error), "unknown";
  }
}
var $qs = "RunPluginHook",
  Uqs = "RunPluginHookIf",
  Bqs = "RunPluginHttpHook",
  PUr = p(() => u({
    allowedHttpHookUrls: C(o()).optional(),
    httpHookAllowedEnvVars: C(o()).optional()
  }).optional()),
  LMo = p(() => u({
    pluginId: o(),
    hookEvent: B(Tc),
    command: o(),
    args: C(o()).optional(),
    headers: me(o(), o()).optional(),
    allowedEnvVars: C(o()).optional(),
    if: o().optional(),
    timeout: E().positive().optional(),
    jsonInput: o(),
    hookIndex: E().int().nonnegative().optional(),
    isOrgRequired: I().optional(),
    flagLists: PUr()
  })),
  it = p(() => u({
    session_id: o().regex(Bfr),
    cwd: o(),
    effort: u({
      level: o().regex(Bfr)
    }).optional()
  })),
  Ie = p(() => me(o(), oe())),
  at = /(?:^|_)(?:path|dir|cwd|directory)$/;
var ct = new Set(["file_path", "trigger_file_path", "parent_file_path"]),
  x4e = 1048576;
var xe = "this machine's policy cannot be read for now",
  ut = "this machine's policy would stop claude from starting",
  X = "The hook printed more than is passed on.",
  re = 16384,
  lt = new Set(["reason", "stopReason", "systemMessage", "additionalContext", "permissionDecisionReason", "message", "sessionTitle", "classifierContext"]),
  dt = new Set(["updatedToolOutput", "updatedMCPToolOutput"]),
  Re = "A hook changed a tool's result, and the change was too long to pass on, so Claude read the result as the tool gave it.",
  pt = new Set(["terminalSequence", "rewakeSummary", "metrics", "watchPaths"]);
function Srt(e, n) {
  if (N$e(e) <= x4e) return e;
  let r = {
    ...e,
    output: X,
    missingScript: void 0,
    repairedInput: void 0
  };
  if (N$e(r) <= x4e) return r;
  let s = {
    ...r,
    stderr: X,
    ...(HQo(n, e.status) && {
      stdioClosedWithoutEnd: !0
    })
  };
  if (N$e(s) <= x4e) return s;
  if (e.status !== 2 && !e.stdioIncomplete && !e.stdioClosedWithoutEnd && Q8.has(n) && !qre(n)) return {
    stdout: "",
    stderr: X,
    output: X,
    status: 1,
    spawnFailed: !0,
    ...(e.aborted && {
      aborted: !0
    })
  };
  let i = {
      ...s,
      stdout: "",
      stdioClosedWithoutEnd: !0
    },
    l = {
      ...i,
      stderr: e.stderr
    };
  return e.stderr !== "" && N$e(l) <= x4e ? l : i;
}
function Kqn(e, n) {
  if (e.status === 2 || e.aborted || e.stdioIncomplete || e.stdioClosedWithoutEnd || Srt(e, n).stdout === e.stdout) return e;
  let {
    json: json,
    validationError: validationError
  } = b6(e.stdout);
  if (json !== void 0) try {
    let i = wt(je(json)),
      stdout_2 = _(i),
      f = i.continue === !1 || i.decision === "block";
    return {
      ...e,
      stdout: f && Srt({
        ...e,
        stdout: stdout_2
      }, n).stdout !== stdout_2 ? _(Ct(i)) : stdout_2
    };
  } catch (error) {
    return t(`a hook's answer could not be written again: ${d(error)}`, {
      level: "error"
    }), e;
  }
  return {
    ...e,
    stdout: validationError === void 0 ? se(e.stdout) : `${se(e.stdout)}}`
  };
}
var Bn = p(() => u({
    stdout: o(),
    stderr: o(),
    output: o(),
    status: E(),
    aborted: I().optional(),
    spawnFailed: I().optional(),
    notStarted: I().optional(),
    stdioIncomplete: I().optional(),
    stdioClosedWithoutEnd: I().optional(),
    runsInBackground: I().optional(),
    missingScript: u({
      scriptPath: o().max(x4e),
      cutFrom: o().max(x4e).optional(),
      isRepeat: I()
    }).optional(),
    repairedInput: Ie().optional(),
    httpStatus: E().int().optional(),
    applies: T(!0).optional(),
    inSessionCwd: o().max(4096).optional(),
    withheld: T(!0).optional()
  })),
  ft = "this machine has not settled its plugins yet: ask again",
  mt = "no enabled plugin with that id",
  gt = "anthropic/pluginAbsence",
  Oe = "the plugin declares no such hook for that event here",
  ie = "this machine keeps the plugin's hooks off (its settings or policy, how it was launched, or a folder nobody has trusted)",
  St = "this machine could not judge the hook's condition";
class Y extends vrt {}
class q extends Error {}
async function NMo(e, n, r) {
  let s = r.toolUseContext();
  return Iun(e, s, i => DWt(r, s.abortController.signal, i));
}
async function jqs(e, n, r) {
  let s = r.toolUseContext();
  return Iun(e, s, i => DWt(r, s.abortController.signal, i), "http");
}
async function Iun(e, n, r, s = "command", i = !1) {
  let {
      storageV5: storageV5_5,
      credentials: credentials_4
    } = n,
    m = n.abortController.signal,
    {
      pluginId: pluginId,
      hookEvent: hookEvent,
      command: command,
      args: args,
      headers: headers,
      allowedEnvVars: allowedEnvVars,
      if: b,
      timeout: timeout,
      jsonInput: jsonInput,
      hookIndex: hookIndex,
      isOrgRequired: isOrgRequired,
      flagLists: flagLists
    } = LMo().parse(e);
  if (s === "http" && di(pluginId) !== Pi) throw Error("only an account plugin's http hooks are sent for another machine");
  if (s === "http" && (hookEvent === "SessionStart" || hookEvent === "Setup")) throw new Y(Oe);
  let N = s === "http" && !i && Qb();
  if (s === "http" && !i && !N) await Oun(m);
  if (ir(), ne(pluginId), Gf(pluginId)) throw Error("a built-in plugin's hooks are not run for another machine");
  let j = await MWt(pluginId, storageV5_5, credentials_4);
  if (j.plugin === void 0 && r !== void 0) {
    let P = await r(async () => (j = await MWt(pluginId, storageV5_5, credentials_4), j.plugin !== void 0));
    if (j.plugin === void 0) j = await MWt(pluginId, storageV5_5, credentials_4);
    if (j.plugin === void 0) HMo(pluginId, P, n.session);
  }
  let {
    plugin: plugin
  } = j;
  if (plugin === void 0) throw new Y(mt, di(pluginId) === Pi ? {
    [gt]: ve(pluginId, n.session.pluginsSync, Wwt(), j.warnings)
  } : void 0);
  OUr(plugin);
  let A = Xfr(plugin)[hookEvent].flatMap(item => item.hooks).find(item => item.type === "http" ? s === "http" && item.url === command && ln(item.headers, headers) && ln(item.allowedEnvVars, allowedEnvVars) && item.if === b : s === "command" && item.type === "command" && item.command === command && ln(item.args, args) && (b === void 0 || item.if === b));
  if (A === void 0 || A.type !== "command" && A.type !== "http") {
    let {
        errors: errors
      } = await ki(storageV5_5, credentials_4),
      U = plugin;
    if (errors.some(item => "plugin" in item && item.plugin === U.name)) throw Error("this machine could not read the plugin's hooks for now");
    throw new Y(Oe);
  }
  let K = wrt(jsonInput);
  if (b !== void 0 && A.if && !(await krt(A.if, K))) return {
    summary: "its condition does not hold",
    output: {
      stdout: "",
      stderr: "",
      output: "",
      status: 0
    }
  };
  m.throwIfAborted(), ir(), ne(pluginId), ne(plugin.source), OUr(plugin);
  let R = await qqn(hookEvent, K.stdin, A.type === "http" ? timeout : timeout ?? A.timeout, m, () => isOrgRequired === !0 || dMt(pluginId) && dMt(plugin.source), ie);
  if (R === "answered") return Iun(e, n, r, s, i);
  if (R !== void 0) return R;
  if (A.type === "http") {
    if (N) return await Oun(m), Iun(e, n, r, s, !0);
    let P = await RUr({
      ...A,
      timeout: timeout
    }, hookEvent, K.stdin, timeout, m, flagLists, void 0);
    return {
      summary: `exit ${P.status}`,
      output: Srt({
        ...Kqn(P, hookEvent),
        repairedInput: K.repairedInput
      }, hookEvent)
    };
  }
  return IWt({
    ...A,
    timeout: timeout ?? A.timeout
  }, hookEvent, K, hookIndex, n, {
    root: plugin.path,
    id: plugin.source
  });
}
function wrt(e) {
  let n = JSON.parse(e),
    r = it().parse(n),
    cwd = pe(),
    stdin = ht(Ie().parse(n), h => rt(h) && ou(Oo(), h, !1), h => Gl().includes(h));
  if (stdin.cwd = cwd, stdin.hook_event_name === "ConfigChange") {
    let h = t4s().find(([w]) => w === stdin.source);
    stdin.file_path = (h && un(h[1])) ?? "";
  }
  let l = typeof stdin.tool_name === "string" ? wn(O4e(!0), stdin.tool_name) : void 0,
    f = D(stdin.tool_input) ? stdin.tool_input : {},
    m = l && WMo(l, f),
    repairedInput = D(m) ? {
      ...m,
      ...xg(f, Hme)
    } : void 0;
  if (repairedInput) stdin.tool_input = repairedInput;
  return {
    envContext: doe(r),
    cwd: cwd,
    stdin: stdin,
    repairedInput: repairedInput
  };
}
function ht({
  scratchpad_dir: scratchpad_dir,
  ...n
}, r, s) {
  let i = {
      ...n,
      transcript_path: ""
    },
    l = n.hook_event_name === "InstructionsLoaded" && (n.memory_type === "Project" || n.memory_type === "Local");
  for (let [f, m] of Object.entries(n)) if (at.test(f) && !(l && ct.has(f) && typeof m === "string" && r(m)) && !(n.hook_event_name === "DirectoryAdded" && f === "directory" && typeof m === "string" && s(m))) i[f] = "";
  if (!i.file_path) i.globs = void 0;
  return i;
}
async function krt(e, {
  stdin: stdin_2,
  cwd: cwd_2
}) {
  let s = [...O4e(!0), ...vS()],
    i = typeof stdin_2.tool_name === "string" ? wn(s, stdin_2.tool_name) : void 0,
    l = Oet().safeParse(i !== void 0 && D(stdin_2.tool_input) ? {
      ...stdin_2,
      tool_input: zMo(i, stdin_2.tool_input)
    } : stdin_2),
    f = l.success ? await ios(e, l.data, s, cwd_2) : null;
  if (f === null) throw new Y(St);
  return f;
}
async function IWt(hook, hookEvent_2, {
  envContext: envContext,
  cwd: cwd_3,
  stdin: stdin_3,
  repairedInput: repairedInput_2
}, hookIndex_2, {
  abortController: abortController,
  storageV5: storageV5_6,
  credentials: credentials_5
}, plugin_2, managed = !1, skillRoot, v = !1) {
  let b = os(abortController.signal, {
      timeoutMs: hook.timeout ? hook.timeout * 1000 : void 0
    }),
    y = await oos({
      hook: hook,
      hookEvent: hookEvent_2,
      jsonInput: _(stdin_3),
      envContext: envContext,
      project: {
        originalCwd: Ee(),
        projectRoot: Oo()
      },
      cwd: cwd_3,
      hookIndex: hookIndex_2,
      signal: b.signal,
      plugin: plugin_2,
      skillRoot: skillRoot,
      managed: managed,
      fitted: k => ({
        ...Srt(Kqn(k, hookEvent_2), hookEvent_2),
        ...(v && {
          stdioIncomplete: !1,
          stdioClosedWithoutEnd: !1
        })
      }),
      storageV5: storageV5_6,
      credentials: credentials_5
    }).finally(() => {
      if (b.cleanup(), hookEvent_2 === "ConfigChange") r4s();
    });
  if (yt.has(hookEvent_2)) uq();
  return {
    summary: `exit ${y.status}`,
    output: Srt({
      ...y,
      repairedInput: repairedInput_2
    }, hookEvent_2)
  };
}
async function qqn(hookEventName, n, r, s, i, l) {
  if (!Qb()) return;
  try {
    if (i()) return;
  } catch (error) {
    a(error);
  }
  if (hookEventName === "PreToolUse" || hookEventName === "SessionStart" || hookEventName === "Setup" || u7r.has(hookEventName)) {
    if (await we(Axt(s), Math.min((r ?? 1 / 0) * 1000, _co)), !Qb()) return g("hooks_organization_served_hold"), "answered";
  }
  try {
    WXe(), c("hooks_organization_served_hold", f1.fetches?.() === !0 ? "settings_unread" : "never_asks");
  } catch (error) {
    a(error);
  }
  if (t(`a person's ${hookEventName} hook that another machine sent was not run: this machine has not read its organization's managed settings yet`, {
    level: "warn"
  }), hookEventName !== "PreToolUse") throw new q(l);
  let f = n.permission_mode === "bubble" ? "default" : Pg(n.permission_mode),
    m = _({
      hookSpecificOutput: {
        hookEventName: hookEventName,
        permissionDecision: f === void 0 || f === "bypassPermissions" ? TTn : "ask",
        permissionDecisionReason: permissionDecisionReason
      }
    });
  return {
    summary: "not run: the organization's managed settings have not been read yet",
    output: {
      stdout: m,
      stderr: "",
      output: m,
      status: 0,
      notStarted: !0
    }
  };
}
function FMo() {
  if (J_()) throw new q(xe);
}
function ne(e) {
  if (FMo(), Yqn(), !pCr(e) || pW()) throw new Y(ie);
}
function Yqn() {
  if (xUr()) throw new q(J_() ? xe : ut);
}
function HMo(e, n, r) {
  let {
    accountListing: accountListing_2,
    syncErrors: syncErrors
  } = r.pluginsSync;
  if (!n || accountListing_2 === "pending" || syncErrors.some(item => {
    if (!("plugin" in item) || item.plugin === void 0) return !1;
    try {
      return PEe(Aee(item.plugin, st)) === e;
    } catch {
      return !1;
    }
  })) throw new q(ft);
}
function OUr(e) {
  if (di(e.source) === Pi && Nce()) {
    if (U7t()) throw new Y(ie);
    throw Error("this machine's settings hold account plugins for now");
  }
}
var yt = new Set(["SessionStart", "Setup", "CwdChanged", "FileChanged"]);
async function MWt(e, n, r) {
  let {
    enabled: enabled_4,
    warnings: warnings
  } = await ki(n, r);
  return {
    plugin: di(e) === Pi ? enabled_4.find(item => di(item.source) === Pi && PEe(item.path) === e) : enabled_4.find(item => item.source === e),
    warnings: warnings
  };
}
function se(e) {
  return e.length <= re ? e : `${Q(e, re)}
${X}`;
}
function je(e) {
  let n = Object.entries(e).filter(([r, s]) => !pt.has(r) || _(s).length <= re);
  return Er(Object.fromEntries(n), (r, s) => {
    if (typeof r === "string") return lt.has(s) ? se(r) : r;
    return (s === "hookSpecificOutput" || s === "decision") && D(r) ? je(r) : r;
  });
}
function Ct(e) {
  let hookSpecificOutput = e.hookSpecificOutput;
  if (!D(hookSpecificOutput)) return e;
  let r = Yi(hookSpecificOutput, (l, f) => dt.has(f));
  if (Object.keys(r).length === Object.keys(hookSpecificOutput).length) return e;
  let {
    classifierContext: classifierContext,
    ...hookSpecificOutput_2
  } = r;
  return {
    ...e,
    hookSpecificOutput: hookSpecificOutput_2,
    systemMessage: Ae(e.systemMessage),
    ...(e.continue === !1 && {
      stopReason: Ae(e.stopReason)
    })
  };
}
function wt(e) {
  let hookSpecificOutput_3 = e.hookSpecificOutput;
  if (!D(hookSpecificOutput_3) || !("updatedToolOutput" in hookSpecificOutput_3)) return e;
  let {
    updatedMCPToolOutput: updatedMCPToolOutput,
    ...hookSpecificOutput_4
  } = hookSpecificOutput_3;
  return {
    ...e,
    hookSpecificOutput: hookSpecificOutput_4
  };
}
function Ae(e) {
  return typeof e === "string" ? `${Re}
${e}` : Re;
}
export { Oqs, Iqs, Mqs, Dqs, OWt, P7, EUr, Lqs, Nqs, TUr, Fqs, Gqn, IMo, MMo, Vqn, CUr, Oun, RUr, Hqs, AUr, DMo, xUr, $qs, Uqs, Bqs, PUr, LMo, x4e, Srt, Kqn, NMo, jqs, Iun, wrt, krt, IWt, qqn, FMo, Yqn, HMo, OUr, MWt };