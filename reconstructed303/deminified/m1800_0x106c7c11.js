// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y, SP } from "B:/~BUN/root/chunk-89mss1tj.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { UO } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Ft } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { qa, Jit, Ak, yPt, Q_, p9, e$e, CSr, Ic, Glt, Pq, qlt, Oo, ys } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { oks } from "B:/~BUN/root/chunk-xyxdcn7p.js";
import { Jn } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { eie, Z6e, HZ as maxReconnectAttempts, XSs, Idt, g$n, ngo as baseMs, JSs as capMs } from "B:/~BUN/root/chunk-9y4mcm7b.js";
import { dG } from "B:/~BUN/root/chunk-351qj2sm.js";
import { N_e, Hr, AP, bE, qrt, gCn, hCn } from "B:/~BUN/root/chunk-jynk66qn.js";
import { _zt, TYo } from "B:/~BUN/root/chunk-wq4406vp.js";
import { noe } from "B:/~BUN/root/chunk-nbhvqx0k.js";
import { vRe, U$ } from "B:/~BUN/root/chunk-06131bj4.js";
import { a_e, i9o, Cwn, Lvt, $2t } from "B:/~BUN/root/chunk-qzg0d2gn.js";
import { D$ } from "B:/~BUN/root/chunk-mkmzcfhg.js";
import { Mes } from "B:/~BUN/root/chunk-cvntg209.js";
import { I_e, M_e } from "B:/~BUN/root/chunk-v0j0rh1h.js";
import { J_, HRn } from "B:/~BUN/root/chunk-pj523hfd.js";
import { pC } from "B:/~BUN/root/chunk-59t3bgjz.js";
import { Aoe } from "B:/~BUN/root/chunk-5gazt5rq.js";
import { uo, _c } from "B:/~BUN/root/chunk-b0487zs4.js";
function G() {
  return import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule();
}
function UGr(n, e, o, S) {
  if (Object.hasOwn(e, n)) return e[n];
  if (o && !Glt.has(o.scope)) return o;
  return S ? S(n) : o ?? null;
}
function yYo(n, name) {
  if (!n.clients.some(item => item.name === name)) return n;
  return {
    ...n,
    clients: n.clients.map(item => item.name === name ? {
      name: name,
      type: "disabled",
      config: item.config
    } : item),
    tools: p9(n.tools, name)
  };
}
function tZn(n, e) {
  let o = uo(e);
  return {
    tools: n.tools.filter(item => _c(item, e, o)),
    commands: n.commands.filter(item => Q_(item, e)),
    resources: n.resources[e],
    resourceTemplates: n.resourceTemplates[e]
  };
}
function R2e(name_2, e) {
  let o = e.type !== "failed" ? Ic(name_2, e.config) : void 0;
  if (o === "managed-policy") return N(name_2, e.config, o);
  if (Oo(name_2) && !HRn(e)) return {
    name: name_2,
    type: "disabled",
    config: e.config
  };
  return o ? N(name_2, e.config, o) : void 0;
}
function N(name_3, config, o) {
  return {
    name: name_3,
    type: "failed",
    config: config,
    ...J_(o, name_3, config)
  };
}
function oe(n, e) {
  return e.asked || n === void 0 || Aoe(e.client, n.config) === e.client ? e : pC(n.config, e);
}
function se(n, e, o) {
  let {
    incoming: incoming,
    result: result,
    outcome: outcome
  } = o;
  if (outcome === "refused") {
    let client = incoming.asked ? result.client : Lvt(result.client, e.config);
    return client === result.client ? result : {
      ...result,
      client: client
    };
  }
  if (Aoe(result.client, e.config) === result.client) return result;
  let C = oe(e, incoming);
  if (C.client.type === "disabled") return C;
  let client_2 = R2e(n, C.client);
  return client_2 ? {
    ...C,
    client: client_2,
    tools: [],
    commands: []
  } : C;
}
function Oye(n, e, incoming_2) {
  let {
      getAppState: getAppState,
      setAppState: setAppState,
      getDynamicMcpState: getDynamicMcpState,
      setDynamicMcpState: setDynamicMcpState
    } = n,
    v = () => {
      if (incoming_2.client.type === "connected") G().detachAndCloseConnection(incoming_2.client).catch(() => {});
    },
    M = getAppState().mcp.clients.find(item => item.name === e),
    a = getDynamicMcpState().clients.find(item => item.name === e);
  if (!M && !a) return v(), "dropped";
  let R = Jn(e, incoming_2.client.config),
    P = f => f !== void 0 && Jn(e, f.config) !== R;
  if (P(M) || P(a)) return t(`[MCP] ${e}: dropping a settlement whose slot config changed mid-flight`), v(), "dropped";
  if (qrt(incoming_2.client.config, incoming_2.attemptEpoch)) return t(`[MCP] ${e}: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)`), v(), "superseded";
  let T = oe(M ?? a, incoming_2),
    result_2 = T,
    outcome_2 = "applied";
  if (T.client.type !== "disabled") {
    let client_3 = R2e(e, T.client);
    if (client_3) {
      if (v(), client_3.type === "failed") G().dropDiscoveryEntry(e, T.client.config).catch(() => {});
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
    let E = a_e(f, e, result_2, {
        appendIfAbsent: result_2.client.config.type !== "sdk"
      }),
      U = !!result_2.resources && result_2.resources.length > 0,
      L = !!result_2.resourceTemplates && result_2.resourceTemplates.length > 0;
    return U && L ? E : {
      ...E,
      mcp: {
        ...E.mcp,
        resources: U ? E.mcp.resources : Ak(E.mcp.resources, e),
        resourceTemplates: L ? E.mcp.resourceTemplates : Ak(E.mcp.resourceTemplates, e)
      }
    };
  }), !a) return outcome_2;
  let c = uo(e),
    h = getDynamicMcpState(),
    H = M === void 0 ? result_2 : se(e, a, {
      incoming: incoming_2,
      result: result_2,
      outcome: outcome_2
    });
  return setDynamicMcpState({
    ...h,
    clients: h.clients.map(item => item.name === e ? H.client : item),
    tools: [...h.tools.filter(item => !_c(item, e, c)), ...H.tools]
  }), outcome_2;
}
function B_n(n) {
  if (!qa()) return;
  let {
    getAppState: getAppState_2,
    setAppState: setAppState_2,
    getDynamicMcpState: getDynamicMcpState_2,
    setDynamicMcpState: setDynamicMcpState_2,
    storageV5: storageV5,
    credentials: credentials,
    force = !1,
    spareUnchangedFrom: spareUnchangedFrom
  } = n;
  vRe(storageV5);
  let a = G(),
    R = Ft();
  if (!a.mcpIdentityChangedSinceLastCheck() && !force) return R.headlessConnectorMountInFlight;
  let P = !force || !Jit(N_e()),
    T = getDynamicMcpState_2(),
    l = [...getAppState_2().mcp.clients, ...T.clients],
    _ = new Set(),
    c = new Set(),
    h = new Set(),
    H = new Set();
  if (spareUnchangedFrom) {
    for (let s of l) H.add(s.name);
    for (let s of l) if (!spareUnchangedFrom.has(s) || s.type === "pending") H.delete(s.name);
  }
  for (let s of l) {
    if (!bE(s.config) || H.has(s.name)) {
      h.add(Jn(s.name, s.config));
      continue;
    }
    if (a.disposeServerConnectionDetached(s.name, s.config), s.config.scope === "claudeai") {
      c.add(s.name);
      continue;
    }
    if (s.type !== "disabled") _.add(s.name);
  }
  a.evictAllMcpMemosOnIdentityChange(h, hCn(l)), dG().clear();
  let f = Object.create(null),
    E = new Set(),
    U = n.getHostOwnedConfigs?.() ?? T.configs;
  for (let s of l) {
    if (!_.has(s.name) || !P) continue;
    let y = f[s.name] ?? UGr(s.name, U, s.config, Pq);
    if (!y) {
      E.add(s.name);
      continue;
    }
    let k = f[s.name] ??= y;
    if (k !== s.config && Jn(s.name, k) !== Jn(s.name, s.config)) t(`[MCP] ${s.name}: appState and dynamic-store rows disagree on config at the identity boundary \u2014 converging both under the ${Object.hasOwn(U, s.name) ? "host's" : "appState row's"} config and re-dialing it`, {
      level: "warn"
    });
  }
  let L = new Map(),
    z = qlt() && P,
    j = Object.create(null);
  for (let [s, y] of Object.entries(f)) {
    if (z && CSr(y)) {
      j[s] = y, delete f[s];
      continue;
    }
    let k = Ic(s, y);
    if (k) L.set(s, N(s, y, k)), delete f[s];
  }
  let W = [..._, ...c];
  if (W.length > 0) {
    let s = W.map(item => [item, uo(item)]),
      y = r => s.some(([x, I]) => _c(r, x, I)),
      k = r => c.has(r.name) ? [] : _.has(r.name) ? [!P || E.has(r.name) ? gCn(r.name, r.config) : L.get(r.name) ?? {
        name: r.name,
        type: "pending",
        config: f[r.name] ?? j[r.name] ?? r.config
      }] : [r];
    setAppState_2(r => ({
      ...r,
      mcp: {
        ...r.mcp,
        clients: r.mcp.clients.flatMap(k),
        tools: D$(r.mcp.tools, y),
        commands: D$(r.mcp.commands, x => W.some(item => Q_(x, item))),
        resources: Ak(r.mcp.resources, W),
        resourceTemplates: Ak(r.mcp.resourceTemplates, W)
      }
    })), setDynamicMcpState_2({
      ...T,
      clients: T.clients.flatMap(k),
      tools: T.tools.filter(item => !y(item))
    });
  }
  let u, D;
  if (z) {
    let y = TYo({
      getClients: () => getAppState_2().mcp.clients,
      getSuppressedPluginServers: () => getAppState_2().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: r => {
        let x = new Set();
        if (setAppState_2(B => {
          let mcp = r(B.mcp),
            ee = new Set(mcp.clients.map(item => item.name));
          return x = new Set(B.mcp.clients.filter(item => !ee.has(item.name)).map(item => item.name)), {
            ...B,
            mcp: mcp
          };
        }), x.size === 0) return;
        let I = getDynamicMcpState_2();
        if (!I.clients.some(item => x.has(item.name))) return;
        let F = [...x].map(item => [item, uo(item)]);
        setDynamicMcpState_2({
          ...I,
          clients: I.clients.filter(item => !x.has(item.name)),
          tools: I.tools.filter(item => !F.some(([Z, ee]) => _c(item, Z, ee)))
        });
      }
    }, storageV5, credentials);
    y.settled.catch(() => {}), D = y.mounted.catch(() => "mounted");
    let k = y.mounted.then(() => {}, r => t(`MCP connector refetch after account switch failed: ${d(r)}`, {
      level: "warn"
    })).finally(() => {
      if (R.headlessConnectorMountInFlight === k) R.headlessConnectorMountInFlight = void 0;
    });
    R.headlessConnectorMountInFlight = u = k;
  }
  if (_.size === 0 || !P) return u;
  let K = s => {
      Oye(n, s.client.name, s);
    },
    X = {
      getClients: () => [...getAppState_2().mcp.clients, ...getDynamicMcpState_2().clients],
      getSuppressedPluginServers: () => getAppState_2().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: s => setAppState_2(y => ({
        ...y,
        mcp: s(y.mcp)
      }))
    },
    J = s => {
      a.getMcpToolsCommandsAndResources(K, s, storageV5, credentials).catch(y => t(`MCP re-dial after account switch failed: ${d(y)}`, {
        level: "warn"
      })).finally(() => {
        _zt(s, X, storageV5, K).catch(y => t(`MCP re-dial retry after account switch failed: ${d(y)}`, {
          level: "warn"
        }));
      });
    };
  if (J(f), Object.keys(j).length === 0 || !D) return u;
  let attemptEpoch = Hr(),
    O = D.then(s => {
      if (s === "superseded" || !AP(attemptEpoch)) return;
      let y = Object.create(null);
      for (let [k, r] of Object.entries(j)) {
        let x = Ic(k, r);
        if (x) K({
          client: N(k, r, x),
          tools: [],
          commands: [],
          attemptEpoch: attemptEpoch
        });else y[k] = r;
      }
      if (Object.keys(y).length > 0) J(y);
    }).catch(s => t(`MCP re-dial of held claude.ai proxy entries after account switch failed: ${d(s)}`, {
      level: "warn"
    })),
    q = Promise.all([u, O]).then(() => {}).finally(() => {
      if (R.headlessConnectorMountInFlight === q) R.headlessConnectorMountInFlight = void 0;
    });
  return R.headlessConnectorMountInFlight = q, q;
}
function BGr(n, e, o, S) {
  let w = o?.type === "connected" && o.client === n.client,
    A = o !== void 0 && o.type !== "disabled" && Jn(n.name, o.config) === Jn(n.name, e);
  return !w && (!S || !A);
}
var ie = 5,
  ae = 1000;
