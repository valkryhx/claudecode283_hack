// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Cs, n8e, ss } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Qh, bdo, Vi, Gxt, Hf, Uo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Er } from "B:/~BUN/root/chunk-yzpw1mdr.js";
import { dS } from "B:/~BUN/root/chunk-brdpd4rf.js";
import { v8r, kue, SGt } from "B:/~BUN/root/chunk-7yf8jrt2.js";
import { RH } from "B:/~BUN/root/chunk-6q5vhtfh.js";
import { kO } from "B:/~BUN/root/chunk-tg1j81wg.js";
import { Ole } from "B:/~BUN/root/chunk-aky7m4ay.js";
import { Ts } from "B:/~BUN/root/chunk-cz23t9h8.js";
import { hi, xc } from "B:/~BUN/root/chunk-w5bkq1td.js";
function m() {
  return import.meta.require("B:/~BUN/root/chunk-m4dhr7e5.js").mcpClientModule();
}
function N(n) {
  Ts(n.client).onclose = void 0, m().clearServerCache(n.name, n.config).catch(() => {});
}
function w(n, o, s) {
  return {
    tools: RH(n.tools, e => e.name?.startsWith(s)),
    commands: RH(n.commands, e => Qh(e, o)),
    resources: ss(n.resources, o),
    resourceTemplates: ss(n.resourceTemplates, o)
  };
}
class sje {
  #e;
  constructor(n) {
    this.#e = n;
  }
  static over(n) {
    return new sje(Ole(n.getState, n.setState, "mcp"));
  }
  get() {
    return this.#e.get();
  }
  markNeedsAuth(n) {
    this.#e.set(o => v8r(o, n));
  }
  adoptServer(n, o, s) {
    this.#e.set(mcp => kue({
      mcp: mcp
    }, n, o, s).mcp);
  }
  swapServerTools(n, o) {
    let s = !1;
    return this.#e.set(mcp_2 => {
      let r = SGt({
        mcp: mcp_2
      }, n, o);
      return s = r.mcp !== mcp_2, r.mcp;
    }), s;
  }
  setSuppressedClaudeAiConnectors(suppressedClaudeAiConnectors) {
    this.#e.set(o => Gxt(o.suppressedClaudeAiConnectors ?? [], suppressedClaudeAiConnectors) ? o : {
      ...o,
      suppressedClaudeAiConnectors: suppressedClaudeAiConnectors
    });
  }
  setReservedNameRefusals(reservedNameRefusals) {
    this.#e.set(o => {
      let s = o.reservedNameRefusals ?? [];
      return s.length === reservedNameRefusals.length && s.every((item, index) => item.scope === reservedNameRefusals[index]?.scope && item.name === reservedNameRefusals[index]?.name) ? o : {
        ...o,
        reservedNameRefusals: reservedNameRefusals
      };
    });
  }
  addPendingServers(n) {
    this.#e.set(o => {
      let s = b(o, n);
      if (s.length === 0) return o;
      return {
        ...o,
        clients: [...o.clients, ...s]
      };
    });
  }
  reconcileConfiguredServers(n, o, s) {
    this.#e.set(e => {
      let {
        stale: stale,
        ...d
      } = bdo(e, n, o);
      s(stale);
      let c = b(d, n);
      if (c.length === 0 && stale.length === 0) {
        if (e.clientsInitialized) return e;
        return {
          ...e,
          clientsInitialized: !0
        };
      }
      return {
        ...e,
        ...d,
        clientsInitialized: !0,
        clients: [...d.clients, ...c]
      };
    });
  }
  applyIdentityBoundary(n, o) {
    let s = [...n, ...o];
    if (s.length === 0) return;
    this.#e.set(e => {
      let r = s.map(item => [item, hi(item)]),
        d = c => r.some(([p, u]) => xc(c, p, u));
      return {
        ...e,
        clients: e.clients.flatMap(item => o.has(item.name) ? [] : n.has(item.name) ? [{
          name: item.name,
          type: "pending",
          config: item.config
        }] : [item]),
        tools: RH(e.tools, d),
        commands: RH(e.commands, c => s.some(item => Qh(c, item))),
        resources: ss(e.resources, s),
        resourceTemplates: ss(e.resourceTemplates, s)
      };
    });
  }
  applyQueuedUpdates(n, o) {
    this.#e.set(s => {
      let e = s;
      for (let r of n) {
        if (r.epoch !== o.currentEpoch && dS(r.config)) {
          if (r.type === "connected") m().detachAndCloseConnection(r);
          continue;
        }
        let {
            tools: tools,
            commands: commands,
            resources: resources,
            resourceTemplates: resourceTemplates,
            replaceOnly: replaceOnly,
            epoch: epoch,
            ...t
          } = r,
          f = t.type === "disabled" || t.type === "failed",
          y = f ? tools ?? [] : tools,
          v = f ? commands ?? [] : commands,
          g = f ? resources ?? [] : resources,
          h = f ? resourceTemplates ?? [] : resourceTemplates,
          C = hi(t.name),
          a = e.clients.findIndex(item => item.name === t.name),
          l = a !== -1 ? e.clients[a] : void 0,
          x = t.type === "connected" && l?.type === "connected" && l.client === t.client,
          M = Cs(t) && Hf(t.name, t.config) === "managed-policy";
        if (t.type !== "disabled" && !x && Uo(t.name) && !(M && l?.type !== "disabled")) {
          if (M) o.onDoorDenied(t.name);
          if (t.type === "connected") N(t);
          if (o.onOrphanedDisable(t.name), l && l.type !== "disabled" && (l.type !== "connected" || !Cs(t))) e = {
            ...e,
            clients: e.clients.map(item => item.name === t.name ? {
              name: t.name,
              type: "disabled",
              config: t.config
            } : item),
            ...w(e, t.name, C)
          };
          continue;
        }
        let T = Cs(t) ? Hf(t.name, t.config) : null;
        if (T) {
          o.onDoorDenied(t.name);
          let config = t.config;
          if (t.type === "connected") Ts(t.client).onclose = void 0;else if (l?.type === "connected") Ts(l.client).onclose = void 0, config = l.config;
          if (m().clearServerCache(t.name, config).catch(() => {}), a === -1) continue;
          e = {
            ...e,
            clients: e.clients.map(item => item.name === t.name ? {
              name: t.name,
              type: "failed",
              config: t.config,
              ...kO(T)
            } : item),
            ...w(e, t.name, C)
          };
          continue;
        }
        if (replaceOnly && a !== -1 && (e.clients[a]?.type === "needs-auth" || e.clients[a]?.type === "disabled")) {
          if (t.type === "connected") Ts(t.client).onclose = void 0, m().clearServerCache(t.name, t.config).catch(() => {});
          continue;
        }
        if (a === -1 && replaceOnly) {
          if (t.type === "connected") Ts(t.client).onclose = void 0, m().clearServerCache(t.name, t.config).catch(() => {});
          continue;
        }
        if (replaceOnly && Vi() && a !== -1 && Er(t.name, e.clients[a].config) !== Er(t.name, t.config)) {
          if (t.type === "connected") m().detachAndCloseConnection(t);
          continue;
        }
        if (a !== -1 && !n8e(e.clients[a], t)) continue;
        let clients = a === -1 ? [...e.clients, t] : e.clients.map(item => item.name === t.name ? t : item),
          tools_2 = y === void 0 ? e.tools : [...RH(e.tools, i => i.name?.startsWith(C)), ...y],
          commands_2 = v === void 0 ? e.commands : [...RH(e.commands, i => Qh(i, t.name)), ...v],
          resources_2 = g === void 0 ? e.resources : g.length > 0 ? {
            ...e.resources,
            [t.name]: g
          } : ss(e.resources, t.name),
          resourceTemplates_2 = h === void 0 ? e.resourceTemplates : h.length > 0 ? {
            ...e.resourceTemplates,
            [t.name]: h
          } : ss(e.resourceTemplates, t.name);
        e = {
          ...e,
          clients: clients,
          tools: tools_2,
          commands: commands_2,
          resources: resources_2,
          resourceTemplates: resourceTemplates_2
        };
      }
      return e;
    });
  }
}
function b(n, o) {
  let s = new Set(n.clients.map(item => item.name));
  return Object.entries(o).filter(([e]) => !s.has(e)).map(([name, config_2]) => ({
    name: name,
    type: Uo(name) ? "disabled" : "pending",
    config: config_2
  }));
}
export { sje };