/* ==========================================================================
 * m0567.fsr   [m0567_0xcdd6311.js @ 1330]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
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
      ...(T !== void 0 && {
        startTime: T
      }),
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
      agentControllers: new Map()
    };
  return d.register(W), W;
}
