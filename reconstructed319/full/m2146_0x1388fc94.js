// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  J,
  P0
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  ae
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  to,
  Dd
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  qL
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  bt
} from "B:/~BUN/root/chunk-ja520myc.js";
import {
  zw,
  Vd,
  Wxt,
  w3t,
  Gw,
  NQ,
  j5e,
  doo,
  Gu,
  oZ,
  SI,
  KOt,
  jo,
  Vo
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  oCi
} from "B:/~BUN/root/chunk-mcdkvptw.js";
import {
  K$
} from "B:/~BUN/root/chunk-7wcc5pbk.js";
import {
  SIe,
  zr,
  fI,
  KC,
  GRt,
  Bkn,
  tsr
} from "B:/~BUN/root/chunk-7jbamvvk.js";
import {
  Hfn,
  $fn,
  F6s
} from "B:/~BUN/root/chunk-9w9qpsmm.js";
import {
  Che
} from "B:/~BUN/root/chunk-zkjxrhgg.js";
import {
  p1e,
  aF
} from "B:/~BUN/root/chunk-s74geht1.js";
import {
  $Pe,
  W8s,
  p5n,
  UGt,
  Jmn
} from "B:/~BUN/root/chunk-j9h732qg.js";
import {
  NG
} from "B:/~BUN/root/chunk-59sqv3yw.js";
import {
  Pui
} from "B:/~BUN/root/chunk-m96pt27x.js";
import {
  _Ie,
  bIe
} from "B:/~BUN/root/chunk-bq7y7t0q.js";
import {
  xP
} from "B:/~BUN/root/chunk-kb3hq3bg.js";
import {
  pge
} from "B:/~BUN/root/chunk-jzac91sc.js";
import {
  RS,
  Ssr
} from "B:/~BUN/root/chunk-pyp8n05h.js";
import {
  mr
} from "B:/~BUN/root/chunk-s20ae4sg.js";
import {
  H_e,
  pht,
  Due,
  fWi,
  wNt,
  wTr,
  hvs,
  pWi
} from "B:/~BUN/root/chunk-e99p2x0p.js";

function Q() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule()
}

function Z0o(e, n, o, S) {
  if (Object.hasOwn(n, e)) return n[e];
  if (o && !oZ.has(o.scope)) return o;
  return S ? S(e) : o ?? null
}

function x6s(e, n) {
  if (!e.clients.some((o) => o.name === n)) return e;
  return {
    ...e,
    clients: e.clients.map((o) => o.name === n ? {
      name: n,
      type: "disabled",
      config: o.config
    } : o),
    tools: NQ(e.tools, n)
  }
}

function e1r(e) {
  return e.client.type === "needs-auth" ? {
    ...e,
    tools: aF(e.client.name, e.client.config)
  } : e
}

function t1r(e, n) {
  let o = to(n);
  return {
    tools: e.tools.filter((S) => Dd(S, n, o)),
    commands: e.commands.filter((S) => Gw(S, n)),
    resources: e.resources[n],
    resourceTemplates: e.resourceTemplates[n]
  }
}

function jrt(e, n) {
  let o = n.type !== "failed" ? Gu(e, n.config) : void 0;
  if (o === "managed-policy") return N(e, n.config, o);
  if (jo(e) && !Ssr(n)) return {
    name: e,
    type: "disabled",
    config: n.config
  };
  return o ? N(e, n.config, o) : void 0
}

function N(e, n, o) {
  return {
    name: e,
    type: "failed",
    config: n,
    ...RS(o, e, n)
  }
}

function oe(e, n) {
  return n.asked || e === void 0 || pge(n.client, e.config) === n.client ? n : xP(e.config, n)
}

function se(e, n, o) {
  let {
    incoming: S,
    result: w,
    outcome: E
  } = o;
  if (E === "refused") {
    let M = S.asked ? w.client : UGt(w.client, n.config);
    return M === w.client ? w : {
      ...w,
      client: M
    }
  }
  if (pge(w.client, n.config) === w.client) return w;
  let C = oe(n, S);
  if (C.client.type === "disabled") return C;
  let v = jrt(e, C.client);
  return v ? {
    ...C,
    client: v,
    tools: [],
    commands: []
  } : C
}

