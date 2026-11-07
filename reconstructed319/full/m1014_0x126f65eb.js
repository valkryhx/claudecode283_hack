// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  A_r
} from "B:/~BUN/root/chunk-1tbewxs3.js";
import {
  ae
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  to,
  Dd
} from "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  Ui,
  HBt,
  lS
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  zw,
  Vd,
  Gw,
  zyi,
  nxn,
  Gu,
  jo
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  KC
} from "B:/~BUN/root/chunk-7jbamvvk.js";
import {
  j8s,
  $Pe,
  p5n,
  UGt,
  Jmn
} from "B:/~BUN/root/chunk-j9h732qg.js";
import {
  NG
} from "B:/~BUN/root/chunk-59sqv3yw.js";
import {
  k3e,
  pge,
  ore
} from "B:/~BUN/root/chunk-jzac91sc.js";
import {
  RS
} from "B:/~BUN/root/chunk-pyp8n05h.js";
import {
  mr
} from "B:/~BUN/root/chunk-s20ae4sg.js";
import {
  $Ne
} from "B:/~BUN/root/chunk-3xtmwvra.js";
import {
  _a
} from "B:/~BUN/root/chunk-5xe4wxb1.js";

function f() {
  return import.meta.require("B:/~BUN/root/chunk-y5d9tpmg.js").mcpClientModule()
}

function v(n) {
  _a(n.client).onclose = void 0, f().clearServerCache(n.name, n.config).catch(() => {})
}

