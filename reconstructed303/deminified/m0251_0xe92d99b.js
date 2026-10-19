// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Jo, PMo, dMe, bdn, kc } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { xn } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { j } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Bi } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Tn } from "B:/~BUN/root/chunk-f43s8pq0.js";
class O {
  firstPartyPlugins = new Map();
  loggableMcpServers = new Set();
  anthropicMetricAttribution = new Map();
  emittedUnredacted = !1;
}
var k = new z(() => new O());
function c() {
  return k.of(j().host);
}
function iCs(t, i) {
  c().firstPartyPlugins.set(t, i);
}
function _(t) {
  return c().firstPartyPlugins.get(t);
}
function gBn(t) {
  c().loggableMcpServers.add(t);
}
var T = "custom",
  Lv = "third-party",
  f = "custom";
function Sie(t, i, n, e, r) {
  try {
    let o = E(t, i, n);
    if (e) {
      let s = Jo(t);
      if (s === "main" || s === "subagent") {
        if (o.attributionMcpServer = e, r) o.attributionMcpTool = r;
      }
    }
    return o;
  } catch (error) {
    return l(error), {};
  }
}
function E(t, i, n) {
  if (!t) return {};
  if (t.startsWith("agent:builtin:")) return {
    attributionAgent: t.slice(14),
    ...A(i)
  };
  if (t.startsWith("agent:custom:")) {
    let attributionAgent = t.slice(13);
    return {
      attributionAgent: attributionAgent,
      ...A(i, PMo(attributionAgent))
    };
  }
  if (t.startsWith("agent:")) return A(i);
  if (Jo(t) === "main" && n) return A(n);
  return {};
}
function A(attributionSkill, attributionPlugin) {
  if (!attributionSkill) return attributionPlugin ? {
    attributionPlugin: attributionPlugin
  } : {};
  let attributionPlugin_2 = PMo(attributionSkill) ?? attributionPlugin;
  return {
    attributionSkill: attributionSkill,
    ...(attributionPlugin_2 && {
      attributionPlugin: attributionPlugin_2
    })
  };
}
function hBn(t, i) {
  let n = H(t, i),
    e = {};
  if (n.attributionAgent !== void 0) {
    e.attributionAgent = g(n.attributionAgent);
    let r = b(i.attributionAgent, n.attributionAgent, T);
    if (r !== void 0) e.attributionAgentHash = r;
  }
  if (n.attributionSkill !== void 0) {
    e.attributionSkill = g(n.attributionSkill);
    let r = b(i.attributionSkill, n.attributionSkill, Lv);
    if (r !== void 0) e.attributionSkillHash = r;
  }
  if (n.attributionPlugin !== void 0) {
    e.attributionPlugin = g(n.attributionPlugin);
    let r = b(i.attributionPlugin, n.attributionPlugin, Lv);
    if (r !== void 0) e.attributionPluginHash = r;
  }
  if (n.attributionMcpServer !== void 0) {
    e.attributionMcpServer = g(n.attributionMcpServer);
    let r = b(i.attributionMcpServer, n.attributionMcpServer, f);
    if (r !== void 0) e.attributionMcpServerHash = r;
  }
  if (n.attributionMcpTool !== void 0) {
    e.attributionMcpTool = g(n.attributionMcpTool);
    let r = b(i.attributionMcpTool, n.attributionMcpTool, f);
    if (r !== void 0) e.attributionMcpToolHash = r;
  }
  return e;
}
function b(t, i, n) {
  if (i !== n || t === void 0 || t === n) return;
  return g(dMe(t));
}
var m = ["agent.name", "skill.name", "plugin.name", "marketplace.name", "mcp_server.name", "mcp_tool.name"],
  x = {
    "agent.name": T,
    "skill.name": Lv,
    "plugin.name": Lv,
    "marketplace.name": void 0,
    "mcp_server.name": f,
    "mcp_tool.name": f
  };
