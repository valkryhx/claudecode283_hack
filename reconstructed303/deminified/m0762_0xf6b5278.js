// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { bzo } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Y } from "B:/~BUN/root/chunk-89mss1tj.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l, re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { sk, Ps, b_t } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { vi } from "B:/~BUN/root/chunk-8z3a373v.js";
import { yo } from "B:/~BUN/root/chunk-9kme2ye7.js";
import { Ft } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { qa, YAt, fHe, W0n, G0n, Ak, hPt, i6e, ZXt, Q_, cpe, _Pt, xq, cQt, wOt, hU, Ic, RT, Oo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Qpe } from "B:/~BUN/root/chunk-xyxdcn7p.js";
import { YR } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { kr, oje } from "B:/~BUN/root/chunk-t3p4x0tq.js";
import { Hr, AP, qrt } from "B:/~BUN/root/chunk-jynk66qn.js";
import { D$ } from "B:/~BUN/root/chunk-mkmzcfhg.js";
import { J_, HRn } from "B:/~BUN/root/chunk-pj523hfd.js";
import { Xns } from "B:/~BUN/root/chunk-mhrrrs4g.js";
import { pBe } from "B:/~BUN/root/chunk-pp32733x.js";
import { Fx } from "B:/~BUN/root/chunk-c6mbjdcy.js";
import { uo, _c } from "B:/~BUN/root/chunk-b0487zs4.js";
function w() {
  return import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule();
}
function D(n) {
  let r = performance.now();
  try {
    let e = w();
    if (oje("mcp_client_module_load_ms") === void 0) kr("mcp_client_module_load_ms", performance.now() - r, r);
    return e;
  } catch (error) {
    l(error), t(`[MCP] ${n} connect error: ${error}`);
    return;
  }
}
var vYo = 1000,
  yzt = [500, 1500, 4000],
  I = yzt.reduce((acc, item) => acc + item, 0);
