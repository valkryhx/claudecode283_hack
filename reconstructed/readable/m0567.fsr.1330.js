/* ==============================================================================
 * m0567.fsr   [m0567_0xcdd6311.js @ 1330]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0567_0xcdd6311.js  字符偏移 1330
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function fsr({
  taskId: e,
  script: s,
  scriptPath: r,
  args: o,
  summary: n,
  workflowName: a,
  title: i,
  phases: u,
  defaultModel: w,
  workflowRunId: k,
  ownerAgentId: l,
  spawnerAgentId: g,
  taskRegistry: d,
  toolUseId: c,
  startTime: T
}) {
  XNe(e);
  let y = Hn(0),
    W = {
      ...vm(e, "local_workflow", n ?? "Dynamic workflow", c),
      ...T !== void 0 && {
        startTime: T
      },
      type: "local_workflow",
      status: "running",
      outputFile: ep(e),
      script: s,
      scriptPath: r,
      args: o,
      prompt: s,
      summary: n,
      workflowName: a,
      title: i,
      phases: u,
      defaultModel: w,
      workflowRunId: k,
      ownerAgentId: l,
      spawnerAgentId: g,
      workflowProgress: [],
      progressVersion: 0,
      agentCount: 0,
      totalTokens: 0,
      totalToolCalls: 0,
      logs: [],
      abortController: y,
      agentControllers: new Map
    };
  return d.register(W), W
}