function mPe(e, n, o) {
  let {
    getAppState: S,
    setAppState: w,
    getDynamicMcpState: E,
    setDynamicMcpState: C
  } = e, v = () => {
    if (o.client.type === "connected") Q().detachAndCloseConnection(o.client).catch(() => {})
  }, M = S().mcp.clients.find((f) => f.name === n), i = E().clients.find((f) => f.name === n);
  if (!M && !i) return v(), "dropped";
  let R = mr(n, o.client.config),
    P = (f) => f !== void 0 && mr(n, f.config) !== R;
  if (P(M) || P(i)) return t(`[MCP] ${n}: dropping a settlement whose slot config changed mid-flight`), v(), "dropped";
  if (GRt(o.client.config, o.attemptEpoch)) return t(`[MCP] ${n}: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)`), v(), "superseded";
  let T = oe(M ?? i, o),
    p = T,
    A = "applied";
  if (T.client.type !== "disabled") {
    let f = jrt(n, T.client);
    if (f) {
      if (v(), f.type === "failed") Q().dropDiscoveryEntry(n, T.client.config).catch(() => {});
      p = {
        client: f,
        tools: [],
        commands: [],
        resources: [],
        attemptEpoch: o.attemptEpoch
      }, A = "refused"
    }
  }
  if (w((f) => {
      let x = $Pe(f, n, p, {
          appendIfAbsent: p.client.config.type !== "sdk"
        }),
        j = !!p.resources && p.resources.length > 0,
        B = !!p.resourceTemplates && p.resourceTemplates.length > 0;
      return j && B ? x : {
        ...x,
        mcp: {
          ...x.mcp,
          resources: j ? x.mcp.resources : zw(x.mcp.resources, n),
          resourceTemplates: B ? x.mcp.resourceTemplates : zw(x.mcp.resourceTemplates, n)
        }
      }
    }), !i) return A;
  let s = to(n),
    h = E(),
    I = M === void 0 ? p : se(n, i, {
      incoming: o,
      result: p,
      outcome: A
    });
  return C({
    ...h,
    clients: h.clients.map((f) => f.name === n ? I.client : f),
    tools: [...h.tools.filter((f) => !Dd(f, n, s)), ...I.tools]
  }), A
}

