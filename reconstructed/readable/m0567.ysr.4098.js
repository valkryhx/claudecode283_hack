/* ==============================================================================
 * m0567.ysr   [m0567_0xcdd6311.js @ 4098]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0567_0xcdd6311.js  字符偏移 4098
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ysr(e, s, r, o, n, a) {
  let i = L(e, n, "completed", {
    result: s,
    agentCount: r,
    logs: o,
    terminal: a
  });
  if (i) YIr(i.outputFile, b({
    summary: i.summary,
    agentCount: r,
    logs: o,
    result: s,
    workflowProgress: i.workflowProgress.filter((u) => u.type !== "workflow_log"),
    totalTokens: i.totalTokens,
    totalToolCalls: i.totalToolCalls
  }, null, 2)).catch((u) => t(`Failed to write workflow output for ${e}: ${u instanceof Error?u.message:u}`)), _("task_local_workflow")
}