function x(n, t, i) {
  return {
    tools: NG(n.tools, (e) => e.name?.startsWith(i)),
    commands: NG(n.commands, (e) => Gw(e, t)),
    resources: zw(n.resources, t),
    resourceTemplates: zw(n.resourceTemplates, t)
  }
}
class Gvt {
  #e;
  constructor(n) {
    this.#e = n
  }
  static over(n) {
    return new Gvt($Ne(n.getState, n.setState, "mcp"))
  }
  get() {
    return this.#e.get()
  }
  markNeedsAuth(n) {
    this.#e.set((t) => j8s(t, n))
  }
  async clearNeedsAuth(n) {
    let t = this.get().clients.find((e) => e.name === n);
    if (t?.type !== "needs-auth") return;
    let i = await f().peekSettledConnection(n, t.config);
    if (i?.type !== "connected") return;
    this.#e.set((e) => ({
      ...e,
      clients: e.clients.map((s) => s === t ? pge(i, t.config) : s)
    }))
  }
  adoptServer(n, t, i) {
    let e = "adopted";
    return this.#e.set((s) => {
      if (i?.asked === !0) return $Pe({
        mcp: s
      }, n, t).mcp;
      let c = s.clients.find((r) => r.name === n);
      if (e = G(c, t) ?? "adopted", c === void 0) return s;
      if (e !== "adopted") return w(s, c, e);
      return $Pe({
        mcp: s
      }, n, H(c, t), {
        appendIfAbsent: !1
      }).mcp
    }), e
  }
  markReconnectDiscarded(n, t) {
    this.#e.set((i) => {
      let e = i.clients.find((s) => s.name === n);
      if (e === void 0 || mr(n, e.config) !== mr(n, t)) return i;
      if (jo(n)) return w(i, e, "disabled");
      if (Gu(n, e.config) !== null) return w(i, e, "policy-blocked");
      if (e.type !== "connected") return i;
      return {
        ...i,
        clients: i.clients.map((s) => s === e ? {
          name: n,
          type: "failed",
          config: e.config,
          error: A_r
        } : s),
        ...D(i, n)
      }
    })
  }
  swapServerTools(n, t, i) {
    let e = !1;
    return this.#e.set((s) => {
      let c = Jmn(s.clients.find((l) => l.name === n), t, i);
      if (c === void 0) return ae(n, "A re-queried tool list was not applied: another server holds the name"), s;
      let r = p5n({
        mcp: s
      }, n, c);
      return e = r.mcp !== s, r.mcp
    }), e
  }
  setSuppressedClaudeAiConnectors(n) {
    this.#e.set((t) => nxn(t.suppressedClaudeAiConnectors ?? [], n) ? t : {
      ...t,
      suppressedClaudeAiConnectors: n
    })
  }
  setReservedNameRefusals(n) {
    this.#e.set((t) => {
      let i = t.reservedNameRefusals ?? [];
      return i.length === n.length && i.every((s, c) => s.scope === n[c]?.scope && s.name === n[c]?.name) ? t : {
        ...t,
        reservedNameRefusals: n
      }
    })
  }
  addPendingServers(n) {
    this.#e.set((t) => {
      let i = O(t, n);
      if (i.length === 0) return t;
      return {
        ...t,
        clients: [...t.clients, ...i]
      }
    })
  }
  reconcileConfiguredServers(n, t, i) {
    this.#e.set((e) => {
      let {
        stale: s,
        ...c
      } = zyi(e, n, t);
      i(s);
      let r = O(c, n);
      if (r.length === 0 && s.length === 0) {
        if (e.clientsInitialized) return e;
        return {
          ...e,
          clientsInitialized: !0
        }
      }
      return {
        ...e,
        ...c,
        clientsInitialized: !0,
        clients: [...c.clients, ...r]
      }
    })
  }
  applyIdentityBoundary(n, t) {
    let i = [...n, ...t];
    if (i.length === 0) return;
    this.#e.set((e) => {
      let s = i.map((r) => [r, to(r)]),
        c = (r) => s.some(([l, u]) => Dd(r, l, u));
      return {
        ...e,
        clients: e.clients.flatMap((r) => t.has(r.name) ? [] : n.has(r.name) ? [{
          name: r.name,
          type: "pending",
          config: r.config
        }] : [r]),
        tools: NG(e.tools, c),
        commands: NG(e.commands, (r) => i.some((l) => Gw(r, l))),
        resources: zw(e.resources, i),
        resourceTemplates: zw(e.resourceTemplates, i)
      }
    })
  }
  applyQueuedUpdates(n, t) {
    this.#e.set((i) => {
      let e = i;
      for (let s of n) {
        if (s.epoch !== t.currentEpoch && KC(s.config)) {
          if (s.type === "connected") f().detachAndCloseConnection(s);
          continue
        }
        let c = e.clients.find((d) => d.name === s.name),
          r = W(c, s),
          l = r === "stands" && c !== void 0 ? z(c, s) : s,
          {
            tools: u,
            commands: S,
            resources: m,
            resourceTemplates: A,
            replaceOnly: g,
            epoch: K,
            asked: J,
            superseded: I,
            ...U
          } = l,
          o = U,
          C = o.type === "disabled" || o.type === "failed",
          b = C ? u ?? [] : u,
          R = C ? S ?? [] : S,
          h = C ? m ?? [] : m,
          y = C ? A ?? [] : A,
          M = to(o.name),
          p = e.clients.findIndex((d) => d.name === o.name),
          a = p !== -1 ? e.clients[p] : void 0,
          E = o.type === "connected" && a?.type === "connected" && a.client === o.client,
          T = Ui(o) && Gu(o.name, o.config) === "managed-policy";
        if (o.type !== "disabled" && !E && jo(o.name) && !(T && a?.type !== "disabled")) {
          if (T) t.onDoorDenied(o.name);
          if (o.type === "connected") v(o);
          if (t.onOrphanedDisable(o.name), a && a.type !== "disabled" && (a.type !== "connected" || !Ui(o))) e = {
            ...e,
            clients: e.clients.map((d) => d.name === o.name ? {
              name: o.name,
              type: "disabled",
              config: r === "elsewhere" ? d.config : o.config
            } : d),
            ...x(e, o.name, M)
          };
          continue
        }
        if (r === "elsewhere" && a !== void 0) {
          if (o.type !== "disabled") {
            if (o.type === "connected") v(o);
            ae(o.name, `A late ${o.type} result was dropped: another server holds the name`);
            continue
          }
          if (a.type === "connected") v(a);
          o = {
            name: o.name,
            type: "disabled",
            config: a.config
          }
        }
        let k = Ui(o) ? Gu(o.name, o.config) : null;
        if (k) {
          t.onDoorDenied(o.name);
          let d = o.config;
          if (o.type === "connected") _a(o.client).onclose = void 0;
          else if (a?.type === "connected") _a(a.client).onclose = void 0, d = a.config;
          if (f().clearServerCache(o.name, d).catch(() => {}), p === -1) continue;
          e = {
            ...e,
            clients: e.clients.map((P) => P.name === o.name ? {
              name: o.name,
              type: "failed",
              config: o.config,
              ...RS(k, o.name, o.config)
            } : P),
            ...x(e, o.name, M)
          };
          continue
        }
        if (g && p !== -1 && (e.clients[p]?.type === "needs-auth" || e.clients[p]?.type === "disabled")) {
          if (o.type === "connected") _a(o.client).onclose = void 0, f().clearServerCache(o.name, o.config).catch(() => {});
          continue
        }
        if (p === -1 && (g || r === "nowhere" && !I)) {
          if (o.type === "connected") _a(o.client).onclose = void 0, f().clearServerCache(o.name, o.config).catch(() => {});
          if (!g) t.onOrphanedDisable(o.name), ae(o.name, `A late ${o.type} result was dropped: no row holds the name`);
          continue
        }
        if (g && Vd() && p !== -1 && mr(o.name, e.clients[p].config) !== mr(o.name, o.config)) {
          if (o.type === "connected") f().detachAndCloseConnection(o);
          continue
        }
        if (p !== -1 && !HBt(e.clients[p], o)) {
          if (r === "asked") e = L(e, o);
          continue
        }
        let Q = p === -1 ? [...e.clients, o] : e.clients.map((d) => d.name === o.name ? o : d),
          j = b === void 0 ? e.tools : [...NG(e.tools, (d) => d.name?.startsWith(M)), ...b],
          _ = R === void 0 ? e.commands : [...NG(e.commands, (d) => Gw(d, o.name)), ...R],
          B = h === void 0 ? e.resources : h.length > 0 ? {
            ...e.resources,
            [o.name]: h
          } : zw(e.resources, o.name),
          F = y === void 0 ? e.resourceTemplates : y.length > 0 ? {
            ...e.resourceTemplates,
            [o.name]: y
          } : zw(e.resourceTemplates, o.name);
        e = {
          ...e,
          clients: Q,
          tools: j,
          commands: _,
          resources: B,
          resourceTemplates: F
        }
      }
      return e
    })
  }
}