function VYn(e) {
  if (!Vd()) return;
  let {
    getAppState: n,
    setAppState: o,
    getDynamicMcpState: S,
    setDynamicMcpState: w,
    storageV5: E,
    credentials: C,
    force: v = !1,
    spareUnchangedFrom: M
  } = e;
  p1e(E);
  let i = Q(),
    R = bt();
  if (!i.mcpIdentityChangedSinceLastCheck() && !v) return R.headlessConnectorMountInFlight;
  let P = !v || !Wxt(SIe()),
    T = S(),
    p = [...n().mcp.clients, ...T.clients],
    A = new Set,
    s = new Set,
    h = new Set,
    I = new Set;
  if (M) {
    for (let r of p) I.add(r.name);
    for (let r of p)
      if (!M.has(r) || r.type === "pending") I.delete(r.name)
  }
  for (let r of p) {
    if (!KC(r.config) || I.has(r.name)) {
      h.add(mr(r.name, r.config));
      continue
    }
    if (i.disposeServerConnectionDetached(r.name, r.config), r.config.scope === "claudeai") {
      s.add(r.name);
      continue
    }
    if (r.type !== "disabled") A.add(r.name)
  }
  i.evictAllMcpMemosOnIdentityChange(h, tsr(p)), K$().clear();
  let f = Object.create(null),
    x = new Set,
    j = e.getHostOwnedConfigs?.() ?? T.configs;
  for (let r of p) {
    if (!A.has(r.name) || !P) continue;
    let y = f[r.name] ?? Z0o(r.name, j, r.config, SI);
    if (!y) {
      x.add(r.name);
      continue
    }
    let H = f[r.name] ??= y;
    if (H !== r.config && mr(r.name, H) !== mr(r.name, r.config)) t(`[MCP] ${r.name}: appState and dynamic-store rows disagree on config at the identity boundary \u2014 converging both under the ${Object.hasOwn(j,r.name)?"host's":"appState row's"} config and re-dialing it`, {
      level: "warn"
    })
  }
  let B = new Map,
    W = KOt() && P,
    F = Object.create(null);
  for (let [r, y] of Object.entries(f)) {
    if (W && doo(y)) {
      F[r] = y, delete f[r];
      continue
    }
    let H = Gu(r, y);
    if (H) B.set(r, N(r, y, H)), delete f[r]
  }
  let U = [...A, ...s];
  if (U.length > 0) {
    let r = U.map((a) => [a, to(a)]),
      y = (a) => r.some(([k, L]) => Dd(a, k, L)),
      H = (a) => s.has(a.name) ? [] : A.has(a.name) ? [!P || x.has(a.name) ? Bkn(a.name, a.config) : B.get(a.name) ?? {
        name: a.name,
        type: "pending",
        config: f[a.name] ?? F[a.name] ?? a.config
      }] : [a];
    o((a) => ({
      ...a,
      mcp: {
        ...a.mcp,
        clients: a.mcp.clients.flatMap(H),
        tools: NG(a.mcp.tools, y),
        commands: NG(a.mcp.commands, (k) => U.some((L) => Gw(k, L))),
        resources: zw(a.mcp.resources, U),
        resourceTemplates: zw(a.mcp.resourceTemplates, U)
      }
    })), w({
      ...T,
      clients: T.clients.flatMap(H),
      tools: T.tools.filter((a) => !y(a))
    })
  }
  let u, O;
  if (W) {
    let y = F6s({
      getClients: () => n().mcp.clients,
      getSuppressedPluginServers: () => n().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: (a) => {
        let k = new Set;
        if (o((_) => {
            let X = a(_.mcp),
              ee = new Set(X.clients.map((Y) => Y.name));
            return k = new Set(_.mcp.clients.filter((Y) => !ee.has(Y.name)).map((Y) => Y.name)), {
              ..._,
              mcp: X
            }
          }), k.size === 0) return;
        let L = S();
        if (!L.clients.some((_) => k.has(_.name))) return;
        let V = [...k].map((_) => [_, to(_)]);
        w({
          ...L,
          clients: L.clients.filter((_) => !k.has(_.name)),
          tools: L.tools.filter((_) => !V.some(([X, ee]) => Dd(_, X, ee)))
        })
      }
    }, E, C);
    y.settled.catch(() => {}), O = y.mounted.catch(() => "mounted");
    let H = y.mounted.then(() => {}, (a) => t(`MCP connector refetch after account switch failed: ${d(a)}`, {
      level: "warn"
    })).finally(() => {
      if (R.headlessConnectorMountInFlight === H) R.headlessConnectorMountInFlight = void 0
    });
    R.headlessConnectorMountInFlight = u = H
  }
  if (A.size === 0 || !P) return u;
  let Z = (r) => {
      mPe(e, r.client.name, r)
    },
    z = {
      getClients: () => [...n().mcp.clients, ...S().clients],
      getSuppressedPluginServers: () => n().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: (r) => o((y) => ({
        ...y,
        mcp: r(y.mcp)
      }))
    },
    q = (r) => {
      i.getMcpToolsCommandsAndResources(Z, r, E, C).catch((y) => t(`MCP re-dial after account switch failed: ${d(y)}`, {
        level: "warn"
      })).finally(() => {
        $fn(r, z, E, Z).catch((y) => t(`MCP re-dial retry after account switch failed: ${d(y)}`, {
          level: "warn"
        }))
      })
    };
  if (q(f), Object.keys(F).length === 0 || !O) return u;
  let G = zr(),
    K = O.then((r) => {
      if (r === "superseded" || !fI(G)) return;
      let y = Object.create(null);
      for (let [H, a] of Object.entries(F)) {
        let k = Gu(H, a);
        if (k) Z({
          client: N(H, a, k),
          tools: [],
          commands: [],
          attemptEpoch: G
        });
        else y[H] = a
      }
      if (Object.keys(y).length > 0) q(y)
    }).catch((r) => t(`MCP re-dial of held claude.ai proxy entries after account switch failed: ${d(r)}`, {
      level: "warn"
    })),
    D = Promise.all([u, K]).then(() => {}).finally(() => {
      if (R.headlessConnectorMountInFlight === D) R.headlessConnectorMountInFlight = void 0
    });
  return R.headlessConnectorMountInFlight = D, D
}