function kYo(n) {
  let {
      regularMcpConfigs: r,
      claudeaiConfigPromise: claudeaiConfigPromise,
      state: state,
      storageV5: storageV5,
      credentials: credentials,
      knownListings: knownListings,
      dialInConnect: dialInConnect,
      onDialStart: onDialStart,
      dialFirst: dialFirst,
      dialOptions: dialOptions,
      leaveAlwaysLoadWaitTo: leaveAlwaysLoadWaitTo
    } = n,
    epoch = Hr(),
    nonBlocking = a.MCP_CONNECTION_NONBLOCKING !== !1;
  bzo(nonBlocking);
  let deferConnect = nonBlocking;
  async function connect() {
    yo("before_mcp_connect_user"), yo("before_mcp_connect_connector");
    let R = jGr({
        configs: r,
        label: "regular",
        nonBlocking: nonBlocking,
        dialInConnect: dialInConnect,
        onDialStart: onDialStart,
        dialFirst: dialFirst,
        dialOptions: dialOptions,
        state: state,
        storageV5: storageV5,
        credentials: credentials,
        knownListings: knownListings,
        leaveAlwaysLoadWaitTo: leaveAlwaysLoadWaitTo
      }).then(() => yo("after_mcp_connect_user")),
      h = B(nonBlocking, () => claudeaiConfigPromise.then(claudeaiConfigs => x({
        claudeaiConfigs: claudeaiConfigs,
        regularMcpConfigs: r,
        state: state,
        deferConnect: deferConnect,
        storageV5: storageV5,
        epoch: epoch
      })).then(g => g === "superseded" ? [] : g), "claude.ai connectors").then(() => yo("after_mcp_connect_connector"));
    await Promise.all([R, h]);
  }
  return {
    connect: connect
  };
}
function EYo(n) {
  return a.CLAUDE_CODE_MCP_ALWAYS_LOAD_JOIN_BEFORE_INPUT === !0 && Boolean(n) && !Fx();
}
function jGr(n) {
  let {
      configs: configs,
      label: label,
      nonBlocking: nonBlocking_2,
      state: state_2,
      storageV5: storageV5_2,
      credentials: credentials_2,
      knownListings: knownListings_2,
      dialInConnect: dialInConnect_2,
      onDialStart: onDialStart_2,
      dialFirst: dialFirst_2,
      dialOptions: dialOptions_2,
      leaveAlwaysLoadWaitTo: leaveAlwaysLoadWaitTo_2
    } = n,
    M = (g, S) => g.alwaysLoad === !0 || knownListings_2 !== void 0 && Object.hasOwn(knownListings_2, S),
    P = leaveAlwaysLoadWaitTo_2 === void 0 ? {} : YR(configs, (g, S) => g.alwaysLoad === !0 && g.scope === "dynamic" && !sk(g) && !(knownListings_2 !== void 0 && Object.hasOwn(knownListings_2, S))),
    b = YR(configs, (g, S) => M(g, S) && !Object.hasOwn(P, S)),
    R = YR(configs, (g, S) => !M(g, S)),
    h = Object.keys(b).length > 0;
  if (Object.keys(P).length > 0) {
    let g = k(P, `${label}-required`, state_2, !1, storageV5_2, credentials_2, knownListings_2, onDialStart_2, dialFirst_2, dialOptions_2);
    leaveAlwaysLoadWaitTo_2?.(() => B(!1, () => g, "--mcp-config alwaysLoad servers"));
  }
  return Promise.all([...(h ? [B(!1, () => k(b, `${label}-required`, state_2, !1, storageV5_2, credentials_2, knownListings_2, onDialStart_2, dialFirst_2, dialOptions_2), "--mcp-config alwaysLoad servers")] : []), B(nonBlocking_2, () => k(R, label, state_2, nonBlocking_2 && !dialInConnect_2, storageV5_2, credentials_2, knownListings_2, onDialStart_2, dialFirst_2, dialOptions_2), "--mcp-config servers")]).then(() => {});
}
function k(n, r, e, p = !1, c, s, d, o, u, f) {
  let m = Object.keys(n);
  if (m.length === 0) return [];
  e.applyMcpUpdate(h => ({
    ...h,
    clients: [...h.clients, ...Object.entries(n).map(([name, config]) => ({
      name: name,
      type: "pending",
      config: config
    }))]
  }));
  let C = new Map(),
    y = m.map(item => new Promise(g => C.set(item, g))),
    M = Promise.withResolvers(),
    P = new Set(),
    b = h => {
      for (let g of Object.keys(h)) P.add(g);
      _zt(h, e, c, void 0, M.promise).catch(g => t(`[MCP] ${r} retry error: ${g}`)).finally(() => {
        for (let g of Object.keys(h)) P.delete(g);
      });
    },
    R = () => {
      let h = D(r);
      if (!h) {
        for (let S of C.values()) S();
        return;
      }
      if (o !== void 0 && m.some(item => !Object.hasOwn(d ?? {}, item))) o();
      let g = u === void 0 ? n : {
        ...YR(n, (S, O) => u(O)),
        ...n
      };
      h.getMcpToolsCommandsAndResources(S => {
        nZn(e, S), Xns();
        let {
          name: name_2
        } = S.client;
        if (C.get(name_2)?.(), !P.has(name_2)) {
          let v = YR(n, (L, _) => _ === name_2);
          if (j_n(v, e).length > 0) b(v);
        }
      }, g, c, s, d, !0, void 0, f).catch(S => t(`[MCP] ${r} connect error: ${S}`)).finally(() => {
        for (let S of C.values()) S();
        M.resolve(performance.now()), b(YR(n, (S, O) => !P.has(O)));
      });
    };
  if (p) setImmediate(R);else R();
  return y;
}
function nZn(n, r) {
  let {
      client: client,
      tools: tools,
      commands: commands,
      attemptEpoch: attemptEpoch
    } = r,
    d,
    o = "applied",
    u = qrt(client.config, attemptEpoch);
  return n.applyMcpUpdate(f => {
    o = "applied", d = void 0;
    let m = f.clients.find(item => item.name === client.name);
    if (!m || !w().areMcpConfigsEqual(m.config, client.config)) {
      if (client.type === "connected") re(client.name, m ? "applyConnectionResult: disposing orphaned connect (slot config changed mid-flight)" : "applyConnectionResult: disposing orphaned connect (slot removed mid-flight)"), d = () => T(client);
      return o = "dropped", f;
    }
    if (u) {
      if (re(client.name, "applyConnectionResult: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)"), client.type === "connected") d = () => {
        w().detachAndCloseConnection(client).catch(() => {});
      };
      return o = "superseded", f;
    }
    let C = qa() && client.type !== "failed" && client.type !== "disabled" ? Ic(client.name, client.config) : null;
    if (qa() && C !== "managed-policy" && !HRn(client) && Oo(client.name) && client.type !== "disabled") {
      let y = client.type === "connected" && m.type === "connected" && m.client === client.client;
      if (client.type === "connected" && !y) re(client.name, "applyConnectionResult: disposing connect that settled after a disable"), d = () => T(client);
      if (o = "refused", m.type === "disabled" || m.type === "connected" && Ps(client)) return f;
      return E(f, {
        name: client.name,
        type: "disabled",
        config: m.config
      });
    }
    if (C) {
      if (client.type === "connected") re(client.name, `applyConnectionResult: disposing connect that settled after a ${C} deny`);
      return d = () => {
        if (client.type === "connected") T(client);
        w().dropDiscoveryEntry(client.name, client.config).catch(() => {});
      }, o = "refused", E(f, {
        name: client.name,
        type: "failed",
        config: m.config,
        ...J_(C, client.name, client.config)
      });
    }
    if (!b_t(m, client)) return o = "dropped", f;
    return {
      ...f,
      clients: f.clients.map(item => item.name === client.name ? client : item),
      tools: vi([...f.tools, ...tools], "name"),
      commands: vi([...f.commands, ...commands], "name")
    };
  }), d?.(), o;
}
function j_n(n, r, e = !0) {
  let p = r.getClients();
  return Object.entries(n).filter(([c, s]) => {
    let d = p.find(item => item.name === c);
    return d !== void 0 && (hPt(d) || e && i6e(d)) && w().areMcpConfigsEqual(d.config, s);
  });
}
function WGr(n) {
  let r = e => {
    let transientRetryPasses = Ft().transientRetryPasses;
    for (let c of n) {
      let s = (transientRetryPasses.get(c) ?? 0) + e;
      if (s > 0) transientRetryPasses.set(c, s);else transientRetryPasses.delete(c);
    }
  };
  return r(1), {
    [Symbol.dispose]: () => r(-1)
  };
}
async function _zt(n, r, e, p = s => nZn(r, s), c) {
  let s = () => j_n(n, r);
  if (s().length === 0) return;
  using d = WGr(Object.keys(n));
  let attemptEpoch_2 = Hr(),
    {
      signal: signal
    } = r,
    f = performance.now(),
    m = 0;
  for (let [y, delayMs] of yzt.entries()) {
    let P = y === yzt.length - 1;
    if (await Y(delayMs, signal), c !== void 0 && P) {
      let v = (await c) + I + m;
      await Y(Math.max(0, v - performance.now()), signal);
    }
    if (signal?.aborted) return;
    if (Hr() !== attemptEpoch_2) {
      t("[MCP] Retry: identity changed during backoff, stopping (these rows belong to the previous account)");
      return;
    }
    let b = j_n(n, r, P);
    if (b.length === 0) {
      if (s().length > 0) continue;
      t("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
    t(`[MCP] Retry attempt ${y + 1}: ${b.length} transiently-failed remote server(s)`);
    let R = [];
    for (let v of b) {
      if (!(await w().discardMemoizedConnectResult(...v))) continue;
      let [name_3, config_2] = v,
        j = Ic(name_3, config_2);
      if (j) {
        p({
          client: {
            name: name_3,
            type: "failed",
            config: config_2,
            ...J_(j, name_3, config_2)
          },
          tools: [],
          commands: [],
          attemptEpoch: attemptEpoch_2
        });
        continue;
      }
      R.push(v);
    }
    if (R.length === 0 || signal?.aborted) continue;
    let recovered = 0,
      stillRetryable = 0,
      S = performance.now(),
      sincePassStartMs = Math.round(S - f);
    if (await w().getMcpToolsCommandsAndResources(v => {
      if (!signal?.aborted) {
        if (p(v), v.client.type === "connected") recovered++;else if (ZXt(v.client)) stillRetryable++;
      } else if (v.client.type === "connected") w().detachAndCloseConnection(v.client).catch(() => {});
    }, Object.fromEntries(R), e), m += performance.now() - S, !signal?.aborted) i("tengu_mcp_connect_retry_attempt", {
      attempt: y + 1,
      delayMs: delayMs,
      sincePassStartMs: sincePassStartMs,
      retryable: b.length,
      dialed: R.length,
      recovered: recovered,
      stillRetryable: stillRetryable
    });
    if (s().length === 0) {
      t("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
  }
  let C = s();
  if (C.length > 0) t(`[MCP] Retry: ${C.length} remote server(s) still failed after all retries: ${C.map(([y]) => y).join(", ")}`);
}
async function B(n, r, e) {
  if (n) {
    Promise.resolve(r()).catch(() => {}), t(`[MCP] ${e} running fully async (nonblocking)`);
    return;
  }
  let p = r(),
    c = Date.now(),
    s = pBe(),
    d;
  if (Array.isArray(p)) d = p;else {
    let m,
      C = await Promise.race([p.catch(y => (l(y), "failed")), new Promise(y => {
        m = setTimeout(M => M("deadline"), s, y);
      })]);
    if (clearTimeout(m), C === "deadline") {
      t(`[MCP] ${e} config fetch not ready after ${s}ms \u2014 proceeding; background connection continues`);
      return;
    }
    if (C === "failed") {
      t(`[MCP] ${e} batch failed to start \u2014 proceeding without waiting on it`);
      return;
    }
    d = C;
  }
  let o = Math.max(0, s - (Date.now() - c));
  if (d.length === 0) return;
  let u = D(e);
  if (!u) return;
  let f = await u.awaitEachWithDeadline(d, o);
  if (f > 0) t(`[MCP] ${e}: ${f}/${d.length} not ready after ${s}ms \u2014 proceeding; background connection continues`);
}
function TYo(state_3, storageV5_3, e) {
  W0n(), G0n();
  let epoch_2 = Hr(),
    c = (async () => {
      let s = await fHe(e);
      if (!AP(epoch_2)) return A("list fetch");
      let {
        allowed: d,
        blocked: blocked
      } = hU(s);
      if (YAt(), blocked.length > 0) t(`[MCP] claude.ai connectors blocked by enterprise policy after account switch: ${blocked.join(", ")}`);
      let restorablePlugins = await N(state_3, storageV5_3),
        regularMcpConfigs = Object.fromEntries([...Object.entries(restorablePlugins), ...state_3.getClients().filter(item => item.config.scope !== "claudeai").map(item => [item.name, item.config])]);
      return x({
        claudeaiConfigs: d,
        regularMcpConfigs: regularMcpConfigs,
        state: state_3,
        deferConnect: !1,
        storageV5: storageV5_3,
        epoch: epoch_2,
        restorablePlugins: restorablePlugins
      });
    })();
  return {
    mounted: c.then(s => s === "superseded" ? s : "mounted"),
    settled: c.then(s => s === "superseded" ? [] : Promise.all(s)).then(() => {})
  };
}
function A(n) {
  return t(`[MCP] claude.ai connector list superseded by an account switch (${n}) \u2014 not mounting`), "superseded";
}
async function x(n) {
  if (!AP(n.epoch)) return A("list fetch");
  let r = await U(n);
  if (!AP(n.epoch)) return A("dedup");
  return [...F(n.restorablePlugins ?? {}, r.suppressedPlugins, n.state, n.storageV5), ...z(r, n.state, n.deferConnect, n.storageV5)];
}
async function N(n, storageV5_4) {
  let e = n.getSuppressedPluginServers();
  if (e.length === 0) return {};
  let {
      servers: servers
    } = await RT({}, {
      storageV5: storageV5_4
    }),
    c = {},
    s = new Set();
  for (let d of e) {
    let o = servers[d];
    if (o && o.pluginSource !== void 0) c[d] = o;else s.add(d);
  }
  if (s.size > 0) t(`[MCP] Dropping ${s.size} suppressed plugin server(s) whose plugin is no longer installed/enabled: ${[...s].join(", ")}`), n.applyMcpUpdate(d => ({
    ...d,
    suppressedPluginMcpServers: (d.suppressedPluginMcpServers ?? []).filter(item => !s.has(item))
  }));
  return c;
}
function F(n, r, e, p) {
  let c = new Set(e.getClients().map(item => item.name)),
    s = new Set(),
    d = {};
  for (let [u, f] of Object.entries(n)) {
    if (r.has(u)) continue;
    if (s.add(u), !c.has(u)) d[u] = f;
  }
  if (s.size === 0) return [];
  e.applyMcpUpdate(u => ({
    ...u,
    suppressedPluginMcpServers: (u.suppressedPluginMcpServers ?? []).filter(item => !s.has(item))
  }));
  let o = Object.keys(d);
  if (o.length > 0) t(`[MCP] Restoring ${o.length} plugin server(s) no longer duplicated by claude.ai connectors after account switch: ${o.join(", ")}`);
  return k(d, "plugin-restore", e, !1, p);
}
async function U(n) {
  let {
      claudeaiConfigs: claudeaiConfigs_2,
      regularMcpConfigs: regularMcpConfigs_2,
      state: state_4
    } = n,
    suppressedPlugins = new Set();
  if (Object.keys(claudeaiConfigs_2).length > 0) {
    let d = new Set();
    for (let o of Object.values(claudeaiConfigs_2)) {
      let u = xq(o);
      if (u) d.add(u);
    }
    for (let [o, u] of Object.entries(regularMcpConfigs_2)) {
      if (!o.startsWith("plugin:")) continue;
      let f = xq(u);
      if (f && d.has(f)) suppressedPlugins.add(o);
    }
    if (suppressedPlugins.size > 0) {
      t(`[MCP] Lazy dedup: suppressing ${suppressedPlugins.size} plugin server(s) that duplicate claude.ai connectors: ${[...suppressedPlugins].join(", ")}`);
      for (let o of state_4.getClients()) {
        if (!suppressedPlugins.has(o.name) || !(Ps(o) || o.type === "pending")) continue;
        if (o.type === "connected") Qpe(o, void 0), w().clearServerCache(o.name, o.config).catch(() => {});else w().disposeServerConnectionDetached(o.name, o.config);
      }
      state_4.applyMcpUpdate(o => {
        let {
          clients: clients,
          tools: tools_2,
          commands: commands_2,
          resources: resources
        } = o;
        clients = clients.filter(item => !suppressedPlugins.has(item.name)), tools_2 = tools_2.filter(item => !item.mcpInfo || !suppressedPlugins.has(item.mcpInfo.serverName));
        for (let M of suppressedPlugins) commands_2 = cpe(commands_2, M), resources = _Pt(resources, M);
        let suppressedPluginMcpServers = [...(o.suppressedPluginMcpServers ?? []).filter(item => !suppressedPlugins.has(item)), ...suppressedPlugins];
        return {
          ...o,
          clients: clients,
          tools: tools_2,
          commands: commands_2,
          resources: resources,
          suppressedPluginMcpServers: suppressedPluginMcpServers
        };
      });
    }
  }
  let s = YR(regularMcpConfigs_2, (d, o) => !o.startsWith("plugin:"));
  return {
    ...(await wOt(claudeaiConfigs_2, s)),
    suppressedPlugins: suppressedPlugins
  };
}
function z({
  servers: servers_2,
  suppressed: r
}, e, p, c) {
  return e.applyMcpUpdate(s => cQt(s.suppressedClaudeAiConnectors ?? [], r) ? s : {
    ...s,
    suppressedClaudeAiConnectors: r
  }), k(servers_2, "claudeai", e, p, c);
}
function E(n, r) {
  let e = uo(r.name);
  return {
    ...n,
    clients: n.clients.map(item => item.name === r.name ? r : item),
    tools: D$(n.tools, p => _c(p, r.name, e)),
    commands: D$(n.commands, p => Q_(p, r.name)),
    resources: Ak(n.resources, r.name),
    resourceTemplates: Ak(n.resourceTemplates, r.name)
  };
}
function T(n) {
  if (qa()) Qpe(n, void 0);
  n.cleanup().catch(() => {}), w().clearServerCache(n.name, n.config).catch(() => {});
}
export { vYo, yzt, kYo, EYo, jGr, nZn, j_n, WGr, _zt, TYo };