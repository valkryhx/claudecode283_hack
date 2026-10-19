// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Rt
} from "B:/~BUN/root/chunk-vpgpdrbv.js";
import {
  nE,
  O9n
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  Tn
} from "B:/~BUN/root/chunk-f43s8pq0.js";
import {
  N
} from "B:/~BUN/root/chunk-nkxgam12.js";

function g(e) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 ? e : void 0
}
var v = {
  always_allow: !0,
  always_ask: !0,
  always_deny: !0
};

function P(e) {
  return typeof e === "string" && Object.hasOwn(v, e)
}

function tfn(e) {
  if (!N(e) || typeof e.name !== "string") return;
  let {
    name: n,
    permission_policy: r
  } = e;
  if (r === void 0) return {
    policy: {
      name: n
    },
    rewritten: !1
  };
  return P(r) ? {
    policy: {
      name: n,
      permission_policy: r
    },
    rewritten: !1
  } : {
    policy: {
      name: n,
      permission_policy: "always_ask"
    },
    rewritten: !0
  }
}

function R9n(e, n) {
  if (e === void 0 || n === void 0) return e === n;
  return e.length === n.length && e.every((r, o) => r.name === n[o]?.name && r.permission_policy === n[o]?.permission_policy)
}

function I7e(e) {
  if (!N(e)) return {
    settings: {},
    ignored: []
  };
  let {
    timeout: n,
    disableAutoBackground: r,
    tools: o
  } = e, i = g(n), t = [];
  if (n !== void 0 && i === void 0) t.push("timeout");
  if (r !== void 0 && typeof r !== "boolean") t.push("disableAutoBackground");
  let s = k(o);
  if (M7e(e) !== void 0) t.push("tools");
  return {
    settings: {
      ...i !== void 0 && {
        timeout: i
      },
      ...r === !0 && {
        disableAutoBackground: r
      },
      ...s !== void 0 && {
        tools: s
      }
    },
    ignored: t
  }
}

function M7e(e) {
  let n = N(e) ? e.tools : void 0;
  if (n === void 0) return;
  if (!Array.isArray(n)) return {
    kind: "not_a_list"
  };
  let r = 0,
    o = 0;
  for (let i of n) {
    let t = tfn(i);
    if (t === void 0) r++;
    else if (t.rewritten) o++
  }
  return r + o > 0 ? {
    kind: "entries",
    dropped: r,
    rewritten: o,
    kept: n.length - r
  } : void 0
}

function Y_t(e) {
  if (e.kind === "not_a_list") return "tools[] is not a list; no per-tool policy taken";
  let n = [];
  if (e.dropped > 0) n.push(`dropped ${e.dropped} malformed tools[] ${e.dropped===1?"entry":"entries"}`);
  if (e.rewritten > 0) n.push(`read ${e.rewritten} tools[] ${e.rewritten===1?"entry":"entries"} with an invalid permission_policy as always_ask`);
  return `${n.join(", ")}; kept ${e.kept}`
}

function k(e) {
  if (!Array.isArray(e)) return;
  let n = [];
  for (let r of e) {
    let o = tfn(r);
    if (o !== void 0) n.push(o.policy)
  }
  return n
}
var KJ = "mcp__";

function co(e) {
  let n = e.split("__"),
    [r, o, ...i] = n;
  if (r !== "mcp" || !o) return null;
  let t = i.length > 0 ? i.join("__") : void 0;
  return {
    serverName: o,
    toolName: t
  }
}

function uo(e) {
  return `${KJ}${Tn(e)}__`
}

function _c(e, n, r) {
  if (e.mcpInfo?.serverName !== void 0) return e.mcpInfo.serverName === n;
  return e.name.startsWith(r ?? uo(n))
}

function dR(e) {
  return co(`${uo(e)}x`)?.serverName ?? Tn(e)
}

function MKs(e, {
  listedServer: n,
  parsedServer: r
}) {
  if (n !== void 0) return e === n;
  return r !== void 0 && u1t(r, e)
}

function si(e, n) {
  return `${uo(e)}${Tn(n)}`
}
var S = {
  always_allow: 0,
  always_ask: 1,
  always_deny: 2
};

function D7e(...e) {
  let n = new Map;
  for (let t of e)
    for (let [s, l] of Object.entries(t)) {
      let d = l.type === "sdk";
      if (!d && l.type !== "http" && l.type !== "sse") continue;
      let c = l.tools;
      if (!Array.isArray(c)) continue;
      for (let p of c) {
        let a = tfn(p);
        if (a === void 0) continue;
        let u = a.policy.permission_policy;
        if (u === void 0 || (d ? u === "always_allow" : a.rewritten)) continue;
        let w = S[u],
          m = si(s, a.policy.name),
          y = n.get(m);
        if (y === void 0 || w > S[y]) n.set(m, u)
      }
    }
  let r = [],
    o = [],
    i = [];
  for (let [t, s] of n)
    if (s === "always_allow") r.push(t);
    else if (s === "always_deny") o.push(t);
  else i.push(t);
  return {
    allow: r,
    deny: o,
    ask: i
  }
}