function eLo(e, n, o, S) {
  let w = o?.type === "connected" && o.client === e.client,
    E = o !== void 0 && o.type !== "disabled" && mr(e.name, o.config) === mr(e.name, n);
  return !w && (!S || !E)
}
var re = 5,
  ie = 1000;

function P6s(e) {
  let {
    getAppState: n,
    getDynamicMcpState: o,
    now: S = Date.now
  } = e, w = new WeakSet, E = new WeakMap, C = new WeakMap, v = (M, i, R) => {
    let P = i > 1 ? wNt(i - 1) - R : 0,
      T = [...n().mcp.clients, ...o().clients].some((p) => p.type === "connected" && p.client === M.client);
    if (P <= 0 || !T || e.isControlReconnectInFlight(M.name)) return 0;
    try {
      e.onHeldOff?.(i, P)
    } catch (p) {
      t(`MCP reconnect hold-off observer failed for ${M.name}: ${d(p)}`, {
        level: "warn"
      })
    }
    return ae(M.name, `${M.config.type} transport closed again soon after it connected: reconnecting in ${P}ms`), P
  };
  return (M) => {
    for (let i of M) {
      if (i.type === "connected") C.set(i.client, i);
      if (i.type !== "connected" || w.has(i.client) || !le(i.config)) continue;
      w.add(i.client);
      let R = S(),
        P = (T) => {
          if (Vo() || e.isRunEnding()) return;
          i.cleanup().catch(() => {});
          let p = Math.max(0, S() - R),
            A = p < fWi ? (E.get(i.client) ?? 0) + 1 : 0;
          (async () => {
            let s = v(i, A, p),
              h = e.sleep ?? ce;
            if (s > 0) await h(s);
            let I = () => C.get(i.client) ?? i;
            for (let f = 0; s > 0 && f < re && await Q().hasUnsettledDial(I().name, I().config); f++) await h(ie);
            await de(e, I(), T, A, s > 0, (f, x) => E.set(f.client, x))
          })().catch((s) => t(`MCP reconnect after close failed for ${i.name}: ${d(s)}`, {
            level: "warn"
          }))
        };
      if (oCi(i, () => P(!1)), _Ie(i)) setImmediate(P, !0)
    }
  }
}

function ce(e) {
  return J(e, void 0, {
    unref: !0
  })
}

