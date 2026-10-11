/* ==============================================================================
 * m0567.CTn   [m0567_0xcdd6311.js @ 4818]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0567_0xcdd6311.js  字符偏移 4818
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function CTn(e) {
  let s = e.args !== void 0 ? `, args: ${b(e.args)}` : "";
  return `Resume the paused workflow by calling: Workflow({scriptPath: '${e.scriptPath}', resumeFromRunId: '${e.workflowRunId}'${s}}) \u2014 completed agents return cached results.`
}