function _Yo(n) {
  let {
      getAppState: getAppState_3,
      getDynamicMcpState: getDynamicMcpState_3,
      now = Date.now
    } = n,
    weakSet = new WeakSet(),
    weakMap = new WeakMap(),
    weakMap_2 = new WeakMap(),
    v = (M, a, R) => {
      let P = a > 1 ? Idt(a - 1) - R : 0,
        T = [...getAppState_3().mcp.clients, ...getDynamicMcpState_3().clients].some(item => item.type === "connected" && item.client === M.client);
      if (P <= 0 || !T || n.isControlReconnectInFlight(M.name)) return 0;
      try {
        n.onHeldOff?.(a, P);
      } catch (error) {
        t(`MCP reconnect hold-off observer failed for ${M.name}: ${d(error)}`, {
          level: "warn"
        });
      }
      return re(M.name, `${M.config.type} transport closed again soon after it connected: reconnecting in ${P}ms`), P;
    };
  return M => {
    for (let a of M) {
      if (a.type === "connected") weakMap_2.set(a.client, a);
      if (a.type !== "connected" || weakSet.has(a.client) || !le(a.config)) continue;
      weakSet.add(a.client);
      let R = now(),
        P = T => {
          if (ys() || n.isRunEnding()) return;
          a.cleanup().catch(() => {});
          let l = Math.max(0, now() - R),
            _ = l < XSs ? (weakMap.get(a.client) ?? 0) + 1 : 0;
          (async () => {
            let c = v(a, _, l),
              h = n.sleep ?? ce;
            if (c > 0) await h(c);
            let H = () => weakMap_2.get(a.client) ?? a;
            for (let f = 0; c > 0 && f < ie && (await G().hasUnsettledDial(H().name, H().config)); f++) await h(ae);
            await de(n, H(), T, _, c > 0, (f, E) => weakMap.set(f.client, E));
          })().catch(c => t(`MCP reconnect after close failed for ${a.name}: ${d(c)}`, {
            level: "warn"
          }));
        };
      if (oks(a, () => P(!1)), I_e(a)) setImmediate(P, !0);
    }
  };
}
function ce(n) {
  return Y(n, void 0, {
    unref: !0
  });
}
function le(n) {
  return n.type !== void 0 && n.type !== "stdio" && n.type !== "sdk";
}
async function de(n, e, found_closed, young_closes, w, A) {
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
    } = n,
    {
      name: name_4,
      config: config_2
    } = e,
    H = Hr(),
    f = () => ys() || isRunEnding() || Hr() !== H && bE(config_2),
    E = () => getAppState_4().mcp.clients.find(item => item.name === name_4) ?? getDynamicMcpState_4().clients.find(item => item.name === name_4),
    U = e,
    L = () => E() === U,
    z = u => {
      Oye(n, name_4, u);
    },
    j = G(),
    W = maxReconnectAttempts + g$n;
  for (let u = 1; u <= W; u++) {
    let D = u - maxReconnectAttempts;
    if (u > 1) await sleep(D > 0 ? SP({
      baseMs: baseMs,
      capMs: capMs,
      floorMs: baseMs / 2,
      attempt: D - 1,
      random: random
    }) : Idt(u - 1));
    if (f() || !L()) return;
    let attemptEpoch_2 = Hr();
    if (D > 0) {
      let client_4 = {
        name: name_4,
        type: "pending",
        config: config_2
      };
      if (R2e(name_4, client_4)) {
        z({
          client: client_4,
          tools: [],
          commands: [],
          attemptEpoch: attemptEpoch_2
        });
        return;
      }
      if (await j.hasUnsettledDial(name_4, config_2)) {
        if (u < W) {
          re(name_4, `Background reconnect attempt ${D}/${g$n} skipped: another reconnect to this server is in progress; will try again at the next attempt`);
          continue;
        }
        if (!f() && L() && !isControlReconnectInFlight(name_4)) re(name_4, `Reconnect gave up after ${u} attempts: another reconnect to this server is still in progress; leaving it to finish`), m("mcp_slow_reconnect", "gave_up", {
          attempts: u,
          found_closed: found_closed
        });
        return;
      }
      if (f() || !L()) return;
    } else {
      let client_5 = {
        name: name_4,
        type: "pending",
        config: config_2,
        reconnectAttempt: u,
        maxReconnectAttempts: maxReconnectAttempts
      };
      z({
        client: client_5,
        ...tZn(getAppState_4().mcp, name_4),
        attemptEpoch: attemptEpoch_2
      }), U = client_5;
    }
    if (!L() || isControlReconnectInFlight(name_4)) return;
    re(name_4, u === 1 ? `${config_2.type} transport ${found_closed ? "had already closed when wired" : "closed"} \u2014 reconnecting (attempt 1/${maxReconnectAttempts})` : D > 0 ? `Background reconnect attempt ${D}/${g$n}` : `Reconnect attempt ${u}/${maxReconnectAttempts}`);
    let X = w && u === 1 ? await j.peekSettledConnection(name_4, config_2) : void 0,
      client_6 = X?.type === "connected" && !I_e(X) ? Aoe(X, config_2) : void 0,
      V = {
        ...(client_6 !== void 0 ? {
          client: client_6,
          ...tZn(getAppState_4().mcp, name_4)
        } : await j.reconnectMcpServerImpl(name_4, config_2, storageV5_2, credentials_2, {
          keepConnectionInUse: !0
        }).catch(F => ({
          client: {
            name: name_4,
            type: "failed",
            config: config_2,
            error: d(F)
          },
          tools: [],
          commands: []
        }))),
        attemptEpoch: attemptEpoch_2
      },
      O = V.client.type === "connected" ? V.client : void 0,
      q = O !== void 0 && M_e(await j.peekSettledConnection(name_4, config_2), O),
      s = () => {
        if (O && BGr(O, config_2, E(), q && !isRunEnding())) j.detachAndCloseConnection(O).catch(() => {});
      };
    if (f() || !L() || isControlReconnectInFlight(name_4)) {
      s();
      return;
    }
    let y = V.keptConnectionInUse === !0 && O?.toolsListError !== void 0 && R2e(name_4, O) === void 0;
    if (O && q && !y) {
      if (A(O, young_closes + u - 1), z(V), E() === O) {
        if (O === client_6) noe(O, (F, B) => {
          ne(n, F, B, O.config);
        }, storageV5_2).catch(F => t(`MCP tools refresh over a kept connection failed for ${name_4}: ${d(F)}`, {
          level: "warn"
        }));
        re(name_4, `Reconnected (attempt ${u})`), g(D > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", {
          attempts: u,
          found_closed: found_closed,
          young_closes: young_closes
        }), onReconnected(O);
      }
      return;
    }
    s();
    let k = O && {
        name: name_4,
        type: "failed",
        config: config_2,
        error: y ? "Its tools could not be listed" : "Connection closed again while reconnecting"
      },
      client_7 = k ?? V.client,
      x = k ? {
        ...k,
        errorCode: "ConnectionClosed"
      } : client_7,
      goes_slow = yPt(x);
    if (u === maxReconnectAttempts || D > 0 && (!goes_slow || u === W)) {
      if (re(name_4, D <= 0 && goes_slow ? `Still failing after ${u} attempts` : `Reconnect gave up after ${u} attempts: ${client_7.type}`), z({
        client: client_7,
        tools: client_7.type === "needs-auth" ? U$(name_4, config_2) : [],
        commands: [],
        attemptEpoch: attemptEpoch_2
      }), E() !== client_7) return;
      if (client_7.type === "needs-auth") {
        p(D > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", "needs_auth", {
          attempts: u,
          found_closed: found_closed,
          young_closes: young_closes
        });
        return;
      }
      if (D > 0) {
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
      U = client_7, re(name_4, `Reconnect attempts spent; retrying in the background, up to ${g$n} more times`);
      continue;
    }
    re(name_4, D > 0 ? `Background reconnect attempt ${D} did not connect (${client_7.type})` : `Reconnect attempt ${u} did not connect (${client_7.type}); next in ${Idt(u)}ms`);
  }
}
var weakMap_3 = new WeakMap();
function bYo(n) {
  return weakMap_3.get(n);
}
function ne(n, e, o, S) {
  let {
      setAppState: setAppState_3,
      getDynamicMcpState: getDynamicMcpState_5,
      setDynamicMcpState: setDynamicMcpState_3
    } = n,
    v = !1,
    M = !1,
    a;
  setAppState_3(l => {
    let row = l.mcp.clients.find(item => item.name === e),
      tools = $2t(row, o, S);
    if (tools === void 0) return M = !0, l;
    let h = Cwn(l, e, tools);
    return v = h !== l, a = v && row !== void 0 ? {
      row: row,
      tools: tools
    } : void 0, h;
  });
  let R = getDynamicMcpState_5(),
    P = R.clients.find(item => item.name === e),
    T = $2t(P, o, S);
  if (T === void 0) M = !0;else {
    let l = i9o(R, e, T);
    if (l !== R) setDynamicMcpState_3(l), v = !0;
  }
  if (a !== void 0) if (P?.type === "pending") weakMap_3.set(a.row, a.tools);else weakMap_3.delete(a.row);
  if (M) re(e, "A re-queried tool list was not applied: another server holds the name");
  return v;
}
function SYo(n) {
  return (e, o, S) => ne(n, e, o, S);
}
function wYo(n) {
  let {
      getAppState: getAppState_5,
      getDynamicMcpState: getDynamicMcpState_6
    } = n.stores,
    weakSet_2 = new WeakSet(),
    weakMap_4 = new WeakMap();
  return A => {
    for (let C of A) {
      if (C.type === "connected") weakMap_4.set(C.client, C);
      if (C.type !== "connected" || weakSet_2.has(C.client)) continue;
      if (weakSet_2.add(C.client), !C.capabilities?.tools?.listChanged) continue;
      let v = C.name;
      G().onMcpToolListChanged(C, async M => {
        re(v, M === eie ? "Synthesized tools refetch after listen-stream reopen (no notification received)" : M === Z6e ? "Refreshing tools for a tools/list_changed notification received before this handler was registered" : "Received tools/list_changed notification, refreshing tools");
        let a = getAppState_5().mcp.clients.find(item => item.name === v) ?? getDynamicMcpState_6().clients.find(item => item.name === v),
          R = weakMap_4.get(C.client) ?? C,
          P = a !== void 0 && Jn(v, a.config) === Jn(v, R.config) ? Aoe(R, a.config) : R;
        weakMap_4.set(C.client, P);
        let T = await noe(P, (c, h) => {
          ne(n.stores, c, h, P.config);
        }, n.storageV5);
        if (T.status === "kept-previous") {
          re(v, "tools/list failed after list_changed \u2014 keeping previous tool set");
          return;
        }
        let newCount = T.newTools.length,
          _ = previousCount => i("tengu_mcp_list_changed", {
            mcpServerKeyHash: UO(v),
            type: b("tools"),
            cause: e$e(M),
            previousCount: previousCount,
            newCount: newCount,
            ...Mes(C)
          });
        if (T.previousToolsPromise) T.previousToolsPromise.then(c => _(c.length), () => _());else _();
      });
    }
  };
}
export { UGr, yYo, tZn, R2e, Oye, B_n, BGr, _Yo, bYo, SYo, wYo };