function O(n, t) {
  let i = new Set(n.clients.map((e) => e.name));
  return Object.entries(t).filter(([e]) => !i.has(e)).map(([e, s]) => ({
    name: e,
    type: jo(e) ? "disabled" : "pending",
    config: s
  }))
}

function VWr(n, t) {
  return n.mcpInfo?.serverName === void 0 ? Gw(n, t) : n.mcpInfo.serverName === t
}

function D(n, t) {
  let i = to(t);
  return {
    tools: NG(n.tools, (e) => Dd(e, t, i)),
    commands: NG(n.commands, (e) => VWr(e, t)),
    resources: zw(n.resources, t),
    resourceTemplates: zw(n.resourceTemplates, t)
  }
}

function W(n, t) {
  if (t.asked === !0) return "asked";
  if (n === void 0) return "nowhere";
  return mr(t.name, n.config) === mr(t.name, t.config) ? "stands" : "elsewhere"
}

function z(n, t) {
  let i = {
    name: t.name,
    config: n.config
  };
  return {
    ...UGt(t, n.config),
    ...t.tools !== void 0 && {
      tools: ore(i, t.tools)
    },
    ...t.commands !== void 0 && {
      commands: k3e(i, t.commands)
    }
  }
}

function L(n, t) {
  let i = n.clients.find((m) => m.name === t.name);
  if (i === void 0 || mr(t.name, i.config) !== mr(t.name, t.config)) return n;
  let e = UGt(i, t.config);
  if (e === i) return n;
  let s = {
      name: t.name,
      config: t.config
    },
    c = to(t.name),
    [r, l] = lS(n.tools, (m) => Dd(m, t.name, c)),
    [u, S] = lS(n.commands, (m) => VWr(m, t.name));
  return {
    ...n,
    clients: n.clients.map((m) => m === i ? e : m),
    tools: [...l, ...ore(s, r)],
    commands: [...S, ...k3e(s, u)]
  }
}

function G(n, t) {
  let {
    name: i
  } = t.client;
  if (n === void 0) return "no-row";
  if (mr(i, n.config) !== mr(i, t.client.config)) return "another-server";
  if (jo(i)) return "disabled";
  if (Gu(i, n.config) !== null) return "policy-blocked";
  return
}

function w(n, t, i) {
  if (i !== "disabled" && i !== "policy-blocked") return n;
  let {
    name: e,
    config: s
  } = t, c = i === "policy-blocked" ? Gu(e, s) : null;
  if (c === null && t.type === "disabled") return n;
  let r = c === null ? {
    name: e,
    type: "disabled",
    config: s
  } : {
    name: e,
    type: "failed",
    config: s,
    ...RS(c, e, s)
  };
  return {
    ...n,
    clients: n.clients.map((l) => l === t ? r : l),
    ...D(n, e)
  }
}

function H(n, t) {
  let i = {
    name: n.name,
    config: n.config
  };
  return {
    ...t,
    client: UGt(t.client, n.config),
    tools: ore(i, t.tools),
    commands: k3e(i, t.commands)
  }
}
export {
  Gvt,
  VWr
};
