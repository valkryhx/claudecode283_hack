/* ==============================================================================
 * m0567.msr   [m0567_0xcdd6311.js @ 1985]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0567_0xcdd6311.js  字符偏移 1985
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function msr(e, s) {
  let r = vm(e.taskId, "local_workflow", e.description, void 0),
    o = {
      ...r,
      startTime: e.startTime ?? r.startTime,
      type: "local_workflow",
      outputFile: ep(e.taskId),
      status: "paused",
      script: "",
      scriptPath: e.scriptPath,
      prompt: "",
      workflowRunId: e.workflowRunId,
      workflowProgress: [],
      progressVersion: 0,
      agentCount: 0,
      totalTokens: 0,
      totalToolCalls: 0,
      logs: [],
      notified: !0
    };
  s.register(o)
}
