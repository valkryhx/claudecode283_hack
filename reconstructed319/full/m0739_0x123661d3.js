// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  uzn
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  Ur,
  QV
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  Lur
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  LIn,
  Eo
} from "B:/~BUN/root/chunk-b3jc87kv.js";
import {
  Es
} from "B:/~BUN/root/chunk-jmt91fq8.js";

function Dtr(o) {
  let r = h(o);
  if (r === null) return null;
  let t = Ur(o.totalTokens - o.rawMaxTokens),
    i = Ur(o.rawMaxTokens);
  if (r === "hard_limit") {
    let p = Pe(process.env.DISABLE_COMPACT) ? "/clear" : "/compact or /clear";
    return `Context exceeds the ${i}-token limit by ${t} tokens \u2014 run ${p} to continue.`
  }
  let m = Pe(process.env.DISABLE_COMPACT) ? "/clear" : "/compact";
  return `Context is ${t} tokens past the ${i}-token compaction window \u2014 run ${m} to reduce usage.`
}

function h(o) {
  if (o.totalTokens <= o.rawMaxTokens) return null;
  return o.autocompactSource === "auto" ? "hard_limit" : "compaction_window"
}
var v = 10;

function Ltr(o, {
  isBounded: r = !1
} = {}) {
  let {
    categories: t,
    totalTokens: i,
    rawMaxTokens: m,
    percentage: p,
    model: u,
    memoryFiles: c,
    mcpTools: g,
    agents: C,
    skills: k,
    messageBreakdown: w,
    systemTools: S,
    systemPromptSections: x
  } = o, e = `## Context Usage

`;
  e += `**Model:** ${u}  
`, e += `**Tokens:** ${Ur(i)} / ${Ur(m)} (${p}%)
`;
  let f = Dtr(o);
  if (f) e += `**Over limit:** ${f}
`;
  e += `
`;
  let T = t.filter((s) => s.tokens > 0 && s.name !== "Free space" && s.name !== "Autocompact buffer");
  if (T.length > 0) {
    e += `### Estimated usage by category

`, e += `| Category | Tokens | Percentage |
`, e += `|----------|--------|------------|
`;
    for (let n of T) {
      let a = (n.tokens / m * 100).toFixed(1);
      e += `| ${n.name} | ${Ur(n.tokens)} | ${a}% |
`
    }
    let s = t.find((n) => n.name === "Free space");
    if (s && s.tokens > 0) {
      let n = (s.tokens / m * 100).toFixed(1);
      e += `| Free space | ${Ur(s.tokens)} | ${n}% |
`
    }
    let l = t.find((n) => n.name === "Autocompact buffer");
    if (l && l.tokens > 0) {
      let n = (l.tokens / m * 100).toFixed(1);
      e += `| Autocompact buffer | ${Ur(l.tokens)} | ${n}% |
`
    }
    e += `
`
  }
  let d = r && t.some((s) => s.isDeferred && s.name.includes("MCP")),
    P = d ? g.filter((s) => s.isLoaded !== !1) : g;
  if (P.length > 0) {
    let {
      kept: s,
      moreRow: l
    } = y(P, r);
    e += `### MCP Tools

`, e += `| Tool | Server | Tokens |
`, e += `|------|--------|--------|
`;
    for (let n of s) e += `| ${n.name} | ${n.serverName} | ${Ur(n.tokens)} |
`;
    e += l, e += `
`
  }
  if (d) {
    let s = M(g);
    if (s.length > 0) {
      let {
        kept: l,
        moreRow: n
      } = y(s, r);
      e += `### Other MCP tools, by server

`, e += `| Server | Tools | Tokens if all were loaded |
`, e += `|--------|-------|---------------------------|
`;
      for (let a of l) e += `| ${a.serverName} | ${a.count} | ${Ur(a.tokens)} |
`;
      e += n, e += `
`
    }
  }
  if (S && S.length > 0, x && x.length > 0, C.length > 0) {
    let {
      kept: s,
      moreRow: l
    } = y(C, r);
    e += `### Custom Agents

`, e += `| Agent Type | Source | Tokens |
`, e += `|------------|--------|--------|
`;
    for (let n of s) {
      let a;
      switch (n.source) {
        case "projectSettings":
          a = "Project";
          break;
        case "userSettings":
          a = "User";
          break;
        case "localSettings":
          a = "Local";
          break;
        case "flagSettings":
          a = "Flag";
          break;
        case "policySettings":
          a = "Policy";
          break;
        case "plugin":
          a = "Plugin";
          break;
        case "built-in":
          a = "Built-in";
          break;
        default:
          a = String(n.source)
      }
      e += `| ${n.agentType} | ${a} | ${Ur(n.tokens)} |
`
    }
    e += l, e += `
`
  }
  if (c.length > 0) {
    let {
      kept: s,
      moreRow: l
    } = y(c, r);
    e += `### Memory Files

`, e += `| Type | Path | Tokens |
`, e += `|------|------|--------|
`;
    for (let n of s) e += `| ${n.type} | ${n.path} | ${Ur(n.tokens)} |
`;
    e += l, e += `
`
  }
  if (k && k.tokens > 0 && k.skillFrontmatter.length > 0) {
    let {
      kept: s,
      moreRow: l
    } = y(k.skillFrontmatter, r, QV);
    e += `### Skills

`, e += `| Skill | Source | Tokens |
`, e += `|-------|--------|--------|
`;
    for (let n of s) {
      let a = uzn(n.source) + (n.pluginName && n.source !== "syncedSkills" ? ` (${n.pluginName})` : "");
      e += `| ${n.name} | ${a} | ${QV(n.tokens)} |
`
    }
    e += l, e += `
`
  }
  return e
}

