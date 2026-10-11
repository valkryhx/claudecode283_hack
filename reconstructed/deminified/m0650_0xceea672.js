// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { I2r } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { Q } from "B:/~BUN/root/chunk-17wqwt36.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d, ne } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Cs, n8e, ss } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Ur } from "B:/~BUN/root/chunk-g2vddtj4.js";
import { _Me, Qh, pve, pnt, Vi, Cnt, _ve, sQt, iQt, r9, Gxt, Cot, NM, Hf, jA, Uo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Gee } from "B:/~BUN/root/chunk-rtxwm8ds.js";
import { gl } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { br, TP, q2e } from "B:/~BUN/root/chunk-brdpd4rf.js";
import { RH } from "B:/~BUN/root/chunk-6q5vhtfh.js";
import { kO } from "B:/~BUN/root/chunk-tg1j81wg.js";
import { $io } from "B:/~BUN/root/chunk-kv6ffaaz.js";
import { ETe } from "B:/~BUN/root/chunk-hbma7z88.js";
import { hi, xc } from "B:/~BUN/root/chunk-w5bkq1td.js";
import { Qr } from "B:/~BUN/root/chunk-0bx1tycm.js";
function S() {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule();
}
function R(o) {
  try {
    return S();
  } catch (error) {
    d(error), t(`[MCP] ${o} connect error: ${error}`);
    return;
  }
}
var l6r = 1000,
  IJn = [500, 1500, 4000];
