// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { to, Dd } from "B:/~BUN/root/chunk-sy1h8mf0.js";
import { ln, Ui } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Gw } from "B:/~BUN/root/chunk-27h4st9h.js";
import { ore } from "B:/~BUN/root/chunk-jzac91sc.js";
import { mr } from "B:/~BUN/root/chunk-s20ae4sg.js";
function j8s(e, name) {
  let n = e.clients.findIndex(item => item.name === name);
  if (n === -1) return e;
  let i = e.clients[n];
  if (!i || !Ui(i) && i.type !== "needs-auth") return e;
  let clients = [...e.clients];
  return clients[n] = i.type === "needs-auth" ? {
    ...i
  } : {
    name: name,
    type: "needs-auth",
    config: i.config
  }, {
    ...e,
    clients: clients
  };
}
function $Pe(e, t, n, i) {
  let s = e.mcp.clients.some(item => item.name === t);
  if (!s && i?.appendIfAbsent === !1) return e;
  let o = to(t);
  return {
    ...e,
    mcp: {
      ...e.mcp,
      clients: s ? e.mcp.clients.map(item => item.name === t ? n.client : item) : [...e.mcp.clients, n.client],
      tools: [...e.mcp.tools.filter(item => !Dd(item, t, o)), ...n.tools],
      commands: [...e.mcp.commands.filter(item => !Gw(item, t)), ...n.commands],
      resources: n.resources ? {
        ...e.mcp.resources,
        [t]: n.resources
      } : e.mcp.resources,
      resourceTemplates: n.resourceTemplates ? {
        ...e.mcp.resourceTemplates,
        [t]: n.resourceTemplates
      } : e.mcp.resourceTemplates
    }
  };
}
function W8s(e, t, n) {
  if (!e.clients.some(item => item.name === t && item.type === "connected")) return e;
  let i = to(t);
  return {
    ...e,
    tools: [...e.tools.filter(item => !Dd(item, t, i)), ...n]
  };
}
function p5n(e, t, n) {
  if (!e.mcp.clients.some(item => item.name === t && item.type === "connected")) return e;
  let i = to(t);
  return {
    ...e,
    mcp: {
      ...e.mcp,
      tools: [...e.mcp.tools.filter(item => !Dd(item, t, i)), ...n]
    }
  };
}
function z8s(e, t, n) {
  let i = new Set(e.clients),
    s = new Map(t.clients.map(item => [item.name, item])),
    o = n;
  for (let c of n.clients) {
    if (!i.has(c)) continue;
    let p = s.get(c.name),
      a = to(c.name),
      m = r => Dd(r, c.name, a);
    if (p === void 0) {
      o = {
        ...o,
        clients: o.clients.filter(item => item !== c),
        tools: o.tools.filter(item => !m(item))
      };
      continue;
    }
    if (p !== c) o = {
      ...o,
      clients: o.clients.map(item => item === c ? p : item)
    };
    let S = t.tools.filter(m),
      d = o.tools.filter(m);
    if (S.length === d.length && S.every((item, index) => item === d[index])) continue;
    o = {
      ...o,
      tools: [...o.tools.filter(item => !m(item)), ...S]
    };
  }
  let l = new Set(e.clients.map(item => item.name)),
    u = new Set(n.clients.map(item => item.name)),
    f = t.clients.filter(item => !l.has(item.name) && !u.has(item.name));
  if (f.length > 0) {
    let c = f.map(item => [item.name, to(item.name)]);
    o = {
      ...o,
      clients: [...o.clients, ...f],
      tools: [...o.tools, ...t.tools.filter(item => c.some(([a, m]) => Dd(item, a, m)))]
    };
  }
  return o;
}
function UGt(e, config) {
  return ln(e.config, config) ? e : {
    ...e,
    config: config
  };
}
function Jmn(e, t, n) {
  if (e === void 0) return t;
  return mr(e.name, e.config) !== mr(e.name, n) ? void 0 : ore({
    name: e.name,
    config: e.config
  }, t);
}
export { j8s, $Pe, W8s, p5n, z8s, UGt, Jmn };