// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { cr, NW } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Fun } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { CNn, ni } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { aBn, bo } from "B:/~BUN/root/chunk-wje8pvrc.js";
function QRn(o) {
  let s = C(o);
  if (s === null) return null;
  let n = cr(o.totalTokens - o.rawMaxTokens),
    i = cr(o.rawMaxTokens);
  if (s === "hard_limit") {
    let p = Fe(process.env.DISABLE_COMPACT) ? "/clear" : "/compact or /clear";
    return `Context exceeds the ${i}-token limit by ${n} tokens \u2014 run ${p} to continue.`;
  }
  let m = Fe(process.env.DISABLE_COMPACT) ? "/clear" : "/compact";
  return `Context is ${n} tokens past the ${i}-token compaction window \u2014 run ${m} to reduce usage.`;
}
function C(o) {
  if (o.totalTokens <= o.rawMaxTokens) return null;
  return o.autocompactSource === "auto" ? "hard_limit" : "compaction_window";
}
function ZRn(o) {
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
`, e += `**Tokens:** ${cr(totalTokens)} / ${cr(rawMaxTokens)} (${percentage}%)
`;
  let c = QRn(o);
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
    let t = categories.find(item => item.name === "Free space");
    if (t && t.tokens > 0) {
      let r = (t.tokens / rawMaxTokens * 100).toFixed(1);
      e += `| Free space | ${cr(t.tokens)} | ${r}% |
`;
    }
    let a = categories.find(item => item.name === "Autocompact buffer");
    if (a && a.tokens > 0) {
      let r = (a.tokens / rawMaxTokens * 100).toFixed(1);
      e += `| Autocompact buffer | ${cr(a.tokens)} | ${r}% |
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
    for (let t of mcpTools) e += `| ${t.name} | ${t.serverName} | ${cr(t.tokens)} |
`;
    e += `
`;
  }
  if (systemTools && systemTools.length > 0, systemPromptSections && systemPromptSections.length > 0, agents.length > 0) {
    e += `### Custom Agents

`, e += `| Agent Type | Source | Tokens |
`, e += `|------------|--------|--------|
`;
    for (let t of agents) {
      let a;
      switch (t.source) {
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
          a = String(t.source);
      }
      e += `| ${t.agentType} | ${a} | ${cr(t.tokens)} |
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
    for (let t of memoryFiles) e += `| ${t.type} | ${t.path} | ${cr(t.tokens)} |
`;
    e += `
`;
  }
  if (skills && skills.tokens > 0 && skills.skillFrontmatter.length > 0) {
    e += `### Skills

`, e += `| Skill | Source | Tokens |
`, e += `|-------|--------|--------|
`;
    for (let t of skills.skillFrontmatter) {
      let a = Fun(t.source) + (t.pluginName ? ` (${t.pluginName})` : "");
      e += `| ${t.name} | ${a} | ${NW(t.tokens)} |
`;
    }
    e += `
`;
  }
  return e;
}
async function Bce(o) {
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
    } = o,
    originalMessages = ni(messages),
    u = getAppState(),
    t = await CNn(originalMessages, mainLoopModel, async () => u.toolPermissionContext, tools, agentDefinitions, {
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
      configuredWindow: u.autoCompactWindow,
      excludeDynamicSections: excludeDynamicSections,
      detail: detail,
      terminalWidth: terminalWidth
    });
  return aBn(session) ? {
    ...t,
    deferredBuiltinTools: void 0,
    systemTools: void 0,
    systemPromptSections: void 0
  } : t;
}
async function Uni(o, s) {
  let n = await Bce(s),
    m = bo(s.session) ? {
      ...n,
      memoryFiles: []
    } : n;
  return {
    type: "text",
    value: ZRn(aBn(s.session) ? {
      ...m,
      messageBreakdown: void 0
    } : m),
    contextUsage: d8s(m)
  };
}
function d8s(o) {
  let kind = C(o);
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
export { QRn, ZRn, Bce, Uni, d8s };