function c6r(o) {
  let {
      regularMcpConfigs: r,
      claudeaiConfigPromise: claudeaiConfigPromise,
      state: state,
      storageV5: storageV5,
      credentials: credentials,
      knownListings: knownListings
    } = o,
    epoch = br(),
    nonBlocking = a.MCP_CONNECTION_NONBLOCKING !== !1;
  I2r(nonBlocking);
  let deferConnect = nonBlocking;
  async function connect() {
    Ur("before_mcp_connect_user"), Ur("before_mcp_connect_connector");
    let m = OJn({
        configs: r,
        label: "regular",
        nonBlocking: nonBlocking,
        state: state,
        storageV5: storageV5,
        credentials: credentials,
        knownListings: knownListings
      }).then(() => Ur("after_mcp_connect_user")),
      f = h(nonBlocking, () => claudeaiConfigPromise.then(claudeaiConfigs => w({
        claudeaiConfigs: claudeaiConfigs,
        regularMcpConfigs: r,
        state: state,
        deferConnect: deferConnect,
        storageV5: storageV5,
        epoch: epoch
      })).then(C => C === "superseded" ? [] : C), "claude.ai connectors").then(() => Ur("after_mcp_connect_connector"));
    await Promise.all([m, f]);
  }
  return {
    connect: connect
  };
}
function OJn(o) {
  let {
      configs: configs,
      label: label,
      nonBlocking: nonBlocking_2,
      state: state_2,
      storageV5: storageV5_2,
      credentials: credentials_2,
      knownListings: knownListings_2
    } = o,
    i = (f, C) => f.alwaysLoad === !0 || knownListings_2 !== void 0 && Object.hasOwn(knownListings_2, C),
    l = Qr(configs, i),
    g = Qr(configs, (f, C) => !i(f, C)),
    m = Object.keys(l).length > 0;
  return Promise.all([...(m ? [h(!1, () => M(l, `${label}-required`, state_2, !1, storageV5_2, credentials_2, knownListings_2), "--mcp-config alwaysLoad servers")] : []), h(nonBlocking_2, () => M(g, label, state_2, nonBlocking_2, storageV5_2, credentials_2, knownListings_2), "--mcp-config servers")]).then(() => {});
}
function M(o, r, e, u = !1, p, c, s) {
  let n = Object.keys(o);
  if (n.length === 0) return [];
  e.applyMcpUpdate(m => ({
    ...m,
    clients: [...m.clients, ...Object.entries(o).map(([name, config]) => ({
      name: name,
      type: "pending",
      config: config
    }))]
  }));
  let i = new Map(),
    l = n.map(item => new Promise(f => i.set(item, f))),
    g = () => {
      let m = R(r);
      if (!m) {
        for (let f of i.values()) f();
        return;
      }
      m.getMcpToolsCommandsAndResources(f => {
        _bn(e, f), $io(), i.get(f.client.name)?.();
      }, o, p, c, s).catch(f => t(`[MCP] ${r} connect error: ${f}`)).finally(() => {
        for (let f of i.values()) f();
        oht(o, e, p).catch(f => t(`[MCP] ${r} retry error: ${f}`));
      });
    };
  if (u) setImmediate(g);else g();
  return l;
}
function _bn(o, r) {
  let {
      client: client,
      tools: tools,
      commands: commands,
      attemptEpoch: attemptEpoch
    } = r,
    s,
    n = "applied",
    i = q2e(client.config, attemptEpoch);
  return o.applyMcpUpdate(l => {
    n = "applied", s = void 0;
    let g = l.clients.find(item => item.name === client.name);
    if (!g || !S().areMcpConfigsEqual(g.config, client.config)) {
      if (client.type === "connected") ne(client.name, g ? "applyConnectionResult: disposing orphaned connect (slot config changed mid-flight)" : "applyConnectionResult: disposing orphaned connect (slot removed mid-flight)"), s = () => y(client);
      return n = "dropped", l;
    }
    if (i) {
      if (ne(client.name, "applyConnectionResult: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)"), client.type === "connected") s = () => {
        S().detachAndCloseConnection(client).catch(() => {});
      };
      return n = "superseded", l;
    }
    let m = Vi() && client.type !== "failed" && client.type !== "disabled" ? Hf(client.name, client.config) : null;
    if (Vi() && m !== "managed-policy" && Uo(client.name) && client.type !== "disabled") {
      let f = client.type === "connected" && g.type === "connected" && g.client === client.client;
      if (client.type === "connected" && !f) ne(client.name, "applyConnectionResult: disposing connect that settled after a disable"), s = () => y(client);
      if (n = "refused", g.type === "disabled" || g.type === "connected" && Cs(client)) return l;
      return b(l, {
        name: client.name,
        type: "disabled",
        config: g.config
      });
    }
    if (m) {
      if (client.type === "connected") ne(client.name, `applyConnectionResult: disposing connect that settled after a ${m} deny`);
      return s = () => {
        if (client.type === "connected") y(client);
        S().dropDiscoveryEntry(client.name, client.config).catch(() => {});
      }, n = "refused", b(l, {
        name: client.name,
        type: "failed",
        config: g.config,
        ...kO(m)
      });
    }
    if (!n8e(g, client)) return n = "dropped", l;
    return {
      ...l,
      clients: l.clients.map(item => item.name === client.name ? client : item),
      tools: gl([...l.tools, ...tools], "name"),
      commands: gl([...l.commands, ...commands], "name")
    };
  }), s?.(), n;
}
function MJn(o, r) {
  let e = r.getClients();
  return Object.entries(o).filter(([u, p]) => {
    let c = e.find(item => item.name === u);
    return c !== void 0 && _Me(c) && S().areMcpConfigsEqual(c.config, p);
  });
}
async function oht(o, r, e, u = p => _bn(r, p)) {
  let p = () => MJn(o, r);
  if (p().length === 0) return;
  let attemptEpoch_2 = br(),
    {
      signal: signal
    } = r;
  for (let i of IJn) {
    if (await Q(i, signal), signal?.aborted) return;
    if (br() !== attemptEpoch_2) {
      t("[MCP] Retry: identity changed during backoff, stopping (these rows belong to the previous account)");
      return;
    }
    let l = p();
    if (l.length === 0) {
      t("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
    t(`[MCP] Retry: ${l.length} transiently-failed remote server(s) after ${i}ms backoff`);
    let g = [];
    for (let m of l) {
      if (!(await S().discardMemoizedConnectResult(...m))) continue;
      let [name_2, config_2] = m,
        P = Hf(name_2, config_2);
      if (P) {
        u({
          client: {
            name: name_2,
            type: "failed",
            config: config_2,
            ...kO(P)
          },
          tools: [],
          commands: [],
          attemptEpoch: attemptEpoch_2
        });
        continue;
      }
      g.push(m);
    }
    if (g.length === 0 || signal?.aborted) continue;
    await S().getMcpToolsCommandsAndResources(m => {
      if (!signal?.aborted) u(m);else if (m.client.type === "connected") S().detachAndCloseConnection(m.client).catch(() => {});
    }, Object.fromEntries(g), e);
  }
  let n = p();
  if (n.length > 0) t(`[MCP] Retry: ${n.length} remote server(s) still failed after all retries: ${n.map(([i]) => i).join(", ")}`);
}
async function h(o, r, e) {
  if (o) {
    Promise.resolve(r()).catch(() => {}), t(`[MCP] ${e} running fully async (nonblocking)`);
    return;
  }
  let u = r(),
    p = Date.now(),
    c = ETe(),
    s;
  if (Array.isArray(u)) s = u;else {
    let g,
      m = await Promise.race([u.catch(f => (d(f), "failed")), new Promise(f => {
        g = setTimeout(C => C("deadline"), c, f);
      })]);
    if (clearTimeout(g), m === "deadline") {
      t(`[MCP] ${e} config fetch not ready after ${c}ms \u2014 proceeding; background connection continues`);
      return;
    }
    if (m === "failed") {
      t(`[MCP] ${e} batch failed to start \u2014 proceeding without waiting on it`);
      return;
    }
    s = m;
  }
  let n = Math.max(0, c - (Date.now() - p));
  if (s.length === 0) return;
  let i = R(e);
  if (!i) return;
  let l = await i.awaitEachWithDeadline(s, n);
  if (l > 0) t(`[MCP] ${e}: ${l}/${s.length} not ready after ${c}ms \u2014 proceeding; background connection continues`);
}
function d6r(state_3, storageV5_3, e) {
  sQt(), iQt();
  let epoch_2 = br(),
    p = (async () => {
      let c = await _ve(e);
      if (!TP(epoch_2)) return v("list fetch");
      let {
        allowed: s,
        blocked: blocked
      } = NM(c);
      if (Cnt(), blocked.length > 0) t(`[MCP] claude.ai connectors blocked by enterprise policy after account switch: ${blocked.join(", ")}`);
      let restorablePlugins = await k(state_3, storageV5_3),
        regularMcpConfigs = Object.fromEntries([...Object.entries(restorablePlugins), ...state_3.getClients().filter(item => item.config.scope !== "claudeai").map(item => [item.name, item.config])]);
      return w({
        claudeaiConfigs: s,
        regularMcpConfigs: regularMcpConfigs,
        state: state_3,
        deferConnect: !1,
        storageV5: storageV5_3,
        epoch: epoch_2,
        restorablePlugins: restorablePlugins
      });
    })();
  return {
    mounted: p.then(c => c === "superseded" ? c : "mounted"),
    settled: p.then(c => c === "superseded" ? [] : Promise.all(c)).then(() => {})
  };
}
function v(o) {
  return t(`[MCP] claude.ai connector list superseded by an account switch (${o}) \u2014 not mounting`), "superseded";
}
async function w(o) {
  if (!TP(o.epoch)) return v("list fetch");
  let r = await T(o);
  if (!TP(o.epoch)) return v("dedup");
  return [...B(o.restorablePlugins ?? {}, r.suppressedPlugins, o.state, o.storageV5), ...L(r, o.state, o.deferConnect, o.storageV5)];
}
async function k(o, storageV5_4) {
  let e = o.getSuppressedPluginServers();
  if (e.length === 0) return {};
  let {
      servers: servers
    } = await jA({}, {
      storageV5: storageV5_4
    }),
    p = {},
    c = new Set();
  for (let s of e) {
    let n = servers[s];
    if (n && n.pluginSource !== void 0) p[s] = n;else c.add(s);
  }
  if (c.size > 0) t(`[MCP] Dropping ${c.size} suppressed plugin server(s) whose plugin is no longer installed/enabled: ${[...c].join(", ")}`), o.applyMcpUpdate(s => ({
    ...s,
    suppressedPluginMcpServers: (s.suppressedPluginMcpServers ?? []).filter(item => !c.has(item))
  }));
  return p;
}
function B(o, r, e, u) {
  let p = new Set(e.getClients().map(item => item.name)),
    c = new Set(),
    s = {};
  for (let [i, l] of Object.entries(o)) {
    if (r.has(i)) continue;
    if (c.add(i), !p.has(i)) s[i] = l;
  }
  if (c.size === 0) return [];
  e.applyMcpUpdate(i => ({
    ...i,
    suppressedPluginMcpServers: (i.suppressedPluginMcpServers ?? []).filter(item => !c.has(item))
  }));
  let n = Object.keys(s);
  if (n.length > 0) t(`[MCP] Restoring ${n.length} plugin server(s) no longer duplicated by claude.ai connectors after account switch: ${n.join(", ")}`);
  return M(s, "plugin-restore", e, !1, u);
}
async function T(o) {
  let {
      claudeaiConfigs: claudeaiConfigs_2,
      regularMcpConfigs: regularMcpConfigs_2,
      state: state_4
    } = o,
    suppressedPlugins = new Set();
  if (Object.keys(claudeaiConfigs_2).length > 0) {
    let s = new Set();
    for (let n of Object.values(claudeaiConfigs_2)) {
      let i = r9(n);
      if (i) s.add(i);
    }
    for (let [n, i] of Object.entries(regularMcpConfigs_2)) {
      if (!n.startsWith("plugin:")) continue;
      let l = r9(i);
      if (l && s.has(l)) suppressedPlugins.add(n);
    }
    if (suppressedPlugins.size > 0) {
      t(`[MCP] Lazy dedup: suppressing ${suppressedPlugins.size} plugin server(s) that duplicate claude.ai connectors: ${[...suppressedPlugins].join(", ")}`);
      for (let n of state_4.getClients()) {
        if (!suppressedPlugins.has(n.name) || !(Cs(n) || n.type === "pending")) continue;
        if (n.type === "connected") Gee(n, void 0), S().clearServerCache(n.name, n.config).catch(() => {});else S().disposeServerConnectionDetached(n.name, n.config);
      }
      state_4.applyMcpUpdate(n => {
        let {
          clients: clients,
          tools: tools_2,
          commands: commands_2,
          resources: resources
        } = n;
        clients = clients.filter(item => !suppressedPlugins.has(item.name)), tools_2 = tools_2.filter(item => !item.mcpInfo || !suppressedPlugins.has(item.mcpInfo.serverName));
        for (let C of suppressedPlugins) commands_2 = pve(commands_2, C), resources = pnt(resources, C);
        let suppressedPluginMcpServers = [...(n.suppressedPluginMcpServers ?? []).filter(item => !suppressedPlugins.has(item)), ...suppressedPlugins];
        return {
          ...n,
          clients: clients,
          tools: tools_2,
          commands: commands_2,
          resources: resources,
          suppressedPluginMcpServers: suppressedPluginMcpServers
        };
      });
    }
  }
  let c = Qr(regularMcpConfigs_2, (s, n) => !n.startsWith("plugin:"));
  return {
    ...(await Cot(claudeaiConfigs_2, c)),
    suppressedPlugins: suppressedPlugins
  };
}
function L({
  servers: servers_2,
  suppressed: r
}, e, u, p) {
  return e.applyMcpUpdate(c => Gxt(c.suppressedClaudeAiConnectors ?? [], r) ? c : {
    ...c,
    suppressedClaudeAiConnectors: r
  }), M(servers_2, "claudeai", e, u, p);
}
function b(o, r) {
  let e = hi(r.name);
  return {
    ...o,
    clients: o.clients.map(item => item.name === r.name ? r : item),
    tools: RH(o.tools, u => xc(u, r.name, e)),
    commands: RH(o.commands, u => Qh(u, r.name)),
    resources: ss(o.resources, r.name),
    resourceTemplates: ss(o.resourceTemplates, r.name)
  };
}
function y(o) {
  if (Vi()) Gee(o, void 0);
  o.cleanup().catch(() => {}), S().clearServerCache(o.name, o.config).catch(() => {});
}
export { l6r, IJn, c6r, OJn, _bn, MJn, oht, d6r };