function le(e) {
  return e.type !== void 0 && e.type !== "stdio" && e.type !== "sdk"
}
async function de(e, n, o, S, w, E) {
  let {
    getAppState: C,
    getDynamicMcpState: v,
    storageV5: M,
    credentials: i,
    isControlReconnectInFlight: R,
    isRunEnding: P,
    onReconnected: T,
    sleep: p = ce,
    random: A = Math.random
  } = e, {
    name: s,
    config: h
  } = n, I = zr(), f = () => Vo() || P() || zr() !== I && KC(h), x = () => C().mcp.clients.find((u) => u.name === s) ?? v().clients.find((u) => u.name === s), j = n, B = () => x() === j, W = (u) => {
    mPe(e, s, u)
  }, F = Q(), U = Due + wTr;
  for (let u = 1; u <= U; u++) {
    let O = u - Due;
    if (u > 1) await p(O > 0 ? P0({
      baseMs: hvs,
      capMs: pWi,
      floorMs: hvs / 2,
      attempt: O - 1,
      random: A
    }) : wNt(u - 1));
    using Z = O > 0 ? Hfn([s]) : void 0;
    if (f() || !B()) return;
    let z = zr();
    if (O > 0) {
      let _ = {
        name: s,
        type: "pending",
        config: h
      };
      if (jrt(s, _)) {
        W({
          client: _,
          tools: [],
          commands: [],
          attemptEpoch: z
        });
        return
      }
      if (await F.hasUnsettledDial(s, h)) {
        if (u < U) {
          ae(s, `Background reconnect attempt ${O}/${wTr} skipped: another reconnect to this server is in progress; will try again at the next attempt`);
          continue
        }
        if (!f() && B() && !R(s)) ae(s, `Reconnect gave up after ${u} attempts: another reconnect to this server is still in progress; leaving it to finish`), m("mcp_slow_reconnect", "gave_up", {
          attempts: u,
          found_closed: o
        });
        return
      }
      if (f() || !B()) return
    } else {
      let _ = {
        name: s,
        type: "pending",
        config: h,
        reconnectAttempt: u,
        maxReconnectAttempts: Due
      };
      W({
        client: _,
        ...t1r(C().mcp, s),
        attemptEpoch: z
      }), j = _
    }
    if (!B() || R(s)) return;
    ae(s, u === 1 ? `${h.type} transport ${o?"had already closed when wired":"closed"} \u2014 reconnecting (attempt 1/${Due})` : O > 0 ? `Background reconnect attempt ${O}/${wTr}` : `Reconnect attempt ${u}/${Due}`);
    let q = w && u === 1 ? await F.peekSettledConnection(s, h) : void 0,
      G = q?.type === "connected" && !_Ie(q) ? pge(q, h) : void 0,
      K = {
        ...G !== void 0 ? {
          client: G,
          ...t1r(C().mcp, s)
        } : await F.reconnectMcpServerImpl(s, h, M, i, {
          keepConnectionInUse: !0
        }).catch((_) => ({
          client: {
            name: s,
            type: "failed",
            config: h,
            error: d(_)
          },
          tools: [],
          commands: []
        })),
        attemptEpoch: z
      },
      D = K.client.type === "connected" ? K.client : void 0,
      r = D !== void 0 && bIe(await F.peekSettledConnection(s, h), D),
      y = () => {
        if (D && eLo(D, h, x(), r && !P())) F.detachAndCloseConnection(D).catch(() => {})
      };
    if (f() || !B() || R(s)) {
      y();
      return
    }
    let H = K.keptConnectionInUse === !0 && D?.toolsListError !== void 0 && jrt(s, D) === void 0;
    if (D && r && !H) {
      if (E(D, S + u - 1), W(K), x() === D) {
        if (D === G) Che(D, (_, X) => {
          ne(e, _, X, D.config)
        }, M).catch((_) => t(`MCP tools refresh over a kept connection failed for ${s}: ${d(_)}`, {
          level: "warn"
        }));
        ae(s, `Reconnected (attempt ${u})`), g(O > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", {
          attempts: u,
          found_closed: o,
          young_closes: S
        }), T(D)
      }
      return
    }
    y();
    let a = D && {
        name: s,
        type: "failed",
        config: h,
        error: H ? "Its tools could not be listed" : "Connection closed again while reconnecting"
      },
      k = a ?? K.client,
      L = a ? {
        ...a,
        errorCode: "ConnectionClosed"
      } : k,
      V = w3t(L);
    if (u === Due || O > 0 && (!V || u === U)) {
      if (ae(s, O <= 0 && V ? `Still failing after ${u} attempts` : `Reconnect gave up after ${u} attempts: ${k.type}`), W({
          client: k,
          tools: k.type === "needs-auth" ? aF(s, h) : [],
          commands: [],
          attemptEpoch: z
        }), x() !== k) return;
      if (k.type === "needs-auth") {
        c(O > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", "needs_auth", {
          attempts: u,
          found_closed: o,
          young_closes: S
        });
        return
      }
      if (O > 0) {
        m("mcp_slow_reconnect", V ? "gave_up" : "not_retryable", {
          attempts: u,
          found_closed: o
        });
        return
      }
      if (m("mcp_auto_reconnect", "exhausted", {
          attempts: u,
          found_closed: o,
          young_closes: S,
          goes_slow: V
        }), !V) return;
      j = k, ae(s, `Reconnect attempts spent; retrying in the background, up to ${wTr} more times`);
      continue
    }
    ae(s, O > 0 ? `Background reconnect attempt ${O} did not connect (${k.type})` : `Reconnect attempt ${u} did not connect (${k.type}); next in ${wNt(u)}ms`)
  }
}
var te = new WeakMap;

