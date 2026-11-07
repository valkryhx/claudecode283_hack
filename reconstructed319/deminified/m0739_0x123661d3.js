// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { uzn } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Ur, QV } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Lur } from "B:/~BUN/root/chunk-27h4st9h.js";
import { LIn, Eo } from "B:/~BUN/root/chunk-b3jc87kv.js";
import { Es } from "B:/~BUN/root/chunk-jmt91fq8.js";
function Dtr(o) {
  let r = h(o);
  if (r === null) return null;
  let t = Ur(o.totalTokens - o.rawMaxTokens),
    i = Ur(o.rawMaxTokens);
  if (r === "hard_limit") {
    let p = Pe(process.env.DISABLE_COMPACT) ? "/clear" : "/compact or /clear";
    return `Context exceeds the ${i}-token limit by ${t} tokens \u2014 run ${p} to continue.`;
  }
  let m = Pe(process.env.DISABLE_COMPACT) ? "/clear" : "/compact";
  return `Context is ${t} tokens past the ${i}-token compaction window \u2014 run ${m} to reduce usage.`;
}
function h(o) {
  if (o.totalTokens <= o.rawMaxTokens) return null;
  return o.autocompactSource === "auto" ? "hard_limit" : "compaction_window";
}
var v = 10;
function Ltr(o, {
  isBounded = !1
} = {}) {
  let {
      categories: categories,
      totalTokens: totalTokens,
      rawMaxTokens: rawMaxTokens,
      percentage: percentage,
      model: model,
      memoryFiles: memoryFiles,
      mcpTools: mcpTools,
      agents: agents,
      skills: skills,
      messageBreakdown: messageBreakdown,
      systemTools: systemTools,
      systemPromptSections: systemPromptSections
    } = o,
    e = `## Context Usage

`;
  e += `**Model:** ${model}  
`, e += `**Tokens:** ${Ur(totalTokens)} / ${Ur(rawMaxTokens)} (${percentage}%)
`;
  let f = Dtr(o);
  if (f) e += `**Over limit:** ${f}
`;
  e += `
`;
  let T = categories.filter(item => item.tokens > 0 && item.name !== "Free space" && item.name !== "Autocompact buffer");
  if (T.length > 0) {
    e += `### Estimated usage by category

`, e += `| Category | Tokens | Percentage |
`, e += `|----------|--------|------------|
`;
    for (let n of T) {
      let a = (n.tokens / rawMaxTokens * 100).toFixed(1);
      e += `| ${n.name} | ${Ur(n.tokens)} | ${a}% |
`;
    }
    let s = categories.find(item => item.name === "Free space");
    if (s && s.tokens > 0) {
      let n = (s.tokens / rawMaxTokens * 100).toFixed(1);
      e += `| Free space | ${Ur(s.tokens)} | ${n}% |
`;
    }
    let l = categories.find(item => item.name === "Autocompact buffer");
    if (l && l.tokens > 0) {
      let n = (l.tokens / rawMaxTokens * 100).toFixed(1);
      e += `| Autocompact buffer | ${Ur(l.tokens)} | ${n}% |
`;
    }
    e += `
`;
  }
  let d = isBounded && categories.some(item => item.isDeferred && item.name.includes("MCP")),
    P = d ? mcpTools.filter(item => item.isLoaded !== !1) : mcpTools;
  if (P.length > 0) {
    let {
      kept: kept,
      moreRow: moreRow
    } = y(P, isBounded);
    e += `### MCP Tools

`, e += `| Tool | Server | Tokens |
`, e += `|------|--------|--------|
`;
    for (let n of kept) e += `| ${n.name} | ${n.serverName} | ${Ur(n.tokens)} |
`;
    e += moreRow, e += `
`;
  }
  if (d) {
    let s = M(mcpTools);
    if (s.length > 0) {
      let {
        kept: kept_2,
        moreRow: moreRow_2
      } = y(s, isBounded);
      e += `### Other MCP tools, by server

`, e += `| Server | Tools | Tokens if all were loaded |
`, e += `|--------|-------|---------------------------|
`;
      for (let a of kept_2) e += `| ${a.serverName} | ${a.count} | ${Ur(a.tokens)} |
`;
      e += moreRow_2, e += `
`;
    }
  }
  if (systemTools && systemTools.length > 0, systemPromptSections && systemPromptSections.length > 0, agents.length > 0) {
    let {
      kept: kept_3,
      moreRow: moreRow_3
    } = y(agents, isBounded);
    e += `### Custom Agents

`, e += `| Agent Type | Source | Tokens |
`, e += `|------------|--------|--------|
`;
    for (let n of kept_3) {
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
          a = String(n.source);
      }
      e += `| ${n.agentType} | ${a} | ${Ur(n.tokens)} |
`;
    }
    e += moreRow_3, e += `
`;
  }
  if (memoryFiles.length > 0) {
    let {
      kept: kept_4,
      moreRow: moreRow_4
    } = y(memoryFiles, isBounded);
    e += `### Memory Files

`, e += `| Type | Path | Tokens |
`, e += `|------|------|--------|
`;
    for (let n of kept_4) e += `| ${n.type} | ${n.path} | ${Ur(n.tokens)} |
`;
    e += moreRow_4, e += `
`;
  }
  if (skills && skills.tokens > 0 && skills.skillFrontmatter.length > 0) {
    let {
      kept: kept_5,
      moreRow: moreRow_5
    } = y(skills.skillFrontmatter, isBounded, QV);
    e += `### Skills

`, e += `| Skill | Source | Tokens |
`, e += `|-------|--------|--------|
`;
    for (let n of kept_5) {
      let a = uzn(n.source) + (n.pluginName && n.source !== "syncedSkills" ? ` (${n.pluginName})` : "");
      e += `| ${n.name} | ${a} | ${QV(n.tokens)} |
`;
    }
    e += moreRow_5, e += `
`;
  }
  return e;
}
function y(kept_6, r, t = Ur) {
  if (!r || kept_6.length <= v) return {
    kept: kept_6,
    moreRow: ""
  };
  let i = kept_6.toSorted((u, c) => c.tokens - u.tokens),
    m = i.slice(v),
    p = m.reduce((acc, item) => acc + item.tokens, 0);
  return {
    kept: i.slice(0, v),
    moreRow: `| and ${m.length} more |  | ${t(p)} |
`
  };
}
function M(o) {
  let r = new Map();
  for (let t of o) if (t.isLoaded === !1) {
    let i = r.get(t.serverName);
    r.set(t.serverName, {
      count: (i?.count ?? 0) + 1,
      tokens: (i?.tokens ?? 0) + t.tokens
    });
  }
  return Array.from(r, ([serverName, i]) => ({
    serverName: serverName,
    ...i
  }));
}
async function qke(o) {
  let {
      session: session,
      messages: messages,
      getAppState: getAppState,
      options: {
        mainLoopModel: mainLoopModel,
        tools: tools,
        agentDefinitions: agentDefinitions,
        customSystemPrompt: customSystemPrompt,
        appendSystemPrompt: appendSystemPrompt,
        systemPromptSnapshot: systemPromptSnapshot,
        excludeDynamicSections: excludeDynamicSections,
        mcpClients: mcpClients
      },
      detail: detail,
      terminalWidth: terminalWidth,
      localPaths: localPaths
    } = o,
    originalMessages = Es(messages),
    T = getAppState(),
    d = await Lur(originalMessages, mainLoopModel, async () => T.toolPermissionContext, tools, agentDefinitions, {
      session: session,
      toolUseContext: {
        options: {
          customSystemPrompt: customSystemPrompt,
          appendSystemPrompt: appendSystemPrompt,
          systemPromptSnapshot: systemPromptSnapshot,
          mcpClients: mcpClients
        },
        getMcp: o.getMcp,
        storageV5: o.storageV5,
        credentials: o.credentials
      },
      originalMessages: originalMessages,
      configuredWindow: T.autoCompactWindow,
      excludeDynamicSections: excludeDynamicSections,
      detail: detail,
      terminalWidth: terminalWidth,
      localPaths: localPaths
    });
  return LIn(session) ? {
    ...d,
    deferredBuiltinTools: void 0,
    systemTools: void 0,
    systemPromptSections: void 0
  } : d;
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
  };
}
function naa(o) {
  let kind = h(o);
  return {
    model: o.model,
    total_tokens: o.totalTokens,
    raw_max_tokens: o.rawMaxTokens,
    percentage: o.percentage,
    ...(kind !== null && {
      over_limit: {
        tokens_over: o.totalTokens - o.rawMaxTokens,
        kind: kind
      }
    }),
    categories: o.categories.map(item => ({
      name: item.name,
      tokens: item.tokens,
      kind: item.kind
    })),
    mcp_tools: o.mcpTools.map(item => ({
      name: item.name,
      server_name: item.serverName,
      tokens: item.tokens
    })),
    memory_files: o.memoryFiles.map(item => ({
      path: item.path,
      type: item.type,
      tokens: item.tokens
    })),
    agents: o.agents.map(item => ({
      agent_type: item.agentType,
      source: item.source,
      tokens: item.tokens
    })),
    ...(o.skills && o.skills.skillFrontmatter.length > 0 && {
      skills: o.skills.skillFrontmatter.map(item => ({
        name: item.name,
        source: item.source,
        ...(item.pluginName !== void 0 && {
          plugin_name: item.pluginName
        }),
        tokens: item.tokens
      }))
    })
  };
}
export { Dtr, Ltr, qke, Jya, naa };