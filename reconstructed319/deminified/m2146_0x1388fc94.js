// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { J, P0 } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ae } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { to, Dd } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { qL } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { bt } from "B:/~BUN/root/chunk-ja520myc.js";
import { zw, Vd, Wxt, w3t, Gw, NQ, j5e, doo, Gu, oZ, SI, KOt, jo, Vo } from "B:/~BUN/root/chunk-27h4st9h.js";
import { oCi } from "B:/~BUN/root/chunk-mcdkvptw.js";
import { K$ } from "B:/~BUN/root/chunk-7wcc5pbk.js";
import { SIe, zr, fI, KC, GRt, Bkn, tsr } from "B:/~BUN/root/chunk-7jbamvvk.js";
import { Hfn, $fn, F6s } from "B:/~BUN/root/chunk-9w9qpsmm.js";
import { Che } from "B:/~BUN/root/chunk-zkjxrhgg.js";
import { p1e, aF } from "B:/~BUN/root/chunk-s74geht1.js";
import { $Pe, W8s, p5n, UGt, Jmn } from "B:/~BUN/root/chunk-j9h732qg.js";
import { NG } from "B:/~BUN/root/chunk-59sqv3yw.js";
import { Pui } from "B:/~BUN/root/chunk-m96pt27x.js";
import { _Ie, bIe } from "B:/~BUN/root/chunk-bq7y7t0q.js";
import { xP } from "B:/~BUN/root/chunk-kb3hq3bg.js";
import { pge } from "B:/~BUN/root/chunk-jzac91sc.js";
import { RS, Ssr } from "B:/~BUN/root/chunk-pyp8n05h.js";
import { mr } from "B:/~BUN/root/chunk-s20ae4sg.js";
import { H_e, pht, Due as maxReconnectAttempts, fWi, wNt, wTr, hvs as baseMs, pWi as capMs } from "B:/~BUN/root/chunk-e99p2x0p.js";
function Q() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule();
}
function Z0o(e, n, o, S) {
  if (Object.hasOwn(n, e)) return n[e];
  if (o && !oZ.has(o.scope)) return o;
  return S ? S(e) : o ?? null;
}
function x6s(e, name) {
  if (!e.clients.some(item => item.name === name)) return e;
  return {
    ...e,
    clients: e.clients.map(item => item.name === name ? {
      name: name,
      type: "disabled",
      config: item.config
    } : item),
    tools: NQ(e.tools, name)
  };
}
function e1r(e) {
  return e.client.type === "needs-auth" ? {
    ...e,
    tools: aF(e.client.name, e.client.config)
  } : e;
}
function t1r(e, n) {
  let o = to(n);
  return {
    tools: e.tools.filter(item => Dd(item, n, o)),
    commands: e.commands.filter(item => Gw(item, n)),
    resources: e.resources[n],
    resourceTemplates: e.resourceTemplates[n]
  };
}
function jrt(name_2, n) {
  let o = n.type !== "failed" ? Gu(name_2, n.config) : void 0;
  if (o === "managed-policy") return N(name_2, n.config, o);
  if (jo(name_2) && !Ssr(n)) return {
    name: name_2,
    type: "disabled",
    config: n.config
  };
  return o ? N(name_2, n.config, o) : void 0;
}
function N(name_3, config, o) {
  return {
    name: name_3,
    type: "failed",
    config: config,
    ...RS(o, name_3, config)
  };
}
function oe(e, n) {
  return n.asked || e === void 0 || pge(n.client, e.config) === n.client ? n : xP(e.config, n);
}
function se(e, n, o) {
  let {
    incoming: incoming,
    result: result,
    outcome: outcome
  } = o;
  if (outcome === "refused") {
    let client = incoming.asked ? result.client : UGt(result.client, n.config);
    return client === result.client ? result : {
      ...result,
      client: client
    };
  }
  if (pge(result.client, n.config) === result.client) return result;
  let C = oe(n, incoming);
  if (C.client.type === "disabled") return C;
  let client_2 = jrt(e, C.client);
  return client_2 ? {
    ...C,
    client: client_2,
    tools: [],
    commands: []
  } : C;
}
function mPe(e, n, incoming_2) {
  let {
      getAppState: getAppState,
      setAppState: setAppState,
      getDynamicMcpState: getDynamicMcpState,
      setDynamicMcpState: setDynamicMcpState
    } = e,
    v = () => {
      if (incoming_2.client.type === "connected") Q().detachAndCloseConnection(incoming_2.client).catch(() => {});
    },
    M = getAppState().mcp.clients.find(item => item.name === n),
    i = getDynamicMcpState().clients.find(item => item.name === n);
  if (!M && !i) return v(), "dropped";
  let R = mr(n, incoming_2.client.config),
    P = f => f !== void 0 && mr(n, f.config) !== R;
  if (P(M) || P(i)) return t(`[MCP] ${n}: dropping a settlement whose slot config changed mid-flight`), v(), "dropped";
  if (GRt(incoming_2.client.config, incoming_2.attemptEpoch)) return t(`[MCP] ${n}: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)`), v(), "superseded";
  let T = oe(M ?? i, incoming_2),
    result_2 = T,
    outcome_2 = "applied";
  if (T.client.type !== "disabled") {
    let client_3 = jrt(n, T.client);
    if (client_3) {
      if (v(), client_3.type === "failed") Q().dropDiscoveryEntry(n, T.client.config).catch(() => {});
      result_2 = {
        client: client_3,
        tools: [],
        commands: [],
        resources: [],
        attemptEpoch: incoming_2.attemptEpoch
      }, outcome_2 = "refused";
    }
  }
  if (setAppState(f => {
    let x = $Pe(f, n, result_2, {
        appendIfAbsent: result_2.client.config.type !== "sdk"
      }),
      j = !!result_2.resources && result_2.resources.length > 0,
      B = !!result_2.resourceTemplates && result_2.resourceTemplates.length > 0;
    return j && B ? x : {
      ...x,
      mcp: {
        ...x.mcp,
        resources: j ? x.mcp.resources : zw(x.mcp.resources, n),
        resourceTemplates: B ? x.mcp.resourceTemplates : zw(x.mcp.resourceTemplates, n)
      }
    };
  }), !i) return outcome_2;
  let s = to(n),
    h = getDynamicMcpState(),
    I = M === void 0 ? result_2 : se(n, i, {
      incoming: incoming_2,
      result: result_2,
      outcome: outcome_2
    });
  return setDynamicMcpState({
    ...h,
    clients: h.clients.map(item => item.name === n ? I.client : item),
    tools: [...h.tools.filter(item => !Dd(item, n, s)), ...I.tools]
  }), outcome_2;
}
function VYn(e) {
  if (!Vd()) return;
  let {
    getAppState: getAppState_2,
    setAppState: setAppState_2,
    getDynamicMcpState: getDynamicMcpState_2,
    setDynamicMcpState: setDynamicMcpState_2,
    storageV5: storageV5,
    credentials: credentials,
    force = !1,
    spareUnchangedFrom: spareUnchangedFrom
  } = e;
  p1e(storageV5);
  let i = Q(),
    R = bt();
  if (!i.mcpIdentityChangedSinceLastCheck() && !force) return R.headlessConnectorMountInFlight;
  let P = !force || !Wxt(SIe()),
    T = getDynamicMcpState_2(),
    p = [...getAppState_2().mcp.clients, ...T.clients],
    A = new Set(),
    s = new Set(),
    h = new Set(),
    I = new Set();
  if (spareUnchangedFrom) {
    for (let r of p) I.add(r.name);
    for (let r of p) if (!spareUnchangedFrom.has(r) || r.type === "pending") I.delete(r.name);
  }
  for (let r of p) {
    if (!KC(r.config) || I.has(r.name)) {
      h.add(mr(r.name, r.config));
      continue;
    }
    if (i.disposeServerConnectionDetached(r.name, r.config), r.config.scope === "claudeai") {
      s.add(r.name);
      continue;
    }
    if (r.type !== "disabled") A.add(r.name);
  }
  i.evictAllMcpMemosOnIdentityChange(h, tsr(p)), K$().clear();
  let f = Object.create(null),
    x = new Set(),
    j = e.getHostOwnedConfigs?.() ?? T.configs;
  for (let r of p) {
    if (!A.has(r.name) || !P) continue;
    let y = f[r.name] ?? Z0o(r.name, j, r.config, SI);
    if (!y) {
      x.add(r.name);
      continue;
    }
    let H = f[r.name] ??= y;
    if (H !== r.config && mr(r.name, H) !== mr(r.name, r.config)) t(`[MCP] ${r.name}: appState and dynamic-store rows disagree on config at the identity boundary \u2014 converging both under the ${Object.hasOwn(j, r.name) ? "host's" : "appState row's"} config and re-dialing it`, {
      level: "warn"
    });
  }
  let B = new Map(),
    W = KOt() && P,
    F = Object.create(null);
  for (let [r, y] of Object.entries(f)) {
    if (W && doo(y)) {
      F[r] = y, delete f[r];
      continue;
    }
    let H = Gu(r, y);
    if (H) B.set(r, N(r, y, H)), delete f[r];
  }
  let U = [...A, ...s];
  if (U.length > 0) {
    let r = U.map(item => [item, to(item)]),
      y = a => r.some(([k, L]) => Dd(a, k, L)),
      H = a => s.has(a.name) ? [] : A.has(a.name) ? [!P || x.has(a.name) ? Bkn(a.name, a.config) : B.get(a.name) ?? {
        name: a.name,
        type: "pending",
        config: f[a.name] ?? F[a.name] ?? a.config
      }] : [a];
    setAppState_2(a => ({
      ...a,
      mcp: {
        ...a.mcp,
        clients: a.mcp.clients.flatMap(H),
        tools: NG(a.mcp.tools, y),
        commands: NG(a.mcp.commands, k => U.some(item => Gw(k, item))),
        resources: zw(a.mcp.resources, U),
        resourceTemplates: zw(a.mcp.resourceTemplates, U)
      }
    })), setDynamicMcpState_2({
      ...T,
      clients: T.clients.flatMap(H),
      tools: T.tools.filter(item => !y(item))
    });
  }
  let u, O;
  if (W) {
    let y = F6s({
      getClients: () => getAppState_2().mcp.clients,
      getSuppressedPluginServers: () => getAppState_2().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: a => {
        let k = new Set();
        if (setAppState_2(_ => {
          let mcp = a(_.mcp),
            ee = new Set(mcp.clients.map(item => item.name));
          return k = new Set(_.mcp.clients.filter(item => !ee.has(item.name)).map(item => item.name)), {
            ..._,
            mcp: mcp
          };
        }), k.size === 0) return;
        let L = getDynamicMcpState_2();
        if (!L.clients.some(item => k.has(item.name))) return;
        let V = [...k].map(item => [item, to(item)]);
        setDynamicMcpState_2({
          ...L,
          clients: L.clients.filter(item => !k.has(item.name)),
          tools: L.tools.filter(item => !V.some(([X, ee]) => Dd(item, X, ee)))
        });
      }
    }, storageV5, credentials);
    y.settled.catch(() => {}), O = y.mounted.catch(() => "mounted");
    let H = y.mounted.then(() => {}, a => t(`MCP connector refetch after account switch failed: ${d(a)}`, {
      level: "warn"
    })).finally(() => {
      if (R.headlessConnectorMountInFlight === H) R.headlessConnectorMountInFlight = void 0;
    });
    R.headlessConnectorMountInFlight = u = H;
  }
  if (A.size === 0 || !P) return u;
  let Z = r => {
      mPe(e, r.client.name, r);
    },
    z = {
      getClients: () => [...getAppState_2().mcp.clients, ...getDynamicMcpState_2().clients],
      getSuppressedPluginServers: () => getAppState_2().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: r => setAppState_2(y => ({
        ...y,
        mcp: r(y.mcp)
      }))
    },
    q = r => {
      i.getMcpToolsCommandsAndResources(Z, r, storageV5, credentials).catch(y => t(`MCP re-dial after account switch failed: ${d(y)}`, {
        level: "warn"
      })).finally(() => {
        $fn(r, z, storageV5, Z).catch(y => t(`MCP re-dial retry after account switch failed: ${d(y)}`, {
          level: "warn"
        }));
      });
    };
  if (q(f), Object.keys(F).length === 0 || !O) return u;
  let attemptEpoch = zr(),
    K = O.then(r => {
      if (r === "superseded" || !fI(attemptEpoch)) return;
      let y = Object.create(null);
      for (let [H, a] of Object.entries(F)) {
        let k = Gu(H, a);
        if (k) Z({
          client: N(H, a, k),
          tools: [],
          commands: [],
          attemptEpoch: attemptEpoch
        });else y[H] = a;
      }
      if (Object.keys(y).length > 0) q(y);
    }).catch(r => t(`MCP re-dial of held claude.ai proxy entries after account switch failed: ${d(r)}`, {
      level: "warn"
    })),
    D = Promise.all([u, K]).then(() => {}).finally(() => {
      if (R.headlessConnectorMountInFlight === D) R.headlessConnectorMountInFlight = void 0;
    });
  return R.headlessConnectorMountInFlight = D, D;
}
function eLo(e, n, o, S) {
  let w = o?.type === "connected" && o.client === e.client,
    E = o !== void 0 && o.type !== "disabled" && mr(e.name, o.config) === mr(e.name, n);
  return !w && (!S || !E);
}
var re = 5,
  ie = 1000;
