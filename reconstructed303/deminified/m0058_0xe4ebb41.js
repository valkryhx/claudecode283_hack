// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Rt } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { nE, O9n } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { Tn } from "B:/~BUN/root/chunk-f43s8pq0.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
function g(e) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 ? e : void 0;
}
var v = {
  always_allow: !0,
  always_ask: !0,
  always_deny: !0
};
function P(e) {
  return typeof e === "string" && Object.hasOwn(v, e);
}
function tfn(e) {
  if (!N(e) || typeof e.name !== "string") return;
  let {
    name: name,
    permission_policy: permission_policy
  } = e;
  if (permission_policy === void 0) return {
    policy: {
      name: name
    },
    rewritten: !1
  };
  return P(permission_policy) ? {
    policy: {
      name: name,
      permission_policy: permission_policy
    },
    rewritten: !1
  } : {
    policy: {
      name: name,
      permission_policy: "always_ask"
    },
    rewritten: !0
  };
}
function R9n(e, n) {
  if (e === void 0 || n === void 0) return e === n;
  return e.length === n.length && e.every((item, index) => item.name === n[index]?.name && item.permission_policy === n[index]?.permission_policy);
}
function I7e(e) {
  if (!N(e)) return {
    settings: {},
    ignored: []
  };
  let {
      timeout: timeout,
      disableAutoBackground: disableAutoBackground,
      tools: tools
    } = e,
    timeout_2 = g(timeout),
    ignored = [];
  if (timeout !== void 0 && timeout_2 === void 0) ignored.push("timeout");
  if (disableAutoBackground !== void 0 && typeof disableAutoBackground !== "boolean") ignored.push("disableAutoBackground");
  let tools_2 = k(tools);
  if (M7e(e) !== void 0) ignored.push("tools");
  return {
    settings: {
      ...(timeout_2 !== void 0 && {
        timeout: timeout_2
      }),
      ...(disableAutoBackground === !0 && {
        disableAutoBackground: disableAutoBackground
      }),
      ...(tools_2 !== void 0 && {
        tools: tools_2
      })
    },
    ignored: ignored
  };
}
function M7e(e) {
  let n = N(e) ? e.tools : void 0;
  if (n === void 0) return;
  if (!Array.isArray(n)) return {
    kind: "not_a_list"
  };
  let dropped = 0,
    rewritten = 0;
  for (let i of n) {
    let t = tfn(i);
    if (t === void 0) dropped++;else if (t.rewritten) rewritten++;
  }
  return dropped + rewritten > 0 ? {
    kind: "entries",
    dropped: dropped,
    rewritten: rewritten,
    kept: n.length - dropped
  } : void 0;
}
function Y_t(e) {
  if (e.kind === "not_a_list") return "tools[] is not a list; no per-tool policy taken";
  let n = [];
  if (e.dropped > 0) n.push(`dropped ${e.dropped} malformed tools[] ${e.dropped === 1 ? "entry" : "entries"}`);
  if (e.rewritten > 0) n.push(`read ${e.rewritten} tools[] ${e.rewritten === 1 ? "entry" : "entries"} with an invalid permission_policy as always_ask`);
  return `${n.join(", ")}; kept ${e.kept}`;
}
function k(e) {
  if (!Array.isArray(e)) return;
  let n = [];
  for (let r of e) {
    let o = tfn(r);
    if (o !== void 0) n.push(o.policy);
  }
  return n;
}
var KJ = "mcp__";
function co(e) {
  let n = e.split("__"),
    [r, serverName, ...i] = n;
  if (r !== "mcp" || !serverName) return null;
  let toolName = i.length > 0 ? i.join("__") : void 0;
  return {
    serverName: serverName,
    toolName: toolName
  };
}
function uo(e) {
  return `${KJ}${Tn(e)}__`;
}
function _c(e, n, r) {
  if (e.mcpInfo?.serverName !== void 0) return e.mcpInfo.serverName === n;
  return e.name.startsWith(r ?? uo(n));
}
function dR(e) {
  return co(`${uo(e)}x`)?.serverName ?? Tn(e);
}
function MKs(e, {
  listedServer: listedServer,
  parsedServer: parsedServer
}) {
  if (listedServer !== void 0) return e === listedServer;
  return parsedServer !== void 0 && u1t(parsedServer, e);
}
function si(e, n) {
  return `${uo(e)}${Tn(n)}`;
}
var S = {
  always_allow: 0,
  always_ask: 1,
  always_deny: 2
};
function D7e(...e) {
  let n = new Map();
  for (let t of e) for (let [s, l] of Object.entries(t)) {
    let d = l.type === "sdk";
    if (!d && l.type !== "http" && l.type !== "sse") continue;
    let tools_3 = l.tools;
    if (!Array.isArray(tools_3)) continue;
    for (let p of tools_3) {
      let a = tfn(p);
      if (a === void 0) continue;
      let permission_policy_2 = a.policy.permission_policy;
      if (permission_policy_2 === void 0 || (d ? permission_policy_2 === "always_allow" : a.rewritten)) continue;
      let w = S[permission_policy_2],
        m = si(s, a.policy.name),
        y = n.get(m);
      if (y === void 0 || w > S[y]) n.set(m, permission_policy_2);
    }
  }
  let allow = [],
    deny = [],
    ask = [];
  for (let [t, s] of n) if (s === "always_allow") allow.push(t);else if (s === "always_deny") deny.push(t);else ask.push(t);
  return {
    allow: allow,
    deny: deny,
    ask: ask
  };
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
      ...(o.length > 0 && {
        mcpServerPolicy: o
      })
    },
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      ...(i.length > 0 && {
        mcpServerPolicy: i
      })
    },
    alwaysAskRules: {
      ...e.alwaysAskRules,
      ...(t.length > 0 && {
        mcpServerPolicy: t
      })
    }
  };
}
function A9n(e, n, r) {
  let o = (l, d) => {
      let c = l.mcpServerPolicy ?? [],
        mcpServerPolicy_2 = r === "replace" ? d : [...c, ...d.filter(item => !c.includes(item))];
      if (mcpServerPolicy_2.length === c.length && mcpServerPolicy_2.every((item, index) => item === c[index])) return l;
      if (mcpServerPolicy_2.length === 0) {
        let {
          mcpServerPolicy: mcpServerPolicy,
          ...u
        } = l;
        return u;
      }
      return {
        ...l,
        mcpServerPolicy: mcpServerPolicy_2
      };
    },
    alwaysAllowRules = o(e.alwaysAllowRules, n.allow),
    alwaysDenyRules = o(e.alwaysDenyRules, n.deny),
    alwaysAskRules = o(e.alwaysAskRules, n.ask);
  if (alwaysAllowRules === e.alwaysAllowRules && alwaysDenyRules === e.alwaysDenyRules && alwaysAskRules === e.alwaysAskRules) return e;
  return {
    ...e,
    alwaysAllowRules: alwaysAllowRules,
    alwaysDenyRules: alwaysDenyRules,
    alwaysAskRules: alwaysAskRules
  };
}
function Cc(e) {
  return e.mcpInfo ? si(e.mcpInfo.serverName, e.mcpInfo.toolName) : e.name;
}
function nfn(e, n) {
  let r = `mcp__${Tn(n)}__`;
  return e.replace(r, "");
}
function rfn(e) {
  let n = e.replace(/\s*\(MCP\)\s*$/, "");
  n = n.trim();
  let r = n.indexOf(" - ");
  if (r !== -1) return n.substring(r + 3).trim();
  return n;
}
function L7e(e, n) {
  if (!n) return Rt(e, f);
  let r = Ehe(e);
  return r ? `${Rt(r.serverName, f)} (from plugin ${Rt(r.pluginName, f)})` : Rt(e, f);
}
var f = 80;
function Ehe(e) {
  if (!e.startsWith("plugin:")) return;
  let n = e.split(":");
  if (n.length < 3) return;
  return {
    pluginName: n[1],
    serverName: n.slice(2).join(":")
  };
}
function u1t(e, n) {
  if (e.startsWith("plugin:") || n.startsWith("plugin:")) return e === n;
  return Tn(e) === Tn(n);
}
function _Ur(e, n) {
  return PBo(e)(co(n));
}
function PBo(e) {
  let n = co(e);
  if (n === null) return () => !1;
  let r = n.toolName === void 0 || n.toolName === "*",
    o = n.toolName !== void 0 && nE(n.toolName) ? n.toolName : void 0,
    i;
  return t => t !== null && n.serverName === t.serverName && (r || t.toolName !== void 0 && o !== void 0 && (i ??= O9n(o))(t.toolName));
}
function N7e(e) {
  if (e.mcpInfo) {
    let {
      serverName: serverName_2
    } = e.mcpInfo;
    return [`${KJ}${Tn(serverName_2)}`, `${KJ}${dR(serverName_2)}`];
  }
  let n = [];
  if (!e.name.startsWith(KJ)) return n;
  for (let r = e.name.indexOf("__", KJ.length); r !== -1; r = e.name.indexOf("__", r + 1)) n.push(e.name.slice(0, r));
  return n;
}
function LKs(name_2) {
  let n = co(name_2);
  if (n === null || n.toolName === void 0) return n === null ? [] : [n];
  return N7e({
    name: name_2
  }).map(item => ({
    serverName: item.slice(KJ.length),
    toolName: name_2.slice(item.length + 2)
  }));
}
function OBo(e, n) {
  return (n.mcpInfo ? [`${KJ}${Tn(n.mcpInfo.serverName)}`] : N7e(n)).every(item => e === item || e.startsWith(`${item}__`));
}
function F7e(e, n) {
  return _Ur(e, Cc(n)) && OBo(e, n);
}
function NKs(e, n) {
  return _Ur(e, Cc(n)) || e.startsWith(KJ) && N7e(n).includes(e);
}
export { tfn, R9n, I7e, M7e, Y_t, KJ, co, uo, _c, dR, MKs, si, D7e, DKs, A9n, Cc, nfn, rfn, L7e, Ehe, u1t, _Ur, PBo, N7e, LKs, OBo, F7e, NKs };