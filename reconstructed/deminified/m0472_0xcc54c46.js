// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { cr, XN } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { X$t } from "B:/~BUN/root/chunk-290k5gh5.js";
import { g7t, ra } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Po } from "B:/~BUN/root/chunk-6cq25d8x.js";
function w4t(t) {
  let a = C(t);
  if (a === null) return null;
  let o = cr(t.totalTokens - t.rawMaxTokens),
    i = cr(t.rawMaxTokens);
  if (a === "hard_limit") {
    let p = Ne(process.env.DISABLE_COMPACT) ? "/clear" : "/compact or /clear";
    return `Context exceeds the ${i}-token limit by ${o} tokens \u2014 run ${p} to continue.`;
  }
  let m = Ne(process.env.DISABLE_COMPACT) ? "/clear" : "/compact";
  return `Context is ${o} tokens past the ${i}-token compaction window \u2014 run ${m} to reduce usage.`;
}
function C(t) {
  if (t.totalTokens <= t.rawMaxTokens) return null;
  return t.autocompactSource === "auto" ? "hard_limit" : "compaction_window";
}
function v4t(t) {
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
    } = t,
    e = `## Context Usage

`;
  e += `**Model:** ${model}  
`, e += `**Tokens:** ${cr(totalTokens)} / ${cr(rawMaxTokens)} (${percentage}%)
`;
  let c = w4t(t);
  if (c) e += `**Over limit:** ${c}
`;
  e += `
`;
  let u = categories.filter(item => item.tokens > 0 && item.name !== "Free space" && item.name !== "Autocompact buffer");
  if (u.length > 0) {
    e += `### Estimated usage by category

`, e += `| Category | Tokens | Percentage |
`, e += `|----------|--------|------------|
`;
    for (let r of u) {
      let x = (r.tokens / rawMaxTokens * 100).toFixed(1);
      e += `| ${r.name} | ${cr(r.tokens)} | ${x}% |
`;
    }
    let n = categories.find(item => item.name === "Free space");
    if (n && n.tokens > 0) {
      let r = (n.tokens / rawMaxTokens * 100).toFixed(1);
      e += `| Free space | ${cr(n.tokens)} | ${r}% |
`;
    }
    let s = categories.find(item => item.name === "Autocompact buffer");
    if (s && s.tokens > 0) {
      let r = (s.tokens / rawMaxTokens * 100).toFixed(1);
      e += `| Autocompact buffer | ${cr(s.tokens)} | ${r}% |
`;
    }
    e += `
`;
  }
  if (mcpTools.length > 0) {
    e += `### MCP Tools

`, e += `| Tool | Server | Tokens |
`, e += `|------|--------|--------|
`;
    for (let n of mcpTools) e += `| ${n.name} | ${n.serverName} | ${cr(n.tokens)} |
`;
    e += `
`;
  }
  if (systemTools && systemTools.length > 0, systemPromptSections && systemPromptSections.length > 0, agents.length > 0) {
    e += `### Custom Agents

`, e += `| Agent Type | Source | Tokens |
`, e += `|------------|--------|--------|
`;
    for (let n of agents) {
      let s;
      switch (n.source) {
        case "projectSettings":
          s = "Project";
          break;
        case "userSettings":
          s = "User";
          break;
        case "localSettings":
          s = "Local";
          break;
        case "flagSettings":
          s = "Flag";
          break;
        case "policySettings":
          s = "Policy";
          break;
        case "plugin":
          s = "Plugin";
          break;
        case "built-in":
          s = "Built-in";
          break;
        default:
          s = String(n.source);
      }
      e += `| ${n.agentType} | ${s} | ${cr(n.tokens)} |
`;
    }
    e += `
`;
  }
  if (memoryFiles.length > 0) {
    e += `### Memory Files

`, e += `| Type | Path | Tokens |
`, e += `|------|------|--------|
`;
    for (let n of memoryFiles) e += `| ${n.type} | ${n.path} | ${cr(n.tokens)} |
`;
    e += `
`;
  }
  if (skills && skills.tokens > 0 && skills.skillFrontmatter.length > 0) {
    e += `### Skills

`, e += `| Skill | Source | Tokens |
`, e += `|-------|--------|--------|
`;
    for (let n of skills.skillFrontmatter) {
      let s = X$t(n.source) + (n.pluginName ? ` (${n.pluginName})` : "");
      e += `| ${n.name} | ${s} | ${XN(n.tokens)} |
`;
    }
    e += `
`;
  }
  return e;
}
async function a7(t) {
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
      terminalWidth: terminalWidth
    } = t,
    originalMessages = ra(messages),
    u = getAppState();
  return g7t(originalMessages, mainLoopModel, async () => u.toolPermissionContext, tools, agentDefinitions, {
    session: session,
    toolUseContext: {
      options: {
        customSystemPrompt: customSystemPrompt,
        appendSystemPrompt: appendSystemPrompt,
        systemPromptSnapshot: systemPromptSnapshot,
        mcpClients: mcpClients
      },
      getMcp: t.getMcp,
      storageV5: t.storageV5,
      credentials: t.credentials
    },
    originalMessages: originalMessages,
    configuredWindow: u.autoCompactWindow,
    excludeDynamicSections: excludeDynamicSections,
    detail: detail,
    terminalWidth: terminalWidth
  });
}
async function TKo(t, a) {
  let o = await a7(a),
    m = Po(a.session) ? {
      ...o,
      memoryFiles: []
    } : o;
  return {
    type: "text",
    value: v4t(m),
    contextUsage: yjo(m)
  };
}
function yjo(t) {
  let kind = C(t);
  return {
    model: t.model,
    total_tokens: t.totalTokens,
    raw_max_tokens: t.rawMaxTokens,
    percentage: t.percentage,
    ...(kind !== null && {
      over_limit: {
        tokens_over: t.totalTokens - t.rawMaxTokens,
        kind: kind
      }
    }),
    categories: t.categories.map(item => ({
      name: item.name,
      tokens: item.tokens,
      kind: item.kind
    })),
    mcp_tools: t.mcpTools.map(item => ({
      name: item.name,
      server_name: item.serverName,
      tokens: item.tokens
    })),
    memory_files: t.memoryFiles.map(item => ({
      path: item.path,
      type: item.type,
      tokens: item.tokens
    })),
    agents: t.agents.map(item => ({
      agent_type: item.agentType,
      source: item.source,
      tokens: item.tokens
    })),
    ...(t.skills && t.skills.skillFrontmatter.length > 0 && {
      skills: t.skills.skillFrontmatter.map(item => ({
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
export { w4t, v4t, a7, TKo, yjo };