function P6s(e) {
  let {
      getAppState: getAppState_3,
      getDynamicMcpState: getDynamicMcpState_3,
      now = Date.now
    } = e,
    weakSet = new WeakSet(),
    weakMap = new WeakMap(),
    weakMap_2 = new WeakMap(),
    v = (M, i, R) => {
      let P = i > 1 ? wNt(i - 1) - R : 0,
        T = [...getAppState_3().mcp.clients, ...getDynamicMcpState_3().clients].some(item => item.type === "connected" && item.client === M.client);
      if (P <= 0 || !T || e.isControlReconnectInFlight(M.name)) return 0;
      try {
        e.onHeldOff?.(i, P);
      } catch (error) {
        t(`MCP reconnect hold-off observer failed for ${M.name}: ${d(error)}`, {
          level: "warn"
        });
      }
      return ae(M.name, `${M.config.type} transport closed again soon after it connected: reconnecting in ${P}ms`), P;
    };
  return M => {
    for (let i of M) {
      if (i.type === "connected") weakMap_2.set(i.client, i);
      if (i.type !== "connected" || weakSet.has(i.client) || !le(i.config)) continue;
      weakSet.add(i.client);
      let R = now(),
        P = T => {
          if (Vo() || e.isRunEnding()) return;
          i.cleanup().catch(() => {});
          let p = Math.max(0, now() - R),
            A = p < fWi ? (weakMap.get(i.client) ?? 0) + 1 : 0;
          (async () => {
            let s = v(i, A, p),
              h = e.sleep ?? ce;
            if (s > 0) await h(s);
            let I = () => weakMap_2.get(i.client) ?? i;
            for (let f = 0; s > 0 && f < re && (await Q().hasUnsettledDial(I().name, I().config)); f++) await h(ie);
            await de(e, I(), T, A, s > 0, (f, x) => weakMap.set(f.client, x));
          })().catch(s => t(`MCP reconnect after close failed for ${i.name}: ${d(s)}`, {
            level: "warn"
          }));
        };
      if (oCi(i, () => P(!1)), _Ie(i)) setImmediate(P, !0);
    }
  };
}
function ce(e) {
  return J(e, void 0, {
    unref: !0
  });
}
function le(e) {
  return e.type !== void 0 && e.type !== "stdio" && e.type !== "sdk";
}
async function de(e, n, found_closed, young_closes, w, E) {
  let {
      getAppState: getAppState_4,
      getDynamicMcpState: getDynamicMcpState_4,
      storageV5: storageV5_2,
      credentials: credentials_2,
      isControlReconnectInFlight: isControlReconnectInFlight,
      isRunEnding: isRunEnding,
      onReconnected: onReconnected,
      sleep = ce,
      random = Math.random
    } = e,
    {
      name: name_4,
      config: config_2
    } = n,
    I = zr(),
    f = () => Vo() || isRunEnding() || zr() !== I && KC(config_2),
    x = () => getAppState_4().mcp.clients.find(item => item.name === name_4) ?? getDynamicMcpState_4().clients.find(item => item.name === name_4),
    j = n,
    B = () => x() === j,
    W = u => {
      mPe(e, name_4, u);
    },
    F = Q(),
    U = maxReconnectAttempts + wTr;
  for (let u = 1; u <= U; u++) {
    let O = u - maxReconnectAttempts;
    if (u > 1) await sleep(O > 0 ? P0({
      baseMs: baseMs,
      capMs: capMs,
      floorMs: baseMs / 2,
      attempt: O - 1,
      random: random
    }) : wNt(u - 1));
    using Z = O > 0 ? Hfn([name_4]) : void 0;
    if (f() || !B()) return;
    let attemptEpoch_2 = zr();
    if (O > 0) {
      let client_4 = {
        name: name_4,
        type: "pending",
        config: config_2
      };
      if (jrt(name_4, client_4)) {
        W({
          client: client_4,
          tools: [],
          commands: [],
          attemptEpoch: attemptEpoch_2
        });
        return;
      }
      if (await F.hasUnsettledDial(name_4, config_2)) {
        if (u < U) {
          ae(name_4, `Background reconnect attempt ${O}/${wTr} skipped: another reconnect to this server is in progress; will try again at the next attempt`);
          continue;
        }
        if (!f() && B() && !isControlReconnectInFlight(name_4)) ae(name_4, `Reconnect gave up after ${u} attempts: another reconnect to this server is still in progress; leaving it to finish`), m("mcp_slow_reconnect", "gave_up", {
          attempts: u,
          found_closed: found_closed
        });
        return;
      }
      if (f() || !B()) return;
    } else {
      let client_5 = {
        name: name_4,
        type: "pending",
        config: config_2,
        reconnectAttempt: u,
        maxReconnectAttempts: maxReconnectAttempts
      };
      W({
        client: client_5,
        ...t1r(getAppState_4().mcp, name_4),
        attemptEpoch: attemptEpoch_2
      }), j = client_5;
    }
    if (!B() || isControlReconnectInFlight(name_4)) return;
    ae(name_4, u === 1 ? `${config_2.type} transport ${found_closed ? "had already closed when wired" : "closed"} \u2014 reconnecting (attempt 1/${maxReconnectAttempts})` : O > 0 ? `Background reconnect attempt ${O}/${wTr}` : `Reconnect attempt ${u}/${maxReconnectAttempts}`);
    let q = w && u === 1 ? await F.peekSettledConnection(name_4, config_2) : void 0,
      client_6 = q?.type === "connected" && !_Ie(q) ? pge(q, config_2) : void 0,
      K = {
        ...(client_6 !== void 0 ? {
          client: client_6,
          ...t1r(getAppState_4().mcp, name_4)
        } : await F.reconnectMcpServerImpl(name_4, config_2, storageV5_2, credentials_2, {
          keepConnectionInUse: !0
        }).catch(_ => ({
          client: {
            name: name_4,
            type: "failed",
            config: config_2,
            error: d(_)
          },
          tools: [],
          commands: []
        }))),
        attemptEpoch: attemptEpoch_2
      },
      D = K.client.type === "connected" ? K.client : void 0,
      r = D !== void 0 && bIe(await F.peekSettledConnection(name_4, config_2), D),
      y = () => {
        if (D && eLo(D, config_2, x(), r && !isRunEnding())) F.detachAndCloseConnection(D).catch(() => {});
      };
    if (f() || !B() || isControlReconnectInFlight(name_4)) {
      y();
      return;
    }
    let H = K.keptConnectionInUse === !0 && D?.toolsListError !== void 0 && jrt(name_4, D) === void 0;
    if (D && r && !H) {
      if (E(D, young_closes + u - 1), W(K), x() === D) {
        if (D === client_6) Che(D, (_, X) => {
          ne(e, _, X, D.config);
        }, storageV5_2).catch(_ => t(`MCP tools refresh over a kept connection failed for ${name_4}: ${d(_)}`, {
          level: "warn"
        }));
        ae(name_4, `Reconnected (attempt ${u})`), g(O > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", {
          attempts: u,
          found_closed: found_closed,
          young_closes: young_closes
        }), onReconnected(D);
      }
      return;
    }
    y();
    let a = D && {
        name: name_4,
        type: "failed",
        config: config_2,
        error: H ? "Its tools could not be listed" : "Connection closed again while reconnecting"
      },
      client_7 = a ?? K.client,
      L = a ? {
        ...a,
        errorCode: "ConnectionClosed"
      } : client_7,
      goes_slow = w3t(L);
    if (u === maxReconnectAttempts || O > 0 && (!goes_slow || u === U)) {
      if (ae(name_4, O <= 0 && goes_slow ? `Still failing after ${u} attempts` : `Reconnect gave up after ${u} attempts: ${client_7.type}`), W({
        client: client_7,
        tools: client_7.type === "needs-auth" ? aF(name_4, config_2) : [],
        commands: [],
        attemptEpoch: attemptEpoch_2
      }), x() !== client_7) return;
      if (client_7.type === "needs-auth") {
        c(O > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", "needs_auth", {
          attempts: u,
          found_closed: found_closed,
          young_closes: young_closes
        });
        return;
      }
      if (O > 0) {
        m("mcp_slow_reconnect", goes_slow ? "gave_up" : "not_retryable", {
          attempts: u,
          found_closed: found_closed
        });
        return;
      }
      if (m("mcp_auto_reconnect", "exhausted", {
        attempts: u,
        found_closed: found_closed,
        young_closes: young_closes,
        goes_slow: goes_slow
      }), !goes_slow) return;
      j = client_7, ae(name_4, `Reconnect attempts spent; retrying in the background, up to ${wTr} more times`);
      continue;
    }
    ae(name_4, O > 0 ? `Background reconnect attempt ${O} did not connect (${client_7.type})` : `Reconnect attempt ${u} did not connect (${client_7.type}); next in ${wNt(u)}ms`);
  }
}
var weakMap_3 = new WeakMap();
function O6s(e) {
  return weakMap_3.get(e);
}
function ne(e, n, o, S) {
  let {
      setAppState: setAppState_3,
      getDynamicMcpState: getDynamicMcpState_5,
      setDynamicMcpState: setDynamicMcpState_3
    } = e,
    v = !1,
    M = !1,
    i;
  setAppState_3(p => {
    let row = p.mcp.clients.find(item => item.name === n),
      tools = Jmn(row, o, S);
    if (tools === void 0) return M = !0, p;
    let h = p5n(p, n, tools);
    return v = h !== p, i = v && row !== void 0 ? {
      row: row,
      tools: tools
    } : void 0, h;
  });
  let R = getDynamicMcpState_5(),
    P = R.clients.find(item => item.name === n),
    T = Jmn(P, o, S);
  if (T === void 0) M = !0;else {
    let p = W8s(R, n, T);
    if (p !== R) setDynamicMcpState_3(p), v = !0;
  }
  if (i !== void 0) if (P?.type === "pending") weakMap_3.set(i.row, i.tools);else weakMap_3.delete(i.row);
  if (M) ae(n, "A re-queried tool list was not applied: another server holds the name");
  return v;
}
function I6s(e) {
  return (n, o, S) => ne(e, n, o, S);
}
function M6s(e) {
  let {
      getAppState: getAppState_5,
      getDynamicMcpState: getDynamicMcpState_6
    } = e.stores,
    weakSet_2 = new WeakSet(),
    weakMap_4 = new WeakMap();
  return E => {
    for (let C of E) {
      if (C.type === "connected") weakMap_4.set(C.client, C);
      if (C.type !== "connected" || weakSet_2.has(C.client)) continue;
      if (weakSet_2.add(C.client), !C.capabilities?.tools?.listChanged) continue;
      let v = C.name;
      Q().onMcpToolListChanged(C, async M => {
        ae(v, M === H_e ? "Synthesized tools refetch after listen-stream reopen (no notification received)" : M === pht ? "Refreshing tools for a tools/list_changed notification received before this handler was registered" : "Received tools/list_changed notification, refreshing tools");
        let i = getAppState_5().mcp.clients.find(item => item.name === v) ?? getDynamicMcpState_6().clients.find(item => item.name === v),
          R = weakMap_4.get(C.client) ?? C,
          P = i !== void 0 && mr(v, i.config) === mr(v, R.config) ? pge(R, i.config) : R;
        weakMap_4.set(C.client, P);
        let T = await Che(P, (s, h) => {
          ne(e.stores, s, h, P.config);
        }, e.storageV5);
        if (T.status === "kept-previous") {
          ae(v, "tools/list failed after list_changed \u2014 keeping previous tool set");
          return;
        }
        let newCount = T.newTools.length,
          A = previousCount => l("tengu_mcp_list_changed", {
            mcpServerKeyHash: qL(v),
            type: b("tools"),
            cause: j5e(M),
            previousCount: previousCount,
            newCount: newCount,
            ...Pui(C)
          });
        if (T.previousToolsPromise) T.previousToolsPromise.then(s => A(s.length), () => A());else A();
      });
    }
  };
}
export { Z0o, x6s, e1r, t1r, jrt, mPe, VYn, eLo, P6s, O6s, I6s, M6s };