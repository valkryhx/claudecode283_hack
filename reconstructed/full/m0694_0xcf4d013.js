// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Cs
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  Qh
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  hi,
  xc
} from "B:/~BUN/root/chunk-w5bkq1td.js";

function v8r(t, e) {
  let n = t.clients.findIndex((o) => o.name === e);
  if (n === -1) return t;
  let l = t.clients[n];
  if (!l || !Cs(l)) return t;
  let c = [...t.clients];
  return c[n] = {
    name: e,
    type: "needs-auth",
    config: l.config
  }, {
    ...t,
    clients: c
  }
}

function kue(t, e, n, l) {
  let c = t.mcp.clients.some((m) => m.name === e);
  if (!c && l?.appendIfAbsent === !1) return t;
  let o = hi(e);
  return {
    ...t,
    mcp: {
      ...t.mcp,
      clients: c ? t.mcp.clients.map((m) => m.name === e ? n.client : m) : [...t.mcp.clients, n.client],
      tools: [...t.mcp.tools.filter((m) => !xc(m, e, o)), ...n.tools],
      commands: [...t.mcp.commands.filter((m) => !Qh(m, e)), ...n.commands],
      resources: n.resources ? {
        ...t.mcp.resources,
        [e]: n.resources
      } : t.mcp.resources,
      resourceTemplates: n.resourceTemplates ? {
        ...t.mcp.resourceTemplates,
        [e]: n.resourceTemplates
      } : t.mcp.resourceTemplates
    }
  }
}

function k8r(t, e, n) {
  if (!t.clients.some((c) => c.name === e && c.type === "connected")) return t;
  let l = hi(e);
  return {
    ...t,
    tools: [...t.tools.filter((c) => !xc(c, e, l)), ...n]
  }
}

function SGt(t, e, n) {
  if (!t.mcp.clients.some((c) => c.name === e && c.type === "connected")) return t;
  let l = hi(e);
  return {
    ...t,
    mcp: {
      ...t.mcp,
      tools: [...t.mcp.tools.filter((c) => !xc(c, e, l)), ...n]
    }
  }
}

function E8r(t, e, n) {
  let l = new Set(t.clients),
    c = new Map(e.clients.map((s) => [s.name, s])),
    o = n;
  for (let s of n.clients) {
    if (!l.has(s)) continue;
    let r = c.get(s.name),
      f = hi(s.name),
      p = (i) => xc(i, s.name, f);
    if (r === void 0) {
      o = {
        ...o,
        clients: o.clients.filter((i) => i !== s),
        tools: o.tools.filter((i) => !p(i))
      };
      continue
    }
    if (r !== s) o = {
      ...o,
      clients: o.clients.map((i) => i === s ? r : i)
    };
    let d = e.tools.filter(p),
      S = o.tools.filter(p);
    if (d.length === S.length && d.every((i, T) => i === S[T])) continue;
    o = {
      ...o,
      tools: [...o.tools.filter((i) => !p(i)), ...d]
    }
  }
  let m = new Set(t.clients.map((s) => s.name)),
    u = new Set(n.clients.map((s) => s.name)),
    a = e.clients.filter((s) => !m.has(s.name) && !u.has(s.name));
  if (a.length > 0) {
    let s = a.map((r) => [r.name, hi(r.name)]);
    o = {
      ...o,
      clients: [...o.clients, ...a],
      tools: [...o.tools, ...e.tools.filter((r) => s.some(([f, p]) => xc(r, f, p)))]
    }
  }
  return o
}
export {
  v8r,
  kue,
  k8r,
  SGt,
  E8r
};
