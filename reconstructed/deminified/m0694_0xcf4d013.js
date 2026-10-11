// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Cs } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Qh } from "B:/~BUN/root/chunk-3jyp964r.js";
import { hi, xc } from "B:/~BUN/root/chunk-w5bkq1td.js";
function v8r(t, name) {
  let n = t.clients.findIndex(item => item.name === name);
  if (n === -1) return t;
  let l = t.clients[n];
  if (!l || !Cs(l)) return t;
  let clients = [...t.clients];
  return clients[n] = {
    name: name,
    type: "needs-auth",
    config: l.config
  }, {
    ...t,
    clients: clients
  };
}
function kue(t, e, n, l) {
  let c = t.mcp.clients.some(item => item.name === e);
  if (!c && l?.appendIfAbsent === !1) return t;
  let o = hi(e);
  return {
    ...t,
    mcp: {
      ...t.mcp,
      clients: c ? t.mcp.clients.map(item => item.name === e ? n.client : item) : [...t.mcp.clients, n.client],
      tools: [...t.mcp.tools.filter(item => !xc(item, e, o)), ...n.tools],
      commands: [...t.mcp.commands.filter(item => !Qh(item, e)), ...n.commands],
      resources: n.resources ? {
        ...t.mcp.resources,
        [e]: n.resources
      } : t.mcp.resources,
      resourceTemplates: n.resourceTemplates ? {
        ...t.mcp.resourceTemplates,
        [e]: n.resourceTemplates
      } : t.mcp.resourceTemplates
    }
  };
}
function k8r(t, e, n) {
  if (!t.clients.some(item => item.name === e && item.type === "connected")) return t;
  let l = hi(e);
  return {
    ...t,
    tools: [...t.tools.filter(item => !xc(item, e, l)), ...n]
  };
}
function SGt(t, e, n) {
  if (!t.mcp.clients.some(item => item.name === e && item.type === "connected")) return t;
  let l = hi(e);
  return {
    ...t,
    mcp: {
      ...t.mcp,
      tools: [...t.mcp.tools.filter(item => !xc(item, e, l)), ...n]
    }
  };
}
function E8r(t, e, n) {
  let l = new Set(t.clients),
    c = new Map(e.clients.map(item => [item.name, item])),
    o = n;
  for (let s of n.clients) {
    if (!l.has(s)) continue;
    let r = c.get(s.name),
      f = hi(s.name),
      p = i => xc(i, s.name, f);
    if (r === void 0) {
      o = {
        ...o,
        clients: o.clients.filter(item => item !== s),
        tools: o.tools.filter(item => !p(item))
      };
      continue;
    }
    if (r !== s) o = {
      ...o,
      clients: o.clients.map(item => item === s ? r : item)
    };
    let d = e.tools.filter(p),
      S = o.tools.filter(p);
    if (d.length === S.length && d.every((item, index) => item === S[index])) continue;
    o = {
      ...o,
      tools: [...o.tools.filter(item => !p(item)), ...d]
    };
  }
  let m = new Set(t.clients.map(item => item.name)),
    u = new Set(n.clients.map(item => item.name)),
    a = e.clients.filter(item => !m.has(item.name) && !u.has(item.name));
  if (a.length > 0) {
    let s = a.map(item => [item.name, hi(item.name)]);
    o = {
      ...o,
      clients: [...o.clients, ...a],
      tools: [...o.tools, ...e.tools.filter(item => s.some(([f, p]) => xc(item, f, p)))]
    };
  }
  return o;
}
export { v8r, kue, k8r, SGt, E8r };