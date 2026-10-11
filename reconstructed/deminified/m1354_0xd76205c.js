// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { ne } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { ss } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { fD } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { jt } from "B:/~BUN/root/chunk-dv435n4g.js";
import { Qh, fve, Vi, BGe, na, Hf, Oen, dB, xot, Uo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { XCo } from "B:/~BUN/root/chunk-rtxwm8ds.js";
import { kB } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Er } from "B:/~BUN/root/chunk-yzpw1mdr.js";
import { c9, d9 as maxReconnectAttempts, kst } from "B:/~BUN/root/chunk-aa7kpy4p.js";
import { jpe, br, dS, q2e, y9t, _9t } from "B:/~BUN/root/chunk-brdpd4rf.js";
import { oht, d6r } from "B:/~BUN/root/chunk-0ew8mda7.js";
import { Uue } from "B:/~BUN/root/chunk-x3g0tez1.js";
import { Fpe, bM } from "B:/~BUN/root/chunk-4f8jbn9e.js";
import { kue, k8r, SGt } from "B:/~BUN/root/chunk-7yf8jrt2.js";
import { RH } from "B:/~BUN/root/chunk-6q5vhtfh.js";
import { H8t } from "B:/~BUN/root/chunk-41rbevax.js";
import { kO } from "B:/~BUN/root/chunk-tg1j81wg.js";
import { hi, xc } from "B:/~BUN/root/chunk-w5bkq1td.js";
function V() {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule();
}
function AJn(s, n, o, r) {
  if (Object.hasOwn(n, s)) return n[s];
  if (o && !Oen.has(o.scope)) return o;
  return r ? r(s) : o ?? null;
}
function xJn(name, n) {
  let o = n.type !== "failed" ? Hf(name, n.config) : void 0;
  if (o === "managed-policy") return q(name, n.config, o);
  if (Uo(name)) return {
    name: name,
    type: "disabled",
    config: n.config
  };
  return o ? q(name, n.config, o) : void 0;
}
function q(name_2, config, o) {
  return {
    name: name_2,
    type: "failed",
    config: config,
    ...kO(o)
  };
}
function cbe(s, n, o) {
  let {
      getAppState: getAppState,
      setAppState: setAppState,
      getDynamicMcpState: getDynamicMcpState,
      setDynamicMcpState: setDynamicMcpState
    } = s,
    w = () => {
      if (o.client.type === "connected") V().detachAndCloseConnection(o.client).catch(() => {});
    },
    P = getAppState().mcp.clients.find(item => item.name === n),
    S = getDynamicMcpState().clients.find(item => item.name === n);
  if (!P && !S) return w(), "dropped";
  let A = Er(n, o.client.config),
    a = u => u !== void 0 && Er(n, u.config) !== A;
  if (a(P) || a(S)) return t(`[MCP] ${n}: dropping a settlement whose slot config changed mid-flight`), w(), "dropped";
  if (q2e(o.client.config, o.attemptEpoch)) return t(`[MCP] ${n}: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)`), w(), "superseded";
  let d = o,
    k = "applied";
  if (o.client.type !== "disabled") {
    let client = xJn(n, o.client);
    if (client) {
      if (w(), client.type === "failed") V().dropDiscoveryEntry(n, o.client.config).catch(() => {});
      d = {
        client: client,
        tools: [],
        commands: [],
        resources: [],
        attemptEpoch: o.attemptEpoch
      }, k = "refused";
    }
  }
  if (setAppState(u => {
    let R = kue(u, n, d, {
        appendIfAbsent: d.client.config.type !== "sdk"
      }),
      T = !!d.resources && d.resources.length > 0,
      x = !!d.resourceTemplates && d.resourceTemplates.length > 0;
    return T && x ? R : {
      ...R,
      mcp: {
        ...R.mcp,
        resources: T ? R.mcp.resources : ss(R.mcp.resources, n),
        resourceTemplates: x ? R.mcp.resourceTemplates : ss(R.mcp.resourceTemplates, n)
      }
    };
  }), !S) return k;
  let H = hi(n),
    D = getDynamicMcpState();
  return setDynamicMcpState({
    ...D,
    clients: D.clients.map(item => item.name === n ? d.client : item),
    tools: [...D.tools.filter(item => !xc(item, n, H)), ...d.tools]
  }), k;
}
function Hzt(s) {
  if (!Vi()) return;
  let {
    getAppState: getAppState_2,
    setAppState: setAppState_2,
    getDynamicMcpState: getDynamicMcpState_2,
    setDynamicMcpState: setDynamicMcpState_2,
    storageV5: storageV5,
    credentials: credentials,
    force = !1,
    spareUnchangedFrom: spareUnchangedFrom
  } = s;
  Fpe(storageV5);
  let S = V(),
    A = jt();
  if (!S.mcpIdentityChangedSinceLastCheck() && !force) return A.headlessConnectorMountInFlight;
  let a = !force || !BGe(jpe()),
    d = getDynamicMcpState_2(),
    k = [...getAppState_2().mcp.clients, ...d.clients],
    H = new Set(),
    D = new Set(),
    u = new Set(),
    R = new Set();
  if (spareUnchangedFrom) {
    for (let e of k) R.add(e.name);
    for (let e of k) if (!spareUnchangedFrom.has(e) || e.type === "pending") R.delete(e.name);
  }
  for (let e of k) {
    if (!dS(e.config) || R.has(e.name)) {
      u.add(Er(e.name, e.config));
      continue;
    }
    if (S.disposeServerConnectionDetached(e.name, e.config), e.config.scope === "claudeai") {
      D.add(e.name);
      continue;
    }
    if (e.type !== "disabled") H.add(e.name);
  }
  S.evictAllMcpMemosOnIdentityChange(u, _9t(k)), kB().clear();
  let T = Object.create(null),
    x = new Set(),
    f = s.getHostOwnedConfigs?.() ?? d.configs;
  for (let e of k) {
    if (!H.has(e.name) || !a) continue;
    let h = T[e.name] ?? AJn(e.name, f, e.config, dB);
    if (!h) {
      x.add(e.name);
      continue;
    }
    let b = T[e.name] ??= h;
    if (b !== e.config && Er(e.name, b) !== Er(e.name, e.config)) t(`[MCP] ${e.name}: appState and dynamic-store rows disagree on config at the identity boundary \u2014 converging both under the ${Object.hasOwn(f, e.name) ? "host's" : "appState row's"} config and re-dialing it`, {
      level: "warn"
    });
  }
  let F = new Map();
  for (let [e, h] of Object.entries(T)) {
    let b = Hf(e, h);
    if (b) F.set(e, q(e, h, b)), delete T[e];
  }
  let I = [...H, ...D];
  if (I.length > 0) {
    let e = I.map(item => [item, hi(item)]),
      h = c => e.some(([g, O]) => xc(c, g, O)),
      b = c => D.has(c.name) ? [] : H.has(c.name) ? [!a || x.has(c.name) ? y9t(c.name, c.config) : F.get(c.name) ?? {
        name: c.name,
        type: "pending",
        config: T[c.name] ?? c.config
      }] : [c];
    setAppState_2(c => ({
      ...c,
      mcp: {
        ...c.mcp,
        clients: c.mcp.clients.flatMap(b),
        tools: RH(c.mcp.tools, h),
        commands: RH(c.mcp.commands, g => I.some(item => Qh(g, item))),
        resources: ss(c.mcp.resources, I),
        resourceTemplates: ss(c.mcp.resourceTemplates, I)
      }
    })), setDynamicMcpState_2({
      ...d,
      clients: d.clients.flatMap(b),
      tools: d.tools.filter(item => !h(item))
    });
  }
  let B;
  if (xot() && a) {
    let h = d6r({
      getClients: () => getAppState_2().mcp.clients,
      getSuppressedPluginServers: () => getAppState_2().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: c => {
        let g = new Set();
        if (setAppState_2(E => {
          let mcp = c(E.mcp),
            W = new Set(mcp.clients.map(item => item.name));
          return g = new Set(E.mcp.clients.filter(item => !W.has(item.name)).map(item => item.name)), {
            ...E,
            mcp: mcp
          };
        }), g.size === 0) return;
        let O = getDynamicMcpState_2();
        if (!O.clients.some(item => g.has(item.name))) return;
        let z = [...g].map(item => [item, hi(item)]);
        setDynamicMcpState_2({
          ...O,
          clients: O.clients.filter(item => !g.has(item.name)),
          tools: O.tools.filter(item => !z.some(([K, W]) => xc(item, K, W)))
        });
      }
    }, storageV5, credentials);
    h.settled.catch(() => {});
    let b = h.mounted.then(() => {}, c => t(`MCP connector refetch after account switch failed: ${l(c)}`, {
      level: "warn"
    })).finally(() => {
      if (A.headlessConnectorMountInFlight === b) A.headlessConnectorMountInFlight = void 0;
    });
    A.headlessConnectorMountInFlight = B = b;
  }
  if (H.size === 0 || !a) return B;
  let L = e => {
      cbe(s, e.client.name, e);
    },
    j = {
      getClients: () => [...getAppState_2().mcp.clients, ...getDynamicMcpState_2().clients],
      getSuppressedPluginServers: () => getAppState_2().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: e => setAppState_2(h => ({
        ...h,
        mcp: e(h.mcp)
      }))
    };
  return S.getMcpToolsCommandsAndResources(L, T, storageV5, credentials).catch(e => t(`MCP re-dial after account switch failed: ${l(e)}`, {
    level: "warn"
  })).finally(() => {
    oht(T, j, storageV5, L).catch(e => t(`MCP re-dial retry after account switch failed: ${l(e)}`, {
      level: "warn"
    }));
  }), B;
}
function i6r(s) {
  let weakSet = new WeakSet();
  return o => {
    for (let r of o) {
      if (r.type !== "connected" || weakSet.has(r.client) || !X(r.config)) continue;
      weakSet.add(r.client);
      let v = M => {
        if (na() || s.isRunEnding()) return;
        J(s, r, M).catch(C => t(`MCP reconnect after close failed for ${r.name}: ${l(C)}`, {
          level: "warn"
        }));
      };
      if (XCo(r, () => v(!1)), H8t(r)) setImmediate(v, !0);
    }
  };
}
function G(s) {
  return Q(s, void 0, {
    unref: !0
  });
}
function X(s) {
  return s.type !== void 0 && s.type !== "stdio" && s.type !== "sdk";
}
async function J(s, n, found_closed) {
  let {
      getAppState: getAppState_3,
      getDynamicMcpState: getDynamicMcpState_3,
      storageV5: storageV5_2,
      credentials: credentials_2,
      isControlReconnectInFlight: isControlReconnectInFlight,
      isRunEnding: isRunEnding,
      onReconnected: onReconnected,
      sleep = G
    } = s,
    {
      name: name_3,
      config: config_2
    } = n,
    k = br(),
    H = () => na() || isRunEnding() || br() !== k && dS(config_2),
    D = () => getAppState_3().mcp.clients.find(item => item.name === name_3) ?? getDynamicMcpState_3().clients.find(item => item.name === name_3),
    u = n,
    R = () => D() === u,
    T = f => {
      cbe(s, name_3, f);
    },
    x = V();
  for (let f = 1; f <= maxReconnectAttempts; f++) {
    if (f > 1) await sleep(kst(f - 1));
    if (H() || !R()) return;
    let attemptEpoch = br(),
      I = hi(name_3),
      mcp_2 = getAppState_3().mcp,
      client_2 = {
        name: name_3,
        type: "pending",
        config: config_2,
        reconnectAttempt: f,
        maxReconnectAttempts: maxReconnectAttempts
      };
    if (T({
      client: client_2,
      tools: mcp_2.tools.filter(item => xc(item, name_3, I)),
      commands: mcp_2.commands.filter(item => Qh(item, name_3)),
      resources: mcp_2.resources[name_3],
      resourceTemplates: mcp_2.resourceTemplates[name_3],
      attemptEpoch: attemptEpoch
    }), u = client_2, !R() || isControlReconnectInFlight(name_3)) return;
    ne(name_3, f === 1 ? `${config_2.type} transport ${found_closed ? "had already closed when wired" : "closed"} \u2014 reconnecting (attempt 1/${maxReconnectAttempts})` : `Reconnect attempt ${f}/${maxReconnectAttempts}`);
    let j = {
        ...(await x.reconnectMcpServerImpl(name_3, config_2, storageV5_2, credentials_2).catch(g => ({
          client: {
            name: name_3,
            type: "failed",
            config: config_2,
            error: l(g)
          },
          tools: [],
          commands: []
        }))),
        attemptEpoch: attemptEpoch
      },
      e = j.client.type === "connected" ? j.client : void 0,
      h = e !== void 0 && (await x.peekSettledConnection(name_3, config_2)) === e,
      b = () => {
        if (!e) return;
        let g = D(),
          O = g?.type === "connected" && g.client === e.client,
          z = g !== void 0 && Er(name_3, g.config) === Er(name_3, config_2);
        if (!O && (!h || !z)) x.detachAndCloseConnection(e).catch(() => {});
      };
    if (H() || !R() || isControlReconnectInFlight(name_3)) {
      b();
      return;
    }
    if (e && h) {
      if (T(j), D() === e) ne(name_3, `Reconnected (attempt ${f})`), _("mcp_auto_reconnect", {
        attempts: f,
        found_closed: found_closed
      }), onReconnected(e);
      return;
    }
    b();
    let client_3 = e ? {
      name: name_3,
      type: "failed",
      config: config_2,
      error: "Connection closed again while reconnecting"
    } : j.client;
    if (f === maxReconnectAttempts) {
      if (ne(name_3, `Reconnect gave up after ${f} attempts: ${client_3.type}`), T({
        client: client_3,
        tools: client_3.type === "needs-auth" ? bM(name_3, config_2) : [],
        commands: [],
        attemptEpoch: attemptEpoch
      }), D() === client_3) if (client_3.type === "needs-auth") p("mcp_auto_reconnect", "needs_auth", {
        attempts: f,
        found_closed: found_closed
      });else m("mcp_auto_reconnect", "exhausted", {
        attempts: f,
        found_closed: found_closed
      });
      return;
    }
    ne(name_3, `Reconnect attempt ${f} did not connect (${client_3.type}); next in ${kst(f)}ms`);
  }
}
function PJn(s, n, o) {
  let {
      setAppState: setAppState_3,
      getDynamicMcpState: getDynamicMcpState_4,
      setDynamicMcpState: setDynamicMcpState_3
    } = s,
    C = !1;
  setAppState_3(S => {
    let A = SGt(S, n, o);
    return C = A !== S, A;
  });
  let w = getDynamicMcpState_4(),
    P = k8r(w, n, o);
  if (P !== w) setDynamicMcpState_3(P), C = !0;
  return C;
}
function a6r(s) {
  let weakSet_2 = new WeakSet();
  return o => {
    for (let r of o) {
      if (r.type !== "connected" || weakSet_2.has(r.client)) continue;
      if (weakSet_2.add(r.client), !r.capabilities?.tools?.listChanged) continue;
      let v = r.name;
      V().onMcpToolListChanged(r, async M => {
        ne(v, M === c9 ? "Synthesized tools refetch after listen-stream reopen (no notification received)" : "Received tools/list_changed notification, refreshing tools");
        let C = await Uue(r, (S, A) => {
          PJn(s.stores, S, A);
        }, s.storageV5);
        if (C.status === "kept-previous") {
          ne(v, "tools/list failed after list_changed \u2014 keeping previous tool set");
          return;
        }
        let newCount = C.newTools.length,
          P = previousCount => i("tengu_mcp_list_changed", {
            mcpServerKeyHash: fD(v),
            type: y("tools"),
            cause: fve(M),
            previousCount: previousCount,
            newCount: newCount
          });
        if (C.previousToolsPromise) C.previousToolsPromise.then(S => P(S.length), () => P());else P();
      });
    }
  };
}
export { AJn, xJn, cbe, Hzt, i6r, PJn, a6r };