function DKs(e, n) {
  let r = Object.fromEntries(Object.entries(n).filter(([, s]) => s.scope === "dynamic" && s.type !== "sdk")),
    {
      allow: o,
      deny: i,
      ask: t
    } = D7e(r);
  if (o.length === 0 && i.length === 0 && t.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      ...o.length > 0 && {
        mcpServerPolicy: o
      }
    },
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      ...i.length > 0 && {
        mcpServerPolicy: i
      }
    },
    alwaysAskRules: {
      ...e.alwaysAskRules,
      ...t.length > 0 && {
        mcpServerPolicy: t
      }
    }
  }
}

function A9n(e, n, r) {
  let o = (l, d) => {
      let c = l.mcpServerPolicy ?? [],
        p = r === "replace" ? d : [...c, ...d.filter((a) => !c.includes(a))];
      if (p.length === c.length && p.every((a, u) => a === c[u])) return l;
      if (p.length === 0) {
        let {
          mcpServerPolicy: a,
          ...u
        } = l;
        return u
      }
      return {
        ...l,
        mcpServerPolicy: p
      }
    },
    i = o(e.alwaysAllowRules, n.allow),
    t = o(e.alwaysDenyRules, n.deny),
    s = o(e.alwaysAskRules, n.ask);
  if (i === e.alwaysAllowRules && t === e.alwaysDenyRules && s === e.alwaysAskRules) return e;
  return {
    ...e,
    alwaysAllowRules: i,
    alwaysDenyRules: t,
    alwaysAskRules: s
  }
}

function Cc(e) {
  return e.mcpInfo ? si(e.mcpInfo.serverName, e.mcpInfo.toolName) : e.name
}

function nfn(e, n) {
  let r = `mcp__${Tn(n)}__`;
  return e.replace(r, "")
}

function rfn(e) {
  let n = e.replace(/\s*\(MCP\)\s*$/, "");
  n = n.trim();
  let r = n.indexOf(" - ");
  if (r !== -1) return n.substring(r + 3).trim();
  return n
}

function L7e(e, n) {
  if (!n) return Rt(e, f);
  let r = Ehe(e);
  return r ? `${Rt(r.serverName,f)} (from plugin ${Rt(r.pluginName,f)})` : Rt(e, f)
}
var f = 80;

function Ehe(e) {
  if (!e.startsWith("plugin:")) return;
  let n = e.split(":");
  if (n.length < 3) return;
  return {
    pluginName: n[1],
    serverName: n.slice(2).join(":")
  }
}

function u1t(e, n) {
  if (e.startsWith("plugin:") || n.startsWith("plugin:")) return e === n;
  return Tn(e) === Tn(n)
}

function _Ur(e, n) {
  return PBo(e)(co(n))
}

function PBo(e) {
  let n = co(e);
  if (n === null) return () => !1;
  let r = n.toolName === void 0 || n.toolName === "*",
    o = n.toolName !== void 0 && nE(n.toolName) ? n.toolName : void 0,
    i;
  return (t) => t !== null && n.serverName === t.serverName && (r || t.toolName !== void 0 && o !== void 0 && (i ??= O9n(o))(t.toolName))
}

function N7e(e) {
  if (e.mcpInfo) {
    let {
      serverName: r
    } = e.mcpInfo;
    return [`${KJ}${Tn(r)}`, `${KJ}${dR(r)}`]
  }
  let n = [];
  if (!e.name.startsWith(KJ)) return n;
  for (let r = e.name.indexOf("__", KJ.length); r !== -1; r = e.name.indexOf("__", r + 1)) n.push(e.name.slice(0, r));
  return n
}

function LKs(e) {
  let n = co(e);
  if (n === null || n.toolName === void 0) return n === null ? [] : [n];
  return N7e({
    name: e
  }).map((r) => ({
    serverName: r.slice(KJ.length),
    toolName: e.slice(r.length + 2)
  }))
}

function OBo(e, n) {
  return (n.mcpInfo ? [`${KJ}${Tn(n.mcpInfo.serverName)}`] : N7e(n)).every((r) => e === r || e.startsWith(`${r}__`))
}

function F7e(e, n) {
  return _Ur(e, Cc(n)) && OBo(e, n)
}

function NKs(e, n) {
  return _Ur(e, Cc(n)) || e.startsWith(KJ) && N7e(n).includes(e)
}
export {
  tfn,
  R9n,
  I7e,
  M7e,
  Y_t,
  KJ,
  co,
  uo,
  _c,
  dR,
  MKs,
  si,
  D7e,
  DKs,
  A9n,
  Cc,
  nfn,
  rfn,
  L7e,
  Ehe,
  u1t,
  _Ur,
  PBo,
  N7e,
  LKs,
  OBo,
  F7e,
  NKs
};