function y(o, r, t = Ur) {
  if (!r || o.length <= v) return {
    kept: o,
    moreRow: ""
  };
  let i = o.toSorted((u, c) => c.tokens - u.tokens),
    m = i.slice(v),
    p = m.reduce((u, c) => u + c.tokens, 0);
  return {
    kept: i.slice(0, v),
    moreRow: `| and ${m.length} more |  | ${t(p)} |
`
  }
}

function M(o) {
  let r = new Map;
  for (let t of o)
    if (t.isLoaded === !1) {
      let i = r.get(t.serverName);
      r.set(t.serverName, {
        count: (i?.count ?? 0) + 1,
        tokens: (i?.tokens ?? 0) + t.tokens
      })
    } return Array.from(r, ([t, i]) => ({
    serverName: t,
    ...i
  }))
}
async function qke(o) {
  let {
    session: r,
    messages: t,
    getAppState: i,
    options: {
      mainLoopModel: m,
      tools: p,
      agentDefinitions: u,
      customSystemPrompt: c,
      appendSystemPrompt: g,
      systemPromptSnapshot: C,
      excludeDynamicSections: k,
      mcpClients: w
    },
    detail: S,
    terminalWidth: x,
    localPaths: e
  } = o, f = Es(t), T = i(), d = await Lur(f, m, async () => T.toolPermissionContext, p, u, {
    session: r,
    toolUseContext: {
      options: {
        customSystemPrompt: c,
        appendSystemPrompt: g,
        systemPromptSnapshot: C,
        mcpClients: w
      },
      getMcp: o.getMcp,
      storageV5: o.storageV5,
      credentials: o.credentials
    },
    originalMessages: f,
    configuredWindow: T.autoCompactWindow,
    excludeDynamicSections: k,
    detail: S,
    terminalWidth: x,
    localPaths: e
  });
  return LIn(r) ? {
    ...d,
    deferredBuiltinTools: void 0,
    systemTools: void 0,
    systemPromptSections: void 0
  } : d
}
async function Jya(o, r) {
  let t = await qke(r),
    m = Eo(r.session) ? {
      ...t,
      memoryFiles: []
    } : t;
  return {
    type: "text",
    value: Ltr(LIn(r.session) ? {
      ...m,
      messageBreakdown: void 0
    } : m),
    contextUsage: naa(m)
  }
}

function naa(o) {
  let r = h(o);
  return {
    model: o.model,
    total_tokens: o.totalTokens,
    raw_max_tokens: o.rawMaxTokens,
    percentage: o.percentage,
    ...r !== null && {
      over_limit: {
        tokens_over: o.totalTokens - o.rawMaxTokens,
        kind: r
      }
    },
    categories: o.categories.map((t) => ({
      name: t.name,
      tokens: t.tokens,
      kind: t.kind
    })),
    mcp_tools: o.mcpTools.map((t) => ({
      name: t.name,
      server_name: t.serverName,
      tokens: t.tokens
    })),
    memory_files: o.memoryFiles.map((t) => ({
      path: t.path,
      type: t.type,
      tokens: t.tokens
    })),
    agents: o.agents.map((t) => ({
      agent_type: t.agentType,
      source: t.source,
      tokens: t.tokens
    })),
    ...o.skills && o.skills.skillFrontmatter.length > 0 && {
      skills: o.skills.skillFrontmatter.map((t) => ({
        name: t.name,
        source: t.source,
        ...t.pluginName !== void 0 && {
          plugin_name: t.pluginName
        },
        tokens: t.tokens
      }))
    }
  }
}
export {
  Dtr,
  Ltr,
  qke,
  Jya,
  naa
};
