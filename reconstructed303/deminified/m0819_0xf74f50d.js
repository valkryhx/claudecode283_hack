// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { re } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Ps, b_t } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { qa, Ak, Q_, Mhs, cQt, Ic, Oo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Jn } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { AT } from "B:/~BUN/root/chunk-k382hx6g.js";
import { bE } from "B:/~BUN/root/chunk-jynk66qn.js";
import { s9o, a_e, Cwn, Lvt, $2t } from "B:/~BUN/root/chunk-qzg0d2gn.js";
import { D$ } from "B:/~BUN/root/chunk-mkmzcfhg.js";
import { J_ } from "B:/~BUN/root/chunk-pj523hfd.js";
import { Aoe, O8 } from "B:/~BUN/root/chunk-5gazt5rq.js";
import { xoe } from "B:/~BUN/root/chunk-10ydm3ka.js";
import { gke } from "B:/~BUN/root/chunk-b4xxgr0r.js";
import { Ai } from "B:/~BUN/root/chunk-0r89607w.js";
import { uo, _c } from "B:/~BUN/root/chunk-b0487zs4.js";
function f() {
  return import.meta.require("B:/~BUN/root/chunk-xk11xf74.js").mcpClientModule();
}
function v(n) {
  Ai(n.client).onclose = void 0, f().clearServerCache(n.name, n.config).catch(() => {});
}
function x(n, t, i) {
  return {
    tools: D$(n.tools, e => e.name?.startsWith(i)),
    commands: D$(n.commands, e => Q_(e, t)),
    resources: Ak(n.resources, t),
    resourceTemplates: Ak(n.resourceTemplates, t)
  };
}
class bnt {
  #e;
  constructor(n) {
    this.#e = n;
  }
  static over(n) {
    return new bnt(gke(n.getState, n.setState, "mcp"));
  }
  get() {
    return this.#e.get();
  }
  markNeedsAuth(n) {
    this.#e.set(t => s9o(t, n));
  }
  async clearNeedsAuth(n) {
    let t = this.get().clients.find(item => item.name === n);
    if (t?.type !== "needs-auth") return;
    let i = await f().peekSettledConnection(n, t.config);
    if (i?.type !== "connected") return;
    this.#e.set(e => ({
      ...e,
      clients: e.clients.map(item => item === t ? Aoe(i, t.config) : item)
    }));
  }
  adoptServer(n, t, i) {
    let e = "adopted";
    return this.#e.set(mcp => {
      if (i?.asked === !0) return a_e({
        mcp: mcp
      }, n, t).mcp;
      let r = mcp.clients.find(item => item.name === n);
      if (e = H(r, t) ?? "adopted", r === void 0) return mcp;
      if (e !== "adopted") return w(mcp, r, e);
      return a_e({
        mcp: mcp
      }, n, G(r, t), {
        appendIfAbsent: !1
      }).mcp;
    }), e;
  }
  markReconnectDiscarded(name, t) {
    this.#e.set(i => {
      let e = i.clients.find(item => item.name === name);
      if (e === void 0 || Jn(name, e.config) !== Jn(name, t)) return i;
      if (Oo(name)) return w(i, e, "disabled");
      if (Ic(name, e.config) !== null) return w(i, e, "policy-blocked");
      if (e.type !== "connected") return i;
      return {
        ...i,
        clients: i.clients.map(item => item === e ? {
          name: name,
          type: "failed",
          config: e.config,
          error: "Its connection was closed while signing in again"
        } : item),
        ...I(i, name)
      };
    });
  }
  swapServerTools(n, t, i) {
    let e = !1;
    return this.#e.set(mcp_2 => {
      let r = $2t(mcp_2.clients.find(item => item.name === n), t, i);
      if (r === void 0) return re(n, "A re-queried tool list was not applied: another server holds the name"), mcp_2;
      let c = Cwn({
        mcp: mcp_2
      }, n, r);
      return e = c.mcp !== mcp_2, c.mcp;
    }), e;
  }
  setSuppressedClaudeAiConnectors(suppressedClaudeAiConnectors) {
    this.#e.set(t => cQt(t.suppressedClaudeAiConnectors ?? [], suppressedClaudeAiConnectors) ? t : {
      ...t,
      suppressedClaudeAiConnectors: suppressedClaudeAiConnectors
    });
  }
  setReservedNameRefusals(reservedNameRefusals) {
    this.#e.set(t => {
      let i = t.reservedNameRefusals ?? [];
      return i.length === reservedNameRefusals.length && i.every((item, index) => item.scope === reservedNameRefusals[index]?.scope && item.name === reservedNameRefusals[index]?.name) ? t : {
        ...t,
        reservedNameRefusals: reservedNameRefusals
      };
    });
  }
  addPendingServers(n) {
    this.#e.set(t => {
      let i = O(t, n);
      if (i.length === 0) return t;
      return {
        ...t,
        clients: [...t.clients, ...i]
      };
    });
  }
  reconcileConfiguredServers(n, t, i) {
    this.#e.set(e => {
      let {
        stale: stale,
        ...r
      } = Mhs(e, n, t);
      i(stale);
      let c = O(r, n);
      if (c.length === 0 && stale.length === 0) {
        if (e.clientsInitialized) return e;
        return {
          ...e,
          clientsInitialized: !0
        };
      }
      return {
        ...e,
        ...r,
        clientsInitialized: !0,
        clients: [...r.clients, ...c]
      };
    });
  }
  applyIdentityBoundary(n, t) {
    let i = [...n, ...t];
    if (i.length === 0) return;
    this.#e.set(e => {
      let s = i.map(item => [item, uo(item)]),
        r = c => s.some(([l, u]) => _c(c, l, u));
      return {
        ...e,
        clients: e.clients.flatMap(item => t.has(item.name) ? [] : n.has(item.name) ? [{
          name: item.name,
          type: "pending",
          config: item.config
        }] : [item]),
        tools: D$(e.tools, r),
        commands: D$(e.commands, c => i.some(item => Q_(c, item))),
        resources: Ak(e.resources, i),
        resourceTemplates: Ak(e.resourceTemplates, i)
      };
    });
  }
  applyQueuedUpdates(n, t) {
    this.#e.set(i => {
      let e = i;
      for (let s of n) {
        if (s.epoch !== t.currentEpoch && bE(s.config)) {
          if (s.type === "connected") f().detachAndCloseConnection(s);
          continue;
        }
        let r = e.clients.find(item => item.name === s.name),
          c = K(r, s),
          l = c === "stands" && r !== void 0 ? L(r, s) : s,
          {
            tools: tools,
            commands: commands,
            resources: resources,
            resourceTemplates: resourceTemplates,
            replaceOnly: replaceOnly,
            epoch: epoch,
            asked: asked,
            superseded: superseded,
            ...Q
          } = l,
          o = Q,
          h = o.type === "disabled" || o.type === "failed",
          b = h ? tools ?? [] : tools,
          T = h ? commands ?? [] : commands,
          C = h ? resources ?? [] : resources,
          y = h ? resourceTemplates ?? [] : resourceTemplates,
          M = uo(o.name),
          p = e.clients.findIndex(item => item.name === o.name),
          a = p !== -1 ? e.clients[p] : void 0,
          j = o.type === "connected" && a?.type === "connected" && a.client === o.client,
          R = Ps(o) && Ic(o.name, o.config) === "managed-policy";
        if (o.type !== "disabled" && !j && Oo(o.name) && !(R && a?.type !== "disabled")) {
          if (R) t.onDoorDenied(o.name);
          if (o.type === "connected") v(o);
          if (t.onOrphanedDisable(o.name), a && a.type !== "disabled" && (a.type !== "connected" || !Ps(o))) e = {
            ...e,
            clients: e.clients.map(item => item.name === o.name ? {
              name: o.name,
              type: "disabled",
              config: c === "elsewhere" ? item.config : o.config
            } : item),
            ...x(e, o.name, M)
          };
          continue;
        }
        if (c === "elsewhere" && a !== void 0) {
          if (o.type !== "disabled") {
            if (o.type === "connected") v(o);
            re(o.name, `A late ${o.type} result was dropped: another server holds the name`);
            continue;
          }
          if (a.type === "connected") v(a);
          o = {
            name: o.name,
            type: "disabled",
            config: a.config
          };
        }
        let k = Ps(o) ? Ic(o.name, o.config) : null;
        if (k) {
          t.onDoorDenied(o.name);
          let config = o.config;
          if (o.type === "connected") Ai(o.client).onclose = void 0;else if (a?.type === "connected") Ai(a.client).onclose = void 0, config = a.config;
          if (f().clearServerCache(o.name, config).catch(() => {}), p === -1) continue;
          e = {
            ...e,
            clients: e.clients.map(item => item.name === o.name ? {
              name: o.name,
              type: "failed",
              config: o.config,
              ...J_(k, o.name, o.config)
            } : item),
            ...x(e, o.name, M)
          };
          continue;
        }
        if (replaceOnly && p !== -1 && (e.clients[p]?.type === "needs-auth" || e.clients[p]?.type === "disabled")) {
          if (o.type === "connected") Ai(o.client).onclose = void 0, f().clearServerCache(o.name, o.config).catch(() => {});
          continue;
        }
        if (p === -1 && (replaceOnly || c === "nowhere" && !superseded)) {
          if (o.type === "connected") Ai(o.client).onclose = void 0, f().clearServerCache(o.name, o.config).catch(() => {});
          if (!replaceOnly) t.onOrphanedDisable(o.name), re(o.name, `A late ${o.type} result was dropped: no row holds the name`);
          continue;
        }
        if (replaceOnly && qa() && p !== -1 && Jn(o.name, e.clients[p].config) !== Jn(o.name, o.config)) {
          if (o.type === "connected") f().detachAndCloseConnection(o);
          continue;
        }
        if (p !== -1 && !b_t(e.clients[p], o)) {
          if (c === "asked") e = _(e, o);
          continue;
        }
        let clients = p === -1 ? [...e.clients, o] : e.clients.map(item => item.name === o.name ? o : item),
          tools_2 = b === void 0 ? e.tools : [...D$(e.tools, d => d.name?.startsWith(M)), ...b],
          commands_2 = T === void 0 ? e.commands : [...D$(e.commands, d => Q_(d, o.name)), ...T],
          resources_2 = C === void 0 ? e.resources : C.length > 0 ? {
            ...e.resources,
            [o.name]: C
          } : Ak(e.resources, o.name),
          resourceTemplates_2 = y === void 0 ? e.resourceTemplates : y.length > 0 ? {
            ...e.resourceTemplates,
            [o.name]: y
          } : Ak(e.resourceTemplates, o.name);
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
function O(n, t) {
  let i = new Set(n.clients.map(item => item.name));
  return Object.entries(t).filter(([e]) => !i.has(e)).map(([name_2, config_2]) => ({
    name: name_2,
    type: Oo(name_2) ? "disabled" : "pending",
    config: config_2
  }));
}
function D(n, t) {
  return n.mcpInfo?.serverName === void 0 ? Q_(n, t) : n.mcpInfo.serverName === t;
}
function I(n, t) {
  let i = uo(t);
  return {
    tools: D$(n.tools, e => _c(e, t, i)),
    commands: D$(n.commands, e => D(e, t)),
    resources: Ak(n.resources, t),
    resourceTemplates: Ak(n.resourceTemplates, t)
  };
}
function K(n, t) {
  if (t.asked === !0) return "asked";
  if (n === void 0) return "nowhere";
  return Jn(t.name, n.config) === Jn(t.name, t.config) ? "stands" : "elsewhere";
}
function L(n, t) {
  let i = {
    name: t.name,
    config: n.config
  };
  return {
    ...Lvt(t, n.config),
    ...(t.tools !== void 0 && {
      tools: O8(i, t.tools)
    }),
    ...(t.commands !== void 0 && {
      commands: xoe(i, t.commands)
    })
  };
}
function _(n, t) {
  let i = n.clients.find(item => item.name === t.name);
  if (i === void 0 || Jn(t.name, i.config) !== Jn(t.name, t.config)) return n;
  let e = Lvt(i, t.config);
  if (e === i) return n;
  let s = {
      name: t.name,
      config: t.config
    },
    r = uo(t.name),
    [c, l] = AT(n.tools, m => _c(m, t.name, r)),
    [u, S] = AT(n.commands, m => D(m, t.name));
  return {
    ...n,
    clients: n.clients.map(item => item === i ? e : item),
    tools: [...l, ...O8(s, c)],
    commands: [...S, ...xoe(s, u)]
  };
}
function H(n, t) {
  let {
    name: name_3
  } = t.client;
  if (n === void 0) return "no-row";
  if (Jn(name_3, n.config) !== Jn(name_3, t.client.config)) return "another-server";
  if (Oo(name_3)) return "disabled";
  if (Ic(name_3, n.config) !== null) return "policy-blocked";
  return;
}
function w(n, t, i) {
  if (i !== "disabled" && i !== "policy-blocked") return n;
  let {
      name: name_4,
      config: config_3
    } = t,
    r = i === "policy-blocked" ? Ic(name_4, config_3) : null;
  if (r === null && t.type === "disabled") return n;
  let c = r === null ? {
    name: name_4,
    type: "disabled",
    config: config_3
  } : {
    name: name_4,
    type: "failed",
    config: config_3,
    ...J_(r, name_4, config_3)
  };
  return {
    ...n,
    clients: n.clients.map(item => item === t ? c : item),
    ...I(n, name_4)
  };
}
function G(n, t) {
  let i = {
    name: n.name,
    config: n.config
  };
  return {
    ...t,
    client: Lvt(t.client, n.config),
    tools: O8(i, t.tools),
    commands: xoe(i, t.commands)
  };
}
export { bnt };