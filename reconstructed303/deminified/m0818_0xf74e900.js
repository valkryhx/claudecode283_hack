// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ps } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Nn } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Q_ } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { Jn } from "B:/~BUN/root/chunk-q0t5e1bx.js";
import { O8 } from "B:/~BUN/root/chunk-5gazt5rq.js";
import { uo, _c } from "B:/~BUN/root/chunk-b0487zs4.js";
function s9o(e, name) {
  let n = e.clients.findIndex(item => item.name === name);
  if (n === -1) return e;
  let i = e.clients[n];
  if (!i || !Ps(i) && i.type !== "needs-auth") return e;
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
function a_e(e, t, n, i) {
  let s = e.mcp.clients.some(item => item.name === t);
  if (!s && i?.appendIfAbsent === !1) return e;
  let o = uo(t);
  return {
    ...e,
    mcp: {
      ...e.mcp,
      clients: s ? e.mcp.clients.map(item => item.name === t ? n.client : item) : [...e.mcp.clients, n.client],
      tools: [...e.mcp.tools.filter(item => !_c(item, t, o)), ...n.tools],
      commands: [...e.mcp.commands.filter(item => !Q_(item, t)), ...n.commands],
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
function i9o(e, t, n) {
  if (!e.clients.some(item => item.name === t && item.type === "connected")) return e;
  let i = uo(t);
  return {
    ...e,
    tools: [...e.tools.filter(item => !_c(item, t, i)), ...n]
  };
}
function Cwn(e, t, n) {
  if (!e.mcp.clients.some(item => item.name === t && item.type === "connected")) return e;
  let i = uo(t);
  return {
    ...e,
    mcp: {
      ...e.mcp,
      tools: [...e.mcp.tools.filter(item => !_c(item, t, i)), ...n]
    }
  };
}
function a9o(e, t, n) {
  let i = new Set(e.clients),
    s = new Map(t.clients.map(item => [item.name, item])),
    o = n;
  for (let c of n.clients) {
    if (!i.has(c)) continue;
    let p = s.get(c.name),
      a = uo(c.name),
      m = r => _c(r, c.name, a);
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
    let c = f.map(item => [item.name, uo(item.name)]);
    o = {
      ...o,
      clients: [...o.clients, ...f],
      tools: [...o.tools, ...t.tools.filter(item => c.some(([a, m]) => _c(item, a, m)))]
    };
  }
  return o;
}
function Lvt(e, config) {
  return Nn(e.config, config) ? e : {
    ...e,
    config: config
  };
}
function $2t(e, t, n) {
  if (e === void 0) return t;
  return Jn(e.name, e.config) !== Jn(e.name, n) ? void 0 : O8({
    name: e.name,
    config: e.config
  }, t);
}
export { s9o, a_e, i9o, Cwn, a9o, Lvt, $2t };