function gEr(t, i) {
  return P(t, i, !1);
}
function aCs(t, i) {
  return P(t, i, !0);
}
function P(t, i, n) {
  try {
    let e = y(v(t, i)),
      {
        attributionMcpServer: attributionMcpServer,
        attributionMcpTool: attributionMcpTool
      } = i,
      s = kc() ? y({
        ...i,
        attributionMcpServer: attributionMcpServer && Tn(attributionMcpServer),
        attributionMcpTool: attributionMcpServer && attributionMcpTool && Tn(attributionMcpTool)
      }) : e;
    if (!n) return s;
    let d = c(),
      anthropicMetricAttribution = d.anthropicMetricAttribution,
      u = M(s);
    if (u !== M(e)) d.emittedUnredacted = !0;
    let a = anthropicMetricAttribution.get(u);
    return anthropicMetricAttribution.set(u, a === void 0 ? e : S(a, e)), s;
  } catch (error) {
    return l(error), {};
  }
}
function lCs(t) {
  let i = {};
  for (let o of m) {
    let s = t[o];
    if (s !== void 0) i[o] = String(s);
  }
  if (Object.keys(i).length === 0) return t;
  let n = M(i),
    e;
  try {
    let o = c();
    if (!o.emittedUnredacted && !kc()) return t;
    e = o.anthropicMetricAttribution.get(n) ?? S(i, {});
  } catch (error) {
    l(error), e = S(i, {});
  }
  if (M(e) === n) return t;
  let r = {
    ...t
  };
  for (let o of m) if (e[o] === void 0) delete r[o];else r[o] = e[o];
  return r;
}
function y({
  attributionAgent: attributionAgent_2,
  attributionSkill: attributionSkill_2,
  attributionPlugin: attributionPlugin_3,
  attributionMcpServer: attributionMcpServer_2,
  attributionMcpTool: attributionMcpTool_2
}) {
  let o = attributionPlugin_3 ? _(attributionPlugin_3) : void 0;
  return {
    ...(attributionAgent_2 && {
      "agent.name": attributionAgent_2
    }),
    ...(attributionSkill_2 && {
      "skill.name": attributionSkill_2
    }),
    ...(attributionPlugin_3 && {
      "plugin.name": attributionPlugin_3
    }),
    ...(o && {
      "marketplace.name": o
    }),
    ...(attributionMcpServer_2 && {
      "mcp_server.name": attributionMcpServer_2
    }),
    ...(attributionMcpTool_2 && {
      "mcp_tool.name": attributionMcpTool_2
    })
  };
}
function S(t, i) {
  let n = {};
  for (let e of m) {
    let r = t[e] === i[e] ? t[e] : x[e];
    if (r !== void 0) n[e] = r;
  }
  return n;
}
function M(t) {
  return Bi(m.map(item => t[item]));
}
function H(t, i) {
  try {
    return v(t, i);
  } catch (error) {
    return l(error), {};
  }
}
function v(t, i) {
  let {
      attributionAgent: attributionAgent_3,
      attributionSkill: attributionSkill_3,
      attributionPlugin: attributionPlugin_4,
      attributionMcpServer: attributionMcpServer_3,
      attributionMcpTool: attributionMcpTool_3
    } = i,
    {
      firstPartyPlugins: firstPartyPlugins,
      loggableMcpServers: loggableMcpServers
    } = c(),
    u = {};
  if (attributionMcpServer_3 !== void 0) {
    let a = loggableMcpServers.has(attributionMcpServer_3);
    if (u.attributionMcpServer = a ? Tn(attributionMcpServer_3) : f, attributionMcpTool_3 !== void 0) {
      let h = a ? bdn(attributionMcpServer_3) : void 0,
        F = a && (h === void 0 || h.has(Tn(attributionMcpTool_3)));
      u.attributionMcpTool = F ? Tn(attributionMcpTool_3) : f;
    }
  }
  if (attributionAgent_3 !== void 0) if (t?.startsWith("agent:builtin:")) u.attributionAgent = attributionAgent_3;else {
    let a = attributionPlugin_4 !== void 0 && firstPartyPlugins.has(attributionPlugin_4);
    u.attributionAgent = a ? attributionAgent_3 : T;
  }
  if (attributionPlugin_4 !== void 0) {
    if (firstPartyPlugins.has(attributionPlugin_4)) {
      if (u.attributionPlugin = attributionPlugin_4, attributionSkill_3 !== void 0) u.attributionSkill = attributionSkill_3;
    } else if (u.attributionPlugin = Lv, attributionSkill_3 !== void 0) u.attributionSkill = Lv;
  } else if (attributionSkill_3 !== void 0) u.attributionSkill = attributionSkill_3;
  return u;
}
function g(t) {
  return xn(t);
}
export { iCs, gBn, Lv, Sie, hBn, gEr, aCs, lCs };