function O6s(e) {
  return te.get(e)
}

function ne(e, n, o, S) {
  let {
    setAppState: w,
    getDynamicMcpState: E,
    setDynamicMcpState: C
  } = e, v = !1, M = !1, i;
  w((p) => {
    let A = p.mcp.clients.find((I) => I.name === n),
      s = Jmn(A, o, S);
    if (s === void 0) return M = !0, p;
    let h = p5n(p, n, s);
    return v = h !== p, i = v && A !== void 0 ? {
      row: A,
      tools: s
    } : void 0, h
  });
  let R = E(),
    P = R.clients.find((p) => p.name === n),
    T = Jmn(P, o, S);
  if (T === void 0) M = !0;
  else {
    let p = W8s(R, n, T);
    if (p !== R) C(p), v = !0
  }
  if (i !== void 0)
    if (P?.type === "pending") te.set(i.row, i.tools);
    else te.delete(i.row);
  if (M) ae(n, "A re-queried tool list was not applied: another server holds the name");
  return v
}

function I6s(e) {
  return (n, o, S) => ne(e, n, o, S)
}

function M6s(e) {
  let {
    getAppState: n,
    getDynamicMcpState: o
  } = e.stores, S = new WeakSet, w = new WeakMap;
  return (E) => {
    for (let C of E) {
      if (C.type === "connected") w.set(C.client, C);
      if (C.type !== "connected" || S.has(C.client)) continue;
      if (S.add(C.client), !C.capabilities?.tools?.listChanged) continue;
      let v = C.name;
      Q().onMcpToolListChanged(C, async (M) => {
        ae(v, M === H_e ? "Synthesized tools refetch after listen-stream reopen (no notification received)" : M === pht ? "Refreshing tools for a tools/list_changed notification received before this handler was registered" : "Received tools/list_changed notification, refreshing tools");
        let i = n().mcp.clients.find((s) => s.name === v) ?? o().clients.find((s) => s.name === v),
          R = w.get(C.client) ?? C,
          P = i !== void 0 && mr(v, i.config) === mr(v, R.config) ? pge(R, i.config) : R;
        w.set(C.client, P);
        let T = await Che(P, (s, h) => {
          ne(e.stores, s, h, P.config)
        }, e.storageV5);
        if (T.status === "kept-previous") {
          ae(v, "tools/list failed after list_changed \u2014 keeping previous tool set");
          return
        }
        let p = T.newTools.length,
          A = (s) => l("tengu_mcp_list_changed", {
            mcpServerKeyHash: qL(v),
            type: b("tools"),
            cause: j5e(M),
            previousCount: s,
            newCount: p,
            ...Pui(C)
          });
        if (T.previousToolsPromise) T.previousToolsPromise.then((s) => A(s.length), () => A());
        else A()
      })
    }
  }
}
export {
  Z0o,
  x6s,
  e1r,
  t1r,
  jrt,
  mPe,
  VYn,
  eLo,
  P6s,
  O6s,
  I6s,
  M6s
};
